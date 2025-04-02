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
    "3MyonzQRqtKt5BYmhrSF97LK4VCixS1H8AeQaCf48kYBMaWMMz1eSp3E7vUQHe5wJemuGKxkPnHhmCm48u81RNkb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rQPw7s5ewnpdbikYeUfN9Soa6FbwHgCWdvFzLyUg9L7iN4z4Z9DvUQx51GQWqtFfBehUXxRZW5DKTBBkLdwYLRM",
  "key1": "25bS1m4P7LWEHWqdF2CVLpPFAxYK4zQ1LtfuncS3mqL8eZRNv1SLS7JUtyKaPtNw3r445ZdC9MQ8VsjiGTNbkGE7",
  "key2": "3r1hcoPEP2SJz9USvseXAGpvSx3fgGnzhcF9p1qau8WyLbkvQ4RqKr99wJZxyzHoEkPtjtWquWGUpG5GQqEBNzdP",
  "key3": "gFbtGpXMiso7pY8GgGnB5h57vubmCcKi9o6ankM2P3mEy5i3894k3uszbqe8zN8WgXNjPKbKbZ2GwK2PGWkjsKc",
  "key4": "gxUaDMVi7LsS5QfqvyvcudNn4J6Tip7mGNJJSgW7Jsi1uKS2sPUUVCGVVvrLVKLd2cJTbheeiX78pUZDtxLXR4i",
  "key5": "2u3pt13tVqfzY3bWNgxykNKUtqW22WNfWk7gZDcYKgbEQ6TcDXs2fgjTr4Bp4YUigHyKn5k6sMrVyHYAGXJ6Z2cs",
  "key6": "4wJUd6J2SximJzqpSRhBceuCcyV6DXxoieNLUiLEdCEWP8ovpJ4m5Nd1mtjNwAZqjmQ5N8cMKrcHCBqN7CGF4KGV",
  "key7": "4CJS9CiTmCJ6yvZ7tpE5PEjz8qbtJtw63HBbBCYiHCRuwfZYc6pGBcmqYfGUEEri6HfMnRY6PsLxer6uoGneKokm",
  "key8": "MNc4TSjQ9L2uAXzFAw3FXRcoVKSuFfsXXqdw8Jcbr8Nhs6d5qUBpRzzZFn8HQ13QehvQB3ScJvZrKJsEoniafrt",
  "key9": "W16fRRaBh3zjWrYbM8vLN8wm2bskAFUHCDSM2GJ8PsevArHuYXF2QMA2qDVqXjdUQ51uce8EcrfvYw6d1X2E94V",
  "key10": "3YepUp9rK2UiQMjpPD44Y4M59BdMLFnTocJGZDBauZKYs3Jt8SGENZXXD53YHtaLvZznyUUwSL7PXhaMUd41Txcq",
  "key11": "4JEFaNsJ6H6en4vzfFBU9sBMAasLTMvxzW8L6ixge6NpdYDoTXPqCPBBj8d8niXvmGtZ5auSJPv3NmMgL6et8G5y",
  "key12": "5QRwrrNymcQDSedEKkDbHfPExshqhiaifV3N6DReRJNupZfvDNXd7e1bTNzvKNojDS2W3gr9DCK2bDixbkZK2yVe",
  "key13": "AQCjkwD8ktGX4wbc5uqSr8UtB6b9PdcwhDPjUHz2xaZTPrRBjsdWLbyTS6cVNKFaeTc5jhy1a1urZvdfYgNbuqF",
  "key14": "ZetgYrdv6DYjXFzmiUkdga1fwB8X3UNhpofGUUDNwhEhPhTrQrsB64incan9Erm7aXLR6YZo81s9yzhQarHKNqh",
  "key15": "2uQm6f4F3crZ1JuSjU2fkQ5bxabQb2p9iJbXdMLbACCCBZyQSdRhv2Qv9EprP5BGcEKdWHoCqTQb3cf8kWQCSEx9",
  "key16": "qFNAFTYjYfqwdrLc99pPRJhKqZMngeX7cQkHaTASpvNDXiG6KUsMEFpqdYTKhYLhLX7HwaC4AjBe3oTaDWRHF2g",
  "key17": "nfyTGnxsopTw7GKAFQmnZw7MnMPZrFJsDi5iD1VoRsTYMR7CNWKK5rQzuSDwt88SpBfeMqno2pNgaijQ2HaKioi",
  "key18": "45FkCBcahUHCMnsFubLaaa5eHr4cGRNoBFts7BG7mA5wdsYoHxskCcN9M4xwYT99p6AVhJbB9YqfrkZZeDix5PiB",
  "key19": "k8LybR1ECx4QNDDdArRFvKfYLcTQekmtD7pioW1fJHF4AwXZkavVkHiTWpWny1jAAiDMA3DhF2GmFemHau5qZiv",
  "key20": "34Dfd5nFrZezBXkewsyKhU3oXrmqGbk4Fy2G2PGwuyfA1YjUjjB7LMWwwq3ANyfJtfekNm6UBR6KZZNhxPPk78oW",
  "key21": "tqHL1Td461iNsqAKmfeWhPdxDJ4ALLxaA9y3dMCfTuUDb13JXkvcbPqWEiSUmuhuRmSm2umpkvKGmTG3X3QUAit",
  "key22": "XW3dzNgAB4ysW5EyNA7H8Dv7LQYxHEZt6VBi8S9N1NsCK7X3nsuzYwnTxMnCNshacTvbDenTeHXNDukQhASYfoA",
  "key23": "4temYg5zHruETcz5zHJ9DKRDJmhY6mZPM4duhVRUCWfDZpX5cn3ekAEpRk1wnip9SH47xNMeoZaEn9SDK3Qi6TC6",
  "key24": "27bJZ9t3hk7Ejxo32NKHsEkDosCa1Q5NVsWRoziJTEMo1iSaNF5wzZrj7NJ8gYr1gnV5XL2gQjaDesjD3BHf3wcu",
  "key25": "349wmUHzThkjqkYRnGGQtMxvH4WbKxMXcKng8d3JxZgCeXVFw8kzfG77U94ms2ZBXss3KzUtxxFfYWviYdiLLmju",
  "key26": "4fXcQb5RVaQQYyGW4EjRkZZ463Ao4GTheYFTf3wDkEVSUwMpPXL5zLNfo1oMAKG7vz2KekHnoDewuAFoCRWU4Jhq",
  "key27": "3YS6b2oEf9C3owWUAxahsNGCou4THdnbbP8j4N6o23LgTasn3uMZUtjPtaWcMKnrq1XXaCvUT2EfEdaGrz9YnY9F",
  "key28": "3yyPu9hbiKAjq6DB5eU9LqfNMquPC3VSq4EmJGS2pGnRJ5mgp73ixLMhEFKjQKbbEC99VBTzhHwsBHdNMsrsyaqx",
  "key29": "447CBqaFKiU13q8a4GBowqCwQoMAixVkH6BJ4jTui6GoHtKSQads6qcuAnhexwdR6MoDEFCmvSMv4pFVF97UCLbk",
  "key30": "G6DjLaKVxHtRhFKYZQVGKPA6yUbCZXeKp1KDbXNz78yBkwhfUWr1ui4i71VmYiKAqJiCWHJVhvSwGCCxDw614RP",
  "key31": "61YN3XtgYkdrcX3LvAfTofpd5eLttSgRkroASqtYuhc4i9jgXrQVTjn5t1gQVXuCSJd87qqiQf7wmZNLLtdNCGXb",
  "key32": "3n7iU6SWcxuSf5irgCZSNUHz6Y7UBcfGtViY9Nbua2uqdG71qZ7BF21RmMAaN5LtrpBkFobv64BQ8MJqLKgQdGtt",
  "key33": "35oLjiXGfMeFAAkF9pnHjsFnuD1idy4TfZand5mQdNVNvv6CAWCqBpsXhdw62jfQMt2seyZaLiNaaJNCxn3KKMEA",
  "key34": "4zKK1W5k1wxbUKay9EqQU2LY5DHRP1BTyVpdmdTk5HoizePGheR9qHmk9qy7hNTMaGwUm89xoQaAsDGtzQh6yXuS",
  "key35": "5VUHHSPHrPQJw54PtKrULtSNEWGr6HSeynVLVLetThA9fhfRUaranoPcr9WFB7hn9S963f4Z9ND6326pMZAoo3MQ",
  "key36": "JjsmBEVDaeCcdQuk2UbaKTvJ5N9ufvyzxoWtj8AUMojwugsLhJav9Np21cvBe31No2eAoEH4EADaEEs6U3owbdv",
  "key37": "4NGiujSiWJ6H3pXHVzkumQchEeKP3sEh8azoaTssaz7SvBTVR1D2LPyVrobmiZpwTheUTKYu5PNL9BpUai7P4ThT",
  "key38": "65HtnD5tv7xBqV6XRtfmETyAy77vJNPcCh7TmkzFaHeFG3zM63XC1sqLpi9xQGDn1FHsAeojpdrppEgYekSj7JY3"
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
