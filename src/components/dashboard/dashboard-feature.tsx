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
    "gWgCy98P3JEw2MQubcZUvfA1QVxRhq8qi2zwCtvn8pGsPxhtKwmzq5CvqZFWVechJDUoFsh48rZkFrnU8NuBVBQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k9ru4oSDPnUuQcmkBHimtn7Fp4PFWfF1soUr6YwcyU6WFhCntD1JwCA6ySPSjdi7723f3FGXPnuG7G8n9LKgeBy",
  "key1": "2E4mgMqZcdqQ4X55jmLnZBQe71pjKV64SGXQuXaVRYo2WJcqzNB4qc3b6EnWozWzEBARQxC5Whi9KGVBPjnp1K5r",
  "key2": "2nhU3ntQLRP4s3Lx74ZcNixVHdDzJXh738KVYcM5aATkmAD6HhNFiGA46vBBT15kg9oRfdANzeqPGTZLKG9SmiL7",
  "key3": "4ZCixasZvCVwZpV8Dfoam2CXkuSt8cQxZ1KMfd3CMo68p5yCEFyQ2Rm8xjTpNQD2pQLjhnTSXZcqAh8ZdCU8cTKP",
  "key4": "65Qht8BhjHNu93QhQVagJYGa96wBkyh8b2ANKWD9Zx22hba3RLTyqWAy2sdyhJfcAogx1nRoWhy9TXwqqZDbDKwP",
  "key5": "8oF2Eg6PNEm94aCKCKcfjMsCjuVv9TUaHpfGUca85w9wQ1BcYLghx4BtpLrb8vaDGDHp6dKxNgPvzjoM8SaEWS3",
  "key6": "28YNuo1B7sPsJ7jCwZGSgzsjaxshxzRW9hikbB2UkHJEa6vyHhsTHcNPWwPQPxCQfyfaigL8bBUQAaEjibNdrEzJ",
  "key7": "4opraTTsQDcLWQB3nE3zAYkhcvzQGGvwQW7mWvksui9X7RUUQXfzetxauh1zhJZQ38pAY5GNo4mLjGFe72LcYFxD",
  "key8": "2Uo1D9cRGoekdHiEDNWz57hxktQ3o3Jua34zJxMsSpchp5RREA6yFPBkWN92w9MYfseynRM6eJkKsDMgeB2LKr9h",
  "key9": "4rWNnUUr761CqEtTz51tRpmp5VWdaEBJsS4SRQuFWY5p624zz5qvbpQLP3KGoPmy9kzjRckPPSRa18LjXhNifvNc",
  "key10": "8Db8wL1nHHKp3jmzNruKURTcoebN4vu75GfyGS72bvCXmNZSSqwy9Sbod1yWRLQEjeQwZJLbotLLT47CUMQkPZk",
  "key11": "46gbZzr59WuaF41MgTLDbqMeWL1wxMWSGdmFYpU7mLx2bVyVBwhNLVnD27VjcNhpnfHQ7RuCfhzf6EWkafXkQbMc",
  "key12": "5WauSQ5N6QhgQ9vxjdxvrgqfrZ6LsgntKSxyLXWDGRpXCA2ThwyMybrN9hwsLHvVX1d1hjFmRqzszhmSkZnV2yZ3",
  "key13": "5VkNm9tCkxEgm3YBah4VbyahDcgWjDxuuyR3dqWhpyUrvvmgcWTwgp6huZKDqBoXzYBJiaQKv3idwmRMrwXzJWYr",
  "key14": "36x7LGo8WFtPNHm7rCMGH4PPphz4uR4DEZRYsNq5zPpvx4FMraYmjpHGzLKUdrhq9nEcuqqmVCFpHNhipqZAjjkE",
  "key15": "2XtfNwUBhnqTk7p4fNHjbwRGLWAknJPzz4VQAa37bvsfd4d1myE9NuPyaNSceRSsQSu1PAGF3kFTGAyMpQ86HM8R",
  "key16": "41G9Zv5WRAN8Ta6SQRiqHu2gERP5pxZa8oGE6a4nmmY4MyZcojSb2NDbCSTCeJzeEWvAtEhtbXXzkU4AUuEohRJD",
  "key17": "5TEeMJ3rAZWx1yCgYxsAb6zhUXrE4RQUnsNi1JSGg49f9W2MWK3uv1uDaMXf9DsBYe7ZAZWcq9DkF3o1ERTuwXuH",
  "key18": "3XZSuTs8HVXx8nYXddLqVfJcHUdJCizCxLs3nv4K5eKLUfR9UqNVWZRVvsK8fo3VW27PkRDs8r69BTN3UbAD8m3b",
  "key19": "4Tgaz8jSXfMtRiK6ssdCkoWvkQioGxxiHjWeYWK2jraBhsba8HYgvSq7SvZrd4PXMt69XahM3zrT8o8kwYXKeY7U",
  "key20": "38iRiuVHSziBpy8Wtm8cuZBDxqnNPMb3PMg8gmq4e7PbUphUoGnXmFCUED8HKbFwR4eGPS66RwK8cSkfpmaZcCeN",
  "key21": "VS31VHxHmMAhsaekJYLGDgTyVugQPvQi9mKrhyWvre3SosAzdUqQNBf48esKkTTqiZGEAZ6EgekzBBoSDUYwH4p",
  "key22": "27u6RBnT6NF1Pbiuxytx1WepNA1F2SgHd7yK1ajFWkygrcpmyb4rJ5wAYqSDq2ccvMHRLAGW1n2hW1gB4s5cTrFg",
  "key23": "4ReoRN8spz8zyVYboExPs1tfeYacVZZSLTwAt9HhsVPyNtNrPNi3HuARFkeV35xxvvaEBUoVodXXEPBzKCj1s9A8",
  "key24": "3YBcegsASFCyeFtEF4M87uZzFZCT9YHcozRZWcFCiRKrDdRLXXvMZxTRUJjphu8VEBBPE9krGfX7shTetktrEbCs",
  "key25": "4S4BnkicsDMq4UzdfFup5fAREyyzyFcTNhEkwUu3Pfzx5sMGreJvtEM4m6GxxnhRdUUXCoRrVvAocTisauP3FT1t",
  "key26": "2omU8nFUyL8kjqtVBnaYYyPZoch8GE3CKaRCCpTfANi7yfzr4q55mb535p6ECb5iJ6W2o4a9cCdT97niBXRCWsGs",
  "key27": "5WLx4pfu2VDVgGGhYSrmhtghCTxf4Q4EqqofPiNhexVEXCLgUvVn844Z2qnD2uXe31u8ZMgiR3dAvqr1Eb2MuZVW",
  "key28": "424eA1szRAmzg7tDoBaE9LL7N5Wo49N4frS47jLP56EUFw8j7i6jAdLVPSXcKzkEW1i6YqpzU3ZV9gt22V9fgK2",
  "key29": "dJt19Py8S1KC8DEEZ2QdqxmBQVDbRL6jTrgAwRsHdknFR3htBcHbq3JwjqXefhUCNTdJxJCMLvV4FR7q78xfPro",
  "key30": "339GkJuq1NAd8EefgJ9ofzokk9wY1j2HRcemcfHUjm2bfrEpEwMmF9fo71yQCzyvKFLaumu6G1PtgfyXz4DigC5k"
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
