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
    "3h7PK69q9uJDZzaFukcDTYhN49jEKDFuXVHxzTr2eX68etLBqqZcYDXH62GTi2tsLixB17c5yKvN4c29ehftZjry"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yJ49brRUpiRUpWm6u3jAQCizrBX4KdfS1oSbGeBH3EMYKHEuxfhFL967NSpyHKej42LMoqN3gYdj7aEL6Rj6xnZ",
  "key1": "4WrUd6WKJSfTpL3kqagKoeARDw3opgifa96FhWaHCgWPj2Q1ASiuf9sWKDbUh62wrfDtj4AVFc8JANrrWDyUuejh",
  "key2": "5HAK1B7adFysZ1zT4eaoRVQQPuJ9KvimmU1RnJkyA1CUgXjZfnvu16xacD86tfXRz8dg1XyWgbDWksXnrDp9VeHB",
  "key3": "61f5Pb9jKfePNeSVW4c9eiSA2fgTqXtyLGapiWYwTEzJmuSXFmbgeazWj9GjL8jeUmPZ1Df5gz32Y6vYRyGkgAH5",
  "key4": "3cmURWDGmB39Af1q9yUzjLhfe5khuMdr63H91fb5X4BgwgW8vB2etmNPV9Y1cLHju1nWrzdUp8xV5qCPcg4ZgN6q",
  "key5": "M8eaCQdqQQHoj9FhHzetVnK1RrG9UfihDpxywktTEKnLtSKP8SKh6LMT4WxirVB514QuRsYQLE8ij7hjn5eMgt1",
  "key6": "4tz9bLq741Rc6ACP1TNWXMNF2bdnV9JPy1B3s7gAYudxBt3pe2aLXANLUpZjC6Q6hX5Lvmeipk7Jeh1vNndcaE2e",
  "key7": "3sNLj2jtKHrnzdgg7ayaAgSyAK8diRmjAtFvQuKHjWiCxTbs715LhGT86SY6VKVRPYXQKo3yg4pJfhWKmd9idwUw",
  "key8": "3uDaYpHyX5cJfnrJngPyNGPX9iRdSXKEU2pFdgNHmu8hjjqQdmPM4xVhUe8pYeN2mC2xaj9AapS8Y2ZXCvNXmUbU",
  "key9": "4mvpCMfLohnCtC4uGRyt26T6EbteT2UgLfSnjfsVySjjCnjDBBBtuWfwpRGSC56yKfUAWCdgfzQc1scpFEAuhzWN",
  "key10": "22y5zJQ9VRPozfPJsK8ZpSoFDtdT14iaepxz28mmrwWDnUhnNw4asuKF4dyS3BDVNo5wotWxxALihqDwUK65i88L",
  "key11": "4oKYw97mgH13nSU2znkjPrLbpHaZ4PukAxWAGKDsghw7r4jrjMRFaTm4sNtTfsinqRnEf4GqeaUWpbHM7ee4RDRo",
  "key12": "22bu7cEiKyzeycZNmKH6eqMCCeP1M4Ed6GPFGuJ7W6xsjmnJ26jUycWn7emGGXDAZa2DU9ScybyPq6c1e4aLWfqW",
  "key13": "5nEsThf9EenutvDhW3XCfSXQnxoyWMnospN228So82F2hrFrnqUHTMa19fXSzvebopmEj5nSRhnm7ZyZbCcKNmCe",
  "key14": "S5pYFszEQkoZqAuXKwmYve6FnNK4RhQqMhxdEQxujreMnRYmAs3F66qZsWpkeDipADEqQHNiYst7sHpgQqmZxoN",
  "key15": "52tv8EZi7NarrAidWRmbaHaFg7ECy4q87VCKjgVZhfoa35oM2EU8nLUbV6wTNoCQSd1BLXDwid272pQZSV8uHqz3",
  "key16": "4JpTvgPNEMvYgjuP4n1YACeGMpDrW4d7TMjAAfJbX9H3wPUjYVxgB4Gz4j1EpSXJsDRbBWmWr2TZPBvzccjcn75V",
  "key17": "2wTuGhJxWE91BNvnd7X65QkVHVrfar7S4QS6rhTn8T3eFarFDAhnMasdbvs5uR53XdzA5hvhxjGzzMMwzYYbJwGw",
  "key18": "2N7gN9YayPedFu3nQ4sYYauukFBkSzuWaD5fzzPYVs6KLVM28tu5km4VFmJPc4hB7XShvA6Ng1TccXG3ZPLLmPbf",
  "key19": "4JD2vVFrwvagbdbfujUzzeLHyJxWy4SUCybQuHbVmTYbwQJ4f6DgoHv6wbYz6afJGriGe64sdfxwFdRX26dAHZVg",
  "key20": "wN3aigiN2hnj98MZ3tRz3KkusRKi96mep6j93eCTPXEYVrRwTY5UgnFWkUvRuXnLs9TtWG4CYvzPgbnK66pXZpA",
  "key21": "5Dp1eAU1Q25tdBfuozYa1s9zXwhgPqoF1jbWxrkjaWfumDb6z7Xj5E3CcsxdouE6QivpjEsorgFHphoFETphKsS3",
  "key22": "YE93D7y2TQdf7QhscjjRQdSm9Yu3rWKtDKUpNBgqCM3cKYA2AevYWVn6ZNoRtctM5BGkKrrDJhEFPFzyPXFaXEy",
  "key23": "2o81iVzEMqYQQ4hZwgRn7pdEsrtYiDc2nZYiykkRkX61v8yuA3J2ECfwd4wyyxjk7WiRhrZ2yEoRoJdMnXxQgakJ",
  "key24": "25nUsorbZYCYCVJ3REjMZBC197Se8E4GyGBHSQ5amwstLZJ14E7tH4zaTqWSSHGULx6NwV16uNjgws6EdRkGMQQj",
  "key25": "4oTWfKD5zbiB4KQkhjN7XaSsw8yJ9XQLGZNLQnbmFzAoXBo7yHZmC6L6L2KiyZtUQmic9CHGJYXKDDxuCJLAdyqi",
  "key26": "5A6CThYhjUr8u1ejr4zTuwgjAw2JwYd1jRZ3kCiE59gzFdiastUQ38UVWjeNY1kVMhaoGUPC1J1NgLyFsViwz6HD",
  "key27": "4UKXsX9hmMY4tPo3c6hkq543MK4orbzyxsHc24YtQ3ja7M8BGcVUJ3s9d17XS2oycXurTd2KgH5hd8ASHDSFRdpn",
  "key28": "3Vc1uU7CevvD7bWGxPA3tgiDATuUyDRAaSHxtRfZXBr5nstpQ6bRJXgy8kgmxii5d1ZSMAWLZq2KHuXvnyLDLUdh",
  "key29": "3rZqJgockYLGfZXnDtmEBTwTDnPCBFirtBscrQQBPNQUT3RXqsz8SS3fFBNQEERAwDJNiQhq2ZgD9hqKS43KLkr4"
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
