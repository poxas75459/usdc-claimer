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
    "8hVZgxbwVYyURo9YC9KGXZtcdojFqGQ7mabzFU9UYzRdFinv9qbFjxXL1rSRmoJt2o2NufZcQin9rRPXPkDM5zX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Mo6439ntfPDoJEUvtDBYmW479kXSejpWrzjwZHDpTo7GAg1tVTSKfdkYDoQ5Y7NrDraEn2ZpcF1pGPn2wCMBWNC",
  "key1": "43FtG3HmMotCaNPndsvxWZ3DfAQ2zWxL6FpfwdWpk6GpdvkXDnowy1eHNZxswvs5wQhGVopHZSAf9RHrBu14ooo4",
  "key2": "JX9JoarERRJuzQAc2k91HhriYGPNPQRT91jirpdKzggkuZKbE5i7HiwfcPJARQqZtha5AsUZYDFYqGwE7bDJPRr",
  "key3": "3TDpBdUCTuHznWqXcJcN4bhkzcVhCDyJ3MkDG8ZMUDqKz7imghjsbk81WtJFyXQB8V5XZBAWgYxN3aCy4Ja11end",
  "key4": "3FzcVs52QAkyx2jgzHNcE4YX5vx8f9pWSB1bv7NwsFa4zWXvgodKo6vsEzRgaQMQwo29PBWF9fgS21MTer2eMYy8",
  "key5": "3vthSP6YLLYbkd1r4ccr8j84D3MZCGVENy6YnrqmjZ4kzTQuJNMyvrkeTt2RKzZJQCCyMu2i7N7k51RbW7Y3Dir6",
  "key6": "tYCW57dahRbHa616PX55JXcPuSgBnU3t7YVPxdc9x3DCdoLDmNqu4cwRKKNJXnpy1TMoTLm75YYRWC6WfNyiZfK",
  "key7": "4UFQtH3XomwB1ii5Jifh3yUVWDxvdX5bCUa2iEuE1EPkvEgm7ppEJJKmSkVm5XvM3BmbCswGwNAUmEPcE1vTEg5C",
  "key8": "GFeSxwoEa3AfizL8AzjFVfF6cNfPmoTtNzXvpwtdPAhxo8qktWWrzG3bivunt138tCXB8eiezR6ZZ3BwYcufdt6",
  "key9": "wqF26xEDhBwvgt8xLiC1SE3xjvxA8kfjWfwDF95NxsHe4jYcZk7EQojrtqGPDAPMxDkpn4hYXibE8pgToKHJF1C",
  "key10": "vRztRaQfcnXWYx6vZxgn77HBdbb28GQSGJLRfsCfixAWm5WGpnMZukzRS2fx5Zfr9P3dZz9eX8TWMVBVtRR7fH8",
  "key11": "iE5TR7WLRDCg7kFFhmtGaDBUg9f5sTYkWCVRH6TyRq49wPAR5rzmFSXz4zN3VfM4cRoyF86CxXNbnJ7LZg2YpSY",
  "key12": "pbrdXnRcqLWNKKYkFRXcbcejeaW2KikqF7nDatsVrhrF3Jk7YMbXGVPpyPgjVaT74XsbqzFWXZE2tuhfUJxCoPw",
  "key13": "561wP2UQjZyGD8mRJSHdj7nE5WWbFQ36hyk6dqfhsRECAMu5sDF4u7Gu3zbKZW27bayQXjDKE78WBB46jMJuGTJC",
  "key14": "HbnhnrGrz3oM64yaDBNQq9BcViVTxvz9DVgr9F9E4omEa9VzZgrhTSEg4aUDZBMgBZPQ9HF6SSZ1fo6uWNQfCqA",
  "key15": "2VCU6EJfR633QqfDYHoHGwsLNtoRRTCpoqCa5QQi61brPwtm3FYLAnMFqjL83M6FiDXFRKD9BvhyCkSpkDJrZQtT",
  "key16": "65BFmFfu5eiXWgc8iNRq1vNf4R2g7f6yLUaxSfcnBQeiEsUooL9RWXTGQCEkaooQCquV1bsUZpfc4Zt3GR9mYiJw",
  "key17": "562JG1YLef4wAhLwpi5vgYo63abgVDoiFRZezyVgDyeAFUqbBwgVbvdmUkJDs8M2khtYDqawsWsVVXVseX7NTch8",
  "key18": "3YxNfxV4VCYmRgvBuUbdjNp9yJiimqoMv163mfvsL7ysLSWtWJn1w4jx2cd88LYumS9aAnm1kRvNh9Br79RaNJuy",
  "key19": "miL8MbAWLooiAzg1YYHwBMyJTaKYa4R8Jcjz1ZwwcZWAa9HHXYegbkHKgb85vqgb6SReGKvEGUzGzrJRcPu3CPC",
  "key20": "29611oX9UtcZxPRA3dSK42SE1WUCjfQETW8u23sEspErRqZmShYmjwR6jzcFrcHwRXV2SW47S4VJd7hySFHbXxTR",
  "key21": "4hRBG7BkNiepctSkAkuFBgfX6wRaD9PmEZLRnv2ehhKgggJicUjDmxojX6NAaSwLS7gzcYghAQajUSaxrsXbx79H",
  "key22": "2VDt4mHa7qSShKKq5yHP2hSeZwSpnHArpjVsRVW56bsaGMucUUf2435XamnjnZCBE5sfJo5bgy8wVGLW6SHMfkuq",
  "key23": "5Y1zbscegL1sggZEtP5Q4muTGiMRrJz4gcx8187zhUizGLyN7VBpmCTSYUcJR6UmZx96RLv7snvx5kcPB5cRkgSo",
  "key24": "hRvNQPRVZ9jiJsfqQGKSytuQXHZyEdnuXVcTnNH6xULDpGtfWv8HPRp2PoQ1J6wm2nizr9LoWmUzvyAe8hpEJ5R",
  "key25": "5cPcmtAyqwPj2cLnZdaDJuxCay8MA4x8bFf6KmZoWmsyvjMnWmrL8dSv5SUKUFzwAmytFxcAySgvn6pPCpHKqn9s"
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
