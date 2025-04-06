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
    "41SZdQhdivtogdZWrGL7yAiZuThcZpcrmZCECgk75XsF9Jq9LzEdqJw46sAu4CTKM7fzjUchsUerdwsqnk88abbQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Bt1Z1wCgXyacjsZrWF7Wzo7z3aXW8172ZVYWrNcLt1oVKYTBAs1i3kb1Poki17AF4uZxMEw8WyLpH2TompXcmbF",
  "key1": "2tSCfe5qUbMLw7vb6pTYyVhrgjPoLmxBR1ZTjVfovebcbh38dqhAGgMrdhuRM3oxnKN3PnHJLiPAprHZmuLVQGeR",
  "key2": "5FNQXmJXhCA39t7xjooqsKhy1xdoghbvktNpo4FfqNbjQrxW6ACRmy4SerKoiBWftQ1eHSFdiEFrUPpkdnwEX4w9",
  "key3": "3HzXwhmbquAkey3aQeurXgs5ZqF79tJhGdrTr52Smw8e6mWS2hHBvHX26qTvHXKNLibAnrVr3MaXSRRiwhfrN1K7",
  "key4": "5NuRtKks9wjdnr471W1NxQqdrYbLzqrUgGfHXSHR5PbBaC4BoaZ8KgzZVPjNMS7ZuQW2fcQDexwrNoPD4HNR2FXf",
  "key5": "igHBZNSBvW3kmw1goAhKgUuHrazg31zzg4YAYgxJpXQB3uMdU7ArFDU9Lsm8Ui6GwdygPV5n6oiAG62Xcvrphwt",
  "key6": "5JqCptCtuNWa42eDnctYU8V3Ex5ED2Y1W7ZpipD3EZScyhq3ySFe4B6PdpptaGV95tLXV7y4VgMGy8RbqNkkxRco",
  "key7": "4fRD91RuoDMnxAT32AKfkp4uM1M4SwrwC8HmazEBx7WozAZbst3SzE6FgdNSjn1MF9ixmajZ2o4LAxuRxPiXPkD",
  "key8": "RaohC5ppwXsArYSb7vKzabPNnn6vXrja1PTi9jgkiV4eJZLD4br4UGKvkDg8bmXARaPa7YruoMZShL7xwyGSvDh",
  "key9": "TCYNWj6sAPxqMMRFvrLh7nieBU67gTCmRLunhF7YQDLDY7NKicRZzdTSNm8cNYDJb33SZE5qA5oPDn5MAURy7xU",
  "key10": "3ZiMrpYxHueWUCFvcP2wJCu7LHxfHFN5gpnAGjQWUSG19R9cb1cAXWMRgofVtTdAhnHXiHK5qCGGofj6unCWhdfw",
  "key11": "51a6fdg5yh8o8FVaqopNgsx77K4VgE4uPjPt47x8Rjg9ASuEmUr2bv9iRnFQYPtKGof6fwQZbkrfdxr34NAkBFtD",
  "key12": "D51z6MeXu2Hp4Z6rhgL8dTKxENvRJXiLZqR4983T8bLTS5bBSFhbTq4PoLxZiiQFEZry6T31743Yrh6djSYTCym",
  "key13": "2SngFMY8635o4oKmANT8CmFYkFRtJjJkxx3oddDFNbpsB8RoY3wowUTtUAFF12eh6EwefGE6uxXfg4bUMRjYD7yF",
  "key14": "4iRpW7fvDPUopvBBUGbocYWfKum2CspYrWiHmik2ip3Fnz3MMwTSJAsRo5Uw1iGPX3XJkpjBM1cQ9JFKx6vhZC3K",
  "key15": "4C82J3ZTTDiZL56YAidfYdpzwgYbBUvuoRDxwbv3pU3ibdUcckkNf7ydSR2tNvNSp9Zc2gdtCZrqkeyPJYGEyEge",
  "key16": "KuDXsyv9Cne3ESL76JeEc9eUg2ZG3D8D4SSgiQWMkCZBtip3692CLSXiWMhPBrJZACXNDASWcxpeqXKPv1ymbrP",
  "key17": "4ioBGPQkBNKtpJYXy9DASJAyUGorKJ3ff5LAYbo5J9nGtpiyU7PaNgM9VojvkUVeghyLt2ePH14VsXZHDHGcxcqw",
  "key18": "7FP9ErbaewyA2uzZmbibFPGWxkwKyDxNRf2sJkMyGGHqvbFhA6LPQWaGYfE2Gm8hLBSwJhqQaoY1PGELHKsLL4q",
  "key19": "2d2QDnJRC28VS6JWh88uwtY9aq7SiYMqwyQTgwsvxyrhVgqecKyENbFoXUMBMGd9GPAenasqpnkricwMSidapMTv",
  "key20": "LJrWZT1DsnVhVg46fiHvJTdquaJR91cFsPY7KiXG8o78h8oUCk9vzU3DH7p7qzV3G3uky6hPgRvYzNq7uXJr2Ra",
  "key21": "636uMoQJvHGq5V3NYPbbAJNnNx2jdQcSqdHzUupRGZUBhj6gc8b2yDfTV9hxPNnqe6LQCwPqDzqxAWgLjLdecBWg",
  "key22": "2ijrGLTPgD8wJ5LYgc9huyUiRzaz9yxpuchMns1Dy2mfqQUyuup4zutQA3s6JQceCpwYNrM4TNwJpwB1ehXeeU3t",
  "key23": "xcSJ4ypKsYeoXAFop2F3TGVxR2E5YBsQDUsiWkd9N8QAZ6LgESTWdCx3DnwfJgn9rsVEKHb428uLqStjXyfTYYD",
  "key24": "sdVAL1g1YByCjmrRLqs4gYPMN9mbibikJzBejXApHjnogXUCKTB6xmnp3Vu8CbeSnrNb29ajv4dsR8TUTi6DUbz",
  "key25": "PKejA3XFixR9nb4jRdUPRuakNVphRnmvwe7K8XiqZB5biyZaNPTSUarnfRWFjpxXVepqiHyFibdL7CKqw8ebWTu",
  "key26": "5C7Am28WttKpTLLZUAvMg9CSCP9zkjGaauvt7dHYyJCWsNRDj6h6sks1WoNE7Scv7ZqCp7BCAKpEH3GgwxDjxEtb",
  "key27": "3xjEzVx8LvXF7sD6G3AVDLzVXFV9q7kfDGCmL6NA1Lsib8P59bbEuMRxJkoH5hQdZopjqKyvX4boY6fXxT5kMWvK",
  "key28": "57TRBRaQFab42ZbxRK8RdrFDK8Z19LVKw6dP17fk4MJ83iam7tBZ4aBZgNCnaTwg4q3W4JBMMbWphh86YtfG69Da",
  "key29": "3cf5rHDT79TnG7n7UhNkoKa8HTvYHierJV5B7ZHsiRChdFbS7Jy79SHt9sgLKvvDfGu6K8cBp5F2KrVJ5YYsgDa5",
  "key30": "2iypW3Jq91wFPJMYRr9qFa5A85gWhWKdCHk98hsYXZvMQWTtniJHqJeocYCJKasmHid3k3xVKg3yP1oGdnVfHA9a",
  "key31": "4BJ4W12zhEcU447VRwk4NDZUhjy9NtPoFNVJydVjdcVgykvrMTK8U8ueeGFBGZbzDfQmeJnkcnBaC62Pb27rKHcq",
  "key32": "22K74DMfuBGD2a6cuYA23vtdWaQkfEN9CqnKSfCfoysNagCFUKPosWKy1EZvMePFxJNSbEo8bP3dWg4SWWy8vhHn",
  "key33": "59yTt86zYkMamkFbPskaYkPKdBZaeUB3NeMdjWZuFgHki73ro22AqRRoexzz6w5CPAGiWKAPvNa11tB6UZBBuUEH",
  "key34": "45N4dZKaXQrZhivgysuU1AfQpZK5qD41HBkBULcwE8WpcFrxRAqWJWMevtHTbAgZyU53qizWFPeDX8hd6qAxhzBk",
  "key35": "4pcv8LxUvLzpDg4wxfvW48eFYJiH1XzkXrd2DmFbKq5rL8taahguxNNbg3KnqXTS5mV3rAEMi9oEMDqTgigR6Fiv",
  "key36": "RqBtUXgCVzYp5zhX3pW61gaatdBKE8Vtka31CpbLi2icTuaUEfabtoKhxuLtwLThtZzYpgzQgazKbLPCt3xUGgy"
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
