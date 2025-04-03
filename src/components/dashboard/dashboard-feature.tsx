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
    "4ggGKg7kcuBQu4qUiLBG67wRYLycmZ8eUQurpiLDXH2AxEBaeQPC5eo1HvokS89jLZaVw6CGvJJ8dJ7qLTYJ5Dwk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PshY54WmW1wgnAxAY6xP9K564tPBYRiTAi42g7So8EgxwbfgnZgueZfesV4LoGZ2rnYsi1eLUB3aZwkCxBmepSE",
  "key1": "2JZpcth3NTocaJPVApBq83dca8HuuzyqGRfsh5rEPBeJQG2EqypwWy5nu6NRRNtMHYdCiUZfk2tvbnahp9wcYqY8",
  "key2": "63hGFmU3KQDnJhfJREQvAkCCgD9SSikDkZnj3WMCb8iHJFY4wAy2cH66uk8hsDpyFVm3UyQS5hoZi2SGoUcM92Mk",
  "key3": "5P188G8T8pCtHf78LipemGWkjoeZZPkcm53mKjzwWvhk6AUQnZ5nFvNQs6QRQ3FSLfcSQ2pyyuTWksgeBSzqWfs7",
  "key4": "4PKQDNDM65FaXf2x2LScX8ak2aUYMUrdhcGQDywbCAMguncaspv18fYB5dXyAt7aLxHrGxKAiA7xYjLMYGThLKUr",
  "key5": "5Lshj89BzyQQQFuT9oA2c32tn9Xg1bnXCRV24wFHV4EifBgqjsch4QAHPagXFicEEaDG6VGr4SHWftW4AtDemtVa",
  "key6": "2M15X1eqBJveBDXm5bAyXactFCYrwnZjtS11dPZjpiQKMkafPj6zb5eCDimj8prsEZgMmrnFkjv1Qk6QfNrphbqj",
  "key7": "4q5zPNQJNbaRtrzKzDy1k4ZpXATAEM5Y62fC7W9NHuJqEG7DUzJrrS6sAJzfnnfb6zMdoT9CynXHWfXeBv19foin",
  "key8": "5QgzoJ6zQQsuDkBePwum144UPezeHypiX74tHyaa4SoNzjURrG33zMd246iaimf4VoZYJpijg1nNxY56DNM3F8kL",
  "key9": "FxZiM7LYN8XzcP8aA8CCBsdStyeUEoe3AvhaCDuayYQRpVNFb3ySDw6zJeY9qfuoF4uJ8D412g72S5AdNmpmNsL",
  "key10": "iyt7jTY5QkSGEtqL7Dc54RrWMgedEtpzaFS9bR7DtzhXGfK6F2Dv77NieEVHu7GWNCg2kzVJxDZ76YThRtBRviX",
  "key11": "kVectKxaWwXTn7pqXGSvhiBDxMZq5t9Cu5vfkppBYHQBgnCBpNGbdEFHWELXbqiMr4AEJoB3JkKHHeaNf5zditY",
  "key12": "3KWc4WgLW3sDaAurqro9QNYXFKhGvd7sFDiuDNCkeCVGGeLHgT5Gjpt595NyP6xuRdNxyy2eVbmZnQU7qqcpQGD1",
  "key13": "5MGf9ZHo9SGC53JLDdKmtuf2xisXduqYs9dcr8bQcmVdESGaCB5JWAdSbfDbiAh8tGFapbvhfqzipGZJUGkVoSGy",
  "key14": "3J2mwyFHDhaDGVnicGDE7qiDXa9Exg1TouYxJmEHNeGGfSHzg3w69yR2vGQY5Kmjkdu8QaqhmATAcZm834iQBrjc",
  "key15": "3ymn5MRAqLA2fTudSBCpSdweVzSqAZHSpetW8rYKt1yfWLCpQgtbfYEYQqMc3MvVGoZZ3JWytVMUFEYMWiZMMyqv",
  "key16": "ms7hTgdT4MVrLocPn5Zs2opLDYx7q9bUVAEz6Qb2Q2m19Ji1ivCUdxKYWSbs58GoURKNSVYF6WHH86BbWS2pDmz",
  "key17": "3gWnx77oMyhze6JexQ7yvjMmjYZaDSyxD2zsf6gybSm2QmzZyHsF9Bt1Snq1r6fFrdCNkZ79A9SbPwnFt3AAuZr7",
  "key18": "WKmuMB4kh9QhS8aroME1f24aibHy3ZdPzS5x6ELZPckXA41kjcT1Wq8GCk5L72aQewSDLZgvSH2cXGMJSbB9Xsp",
  "key19": "2R6ijjBa2o5LFmX9dF1YEa7gEYu6oSCdV4mKANUzCGtQNjN6QwTtcDktKTwk6azc8CbkE3Mohh2fk1PbydhP1UVR",
  "key20": "5J3r9fN5aDA7XznqUsquZNocdYxfKnM1G5NJXH56UAzVXHhHm319AM5mbJcAzPY61njJqtyvWkGMqNUcgbPVrm5i",
  "key21": "3QYWBqdrE2hPDPvj9WAmdhEoDYdiMFuN73AwNh5r1Wv7G3ukCWvTiPqHLFHVHDNBEndUrTzbb5ixvNJLCaVCYbxZ",
  "key22": "5vS6XdhqvgWx6nZm2Xuxh39Dbs4fAJD9AsfxBWgj8ucnNrUszGx56BWDLMqiWTasUsrGcCsLfiSYD9PhQZrko84L",
  "key23": "AnHEUkwqBHx8oeqSW4RZq8WqWm7epkCZmv3PfBEKxPCyUPobCPKrWPg43asBt5485CxrLt1b1T6H4jviEW9cmst",
  "key24": "4NUs4vzWa3aR8z5Bf9e8FNC4B73dvPdQA233NCYxGa6vV85jsEv96Get6oqbyrR7Vg3sTW53V1AwkefFHGbAnu81",
  "key25": "YqPNwLqs7aJyKAUAWyU2Z7sv8zLnWf4AfbjU4139MaanMepLx3YYF8w386E1caJqeaKVYwWz3bVRxgwKqFPZvS6",
  "key26": "3QCeaBiGtfHkRYqGQ4fm9mwdRza2L2kuzMzW9gfioXdN9tMSzJnvgy5ngushNbQZTWktawx4JbGvhE6QQb2akvSu",
  "key27": "4eMDVj7Mgf1kpJ1h3g3FCAMm2Lro5TAUwnqm7n1an42VKkprvJhwriFv6pjtGwZX7JfGWuy3Yj73o8t2CFZvvscq",
  "key28": "2mBMNJ7ZV81XnsZ93uka2MqGod7QknHfQnTx5mt9nMGYcNveD6hiuf821fFqEWcXb54F1JDVSTf6FopNLVKLCL96",
  "key29": "5MJkg479xtsoYSkeRSB48S2jqvc4TaFSsSwwEvJG5yC6bFzn7b77xy1kfHeoBSCrDXqJZ7S2ms6wobd2nwA2ivKq",
  "key30": "5bKTzWEmbdvZx4USDu5SaTUbjhGH9aLSkmP949Ha9CDiudUyPi74LobXGajZtCbBaasbkaxcKzSW29wYNu9HRVSG",
  "key31": "3SPzpuS6b4qyan4ZgZuutZXWmV6Xruk3DUAtYBnxh3KkiyRSEGBPkMnCJEkdQHmcZk37Ag5NdWYtPiXjRhgxH2bd"
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
