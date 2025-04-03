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
    "5L2u8t3jxn6iMys8fuuENqHuG8sS4t6TBUB2q19dh5EFHGVFtfa7wk8Q64vxPPZBvGFXX1o3rb7ak6PZj8g8P1E1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d1yeSGChHJuSzb35WawvWCovTKbkBpXohyFex3qyZYT3Ww6tgMCz41YGdfjdyvayoow2tecNntKyibSVm62M9Ri",
  "key1": "EPNMPGjToTW89q9rc8iHtpXNPdSC1iJcRuMjpHJjVT9VNMK2r2PCDvpkSfs72PynCAxD3krwb174BTkve3Luzkz",
  "key2": "25gBnodkhKr1kT7Y2z8Dp85YwjnfKsATBgkeG89odzKY3BFifxBDDQ2jVzL8BpYnKbYxeVoEZtLWH9RMcTfhWxk2",
  "key3": "2J9qaff42MCmeWYRciqL2dJrzP64oEAh8B4UbiFHqorCuxu7qXGhmcuPeq9kmZGVA2rsfz4gRThSNUmxETPoBZ5g",
  "key4": "2XgTqxN4HWGv6TUB1NVDhMEsQ8mo9GSwhKFTvoBnKRHiPiREbxyrHQtTkpSVxrDdszDuasgyaEJjQkuyFAzToqLV",
  "key5": "3ondLV6Q22on2gUqC2KzP3kV3R4BVmSc8UpEBKhwmjNg9XhyVTVMd7LWHK9cvQPNjGTCF6kqYZYqjn8VCzEE1niA",
  "key6": "F3xK7TXV94ZJcUr88o9UR8YJgji1c2ULb5TUhoGoRULcjghWKhJA8AtXYyXwD66ip4vccdkRtMG6cu2YizHTofq",
  "key7": "AKbnBfuAxrrC3sMTJbksEdKddVMTLpgRpXfAcvKMKg6Lmkh2B9FfgzR4qhjjPUZBVMJ6vsiMnSnY2vw5JWWUd5A",
  "key8": "5dZUeg4mvkVnxgGdujhhwzZnbh9EGNCA4Yw5S9xUT27TqwG5UhtqmZ6Gz4KSYSKS3tuUncnZHxuirHr7mnMRBkBM",
  "key9": "3uHw6wCPk4bdQk1FqiVVK8z4EFEqVVn7fWKBwhFs9ty3xtf1LmgMq48WZHjNEJuzWoU1Ybri5pQy3BouQETRD1et",
  "key10": "pgGTf2sck3Raq3vK839ymA7pAT2hXwfpiiyPNgFk2qHm9oiE4JL8idDQYbGz9UoHQdpAfQHKqjxkeePz2pbyLmz",
  "key11": "5NAHySvG67Hhv1Yhoc3WZFftf6WNjgKBRZKgFJi1AC7qq9PtLSk3ZCAzHiTA2SUp2DGnt8r9QMiioaWA5tKCkjRy",
  "key12": "2jWVP9CakxaLBGi2o54jvRH56crx3jGR95RoymJ8kx5vLVyRMw1NFMBBCiT8REZVsLD8RxR3h8fXxc6NEACFtj1S",
  "key13": "diTALcfWQqrDs5k271P8bA8YnX3wFcBPEgKGZ4i1HrQqaaQXjTM5ofpF826aNVRbBZ3sbnb2hUDYggLMvALnw8p",
  "key14": "3kqCw9o17KZ2qSEXUc8EiYfyjcVg4rvkgRUZMGLHUYHBwjWWw255zr1W11ZoSxAnf2497WaZeTrz2p6JXrkfQoJX",
  "key15": "2bsZisXgVfn7UBNwmdyWfUDDKUKAYNEsxtBXVd4mWpVJXnq68yBnvY4UHqXrtsx6c5fQ7J6LG1WQGqp2tqEcbpsx",
  "key16": "4VkRWtjTt3gMtJmuLf2b3HiTeN8fjMtxv5WQRvJw9DxBiTLAvb1j59ejSW9TND9VFcGjvZaQkjQdJoWZ5zwhBnPs",
  "key17": "2UEmJtbcoCN6J3WbKSDET1thC1tVixBc2PHJ7PVPXZRaMTAnjSyx4mpwswQBaVKhzyswpziKY86gCErHuLuhTHBa",
  "key18": "4QrAuRqw8kNZCJSpXzoiwNNBJPaxvVsCpcZX533jxghw2Kt3ZV7YdqrXagvtV17i4bTBSoRSi8UEGjnRrpLUgTLQ",
  "key19": "2nhs2UgVDWuCqAVGtdSgKDvBs89v2ujMLmAoUy45ZvHxekFUPMCdu4VPb23uF8HDr5wVLtFjf1pAy7NT9Nibhp8n",
  "key20": "2nTaDxgqTG9vNoie6tdjHaaD1ygMAgGeADsz6sqDS8syF8PYKjUMgGcXWRqGHu58uhXnjQAq2agAS5BjXEqSkM1A",
  "key21": "4tH74ypE4X5J33GRtfr4gVS72XEvohLbXuRiD6y4MeLxNitdcQMyKNafkvrhoUE7Er22wXfeGJkeFr47qvZ5kxfR",
  "key22": "veVDzPtRuHNoiSbuPEoPe75Zv99EdnQ7xP5ZpoqNeGjL5xJ9TyQ7mxujccCeVwPSpkxprK5b6BwEzsmx3QoTcmB",
  "key23": "2KkCZ8JFWsxcBFDpRnyJBVwj6zrq4YswpNXTZ2mggNq189pNSFXRFa8q51aFX8ycBfLFN3Atf3tUg3qyfzwG7oUr",
  "key24": "2kh23ytYhGiJ55nhaj2EnHTqPXGe2yt16qK8mfyvSpGYXDPQBmspSY8nef5grXdJ5oraKtkpUV8LYuAa6EPr3p51",
  "key25": "32N3wVFWDQq673AJeRtAXQeyHHmxhnq1b5w5cLddzJhx5QFgqX1325wYq6XKqg8zESA1jiXswCMsBL2hrkLW38np",
  "key26": "trpP4EosyD5s4yS7dCF1zq5BY1yshVnCwoQUb5XpptrJZcbUCpGAFgWerQt8QTkkAVZF6SpP4CMejiXb4WKHdhC",
  "key27": "4KXLNSYq8EgYUYcob6a4XorSDfKyciW4pVV6ofZsoSoHSGv8NoNuMs5dLzenG8NWvnTqBKEzEf4KZUvKMVf1AWNb",
  "key28": "3HoE2BNbD1DQdSREDVf5gbvAjGv2RaXWv7ioUzY5gBieyA7rmwGKm7gpQEYvSsQ2XF426jdfFFD4Q4Myfj1Zmxn",
  "key29": "a1m2er3kMXUxG2Zh6nFrQA9ot6G4BdfF2GweGz9QDZgvvDuHGvmU1XS2JLqpaLGP57kSxMwJVr37YNHeivME9pb",
  "key30": "4vkXqngJSFKgVtEacuWa3oc3nvPaTJN5nVaPgHVku5Utz8AG4UzevrrZfaDKmq1hwxZrBF9rA76SDiufpUZL8eoF",
  "key31": "4idY5CaHfETk6hmWcEHpnrBssSf5evusQRbyrMmwtqGvZ7DuYwYBU721E1JCWbFrqpGzjDJ1EmjoW8Ej7ku118Px",
  "key32": "5coQuBFe5iqojvUGqSobBGonBkWbpxmfm1SSGug3rciwKJCvLQfNcRQRtgDah33Udrnf7RjDjDRJyvYRhGfvAjfg"
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
