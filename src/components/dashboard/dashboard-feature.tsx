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
    "3oTztUfmwbqT5ZQbUbB5mES6P928gHBfy8zwbPv3c5Dstd8j7pUoUGsDS4nwpc8bLgthSGWRHtUA4FGQYmb32HaB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wDz1aipLvpukNdg8BauBu7GUeLny9BhkQ77vcKnHnrHe1n6N34rEuvYVPAx2JE6DcjD3h77aJ3DFTpQ2GJpCGD4",
  "key1": "5jJZ1jKpXpD658UBc1NsX9T23ncATiLfiv3W3xZ8p3HGpWo8GR6VGHZu5i1dHQ6XyDMqZg8tpQ5yL8psWk5h1CTz",
  "key2": "JakFKsYgn8ZQBQp5kpMmRi3GHms9eD6C1hYcHmrmD3rZV8cokHLCRAUVxj25pZU6pJZNgYg3TFjmgzpUXMJ8fgr",
  "key3": "r4hEpJ4YsUzV23uw3v32XwJtKkwd31bn68HSPXbq67st1ojZDBoCwWqRyTRsh89boHrxG92Nn9qy9eqsv8eoQuU",
  "key4": "2hw3DyYPNoscpk1oeJxPrLnxeUUPPTkAjZSP8z1dELFZsWPrBxCBGZQKxUur3RtinPVoe3VzihuMgEWhtEUWfN3e",
  "key5": "3i4PfVZfmA5CQW8QFZTb5m5LaPzbCRkLMaKezg43GLV9YjGHfgDD4VMzSPASL7x8NG7pc6WfXAz7cjogmWvowiQw",
  "key6": "oZhTkYa1d2vmyZENCypkW4XFWmuMNozQdxe4Rpb8WfBbbHjtQeDtA6XDAr8d28HfbJoHoufLiXNPJURw32LCfUh",
  "key7": "2TFqffGHDiAMB6iaexmRFx2wtkhBwV4AM2XejkCXFpRtmYWhK36rjCHDktJTvFbpJpgbnzvdZ51T977iuXQuYASC",
  "key8": "44tBAzSsQkzfuQo9YYx2jwAeS6skidiCbVzF75HgLHE23XqnycDcMA8s1QRZJe7oT7mwtDyCakS4sXi6EqAujJpV",
  "key9": "2Vb8KG1QUEAmvGas8Ni1bNpoTBXoAobk49LxD67mQ7d9Jg665eDoNQVzooYcKpJiyK8BbKFBsyTocSujQWNWn5tZ",
  "key10": "2xGcGb1M198zDWud1Y4Xs9PqQ7rkxdtsLgvr9vU1DrAAAWXiNThi9XapXYGngwVGZ4KX8JmKwnuuTNZaxoKrbBx6",
  "key11": "NACm3JM86tA6A7bchFAh8Y6FeZvneztHpBQPkGUHihU1HfvX4MMEZZ4QUkxx8WHxeTx8kXXei7ug2AaH2JQpVHq",
  "key12": "cB72krsufgNgTahpgrFk5ncC1kFmAHuEZ6FFamDD5DgBUwa7vrLg48MhvSHmgFXMeWywSjt6qFDwW9c3uujHEyp",
  "key13": "2TbRuRdfshDYweEBS6toPct2fB7vTB3hWepACTYDPC5qPK3aC4vvLwqRpW26xjCyQYJNtaeyxRfcVpgv928gctYf",
  "key14": "39SHFch5R8GzbrgzccPcRKZRE1M5hNLJRgKRMQbPHgExGmHAKbUvY4cGwKwMSrw6cnVAqQA7hxHQRhyUKcZKpKRt",
  "key15": "7ReZNveAYPbVorYCN4W4uGbPWHafJZqtsErbusEhBcgHSCue5GBBxie6jf2R59AL4GrHMpFjtGpTe8oaRTGS6rB",
  "key16": "4yRwVPTayaXfJCP2258J2pFoWUYqC8svHChDTZD4c81rNfkozWmN99unRvvNkqbkZ9v3FGXmooqnrfqDTyZEDHwp",
  "key17": "2v63wzNh9ToW9V5N782GVpmBM2dRjyMzMaGGfnTAkugSh4CNkaPr8pPVshLd4RmnjuCsy1S1pLJt3cySPZsbKJFh",
  "key18": "3FMm6V2vSJYg7q5J3ywqKZJZvZMars6eAcN8ZBJWQJZZPJL6zKDeLm4o7GsRD1rEEjNbA6V9pgMygSZ2zsB8jU4A",
  "key19": "66p1tfpXAReT9QiaHCzrgztTAygfKVD8QGZoWfdPe96ds4YgzaTmZmRxXCxBDw4cTv167m98MFDRFVmiFqbc2vVp",
  "key20": "3NZwT9orBjq2H5vpLS8A7AGkrMFBc6cRo1x7QhYojoxJ1JPRm3CP5WcwXJm6YzasdoJXhNZjS6y9pY6Bv3vSPFLg",
  "key21": "2qGA1WgTiY2393ATFGd6aZu36XNM3SdT6Q6FFZ8zwnZu2C6bbfcecajCMdCHSqecbhLNiygwwtyaXVjk6PBMJjS6",
  "key22": "32RSyH3aEYSwticEV6eB9UdRUKuv2iK4WzYVxgWSfrtDqx1M73cGtJCgX9Zt9Ap8v5x7marsk6C2UkehxTWchdVr",
  "key23": "4qbL8Cg3nLrDGropayZdqtkNYzb4mTE1NRVChn2vA4bJQGzLiFfCntLjDzX4fn9opfGzZM6p1NF9xMUWJ82RNfpb",
  "key24": "CDmHvXur6n7LTZit7fpzwWjxVCB6cpMUCbQ75uoGsmPH6Eirkb9JPXdmQkZpyH147qJ8GokG92KZx2XBjYSdaTD",
  "key25": "1GBPSGZgF1vRQsaNaFAUaVodcuXnhuEcCbtYBFDk4R22V1bp8ydr99H8EjBkDuFYqHWTY2r4K5xPqh3FgioMeXX",
  "key26": "3UVjHPULUF6GDiuCKDvCMWRzwLQLGVVwbiT2oRVPihJT1q1iriJ7KV9rmc1nEoRnfCzarkeUJau58sjE3X1KjgwW",
  "key27": "5cuZV2BvmiW5e6JEYzaqJVXb2AKi7F17SD2TSopD2z5RBf44MG7K324zwq1botEtwq6ScJHhXV3TESVpTowM6SYb",
  "key28": "5J2gJtiYYh4bhM5ftiAjap53hWYu9yToyzMD9TKTe6gdxvpgu8P3S4K2qphTHHWaKkksYW9mBj1kE5zb5aycCHJ2",
  "key29": "cdPE2jLL29edmAK9xP3Syn8nfARcSPrFf1VSMZP9UdP7VjsnthpU6wAtNNPMFYHjo7yDQqXhuMdsTnvHLvVvJ9j",
  "key30": "3H4SgM2gPqVHJQqiQtQHboYazyehkHpmwZBUWGSXE3nPp752kE5wqrhV6o7MoH9GYhQjvvMhqDaB43MLTPq8rCNU",
  "key31": "2ijybjVt35giyRRPdwLwVAdhCEmkPCYzgAYjWPwVwBCoaHYUCmtNhvMdHkR1WV3SYm6TkuastY8gjEgo1tUx6yDk",
  "key32": "4We6h4UJChfNzhmC76om4JJiYVhw9ZzsvSVRXr1rAEE1CEF3GTUc2cnq5MLPJWWc3CoosbNZnP6CstBEzEXZDeDL"
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
