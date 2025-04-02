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
    "XS7u23ifByhBJgPo4s4b4F3muXYLtmajsGcdVdgUqsxmMi2utw37x9Nn1akpDwWY2LYx5NEMfWTqZNH4BZKmnwn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2it9rpSSB3GvzhmLSmGEgwyD962wXgSkV4LaXYW5LWmG1ByewcDVwW54iypaA1EFZ2XrWYY9biwhkr1v1SZNnRSu",
  "key1": "5DKYZNGDBk3JHNekHRtrpErfPt5x7VPpiUqmiJwQv1gWGT9mHQrAXvQFqipZP8BCUA3uULAAmRCygnHCYRSJr2f6",
  "key2": "5wAAw9zUzi5KxKy5zgrwUbtMiYMV45BdK7FNxpqvMK72iWB9f1qctvBiAZinqjXWpAcCJBU5Kuag79ah6aApRxHq",
  "key3": "3FGigbakQapKPHUo5FkJ1UonKxyUxXrn42fagbEqK48dLUa9axfjSgxKmrJ2G3pcbMG5zw69tRjwuYruLmuSXWS2",
  "key4": "57rL8x676jeYqJRLYqDBbUkiidGBne8iarPA1ZRQrtCHHyZLp42XfixLgBZj45Xj8nYUWoT4oNEhFJCLwM1qbBs9",
  "key5": "2eBd71yywRa7bX3i6fT9DuJok7pNf6h4QGJde42NNkZn3A753Efn3v8sA3e646NF8JRttNWh8coXtXnKvfuabt4V",
  "key6": "3zWXvmJtNxBk6KEgB6dqBtf91NT3ZQwd3dvmQePrtQkqmyJJQJrDuhJ64rhn3p1qGjaMcXJL5MBHLa8CaVGMWNdr",
  "key7": "4A63H5Cj3C7okcJmRNVLZ7qCnzkgGN9epLpkquo7YjRoWpB8U2j3xbuc6mtm8G99gztmPwt59juTaYn3Q5G9kPQY",
  "key8": "5Wd8yJjSXonsSx2MyASrCfiYhwVwWQVPctn3pcDCNx6mmjVgret6KTNFe6GvGcW495HiiXUQB8b843s2BZqMKw28",
  "key9": "5jEbv5LHxeRiaFRpDQuPFWZcpfPmdMgy1AQrJ4JuoNUxtNzDy6JBaVfwX2ZXc39SsMCvYHYiYvrTYtRHQErVE3D1",
  "key10": "5BU5wkD4GaGk2pJU43oyy3RKTWufFVMHwSV5FshyMM5W4eBoBwkSWgrX1wYWv3MYicr7iRMChujTqpRoUQayPX4B",
  "key11": "5kKZ7Ux287HH1cnT3RFXJyjRaF8RdeykbAyiYi9YXbJgDFzc9S58VKGNn5eb9S1pJ7EguZaKZCkRmGechvbGE7xL",
  "key12": "5ea5RRVXBVzKsyzA3wLqwfEp65Vnhp14VYMAnWuexfnthgptsRScW4sPrBZUiMCNhet2phRk6U6dSs8gHU5SmxUv",
  "key13": "5EgcL1H1Lg5my4mBACeP3brjWpH2QMwY3jFRT5m3wD4GaH8VjBFcXMzCTHAuxmriso9nEX4wkwoSXh2SEqjnr1fb",
  "key14": "R9KAEnGwEoGnD96rXEEg6v5ZijAqpT9nEsZEoz4cZh1TsZ2AcQ9JtgS4ddRyxFsEszGja2HCK2q9qhXFE4xx4cT",
  "key15": "B5fvyVXY87CSBdLTu79zMEnu172Sq3DMFeEhPdKSnjCKfM72qjTXsXNjGxywrh6Ps49CfMAWLuKGy7eVLRncnEY",
  "key16": "24pAp8vRkFJWiz4BRUMabE9m8TGgZj9CQ6ngRyiVAikQ6vGT4WFxpnwwYfEXS3SjfUFs5f36eJGAqbUTe2JGkYdd",
  "key17": "3AEMkSetinCRvdGHinsyReAGJVzUpFJXsfHHxQVFuifdrKBgi3uiNbmjEWHhBwUmx2iPuj8rooumBEJ1gZa9mEZN",
  "key18": "41k6SCKGJUHMdoSzkqpVJtF3PEQx1SiuuRFmu9Sum8jguXe7rxJQ4zRJHEoWQcTPhmdBvLP9JdAe1oLcgFXivhgL",
  "key19": "vet4AYbYJMnt7qFVmVTFpd1qkdjGYbEN2o8guzXk3x2uvNCkzYjibHR7WgrJHpGMq7JGqtueW59W4KUHRJcB6z3",
  "key20": "2Y8ruDuXntUT6rvu9UAmoBwPAukLg25Hys53RoowxYMGxfDr23nPCz7BTm6fqoPsDmvoaAbQ7rLrx9b8iB7Ag6mD",
  "key21": "5ETM18M7LJbaSAxEDNJFjUyrZWsxYfe8UKkFLB2srUa5Gr5R2ET6ffr8iNLMZ4shABn4P2DgSLG9roiAz839AHZP",
  "key22": "2NcPap4LuHDCDLvVE4CXFqXL1SNW7RJ7uhQVwaqqctp6vc3de2uNGwXd4oi4PDg3UJDdpn1qhJWS6piFZaAxsAad",
  "key23": "55VqFPcy3cdta4AMYaqSNU3KYcEUqbH99zSHxan6sdLy5U16GpFtjGRvYEA3KBRExAtJ8wkmYRZSfBVNMkQHmoBR",
  "key24": "3ZSfcGs1iyZ7xUctU2h3py7KjhQDYEmL7xxWBGYmjxy6Exen5BQgiFN7AJSW9RrebXoMiaFLnH9VSX6DYFuUJxTN",
  "key25": "4sBCxZ1syyLR2ASe19idyinoDceNWdxNu6VQDWzCB3sL2NA1pfCX8k5ahKB4vPnZNvz5kvn4KaVRnmS46CzYbj47",
  "key26": "1KrBUxUqXjZdbZe2kzKu4wDeTq9Eo5CRNPeEPkThyTS2W1okhxMBay8d2hkFpkB8aJ21zDsAifanUi8NWSzPABm",
  "key27": "24SxRo513pC1h3BPYio8jVizuBve8rq9yq171cmYesCDW2JnRwN94MPSYvrmXB2RrqBGgvJCLcn4y1tF3BN75Ej6",
  "key28": "5DVoy3SyAroLYUvkNqNc3PMo6WTT4QcGKnXaUBSRx6PoxXWjP5Ln9YYEvNjSryH5uHYuJfL3WBZkDFeaqpmWKLzW",
  "key29": "6655X8wv6pmtAUycyRYYPzeBWw5YSkeawkN2Wiz26NgV4nC7RUxbW9C9Qo5h86JPESdVgYKTS84WkkXEM2SdkRqF",
  "key30": "7ZFgKPRSFYBB8K5Zd7CUzhcpRp2osKkRgapuEnmDoG8CX8QS24KEmyXjbXTAqmNMPzNkquSLdUciTVUzFEMx7kU",
  "key31": "4cz3xyyhBX6ZhzSohQcXQVj3phmPXZPzwTQk58R9UZovorAbRWUvhDjhfkEEZHkVwVX9DvJhx5hTJ4Vq9HD1WKSc",
  "key32": "4MtFoS2o5SEJrYsvgwTmP59LRC9VQEAoMDLysPQJaH3vQpmy9YnhbZNBfwvVgh2x7f29GThCCHGYy3hVctggnHSD",
  "key33": "5FyVckfnsKSjebDzdmkhAYqgYVvJusnYhRcqz4X2zGS5K69rnMvP4bH1NzeMqthc2cS5Uvxd5jx3j3phDuMQEECF",
  "key34": "2xoGSPD8NeSrXcLDGsVt6u2Tf12wx8HAtonvubShbnPJquWKLRbyb2yBXhWsStv1PWb44gwxu94f4gvftpAntC11",
  "key35": "3iyima8r443mCpxTxdHeqqJ2BisWemThaweJAQZVWGUHHj3cMvVhqqXw6j99wpfriKJ7xTWymrrjbqEHbkbwFMeD",
  "key36": "4Miu4XZj7t4vn4nKLz1TbGKCL4ewA3foS4fQKjQeMjnHrmdsoWYfRxgZZ1XBNFo2YR9ra9GyZq5M82efja8juEzZ",
  "key37": "CPbpNTsBwR3bw7Urx8K1oidQBZ9rpGgKHpm4uDom9dran9QpGKwNqRj9B57rHqjsaDJXxqS4T3EeJAqAiG8xDUF",
  "key38": "vLA2cuJRe1kBo1XYUfvLFDkmMvTm4gpmdjdoimrTVnArmH7rSsQHVrxQ7b4vUckdFMZ1hWZei3fwsgmLtG3k7Jg",
  "key39": "24F3SFtGJMriQvnVJdP1vxtivtS7ge8Titgezh3q9e4Bfvf9uhM5GzxYbprW8iyZsAFshZfTPMrpVG9imQbDaxgJ",
  "key40": "3UzR51xXXHduPmkGNvZV1g2nC3eqqUVixBAgd9svhWT7XAEQDrt3gedQBGRwgYCweYwwBz6Q1mHpWXC3LUuV5SY8",
  "key41": "5mMmCCzLceCSweM89CStHuhJirZaB3ycgxAw2HtVeE5my1FLnDb2sBSESUxK5FhwXEWeBg1h8iv7jS7jQX1hVpZn",
  "key42": "2w7pCY4c59wEEwU67FWEEvCBe3oiYjy56VHfUMpcwznBR1kmG8MTWjUBMjmAeSwQMzoZmnyYhHZPTqcKRmMEy9Jj"
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
