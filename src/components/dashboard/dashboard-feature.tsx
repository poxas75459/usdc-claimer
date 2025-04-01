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
    "4HR5duV99bB7T6q7eJvFpDvfMdCqZL4HChqjDCnX1p8Hqsap3rLb7yvqBfcGejoGn4V5daiBDr16jQzXFx8duu4A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MXsBiG9YShVQUQhML9GBDwpQJ1Qi9VgsxNp8pZhmPZfSxN1YBsP3H2YWCtdZZY8XCDfHwWDuKTrwbGA7STYNmy1",
  "key1": "3zGo6QbPNiGVPyJ3A7QkQ3n7b76mttv9fLQc5mrHhMwKxeRksd2fUBPAbWXUQLgtdeGBwSnt8Bx9V4zJGJm3bxbz",
  "key2": "ThtpJg4bDr9Si14qG6km7EbPjWtSMbc5TsmaRSQMA5K1pcM59xH4ECPdpENF8Vir5PtMgimYkh7ronPXxGdunun",
  "key3": "4UrGdYTMhfu9idsE2y4ThTiBSfSKMRngrc48TP79vTtPaHRuvCRxwLHhXbjbNyngM9jtT83J22cjAVMUoCo7hqti",
  "key4": "54R9uxXRhrfVLTyYcHPdZ88mMdpZF5Kgvtqsm36BWheXSLU1nPNtNbPYMHmBgExkbxMMVJGB4kmFgXTejkdWTTqb",
  "key5": "5gxpxwAtStzzqQvwpHWkc2ugJEDzYwYHS5RdU5MKiMiMyBZg3ncjCCfaWQEsjX87tajkVLEEVQpnDzYfFi9wmBLu",
  "key6": "7EinrFGwEWL8j3f8P8cyLYCsNENmGcLeYQhNys1Gng9YbRWzPEVaTnVhnweB41ydeMvHECe8C6AxvuTSFc9QUW5",
  "key7": "2AgLCNqQ151WJKeAWfrxH5zXPkrBXr1W4GGEtU5NUcQg4pGXud48LRyrvp3tHDgASDstVetdG6zD5cPhhyaPYVRt",
  "key8": "q9AD67dSm7MsHgNPeXGtQYboWekXQe8sJqi4h9c6S6oH98Xx6YMCF8HtvZKoT7L2RYmfftD9gEudVjZ9xCc7VPG",
  "key9": "2paEhbKwi6mwWAtubSKSUvMyoWtszJPAiQj4E1g7aYwwFqK1ZKCf9X2UM9U7TT1DJsDrMcpHJzCTHos83KvCjnML",
  "key10": "5FHLNaibe7ywYcvqX3ywgDdEjZMwdxojsTmkAHKsTSsLeH7pecyDnBgAUbDBW4CSubwB7spsBFXh29qp8TJNj9La",
  "key11": "4d8gKMR62Q4WuPFiaurvpKzgjQren8v9LdqkGMYdbZCHSB5dvG7CDaicM45LiK9z51twPVErxS3VVn7U966kuGAt",
  "key12": "3MA72jAkKC2jaViEqfjGPqfBsMkw9pnMxNsZHDsyVtfWADDqMLtQJXpjP1NnbJoXYgat8xBpaQNrXjAdgdpNNRtB",
  "key13": "4wBjuGyRnZ1NVnNNEjGZdopmGfLVLLLPvrL24yeUTJgrtvUxsP5VC1B8VEksSLDm9EqCxas3WAETQasw1XxaJVEU",
  "key14": "toMYCqnbX8eCUCBrDvsE6Zxs1p9ow4RTqeHSFFCiRC7auqr5uB3xqdLF5iBzPQReVJ1rD3HxFuF54iAyTZgtwRd",
  "key15": "3kZC7sYSwQfKYfWUuAPXxLnaY7v6qyxWz8LAwE89HfT5WqdD5HnLZNH3NuBqwVLNmpXiV3qWs9oW9ovqLQwr4MTC",
  "key16": "5DAH7pB78cRAstw8PzuG2rHfaH9rfzyVPsDPnKuf3g1hnjaMBtQvhW8cfp1feXuKXmckU89E2ZZGGsmKs8pAbbxx",
  "key17": "XEJx8cXHa7oYx3kC8wYpNh63vvaitaGxV5faUNth3hutWsmLFdTL7xDHY2RrT9FD5VykpWFocUwaAQrFSj1DiRt",
  "key18": "385LwnNAP8iRMLxeP8dK9t7ut2Psy9dmQYH2SvZPasSo2AkDXu1d3AMXi1Jgha9PhgMfYCow7Kaw378EnQp6w9TR",
  "key19": "64Dd4SzkWzQgcFstq126hf61y67T1aYyVN2QpRMwBUjc1Tb1iR6dcDEAuUqLQvKVUHbzY6FuUszpULtsHoug4P2i",
  "key20": "5QP5YRtd8YrytWgwAywbqJvuMEnTHAyQDiHCbJ6krVNCEy7V17vHukKfzsvAADwiLcMX7rQhC2uDRUjiRFNF7trw",
  "key21": "4LHotdwxQFtAk8WuAFhcmDLgTsRh2ANtsd22E8ZRcXWQeX3gh34rsQLGjnmtG9diFUtEz88rEtHzjeSW6H5USiCo",
  "key22": "5siBqr5iSjGwpDBxGpyWUdvM6uXN92dJQFn9R2FBWf6HtQvFdrYpnM8K6jrBnjBB7qGM8AbJ4BSHdKumKcPfy1SU",
  "key23": "4EfDcPNvkNXhmpRJncaWhE2UzY1sVrN9PaSd26KeVfGSrpcgpQfdjMVNbnYuG4SkfbnQ86HAEvsRECv7rH4qEDLk",
  "key24": "5XKG8zZTn7G2MD2m3BrYPdD5QhUcr7cJnucCGE5yJp8YgSWLHzbPFMG6Z61ZTaunsy4JDeYZe8cC6dcFaAH81rEx",
  "key25": "jjTEEasF1Fqq1bmLof1wTUkZAzMMcpYpEPsdN9BtsmFJ313LYLaQq8orcS2VbDaB1FA72NLWiwy86ezs8npZCPj",
  "key26": "4VuKjGkWoBj1sakum1k5sytsxavQDtYr8eip4U3eeE9UZ6SzS4erWWpbrmZW9z2QP2GHprrad1xq3Snm9ZHjKyWV",
  "key27": "2bi5cCwfxpcaqyxU6pHGtvtw7KpYQVDJNDgWxo7sKhVe6Lznka6ZWvTiJp18dYQtPkZJDtuVcL5YTkpijJV391up",
  "key28": "t54XmB1kXLzcdmzjrkqpEWzme1XgyWVBaGt9FQJMnF1JsmFPUERdf12XmHs9hLTCuBXcyMQ7VcLDsd3AGSjVUb1",
  "key29": "2QyxaNdjbsbBtGgsxsbkYH5ukirfd5MpMaPazNUtd3ciXJK4TLgEopk3yN3q9Pc1Ue3qw6yD1jiE8Sj9G7XxvkKr",
  "key30": "2ZQNAREF2uHvqSDFdJfswX5K4xm9SCa3mHMw5cRmkCCU7PgcUK3u5iThRt6Zeh8fcQz4W5o17kEFbj4fRepuuXF2",
  "key31": "3fJhQA69F8Q8RdeuxcciwiXMciesm3rCotBxTCQVpF6DxsebwXMgXUMzbSkGRjqiZHEQ46BCz54t3CH4Xo8t95Y8",
  "key32": "2A756hSicdZJBTGHy4wjZUiQMZ8xFMYLxJnfQ9bucXHHv9J6kKVKkBmAQtraekHgPKyUa3sB2h3tBTiBoYABNfra",
  "key33": "4PsNuJca1U23aLpJNwoZKU9wTc3Ggm7KdV2xXDYuAyyWbjQWx1mHTtcuR6NVngjs5J1kE6Th7QLLGxfgmALEeM7D",
  "key34": "5j9YTvus5KvmmoR3eqsZP6bsXtjwED1BeNjW6iWQofsQ1tJ24u1poLLaEFeGTnqTMMaj6dGZYVCQaHXpYRvvZdQ8",
  "key35": "2waJcCJGeDWiWV4YHVxMg6ueApCE1S6uCxmz36YQ7n1yrbaPWEyPCxZdEWYuwfhwR44WZb3onmgE6hChBfiPWhJt",
  "key36": "GXX286DCGBv2Va9SqzNhbkXLXKTKQXubPyHShmASM9qAECi2f68JL9dPwouP1WWRCRdeD9GoqMK6G6YUWn6HpS1",
  "key37": "5LbQ5DQZj6QNsDfmvF23dQ1jHG7eHsSw7wVGz98fgaG7ybJhv99hB8qrBhDTy2pRsWp75rvnSAt3nvJbwXbAXzrj",
  "key38": "5aQCPBMMbNXpuY31rqCNKemYjS9vRR1CUQXkG3PfJHGX9bUiAsk3aStA3mharGu7oMsrPXTNZxQahtwRidfnc1nm",
  "key39": "oQMBpY42XPuq4ZvFEvmtoKTRGyRLviqdCZo22BDBSCd87PFNwHBVxHk3H9wu1HjZeTmjLFsA5x5qXVmjobP6r5r",
  "key40": "5Duo8HWeAGLTdUxbiyXPBRj2KmaZfv6Cobano1gN53iD6oaP9svrnCyoTx1MeYR6WaRE2MrK9QwMBCHoHNKoNAVm",
  "key41": "5m7nRpaHpm5cZ1TVSurNGjAm8LH9bA8x9k9gxCrkUAaq9G6M37bFqpWRhE4gLBiiBHWAwSoqyz6yeek3ode5cSZ2",
  "key42": "34x6x6yCMRtn2DKbX36ACbBqaKQZNk84M79aCWd7RWmhxHC3fcWgoxZ7jmFbu5fmE5m8zcL1F4TLAZTBDdfEQM9G",
  "key43": "2CNN6xeAfADR8i1cVxgZiZq4qV88jLMmfXARGUNSMWFrm5qDkhQb9EHSYTHk1yYk9ksVqFMpPNDSrgMYPnmVARg6",
  "key44": "2YrB73fWuMDFQwPtL6PZ9HCjpYV9QMACQT6Xv8yg85FeveUvEMhH57q9FjAUoNZ3CRUGv8ZHqBR5tTXVzuMSo4hg",
  "key45": "5K8uN6gYd5eRb7eaFb8qTDrEcNsfbrUmLAzVpLGsbuH2KZaFnKYhA9bjRNfywGYNLrHpsSBJx7yPkpzdCBEWAYnU"
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
