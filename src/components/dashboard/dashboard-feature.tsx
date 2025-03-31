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
    "5C2pWh3SfEpgS2AQ6B9u9qjjP7ZfaZigS51XTeFBmE1eJscstEacAu5yCej1zL4yfg61GPTttyMu6yx7CUCHBvFn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o54hvz1qQFffiFLVqSNWTs28SC4WqBfnSFee6PfHRiWnvpmEj5qtvgcpcwFiADtUHmigR9xKiHBNNLZjC6SCEmp",
  "key1": "42Ma9zbMtGqU3hcu1HE74sr6ZAaH8cVjtHNo6C1KmC9bjrT7FT5fKGd7jdhEQkZVcRF3xExG5Tm3xHt3j4fhMSs7",
  "key2": "ufcGQhLJFzGCbQLRvTFpgv7bMTSuXn4eW9mS5YQEYbparNPgyVbyuBqvno6XpaBzAeCz35E2CUvDW9YmX93tBUY",
  "key3": "29E1bzWMVxG5uHAuW45m5BbkkQUriTm9Xvs2q1GwTAcqeraczVkb7doy7eojgbGDRyz1DUBzj2uUzt69eMSWpj6R",
  "key4": "2LGMJKsBcqoKjmHZH1yNtAzSK1EMzantfhMF6o1iArKd6U9ZxqsRomSCQDj2Kum9UzwvP9NSfmYopbsQcN65hrwb",
  "key5": "5afRuhkgbSD3FPcEP7ckyMqEpcR2wvEqxRa4uohUD32FUEUHTCz1qfPNmnFDCkHpZj4pjJ7JjUhpMHR3MAME8wHX",
  "key6": "3z5Z7zN3qtMkfbKtSb4TRXEhRASqxP7HyWZMCY6mY8sKWwERvcULXuKuDcRKHW3iBW24youazwtz7L3uvPpZsvGf",
  "key7": "2foBcfrRHA1kfatEkYWupDSqw6wtg31EF6x96dxzHkw5din7NhXW2ce7zLexYKypMTEsUg4fhtg4U7fW73GJ81xX",
  "key8": "3AezV84pWSQnw9jhGHvtP4EfDpY5q7nQCSkogLPKJXxvCA5inbmXLWniiQETweTLYWeHwwHQPsVHpF8SUw8JKXA3",
  "key9": "5sHNm9rEeVCvpamfPx18fXGLyv1dAimR5QLjQvJXrFZNgRV2iL5678HAjd8a3HDwwey1BYqS7p6XMKnD6o2kK97T",
  "key10": "44mzg65AuccA7e7ZJqDB4EffhyHKUXUmjeGNrpfjYDeCiBgTJmDoEbxmLhRwCnTs9EongmJQS3TG82wNY6tzZer5",
  "key11": "3pqj1zFYDjabZhxhNo1pVHRYvweZvJeedA8eRuC2KGUG6vTvfCALEAhfBPsA9DjfxmZprDqu5d9inVyeKLFngcGN",
  "key12": "3hNX8Cn5fRckZrSVRhgHoZQbD7hUZndaCvMg3YmrBP6AUX5PwiRLjcfcHC1HDRjxALiwPYGLsaYGtJ4G9cuQa5m5",
  "key13": "2QHBzH4qkUKF1E7X1qHWB7EEbCbXBHZhf2UHAkhS2NqKQkRZS3nVupbDdAEaogQWPsBVvscgLFikAfVNtS8QrkvC",
  "key14": "341Xfs2aiEDT7c86SvYjbV9UZ2KtU25h7yeWU9QeR7Mi6a2zdbShh1ETHoEDY6gwThyLRBAk8HJdtKdS3XRP5RwM",
  "key15": "jLtXxuwYV4JJfADTpQiL386sCpEt1DzF3nXVeRWF7FaTGY9v8RY9uTnC4TrcsV5aGrxTh3wd9NfQCXcMExUpDkq",
  "key16": "66jpbUYSvRVPumnGVoboUeyTQgRHJaNVh3rBUJiUdLSwYFHAEDVCV8iTCEdaAaZMQrELk4SqGEYfbqRqB7z4xA7D",
  "key17": "3vGNcJ2ncZhdYHaD3gwsBdPk8NyktiQtrDN9b3ZiAH4HcMC8iLrVTH9r75az46cdYGhYYGWipp88ypfE4tyoNQwe",
  "key18": "5Fq2BxC6HZwAWF3y9GX5pH4XeCvk1JopUvoi1fyxSM3sTvRQt5ZLUDQyFZ6Tfg61gq1jxMcoy2L99YGGXZoKRMKn",
  "key19": "HSvSQCukaVjJfpgKMwvgvd8UmA5C6bhwenhHhfZ9XYCeypQqMbEAiMgYr4xJkSHSKffEThNTua5N6kNXMgHTNQq",
  "key20": "42hpwqJzGxdEomuquxCaVQ2dEAU6aGe8KKSex89KN1syTAJbVYkx3qyCDPFKCUDmKgprBDUdJPfRZN7bFUqiNHjx",
  "key21": "5fMCjCwECPnouaNzmT5gX5xo3qN3ow25Pz4eYkNUo9FBXoT6QGhaVBbAB4vnZTDsfuo5c2oKNdX7tUBQPAtZgC3R",
  "key22": "127F3243zNkL1qS5uGuGZKpMY9rQcCsd9uGWdv3y837x5BTKVm2B7eZv814GojEvm73TMivatLzdzVNjKrraaqZ2",
  "key23": "2oydxBFEAAh8dkVCnijuawVEFHLdyyPhyKqvCFkcEoZzCCnkBVT6BSGPSovVisR4RqwwiyzYWSv7rVfbT8sS8Y7r",
  "key24": "57vnjbZ1o6hW3zz872CKRGS32dkXEtTntwXfTBrsp4qpRjkqHttXE7fZV7RYdiXF1YpM8kWwLt8uNZmPbSZgBNt8",
  "key25": "4mFMkRHGF4j7QHYmEcc6F3mfSCWaBv2SBvRFYTitH7Q91tbeofMdFTvYewVeKCDmq66sJK9UGRZCmC7fT6pvuFT2",
  "key26": "27jZHVcVzH7CeD4TNK29kLv5SYQiseTspSrySq6pN3gHuTXaw2wZwmN2ctn9xgY9EhjNziQyLcUNEcx99gf1kwcj",
  "key27": "3hqLesu6XNvzigywGRF2wKVfMa2YGFcTS9pyjTVdyyKA5dGp4LYaWE1MiTCKY8fH5EM9ffVWc1y1akmtPhnafKp1",
  "key28": "5qi3wYNdjrqE6YiBwfELS3qm9nXBkZ7nDckYwy6auNhKtB2PPRDTmHYwfbVBPahye1fYPtCxd1GvgUWhnZA2R6Rn",
  "key29": "2yqnkqacdQYdJjxVtBPjDTmBBGuPu8yCkMXrXo3GdbXUau98fZs6aczddXAZmXBab2vzzgtHsSdKBkVuXe93kpkC",
  "key30": "3YwhS871GTJmPdm1k967AVRHFNksgDw2rrHVpVGX86HtKBmJxBFrZqehY7fyoB11qg4rhJGdQfFp87UFDAS6asz7",
  "key31": "2MmdECNrd5pCNve3pWbLgUdda555z8FD1JDYyDDZHDeUbmp9uJjjQDDywGBTxtuhAE5m9rS3mQ5Eg9qfgUiqfZS",
  "key32": "5nhTUYwLeund1GBXrMVhy2xki94gDaZ4aRMY5mcmBwQoNtGfbGq1E5G2ENWuPMA7JZKPKasSDhi2rRNjhq49G9kB",
  "key33": "4SytwEc7MnCcs1Ugwpek2swgsQ5H1pnbfoqjLDNvUR2iTMAEC7eWDSEZid8TGqnperfsEGXi8RRRPwFdRKzaojuY",
  "key34": "4Lf1osLDCbg16bmVG6or73tgpEeDZZfwuTrTh6CP38DEXeHFLvb1fKPCaM9xhTpSJm68MYjYvku9jkvGWCYMYiMk",
  "key35": "4MCAXNDbPjQboZysown6WXKtBVCWVbRabfFd7ZCvv7tPPmXTHsseydxZwBkxhEBsCnUioQrqQv59hUooAMZtNnkf",
  "key36": "5xJmmqXQXFtLHU1KzMVZEnSXNvaxM1iHYNGAVjQLxeCYwHv7sMekbiGsTU1afVtwLyqT6cjQXL8hV1535985jEC"
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
