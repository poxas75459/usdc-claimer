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
    "41EhJz6WXTZUZqVAxoAoi6msRPMjhvuVBnz4mTpZGzvJXzrJeEqZ3kEX1VanRMfoUiZd7XjQi9VD82cp6D8uV6rd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DuzNPAcbg17JcCNEDaFpwyVTbhzhf7HsxFYukGLU7Bf1pj3hKwxFBmBBrSfUiRGznErX7MqbR2pEhReiiYLZnYn",
  "key1": "5HwCqze9cJxppETnZRZVfc2UG1B1EPUZHYud35Cx39pmNX6MY3PsR6BKGED8yqAkzDakVUpwH8KKCFobvHdu7qXr",
  "key2": "CN6bjMTfopU1ENaxEL4FyuMrcfLhhDPCKHXa21JPZAVixvdAzT4X2DgUwRXngiqqSQ3d3M689Nq7vjb4L55fT5J",
  "key3": "5DRoe4c43ep5i2C2ejgjqRkqDkm5KbfbrTHpWyzmKRxJT8NveXjFyfTWpkmSAqG95n6Vm14Zp9veQNme3BAT3pDz",
  "key4": "2fTWmTDx99q4vJxtTEjYZkAE24vPNQbt1yTaCRj36QtWvyQ6wewHTP99w7QXTL44oks4smk6y5wJeJTPhipv7nQx",
  "key5": "3z9PnTkyHhakogS9Zc3hjVqCEKv6pEQrX16TkkRtnX3bJuAvDWDweHV3zcyEqEUtEHwUbn9sQWGaaaTinbhvZCd",
  "key6": "64F4EvaxUDFD4BsjmQP6okJxzRMEkiiqpC5bztgokvZBJ8xt6mUB2Lgtcmvu4xLUfrXdL4pbJ7Zgn8qbS4DVspxn",
  "key7": "2AngjauoUnck9JQTT85pEYC9TH23DgbkuKmf8c5PiwCgzmHuPRohUsny7m9LYHBGjVH4msCqaCSZRt4ueHo2efzQ",
  "key8": "58T5f7oawDeHx5mQvueT3NPQ6Tsis5VWzTbGnwNiwDsUCs5fAhFRLKS4tvoL8spY6bMhhEiDj73Aivx2L6AsoRmt",
  "key9": "9gQwbAaEUtT9B22br1NqfZrjQUui9GLQKp9zoiKmh36qb1sGFevk3NkZJzpUZxLHRQk553nNueGpZ5M5i1o8Vzj",
  "key10": "5FtFBMQxEArj9gDmutxW8P6iYXuiy6VYgBy9CoVbgoADpfpFvZGHyS7aGqAhwB1k2Z4x288WuvGVDCaXH733wmnb",
  "key11": "bwJBWiVGoX5ikrKZtE2wXdo77nFyzNKypgUKQ6rR9tySouTw9ZVdh8HEgBAErrwHXXf6ZYhvSHmEjR6MvAC9JQk",
  "key12": "5TmumkmtzvCRNNgkpGxrYqb7MDvTcS4YfuMnVoHmcQzbZKYEstqy8R8kd277CMeRvohkNiniS8i71Y9qFK2sB3YY",
  "key13": "42fJEJJirmBEp3ipQm7eLtzHgyz58kLpC94qgG5J2XpbrK6LF8KhYs2mHFZzvQimatWpawCWb8HibJZ7iDATtfVn",
  "key14": "3N7cywUJ4jFMZv9gp8J5ABocCJs2o3fxABFfzczp4521zLJct6QCC6ypQgQu5cBmGVaWYqeFswa4a464bujFMDHg",
  "key15": "2wYNfS2Ap2QQXVKPozzsba4SVNaeZBnZpySFco6EmkEuK6oTabKygM6c5CrCPvXt3gaEjbYo91uAt3DU2yzrVB62",
  "key16": "YqzwTtm8PunZqLz2bgfTsMMLgqdPDNn4VMz46yNYBAd5oG8T8zA58uZbxVRnSCw1L4kU7hniRWUMyRzkWdX7ZVZ",
  "key17": "DfTLAnPiiFBYNCfSc6oSSPZQFhtZzptkqoqCiq1J5qTUC2f5WyojCzfkEsfY8EDYqfJbvKrqgS79nR8BW7iAZLT",
  "key18": "2wwrNXK8LnnypN2a3dpWn29JazF4YaVSb76G6GWnRLFDM6KvBADuxiomXorvFE1BFGuXQERXcSCV7QpmkexrbSp8",
  "key19": "3s8dhZbJ113Q7vdsHLgbbXq8G9sp1n9NVem9oMsoG5WmkuwcJhLYDTpghCrh4x9rzbanSXKPTHErYy27bumnd4zs",
  "key20": "28QNog8fjnNQRyuQ18o58Yd76MRXAFP3NoeYQZnhfzAWgiQ1gvtsHPgP4c8Pt367FHQhizHpJ9Xh5kHbcQbkuz9o",
  "key21": "5GgGQC2RDn7yDNihPSBn5gkKvVd7T3aM46frmuA9QdLdMX9jAQGERRvqTpvC47QKxpC81RKrzK6PoyHrtprRkupn",
  "key22": "4CbZjCcV9JYyNpjrG9HZmwT1SDWd1DgEKCkyrbfUdRKTvn7rKuqPzvS5dBPixJ8gxPKN86ZMUpP8k8RQKMag2G3c",
  "key23": "9TKHv2aLArrZyFZdmWpmoAfg2B6oqjK8TbDQDZVheHaC642BAmEhf3ryZ6DxBzjroWo7R3VB9iabN2AQrxeV641",
  "key24": "2R9npgVtSTKHETqoL2iyaT6pNJfguPt27Auayut816BWs97xKjU47FKBmBm33ZUandDbWSFaTu2ZViD69jrvdcXo",
  "key25": "4V5FVGn4jxzcXhH8eDCkAeaTr3rH5mGXb8kMdsCHUhdFEJdSpG4o4n3qsPcinYzECt2DNFtE3P9E289aV2T6NNKD",
  "key26": "4peqKj3CAjxET7C1fb4hneary2233Uxu27Uj8hFwaRft1vXdq7JPdjjaewJBkT3M5uLvXuMbfZh9cupg5ErbQS6D",
  "key27": "5BE83pCBBHKHK9MGoZswgaWSbneoWfXDUUWsUEA5HCE2r2UmBun3GA8VvbqX8AGJXpjzckorrpYR63CWmUjkZncb",
  "key28": "EeMiUEiBFr6uMqLMcLFc2h2RENwy8WsUmYVESvsb2u3hb5EP3pniDjTAcWqWDQ9z2mdDnSM2uY3tJQHdh1ZHxD1",
  "key29": "4C8n6kF5tYQStpZXJHy4Byauh1VfMjiZNycn7ukjyQRCPcVPxPkMn98PEExyxBbAqrNcxUyMSXaTFgS15kxB1PeX",
  "key30": "SSN8vnJ7LboS6Uzj79h9nda4nPB72MP9UFYmA7akVdHRdW7LRwLXah4YW4EeH8fScN9rcf9nGkfVLcE7jKes5YZ",
  "key31": "3tUQHdvGiQLK89efMhK5opaxu1po9MgewH4jQc1y4XEYqwuHLiDmE9XUQwRLstPwdNUMN4jog6jzUTMrdA8SCCFY",
  "key32": "5UNcqizAWVqM21CTZeS5kXkPvfNxNFJNToooqPVMSNw1WWZQwQbF2mhkn9Sj6tZRRPFrhUa6xsJANnMpPhb3BTK1",
  "key33": "2tR3rL8T1kEDG6zHJmjwbkLMxFRHSYcakUha1SDhFEfhQGiZc76zPWcS4FVBn3J1pLRPE8u3jsUwS2BaHBQZF4Aq",
  "key34": "4tURuktct8kdxEhfXasKSbU2BFXPpupSrismQF6EpE9X84U6o7zKWXHmFXJSVZLnZZL6ZfCbqy2Hqp9d2RRFRZtr",
  "key35": "5q7Rw9h9MYqCRbAN6CBbDN2beKvsgBxxeeCH1sxiQa2CkCzJ87Z4zLKuDk7BcopztJhTB5U22uWshG8iWkrHdWn5",
  "key36": "5CACaTvLaHFkgx5GxSJrZuoREoj7g6ZGtnxSfH2EkV5iWdmAb3dyoNoek4Qb6LH7dNSqLiD6N1sULeWD3DZ2iueh"
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
