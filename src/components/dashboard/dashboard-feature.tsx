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
    "61DG7vBHD1jAmVcuuwcZ79uRG8PQyJwwrbEiURqiL6EqGwxGmPXgPjFwnmdLPnng8MwKP61bQffYdopf15VLugwT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jQZf34cNWqyHrHa6ndFCd5uYyRsPqo9q9QERkcg82DvZupSLAKB1NQ4qYnekw1ZZjGViw4fsZkTfjiyz7Gi8AwD",
  "key1": "58S5jQTk9qxYvuzsUavvEiVce8NHxDbZqfoARUdAymtcrwUy2QfWiW8bFrN1rFST7mHescs1m3QPodS46k4f2Dyz",
  "key2": "5V6RRss9rvKeHu5rcJR8dFreVnWF3xPAihd3jLLnM4jNoFKT1FoibtfoMcMvfp1wZQVZD5Cr4jP7KNeL2vrJeATv",
  "key3": "32tw7uNkFNMtBxx8AvNjzTpb3wFwyCkoBhcJEvLPfKg55fvResfMQTXZkgB16BPZX2MkeZezkvN3XCbaPbybxFvD",
  "key4": "31zaBt8MjxLPrwC8Zg4KxXpYccddCbevoJ57wkZ9aY5mPK44jk3b8nbk1H8kAL81BnNmAngLA5gTS887iMboDdkz",
  "key5": "5rqXZnfNjHT8k9P6Qm3c4MqeK9u4mSQvNMpycUBbEwhqDQ4m1fMY9YvDJ2gM2Gw2tguS9WmkMDatzmiHiDcY1h4g",
  "key6": "3iZbvUsKbSNY9jp4CeHWZY532XVMhC197pGa5MVBzyC49FUVK4bndArpV7hR7DKdx4rESggEx3TGJhXY5evbqrx4",
  "key7": "4F3U6c2RVpqmAkYFvqR1Xcz9A3D4SeY8nZJ5QcKZCMN4PcaAeqf6cxWsn68LRUFfdJznjC4p9nreDMX1YpLDVszw",
  "key8": "59xsXqavYbh4JiDdzfhnMAs9NE8h9CwxhWnyT4HSCMXem7PJHi9qrVZiqp9vcAXQLA72hUdtLFHGm2NdL6nUoFwZ",
  "key9": "388p5R7oNXbLRFd8vSiQDXh6MYaFBGJthTqtBd5A2WguhFVqzZeJbMbjJNQPwsSVAYZq7RrCKRp6t3hwVg5SPMmA",
  "key10": "QhemrAeaL21kJdLDWjSQsgpyc6vGktuBbeEaDxGWdyia5pc44wJqSB364tb4Qgvx9X791mbLSCaQhjweCq17rUR",
  "key11": "KfPQXKzaxwf4YVbifEsvGRZZ4gxDTtH8xPSZDUBrWeM9UzQ3KtabXQPpedo99es3Zqs6WPUUqFjxRS1mWycZaL1",
  "key12": "5X8xw5WaCpnprtLHeKEUS1dVhnuXPPPtT1QmQN2tFTr7DJs8eWQqEV45MywNL6tUB2uV1UxVF6ep51L3ZC4neQ41",
  "key13": "2Thn14RDvvRMWpqpGxmgf9Yb6YhVinQ8x6caeH6SfwFXUDEAXsaDLgrp2Cf5JkaQfDCFoGnvLazyiecdSxr5s3MS",
  "key14": "4LbajGfdEx6H4crFyG7LK4iskhz2aUDRV6RCK1frGeMZ1USCs5LNeXMi1z1BkMbSvj9pBwxwYAzA4mxiD9yYrrv4",
  "key15": "5vHtD66Kw4vWHh5SzRoJbUBmi1AALp4o46apyuwVh9Wf5LHvHhNK5nB2cg7zqpWqUaJ6HRYT1AdDZwyGLBQH6Krv",
  "key16": "29TSnauGojAevWXFZsXQwFQ4xbxr6546fFSfTHNWzpxkGRdX8PdVnZ62HbMqKiXAXyiTnogXpKpaCTGuLiHdDMAY",
  "key17": "dBm11pkn72DzzFfmW5ZLwhLtVHi41fapGMir5z8AxuL4Dqbuamg54FJGixoYCwpWcnVh2JZ4PYvToULFPN8udky",
  "key18": "5ys38GmRZ2tMn4M9r1UuXNPap9RMyGafXw2eDWF5oHLMkbe5e5fW2UXoCZ5Kc5YoDusgQajYabZssJSvZZa3EU2a",
  "key19": "3qG3aCSrt8JbyV1NCV7V4PSXXYMn8CeoYGKGhqxehQprSueLWZWxGsWLnX1rZEmVTVC7B2bopzpk2T4SCNfKcFsf",
  "key20": "auw21EKMy7Z7Lrmxm5g7c58FPHLGkYniCqjYNJrmr8t9nyf1hxhNK3qJLjeV1FqJARYhpDbiR6ed5h9FhF2ec8Q",
  "key21": "9gm7WhvzgLXaXrnHtXjCuygN2AdwhpaXuKUqVmRT79mv1E94MdzndzSFzSyVkkkDqZPcPDtqNpyxvhof8FVr7Tv",
  "key22": "5hca21ePsaGmYXWJbww6fWuEwmmVErYT7rTHxrCydsdrV9chvYgswfGK2XdcmzWUYvt66YNL56LXWrk21yFAPj4f",
  "key23": "5Xn7uh1NZPiuCtuvqUFfiJrpyGP7cYNe4zkWuBZuvDrSNaPFVp7JZZcysuccZqnVnfzbxb4mDUa2CNaBmwT6DsFJ",
  "key24": "4wYHG4w9QTNWVVrYs4uaujdUG3ortHr8eGQ6boPQUfmwmnuJhJocZ7n2fCndFS7NvyHWVFyojjE1DJoVDf5LC26C",
  "key25": "CrYK3birUEy2HwS7tDMFGDZc1Be4XvjUCPdQhPHReCAb5ja2CeftUJ4rnm8NdzikxHXVhwKQVeEe7sZP4KiNQjz",
  "key26": "5yviizV2UrjeqcWkEEm5fPfieix2nKfstU8K9E28dssLZREgaHKmREokLhwZkuk5AsiKcFdYRiUH4pT4mp22KzQh",
  "key27": "3cREBkUGnzi3WyZRAChgJm2DM378VfQjCGYKDwasmd2Hk78VC5BAXEo5rLLweBvsYRuXXyxQsYXEFxNjE4fy4YdU",
  "key28": "P6DzVFP76At1mwX1JwaaCNjWQV11uzZ3amD1tYmy3zjWgKkxgcNkh7QoLjigdF4fK4KqjTx1jzgiUhThPBQiWtm",
  "key29": "2mNTnes5CQSvWCY77MnqGUER3s8Sv9TWMvyPQmqkuNGzuZDe6PnaxvsqxkvDuhb4Hpg5XzahsHkCchsnpPVFJiEC",
  "key30": "4ADYiL4uHb2kh97UFkC2qNAnVAwoSSfkRMhP5NxBMozfk3G2U13cCa6a2y2XRu9oC1sKWufsNB5r6MUsGRgfuhmz",
  "key31": "2NR1Rpi5YnaHiaiG2qUBiZ2uUiPUhtcaMREwYz27rdTT1iPDS6DAwnfbZfqind8dFb1kDLyEDLQg3pqozCywND5f",
  "key32": "2zmuUsdJwhJWNaHBu9Fu2KRt4FDsPrjbm9c8cErBdQLS4ovCumBoyx7vQtetHy99qxFDqTp8BtRNBuRG1gWs3zgg",
  "key33": "r5UZD8A7523mcRnpmD5HbaBkEtKS2h3RGBS1eT25dJz8eUhJwDEPNC8onJdmwxEzjXd423YaYmUaecemtRkQmJf",
  "key34": "4DvMcbechsPRjt8QJE4jLoRzCWNNkWJmfUktPL5VpkHoWNEy8D6AP9r5QrKS7wHQtgseyJzG7XGsmcujvZ2H7i3L",
  "key35": "5WrTNRw5WiFzZnszLrkcg5nTD35gCZf9qwDDieB1Bk18D87MmgvPbqYyodhM2cxewEUw6YD8T8ag9Bsm4AiKvsjU",
  "key36": "2PzX336fZGc7nokTvjYBhtrsqKPZUK1yNrj119EGgCi1SeLuPuaMZAfkH4BnTDuiB6fcssKR176X4PFYbeFESh9H",
  "key37": "27Pcwq5LfBgmevfxYvTZz31dk9A3aLUZ7CVmphysJDNQJnu2AUCeUysL4NcCDBM7B6NN8KfUfRBU4vHb1k1JSr7e",
  "key38": "wqsmtUkbrkW1enntWTBBoD8WfZh8rTZ7ZhWWUwVGz2GGaiCUc8rWJSXq6TiJnPJ5b7sNUc2SjfaUEMcTXJyUbcs",
  "key39": "4AExDRRcYxAiaR8anRq6MMTNQDgsA8o1vQRkLbDkjMFaM76cmpqP1jFfZhnVcAjggWHB69UNnKqm8dWwkK4Nj14y",
  "key40": "684244f8dVRBC2fdWVkMXDuq92B1n2dfQWkZArjtZCQ6L1ujDWXXQdWSWj3dZKVeqNKvH2L5tphnkiPHYedz7d4",
  "key41": "5RsAtKTxQUza2X2nftwznDSntEVh44RSmyepyEifhLh4ehm4kAcGF1WgbP5sojfGXA5ZjFUqD9XtPGts4c2MjTv7",
  "key42": "3iomAisu9i6aDY5kP8cg9yw6xLPZNVmt2FQjd4HXRagbpTfZMyAUiXz1iXu252SVDsLWmMwcPk2q51JtkdcZT4uf",
  "key43": "4M94A599HP5GcmLbpFqw7kUaMUpGsz7DqJydW5MtyWFLvYVhJPWkFfruQ4CsgHNNNTJ9WUv8ksbMfoptJ9Bjc5vY",
  "key44": "4mhc8HWtMNxCMeWNMqgLXLBXjXwHAqMH88v8jQRJHPQUhiYuGQ6BqvuDhWfERYUi4GbhhstFHMA6Xx2t7WqxtoqC",
  "key45": "2sEbVdW4wZnkP5d5cCMv5Abd51LvvjVFnZ2vAWWQ6Ta8qqxynC189QQ5fxi1xxTKDfWGx1EuV1ZEA3tAgT7bYknB",
  "key46": "3G1QyPJaqqyGZXp3eqXLiQSDW6xxDgXdkKvuwXcGRnG4vahHayxgkLUVYu32Dj6eumSkJoUmXioiArkphRSU7TUC"
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
