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
    "232L8yuQqXjzjPEioRd1CoxCRkZJYXEtEK73kfT2D63dexZRsJcEX7HppssJDQAgkYmD4PQmCkPbS4d36Ex6Y68q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zesHetScjP555VLC1moWpHy2J7tpdZvEyiMpFZaf3g4M7n39AADpfKfNFKPmVC5J4zSHC5qR9wsevpqzxrcQ1HR",
  "key1": "4jxALXPW5bbU89SiDyuLmsKZPNYU11jZAQqoYx4WW9XPKdBM11N6PbwZBSnXrgYcu4mWScpSMYdFe6CuZ9M7xXxm",
  "key2": "4NvHSPMD77EA7oeAfLFtPo999W9fbAcKzbzfUN836zVsUe1FGAG1cbsd6eBbmcwDAsiy5Dyi8oJfmgnUqwPWvkaG",
  "key3": "3qYidEYz26ajmGN4zxG8BzSai2rgErkjQPomJuux1B1SWuD6cyjkcSoMT6soFdvGxqqdUttBeoUnfhgRFqHa2FrY",
  "key4": "4yD2r8hk9sUsFg1WE9AxAekGMky7YjPT4jtKMhfYHkhcSKpUC3CkSAmSstTn4t4uTxffejefTmvZncKddHHUrn1f",
  "key5": "4Y5FFVkD2nigaqXvGHXghY8LLkYa2N9aogvn8bk8onzwdvvi5or7GkhZ7h5pSo4LeUZptKFacNc8cgLZNA4T7Fke",
  "key6": "4C2bqcTJXuqTqABu7M65HXajyRkSukJ5zWShdYfqFy4tfr5xVyYRFfWGQmV8FqQ5GbphHvvDrXNyvotGhtf1kjAh",
  "key7": "4H6iNAfR4942LWzg22V7h8no15YNbSRmsLuEscRzHyKmKNxMK5FK7WmTEjSenvuibhEuw57JAkBp8rVqnSGyGboQ",
  "key8": "QGA8wp1ZWP6YV9zNN9QpoXzkrA4UgC5xEYBcVZfp8goMfR4QezztxrHAAAijmmbuiy4ouLCDdCR1d486wRu1Jfw",
  "key9": "2rXFDoVYEsvLQxizYxsfkFvSe9cLh47q7LRbUmQqVBvJVmNmzffHw5A6AUXWwTkRSEDjQFcYE8Su7sH97czA4cuo",
  "key10": "FAxfpnFoXp9v4cjXvyNk8Pjcd1pHA8hAxX5WRPT1xxkkYYH5c4d3uMuezp33DNtijSWEdZoo5Buq4qbKoz1MKpv",
  "key11": "3htgJGJWu1bKJx3xL4B7VZ3GT3BdBmFmcBtA8p6AatXXCZcxkoZshQ2ufq6XrvXpmsM9WGaJdRZoGizABQNT9DuJ",
  "key12": "414H515WLsrQEUSRuJtV5KfYrxQsrVnaw2pj9dwcZjLfVraCuoeA2WjuzZuYWennHfEUVPjTXPuc5m7Ft73Dtayd",
  "key13": "5244XvEvcRDoK4cnGwDrBRjsC2auZe3KEBS86ZYpLmsDnxSUYunHbPn9PEBJiVAAsuQZ6sDeW7ALFT4WkUGzdddY",
  "key14": "4KiuJ2gzCBFpmJHuq4TmjTZt4np87Mu59RXhoHDToNFaxuz8j8N1XkMuD1NUhKhrv5sqros4oHuSfeUCWz3p39wb",
  "key15": "4QKYpbH2SKDC8S1wTxz7CLWnku4HK5vmS5C2NwLCyfyAodkFme9gtx8zqGK2aVARMBi1SFTw2qcLJAbK3zpNm1LB",
  "key16": "2MihxeC8d8BXcoEJSfDctz4d9wo4gHBMxyKLuHzxbT4g3nhypXuhe56KNnDprevgxQSZSkSUmpLdBKn4aeUYWkp6",
  "key17": "4gUkcKwmtqwcTDn8vbrHeV44WRRLFCeFF6sFG2dswLGrLpVezXCURGNUcX5X5kjpR6gBzH371wF6phn7jGnee9rp",
  "key18": "4Bxqg1wPxitusJPT31vMBgscuFMe2SGeZquRUkBBT3veVhv7MyznUBjA9SUtR9jk3J3xA6f5VVbSaG8LxYyRejMz",
  "key19": "5nC3Hv6AjLMRjEZqkvyJjJh8KChEwiGV8UxQKcktNhopUNWo8EsL8Tn4oHoT2mBrtDUHBnLFhSBKscKfQR8p4AcS",
  "key20": "2xRfqcs7tEH7m62Y1bFZuoB8HNxR5QBp5gpTM2TnUu4g3w3Dsu2Gf7D3abzn5UiHe51w53whiDffB54kghQ3xZc7",
  "key21": "3W9PcZLNF41cnpSSputZNdbijpZHHxfBY716eNGdC6cxLXos8UWhMxzQXStJUtiCvtpkRxWhwsFuri8epqjDbAup",
  "key22": "3eE3oNQxMW7TaLkhNfb4kunVbhmqst1sCvjCDqXYG5xU1X5ugtzza8VwejddPBPrtd3j83vppSrQqDfBAchNNAVw",
  "key23": "3AhnatsjasDNuSDT3V4BNQU4pynEKM9wS1wE2pGUG8FYqusMYjiy3ZNK8PkbvXp7vjdhQFaput3ZVMDRUJH3gxXJ",
  "key24": "5QqRadvm3w7PBKn2wat5uCMSeD9zxDbneNiYrq5T8sj4ECWJ1VgjdmNkk8VQuXNAcoKJQ7oPp35AexKXdWsGvJvV",
  "key25": "pSNyncnQMhx29UPRZXMKTP22aQ9DkFJw1WZgJRjZGz1vu7HWUPEdJB8SuujsBcx3p928yqUByDH48QQxnnnmKJN",
  "key26": "qn6pmdEHAq3UKUx8QNJkKcqwEZ3mjMFc3NqHsiECf8B1gZ1A4DgUhDqijWc3E18btXfVHqUzBqdrr3WVnVphWZC",
  "key27": "NKmfy2fEwCSsXXCmMPCQwxBp3qeU7BhAewx3Waw1YcHTSJjfVVJWH5S7ifkofi83ASSBwS7aWdTehHRe5PznA6b",
  "key28": "28BS45aCuRn5Pg2hiktCFzifjshP3rW8Mt4oW8sqfdPDGDV1j1634LBShcyyQJ8jR1SAWxDSkTyGgYdebuu3UYPh",
  "key29": "42mDedn19z4Ax6Wm2n52o5xoaxJ5U8z1ddLFRg1gajcsSep7oHsm8ofvA8s2JRYpHok44nnkpactFvB7ATQFTkyP",
  "key30": "4Shng9aaagd4rDCJW2LLrPmTVUqh8DYkJ17AmoU7dQkwRXniCXt2gNpyjm4uBFbRcVK9erWA8EXmvpV2e3jNziD2",
  "key31": "2Pf9dcEwo21WHMfMKF6PExZM4Szp5R5BNVwwBUZVzmqUikRtR5jEUJPFkjMW7tBJyWQ3sFkV5qU5AwyAoDz2JjSa",
  "key32": "LaA9uxw6Rv7dEBK9FE4ugttXLDUQrEEzxSomdGTK14r26mnSv8SaMqPDx1Q7CaFPRNW3QB95CjEgooZhDh2WyCZ",
  "key33": "5EUoRXFbFqYv3WgZMLU9q69cRaLH1QeC5BYnePy7xzpMvqJYujnTCNChaP6Wf2FEcV3JQX4GFb96JBDXiFxwPS8t",
  "key34": "4rHwr3DC4XKZZuWK66kEFjFPqC1uhpYALueFYJ1VfWupaVSA9mK6C6BXwByj6fgDJpM8o2QHAJ6zn8cGWse6vBUs",
  "key35": "A6BzoPP1RVdVooP42y8omK1KpaNitcFWayWwepEn11FDQWqgygFKaKEXodqPfAo7zdEcerLs1VUxSauE8ntLGio",
  "key36": "21cgAtQXezodR5Yk95BFL1JxjgPFyCXqWY6R9VFvoKu9Ndp67xm8vD4tbon9R1YrcGckNfV4E2vKYjxp5YabDny5",
  "key37": "MfnhJZDhXx6CNZN7T5EAHuZKjDj5NqNRB1cBTjH3aFFhdSe7AqwFWUqki5hMtX7G3rwN8tSMcrEFknXSio15Nta",
  "key38": "5uJ4whJwNmMMVgEem4JnMBnnBGE8idid9hFdZMCtDiFvsFZndcJfkYUFkGQPccZ6CL51R3eMxgY1DRUwj2bDVtxY",
  "key39": "4ePFfMu77y7csNviizCy3JrRUqtMzqiZxDXX1zsrsheFwceZ9hve4RzdexPNoiR4gPhGVDZYMc3HUFwr4Ye6A1ik",
  "key40": "42AN5BbbapGwPVMkyXrj9HGsFaPYKQjECCny9WxPLEP3wiriwTtsmKPGRsjCA11zuARbsvNygcKkF6wNdMPP7KMk",
  "key41": "5fwiAws6vxGeu5fNXHLD1Qftw37SuiEzNAhgd7joJkf5AAVpeUdnJZdGfvMMzMDHgPpt2GiYvzFu1Tvga4388aYA",
  "key42": "56d9ovGSwtmreedJJjHQZKB4YVXwYgwBT4cU8RNYnXeiAtDUuAFY52fsnTK5X9SXELwhr5FPiYCx9dgmn5jHVS79",
  "key43": "2XYTWUcfqpBhQTzCpn8sfsVDv2psoW3KXpkLDpMzzjqkjviTgLv895PHBa1BLYmG9GLH7BNi7u3KB3k7uwd1zM2Z"
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
