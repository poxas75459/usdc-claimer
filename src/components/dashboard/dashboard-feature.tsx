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
    "2DM9LMVwiDDGN4PjcpofUrobGbB2bDa4vAbD6KkHkyXdxiG9YebyrvjxuVVVSyHFPXxwK2UNaK1VqppL9ConrE3S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bErihHR7tK44np5iJo46ZQjhpKjAQqMEK3zdx6jbhobSFt2FM9z5VRARLRckAarTF5PP5N3kV3V6TQX4Hb7QAfY",
  "key1": "2UVE2jJq52pGoLz2Lj3G8EvTjxNb2TyMxwP2ARpuMbz1okN6bLWAkciYzZ8c8LmgQ7otjjvyJfZa9V9hhav7Fxwz",
  "key2": "42CZDNNxU28yi2YNLuqHRRaLbwZLJov2Fj9C3CA9qjg7ftqiiATL5PsFFYXpmuvy4gbmUgCdHR4HUkmCPnxJGACa",
  "key3": "Q6GyD9A4Sby9bXfLzvzpUZaN9ZW7wvUWnfnQ8XXmae9NUfq1Hw93kUbQ4cL5tvX5QyYTFj67c9aTpPnDSkPvqz4",
  "key4": "3jfEw9XxLUvZdVSvMQKJrfA7MWK8k2yH2G7EDGqjKFGmkbGkXNq3TmMH5PZvrrnYemTaVikCrR6zG6M6CNfXhUsX",
  "key5": "3GzrnGknAqDxbZBMG5MuZZfoVo689o9b59in8F8c4bqufML9ULeyacC3CDsKcBmDsnyB3VU3h5EhQHQRWppfxrwH",
  "key6": "kpk3RLjK8syhsoS3SjMXzzp3E8FumhuETTMG4nLxVRPCTDBNVa2hL87Krnxghu917VUuzVrAPHbAvc9ThiRxicU",
  "key7": "5o7uJ1WjFQDyfk7DzYuwotDiemzEFhpip9peJoMaRnJPXqXwhWQj93QFCnnsm5PGYhBJ55FFUbSWCTaSkx4TEX99",
  "key8": "25o9qDDarbd7LFEwVYRsXwRJApGjDnaZuB5yoeXBRC9LNv7KKUuStcmT9NAV7wANzyd6xYJeBeDnaM7A9BJxKmFR",
  "key9": "61q21nM6E8Amm9iHabPbLBzeA5hsiqApRaQCdPaQ3CpjjoURS51GEhdwydAmR3mxHX711WXL4vkU3tBA2XUs64nn",
  "key10": "3o2tXLvCdjpN5s18PtsVQR9xb4E5LmnWHFwTe3cta3sJavL4cuBAJVbcKv56sfokjBK1xPC5xEA1obGMtGstG7gK",
  "key11": "5eYrD4LPRZPf1XChpJGaw7Y54fZYc5QH4PgmvqTDcMFy8fxS4XUFsUhx8LwRcLcRnUZHQKszqfmuJkncYajFcuSE",
  "key12": "4aiLTawNXCmnbRHFq9sBsp1syNXcLUhYhaLYZj9t1qokGXHnGgKoLi6nUSswctf2qm12vHgyLGnXqicULwtpaZ3e",
  "key13": "4hedaTmdkPhro7dG7s4dmLW8xN4pAkfpnFKfbtr2uMBPBVf15gyYhBy3RfEx8dvfkiAhkdGH5u8HcuA3yByTwT1p",
  "key14": "3JX7SP3ss3Q4jgRCS1XFTkgBqPVZGQJVnVwkqTnNY2bNgwSDQa3GyvjH99fU7NRP8Cwn4B7acnwaNNj9FrzArQfX",
  "key15": "4aPYBZVSP727n8dxkY8SsxDbZSjMSN8J8hWPYb9e2FpnVuYvGwa3oezLbC7GduCXyRzC3YtRz9FTUkjFg4JsDYaA",
  "key16": "5csQ1B1x7zn3ddjsC4mbLJJWUQnwwKk3bCJu9tqNJ8dA9CpYLBKcBmnWPfDdNNETUoJpJDc9vAFwwJpzhsSRVkAL",
  "key17": "2FyDDGYB8P3uyGxfKqJcsYrXkbgaYokzBZhxnBNqjd93TpnfZmiqjaqJPqPVLCzzPWiCAuuuxkaKt22iEyyEWCfH",
  "key18": "2uoyQchSnNdkqTP5pHLDrywPzYDmfMHZ1YjtGernRbofReK5CZuQntHLwUe9W1eDrSpt5Gc76Nnn5Jkn8S8tgtq2",
  "key19": "5YPKZQbdYPHXkixK1dPyRKmW95faR1bEbhhE2Z7cRbHnx9wSS5cLCmTG1kPdnSoSwsox7tTVEeyEA3uzN6rKAjso",
  "key20": "qzL2j2T7Wy9NxPb4ryupnhujx9siNvFtxrjbDY77iBzeBMPWKcUDSX4na8jT1tGBCSBeNWkSgm5hYtunxnr2Whx",
  "key21": "2WnoXmAwyjDJ1WUZm8uDQrrCCJqHeK29XcVEgjPfZKyoAG3vLYJsDvJBZRL7eKGFRDr4T169M67mcmeZXQa6kLRY",
  "key22": "zVDDVXagn6CPt5adaZ2BtYU9LF2SYqhc7qRPLu5nuJR8LqAL14oyCg4f4BoDEZzasdsvnXeHHAcUdZQruG7ofED",
  "key23": "3hhPqrfbGk3Qnm7fWq6gpfNvra6Bqg3d2VetngwWuE4ishYChtFcLtCh2hyzgVtWh171SpW4dop8oRWiy1QrDMU4",
  "key24": "4vS4TWH6C31iNCs6UzjsdbnpbQZrSGSn8qk6uDtXLD4ym4XwB5a8SCZSpPzED4btB25pThpar9pNBzKEqSX7xGj1",
  "key25": "4dX6ypQYgMGCYgbToQTE9bPsSS8UaPGgg9ZgWx5Q2UkprWN6aoCoiMUiXp8ukf3iso48TfDERff1UK9GFcAnzqpZ",
  "key26": "4VB1n2oyJHingo1ydziwrwhUdrGdTnKdzie2zSkGEWvJ3TxKDDh8cdHibaScmUJFKf6PXpkRHxmYioTBzEb9SMbs",
  "key27": "4PqJ42k6niGed7Lh9W49bc7YV2VDWwL44HkQmBZnyAQ8dxs6UMnpSmmsujFpAxP7t7Qifop8259uFaN8qWnhfVci",
  "key28": "26WZq9fjXv37GaqEoBALu3sb6oQJS3ggb7mv56xzSdrCo832zmKWrYh81Q2ge8VSJ5cPDK4mR2e86inxASLJkHeR",
  "key29": "2wpJsTqq9c9yczvm5JM2Q923FCMhBjhK6KyEGnU3HM3jxhGdwkcU6n1Rpviq4NhuSojTjA9fn6T7M6sXMMqyTQik",
  "key30": "4reAv86NTWJo7QLuTo34A4eiJ6QrjzVEFXvjAFnUWTN1jbk96ydBmxevYDSSeTYqXFGF18tSVQm3Af3rDCzezefN",
  "key31": "5W8Ng658Tbb3sjrDS9mRHr2NMMkcTMFhqfjsYgMNdgzgqBQdqUhCwocuYJctKuewXJUAw5RJ9oGu7knGohHqaAWX",
  "key32": "4DmW8uMyupyj9peZKsNb3tzEgZqEos2NB4ezZkXsUiahPJ6bcNfMgDYhMmR9WvmLXiXZDzE26xoGREs2yCrL3bxU",
  "key33": "3rukdgEAzppSfdLS11qaTtVScmD2yLw7xcorNbjCtZ4EtKks5ubxNNiw9LiboaAJDbuLsGeoH1g7NQjuUAiMT5AS"
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
