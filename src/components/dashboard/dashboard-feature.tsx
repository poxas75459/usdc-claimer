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
    "iWyDGamk6kXphEeCvdcSAEcLRdD4r87XQJ6girx5cvrMG73uPrnacY3hPr2MHiwrudpiNYtTrPwEVDbm4xhPntx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hE4XLz2i5baMV8v1cuXv6mW3ADktL8jksBn9MRwHTsTvRdpe4x5gdCUzATeoNs7kPtCbN7Kq1DM8LEhi1uVAbum",
  "key1": "42EVQHj7y2z57F5j8eYuFWps3dme58nRUbSFkHGfyYChLvjFS848W2JRNT4wnox9G7AXNKtf5PsutExXSnsf3aXx",
  "key2": "4kCdeY2GMYfCotsndV9tXvU19qmtvA5gshYF6dLjQoNRpcTWFWCctYyJP3mrJwy6A1YWJbMQV3GBKBE65fyz6o4W",
  "key3": "5DWezuhh1mAHwPckBQ2tY7QZoUwkvYcyMgbRwm3oaqNABnmmpQCo2goCqX7VqHHrFUDmaq7FB3o1CDTycAbMGJJh",
  "key4": "35o8N7yVaMykpPCmEMfCkPJhs8nPFNFzkM6fiuc6bq6xanRQq8L4e86onfoexV46N69DokTqeeiYVSsD2gSZEtLH",
  "key5": "YgP574FfN2qpcm2gc9kM7H7pFhxtvZeZd6qKBtokzbyH8SoLCxAZ1DfLDauG6qCCn7gFqd3kUXwXvnT9Nojw8xB",
  "key6": "4NU8QYR8bGzn7MnQUn8dJxsEAuGKnU5QUoBFABHV6x5YMKuRA61K5UXBmLD3F3NgJsf9t5zE6Z9qmvA2yBG89JSj",
  "key7": "5iqFCD1Qac1v7y4VSJKsgXTzWzTCv2QbvGEw9KU1mnNqmPxdq5B9PEURjguafMP1XkoSo1QvkTzCWguRLZDj2dGG",
  "key8": "8mswh5RF8eULy1PN7R3HS3Tfg37K93jLzztTCkUeFjsTrUCQs4CTimdfkMtqke4Vebo1EvQEjjnfC5UafLbS7Xa",
  "key9": "5JTGZ3tx5w99LLrr2sFb6jFqJofc6nFo2qs5q3mb81cpd9VFAy65qoXmtYtaDoXjWjNahsJ3yxWKEErqfNjRFutJ",
  "key10": "2qtCE1qhaNbzBNhj6V6E9bV9qJQtopqmsW9kecEcdLf5kAL7uqPWYYdiuKAoCFdqmDUZsFmVag5UUBgb3NLHwBXP",
  "key11": "wsHJMHA6YcaoZodjQ3rmb5XWYDnoFcDwrticyL8UGi7WhtenYfxAfqYVU2Q35soUp6yay642pHtZ3iDJeRVWgEw",
  "key12": "5jhwYN4AUZWkTXZ9xjX4gYKbJdasBtt9iSATsQfvRb28ZvRDsAwAfWp2kMpqwKejKUtqBed7MGaWoeRJuXRm9xLq",
  "key13": "2j8sgcb9gN9QxY4grqyoeEULJMhN8fkHMyBMRa26YvuTA37SdpHXe3658k3xh9tc3LHv1Bp6UHa8uz1gjoWnGEn",
  "key14": "5Z4DadZBQAQ8oFLjjtrjorPgXVP5PGNpxBz5XBHb5fv4twMSHBp1bQpHtV48MdfZCcRjqh2odCavGDQpeK2AWDD5",
  "key15": "5k4naTdCus4NSGbeid72YdFsahVk9Ps4X1ohek5UWhowYg2Jt1CYGD1CWrFw3JAAW6GqDe2Jy6epVX8n52a8vkPP",
  "key16": "33cDdHMR5nAcTb9GoUssX68zMFjS2E4NZFow1Ud6HJtu56aC3oDjPqknG5g6qodexPyeSid9xwdXa5NPSAPzG9HH",
  "key17": "61bPehGnCCHihLpmPU1s9dsALiF9MpA5JL1mvr6SRbsagvGdmKgsmN198jfAv75c2CXsavxAYEyvu85hXH2fMujN",
  "key18": "52H55y7cTXSed362XiYzF9ciNYxiiSRbWPQpYvebK9UjQfZKWstYdsMPXCgUksV2kWFQrsxTNCwSZ2NLpXbR69du",
  "key19": "2RAm9DvW5KkwsErZXcLxuoyHyuWTiGVJFqN3omvUHk1c1faZz5rte1RuNbJxQbaZJCo5e8cHtK2eAvWvXQ3swBVW",
  "key20": "nm1Uh78H1qH4fEHYW3ShkA58unnTPMD8VJtsbjH7bGF9yDLanB5FvtgmaoBbw1RCKhqqAD3K4mPgfruexRtsJn1",
  "key21": "5gUEhb5Uexz9AzXj6oGEtwKTvamqDmLyZTQ98Dms2mDVWHGsxsoEeqN2WeZTkw9b5TbFEdrbCLK8bCxt7nkZ5RUv",
  "key22": "4s8DJJX8mV3AAUdaUMU7rPePMQK7VggV8suEPPiWU5ibT7b25xjFQN6uwgN75SJti5eiBD43K1resLjeNsaNgMZx",
  "key23": "5Q4CF8N8baywLgKWMugoKhUiLaoLFYXsczw51swTLfnDL2yiVPtqjPdsqfvmYdXNDFB5Pi9kovANfd8T3MDdCGHp",
  "key24": "5X8v6GuGf3FMJTrNheN9YW8BhFLUmK3Lek1rxUM47LigGSbyJD2jQCCBDyBAaYMHZ3FZwppCrfgoHpjB6ygpc4hU",
  "key25": "2gsCmkoi8c8M3khF5jPJB5ryjpJA1YUccZ2J4hGFrdu2QoAtjxZL1oEnApixC4Xeq5kQUXi3iANSovxGQ5KHyjX5",
  "key26": "mie8ttTaLjCExSywQ2maT1XVppoXM3pneEwacD1BRPKZLC23Fho9n3z5E8ApqAujdZBVMJArZTC3kkDYMsB6gAV",
  "key27": "4NuuX5z4pPn1JKdN4QpsCxZ425hrzqVBJja8mN9BU18EBw67r5NadEhb3EbW4n66bMK6qKMH2KApQT4AjbABznjk",
  "key28": "2f6HQe3dgEht6jAS7Mezh3ray4zgNjjq3dy22rGhFoNQmDPayTmrfWz61HRJfeJEJPea2bHeyb6PeqNPYGrSei1m",
  "key29": "4PNpnbV4ZveTWt7Z7HRfVG6n8j9Y1bFjAQJLzPsFNUn2Q5Do4tCPmWkThvkvRiAg7yvRj76fDNRD84AaPYX8FDzV",
  "key30": "3XXcnNJgcNscKu3chA7qyK1bcoAbeMPd2staBQAKzYFx3esXAZSvk29KD9puZ3Cckfvsi6KN9CqYTpDzXFXSxcbX",
  "key31": "2RXyeJzmrrhcvyoMpRxBDnvUwkC8G9NuTwTJm2KS87XJu4tGtxR2YDyrUga6PFiJ2FTVrdG4KqJVfwnnLRqxabyg",
  "key32": "YYoYr1J6sJR78dNRp6Dm5xqvJjSEDXfmLumnVEMuAicC2PtPtDPGvpmPMngN1fxqJmdvPxJs9mhetdx2cnV1hgp",
  "key33": "Hjmnc1H5v8nhCpLTxmekaYEPAy4a4TUVj1t2Cq8ChKRL6fdafAzFyLNkMRWfSULv2XNmx2MgHVnJcjmUT6xmgEw",
  "key34": "2Bg5WfNFMZ2E9B5PXTPNkmmnb3znE3sQmXYkneryZzUjbYZ4QusLnb5onF7f5h1sRpUdyaQu1KrAM64nYgCgB8et",
  "key35": "4NSrFDmw9gs4SKWx3QE3bxKZ4Mx4WAzCNKJjMM6UNkFC1t3Whd11jVxtSYuzvyJpP1oDJTFVwH8hX8ToW4yEMkLk",
  "key36": "3huZCNUkY3km4yMt1XAHgXoWhuJEGZHJjKxuui6V6uQ7KyvxCtK13TRbp8MNCfAcn8RcyWr7fx3ExNeskgLU1xad",
  "key37": "5Z6ei4vk18qJjXyFGDjbKKm1M699ha9Pwia211pa35TpFw1MVXZJ1m6GkhkNZKQwvwa5BeTD7LHbMn6t7WRM34K8",
  "key38": "2jPgfUmZ3AqowAng3hcAGXUcfnUZ1R1Qcc8BGgUiEyoGrH1rA8RSEMscy9VkSDBJuLh2BRC4u5wjhWmnUZsFj9e6",
  "key39": "4PS58BpmrpunXS98E5yfBZksRtXEzK6EJb2ky1HDtqUiy31TQ4e5EyNtGBFFDJXQeQPWBRmsL2krHJoeDDriuBeF",
  "key40": "4uJSDsi1t9c33VMHPhcLVFYrSZh1QzAcGZ9q3qt5CsM51DzvCPx5HfNm5kBKCs5ZGCz7GZ5w9BvNgbSYbmhFNexv",
  "key41": "27fkZHwFrJYk9UeoHWqDiSEA9nnSHk2ynNYA7F6GCtdDc6ALrMkRHUNbhNF27tuJXD7AYz52kadXzDsBp23dUuWz",
  "key42": "PHR4oLsD7XV1k8PWwM3kru6yu7HDx2BYjrKueMVjKsQkJZkgdayQLcyhgBWXEhi2vswBkHrVh76u6T1KiDi8SrF",
  "key43": "2by9jPwj3XDN6WyAoAD5ZkrqMFWR7B1iJm9nC8ScJnUdBZVXea9CviVBkQxXKD4bJpk2XaPC8EACMtQ48wNYYTGS",
  "key44": "5eLJfyyMGVLExkncKiHga6BYWzG7HkmDRPmwqMFcugPkUik6YsbypUQf1NRCfY4yMwPMQtpo8hD2EPqmmJNurWNN",
  "key45": "Gg3phh78Puhy6571qBRxa5brwsAQELdmpt3AQ84P5S3wFEAHHXM1x5cFGUY7VfpaqcNAfx6eHuoDchqj9F4z36F"
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
