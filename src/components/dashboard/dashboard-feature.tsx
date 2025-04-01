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
    "3obAVCy2fqW4sUioLEc2qd1BmPtKUj9sdRd7Cp4Ws8nWrGmFrkgtofYCx1eyhAEpyb3Z8MudBxkmpaX9piwaynAn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37HdJQVVG7uqy2oCkaXuhcbUnstCJGqnJjCjVXtFiSvdTBquqjja8JRm8zd25SH9QSJu1RxpzX33zmNWTHMasFLN",
  "key1": "AtNWGamQUsav2bvySryZaAypzJBF6rpCj6BUEn4U95sfzg6XhBzMDEmWU8m3qTR6iGaZcS7aqhV3PTRVDy7brdZ",
  "key2": "3nnF6KkY2X1LqNhtuXbSYrbYZir1GSTqWmGQKQ4YsD1Tuus6QR9PMYmZMT3HThUDzJSdkEDog1nSb6uHAEHhxwbh",
  "key3": "3V5pqjG2igGkzbyPiwJeqp6UudskPy59fLrTrxmSTShbdf2sJNXSLEBi7LYRXye9ctENbsfvYMaq2Dd8k6wz6HNK",
  "key4": "38kUWE6cdBCnwrecDVVasEfLJgdEFBkRq9SoSigzf6BQps1zuddKjj2TcnvDfRbviftpWfbcUaGqcxjfvr33S44U",
  "key5": "ByJEALgLcYwEMsV9Tbeztdagf7oQ5F1nvG47G7LrYNFUgtV3yMCgibBHe4KtyBnYyC6nrLaC3dmUSXa2vUPPepQ",
  "key6": "2wBz8uC3jEgj5gEnEiij1wMGVTHhjzffgKpqou9PkXNwQd8VfYPAD2VjaciJVFWN6rCXqJpywJkiMGQMZjUUzJxE",
  "key7": "5rHxvg3sve3Rmw1V1oMd2UL7YBy66BhcZJFonRttwMJzneWPUUKmz2p8YsbqY5wJGEo7RyWrJWS4H3MdXhvAM1Mg",
  "key8": "5a13UHHAZgQMFJah5gNEmF8N3Q4xgAbFsQvry9kjCN9HGWhMDygK7RTSoQ4zy2Xyb39yGyazMDWtJPftDUsWzKNp",
  "key9": "4XYh8JGGRW4k2RoQbGonV9x2fxRBPEmuY6uifCVczEQodAUiUeYH9agtcwjGxSNcE475kbhK6RzWnYypky811gNe",
  "key10": "2CbKcDVG642ZGTqXMAwoHrB67LgY6fwkkKd3qhKtnQB9UVahJj8rzq4pzabEfCpH5BiUXHe9obe4TQ6HRfpcwetC",
  "key11": "5cM34ioqUwZqkhsMqEg7JkdZutSHUnQ2t3YUdKohNhpxHhNxKYzhywCgRPfy48r2MyeCgyhFLn5o51CkDmmaBiVA",
  "key12": "4mSeStr4sLRPdfSfQSrf6jbijEjsrbveEEvScsbNQsrKqAqg6EC9jeKAfyfaGt78wh1eNQLxu7EseMTVqN9UvLQb",
  "key13": "5ZbcNLYeje27NniezPsEjg8q9wtN12ZVGEv2ebQZpU9gbdqZBRAqaM9M7Ppwp7BCz6GbK7fCTKgR8qfgiZpDo3fC",
  "key14": "3K8ryREfU92VwoEDBcGPkdF78JiDV3mdD9bFgn4N5AzQhBt4Xr4c3D8HiQ3Gsx5G5bkdhhwWSRR4YQd5yQ8NttVb",
  "key15": "2b3SkQS5M9JssMwDodVAjc3F92BcaubrNsEnrw3LfY47YjRs53gaomiFx6JBGaVsVomN19HisiU1LYi15X7QzXDm",
  "key16": "2DchT3WCcaQMEtiC6iVGVyGGP97XCURcEnYRYU8i5G5QCJi763cQV6oDSvSV9ceyokeod8ujQhERCPFq1pzjVhWd",
  "key17": "3joR9Az4R7ZPzAw3i3WM67MygesRVhaRf39GbsV9oG5UJGAw6PQ5Epb9KMdUecPC94u3CLgmjUFjxfP7cDss278A",
  "key18": "4EDQD78TfMoX56H15H1vHFHzKHDQPGgZHC2BsnHzJ9a4kfjgs8wq2PYfcfwKxyzQxpt5tvfkwBoLn1RUmLiXR7fe",
  "key19": "3PoadAfCE5eU5ku781HbUgcizJvwPFjMEcaTruDzGW9gxo8n5bebvxDuCqcCdu2yJUJvDDRUZYNi9NsaeJYYrJne",
  "key20": "4yjz5ySUDHGTMquYCQZ9Ae747PHKvvGZSUs7nKN4MM9q1x8sqTqZfCKJsDag8wLdVbZhFoj179zpsZmoci27nNdS",
  "key21": "Nyf9sRB1CxHqvvBymFjrmK8XobkuvafHrTXAdXWc6KD3diyPwQu6dSmyPgVaqzGrM7u5pQVv9HMCg27Tj8wBkzJ",
  "key22": "3C5LFYQkH8HXs1YwpmbNVEzHC8g6iUdB29fsAVwSU4oaRHG6BbVNSq6McXUED3pLoo9VrDD8LdgShAWUotCdUDw9",
  "key23": "5Q12B6mswVZwAUPruUKpkXotcMzx3E3izvExNNxpa4cXUSQXr2UVFeg7SSn5jTSiXvT2xgdiitGjfN2Tv9DYamU6",
  "key24": "5Aj18fNjGtZWxbEt11KP4gkyEz3TEsvPybwi6jNjV1Sjwhgm1UHMKUeFwYuaZNdPhTqBHCsCiohJhwEraZDzCnar",
  "key25": "3Qm5P7jkTrPqsUtcTFtQTJfbWwDTp7RjDyoBBkRd124YKkSSZYyyrf6tyrJ1jzKChws9zq3FmXXG2mKBctR1wyVp",
  "key26": "2CC2AW3dA359x1iSKGpxcWnhpdxDj32GqZo2FymX21EnwQaFufA5oSbztKhevHvoMiYKkDUJuZ8u72YZd9XSFziY",
  "key27": "2Y79GFnK57XVXNDs8VfNG8xbbHd3TuH9ZT4Zjnp71vRDPaAoRH78ygkb8KExXbZKtBHeUAF3ZVr7b7a2xEWXy1NZ",
  "key28": "3waSpJBXr2aTf6Tm2p1HNRYhfuioeyy3ZWZahrX9zDfhrJwoZ6sb3GRRgFe4qQN6dVvYjo38Uxr5wGaqZ989FKdg",
  "key29": "2Fi2zx67kRrTGrpWBTxf7FCLLKNBfTT1kzXS92qss9ZKwkZDChNJXWZ3VPsEBqWMWMd3QKEdSS2SQyx2u3pgdhue",
  "key30": "2z3bLvZZ66R5sWKD2sykYBzgM4U3joeVFhsYmuAVj8LyT4eEg4n1sppL9Q5246ns1jciErDnAkNfmJA4Tx7q8tpf"
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
