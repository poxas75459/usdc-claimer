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
    "3rbWiNxzwyrMKGHzrYsx9MVYuDUPAQhEhdLm8MYCscZVMSEAt39nnjd1vq1G93RfTvTocx46xxebYnHXiLNeusGR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HjD7Fj3vkVD97yYpSxQ9o4PZodxeQTRvGkgWqRUmW3ivAMkGfgEbqKK8Y899FNSwNBWiGT4HjgWeaQP3egXW49M",
  "key1": "3kGMftYxdh9hXRQ551B6W7kP5vqHqoExRTLYgCTRrfDpkotn8s82WDLYJEkFwPs3MdaSkvusoiQ5sqSwJb6x4PYD",
  "key2": "dZYnp9jTQUxLtHREJfLzEZAfaDLxLhc3yKeotjxxwf87CvHUHYHs2RSumDpTcvFcZjr2HnbZ38GNVhupyYmkzwt",
  "key3": "466pMBAtXJk4VLCWpD6Tek82GbST7jGozcwCLHR32MTSvaLFEP6ivFDUtH8tNjAgy8dqtL3zq9n9VYi9CuDWWkE7",
  "key4": "3VMo6Fnucx291Es8QJTkkTsESaXUSRoMw9WxziGv2KXhWcmnC5AtkCavEB45TZnQCUMGz5LXwVRE6KnTscFdPJ45",
  "key5": "5wPGaGzJSPte3rYVH5XLLRtxRFWtjoDaBRasDr9mogfGExfcZyNXHK6732u5mXWY1DogzRHmy2mfXHriRT5GFZGu",
  "key6": "35FGE4WsSDRPftTXVYV9cYvziwv7KJw2VfRriZ59KzRTbeZwiQGiEtt1BrnRMZW2cRNPd9yT9r7vEiz4jH4YYqAV",
  "key7": "4KuxxYKFHtZS49E5YcfsTYtKCBpn6B1fKWkRCsnPcb9hRzJiyJqLmZuwuMqsDWPvr3C98WfmBMQT8B4MCD4faWYU",
  "key8": "2bgZ26GSMRyriZAdyL3JwaZ7Wcs1d5eVF9XykKR7Rg3KiSks4kD3gjgLdQX5P3Gbq9QNFZe3AkgDQKXmCg2A1kdT",
  "key9": "2kN3ePLsMkkMVppp3TdA4M5zCdCPV4cYCqdKcwsoNjayFqws6u8CgGXH5d5LNrBVmFZwBZKvh9C3GvuDvv7bHRV5",
  "key10": "3zD1GdVVy7DLQxXxCUjRxGvKSXYv9pUakxs9p6hyKV2f7G1KAdRLqJ5o8A2ZoqbuMdBgVbrzTM72FGaJjx4ygVUP",
  "key11": "2imCgT1RttQEtjNUBFC72x1vNmT6gQ9S2zuy3S374B5ZxSGJ5FHsHAh2HfEwCKfhCTuvYeBNeYd8kWHYYHhhQL1m",
  "key12": "4LPDEjXjfWdk3JZsCruGFfwDtfagRtXqFYVV3CtmpoPSvA1woXg1R9xWJU5aveyd469hTML3yL4Um7GXYW6V26KQ",
  "key13": "UTi9Nkgs5xPVwv9cbN6D9g3zisasw1csq57Kjstu1NUuHAqLZQ49HgciC7CbE324Gonju6ktytwHh7tKHteRXqg",
  "key14": "2hmzNjvAFr9tHh9g8QRjeJqaaSebEmeSgcmUCRmAXJBQz9cZb7rtke7wGN47EAmC3gU66TKvwCUYwMoG9ew67HtJ",
  "key15": "5EeBcefsykTWhvdDbDUkWgqdNmb3kFDpmVpyu3eVJVv988i469eBpgpteqjcZEvtRn9wQjTF5FcbrHwmkuQC8Jh",
  "key16": "2Srr9tGdjcZ9VoUpUcebKccUmjpHw1Ey9JzEYizdZYyEw7MAGbsfDXet6W8vXa54fz3MPyFbhyuBiSCKiiQ1F4rJ",
  "key17": "5yMGJypQVJ6jc1m6yguPfqJP86dEK8EqK9fbLxDuhc8ay8uEfQdUHVdhKEd9v2K7FZ3FCPoATE4PZ5z9GuEbViEc",
  "key18": "3R49YFCD4bLFrpzHsjegHrqi1ETBjvwjtaCJUuvkyfvCyyAWeKEJjXf72EZ3MRJ3JE7X5LuRRMvhq2cX2xH2nVUc",
  "key19": "4JBgxwdw2Hr1hud7poefeMpEXKHo1vJyrafzzU4cvSEeYdLhT3HfXNEmcfoou7CXr86PeEP2Hxf7fgocNLRqrSS7",
  "key20": "2zTpkHEmcKb4WukEmd98mRuX1MAFyxcVaJ89LAkGbZvU1dy67mFYJZXETQEAYatiYMXuFgb9TuhnWZ6WS8FfgDJA",
  "key21": "2T9YJuE9mecAu8MJQ5RXjY8y4AdquYhqJdBGCVp8zV5aRPwvWxFFE8ZMYZdYHAdTVQxBPpi4W9R4q3QDXuqZ3Tsr",
  "key22": "4Pa2WSf7JnD31kUzShtMH5RqnLkomAo9fPHCm6QP42idDdJBvVMcWJStuJ1rsXGCyjhoRCkQBjw3HvNxwp3gvYRQ",
  "key23": "3poXVJSfqtDbLbeaq9E79sLgo7A91HqW6wdvxvRmWEGURSTGEDSZWkpgsetpXSU1EBxrtywRdxZ7GwqYiWPSZayP",
  "key24": "5FSUmqeq4T4mmPdBJ4M2nMo4cs9wtKDd7ZtY4gBqokX6NcEqzQ9CuwquaJQLEwTXU3QGqKTMLzBjNtecKSbsX8dq",
  "key25": "5NW1fpAY7M7F1yD5wqkh7FqtyXhF64hpzXMAvBbPtXNbgLhngCkTNRPbJtzBdue3BSjCCnrrkjXsYHGhDgv8EmLd",
  "key26": "3sxeaJaZkD4dCEiPG96TsKAuV7mEN5s7LKZ5zDNWcYhcPJgwYwanpzXvvohqZs9p9ZkLyPwR4Kpzuarv4jMQHFUa",
  "key27": "4fSFzEVk8bXiDg5dwXZBmcRBhFt63jYhiZ8YXAbN8j3o2GfUTLm3wNBhn1Z3RwKurC3Wh953ZqmfmW2Duszn6KZC",
  "key28": "3FW1Jo1nAuPkGiDnNMsJdawsXZFr4fxMuxJSrQHMar4csxpJgfbASfZ3wiQobxqruHEYYttewckroBbyCbMQZFky",
  "key29": "2iPDBpd36V1BhzTfaFMiG3Dy6hLV8rjRspfo5JVCQaeKwv1sKcKkrMfpZzN1m1Smpfd8T5fV2aWt6oq5WtT6qv5",
  "key30": "4qfHnRcYGEQcGVU4AJrhgUN6uXytW5vB7mXBoQtrsv4moynL6Rhqf8Bxqm8nWjJ3b5ZajGNzV1sXJ83HP6Gdxr8y",
  "key31": "21KpGDAd5yooVPjBnrrCFTAmHx2UKsRPnAxoVhunXKZNUZiwPx1bWeaXxP84FBPY8Ko3D5CrVTPDrR5dNebeXu1E",
  "key32": "8g71g3o3tqXm3oje66kAY9ntL3P3ZNiL52JgYNpSxmqzAz1qhwhd8XnYNdraYGnyXLNACSCDtJE3WUSEfjH7fEr",
  "key33": "34nKxUrcJ7M2fYaFyDaRFQFT8hBUVWD3F1y1Wirz6gtcGzcqesEexYKXHRwze8mWqtzLqyQ78Hs31zGDn3XrShYb",
  "key34": "5DNk3jJroaeB5DnKnhNjcNUotGCm1rzSRMKacax26XNGuaL6xfUgbdrENxHH7WLqMxjQGwfKW3SbpWhVgsBDnUGx",
  "key35": "4SSv4q1M1xLUZ2BYuRf9FKsKeNyg5op4qriVUho4WQ5FivFPXBfoDN6nVxKJf6CrgXGRSMoxUm6t7HnReb3gwp2X",
  "key36": "3vbS4exovxiP3NqyvNqnbdPyNuTtEAWqMNMzh8gcjnF1FSKRoUMPYUTqRaJNmyfJPVXwmgaY3RXgiNaryJYpPqrp",
  "key37": "3ktZmaNkgeagV7s23oHQmvZFZga5j1nTXYdixav9vFW1rb7VUeFWTVtNFkC86TGiC7xnPnvUvoC1hsLxVKfWGSGm",
  "key38": "44wwK4bm1fH1nMpCHHm9ENRaEHhvAgYfDtJ2XZkX4VeJQaZBeZHRiZ2jr83KRpy9cpZcCN2Nu192TBQy9nFEqE1n",
  "key39": "pes1N13rMF2t6ZYeKrPp2FKTkPBgPDXJh7beM1ATq1mvPzhn4FuRNxi4fCXmCjQrZ26uae5xSV6PvNjRSfiC5pf",
  "key40": "tGtjKEmCcvN62kzxRTT8KQ1E9D8CN7MwomcKiXmFj8PSB6qMnPdsS6AcJtznov4GfiqGaLceAqcTNgLUXzsXvq5",
  "key41": "FABXYSMrAZ1XARDoet8DYNGhUMp8cnJKQ64BY8gRDHoBwNjKW5mayx8vqBx7MijqtBtVToRvAEQEkTE1yvQMb5e",
  "key42": "5e68sPCs2JCNx2ae8BRcHPppXxcHg9ADcoZdgrfKCLsRUHZCCaXnbb6BmH4QXnmxgbVTHv8pugYaE95P8A4vLH9y",
  "key43": "4ALvHUHoZJuudFoepUSfRoEMDb9C4w1WKYM3uzEs9VgPJj62eqNQQX1npsg7SbQkiBXcfsCQjfHYxSHPikYhSbZt",
  "key44": "5GgVozmTJxbiCa1Q7mvomjF1nqDj1FTHrhtyqNHGFKhbaSPT2gB5a1hYEHAcKUbwmdRecHcmmw36ZwhUDTKA44sm",
  "key45": "5AaKwW6kXojg4FTuXo7JW2evJd6hSipnkGPui5AE2fvJr44pN8JH24SrsT7u6kaybB1HK8CDN48evop2UsTu4WFJ",
  "key46": "XYQRMuuZTpEU1PGWjD7wit6oTbbdvDnYx65yqjgt35FiLAZqEm2K1Xs7iuhQ4CFTe2Q7XVofQKBneoVHRkgYfGX",
  "key47": "4T6JFfsy8E2D3hyBxPRzFb7W6VAotoUZ3dsHzYDTU1ZR1x3WYDxGoC5v8n2HL3uGVHDrpW55T3MPHCoD5Zhggeed",
  "key48": "5TULXQdSjoVZ7pmhupkYtbbQ4suzSTaXkSGoDww4V6KfzSCToKXsgJt91qovkQV7ig8R259r7XaFsqBf4vtcjR9W"
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
