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
    "49rUXCWjmi3Rwg21WN23M4VgHXQvWEEFGgVJVTHdbWC1eg52FN3ijZnGnSpdw3echawyV7cCn4QBf38ZAz2yUQms"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65zjrFByrm5pkAkUR6bYoytXXCSWAz5YwoQUEo8JzQVQh3h6UvoxPMW4JqzVZhxtce6RbGSUFurQZnX8cHZNgbV3",
  "key1": "dDukjEUGE4aZgtaZvi9Vyowb82AtSWCt5RSEz2La9B5kjsyxkmPBw2PF3XZpzXSaj3FwW3dNNyXe8fXXT6VQczZ",
  "key2": "2aKczSRUKiuqZG2TkDdCCrUTYk6bfdbJYbV8Xryb5x8CuxuMV17vyACbKMWwVMJCfPwPWacgu4xS7eB9TA8ByG24",
  "key3": "4HSCBzxWUcUQBe2HscaNhij2PGNstioccxVedDyS2vCEbuqFa85PCN9Bf7yULu9zT1EgngdCL6xEesCP5BNoDavA",
  "key4": "2MVH4sxXcfg7ECSCQtBbQMgdAfBXQDrmS4tQwygZEE7JzHaaCdfsN7VuL3gi7jAk3hrgkdJpGCJiHM97xgatdjnd",
  "key5": "3nBtesK5EycfVnD1oEZxB8QLBuqDH5bcQ22FZXbhq2ZcPtsQciYrygpxG7ggDAUW31Tw8rBQiBKuhznn2qBN1dvj",
  "key6": "3UEJL1oW8mEsEWYHykCaGbZgRhNGDZHGAeaJFtVPyevnqhKdCCYWcdH2e3oCv2BqiCWFqYXNJNPyi1HwyAukQwDt",
  "key7": "3s7yfYXaaRNU7P8yYmAb7P3z8XZwHDvrXVdCq7HDCkKessAUNaNCZ6GVjvBLAdBCJZJZXEKfSuHmo9oEArrQFX9N",
  "key8": "22TnDymLXCrZFcZd2sVLGuAxsQ2jtP2EC9Hytx6YbUiNxg3cPxD4iwe4KcAqPfkHPtLX3bqv2T6nNyJvjGjfuj5m",
  "key9": "323k4jiuKHGC3dhUvgzcYc7xnFtfgNrA4ETiy2Drx1qQ6Ax14xZGDLXMmsjMqAkUZXC4RCV5EB8isC5JFxaPTz2H",
  "key10": "2KN65K2fyChi6BMWTp5gCzML7DKjH2NdGhX7RiM83DEKKEMgESNY4vXrZM4LWQ5k62F8KgB7MZ1MRBqNyU8nb7K7",
  "key11": "2DqYPeT8cutDJCbnZuWE5ERfrTjRSJEjw6qupacfYL2rVEFMitoofmr8b4FKdhSNncpXdbvhGoNPks2LQBpd8XBE",
  "key12": "3GvmjyLVBfwkuBErj2TiChApAiSusfeNEbJo9JrPrjbdyJtwAgkn9FNzAztj5h7CpzrJDtVUwXeP2RZ8ipd7Sthk",
  "key13": "3FnybiPxSNHQqExCjBBTAaVB8FT5GB8QRMpKS81RvusrToanTCyXfa7jwFZaU3ccEXs9a9xHJjMcVKPYyXvGz9zJ",
  "key14": "5FPiq2tpoybQhU2HXMyA6ybEBg65P3pBMAuD7c1bN65JBDLsq4DZDXhazUNuAdgtNEfSdKLqEAADS7YDSddCa9x2",
  "key15": "286pgsvr185jhb9PVDQUKTmuRLSL2RUxxysmZfKZCoV4yxJmf5jUYRTrsa6oz86EeweHrKME3J7dPYwDH58x84HB",
  "key16": "4hgG2wAXofXdimVqjgmCxTwP7bLcHSE8cgNjsePtKnN8wDVDtU8FbLYqbGz9VQKAaxHGqmh2gjLehdyMNXcFVcNY",
  "key17": "5RuhjgdYDtySUTegh53ogsJmoJQ2ndHYx9fMDY4PHXuSVAAmrRHHthWxDNJSJrdakumjj4RW9edBwVW69BL9Q3Rv",
  "key18": "EfxNi9qGkfMU5AWk176gWZAQf84NgMHAbbQELiJGnZwzn9hyVvjUTzyEJoRGaexMSv5FaczKTMKuiTJDr9JiWqq",
  "key19": "2xtsmC1KhnEzJRpb3uxcGeqcZBK5uGsrwoJfSXJ3WwWjPeLsykAZQ9jnD2DtrsaR6MsvSkQQNaBfvP6GLFF6CDvF",
  "key20": "31iy6bVUAF5DFF2nmEqTpPFA4VNptznT2CuAP83ZkGkSdTYdSphAzP7wNYQ3AdDJJAuPiQARxvBPF57HAtYF16Dr",
  "key21": "58ZVyPjXPcXGWEzK3Z4RbSR3M9EdELiSGYeyp3mjv69ujY7T4i6Dy3PYSrsPKoU89CsrA4eTfHMCPaFCdSdz9N2R",
  "key22": "35tnfkJr3hVsL8NfsoKSFS7MZ1FTTGaG6TpT7HwMrTkdLzszaGnmrYdcqU6qoWGp2dQ75eTyaCU2s1qK5G4qsw9S",
  "key23": "4nJF8QSFUT6sSd8wexNBNXw4C97y3g5mQZvYnh9rKmrs8CMw8HNzLVfTb2ZS8pLmQcshsx5vNSiaKbjYBEG9993J",
  "key24": "44RuYzivfYM7jnzP9bVeJUss4KYJbQep77wBBe9Ak4NApc3Gq618WiqvBGRRi9P1SzXQQcw3kUcCp6164NUCrwz4",
  "key25": "4LNEfAENZxMG2mM7wF79NMnz8ZdNezY8JnTbXUuxBT2rrVXzLTCr5h7QaN5eKvPAath3sk39miRSPiJD6aajx6jH",
  "key26": "3EbDjUiDUKRg9ZWNAEcoxEGyjKVz8MZAWEHMzQNBnyaESHudPyWh5og2Tuh3U4WdiSuqEr8ofkgee7TY7rBG51Y7",
  "key27": "R8p588Gbc7vmzduq7gjxRerfARVxc35rjzToKKkKas1gkJmPqCAzkwk4cPccCweqkXiLBJfGcN6CWeRcrGVirG8",
  "key28": "35cjGPdpSyp87CVhpjaJjBiSBCTCZEcibB2Ki96p8c9FoVtUoHTzQzNVbvRkLDqUR4VxHPNzxBvgKeH9zxVJ7KyC",
  "key29": "42ehpHigPyHEMGMq39MJU4FzNZagDMkUW2QzmS4iuYhPVoebqjHWkT9u2Gg2yzsDhyqJiaY7Y4HwuYyMVfPYZ5gk",
  "key30": "28R9BG3cLYes5SfagoJrGdEs8aM26xaEjHuQVb8GfSeuSrbZD7stPdp8Jf4v9CFJS6zzsZxEKtUnbS6UTPHwDmjV",
  "key31": "34CafvTCYRYwuFMxy4dyUhxt29Fm53STLxzYUEGUfxmm4WB3BxAwALpEJtX6W2MwG6pAKUJr2WwH8WgHhsRCG2Lb",
  "key32": "mCjtGqg99wPdrbHeG7wHc1TpTL1bMaBD2c6PYzQgMtHSstdwpnhXy6n4hM1m7rnkpcKiPVEPy9nJmYr8Ln6oAgf"
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
