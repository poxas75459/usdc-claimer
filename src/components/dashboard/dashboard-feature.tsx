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
    "25VKB3LNss88g9ApryofdsiKRfu3mweSk4bdgmnvEudDikmVizR6xidAMzdjKnbAtTLBTum5NXVhLNz4tLwW1QtL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vEy7PHZnJ1Usi7u1TyPb92sSMXim9Amraym42aqXk9ghbxc4sD7exp19nF1ptya4a7PtzsEN5K5p8WWqj4Fh5fS",
  "key1": "4jd8gxWQjUAsrMzsJYj5Mq3JUSw3cCca3WQmDtPTVinRtRetio6vMRSMtawf6xUeyVtLL8uxFQ6Ah7nREJt7iJ6X",
  "key2": "UnDcGqoiaNj37Vq2dW6PcrFahziS5NrLQR7pLG9kmT664NXhuSwDcmKTaFAYc46K33Y4YS7PBjmGJ2B8Cqynpho",
  "key3": "65Fk3q2YR93sCPtZYhw6CxGt2aaHDVV5kx3tEx2PXTzKq1M2QcJezEgyTieijXwQaMBZ7dquhRxTRwAywwVjVW5V",
  "key4": "4XqHdZACCV3EK11Nkm4s3sAfdZzQdcPGqd7A4D7KKP85ZeELkrUjpgM7PzdB5UrhtBvBErtK4wkZVwKnpwhVMAgR",
  "key5": "5pR6D5pgiG95AUktbJqCspv7vQgxd1w34k3BSiHTVnmSMqwp2T5xKiU9ABJBYBAC1iGpExuzSqbLEtAErS8AwApZ",
  "key6": "2Wc3BGPQqom7F9NimXxCu8BuX6p1ssQJ4eEb7VB7VczHrjxYkznsvti2ji8V2s4MbCVErEgodtLqcm7o7Ecvck2s",
  "key7": "5KWBH6LySFyED4Hq1N2sWJrNX5Zvgad1yaXBJ7gyicK4BH22JGqqXx79QXyMxnoDRSgJadsws4RCKEdKgtAbUYYd",
  "key8": "5H9976b31K6YXMJsJS8rJDqcXwU1n7uKucAgnvxypiz9NUYEpJg72cqunQWMdF77TwEcyWXgFaciKNXT2nzTeASA",
  "key9": "4Nf6escxBkSjoy8KeqFRvU5QRKLTADGYMReq4nCGKAyFmo8vuY12hwG64eG6rrKARDwiTq7P8mCAJ9eoFoGN5sg6",
  "key10": "4qzo79BUYwgbByzRrENhiLZboDQt4KS25Qi4bTmxHPG6tmxjJHrLr32BhNw2sqnMDmQTZr7MrpDkq99WjjWgjrXW",
  "key11": "4S3B8osgtbHaGWc5TwFnZZKZnBN8Bc4nPhf7ozgs39kTgYC7wpY8a3mBc32a87jjcnsczBDxYpTBvch8vsC4w2yd",
  "key12": "61NByVKG3oA2MPXFxiw8NPo8EvLdxhM3KXZmAaxLFywQgqGtRMq7J7CCu31Bjaa2LeDcXDmAzmCWqoYHPkDTGrCi",
  "key13": "4RJHR3JwkAKztdjCAAaemv2qr6Aig1NbgGJxaQazZajySvu2QdvwRXmQVNAoQPUxt53Bqfq29XPTodiQHTdvfCYH",
  "key14": "41mes48BCEZkh8xY3P2kbsViKWavCAs4koMMQDSSgyWY7UCXci9zY4NhdnrVHcrH8CFMKtEvJPjJRhUnca4omja9",
  "key15": "2Sv9kmrpHfipKrfQExLH88KhoHAY5TYX7n8FaZfCnCFRq6rat6TUgTdkXD3azZ7ax7kPbG8yGW2vd6u2KzZe8p3z",
  "key16": "5q8i6quhg3cCzsdinVkviXyrMAqHHsJGJ6AJCEhR4BvAUkNspf3wTxQKN1N2wmDDEDCQNj8ggYhDB2vDVEnmsxPd",
  "key17": "3PzjnvSEaVzjTEkjxhdfcu1NX2yf7rBXYYHds5QCL4ZvSoyPyCeJakhwfVBkkRnoqjVT4MHMX7wi2EeMeCbowHEb",
  "key18": "5Tw3nYTRXeE8Q29nt1GiKkPcRFznaii5uFuyKenCsxCDkk6AusBWMWEZVSt19oNp22UE6Tnq8yo2PTRWb52GTCsJ",
  "key19": "4x5ZDpFxz1NrUu59Y7gumQmv1BLBw7YWaQsk14gScAKL5qaTJLvuc3fzE3QtANi8rhdDV94tqTq7CuHH2BQukFVZ",
  "key20": "3apz6mWMFSzhf7BSajMEnA1m3TYcJTnSHQYTB8KABcwo9YD2nc36KWRo4nEwm8ttB6z15waPAo4qeiWYShi7zZXx",
  "key21": "62CMzRiXUtQv5cGPUbXppMcHFbhU18g3tHEdej3qLpoVBgfPDsKn5dkKxZGHZLmH6jN3Gx45b3Ez11Wun3fR5J1H",
  "key22": "2Q1L8gBR53ijyWpzWijYVtQRXV7HqbBryygHXJ19r9r5UbPjBYfp8DNWX9EmDFN8ax2t9TvzEUKB3nx7j6tpNSnY",
  "key23": "2tNukPoWB3pYePMSG9PoV2Bj7c2e3B9iJUXRwUxMTXtSRrexwvB51J1MH6ZPz4v3S3mz4Af3csdvS2MpEHyWuV6F",
  "key24": "3H2csEJS1yGjwa9mUvXhzwzHnE3j8cUt656yi8LUgarmQKDtKN59ga3nqfiQ9ySrhoEyE7jBG9VhfqdbipC2Gh1i",
  "key25": "33yS6Ts3zysVzsyXZ5LEmHFUt6wg5Nqtv9YkfEENrZS98fiD63ZPgcGTvoprk8hQC6z77GjLaaSX2rQCsGKnLnL1",
  "key26": "3x9o4x6nt8SzP2SyGRa12WNsP63NSPAs2PyWQe69EoFfy6jtEv9LGBEvJeACdyfV63uXGjBKutRJRCdLEWnXbPeR",
  "key27": "3fk9Bq2Z4WAQeR8UxZVFz7qfZYq4Q6DLnNSMwMXgzpBrqpoy34HDY59ZdpyLxVDYUWGYoPdFENwJbjxKbmaD7ehP"
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
