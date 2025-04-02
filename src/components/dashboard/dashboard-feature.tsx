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
    "vADvueQSGWuQL7RAuQ3zdc87KTDL4TDfNQSyWYoaBaNh72oauJzboSvw6vwPWHJ7zkbbZUgqrtmgtUHZHSvGBbE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qvFFyozpPUmTuEHNePJhSRtP8XymECEpr2KFhEpn7D1JRtkHrhD7i8bEY9yxDB5t3mt6v5vUWUkVouvSoJsFTYT",
  "key1": "4Pm7sfQtC6DZ1eJ5fVJ7kZ49TLhZLuKv5pWLfsud2iwKzAghNBh8RiLZ71vuATQ8EKTtdSkQ1qUUULaknVY6YqnC",
  "key2": "4xrfrW4e93d8obUnjwJBeMpmFpC9NKv93o8Mqd6fBLxinMQA6VTg26uupXPtwR6rddkwzRC7Q2umf9xhaUHQRMo5",
  "key3": "5BK9ankAiDo3U5JPKq2RGuEoM5A1cpj4KTXqkdUo5bpq1CwM67Xczh5gECvrdyRB2orC2KSNdFy3xZWRtUCg3gPN",
  "key4": "24B16YVSH1PR29Lpqy9URqGvQfYZNpVHPvbLAmfNPD5eEhjsGzJT6hzLs5Ve2PauCWZrXYhRoD176KsdQNxWwxhv",
  "key5": "3t6fyinQDmCAmBQdzmMg7HJ8Boubqna2evaBMpSuqTgjWPpA5KtHdiiJLXAKEXzumV8YEhFEobVgTrtpAyAxS2dm",
  "key6": "2Ut9shYyHF5Q8cdoz47STJ41UaGWfs9sAFzESQfekrYo2KWp4pFUCrkd8mN47Uf9n5R5xRsHTbmdvrqUfG6vR18Z",
  "key7": "37JEPEJTEMEmM96Sp3x1sHVM4Jist2EVJDPZm3fx3oHEe6X2ePPzxbzE3YsbpMCGeczvVac6ajBGPiMX54pydFEq",
  "key8": "5cYYmhD6bXKqybSB3CWAbsDEuc9e6iFJMfQXYBxZ1HEtvjck53yKeVn8wpANEtkULQtcXPmb9KxfzoxYeV87fHaY",
  "key9": "3hoMGDJgJYrQTBUMicpUC5tXjs29jCTxDcssofPrdoEoxrKTdgW7hLDpX1734XxFNnrt5ijTjk3RprPScAi42BRB",
  "key10": "3LNCowYz1ZCLgKy8iWordSgdXv5SaY2o8Gwf5AZCdw5YK5GgRCtQWh5WscabhSGateUmgseCV8BjnfuBBrTTrRdp",
  "key11": "5zgi8gi8scxcVEGQsPRfnzye986ZD6qHviuQffdntA8xU8LvWVN4nNgKuKMs9WNvRXR4aaGB1iDekTbWLWwYZnVu",
  "key12": "4e9oVhx6YvkDznq3HSMgTK7c1QnRqDBRd53SD73RzJbvbcUCKFgWk75ZJUA33Sjza6X3Jypegoi6R78er5UmTsXf",
  "key13": "d1nTxS9SJaH12EAvGSk8q3iQNgnewhfs4taF8e7Bc2kWW8kP4rbGLrTct5Ua2fHRmxG53EEcJ4sFthh6gCuy4JH",
  "key14": "JnJWHKonmL5iyWstafQyAcKWq9DLNLLqexJJsynY1KPGcXbzVXZ2oJRDVHkmCcrotSRqvfmYb21jnL57BEuESGs",
  "key15": "45wMwoTUfTsFPEVYTvvNnw8BDNg1aQiV9DVHwnZGiNw7nYVN5ANeTrjerRxUvLfwhHMVKhcsDEAFQmwWxjj3nmJK",
  "key16": "4CUEoLuFMCtkcvWTaBsd2jHzRCjbbMGSe2nPJevrXBCRii19Tuwox2pozYMoyGftJut1XSrmFjp8S2D5C888r2nm",
  "key17": "5XdekhSf7YGTjjBFXnw9XLoWwVzTJVJ1nwkXwSwYjT272hrH4Zbxv1AjYJGqiadm7nUzM4fJAsVkr4T5834TKRnR",
  "key18": "3TTWtmSUABJe58tSV1MnSwmQ9aySavm6dyNNUHCdaUtXvkm9sz5FBp76UM6UMGUmqyYcWeHTrw5vCfDfYgWKT4mQ",
  "key19": "2P19scwEE6AmsRHKFBjXkpbX5ho1AeGxq8EVrvv5ZourNHsdigb9QZ3eo5btwVBBjjiMSr4JdbGvSKR5vNTKnfyu",
  "key20": "5FC4EiApxq3qUVESgr4v7jAXbNF6XscktCauDsLJnCdntDUZqFXvxEcpBvDPCiyRMiMjsmLgrMGNjuEgNnZYhL6i",
  "key21": "3TgfzVpcRL5v54pZHRGamYrffqZSWniBAhqgHRMXFSve6RB2JMHypxWzomxJ8Vu172UhtnjNQNamCEExU6bEcrwe",
  "key22": "5Z4pYTw9qqXLzTPBH6zGyHS3UKCy2bRGtYzatzYihaVnrhK59g1UHTXk4YhKTWCh6Kz9LS5GCWVHT52jXxtYJZGZ",
  "key23": "3UKYs3CJfG68A8rvWj6qj5xueEdwFbMWRy9askJQ1d6y1L9uGGm4NjEJCmFoT8kKtQ6bePUaeU8yBkWVPfpFo38Q",
  "key24": "2v4bzk4Z8dgxRJaSB8L2TzAEbqJVNJii5ppjfH3eRabuwUCt9X17BWd2kgT2QJQ1obSWGsqdpQ2L2v6c39YYPwyY",
  "key25": "5nKdk96Umu5Negsj3zWhFdFbWk84nrtDZcZNmW7bWxtd3a4VC5XpJKDrG7JWN83g8okfvbpXye5JyH5MeUskYtvK",
  "key26": "4hT6QjRxfHcgWnenHvXosgdV1MHDMG14yPxFQuEdZpRocsNf7t2rbvv4rJhJThm4FWGqL1TQ6RDo4fRz4jmFg87s",
  "key27": "26nAX38jBU1Ah1Ca9MtdGTgL2iQmBmi6EUQbVECyhkQkLn9eKBM9Xpzi75bVCzxXfPua36WoaDFU7RAG6jz46z8D",
  "key28": "2Fr4ngdzCbyJmkw2VzsLsUVSUJ3TAYMkEnXUbiC4ZnCE2AD8uf4W8QfRQCRjVhGhHqs76BrhygfbxWn7pHo6GMXc",
  "key29": "3tGFVeBm6E8hEwsZo5pQs3gJ7vZuynvis8UBYQjM6KH5EVVWP7X9Dge4UWCE687LNbkaZ9HenZKi2x1aN32VpGAa",
  "key30": "51y6vYyeBciY29sZLogM8YNhWAwmwXCGgXgHKbeKUtFkhE9DNySeX1TZNjuPNJAQHoUWE8vHGbg3uQb1ceqzamup",
  "key31": "3uRpg1Ni8eanccCYq1fB1BaMHpL5zJWbcwX6VEEPy2jbXHcAgxure1wUqs5KN26jAfZTXhR6jr3ufYvrfz69VaJv",
  "key32": "5GyXLA4GqXAQe1HhgeFJDvwWDfbWaRa4T72RP2X9ptKM4DFCxYjvLxQmvmDukWWgEq1cFuVf18UX722TvetppsSu",
  "key33": "QKJaRHADb81EZGTf3vNP9Y6kies9ie6X7uyZmWNhG3zxGGRoXz1SiJMYAp3xxUihYuQPohEe6s458xAX5auNud6",
  "key34": "2mgeyf2akFQTPFp169ZjjEppJrJycKRFcRZBKwXmfxmzi2AngPz72oXHo5N46MmsRgTD2yVRFkBBcQbNLxQ3wBae",
  "key35": "TYvhQsrTut2dEmn36wXKBkbVyzhzD6c3dbQoZAuW86bNQg7KMzJs4KhjPT6XYrFhQ5QusEFaZRHM67fGHHoQhyi",
  "key36": "3h8oPpXWkNRAHe2JfwLGogszR5CuxStEdLEYFE5QrczKNsSKAnwMbodp3nqggCqQxqhMGGp9EeASdYev2z32mbUH",
  "key37": "5unHoBCuVmtwvrZFNF9fwgGocSVq3p2NCGtXwtEy9TZFKH95WM2prSqi4tMwVU3HZJMoE55aeEGjbSrxi2nfu6tW",
  "key38": "3DeFv8guheniWk5aYsVGRGmf961AZVtpJWc62SFL3s8Ba6MeMH36mdHZLcoa1RVMNYHfrvp6ZsgUzWyBjuwn4H5G"
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
