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
    "3q4xjHp15hZufE2rajFwpdA165JPnZMEqebEK1ty8wnHMwtBj9V6DYw6QmpihZ6cYc35nn3SEQpGA1Af5y4XCVTB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27FpbbJ4zJV1CqDWbvswFzXitSP9sEBm22cnRDHrUvTjv8sw7sPnFcov6umwuYxncwA9L4JxVEMYM6GskaYe3qaD",
  "key1": "3K9f3LPPuiGsZYaky8vnwJNzfEuAd4dtKoGrub3NVpR6dQgvWiuPDDAd9ZXXfpxZGSXjxyAVwowGokiaqrJZwmAu",
  "key2": "4UWvpXNhqoEN9bSvTTHrZ2htpZVtzfYZW78FqSdkbREyKZamGQisaoCDrdd1YiWX8g1S6H41sCGfD2P4uMYqaaxn",
  "key3": "UK9Q2YDo8Qx1VzSVRjorR2b4n5ejnn1H9Q4wGfsWMPStdayQwejFkxyK2hCHDUYLmUvRU69NM3ik5q2m2YrhcWu",
  "key4": "2KhUq5JHi3RPwRiyfH7NgNqZ5f9AUyDCAybxk82cD5UHp5KQsqWEn4N2VgcF6nEEabzQUR9jNfUaA1CbqkErKRbv",
  "key5": "4pj4DyR6nGQhacnKw5s6uXYvHkYfa1M5Vu6oRA2x47xu971MqEaQzacM2wby16tQwfEHHGdQGbMDMaBXxwJrcCYT",
  "key6": "5L2ieYM3iuBZ5k3zFj4uQsykRtnuDHd9GqJZ3w78dbxD6EfaGt9gopGcdot21g4nwwSWpk9DbvXDJCBXRkVRmUaM",
  "key7": "4DXv9dscdFiNCzyC8tkuQPisXpEBAW35NSmvy2XeqqLeMBu3YqLABVKSPs7yZZeS8N7zb1wz3J34TXcT7jMnkCNq",
  "key8": "UtmHXTSSqdhwzxpaMr15TDxfRkrgji15nbjPMTxiULbxRXPyRQ2okU3JbDr2r5Ukvfn9bjwLCyVv6saYpZJfrKK",
  "key9": "4Zj4n3dzpwhWo85mapkQuigx8CwZnJ3vvqgiLZx587P9YXPTebyZqRjgpPwMinVpYda2e96XrqhhCxyf1aLq47hG",
  "key10": "qb7yFtSmCE6QwJjAg6Zj9VciWJuPZ3Z3M4UpbijGdRCiWVjZ4SCZkhFpojpcdWrrw6F1YFPKNjCzN3HWTiK45Ej",
  "key11": "4dv9vLRQyXW8WzJB8tBenVFUiDG9xg3mtAjU2Eom7Jim2ogDQUT5pf6g67JgXCBhv7xHW9Xzc4oYKCWaNkgyy23K",
  "key12": "5u59XFHtR7QkmYcREAb3rGER6AEB18WGmctfsSJ7x66h9Lg38Tyx6pvfWUvt9kUksGV51XpFtBkusGN7N616Z7eR",
  "key13": "4qfN98DbxobRyai5Xkfvyzz5qPmQrR75WCejQNu6oYysUG3bEhgrX332jfMWm2LbxMMZB8SrAmm6Nq72q6tLRa9c",
  "key14": "3QrmzNB6SAwB99XkJPrRLduNVP8NoDwkipNTCyogfvJqU16sHi5DNpMP371ufjW3NC9tKaKPQX42yK4E8sDL7nEY",
  "key15": "aYehkpACFCSUYMGyQv659dRcBZ7HncGPe1pJhKVRJ8S9SZFuwTU86BiscbdGs7XmSP4vSffy1gUaoXsEsq4SZzD",
  "key16": "5ULZ8ZhFmCDQ64AC6knrJo7ufL2yoN6gJKhRvcqCk95n16qDxS2GJFJhDAXAbZn4e6WCZwJ4Z4A34EmXdYgEUskH",
  "key17": "4Fi3KF1ifdqD9LhLdpGWbK8GPFjPs7FzQoNYy8J7rK8PUN5AG4RRe8ndapwxYJ59mndxsG8E49iVbQ1AgeeDyngv",
  "key18": "36SqSed8su3HEVo8nbKbv8WQSSJNm8br528nZRmE3B49ZsS7X7mhTUTvKfqVpxtgtzHTPXywqieZjigYgDdUXtBS",
  "key19": "44UhMZ8jmD9kXpHgFAwTCmB1pUSu6xMnz8D57LL7BwTjXf6vizqYLtVUopfKGQSx6Cde1jRdAi9DNH1g7G4UMYD6",
  "key20": "5PJ1Y4v68k6nJ6YgAGsCVQEWr1J6ogpEc4c9Ms3ohoT8WMzsf1YYfqSyNibLK3gLfDdcEVZD5qzkkBJezniF3FNm",
  "key21": "3ddfo82HpyrfemKS9cZNH2M7aWKrstdsFEubgFauTSnbo9yDAcfRYa2uPE5YYZ1TY7EXx4FxJX7kR9VUHQ1U2op4",
  "key22": "ZbgGeo9exAge9CQG2nDyWE38viYpgXbJnZpKvHCmnRzNxLKcApACGtReonVbmohx31dKhMXSfGc3dthiJhKceuA",
  "key23": "5T6N41svfQF9iwLcbNeaAsgPSENwE7DFawMvKUzxmDCFykE6eoUhHnMg6wuxbvjmNy5h84nLNkft6uLUcx9cH3jc",
  "key24": "4xhX5Ec6eQqka3kbcFmHaorZM3gmGQeK5dRhx3E3Y7kuUDKKCfwAwCHWbPHAi8tJzFoHnQf6D8q5xppkRP78WjtX"
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
