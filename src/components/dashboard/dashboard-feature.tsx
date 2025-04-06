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
    "3naYx1rqtRNSbyCtH3UPuGv5i8YBBdAXyqWoabpoSsPNWipzuNU7HanMLCKe3EtKgasBmcwdfosrv3MR5dDEDv7D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vv74qBpzGsMH49vg6wgke9N2nY3eTorsYZoaPS2DHy5UveUkmVBWPFNwWMHqsLzJCDWu2NGiZLfRRJZVbNdGsRk",
  "key1": "CnmLCpxMFXQfiQqmetGAPDHs9XRyujKAS6VZSt8jD2KacufB7nHnsq6hf2nspYFXN15yxjzPwmYQXkPHg1yeHUR",
  "key2": "56TPwiFwvk2GfrYuwkF9cdMxufjRV1y59StUXyv7BMtky6QjHqgZUEX67vMfTkak46XDxukQxZ8NRc3aksT5Sy6v",
  "key3": "3fLeUuKkmbXQWZXGywJJYoSxc7reHLpNM6LzTiR3gaJc55pSuFDXrw3At8RJwzX8venNKwMoirZwXCedhceELC7u",
  "key4": "3mUHShAiERUvYon6gnogsNUkCE2FZ3DWQvzDLioj2hJU6nToWymvT1oZUqS3n5HRTeWtAbLXaXWHZYvsWVgkXwdM",
  "key5": "qGPkmcSPQe2C64eEeSbQ7hih5F1nHuwqoPF4kkxTz9e2nDfyXcVcw1MDPPv2nhVvyoPcjXU1LBEEai4oaxuEfbj",
  "key6": "3mTJUk3RNXQVHQR8haoA7D9knf2bzTfDtePFJNfXvKrqQuW19FoSuEdUKJzmdB3vbu7D7ydRKpy3xUJPdZFKp1ef",
  "key7": "4VJUyB3zx58WxPzU8z6NxumKV8DkTa8niEXmw2cG2dZLofUm9haUvBiUSGz8fBUfCyoDf8aoj628Btf49QVzqUF6",
  "key8": "4tTBGJXMSSLui2eJwAyLuTb461CKmwczqA7j1tDfvAxbyV46VDFR2qZho7rb77iPzGEJuRhJCvU3vTByFYvHJ8TF",
  "key9": "4zuaB6GCkX2DUM23AjsGCD9Zb6Tm7K8z61r3J8cmo66d9ACFF79tqNay2aN7grZpagksPh1GKpTxD2ELXTXoBzmr",
  "key10": "mPTRhvpiqqinnteb6zuafdYJNY9cJBUN5roayqeFa5L4UzqZKycP1McWqGiuLPKwhDxtMWTv5MnpuT8ATm3hwfk",
  "key11": "2rMweSk48HtfcSEnPRm4ZYWyfhoKXgX5yTKmqWLVKrCx8SAQYwsuTChcnnGXSUdEWXq4VbJAe2E7cNEsiKM8bfaz",
  "key12": "5qA2AgbnP8EpQDmy941mVaK6LSJ7YPAsxcLkU8ss45cCMJKKjkYinfuioSYHdkgGM2ttPvi4QvSKrwLbLvFpUck5",
  "key13": "3SvKdsp3UYVu49CeoHmWRjNHFZ2MBWigJyQQy11DbSsMjyYpQRJyWzdpoUwuh1AEiGyGD7y1GiX5ruAXqv8MhprT",
  "key14": "4UshC9yyeY7Aie4Ls4RxdxAGqYi6sTiDS2g3yoZh9k2b2tC7xCkhxfe3hkeviuB9gdtU39VrnU7ENQU17v3J8GBS",
  "key15": "2TFBUeXSvJqJNL59GNuLq94sBvMizVhjDSbfWLFon3ztwv5wV11XUBNweArD2z6Kgh6Ec8UxpVG7ZbkiYpG5XA5q",
  "key16": "2xS2yC3w9zNQhoYV3LgQ7pigG1744yCitbKMPzkpMV7WpwivXpeNTEEYEcP16x2k8bGCUSJ13iQk9N55pofYHd7i",
  "key17": "5KEs99km62mrnTcf3VjWUivZgqpZ6KeLWx1V6Yxn1xXJ3tcrv7QtpcGsap7u8hNCkYz7fZB4vvs7eBN65xa7q9ig",
  "key18": "2Fb9LAsukL2SJNYJp7DP2XpKRtVgd7ZTfabRYwPfg7fJEwMdYvP94YnSKFEy48FyZfH7btvonzqygzKQxLg1J83U",
  "key19": "2yvKePUvZNe4TDoTH34MxNrXytBgduji7M3usXhoFax2gtxNzdRCJQ9vcfLtbe21Go2nAaU91ycLnrapmF8Gk1iq",
  "key20": "3GjZqnXScHqRvaVaLuSW4Fmjybi4S4sFiMTXs7Xb1W4r2PGhzMoXk2tj1hWCef9SkmzrHVcjyb55wnSbdN1J2iaf",
  "key21": "xwdRU6HcN8T3QDTeChnUUKdz1X7ysG5cx61aJNoZvjzreUnRGQLJ4j51qAJ9HSjLWp7KJkdbKbxeFFdLByQUCfS",
  "key22": "38SKZsrUHoS5fJChz6o3P9i2G99hD8Xn144nRTfubZTTyvF6stGpmjKttfJBeGexfwZGkhxU7faxC1ueef6RECBW",
  "key23": "2tBxDC758x4iHPLKb8d2Kk74PAceqYjCxDnQhKg1KFBAwLmEXvXprE4XQaLyWtVd3RP9EoRWkdCB4MHvfEtxNewQ",
  "key24": "TXXgHwocHFxB6oR7LGJc6vPdviRXDrqZgcus8DzWxPprNVnJRK4wMHHuG9LzBWUUzggTkp7rUVa7qPfaw8pLk9M",
  "key25": "59zvNgvDCT53xby9Voaq3JLpkbAyQJy2pPY96NC4E3bfZEBwqeviTNPrz8SKhCXPA8dxQc95bwbG5WTnC1Bp4eBF",
  "key26": "3gsKiQDf2kKXugGvwEGzWD8zoDto7ThqmUcPf4kvp6XJSZqdE6UyuWSbBVGT43DYnjjPfEqEnoyUmN8S2fAWSNKY",
  "key27": "4qotFRHHTnBg9nFCq5DQtQCqbRDFgdqqHto3AK4Sv26EGHjANiE2AgDPDaZbhgyax639rgY611TDGkZ3dKJVw8vn",
  "key28": "oaabMxn7bCFGftdEL8kAqwjabpiVxtm5ikbaEc3UNXTHSdNVckA7afTMJJW5TDTMLkfQKCaBFiEfu2qVXfFwpMf",
  "key29": "5APHb3GojHA3MEKyhY8gez3FRYpDXqaWN34jRC9opJJRXeafkgTPTJX612KZ2UBNUSxGEru39CSEhxQYWhSJiHsW",
  "key30": "3TkoLabLvwEEmvESfoxHW6tyKYUyYMRDEVmb6koP2wADsvfczgE1ghidUH7AM6M8j9F7XKZLNa1NjMjTLUTRJyzd",
  "key31": "5px27kCSs5qiskFkFkK8tvVKPUU63ks3CsNB81qAkhiLtteDqXebK4qsVZrFE6bp3T3q518fehZWFgVi5XYp6ptf",
  "key32": "41mpucZLDkVPKAdGsD9gRmSLggyKsYjL4q1sryaLCHwrsA3CFuthfpG6fiF1X3BGPdzFnpUhLHM94XvKDMVJQ2X2",
  "key33": "37NZtLAnCd5KsU92dac5cSh5nrQeVewjKzgBCzu4jY8hFXj3vntJ2DuoyZ2JxQwUFhnYprurKuC4ZK1F61CNmbY2",
  "key34": "3jGiejzBHgFEF4y4nSms1u54BC1hkgEH3ut56zg2huFNJkZju5aRpkP89BzBZgEDCN6LjJxzyetdFYBJwRyyZkS2",
  "key35": "4MyezqYm4jyJEQxfN4fHUmwuXDSeu8kAhGpkw4MAPpoisEGPThmdskSiEgee4CwvXTS7AfaMP8LAwZx7QnP1R5px",
  "key36": "3jm4pUVx1w3wPcKa5udbUCySihb9QZ4YQKs5gCfm5E8i5ASS3xRSbTqHKQEWUqE444GD27x3MyNK2hjuqaHCdc2Q",
  "key37": "2EqvvPtQwKEHVrtMJLJT7EuT6P8nbtA8HZyGewwdhuaGm5SCDvjqpyShYta45zWHF5f1LnUGxZBcF6HipAdgxv1s",
  "key38": "2EzkdLPubcSAhV7FCj8qbyPoB4QYcF1nDNTrBfn9ZQcjR8rTrUx5gHY6rzTufNRuGWqYRu788jj4bPGzMthHJmks",
  "key39": "39DVsY1VAEwpQu1aJex6JumAWECuWwMcyg6sQVuKHzxbaW1hWGPQtCGUo2o6CmKNecjjZjbH51o8ikFCwKp1VKrw"
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
