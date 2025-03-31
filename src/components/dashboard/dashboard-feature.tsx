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
    "5qqFP1V3AguDdEcmdkmyVg5KCwe31tW5b6YZdvov8kVcKkhjCkpjz7otq6SWsLUgQ8eKHYtTix9ULTRyyyS3hXrF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nQHzGiAyMfoFgDdjQKbbZ79SjXcRjGPfcbVdfxPMVSmsTMbsuHZGXeqxeQ81bSNqk7cC5oXHHWA1VpeTZXUyrvT",
  "key1": "3vEi5CSLduBpAmiR5Ae41Ai3b852DXK7jZPvR5No3DUtNBM9BmuwNj6zwosWWKaLMQpabgYv3L7JH9XCbbiDWTxJ",
  "key2": "hNuz2WRrHYnoMYsNvaAWKZUHJAmUjkSV4USP1YtJV7Yp8PKbBKJq5FFT7yKjyPfnFU6TChvf9Q83r3N53xbP296",
  "key3": "52NkkLA2Ku43zBBh7cJRRcFtqiry8QU9bjZtuPwJan2eHvef6QdEaNQeEREixvVpAhRnP2hikXbHNdoPrbjxhSYV",
  "key4": "3KehszmNkdt7uctK8BvanHCcBfqbMULbHge8HJWSjBdPzkTFvJ2QvstaMuFxTQJtsDsCxFc8SzQfLoEVpEc8Rag4",
  "key5": "5tr3jCLubSZPCdtdjegDojGB7GGTbzw6vnYtMuNJJ4ekzRXGmiEXPyjaFrUvosdzrt88DMCnrBHEvnHfd982tTLJ",
  "key6": "3tF9cL9jGVt5BAUyATkLM6aYtzSZ42tgyqXgUFxB48wVn7xyhppdVQjzQRbTmFUidtrfMsyezCtxQPVvLCCtzPEF",
  "key7": "4QUkGrpY6re3MxowxDZ5KbWmSuxXUvg1eZuVcEK6hBPRTsrF8y7EapLvScUCcoAYrSh4TneDQ9FjspMWqdYaFRzB",
  "key8": "oTFtoEV6AutfPLty5qFk6Crbhigo4u78kM8NmMsaP8Xi7CG51N453HYeRDPudBL59H9e2XL9sn9d7ESgAkS4Gin",
  "key9": "y3KLppAgvifu4Pei44T4jNrkkGayuMUsmyTc4V6DE9ArFxncNnX9hD8YsKNZYai6S6BqVU3VVDBFjQm2Ca9T9de",
  "key10": "yHVH7fJDs7JdNzgdL6mcaRCNwBVHJGFk8QV3BhRZbe7SjSYHd5nXobt1jfETp8zCBndmZH6utSAT5RbgQ9xvrRq",
  "key11": "278RrUCtgGAntsGYbsCwaBrJuBovW3YdHPV9vwgSKWVT3mfbQ4vm6C6JosFKfxMFhv8oQiLHqe9U6CfzGYwCnhbw",
  "key12": "5JLiSpHgoSnrV1wxMBMDiNYtseUcWTyd1arEcQQ1y24YM51SXhxhmzMRFtphp3z6VuhhhLnU53nKHTBXc2vAnbGE",
  "key13": "3URPTLzUH3bthpLFBYohoWvXBAz6rKbDyRUJQEMvxhKqVb2frcKePzbwy64EkfjkTAJP8MEcryL9D5EugitZGjAL",
  "key14": "a7b7UQdSLbFarz2bHR9H6xwCPacVebz3VkqXmtJ72ddBQdDxcenRfDRFXzLmuDAgWdkjN9sf89tB7g7ZWtqKFLx",
  "key15": "3MDqMfN6dycDd6dg4wazadsPpzJJVoDRsawsKLzA6KxAg9NDiT9izpxUwE6mGk6VxH8djrVAMZyxJFLagHvuRDC4",
  "key16": "3wL55YfhvKTWxFnt38SYqLNXM8B6Bhg5X7zuKQj6LYQXj7ZnmS4BbN67WGdrxDuARYFSwPDxaS24PRobjreeryP3",
  "key17": "2wtby38YemcC4SirG4XtmR6jQTb4ZDZJkWhCbuozjEFVDDTzndUwJ7y4rFyuLzP9dwVAeNtTDMSvkwqfKHQnPP4A",
  "key18": "3H2R53LhtQpuHeVd4BQzD9vpEPqQarhjV9Wp61KYdnma2dpuHxNyKQHNhyZvyM6nMLuViXjvhThdyYfpMWmru7uJ",
  "key19": "5SfcmUn8cwzoGeQTWBbph2nwN7VESGQ73t7uPEr6o7Q7LCYpF2Q2MYARwKxfR21XfNBKXPUY2x34drPuFRd4CW98",
  "key20": "43BRpgTGFKuzSuLiP9oYWstues2W2nvYi4jSAdDjHLfrJoer7912YHTLaYF85cqGmCDzuw2DkUoDYdKBRnEgWq6w",
  "key21": "3K5VYUN8bB2MSw8rKwW7DSUuvBmf5ErnQaYf2UWbF1iEAyjyPMV34ZaR2DcVGaae5jYtJEse9MbzX23my9aMexqi",
  "key22": "3xMJyhKKXiMBLnhJbvgwx4tgQBavYYpNVeaM7TZdFpdJkC8hamQftXKBA7qgTAH3Nys4HYxWtqL6KV3Pp6ZiTY7y",
  "key23": "5K2dtYhpeSyp9wuSMdHQW5t8xDwHyydh1Pi14ZG9rKvqs5W3bxNjy8qEcZq8hUZN9yQCgF58juzfrxA57YitasSU",
  "key24": "29o7zSe62sutFQvykcu1dknrLo43iCRj1TvChUu2ncec8yhwTvTWsbA7WRVyLgWHCYgSXKa3xeSM7CTp2UqCTjWd",
  "key25": "2gZ9nEsHFNj3ME5C9pccncDDUuXzEry1EinNMBG6xBNjfienonYEhL5n8VgWLHeh9bnJfkGvknx9Ai9akpJ28kKp",
  "key26": "2fb1eLSQtoSWpCeBS68AgseLuBPF9wgvTPbuM9QfhMpKKwgdAUtiybpzH9D8X7G7B9SQPYGzhSyxCdEELN14X53K",
  "key27": "Q3q535YA5wHsiRK6mNuc4Lwv5poaM4oRMTCvbtfGEZZfQmfAPKzvamVGVBPza4qfXLVJWBUdLEnWmFpLzod2PjG",
  "key28": "49du1W6uqXSaiNAjDKUtqXpgDL8rvFxi6itZQ5kBMDkSnr46aEacZxzuxB5XPNHXnbTHXSBb9penndhAycfEWDGV",
  "key29": "4SdvCrh6ATYqr1Vzr3EptxXbqYrXy4o5bXS4jgqdGqZYwYntnmsqXEzwSoTXWVvSucJqHEC7LfpKMyem4SuDM4ex",
  "key30": "G24hjdpDUn8qpxrvDHiHDpGS22wC1VrAAFhefzQbMe5W9Syjbgqz9jpnuwh97azSZZLFQqLhmVUo83J2ANXqWWH",
  "key31": "4B7hPoFpgnDA9DZDGJVPZcygZ6RV8v4Nh9kR1TJcBk22fCND9kS7abbo8xnRbRzH6CPLsVT6qeptPUehEdnNdowr",
  "key32": "2NvTFixG2Adtdofxrc2Bwd7dq6Z2WjfVt1S4mzgLmFN3maMbZh3cA3ATEjjboJd5UrC1NUnXpvh7XZPqkjicXGhN",
  "key33": "2KxMB6jVZX4VEDJGKopsgMPTacAPcjoXKVDZdMWMRDuJAjw63ZFbk3JNwmaurfU8oCDyphiPMsD4T1SD38P1G3wc",
  "key34": "3a2kQ6BCaXdGFVxj3y2JJGrgaC4kjemh4RPConVefLhiqBpyv9d2qSvxPtx7EcZUbbYtH3zESqSJcWDZPKDqvXFn",
  "key35": "48DVVQVoGLpTfFXNsarhBsHwHfQpPn971kpJnySo42knTqmFGjKKJHYAepqQoxMfhwUJ4z5wTLq7qWUZHqJTnTYZ",
  "key36": "28Hx9nkDPMVm9iBozYeSSdmvE4CTy9oJuzus7QVgCfoLTJi5Ym6Lq6qM3S2VXEaARZUZEuyrRPKD8CbNdnBMMdKg",
  "key37": "3RnKgiYEwF3iMbD2rcYYFVtwap2cf6mz9qo5yYGkwta59DevX4TmmHVMSXynT7PzBJeMoHqWyH1sMsqmBocgGF48",
  "key38": "2wDybnbGnfYBQR3MRKwQgSGvTF4yYX9bdE2hBpqFNAKLgcVhN98CtNj4ZfWdWs19s9ggoE8UsMST2aRxFSczikGu",
  "key39": "3xBjVhYb4s4RUhgsmVheobGPumjr7zoAdd4hGi8378DYo28A5oKonRrwEycfKsSetf1zZWXhTgRe2ZdrjUZBg27A",
  "key40": "5zURQSqguCkxX6nREZX4t7Avpk3wuW6HLiGJocot2AS5kBKs8WZmXXqwyDFhTtzYAkm3T4Vwwbd1yR6B781f7B15",
  "key41": "492XfCbzpXjpz4V5rCG3wnexge1g168sdkQ8tR68cDDJVJs1gY7iMaXY2bWqGsMTYZCNhq8PPgaU3cQTy1UtWrhh",
  "key42": "4fVkiNWYUkxLws1a4dDrRDBrjjUFPJR7pGYvHV4BEfujKMaSdGf8ro458kBfzJfWi5oCdxMXP2HEMdhXjaospPZq"
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
