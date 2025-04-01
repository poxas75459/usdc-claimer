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
    "g1URuvBLLwLqdHJHCvrV1LDQKs5rb3BaVeX35c351QZFeUf8DHZ5LXPxs2LBRHoxC3UwvpvvzqsXRwfU51D6Fcm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xNAbJGN2JutriwS3adhW5kQWVjCVkW1WVUpGWHnv6JG3sdP84vM53CL1u5v2UvnaJsbTBZPRr3Uae8QeBahCja",
  "key1": "4wUaKSLETN92jRmPkjbh3U93AajWynTGprZdK2bb9sL1wskyKjdmzezj7MFFUzHhGa28fGNqrKxhZKJVHYAxSjmp",
  "key2": "2zPoueC7EqhykjcfrnEPVftW5kSM8psNFrKJW3SecuDTc8PZpHBzNo6YrjQkdQAXQ7sC1aMuipQ4rVfJpXXbp8Nw",
  "key3": "42WAsXakFFyttkkRFu5Gd5wU3PuxEVAy2WYXdxNmm5znAcWx1ErfTF3TjKBaMZMFV6AhNKiNZhUv3gWVKhD2F9DS",
  "key4": "23pd914SYi6BXdA7cTREh68zh6sGHi54v7RsAFPrLR5wqiSM1HBUaR64TCUincbDqbKKRFTeoNBKrZkoVcENJfDa",
  "key5": "4azCT1ukSPKvzDnt1mT7rHXxjcAVbgWyKxhvyce9ZfMkX9eggkZTqsBezfcmJ5kw1QGLGSBB5mycw2zyjGNPfhSy",
  "key6": "64Dw9qGGYjWpGZ4HJNDH72HcLyBAVXuJmTtyAcQL8C8vcF6HbLQf6P4THXnGJqrAaRPKyhX5p2Q61NXZuFRJiDEY",
  "key7": "8LnTjQe6M8WC1M8MUcpeWdWa9YxVNeiAvAbyrZwoDynvrLQcoHkdTcbGGrAs1qVvpRFP91dBmG2gNhgW8j5j1DR",
  "key8": "3HzdKwLGVa5STtaz29es1nz74gfmmVzhxUaFtB11c3xnZdhMDR9sicMCzR5RbQSV4jQF9UMEK4Z1KwNLwTVKpn96",
  "key9": "3nQXJFESVNLoMBXePHPDgJhFkxZL9gaDKZzKPQGvbmDEMLnbVSGyNieoMHmnt4ZZRPMYiHjrk3bCZDDLSGnsKQWw",
  "key10": "7MQh8yZjeqwN6DYxZzQx4mEwTXJwmn5xYg4Athu3bejGX7TabJ2XwLezDfB3PQbhWHR4FcJ3N7oAvW5GExEksKb",
  "key11": "3efV3AgDxf1X2TYciH5goMepC8oNSVWj7uH3fDs68BCQYTZhQATggycMiLUUuu2cqzLGw11MzesYsFkFeMT9V6JJ",
  "key12": "5owcXdjkRRqXVu2ptbvFdoWvLZLDrWhWYc1uv6uJa5ViA4tZCBTUsJoXQsfCSMewHbDSBYwJdrtkiDekm2CoyXfk",
  "key13": "4Pih9jXPkACuUc1qUqtu9x3okYtDSRTYr3F3wPEpYR4Dbcdd75PuXGGkT4CDaguCv5bSsHG7c8wa8mWyEkdgfpkj",
  "key14": "5k42Ar2WQbysYAHJ7PZV5ZcYHFnSP1VEwHb7FCq7WvcUiV6phzPheeucxuzzDsht27aLsEfSFHKnAvqYvdtui2eo",
  "key15": "2tjTv1ek3xxBDCZEWxtNocev4H1bRy6U4K2oNXHiceTmuHKZbbsDnRgX4EuHMwcPGskAPNjXEwiNWZimas9Nmj6n",
  "key16": "zfmzt39AayheQG6tSgqr21BQ94eYtY2UqSPyzeS25RgFvCzcCtbGParNmhLBYwvNRco3NGRbChyNzt7pipGAiwD",
  "key17": "4RtGCnbcgj4TNjteu73hJzqdwyk79VrskiBA16hShSHhkwxQNnuRd7UXupFWbYYDopBmj3r7mn96SgYnfaG86ZFi",
  "key18": "5Wo38CmGUFXd8q9mv3hKdP98ZHhE2tJKdSH7VdQKqTsggvdACbSmJb8bF9aesJDtV7egzTdaEszSgyWDCB2U2wVy",
  "key19": "26DgBj7WavnDUE9BWb5Xn7mgDA3fEgizx7y8LLpGpHzv9CPWUWAAwpdYS3SqvhXGqzdVDyaEwMecEXkdFp2kAVz3",
  "key20": "2HwoimDUmeQzJqJSSmRauYVzSftce5GZLeFNxh3QyL9fKJVm9ZasSPhrhv7ukUNjbxkuFNcDDZ5UGS3aa3bCjAMo",
  "key21": "3AU2p6wUiavsMg2AgttcLPtdBdW8y35L8kSRp23Q3oqp5g8ehd856chYmsBe5Ae6qjqJQyPpetZreyvdzrbWh4iW",
  "key22": "5TbP19KjVcZjjzY7egP8BDg5ruQfrsgQCQHYZ72E5V2DwzAUVZckhg4vBuruTk12yBvoCn1xrmVzxKz6zyi1nHrv",
  "key23": "PMqqsjF9yZD86V4UHfURUrT9JfCM8hKhj4qkFRu1cg97GTVoBDj6Cr7HXZfsfVQ2EXQi1F1FoV5wVXzFfeBoBqc",
  "key24": "4wGRSLfS33w1x1AhpaMhc4G4vVBoHk1Yqf6fevZTMftVvXtCYaHaLbG6gJreQy9djvLWBP9k75RUKq12LYanrcBW",
  "key25": "57ZfQ5cG5xfkmGB3BkeU96zdfv6PRgSMgygwic95VXMxKpCQgTmPWzNjL6GT8GqSvurbaupd8dNZ8Zv1JH8tYqCe",
  "key26": "5McvMGAcn9FRhPyyMCLnrpR8mimhuN9H9vvZ1GMmo7j6Rf3BBFxpcyPANr7WaW7L3Eqty6YVFNgBxdR5M2HDtW9z",
  "key27": "3uu87TVex1mENdZBppKSUWvJMTK1sL4iPHTtZV3WGzfQmt6XTVUrKXpKT4FySn2riCnuVYmd8qt4tzuRg5rLJskH",
  "key28": "4nCWfyBpsfuERr24LJE4okFDcsCX983jU4rgA8uBSsFeJjeX1QYGM9RoTAfCyeorrCUGoSXhGRJHTcjV8jVARTbN",
  "key29": "3h1c7vVvHZVVSiCKszaw8GuZ6acrroMNvBCNLTVn1PgF3FpG8izyDT9k6jFxjDJP5zDiiP6DhRPRfCgT64PyWHqa",
  "key30": "2CQbjjTSTZokx2zksMDZnCKk2CF91fUhAhWiWZ9J8kxWvBmpoBFRr2N2xJgET2odd7LrBLWxtzLf6oy9G3Auy618"
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
