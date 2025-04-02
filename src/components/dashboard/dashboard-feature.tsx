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
    "4iKgpPfWnmTomNquKN6KvUuPvCkUFAHwhzYDwv6rRMqkB8PafgtrBrBXBDDqmL5hywnoRDRTtDWj8d6wLTkiqZ1U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kBRi4RHurseKiAMLHxM9Z8mPu5pDymPVEk7d88AxaeeattkYzAuRFdEG2cDnawMEd5EHQoVeesbbafkembA9LHf",
  "key1": "3pEyPZbfnv5L5Z7KJ2kMSVLuWX4351jJ3zt1CegVxEvEYBKLZ71pAHDftqPYPNi8KWHXeKqpcSu5L2KimAna2dEU",
  "key2": "4kUcE7jSZV5enTK3Kquo9HYtZD2LDxUCRE6SnpZxLKU3nCJhoWpJNdFYrSQYkLFCEjCfRNFm9BHhZz6z6QMMMCye",
  "key3": "gmaXVVhUYvQ4TYbFZSkk2PCZvSDfygtGnGBQEdDYZMtiWJbJnHEWMy8g2B11rqrRqv46DVAQDvv8DRErFe7dGSA",
  "key4": "5ZpJ5tXDLaEsyUeuFvHJz8S5kUq5k7BF9CnQPGLFV49Q7m4CJRByvn64cDSXt7qjXVesqE3D2cCtHrMKpUxwC6Bb",
  "key5": "aShzouyKntFHkwJzuSFe79bheyc1fLkFpnMsR4bAxCkKzTMdhwXA1fLcxEoUL2edoUWtn6TBiBfBu6tit7NNkgu",
  "key6": "51QtegrrTiLJWfuv8e9n3NJCwfXv6xskiRDowsFrzZ962p4UvcT7AAUbK5HDSDYouAJUuVcEcowMwAb5DNBWJqKK",
  "key7": "4eeGqAdEgERZNbeU7VzqWQuBfA89dzc1jVZbecqcaZeT5wvgE5FTrbRSxsMmVjiMj7tjkaDcNe4TzSJtaQPDwdLQ",
  "key8": "239AJU6p11mLM3qKdHunT9YNYEEfwsuo4pQXdJrX4rApc5FEr3TSBkNRLG3jZkDbLF4mdhguZrsyZuawbSAD7Ao7",
  "key9": "43JKVpacceq6TjHwRNvLUU8H65qLi2CvUMooQDnUKy8hSMtMcZUppeUdZHELbG6riT4nCZ8G7mnG3yLfWTKpmmK6",
  "key10": "5aHGDoSpXfUAnhDLqmJMHT3w94uS4YJjxRmLyyY9YktPQRRxjcqeQpzsJbpjj6HEw55sEfA4Mi2Ga1qxArCEDWxs",
  "key11": "5QMCTMR6M8iWS2HrnRkRtGmCC2jLT6U3w6epXWmevhPMQb5hH2hqvsU4uJLS7bxyMiMsWZ5uRhVcUS8XuVfaXkJ",
  "key12": "39meCUeNNqGxjRxW36Zy2oYpPQ2LNCeos1oH3REjWApnjeMBKm1sZgseTDCxM3ziTp1rjMw9qD53wweZzobPG311",
  "key13": "VDQYs5YKWMkHMYTavHyxBkqqjx8mjJ4wXKpVemAE9AZtkM13cRki1dxqKirsR6feUTF2XtgDxh6G1UhTNSmjgaM",
  "key14": "3MwHpb88UcurQ4qGy23UYadfYuLEb99RpD2QZTviL7xMu3EBB9EbieJfgykWiVmJBvdVbk7CcAJcw4MSs15dS6xQ",
  "key15": "K6m7At99ShypvcPubrbu8tBDetPdk1ohoTfJaRjzPrkWVSQxZDfq85FKzhAgxzix972GzjfD5m1DBAtuNCodqje",
  "key16": "3E7zZspuXc5JcojdKaMZAB2uFMxFvw4gAUWNr4AvwUgb1t6digaMe64uTrFJbsoMEoLFfgWPLv2GtikfW9oNLD24",
  "key17": "PCUyxhXQ8Q9WEmJD9iD2CxYACWVgcFiP5JAUVxuC29LbA9VwKg1dDzMnSLTGy2sr8PKNMRjqfrgnzdnHmkB1Ja1",
  "key18": "4Coms6vopA8kJbGun4jbrpXPnu65FtKC1Kf5kPziUndsR8czE9SZrTRgrdNmWkuY7R2aJ15qiutLV4nVQ4abHUXm",
  "key19": "zrE5XLt2zeJn9rBrVVvDXskjS5hKGv6PeCwGpZg8tgRWf6hzk5P6zqFVHz8K68GEVCHNFD9MhbWtuarZFFQCLUV",
  "key20": "5mpbFX9ZP9fQK1x1hE32Ee2QhFqu22FV9qsATTsFtBN8w5XFnEJHMGTGmMoLsBFLmMeCCMhunNE31PskyM6FXvHf",
  "key21": "5VbMutnfoujtb8H1hDarrh8Mt9BQxQcyhoTYVmeeFFKB26WcqyA87Nwdn4siPbKiNHuxXVzoH3J6X8WMVb3SBTWC",
  "key22": "frPaNp6JXpQBKqgzUmfjPzcFAirhrmep8NdCi7tqwiwok8bae6vxqpkMcKdWgtRdic42MWdUkNNduFAtiMgtQSo",
  "key23": "32v3mzxExZJsFWwFzn1ituLMRwpjG3PEAcKwKcyKWnx3H4WcdMwumMpxQrtsAyyhsjvgzKk148u8YYRPuJoQT3NC",
  "key24": "QNP7JZvoj1vaf3e7APpKi9vcyEdUgm5BiK1SSw5SnZV9MkTQUqyoPeigHQ5PE8pkwF16oMmPQbhtvBynNsnsCkt",
  "key25": "2fjqcifPzR1jQFxon2fzqg48oB2h6Kn2gK7yLCTP34UKsTdqG7y1amngLcB94u9mksmLYhPM9bSD3i4nAhTgynov",
  "key26": "4J2bhjQaBzhkrDmTDDHKpi5K5rAeKqoFe4YaPMotcE1tmZVpqxo9U4MNDfJjmGonJKkbtZZDVVo265jf1sA2oZnH",
  "key27": "2MNXrqyCMQRzMx9dThveub8MHEceCRammcCachb7jXbACdbq3eVyr2nUiRTKx6yXhxY4DhUrJNGK2ruNPBpkpofr",
  "key28": "3fXFyQ4rNkY4kNEfdJzPGrwg2AHmqK3bjG56PtA4nK8uRBzNaBn1Fxn96713PA4Tm3Qf1dQmq4wceHEKGitkZJRi",
  "key29": "4AwgHfNHLJT18gPbg3V2wE395SwunLDHWE84nEhXbCZC4bZ2NrW6LnUiESEEz5zHkT4QXQpZPaUR4ggU1cCwfwwv",
  "key30": "4SqXfheaPD7Pj8cMJibKJuPZSbM76dKRgdetL9qSzSfhaxSCpcUsRk8PL84jRYWfNBdxiTM6z8QH3mAVxXRFpdch",
  "key31": "5b7k3DnRaoGAC3CvQHshmMyoWv1eCc5cAp61GMRCbMn4CrRpkvMxi9Mf5GnjtJyagUNXKBZoVPd4fpCdaABrfSUx",
  "key32": "4m4G4w6Vo2YXm8unc1d3fECYso6XLcU5NNayESKVHjNqiKrGMLYDsAKRhF3ecEber93a7LwiDYh9cqvc7AJH5hgt",
  "key33": "2iY458Vv6k6EwgBp6x4oXF6tYa1Y8b5UtUKjUXeMFNVc7dDhP2kayCiyCrniLCgReW2hPGeazNqVbZBQvHMJwVPA",
  "key34": "5AdfXsnantE7nVS4qd4V88gYMkJFmddzKejTDXVdapVkEVhHeke4SHuACfTNFVdZjdrcCv9FGkMJ7RgACCzFarrL",
  "key35": "3vQmQLYarLYGDhgxVsFqjTAy8b89N1va6if4VF8BMgsAN6DRWBCMcB2vzksymktLTq5ZzTnvq3SGYWj2JpcvZQoZ",
  "key36": "2B81ouJAdrSvp2tZAjitTTbn5BZy6MnwYdyhJphnv9NPoazPRPcXKWdkw3eva3c5dzG6gV8YkQNhQNBSkyyyhgTy",
  "key37": "2ewRBzViMhqHGsaQ2FZrAFESR9kDaQe8VjMXsYK5m9gJ3UUFeWa9vZ61bwipg5diQJXhq7jXSNELVSZ8jFzTbJe",
  "key38": "42PGWBnoX1BAyRW6wqvEH9gn4mYPmTWtj8ZzTWpCFECksbpvGJLx7vdfDDBJqyfsWDoJ4hCJrMGUQR2jko7rTMFm",
  "key39": "2icWfoFqgDrTMjV1q4L4MZWgAbPuhejjnnbbiSdFUeL8zRdX79Q7xC1KKWgMRbfoYafNHPScaBMMWec6EXFeX8Jq",
  "key40": "5J9DEgsctr6EY5ApdVeyYQqpNFG6yP18fr9j6BbmAPoZVSYZBvgLpUWVkw97ZkGcaXZKbgnVzytSup27fNSEHSyA",
  "key41": "4ekgWhDTJEBtG199qd2p7FnQSPbzmCwjDBXVWrj9wurvEij77ehTjNhUuvftdMVymXFHAPTNmUWmcCzjs8oUW6ds",
  "key42": "4uMbCnsr8hHPby9YUQ5AG3msqtWBs5fKcUDHvSqG9B4B2VWauf3R24nqkrQybmDwbHiFn6kQcSw2uYXEceJJAmzQ",
  "key43": "4b4bthW8qrCWMtRcj2YLWc4jKFA9pXEwffAJwSHg9zjVpc28Q88TVSekJuCGEqZWDB4VyV3kYwFoAEfamup7oNcL"
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
