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
    "2g3CHn6K8qCGP65umkLLox8KSdJNYoRTKtus26DroEWG1WB2HmDtiHeTmRWtw3YuKPhwxv5AD7tmycPVCPr1ADvo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ViQKUt3WrHfdYXmUHEqxLq3cVFt7te4nz8FPJYxbqcg2jTWDDDWA1P8EN4LesFht3nCYaQptfa3F83dLq4XQ1yt",
  "key1": "4bgJn5arNcwNB5CKSgbakCDiicXgRvJa8fbTNwMpBYDhYmdrq2iRuECMZQMJTzziTftGks4wL72wXmMiLf9yutha",
  "key2": "4pNjrqNECmbeyh4HCagu2zgjLhdG2Bkk7dzXLunQZiBP4BsbtNwRyFmyMPqAuS9okEhQ1j5yVdf9jHTHyT596MmK",
  "key3": "59gjv6LS2EHnSHAmg4pGMDhEidikmM9aLBnMYMTkvTzXRyTKDHDmqACPFxK5wF7ubsHX1a8Mm78hn8vdzaZxUGKv",
  "key4": "JNHBy6YNZmc7qmez5BYyAWhNhb79d7quzAvVLU1vgCRB6NJtEwXWd1BsqiuMNac5aEdkn87ifYgc2hcgpA31o7g",
  "key5": "2dW2kfEvFPeWMV8LZgKN4TpnGAzhohhCZ3VXTbucZ18ApLMZKVZmzC2SBn2rBV7vykP5w5noZpQJpBAUYZ6LHP1x",
  "key6": "41wepXfYRma27sePkQNs9LHuDL2bvx68ez8wGPww6f8KUNSMoee22rYfWGCW2t8WThkDHyCV1jEgfZ33HoAEe4eu",
  "key7": "2dW2EQGHexYrNuCNjz4Azfq4YHvWx5kMPaaUB6UaPZyfAJQvE3RpQAdKPv4SeATe751YVz6B3XJggDm68KtQExup",
  "key8": "zonWR8gwTZ31UqdBTi37uSysUYGJMATGaiLGXcZ9mwKTatRVw1AzzVzWBryMSVwvxdi7Ex4qmfkvPU4JfqPCim6",
  "key9": "57Sbq8csoZ8BuxUuZj46seWZxbpWA7GTENpKULhhw5PRTRo5CkLd357Wn3nspLqA1knRJQczk3EBHoGn3LweuiRt",
  "key10": "umJKENE5Qsxho9KS95bSoS13juvzfjqyQBN4wmJJn3gbfM6WKsGfz4eQ2RK7DjwwZZQr2ys9xRWWo5jtPHGtQ8w",
  "key11": "2xkivQvQfpCKFufosVU9DFdtQX9SzCJ3mPTkQutdTBD7G8zdG7nKnJERASpKtDyDnfmi1D8grYexLquvFNsVFBWo",
  "key12": "2NDAdUAkg4ggj1FZ2y2awW7LY2557DxSw5mJXup8EFnkDNWTUeg9VbZgfEVYiQsot2VbdzmpNjKi5QkvTSN722yZ",
  "key13": "myyDnCc2rDmbkke3LrHxTn8CkY5V4zUtKLxLeK1PVoLzWuu6QE4aHjr1EXegQdn7eHp4wh4PEvHEH1KRjwnXhys",
  "key14": "4BkfD1HSvMVmLSa9FivtJqH91hrhntdoSPRdrbvuwW1df5ZqScw4sL69x1MJxe8hSKAC4GXAmY3qKqoAdFgwCLgn",
  "key15": "51w2oGRJoqUySkz4EBTGX7cutG5X5yG8bu1eamtUaizbDb7wZxfn3jeoXYQLfVn7MazUo7TaUwGkqpdE9WjSspo5",
  "key16": "399UivbyLJSSdKMmRx1dgdUvDR1dcBnSuhAM7whN99z7oQHWgPTamXudq44qSwyG3gEmn8mZdyCZ1MP7yNAhbCQz",
  "key17": "22BB5Th29tGQGAR5xfAQCvZKcuatxTorkPwuG8EMugdUituKBNAaWEVnfiUuGG7cUgxmWENjeYnd51QhYSA8D3Fa",
  "key18": "4v5YQ67cuhdbmBUKfbkHZ16jJu823kF3zrmThCGM9LZKFuoiKGTBJub1g6MU5busiHmMhkPCFwnBihcJybb9YoS6",
  "key19": "2Tva7fPMTf1WRSdbtb8TUqzitVenCRbNBJoL7wvizXJLr76mM9LSbZvwdU8Eg35Tb8hUkuwBHkbgSLGgx5RziRPa",
  "key20": "435U2txKkfLf9jgWXdFj55JG2E91eYjXkeEUVZGyA248UTgTena25ynyCMK4chNxAz3BZEwmGnWqKN43DJ487JwM",
  "key21": "3KTUZhNTf1ar49RG6efaFSWBxMdGexcexEoKhhHLEPCXkEZkHnch4FChQqdAESn8ShEN3bR4zXhZ7PJ3ocS55N6d",
  "key22": "pQtA5u1CopvBazA5RK8699sG6KEBHA6JgZCuPtNQQvewrW1aBFCqEweb2NhD7LocLcEWtpbuJH274h8cqJj1aNx",
  "key23": "aQepM2zPhzKyVGXhKXkyt7bMSQPY1YBC2RLMCwBaYkkYkaiE8E7VN4a1xhdi4jtu3jficxCBy53QAvE5HEBGjjP",
  "key24": "61K7A24VMJ6Mw55iGf4rwEtGzoFjpEHXgPrt27evU6ybMbus5K2BgEosxNUubXuR4YN5WqcBPgohhxTqJRugeUyA",
  "key25": "uzN6ndN5rRzbWs8YdAad9T8v2A2dtrc5FXKJFMk5Rm5hi2ziMcYTCNcshMoWawQNSynY3qS2mHdjK6gy5CCRDkv",
  "key26": "5jj5zEX8FBWtfzziKSSDEJw139tr3ftK4uELSQ4npNgExzDHNBm6tnXAqu9THAD51i6UX9cfmstvoJUk5mbwyifQ",
  "key27": "5oPYbuxhUsZsezZAPNRde99pVEcWL8J2gpphGrT4qc7oJ9Rc66rYk1qCETtHhTQsGAjobTxm4wT1DnSkXJxjjRCG",
  "key28": "5Dh8xnEzZJDLsART38DmQi98kCWp6mY1GA91JzDLaSAGkrMYnKzVPvruZptBA4NGFY77tGtbWyD5VEBSgrfqBmPH",
  "key29": "KZs6iTXQKNvSntb6qg96jpMgo2pPuVJqSotTe1jU2nqVzhAoGdHGMwkN2ejUWiiZC9MCGXFBVFXy4CwKx9YFEPB"
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
