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
    "WyetT1CaDzKxnjB6LYgu2wp44kwBM1xZrv6y7rtUG3nvuWWXKUjtKPCbx3TPSneo8F2pfJtjSuhGteffDs6qMX1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ac2xaCMeGyitotX7EGTcvXxpARLdCWpaQMTdYs2AK3k2ybdVm5VLpXptGMLYg6aM9dJS2MnFBBP6YbhwNNUSZgx",
  "key1": "47YpjtS989BFbjLtghQPDfXtkqntT72ShHHdbsL7d58374zUFbzsZi9AESg6qWTbeq8YSHnHyqG65yygtWZngg1u",
  "key2": "3bLVv8N33wuYCzcxAUSXWCRSzq2eC4Ucep99DrsVZfcPj3AZfb5Xq6EnT4JFFjW4cDvdRwjNYdkboJUbBYZJ2L7G",
  "key3": "2LwfGzSea78gUuTTpRjRWCeJBnZa2xNZnUVLJ89jHG5bwHdpCymSu6qASx12QnuJDcKizUCEhGWRBUc9UoGQopMT",
  "key4": "2sK9izYesvUqCNB9fUg5sz893Z6zZPSb6tv8ZLZvPAzVxbT8PpWhGD4vkkabYVhJ8Yto9xDGHguW8F9aDXKpDQeF",
  "key5": "4qC7rotgYWAjN27khnu58p1J7bXr91sLwkyFbXndtWtpdxb3Uet5ZDSgTuGDaJMS43ejoFqsP6spC8t1fTw8vaeu",
  "key6": "5QqDe38KGcEaPfvbL3wsrnBsW6MrFUVqR6jHyxRfNRisuApRxDaJmefqGWv59rEfxqdcLnZTH9L3dUF2wQiAKfSp",
  "key7": "5tDiL84iprKVmjLrD3aANCJWuR9cQvR7o1rpgATbKAqQ5VhPb3VXBCFS72zyvvvJ79TQ5P1c1P9rkfm2R9XEfet9",
  "key8": "51uxpmtZbj2mXiXjtYyt233VwcSF2NiWE1oPFvnHs13gTgjWPsj7PszYQhpzsjooTSnbgug9Dc7nWTBXTq9FT6Q7",
  "key9": "5rdK8XUT59WL9Frcmj9VXsuRtoRutq4g1z4xfhgVxFFzx4JvW1RSUcFHBpoHsnbD9YHQCp8ykn1m1S1Su69D6jx",
  "key10": "4aHho32qMpRLGf3SjBegUU1CQXWbUxLbCornbdjg4a1S1RfFzkf7tYDpurDpNWbnwA4UNdqNTt242YsesjhLWy2w",
  "key11": "42oCmgvi9tYYGBrts736M4TEVvxZ87vnSex3kUWq8FoeZut3HzPjb3N4jBHm6uqxkcTEqFCGHqqd7xrJFRJqGu5o",
  "key12": "z4RgZp2TVrS8jhQCQzVTqTavH2jb35YXLeJwqXATSH14ZkA6WLVcxMrUwdoShvwF1342EEkXwK2JbZxecMAGuzY",
  "key13": "5minTwmErWH2gLAaN8aQgm9qB5137LCuKakZy16QvpNCjsCaz8vjnsDz44Rg9dU1jQmTvsvRFEk6GUo7saQ5CYjB",
  "key14": "2YDxhHTARBdqYQXGUvueyDhee79huEJvs7tSMDgwi24ibiQwFLXvQ4FFoWrSSoouQff24Zjd4c2ekeQvNPrCsFZX",
  "key15": "f9UXWe2KaCA8UZnRjfZUrzhp1MjsBzNmireMWveMYrrhKxmnr1kRJuEM7gCppukD5GD1w5ZgxcJfK6fTmpW5jej",
  "key16": "3bvTG88hpdZ7PqRdt3YNsgLXfApfSa3EhS3PvAdymsTVDfUfmVcCWDK8D64idNbDGALptLsW5E8msK7eqKmd6DnE",
  "key17": "4SPdJUN2mzvT8BS4jqHpiqE2gM5aoPVFwFz1TZG1A4GrhLHRRPqHE6NRgp5BrCw9XHph5ULRasU1rCC5bmuHouXd",
  "key18": "3G3KuYp3sZnMSJhu4Nhy9j6iBf1zxNfYUP2fjR8BFS3FbLRdqcZKpy5d7MDaVhRidVTD6J4uxNTY2rXPrQgRNUSw",
  "key19": "5TDVx8zQDxd3dDcb8D7iCwDj5JLUqR2tFbunnmChU8SNYmmGum26GWuP3h9saNCJXKsnn6QdWeLWdzBMGRi2kp1D",
  "key20": "4ghfbGnC2TSKzWpASko5Ck7pQJpieTQjGKr49Si44gGStM4guwNabmmQmXuPotq3pgjUmYWJJA5j9rpujapv2Geg",
  "key21": "8EWAtbp8EzR5aJRWKjAp2cfbzqxVS62VEphQWdaSKBEx7wPfCj3PQzvNgzzmvoN6nrGF1FUKZXnMKbYtAfgtNio",
  "key22": "2CMGzwgAG6xZAcNimspxk69dZyfrFHVbTG8f84BhqozFHhqtKKfMSH7iiWTRrTqbKYG3Au3qu9HtMv7v5xwm8MWU",
  "key23": "459QsvhB757vxVLZbRLekdN7dvDfVncAk4AgxdywEWSYsP7hngTdR5okyjLMRREnvbvUtFGk69hnPV1opiQNu89C",
  "key24": "3Z4g9cjw1hLUEByG3hJ2CRDLgfAWs3J7Quxyo7Lf93uyATYaLxWbqsqqau4hnJWLU4HMr6MkWPWcREQ6uuNMcnjH",
  "key25": "5SiebMKxFFo78pRF33xCaP5zEZVMz5NUxSyk6dz7JGGZGJ5mFbu9tpQ2oqjuSxCyFaL3CBvkDnDc6feLVEL9iQgR",
  "key26": "32xJYERAURGzz1RRntTr732kDnUuEtbck6wJoLYafyPnVYxw2B1RfiUswZydKxA5aiXVWUioEroR1buE4NNZLqVu",
  "key27": "3yK96rEg38X983A7GUKQwrKNZu4LZZa3jFwJaDFccHzvw8k8UbFuH7zqD1JKDA16L141rFSRfuk5v5EdUWahtX2M",
  "key28": "5cdfz7ZbdYh8Di7sEUdMoGdSh6UCwptGCefZuUmVo5qnz5fLoVfAsv1u9CTpJw5UxsBzTZhmvYsMFzYDrSBstQR3",
  "key29": "56fX2EdUMq9puV8s4P3Nuh2UXeBKj3PvURRWJBd16ub9zBkiMk2qcSbUcQwATKYfNZG9sT6JUv1YK6zeNdMmNkAs",
  "key30": "2eQ5ShVW6Bg28pPFiQ7VbZ2QdyUQBbzhBiDzBdEYMSN5873JVcxGo43d38FEBzBEvZhL9cj2raHkMszWqLDomLnN"
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
