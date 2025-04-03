/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "rHXdGrRYr2YZL2faarGLoA79TvDctyuoohR2nEaj3H4crriAgB2frYLhsRKhnbeT4UKTnkMnyCgoygknWuUxPBC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yTRxoGgcosutjNcS4ZHWCoLiA7WDbRWEVSdMKe8GFtgTfHTFZBuqoHPSfBaoDMbTEYdn36Q43WN4h9hnY1ioWJ7",
  "key1": "5sbwaTyL3LC7qncvX3hS5MMqTTBeXXbHLt2Sib9npLVkzsCBF83An4Er63tg6FhC5a8QgeFnbLUiWA2PjFRKp479",
  "key2": "4MAkKoCFkiEYoC3PBZDCPMuB72fYGh5nHiUHHrqA9Ub3jgKk4i13AMwkXEwBhWLEpzJdU6CpYoGoScKetbRBQocV",
  "key3": "QsDJ8tPp1uLJvUdo5eZTpHVisJiFGF6ChSzUFtqnRMwHbqYMgAAhmfCSdLPjfgV2MeaqhB4v3rfki8Z7CSn13rH",
  "key4": "5RSK1veBcDr3cPCd4po6kdSAs6ZxKL6msNoro9Ld8jgsTQUa5Eodm8y5V8kNfHx4LCQKH7irfvC16oVNqbEcv3Z4",
  "key5": "29uEsorPdrqFSdQNZKcq5Sxokq88MUDm6DygpPZ8R61eHpmo55ot9SVohtP4dKPhLBhm7VVhgLGb4UMgpfRwWUCF",
  "key6": "6FduCNtdyZcRWozt6G7eWcfxKXpeWmbSH4nt4mwqSnnrWaZPUMrMuFL3MNc21KgDRmYAANVkExoJV6owT41nbnx",
  "key7": "4SHjWKnuExMQkztaqxMGAjzisfW4G3dax1Qs6DTNnQQiswEsANuCmsurnMLRpHxd244UngiRn3u5xef3Vv8q5aSd",
  "key8": "4ecZyGPipK1ahbMHmRqfHsQtJD4NLbTKMUJCjPUMTZaLENBhafRHbdqQjNMZmW4ifEM3FbeEKV6F97Z5e2kgtHBY",
  "key9": "3u9ccJBM82udrnwLohDzAkCeHFk9YMZwcHDpaU2EB5ZtW3Y7CJYJ4571UvDJmwBY3uPhPd6Ehe5sbG2ezhJ3Yse",
  "key10": "3U3K43rWU1iPvFbCFk9dgY5JQeRa21wR3NkSgmuJLdSKo49qKYVYPmPV9ad1is8f8vsZh7eiFPUzJdPMUWvxA754",
  "key11": "d3XPim9UEQ89WLysv1jXU3MhcnyiqVMYFKLhmk5PGAQTvbxfQvHxf5TvvovMemVuqPPCFo9yYiihP8u1PufTX7L",
  "key12": "4epQARy3S7nYUnNkPrRv8kLretmP5hqDhnberRc7bFwxEcxNVdtSdBuNuwgqYz7KJM3iAyNoZ3fhZyTvaNRAzsPd",
  "key13": "2VUkqaQWMJNdFX5UHeN588HLVi3ZzVzYpPZbroG6jZduSBRtsw6bWaFziEvENghkKtkSuGQ1sZWcz1SYkqLSaeWA",
  "key14": "22o5jEoJcwCsd7HJrT5SVrEHgsJCuBBfPPYBA3zJzBn1mSCJRJWtcbHU5MLHRCy5jXv85STtrXntQ94c9Y8mzYay",
  "key15": "5cdmDEdPdFN8eMwoxAqysiC3JL15epyoj7KJhzjxPfG8vC2i61Yc7Rub1amj9ajau3iwxUgqsJm7PkVyTXcXjzpb",
  "key16": "5WhDtBWgS1rD3NpxGa7TSRUZK9ZKGwn2Gn52Sehqmad1Nmfjpr2ZhNc5jGyPnYMZr85TrQRneitv9iyAGMVjGPC1",
  "key17": "2PWTyyEmBUmTz8u1BhnGPnei46qbzCBR4VWaYp7E57NTKxZ8QnQY3XpKYiuts6v9R1ZxX8uJ7VNQGGSNyKi2FXnR",
  "key18": "3oFG2sYsQZCzKjyi6bhwoN2ZUAzVxSre9UauBTKMDPmkTDC335L29S9zY5Qkr2Mgr1oigR2EajcMNfUMjLkwBkeD",
  "key19": "GKjRnzYKAz3QmBXEZtaCBA7ush5JxncSVwHJYThet2rxGgWRB1Qpw3G2vxc3fCctaaw64gB5hAEtuh3v6NLSdcs",
  "key20": "33s1VJcY1aSSL5Z1AKCBoL6ASStvTsbcwLGi7tAbQi8GWvYSakHSotHLqgDUqb8MMTzypvEarr8d9czR8bUWEZX4",
  "key21": "5EdayXTc1eErSHibn8gw4goB96qXzZC3oCHNH23ef7G5J699FFXbV2Z2epga4w9LgY47rHSLp35Sv7DVN7xQjBRm",
  "key22": "37GytCveBR5HJcyDTviW8FrpqMKfnufMvVUTSBKn6kAYGCw3zSrQsPuGbHH3zdauWycqYNQWane1RoEabgtwYN3K",
  "key23": "5hmU72iuTrRueBgrhoiACcFTrrWogkYwJVYjnFjhVGbeB2fdxfjAcnQEcFZMmEB7Zsqx2TGmRS3s8BWgQZRoTKRA",
  "key24": "5c5bYicqJDUcpoLvQfrSe1HzDu41L5doxbjQ8FAUUCzvrtpVp7DzogNbcnEzHaScfDcVRkWR1rHbXs1nNwpgwCRZ",
  "key25": "4ZmpPBm9YVmM2pGrugQq6F71RiC3wS2RxyFghSCPwoq5nem7jiYR8maE3dc37egMd2M7qiq4cGC5VxHKGTWNjddM",
  "key26": "2iGMjbzegsHKaTxzQXHkYBNVtHNqxhRKxfpMMqEdy8JEyonD1GMwvbt7UrpdQAhPJetj3wEzFqt9tAk4M5dksVu8",
  "key27": "28jchAqcYXMgjyKSUvaSD9uqeHQJZNABDxEbtsKcVfWaJcPWzjJfe8qravpdVLbeyAuTQVCScmPYWqjrmMjci1YA",
  "key28": "5qTaBsGxUcousSuvgSasyjMHNEVaRVbJffwgUk5MHyVkf7g5ia97QukAQprUrfSgQE2fy2Wp4hAZ7eTtUpLDz3Nk",
  "key29": "Ufj2gmupJkTNtaER3fLoJTmDLwvYcXswr3wfVK37xJsXTUHL9qpjoK3zmFtXsTAPvMYcbdKBuDAZSE3FdkJc6Xt",
  "key30": "3c5zyvcoSgyZuNLMzCgZ2ZKpeaqJ2RztKPKLquoLTdsFTtLDSc7WGMPQYvpMacQKs5EFKzNJLYZkNMiWRoXpRsgD",
  "key31": "2goQHej3j7XhA4NHGN8Wg7aBgDgprWrYvHpeMoXrXnxfDte6SMeJ5bsZrvMqHugypsbibg16jnFejcaP3fvQmgpX",
  "key32": "5e5GYUmehayjQgtTagD2K674Yg9G82QQyZAesLTYeJUeHtYYYS7r5eVVT4wrY7UBo8Kieob5YseyefBkCjequ33F",
  "key33": "4q58S5nU5thJrs4wbrQftsDqquzoFu5BHoExcj53BCrfX2EWMKXTAkgekTSESiQyneXNQ4hEDHvd8Zf9PjRGzzYe",
  "key34": "3tQrYYLM4tujVFFxMQ3zDZqFGYvZKqNX2cjZqaS3jDoVLXKt8kTbMTRRgs2vDazU46A36AW1NhFWEt9i6mjj2dBe",
  "key35": "4hxMScanzuwZk6nj7SS8VsFCbqjaaoVNMRmLtBFqcTSh3jvUA6NucAuaFAtxdFB11UN5d6pX14cD5YhaUFLSFCRV",
  "key36": "5K4Du76nd9hgWHhkdk35U48wvxBEQrRV4RC3A5Xz6xyeYHRiwUNFg2gztraTfFuVaNQ2KcGZDaJb3uMhdqScgtzX",
  "key37": "exEgUq5A8vpYnHrspbB7o9LoLnk3aGpaLpskKjYHVnCxMrGbQfQiZ6JAcQLDxkNRxANoponrdqyF7HnasRcB7Lu",
  "key38": "3EAGQfBDwcDWeTbGuA1D9moUYRRMNaNwmNQiZYhkZo4dCtDc9M1LMGyjHmGAxnftMyvMj26RrHnWWDWmuBy6AnTT",
  "key39": "3ZvFvw88QZgd2w4mTp2XLaExXHRfU5dWyfiW9oeGvoASAdPfKEr5mKdhDXt9vRTnfiW2LzUVZmuBv4qxe5GPB6sh",
  "key40": "2mkKddEGmjjBfexhC7YTzp7x2L4tNtzrThSs9aZAoXxJFpcRcLFNm1uJ1dSSxcuvbar8gTZgQcfifKzno9QtBTET",
  "key41": "471eJESegTB1o4voGC6yoq8eBbh9NchT4muxp4FWfpKtpDx21RDLYqeBDGYty6stuXLJgFd3mGFYzdj1sE2JZ8kz",
  "key42": "35ZGZPXgdubGhG1boqqeKNFhaqzEv2vz16w98Jm1rBRzTPTKY5J1jQ7GTFTHcYCEv7JN2St7aTyQ4fAjWwsswAHF",
  "key43": "5xmyvWQbPE5MgfbGXw4AaGqCiG7j6AYQ1ifDtFKfqxiZTy22aLjQyMLZecHe26RivBd15QJyDPAzz9YsuqvSgKyt",
  "key44": "2bewcY8KYYA3dE8eqkYQU8yoPyzU7hTcyvpKMKkZQGxfLg4xmnvh3wR2KU5TgcCgtR6k5HLtQZkvEvBiTeVz9LzN"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
