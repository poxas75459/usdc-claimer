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
    "3eyWh1BVQfntN9kg5TAke6ZsAjB6Wd1QPo7VaUP9yYhdbadp89giTvm48KBen3exjwWiCjVMHAqj89xn1NY8eaj7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WWBJ3yw9B9wpvq4DeoNTiN8AdqizZn1aUuTxZfYC7En1UfzoAHj3FMiwJb42rio5271rvA92fTseMxSysxmsHzx",
  "key1": "UH9nYZwW1Kd53RVvHbVxoKhGkK3wxJicUoyKRBboCLgUqNcUKB87ryfEHXXkAAj44rBku3um4n47uQ1mHdf5Bpd",
  "key2": "2YvL7NCHEcM8zk47ixKjCzShfi2m26JJqmRsU3LdqTZpoCJ2VfX9Q1bfocPNFeTZSzmz1HVLk8RS5pnPaKfcKGqR",
  "key3": "29jccESrAp1eYqerGPhvp8VkRs4XwMVkwVAayUsKcvrejvax39jMVsdX6SvzPHiY5jkVexagSWAAvm8tJTsrid7g",
  "key4": "XcgxPQL38yc3NMscxCvBpKt3DSdNgXhU12S6dgahEbWBWwpCWWTqsjJErgPaREJT9J4ZW5bdGedJMTNFRbb554v",
  "key5": "35FhCtPw4gM3YFk9uwopGrUJpsncbcqcZRL58NFRzpgzRiQFUXwgW3ahWfo2vPa5WuS1nTif1qJnHvTW6uboBwR3",
  "key6": "3YMk6WaL4fUn5nGpPE3oUKSx4rM9K9r66o89GzLGks311ym6z4cNu7m1EpB8xewxbRiDuytcGV8mqFwv4GaTqDPc",
  "key7": "29uY3NYNahZs4pAc6seqF6P6Bjjjyx1i4E7exq1KtvZb4VZtaHc8K54xm2HuKUqtbzgtHnfUC6sxjxjCgVnX51NP",
  "key8": "Z8vP1EHwLdeAGk1dC8QZU1GybabbbJFzUAmG7JynMS8egJLyEVtXYBFqujpkfQ99VL1W1Js3XUQmEVHAbLgEJHT",
  "key9": "4HVfcuCiGNqWjXePDXEkqd7ArTywm4av8ASRuAA5zfuFB1swZH9Rzy45Ni4Bs1xDRgE7ja7VbtH3fft8rcQC2M6j",
  "key10": "4wPucEaPo5jGRCRjPvMbJnGP7C8HvBD2YKfTyGzXM27DoNx1juREGTk5zuC6msmyimUfLPhyW49h7NdUc2RrUr98",
  "key11": "3Ku8HF47xZsQdqHtgHtjy6rm2b5wyixenb9WkDB3XmL4gU1MqzRF7tdduQybabGhk3DJha4u3xAgTY5x3hZqNpyZ",
  "key12": "2NorpJBupqUTM6Yj7dpEw6DpyR3Lj7bRMBs1J8nDyaFXYrRFSeHw92xHCq2poA3u1BreVwxA6DA7p7AknywScsEw",
  "key13": "2iWXMD2ra7ezJnzpf738qzKz3d4aqaiEpne9sUuk4Pm3E8PnqfujsGFrjsnTT4YAjWUKsns3y9QBEF3DvmpRG3e",
  "key14": "5jYUuzWyXyQahsDtujxHY1fYjXzADLKKWQLVZd1fFQ3S2LTQHSqkRDABGYTprWiAG5h8wJWhhy847x1MLzHmqpF9",
  "key15": "3uT1Cd7xgAQNSWfAC38UzPW8H9vC2CWZNyU4R7kBDLmzgLd5oKncpxede4DBZt2on9RSCCAqGEWdggHxuErPfonv",
  "key16": "3bAk9GHZT3vCwof9VAffnzJaMMZa5QwsFbo3dBqZMYz1YA4EG4VPw5ohAVtzTJUh4CrhEgwjBppDxfn8qT4f2eF6",
  "key17": "39VrWTpymFSWj72f652MWa6aWXJGeUKr8gSforgHNoLucqeNKfAreKYCW5F5KPsFNpSFjyvuZpGKHBop2wxuefcR",
  "key18": "2hEHSxiYuf5u74vefrMzXCR1yDqTUozdCiTZ8uXxu8DaKTiMZ6KowH4qtXckuWqxrTTFTza3WLcqy3cQjwmZXwBD",
  "key19": "4daiJJ9Fvwa13zpEUY59a7jcU4Ji58Q1kX9KkMX6ARWb6ZiKTmKwCDk63F8fjTpAnmPQNsMKWWRQiJ8LcB2qjbDL",
  "key20": "5KfjNZPNph28qE869jVCvKEspvquk5cUVt8KiuuP3JFGcTzuo9kmoTsNjbSsfQhvCLwj8r5aF3snezVnwKFEHyPH",
  "key21": "WdNpNguMwjpJhSKNBHRoqjoK4PjEG2XJbbUNrDLjiEyGMhdJWUvAj1MDsBpGWyGqtq7NXrwiBX4aUn2dptVirLA",
  "key22": "4CJtEATFtpbpX2FgewvMfZcQDDCqzWFfHevZftSAK37qX1Xj92QwhjcxW3To17W2dHDoz5wT1JJy3LFkQPoYDjs9",
  "key23": "cyvkK9ckq7bH5Tmvjq94xTbbhbu4vxQomB82y78sv2gLUPdVrAGP8mtQ7yeedyLXAtqrA1cPKuzuhXtrYh6kSEM",
  "key24": "39gZx4aWHGjxDSXCFkukGY44GazqeEML43R2DoUJaWy66K9ibepPRDuhKpfuQTa6jdgJky5drz1bEnvLfG8zUjRo",
  "key25": "SPQAtgtuqadfnf5dCrs8me5QXEYYL2TbZMvWo4zXHV4a7H8acE3FvUjnjGtcX5taup1M5SNaG4rC2BoFtH6z2bi",
  "key26": "4eGKtbfQ4FfqSJaPxkA2NyFESjkWK51tvwciTWHTHptDm6ZMgzUd74u9gsi3mvcrTy1CCK4ytmHUsxb8tas4t35Z",
  "key27": "57kikKNMq28JHmW55ya5vj9jotvgtKnW9aW5sygfFKgLjZCAUmiJ28rjSmtsspuTPrBbEPR1J5MUpUNh5d4FMzAL"
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
