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
    "2ax1iT3UPXwEyNsq2mgYCCEwPms3W6ABiaXESwWVjbSeC7VyuWcGyLph4uyh2M2zGamfvFKQETZzYnoGe6eYkYJS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XJQtbBcREykREcuzHnmrYXMo1NXQgqzgjCNVZdWubcZ9RmsnmPpCFGJyRxyp4Y3TbzQBsS2DuxidZQrjYGWrEAN",
  "key1": "33n45pgWmeLj1xKZ2CKTQD12zpxiJHcpy4TwzJKUxsFR4LDrV4bLAp3TrAYxYgQjajMtntE23nxmVGxVi8fUiWEB",
  "key2": "yvN6GXyT1tpnWLmySJVDQmdNyssA3KYHFAfUdLphhTurnX3jbVgreN176J2FbLQ6rxydPSwi3LYWxhEiC4VDbzb",
  "key3": "bs14hGMgDSZPWKGH4vgZLB8FNUFbUhFPYnZV81JtoqRrKNy2xZNCJWEepqgGoNhu5U27hUtE1HiZ7v4tfzBe6nT",
  "key4": "2LT7ktUFrwPUkj39uSpwKZr745p1Ru5ak3m9LJxXR3QSfdsqSwtxhhJGj5mEyx3nzgLcivfUtf7RnT9EToxD6ba1",
  "key5": "4u4DXVzyrvNMgPyLDaKB92yqhwJVg647PWvfrSL6aBxp8EdvDczxEPU8da9DM2ttFEZ5gvofRB3BjsFpbgNcfpsy",
  "key6": "5QKeQF3Snta4yW9rzEkuoUTRo28qhEPYZ4GsLZ7kv5DHf7ddCtXLxaLm6EcERK9BVmpwAtGRuFkJFR9zi1zHhatQ",
  "key7": "4rG8QmvQC2FrnCuJ91AV9KMZykCbihCkJ5XQJewmiXjHN4zYeXa76xDFWGiNDTrwRg95p6zzYyw8EZfj7es6GrDE",
  "key8": "2Mew2zfRdLpJgDAaNMxEQjUv5eBh5bz13yUGFFCeszoT1P7B6Ue5p4fQWUYS4eUEisQ8pUuYgz38kSYfoo3pViPR",
  "key9": "21mMzrRsP5sV9Y5WmaUTYVFsMiSPcKgAdD1ZDY1w9pNveQUvA8EftjYZUisEwAa7A9q5qVQAzoAar6U8A4jDLcso",
  "key10": "4im3nykbXdTvEjrYkoJjTnbdZB538Q7oUdLMzfbgWzC9AZagFhwBJHpKQHir1WnWT1zYo2CjeijyBNMEVUM3ADdz",
  "key11": "4TFRwE2fTtF5kYqseVshKcXEFtuyRftBqRA9wW3x9VfkYyuACyUh5RL8d3HnpP6a2tyJoEzkTpHomW7k7hgm5FjL",
  "key12": "oQDc8H99rLtCJ3pvnVWZUCWiby47JS8aZWzJAWEv3mhJpAAeEu8JE2fUDDPCdJgp3DzZbCDF3j5ycqzfqR51aHg",
  "key13": "AxwYsM8aXvoLmsnfKdtE5doL25cUAGdVP4s2kcLm8jsTK1aUgid3NTsRwfAH54dmz1GPvpMaAZJbUidyBW3ktcG",
  "key14": "3uoHmdEoGrBsAnVF35cfimej8nsb65zoYY6u2FSfwgMexLg9kdMj6zF9Rqy6iFNfRuFF8cxeDxNMp7PS1syQCLmB",
  "key15": "66R9wCZRxpkRVbw6NkUfet1Vce9REWH1Wts1aWU3ePs7qxoBD3bsBEz7rTpUYFNBf9wsT52hknAuJTs1A5TJUr2Y",
  "key16": "ZsRMPoZ3C5H6dtwLKPfezcTC1rCRyDjik9Z2HbVYNoo6jV9NdUNNfr9TrZhGKvXZr3WpLdZYkzPH7R9uNbeGLVL",
  "key17": "p8UujNzyavA8qBkCyvkacRRMa4qipjweL7CJSBcC8hYZ9BvdxWbMPheTaE8C5sVcp5CKfN8xqh9VHMxo8VtKqEy",
  "key18": "5nGHGRpLFRePmGDyoXSWvGeJUEhkufN7syhWGRWjWyYKjUytaLPhDyQswakL5yq1XRiuRwfcvkD885AUTJq2zEQt",
  "key19": "5S33uoghzDU8dGWKJ5M3NNTtwWCzS6uUat7HfJgnhATrYG6oqtPeSHWhv3ZhbaM6aPnF1sVU6W3h8Z1aNBLBks4v",
  "key20": "3qYtbjgfYY1eJkrXxuY74JM5fPYj93GKqfhHEouBEaCmrc6q63b5ygz1UwBJCC9BfPuYj8ZPvEq4ypzgTZzac44e",
  "key21": "zpvrKGdjTDSknVRSTqbRvn3JEhXrsdFbB8antS1egoLZ253bcKbcAT2S5xSFFC9tyKksKDBgebrK8zfnMjx7d7d",
  "key22": "2MYPfXcpwWc4YCFQWyzNmTTCHtMWuGjYz5acANDiesHpCu4u8A2yxZZ9zYn9xxoAZ1AK9aRTVgtnMQZUSJirLJJQ",
  "key23": "2oEaZ8JViE9ASMgrj2qPmKZibU96ZNJF5d6TzBxVyMav8M3AMxC5udHwRx4YBH8forDRvjNeNrtmTYXZnziL7F84",
  "key24": "j7aSHMPzWNqm6K9Y9x5b2e9yopw44dFJaWavTNhkQtGwqgAdCkGSoHkb3n7tcaxVLccJV6eYPp1GQheNJJothZ2",
  "key25": "5Xd55hokZZ8wYpvbYC8KLRooHf6k6As3ygGxdvc4NoxvPpyEyAZtkPmJ1os5SsxU7QdvfAQxVTpHib1yYWjv9gEC",
  "key26": "2Bn8k2jbFMEW9G2VnvugvFxSAL3ZAmfKj3XhT9HwnQfVsgkGPDSE4Di49QBpW8JzUpzJ9o7AstxcDDbvYE2VUKtk",
  "key27": "3Y2Rh9hejLQYJcYTN4acF1JXesrK55pWFq1LQ866sre7Q26UWBPLCZVgvtxenWH7UdnJLjDwDL7V4Hson5dDBpBa",
  "key28": "4xtPNcQfLHWAfb6totAui5gcCfVPHHy664yeXKpRDc57wQUDuqLhnBb2NWgTMwTt7oXkBpHsvRk3CLqa2eJeEpqV",
  "key29": "355wBwY6zyAHx2opZMULzf8otZ8Aj8xZ1ubP8dQhr7kLQc8LHVLwZqcSQo96dHLW52g2uFnueFuVLsT9Ewbs5av5",
  "key30": "5XHBvF9rwBckf4s11rosybpBPaaQyLBURqrRbzNEiXZ2psfHXKqa6zX9tgXVbyW6DT35P3uNgAjLoWWSBYZUyV9p",
  "key31": "3RMvwpvvY4GhZrPDyygTEmbdeyt2zLtwj1cWCbpLRiY5jaxZ2gke4seRP6v5qrGbR8w6FGzxi81W3xXZPrb8fEum",
  "key32": "2kFbt88rRP679j2PAki5Vd1eXZrvx7s4NkKXJZo2Cv9Cjf4LuCJajpQsbrcgrA3Sgct4MPryAiakndaHPGYenzUP",
  "key33": "4ZoYgWsHFiiTtiRfULf189WgqU1B8CXRmJtz5g6QBUJiMuQwyBtRQsdfRcifNpU1B8oKvXyMhfyZBrLmv9RxoStd",
  "key34": "5WWdUEbT2AppfsU16zvrZWd8CfuyeUrUcU73jYcgh9JGuP2kFoDUdiKmyyKqcryutRywwxuTmHMh35P3KQ2wKNzP",
  "key35": "4Gh1GrMhpecayfip3JfgHYYmzP96VVvcRAdEHLQqCD6jfHDYAsr8j7FBk1sNfBWsmEDFG1FMkJF3ZVzPbNQQfVk9",
  "key36": "3y4s9KXYK2oUDEQnKvbEpyitbvjqdfu3Jgz4EQG4hNby17te2G1BEaqS9p3Zy5kce5bYTzQdMKMJYxtqUoATnnsi",
  "key37": "2jTULeXvtJuAsecVFL4eCXzef3oa1fubowSUbUzwYbFj2kjrxemNgntxnE5yBpMjf7cV98TXoM66BBjHLag42Ztb",
  "key38": "CUGKbwVrqxGAhiJ2Lxq1rBu7jvK7TDKA1QgyKLiaKYP4YfRH3YoZEoRoUo7dxLKGeMKzHcDf3tFT87fLEEqdhPg",
  "key39": "2Vzc4Pre5xjdnLThkoGC3JfTBwrAy8o9cyuKcvMXnrBDRyGN5ri6muppUzD2FFYDM6H1KsC9MyZjHEsW9853wcJC",
  "key40": "2DCCwqG6MFbfN173GMS5cWJtach8wjfhgRMT85HtkMwv7r6cZgwPrhUsjfc7FZckgG5sJmPzxK2fHRwafgYjceVF",
  "key41": "4uctoN9dkag6M39iiqvSArzboVLYgdzpUGJsewoA8uPUJ2MMmHxHmAdAKwEAhKSCFXRu77mguMdvSsHd3S1cGick",
  "key42": "4T9ybK3fUvTGM5DpT7qcvMsmoK8CcscTLwPHNSKod4qXkUZooidB9qnrJFSJ6PPctXjC2UwdXx7eSFdrWSJe5gtJ",
  "key43": "4ACfvRmy97ArHG3darQ7rDEfrJAToXRNcPAwMHyS2DBDH6ndCkfgEScUAYWms6jDoV1iDmaPSsyqdt1k9ERpvLC9"
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
