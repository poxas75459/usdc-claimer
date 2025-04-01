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
    "25LurvK4vkqXYcTp7M1XuMrmq71WTCMk97HDFPCsHyrsWLPqXdtq95shmjh4JaSoGeQa9a4QbKeaKQNrijMh1Xk3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WaWJHVMP2Y2ZD8KrJL25TzxXAks9XdVpm3rEM7zjrtbWVADyJVKz7SGQrpkDLM1ZuXviWidzuzZDRCWz6hx2efb",
  "key1": "5GZ8VnvZGj1JTFspek8m7tyPTaZGhwowAdxjUtwVaBkKPexDwJrUBiDkoNBtwtVRqKYdbedWvKPEksttfNZbZhgx",
  "key2": "5prkUsv596qTMtG4CRicJEMsyYUwWePLAhEbybCFNfQXxEZoeL4Bpewprstx8YJNxZrHTurbVyToEMCjHxNq6J34",
  "key3": "4fABfmU47HNBG8EGLRxC9hp1GyjSiE4cRugZT17tZy4MBJoTRv2HnR8AV5qqD5oiD51uiTyhaz91SfVysy5q9dYR",
  "key4": "4FGAz5YaNqbvvT27CqrKVpn5tvDXkNovGfHG9RbwYDhK71M7ggvT2UtP4saWEdpdWPW5oriAw36uYf2wPCGGXJtY",
  "key5": "3RMbzjTXf5nDbTGe6D8QuhM1jzKAbVcqE6csYanNn2iYjqy3XkjhauScHm1zg8EgHmvNpQx8TWpEjUzKstz8JyVz",
  "key6": "3cx44GUWrQbNMeC4vuRFZXTrBiPnBUBtfuKkiWLN5FEyYJCGkDVoVKnCHHmuRp9UnBfCEDzKGHZWRUikXYwLJCHa",
  "key7": "51MCe9PPZNuCu5FaYDqUDG7VeXnLAe5wP3krneoXQVxWynNkgm48MsA9ThFdPzBa3izkUk2aEBavzWkWwpdTksfB",
  "key8": "2ZiyQjfbrzMXg1X4Dx6ZpJd6i8vezNt1p7MFUTH8PzhSXAN5dTLFa9mNnabqk1LRDrm7J9L1HSRGbrDmyE9Gn5oJ",
  "key9": "36ZZeqg1Uo3BsEfKAQ6mbcTxTePpTy528BRqAHYNeJJTKV8AR3To8XPUFZ8nLvDjDYs6GSYmXwspoaaqSMJ45a7y",
  "key10": "3HVrzVNdP5JwXT9R6FFeAjNqvrwuYiCusXVAhA6McFJpEACNpsKdEf1CZ21Jyg61KYPivz7BpQUdJVLxvuwPNP4S",
  "key11": "43ff9KgqAwtygGT6EhdRmF1zwvSft6hHFzoZM56vBbjCbtoEfYrQFCsB9eeN24oyVoFCQwRFa6j7YvDWVfrV4QNP",
  "key12": "36dnD7YBq79W7xG6VS1yGMBQ86rs3SmPbD7AE5kFSzNLtWPdUGJKp9PvGDkAaD5KCc5PLixfX53MJ5kad2hmFTBR",
  "key13": "42pzGMHkNQ2tuSCYUsZRe9P9m1GM9NV4eDXZtYz3dbVTirFv1gAnZppPgxgnaXUY45NxHTtbU2FLrNLywYWT1E8H",
  "key14": "41q5LCFXuX2Rm2rtTdeHXaQTtRE2ChzfkU8gqUFHH17n1WGGR2TZ4WGDihqNsEhuHgAu8B91jPFm3DdXqRTTTcPV",
  "key15": "47r2uUU2p6YHVaEz8jTHbqEy5WF1QrHiCDdJGzioXR9BtSva3eQKdwvC8tCBGLcjN6A2FSLwuTzbKAQesrKLtEdp",
  "key16": "dM17A6n8RXGx8eDHXzUKDPnM7YESooQVKCy5fbqHYqp1Z45zWzJnHoTfwLXSUUCh1W6HyrNfLA5DBLyNzmpxKTN",
  "key17": "3VWxsxJDiBP9UUvtqGuhJ5vBHawLuZhwgWVeayYuXqXNoJEUG2HzCgZGXF26WkSugUgNBFxSHDDrdbP49dA44Kyw",
  "key18": "4ZcJ37kikE6rJoxVLj3gxoTRmhGA9sAQoUH8SCup7vtECKY2o2Dk1EswcYNcQ8hdFMnqPobFkkZiZ8SYB4U55vbT",
  "key19": "5VPcjo99bL5RuoxRisDDVxsKQ6WD4JPbjMLD2nrRFRBZP2hzJWPQD38vWLF7GiVU4nfsYWDW6oCwiKvH9LWxXHjm",
  "key20": "38rhX3AudoHSyU7UErtSGpyiXCn1Au1DY7VTn6igVYyRy7rmR2ByDyBJZUjbvMsfZSquwxLgYgG2i8oRwtyavWtj",
  "key21": "breGUfHFEJ2mWfHP1y7c9dHH7oHwLwKnyCjw5KZoYhHSMJp63xDbgM6b8DUd6TgaWiFkbGXF2kTha33pA5qrKnc",
  "key22": "5Z8CfcE3QkFkwSmrBPA7dycwAJzesp1TA1FgtJbF8Rx1W5A54U9BUq1b2xSyu64w6p7tnGm5gtsnRE5x7STdcX1C",
  "key23": "dQW8Cr8WojBEFYpBpBbNbmHxAhaieAuaV3uL5WpUBMos34YkQ9DzCu51MMeo3zhABzS6KZva8K5UWsTXGgmKSZo",
  "key24": "4S9phZqwyJ5gM7LxDwtTZjqrySaGGPHyt41853VGKJsjd43qhgLc94i9z8nECVwtuLPkmiHMMXdKD84owTvu1R8v",
  "key25": "3z3byUcfzAiCguSKnGRRHKm2686svy7yZ4PH2Pr8Qzrh5RnQ6g9As44ijW2LZiohzTN7Q6G6bCZx2kUyBRSxWWyb",
  "key26": "5HsaWWFt3Cph7q8FxnarMEvpzYL2qs3fnAzikQjhoE5XMGGwhWPUCn3BR5o4d9FZaq8FnK7CwAfwdGGKqy16UKtL",
  "key27": "3i8m5QqFzyhAxLcWUW8JC74Nam5BiFbduLws6cEr1hUzq9rQSCbiB8haji1KcSobxsyd1SofNwifaa1fYWJ9rBTC",
  "key28": "4Ne1RzYjwZhCakqaRDuVpbiZL2Rk5BmeEsBUPhR5nQpn2fyip7Ds6EtbhnZeegoKZWGBbiHpt3DBbDtkJJUfQy4R"
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
