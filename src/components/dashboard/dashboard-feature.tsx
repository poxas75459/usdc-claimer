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
    "2dMYoNz1wx2sadLz6oQZp6RWYRd3Zd7x4LERYXyEx3xQvwVA6iHHct2HPZiP5H7hHq7dbsfAJc6HKKDBnnemDAEU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Pq38aVyJTbhZAM8NP1BDet8evhdQfQVoe4ZRhkSoY43uNJZAAYvhgkR3n3LWXAj8gGZ1ngbpKhNHT238Ju7xUZQ",
  "key1": "Ep6RmRwQWaipxKVdHMYnike3ccUe9Zey5TqhTpp8XGHsd87MCPJdVE35X1HTcKDqXW7wuB4eZ5jELVUkxtAgc41",
  "key2": "4GN4oKFD14ncW7vQLiPU9DqZPVeJiPjbC5phAywvYGD8SShsvnm1UqT9bGNG55nNPWAHhKNpfTZCE6Q7LeSD1hUh",
  "key3": "4n2fygfBvRVS7JwZuLhpt6wPfVNRt4oC5V5tB7LFrgV4bzuWN4By71TgCR6Kt1t65GJp3PbF7BvJbeo3okwKzLUb",
  "key4": "4RpoQczC9xRacW2wUCQ7SN5m9LJoUsNvWy3vyGU3HdLJ9efYzs6xraZsdvcb7A6qMQRBEZgYbx4jqbB1harZwee9",
  "key5": "5j5Zb3RqAcVydYMiskNFgH9DF8jbEaDDDhfYoofdNzmMYYRauQGsKAdRXyXyZ833ongzbKepmekxczLCripKWP6h",
  "key6": "5h85uzCo6Te4jREWtmEDpahgmDnZeNjEwNkCChBEV1WtE9gNMxetTfDCvbYUkNobPrUMX4BND79w4hVqj2hsYiky",
  "key7": "h3pV4AfbnWJSjmNtVEqRzdpgbJcxJRQgsgzjvTGUryMoXjdC9yS5Yb7XDtXa2vGaHcRxvidWxL4D516PCYL1kJ1",
  "key8": "2Bed5GciiKiSuUQixnEDHCjqrJvTX1nb9ccftb7NBE6xCQmXz8687C81Dri7hwqbWbga4yEi1v8wzTCTcfPDDjE4",
  "key9": "4fArBgvD7SppEvui8inPDph8pk7CHjLginyNp9WnYGCv7S3EHTGtySYAZ8zFNpjD3XX4FjZt73GooBpyPTfGkmYP",
  "key10": "5ZGZhsjcwHZ19WbY184sC6YQgTcB2UZviVpPQfv8JpC6tSzPwt78dLDjQAvRjHqeZQ1WxQPNcJcJHLeDkj8YETbJ",
  "key11": "4Di1xM8dqU7N175RL46iGnqxREHd5zx6DZW7t6ezwK2uMtJG4oB1Ytz5GQbkBs8QjwdfxFvTVd9kKLSZ6gJVhxXp",
  "key12": "U9C3gfyLy1jYLnGUwprYV8XKr9AUxZeuFLya2atnDFSDEukYG5bRqxMHdH3SrFpN7De4F94BF2uZaDCU1NLNjeA",
  "key13": "4KHuMEHDdYbVtC6wgmBhXbkXKGjhX8uzU5gzVJaLVoyvt4SqUC2Y4WGq9MfKqt2Xxxh7gw1c8P7UPaJNgHaiuthJ",
  "key14": "MyZc2rJ5wgryQM3VnnTHaf8c3fwbVdhnvRbmUtzbyPdkKMfsz9Z97sJ4bkm9BNX9jYindZBxoogr72rVXknSDtv",
  "key15": "hK3eWuAQXXBhjRLWqMAZeZHbw28HThBAdiXrYbYCKKW8h1ebB1YEavzSbgmZNtMQ6VzpkyovP1TgrtBPPVFYnFc",
  "key16": "edZArY73svJLnXhitEyFEdq1yuuEDbbJTmim24GWn8QRqHZN1ctvBYXqaQB4mhwtuPqnTmSJZBBNFEwyokCWu7N",
  "key17": "4MrbwG122YT2etcBPg3qcxtfD4zoEuXjn55haTy1PZUBrxF2BfxpccH3ZPXTk8ZFimuwp6xDnWES3Ct4AbYxsvRi",
  "key18": "2gC5PfBtXvVosNbyAtVLyYynmeAtLAbZj6GFKM4QyVc4WCfAjuJ5pkubwP2Yvp5o6hLcVZMCuVoXFsGKXC9t3jTs",
  "key19": "2veMzBQQfHdPCSwXwLd87276mZma7nv92JuzSbh5KZA7Zkc8o8PKEdnbZtDZeJz7gwsvrbZr4pKSosEHYGLvcNDA",
  "key20": "5DkpgfZBksLS7W1BvqyKyvdLeMV541HGJqvZ4uPaWLWkyunBKuFbFR3RV1BzUFqfxbtJfbveUTDKdH84n8nCcEAS",
  "key21": "ZAvbTeH3DVNyZYXe9DSAiiqVwo8xDsG83hMiyGf5mBPBKib1b7JVcp5LKz3kfsThAqsXo2B6RXKfZZ9zyhuHKEe",
  "key22": "3wdhPikWHJwYpcpCy6JqPx9XmRuKXYbziUWW3nDyGQsh2EmiNU4Amm5aqCU8Tc9e6HtVA8da6o3RzZ3pWhuXnZR1",
  "key23": "2mcWCqE78vyr5oQdMNSJQagdDX5Cxv1JaM8oBMCD9PSsyGCSJDeoXop8PzshTM1yxyVmWXtZ1rVbW4xnYqi2NcSU",
  "key24": "5Vif2gXCdbaV9FHB3zPd78VUkdBbAZLip3rj7qUMdnU4ZaeZZfMYo4VCMrEv561NGGQwBLHtv3XtvLSJcKm8gk2h",
  "key25": "3cexvMhd87Dn1RKqg7E6qZF1qe6FeaBVMoyqLZrBrwVUtedaRCBvcRjp1zQqC8R3iPobybbL4oERMhAKU2U3qCad",
  "key26": "VG4q4bqXxiBKzhWdAd1UGQ4Ynhgr6M9qHBqHgfZ35TjAivYWJXhC8zuSfX8y4x4SLCNKtcubTGZAwckaNMwar1c",
  "key27": "58M841J7areTfnHoQYzoTkmwuFLHPXEp1uuVLPTdYBhLkk34y6iJffKPiV6q3dS4S17KDF2ahVYKw6AJZQFbYMJZ",
  "key28": "4K5QAPjBwyF3uEHLE9pbEbqrzh3JXFer75XgnD4SyoktqrZM1QNidR3z2pL6wU6VyNCGGobfBt7MLFKFh17ut2Rw",
  "key29": "3MRTeYgUD21jpVJCFXp9PNENCN9sLeed2sgwTUjVyuFFcs5Rn9aP54j9FRmyMZTofpmoFCWpC6YfEp2UszZHEyXr",
  "key30": "49LUUL1EC9AubVi16JTwZtJPfC1HSNDCyFKvdtr9ztF8ZJwLiqcdMgwwQmfdC1AWZzg51w3BvZvqZmVrX4fapm9z",
  "key31": "2oZnWQfAzyRJ9UJJcYvCE86qpwtQw7xvaZfXRk9DVHNp4BQ7j4DSmDhiEyMZNDMMmETvf75LqH1PsRBhyBcJNwyA",
  "key32": "41wEEv4jKMeB3r6T3cegqk8G684C8RJ2gokCmHKGABMoUhY68mDPUoq7HeFVuNY1EA6iscyABvCULiJLQqRYJxHx",
  "key33": "3b8DtHynj1rB5NyK5ALhShx5rAzzSYyZ11ykL4hUqRLawuy9MoZNdsyhrtH7au8Du34yd9huWrqyUvXAFyXwBrdj",
  "key34": "ZdPg9XpU68CSVeeUmb1WorhkYnxgH1F7HANKB9WzP77nHXuNbRdqhUinehVTk8P4iDM3hu18kf8a8QBGcKLXR1Q",
  "key35": "2szjs7iRQRUUY4ZkQB2GEqRG5fzhi5CdTYDB9Ux93BS2ezfkBjKR48qMmJv9CV1tYWNhQTXVr6SzcVbavdHoGPhP",
  "key36": "UuX9QQ6nefLJk2ViHo4fPP8efKPSK9bkLo2728L9befPAYKQKYPLEBxrDT7ddACJvkT6rA6SnYgMitwRwzvFu3m",
  "key37": "QCjY4e1XybXR5FyYDUoHJRe8Fnpa2rkW4FtCYPvBpo7VRHGaAkq2i8kahdzyuu1rsZND7BYk551s2HbS8ejww2X",
  "key38": "2jMwhLnFeDyQK4kLG4mUH7eN6rNnkSD47NtkF14KEhtuddYTB1rudHF2v3aoke27eqiikAivF5bxYuP3ubXBo9VX",
  "key39": "5m37KpFZNSzU56iRkn8RCFniEqD1WdDu9sfGzyAM48K2fFLPuboykebLuqD7QFA323Y6zeJan9orFp9NivryJo6e",
  "key40": "4oS2Z555wgC7jzga4KSMvKucCY27QktZYGHw6yDWTN95RrPjHQqzkQyxe5873wu4HXsEJjXiPegpJagh7cu3wSSu",
  "key41": "4c4kU2qsCGaZHK5ajAxe9EsBZ5c6TAgw4mNMCFrBigqCPyt4hgT1wNkRroHn3mSZfACjZMAZGDyp6bshnkznm1BQ",
  "key42": "2VqMmJ4uJzW7iURHN83JESr4xbgaswL6NxTsv5LycS7upABX8hrsrS5vbgPPFiUrZieyYwZVcgeARW991gez5E4P"
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
