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
    "th51rzZBRYrmbShMAEfDEWAwYYaDrnCDWjiZeJGMFuJ46cnx8NPonCMNAVvkhYLxro1GKVAUzWmvffKPjqm4s84"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2StWniHSYkMtnivbmfZKhPY26pU1YwVE6c7fxAT6e8JxQmeVC1s63PrjmAYo2o2Jomq6SFMokqCRuAUtarVGkt5y",
  "key1": "4TJvMyzuncT2eB3KeywKfPdWmtriyudm2K4cvmkguucNJGoHA6E7mjrHxqACvoRQNg6ZF5G6RiH83VPzwWUhhf7F",
  "key2": "2PanGdL6pzAf5k1ivZBGrD9Lga2aMqhsNWufoNhcykVKi9e2skmDYxVnchdbrE1VrJGm65xWPn1WXiYKrFA7QioF",
  "key3": "3sXnPGhpG4cDi3CegdvLeYBgPooBCDFnwKoKYVPYzW1RgnPVNuA7GUB9hEuxVXBRqZ8ERCKqzKg3qZdrXMqTtuTN",
  "key4": "5vLG41rnUN7kVzGYZCSWF7nhdak3zVLeYVeJkGLeY6gNbosRSv9ynTL9pUWqJFFP9bD1HxQNWKGNCVx9gcQQYuFb",
  "key5": "WTRvyim9AupSd2Ny8H8bqZrXEFnhAbvFj5PLY71YJbf6NN4rWK7jvbonCmEiJ55Vj2wmHf2B8GcZoufjd9DRiAq",
  "key6": "286qBQi1zUgKfYECBxphoBb4ob45A9htDiyhjxke9M9rQE96it3qykbwTLmkQ27vrjDZUk3521UkdShiDL2ARage",
  "key7": "24cTE5tj61YNTp4MRqdgytPBcQ72m2S362FpqXgt4trvfvvKBEbHPWYBWRtgjsxW29Mp2DEouwVdF1qnadvRjZ6y",
  "key8": "4ym59EWWrsMw6ghv4YfDajwihd9RNbH9Hd2gR2aLVRPsoxSBgThwXGtuGDZjizgboZcDcKxk9ijmFLrYzPJMu7G2",
  "key9": "44qgoF9uAt1oRSwYWo4rMQWk5ozxs3XTVr7eQvBUmkhy4mgZopvthphVpWULWUoaXTamjj4k1jGwrWGZ9kAt4DKu",
  "key10": "2SY4HXasR2MFoXUD43FPwEtYz2pRL4Bnmv5wJeyHwLUkxXub2smepBwzRE69StbQGJuizGFSHSxEuzYYSazCFfRn",
  "key11": "56kyu6R1ACKDQE6JzzU6Q95ZRBgy6GnHJDKsrqu51RiVmPBirHTjjzZU7gjoZLm4Pk8qVsUWqSNHtRvHdnLz6h1q",
  "key12": "4gVmAwzSAz5ANh5USRcYdoF9WvJKfcxtTDRCdasprmSzX98u6xDzvMBuEeoUNuqyP3iRf8t5owknrSS9z3T9ao4g",
  "key13": "2G9FjSf8JxsxFRBhDFDV3aezGT2Fy2BFLv6jhqYBkN8zZ77K6Hej3HwLtJQdq8AsJ17Jx3XYGiJ2GnSTd6SszUBt",
  "key14": "24WDAsoZpdtGEZY8TTouJhhY4kcqwkY3KhrSi78xvHggT2FS4Cf3vDhsboK7vwUpWuwqkmv28Q25axTGMBsKWGB9",
  "key15": "31ppvbCp8gWaqTGLZwUGjRkBDFNzQbYe3eMxyAXjr2NgecZHm7pzExRvFaYDBqS7kNKzjuYv1YFv1gFFviTMYvcc",
  "key16": "4yQ6d55rXg1iVnuq2ebRx4etS3t6YHmvkKRf51uvgQEQAEipba4aMk7ta8gke8GvGWRCVto9wAxCb3or4YF6iRs6",
  "key17": "3jEcncgtmspKruwdQD2dmkUcsQEyv87aGsGjjp2wfUCnTGhx12pn8gf7Zcy58rf3kyZh1FLMAPue3aHruYPnnHoX",
  "key18": "2kFvoi6ARHajkwQJmDgXueRoYwqfwPp4BXPFozWKo5dFt2aSLCmbPiicXpVR4jtnLfJY5By4xWy6WFA1S31wJ7TM",
  "key19": "3hkKzGvgjBJjdk3kmLgwiw4xuCT8pSQmLq2FsQirG3Gv3yKjVEAg2zHwSZQxEWNbDtyJdoWtv4HiDHgxpFVuvwU4",
  "key20": "Na4vvJkRQR9zaaCJgRQ1rLjXS3JhtGNnDpd6gvEDQ448jp8hurBuormnkumNkBn9UKuG9eqEZmjmfdr4f2y68zc",
  "key21": "G2PcW1fQLFsPNirT8UQPBpgK4QsC7y4WBAscMnopqhRZzxpo9AsyxvJaiffqSKgjxxHerknxFs7Zm9EwCJSrBLU",
  "key22": "BHsk3CxarAy8C9iLDursYc5u5xP4DdkBhuu2aDykpMZUsFtqXaMX1bWs6kUqwckmc6v69cw38Da1e83XHRNzuqK",
  "key23": "5hAKQdcieDD6u8RLW81HiSMinADPiRtpFWvNGSBCCps5irjCfbsboWfJQYNoMk2nJhEZDupAwZDvHjo5dwn8YSsS",
  "key24": "4FSiCZCo71vpmMAD5VdLbPrKvF2zC8pMtmCD7brXuqHJbc74ERgRzKa6EsWxhhvLmGos5rx111pMXcRtU3BbBayc",
  "key25": "2uajshwBwa8QnU71v4ghdwzvEQUiJqeyZyCdGUoGZQ1psxeRKMTfUBupq9XCPG7o38bmN6z8Toni8ektLixXKwvi",
  "key26": "3rMyWbukaYzafJ7QqPE1UueQKzHjWYsbVLPVAZ1RCvVKAqzF69uqD4m6VEVveNtPThQUodbjqaBeBLYnJbAZGRKX",
  "key27": "2RPNEkFnsp93ve6tWavGbhNM7fVdCUnKQUKcwUSy6qDgGBeTFDHJsnwT4LU62wcAtf8fCwBXN5FrZrgYq6UgqiEQ",
  "key28": "5pcV61KBoin2jjyUWwohggoyfEKZvVvmXihsrabn4K2YhPGefaLHQ6ZCGk6DqznTvDDsbSojT1t4WYZxhAFr4oT1",
  "key29": "gDVM6qo9Yoj5wESTgCibp1c1LPLMwe6BKWnP1JVaBM3HBTFMFVhbTvKqtWg6ivmAk7CNJCQF6pi8kYDcYh3TV4K",
  "key30": "4fjKKvNRkwAx2grWnt2CfM4yq4ML3moCVFWw4tqu5qDFiP93V6iWNPceEQMczFET4JNAR4YRT4mMmp3zxnPby3pJ",
  "key31": "42nn6fgMg3ezyEfVV9dzmR1YXxbnby9ftKmEc3NLFn2gHs22c2JzJ8mD3vtFYA4kbXhADCYrGJSz7LgLqTaPuaP3",
  "key32": "4U3bAc4vVpYSENG6rF23aT8AZwBx9LSjiWtMjEnjYkKhCQCn3feoYBMv8Q7GiMafcPtewaCFfKj6C9X28md3THTa",
  "key33": "5hm1z8dHaUwoJ4yzPbXhmpppGXGLTJuJmJ3HCVB8UiYGLGdnC2162PqL9nHo3pAFAM58KX8xEGHuBMnyFUB9siLX",
  "key34": "42cSd6aP8d3ueE42ME7rCYeiZx9zkSHcNsUVxJZhN651zFrMcTVuPMX2R5CxmK9yxx3rSgpX5sQwLqCHqXPJDESR",
  "key35": "32Rqa9FJpWmxtJwNZaww5hMDCdZ3aqxjiAhDHuZTHjq4ac1yezwGeVMwKRzXuHHGpWvMDk3hwK1jrJM8Q7JWfjwh",
  "key36": "2Jq1Q6VvZeKdAPC6K5ja5sYNkrVNHLQnabJBtEv52XMWu1wJms7R1xHMBVLcDAXvmNxrBvJiTxsKHpvFQYaQ3qyd",
  "key37": "4gfTYH8WYZHp5eN1QRqKEJFdYpTGiKLqWHcuty7g6AKZhFjjmArzrckUheDRMFE6sXzBtQ7MDKK9MEoYY4j8ing5",
  "key38": "fwjeZTbLRr2AAPs7b48HcGjymdxzDkhe7uhrNBLzmoQkh3QJKyHC8afU2RBNcrNEWSLFLPpZxsNCEMecEoFZ1js",
  "key39": "5GJcBkbYyWz9Dnxo2asnfJmNVNBnkhUmuDPQd1v2cBgeXLQDzFvGCUzyfBWPNKGMdPbrL69FzqrrC4QvHXfJYC6i",
  "key40": "479NN4qnueBRP5pjRjfd3i9xPm1EvWR1DWTLNzTvczzEiV7z66mRq4sJyJ9vz5UjQJSH3kCxP7UsAuTaUNNRYGPg",
  "key41": "3pz8rJmQfWX56hqH1zgZz6S1KbnAAM1S65cZcNvb3RaD8yLrqnGepWPGkDpsJJM5EDscghtXW8Yv5gncJkQtWSpg",
  "key42": "53esWcMQLYiAP1f71EEasBZFC9KfecMxc1Fs1g61prKzVpGxBTw2t3WgV2c1nW6NEMXJLYEMUjRppVd4UnCxUZ4t",
  "key43": "cu4u6dC1qxYAABKkw4B13rhT8GooVbw8MisUCWQEudbEMyvatwxDyGFjMxigsMsE4TWAzLaieRkiZN7D4CSPzMV",
  "key44": "2Xw9ovExKVdz3138Ac5MYB1RQWYisXsfvmcWif32RLjfEmNicsCt5pFLPeer19HvaLTErz4pVDSmYfxog9MycEh4",
  "key45": "5evt3p3eERiqFhFzCqDWeKDE5DWBWYrchtJNMbqKLGsvTN11eeZu7nrneeoukSzsNkJqAbFtYkCLAPjKrkaTqEPn"
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
