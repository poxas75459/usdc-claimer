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
    "9qHww6AAUAJMHXhRfD3hjCdy1QJpr9Sz67wQNzmGKj8wnUQqBHVMbBzDtmstS1hwosLVdwr4nX9fEZMT8xxo6R5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vt3wmVeRr7Wd72H1osv1VvTsnYgQ5tU8mpNrKtorvJauunjS1CHYgnXtKBNwXc2cRsPmARf1iTn1xmnTEX7kEtg",
  "key1": "3hR5tjVZY6uzR41LUNfPnv8T4N1tBfjFGpvXM4PhuP9Qf8Wx6pEhTnXgUxDVBBvcz9yGWnBUtUSi3GjXYtBP7tCq",
  "key2": "M3tb6LBFsMYwABmCetiT32Tdi1RSDDjqnpHxckL4pDFKfg99skxX3kSaMcNdxpJPxjd2miLopjRacv72YXmkLhV",
  "key3": "59JwVWVQdGL5ZvjzrSEbEbR57fm7tReoUm5QTkHhE1XfQKrMdEcbFmEaEPhz1hkKj6oZzFws5zF2vh64vauowHrL",
  "key4": "2jmsxC4CzwkRob3ztY6izwmPuWNuo5447SQ9PhRM8j4no3RZN6ujbyortCccmf8VpZkPLZC5riWYmAH4rwZ3CPom",
  "key5": "2e85MqnjvsYB4T8m7gStyTn3a23KecuNrSERubqDmm3A5gMAYmpEQkCWFXELnHQBw1S8CTtftPymsmxC1qQdMyYf",
  "key6": "5k5RmELbJTkeP8foK5cnxiL8M97RnQpdyFvPgqQs86SSqqmGgXVAotGWZiPWCQmmu56vbHXTsvNkUksqxedTG4Tc",
  "key7": "41hqL4jJ6AnbjNcp5i7DCtMMeiN4wrNQXJAeGWhub6pr2fFGWNqBxDHLoXAsswUgeJxgk6VLW8VBGXCuqdLPJrCy",
  "key8": "3yGT37oEAFNPivmQKsKv5YbAN6Tkz9fkfhRfcsqSRgm9YBpmf5HAvymPLRpw1y6VX1Eo6Arswyt4LUSMo6c15kuV",
  "key9": "9JWSVf3MhMqNi7hqyNmti4S1eMGufLKHZuCthz9LGvWq33Ayk6FQYmM82b671GsjtVfij4HYBufndeRLmirotyw",
  "key10": "3TCfXy1pFv1441MNhVJ9PTXYyiBJwVPGosKSEkWRvqcXR2rTP8VaQSGsqSAdCi6v3AtmHVYDpx5BFHDVmBP3fK9w",
  "key11": "pRwGM9uVCxqkYb4e7893A9J5ZKtMXE8ena4yNFHPw6f9FYaBRtxK9VBbChtGDcDvPv3ZanuYeqFMqywTN6jspsJ",
  "key12": "5CGDHHnTjqa1BF2QvMRkMdueGQFcdTb1XPdtAcx7kXK77Mbe1ZxqEyLevuDQEYVUhmVEvgrYQeurBYTYN6KzGM1a",
  "key13": "3wbJSa313mJeF2y3ZAQYUxfhYKd6sQqdCkUoMqSFfezH6zW5mehxFQCRvgFztUwuGA4zTwop8qjpBkSLyUkRvzyb",
  "key14": "medY9aH4KU78vh1FpEeyL1DaSRBi9f2B7foJfKeUCno5kiYXek3BCWMpPVhDegQ43SaJoGvZXtAJZMXEbodaoRb",
  "key15": "PJMxbjsvhQAL7U9uRM14nE2xSxSqxsUc7auR4coiZyBY7iXkZNpWaGChty3HH1gpDVoa6Pp33uf4SWJeMZfaQrx",
  "key16": "2CYLNLWBQC78xyphf4jkhfVttqMGAYHkeystmkdSQuLKwAECVHFZ9V99XVB81DVgqLubDVkiMRpTYsWyPvuiSuw9",
  "key17": "5w5K6TBuTtFYXFZVUFcq8UaybQuk3sNmGvFC9vF6T3Cni5kNyN8Jk8EpUQH2rwhG6hPNefLgSdPDQrd2V86YLZpw",
  "key18": "v3WKrJxBuaX2ST4husdgozhKecZAwDDwdeGo2dwfe5r2aQzihacCSupFy2NKHczvALH8emPvmgiYbYFM3Ajh3xd",
  "key19": "3tnDi1HcGNCF64KzNysQdTCLe2XG4RM1XqsKhPyjvorpMkR1iTLdUNrGd5ksPrsULQYbkK2U3TRT9iB5QvKuQ13s",
  "key20": "45A561AWHRJUaov9MiV2W174g5XEfthcZDYkxdcWmSGYtYDb2GkK2ctYJVq2RhEyih8AbU5g39XykqUD5czxD6gB",
  "key21": "672Uro3yLUU87yvfGvA8zGKU7BUJhdrqc5irVbLxkRa8itg2AANXZB9Quma7eyPkaW5VX7x2nSm7CyFBAa3iBpFP",
  "key22": "4v2y7R5TEogAruU6GBass6hxNjnHiaosY5xXhbSpmjxNJ9R71tpPXjTeP38PxzHHjeBNeSL2kcye1k57QdzNmWGD",
  "key23": "5baUGMS3BCEWvGVfhU6qF69UbQrsv8kdwUHSpTASG8FPr2u5DcevbpvE3vYVWip6V4hnRniHSUc784m8P2ubVDu8",
  "key24": "3mKiJPuMztsShtQ8SEHHE9VZLhkRxmow2DZQrc7rR6cKf7ki9uQosG8TBY1D8DJyWHTkykcQf9eZQgeid9DcGEk6",
  "key25": "3aUA3WWMw6Npa99Suth7Fj5KfhhhSErA2RDm8CjGMmWyDYugY6UqfJmQzPJZrjKg1W7ugxgc5f5R2xiXuhidoEvC",
  "key26": "2YX1sHAZZN5e1QBaS2bgxSaGRAuADuwXPcrRBdeADDmCa3FwVdm8g8uhDuQ7xr5ENpevjLkiYP1BTnMpwKstq6DJ",
  "key27": "5vXVrX8Sh498gJXgpJX5ZGkzk4n3Wugr1Kg1nMrrgbFugtDUNTpZq7rNrgEhcrYMeeSMBtkc2DcYZfxxi24MWeBC",
  "key28": "4KSrY8F5tSMj1AdC1HMpibtQ4e8WjTNLwWJUxHuAxYhdFc3TG7SwXKr4eBhH9paBetbyivrWDJta2CpYeoe7Rv1A",
  "key29": "3gs1bfwgMrUMGGpuZ7vvpYLnXZaBhFnbLR5sB8EaC9nsDn88ATfyuTNdbv4cU7zadt5F6hJcy2B3A1p12fDQTQox",
  "key30": "5pcZzfBcv6GBptNyEKdwmSVTZAHnAdNCyf7rXbb4RWvyvHBsgaenJJZVPmfGXqiW4Ud1jaS87rNYJXTe2P4CuVSS",
  "key31": "2XS3Tb4wvuFSQtuDfafckgnTn7ryRjYKDtfiteXf83HHvFE1ejWc4BTdmrVTorCr8iLyAgw7SVSPc98dF5TjGxES",
  "key32": "hLrMygYmEYtYt6k3GfFcSbvm8hcTJ1qUXF8i2F9y69VcibTGZ18UB1arP4fpD3ZZe7uHWhvBswbffNcbdvUHJGY",
  "key33": "2LcLbRAJSfuHxN42Hc9WioTXdYVtGruqXrYpKTeGb32yYhLbUMRCwttfVWUwQxi1wNFutLL9tFc3qNtjdwmqc7u2"
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
