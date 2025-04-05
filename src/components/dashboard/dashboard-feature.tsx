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
    "4gyYHJeFwmyw5uNXq6c8taeCPpsSnD36Vsw8L5YBYKQPBGuSaKvri3dNunJGsQA2B9Lf74iK6XYzUAfQh61uPrWa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uoSvUfmLyWgHZtiLTB95UAqjDzEhm5S14dJ5piHZyH2AAYHbG1NBjadLbUhVsz7jT19oSJ4MRnA1Zrvqwd7icTH",
  "key1": "64Gbv8LeZEjNpcsrPkws4QZLTAv1b2TzwkJX5CX6L7ien8kCvpign6hasYcqKC7RA3BHpKrVmzc21rCHa2BZPCvW",
  "key2": "3FjNfKSq21YCbtJpnuyNw5pcKMcWPwLCZKZqUpb6D2EcSMMtkMJUqboQ5hksNGkZnKLNKCQLxvLQVH5iqqBDTPgn",
  "key3": "4tvUEM5FF7Kb6uCGiTEzSBykmUpUom7DV5abnDJRgRZsbJwrMskT9bf2UzD7kJ3tcyuhT11DpWqLdKmr8TbS2xFK",
  "key4": "tBJCCMpewtvxHijYLVzmjyybpUBEqeuq8dVzFC7T2qPkpLakHGEGmK6EEeiU2AueiZL95XfBDyvPFqBKy4SzBJa",
  "key5": "2pHsrEDB9evdR1FdnQdNcEQfugKKnm5PnyyDHnfZyt6KLP3DC75vikpe3uX8vUba4CT4sAZ9DjEtAMsQYsgUhnms",
  "key6": "2AnG8jiKqoRahRCsi2wH6WgEbvJefftWfvhmdNyLDPurG5hpQ5RkackRA1vmEKVo5eEuA5RPCNbcZF8gCD5qiVph",
  "key7": "5crrQYvCPnvFzEy7j9ycLyWCz9QDGyyypvMyAYjn5FyNsi1VCLCsRPV9cSAsokprZtHvEjK9MUNkZaWxv3dZhy6V",
  "key8": "7ZxWezXCtG5CLq6rMrnMZECeen4ud86fhromeLbAULU5X66huyhmDMybbyfDk5qozXbpzTzoHLeS4i9ZprkMEri",
  "key9": "5KyAidAT6DE3fiaimxEVi6e3m4HmwP22UVtJHULiLL2hy3N8qv2UwiEpagz7icFbjUk5EbBbsD8mCcFNSMQtyMmd",
  "key10": "JXohNFGpyNHCNYbv36qqYahGAnQTrBf7hDFpBu8DmfB8Nt8z8zzHLcQ5rPwRFrcda8HRkw6jcUjsmzHs57P3Vno",
  "key11": "4JUR3yxLN21tRafBD1aaay5J5L8z7DpDBTJSySzVBAM811pnL9n8LFs6B2htVyEaAAphVd6hsFsKY7v36DcuneEi",
  "key12": "74gyNdZCKemyjm9Ugp4cJj8q77k9d9uR4oCap7n4dkY56s9bN1sKYCAmS5VDXLEzSzTDxCQVQjuhCgsC5fiGrDw",
  "key13": "DnEGhbtnQQcK6ZGArmURA2GHdobVCiB8H5v8Pzd8NQDfSkXhmr3UMc51Cq7MGK5ceYKzzW6AE89hTD5YZW6mVFA",
  "key14": "3CZH1UhRX8YHssik7gnEJXoqNLbPPNgHN3gojYC1CkEsJaxzFyGB1Mgiu2sU3kSMbxmfSur3jD23rEZ45dK2VMJv",
  "key15": "2zYqUDKRH25Ymbk3DmqKHSEMjFpAZJriRjNdRzMUDm5i2nbVJefj3GwUT6aqDQfdXMFi8386LRaFEPbNKvqBM2se",
  "key16": "2Ymd19ZhfZm8x1RtUwjdg5SspVoHSNBZg81gJMtVQ6XDM2vbdSwCAt8KajBsv2rkY7DyBZwYC4fb1W2vgieFUkuN",
  "key17": "azs7NXZzsmzUnTd9xiqCk9hT1hxUVZws1KgpracEupg43cpNmHCfytw5xzC7kSgrmAmKbY4KZmueWPoqZYGGisP",
  "key18": "4PCFB9fUpcPKGSiqkJB9bTKPtpLajK9mGtKRhcdoAbxrJk52vg8LDTTLGG5ttN1pr4zMA5yh1pYwgLd8Qx4fmV7R",
  "key19": "xCy9Rw5h3E2z3JDm4Sgxi3sZ14bqP8iHnZ4aSfrEeaNMJXdCVczgXNJSdkEPeaJf2K2onCkHLFy7cqCbW47EusX",
  "key20": "3fpvV15TKL4frEswKs7wK2ifLULpdk8jMiQxuzVtxMGswej6kwyWTN7V9LzJNjWkfvnxCLVJnLsRHSmn67UQo6oq",
  "key21": "44o1TnVgua3V3qL9TXXkwHTabkLu9ooJddTHvxjdTgWDvbZPM2nArEPXyFYdMyo5UxPLLVEX3yBee12SSqKPGNSh",
  "key22": "3DuYitg45ZasgM6wBDQb8tqE56KHZSfgCLUuZCHNQNsCsfujMxua4exJmWFzrayuu4ANoirzp9pMhpNwWJv246tR",
  "key23": "4QPe1L24s69dvJ5qGTkbWV4EygmBF2LVtGV35jmXTapwMbkDFmWWQzdXH5BzSjY55AdP6ny8hdmKX3HHVKCPg7Zv",
  "key24": "5TawszoH9aKxGvyzWGmGH2pY5KsmjTnYeagMs2HwMMxWWvCZBdGK44vXmtsnFwKkXq8W1NnShfGbn6UQvRd3s682",
  "key25": "4QkjQnZuTdMNNKkRzPNbBxjXJ44ZHcP8NCG51J7GNRRQTjfajDDsVuoF94gh5YYcpE35mEU9a595WZvat1QNGLUt",
  "key26": "5EZqmbKxej2DDZXci5xNQguTus8jrfY9bqcQ8N5z3muhMk7qZ5KN3M74WWxcFdPpEQRiW1G8kFgLsfoRQSBp7wE2",
  "key27": "2MSmqowtFUuDyttniPWCgMhr4PSRQGNXPx8SDuZ3fVcvtzGTrLuzDZjXrAUWpXa3VD65Nsf4LkQ7SprYCWXsngwB",
  "key28": "49VaywGVVXELZrB2dcSRVc6Fr7q2guifbUzEvQNAAmGb3YzDsx39aqgjMci1YXVLk2XJ7qX56HhVtwY11cS3NDRF",
  "key29": "5Ccw3dxMfeGSAoY1YJW49u3uJuECjGPRLAiZ8g2XpWHZmbbk4Tp4kKzwxGXWJgM9gyHGZoJksLCcfHzm27rdB7zo",
  "key30": "3Uy4LgJpyNgvGnL664s1pzxsKfGnbi6VZEZqNdt7ntVTnKfNSScz8EdXFdaa1kjkmQsg5FzceWZU8acFv8zNcxfN",
  "key31": "h7VMnYGn7YVNL9wvKdZoc1oV1RCKg64LySH7DhWkkSgzSWeiukzfnHkqKApY5EXx6VtUWqv5sBDt5nUZAYb5R3f"
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
