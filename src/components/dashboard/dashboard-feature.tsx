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
    "5AZGrrYBhYcoyCDXguThUbjarxauLfHZcctGSgng6SCLyfSsRpReRKhT1tczARUs7m8UCJVdxVzRFZfPpJxS8DNg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9Jqp39uDMgycFXWUMppQYFHuE3DBDJDQmFo3p8PiAyUSrANUEdUJpEDECVoausqEWaSDBdjpB7AxY9ZhBKPi8BG",
  "key1": "2UDWqoMS31xLCgiwd9zWgHpy3H5Lp9d4NYGxGpGAXiM3ofZX4dDEwRBY5hjk1RRfjcEsVfRVRsM4WThfbEa2idqN",
  "key2": "4vPw9WbwAfNd5Gkgz8W8CSidh8qss1RqCH23oszdRCa4bnsuhW2S7iVjWLePPADAYbWf1CekX7AY4yeK2uz4pdzZ",
  "key3": "2DSZAj7uh2fHdvykohwFZRxb95pVTf6vCFMcz4o2kpU4BqPxWq9xcA123WeQPcDQhnjm6P2x22Pz5YYUgex43AZ",
  "key4": "5hzmDB92Zm7KM5skPAoaqbw3HdZwZ81vtBmGhATPD4n8UW2izaJ1KJnbom6aM2RCjAoeaPPiVyjDVXwQVp7hNC86",
  "key5": "61pp5XoqzJxk3SYjvTko1Q3ivEQYjKbGHtXqynPGkyrhdtkR49uMCg4dUZqDx6rY531btESUeiEgcXXorzmMTb4B",
  "key6": "5kXavzBR9wQHYAvG3vEEcZonucAGWt7vRszkKg74A5Ww2stt2n4bwfLYpBdZVTXgo4K3k7nh5MESx6aerXQBZjs4",
  "key7": "3sgvD38SWU2wUj9Wrxbg7Z3Ufq9gPGQGME1ZYLTrNN8G8WEutjUfy7S7oJ3PoRfxsypbLYKofyCQ5HpiUCvHqBHM",
  "key8": "44mLkMnpe3faKfDXNKWo5j1Kv2N2EV7m2eED6sCwUhqAAEaXvXTWGidQTiPbT6dcUGQ4d1kWzTcxurL2n1pix2Jo",
  "key9": "GMpKh2BXe9jaTwtH5CfcC88PCqebDewj6prnQS6TW3zJ5cA8fcwB1SQen1We17Y97mYpxkL8uNPZKvzGkAPLfks",
  "key10": "4BMvBYaQou2PFr9SdWv4Kg1ErYbXRhzmugmWDvBDWf4NqFTscvhnoxFQvZLLakzHLJkX2Mb6wy2ScbgE7Sg8wGn",
  "key11": "5SsEbbgrB3BnSRpa36PY7kMVvYt2LxBboy53bQeHDTSt45vLVHy4SJEU9zL1VHFMKweeb46PoehB1zVVgZPHNHwB",
  "key12": "oERJXwxGYDpCEjZFngg11nT1Xhg838fdLUr4tCwSaLddDx7pVnqi8i2mdvFqej2SrQHLZg5HxcLvwW69vsXka7P",
  "key13": "J5inSAuUkMzY69koxK1YzWPYCufdwzf9nP8vmUriXeTYuuRT3QAEVVPLgmSLg7USvg4vb1Q5aaZUT123dxwuvJk",
  "key14": "2B72rLsmBF3ekZgKZKfLC2o3xc5SzsvriFHBvnvEwb2UCKBGJgEurGF4LTPzjkx6bo7fkbkpnQY97v5UZ3UZrG5A",
  "key15": "8bpEkinuFNvtJARkX1MFfHXWe7EpmYCkt8VBDw9VJUWj5BgcQvmoAhLJBDFai7vBj8qnuV6WQVrqdwqAmeokHZP",
  "key16": "pWPSnCgWwhP9UmSb1Eh4Eg33tAWWMVNJK6AzpaFv7c3MzGQRgHT8pZ9LeqhmXUcoAbUP3PseQGNZYa71a7obrK4",
  "key17": "2jPgjxuyozB5Y3CTME6ucx8EpuFaHXn71M5wsPgPZD6dJBSQwXvU3TArVN2VFNv6sFUpGMj8BnsVHTi11Zn4azZX",
  "key18": "2zdiZtDChnCVWftp1E1Vv7gBmQryqWAW3Q4UH4UXXR6u5edmRbbyaXJ9EYeF3tNSaXMWTqXc6HSbDnJGiT4tMjG8",
  "key19": "5ZSJKHyisRFmjMgbFKQm2CtX2vukS6pib2rGprk7zMh4YRvti7qJ9GHkoqYpJXQvKxTN2H4rQs5YVVXECUxxrPNF",
  "key20": "3NjUVfxTdSkDX5UHByyHM5KCntn5CUwfQZS7ptFMMjkehRow2bDLkf5SHuXMB6vQtDKETXTvrGubodruGqpyBqwV",
  "key21": "2ByF1vpJ4m74sPsS7Z2etcmXxyajS7veYfxWFas7GZTxp6fzqrKisFJtJ6ksFCx7YzXb53Aectx4NiK3XbUai7U3",
  "key22": "kNKf2RdJFJxTDcXXS29q8RbXXzYvF53GQo98B2kvgXQEdpD3zjYwBda3Htad3nxRjrMDJo9K3SDdsiek1XcmA2U",
  "key23": "3AAKQXSvL2A6tjWUDYkHZKEP85Ni8iBYNmERA6yEsEaFMBUxokszyzR1rmphVDUhbcVADS6a9ZjbVWCG1eSPJ1HV",
  "key24": "4bQ9TDXpkiC96n5AG1zfFNMw8ouCCwksfuCcpPXg56xvJdALtP6Kx6cdhrx7fH5X3W1QtQ1DqXdBoU7BwjxccCqP",
  "key25": "5Smnn2jXVyWeC8Lb4g3kYE2TtMVJ7YcFZzPPu2CGnCjnSkpnu9bPafD3SZaYVqYqbhJzjvCNxmKPHZ9V8iTzSGjH",
  "key26": "2wrJEfVdcdHDDBMA8SBnb5AiAYe1csjGzxrPYYQ6y2aXukSmjUySMt1vegB6VeuW2h3a5mQiwHqnaFhJgs4KEyUi"
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
