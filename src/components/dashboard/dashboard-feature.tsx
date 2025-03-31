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
    "6zyGx6gtrRifTJMuZfRwnHV5PmCHDQZoNs3UoCQieiotXDHCy6LVD7QdFySGAXJdZUpDTmjnz8CUvVXxGEShCZk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21hx16NFhWCpJ26m8TZBU8Lqkd6TLeRAD3a6ooWrVCtjTfeoLn3NYrFLbuvkxWc59dis7cSXSN8uxXnAFxXWMMqW",
  "key1": "52ivFf22oPm441AC4UsT2brE3BZZETqU7VrtCHJ41mCSKvgXmGwujbViQ1DTDZyDcQuEEqtXCMhFj7yCLUbV2KWp",
  "key2": "wMnp9xbr65DVAYrRSSPiL9zr8P6nxNJYwztSbXoqXYZX17rK9vZQomqtiS58WfZmLk9CmAL1F7si96PY9g4HUt8",
  "key3": "DiiBF1ary4vHVrZwu65BGRKZfzRmxsjDrNHceYHvyrwNf9bP4k545cq52tnRqLn6oZBDGpLW7XAmpFqXfpCXU2t",
  "key4": "4kLRGwQWFAN5QD87om4BF7zisDJwXAJyZpPj2iiXbgramLYQT6ZcevFVSCk3ZbfdghJ7aLGJfw5MMDJsWzAWNFE4",
  "key5": "23H6jyea2X2Pa67bThpgGT6ACN8982Kccd54K9ZLgxSPnHhnVc6TuycUoZyub7FLp8UxZz713MTP8wiHQLneD5XS",
  "key6": "4q5zUtfL8Gp6AgvfHbUhdYTdF22JkipmNAobsw6pJXsxvJ3Zp6svfe12ZLd3vAhsMcaEKUEbjwr8E69whpgk79Re",
  "key7": "2EbCXNcu6NzyrGVTjMZdNtTYpn97qSEdyGL5JH2NuRhTZKKvoHxFT5oM6RmjKy7rvJ7KwPSWai6Zs4KVxNsCCUme",
  "key8": "2ciFrxUZ3cfgDVZw2oUnFcozUcZ6t86ueW99aq5HMEXghwkpZdF6ogN2FhgE3HY9LdNezjvcNF77kSzR41chvCbg",
  "key9": "3p2ZPk833W835894fGcLE7J1rLW3FDjopraN6zdWb5M2Wm3T2rEYVHZXsYr3gv3Gej7PYQU9sUTmxPAUbPPyrq5K",
  "key10": "23zgoYZpEgCj36TDxAxJDyct3dAS61Q4VeZh57j41EziLr4tYuFz7tcfyyhGAH2MrpnqikHCNPCUokSKW5CLWhSc",
  "key11": "4urpGckcmpVaPKCCHaBoV4Dfv9rdurQEPgT4FoqH6mzLnsCcZaoYZK1G6t7W3aJLUnKBk9bTutmtTcznXx3GLwuZ",
  "key12": "5NC7UT614RujfWSo1fN6BdDAZmg1FS1GXMpou1V3DRv9DY8Yrb3Yo7oTLtVvxYpwriUQ7g1o8JqMawsUhz92acA7",
  "key13": "5mpYx7p4GxmvkYGiWs7JqJVUxwZHDD8PG3mTSKF9vorWutrZypZTcjH6AALxLCbuxn7gGTfiCDHwmdZFWMDyCKFt",
  "key14": "3JpRxmUNU6g4xfyZig345cAgcunCZsHXMQAZmxFgQYLs9rSupQ8gXwPTiQvgKZxVZaxUN4g1kAXt89ehjmiCjY5w",
  "key15": "4Pnc9wAvjcGa1ZxmU2WLkAySwdi9JduMUXhEYUwckg8jRBp3izJ9xEzKYXtwsnjt7CPTfWMCEMtcyKUL9VoU4NxD",
  "key16": "57diovY9m8KAB2u9kaf51Lntnzrc91t3hhVxdKvmB6jvfxH3C9GyKptGfqbGQ81qGp7uGxwmNpi4dFiVRfa3mt3U",
  "key17": "5A3Zu5VNVxSXLF1iffR1tKoKbgtLfbn3YJMSwYypac4n73zn9Z1mFeDNVKm7LyHzGgiY9xhiYoTuimFgbxNz6JPm",
  "key18": "41ynmNsdfvRFAWpk2DFSKtQGv8FSQcja4pnCERiHSEHnE3VCLVzDYdcbmMUBMWJ21WNoDFtH3DgLweDDhJvCJZvo",
  "key19": "5CZAwopYWcEHXoUc4h1FqK89hTeQnPSfKuDCUAK8wqjz8PoPp4k7p7ZkSk6oeHyrZsoJ4ZGdwgmFsheQyEUATUa4",
  "key20": "5njFogP5pZrFWnBK9Jf9nc6B2kYqcSDMTBY9cnFSCHoSRuSxrvZdaka5KqE2s9LL3jVek5q8T6yq2orSHZHLxCuw",
  "key21": "5Ra3pqbacbYu6NojmQnmUYaVhtEFmwYGLgwkyfznosycHEWwUgjJW1k3GCb1cBzSGLoXDG6ebBdYpAkZSXnSiJXs",
  "key22": "561nKbugDZDnViy3WmcE7HhbXi7H8ywbDp7rv5jfxCCcqMVdvLdKZJ3KeoJo4UxH7urBvUHVJPx2mkW3fpijdCrU",
  "key23": "4nEXGnR6gLBm6M4my3R7gZhQkvbSxR3FSc8esu7N5XK9n2C292NXLjfA9o5zY8qcNgcPv28oC9jSj5raAJLqgM7A",
  "key24": "4Uv5jZ4RHhBxUpa66HLx9Y6XJwKMyZwMmvwD1ivEoSmWz9C9tKFDDQQJR574Lkq7gQ834RqzYC3MbHDSiuWr9P2X",
  "key25": "4rCRvMkXsquufsXu5pSQ7mZPV4byUCwLezkHQxSbBmeTE4VaN1H5sYYmuLzeGpXN8fpQNQBnNW3rprTDdMBWTBsZ",
  "key26": "2snzm7MQZAyRVdQa4zV5UgYokTrrFQa67XSMuW8LQJ7VJdVLEWnAPUTu7rEbuNXd3SVSVhHMx7tTNif28inSeyXD",
  "key27": "25bhEmLmGgheFdQSMeWp7UYgPcPJrYbxqAfidNzQRv1Z9L2cKv1Z14HF8n8NadL85TmRGKs1jWVFJ48HgBuuqHux",
  "key28": "P2GZYx6KbPNiDwFt7keU1NzPu831NKVTLvKCHyoBNtyAJ2de1ecswnHj5ofkNuEwjQZvkyV5x9V6TkGRpu2vY7T",
  "key29": "565EkyerAAAbZZTXHZXVqaA81yP12vXkGABLeNhDnTRLCQWYP6XLzePTHM7cs8988LuXRUYCnSmTnCK8bxuHFfxW",
  "key30": "3LwhxVRET1xtfr3L1Ukj4QcXJ8pKjYutz9wyb6xkwGb4W91eeCedFKXEE6TzpAPnwJ1Yw2xvKhnR6EpqRa59WiG2",
  "key31": "3g9FFQHC2XheqkGo7LqBRS9GupMHBxSrXBg32xrdYzEcVYv9JaJK8bZvDzjTbTPMmRNTJnZ9AhtBSRmS4BVe6dWj",
  "key32": "4ADX8fQRARVT5c1bWBpNbnhQjzkapCeR95rqYM6mNw2YZRmAafmRuvTRaCwA6p6iK6UqMrzUa3QvgdtKv7p2FGi1",
  "key33": "4btPkCnrKWFiAwoxfKgfNoswnF6KaF9UingrUfz7e4V9wgRtgyzuCzBQhP7kYEARFSZ4jr7oghyE5VRpi6W5Adro",
  "key34": "5J1J9rpo5i9iJ1qdivw2DnETLimMqtqMzxJoHrRj9bNinmRrNzrZfB5h6Hd5iimKdixp9UbspQCSmK6N4F9WBFJ3",
  "key35": "4DZniiZ76pwm3dQCDTX7cqyHNcLpVXrtaSTcj5gi8CKpaY3A75rQxdNduhK289kkGXMj68JogCuweZ1d2qkhhqqQ",
  "key36": "4CFkjiSzNP4TRGXz9v5sCZoet7QVRMAqkuqv2zdvXSGqbXagVQWkrmqitGw37NJwvwoaRegiQi3Qia9FFSQ32vCq",
  "key37": "466CZMEzaCCjatNN81g23fgtiT9AJXkWurz5HG3KZoWykftnfF3PfFsMm84Mp1uZDKiYLP9rtUDfLBDkNPP3JYWM",
  "key38": "hEe3Y8npd9SMHQUshXUBQuyM4aev2hX3W1E7kfN8EPkYi4PP6yNLc8e6djNqLHWrpXq8FepNCBPHH6NEM3acFof",
  "key39": "53dqyjQyrMMhxwtVDtpcU1hxoMyz8PBY9BGBP8hC5o6oRvrseUW2XaZdfDHdBgJPcuCEvhiEn2Z2XkzKiWSLT4vk",
  "key40": "wghSbvQyvEcpsKU8gwoXBzfgx2eqMPZabZrszH9wn3saST8R3zRQvd3BDURKGErnoAmynydJUnhKDJ1CNWVTA98",
  "key41": "51hYyqyFdM8RKy1NE3W8vERBoegBsJYkFbr8PgMqAZv1AaA39FMKELQuU5dnBvTt4zhEGMoaZcRrwAMjgNWYqa9D",
  "key42": "5BrJN1AReL1szrFe5tx7MZxKSnofedQ89xc4UajdfXo99ESyqwQZeNRmzwzUMP83AG9z9jiAwHs4Dc23L6W6f2mr"
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
