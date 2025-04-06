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
    "5SQhQAcnBXizPnxK9c8fxV5TDf9iHHCFd4uNvT3HnxVEft9NgSyDqvrnLdFCBwMgMzMDdoepxGiTWN7HxDHMLCPS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zRPBqLnZVmmpLMRo8mERNTwVi8QJaZBQkmsFMG2AXF7myV7EiA9RVAk5qZNj51EsR98zU2ZBLPC9xX4H8pSMLWL",
  "key1": "2gd9MHp1EaFx8WrQbsrZtqdhs4nKCGL2NmefevwVrFVwxafvEyFF66gBLRHYzvdev5eALxKEtSwKWVqN4Gi185hL",
  "key2": "5Kw9eJUbJXzYzAxbqxNjRAcHiPMw8Ah8KeHbeQF9H2WB1rVoEzX4UZRPkbzWqja5gUM7kfBNrFk3AQBE7KFuWdE2",
  "key3": "3wXWYk1ff6jz5zQGWoyiMU6VKeY91mqkprzs2yTbSE3ZhSrVF8cmL6VgHW2beWe7NB23Ya8wLjtzHHEQ9growJVi",
  "key4": "3hSYpfZBBgzuUqRukYMhAb5pQ7ja38hPD2cwns5Kb2dCBLvPgsSkqXigfZSwaT91jeufTiSTYJ9nd9QRi3GLaugz",
  "key5": "5Rb2BtdjzqaYVX3dsQFYMHCsk9DTru4K1NaB8fvyc7x9mM2pDuyDCt8HgEzzMcT3bjkBficJYmSiQ4vim52VyS7k",
  "key6": "3QojpZcDPwkUwhktGH8Y4YDYZjTqzPXhUfGc53Vq2SwqXGP4dQazL4qhd3FQLjj1yqti6kLJzQkRLyCrjGTtW2Mo",
  "key7": "PnqJSiWD7Wpm4ZzLiu1SeMvsXYwmMJ5QKxvExVikmTLMZeDqj6KdyBxhC6e7QBwsk6Er4XEYDdr42X8zeHAqSU5",
  "key8": "5RmYZoQa3s8Zi5YtV4nV1axHbRH8YCY279sYjdzFKvbbiChvQBbtj65ZLMt6oXuSjMdfnSJUVkphHrHHBJADhQYZ",
  "key9": "my1coPxY65baNKmK1nXMQPpd47o9MRw3NGgJ6CiiSoVwA4bcGoDLJwsKGRKKx5n2NKqaitX3gKAmu3WC5V9npLW",
  "key10": "4w4irbcyxW1UR5knVjZwBhfnKfLGYzaTihDaQj8qJBPeLrA9H5UZHh7NrsTJdEtk85d4WV9Lt4j5DvWYojtfi3xn",
  "key11": "591mtQbre7AMBfzKYbxKdMyJCgE9QiaGuSzMdFzCyNfHz1Y5TyxVFVJE1xZvac5gWV2K2bttmGi8gyfhiMztxc79",
  "key12": "3bPG7NHGLjZJbHuJgittbtHJc4J3Dw3hpymkv5tc4gX5TF4N6yoPEqrHeLzfJF5FoihY3GWNZKi8TWqJQ84HaAnx",
  "key13": "2Ku5YzsC63xYwPdisPNPXPFLt8EVKHJ7fuWg8e6G8x6ZtZvLhFUpA4p7xLdFwpmnhHkvYToMkc4CgStRiRz2EgZZ",
  "key14": "2HxhVfhuYN9xgyBehRu1EzJgFp46byLDkbGmzP4Q8u1asaBRh14D8tFjTCv5YSNZPodjkbf3xZ3EEyEXTq7gDjYF",
  "key15": "2bMNufbP8DqmrNzERPHELg6WpTKxLPdtLjYVh1cf2RWxNM6RKJk8CsnmHR7ZKHaqkbxYASpzHeK2sSUiaDhXu37N",
  "key16": "3jSmMs9rKwVs6qNmRfjr7GVwChRfQNZf4vRUrS9owgcpSTbib39zUY3YkgU6SM4wNcwVYtkoyzCkRtaRhFEzPnBu",
  "key17": "2sWcVT8Y3DNYBhkE2r8sz5UiaebaUg91ZRvoDMg6DHRS8J1LT5cMRw9c3jdJC2SHUd3Aees4dMBpBSk3YtC4NCXd",
  "key18": "4m9s2bC7WpcS1ki8wSdMZBchYkJHX1nC9W52gePznX5XH8d3wn8EkSbNeKja36SgrtMJBaEz1v1z7c6MwyrffKjM",
  "key19": "58qvNdsSnjQoqqXoHssfu9S7upxsrJrTZ3J528fPXLFQJZUhRS3fbwEk8LVvZrE1hvmC9Rju6mWziyMpfja4SFLD",
  "key20": "2oD75WSigh6qmXNVZ6VXKeEKGdQ5RDtqYHrjktqrYD137mgD9RPwrXjfw5fE2k9MyR9Umy8DbGHWMtwo12Ro5RbK",
  "key21": "3jP3xMzP2c1kcM5XTxsxGdq5ysJRjyj38HSaEEaDkDdEtM4bPyucotQP7FCmpYUGLFdwaxQAiCqSXZ9FQwjeDUdy",
  "key22": "N8VAYhdLktc6x9uXUQQPtksKEE4NrCumscwytLvrhjV9bwR8rfFKBjJDE6eti5XGC1duycPVKigejqHewU7oVP4",
  "key23": "4CtbFyGqDvo577aWR2HZpW1Hf9xU4iPsHBk3kKLzRjYfXRpKBR3tv4j1VwjctFaqnPpjMmzr5W5NeQyLZzWvMRBR",
  "key24": "4cSdwygvompUpp2Guu6ooJca96tskLmANAGpnHe1boZ14NCgQHKZNBHpSRQbi1pbB5PaoxmbbuYuAoz57Aaz71S7",
  "key25": "4TucKo6hoq47ZFhP1HhB3JqGwt2PpSAz4oLRdcWMkscxq6Y3C8Nm17fatVvGeWoaaSQe8vNXJuF7nNmfueXAyccz",
  "key26": "2ycQ6oSAviC7AJps4Jj1cEPQkFNHNS5cmaGXUvk42iy7V64LsDekmaXWjTmqBGLeh7GaduWuBbXDzooewschQYn",
  "key27": "5yg95mkTN8J4ZpkD1PmXaaSriT8hWMTFDNoMfPXJfzT7HuHYTfGmDvZQCmvfzbALYZ9er75MwxrFWWvnDAeMQ1qo",
  "key28": "3haXYv9v1KUmgT9xtFvcipf4ewcyCEac8iQ9v7gUqRYjZYZqeSpgosWkCRuZtFbk3SBAjYyWp2u1GwxuB7LhmEo2",
  "key29": "5gp4HSykzERDs6KsMbk7B3FFvyYuwPtRiccLEWxf2JULA1LbYbq6REeTLwXULwpbX77WDHiUVMtuBwpSNmBynxQF",
  "key30": "5kpQMfSwSQN9gvhHaRoVo2xUV952VsdL8fiHzFAdgLHu2N65WGJWb3SCNXfCCtfH2vjo24wyFqhtqDTVnqgKxs1M",
  "key31": "34aDaHH9NsxnyFRRD3u8NbwvpCWkFvBGYrHDkKUAx8fHBXjwSdBU3fXskiJU7kf7ZPhCwqVZj8YLRrUngM3MpkBE",
  "key32": "4TYvYyNvPcUpBbFeDyuEMUccyUgWhsrPEWHUJKiGth4U9yJGynr7wHaUwSGqCqaN6Ds9rjnrLjsyDeX6bc7EkPKB"
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
