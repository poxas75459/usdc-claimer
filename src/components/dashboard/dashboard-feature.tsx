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
    "3hs6qwsg8BqDwBQw79tfMB2o2wejVkBRNok3WAyAYFRw2paiXWG4EQnB5SUkX9bjfbLU6x96TaDW9z2mKLgszs2e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RqJF2bFF1HaNLSVh83sYYYDhG4Zx3dCYmZjzs7EJgK8f8S5bFBr8sWYmiSLjFxqJzVmMHuUQYJ8nuUiphYeFNJw",
  "key1": "3qUZuEbf2khRC4SCxQPfBymyYfp11nJjU1wXTMB3X2u2hNiDDqyG95pJhQJXRrUnKBfFdJf1vwZtnh5J3V24VGX9",
  "key2": "Xn2XdP1MjuywwoQ7N11rpg6CfXukEau49ApsJ1Rv5njuisch998b4BdapTUooM9AcuMGRKo4xRPoDTsDSPRcpfo",
  "key3": "2qBjnrcBYbxQDQt5ogbybd33ErBNeAQz8q43CYbspEpaxguebx3ancBkYSsu4YReAwfemYTJiDxbprfBiUpRzhkZ",
  "key4": "5H8WZKbwLDUejdW8HrPNDiiCSVjd3GUmsqtiNbeqoyWWXN22pcdw1pTMk1AErrBHoayquCpukk7ujmrUmmbhC8F",
  "key5": "57tKtxQHhd8xrrKekWsTPYZ47F65SNFbJsKh8xrShtFdFPkFcn6jc2AY8HcAWYm5aiauBcDuUQZEtjmgtAN732gA",
  "key6": "2g8LFecSR5L6xQhfcLtXJ5Df8AWNpvF4E7nYXpqHRneDg2Djy3xNvWkv2XAnRgoLFq9R21soskQAUu5FXtZNn2fD",
  "key7": "3tQ74zCymEshzHaBQHwWCVybm6iqqNV33af29kTYgNZxrdNwK9qU3ivEH7Ugxox2gJmPNSpmp8mpqqCV29w67fKg",
  "key8": "3oBMJqkkCGaaefAeorvQ1SmTSPZwEDmou3wqVm5bP84bzokJfG3TS7rWsrYEwdxWF5bFQtrZrPGtDEwWLokYhTc6",
  "key9": "4tt5CxNrY2BjBdpwY1oTYZDoYqNAPiqNoRinkDg1kUUn5YwoiiF7vW8YcbmNbjxvDC7peUQoCzxSeuEF3eBDqtLh",
  "key10": "53ktitA1FATZuwSbAoF2dnXXJ194CSpuGLupBhoNyE2hixg5K3V9yFWc4hf9AopBBazcLvCN9iAZBhW6zyztEtsJ",
  "key11": "3epHqrLREfe7tGfa6EhGQZuq1rMuMkymHTaiQy3LTZPdjj2vXFXKUU2Mj8xAc2RNJPuW6Yc7YBNRx5PxB2PtQR7K",
  "key12": "YLp9UatUmw3RjJQNgYZafsfUdSyPygu3VH9bQ44h1KMxZsV9pxuwW4brjCrs1DDcqkNVK6xuS97zw5aDqihPpsC",
  "key13": "nf5hpJwfHbtvGyBx7QQHmJRPKYy2Rht1auCAvvShsqkdJYCPMc4uwAPuvF7rBHFNughQjmiK7YySWxpgWvsFLtF",
  "key14": "3nWBJ8taxH73FR95ZQ1hEK1SYhTtsraUqjzjBtdxA9b2iz96YDzS3uuumMUQELPMNz6KpPrcM1XXibz1iKdGhFPz",
  "key15": "4vhyBXs4wmFLRK85Jt2s8GLCZqxrNJoHKDuJLi8oUpAav6Dsi2WDTVFWde61E5Fa9YDgGpcTr19P4PFjbEYwqmj5",
  "key16": "2wHcPFHfp5NbW2z67KktSH6ygX6DAbzh4YyCTJhgRbtBRoJqyF2HH7FZxMCm8SxMJNyYdGZw3EkKUden3Enc64Xg",
  "key17": "5pCPmcYn6NsQWJvaFHjc9u8iQP8GeLGdZ2wvyT1nwekXGFeF3CPNwfaPSDmmgijoypPMNvCqbN4rNrjVHVuj6tdq",
  "key18": "FhmvVu8Gm3XEacMpXiVE26CFkEv7k3uZRmgGCdXmiH95cqUWbeTVbsuGAmoZuqDBC9NsnrL2ZwCx74XE3bu6VpY",
  "key19": "38JvXNRULLecdDPqJQ7cWCukPwyxm61S8EvuXyFSCo74Rmen2SAKRvysEgBzr8wK2yncZe3XNYjGNUDUnvFcBsT1",
  "key20": "5RawGYqqWoPsb6oJfv9Yyg2WUS97cbWJNkRKuzYyBY1J7ysuXgLcLFPjG1hr9NJzJM5ofnQj3kvWDPkvxoPFKVED",
  "key21": "hCv9pRD9LHNZJpzqvz4kUPvDpmkPRjCG8gNW5XV3aVVwVQmYsdW74EHyNaNvJhJ4cFmdeezDVvfiP1BBbGVdnr1",
  "key22": "4aWS3BrqTfMCDNy29Syo6VPHp3tGEzLnUsU4Sz4s2YR8HNhSfo5AkrTM6FzK8AExx8ZM9YQVQideDAKGVjwqYrUh",
  "key23": "4Wk3ZFamtgsXcWXuTErFsv4bW9i922BhoKA4xGPetBore8w2YdaFainVs9ZC7qXrYnN48omTTKzZvz8TW2M5MdzY",
  "key24": "xY57eSmgpTzrNH15Qv8jbk1oGW8KAzpnapFD6nnj69FM6hed95GpJPnBGoi7Kwm4xWwJsAphyXkDTwNtVx1cGTA",
  "key25": "28bcoH7F3khmK88oSgrcKeNA2wbxyMGUyXVSEE9j3QtkrRbRts8JQYpSk5m3DbGp7yRboBxRHQCNyggtQLTFHKqQ",
  "key26": "4vWsVrQZWjFWiLN9BUgej7ySn3jfnVFjNTwFEe5ir9czNyg7JjsTuZEem5Q9e5YV3XfP9dCFU125XryxPDcp9JUL",
  "key27": "5wgkxq3z4YxSuvTtRP3Db8w925qMQzMYmJLESE6ighS7iSEjsawh7D48YjDKJ2c1sdNHAfr3onribUM7vzW2v7b9",
  "key28": "3hCVMnKNcgV8V5XbvBHy1XnHTcrWgatiun4QJPn65BHa4VattUzuVVAEUFtUy8PG8P99yVCxX3xMw3uSskpMWdBD",
  "key29": "2PfVL7dirzc3mUY4E7dAZfMAdjme9hjNnSdyrdfx9Zrnyr3bQ4yUtBrCuJ7zmqtVhsih6rdBfve2AmV9rhieykKe"
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
