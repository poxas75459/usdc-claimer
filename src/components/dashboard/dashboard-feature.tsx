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
    "eyckpcnFBPZJEjoNGKhYp2gThHpHyc7MWFfymWy7jJuTYxLSsF9KhTt2JRG2ij1gFDKQ5gGRbrUZdZM1nNYCvQt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pymS5BjFh7aec1Ky5G5ZNVcLFNcHGdB7vMqSuSdnsVFb6ty3fDqSsmEjHcNJG42dwZdgodGADzJvCjUHDWpCGXB",
  "key1": "2BdSnLUJxA7MroYgLLJk33Tq5efnzmEcqdt815WJjifHpcXb4ja3zUvMy6TEgEZA7xodjUXnomag8UUFNYQmxwma",
  "key2": "3zwVLxFUwWYDXi8KZC9tMHiN4J6ERdEzRyVMM87PUzmmhMc44wtjjrWdyfcKS9Vv2a2w3gcEZhM3gsqmm8yyzEkY",
  "key3": "3eyxniCJY1Bgw1qP4UAHvd1GT65Nmrtu1bRbqKRacySU6fPCvhzvsh9xmis4uo7HxhGnraBQ6D2p4NhhwDtF3if3",
  "key4": "2X6scLpzu1EHNF4zbGE6dNo99W6Y7MQ3PgonhD6u9RREDSiSEkRqaev8WZQdqddCZFUUWfsXMucgQ4MYL7uiUa5B",
  "key5": "4FKpHAWJpwncRiQ1YQ1B1RA3QBV1xNUgEDhTkKTfGXGHRrQAYU82eLae14B7kksRv3Zxdm4vnhoGdYeHj7tWTBeY",
  "key6": "4dYGBhdr6jwS6pF7Mp829X3UvdTTpiUjR1RxcsJoPhiFo9ZL23DSEiFmmv6RVdu1fh4ZETmLafS7xPHR6fPAbWhQ",
  "key7": "5LUZA5Kb7cT4B1CwZd8VDGfZ6BHM6SRRWuBjYK37EZKq3j82hqfpCSU9BHaZAWDFtW57M7Rf2ny8qy4jM1fyTEFg",
  "key8": "5Zo5eGnxm4TebBxRBsgACnBpSAGXHtVE7MXiPELcbRDMquCUteSbzoBN8ysj4z3v4kBLfpmqZLu11mEHp9AEHiyb",
  "key9": "2mdHuiyvAxmmWf5U2BgxDBYd2Kjy8Trnene8Q5UNeAFrRxNtWcxjKk8Jcx1th3DHmFyBwM4pKRWGx8ytQRM7Vx8y",
  "key10": "2hzdKEBqckvLVjSgBDWqHyUfS7Q7mzPLsxbuSoViAMVH2p7Ufo8Z4S2yh7s5bDmhfGdMVpMyPqMY3H16zAvFt1MN",
  "key11": "4YRzqEtg75SXqQDJKMhySa5Zpetq27eqsqdKikLPdxmsa5gfLYvgaz7P22KLnRVEB1A6ZkzcUitLeWxd52gGjCTa",
  "key12": "5UTYQ73TecioEKzrURjghqSDAwXDCEwDQ32LUcPPuBwfPtGtDbLEPopmZeCbJ7GqyKr7g2adf5hC268b87VSMqqf",
  "key13": "dZ1dkkJKjYVofU5HPcq7UiKZsu2o1eSxNZTVTLv2xX2i42LNdqVZn9J1K4pjV7jaMv2MsbcQxQPqDrbVV8wp4Ht",
  "key14": "3TPjv9kVbtV3LRa63vBu3vSgntP93xvazcspgRQ6RRwCFmEJHpPaKhP1tRnnct91USmQmUswkak6JD4pYH3oL2wr",
  "key15": "5nwXX4i4P3gYpoZfZeKQigJVbyBu9RffLXGfUwN121auybjH48xE7EGs6aetoQmNqiAdsE6xrxKsaqiuDruqa3iF",
  "key16": "2T7bgip5WKhfeYKQe7V3G1SE5najXYaVd6fa6azekLG6ktUo6i3KQKEsz232KwBXFATN89VpjYvzfPDzBGu14woQ",
  "key17": "32naLQoXV7aMAuF3G7jsyatVUFkmGpoaRY8bh1K1uXGY6UKKptmAZnwxqCwv8wQgDWRXL8t2uC8KxPqDCMqg5PWk",
  "key18": "4y3aAQ9JcUn98Ku88x5cUAAFLsRso1m3knowf9WZ2XvNedymX6BkCAJJjU2gZeUkLMYGjuRgL6hv7xkFtadKLJCF",
  "key19": "Pz21fVXQZrdW2ch2uzuUcpQa859oriRBvE163SG215C8s3LimoCZqLRBcFWt9D8Z4n6NykosqFrmJXMPLWWRokA",
  "key20": "5hSqjN7V126FA9VxWWjbHP7HtHycfDd1qd4zdrH6fJVW8jSWUZBABBZSAWeTsALFcx3KHrvzo5NkkCF2ixXoMpFt",
  "key21": "3vu6wb4CMMeptDjJEtgGdtMAQb3g4fL2iDvwR5obRYGv8XQZfbG82ACSaw44kpW2H5zkopzmkUXz2R1shpHerGXV",
  "key22": "4SZpHFhVDQT64tcJDWzYqMBpiWTHKwgDvQp2yt7LnDcrEXVHj1cHRZ7qLVwPaTSSYjFeShRz9j3z7Ry6DnEkC6kk",
  "key23": "48TBxemcRB4MQ8scrWoVhVMzigN3gjnyuXHgKWnwqkzJDF22pvbXznwT1wunQ3bxYhD1aENfN7fJffD2UZs9nenJ",
  "key24": "3Jt9m3GChX4Qrpqnj72cdtuwvvowfLLKPB7iSF2okNZuze5XfcXgCbwGm48moYAgKYL5s66HQN2wzhF46yeVDhwk",
  "key25": "3QaAytziGZdRPnaqZYPBvKotToNY5Z6h7sGh28oDKrCC6q12h6RLPXVBTDJjWesNaLiqpWVhmpZLwquxmttmh5f3",
  "key26": "2M8LkFPBpBEvBxUsvGycpFSEBBpUuQwxtJZzjXXWLTwnF4yrvMh4Q4QXwXUgNGgyXx25Bbrm11EurjVooMZhcPpL",
  "key27": "5kW6JpCiVkLyBwdKrRTQqTrQhnuSWXUJxvz3NtKofbzDW3ex8cTQ4FEERmbuUsJg4kwjihV3M1vRrGZtsBV6Wxxy",
  "key28": "3DaXwjA6RtvVVRmTAbR2jPKVJoqH6Cv88hqb5b9pnXenD4uwQvU7E781yZ1bzZLNjpKkj466qZaRcAhoFyUpNopB",
  "key29": "5vNiiRAWLtxfNxPsjzm8tZHKnyyxMhAvt8y5a42vUuTz6dYeV45ngjYJ8wxrNzBkt9EzKBGDAzACJHfZbytnr1bt",
  "key30": "pox1VP9ZTTxVQ5yC81SVLehQejMn8Ftsd39Vie1CFZEDHcyCeGzFzLNRsRPqJrgBdmqu5Sx8ykUerbbbRNrZV3Y",
  "key31": "5Cn8eZZSn81PLKQw9wuQCBapYdxD371E6F1nLZMK2SgWr7SEWVSNVDwChzyNq8WLEHnX9TPKpWmEmsGett7icasj",
  "key32": "4nmFHm3z46ABPLaHQHVX1ejQyXpJiXWZE2UAtBwLHXK4cW7KE4Pu3e2HrssGaZZsdj3HZWgVdCwzBbXYYRV264Jn",
  "key33": "4jRgEiFLRpk13dWHEGZkdi1nN1V7iUn9Q1aweaJnjXMDm2pPn84D48kEp1yGVDmKFazRZXqW85VMkoCHAzc7EY6v",
  "key34": "PMt4yzc3adNC913UXiwvzi1ZPLK116bqcPtjVukxewH8s4BphfH83tw7qvvbvFZSpcMcUCiL2Ui8qG4qpBVAvQG",
  "key35": "nieRwofoZDe6KWofmHHHus5rqxGJ2nQEyoCpFbmX1gkMAEFHBiPwARd5e3gUFcXJWuk4Wyj5oz3CB51bUVCjymQ",
  "key36": "5oxn19NZ9PK9H66p1ydfWFPnEneejTAh7h3BRhfY7AmPzyLwxrFrPS1MUHbzmHbix4puSgjL9685T9Zt4k6n2wqs",
  "key37": "2TspJMnCSzFqA9iadc29JZZb9k2XsEJuCngq35G4NhWYGYGHCzvhVWzo1NDdUrK2J8raoYXZMgcsni5Yc6kvH14i",
  "key38": "5cvCKjUAw8KmszUE7hqkt9hzgxMLSdvLBxPTtX1oofXpvj5Jvdf5Bnn3ARMiBoUshivWGCfgj5QbTsi8Hwc9kFkP",
  "key39": "4CpC2jnp4GG5FQ627PrqEptTQZtVs2pnyARPLJJmKJShBJkmnZcu3FPo4vc63z7e7b16yF5XRQZpNwqo77Nz4nDH",
  "key40": "4CfYn87ED5bNTogwVfbpvQYQBZxRLhdaeqt7WrBB6DjGhXJYVDSADZBjWLVixbePCo5e4itzrkxvxsmcXhvN2Zt7",
  "key41": "4Phc4fQ2vw3KNuZhnpfETPs6YaKR5Khq4PBT5Qo3dRSjbJ5Asi9BEtwAoxfcRPByrhB1sD22AUwvobc5Fg8WoS6C",
  "key42": "5tXyTzbQpbrgoQU2AziEz5aDJ2a7arzmrpCBkHn81M5bGX4yamrEftduaGLGBmiYuxmoXUeL8uSxh1FyeqjFx6Ke",
  "key43": "KQshU6e3vaKeYz4bSvP6N1Hfcv7L3BGPsNfxgFhC34fW9FoNGoexi7nAjDTBmCMJGSA7XvEfuNtfyKpepuSj7e7",
  "key44": "2bnbS7byrvhhMD2k9Fp4RJPSfhbpKF8GYM2VbXqiRJ9SM5UxhpCx16ioVNFnNueHofdMtm5fhBiw9H22Rv4yY1wg",
  "key45": "36AWTWW8YBWy8gKdY6B83HeWENmCKbk671ZyNRK7SetNsXD9gQqWskCBPpXfhXnEMWgCfCTLAon5WoaYY9i4gpGo",
  "key46": "Fe2qqrnQwENtqWHHCTtdQe7wjkfAqqJw4NvjjLBDdCGk6azx6ffujFHZjxcYjXxcReD9s3G9fy4YEvjWeKYn1WH",
  "key47": "5Dq526qoksff4EqFhB2RjGTVkt3tMxfcvkuF98cN91YCFXgSv9tZ8ScD3k5iQfA4uxB27hpk7uFEc57pQm35Cge",
  "key48": "4oSDJpf2gooAMuucQ77fKFHNYuu1FbXS4YDayYi9wPSPYc3NNJ1hb5Mj46mjL8x5usz7tQydrYQ6AgdUtr64Yffz"
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
