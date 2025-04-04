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
    "2J8s2UQ4ZDgZD6zFTm1ufJ3ueCsHtt16B2zTujbjLstDVjXDjFY83sygu4Sm6dj8pA1UEY9jKQzBPjAkY9N77c34"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53a5ZS2wRSaesEpxZquhspbsTHeNs1CD93TvVdiMan4oRHdTdBP2ABa7cgEQyyqVmzezHyubYsw335PX4JTzuxGo",
  "key1": "3Tpazans8t5onfKjnNJJn28KZ2CaXbsBnT5PCDXBAP8NJSunvmkuXmihx9wf8gcugrwGKsobqxsfCK8xwLheWoZw",
  "key2": "UQRQW7V6htzZa2oDeQp5W4kM2PRGcdEv7hU9YGdca2EUhZWRyhTTbkFoJgZzixFvv5FXbCgWek3Fk8QBcYp7wAW",
  "key3": "3MKjv2j2SKUZxEPfgf1yANkU9x2TG3rPaPsgEtjRcaqrWZKHfzjHekpr8tK91m7ps9nJLTDRAMnzFSrKr85AzujA",
  "key4": "aBbjmz2vr8qegvfcEG3STzJzda4rvsbtsMxAmfkB5yoDX2xM3EbkDM3L561bLSTdesWUq1Z4McprBNgGJStLCRn",
  "key5": "GTA5WBpEN96sjZmMyucyr23bsrovQzKhD9aA964vVyCjmZWk4UWs1JrKya9mCt4PsCjU4hvmuTMmwj6KFnH8goe",
  "key6": "2gMEvocq7Vmkx9Txea4L6yMikrAz28v6isBycGQCGazAV5EGiFmCQeA8cTaJex19sn8teLwL95Sj9wv9ytgQPno8",
  "key7": "2QwBknx8YPnNnn5HoSAaGRm6SD8HK1HzfxjZ4jHJmGWiDYHQbbTEeftvwx8XgB3FYAcm7S7swhBUYZ5uBSzuH4yZ",
  "key8": "UojF7ejA9NT5sSdC4R9RTyvdJhFFVNqkt1QMWmkGiYKj1uLCyVdYEWgmgQ5ArpGA71jVSA9UpcJb7HpXGX3yF6B",
  "key9": "C6cc4LwqQZHWiejuyZVZv95wm12PRYjnhfpkFHV1ewtod8aJdTeKpt4CAoAWKy3c6TdSuUfMp5aGufJD1wytQsd",
  "key10": "2pXGqTNKRqkmPtDUKzwp935rsScwuzPBLwAqnkZnqRk6AxBKrydcQJNWQW8A6mYME393xHHC1rXfAXVnUP5KTzvb",
  "key11": "3jMiXYUQzbdzNFiXFcaJ9oWUiCVNh5pY2bXtELoLvz971faXanTwV16ZpXKG33gkmX1o9MPYBPVtzKCD8rVp1Dak",
  "key12": "z5Woch8xPL31ZqPsiHeo3YuC15dV5nS2GG9yA5cDnZjQ1Zb3bgFHSxTQShJuBYLhi9Vyi7ZXTHzFphxJW5e3L2A",
  "key13": "3G5DRdYkz9DTM4tXUzEVf122aoRRCqaVnNzhGZsKJvkVxFXenwRSk9QFY12RngzzdRDjN5tkiJcjwpLh1FeRz5oB",
  "key14": "4kRDWN7vRJDA62x51JQxpfaofBDAyguukRVxb4HZ6KEkHuFtNtvRut28xHFgmVbTp81tuGA92VBwhYwDYqS1Apas",
  "key15": "23JkQaS2UcLStc3b8cffZUuhKA2GKiyY1ujs8kxYGSMpdBmzz9ui27CruK8UoBxeFdiuqHQWP2zJZfwhamYfzzKR",
  "key16": "2YyRhrkUZn3XuX5pz52bf6tDKeNrjRTn1hD4fhQUTUrJnxQkNpsU6ohX8u2JNxBy5hCfvYQLMNs7QCUj37ktKo9f",
  "key17": "53pYGAhZX7ciRbKzKDrG4ke7j6SM456XTfBrMJWSLwozScYEzRe4FnwMpP8KBiZuHazuRcqskghGGGY23TXVKeB5",
  "key18": "2WQZP7BX4MhaJiCCYwq9Bw2R3NwVoDcsPwuwAjEr23YTdBF3C1Mg5QW3P4KHK4LHh86Jtt5S4Pr3UyC5n3SuCcNH",
  "key19": "5i2eh4FkgfzYqENwuCAPZnyquQsEKVZpLqZRoX5fuFpeb7za8xnA3my1AE94GRByqiUsHQZENW3kamx2hmocDkum",
  "key20": "3YjxsNY3XwQHp643aKGFcb1Wgkd47sqPhtCPNGDr41Z6ShMHSsaScFbJgHc65b9pL3VQ3kKNTqEaNVMvpEhbGhVi",
  "key21": "4bp24fWxrTv8MskmUycJkMGGqpQZPCbJtEBQwCHKxhRLd5rkPXyD2h2QnPQS8V7wjBfoHrfCKipKyrtfiF9FFidv",
  "key22": "39CJ9yKqSwMZWfsdvGJAf9UCEqWzv6ZevTQnScbEyzyjXPYPCo17kXq2Xr4F78wrqzm2x9WNtNREnt1BU3SrWmmc",
  "key23": "5NcvWaK4CD9pcDdnN2JToE5U8JDzZToJZQ6N5Gush9ahCUZD5VVTURLETDyNU7pcDgkHGdBQciKSUtuLRSDDYz63",
  "key24": "2DBYhu3svPxhtXE8KJGs2VbgzQ4Cobbd7evkH4U64gXqrqaxv1SNiVNsCuZ4NqLZwWvyinvQnJKeWyQWCCj2RfS7",
  "key25": "5AAykqnzMxmcn7uxxPj2J2ikvybak8VB6MB2FkkGxRjacr3rcohaXvBk87iJJcCsBwHotu4hdoF88e4ufEdGRQfo",
  "key26": "3nJSKn1oUtCAr6nxZsukE7MX3z18VAzYxwdR2CQQfUQPqHKfmYru7jj5XErpTkG2FYV43Tn7bkpRgLrSVf8WqqBj",
  "key27": "2WbbVWp7ygeg4gu6AFFiyBUWqqaipMCveiHCGS1X8t5ZzgZ8d48fjcuKjXFZuG8BBz9pySsnyQF1kxGLJJS1eLzJ"
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
