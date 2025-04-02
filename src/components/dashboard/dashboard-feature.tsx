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
    "591gdHqDgQmmPEcT9sUR6pCGSjaUJvk4k4JrY719E2v18TuopGUt7yrACaMsq5fWduLngNGE6d7av9TMU5y26i3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f3pd1Lsgi8wJdmT92CSgrizP2ehzStzCGoLWpA9yDqi8Y1hdmTowCNQhsH5vMEzTLJQW7nPYgizfKuSCRSbtGSB",
  "key1": "o43qwuxBVjyDZJdBdSRBMvpkHEnHD22Vyx6x3z1bjyT8MEuVqXKZWoSwLyT6kC16uYyk7nPrMD8vKdYnU9qqEHZ",
  "key2": "rCtNK2yGrzGb43UUVirzDTULnbqGJ8q1oWPZy5j5jiRMLL6TJFnETX4pGb9eMpa7nQKb2LhHNS1Z1GbAcS8byt8",
  "key3": "8FEWX1QoZdSttD5VRNiW72ChH3qw29FwVupxxtCEvk9zN8imbDQ3cUvyrvaRXW9zQ2v9q4QZwGx6yb1kz6hKdAZ",
  "key4": "41bzWYXKjGYmnE8wMVxmNDE6vou7t6QqT3eQovdmczFPx7DyCiyAuKfQupRJYBhetdeHpWRtfWyYaRg8cRyhq9wB",
  "key5": "3X1Fh44cxhHmc44DmjdhzrSibaHVkq5paG3Wz67qQ7oyLnCQ2dRb4rYCwffcfjc5QmsFqeR48zNjKbdNmxsmCGJT",
  "key6": "56vuMiFZxZde2Jmkxecrmx8X2s4uRav32oZTURwk3Xt2NMfRnfiYeCSi4zSZEKwn62aZwD6Etpb6P5q2WWRGpNKN",
  "key7": "2sLBKaj4NLpRQn4tKmevbU5gL73jKJipa6Wvk5eM9HD3ye5tEhSoSFX3BWZp62eNYQVbjDcWh4ukEJcStH75wZVw",
  "key8": "2fWK2oUkV3nSwE1f8rZB2nmPsTF8HqUbyewpMparkQjSgPxFzdsHopXazjfSzh8VYFmqL3t4Kgg6rEac4ucCwJ7m",
  "key9": "jD7ecfgk3J8QAQEj7DZncddNMwUrc4UBa9qaBMHVpuyaUXov44cALMVLvJw6KeYVK6sHcQm99Q4yjEfd5h4DxQd",
  "key10": "cWVPxVdUpsKAA9TE5RvCpUuJ8r4gqNU8pZEPyc7QZomanVi6eSZkE5UwmjPDJNSDUZqjRofVfTCWvnPaWenNGmm",
  "key11": "66P9vXAZQn6LAYDvHnkviFUzXCcjpqD17jKFMWbRxDCmekxFDgf4GSrhfxZd2rHcS6DXsyrhx9QGWaZ3LN8Luy6E",
  "key12": "3tvd86ycNajiovKuWV8jTUcSWUSZ5b1G9kYGGdZRk9dcanDFK8NexpjeBd71XPFknHRDzvQaPKRrSojfeUMhJjoR",
  "key13": "5phLgRp488tgD17kYtoMTAER3ymnsXEHtQUbURYhjN2tviHUfQAX8RwddUtcsnHJnWEQGHuaqdYEsM1oX48bwbPw",
  "key14": "mED5RpV47ix7C26T6DPdcVznrze7rsCpA3M17Fv2zKy1RvpmJmTFPpSxMxLijfkvrD5DkLXRY57fvzgeK38Tmfj",
  "key15": "NPTbt2L6eVZBzkvyDhp12JDDB6iXisGCCtVoyEZnY5bUi45JP9Swsrv1Fh7typ1qCebSLZzY7YgRfxxSDFZMKC4",
  "key16": "5cyAPM7vMtmVdf1zY1hkvAWZZ7nWC3e7BiZ869gn1fbuZFuiQV1wtHNP6TgTBTv3oaQb5F3UNcXP4vjAV7tCkHkQ",
  "key17": "5W9ncazpG5h3UE2zP68kwKKApbm3hP78b2DTuCbhRaBSqY4JaBbbFubfPA2K9noQxupygenk945Eww4D3QqgxyMR",
  "key18": "sqbuingwbHavDaPk1rjo1JB3tecEKz9nmBCMeJEcTy5pHtFMdHPeAx2j5Ay5NWKAG5XKpyJETgoQE5NoosTk5M6",
  "key19": "5cYMCJkfSX33XbVK7mR6oyiYTCPDrup1HkF1nDe5m9F5DXqLDW48CzGGY5eF7sR97TU7TnjdX2K1hAtwwjZXbEBt",
  "key20": "3La32KzMXkFfJoNvax5MHwjJcyJB1PTgJZ9EPCky1B2r5QYgwKy8SvGaCZ7zgrbr6rwgxkbo51YhpfHvkp81oa3n",
  "key21": "p7SwztN86gMD9Hg63bjY4aJ32XmmaUYf2jevSUjG5kiF4EhCXxotfvP8arqrFLJrhY4aoneTCQDY3DTG2HMoTnS",
  "key22": "3Zi8ccqpuRYMAmLjjXe9qXL3pZnvEWMXbZG4yJqQNy3VM6KuRQTMaWhRH4WYKwYtQHCnJFvXbR6Ve8YazyrUQkBT",
  "key23": "2C9bh7BxDg3H8zwuHvcd13c6Ku1ApxoPJZu5NMaYfed7gj2mt1SyBfKh6M5V44818EKaPiAKujSs1QFCmJc5dvXV",
  "key24": "5GvnkX2UioKyMudkw4868Tv6dKYbwPwtUU1Kjtz5bfuywf9tRQLPDBRWLjbQwUmx4dynzTB8CT685FvcbnXC9YZz",
  "key25": "2dWaZYZwTHVWuxtG4VhtiRY4Hrzffov9rN2E5GbpSJs9KpNZn7RMfXuSmBwEtoheeDetck4Bf6rWPb3hw5tDrUm7",
  "key26": "2Uj1Cesdc9HKg1KhonL1pygjwHbi5KQpYK6Dv8qM2AEQ9Ftc4eCz9E93q81LbkuR87JUrXdswatqCDYCra36aCxW",
  "key27": "2DiCFPre9W84trCB3CjeGUQoEMSovXhjv5NwhEXL2rMevQ8DdzEQF9zXtVETH2cvvgbRUMP6gWGxuF65H48R5XkF"
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
