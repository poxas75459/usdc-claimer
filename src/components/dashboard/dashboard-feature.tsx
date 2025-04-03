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
    "53eXwdzunmj7gCJBZxTuwJq9HMHJVdNQhHLxPqFrckzVV5E3fxD6JhRir6A8gCzSCCCktDESWrK2AJYyezkfJ2sP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jprQAkQDJLEmgm4sJCoFWCsuvEViCVYxfZJh5AiiVATVCJamrNRnyjy6JhDWwUv7cCucMgv4X7o9gigZxQc959i",
  "key1": "4Y2uznKHBd9HzhB3TbrpxDw8mkjd5nqHBgMrJbppLaDtBQeisBSesiouNucTffyvcZJNGqihYMki9ZgZQM3C44ih",
  "key2": "2mJCLyiSHV712j45PWtLT5jDckgWDygGDvH7uwwZEsCnxuNhR66z1GbiYtSd5d29SgBA3nkuWvxK9dNnurssG8xw",
  "key3": "hhvKYLKKNkFsvehs8F47jdovauEjcNMotXgUS9NzPWTy89nTw1ppMmmoC43H9W1sLnwbhL5GWxWEfLsKHtUHbW9",
  "key4": "3ZWXzx2S2VeEftWWbqegFmS8QQW7QqbnVM1r1NkMdHb4dt2x7SQoTeMUCq6uzXEG91K4suGvr2ugjwabboCb2anz",
  "key5": "5yGW7qbU56tEo9hrDwMDBS5Fga2aRW2zMn6wU2NYnwTTVYsxeo6TB3deg86Qw1UDcee7R12J2W8YnJg19YjrpF8Y",
  "key6": "yqF6HMt3GMCHexpovbjWohZuJXkBiXXJL1qJhi9F5awoPn2qWg2WyEeLc8hTfRU2HK8fkiRpojibnHazgXorkz2",
  "key7": "3e1vmcQMaPynEBGNS1or9eRdGKnB4W9aXrki4Mt8DCW4fND6sVYWEv2GdmhfketLLL87jVxriNP4ucitdXUTDneY",
  "key8": "5AjyFPt1VqcVjMWv7ghuozkCpFLaddyxVv3XWN6WDy2zy3GWFLXDVTxhVSLmTBm19itDTwPTJvdSPdAneDxkfd2u",
  "key9": "4PQ8XK2HETJdSBH7wpG89vTdnWa6FsJuaRE6Yjipi8nxwjBFMyjwWTrxs3pCSdeQ8wNxN5H2xVTstzxdSMKwzrnD",
  "key10": "2D6ZewoDudHpCmK6q54HCnhti4JsjPTi3AWhRtx6L12tygM6z41Jjbq3tYrcmLjPhaTBo7oKTzqbCYUfGk81zaTN",
  "key11": "2TLKpzgejEccsvXMisYjFwgM1P1cZLzWG2rLEUKY62MadsFfD3We9QMr1K7fYHuvGy6w9HzAuEK7cKmYRBBZvnja",
  "key12": "2k8AhtoaUq83aQHweBSSqnyBWHhoXsY5T5Jp3D3C4DYYg4guUsTgSvhZknhyPeKmNSPzKNicbmZLYf5NQ9imAqVy",
  "key13": "c6cmi1MHN3PbdvkNBWDcCpfDPpLxtYEJ9yhUnfQxsHo9cbCuxtBA3inRYvbmbozohaYo7bK11DhmHLuiUze9o9b",
  "key14": "5cWBBTj23U4FHyfRjCJeo9UMWzaN7Y885sfSz3RjpydRMcMRbsRM8fbJiZPJb6U4GQugKVQVPyRUZaV1tohGPfA9",
  "key15": "3s1Yhfdc9i15rqcJUczytucoFfGW8wwdGQbTAcVZTuP4JsJGCR8WmDPkzZeX5T7Wjktp7kiT3U3Ygr4zmdrmKg9p",
  "key16": "26Zo32FuNu8R3tCQh936rHSFJBvd6WRKuoN9HJ3SDYbNNbYHVe7auuLAuxBLrDx46NDAUPzcn8d22cB9yxDHqRm2",
  "key17": "2feMge4QTyHs4sN8cMSDePfzUZ2LVMJbdcGKvzrXy8e76VCpRPsiyJgwAJ1m9uaYTqo4LbUKM9jt2QqxrhuVrMCH",
  "key18": "2kB1sTrTDeKrFJPVuBHRCJSPJJ87DimciEV8yH4DE2VVDLUYTMiQfteF5VYFUHTJaoMzqx6mm2Eh3Kj5FzxfHUwV",
  "key19": "5wYD7YHiwZwhBq8xRMdvFBnEeKFJ5jniZPX8HkCPApUzvpK3GWMietSWSYgywymk4GuTwgFFXFRYEsHmmJYmjZBA",
  "key20": "58HsfhzndKWsBpTZCs8gR4H2be1GFwUwTfs1iUtZXTRbkk4111FVYigJwKtri6bHXcXRsVnY9cdJWVHVYxAAEfJE",
  "key21": "4RBLD2GbTEN3oxpUazHGS2TuRJ9PwB62jHSoiNCpjkmydRZJXWBipsGc69nWz1hmq4CjboMBDqPHa19xaJsAFKKR",
  "key22": "LgUGEGZuXbvcCFSmMH9kyGiCxXLr6HvhArmkvmxYzZaaAwR7J4V8kcVorUYiaK5MkaJKnNxCHjzbCEkSavu2ZEE",
  "key23": "4Eiu6WghuAFkup81PyvVnBspuuRpmyicBdZ2eqSAaDDLnoxkWYfjFWYRcBYMWgHgyGeJe7onNAeRRgctizCsS1m1",
  "key24": "ySAfoHGGaDN4s2U4vdk7GdTmwYAFbw4MpTGcN8QnXAWXgi955J32jab4GDReUKBcCAexpq6FEcM2BLpaRMKBD48",
  "key25": "2F1wJX4H3CNm7e3nZgUoJ6V7hZ3KtXgWwBPRLnWfxwxqoCiet6x7EmsPYGFTHbHGBcs6xCPeK31QRJaAqjnBtyij",
  "key26": "3Krskeusw8iP51h9hoYG2sUdy3hMeVD5yir7KSSHGmhJEqtTgjT8RdE5soksqwHJ8z6KYPdRpD4owRymhFMc3chK",
  "key27": "GDnkV7WooxQXmjMx9hy4fGv8Dgcvr2zpKjqcZHQx6FZZySDCRpWVb23FahUMmXJWcKqzKWEzRN6j97D6r14uhr2"
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
