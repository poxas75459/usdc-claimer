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
    "56PRMAbuactz6azf8NitCtVVMi7GntNRsBXen2kugAATsym3NUGMWAnWuVrrrJUbHB3q2rgxHQWo3kb3xAPRXbkU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dWJE5yhKz2uiSa2XfkhkwS3DNUBmmNCUQr2WLtR1PMkcqupoXSvs4zmLBXfnRPx9ZkN6vHLAvzYBzBNQETog1Ei",
  "key1": "58Vq2B1ndEHjswhGtLcf9gkSNgXtQJPkQbYBLFx1opHcst1mKcRnpuBYk88nC6uxu2ssucuoQyM63SxgpZv3We6s",
  "key2": "4fhKw5v9K6yVKejfFTDbnUksgq6T2AcpPQw7URTimvVw8MEnuES3h1PHxhzKTEtwbHhrNzR2eqb2QPpXcf5V1kjL",
  "key3": "2tw6PHKarFVAaxfTu2SHB6sm9zoPV9FtL1waxvQBEkcyM8fuah7HVgKk3QVuaonYo8GYL64dZRzvdFPB9DcMB1KX",
  "key4": "4Xmo1d55LgBoBVotLyDcTF5ihQRUuQQYb39NoojDXEJKtDCcqL8mmtTqSYFRamjW6J59VgUdQSPPe7NhWQXe93EY",
  "key5": "4v3oCaJqwRZTp4G1pTu23X7zsffKJgJWsCkFjPGL2knPdsNvYd28bPGjEDcc7GT6PT1tUTFaDmYoKJnKmfvywPRP",
  "key6": "3o6S29L7vsScdXwbs6EYmDDsSddXZoiGEhUtVV5oTxqEupBgFZVJVSBJg1nuzakUfBRBXPniAwTXbqXRYBJZfgVH",
  "key7": "4cMhMFMC3Jb2MnNLrXE8PbGoNpZSVfZHsaK2GppjK7qns6fZkH9zRbcYQ5Fq8hawyoW73aeewBPMMPqfvhnTYXgT",
  "key8": "HjB2z2UKDmazGkKJYM4avfjPdLNcbL2PMKmK1ybXP5Pwk1tszrXQkqbJV5qx2724ieusf4xyL5SXJw3qqzR1xzN",
  "key9": "4LMYmCvuuu5o27zWDQVSwkZCSCQwbWsuhAZZoYMSf2j5RzNiTaBP8Y46Y4SQ2QzBrF8n6A94afzSfU51PpdHvLy3",
  "key10": "oZPZqW4CQ55nyyFLPasLyfxuYJjb6pdSYhGkVTZZoimBPNgDv6yCttEi2j4DZ1iqecaXte3hpoy4uTQPoP4G6E7",
  "key11": "38Pd8U7FgV478KUYP5ACvNYQT9fw3v3KTU8wXxUYgkk2T4QddSYgvBDopatSx7FcTkVHmdGCuWuqte7oBLeanMPe",
  "key12": "421NH4g4J2MwZFkLBEpQsF5dxUMZUkXyrQd8fYaNCnda2TotYcQMCMjj2TPLEwsq9QToLjfBjP3RPyoYTSUpfRwt",
  "key13": "3sHtuNhJY4EMa11oP5jRAX78zZf4p6ia9TNSduAFDfYMTmNfid7xaYTcFhSZ5ob6BWbd965vPS3SYHMp2CVJ9QHp",
  "key14": "2rtaHX1DsiNvZxPZEFxoftGWVJxGK471ByCPC8HRibwGxgbaxcFqakzdawhHWxFGdTLaLNRAsyEU1vwcj15i6ky2",
  "key15": "593krSNmbgM7KdcuZC11ATsyLd52ESjaaQQJjeeVnZACEcafzEZBvPn27eyFqSuTVFFvkvfR9RKBrxCpHttJxnbY",
  "key16": "4aedtN3G6xvZF2nrJdZ3tbz1VniaAuvpaUF4X4MMLRnqmya6MA6qx7EnmXGSoUuZpuJhWa9SLPEaYvKnHuZNMwH8",
  "key17": "5XebE9ucPSgUSFYNC9mph46otBXPXeB5xmiKJ9kyvgXAYuUNzbhhhPtxSEProrSQzetd51dF8s8tZ7BJmua1XC8z",
  "key18": "MioZpfufZDxRqwNY911zwQyQfCnyHMPFGtYzWkQdwW18aJHuMjj8Qvs4ewXVrV8T2R4aEB6T4C9pth4S55KX1XJ",
  "key19": "3w4ULka4YXyZW4zYUSgx8NMsYgNcuGiD7EEMXewRiC344jWjTvfjdXjyfA6vyV4HrPkSrHY4RPCoRv4HsNwBKUeS",
  "key20": "3AzxK1PHmzDiXikNRd6qfRafMktYBQeWZqJfxL3VdN1NkYLVUVvn1BQUPr932gEojXdFJYL3t3a2ETVrnBU5zKAy",
  "key21": "46ngE3cZ2BeBPc7bwaa3dy4xpKTsA48wPAZ8eFaB2j7pwVfeY2vu1jDbJcBEVsLNVDd185TGjLC4DNskzmJARNT6",
  "key22": "3ZmjuvDcich24wBXRkUPyVdnq2451H7NkEUSJcw71oEAd41ixh7JdxXyYUuMbcqw7KN184KPAjKD5VfLtSX4xnct",
  "key23": "2rSiBRf3C66Z4BBpBubsPMwz2wso6c6nrmnPbFRRh4d7HnL1SgSAs3NUwmhbtJ49EZB4bC53VKR7ZNwDLNyDdAe3",
  "key24": "3dKcmhxvgJ5uiAJaEMVfJb5wAeqZ3TLv6PGsmyVMXZ21NyYd2qAExD3QRpYfS9SxGPhCEvJwtLumCadyw4pbYaxs",
  "key25": "4mcKhboBGCGzazEc6PeiaonrhWvjoVmDTQRrFu389QkmiNuZL1L1vJ4nJTZzidaieGyBLgsQ5DjiGSCN2zjvj3f7",
  "key26": "5tg5wmtKVQdZgG5FzQRZFJUcT3M2VutjkMTnaDxcttJfo48Y9R329EBwD3yt99GGk43LcLLzb2htjwH6zgi1Kn9F",
  "key27": "2umUg2rgVLUJTYrR58kFMDYMNYYpaQtwa2UuPzjZCJVTpZmgftDPp154qoAkcjT13E7AFPwADbaQEQJKWiHyjjMg",
  "key28": "3sttSohtpidQhJ9xJzoJVzd4NjB9eJ1jNi2NF6qZ8NXxRFVsxMSzVT1nMAfnXuyWaVUAW1rxfRLoqN3yvTKdYbXK",
  "key29": "2UVmJFS6YhFY5hjv997YFTdjgnadNw6NpKeYLLZFP7xYc5SXZSyYECekWBSwX1CYBse8aRPcuUN77oNXMVSwPSUZ",
  "key30": "4GSYunCdXxYhCdDSWbPvacRmVoGiWKA8RthfKPAotETFBipwfJxyiXyyctiTSjRT3H8RxJVbgZUtxkfjRBJKWnkY",
  "key31": "625TBNz9Q3xMQvHFSnUSjfygeZnrjjHqPvQive2Qng4YnzD6BqAxoZRpgkAkRdp52zoUJfXCfWVkYqNMSDervczs",
  "key32": "4qBPX9fnFVqLC1uqLZ9qSKwXFNUqrjEMDtKNuvTth1ifCwHzqM3kGFUijpLpV9pqxU2nT7WHguzAHR4fKzsopFgh",
  "key33": "4anMNZjnoUrJbAi2HVhyDapHTevJe5xNLp7i2BahnESMLCF2G3K4zwgCkMgEJYzcG9R3GAttkdTrbDiKYkvULUkP",
  "key34": "3vr7eEvmR7TzpWuPiTEynxA1gGysjUP1du7aNYHDPgLScG4hxhpxzEvbs7qeGkYhTn6XyAoqrvT3tjrzFszbiGea",
  "key35": "44M1tqAZLj7obC6DZXY8ddDV7PysnVQne3h3XsCSfxCrWjmU5mdtieuEeZkxvB4UDdGGwkXqTAEaEUtSjhgQgib3",
  "key36": "3qv34gJVLawfUM3keecMpZYjYn7pySqu883QHJBozTNwQHLtHGSTWXa4mgNqYp5Xija65CwHTe2ArVBUZBpYy2Bk",
  "key37": "4KokU9rc8ke5gRPHZXmmcimzRjrygcie9AhckeKVLhstyS6HN9YieNdMF4sp1AnriZey5eJX5KJ36CnKU7xUNhrB",
  "key38": "4Bjs6KGriA1vt49UVdAMoMhaRMAdFuzNGWNw76mmG9SxHmgpvZbH3PHkf1sLGKNK4bmDttuJTAdessaDHzQxJhsr",
  "key39": "52tjjmBZZtAedXw3qYotTjpn4VAsNdZzLLS1sb54MmQaa4Guxcwn9vkRo8RXXk6JuV5iDwGKBp5UNV2ThMsMzedj",
  "key40": "4zQs5QKifsgXhWcoHguwhRUUijMMMkz5UBvMCTZBsh3SoRioUYaB1hKeroo2xxVCtZTyeRYjR2d1Y8pak2RhWYh4",
  "key41": "U94UyAVNc3EEormLPa8UGBvJkfrTzL1HWVefKwcZPhtsKqYHR27fqT14yjdwudfuMbFM4ZW97xuxUCwhNffiogM",
  "key42": "3r3SSkFfoSFPJro5bqbzScBDJ7A6M5BmXtb9U9Nu2JhND7XTfKRFuZKU3nJcPE1Tka34MMg2RNYRxBaKTPyR6CXN",
  "key43": "29QhLTNj1SUBP6x9F6G7tBh4X63TEwjAv6E7xcQCmPnCqeCHUfsuNs1r1XiiQ94D668BpCgBJovhhULuDTXGmV3d",
  "key44": "4xTXpbhrmrinVSbJk7FXFCs7JTf7Y7z8BqwqjWqP7aJybvMzQ17GpvKupa4MCNd7fqChtyniTvTM47Pvu2zjNkTG",
  "key45": "3df53r6cYGteEXnaM5sopxpxBnAqEUMEfjwEyR8i6hE1aBZ8t1kR5gd5caos6aoB9zZmovAJLp6UqDAd6F2Z6uvg",
  "key46": "3n1bpYSdGhtLM4FiLEndg6khLdw6PsvdE7S6F7sWH8YMhfjvHBfJ4m5MR9eCMe3cuiuTtVY2SrWPmKDLqRfUgcw4",
  "key47": "4aXsciAbihADnqp5gGiJRrBpVnRWSvVqRqPsdbwvAcQprjeFCHH5k1Erz6zFwk6Cj6S4qMycA2UhsJmqtM4VPggL"
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
