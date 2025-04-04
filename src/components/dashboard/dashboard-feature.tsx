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
    "4x9afBxNV6GRXQrUtEcJA4SCzGSGNXSxhvMuMtoKm5u8dpP2ixqh9gA8D9hprEjTeovhqPsWbAaRWEjwT54QR2RE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x6Pbt4PNYePwJKEATn16nLknxiuLWG4bVH79vBT6EqnxVbtXCEctnCJz1gtLi4obMWkfqmWmPrAZPv1ZWgZUBpr",
  "key1": "5L6uxfTPEyYNLAG4hqz2fg4eWMbKFkRwsKwMrdx7NtT3x5ugrmKDcvKFL1PyuLJsBqrpRHavoBCTtvpJEMCnUUQa",
  "key2": "5be3kxa8orTH7CvFcsbJu6dGNw1m5dqwXxzJzeEegdcYHBdgyhQSRLPtjNnu56vymCeC2xB6JbaAq1xUzNNs5Hru",
  "key3": "GmKEAzA3ro6teBZgD19T1ssVKVdCfkozFeKYjt3XGoPRbqmXhCa2B5JaPJ2iHswEbkvibtgQ4KJxN1f58FWFb8Y",
  "key4": "EZmdcyQc9zUXhHcKxA2H4NEvVCNeHQ1PF1mRNGh1zC1qytf5z15uWoGqAmzbfQqq4vHQMyx5vxw3ANPgDZUZU8n",
  "key5": "2NMXiomhjmFsad84FUYab9SHQzL1RrghuNo3YGkVwAg4u8teZw68Fq3D6vWVdp7CMkqxtWQRJPsgbcenzciuPPDw",
  "key6": "2KgidVnxCzK7DL2aj9fSZSQ29sY1uyCpds6tnZmRYCxX55AhqEhL4S1zUF8cGiqsjraAyBDoVUxa5zqY9HrUtraf",
  "key7": "4V5TmLpQi6hDntvQjQvihmzJbewD9BiFjhhYBL1oDvE5XiA1QCJFQXVv5VeaLfDmCSc4Kpe2miknjAHFG85u6P9m",
  "key8": "3mjhzGPJS1Z1fcg4qwZXMHrxs5wo6qTpaW2mu2xMCo2o2RsHAp45YczEaU2CvYLoTWBNQ1T26WWGjcvfzqqusyjL",
  "key9": "2YnVViq9dg9em3k8H3AmNcLCSDssFFE4LFZdmyiQKV5hobWkS11KdVxSQG2qGLf1nxaJKw2PvkTzHu2xXdYGgq4c",
  "key10": "3CoR9MGTduPkzTAimxmGytyFaeqiVWEngBRKBKWGSMmzadGSufDMmfoKAtYVfPnD99BoTC3MkrEpLgjNsdyD9XMg",
  "key11": "5PER9KskBx7GCxtYTMUuUP1FeVZSotdCCxkWNX6BRLxg9vVEAS5vJN3yfKjnWpECHQDzER7Ab2MvAL43HfyRLr6z",
  "key12": "2iXDsTpLrsgbs7Tb8LRTQqNVf5eq9orWJvF1X6Mx1ihppLttGx46rAz1pkcvE1rNDDHEmduNESG4XYguRBoZMGvx",
  "key13": "2BnGnFo5ySRKo9kxx6Hx7t6cp2eUpvhn4kuFAHgidvXYVJdfJC7zyKMuhn5st1etqDnFGstm6FrdWnUbVNNwcxDE",
  "key14": "3ys9F6w2NdFADgSDQUnTyxC25w99wxW23eCaXXrXGgDGbyDJV5ZiPuF1JXtpXivczAB6ULxgH6GQRr5EsHEafzYr",
  "key15": "5YrgFaxCHeiwsQXgs6rC9XXx74ULv6oiBnrPvjTwf8X2whBept8zw9x2sczHrADYdMFGRXbAQJP3X4ZGjpvh9nAA",
  "key16": "3kQMzVvRdSaHX5we2DMpCYR3d77UxLQFLKKq9eUdjrytLzBvdoWRSm6W5zcrTk7a96sqwjabfqrKZot3opHnWVUi",
  "key17": "44rzvnZ2FHb1vL3Gwp48SP5uP5XabdsTpaYNj9jEE2Rf7oPJdSBfiJ47WWk3YN1Z6ubBgHZHepQvCjg5j6z5EMbU",
  "key18": "jRuDJarGMUsBjHSUGNHZfFH6syGkJJZVd43Sh47CKztV13ocaubCXqPXTYBGGwwGRvxxAZ6LEDnbzrvpxt4Brba",
  "key19": "4RScPuUBTm5vV9YTo73zpF1MAFzE9YtrDjgr2xFjRnmo958eL2GmJXzEBgP2oQWHcUoJLw7BzXtqyyAjhxnbcZja",
  "key20": "5wHKg1EULT4G4vnK6drsgnQRRp87kqAVxnS35kcXgwmFKc5dCwdFvR2bFN2wji9KCeHxKNnoSKCbxgMGZCfFpQJV",
  "key21": "4SvDnXEcdsEP76RUvxmfd1YiYxpaWLEiCofG2AbCeqfCJ2cYvpapnznQ58FNrc8noAEP6cqRnP9iG48EFnopWhVS",
  "key22": "2jsriuccLB9nagWsCyiKvuceb1DpNSjHxdoBtWVmWwzA7GMvGC3LtpPiopXF9SkKmkB787Wyrb3t4jtyiQA6sywa",
  "key23": "3aEM2G4F9Hb5dgFjqdtj7JQg1FLB3GjGBcLh2Ma5eJi2pQ1UQ3JcqVC4hACwNMPthRFshvCcpv47jQmNoFSCgiFd",
  "key24": "jhZxnx7HL8GxmN9PdcUvxrhkvmBAydVMsQ3WETe1myHaMXpGYVX3SdrJpnBeuR22JaPwzBpTiFZXMMB2DkbCDaS",
  "key25": "3AdSpagzzdcRwLk5xhpKkFWDnwB8yiV7R5sjRWvLmrGzQnffeKdQbKV2Uo1gfQ7s1P1EBQNr2sBTD3dEacrZozTj",
  "key26": "2m8AgLiewgk1f85oEoL3TQLynyswBXB2cPL52g4agyr3MuCq5aLmf8nM66fkPGqeykw5TwqPWK6nqAE1h9cS438R",
  "key27": "4Pymxu9xXzmn17v4dvd36FhbKikBvuffdLF4wcZi7WEA5GEhFsFNbCcdB4UdD1Xc53EL5SGRKwBe13cmn3aeQQ9p",
  "key28": "3jKVgLQ9LpSdTbzA9awsEPNxPq4AagvJm6aMytCSKjKScLkh5qLspEqbLYhxv3G9DkpikwJ53JRpohfDGEN1eR62",
  "key29": "2KmXmePgHtStmtnrJnJsa4PVjhbWdgT5rgReNTgzBPVRomJjZ6PBhh2YbZeEDbzL7pxhCWJEdR4sL7GYgdYd2vh3",
  "key30": "5i6HGcTam2ro8MoHoF9EyBT9E1NR6enoxTgk3YEeCdCmutDPB8k44AL8AeW4eXQQa8WM2Dx8wBHwziRtSQFaJxTx",
  "key31": "2kRMkaeqRBaQGq89GSPePbP2ZE6QxskhZjvFrFt7FrfBeZBZB3gKYkEAmGjjbwhk6j9QKoWFVees7TZEecskzwYX",
  "key32": "4P8YNAaLp1vid2ASawyf8WSnUvqcxRykSDZbjmgzSbW9qxaw8CPTQyTcG6PZrPyQb2Spfha2KMjqpz5oovEwmiE9",
  "key33": "4cporhm4MGFH8VjN5aZiQz3zbJfFQoTk7aqZuTvR6LjqnvT3Ag5oR3vqWsn58aVqPyGMZNWEdKmwwuBLaZsu68fS",
  "key34": "oUgjg6oy52Bd18AJJqcq3FsjhQC7dYJmyrNSVTh8ofQ7i5KYJwvMVMAYBBiCzgyy5WHwGWwZ76RXVNydYGFEW17",
  "key35": "4921y5tJcBxATg5526VyKRxvyDcjE7D9EgyLckGdc2sbHc8RRTwzy3fm8rhrWyWpCxh4Mz8Bqa2ret42ZJknK7e6",
  "key36": "5wY22wA47qYeefPeNFbaYeYy9wNUGbfuqHui6p1CxYNkEaDDgt27o3NReaVbYTFyjsDBocmed15zFnJaZRQyeNf9",
  "key37": "57VWyFTrKQvjQg3SU6KrnX4FqYcMJchzJmrxAHvcLDj5A8CXMcFkhS98s5odatV8Pfo3UbQPhQenwsoaD8XP3Cgk",
  "key38": "2cuCBa5DXbTKWctZZ6jT9jskDFmbK9r17Tr5YfLB73SHca4FyWsNj2ZtJWS6Gn6p3bQuWxWZeWXBiK7DaeidztUW",
  "key39": "5hpXEFqgmpR3mvojbYKJ3YXRoWxXAHrcnytBnZP42L4RV5KQVoYs6ktjgmYRNPLuv2GB14DQMpN2Rhb2rbgJC3Bt",
  "key40": "4VwFv1n5yfrzAoK3tQ87otgNc79cECaA8fop2BW1stFeXy4P92eVv7jeFWL5nZoE9WuHQj5SosiiupjtPRg79dTG",
  "key41": "2JKfPRXsf7MQ13syjzaEHZ2Xbwj6RZDrgSc1R7KMniZTXA9jfPudrhUerhXeAdXeeiXutjvuzvLkarfHM3GNTRx5",
  "key42": "4czFAZJNYK9LWit8die9SQxBw28dikqf1hAMzduVRqTB4C4QMQFZH6Nqm4mg7vCQPRk2GLtGRa1TjYnEFLT75VJQ",
  "key43": "5qwHXx3cD8PGdmRtLaX1CtxNhgvJwdEGNS4Y8uZWdSchy3RZSfWm3CZa3c8xF3LwKkc93qFSGhSo43pVBqkKNXKF",
  "key44": "feTg6XhsrKGv1WVC52azQrxia7VUqYsL5vcMarxcbFhg4t3sf4EqHxngn3MHdJgCXHFvygo48SnT4v3dbRZtuJd",
  "key45": "4rFeBFwfUzgngeCVs4tbi8SMeZyPcG3d1r9nBjDeUPsugAYr7PE1i7TBZ184LYAJoufcgu3SWfSt193Z83Xzgs6",
  "key46": "3MKkVz6JHSCR3TYbZEZCERSPo4mco6tiqztZg4FBtBCCz96dY8qUqoTpM8K9c2T43SuSV75pibfQ1brZHTzKNUUt",
  "key47": "4utZD8nMVFYZNGH77KLQZ9xjWS1DG27UTngTK3cE9WL89hCqXB6h4QMZx5CUrRtLXoLKd6Jz7SUMYcRukxbPxqbK",
  "key48": "yTkJs9oifnBZ2N3wzAW9yD9HJfWmU5McMqXafwiPu9vAoorD99cEnpTd7o1Q3XUrxDzDErPpsEtDNEaM148oNJt"
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
