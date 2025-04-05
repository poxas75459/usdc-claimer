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
    "3z9CXm7ShMqVDw4cSc4ULSEZmpQridZ83yYoQ9sr2jWEQZdWVHYAdQmd9RixY1huZyv6gLKbWfcMkLojWDu97jxw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XJvXkx1LPfLv8MFu54L6sx96oJe1s6M9TyfgrE6AcQ57XyCyyu8UJeintn1orVeJtPQJsoppiJF4vbY5J2ULzBd",
  "key1": "Bnq4T7yJgDBZyJN9nm2aQRgBCGL4ViNg25SGxt4BmkSt5JcL7t6mymM5BK3yAyvKEfzMStUwpnVCRfT393EcMVo",
  "key2": "2pHzCNwSKZcWzAsJx8Si1QKm9ZU9jN46zVHaAET7cSkuJGeM5KE7FarSVfqwA5vzVKAgjREeA2jMcL68SwuTqCCP",
  "key3": "4bAzhzDRYeGHCXAmQjGqyNHSzXVAmoe5wC1g3N1YHNqj4X3f9S1hCEVnLDxdK5nSauTMxjM2YeFqqiS9n3FgZLNU",
  "key4": "5S6KC2oGrowQsuvzapfMUNsxkTixwzGjXte8CoD18LWUVbSBB1UipTMG8zwxJ94eKTPfAxN2BvmBpHPLbd4c4sqA",
  "key5": "4Wc1Er7xTQfavGjGq11wtfcueG2r2Sq9gPSndZdXnzr6fM4Wyfjc73SBMtnE3RzjFWw59v3jnFG7bgQ3o7kiysvk",
  "key6": "25FSEhV8SqwuhGQvnMdN8CKxwVtuYfViQPhsrM2qh56CDuLXMYw396WmFngzy8EHps2WDR1GnST4nusueBygRGZi",
  "key7": "56gAbzcuPGt285gH8M8H3wbqPqL1zf1x4vyKi7DEwZ9bfSDGpAE2kCqAJ7QrbYwjvPuPSYgjSvCTLorZeHYGMX2u",
  "key8": "THBpgGU9ZE36jVV4dYthYUusJJAuWKpFwH1LKKPfVC9V5yJboKGHvQa5MPJmCCBdqQo9gXvLeStibaXZoiWgPTK",
  "key9": "5MoDV9FpYesnHzfhsdnqv4RPPTyLhYgsZ759TMwhEZJZByvhx6Cw4DNyAFPJPrbxLHAQSRaGmmU8a6YGXpG7Vx83",
  "key10": "5ntTv2HQnTjvg7tboySepYuh5MKsrdoAjfXRKaoYrsiHW1PPCjzXTfZMpePQiLp9UPuccXxwwnuZZjtdtAJ9sS4P",
  "key11": "4gtdrBdjwmW5PEPebh2k2DQWTvNxBpcGQCVQzEnwqPXNYH1FUoPCm2f5GEmV6CajuybFijm4tYeYDas13p1etC3C",
  "key12": "2e9XwmyQvwMWbi1aoYDxSAj1h9AhTHkKBeL5L2NmmBhTKQggTB2GBQJJ8Ly7Byvnh8pUa2P5QHknvuCKA3pumPSW",
  "key13": "4h456vfQttaV61buNXpQhN3Sei1uK2VNiyQDpSXXicDoJZ2piFEpr4sE8WGsLEw8S1VmypZqFSZnTRA9WQLzpzf9",
  "key14": "QTdsqkSmA7e8GU9K56vWFBVhDX3CKhzcHeyCrCk4C7kZteadJNUTRP1xiudxZDFcFSFwz8kZLvYFdwivzaBMaW3",
  "key15": "2oqSbpCDmYt5R8r8dEjECsqQHB9u935L3DpNXEKzCVmMHq9mojRUUuxyXn6HgCGzeVz5bk4jFdctFoTcnTAPxf1a",
  "key16": "4CJFXkoJZ2HirehVCuD53Lkkj2D24hs3oFNQeXGNyWDPFS6t5sBqwUfV4fHSoMbNsX2AKoQrZgdhLJ7ddWZmSoCg",
  "key17": "2T92DzXiR8Cz8bmLMY6XhcDdpYcHS9tCyPixdNdxqFATkTHVTceKrbsbnvfNFDhHkZNryeBzYTLnWvvVibATYNe9",
  "key18": "5hB7Y9SLMxKNftsUC4DB1PRi4k38k98pQKsevPLyMMJtdYeCZjTnUVG7MLGJH7dYgtrZekw7bCbnmRWEmFGhkzYk",
  "key19": "47wVJ1KEuVuANuFaH69f98Z153FbaYoAut3dpvn8CRTsQgsKiQkrNvU9gxpCbNggZVWtN1pzsH8UVVtH999nfC5K",
  "key20": "4yE3MG4v7uqDaePYJoXcTpiJS9RrVhdxjph7NkMbDi5JsvbX5GLcHFh3mTaMcdXbAsxCgyoYJzZsA9HMahN8xcR9",
  "key21": "h7XWeDnTiAKTdYMdxXX8h4rheTM76evRnrc9r6B6ttnSSktsNMzkowV8RdqudHa7yLyQ5F9vYXR5AABwEpoUV6T",
  "key22": "5NxhgbVgaebwsPozEss9fNbknC36jwjmzp6emH3rsZ4dFv5dvBQDM7z2QKhZvsMT5Ex2gUQm9x8SFsyxvGiB2XAV",
  "key23": "3ikfLNUUtSf69WDqxfhLwXRUUG6KesdsbfWVnBukktzHnJPLczXh1quH216t4J5S4NNpowo2M8iZwmAx4uQ7xcqr",
  "key24": "DTrw8qWtpzTeesL9iXxC7zE2poLNZDKFqDuGSfn1sXYpMw2od3EWAaGPrg26pq7dDVVQ1pr3pn5HUwkmfJvnGfh",
  "key25": "42hyepZtqRzQVhU5sKfNR4w3vDDk3SXdN68GwH9u7tVRsXoeDBT1zVsUAJKr6vkcGRwqfL2eL1MqZwEGE9UkTkp7",
  "key26": "2m9AiRMpL2hAq34BtJWq4uNSKuNbeo944jGe7JLwLXXmisPHXvXgAfSt2hxi96ukWiAbBeQ2jEGWPwSMLn5hQRwS",
  "key27": "2mCP8RiKJAsS4bZwGNd9fZ64sysb1QAQGdAzq5GPbWxpkykJJ1xyU7Y5CsEq8gdvAxr6tJceALyyJcYYGnSrDDtJ",
  "key28": "3VrbS74rG229zWDB4HHCpi2o361QPZAYRwZ6pgUPu9Uzohzz4XyNQBpRPe11ewnXpE14mw8kabm9pLmMea8VRvKn",
  "key29": "4qcq2aopK8gWgNFHxVkD5nFAwprSKyoHWJxGv46EaNN17oAWoa5xxDGVQonv8QJhcTATGPyrzT1Va95VypdtoFtS",
  "key30": "3fJK6YUYaSr75BuX8xP72uDGVziGDJM1zBqQRYnK5JhxyJZL2iuaPNfromhjiHaqkbmYs3eH2nDx5x9sPDy7CnVH",
  "key31": "2stDJfn5yjUSJeL1wUxhxhvXoJB2A4ok1EjrzbHssFTKYVvoeoFKypa3msGf8fxDuC8oxGhK26GtMtggmk5wA7Zi",
  "key32": "41rJ8sB5SsV7sKwhGPfKeeXRdn4tYdKT3gXkaFKjqAuCEQoH33R9DyKd3NZQYompj5jTrxXifk8eWkReyRjZburz",
  "key33": "2b1m4jH8yKD7WsBKQCVZvsQeLJfYcnPHwjZ7X3aWbApjK6Da7F4c6yB7e3wviGPEeHXjqw8A5NfJnUKKdtW1arYD",
  "key34": "4fc4cdxWgCgoVi4e8UJCL9g4QgvJBQqfr9PhM1aJhwCtro1aVVUthGbDpk26tDGSc4LFhGNeKkSDXzZWxPEebj4m",
  "key35": "41oC4ey4GfUwBJScdEj5EWrp9o4CXDqnVPm1rs2Pzoe5UTqdPZTJ2DURJVdtyraB6iqjkscMSe66EEQdDhSTU6aE"
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
