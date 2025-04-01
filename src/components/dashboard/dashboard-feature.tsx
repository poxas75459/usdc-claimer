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
    "2oqFgnxVFHZwKCFwFvPUwnkWfxXBFXfcQHtME7M2fZ78gbMVGsxDxt3SXdv2ruEGNFf3DpkjAsySauj5wbNHyhFi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xn9Q4eocck154iP6vLtmxQoFayCXAqz93BfihdDq5mCL6ZEQ5SjCpkMLYZDxuB7aBA9k96oRdrS6oQ5HNaqEujZ",
  "key1": "5ydqsoi1n54bYuPkScXCZpaVrg7SZk3DKvRVpw4VUdqSEUCQMd32ERRMECE6ig7XhcjErZhSzVhkubjTmja6kNZR",
  "key2": "2Rt18QbjaVFC1wicmE1DUoThnnxGgR1Uv6xmn5Unp7sQcVmmUHSoVy6yqhbTszj76EHgKGFKcoVrWM56XBhgnsWH",
  "key3": "5JHt2t8pFp2B1W1sb5B8AD8LMPusso8UQQ3f2Wvbg4QahoRQqEdU44gYTW5UnY86gyq4kprCJr9RGcFkekAwqWSs",
  "key4": "2xZWjXwmPBadpV8DrBaCtBC8jboKZDxMdtVFC7zvk4JEnnnkcEgXize1Ep3ESUzrLzx7RRrT2mowEab8myhmauZ9",
  "key5": "4d3VFvdyF3ZAMo7TPA7VuAS2p771MyAED2Y6WEip9TRg6DSy6FTzuiLGVWqNhAnjndbG98nQBtG1THUpvkJnvpJx",
  "key6": "3VKkqJwtpCLJmzbRVGTVuhSehN5QJyMHBuWaowVj7ZTccGfwAuP5Jad4H54cLNfmH2JDrEAmWgQcyXUT8Lwexbey",
  "key7": "2WbpggWAiY7uTaqwYZoHexHhWoGsmknH8q445CUtCbcsbk1ASD57TnKkDL3uSsiMxkuyiegLCzTWDNPtyAaj6EDq",
  "key8": "2KfgaRAhRXtxZDikXRDHokbMsgXhENW8dZ8VFcEyNQKpvf54N91Y58AYu9twNcbzvCJzqgTKuG1vvpnx8moEQPhp",
  "key9": "xAAfvMj1hc6H8uX5wTvwNVnEwGVqpC5N5ScsdqPcFBSDmf1rs3Mo3BSNQDs79pCBJ627bq9AFN7hSGcY5W1ATSc",
  "key10": "5GKpZgYavH2zotAhgPj4ge4BYdh1xVvBDcKMhknNZVzPn6m6aAzswNsLcA1r88QbRJkEc7XV5GHABkGpG5a9xVUu",
  "key11": "4GVEa3qUbWxzhtNtG2uwnjCYtQLubJYdhd18AwFbYFZRy7LxRrsRZkPTvFiCYh3GxiaPyZeGxQuq7bvFdwFBVrAV",
  "key12": "5MBniY5h51DGdEHhwMrgeaUWuvK62Da9TLVDuZzwxe3eR8xgDtmRKGSnoRv9sEoTshfmosyywDyrWscyvLNBTA6c",
  "key13": "2VSTaCTbD4ETUABVCtWLWJHPFnmD8NZCcbe4nXUtMA5bjiPNyva5qcWNLDku2nxfAprZpRo87ec4T1wjgsJkb9nT",
  "key14": "4hR7qrG3kVE9SNyh6m2LkFFpqrpjhxb2bHv7tCCyUUQXQdFp2zKQUMKtWj4iCXLDDDHPRW5q8ChhrbYp42iSLKrE",
  "key15": "3E6QLfc3LWbnEZHvADYzoij9wqLbrhffhKJtpDBajMbkf3SNRoeS2R4EcXLndW7gBvKdCaFVavKG5XfMwxF3M4c3",
  "key16": "3hpuE6Kxsso8krH7i9oimMJuveA2zYdNaDzh3prn8mwVYU7EU9xJZt85davTkW7AU2kEetJCAdRSVg8LiTkfciep",
  "key17": "3J1Sc11PjNj6gVNprHj4fSc83cMpGF7r1XFkiHgs42RxbooECoH1MJUx5S53cGTd418oscd3KBaB7ujxKfcLhyH",
  "key18": "2kKWaXoKEoxLyfSZFzqz18ahMwm41gnKzS9cfFmrBngWLdatKhWU4VeYjs4xRiUWz7ZaKWMA4BcMwjgLSsrLFUS5",
  "key19": "DTP7QT2nqxUZxhN9tKje23gDrnChCmNNscaUaKY1XfN959mv68gFuESTPS3TJAHdUGfyWjRP2CNBQFNk6Ta2ptV",
  "key20": "4pZJKCJNSj8qTa4b8dgNgDiknqk3itc11kN7Gv4USuzgkev18b4Uz7bNDexcrgBKf1dNaECK3vseHH7rLiokYK2u",
  "key21": "3ENNu1ZZr3sJwjFCvoZstCG1snocvKCKceUQsFK3D1WpnUYwf5kdEKdrjaDo5MMBk6g1UabNjNxFLcRbrwozrrv9",
  "key22": "2LQXvuiMSchqCzQeVNpap54DJ74Cv3dmcYz1mFb1hfk6pAwmsP2u6EovjmZag2M8nG2TZJQP5YgAnU353BCMVFsW",
  "key23": "3pGNj7VvRZQQQ8LoCPBFqV8NTxKFUvcpfumgLgf7pf2zApnM3ivr4HtVj9iEWofCUykrGUBczWxteahMqwKR8hpz",
  "key24": "66LdT2WKsfuvt9Gfujco67x3fWwRdZ9pccHH7xVNaySS2GnZCT28PXeTcpEHZb88YxUZHeoyhaWhGdtvet9gCaEb",
  "key25": "3JkqX46DEJNwF3GJ6K5rciAohEJ4iUYQ5ZUSC4eZQ1o2jQNqu79t27MJ7pfMaVkk29AiPgXugturN7gcqfV8qB7N",
  "key26": "4HghANRV4bGBYPmwAiyQyBjzYPy5DcuJRdJrBRb2EmfnZRmkNQ7Q1ct7AMWpgh5VNoEdhTJUe1cZoveUknRJi8ZC",
  "key27": "dP4PYqc3QThxvkFQfyQ7qE4yeAXYcGzmE6NkAKf584E1Ufi9N28gzLXiNJ6YdGBTqG7ChBiCszUQ9vPchYRbUqp",
  "key28": "2g5oMnoXSzUqWMUexEDL3AEcRXprxu1Y3RHxWhePgANumvkchzwMpatFvJUbEjSJoX5SAV2uFfKbHP6BZqiN7C56",
  "key29": "2GokyFheNK9URfYww9JUjy4kcmGo1ZDXmxUiznwTXXJFyvV6Bd62HHWnvvvn7Z54PZiNcFahxxyvKbLpQorakMu",
  "key30": "2yYB4ArgATDUJbDfatwkyXvLD26ADPYVvXg2oY9RGGNZP3KWKx7QaSL4bBqms49EKStxUppCCs2KSUtxB75xd4Xj",
  "key31": "3ggQUipbfVm9dpv6fab1HSFn9cZTw7yBjXS583KFFmsYoKaYH4poYK69ajTo2Czo3qbCfS3xgQNsmzesN66PVXcQ",
  "key32": "3WaWMxVGuEdQdo6XysKfjQRZuQUDnHCaWQ2HPVXdnbsmTKf54FZNBkxD886DtTwZ7eH2aNGea2cTcKh6aSCyGUG",
  "key33": "61gXyAUpgruH9vK69kZyN7E66JZw6A1ZvxMck9EknEtZTKoSn32U5tYaWg3xKdiXm6oP4rQtyVvXavxVoV5Sjw8c",
  "key34": "eB21cK6kczgjzQjp1hxN4rSqfoMHUzbGxJxZMUMXXNwkqPFsXWEXHVcsqSfT9o7NEdESWGmYoqBE1izYyi4zB8U",
  "key35": "osZJQfa83AVtAmBZ1ko5hbHHMj9FGkXrDBnU9UpvEWGP3gdNPsJtmW2UsNBfh1gqL2rjK82vtfHybuFkKMjuyPS",
  "key36": "Ey6PYo2ACZghEJa8f2Wmk9AxwDQ8TYok2tArcbo5heAmpba8iViG3XsTgsQSzQ9PKtSgEHycUtF4SL6sb5HDRMB",
  "key37": "2DAeors39u5WfZYT17gRp9BbpnxaDTD8Dih14Vki7Hrhz1KAwhCv6MfpJKXmT1J9ALiSFYfCScbm6SDtHxA9SCAi",
  "key38": "KqkojxLKhLBx2u5h5h2ufx8mgJVXB64f97CTLhKgaYDzMNhBnw85j9zTyqnTCj8ekq8gj1vFwmLCyonq8S7DnU2"
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
