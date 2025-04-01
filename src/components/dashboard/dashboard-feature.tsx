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
    "4JVJhVe6W4jMjHuxnjFY3x24r6MYGbV1XgEryfG4pwwZWgrJ3ftJFuTHub4t26aZWxrvnvU7Ck2k62TEV7mDJBMs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cd8TRqqJtfHpHZ68LkjRF6HW4iiwnLYv7KFXQGpBG1n7jRj2oCLXUXMeu4FypzyGyc835BRHiupvdCJGd41UzUE",
  "key1": "3BYjumLvesuaYxKRXdRY66Sxs4F5bWg4jYMECSm3mfHe1XGvhDPTidYVsWXjCM9dCJsGsFiGk8th3dd73Coz1TQp",
  "key2": "45QqDSZiU8TLPcWqndi6B7s8K9j5P8iAsYYV45kJAUwKRAtbtjnQrp1ZYssRnnZXJTfiM83bjV9HHPH77ZSzhkMA",
  "key3": "63Tuky5BMbwHicnFMSvCvXyjC6uprcAdD5mnXbqTF1Nx6P4uciUBBY5pf3PhGdVP6TAQ4i1PbgpqNAxzucMYyWbF",
  "key4": "65tVmRufiVv8RmDUBCoV1PEVAvLnwmCauJRyFKYA7UUAdsxr35WQ16g4KJTpP3Hx8az6z4rHH5sALGQad1yANkze",
  "key5": "2QSwd72RonaR8sZW3EAK3bon5exHQJ54G9jxR2kG4Xny1qzbcPqLyfxgkHyKivnyPT74rVVZEVRefpXZQunArYSQ",
  "key6": "2eXyKxqsxgJvoMHSfdGCdocLrc8PukjyFsRo8LEJZBimyU7SNBZWYHTLn2UcTw33PZMV13EL7rcn1fJ8szDTWx1D",
  "key7": "AsAJbTqeqU4uYgUfPDjYMrUuNYcqZj9R19Wdr7oGBpV1ciLHUavg63FfbnGfrLhkjtUrF2cAKvUHAyDpWT2hsk2",
  "key8": "5D2wCCDYNKDA86uKSHo7w3xT61eVE6bcKF2de9wZHxmUgbzVkoYwc39xu94eH3hYEkXuPFNmxzuCNMhDsiUGhAwq",
  "key9": "4cbhGMKNTVru9uhQKDpV9we4nscWTajJhyTpLp3UXKaQpGshULsMTnqPfMabrHVhFYATGo73kG9HgYF7GcnycEHj",
  "key10": "3ZiVTH9kPhfqA2zzyxFH9NV5xEt3nyvcrLQzsgBdLpwHW6uJxa1vMnNVL7YkE2F2wv3ZHXDmwmqxmuRiZT7uQoEM",
  "key11": "5vVX8gU1Dzh9BH7ZvfAUcP8DgymRqFvCFJG8TaCh7iVD89joWxvNHEa8Skj6XjNazdG29AJnEx29uRD7FCyxucmV",
  "key12": "4jYWsjmjLSkbNqq6SewaLCeEtxJ8tTRQequnRXrxpVMyoYwqkz9ufXWGpr1Cnx2T6zpVySpebG8ptFuAtYn5gUbC",
  "key13": "2uEzSKyLyknfHEx4quJvdsh9ZB1vUjGLcCAKSjXRjC82f2mjV9ypgydGJqyNv6nYr3ptvqKjFxZTKAagm3Uc7aFy",
  "key14": "k8QBk4SYhMRKmkspdBaAgQWYG6KrLsxGLHLFBWzRDd7AFkeHchtT72SrnoJBfYEbsuLxZheHm9y16yh9jvNftVv",
  "key15": "7X9FwVKz3VX756JrB3HgwXTgMq1zsmKL89GC2Nph8v1eYvDqN17ZXifCzZGyCKknUqqBiYAtwh6ouWHKT1m522K",
  "key16": "221uFCjdUVX1tonmeF7twPPRhbU2qtjccTiV2dApmQeu5JdvKPhynm3gfBWuVX7rWdXTZ4KkWDVAsGCKA78hmcuC",
  "key17": "58Mgr5u6jyLzfg4gn8pSqqh9HUucpcsJFRkb6TbsVjtSq53t9TkLg8JCLegdVbXvMTLFL5QnHe9cS5XbxdNg8rvb",
  "key18": "FVpGPouw9wMdcooaY7E9u3cKLXYmxESoAynf2fFReh81oTAYFn8Q8Tgw2Vz1L7Ph2VngXdvteojZ2rzZAsgjMre",
  "key19": "412zvi39TMrykfCQe6EX1rnDXCFcqiFmXuGSgnnPBiRK6qTGByhgVt1UHPKKVApjUZbWzzGoddgX4DAcGqnvzxui",
  "key20": "6Ev6Q6J6pppDR7gGwio9nK18PCpS5VJJJ6DVktNfhNXerPhGyas5ugs8i9kx8joHKKCLu4ZnnsPL2oQfjpJPYsR",
  "key21": "5zafWfEZH8JLbqJVfQLVYy9WSBgSPo3PDPWXiA6vQXNDp7UPwfSrf3CnCT9tyuP8dqgV7HFPMcqtweyufsGQtb2i",
  "key22": "5Ha1oMQsCmajdTX8fPy7aQtrcwGYvZQhiPJmSmXJYigVA9FZmveqbfRWLtSQPKLows67yowFd3uGZ4P3gdXosieD",
  "key23": "59mtmep2pfpQhnpSno3M3KWEjxncjvcqyBmo1zRMeRG4Yda52Bj9ja41cxydAecJdvYJVphQZTjX6FNruLFqWcfs",
  "key24": "5bMKDnF3e5376WCFdF7riBCnX3KBe4PUp5ERAbC7eUDVsRnR7zC5ECMMQ1Uv5LxszBo1AVd72XECf3aqPraBn1Mo",
  "key25": "2oW6v5oN7sxKWYAw7zTPgfVYjgSGPxGLxcNs5Xr1JNhtAz9khtgapQLZG2BqaLEe1SzrXwkTAMEujmguwHQFnXW7",
  "key26": "3sVhEsY7UQ7vRmbA6fzDRjQAEthUKq4RX7hHT5BwFfAvfwNv293jARgDfHrekSFqrKYnbvsg2n3qQCfJBJeB5zKU",
  "key27": "2snfxB7RKLQXKPyLvdDQdast7zujZj78zB6w8RbWw5eGTKnr4KrsQpxzAubTAT4jV28a7pLyMDw9eWjiSFozz4zZ",
  "key28": "5yJ4rtwVDS8jVcCLo8TQJB7y9bJQkYn85nQrhRLD3P5eYJoQztZmTFbvMtfcnvBsXVi9YM8bvT8m4vznj95gLSVf",
  "key29": "2npGrnv2k3zz1d81bAf6aywmFT3kTEXPzjcZHcfoBYdrUkNRwueumYDh7tgUKfE2weJeHrzNYYax5jcBQfNrpcPZ",
  "key30": "uUxU5TKgSsoUXQEXDuPURgmvz5YnitcmPGgMegXQG38Y5g5eCez9K2zh9MCgVMRieMXoN47CZuXG1bZ66wPYzpF",
  "key31": "3sDMULNkgyeMVx2Cp58FWxdrf22wq9H1MSBACeXUVTFEwxeTVzcG2MPHEbzFMFgHHssCr4iD3jmUibRnYJ644Lmp",
  "key32": "5vxUdSTjuK4dyddsqsL2eYKSK2VnrAvAiXpSfsqwLBVYP5jTYGu9mEEc3KujWLVpjFGY7yFT4gEj5boqN782ptJU",
  "key33": "3nHioXUrkjtJJGJhTcwFxsSfnnjATw5LdAo41TUYbLrHgR6VRSfrEwaFHwWGCKUdrGTTtLCJudCQ2FtE9QwtEQhS",
  "key34": "4xAkMiQxW1E4jE4G4k2iRXWJpM3wp3xyQJDoJSQLBv53wKSTT2qvX8ZAJTKwsBpMrYR9LVa8EDZh6BdX8wLm7Jgs",
  "key35": "5TgiLuiLAcPU2CogAwJCVYYQ2t2gndBCdCzseny5cyvKUJgfWsbBCiYVkGA6sggYPrXgGsdGvok414AqXFhYGgwh",
  "key36": "2F2meuJZdGErNeawZfMVqoeW5ce3gmTTtBpHhsmyxd3rJJ8E8VSjxn9eN1uGQvLUA5h3FnGdca1eYh2Gdggd9wE3",
  "key37": "57KBLqoz43Rjq4sCZ5LFSons8gRBoCtGPLb1caXBWzLjMeYUAWicSG9Wr9fLEFy9NsAXY2c9C6w6BQkeF7hQgf3T",
  "key38": "57NrMHXAbDnFZSMKnaP69dSPjhVF9A6wEWF4GXSoBSeFFoGQww2pYBrv16tvcwpKowTQUaBD95HGjnWkMTYt8XAq",
  "key39": "2tzp33qE1KnebcgxcsfStzozWPKiQuFr1RuwCbDSdZ7YhvbigHJASddxxm8tVP45zdJy35xHysMaewBt6J5auAgE",
  "key40": "Daqnzj6DGceCUTywjVjDwiJxDYijY4XVsA5WMhjnS7StxzZ5LqTYokTUSBuADoRrWga9CqkezDS2RCt79aTXCgC",
  "key41": "4x1atzm9uji9FEoxDUaYg3SmQsv4k111yNxqrjjK6YvGqoeHsgmTjerj12gwX22Bigk9iR5PpAjFiywwERjiaWoM",
  "key42": "5QzVpMHwGHCKyTwUk6gyz7mVwjgVH1ZsaXQrdAKDAE61xDBjZSQLaRkFiSML42SiogaU39zb3NcMvdLSipS9ZQzA",
  "key43": "4icZpX95WhasUvHbT47GHaT1wagJmT5aFPmfwUWzLN48hMimn3nbSLCVeAFfLkzLdnGsjzjBzdb6Fmv82yqPa3nn"
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
