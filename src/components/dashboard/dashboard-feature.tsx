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
    "VUP2kFQEghnaBHQaDeXWoXeBaSMo6w7gC53qtTBUC7hxCtjpbWZeCPJrD28AEGXfJuCEW14BQ97fxGsc38yGaoM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EVMU2z6v1EYbevhai8G9qieVz4W8uwh4GnApHPoaYvJGfYa1GtXahqkRko2iixhKpTKNgUctD7se7kwv9sUSSfU",
  "key1": "472mb5LZRtoRmUqYwu5SwLTGqUGFnWqWL9kjfPMRV3aTESDGWAWJHfpD1tNJuAFayRSfGHLdP9idNF6xvhR6PWLW",
  "key2": "wFLG7kNjb2YCa4G644D287RgQiUjDf8RoUS1dMRcrY5bAz8cpE87Fz3ehTdMfmapt33gLVhtF7aaUaZ7PFBVFuV",
  "key3": "Kh19H2yx8QzmBvSFqhky4TUdZbAP42xXp5eoXjcWyXb7858GAiWq2mUgnzcEafyxDLt1Ymcsix191ynQgEe7koE",
  "key4": "4bC66KESbuEccNogi3oEGxkRgjx2bhNGX4wGdQCWMeJgcG98Mw653K7s1eX5bhnLrqiqFMGzKLX2dPxCrUeBsXub",
  "key5": "YjSwqqgDc7v2zERFsPZPyC6iAScSEEXwuzN3E9VKC6WXqzqEWiHh3wrXSnVRCTGyf3Xup9d2kqq1iUNdPzDRLPt",
  "key6": "kH3ySNxcdwVYQcPbvJ7tV9ttjpsNho2zjhakTbnhRdSyMwN4LP4MCkGRfDewDPDXafXegt2dau5XZVsiCQTYEqH",
  "key7": "5pJvPtLVVBBk1zTxc8NjB1Doyu9cWcX6Bt91NexErmCbM8rmazuuHJnqFbxY79MLWY5Cot7HEL82YYRuWfdHKEyW",
  "key8": "3iaAUpW1fr2eTFuhrdJ6A1hB6srwfwzntEDvMCEA1VdFzBXJBQJgEq9jsVSCHGeJemnBDhS53mhSzrUZzNqYh1rS",
  "key9": "5WgYsd2CtwBcVCmK4LoBUv9bgMycfkgasRPZudcdmfLF9XZk8oRKWnvEcCsPWoEpS7RmWxuGiHre3H3PmN48Je3w",
  "key10": "2kkvNP4HGWF2dv8PBkrTFdJVY76XoaaHpejjYcnuLBGnKwP9S1NpEspF2gB7zKUE8rVzHTZyCTBcXhkn2TSSdSB1",
  "key11": "47X2jkye1wsxRng7aY73SpJF6HJ3f344SijxjUUWn4dmHnHpZsoASFkoAet8TDoPBmxRGmBK16DPksiToxuJw7PR",
  "key12": "2rfQBvZDss7HWvniek4mgJJMbTpEecL2HKpNLXfZ8jfHKeaQYdSCAQkVe9ZXoodnzgBQSMNwa3ZwZDUcj6DMM1Qr",
  "key13": "5a1MmMNrL4TPGkggmcJ4MSdBsLyXkMfZpE9jG1SxCabgWz3TzSJxunXDc5LsTpsxkqU3URnx27VxqbG4aXysb6h2",
  "key14": "4TqehE75T7UxXZ5Fqrrd2pfyZfn4RsvGhJeHfWYJatuf32VhhMZ6Szdy2LXba2tLwcwZQWcdQGpP1es7p1BJ2W9K",
  "key15": "Nh9sj7jQytbeYd2C4Xg6ToWukyAdhhdh4SCuPUCJeh5K29oAhqZtswTLGKa774ZrgJVTuP3jiAUBT4Tzovji2FD",
  "key16": "21B4ZfG2KX91iPmHWKwffWwcKbUWfnEmxvtvNvaMEF5AsCeth1ZJxWBM4eCp9SRETUEp66vw9L3gmPAbD7QhApdb",
  "key17": "2FJF5MBVfTo7vJJ2mmz346fJy4nZChVNBVxTi3rxhDVKHP8o45VH1XKUfRPwh4mY9dNxWSCqkRcQdeHco34p6A1c",
  "key18": "5xjiqgGrb9hkohayN4P8XRpHdWUqCVx2ESskEMhJ6PT8fk9jYzy4vA9WsJ2foZsjqUWWg2GurYZkP5bMSBsYvcbh",
  "key19": "3KYwgW28YL3DUT4qUW6sEyCoJaoD6MbTbuC2Arbn77ZRJBiKc6Sbo6YxfwqzBXA9FwBbxhbGKYKpxCYRa5Tpq942",
  "key20": "2da46eWVFBL1eYHsS3ui2gvKxCvUaUz5PvTEsoddBMM1fPD3Xx5b6Y8rA1oxsJ4dBX64ZmFaZnjkyJwXRNP77eHs",
  "key21": "2ZyACZ7YJYDHdg88m7pUazQKRrDBjatz4yhBnpfLmfxZAppMDnW1suifcTmrNb5WocQWQ2p3UhbrLaRzqKe7k5t3",
  "key22": "3Fb4P2p4Ne1MYRhh3ePZmjit4X5BDxWGN2iWGgMdyzanNaC7cNGBGKFMvGnzu1wBiSspKBg6Kp3LSK55mLtQtFJo",
  "key23": "mroa4ttghieQa4MJgcJHcSyYX83Hv2iPD8aX2559kG9htdy7qarQgsPLtWsjhDPdRYvKtrGPXJ5yRgyuA7CjMZj",
  "key24": "4J9qRkJFZTZ7MNGS6ipEmDh9PYTKHMiBri95kxUd23pfPGaGRKtumh5w6i7x98jLxDDR1e5uKgzd34p93jMe28jd",
  "key25": "51n2NFnGVjRUT5QbSxxaz3umASK3hWk3jxp18YFqVRFKpoGMNA8bpUFxVnpYeLDsf5s7wE9W8S1mRXkZHN8AfDVD",
  "key26": "qmwU9xzr7rNy71eBGzoVaZGkoNBeV85ggRnCDwgVSVevsQtmhktZMhvtUx8XNLGNf4f7anmqcqe5H8jBoxnimJ4",
  "key27": "5q2AMKXSzwsDCF84bNd9YHtpMEaix41jWMRwRz8Fbpfm7XMdCvcfcRiQYqrrMyZucyq7cvLJpPUqhPJ6mYZxUaFE",
  "key28": "2uzVGFb8LdFzeXkEYP6qVWiRhFe2McKtzY9kZdc3gcnZbh16K824AYn86V2FSuJwtjrQiAefmzVkWnbSKD4iBs8m",
  "key29": "4vSwKZSJS9bbieGQUHf1JJ6PdmnWWnUUA5yJkRFuHACfVNCFZDymZdMQXyFrtgkf9WH6JmcYyXLGQ1WsfyYAtBkF",
  "key30": "238UcNBRWkZfMobBV8D25grWU1M3dCwdq3xeMfNMngWQnRhmBX8wzC4k8ySK2G5G844FCr6ootYky4z91aLL4wPx",
  "key31": "3nXjkuAz2NN5g8jD27NRVXABTgBdKMDP27WXHPCY6RV1FTnccBT5JVmAjbuwqYHNLtYHcEA1eL7Yf3QfWzf6gXzK"
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
