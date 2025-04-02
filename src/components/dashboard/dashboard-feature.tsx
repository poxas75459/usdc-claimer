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
    "3DtZreR5LdekVv4K9zzspKRgPQni2pdUCL5fh6xkCLVJDVfHsovm5iwJu3VuonAastf2voPnTo8feEdfoWLmdyX5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ri8hooXb34hS5Uug5s8LW5AyCSGuy3qavgzj9i8ruY6CrRUR1J6ruv4GLbCx1DoRykLFHKX4JPLmZENu9pu9AGB",
  "key1": "5omxescEBGTzjKqJHEuXmn2YhGLBtGBjkBUHDBpMe5Jy6fV7pYhzgx1GqHuqzLhMTvJERQYS4fVFi9BMEpss4kyt",
  "key2": "2udhfoYSP83MPYyaiY5ZobPbPuCc9mNmoT5DcKYuEp5u4829zA9RbMNTE6vs8FYudkhkt7tR6nmwCpfCYqj9Sb3H",
  "key3": "5mg5bDywsvrPLUxAuGt8tSpXxgpgGpPMM7CnRtf6G6CUyBg579TWetreeNt6q8ECw55Z4QivfewAzfw4cjXTawWK",
  "key4": "5RgRuSfJnSzFoNw55HYH6f4kCwuDmymEmzUWEhLzaXmPoW7BLGmBFx4xdaJwqw1h3m7GBjpFZn2eRaMZaimu1WqV",
  "key5": "4TmrVC6v8N5UShhSmvoc41Eh4EVh7V3ZxA8SCpSAUWzBR9e1xAZenEGoR4uizJSSJxq7MYgsoqFm3u7TbSX1tRtQ",
  "key6": "4uh1gGyyDjXYaCwGGH2vVDZbDkYY5aus1UvaDZZPqZW6WUEzCPa5YuJEkheo1g4e2xhmE3VJmqa4Gb1MwSDBBAxk",
  "key7": "RkfKTbotF5jf6t8BRUmEMM7P1F5fCdjX1oXbQyZKeVWKHeP8aQrE4C9bsKXj4wCoArzsGmPdD8KtPw7RGbvt6Nx",
  "key8": "3qkgK7itkPrRHGsw5rX1NAMqfz5vCkrbmsh5xXigQioxhBKEmNVNNVLqV1rWmwE3GtjcA5o7hJrbHm3qGhVcgcud",
  "key9": "HHhhcfiz6rqqMcGaCvbTL4QqBfbk3TdELxGm3KU5wrKeb52C2dag8emYVBzdKgcxY8yBgbFer6H1Npp3pBZYBY5",
  "key10": "651K3mEEN3Eto5PTmBge32Y9u3HpxmPZ5KwVTH19H9WT1FaCWHK7AkBnrSq34y8F67Tk8nPp6TLvH3qQkyARU3Tc",
  "key11": "3QUsZL6AqFsg4rMUsa148cNwEbJxCeYBzEnVE5ZqHPkJZahe7N2yViGNgAxe55AC2MWHdziRuvoLE8fgo8tRGyAK",
  "key12": "yy6NdM7zVhn8qEvNoGQy4BTDqJtTKo47Q6DufyWDgdeh4m7f4KX5W3qZafBnTGcUCgPVHBLKu3BNBdxszyc3E54",
  "key13": "xYx2DHSkVhAVBcYiV1UMkEB6mrtALktAybGEGJcuurgbWy2hm8VVYoHqHay5CVo44bvCs1mRSwzt1r4KbSTqcQy",
  "key14": "2YTMS5BZwaa4UngSx99X3HqJ7w1KGvZuJRe6jmwX6uPracdyQooEQxSA3rUS6qqgjQWYsSxqyF6cozHbqg1Ym6JF",
  "key15": "55aLQ2x7eVznUrLizpFfXRQD3iFkKyhTdWtaYcog7CsArHNjcXRutzEE766WnrYNcnXP9EyarnktSLVBBztSDYK3",
  "key16": "55M3zHv5ecDbdjMG4dhXEtjnnYadF9HzxxuggtPh6i923zvc9khnK4TZ78tjZbeDTScVX1MpMKngo6SWtSdqbZEa",
  "key17": "3Mv8hPcjxqAT3LrsrCr1Bz5VkhEcSvaXKgLzWw7u4FAhJ9et5EvfBcyZ7VHYPnuHGX8uM2E4QajKo5bW2mEDd5b3",
  "key18": "FiRsLSisL3oW6fSmuCyjNrU3Ma54xkJFhTsbVde2TLGgE4HFfGbH5KnscERjxXQ69nP3zpheZDDZ4Ckhwp7F3DB",
  "key19": "4bG8gvwQzjd6pZC2RmGGyqCh7jhES2XeE3VT7smcWm6T6UZFuLRujwjhaoTaxUKJWMf3iCS8zQ5cb9FEceRd7wS4",
  "key20": "5zktX7q2DRepDTEEnda6edCTdyaq5dooVX1gvL2vwnrtWrYDyt4wyGAoppn27kCBo6YaCHJYA8K3suB6Y6eoxAEv",
  "key21": "4ScmenHz5t6ZF84tYdS8yQ7qBMcZk7zMySQQH47fbYmHJNxFY7qurx6yi8VwSDqGAEA5QkiDhbN1tSKCS4CecSF",
  "key22": "3RkZeDiVaXbuf8ogn51DEC2VSgan7Toq6nypyBLqtWxDaUh7bdNE3KvrQiVg4CvTP4HLHWaShFYmwJ7vKprxKiu3",
  "key23": "4mTjPYD5xwXUsAvDeuouuqizuNy6bFE46T6UdmpibDj1cf53m1UjsXenhUuQpif35hi46eXnoinqBBity4CKDpzp",
  "key24": "5JusktrjKsd3xF4iwhiZx7wCXxsEHC15hqufCpanocmzv1Up5NwrNoywuqeVk3gNnoFkWXEoamRcdoHqT6gpKnCs"
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
