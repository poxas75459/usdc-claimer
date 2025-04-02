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
    "3rexjWFLs4B8pZuKSfcPVSFofxE3zHnP5Wn7fHvmFfaQJqcNidSSVFZyroScPwxKS64catgNK7VBF7S4oVaN5d6G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qsUkAkH5HsjNindpg7ZbMNmQoEmPdQbMbEHPREW3TEB5tEDCAQJ9mE1oseazM2KDgNhTy58b5bNfPniFw3jAHrx",
  "key1": "5HgbZk7Hekto3T2aYJEyvRtxrTkLr9VFEgybSQosWjzjNjK4ziKAsPrKjSGpD64JBNES4jWEFd4YcHroZMdozezB",
  "key2": "3mX6QfTKeUY8s5g6PdHHYvVzzS5ybiWJeEPTSzy7wJrV46ffwbgUCDNgAaFczoa7bdNBe35mmwtnih3dGpyGpPkP",
  "key3": "27LoodxUVbxjRUFy4TPjPAZYBETPBCtA66wVo1UyMvgWhMtCWunEDuk7RSMa6svVxgtzUfu57e8iigRjNBjCu2f9",
  "key4": "235o6isUFej5CLXgn8NpDgrDMPfyLxcjAyFw7f6xAstJjsH9D3E32zTiRPGLiLJoRxmveLg5t7z4GZqWNnGTTbC4",
  "key5": "3yZeoSigdictAeJcPgZDBmNTREibQfgXaagMpGJ1DUaQM35iyTx9R9bSTzoDJtjp6g3MJoe3z5XTLmRsHvc4LKkM",
  "key6": "24m7bhgjgrayt5J3unP6KVFNroipdhgMkssPmyWDv2P64LZchfjXdoqBGHvWQcVZxCrC9qzUdSDp3MUFbeY6HfWc",
  "key7": "4VJ4zJfgk9Up63LF75Gjj8fvdJ12VhPRpnYoXi2myMzumVMzLG2KQZGgv8aqTxB7Edg7LaGNzRFLNxEdXCxQ7YB",
  "key8": "24gZKgnetJjyH5C1m4U3LsS319GuqZLkwB9X53VGucn7VZNVq7PzUwajC9SpJAYezAUjbe7M7fbEycpXMwGWyKhK",
  "key9": "2YTqcigggoQGqUzWMRc7VSJ4V2E8bdfCYa7fjg5bQJmzvzzaa2BFm1VVgzrEjtiDz1kLtxeCUwCUMLiKGE92gMaf",
  "key10": "2oEN9WEB7SjnqFirLJioAYqmNjHQMi5mavnvoR7rGRKU5HKzsZnjB2doUAknreA14Wdskj8Ztgr9r4PJLLGfjSZC",
  "key11": "2aknzmxpkBCa5aavzZ5HMTwgRAzywPN2qdZowsa18qNb8wmYqfPaHecJ5P3kxaxtBsZdeRcSSCnBYms8hCZ9otss",
  "key12": "xGvMNZLZ7V3HwkmreExsmFbUvFU54RoL1PrFkcmgeRw7xYC798uoxYyDWLkFc8kkLryoBbUrTRxn9rnB9eeKKyJ",
  "key13": "42vaLVYeS7zj1X2SURWWW8EX72gHZxSBVLAfyqFxaBkKTYMnBM2C4mxpF2DexrW2VkN1kBc2vKakQLZsixKBALZN",
  "key14": "4RUY2Xt9BTTLxvewwNVB97MawCcLS3dTnbghHfz6qT5LVBWEtpZahzwKurH5U7GmPQ4jUzfaTiXGfEV32tjL5f4K",
  "key15": "49KkHHwEhRw194H8fKGozd55xxztrXoHzaXA1soesqvQ5z3TjHmnh1vUPsB34Gs6L8DPphJqdUaT6briqevygt1C",
  "key16": "4j23p2W6ntrhg5yv5266TDBiMqDcyXBcg2PWaL6VsVxFWeS4W3nHxHK96oPgFy84WnNYLbpphLs4v6Sahd92pJjV",
  "key17": "3SHmWrxeeFVuoEdTweGnNwME3EBzeArQgYivgmwMpGf7wRwFSD8vfLtqhfNxRJULhVsTQzMdibNGcmYHTyZCDxNY",
  "key18": "2WuiUekLDAHn3nbS5Z3eYsdx9zoogaRdTYiu6CPKJTu2cE8YM31LGLUjh51dz2rLEhgxZeeCEjAhaLbDdViWwb7D",
  "key19": "3ieBDfi46QSVLFiQ9hsFoAVDfPcFqR4uhFVk8CnKJ7qZxRWCaDVV4pkCQbKadTYVZxBXpfEqkFeLFXZLuywGSbXA",
  "key20": "3RM4vsbQ6R2V1KhX5dHmNoK3Ec58Qj569Zj9wKyG9vMu4XNJciMAznot7wDkQcopG2wVevBBLmhd9XrgXqLpgnRJ",
  "key21": "ViH9xDNTBkNjZS3yKhbxPgX5ShCUrMdNm6bu7wea6yECLbcwpmanZ8JUQF3HVWCvzwqynfhXeYxsCdmr9kdqbPg",
  "key22": "2pAwBEXxDCE3aYLo7C7dFKXF7vc87bysMQAmHbSZWgG62VaiUPirX2mpG6uVwDVqCSPNEJPTE9Y13W4ktibB69ww",
  "key23": "2JxjUNDRXFfw8VPP35jwdykZHL7jQky2ktv1Sqkpei8dQYe14WfNtmAfMV5Hf7Yw2JRYdTJHPZDymju9Cqtgg7rB",
  "key24": "5JH46KpwwMoiGMQu29rAFXCgYQU4nSxEmVoEovpbof2mbqAxNfeKmyHd5ACFMcGdAGWNaFgG9USiHya2RjWPQmfm",
  "key25": "2C6qbtR1b5Ay3hyVjZEW1WfeNoEABT8zKrxkhrtYWEfmVoS9dCXH2eWgX2xzVNxd13Xbx5y3hsPYEmWuVcCtKqsU",
  "key26": "5XGX5sS8qnHTe8h1H73f1VpZ2WQX8GJkczsgQiK8YKLq4NA8AJWqcD8HpVDH13wjJm5hZrGTVTw7ED54QgLdFife",
  "key27": "4GeaX3KgwezYPWXmhBAy9iTM9hiyY6jKpAfA7M7VXNLtGa12oGGUwXAcKxieytwbn6HayqnGEZjccTqei9LFLehP",
  "key28": "RT5FiPV9qPHj88pj4jA2tKiSngyyTXmj8NvCA9NNAYkgZChXvhfa7dmHK3zk2enSjrLaDwdVESzqRiihD3XgWc6",
  "key29": "u1AoL6ULGrqHgNGPrNCtFMwjtrDz6ZpnKEKxLESCPtFrCAkbQTTk6acuc8xKzicuWHcdsmVo35Afyqm1Tf5rsNT",
  "key30": "4fjUfFnVTsPvqen3BrLKKFJm2Mpn79iraBwmH6YgmS1UchFpcd9HkD5ssf6HjvXdPZ7TiA9tCrRTZ1ALTgALh1sF",
  "key31": "GDxj1HDCrUPG3xenU9fDCLZAdN3RsN7tChBjaWumqjutL7ga7jzpaLSZrjVKmrdamVgWTUZj7ZQfNRyDFPDkNja",
  "key32": "39QzaFtiUoMoYkwMkZVTXxF4xJyxCTpfuoS1SognzyfCfh2kbkv61dc8WrypsJ5BGMRQTUvYo5VRaZfdSxmmwMHt",
  "key33": "3ZGHV6GYBjpdNSPrBjUdnFbsZTkn9PgLSwKKmBsfpeaEoVWgqqK2npJNknPEDHnaDey2yQpScdcLMffaBYHqZYta",
  "key34": "5yY5CzrvMZzbFux85oRhmhpaJkvpAAGyUeC2BdjVMBtmKRVEcFET4R7cBTeUCtkzkAMksAt6bnxbeCtokfGHwvGg",
  "key35": "3yvfEDvtiPjk9bYKvaCkSHCnhaqDHKiEx4A2B72fyhygwN7kaqvSJM7cNXAauNKfjsBDpSQ5P5aARLYR8b1NiRLY",
  "key36": "44JAtsJfTpstHkheCNX9hK94kCrUk5aDG3HSrHMWLeU1MJ8cJMLniA7jnnjaNYVckm2Y7SKjKE8XyL6jfKGiRRtn",
  "key37": "5xvizs63k6mj7MnhpPXMxh3nfArWnR64ZVDqP1nRN7x9j8WgjySHdC7cyGCrLPg1J9zrpBRFKJ166frBfz6nNyd9",
  "key38": "4nKU2TX6R6EPEk1mXGVS4MExceTYKcG6M9xedt6uqkdNgiyB3BDkb985JHGvkVs5DWpKxtkMELqg5tpxGCmkQrZT",
  "key39": "5EWLJyKypiVKJL4EuoiQAsHq3zvGKoTnGKKPkmpu1mUVmn8LCJNGymMjm3wxpWcbSveSseDrUy9CmsgErun2Z1TU",
  "key40": "2bqMs7hhwgppK4AiKrmJqNB4fhs1sKuZMRWLAYqaqHQB7C7VJMV2ehC3zqpswkTsDJZ1ejbvGEQnNm22HeH8AZ5L",
  "key41": "31UWh5MRLj9ZuLE2NGD1cCDYNNNEQmbnX12Cf8XbDSHSD47BRRLW6f5G9GBiicuJSDFNu9dYAi856ZW2oM1bY1Rs",
  "key42": "3cEovH8Ce3mqQem5RDjNV22AEqL5GsG42ZUG1pUgU1ZexirBRL4e8QNuVh8DnyjHYwEH1LwG3edKgvCkkjnNBBcT",
  "key43": "4FUuaTruvrEAHk9tgfE7mVf6JxX99YhE2F7ax4CRxibhDQx7zMF95X3VUNmvgAwU87jaL5Ry2uuzt3peKHPmm12E"
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
