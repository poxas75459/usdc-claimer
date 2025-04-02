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
    "5RV5PnedvzCzaEwoCQ9c4Pi8pNwiWrUDXQDrDgffPvTQezxAKxN3ekqf7nuSYvJtLaVVtA1kHZd5RxzGYDcj7eY8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vUYKhvdW1WhxVwyYAoc98oRsEF2esxAjMvXwassftZ4TPcwzNuyQskALfH193SKchWW2KGUXT5bjtVytYui2Yoc",
  "key1": "65BzpYVxwpeqWi7KFfPTZ8HJwACEzMby8uLZDNV1FkQG9jriHqQsKuaGD6o6FomxBRaUvocKw49r48KGQACS9DSv",
  "key2": "8CnoMiiR2U5cBHRWvLhmQDddmGMpXUA4KgTFue9gxfpF2ZXo9j2v8yNX8voqoKmwguPKc4VMJ8RyE8yWGoLuxu7",
  "key3": "4ZdBgrydME5fthrdLguJ2RWGsFeGQjjSBwvSnVh7DtcHuwSKFx8iRQCHNgKdSmoGPuV45rttB9WtNJFFLZLd8XTM",
  "key4": "3VP58R7WwTN8mfZfEjaGCJo1QEUaykiMRM2kcr6kctGxWW7zLo3tfk4RHxGVYxmE6Z3N2LDv7562AEvEn9FPjAb5",
  "key5": "3GhnB2mnKdB2rwgLwSqByH1TMHrXwSZxMhrp1gSFTVF6KNNDBZTV8MXPmY7w6f2t7EvxRgZu4yS7ydgLffkrFSVp",
  "key6": "3NthQkAVaqH869UMnbTmEMmrAwDLKAjeLEQkQMPWLkCP1SjNrdzroZNCGPfLoAmfXmoo7BoNrJqPGZNnmSw3TVqt",
  "key7": "HsMEkn6aZ9pqbkyryY63ofx2JBcjikb6Fh5pUUwKZKkfFnh9G4oqhRwtN1WMpCgjJNgTzZDmCsNqR9FZGoW4CU5",
  "key8": "2Y5Y1cgRbjMaT8zj8b69T9Ftrq6vDsXaSR7cVhEGyJAsamdRaLKWsze7bkum8BZT8v5D8ynn7QuoGickafBjCec8",
  "key9": "4JAzzHu884ZTMysPHfK2n9NARoBGRDXjKMLvZPw9m6gSTsJUrPNLGUUGKZaCtPyWP9DsV2bx4HAL3KsSeP8VAKb7",
  "key10": "5NTeHb3zdkgzrbSh87xEy26o948C76E2q4ESetT68PB9AWkn3eFVRe3nYLBsyozv2PQzN6k1wPnv2Lcko1DzoXGg",
  "key11": "57SmvyZw9ehDxWq4DKpi4FysBpzXuToxTQ4AQTBZtsKtED3LDtBXrYjAtcYLWvrLov2tVne7gAmEqC5VxJrH1LSB",
  "key12": "2nxwK7atn2v2YFwhCQZHvd1oY9oe1qrG5jRQgWAjgNkPzugTUvB34mqE4Ta9gttTmWhiScGbubAEFmKEqHb4QfvF",
  "key13": "5jgLKMv6RJi9CntY5E1kQPdyKirTGP1WGKFqyfLgCpaXXrr6iEuFEiHj6Y8eG4x2s9QHnNEmeqHUzJ8ZsnHs8fUS",
  "key14": "4Xu9nCEjQeazxzYkaty4RCrRzYoaFPBNvqoxwfrHXre1h4GLVZmMKC6fAzGYDox1RNSHVykgHKKqwSXD26S6WJQa",
  "key15": "3mc9U2eysUjqbT4Ueb16cj9bbUtDsqt6CKmSd18gfnip41LZ8FmAqnhMKS5KQ2itR7bnHzBjpj7hyGpQc8bGD51z",
  "key16": "2y1cGdcNs9K4M6dBQtw6iNEaxA5KooLShKV5RtTb8YYaDmcjk1vLhN1BEjdCs5sY5keoFLAkdH4bGg8ETpmhMzmH",
  "key17": "35JcMDdWaaCfbgEnkg3JyNL6TD3JtgXnqPutY5SS1RWMZ14oY54akbHwKW3BcCgowYW92SqCh28uq7cu7pgvYo2u",
  "key18": "43ffGqG1ab76AeiuHqTDLQhdSvvwqknLUJQkQBoPbb2RkQcxAYDy2zvCPXs2pKVBnqveVyc6R6diLq6FZ8Qr5KFP",
  "key19": "4RRdhBY4mLcjotdLJaPYNHPSrz4ESXKDWE2dV37XMzYUUMK4Npjg1SkGwWpoaw2vmsaBtVs1Xqx5dcSbfopSnqUx",
  "key20": "36jj54omgzBVCfme6jbfJfP3sC32uPpJyEPzK5tMmVANynxYwHDCaAAAwzKhNcLbUTrLr6xXMDdwPYMv1r5nt5ib",
  "key21": "343bTQpfsgabU2BiAdP3sktnqsUJXaffpLSfcgBqLvgD9cfCHj6ym9a38HrWMCeYgsDcKkQw66grLwyJuzJtBmRu",
  "key22": "2mKjSBZxqkZBDdtV6whAYE95beUovVSsxGBhKLpKweU62w6wdRsd867msXjYwGnQRn5ese47fyKiruHagifpmTg3",
  "key23": "43461371RNqsPY52UJNsgCuwikQDsE8gjHqZiaXh8f7or1jNMVyz5hDsMZh6d1mCoLrQphL5Ad3tov3iXGDUB6QE",
  "key24": "62Ln1a57uvooPDfWRtNrPHQY4ehk1GhFNtDwLoQC6G69W11nLBKBXGmLCSjG8U8tSuD768qPVvLUHi8pVVa1bfWC",
  "key25": "2JmubgQvn4AKvZh5TZQ3oTMFMwoPgww7BCURHi3aFBqJLXeYcWT64hnRqLcs2HVvjzL7qz6XgKRcVygVET1vQrjz",
  "key26": "4CLnKkyc346uBv9qPxxJyssQJqTdKFsZNW2tF5nGiATRUotDvRJC9w5bSnXou1fiwRYosZJXfjAnF2iTwy84UKMd",
  "key27": "3ovbXx7RBj5YDPbcPfcCxtQS1N2nL7xCwAQET74uSoDwJPE5aWanjw52SEZ3GUxLLj5PScRGVF97NABho5hzvoYe",
  "key28": "3DSmSNLp1bj24pGMQhmPhhWjJTb9n8sXt2anW1VCLXjDhSTD7HNsHH1Wa7zaJ9LczngbE3UtB93qfDPPvNJuGmd1",
  "key29": "zfA9WY7H9ArvSyGDZAsnTHTouvEe1roT5GfhZkiD3sowNzmFg3bz5NhZ5UrArm3eJqvfUBLZYmksc5YNHgJ6wF5",
  "key30": "E2XKh57oPwCWvyNSduTunvbzHT5FPfJktyYWgabonN73D3ZPX2sh3REWZCBtmeabR63sZHXXVsMY4jz1JSUVDTa",
  "key31": "uQyauHdZAcX7GQWhH3QKKgDC8GdrkAgCETzaYUWGaN27SDe6L3oCB2kPtGwy7vPLri16VokJDuEbMGzdQbuavNr"
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
