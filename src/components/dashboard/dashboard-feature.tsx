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
    "38sKH7GX2aCo7ToXzCEucmVTgYzYyVsH6We4qMZTauNpPYrzEjom6WwsWx8XE6res6ip5SizqNSarHXi52NbVKaU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fSqkRMvGKvkV1UDtdVGKbRcNLmXPAacqDhe15PqCrK4AjopphmuojoHngCaLZuCze4rqSrMpBW8LRnw8NZcGuSk",
  "key1": "2vhxdoaNR3qGH8wJ3Vn6DHKPSX49rp1CD6kaUEBspo5T97gMcVTrgsJDNPXdEM97cmUruq8gBW4sFHtKEZueMDWA",
  "key2": "2yepSsPfv15EQHdUec5LQZf7zaEE1ro9Frvd9ynz5FJDJk5JQtQ9gHcv1du2wrDWnH1aymc6PjGeYYZRAPPJVWVY",
  "key3": "2j7fnusD7ZPeKBgmcuPbSKMJmxfFQ4Qt5d7nZGv7TqdkkvKNFFwa4HNfr5EBTVDFLg3vZybto7YaPiykVr6hFABe",
  "key4": "25RGkTX2kKFrDv5bhADLuUznpe2sP5UvGiYGRB4eXZEV8eFfjjpo9cs5zLqc7EnYwjv3bjwLyXTXKpM2Kz75vmVM",
  "key5": "4ApwT2hnioFAVzS4kgWN7ziP3v3Urx8QaWCAy4CC6Rfa27unF2yZVNMtGMrdx5rc84cxGdhNg2HjbWKEdm5tLyqY",
  "key6": "5sUyA25BRrwWCbwuB8c5TVyZbSSrVRaifJuc41wvkXDqQGeA9ZEwGk5XPum53dE1ZMQRRNNRpPU5Ef15V4LEi6YV",
  "key7": "31KUUwRc6VJgECdL6MtLRPShq12tHGoaAqYPT6ZQcVSnxHqNp2UeCJS9btuYE9f1W8kb1U8j7g4HtRLx2LxjsajP",
  "key8": "2JCpcHza7PF21X1bWiWq3boy9tWFrCenqpfB4TUj9K2Z2MGiC4FJqvetfVm5bU54dnk9oJKb6sUMiuWfBaWBZEdc",
  "key9": "Z9HkuMVbpBg7rL4i4gAWsBT66fiVRHinKDUkKJW4nhe7DdRzRYgb4ZAaYkhUwExGz5c7MiLrYywFQe84Nv79XwE",
  "key10": "4sKc9pfFtACfxG2yMVBDn1PnfYpUmBbVD9F3gwxKeUMcEswTG2QK8og2aZWPwTWr2GM1bsg6t361pj5Fw7Pn4NDu",
  "key11": "RgXNJjXmakx3atSig5Snomuqu8qcbUn69xcFLHon5m8be3YwZB6bbFKXzu3xQ4QjHpctJoceHJQrxudQqHD2i6u",
  "key12": "por9C41W8swdQbfXTgTteQ2rWzKeGgPsnAx3LxPCpMkdeXS2Duk3KNK264Fv3kftqjN4F9ejsbt9aquKsNRDtkc",
  "key13": "np565TxzqaaPMqU95Dy2omxL9KA9PGdZ11mokriYZDEShf1niLErypsnQfo7Xx5scgZGbdosS2t88hR5AuQmEof",
  "key14": "2WiwptzemAV3jPWZS1VBJ2ihwBvaABNwGEq9G5L2bi4hZDe2WF38iS92o4QHhBcFpMzKyMbkM1cdi9Le3xGznA8H",
  "key15": "RipnjpmjgQ2XtTGsf3XWa1BfnH969JSXSk1GBxSPGCw5uHmGxp2n4jpvs8jUdxfx8RCgWnKbnnB6Dg8oaUmhwSr",
  "key16": "43LQWb3cyY3TBsfEWwn6BHqvWpnjGHGcZZKYN9ZZVpsgorn9btM2eAHVinhTfXENKgqUyB3jqSjcj1LyFRkgWuZ1",
  "key17": "4qUjLbrpCS14xENbnNVKtpHT3EpuabYjaJbDuBir4nNRKoqiTEMfrK4kqgFyJwtxH2gEjXXiZDUsnTeFCnqbvFtE",
  "key18": "3L7TnvTLw4RaCv21PChkJBGznvKB1Zdd9AMw6ayjqHLvwaQLGHjZmXU7BFbnai86qymcBMGYDQ9eqP16oL8HR6s5",
  "key19": "2Gf6sr2pxGQKjVE6GLN5FvbJu2LUirqtPGCHaxwsmmmdXm2vGvb2q8YKbXjKC6WRn6EHCDYR44NeKsAjuo7RM82N",
  "key20": "w2GMUSiAjT5q8nrNrFWHFnxwofNkZtmBWwHapobLcbwM6iN8bewdxxfks67Kf5LhNLEjvkwcwmwVULejpZJKpid",
  "key21": "5xT938G9v9CXGFFr6J7UCASw5H6H7r7eRScY1NAqyccQAC6n6MaLxYn8M2Q6DdGGz5gHoQzAijgzwP4fizv6VD2",
  "key22": "3iy54XVRxnvRgppCdTe6TXARC6y45gAUHXMq16AvjSPHiJuihHT4oH3E4iQu151DM1Cv48PhHc2NkwGPrRpaVdZm",
  "key23": "29CqfTY8JFLtQYND3tKDN1b5YetLSoVPqYxto2arauJwAAzpkN6P4E34dQWVKActX2dxcnbaHcmrwnRX9orFzbdF",
  "key24": "56xf2nDNDD447StdbrVzNgwusSChER1VL7hEMuzyoctKpcaws1DesTmYSTRL33BKmdeu9UqZ3pos4qtMXiKjkDe7"
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
