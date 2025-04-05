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
    "5he7B3ARUpmPvyQ6GuJBFsVWM8xUppxmjjPZBgwPMtdBq9u5XxWbHaendcJGpaNNFW8zqFFtHQNWc8YPEmLJ4g8t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Wc94Yc7zNP6JPaAxCorrwz5w6Aj43VpKzWprpnSV3AS12ENCwYd7YBu36btPgAWm18zowtNawaivmetUGH3jJhQ",
  "key1": "5r19d9jjsgfeUzysBBoud1zocXwsVxRfPiswin6ePTrUMJLSgcvCYpcmuB43esE2CecbaAnKrvbYoaKbHv97vtd1",
  "key2": "5JPxBRkePvB4kF58AfL2fnRsFVHJ3fgAEknSzeZ8dnrkcCofiqA2UmSQFayenQks1QsaCWiMn9CniZCp3DzsRVYf",
  "key3": "3LDAYYYaUL1tJ6P2XXJzEvP5HmptaJs4CCuBHH45KpvEZXtuxSRKUpyEW9uK13NBxMzMjQrKeJydTRimX71HA8BU",
  "key4": "5S2cdsPCwUjETZouVSuwBMLZooUX2QtoHPbHMGYiXYjby9guCzcAz5irL9WzAn9wudjcvYGvuq4RybW93bYj3Ada",
  "key5": "471KAsPbLwCLxhm2K92Yp7jC5QPZZAZ1yx5NXGJysfNBjmBeTj6RGYWsCiH2onZUJgXiepq4LRNZQ9CMwCoPuP6u",
  "key6": "3yMzac52DoWAygzw6KbEQSYQCinKhWdCufZKCsAJctLJM2vNBn753MdQM4zdM1L6Ag7S5VGYvRi1fQvS5f1Qmbaz",
  "key7": "464Kpc1KPipEHASpbEJjaPXujiT6NLB1Fz3axcgifhBSypjbzY8G7sJEJ4eJ11Mfh5dUzDNmqfb66DPQ7UEfqmio",
  "key8": "2cTNxChQXsDbaSHpaSaPxkVHQFszZt4LWs39gr4JgxXteWZVFSKWn1UhC4bWHFWZtp2YxorVnLxLs362nMDpUaJ5",
  "key9": "2GVt4QStaD2JSvLqqYoniddYtadekWg4dQoAbE3Te1L2RjptLuiRxTphDbZLNvk5TmUtuk28KfnK4UVSWNk8pWvp",
  "key10": "4V1nHHWg25d1SB4Yse4M3j2v5e5zJWECouXcXZpz5xLTFGeqt7uoXjrix13MP2zombbV46FirS9SRZ76sJPPWRap",
  "key11": "4avbkxsbDXB4ibZGLoSW87eiRq4tDcEHUBrNqGLQtLriLEvjPbzaoo31ABwq7D1PhR4QGFj4Udi2RFq8WQR3aQUE",
  "key12": "2gs63NX3bTvVuHQKpEGeyMxN9tFVsHcL3zSfAYU4aJ5fHmNueUSmfY6zGsY7xiYy7TXWVfyJGtEQccMGRxmVJXLD",
  "key13": "2xjyVPe2aYgtfQuqJKrZRVav4qGwESfjZDxGttCJqkPzrfyDm4Koevg2D5CNWnZXDmaaQNbUEkVawqc4j12x9guk",
  "key14": "55xpXuh8PMyeukcEbDpgACxDaSZ5Zp7mvvW2ZgPpG7j51UefDkQahYQS8xZnujfzyRNB4Ddmjw9ZvaZFdhrAzbuj",
  "key15": "ave4CHz5yqGRBwYaH6GkFDqHaFXzruK8zjcZJYrngNqHYwug56jVKpNwDtWuezZFomPfeARZT9BnrxFtrFdHMYP",
  "key16": "4RGvJykRHkCHywygp5zCf8MQXSAFi6EJAj3VdDTyiK6PE8BEBBSa8Suf1QvqTUYxJ6sGcyMrGFw6VeRApxZTg6qZ",
  "key17": "32ip1H5dxYubENtvWdnDJQ221RoYFQLdeV4wmZdcsLqLE2aLFsbVBF8raP1YrLZWLng25VdEi5BvKwxxi7ZNm1UM",
  "key18": "479xoBXVhHwDh2Nk9Wc4jZdQQTGtKNAcaPv9hPE2TpqYrbdb96iXZCXG1fPHxiuEBfHPpTU9Vdyxezsofzo7PJdY",
  "key19": "27jsAHDHCMLtRbck4fCXPxmdgS45wziWef8ysp54nLWvNzXpedYufzyVdQZMbypTWG5Hjst5dYbR2LdaL4ejtEfG",
  "key20": "2hCG9N3dhogJstiq5fspnAf7VDBNvwzfrrbCTGMNVFkzomeDmNVa4FfHP4eiBvgG8gHdzsTjdMg9GEeKuZTUpqxR",
  "key21": "4mC7oKn47x2iJCMTowCZ13ZK6GJKwXsqCuBqAWJvc3x6eBf491FCVKezm7d7ZN17smtsQx4Cx1qtcooLqnpAC3k",
  "key22": "WCYejUTQqLmrJPqgRe2CdSVmuhbYe4tvZ5AiWbqoFHy4apXpbhPdy8qfkj5QZ7YSNSSTYgNnngwrgLJLiUTeKwV",
  "key23": "5mu5D2u72PUJ1txPxFdhMGJ76wfHP53cjRvwVfBUgonxYwZYv1cmoF9QpzvhXbEFw8azXnUe627nxdRqEQbJ9TJk",
  "key24": "5aeuqEUd4eTRZsXW1E6txn4eGNhPTj5eN1QawRzQCtv95HVa153wQrpuKbPD5hQAwXVAz1msyhQGUqojtdk4yP3g",
  "key25": "3e4cTEm33ztaBK3K9MrhVqeCo8tAN7SBofX9bhKvXQPdHfF4miJQhEk2yC2sYZzVRv584jtBqUbDRZtMyjYzekdm",
  "key26": "2BxytQ5ice4y8wMcpbmFNBfhqHgtTSiaT8ebpzsSaCJ16Pz3ot7yA2Jympu2sSLzwfhMW4PpqVyCxGDdaHq8yLC6",
  "key27": "gPJB4hPRCFU69dMka1j7vGBKVv34nwkQ9es7shyZVqWxGFWptxkqbrazHgRUmA2mcVpJFL7TvcgDDk3UTxHcXYQ",
  "key28": "3zo185BNPVMWDyPuARNsf8k4Etr3RFEXXs9jbfPTrhiLp6ndGfTPtXEqYv81LC2CacHycnh7JJZXdPUyTkNTLDNG",
  "key29": "2UZ6tRiEmbmjdQdyydqtsWpyfkCTE3n97VgTsDt96M2JD5wDMhrVDVneTRdAhHX2JF1E8EW8LiYrL9iWWvbBPzDy",
  "key30": "yVHeu818MCDz2Gu247gXo5KACssKv9qBerqszsUo7vk8ci7atNJ67tcKDCAHkkizAhpprF4bcioxq4d4RMYBxsG",
  "key31": "2Be3TKxQjZ8VQpmF7dWJs9DZnJDtySh811b1E6ZF4xw7rn5fhk73x8hrgu2CLseEZZT8QGsx8hmDkoUYepxt5QW8",
  "key32": "4D7ixHyYZv8AB3vTydaoFtTqhVeX8ozL66TsyKbj1ZLkJ4wci6i2hhLuaauB2B9mXuDCXa5Y7C4FVnvpE9zJKFQQ",
  "key33": "4GHLo13Q5HDq4yKgssv2kTFWaY7QusZmtDJgzitXSNjEWAg5nDemtEyVU5a4vAfMc5MhBiyMeaE27nwyyL97tFfF",
  "key34": "1QzzpZSVnG8pZVX3qBUjUjasWvXQBzjpQeKtzNcta5A3rXayHnRdTaUknFmEEuNga4iZpDkDeDT5kdboHnGbogU",
  "key35": "3XSaFGy4E58Ao1Jh6td1AwDHF7NfMB1fcQbSs28CLL8eFsDxkJf62VFosHkCMhoLy5bbfZxnQVx2dZXYwNra3pga",
  "key36": "iCoTTKwpBrG576zwbovkMGGRfPanEorjXyUyBkuUZzghNE52NNbiBjQpwdLYG4zJuDGmbCAKoC88dVmmtKCgVQn",
  "key37": "4VutPyG8SAjrkqh2texXYQ4fwdf4xw3UxPaynQhmWQaZfMENrwYhgBc9pnvnS9Mb1uYuXgf7MJFQLKVdjfKUQcki"
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
