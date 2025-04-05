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
    "2xw87PW52VZx7ynGaPt2G16Ysp8vY4PDWkEuvPEbdWJB6jMnckjAXQ4EnNJD9fp1GLEWEqAcoaa4KsEmv6CVz7Qz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bAeF1MTvATqBDN5hNrBNWSfCMt9aRYqxQmrqoaqDTPsJcrksActJ33LYUM6C6r6y2gjJ2zyfw8ERFG7bs8ZXzaH",
  "key1": "34Qphx6HMvMoDDjtY1UpDytY7SCk23KLJmViavQDe6Wbmg2nMLwqFoU9nKBZz4E52KySQVuXLszF7uAEd8qhUNsP",
  "key2": "4ts9bv94g4Kp6RNtwxtKp6kvRhXvNrYsLp5YEL1U5RyBgTTw1dyggoaStkaKaiXMCTyKzYmGnbMe9vWQdhjGyYLn",
  "key3": "TRs77PnaqBzQsxs3YrEUi8RELEcbCJiYvTjgXXiV8HE5wH33T2jwyDsHL8ph4tSuLApqbC3nqSbC6GyKL6hAcNw",
  "key4": "Gtu3N22qma7SadiRJbkR8fNHB5s97rX6E77YFsqVSSg2AMnGSkwgZNuk25dpaQvBYaFeycV9x3kfynLT6imDuMV",
  "key5": "5DiQ9gCT2pTZ5oxayNb8rPQyCobjuAcTEEt5W2hjGivH6VjvTz54UhE3Kf1QXi7hK9qtdRESGi2X7E4PTAfVLfjh",
  "key6": "3arv6msL6bJxjZwRsKSCKWzbrSTqJKVRZFTNnKqbTM7ctU3eBsA2RA1wA2NR2ekqAykf1VYhA5dxgRPUYvcQrKjq",
  "key7": "5tYod8uewgMMwbcTxnZWkLS2TnZURsDp7YhoxUd9YFbFJotMxVxssKfxX3RyUHpABHa8Ys8eZQN1NR3ThJjFgaPD",
  "key8": "4gSYstYdsXpKALu2GBFFRB8EH9cZEdGNAuxwgmch25mT9GmGtEMh6Zkr56At4wg9MA68mqn1BnAsJwDXstq4BrJN",
  "key9": "5iG1q4zmMH7TS1Q211Eat5sR6Jvcu3A75NnzEsPZnSvEc4JM5zuiDqXVp8Wbv5t88k76CTPstjcfeE2qtUnaYZ5K",
  "key10": "5HGFh87N1ybDvAWbtY1LQ3sCbKiTgFSu35jnKXHQNrCPkvQotyMkp96zYR1Ws4xW6W7Q4EWFbCCmKL4TsXgK6buW",
  "key11": "5GMjTVAoDzepzFofpbkKRJQq6roTrGTYovsF5RjR9CxiBMfzefoMA6ozzbivTv3mJEWBEvUVMunxoh8Kx7YCmzi2",
  "key12": "4iKSsiSXHGwBWThsSUBTtBk2U1sRsYfYdMprkfLR8JtbmAQCvzptsAqRkdmy63dw2iy6jDepUZvBpFzjzuQgJDMz",
  "key13": "4LtPf3jwsGwcnKfsKVgXy6b4x62zwFTUrSNqRqo2nY3oVRLCVdawYEHQGSARUnRmBm8yUoiDkBgaCJwhDp5MGJWk",
  "key14": "4vCdUYMgXnVqPrhmJgStVa6cCsbQw3kRktwkV24xQQrjS2fiARfCqpZ1TncoqDX39sf2CgVtWJL9d6LgDKGQAGc3",
  "key15": "aLfJNJNpbofVCS3dG47HbB1xJoxLyDJXQABqueftPye1C8cb9k9fyRJzH1Fin2nXFuxANM2zv9S6vSQ2nwVFw7J",
  "key16": "5u4UQiiSQxPvEVkaRuMJ3vuBgTFYgyScsDVNhqENyuqrddPEXoHNktzcuic6HASEzNwKJzEnwAsPujsSFhjzcyv6",
  "key17": "5KjEsoip8taMtvsBSoDnwpKm9NCmSBhJx9uMN7gEyEvvF7v1qqSkTjKjT6eHYA6CJpCX7WSaXUQJ6osmJuo73sNc",
  "key18": "5BCNyXKsmpsVk2LUuQSm71GKwo7gXuPJX1MnGy2Yt1YaDmFFCFSbS7XNHxsjCM397g8r8PZxZTzdypyPqePmF59B",
  "key19": "5sWjwz5MRtXxCgdHmFh2GJj9R9GE9PRDFWaXWsVokiWXUPqm6UxmAva4CH8Dbui3RwkoQUUkuYvZDMajmiiip7Pj",
  "key20": "2DReGLXvcDahxAMfahFfzKuxihwpGgMS9YPn99tNnh11JdwChSsKZxDCo4QGFgk3gHY9jwJoqSUf1aceiTxhJo4h",
  "key21": "49C7grztcX84UQV9bpiuius6PaG6UomBVe83tAoNao6weNvxRzeBVWJVXaNkQCx2DESdbqtGyR6zNiMXSCYtoxUg",
  "key22": "38mvynWXT2ACXNjNoEqcmFGx6ENjZETTTLwCJdspJWnqgZXEcfu9ZbeoWp7S7JjpwgJLVKjY5aK97Pu3SmAwp95q",
  "key23": "njWbqB1ASXYUK9j1aKh2ySdeNqM8iiPehFwXJ5o7vW2QihoMqbDmx2eViqWPThTGFRr2UdmmaP1uL4CF6azNKXC",
  "key24": "4WYJxDkY5Nf5yf2HitKmhQQAqS5o54EhTSuQ95N7AWemKDWnxvu3siKMrJf37yJ2uVGzA3CiLqU9AzB4FRWw3QY7",
  "key25": "5a3LTmavP9N12AneHELDw9NyeyjGinY2tHJdfAMXwb24c7nomN8JCMDBkV7VJfzXF4iHspu6P2kxpGeqQ49UZje1",
  "key26": "2kTRm6cBoXytqjhUvFeipcMmJnDPai9JyxUY4T29zg6WUqjRUNsQKL8Xrm7BTw3dZybW3kqt89Es7a4E7h6fpXrn",
  "key27": "4uLLLh9jYyfC7GBsndt8qhtqyRLQAMBVE59aDToNWjh9KbRgMeQpXRhahfFde5h7izjCEx17FmLz3a7xc1BxuFDR",
  "key28": "3qTfSfgnDgu3R3qHGX5r1AEUmMpj8HJ3NSF6SwW42jFj7Juft97goQsgMKR74zJakF75rr7hd6Ko2ADoFwtEsjRA",
  "key29": "3SVFSJnGEKs3TJ4a3LbMsoiN726G9BLLwExXyvgA82cAzsPPAgG9Rwnyq6Y3zcmMB7UBXBiiSA3QtWnvddyCHvn7"
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
