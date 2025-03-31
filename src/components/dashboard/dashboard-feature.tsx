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
    "34wTRx8a7H4oLXZLbfvucutQugKU2ae6agVLJUiHGXDDoLNMMniDiWatfAGaZxCVQQRrGVvA5zbH2WH5uK6nPBDH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nXeLQou4N1x8QNpEAd2gSeuNCeQjr5h9dfWwEvNuha3n5GuL3UYV8rsW3jvNtWHoZGFix7GtZjzekU6C1aoKMd4",
  "key1": "3Pam5mBBemrP5o1JhgpGdMdjJiAvGVFwxzUTcGf8rTpo1gnzuW6zMLm8xxLJDFUWSpd6CzL8xrJn7aC9iK5dPt3D",
  "key2": "3KHESYooVJPB1M97MAYW1brB8kgUg1UqrPAz93vNeqHYb5hUUPV5zhXxtVGU8K9Zgd1gBzHKMnvNxjkTxvr6rHkm",
  "key3": "5U7YdfwmuF3BJ2kxuuSeTF9Pv6FhZYBinFgATS86zmNdJ3ftzqYd1WMTrsyDmv82wL2DKhe4a7RCpSdgg1nfkdkF",
  "key4": "54rmKDPELteQ4DLAuytBMBz4EawsGivDq2A9VjNHdYQ1RPFHCZ7pRrgmWWD6skSVnJQ37D9nbEGFzymFu7W5uhgg",
  "key5": "421Wsy18q45eZyVkaPy9GUTGkafvaFxqXWrhd5kpLmDLQ2AytUEp2aw8qVg9Mfv9nXAt9VAXB5bGW4m3e4kdXvmF",
  "key6": "29FpcPJxiyTSfmQNfQxdZmWrvgJt32q9WqzGnu7mV5gFCSr9oZCcoPZiWcsteUmLD2y3MxBbX3agWecuTg7HoHnS",
  "key7": "RRbY5FeMtyUqkTvNwqcXJkHEMTnFNUXpuP3EZH7fgURywg9mf5UkosWXtLKXgFsKrz5vEswwbm6XweMGvuMyMrq",
  "key8": "2JZP4QC4cCkm9XJ5Zej7fq5wz8WTGWDrRst89oYYJhtdoC16tp7tfmHWGW3x66pcmc6sbCxLa1yfmEXDeJZaEdgb",
  "key9": "3cM5Yi8B59LKcajtvYTkLqw5gjPwrVhLWf7LUF4KHX9JNU65dVGLbMV39tRapkSxf6zXvQvLAjmfEKDyaipZosPH",
  "key10": "4kghjCRgPtP6T51oKuDZNWHUr9JdVjwQ14CU5ejufiPMNdx65vtAnj3NJQ39Apw5apscB8pk87eV2UomPYRjFs4W",
  "key11": "49N8tDHyhBcjnNSQQs44ZxxyR8eWv27WGos1CJeFP9vfCqb1G9BPkg6TJcddEQrAddZW5MTZHf2GA5ZcDNgdtS2A",
  "key12": "3dXeVq5R1GVA2DLHVyeJSreSQZ1qqmSJn1cAmCHJaRh7DezaD51wBkzQDDXUcB2Wg9aEBFHfb1EZZ1ry4YV49LQE",
  "key13": "5kebhVVXg49KP6TAvTAyQteS4eJqS8sx6gTu4Q3urnB1eTmbYmDgoc5Lys1WKa2Rv88eGhMUjiUYmJLfkHpVBt6B",
  "key14": "58wuoZyZeWan4V5GWvCogPDARG9y3n9Xy973repj2it25Ag4QgmNjvYLx7NaBWzeDeLUU9LWtCAsXkLSmxt9oYLM",
  "key15": "nusdTTBV4yuUjzp3uajLNFAsen2gjP4wbGJKnxzBSoRdZWXrFNR6zz1gk8Pp5pxDfPWxTNQ8wpo4bnidfnNthbp",
  "key16": "37zqaAgXG7U3nLYZ5p9hBtBucZH8BmE3rd6hdLRco9o3F1gJXKfA5eZGiHmmjWiMNEias3csgtw7S52AUC7g4vPE",
  "key17": "uPTDHhEJf9mtCJa3aKeGMD1bpDXTxYWjb6hovCT4y77aTHCQH7WQVDLYaJuC69WPDqV1EB2u27Fh7VS4xs4yzoP",
  "key18": "2LJDF4cRvFRt4tuCtRGSnVHWisWbhYD6wJqffXhLFHaEb3gRVo3N8oXpkibTDw1DkkMCBJCo2a2UuyrXQH5CPyrJ",
  "key19": "KkPCrP73P6htn1eyTLuW5NfmE7ETJqsFNczsVWkZrP79kksFVxKEZ5SJ6Xd2bFSmnE96C33BVRUZSXjMV6JG12k",
  "key20": "KCY3BBE4xdtoh9ASFg3WtmqK1UsJcEapV9erpH7T63v6z7dZmWmHgLDEPEwGv3oeMpa22vGhqK7zozqhz3PYiSE",
  "key21": "5DfTNzNz1UXeUE214P3gwsSHqvroLHx3jieWwQRb2eLnTjiCnFXHzdFRe3D4F7Ju2eVXjhNZanw1mvEi97SZLtdC",
  "key22": "2dSL4FSrwn1F42KmpSyC9GEcSJtW5fQD5yXwFRieHxSVWtgKvxy1bnLqomqAz8jTwtT7Riros6JMVF3jsHZfd5Cy",
  "key23": "3nLBtDwCP7BRNGU1UbEw8vszwoqpXKX4b7QqC2USCzoJRDZe755UWcJFQe3imGzdRG7Rp5Wqe77BkvhdSv8GuwaL",
  "key24": "5htrMmtJrBJLGpywKu738iu7n7WhJY3TXg6RfXu72RSSWfXvrnBWXxUZN1aMkjzbDRDxjcnZ5BZoSVexM2ezRWC3"
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
