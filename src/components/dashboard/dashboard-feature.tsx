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
    "HGpHokUQ5DjhmcRuM5jHMR5Pw9xsU9M7T8f1ivC7yFZ22YpVkGZ9PTJfQdkPUi53cupV8dDbBF7PcS8xPasmrNC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V64wtfaHon3BDdNv498dhhqeexkTsc4caAuLgYN9fSAHxC1pF7ffUJcAWfCfmKSnygwtRfUedGsmaHPFpZ9uaEs",
  "key1": "5DRPGtkmFAzsGVGLic1JoWZtNWwuhvhPeZeNbZjLTgVyqe1MT3LcRA7iXoc7kP9aUUkxY3DVsb1zrVka9q8eUchD",
  "key2": "tquPcMiQsSfbVNHv4NsZL9wLDjGuwcXardP1kdVUJcd76rX7qSHyP3PNazVWzJ2gP19NoHqUBos2qMsdznxynBK",
  "key3": "5btmkXoHigswv8wdkShv3kwHVpk6swn6LKXXfeARJwvkoVvbfy2Cvo2ig6VkMqR3xQXuYdCVpeRBYHg2a12yL8cH",
  "key4": "3vm5AMfEL5K5M3v9bqGYH7bVS13DW3h5B8K8sVhrRhsiTAfimQAq9giaj6Vhuj8Ui6d1adMWqroZBotzzHnLp8qV",
  "key5": "4FDxFj5rA8SzmWFGttVLNvizpsc6E3sqfd8URDBGgDBioeoi5N6Ak3C5VRvaGrZ5wefAfPdmtKKLXkpV1pr2PA92",
  "key6": "jKU2B2L6DQ8vno58C9xLN4p7vnATUojfWeYabvrjZkn8GSjVPHwYErd6w4L6CatitUfcMmiPLCrcRDWsXgPV3Ac",
  "key7": "hTiMQJUW8dw3SrMi5baKBG466taRZzxR9DwrLt9ZnsdNguV2gRgKQjxQqgqUVCRUVEZroDYUjzTmwtspevhhmUf",
  "key8": "vZsxkw9E9sAn5EhH5ACEk1T4jZkAPPNzPxCfr86duFUuyh5xy5DqTFNzLM3KQbPHEJW2PDAHQ3ngrxG5Qk6Gqa8",
  "key9": "2BpywRXVcGTTyPTihY2hqPBqucR6fTSVipmTPaC3px3vwS5wHhtPtTrLWTS6gw8doBaudLWSK1kvqHm9JYr9qgeY",
  "key10": "4XLWkiyJeP4vByvRYXgvefK6b72KQMnEE1r7wF6SUSkziApyhUKXxisuhcVeEGUCgRYURDVieWuWRYCpEZa9idTT",
  "key11": "3RGAVTPtTz5DiDy5hV7PJXLD7pbvkJRmJF1s7MhZWYxWMyzcodJ6MzBqhhUFaxChvj9Vj2ug8NufLv3xbhGUEdga",
  "key12": "49Z5rJKW4PYQgVcyTnWokyDddjAyd8xK4k5BGF5cvXwVh4brtcVYRTYkKtMxZQ6PQ1BCBtTvfyBWmPz8nz3SnpQw",
  "key13": "2Tw4sqTQHMXSJvyh3dMXWQ2DmJ3Hr8nxgdDEveh45X7fWmKzutofZwQNTAy8Byou1C79jP83jzPuxJhCvUFPVYwg",
  "key14": "2mr2qVUAKdUaWXiHRR9fRUhrdmz9iy4hbmGFvGNCMfVvRPy6zX7tKEUFLgdQwHm8mvggJp5HTk3VkbFtmYtweUcV",
  "key15": "631U2f9jHuMonFpFMwoeYvCVMCvPtAa8HbCTBAFsgeK24P9HmHbYB5cBnsmuqj6kHkPV9ENxFvRXznamx137m3so",
  "key16": "ynF5n5TXiv37sWMWpjJo8UaHz8CUb5snZ1zAbrT1txYV69nrmZSPnfaUtAQ2jtYfdWMvtA1RLXaaedWaCcJQu8V",
  "key17": "5XPcpgkuxcVxwqxbBvWSdS7XwDaqgy437SDoTSPb9qXSPJ5ASyvmMn7uTGkXbCD6yyNJteMYh9Rxb3dAtHVNsLgZ",
  "key18": "3w217Ru9JDzx9eHENEoMpohC2wgNYg2xpExJDHcixW37Baisi7XV5WKBqm7JMqr5ZsUuE2ZKz34QbLLpVD7RrZAC",
  "key19": "5NEjkYPgrSCRSqnFJGACNcBoskHYQEuvrH3Zqts6Zs4YoXUxi7qGCzz7YvYFZKWXTaFQ6K8fsZV3u4iZ6eLWmPXf",
  "key20": "4DyBkKTaEQCLMGegd2BEQrcGK3vnctNK8QYrCYosmuJktS4FCXCPTkMApSMqRjb14cw9wgeVYfvT4c2SjgBCm8Mz",
  "key21": "fHmMVC56PuvezEXSm3mnavgbpFn7GyWvTS3LhKZWbkTik7bJd9k1anJzF75jrG8mS7f2tQe6E58EQa8RBDtPAdm",
  "key22": "WGJXBFXGtwJVjYnfMYKrVdFJ6TiJLVjHE3cD9tNX1j7cEjJc1UF9usQGe3qxtLRrPzUqZWbMhYMmZAMcbRvXDsD",
  "key23": "5nSXqQN8uXYfFvhn3ms718RGpVLLYPfXpUPBPxWLrU9bMtUpy71AWuyGHqBc2fZNAHVoFf5oW9y4vRn19wUkWfrf",
  "key24": "3jDnPbeBYfyf6Ukf77UzmkGtcrNzA7ecucBvq9fnc4mHVq5e3PScuyRDNBpEaKiGBBBz1iBYNjcztyW9oT2Vusz2",
  "key25": "5UP1LQQtXXhi2gJSQjLDqc9bGpFYXvjSfdVUit3amfT3mcifiL4cxjmbqJ86P9AYUfaMNHdUFTkQz8kkV7T4JpWu",
  "key26": "5gfhbcezXhKciXWXNKZ7gNDkHjLU8SwK32c3i2JreRVCgm5w2i6p7iz8QtDQZXD7hc1qygFXRNFyAFomhs3Rk4FV",
  "key27": "3JRjKonGKGJhFUNtUdHX3CdRYNgfUiMeSrjGfDWtkiEEQTZvTy4mmgFEcahVon1L9J6QSDBhf14Zrq7LDu2CVzMW",
  "key28": "9RAmDijhCgQ8Eru1AfrRRAUpKS6kY2oFUz9nz2JjHh3APjSGM3Qh9iPq2yGQpVJNn4FWjXm7mkqgt6Lexs3JurS",
  "key29": "3muZni6iGYChPDZA2UStsGEnmUw2RLTHtsGzGq1kYKpzM8cQjqTLfDY9DoFtcQJukXfJr9XBkbxakYxmj2JQqM12",
  "key30": "5VF94yTjLrcXMjkjkt5nDUypdAfHbHpZxAiFJx9zAD6TBuDHiVMxJi2BBUHDMY2Cs9wjdhnqk3dyewL8UGRTTPjR",
  "key31": "q9pE4zs9svMbiEKZghTyTEMpCDULc7j5xtTxLf2wx5h7udLKoz4ksSvXgzVF5CFNTxMtGQundka3s2KRwPrghn8",
  "key32": "DDeQDE6T88XHbrQYYxUpd48yXyFSvNBicw3oANdfsvm2yoEfwDisGe6VGPU4jyaXrhsYk32uj1P7RU13r1p1DMT"
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
