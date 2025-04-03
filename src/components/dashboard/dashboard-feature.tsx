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
    "5sioUiWQV9XNFhzCbU3gZBBokjXjave4KC5JRXzbB3zRZRSk8RkbcJzDDcpSuz5KodM1fsv1ZK787FW6kxEp3ZAP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WTg3M2rQ83u7V3nxdA1N4NP89c2bvpP5ECqv2WC1FMvyrmccLQvMbSxb15wqQxa93amUXzLkSbBFz12dz8b6QRb",
  "key1": "2Q1s5SmbC6Qz5aAei6S2dqzm8aAGAbnMxVMn7CanUhqNArNzVvmAZuMgjFvu8a8uMebvrpoRjdu7EJgGyJMgT6p1",
  "key2": "4Aqspg2G4LPGDjB8mrNhiA3VTzQP1bpeLBdFWX6YFgDy1EVkTg2ebep3Qv189VFDJUhc8bqCcDZAhV96aGHfwDRq",
  "key3": "5Fud99hBL9HjB6GFLdiUWuFeCkT3zV2fdrdCzxoXnvbHaFN9cvbxweaf5ZxCgb8hcJmFhZwRoTkhRbKH5goYiTwc",
  "key4": "3FXAwhGJkeJ9YoKbbm1WUJtz2cV34hDsibQRk9DnjbQLxSJgzKPeAMVb42igSj9m9PfmyLM3zKuVuSSTKS2HA8Wn",
  "key5": "3CuWkFGPXoH8pKUGkPEMZA6EaZcLWtR8crp7imuYhLrLPm4RXiVrJ3uCUs2po7aYftS3K94F159Mf5uZA1FuuwN3",
  "key6": "53MEy8JGzcqEb6qSBj4mk8rDzaKpwabuUHt9cyR6Ats7uSFLgXM6ssMA69x8HxSpzSrVH8t8pksK3rVv7j2qkdzQ",
  "key7": "5QH6ZLh8kH7K7maRZT4f5umb6advEMaxo3haHrRrVjwmH7Sjm4i3FDJ2kWbrRL79QcxXQzLv84nu2JiYLe4qWy3F",
  "key8": "2HbZzZM8gThtKmeoQu1iQSnteY4CXqi6CwjLy8Xv1nQh3Euz23H8Y9zxqYmCHFrS9WEKf55wEd4ernMS9tqemVMg",
  "key9": "329Ws42aRnuQWc4rrELCuYwqXc656ks1J12Md9eAzxChqhE8HkAtFXH9sErSigQrC5dbL2Q19DYmvmHQmLSJ1UEX",
  "key10": "uGKcTuBjHngR4WgSEi4XKGET9CG5ntwN1xCRTp8T2VH45thocPDyHUToQbGhxFsgcAdBAkiENTnxZt9jXdF23rK",
  "key11": "3hPvmqpocYcAoqCykt2e5ab2WVCaaUm8iCenEspBJwvo9KVo3ZTZFhJ6AjqZLwTDAE9RTo4E11FwGwVa7Q3urY8w",
  "key12": "2DKqXWTK61qiAcdNjEgYW7DNJWa65bRhXfGtbSz93Ab8A9raQnNKwvp3RKm5gZd9kMupYqCwTENjc6YE9oHdoiNa",
  "key13": "5pw5dKfv92Mmmoc6y2UtbnWHUs9UP1WXigjKagRGCSREjYZE2vB2EyszeePXj5LwDf5S7aMNASpicJN4yxaevFKY",
  "key14": "2j9r7GWXC1gqjFpmLyLZcdYJZtaehqknBafzAuHzsoT9F1eYBEFfw5VpJrN8sDC3u5w1Yd4nbs9tcbntXMCEQEcx",
  "key15": "5PiLmmFCDQs9ifzdt8ZUFWgzx45EAygLHxZDPXsDYJmDXTQCkpScmvqEwax1tNUk1e7f44UbwRfofu3nse45LTDK",
  "key16": "9xL9jFDrZv5gjrcwxUf5mCDKLee9N7z1HGqJAV6AVDwnNVLFVfcZqmQxRvACk5Mp2FP1F85pD1me3eJKGUrCRRR",
  "key17": "2RPLSwrgAurQUfsdPpw2iiCyp3PzVxfRQXPwvapJKr6GeXX2TZMHDeib8VHYVPoLgoFnkg82MEW62rkoNcbpFSpE",
  "key18": "3DvUL2SPNenhRdzYT8vnkizEaUs9mSqruR7oQgCBbuYArS1vsTn53BhqEyEdqPfYZGNZXp28YQVFgvPCAx3EwZY7",
  "key19": "3YdZhBmz8fYoxRQB5t5SWtmyh1NCaMXaxYdDqfr272jUNqkuFJLrfU1hca8b1H2igyirsFZWokMg6quBcjdhqq1A",
  "key20": "2jbzkYL2awJDkuANsLoCfnFbyFkT2TWd5TCndnXUZvCJgBZjZ4LEgMzYrTV2RyWxWPtKA6K1vdjvjaNmEz5sGcWm",
  "key21": "zYNfomhoF6heyfhKsUetYEvPUMEogztTd3e8QdYDnbNomx7d2QgszSkES9yb9Pj87FgHGUBqa6AimXTpC6t9MVv",
  "key22": "3ctkGXnMtuTgSTJEr5rRtPzofvNCGGoeXvvHtQU2urVpzpknqsqDpBevSNkXQwExDbsrRyjCKNrw9hDSTUcyo4gC",
  "key23": "3cGAKV2rtgzC7WYV5ikXfGcDuLEmcNqWN4d3StFJszaYVGRVgNQshLUH8HbE9VhtciotntqfZdtUW4szHxfn4BmY",
  "key24": "2czNumzhFJEZ8w2ZuHcriXk7aFrjQjZZZP7Dvd65E27mSzGPue9PMLgm3Jus6jo4pd2DT7E2HDj6kgVuFbn3pCyQ",
  "key25": "npk6QFedBVcdLcN5p2Ry1THQMAGSexSZjejTnTzCHh5MWbskzS8p8DVry2rKAj4mrDdzL94ZU1ttqRYsiBoGMkr",
  "key26": "5Cv8xrAonFsNhFJg2zVAZGuT7oGfeE9oEXzYU4qMMLhUbigcSkBPv23hdzXmhveb6AW17H1i7NaGrKreKMnaJE2C",
  "key27": "4Twp7ZNPD3ishjcuwvsJBYxC5MTfF8ZyVwrWR9gAaYjmhW5MUaGXHyeyWWWXKnR68yytzWjWtk2p8CKuabJnE8TP",
  "key28": "ds4HYhDWLeBewHLfY11YGsjDuUJSgkPXJdcWFntRtRkVHkBRxqgbDXRSK7uopRCxSEeNcW3XQgndRHSjywfN2EX"
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
