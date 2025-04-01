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
    "2oTGwXcmUC3b65avQysmwuajpC3JXoa21abwYvPHwCp77hYRYgTZKnkdsG1PWd1kJJ4R8SoPxSWCkmTaaBCx1rFX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YXq43rR37sTwAfvFX4sx5j7RdWuaFNeMJSaFrCGq48cEFmHRNgJRtUaGPDCadWo4kkbkEw8wjg3gA8fygzRVHgA",
  "key1": "czYAkKutuoWEVA5tjLdYqa85zcGYLpg8m4UWBeMU4LR84CdRKJ97XSP85Pwf7sH5CENPgbmLhKJUqgo8CPSq7Mg",
  "key2": "2u9zxxJKvakuBzgGjXxBYzCrnCCYQKWuFEZNzkcduLNfewF3mLT8x8Kd4abn9AXujzKWuxPGzmG4fuPxgnzbUUxY",
  "key3": "nqsQWzGFvxdPJyXTfU1CPxzw8gUsLgrTEoHBpbcGyZMWcv4Ls9fbEZFmTUkNqD5urmHNyp7GwapPUFuCpX3ahoj",
  "key4": "3RNPKnP5wqk5DGpbLb53X4fdpRDCpeLFxaz29HtPAw5DsAqK2Xu3WXJpZRudiKgZnwcksVX6nFrGG664Js4TTMVK",
  "key5": "5chP44HCzKrkhUAC9ZVGSv1KKv4KRrL8sTofoQjGyrGybndvhdE4RZWgJpcEyhBrK56fiVvm7f2FDS4PyigNbgoi",
  "key6": "5dZ7BumtiDi7ZattFkZVfZ4N5ZHCtcE7YKTua5XK88RNDkkxh5XwyDZrUJyzx8eRAVeXFPmatXzx59rZFxSzY1Tw",
  "key7": "3fbSfhUkPv6LzSoCnP83iDgxqsBm3k6ccSTzCqKCDJ2gM8hj62k47SR9NRQvU9i1aMEXvadSNnE6Y1QTphUWHYcv",
  "key8": "4LvyWw9Fv52x91k9uN6gAkdQHdKZM3QHekUQesuywNEztHCFgGWcT59BfEDFEMUwnhiB5sX51NMeUufp72TpDd46",
  "key9": "4s13bzBkWXntfD3LZG93wvwHDH7pR5ZH6SVEV4UuAhh9moCimsKMigdkxWbzfFyHC8owzuugzC6mx5rCv3RRQrCJ",
  "key10": "5THRN9njHeCemVApVc4dJB2EHBi1thnJQQsJ4jMfvu3y7xZuiUA4o12bG8ywfaACzYXnVyHMWzYe5Bzpdi3YAJMy",
  "key11": "5jyfxN5iqtevurqDmsEyDAmjBQea47TAsQyV8fFPN2sLBZHkFNXKFuBpE7TRW9XvH7Uo3kEGAPd44rP2Hz1z6f1b",
  "key12": "2c2d4jnaBWzxrNAjZBc7QcrA1PwotPuodEWdgdHHTnjURg7Nw3tw6SsyZXAr4pz8Me6mz5WEgirqmcdmm5AnsmLH",
  "key13": "bd9YKyd1QmebtptwpuNwZkophgygYZyXMS6wu2F4Ph3cpZ6xo9Vvb8r3XcqtXTyaKCfXKksoSmHQkfPJDkJaUiY",
  "key14": "3fe9VpKpo2pLdVkjYwiNSccJyErCsfCk1arxNxAeA8icC6AHm5HwcgUZkn8vpa5qLGSuyjZzT9U6rthvmDkKXEyg",
  "key15": "4VzRBjA7P3er4rPcSN8bNVPagqn1mGfMkbZagsqnLUbm9jKbSbLnoy8niPkeSm7dyshT3NKWzeDSaXbU1YGKMRzE",
  "key16": "3tkBbYpXtjpEGHqCfWMo4YdnmVGkAgHFAqKPj73iMyVnqQHfT9hfpWP8Cx6bctCj5pFDsKktUryYSQAvaMkDKzaL",
  "key17": "2WbHheUiqRBjfHSrPKQ3UX3jvc6s8agZZberNvC9oG3zQUfwcsQ8uvJ3J3ADxRcZPaVdbLdXrMeax3sF5PiN4wTv",
  "key18": "2womftW8LuFBY6assnGrEGNbicb18pzcF6sqST5Yoyr3fmPS26AWSKTBQ5VafZCinP6UdQfAdpwhxZ5Es9A5C265",
  "key19": "2mMy3gg6QeQZjBJ6wf2q12bCW86DQrCC1GFbzNPKn8ALsfGH6szp5u4pd7e53reCR4WmoYtFY4hsNxVVzQDo8iYe",
  "key20": "2t443tWmgePK48fGaZpBuxsgCpPX1JxdvmwNFdYw6i43QtrELr5WzvSsCzMiu4U6YjTh4mfFqZ6PZjiNkn2VBURh",
  "key21": "4QVs4sGf7eKEh3iqGUSWyabovbPT77PG7iTnooGF1vEQqbehiPvnzL4Dd6WerX8CGeUCSmnoqTpTBmbTksbFngdG",
  "key22": "37wWSxV22oMKcGUDgw9SJrZLtQP8LJf4mwNsC4JyVCiu2cwiWXq9yonmBXruAYnBEVTGn1Xs698xbFYUQH1gimmC",
  "key23": "5XfgxnvRPteW6BEr3B5RymRrVWiTUDbBCa3KuHnRzCkDWmb6MevoxYREfw4SmaWhRGvXboViyaKk4kCGY1QBM5Nt",
  "key24": "2KtDqC48M71U1bvU3GaShgpt9D7qsf6jZ21q2Rbyt4c2co6MTmpDmUGCPxWPBSHayKodVczzgDMRxEkvvjyaNmB1",
  "key25": "Najzm292m4DQCSaoPScr85JvahVL6nL4aGiT6mQfdxpEqDXh6XRpHUht73RshiZ2XSdtRyrjfq2DXJAFDh9zZcA",
  "key26": "45BKTS4PE3cwHgyVVzMPsmJJ1bQiH8HBksxKBUrrWm56rmM8keLDakDHdEWtqvQS9MWvY1VufYDkLfRNpgaqNYy3",
  "key27": "5F8qJcwtxntksDcF61Bctrf6T59XuvGeqKyJr2Zq9GY7u2NBBPz1xfJZkoJJuRAhJyysSaZevW5rMA7ueUNFFsoc",
  "key28": "zKPevwkp47ugB4jXCNTsVuydCg6uJdPY7K3sQewHvRrhWb3zFLEMdPC1A9svWTThJYYvzGTykpW1pyJocu46boq",
  "key29": "5oTYP35Yxg94aE4RjKRvpN7xSoJ6xdZAqeHUPF6Ru3kib1m4V8yWK1Br9yZnu1ZMh53YuecQZgUhA4w4MxtyQxwn",
  "key30": "3azk7k3PMxr8NYE5w3ZpVgMy23LK6sXRKrEcwR6pqv9RGyWZphtByGsE6JJL9tbrJbhrS5pyU8K92gyVkExytuvq",
  "key31": "4YfZocRYSejm55cc5y82MKpejTF3YgYCmRAQDRPm6GZycYXCFt6BYCCtzKuHH79J2K5iBWMzsE1N5Y7VFbAXq25y",
  "key32": "THrWXQGbyiqZ8PqmH3JEEkCfVk9zKjGs3QP7Lg1cNK54TJmMWMoG7AuDSZBH7WDjZDisPJ8ChqVnJBTy5DYoj9q"
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
