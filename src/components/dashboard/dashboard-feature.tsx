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
    "5oUPNLkMdDLhMz27HNUH4CEFBaCfbijhFqakdAjJPHF9p68aoaTriwNQKiKg9GQ5EAYNVYSY8Qi1BMjpHYt2jpsK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42mfYcgsbCmnkUHWfguaX1MwBc1WbL7HGTFn7ufh9kff6WPZ62YDCoDbdfcszy6N5wii8HWkKGDiSHNvXxm3QQL",
  "key1": "3hiv15a8xsRAJwHRTqwYuai2zeZXwDkKSNhhpmFhYzGnHpMzjmth5pt6xyURyavPRdJqPAkkSfmN4R6bjtQUE8pG",
  "key2": "23MNRJCnJgRePMTc9AXuyGcBZY4zmEbFAQmhFvXwKmwdyeR4VpoMYZdZLDPfkg6rXYC8QsQszVfBvacahNTePChE",
  "key3": "2Zw1Yr7RRNtM8EK2j3apWTB8SUx1dSPaQQYie5QXTmYiWTk565Rs4omKqPSP5fTYq4Xj2tZbyYkMNuAFpcZxyi2K",
  "key4": "4VATvfJ8XoZsr6HdK55SgSpcLvz9m3iMQwNRe7S7XhdZfdTcEVb7u4Wx8M98h9tgWjCmUBtK7aJfj8dmuSd3ob7T",
  "key5": "3zEP5hAYW9ikY9xT3C8uV475gC88aSdhVWhwWmk2cJbKkCQRdjGjEJjZ4szRyxFYLp12Xromvq2GjkCP7gJzYZd",
  "key6": "4xKPttVBmvBwBD3bGQ2ApzZQs878KJcwvA9e4P4jRU5J7CQf1YjWQucaKYVqdssuGWgSGEprX55sBFG2tiubcnjU",
  "key7": "5vzPgiH1aJedNywZz6VobCz5JL2X3NQdvsjfZkydczEC6snxBPk1z9SgXYtFDHaiWBb2RiPFMa1pCRs5K1vMseBs",
  "key8": "DE3LeQCnVPRMRwrEKFaNkAU5a8RnguwSQ9evNDhhXztoVDXBcCaeSKCeYqgeoGqcMtso5ipY7G2YrkRBTYgvej7",
  "key9": "FhwAAmq8sRYHGTSUw41UfoqmQSNE8ev9voxX9VFx8YFdeE37Jw1zUewkSRGE6zsBrpZf7xkhnhJf6dzqxaTYSth",
  "key10": "5vgbF2Z18icPYSxoc3bZo9btcveb34BhBbuXwVHbVWtUxxsPNv2MPbVtDo5Xd6v5MPdrYc5rFNdszZ7zXauxMxm6",
  "key11": "4rhL8VTqy9kUBXd32aFNnWRiUzzgxyaWYAx5m8SQ5uWTUGqYmV1JERP5mDcGnW22XeiTzXYmcm3sxUxxijyRvche",
  "key12": "4HmWFAQHckTcGamEnP5ykm6Pyr6YMJWrhpKFCij14hWvwAbn4df6RtzgjykKqbija5FxcDrdRxSgepH4DEcavxw1",
  "key13": "mDay78XR9ZTf7qmcqQgfhWJzLyr4cFUgDW4RG4cnBguj1fdtVpmtDhaz4EYbU5rSV3zbEfZP5HNXDmjxrhhyzh7",
  "key14": "eKfKk8z2TTB1uTRZR3zgKsZymfyrPe6Mn68UtSMTKaYX5HmTjCxM4sBecd8PPKStufYtKHat7iZkxGJenJjKivg",
  "key15": "2ntkmrLku5khNowsbhgeMvbnAXPAJRjA1NYuFKicEMa4krDfyZth76RaTHqcLozgNb2aFcGdTJiJew1RQXxMXnCA",
  "key16": "ArGpAa9WQcWdugSqnBYfvw8M3FgvtbsZm3fnvCKMyRkwhfWjsrwkLDSM9YmYT9P6nneNYFDHhfECnJJo1rXgwX5",
  "key17": "5CtgkXGDMKhK8iWeRMWVR8Rs7hHTnk9pzRifVDQ2xG3q3RXMqbV4Taa4E4d2H2mHxKAcfr7QHd74HgAiyU4yRrQm",
  "key18": "49V7cRuPbYJXXoFmja2jMaiWgG9EF51eEVcyKm6rGvE67SmhJtUHHbnRsPjsJ6CQgo8vWnadhLKVbdBadZdY5F9K",
  "key19": "3dmDtTEZta335vBPsQw2BtNpuu2M6NDyZs2E4nTCBoUshrc5gsB7312Mhu2pkU9A8G56UC4uANNnEJkcXXADSypn",
  "key20": "32Z5pcHNKLsdtqJ1gsXctCsTWoL8dfry6s3fdySMfzzYLSdQQ6F3ApTctbqb4sqYfShF4hX6Bm77MVeiWNXFvsTy",
  "key21": "591v3oxqGuFwGbEd4szQtGacCqJLiwff56bnMireorFMJXBdPrsgr5FnWbV8gmnbRRkFSiBzwEYMKZgN6b69FX3B",
  "key22": "5Jf7tdvhHmeesNXWgosa4Mitg3WFwxpxAHVJEzViuE1UXhi5tXv8bZpusZLZFJDSXWwx8iLHFPwvoHvGrWrnjTMB",
  "key23": "Jy4vK44kb9XVGAftEtcHobNc8kpHFmipiuFd219iS8Q8SUZMxtKKzK7u9ZozXSZ8AcbndN5bGL72xAxPT2LGA9r",
  "key24": "MFiZT9k99aNe2QjLZn1NR7sPrQcysv1ySL7kpP7bwPKY18TimF39MXpxB9zZJk45LhEwS2jz7ifYm4zJo8TvnYo",
  "key25": "2vbUXaFozQWVNhTU2sY1Vk8QkzANwy9wYiUjj5oELbmNxTrhqaj3ZCDZCv8zhgERuFKVPdaCxGCffhVX1h7mMdjN",
  "key26": "TUjjpWXzqwYXQo21gmx5qcvXCLSG8QbfWcHQTJYJtUWHWGBp6zjK7tGHrgnX7YiWy79oPysfj8Usjsdozak3ryh",
  "key27": "JWvit8Gkshg9s3aEcEtfXXDrwXzLqtNf23dNtwk1gS2G74Cdhw3tPGjKcXi4VXYXopJSD3J67xmPT1vtNqdq4x6",
  "key28": "4JyFQiQaXxvVG2Kz4bnQsKANQ84R81kztndS7cnCB5BR3XY8wMHALA9q3dpVcLDGZ3dW2EvSUusmYuedo2wA55rr",
  "key29": "5tCxUHa9unWDsnuyLib1fTx93MLQaHRCKQ2SESwj34SPYGSWKFfen86KQghE5A1WwKay1xcWgjaiUYy6rAMLjRjN",
  "key30": "4KEd3kqyxKugYzvbLJEnjd5wHuWpY2KSJT73NduPiektnAwLj74VvVZDEnbsBmqxkqsX7S6ii61shqqGvB4yYgUe",
  "key31": "LvLhS9xHFTdBh8gcfGo5EGg8VM54kgFU36EZ6JxU1TVqxz1nhLU9zuQ2rdjaNDh8D4L5Fdauekeg7AdetX7HxHk",
  "key32": "4aK9DSToQqkdXJ5cT5szyJWaJdaoKoi6w8TYWrB7MagRFGvaVd5B2Z79uMntS31AwB8PWRGPbhGGKiaSjASZFxkU",
  "key33": "3gYKn9TqjNsbUYSbssuvA3aAckXpBkQaN4rd1iZfvMn5ZtmVxT9ksWn8SDbDBWcPwziv859FJ7qKGQ47N5e7haSi",
  "key34": "2gt4sWn3YJkJJ6uWWBBcSPeCEb6dJpsa9gFvK6wMFPfGBL5BtjXFb4TyqfcufipUmAZMzgNQKBtR1p26MF38QWFB",
  "key35": "58mVYdLEH5cVu4iLqcA7WLXPssq247QfciuyvtvZuYW8DkS2zQm18qPUY3oBhY4adYnqGn4W7bFkCKWgZfPVrvFM",
  "key36": "1aBvicwJcvnnenHfaejMPQCvo4A7cUbxh6qVBY1Uxb4cUtxvxAUpDTMQn4cqni6jpwoGe8qQr3p3MN6hcJaChNL",
  "key37": "2uS8sX61QGqcf1hDF3BinYJeBNkRA89AR625zWykLdTQW3NmMKjTQye9KdEm3Cikrwj7bwBBtC9GQB5aDeoEsfpg",
  "key38": "3yv6AZSyhUAezzaCTbzGpeGWVxnT9HABaEWras4nLqCoimmPMuYKSPXcopQRG5vw8TQ3vwRfdKJwkJx4fkPXbyTL",
  "key39": "AeX9aLZApST6pm38u9zXtZ7KAdoQeFQFz7ckTmsdDB4Ln1mhPusF5bxFrByxYpn5zMH2exczU4FEVCndQiLrWoA",
  "key40": "4prjvxR8iZLC8KZNFBZ2JTZtQTn3HUeBsNTC38Wh5anbufYwtTAg5XKfnMRWA3fuvn3szmJQwe2LTr8JqF5mvtmE"
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
