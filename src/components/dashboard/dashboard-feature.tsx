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
    "53yF9b3BogkVQEzAkGrniUKoL8qx8mhpUe3AdjdBEyPLvEcWh6KDETZmNE3fjz7AFt8vG1x4QfCHbY2PkDTaRKk4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ir8FA1N3MYNJCsd968STVaw3MeCoo3jY72khN9QfuNFhzbG3MmzAJVSAKueiwy2VwQs5qXN6c9MsUYUdH7uYo4D",
  "key1": "29yLP4UZW69tshAibgh7bLDJF5hLreA7KeD4awmQ4rA2GP5ucHxyfZXHdkdeDsbdXXMT3GwhUE76uhVDJ7Xpb6xa",
  "key2": "WtdQKLyBVrL9rFbmsfLM62Pghfu3U6oMbQXi3UfsHsNBaccHD4HomtSYukWfxhwEJyoF2KM6DaaS6cyRxdodFYW",
  "key3": "tTRty3Fd8dyTP4o4sD6TB2BW1Psj9dRD24SCChV7XpAT129Ny7yT5QazUChh2Xyck3VussyFUJbNyoZTy76T6vm",
  "key4": "3JzQaRqMAaanCTsevhZ3Lp6KiSqUJhQqUUB8JzTewB1tzncs8RnJTt2WmJHv8RSYBfpfsttEP8EJiGbWiMYWY7yD",
  "key5": "o92DujYGf6fmXcjY2SFR62dUkejKe4Y9CQe6wsj2f89doy7D2q9xqMuxVBbY8fihSnrmEGuRoRFbUhxGFN5odp2",
  "key6": "3kv9sanwFBM3fzYsb6WYhXFKPFf2NXgDUBqZzz7o8tGDHNMZRkhwT8h9obQByrP17bHTunqE9N9grRik85TL3MLQ",
  "key7": "2NWjqXHT77eQ6R1FNUzCJDPYR7zSCWiC1MirxTrQ5SLGAb4CohgzKbpM2VJDLYpkkAQaFfdKLp6tYWVTZHrm5UPD",
  "key8": "4dD78j9dgmYRLhr7JJFnMetpcqqXCRkWWrwBiy4NrujHwo1QwwTcZGqcGWX4UaJ2rJiK1KCbGp6vMKGZApkCqNF5",
  "key9": "oH3npfAe4XmR4JVJyTyXQ39BAaX9gEpsD6VBvfWcHEvV2VnYhG2N9Bp1nuBJUGYSuXiFXtxQxj5Q1mMVxfmz9xm",
  "key10": "539RTTMnmWggAP6a9B2mXBt8vdjazbosBTkzC9PPWxzev4xFnSbcxDzyUfVNB62iRnyx5XCK22pG9pAy136ugH6N",
  "key11": "37uh77arueBmA1kiXEgCXvnWwQVxfGjmzBVV4mJPsCZAkixgmq4k9rpTsUSWBuVxzpbeTcjihytuQrUyRMgBcvmn",
  "key12": "3P5fLjSQejFPcBsLQaHnBx8yHVvrKjqDPizHfhYhKkgKpbpWMV6LQzen5dGWQZ7VfGPmRh1gCzdcsCRF3sejSrFe",
  "key13": "3NPEjSb3HJg6tWNmt1uvQUYEJMppjiTegL7V2UA9nodKyUANaGxqMKVWGRaAnyAz94nMHwGybhqo3RiFpUgYsNPq",
  "key14": "3H7kQi7QcTZowRcut1bfcAbNdnvX1gjFRX7jAqPkYp3Jm1WYM9hTQ2rEDRDnYA8kzwdMXyrk4mAe8Y9qwv8PrJ7X",
  "key15": "5tXPu5N8inQYyX41LoDiYDXpzYEA4cUssU88CmqND2ZEzF7AKCWSMenPUQD532TzbmZmdfK1BrnffZjcJWwET1Wh",
  "key16": "3NKHh3MKRQRaUbHoikH1sp2FPtBE45uw4aAM5K2SxDQPmH9mBe3Gvc7E634esEi2QWvYuHozmvy3EiqCzbpHCb5d",
  "key17": "QsPGfsveBXsYwdZctUQLUbSRHo8hjiJLbec8G628S3sJF2HvYGpE23QCCKepkb1bVtf2DYdnx6GQwLbgwwfZTsJ",
  "key18": "5u3KYrung3D67nmZiJwa9ptnMudWEwgqwa2bYqmBeDrQcLuuMUo8ixBBGuySNnx3zTyv6Qg5aPMCzv4ZA1NcTUTg",
  "key19": "31TPXxNmhEQ9gUsFgjesGc5ttH3up7rF1kR7zZWahYRje56ydhZmA2DiVup2imzN3nnCG5j5TTotF2s2rhTZQD5s",
  "key20": "iTdraKgZ5shEG8xriPNQCuJ9fXAWDf4y1eyCfARk6aAipAr2qSKRdtnZ1zLRKnC2XKnaARG3dZYK1gcrCXJdCJr",
  "key21": "2ZEA4kY5ksGBpccNksyZBV1hENvqtxJNps7eDvABK1ey6DvJhLXJNVy32hMhZCs6o9V4GEkQtYzXJbHHPNJE1R3M",
  "key22": "33SQG3W4E9sNmAiYz1NokHzUqseoc9n7HFh4F1EQXzjeBxcXmZU5AdmA1V6Gz9qLStghmpYvXEtHy1v1okRYxM8d",
  "key23": "4gcvza2TJy9zQpzZGfaaw9Y4XVsiC7ySDmBZ8EAtHbmfBxEyuwB2Qzvc9cS1eZam8jM7ajZPNreKNsib6jB9CByg",
  "key24": "6ryq3ePJSYqxVbDRD2eZoMua1b59apuxnDVYYCWdZ3ipJsYyQ9Ek67WM2UrtXu3dAy6M3LPiGbKAnRqwEWXEBtK",
  "key25": "3hZHoVSUpJ8qv7aXwZB8hhikcVvUYGadb8z5V4gFWDZkoPJZwR3DRMEpJuwqoRMMvpEtspULaCHg1oY5SXmnRSzH",
  "key26": "5ddnuJhB7UPmVfAJU6hEb8CgHbJr2nAqFYbwonsYU55Hy7dqMsD1NF82JDopo8bBSoqMAHyNbni59Ew4XWxjb7VL",
  "key27": "43akftY2Kk4abYf26C8srXWJEvweoVPHau1nH3w96DmaymsVdbEMN1fadbsojZKhZjm7mVuXqZ8n5Rs9EwjZZ9ot",
  "key28": "5JSbszrfSZJEAzoZ9v3R2ko3daqSeR1cwLeyQW8vikFzouBoB2ybXmREhkpVda73ZvJ4ghYz8gwwopsWzYV8b2WJ",
  "key29": "221bZKPiutVFhv5ErF2Hfeg8RbNu5ozu1hNd2GK1yKSR3xtBYj1TLaREfCzykwdnn2wcTBZoEapkr7DoVxjcmb4D",
  "key30": "41eoKbxsxMSS5J8J2idhw3Rj8QBtisS91G59LW2fCcwmugWvpSZ1Z1p2utyREMmmbcZin7M91EAqJ7YACfDz35fs",
  "key31": "5bnjwr2L1eyTYbiiT2XXqpxtxPQ9hawueyG15y7Pa9corG544TjsZ8w8tUbYMSiGp5PYvN2iz3odCiqsfNTuXari",
  "key32": "3F5PxroiX4s58QKc1WZGE8Cv1y1nuAcnUWC9Bkhke7N2Ta5VxDybJdJcQNyWgdjMo83tusdh9fHjpoX8KQHkB7jo",
  "key33": "3SRFFkonwt7xroqyGvRm7FthtH58pMBfVXcLPFEXQomPBGiMuZxjQcxrPGb8TdBBQXZvLHSef1Z6Yq4WgTH8e6Rx",
  "key34": "59pJDf8JkRfsZ7kYyh6cyWmkaEpNmdYqA33KiVTJKoeTNEAxsuEEmPbVDZtfhGSjib3XuSc5b9vgmU9DS5zD9JuT",
  "key35": "3K2Q4VHmy29VCj9F97zwva5pYCau21w7e4tQimc3S3sFASJbSdVW6XpAKKWostopXd9AoajepgL4aBjXKupbzNtb",
  "key36": "2WTJJYFqmi4zdR3PfE4EDPsvG38KGS1qtvnjPtfRnSA89z8EXzagoaRxm7XFE6up76SX23vqugX4E7LW7J9Rc1xN",
  "key37": "4FMpsTgUoQhXfnAWwuTFEWiXVVVyXLhxfKgaB4rbkTMbh65nJzCXuEmr48Qzdne8KQAKuHZJcNr52qFmKAgy17jQ",
  "key38": "KJjFebGrVeZwg39Waek1F5CWyxPnuyGvv6WhBwQKWFP6W97EGBzVr4CeQLMTqqCMdeS9eGrdyJkPtwfAHrMJLm8",
  "key39": "5Cx3aPzTYit8GFuiZVVFLsmeK8pkw9ks2TZKdF3LaXFqEXMWN9FmSoC4M5pLSQDv3keDSK4fuLJPvbZzj9QSnbrt",
  "key40": "5qYnfmSwyCn1peM3vMazK12hj7RqK73CwzMAfZa2boTdoq7GTDyaSZSn8Uh4nunteb5TAvz5WxMyCsnShdtQQkJ9"
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
