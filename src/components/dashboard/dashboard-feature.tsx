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
    "4HebhcTepwom6zvvjmJEd64DBSqPgiSbHYErj1jABzGmZWhkhkvUW9W8wN2jm2fuvuRUC2pb7qUxEZtpmHNjjndM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xtxzy4RL9TJ2snb4YGQfJ3Xg5qHfo5PgQC2hByzQEEFKdo4WyMqS6xL3exq5KHwZ9RAwTDiN2tRMxVd7KzkK1e2",
  "key1": "EWw7dT6MNFHSE3A1iyAtieqwq5NwWsfeKE6yJRUCWD6eLwaT5oRGDs3sHMUcipiUNQU8ZtP39qj6dJcP1LChqou",
  "key2": "63sJs3VpUqVvPsn4JbG4Uy6SSr5VWYRkVhhqUmNWnknC6YqzdkafEptn3QRrgraqtxMnEyxkERGGumrdYHXHtu2c",
  "key3": "32YNcET9KYrWeQnZPpUCNzECMFFHtUdCGMciLkvTELgnvMbZbLfK9bWjCaK61rJ8JUU7VWCSH586BQw3P3d23EfX",
  "key4": "5Fyrv69YXTFtAvkRBnJGJHcVHympGsDYDzSXdtcev3oZw2g9NsoswsyYPzqXFGJAyCZzEdMRUgZqgqKfJq77q75B",
  "key5": "5tjbmqpjDc2zvB1oEwEWYzdxsTJYQKHewjDmM1Z2QP4ZHBsAyPNQc6htBN9y6kWP1Tx6ywrvVfwC2cstyyya2ewo",
  "key6": "4UQfSAA2muhPccoWGK9mYHSXCqLcXBfnjVf93UEMGmXnp3rqYGkUZPj15pMef6jqDgj1GYSvt67HFu7Jht47H7F",
  "key7": "4f3sLsWW5BMK2aUsgrV1BJQSBVcUWUPjBXPyj3aAqXQTN3hm52qs7NWL7sRvLCuLoFCaG2gX8145oJk9hpbCxL76",
  "key8": "55KxqVz1hyFiQVbosyFxtBkysg9NtaBQz6S9Cju6sDck55ydTwzej4HAFTVToQxLSrDzCPRhy1A9hdNZyPK1mep1",
  "key9": "5EeV4LWQQgVgZ29seUAs7zAhV4JfVDmZRjAx2xM19y7ytcNuBmKX4rUn2LaZM5PY4dt2DvReq3i2qdWZFyWsZCDo",
  "key10": "WaNFfaDdPgjeXfDwYdWRnU2o6ZQ4umnsZkYm7WGFBDpzw2aXZ73mFiuTxk5DZHRRY28oxcd8HXgPJcu27Mg4xZi",
  "key11": "XVXmWzufGqJFdRfjCEv2NhLGrsdaCwfRXeztdzt7ZPowMWvvE5vEFt63JYdwhow1GoDq3johWBJFBBMyRHGxJa9",
  "key12": "dXb5epcM2RMcrbr3jEEG5AWn8nMLNWgyy68zi8gQHPQhBS66yWRKFUhRtBhfXjBztihvGQkqBE6WManJE92Qg6E",
  "key13": "318vmLcKkdKL2ZvzEYjA4GT5qG3DbwKbUq1cJPFLCAevw6waNk5qbzD2mMmn9pL8VHWzi3XvenxLEgfeUDciGQSS",
  "key14": "4gH3xuJRdepcG7k3MTL9uoT8JkeQvvKqFaNkXhKRx9LoSaqTg4Sx2F6rXG3f9ZA9PypXY6qRWWTQE5RcLwfS6ueh",
  "key15": "4mLPNmtafV9hUug7xcJHed654rDmTsNwYzuTtNvCoUZtJHESm7cWyphq4FRtvSj6ppiDSMiTUe4JFBtKwSMuGb3",
  "key16": "2DmwF4LAzUbCCa8UcLotS9ntpz4EMA4UZ9MffFkKneEKC366CcfT6B2MVFvpwP8KZhca9YAxqEng1o2D5SfUZexS",
  "key17": "54aJ1K9LrvcUF9GpufiBNQwVjjJXMSudcBcxxF4mMcEfsae49qbbDUpwuTefswZjiwGVRWGBKswHXPXm2BtRUonL",
  "key18": "2jzAMWEyW1U2ezAu3iQRYduhaXaTLNTwGbH2uUQyerdiD4bKwSm9MEPmVPGfYdoh9pGMag4dsrRZqECnUn8XWqTX",
  "key19": "43TmR5V7D9rcAS5m535mVTgwc1yh7HtRLLDheYcp6J2qryH33bg1WMfXUd8FA81cEozE8xXfpTh29pxu8SC25d4C",
  "key20": "3XAtwhwgmgZ5XtrAKhm1ZwePmPSQm75h46mjeYu7PSoaXbWfX6T6RHNnwUh16ybrSgCUViCCuJVkuHNueDq3wcRt",
  "key21": "2jBdeefAqWaNBeDXNoiiMfcZJCf39Zvjdfd6JYg7K3Pdxosc5PN9SwvfX4ji1Q7r3B3mSTHWWJcVRdHoNEU8HFQr",
  "key22": "2onybpoPcXziDu24LMY68NXpZaFMFt2sEPp5txk6mwzdTJb1jSvaS3b7GUXJgNrEn47UMwZe13uoLrfbmF8xP8ea",
  "key23": "4EhmxsSFyC9bK6mPQGaYxc3SisgLMCZTBUGq9wihKSM2xsJ4VmuFTRs1fbv5BLXALoamPQFtxY85qhQnggJa5y51",
  "key24": "9NYHwL5PGTP9wxgWuw5L8ZRB3bM2s42fJ5HJtbzhwYcdrrwW9mghPDML99Rn5LCsCVFjMnvXYPzfn3KKuHQf9jh",
  "key25": "5TpTfLS2dZD46ZBJMo2Lm1EvU5cRknjM1oXrrWdnN24yB8rMGUyXZcCaarpihFjTRoMixKmZuqyx7vqCipkDtWga",
  "key26": "37BZA9Q2DiUhZHXc8oqeigafv2jo96rbxjiYeSa2qWonhPChq8FQENPg8BejVV6PxzNaE61DtTTyNGFmUuZHg5Ez",
  "key27": "4TKAgK8aXhdbhaHezoXGjhRckxUniRRwJCuyjd7beDP2rx6hX2CZbHUG9E3vqFvY3BcRhppBN31697zpiCkY9ewR",
  "key28": "KrkCF2LR9kiF4vQ3qeZzA6Jfa2VJ6WmFx9HBN3QxNYknhVgJ2Vfvh1ho7esXskYTDf6WKhNmVgVq6DEvsrgJHk3",
  "key29": "41H42zmkhamgGFiytYByrHZPhBQ4nonCBfbVni8iWkzG13boLXBZYcfTHWLXfD4uGsGag7tRu4e989a3cNRgUVqK",
  "key30": "3ddLynHmrKmsXgL9D51M6mHtQsQjf5QNyS8RpY1PV6edrWAfT67bkSNsu6tLG7hRsLAq8xR3LXoGfZ662BZ3rBaV",
  "key31": "425dLq7DDVnMobASGkN8TUgYdKfaqXhquMzmwuXie7hgKsgjiuPRPN3LPfc3xSCmU2ukqWCBuTUkQ32vx5FjKPhV",
  "key32": "5sb71UPwUEoFPH4FuRAYqdBux4BkWhvtyjzbThvCjDYQU5nighpcHnR1GhMfQCUqd4nP3sNgCkVgwQzGeJV46NCJ",
  "key33": "X8S5w6UHd7f4QsoraRVrGh8PFRnjJ4z1XpPvAUr41SoasMzzHRjKD9NSXNadmvivwCZFxHvXj2R1AaXX71gapth",
  "key34": "3uZUjhPkeyiboZdqD1RWsWng4i532Artu9SMCRUwmv7uRrEwYPabCqDUNAMTcXat5DkVdWXHqmnPUbQ2Fmr8WJAE"
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
