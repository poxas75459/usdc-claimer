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
    "5xdNaW5ic3NNLPkH5TVaffD6gRYtBEeASozvMuZFp9GZR4FVbk9JMf79tkTE3S24KgnnNoyUEw1Nm4GKu4qh1jXB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cdxrVA37BCcid2JZkkN2Ey1PKCXY7j5k7x3UTTqoGGHwbhev8FjdherHP23hQMktx8habTKH2QRyxL1nBrBAbn",
  "key1": "5xgyPTGBTzGnC8yzrGZjE2pzqZTCmtLJLxD6nTh1PEzFWufx5CVhQvMGn5ZC4MtDbQ1vWSWaS8aJJ62pXMH1b1R1",
  "key2": "5aaWdQyhvX3ATkaeMUc7vJiYEDWneNdhUZVfnjos7pEvommqh6noRrpiiNFGiMqttYqF5qs74GQt1Wynu8UP8c3h",
  "key3": "3AHRx1czbPc9UqBuFGNcUFXmyZx1K3QNGWQ8GSo8bMs6k2j7hsDw8rqwXaKcLZFS5tFesCjbCy7dMfsNRzSYGKcv",
  "key4": "3qsCD5QgJ5FKBcTeRQKyLbLac8BSudvTJjPqoK9d5E4UXmqpxJKmnmQ7u52hsLzQVRcrefJgEkPx9S4DBhY4ynj6",
  "key5": "4qaParm1QPpR2m39uGwY4Qav35sSznEjF3i9qGPs3PTY6PtXZGcpzAEmSu1tVKXjnmYpEMCnz8Hwj5c4bXh1gBfz",
  "key6": "54pzQBK3MZEasaefzmU4iHf7jPchfWQpZuqmAnaFQq5nZAiZ46X58FEX6yvsEnU8x44JbxgRkgUJmsUynyFqcKiG",
  "key7": "naw1shbJ1XRg5aDtRPGggBBQaiJuJSBGJNAqKS1UUoHWtDNNuE8ufKDzUxaY8UgNLHBttYSAf2cAnZZPVKDJjmb",
  "key8": "3Fzvn9yFETeCXpGpRy5jXWaVuJ2ijm7dtMj7yvK6o21DWN4YxfbZWkCrzEEPtrC4FrDTMQAzwqw9xxPsR1ew1AnR",
  "key9": "2NRCncNtA8Lc7SdFyXCcWzVNDpmRcHwjWp9sCX8sTm5po7FaoRf3jdaagaSLiRxx1gBRnV3kZDFjP2veZZAFYwC5",
  "key10": "65AFZ8ogbHga2HfDuKsxYGhCE8JnQrPCdJNtxnUmakXYBHYsBbqeX2nHVuJigpYbvrmsqkYzxGEG4m4odp5NcKVa",
  "key11": "58uzvJKxKUr2Q5xvaspop8TjgAPbivNNMsSTMTDC7jX618TKSm7FhHvo3nUTjCJJy3XVM3UfRHA57jamB79sR8ai",
  "key12": "2He1PS4kmuhvGj28fKmnsT2S1BhwpDyELHN85jKmtH9M2Br3yavDMRWPhvqLmDm7dxQk9Jidvuhv33BvAw5VdtES",
  "key13": "3RwoFDZm8VX2by21wah2Y3Qx462CrtkN4khUCYBvyzXK15vKHfQ2uj3ZgQiFNyMXPgGSTqEaijFtd71a1X2Dzx5t",
  "key14": "5U3vTDpgT1mhSg1Q9ub9cQAPcxZ45BFRWFaEp7VJF8wJ1Sy5K96Ao79vYhrZVV9hrBAA5S9Kn6tVEjPBWvUyGLp3",
  "key15": "m4S4Cjg3j8sakt3jn9MqsZJDQCtoqEgFdjBRGXbYwx2oogQd1ECzyA5N4Jqy1W5oBdiKQY38vwh8FhRetiTcnYs",
  "key16": "xkAxY7nAuu94qeAaa7rzU5o3uAr5Mk1nev9zch3Y3QjaVnPoCpRutTCk8522Reh23DngKJB2g2ZuYNYthiYiH7D",
  "key17": "A8EQPtTkCbZhtFpw7WBX9YwdkT6v57aFRfCL72n7hoabx2RJoq1asjUQz51CUbLYg2UrBsxmYmTk6KNzHaMYfW7",
  "key18": "55DHxbuTudi7QnXmf3JpFLW4MnKvPQ2StstAxzxtSKoKv43DMQcBfV7F9imVDXwTZmzdrbeY4Eh1ikHE9yxVuYi3",
  "key19": "52fh6dtA3TukBDwNs5YLFcs4K1Dy3xJc6WMCQny9rttnwJGVm7bBdPZUquqw5vTupoHBQDaaGsGKdYFMWb8wQXt8",
  "key20": "55RwMHV86rSeNt4fDUV7G8hUwbaXZwonwXwxfeGAGh9nJG2YhZVLoEE9wyPzxfmXm3v8JRU7Rf8jdQFGMVXE4iQ9",
  "key21": "3TamNPNiQj4zKhPRoAdtEt7uM8aJ1ydgQA5vYdUfYsNofAwV7TufyfMssoxmb7JhXosEG8maZfraSvhFmgzX9YuJ",
  "key22": "57cWiEnmv8PyAvk1NmiybRgQfbqQbqFrBobkPRopDhEmaL39LoL88ujE9xLpVkjzk7Sufeh1fpXbuhPQKxPXiNLu",
  "key23": "2MLjFtpHt4KiuPmwWyvBWwar1paMcMrbwb4tPpxxyBfQq3aZB5vRcdHATMuuSNUxDMTnuQk1ftpQkT5YrjH9V5qZ",
  "key24": "46YF3GKLSMj8zHn6RkuSneyUNsZiWTTEXqqRs6HxQ9EGaRaQ2MHkZ9CHLipAPndgP1PQhTBnUAV7ucZcWAzahdCh",
  "key25": "659TF1NejLNQYbMje4cAhFFDREW6Rp2WXY3n1exmodUjvUDfy1phUipDtGesD4qCqM8hwciyvnoU5fGcycRgV5NU",
  "key26": "33vpFboCmQTtq58pnwgL3qn3wTYHEMH26skRWaf2prsgyFq2qtkMkNBLNGzd1pqAUqF2CFmXBNgPqmLtejueyMVw",
  "key27": "3Lg64oCRDk9mjB15hDN4EBMH5MiD1mUnEFA2MHirhqjQqYhmEe14EjqgkaPjKZgGNymgAEGYM5i9Sw4b4k6L3PVc"
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
