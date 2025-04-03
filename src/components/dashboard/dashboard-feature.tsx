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
    "wJ9PzLuXnUgnUaJFjqLThnYLVTzQfqu44F4Mjy6h934h3vcrjm8bgzffGWZR9k9SHae6bgk1jqfa6d3xWqFE655"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vJTEWKnJsc2ma4NxsP3FaeAwS9tvjnF2CHELjkyTKLJvzuhFxZ8CjPDmsCFStRknrFD9FhSax2QKio9RreJnNG9",
  "key1": "3oRfbtrwnRQZKCvuqR8U8sQUjo6Yyds72wK9qEgj4iLafuUEkNEDH1Lp1X2z14vSrpV1q3jjVTbczAcCPjq8Wfn6",
  "key2": "4rqqTuC3s3SwfBqmQWy9gJhcqA95a7fKYLhVDL5kiAA9oKYDRxgoBhXXEUN68WffNK3ctjzHXmMHF4PrYGLd2qhQ",
  "key3": "5kj7oZjZLR3zLGeL37zSK12BsBkn8zARjYEmTmaofAzSgGyvKEe4hQFygSm6EvCN1LPzV83gBS3RFQWDTpkWuz7j",
  "key4": "z1CTFQ8ZPUk9ozpkNuJhWeJdt6xs79XqkaA8vT71o3tnGViFEqA2ND2ZcHJLx7jaznRbUr2YGTzoFtkWHhJUGFD",
  "key5": "4psGs8oSQx45LAxGbhBGYV51m46jnfKq3M5j1ybi2s8jKME3xj5wqtPUHuaquxWCnsjHP5pn6DrMbt8M8MxCJa9z",
  "key6": "5reiQdVm9FK1wr5pGzCnrdUXKe9WfCtFfAH7ncSJxAvAaEynyRJpyEZE1yfhFMFTyf19trDaA4776Bj62Z7SnFvW",
  "key7": "4WQqrFQvGzU5AE2eWVLmbZJJ2RL48QNwJAkD2B6ykSbM5mWsGP4X3C8Dudvfq4iriCE7jwQQ3pWhj9FWS9gGAW6W",
  "key8": "u8wrhadoBennmjTffr2Hdzmb6nqF3rmwgFq6jBeYNA7X5W4sA6FQRohwYgL2HJhD7qyanKrQimypZtNDM5PAYoe",
  "key9": "uJYc1GhPT3WAbxEigw1mboUkVqYZv3fqZga5C1Dpd86Xn9ABkdYBMQgZYdMua3YtT7x86cD1Eyzr7NFx9J8PUNU",
  "key10": "55Cv9MVVjVvA5riA1P6LwXE1hAsLwknsbzZXTwgvseSqUXPARUopMfUzDCfYMGt11fGWkmJK9oC4Dijtr8GchVwo",
  "key11": "3KjujmBMUqbdVJzgNecEqzzhFn3QZuiZHSQhT2kBrSBBWSSNpLiGMGdZ52Wyr2NpHgApP8ge6Dz7Z86hNWeyBt7u",
  "key12": "64yZeTEazBkgQjqpiXcpsymxDHarWnxfgRDEnYdbU9fppyqkxELnNwcYAi2tb93Xf9Cgu2QMGsgPrr7CWGx7EtNa",
  "key13": "5PDJjQb5tgTencxgqt1TuXy1zUjWGjYqKFSBRiXirKKTfzZQdNHJ1MwPpcdf711s1qQbYtGbqNYuHnDpaMeWADoe",
  "key14": "6TPKgVDLN9XK7QrpZoSRdsswWF2QmTocQLhrUo5MUgwmoDTx7zqYcF93TPuLfcMEC3eymGigz5TiWFv2BkuwMbY",
  "key15": "nUbgpAbUJAJyzWrPpQZHzpaHwMYKEnZLSBPJS3x6DtXZNhhpDKL5Bxiw9DxV6GfU1JSn23KRSXPSj93GbmsKKKf",
  "key16": "zkzMGSwb2r1sUiXLwPTEKBSnzV7P8pTaqzdoQ3wPJEkJZ4CBDzHZxZYpvoDDRYoJ5FDPVciuE9msBPwSS7c9ij9",
  "key17": "3J1hNkczKbLd9AefLok5P3aeWh5KHj9P8nApPvHphEkGayG4dQE2KwZ2vo7BJ7jmEamXoNzDuwSrziae4cUAFAbX",
  "key18": "3CqeRVMY6reVbQbmxKwXP8SYoQr6CJfR15LmbpAf73ezzEuiDjvbCLPAqdhAAEWfyEuJWBrr3XTer7gSX58zSQQc",
  "key19": "3r3y6igMMZho7tEuc1fU4BgCa8XJd2QRqGEVK2CmDqD1bWcffDR89JzQFQp8hoc6n8Ho2Jd3HFFLgPGjUsKnmDWZ",
  "key20": "47ajqE1ihrhN2AsXGk7Lk3iar9gmKEgwGzqphqSe5t7H73dubeLT5GAsv7xjqt7VMth5waFzBeGi71Zfsj4rNv52",
  "key21": "37m6ms1BuNYkr1yt85auwk7ozMwXjcweFp7srkZBiwS7MpaF9Rm9yohzFdiUesgd9sr3iKdSJ7XBdRJdaoprARPS",
  "key22": "JUoptZs93WMPkioEJUkcUtHd8fL2ZthWjqNvSQt6sAtUMts1UnUKwbvNpbXKBWwhurFonQJS74L4FEqUezyPmdq",
  "key23": "fL42mVHUY1peWwiKFrwcZUagxDBnVgYcJ7SstN79YRfucNpseCrxrqh9ajGwEmb4d3oz1jZn8vp1FhwJTXCFcoj",
  "key24": "4qqQxTRMX3ntEEu6dTGbf36ixprrhPNWBmNhwZtqXV51KzpYzoFnXtGEXZ8pumo31uSdwb1AjfHm58pFh3C6e9Lh",
  "key25": "31Z32Fsq5eLbTc1Gw2CPPzPJ2q5L2LCvqgDGBUkeakD49WT3J9uymgTYR6fYxYwxja5PymPUsEFmuS8YRtsDp7Df",
  "key26": "Fwhv1J8avuiZHiWeeefNcofj1i3iWztV4wnjMVShM64xq8esTHTzAKQYe6QPd4kb28JFvJYWGuPXfLZUBwjJcA6",
  "key27": "CHcNxSHTwPGHZBG11hf3AsqDNCnBF3GEaAt3PiKyPNeYhcbhyb6V1yhHkxsdYHCkLVojimKDmAZHi9YYT5GNU1g",
  "key28": "aE8Zt7e5KBWaGyP2cYGUrqTxDNSXotpjcHkDy8meSPADQe5efvUJGddkK3X71gHim3sPVePLCbVBnN1rk5A8bGw",
  "key29": "5JuGkGERxr5frK1BUC9nhvU2euseievxay1oT81W7c9S5jXec14vk6LT8g7aeoP1JUA1r87iPtKcabjBdTxxSBZx",
  "key30": "obiDetpqy7FY4F44mXAH86CJj5Y2Xzyfc4seWxmSL8vTMBEbPsxjX2cSELoR9e7STyvsut7JeCuBpit5HtofTT3",
  "key31": "3RkcdXmWdvj3qAMgkFtNWfJC22iG4tw2PaiP1iVdtk4mvapUJq3tpasNTFFKYv1sh9DDRzFQ45mX3KTWjQguqmUS",
  "key32": "5YC3Q7i7mq4XaPTEfawmHmKjjNh4mr5dSPfHqPzguNXq9jzz39AHwXmNJtH6uCrV4kcihRquT5Za3NLanPALaRCM",
  "key33": "2K7VfrvKANAe8L5KQ3zchiiSXf5sw1njko9XYe9XkDNYajeg7qm2sVNGppKS9gxPazMpWLdi3oH6PJdLeVTxjpk",
  "key34": "4qSAwuPy9ApP3oTmUwbKauBGiSUDJUdqgsBZ4zED1WRyfeK6gBU8w1VWtkqv74uhxc1o73Sfythv1zAuBR5t8VZ6",
  "key35": "4FLHbkR3HgqFrCKYyBkcw9VYHCzriuHfM8hZEAK9hfs69Ap6u9CHKYaArvHi76h4uKBXfyRpAjdR7eGRBAGfkGmb",
  "key36": "5gWtvchTbCt5CCvzs4KXA6aTawdLp6Kqbjk1FazRei5n82EbzURM3tQfFj7QmDRrYZPLRtc1vTABtvXnAu44E8RT",
  "key37": "4dNAPUj8F7qbGdVowVYKnfEsRHHm1saix3ux7sNrFDgqwHaS8BhyxDCjZ25TPZkCBZxB5DEytrHfR7ccnA9AsHqR",
  "key38": "4ogmru9kr1UW6MoGPMgV2KBjormGZLTjNZwU5EZGfqntTSaJNGuESis4pK5tkeo1kwnyxD3ZcErWUxQBmbJAehzf",
  "key39": "cXSgBVVAHDbDeXKwmseUGGvzdSbtiUs8VThr3XiuJ5LrAAzXKQ43ktbEuaioYGmycP8h6LtQVPeYWMSPWVxVYSL",
  "key40": "22gE7gADo1YnG77md6Ty1EuPzwRjbkGz7Syn9ThvU6KW213enp3pKa2aByzjZJuinUAwAQ2PTDWzbT5H4YMzTb8o"
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
