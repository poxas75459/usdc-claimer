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
    "2wbDAPTbJDBAs3MfEsUqBwx1ScXBLervTAmfuMHfoYG2p2FSFaPX5GaA3S6LLhaZUewHyq39ZwuyGz8jGW4gdd9d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zpc4NN4or9K44mXWiv9qsPXs82zHWhkPRmn8Z5FNiK2x9onsZS2h7T9Y4LcGsXCEzRTRzcduB52kg1jcHiyjDHh",
  "key1": "3qcZHaunVtwupQic3UhrzaLDP8DnAYdAwUVnr79tM9PNyYoATpS97qbQXgYET3iRagPbR467YfWZvC1FLDFD71eG",
  "key2": "4N6atBJqx1n8WzUR1SmYnJ23rPLwz4xBt4WpHFpsUqYjnd4jSk3W2362wUF3ZHJHos1yc6xc5SXM7Nbo1s8XActU",
  "key3": "3kG44UY9sCGvNioMjcYadPbJaUtdCykBTRcZdptgFJW4bH1g5LWJ17r6h6H2w5VWwci3gzFV6SzQYagh2YLN4u7K",
  "key4": "5wnXf3suaJtmzmyB66iUi3pxPmNcSqAg9jcxAvqVwNeeN6mermYK2fGHfw5zQTALuagpAmpsdpvMWn8QhhV4fqc4",
  "key5": "2hntsd7mRZ1FrWhb7UhjFmfLevbEJotdJGaosubnMpQq6GzkYTW5U77raHWHT4r2afwnX56ND8JdSs2mYA93hVPV",
  "key6": "ZKKmapAXSPWGrfUapTZbexxN9ZxSppatRxuQoBXRb7wc3JrckZp6nucHZ1h5uRpgLiEoM41G7A8tA8EkqmvftpC",
  "key7": "65P3FjMUMf9p8nKj8youAH3Y31KAL32aDuG1KbU7RNueW2ab3VQ1r6EumsK9EjNYG1QeV9hH9RJ3RLKmCzWL7ZRD",
  "key8": "4UTVmLNu143P9DHFvYhSqqpiudRQSLoNpEnErymrGyTJtQNrwn21dnfeYjzgCNXQusFsyJKfDdKE6szSAw79fWz",
  "key9": "45EeuXUd3oK7dHghpQjaEF41qmtZmNQ8sK8cEvyiq2Y9G4WyvrbsSkm4n3v4SsDBYiwo6366JZmPP2wQ5JSUG5Dp",
  "key10": "5SCUXcosN9w31jJt8ijWCTxeDHLUkJHsHLRoSH4UN3UFnNraJa4YwHjnDneyaBTEAagnLXptiFWBxLNgMxrQEZR4",
  "key11": "5ktYN4Vjb2Na7M9i1i39ULrmfDUasVLpvBVfo79z3qpTuoPJvgKAS1v5dn3FTEZ9xanhe2GZWw1vS5ifLwoPBhwh",
  "key12": "4bqEvgHtctXAgNHT7rPhhQEMsctHsc52NZUBpEBoBmhQB9Crncqy5XRDgx7MBsEBf1QVPH85jvS8rhqrN82DYai7",
  "key13": "3Fwq6xu64DPvpJu3c7Qa7A2xYxU1FSA4ic8txUMgnVHfcz9ZDT2FDg152DqprTu4RGTBqTdvD95EC3tSbAKYbPsn",
  "key14": "5SPphACEjG8Z86sCajR6cHGXS11M2qMX9X36v7H9qsqTAMPRtuULN5QyaQUv1PmGRpwVrXCjwCxMrfhnLuXw3hU",
  "key15": "5ds127BjYng33iprpBLNFj7QyhTAYGnbYewjNYcQmoahRpqBPKHYZZBXjd6A9w23XPfFVTT7dp6MMCkpE4QCkJdq",
  "key16": "2vRxdMhJ7yK8HyjmWJ3saBq1SzcHEFFWBaX459zHBkCX1unbAAbgWuab29BZSSConK3mNaMzD3J21t8xG6v3qpTw",
  "key17": "3u7syAD3ysMrUbLpEKAGKJZbYHvGWSHaMrwZgALZFrrcgSg9WwbwbwTLreZijx7Hedqd9fQd8MKKYmQTRnpydGFn",
  "key18": "55LEUQxhHTHHMtTf11rNxKhRfPfV72VMbfQmD67dRBTnZ2d2DUUy3XjmUXmCAK3yj2akyk1X63HZfuATx58ApU2M",
  "key19": "3HMub2YEatdJB1vxGceEhD8uWYDsk1epDxs6tn2jUUJUqyHTMYv7aWMnhyTaxyEnvmqLHXCSD1UgtX4DM2myBmLs",
  "key20": "4Eff5g8sXuBNb4eLVH14dYcm55ReWT2gwruLpgEbMhFtGKXYXZYDpMTvb8xmLhysugtkkcMwvqmWVbE9FYX7xUu9",
  "key21": "4ixgcK2cqKhMbZ2V7B26xqiadXz2yUz6iTs38d1bxwXW85QFDiGfwwcx5R6jVFPQDgxrVZHsnCfE9XGC222ATPXs",
  "key22": "DhkEAz2PNUprCRE4vgNuEMWJsXcjvpTafTrTAejB8hFXFvHVMKKbtQsjG6Tr1ZtgHrH2C8RUPXZsJCUGPkwdX6d",
  "key23": "4754cZHd8PxKhDw3Yp5fcEfj5U7rKycv52Dihy9dWeV4knUkjKzTSvPKh1vVsW9YKVGZi1bsm7Puv15iKtqqtCXn",
  "key24": "3ypbqpYeyXZpy4zHv4UFB78B6wGuATtC1EhFq2Wi5qvjxVmW6HQgsJy6DbzC3xj7nu8g3HFfctymqY28zK38kxn7",
  "key25": "37YK9dtDRLv8XA5KFwc3WoFrSPuqwBhW17x3NJieKdAMQzuhqU1bXvEpyuPzBj6TuLvxbmJt8qLtMugtuoHQkPUQ",
  "key26": "65CbdCprFsdH5L6tUuvwnHYcUoBtzWxZZrCxMFo1etR1MCZ258KkLfU4Xx7vERC8xBibWuLd5kbggR1pM6htyF7T",
  "key27": "3sZ4BGm6RduN48Sps3KAd9AMiyb94PzSM8eeAkKs4vKrYs2mkWX6DFy7NARnnU3wJXTSbaH7MxpmsgabTcYWVi9m",
  "key28": "5WzEuufYTMNAcauHaLofzehENrRzgjG2u8daXa1t4rL4pRkpzVFieXDiE5GkqshAQbSh8UqjBbY8P3F33xJiffHp",
  "key29": "3P5iFJyExZAj8KPy4sLc31CRaCmDzsQaiKhiXG5T81Bs61QxeQ3ab9UD4EsFcg5k3nBQGPckoKeCMfWS2LWKjKgg",
  "key30": "5kdWutsgodPHCRaCcscXjqGbGJfzuVrUP3RbhMSiMu7P6oPnF2m2zb4MU8VzLQBXUN1BanUMbmfWkB2K1UY9qXfx",
  "key31": "3mKdqr4vJizVG7d7We4yR3zGDNfgiGD8bfSgaHd8NTZ3PFG3cLbzc5qJf4DbKzotVhdrAD8GFVpQoYmKTvHmsAmt",
  "key32": "3aLx6v7HVEe6vzfhbLciPXytu3QoRNmHQKbApdK35S7sriVAXbBcoQKsoLZ2hFA8UYPvmSmNdzgMeGhCFdthPFJh",
  "key33": "3qp464zQ29g3Bf3QTuKr3Hs7vETX8x99fZ19LtvMjXkBxH7yHYFsb1tgqJbX1FqSepekAF9a3THw2CyK5z64e1AT",
  "key34": "2GHs9jirk4tm5m62dE4RWSnLdQnNcoKmkjHRnNYaXnJNrJ4t5bQbUDaJ5tYTpdhkB33a18x44mYRUFYhCu33apL5",
  "key35": "3CFUqP7vqGf76U8CMNAitAYU1wva4he7hCsvwLtu9DAtEjP5sSo8P4M5GPqLvhrkMRhSueFWNQXMDSXCgXdqdfdB",
  "key36": "4Y1r1uPuEtmrad8GSagHEGh4K4pg7BXuMyTXsQAg6Ts2fgdRLAqBnrSHUJgUNDwB4izVDNdZVtZMWTh5Fuq8w2eK",
  "key37": "2Dvx9FntHWT4cruku7ioQ6dspUY4mpPpnFERhjuH3BdoiTHG9zbWM4UbJ9E1VdZ7TKa8Dd82NX6hnVup2yZ7iHFC",
  "key38": "4soyjk2Lt9miByn8kZAv7jyaQb5BpqoEy7U9XSjfbW8ptH88cfHRSQbUYFv49JEQC7VjCqhbn6cAmcKNiwdNSP1k",
  "key39": "3czZjGfTe9AEHH93EFDa9YatUjmipjjNobUdGsu4ymvf9f99UKHBa5pc6o9dnUgvZopUuj8KoFoiY8o4a7rGdBkq",
  "key40": "2euwKXPhbF1T9hQq9Gzq4ZpQE3DNXSqvZV9HopAFx9f8BXEe4TBCFXzgTvvFBBSyunPDm2Dr9rG15yS5xqVJni5f",
  "key41": "fVmEtB5JW6ruJSqBgdaKsCyMfqs8b6Ag7SdPVsRGDsR9VNF2LXnotZaSEhPpD9RjqsRF3Qn5W2W3AHTpSMBtQxo",
  "key42": "4AVELGJuJZvKpoHqpx2NZeTZSxmV34szSrpvYNgS8pLs4vn4bM4hQzZziVrpCqk4bEnfz922SE7QDoUrCqvLz3mR",
  "key43": "4LykDcpPgWKb3c1as3MBABS3SzSRPqTboH5BUTw8ZWGFRbc6d4A1Lc2pbAA3Vjd7epAyPPE3VMQ8auTNhR3unwNb",
  "key44": "5rVy6UK1KMdihvopG6byDRyuTVJN4GRVis8kSnroc5soEt87trVYDtpjZdGDE4kPaXeaRsA3fzhe6R5XemCL6wAF",
  "key45": "5U9dL9sNKjXDRZfj4W4AQXmT3X4J8bK49v9JXmnfkYn8NAU5dAGAnvqrC7TioW7PHMu38Gs78sGStaRNNYgeEfKE",
  "key46": "5FXBMPn29MjRXhL52qc2d9uAQi7PER3C6jUoyJafpGAaQgg6kmQ3MTn4itqdE5FrPvs9nWoNNDKVs9MjNS1iUx43",
  "key47": "cRULoM9wfyMn6H8CnuWBKdH4wT36eDex6S4GmS11nfSYmMpNErvGr7m22pnr489h9PgVeAZtXdECSjwD7hHJcXm"
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
