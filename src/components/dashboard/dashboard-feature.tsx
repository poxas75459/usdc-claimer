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
    "4jQEQmAeMVj8fhknZokyH2SstZ41LYQ6kM7Z8vmWjQCn44SGMZ3iqSUmJPquvripbX9LyZ5qV4mM9naX9h2kkkfT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V3cf6ANCRB31UYNJ5vESduPJRvCkt7uL4bpdhANs5mBZkwcenaBcbPfjDTtGsK3EsrnAnveSKLTTXshL8hNDsJz",
  "key1": "5qgupGyCWLkx1BfSiYSxo8R8LyaVWmogNg7dwxGFAYmvA8DnzJ1xVbdwt3Nb6f2qVdjiHm7utJ7nYbKdNsk2Ac7o",
  "key2": "5G6a98Kyvj5yZK734dWA4fy6ADfXs1BVLJmg63RUotGUnmhvBEaGpMKbMfHoyBp3JRufAA4bXDHebDbXbvQ7rXcz",
  "key3": "54edhN2TS3hNWRp4zTCR8eCCES2xredJXyJv4Zh63NYEKp98cHuEPNNwa4CKRLJusDyMpjZzNjqJSmm5c2gcydu",
  "key4": "5Ggjvh8tVWCQHZKCpP96X4Pnswd2vGx9i3h7rmXeCR8QZyioQ5VivrfUGKcnYoQL2rsahtkshHWFJnFp9kPPLiRa",
  "key5": "2Mppdf1rAj6JLHbDgoUKRbeZDeszZkdwqce4bjCFok8UrP8srganmxDyXmCHWeGeAu4isrBydFTcUjL46MPuScPA",
  "key6": "qFxARHYejAU8FBSXk3vNKvmAgzSR8jkYhyMMv2tyADqkHKMyZCmAfeaMnp1wd9GgCpAhpY82PNiLepv6uE2CLpk",
  "key7": "9irNxivhXZwqXHPQxWgWtYVhug774vysu9JBe17ooaK1hiMbDPt1btwwsyNJ1vmdqkD1GuM1bt5N6qBxk3jeao5",
  "key8": "2xzk8Kxx7EzHw5biz8zfoKppUkrzWwWgjaVw9cxKQkbWWiA2SU86XEC4uCUwfsDXcW4EoPrz9eJan9t1WkCE8t5Y",
  "key9": "3b5JBph5CJgSA4sKtgBQJFmGPjajMw7eh2DSfPDHBkrVD8oq4tiCkdCD5UjBkDb8tUmNCnVFryjKPfaHMQxt26PS",
  "key10": "3By6FahpgFMMxUmEPpfDnVWZp7ZNBA4wq2iYE5g1htdgGxQt22tn4y1yyZSDkmeTNLChL9QC8ioDCRDwYRVwhn15",
  "key11": "4EvtWGjwX7nVpmR6SXdMSnozR5XAH2yxWrSGLTdABh1NYd9zNNUYhDxWHycUYBiUi9qc5HMLRSXeayBekG6MWoDA",
  "key12": "2tb2AGuu7FrGNQhDTzsZZidbnJT6k5AN7bx1teS6AA2Avfq7mYcQon5jnQ7V6fofNdUdNWzDJ854HZvuQY3y6c2a",
  "key13": "xKDggXzBEtUeKvVoZoKr13YcoMUKRmw3mCTNnv48hnxTy5HwLRixkPL6tCyjSLc4natnNYV97qLPCHaQEY3CgUH",
  "key14": "HCrjxK5g1T5BzPHfj9DW5TJfa51Ma43QvpSeyqhV64vTd8aMBT8wQnR8dfzm16mYcHSvD1uXzbvUdfBB6ZYWymV",
  "key15": "eBUviiAXM2ScTokLxNRTSnbXNkhq3hnitPmH52Ev5M3cHGegEeHW6Hw9d7ZDWVsoWs6WShwg4E4ysZxja8rL2Bm",
  "key16": "4Xf87eiEBeEesYWEbWHWA21zbLcb1dFNHmrqAcxWtAM8o1XTZxjeStNJ6bMGiiF3sM5jPp93geCk9b8HPyRRy6tD",
  "key17": "5ti35dZGKRByTgEd4RpezMmLGisyGPtRrDUamzPNeZu6GKWy4nX6kojx8gMB3x9b9LcwAJK7V2vRXyRJkcM29NEK",
  "key18": "4FPu5qGu4y7bSFTzBtB9JfHEjwu3rsnUCoKhdMWiEiWP9XW3H7uwujd7F6LAzoLMhUuDdfff4KhdpiD1oe8JCqhv",
  "key19": "4cUnBa5n4zdqA4wkvg8a8yfP2HitV5GGH4NH9fb6xsvnLEujQ3vqrhuofYDKTj8tpRYh4hPgr44njP6YxTA9jzTV",
  "key20": "4izefsTqSdMuGX6QcVZcAbwgFXv9aR6o49N6c71eKsSuh7z2q6zaMeVW8dtBVEsVhJfjSGqhHDKCoFWowv4Z8BeE",
  "key21": "42nsrEBDK23MWFDe8iH1Dr4JV1S28sSnLJHbcSmWadjqYFSndwZ59b3jkFZS4XheDkLVxuUXYWF4yBzALdmmfBQA",
  "key22": "vXzq3BfZ62J9eDeUUSeyrihWDGveCzwjmpb42EexTTeGZa8E4c7dLCpM2oZe7mTTzx8iwzf94HLPHvQ163jV2Gs",
  "key23": "2d9hGoAGChwctJ7d2swikPAWHK6Jp2TaudtUW4wEjsRk7hT5HQmDvU3HgbSewjzRYxz3wPsK3HYJ5hH6nkSdu4ov",
  "key24": "2WnxEBJXaVqNtwmyxtDXKeaEk4vqNK8TcP3eSy1JjkNfPKwxAGcs89DkgsQpMdLFPxgGkjhp1MsoJY5Vv1EM3dqP",
  "key25": "5EHk7k4bAtYbnFbwQ8ZChcxbbfu39awzyqkuw2vWfNbXoHeH5vsxbXuUSKVYK9xEvdKKTSMD2nENo8j4joo1DiFR",
  "key26": "5p14NSoBQN4teWmn4qwtihPAjX8BWh88PdbpDWFPU2zZt9b1sP5bNiDE4osb17dsJLMjbNMsx5FmrkFjWE2r1HnT",
  "key27": "3oQMAezRx5MNLKWo3zR5n4Nm1gp27wAdYTzVo1CA7xMUtbY3qBERnhvFQrnE7fUbpmC1bkwpb4JmCeh3dFmYst2Z",
  "key28": "5Hwr9H2YnT9m2ta8xEDYq33DKU83zhroYZH2qcaV9Ag748Q16QyHuPwd3f3uGBVv8yW2PcE5sSsB9FK9QXbekQAX",
  "key29": "N67V59RH7FZu7kaMpPYDxibY1yfZi2jrdji2xAcgziKSCuVkUK93tk7Ztviwg1sMavT2iTiWToXGQX9XqAdjLyb",
  "key30": "qdUAkjeRR2eoE6aZwvytRhW6MCYZ6ioa4UChCVMmA8pkc68WjYkiFRuTRxWxSSpCj64ScdjXu4FzWSKAcyAmBaK",
  "key31": "2JE3BDFEUqcmP7ya8yP3PzHmA7URzLg2Avqyr6VCcgJBPbN7u2aLHgKSrdRoFkKwRazdN84TG9wNyXsNwYpqLo1r",
  "key32": "5JVhYuWDTKv59WP7opPbFj1U81shMpjMcBUiY8UMxzRzYNwFB7BX5vutTmpmVd58r3iCrR52PWcY3mQEV3HwB48h",
  "key33": "4o7ZZef5B86J7s4g4kiUSDKikEbcmDwWMEeu85UZeAaS8D142n4suNXPrtkZNumNhvBdr1oeCF8ffSMnzA8Agm2V",
  "key34": "5Rb4pcoDtQyTP1poVwZdkAzZv2ttPUABXx8metQ9FdN3inaaHytFEEB6DTDpUo5chGB7fD2gEEwNafCQXKZJQuSn",
  "key35": "5GmbNc5EnVAeZKL47YGbfadaUcJgZUNvNjvidjPynhhPRYek4d47tZQpL45tW2tUJYJ4wLgvghaiWuJdo5izKAFs",
  "key36": "5a9FVU8HfNXdM6nUPBBFRHQMsha7uZzdhUbdgs36MTtuz8vnSnZgLhVYecjFz3S5TDhkvDSFK2UwZ8zUXHmBgNH2",
  "key37": "vwEJxeULq8WT3qndp15fR9vUNo3kDjPeHj12oBi2odB6fdQNQNvb6njEQV6dGDL4YfNpKH2UDR7wvEEem9qifdp",
  "key38": "Tdeeu9ica82XidTKDgzTw6An5r4sFoyvwM9ngw6wTJouNHQ4gqedCXmfezgqNEJDJe6vv1ApGeqRaQNSSx6SqTb",
  "key39": "2xgGfzxmrcfjTU1QcfXXsG3ViM1KofTRVCzG4kfENcqD9hytVKWuSbqzQ6iKeK9QqUc7Gb2QT1Ucx4HeJsgRj5Fc",
  "key40": "1DRbunSQnY59RBG3cs5KyZDZ2bvg3oxikRqKdMAx6MVx6RVQ86t7pL6n87HPz9LNYwHETkj5dyFeEnufhAR1FLQ",
  "key41": "47M7uaohgKBfPBu7vc7Tdm7WERo2tooQQKsShXKYA5GAm6qFwKXFjF7L8EPPHw3xMYN2jQoojRnoaXXaUiXU66Xb",
  "key42": "61GpuBWatEcS7DWr9U62ZtTvY5vh9yjQan5SSme4Zbbq49bzcPignioeNm4AUz5zfLNAY9BD5FsfiDLD2PfcCbEW",
  "key43": "3SeGdBiu2aFqQDXyKSPPDBtZspSPmCPgN4NQEwWVi6R5enGBdsfpPvJvdN9ZzVuk6HD5Ze9CDhPnP8iRHqnX1hmy",
  "key44": "5VEGQrffCmyX5cNQzA7cQgg8xddirEbCtsmCHUjyMoH6nZBr7BwiJpMo68QUrZveWuLsSNFp72RZpqw3mys9LXfv"
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
