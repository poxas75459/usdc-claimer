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
    "29Az9zwp1bT6Xhh5Hk4hPsys9rKXguvvWVW1dKd9xFT6KsQGTwChqPhURFB3CNhg4nYsKPQw2wAdDLDEeGwE6C9h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B3LttwZ3XWiuaqc8iTZGhiNbEMbBQ73DyRU4UERDF1ndTQbPg5ssHQjD1Lf1q12cb6H2qrv4rRdrR2BipPPcxkH",
  "key1": "3L9Ro6ztD3pZwwKRvEEHsN9SB8tpTVf3rbrRzyRrXKzk5zsNrwvbmhtDCCxbto21zEytNTq54K6wDHeGij46yQWU",
  "key2": "512zMXTrP8kq2haT5gpJ45U3tVppEfwJpemKiHtKqBqmM6ZGtWC1sNHXgEDCTtgRBMcqM1SKVhLgeQdPrTK5ZEHp",
  "key3": "3pWXApFXaXxQjRThRSQj49PCxKuem3xDCtzXtVf66nxr7UnpJPswm2pNbo1qSAyJVYDE9nqQFjm735djgvGtfYqd",
  "key4": "3R3UFW8juPrBY78sx9FfVvAh77b4R4GGc8mDvm3ur5W9jE8zq2pQWLzgY97DCCqNX9NDMhCSEsu4JrDExqPa3PzK",
  "key5": "5Emz1ypf9xgHy3qoGxFKLvKyk2L2YkVDJmrFDz4mH76c3Jzb5udbySMUXRNSc4wzGF5cWKJgLVvzAyZdxuCxJUG1",
  "key6": "3U3agAXS6NFeVkcw7L8H2A5G73yvgTYw8JA7wZKkuFrKdAvFUe19ffJ8eqnFmdWwEj9kfyxKsr4BD8A5oVaTGgdA",
  "key7": "kLFoHN1ytLPxcPJUQQhgFPdAFEPRsV2YrWVe6Bdr9VDguiroPEqxNiwbuTRo5ne74CRiGLxuQ7sKigDe1DES8XU",
  "key8": "ZxhssqV4eBUfZSQ2rEAQRMErseknesS93TWRtBVHY4iGKuCRpYuEsaEUVssgVkeLdeWfpiTynS58b3MQ97J5bjD",
  "key9": "CEBg2KbccPzbxy25EoEHMDCaKrfJGggC4qDHE5yVB5DoEZ5PmV4MKqMip29jSk68E6rWiHJS84gRJX6GtwML3oq",
  "key10": "5vUUZ3AquanPiDmVbEbQATk9x8FAdkAshikAPmUEXJbBJubEjyK8BWGqid4Jm7Pmbr49KCcGw6yhxkQeo7da8aaX",
  "key11": "39DBogXrbpuVrDBNKCnvEAjCNqm5uZKbssZyKpdAy1QrnaUz7NUpUYov2ZHa1XL7EW8nDiXDGuLH3WLdLPkZkxq8",
  "key12": "2ojb6nhGJvnBhZvetntpDJ8Pn5KNGUCDApKci1YpHViDtUDecxZUp22wu1QUr6eQAbAH5JYwSZnbCJpNKeKq3uG5",
  "key13": "4ZnHVFapSSixTyKweqUMGqAhhBpUXgTd9kiruGuuzEyaj1kdjTp7YphL9TGXjWW7TKJryoJPE3fyZYAdTPzetXYf",
  "key14": "3xgVrzark91FRke53ahkd5zDAXuAU8zSoFgvKdZepiAvwKN6eHNHrZj4AN83UjcCEx1AQHwpzJGisUMAmzmna2J4",
  "key15": "51vLxbxNAbsYmXTj8mHEJ3Lpxm3ZpJRk2tnZr92EQQbP7YYg8RhTTFdEPEPHHVUFZ79UoEvBJWDTTmf4rDJTDCrr",
  "key16": "5Lzx69NSxDRJZof6cW4gdNDdqek4kXv66m7do6WcvvmajVLf4eAS6K6SMibqeZphxMAvQaLEJ6shtCV1mfe8qi3J",
  "key17": "4a8gKgrKxw8cVwKWZYtNLapMnB1WtQAMthoBj1vWfLJKWMVZFHDC7HuP2asKKSLTijcwXu1GNSvo35gtWYiaRYRB",
  "key18": "52jwAtHScJzixw2j6XvkVTd1RquX37sPmbqfa4G5Yyw9KgxvdTyMqMYwTzKd8h5CUEUa9goW6aMxXdwNdV44kSqR",
  "key19": "38xW3bf1E5NKWhQiWTq5oDsM9Yo318Gp1JqFJ5V6bM2yucSrUgZEjuxfR5ZZwGAJXa2w27f6hQNqJC4fDQA6QdP7",
  "key20": "5hfmhgcAwsrarSrmDMg4YgeYK45GFhuWJ7R5e5KESwL24y2dn6PodYsAZjNzk3UR7GgvEtcbx8TFUBpJTYocFtf",
  "key21": "2UuGQGT4xLgtEshiLqqtfQ1F3iUGP2EThHxwe9w9tp33pVGf3c6KKuPmdGbVw8xHKthGSYTFBFmo5biikvZA31Mb",
  "key22": "3bUMgdMzMxWQTqduuxcfb5BS1j9FjZKFKoArnXwirMsWB93vsFMgBBDedk3DUQFB9rtUTxXpntjEuGssGSC8xpUw",
  "key23": "5YKXeJ2xHVGzsnC2DjK19uFfW7ZxGchxosPubenVLxVuQexAoViT2Av8GxhNWGFKayHYcpbzYM1Hgxn7XY2WhCDW",
  "key24": "LXNk4w2pBLbEvtfffuiMfMC3KogQAKMhxssKwEYtXcEE1GTQkHqYYs57YbvwepEgAGyzGrZ4z76FN8NPxdTU4iC",
  "key25": "4BwE2HGNj9kQ1QSuc74MMWEQRENdnZ1EJAvpWPkDjLV9zBd6k6HmQQxs2kRGuwMCmdGunqow9Xywsh3Vvw6qzTXW",
  "key26": "F3aNJQzr1H7RMxn7EmuQTcbrGSpbJP5bqiMiYRoA5aQXGKjrvowX3Do3dUT8bxb9eVThS35ak9sZgPAuFGt6DwN",
  "key27": "3yp1GnxSWSdPDYgXfYCR2Heab29BdYRsArDUwR3o5FDwWVKEtYH4DzaAAfE4dvFVeKChC8hwXqxVHsSZGusLdjsF",
  "key28": "VVYaku1tyEMYjZBdUUrMdMYFsB2mAsAYNgcqWnEVouuYVSQ6v9gufNaXE7LUiV5AkDuX3zQiCq7GmA5rccn1B6H",
  "key29": "3QPFuEhsQ3xnQS6m85oWBFzt4phucYuswzTgqTbRox1wVAqVR3xKJnY23zE8AQWo4k5wPSizaJLadddTkKPy62uW",
  "key30": "5JxUjeGarDmrEJHqBkWvdWoREVvRnj66oYJpkYvEsBZTc8pg3MANZAkjCYjwSGqjRuAqkWdU3xEkgoxLMfqB4S8w",
  "key31": "2iJf91ACbM3MNB8jMjy8dW9WeZQmmj97MDLuxSrWSprRsr45o5vhrYgDa3xmEwoVQLcBExBKSpxYgpcg5TiNuusP",
  "key32": "5RxYkYmU1ednZimQK3eizHVJiUhhWxvKvFZRKJPLRQYuoienzCQ6rK7rd9BtZuvm6F77NcKvmFCyA59w1PoJuCRg",
  "key33": "3DryWCkvSFKNW8FttF1kQrDCjgKjkXpL5R7vnCCoE38qak5gsw5Do4hvBsE1cDkN1XAs4ELt49h1oqEdaDdyGgNo",
  "key34": "ZJLxigskCwiRBu4zprVRoKNAceAWjaDcrwsztQw98FCii9X95Z5cPqe21xZLPBExkrZoqrKMym7CpKU8KfYeoX4",
  "key35": "5ABc2k8o5y2oimZvVxWuENoyP9QMTg3xrXro3NhvBv2xKyvCFJcWUqsmwiq5nqM4aV3MLXXDdpbrijoc1QUifG8R",
  "key36": "22Fx1eoW5RFYMRXVg7RpqJHx177seS8gKYowFFaq97xeqz9HbxjX7EwPJL3vPqwynb1XgnScvVYU1Wph9zP8Ad4q",
  "key37": "USQW26amz6B8BQuHquwk1Xnq6v8aUe7vCtMiBHC3qffy3bmc8hhwQgGpbK94jVukKeGrqvB55FPHoNap8NzTAdw",
  "key38": "5EU78gWTHbcZh6pSsmGYnzkrTkgFCqwNgAuKYp6S899FnZEZRiGzmWgt9Ki9srd3TxNYv64vjfW9K8VvSTNUwWB6",
  "key39": "2Mg8NX8sysdfWUJAqaMGPmra4JA4UbvihvzKzP7e6zRq2SuVPWsHh1joQu8CMh5QmTbLBKNrVMQGCAyNcrjYMxca",
  "key40": "3mevqC45UpVkPmVEfwS5Fp7mTabBKh1drNiLCp74VUumDZD9ZeQH4mB8o8A2wntCfx2fLXx7VyyWadFzQpPAKV98",
  "key41": "3FiaNdyNQ2eW8fhEkDCG3MhGFS1oh5h6qV5ox9uzu315jvHENuPppvDxd9ZozoqcjgSibafRDoxd47LHDxqQpKtA",
  "key42": "4kqowA1B7SggyriS86qk9Zn9wkFXvHzk6eDfWfB5zznjuA1LraeJX1HH93qBVrWMey4uUYvAcbS8aKpnsKUdhAgZ",
  "key43": "4MZjxqQiEoaXSy7rzHSm9bkR9GUkGJKrN2yECicb9qHeGtU1v6mGoagVo8JPZbivCwWKxSmJjQVEY5nEHvdGksWj",
  "key44": "5WoL5AGyiNffPEMHTiapiL5tvE6Ro77MEzMe4JgGyKnsnYiip5vL6gR3eqkrksVW9GkvcNfBuw4RKZuBv49uDR3h",
  "key45": "44aBFyAmbXnH36TmBYQwC34DcGbnKkCfceYCgPzJiN9zCj8Vn8mMtsKbq1iy55DBjsCLP5QJdk2jMX4QSjAUXGgq",
  "key46": "5FUSukkmnYao5i7Q2VZJXq2CF3bXAXUMpgoi1UZYjxcvSqjsntEsp3AWdQLBB5dkANgdMBsLBx1Bib1Mo28htPkN",
  "key47": "4UpsRMvcAzgCzT5dj1DxSHratT5KKLrBNM2ecmcbmwZhow3mM7Vc8eyUSzjT9VXmiyriYeQocxRuMW5nbQk5hVY",
  "key48": "5dvxJXknSbNisQpZ3ijMAfW14AWvMLDbxuNFqFKHGf4HMYprqPt6DihXN5TMQN2fc7mgj3t8FpfJpcWT9JZPo2B6",
  "key49": "5LezFMuWYZkkyZHgYnyXqZ9zHgZimsGHAXfpVSEx9L6yFRh6RyqqnivyNhadYnGCVK7Sj4oHfXpp9APRPXnV7b6d"
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
