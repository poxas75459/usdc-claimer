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
    "67S8cKM3Ghb7JFNF3zHNYYK1w948mbZF1uakpM6X6QiaCeygyzvbcZms1skVHUtFUSsyHQJQ1nRy49DKDStfeMbW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q71ruuYpYStPaehjfsTpLsKhTsi3fXA44qNKjUuASAinK3QJwK2xuZM8E3WcgMbigyDRXmbqhAZnFiMbvWnENRH",
  "key1": "5htgvFd6MpfsezaTEc1PFsarZdhTHhypAk8nE9HuwDm3NHSka6RsbwbwFfidqEmFfviibp2tf4XfnQFD5PgV6oi2",
  "key2": "3nMSXBt7KpFjfsAei6NLHLPTrbFwTwd1M8YRcTD33QZjQqFbFqRUiEasfF74ANjq6iCHUHykcC7hPLccx47oKQYi",
  "key3": "5jwVSUCfCyBTwJbcqfzp4HstC8W68USg4mgeLZJCrP9M1PaAysL91Tv5QucydyMpXYBBnore5veTsLQjFEonBdab",
  "key4": "5rrnKRh9rtJkAdikfjZk48tvQ2tXceXNamZRSiENQ6uTupRrZtp9ifJvQ4MLt2J5XRpV52zB2ANXJC9XRNBpZzGF",
  "key5": "3uEZaM3ZyZHg9jySJHthmrVRmAgdtwZiqJ888BFF2RJLi9odNc4kiCGDfvUVbdBwtHzHqJoeTbBxEzTLVKP9zsY9",
  "key6": "3J5Gzn4Y1FwXQg42kdYVQGx4ati89tkrXcDXYK14vCJBnVhK8F3FULFyHj5VfJxGk2qQYXWXVSDqcYs4CrT16EHP",
  "key7": "2cZReXGuwteNDhdeLmaQYWSZDZ83r1ZjvsFzVkfuFGeC5xqxTx7Nasju2qnPKyvCQzenKm8QZ7LYT6f4W2wQWHKT",
  "key8": "3wrQkhZnvNLLUJXjEctR1tf8Q4rgs9UDHtoj2uX27xYvWWsXgW8PLusPTMMnXtbBbX66SfZuvGxPr53kD3YwJdX7",
  "key9": "2eCpT5e2zk6aNy9QcqLAhit2efKUuhdy4qh5u1uBbbnqDAUcgdJCJxm6RaWcB95bifveGWXsNbAAwgm5umyuaY7g",
  "key10": "24cnixKozF976tuJoHkAp56ekVqcNRtYmpNacGd9BpwVW5JfyzpL4sQGKYMqPmZz6mLFkVZfxLT2FBYCamRVAX45",
  "key11": "GYynF6SpzbGBsUP86kHzZAMdWafD4GErijZJHHgZ6GndZdCXA9MvZd6g33hCD6wUzPgAQgfgHqpQt19uxPLHgTH",
  "key12": "2VoGt5wqPnZgb3xbi317dT1GzdZeMtU4tTEhXs9bxARDWPJb2CfyVSkkcAdRzYKF8jUveozp4XTxPhnfzR4f76Ni",
  "key13": "sxbpWrnpztxUvZRAieoeeACQBv3yNZ56F8ySGH5vt66Un7yBRKpbLZsfbxsskkBMNnG13oRfWZU7JjE3n4tt6zA",
  "key14": "59FwaA6jquHvNrEQGLuVVfBm1s8eUnE4Hy7XKWVDy3B8t3AyzA2QxxcXiJrgg5Pr8dqBSMGgurawuaS9K46GjTQx",
  "key15": "59ydqgLAtYtP39jazKUzi2Ay74A5yUjEkjVKDeGpkXLLkgy22s3NVtgQyHFTTX2fbe163RCQjzwcTa5FTFNBWkus",
  "key16": "3uJN4ok2Yew5VRRMhi99jSbJMQVyJbJ4ywgvQ2MZJjEVyMeLAKukzpn1RAzddecVrQBZYTXptdSyddSjPWpcuy23",
  "key17": "5A1hzhSCxYDSoyinG2YffHJH2NRHV2xv5bBUQmgZLBYFLUGBoGDZEhsBMoUTmoBrSX5Hc1sRJRU1orUDGFB9P5fh",
  "key18": "2JHQwoMAMwrzoaaYZRKokmRiYhTH2N1mBRrzcJQFZ2c6wzh1t9u9E8BKQSy3vHRo1yqgfFybj5wTUtrPZ3aVUF2g",
  "key19": "2aKLKoVb5Wp5JvRp3hsbpHA6316XYsmfPu4jcUepDHuwt2t6F2PZBLTtJTctGzn7afc4atUDUcoMLoK4XoEBpxco",
  "key20": "5Ztnt4kpcGVFN4PQ8hMYW7FkF6DH4xxgzXZysQhNDpB6B4iWengfVyNNbxRdnpgVktg47SoisjL2guW5dLHkXZFg",
  "key21": "34LCNQDBiLxVBhThhkveWLj3SfDkQMFZyJY14h7fmUcZgMQ3TqMyi7dUZW3cp7Bd2WVYEFAT9BzuqLTntqaapp1f",
  "key22": "skHTbPRJHnoMG1GQA9yfzJR4ThL6i6zrZ8SuLzCBBiHZLbJTCfW1bSxcdosLVDzjNr9BvPcoLcaa4g86PqsMyFJ",
  "key23": "4U6cW3jDHDeEoVxsoPFestGihC6yqaC92nerc3F7mS4kD8QHweKb4iXbbvnLVnC6rcVCF4dMtH3mHQQ19cNTrhuY",
  "key24": "62PXBVWFYWc6RMyLXW8g8L3ZirEMNQVxvSSbvssQGsKFt9z366BnAcTWsyf4sMdNSjiPHy5fYw5oTCGxGvLvhyjF",
  "key25": "3k1Rp56sWPui5C1rrRMfX7vvH84KEy5BKrQDyJVFGRBoaTGXr7ZHU9VVNZ4t7WNq14StwFcGpc3W6Ri1hURepcM4",
  "key26": "2N3NDxB4bucLgb8884pTmhAHr3XDodfgLmoK16zhZztJhsMXKcWScVLkBw7LXq71xGuy2ehPXyjmKBX2G7TLZy6u",
  "key27": "22MfmUmXb4Gi2zJuKkRoa9UciCJuZGcRu4qV4XPhz33PNKTSpP79GPfM2sQhKPcjLLouN74eNos7zVz3YYsiwPvA",
  "key28": "5jBrXTjkdvkQFdAeBaMa2iermhYPFSnrskrBYqEDjm87ikmoXXvUCoUQuert8jHUvnq4cLMPUYvtQPCUVh6pLXN2",
  "key29": "5ji4N9KfyZ74XL7r71YHbWceKcvfWdcx5hhPJdu7NLpf2ka8oZ2dNnL5noVym3nX1tC3xf1r56SxdENQdRSoyeM",
  "key30": "46W3MPhjMsiATqPRh5zr6WkhtZ8JKpBWSkiyAxZfZ6WiCy37Pbnt1EDthMNiEx3ezebqzxYW7Fyh549nowXkWqH2",
  "key31": "3KPe38foyNEV9h4zmEtCiCWA4QqiJkFR5HuUdwcLQ3nNrWhTvvDLeX5GQ93PGUJcLtGP3Ju9c5AURR1ZM5JAntsf",
  "key32": "4DenTh48iEutBiMayjDpHkJ4dcu3sGexajrNu2aZyz6crboaYLwBarenHB6FZMdxtAczBPHSUPwJz7zjL2WvMPeV",
  "key33": "bAvEDNqm5ADG53hMra87U4xGrUaDhCkdXJVKrZQc3tvJZ6rkknuDwpcD448ipAb5yjt7JLM21wbGqyXncK5rhc1",
  "key34": "25bjiCvwTdNZXPvF2cSjH6mDmRYELBnY9PXh5UnZfguZonS5oLpCKjmstF8ocWbmLzRvJkf1dbBEUTnZcFpFHjWy",
  "key35": "348YG8RFETPsF3c8STU6q2haGy4p2bgEWVbi6JxQEJnogGdBw4dyUWZRs2DiRx1jcmBUPZoCey6ehuQnmDGsSFZS",
  "key36": "4vi2AUaNDSoRF8hPzDuJ5xj9Gz26vPc1viukDPzzmp16XU92XCqeQn84VzLL8KSKqMA2j2EKNzmru5Rde8XrYPg4"
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
