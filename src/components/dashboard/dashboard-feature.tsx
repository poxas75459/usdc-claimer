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
    "3nXu9dSqxZLBpphSux87JXqeDuy87e3hGB9p4b2T97LpNFQFdLVSnaf2DHcni1gKZfpwhSKRvY3H2QvrA54zpTay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qHZ2BTEaDtZZjHQyvRWdyExoeZDJP7WqrJpnb3dnoKHGvHuGT5h3dgPcWsJtcAcC7oQSnAQUTqTu9xKvk5VhQ4r",
  "key1": "5kCrReEDsiynsFA6wCGmxH6qXo4UKnpxBBVuniKHAftwJL8kmv1mqsrjyj252SogPffM2BFV8UQEvf2Euevk5u6b",
  "key2": "2tVLWMXgfC5JXioP3AQWMAZQ557Y27TRWz3Gd5DHcYV62kc7TdJD5PJkm9NXqcuHTt2XZ38juQt7BQ5Big1uT9Hd",
  "key3": "5x4ZkiZx3m4n4wieB8o2q5otVQaLiDu9xcZzLdznk4CCkeEiswoVLy6yqkk16ZrExV6duWKVMCDAr7Kzb8D1WF6M",
  "key4": "3QiTzPnsqQGgzeDdDWXXQ6v3RuAnYgyAWR9rXmHUHohbzU22KXzc7KFaquMCFysh3pDY74T8LMs1faXdmBrjuyck",
  "key5": "4PfxsA1HnCsMFJKj1fLQigfkDFFB7Mv1NWAsfLA9x6qmsUdhGdhUk29xtnh8R7Aj2PcapYPKoU3HBkcRnRDRNhAV",
  "key6": "3ZF28JXpFGEZe1FiU6q7wrXfD5X6f132AbodT3GmaPyTMNy4DGYv6nNvSzgPYarpq4dz6EVuw9cCsM7E6HnSoRUG",
  "key7": "4kZiaD3xiUzFLPGosoZj2RaxcGV9FSCPqV2skZnYWB8hhBTcNvEYXUcGNjVoneYDSUfvWwjtHn8FK99oNnnX9GaB",
  "key8": "62pmExteDfgs8kQtvQTrdAvj6ZnxyEKPFVVxx7sNfES6tkSg4HE2X1nLJ8zFjfRx5X6kvAYF5oNNBAS9tfDoqAoE",
  "key9": "3aGTvEcEqyRkmkyY1ExmZuftb36zaZSzP2KMhLEZTS8eGracHYL197i3eQ1D5oRpokUTPA6JDsCYeg25H1UL4GNt",
  "key10": "QJ77ZbpgVHU9QQ2QaeKRDiyeGjWtPHKnGSYTwh5X3coCgcNyRoTDGBe2woyUF4iJ73UX3fZKs2Y3tCovtyWWN88",
  "key11": "46xRzch7GBrAbxa1uxBMjFhLDBfWGZ4iVGYQpBATXyjz2euW4P6CY1ukGZ8Y9QDyfDAgDHz6q4zCJ1ZruBZESY4",
  "key12": "4oFVgZQwf9VeozGaYaphE3Cv3B28u1UrtEpTA6UxSQWZEqykfKGJoTdhM1FSgu3feteuRLncHcJzFcHxccTJWBDH",
  "key13": "m4759qZempMqcCGX3VoDazoZVsKMv7ffKDmJrCZQVmNo9ywRBcEfMNSFQz7YjiPfvH3zxjBPvHXbCcs1TpqcXJn",
  "key14": "tLMCP6FFjdyRFZ276q2ZNp5d15CecrmLC171PyBXtnd2uhHWxme6hgqNEjiqxZuseKx9MaEYoDxxUmkgaABPVgf",
  "key15": "2bNxfBce1hzYNxt69az54ixDucnjMp7oSDJoTx9owhFRLkrmNXi3cVg9BGLCSt69GcrEc7XtBH1zaxdWYoLgw16c",
  "key16": "4ZvJFesiVqbGj3fvpeLnN4XArnDNs4rFdZaz3qrnEqvFrWaqizk6kcseiHzbBobdBHTPHCv3yjACtj6BMSRNSokp",
  "key17": "4fQMZbV5KQQYjBvcQv4eyiDWMHKAxYsoKf2odSLSoFDEtBeCMpBuxix5EtDYAS7octhfXJMmkjykDBxwy3eJrNUC",
  "key18": "22gKM9fLJF24KGCrM8XWgZXM4qnQHhUzZyUgSsQqdkxKMcBZ29dCoath4KewBRUPyUxWp5tfp3LMwXVK23c6j94G",
  "key19": "4xBSmqoP8cVA5E9CJQtG1rUx6ieBB5AMdFpRoLq4n14DYubeCmaLc1uefBiGJX6Je7kJNcUoCqL5Exq1JbJBq4Hg",
  "key20": "4cWJMFxSumCorqhsurG366uGNP6Sahk5x8jzAD8et3oCGACyhtABtWQFTezDTGXm22YL8GqYe2GipZyon37EfVrx",
  "key21": "4ee8f6aoudstBGhRzir9jSuchPSVcsbPN2cYe8zcAZy5NjPGzeu2bXwAG6VEmVhsB5bABt2p88mkjAxi791qEe9d",
  "key22": "HCCXGFXJ5L5mwEE2urnFRTtQqmQgcU1gJ9cHqsscUdntUoXLFcY7GRsN1N2SPG2xmxdHpufeiVZqgJhp2YkVfzQ",
  "key23": "2TXHuMNc4x6Tty9Jc9XTTijZq789RSG78yfQV4u5on8U6Q3ZbV2UhGx6FHDFjeYjz7LkHUEqNRKN35VRzeKoBWMp",
  "key24": "YJRszFUdJRhAMk8MGKgTEMGvNfBKGaGXmLSrn7kyn68amCXvkdJ5fK1A85piDpgaaKwPrTVQeEsxCXKt6fdqgSA"
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
