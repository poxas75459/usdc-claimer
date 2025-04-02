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
    "3tfbE9sQ6VW6EqmqSXqugfunJZuAwUw7YV7yjrNSE1xnwc6rGbeQ2qwqSyFjdL9Q6TXCWHx6mFzWUAqc8NdzqHjV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GMurWiNZPxqP1y8KMFSn7nuLnFq3mJLRKcyijjdZ7KHYYYJn1QyyzUrL8EQkuf3fzXWAxb1Fd9rxGmGZjRfoZyu",
  "key1": "3sE3AwwUfWfpfpo4tGAYgfi9WToEcgWbcTxfe4bF4WiJDQqroEaUszM8fXWHF3P2rERoL2bgX97AgryQLSdi5tAt",
  "key2": "5h7CcGR37bYTEHYaUBgDJXD3nXNTSBYCiss8mkc2fnCKWUcu1HTiNN4Ev8MY6AQEH6zDK88q7JfP6sAVciPVJbeN",
  "key3": "V7SfTPJCiDCfmCN3yGzW64HT5iP38KVJR59bpaWAZCmmVaLbqdh5YkDRCW7iKz7z34nymuhuHX8md8refpFhkai",
  "key4": "625FcARBwUCerhYXLAoXSBqEn95rZkn1HKL2RKEtRgfbgw4SUntBw649afzVPyh25xhZBGqRc2HLet3DbT4wJYPy",
  "key5": "4APjKRZ6nzCcNcSStzCnZdwXyaWvf9XsjbEwxqMFfmenouTke55RGseECDVcwjuvqCysCMZXHzRtafmvWc11hXH4",
  "key6": "4ivVjyNoTjuKDGZBcR7SeKKUEYUxNrJ8cFyZfe5H7h92oFAPP3xh5qKhmZA8fdBy1hYYyTKPJ4eFQaCwWR123qWM",
  "key7": "5KZvwcM5wWFy2xBJ1T2auNeZKbwk8Dudra8yfL5BSWy3pryswWSpLzXdNyUg7VLuxiq7yQ3fPaDq2JvSvE4M5PtH",
  "key8": "48UKuVPuPAf5bnstc4EVCsM5wgZJtrsbXQQN7tVhYyG6v6ykbiRwfVTqXm1HCDbT8SB1SVW6gtKGdRJXkQmzzoGG",
  "key9": "2C2LzSPHr92jUFxYX9eNFyPL9jdZVJEFCTw3FBRALXum6R4dWfm7zkTTdWf3riocfr8cdvQXpH2QPtib4rkmeHMY",
  "key10": "4sxw3wEPR6NRL6CVUZoKDLX64GQLPLqytcNTsBC9nx3iix3z19ymigpsuXbbPyqA8NsbD2KRppzRf6QxiUUbB9Ww",
  "key11": "3U1fcrvs6TiLV4PsJZoccs73YQ8wYyu3b3xps5pX6YB4iR4JqB42imZLg5dMLRoeUHKPnNn4g4o3ZDVBzxp9XZdH",
  "key12": "2gYcEFhrMaTKxuQc4Bj2vX4LHEnKzdLqixH9woWGaJeAj4RzGbJQJ4oSLYiFJGBC19GR3PGLMgt2oWdfndFeByuc",
  "key13": "2D6BekYtBnwWW9juDHHGgiKsp7w9WtbRCTA4GVaDZmsHFZieVqL6ooYyZVn9sfckVt5CgSTP1tqXNmEPSafyec2d",
  "key14": "3Zai1RHFgXjiYo4f9ocmU1qq6xbCAqpQehviRKaFo9BA8UoX46av3UygRcLieNt6Je6AdvkkPgJvsor1KQ1pnhC3",
  "key15": "5g9CVkk8GY25VoPbnJTogJK5xF4TGN9zsQhQ6eEkswrwv3YSYa2kEsW7Zz5kbwD22A4W7FCuVbgKPEuVAM5V4W2f",
  "key16": "uEu6mNkofbYpLWoNDLvqE79y6Y1zAJxeRZcKYLvZ3JyHTF5QYeCkY5aYih5bcayFMiWKVftJw6qZWD4BHszHzfj",
  "key17": "53J6ssw288Wbsib9aqDMdwHgWcW8cAw1gHnpBVqZj14oEYXWXqgwXvN2U8EkVUFQ5XeRNHWX6622cxBL6PmvB4jM",
  "key18": "wRvs8d7o9ioTKMG2T76UbEaiBiVA1TbkzxnJiZZmjvCK4UVLKyMAvEK7zFjZVx4ZjbiU5HrexmAb3RvPaGhAW6m",
  "key19": "5cJLqu3qLAg5FMcfu27x5AutNvNZDgSGD4hNn7LX1WbeEnJV2p6i4CUTUiLEeSfKaSMGz7bJhuJigGynw3vqMVnz",
  "key20": "57arvkcofst1uAkuoPooFgZgqxk4pug6EPSrMk5mqJX25sRwkbYP3vwgCFvBahAr58bUn1ryPSfwXR6g3M4NHJrL",
  "key21": "Bw3JttdgWVptcytyqBpTK7LRRSWbbPzwzeQcVbLwjtoH3zJ4swSg7btpiEWapHC6twHjiK7ZATJocViYqyfgtHm",
  "key22": "2xcUnAJ8q2XpAQ3dtMgXGfZuCoDs7cmiUoz1DYFd5334WSR1rkxzNTFJf5FznU6wDhdM3ZVQ2GJbRvGZDwqhNoTy",
  "key23": "5jTnU7MyLTPCSqVt53cfDX62muxhcPgXdYAJmknqPNs25onZEdVhsb1GCkfiWUC82YXEzsEw2YWwJS77bxxTNpYs",
  "key24": "pgmDfERyRLrA6hRipQs4tUkjBFQdZi7yFpTfne9wQEDVmKqXJ9Yi63D2H65Mu9oBMrrzrteaLk2imnujWRCRPbB",
  "key25": "3tokVHFbv6XWAw7Am8nPVKzgPfB2jG8VbSwqWUrPqe2SwqERDReg1cKUY95XQiCzuQnk7RJQj5fM3ps7GgH46VXL",
  "key26": "34dJjzLzT9GmqQDM3CRYayz34a9tnPcbgHvYLgEbru5zAaBX2s2ihbaHpkKMp3x7z7smB6ozssftrRUTHB4N24J4",
  "key27": "54nSGa6fVX3BjQrrM6H4yr7CfHc6qTkNnzU8qyf5NYrzgh1w6CpA7VRpVVMVxCoKtYxaWD2m2m74muByfHeqqd6w",
  "key28": "5zHHxL46QF65tKJE4nPPFouiMvjuhiayP5mCX3KZHd2Rz6zJP4rf26ee5ESEsWKDFq9qZgQEPkn8xXY76NiafafR",
  "key29": "5aABQNqdSKhBSnSTuXEhNARs53iog4gr3voMTJ5Ab98YjXsweYUDf1nTcHHT31gz934EBYHAV2zTE8rFHBtfZXHJ",
  "key30": "spKGCS7VLez8VEVhML2BMSCbfM1rWMrP1g6AR1ruqp17UaMzxvyuYUpobaywWQFmtv131Kzy2Kcurj71kkLWsLH",
  "key31": "DbGFWNcZw3wpKoVnzXdFzD6H3S5rsLkjrgZKb9bPE3wqP8bsrRuwBeC8Gd998NLH89FbECc1W2bYMZ8ipjyPLQR",
  "key32": "4Qzc8kVVjue1R6u2pVQLETLhtSnsxE9icHDDZWxorD1zLfPfMFdds2bTiMn6D3sESnjr8cUwup63yCy2JVUFbeWF",
  "key33": "3Nf9pwMvvM6PAUYPjapM4RqR9boQhneh15n8RmQYi4GFXLBfjnPiJmhQujy5xAJwdAwMseMvupNnEeLE9Fb29eGY",
  "key34": "VyCKMBxfZUG1adnPrrTYzUgzc9nHbRresVwBuwczceBtFe1QKgWkNPe2zYMmofmbJ35U226V6FC3c244VdkWTJq",
  "key35": "3iHzxemf9dYuBBT4ryJT5HNS4Wq2EosGkJS6N7m961iZYD3TtB6zkuYD6cWPhe7fTziQnm92j2GAQ54xbSL9D8nv",
  "key36": "23DQtdrn6qQXfYpz6Aib2ppzxppKiDTHHCE9vr6T4HtWwWqoZ2HCXvMYx9vRuRTE4ozsYtt7ec5rxhHG5fUiaKvh",
  "key37": "2sKqnQuCd3NjXZE4jovbTKFPJ4uiP1ZcmnYvBjjeTqYZCXScSfUw1cZnoJ3B7SAbWYKxiKYHJ9rUAkuKqnW5CCEZ",
  "key38": "5u32rhXQojCvhctPqUFvqhsNp1ZLqcDDwxevwCEJrEwT42kN4SUpF9eVmbKP5oPn3a1r2HdYKhYS1SNUwn6pWKgS"
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
