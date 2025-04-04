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
    "2zCPxBxooE33ope4CjFvu6Ksr9boDB2AQbjXMXryrT4eYzR1QXbU9idXBXZsVCfC5efcMa7yLUYniKr8LG8rDh23"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sBzUEp55eQjSi67L8AMgLoJB8vij9NoLy58EP4jApDr6kzwaZ4NqoLi3neT1LTsfb4iW3wcuUj9pgt6YsyoEtxt",
  "key1": "5XZ1UARnVz6EH2k9qV837W1Ug2hjrtXxCQh1wBpN4eApzAAcu6NRuZNYEVX5TLYc6GfmvrxEDtWZvc7nndCz2n4q",
  "key2": "2GAAkoj9PsFEVGotCZ7XkM14aJYAUmmuX6qb8wnypb1r1FJyVTcwXtrAWc8G2eN5AE4GvLvd4bsSx23ZyzxyfCni",
  "key3": "2dnMfZQndVCEm1M3RFT7yKi9B5h1a73wERZC4k99f3N8He6k1qWojC7ZcQKRZEmfmgz12preMTDNZkuGRRaVQW8d",
  "key4": "4VDs54zSmSkv5hSDYZGLiJ1eq6ypq4qji1GAqYb4EopzoX3BTaaCo6sBXhSikUA7S19Dqb7Zf8tnTMAFzf6YjQTZ",
  "key5": "2LJVQSocZkNe14imBsvnS2jPvAFwiijsJnrscTa4DUmqv1qwuZRTv2L4vtTbYAeVnca3unfEHjoRrFGm4ikAATXi",
  "key6": "4cNz1hQhWALT4Hu3DDdHsCd7Ya6SGo1xj2g23vc6gAD5zJoaaFBgJGTjKvQNDFXtK9jwMsFw6FZshAY13DDn5JpK",
  "key7": "4hmn2nP5aTPeuBAkeyXWPvihw2nvPvd4T41Lwa7Zvy1xRVkUazPTAofNzFQeVdw15zaM2fpozNgDUYtbxCLYVXr3",
  "key8": "3aYcqtdjVmvimas3hrhMLR8MgLcRHQEtLU62wf3ZDcb7FrjfewseVYA1M5teYFpCkW8f69svrCRm7c6yN7BYze9N",
  "key9": "2P46CNjRdrCM3fiCKoH7BZ1fia5FxNT8dbtQziiGm6ATJdpHKLgokDr6vew3c2jto2k7geuxdSdSiZZqgAX5mKte",
  "key10": "2QKSguT2DJeicZaQtnvHs8HxvcTZNEzXwvBbSwmeMuVfHZeGvfVEb1EMxcDXT7TDHk2DomQ7kEpD2U9WEv5WCWtZ",
  "key11": "4V2wKpeFVrNjYKYckbXR3EXkxd1KVHZoSEGJxsVx7W8LmYQmaoR8sFw5B3Kqu7skhPmZyPvrygg2uapRjroEHid1",
  "key12": "22PQapWfVa9RBUwVsTG7pBZACfoW9yqfCk6pM6SZzC6RW6HU9C47vXr9mUuEj1Djac1xqYKzzpdj4r96s8LApUDJ",
  "key13": "3JRuGLus5Z1iyqWjHKSZKL5AfSivPdynqNggrkEDeSDTG8uqkXwLTuiXRr8HnZYeNRAb2pMan8P7mF2sb3xLvGbk",
  "key14": "34GQvdtxXapF1kvH1acCmDEw9282s8WbdbFM7zcqRdpPNxyfGXqVhYfMTW27GJJTEVGzT2YRvGVWDJeY6YcVwyDv",
  "key15": "3whU2T37BSdwm9S7jUW1FLEieTVyA3yxQKQj1jYQBCZBModvP7JCNRD2WTGjEzEioN5z5n8dYgv3NPRPTo7rrSsm",
  "key16": "66TVLjJKvUAgvbNXoyZzU9T8M5axoPZCbgDBxKgANvfDeXxAryZbvj5wrgGzLn8uG87BYRpN9srsQuZYtk2RrdJo",
  "key17": "28GxT88exZ1VF2b5CoUjXh4PLiMKBrEAaqjZnjXBaXBMUEbw9Hv8DE8DobPBzSCMguiyQhx46g2qmMgQina4YJqq",
  "key18": "6qkMbiTtsZJwryMpdhDZukC9tb1RzKrjtn9mHGm66b66K6MrhrKXH7gCx33cnTaX87Ltb11YFwYCQMbWydWaiXg",
  "key19": "3dfswzUjr7eEKnohf4BpEjiWaBCyN6LrC32R51GtcV1EDptpoRHJeckBicD15Mxy66CeC6gEEjdDpv7Vjxf7qRMK",
  "key20": "3BxcKakLe8HDVnEyhVzG76tKNT7KEJg1ea43xNTmwoDvhtqYPonWbJyQswmhjC8daBdXxUaU9oWiptNeqCMaNdLt",
  "key21": "ZJr5W7G8a9rfJKvRM7jNxM2ahtgrRD6MNMbPQQbHqf2VzVRNNTiAr9f5qTvjQsHXQUsGUN84QmR2SPRHWbxsCRA",
  "key22": "ZrS9BYmRTqzdAtM9kfnZtnAbaeKhvLQf2yKPuTN6pzqooJjxUn6SWiEtPmukupXR5Ht66PmNZ62FHteZ9JpERhX",
  "key23": "2Tx34wtj9dhRDzCp2nbjwQkf5SggYQ6FPVkmqHmv9Mvev8wBa46RCtJwTcguZKzTB9Y3t5oRhJJCL4hecTK8QHLE",
  "key24": "5iRjY8GRyhJizWZzJ7dwAD71pdHmTZQjjDdjCoCjMWogFZvXBSQnrRFnX1b8wgJDJ73XVHqCsmN69yxWVtM8ihL2",
  "key25": "3tdi39CsdQ61xejdxNskMPGStyRyFeNgsUsYQtm8KDjx1WroJ5YqjDfjFxaGsWigUmgaxg25ZLNxnCoNgwZWPQEV",
  "key26": "2yyTSyX6Uh3sUKKf6GMS5BjXgkVK9CRd6VY6FTdwdc5hv98sXsEuJ7LYfUsgf1qWsHqiYJBs2Dv2Jw76c7bBJqEv",
  "key27": "HV7jYu6KMCPsZfth5WWsyJDLY6DiZevrD7UCoPxUffDUBooCV8d2jVjsBhwkARZbv9vTbyiLaLur1CmWXntw3cw",
  "key28": "39pT2prD5r1J14oVUHxTEpaMjwYDJTEurjVS5f6w2srUZLJnUdd6YQK21ECzhgLhEkwumw15TvDfju2kQin4jJcf",
  "key29": "2kipnZxMFDi3U3GLDk5pLKXZPaANceeuER7WiX9Ee3gu9ZMebEvpUsFWtrLYjGipyS2q1Mv4SX3koxAd6D3rWEXh",
  "key30": "J5QaiHt9WEUUjvZEXbYhFVhq3Evdsj8qSsUbTN8kDW7USyYXMCTuKFGFSPmpqyw86tBhMuftxKRpyvbJSVW87RF",
  "key31": "3RMrU5xRJQDH8sY8hacWTPZpdVVBA2ZQig91ux3ZVoMsbxjkoGjdGAXZHs5nambyygkF52RNVK8xyLSKfkUVe8Xo",
  "key32": "55t2znMs14u5YvMsiPjr7itpSEWouYZcvzaAKsfRSbDRzNnUdt5ETRY3shBAigVujWLu4psu4poTaZivW1PzbspN",
  "key33": "4ikVrzdp888VVPWQXbYMz8bGvh3JXBYMfTn9vQRBkHmC4YwRaW646PpMspksqXq9k6nGMYbLxCPt1dLXoq7MQgET",
  "key34": "2pds4TTfmJvLAHB8LnV2q3LqtjnxiCSZFuZ9s6e6kGfKKQXsgXAvV7rTU4bYEPh6CjUWotBLAJbbDbjT3uaPifMk"
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
