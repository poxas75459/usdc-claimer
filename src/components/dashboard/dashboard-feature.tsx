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
    "7nxztJJqNJ49FgSZ6Ai96SCuwWzoa9Fq6P7HMzAeDXoxb56frnJSnVp7r3SNbtN8Et9jFq1v5sppPKR5VmbzKuV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PXYcskaMJ3YfDqYiuSr2kpMnm5vpTr57tPh3VQ7mbTFAasYTDakFAvgGmgJ3CAH9B3AUg5dEFtxNZzEZnm6yiXX",
  "key1": "3uJQsZS7SqExRxNdTG7YoifDNcPF6sWp3nh6JP6g57dWYuZWSwUcH6kThvA4yoN9awzVeJZmxhpwZqK3XSDVobdY",
  "key2": "35jHrvcUPcSxESW1n7CSBwGJDrpQYScsU4iBawyAMSQsL9W9zJv4eNccnFk3JfRKKqE7MnnSnzcF7XzSu9F8H2jM",
  "key3": "4g3ZDveV64c4C4bhZVemddsieDUMxSVE1WLyorM4V8r17mJHBp8Ba2vYusRBwGr6KjZytjeeWnjsieALyDaNknjJ",
  "key4": "3DWqxErpYvLc2KpjHh8gvM8cdMyW2ZALZKQ3X2q6z689pe21HpDmFn6z5QCGgCUkteRSAP5C6M6oGJUEXtLRE1GX",
  "key5": "4nofd7qgDfpm8Km4jtm87nU7zWyX3JxNqV8B3qqbsbDcpCHB32Z4D4aX7Kbfk6HzKyEKpUHX8JPKEY6EJ7PHgtb1",
  "key6": "eQw6chCn4rxfB54XAPBahfvXp62jGc8HDgiMcqU6rBNFdUcTBVfQt8b3ntyFgbuwfVwgBsqcYnyc68V7MDByJ8A",
  "key7": "58r1igqjpxjCB9KpCWSmhDFc86i8W3fEavimo6wkQiEPefLeBg6N2YEcq8EZ5puRx5L12NViXh3YAcNaT7gxJpAq",
  "key8": "4r8Q7MLA2rNN9eYYsZ9Ub1mBGxAmFWwPM1YeaW62iyCRbmfN3UKV6FJksM2pcM5r5RZt5Fz4gLr1UfgisfAZ5Avn",
  "key9": "ifpahF8huDM4e7y8MMmSQ6y89Gme5qmefHzvp4ZcD3onbHhLkJ3uvsSB7He1unRHT2xaXAAgiKM98LGhFQTdnuv",
  "key10": "5bVw4oSKuErc61kghPDoi5gkLsdWwhVcx2MyKKQW8DSgFQwn7ypyECb283782Z6q2zJQdViLnQetG8DMDbVgZFG9",
  "key11": "61H2L9GJHWCAAzFAxuNAcJ4Ujf9uTj7qq5hLqSPKP2mB4MHjK6oa4F5Pc5fs2LfzHJ1Bpo8pQ3bK44CWGXHSSuz3",
  "key12": "yJsTRwjWJu67UXYmXSVesm63Tz5ZXbcg2XGF5N98u4KcbSMp7Sh2gadA5uTrpwwHZASnuc33pPdniwkeL9uXKxe",
  "key13": "ecnwKyQo4QwrXuLvqEZCbq7kogPGYaSMa6VY2d5dbND1W89vazhhEsGaKe12t2Fk8hn94SANkFSSijY4GBhK6Zw",
  "key14": "3U2qRAhaHtXbqK727aSDD97HaNfiA8GC7bYDKsAmXbpx7Ue28qEW3QnX2J96qCN2CVc9iBUSRd7ejbzCFtHPhv4W",
  "key15": "5WajESLBb15xJoggotSFCdaYHgP4B7qoLkqEcJ5VEUDqzfkpH6GBfa5zwf5NzZiSiUcjDFvALzJHJfAJmjNoPe6H",
  "key16": "59HGN2D8YNPw3wi6sE9jSoAT5uypwVfEip4x1smpTq56CsZFe3X1L1ReAzjBtE1K8ea8wWUVNhykwpRCqwqJqHY2",
  "key17": "5Au9XStkXqoTvJk1r8UvJdCqKhe2HfcTpAub7Xi1ceEPsE1XuvdDPnR7wW8BGR4AtfUiGz95i7BXzPDT9EjkqBWh",
  "key18": "29Scf8TZ6Ffyfu3yEKr4pxwUxZAdVJxEAZ2yEKH2S9NiKK1mpJJiQJA6VcEAKRNhZ3edPEwFyH4b2kEGz2M2JM3R",
  "key19": "3hP4BrAdRQfBnMAYKXL4HnTXsRE8FLLsqkBUiyPkKR8WvQnK9dN4VD1MTDGraHAy2w6bnQM1sMyVCb2bN1BcggoL",
  "key20": "5j3do1DEg53z5HB4yj4etrf8Ac7UwgmdRN5n8P5Hn2gTwzVUAy2RYBQWHuvYcwTXzQReDYMnQuixE1LgGKzqZRwN",
  "key21": "2Knsr2m5kxTVGf1EGm8aXVmp1uNNhEHn58mP389wZaPLQ5CTDhL27n5873McWUEXeY48BowtxYimN1yvVMwryvgd",
  "key22": "4WRstgfqjS19bWi3cgZAPxVMpg7oJ2kUUDdEJnjpFMpg6boD3uu7UnyZzvpYygwA9jqpYK2XJ2B3bLUQheShpjoT",
  "key23": "2QkNsdcDeKNAXTMNNzpfHkK5LEYN9JYdpM7wSYEHETkP6J6VkWJAWGbr2MBNxp36LDrhZVXoekkFzrppYzycXZHL",
  "key24": "3VjistPiimVzUHfuj8AGv8F86EJbshnbMCrEAF2cJpEWnMkoJvBzq7nYVZAPfGmdLPUkQ5yCYY3DqCrh2kXedEZ4",
  "key25": "2eanWRh2dFTKdN1iRdV4iG9s5SG3QSdQvSrmCKuSHiucjcQ5NDaCfB2K62nP7P8Tr3NRsSuJ52C6XQC36AYhxKxd",
  "key26": "5qQDnedkLg6Y7T5djMwy9UyxvTka1EELqbw6XwUm4J4AcGgS8TaCk8w9zXT8HCgJd1QShiMtkJqgce7xdcZoDFUg",
  "key27": "5hBhtth5QDBwe98iW9KJRDSMAkdS59ahD2RmmoNvFPnZBAVkNfFwade7E3XHoN4BFP14yT55fvNUJ7efhYtGQops",
  "key28": "i9NoVy4Ts28sV6L83BRe6gmPwn97DiQbg662pKTiJ9kehgYkjiWpEprAaUcJF97SEACrHfB44s2tF4EC6yWTuHs",
  "key29": "27VYFv3idFooC8kzsfMu9mooCgsQnDE58gfJif7KT5VQdLfJoGKVUfNpyeAqBWLbFZPfRi2vrTbJej9FineQmSTW",
  "key30": "2V6m2DGLVPhdwTKcd5PM3Kq8UdweHe2uKi6Mdr4YU2dvTibp6YjcYnEaRotyTpDhK5PH7v9yknQqH8AEwohocAfr",
  "key31": "4uNLYp9DEBhEZoEaKQ4CW8vJBoDDueBt9Jdq3iBBSFCmJeWjtVUj6s4YemvvJx3coJ6xFkr83GGpopyMPF2inojV",
  "key32": "4Arbo7ZVHhRHiwRcsVgcihqoLAXcdppt6UorHeVhzicff6cpgW9KgY1z484NffYZvNvaVzpD2Df9toxAFtD1twDY",
  "key33": "5PmRAHCvfLJoN1qm6Y89Q6j2zEvAy4ofR8hvP1KSAWNRxJc7V7rpCaenpmuCRAjAfqLBBojchJ7fnzPiGygz7qTu",
  "key34": "5C4yJh1kYNm8Z4UFKN3h1TA9YBL3T8j3KvpbrmDBdbJAbtXRAdSq2ZmJ16uZQckV4dJ3u95onbAAVWoQnEJx1x3f",
  "key35": "394qGNcRqFzQvqcgMEgJDnus3t4na1VKhPLqpcTuQKEPNq5DiVhQsefP3YWPMYAM8DJZ1jqzBdqbcubTRLjdqj3h",
  "key36": "2WcSBDkXDA5jbGC6eTfr83WYRjq3fxFhWubAu1q2XjPAyWD4ddsLNBr4ADqDyqZzX4Dua247A5i4RB6BhgcMAso",
  "key37": "39mWdtDzEaEh53qAxAv5kZaDjd1zvNvZVvqM9oAYd39Xhjj6RfMa4KZRGuND7RKpS8JukTLQD2Sqs69oYSBLFAGH",
  "key38": "3Bx2d2NQNKm6i9mxuNSf5pFpdd15jpUdLWY8ZPGMYVD9ijgXEP4Q2vJtF9NRnH7c52aMtBS1KAZhw2MfPVkco7GJ",
  "key39": "EXsgFNHuabKntwCn8dMHCCNpLbK8U6GqmZMB7dU5ukpUWNcEDVNXhoWHWNh6YJM5kFqkvbZatQWNPcjJkyiPBiw",
  "key40": "5jpYM4UnsdiNRu4vW4wXwF3yE8C3iBM3zTuyqVhruBTTnzkz9cBBuyqLdeppzxkZXtGcVAJF1CFyvouEY78rMCTE",
  "key41": "2fFgzKfU7cBgrQHNNcQfMzzn3UcViYSCvy4TQEgXrYsqGR42fzicqmiiuuL7vfXg13rck2kxAupMtV7AbcHCAx8X",
  "key42": "s9bH2aemEBcMAPkSrnwnanudPLo5AgUaLUUTeY32HJEwHiHqEt9fevif3qXL4P4zCzPpNAMqeYxpHv2w7JHs61i",
  "key43": "52pvze4SNNBhvyusCWJdvmiaAPpCLHMtLHgYAE4iXoX7f6timU4gYnRTjB3dBcq5UjdanVjWL8jzufJvvrM84K4f",
  "key44": "TQKq3ohU82w1kinwBJr3KVkVwaGKhfwEsVXrCS97WM3Lge5X3jYWQqyPZdtiL3LZVCVmPbaBiRDEMXEQvR8i7ao",
  "key45": "4VsARgPtzhGjMW6TCubZk4dEz31DLpSd3Z4MnhY8krBH5roJD5wXiWZHTzjuvtcEVNgLdo18PKDgtQJNoEuvBFdq",
  "key46": "34mhhkqzoMoWj6DgT9TXC2Yx9MA1KQ4Cq26iDMpkMgxxLPAF6kVk6cM934UxyEDxYM5bDne9v8BDYNAK53Wy3TH"
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
