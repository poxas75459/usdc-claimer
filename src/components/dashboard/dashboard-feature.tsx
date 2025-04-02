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
    "4uQ2C72CxuptntxzyWyxYSMxeUa5mm653TaDLt6PQknmASXJjX7X6yWFpMmrUFRYnvVJxMyPkPY112f1iPDTTDts"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3whZM5BMBGJp1MZWY6yEVX7kJTHnvdjCGdso6DWY1zx3MRCJPdeByiGwiVoKKjdPGWsJL9QgtZU1FWwahVqkaJa",
  "key1": "2yekd42b2nsv7W7t8jzc51jNMDkmg3SHVurdBtHK1d9PBu2RfqCx51MYe8TjNZ4MTeFm1BWtD7kPoGHTd6FVZtAH",
  "key2": "4JLh1AMTR7LQYXCgjhnz6yv9TU6zqmGrYjKvjwMTWGcf2rVKowvuPqgXvcnUEdzbKRhcGgGMwUcyuWSdx7npfK6f",
  "key3": "Xd2mtm33obNeueJ1E2VSwfXg5JGgVsr1BZXiZGCq4e4uyAHyKRNFDxvb1T2NutXZJRKuQATr2h21yCTKmrXMe7Y",
  "key4": "5VM7FU9YRyGvZR3y9gAS1N9tiQh5jQaXeUicmj9wLY8qEuwcHkUavh7La5ZHi7ke7jUnez3CWFazQquGRH7CZhiR",
  "key5": "3ZMp87RFTwnTkDQbsNeHyf5drxy5csf3dTmRD8WCUgj4oc9YPYBreGC8GmeK1zyGdLrbaN26sVHJKxfn3kRUGydn",
  "key6": "5nabfrWpcbWL4g8Mrr5US7c75JHK136ds9no43D8cVBhbdyg1LoKdgYNKkmD2x3LxP9GUksLi4M5jMTeiPYdUaxK",
  "key7": "3E3FWsSKadQNKdJTThPoTB7i4HkjfpC2vxEDRncEeSjNemUUQZjnt91TVRcETTYeapjZvie2bzqmtyMBoJWf9feW",
  "key8": "JEhp8yZ8tF8Wc48mbrN9HJ1FMtcPC7NPkEqUSVWGkqeQrUW9UzDHreVEb3qDr46K1UzD6gvZQrzgtCEjiyEvMYy",
  "key9": "4d2CAeiCaMYSQn74foPidj1bioaBdJVfto2m6FD8TxxsU4tAB2geQv1NVw9CS7sTAopAt5yrV6dMzczXLmJ8mnmn",
  "key10": "6Qzamy3XXYxGrAwme1j1ZEfRfhyqJxa6fdpJNFpxLpu4uZQroxmMoZ1bSouoFZ37244p1gfVnKJ57HVfs9JPiei",
  "key11": "2hzy8shybTDzXrFyFM9yU4BWYKpXmCaVP8E9d5MC998uZiczUYzTeyH4GLytYFNUSZ2X5v5eDXWvpjnhgzk8A4aJ",
  "key12": "DSFbNK57aJbLcJPWpX8TfNXD4Te4ubyTbB8QDhR31wUpMKTDSo7FDNtcLngj6vHY2VgNWz67tijDLgCoxb7N8j2",
  "key13": "4Xhb1M3uvdg5sopAkgRiiXnMumV7Jv7n6Z5HPzYkbd8Nf7cH6Mh8ced1VTYZpTisJv8a7Jfvar9iAJNwgywUG2ow",
  "key14": "3aSvjfVatwxK1WRnf6gd1RPnTespNnjrwUXfJC1MNkparYiSkdABeGXfrzzqQdZTRBkvxhSL9iEqaS9F98fyhB5r",
  "key15": "8qaQ3EVXbWcwLT8dRrUP2BwQSoddP4G6jzuxdeAKqL7AAPyVrRCC9aMjn9ckYvMkQh4CcRWny8VYuU5RHGn6uwY",
  "key16": "VxUSPwXm3rH8Ti2moC14cNm3Vgsv9YmfqE7VFoug2vZEXunDEKLxLzxdAy7qncYmuGfaPYhj7BabJvCwsb6N2K7",
  "key17": "3JstBnMpE7BkTNV1eUdDCRYbaht5EDWjEnHp6uRhSbfP1T1fqMHcBsS6Jr4rAZTZyKJi1o9Sq1FYNzq3RZGG2bSG",
  "key18": "5JLei7PGjULnavxheqLFGYvbaWbhkA3AjQkd7zhNsECRGAicRuXKDaNvJrHYPr1WZXDY7ZwQcdtPCiVF5Ur7xjVC",
  "key19": "MVHQMem43z9qCvdHdhZi2jttWNRZYm5vmkwjXax6WCQjYp8eF46sNCGJ9YFBNYnzrVjwqXiSk67anf6NaNSNacr",
  "key20": "5evBdHRgSXebuhCQuanqnuRTJCb7MTQS7MD5svn7Y9kDz4wFp65869iHa6tgUsN5UtpkY6CPWKmTg6JfQBfrUnX",
  "key21": "3u9wDUa4wHMuwa1BTwLkP7w7iUZDA94cPZ7FiNiPhLEjj2eNJ5KCX8ZeDFcjeLo5SzXu7robep26gq3paZ8M5XEe",
  "key22": "2pDm5FV2j7cbcVigd8uvZtWevwpMgT2gt1syWYVzUhbZ9wjd4B3Zt4GvZGxgWWqmeHrEjvnxH7TaqqhnmZPc8vMC",
  "key23": "52hzHQ5sq6GNWCEU6Th3SPPuXsogKvGc8AXkLxdfmKWJ48rLxBiHiG1xGsynTnCBzEHn7uWxLr2ZvtJGMDFT4N1g",
  "key24": "5voxUZbWZKZQZnv58761czk9RiDxhd7NbdPdRUQ2t7mZwfREr2CErcJemJdMybRiR45CzKLpofheoyWaXcWEo2E1",
  "key25": "2wWJTJSqMLbUkD26FSQdbUx4McptghyibLNXtxdMcaLEnoEGEGyntL5NtNHhWgEFazqUxJoBUZrmJPJv2dgJX4ye",
  "key26": "2M3ibFwQ1WG6X9h57yrK3vfz1F2upw9FMGtqErg4Q9zUbEqnuSP8tQ5Swhp3Rb5nqNQCffG5r39fNDGyU4YrGVpp",
  "key27": "55FYjyy8cSuK8R7im9p2swXeUqxSheGkkwGiBKNFcxa8vXS6vbLo14VQfaucMeGiRnKU1wy6VFvgzLyxh4fp4N1m",
  "key28": "63Cak73yEzx8LSTybVFM9XnbRy6fFL4x1SaCfqLJVzkfLC2t3CMH43a6eSaUwXPGAzCdorrTm5oPJjxjw7qYor7h",
  "key29": "52yojzuCJQEyaMAAEJjYFTMuz6WBRhCUVu3zkVZ52o8egayAh3abUVZmE1m2Pez6LNhzXzwc3dNdBt3A6cZnitqF",
  "key30": "2cifHGoBYo6XsdiTXuH1R9ArJ1FGWXQXziAMV9d5DbvdkXjYBH3dnrp47GfWLJfzYYyZ7niPibVvRvYZDnBv7u8g"
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
