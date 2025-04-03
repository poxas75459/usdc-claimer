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
    "48FwN2hoQgwB76mA1yiPePW64LqKaRrnd2oh49dng21Xn7rMwr3Jh16quK8eoQbTVnUpsjdLg3yCg2hsAismLxnK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ucttXvoBrY3k2JTnks8mu1vzrAWxJi4MLHFfA5KnQWEzttGAjkvENBSuiDQd1vsSZ41qnptSm1c9vg9dzTKnbwy",
  "key1": "46dM2JSkfBrneHa9rYxKSet17Tpjnn3c3BNradGhk6pfAFHe2XbSHT2wUhC6VXxsz69oswmBCGMteZ2nPpaJALSA",
  "key2": "31rfmvPgLSTZ3Zg15RjAwGioqCRuy38r4PVBhnYzp8kiNruL816GfdcnTByDKjGnftumv1XzjmmwTCgq87Rqkszs",
  "key3": "2kUgBsnraZ2ZLroooA8FJepWXkH44GCT4V44fffTidTZMpqDmU9WAEwXkYoL3rdxx9s3RTosAwSDvAR5cv9xNBGz",
  "key4": "269hsx3cgm2d9RDhNZgrtFV1rrHTd2M1a59cMtZ5vDqEyg6YkVHxcjHSmqzSVCTCK6DyBdE5qmEfgoF57DwFjxW1",
  "key5": "HzafTanMVMhyNnvJzMzYAyg7mYuHkvU3m3eGme7wiQZYwqKVQ5eWoPLdotLzbPNsJeHgw238B1r6tqwinevPbKh",
  "key6": "5NxNMBdCCx7c9GaVdsuQJiVt8fx5UmJvRvCCRx39EbbPLfurXkRf94o2H9wnjBExLs9gog5m9yQx51HceaNtDxnj",
  "key7": "4o3xykeWbyKZURxL6KkXQrLY37ezcsczQ1rbkPM2K1cjaeUnJwLdwV2NoHEoGvayDuAzF79QMTya8pBAHnTa79La",
  "key8": "5S8zrrQMRWMvAKykX5JNdFkkUcyqQcoTtiuFanNh6rHw31uJXgzJFFsDEHZJjb9e7qy6Yeq2zTRtvRAJHyVMPfPZ",
  "key9": "2rbhuFc3kCV9xSkBeaEzR47vgASAq8a7tqu9yhFdKk1okrMQCd6JgNdRAZdtaBNVBHPAyJqra9o1wFUBFecoNAxn",
  "key10": "2Sp9HVR78HQZ86DqKZu6PM3ktPg1s4RSpq3qhoUV7hgvqnRVDqijwxN8v6TcRAH1n9cv5xK1k2LQQBoTRr3YMbrQ",
  "key11": "uu2d64i13VEWNdn1eVK28F5KEqzkftghRTvJncU9zhK6sRSZQZECGPzNHNio4LCq9ceziBv3ZfmTbPjtDg6vyfm",
  "key12": "5z7d1miyHottmhA4DA7dwHQKS2f3eTdoyRfbZXhF82z5UQZdoVbhtKB6dHRRyMxeABYwBvShKVUTvjG6Wm7ZxEHv",
  "key13": "4qMdy7PtZXRK94ZfbFUpkHgfocJryZsvB2ZzVHWxiRS597Y57oACpNE5MumoB1xwdsNNonWyjYninUmKioE9pVCL",
  "key14": "4kx26ywMKtBC8cWtGcVB96DfR5Nyxnnwn9xmA8MwemP3PKBXzdbrLr5zWpwubN4c2Gf6cpxuQNMHaafWbZDkdf6Z",
  "key15": "2toBZ5CLRSYxDc1K39bWattCWLrxA7J3MrJN36DsrYVJFLMMVFfw5KDphrSihvp8791nQDdGWeYsKWvTMaoYf1uB",
  "key16": "QmdqojTSXAo2qpBJJs3mJt5kxUACa2oA9VmhoxiqzHsgLEJ54FzNdqfU8gEHd6tyqfnNT7dGnKjg8qfs4D3uyQy",
  "key17": "4zeAoTumvNintaM715CtUHbhMR7QXU41B22MVy73KxLfVFgPVKFZsyaxqVPMoNouraB7ifrXx6DLTwDycbtnCU8x",
  "key18": "2Xhco2ucQUnigWo9ZXdGLpJpCohk44orUfeg3RrQHnKi7SXv5gxsL1w2gk6GCGbqUUgopwQKHHWj5eYcwcAXuZ7o",
  "key19": "4eAwLdcX6tdxMrEL59fEnV1b9vU6P29HbETuSJpNKy37ibq3egpboJQaSXvPrDAZjy6GqTQxf7qjvdMT8wyEJXfT",
  "key20": "3zpPnue35GPTJxsjczjxo52qrqTYn3qr13VUDibMnWLAiHLYDTrYUhEFhQstQoSBjX1f3vQUZYDAtEkLfk9Q9xnw",
  "key21": "gwm13ZPgLqzgSy3xspkHyHZepj8NAXDwo25nLfyVFCVVRYw5UL9MzuGdBTyryeyfvxFbuguHXxVtCs8ydMnYfu2",
  "key22": "vLRo6F85siLwSQiAHV6jMeuVVyRtbLxNGVANMw4jjuJHaeAdDUQTbtkeRSRLf5uFW4mgXKgRTUREDDJnCV9B4tb",
  "key23": "5AKBmAFeqdgreB3zp3hdqvEazrjeoAuQEgTpV2r2Fwn1Y66gD5KRJErgWM1SzTYBErRSqjT9fGqRLbR26TaqeoxT",
  "key24": "644mPc1cSX1W3doEhm4z5pBDMM5CF4pF95zaUDxG4pGjULgMQrqPi6fa47YRcUNjSLRZNXnBEUsffHVWnrhXq1zC",
  "key25": "22oMBGRuDw4j6bARFVh84t6o1Cca4SQ6G8xaqXHj9tQxXp57Npmv623jvPHvnZTGYGxZTbH5WS8xJkpBGosTCzqZ",
  "key26": "4V3sYfMNrHYvtNM2UUdknPnkKuhdNmzN12cyui49FWXGG8ATPVn1pBF1ss7xZYq2HJDCT877qUVaY9Rda1b5ry1f",
  "key27": "5Tu3TULzCaokYj95fbn9GFpejgrfqtfLPRFWuudLxfzpNYs17gW3WPWhwsA7WBicfeET1mfboLFQP4DdhNGG1mGn",
  "key28": "5vJ3KCjuXd8PqcmUpyNrC4Y5oUiZSgAd7eyVob1oHGLq6bLX3jqqpE7FPiVbCpkwoJNffAcxkmuajNtLsCj9cwZH",
  "key29": "5FUEsjgBWwoTKgfM7QAQXMghmFLjR9wzLS5CPw3Nx2QmRqXbAHAdsVJsCsnSsS7siYh3svZo9gj3QUzfVgCgzwVy",
  "key30": "2i8smx7tbjvZmRG9UHytRiLPahdJiS9DQkNddsZWkRAQapC6PQW1cxsxUVMNXkHN3ekALPPGXVQa2Zz3pa8mjmye",
  "key31": "2NDFwPX51fttenPeVTe4tPCWc6fojR1QLWpabhZjhAUWZrr33uNwyHkAjRUx1sPMYk2UMYHXnCPacURoRsDovFqz",
  "key32": "qn8PhBJTfvK9ye8uWAeDkumESsZh3kLfMjAzUP4iGmt14AMxAUmxEnVavfWL1YRmgcwaNJnxCscMLryeecZUdEx",
  "key33": "2Q7F9ptBLhXR32Zj32tG7aGPrBGQNRauZ1hUH4f2PWCymxbf1NejQq6wQyYqP74wqsz6eRxFhEa2Vy3RntvBrudr",
  "key34": "3xoysYbjkkjCoGY5Y1tvDuHgAxmGjET1cYDyv4pD8zoxtwLisdd8qG57FZvrP1i9TzAybLigPdqdda6d9yGSwSh5",
  "key35": "3ALNFTsAzgp2rTgrvXYs6dS5sDZQWZJBsBaSR58BkXwV9N2hoL9i52ypSm1hsZGWAZjYzNSbHN5BgeNKA9BRGy5S",
  "key36": "21QKStBLD7qYewzZtpkjwYqf7NHQ4dD6KeF6FHGknsvzhn41aUB2DBgBZzuixfwbykn7paLn745LCp2RpVBrb5Ns",
  "key37": "5NfwHmp4YGg62gpDMHWrjy6axuCrWxeJp4dATsHtBLyGFh5vwgB863yv7ZhhzBQdFjUcirf7KPHwbuoDns4n4fyc",
  "key38": "31K7XuVmrkcwUwyU9FtWVf1kHDtAooxqq5u6QbCiigPLiPY7e77ZPQqtnEpz6vpqjaR8X4Thg6tYFDySDDhfK3t4",
  "key39": "4RnhJvLiiv916ZDsYhashqjtjJ34wDrRiM7x6qEVR7yEojaqqt469qDhc3eYMffjiT3UKveSffW3WCMnypg5jWKu",
  "key40": "4VBSMeqyMyxWphRArzyR94AUFxdJfMgVoZ3WqqY1y8dkUYwCYWTKSe4jNVJ3ZVX7KwL7WQoqBBKVtMqQfMkpRg2U",
  "key41": "3RcvxtgSZ1dMM4jGPJ3wzrF4ogqv7muCLztaXxyWc9qBVhZKjiXB8SmFahfD1qZPL7aHYqC65H7td8DQHCwJYFnu",
  "key42": "MrNxp223SN7MtYsM1EDdNWkV4fvoby4nFjS1fymv1fVwkSNSbZZfQsy8xa5bV8c18Wt8QQhoGj2bV6vy5vUTj7q",
  "key43": "5fV12xuWAKaXGDajJ3MkpxinRcoiTVdjnb6RBYjQBWKUuic114UmHJLmUqRedn9YYcyNgxUrf2QCKWVNvyiqQBGN",
  "key44": "4UEMQywxr6M4NhhjpyifGyTtBehLz37QZQt42TUmbKiferrQG9ZXo5uRcuQbFAKPCUKQgVXBaPzxZGTVThFd8X56"
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
