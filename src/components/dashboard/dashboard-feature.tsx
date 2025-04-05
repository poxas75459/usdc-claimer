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
    "5JPKU7WJyXfkkLSCFiGhDSoPRGcQ2URQdxXrEkMumnff6TsZF9A63Qt1FCpaS3nrfaAGyj7TXxuLiLKnqcTqhqNy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f1jRnAhuFVqw68KiDWBvWTYi2T3KKJFgZ1d9ZmQ52n4up36kKg6eKLeosBjgfZeyvdB2Ld3f798BauqxAmPPG9Y",
  "key1": "3maSy2FBM2cdbige8rzTixnVjLtXFgXrQvbvCbeaNoRVXRL3UxheN4vaBakTX8yy2UoiAeEHGg2EV6S13vC7JJkh",
  "key2": "49eaYgGkE3w43Kq1SeHaXyU1g7CYyJAWaWHFHfyadsoYNNffvVaCurMXqMdqQjx6norWGAMnTPHVXDqbjJREbmyV",
  "key3": "3qVnTkismKLuCch6k1aogMcTC1e1tTa7bMuJRera4Kt6S4p32oNHXkjF8XRNmUYXtXZEaLdNJz5zqaTDWb95ayxw",
  "key4": "KL6n1Jt7dgHLnx6qqgYg4Zp8S29wRcvQqgETTV7juwQyY46UpEPNqmDabi9q2m1Qgz4TGfsTTfUVA5ujtW3iYtq",
  "key5": "3Tz41iKMsiukiZyvk6UBF26TsUvf82V7f67ZpQRwu69nGu7gLCHn13AEY8hJbnRzmCk8JHLBLZuwQF7pbKYWuaoG",
  "key6": "2hFee7MumAjUbaZUEUYkF3RitfviJtdoSzkGsW9Su9Y3fEBVWwaZS1rnGDik5cFm3nA83qSkpytS8YJSoWvE9GJL",
  "key7": "HQ1oiMzvqDJVJP6euhcFMofz3ELcTQFs7itdGVgktqUcv1udwx5ZatkmVZGpTBc2wpxqqkRMYXMYedS5geKPgaF",
  "key8": "5CfmaZ232VWwduWAueuq2qWZQCjSPJaVHZeeAZFMMFCYPo2VmTAMjnJvNYHh3FzuEm7cinbrd2V34xQSM5dr7tto",
  "key9": "2Rysk8eExZuLZFovvuMo3wVjcJ3d7461wQeugqxMdYQwDsZFYojBiofUYMWJb1CByJjaAs4rqWZStjpe9AEq6LsB",
  "key10": "4AYpFLxNffkD91GxX4ciVoqbRCBPu5CbLGk4ie4vpbpTCg1b34tmWXTtsVHvbAnkP96fHPmGNdLYDLsRVw8uYTra",
  "key11": "DPnjM3ZUFfBQpTGxPXB4omCbxePm3siGQw8DTmtkkh4ennw4yde8VQkqn6nfMXbwyMry9nUqyHhHfU6UDjMTgRP",
  "key12": "3PrTg11CjQcVa3qjiwxQ17Cqztedimp59HhHYV4ZFLSXMurE8sFf7dZYidso3BWm7tKrHW6dZHk3DPfSKrkLvzbh",
  "key13": "3s4HJ8webEwNX6yB38Nyw7BX5vnJBpr6VqWeamf5hfE1jXXZN99dNxhEqQwoupmDYk5ff86ooYzZphBHGnPpsBDU",
  "key14": "52FsLAKtxqS6dxJrztfp2jWq2QzbP5RsQQGLqfH37mfYyNyDUc9KhVHML8kU71rGnB4EjnjXTi5y75vZafmp9PbZ",
  "key15": "2EsnMSkeiknD715JdQNa34unui9YCm9uPa9swkcnTPvjM5Y3snTNB6DPWxhfELGHVaFCutKBFF5G4Qq7G8nzHzbm",
  "key16": "23cdEvM9fA74eqajkne3cT5pHYWsEkmYpkcFk1CFNADLF3E7RaZM6fqtq32rFCyurhj8CBvhnzsNr83bfYjMXh5t",
  "key17": "3RHiThezaV3G25abNptvcTrofV5WDgDrSALynBXdnPwXRr8JypBVohpWDV3vMwHXY54s7t4XiX3X1ppht9SikXUk",
  "key18": "5K7K6wneewSZqYT3expNXnNUw3YJvQWv46eBCrU2XWamoRqX5bQ8A1ocJrLrrKG2AsLkHCTADJ4juxFAfhv8Zh5s",
  "key19": "52HFkRpvss9JxqvWRQDNeoSd4oPha5c32rC5iU3vLZwnsrvj3PicJgWvzykq1R8WN3RNi31nAUBuAuKH6vk5eJGa",
  "key20": "5SNWjzUsdLumuxhLUdbLySVkta3hDDRCGwutAhqJxH1LVxS22jUTu61n11fAyn2iz2k7c7Y8A3o7wMYMPaEP1fPL",
  "key21": "4PDNyDVwvksM4v5pT2YA9cMoaGAFHgWMFAEC1qGPNU3uch2gATeS9w3DrNoQTqkrw5JHqKg2CtgHwHfqxeuUgXXG",
  "key22": "5hWZxkU5t3K3b6GGui7nmFJ7NWGurMWDqWYQf1cGvAW3czikMCcpjYeDu65KGSN7kMWwVA5RhKWjLbS2yHrRMLQt",
  "key23": "4iHgzv3etcuAmHGNN41Bm36Y2KCZZyEQNGYr2JeaWdbGLa6VMxeAeUWUyDzDk7PKaisZXWAdjza6fi1Qz9jwJnL6",
  "key24": "2sp5hVV3hJ46WFnyG4uktngR35SSKBoqHaxXqKrL3kphSM83hSWutrD1EhqUmKp3bKEmkud6RMevifjCuQsDewX1",
  "key25": "2bTBrhKCq4pFm6n92rqknp4NffrC5SePYu7p9gbQET2odh8dag4j4yQubhzn2JqNsgnQzJYfDeKJkMWLtJUqQWu7",
  "key26": "3Zk44yPemC16efMg87zSGFD7QbLDt3YgFMcUBD4nN44cpm1t434VKHjUAPHAuRW5EVE8uj2cLVfMvqHm973ToJPV",
  "key27": "2BQQ2GYZWmdL1VdNrLB35JtX1rsRxiu5MixiBTThU4zZeAaQLZb42NRFfod9NWGF6UYz7JytmWpEdek17wSgPGmB",
  "key28": "4vVneYk14kXat5qkouV7gWE9YV36XRLWK35xsoX8sNGeSPzqk7hbDavZDyH12kzB3zWHW8ztMYHmaMxHwSg8CRyC",
  "key29": "3dMFmPwu6ZLBcyqF4QdUrR7WLHKJG3A5PyBQqtxRqBicQ2a8FHYWse8z3ondLZc6nenCCJAAFxez7LeTHHyt1QMm"
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
