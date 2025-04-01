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
    "3THFsCAPNArJHoHtg3QMzRD7KpaZFwU1euNvo553Hk8Lv2Bpi2c7hsr8xVK8gMgC9HSh3FQMNTnTsacwa7PDAP1L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PQJjbFSKVT8Kfgv9ie29jkMU9GKDNd9T1p5xC56HxsHyZbhHPaUD7j71r9WZfZ8FoScFKKPhhixQqCwYwW8tCfV",
  "key1": "53VcofGSGAGgEJeCBtdsMXRBUuHxmrt22BhqEQuYJ2ibyLt5EPket6xgSXzcec4zMeB6mZpcFfGEBYQ75k3YcxLY",
  "key2": "5i2owPZB8cxxQjoM7usdU9Exg4BrCZdzLydM71e3gi4UMicLziF5362yfMuybZwjjtrYneLzpG8KqsjWNC2C1UpE",
  "key3": "471pawGXpNcuqUf2RDToonTvx1eQxXRkKU34Ewfa5ME3oCvZyjFte4Lfo3CJRWMaF96hDytfUxdNqbtbKn8rtKv3",
  "key4": "4GX9hBE6LMfzc46BDVrNka9GzHcuvZ43guVip3v57qv6GzfHQvHowrcHHZCzwzRMUdsPFtHTcL6xVfsXF42uXqUJ",
  "key5": "5UohwrTD2r1HQb6LqExHgv1mhVrSBrYZSSbMEq4vpNoNJsFAa7Yvgoh3fCambnRrH9DYEaxwAZptF6ARZ3CiJXwM",
  "key6": "2xrhSfBFxhhTVhZ1vCgZGQKhsPckmBdbpXZ2Ev1VZELVGujaZFWjWVfXnM5nNoVYzKUcgcqRuTdb1P9BcB2trRnD",
  "key7": "ZTKfZzoXsFpPnwar3d6aeeMgx4R5SU2esmyGAVc7vHgji2N9dp1vowvUqjjYi4b6qASDZtzPx8LCK7nq8bxbuW1",
  "key8": "2XCLeoUqafRCHBzqDVqo5XG6r2KWRR8kw4thS6eQ3J6D6DGq3f3kebhjkioWGBBMq2pprsWaaR883Z1Mr563kgDq",
  "key9": "4C7YtNQDNC3pZ4APzDXWmmersTuzkWm89SCtE8TphE5SsQDRUeuT4QVfNv6JR4VAKpfy4DXWYkh2BDVTuZF6MBVn",
  "key10": "rdhphiNazS7BVmpMApLsUpRaYMDBg4GNoDd7pHyGyLGqsXq4AXxiGda4yLf3e9A7nzZrqFcKcPrsR7p7MivFrt3",
  "key11": "3PiF4JPru95D89H1Mq5HM2cCUbrJAdK8AS2j6p5kMssLZDK9VRdnagmcnvFoaZjDAHMQia5ghpGSFrFowo4dH3Fw",
  "key12": "34cWtkLR9GZcbHDnPbiBjuYfRRaH27uWvN5x8ZP98awaano7dd613LdTTpL1VMmXBwrP4dNvfScC8axBXFsVpwvN",
  "key13": "414dngiCxfGAT85XPcGXMPzZhSixv7cXjw59nVnbLvtSnE9yS7UD5VXGd7KkyHG4Z2HnB9de4wZatNEjBoktUjXJ",
  "key14": "METygZz75mkFcYp23xZ3SaAGG6TxckmvNuMhsZcDy7pSeta4vNpZDHzfqCJjK22cJjtMDoimNb8EQmQGQ75eHQo",
  "key15": "2kc79Fp5T3bRxQjrqZTaFtwUPuX7kpRpTJ8fh41L2tB5BCShoa1pmJqpmgRScTs82AfkPAjnXpXLeE1EVqZcaA4x",
  "key16": "3nYukPQVinpaTJc8PVxHEyPKtLhbKuCVyp81FBmtycauUoR2phitc61eVEdh4bJ2sUFFzdeiT3jxRPpPeSdv784d",
  "key17": "2y9GffwwZebai9kGXEfu8uefwbbVVmMdYZchSP2i2SFuXPPZK4tewUHy2BdewY4bA1FVdK8bq7TMviVoMtffg4xY",
  "key18": "f1GQBq7Wb4JCk96aYGQkiDdJb31MNkjvmWQHLeGvXEJgmpW5rpAUijGsLZeFtVBp1uKGGPoHP2Yk9zU8bhFTASW",
  "key19": "5WfJX62fZrB45UQ9v5ecUpp7P447K1HCdTdLcjVXjWX6RaURJcUrKC7KZFNxL6UgVkX68V1wjd2MCVgmf6V9dJn7",
  "key20": "KHphMrwvysVtkSRiD8mQaWJLKzE42Cr1gYb9NmoJKijs7WtjkWuhxBZn4GoL7cERjQ9tP91QM6cS9LM9z5TWhRs",
  "key21": "4M73zTPJCrA6CFjMa7eQGqjGBctN6wM1iDwrREGM7tvCLoobRxftd91pgwp7snHD25RPNGf28erSx2H4aFN3LSbb",
  "key22": "4oJS8zu3gxxnN92jgnBjvvF4D6DFDbD55j8ax74xPvEHVLdHeDArAwLH6QV1S52gyVTgjZK7qjUfnuPBPpFS1v7g",
  "key23": "4LKMCHGkZnpzhaXdLQQm1tzjfpEx9eLiE7qcAFhxgw1cA5gwuiWM9bBaPbcf9Tf1pa6H8L8QvEaQNPHuM52ZQsXV",
  "key24": "2KqWYAgy3Kxi1scTpxNEEhWpm9i9o8orXo5T5tv17keZNNNkSB9MHKywqeS3SJ7uBZSLbKJNWbVH3zTUGy42aQ39",
  "key25": "3ea9E83LLwfy7ZqDXJPnsRD9psiQPk45ErpwBYNf71BRPcv7PDcBL8E8ANpqchtv8PccSk2y9vQgpyFpdS1satdj",
  "key26": "67SVoTanPJTtVGqTHtTamHwExydr4SPtmzNdsaFv7DcCTF6WtzHKbWeYjoB9ruLzPn9KqM7EKmdmZ6vHnMyspEmZ",
  "key27": "TW8nvdpjjBuwkCEDBp8yx14Sf4tmpm1SvDBSPicvGAK5NfUbTrXGDP9uzk3V1hjgyUStxSd1DU962zEsDEZbC8j",
  "key28": "2CSR3daAoJyPxLL9V8Ec4s2Xd2JRLFS7878VCZ41Q2zK3v9YJjBsA5cBYd2u5XXkxRiZWJ9iKWMcz7n9hTyD1KdP",
  "key29": "4xzhcBswSMS8vaA9BoEcgAuNwF7Xb8GCeUTMfFrEyWh7DhnFwKSMsCeFVo5GfKGLGasmeRjbWUmB24KX1ZZP4PVh",
  "key30": "22Kp2hLKqWYRQqbwTow8o3f7zcRPdJs9sBEL8qMr5JMJk3ksZFz3oSewVuhvY4oYfgC5RH7miv5rdXEaPaDcTWef",
  "key31": "5pb36cD9nNEVER3QJDDcx6VwPEkfud7kGStb48R5F4zrF9sX8Du8nWXKq7zF2HMcEeXpFgUpP3oYCdgroFDnApqR",
  "key32": "5vYqyVtR8RaeJw2jn9Cx7E54VipSNjQfSXnB5Xn9eJdKNAAdJWKaX4StAvNm9otPTiGg9psQGJsZjKnvHcRSAejA",
  "key33": "4nB5uaR3RcsZxSJoSgTrtRwaR5cUgDs2y925ukyW8ZzSWQdyvL1xH5uWcz8vXGJr1sbMP8A5vrgwLw93FPVDicR9",
  "key34": "2HemvmB7ZPLSt1GVqCCcnFHXm58z6qDV6a7t3ZHfX3HUrXnMNZqFnzhogg7dktmscHnmWacgv6X374ucV3XSVTVg",
  "key35": "5cYvi9PqLtfS2dspumcFbPYwbWYNSfyewCLXEchWitbKeL1b19o49pumwZv12nMM8YoyHwQUKZqddsKubmXy7K5f",
  "key36": "62abdauEHkiueTNjnT7AL1bTywt5aoUQrDNDvX4LyZ6MThxtG1KYrdTrRDAkVaAojoJpoRTUA3asqXd96RxR65Yf",
  "key37": "49qNYyEojsfvAjVCb8efpfVaSXdT6mEkx3Vd6euE9kJ424qb863rSo5vtYunntyQjx4YfxWjJbtnepkEtFMKKaj7",
  "key38": "3q4ZMjhZz7udnaoMFuDyqjTntZ1gahU9W1xRbxoomDyua8dcBFo4rmNE1mBQgs1f3Knz6kP8EvuR3ooasoC18Bj",
  "key39": "5qU4Ymfj5qAa6jTaqGV4wK66JFP3FhgWPV2xxFa1Bht468APzHajYhwjPxiQxtxU2MVQG4QAJ97au8cs6bnnfkyC",
  "key40": "5m1n8Qe9b2FohCSBXAAgc34WogGDZZRzYGR2Y7i6pga44FKs9XzqaV2tjDpdVaY5YSahJHFrNezybwCwcYtUDqjU",
  "key41": "4RnuRsGYUyA6Z65YoDvQfgDmZYTo3E6x16jqhnwhKVnuNiFQFgYA6L5kgnCkTob1PUs8nFDiPDpeJqvPQQVtbJ4r"
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
