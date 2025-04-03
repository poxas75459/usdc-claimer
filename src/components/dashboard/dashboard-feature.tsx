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
    "62gmA1ABB1P8k3U5uCmXGbZ1DsXTQJ86ZN73g9KikT9ckMC1AinPfoAXXgfngxFp87sCfHAVFtEQmzwPKCP1CAjk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H5QTixYHpddykAXV4egroA2k4iZuKcL6ohgpJBQFGBZfjvUVJ9UuvFvL16pLpqJw7MHr9jNeXSC6YsgmjkfEAGr",
  "key1": "3YbjiJkrr1f4cbTo8Jvj4ViK1VUV1QERdfphwHcHsKx2P2imPEcvPt4zy5sFiga4NNCJymQsvQHGbpCnCTGgh2kU",
  "key2": "V78o8wgKVAEvYsvFSp3chrfNkrETDJUcCHdyVT39XRKw4zbEQUCo2BXybTnWCQHH89NEepbs2N5C2S4fkDc9rXg",
  "key3": "2LGzdv3PTQ2fKNQLA1HrJwteKiXU3zrksuUidKW6CiHJoVRb8h6qpvsyXNFEWHNCRA3gUcsUJxA78Z9s4FTA4Pdg",
  "key4": "5hfiKk69QnRFsYAViHddAMqTjLZ63jaA4niQuVP4feosYnPU3Ls6vTKDcrSMCaLSpkQEo3WTz4qdNc4W4yQDFccv",
  "key5": "51vsQxByZYdMCZRsnx1GfRu8ugRVzEk5S6NiFLUHtDzsG3YY9fUxRZpUvfsajSZxz7TRRrco8Ad8pvs5WiGQULN3",
  "key6": "DL4teV2RMoepLjcoPLyamDXa2AEH5aX4LWs3r4p5e717YDcAE98Hqi1mEF52XGkYPY12HAj6L3zDHv99PGDM6io",
  "key7": "4i5S945FtVPWpV3vHvzBKeKEbQgUATMoEX3zZRVZQoyKP5XmVXGougDJdhdmw16vu57xx1VQXJwK3rqVTJujumXz",
  "key8": "5XUcqpP1RosjPzYqr8Fj5HZov1Ae5hjUEz5ER5sx9x41K6RaeyNRtLMPKms37nhAMhr8NvNRZo1ArPfvWgGcueFm",
  "key9": "KaxvPnhQtFS4aE3unuAU7Fesj5BBcNFudrxjxJRmEaeEAu9MAQTuqVFGwvYteBR3akGr8u62EK3u3WErtkdsttn",
  "key10": "4Cs1MdC13HWWwc4ogBfXSeya8Qcfd3R9dFrmQuDbs6iBbkvv2gSQq17gY1MeLo2YVaTeQcCHtcdvpqw43ZEE3hKT",
  "key11": "5QCouiBd1SW5uYFyMksEd8sbxe3L8Np2kAQbBGpUER72bdzdEdhMXEy9PkX9YwXPd22kRfYsB5y9eLbchAmyqBAw",
  "key12": "4qLDxnz8snNK8K238enPYCHgjN92762ZYbBGmRUp4NSfAiiUHQ4DzbATpyvcnXjDrVHjd3TczbQZoutu91WwpR4N",
  "key13": "zAx3yHAaSh9PqLoweRCnnymf8hTdDc9QfEk8HfU6Ci2kULzqUJZJJ3eHtAixwiUPecuYvohqVcH6QrJCcK7XQyA",
  "key14": "2jQL5zink8qeZ5KQ1Gf9Z3NPonMxGM2qFGcWfjXMpBmxkHMhob9NKacvBd26BtzgsHKwJFRLRqaYsuPUqa5KBDjX",
  "key15": "3wanQRthewSPtCkcVZUJnUSy8mQrqMGJHqboCBzsniT5CCwCiMByrgxSzBYxyeTJHQkqgVWGVn8MaSKz9n45fwGw",
  "key16": "1x4ZC4HgsdxRm4CZMgH2Zx2LWA27Ag99deanT5mWVveZv7SQUQ4VP5rZYWsTEzPw7j7T9AbMn9iSpB1yZB9oTzH",
  "key17": "4KPEJeDXp3aS1jXTZ5fxRi8z4thRgjsX41q8DWf1Nmcvjb32bzRASABpLwFcqNTeRyKLRwkav9fp61GNxvTLGVjC",
  "key18": "57Ux3bynKWXaGZrgqBQ2ZTwXGNg4W654H5VxYdNZMgnSpmb5Rykk2gh35cAwg56ymiwBm8tbHw6wXSKGY8BiB7oM",
  "key19": "4WVu1RWKyF52qjE8ZUJ36cZqAyteJs5dGLtTYwtvV7vq4dcWRqtQF9snMamqGjKhZ8my2xBKA3igGb3G47LcE1Zf",
  "key20": "3cv5HUnpk2wkGBrCsvrGbvBtU1GKudufSi4xD8YxpALXa93xuxmZLHmCffU8j76d5jfqZKjzfU18ULfGpDMv1dfm",
  "key21": "4h8dzeBF6K2VY5ktnb97m54NkdN9Y7edD9aqK43Tg7ZChKzUXCp8AhQtt6J5vxJqx8cxMcmeJkgJj77CBD1KhG1E",
  "key22": "5X34bZpGpBYXUWBgFMxezd1AkyPSPc8FK3pqMeVsSumjpzbi12ESQ2EhT9jeQN1T7bQPSggpvY6oGmjrmVUoKw3r",
  "key23": "5Y4T5c3Sxdpfg2Tux6YV4xoYQToH3BjKYuFNNhfNwTzvLbHCsdbj3ZXi2Z4X9hUX1HDUcWQFdvyPbZ3ffghr4pXi",
  "key24": "mfdttuAhaMsH2gg4zisYHGWYCaDjauNBhUTfZkk8Uk2RmxpeTzbGFQx51mMFo6otSuzvQrmoYFZhP2Zjm1PcxMh",
  "key25": "2xgRbWtxP6vghqaDrV5rRBqB2PSN6SRX5dE15qu1Te2c5eyWAxDxynRYJBcg7NtXvv3JjZLTM4QJZVXTCKitVTsP"
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
