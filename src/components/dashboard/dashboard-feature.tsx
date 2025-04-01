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
    "3HXbga86ijKuS8T1NjHNvobe6BEgv5jbZwJKrSM5ieYgnmT6wJAiRkNtBTsJ1itCmuGdKaAumadLCagAaEE53tzH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R4YNe53TGPm7KbruPZ6V4w2go9FAJaBbQxQq9vN7YuXik6WFhbM64DVP4s2kw8hu9ooa1tyumiMMskzvx6zAE4L",
  "key1": "2KVHokbjXJkPqvVip9wHbsdoUgxGcNLqfJ3oLXdALYukLkBza6VMuQsdyweeGEknPDeN8GMURWNK88PZjmNLWFLy",
  "key2": "4ztKYmyvYao5MWi9y5SaXY2qUy2WDqjnVaovUnKB8BTzi7EdsxZqdZPaFYdzTuP13UJJgbXtLMLCigJ2b4SLa9bt",
  "key3": "5z6JneKkicM6FHmxhmSRqf7gmUPUrFSg6nvcn3xan9cBSsX3SNeGntyZhcU5JHLBMT88NSNMNAjKndezWLysTTPJ",
  "key4": "4gmpkyiReBs1kh9kMnDgHq3y2FefBAyfUUvgABado1bNXqWGhceFvXUUrAWuUgw9Cc364e3SYuMYdAMDA8YcRk4b",
  "key5": "spvyq7LG3n1X1UCRVNYVmS92kbBPqwFdZXnV7vonYpfvao35f2x3rZaUEZT8TTdmCMYeYSxPc7pmngnzeKZMUm6",
  "key6": "33fC1915V3QUknQ8javnvTegKA4Pk5k6WRDfegcUKEDpkvT3EQnsrPnhYtXgkAu5qY8vLLByN1fPDm62BLHXvbJV",
  "key7": "3tUtUbscw9GxvPMGVoP6ix5w1xVxuPcabvGAsQJstNEmTSS2bRhhNFRnm8ZEH87MxArk2jZkVE7vxMCYiKs7yUyh",
  "key8": "3n3pKQZrwmHm5zGS8EcBY8Q4D5D6cjCUUg9DoAMSE1VGnFAdbPXorUcRfPSZpX1WaiM9zNRDZ282rtb8QrSmfd2t",
  "key9": "59a6SfK4mV3kKZUSUL9KXEsHAEv2TxxQk87qr5cC1C2jbefPadAq622TbY5bYKPzLq9ihGz6xvNpGoTo8quoCFxA",
  "key10": "LRcmmtFH6AQffxcb2WBfwEsRDkwzxDVTmhS34daZ6T4vp8AUU5GJXSFgco1QLZWVppb141TwFZv8bXri54Lqbp5",
  "key11": "541dQ1k1AUJE6XdpwqyWxRNRnDV6rW3kW9WDX9oHvkG4L3WyXZ7gp33Tyh8dvphqLnRFCuLFtBdMLoLhmLtGDFtB",
  "key12": "3c6v8CyeLjNVVcq9Zenb8wcXSbc4zw6iZdK7MCyeqUAh75h6zBREmZWpiKzz6ErN6JLCBW1t1FGRso64Z3eU8YqD",
  "key13": "4PRWPQw2C4Dp3L1WNwrmdQgZmLNabu4ATEgF9RfBg3UHrbzB4WBZ79aaaZpmt6ETum8zY4Bd7PYowGy5gge1HTKE",
  "key14": "5eLPjD32syV5ny7rFm553KEt6ei4aTNnb5ur4VQz7ZoLGnBd6uNUSWqyUDaa47PvbEuiqS8tNHc2ScnTfduFKNLb",
  "key15": "RkeoXuUkkZHLXLppJ6tEGAMABMQHek81rLjsoHykiT4nvjchhZrrKNL8SZaQHwyQ22nbwZfV5Fi5TwJGMEonLVk",
  "key16": "5pQxkGa6mdbJJ8KFyGhrSLwekgeeWVN7VRKvhE9Fs9ix4FhYjyYo6MBxA24yMtyiPRqqW1ZeXECwktFRUQw8rwqw",
  "key17": "8CNTFAqWHRctXdNetgCECTuVLyLDEpBhZxtg1jLucEC2GFXVCmtNwkrTBDKhzxMDe6bWYivLJ7eapk1tgdHcNiL",
  "key18": "5beVhrKJ7gsVA2xTZFoYWNoLHBkST15MafRn4ZMpsmgLrxEU5SGes3y8y5qWMxEPmBa4toeR1Zi7zCEXxXTYzWik",
  "key19": "5tp8dkhAWAUsVpPqkyZ6yuwEkXQfzopKw1fwewysPfUoGiZ1MuSZ58PgvJioS8PZaPkvXEXg6nKUr5cGTzZ2LS2R",
  "key20": "4RjXFfD51fieHSLUKL8AQspqvNVZ5Npty8pXWoXriAa7X8Pq2XJUZbbYosqsTaFfPFjhUpdGo4Jjni61PUAfCd6Z",
  "key21": "5PB3NPdSAc93z1BB1b8Q3x2uzKuowB8WKLHfQekFwnfRRgYtaN6A71UEK6wJpbhdyPh8FCgRegazgfLoxgckH1s4",
  "key22": "3smfMgoLsTexhbRcHrJjb2TDxPgpt7juwv8jDeTjGHXeQGUoKn6iKMij33udyCGJVbdyo1VDwriVATNrJLN6eQ1y",
  "key23": "45yRDWebUtQypSK9hb6Y4b32GZ3nQ14UQvp5cMy5MynNQeg3VTu9aJaG3nZzCvUBM9grwffsadvmXGYeLyTSNmfi",
  "key24": "4JVPTb8JTDAveLXydz6bFUz2AMgW5g9BRTZGxbeSmfSZrfDc1JaAAuP7TPTskgqSzfanj2853Y8Lqj9YoZPkiR2x",
  "key25": "35uUfsNBLU8XtFRxvfDbtqn83ibDC9WsLtVCa4LbCgSVUC3Adz9Upmozwinm2gXUPV3NTMcV3gSBQbHxR48ea8K9",
  "key26": "XTpyXfvmFFRxTFrhHjmwir8BHvGdey1vkBXnMBwZYhw8YFo8BbmVkFpPk2Fwm3qnWyJs6hgZvzEjN6HbcU44hjU",
  "key27": "29QbPXz8QP4t2QE1bsR9A56tWHSrKVcmzBQQbdgGougjmBLcpTuNLGhefEUyJbfdFKELBgBH2X9Vc6WTWeoK6K7G",
  "key28": "6FQvg1yt6ECqwGKDkoYpK1bEb9vCPYUPfFKxi4U8NzQCaHxV3LFQemHUAo48YDLZKhvS2sTfxkNjqEumb2fqs97",
  "key29": "61FqYB26TLvUBCHFNWEAVFN47G25byqanQ3YaLZwiU1SyHKZzEihntSrcYj5NGEXtKhmzjzBnBM34eWvqLFkPNCo",
  "key30": "5PHoVNNNwDSmDbgdGTu96cBDZP5bMgxzLrYiKtxojKgUzYA6aAcvxdGLcdpdDdgGof8ssSNwaHHdyRf3yUz9pTVG"
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
