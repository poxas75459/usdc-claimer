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
    "L8uU94epDqh7VNYc3KcYgk4NzFtFGnYL9GnfcmkDjMd2dxLAT2Zy9ZjCkxH9xGbSya9Gq6nPRvZvkMhSjg1BB8m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i1SHrdveFGEHEduaTBBHxnZ7nmLT5ZWXLK6DVQqepiGmvLpFWtT5GXMnySQ1368uEsXbWU294wZ6mgfdMSGsimf",
  "key1": "5zfzi9pHAaTtc3jtkzNjq171cuYYmVCAmq4f5wc6eAbYThWpDZrT3GidqjnMptBTMYu5tGfK8Fa3RMMapNQyaENn",
  "key2": "3Xix2JaMZ6tyD9vK4qajufg2HN5xNA7tZgAw1ELuDzSoW5nLDc47fHuuCYZmZKK5jpv3mR5ZRweM2d7oHDdfTvLR",
  "key3": "4NdpeZnRRwpktscxVd8rS5diZ9bDZmTxB3z5vgmrgHXnGQrPC9qxeHBam9uAdFBfoU1YaGmMi4HmXXvSU8gVvzYx",
  "key4": "4fMxYcR1wCKwUK9gLcF2PF4SJ95A6KX93BQQNbxpZRQc3NRzjqMfmaPFFRrJM2DE897QqpiYzo6Zf31bNQwFF1zR",
  "key5": "2epJoPiUfxohT8hcAcm13zjnRsqZfzLhBn8CwmCQjEP9fkwnp98KbaJHDxtuqHsHwGinLhfixBwr8io18p9nUB7e",
  "key6": "64rv8VvnahbWTkzEQiqjQyuUVzkmiFvYx7do4EngUrRPemCiRdVp1uk3CLthF6ak44x4auSRc1ZGFGf5kGqQXxA",
  "key7": "5CoKkE9gDeeBQrGjziZ1bGTWhrHy7ZojuQKiuM6k6tHNZRp8eALNXBreD7GCUPuf4V7GodMB2cZHt55rNWGEzduZ",
  "key8": "5wsKThKEQ2goWrFC1BkBFoUugPWHRbszXdSnT6KmTJm3s932cxVFT8WrDDZySehZAXwLEdoivYBFRkgFYeHoAu2V",
  "key9": "46VmySL88kePQwKDT7ZLe4CEW9jwYgvBm7qg4EskHr4nDjcXx3CHeyfz1NQMrciKWSD14bwsvq47L6xoaXX8jUQD",
  "key10": "5GU8XwkJWLMRyZ8dFQGFBBwhad4F5GtaocgMUQBk73ao5x1DMCGWAYfEnEACXjm2Z4ZuDEwNivDU9izqafG4Zwu6",
  "key11": "5TXHm9cudqmRzvrW4rh42SjQJuaqy27PDng4b4H7v5LsAGZRDnQ3pZZ7pjB1MdgSLtYp3D6GhJFzVpPnBxT4rne9",
  "key12": "3kvhpf3qJrtBMPfVYNjSK3zVCz2s9cTw6ED3naiG9irK3vXCLEzAPVw11S3x9qY8xuJNM5BFWnNPqKnboVsMaFB",
  "key13": "pjrSVAe9o7bk8XAponwc6NXuN6D3mGcH4ak1BcDPXQ8NkE1pbkSFVPB6oKtwBxbMzeQXzd2VGKpmtZE3mhjEDrV",
  "key14": "5LX5BWE3zY66vHMDaK8rJ52jQRBAK5c53krr8pHia7VcEzSgR37MFdHBJdwDiANMoFbDgMxmdq8Xepz5YPBustLQ",
  "key15": "4npE4aWeNcn1XrGEAiiJgk142p169QxsKX15iH9k51AA1gsrJAePW2Yy3fxPUteks4egt6hNt7mATYusEFiPU3CQ",
  "key16": "7XTCEdwMtyCTUk6dks1L9uxKx5u7W6RkHq7Lfnm9pLhQweyTVCAgrTZJZhHYkNLELrpyTUqPRwf2xwDLJsCL5Pm",
  "key17": "5n37DTgBsmbeXcFdKj3s6ktA1gdtGzghV9AKo86pvavEJVWmwzQSSmbu8iG3vk3zxwWP7QnNZjoX4XDEC2T2CeAD",
  "key18": "2Z5zRv4drK9ndBNWkhwpkseudPLSKZDUYwxbwp81Xw6MsmU86Hq6iQBYxjpvF5xN1ngHcLE9W6WW9fsUPqmJZHdm",
  "key19": "TZTuigXP32U6c9gj1hL9hTNp2gdnwF6KEeCTV6HLLeMf6HaDkbGknNHUSRPLWLk9AWXpmqU4MZQ4ZnDtMa3j48m",
  "key20": "21KKrPfZKco4p5rvdKursCcrKqfudhrNvXsSn2cMde5r2TACMpGYrz6VtA6zWTsi3Lbq9Ai5gDDserHAoFKni4w7",
  "key21": "4cKLRThrxT9rot5zuUATeE5kyc5h4qGMLpEAxihKYW7iMMBmj6Rz5cZ4Moksck3b77HgUTATDufQP6j3KWi8EUd1",
  "key22": "oth9VjtPpw1xRMvt2QKrQ77GrC6Tzfij2y3agpmSz4RsnEmf3Tq2VAHwBda5zJ9GQwUX8GyZ6VyuFsqTRHAARCC",
  "key23": "41Af5rRoNwaf9GgvhWCbMoF4YXLHMfTjtEpxRECm2bS26VwUqe1XLyijx7SdNUjUfmwVytpW4CSjasHmqvynTKQ2",
  "key24": "Ey3W1RCN79aJx27GVLWQ3YRzejyK22sjmPvwEbB8XUorMaP2ZocBbGedJCxx4WKFCnzsVTNLGiDiJYjjZ4hu4sU",
  "key25": "2swWsMHNJgQK4HYYjUA35by6KCywuf1szY4n8BJPofpMq49GJfiKLhXm4q4CFNk8RD4JqzawMU4QTqpbqN42hApE",
  "key26": "5N6pmhygUDs4RgcBxUmLJhHnmj6fKvdmrzKmRtPoM7trAB2zqgQwq9UK4HFbmVRxRcRNSzPTS5av6KA52hWZ1C7Q",
  "key27": "BoD5hVWLCghzZWJ1fnTQD4veRWLa2Mdj9kBZhGfrNcx6gotC32Udbn1aatsdCvMD9fxeL2Cg3kJBxDQFwVXtfC2",
  "key28": "BXdBvs3EY5XQmR2CEZmDnTfjnbpqLcRM5jNuyfZrzZ4VAr1LJKszye1oLERRHsZuP4zUoHfVNgyp61WmnWD85U3"
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
