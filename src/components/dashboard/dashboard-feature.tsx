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
    "4sQ2dopNQdmN4VC1ceSnGDk4athRQxJZTTgXXMtVcaNqsxCKJQTzByr4jg3174pNU3XfEthzRFkv9BFzLNNFtnkU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2auZLz7HX39EpaniFuDeVRa8BHtQRaB54VEo6mMa3Jts6ZK8gd5ELE3AgsuwsNdU7yPF3o6xcSp11GNHy9Fr6awq",
  "key1": "3FMRJ47TcvTy2qzKHQ7TYZRXTWbD3qpuetnKJT6iu8eMU6PobpX25kH4pz7qu7FUfuMmPM66J64FPiMzA8fn8fU7",
  "key2": "4An83xGs5nys1Qgim6irazYyYwHtDUjgjLJpnDW7vePi324T7qZtPm7P41vp2PqkaWFejcr9GTrDNquddrP81No6",
  "key3": "4BjSwjJAAvSvSXVTu5hDR5JbXHZUhPSAAwy9a2Yv1qAxfGe5Xm3GGfzZTnQ62c2LQhk34ppMy273qxwvwhbT8Yj",
  "key4": "4dD5pZJjjiqPcafSbGJvGiWjwPJy34u6KRccQDbMi88hvLwSYH33XANcTkwBdj6gwLfL7sEiHbjiP6akU76xDRhz",
  "key5": "5HPvJXCsnQEJAxBCwGPec9GRy5tEGRryHK418wMetjFKxxX98wb1KheZHxB16ib7JxZQFGawvvotciNBw59eYEzu",
  "key6": "GaLzQKw9GFgd7QVc2r2V47ricjna1VvpSEhE139Jiq6RQ6CEuJ6mqwdSLk9XrbUVeBX37nKFVdMc2NicaLNW2tm",
  "key7": "5xWS3X61CYS3RD5DmE5mxQSdtcNEHM3PFho4RaddL5XXCrkp4rLbn9awvRh5Y1FgyKFg2xzBKemt9kS1H9eB88WS",
  "key8": "4DUBDbnQ8kX4rPrguvXtQ6SHGSXSKtSsL3nYEVrGqnCbso4jKRJAy7QW7M48tm1ehkde7hU1cVVFDWpqPZDXcXw9",
  "key9": "5p7hreZwroQ4xtSCdxqgttZWq9TnJmZVNhfXbKBsXrYzn1hui93zEXnMRWwdRxjc3rhbmkdVrCaabLwoCeWHHkUx",
  "key10": "3aJZs9SrYHs95ZmCci5U6By4oFHezmD7PFSUDva2t4pWY2bDFM5NgGzf7Fudj2AYtTX53F9cJ8hHc4HA7ALshDzn",
  "key11": "4ugaX5HDtHVuaHcrBgM8nppCAYaaXQFgNUQMFwu9EFzRk54AEpUDx7n1GjRnJE715p5gMn8bGrypaWG74Hac2Txa",
  "key12": "4n1SC85Gnn84ZDwaHLzj9nj8642b1m6CU9Eu91uidf8RopkPEYDiEs9zNFjifmbySkEnXiNamvdTWtRkx12KGkhH",
  "key13": "41K7nPN8zqJjyjPd3iKEsuucYrJcrT4BRC4y7SnoEeM7Cr8sFrpPnamoybxb1f2LA7DcoEkKAm1KxQU2CEBSrDoN",
  "key14": "5UHiuq1XW6AAR2RwiqdTQY2yU2xgTaB2o6GDfVU8ys8BKEPa62rXFFEihDQtheFXJxzE6CRttCHjDHKKbm3PyCDg",
  "key15": "5oMWkrYj4jn6fSVQynwS34Rcn4tBRmeAMk6qeAJcTUfsQGtnho1kXbenFTX1ESjpxX1Ze8USsm3cbq1uo6xy6VWj",
  "key16": "Qt2dnhVyZiXz7KXUT569Sm9zfnsuQgyZwN5FchFuj2Z7mtAJ1EYVJv69x4tPQFf74jWbXHLsC2XmCpBMQ9Gfz4F",
  "key17": "21VWJ43ZwDq44zPRam5qYp5TRECLUPnA1iuANQ98CtMvBd3ptmpH4VPHhMWaZqD529H5k4Kv7fXTSwGmogtz1pbE",
  "key18": "51CRzegw3sZY3tiwnV78rggRi7WRdtAbpu4eKPXXPsaQfwrKjJQ8R5eBdxa8fxSy31v84aTFLnxb518fKNkri3Vi",
  "key19": "4RALfSFJPgtG6bMGYatCnuGi8AFPKJM6tPPfMtSsEde8j76sDn8Z5pBXaPckgqtKoQWo9Xj8b5UULe1WbLoqTwGs",
  "key20": "5fEosbS1HRc2owr4J2zW8K8ZnLqw3MQUoNgfbbeLzzqNAERLBkXEBTh2mQobXStqaeTtoHNkKvSXztceKND86N8V",
  "key21": "38y2jeeCxBzuKMvUBAiEYCiWrYZ4XypRBGzQbNycEyqurHq2m1BfU8z1DyBVtPJv1RyPDEqPPbxqdvMLdoGRtABk",
  "key22": "MC43HsxkpJRJrU7HS4s6Et3r4qJZKCWbgUYFUh7EHMVP4NHobuFHFew6uK1j8cyVp6dEhoG3GeatHG4dC4Hdnjh",
  "key23": "3QK11NS9fg358abR7bBqZKt7Wuv8dTrt2N9iN4Bzq1CfQzAqD9htrwH9noDh2Une9eCKc9eYHqGyF69uibTWX1RU",
  "key24": "4D3WVffDDjnH1kHyra1d1VN5ULDvjGXHhnuUjNK2Eu2Fya8gMYYobh3i6L7sUTVswgMx9xBczSQjXxKisSTLcCeo",
  "key25": "3gGjXryDCfrS9sBKpxWf8QMbdm59azkBqyFhu8k5ZukfjKp5shsHs3kFJjcaKCZGBgsZ1YErzJ5xwyGDCm6UHjap",
  "key26": "2wUCYxqr5ubAgKo9VKvUsg2bx23hqeCZUbwWCmo66dsWqBv1GXtBKMKUm6BP2rdS9Pq8x2Y2QUjutomwXjkaER7T",
  "key27": "5NuKztCARuZa42w6BgYMaq8VTaM3PLPFesRYzbF2cxjYW716MZp3e6nscapVzjtKK38xDDTwDYM43mZQs3unyTvZ",
  "key28": "5Qana2cfRDe96kiRWieEHqs1pPNWdVofRChmZM5ax58VPmm8TLF4nVF27wHBNGiBESZEEBWVPDvcTzTWbF4er4mc",
  "key29": "7QfdCFhmQnbGKV6nsbPPmGQv2HQ3k1RfsSNC6xJaXTtz4QPwMPSgFNm5LA6mtgBt63vprzog7cTm6rDv9QKDydX",
  "key30": "3Dx5rkxcS5Nwhzof6Fe1f5asa9v2E6rWobSVgJDMez66aWwChM4d2cPvsahzQwXmtXdJfTUQcXcsPkWuPtnebbuC",
  "key31": "2NCwoAdqSCmAQn5u7fqkx62LkcuBnceeqqnzB3XroBdnMufJo4acj65J6LMHqYfNYPnbuEzer7eKmWBSwrRyJsi7",
  "key32": "3tygcXGKXqQgCs2MSRTfZimmK9jfqWC2s8PypDeGHrF6pEwvPc7PJ39F525DFz9G9q13HMM6rGaZjT8L6n9iwrsS",
  "key33": "2LVeUMzW2bTqs8vLTBsYMetd5qa9RxVTtog329W7FcKmqQ56zcTFNXTceMUVeESz2np2nrJhpxC7RGqqufjugvLB",
  "key34": "3KkXZjKkTTBFHzd1Qqu5A8D4Y6uBLsnjtMJDitqWAy62Gr3odDdqPcaZ9p5YsMzYwZnHiEXevX5ho2cAS6xeCfyG",
  "key35": "3d7M71d3LZpKzeuTvSnbpT1pabGKhoKca7fXT7LbbzqyB66DGnSUNcavN1ARQgXwiypure8ccFyNDrFj8xhnRs7m",
  "key36": "25WiA2yRhzmmgNA9nEUTpqsHAyYj1oyQV923G4LVSDnRt75FEBzdMww6FqnvjJwNxVhCXK9pYTGGryAP7enCncGD"
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
