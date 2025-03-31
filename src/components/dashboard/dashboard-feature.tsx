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
    "CvFHk4hKvAKTTD5C3ndNnhFkP8sZpXYUb4D4SCPzcJixXEDZe21cBuYFnGEi2VBbnvL24qm5LPBNoJLnojFbhrn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VptJSohgSSmacRS9EDpXPnGp7vH5kt85Sw9Y2FcwR3hhavNjoSibHHzTdRXHZwv4cUdK7M9garfmmyZ3Prb8xng",
  "key1": "5J9DqEEDwQADz5JpFJNk1xavJBUaHp8uEsb81gruFSGBrLvHjgdTPXDYSA5WUX4cvWfBfiE7s21FSR8vXzmdQww7",
  "key2": "3LbpzPpzeJpkiRj9obzW7fGeAW3yK294b1AXYFrnXePA8eC66dcofuNkDHB9tDvV13iAmU5yhcyMsWU5dnowXMGq",
  "key3": "1qneQf1XdQKHLY3buJV8DtiUdaggqo2dFs42Tmy3mm87cvLxDQgn7qv1LoWyXFe4CYJ3FWHiBSxVzfna9ipKQGD",
  "key4": "54EwgK6ExCF9s7xr5FyCow5SymXLYT9GQi3a9DKfqFLyXCQFe9mMXgWkvhihrcHZPACaE4QoZg1nCh7SvkKM3QHS",
  "key5": "5Fh2JuhfWkxZKvDGPvzSTsMXr8bZXvCuhTTaX7HJVBNLuycqJzfo356whQmnSKbZqkwc1TnEUDdL7ee4gkaBm1ZR",
  "key6": "3PDdKzsf3cx1uwegcT8V2x4xyV1g3UzH12QtyrHtfyL2xxc7QL3fztreeV8V3uRwu3Ku63rNMMBbKvRYrVWynPBu",
  "key7": "3UvwGmKMwCXu3LzxRhrJuABhUgewiwrv5bCADkJLswwyRYNG64C29DMAFZeaFtv8j7xYXruXwQUQXQVvRoKJpZEt",
  "key8": "MCExZskX3qNgubQo1MBbPSQfkCXozHShEbpn34FT1NMg1HU7J3AfyjRoMSonaKzT8WnhX4HUzcuQtVao3VouaJi",
  "key9": "1oJtVjUFTSXBotHwKmnc99h1ak5DVZZoUCYMKt79wFFxMGrQ1qXfQVfrpK5oQR4XCroMAramkrLKwGLxMcKYamU",
  "key10": "4X8xAAUzXtAz6vCvLX4EPdqvzN3vA4T1s3HU8HjgNNM8Tduvb941FGcrmimKc44Cjvg6BqgXVRJ5FhwRvDLpuoky",
  "key11": "2eN7Z6fSfb2cAuqW6y8Zdebi6GztBaMkmafTZtdgM3p924VaDm3oJSEGon3N7b8hktC88cFNNuXaN46eZCxoetHC",
  "key12": "phqo5fxpJePzhbzaxuntBZczD2vy2boK3BU97nrrssVDJ8wh4S6CLG4rs68cr7AUwcKhMsXhQGqEcBPRdpna44n",
  "key13": "2MjGKePqyjCVZ1tGbgLsQUk58puM6Yc8D8MD7GbZpTaNUwMN6CUDeJbKeHAHFxs5oP676sQedb5HAjiTJViATUEa",
  "key14": "2LndnHggeSzEjdG3pBWELKJgPUPrG9xr8WhYM7RSrAspDWsFa8WEeZnbgyUftWLhHJUypnhQ7h65edt1Dx8k5997",
  "key15": "48vNSQ4mDxY1N3YUGMnQ8ubjX5HPzffKffYVmgdTrcMrve5ZrcUFCWvNaJkp9iY3FUXUutsZPk4bDd7zxmnMethY",
  "key16": "4gjnHnhFue28p7tL3ZPXXHDdqbxmXHzaWTpkXy3UuBBLUGuianrAst27fHPqfYGk1MTMaFyNRC3Udmsovc9CuDZk",
  "key17": "3fWozjEF28AUPwiN8rwEHmDxtJzyFBD9beiCfkPZX3dGsbmjB8oorgsMmCjUepkXGsSFumt5t7xMcr4eP9vDrmGd",
  "key18": "4t4KR9tNGy5HvUjXW2SVv2STg2q79EQLsNLQgEguH5BHMtKNyjFALwRegd6dHbizYRjg8S3VG5VuzQDYb3NsuJm3",
  "key19": "4MFwNY5ZMkobDJmB1znW4Bzm7CVuoTtDBVeMBFz2Lr2Q4u3t8FbgnrMc2UocHMuCBXgii7MGuzXZdRo97dERdfw2",
  "key20": "jd6BBf1sCX7iSxPPQDULfA7Kfgjp1yFW8CM8fySPb8zwiwdkg4KSm66GLoYT3rpq54He9MhD7ZjYYjLLzgbY7eu",
  "key21": "2KgKuTCvbcBghBaPvMrL6ojaJiunCHr6UPSCJyKZueAnawHAH41pWMo1B3Y2Vmmu7z69FUjYXVeRTGBfr2rCdmW3",
  "key22": "4xYEcQcRu52nZYj5brE46uE9bT9PaHpcVjAsEggWZQqekaPrwetnr7aGmrVQhChTQBAFqUaMUev3DbS2iRKtATbg",
  "key23": "665wWkjujYyBtC87wNy2NAFWvRZJkRufm4qo9g5Qq63XVuUD8ayD2yFbp95zc7L4fRnG4p8j5DUH99D7oiDGnLS",
  "key24": "2Tr5Yr4sr5Yp4Qj86b6xDrTSx7w54HE7QzV57NG2wkgGMMBqdrce8DphUY4aNMc2ZnJj3f6nVUvKo3vRauF6Syup",
  "key25": "532gTJZPMZrjXkqsPYQc8GYgtLAENdD43Q1ZbFTdZHsLxr9o3osoLdSafAQCoVb2wxDDaWPGecEkCz7p26b7ysG5",
  "key26": "31NYzr8jXDKw3GXdJYbCjK5z6erU4DUQ1VqABxgsEi4WxE118kbyguaU3zkNDJQhFYmPtmKdSJQsy9VRuJ4Z1cvD",
  "key27": "BzHERC9SyQ4fqVimWCDxvorqU7R8F9Ra6oWRYJs9nPMb5ggfD4szEG7Z4mJg6gYxqupYvdQJ1CzUKRtEz99mnyy",
  "key28": "U2BZZDSt53659F9B6rQ8jusjtnwmswSvpeg4m5CSAYKGE2WNQXnJEBLeGzCPiZBjpv9KwUVvK64yN44fJukh7Wa",
  "key29": "5abxwmEsnvVAPGdhpDNChMvFrT9Z3vyRjSoUmJFD7gTxh9q1QjWHvqnrm3ATaf2RMjKfQQbGLLvNt34bJHjwsg48",
  "key30": "4VzKJZwUyiwQDa2h6kJxHySSSUbXPJET5EjD9f7PSQMMpy68Ge4K8hiGxKf5EnsfGhQaUHpLjoh9hi4jNQ7Ktapf",
  "key31": "35LfXziViDn2SPR4eacDemB73Yjw5WDm9B1Bncv2sPoPjZmTDdvLs4Sezq8Ec7Zg2aSsjZDXAqoaMNmC4tV2URt3",
  "key32": "oWwS4m3j3Tcaw3CGpw9EpWDbB8EQJ8VB6eM62wQMy25HHznvC2Zd6PQBtYaFEBF7c2CY2V2AEgKt5v62nSCaLEA",
  "key33": "5b2Atk6VHYZrASvxyUyWGE64uskFprsuXKqQwwWFZwLsmVwj9dvATqzVYKe59af2jvQhSryozbYKsLM9LHJZeaQb",
  "key34": "4vaywsDMM2nMq6Q9SfSwd54UifJLkf8AsKF7i6GyR6uidpXN7TUgB6uL513jaFUEZD9wMfChEQD13xKmgczdJEn8",
  "key35": "2zZoAwiGLdYYRfHEaqUwKPBwSqA1CdGHPGqhvAtrzkVxm3B5Pi3CXMXBGAhm97hTJ1y7abpU6Ag78dFegsEUYWzT",
  "key36": "RYCqQT21FwjoTJpLHNVQ4epCgqPikxRbBQ7GZDxtPn131qwQUFX2dHYuuzEr5qkToRHax7QKP5oxgzM2arrCqzq",
  "key37": "2493QVhMSoxUj5KucbFLsEBkAJ59S7zhkd5Yc7ZfMrGd45Z2A5ZJxBFWYQUdZJW6W7XkhyMyft4b2Z5uexQTv8RJ",
  "key38": "45GbYQEqju9NjUhEXhGG5NxaQ1vST1p2rTroBZccEcQicPVnnXB5qr4aUs9aukXKpE8GK9R9CwHx23ivJnoNB1Eb",
  "key39": "4Ga77sjWLkcQgkCvSEeLhbXp9JmScdh6hnchAPRogXT19bofCgjLiCWALTtYu7SfHTwNytixeR2SxKFDDQmxYEju",
  "key40": "t4QEer8Ppx8PJUgm9n3WAUgBJ4g7hYTRH6xY54SUvHJKEFK6bkNo3Lyn7c29u7CUQhvrjJ88B86spsFw9d9kFhF",
  "key41": "JupyogXi6oVTsNCDka7fFFNGZjoDGh5agb7djjpcHiiJ34gSktPpZf1UCcGFWxogtzmBMhrp2x5sZp284qP1TXT",
  "key42": "nc2d1EnhWMsaR9juWeumJZ2KfnB1QZZ3zzWRosfYd5Sooooc7gu2AZH7Kb9WA9VV4BHFaZ4Hdt6XWZntyczNWyr",
  "key43": "2pX5242KpiR71ThMLuMbMbGpt4jvEde1Zeop5ZUXDF2oYXifJMY7jHpuxGTQnp3cE1aRMUuoR8sJMSPELsG18xty",
  "key44": "uBxbP2p9aGC5pCCWtE37C3gdjQDicSVm83nwgEfZiSEEewxVj1ohjWMzbYVDVr11kgCeoNcZKCMe24fCsh74939"
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
