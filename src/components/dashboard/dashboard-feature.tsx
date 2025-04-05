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
    "2Q9BHPRuHzZu58nmSa8r3SYGErLmZdcZeSuGJUU4ReKds3rtDEzkr4dkE25Vv1umC8S1jnwHMujWNze3ejyxs8Bf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "455dKvmAUZH7PLXfKCnk4sed6x2osnXkhhRoWNwZdi3Dd2YuDnSVEo3jTtBuTqS8Teoeuq4wZk1yZsokbM99j6bF",
  "key1": "55az7E5oBSLYjoy1FZ9XTUGAypY1jC5iZhg3v2zhWufysxqg24CGnVdTNEnHHScaqWVasTa9mXbMi1tnk11NAV51",
  "key2": "229kcH1B6udctqFfybuSB6uAAmHLUogMjhwsEpzZYfeEaG678k6qJ9C11X4saryTF7748mmnSjSYkCugBbJDaLts",
  "key3": "5hdmuAnyruE4Sx1acYUkMNkdN1sgBvNWXtFQ6PpwErWcWL8a5HB2HWnWR6BroGXHi5vEC15uD5r1n7veZ3Jxhatq",
  "key4": "2VVeuonEt7KfBgrAoUBMuNThbGF7bKmWj5PRYhTrvS2Aig1FDohFNshEGo8wya5bPUxMpzsHnGQrYk2s7soGQbeF",
  "key5": "3UAMF7R1dPyrU26inF4bTNwowKWaXfPkgebKtMqwFUvptAfn536HrJ27hLCxD7CWyvWd1h3DpdiqrCCWCdQJo5Db",
  "key6": "H2Ft2EPHujDQP9QNRrQJ6NmRdnyAQAapuEzCfxD2VwAhe4KBv7tsJjsBfJyJx85RHW9yJjUZhNiHXgGyYfodkER",
  "key7": "4QXmT6SUAdC9kc74iXnDuzr28t7ygNKyzMg2RGq4ZPVicfkpcNWoRHXwJZDrFB6R9LNu9a862M9XHsnWAu2R6CE9",
  "key8": "5HgeuvtViAPhfAz6zUiiGNmQFzruLftjWqvu94tUjVofadTncA3gTRBv9Um4iHYcwSfS3JbikyZjtUovrr8MYgAR",
  "key9": "2BWAxhDAe8krJKdcdfZXT69rhPdzLiGpj71Q5Z1qBkZR1ENc1aH9oV8PnxacffBojKv8cDizTU1xfEXQ12uy6yLQ",
  "key10": "3nuJ73vzZ5NFgBsKrxz3taiHqYYREHKoEfYbghaqBqLyYv65YVaCUx6FK6e3K9EZe38QJgpgbRM7LB5Y6tUcmoqt",
  "key11": "3cAdkFvsKafL2sfb3h7nuoGcGPTHvCCAUz3k7ErQnpUVshSggwGkQA23X5RjLEbqDtU2jRmo6CjhP5DdeZmCD8Wk",
  "key12": "3kfoo45hkjPQr4fk731nbPUxpEk3Lxx8PkQexEcGfK9QvDBS7qY52GDSVPwLJy55WQPA3r74gKryRyAPCbBzUUbB",
  "key13": "5H7g7yspGZup9Lz2tgwMmHNNv7TViG3o95NhYdfpZhv5UWcXsxm8L33RRcGxbyPF9y4eSuqRc4bMrrJCqEUDBji1",
  "key14": "2w8L3zkuCHoZE4FWvGXp3iRh3YmkLjMvSUah2Wnjr688JGTkNNcqdN9cVEN93EfHcK4kH8iMZ3qwHFdqBDcoCbn1",
  "key15": "6953EsjRG9tinB4FdwTPhNG5wtB7FT6LdEQCinBQhAGPKgFG68B3kPnShX8HhYDno9WggDyM8cV1VwVa7N7DEGC",
  "key16": "2yQ4qVbZPXiL5RSf8Q3XFbwzv2Ur49poSm6VHhPcBp6QGGWL4WwGmeG3nA9fhh3zeL5QMPCfZuCvirRAUYSrjthA",
  "key17": "3ZVtRLTNSqY8koEcXvPfDzD9UgFzujmjeDVfoCHB5XD9qfrRoNfUR7QDwpYk5tpd2jh25CGpN9ZDr2kmUUCaFuYV",
  "key18": "5fZAJELXEYV7jmJnT9LV9vhhY96teDz9d4Z58iFuf9V176Das3NDe3va2gmNKunen576mdPpAEXz48rRPtKQzpYL",
  "key19": "3MYTqeSX4TKrCmdPGeMjAk7v1Dri2PmZSqivTf8ZVMidrp4EWPqDzciToCew5nMrh7PSb1Qa9h1fs8AsmsFHBjn3",
  "key20": "5V5BZZ8PMHqavgNtghHvMT9aYAX4VqUn9ukvPG45Ndj2Z8neT7E9GPSiNcL18MK6qAwgr47hPNnd29sBso1DVvex",
  "key21": "33ZiJcfhTEffPfz7oUMKMbgiCQkhvfkeLrKVkgmyn9Fpo9nX1QyNJdg9qXmxyWe3jDAXPx2WUtdU2P6s2e3Qhbsn",
  "key22": "4nFhEoZMEWcyz5HrYvJ4R3XHwPBxJP9UHXfugQhFajEMKPjMrVvduQddkkMUxEtSpjmi5xhhUPFLvoKkNaBu1uoX",
  "key23": "4kTfyeKyBXrqHVmPd4NPqAC5G335EK3JzG9tTQNg15gTDKzEBHc4twNYWg36fPdKTua51J1bP9jxoq1x6Daj591B",
  "key24": "3JTnScNjMBpufaNXrESP2KVDJgxGecuJzEhrd1woTi1FP9xKeimhG6hx8XST3dZRGcvsqxWkxEhAQ8NE4SmwMYBw",
  "key25": "3Hr6aP2voueaJNY4gfBw7u2meKwDiC3BFzJJc6j6qRWuzRE6qA752EwvBVNnuAeoABLrLu774FbEmaG1yFu85ZJ4",
  "key26": "5VAe64qe5v3wM8k6kBfqnNBfdBvRiEpP8qFCboM4P9WWxJ9dmnyLw89W9irp6rVB76ew2SW7bcihCAw7NfKtsAYA",
  "key27": "2NtK6zhVirjyQemFjajPo8iaJizFabMtLUzrds2tmRJ9tbpenjAgNqXvdFBQjg2UDei6vs837iRi41sc18ohNVKQ",
  "key28": "qeUejgJgbDQQBp31spsT9W2negeWREE687UYaT99FkYvyWRq6LepbdKeC2fpPgkoUS8ZFzni3DsZidXtBT4w9Yr",
  "key29": "3hFMAFCjZHncTWdXUpTp9QHyipKXQD1LZScVbnggCp3pLchJHjD4bMX24gW5ocdyexCjNpVUUReYMKHrAavQLfoJ",
  "key30": "2AhLHxZRYPi7mYPoRSqTP4KvUtagbYkzoTVHbUbwtGhv1XbtcbRMBCKgmEDEL83u9xFVzeaebMENzpe5isbkPENg",
  "key31": "2LFX7MNSvYNYpt9Ep2zag9HgCUwyHMEG54bBbQbZRRbCPyL5pusecwVbCuzyVfnsL4FaWEjnMqShg6apUzaPojQs",
  "key32": "4EBBNCga6PjbGdT2rsNtJWS8914sKwUZk2rVYuSXrsXeWcjvFLQBFpwhn9ZJsTNjdkmDP1i3LrAGNPJm4MZnwZX4",
  "key33": "3gowMEhRfVR1ncjboYd1nZar8LbGyHCqeTt3fw57WSo5w8TVKiMKBqSmdMxw8RSKyuEtJyFanLU6rq4qLnq9gp19",
  "key34": "62iKqf6U7XBi1iKsPdwBE9Dn6KGMC9XehCrdXFngTncwnomnwU8Ph77P7NzfTC4W5vdN8czhwFai7DNG5hLZ3m6j",
  "key35": "2Rg93c4pqac7yW1wKC7s5M5HA5dGTySmVcU9axoixK6B2EV51rUVa7XGQJtFBTKVbZAr9DGJiTi2t8FemzBi6A2b",
  "key36": "WQ6vKFdttqNiNPWgL77Csr1Mhpg7jz6SgynHH2r3v6cQcZeFYuUKdLTHmMJCcdy48zJh5zn623wdN8ZrJnm25Gq",
  "key37": "2BXBKS7pVyGK6LA5ceDPACwL7zfccNqAEms7wjFV6cmz5LCsVvmyv6Cu4WDBAS5iewQkYTjvsGSBPvic1QiqoVRg",
  "key38": "3DEX2AR3ewTv6J1fDvB8HhHhdpUZBU1tjVEY8tLa19mH22pXtCS7VxxEwK3ZFKDfWLaKNQZfrsqL4Xq7Jznbtppg",
  "key39": "5ps87taEwiGrpvKLCBb5KL88fXSBqgSq3g45Mr4F4gtBpEmo7c5coYYDFqkKzcaRsVmJum4CxbpthdJPZNbBZJDb",
  "key40": "33ZAmn3gyd4YctrJiTWdwLBFaTF4RVRvV41gDUTmfAFt4BtUU65UQcm4hV9Eb17cmanHuhwsQqmDhcTuGBE52GtR",
  "key41": "3dZ9F7FNAnunguUnvN37dvGgDTdF74nxuxFeQVGftEY2erp6TjxjcvLkFBQbyLxgx9su1VK9QLrQ5qKT36rwDudH",
  "key42": "2fzQcht4tkAbp3etWxnMiJBNVxYomkhMcLHcv27LLhtued9YrwqCzkojTs4adnPTYdc5QsJ4ewwfjsF68egDfQvs",
  "key43": "5MwKgZgemtxbuxw6RQqDq2Pg8s7LicEw9sdXEtbm1EKMDaU3wGwPRSSpHoAxQJUtj6wYnXCrPLmzC4iQVXNQ6hGv",
  "key44": "4uk9ddGKHykH9AfRdVnHvgH4poaGBRJNixbcRxaoW5yTnKXiDui69DDYgjZeDenBg9NesdEc9qwtyYPKSb5CA964",
  "key45": "5TBCdh3sRaF3K2jmfkK5fEHd5yr3tNZuKGNmXcYSTC8tukqdBuzP36CNiUFHRnnMiyG8EQk1ft769u6ehxd76aJP",
  "key46": "3RrHuuBaVyVfR9eWSgmx2BE4DoXACSdrtyAqEpGtbqX2VRBPvM6idXMMLR6AAqTKUTyBJP88meSnEKmNHyviA7Sn"
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
