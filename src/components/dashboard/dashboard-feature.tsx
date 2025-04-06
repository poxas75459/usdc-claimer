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
    "4c6f6X4aXoBJcFS5X1qd4xcwo6pSLVWzhjb5oL4Eiq1J6RWxRt9CEB3NDXgJYSujmjUabpFCZoa46t8iov2aQdRc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "agedvK5ufnU43U6QYLGkBufzUB7Y1FxTxQvaJ5StPZhTPc4AnrEmA9Uv2P38B2MfQCg7aFRxii7xPFe47eNhG3v",
  "key1": "4aGt8w7tcTsjbUVrj5um2zrPhkaawJn5W33zLEyNFoM7joVwtJYXcmkaK3n1ZxHvrGcRFW8zZHAq5JpND7x3k2i4",
  "key2": "2hYqjaMn8Np2Y6QwggrFHjnVMv3nEee7iQ24hMH5vUEc5JaSmj6isckAHunkdURGaeDuR8ioxyfF35DxBrjUoCiP",
  "key3": "2fJ4ejgi6YsZKx5Xto5Ga6L5Gmegu15sQyYM1TY8YU8g3PGqsBJDkKQ9Ykn1RHeSVzFL9tXEhh2WtZaRamUK8Sv3",
  "key4": "44oRBMknSNVoRLKwCWtdovbN6zqzBGtcBBCAfnFMZTQbuLQ6S2rzbdjtLhoPegxWTZXkGAabM74QJQhtTe7SYYrM",
  "key5": "9ukzovC1gJyAoJQ14g6QbkErv1bFt13N4m4GA3m9Ggu2KekHWGqJxcwWUFjz5f2YFJebpEsqd6D5vjUkcPeebEJ",
  "key6": "AVCozD6UyToPStxBppJFwovLmdskVLxBzBubrcqMs51xz6Hm4Dm512emcPhpvqURNjN4GnGDmvwcgs3zyjfDP7m",
  "key7": "3aYq9VztaxkLF3tvtN585B1mfJLTiHsAae6PspMcQuiwNb2veE6CNBthxbmbeQGexKekWfhvgsnxpKt1HHa5kdmM",
  "key8": "xrm4A5LfpqXtJ2SYxVXqKgSjP3RGzhmNdMVFCFnVx8kvWJy37G8k48gCoj8Tk1skNjHgfS5P829ejtUBukdXRwM",
  "key9": "3UUsGeKAqBMtpr5Ca6zQzSJmQHHbGoCToxV8cT6NeE2Gm7ULw662z7zKTQH9CkpcZ2EDbq9wS8aU59sGAGH3qFKv",
  "key10": "4h5qstBv2cU5d36M4sRGVFJwwPGGR8oKDbovX5iUAXk5xQpmKtKtch7qZ52Hu1hzb9Fg96gtX1Wh2adtzJwMwVEC",
  "key11": "3XAjZG5HPhKiw5dL9YF4khQGpPjGm26wj1iMVayNQGa9rWMa34s7YFSM12j6rDrK1QfoLs9NV4g5exx17RDDd2RA",
  "key12": "5uVVmLZBVpvw384AenUMUV2KN9uc6qtm9QoNBVNGL9vxqHtp5jxk6G8Fbe8vHxEMQnuN71sftLToF9anCWcSpKtX",
  "key13": "2xtZ1G9sRF4fphsS5VdHA8S6WvH8Tjr2BLZBZjUef7HBeacpF3psAZHAfdjxZ5z6eNr3v3tqAu2B5GC4PzDHjEY8",
  "key14": "4LjcqpzmVHJdeoJvyn1rQHugBrk4XoHNtzkboaPuuEbj9QY2guSuvdrABaJkEfm9MnbiQghPY3HCVCFjTPBwucwo",
  "key15": "53qUxGqkaPY48Qu5i5p4zQJ623DRtH1tEWjzQPVyuu64besunQAAPYSnLvhCCPAqpctoa9hyBiVBHT3EiBtSSeDk",
  "key16": "5RhUQFsdxbrE3aBrFyg8yctFdgrBDWS2xN56rmeE4PoTs1L32yt4euTj2VrVFx2WRv1AQB6DR1nW96VpY4JGpgf1",
  "key17": "3oSXhPyHTJApusNoR5c6XwEEupeCqEB8q3vPxZxG8wsQHxvNqEwxungbEqfzQDjgffMpgD8E12bR5vYv6Qhd99TR",
  "key18": "63zd9zrG1rP58eNskB8AqUNxTMQwaHnhWtQHmGvX1iysDVrfP5jMKfVKsbpMGwj3B3rbAvdyUEHRhU1mdSTRa9ef",
  "key19": "25zfG2zkTryk1Dmv99h6WsQWDXPxCRyZzYHwDEnSJf9W8VSA7XpAUux8zpY2QuRLiZwNixNxzpx6JeCYxppKCrU4",
  "key20": "2nen1Zksjk4sjoubdgrs4aJsyDwfRNCAye9vZAWvFpo65hqUhDzQkyNoNCzQA7LdMYqrNbjnwW8uRwQ6sW7MteED",
  "key21": "q2i35qRcd5MF8x3nGxkhVXfNbVvDaXAiwTzFLDj4eKL59pnC3d62uLHMoDshxMhPybo1y8vsK1mdEry7Q9V7AT2",
  "key22": "5z4KZZ2cuGz5SSdr6drdfbAwh57xDGBB3FNaKX6J8Khh6voBaJ3F4NJoVhZYeXoifwudvxx4NRnKgRMdAe5bpUqh",
  "key23": "3mgoh5f8shPM9GJEBh4ZDstbXRqD3MF9P3nsq6r6Kr4L3D27SAoV2AczGuEJbGS7BGzxbFfAPU82hgjsztUDL3J1",
  "key24": "2GTUSQVJDyPQFqY8Mc8B4DKjq57ct8K9Zp1FEXcCgx95x52DSdPNprRXfA71Do7AB3uDxHJqwKzEy6x9wMPpdxM1",
  "key25": "28e97GD13wSX5UzHhUyRuxFf1MMjpVZbSxcpaySAFVMSgXeT9oZPnWQvLwskjf3E9VHDeeKrWQURqz881oK3U6Rv",
  "key26": "3yskXy7sryP7hDJqqFTVuS1vepBWUfH2VJuwfheBt3v2f6RHcL1wWXzBbK4ez7WVCnAxNFvrua2wv9Tbqn5aLBHw",
  "key27": "5AE4jyUpHJd6dV1qeE92tC42TXhSsu5zsRP1DfjMXwqNNtL8W3c8pQFqudoWZEKT75AF35SRqTqcpVqwkuqYrW2G",
  "key28": "DEXf5T9yALDC5GZoCQfnAtLQXiKZDGa4qoUaezgx7rNTZwHg1j8EeAFh7hyNN1kaz5qmbHF2J55iNhr43w6z9ha",
  "key29": "3WJUyCcKNP4hfgfoTL2Sc8FKAiP3gEVy8DiLRQqCqH4cFjcd3GegQ3MNHo6ouUKCakm1cb1q22AFRCv64pbaj1pV",
  "key30": "5AA2i7AQWFsrjDsDpSZVW28BMj8PBcMdJyhEFsz7tyWt4MJSBvh2mcV4FKz1M4FSTpDjUYPUqJRdwB5aLbEuhNp2",
  "key31": "2oqCCxUaBZAJYJgFErKtQTfddwqSJYviqUQNq2JGJFbXhPdSF4N3FCoTUshy7W7gSKenLsp1euw8dXwQwZxgyiGB",
  "key32": "1y5b4vbQyGvj4Vbi7av1ewe5ePyfDHVf4vWXr5q4Y8poFKek8x33rMSaV34RpbAYqEC336hWsV5BiZwuP2HmTje",
  "key33": "5rGXJsifx83KmHsq3C7DFcwzX4PQHCZYcVqbxEQgGMwYkficzELPeNkis7SBNpYzF5tgwNxFvHUrbgX4hnG92c4a",
  "key34": "4rJTm6ocKfuS4pP2Ac5pXQHao37BNwU8fWP8ad64Ky8FZmpYo1fDc6nSG6KqKRznZ7Hu2CiszSBAxxW2KWscuNS5",
  "key35": "5diYkRr5mNFrLjVNcumzJmA4AE1QVZC7fivVcwrMLaw2S6Hhx3QEicpj84G9hriVo1wmDKdYuLcfkXtJGK8FWtYg",
  "key36": "iZGy3AJ2G2rQCDMuLSeXxE1dVWBXbwxE4ayRH6ojn2dmoNTpRMri6aZRVPKzEhsP3aqNjgyb9N8pPmZZEiHhd4G",
  "key37": "Hoxkxs7DX6HmXvriyZ8d3fB457WX2sf8TcVrDTxZ3hfyt3Q8My7SSdHzW4VgiGieHfbfxnqpR6akgfUcuGDGStd",
  "key38": "2rBiPeUMypXsvvfBosM9VYPkmBbdHgPqRwYXXZcZV5ExUErgQSz89vnLFBywAA56VPJKmDHhFrW6Hp8mPCCzRFTs",
  "key39": "3vSo9XZuK2w5iaPrjVTmDvoktuJgL8dsuuBTWRHK7ddiwoN6vds24mXP7FLsNyx1RBM53yo21VvGvLXy3i2AGADA",
  "key40": "5cfULvtFoUraLviSVSQHE6gc9M3aNujAThxcakc81AWGiXd51zyJiBNpz8SxjiQa7eM7r4bdcjiDDxmkJ1FKUPqQ",
  "key41": "5dTVEhERFPx4czg3hchQf8PYZP6PDCaXwqf4GCvqYFfcrZY6Ak5WL7Shmu9XSS3yYevqDhqAH2ByfZDyTdSVazPu",
  "key42": "52PFsyox9cjXmwaa8jua9tP1AeyQEZALmGXAnUdZRgYZdjreNfkw2MiPagii9hKDs5AGdw3UWciqY8VsMWyBfX2e",
  "key43": "3keksw5JYeG49Kz9o28k3FgdtwWNxeRvf1sTAzNUpKK5NK5fe726UHbPK38M1vvaGxpGhNXExtR535j1keKWZfBn",
  "key44": "4huW7zHLCz5XtxtHdnWt9p2m1uNgcmvWdbmJiUWZSKyQncEwqpoAsBS7YTyeFVkZs8kfL3oVRJDBiXxYV5LwUrpU",
  "key45": "567dZ284xh12zGAiNkRnM2D17nPifwWqUeHgweyaFkY9V6r1cVg57AiwdjuDFVPS7S4vtau899RpdWqXhe9YbaMN",
  "key46": "2jEwPjAc1ZE2tq3vqMVaaGMrmBdz2zo3RS8t8n1CS9CaNz8uQCQRJDtEdpXZGM8RvKX99nvUZpfBPDcQsGjbqfc6",
  "key47": "2RGVeiPatHiuY2pChMxaVw6GzftwcFKZpbwc9vpC9EY7dMYCBTBgpqdvVURfUETt6TGyfq1PSr9boV5hycyckgJd"
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
