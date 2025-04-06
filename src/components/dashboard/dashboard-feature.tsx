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
    "3VynsLfmLfLmFBaCK6Np8VekWNbwTHgYaU8ztzoPa6gpyfETxcgEUSD619bo4i4aU3Cs2YU68UYqh7fRq2vankXV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h6MDoDS2vAWaSLVYmT8PwXqFd3uRcRMq22ozoCHTKnh2zdMpaTYyDQK3jvqBDZu1mTtRpE8VMCt3D96c1uML7Zj",
  "key1": "23zRW1nUhPWqis5tYgTRcaucAe7ApFxMTUPLYq5faXgUK67Co6WSmsK3X4VXNGH2KC1pWdvSbtqfgtZRahvA5RXX",
  "key2": "UnPrEyUKz5bqS9BxNEEbFRq4Mu5K7eDyUHynpXxG2uxzhD5AygmfJ67jSrYjEyiWkEVb4R5cfivxUME913nHzoS",
  "key3": "36Ph3KZvfZMZALojPYC4XytJDTEPDATFYgP8G8C4K1bvmTTvUcQfGF4nPdVUpxbHJ4MvCnH4esuH8k6jiF47eaPr",
  "key4": "2m9vmEzN7Vcm9GHZr73JiZS4sMWs1aecqu9MTfHWwbJBQ7LXLfdesQum5swQd7T8aacpjsrFaovktAw6i2VZAL2p",
  "key5": "5LT9QUZYn1R4AbaVsUbMNv7AcM6rjHuC7PbFHBToCaXnMjA76whKRvgEaR2tLRmEDjaMkPuU5DR29e8tsqUY7BXN",
  "key6": "4Yo9pnPFj1L4V9Vy7UQpBVBEQi4uAmSoPNLCnywrNkbiMa3t8AWRhSWfjAgA1Soz4w7G4KDHGjs2kdnd5TKMhwSc",
  "key7": "zW1bgG7aLSZhnPfKwxU3iazJF5D4V1B1vEQ5pAD42BMisaeWrU72LDqtGktNFnvDNDsTZB2b2NHD5qWRLTQPFUd",
  "key8": "42JDme5x7UNWA7N4LbcsaGpwb6spPrEites4669RZ5aFvPEA6MuNpvx6m2hrCZQT2Wx1mvho2Xb9xJ9fHQxNnD9i",
  "key9": "4czHY9R5gs831zVUusVVCBKVDrHJkt1x4H1rrAKhSohU2Cshzuxj5YXL8XwfUKBrhdvRjp7QfAYwG9cSJAsvw37W",
  "key10": "4gae7ECz5pz7ys3zGdiwQx41x4mNhjKbXSddjjrG2uhq6z92ZXqgZ6hS51tQpd1DSff2XDxUUtF5BDJFUbd9Uqxc",
  "key11": "ffJqHxZ4kyMtaDVzjwZkdEyuDGGw7Q6TZRj48hNLd21whviN1cme3EmPfkzn5bn5CHEmUiLr4yjAF6uTEKJjgDf",
  "key12": "3Z2CPQGbfs3q7VxbJMoUY2wTJeSRSiJhadsVBeahzGeCGhDKHgW4BU9mLPCAduKyBEHfYg6BPNjmrJKHG1ozSER5",
  "key13": "4NytiTwf9cZKnMzJM8esPMqqaU3PPGHYeihX4ufUDyEE92yk9ACAPanSh8aqUDPvBmXun2jHcfRDLBe4fGPujR9M",
  "key14": "58PwQJyVCMrvnyuYqPPdB89kPjmC8gaTjWk6G3o9LGifjcixwn5jVBV94pEj8PhWkqup7X1MbVyDPrQh7mL4KChz",
  "key15": "3iKb3FEV3FK86JEhcVf7dRnP8MjrY7oVJLHXiduBtxmPnPMBmRa2EDGcgiGZTJVMbpGLTEaP79jtT7jxU7h5rE9Y",
  "key16": "5Ugu9C2PkZc4Ktoba2orXHZG9BHzFabPTWCtQUVry8hv4BRkMTXbFqvkaoSV5oPXNpVNbTkxMMEMMawnRE32Ukka",
  "key17": "3Kon31wJWadKkJ41KTUh4d2x9P2Zw8NJkZjRXD74RpYFANYKubgAC6eF88Vc919gQoMPuaPznVkfzWaXMssHtQgB",
  "key18": "3DN9md2c93b5GTAGNfh4bMrKZDkhM8cjry19SdzFqhwW4B3pJhz1XZ5hAZf6yvsYvwWpDw5pQ5KFb4HGeKKwRDpo",
  "key19": "ufJjGiDVNftpSmEZfcAbzrPNpoAiFe5yU5de2pkMxn1Rdw3fJAMqNqTH6sKH9ABdsHTR3gGiZJNsjYPQnLtnxBS",
  "key20": "5Qp4VjyV266BRtDfw7e2YTaa8kSV2N4ZRSVKZ3kVKTqontuePkPa6Qf8W5EtRPJQwRqsWruWxnw5tHq1epAmREHL",
  "key21": "67ihE49PnaYtf5xjB9gGoo7xfLji5CEa8eNuGWXcorCMCpkkhX7uwk3h1rx9zAAhtBYqLecABGXghNisGZAaqHM2",
  "key22": "4Nh5UJiCfxgzTzgkYjwBzCU6xeJ1mdf7gWqinYggvAz1E5SfMNud4Rcd96ogk3am6FP1Lj8zB2vApdappv7Fv143",
  "key23": "2MVGnkpoRwZUL281R5fCbaNh97WRXBaWjbS9dqnuipVDVjjztveC3CwZzn4HC99ccChMV6xKss9aydaoh2Nricjq",
  "key24": "3s5syF4cQKRZxTtcGG5Zhp4ZgPGjDWPCueV8yupa1XC2giLARLJKRywebKUWJ4tA4Kf3a41EzRp4Ku4phLMzveko",
  "key25": "53bcqxmFY18vAaD6itrLeKhRpugdmcR7TYJ9iWT5aRUXewBxVZFvbaMXThvbHvjmWUHohezGWSufSVfXgrtVmTgW",
  "key26": "RKSgzDDQ9gkH7Fzo9LRD1MEPmTxTNwcMZhuPDgrcFFAz7fPQwrhVG5nk4r4YvghD5LLD61D8zLnqfjSGFch6mNM",
  "key27": "2JJNeTpf9VSgY2grioiE2iLLaAYEupdVhg9L3bxZ3w8WFNwt4GdmSSWMDiLoimEkdgc2LpQj7DWqqL9wMrfb88Ve",
  "key28": "2wMKz71At4yGsKXTxQZuQ44ypRxARFt1xdt19iwx5c5GZmYuL69EcpNJ2PjXEkZzrC1dDpU6TvNSgK9Vb54CmF42",
  "key29": "5RqG4eKT7Gxa5eDRNBeHPX3W34cmzgMw9kgt2rP91KLwLrkA5gAost48uQzUXMPE78RprpsxPLFCMf2J7SkM95ke",
  "key30": "4FNMfhqx7FWGr2Z3aEijgVqFLKbcYa7pJPXWuQ7nCvxguJYqREYqr53m5yDdtLXdg6eVzj9RxubeGa1jqh1tW7GM",
  "key31": "GHRqo5DzvEbMDbgLUSmMMRcBeZ5W1UFvedaX8Z5ssYMbML5t8keJbZiWf384fUoP3QGpJ97HyWYCzhiLwpvhrNU",
  "key32": "3uVjrpJXCub9ZkmPQ3K92aJTNzaVAJB9wFmvb1i9ogNBGxaYh4d8avgAW1ZuQcBt74Ws6aqwLV5qBdmeQUY72mJM",
  "key33": "66Z68vaU5nEVoyXebrwHcWAcA6Qbb6cGKjtrDM9vTt2EJJro2cHXyinaa3WA8MCb6cNBCpWwssnxZ4fX5oPKAWak",
  "key34": "CCeKSimuaQMwJta7K8TeVKNDSsQfkiZUFLo7oTKKNAUak3d25FNfmZ3g5yDssGWYVmqUNHLNBkBdDEjnjYRnhmk",
  "key35": "nX2biNeHSfGBj1A37SsJLnEZn1Mxrsgz52oeuHTM3V7bhzWTNFVgSRip1Vt8UeQrffBn5XZMbBEcoHnqfxTYFZQ",
  "key36": "2SwWBZDHLv7q5rEMQ9rwdCdD7TFeFkpS35xYgEoekhL3wYHmge5nf1atB7zgcvqPJgCgoZKkhkK6vRjiSen1o99W",
  "key37": "4YnCX7uYBNGqNtToaNQyJYtHeX3BFPnycnGrQRT9e1x8hsK6kjv4TntKvQDD7Jpy7vfDpTEUD9oTKmpmGocSkmmR",
  "key38": "5FPgWN6mHpmTr8w4JZLEsBD1UGist5JSwrRNpBJSekQzJxfhhbbNRUFnrbsBbjep6yj646Z9JkE9H7ZXzTLTc1r5",
  "key39": "2RoQUTtGYaCg6MVFhcQmYVFmsAvKY7ijgUftD5iX6Aqwoyu6gRHbx1Yn8HLmnGfVSURvJnuQ1Xa83M4d75RJ89d",
  "key40": "3ob5RdVcDfeFNrSuVr47LtEv8TRYNcVK8gRizeRSfUzKHDsssvcJXmdbrrH2jaAWtduVTnE1hq1LqebKRPre9jwk",
  "key41": "LrueNXBXAukE6zGWu1B5BykpoxDr8mpr99Dg5CuAhWjyCq8VcszNrrVaxVgzbUVGJYo9cVVKz7nuYnywwE4Fmit"
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
