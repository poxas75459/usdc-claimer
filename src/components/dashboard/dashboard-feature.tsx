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
    "stX3a1NQP55kgiVwC8ebLKNsbHP1Y4PFnG4kHcMdkmG9DsTHAYCfJ9yKGaW23dxrDn9M8LubTqLrwvN4GztM9N8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RkzVAjqsgo9PCEG9VASfVUixE8sSjCsrACNM3QMbdpoemLLu8rdTUrH7W2Q86RvJqPpqfpj2B6buUYeyd9B7MZC",
  "key1": "5dWkENUvGNx9Zmgceih4x9s8uM7oSXp2JUWBHGg92djrfiujxmnGxMctaFXxaZpR99zbKSp5Yk9Q4aJBBJYyS8RA",
  "key2": "2eeh9nf2rNy8SRskRKRdeHQ4b3GZt2ZUQy9f6CnYm8thE9EP5ua7ZAWnv79aw3zeqvwrZAgeRdeXBWzrQvn4qj63",
  "key3": "2cX7JqAFsfzgQeUwXZCSLbcJThawKgEm6khbszEv2G3iHn2rprsMp5o1kLLG95us5abp3qMwmPnUwzVDEs8vAGhn",
  "key4": "pnX9Zk8YSfYrdPTm6rsEidYBYKpaedD9fcPycii8SpqVF5LLxfbNpQwcNbzukNcSdc5Re1iG5L7ATVc9DL3cvp6",
  "key5": "5XSj8aQKcdg34i4LdAAuq26T3kF9zG5Ehi584sjgyYQRTu1N8J7MvfAJUZuoocDzXrUnuvME2LnPy5tSUEG9Xotb",
  "key6": "5ZC6i8WKxZ8ePHR2SdDb2rYTTyMXh89fw3anJGGH3MABnvWqs1TsfUbSShY3No48qkuu6Nfszijc2dDL23hqaREA",
  "key7": "5UoM7S3BJDhDiY3qoBk2YZPNUpLhfzM6LWmaFqAHRRfRyDP5PfFytfyBag1APDTwLoa6TRPUQ6xa6SWFzgUSbwjd",
  "key8": "jUbvh3KnrSt97AkofZ3Mu5LRrUG18119oPGs7VHiiaT1ARhewSbQTsr1gGcfj2w6KQbGWTA3iBxKNcSaW39rFM1",
  "key9": "3RVe56XGjcRk8A8CH2T9V8rBdGJH3PQDyacm4TqXsPhTxxvndseLg4GKP9CiEjMqSBWzSik9HArbTbvXq57DqQer",
  "key10": "r9VYoUnsFuNQ8ygjYwAva2m8ZbfUN91UH268TchNmseo4r1TPjk23nzhiD8J52EfNTmYRbS6e6o69qNJX23vXoG",
  "key11": "4Qc8oHEudX2jaFZapbHRCok55LobBSR6TRVdXa6LkGknCMCdfSB1v7dkJxEq2ogrjxKfNDX5oL1hq8sJ5Gd6XPio",
  "key12": "2Pbv8ELqvwmvESbs3wxv4EqWNfLJjVamavA64uGMKQRxUkTtZcVCxJngRmw7WquhKsrvtbSaFYouDKMwepi8YX8L",
  "key13": "3aQsi3cGBvxAJjMGyx4a3eyWowgbBsVvpPHgimQTuaaoFNc8tmEgRjjin1Wk9BVrxoGcBZ4314vcGrDHU1F5sQQK",
  "key14": "5Kot1cAArRSNRuKxvdJGiKPLV1QRpGJVMBCxXmdy38L3dtdt8gLL8S1Rz2VDuLyrk4nLWcZR8hXhhW2eRT7MANTx",
  "key15": "2rpNveEzhYNVDRjNSd6u3nSNo8ScjFQGHDdqJF6tV2td93GPRRa9obRSUzZ51zcH963xgiFHo27263faURE8wZtZ",
  "key16": "4u4vanqj4n5m1P7ty4rpqNmfgh4xkMpDhP7JQtMw5uN1Exe6eJF5Adv561fs8dAgVgVoqSGdfFXsqGjKH2wJmSNX",
  "key17": "27JAVpWbmXR1bbFQXocrmasT61XimyjwwwFPHKfmNhvMeGutM9RbVHaixc3rzu1iQkgEqmFsYhYnmvsWqnPdSbed",
  "key18": "3CNo2r7FVUXoBPs1JvKVg2Y2sMrS8XHcaEYucitZgXuvCrBAbfCx6MBdTYckCJPryocamYtpj79q4X5gM5aFRp4B",
  "key19": "5aDMPCgmSdzRq1AMvv2owMDX74SVedLjnZnPiP51VEmKKqnQm3J8dgkV3RMUMmH9MEB4FgF7EdS8K7NvNcbrsvg3",
  "key20": "4p85dihgENagSv3hbVYEFBcEv5CXzRxZHy5dX6c6A2HqAEs2FWZXzkp5MxiX4vVM69qC11vkVgPEW23dQvKGfz2o",
  "key21": "4yCUbTbkLtzD6mMgwTPoPcmTJdWpt3HWMqSiXzSnNV2AEqyvNPwrDA3Mqr1HgPhYDhL7cBpFmjyna4giRM858CmH",
  "key22": "4nXtN8MKxx8aoDrSk2Mfi5B1pzrC5LYcngB9CzwqfXvG4uNpJdo483vpEyNm6hUqyBKhvzd7VCm6zzon42ycAuYQ",
  "key23": "tCvcMDFXEftMaDmmFvD65EKbvLx4HJdrdHDKygUZpqzzWpFBCeJq2mY6rt9cL8tQPbqqxhS4wGtvfsc7ab1HP3Z",
  "key24": "2HikdR7fRSvLa73FD1YLPKyEFKFzZxoGVTMuU4zP2hPhQ296ekcTcrFAMMVP7jSCNXqFpB8BvoaktLiyHYnPAvnr",
  "key25": "5s7Te4tTsKLLXsstYowyPeh4hFgqfDpVavBtbsBjb1iKapTtmozZgC9UdttoT2do6oUvSiH8NZtYpXynRDhw4ZH8",
  "key26": "4FXsSRsfr7rnHjFWKfjDCsb6LEwh96uNeA5SbQmoeTzCiykGgqV4Rp64dUJE5pWnfHfUktp3d957HSVt3G5TdJpP",
  "key27": "5xC5yE7P437p9ccsaHHdoBF7hF1UKgnymEqsFx6cLxy78vvK7Pce6nz9coUYwwdzd5s8H1VdgCnhHxBXF2DV8g7U",
  "key28": "3kktPoMWUPxKD8DDHGWJUqm9KuAC3WtiynkqZZfkuE6niMVtu9pbZzrKmJYmyWVJjermEd4xP41Q1K9RcTkoDboa",
  "key29": "9TFseNpc1dLxS4AcmXF2sDf6HiB9nakrCRhAUo8yTt49wx2kA8r1dVXdVcYXYjRaMJtJoRBQow1pa9NDnUN4UrG",
  "key30": "4dyqMsjfS5bPd1sPiMf1ZsnbNtSpT58WLihCJzBZdjj4gESTFMrDUzFEPDeUkTPUhB4QxR6bPbXHP9S6x2WugAdk",
  "key31": "46Nz3dTLciafjSmfGtDwTMAPPED86giq4VkDHgoQT6vXGQX2coZ63GbRzqwMC1xhZPKfcKSEYVstat9RCUSNSJ7v",
  "key32": "ZFEDU9KNbrefpVTygeaF5Ki7MHVbz6WniwgxqQfWxRu3PmvNjm93Ar1XknuoLNPmfvoHqEvGZPxDiKPyjhX3BKZ",
  "key33": "2ajEKR7TRXFrRSHUTxBJwHw8pictuivZEeg542qhVUKb1ZBGgGNmmVXZGdmT18BoEugUUcsEMNuy4W3VdoHgbiig",
  "key34": "2tJ4AUBjf1cDjJRo1fX2x4MknBtQhxbMbkbURL19e9psTJzDUG98SsLR7fHLQfMwCe3aEkh2PaeoDo5kWjZFDHek",
  "key35": "5HAHcNT5tV7MmkBhsKAtDPchT2kDJAjaBRPm96E1CmoveZgNuETAWhemuBnJVTXBrFK7AkGuXMkyvXzQ8kxDNyVB"
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
