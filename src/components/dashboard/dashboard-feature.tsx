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
    "2cEfEBZvk9NMaawuruK8GV3aJUnTFD9yXzHWJVSiVbxktesGJGUizJbNJz17PFj667TYra2yNYn95hhSNoGFZvyM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25rz9FvFciHdYeu1NrKLpJKPRzawmmRMAMDtUJxrPNuENVBFFU5WeBv18ZWHBFLjBgF87pZX36ANRvAvrPRbQmkp",
  "key1": "5o1dEkCgg5FZH1acRcQJuibKWxWGEc3ev83QZmpWsc77fNtmCXRpTpAYhA9Tx5tXZPK2qNiK6HgNqzbJXy27SS9D",
  "key2": "3djLzrqa9Lm575T4qeoupQd9kGdnBbzQooGEpvfVC6cBRMLvr9ut4qrecLV3ntUdLVjwj3UbbZX6zbHWEt6mYL1A",
  "key3": "5R1FutVUNtsnq7h7wYe7oauaD6HqgXHm21qcfgM2Tvkq8wpW4S7MANCtU4tau6yJw332qQu4VGh6CEsziQxCkgkt",
  "key4": "5ddJ6CacKaZbLtzGGa6eruc7ntRjsEKEeco8fZRbdVtNR9XVWzKXHryK2hWQD24YWCXPZNUUraJaPLTGVgLnuUBJ",
  "key5": "5rWoKzWp2KUZF4gfMNhDuFhf6inHYggL5d6JfPvmHAp2YeBBYu7eK9Lx12QMisywU3UNQDtanwxZFw6KFnZ7nceM",
  "key6": "2VjTczQdog32UgyDGvyxrfwFoCBZGRVnCoewB1bDd6iSpYfhoyZSJ4cVzkhn5rbftda22mai3n2xMfhz3xSSXo4w",
  "key7": "2Med6LJMV2dkw8PwkdZwFCK3KQWwdZbcQ7ghvgKhuVX3goVXW81DrpDAxueCFfbnasqaJ4FYQvKBLi23W5SjqBvJ",
  "key8": "3AFFJhHjynP4GLegmEmFFKyLbg5FWJ3X5fWb3b2TVqEa469H5yMEVqYfSJ2KSZA7VZGTaVpr7QzinhoKC9uKQvTd",
  "key9": "3objtbRCuToNQEd3V4jttikeSKnsrPnnt3ZGU8DEU3h2Prpd9tQhFAZeEVyom4Uvq5pssi1WLx6BurwDD6iVE3sP",
  "key10": "4eW7ZmWbWGfpTQS3bgByimr2qHcGfcHfhHEsCGLUjQ78o4boy5BcL1oZmhQkhijnTTNsuTQE7JfPJKd3PJC3f25H",
  "key11": "66fDyfbecXpjb6iWkJhBjTuPm2i5fSQtqZAb1g1jezdN6JmSZW1Gt84qSWsLqHJd9KUM3AzeQKNAeZCbGCoDwMij",
  "key12": "7Sdfvw1gtzf3PcfhPX8TXkM1Un6w9M3t4QVv2kJHHtVqWmLy9TWmhFUtFqPLiwTtHX9Qr8FSccc4gmfbFX82Lvi",
  "key13": "5zMvo6ktzMjgfZgi2AdDky6kWnSVSBdCZd89qwM8goENF86fnxbvx3QKUF1JjAFj2yCW743g3nTP6E3t3JSnv4uo",
  "key14": "3k1zkqgw638BqQh6a3BiJ9XiVd7Gsf6jT94PDyzn3pk8i2F3UeNwqhJvj1Qo5ffj1gNpoXDwNGMYRtuc4rmoR81E",
  "key15": "3oBbaPNjoXA64WVqyPGujDtRUrxfSKxtZ7S5bFTchi9ZPFsxWkJe4kK6QyRPyPr2xH89Y2cbb9CYNuVQjhY3PpPp",
  "key16": "5UdYvN3Q6rRNZAjpuHanG2e6y6R13UL1wbhc6gPBfzhSd1x3HbkWGmm6HyDtnf4BiJXabumrwQBKKjLuv7LujqN3",
  "key17": "3YD8xnMNfJaiSZWEfS8WLDzTDzXo8KPcy9TCAVNVk2gtCoRgKLcmsULEHhL2VbMnrMFXoyTEVmqJGrSQFW6Nt9tz",
  "key18": "5H2wH9LnZe8ojsjZAT73QY4dtH4u3pnei2cR1YHvGsGxsx4RCv1FuaXKHLjeFPKMuq9NXMjsyr6c4svBUMZkPTXK",
  "key19": "5cZR7BSsJADmng8yWfFVQz1557dYNYGaCNkE8BdRxc7D75mChJ39qUfDRc7gtz17QEsZXUQgef59GoQFTSGCUQBc",
  "key20": "2NrvrfPR1kbHsghhDDcmTUUrVtkuouxRdtNU2iF9mydKQuyRQkDvYwqHezDHxXsfGkSP2fcnYTLy8oJDHoGCRYcT",
  "key21": "2TwekWjsB4amwMPaKabBmExVz5UFd823wifutpFvJzGYPwegCPyuvBv32EbZp8GTV6iSgX73Jr8s8v25DSCMqEaH",
  "key22": "5f7zq11tFFZQ5Jsv9P28V1ZL86ux1us1dUBHZQrhYVCJ1mjZLWPzRTZBZtHS3sKseVMjCqvCo9LnaSfinhNt9f4n",
  "key23": "vBRpS5amoRacVmjTEwyjv2psa6yRx9y3KgnarzcgP6B4EYwzs4wqLq6MYwVaUR6Qr3uK2F16ZDT5f9QoPpxBEKy",
  "key24": "4exDqMuWsspWhVAoss31K7uJSBMnD7pc7zMKiDbAw9Tz6xGZSH7bCajfCbEofnHvgJZsAs644fxt4MpdnVsSgaCT",
  "key25": "5GjcmBrRJLFSkTWRXc8xkeCTaFYXVVuMDiX3TLVNeSQyMNdkV7BjemUfXSkoJjtnJLvjgtP9nkaZWqWHhgDcKQx5",
  "key26": "2aKP38t4gqAZ7okHKXuSVchQ4WExZdgsGVCcL3aSaUYUipyzu8Swz5KxhG7HXWNbrw1YE6CwRmDaVCBTEB26U2GD",
  "key27": "4WZUdaBfmrywi57kAsU8XkNAgakeAbJq3ZEwxmsZnFozLLPFLAB6A2jNFR2FrVjchHojnbtyCb5tLHoBu3o4R9y8",
  "key28": "ZMt6oDkbEJPsC6xYSD59ULqCg6WGL1D3YKWHLDNfxPka4kvpF7SS9cuvJ5LoPQb9CYWzW2Xi35S7mUWcUEk2rsn",
  "key29": "4zHRqYnKCKkerB88Psodz1af6m72r2gKmmsjBmCe75vvcdV5sHBjfrywyKsdKxihrTT78rvPNTfU7Tf5eL3RZaHo",
  "key30": "3eRkS4yVaohrLHb6hh5kwKHeatCXeMRcskyGA3UNnHkKJ274jEkSzzGDujtCMS6MWjubuJozGGY7g8zDCiV8oAsj",
  "key31": "2LwxwB1iiyNsaJyhoyVE5f8oUiCqv8Sc1Rjs6Bmog7VJ6dBJj8L2YwK3bDvCcysZ2RTy7Wxs1pLfB7iyvLnqpQyP",
  "key32": "5zx4eQuvoAKv3RTTSajwqJWSJchFC8p4j7CEyRyi5d6aov8C56DPkq1XzvTNYtbfyB4fHSbAMyob5cy4umvyX32y",
  "key33": "BEppWwgwDvRrRNFGkwKTRLhpzCZ4e7qtXwbG3or3zFp7iyrGZ3CjexL7vN96LS1w1FVXjZaPtBh1UiVDz7iE6np",
  "key34": "nz2DRBHccNFryPjqZUnFeUpdiYYVWrCkAP4aFiLuXMapCPjt7mbrbqUEL8xj9EUnLUzZgHqCDWH17yCosUKWyT3",
  "key35": "4u4PdfocthwW1YCDjdPuHABRqi2JPJjf851fHWpXMGr5RijrT4HF9zX7MzyJPPAPMPw3Mt61DW6MXj78h2z2WJRq",
  "key36": "3zWx1McUEvkgZrXcWcuJdVMXQaGYzveCFf2rR3TzZvgUiY3yaknBj2sBGc9DC9wFmS1rWXpx5hEe7eWCeHeQNjVP"
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
