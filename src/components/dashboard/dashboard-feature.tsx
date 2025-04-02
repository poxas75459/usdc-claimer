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
    "2aHAEcGhmSicRKGTCpGEDjg8AJ3BDPALuRvsAekLKLDj2JZyW2twkFM4g2LNGuJCCm66jSm6jhhMxKZJkHKuoXQ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tYvavP2pmtB6SRwbnBhCYe9EnyA8MTAQR9ez12d4FrSHx9TYGjL4tb2v2Wj4pUB2tbruQewiEeXTjnuZFmUjQui",
  "key1": "2hNtdLy3DM2UFViAhUq5bocMNCJGajRvPMFxc7n7DJeRyuLk5eZyXj6ShZdYDnTx5EwksekaYxbgBc2y3GuUhrJy",
  "key2": "2QxLWT5u7qtbYFRYoR9Zo16dWCDstMQfDpshz549shmEeHwJjNbi8E4LRdrhP6h6LmqZX2b9NZSh1U4rWk9nAjEx",
  "key3": "54TQ3fwQPwcSWbEygKmTECcbcui3SBbzCxQ9H4cja9SbQ8VqSC4aDE3icLKtgWXwg2vAHGBLaHSaywfaRKZ3oEbi",
  "key4": "23yNQhMJcZHkB88rub7mJsV517GDRhyFXT8UFNzj3YYj6cJUX7G7ozZmWCjbQFBh6u669qMnXyDWZkhw5sAF2cnP",
  "key5": "3qFUkJ6fbPnn3ur9g3YS3VbUJKPPMaAFjW1U63bW75rXmGWmVnY35kMeYtaoi613YmHeDbQZojmmwi27PorC4cUE",
  "key6": "5rpT67Je7yTazdZ1uL79afuaoaV1ei3oBR5xSD1yysdv2zzoKFbYwpf5qTW4tfpc98HZbjYSZvNtWbEJ1nXtNV1Y",
  "key7": "3NCtjPrWTgKpyfS8rwbnocjFRedqiFf9KjbfKRmKnk4dHmyzsbgk3qXnL2jv3wPVrVaVhxTeR4HEodFSvfa9C5xN",
  "key8": "3gxYe1hkg8YJEsHzCeLahFhakyebsgU8Nm8fao4XSmmignWZ1i6Z3HGrmXkXeNgwU7QmrEKZGPzKgt7YnRPz91Nm",
  "key9": "3fd1hwUXM6m1hEMD89RSW2gM9fiRETNM5jnt74hKqK3B1nTnwJLFKnDdLGwhtgRGCGFPeMsGh93mHKEEb7eUGVj6",
  "key10": "4Wk4eTFeuxziSCpGfUg8zYBGnFwXjtukwcbQED1hHHhcsEBqj6WAHqsNnroRxrUzyEJaN7ff4buCfcVknYU4FSNg",
  "key11": "2vLAu6aLFPxUG35KB6gwpRM7LSYJReRaC8osnMAcWDxduzoyTuHwGYQWNaaMPnF8acrFYYM8LAxQWULJz8LgSfHh",
  "key12": "2ohXacZt6WEqe5b1mgeNTZiptGrbvNW5xB7C4Sctz46FN2LGDrEy9DoPPiEJuSEXe3TZy1hWvuqd2ts2KaFzPWr3",
  "key13": "3cJyEMGxJjwbfv8jtrn5BjVXNg7qaZG7ErGanfFw84bDPkz6RBxx5zXQE8fzzkWps67RjTZpWcYazmdRB3R9MNQu",
  "key14": "2Y3vdbj9Ya3n5k3Fc5KLisLaW7PskvgiXb5fuCpmDi8ukCZ3EArQMUMTPATKJtq92gk76sUGLt3aGsWQG5sDbsQA",
  "key15": "43c7TZgC26Ngmou5SDF6L7MQww3VquAKN1QCh3AKABCGpnTg3bJVDoHBpjzifDdkKarm7DTEjUNhqVBhkcWmaBWz",
  "key16": "vdkmZPPKCKpCFghEYJS3YMgDXPRNiLAZBtLMAstegAYAhsTVtPfcxwcSUYc5ihw2nEwxcSiGehjyZE2qMRzk5qx",
  "key17": "4ZS1VAp4uetMX2JwLdbtRchSebngxNBHNMYaRq6RzqC5HkbncVBRo66TXmqEfUwmw2x1Ak32d8dFJnwxqnRQy9V9",
  "key18": "46JJ3dh3QTJf7zGFezJK3ddeLwTdjFaZg4fbUNZruJqLYFiWato95Qvm4ZvsAUBCMt4N1tFc7BTVnDDziwkGdNUd",
  "key19": "3zz6QtPT5gNqhfwpKRYqmWT2YAw8LnSKhzXqFEt3UER6D7vWFsV62PEL55NwBkqgysD2A14PShNo2UpNXuyuSZvz",
  "key20": "2MU39sy6YM85w8NeMWYZX7wsK3p2TkBLANACfHegrrMg9w4SdU4KEbonMgGWbLV9EsM1RF9cpLzfZvDdMZfJi4Wb",
  "key21": "5yksrpYVREtrqGBDUoDKYJWBqjR5iZcW8mMZHDCjrk8xEjEE6kxj6EqA3aSWDHvuu4geZ48zauEkiGfAw9DsFSXq",
  "key22": "cDqE9DmUectgJ5eezttXsajXH8r9qx2a2BaCkX2ZXNg9HFZCmcB8u5ZVjdNRhUBKNpj2M8fP7T4BUeZLb9v1MpJ",
  "key23": "2CtQ2abZwzn3tSHTRUc6zSk8LbpVXwGuZo6q5JAuGcxEfoSVmFdt1QDzhssRMNEYX6j16nF3Wap2H3ShCekU7iGW",
  "key24": "5pdyVLtiKRi1bQRbxFpQA8wMW7MNQBM39jNjwBnP5mWGTP8C4QHqPHPjQz8Quy3NSR23mNct8zpRWG1UTypuzNhH",
  "key25": "4KehgNKo357HRrgRPfZ4pqCGpu78PhDL5KAtGyBEe1MKeXyJhBrsS9rGoBvf7AYUsvoF8uYpagquMjrvhCdonUEf",
  "key26": "3hEMDwDgK5iQMRTjwfixtFYDSJL8b5C7MViCiACazv7aw7aFRQ7saAjRezLeGAdKTnxNvGHaQ3v8FPhwaHrKUazS",
  "key27": "5zZFo8U97qXuMhNtNa93tn71DsSUVVN6p74JdxF9SZzwjQeMyjKi3UhKJtG7eKjKyZAhTKsfWRESweg4zebBfMc7",
  "key28": "HR6iu73vxrJ2JGcg4mLL3zsx6ecxmf3MFPCUinZ8a3x8asHiaSxsficbmx51Qioyg9Bdkj1ddusSCmK6hoJVfc3",
  "key29": "L9sbvMpJ31JqFetMgWPm2GrimsdSDRjZeRDkERVNxUjyWxosNBFNkbX9YaMfgsFR18jcNdDZGcX7LwfoJ58aVqN",
  "key30": "2HncrE43s36QhiUR3wPpJd9ThaLYVDmk1tEodyYyvgGnSogjuqz2Ubf9G7YBm8ghGSnU22XM6gJ1TTUQAfAfLN1s",
  "key31": "3KmvAmFTtSq2B1VCqBsNgKWWiG2CzFwQbnZsdRRfoGN1vAVCgirDQPEvp5g2J4nzKXSGt5zy57xsywVNPvhR3BfA",
  "key32": "3AE9JGBmbDF1TgBdMgMveEe1oz4jvJcHZhcKscFYWA521dBqt4RjTZZaQBtovp4CaAXYaCdAQ9PJDtHJJdFFf6Wr",
  "key33": "42F6Eq1rC1ZgHWpPnP6uRASGnbDrzdcJQBbMGApRy87jgSwQfwFjtab3BqQ9gJUo9RV1vg2q1DbCcv8dxfk4mQvA",
  "key34": "2FDxS37z9xM8eaCntoZopAPEtnyLK6QtNL4Jpkz9VQpGoAcXK1qaXPmitxcLFAKWHZKHV8sbDg8nXDptmjQcCDuA"
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
