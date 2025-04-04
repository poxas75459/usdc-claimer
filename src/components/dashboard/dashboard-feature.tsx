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
    "4WUarodXmsenuwPjC7BYAcGsWxn69EeZoFGJZV37TekBgxXAu9eT7NnXnDxmr5WroPi2zWtghL9csCB3x411Mk62"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ErbvmNL7z22bdRYmHB95xLpxqy8QJohMLmDarvvrDpeQLHUHAB3rAkDcjXDJ3DmBQkDSqLfCV5L8KfcH9BdAkVb",
  "key1": "3DdX6vusHL5rq7HAJWyZoNsLAqCYuubQayAxBXP6UZWM8c91jFPeUJUj9JTuDqKgubmt5xBfSdz3N6mk7SKqoCZf",
  "key2": "3xXyV9qGcYrFMC9cxwPh82DgFabLSu3N8njjH3otToq6J9u3P3nNynrvLVwVVuTqWJhUkcHFwpQWPWWwtk4hUJ8m",
  "key3": "41mnAQhCFKRMQdwN3GNiUQE2S4ahrfKCAN3Lax9jFurfSZRoraWJaCxJAfShfEWBXyGY1sQhAbNJWoUpCgDMByxN",
  "key4": "2XCvfPEs81rNTMwmaMsjAg1GykVbAuYCSm236y6gS76xRkshuX73jKy5QkhyMMLxacsvZwgSqP4j9CfXVdjJZMSU",
  "key5": "2Ep8Q8dmbC39EfU8MmG3WpbsCmmt1KXBUsTMKfKntVdRjcn8XfiTQwTri1hnGsvaugAdTWv7DeuKKv52uxPwVb9H",
  "key6": "2SzJhJvxrFv2ZWRVFSNB5wJ9DFg2JRPQqrXnb5G3Pq6D2QMb9yJDH7kHuArfKMDofMnP6SAzC8Yeet5eXQk9kuDz",
  "key7": "4iqRE5v4gzanvqTDZiQsC7K2gg4cMYWyiRQojsnqpK4RR5R9va5e3tg9GvGCwaNADo38ZHk7BmxtSi7UKiSU7Mp9",
  "key8": "2d53b6d2vxTH21qWYQTBG1NZcokN9axCS2uNRqR6V6YWBVg59Ch4yVMJL9KcyL3mFMge9juSzRMZFoaSxiiWV6x",
  "key9": "secur6bRyP6SyqG4s7VsnV3GzLcpyQKdpZukMHJmSJV2Py26eh5MPhpirpTcBFfarHxEhuSrMDPSDojrojvnPBk",
  "key10": "2WkteHwRiB1EisRbEbHCkSmACnHMPmSaVdyxDSvU6CMTcjoJxiebJ1s24iEctSoLCPUQFzDVnJQCf7BSjx7BJvtA",
  "key11": "4LZY3wc8TvidxiET7QEkK7HZumXXjJtJF9WUETe2w6rbi5kptv9gcY1w9wR9sQ6d8Q3jjtLprzdy16QLmyqLvrcq",
  "key12": "5cYUt9JqCRJYYp3RgBLtQX9LiEmk9n5TNazfix4qSaUPHMVXy8puPDErGbqQejywTscd9rdMabo6ZbRqEyUjXLAg",
  "key13": "aZ4B7kzpMVynAFALctmt9RqJbfBRGYniyJBLYF6Jzv115a9pcJFpr3dmoJ27D8cBba5UvVUp25Un5SvBGmYtWmw",
  "key14": "28ubSHecojZSY4o11RHeszZ5BWAFBi3gfLYwAnR2YF6WUhKjZWrd5Cbxfqz3T5HUU61PfrCwuj34fcKovBo1NzhS",
  "key15": "2ndthsyysps5gn94Rq8iZtdLvd17z3evChdVcbJdS7uC8e7fdTuQG67kayn78boqKLo6kGhurSF9PmfjoBcCrLTg",
  "key16": "3uYHGgmeEphXXVW5wAnvXX5WLSaZyccEhRvSTX6ter6tTX2EPWtRm9H355Di79WLVjt1GhBa2H1R393Gvr9kNWuj",
  "key17": "5YU9PaHQqiRUo9oJR1ZHsDvnzoHZWGS6RwEbfsD5PGh3CXPcADJwq6AxP52RFoV9nueG2PziGiBi14pSofuxpoBN",
  "key18": "3BqmBNCAxjTeZb9jbsawAwqQCuZCHkFUtZoHYybPqpEVL4wz1gXhVh5owNxYeEyoVmtXdJxB68UoFnVyMoXNNoQo",
  "key19": "5zp5xzwRsdoZLeu7WBZ4xLword3994M5ucbCRWsLYEbnH78rnKX8LLkK52G8DYfZgDbapyczrEBEMzBTv8mjPJn3",
  "key20": "3ve5e8p1QuVtJiXczPDbq3hMAbmnD6NxA3GNZ5FNnZa17d18nmuDupMAdNEqFMHAPn2Jt4xee8ppc3v4yThKHPJ8",
  "key21": "5qBU87YUmEB9Apu7SAMZA8qqkiA9jFz8i9eRxknTLWHnJHMEa2BFryTRsZxdkn5DtjyBdGmTd7Fp9yFSPQimEoSP",
  "key22": "33HLLbiPHC6WfwMFpoESU2GLwHqgGoT56rt8PmX95vNDnTLcNuB5XNYav3LUr2BocLrZFJ4bSrpwvs2SgVc1pfmw",
  "key23": "4Afa6ZVvpeoqSv2LwwV5qSkZhimX2eUNvJL9inZhQu9SWbP46LPsjdWq8mfrzxUPpbtPLavtK9SprhFn8Jm4g2Dw",
  "key24": "FVnq3nBfWe7ZbzCFXnYjYfXPbqK6ffscgSXA6VzcUZqnNJPeLeCfXbjKfuMT27SMVRQgzaS9raRXPBawLECxvFZ",
  "key25": "3DxDksBT6KHYdnJUv88ftg9nYgaJAN5WY98saY3Cc2UJ1Ge9mArJhmrDFJuJq11hy2fbKMSxDXUvw1rHj8afoK26",
  "key26": "2rnSiBjUhdhMGq9NKanhwC53ooE7TfFJQSUnfCqascBRA48LebLLWzERUzp4DqWxCuzaVxiVzDHpwHzFVh4g7AkQ",
  "key27": "5J6L3dzziiG8eKaADM6UQMXcQSLdgnWVZ5PjL4c4xjHpoBeYy2h4sddKZyCJFoMX7QrVifiGsxN1eMQ224mP7BeQ",
  "key28": "5TDPFdAS8HQxVhqpRH6fBgFy8qnHg1tt8fGiAZRdLNzqEvKDXvVPE5jPi69rLzoMeXJ4fStej2kBY25NRiqZjHip",
  "key29": "3qnxsutMCgZCc3TUQE1sr3DN1bp5JDJZnKEnDDC9DvddLDwiVsuQVc1dxQERTrBd98fdd2yFGbMzky74kGP8HLke",
  "key30": "4eg3UP9Z3FAwxVSjwsSgxznzoo8ox9cLRQz8H9fouaJvuqnZNdVsPBQk3pbDGTkho6WmQLpaPM7Bp7BzrQUT1R2V"
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
