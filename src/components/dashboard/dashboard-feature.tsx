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
    "4UwfX74kvZHwhBSUtTvew7jJNLE5FYMyMiiuHHbTgLfg1hRNGM1sayD3Xyw578Qa8krY7SebdMbgHghzAfEX6YJa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NxHaF29T4iqKmfGX5h1sjQSocibn67iPGp92E42yiY41xVbzWynAeLDVCvtyVJRPQ3dey3SfXanKm3mkPK8vFoq",
  "key1": "UfyGb8ZvPuKnwxeEGke3EUvyXwxCwoxfigciDqRxnU1L9XxWVGbrLzzExakQcho6PWsvTzXUhSB2T17bj1zKHTu",
  "key2": "4oZZR3hfoV2wDLRYDBdRvPNquDzGjwhNb3kcqZrVU4E6kztUbnDwFEJHeVT63qvKiYciCsMgVzgNs7dPT27STcig",
  "key3": "5e1Xo1eUHDvaLWKwdVRub4M1QM8KjHq3oVuegtToFayrjnkwJY6x4Zn6kVNFUsePFNdRKDLDNfZTD9rtt8vx7mLz",
  "key4": "G2YKzgd4Yv9exynMhvr2iFaP2rVcT6qyrYvDGvRQRqbS5Wu5WEFDtFhs8HxSn1ZFCbq45yL3DpCBZ2PYLZpjpjU",
  "key5": "2Ada6W2qJJtcp3V8MEtEPzWLUJqZcpS8fZRHkskdiZjBURbeMWjX255AKHSmiXXJawppYoS2VzmKPwFzkeu9ubyA",
  "key6": "226ZnQYb7HA6CcMZf3aJ1BzqkjhCLDvrkR8LFXJc2cWobtpJWWQJvJkt9reHCgEDqNBYTNxh2dhpBf99zf2H7EKh",
  "key7": "Qhep8cPL9BX2cf5e8jTrZmfSxkEvXkM5xzHvzi8gqi4Kq3dUCM87grJcGEg7efPkDbeJRRFY9JE9QjPsnhAwTp4",
  "key8": "4P39Npgqym8SAVpEDQ97cJxrKMydmgpLqqWGDQdLEcNPFGH7TnemVY6q3cJKj7nfUkiV3GwFxECBvGRV8Ga8RfVA",
  "key9": "XFCH48iMzmnSy4Lbgco132tA74UC3znXFVRjPLa9ohEEPt4ZqFa7ScxeVCr7ryTwmYZ7ZJCPx5RwCkxXfb2bTf1",
  "key10": "2pxtXbLREBuRhwQJVRECJ4q5PR25oDmQMkWu6FSmA2GVAsfMNbh919m9Ap96d4ucg9xa5a2EBnnv32Lh8DkgHzfd",
  "key11": "2yirCaXis4XcvZ6K2piR2UWdebSiQ6htbTvjVDX5MiBy9TuCctYoDur3XnXJA68QQ1gEMgxEeVaAHkHYvfAhJZGX",
  "key12": "4vfrjpYFJ4h9pSZdfZs3dP5jdHkBrz3rASQNCooN7EF6vpThf7vCih8uUUYYeAtPLjQJAiLaS76CLuQYfvjWmwHW",
  "key13": "52QuKogbCfCxt5mRZeJHcNX2A2AM28ESNsCwAFpmDCsrKARJBozajoLBUXq28ak22mLUQprWJNEcRiSAuMPkpafX",
  "key14": "5puRgD8YwoBdzwFx2fv9VdivCWVbd8t9g33WKkaEXGWosmTSG2BuCZh6tefy61tRkPC1uyfsGa14eSpJ2TwfgYdk",
  "key15": "5VmPk3xwUhFQku8Aubhi62rfDRXd7WvJmFwaCuYD66V6SkXVs8Grm9Jao1xgqLgzYmTGav2aujNJECwSC7c878jz",
  "key16": "iBdtJUpWzcBfw99Pjg9TUu9oP8pVuv5iD2VjtBpmMuSmxPUxmrQFDuUyJcbBWtFpPTqKqdetRbj8j3ZLopiKj5U",
  "key17": "67fGU9PRpXcMyn9VemoU7QASPaRoBNGHc5Tdu3rHNn4T6XigW6xbx2guBtSXXjDq2bQN2fiPZwG1HePuQSQpy3q9",
  "key18": "pT9RF1XMYSwzZqU6EAMA6AdJPg5Fnp5KwahpkBAZvz9KReQxExQ6mvLUT5xXmu2nmCTMj2vAvjZzQJV1xDgpFJH",
  "key19": "6noBU7m22Dg8HRimbP68FPQ8CvyTgzM8keT8Kou7crai3mHXqsTYBDbR8FfrG9VNHZmeUwjfgrTMH2Vy8CaNYZb",
  "key20": "2o6qNYzRDoa837SFwfDN5T6vzkaaSH2G6Xc8fpMkrPMByew7TjtENip2JmCUdfPsnnyuprsfCBuyRQ1kASERwTCf",
  "key21": "5xEdYBL4PiHcGUzbjLCjv9jm67ya1qkqRgpUews5Mn3cVJf84Bt7srpN1HAwf2tST8rWfhvFvXcqUUYqL2kFYLmU",
  "key22": "28AidWW8S6tYQHvx1jkigCuW2GdFPxfron5atQoEPbQqPmggWSmNpNVVv9zXWXt7MpUiMj1KmFHpxzaeZKF3YTuN",
  "key23": "3suM6JFYVBPU3KcW1LQ8HB4u4G5Hn8txCjRjukshXASmfPBCcL2ZBrxhvNW3viCmfTQJvvhPvfjhYcnKP7myKn5c",
  "key24": "4Gpxeg6hfS2eSHoXW3rHSEMSNBt19B5idRmtUBAA4kFSGEZgkS7VSQCxfnn48hBfWAiG4BdFBc6YNqJ6vQ2uJPdg",
  "key25": "3KZuyzSa7KAB3j1YwjTFjU6FRVDpWc3Dx6tNJW7yt1qbKA8RawGJupD3X4TSVS2z1WUSuqnND8MMamjfbszTWz42",
  "key26": "2o4oARHBiLBM7436C4zNNzRXE9WxTtE6Zks8X3gmp2oS4DC7PX1ULQ9raZ34is8ZFKXH4y6QSSYjcZzJoBw7f3t6",
  "key27": "2AWkm8df3Lfijgd2ihoEsgfRSNhYbpiSdVBaDD6aoFEefeUfRrVjWpwNiqdRGo1X6JeymQQN9LUyse7oznHSZPZd",
  "key28": "2AyKwXGBdRHJH9XsN7VBbLy8WPmM2P2cjxvqvc3BjZzvwpRUfzjMAXbHnj1jEBK8pqgYP85oM7uPGZXiyC3fQsMw",
  "key29": "5jGVS2jzhj26oDksZiqwxf1DDuNUzWVTtBTULVYdroMFQW6KtwxaiJatchZBJRmN5QJgSvwduHBeFMG3a82e77xn",
  "key30": "3j4XqymLdDPi5NaPvNtT3mLnkgwJEtDV9bdLBxD4BnAKRJZv9iaLPh4M9Ta3uHWx1ZGbEnwj3nhkuizksc6mHGhh",
  "key31": "24RphQQUXeTDvR839tQAGzndJ4EzQ4dkjbSakB1CKbd6V4GLHgezpESJjTUzfxqNHKZdzZ9s7TPbYTvZGYDp78J9",
  "key32": "45mAjNHcn68QF2MQUqgmhWvgTnpEkxxZqmWN5iySLavkzhU2xj5dmeAadLWTDXQaySKTk5xKPNPmv2QP4xVegCst",
  "key33": "4jBwCPwo5CyBHBAAs6NPmh3aMcLX8eV4QQ6M8N4sGZ68z4NSyKDg48Ht1XsTWNizNra9EnsGY2pFJpATiQXK7NSN",
  "key34": "LqFrmKKSFKqUd6utGmRmHL7H4zhGT7YVUiGWdBgqP6qf9uovrKBMn7av2iyirjzptnT4reAA182cDzRm2imXnN1",
  "key35": "3Lwen9NWPw6aZ9keBqjcQ2gJxwjAd7YjwfRphh2rvp5k9kxXckPEXRwtQVtxB33RXCmcWz2ESH781Mw8XatpTGb5",
  "key36": "3jd8GheNNufgunLVa9Lfnc3eFxfoG9DX1VLjg5A8Z8TbbXiGBTKeuA92j8S1ffnKUZ3Hz235CxaysoYgCcWpmtMB",
  "key37": "4gQ6Sj1r2zi8aajDfEjmL4QWwQry6rwNBRty4RLFNwr9t4bvmfZLTM9zRwBCDdtNhntiNSZugTvHA6ja7CuEYGcz",
  "key38": "kBpngpY333dWoKG94bhfvUv9SBuxLEjSdx6oMiNCTkHLakdpWgMHayPxHBaUL4249BzvF1urv9icgt34Z4KfPCN",
  "key39": "5riLBEqduEE9n7jDtX4L2k9JRzipkaAgnS9UM8CXhkX8Ts1iBcLsmUZxEHR8ni2Rk6zVeeU1yxAQA3q9pmGV2pDH",
  "key40": "2D2bVWjsWVLrrZFiRGJ4KfSaUTad7WEq3AShr7R6RESYDAoz7JARLt2BmLzsu2e6ckm2wk27biEFVJdCAN3Xen7D",
  "key41": "5JpRYsRfMqVYNr1hjx3yhLAa1U9c6edkoe5rFJKKhgJFc3aZsKKEJWcGtSNthmRhkZRuLV3Tfc5TgQfuCy94hNXK",
  "key42": "LfD9E1mR6MsBM9dtX5tkn1DEmWqFa3nVy8ZHdD57qYowNZtLb9GEqZCZRD23SHGGTryNwo9nX3AJ2nYwjhemMA4",
  "key43": "GBdGKLp7YXorxFz9WrmQG42xcAwa9NJSeFCmzbCVehtCusiWikMZ8SeEcS2oACHD8y74dfqWqVzYrMoy4LssrUo"
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
