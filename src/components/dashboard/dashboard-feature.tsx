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
    "47t8sPHLyf9s9e7yaA7tfvd338NFGSCVER4Xyi19goA93PHDoJRy9zr18HrHrBUULtTwQcFbw3cFXrnQmsLjAKoV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29XM7iqFr9B353sV8HTnZNS42oJwadapP45wVQSuXsyiUeGQfzdPbbgrnWT9WUXhxHiuF71L5g4eoeTvNSWjV1da",
  "key1": "5Sx2uKMW2n5yErXEWzeSjzTLccf5fCei3eUTL4ztpwTMhR95GDXXGVjXTRrkBW9b9yeovcW37Cw9teyAHJiyjSj1",
  "key2": "4FQW3t5Nn1JHrHmTFWWj4dab5kqFkNU61jGmTyiXqdtFVdfKk145FD7ETp6wgLdmLKcjj1Yjp2kkEw3oAbqVsRhP",
  "key3": "3Fa8BWEVJcUNPPn3jiuHxf24vfMkYgAUPmj6gaVmmPyQaFc6t7FrEXuDxgqcCfxDwFYQYDPK7Uj3azAVmg8Z2EMK",
  "key4": "3AmmRzkPzyVeegqrHv4yRxrePaMRTpcqJXJorgpAndNjvY5hwCU49pkAh2nGZ9sbr38kn81bmmg5zuJHX3aZQv9a",
  "key5": "otmz2NUDpu9nj8y4Yqb8xxtuMmZbg1iNNpERsoRkBVcof5wWt55muTYEP7XnkaMxPYyoc6ugQPFHVL9Nd282oME",
  "key6": "4XXwyShT3qLXKdtjRuJFJEBm4X4auHknkVKooEnw3Xm83TEGGeg2gBpQEMpcHeqomDPFaqtzJhyxAxYtDnTkfGPE",
  "key7": "4AWxVB7Hf8HujKVazjgJiUELk5wfUVrWY3UPnUAvEX3hG1B9HcLPqicUPeN3wMwKAN45T7VSizm1b8r1oCRVTaFW",
  "key8": "3jsqe3AoUPiPbURoXxh8D9SrAavow74vPqpmemHAaaVktpy1JspWLw6jjUHmhAw2fAj6sT34sTnN7eXLqkU7RZxH",
  "key9": "Puq4yKwcZNBSQTiiLdypLK1kLuJ7pkjiMHrMDeMvFzyFPxZPGYxeCwrRNCSKVSSyFHNmNW33ufbu2pGZDPHq3jR",
  "key10": "3DQ3Qv1EJMmu5u9WHvVCXe99KL2oUyN8eB8Ex8i4yjzrNtpv6fkDrNCnyESnHtBSEfBGpKamc4VEyod2bSi74f9R",
  "key11": "VhRU7VRF3WLFuTVTCHWM36759HXRiQM6GGHFs2XCGppbUUT6WjdfQJ4gZLz7dZaMT9WeUd2SgGKxgbaeVBVK3Zo",
  "key12": "2EE8HTDJfRb9ZQSzxEV6dJeYF777gg7aKzYa55QGYL7JZyZuKGrBZT3ToPwLkok6mRLHEXELYKyfT4gqRzvK9Cfi",
  "key13": "mmSxixTWBKcQxruqBzpmnoJVVwqTwUUcHwJMnNETe9SvQFK4QofGKhzyCuKW56zMknQVVXnseM8HHVayMKLoyGy",
  "key14": "2rHeGQcCLz8X8qbSJCKAfeE9VHDoWwQ3VmxdEZTBELjd6pSySkuRDCt75VECNEPHfTAJfy2GQkF7BdMGxik8NCjS",
  "key15": "3Lqkob31xH2FTFeS6nT7XQj91yDPg6EEEspnC9ZSRfixBhDSmofxB9G1aJUYQTkzt2gUnsn83K8K83QCuKQe7hLT",
  "key16": "4fCMGGsz3gk1hWpRdp2xVnMPtJGDCqx3Eqq5W6FvcKoEpWchZz9QZQzEmGcvwPzj2JU3QwP8GLF1sdmaXv8LYoLL",
  "key17": "4SqmTvdbvUt3fpn8wYWz16cSdQjoKhX2snU3zpGKDLKxsEdVvw99yXNzg4CrKjmJfg1jLVEfVttrv9pmSQ8inEgw",
  "key18": "5mfCESFtnFkgyXSbfbAAim16x5XeFnM57nYXdUD9EBAQusVdrYEmhqGAPP5np3i6hcxBx2MCyBaUrhNTLzftrLS",
  "key19": "4iqJnMYBBStsTf4Jie7s634jhJeRJVwU7HanJGr6VdBTF1GEFkohHJYuKuAvg7iZMKZDuu6Q4AyzqwdMcJH9KYQA",
  "key20": "PDTS2GCrgVXiuxYem81g7PvMzcjxCNLGmbRNkJCZqBGHYNXxKb5ZuLEewj2BUZYsnKXkSvZt72geKXSMhoUKKjY",
  "key21": "NzdMmiSKQDnAztNHcizkmb82zRSm7Uz7qxz4phGvxXWFFJ3oWZWLTdt6wHsE8EkJMG3Ti4KcS17NXzXZuitKcaG",
  "key22": "5B3ZbTUwePRKVRx1xjAgn1fLMD6tqEDQehJ6LDw9sdgCaCVzP3mQ1qX5VVoSgYRaSos2xg4u6LekgXPdzXJmQFne",
  "key23": "4uGVkwJrjRLgfQ8vuL5HzaLPbPzD1djcmhNAAp9nq5DxrytDaNckracrZNQ6uXbyjS6raktGnUgu7achtbzzfTWp",
  "key24": "3QdbfxNjhkTFiXHwoGKerAv6NpCEaHo4LNiQBw7KBznrFhs7Lab9KryEoRTxHJpG4gMkT7YmBn9BScuNSfLZ25i4",
  "key25": "478JKm8e2PF19FCPkkkiTeZKEAEGQXpfAG428BeDxs6zD4NCw8MyyapvZb7Dp7dQkP58D5aqzT9uXJQthNb6uEBr",
  "key26": "26UGUqjvN9UsipsLPrf6CwGGpzzt2MMjWaThN3Uo3cHGDZceSzhwmN2nbpEnCP1hVYv4ygDSD6GcwpGcTRBSnyNp",
  "key27": "2THBnDi4CpdsSGDjBpgseoCgCefqCG4JNWMmysW9A6tfEtQTEnFCHvyqxQUDej72m4P2vT8jqjnkpv7SmoVMBbxC",
  "key28": "3mW9ntjYDLTgVgPKRw6Qj93vkQUDrQXRGhHJU5rJQLMDtSLFicDJ7nhwNnqsw7YeDY9GcNBkta25eJ6wo6m5uzSZ",
  "key29": "8T6g6ogr5nAoHwzJ2Eog4VKLKUrQXECcuunwp7h8dxxoekPAtfNtmymgS5yCDKiTr3r6GokQR5mn88uyPXdbcep",
  "key30": "4bX7GrdgvndDU2QqD3d7iSDeVeiFLrkGETYn5xG346qPUr5WotdSDbu9weSAkC6u35tuRSGN5pjzGmHXLfmMey1C",
  "key31": "G7oGdJrtwDmH1kw65g3tZ1U23eD2axLWBoH872zCh8g7tqhaXMcjYnh28gHeprin5weHhaer4xo5zNQnkoJhmFV",
  "key32": "57Ph4aLwEPiGiywYGWUptM5JSQckLfSRfFZQUMkkmVa4YVk5RkSv9MctaqMtPMCuKd26zxuQwRByNMWgbPG22D54",
  "key33": "HCJ5RZcTnKYzLtu8MJbkKFKYzmd76BND1G8ZbuTuMC9vC2fdSMrCsymedJGL252UK7f4ybPY4gDWoNqReXkU2pd",
  "key34": "8GA5TSPM1GoaNosNNmrJCZsfvTV6kBguAp2GGEiYRti969VvVRPN8n9ifYbvtdTTr7qRPJxfWk7Y7njgm8vaX4G",
  "key35": "4geiDGAzdSQReLMF7AbVu8i7av6mktbzA6VbWdYdryud56EPBLyxMByPzik4kGFnLhejnyKW69WCTnSyRMzbY6SY",
  "key36": "2BDj2CetqcnCL82yYi5grSVM9NRwCPS2iZQw8Q9yqGNH3hbWdhKBsRXbCTrPiuQnE2qAzSi3THqymRs98ZHsVhBH",
  "key37": "5wSUUYjBfxeqj3uppuVdhv1J68m8kt1kpFDMjQS8yS1EnKvYCr7kLmNBDqUMVa9P6ANAwyqvbLUWrGfkMFLnEk9C",
  "key38": "2vkwc19vY9YePB3G98fL2s2xz8Cj4ig8uQ4hUXdUZCxtxAhiANEc2anEgsUv5GgDiVDJWn1EwEJJJXLmHTRhB3qi",
  "key39": "53jPcc4qjdqAczAWTrUAracUzxh1Q78qNCkNSBapLT4vj5Gsg6z2fXuaCpQVzrEyrY9nb93ELNUfXcXqYgZxjVfN",
  "key40": "3sEnfaa9EPs9gVBDMhX94NfdzK1mbhMeRmRkN6BbojPMf5cdHR99UzjQ8yRsSD3NLYhsAnqpgxb2EFFMRamfAa5T",
  "key41": "so31eSRUYjuF1vZFxvFiSTdhkPvh6Lq7Bv8q4hZ7YFztDssWE8ffQSSjA1BHXj1AHWG35o6SYojAHHDEEfRTsvM",
  "key42": "zL7f1uDnhy52bbYctS2kZDrp6TDH8WBqGpGzXjRyLCfHvJzFysSzJMMb89ABwsCwarRBaHbbyKPVRf6V2ox7bTy",
  "key43": "34e4snkwbFJoKSkgXnJDUCoXvvtVAtZPSEPeY9U8aLB9xZqpZrTAKirFMn4XvcJ64SQg9TAj2241wwWpq9R6KEN2"
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
