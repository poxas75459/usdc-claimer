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
    "5nQHo4ekRupwABx4UJMSdPmY9coBFB63bp6Pv3Bp9CjmA4gD2Jax1NypFZnyQVTieV8z3J1yWuEaRXQ78JG615Go"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21uCJUBtueRhyTSe5TAkqrvpqqAQErEaN143vRwrqpsCvCTQDToCdXVyTD1yvqNnUi3TgXYjLUjjsD73fiez5EgU",
  "key1": "4aDzoaUE1eLMKoTJCjuVAyD8aedfYT22994Swz13gBjtfM419asix4jDE6Hc52KZZ6DUQAFYJmsezLJ75r7kqcRZ",
  "key2": "2cULszDR3WKfRtALJvPRhXAp4yD4xsjbwuX3nLDigbBXDJNzXeaRcQ1PBPvDC1RERKBfUqcvA1Z8Pyr4QaFpJfLm",
  "key3": "3Tq8msJa5eanAFuNys5RA22Egtrk8czJEbVuNBkGr4c9BvoePgwMnEVCrgtTWXxPKGj8ENGKx51f1K1DTu1Vc9jo",
  "key4": "2qkkM9T1byaSadhoXd3vKcDQWaApiM2GQat6yYf2gYxuXZjKogxxZVJpbxAij3o16ybR6gPsq98CBxzKZ1YwTdF7",
  "key5": "4qvMWxXnk7HZBcowAxZhQHMMhmaSyFJ8pCYgYukFrCjXynbkrRVcSatgZqiwZhPrWRo5LxYnv8SJXChfRmnWL6S4",
  "key6": "bMeea7AyJjk5cmiXnHLdEZfkEpsLhRaDE8FgU3gUKYiM4LgrmvMmMxTjvsXwHEEUwEsnFQ3toUvnNQteijpsuse",
  "key7": "5pGL4vJS5xZ8TGjd4XFVFRcVpC3Xpw2GWrqNNUaADt8gqaxBQvmzHj3MCDmyme3Uxza4tWLvgbK8SsXpcznmyy5U",
  "key8": "4KZ1dukWfkfSkJDJ1SiJCWre6Gt1skoJYsBuHAzdfwy8j34Ewx6zHZi7fXog8Vo5bYDDPDeQzhL5gktGmL5CLyTi",
  "key9": "3NQ2mgKaE1qNKKYvsYsVCRa1dkdrHCNeUgk1mc3cF9a4pRL2NX9YC9nSXNmv8pSxUXd3BHnzF8D7PFHtc71m4nBx",
  "key10": "hMPYcAcMYWhwH8v8EnpTS7quEienQegjqvHohWTqFmA5iTHiw8QcwsYrF9BB9WTLH53Mi9joZ61cVDPEcGhcVKi",
  "key11": "2493Nkk8LaX8Jy8LM9EWPVZKbiGvc8DJv6HA2jsVft9vu3bpj4H5Eo3oGwh4rMKQfGm5PEwNAvTRxjKyNJsbGmgL",
  "key12": "4LrNw7up8dNsJLzdRYraJzK29mu6bVhw3SEEo9cc9beHvLdKs3szmzEjm2vaJBmnQzKxkfEJa9jfarybawKvaEUK",
  "key13": "GsvRxjL8QAKpgapDqd4yHqHSJbo7oGEBJJTGX5AyeCvcXU22pdHZnfXQ96BeQsjpFrA4ynnrLjwu6VPrgbndFGm",
  "key14": "4fEb1fURiAwJGHabGx7SpwkwqxQj3ph8QvUfh9D6XBMBema32TTFtcAftrmVGj1aij4Cp12w6zHbj14qaiMGTtf5",
  "key15": "4FFgGpRabBkyFyBAq9PXacLd3e6msFYLwU9ycNe9vunWsTz9uVXfCzqXsKkEFqsSg9vrCYtfGh5owbHJnpYZrDkw",
  "key16": "36vQgDfF83WF4GiPGbqepsCUhzsrxsxAJJGfzmkRiAQ8CfYr9QgvpUUJJoqUkeQqWnPUbyLQCCASdWjF34q2tsyE",
  "key17": "4VLvGKUpRusK4Hw3MzCBDaam5MwZ37XVdwu5aptVmVpafQywNP4gDZRBwWhj6jFsKSGYwtXE4FWCPsXNfVbLK8jL",
  "key18": "3K9fRuGcXjAPJWqLZb5RWYGLZBEQA3TS4ZsjK6noUUf5kPyhiEa22SieV6DJodYsia55zxmsmPS64iyYTzvpiWHU",
  "key19": "y2VDer6cYVoVRwhhWG6cP97n1oXnjiVsYQDmexrZFTjZEKeH3kJNamjhUrfXd93QVoGR1jyrDjPC8kNq2nAy6T2",
  "key20": "UJF7rbtpJh7PH3c4mPUAHzpSwXSsG7b69ejUpQAW4wz6skofRFgGKeY1RroWpNdnciRV5VWkM6U66gukzmGNdnc",
  "key21": "nRdy614N2ZR3LALDYtm2CNNaWoCDr6BWdaU4nue3PmR9zPLeAVpY23rB4npyxcktZha8Amnq9wLPqfnPGUcNY7B",
  "key22": "5LhcRo2KXvAh2oufU4emCTka9n35j1yENZs2N4pBUEeNLt3ZdAh5uLXViw9uPPYzYB4WX8SyUGK95xjc5shQ3nbT",
  "key23": "4WxURSLAgpTxFChmWmdmn2AcjT2eurLx7zv6zzcRuG7geZWhJeSf6ixVPqVfwEgm9ZPHAHg4dTRobRo2yJv8HTvz",
  "key24": "4yJZawHi8Z17iWtYzHri7BXLhXo62tpjrwAR2mGhjB7fcbtYpfbkSUEAarrBLGdqVLkC5kxykhW6aCApd1WmezL6",
  "key25": "3PKFU527KKTnGQhvSm8Fe3wa7gisXdNNYhikW5xyFWgndVMJDfN6gLrNMznQk4keNqUSYevkC7GugtkP7nz4wQNm",
  "key26": "3oAm5Gb4FvcwhvoMxUWre1MEnefQ3Azfsn7FKpKHYEHdQe11beJ71JCQdage5apGa8AKLALX227bh6jKnMjykYbb",
  "key27": "4JkysfDwQ3sfHG2hSQ1ub61rbiDvxcSc5dhgffZ83WwYVjqwJu695r4DVZUWXymH8f8jkFWqXvCrkLrSZYBfyBpj",
  "key28": "25WCAMrPihR87RAjLVUMJwwjHamN8oVUYjMVLg2yyMhaMc9PSify3htQeNUV5yWWRnSdo3cWZtTZAB5VSwWZWcbq",
  "key29": "5a2UEAGe7F3NEASA5RDqK24FbaQaDcTSAy4VBMoFXCbGTijHHLujCYdChrDRmMZU9Kj5evDvEwVoUid1KGN4eoUt",
  "key30": "VxmKj4gFfezqSyYiNCi5VNzVYD84h55hp6HS3ypvZoxb4EzNjvS8Msa54SuEFv3XrXkkQJTUjSrQaUQgVtzUVi8",
  "key31": "3vokHP4TJREZgQDxG3MVx2t2VKtDXyFQb5fUKkaTewGHBMkVMF5TzMiwHeUp2GebEzFvK6ZgrHb9q3dLeczxBViN",
  "key32": "5MMSmQpCZ79vPWswLRHigqbn6adZDqcWhJpMnqUqmPc3ug2uNgrRZxs8sN8XHaZPcf3s8Dg8Ra8oue25eL8ZokQD",
  "key33": "2aFVjKrtPhAhUDJDoPuH2cxJFfebvbguMyyMJg7Yj5o2Hk5TYttZXf2TbPhuTsKv8Hp9pT2KmPv51S8qPH5vEYKk",
  "key34": "3CFjtTQRvUdNrgQVnutFKvuzv6Yq4cg6pJuirRwsXrb7rf2mr4WnQD54sgzWGFRWPfz42wv6LsY4pWLXMU8DrvLR",
  "key35": "BzgUTJhin78pVnZ24x1PnVL962PEfymr47vTtveA9itRNLTyrU1atCTsH7Eo5HUA1wsXh2krBsgMEW8nZcGxhWX",
  "key36": "5LKyjJT1zr9MXRwbDPQbj3S5ZhiJUFeD7wbNZ2PmQZ3d7yH1ih28yqFkkyT6nG9RJxMtCsGmpvrf52L8rPEjNEU2",
  "key37": "4Qyr4EQbjfitTniKPGixHGWmVrispabpfgNKZsqtDDXPGucKKrbbA8gUdDVhDFSjhHaX7TiyRx76bkMyqSr1wZcQ",
  "key38": "5Eke9KUTxcuuef7igVVRUPhccp8bnsnWZFGb5Pb9PkYt22NEYpvrK3s5SxUbXG9qbNGab2d3khFCvvWrPS8giaBu",
  "key39": "61aRZgPVRXVZ5nyNNV4oG1pNAQVKNKjJ5mGQNLChdjZ9MkKn7hKmkh6vNSMJmR1gTZbEad6msqvXfSW1Fu22dVLR",
  "key40": "5sVSypUG3LqoTu7DDsTZkwMRAek115DUn11EPEswara7u2xGU7QDYxscqHgZPa9XHzDmpZEPEzW5mv4huL6xPBx9",
  "key41": "3LDS1UinB7q8skjVgsk3Rm936YSBRXmRB4cNdFFSyGREs6JRGCiXzUQi89tARuovfMHyWmoVdFFWrFcKVsuGxUNa",
  "key42": "32LJ99W2Y5bGe9QFKG6i6zHbiqi75YEjy15DZNSoQZ3D8ZVFJNmEsSNgTSKBhM93mZNJt7PKvpgz7csJcjMSejsx",
  "key43": "5d9CW31qBaEGmdHvqtVr93tVNEyiE7HYAayhzuCJTH65f4rK9xvt8rtnGTQ8zu7JsBx8RzdAPe9U7f4p6suVBct3",
  "key44": "4ZWTuxzYDfWYVq7B3TeEBVtEVGHfgxenycv77uaixBMjnTHYK5Yn3hLGEY11braoS5sQMbw65VqHsvKvxjxT4Q64",
  "key45": "Z439XjLXzdQqk8f596AxbLksWWFBoLXetNBhbhd5CLy9jYUFTWzqnkiSvaBKBB9Riy26Ttmgqk33igyC8H9fgAJ",
  "key46": "3AWdwghE5KZWvPCBRJCNaVK5qYnox9d6saWEM4Yo9UxHTnEUqU8pnvePS2JhNMShZA1tUWiCHuFcL2FxWUCx2jm7"
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
