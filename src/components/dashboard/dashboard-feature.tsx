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
    "5eu83Z4cHafmkbEKBgZsYUPub63Xj9XC4NbdXtzYb53n5nGUDFYV5wJDJZoB5HSGpaATkautqCRg1ZH6TMzeu6LJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LqeuuBUideUQMc5pCYmpHh4E7RXTFDJeGpjMHordR96GQtjYVPgYhmbPZ6ww7invaUiDJhPy94DFhG3qxHJp7Bg",
  "key1": "26xij9rSGg1LDAgG69RHJCNX1PCe4a6znWS8pTmSjmJKfVqyzGGHTQX8LN7LSmEUDdYELkDNHNsDNSHnKsVJ9sfJ",
  "key2": "4cEzC9agTYgp7hTqo6qxkFBV1WEGTfK4BWBLt29gQYYKQcHVHZTdBe7d1dLtwAUy4WideutibVrJCnyB6sytxyCx",
  "key3": "4XmamM66HCoKSwSmxriG3WHSvGUXzsi2GovPyHpWGEBuCLVv3bhSxP8sqpfWLdeCRTjm2TbA87PC2rFnDYztRu2U",
  "key4": "46hUiSV675L5SAEjpFDTTKheKm3y9zYBdmmFLF2kGKq6EjHUtobnhjbDbktfAae1oCzowi2tA8pZVcZi1jeyN1GK",
  "key5": "4GT35mpxXgWnahcZCECUQq9L7YytgYYcknb8mdcD54wyebuaSnQCReTJhLwCE9vEvUnrzUrGDeW5GfKjQvJamhaQ",
  "key6": "4uXYQyrhGMeWRjTmZu1kcfFbR8xpMUNP6qk8GXwbVsauX7yq6JW3GnaoYAjc3pvwwsWUzGqTzsm5PZRppdSh79Qs",
  "key7": "3MLKhqecjwhm6Dhq2xnpZJGQgArgGLdL59pkmabMDQgAE5PK1Hou175e6ui31m2nB4qzsWFn4dxeK5jZViwcD2c1",
  "key8": "2mmoDxmcXtzySTPG3Nfee9KRkeCnTYRbzexGgreyNHr6WjFhJ6fcqeikfynz2BFeFrMNXQL71Jva9r3ErMFQoNGJ",
  "key9": "2hka3ChCdFuri82giESUUqGjsPaYpWFwkeM68hPQ8sWzv9CcXHWfAxgnGhiPxbM5uUGcc19XEPUUxDRUHgpchpzf",
  "key10": "4PNpQnV2suDWMa6E9MNsQf1n2dgs6PXy7cCNFmYvdYtKkAnxpD67rHCa9s2unKmvr2zX9J23J82zy75B1g7zTuvJ",
  "key11": "54aTvZR1xHEaUaqs97LSVwQP8D96wmjUNL1xuhwhWSMG2yEJGNGn7EV9zW9QUWyFCFAvTX4yab4TsNt5xZMU1CrD",
  "key12": "5XqGLffb6LCLvXEEMJLUcvwszfsu8tnDYr4zsKxNAhcjeoMgVeADerYMpDhW8eKDC51qzvn8EYVrFLsd6mShFmDB",
  "key13": "4UBssRYE4yXAjfwKTzZMJVzD5cjpTt91HuVaibZPWnRGwRDqeUkKaxM61CqLS1FxBeB7cEEFqmXMBFd2gxRx61DE",
  "key14": "3XemCmeVumiTbHKzrMUv7u14Ux6QgeEp2hvdxKPZmabXeft6X1A4WkFhwg8Y6EUQErWyv6R89mqQW1Gfc3K7r8wi",
  "key15": "2ryR71xut94DVu8HHeSdc1Q2wt2DUy27wCHAhzLq8xCs7QuJp3sh2et1oT69eCoxYezd5gb2uC3obtdNN37eoshg",
  "key16": "3MsKVCp5VeixLC4vpTbM7cHAvadKBKhdNL3prYEUTKiztNWbo4z4KcAT4JzFTw246QuW2c6durKPYifQgZrTAfyM",
  "key17": "4UpLwKU1FJeyHyhNJZ11paNgkM4fHYBsFfn7BfeiTDsZ4SxmAQhKfffy5PxULzmqQzccMHYfDtrbmmpRCVqkSfDb",
  "key18": "2Kx8dgJYSarTfkRAM3oeHnrAN5EonbbEXCdCajkWuvbGzfYisKd77S8P2DVKfJh36pRDK9ckdadVz15Mb5g5ziZV",
  "key19": "4u3kEkHcfySvPHew5VyNRPkjEqDfc7qxhohmcer79HKggKpYCi1MasD1MV2HAgiomUy6gwddupSEiJVfSY7mk14a",
  "key20": "3yyygWXFq9xTXT9N4jXW2RNxQaBeUwnNu58uLKvrF2henwKWfcRSe1F8RbNmoYHan14ZdNBzuLA77FQxzbBeHDXH",
  "key21": "3JY58afLsFen1BTCrqWhKZGahHrxSaaYR97nSK1DVRVqJpc8c7icmzgz2ezs82HaonmCFM2yKFEAhTet1fjf2k3y",
  "key22": "VvBprArxZ2bX6JuMscWgC4bK3RGcaESVn4RFGadBVaU3oGFGWxBdYyEJKtooV2fxQcPp3AQGKvLeeJWFaau35Wi",
  "key23": "5XRwBUCzWBSkeTRSkWNPbdgXQsRhtZ2WYr2F7zNqHyY3a3gwhWhxDT5gwu3aYB1Zf17e9ftMuew7SVxPauxbCJgK",
  "key24": "wp3LCRoAqaMbdN5fv6t5HPjziWzNxjRfQdx7PV9kjiCP2eXhLCH9MztraE1W4U9ps3xsF1w9VFudrpfHudxuiwB",
  "key25": "4j1CiK36MuGMTnJHP5VSuJmAGYCMUkkAxo9UTEwMcYXp2VRvZkqrJaiEzeFobTXAJf7hxNVdcxeYGiZPLU6u3Mj2",
  "key26": "4SXt5LsXDf9UY3QJ2xEMCgnT3LVh59qNioGH58KTz8xJoiUGzVrYY2t7xvfy673XmcHxeSgSHaAdo2iiqBE29686",
  "key27": "2B1hbHfmpYpXsx24Bt96oSnpD6xSnx2HYnkEk9Ei9BK7SbroELciZzcu1vbJK3UsAf2BTcBF66bNhgR2YL2Zn7wT",
  "key28": "3MAsFC43w2jQgHHAHZxGbsLVffvQCsNGHySpNDhp5kbiEaa7tV6S5mSueM17YvkRGAQukd7RoycxR5EnNBX9qQ5",
  "key29": "2fJQVLNRMdevjUMuLPhP32V84VYN3B4rnMqkMXsufVLMQNfmUpPRqTTHjP7SK9iJdDsqSr7bqpLLyQrzgnHb46Sr",
  "key30": "3TPsFfeGyQdeCskXGqAqReKWnvLkEBxjeGw99ppcEq7ZYA9n8sw6yQUYqs3Xc1PfGL8YQimAun1HoPHsT1Gfx8Vz",
  "key31": "49h4X2myhYKoXZk9yG6anSErH5HtdYii2xgA7BDX7uHrjb65pvuPTaD3iJ8XXMagUGwRLxxZgQUcX67t2jymVezt",
  "key32": "3Prs4e5oGqsaXvPksAnsNunHCuzHtDYCY2BJ3AFtJWa2oZrZzRQj74vWPscHLLJhBZDzXoJ1NG9WsPbwBa3QXASA",
  "key33": "492UgLQaGFVNjJ9QX4JDvMquXq2QAZQ16KVsmdDu3G5TB1CdWanhbU8phsEv8b7uQWaC26r4zXkhScoxG4eJzsM3",
  "key34": "3cnMD4SinkbaGVawQGpxfS1EXU5yn2EM6nMWZDW1fxg9st7FSETdEim2GXuWKUzi9mmxkfzo2bnrpYZnAMST9x5L",
  "key35": "43sc8wW7oFA3AQF9vjL8GT9yyTrZee4RapESksc7UQEujthfExhqtoGr6gwZWcTPSAmTiff84diWhozVu7PZNRdZ",
  "key36": "NSXjjcBT14XAkwP291goQURNthChdvDoThcqKjmHtytTxgE7bS8mKFSL2hFKUC8N2AffouAAScwebHUbE7bUcDQ",
  "key37": "XE9ynptAChG9dEZnkPSqPoegPXkEx4LBk4zzr39yHmbZD2BmSC1cHE4RTH1BMCejHnbm4EhaLuEf1hNgu5phK1F",
  "key38": "4H18P74Fzmbo6NDX5AEnBiy1AVkBCqAgJpp3JBYWeUekiYQBZ3gJUF4KUWyfMondLjuwGqE2MT1QN7DiH6MvpW8R"
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
