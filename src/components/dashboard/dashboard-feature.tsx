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
    "EzZSuMqRDsiQSZD8apUEnxkSHjWcJDDAB4P3ucfC5GTMnDrn8zFt2byA8astZd13FgX9PoURC3wkJ8BZzQ85Bcv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hEUiDVgfzRaDs8oDXJK5c8Cn9RsqrJYEMA8vZE3d8WHmgAP4XARoUDneQXpYy3Mb7PrHk7APUFQoYFM1cShZZHP",
  "key1": "2BLL9mMcx2mkFjcG1YuDbMUufgBpJzd4zJCyMZ7uHo1U5TTtyXXE7RKg56fPXnCjTte9JNY4X16Zt9mVutCV99bY",
  "key2": "UHkSKhqxetnY2pt4nFSMpecWeTyhUYL8XY9GdjUSMts6tVhomznJ2z6neK7qFwsN59bHmFgjNKGBvgjwk8cLsR5",
  "key3": "48wZHMgyJpmH8BxA75i1npzS35EaXkTTjUPq1siBGXEL5d4y3L4yYwiRrKFqB51NPGWUPGm6EW9kjQPdFD9uCscU",
  "key4": "2RxBgvvN3GTsnBjrzbsgZZHAiJp25ZqeAU6jfFqevrs5dmtRjnEitgChGaBVo7bJCQQATM41fzpwsYhDEhNQt7kp",
  "key5": "5aNVsnaicZTbdMndk8ZsSZuAL4DrY4A3wMgzB1BdFbcnfkV7YqhPmpRs9LhZCaxanXSfSjYZRRyiS7xadmZ2VrUT",
  "key6": "23zyi3HqrfPuCtvYfqJ7cQakWFWFqbHSSTefesxB2kY6GHdHYsqLHwvXj9fL9q2nBpLRfwb5c3QrVp7zmThN7Y92",
  "key7": "4ty54NxHpJ7ee5cn8JNZAYrMAnFrWHsC1btygWAie1PySru3EECydU8eh9R89u84zKqqbMMZbxJmyv7ZtmnACEDh",
  "key8": "41Ep9vo9oFnzwa2ZezDSzy937URcCYsgLQaRmMaapG8QHEpeXY4EFQ9kUShyBV2Mb5j38cXKNk5S5yui3F8KjEt8",
  "key9": "5UqUfZXtxn1CoQ5z1xU4Ygh11FT8UAQphNDtxrruLDtGNSjupFcPk26Q7eBLZeVxer9i6ByEmxMeKjUPbjP7rdvR",
  "key10": "5muDNoAoHYPLsiqu2YHGtUy2zHhphWW2tDfzMy8iZGgc1Y6bbfSoJtWaC3bFHLD71TYkpXD2tzmxL5a4NvAumJ6Z",
  "key11": "51psYYBCPZwAqbLaH8VmmdFtCoUBiLC6YaNV2WsZXup1sfVVNFbNjhuuYEs3oocj96nU17R73P9Nv7DyEuMmkb3m",
  "key12": "4edXFHJCzgsEoARDhGcFgSchrMQmSE874qm67Va88Xhy4NovaixFXsCeeSGGokHQYxfrZeLLKAApYGf44LvdHb1S",
  "key13": "5H36ZED53MFe6nokvxuqkbMWv7KVpJjrifJLFtUanE3DboAU8kC7s6dtpActm8e3DMeBy9dp73rQMP4HJcAhFfTZ",
  "key14": "1Z5ELt4iyiaWDcXxNo69nYTigxi2LSgExjNP7Gdkip9tHYsLSqHZE5DBL2YsA53Qi8P2GafW5eeenWkAGHwy6C8",
  "key15": "2d5VZgrXEfqMS6LZHghC1FWJ7yVtu1sabgCJvESvunTHoFRZ9qYn93FpEWtzEk3b81RhGWCZaVDTJzXuZ1jfkihL",
  "key16": "3ov64irWD3w7Mad8rUApw2QikXDaygqgHXZaMwhFDzWLoiAP4FoQsfDhsn1rZFfBGvLWWifoktEvWqfK7p2tDvFG",
  "key17": "538rgfEbwsknjiFQ8gmgjWfdN31Pnm4nxP1UYbwrYUeXee1sBaPz27uqer5umeneLNheSaxHJHBiuoWRkF8CNnEA",
  "key18": "tsMrXhMG94Pgn8oPwgHhiu3QK8kK3FkuqUBUFYWFRnMFSxu1VWEx8gdVrsiXCNdZwhnpgN5uMnCJaKP5cwsaZuW",
  "key19": "4uPqvgTwLsX4RDtMTMwgmojM6wZQrVFJ5nQr3k5Kj4iJwK1Lb1r5wkr7SeFe7i1oooWUDmw9Xu61UaSiijmgEgP8",
  "key20": "56ENMR5QPmcreqL3J4DwfLHZmPwBeDFAYtjkUj28JN4JzmjJmvnZjMVzaxpeukd9Fnck5PkaUzsPqA4utKC5eHxy",
  "key21": "3gAAoa2quYBwqWoMqofD2BBZGAdLWnucVGj2CFusZigRMh46PfeMiLjFwyBFnvzQyEqVoWZeEGVa4PSHzT7ZcHED",
  "key22": "2e6jLzfRnQux9MPaVEyftGgHjn5zZJr9fxW3YBKrRCnwNxLzh8yNq2XccX5h6jUXDtjjCvcZ71aKhjGDWonf1fuf",
  "key23": "2XhdvmkB6UBBamdq1wJbfwFYf8XGR18UqRMfXar5EyktCSoxSXxQhVzF7MWq7difoQkqCR39e2uj5DyDwV5txySe",
  "key24": "58jD1FaTe9vVNv57SE9fh6WBb6XvWLz13Cy4hRjqKQAedbUhiKJkXzPBeoyRHy33Eb3nyQox27BeD8JLkwYNWtVk",
  "key25": "4knqn8netDKk7y1hHEjjpZ2UjCeRxX5VEsK57XwuwB8VnNx642pyWyaEuU7dM1jLhN9uMLMMXavnr56Kg5cNwBgm",
  "key26": "62gcKWQUF7a65VNtpwBasG8hTPdudwdgx2ZTECd723Nsh5A2cQv3yLczESiDiKosngu2SvgPaXeZsf6WeTuf3aUD",
  "key27": "4mqw9TW447XhoB2AcbEcffHBeNKY6phz7kW2mE9ppReVfrxXsG8Znw6nnodUVeqYQ39rqeQ2kKqZjGqr7j1kQpQZ",
  "key28": "2M4DCtegqkUEwJWyHRBtzzdXYNuXtLK7wwjx2XP6JxFRBDW9RzyVa6aviqgz9KKMP1ZBo7FQZszSkPJozeMhHMHv",
  "key29": "26BkjkQHnABdJs8egV3BWPvhisebrCywTuqHhsfbFa6kug8F3hjEEPukwRyednjupY8uM2gHYgrXiC1dtr1E4229",
  "key30": "BWdgBEq8KG4Q3iW55BagxhWRvqdqqv2PD8A9X3GqQuvSBy1cFqPczFMbkG4Sb5TxwinkTEVFqeFqpLFMaNQt1uA",
  "key31": "3fpZ7NGPm85tJPrCV31FrYiRpGgSRZt3xuEG8nVuXE3P48tNqpyH32PAyvWWWzj4fSL5CHuaQ7GCNTtzne8AW7ni",
  "key32": "5E8aSpDaGZ3Wpo6RMkqdYe3pt6RSkM9mkaQTp3bGP8Gv2FaXx7bydpuafExbG2vVihu9oBeowPUuVsKYmBmqd9iN",
  "key33": "5C3W69DwNhHwDVxeeLDQfx7YK2kRbuDDV7i9vQwuUCp33NPH9XBQRpsLcEwQAPzMJjayJW59bRxnUVHtzfYkNYXd",
  "key34": "4sfEoDYsLo4ouPYYAcWegHbpivpotQawANYWmRuyNbn6zhqZqTe6DbJZdViqunALgibAthadyfLfykQmTdyunX9s"
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
