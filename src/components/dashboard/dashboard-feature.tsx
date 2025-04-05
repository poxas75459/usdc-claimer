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
    "39e42zP5p9EZ9i1xdsu3YCsyZovQ55quFwz72YhXEfRi4k9LM6PYCnMrLYwXzQEyhdkpv9DZAy7C2UC2YQ8BmRvR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aQUd6XWwx5BoUvCnsKHDzRdYAzwJjLt8dedpFS7RLPhWoFFoGVuohYEXrwLSYG8cbciG292mN1iBqJ8k9vqBdcz",
  "key1": "2s9sH1Tbe4Lj2jsBuQaUjbJaz6eczzaUpspQU5CgjX4dyw8mPPbsfvu77viz3wN2SY9Pr4vjA7pTpNDRNRVqZbds",
  "key2": "3gfHhFRtEmyRsHPHu42h8PGnfnNp95UbfqcRVsap1fBpdBDm3gVkyeFVBfzkXExdfyHEsKimpVanVuL2BgDdifKo",
  "key3": "4ebarKheFjhxf4kPPx4RASwzMqwBQHZcb6EhhjQ3HJPXWBqGXV9Y9ghwBPvTH2P4BMoWZoUpPEXntrqg7DcW5qxi",
  "key4": "3dtAyUeHntkisJkiYKn1t3BGrrMGBhLDwfGPDgxZcTSk2EoruwBDq7vUk8pUNR56pQUrAqkr1YYXcKPFteypLDiF",
  "key5": "5Swr5mRQ6AeNXJGEJfskhPp7d4WNdGKWtCXmiqSdgr8bVeXftaPtHnJobrto3QRZCznvzoWwJuLtkjCyLL4mm5hU",
  "key6": "iMLVfTCcYUsuz7KKfRMYH6YptLXpsa92YcVV3FWt9cGv65Uwyyx9F3SFabHLTdw3pWzt5YmEaMBwyCD9beETQPi",
  "key7": "2KhXvsvtd3WF9TfHtBtiDibZyNVmUZnjgVbghHfdhzJRtvaQ8n7o2EoAbd2QDFvJHNXVpLhmqNR6ZdJ2Nwuq34gj",
  "key8": "4hbZd5WresdTy6x7wj3RxMMkyG4yeHjRtXTu6qpY8a6DwcqsXS3E6kK4gMuHR8EG1jHWNDhWd2N8TKyizA7aLyPF",
  "key9": "8TU8ZqGWZFk3uSmsngQ12LZrocLoUbgee1uK22P9iBrpiWYVQdxRt6EzQhsArPbFpHQooK2dnBBEF42zJjWHLnK",
  "key10": "4iNWh4CS4c7NcGYPs4N7NkxgDXstSg4ZfHSQ2oFxz8YRzNVRRc1biWocuh871PvsFiUhZcWW3mStda7eQ9NsapRr",
  "key11": "3Lvbr15V3Y9aRFvtY2quBiBTpYATBmGWFAQBEdbxi98meHbK2MEnYMWWyBP3c2YcnfdFN66BmCGPcGdWHsaJLn6a",
  "key12": "3H2uwFyVm6enrDcRKJDBoKZSxPRj7wMJBJ1xrf5dc92GmvhuTKHpZu8qZqoqxj65qTEMtj7NaHSaq8VjxrFwicCs",
  "key13": "216sujaDc1gbHENyuKhXLf4C8G6J7mq4qLgU8yDNjTK9aHZAtptvZepXnYeY4Y3nGDkHov4i4V7JAfwHktaB7vtP",
  "key14": "LpUtoHr21YqBCixVQrLtHYu4Kt4FMW3GBQDRC4wyhE4yKqd7tjKAr1qEiQ7ZZ4Mtr9roTULDYU3EhKuyEYaQLut",
  "key15": "2AdSzWuSk6A9eebDTF3psNZZDSMRJ9iT3nyq4DMCaXQuiT94SQVmmdYqzAiKQeTrkR3rJNcDHW4fzVhGQKQ3rGRc",
  "key16": "54s2SNFVkPhP1dZXw4zgsr8aRVxvafQaaasyMwRxbYnxH9ZXXNAVNHAUK6FiH9PFZ68FBvPbF45m3BZ95zDRen4q",
  "key17": "PswDLjAi8UTxRCNy24YKh9AEmbHvf3UKUrwKaQRXh34LuLztRdwFmzqTmyBBtHuwr6aZfo3mS7sS49vHdpvVLcR",
  "key18": "P1CkGP4ZkJnMqrGZGGwLjUoHuXpez18tUzNXEKjyfQJFq74CR4GPoAyaX6syTtjPhG6SWHGNehjHbBZQjBMnoyH",
  "key19": "4iacELBx3DFdH96rSnSmYHAaDRyEwqAedqBznqcUtgiQQSZqXMcDgeLfsuBNgGhaJP2WNP2zxpnNUhjMqL6SHQgW",
  "key20": "3o4wjGrRBXpextHvR8s2ZwVRbncb9V89yNCu51BStpPQ3r4uhTuYDLBt8fy5KebdZeuEt5LqKgyPJK6FA7MY3Yxj",
  "key21": "5U9mdeXxJSPH2bDDap1VWzmaCL9Pgv5r7KeNrr9F6vKP6AUxZt7xt5y6ePwrLgE7my35xk4K6gDv9q145arzmoqK",
  "key22": "3N6PnEAEifr977wDQmHT3cQUJFq2yUMC5qgpTqin8qPkATqQyyuCoPURSyYEK6jVhNTzY4FRnMkb5oHNfmFGrh17",
  "key23": "Rr5ks4D5hGc6xtcrKjXnwKWgSGW4t28CDxcAnudc8dtWfTmbudi2Ej1pDGvfATC9HZgvk7k4SWinLX7TsX1iKPA",
  "key24": "328NV4pBBSmhfHpcmQLDbbF8yqawEm85tRgKdT5fXej1motSgrQVbkBKTgnnLeBbGy11uJ71p9hFw7D6tKdCzuvT",
  "key25": "5AD6QTzGBuJTdQTBtbUynaV6xgQJNBq3a8vHNikrjMfB2vy683Pm8RGA9F32GVLsG7nfiPtvjfqf7qGWVyrSCJNh",
  "key26": "5cRDqtN17Qp1hdaygzXpPLTucwZZt6Am1HmpCL7HPEWihHS8d8Ztydzwo2odDGbBij2jZocQMdDaZtoYcGGYXMwV",
  "key27": "52FZVZwgMzXxRQxzfSdGbRqcrSHoH9NfkkGp9TzLoFuLzn5JUvWhRY584CXEtXQT1yuiAsPdG94tMBJjokAbGo5A",
  "key28": "2xF5qtEhjWc4XZJ4E7EJduf4kbmFLhb5j2xBjZVSbQHSCZhCm2KWygFdCa1wddv8V2aYXDBhNspPi2FsDTDojh8R",
  "key29": "4fJ73KfABWetGB9yGbtpXP29UvFUzdhMazqXKvhUkxHb9sYfmGP3qVWXWhHjMkEMgbAH5ugdRNedvsE42g9NgYCe",
  "key30": "5Sf6j8gFnkg7a8USp9nDVXwi8cDeXZbJtmwMxwyji3T6j6urb8FMFLhZMMGYNksDDJ3wcuxzhAe3ECv8CgJf1vcR",
  "key31": "4xthXaaQYkb6SmjvKHLuAbpiU6QcjSpoVaRcBND7kL3fcYU6BYKrkW5ArWK6KJT8J1wadoNUTYWBfn24gBJEWoUf",
  "key32": "58RLyyVXWMJUW8uZSXcNVxV6HLVtHSP4rWXubPrL96yYWzVHB1EpaBXf4LQNVegCgigzJMiLgYm4htYmYnWddmUi",
  "key33": "5K6W1JTuvC1bq7WhiJsCKzu4j2bRqiYGeGvSCRfgX5JaPZ7dZC5wxKxJX8nyQoMFNf65LJGtp5KWHDktH4RZrAAp",
  "key34": "4woN273X9V6iyuBVNWpLu7Jcqdwe4hvgGh4ZhgC2WchwrQsgTbMZ588GgwHrTkrbTEAxgwnjW8MwTCCbqJZZvDFx",
  "key35": "2EaHTRtTYRGkJbEQHyKZE4TVuqqSu6EXmZS6ipXwBvrHPGqKUsn5J5rrAwY2qUoBSmSVZ48fuQ4GJiu9mCjS7n9H",
  "key36": "64ugf1WxEypwrZAvZwHNFqMkzSazHGYBv5EqCYL7awhc1fCxU8NXR6LGXRNaiUQPnRH2W4RW9dLQomwCBAsfVa7w",
  "key37": "32pQZ2hz7HLUKXsbziysiX1TJWgY7s5pbPVSfiT3Nutxh5xLNqZ2Mp2Es7UV8Lb4u54oUJyBa9PrAqX7VtbUM8Ab",
  "key38": "fUqA5vvAzeUX7pcATwd6YSRB8b8NFyBNBGeHTPFofvhyLs5rRjrK3wUiD5DDf9hcgXC6MNP5zMsnymznEwqg36h",
  "key39": "3GNr7SWha3Rbi3nZ28q9QdkbV6wPzy9twXE1cVQC2rEA3QsAq4iSPHK94tF2PyJyhN4o8ctPrfkkm45LXY3kr4pQ",
  "key40": "27tcYjNHTmM87jMsu4kectYLsV7tukC5eMcPaJR67F3e93PwztzwpPB6WP5sv51M1CfikR4UHEDXTYBkg42Z9K9z",
  "key41": "63cw36XEZhgZvnLYTELzsRK1agDYTX1cbXeDGeiZEsRCcx9q26Uy7VrnAVKiFA9JxLA1jTxMNfNQfE6spaBrazeb",
  "key42": "2ZEbozFkLv2Z62AKamH85vvuvRsPCXn89ShQRDyef1ZdjFMoKN4X5ZTrwtx9iyMW1J9XCyQYXJRmSzYarbND8BgF",
  "key43": "3Q5RKb7L6ZievZ2YqBpXK8f3ZXkv5itXhcDUMZYffTCQPyaetGSyZ5WdvEZdWrD1EnjmGba3aT3aGQU2BzFiMTs9"
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
