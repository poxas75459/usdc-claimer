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
    "51sexp45k83C6C3LcEx5yFtNQ2X9fem9cNLNWLz51owrxKNZGdeyMKQshtLqsuw8nMLRyDibrLvdZpx4m6jEFQVz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66B8Zd44vcbyYVVVLEqYiDr8rc5NVMuUt3g32eMZTn4t3gfdVjmUCcgMG77PSXAaiJAgaPSa873jRowdkH1AGdai",
  "key1": "2pZizRRcrN5NL5QQBiqcZ9gsAivKSJgvqxXieQQuAn9DaPxBRnFGqa5FbiuPn51B26ittMtPqCrV2kUYvhgQnPkc",
  "key2": "YfgPjkJiWnbizPfqHTUGc7qHpqaUMaanUqSoye719Lef78E39bXRFHSYhDgfrQREz7bcuwSATw4ePBhh8tUnJgU",
  "key3": "4FP3SmyrHnWzhHyP71PJTHisCXmtb5KQikqT7R5QUBY8XnCv5UxT63JPRXz81xN3pCSkKwitAnYcn41VRQQmxNqA",
  "key4": "AnqhWBhfQRJUDrkKLJ5EuFsLT6DHebEvYLGBF3RagnM6T6171rmBiSMPDJcyFmEWUsgBvKSF9yL93S4cEq7hUy7",
  "key5": "46aSnRuBoF8WEsUSKjtBMPtcwkkmoPT33i8Lyk89F9xPwDseXWvMHxiXRfHW51zH3U9vBjzEb1w4gnAN17fkaeKk",
  "key6": "4pDyJ15HttxbULbhJJPiL3YdHtWnYeQjXYZTEdkq6uAYFeaqwjafPTUKSnYHCDNGnWjp3cfJ4rdn4uWERtud5QpE",
  "key7": "3NVWkamjNNo69n5UH8YFjekb7uZgkxEsZTpjZT8G4AY3GEhQfnMRePmtU2466rdvSYv3o2JtzrhTvYpHvGEPsqiV",
  "key8": "2n6uZnCLreyxjz7mhJEpvVhRsMhJmSzqedSaNGKkKKG8LvBqE3xxfh9wRZWTnMiTiGZ8gNAVcDv2uXfhd3BQDvnQ",
  "key9": "2b7PY8JP5RkCevG4Bd5UZt54C8wsNswVYonrErjfTsTKFtTBakuM7ANKRCEpsTDU3C2aFQvyoBzxNcFzmNow6fPo",
  "key10": "7YHG22dHWw9AexPVvxRKYmusV6y1q7vbYdMvDXmTho5cTVkk3o8e2TNhm8JvaXhQ2BBXiNc5hv1VaEUwiGuPCgH",
  "key11": "4wnefpfTdRfLwmsVajeZ82TAc3RREVEzncik18yYc9F32zxL8whJYSHQgSMi9ypkeRhaeWN6cKysVVALuCzhTkUE",
  "key12": "3jgTfSLPpJvWWSLMDAYr8ckA4LWw8i9E68MtV5THvpcYybaijfv4E8AX58Ps4JyXVCrqbfy7tessfpqyuvLrR69G",
  "key13": "4RUn2Kai64iRK829QkrtwMjCAv6stCbrAGSXTNEVofsHZV9sQb2QrsDG5hRRCU1QcrffnTHQDUdYzZmw9hznsZaL",
  "key14": "4D2hWsLRF1yLtN12jAXNXhavxuT3GeCbNLKmzedAKLmoK8PFy9x8o21kQQb4p46CBvqNqSXMzimHTcaGfK2MirjP",
  "key15": "2osNLumUBbN4efdHfforTDVPaaAWMT44zTQ1sLThNGWdYHFPpqsVWucaa55HGEYF44sfDtgfXr2D3GMgVmN6ZUkQ",
  "key16": "4mKkGfUMwAbLxYtHpshMMpVCNztcpPTNAQW3HZsxqitaJVsFqq3S6TXNa6ze91AVLa2XsoJDPUbgS86qrZue1B8A",
  "key17": "uWRqTD2ePJVGxEAFpzJgh7nxcULgATF3738n7KLZxm8P5cNfHp18mzycGxSoC5Rn7AHYRcGGkxT8qGqCvaWLKfF",
  "key18": "vuGWk4SyNY544xKVHtLCeUQKrEYa5uMKunXF7Gg6UxtBeU328i6wCVY24fLdwqcRC2UaQvCrycr275Sfe7zqyLY",
  "key19": "5kyCGzARgV1bxcEdTytqFKqR1VuPpYdR3aGHDoQcLrnEtCfjeV74WE557nR48omGs1P6CDdcBYZ4dydNYGvHe2e4",
  "key20": "4u3vr74rmGBg544WB9nEibhEHwg5pAfH2JgQ32R3oDgZ6hNLd4mfkhpkwGSvfuVbVqav1uVqnUhvUqTsU6xrPT9x",
  "key21": "4EmXWd5dF1mVBZ7MEuAmzYzZFTEZqYxJXwdq73c5xaBMxfmw476R1z4CAVkTeN6yxZ5M4rYcmkjrHeS4fCRDEySq",
  "key22": "5fqC3UyS2bjnw71i4j2J4spddevKEbq3G9uQedDHaiaACYx471our257ENSmdoUSrdASLtu9j7J3QMHRPGnEJTYK",
  "key23": "2TxGgMb1EVmXh9AiDcAohTfWwfh2fFJt8jUU4Vwdhcd8N1vejjuB1Ku2cYXwkywHP3zGG4jcPKt2dCo9AvefsAbw",
  "key24": "4ortW7PTSQtAJT2MKSWf5r43eiv86nVTinUt6mdu3Xzt14YUivUezSgquc5g9uD28QDz5VdpDGDEsHcQCiQ4G5zx",
  "key25": "4UipyMNn6H3qNPLdTymuW9VmgEzZjg9msvfGUQsD5v8tSf2aG8gUpNWBHhaNapib8R73pnamrQgEfq2hDTLsm1DD",
  "key26": "4ba41FyTuSvJwQY1bN5MVgNTBwY3vchVFPjy8Jxb3GPw7c3BvbDve73nYMJs4K8n9fwp3H3Zf7JXShKrZuBXfxmo",
  "key27": "58xrymyEEzC4DdfwfN1ruJjXLe4QhLEnUak3xzjZxysUhcek4hTTZw23ZwzEz1X3hkWZbVGnacqoRJXTVfsjzL7Z",
  "key28": "Ma4fJHBZ3FbPatjpkEAuBuN9CA7riTSL44cqTbESrDMNZ6kM4W7SJ1i87EjMXFReTFUEWfmSkj4NCZsUAoTtZWQ",
  "key29": "Jc8HVrNUZCj7j4FnVASds8StPChHR1dZbnFYVHpxMsgTLM6oNJDmYRxEFin1twuYL7tQQXURxfE51mYRSMquh9q",
  "key30": "5d6s3kn6mH2aizxtyBhiJT9eYKmWPdgLZe9X1dWGQjaDdRqnED2kHAN4iBia25QPKfiqVYqnnfnWtF11ULNn4aF2",
  "key31": "5e5casZzMy1AV1r8qQRDmbeBaMXXNWorL7E7MzB2uBwdXKGA6Vbbat5sWkPawBbRrf8Db2zoMKBfp1g8SaqVa4xP",
  "key32": "5gCbxbLjPCGn3sidR8No1srwmBttjBhq5jk6DHqLbGZzdZJPgVgKCSTuiU7tRHHSs6ogKGAJtPRVefcknYRyTGa8",
  "key33": "4J4ChTWwQenmwj5b3SnvsknWqXaxYf6nSLRYYTzMhKzk347GAed8LKXmxjMCUpkdQwuUjmCpQy2aSDRxvUX1oBei",
  "key34": "2NDoVmoaKkak7d19iuZwzz76nthVWV32kZ6WuwsJaKdsUJjz9eUmorGqoRm9iXo1PGiwJgnPthGK3p7vvcM5Mztr",
  "key35": "2CxTVUe55QNUi2RyVb96GnuyUv83V6NEoJ2yuMhehLBdbYkGf1oRLUpZvVk1mpZDcRfeNFMHxDfnQU984niDqV2L",
  "key36": "2vfBZmNrLAGHuUhnexnoaF5YGE3aXuBHDucaxVSzVH6jcRB1bCKnZScKpDqYb2WsYrb7FnqZVjekfdiG24vC4BHm",
  "key37": "5oCgzCFAWk41igUPcXPJw2BkopSJSyuRwq5kzuCxd9KunRHNy6JxbipQ9ro7NhvyeXaEZjNZuUahZu1SrneDcao7",
  "key38": "3vQnDRKkj16syBvnUbA79uto5pAyv7SS4QqR2Y3XrRixNBdSTsrb3U21RCgj5pqg3uoA3u2maMhiQpb2H9TvFb2x",
  "key39": "3pWdn68swHecchwewoykLXi5ReHTK9A2e9V4Qn25DJ7ReDCt2VWWXwrA3LgLtouvwWWoDUGw3qb9HsV4zy5QbcEn"
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
