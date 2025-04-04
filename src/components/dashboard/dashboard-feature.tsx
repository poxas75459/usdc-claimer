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
    "2R5mfwxXXUAJt3iACwVNRd51cDbh5wMtbZ5VAPAFUF4asQRk2ZUrtJgkQnxyXAynWTypgNoPFMZvm6CfXYvvFtcF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kQhPBVUFDdvhALxmg46QrmL9dgEDcad2e2Mxr2axWtFwQmWQMKZ57nStA1vgqFE5pBawgFG9mSFaQVA7gRn6pkj",
  "key1": "5YfkxxtC7rvewegz9ptR3ucstnVLzGBGTHomTwMi54nGJkCNawMqfXREYKLBeNXrvU6XpfjLacD3gfb1tP49R3eS",
  "key2": "4fMo2zCz2Q2QhuAbtn7rFG3wUiAH3WbnJqgYca7E8ETb621YpGws4emmvV8M4zdwwBdU2HGvpEWZct1w3W1xxr32",
  "key3": "4MBSxVDUsk3QJNes4ucenrrynRVeeowN9784FWUUw1qbLrq7ac9RaczKfdATd6uWmgcT5yWibTPGLzQro5Q5xw9k",
  "key4": "4bUtL9HGY6W4iu4ZWX4JXtECnk6TvT8iA7Hj1zQLV8zFVVi553UkBfUEJZ7kGjx7XAQdFYBMSUnpeQCdNSy29tez",
  "key5": "61HLeB7etKsm1ymkeBvWVmmi2NxTPBjk2DfgBt4u9BBETFkgLdjY1wEuaFko6rSWcHMrzSoHAERcZ76csUNX9ASE",
  "key6": "2j9rMAGfEH2Ro114aTRHBPpAMi96qvbYyw36CAponK1jRjFa1kX7WN3okGQvH42WWg9YnesgpfhdUvQsqNxnPAXh",
  "key7": "4v5tXYjymgW8zEgUJBu9i6ipWKzSfUTuLh1hA3eQ5g8nhazTU7u4GZ1Tjb3JNW1Z4cphWqsdLRufNy2a4Th8hj9",
  "key8": "DJz97iBVQPvXb2fYLhhjrKWUwNkPMNbRSmrVV5KHK1gsvvfexPFdxssYUGMQ7GXPzxFgymgZhRt3irHDtuFs4em",
  "key9": "5wnB53YCG3Dzmz5Zi6MrHNrsv3T5rWnHvQaUHzZSR6rtnQ2m2GtQHonhEeFTzahHq1SoHHFmkLFRa5Bzz4p8zEkF",
  "key10": "4JBcyFxjjwSeD4JStZyPq1LP5hLpGjGqgS9W2NkERhhHn9gUo8DPuiyYLwXemwgA5wQ2Ga5hNzYKSkCU8BAVMcUQ",
  "key11": "4P7UEiuvAzhHaZwnQJFfMYDRefvr51BTTYvYMyXGF26TTAe7MxqdSbuxenKEVEDic4CMjmAKZpr49i4iixYaGisi",
  "key12": "4CfK3wA4b7g68HrzYYuQE6HEr3PVX1s3BgrC9U8E1HduzB8CbY9rcWn4gwscD2zjw9EJg6ZCmUx1A4R1BHfbziYf",
  "key13": "5g34C3iBeMK78UhiMZbv4KNqzJXeyEhrS72coAkKX2aRGeiir8LuzD5RZRqPD8DaXkNiEDHsrSBCgjkJ7b8qzAje",
  "key14": "5vKAbV1bfhcX7ZQdk9cBnYcvJWzbJnPDdDnTKomSzr599CGHAECmkbzJJcSFQmwhubgnCgq21yeywvUQF7NSSCvb",
  "key15": "4mfXhvKtB6Xpur7oB5yzfUZ4kwapz9AWFGB8nta2NyaKPS3Vfuchr2UKuHUcCt1mLs92iuubVx7UpTw3sY7enh9n",
  "key16": "2rZmrL1ixB3DJQP6YBALHByfxufE4svMLgKCfxVrGCdBDifFVBdacB7K7FeGdqzR4CGrV3tBGVYs2zjsWHRfDwo",
  "key17": "4mXwm99Qua5jEGSbZ8DxqWWwksZdJxeYmwsHohw1fMDPQu6g5HbTFp4LEYuNzdxNrAwxiY38gUdxPZk7mGiHUK2h",
  "key18": "49B1xN2AUeGaGRjZQ2R6abDNWArRBGhcsgk3G7DwNr7q6CjoQt1KMSxAJ6CsEM1Tp4mwTRgYQqjbDu6RX6GsXycb",
  "key19": "5URmZoH2MAGr98MxQxFCVYRSsETc4Wi8Cj8zXs24GtHmMPDN3Z4N1D3JqKThKc29D9JtD3Loo6JAMxJ14BEbCBFw",
  "key20": "5LS92vbgT34jJgtsi18tNoVki6nZaS8qwDyTj4DQZLScJuDjz34eEssFHwfiABiAzCtRtcXCgQ4wsbAsAaCaotA4",
  "key21": "3ucDPeBErGwkHxQQ2t93QLpGUpmCDnUQUg6977G9aziZid29xtRH4R6Hgk9aFAHzQXJLeXvoL3Qf3SwFBQdG3FzD",
  "key22": "2TF7U31n2TQqM7AW882XEeDSUMupXa73gWHYuQ4atmpbpnyXLLgAt3P6XmFTRQi3WMNJUnQTGmtjp6Y3x5opcvej",
  "key23": "2qg9dGR3ZXcZRqMjEyGNeYGFDMqMwXGU5SuNbYJcbCLH3UUcKe2G4grS8ZXyMHQ4bKWRmRMKJHvSzgzFLZYxMRQb",
  "key24": "55bQR1UBRUxnaHcWptehDRfuzeWV9iok5eBQGBMea25xiN1wYXg4csRVYypWZr6KdFoTHMHohprr7DVRVjDTwMKq",
  "key25": "4Qvtv4e6i13M37j7RK4gd4UohG99AVp1ifFeX26YMV5jNAFwVWVWuh8N2peQZCqB4kSSZKinezLoJdBVsQzsfZBc",
  "key26": "46Mm9H1H76FiB28PgMyubyLoNVH62AEinJBjHz7BTSyvMeKfc91yAbp7PTD85V5DTJxhVtquPTjFV8Drn5RevDuH",
  "key27": "rzoewWnbSwSd3YvUsrjUsiKKgBg4cKN8nrvLF9JAExVtYVKruY3FPrjzdkgr3Pp15gSeQPBeznGfzkNRyqi3MUp",
  "key28": "58VfcXTwRqkwgEQpDQDvSj7baets2tccyMsyEn2vUvTH4BncrDBxyVFSvQgsLJ4SkcnaLcRPXjLW76YxGvt5Jirb",
  "key29": "63tLfYnpE92TPCtf4jx4iFDqMTy2YzPeZspHRCENVvRiPLJDaXZ6YFtFHxsLLBuXD5DCQff6f4aqLgwSbFZ5P3gi"
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
