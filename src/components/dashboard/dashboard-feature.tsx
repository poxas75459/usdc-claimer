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
    "4UGorLRupZUb9yc7m9s9Be1TzSEbQoT7hhJVzMoY5toyvFctrpoFUDxxw4SSaXh7nzbhHwjbZztH61sDPkfoN7rr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4znkLPmL5FmPEUwgkb9dRepwCsaUo3SJWxdW6zVm3dPAaagkoTrVCNMFPZE4XLaMFP2FvDJtyWRtkiHrUhnEoBWW",
  "key1": "4mYwuFiU1UtyGmRopvtbCa9qE1qA3yAed9nMPKHjTWdb9iHvRAK5ocn12YNJ8TXW9jkhhCBfsxmhby5nTuVH8VCr",
  "key2": "L8xe91Mo8JUjXFsJQ2LopJRjGNZqAsvf7pTTVNf5iKaVrMwPaHs3mu5mkTf2jGqgYiYLidfhLxxLtzwRu1oyEov",
  "key3": "38xHCUnsaLx4fQ1XmkDepigrWdHcvh4v16X4KB5dBGaiktZzLGqEsjCgmj1JVwYVJqfipoavrH3j4vbp52JV1Xjo",
  "key4": "r6t6ocFpXKL1fwnR7ZgRTt7U8oGDFj84kWkk6XpW4Rc1yFXARX5zBiZY8yNXgKoyjKDYASyrZCr6EFC8jphqod2",
  "key5": "DGBpESyW8kpUDsWx5YAzH3hCPDDZtDzobMS76pT7A4HpqzwNS1kK7HUQEmKWQVFNyV5dPZ8yVSoGBhUxSUm3E8i",
  "key6": "46Qo5gMoCDJZKrEuRTxPHfMV3ZkonrumgB6LP7adjgmfUvMkZPkLweiVNtSHrtrfYdVzxtRBaAmMzcvhhVwynzjQ",
  "key7": "PsmYA5guaU8k2Ljdw4DeCzyitha8ach6z6WtN6jiNbFnGhqvcDrgHmpK9XXSvmUYGrvvZ7UoHTTWxgwQgm3ka5V",
  "key8": "4EGAKQLAphQv3WkSQvR4BhJSNLhzHJU1s4nb5Cwtvya78zLupGf9jHDsh1xsXA6jBenyfKn9tz996KEQ4XJ4qiBA",
  "key9": "54vzfDgsDuVvVENGg3NL6FtfVp69EWv2yQGAyA75uvBZGZ4WUqpz98kaW6HCUoeyMYw6essEoS13SsnxpsQ5wpJL",
  "key10": "4SLiB4ifmAKi5uj3etv5A4YsN5v3NJA9aGnvAxNXbPAJa5GQCDnKT5Ehe6GUmFFstHnyXNw4vetqXooKEDpgGgkM",
  "key11": "x7YExQ3PXwv2hhxXFs49wFSDdVSez72ui4zSmsrLqdzrsfsj5ks3oVE7rNSwAEtjMGTNFELHywNqGgW5xoJjQxK",
  "key12": "2yoMa9BCmJnNcpVaU7tgEqTTmmkeDEXNEXP6ks9PGi73rDytC9h9WPPg3sS55Qm3aQXTRg8W7n69Q8He2PQLDYc6",
  "key13": "3Ko7CjHHiB666j8sGct5su4WDvtSJqFGu9sFraGwmuB5xvRiPNHtxci2YyiUTj6EN8WgpSqBQzFK9iri6om3GbmM",
  "key14": "2Fh6qkTzDXMBNFPxYCvQ29KBp91ree3DincXX577B2EtfJECMr7YoN68mtxXnZVcRsYYuxk8ThcYkB23pxC76DXP",
  "key15": "HDM7k1xbnEVTRxUYAT9g5BkKoXCu51RZVCkK1Q5Ex8auPYXBhLAiyThQfbPZPQLPrmFFzdqCGDzX2jwFVW5szkn",
  "key16": "67mbxy8vrn9Wpk1iKoXaK1Pene8FxNspBGAMrJa8hxERo8zKBbYheu82McPtiUBjVisxu75VVhrxDiY68tpXdEuS",
  "key17": "26K4gQSPY69uHaNEvb9rFfFYtm1vjn5tZtzeV22xqkqTbALTrNYaCNDv9a74T1E1e2Dr5HC6GGNRFp7QUmKEj2Ki",
  "key18": "59AWaF1USB7ASSnDqKBtWckBRxiQGLQXePC7TwFbfzmSEpiBSuX4vqQFqWDkvty2KnLkKRSH2XsapxXQtytaXury",
  "key19": "3SVPSscR1QXDeyKc18Qr6yC395F4Ab4F5s89ftY9DXZRzyW8Lk8cMAQyWRimVs1XtwnkUxnbQYGGQCqyjE3aHju4",
  "key20": "BH5DxaLfdCbjbBVDm26GJpM23yx3QnFn4pJxa3AyfrBudQHKU6HdQ3xbEPn7vu338d6kypPhCiMMm2m8TK5g9bs",
  "key21": "247P3iCFSRxmtNT6LQEWR4VQu5i1vtHogzB4TnDsizcqUNmBiT6x9DPoVhzjWRkc5ZcFBrnq1yxsum48KynGDPce",
  "key22": "3WiaNaJa4uFC81SzeBfDpUvMxoJLAzdF2hKcE2dRnJUGm7AF18xD8iMMpNi1ZsvrrqVveHHbgrBiDifebrUjfEwE",
  "key23": "5fy7nen5EJnr7qbYkFEi7cjNrfQRtPhHQj76iuBV5WqfthUYxC6gHmDmNZAEx9N8MCRfHd5hELxADkztqNWQ1bL4",
  "key24": "2AER5meFUEYQLDnnRo6d2t2cAYKmMwq1g81bUr58CqYbAFVMQ7WdFPyDoL3BmpaxQ4tpLPpGtkoyPkLxzveGzor9",
  "key25": "AWYyZoeBPU1Z8Vuu6v3RUzgNBVtvMgpjFDAb8ssKLpG9y8zLHF12ZftoHgsabyicyi5Zfa3XMgrpA5zqcBZ86yE",
  "key26": "zLiWH8zfEN52NHKk6Xnvsg379U9GayrVMEwCuF41mYQ7UZiQ94iqxEFtSFCUNLViSHCzPJcHqLorquiHL4gJCRc",
  "key27": "5bcE7inpD2bkSxhyzaLf9ER64h4DCTwWR3pf94kZf7utJrrsgzh8bDZmdxJZsb4kpcZK4N67advJteX2PEzAYBjS",
  "key28": "32SM7F9jp9MP7TZKx9QLeUEkEBgmkUCXdCrYpiFmfAgUvw8G2CH8UeSP6hTj4cSgFwncLPLePKkenN3yEFGp81fH",
  "key29": "vxqqMFRT2F4X9iUDHudKeALEU4rU1vXGUESivNvjThPdWxiKBtUToAx6s5mtBnkhSghtFU93hrdjKm3hRkwma6B",
  "key30": "5AFNSPKGZ2A67ZDJ2AjfJfCJsJxNbPqj3ubw35X1rtiu4Zv8q3VnTpAPrA5QA98xcTbAgjSp84LordtJJwi45T4k",
  "key31": "293kYHQZVxacKHmXsnR1p1pbgUK92gvmFpBWLeffMunwD12JBgf5mYGvP7sGmdKEaqpkBEy46urkmV1vPT4u4PbK",
  "key32": "2HU5G6zZ53sjgZ3nNx1m8fwn2XwtwXGVZerSrBXLyX3zeBrzhNBeJeonvqPTLEnN6bFHemn2w9bhUvFxv59qyv5C",
  "key33": "5f7N8ejUfUboCu64tQRs6mGc3CePgnPkxsQuh6Y9rMMHBoY1mZN6enHrnEyEJ4VK7tvCZcXvQAV5nkiFxWWjk9bk",
  "key34": "2c6vh7y894YJdAMJpepp3Xa7xfTLmLqrxVWkwjcTm7VmGccKDfthrYe6s11Sfv1wMRsxCSfXZ6eKPkWtEFGb2Wyf",
  "key35": "65VaubNnfWnPrj9rReiieVuVF1HnmrBSq8Gr79jVKhSF77LXEpwgAwaGYtVduqmfa8ahr6Vtu8epgHQacqg33iCU",
  "key36": "3kt56ECWxrS9soubSV7SUmaUPDVB2uVLBcikCxdU8sUPpUhyc7u38uiJdJDpfhDijv1xXmYfqXKrgN6Ss4CCPMJa",
  "key37": "441Y77w9Ei8RZmgPwwE13wXZLnE3jWjshrGbXT9QhoJNysDHgNpFv7TkznMYGAZPEBpyUnb7DCQoNjnjmX2BemUc",
  "key38": "3CuHuNQ9u9JzvZQNsm6hoyyDovCfSsFHUjQszZxN85oXBYSeNxRVADa75kgQQcdZiSDD7Q2rHFpVrSdx8Qw76gNY",
  "key39": "2cjMRyNar2UGmTd2VanXERoUtycmfpb3R2wAft1PGitUHQrjBtZnouX3F44NopdpgqvDuj4W6T8unD2pmVZxDK55",
  "key40": "23FqfqwCFypkuSWvXLCDCWqzu69mJnEYb6BbZUe31SeQtRHPWD1HJDsfVxYBjQV3KQ8JXtjGwmC2mxZmYLgprhrc",
  "key41": "4sm2Q1PMLaS5BTrAXGc1kvLFQqcN8rgbPQbdyQQAynWE12mKMyEQVbFx75yFbfuyW8Sym8C7QfzijHAgic48C3se",
  "key42": "3RvcLMdxMch9xwPVEjBmfEStQgACyZ5bUzjd1xDX2SSQcmnRmxEYC6Hp6xSjMH6hcLkvo6T3bY1zjVc4LDf4ViXE",
  "key43": "5EmdaCj7iUXpVbotEPbfgyrqnmdDmYTFHqFGjTbbtspKUeicYKYnZoHfTueu1DpggyAfTJUnxaZHNAA5mxNaWQmb",
  "key44": "54mFKyRzAch2grtivzjQrenXFNqFEEKasvhCPHN9ugEky8utkYKbVJQmuizHatrNB94cMxQfa3HbrPy6XrzcDgze",
  "key45": "2xkuTi7u9VdXrgxFshNcP8ZDDwUwha5Po1mPEuKrwKKrCAYM9DHgb8QRLswpwjDX1Zp8XGAG4MrjajWPkXMwaSsr",
  "key46": "x9BD8gQmu7BW6WyHvGV1HmRrUti7jy7yEXLsqy61zfZxp2UKqL2tQyvAj6yT6D21aj7tpiJHnM7zVm8dTqshMR7",
  "key47": "4nXW3ZwvsirDHoY3ER2MSvcuoRrXuMHtLhd3XiMxnf1Qt2JyafivAFNUJ1rstYCoW71Xr6t5nB7mZSjJKh6nEDwd",
  "key48": "36yNfrdwi3NaZmomsT28qrrPSoowVAp2Xhw9MiBfZMc2d6FUtHmrUHgSb49n2sgzBTf9RKJLca6wLu3sL6v5yXiA",
  "key49": "3SCuKTPHXMfPLdyTBx9fTL2eCiMeJau9zLB7jc9RCo6ECRMGn442y1TNoAK2P7p8m3hsh3d6FfS7Nk4URBbQBnyv"
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
