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
    "4fZ6uDRhuyYmGvoX9HkkhrcSam7iS1YSE5YQsUrgzEhQeGX1sdZxPpJvH7W8eHEcSLfB6pJjfMuGBEqX7921g2B1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xbDF5yWbquyuYL2U5tE73Pg5GxPu2Dj11HrHQy2yageyutDALaYTTvehUcBAXmFkz9RwnJEyrNR5VCrBp9AE6W",
  "key1": "5EXUGiAX1tvdsqrSWDwJTJroCddjL9TouMZJdpTWoq65A5G6DuhC1v5eWrgPPsqE2T3xdXZhptjqHUdt4rUyKrhg",
  "key2": "5MaW2LqaPXB8SRyt3uUT6zrDqKtw6K93DntxYuZ1Wbj26ZRuLLnkv8DZ6YB3kHrNN8zWL972fRueAsVvrnQgj5yt",
  "key3": "31eBuLocPhLwuTmLRLWMJqqaPTFaU24UYPe4fNFvqMBFAtveRHYNS8YRc9TwmCMAEK3FHfBvbY24r3GUrgx3PM5W",
  "key4": "7crkf747pBKDfakHDPsK9gRAGtBZCJ2HaQzm7piwUFR3pG4oTNZFvn4ebtUdTz3WErq8gEUkLzzLjyE4v9V9bME",
  "key5": "21C16mn85y7DhZgTzieXFqf4SKidfry9LuMLh1oucNRNsWS3hXwzGgw9BDUNsDA6kmufakpaxFbr528BmgyxSBnR",
  "key6": "akdouLYtQghGR72ZaLhuxKy13XLKouw27dcvyv1VD5rT1jR5DA6c8gfHqd8dKS5kr1sgjJWKFaxv6ypnmA2xbTN",
  "key7": "4v576CgNGRJ87TzDsex23N3GJqS94u2Jdm5rr35rY9aNC8H62H5g379LPYQ226oXsRyfKjo6LwBGDaWajhW5oSMo",
  "key8": "51YSonj1mKz7hopmWoVac7DBCL9HAHErN2PdTfGmqWXd2bKezjSgYBhH3Eiy2UHq44UJj9waqHVMK6FAjam8H9R2",
  "key9": "3DD4FfX8mDkiihxbq7xFLZGMYhZpaQFi1WGWuZZsRKLGSNM5WhWESbYSdEEurLxLRLAg6Kc2UBG4iz56Qp1GmWDg",
  "key10": "2BjDscTeiM7aY2t2Ga8WzdCxvMF6czcR3JzQHA54SyVrpW736Z2Ns5hmfYdbxb7w8Ks2LvcmuXhVUv91NNQyHFks",
  "key11": "2K9vvL4uPaxSCrxxwF9HExsyUHrfENvanqhSyn4jRtCfDRQQVhjvfgDbZsZkoD8iz1Qh5GDZwhpf8XXTdZxA1Ttf",
  "key12": "2E5u1F1iWyzQJ9x7Q7dwsKsJWqdz4g21DEb1gQYDTpAVhcZ3gMuwPC5C7wGyUvebERGKFiLPw4XGt9Az5hJU3tv9",
  "key13": "3ZMTQtzA98HKTTXvJpYQ3jZYqok1hdCkXsvwgeBXFbTgmJ6beYuMw4fGj37ozWD3miu4vJ8on8ReF2HvoyFME4oV",
  "key14": "3twbdixaAAamRYxv6YhDfKVmes95kfcnBvLX43vdyB27vpUFNfZy3Wd6t4f8eq5pwwKQEV3QBUtxbBsWV19bFF38",
  "key15": "2t9pcAs16WoghsP427eZamsPjZyecgBgGL8QfTS8frCiC93nv94rwDP5ExoFrhGmX6EcPeBTeYrRJrNczSfotr3L",
  "key16": "5yysWtkrpg4WcV9GUBpUkL98aYVfBYTD5oP89tpoxVGGvrmWbcpeXW3njwbfjhTTjD82GmAHkwLUjWuiyG2Yc9Yd",
  "key17": "2MrZgYMzcxo5GmCpo3tUdmA4QCWRzFTb8SSDPPwyWx92Nj6tngBvL53MAs55yUG3otmAjb2zxRERRDML5iaMjViP",
  "key18": "42pHtsQ9dMDmTh7bXLeVF2YynrxtrUyPBh42xVXEKPTTu3vtboQFSPX2r7GVpyUU3xTtZCfnd2WDFUV68rXBpBaD",
  "key19": "5b5uAEArQJws1wdGCaJjvNkZkwhjgL5iZuT275uX2SWjRxjwJ5yduxtc2Pi1RmLPAkaxNBFwTT64iZiQyWNQ6157",
  "key20": "4jeanboRbgMvhrPsazNThgh1Hh3Yf7tppXq4Z61BrNTjcaEpzCe4BWWW5V2AGfZ9AKauuMzQYMgaUrgJCneM89PC",
  "key21": "2LhwrhVRjhnEGLBy5iJwYN9WPyLgq1MpMwKmoN7b8UeYngbmrbJZUoJiEVuMi1Mij9Vbsc6LkgNYzzMyYSvF9axY",
  "key22": "3k93ZxGxZqLvF1eMJHy8EzaJP9FLcyxwnw5h7afHBjNFLZSCZbyuTwV5rRV3H8tF9hoxG2RGxxbTr6KbtMicFLvE",
  "key23": "26XYxYi49gWjt8c3aYsi9tasbnm4vwhYb5T7ZSRq6YaQaZNLYqQ16NGfUxq2P4TBeM2twAXgNRb5Gy2ScBXVcKAK",
  "key24": "3g1gtxD5wUX5JBVKmFyZFQTrwgD4xbaGkN7U5DLgktCCdxVYqxuxWexJD16T78jUXDhrnNF6KKAen1a8Sj9yKihW",
  "key25": "4VPW5Zc8rcHrb2yeXKPg4ywcwreA373rTKauWUh83qgXZHLV5TPXw9a6WoGNrtEtVuZ3by99b51E1G1hWvdZWPrh",
  "key26": "42omxguVmBXNQqNsVLfXyYypWSD6do6kd6NuFwyqujSY2UR8EoXHsgfGNkj6aDuLWX85jHNqKC42e79xA4J789V1",
  "key27": "wtVco7na1dzqBApdy5u5c9h4ndt4bwd4iDoZxkBbKqCnB3TaLsEoG3nZLCp5thwrkf5b3LNHZ926aK4AtJvr3CC",
  "key28": "5NsxyCNNx8HBgda7QB5NZ7693uxmZuzx3qiczemQAEoy93r6ibtr1JWpADrP2SB6YWqn712cqCDipw3HRunXmkSR",
  "key29": "CRNxNDjYoVPkUrwvoJ8mm3FwoJTzTJhYPFXZ9JVKyVMaH8N99WZdGhW3yHdmsVxDnsEoZCudMBoNXUB4wjjS7xo",
  "key30": "2ZabwsVk1EjbW43n8qxjFWNWqLN6wU1p6hvcEZGD3PC9ajoQyQZBfjJB46PyK795zeS2To2guVgcixKKL2oaXrtc",
  "key31": "hMUsaczu5DikR1ZHBB2xQ3H9mhjpLc8erQrNGk3uNs2XJghp2s8ZY7kD7XSXnkxkmqt2DyHHLeLF7iY923frSpT",
  "key32": "3sq9txbRCgHdZ2W4xsc8RZPts2spMThRXhLpk6kTtxQRCygdVjg62aczoWeNHPQJRTZwxTBjQxKaXgyBXT3CqX1i",
  "key33": "5dB2u8fCqzKTM1WZpi4eJf2RqNFUaa68qrKPaLyEGp5hPUZe6sWKoeHrPPUSrNvEEcaaoTwWdtQmgMhcCTGcQZKn",
  "key34": "2chaP32hrfydYAUNETFkZ8TiUZp5dXUUAbxzP5HJMnbWbosDM3bYfBHV432yuC5Cscj4FEidUFw9hDGGXdTmFcxg",
  "key35": "2ocwk9aw39zPUfzFugdMtosva3JecHkshy7Lnp1YjFM1PMpZwZiDePhtirLevNQJjht2cSWb3QNQRnCCh6kP8Ndb",
  "key36": "5g8rkwdLU8hMf354gbuazwtMMDXW5jDZWMySCrE8bBhAL7iL7iDzi3FXYNJ7DnMNkioi9EF6r12opGKNzpZGx6TW",
  "key37": "UyuATvMr5maoS2bLhHZhDayQQnf83rpXRkhDMMvfz5Yw3b2imHKMpukQ6UhzeEsz5Ncuonc48Pg1ZYRt3n8KaPm",
  "key38": "3cBi2Fieicn7bDQn1qYQYVEThQu57pZG7yikeH5KfGt5kibMjZgQYghJCX12YawZNARwdGsPWkVZq3cWDgxXVS9E",
  "key39": "5wJDKzMGYmEC2CTmkbUGbBXLEDM8P8Uy3m8wDqpAwHqsQAiQbfXzKoHd93H5c1uW5g9UXfdpVgG9F4aTh89NodDZ",
  "key40": "4ZfsUaLpE7WECrpYFMM2yyFoyfy94XSfNHxU1pGSkw6Kad1iGV6YJMsDzsfLURANhhEFEt1bwd2FvvLZy9WGHaXF",
  "key41": "fxZqGVirdGvfgMn1MXipTrG4jYZYsHf8wajiTFWj2mMppyLfnPt3eehzsCq78eFoJP6QMffpuPSw2BzeKURfBXR"
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
