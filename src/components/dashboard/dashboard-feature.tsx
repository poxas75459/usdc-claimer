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
    "2Y4S7VKngt2QauuDEWfgSg6ha9xLD547pfefnAxc38spi3RTugCcC1m66LCCtPpR6BPDonbheNggJaEaetBxJW6D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JAgeXikMy8dYhJebNnQZuedzw1oKNPv564t7mYgjcwKJ7rY2tfdYD93jrRCvVyDxxejNXY5Ds8s5EDmSB9xbk7Q",
  "key1": "3NiNtrodgPKp4XRDes2LEJuS3hjirDV79tNwmAu9MyGdvRmKxtb62r8Cc3kLuNGUagfw13zAAPagkxR8Jw3BUca5",
  "key2": "4k1S7cUkKvkoQRdyV7pib1dTLuMsrj4qQjFdAXwFsHR7rT5fis3P3F3MTZatss2rDw4sE5ioedy1mQVKVHQLXHZr",
  "key3": "4jfnEW4YktLipNzYFcJLhGyfmVNkDTi3WA7Qm3Eg7btRY72qUdTxqNrfnr6EKvyG4PTWWNCTSPf1aSKRdC1o4UXW",
  "key4": "5488E3JFZtTphjZBn7kuHE3C7EyFo1FUeqb37NfSeJG6WR3xRcWgbkXPihztkcoqnGZwvi9cy5m7cUvwrhos9Xwh",
  "key5": "5EhFi5zGqRhrAxgmAAtNMwJHocStRnjKTE7QvP3VENrU6t1rnneSZF87ye256v4CH9WFGpzZNhT85DhyFsVbKFWA",
  "key6": "43WRXXqpPkoaLga3hoQRdCwAU6TKkSbi8GPAzScBp1csKdAXhUZnABNer6ymyp7aCN1VfrDgSxeom5kJ7AT1kKSW",
  "key7": "24HLT3TsXA7edU6MJZPXn7qJVLN5pLv7FVurwhY7uLvECY746tQeT2C5CUcHLRttm6VK8ksDznwU3qG7JPAfKFMw",
  "key8": "47ttH7imaunQiP2SfQLD2BMxTKFdX9NEccJNvTrAq9uzyV25FE8RHbS7hfFphAzh3vw2ohyxPQ53jWtpbBHA9jKM",
  "key9": "3VCLbr6sWs29xr7F671dpv2AFkej52NxLPF4CygZEguMdvZqBXbP9HwwbtKcLwk5qZ2CjXanEUmtUzwJSAbSW73t",
  "key10": "5nppsZyaE93y4T7jHZWaDoqgdrd89ANwX6wNeP61trpPYpaYjYDPvFTPT8nuAAtPVLrR6x8iGkArvHC7nNuGM62N",
  "key11": "5GF8XAdp6HVa9VTfLCeGTiHVTnjkyToXzxW4C1u117h7G3PNR7H1U9HDXm3UEzzbsKwjoBQSxeJavcnsotq9RFp6",
  "key12": "5SnbrBmsovKVDVwXA6AcxL55JH4sh877gRtLyByJwtEDXNsWtGVxerTMBbich8YjqYVAy8KhU6PiEgnTzJZq9pEd",
  "key13": "5AsCrHYWBZxityKb1VRxM5ur3GE183raDXgJpwB4nATRxb5AWct8m8bCgWAyoT9d3bAcEfeAyF6GU8NiPFMoXBnZ",
  "key14": "3ejoSxgNwNNZ52mUHnNEQqTA3zVcDHqKvB3dzVFd4ufQyCXYCqf7NR1B9MsswLZdrCsyefCZEWesBqn1ErvdwqNR",
  "key15": "2iqDAx1tzrRSaxSLdkRcGa4i4F7FH8T7ENYcPzBeceek5NwNk5c6dKQ2zqyq7QJfkr7jo6U4Aba6eU5raLeQum35",
  "key16": "3mmFSJZCyxWk8ibPXbFjisWGrienpvo4E8Ja1jDpnZUozBKCXUMDtMUabxSu4hkhgmDck7QoD2x467qDzXFfLyxJ",
  "key17": "4Hhrm1qrcMoWskQxG4cvGzD3cnGCQPNXouEjJkEKDmW86dCH7P7qMbXWGhQKjdwwB8XpS1PfzwW1G8p9KghtYPMa",
  "key18": "ZHxpwn1zcjqERPLbDWDj7FpN1Zwn3MUt78tfgNPctBNvwsoejEJAJ7YKchjSTwXXc8twGwmroTmwMVmn5QwyGL9",
  "key19": "46h3muaNYwjGs3DUqewdQzqW5bbR1X3q925J5G649VzKvMV7wjjK4BZd22SqbSJC8JAZNcyanLZwYjwzpxRZCtHh",
  "key20": "28xAKpo5kpdynyf927xb9mVMuJLZXshFXbsLS3rVQYo23mzB4MynWjNQ6R4f6o4JwphR2Sb6DbcGqLvjQgW6MUWa",
  "key21": "5nky2TmMd9ybxqdZPNaDBid5XyGmgDXi5ci59x3noKb2dtJDQySqkGf9GBW2EgAjxeGxGyJ11ATxVZJkiEXTjc6q",
  "key22": "2bii87kCw2CVh6UiwnA4nXUquLkQe7nXx9r4DH3bikauwyxJrVdC5Qr2EZUPTKrguXAhTckFs1cCyCt4MXLfjwgu",
  "key23": "5PoeLRGt1hbzd5xsfeKyJZCDsiJic7Xh8oNc5j3qpgmrafKQLy2Dum8cnFWJL6vQVFcKZfmBkA4JbNZVt1dHBhWS",
  "key24": "3NZXK9DyDLZwpF8wE8a9xZTH2YskaucXe1U7s5RiSJSaUdN5hwM9HKGDwsUrvdQd5LdEcksqa54K6wU2WkzpZRD",
  "key25": "2L7KDZvgegjmiA8w4pDMjxfw7f2aGih6MERZNQDmsfG4HVNB2eyJCzwUgAc2sUmmmB5r4sFsCn4k4ki3br4RBBvs",
  "key26": "3VEq6PPEPw8kawc7cE4yJkaMsYhmZnz91tzKhHDkEVheAgWS3T6T4svKovwLxx9sAyQzBVXANXYK3o4QDs1acpR8",
  "key27": "3a5eeYhZzLdqCKrwMxfQDUndYaZhaXT85LriXtXs1kBK5EDQCJseg96ZkETfoKEYj8SMNFcdTce4qimxz2ouwQ9Q"
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
