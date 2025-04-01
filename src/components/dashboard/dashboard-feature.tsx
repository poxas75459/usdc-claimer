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
    "5zFMiP5fbLAhobXEAyue3TXeDjwqZFx5GpKf1hAWTC2qhRhNuMexvmB75WJBj4mg4gLjgD68bzh7VdkUr5CQk9cM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eueTDg5NycVqSvkWE2m3nTw3BNAqzB62jGuNnK2ye2YZBgkCYTrF2LkVoS1oH7zt9oXy16WDniFaLZ8DG4S1qW6",
  "key1": "5q991R2LGpCaTpC54MANYqJ4krwqQBxY2hVU6r2GCvdQdJZChmzWzQDxLX6sLZCsfcDbQRCZYLMBZjjtU2xbiQSv",
  "key2": "5ELcZCLQoppu2rrDKmCcoEA5KXJmFzs29Nf9CivicY8ETQsPH8qpJUWisucKL6gcSSAJwZTy1xnSrAx6oSejD563",
  "key3": "57N3e4MEm3mN8Eb7ovLAHDG2gPdJ6BcWRRTuqvkLQTg58ydCzdNbq44q42ngKyUqJeuqaZv8VQh3zdkrkXQYs55C",
  "key4": "4JxXMaw4TSz52W9S6AjkFmRCq5ghxfWmoBL3GboJzUEZXZMCBjCSVuvZQ9j5fidimc9WKCMHaQrFvynZfPLeissq",
  "key5": "m3Rc3286DqgtnkXSdhjzp3fyRKFV64FE4e61D8GRRcaqSTLTqJSAU3f5feq24EELhXxpeUaWqzNU1Ch7qrbAyab",
  "key6": "5JYAE2hF3RH7xnoAHL7hyc1WE2JxUm4RMRJCHytrSYseFwLcEKnyWkBffFbimXe33bqomFPvXT89E5J1jpywXnUr",
  "key7": "LtgGE1FbxjwHAead4ePR9niVpGzjquVVUuHAicC5hcXTbriZvPyDuxj1YBthVb9yaDUeF2Am3CppbGMYh4jgpht",
  "key8": "2EfCbkfYq7HVuWgBWmEKuWEz5UqSEu3SqZJCDdEoPk6XbNwyYzN2sx6K74XLFP3jBrEzX4UKireTQMPnZ2NXopjE",
  "key9": "5pAHQ4ZSE6CfaKymMz9NszfHPyciW4LD7g9xY3Jg9W9Y2eE2AafdAJ4VzJK5YPavc96UX2MKusQxoixAJmCxmeC2",
  "key10": "32K5eDmRNcqXMLgccJNq5XQG4xHkgJmqGhNvxuDw6uBWQQmVLy297s6hvAJj9fWNnwcr211ttJn2MjMAbUvevQLL",
  "key11": "JtJJ7umoU87iHhpUyc2Up4dC7uxpJHZr8tpPdJKCDb3gL6J2jQRXR6YKgNKbHAkCqUJpmrfhWru7vw36AKeB5M6",
  "key12": "ur1L39NhawQREPBocyzptQ4EVJpTDmmzXXLu2Tggew6xEG7F2cmPNaS6dGht2BwYNNviu3LdjAoHaD9CH7ddXJH",
  "key13": "5UfwCcRZkK5jcNS1onkimc7xZHhSeXNdwLoaigWu5iLVcyGQr4XX3AYUtAGHeX5crVnEtTLftr5P6PLqZdAUGR7Q",
  "key14": "SV8GEXvdGa5BHmGdhwmKcFXNKUbLV5hboonJscwgkJTMzQkqVPBjGaZq2WrZnsvUQvNSLtetkZjGSmG7KCA7YKo",
  "key15": "4Xksw1LLv6LnWYD47kKp63gjxQoNWEmBE49pgRiPtXrCczWzRH5WUB94a6LmfdvCDnBce5gi58enkufYeovL71rB",
  "key16": "4Yk1H373HujaQdimSgXHh9rPvsuLTh2siMF9zHrTp85GFYYkCvx5ySyNkEGiMaag1JGAFEpypX95voME8DgzbHAB",
  "key17": "3ENzHRZ9gKsm5zn77fPMKZ2bEY75eRpFR5QqAJ6eATTo6xUvTM7Ma6zbtiobrZWqRMq3UuY5xW9EHMxL3FGe3MxD",
  "key18": "QhVxBYfg4shQKj6PFov8fqXBjaieGytrV2EYBUaDpXhaSAyjbZWCUwSLZKffQhpe9fDGgiHeg5etyii8QDGiTS7",
  "key19": "4MVkysZdWzihhMyRi2xuBs6jtyhi4ouNhXdhTeYYhdD7Ks8VYqwFNp8wodWqSqUP8b37Xpp2pFbzAC5dGg7mwAr2",
  "key20": "5sNMPaZRtHhvqAJfFvPFK3QcvfDiZU7zHvQBK47TQkfrKS62hSwdeK8YKzgXHjj1fTH86KJa5SzPVZDrkx3CSKsL",
  "key21": "43sgJbW5KcS118TpsWLYeTZSiWYDcrPUdEMwi8N3ddPAzrKXv8ta6ox23EqZ6nj7EDkU55NX4rgV5XpPr7tfetGw",
  "key22": "4LFZ1fsv2XtSXKJL286shXbqVs8vTdJMwuLaFNXQJWL9ysVFRFLq4oKRkmQVYTeifMihFeiBP6AdW9NbYeEFDUgN",
  "key23": "5gv7CKCdBkRQh7fLTqmzPHkukxedqUaScAfFAKm9bATBTJCWa4bFVVShPt9yv2fW5sJNoG3TeHsxwqzH657NDjF7",
  "key24": "2wzbfWNDsLdG5JaTxmFmMb82HEMpE9hos9C3f4hdgbCt32GXRBsG5xGHRf235bh4roZbuoqZgM2QbB18pDfgC6Zk",
  "key25": "5UkHATZh1ALJ1TmA2fDFpwYBmjZB7e1iFq4cAPxTDvxSXf4bAzg7HmV4e47atzjLyfBJW1YpwiuqxJ7Hw3FXmLnB",
  "key26": "21qXNrMB8MRo91RbUekomBYywgkuRpeBAEQ2kHa2zXHxwRRdGrRD4azQjo5S26zS1KgAJ2QqGRsWzRry6c67EYDG",
  "key27": "29PbHKxccnqjpq2dLUxY4kK1eHUHAKPLRzwp6p78uqFUVvguWxzVTTE2zWDkv7oJRgDd79Dh7xPZpQuSvMRQnDBU",
  "key28": "4Zxwh8KrSqcLNyyb82zu63ZyRa6iqiAi1isfv649GyNuth9aMB62JxJ4nEVQQkMiSWheussDUZzgYaq9nmb5Lju2",
  "key29": "oMGSzaA7wmd7YH9nJFBbGo3B9vY7mjwK8rkq8fNmGtCdy8X2GRuYUVNVDLG46xu9Tx5oDkLe8GksgpXqKgfVrcr",
  "key30": "2Qbdgk4D8pUeTQqV4bp7WKD8C9VokbLDpvvWCz2LP24gCtB9ntSzcW9redJTGEaLow8diCGh3hYhSAN3Zxi51yDz",
  "key31": "3NJGpyFK7H1RzTgkXa5zDRM2HYv1x3ctW5fJjBDrP3UHFcTFHMcAadgn9NjQoTse1h72Pm6TmqKPuxAR1wpR8bcB",
  "key32": "2iXZSLjiKLH6QfVHnSprKJ5Tm3h4HwstU8hFPSFEHb3mNfYYvfMkCmLhjCVnq19zGaaqsnHNmT3XB1xCpVJ4ndfR",
  "key33": "2CygqnsdoXjPquhaXTbQXNEXTXMivwY2FNeitG8rE2XHBARPw2HeQTuopbnwKcb1XEVtDv8tgYCXytxpMUgmiPb7",
  "key34": "51ZAEixwRnqVqPGfGUPq6DMXoNyWincPCdSXFEDr3jsZRZjLHvrQ6ior92ok5cujLBqeP1Du1S5BQuE44AGWcFpP",
  "key35": "5ot2Vc1JsEeDaHVd4BspPAqz8m2GeWiKkkgmGnRsMW9fKNBDVWxnnGMDqNC3whoXwqWnghZMmUMA92qZVuHKFQMn",
  "key36": "2s5QyWryz3jHwSMgCxBRnqGEuUcJKuLKhZbgQCk7zbzyXSA8wxMTiEgjte3D931M5iXAMMiiBMMe6mF94otvduQN",
  "key37": "b21VjxMP1dyLg8Le1RyboJEH4SFf1Eo2qLxjnwKYFaJ2dMSsaHrDnPRPPPKiY8H4Kfp5if2nRjLXXeyLPNkTebf",
  "key38": "45RSdYX3KDuqrAqoiEAbaDqQorKuXmc5R1RWoJKdkcYUmyv8j8aubS8y5RKNyxkQpTZEhQnq4ZXK5pNZrQJwAGJW",
  "key39": "JUjhXS2B6caVq6LrbmVHNfR7f4vtYrjMKxGhcpwhAqjB8UAWTf3pWXe28HbUE5N1sGQMVM5s9YnKN2AFKoZH8mM",
  "key40": "2MhhueaQPppuq5Xf4F99f7EomSEHvAeJZLYA35PDRRv4iJNtuC9w8my9dqKSQttPDebfU2hGqBSoNQJQLF1oAUbp",
  "key41": "2U4gmLk59SqeuWY5X6pfHfS8q2mfX8PcHu8cRrVrJFTjsZt4F9T1UK3zR3B49B9MFffjRFNwU9PzohojRg8qqs49",
  "key42": "2s2c6db5kFi5GQhgQ9YqwKGEq9RD7xfDAHnPDS9zJy53csQoirHh3qX74b3Re21hiqXRWodzv2Tq6DEVKDNJVYn",
  "key43": "4zFA2jisCjb822s4nuy19cGc8WpzooX4wvJdwTkGzeqcqJkemGZQLASBZeFJTtr5K82uFzhDtnkboSFNgGeeeAGd",
  "key44": "2KfMiWraWVBVxguvhtFgVXoUroyBidpYYy3gfKikjq8zVeMPJPtrjDL75dVysY9Dgjciq1bBKmnf8gwrsLrmmH4"
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
