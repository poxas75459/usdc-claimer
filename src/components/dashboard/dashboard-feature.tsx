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
    "3vPRQ8dFzXfqLPbNDzwhUkaTVh7bvoty7yVuXWKXiTddwv1skAiDRsCAWZC3bwAeHfSQZZkGfUVBpcNh8nf9MnYc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FraC7QAYL4htcqwbXwjYizpatPVxYupqCG3MMJGGPLSxAs78PnDvre5ChHdWeKiQs1DkftzoWh6NfDw8hMTzcAd",
  "key1": "4cftmA4jQNSDXinWL3t7q7ioxSZvh9ay6DBsosGcnigoYTYDetBQAAzq2gzZ8PBrZ8GVyjPtnFyJ9CaBSKJN3q7F",
  "key2": "xacgafi56DkL4Hqyywj1m4pVZno6TVvMbZ7zM3fUA3E6hyJDCuB8bPB5h4nqePwSREjdyoCZspeCFhQnUcS5zDg",
  "key3": "5uL2zkuKQxoUjyYzWvyFkDG3Jh84xcah4PEepSt3b9ageNofbqKatUyGdQdQEnTcSMtZbM6gNNxszfvMMWyXh9tM",
  "key4": "65nrBgw7t63HtSZfmTtkeyGPbRHZTqkH58DPSfhHLdkZA3ERYmoyP8pm9PX4GAzGXYSMLgCpG3x3LybTqZbSK6nz",
  "key5": "4s1Ld1e4hcbbT13GmfUTaoi5Hs8kQeEwwnbDYGeyk3arxwfSNXKjytMByPB4HVuvwQm6FCwVxHGrEBrUzFMHnjJQ",
  "key6": "5u3EAKVJoyUXGH8uJwAkS2fXNhxFqQ3VbSGwPqRXqcPuAnxQqfxJNetb6C6XWLrSMCBZZB2XgP4yEttDPyqMzdRo",
  "key7": "51HC1dZ49GzKMkwj19gm1Q5WrM9QcadqBKLyVs6foAmaGtHVS31h4CFKzxf9Pt88Tg4sCqqFfmyVMwaV927PhyP6",
  "key8": "21dfRqNPuKSKnXAqbVyh2WRRquMM38Q8sXon53QAkEkBMVF86A2JxGBCHdstx2uSziK7C2yahQjtMdB32VA7wCGU",
  "key9": "5CuMNM5AD7ro6mfg2db387QuiKGzuZm9hE3d4S5CK3gw8RTWeWtJ4jHhgC7Ly7fMD4FgX4gA3iHWDyLUUdwztdoP",
  "key10": "2MvwXd7GCQykFZVYom5hWxGjtaSvjVQXPaC3n63Dhd3iZeescb8X7GBDPZLrw4KZJhwgTNb5avzdKRcYdeNyomXX",
  "key11": "4szzb9sAvSvSBZWFfU7Q98JGvo3ZaHwdRDWkuUoTKDwrwJm3odwTZ6LYKgeMkCeDiYjvTq56JcuVXMbyU7ksjfrq",
  "key12": "63SSShaBGZMfV9Z3YVN5LysSQVLF6sCiMtXiTMX6HnEMEHfz8tGHuykDjUcnTiAK2QVWvB4wayim1rrRPWNjREkM",
  "key13": "4zP6tQ9zGkrgELZMTmwVVruZAzHUYtL12PZJ6dYMWdbQunkHnV5dNsUmTJAUZFhAHe7KKU7xHemEMrDzf6ZEgxP1",
  "key14": "4Q12RgZLyZB9Bo6ckW3SPWZUU3bwhy75AikkBrtuDE11JgqnZAB3mWF9qP8gyTAKX1cW9g6wfu1sFZiDCPTeSp3u",
  "key15": "5UwZm9wsmLzcAEzbmQaBhAkYkNAabge6JBE8ctGFYhXNNDAPyBHwjTDVuM1LVLA5HtcVrFo6ee5pqRTbhCSZLLBb",
  "key16": "25CFa5Gra8fxVmtw9wix4UYEPwcXeHVHq5E7Ca7892z4uv2TxYPtcYs4517YZN1E1ZzSP62Vgnvw8FtubtqfzwRk",
  "key17": "2739QQvYbtpXgSN61aCw23YCj4RC4Z44imdwYuakZX5HXZk3uTQrYDT75u6kyajWS7QvZ2C5b62Bp7i2kHunEVT1",
  "key18": "3mJ42y4zbqgXNJPvErjErYwxXy7hJtPWeHoeJqhvLTEC9CSfs8Ys3toWagRALB92z3Nc3j94ynemha1j1Chh8o4t",
  "key19": "29tgFz94RHBGYi9JPHmPTuWL8Ar3egd2TfYC5ca9sQAsxFCVjr7kPY5vfexAbJqT7g1uGv3XEyimkeMvrd7P41UR",
  "key20": "4XpTrz1ah9xHUNHnnA7Cp9kyRaNJbie2ADDgsc5SjG6UauvjXTWkbAifdVeknWKQ71AV49qT89h4nkvAXu1bZmtK",
  "key21": "5gcGBwwMxiqgmM8EHv7wG2PDPzhb6PCoiofeL9fQwVdpD9jvbRUw1C8Yz646H5mutC9LdDo8iGxGsUCC6FPDAXfx",
  "key22": "qssKey3agX39Hrdx6dAnhKbTGn4FdQH4319PeQ9QqNNS7F85jfZ6DpdnKyNjfpfwTRqk92U7Y5FDHc8GHJ5cfym",
  "key23": "5wvkC1XKnur3ELXKBcu665AxDoARLbabPFSUTdnNyHyhugLs2Fr4G44YcVRh3Y2thHmRp3vyM2FfssSyAxk7RKDV",
  "key24": "2RyoANH5mCPAgNmcLcPzp598qsnJTGsehQ5VdxEVaNuEhXpC3JULYHN5Fj5VD3RDc4LnUbiGCigXwQfvaJSGxU6n",
  "key25": "29effWUzfAcsxYMHF1UpTTB3PBiTRHRRnifnPpu6vj39Fm5VJtPbi1TafvgLEN35BT8WvnkqRXgUd5VD9KXQjJKc",
  "key26": "2P1eUZwt6TnKLXFpaJLyQieKpAdE87kExiY48wDAgVP8HVzJoj791ioJ6AJNCQs9sPqXqjqHqMfu7QFoN1X3bwNz",
  "key27": "3skt9tBcTMa7bbCUi9bG5X9FeNbZxdS6fWwUbySPzvLbKfWnWg58214Bhw4PcFNB1hTRnjhef73Lg5Pd7Cmr4UB8",
  "key28": "5TVCmzmpgsLJsbrXEpdxiVdng2GbvMjwqsehGFJpJ9BfdgxRo2RsPNfCbrRBW1jwYMxEAumKQ4eLanqfMaCrYCkW",
  "key29": "3yvLzxiaReJbbp9KaomMKf7zywdm3vvDagCtA6xqqMTcsb92YLEnVhw9DGTK6WieKeqv7QXRGYnDK9QWxG27XENV",
  "key30": "2xCqFSKooYxJJTvE9Nw1R8DQnzRFRtVtm76Vtmo5wcwQdwKn9EnxQhnsMbTiFuhGrK4Zg4samCfxm2JMc6Ewi8Zg",
  "key31": "567DMSkudgjWHBahJUbYYj4NxPZzxWfJD6wSurw4zM3ZURwFrYsx5p5bonN7VPjYVLC9V6SEAomePAHZHT3u5L8D",
  "key32": "3iHY4UMpGz8VcFTbwnKYiBadKgJYW3EEEExDFHxCcGLRXj6ysJqF6RGGi4EQsEeposUFZszmzYamP4rTfuRA7MQT",
  "key33": "4jXvEiUWj8HuGihWejqNzeYpNYY1x42xmoryRFj5eCnXWe3auCgKiYwVUou8ot3dnAAsku6VegUtr8z5hehHZyt8",
  "key34": "5XMjWEJ3Ho66pJ55674rJLwyTy2Kvsd7CNDCf8GYoBDBfK3wASe7cDx9dL9C1UvoBuNEfvfhe4zm14rK8at7DiZA",
  "key35": "3nhrKELXxE6DP5KVeuVrdQ4AmGw1TaMdaEVBzumeJFgm3wwuJNEYdsXoMycV5SEtMV5irThXNwamj8SmcbVcqbvx",
  "key36": "45PqS7kisyGn3bdmi62J4wthyNya773CVvHiqg8gJjQbKx3K5PvUpt1Cjf12AiU8NtQKxxzFCDMGqtmMMzLzCKE4",
  "key37": "2iWKJpzvUxoAxEs7farb8WLHLtHY7ee3wcjr8YYD3NweDQZKNN7Y6hDU3h8XXkkgq8b7VpZNt1qzzM7PmHwmc7if",
  "key38": "5XnhoKFFSQKuyg3btCCUUUUiSaanUHuQQ4FBNrC7gNERxZF3Cgo8Pk7sfvmZfTvAiTkQsGB6SX4gYKTMc27ErJqA",
  "key39": "67Ei27jptUk8UDgpsPAwAWhF2HaqWBy81WCAMMQka9y2NcgpgLA27TcqmsEc4CNhZEQopTiarphYkj2rEdvaM8nU",
  "key40": "3AsyJH2HKJU8XwEbz2yrmB1A5yqPzoxpe73amkFa7WZ4EMCzCR4h423RShZtyYZLVJht95bm2ad7oeAmvAHkoAL1",
  "key41": "Eb5bHBkMTtujLPPeaiTE1t8eZdbihE6XtRM3muUGKRciPDTbkDfWcQbFXoBb9LFtb9uKftajDaDbR1j25tuPhca",
  "key42": "4gGzPTrb3BEj4MKBq7Xbdr4ArfgR958zHBiN9MMMSfdN5VT1RgySNFyYPyMCM6jMBdUYcqyzAKaCPw88NxxaSKcZ",
  "key43": "5P7QY5WRwYYhqzXUPZAn3CqasB8N3FpAQEmjZxFqHcDW7iX2L2xV4sfaiCoPdeHJ2v3sRrWwwvb4zuEhQCkvauAj",
  "key44": "4VhoVh92ZaJ7AUUWERge3wycgLi8SVSWaPJYRYB29ht6GSaQo1mNN99mrRemzVwDT36SNHQj9YsLisnfccjC7eVu",
  "key45": "3nXsrVC5Ktqq878CbNva8bDmYRVpKRQMJpmN5PWf2Bu24cX7qKh18fZTeRRqQMx8KWWkkLGXY3yX2LSdmPD5o7m8"
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
