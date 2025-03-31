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
    "49SRt4SQ2qJTCcgAYY6zomff2FUQemzW2syB8H6SGsFdgf2ueYuBB43iZr5aQnr15E446ALrKAjJT4DrzAFecB9p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uQ25q8JMu35dGew8xg8Cb5rMKKvC39S5YzWS7VVXsouYHcQ3HZbxGjwUfwbS7QBa1BHW8VbQMzwronvwHpeo65U",
  "key1": "2ZxF9qpMUaWC6sKvJiU8qMzHtk5Xxy5WSHPASTPdg6bUdRNwpr6RLApneBmsSX99czZC5qZfy3zFbi2EKqz5GExe",
  "key2": "dP8PDoDgmQ4NeTithDbwL9AP4dt126S57PcyBffjz26YpreMP91hQWqZ3KZJHGau26nexbAixdE4WuSqZR6NLr5",
  "key3": "5zvjkhKa9DPaaVywKAt9w47NdncA2yQPZw3MeR1vNQobDhhHPcAPLYBTUdYb3rMBJp3DHEPrcAJAEpR4CyCcZjkE",
  "key4": "35tcong2vYhBqkhDPiaWZyj5VCEPbRtYinLmasGX87hDDm56Mziy5KDxfyrJdCPKWdr8Krq1cvdqKbLY3bP5gBA1",
  "key5": "2SUgKpCz4fSNErzpvuoyFoxpygpdKCBAbnbWd33rzpmFb33L6RevjrBQJdVSB2WyTg8HMGAmrKXtFJBYr6cTqkeo",
  "key6": "2fBih6KsMR8fDjQNiaHiNgjDdummNCn6AbzNB7DD13XWT2KoJzQi9fMQVEH7qydYM6a2ngaCmNqjpxPVyToY6yNX",
  "key7": "29J5T6z4ZaKg56VcrE8KTMUR5uUs9A4Gih4wbHt2aRrHzjFVgpNARzHXrXNrzTnw3DqPkQyFqhkR5e812ERzZ8xi",
  "key8": "Za8e6KsYjZavDB5KPHLWRUfaMee1PYL9CNiNLf1HCaUuBjvs7ZJ9NajUDvHuCtSpEb27Jgh1VrXr7PtQxEv7rXC",
  "key9": "3tZtDgkBEz8dNGVwoUNdZ8CfydEHzouzjXKuWg65gxvKiAyZePLjEQr3QrEiS4SjEdQkkymFZSoAxreBpN3R2e22",
  "key10": "5Awjv7SoJnKPCMD4euJS269YiCQY61ScxHPgzwXuTX4RwqnESeEA5imw7pKfjV2rAUfZiFLP7A69QBDftbKs4fbj",
  "key11": "3Y7p6MZ9WfzSJ8pvBLAnBN4bJcXpktkSH7rHmntewfBA8pUEf9PiELc72UaSAezN9g9LaUrsXruhLbayvrV421GB",
  "key12": "4w17BQ9EJEHqqTFfmhbxi3baqgni7V9hKducsfqtcjcrfuCsG82EHz1UHgCWaRJ5WS92c9JxCsCWWpqGJd2pVXwp",
  "key13": "3PpukvJ8gjXZPFaMwwjr5og1gxv6e4msRgid2RgaZpLhp1uiqJrhFotvDmZvQyjf6K6h4VCwCmtnehga2KKWs7UU",
  "key14": "3tixrB7HXXQQcCJHexkmJrGwWGuuDzQiomxHXf8Yp6UpJ7uQLPRvqQovhQReEwsKvkN76BRSVSEeanzwnawDuUFo",
  "key15": "4MA1BxvgAgeiu8Dp9CR7LMZbrgtKKvL7weaDu4BDVF7jXdvR1RMs6CoLnKHYkkh4NtbPeZR4AD2yV6tPvJQfHUdp",
  "key16": "3ZnpWk9L5SgWkoAYL9bRdx8aWDox568rrqV32c1Y1uLSS5FRdpMxWfKt14T7sakxM6EkMhTkNUZqPpE8UwyNMT1b",
  "key17": "ri2tyjtjBotBANg7zm41xXjGBp7xoWWF1GqzH9vCGexij4xa9tuwgDgXPxVD5B5fuueK9p7iB4PvhcnvVYJqCXS",
  "key18": "3ozkzHpUDhHypr1vDz5grqwXUMbaUAXnnbapgJ9eHbLssyqa2tEbmFD8ni7svK5gCgSAodotu5AVjRcQKSPgm86u",
  "key19": "5dYWBchRJHnzk25gbo2aguzZ1wNUWTtb7Qt4CoCKQX8zbYeGhbKBoY1mhLCFdw5z7VQEeF2Jp3TM4NrgAkzjnAuW",
  "key20": "4Hu6hiBnBEBiYWBc4d1irrKqudQXciCtj2ZrpadiTBFyzmcsB959LAfojAmDuXx5C79WB496XUHmqopwFemTTE9p",
  "key21": "5vJfjp2nZEJ3RD4qXixUZKsaFE52YrU9XGNp8AACbJU4YUkXk9dD3uZSby3c7Wipo9p46VhmVJ6EphoHPZU8hc4h",
  "key22": "2bv4m5xQQGxY2HKDUs6LCw1HqELCxW1cWP1Pw6Amb6vCmY9p3jLsqAUJ5qWg66Na6b2dBnyMtEBYBJpteSSduwag",
  "key23": "5ecmb1ZzQLzdipJR5NMheymaPipXNsbwGAa1qst9VcVW3VWCcc9qmgtbptBRFdYRmME9r7wvwY7CttX3QeASycHx",
  "key24": "4p6mk5Mv1iqmS9m5jaxTodqM5pfoMtX481rnRAMdahWb46HGXWS9Qrjgt42NVUmddNwnbQdrMgxsHmTcRjeVFVzs",
  "key25": "3mhRJ7X2Cat1Q8K4CHeD73MdpwN1deQQJRNXkiUPsk29jBiHet6oQsfBu5tVwfNX1k1Qp3HJK1zkRXeRPt8DjUrw",
  "key26": "5vXH86yqrHZBaN9cWoZZb9vQyeTASKNxmx4AFtc7nbZ4HL27cFPBPwZHyDUpft9nYZGZ5Khdbhhw6dzYHPKwHQU8",
  "key27": "i8VXdTSq9YVtVs1RbcsrKd7hRJN7w45c9iKtGistnz1C4ZnGRrRax3w9QxvB6MWSQAvwUehNWyLPhqrVFoRwXNf",
  "key28": "3bC7Lv2retoFgxvNMpqtyBFwGeWDa8m3f277u6zBG2SujB98stm16acpE4vNmAaFvvHmbdpKo1R6JRWMy9c5yc3Y",
  "key29": "5wyMsS13ydWLNrHxPKQiJq8FnoNdyBMZu8Ctgc5LMXmtkR3quVuxpVi7kDzbXy9XsRJn4ir9p3kg6waQaCzkwK58",
  "key30": "5fZDVaSYfHdEVyg782DejARZ8WXAwBhVPtRpeWuvjjwNy3KkQQhKhE6bn2mvW62m91CYhiyzMv3cPuHKeXCxzZvR",
  "key31": "5WWsgQTcRiywWiygvH8PMAQpAq19YZz2Z7zKbC1D1qGMMXuoWyMVrMKpabtBPWcuBEfKr2f1WwgTo42bW4WKUYmF",
  "key32": "P3Ry7di3FQZ9diUVCUx7pGt68gT97Xj4sU9fCnvF8RjLb9HRQgMkrjKqegAMW2EM4esLUqPESmyQB2yKqTNVvqH",
  "key33": "4Gztm7UmMRr2f2CzDvRGC7iK9aG1wzrurtyj6ejS32jnuUdZoJZ3WJk5SmoCvcpvtR2Fq5BLLAmh6ekAHMAL2mph",
  "key34": "4LEfFeFzsQvNiRfkYmCWyQomMUnHpr1nVCe9hWvovpwgCRHon7bDkcreZq44agsh9nuweXbikdyPUMU3Sy4n8gfS"
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
