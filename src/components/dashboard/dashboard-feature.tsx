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
    "2bAnB66u3FNpa2Y3wRFuxZm1dAzvuhcenYyJMceHaWoNNVQNHSSQPoKjYrXy84CyWpvgns39jqB8kUqmohaZ2Boo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FpwsoySuw6dLSVSP3t4vbdi7qeheWPgXZNDYVxqaYMVZV5VSxVn2mrrHCyfh3JfkxkWzAbwb61THfuZJDLKHMj3",
  "key1": "kmcK5nMNE3ajpJoPXSwGAmopRM7wwaaaHQiHsWSnA8Ycf5Myj7YX2tt8sbXfRuF66pniBgcHFphaJf75HFQHLsA",
  "key2": "45J67Vs4HRUvaLUwLXB5dhKYTytq8P4bSVzZHc4yWGtmKiCNr55RGjTzeagH5E4oU6NsBJWwfbRbkeTbo8cndWpr",
  "key3": "66GdGEG8btN8qic7V2iEUJqP7uPjz5HKApJegoQ8Azv2FPxSETC8DKpuKkzaMMawK7HfLcugNpFsmQf6gCJHhxcm",
  "key4": "2CpgkeDRDqhcZzrJYSiteajSKNz2e8RFaiTpDMcBddKhAL5nKwBY6nPowZrheFGeUz67LQzsKZbQcLn44tVe4UFN",
  "key5": "4XhjFPwyUj1DwWnRuHQsaJ3pbU2vLaYFPv8GMFbdSNhwzrkmSWTTMNqMi5BwWW6z2hnSeuV2A6NKc77HGXc6BR4e",
  "key6": "4XdWQzq4xQFqzUZcuu4s2XJHEs2rKwJC8W2ykeKP5pPxBVkYQ2DiLa11oTFU12Qx2g9Z7zA9FotKPe6hxQjvowPq",
  "key7": "KTmzEEdtRhK5c9xoGWaj8wNEwDTVEJ6R2PRvq9CX94LpQbBPqH6JMXDTo4Y7WZVo6jQ5JdUQKR3fgnBvKNt4RPh",
  "key8": "59Z986ef6EcTj1KPYfEJ3hsbt9FPEaTEfKfUFPwAGc5eryB8LZGQpvWpTDJ9df55XMZFs69DBUdBraMLbV3JUrKi",
  "key9": "2r57ZyVZ9gZBH1gwb5rXUVLEj726YhA8hXRrfeWwGWiN8koHETxs5RFkY5vEQEXeQW5F6n5uc4ZjZdkr2WKgoiPY",
  "key10": "2NKNXb5N4Z7wrhrs1eAzG392utfpFP2MCEvz3f9o46uqbUeifxCFUe4KF8AqEQkgFWzGK6mKof3coSf8Dh6cD31o",
  "key11": "2jDMk5r15m2AQKA5Azj6uRRPAihyN3LGnd4X7gGP1zo5bxDdqfjLs5c9XJ9Jex6PRDyNHq1CSqA5LoXoFfWPELv4",
  "key12": "36Gu3a4Pj4DM7powQyR65NBoEKy4rAJMCnCxEXatXiJA9P2ppXADLqNbjQ6guTmgFw5JcDCTHDRQxEbBhpdhNkbg",
  "key13": "4y3W4G6qCB4B7HSFGPULXnn6PKTCWjNQZKqPCdPiP5Xs2CirzxK4FDzgSpbghQ7mhgMwPwJucpxxYGRvbm14yBYX",
  "key14": "4p4mhGUn6hsriP2bEUhxEkP3tvF9AfM6qz7y7VSMMVRPA4jdypUAWiVbTjkFskQ3ov4PYScxEVr7QLJKBwR9vBXX",
  "key15": "5ukbfCYt5zsGPN9E2JUgGqk2YuuPaHBPpfyKS6E6xgB4V6NM8JedxxPKex1VGJT9qi5rgUxrGUm9M2KurghhE1nm",
  "key16": "3PrsZ4C1m7iqBBb2tuqwRgkA58qT3QQKa4s8vnAJLqJErZty1bGRBWE2TdyXzcsgD1mFe99B1r28Xpkm7bMR37vp",
  "key17": "2YC69C1EXdGUrpv8CDfEvbcsqCxyoUPeKeUpmwaGXCpwmYy2HS9a4KtQYkvK9NcYHSBmhc2htHCo2RJsaU25yYH5",
  "key18": "4PJJQLN4r62LZWsYSG2QQQRLqC6e7AteYYXEyFAF2EPV8Jzr3GGKJaGsKU2dUzXqkZZudVRp4H7yhk2N92zhg3d6",
  "key19": "4YRkyvnTdxexmNNqeNSdJ5ZdVXMxuzYi7v7GDSkqSi8m8g6B2uQZdHe3gfu9zaYo4pMLmFsJnCXtDdeRMN6QPQPR",
  "key20": "8x4KxxuVvSRtBubEgLsE6gGC6WRzxTuJ5LA4bNbXBypUdEoBBEGST6nwG7VSkuUbuKFGkS5u61SiYA2ERT7o3vT",
  "key21": "37E1CGQk9AKq4FbK8y9oaYuvxFhwnsWhKGZRFzbJcAwGK9L9oKbc1nJLPvSWG6EYUc4QoHnvPsFkjhqwnBystBwq",
  "key22": "2RdrEs741T7Hczw8wbyWVR1cZz6AqMAMUvgFnfoL5T1hYUePYNsxu1BxcMBvbfvp1uxhuBcTwbpLQDLGgiZRgMtH",
  "key23": "1jLZYZuu1fkG2MrWyr99F3xxQ8FqdkE3dFU2qr2PXV2hg9TkRDik1YyfvYVYkDAvRZq2wYVD3ANsszbmHqdZzpD",
  "key24": "4kmKvwF3chnNQ36dj6R6GKw6p4LjapqfyDJKozAWALisuoKNe5rfCnxGRpVvRsZdaLa35afpdWDdUi2q7ZcTpAtd",
  "key25": "1Bj3QzprazrHYsuD4bSc4iqQdo6YWPpvTx2mvS3XhiEgdJJ5nfteHLtEaN7H5VsoDK4STzMyaYpG3f1mKDhBxLd",
  "key26": "5JVqom12zkuU7RTU6shjoNHxe5oqm9Ufe3ueXPuJgUdNJW9dv6DW1dmZYGmYKSQtLZTvwzRC8ev3tSpPqrFinv4A"
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
