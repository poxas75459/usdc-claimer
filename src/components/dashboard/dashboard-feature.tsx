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
    "5LnXWjxxds6ov5V6woykhcMeixc4LDp2Qz1wdEdnybkny1RAapxq349X1byKustoZNxyKcr7USDxD8q5ZVsF7dCC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tJvJuA9QxUfR3jtGD616WMKsxDWwPbeMHyjM5WWhSEuJbU2cmmPC5ELXouQW1bsKJzuuUpga3wAA4aFHt7ndJ4W",
  "key1": "3pLmTL5XnMQMdE8e3TFJoEz9rTd8worMAYxvwHmKbMVMMXvkzz63NgYVizvP4T2XAAwNevn4zCCyEJACbTX6erWB",
  "key2": "23rcAdsw4hXhVbvKVLaZzv1QSj8a8jShmEubga2oeELYjSWSZzhtt8hWoiT83Bhu7sQ6EdgDsTu6L2JMBrzVZAaT",
  "key3": "2WMs9NSdeWRi677q7Crvqb9mWSDCvyMuNxPRxWe1qE241WrspvGva5omJVU26VEd1Gz4iRsCj846wdEURZdmeN1G",
  "key4": "2cnhwrqqGhjJcV8qeYrrXf91GMVCSijb7TqfwRGHxTEDbFbVvtcJjUNfdmkbuemBTZ2n8QyxVGzyXsx7y8xvTwCC",
  "key5": "4k7qF7FdBzyqZRssf2saXVUtpFnWqTVV9NCCHnSyNqZoza6NsmXTw55SV3MP6xSuV53RhD3aKAoz9mF3eYgLPrv8",
  "key6": "3iUudJyHG6HcdqT9KNPPDMUf2hRQpYXzhAmj6FzJwahr5PMyuZwwpSuTRo67JbSR3ULqbrHvX2D3L8ESGU3joWLw",
  "key7": "2RmLqYD58on1pVoYUHiu4arTpAUodrDTT9xeitDhWzvmLK44ri9HEVRPUWGeq246j7awkp2EwifcGFWNfJcWCSoT",
  "key8": "37t7JNcWdScLS9KJthaxqK2JUABGoVdWVVu7ETRro8xiMdjf4zb8yKRaVr293tpGvDGM3XgUGGnCrUtqVJkDdHqU",
  "key9": "6317NEKUVprDMTXFXbK48PuV4AFZ72dur6LYAMMdDCvPFmmqvT4HkzpWQ5Sto9TnozNR4hkjR2qobj5xPZeDf5vX",
  "key10": "5bovdSZYungvoCyoS4oaKxRDTmsj2yJZHotbeQUMme7w8bAu4EojscFrrqzpeMLZLkxnbuMwTnNKMWNb2agv1sNr",
  "key11": "2HFDvzF1of9gYHhznpJsG2XB2NpssVbYFmQb89YgE8UFDJkkjKqsuWw14qFPTjqdgRLZP7q38K9dnY86r4rDAHaq",
  "key12": "42PLEMGLavPmDoXV22PQLM8wXqCPqo5Wv9hoSL4AMDanq9n6p55oJTjaM6XH9FWQw2Par3gGNcbB9fsp7pkUJfGx",
  "key13": "3Ki8WjWAw3ueXx4MPG4GSpYZZFXoCHQ3kM8Bs18uK87AFGN24bvFYuJTeZV7T2bX1tV5xBB3UaFydS4hhbfwzaXQ",
  "key14": "4ZfEAqHGCew238hK2BQqdjQajmpL8g55s4P69aesvTyUYupNmBvsY1R6MGuy2WFUqconfDo6TdPKpvRGfR3dWSyE",
  "key15": "5CNynL3j1omFMWGaKeZ7jfj563aHrS4oaa6DpB8FB2Exz6NT5QUL2V5jjPqSe1MwnzWQbvfGy44v5w4JjGQr2nVb",
  "key16": "4MfHcNpjAMtJaiPzX98AfiKSWMDaxY3ZXFmmqqJd9zYe8fsLTqa7qqKnddbabAtYp56hQuX8vC84nhooy536ke9G",
  "key17": "57gfof5B8L17XQ5PJXvNkNHrMjV9h7vZ74epCJWHjnpnL8d3UnY8AcEuBnZXLzrEJ3pc5q6WR8g9niBBMhBGf7sf",
  "key18": "379DZH7PBptyikXCLiq3HyLjy9zWyYyXVmB1DpZdMMgjMRXxNpjSpkVHxWza4NmkwVdmpFkpVi2oSayccUZWALjY",
  "key19": "V22yk3AhF6JKU9rBrJHG9nuaUvVAsWy6f7Pw1D2j3qGbJWKDsMBbgjgzrAnUiKfCcMb7PX2MNxb91jvSDgHBs3n",
  "key20": "2cXAnqBbrb4pVp2bAveRFmfQYfkTVukLfVy1piA5Mih1FuYEPcqy1rcCPow6mhAqF3af6vGh6qRNLrt8REK3JQPP",
  "key21": "2gAqwcGMfuqdRKXRuTLebRJ6KV1ZhmuRxJJQZrWKjYDwwDj7KoUztw4veU4hzW4S9VEHLVkqar87XNEXa8hgSqYZ",
  "key22": "3JR7Ytut1fsJM5Qh5k3fyGoscPwxjSEPGFCUybKqkt2JxbFpiP6HikcndrizCNTy9UqtRCMibbihVfVBUqEytB1z",
  "key23": "tLj1zTNktSNyHT6gyHVrgmP9u3kx3turSkE6kb35TaE7eRS6ku7ZjHnJqsN92J9Punuoz3P655crmCXEsxSQHeD",
  "key24": "3J3LVQHaT48GFE7G5xVDSiSsgNCn2R3yzTH3EPo43FmVift3ec1QFi739apBLq7XnzwRvL6zs7z7CsXyK8pQSaB2",
  "key25": "4RXFZqcaa6kkCHBDj9KYzxDH8bJHhameGfq8bnBLucTSQT6UCbtweHcH12kF8DKheneHKeUU5ASaDh8sPFJMKEmK",
  "key26": "5YYHjDihd3UD5qnjSZvizgoHadFP6XTKr2DR1vm7QBpa5chnbHYfB3a5N26h6MPms7w97vdExzGEyhjnf9S2KfYn",
  "key27": "44xyzhh3Yn8YQwPPuaharAgExoSZvjJbYTDfFWecMEtwSUDuqqy1R1Ny87nJxzZQkcewuA2AzyFsJoKiMfPJtjti",
  "key28": "66pds3PPNtsaNzxDzGWJPXxknZAEQSjW9WAQ1NcKeeP44F6dxX4fGnF7oaeHnC5DdRWXtZUCMHzKhyRGGJazzXkp",
  "key29": "5JM5HsoSrUnfyJceHb34B93PLb6dvptoav7ABa5wzMtQpNbHjfzuc3C4KGUMtueboutJTwUufzk3TpYf1ugy4mUD",
  "key30": "2JXYJ4YfYeWxnMMsXpkyomnVVW3EjKGQixrQ7y9iEx9VFzqcykEYwNxq7e49B3rHcgKJMUgP2i7fXd2kapy9NgTK",
  "key31": "3ndKDh7UZ72fufcy4RfSGdNuBb5BbdF3vQgJVbNhxvzheAY9nsX2mpufkjcpRY1AW6WxP6ScoxQ3f9VYKoNwsEsb",
  "key32": "k7ozS99h27UMryWASux38hQLc2kDCwftEoAYKN4uujpHs2TSMDyyb2EgxkpUQPS27fkZyR614YTWqHJPEMWZjvQ",
  "key33": "5a2Vy5d6bsVL48h3NXk1EwFrCgLT2hmvhECkaBAQYrghe2LbWTYZJaQZm86HeqdsaNYif9AJfohkQj9EoYfozLUr",
  "key34": "3h3fkbGMYDDkHVLQAbYgK1XR1CHWWMESrhXF5t63PtEk1dfLZi5Fv8n1f6X5wAPXZJAE1b1xkaQB9ujePiyadKid",
  "key35": "ZWHLzQD3H4a4KbmwNxV6b1EUUtGHREKSmWdxinAwRUUqah9DayvhRQwzx9gF4CLoEc7vQtV9icagA3xUUaDtGcW",
  "key36": "TPwBojhMMA5qsk5SsuA8DBMWnsqeALKz7T5AtVHpWQa29Wo8LZ7nEh1g3gzchZSVLUsQnvejRC6sFwT1GWtwcSe",
  "key37": "2KrgQoSemmDcm2MBxv4uNVQVDYQ7AiT9LCoU8nGu35SJDiBebeGWAxYSDe1cTRF8Mu3v4rCLCaU8bmgYvwSsLCs4",
  "key38": "5As5pMjLdRTDdgKXUmZLsFkyuoi9HXt5T2dKQFbUZacwxHVm167SfKUBZXqNZNDY5Ddm2f78s3w46RyNZWELuYUZ",
  "key39": "3nMVMiMQwKsuZWtHYxTfMF4HV7Lg9sDGjNjxzgtbHim8SZG2zRkMPtBfmp7vFjw66fXZPeyJatQknzyhw64xCUV9",
  "key40": "tDct8t5fSdK9XAS2z7TWpkx6zNUxndFVfDifkbnGDfLTov6vt3Uiuw5WK51PRuiHDaHhy8r9ESgGabJNANURLtH"
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
