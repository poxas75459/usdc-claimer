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
    "4Xd1TeKS2sfou4de5RXbyRFGz3t8dVsLbyxYdbK8SMxz19VMExD8AmjatsFM4CH3XcgYjVcUK8SoFNjvrYzRwdsh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KQwSHrZ1SdCwLKQaBD8TkpUHQhG4P2B2v2t32yHJMTG9VswzwAKVVdZbJP2MLz2KtATdAwbzGRw4E1s3YkJ8vsa",
  "key1": "62C744JczkiixfATe9266yJCwuLwNNRLabjqqyhhNuwJEiQXT4sL1CUcAAPXofRWA3ZTZ9TD4UqrJVLWMKxwz77W",
  "key2": "31pb95ZKZD3QyWHeXHRkqR8jCxhvXmRUAQezb2iADMTFMBttJYo7x8gv9dQMMdC4fta1UxSZmTZLspJnArG95F9v",
  "key3": "XDaNXDmJTf1rHRAWv1UTvYYFv9noQRtrDQT7pqNiFYmgsae9CRWtzE4qJ4nyoVtUM32XXe2QSxebLTXnvFPvYtK",
  "key4": "4eyQDBzfzCJZ4Ren3z7CG5EsS2ziPymBuh2RPxNFmerdahZnVyA7Le7U8WCE1qkHg5rRgmUpeBkBhCFZZ7ozASD2",
  "key5": "26uYQWuWWM2uMvBZDAh9jrADTYGqohGYKPx2EhW2NouyX1UaYuzMyTuf2UKLw2AWBq1PMA1LqLjAudUmRbNkwUYG",
  "key6": "4YtvrGfaziEFTMVibMrAta76SyWfzWrZ1MyXpYNEuEMpKJQrFe4P4WEzvbqwkAbou9dBLhDPvXvtXmEqXZjitBHq",
  "key7": "4evg5EuD5Wxpk8b74e5f987MWJCi7gVoiVymit2Xzi4aPrhc6YL3kcThd7oHcuMWxUDVh1KJggb5ki7n1QMWzs29",
  "key8": "1w7YGf54MudVRE62f6xKoUrsD9VSPn7XcqHSbQLK1cg5Atq9p5RzjXpvgTSUT9FEyiakVnmSsm92Rh5wAHoEdwz",
  "key9": "7TzJMXr48TK9qGnbZQTpmUWHuHGy4nYRuf32Vm8aGJJrvUbSuHykXqfQpo9SzkS4b6epup4KtTUxLb4553Zm6Xr",
  "key10": "vMW4rtdY5mSQLnShikcXV7SKGNx4nVKNAywyHKnowxcZzwByaXVKT9dX6E6CwXGDBUSZhMBGy7bGWpRURZPbDr5",
  "key11": "4x5TkutFKNjgpKiGHz1Lcm6FZ7DvXMwxMvXuCsNDNkXHgVKKCs1FPrTWSu4d6HXukcddEzP5aSNK15SBPbQ11hLt",
  "key12": "4upZLmJydyqNi1HSnEF1Epco7GHzWpKz27hZd6k2rikWMosj3odbtKA5hFSNnfQHed9xuojJaSAshfcAwRtykYmx",
  "key13": "4gJaaUKrxUT3dfSLjbx3Md7GjddyRyUJdZVcfLkyrhUQY2uSXmQLPUnRPV42t6nEK1zeG9285iRZydXr5gzgoGZb",
  "key14": "5D8jpnHcvPXoZNRNPQHURCvbrmjist6zNgXNoQkw49rJqTya86x9BzntUfrhAXxhSnyWrtPyj2dXgato5RJegiNt",
  "key15": "uaZNN3M6qjMxf9u5otEaQ17MCi3pW5h5pu23a3VzAaGPBNCfACyMryDVtiKDuFMUVbnahi9xw4YacCZNhZpebFE",
  "key16": "2dAhKYESBnXangN3n6M3kCbFaaqzNbS79N5pQEWbkRvntYPr2G8vXktf9wdDcVnFTG776ynmo6YHgxX92rWTdTQ2",
  "key17": "4ZQabQSa6yHcg4usbspkdksmSAH8Xykvzp9TAeKnERKrYzvSKGXTkrMWsLU6NKkSfjYkv7gBXwFX2978jhJnCK24",
  "key18": "4X8brNHHxYNXimtNyJt1FVH711FwawaS66duCeaiY4ZQhmcDUEsYpJeotFLzTiQuUhYTrYXR9uN1MGC4pvgKozc",
  "key19": "2KcSEUfX9eC87fEFGM6hA6dVPontvN98rR8DL7aMi96Dz6ZGoKbkBEoFSnTvwTNraytmZ4B9aHXqerV39SVjXopJ",
  "key20": "2eiD9FoqCNmvYEHV7Pkn7VXM5yF9PqNCNjjZd5APabmz4ydpc9pePMCLNJhBYpj52ybQVCMwktmVqgHkyWSb2Cvt",
  "key21": "3dnfsjgmrDxWxbabmd59U1SuNfiabW3DGhNht6hAaUFCKCz8wGzwYkKEVbEiaNZu3WRms3QCELAU2wPtUaxCaBZz",
  "key22": "3LZp5SGV3bxEeqQxyujKieFLNcugL3m1oxGjXLW2eRPVFg2NW7uhLDBXX8j4pbwUtmXFazGfa7Frat8XLAwcyEj7",
  "key23": "3EhWqTPuYGPuXJBWqrG83DQ1Tb43WCPC52akehY4YMUwB4oPkFd6oVDp9j9kPzUwqRPZR4gKgJas5axDM8TDyptd",
  "key24": "YHnZcUiV9HXm3ebv4SGMNKoWsacByqHt6b22qVjWTjDhQC2CgUghZMk4yVoyvKUQtcnMbfMf4z9BrEr9i5yN4hb",
  "key25": "2D7UR4bVstTKkRLL8PDrmk1A1wavmCNRWvCBc2WWgqYNHAxpodk6TctgCZw77SxjyJRdKVdP2XExAQv5KJHcegk1",
  "key26": "59qrR6yzGP3bawf7ggttNJFbTMNvE3SrhdegTSjHLjz8tWJN1M9WhnxnfiWcETnZ4MFCTnczGGD5xWaYD2rXrWGC",
  "key27": "eocZ9ZB9HtUkJ5XQsDerx8MNS3GJuVHBWLLEohhnZDTuRMwMWZeq1U8Grz8pVaMuPEpm5Dkjp3uX4H382EHtuxQ",
  "key28": "4esc1ihfMBcSKKaSnVvktmyXiA2RCghyqmoCHEDQYTAzNKs63xuYCDGJKqbg7imTzqAk6tuNrDZg3ZQ6DuDiouHp",
  "key29": "2iFkBMYXfr44eyXqPamsE7SzKjjJ9bxKT7BERFf9jaMJgU1n4e8tLg1aCCtcX43Cjs61omBnzx1UJjZr8G6dj8wi",
  "key30": "prUZXJzCKdQoCuvn5xscytm881UsE3aTBGDq4wcaJrgwH5sSaNesHYpv477LXQVd9HnGmFVbyti9GXuFM5CT9ZJ",
  "key31": "33aDvANtb9EeLfX945Afiru1E7ifR4tToFvRv49dsQabm3QcsP5AAyKwAm1k1nJGiGaZG7GiQzUjNSfD2VFjSYZw",
  "key32": "4EeJU1vwC9owjw4JMWGMy99BLrhiEcYP6fEsJLLXuWwyxmYjso5P46ccnnXioPWYmnMYWRYiyCQRZfE6Ep6R3V4F"
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
