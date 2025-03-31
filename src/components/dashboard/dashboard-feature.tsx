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
    "4X4THCoEs5hpTPTJ1iyGdj76S2XPyCdMhBQ8tspyY5NZaxtTSN6S1igt5jskBPcHgCG71FG1MCP4jhRFzsKsPVHL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dEqLx9ECmT9JkVrGR8FqC5qWcYNS7zSc5HFFYZtaNUEJc9munYoHNLRanYmrDDc1ThT3JQzdz3jYuCpRh16iMLc",
  "key1": "3vX8mwRurixSJU2y9KjemVYCLTFC4XZ3tvPdCwbHw6vuxmcYeJe1gY4Ag3cEWCTGqhadaLDELbae9vAfdakRPmTt",
  "key2": "2DZMUonU9LcqAEkhepK2xV1YZyxYTufihjJpkE7Q39NgaSNKbhREXfdd8qye4U2Vg2ycWoXWs5SBkbejFgqNyUCq",
  "key3": "4M1xhgWCBSNtX9EW6sHUVqKCze8sZBjLy8J9LxA2yv5aXdAXyRV67mVSTcz9EP2xdUAFgbSywrsZ2ixDxkgJg7NB",
  "key4": "4wSYqE6xXPWYW73rAGh2FSbRVNEJLq3QEnfAz2VLQWCehftoErkueVmeGZzPqnkR6QaZaMfygvcFieaJCTjPmqVc",
  "key5": "32Mk5jrBe47BEoFEuPctckc7oLpjR922oHYEBejztfFUfBZqu4DGtzhW7u4TRVdZUcEBSZTynp1A7UPyaySvRT2",
  "key6": "3UYVXtoptnru6xoZdjqyuvxShP6vb3ySuCx3gqywPvBgKMigbXA6K89qb3VJUiXqppV2Px1osmsabdJtstNJUPw5",
  "key7": "2XgFw9SYG8eQ4zmtMrzb717rsWbm4ZkLNDbEWynMDNCAMYuJv3n1npvuRUpgcf4bgTpEiJPwKf1i1QgvpuCNuvSE",
  "key8": "ceG5irEr9RpHVKeJbDTVh5onWD5bixdhu8FTYbagBApZBLFnd2SZfkBxY94sSyk6w21USP5ayH66VmkFqAzULEx",
  "key9": "4s3DUVTEb4ki4twGuBSnQmGFA9CAxFLGVoBNTkaf4uireNpC2Wzv7QMqG3ttRN2bgTjH1UZPTJRuWW84Ko8jMuxs",
  "key10": "2BM7SCmfoZYAm1jQDPZqAapvYt4AJvAEB5C8n7k33DhbXvrXHCSE6DWNEvRxf6oZxd5tnzqVyXaNa1hbvSSvVabq",
  "key11": "DxrXzNBPBvd7aNz45CcgCnmom4rYQa1rySQsYHobPYZfmaW9LcuabFDW3NECXaFeEdT6ba5LFL9nw5qxvaqBzE6",
  "key12": "RFQtxoqK2fieydB8KXGc2DwkWKjKtHXtPgKdPxZoDSs7Gs5chdUMBsgfmFEwgNea4ZmkkJf2JE1qZK5mBvafmJm",
  "key13": "2UqyTyLGnUGZqX2VkyXDxJ4s81sLtoNE5ZoNokX8g8BjTgkokQD4UjfGEzj9fsPsMBHCVijSG26M5BEcmkGSY6ze",
  "key14": "57cZxWYtfKdTzpTn2nnH5Bud82iGd6qe8c6SdYqWVhQwq2QDPVKCRcGceKNbxXT5FJEU44VKKK6DLC1rDRfs1cd7",
  "key15": "5rjEVCHp49TvhSVVgywj9HK1Tnytky8XtTtRNciAnoBSnFvuVYgrKp3u9X1HPjwD3LqDrG85QZBKV8rVD3naWzf2",
  "key16": "5U8hJ5mWeN5P8N9jhwAXoYm3vyUore2Xhkm9cyHqHFqCfQicyWjzrZgA7HGNw572ZDzNeopFrtz61mgcBWQ7hKvP",
  "key17": "3ud4sQimJB2GVy9E348m1Z3hG679oEfDUMMxAcDTM9MeDWfibs8JEeT8nvDLaK4hm91fDKtr3jcKT37KQ4eEyXVf",
  "key18": "h2EWxdcgYS1FDm4D3JRL5qSmYDHjEKLkwmFaRzTT3fpKhX3nqfH2aHZQX1Q6Yu9b6NfcWUqbqX9M4axfPm8ACeL",
  "key19": "qHweLE8U65XZZxoxQSyDnkYKLWVNq9XAKzJiBX7HGqynocGufqUKnZCuFf2vZyrEtovmwiLuCCT8w6g6nxKuc6N",
  "key20": "52gPieGZB2M7F4e3HBN9tVaY9EEWCgMF1WjhzCUygrgWwEFjVcQPoQf3Nq4g5XbbYTdoNwPNHnHn2drERphKLtxZ",
  "key21": "5ysHCgm14cFi5KHxHBJkznvF7sstRavAsiPcMWHhqvjVfwavCmTAKfGr4p1ENsgiB1RJ1GbBH1B5L6jtHQD7KTUo",
  "key22": "4uFrUNXjSNidK2y4no1W3WHpBcgE5Wc8zFT5D1bBHPu2SMYyu8YAz2npicu44bwxn2ii6uk49f1EVxcdote1Cxo7",
  "key23": "4xkyt3k4Kw9JnaGfvAefZqW6cykR2zguSYaDhPGR2JPgunz2PFU2g9VdzMZq2Q5syd6fRtcFfhCCKDvLu2L33X7H",
  "key24": "4qbQmmAkwmW9XhGfo7qBoShQ7mviLt6EBVS2jyAnC6rBk3NaYXc5xRtLV9WxiQ6BgyoH6G76wzrJmzwKtAyfhQam",
  "key25": "4Jh7xRTrjM3oLeyBA6zuMFLTiarMaNSVV3a7WuQB4iGPet8LsGwBuoWDiWWc3SCvoh1ZN3bws7EUsP1NedYvneKR",
  "key26": "4JigS1Afx57deGEU8i17jZZEfNnUWKNaYj1TqUXwsdg8PnKUrxG2qgw98vXjVVvtqEPqTYUEs6Lo6oTjER2RaMaW",
  "key27": "4LgbLLtzy3Q9r9uNCN1kjDnKK5wkDEaLs6kAsgqEcj1H2YeqgZ5JL5qajLERdzevpj6Kc91Gd5aLkrUxC65XnPah",
  "key28": "2ajBv9rLvNT9Jko7eeDBirx7LdNz2H8DE3Vfwqrw6Rg6tCuegANRiXwzSQ3m976av1KjYuXBYdy18p5kXiv5Qb4Z",
  "key29": "mU3bpH3Na7bPRf2oiWKT44G6pdVgx9CtwgjYiDhMbHKBdxKByugVHc4S13UPh5Ww3XfuFY8KSWKrqTKmDYmGyxd",
  "key30": "3Px8Rn4ovXpFbfhAW6Lz98Gov67WXnEunZPZ13xQ66ozWauUneCD1V7UUFrp7Qj21VsFuutprPk7fVcnKWRC7wyn",
  "key31": "ME2NGrVXa4byA6uwro1PAUceKCawxnVPKm9G9J9QpSrTSe7hF2FTCWUXeojTJByMeM7HBQYPsXbwr29aE6aXx25",
  "key32": "5JsKR5uX8id8MnJHnnufnFqnEp6jt1zuENddindkZu4vNeVGsDJEdTjUgTYdJ9zJ38YpE7ygHeHbNFKgzCDVNCMn",
  "key33": "2dApgiURxRPuGfby96zeLa5FjGqizXpn6ZYSiiqaHrZtesrwNmHQdA6NowUsXZGBKiyxtLbK1CJg53JLv52dZ3wx",
  "key34": "PdsXCAZAMxBbofNnPvhXczz9Z7R2R9qxWPbWMoPPCmvgdkZtVkTGN1ga8LdRxdp8VefvUkepEqa28bJFxV6qBrT",
  "key35": "48N2kZDB4QzCzBfKVSMVCMFRuN6dxVK5Xh6GmMz9bTH6vfXbPTGYnhzgzm95xuSekiSvGiN6o34MkzuaCXb6AKPW",
  "key36": "3m4BeN3kzqm9rdWerapmDoKYwnKzAChY83ue4CfuhsSPH7gQF7X4kDhtHhbaFG19ZREFX6W587ENDhd6TsDokstV",
  "key37": "4ruxhwjWLeue7v5NDygA63FbSe4Rwb4L6CyhqJs4pFv8GaeULPB5pRF2hAzAD2pQwSQdBkrN2a8KkLqrFScNwx9U",
  "key38": "4tac25AgWhuG2TXUS8FbSzVVjTzvEjH5A6m8g3Rh6GzdtYxADmSvbR6tZoQ1n2JagSE9GE3AAdbL6mQqvAyQFMnh",
  "key39": "2FTcmYjvEr9QzJ9WPM413kBXZZ99oePBxUbSgF16B3SUAzt1LqhC2QraZVBJm9PzJLGEP2MzoVZFGRe7XqZbw1Qz",
  "key40": "2syhVkPKSQwTJ5RpKLxBotXFZE5Fr9Lg8wHaFoieqYvLDcpzHDh1Up14h1YJEEKFsmqfGnUsCbdeav6BPCyRYAwX",
  "key41": "3SUtJbEaoA3nJxfHekSXftSeQkwWZa2Gc8LjQmK46m4V7KBPWqxuWrYZizvLbPebYC9cAE2jpYCTFZVdCdyY4nQa",
  "key42": "XNTzHrKz4MDuD7ojDwPzPzWbKojDA12ZSxi2MzrMz5uFBpr4FT2gcxR1Q2wrjLD9DmGEcrt581zQ2Luir7H6bpn",
  "key43": "5tXfZpkiMV9NnN999JLQe8GEqweugU9MeHefkzRW9C42a7dGtRwEny7B3thZW3JuojJHdAVGArAucnawbDGwAfS1",
  "key44": "3CWWKVPkYuS1zHXkf74kfVCBWZ2yEeBy5eXovzoRLCSs5jYk7hasMR7saCxRm2ynpcfgBuJNvYhTKw1AjSKnkD1e",
  "key45": "Hw3d61JrifwpjdkxqnecajnjazuyNaNjdt8cYTCKbhGCwWou2sbU4z1eiAvRgDvBz7b9NbZ1X8PyPesPhVWAWih",
  "key46": "3r22FsUr1DmGv4uBFGs6YwshMD7S2RTdF64P5kPVyzQdJbu46XSLZyRQ7EFmb3rh8Vuse7gKUcW7J8NZH1PeNDp2",
  "key47": "65bQSyyRp7ZrvChUgFupWVpU9tp5KWyUHwHJ9nJzZa3eBf56xFQ8Ldi4SaLXoySzeHALhLqXNeuW7MddNDr7nvA8",
  "key48": "5mCynr3U5gy7XxK3kaiLfVq3uVTaemM1jUuRrsT6gm4yeRkmTHLdLJLzSYCK7215QofjpNmRsrVBr7gaBz11HuuQ"
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
