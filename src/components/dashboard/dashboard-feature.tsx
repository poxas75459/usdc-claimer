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
    "63VL7c2WqQ2BEHoe7ye3ygeiU2ejX887xtQmwgx4DcRWkjiqpYsUAwC3X9Ta5JratzUdDRR1TRWkULSdQFfNckqB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51CCjfvCZwe3nzNAYghFjipTDYm1zdp4Q9tRWMsmqRrbCHdci3SzhJ9oUKm6ZgEh8RU3dEjCGbYqXJFTfJiG6Hvj",
  "key1": "3N7uEXrNGUJpQ5gBm9TbC27ezEFNpiPriXi2gMSCWtyJd334A59zgNozkPXRH3hKXVXiDuJq1EaZvbcotKwZrU7N",
  "key2": "sgU8E5MtG6iwd4gJ5juW3a1GteACjqpC26zTaAxbVKL5JtcXrzayWNJLz89BzQbV7R4GuzE45NjZzpJL66pX9VM",
  "key3": "2xqtx9VtmaYLznM9e6sYThTdcN11spzLmGWLokwzDRfk7kQs4HjBm5piWm5k6QZgFYH9RGkrzAwaPnh8XNLeZsQQ",
  "key4": "sXrtYDA4PYZJoMjRS5DWy2WeLZ7LgqbvxKnMP8oWdcTuy4A8eqRJigLJTkxpr6WZpkoGMrS7pYDYhpysnKhdDKs",
  "key5": "3yaAAMZEfJRbfjj9qSh3FMDHZCZAx5DnRkxYC19CJJsX8qqvzm4iVzCKnhykRD4DBBiEcsXNAgeNMw7DjGuwJKVa",
  "key6": "2rXtH9dAkhnC3qjWc2Q3yJMBLEdmQTKBx886SmNksMH5ZHttwCS3FV8sgoN5SJSx3T75mdhFPeFNbCTgoWo9qWFG",
  "key7": "3Vi6nqHVxNgr3wfcRUXfy2nU8gZXmzkZQQBTX5WSx1LVRNqifVpXEa9jD5vGSb1nZdujywwe33ZxuC6fqkQVEqR1",
  "key8": "3xDmLG1RM1dKaDr7wGSVyYVbANiGSUcv43gCyNXbwVV7pKc7B7ZHzd1JY9mcFpxgjuKXCrNYLSdwV2oTFmpLW6Jf",
  "key9": "wT1b3MotYCScSoqQQXiSWspUnUJmppgKzReuBWhi35hCDPmkoEWbwGHs5SUdP2t1zKMmFSyzsKo1g3xetkgaa1A",
  "key10": "41oeAW1dqFFVhvyFFVjgfrrSsqBaUzb2q5frLqqxTna5nwp4QosmvauibSCSHuz4jB3paNLJuyEDruZsn1YJqDep",
  "key11": "5rK1SUFUZNF2smQYx1Xz6Mo2LjEroqJz3r7wEbTkDJANTakeNQVLF86tEfvfov58PpcLpwpapq7hHeLUDuhtMTTS",
  "key12": "3aQ5PGqG6N6bqQvrQpT9HFPiqCVbyckzccHhPbXmbcr1NRDACRY6k5s3a4giTqoW2C9Z9NeLpsFNtABv69v8kDfU",
  "key13": "5NHWdTvPTXNw5sYUMr6nUWi3esQS5ch88V7NbGAW3wM7H9tTS4WYDJMzM2VbZMGK1sQKKDWRFq1nq6utvF2Y8qaY",
  "key14": "26Wh1zn3VwcGwgVuq9H9HtMjvTg88Z7zARjKBGgA7ZtBSzJAUgZp2UPKD5ovaFEYxhpGfJhy7JgwLntFqYfvcoxE",
  "key15": "5pzHEx6q1TZTwNKXUhV5HDhUHHAjgser52XgJNywzcZDfUWQ53yBXWh55CnRfh7w79tB5uZ6tXVZZCwinTABNuvG",
  "key16": "3hh7hEd9Rv9wYjFLjcoTfCYcNUDeboCMgzWdz1K7X2okRqg6jqK55Goq4CcGXexZvTUQweSoRHkHG3Zeek9HkKyY",
  "key17": "5hoDanHtqtfbhM41FruVoqPesjk7S7hSKbhcArgNibTNckcc7PymUHbBa5jFwyKetFtmCrMUdQBnYrDC6TiqkoUu",
  "key18": "63xoyeoe2LncyaFBwjGVp2Q7ixsCnSf7dN8waQwmn5MS6zn8uLTRrNJAfSZehGkqGBtnK7hXZChVifXqxBY1ZjRz",
  "key19": "2zfDpHTRxnrsVykDmKEUEQy65TSXdy25AAgr4aSNzzvic61CE938Y8qkugMcC8oh2sjxaj7Rh7sQ1Bjuh8i3K3q4",
  "key20": "5G3ciUAuUWNw41SwZmCxRnUuSAtRMbeeTrwuS56o9gPnPPgqo26mUkqVfm52kFexqmNuF2TBWsDF85EpMBYPX9hp",
  "key21": "4dMwuk544uLKNgDnEjWjw4v1m5QzuSqKZns5ghCrpA6dBxuHFtR7f56cHektwripNLDYij5nRGCkHfiMuVYRoUy5",
  "key22": "nEzyzHnaWYUZ81oW7R3P55P27kM8Rs19tnra9uEDVxssgNoBfHhrDLk8NErE4NtC1bsxrVoRtqM4uBkHDys5Gss",
  "key23": "c61hx9xq3JFZ7ACrXhemFHUSqdrU8wE1WXaxdy5JYqjhc3QEwm9i95MsdVSmYZJKMbWF8qScXFggeLQKmsjgkdQ",
  "key24": "U2Re7ju99Y8vJCs8x6uHMR83wmsEePd55hWkWZMJhoy3DgX4VKxDjbP8c8jeNxuBMaxkQ7VBzHLZG4K2SfWbWqC",
  "key25": "38Ua7CrbxxgQLkwrHHqSNDSDN1p79go8bqgR1N8MpakwmmqLQFfsNYFKTkgcUnZbF5ELze5tPQaTrPGB4vxcWCHw",
  "key26": "T7qmLiBTP62oTFe4BrkN9DgZZEUmTwhqUWxLTvBggQZw8VrbuS9vJdv46Zkj8UsVaZUywWCdsyMQ1sKaqR4ZhV2",
  "key27": "S14hjR9fmhf3et4pfaBcvmgmR2Foo3HGLLQ9RGRuWpMkVxVJF1E8LBU7xvuvHXbkGGKo8kSnZjsMSpZHu7uXJrk",
  "key28": "22ATYvGipRj8AzZxKgYQvn4wHfqLyjARt4WZUwKQ7XdeUSnfhCANjNgHh7FwU2DYxARpyfVjf2F7FMff9xcWWhnN",
  "key29": "FYuJeNS4HvGQKo1Y6r8ipjN3fF8ra4iPRypzmjsPukSHg7mBbawbTde5TjdzM3Bf8Zokibbmyiv42WrQnjmps3t",
  "key30": "4wWNzgmwSqE7GPCD1aKAM4DBnEKwv58u27TmzmH6JuSokM3FjdzDXTZVHwFtfVWbQWrSFnEGpz9DUoAyuqvdgd63",
  "key31": "5aeFdfPojVGqGQtYHRWbuZSdmBZ5rfE1FXK8LWGQKugro8EcJP1dPc9feqUmAXMbcM87c7FikGUQzgU5MGc1eon2",
  "key32": "2riwfLDEDB7bmV5WEN67ZbZfjbcJhTdBeeycYMKfy1hzBs56xRiB9PuTLcejNKbkpGgwgpkyXQWEtyAtmRi2yVHX",
  "key33": "2U8GKcCuoUrGPeduHBVGd2X3QszP5eGXdPj6Ze3sTKBoMhLchm2QKXUUowYPwPZgWrund7rP6QPCze4JmDd3a94r",
  "key34": "3zB6cRRTzEGxHhEiFwE3dj6Aqx7frV5n9Te1MeLLRbNSjeGJh6vkKWARHVm3gH92CLCqp4trUGdFoMhqBYntEuDS"
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
