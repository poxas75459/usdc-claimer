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
    "Vhxrjnw5sPbJs85LqpWhegfMtm626gV1Si2BAHF2oEdmFvS747oxEPXCmaSWnSihR1YVMgzwW63KYAamH3umnsP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kQpZN4UEMGaiBqufGyhvXUuVZTFwWmXw895As5AMDFup56gyfk4zhs3pjr1RiH1MiLaRork2936RPr7YteYWJRF",
  "key1": "5699v8ZWoxpSfPdKngnd1G9Z8Hh8SLXtMQtuj1cHyMCoKyR192ys6qC1H9DFEWLkWhpGqTAKAGzGHNQkSBsyMJT5",
  "key2": "3PAigVmPPn1Lb9z7gxZcYsL1cAZWWEGDtGubSpCcVHtyYqScJfzS2nZ2BCbBYmnvfXu5VVwcYKw2gSL1B4Q68LtV",
  "key3": "21VH5PijyV9EbQgXoTUAxuBPE7729gi6msAyDRDcvvJMPnrNQX2jyLyyyqAigVLja2KNGwGdU9FUXsKrhnVxdynM",
  "key4": "4i7YckUqUwK9zDEDsMLKHrbfe4w62oYdGCuzQQuR5eH7aMWk3S46RrMZH5pviPVkquxCeane9xda6X3UqWD6QSDd",
  "key5": "2as4tGi3xH4E2mkSqsb8ScEZFBhLoPYcaa8bqqJyaBiZcJEvmyn51SZErk7S2kEWL2g8CbFoqoh51TbUnzhHgNd7",
  "key6": "5TAdSxRBojmjbtrJp33NTpTWZ7zwPoDFpEqgVFcafyo1a9KhG3qQmfuohJSHKy6ARr97GDyTp7h3zdt7KH7oDa9C",
  "key7": "4TDp241BA22WETBcHqrU5QKUBjLsjEzA8uwPoFnNUAbK99XGiA5eckmp4bPYBP2oudJsaBqsxmQoi1CwaexWi7Tv",
  "key8": "5a1CYaayY1Z2bLNTTPhXKuCwPYcyNcc6SG6PekivZncbjQkVEa2wYVbrwabgfoRF5fAnvo1GgvUm5xTdoZChdaLR",
  "key9": "3oHPDetxQYBowCtGTezgGEiTeiNeY1WqYayxaesU81HkbC9dKMiRjsbKEnkSdhEq83nU3yF2saJQcukWS63ujbr4",
  "key10": "4VQarNhqQqHjehEUK6Gd4mKpgdbUYR9LziYftSJv6GiievrLZbkg5n9Bn263DScnSjvDFjGNAGxPp6xatXrghfWu",
  "key11": "5E1VgVFXmze8Kx6UXj4dXTBefLRwBYcMmzzz9m2Gjvs3EpwsraCugsmTYW7KXAX1zk8Ngh8Rpgn3sg2y1Duq7B4Z",
  "key12": "5F2yT1uJG6apxJp7sp9bi7QHd8b64joFKkkPeQEUP6616XRWqpUa9oYUEv95cpwoPDVw3B7coBUgnPsbihZda2QU",
  "key13": "4ogQaBWXrHWD8ER1Xk7Ks9UEj4rbkhx5UnQdgFDy7FSyiHmNYZPe1Vzx4WiNWuNJri4FE8eTDMehQyTRPBHy9jth",
  "key14": "3oeDV91nCiuYsSHiza5P884crTBcbSrUo26MC8wPV3FLT6dkfASrjp9dx2goEcFYNM4ZJ9RXhCVEUzciTr75iqU4",
  "key15": "3YT3yxAcsXtzZPhxdw2Ri1zpQ6ZDNmyjSGHB4WE39JAte8CnUzHNMhnWH692w7MzvvVK86q14k8cZv7o4JByvGY5",
  "key16": "48HZFzkPYs11Gyr8oGYXLBrXcFK9Ghmmqn51oXLTSQGv2LyUQcp5SK9iQGWwQsNMVsRBBiUT8b65VDG1Wx5WATqc",
  "key17": "3aS5mbpSEAMLC9AoTjiXiHR5Dejqy3N3yY8fboMBEt12NW17unfA3pvXBC4KngrPfwjXVLTs4Pt6QBgrJp63Vmuj",
  "key18": "5b1MgpomkXKs5qnY4ppn3qMuyExkjYs6kEq4qWXiD82qF74vdNSrz6vFnUWva6eBngjaWrg4GBGLxaLVSG9AHyDZ",
  "key19": "NYSoaY37ChAiRzQaagJ87fXPZttFWCW6d9VT9db5tzjanDywU8mMGCbdo9S4AUdfqxB9uQtedLYLqrHLgCwoiTV",
  "key20": "neCxfKH4XA7bCdgT4QXoHnPh4kPsbgyXbLLYueVGRUXq2WesxMbA2qC2qQ3mAdQR5Hy9RcP6sYVeKzC3Tp1pSxM",
  "key21": "24QzjHS4ojXc8sxrR7mgbTbKeiC5Hiu775PBB9iaX3QxJX2ybu7CyKXBJM4Nw8mU1p5RjJVGFRaF2JzGRVPTwDkC",
  "key22": "4ajpTKgvUHvJ3uFF7AxHFaqtuyLBHsx6acinrgiEqGnzjihFq5syU8rUEMhHSQcUaWAJig2F6gmdoqyyZi5PL6LC",
  "key23": "59gov4xps6W8y7BWCghgUW8ZPsji3GYjCe9ZLtPXH2JTgMcbcb8cPYCKMAkWi9fdfQs1JojeG21vtYt4EM7BRybd",
  "key24": "4VZKXdWEqxnto9JCyivYo1pnh3xyC1KyDJDgDcwxK3uJPqdh7DnsUPGRzjiUGieiQZTtCka93BeGJW8RS2JXkeGU",
  "key25": "3oPnA7oyhbnNDp1mRR2uuGGZwtfmjahep3qZpWnYv5t94FYhwRPgFLM4rEikLiSEn6nAt7tccuP8js3rGjv21PLU",
  "key26": "soMCs1gTdZdTwJjmvYKAYLBAETPkMWbGA1gzm1xEhtQFzTmFw59LokXx1jNh1FrVrLpr18MdaprvE488T9w2qrS",
  "key27": "4HVX9UJKYw4GjU54R45fVoT6GZTPxFmBEearhdiZw9rE4VQJ7LckjsyRBDFjrNj79hnt3eu8DiEsLwoR8E7iYTUm",
  "key28": "5mUvHMYmyLTTV3X39oXy6Ubac1tQzKXTdUBhWFpi8fCJyPNanF9cPT2bsr8ohRQidtpmTALmTsm42G9L7weG7eF1",
  "key29": "3DqMGyTRG7kq8xtUs5Bh7GrUxf6BAJ39QcVd1Vc587GDFX7f9Fcgmy9XRBtcXiUh35XUeuENcqhw9XCkfzv1g1K2",
  "key30": "2WQhBFPZJtVsJqbkC861t5FjUqPyrQbrdR45yrCCsBQcd7cHVVELA3dBMEAEwbJ9WHuzujp4XyZM11QmCgg3EcN",
  "key31": "3qVTQTsqMbYE8qWaihx5hpzC58g9NR8zhgdQSXmbNoNnKJ2BMqa5rULrY9qtnjwNtSC4uJtFQHuk324HQRQuWPGB",
  "key32": "4JQmrLRn6SwxGjRJebgpqGsiQTFidt5HyXQEtvLUvHbSMobbXtatm6Sg5qwzAHDVJTGRegNDt9QArkmnd4g9qpRB",
  "key33": "5VkhZoUxmBeb99i5qXEyNXFjYeuBWx2KXnN6LbtMVsAtDRfG6SJ93HXsfq6kc92kXnHcELD6ug4qiPjzNtvU3g7Q",
  "key34": "5jL9FXphkefiDDJmGeAN6mSxFH4cwT9RatWabtM6TaAKUtWYjbbPLpVncT5pZVc5WzurWNhkGdS6KQE3RByRddQo",
  "key35": "2AP85qg34currnvxPTdev5hAsnPbTJ8bhdHrPnCmLSCErHHY7J7QHX7MRNqdmCBX2dnTbWkZPRUmsHruT5q7bRoU",
  "key36": "5rXkuHezN9um5CXsmp6rfnoucxbzGVsgNQtZCbWmdbeqAQHu9ooWyj9tL7ckeBhM9NUrm11AuSBXCmuxWsYxnANe",
  "key37": "3Cfb1YcWs6fQDTavUduCQpMcgNfLZXoL6Gfj6ydcV1NNBBeEp9QWhzEbTtFGJdDeQXVQAgGxrhUHLX8R1iicRw2t",
  "key38": "WG5nT7XxVVExRSojr1uTKjXFztnsoxai7bgDWYCrMKarkDqxEfmzJr5ikJMsBmZ5jzPAEp4Mf1kNZazQT1Z6ETX",
  "key39": "2rufptLd6Lef6fwZ3WMGBowEwncx4wWwFRdz1LYojDx62cgPZ1f6HsaUGPLWK82xawFdZqaVh67hygCnb5rD7sgT",
  "key40": "5Azwi5Pa5vj3gxGCArj7Zb49SQVks3SYhXJqCL1f19qMid46rXJCABh9oyEbqkjXevs4mHe16dFb2HtbC4iNRhAc",
  "key41": "x2sgVzPKPRpDRRNpmQzsRKG1g5sZCEsoZpHrtRnqEmgfSKVNzUa6qerhwJMz38S9ioLnBQgWAR4sz2Z8PJUAWvK",
  "key42": "5R6yZpyXw1fgxFvoxMd3ab7PwCph6K3fyNDrxQN1hgXKSMr6TXCAR5dSTZPHhxqdj8dN3xzvU2B6Rd7QCsJrfZNk",
  "key43": "636Qz8KQrzrmGHLdgHC1MqTwXaWeEcLWf7tLAKo73LYiidErXRe6Ak7cn6djKG8Hu5PJvqe53WAXUMzC8uFzChPD",
  "key44": "2ReZwrqGimWUB182WJTLZSTbr2tTXx8hVs6RZDUY4qnH46Y2bu6Y3UvNvZrUuhrTVgHKamPcvkLxjqyVo3SWoewp",
  "key45": "3JveChLXEprvuo1NQgHoLJ2eACbqCHo2fk59oVvGTf2tnvGEEqPvUTsercH4a7frGYpH2QpBwdnALdhQYJj3YY9b",
  "key46": "3ukYpjqAKkVNJtqKZE2CvBEHnQCaqNrfaRcLE4Kd2PbPd8rwndjiy8R1C5Ypb6yXtVzq6a8AH9TJSAve81LwzqAX",
  "key47": "CkxcJQ4Ue2syXJmMHSsDuH3DpapuDGSuNfiPXPw1wXvWBTCy6LJfgEFdBzcPKBZ4j2dUg2VnssrsedWnJLJdYYv"
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
