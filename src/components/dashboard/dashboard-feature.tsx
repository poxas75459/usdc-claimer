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
    "3fcn66gQtfKpgHiafzTrowoU3p3dHPsauFxLBnbRhbhR5VTkvfZiB4WH8R4iLYd5u7Qavt1BbWhUJqh2w7re4Wzh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i7Xkg1Xg99Jq3WNfhK1E1HqQtiS8vAorB5X8qGUFMonHB51WMPm5EmDEPS64oD5hkB9M1WiiAAk2RhKJswSEZAH",
  "key1": "59AKjJJjxwLi83AKJhfHc2RnJ6Q9JDmMN1qTg7NhaKvW7RgnAgFEsoBQgdV7TVXGpugimaxm7v3xsMb2CiNPDrnX",
  "key2": "a3gZNvhGt4H4ow2i5w9qQrPHGWbgx4JbK1v5VkKSNQrRC86XGcTvZf4oiFVKsDzZra5qQvmSy2MR1oFo1LaY7Zz",
  "key3": "39JLaWaJvGiTvfeo2x9UdEt2tw1y2bsXEzdnakoFvU5jBEPSYv8Cgp2q9Ehhp8y7atjfBagX5jk8T8ppWQhZEA5B",
  "key4": "2giHQmEgtxCZx9rb3G5Nm5iYz3JGA6q9UT8ip53HMAEMf8ys8iSNEwn89A4PnehKy3Cwb44ewpPsVPE4MMaDhch",
  "key5": "2roTy6BEyAVXvnPTCWJHBzi532HLDdo1XmS8LmAQ9JESkAYobMBZBiGBB4hrsvZ2Wv41uYKSuvUD1LkcYzbNWo2E",
  "key6": "ghWAjR8ZHL41E4LrjqonnZpH2JqMe5ZJdAe5WnVmXrMSEYELaTVKNJc8aFpMeHUzNA7pxyq4S5yJ1grzhiBBE3Z",
  "key7": "2s2avLtQ5eVhkq5tACkL6XgyxAVAPRo6AFTRn7EZefDVHrZGmeMrcA8J7UP9tGksV4wxyxWt5y21Uw5LzacC1TkF",
  "key8": "2mEjDTchgixjNysbRysvyPAvAEBtZXAermGrpHhNtwC4a7xGwcQnSq9hCH9gxMCojhoEQuccQsKmojvNdPzNimAg",
  "key9": "4rNGUQfL6GfaGHFsKMVWdPzsjjtAiuctrdMKuUriengHKGWUc6ojwdFnS6NgJt4koFJfQpRthtiZZGGDU5FoW29f",
  "key10": "fhnstVkJWEdMk4dV44AzDeu52dWyShX3KGFeQn1GM7LQhsyUG7FpVCSxmgmpp6sDD4w1akCeLwSDxz28YjYWFwx",
  "key11": "24mC2EHFBhXDF5jB6m3s8oN89kcdYgLHW7mNrdDULzZB2AT46jFoYEov24g3EL5LxR121g6KjRJ3C6FMxPj5zMYD",
  "key12": "2yBTDauL6DqZw1xyLqjgx45UZUzaYizkgSqP8XhepciVWgnnKAdFc4Tqnu6c37GJGghK8iT6WRPaLV1FY9N61jQw",
  "key13": "2TESMNRymtgi4LkmLDpn9Ke4sNGnZnSa4fC6mCwDLZYfmKPBtVrj454NLSivm3qNZZqca45xthsNbMJDu3vqiq9h",
  "key14": "3jo5ddrfSsvcWqwdx9AEcvtpKcVVZaFkjmBYT893fNTosweCoTHGoUJmC9NEPXvYymXvDEQNvh4a2KvYaipXKKkk",
  "key15": "4j3DduUoEogTEnsucfAnrcnZpNpTcefPmuHrCV2Q3o5NF7C3kAoNgNVXbdYajVYTvzyDUiVQDS2o3wfXBq9qFFpf",
  "key16": "kwbZBc9jj4GzZaH8gEYbtL6T9twCGVqzp9cfEoA9zYsnnvSzj5p5zvKXwNwe8jfd5FfkYuHMvvbC6bDuWiuzg2e",
  "key17": "sJTAPtgzqRZa7tJ7nwKsoUCxyj7jiVgdEXegzUkpgYoWouC4Ug58G6ckhfRbiyBeZ6MdEnsyugp1arU7kXe3ovG",
  "key18": "AuXq3Cenp3Jsdou3BLafXj3GmyNcZyAGp25FMXMT2cQNGjYRd2Fmwx5dpfU2N4cyBQ16RUpxcSRbutxxBhvHxYg",
  "key19": "2PTG4LV6Acx8w39spN5FeJywMjAHDysX5Wn5BZKRJwbr4KSHh3aPw3t8z3NPq9ArHpVcR1LkCnhji83FqUx5mAzh",
  "key20": "5RsBYWw3jjPUHGZ5BtqnonxoAG5MD7hQwfrso9H2oVFEM3uPGQtjHM5nXgqSBXnquPS8ENvVKZLN1q8GUby4pwxd",
  "key21": "4n7MA55hGbV4tJbRLU33mKyjzNYpqeL1gaKgSCjH6kxci7sMMGY6u4RwydFyLTPPx5a8E9kYALGk5PRFR5ArkadS",
  "key22": "4YGL1gGZ1mKizyHa7vJE7iE3qgzABdSd2FbqtQa5GwFHcibCipZmzmYA8RyaYuP7UPB2kZrNa1LcMoRHe6b8ZDPm",
  "key23": "3GqAjH96aYpULpz3V6zmrWbhfqKovtFPJkc8QivepHsWZhbfYJ1Jcam82hEcmgMs62SrNQuGnCsdX2UYFmU9iVsY",
  "key24": "m4WDzbYGrVZzyJtq6UZdUiMd4jKVtMFcJsaZ1Crq7XH8a5deBJgS7AuWKDLdu1rE7uncXf7Vt64CA79mcitYbXi",
  "key25": "5jVsP4vvRuyaZcaxevxdJpfros2mZ4fWXd5jazasMCvPJTAzG4vFKfkEhd3aAwxZabLDHKepyKCq4FT4QasHdHTa",
  "key26": "3EcAvSYAbjJjJoeCVDEUQXoWHWiHAUDdqWFiRV1GqsHc24rn23oH48G9QAsWbufwLhMR92NBNtT4CPDnDDUk68gh",
  "key27": "5DE6p5WFisJ3Xbxv4VHNQ5Q7xQonyucVpzYeJf9VYvGgcAhN1siX5Vkhzn94ps2gab2QxvmGqTLTD6h3QC4NRFip",
  "key28": "2YMZGnYGQJFPedDiZZ6m83CCH8zptk3SkWENfFY35jdtZVjuAB6eDjh42yJKjb2w1vFJWdsQmUmcBQ1hoRcC2kw5",
  "key29": "ZreCkuTUMDrCD6LptS8qU2cGSRvfBCqNCqDSWbYVnVi8PbMJi9UEmzpAiQvAaV6LZ7RnCMdR3NFwUbXUZGzhMjX",
  "key30": "BtTL7pg18VQpM9FL3tMUyfRqrpMnpNNvJB1VAMsHWdFfrshDXJWviCgbqqCBveksxP1KEnATkF2Uh9meh5a51zj",
  "key31": "5mDYyAq4tiEzcjLN9qKFqFBDasRKXXcWQWbszHdYdzRq9gEqEz1Nyk7f5GBANRrabEfbZTjBNMtg25C6cvhAUKAK",
  "key32": "2fn64N3uvfirurn1SZpwLuVTzAAvx6piv4jGJryt1gB9JcbXPHSMqMWQ7WUsMTizaNtvDDuN1UaZvm87E1Vd1RpA",
  "key33": "2nzDSnc3HQNUoany1tVC7hszqom9vbX4dG91HWEngRJVMNJrtDieepnEXxRKa2DtNXwEQxrvBSdFFbgGkMB4f4yz",
  "key34": "2C4irTe39ohQyFBrHCLJLBMfYrAhbLyLd5Zs2opyFs4tD5J9YQ19QV1Jm7zF3DJXoXjQG3Jgv6ZLtGQF4uXRMCNR",
  "key35": "4XfBhtF9PRHkHA5SvpzzYAg46JsKspK3gg1vZaLp4XmgadLbm839h7ZRkWGJFBhoECmGC1Ls69NeQR1Kqrh6oGPr",
  "key36": "3QPmryPBpt3P2rA4rWaz4Qn4XvTfAfYDuWc8sEr9TmWiWympDyXxLm6ZWfVgvFR8NwnkYhPTCqWoFfi4MX2iu38T",
  "key37": "3MW7wVKQLd6x1NdL18tbsVzEyYZavs9xPQyDCXKisyqBZSjSsPuvBscbiBASw7rCBCYkfPi4TvLfbt3S11Q1MGQo",
  "key38": "48aGckaZG6Kk3aPRogyLvJGKwtgwZGKKeuX9ChE4zKvpMf7Pi64NJ3Bq4v9YW5S7cH8QE24yzMMkVZDDrqPpRmeE",
  "key39": "44EEWKEeuqLkbWZeyftCUXfrmXP16asumM5oBkNo2WDa5A2v8MZb9mXPjCLzuWmcTvcKCbnxpHCzLDGUNUU2ernh",
  "key40": "ratSHeBW2U2PfuAimGH3TRbSctF5PZU5BXALkfovjzrgCLoARTz6oH2a1MisYLGqekxDJBahveLqPFGXXGed9fT",
  "key41": "2wqSKAFGDJEdwgnxDoRUjeAVhL8zg6E39CXsNjhXsfXxVppd96gzqLxvMxi4Je5kVfeHKM5UEWbZAufaYNsvhYCh",
  "key42": "3TvBQ68qkRbXXuib5TMxdCJc85rVDQuucwcSesvp3D25wW1KfGo7heEtBAj1ywe683SyAHPPus44Bret36nuuyLa",
  "key43": "4V1csAEkSHS8XLRiaLS6yvmyofUph26AxUN7nLNFSJrBS4MS5EUFFyGQKJUt6d3pdud8YxbUkDyDQK4TAmuF8Ukh",
  "key44": "5xUcw6mYgm1iJr3gGFHzGMiE9jdcxkesv9Ag4dKcabnSQEHeqJnAmXh6hgyqNB2rGi4oqBi5TS6aXVsAoQpSDobK",
  "key45": "2kM9g1iULiGTZ8CH3UxYQf52jjmbZ8qtSvENizaPn68Xr1NvHrQGQZvLTUcPMovszNtJdERtJgYmDF1bKLEoYXV3"
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
