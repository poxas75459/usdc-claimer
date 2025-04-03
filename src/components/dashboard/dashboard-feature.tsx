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
    "R7XjTxGvP34ETAvhoPEyPHkgHRZpFWXZcyHWu7d7QgPUzni1HG4D2HhbiiX3hkPbgTdcYCdj4uMgbZ7H6dE1ENn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TxEx35adAhUw8EkVUR1WFPwaVJJaxezzPKYZ2UYjECoRvKBivWEFfi1xMGwx4JcLizvSE96tNQ7jEj6XRwtJ4bL",
  "key1": "xhAbxrrfzkvwqBeGTup3BWeypcGnpJX19kyN8Snhkrbf4YMVNrQMMUBQQxGRSSepBdSLbFbAC1RueyFRzVVbhVd",
  "key2": "3f8aYRwUGJeHJZkRZzwMVeW74jpfuDd9whnuFz6WNS7AtR7Lgi1C1DNfaYHiG4mjaQztSMEeVmZEYFqzrb1cV2Gv",
  "key3": "5oBKV2UKoJUiTTbinRLRqJomdxEZnSAssQQhNMqUndPQfsPDimxDGARYvSvQrzvxbVtzeJn82Hb9etQ3QmJhtyd1",
  "key4": "2RQXYdYkYETEDLBEikFivHkoerPxHr57XxffSH2yzMET1icZsyz4zcAYbVDv3Q8r97Gm7m9ze5wu211RmYkTf7fJ",
  "key5": "8Ehceyk196ZaV5wisGj5ynGJc7LmerQ8hnwPmPXGz7Hp1bxmEbP5WJLkAQ3zAR1eH322j97YGve1yGsCczndNec",
  "key6": "23vJiwaz9YsMknGyo5KbSiz6CpmEcbfiLscD1FuHEETXoZ7ZaavBVUkcPriRfGKimtwikX7ifjgC63fXbZbjPzwm",
  "key7": "4sXn1G3pB8E9WhMAv8uoXmqgpC3rPbDRyk4CBhFYxCpXnNdk15G58qUzZcFVgNprwPtmweMXbqaNtSTNR2nhqjHQ",
  "key8": "4zmeyzQuQ6ZTngwi2J2DfY9VgK6qPXa3UZ5Z5etNM1kAqMdwqSsPqanLBP9TpgFqAkLBqtZB7MNBTTkeU4rkxvK3",
  "key9": "4jYdQDkaxGYAjf4tTZkAi98iCDHo8EHpUwQ6eGAZqF6NiDuSmfhwn8XvxzXBZLRtr734GY8UbkwpA1a83dC4dgWZ",
  "key10": "2Yq5vJYGN1jHHNXVbPwcPqN8EfohCTd29NBDu2cVP4YdJyYBBe1CXzmwDtQi7qEj5rmZ2wwFrVLPx89P4aJx9i3H",
  "key11": "8f5sKm2Ga7qySbqkS6pxdGRcRUpLy6FqXmpfmcYNPAEwXPoScRJJCdWy57AupBgS5z3iuhZPNaFwGWACDbxF2Mk",
  "key12": "5qj3fdjqBKFc6G5aK2XyVcev2yyukYM33gP2hKQ7sKuXPrxTpNknXUrGsuvMbjTBkXG8XMUzvV4Xkok4Crfauf2",
  "key13": "4B9mLt9dezpgJtbys6E55rNHvRCHa4x9NZ5MBYfmwSEAekgrCQP9z8gLWD89wz4nV4Cx88FEC7Px3VsvqhwaPJTc",
  "key14": "3aNKtRJGkK4u11brVto9Ma6hnCenw1NjJmesJzJLVQ8YJGNLADGgcrh16euB6T7GwrfC7qNu7XtrJDJzC34rL9eR",
  "key15": "4womB7rG41SwscJaaNwtiARuznbNfzavzzcZ2jM4Szme28wV8Mqq6yhKwDjbNay5bPtDxVwF4ExyGKE4NPKZ3mbe",
  "key16": "2UAriZbLjdXndqsrpGJMDwdkWndo8MzZsEDg7bzRgwdpKpvaFv5svWuzXSRWZJUSioiyJDxy7xAdthKzeKGG6vru",
  "key17": "2srJzDrebV7vSmYPPWf3MZFXZjWTidHbWKXspy9Zah9VxKusqLCpNpEG1vbFD3aC8nNegpvGpf1EoVJAkJqMRQsZ",
  "key18": "3bpNiPQWyLoJF1Ehk4ZUY6jsmM1ZQsh8wT41NFJJrW5r3N8pJgD7uJwtp4fywpP5wN2fpt2NzxXxQbYBTA3Jf7du",
  "key19": "2vaAFToxff74L6BXpMfyQBZ3eVWKZHFSFhpGUqyeppfxRZ8P1K5CPsb7UPPrv3KnCAWTHTRnkkt5qfECdEhakpkM",
  "key20": "PAXCCCQPkMTQpJUthh349MDzrvRVxtyYL1oE3pUNQugyyF18H6h2frzFeCWFcZcNX7BUpqMnPH4tpc14YM9xjuA",
  "key21": "4gTJV2AFAL6u92GpidWeZPjZiSmi5dx517yuzGUVHcXiommAiJUAHxCeH54uWJkj9ouY5JZtChSD6WhkAg1DwtvY",
  "key22": "54JAFKnmD5vLzdp8dDMjGRLEtrJGgUVXYcNUQtHdnkd2aDHp9AYwMoByJw2fRtv8b2kwB6jYxHpetNUXNHNyHQT",
  "key23": "5MpkHNK4v1PrEvYw4B5AVYKfWvvk6szfc9JbyQ2LrQ8NBSxo1qdukEthkDtZe88597r3Gb2RXxu93EiSC9hdfGMZ",
  "key24": "4GWiynWh65h1UMb4sN5vMsxUazY6U1dfDMWbrhs8iMq1aBXCKgG2FrHBg2cREwZMxdnJCbZ51vCy5D1QK8P6cdxS",
  "key25": "3o4nS1JpBa2LWSMWW9K6q7Aptn1wkgjwADv9ZW4AVvqPtawsb8h26KyFSga1jPF6aRdiHLGRX3ckTyG5Ze73bxN",
  "key26": "5mvzxemmrFLNtduxcogTr3pUskuLxpx8KnC1zunxRo6NkPq9dccjPdSC5yodAuhyXBcb2gJjMg2bPZquZQUovRk",
  "key27": "9qRSGHJD7572CrR8JDDt5sQWiVGsLEWeStJ7ECLzpFNCwxhs1BqHBsbjj3DrqzDLWcVgyvj8KT9EmgT5CrT6eUV",
  "key28": "4jFsu5wEdxPo4LHWsEt4tbBBef1uq1bJHs3i1HmLnAAF88uHqrCKa25rV8Z12WXHBkR6GfrTy2WS98ThsBma1ysZ",
  "key29": "2KJZHeRFee3Lvda8ZqyDsQvF4tuv5GFUUVH3vWfWAdejgByx68PKzz1ijErHJWMJoamwf4wVXQuTveSi5Aw721RQ",
  "key30": "4jNuRW8birrYyc1mRSPthgVaSZVP9iTzFL9Lv8rkP7ZcUyLHp46g6Nyvmd7Qzs5YVUfB9KiWr9dyvbL4V55hj645",
  "key31": "5j6doujWLY4sZjegAk1Hk3JzC13zTJhn4TdxfvodDi1xfEagUsY6P8UzBhopmYjYRrAq9K4v6ceXds4HcTRY326k",
  "key32": "4FCnLFJ6ZEqFoohfRDNja83YAnvRsb4Xiga292CtNdDFqSmjUvQgiJ69EABN5doGyoqqg75eMKSChyfwHwcdzdRA",
  "key33": "4rwYDMirYGFMCVAqbtupzRpSzPy1sZD1qzLPwumCmuvyPcjjjQaF7SE7D9v3L5ZeLcenw3xEYLyTSoGe1uY4tci",
  "key34": "4PC1QZjJ7AyFCTHs5Gv9TWEx2X3ytSJGa5GjrMaHEoTBH7V1u76yjuCy7hX5MQSHME51b97KBmCi1BZwHfXu4UaZ",
  "key35": "4FnKpg8vPX7V4GhRELgRYjHRGFZcumCVNERa8yR1bYRgdLKVT94DnMiJ8xWf8oLW26sJskgKB8SHRqPuW4mnWVED",
  "key36": "34tuCh72hXv8CfVG1wL619LV4QxrfwYu8F5fh7orLeQ5viH2bPGJcMAP8FQ2U9sW5YRos8Fwota8VUEVkQkDyUnQ",
  "key37": "6eXV2iwhry9dqG1vnuuC1TyQ2a9G9iitCSJZX3h6AruJsqQHsydBuTtmzUzKcat5VFDW2u5S8xsHTQWrmn5HYB9",
  "key38": "2jRkTeW2cwP59uJTHCipAkPSYpeS1TEbGkvMgsFG3FiXHVXNsL5BQrnaywJb7KJpntTSNAVVtEFmpeTJ6RhYgQzi",
  "key39": "3oNcwwViQgcoKw6YrsqadYA1nxDswpXyJHtZWRgaEEp7jwnLCZbLPpMJiL6uUCSVCDyawJLdNvKYEkHGZ5ATpqTa",
  "key40": "3nGJBiTrYuQ8KVF5kgZD4tC82MxqWBHWfdefjuD5TCTKj8KfBkGn8viTu3eevTTRMunsNN7drfJpKGA7kRajdq6u",
  "key41": "2go8Ltud8rPTeAj4GL5tK8ymoUE7U3LiVXQCuKCnmuzwQpCH7H8Ky7h6rfExeto3czt1869CSxvC2xxJyyvuHMSS",
  "key42": "2EG76gue9ySc6v3vkjrc1NF4zV15sS2e8pABr4x66U9BUf9hKffpfew7koXbnDULidMJSg6QYvVskqZpiNhv1Gx"
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
