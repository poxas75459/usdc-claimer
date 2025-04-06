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
    "2aBVid82WFqYEtot4fe1ZFNKsiSS4yGiLWQW6CUNDWLcMiGtpuwp8GBuQsjW4TYise5diYqFwXdqxXPXTxtk63xw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46L9PCyb5MXP3DTowvFcoAxpjrCJddECUbyxBGGqaEzSzor8k3WzkRN3qk5YBrjqMC7VH5RtEaEc2Gm4VCuBWZnK",
  "key1": "3Tu6xYwhjNA52oZ5Pby5B9y4Nbk1JJc3JtZespo99zWpinWM22E7L83CMcNTqxwMiUCkvCpbf1nJVbVzxDZUSMqA",
  "key2": "3jJa46xGnvWTLbGK5sHzmHEUzYYAtDcAdBUwNPazWyManFb7XKSfXAijXR7XP12bK4EGya1xsQvDPU9oZPtYN5TK",
  "key3": "5UghBp2AmYgFD9W8YnmQ76zmpwoEgmwVodhbS8iWcYArLD5UBHApxrMyMQJu6DmLtE5notav1ZivxyfL3SLLoikA",
  "key4": "4eBMDqKBbLjFHSvQuSKLg5iBe5LRqjRGnLkfzthFm7V1FYU62tur34aMtt43TsehCdCvz42PStNdk7vz1PAq5snA",
  "key5": "4fFHY2crzP77BnBuHsziq3AmF5eNna3eww7gH2UYyATAKopN1GFcXRSxW4wAJVbfm575PpeCYDhE7CAwsDQYbR3K",
  "key6": "5QzxDJa3cvZxVzKkyQPnt8q65bRfJZr7UDeq5HqTe2s3bxw44PX3aFPhZrQKycQ7SqzP6zqbqwk7qU5gfjRZXb3D",
  "key7": "2mEzMAzktY5Mph28KhXYZ82xt5fcXCPBAVc26Tn4f1wUvGYqLL1FeTvGYPi7AUGPJsgEdbQ6P9ZyZBFEv8hLuPAH",
  "key8": "3rktS6K4cQCEii1Nmi4fMmZQhViKikqSCVdwdygKDDJ7r2UepCs1FLdz4zX25SazVB3HUHQg2RtMRyFUMZUoShf2",
  "key9": "5ev5E237B6aEVe4G7B1JHJNSQsL5X22xmqXYeTXwuYihuvL7G9W8NfccYX2NY4ahzdV9wUxq52Qke6mXvN3qAxf1",
  "key10": "4M4V6RhLg9tuDjmuVG9rMaxrNMewGRSyakcAEUYY6oqqnUWAt3gz1WvPwEq4L3hT7WgyZ36Lg5qyitz36WAkHLun",
  "key11": "4XfHkzNhGhmm88CKqBi4Foz55Ljp1Pew53CKBv6hopesLszauXTEFhmiDSGd7pR5US4yTWfriLCGB57h94cKzoUt",
  "key12": "54tx6qg8QS1mGy8DKH9z8bEHqE4BBsLrqxKdRYn3ry2KiViy43F71r87WakSKk4oAtcLE5btu2NUAqtP5Fy6yK4x",
  "key13": "4DmMf5wkWWVeUfa7aWKZkHBisU7uVeMQAHhcX2xrrcLz9cGJGU6UzrXtLfGm2WUkDk7gxGnXpft9tRa3amrJpWsv",
  "key14": "4Weg5L7y5qMoysXPxymPFaShuWQxd35SVEeAnsU8cvcAPzDz1fEnzbE561hJSmNFYWQARZgFtRGaEu4juEYQF5P3",
  "key15": "5DmTjDTf5pMeLGJjzBZ9G61agrt1hqzF1V429AwZE6xdHyURL48pf4HRGBCd5azMjr9GzDpfBXqAXpTX5KeHVNvV",
  "key16": "4Gp3P5MtDjXyhJwgfCZxMY96MzfCFfYqdix66Xdy6A4kJpdWk31uL7nuucBqLk6uM8ijJqQqSas1U24oAwXHPbhx",
  "key17": "67EZVzGa532Tb1ekZhtL2oWvhUjyym59GL2S7iYEmtiNkKGH8j3dvTB4Wz5hqn4XQtJ9R2UXWTyD1hcWmySbgXe7",
  "key18": "4xHMBGpq6FgdCx3Bij6ZyPEgmQHiVRVbvFjwn14FFZLgPRNv1AwjQpTwiUkRg5S2Xrpb6qVd5Vxb7sL4B6yKphtG",
  "key19": "XpMjGmVqe5wG5mLDVuZinCuU8hjdcf6NEGxzVCBMBS66CiNtqs62vqRWprroo6gjCZqdGaeCbmAY31apPfGPkPi",
  "key20": "3pk6x4cTFAXMHdEGP8bLoYp2eqPrjXE5rKRySEJG4Tgt5ZyV6C3NnQin1nKKzCCGvZXGVLbCvuR5ZZu85KcWWkSF",
  "key21": "45tkcJ5chvZ5DcCrTYnjA4feA5De4hL2bZjLwADhAv6nTNi4RxWgrtAQxufKk16wz27XuzCmdpjRC1axXtKXaRwZ",
  "key22": "5p9LEavQTg21XGWeSaaa56riCnz6zyWoWjniFqraS4AxPGWm4XgDT78sERyhqrYKacuXPXMKSVsi9PwnCgaL47GX",
  "key23": "4DH7TcGr25uCfYyrwiGJJFMr5f7KvwP911SY33iBzBFMTQnwN65kaXEMyDMKPVWxSN3HpLECwGzASTE4RybfA5qh",
  "key24": "5LWwGsw36pTWHdK4ix9rxPpwhcRJyYfo9RcTk3KGpqFbLUmDeNj4F43txWXmRfuWF2pJHqiYWX4HJ4uScSHcLx5E",
  "key25": "52idJH1rahVTURY7C1rpRRmbPHe92694nNqqYWJh3CC7v7q1eWudhq3QNYEpfyu6ddPVWNejH1g5sB68oLR41VdT",
  "key26": "41kjXxJEHGQGmijTKAPQt7EoTAKtKREjEJ5QRpieXJmF8kHd14bvVcNLBEVUYbAhKE5ewxjmtNxkJVqrejj9Pmzm",
  "key27": "2nBgHcqBbdPULPytLb7qXynJuXGTPeUwinhTzJffNUXehUWMSdwuPgCv8Mtn6QFCnPMDasRFuRgRpUHZPACX1mU6",
  "key28": "rwV4ydq8kUqBb8xAxYAq1pXPCa1xiRvwxQseA5kAmbPNQLbbt3P6diEApSXBwqgRvzWB3We1FRUCKyX2imAKiuB",
  "key29": "5EszV7gnKtA1Bo2aNB5FA9NakdXyuJ795pGHBX7G2ZkP5uQJvKEbK4JSsFtegEvV8dVUk2DZyg9HqaJS2eJK9tEJ",
  "key30": "DTCmrKQLVh54TZNSByXVPhZaRmSicZWMnMWw2hRhZMxMtA5TmaeVaC2ad2dt7Eb2S83xJzc6nJR6rjeekKexRdg",
  "key31": "2tUmYuXVV1JDyt9HTzhL5nVejx5kmTDtFv5EfufuCCEBSRtWsb7yhBwbthgCHybfYPT3oe9NtDKiT39y9qerRJsc",
  "key32": "35FWvHTHfF7mdDudzovVVFsuuD1D6UcSFyc3wb52Cn9DCNVVKap8FQERc3gA2du3611fyZ7vLGTd1uC3HDgf4QYA",
  "key33": "4gRQTwULknP2rxKUHg8Goc5v7MphxQPR8169rgnMJ7ENs7KRpJrX3NrC8DBJ9XEW75c1dXJTUupPkhzmTXBssScx",
  "key34": "SmbFb11L6usN9kK1tBvehWnQphdfxZFmbKdz5CqCfd8RaaGfWmYrkPKFdwsJCJvMSHP59fVYfp46JwcDJ9bDJ5D",
  "key35": "oCfypn7uLhHyNYFNPrUBPkkzQxLQtX9i7CpKquq7y6Z6WVff1UUdUoydvaZCHqR26kTvAu9Wx4YdxguTHq8oDfx",
  "key36": "3oxTjVnpUPTGeweHiuSUmfpdug1gpqqNHaR7VH8dDh3eNFsQMAs3r4Sg8h4C4SjZtarLWyRRpfA9pjMFehfEe2MM",
  "key37": "2pMgyjmYcEuvR5eGwjpbXgtLQbps1URCdY7AKmZ1KkgscvRCbnMjPNAKtFRhDv1joUWnZeRYgaJXjo1EHhCnJTSZ",
  "key38": "5pkVyfK2aqPEfmwEoeKoSurQPMjHANAaAd5i6bsjSXsb9wcTrbkavoZwvGg94RPCwJxSgx7V1Rjniv7Pofz3sniq",
  "key39": "3zTSvvWEZNKYtLZ6aStPStvAU49KWmeoPFoyzQqdZ2rcT9sX7xm7TMFVCeBwLaQmVKZ4sa4yzasniU3y4YBSbwyH",
  "key40": "5AhJVY6KR1Ve7LDD8Vnjr3TpQoBx3Sd3nEMFeksZF3aBpLkDK7jmqZaU9J8Syqmq9LQVK3JAVKidHeM4fYiQ9F4W",
  "key41": "5sBoZrFqUTTeYC8aDXRtbe5mStsNkfWCP48wMwbKQJu6m2jgs8Q4so6owFvu5vKUtaLozRbhwdkKQmmiXLAHTbe",
  "key42": "vqhWa6zdX8Q9PGHBoNWQK6JxSxFHxiYouPVBQYSnZy6pHD22EEHsDYhGY6nMcnGCs1R8m88V95SkVspRyzmXh9g",
  "key43": "2oY3B2uaTVJ5wFav7mzRWRuagsjTKnqs9dN5HgyvXDAztkNyEWsKMGhbnajdpkSb3qEjSsyux1LtcC66jKvKMpxH"
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
