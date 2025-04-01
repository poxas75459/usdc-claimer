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
    "57pHRrFuAk63gi1Q7eHdTzxerGP4Rie9BRx5ZPSLqTqW31uDrFzYzPzjLfcbaZkjhVc295NJ9hX9D5LDXRF26eJ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vVyE1MmqWYDccQMLL6cdBcDKxNhCcsJEQeHcpapXgaDq31Wc6ituY1AvjiQeXPRrWoepRTwkPh5XuKQPLZk8RpF",
  "key1": "2wZJVtE6jb8xPEtMWyniXu4fiSxYWAuSWmS65RnLA1obn6B7WoTXwiHBSG3HKmC3Q3qeKPupVWtQ65oYo7uE1Za2",
  "key2": "2WstYRaoXm4Gp9BXTfbq4ZTxjUZj3KvAJFzYdjCAQB6siEUREyuA12gx4UzmhWAMeqZ8QD4Dh3jLLtUSxuBnSfxg",
  "key3": "37kbL37zuC4dBidQdeFsrSfu1HsmsLXxVSAbya7HxbjufB5xbs3npCo5eu1PNNb5z8nfxbessZBBRdoJ8wbhG1Wj",
  "key4": "4JJDFB7xYreHUtP9cqmb3waoVvjbn1TALYE51FNNkqCvexmhbGYj9qjeofKo2oS21UYiKDMihmX8rQcgEAu16k6L",
  "key5": "3ojB2NmQYH2zgJ8x9xuwzx41c9uxA5mQimfRL593hjhV5SyAepWYHzqwi4iwceMV74i5G2jVhzCv4KG8cA1ht7Pr",
  "key6": "2F6uJJGspVMdhUanaX5KcEb5F6vkDpTXpmCSymzr5LfjzWK7tkpnfkiJg1ZahLy4PNu2ku6mzfdY4ZrNB6m1r6pz",
  "key7": "5nWQFxKoAXJA1bnWmHEzLsiAXinxLycKySqoHrsJLneXPA1MJK2pN2owGTpgEMuybVGoXZ4HPiCmVGsxmR1ePY2A",
  "key8": "3RP35TD22aYtH58B2kCnA374Wz776YyPkEmZZ9oUYLzdAfa6mPi5wKEfC2iJwzRfHvn7BqV2d8WRoYyS4Vb1aFj6",
  "key9": "21F7qqZZCgA88WoG2socEcKyCg53nrVeF5dMgcJdVMZ7GWbDgLMWnVXk2nb8QDFjUw8YUFsqL1ZgXtF88CbGdR9J",
  "key10": "5S3eugYPwvpEHB6LcGQuawSXwHD17mVQny7p3ghiYkWnSKZVaxHzEB8VHzZrk7sBn2fApsUWsEcgMuwhkwqo8aWp",
  "key11": "5c9pifrj1YVuTHz3yXNRPNbWeEMVikypWdFApvdNtmP2F2evVCXcVnLyiNo5N6fqaWE2nuyhVKi1Tj5gsZot7DX3",
  "key12": "DRLzvaQrd2uzq9JjEHqqxxiHwh58z4BR2XkxqcogiiEYeSqLMHNadVbQT8JKusfm9mjvFUpYafxYT6NokaPEm5d",
  "key13": "43p9CRHjGi81j7CEV3EbhtxqEebF96aCUp41ssBzxHmMEdGxMqCMgb2DnycmeMSfVZ9XmQih8jbazfPRjWcfCYNr",
  "key14": "4xjihuvaWfVY231H7tftYifYAHw73QT2oqBJR1aZDRcZ3VrMDdyu3eb8Xj8GRt49V7epQr3P87Z8sTfsATx8AGag",
  "key15": "4ZJsoGy8KkLkaoMcdwLLydUtTa6BFiuj2HQTEk8JerUe2Xp6vQK7J4ehMDRkPLMwrm4rhAyFJa9vJUHuFDjXBBW5",
  "key16": "3R9thnezDAwGdTZb7MkNc5HUxqWJQLsweP6GsaycwW5ZiPsh2HkoL4FG3LVNivcnk279D7fuV2C4goAeJPJkXs6W",
  "key17": "5gF5qbMzD6nX2pt7pLHTTdUqKuoEr5P8f7T3ipeMhn1okd8yoSVGXR946cPnN651um3pdgH7VgdoMJ6voWDJRn6V",
  "key18": "54xLt3BEFvCaMHa5nTkfAGsQvMPY228iPF4pLkjqj81VvDFVP6pRKjNZbkmxZ72q5oEonDNwv7YyqP6NUkDoeKPP",
  "key19": "QDDkkkrcxUMdBnLrAv5cqavKYwqsw4C3eDprS8dqQKbg8Dwd9yCQd8dFrVyJeyDJZYuBwB4XHCtsmZwjBSSBXAk",
  "key20": "2W1uyuETRqrDYzFE7gAMa7jrFAL9rMSdaV91SfyW7VW6r1cWmoAQeJmXxZFJpRM2RWTzabvyFa3Tibk8XpBdf31A",
  "key21": "3VkmaLbFUk8vdn5XwSxgCAMUR8YyYz1opApzvDwNtgQBgXJ66q21KZfoJDUcUSJCwhDPAWwUcZi4S9qf4pmikzEL",
  "key22": "4Y7w3LUnVEWb83EWfXFcqUmAGEigxub4kTJpLUiGvjXTpEfFAHAaMG7Fwwq5gyreyzwdpa374QujLUUi4HWEvJwJ",
  "key23": "34poPFwiZRc7oH7nR1ptXmcAC7ctXgd98hFTy8xqNuER4ueNzA33LV4fWZsA9rPBfb9VMQk1WnXyFby1cnkKUvNw",
  "key24": "484oUnsF8zPe4X7o5QmjuKvWGDF9vcq3ZzWdj4GzqBHkwi3eraWdF1BHz73e71no5LFLkamjefKTp5BtvXsV3wkq",
  "key25": "45SUqR9ye3ccYmNoYZjZJcwt2aoqehXwXSiX9vUzJcxESPV48hNBLXjmhrjxcAqgKbTL33ut8wWsdfw1xeQU8Jpj",
  "key26": "4oRGhPijwbkrVAiaqB5M414dr1LQ7J2AjcTyXCc7XMoHwYeojFsHTCMdfdAqQaZanrYsYSttBWXABeKH7pf1613b",
  "key27": "3vphSPFki6rx5ohMYYBjNXWUdBDFZm63AXeT2ABafNFSvCNyvHPA2ARW1rsAzJShVz5f5Ncvu9cgbL3YcrE2tsSQ",
  "key28": "5hhsFHMWATQVKXs5y9bQm9ELJjg4SouTKFHWaACgQrvMg95H6oPJMUVwkU37RyjyRYGbiou46wa54BuHv7XUb3cm",
  "key29": "jSpWhbQcZC619WHAQTDtxVzYG3YAKFAiJiYrAW2N9sHa9nW1nVTdSgh1fPePjUYgeM4Ua2qkeVuoZB8eGDxRFDB",
  "key30": "4g27YVRd1cpSy4HzoMWLy6rBPk8T99CiPVU2SPnRPPNHqWPoVokqtmfsDangYzBTT92hkZ98xcf59X8u4uTZJyTJ",
  "key31": "2jeSsiMVdYZdwWaFGmkVNuyE1SYCbmtmwwHoN7Sxuk49yqSCddJWk3z1wPskUFnBS7Tirwy2Pr2KBpFsgcodKjNe",
  "key32": "dyLqT4FDtau7dAWTY1FHeJ6PBMHg3bKRCzP7nrJrpk9uihHSF2CoijE1nS9AAQZioJzf7JgUy3mo1MXqreUETpL",
  "key33": "3yGL1hdWdrVoL5S7ett1RNCtJxaFGcJMkey3ffuhhSfGRJvZuMhNoQd5uUXzvZqpFF7gXvcJzYiqA6ACNMzHJ7Lz",
  "key34": "6yqqKS1as81ADYBX2b22AsEAuKjytSSy6znuYE7JjcFNSTAVQF3aVzy9MwpnHTDyJZG1HSioVchgbZHz9iWLEsg",
  "key35": "5YaHydxAZZU84m1RKe8hYovJgzxJd1MAhHJGxcW84u7xoa2mEgdBQnfey6qWc1hhte6PuW3VS46mTfCG69YvEV3D",
  "key36": "28gqdYmJLoXtURoK29J68wHmJe4xHt2uXq8HFjiX9DW7WXEKKQhjH25guPEuaxHgofybMS1grk1fYHXVjT5aR2qZ",
  "key37": "bsRbh6CcEGNj2RoboudL2XWngpX79Y3pQX5x8sUDJAApoXHodgoC5GoT2CMnnsqchPzvYHSGJ2c1Xqqmr7ssrmM",
  "key38": "2wfXQCVDKnNCffR88X5fbnjnxewvnrmUAqgt8fnRTUJfvtdkBbZpatG1iYLLt8MTAso1Jj5sFkG87k4dMj4WY9Ef"
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
