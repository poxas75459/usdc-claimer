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
    "5DuLMaR1vMS7U4Mxhm7xKs2hCr8crqEQoUaAMUd7JEVmNBSxrWsEohr6LYu6Sp2kU23xoi2UhYCD454XET7LTPGH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ug6zJUu33HAPxfoXFWAq7ogQQnBsvzvtFkadwzKXKEbtXuJ9gQ19mA2cqPqev8nx5V5KpgEDxRfPvyV1fbhRNFk",
  "key1": "646eq5HoMViQNpyDXBoVKZEv73oiTCAneNNJCcUtfnBFfg5V5FCXRXkLPMgupg2PKrKPHeQVcpETmd6g2LoRTgNL",
  "key2": "26JEo3aPpNxfMJnr9revmGZtRdWzr1KriZfnxnCW3J8HF7m92pVAgHwsLXi7F8bVpPgXt4v9sEuKnPf8GMzor43o",
  "key3": "wos5WjT4F8dN5wQq45PquSCMCSx6k6THfk9acaFc2Ei3vuCUcKmqJZV67hZXTz88mQ97udH5tUzdMPqi3ki9x4h",
  "key4": "5y8qMeqN3QeEe13sXUtdPwkYkx34uuEjJLiBayHZ8ZTm1BkkkspgWyWf5ZP8eSoV2wDHcCT9p7VeyiLYb88tntyi",
  "key5": "467CbEjGH6opWxdHfXuERGiDAN6A77qWG1W5dZPGwF7CB5AKSM4av3KkGrxPL4Rhvq3WiFJy6PYSq882eDHL19k6",
  "key6": "2ALtCRpK8WArArhhPqzbMtwmYETd8EjBbyQBSaU8yNE5ZL2eBxLTY7wbPV8598JJ8f4qKzupQ25weaV4BHL7oFzC",
  "key7": "4W8rRKDiJAQHLTrAmx9M1keMPbm68GyqAmXU8a5tU7FPqQsGJHDr85xxMaAz7rQwzuKrSF8ZiqiczRVy5UrwcTUC",
  "key8": "31nQ1LTZTjcKVwkz1pBMnueA7BppCcHEaUwND6nzgLTpqAUL81f1326CaWidW7DJN9YAArbSYbAyPpDP32YMp5mQ",
  "key9": "5yrfQdti2C4Me4FypHZqrUFuq3Ge1MrtgKAF2izVmihbuVrc1oxsm66GHJC88ANkh5Qdyq4dcZJffP5m6xTL3MfJ",
  "key10": "geUULVHwdUjMbJrVKLs23zQ9yQaiNp5LVruFG2rWnhBEDUBiDGyk19S9jPcRS3E3T74cVWWcem72UMUE2KvJce6",
  "key11": "2MD3TU2en8hAnWUGLwCW7pc2vtqLWZr3n2BaLmSWSPb3DnZ9BXkX1DrYLdF7Hrp5cjbtU47GG9XJYpVnFXkHoWFX",
  "key12": "3q6naT2nNYNdfuDQyCwZNp1Tgngs46AB33wEmv9tK2AuC8VTwXnaog88gAqGGxdnwHo5bmMg65DV4W6JgGJEdmwR",
  "key13": "5irvzc77YRjg6jZXv7fraGHB2L8iFMRP5GtvpFZrp2mi3jKN4XvUrvuysMbCK1wF3whJtWz8zNhg98EBXQUJPfXj",
  "key14": "4adBUXGqfkbo4gWq2DSmD1bogzLr5J6cSSc2K9U1e8HwxJrbnSBhkeGe3oAcX2mR9JtFJw3sceRBPezcuP5iX5bG",
  "key15": "4uoD3PM92S8Rt5kBvGnGvEZwjQSeK4PQfEiaTpc7UBHGDvtrNcxXj7SvBTErSjr3TiYpXUqzf4u76A9n878fS5tZ",
  "key16": "5dNPV78teuwrhea2oHnFxWeZn6HKhi9wHnP9jU4fbagHu8SLshEa56PhCmTAKuyFCjPRS7jabZDFYowjT9QUqW6R",
  "key17": "5FG93bSWvcEtC13rTvMfMm9zLDHY66A8EyM1Kr6wJwsM5ZCcJUYmdm7RtG5bqB8XhXBYBncKc46jtfPfvSbnQNok",
  "key18": "46CrQmbTAxQV5AB7Q8XEQ33gbbWHTy4WDZBhqWVAcbzQrqXyhRuL6eTJS6jEF3Mng9ZNgVjwF6wyYKBaAyUYCh26",
  "key19": "TUmPbJNvLwzsxDDSECSeZkSKFxE4gffJvAFBPAqqmBmUaLk1jtSP35MwnyXNYwBBYZZyF6GF4suRrhNCkEDEu99",
  "key20": "4gFYrUWdwMrQ3VLT1JbMrXujjsQJPr7YWR9h8izwfTQ4s3DT48K3mX3nW8XXEvxkz1sFS6MADmmt5hBqWykHwZgA",
  "key21": "5iALAC7aWkGwMNHoVPy6P5J3Q8pwrvpuPF2fcu9d9rd1DaSKsZf8vfYWR3EVrCAzy3QqCtChqFjTj9zUue7eXUFZ",
  "key22": "4Z3T6PK5oWDHJztAH7J1tpDJsapEnuv6cahkWP9fxhfRQ2pGCT9bfPw4bRfk79WrgwSWqr1dg2cq9Ro19LBECGsu",
  "key23": "15CZBbWNPToFtGGy9BKYn8d9iogURji2Gjd77dxDTomZtpMpmpkKrWSxQWoeKoTC69uEavJrzXxFhDyHnnenow3",
  "key24": "3YUaQwTFBFwDvECHTNK6n3EjhULVs2JU6CGTX3gPmWDgupYrGRQfQWG5rX7Q2QNC7gtoAkGF7vwwnnQJrV1dkKCa",
  "key25": "4WckCAxVEpRhE5Ycx1YFyS6zf1v5dyn1UYt1NDbnq75aifwEiXeSn27SeLxUbii6ULWte9SxetZes1bgakfMZ86w"
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
