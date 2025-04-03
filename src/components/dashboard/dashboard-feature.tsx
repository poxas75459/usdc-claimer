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
    "3pkVSnB5wStxdkgQU2gGXM5MA1KPkubGZFMgR49d9LVE3EYBayE7x8beLjNkeUmaVYUvYvqWW4SGJ7o6DUvhVkJv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a7hUUDw1JfhEQWTWVLChmwEawPw4MpqaRwySjg4SJhdpTR7ikcVYENRhkPuYtAySWbotXw3hEeLAHt8L1J3VWvb",
  "key1": "3jP6FELpDKhr95ir8wU2eTHy6twZuormrpEwb9BbypEWxxedunT6swQFxVQJoXUVbSbssRfc8fC2TNP2PcA7FRBq",
  "key2": "5AmoZmYgSuyUpsuQjM3VTpMRxsHgbb5gCMjX4JPtAdDG6jEgMp7iSQaivebo44mmCA5X6nNHzUkyh2B9homTjnbv",
  "key3": "4aAybb5W2HrvR757RordqhUvivDtmmNWTEU76R4AcKfPmp33bedKvFiNQwfEtdmjv2BgvYbaYFaBrw8BjEQ9gjkg",
  "key4": "4UHJQ53qSn59jLW7SNUmDELLA1XPWtbEWRoUvrmk1EwrgLHbBZjQvWoh7fTumWeBH36sfoZoDxKuoENpD1xxKsux",
  "key5": "go3hh42HSznoFJagZiYYKzHegd4kW26XtutZWqwopy5G6rTmJv1WDn91riFEFacrfnZ5sfgGonvccBGWf2cGsmK",
  "key6": "5kxZTJJpcYoEjEJNt6JCi6wZNU1MThkUqW6KxrovNqzewDRXKNb5eCZPFJ2TLSTNpwXoBB6RzadBdz8ReKZgbeh7",
  "key7": "5a9WSiyPf1PZPxijrisdpkwwgWdfJZs6s4nzKzQXSKrvaNAFmCZrxpSBgv4HEQEnxHZsDr32VTLdJHis1AFWGtdY",
  "key8": "p7aqMhE7n5wUSsyYKU9cexZ7sVqD1o7A98ZrrPPhtPiZr1oMYWXhCVW51SUSxkkbhvCrK7HDES3imRCwceoipHP",
  "key9": "5AhUPYYJ26Hth9wh6NiqAeSJHMvWSJX6Hj8rh1d7botwY4CJEwazstSmyYa6Y4L8oTG3ThVYN4YyF8mz2TwLJQ8W",
  "key10": "5DyRAQ7jPwTzSQCMb1ZZC7YRgAYjh79YgM5L6Q4AaCndbdpQtbDYNw1LEi3vHxmp5eJrFt5rAaeZnPpGV7B2eBFT",
  "key11": "4n5JWWVGCLGMPMYnAx3mERXXnpY74A4czH73QYaS7gmmRKGv8qMHcRkDJHp1RPkdzThCQmzxKQ1LNWokeFwyNSKY",
  "key12": "3yybJQAZs23dosxyJN7bMhAhTzAow9bQVKk9NX6FQH6hQx7nUCdKDgqyUSbwFYCo5jNzP8bFBFTmDQPFrHSAFSSL",
  "key13": "5QbD4SpiGpkdKYYjMuS81exTshxHHnEAXArGKfAANYvsDTDAGBQWL9MEiNHzFFVYrEk8nracis7QHVvzQU3AjJP2",
  "key14": "4LPvAAPUVy9JjquM38pLzUN3kErBbY2BBstBcRMgAW8R45mckVgRSRwAF6PaL49d9Y4uijFQTXnGR4mb1oU6imMz",
  "key15": "2REGE93Ci64FCFJ5R5ub6G7SEAGPtMggTTrJCUeXuBiY7hovp2nCz8X4z3Gh55VGNEBULTF36wwFrdg3MYS2hAvA",
  "key16": "3A359YVEAYDSF7hf5ugfwGJuNckfQM7Bw9vzVBjJsgQ3gQ96AtGvzf62kMvw6bFjLB57QEv5UM5S9o8kSiqithQj",
  "key17": "2x7q6jyRxwJ2hMu5wBrxSYQjU6Q86q5atYsRLDaFBV7pfhwM1LdkZwaTQ4dcYWCvcPr4zdVWwHRFgKVcMwBjxSH7",
  "key18": "3769ph6D34G5yYUrhKZGsAfM9kfjPD9q5RpNcRjUYBYKh8xnx6taSjoS5Hc4V5W2hz5z8rrJf8Xc8WZzdkqiFVvY",
  "key19": "4ZHegXYhbJooNFbW4GkxZPZZtgrh6swL5xY8gaMW7QtSv3QmJYL3QX3xrfsAy5RwTxWkEN1M74dMD9s7LUpD3GBV",
  "key20": "anVriKcW4Zf1r7y5NKSD7Rvxf7PP6UedRSSfcfGPWUVWsnojsvLYwkCRPNMALCB4GeYx4FFfDhHhonMdidcRuDD",
  "key21": "2Fcc9ALeytVNeGcB5GQoRH7RKxxy4aGxE5Smj7rq1MEpHfFk2qzL64pEZ3DWoJucMnUtneZNoEXqzt6ND7N2CsQa",
  "key22": "46Kd3UXGi1w44aEDHecx3Bxkoii1QBLnvwPKZJTiZs1ZNWC5L97U813YgE44GdCx1fSfXsaM1bth1nECeZ8fgDYx",
  "key23": "4nKZWeJdy1TWAqKbXB4HtXYCML2RWW9JyyEvASQuZQrL8WsnNnogcP5bmAfMycg7xbMBipRcYiCAcwAATgXbKarA",
  "key24": "2nJfgqB2Ujoy8jEYvs2Sx7XAfab27GeafZyqDBzjALR6YSz6fFWeEtarhFKuLJgQGssCs8xgZju9M2cvpb8RxtFC",
  "key25": "22YsEkzG3hW8UWKCBthKqwtzYpRxbvhdooy6gkRFSTktuiDzcDog9DKRTvFzhkhaymFWEtfHLLrAKDEZUzYnp5Rw",
  "key26": "4pvDQ5ap8KPpCLGquhyYk683tNsS5KHgLJe1aTx5HmC6RmQoetjfxZ25Ad2v5b6vXLBr5AhqbsEF3kQTT6DPXkE9",
  "key27": "m4n8xEj5h5GLi3HNnubBXefee1HrWCSwTb7x2WCoEknVH6q24gVJ2hYjsg9GugwQv8N4i3YFYYRFEQ9SPYHGrVG",
  "key28": "4iuHtc44WDjyssNvfg6pQLjsMmiKa84EQ9QtXEc4PTLVyFaa2awZoiFreKx49M7trdcf9jHpWaZqmNtBx6hsbwjZ",
  "key29": "oAtSDoiMwcDu9RboCZeTc5EVgFa9DaX4ax8k7qZsXmbXER3hJmH7ujZFaB59KAoqbjHzR5oT5JLc4xMzNZwjtLC",
  "key30": "4K7EPqsn2LAoUDtBTZUrJ9xtWGzLuBSFxoooyWbQ51tii4cV7DfGNfP5uqnjG3Dvkc9oxaB4KpY8qks941TkJ5FF",
  "key31": "2wc3T6fKzyB8w4b3fmTnTArCsH24J4ZW1boS194kmFJTJDdpWqsoWUf9VKMMsd5oTr6i49sk9yqCDM2PccR8V6S5",
  "key32": "3bdgtMvAQnGvLnpyynNTjvu4YQ8fRLL33naWwSat9Q5ZBVzAtAizqiTJCtZ5sxTvrPKw5jPBU93f91mwa3Y4MARu",
  "key33": "4Bym2GVm2hu2A2quEgQfFx3Fj54ySarSeuxezPPC1rte7QFqU1Hzyk6x8N4s5bgbMX9fEdfyaWEt8GXJsYFK3sC5"
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
