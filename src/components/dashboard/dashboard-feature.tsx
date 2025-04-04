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
    "5rWzTnuz4K7s453xtbmsChn9ge3rrUsK5jwdLdHxVZk6SY9UFnuF6h7NbJWmkt3KUaDR5bqdBbBd4NBbZ3KvFRoe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Dwjzp5tJiy5WoEN2nH63jjSK2EbixGHpL4FZZGEomNU6B5GMRbxJkPobHPbQHNzsrTF4ymLQr4ABBZXxFtD8ABE",
  "key1": "4aLJnGrxia4s7FF2rREft4QiBwXms6qtFKbpcxw1SYUTEFmMBRzb7Abx9L98GKdD5FeqjDoTvn1r3BkpEzx2MZCM",
  "key2": "2HePoC753H2yKQ8ngaPk8U2Ve7HQzbCR7YoVwxAv2q5fvvCG9FST6sSJ1h2SXGKJKWtHxP21Jk7S1HDWSnD4ahLA",
  "key3": "2sGCM6TvfJxfxmJUMsie9yS6QyMnrD6gyYSDpw4PzxC8gtTTCFyN5ymf8HjxyT2uxJwgHPUZjWzVMHTVg95RBZXA",
  "key4": "4PHuCYKH1zvUd49wrBTCXzdD4SFsYkTrTNJfLWg1HdtTWkT8b8UgBEEqP1RcibpU86pP7uBF1fXLjxXYX7RWs6X5",
  "key5": "2k5miHgmGDhgDxRjUsmjNW6yjw4TqKbmFwZhsZGjj4apMhCZmbf9RUKn2sbbEya2rtXLzJ5yc3Wn23hW9UWduxm4",
  "key6": "kfrXETNASjV6Rah12mY5JGpU3PJR7SVXfuYJzN6UzKS8Ndg5tSG7uXC8dmPaz2vntVdbKL72YgQNkh8kHtu8Ex3",
  "key7": "4Nz9gxDCHB9A9TBPCHgv2aZmQGoYCtktNiefqWRPFv8mimi6cpvq7bcVEUuyLBzpJ86HeVNQaPKoxRxrhoU1tcDy",
  "key8": "4BwRnL8QDHmL1PiirfBKFeTvSfWXBUJYe1tWR6ZCb7HxshnxoTcQoHW4GmZ6puYhXFqmPYNTo514orUCYE7QLv59",
  "key9": "59pKQPehvVeLMMNkQ8gZixJtF5ventMX3BGRZcz9XvaQBQteR94dvJ6FUXmPoysbYzAiWzw524tYr7J227rSWLAQ",
  "key10": "t8sT3oxawJdEnSr5aeAJaS18aqqHA7EzXeWmQc82jsFNaNqB4DciECgxSXHdQ5DuzD3RdqfAmFQ2anKk5xmhztT",
  "key11": "4XfVQiwkGLv4SVodyuPJPKVhPcsz4y9XdsAt2NZoFZCdMMaTbeANMddkp1AhkmLU82LYiZzy8hf7CWTZMQYFKosN",
  "key12": "2xFQ7Z2k3Wqb9iTyLQZZxXogEhSd6ivi7ejBR5TXzEPknxcKCEY2mpVFM11DjFuTaA3P5oBEuCC6dgsMMvmH1xBQ",
  "key13": "3LY5dZA1HXAQRRY6EiwpHSrRiyRcNabkNdGmechdYxFfj2fkGtaMwVBq1aibv6L8tKedWYuT7cFG3KDMqSFxaUuM",
  "key14": "5iReq6aQdLnaEq6mJDorajnJEd8MDfgrNRpBv48ik4D8UGaHySoY4BGag4L8g684DSoJCft9duHwdymcknpj2BBz",
  "key15": "3Txi6UGW9uJz3PatWAtedZUWQ3eeEFmM6RHFqBjAVMtk2s6vtPLaGpNLLeFWo5pVWfkwZqALfrZs2ocKCZT1dmKV",
  "key16": "2gf3VDbi6mdP8jEjsbmPEzemeZq1HoQyryLb92fVWoXCPNsyjKmrmjH3e48pFdauLsSZVke4rR3bHcbuEujUiVUV",
  "key17": "4umTNRTeuk3h4w9Vip4w3dgpMkTizrJ8emQHuwAMWDwynybz2RZDADVHjWtyM6iFP77vwh9Taj6zt1jNBLyxGow2",
  "key18": "4N4breytjUbCJC51AiahUtS7BD241wt6o94ZSiub4dZ3kzsZB7eTCqypVdt7wukbfDyqMu4Thsogu9ZGfgwGutzW",
  "key19": "2V3hrXmKd2wqLgJBhQt76a4qzPqvyuGmv5m2PV7knmGprjzw8Qpc4R1xv9EVZaZQ1TMdxZ2udo7W2kvdXJdGAui4",
  "key20": "35eH7sLSLcm81izEQBg7tvLJkqBy5rd8AkpUBGqNRwsh9AV8L9K8wBXD3dXDFhyXknVqWnQmhLmbqZ7Zr6CrLQvf",
  "key21": "fkNYJrFG71FnTTJrs2nd5EB8CdqSnFaJX8SeNN6rsd8nz8d65hqtnYoticVobBYHdNyf69HZPKxggxScjEjJbGM",
  "key22": "2gxbJLYYNuUd5wnB5fQHQzo6hTAGbJXnYjHqmto7A2fuyJG3mZZgsG9y8bSEj9vg2wKZSMMqLurk1B8tEbsCcA88",
  "key23": "FUnJkWWepdpmRCEnkmPTNyKwEaaDvq1AauRMai7UHDXFviRkDXFyUQmFztSMT7Yieg2yHPVmCxkANY4LhJjN5ZW",
  "key24": "5pWwXGYGDNLMnWZ3kNBCizd9sZsipqmQa8nraQDHt9y8QDYCad9WdBMHU37iZ4Ap9VAtKbWtUMyMHnpTrskT4wEP",
  "key25": "5uJbKweyTRAUxZggmW9f4vF3anJwFeErg1ZmojijhPgrdtDWSv9xVgnvFUTSVcMBZMzni5s6R1c5nqqSrKksxaoV",
  "key26": "hdQhBeVPwi8mayiRGk2sypxYM4BXN6frMbBJ79gyfHSe7kDA8ckYfyaQXMa8dgZ9VwAyec7MHNtvKVqwYZ1xqqa",
  "key27": "i6vu764zS1npze3qeuZEvQUsJCk4JbbwACS8fpkhS4hSV55RWssyJDxYPvtxDXvZMQkCuGbPshumk7xKGKPU8aA",
  "key28": "5T23xhB25DB2FjbAym8CMQLqh1hnGNe6rNy7Rv98ohHpFc2BbCPgmdVSeDozVzirkAwaqJoRHtUkpBV1HQwJYEcv",
  "key29": "55ak6CptQcPeMU8mqwH41m96rf6Tpt9scuTKWBU2vXR6e4LUFyAJu5TvNMcZ8Edub8ke82ZG9Ux4KNmgsiC7JA4N",
  "key30": "4PTYTVKEsaMEqGJEfg7f1Z7iDRKLktVHrzDQk9f3DCatNVUNAaPsKqTMpWaiHgmsH6f5qNYBW1cGmUfUVYiTJ66q",
  "key31": "54tJJKWcKVT32zu2wHYHE4WsheWd4apAKvGLV14mb9WsuqHEczCemTrN9dQRKHUWGfoMy33nMD74zZf56ce2CA3e",
  "key32": "21PEkR7WEJwiwFSWsoB6BBZ9xTSxpvNKYv5DTFvNKpgRr3wDmBvPPjBZ58mH5Jy7tkKEbipAT7vzkjFcffUhLimi",
  "key33": "5CL1hUG8JNHgTtKkXGdkySfQWP7G6YPfXtggNqXxpX4Wqh3eFJKZMNQvxoXfxrT4pm5dwNifVSfUYYM3tSxRkntK",
  "key34": "4NWerHSqUimYbh6R1dodeXpA5dPkR8rU1NVDYKDR4KZBP7quBX82tS46nMrSr2crMS22N22So5RMnuP8Kh9z84fG",
  "key35": "4rphDZkJu12iLDUuDW9BH97r5mPvJYHeYhHne46gdP4qiVJa22Z4KmRYRGCN1KcNKyuLtPpk1nY48td6SKJJzvmi",
  "key36": "4zYt3Xa9PnbYsraBFZhWD5aDUyRVi9wri19XY4PobybX6QZzPRL9shde8bqjgX1w8yeBvVCTRjiUf4wAgwexb3PN",
  "key37": "3ysHptJfT2hacP3GvaLdjmAT4fFgDY38aSY9qgXTp1BBoAzSyYw7QPh1x9baEPpQuj4HmzXrUCWEyRTUFTqvwqun",
  "key38": "2Fo5MEU2XuGw2XwMo9MYTvew2KkemxbcXV9fYcZTywhXDUteuGEQqkZzndQur7XG7242qv8e7vDsN3gs5ex6UE1w",
  "key39": "2Y3YaqJ1PBKPGynjWa5ZfUGwv1cZmT4zTYiw3DJqsAXiqz4dFLq2Z8AegsrpMTYhQhnhzWoWyGf22RE8V1VY2A3c",
  "key40": "4zt6ERbjJAZenP2h2zhrnFU9MpLxxfeRdLvgdnkuBKieYLFTqKq2ekShfiqkS4CuJRP47FiDAQN1LXGJJN5KSQsp",
  "key41": "rgXFKB6316sSHRG98hfCpHtgLkoQ7h5G4LGfjX9ufbVK35uwv735hnEF4kWt2X1AREwTHdq5XNSbD8f5bsVkVhB"
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
