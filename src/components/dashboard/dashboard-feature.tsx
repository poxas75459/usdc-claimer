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
    "ZSSA9a8JidpMUA19VwWeBymn236jyfR9CpDNvfb9Z8cT3BE5ZrAyzAGa4knSHK9eVEmq3xmS26vBvre5xRJgTXv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QeFzk6iqh8Yi2cjPUJcHPcvtRgKRG8uDzk8DmcneoZgVWVRYG3iQNcNshDv8g7J6M3adusTeMrN7rNVDNyNrE5K",
  "key1": "2gpTSis8QAs6QY3PNv4EV9ToPfGBnX9wu4e7jZEw8XNw5Crspg33qYZ8ydGYgwGMtRjjxcJHKdCCmDQ5hLELrCm1",
  "key2": "5vHV9DNogsLhQUVsxa95E849G7audDEfXVmKS8SBMcfP8epzeduSTarWb8RjBmgByYbqW5MGWzq4uBRa7U4UhA5p",
  "key3": "54xP8XMojXhvPr5LDW3pqzLkMFm56FAdf5sEeGfxAgg9zPbVF4mXPYqPMLL5JdyYe4TnJiwGrZMzxJ5N8WKWxfMP",
  "key4": "4jc9aCu2TmVNw4qe6YBQoeQ1MUpMFaTXtQ6ZobGN9qxSm7tnKgmiYehtj3ns7MXgzX5MJjQhkENVywzeQ6B1UqbM",
  "key5": "56e7cWEh2hEKYcXK6tkPWnid9NWqn4efEQikN1jSvMeokTF9j9XBPQ5QKU7C6v7Y9jFPq7GD1mSk4BxCmV1drMDH",
  "key6": "4fNkib22uFtCXERKfe7uVcmbmvm8vCbgcLajvJJhcA8mi1r3eLsGH6dmN1pkZFoiAHsu3sGrTo3QhsUXY66BK5rk",
  "key7": "2jNBP7FZrVUEMXnCUCAXdybT4MVGuAoKCnKo3R8QZstUZZex73m7YDwsUHeKD7jsC5fdfXbFUfEi27hApsGd2o4E",
  "key8": "3179KLppdnqMUQot8zRuC9gvi66bbjmpSqSNHe1Gd1GNSAggDCByLSso5RqXVghjCAqwcvagK9hMCzv2oUpaaWWt",
  "key9": "2bLqLwvxmXNn5E5ZrmjShfB9YU9WjCKkQtp1zTozqi4uviqncL5fhH9cwMkDSN4w9XA5JSjFm4Jh4Y1RnDBwyLie",
  "key10": "hsEG3SiFBR9ehSVBeNH4skGf4mxCCchYUcy6iCXAZPLj473CLabhpeVELegZbmY3ZsnHjgPsC6EmASEVVcvtfqe",
  "key11": "cFLCyWzJ8ULNawZrSsRg8bvWZdndu98FowakAq78vWbUpKbqk5B8bR7LV4LhXKSEVDN99qC3v2CTKaL9fcYuymM",
  "key12": "3EyUDjr99zvqwpwGGqKoEj2RqH3sZz5BmXZREmKWRAeYq12MrfinmY248QazV3HhPSATuhdP9kmcipPjyEvmmkZi",
  "key13": "2fcnvpP9UrHSaWA9vHGvDEgD3S7XADbYduixGSBUrp5r4PiJuknDqShKMDPqpKkyYcqSGXmUvecmynHE7135XL9L",
  "key14": "4XyQeVPQS9ZNskJcT7fYtAaT2MepLxU2zaowcwCtYj1B97PBhfcxLLuCK2FGAUvJFYCquFrUf9ALWysQVvt39qGm",
  "key15": "3YoosN2cjLtuPCLrMufBcUv7KfXLFrZMygGG8zXMYRRD6orAv22jjYE6NQBcsydQaszf1N4TMYakZYLxCD82G3nS",
  "key16": "Y3JaHvLe9PJ4KPvag78NZkbDCUK9d5QCX75SJyjchjPtM5Yckk7X1qhEteD1tNnGNTox6cUGXtkv4GP4EcZ8PZk",
  "key17": "2HkJWJgjbsCPKBsBBb2eqV5rmUmvcV5CPtHXLcaGXi62QCxP3N9fMSdAUaL1xfym5RAB2prkSQNHUFHa59fvrUgy",
  "key18": "4Hs8uoQLz8UmHVVtR9sDMMou5KE8mq5ArHq49CDSRK1Dqa9rHzyXwZ8NGPYWYVopU8c4J3zzRRdrPRJQXr8Q3oT",
  "key19": "4MdTVyRTkDpRTzuoCiJiL9PZHjxTiCLajomA3Q6G8dKuA7KqAfjQMyAbVTnc7d6JsHgC63cM9ZS7fDf1jJP5FJ5h",
  "key20": "2EQvmhea7eKDeduVpy91oWE4gC91ZwzHHEDNR9Vo21ypmwxhect3roCbcsio3HVyzHah9JjQhWiqR9Eh2kwRJQtr",
  "key21": "4X8CoPMfmFpc5Q2KUbQ6JRkC2kSAnza64i64EVhVAweXwURoCirC2Qjbt7hL4WiiPuy74j9fv3XUF8g5RVoU9Pgy",
  "key22": "4d1AuqXQKX6sa6iPk6AR7npy3pcvxnuiNLzkVjHtZ6EEZkcDLP99fNZsHLMg3i4QE2oo2oQSPBzP9GBJzNFAtTpP",
  "key23": "5uMM2ViqJ5PUNNESLeks32RSjwczcuhw8TvszNuPia6PZJJ2nhTNQftpRVxysNErEqZwoNnQcLnRbm8VQi8V975F",
  "key24": "2jnZv4q6m8ZXRcrv7R1Vsz4wDFEM77R5BCWbjdbwsGEoYcbYLRWhFPXD2GiCKR19py3kFUiJ7Jr2t5KwVCf7t79h",
  "key25": "3h3XPYpUFNBGVBt1Ez8diZsPXKYHQdU5QHPNEj4FV11ZjVWRodQzQU1X315n5rjMoCPCDquBV32NHdowEXXxMFYw",
  "key26": "bS23yqT54ZMCTBfE4KcDUx3iQDBdJ27SEkyrnCYjV73vp7yzADPcAqMUtCEAVomUFTVRspj8MVg7qYU7nJzfSQx",
  "key27": "66w2MrrALk3WZnAcZqfUAPwxmcUP8gp7a1PGaSQc6Ko3hxCYLCBNysSQsj8QeHqJiAokN2cssGEJKb7vF8awPX2k",
  "key28": "4d3bACULucedx1aoeGAqDf3QHGDzeNfgyUW9cQg5YuygTKC3hnnDW4B5RdRRF6hTttxtxKrjQUPLpM6q1QUNrBry",
  "key29": "2MUwXwdDXYC9ka64RJNT1ic6hHiczfM5ujxMoPh9qBLngoSz4obVZth7d5nWSwdff37YtAdKt7eJBDLmdXiLTntp",
  "key30": "5dpUu67vfTjteiKf7EWoZcCAiECjui8bLjBJCG11fK3L18DMSt8BZsvCdqQBJvAFfzoEDRGdTafmoAFPcTevV1ha",
  "key31": "33UT5i52MWoUnrLamxs9PeJYZ4TeQVJimMusdcAmmVKD1kmUZQiJEPPtmjuQbbX6trwRQfzrj8UAuhsQtxhHGDi2",
  "key32": "3zNKtdRKGiP9C3pDmAqqoDE4vH6dYp52MS8bYtv1ySzKn9Rd6ZDxz2oQKkLQyStzZPyqstBBf4LPCAM1s1SwkmeQ",
  "key33": "nj4Jg7g2X2VcxufqmD4XBDonyXr7W3UzFSm4cHyRCr97pdHMv3t7UMK7NbAYAUSgnakfyPMxqrWm3LKFmSYJYAr"
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
