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
    "cBXzUJTXe1KpVHoNf1W1faR1gfqFEfTpzoRTLK84cS8229idvysoWHmaQE4rL3k4yar81C92VqipunFqEMKfwg6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sGvJ84PPQpnJj6mJs4z31KVamFbGSGoAadWhKTvY6uiPyd5PVfoxzaykYvAZEfZjkLFT8LBmMGSLcvnhi9wDsDw",
  "key1": "36orgNZqGMhGvh9PCE8wGaoWkkzEfaBr32qC3v9iiCH72NPHEsQgQAyTz3XZSiiRT3y2gHW3J2RqCx12A2SFHNX4",
  "key2": "2cuX6wRJNnMxQMXbyWCUGbGvWyycpWiQZxjsUSUf4ufUNp1WpJfZnjDBcqTb4r6pBWpBjNE1kV5MFfZNMshepNfz",
  "key3": "2AsoMusGJnVMh4ZcBjsoqG7YX3KEM8bUG2CVaW3PYWEV9UNeBwPgfCitogFaMDuVUV5hoDjxKUdQ9zknptxeahXX",
  "key4": "4b64vF3aHr84urSA1iFJW2u4NJviVv84NFyWgkECYdMN8fLTV3Ccp8cEFVBPGkKQRNM2ypksVV3xsqoQxwtSHCCd",
  "key5": "2tAGRM5tyn8Juq5uJSBPBEKwohq92n73FwMMj8ZiyJuU3Eeenp7cptMCrhPxTnAdjQoaNNL4VHeb5NQYXnqfRcnu",
  "key6": "3qtQmmpo1HNSHiKnBmrjKem9xLK94gW1yWQV47SKwyhPSLXmAvyTKYkvkzyaXijyEmcWXnUMYbcS9vFE3zwLigAL",
  "key7": "64CKDfjKiFsefPQRAfynedk8ttQnYTivXRi7zj218nBiKfF5exCKmUjAEjJxFbTf4o3HS4FGEqFjyNFTD14cPMXL",
  "key8": "ea22xCEh8DsHEbNZUuTJ2QNT5ARcuFb86mXAL7geq45ybPrFhg8tku8eWvBmfSS4aFMyfZXpdGYcJNSGpvVfL5C",
  "key9": "4p62exyCBSkmqZUciY7jrK34iaNEBFPR7smSivNXWBH9LiRmortw3z5EHjrqUXTZ1TU7npHYvoQUDsQ7geZYKQss",
  "key10": "2dTPU1wbrSQFCFHWN2jnyRkH87v6wm4PSVXh7cTNUvgDpYAZxKJBVHajeDEv4T7a5qzu8gSWco2aTsxmgcQRcZW2",
  "key11": "3fZEjLH6Kr4qwpJNFT2M2iYoPurcii9PWLkYYjuR5aKEKFo81NiWzHGp5n9wH5FbGzyz9uF51hzpf1sBMLyarnU",
  "key12": "3xyXYtkHTz4iMwgzdPF44QukBb3yGKz5fZhydADoddCHrfukCKy4L9zzoqy39fPzXwAaab6B5pzxUA2gGd2JdJbQ",
  "key13": "5Lc1QAHdxjnsQAV5EYYyLmovcPRubkb5TmoPfFAMVis4Ry1g33FkFu7H5m8ofbxF9Zprr8ACg51qPSKhLyAfvnP1",
  "key14": "4csTQyag7vwMJXPAhFJtrDJ9VZoUep8ShVAsumbN8vqnMTBKgSCDd5Ym1EKUi75x1xzvsYofY74H9rQQhKPJNi3A",
  "key15": "vBowoov5cXaDCs7SJoxWrZ6ZHkeekMYqx7x5JT8uLUf12R7TB7CJ7cQL2dRuGU4bdLUHjMKzKK1k5TNfXhRkTzv",
  "key16": "3rMZhMudWXfjasLz5M3Wtybj1edRVk6iF2gKy7JdQwRxkjTPfjBmmdy2k3hLTeNk3ZekKWkebDjpcGNf92G2ovbf",
  "key17": "rW7ZEzPsYEatozQ4XSLSn12vxJe1DLKcxpBgZQczTNCEbFbAg6N4ShYnbwQr3RArXp8j9TXLAHMPqvYZncKhzu5",
  "key18": "4cdG2ZSDvQhtTu7XfMSNTGeQyVgzdTqbHvNdc3VtDqnMnSxUzg7gMxWAyxXFAjsfhEzt73WLM1nRSLoYgdJqynSK",
  "key19": "86Q5HCmdECuzdjchqeeFtuMdtbq53nScWuiY6FGLGvgau9QAdcD7Vg626dNXm4EBD7pgJzMUefETzhBYyWrSzFP",
  "key20": "2mCqChY5KzaLinWgxfnL9Ka43dStp19PwnV1iuYACnc5c9dDFNzmakbUU2Q5sM811c1EqX1HcoJsoLaaYAYuXYP5",
  "key21": "545kHiG5uJsmnrULAABMuvwjyXbVcToEGG4tg8PWmUCSV4fhWv3eZpFM5fnuwsNWNgd33W3B61WEziRVxmNQ7E3V",
  "key22": "FHNr9yrMnUrndgpWfg6zQH5PFDKy6FBS9EVaGX6uVRcURjfdqqyfCiAK7QK61k5hSu48Fd7rhuyNe31g1ctdZaX",
  "key23": "5Ns4YpsYXPnkQzii1oWbj3tyL9eGphuH1eww4rCs4Jdifcc8xWiv2KR63YgVTduYTY4Vd6FJCHfnetJR8FirEXVH",
  "key24": "49GvhQz7sM8UewmP265S4zVmuuAq5DZ7jau1z8FYXnZZxW19VTceYdHuJA93XPbG9QLgm9w6WXBXuasiBnmcWEsq",
  "key25": "5PHrkDgeswygzC8s7cg1AKWQBnyEUUxhMHohtXgmWqnSio25qo5DMXVbuzXc1xfJSD4bQJMfRFuaV1dwe5ZHMhdN",
  "key26": "5tf9BmxSnMZerq3vKKHwranfaJVzy5cjdxfqVJbgsg5FWpxptU5vVWctcSGYemd1jniXijF58r77FfuTQo8Tb4tu",
  "key27": "Q9RMjq8kZ6bg56nEMEZEji1PF4KohyTikdHSHSJbYpmL4ChKuqaDDFajtwjCbDX2PQKmZfEJt8xFmHiYbSVfjTb",
  "key28": "46Pf7Ak93kMbcZ34PCFSrQrKdQB1LCzdbLgwUZ5S5iJ1RypoLBWy35opyTvkRdAPBpuBseUyPt8hCPh4JLrZKHRV",
  "key29": "49EzVGeZD4uHwip5zS7xxuXs6Vw8JCJcmc3XTTcKqoKJq27MCj3473SnPRhuwdYPuYAf7CYNqAuBCfE5MMSSzJi3",
  "key30": "Pp4vs1qtqHxo7WEEKKMwRtivRidMtVbxKmTep9ZujJsJzqQLFupHwtpYjDjq2xm6TRhnt5dKyYUXSybG57N8tCm",
  "key31": "3f3ZpLNfoJmuLM8xgkhgdMgP3FgFx6iZ8USa2AuDXpSgeuXGPQLetY7KYqwA9EVWCnjLSwA7f8xVmMhobNoTwR6K",
  "key32": "5JcYqCZyaiynGkWKQeUrA23MjsY6UiGePUPABCkh6Ufm15zufgv1Aet52odtLJqFL61CL3o4jdBsd3ejDSGriHU7",
  "key33": "4LoVUUoZcvXmmH637hzqMiwhHvtgtNiQsYS8febkAC4Ei5TUx9zAU5AS1MM4vH5TNPQzZx5oVLb2sDbZbauDR89v"
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
