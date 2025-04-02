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
    "5o1MMEH4WNTAcYypaauFPwsRFi3e2DrFtVwvNDke1TsjCKiQPktU9PTnzTJGM4gyNYV893P8YpCxekP8b38dpfW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QdfSTuMxRRS1gkWP2epqdeNKjZsCPc1SQCAZ8AoqGZWL4MaxpC994i9DfDSF9QDoDxukS1qpgR4EKdFySBUvJt3",
  "key1": "gMy1wHviCN4XgaZczRzDrsgkLChf3u3nR1yvBbin9DvDmxWMJ55sjx82GkzN6aQT64CneuJdHcabpfDk1JMgiUa",
  "key2": "2evkmHWn16jo19KhosLsqnnQhSp35qShAjj6vhmEBD2Z24ywduv8Kwns7L43oCFq1ZPH84a6FDMfXXiSjR7ZQuzA",
  "key3": "2sQc1o46QjqCEgtSV8CaCKZHALbrFvKBs7VMKRNLcyALGJf8gHZ9SeYekBkoGb54PxxDGaGHXL93JqZ3VTkVxVe7",
  "key4": "3b76Qg8wx2sq2EgYe15GuCE73jdqFXYqmPFNvkdFVf2y7P81JeJcNB8kX8K2i2FBjrV3jptpHHwJKAnHFizuxed3",
  "key5": "4mhM5uUi531w397hasn5PAwMAGb7wMSm4eEyr9j9q6vPGcGzQ8GqoJ3xgKEGELDhHEFmEhP23maUAJRtvmrjQebe",
  "key6": "5w43SzrpNzVAKTUsqhbGenz9FzgDDHduasbJVkTE4mUnTxFLDgvWyTWVHPNa8wePzz3ojcENCPhF8FKZ8KhzJDAk",
  "key7": "4i76SmKK5oRE4jn3hi3nuSsersf3gtgTfqmA1kDM6G8vP75BoNjBxjz2oANbawdzexUnAPtp41U1D9nEzRjvhuRL",
  "key8": "3nupjQR69frcdNwtaiuHedUemg4xEYH4KautS3t9SXMEJ1ckYxgf2hu5z7uRHMC1aWk9pBkFe4hpC4ixDQMRRuXX",
  "key9": "otL8GMAx6rHXAQjwjy98UpqGyd1m6yTaCA1PNkDwnQWCUwn9i4uFw9gP18HDbiJF2tcfW4R3TwZQqsRCiFoB3sW",
  "key10": "45yimhKXAQHh71m1ii7gjFza6S9DmePAZbQjA76ai8F33y7VaWLjpKGHAnXDrA5AXAqwfZR961WX7GVDmVuDRoz4",
  "key11": "5qxvoZyANt4uSyiSKuswU16qCcFPemaC7FRZgUiKADthev4oYsCeuhAiJV2ZMDZc2nabfB4nEACUG8c1LED1Ra3P",
  "key12": "2efr4tTCUyzeoHEM5Haqeq7thTNYGqeS1jspGqZm5LinkrWsa9if7mpG4fHjitmf7S3jn629ES4MVfFchQKaygmM",
  "key13": "2C3AbHzGkugxzndZcXiZvpXpXvUr6zXLC4cAYuBUS3GFxAJpoK8zZYZaR1ZJLm7VfKAGFAzfrR2c6Wjrdw1hfaPz",
  "key14": "3FE3imrp4U63JNht63YuwvzhXguPNkpoknYZmbKeuN9fc1beEWhy1VqX4H8XoQYyNqb9yxSNKzM2EDmNKamMDAYM",
  "key15": "51bT1RDDqPNiSdUUj1PAt3ve4EpWG3aLQALPuPnuPiavMaHT4c4G2bXSnSvJD24dWz3xwrCtFk8W49AWQnRBxaXJ",
  "key16": "4Uy9W9f6sJr2Z8dh3KaeSZxqSJSmjj2ooRsbVYMM2BSNQj6Z7YbKhsdhYLw4tM5m6aDCsNS5r159qMQHngbtNMLg",
  "key17": "oEbGxmZMkgdwFz6HJfXk7c5L2aHEqtuTHcPNBDjZ2BRqmUHkRUudbni6P8c1Wivug4S5JiPKpNVdfomNmZgGkDK",
  "key18": "4j5fGDwHgBz3S2dsptLdPQFkmBfn3AYhAaTXbGYocz3CkVqiCPnZeaG1SFwWRtTUS4j7oM6tEnM1pBWp9cBz9iLD",
  "key19": "5G5cZn5XuD3CKyad8GCeQPn6o8eaFowkvfa3X58PMrbQ9KiwikyzsnHFFvy1twY9zd52c7LEFATmw9r5w5wi38Ls",
  "key20": "2QvPypwx2yLMwkXFn9e47FFkvdbrqrP5Zfbny9XnZBoNpDzW98JS3ehQXoLXfY9yfVnSERoaqHrYxLYXLwSyaiff",
  "key21": "UnDq3xUHVXD7VwJ3mAFxwMpm86sskVAaZrD4hSeXrE3nwsZ3k8eZP2qXbWnfrVite9PBLgyfyiQMqGbkaWRvh41",
  "key22": "3JhbXn3wRc8LNS8ov2McZb9mXTY8HDJtppDr7zQUo3b3qayXHpM7DjeXmytVdkMwVBmXPFtc7V6vQLFzY6RFGSAD",
  "key23": "3CrYjAVqGtt9buFXsCukDf6KAFXuFHBsTM4AgK3aXHioS7snobmFzh7yHQaq62bFGAwqEsxTKpD7BFuy1r84e3Mk",
  "key24": "3Q8Q68BztW9CzxWZ1dqtWEnBQXHTZzETMJrQbfF183bv14ygaykFzteL1xrrGRTDWsYYManrtiL9vLyJA8M4iyry"
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
