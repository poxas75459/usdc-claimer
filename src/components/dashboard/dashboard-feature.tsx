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
    "2WCHjJFRGCyDCb82HMQcB85GystgouJvMkGWPHyB7vafYxhUDvq8SWUzHD9fWtK6rtHWb6jmUUkm6YztE3q2KgA5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Nq6GY5YVqYZSd1k1v3ZjWPiCxh7oh4Cy2yMB3Gm12NiohHuo9DSomuJ5MDfX9DV9qT4xQ5s6zxex1GB2Grmyp4i",
  "key1": "5Y1K5Ym39h99tsNjjYfnvqzsaVHoLwxaVc5zUbnZPE5pNjcqhrfRQresA4j7xPace7nVJWMDZgjaY2woLXNTC6aD",
  "key2": "3vkgbdNkuFhpZHt9gygXjyFqYMyRYzZqbxmP3S34g1KazGHNNT4pfHj36vYjzbUBsqYZfehCBG3rVQXUPJdML54b",
  "key3": "2FW7gDEduLMyi4fErCmgnG1xXdopb3SjMV39Q6jKWWDycpTSnQH3Ef2Y4EBXftkxZZDfGoHe36jc28EhUDbnAK2J",
  "key4": "3pE9Hia662z5XeBdxn8VeXB7CqvBdJhmYARe1kJAee4sHSrRMevjdFS6kebNmvosa6b53eJXvEKPqheKC3cCGcD",
  "key5": "4JssYR99RRt9AvjmKzXogkrgJbRuJRiXJh64fykc1Ao8p6gnAzMp1iWLz2rA8VTQDxVjwBNuFEZHRr6uuWBQ9yes",
  "key6": "55ZM4rmZjHbSFD5hJ3CveiEPjtoU6YgrkY3qXWdZr5DEm1xQhJCjQ9qqF1s1s87DsXvJaDEa3vrR5NCkVhByVmkZ",
  "key7": "3TkGNcRUpM9pzL5o6rhFkhz6KVTFx8f3p5F96h2KcKhwECp4k9jWs8oZLLWjewZnojpsYqYazon5nLLAvZfNHCeu",
  "key8": "5WL68miuaZk4GXHF3tBAHNvuQEQAinyNTGqKHjzPx7Sny6Uf3Bh9Mn7gwvoHx3vTwUMijpk4htkGnos17gU52oXM",
  "key9": "2Et2DBJKg5t4aWGbT9VAi4z9oquJgawxCJYmthq5vTG1ehkAwUWxs5LUztqkTLiqB1AyUp7r1eXpkAxyBzqoPVbQ",
  "key10": "24uhiTRvCP59iznZsHz22g56RcMQPyVH5uMppkFX5BcFS7qbwygF5p95GQrsNJNcCmsWdSBy6DjPKmLPvaGXccje",
  "key11": "6a873S51QjKv6sQGndFMPUX2wfmMrdvmx27xenXw2K1wCNp5B8Sv9JDnpNPERE4t1116bMfHfnpKdxuojGwRbnQ",
  "key12": "3JncSKSpZj3JqJR1PWFfJraMNaGPFUyrFbXfaLiwX3VQ3KVHD3uNV7LXnKkWUgxGAULKZQypTSEuJJve6y5Cq2LV",
  "key13": "4AEkUVMakRZueVEByCAAaQxpycWGeHrSJTYvNDMaJacv4VLLsnzAtMNU9zcwTK2BvXiwpVf67GjjxnJF4XA4SM7N",
  "key14": "3juRC5xxAJmmmXNbBk7pBqRdw9G2i3BLawMqTV5p7GFGx46HGMNUuzRaaqGYCuCxZXy8vHW6xwvKwyyNb6ngMxU7",
  "key15": "41Y5YdD8Wj39PwZxwk6QBcFGXZe4mVq4uhTPLWTiFeVEVYJW3wyNDqQJwsX3edhHTVFMkfgE9qzuzw475LELPMRq",
  "key16": "5Jt4G1HWvLgpooZGu1m4Ya11mBMW1qmSSd2sp1LZSTnjx8eFJmSpoV3uaisiQ1tNcbB89Zx9qmsrp41F5od1eD9D",
  "key17": "25248QsQJaBoFuwi46Av3QJT1PDPMqDVawhhbNWD6pXaZVhuWNYCY41DDsxGoDLAT94tmbvz5u9WC2V2uRKMRMa5",
  "key18": "2pEdwJFiJhiE3YzKb2Whu1zh896aiedNTa5oQARWrFTNUYKF1Fs5Uhx8CvhJ3wSyvRhcjLhBveHjmmneCkmB4EB5",
  "key19": "3Zq5GSQCPadEpKrwgsLZjoMJuZdc4RK4N6om3ZCRbeS1dUhR5VZNQopio7tEXwZSkg9NhjVzxJUJeiimQJcKnwhH",
  "key20": "4k2SYE3C9Df1vGmXGo7dCRo1CDJJnnBvEqBuFSvQGVAbfUxwH7vNvtzB2uukpXN7Gf5FoBnCgX5EAK4K6RDRAmP3",
  "key21": "jMafyVBnsR2Ndwz8yCHswYvM1gVzNBTECK9Pjqr41WLEJnnKQvRDAzHJvCYCZpPGWiM6HGSzhVzqk29ESoUce9U",
  "key22": "gVcpGG2gRxQXk9pk2wM2i4dfW9zRuZYwqqobBYWKaYBDVwn3QMgjbq5MkAsUveXeiDz6q6KJTkeF3Ef2e1zYCF3",
  "key23": "4iXtXEX7JmbQZTgzj6rbRQ5DiMndyWKf6wQXQXSKWbxreBymcpqbJH6Kw36SmRU4FtSfHjcZYMgXsrFGS1rEbBUW",
  "key24": "nf8KGNRUsFpWCzEuAdq76FMKKtdqrcGgUEhuAvrwgusjHYTF6mQcTkRQHr6w6bPQfLBes9wnoEGs4zBzRo8FPWh",
  "key25": "VhRpNvo2qndhbNvsd1zWqDSv2yqAcMHadp1T8xE1Jtq9TVZ2Us8PX2h5ZBjLPF4d5CcmgM4WtA9a66Hc36c3Nff",
  "key26": "1kBHc2Sde722SafbGxSkS4b7j3ADR7m6xVz4FFzuq8a1fuE4UUGzgpitaoXV9XCUaSUmQYJrM6DkMdipR6YJusU",
  "key27": "2XBXERmbbbc6UpzBQsURsa6X3VQKTjaYPNgiyMiiUVxogovdFcCrFEfkCUja5393PobQbsorTj8n4jiho3igPn5n",
  "key28": "U3hLeQ2LTBNTbMDPFVCMA43Yvdq4QWyQ3D9j6Ea3LdtyC1J9UXmZSfb13Ect9R1NeHarmLWRFbwDwNLYYso72sj",
  "key29": "3ZCx36fV2AnJcPCi4ZHPdZUqoVN2vK6e9S6387xrT2oXHsuG3sBPxDcbWsUS7Hej975Pgo6nboGkikP2PgkgsHbZ",
  "key30": "4YntW9C7dAty2SjajdAi5wCK9tZM7pAK9nrHNp8aW9ryPyFjmTkpyM3Uso2U46bSdsmSxUt4CNJQoLainraoo8QK"
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
