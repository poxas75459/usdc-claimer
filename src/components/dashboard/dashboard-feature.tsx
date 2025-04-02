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
    "2giRHC6y8mjArqtow4ukPtYfXxkHBRMky13QVxhUSuR49anuUAmSttjuf7wYcovC5M9h3Bz5tPbAjQopahi9CPoz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P6N7JrxbMG5LoprA84UB1CTNWN3hUfMTW5FY2xiqxtsqDPZ4FLjYGm12jG5HDxj6VLEtGwPMuzZTmfDBroackbo",
  "key1": "5x73x86KphN8ta6ZQ4SUaPC5nQXrzAqNyx4QyUFUpR1f14k4QaBFcpVjN1rHFZrSpXbnU4Jpmwgf7ZuxxEzdfLpY",
  "key2": "4QqBJATgQb7wN5zGHxGNNnM8HHtAUoXJgqEt8JUbVMM3gYkayptUz1CrKgCpNde8rJNURbLHxR4hySk9pSnCcsvz",
  "key3": "3CGoC2pfoDKDx3qjLBjMXXQDsx1PoPp85A1q6iT3jvmjqHCcgdDuD9FG3bMNBmHpeqjDeMYRUMCcQWJqeXajhUw8",
  "key4": "5ABv6MMWKnBeZCRZRDm8pfAypTYWcRTNwuGAJynyuq8JqQa6ewgyZD1MBGU3dUR4QMZmPXQbDk22SKC86nd2VXiT",
  "key5": "2ZgifCQTXdsGPppeDN76YBP7VysWpp7ykeQZwEZJH3xPrStsAtWMLQZgzkG9DChp7zxFM8FrLtzdz7EjXC6oJuwC",
  "key6": "xZB6StYJiudpN86iJvstfMgWjsk5NN7WqMJ34zBssPthVZETXukip1y24AniT8VEp3UVjWpQUvpHF6VnydMC7qC",
  "key7": "iDwaebPMzgjdo6iWAz15aWFQtMEFcVGJfPkJwvRQoYHZ3tPrNtPaqyVWLPbEYgdGUfE9FTmT6ZkYeY7tEyrvLrT",
  "key8": "4k6RtqL4ruBxkKLYhVMtpmVebAzsaPiCfGAvWSUsy542n8K5ief8Z73VCoMxZqMvQLp9z1yPTCtjCp7oRhsJ16zE",
  "key9": "3wveFJSCvD5oUkX1sZexNZfnhGfQKbxHMWCSAYHr4oJvT3LDqPB8kdewnUx3ww3t3LMCU7rZyhSwyfY7FSfcaZAX",
  "key10": "2ViuM4x8w9ahGxhvakVmC4i8sUZHkv3c4DXpyxC99Q2XcGXzfQhZqJN6Cc8fRfvaSoHiyTZ5rQuLJxMiiJgMyVpS",
  "key11": "14AfubA6d84RMLRjSa5C6ULAFprALnAGtGWtqC8mUG2MRrgX8JD3JvRvXqX7nyuF7EPN74oJJHG46Bs5LxmB5ep",
  "key12": "2B8NhjZF5ZBgX9EDCS2RdNdaFhioayPSVXKZpA9SYTevHsCtp6nMVtDJnaqzdDM26Zya5umWE3fy4wdizRd7bFrZ",
  "key13": "4jDCBQSWyVJo67B4b416hiuPEpJB7EkPA46pNQrCWTKPoqrtzgdg2WfkiNNuaZGdEAMxSracekLQ967g8YjQmGHe",
  "key14": "W83PiHbLz3LmJYKj3BnRwxuuS9AuBS47XXoGP5j7GVMuFjMH26BFyxgDjBdNUmy5es24ryfYYwFcNkdzfbxnqu2",
  "key15": "654f6dXunLSZHeYio8DNPWmmJvrNAAxgRZuBfkoU5zxD92FoLFQgkTm9QuoqGNUX4PEveGAtggFqRLe9Pr4VH351",
  "key16": "2U2Ym2UFQwDy8dk72QS6vC5sX7Pmz2kzqQvkZWAsLWa99uWz6mpH69m6WG9HZT5BYvcDd71RbaSuwvnTpx2KJR4",
  "key17": "Rk753Fs1yC32soPEq8FfqmZFw5despVWASzXUFnWgu6TpKiCLXRmpa5o6h8tf7sgKAwzKSQwm5i6x9bzawNHqhu",
  "key18": "4pjBkfoGAvr2DquqP8aWWSAxJgFqjRKZL5Mq9yVmP6wqub1NrSXAWn1QQCfZktcSwQHqLD11J2GAKvua8wkeuVpQ",
  "key19": "28bCTwTt1vpAziJmETSLK8BTDS8jx7JvBr4gRpoRYFsjBqAfd4878S3LL6KdL5DxBKCnrNKcLhtNwWGxM5LUQyoK",
  "key20": "ur1Rq73kbXPiRdmWvyb7w4mh8udpWMeZgf3wMe4DqwzgUWioaTwmhny36MFbcQEYBZt6Fho49CXYpDBarxeGSTh",
  "key21": "4GRcxuG2HojJVJTaCbK4uj2CGgWxAP6C9YGjKqYc961Fy5pbMif18j5NPMg15VrCVZM5Y3W8RCcajQioojY2mvf6",
  "key22": "5SLZn8dHsBxbzP9eTmHF8DX3zVNLgbxAKd7mBDaTJsm2out7XMpNAGLGBuhQHzhTwnxdCsgK4YG6oKxDV6tJEYbL",
  "key23": "2QBJdxZ8Nzp1YAJ14aWWiwffTA3PDF2Xj345sdMtJsEZu3CYbdVNyV2nQxfXT6FZ67mnheppVkfW3bwRMkBq7AvH",
  "key24": "2TdHdrxXReR61E736nVKrLHwJc7X3MR4tZLNNjQSZdytgTMs8U2zJNJpp54Sz8LBX5NCzercW8midBZxSV4v91jm",
  "key25": "2Z43psHVhh2SXUEcGvQ331CvBK2gp5orvM8mvtr2nX6EpjEL36BxtXGFAaKXYCF4Y9eeESTPveogsphi8w1gnkr7",
  "key26": "4irUqU4aDR5gJpqiptHap5huHNVMLzf5PsvFJ5jvY92ofpfdVLqV6kToQELLco3RR8BVQgkwrXUkkys7SP3cid3k",
  "key27": "32WTL7JRpe7ZcHZ6QTBxrGCECmKcBLV6sKqkaL2kPgratzx5j11jbSxXcTbjcLazvJePEeAURZEEd2C3yDgh6x1e",
  "key28": "4mEJ47hcVXU5GyWgpU2WfbVLLCnNRxK6yABfU1ppFz55fBWo7z6emRsxSDYBztbJWBqqmwaLZdsvcAhNijzXFr11",
  "key29": "3ic3XsSJwUs5Fbg7XkwTLZ4U1oJChVQwBTetC2Q2rLqQZYdf4mVdrfroHRoeCW7ZNUtSc88SqQ6qqXiYEeUvik4T",
  "key30": "2yMvJiKgEbYCBL3CoUvgCrAeecf2LowtLRSMvJvcsKTYn5DBMnW42QKnEmiJa4eoQU3Pn6Ngz2jiW7io6xLjJQM5",
  "key31": "5fNkdZbZv5RfiBDC78vzrLwqS21dwAVdwjK5JRg7WaMiHeQLSEnBNa4auF67rnFoYAp6fR4HfPRS5dCwW5WdtV7Z",
  "key32": "498u4r5ozDyT5NJhfAJ6KLjJLGmZxSRMTuiPhR1xwcW1SK2rKGmQP5DqHpz9Hw9YvjEoz9HfYub5oS7hFFsusp8T",
  "key33": "4KaQFzhBAQX3gTndnzyqKUW5MF9BW3Sn5mx2Q5mgpJhK2iQFzbyCnJ8CkyTj7uwYEYdN9HPZF9qnoyW2mVNBiqNH",
  "key34": "32mnz7C8RMDfKH8pj99u9D4u9dYdrtRB9qecJKCVfftaKwFjArNrV3xZvcp3zK2WB6Z9CqYYQHLVd4VjZZXx2VoZ",
  "key35": "2nQ9AE19f1EX4jwzJiSXckepLz9MdJ4RzVMribfFCZtc7bJo1RsiTKAJTRQvaZG31HLJcVrGHG89S9zPgKaDHYX8",
  "key36": "QRjdf3uNLoHwXcG2W7sE5vbUBEpo3mGW8utscpKA5w4hRfVPVuUFmfWiHhUKC3Wdv8tMQCHVwfqsjC9ZmiAtAMK",
  "key37": "646THLKcaTVcacAtqDjqBTSqKPk4Nt4Vg9QViMPM7twew3qZoFWNFeF7kr9RZMtCMiyLKeF7CvUCMPaKJwZAndQH",
  "key38": "2G67NVF2WAMU2rDe3A4VCDSxhBiqBPbfbX1W8VBsC3PP5P8TMinknzPBx171FwCW3htThGmwy3nazVNS4UZ6NBqK",
  "key39": "66f3SjYETJMWmQF16Aoi5pze4Lnx45NTDaWYW3jDqK3T4Aa1vs2PXP7KG7J63wBD7DviFYKD4br2DXc2tUdkD78W",
  "key40": "49CLpcZiBvuaCvGtPCsDsVTjyVV2DaJk2TBG43F31iQghkxRNpmYVpZXiLuw9YSckFegxqWEXJcV8bf6oBbn5yqA",
  "key41": "2u44jhHBsT4PjpfCFRsWTA9CAyZXskgGvZyWP4pk4pZHnigaD3TLsTinCovaZwPU7u516X1q6RicdVRxZJPJLP6e",
  "key42": "LWHD2NEoWXkVTUVBTbmGU4vcSDpf9LbfcmFenuQoRjeLKUvbPoy3uiXvywRhv8EA4MqLF4ZX7kbW8jGPKdYHBZw",
  "key43": "4TfmqwppueVodBGeh5bgyFFoYyGPWitFUVYPxg6gfr5vDap1oxjogEVMwTv17TQMsrvwFMG896EWS6TUvfJJ4tTU",
  "key44": "67NH4mgbyzRoFuUXAWv13kAWxVueQHaVyjamU56MLEZZEDV6jzHV7Wu4zZjDgN85QEEQYEuSHz4P36j8YkYH8q3A"
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
