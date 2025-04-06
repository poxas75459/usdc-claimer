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
    "Pucng8RkxKiNwYaNLiNiHiSRWJwj3E6SZGDP2FonSSfFg3yKMc3NgH6SLywQd8AKiAWdvG525hFq2CZitemAxku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A6eJboS5huJNZ4siv8uGzsdyoP69iDSjVCfKFho6JbyssPFS6vSTU9SNkiWvX7WmqpLsmjvTtA4pWqNs39Ly9cQ",
  "key1": "4LzwiwyqEYBvaKFNkpLuDxSfbu8WX4ZVfjAR5foC8C3fDcyBjCPK8VbVJNmJuskducbA6A6QBqo57RkdgvyeNfZv",
  "key2": "5gG2ANa1Ym7rWu12RcaBczaicapwTnygjnjtG7RigoXD5HR3RxU1gbxzsGXzBgr1BHdzrKwTQRDLf7BF36L71Z6B",
  "key3": "2pmktyEoimEV9hqATtnDmKhmYwjh5UWFc9JXa3fEqGr6aeNsxrzREm3brNBDnUN9FABorThfLyuaoReWUih2aN7B",
  "key4": "46K6MQeQyCQ5u9kY4S7WJgBcsAExjgaqgRkLz7825X4euRfTfgEgPdYHcjTi6KeJ89kisHJ8Y3ovj2goHz61XZGm",
  "key5": "4i91PJbNdxNB22keE5Du9GCPPXg8w96oywcXuytfbbzXsuwv72PY7en2woF2ric1cnt4FEHSzzWR3DhMXysmeirZ",
  "key6": "38LzAMimkdkt8Vm5hbusz59SY6x7kMn1MbUKZpCUnbgjTfUveUHvxSRdnhVTDxiCpEDtyQngBX4CaCu2oUjdgmBi",
  "key7": "3XzDygKE27YHEmahJrenZuYFJF5ZrQx1VHeiUTgiHNdpb5hKx5AyeFLt2srrnCaDKqQ1MirAEUdPnPkKm46AVQXR",
  "key8": "ag9qMEUUU7wmBAe2vw72GGmtBbPtaUqab9HdcSYyefDDReooh4xpW7VjP8PKRWzkAVqucNp1bUNKGbHuDKxMu8r",
  "key9": "2K4vLVAx24ygVnGZJZ7vkvKiWdiFsTosRKVyhVSYhtL1QCcdMH9x8KbGANMBLaQ8hpiWXRwftG2RrbUq5LuJbZJu",
  "key10": "4X1rJqwgVcBevxKTN7KXbRVWXKBkiqirxWZCqeJJU9Tr6zoEtbNcaHH58NWdBUx1kZLtDEskJtq5z4Wc5xsSMW9L",
  "key11": "558L7YsKmS1JpzZ9DEbJByhoijSekYAo45Un8pHxXCCc7GuPx4cA9QBiziEwhvGo3LU5W4oByY48tsAST7yV129Z",
  "key12": "4vg5JVpmAZfkZ1dNWALsewWnFsif47JXLdwJGeih1vzto8r7MpGp7PTemEUig8tWfmi8PaRbJyLX5XmZ5eRWhYZb",
  "key13": "vhgASp4kYMNJT6MzMxysYMCCr1edSPcSwisZJ1eRuEiB7TComS1vVbgA9xkoncsNZkreYrsHGK1otKseyCqweXi",
  "key14": "PFJtEbN9Dbaauhnbh4M3dkuW5CkqETeXqCer2kY8NhryRgKPoBAk6gWKohkC9Fb5ym9P8FKbhpTZVt5JGK4QvJe",
  "key15": "4u8tedeRv9YeMEhSRaeB8cNoqgRWoMDbpHVUA4o1ThcGLkHPTogJfsmKapHe2J4Sy5j4kGFNboo8LoGHesPASnpF",
  "key16": "Hrt7zbhe9wdeC9SHLBA1UVxMZfeTdyFVu3CemSv7ScMQd1CFx1bTjkQ1TrLC6nkLrKcrrejAuAXXsq4kugdZ4U3",
  "key17": "593KEYciiSgvbdATfFpizChpWRKvWNXr7wDkTWFSHn5kZecG145bnQsh8f2jzyzsSvFvBdvCaBdGPNPVEGqkoYQc",
  "key18": "3UjYtvEW4CCfHFoKSWvpcqXLCTnnsJpxRaBSNoB5uevXKpjVJNJb2PyaPYDkHWhBgqkpWo3NkQZrFEK1SF5dJjX1",
  "key19": "2SZQfyf7wDwzdnzB6j7Eps7F5USm1gCmZc8zXocPdkyvsdV5NHREBUygFt6CZ2i9safM8uusVNRPGMJNtA3qwj8h",
  "key20": "yJEi6kQ4F3SEYAnxVtUzC7PeWcqfe9rAPLZTkfLF9Xe18tFbDr5sMcrr144uvzSy7iYLsb9uYzmJ6YdhHGPgqrt",
  "key21": "5Av46bWG9AwTfSo4EofXFtzoFcuobzSTa5UqKudhReg2vLgaLHCEDYoSZfrZ94maXxTHDufme9rqv8RSdwvoqLDm",
  "key22": "2RUtrCNrYqHJRZf8VoGjhHQznaCW19ijJchaBrnBVf12tYcGPYuxmnWZuL9jYpKpNcpKztSmjiVJ8d5Sruq1GABg",
  "key23": "3Zg5C8yPBiHFJBiYxHfqxVacLMJZKgb9u66fLvt4Lbt1s6Y7GLj5cmepRLHypi16BSFWKBJSkPD15367nmonF3GH",
  "key24": "4jpsrNwdEbKVrzP1fiNpvUwLnfWxq25wZ6ubhWvfuVHpcjWkLgd2DwW5jFLUFjTQEa8rnmfzWz4x2cQ35sqS2kiP",
  "key25": "627rnBeVVakQBP6Tdf6fvjG3mrWGptu6M6qR6ZzzdYTU4tfShA3BP9wxBK26WJ9RmY8bFUuX3fPH6yxy5VtnXxQF",
  "key26": "3CFuxVke9DzTKfAnqQLkhLzZ1bnTPHDS1Cggp31AxczEKUxPZa6WiUM2mfPv1ky1rnMJL9JytufBmkG1RZXdmqtC"
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
