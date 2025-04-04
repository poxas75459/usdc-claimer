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
    "5EgrrZyLeQ8gUMxu3A5UavSvjNFMyqX8tit3JaSjTo7MVPGVk29F7rwcL2LVzUYobPQmqrDM7CNzkGLquswSWpDk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Es5mAy1qwBFuSGE2SwmKAuBm2tQnvUxdD7jC3CM3MQZMNnNSofKifDyf3EotXPciH8cE7mJYAbe86nuY75aYAqv",
  "key1": "5GNgQCdqwzsi5zQPs6Jkry5YfNVvvsMiFGA1Lw4CE2WJhSLQRwyej4ixXMySuL7iSQ4LVS3EGuUEsR8crC1UrNZ9",
  "key2": "5EaYsoopRJmC6kCigeoBYrvdwY5JjQSqpFrsBThSoeVDFxEJZSc3Wucg5henBFVsp6LhzQMk8SAhKNfcn1wm68c",
  "key3": "3N4iaXy6Lc7ek4SMvh5yMLd9RBkkW1ytL6KD5xchW4Ggc5kjcEvMNDxg6XRhP3wsnA5gerbzZcFJ8M75XR3YBDaK",
  "key4": "4YCihtJb2o1uKZBfPcJEA1jT9L35zVhhMtk1nhqHXroCHmQn22PQJuVmhwWK2GfdwjDvoHyqMqCbAJcHjkjBnCPR",
  "key5": "34etdGTRc8YzV3ySkM2arj7xaihKzwdr5xsL5f5c3v6V1i6JECxrMSmYVBrghRAdoNj4Yz5aWGtewiFSAKrjgLSk",
  "key6": "56hr2pv28zcwnUHFJhpLs5RHmmee3knfRr8WthveVrHs1hJM2mvP25Y78SEKtCrY31G1R47cBKdCmS1yXe1UwxcD",
  "key7": "5AzgiUK5xXtyUQnkWRqhTt4MTi47Asju9JKZeHcmNuEMmW85h9aMeW19eiA4RVvRZUWFLpneYQAWjR8CxwQfttRD",
  "key8": "2Reg6DqVuukCJ5hB2nZCPNQ3uYWRwxyV9otQN6EWoEdX5rVSnH2ZE7Upf866fM1mcKHNxEww8onr54yjU6G2WYGL",
  "key9": "5szRtDTTZETJr9G4ujsqvqH7pbZS2pgnJEyeu52YZAN3ohhefssefaT3geDqp8MvXYYCP1jay7VzXruCj7Z51HzD",
  "key10": "24QtVFpxJiSt96MeRTAhrJVqcwPnG2LQubbYW5oGVXKdps9B9QdHSdEp6RVvji4BQs3jRXHWqgtHnVF38TTT1mCw",
  "key11": "3DN26RgLcXvzG2Xdoz1RQ7GDy1Atp3n7YcWHh1C6pKTiMV9PWuvPHPDSWUBYVDBrPBxoxye6vQDEpUZLmu9qcPrK",
  "key12": "3yWWcZ8YioeJhaGym6acsnQ2Cn9emCcSHmRW4rop12y67Wi4fvEurpdb5Gg2FcC2v8X1tKs2iqAcBSFJyfKtPV5d",
  "key13": "5fT3ubucMeJXbt6suTGcwcnQGe9CNKKPAcHjXWdezayq1jfzJyXHdXbpmuYoHBsM75jiHgMXPoteoXyeqsN1eGvh",
  "key14": "3BgYeejgLvm6hnzYUvYD7vmnHH5oa7tCR3ufTQp7NBsrwSKJpvT1XQiUCR4USHdwzMsgbPASDTbWk3kmUXJrPbwY",
  "key15": "2fNXLehNwy928FDEY9mXtrRenqdNpCMnUuL1VvBChRYPWnCRvfTdfivkzR7jS6Ak1jPYw1z71TbtLAXayfp78toT",
  "key16": "q7taxwfEUP7aXc9xotXD8VNQ9H4K6iaBitVKmn4qWWsECWXYRgQhkMGsXQ9m6WpaBwtHBQkSMrwBuXv5rJT6bQ2",
  "key17": "5cPtasW4GhNPheCYGZLKMJJMCnZQJXXS6rbez77oTXAeG6vZ5CwCSC31CvktrJqK2DmtyZQdQzUtihpf48kotS5r",
  "key18": "31WTLEdgcm3A3G6vEs5TwSACg9UcuuaFcGFEZ6UCninNwoJzMZvaqDp3rrPpPqmmyBrte43UZM7jU9YqymAjHUAF",
  "key19": "3dqLeeuPmr4vAzf2wxZ9xNiK18LozBQm5gEMjFYVNvENoZVPEuLnqihupN5BvBchdsEHYHywPt9NFVjVRKfmjnGP",
  "key20": "2X8huZ39KbqTmtkH8JQGavaHDuz3xARikco9XxYj4vcYYjusJT9fqB2uG8bbaQFbYNUB3cikfpenbSek7cFo3qAT",
  "key21": "5V21VQHNXDeKMXkiPoLAFovUfCSYjwnpf4oCKWphzWn3oNSYk4qtDkWxiHznp5LayyPM5qbJvMZBQMX1z2Mbxa8U",
  "key22": "Q3cRvSr9BypWuRJrXD4QBNoEW9VenF57yh6VZXCVaSAx2HkEptBZYuoDMwrXgVUhDWVb8D92CD64EmrpTFSHbhj",
  "key23": "4MZfCroFpMcXoRceSHNBEpatZAWASK2vE4tqUvcpPLh6qEwkbMvbUdyvCwu7VsoGgsqA7smskNFKXC6oyo9iC5aV",
  "key24": "3KVFVfrV6VRnLzKByN7y9C3gKJj6CVdyrLLNWQpTpQ8fnk8YcmTU9gNPPd1WMriBvzCNDwKQxBM1zVgMUrxeejdt",
  "key25": "2DEatbkPDPKJrScFUrVsd4aMZBSh6fSZ9B7MkboW795CvTu3mhGVrSySCxnLWpaSwfsC2W3KReLy5xwHjz98NR5f",
  "key26": "369k4vJx4Yio5T3uJCE81i2jGCT5BayVictRcG9RF6YhBttwnxVNN9ziXdA5WzpUbwDHoCtCd4bJRPaa7mTC3ZnP",
  "key27": "2ERLnX4BScGjanEmV7WtZ7ouH1PWBRspgezqkAURH5YZQUhXBj7Wq1W3kvR1kqhFg8VUKEozTd7mAaAAMRktJD1A",
  "key28": "5mFceKHDKEGBFSr2Mgejxz9dmZZxDbHb17haWbWLF2oGmgoBE9m7a8PSVzs7Nf3AyU7GLT3uEMv6ESqYRMbg66Bt",
  "key29": "4Qiecp6nBmTXXVKWMRTGCNe6Vyc37mjLPCZGz9USgxXQGJD585QnYxwhhi9bztTsh4kVyWypppf5FkUM8MyHdNEw",
  "key30": "22HM84nTTtQCAtQW4U8oe3co5rzyZjLcYXpbUa7o5wsguWs6toVYNqwLCJYJ6Wpd438Qvvua8qJHD3aQSvS633xD",
  "key31": "361q642wmwmr84auzGbEVm8ZvzSN785oUDAZX6JZ8BmSd2cSMv73RoDFLZMRTepjnbr2NPorHCdBeTUZz4Ts1EQ6",
  "key32": "5j9bPJ7sMHiVWgcrXegv8PrsC3V6hJHeWAor5aAH77cFY8vL6pv6WJ7AVR6vCSjGVTBQXP23MRWMqsbsY4mYet8F",
  "key33": "uMThhjL36zdU1Dic4FL7f4VtQXZqVjjqasrcSiYEUuejRR6RfLWs5YqHHwFKF88LimjwSgELWTikaUaqH9BrVV7",
  "key34": "38EDEWgyaKZod5r1nTsPsJPqwpyw8oMTJDhvncmyLfncYYTEjhaAA554QpZRrCsMu6zz5PpZ9N8b129pMR46ZCfg",
  "key35": "48gr2y9TGtJoSgkUynCvMenf6TpXfmQreqac6V1oVr1A9axdvgau964KXvwYnQCjGATo834crxxbmqAmT6V1BFcg"
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
