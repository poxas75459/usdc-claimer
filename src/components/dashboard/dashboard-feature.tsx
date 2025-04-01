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
    "5PAzSw2en9xjtvhpfhKeF8gGVZzTvRqoJtMVgUF6fNvoLYjmn9cdQCc8hg6bx5xvx6KPbFzoyDiyp8UWqVwSuq6H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PoKEZyRpm2gvzQp7fEWXLy2mMxUSs1DLYgKztZMmAZYLGAVXiCV3VXnwUkqK18AHME4Zy2oyXYMuFZjstfyZtrK",
  "key1": "4oyCc5q26xbLNxFBvHHmsfuq81MGGyyG2funGA2EG3efMTvGRg24Mge5RWTNUHSwQ19Rf2byNxEehCxLStNb9qUn",
  "key2": "58QCYv6bjg2BEP49Nj9u4yx1sAAgxUzfYzWWS2FKtnL5KBTrUtMVczeywnZL3BVncWiPcbYHZjc5kWa9kSo3Xwsb",
  "key3": "2xC4CRdvRJPpZnsH9DuDAcdPDsQom21Y5xF6NjiKrP3h3KgaxYg83tjNYRRdAK8AePho6w6aGkChzzKFqSiLTrE5",
  "key4": "5fHLyBX5tNAfTknkDYsRsFCy3cyrBWG3QHNpVzeJCFTy7pvXhv5rVZJaJLyzqxqy8Teb7doZLnWCnHDCvZb5Ncp1",
  "key5": "32MAEir2JN64KtzBPJzpcJBpyPFgSKTNFCoWmFWcpMPBo6zLjJxaczZWdRYEwNmoJYUjtspoAe8c5pJPZtdhJPKq",
  "key6": "4H5MpR89rLYqxk9uegZfc3y3bLDYZHYoDmGR9kZ9BzB6uDzy4yezuonHPp3VEKKLD1CoNMaqUCWdAKSjT1rNXsxU",
  "key7": "3dnB89gi7eR4cFtDcXqGe7M4Wh59SbuGWDKowrFoMd9zB6ih3piRQh4H44WnZ8B19h92HzSbVtkR56y2gsupGbuw",
  "key8": "2r2rXeAE6ysZJ6yzwBJcQHuVMvaj3TAn7N87DVCh87HF3dVbVVSomZzvzKbrKd9UtbGCH7fZn63dSrzpMV4E178t",
  "key9": "2MXk3YfPRBAGwtrR2EqojfUeziqaN6Df2zffzzAdN7fUorCKFmoWb6xvz6rzrevXcedLfJnfa2hQXr87vw4UwZn8",
  "key10": "5V5DPGAFCaYsANmkVgfc83z3gSdEm9CYUkP9SdayXRVxwWsrWqQUSyeHAn4NWBQ3iMWcQhTcoXjBqmpawuMCNCEJ",
  "key11": "49ZWPEG8BAUs4Hra4qgqqMuasSs3GFtdV8HcY81ughL51kntLHNehkQtveFk7nMjCoRwfKPgAiiYW7epGLitZVQL",
  "key12": "3yCzkV6igBsNRHtpMr1iYJQS3wTPJBkB5u3JafefC7edFqWdmyg3YjJgT9YeBL5dYx8bbgZ4R8sCwfy6RHHpjMLd",
  "key13": "5wxyzZNHHVi4VgixEmgCiJg4La4G7RGvfbRCFkGiHEbbPY5m6oUfmpTVPS9GyKS32DmAujFanFh9NoQPyeASQhiV",
  "key14": "5gS4bmiA1QFUz2HpJoxQaJRrEZk1XZt9c6NFPo4PxWCJ6i7ZqCHgLJ4pQvreumzTqrPB9zWM9fFofyYjcRRUsv9R",
  "key15": "4vmLznPQ7vyGgYpjZ3RdypjLuYvCwgCHKB4ZZFTiy4NpqcSGJZnd59SDLDnPsnC8jq31A5XvDN2hXHooUCkyn4VP",
  "key16": "45VgAoEHNEdZCrmeNs59nFGP4XZacnGXFCWvdZXd524uWomjgBijyexNJ8Lwy9gM54eRwAEzJcfho8eW9HT3nLMD",
  "key17": "3k2cu5nwofZt1mfvJsfZt4mGuRsDxd6RQbcYSih4QsdrpFWsqQhwhSDTJfPfyrU4kb52pFrCLqBE1W2NyHA1jien",
  "key18": "2ayWu91NsxWEQ5jgvYo91VcqF15fmfXLUSH2euSyWFvnXvJpEke6ZpbGD1A1Wc4PsgCfjyBRanKTWSaR9caKWpPB",
  "key19": "3cteHXp2pQoFxK2AFDQYrb5XNkbL6jwnHHuyUsLddDKt5ps2ukzTNzhKaLpeDXcUPp25ByqXiy7wyEyL57U5N5Lf",
  "key20": "o8BP1nJ7YNxcpLqRZL3mZzLrrdXNMLCPFTvwQDEuSGyWo1DMrTGzb8TGrPALfAfUUSMWaRd4Ftj5taKp5Vd3WwX",
  "key21": "k5SJtyuiGRG8k9sbH1mqc5fmw6e1Fpnb9YgjMpg8FmrrdJ8mEoXvCqMFyfDLwaaMRAgvSiyEvsJjnfTchRxHgj3",
  "key22": "4eW3yWbfJEC15Li8XKbcBsDHpV5LCz664AFaBPheZPRcmeSUqQTZQxBSaGumU3cdesSz7vG8h2MMVV9HDNd1iBpC",
  "key23": "2kQpAikruiQap237XxAueWGx2eCY8R8Mc837L5B4R8gSgiNRD1WnmG594suZ7wy21PBYBjh8eYfhnQi3DxiqqVup",
  "key24": "tN86nRCMJxe5Hx58PAqGZiKSUiNz9CCeSkHKNo79xrsoHeaP26cAyhbvkUA6CKdSYSwxWGCFPDJ1xBg5RsTb3Lr",
  "key25": "779eVMZX5SbMs9BpJ997BBYN2J8XGk16nhV6R9HQXvGt8q26SGR66wB97qETiiXpTSRSpDXh9XhtgTmzYurZzn3",
  "key26": "3GbSWoo5YXyHkSQ6s2f45SBhU7kFtQDgqcicnNpUvKBdiBYCiSavQHEqrrM4adBv1kjhaznhxAvLSHuKwNkgrLTC",
  "key27": "59CLzGDifuyTre3cdNJe9aHZddVBU5vVwFDBUdVyCgCgqoeaUTbzGLezyNRfZKmRV6AXM8y43m574KeJK9ZRy59y",
  "key28": "3rTuL3QGmQnRFyrr5nBLByimq8VGAEv7fHRUVuqVPjb8aqH6N5LnoCtRscPv6yvKbpjs5vayEBZ9mt6oUZNWqccQ",
  "key29": "4n1iHLmaGZ3xgYdfvHVY6BsZrRypJbNHPWQFAnTsvoHVe5VHp9YNAnEWSpNA84UjaHjzMqMMzk2oNZKyyxEtxPgL",
  "key30": "3fAd2p5nfZ6qvQ9TDvZjB7MAW4ivTPEp8giaok8QcHodzXTDnxkqzfrQs1X3jdNPPMEt1vQ4dXCTP4coUEPCAuh8",
  "key31": "37kBzxFFMKPg1D3VQ79mpHSURKFRgagqnh459wZJ4Fv4MejY8QT6DkN7RqkoFKfiyiXfNgHvpFxTeyGgu1ndyBpL",
  "key32": "3uK4awKwb5TmotPqXEUndqEtnxUEsgW6bZzEU616kCfwzNWjYFNHrofpgZPzcqggwArFcr8WoNnjJPNysGVtWurU",
  "key33": "2T4VJvsAHnwV35y4512gooy7HbKs1uhgFn3vxtDZ5bcVFp5yt6xQ4zVCueWXmuJL7cYPrjbTo7tJZ1sPjKct1WDL",
  "key34": "Vs4VUZM2dcNmSroDdfGytYgkB3khnCqS8rfVLjYA6ikkiBXwifpS537vdt8DyFZwQXp1AsFBwVASzw9vmPaQJFX",
  "key35": "2WFsAJahMR3yqNFqcbFcZHXoQWRQRbuV3AG5r9WpgpTLPR4tTEs1A6eU2zHNSdgRKjXyV57ssA69r9FYgD2b3Jif",
  "key36": "3QLUWD3kDrVxaXQUxyCWqKTmGDvX8ppfzsXPfbHqGYyyLBtL9HWrnNhUntscYpa3iTqyDovpJDUSeckRXsN6ZptH"
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
