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
    "4LyxjGZogaJRGFffdn3X4EFD42MKd7SSVJhEibKRqmj5sS2vVSAaNoM7qMEKJd3aT6Uoj1uqL2eXaz5niKbwFFNH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PKcnevGjKqk2EWpEZtZ9bghjuFuKpR3ndBDxLMFpXixtEVvzqa46LndUf6hwrswMWKsysShRWd24q5FMK1x5Boy",
  "key1": "4ZWFdTE2KMcEqW75TyyT3pKfrTY2Q76wb8GfFTiZFNTGine9aLAahLkNJxCZV8Ko4kvLrb9zkpb78efgvAwZKXJF",
  "key2": "3SyLq82wCqKYsGEHGEnBUzcLXbADPK8mAAQvWANRLvpP7NTPm8QMhZsP6tu3uwgC8bpFoD96m92weVtN1axqpVq4",
  "key3": "2ZSvccdHLoT4skWrVS8qawoSxVQVwND1WEc5iGsAQR22cUFKqiZQxmi8bJ8KvLNtRtf5gYFpziZQ5ban6Cy83tNc",
  "key4": "5JmBrJzyDiyzVS8pH2wtMcBVurw69RVSPkoJTvZ3cP9ew9n9eyzwV4wdELch3WjyJx3zouVGNxs5rK7Sm6kH7qrL",
  "key5": "3ZavxaazBHZNnNRnjJDrhKf3rkCnUGGNNkwrwfVfNozaK8zfL3K7CAQDXvMhBipqZP3h68hHRGXTBsUQmJYHFvGz",
  "key6": "5c8nad16DPqQeYt4JWDE8DWNN8F2wPaSArfN3LZkP9xpCejfnST5kwxMAQQLjusNUt3X8HULr7ZX4c1NFkVSdhEC",
  "key7": "2J2nAqbBJrFcCKYqbZ4NqwH73AfpAtMFm5JhW2m78D1wTWkQfQzisShXSr2W8Bc1ZxL7u1DMUbZx2c9jJeeXLHPL",
  "key8": "41StKEYJNtaWTspy1bMgoZLVm4SSS2KVTLKG4nVDJ8fgZADYKQBYv6cfP6BCM6kw6WCXRkSUms4hMseXuqXE4sPq",
  "key9": "412rwHHZ4xVWN41DSYCCm5qomVgmtz8jmewCALtXtpzJ16xGH54mjmLcEMLpaKLCXwSXD4WDPaDuQzPxENSHZYQF",
  "key10": "57qYZRLXcXW972fnx4LoyN6WT6iMteV4Vs3WBfPQ7HJkWUCWNR5yAJEv9SPHdFJ3yX5S2VDu4BatMUz3vuPJZwRv",
  "key11": "NzPhjspJAReBdDC7vvSgyALXkVgvRDJwtzZDfQLdjknVbgVcjqMmp2nRWGqAVBNkbTdJ2zDKAQHavSfS6GtnERf",
  "key12": "FhpftATQcHBdNi1oCDjxEr4JFi9g2FgAtVB1XPYuXm1VSfLGf9gavaR7pdGgBTHCo8qqd81xBkodrSzgPEhkzTr",
  "key13": "4XnMNEPeFaYZSUJXkwsnoYGZibyCCXSecMqoLwddvcs7pYMJqvrdU59VJLgxESGYETTY1uJh5Mss5x7Ui9uPbty9",
  "key14": "eKpTpxVjxLrARzzeV56Hrhmi2YtHnEC35epTvAfceUcdwUQjYViKhysLjKvSrER6PQv4sdMdGun5j8MCSvZnzFs",
  "key15": "5xu69shvEVfw9Zfs4WpsRFJK2KFPHAq1FZswmpGiZp5UxJhvFqivYtV7ZXnQ2x3J5dW1mwNETG1tzUDq5mj7dJH8",
  "key16": "5ZjxJSKLXtaxVYxAyXjBoWkZTG3UfjAFoqysndE9onN7o21TPQSqQnTDsimaPmYGhGfGY2if5JSJm5KkcsTq7czo",
  "key17": "4eBDekU16FTiwxGyXkuUJEtp626QDvYTsRmtz2TCt7jXTjX2f5ZJsFbLXtt8Ntr8jHLKsT6jjroRB5pPQGk3nBaG",
  "key18": "3WKzKsxHfB6QY9d7XsB5eWd4fQZwEHiB9r4enBsD23SrPKU24yXshdMBNidU7KqPUpJeAp9FzKiPh74mekBYdTYS",
  "key19": "5wVJtSvDFGcQQ4CZejzBgMfiU1oyz74dvzi6roFN96ZwYM8tjefQukNQqjDEkWUGgs97oPxZQRWsZsEUUg7bwDxv",
  "key20": "JZgu1nZz8umag57ZV862ysPq4YAUijLqmVsBabVHAyL4gTCGrW27QhbQpNj6HpfNL724mxxfkAmeh9j3QjAdLvb",
  "key21": "4m4PMcGKXrNKxEgYbsML5PMft5qjq3JQrAzRVG19bYzGz55AKWLzfsLrQCvtV8qvuj3JgZWQmZyAcVi5DA64XGpv",
  "key22": "Qi5YRT41qNp2wqWwFNT7gPheA1Jz2wEsUeHbUjTQrQ3XuwpPCDX6hmQNGAbyifac7mpSCVmesscNHCHj5NULWjm",
  "key23": "2N8j6sDfMQBtL3D8SyfVPAeiNLtXYSnF4MDuDjnqQCNEFTRVd3mJeWyy8Vs7cZMSTxPnMp386titYczioWRV3s7W",
  "key24": "4iqxNbsUH5Rfm9krZ8w8TkVKRP3CqkWDqqdgL8rfPTyuagYNvP2or29QXSzY9dZYQMBvuuj2dm9STMZYAH8nmpyz",
  "key25": "tiU4ybzpo68k7KVxFNH5Gqd5HNGaLZtXCUuJZG6BMPTEBHCrqbVgZ8hqdt45DM4GJd2BfKciTjct8VRwZhnU38w"
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
