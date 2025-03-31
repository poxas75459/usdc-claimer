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
    "66rXrbLsFEr3qRLaxpYvzpemSuD3n43ooCg8rHMruLx1wWxgS78FYnwYGkhwB95c6FrVtorgev55R195ZJUP8fBu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ctojPj5tB5fmRSY4fNgipKyypdRTbmcrRvM8ag1bdnjgXmF9G7BEG5BVC9dKNTc4pyCbYfA24evRkeL1J1w9U1i",
  "key1": "5pbb27vTEW7ZEi99TasUbr14oZo5sNyiLQTHeixzkTNqtmambHH1M38hfQKQEw7WYCSfHRSjqFQCAqWpVMih1TGN",
  "key2": "4irSMihJvKq1F3TS7EdaZ5n9eXF49bEmMearPkgDeuUSK35Ngz8UbNZyeQXHWvVURfJ1K2DSGGVpi3gHccb3hwbA",
  "key3": "5J3coJy6CBXtcpsku8hMTTuazWqafC4HXaW2ssLqnd274jLZHFLyj9qQLSUtfGen5B6UC4pkXGyS76A7To5jr6Kp",
  "key4": "3nL7CCf2eeYG6Sg4Bpcmgn9tmWroh5Uo39dCN3gU2yo9TdyWcBeeT2NqnvLu7YAz5fhHGGTH51vQwEvzgKtbwvP9",
  "key5": "53jtdyxLijGydFwBkBAkQkfAYEEtsb46HUdzLicYmSZynoqrrfbupCSD4mgATqdkuhc6UqpgrmHVvA4YcdDRpwVU",
  "key6": "5NE2W48U7itmtsE9D3eaiP7H87xrjD9Z8Nqu2xeynBCUdC95pejDEHzSDjCZhBWYVegCxrWbw7RCWhc8fvv8xv31",
  "key7": "4YwyjgKbPk1QruVJ9QbPjiccvLGciCN2v9jHpPKmbq4uwnG8yYhFVPNgNV5nX5mk8UG7HSkbxd7BkKXYcH8b6sEF",
  "key8": "3Z7FauhgbpVteFQuErXbfChUsrHxM9q7u3ptnkf5aUnh2KELdHkXFPk3dxyFVRMUB5k3rQZoxCwRsMZ4x6oQmN1x",
  "key9": "5qX8m9f8GgG4DmZueFSXYuoCo47behvVRh1khn4LYG4sG5eBKkX2dPQpLxPYayFGJjSDxhzwJAeuBA38ZM5DtvWb",
  "key10": "4UCa2nBBW7G5gDcSimhK1ZyuQ5dYHgoKM8nW9ATuQCiCyoE7RzFXMJpwMeeRUyr8u7ucy8duLzM2Ke5ueuhpvMJH",
  "key11": "4M39R1gS7dWnvXBykn2svSXENSL1AZTwkZTEfKjXxQAYwuchGeKL6hpYf6wSLqmvMkab5S9UE8sjRcuVigtugMx4",
  "key12": "4tm4suDHqgQrXdkU1HN9cQLdtu7QMf6W3BzJcRxzisHEM9sqoXZKfY3yTa7DXW5taEQitmib8i6wAnabBPJtCZTL",
  "key13": "3yaREYeABAES1jKZFhsxJ26oP1hY3bjtaXuL9dRZJrTDWXS65T1kBaMinSq1T8eqiFD9krRDV7mUmffb8oeuEbni",
  "key14": "34PEjJbiJbTvkGPTzAihXTETKuYrSeHhGvvM6cuf4AEaS5CxQgyDe1auF4dEdshZ4Hzu4GLWPrkogUSyL14KhP4H",
  "key15": "3LmKXM5Q6bsHyW6c44zD8nXURVA8z2noyLKj5Zj1d8REmJc1fJfAKfp5FrVUwkdxkeaj6gk4sczbcfV5vtp22yqh",
  "key16": "24Wdxc3KUa6yHeHKF7riv8aertng9AL63AVohsyNcEFh9Q5W99j82a5wbZo5dMoFb923LGdP4tt8zvDjt8LPVLAq",
  "key17": "3E6KmZowGA9wY1qPuZocRnrgzQe4XqPMeNxJaSXDS69pEdLzaxs6F6k4BQcwggJZcF1SqjrSXN1N1GoZhzbeKLJt",
  "key18": "3pVo24ssFDsEvVifGqNaKHhPqfUnXjAxqzQF8HHdhLTBWeoxzXgac9DYB7JvuXvy86YG6DAM5x4aXL9XbRJHY4xq",
  "key19": "67PJFfKJkWbcJmVgFBSL5BYUKsJyGZbazYwit5b8c54fqAraP7E6VwGL6wGvdSq7ufxTtzb84wkcry25o5cc6MAi",
  "key20": "4QEgiczEhMVZV1j9Rf8LJq3id57G6HyWk6XLTKCvGQRyS7Zefn4SVwH7Nwipr5tdzzRrY6oY7oLD8FTzQEmP6iYy",
  "key21": "njEgRfCGVPujq672Q7KuMZdXn8qtoTZ3CpqDfs3bDgYs3BLANVUDr7gRYayUwaV4V9orVg5Fjhu6BEVRQrZ1ga1",
  "key22": "2sPJ8upwhs9P8TuWQuAf2UhC1GKNA65SnQd8RGzzUL4jwSV74iv5u2WYP7Vb7tunhTuMrCDQRxPsTVkpAcYS9X2T",
  "key23": "4G9fcCNFbSFBPds4sjsuoQcXPGAYkZd3EAPTMGoE9zpyxy211u1wAgt4qGHDkS895T54pDXDhPgBsUdfHcYdFBZp",
  "key24": "5nxTxDoeQMqAgA99ekXYTHLtfcrRJ3z3oBAwT38ao3C2mB2LAuTn65zFie1BhaonLXac1vv8uPmFE4vQjDSjeP98",
  "key25": "2nsvFf6Cm7B7hJzjUcVaD3jKbFgewwMsM6CNdd64p95qvcQfC6gB8pVQ6ugNyPSfwoLSX9bRuep3JvGZDbq6W2WN",
  "key26": "3G1h43n2m83XeU3zakYaq3KhtrdZJJ4uQuam3WhEdAxLZrvH4kT8RHsjNhsoZbk5EDBXZH64Csco4hU2PtoyB1ew",
  "key27": "2i7wSCkhvFUoqAP4sTr1vKAzW4LhvjnRDk8LwpBrbPtxESFi9zCzcHfsqAFeSfVirZ2rFE29TvBJFGaXEFKfppZK",
  "key28": "63U4j2tjNQ9BaPuupR7X6WyBDwAjGYGBPRL4624LkhCNx8kzb2qpfo31EeHW3SKz3dx6Nc9yjYVLekJoGKk4wEo5"
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
