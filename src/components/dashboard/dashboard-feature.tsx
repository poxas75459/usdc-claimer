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
    "4QXUtWizGbZSo3A3M2T8SgxNf7Z1EYExcPiFEba2UmxtoyTTprzzpGpo5Tg6B2oYSPHrFxmn7XQD2eemqGkZfweF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n3A52Yw7ZnvBMQdBtBdK39no6ULLZnUchYjcNMLH2RWW4WrLhHCrR5GiGRUu7QEYddzdyNRQGChm7ACFsJoqxQ2",
  "key1": "2r8eFMcpa25Tsz7AYBKM4CNe3K5u174TD91RLL1eZBsW653Luuvv7P2FSMPr3WcScCzVNXbRnUdrfF29GykqDugn",
  "key2": "2iPFJ5KCmgWuD4FA634ELpdM1n3uNmxvYphd73WmY45eaBeBGGSdSt3MSKm7nTw5gKgFHNQQqozuN4kaPHaAhy9B",
  "key3": "4eBkfdHtmfGthYBUPoHus3zHd12n4mfdCPXNRRmHUoSfqpN25LizyyoDTVU6X7YmbJg1ygJmezb4LnbdxWM8XShj",
  "key4": "3g9YhHrs3KV7CLZ1S2x1YgwcXosMPAuu6SUtCsdBiiNhLQ82S67nTBQecvPfmfGRZCQsep8PHVT4MBcHZ8jLwzkW",
  "key5": "3QNDNk1bVzWcWyF3FWZngRNmwrdQWNMiZZ3Vz7wncjXaSvyiaG9ipfVjd5djbnkGyrDU5iu1nSBHtYwmPYovHTuf",
  "key6": "ourWms7PeD3sShnuDMQEV51oLDeNFbmXUTnPDqUKAP5EVFfVLmwPjHEa9Yz1v3s6NkU6tqZw9YwJNStTnVdvjqi",
  "key7": "TqxSHmSivG9XKW3BZrZkwp7kQG2t4U1bGwZUK9LyfTiQLiYQRyeeULvXNczHtT5MuJPrqmTX9tH5XNupqxn3nuH",
  "key8": "4hacDd5gVYYNPKTi8vG8gGigDkkh6g6WsH84upFXbUbkFYPsrN68sdFaGpmn6bZmf7hNsyKdsnTidaXMN7HquAqR",
  "key9": "3cJyz56JXDSMvBdexxo7yfPrhoXYfT9aQXYUyQqRtJou2Y18WJHGnrjHxDbpayoPJVPpMofxzcR8Tcrkx7P1mGR8",
  "key10": "64GAHmtAEyyBcqn4ym3nRXtMUYKUdjbm5nUiv93bE8bTfNgaBZcTxFqpkfSmyhfsMP5Y85nLFADUNyE2bJBeWCFL",
  "key11": "2rZqAFDexvtXbWZjaW4yfwRhmNgJfwwVNtyJMzRf6vn8vGmLRucFE6va5sTtZeFBVpq7iz4w88f4GQAeepcecWGq",
  "key12": "3kGrsu6dBy1XcHcap18tg7WZQ5CpDvrQKHnr6J11j4fBmJuzZ5gyppt67mdw8xm2jxWxbsZeTfTiMJ44dMPba7bH",
  "key13": "3EpKweLFciBtgejWt8aqMCTejpLs9cX7iv6hGDomTbL9yVmvNrQZhQ4V146dpTvGzBvnWujEqB3it5tkde8ED4gb",
  "key14": "3AE389yDcsMvDCQnkZGJ55Bmhop7oY3rK8WxjEC8pPWBTNgTVLER4JspvUZjE82QMj3pnMFt1dmiMrXLg4ifCdrF",
  "key15": "3zoU2GQF81GrNmQzk6mSx6U8Vm1SaPfHwGERcKcCKfu5DALRGjm6FXDRKXMeqWirSgzxg2ah4oqirYLvLfynDPmt",
  "key16": "4DV4DLb7kHxncvGY1efJKmY7cRnUJmySNtKsjwr6nSwaWGjSNA8XpETA9R5DVS3fxXVKNj21jNxuPbRPRaAvoku1",
  "key17": "2EQ8sJx6Sje5bzyKR3P9wQ1GUSrXoCgQKKtanVDccWmdEuix47QiZFdLYQJMwzfCaqmkJtVetCkwiJxpWjWRCpnH",
  "key18": "3tdseaSV3NpWaNYSkuornNQq5Xo6FnfEcYnXhrnM5ESMWCwzLbvaXjkvXC31PMewrskg4RgyvCerTRD2H5cYcGHx",
  "key19": "fim4BBC5gXMPeY1LFRMjmhvTV9vhqsznqJKNWGQrJ2bx7uCJGG6R9WZhyWzfhDMWcmkrV9XabVhDGnUmJTaGLFe",
  "key20": "2f3gPWitGTJoUeERTKfhM4mbXQNvsETHwk1hErJwg3PrJHFQnVy9pjiBTuVF5eB5fGpRDi4emmnVHkEHr8bGLwbe",
  "key21": "3kjN5KazNKBpcr1Pd8NJtsA6DuvmCsFk79hjmF55ZFsyLNcR1TD3zSJYeSY63cWmf8VgtpFyqo81zAMqCy7KKyE2",
  "key22": "4FaUC9bsTm7owyBg2FL4NX2XBWGN7L6zopWF1KvdcByPy6TWpKVb2ZMtKxdUHdes7eoSpWoVyXxTgYz2DnorheuC",
  "key23": "2ysAu7tnZSYmhJsUZbY2D3j8bfozWwTLKYrTQgDCMfyo11tPYfgWgYhuzQPxYa9SeWM4bAqp3UaEoLAGKU8b4A9m",
  "key24": "E5mK1xyqaS5wN7ZzHL6PkjNEqXwxrZonwQ2rnyb2kQtfHwsVcYkRia1bted89m3mGAQsE5u7H936oDmLoLf7ooa",
  "key25": "5dUME5SFMNTYQCut81D8Pu4MrbRqb88MYddV27DBnvLrZKpRQ9EdxsYZMVBy5d4o1fP41NMqYzHUdfAKo2yhqT2k",
  "key26": "5gs1smhs6wvtLAy2YNS6Mkt49wJHL4JxKBB3jLtrg9u4LuboqXJhPzrd2i8jagzTGHza8oLrXXnrxqGsGnbqGSF1"
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
