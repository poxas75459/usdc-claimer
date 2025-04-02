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
    "2foCmcZSRbjWp1BprcMASzbahqqCzZBU6MHN5RaxqnJiiaThEatFxxzRSAMyPPChX2oQdZSDiTJG9E2H2P8X9ZW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49CnsdUTWa46SMYHquSWVmPMNrv7bFWYdiQeNrPSnBnt78Ah7AthP2GBCZ9HjaXqStT2BqaZU7v7ZNbu5tgu3ZQj",
  "key1": "2HcCLb6GAzyGzU9JTxEAHYqf6zEQmX7AHzU7DAeUmaHzDZdYjwuEqsU3pvnYC53dkYrAqciss8DAFVsSda3Us2oJ",
  "key2": "93hm1YZ5YgXbAZDTmqeV6ppDZ5ThdrNFBZn8UCMkMZ3dNKgGBiaENNfSkz1UYY9cRbNYv6dgD38eWdSLgLmiLSV",
  "key3": "4BeZSY6yrs4fVK3PuBVP3wi6eWUMfMoaP1peLGLADTewMsnsM9tKrXt3cUBo18btRf9HottJEdaqheeZLrBHSoia",
  "key4": "a2AGB758phxKfhbDbzQRKj86bbkJNgngoGQVShLzUjvUVqZbi5WCLinRDHqZAjqEVgMxWdBiCWWEhLk9KcBaPPw",
  "key5": "udrJnrpKgTBtS8b9WqoNXbyQ3hDeH5HxW4mW9Eiba8VD1jrrbEt1myBi7NyeRBBGMJTjQzLmLCutzQZPnyjMmy1",
  "key6": "5VYgkLu21mSg6ihtvrViZapcefYJpHd5ycDmUnQrRhK51XnLP7jvCxhJhhGSV7S5fVJaRMQs1kZ5yDbGRpdXj5hd",
  "key7": "3FadaemSUYFGmHBbidAokq3XE4m5ZLcZGDyhWM73BHKHUQCzVtkapqyHFhaSwK4926XszNBM4B641rS5wTvdKBbs",
  "key8": "4uqdem1nebRoYahGJrNwqQZzWbZy2mvFJdRyxZiY15jZCHEa25kKDYfXYcmT6TPGfgcQeHEVrscPqJhGZfQiYn1c",
  "key9": "2BMr6GTSvTdNojPWZ58y165kpKk1PGw1gmqTnq8Cbpue2PGdpsH4QUWvWjBr78DzdX25KLY1AwSQRWiwc22irspa",
  "key10": "3eENj6uvAJ2bjqQHWcPD13Dv5BfzaJCJG9Hix6CQfxqGuRcJxWEAbbBEuAshj6upho1kaXpS5mg2iZkhiCBCTKEk",
  "key11": "zZaZBewksjy7PpgRcJxgL5uXvuHLGtkDTrUWfEzjfL5Uo1ib9sBZdDfNdyA21GVjLHrL6UeTEFmzs7vmB2qL9d7",
  "key12": "2TDHgHR123FBcJx87Totdm6q1MauB3nnKhbK4kpxw3DhJFM8ky4siKKtzhqbdnmTL3XCLkmcoWL26tttBsSBbjQ9",
  "key13": "2UG7rTQuD1htgxMXBbrUHGcPaKxX5hDs159xhyFMqsxLzJcCbSMfXppqDWL6dijJ1N3A6JqbFMqPVPVaZ5jqhTQU",
  "key14": "uiG9HvTxN5JWugdnLdX5JAFFYQdfPHHcqhBZr9DaZoJE8fdxkrs5DiC5vD8rudjtUxyPcuPyhSj81uz6MBTWc6L",
  "key15": "8zbJgnH9ZR9sDwU78gqSRANk6aSusnh6uBAgh2txGgpD1JsuWHr4iNkY4XNdAVQAWwVub89fmKNM8KSBmoUXGrv",
  "key16": "2FEqMUqLHrqeuYAQWJiy4PGKWb4YXtMXQEHrnH5WodPV5Hcgugy9bKkE6aPFNvbANo6pyAwQZr1eTEKdA6zkVB8D",
  "key17": "4hs7Qz4QmZBFxvWVpbEjtS6k1tUAvfwuHMKBQdjcjybcLcRhArfwsBgfDtv6wtnj8ZtZSVs8WP1G9KGEYSEUe1QX",
  "key18": "3qErMQZbCfrC8XGZMqarntFHGuPbUNxgV6DajXTm3yAoQMgTVG1bEyNjYqohuRHKyn1FeNnTWziKt9WvSyDmAtQJ",
  "key19": "4aAH2F3oMnrcMbVAYN4kn7ddw5BneGiTcA6pKzU6H7zFbvcsSkVdB4La6hpnkgjFtzThfbMb9xMdZi466FchZWk2",
  "key20": "5JNvqSwtWsVWys41ceZP8i7uyF3CxM7KND9JgFFPZvJ4gY6cPKuhdubR7DKxAYPs1aYmwcAupie5KkWgrUp9wXZm",
  "key21": "2ADof8jKshgCUhzv6XUi7fwtHkWSdEqazVmRGPMB6PwLJPGYDAiTfj2XNQKWBBmRQRaHHJtRmw9eRJrGKqVAXSQs",
  "key22": "3sw5XUMEJK66b9insG1vviXjf8Zm8KnbzoWjny1MNSHkZJeDaqbk5tQt1PioDCxQf8uKLZyyAZA4ptiYezFeBymQ",
  "key23": "3MAfDmo8w9cypCUuozztwtSJLfjYvaZruXZgVVggH1ou2ZwMPGurCJBLsfshVY6GzBCCXuNcz5Y6n25LaPHAZwom",
  "key24": "3QjtutMmbURG2WXTKtBqAj2Mtmv4Mxo7dDFYKM7G712QBCrUWcc13UBwziL8916hoEYn2UdtFGxQ12uwqTKk8Yba",
  "key25": "2fXiacX6uU1zmm9Bc359N8QeqU7jYUKV64LnyaxtFpja5j39UMJ5voVru9EZuA15zkuSYL78MXr5JJ7FLL6km1nD",
  "key26": "4FLsAHDNsrzK5aVE4LuYkGQ69hpoT218gYQRaHRhgsghXx1m1md5r6E2U1ZzJeMmnuju5MrPeDDqiPBgR5zaHDyK",
  "key27": "3aUoRPHwXspENDBmcBi1QxsJDCGvoBTpmYk1ksFfXnTYgWTP7SfgnefFSLoEeUYcg9zrqz6FD3Yo9kAxRy16bPvC",
  "key28": "5QPFBAXQPUHb4B4eL7aDRZWLJuK4CwZoBgxTGMFpTusew4vVR9MM5dS2L3oLaNkKwWFhij2AyHnfamCz8CYjCpUh",
  "key29": "3BkVPtgWEo3VhncKJgg1Tsg9hNYhgwAiGeX71vqDxAxBdq5vjn9F8ZoJz4EMdfmth2wPxD234doRA35ubmjaapPs",
  "key30": "5ZLkhJ3qKEPNk3VjFDZSNhJGVgm9PVVNpQQmnXnA9bx7nXeXxyfF6c4y1ayGQCkhCDsKmqWJQEBZ1pisos9AGS91",
  "key31": "3odEuLhYHjRoZJiroN3FEcm1y7L5JAngfy27fBQSgcZ7LMjvQXwGdtckyHxdLWpcivEAAvgmwhETWAB6JqBetnC9"
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
