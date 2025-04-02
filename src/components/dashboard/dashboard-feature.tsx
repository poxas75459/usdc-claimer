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
    "61BmjHnTrxkk7X7bQP3Tr3VnKFdvrmo13QrMcmycYheMu4xPyEj4rQXximCe1AKLLb8Dq7CSAQ52iRxHWPdyKC2m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vNmwUkD2fjWxekvekYKPDc5jZ3nfjnPktDhRQ2WRo9xXM74ZLjeFckaMzm8BzEAkyy42tEfsGswY8hgsebMqPWc",
  "key1": "3TimmBKXsPYCviGxQh8c7ZJikNuiAD7A7MembgAsUQnQvAeZibTtuLggaFBoVA4N8eREvHFA6H1uMfZ43x8o2VFM",
  "key2": "2bK77nvzaBtJmm7HjEeBoq6JNJXKT5sb7AG3tDW1zViUxaXa31AnBXeajeM9MZuHYvcbWwiRWDCUkH2aPKuRxVV9",
  "key3": "27cS2jW4XC9nTC8NPiLbe7Z4KhQqVw78Hwh5oLFTZh6ri1aKHPHtYBCV9tB1JzLLPZMvGiV5VAxBh8jxd9VvLTxE",
  "key4": "4X7ia7NjpwTNW25Y6uUsj68h1Xg2ATEvQ5EoSridy8PnGdQqxhiNrX6fRMooVrHJNX634Dm8gQrj7tmuK4Cu9ztF",
  "key5": "2egqRy2WwUDt5QeXYpY1zW2KRoyGb3ncKNCSa1BcRKQwUtZHaz6ThptgjhgMvmKWxa83PLjhXrs3vSdFTEoK51rc",
  "key6": "L99Rc8XxB2XUFMKoSMsMgUtZt1cAdCAa48CNdHJW3fw9xgHSugdKNRHVDHWraMBUee6Cav9EUK15iBDafktP1Tt",
  "key7": "32WW2KEX73RPpEQU4d1YAJbZ57nEJm9jt7mXwdKK3jkvmSDpLi9AwDuZWztRMj8ECtoXHuzbmN2mXqMUJJkunsMP",
  "key8": "5YoeHDXDJWkam2bTWBoF1jxh7GY94CzYNTMkhL7GK2Dp32Y1wZbQhU3g4DwokkYFrjYCxSYLDaTECiw1H7xs7HpA",
  "key9": "5GhV6zVXNcay9ZBQgKdxcJFrjxo3F7aoQYEza3DkCrZsgeanXnZ2SNy7eNSpaNZW5SNBWpP3GzZgpgkX3Bsonutn",
  "key10": "62ndcrSGY1zgDyS3SxJKxQzYJAAY55T52NAHLzCWpfPoG3rdyNrJLqcz2bQxyjAj1ad4Vbk8NBZuRcy3HZkgCr7H",
  "key11": "4P4EKi82iq6zJrVRivGMmozBSmtbirdNGhRdRxYpAtQGHGAAKyZbn13pbx8tN38fhx6xVNVnsc6Zh4mMDyswNvwn",
  "key12": "46ZSqCvRFqFoCojR1ziJQQZmjyVS64TZaypNhhqE1UfUqsZj8cXjdQWqbFqXksfAMjBfeWgi9RFvCbybuZ6axGxA",
  "key13": "2YssuuRDMQrry6DocwuZtn1sVgUcrTpGRJY3fd62Gn5EKVZatDQjzcxu1RfiB21XG498Dwv6k4AMGFEFEBg7gVBV",
  "key14": "3y7sz3HcSAvCpoesBs6feea8CTvddKGY8VwWsLmPkg8Mxxk1jSYkdQJVvzM1ti61eJEAVv5vADt6QJhh9vSGCqr1",
  "key15": "YccZGBae296kRXwCBDMVjrh7wLNwCQEvLaaJ7LyFcFn1Y4eS1fGu3RquJEe1xPVvWxUeskUpwUwyHf33jgAUpAE",
  "key16": "2d7fko5fCY2r4Cv3ik2zYfommQcGCtVFgG1gSNDDWu9uwwncW4zAUcBBVaSZ65WevBde6BbruuYxcS3o1hgf7WZP",
  "key17": "s7SvJAjMADeAV77oi5jyGnDcksB9MhJrCnBzoUyHQGc8spXrMVMDvML6TbjFy1pRqtK9zctk2JWkNf6E4q2c2W3",
  "key18": "Kw9JKeWUCGs3tZJxbrLMwcyPLtqcjFARnZkX1QAYBioXAfJMcLK1QfG3cRdLPqEqPk14MZZn2XptkmzhfGvtQNA",
  "key19": "22i5PrCvTrpijqEhU5aMYRK2Yoogx3Zk3ZSEGrv5bCdWpKroeaSdkEakutMeyf9sBR3RBrWJ61mvArnB9hA6A2QX",
  "key20": "41xmNSfFGYeXyozCnjEb6qjADxaiEWqXmsdguVBZfqDQceDaJQyo9Yo2ik1Q4TFSJDchqGhfdN9dvTRxsewCbAcF",
  "key21": "594XFexpa2hawHqbSgw4pGBGu2HCEcAA3vyJSLN37bY53HQd8Ho7VJswRVjiV47HEQJ674H7dpCVRV1uFs9xoox5",
  "key22": "2JGws5EHksgpK8YgwPJfy37fgntsaR7sCStmiu8LgZmPuRuCfvQaLFpmU63ZLgCJs6Cr6Uhh9SqfWATAy4Kuf7h",
  "key23": "5FhNy7R7qWYimWJQnj9RohXMak2Xquxyq3ZMipjBX2pCoLX3sJSMwW4t4aE5h588VH4ik1UrGcCMtGBUaVrPeJBP",
  "key24": "5fUX33rD6x8pmYPGw19Vio1Ne8FDTvi7zJcUQRdhxVVi9CcErpconYwJBqVLLbvnPLExvdJFdwmnmmtS89zCxJCP",
  "key25": "55wWo7nfbZSuHRxUUsSvL28dsmHwgCEYCkSPrs3dUYY9cmxFPBEpPEVh57yvemhCZxY4VeiN6BiSnGWDpXPwdzvJ",
  "key26": "F9gu9pkjLhLcnoBMrnZh4VzTVUJpkbke96nHg53o8PCsQ8N4kSspXm14ADfPKMSDXVkGU7GaB1qAjkyfH7BCSVs",
  "key27": "67D2RgngUjMUeEaRoC4F2S1JD5qrJkeVzkbfH7dz6A8KFHmSNQSzbRKGp3pXSCk3Sv7mEcSJk9yNYmYYJUMmyEiq",
  "key28": "z1zdacGDV7HMw9WpXpWhp3TowpVWqQtRaBZXEfXFiGsBtC9bGP2p5wkrFub582QyE6AW8YXJSqXrA8m5oitBT5f",
  "key29": "5rDdihUZMcv21MHhs9j217CA3zMgUdmR9DXJpT5SrWXrkhSefEJiV6ddSuNCf9hFx9V92uUDYX7RWpBw2d5wAESd",
  "key30": "63r2CQUkLFq4phvG7V69A3nx3F1c7tp9nLCjmYknfVjwLMzQCA3SrY4rbwgdx49XMukParGdohKdnNtpYxugUwVn",
  "key31": "4U143gHmjXH1TGYuaJXqmeCVicaANJMaiXBAMypPWcV83PXwSMsNsaE8McHzA8fZDyXbahQrDQGVPjZECoZbZknT",
  "key32": "4ZQirL7m4gJHeP3QcMsRLnzKQbxm4tmdwgtTGWizhjWoiX4s6PxifMd5DVEhtW3hKqahCm3k5Y6YfH24j7j2Mpx6",
  "key33": "28SvM2g4668er3qSta449MiyjHJXcQ2pRM5uxJXfZDD6HpE8yKx3dktvgr52USrY8hSUn5hhCXiG3KJn5bZDGiQ3",
  "key34": "44D1zifCbLLCm2jKWQhmVhav5FBajnYixD3DRLqpr8Em4guLKsE8FUJjPTXkiSrMyPccN7fGz9ruHn8mVt9QHFVd",
  "key35": "iJ4MGKdmXwuuMkL4K54CDNN3CsqyFXc79ebPsf7AyQzT4EYTiMfkpHKkfirViyW3SpCKG2rJsqR9A3Zdrx2TSkQ",
  "key36": "2is1vuoihmT5yF9GrLc78seLFPehjrqJnjR4MMrDSf5z24nRJnJ7yxQUxXo9kmzn4pN51ujXEArru6zUZWWW6dQd",
  "key37": "51APJoh7AHX6eJ4yhWhBB8wdo9DJCGWXempJYetvS1xv2rVxGgHGBpq3hv9dx3ycZK2KK1nxdnJiGSzCaksSQNDS",
  "key38": "611rjn5VPVZVLA1tMxabCGV5uxySPJAPVvhiSwm2giN5WwvwDom4bNPZpksQkmJgfEE6VqTVF1gWB8jVfrRWHrrT",
  "key39": "aJ7QncJ6VKgWvzMiqtPsBCcnM4JTTtXoZ6fAmJT5WKmV2YERDrfidHNhg1fHCpquyeX4iHtvHfUJ4oqLAvKTh7m",
  "key40": "3ptxbbjHUpgL9TiS14w9KPkBKsx6LMFZWuzz6wijWveDsnZWr7JqeUxmqdXUh75xx8WFAdhupNbFLCok2uZuP39V"
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
