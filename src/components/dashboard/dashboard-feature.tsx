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
    "2xFkv39YtfJ2oUPMyvkxj14E8fKR7VfXS7TvyskmXFfRqkELvpou1qdwg1u8hJLryRCYVwVDeJKUaLMrHd3xqX8Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o7FBR4smYwVCW7842t1FVbX5WvsGCkUj8uDN6LFG8881vHRSzSCh1j7dX2E6N5xj3j5K52TqqdxYFn9NCc5jCoh",
  "key1": "27AyftLSZTcmEy9TCFUzCVrzMseYqPG25nRW8KyqkPvtgWsjJHNwMGFpF1dLY6WTRg57h4YHeNnMAdjxu2wwZkEz",
  "key2": "5jQnTGSetKUEHnkmjMUu5zEgpsTsidTZf3RsfpJqD2u8ADjkGNdsMcRpQbzq3DJiBtjn375beswoczbbtk5Mmobo",
  "key3": "KZX3qoFYJir3HR9hJYskwaHewMdEm8zqqco7UWWTpukM2xh7hMBjdpsYfVd9ygkx7g2vDgqj9Sfmr2XcT8uR5jD",
  "key4": "38rivLJT5oBoMqajucKNdsfycJMzZUyoYDTG6znYvdTKr44EA7ULonSsWgfcDJjmWns9VMSUiQgQTswXSrFMV8Aa",
  "key5": "42cpgj16TteUfexvsw3zLibgak6LASfm84QGLyPWj8vrqjPEL3cqTqa74aiTzewjJjjiyxCkggysQAJyzZggStnr",
  "key6": "4B128DHEhuXyVUzZavbszNm636zeotq9kVjQvSLEPH8SHPaKk3t825cSHDZpxoQRb51cmCenHuvPb85bm5dckEE7",
  "key7": "W15wm9MmQU2s4HP89QDnidTgRTZBgFc8TyG8syYwrYEjbhZQJwsmbU1yWH11LXpSzaFgQF88eNkR8FUDZa8bVFu",
  "key8": "22Wj8X8KmNDogF9DCc7z7A7b5Y7Y2RZKFeBu26tksRhnD6isNNEQcSVTrkWDVGFdZceeSdgB6d2fqY8Q9EkoJfwH",
  "key9": "12Ry8LLcNmXWknZZrvycfQyWDgyjkMXhXPjMcraiP5RztwD2edqr16Co7fSNvPA1jHaVHt6YpyVpLJRVi8CPFzV",
  "key10": "iGXkh75ci7i7r7MLpPSMEj2RqECqku3gbiAVJrYLjGKypb8P1nd6LoX4W6gA2C2t68kWBJ6368y1FTQaNPgwnV4",
  "key11": "4AGD5xJTqZ3nbWSzU2oZhq7sctk3csfm3iDALrHnsKg92knmYGYJdr5fjkaFKZbqB6ptWxX1oxmdJbdP5hPwjviy",
  "key12": "2s4ufoA2SqKT2XZUrxvjuEphnoBkjoYpfw2Cr4ofy3UdiMEuK4PTxCkve1eDxrtgUKz2JXCSRFnB42Lmv6m1pX6H",
  "key13": "5K3qVqVWkdGk1CjK6rXmb9NbVuFatPWTpfphsWaq51GhebzenvadwqjgeKu4zzaMcNfarc7RpLi6J9DPKszC4NSV",
  "key14": "ch5KgmTh3gWwbNizZ61QtsturxHKKHUSTo4G7dUgQuDvowU6ZgDY22eJjaj8pGckzEdUgDQem1RTEfdc87vu4Ba",
  "key15": "3BsGKdzV3Ls2VA9jFU4gKcTNhoixKT1dsDpdM9fk84HkPZaHNLhbBxtgeviKFuvtoUT8amtVTAsmXcTxyP8KDm53",
  "key16": "He2yQTej4EmScHqK5xuYdGwCDLY43QeVCyUye9sbkene9qSWzXmmM6HzRqdDvnqdN8vPTC1ShWdFD1V4Khh4zua",
  "key17": "66sL85yeQpzdiB9ZwBNZyzMSyPwpCLfznbd2yhvmbKaRMF3KLafBL38GB9qgaipb4rtEKCqog5cuEiK4wapGUesz",
  "key18": "4ymQRZgBu8VY1s4bGfHqbV79VBpuMp87iss6NJUWTfgmcP4G5G9LC3RuG6Y5m2bB9bwmi3wT39MB88LhHJWEB5S3",
  "key19": "3oCW8fSPL9oq2E38rwcFRspBuhw5mkVychzrAtpPN8vxPEniSyQgRcea7oZJgSZujPp4FkQ5gebEP3mpgTXVZYCr",
  "key20": "3w6btKnGWbwT4T3fDBajRVTpP1AcX1CPRWTkyAz3WrXrAU8zKPFbK7hppqdGnb7SfUjukxzr7rSAKfSUmhVyCeGA",
  "key21": "5ZJhcTW6iu5LCzN3xMGpo2UELhpfgnmqwEpPQyDqaxvACPq2UtheSpGQvxctYDRxPCTX2jst1SoS4j9SLMXxGMJu",
  "key22": "3Zbf4VM48suvDkjA3XSfnUUJWJmEco2rugLhA3wSnoB5uV3Dm9YyXQsFooyrSyb2FyJjg2TQHJtmB2wqPUE7k5MU",
  "key23": "4yjSArZGtgWoduMEmR7Kj9WKGz1CEQ789B78pSegeUNbUqGeDKpFXBwcwkXuBvr38ToQhsqTDjaBi3FWCo2mevvw",
  "key24": "21QVckiirCsLuHmM5SAgcBTQgL8J4otZ9GNHq3DYamEH5fWNwjoUTp6CnsgTQG29Ljeq9iKGbUtjdfdwwc6pnCfR",
  "key25": "2Zw31K8erED4DkSRditQ2XsMsqA24ysjQno4sZn3CeXQ49VTavPzi5hfuwkZNMygSmzqC15Eztd9VqAp5PQeMrbi",
  "key26": "pqDjgbsZrb84nKKRMHQM7MPFcWYHogZ6GxnZBTBggejU21RKMe1FrpBPVxqcTcuYTMiCwrtx2bn2tHTWHmwQR1U",
  "key27": "R9gCQV1mRddsn5XxM6K9zJ2J4xsbxH1HnR5HihoYK9A8typ15wTjRev68BWUmE8yaRVFavB1enZgtcNnXRepS8j",
  "key28": "Pz8ocU7hUDTEg4n8QtxvU9pYkVWJVGKdjUi2KEKFCYkKP1c5APNCRnezmktSQFxN8EP36CMgErN71CpfrjrevJr",
  "key29": "4Tmy2JtwP9cgJPeHu6bscJ3Ght5jPEAK1tu95sjCvhiifRZuPGyAwxapp64UXEZzoBMVfXRaiALFvqVe8oTHmG4v",
  "key30": "32ZSznozVRRvUHuZzq1HeZmsy6jwxX9PHJANXxXqkr4k6tNyowikB43264mWS8x97dVr1HvHs4RKDZCLBShbFGs1",
  "key31": "3JRNUd7iHMtZbjDASDrJotQRMmTUdhcMEoPMiusx2uEqSDHY3rp6E5kPyGN2h1WHBPjc36iZ5igz9rQRdi6Sot8g"
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
