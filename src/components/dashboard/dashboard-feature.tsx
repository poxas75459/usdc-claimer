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
    "1dxkZftoqkgo6UkPrJGoFN3bZSkx6iEsyz85WgWsMZE626mYGRUyPLLdWt3ej71akrJJ9h7BXVBNyMmYcYvDmhH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26389UckyHmvZR5dBBnpuy6pc6HgeLgs7GqwiXYkSKbuCc3L3DyTgiqE9dn6ZSVghxkRwJnujJZSBG6qVsa5o8dr",
  "key1": "24oDDiPQydzXCfFtD2WCT4WZK7cvo3jZhfQfL9BzHmFCyRZA49JRUeRSEywboRopSJPTJ6EGXQ5Cqu9Ya3y8pnep",
  "key2": "31FuYSp3fS6LDwFupFUGHYZB2qD9SnbDbDfQx4U566etsbHMWzWoxBkZEeYiTMPV5bRph64Gc8A5owLPHJsJanTX",
  "key3": "3fTc3cT31mEW1BiLVYko2jKZnchKpgWdL7b6hLc5xqLZ7NUCWnCid5SwVHz54ZY34jPgz639vkBwKyatSaBbSDN9",
  "key4": "2TsYLa3uXDm38H734C3FXDgxmuDaE7QbjfuexGY39kSzFXjeYXCbuE7qX4QMUNicJcaUzwKYVhmoyvWYrZ1D29iD",
  "key5": "5Wyao4dEPfeWsnaJ1nJ9RsAveM21yquFoJJJjKbj63HsQnCwt4LFvquXP1HdwRXFzwHwPDDAUg9QQgBuyqwQDur",
  "key6": "TMgLP64TeMsK2v8dZ9opZJYQMT4o6EKDPGwwVfm15Dt841ZNvhbHsKUH3dZARF3qda6rkAVALgTm2inV1Xx399f",
  "key7": "3CA1AB2njxJEavRXuoa3f81QnTNeCRd1xhv1b4AGURdUfygUwLKB2UwFxTNSUr6rkMurfDAvTs5jgEALFD8ey82N",
  "key8": "5FqzaNxCYA9ukp4yap58g1kVJBkKdVNnbwLfbBES6mc1WK5s7G6mhCyyhGYawW888L6rj9UEqYbHXa7TUy2EzXmw",
  "key9": "4HTLXvC8PpFkrK3pbnV1tMBWN5v4CR9dSsRXHQY42cSjoArmGZctMpQAgbXWyWXhLrJxkLXPHdtUENDrN4wUzjj7",
  "key10": "28spbbZJuwDepm9EbWpvBFLrvoZsB1H6TfjSUu45AaNCEdDNwjmo7LBRsfYRpvfPyoUAPgEPB8MWbVfGwWFcpHEv",
  "key11": "2V1Py7d5Fxe5DhUL8q8veMuXyxQDuxinHsb3AXBqEwMYa9cEBhQPTVz7vXe7YH39ZPcBHribSSgKQfdwUJGKoSpf",
  "key12": "4d4igR5pvNXnyfh9k1XJmuteUZx38tYGCs5cutc9CnM445vfsy6NW9VjPaJsmavyKfKLzspy4ZUvKkYcoGnmsTd2",
  "key13": "3aPeqSC9gZtPNWh19f9qaGhW8rasbmNLgxn8P8sKQYWfF7qErLkwEgpLUTV5PySaK5Tr8eujqoKatiTSFYtyRGUN",
  "key14": "oZeQZpvGSWNeAPbz2KewCb9oUS8GVB9NwFfgkGbWP74m8cLZ564PKDSWX9JaxwfdRoeBsLrukASgP1ho8jwtv4m",
  "key15": "4Reb4VTv85ZxHsBQEp1C2RaRCYgEB9b8MsoYmAFpFppmU3Z7JgDAKZiqFsRuDKyuDitpmTTYgE3VBvsVKe4KSBDW",
  "key16": "4hxhJsT1VeSEZJ7cec6sSJktepbr2XpVbx89SmToUpuHv3CcD7FM2xuEHyVoJKcxApoh6SGe3tM9nP2ouBxadFKU",
  "key17": "2pmg2DnKGzt29C3HjczxXRaaebccnPoA45hQNiBsh6qdCcKAkkobGQ8FJCEhPyRVnF8WMEUPnSsXDDTVKsWgAkVm",
  "key18": "2XWJYenC7iJ5L62a84bKGu9ja5kN18SNWoN28sBJMn5tQkp664ZAUviYYbYtNDH5E1bXkjLCLtoXWMS6asKU5i8K",
  "key19": "5HG7vUxxMF7dJAmQnMUarpkEsvomg2JrvccL5XU88anDxxrT44rFRZ1Kq67ZeUwqN58vrBDyS9taigSiZAUzWVTf",
  "key20": "5u1YfzaYqvbteUNPJ2FWqQgp5NBHgkfSHN4NEfKrPMbynsbgxmi1oGWH5azxn4ppoXDD5ngtrGiCLRFUUQLREYZD",
  "key21": "paxXDapBex3GxJzpfdqV3DSuLtwdNUnAKZrnz5pRzoagyEndmgYUN5WJcU3f1fZ4BN8x1gz4J6qg71S7vqUXgEq",
  "key22": "48i7u8yW567m9oMsE176bByXe2NSSNNcC6EBFsvZMhHvoHFje5wT1vfTYiYzsqMMPiVvnJ6xx5AHanRd5GKhC6d4",
  "key23": "7BJs8JyLRu3KzJJK7KViqb63J9RX7h8xKgZWSU2YD8dL7PdWB46zeMADMVS2sz3m9qJGyd4Pg1NjjstmPrT1UTQ",
  "key24": "Szy82yo4c8b3ggGypAc7v5UkUfaQH9HymmkaRYo94brAmMaXJuyAgbd6mSjyLeDXhWv35fV1u6p5ycJdgChmKR5",
  "key25": "3pRZmaMfEGMJV8FD4jyBJ19aHDXpHWbdLu63UBBq7EyPKqyoox1vkocXoC2wdsZHwumVycmo3AdXq9CaxuVVFwuu",
  "key26": "44FTRhVZwgDBSV7B95mGXwFpgKD7anie2JjhNSutoKuhhat6d8NMv1fC2osB4yr224CKm9btZ2cotfKQXD8tXgEg",
  "key27": "4QLmeiCGvMEKeqnocaJ73vJo7EJppQ5qZMwxLyuWj2d4pr7PeoeHxLZUKNHMvecjWsGr8QacGHKPffjPLb8MzvRC",
  "key28": "3AnzcUaypjc4tWkEkMhYAgZWjofxDs4RFQsnWhRLWEfyXjUMb8XkU5QjEApvk5bpcXUsPGtYn9DQhXdfEST69fT2",
  "key29": "2XZRBGpjRuHfEZvZV6rTTqPcSqKc8gp6f5pa5dNdtEXssLqBy2au5YiKiRKHewzgWf6SWjaPwNb83iPgfosFburY"
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
