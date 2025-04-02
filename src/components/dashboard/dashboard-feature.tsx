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
    "5k4M4LSPWRAGEGHDzYXiJDTAQK64UhjGNKBi34LGqfVrZtX7MGZHiWaHC8QBGV1Gmx5epjYy27P4oPgAs2PAen3s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W3yUgB5eYoNGLA8hgHihB6RZMjBBssgWyoS4QwLL7WtUpbJnnRQpq3oG9S1nSj63GNSJ1zExLNmrzzm64FWhQEG",
  "key1": "58gE5e66dLcN42vow68N2FkwEqpFQjokN8objNFKwBEsBnG6QzcUpy1iHxUvUGwNXrsYcUWwPSc7rif9W4i8p7va",
  "key2": "4gEfLz9GCNEv5rDAqfaQ8r5EbRAKEfDU51o8AVP9o1fyFMQgmG1Tfn4fUYQynwTtKfSWScQcRgEWEDaiR5YtvcQx",
  "key3": "YnxmKoaut4HRkQXsgS7p4YgnuwLxMocBLqBtYpraY5pydzTFPSQsakXaZScq6q6kz6K1YnbALwp4BXBXPKLQSZD",
  "key4": "5KhzScNYPawNYwVBMvDrT8RzbWeKM6G7E17mUbrGsVAJCJhGojWJNua1BSEFnyrEM5WXLWtgbEU9uJR2wWPyJUxz",
  "key5": "4P14jfNVBTwxPk3RUoWboBN1yi8v4nNvckk3cYNPgTWLFnwfopzqfGfyaoktd19NTQJjg18KZecjxRpXFd1h6QpY",
  "key6": "5Dsj1qHgAg59FoKpEQcrFsHA5aNJDZBHGccWWTrXFZpLCzsn1FUTj89EDKUUf8du7CWrYEeVvSR7Y2UNDoLPM4bY",
  "key7": "66d7FC3ipKju8Zd8Tdy1hbXknPeWKcbWZfNJXqQop6VFqFTZbmbJb7egMA9s2D7bdZ8Ej4QGNdHY74423qPxCo34",
  "key8": "55xkWEdoyW5XSyFQFYAMxGU8cjxvCzmK1M4qD69SF9Va1RG6d71qFVdbTUyuMTvm5QRjv7zjhxWwLrMR3uCx2ouK",
  "key9": "3RZBmfLaEi1UcTr4E4tA9Yj1pLrBXSbLm9XRBt5HtPNHutkzWtwZNk6NgaLhbE7UP1GDByJyGXhzKxzM8Xu3ENfB",
  "key10": "5wCMwc6aHoVd9JbpVXMcSihE96aQn52TNcBYHkQZpbEbsFT2U2wyA3yPTmMUX6uE4bYFXmpucc2vrV6cWiJfv1ty",
  "key11": "wrftPxDtoiorsD45VfkQTTUDBqrnyvdpodfULp8QvfHuDsmJpPxfgv1uVFcZmpXUymAdcD37wY3g8ZJC4342no5",
  "key12": "b8TfksPcQJfHLpqxuK5g8hvFPyh9hjcc5CxPj2UtYZ18HiZbZQG2B8zNbomUPRRobyiHSBUBshdme8Cy443u6ZR",
  "key13": "2EgE5foUXhRMmsMPY5SKR8SrT4yW6srEn3DzGWrhDFqmgqPtPCdsdVitQy3Qh1WWdEneGicsoxp4FBUqQwo1HH6V",
  "key14": "24ZNw191A62YtCpy9Xfn8WvZoFbbQfU3K9L1ktSs98J92rks7MSguK4PR9ziSGm9CUeszHAgx5AyTEUEwccz8xLS",
  "key15": "4DbpiHf8FThFNbZojPXiSah97Yzx1yxRfBfNxVkkzopHktqy3RUTM294BQdELGZfyK2fwqJCUideM4sX4mN4wozS",
  "key16": "43hgsRjKoQCW8Xin9aGU4BgGGmYJP21Xauraz4po8nRKSAbwVRQAACbiiH72QETU5nadoCGhScxdsjHncjUZthnz",
  "key17": "GMYM4syeCMpREaFQ2ksuvoJbo3rCBgnKg4gZrwCgUrPY5Xx8gusHZy31bEaYZKZpSJakWMmzVGS1Uyi6u9mJo4Z",
  "key18": "HmQ2fF58x6oVYysRPv14jQFykYMe4FdiDCbKvJ5JXAJkZVns2JGVCKu91w9x1ipvqykHqUCPnPNdAThmhR4AynV",
  "key19": "31f6YE33etA8UuspcteUwqsxJc2Qe9HKF5cV5g8fyM52tssYoMsQcQbiwdWopRCFC5uUhDQZg41CyNn7ouPQr8A9",
  "key20": "5H4yxy8yLa9mARHadnWYs9cJZesrUknuz1Srrya9BxPn8gLuCvLtCgMkZ3oUGG2NiredKFdGPD17C1kog6Y8YKUN",
  "key21": "65FFATppKaBreMdjQ7Mn7kLFW3w9kmLCP7Th1zCWSzbCQpi2o9v4L4nFvwA9GCE4kihRNTg5eAXr5m24uoJLzpSZ",
  "key22": "u5ZydFd4sbYBBduBNyPHc3aikVGwiFMvhKu53RyzoF3Nq6GXEiKZacMLUqfcFScW5ES2uGv5NiaEyiZh2dRbkxq",
  "key23": "2EevyiUTLST3bS1u5mbM863mWsyWZW76wyxR8JtRdznxz4bnsvPJMMXvLcy3qGmwkwGxwtL5Uz8ncsXjMyMYa6AY",
  "key24": "67ECN9Mnw7xhY6PHNXFtic2XxCAffCTCRwaCRNKr2bHEb4xRyQ3ionHcs37fxdVkahDpWGZEqb3seo16zSTddV2P",
  "key25": "4ra69q76jdGKqxVdCCrDMCFKAhuoDiudwRGijPhp4AXH1HpQ4ucYbR5NJKLfhEnizGzui85dPmrmyL4R8rToJRJW",
  "key26": "2MHQcyF2BYHwYgkgqadFo7e6h29dL5Mnfqt7KNpp7uJ7FW35vLpAUiuJ8siCRH4Lgy8oh3zjWVG3wjtAZuG291U4",
  "key27": "NaZSS7TuEHESGpTeqbAEsCg7bbinxotNUHFEADYMGygxcNmn7VsRLuDfC2C3TNgN8Ybc4PCB63NRHy4QLyoG5cK",
  "key28": "4rB6eAFrcbs9PumkcMYcwrDyptR8heD28b35tyWhmsm9hL41UtPKmATG7FVuSXJZC8sJ5kqcxWc5aWS9voSYg8G7",
  "key29": "4KmxsU5vE42B7zctioGc4LxqSmTwegBJJSwwJ5kN3d42SSyhFrXcdDcA1thrCjucDhxQ8moECvopjp7hk8J1S5ZK",
  "key30": "3KV1hucisbdwRXbedcvpu9ps7zGBBKL3RU4GxWRPLQwDCMY96aCWjA5LG73Sh3FvTtjhUrGm3eMyUuW4qZF48iDJ",
  "key31": "QXDLrdEaZ7ZMc9iesPe4CmbRpzTw5cybfxTnrUpu4nFeBfa61NJG4GGyPo8BR1u3hV62toMELZEsXvS7DcwbCWo",
  "key32": "i8L2yoiV9JYcSLU7kntHy8NYv6okdg1bSwDDmteUD4dDCgcMHapYbG4zKcYBVmLKGzb2rXd1RBcytvAQntfKH7e",
  "key33": "CZVGMbni7g5rBmmiK3uzPEuBzGcXZJLQrJPZ8Gohjmxk7WutxRjKo22NKusWDxSRhjroyVsUYVcn72k3mba2FzF",
  "key34": "4kcBpUdNuD3ebEqEu1iCWoc5nQ69aszZaGcP1prGBGJCJD67SkUUE8pCCvefUxtmnFZ2ZafPLU7zidvsgszVTTn3",
  "key35": "5tn3UpRv1Uzq5JJL5DHAZcdrem9EHxjuV4sFMKfS6SpxcmcKQi46mmN8rajuMHRkiyUbjfuzr3wGjTgQzKGxoTU1",
  "key36": "4PBntYwnrnBu841rcexHwWbQR1RkoREqpN7foww6GNMcYNi4Wd6CDrdVACbXvT1Ne53pSRCfpgVa4xD7mBW6Kvqu",
  "key37": "3FNWF6fC8oeAXvi3WLWJxQY8n1fwH3x9nANuMbTxcdQnyy6ChxCGPqPmkiXEfkfx5fTipeDqd6BFnfYF7CcSUpQu",
  "key38": "4eGoD7oHKUpDLAA1T7UoypxmJ4fki9fErruj28H1XKn53eYaeMovZxFeeabAzfoMpLy9ob1AgZXDtSu3UTe9yxjs"
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
