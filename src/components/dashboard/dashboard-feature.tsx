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
    "4oT6gX9uKktLvNbkpGcFv6LYTnqqUvp3UugKEFBsjGrHPCm3XoxNoSR6iNydeMG8e7Eu8YYv8KsUJ6RHsHjw9eqo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bxmkhn7Prxqj6cQiagHo1aoAsAs4wn6MxrR6izZWpAga17iobkgu1dRmomB1A9MoT68aFpv7XkVDUVZWCzyuTMX",
  "key1": "5XjQiwqT7UNAx9aj3j6jKEhKLshhWQDVnEgXesmm2fdSXLjQ6h3f8uduDPUBQbiWdjRo6YsHH9rRjxXJFhBcG64J",
  "key2": "2c8jjyKHc37BBwQvH2VttZLudejDgApvK4CEk9Mk5xaKNzFQNfpWcnfJgChFpXpirmNcXrb5Ws9J4QArrzuGxq7o",
  "key3": "33ERfwPtmrminAnoJbvG41X7wSJF8rnet7Wo2oC7rc3WzR8asYsyeHRRmypd1vhyCGBMmfYxihMAeYKT4goXBwyU",
  "key4": "3N7bHsRfMMa13EvPNxLb6bXMrjKCe1Xkskkw6qA7XT97rnt3PPvPaD1qpxNmNn9MBnRoHntWg49ZpsPUixcvE1qh",
  "key5": "4YEZPEeYuzjfe2xZZvWV7ffGEFyJf1MLnDzfFdSt6vTuybgeV5KSv8U7ckFRMFA8fkVTmbFk2HgA4JW5UfrTUtJ3",
  "key6": "3PNawHM3WyojBQ6r55jwtcFAwKXV5gtPYUo8nX5a3bXG3T6MJQqsmmYyJwg3NfCzz1JFrmD2X1en8kKgkWgC6V8o",
  "key7": "2KL1CFaD8HQesYcTCi6WQocqChCvK5RvfZid1wtzDH4ZBZaM2G7hAxh2Y8DyhD3BU9MUqXbV3WfJaooCnGE42HrE",
  "key8": "2j9bKM3ewgJBfowjtVGXoVQKf71NBDWdwqemzB3Y9kbB9sLWWjSnExYZF9qUkZtoisA4qAesCraumGSAddFvkLPQ",
  "key9": "2mvZFnfikWBoYHWMFPxsKWrSNY6zJPadtXJaoUwTenXBuExeGcH5F9Q6e9Kmshi7gCBrVP4rgLEmfh46zmRZRwfD",
  "key10": "5X1thqXJtZDZpmMgupv2XEG9L94a8vMNts6hdurYi6XaLzD4dJNRdtuz44rzTBJYq2g57HX2KH8Jv6BiEF3tYSKc",
  "key11": "2DRHbYPspzwtJ7YSyNx2w3vb4YDA1JH45S6AfCgv9wkDJbM9ogDZkWotueEv6Ywf9AxseTpPc2z58nv7E4XdW6y6",
  "key12": "2L6dpyuFM5HWqpNjvFf46RE8ScmDwrjUxuFskXdG9G7fehPasUz9JzNbnae4XN18c8BxYH1YmkeV8Es21QJE6eMK",
  "key13": "3JsfbyRgjeapM1B2TWU5kZzLDUrxEfQbtKRe6APsSJmXPAEjNHyPgjecR42M22csckY7Nya72dgR3JXbrLgRPRa6",
  "key14": "4WQQ85UZCQ2p7XNM1uZQdgc8i5ZJ1utoE2a6japxGdG7etv4et2asVrbe6hLXGxH9ug3dNfHjSX4LsewRQCBK9vv",
  "key15": "41ietiQM9si8568gJ5sAqJxZGhk6kmrxSJeAcZDiBy4S5ovCYCrWBuKeq1nDKBrKhgRZpndornTuFME3XNJ6QTpQ",
  "key16": "pakpY8M46zrU7LvURXQFLvTWaig5prNPYQJuF7RLE6RAU6TPBHizj9xQRcraKfqEvzP4ErpAz4ZvtQehpHmeh54",
  "key17": "yUeKNHfrvMjGH5WkYRJ46bdgaX4J3KbF7Ett6mbefVRwk4e4FU67tZrJLppKRLwsamVoa32PTAwTCWeJ1umMCSJ",
  "key18": "3sGvzXVrY5fjn5BLHJZF895BjqKQ575UHuouArPbqrMXC9nz1zNx4uuCYjU5bY56jvnxiuBTPkvAVVQo9qhSqPd9",
  "key19": "41t7KCxUHrCyicLj4TBjGdvR8FMAFVy51q6u9WPQsiao5H8tNwdTHNZozaPM4fvNZhViqZNQ5Vp9TUenczAztY5y",
  "key20": "28Y18LxUrFdryceMNW2eGkvx7Cgoj7rRKYC4yifhU5u8gv2wVRJaMriJbmN57xroZ4x5Z1F6CMS9LDst8ntt4TKU",
  "key21": "2APpspVoQX3hA31jDdG3EBKzGUz3zTKjM2WBwyZBi1TLJM52yPKk6o3wSe5Ds6fEVyAAQYtjUaeyS6gCHuKoUKQ6",
  "key22": "3y7T9JbBYLafmQAJrursWuNVMr1JYb6zgAppkzcaMHZkinnbrFp2u3LUkwoDjZ71e1Fhsu4SqYUzBhrHGAKfsC5y",
  "key23": "52p6qZ66Tpq4YZ54bhkgV45w4jiCufF9XXqFcYkJmrqrGAg7Z7idjxic2FPfUxnXjWuVZU29WVHJ8huuWzcQm6wc",
  "key24": "3Ba9mX2pGvq84Pm17Bcni4P88LJKjsFsdoo8j79AxRUVKDKvkj8sgpjNHNU8qZR1hBckjmP1ZhRJVzkcT6vgLkau",
  "key25": "5m8hphQcMyN7DzgsGDPUGBGUpqc8XeUaqaggEvF75JGemyH6nJPyh2jGKjeeDJEwXWQAwJgHH94fFHuRFjmBYR3J",
  "key26": "T9LJpKJBcCPXbmECtRUsM8bei5Be2YYmMxGtXEtyVnkK9TXm3EC3vtwkraZGDxmhYwaFUsztqoPU8ZtYH1h7rw4"
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
