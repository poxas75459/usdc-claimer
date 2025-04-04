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
    "3GSKwFB4HFtyoAjWNouZLFmq7yD13ckCEs5WD9CUP5sGWbv5dq459cGQiFaeUUewktrranuBfg1KoLR8mvxYYDU1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QAfVXDYUeNhn1DwLEZ8AgudKWrUNu7WwmbpyDS3NqRFQ1NdQ3ayFwxfZVzuGXwCqGQfPPqXrrAH2vqFrH9F1kAz",
  "key1": "3gZtJ1mEL5oXFZYoyJ3jviMkFLQ6nxNC1YnazmaFs1oRG3nWz48ndnq9SmFXxQmx9z7a7ei9tGtsRC146r5t1vzP",
  "key2": "GQ94BCKMUzNoxUMwDhLghfbPNUob8bECm9fom2HFtuzMoecqHKNZnViemRHwD5ebdCBAphyCmhxHQ31oW7yY4Us",
  "key3": "4QBeWM6soggFMeDs3XnJrJ4w1QQSTSLxyWxi8gG8fx7u3mztnmQXUduDe84Et8UKJpkASADEM4rZg69LnckiwC2V",
  "key4": "52avWNJeAkt8hZbdjwzbUhQh4W16y8XipdCatq5qmGHNNgbdS1G5VBD1jLJv2yCQ27fdWM53hURTXUDG2rb9d7Rp",
  "key5": "2T8o5a1SKcDbVBWDehaU9jmoQhjsXgcKka4i3SXSc9YkLC1qP14A2ZKqTGCofc1z9jme6bkrNpXAm5XgFzgSR1y8",
  "key6": "2y2UY5YcTBWarG25SK8XaiSomX2aufSprRoJgJ7gzmWudu6QCJ4ou44fgk2YCo7j29sdUfA6yBhFpNHXUhR2p3nq",
  "key7": "42xSUg35xkEjtvjknyJUcMgkRL5q5Pgs1qin8qqBfhuEdb22bPWS5exi4iJjq8weEZ3Ban6P18Dkn6o8WyCFKs5N",
  "key8": "3Tnqay9NdA6gZLFr42psbWYkDow5FGwZxTjGonfPL4nD7MkQY6FWYXznCkxHiQp5Htw4JW63CVtpF7AgdUGDrBND",
  "key9": "3yJarfXoPXH9QwMycJXhDXezJX85U5HhL6wiHfyNu3ntHiKoDRC8uHdZgbfdg2fyBu3g81AJQb9H4khKkkmdvbuX",
  "key10": "62mGMrS35pT3Fp8rqcKtPY3uU7PzqngVZKNTK1wDswV9JY1jGj4E6MWgWLBpxKyUqE5h6jWie2XY6bnKaM5wvsy1",
  "key11": "EUcXuPnpMV7SAJBuD6maWghVAKpV5uocGR2bsWUPuvcCJhpYn8ZgkZeKG9gYwJZrE3P5yRMePTCspVyEYX7eth5",
  "key12": "5XtWLFej9jhykTb6id7RAJF6rY3otyWmk9YpXcg9FzwmLAegBxYeByQp6i4brcP2QBDnNxn2nVNJ61aAoCv7a1io",
  "key13": "3M6aaH6W9nc3LSLCroYWsZLrvg1hyDkePB1YpJEGjpUNsNiC6p1f9kC3Ae11CYtwcb87LwpXfubNxx2GKPKT5w6x",
  "key14": "3GTfmXtHtCHXbxFJtnaB143DAF4ZaPQt1vaD3UAkKZtiTZ5Q6AXi4Qw39h697uA9nR68Hixm9cfVmiLiBtthU6rv",
  "key15": "3aZAdYDuw7BkkbH1Dk1Jod1JEaNX2u2Ncq4sRBtgvoDwHZKzLbDuf4Y8GjMyQV2A7MbvD2dvSWWsgwnaVmaNYNdf",
  "key16": "5Nx1gGgpob2jCZHa3CrMvLwpg1S6M9JwQTGWs81R1D8VEfrXyKD9ThiN48qV1UKt5jFx82wkJuk5sHghN3y65L6s",
  "key17": "44vCVBHpgdAHi7AM4zBo63W1XRNfqfzPmnGN1JrZ7Vq7rpSz25stJ6uUEjX9LERdf4BAXDuhERufmxEuJyjfkFZB",
  "key18": "5vFFLGcaJgfsLp9v7ETxEmoiya3WCudFqRz5epUDiNPMhzhmC91wqZ52oLwbQSZHn8TaRqpNh2xrndWQFX8aohhf",
  "key19": "5sZtmwzj3Pz1H1EwiUeEoAfsFByhsErtkjLHDNbTW6CwBbkf9KpW5HLhCoeRFPLB1kigh3oPLE1zVfhX5BtgH9d9",
  "key20": "dWQu6VDJPvQjn4kUvuj2EuzYnLQkWDpvxNnTdoFCfU29CGeEDyzkjnoyHkSxyE1p4zDBeDb6mTpSYeJ4Ay8wULo",
  "key21": "561NKzo8xzEXDWm3qJSWXdBKLKwb7TafJL2XM5SoLGp46CkCJAm5aGgbupQKyZdqftZWP35tQwgVnEAFpp7buKCo",
  "key22": "31C7KcAKvijdHHB8u3FzVJznqiE5hxx8daxaTHVguVyzYkaYVaYbPtpZ3bLUPU13ByE51Eb6CiJ27PX1GHuZpPvH",
  "key23": "5n2DpGEwJp63cHSwgdtPksUyusZdJWzxGZEboExoC66y9nkwJ2jVqe3YCMmppjDNqQCmg9xRfnn4y7eRM4w4mU9Q",
  "key24": "9Bb2FNWSz6W79UNWHSbH1KtDg4ixSg1nmMjqomFCiZQusVY3EM9GhBBQFi5gS6pKq4rR64ME7KnuHKrupxAoLpy",
  "key25": "2i6uDwYpphVqG9i1vGw72iSfmU3CzTSiMcwa7nbEjzq8ULtfTrMY9Xi6fBTEFGvTrut4BdmGceWLQ5GCLMM99U5W",
  "key26": "3UL9otUwinK7oTtQXiVayEEfrZ1SPCr4Mj5mRnXGzUhPXCbvfqo5ueHD58Vo6hrxqGuU1sAe1qU3dTweYhDYcoZq",
  "key27": "sqHP21rr64onWiHdKJdr7RzWxrzECCeeEuvkGcaRLXLwgTi3UAfogMotZvuxFB8TYFsEnwT3x3CA1FG2k8YnQji",
  "key28": "2A8Zwu9oUiYKi9QEZ87RdJ181fWTj5rxFzxKgzmCMhsUVDBBhGdK1EFt2bzVkvQ5jagMc4bwdAvSHduE9x8DrChc",
  "key29": "3pcZ1TZ5msH1HG7dLh6Q3g9a64Doxz86upek6bBEt9pogPJRoZ5ZdYDcHhtSEPZuZfA69g6ojV6vCoi4Axau2eq1",
  "key30": "3Z3YkaM3yqbdWkYXCXJdJJoeRnShfKFyckrwHkGyntXiTRgbgMhZzrwSTLg5ZXHzPPexZYasbP6mzQe6sdET2Rd4",
  "key31": "2Y4T4FY2a38yVVN7rdLsygFzKyGb7VgtKj3nkePzD3nPGwaPphteBvP8Xba1uvYz2BrnWhjJ6LHNYSvrESiFR3zv",
  "key32": "4LXs5aSn63NyX77BM1vT6uUzXERDMw72yXnEBgpUyR69Yy2kMW44Z7HYiZoVh9XrvqPJhkzHGuyhA6MDA3ekvwJf",
  "key33": "2UPBn5uQoshirS3ACSfJFwXuUGJs5DgkCRqYD7gmqR8RYYJBa56nSbaiZwHuBKHBzktKqXMc3VQvJCW66ErZX9gK",
  "key34": "z61XawoJ1WThicDfXMgpjWwyzVAJczzbN2LYK1azgspieX5zo8h5dum6VNDgqn6YeP5docxduoVu5WELUrTiLfj",
  "key35": "2Vb6PKoyZRzQVFN8HyyBti5SDvEW3asSQSWEtgurhmESct7ocxwDunTmj7b2YdXUzNXPfEwLRFeP7s1R2Bv9qrqV",
  "key36": "47S1Tdkq5Ff4FmcNSWKKr8T46iDd9hGrHm9kxK5qsBw2JDSomWfVd18m5cjCUscUurfK9jozr4TFHbTVbfHZsjJf",
  "key37": "2sLcM6d1admDgfYr8nDFd7nr4nM9PoA46am9mpQuCWBubiuqzMn7irJXkJZNnvbZo1gg9qjj1ToVnNGM31HgCm21",
  "key38": "4SMUsXdThrP45FvCVjXZxjgwMHLhxnfFPGQhuiJ1TQ7z4jnJFv4vc7vbVodZo9a6Py34XAJaGW6qxQ9B9U3FVC63",
  "key39": "4uuBrnwk9YBc1wKwvHnNPjqkwa9cF7hLvxVR3fbZQWBH4aDnKitfsHYzKn1NQXx1LokLCGnemRNg688QsGjcm5j",
  "key40": "23sFGjRMxnqGiL8N9tzx1HYGLK2NKQDh8WFhFwhnS7Nv77ExP8h5k9ykdayakpwj5KSsyzSy9Pw7EFXMsz26BHj3",
  "key41": "NJPqSvhG2iSngBWQjwdKQr8jy2EgY83qxf33zTMdFGRzxQbd9FhEy8SwCdd3VWwoJKs7vovG4h8hGaMRRFjzTYM",
  "key42": "YHWmnBvPfG9GWzBX6ZQcbxU3rRogm85Gx4tSeH1GEmAnyGgbVdgDKaVmvuDghyasu5SMq2GMGnhGHW2Bw5Wcpp2",
  "key43": "eADDsKamwDj8E5BiptTADRLtw923JKfngJFsxjNpxhvuJ1bVihCewzePHvtM1KvGw5boWzau68uYW4pkTeDQ1AE",
  "key44": "2wc3oxu9UQHyv62En6QHBarQpU5LE9AQUHkWeDVGnegQuU4sNcdrPrfEwoVAjw7W9u4FfgG7a2mXse97m5EZ67wE",
  "key45": "2oRxVJ77toFXU9pbkJLVSWUevzyYqaktAXVkZWDf2yDrk92aNjjAZEXU4BfJJ72pdwK5tucH3yxDJLvmui9dhrqj",
  "key46": "5ujmyTK2FXxxxC5Jv8Q89GBJVGietYGge9M1kPh2QdcPYXskW1YNBd5GrX9hz2tSVFuQyweiXSm2EZzno94ofDtt"
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
