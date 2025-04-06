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
    "XhZSC4hBjz3BsZeptdSw3rH6W6p9DnHQztnU9yXFjTKZwwuoYg77xTpuXZkzYjT7sXagra9F4DxWWVTg2m1U94r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WPEPmWFEKc8bEzudMkwqtipPXJuDr4hk4JerQnK7579w4HDieddiXCyqVHtx4VANuvz7k7DCcnf2KPPfmWS3V5M",
  "key1": "4xSXzZDcafXQXs5HuDugSBDAiEpFpm4Ah8ShxgUGAX7WDuarWUapJGRiDMzB85VzjWTmf1ATzQFWP53vCesE4H8a",
  "key2": "5dk9vpV6oTTwVfi9y7VFJFsWjQmfFuD1tVXETfYgCZytWAiqs3h1LAZzNZabfMDh9tLP3E2b2SYNWYHtXmTAL3f2",
  "key3": "2grr6SEPNL27evDFLs4TAg1ZxiG5XitCavSUnWCbphuN7RW2v4KoyC1NyyH4QQNDHsfDkesGUWpAKXSfuY7H8UpP",
  "key4": "5FbLh41VL2SX9Wc8kXXG46T65MEEQ19go8aMoDbq95De1MYwRWzPZjZ7jALnAjopZsu4pGVqysQdwReM6VHuBXYb",
  "key5": "3ZufuDtcb7shvEjiQwBoFubnLczr4ziQZf2ZRwAaN5YmcE1NxLijDnXQh46xeTg8FrZ2YW7hJrFKiphYtF5krQBb",
  "key6": "22i4UVyYsk6UYYCPRdzjgMKA8xwA4Gop8dNfJ7pxbpjD8XCyVaA9sDCsLngxSiMuuEDVcbjmt2CyZRunnE8RuXmG",
  "key7": "5JNZ6fGWP1oba2wQjkisRpovnMWhMUWVxgpuTnund2LQ4fXeTbjrSMBXQmKucQ94R5FGiRTTk47ywxLoFANGF5Y3",
  "key8": "3nAYiZ7vSiRYvdFqK17fSJXJhxQsBqoSnoJQBeBNq4V1zoEF5doGjbdCqrajCxoP7FS7axubxCmv1VgQ9xqUht1P",
  "key9": "XbTg6Qg5js3jwMvWB6zjdNxJ1UBE1Nb9CkP6YDM7EpMNtFSsHvy29fDdxk6HFHJxPjNEaqpHdwJU3yuK2NVK9Vi",
  "key10": "27WdjrQvAMJzJz4M1CiRiHVUReMkSuHnvgYFwz4vipASarDvpbkLegrBFGhpzv34EgbvMC3e2QfdbcJ5cbyJteG5",
  "key11": "3g3uzmw59fRFs2KyfHqHAundL62w3hy4u5iRmeKKg3qews5kvfCbM6BrZSXBtHCeNbTPtZoS11xDtu88uRJUNWuA",
  "key12": "5nrC4fHLquFYpiVQ9pgyu6SZJSdhD1hacJ1MH2jjskVQaJ4Q1EydgUahyvtNecTMn4yWEsCGoyTv1YWBPHLzdQK8",
  "key13": "zY3o69NFE4hjwY1WYojtfotqTdfSjqatbXs3XoU8JVeTCabirj3qCN9Eung2YRF7Z697d3HPwjqMAKcnErkW9nW",
  "key14": "2YTjUgsuggSbin99eMfE5GRKcizoVa2LnrHLiH1DSjgxAi8aUht8Fs6arDz58PtPm99NzoXQexy47nsEV5z83pt9",
  "key15": "5jp2qwBaXzyJLMYGe4m5sZzi4KEiwWe28Ko4J9XmhhbT35DnXNrsNsScqH8SsZrD2HCZbs7mnUMEZ9CJ5GTKgSy9",
  "key16": "21PXf5JNCQURVHxvS1VWVpzrEApAwhUkXzczgTCQ7XFQBwGQdtTQNvS56nwnmz2pQNGCQbnBTvztXrrXoeF2XJ5t",
  "key17": "3wNDT11GzZ6yC3JmeN4aw986myhYeqGYvAuZ8yxRLF6QdjLkgv5hxeJSraAiZhS1eXSh5sac4iNKzvLreoEmf6P3",
  "key18": "4cGaz2vrGuTqxMzkD7Dq9yuPPshbvGmiGA9GZL7BoBXNPHNJJxke2HywJ4MCVCmWGhAuURqaeyD5XUJ8ganQ873p",
  "key19": "3oPWYLSacfJ5XQv7kjCPTh1hMXeP5oPJtofUhzAjdZ4PhvuHSnksmL1uQKEHdeoFoe1kXMLoUE8JrtNaqBYyTqDg",
  "key20": "4LPdQiyFLAP1ToNvjai3u5FUTACmfk1ZECKfTvi4Qe27Hctwm2qLEjTRmDGr6gc3mTYSwRmrWz8yBwxiToL7vdEP",
  "key21": "2SDnLaEKro8mUWZVQVxnxZF7SeBM4eo7uQR4kpEohbUS7akb5sggbMk9tBYPTuhZypHRzyaGqDm1Dd6L8BiWLSBC",
  "key22": "4FyJf52d488fAqedmASH4oBy9vXt1BXUiQccTrThQL9kD8z6FUVGqpzjBCsAamNS4WffyQZNy37pV91WvLhRQVCx",
  "key23": "5xjqr9gCyEJYhwVxcQXowBRfSyBezcsB682dG5JVQEGyrrySVd4LtFrz9CGoDuEmo7JY942B7YhZXhtQXRzeEzWy",
  "key24": "4wyGagp3S96i3aLCzubnvhAAFz8D8rS3MjXrGB3AtnXacZw37a8S7yeUABaHVEKeA79bpfAtz5bz1TvZQgfWasVB",
  "key25": "3vTECo2JkLRq97YeV34gqzj6QBvDCKnUvuKXWuVNZZCmEsSSPJoNKnR4aB4U3h8C3o6T8qq4QnwxCNkdzTJwteQ5",
  "key26": "5qgMvFBWY4G6UGt6Cvqi7GgCPPtd94NfP63v9hBpm872ptaPESsEXe18Q1sbhUpY8eop3v5egyapkCDQwzyghCrK",
  "key27": "2WdBH4r8cW3ybbeGPGJzaTDj84M5d2vn3eSbuz5GfPCijKqUTo92NXKY8VpbxStnN5f9EeAxRyDmkVwxEkt48d1g",
  "key28": "2duXCUT8TW3P46HMQNaS6XRvWNDTvVjzmHxioZZVr3FG4XYj378hs9TP9GjqP6mYKKfsGkh1KMUzPgMdjHcBcohu",
  "key29": "7QVpgVjFGFY2T7rwE7n1SFr7oBNRp5NTZt9mhD8eTmfxk3Ghjzoe2Ne3zWHEM546E2p5CMfpjh2CcYoMpMRj1Tp",
  "key30": "6248QLML64rQQzrFFZShyY8Z7iZdoKTjvjWd8pYGLqfQN7nKAZjuw9A3jU8Yu63nWkx815RauW3CbXWwAGorABZ6",
  "key31": "38Dryjh7RDMzux8v7tVgzimBbmTosjykfTymnHUFbEGoyKDHmmUSBuETwmTJSNswdf9cUUgEHZ6zYQn89M5zBF3u",
  "key32": "2PbR972L9hacK1dsEzD3W1XdZkDfYKq3CrY9YCyeYX5wkpF5XK1w24mfSVG1a5FezJwAaDWTonFHddHph7fXNQkS",
  "key33": "5wy8T5nCWFj2C9ttmT7L7Ee5Hxe6RC8QDParpr3DaPPwUVQKE6QR5DidVbKnQ4rEJht4XZrkddPUL369xHwnRr58",
  "key34": "k2nUtRVsWKXZazb5Z5jAyYno8gS44oo6PeA7QwR6B67aaABLpqoNxxGNKocvGRM9q6A1GUJn9eUhe2kv36GGv7k",
  "key35": "3xGF47u2qNPbKjJeTh9b4579UvKCnnfQBsNKYVZunnjqmtZ2j529xrFK1rNQb811sPxYD7jGjnxoZZTsB4vWeJUS",
  "key36": "3cPTWrPWKFHu7kBSHSwU7WDb5D3MhTMaUNNLoMA1GP6PPxJ4QtdQa2yo3TbrdE4vWFNZfNJm73Lprk8LPoTLRVKn",
  "key37": "4ZtVnpLioKjk22opYBHsp9BwBdPzQrthKxikLQoUhE2PRHShogEy5pmzFyn5oammkpxFt83udJe6ZzZbrXtHXtWt",
  "key38": "3hnMN5RBCaqwF6tUWef8vUCeo9MF9ucqeZwoqRigzbRK811quEtDfiLLyKWHUNbZSFqQmXMJKwUtwxiFi9jc6wzD",
  "key39": "3ZiP3S1CvDn2QxHHWgit5GnUgxNHiTxvNFywTEguCqq1jm2BDJUN72qx9uPhNw7NeHwb4E6mpGbs1Dw3bgD7vywf",
  "key40": "29yPLkJ9a3pJuneCzwGxhaHV2t6j1sVsG11zHwNCbNoY9S2cYw2ZYmPzTTwWfZQh5fqH4UtaFs7bDVgA5ivwpxHt",
  "key41": "YewdL6jk3rwqpiLuM66fHWcgwMurgVXFTqpQkBEUcGnAbK3mVQ3Eiq6JKdn4kYfSEWTrqs6uVhVJ4NDPZfgTWxe",
  "key42": "4FTPy43hXa3HmAiCPoJ2GCQzQ1W5HDmiiwwMqAwKcGEb22EcsFRGU1Bnh1WaY8DQUGjgDxmkxZnvtmQgTKxqYXAt"
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
