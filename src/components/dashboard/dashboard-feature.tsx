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
    "9rQ6wSxt3ihB4LdSNMB96pj9RbQ7SWfxy3Jrdaagg1woJB4ZTXop5H2GBt6Z6Cuda5dNHyp7wEdn5yeG7gmCqwx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38rdPt9uzvz1SXJ6xAUnXqh17VKZdiwBpMZyq2jRV6gWsyMSzkgcgj6W785nBhpKx8ZMvwLytHcV9d9ZEtMN8vGV",
  "key1": "wEoyaztSffqLypSDzzfmhP5N8poVGVjdDHZms9H4ZTvBrC71Dfq2E9wNZJqTG2oPYQPaWNozHhtpdmB7h2nG5QM",
  "key2": "3tyTqB5tBkPQWaam6FNc4wWHVq9NdZPByFpVZg3HHoauZpE5EQ374YksfwG7WDsepDDSBYEi4Gdjp8iBCapMjDKo",
  "key3": "2cE6Jxk7WrmLMngGYAhdRyKCWq35m9rmZGJKWmfnyU2iSM1C3JgsSTMf2daoPJCKKWLXfoGprhcHJPbgjVP7veFv",
  "key4": "48PVBoiZ6gMLAsMMjXobieo6qAQX6knhwwksARxih4g7AD4s3Vib5EXnmRmTnigzdpBa2UefjSNFKRYLD2BdmtHJ",
  "key5": "58jaocm5afDeeKvh4cftmsU6UJCVncvBUknqyC3eY53Dn5h6o6iwqALcLu3v69zUWmyjwWRNjxXMEDrgurdePf9C",
  "key6": "3E7EEtr2GaZz3hDKSPqMCfBqqzVEzMmo3g5azEDSYG6q8k6etcFuxxMeZitbK7PpvEnkVRg7RSxmkiVhCtH8wdhY",
  "key7": "52q9Qhu7hAnH4jNVQ1BNAkwWBx8mEpLtkyjc8hKsQFZNBRVM6tYFPEhL2roxZhJZyTJN67moUxr7dLqz5WSJ2Cbj",
  "key8": "TV5j7h5MmkHEy6AqHqAUXShj4QwWz7mZkZUhCepSjj9Vsj4oPcCBMYd5WVoUMm4BvnDYdbM7n3ReNQ9g53dLwcG",
  "key9": "28FEPbDwJwsxBvJTpPhhG5A1TzWMA2ce7eVpXTrYQX65xX9sdpgiKzvZ9P7vnNGjgxjhxE4uqwS3m2h273yiZ1xo",
  "key10": "3hkYDvKJK3ZQeYnfEDwuz1AjSpT7esZnxR8Sp9DevxUvP7wHowufrknux8YjvKzqgHghr3ZKvuzjaEXJzJ2wxwMe",
  "key11": "3PZjjrWB6e7ECNzJQC3aye5gbxuoHc1cggdCrtv67E222m8V68XMx4wqPkByLFCNgEu87vPBpNF5DkgtaKufgQDf",
  "key12": "48CW2t8M4RNSBmdvYsysDRodd9MkwBqX2wLBS7ersHNctodqFYpwpQxjZ1CyXseFuLqxYrtraEdsontdDPnvgLVi",
  "key13": "3aqpbHV6q1twVUWQaQS7dwTskK5xXK1dgL7f62x92KrJtoQg7WNdJcwcnq44P4u8XK1mkqDW6uSCE5TXwJ8MoN2w",
  "key14": "2DUFg2YgVgTL3F1qBFYGwbc3FwSe3vcWfvqAoS8cZw1QcvcAmHrNAT2JQsyY6KBBUQ32V4BhEG3Jpm5YTArgK4gv",
  "key15": "4PDtig7ULsn3UYy5uzX3WTadF7QXsYgr8xdwsRx1B8mXty5FfSG2ULbTsT6VP9hMtJm4q53ydmSR8vXxftyuXvhT",
  "key16": "Kw5FyvzEVZTGjBs4FoCnUYRNVTfzfVagQkPcr7YBwahyAN7arCXY6SFcXLGWGX4QtnPp7yXbUB2b7cnmtduf1To",
  "key17": "4dY7t4Sf7TGKR1GSeo2fXbP7BSwds4WVB6aAsn3F6DCWnKdfRgt72moAEHGAU5DtcRMxwgDNz3vPasphfV5S7dJn",
  "key18": "3x6SQsNT6K1QCmRcWKrgeNALaJAwctJaRK8KXGffF7KSHDSRpd3HuVHay9x5tkiawfxn9GYzyPHF4azHoFx1yQ7r",
  "key19": "3cHCe5uDj2UmUyUJqtMNgKaisDcYoVekbsvz2XM45j6nB7vro841YkyyHx79Kp6LMC1gJaR65YaSUZ6cou2C6ctR",
  "key20": "4RXJ3u8Zgwivu5zCCzNj4Rcj72uzrCrxMNYkSNctLQXF8pGCaqTNZZjgzGDXnNH45HWsZkVTUc9putNmPoV8EQBA",
  "key21": "5sG6MmwHe1rn9JuQYbtExxSo69bCPkPoBK5YkNwvGA7dx2eBm9kapebMECmfvCvafpT6eogozKBGgrbH6R5d3eN5",
  "key22": "28BuDKzwriU3hvbJVHHWZcWgC2KVE8CfyYJfb8b7Ny8Y5hvzFCukyHw2NQ3Qy4VsbrzBAwLeqnE2vWDiipTrViNK",
  "key23": "619RYA14TBdCfVGtvi9gkgELvKR2XssL25arSxSboJMRg3aVPdAdwLAviZGJRGJXuFXqYq5FgbqDJ3eRcKYHd3RK",
  "key24": "34sqx6VNpndvktv1YVa17AdaQz4LVdYd8kRkAw6M8nfMtiFAkAqZoBgpimXZ2u3a3cKe7MGJriKVtEa6YPvWGfPH",
  "key25": "3BWDqJwnJiHCCF8qRs56nAUmARUq85cXUiSndsUV1BWqEMnLWfv9FLUbhPbuWcSRm2GjmEnxEuLAewzVoTMnWgw",
  "key26": "3qLzJuiSTT9oMG6jSwarka6cmtA3uY1PNSFMSn2XTMNui1xmApPKJD27khH4Nxd4bs33G8j3xgfx5k6P6bCZPm7G",
  "key27": "3Ejb8HonEXpQn43VhJChnVJmRfguFDJm2BG1SkkwJ2iMJzAYmwVrpc2bJ9LPC9EF2Hmvi3kRDcLwQn5SZxvfKu6T",
  "key28": "4pJDDsjZLLHQgSvD1bsw1uHNnMTggGtdxAoC6wDn7PFRzHdbaj3tS1eVsXvcK11DY8fL7rgBTBga3tKNrNUpLQ3V",
  "key29": "2SDEnQCTmGuoqHUFW1aCWXg1w6J64p497nrKwKPRsQ6SUsQxuwcvJN71iYzr73tiZnFz32mLSA62f1fq3MYmNJp6",
  "key30": "4RrVeZTvLNfWMnEMmGuTSMtDkFvTTTbc6YTSeRgLeatuyNNMogtiKHJAoZFbTG6jenjugvYGSXQ4u2cnH5GE7zLW"
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
