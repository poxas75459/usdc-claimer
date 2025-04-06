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
    "47BnRCLQjrcd9sBBAPrrf6TaTg6dkoKhda3yzvWLut453F6e5sCzSaJCR26Sv4jRU634WfxuniWgp7YMSx5NpMEQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Qsy75kvthKPJzDLwHqjHpNjtDwr43Uj9tzWPMow1bL6W7NJcgk9PsMorqJoqPmN7SNEvezRgKRyjesEazUGqnUE",
  "key1": "58xXb6PropDLjiUcW4wfdxD6V7AJDQoCf6NWeHxCPwRz1BLxt5dLVeS25Jvz8uQuktBXkbw6xv78Y6qaHNexY1QM",
  "key2": "2a9KfjB7HcvGL6vGixcJxM3s6yv8wz8MGaZGASomG9qK6toHCD9gtHp3vaFWkE24gphSD13Y153Gy6qR3WBuEvXn",
  "key3": "2WwzVfTVjpPnKpS53xJN2sZg8PscwJstCKjz9PmgkP9xvsjLKdiLzvg9tbNSkcXspAb6k24qQoq47tJL9Lzf2CCF",
  "key4": "hsth7fNXiP3kSYAG5hUMsQ1aTTMCtCvDg6NyKJAuAh8HBUAiGNu5NiPKAuqXME1D3isbQrrSC11hn3F6E973Hnx",
  "key5": "2r8nDASUfWJ2PkJAKEvtGfkZZHsChAWk6C6A7ZcXFBXGF3q2s44XYxrUWMofzwZs4WfsUJ5kA3LDru8HZofSLvmn",
  "key6": "31egRgtoX4AWzmPT6F8udyzqT2wmaYBqFcrRvEnLHYdZUcrfoSpq9LqYHw2R7YaXW2bVqheZ8egn8HZgudt2s3kP",
  "key7": "3HjhFQF6mSmqp8irLrGbemMGLv16TsZjgV6RDZPUtqvT2LwMyWbJreVSL237Wm4rXskEZ6JVYS6H31vNSM3jjPV5",
  "key8": "2Ew1psdyAhUFsnfESJsDkt5CbmRD3j75sp7YimNwVur3o5FjES4c4Y1s4VEKiH6smz54oMYNgA4JkMyDNKXJxH3N",
  "key9": "3ydjSt4n33WPregYWBisGiofZMf9Ejtf2Kbj2da4nhQdim7AFukAecudBrU1MFZUVyf3dspay1mzjAMTArbXWNg1",
  "key10": "5mbgSS1a7ipGFRAyYRvwFbcYcdmaGQXScvHtTBsx4GcV3PxqwScSpxmtqEerNYeYD1JrKEoo1sQ99dLZTyyguarC",
  "key11": "2jV9XaMxmSo6U1w6bzNKrCLHzGQsRru43Ekqeff2GJbRjUJ7j2hh4Tt6fhLHZs7SxUmRcdhoiasjp8UZ9DM9Eo71",
  "key12": "4GvQroLaxgtVrrDkRC6kGxMmkdityDNJDNfWAj3avsKYxNu4jwFDhzmcRDZNvbpL6y5o9XMviAeo4fGHhKn14CW1",
  "key13": "5F9GYJ51q8NrFpDswznHgyLjgZwzLW1MjE5MHKNYg54AhmD87Em2Qmiw1thp5EqEFrggQai1pz2zzTFQo2kNbFSu",
  "key14": "2bfJC33S8fXkxdeB8AdDBYWY9xZLEsPo11MptHQTPP3vzKxnkMgqiNqUhCr4AjyhpqowH2z87c2eC9P3eL8Sdm8T",
  "key15": "4pBLsFYEzUCy6JFbwcZGiwpzVpEumB5xwUqb52RBm1HKF8EyrwzR6eLbMagvuwjtzoLxyj5jyDjMU66V7YEa7nZw",
  "key16": "dYpf2muaSFE6sLpYxM5gQsgTqhZEELPfRTZX2evmGg2hwVooJhH9VJrtsYkQBGs9HQs4z83yt843HMmiwupigS2",
  "key17": "SMQ1u6uP44Xiae2tSap2p8TbPf1kStjfmRnxKNL5rwiW8wkPpT4TJRe4WSibjf86sdyrSJnxWoXV1P9QyaXWQoa",
  "key18": "5e9A2sgefboy6Mzf1YYpnXkVpLLZMpq6BTEcbTVV741SRYtP8nURixt23L6h83Z6r36SQ8YzfUtFx6VMASzYasYS",
  "key19": "5WYRwhosEVohdXJc3TRdmdBPEdRqLgiJpbXcFvVFJZopeZfjpaz8EV3ex6QXdqWoffa3ptXLZDdzK8UGUWvrAJpW",
  "key20": "5uapXFjyUxqaUyQqT4ZjeVf3UBWATj2VgJBqjeovzPxT9kcjJTY5yLtyBwSSVnzw7jHt47guV5p8zR8fj1wTMQDv",
  "key21": "3M1eMP22y4A3QxvpyJGPM2v2ptM5f4x4ZgESohWbFbiVzEKFPogFZJYvesGCo7iCqhKaYiSzpfrnpCTbo2nihaTW",
  "key22": "MsuYoydF5P1D8QWCQoX9QNR1Soc6XMJXTwyQxLvZnXpjRztQbz5gw1cSWwL5jXvfEGcfbhRi2pkKrpT9fGsYqwB",
  "key23": "G2qVe9VL854FzpAxPFrWJVjif2k5S19nX3VC1ZHs4KGGMwSuQFF3qAtus25mNVfarZhBoG4T6RTiQTGcyY9bVGz",
  "key24": "2LmQPvRXbSA7SHcYtrLKpVAssZrrvQaYkSFdxKjedBZ4PPkUdfimrLJthgfnozcGtafDG4HSh4LjUsxjKnpqudnm",
  "key25": "4ttiPKP2Trq63PR5djREHeC1f3i68qxW9XA5deJSDLPsYzkKvUntYhBPqopu5aoZ7rmh3vU44cPEXTvePUoG6yXm",
  "key26": "2WVjYyHZi76Mwc314YjoEiwDC6CxywJtC6S7BELBSjfTa4bywNvjRp6gvVapoLnpGWYEznmi3pDD6qykjapWF72B",
  "key27": "aw3kJ1aeemLunfPQTvQLeYz8VHMx6kjNUvjNbzeooQZ4Bkn1Zy79GuhAU9U6uiNH8uED19VKqAGHfcrBEAFEKtb",
  "key28": "2cnq1GvbLEoFHAfoY9C7YYSUVEtswSbVFV7ofPbfny9hM2xm9baRrcqqFkPu8VGiPxKLDUzzVNxNyP9QYEjnsYEg",
  "key29": "32F13keUZWnPyZtJw19hbUmR8cti4HkQgHpqK35tDxWNTEJfVHYKyRKTH8xYozrwWv87jUanwsReDLmPBUi7UPob",
  "key30": "3HKGQJFb2ggFUw9aZnQjTD7pjdgGuAmuPaAmCpF2vyHbB7oBUC19URNPdErj3zRVbRRxFVz2fjMidcimwEwsPnYi"
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
