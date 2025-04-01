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
    "2Qjt6eeGq2ir2SD3SrHaBEuYKXRqvbnE11Ba41xFjVtx7gEwa9QMVSMso1914j78iG8nQbgyXTr5dVVwZxJCWSou"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y9EM1LMbHS5vVe82evvsYSPLbU8HJ8Mhj3cVYwUF3E2ec2mSaejFfheiDYGk8Hk6gQp6pivhD5QzkV7XbanQEgh",
  "key1": "4cb8s82ajWaYFbACghCGJKoVbm4zTHvnLH7uZmzsx47Fhy7wAyHxBRpowZSq96mUBR2RLGz5uuxzRCQyxm3qQHTe",
  "key2": "293fPij5mrzAN175DR53erjXiNrQu3dLAqfiSxhnvhbRHYpDVEsZXz2PA3PUPthqtcfS1i4Adp1tn8Jk4vme88sZ",
  "key3": "2PgbnJJQYSMqu1jYUcodh2jRjYGpaVwdZY9KhDFSBaJUqSx3p1nFRnr8QmsXs3kje6YsrsZWKWrJB9GwgxZr2FTQ",
  "key4": "5FenFx5PaDNboCpWevRBDWLNdBqiEtUdc2U42Z9WiciWwmMPymXvwnkCDrYjgFZkwdSi7RWpkTC4KJsEVYRaUpgG",
  "key5": "4JMC2dRX3rnXzW9QbxgtimE5GPRU2pgATpYFAwX7cRKpsEQUWs877CCBAzfwCoeWYDiUtGbJ5Qb1QnBRrgAFnkK",
  "key6": "9uPb2zTsWaB8AETFZcLa3zvzrrN2Yai4F6LzM3FQu93vGJZW5titdG32sq1Y1TthyhmrmmZcqdAWMPFT2ze6Wuc",
  "key7": "2UnxwSUX8VxW89t3h4rwP1jTUvL8DCXAM46eXyS2XUw48Qv7hs4NtLBFAdWT9Xp9XZXYTkFpHxTDuvPFSEDC3Dg3",
  "key8": "55sqVoLPR8YSFpMbRyYv9CJjXuPBeaad48xhfatncxYPmSQQY4kCTm65JoyoRdqt8yhrY4NXL4TuD9qkmV9VZoRA",
  "key9": "4gjE7THgD3DMzfhYWaZvZygNrA5fqgAsqsj7sZ4xZVfRtTXwq83pCJrPAyZB7362qng4T6BzkbXinfRGCf9YqqLr",
  "key10": "4Jx6JRvLgWLaoUAywgVfruuGJkpgrX7k9aWT8chUCCpooujMURZWG2FtqDVkTyE771xKDZ94d61A3jGYqsPLbeCm",
  "key11": "9Y6dKw6rxYz1Q8vvH4vciKt8Uozxftxgt8tT43vUUe4AtdGnvoBd9iFH15cjfhtwarwpsWQ4yKcmsc6jeUL9fPL",
  "key12": "2Szbo2WB6F5Zn8FgsuLVzc9SyGkvkQonvYnWMff81UPyA9CBgX21X26vZK4QyFkQPyAGEsftdvFdviJe6EeEbRSL",
  "key13": "E1tiAxd16PR5u7MyLBDXUqzNRszQF36wg5DdsRiFVxZG5tP4j3FVcz8xGZxzx9RcERrtssrqLX6n6BSR69JRdPB",
  "key14": "Anm5vSiLLHhyNvVzttBKxxdPARXVUbLYbnTNzDkLEHRhenBAdWs1sMFgnQmfEjKFyLwnUQNFJw7AtEt46y65Y2M",
  "key15": "2vcd952PTfNvwqWP8tN6aHpPTjMcQ6d711Akb6PeMDhV1jDV3C1tGDv9tDjjCbb9ggcNAGCdCR7FFdFEZboJ5tqn",
  "key16": "91w32mMwyq2FLTHpoJhygWS14asiRM8hxdF3FgaFkueAQea7CjPNAqxhWNCtcWeCRkmXWbHnE1b6joyWWL5HyVC",
  "key17": "2hjNtobY8Yyx534QMXsZCbe5zfzx4tQYuCK4rQTA63m1xm2VBKLRXgyTx46hHqU4PGzDTwUPEsAdt63372d738eq",
  "key18": "2JSrL2mQKma5RwiTu4toby7Frbwq294Cib6EGUxf2mxUAiBDyYWxjeXoh6esLVJ3kPrKc6jwWu3YL9MXKHhWcPUX",
  "key19": "h5d6nDgjtss6duJNPubUiZPZxJKE9ZD1WuJ1YMVPFyqW8dNncAzt3hHNEuWpfSiSdQzq1huGmnuJNNZNFNMHC4T",
  "key20": "4DshM46daeRFNTXjZ8s8ewv2ALtxNYjr8QpE5r8i9EWevJpitfjyABtbpGoSCeYrncNFeQnrQhCrRkPM24QjzRgs",
  "key21": "5bMcz161y7aamdTAb91XAF7GqkhD8yThNmMnDj7CYoQue7J4pQtVykyB28fidtGHtk9nPmJyyMLixXcB4JFhiF9P",
  "key22": "4SwvDwuvPxFuCkUWDKCfeEcUpJiXEh6g2c7erruDmC48BLKJGR9b2nirwUqAV9XzVnmoNgKxv2ELSDCWuUUeHFyr",
  "key23": "56Mq5jmmMXWneRmbXJfGshZxB88SM2L9YLh9stbBF7Ye5Vr5opNW2VVkmiEcRGaZgfYYuzAZhjQAioZjXKPDstut",
  "key24": "5DTvwLwUUjxrS2PDj4aBHmSvGifMLDvxri7FMJRgwhKjrv5eZVPtx8queZjD3YxzEvsCm1DnZ8eu5Dx3aNQaH3Nb",
  "key25": "4YWRAvwq21uuHhyNm4yBYRcdQM3eFJsrRPEsjVtkpMWEk8KPVJnfNvvp2UhLXYoq4aChMB8PghizJ8xRVHU1vybA",
  "key26": "3JhQVD3HtEUAQkiESqnK1qhG8RQaP9kytqZQXqcfNzFkJck1PN6iQq3xR2Xt5BPa2bm5nNRgh8BnxrrhYkubFyVq",
  "key27": "57F3Ryhihc8RRc5uYZhFrPHseFF7iEoeELPUuHJy9tgcZWanXzMxp7yGAtQRGxB1kJoz7V9HJTh9yCWKVJShTgyH",
  "key28": "5EvWE4VhvP24ZYtMLencdPoMpvXpCZt4SgLbE4t2DT7CFVdXX858dkairXTearKat2hPTSXjnP4nD628dnKRYzrK",
  "key29": "j7Vir8jXgAum3u2N39EV5gssSV1LfzrS4bF84wB6isdMnRFDuVQqYKUoZKjc3VSavgwJM9tJzYz5Xjf8pR8YCgs",
  "key30": "3ofQ2SBYxLc8TatXuaDmn9FBEp2MsS6y2DySXuYZ1Tgu2pNqWomwWkNdACotGd3E5PpgJTjRfV1mrNxU8MCETV4d",
  "key31": "65go9tcUV4bQhd8zFrBq4JAX3kKoKtxSXQ7cjyoAhBtrYFWG9QZnTqzkpH3HonfsrTAGcguiXSkBxfkAoLDCuaBe",
  "key32": "4XynS1CBQyeJGTU9PtCQcghqUhoBSBTY7jafi2b9GP2ozoQV4G4NgcupiZq8JzXeq5Ab8xsBSmpebW9db57w27N3",
  "key33": "58mtGu4UmrkDFYFXtGT9Xms44Hyeq3x6k2bBf4AQ8xVzwM8QsayZn87nmwi5hWcmezWk51jL1dXp6DtM94UVE8j4",
  "key34": "3VbzsBHNMfXuDTYFNJGwLXMMeE1RAy7hu1bcPWZ6LwcLmFJRbEYkuAykoEZRsuT7YsCr4LxkbxDDGsjME1FkVpWd",
  "key35": "3ZrKkGRxVn9yvZQQ4n1RPSN1Q3yR7kDgXsvbyVfV5MvewRkkDVhmfC5wL1pNMtMyXZ3bnHCZNoVZRbsnw3GyQ7vk",
  "key36": "665s9RRoDEWRs9oBSdVTHJuiuTiQmuDUV8VGbm4A2TQnt7FA3vSVhri1T89qTDYju3rzfnNpvUuJUsyZTAHqN6TV",
  "key37": "43iwjd2RkNWSMoA6csSxa24psTD5pbJc3perTFHTkhA16pfXum8umUU6LSU7sunopFbjtVAuLBUrJe2A1rVUGFjG",
  "key38": "duSKMdQojYnnfdwfE2yuaSTLroJhUy1gzKeHtdVDbJYt4XGehoTEzXhDBKbwzQkF43vwhTWPVxgYyChZXgYRzTL",
  "key39": "2xHZKoJmSH9Po5sbQbNsQysBGKJM1znDhh7jBRTBG96BcgR2Uvy3AZy6BRLsqAZWFakYr8Q939d6j6mvaBcpPku",
  "key40": "3jjeYttzmVoNx95ai692scnrv16M3fi3ohk4MC9pszNP8tyu9u1t98kG6w2rwc8fF5PRJWr83Du73zDoy4Q8f4MB"
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
