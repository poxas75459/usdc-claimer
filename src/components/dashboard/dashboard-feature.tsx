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
    "5FyWwvtdCo66vMNHMQCCQAoWyTfdnqHqPdfGFC3Qs5V13BP9S6Z5s62WNVhG72Af3dpqZowWboTAKxku8SgHnjMg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xhPtwuU8RJ1BpCZjjkeNrDFPC2TwviD1HC9n1FXbuTRTCTZFwF7vwBsndA6jQeH7Cvb64fbTxhL8m6cWcdth8ao",
  "key1": "4Jd6mJGden1Hy9jncrdLWDSceTqViQJPC77DnP5n1c93SxZRpNEeZMV7pfPDCaJvqZtPurN1VwLYsuSBUrHGuqTm",
  "key2": "4CM7Kx3j3pnwKWaJCXMXb5v5TGYBUdEBXQBm1qBLvT7G6XRNLP8TqtDWt8Ng9Kuwd1dDVfhEkcgg5wCdAWGPbf2m",
  "key3": "2xvvoc4rr6t3nUbZjMEBSsnnff7T9FDMTZ69fQc2YAWhhBhAYd79xzMTNUsXu6BTuXjfpiiBARhgid7SjDGd5J7K",
  "key4": "22kQZE69ueMg4demxy3q7sWUBHYxCUD37VXDZZXLuhPKVk899pWCFAKQZjroNVz58EtLNme5q1nwyS5qERN1WGms",
  "key5": "2pniyWWWxVH5N25LJRAb7T8B9HJAGJZaqpHTQsjjB6oGeJ6woqBTQfxAEaBvNaCM2HMeheueAPPfiSPhpkfNYpPM",
  "key6": "jb6bhJ1TkN1r7GjJ5paurpcP5muUH3mW957mh1tFGf8giEHPj1JgCEV6aRhSVfSJNhEo3Mtw3P3WT3Lc79tbsb6",
  "key7": "oHUDSk9nVRNn49cXvsL9R5Rfjq99xxJ5VHcSU6kL2gdDbaPWj6gW7jJmRsYGoFtQSSpYCTf36UtQB8yxgA9u7NL",
  "key8": "5rDsJi6fasM1i9TkypgNqP3s7hFNtBAYyyAsNd8nJRYi77NCdppfbjsGXqTC8u99znFMhMzSriF2dfEn5v33TLqf",
  "key9": "4ktn2aPjp4oS8RTXnf5aiDTt7uNeup1W74sbTKfBBA6hqgLZFp3rbyHe2H6Wv2Uu5aCUHjcirDaoXoD5gckhCqu8",
  "key10": "3BPpPiwAjEvSPQPq6o1hfBMSwVzZiNwo4Ve298ZNxU7aRofZH6M4cJU4LPFzPJsz51neKpU4jBAuvzhoATRja4Hg",
  "key11": "4RkfXJRZ2u2j65bBfPq5dGLVqpfpcP2kJ7whv3FyrBMjPFkURD6EyCanxjzXGYX2VtVo6L5ktbvzEHKgD37vZthH",
  "key12": "3yf4u5FWFhcZZZrNnS2xSQndPm2u21HWxDHYaAfy8kRaRi1QLTtWUt7CcJz8TfH2mX3wcbTwspbfZW8cKXaUD5Nh",
  "key13": "2CwA65bnXAZj169AfNm5uPsxyPL6KognCNEnBCRfmw2DEd7ApJwkG48rZfcgWMTuyzzTtHhkvyu6WBnBBNQ6cMVB",
  "key14": "BkcVp7vhAZXWSimcW9oCNSCUSVMe69PTBJG7JifSLgvh5WRMLfZwa54dgWri1eeoUgtJJNvXFXUhyK7nectNznw",
  "key15": "23CCr4tVsiaTKiRFBjczyHqxdBqkaGX7GBAgz8jJ4W7juF5fkwPYD5EtCbi43HC841dsEzMwMWrHxBzcVj3heWJw",
  "key16": "DTrCPrmxLi4jQJHdUeHERiwub1c3b7f87Rmtev6jU38K3SAJrqqan4guj2pzRA8FawuTDuvVagzra768oX3qW42",
  "key17": "3sVUupzkXnUFuU6BEBCzCirUVA9YopUv8tqgwyXSTNguKt3F42UGhQ3DAHKbt46oNKBkRJGw6NJNH8jTCi1qHAAA",
  "key18": "5ZE4cEJX8fsJimZ2ryJDgNBzZ4qG173a21CNNhXXQ8gDBZibakjbxSzqsU6cWPJXqqH8Fz6aedzdDy2KDg1bEhQP",
  "key19": "4dnnZicD1jnfApHCpEns9Gq5VkYzuMQ5qxymcYFTjwW7VhUihSUxHtxyCJxg1KMe2YJkRBE3z7VKv8Cm8zvGv2mm",
  "key20": "5ZBnSj5oEqLZG8tkBKkEM64Q2EMd9gRtUo79Yfyf65nporkt29kcCHaJbyNHm8S1vVYatcbEtEc7NRGHB5kMb7pP",
  "key21": "22Hra5Uk9icNqzaaGretYXsC2pmGM9hV1PR67mcNuBpstb8F5DG4ciS3EkZeD1MyrvEZqM431S5XRbvByoA5p4z6",
  "key22": "Cjk81uTLUYQ4iTYe4wY2Xv9CoUUxzR7k4FM9vQm1xGVZjw5S7Vd1zDS56446oMxuUJJSUkMEFqmwS1c1pEgrU2q",
  "key23": "3NCBkrTjQt7HHxbL4Aj5MA5jSkfrJmou6M8Lm7aVvHQZobBnzX9wxdsUYVS9mzLJsogVJsA1XdeAm2MHKXUdLUCs",
  "key24": "4iiq3N9WoZk8aXgdCay8obLaCJjwbN6Ht3CkkaN785JDwD1NZg6gx2ARw3LHch2yL4M1ZV9CdEsV4B23x3PktNrX",
  "key25": "3LBm5fEa1W7pceWacF8MbQPChB9qnz2xefkdunqs7Hob8NaSW5Dic1zeTVM2oq1jAKGogMoqT2A5Vrxf5PLM3V63",
  "key26": "YdqAgT9GWPCDXddRNAV5dWWspj5sM9187nNwmWUuEg5PLUZP8kX4yHZsk2BkEEPe6Vsy4SWuVYSfLDNLJfi63R9",
  "key27": "BycvM2AeDGQSs4QXQqBgZbzyW6kDtyz3rW9NHWu4LraQxDTiuiNk2oZK7NwEQzmiaLV4jgiu1V8zRPWnsKZmoGm",
  "key28": "3t62RfwSygaxJY7Q2aTtBZzyA4mv3KS35dCE4jaAmYwE6qcLHVWNnpBYXU97GVEV9kGgHvBYEcWR5KgGpW7nf9RP",
  "key29": "5Qq7WoUrpZwaDJnQts3YAzDCZ4XxfknYCnSiqWL8Hja64N6npWWLZZBHNKBPGH4rtvf9PXQWEqs9kzSwVx4Ncrn6"
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
