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
    "4J6qSsiodybaHcJkFiUwbz8ybnbYkNbcJqNtUjwH9TjkqPpMMYKTMejTqw7VmweVjPgXG3LRWDRJjyUgPxhRmmdU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c1r9UmW7o26Mm6d9gHyAs87KYfQGUiT6Apw3Q5fnJsknLCtA9iBb1i9mLbgSTuuZZKjSuDrRYUPHJP8Cgub5btY",
  "key1": "2mQteRcd583aDYpz1DP4PNR3XQaQQxDrRrS9MPJrY3EYcNm9zG7L9Jq8b5VVCZGTAMsmPuzxt9ujWk8pb7VR229a",
  "key2": "2Bw7hrTSh9zgG6uBahGzNsGvsbTMCSQzHSzqMK5z5jgYRxJcx4jE5M5mLqJFFipSinYHqr61WHtkSeLwB5cuP1rX",
  "key3": "3JLwgcuP9XgiUqmkzwLBTuhpgeAQVtPaYZXnqDBi2mdSB1ktxSDxaAk7JUtf49XMrpgYsvRDQroKnLpirLqnVTAD",
  "key4": "5PWmo6eUFoEhD8zBxgH74eQmyD8zEzJHs4ot7geJm35UhcBREBptSts5Gxk95xFDGky2xsPgBwiomFeTDHsuvVKS",
  "key5": "4TNk2Ry29YsZztbHbQrrE5rojiNLqF2PV4Sa8uaBdgnSmwUdPvyZC2kwGPNduaxSkxnFXZcZbLLkUzsGnFfThZvS",
  "key6": "5j7EQT61SyKH8VDFkM8U5b2xrCZ6DF7426q9VfpQAT594ZzMxXoAcbquaN9f7R4U5yECoAj9omCnb9A8AaNcCxqK",
  "key7": "3mjm7Js2afuaSdPE8cFxnZHZ3PtiyZEqPGn6ggdvcFMHgLw1zgYrsj4cgbSvdHYrWCjDheRP7Wivt6Yvqf3jTuks",
  "key8": "5tXhx78CSwshDg4gcoxBqQYa5JVWahB8pgziYHwkRr4Ta9DUZ38mGou2rTc4vzTyrRmowRcNWcRxNoYZ8AvLU2y4",
  "key9": "J77V7DhVatttms71smajLwDpmH4w9S5oTpqnaYBLehdpSECikJnqBCUR9vjkK4a2tNuR2ofADeKy15z1sbgj7R8",
  "key10": "zRNUW8Rz2e1CbLY1GZMVhMccnHn4KrWgK5Ewqa7dXxz2KhFELVWnBhuDbu84mzoy6Cxw36cxmH5zF32atqi25ri",
  "key11": "TDzreWNRGaDWebnWtDWUasbYX8ZCvCwVrvfT7QDNPRfyTCfms1XyLmgtzuyLa3ssyxLZQMGB5hVEydufHte2x5V",
  "key12": "2BjhzLE69n4u8y1XSFqScjQmyQoyoTP8jGKcx5ALEY4U8bBc8PCtersZCL3jnEqyHg4R3YA72ENnWfpR4fk3h47q",
  "key13": "5FjTkeqmQCuHqBv169gpaprP9VWRhuvWuAEqdYR4rnQnjBnigCF1ybr4X8QeTcQG9sKyHdNXvzsb3aJrqfrgGpBe",
  "key14": "4ZM74RVPwLygL7MdjhgDrGFiNnVUgiasacX3EcrnqaShVjezcYfUDcwdPmsA39eG2fxP3zWLABEq9HQfH1FVv2Dr",
  "key15": "3UZoSnwTrKXfice6VjEGBpYbG6EsMahJj5LA1Vm4AY8azTiPkwrJjgNbnszQNTKhkmsjWkPAUHsoEo737tHu14fD",
  "key16": "3s4zvQWBxbxL1dXLMKg4YExNFYmqfDVdv4NcFJuNpgka7DFrXwqvKUo88hE5KQrNYgtP4uQXVz9USga9UEeJ638W",
  "key17": "5aYS37DkCcT14fYupKK5PqpvYyEh31WLD5nCbmq4WXMZaHFFJXkRzRxPtYCB7Q8dnATS5YoNeHSpmyQVFW36oktq",
  "key18": "2Gcx6fsXnp5VUDWX1HFBcymbZj9R52A9TrYUeqzRPFcKWpqbHUUXmzVut3L325WyRpndwpG8UHSpjW4CqeakEaCo",
  "key19": "4DyySbmiNc9EkZrzJHDVycz5wrEycXtRB6UayQ5CkYMCmBXWpSYmRxR3bEkbtjsjkParj6iQ9EA94Nzurc8fZRJa",
  "key20": "rC3YoQLmjLFPApgEGt2kgxbME5w9BtpZEG9Qy5KsYNYXnW2EzZwibLMZYgyJeifxuz68ht972TiqkwzKHAy4RFb",
  "key21": "5xNM4B1GDnTpk3EZw3SHUHDZHqgDUhr3zicx69XcbjUPG8MyjBuL7z4EuuBnEQ8qLWn3sBMz5itBeaiMNXKtUWYE",
  "key22": "672VypVDNHfSUbTBSi1mEwPU48jWkkHfvBkEuxufJ4oU5bhhAAoYYSUmgFvpD5bQu4hVcg4jZn3fyLQoGzR5HfiR",
  "key23": "3k53GnxtcP19Vss12y2VmDThxxpPMDfqZwNmxoj7GwVBGXX79vd6wQJGMx4crVLZuh5MWJ6Cj3DMRpFdwFr1H5vF",
  "key24": "DzDoaAPg5HpsKNCvJsoAS8s9CdTnUarSbjfjVSkZHc7rijForrwyHxhMtqcJEWva2NYoLDDC1ZCoXYbkFKmpsVD",
  "key25": "QJ4bxToH3er3wSUKJdFqc6TEk2Y49BFt6oyq4X9RU8RMsnHSQucriZbajrvfzU847tZ7MbXr9bBCbWsNB2kZvHS",
  "key26": "d8w1iQFzyiBzyjpgDFegieF2mpdC81KGHAC1eHF1EEBtcaPMD6JutQNPnrZtobyJEv8tphw5rQpURTyEPZwA3LL",
  "key27": "2nogF5wqfo9aYUwZrq5gVHyhPb8PddDm2dSuqBmqpPhX4zeHBEPcAgJmd3GxZZr3vhC5Vkw9g86QRvKfy67XvW1p",
  "key28": "Fh6NYnaKeXNBYXmM56HvGVKpJxnBLNKaSTqzpi3Rjzb1mjhNN7iv5R82tKNDzraKdypnzjmfLZnFh6FfD7GunnE",
  "key29": "6LqZbqhbv5trh3X94WgLkBExNv1pyYWX7fAXXJb2u1YpEcMpy9AFQimW8wGi35AAyCaR2LVtwihpX56fJC7mNGL",
  "key30": "3DqkKRYNWXQaGhoRpmnNo4Uiw2GLSKqacd23oyVS6qj82TwVgvKEB5z8u6shyxer3S54Dq7qcu8M4sGQkcbrMUwv",
  "key31": "4vdbrzRfRGN9jirPar429xUtKLc7GdL1EGibYCqXPuXh3AUCX8iABFQnyehZc9NDwCaxVNV3jQugbPDSFqsvLabf",
  "key32": "2sgmjNhWcq9MkHk9Rm39wV7sJJpmmpQCLpMR3kNmyCRNmV239Gns2nZeMctyBvsTSH9saewvTDbBVyxD3gRDjav7",
  "key33": "4rYpcuzZbPFkXTth6VwmhhTLez2r1qqVTA1AEaNJXm8BriANVWx9abYcfk2BLD7NbyJjPymgFDzas241S3AcYP2h",
  "key34": "5mzgiqDeEvHbUbX4Fzx6UBtXxnc6rZxsSix5gkXvumvW4QfhXzRJ9ABRLP9raTdcaFGib956VQMiY68uZfNeDDac",
  "key35": "5aWZafqLPaSqwtLRuQFuUieyasrcy56hhJVC9TRL1m5ehDnqj9NstnkNms4bkfbGpoW8JzrZx8iushJzANFEtAXr",
  "key36": "2xr8bmyvXbkykmQVBEp8ZFoP5v8E2spSA5d6p26nXbAbBwYNtmfZUWyPbVy2QtT4qHGrX877985YgkinTuD4MhWs",
  "key37": "4pXPCxS7FbNvuRtai5A3QzeMwx8NwfQdx3SYr9Hup9dedckVWkYxfvdwbe8RRKNSvjwSLQy3zf8TYECHwPQsRkoU",
  "key38": "64YB1mQCEjiYx91Tw4NnKRE3xUCty45W5dLVZKHXmzkP7Aa5MJCMdNRBK8xYBYmRWuc8N95z89HScaYLZLGue6vf",
  "key39": "54CA1ekWkf8pwiNssXL5DB8DWUsB8Wup8LGBJHwqLqCfrTN622kJKeub7DwD2zyUu6zWhJcHBKJpNLUYPuGm7egh",
  "key40": "5ruNs4MokvmvPVqBoyB8sBrVtCBvWkEiiFxcfSqQKo9ckSFiqViEsYHCtQXL4DGg92WLxM9U4A7fh5Eajf5ycGfV"
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
