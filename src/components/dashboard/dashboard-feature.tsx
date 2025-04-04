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
    "3AE1DVia89e858XRAqwQwNhX4ikbxwKPj7brG7vtq4sx7LGHkcU4xa94H4nKdTx9AnqtPc3z8tg95hVCDAsfr5GL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xCZRCV8ixZVEoQrs1THp2K9cUZWPiUtK4a6xJ2trVzJaaJvqZBPde5B4pacmHgBCdYmWCKomFH8s6BenQFZYvtV",
  "key1": "5Tc3TBAS6cPxrK7N8ey6xFdjMoqBe8cpQmeb2CAXgdGGgVn6ByvK5Lq6BAPvYpNbjddf3x4twJLrwo6J9DJNXixA",
  "key2": "29vs76hhZkc8FULMujms95TymuxvqBUDC9Uk1o6tbheua5y23U3s7Z3di3odjRZaKBygU4xCk9se6gdancMFVqkP",
  "key3": "4fC4HcXigLabQmwRLvg4QpJAc1cBLnAXgUuYoP1h1iYPjmtgM183Qrf6rVCDCjwmE1fdmkAb53dD7YzUjeufU5x6",
  "key4": "bFHQPvLXapYRFpRExYynTqzDxsrskFPFKJQtT42RZwi3PVmx6MPYoJVaX5MUbv6hZadtXZMCbsqwEDrTyEqu674",
  "key5": "9wkx96rNLSirUMuS63LjBCA1Qyi9hTToZKds7kef7jX1fNvEVDeu6giswiqowL2C7zUkMWGctxVjRFrsmj6674G",
  "key6": "4tgdAbZ6Tebrz4iVLZSpkZMCo6X4dcu1YVB37359vWgGKpArZYvwwUVjhMw9Vv7xfzyiPYzUU2KP7W64C3bxhZyr",
  "key7": "3epazbGGVhXZ6p26gEKg2hPW8qa9pJ2bLGwtCVSh1wegpqym1ERqG3vtFUcF3ZwBRVhDWEYy2KU4rUtGhbEq2S2S",
  "key8": "Z9t55sxJcZSDxLCAs7sjiEGeR11Sb3wgiBben8foqH5crFkNdzGgafAXVbKtFuv7zvMS8oRZSVM788ZPbzPNU3v",
  "key9": "4hUEuUrTU2cUPChXHAqZm2DqadLwHdnjjGnUV7jqBuB3S8h7AAV2r1TxYUWgm7dKNAohEMrmxfnTXuWNsJCFaSmP",
  "key10": "3hWHQKYwDsfhcmZabPaN5PhVsFzXy5d2TztuSTXYj81kFiSGdbrS23WPRqwnbfiUoeRMKeJHDVpvoyrukPVDF6uc",
  "key11": "4jncCY85df2iR6BJ4NaGzY9a1PXy7th6yrgpPacEbY4fzxAKJiupkBvQXnpGpgoZcEieBeo5YyRL9s7rcwvwirtW",
  "key12": "2GM8jWGxpCq29h8jvG68yqkMpib9wvS1juvXvj28Cey8Q5Mqcu65S4nonRWFbN4UkcUuL6fMJz5fVZ8RLw9qnugf",
  "key13": "51Zgyau3dq1bb2SRFNTo4EMdeJ6cpAUfbaNqBZsJvNzrf3qxwExwpDEPL51voqraKgevL9pefhNn3iPCGjpbvSr7",
  "key14": "2NvnLrZme7LmmmfXVnuYps8RZCc3dL4B8Rw5EXo8HFMsV1dJh2pRDh6bLiQC5po9SLRX57YFWtk4HTuTwsmhACFa",
  "key15": "2XKffUJmDBbXVtCTbrSymd6NwgyeGyw3i4WHZJC9VLz1h8896BBvji7vz23ssBLvhJyZ4dBpQT2XWieydkeKy57V",
  "key16": "5WVJgdCLtv45ggDd9mouMGQgSgtapZqiArorrZXCoTveApuwY7NgUssopeoT2BSzjh2uMhgZM4b1QFN2i4qGDtbv",
  "key17": "3vSxMUsQiqTm6WRVuKeGRVdxDArqi6CamYuo6aAgdMRBJRBJ81efhMZtE166XNAQkF7JJCnpeZMGhYVThnu1KRuW",
  "key18": "SnuNkUvAhK3e187jVfsCkk596DLLVqnNP8joEZgLvkaGAT2Vf3QKkJEz3jQoUzMLAX8ne1ww9f6YxjwZ2nuAvMf",
  "key19": "8PE9xogoigyJdAKnPZz3DBfx67ypDMJ6zphYxpMscnMAYLoVYm4XgcR8o9eMbcsQuKg5kuAkbGBS5JPSUyh4aj3",
  "key20": "37phmgnH1Ynmpyc3Lkmd88Cg6UHwwCt48D4eD6KpGfB54s9qqh1kRoGrWZbRLxHzmix7dLagNzjmRPHqEqxmm9XJ",
  "key21": "9vyGDGYCRwtfpeT5vJnMENiAD8LZ49HeLUQBF7HKxuNkBGoZu3tPhuf5SywQSvSQuz8hkArcV7TbU3ph7ZxN7j2",
  "key22": "2MoGkFBNb27RGuKiBSJtHnssYq5i5uFJahCRVGBU6KMvGmi77JXre8iGaVR9kea7Ma24AM6i8fpp8WHW8xWEoQhi",
  "key23": "2X6ZutypwFobCt9dR4uQ7BKHUzoxbzshyoMu4LXAM5qWao1G6cxhPEtYYcJVCuj7T77vDBH2j5TShBKs7Pnoj3mq",
  "key24": "643nL9rmNVWyCgfziQD85qfgQZTrDibwjyF7PXMsooasLNndGAxSgYHWaDdyzEUSvpttxoBFQPzQVLS4VB3dF6m7",
  "key25": "3mAGB9VcYSPEbnWWyq2QtoM9N6sMo21gDyKY9shTGKdoiP3hquy1h1F4kSLmGm1NMHm8iohVhs6uW7uHBzyo9zfP",
  "key26": "3EbGFY4W1GCg7vz5UVFSDpyGHNwLcoW3VkyXRy5vRrG8frvufbdEz8fRVquaQYh6HAehaLWxZj3xRBiUEKH6XDQD",
  "key27": "22JM8Pgj43nDzfaEwkAS9nd8vbLW1x4HVbcrXiNzCsSUgohGETXgqkUGGUgR9Vz2S2hmrPMjSgaHgQuJQv7yxUYV",
  "key28": "3jCE8Tdeh2bgfHJawusFkn99Ep7YXMDvJmyowvf5H4ef7gvw4ZWkXSHbUbUPp8sgD2bxLq2FP23QQTaY6nHruBv6",
  "key29": "3QSC6FBq92TneEvENfmSw8BHvme4ujZ6Hx3qXFh7fH5aHz9u3buvKCr2kL4gVatnwSmsciatNEoyUpfeFJUW6unW",
  "key30": "22uoP2zTZy2irRXds9o1z4WftLRgU7vWayafMdDCd4hrF827Yjxf7Xd3NRiNNfj88rA9PHE2PmBtzVDyZrUhR7PR",
  "key31": "5xm8BzZRreE2EyVVyyMeDnKjF6ZvnjW6vuPTWiyHgkA7caaQRHsZ4GDeF9e9NTyHxYqMjSiVpnn667jhjr4pfzGe",
  "key32": "5cN6emoT31ZhHzG9nZjTERwqpgXyiVHDr612TqyXi6Dd7Ks9EttBieAAWNFwvJ5Ufxit8ZDXgn23Z1oi9gD8YMdq",
  "key33": "28rv8UcxEEXyF1r2idfMouVd3wNzk2RvEUSh5RNXBTPhCHwJeiaxGZ4yU3jaDuTWq2FaEojU1omkfWHRH9GRjGSA"
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
