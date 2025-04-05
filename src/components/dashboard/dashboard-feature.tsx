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
    "4ZwXEZBtrMHipXG8CC9SDViHzpA9rU9FnwfTCJaB4oBGfaCJ8L7uAJuj2huUUVCJSuZku63CQhmwecR9wnfHeQpt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46fjgq8SvfdLiEnqqxFmw16M6ju9xu9bSXoUgechTsCw8J8qEwaJ24gmiNS4f1ix3Vyx1LtGErF8WasCxQyUjRGp",
  "key1": "2HxHYUBsbwf6v1SbUchGAjnobwbbNV8zXFfq2ToJeBfVNyziefwmsTYR7Pir5mbXcVENNHEc2bkRPRqPV88sxzYu",
  "key2": "ZpXjRjDYJtZ2G1VGW69xJPvhJkR1ACk1sqQEfyhgYBPgfJFTtuUAV2cb1Q88FyBBd6nFgrKoqWfXKZoKm52qumh",
  "key3": "vyLQxK53Qnit6bLPYsCeiE75oxk9GSk5pjebTHtgLp1e2cEr5vyh6vdv1e5b6hhV8zc4VLthFgbyiHrWUoYPhuk",
  "key4": "5UkPWDiTFBEiiERHCeaRCZGtSfZfnfss72hxjsZ25rSFQBG7UCfxTBHxqpUxvLZQt9u8qFVMGhRAzFJf4tZQrDXk",
  "key5": "4Ct9j6EBAp2CixTWymWDhJjgprfANeFTfJkA2f943Bd18ikba7XAEd8jJde2uXdxwtHv1zvydBwYKjDRQfSBAhTo",
  "key6": "zJrjccJwB1oun8TAeSv97bqXbZScCkz7e4gG5jFQCxfTBqnxtKMYKg9tvFGmXqftpuNHSjuqGRxKBJ96LvAbVNV",
  "key7": "365hMydfizzj6gm5WQjzfoJ8P9jeB75DmKgJHTRMrzHYtXHM1hEhE9KYP64UBFNZtebdvZ5DLf4r5hsdBWZ5j3mH",
  "key8": "5SzNwghHfwWphtiocU1jvUaPmK2ZezYHgBGnxrgEbQCMh1tvyH6iZ1S3Tpfa3SZigFNBbhTyApZKUe8jzrwMFvUf",
  "key9": "5ugj6UeiMFsS4y8aSxrSzzABDKoRFSv4gFiRtqhuPFBJj741R5nvvUAkHnuj1cTELBXgv27C2rVUKVHQ8Z9WBokz",
  "key10": "4UVmZDZNW3xkHSg8Zyp3a6ufVVTKwC4VbqMnqHpNcYob2Ak3LjFzUa9G8enz8unTCZejZYxcmyetVax7w2cYgtp9",
  "key11": "FEs4cZVweCkuHDmkseth6MZCrV56gqrw28m7vfFNT5oMN7Xs2VQfB1YaGz7dXyQadfnX73Gci84EYiZaeQ5XdWj",
  "key12": "3odLep8f2KnAHS6e5y8hbiU7jVmPzar9p2sy1GHpmwLETUcuEedrr1akwNF3fPg2isx9Ta3rwsLmvKJykF9TsY6p",
  "key13": "4weYd42MUSZVvDDM2xsh8v9hkfovd9tZqvR51GWg3fikPB58dVaCPYHQfv7383xakxYECpDdeHn5zNddjyeAsaUg",
  "key14": "2Ts6MB8XBa2gJVMxSqRZADQ8wFGBSbAmvNXGPFZXYo1ovMJrD2V3F5PmU6fpMRoHjjNDAZ2hTbyuTgFZuJEzKYCp",
  "key15": "3ZtwT2rVcL2HvAhGBEVwFDu3q1bu3w3kjNY5jNjhp3GubAGEVtrrHXurSKMpXnZyG1xdgTTHi79i2cVSskiu24Sr",
  "key16": "sPtZG2egY7REvY1pakr6SvGNQeLTYJ669WHaRHnQu7Xp2mLAKcAircsMDS65JafcQwgpg5BFPPFC3sNp2RhjUwX",
  "key17": "5pL1F9UDFyrDjSW4zzFTeaKzKqm1TSxV3yWfGw7hxZaUrXgomjJ98agXTVzgetT5LevS5LvFu4hjerSNkoFH48bV",
  "key18": "4AuUiamxJZJbKbeVLt5HWR5NvXKghjCwEjku8TUy2e1xdjRxsiYS1wq2JYt5BhAWZpCJ875xLhwECu5vMeoQZQWF",
  "key19": "2mVJJ7gyY1aD2YZmovSxbxs1PfGomYkoRB1uM3PYskHk2hXT47Z7mF6tjHQxNjSt1ZrHrJA5NqDJPWLH3aYvo62K",
  "key20": "5q8wBwk7AaPQB4QtpkfBB91J9UXH1HZtUgS3KSCwtsKzaNzVqcMAC2ur3WReCC7q6UkyazmNcw9TYM8gpRUPKezf",
  "key21": "3rYVLjphqewYnomhFBUZAAAQGgVSs53iuZxSwCceECVXzcNeGBvXfCVb6PbLS4t493n5Yx3zbtk4i3GhwsDdtme2",
  "key22": "A7epvkCm8DJ9VdFba48A6fh3e2pDSyQCE7yMjVFw1Lq663M9612LPqPuGBAp354dQ7FEMTGV28PbfXnxuRHcj3V",
  "key23": "WnSUxn28TuzmuMCoYoM6KS6RbgoowG2fNYeahdWU6exNkZsLjmB791XMy1VV4yKXYUCTzbLhshh62XzDmhHGwt8",
  "key24": "ajFxgbQ2xBumT7WSMdXiZ1ef9M5xtyXsDSfiyZ13eqArnWggWWH76iy4QMZC13mr7obfmD157z1PcvKRW8LKNNz"
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
