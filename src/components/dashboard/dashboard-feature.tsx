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
    "HcSsgHjo2NsmchDPQiCV2xBroYZMRHNxfvxFtYViLabxveEJCDpim2YKuSWqCcYTLQnirfPpn1jvj6EXrN7r7ix"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fcqyPobZx9wQYsE8riS8Wi6FAYcRZET1XzoSCqh5j2FUjerEdjRTsT3FHuwJFRwcbVHowZbysEKwWU2j85wxMYg",
  "key1": "4zuvo9Vn9QkaTpekJ2dkWvSQYmPoGvNY12qqae9Ga7ZMLjgf7pEd4GE6X2okindQbJZFC4JvXM6zRNr6CbiaGH6N",
  "key2": "zNyUQcTziwPoAURK3mCZXk6ZAiNuxcfsxesWqFPTeg5JFM7MKR5hmEjcrxZgPHAgezZUQk9gevYpUxPtYn2Uzpz",
  "key3": "4TAnEcFWAB51gCyo8Knr1UYGEpSAsdUjQrdJ57NSQNQyHGWk8evJiYtGwHAjJcAJTKKaDZnAWyC5JbzWrDWk8YCA",
  "key4": "WBEcYsJ2BkpSBgLGCog8xNPGXTy44cEDik1zp4hjnxhdJdL6yY69jk38PFzreJ51z5kUgidKtGtZftiTiocnR2h",
  "key5": "T67k3mZwbUjD6ZpsHSryswMisZ4R84LdiGBmNSex4mDU9RGYXrjt2AQ3hqvSs2GXUA4DdzYWXqs4SjSybHvXoyD",
  "key6": "Sra2R732ym7uyXkRnvybUjabrLPoghAugjRE2ij9wgpj6DKvszbV36durgdp2orGFk4VJ8Cz26bmsAE7g4dUNTq",
  "key7": "4BTBLU86ZsNSJhZoKbJvQN1obfuUkHFiyuQaVrSNv4ND7pi16UcsfVE2hM7sfVU37P2AQbdiXu9o5i79yMGAiSnS",
  "key8": "51gQNg1xHgWVxV9hEDzAhrt9EnTDJjEAmS5Md3tBgxXmYFjyTDRcejXHck5hob8cwSASBYomCPzLM9UsH3VZaUVr",
  "key9": "67nBgqZbLbp6gSFLKtHHWcnaSVzbgFQM3qeDq5QSRdLekTNp7Z8WdxvWPZz9Mkhpc9QNBJgTiqmFpAZKXZU3dT1U",
  "key10": "4YSk3jYpMh5gyfbXCmApNFTGA4a4tQgtsBHcECzBm5Hn6AYLe67tb9Mxgy3zvAYbUNzgPgN4J7BUGazwthDU2xAv",
  "key11": "2Xt9tiFZamPzdkQE3aUnvYdviBceq1qgvRhxsERNEQL28QUsHMXcWJsbJpCUBxKEQdwZ9ccMDk1ZpwzbrjiZgdvm",
  "key12": "TFTVB65GCBZt9BvQiAV7qwuG1UALiaC1vdhurEGGwvEg9T44XpTgrZs67UTktuD3rMerG2KQzpW4Vhbq8cZLv54",
  "key13": "5ys78pxXazUGAzuj7FB3avjehrg7tWwaCG2PFXz6wfJNMYCVQxUdJgBscRb7jf75k1ZuyrCvbDMZ1hFRKh8ro5e5",
  "key14": "28CLxGCpTjYyzNV1uud8K6ivUoF68yixAXGVCGSit3xxAmLHnpRtSHZyVXps83yCT4wTRYGpqa8aUe7pA3EWKX2L",
  "key15": "c6xzNrUCj3wK1U77AZh3NDQNRVaT4iMNEdPQ75ayW9a1h41xp88KFgpzx9rWjYhbtPeQ6HqW3KQrS6Ue8ziy5Yy",
  "key16": "5M37xN9pWuUBPqoiC3pksPU19wAEbXd1vSWBomzhQ765GhjGX8iMafKQGwmsv1SF6Q4E4RBEWKPNda3joMQCBGMD",
  "key17": "2otq5xZjzbAuQnbkYg5948dyTJp1TPN6pzdQJUBThLfSedDDS6mMCWfGzBn79RCA8ByQ5f4HDLJQHqsg9Wiwmwmk",
  "key18": "bFA9EU9YTkNmQ8eFHBAvBvwm2bzd2GUjxskzysarritiRrrB367QbUpuduP1D6yZ9ckPRTkWQW7nFFZHVJ8Hg7Q",
  "key19": "3tfDtK4gq72rsjHs6PjnMBbBphXA9jPUEqRXAoEhWYUrTRsX5YjWHKo2iqrL11fPngyvxCa1PVU4ViSvR3VFjzyo",
  "key20": "5tWN64AHgErexR4wD2o7Zqu9YQ5govSuruu7FqX82W6G1XProo7bXjtGFjeiDbHAUsK3Vx9tBrNj2Zt6czLbAM9Z",
  "key21": "2izefC1NePkCuVcqoPhkaH1NwwmnXhTopxctSmmdDfwg9k4t69t4GbzKeCgfsRc6yr6Pn5dqcK97TLQrdDRco7bA",
  "key22": "2Z4zDsV8gvSFMBc9p56gMuiAp4uF6sLctG46SdJ95cxJBUn1yso16h6buVwsN18tDeT8y3D5Fj92xEfenfCNtcSz",
  "key23": "5uiG21E4p5JmdtbnW9BVhEJBaN2qFrYMBM4GKeQSH22vokRwKN8Xm6axcwRj6YJDkxpJW37BmQ61gRVgBiHbCxA6",
  "key24": "3tNDJjx5VvLqe7BybuAX3ixEN8QQ13gWFzvK88z99sw9SUgBzNWuf4cAzZFwudPeoG8i4rhJC3uHekrhn9cQTfXE",
  "key25": "8SoA8Cy9jniF5a4G6eNuVbkLjq9Hvq9tGmxKtA8LyDDBaSKLNFsjtDayoyRvedjgv4tdRCzBQKG24BC5VwYGkPs",
  "key26": "29PX9CoumafWt2TpJ42U957Yx5MHTUYWRUCuLJm9osamN76vEbbvERvPjbWMHaMZUWDBM6VwZGLCKhhD2HSns7Zq",
  "key27": "3Nnk1g9EY1gaW8hB85EXBe8viDTB1bLjkWokY6neRBpLz8WhKhddXXsKWtkAykdEKB3816rjxdxjt1UC6CPt1hTS",
  "key28": "o6Cjrm1mGSMbsJ47VB9JzDG67zWkkcyquaxS8HQGZiyWsVXCoc1sVnrn3MdrzvJQ6CB8EPbuyrcCHtAweRS9MnN",
  "key29": "5mATY39JthfXBcCwgKTGE6WmDMRofdYiKN19nrNN8KxYFiEK5iGbyXLgmpo82trPpKBhATHSjPVTHM9Uev5N27C3",
  "key30": "32aPU774ANnMVwM62MkZGJdY8qA9wPYpzbZNjq1wu59v39p13Qoprr9RWT1efwqE6uDbyHLu3e23gLPGNiExZhRy",
  "key31": "2Xehk7u73UCarnESP7rLVVmkm1KYRN1odUUSN6Ty62GGrnW3FR4V9j6kXx72AYXmoWFLATm425d7uXfDCFVjwxjB",
  "key32": "X5DatiK66USzaSUg48XMMwMQLQFHyeE6k9yxa1VDkNnHfmFJvqSHBHJu6UbLRNyExxf9LkQthmqnSgBsHwe1isy",
  "key33": "2CyY44je56BtNr7Ko1cCoLH5BdfJLwrVCLYXALspk1snC6UnVGJ5FC2mHNWX7gM6D9rHGLVhcUpbE95pNAf22SXL",
  "key34": "4nptMsqciXKL3LLNg3GCLaCksQgrTbHD3h8f1RvVXC4Yzd2JNivVX5m94zUHKcE13BTcULUNECWNHSSyf114qtb1",
  "key35": "22KaqoFSoypNfnr4Do97qSR81T3sq3aLeWqcaZcVdv1HjvdiZ7MY38yEwdJ59E2D19ac1qXMJgxLbU6icgkXsX7Z",
  "key36": "2gSFSpvvXW1TYf47ZgFm4rT86ijnEioxA9MGB9Ff1d5jgeNNc3URw1WgAr7r6TnhstRKvUUEDYtgu4AWUhABf659",
  "key37": "xmr9iGNpC4jnCixHDas6nv1i9bH8MzDdLrXJvs5ESUwgc7rnCVLtMEHsvs3BUyX5ajcbCKqERUnNERN5rkyaT9p",
  "key38": "4fZZVgXx4XhuqPS2hJqozuxqxoUxqmYqga3L3KDaRhHWqsykAyyLiis1r71KpgyT7dEUquvEW7Jb3vf84KYdSXwv",
  "key39": "4EYVAtcWCmV9kFrpqTiX9JmfPD5TcsB4R6hJk4PmKLP8g9M2AA3WShuGqtvHxTPwZRiZghyhXh348mmnPPMAXZya",
  "key40": "5EqayadJsngKW38HmmoKQfD4E3yQ7kDLiArgFfp4CPx4zi26xvFXVMp7u9FZnoxzUMm82rBmzexUnJSCCtCoo6im",
  "key41": "22hiGy21Uwi6EJyJpkPYKaoSU5gvcX1uzf5qYoBNFwk5BSSXESx4MycpcrX5LsGfa8Unppj9aUYsnZN8nw2HNcGQ",
  "key42": "29MVTMUyHARwNaApT6xeKpc46oKSNSF1KwTLiLE1GjYmLtX88kDhkegEypJ3gkEcD599S9UpHUBjcgQsjgK31pJu",
  "key43": "3nFyGZYC4LD5L2M4k28hzL19gssbPKWdatahst7BGxNuJAsPLtq9XgMgNR38XJ74UCEvx9SUGzzy6X5TcKfFjY6k",
  "key44": "4TucfrYrRY9efDvEF9g4LbU7ZZkXtag7UvwYq7gH8QzpjmB58D72hm3mWAFjWttYGhEA16caC1aMG911RBiUqG7t",
  "key45": "yQTNQHUovbjG2BqVNMNiDVmkmevu7nUDmckjrahvVR1YJy5XiC3NXoU7fWRurrk7cAhaHvvnWrecgcGmDqbjxNm",
  "key46": "3U3g78WGmwBhPgTgxwekHtS9b4YnrkbGWfLeyA3Le8q3431PUKhBPJHQyE2dwNXiVR6UMdvxEKMFRFYVcHPyaz6t",
  "key47": "5yKZ8dyccmFKx5ytZqsmvJ6jvBMxJg9QPeZ1XVfQJdY8SZfUVdUqCz71unLhEYLipRtB4852YuSsHW3Yh9SFvEEg"
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
