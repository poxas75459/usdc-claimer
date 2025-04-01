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
    "WVjRQsLQTehaYejaMm6GXjPKnSMPWELqDV25DeGUE5YT6YzC7QrDVLMJEDFmj5p1xH3qTJzWzZt6v59X4VkruaL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4baqdE8Bzk7wLFjVtFs9s9rc19NNWoLAhAUCxiguZfmBXkMd1jeS7KLhrNmvgCy4UxCrZ35WQXYZPVYNwSxsTbA1",
  "key1": "5tVR1zPLLkQ7CYDL7uqBC7KeJzu5Yzb3nfBdwhzg8R8oehWj3ouvY96s3RRGS27TgLFHvxCguZWGQ6UGFWpqJExN",
  "key2": "4Vcq1pXe3F49wKUYUvbEfKaDkoTU4AKDW1mG6FrZpv1yCwfyFnoRhwJkdyPixWP1UuM56DCTfNrZPKmTP5QrLCn7",
  "key3": "412RgHcnihihNAA79txph23SMHDYThYDszxuTSrVFvh1rot9Km8zErqifAZrEnw7dbDFcQAew4FXUVeqr8Cd8Vpq",
  "key4": "5CzLcVnj1KPCjpKr3bv5aapiTgGLFyE94BDPxgNndx7SuQUW22eVhLt9ph9Qiizh1e9nVPAw2vMsnhJbrVKUpLiW",
  "key5": "2JkN2u8KhmsYyesRXPDque5gv5GWVWDyxtYp7iHLtZTp4X639ZeJtEUsxsgW5ihH4BMWmTd4n9GPovbAjH9HB4Jk",
  "key6": "3f1zGjDEkCRiqbk26RUeFrAkJmh5a32zJEqrfzAF2pjN38r2ZiPxPeBV49r9A4fs8bkp9p5ETbLMzKHwvfhjjRK8",
  "key7": "2WnruP33VxyeAirPvvRn2kvik1TThZTEo7akPfwP8JQWud4rDvdd6i6nBw6JY2k23q8aoTsLWVSZtNwF3L1Hy3wM",
  "key8": "HB1mTyfyQvVCjwCX39i69BFyPP7p2ujubMbh51xk8mzqG4hQ31ZgF7QbWsPxEsmBosaeN9Sb3CH4r5PxtLEimZV",
  "key9": "2dFUvAdAVNgiBSsh1vi1uXkqisdzrA9ikGn84HarwDG8Zme8wzhdz6Euk4ekkieJJxXijx937EdvgWkUEPMsiFGq",
  "key10": "bqeJPZDohR9jfpkbxknqXiTDKdPFgdBHETxYgejcquCWPHfuu5zaZHWQ7FccRPi974FsuthivxC9uTdc6pEvCHi",
  "key11": "4nUViEhH5kQuC9ka1TSPpTeZcfeiyxCH4ynpskciXMTWATuJ8kXreGqXd7JmPbhLCjAXAv9KCKrwC8QT6HP1i9PH",
  "key12": "3zBYGS9DJoU13cNpmpUfbhh1bKsao8KUMHAYkV5wvznCa9p8nmYm2ATHGhvqAchar8ZFvpxhBTHAFhBdAQmsvZLT",
  "key13": "zfnZNGjZVteBPvTxSaGRx4kJKNu1JkMiSngA9BAXovNWx3KewwDwwndJLnk7sS1PhgaKGQwJmguRQHosxCa2LL8",
  "key14": "3APdo1kbYyMmqLrRSVSK7w9yAguaygnVDkdTLpJRgcZGpJqem7Qz95pWBByFXUrt4gSuU1YBAHuiSFRK5pNsLmyZ",
  "key15": "2Q49iqLCGkWNtZN49HAorTnzN6MfUdYqFR8GHv3FDEp96yX3BY3JrQv5jZmedyRkFPkeZWY7Gf5kDrQqWbj2DtkW",
  "key16": "QF2mGGsnk1yBEdCvJnT2MH4NXhA1H8VUjHW4dmYQZRBhFcbM7quKSodkmuADAmHsK1Hpt8dC1DRsueTKCUZD9t5",
  "key17": "4JDgTdiVjPMzf4VQ9ut1QvTrbePiumHQxr385GoMtbo6jeseZwp5dsTyXYWFhFo786rCHjoeLHEjv9uuxvA9v7V2",
  "key18": "5ShkaoaAq2CPBWvQ4WEsqtoV5L44hyxNdEJcBAo3yxS7qsnAboFfXdFwfXMnFK3MCAWAzrZ8S1u5CjgMQBiYa2eC",
  "key19": "5Kc89oSD2NnQPwRWaXSo3mJfYwUKjrybwEce1kbNXtPh2stz5daeqZttyCTZpc1SNA5x9SuwyBETBRf1UNPFSCVj",
  "key20": "gSLXKSjoFxvNf6zPDJEg5UBGC8DWeMvFnKHRt2WeHQyoQo8Z9eZuP5aDtJSPSyNTZARtbpcVSYrE3aFyRVkJm62",
  "key21": "3GJSnSuLjHaBk9oH1S61WwWzJxzR3NU9HEiES5pwpDQHMyspVbXr46r33KjoVhEF5rA4vXQx4dCu8fYcJzb3vdWC",
  "key22": "3NA2TxqgBUziCmbTnvDpHVq4qJYgg33hwfWaziNJyLCe8TXA34sejgeH3zAXd5ASBEmdujbNQZVNzM7XPZnn9kqY",
  "key23": "4Hc2jhPKF1szGC85cyR1H6Ezyc8MQXE9WYRaM1HaGuFPG863cZXDDzku2H75SNhexYbCyK1jDVvTYMV7wK2ZWUJB",
  "key24": "2rpYAcbnwZFhurrWsvvKApxZhgP79hef1cxVQ6jeC7sG75Lg3AC1TDqHuAQ5pso3gVCyZfxCkRcLK1ZpYk4du31i",
  "key25": "5DMsdYZRP8o2dYvqvAKece23GwmQ1mW5C1DfPhH5LjUGoJwcooDgy7iVAnzMvfgFMp33u55vCVzjWSVVz973tXSz",
  "key26": "mZc2Ti3d8bXDCbvb8GQCQoznM3ERdXdyEEbe45zSLsSE293AZkrbQnH2igQqri2mEB8XRrdxHE6m4mGuxDpmhzP",
  "key27": "28ADQu5Bn4q8Xn7nXPzncyAyW7wte48xUZ5m4tnVhu2Vq5YzvbLCWbzt4BBfTdb49qUeckpBXNUAr1gMcrKQHHWk",
  "key28": "2PggobDZeh9NT3HQFk8yFS3JHMmfT2KLZJBVVVRopezPbKhmALysu1BGhzcnGk2hH8mXo9bu3ZAem7kQcXxX9xsv",
  "key29": "27C7cVNg8WfRyPpVnq7U5wnAkjDyVuohHVsBUSnqXfyWFSxutjzh3THxxDzm47TNThvTEVQtXYyWX146HBmTG68N",
  "key30": "4djZ8DDdPtdFjQ4AgCeoBmssRqp5h3X99JtFPaHaadY9K1n9TPp5QNUMkNdSgH67u6obirB9dw2NX3xHHKZKSVcx",
  "key31": "4kmsDHSZwoqCepK9uRzyW526Sgj7vbTtNH5qAyNiw7UesjPzz3YP18knHb11AN4Qo64iQZ8TWksbB8mCpbubdCwf",
  "key32": "2BHDVS32ziSAn14rBSNfKdTaDT8Lu7tMYQzwobNjtNLtvnv1uUxHLK1No4sjPxaiAubv18ivxEqB7tSHKN6ZjfaJ",
  "key33": "5nqEzFgVwdqc18YiU3VARGxxbmBDMer9xiDhJXGAKaS7BpyVudRFyrqNQ9n2DdhasBL83yLskV1GPEej8fFS2zoP",
  "key34": "4dvqU3D4qPGLZWVUDmnhWnTcxMHyVHNk3ffQS42Vi3zVtfN5BSb8VafcAzdX5JrUpbqbrMAxfJLSwxezFQG2Nizz",
  "key35": "5iZMJTtbueiBL5WrxbX1FCsW2xEnMaxyskTNjaRPV7KynfEGQEkqwxTGHc69iygBRoRCzg53mgDMmb6tv7c6zFHV",
  "key36": "4WfxhPjRoqdmcEQdc1xh47MGGKhc6ADHF4BE4U4F7spS86inD16UarExbfxaqG4VX7n5twvbDSQASCyf3sdiULXE",
  "key37": "38HZtQs7gquxvoaJs4ES4W3GNDsCz1Ap1YLcMsh4CYNT7UYf8Qiwe4Ak16fXQzGCJFWVpat53ew5XG97D4t5uKGk",
  "key38": "7RamyCfcmn89imDzEkCN2hBqhDdknVsNK2oGngFmwb1kLGogQkbfViKw32PXi9DGcbiM7iMM4PQ2d2ByuuvScw5",
  "key39": "3jwYkVR4pATCQi9P6F8qGXcVHhWjkrGUPoSobrZgzxxHoWod16oXrwApYU3arkio8ShNbc6uiHNRMkjcpph5EgY5",
  "key40": "AB2qEML2E4y42QNgk12Fu3i7ZmvCbvbUUvP8mMkXWyhPckMLHeQxDJtR1owJ6XkqSrcAENuBLUSAZazp1y7EzWX",
  "key41": "4Hk9rkHnDNkZX8DphF6Qg4mdUcpLGNcShQpydKjdkHmfiGqPzTKG9QRqpyxDRvKnQod9CyeFKd69bsyhHUGM1dfR",
  "key42": "22PLHxMh81nJnehPuukH8dMp8UpcTMJU2RpftuHwQxWPCg8N4qETDYbJ82r2kHSnjtqP7FQDm2wznEuF2hfa3tXb",
  "key43": "4F8JJNZYfLK1mYMgryBizZdw8ziUaiC1QPi6b64pNj5g9zqVWTrLFr3NMwtwDZTMPC4MCdt2bjc4kKnyTpf6j8ke",
  "key44": "5yi8EQtfRFsQacmPdWXk3oNo8r9SimU8YpG1bJeMDesGWUzfvWUUFMmMat9HV5imhg2MHy4KWR7YsCcy5p5Lthpd",
  "key45": "4n2RHmPvuSWBBdfTfzNdZywnFBYqRstfM15yoKe7tnWYYab6FthPDQz8TSZWJdo6BcPZnyYMugRvQBhzEPGb9UjN",
  "key46": "2BHiSuGxrQc9vAJHvHEUyqzvqusLQ2xE9HMuBdpB5m7a8ivmNhcL1ASDgEjmPbfU5ntkANEmnbk52Hv9YppJke2V",
  "key47": "3HbvGGFzpH8gS7hZU7M6UZCr9DMFw4UhJDWMz5siAQa8pkpS8a7Ee6BiT4YRnJzfXHdBTHiXv8GANxLAmB4md8Vs",
  "key48": "5SkAmFVV9eSf1JAfmaVLnyyXtb76B6kfLCrnbhoxuAF24KQrqiGHucpkdKAniV922DFtk9jWAjsPWAU23Ko78x9v",
  "key49": "5bVoc5YazrzysspcWTbRULFKAnE3MUUKkC3g9pgLMuapmzCdma5v8jL5kEmLDpwKujWCs1DnvCCZLwfEVGSuk6og"
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
