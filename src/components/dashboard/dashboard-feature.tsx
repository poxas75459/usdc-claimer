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
    "4TiGMWtAjS6dgknhZ2JaE4GXwJ83XZVktUbPoqB4EteH13Xtz7fUjvrPf4eyTCNN7234WkbfoRsQHPs3eFMQdyLg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XTEamY3crMt76NHT3kGeBY6FNvzsXWDxhFjBL1xXFSoFSRA5rtHeJzLonk4XqodRmarEt4UDrkXHWZpQ4www6rS",
  "key1": "34cpJNhGdrgEBCN2WPWDgsKGeDY28Ydf3PQzTZGdwAVt8BdW9zJDmUfY6aWtofvyxDzzkU97a7FnKNsTdij7JKj8",
  "key2": "5KN5yiZ8kxBQwaqfuywtFM7BvX5UQEkdnsdkmV2hkmT4FkjzCPENVSQkGR67t8p5gEGe8sZ2vqZsme25xhuLHBNa",
  "key3": "5y28vuUYaasaUfEDSgHYXyxu1z6ZvENR4ZtbFW1qQiuWwTiutrz5jpgqYfoFuZuDu2cYDZytsE9JTsxi5mUfWo4U",
  "key4": "3p6DYWPD7LjyN95cZGzhLKdSK4Yq28TZrb1Ngdwsw5K1WjpSatNQGcMZzgABsUXcFRk8kAiw6jqTcfjL9az64yEj",
  "key5": "xk7fepTsRu6ZoSedVYD4r9VRRpETD9rWQgHfmVvk8zCuWJp9c5Y26ZuSJiDTYm9QJHkXVPXMZErffzyiNdRPeWW",
  "key6": "5XEUCjdmEYivYA4xKrPNyEoH1WugRB4WnAZfC4kQommDuNKVmXooHGjfbwgC3Ue8Cj5ru3CGAvtPHPPHrVhZYQUP",
  "key7": "6VGYU7h49j1y6vL94LoePeuELDfC1QnV9FK6kqaPP3M8tykJDrQyncDf5dZXvmd1HKhEWjMqeJAvYUp3Upmz3G1",
  "key8": "2k1Y91nj9fQyMdnh5ibj9XRz2QcW6EafvaWVAhqmauJL9VCwjUuhxgz9eNrsNp4mT4uRdsKa3ac4j271yiMhMmq8",
  "key9": "2v2cq6Dbkbk8vuX3JFQsGb7FaCPac5rPHSWVyDm88Bn9wvjdY54Nn6hoHth1MAAVBoKCeAYqYphXNYwXKD3Tjzes",
  "key10": "3UyTcRb2axs7FHvHgbhSMhgNS136UxSM2TZAjB4KbNjPPij4aNviaAA9fmdUaVpKe24ZhSj9eS5yQ1e2FTopGRCD",
  "key11": "4MwMZHYN9o3cg4Wo64ciX8F9dLSofM4rL2a9SNgRGAMv2HH7VYjwjhjXV9BxLsVAow1TqXykGS9Cczc4Y5ukuQtK",
  "key12": "agYWZuiTjx5JvWwNmuSoivq1ATG7cXjVgtvFCM55uqpPT7d2ydoBoW8KB26FzyF13LQEJf52LBzMrJyuTafMwc2",
  "key13": "3J3HKBZf8ZYQ3xEM2dPtiZDDzV9UwDCGaWH6pbRWED5ykZWnqfMb5c8j8WTJF5t86hRmdfPLRtp7QVTjU9fKcfgz",
  "key14": "31BXzBdL1RpCsCKDxar4i4C414s4EKvP5outWYqSU7S3dFdgAu26Yo7S1Xa5HtLSyNGwqccEz1opqVLKbPKcEsRG",
  "key15": "2H4qEuYMxEukJQhDPcXTgswV6iCRnSNfzCHTohYRivxqeZtX4cjgzX42e5gp3dBTxZwquFbt7AfT43fpGK5M8ABa",
  "key16": "5SAj1xBFTv9JANn68QV6L2cFdZDVy9QBtsTLcXb22w1MfjURaAXbWLTcaXXwEAnsMLGttwbXxTvutLM2F3rxs3cA",
  "key17": "jwDzDM5HpMj3fmNctzjXYGR8Ke6U8jjz7ExQtdaV6HQ92trQwnEeGey9ZLYX8X6rtqjX5SGo68zn6my3zhhj3aZ",
  "key18": "3b7aRJgcu6u5adFk58qnvXvPATK1KrUJPMxZ1y423JjAzgHB1w5fZV3tSALL5nqZxDoMKjn8JYDfKVCQoFXHwjNG",
  "key19": "32pdceukhAAW3x6x14uERzE27TscTSUGddFicfktFdwfku9uuAjC2HirLGhm9q2ubscLnFqkF2m6jpsLPsbeLJGA",
  "key20": "5gQwBHHLjmwbwQi3q32BGqnTPY317vD3jXJwU8WZup7JduTJEPY5graw18jnZ5xBzPkvsKULPwMn9eRounyhzFRQ",
  "key21": "5pkcngzrwGd5vkWv5knHoRe3e7tYjQwTZoCDYqhDk4Lo2yhG1nkzT6ow2Zzs7XucfwbK6Qv7qyRb6eiG3T7YqUht",
  "key22": "3KdA4SLmqv5qMUGATKj2DMxSJuJnqFeJ8ktNkEtq9bY7pjvAQut8Le3ssNaHb2a9tkcdJjXaoLf9qD4gaFY3C7g1",
  "key23": "27jqJf2KUBCyPTemjD3ouxy64TN17H6WwCwasVi8BFpH5zEqLYX1bUsrnKHXAW9nNWFafxNZeo4L4zpbBrTgx98K",
  "key24": "4LBGUzQsb5GUTftSQ2mRz38B5nq2gBXaPrZwoYG7zKT3LdRA2MLR3yJj9xox7dryVcz6GkSu4vA11czXYLpshXKp",
  "key25": "bwLitVL9RE698XAuX8NU27Kj31tS1cqVESaC38iFZf2B2HkeyBFWV19xhAnCpCA1MCUw244d5LvfVjA3ZzSPEic",
  "key26": "CcULuRN7mFEKHCmKbKU7DAs1n2ifyiRo9KgjJaa9Q3GSUg24niZ25aXUwRCFHxJ2gZrZdWNTjodCHW5sQbzVY5S",
  "key27": "26XNbw9RLEL2CcwNyd2jvQRZBucv4sfvrudgNd3WJLefQmK9SLyRLYpSYa7seurC3ap8eYx5zcK5s1x1CNzJuZPy",
  "key28": "4uCkYmWwpyWcSXMpVKbHGKtZ4MpBv9DD6aG3yJKD1Cttzh16qbwPejAHq79nco4bw8rXnFMq3VinBBiXdhYxEDw5",
  "key29": "3RDQiFxcs1nQdhChLoKPW1mYnoG44GNk7YFAokr6eUsDqwyEqo4XEZnwTJ2sePnGor2EcLVSrj11SykmfU4ctEr3",
  "key30": "XDJvtfhZC8NEqdNEnqENqJ4ysexPLzvSzsDVqpjjsWwG8uujujaYz6jCXyEHLGppCUPk9suKQLzY46CSWR5VWN1",
  "key31": "5SKiSGh8ZW617WhsHw4SEHLiqsfQUz5r43LD6JXEP9TSBpzZjFnrjaSR77hjCJQutiUew8gvYUcySXt9cBSja9cv",
  "key32": "61t8un4YHkauY6sHtAs7UKnNCBp9BZqqmQVzq9b7ftZVoJ7MagqcGKyBed7m4t57egkZzSTSJSEk8tpRHrH2d8ua",
  "key33": "5ahuEygtk1cD3yt3qQVW6nqsko8hhGKRMzquSdU5M4aJvrJ79biYkVBcnGCtuYgenDdV7HfJmUYvb85JDr5ygGAB",
  "key34": "2hp5cw2dfRX8fdvkDfokYrLiqMftpc63sbmUPZF92ENxxpTv8rav31YDwn9C1uxGFkQbD7w5JNSF7BfntLSU9G2h",
  "key35": "2NQo4gBA9owyRXTXyU7X4tFMfLxL5ovVSr98FY6rzS9V1xKX97JGfFw5NeH4HQzuep9DdFXNheNSyEGUBBs7ihjT",
  "key36": "5F27N7a3Ar8UN572YBS8UhHejQswyGRF4tJ9Xyn1cXHda2Y79swfrxStdz6iE9WSuF9Nq5J1b5DfqV2eSTRsigrH",
  "key37": "3KzhWMugTyfmkmCMr5pUMqpP1qM43m3GmeH1TnnoSYh7AXcKSkiv851Qswo8ioB1i4Hjx5bvig3tvoWxXUYGMf9v",
  "key38": "2SuVWxsvDTtmG4TUTkxPE4nMq7uBUnjtKvKaeKiGi7X8MMjADdhZErbCLfN7mGtDYiykZqD4jnoC6T7S3hsG8jqY",
  "key39": "4dvXkRxo3cN6X69VDUXKDxTSN6WNjYs5Ep64FvgWS48JC9FDhZ3yqHwtLrFXmhgLLUzvEnaqDt5wSMPW9ytk4UMx"
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
