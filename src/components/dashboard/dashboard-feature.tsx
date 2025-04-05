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
    "88KhfX26SuGSrPQizwa18TGbUkNKpqJSkkj4URX3xKsqSWegSowmZRUDfzQEUp3B4uQpk15bvn3xffbKetQ3869"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NaDtrkS52bxh1dhxwmQzfwZoJMNNMP349dBaqLprDmKERTnUwpF8XQ4DzbDD3Ayx88bX7VAREmTeuAexoMgHHfQ",
  "key1": "4iGu2iBzdVVa36VTUDZbCDczkygUDVWRFhUcqpSNtNQT22TJWWBxwHhpT9n3s9vuZyoEpByxVJBn7MyZDzKY4qhE",
  "key2": "MKXud4tXxufLtTLpWyrHaGMBw8DXHxiXc4eFKRLu5QgkZmqouG9WJPJa5S91uitctErXeBZnPHNnTme5VHJraro",
  "key3": "4kfPrnXPKvqz1behv6dUPkoBxubybbknTQRdjMv68ukduYhkuYfP1EcF5wo3mDdfbP2fUz643Kv82RySz14sGXN5",
  "key4": "5qk9kDJsYUi7uAudsbTHQsMvccupXDu8Xopq6Y5vuhAK5LdA6YY3GGzaSxwi77KHxrNdAWTyaXaZ394wsuRYRBJD",
  "key5": "34jnrmc37CyqPPjqf2Xim8fk12t6H5QfChXsVxWqXfiQovpdcdLFWzW2CoRQfURKVAc4mcqqwtVUAyiTWdkzmn2Q",
  "key6": "5p6G9pqFnYrYVSHiLRyrfnsdVBL6adEudJXNmZSwEvj2K9s823UDK3E6m3GxY1nwfZek4WgfjcHGuL8fabkeYDie",
  "key7": "52H7TsYsUJWmB92cPzkkJB4RC6ECpiyaKSBXeqtodDDrnSfEpQqadoKtfKppKCAmhXAcgyLZiKEiTS84j7VREzEL",
  "key8": "4Qp3CRE22yRtS7FnPHUNaMnzd9vh4Bq4odEMroFpRjSkBwrqX2infKNxWybUa5ZvHyr9F33SMykeQfGEisxsHYha",
  "key9": "3hyjEfT9AArH1XJfcJCSiXd7bDk477eMZNuQzGB8oTNQKyxXH7gzhuete3c1G4iGRLpmnEafJLDtikgikBHxAa9T",
  "key10": "3s8WtKXeZQcSKHRQJQqZwpWtSdhoYBMu5LH82ZwzmUXvW7FztSQat6U7nVqqXAQ4jVmGgzPZoag99Dpa5PEqJVKb",
  "key11": "3nnuSCifhqPRcossMhZuAdMuGhnp3pyYnofTicDrraFqqk7eri8t18iJ71BuXtayphh2Dgb64mam7bB6YPpt9vAz",
  "key12": "5Te1nvUhohJhpnxi92kZyZQeDuNEYgFft35rsfLvZYGhBDanJEUiNUFGQu9utnEMMmcMZhpEGAHGjQ8aMvQYC4HV",
  "key13": "3d2VM2YD8kPGbTxT65QvTTcvrsjF8YJACQ4maGXszbb7fKnp1fvuYXsfvbqCoqjUE17eYSahAkUcPwc5tdNud7iD",
  "key14": "2SFmP9KV3X8E3fQA1uTcXpphfc47qrW2YR9dqNtyasxzuYnEnpH39s3AnjyWZoGs5bqvxbVs2v9DFWWTj3DBdjBZ",
  "key15": "LS4kMdhhzn8GLMmthGHobE8dyLGUdpZJ8d9x1gatobf9S7cUJ3mY4wPkXYTd3rxD2Bsn1JdRSDH8zT3jhHRnK2g",
  "key16": "5mwyNSCREvbsmCG9ozBn3WWSTgN4spVAutaCYQXbYJjVEzG8TVxFLfFdmFr3eeppx6PmG1RHdLQa5hM3ivueqYXa",
  "key17": "5frT2YpRFz8X7YREjN37ZT7CwZwmDnnxTGRtDgtHHsL8DHRYu1R2MxC4RDQxMqJp7ygbQ5TW7ajt3fMR2tRnyj8C",
  "key18": "5J2xa31W3Z95hDzZQ8vu1GuupuFQjCszv5XcRFwpXVxMnk45UNDb3DNcvsNgpkeZwdBj7Q8KWq6DmKPrm3i9m3zD",
  "key19": "33UUnKHczfXc39FRRRogodjgkjMiZHMe1m5C3qJp5EquWuVz64iHkiepHRw6AyZWxGRVx6eCNwg7yi4wGcucgbV2",
  "key20": "42dhktPJ4Rfhuhz6pmQpYP2aMP8znqRBvjFPXvAruhPkPxB3Gp2rEtzyXHFfeaXdKfHjAAY2Ze3iricsrw22e1Kq",
  "key21": "3aFtPeJa8qZWRq9PhrMX9622wDjy3aynnYGTAghox4S2NeANJPHoyzVBPYzmo9MFnNPRQ3jAphU1wGT6AimqbKAx",
  "key22": "55uEUTb1scrsbvM8C5GLhFZaUvYFeXtp35sa1TfrTgzxhQT9vVyQq7dMrMQurVQaLL8gz5zqyRPXNmVMQv5HAKTr",
  "key23": "55vwwc2aYj2EcYRaMfXhvipRxwLxHyrjzZjvRjY7FD3jzMP2PvrfFFBYVmGX9rm9b3iz8U5qjqRTrZQAncZgLwLa",
  "key24": "47CGwPouDBTgdLACXhyM8PtS9Wp9eDBCWFsbk1tLsYareSgcyaL3TdxkZCveck27NQuCLth3BSmkD5LPD113fwva",
  "key25": "2WnMA19uXAKfHMCdfbRrX6onu6N9ezYXgiyeBYA9vGKviJ5Qr7MYBHsTUV83HFLwvab4pYzgjZv1bkb6vZLDfgin",
  "key26": "29BVL8Dhm4mjRUAH6ee8G9wDQqu7aBUmMbsvR4AmWzhsNsCDezswNtbebFkzYBPs3fEz3rDQVnRU1aZVAS8qZ3hb",
  "key27": "3em7wu5H9BhjfMshvnaxc2f9TxKis8Mjp2mrXn2DwsAMVt6XxyaktuZVVGSEJaxkxqkFBe2swB2cusCms66ZH35h",
  "key28": "38RF64tpJxHp5vQ3mbt4NQBHCYovaAtKGYiT7VhKSJpDGScEC3fFiUpos9d85r4tjk9AFQBdyiTa2bZLepisiwbn",
  "key29": "23xkxkJ4q36iJ8iv54Z1Q5zKTCzDEszNduwEwj17iyiwaTrS77B41vbq4edgsGBaC9MckQMtkLcDj6taCWG5ruMr",
  "key30": "2UXqMw59pwSCAD1h8HkMp6muoX2HqseTkReJsgmkUQGsCk4K41Tn9dPzgUSNtbMP7mzhHFqDHCEAhqw3pS3JojAK",
  "key31": "3jKGidCgGj722pAAkwWjtkUruPvuyKhiWajeVj2EkGfdTL5pgcynfxb1uBRS6Lfqm3UVHvyzPxihNEsKbUFVoZVv",
  "key32": "55qryuTU2BmR5WQKhSM7QvR8jWznfANjL8wigcVLfM2KjRDQgJ1XE8LhFn3S7ys3ktd7s2bkuxKLFhEmXfErsGiG",
  "key33": "Yev1FZNjUX724cbEs75WgcsZKAXPErmpdCN9SN9iyZkfFVJBxobmcR7iiJh85Bb57PDJChuyc7fH8o4MzKxZiEp",
  "key34": "shKixJzGoop49obq6YJfYojq7F3dyMnNWGN4JKCKaPWvRT8uFDXEVKgnA8zYEvWwperDnu3KZqiS5kpqoK4tGt5",
  "key35": "4dTVHZkzLLPqTXsjrPu2omdwVuHPnMq141hK5EFdNW1GicPkHdKuhaLjyo6bwBBManHpCPSqUAspoNjD8gdb15Nt",
  "key36": "2ejhhLRPJcBvnwMrqi1W8pdmncd5tLmMsRynQYmJPjwANuDXhjMN4yZ6h2VKVP9Av9GZGyg5rTrnbRWrzowveD2r",
  "key37": "61gT19viNr1bSxrxqjvzgWJsrSdvQiphRd7HuGxLPiYRFq6ckvLG68VCStPyepX2ZPWht6z4M5xJHr1osY4phb7T",
  "key38": "3yU5qSSLAbN5TtNnuaR3qFKZd9VU8QNzaPLuQBDj584FDLMG5sCooahFZoRpQeLRoeQyFz12sgry7FaUcWiANap3",
  "key39": "4N1YPWR5NLzgCdNbmX9rco3XZBzqRS6iLbARWpMamH9dcTSdfcLS3AtqruBZ3G42iqLP61oFznHSERx7o2fhyCja",
  "key40": "5WLvzuQ4VFK5kgHjuSBpY2KGd9qRycR1gn74KSTK5yGxCbE74PkBSu7y1pametbaXGqnm7izdVQu54rxnsMhmEUX",
  "key41": "2C3C14p942fx3u4ocYrAYRZcSRgPxGAZe5ynbLrsFr33x7dLDq4h63dJMEXacZhPLgta9DLwHMMPgHykTrPHfmQE",
  "key42": "kgMEWABYhMn6PX2T65gzaopUgeG63iZQJN1XxbRTkvbUSLKwkCPtxmdgfVjW6FUb6xaHTB8SySRoFffto3vweBw",
  "key43": "65KxAp2Up81gsvMPC5q1kRNVu1PGswFr1iCYMJoLHciebo6ER7nin8PLw5CkNWEFztyv3A9mFHxk8y7eMk5jwCi2",
  "key44": "5QF2BVpzMDSa8nuKUoK6uXaqiT8z75i9GvPfUztj2JCUtaq3xxXtMZY6BhbiNs9i2yKSGW2QdK8GC2WmsdYejBaw",
  "key45": "3XYsDX6uQCS9VYDLHLszdi8AxoaWUNwjnfEghY5QsVHX1W1xQtT9mfzUCAsGXKKJL6bzC2w4fr8GpuqFhooCzK3n",
  "key46": "5RV3sQ82xyytNHWxpkpwEiMAY5kF2YJHydVTs9r6CqSp3bMaVxRF5z2cAf2QDM9kwEEdYpnJZCs4EJnF7fMqf6Qn"
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
