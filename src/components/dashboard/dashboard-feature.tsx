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
    "4Go4hqesaALCi8e1MemKF7q6nqod2pT7BePDCQisA3B9YEhRS3KHAapBo4SKyzLi26Ymr149SigHahyHX6CC94ED"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48x4LZRrSFuVdbXv8yZwJgpwAhJSrdoQ2Z18baD6FLw9co9n9iUqMvRQztse8aztv3MA9CKbQ9AH2toj4CfNcXgr",
  "key1": "2QfsS1vqG3RasuURykFfYFvGrfKT7Sit1HP5gLknQM171KwLGbQUTP6TFYojLrKCZfJHpHpFinqnKh1Jvtog4Rj7",
  "key2": "2qmw5agLcr2yC2WjY1o9inb2TBb1nYpuds4M9C78aWukjWBqNBZyAaZ5DP1E7j5Wc9tJvnKuRhPFizHqK6LsJqce",
  "key3": "2izrk3Thk7CJoP44YDGu6V2Wqwh825AR1XBvkRf1E4hXv9aKr4S5cQ2K23FgSt84hr8aAECdB6KYPRFDnLKyie61",
  "key4": "5pkkvNVqXiqe9QFKSqrjYkT5tsaeTWbQeSdkfucKZGquoHhGbVEjUcMEJKiXn58aBSWDHWwLcmSsEzayieGn7x6r",
  "key5": "4oaJA83E7VpfBEAvo3QPuMTxqcmKHpK2e1bYMzhsK1mAepG5JKyozLjUfC7uBqoCqWJP8c3SGQQMiPaNd25Sv36j",
  "key6": "5FLoeuv7rvoT1wwEtDqpNatBpkv7ZBmMSJufCSorSqRYWJfGHhHzqEGtoAzXd4oLViSTSLV8QH2dfmru5E1FYWEX",
  "key7": "33rHcG8RzNkVoZ3qVYjUXDquqeYSmqY5rH3tPAJDueee8T6TcCWf8kbamBqFKxfJHdWpDLQQx21HwFmKzZpTTSSP",
  "key8": "2cFBVRB8RNUYj1wG4m8MhhsdBZ39KwLAjULo6BCbxawTwfm4M8Sk8v3vMR2XLZ8hwJm7UhpUd4PTbncNGsKqx4iF",
  "key9": "aufMgNzFqhY6Xm8pqbzTeXVeH4svQjDAw8kZGmQ4gTXAM5C19R4g8Uyvh8dDHNcoWdBgAgsip7z1HcfPBuLYNE6",
  "key10": "3XRKVTZiXWDWDzdYaLLjTXKbnawwZ8AhAfsrKjzMTNhHnRQJ3ckhkcFKCGhaEcHRUPEATn5t5mYD17Vfbn2URrFm",
  "key11": "1BLWx8zPBxaG7gP8hnLGH7rqDJQ9eTsUP6g9iLam5zXGa6s9vSAEBTqb3yhJWA6j1AT9tM1PMWkEnVxQogzW6HF",
  "key12": "yCiXzg4sSUFVAs7nWuEoqQkisX1un6xkpHDvhj35LPsXD3948eN5J7gQnzCsFXnEDagK6FDWkZ19PnHxNZnDm9k",
  "key13": "4CMAdgdr8HeTPnCa8ZCSK4c5JGxrrxX7zinNEoAuT7eHcPhhnQn71FkHoZ6wGZEf9pb6ZmHPx32BzUn3V1djcsxD",
  "key14": "3SnogGQZNFFXiJwBYHRVaJJGVR4MUyLtBipXV6G734m4RD6UGdbNspAh4Dfcya3ASLQrHg3xW33ur1AEZxfwxvZp",
  "key15": "2chUR5xqZ2t8b4wjaD5fypM16UUChLjrze6kHTxTwN2dkRVqBN2aFXaSqS1944HgR3vjvkcHF4wTKoJw43fV6Sdv",
  "key16": "ERkk8SH7ahPioJDZZFCP4bzDYZBstQnDu98CiNfFsecSSnVg2i6hqnEgH6GDxPhSDzeVeyjHYAj2XyXK6WVv3Em",
  "key17": "27qQucLSr3DkWKeWQbhcFHMo8RFt4idCi43rpSdmDYyWs9GrLiputF9Q7N32i1PceoH64TUHs4JSCnBxFEDtpEtQ",
  "key18": "5QBHsZw8u3oXpYFKkCyHUG7dazSuCSQxc6LGfzexvpirgau2F5rrNSLEtbDKjMcBboFa99NdEsigP3jvnYdEfokh",
  "key19": "5GsD2aP5EyWKxuN9reU1Xhq1AzhDJy43pzkVDhenn2C24oMBEsnH9kCaMLs9ps2DzYtZZUuZvNSrQeYNTEhKCDEx",
  "key20": "43otPfZ1MCJqRKHboZ2QA63gqG6xkfuzpGQxLzqeF7RPBdJSkxb2pH12cQQ5Ce75cXCu8wLUcmFmep5MmLVTU3Hw",
  "key21": "2jU5nrR9WQXywYKe1MtfQMnpu2VHa8kMCsrJomyT1XCbh9GyEnkjUNybT19nGV7ZhT1CPgBsmoNViE28XDdymepv",
  "key22": "44451ieiZxGg4aqozyDYAgRN6oCNQVgpxSbnQZ5pdc5WLyK7r1dKdDNiKfL3otH1aJbbj7zmyzb7jAmWpf7qBG9e",
  "key23": "3RetX68re437YR4GzqVcLvwjEF1jQozXuKKphz6ZUgeNDD7C36uHbhxupJcH8oZpAYqbkBEmnAm25QjceSKd3GFk",
  "key24": "2EiJWXYKB6APTZiYGsSPfhmb29e7xv1CqFzFCrAhsBbgCyr6rW7efALrAD43Kcvb8wZLeikdZAmjeLksHHVEZ6Jk",
  "key25": "4LzRgzEqyHrVZiE3HHU6t956FznsD9qhKpqMkASs9tD4AL4LPqzsVAzTo53tf3mCiVbXWzFSAA8VocWVkvZ6TKF9",
  "key26": "3dnb6cBh1LsppkQnE57H6qwtyThwwYN1aVrwUFzdC9BduuzJaCLRBGJgMJ2S21nJssSgFK1cCqFzTb2frVCcgHmZ",
  "key27": "5oCrn8bNJdgkntetLjnv7BjAgUgsqS1McSv5DHjL3KpWsAxei4ZbrevcxHLKkZBfVahj1VPpceWyqX3AKKA9CGj6",
  "key28": "3aELYndadWaebA3rRcxbsBmVQmWjTXGWQ1pAPMoMj2CsULiV7rVJ8DrpFqwFL9MGM5owk2RVjk2pMscRamMQiSYv"
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
