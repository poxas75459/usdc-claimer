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
    "RpCaGFPQgdSTzgRZ6kQwce7VosJ4t4oc1hwie7qoGPUjNzdHEEyAQT6Y5B5mRUT4bEpsPVDYLkc1wc3x8uDFsjh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FA35XsGktUb33mUD5xZ5cZu3CRXifYy2JyoS5qhd2BtgKgW7n67fPyHebfy2uMRtJpbHhWfsxSJ8EoKtJVRDFDj",
  "key1": "rJyYRH5EYkCedAQLmyY12VXi6B3rJYVCYjrnd7WTGvtmv395hwf9XCniyzjCHzyXuocuwSAcReP9NANzFW6q2SQ",
  "key2": "5zzQKBTDduHgbLhMaeXRTxkrvSxnwbZ9W6kubSgLnKvcK8tCjzPQVLMBW4NQS3QfJaa4bwuffL6wbvutNg1ceNiM",
  "key3": "N3usovjaadMJJ9u3K2gMc9Vc73Y44WgJGikXu62j7mfNg8jCVFBAUUFxecQEoY3z9omdHFV4kBD2gqzvKDdR89J",
  "key4": "3kdXUgzJ1R5dufNKBdwPtPp1du42xc7pyMViNCdgvuMuZCZiQ9i7RZrQ2pb8RQBV9aReQE3Xxn2FaRW1kgmeeoLu",
  "key5": "5wCBYfjKzmkXVrBgU1TJusieZNTDRsdYs6RMfBr4Xyr1pgGshaVpbeCDCkLCvGXRmhW8Lv96n4ypRQFPjNGPuXiR",
  "key6": "4jdJEDCh3SVhPo3zLgBYXpQkp8L8cvoSH8RQJtGNip5RGSMp6rBHEdQM32WAATeEQ3PFVi7nu1ukYX9s3niCCdCy",
  "key7": "3y8hs68VCBVLQE7ebLgCN5awGD9TfVVWc3A95bXyBtHkvYMLx4zpUZdyH1HtJus6YZ2AjrN2hrXHAeNr6yTE7s6o",
  "key8": "5ekhyyfGdYh1c9Guh7qL1fuvC7gTMRq3mh9rn2JcpF3XkL2am9SVAxyuoh6ZMjxu7DR8q9M36A6ALrFTVZqXppNo",
  "key9": "5zhWyvpTxfmc6sdThTWryhAjBL9bceHzDzfLpdZQxtHqeD6yo7qndw5V8qPEPwW2kAtKzaXqRL8oYjd3kjySEoct",
  "key10": "5G1Cb5kUXWrZ3h9ktV7KSSZvAAPyTUBgTj6fXAoVyUtCQGY71fS5TbNkmzD1MsAerhuSkjaCLY8my87oCjvxK32t",
  "key11": "5dNeKjHpMhU1ZFTuBLZyUSaGYUAGvJxkg5X4xY9bH516ApSvUmb3TF57b1fbupnssMgvyJFaYqsBeCwJyi5SdeUG",
  "key12": "4oi8FCnB577LnRNBg1YiMqW6APZYnnZBw5ij3XwYReyzKkMdyNT8qSsczX1XMJt5NhSzKLpX7Yq39KWKAXnyMuKR",
  "key13": "NoT3zChSkbrEwwkMCKyeniapxWevx9mhL2rzshrSuirsXzQWSvkd65eHNjm9P6EGwP1z6ck7bd2QKqzsqcoyjEf",
  "key14": "4WZWjNzokCxoLK6H9W2QDz8twhNetmSZV6CSRhiPpERonVackSNp6bT8pCzMVBQ2Z7qoT5MFFcK9giVPhmBh7fEN",
  "key15": "ezbazmTFxVSHgXLqhnaKbaMP7pZiBBpexuYPDcZXwpmQXK7PkNu8KVSaJCVvUfAjTkPaUUfhUGXdzSVPMo4LhPT",
  "key16": "mQE3DUf4NfVEuDknsJ5eAFCmXLgKDMpeaLGqffBWMMvvkKCyF3kYwtA8MZQJ7DtceB6TQXzJK2eoEVAcejEV1ik",
  "key17": "4KKgaApTssJFszzs45ScwTVcXN5GfhrCrWT1aQy8ZLzLTtG9zRxwLmGst7GCyoKYo1vayrkLRNNUNMFTm5BmVXqA",
  "key18": "4tpJBSDTAzsLCNnsLKpfS1iVDghN31eUU4pCFeKrRMXKxGrXCZrL5cwipgWLKxyRk1MrgzmhHWQ15boAuFvJoQhD",
  "key19": "5D6C7GqzBDr7CLD85DqBj2eSNyWKrgg7qg372V8nq5rHK2pQntD9ezEH3eeCLC1MrxKYWpZDp4S2ufzJ45drLdKi",
  "key20": "2qBJP5aYgr3ppxFAj5xSygY4rteZVzDj9SAKxG6ZRD1YAzAN3zRga32qrqALsjfqEnc2VnUgEtXRLGt89TXQeYBK",
  "key21": "2Le6kAJNNycWuHeLHJB4konML5pCx5zpLT9T94SidEz2mEynZ68G1tkqK2YDky2ACtpfr9VEYVua6MJnGdRkHgRx",
  "key22": "42mboFGDefxMjZYmEkRwJkiPokTKBdJnJMp7knTpRy2FEVtg9bBEiLvJ6ud4cMMf4hwEnzyrLhWs3RPkz1axm1j4",
  "key23": "2zB7xQHDYP57imNfnAgRuEC3b7oQ1G91h5VGQZDHoCcctu4CmWTkYWhR6TpgFg2KDtsYUJhcMUQBMoG5grbLK9Do",
  "key24": "62r3xxa5mLjexvnRqWSsh3HLhVtfSebtFiKfDTLWUSwiM96PuDEvAmdpQDTvRoF5yyYahVPipxWt1uttxN3Yqpt9",
  "key25": "4aS1c4GrUQhzHhQzR2xc6qCdcB4YeA8sKBPVaCbkyYfNMPbgSTEhzoXHHV1WC73Yx61tPaaphTKgk3mYy13RwTgf",
  "key26": "67rH5sDXR499VMzqdovh3KcRMUxP27hksgdzRVRnPkCLTGpLBHbGfYUxWhEEP4PdV88kzKYLXqyKKW7Ceh22gcVz",
  "key27": "4ZMCvbSv1Zt3uph6dkfy7byrxb3i6WoKZpVcWFtzAYA5JWieDZ7Pnpi9ja8P1XVjfj64dbwRJommP5fHH4nRqRdb"
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
