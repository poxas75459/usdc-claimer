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
    "2AXrEjzKxMYXbuVbMHJFvsMCpvNY73HbeJLR29zCTdLcEi5GqaYfJFe1xirWQy3iZ8wsL5oBgTp2swMnD7G1QPQj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62CHTXUpS82psEbSjCyi9kKhdyPskyQVmKmyXPPmz6QornhsQAEjESjBErF3uaThysWJPyMrXftMqHrZPGnq8VTt",
  "key1": "rUo3x4UykUpMxmfRbYsU6tKp4rzYAMXgKXC72m5tJm53R4uYE49cpA2nXx5rd1ftvnWV4UUGBYEa9UXLvRqrEsL",
  "key2": "5EBAEyTXNMYEuFwUuAr5AXueGHX6zeFDDRQsB6QUtnRbCq3FLUabD5KoYkGyPEMFY2RTsXGg7r3To3eExsXgMmvd",
  "key3": "5a6YjUFKUu5d9yXz9dbpG3NBP5YWf6KLjTBqKc1i6YNRXJSrpgpcvUosQqjq5MVNu45NDeEXjrDM5ZbHLWGkYSD",
  "key4": "2zatW4zpPKisvXdfscM1et9MVWX8gWX6A4CBsZbtJcB5iWY5vfikRjGBiLmm7ydLJYXspNCB9VRdhdrKhJmZh7yL",
  "key5": "3U826sZxoRkJFN32r58Ld1YRs95FPTt9rj7DRDYmxK3GMmx9HKsxgx5Nc5WingEJ1xzBKr8nnanH8P8hrE5duAtW",
  "key6": "4GehrubDaydL5GoVaPdzeZ19u4Ks9svzgKo6TUpV1opR4BeEr9PjwfYYKbpx6YXjbW15tMXgJkqh554ZfUQtMBeq",
  "key7": "3v9PjV7YrTQfoeoKpsFULbhhLEYYMesvvpYgaWXLGY8rCJ3GxZbF3EkCbppKZFdF39KwDVqPbBwogjxnWDqYMLn2",
  "key8": "gZd1gbhJUPxJCHskT32q7vBHDyXDqa4rrNmSzkXKgTbb3de7KU56gwYsD9Mx3wu1Qq8WGdpSz3Y62iKhQ8s2hNp",
  "key9": "39FRvFeFJMBSnQWG2sJGCWtADUkCfq9hpK8F4JTeQ6czDamAXwyLVkw5eqWq6eWZ7e99c93GciMMvjf72ZSgNfev",
  "key10": "jKzeL3iHgRuUeZZriXGAskitF34U2XnxMrGzpeQsR8PUuxvGk7eznVK4VXme7SS7qW89iMgPHp2QvxAqz8uufo5",
  "key11": "4u7QbRi9d2cwdLnFY72P9CrzAumH6Kej8JxvcLZqaBsdGqfocc9XHoSRFJ4hGa6qDZw2aNnfs1DzLFmEm4LPDVwD",
  "key12": "5EpQUCdxMyQYAxaCyoKzAE96FbNQf73LQm9ugrm1Brod1FY2TCBW9VPQLorq815EG61mzL2DcCfDKbLhnNF1oVoo",
  "key13": "38xSuXdMX88yuKgazLuzYpgtYWUHcJXNxNKjMxU2hudXJqr6RToMe5eMsmKU8LrzwNvaRzD5MguEpqMZyzEtNtum",
  "key14": "4o64yXpURYx87NdeiwHMy9PkZGK6GubsTss2RGpRxNkqLJs1oqxEsALpFiMjopXEFPQtpDJjqxZBB4evnjDGEtFE",
  "key15": "4NarBkBcs2rwyAfzSAiVAEriojjHHZjGxBVZYz2GNEr8CHrixQLEBMkQYm6nt11bbaBbxrSijrDnmu2P9gLYEaC7",
  "key16": "u3NWyfgrS1thajX26qrCpxXAE39Wm2RoF3bM1ipmJPzNePgfwv429kAt3XayHhr18Wdhp4Wqp3T9ABCiQRPSQez",
  "key17": "9MxRvB2ZTLJWqiPtpVgb5q5ttbs1934LgJ2Fs37h6Uw9ZHqGNQ91YRkYBtA41vpuKuaKttR81DbidY8i9YjsshU",
  "key18": "4tPm8ggsJ9XPpbJ4caw8gChdNQnLML9wsw6MBdpxQKr5eMxD4Mp74m9fj453BYftEkrb3HLFgLBqSR7WPXycyVo1",
  "key19": "MXsT36xgzKtBp8tvFuLgcKkTG99CjWXAsRkN6eqC8HwGpBQtyfEkYpeJ8LHn5zWosyFK1ybGgjScAqJzQy3GAcm",
  "key20": "tvUNCLM5ZKP3mwKgbSJmrg5ea19MPVprZTiehLxJNGc3tXL8aauUduys4ju3YXdv2kSvhHSjpiLdXsWTfSN7sE7",
  "key21": "H7biLbtcqSdWGUsjnWzGr7p4TA38mQX27DSaCupqhwR5vb2HktvVavbCJPH4yAcuE8pZVzBn8HqUeqvGYVFoB8V",
  "key22": "KgcAmQbCr9PATCPXg44h2gfm7kckuCABGN59dYNv2szHamh8hmrnuMpa9v8KW5yGdmik2CnzBiDN5EsoKXUYn7w",
  "key23": "55MHpMHqmRYTYiQfxGqD8TxMQgdZDiAeyEAtEZ4bBCGGQkKG4b4EZAVFNcFk9kMC4eh4Dn3WxWEtbcQrrTbhRF3g",
  "key24": "CoifnBguvpp38iipNwAA3vVVQDGfxzmFvoT838b9itmQvhxCAd46tYrqXrhsURUHZkvsXmn56UZvQ7DvQpGPB7Y",
  "key25": "4DjkoBMHC8SaJBxKaD4pjbEX2vPvqedfcbdxsxAmHxFhEoE4TNfwTVxNwjzQvJs18kkaDZ2TbiByCmabsdt4Kyby",
  "key26": "3u3k1Q6dkm2rvk3R1CArWTBcsjNVgXxDF6ZacaZzwHagoihcVCW3RBc7G7gpivrf2gAjRH313Dj6L5Qi2UbgSBKL",
  "key27": "5FiY5dbKfQcafqNhE2xPrDspH5R1oy8AXoTo6KmKBwthbvxyX3pCcGWSYxe9XARd2BGiydCdCdKFWjtcySKXDGXL",
  "key28": "3mAZbMSryZz6BU4jQ645cM9Mi1Dg4zJJPsJky3rb1H2TksrAsX1qT5XG8hrX7NjW6HE7HWNiTATTh8bZbw99vtd4",
  "key29": "4WcHQhiPDTYV8oadqXkgkyNTLKVj1xycbeGZ1MtsmwSXt8ttym59mNT9UXRpY5ygnVoEHsmppciUEQzDedU6JPiD",
  "key30": "21bNAyUF2vZ18UwmSBo5tJ6U7W9dU7GcvjD3tHkNG9ibv8HzmnXBDBT2tGWQrYbG1wRQmwF7dcPMt9EU5S34By4z",
  "key31": "2KLTw96QXecvwur8KFYNzind1jAinGu5dsGnX9Boy6HALxqThJZpJ7PZNLB7d6nhM8fqeRY6g62HCbZJGEA7R8m5",
  "key32": "3iuRS7kvw8biV8MXYBwPM3FH1iRoGt18xBK6zkJG2mzPVms8TrRa9JpfxdoaqesHASx9uYEE63CfnDriWhSS1q4",
  "key33": "5ihMKT9D2E93ZhjpzcP9p6Lvx1cvxp2oVVGwwe5sDCeeU6j3qhSpnN1ypouRH6tEp52C4hm6EkE7wVdLXPvAKGQj",
  "key34": "3vbYQw13ZJKLGnzCxderUBPQPCAbfAzCBDdk5yaoZ913HB1BX33DMbeVErV3S3MgguSZfE4qgroVTPRbDbPWmaBG",
  "key35": "4v1Bor1EBq6m4eHws6FePsFpGC3JL2bVMDftzHhviiKeSNKMCAf2iNkch5pJKUxL6AGwJpVbwU2XTdpPBnABXEXz",
  "key36": "5qEgyVbpjCXawXQRWWbctAPDhdsYH7sE6zMKooirsKP8epUsMxegHZVER2kTrGRbFqzqUvvNUqWt7CuAJ8988E21"
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
