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
    "3m6AUxnQuFprqwFerYxzrw8pUcbRZwatYr6zJS2NM1ePizAoifGBbc7L1Q9cusguQYBGoPvchdUCzkZXB5uYN6i6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28hnTWcxMMFHNuf7ymwToEkpLQDscpTUswMMparXRavZUQ4yn3xnb9rnMTNFhRkBNGf7Nx6L6aXHUp7LQoeqycFa",
  "key1": "8mFRJMVcDxkT84FA49SPvi3Qt3gLbQ5PzRoXiASNJGTw4bzCdK4C2scGWtwoheV4ZZxt2DDbPX4mF8yp4X2344P",
  "key2": "4NckvgQDFxbamWsiTKhQPzboaD9zEodfVs42XTUua65uVD7bCdroqfJGy5wVHxoiUPujPMBVC8LiLr8dPAB3Ljm",
  "key3": "2ahCVNMcie4xEB1EE63TSr6c49aaH3KwFEjTfeogRaG34NE6JUNnc32hM6qzZ2XTcX9xd1kwdNvfgTH456ukM9eQ",
  "key4": "53pqaoJs5czS5ySeiFGCxBE64b3VXh6FX25unkNXEZ5WhYs5M5BNHFN8RbpPCg7Zxj3ypJTpfRwvsAZJ5foCC8qF",
  "key5": "Ks66FLWD62tAuaFPzPAwC3T9Mfe8QNKBCr1RDk8XsnhVtSzqF7Cai6YKBNwWmqaRbYkwDpwYpodyBag3a3atPej",
  "key6": "4R38xtQ2Mounx3eQRuR2F3zc4xMwFajQnz5oonsRVoLVtf9y8vgCChVYDvCz11ShPUzUkAS2cHcFBqBszBcFDaC5",
  "key7": "3UC3k4LwYzNwFHuxwNbTbsWLXqik3eNJopB6TV1GimxgvNqk5stzsTWUuYdf6wsPEW3qX6wLQ1r4iPEzXNotMBQS",
  "key8": "3Nv3QBa85BxfdgrEwxuxjzF6fMtzB6o43GJE2HpcPwwSn7pWxQK37jeQNRum25LNHaU5Tx9UijFhoo3fGMrTA8Ah",
  "key9": "jfatczPxEAPkPPvjXpk7kwiAVgdk1fbHjRXBd9P5zqxyEgNBJfNDwjm83ckYsHRGx52NbwtS7dbANfPRAqttw6v",
  "key10": "4Y6PgkAFvv1XfXMf8pmgtFCs6qbTQ9GUxQRiFv7VDbo2gKSkBXJ62JxjkjByaE59sbDuBn1Vz2WxPgq7caFr1DXn",
  "key11": "3ANhQC5mJaiJFsagLkAXU3wvUNekH1PSP7cYEGUznWZP6GZBzQ76qNsrVNLBD3VmAqttDDc3HiikW5k38XzoYHbw",
  "key12": "SJUdHJF5R2ESrZcDna7x2JC6u3VbMqe1Gnf19wruP5YYB4DytDRdUUK5kNZ7Awvo48i67iatMoDKKvPga9VA6um",
  "key13": "5rTgX242wGbpMKaQJkWYNyYtJyprVTLETT632XeaZt12NimierzWpdQiBdeKbNnrjt9Sqpc88mB5uKqyLucqRHiV",
  "key14": "4YqFqDDso7cY4faFP754swyFuSqD3c14gieVcGoKaaDaJLSW4Hx4tJoNFFuHLUURftmqX2huGLm1dqrB8kBP4Jj3",
  "key15": "4JQEo6on3HQj8P848FDqZkP7eQ8tC6S3xHTxZZu9wh2nKk17hbrertFjAMWuk7VH677utKkykR7RoGNLC7scDrou",
  "key16": "W6CUEVhQSmKNiMLrGx4qqHEHwNMTzSu1aYwsZtu49j6GdbAuubXTRMWJsWaH4G2eLb2zALmFocowurcvmmt7FXW",
  "key17": "dFwVDtg9BTJTkTpZPpAHSrmZ7cEBG7wqS4XyfqpxeddQNTk657BgUZx8HJXL8WG6XpSCReDmZhXjW57AbYwuRHC",
  "key18": "4srBTeimT7KXDj6GHxBEMGacE67kxeeds5Wy1vHkUYXDam5AJE7PatFqBJPbFT78zcHQ8RfUdeUtiHEbLHUttnj5",
  "key19": "36R3QhwfWfyGjTbdSh6bAcjEWFm9eTWPDXtcxjHSEQvTupeFpntiR5BoGcDvT7whsfKB7UmemNfTSgZqSp21qqNN",
  "key20": "3xpvD12hCNeLPU3gyeoD9ppSgWh3VLKKZJufyHHVaSzPiZCGahs194ju8mXf6RGgXH19YsxPXy9Dz28LPxEvMLFU",
  "key21": "2kLPhqxsoCLhmJbATqat3u3swtr1ZHcHCmpJUJzEG1aqGSL1VbUNBa2FwVdQGCTWuwTitZRxLZkNsntAbbdbFQwh",
  "key22": "4m4agrALLXzzmBJBSq88o4LScjiK3aG2yY8atuCpqBhtdiECfjEtvwR6gk1T67MJy3s2C6n16o9hcL3e8EjUBgns",
  "key23": "5krX9gM5FTynrqVignkP6iXU3pR3dMFqw97KbUEwTwC1UYr7xwe2GVPARtKvU9KxDvEvQoL9PtVnP4hD7rLorVPd",
  "key24": "3Jdki3yS7NghTRGPewaErTYb5yWdU1goGqDqGf16v5zjM6zsGpZQoaV4o1oHjvVG9JnWRBkDXHw4poEYZoJeN1ow"
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
