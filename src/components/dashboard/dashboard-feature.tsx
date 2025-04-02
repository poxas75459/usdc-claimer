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
    "3ky1B7SbwGoWsQfFFBUhAefkNeCjHAVA2GMf1Q6KxudQBSzJ5vvAmDTvjPSGoCeTQe412ohCLPkHy7jMFSMe4aE2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41tymJhpuTVESpbPhizoAWbC3cr2qGBQphN857jwLzMzftc16Qa2zPk7PkJvcuEbJdhVqLrS2FbeC1EPAzMxHS6c",
  "key1": "32sQJnbgEWfzQnduxYXXjo5bicTib9qSzKucipvdiQH2LfRLgSUFrYXRDaGtP17ziJBoNCeE8gS5xKy3cpKdGRGZ",
  "key2": "5oH8ZZcUZyJbr8C7cmcdn4qErxXgactq36ovJH66e3onaeZiBntiH4QB2vEqJ5sCtLNJyesb8dCjQTHXbAG9bA3t",
  "key3": "wZpbTq2Bb2pZYy6exBHsQUgkRBMfFFpMn8t166mMnVJBv1eikpfFZsSPKVofvuNjQp4ZfvTrjH7MoexXW3Si4vC",
  "key4": "41Tgi9ahgpHNPDo4ECKdi9NxjMVHWKBZYK6YdYoW9Wy9pgBLtwVnXoqcit1nQjUfu9YcnK6Y6MvnZrmoCFDAftgR",
  "key5": "5oJhGb8HPsEsTYgqiEVp5JT269JNUhbjbkMtMLXcZ2juPDziwrS6CNNe9UQY4DZ8dNdGTam75LaVyZtXvWnMCeAp",
  "key6": "4B76uYdDgzG8z92nL6y2r6TErtBJJQiSuKscJGtMWNAgVrikrob5ZrXP12PhW6ZtkCgX8vqw1W5edLLGeSNhdcRf",
  "key7": "2hYgQGsEdj5N1ZAt9aZ3hnBJNYbHJdYfs4nyAc1kP47ukh3kHDPToq7Lh2NeqS9CRHrQxLFwNhJb3atMb1uAQuwq",
  "key8": "i4HV5jFhJicoVaB2AKMJcbUdWz8Em1q7WimtK9stvJVokTgRjuhp8DvExbL3Bxb6Mvoq351pdnkGD4HrDCTFRy7",
  "key9": "3DhAuSwkhKUQAySieEKoN6GmPZANra95JGgaJ6gptQYL5JntwezW3MH4AY3rMXWwQFhcXy7mryGfgoCQdnQvMJFU",
  "key10": "72XWG1uT6UW6B2r84zfL7aZXCTrvSiCWPwUncwqxaC1A9P7nTFJtBU8BhStMx4Gj3G9cKDYAouec5iHa6VCHb1i",
  "key11": "5gVpeF4eFsCYt4meoxYmXsyUX7Dpz6hR3mAGxNtMhP14qoLsTGqWke7KDyNhxRe85KjZUqt1oPaDRT6VJAR584DS",
  "key12": "3Wv36wJRF3B6cPGwp27HoFEHmkSdkt69KNq7xjXBUffN9BV5RvuJtNCg8LCppiGPM1FYFA6QPG5n3eq7J8mvre48",
  "key13": "4CcNk36MhHrNZjRWJsgoqXRQMRu2zdKqk98zNPYiBs739yhS8Dopa51czyUQQRzN42fF9TKWz42CHFT4hwr45BRf",
  "key14": "3pkaKhBtYDSUkrwD4HKZMVVytuvDAgvw3Zk999b91XVhNAsk92JgUwT1v2dTsbYTWhefhdPsnW1BRMiUBna86gZH",
  "key15": "4zJfu3rVCJMPkf7TDBtktrRMBL8rZzmqiDd3tKQGTr6kX7Ue5Khg9Dzxx7YYcDHwTCYiRmCriDHXth5QQXbx7nQr",
  "key16": "457QXy16kJKuRj1Ltw1bmTLBWGfVYXxH2wV2R7FCt9saqid8FniknB3VgDzdm96k6udTdHo3u3LCbZG8L6RVKzoT",
  "key17": "KdSoC7rwNzQjGh5UFdg62KgJ6YHhaZC73KUa2Xqo2i7LhRnRhtAudCGyW2rkLea1VfFGmw3tCMf7TakNhz34vf2",
  "key18": "3WqqNxYeBC3aAZ1DunfGscFmrkX1PghUg7UHLyj4YkadALCDzjpPuM7i4Ty6iacve3yFfVP9NDQVdGXJ19UoWJxu",
  "key19": "5ytJtTNeL3rT7BGy89fLs72aCTgVgrUNdi8xHRYgyu47fKq9nYy4DHLMJTK4iZQF7cZDdMBA4L21mh9SKVbcyF5a",
  "key20": "4ZL9GNcEL9UoU4mESRSv2EkvzLVGKx79QYYthaDy5RzhaB68wcMB8hbka4RGTgRmxC2gdZanmLhUV3uN28oXxr9r",
  "key21": "5nzXg2Xme9wkxVJyq8s37wsE6CHb1Nq5bX4k6m4YnHDa23y5udqLcn4JTYNumLH4b1ybqQKweUcaPH3JBWjungX3",
  "key22": "2HQw1mA96Zv48KHtM7b3pC2a9EfbRHA3hgxi1GYf6d1A1i9UJ4VEZ8pAT3GT4aJn6C9xMdsYPkNYvS16e4xxAiFu",
  "key23": "pDocBrkGBiiKfQw19cxWBN7LwiswNMVoc5SVLhp6DDNxK3g39BumNp6ZMc7bQJQhSJqKa3GNMz8bd4xJR86nhX8",
  "key24": "2eRkrsfgrdU51azMd5T3W2UwD3GgL5bEUvVEqs732oZ7E4g5deiGUf1vwXxCamrqvT5ExcnFDWemi2w9CZAhHTst",
  "key25": "5n3ZgzyQQRUV7REmhFKKdEJXv2rhNQZcjCtoTVbpgdRrgAwWnDUm3ToBbRgCCfdER3nHRvoww37ouBMCbh7r8R4J",
  "key26": "4X7H2HDMmcMKAi6iTG4Y23NRvKeBMxtnopVWbq8TcEkFxBPs2VsB8HuRx27oMwWiybtH345ABUT47kgMTyoXqamN",
  "key27": "5EvNNZ9cmuzqXTMjrc9QDN7juQcsTo8129V9khdgNPwbn4A7VusFghiJpBdBqzstfPvWdNEKYRH8dDmLz6eXJXdK"
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
