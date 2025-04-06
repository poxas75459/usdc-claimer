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
    "2YH7oPbVUP4A6eMpGnnhQZMJ4a7LN1fn4SZVBzQLjsPgTwQEbvD7nYJndHVTmDMTmj4bG7ZfsWsmF3oPaCmSYb7x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RGSeLo3qXdCytC9VKrPNpzTrtWqVdihwmCtaWYwiKpmRekAfFWdhEgwybTAGBikpgETRpGEvZZA9tNNaFxkdSJL",
  "key1": "2AhjWLeAt5usXPwSp3nSDroUMMDJyr4JtqSgc52w7tEnHF3omKrqSFzQxnH9PVYK1ag8r5gnY5hRfWUgJD77JAhG",
  "key2": "2WrFEw6zboXFGBQszUPgew3raPcx7iP3DiAa4VcJcCvqvHnagHQ5tPvmSNpaHDJ1BTwY3J48cetct7GWEj2btBrk",
  "key3": "4NTiVUmhocJv5evrPJmjMUwdmVKW3AoMZ8C2Ptw9Tm7jyrqSQpJURqnXBoUvWLJWpqNNTc1PqgshyZn4Z9iiW2x3",
  "key4": "3tCPbzBGCvyQ8aqzA4wS7Rbp9qhFNukEhFk4Adq9G35ZpF63hrBSVaSvzsH5kqSixqh4EmAA5okg3QBgT4wu9wa2",
  "key5": "2ZGsvPteKPEfVDF2TN8bpcfXGnuEy2eeMim5cJzarFYLUohxEM8JHGDhsfKHjCnEeSnFjDa3iGG1sjiCMGBSnseX",
  "key6": "JqXMmcEao6HaQUvptGrjcNeDSVr5tvVnNStu8RBnsQS2d3tRkuWLYsjbCRtFXg3DkqyvRdMeMwZaKL49e7FGjZP",
  "key7": "3B5KiZGdcmjzFR1GHcYb8zQSoandcHDmRC4pA3nNfW8q3npcg5be4FKE6KwEDJUfh1fbVyHeLHns6UzLB1xAqc4q",
  "key8": "3yLNHqTpuQjqW2JmAticfFXFkPLMVmVs45RG9Er5XZ4MhMaWuFUWwi4ZfY8Zg6hnAoEd5FE1QSsxEfdsDb8QrmyH",
  "key9": "5TtiPkAG5dbykM9WzmXjz36LnAV6bWKBjKQyb4wHKauE5m9M9cqnXRXL9mEWWEWhud3iS4EEFLPssmnUQNU6zGiw",
  "key10": "3xHzEYnXw9NKwGoSbyJbv8ehFUcPL5idHud2CjdxXwm9tK2pnWrQYUcSppMcBWhni25R8MCojftdP6CNjhMbYTzw",
  "key11": "LmJZNWGJT6KX1j9oj4CtosQmwTi82Z7g7o1SFVhgr1YSrRuW7MWo26chG7tp8wHPmy1yLA5rqDJSh3LH9mSc1iX",
  "key12": "GNbNJ5NqRzjQgcBvtcP8Cce9aXWSVyqAmTqLJB3eSpnMD4TLjXNDNiCcSiTacTofjz2T1Lfs7Ctfu5zVTmePTyQ",
  "key13": "648v2MSon5LNo6cnzEkS7r66w8KstJSNyRzbwRBa2zQBsxmSScDZ5qwPv3UNGryenVYUfaZdqLcyPWc5riuw4xYq",
  "key14": "5euPmqih2UY7Ptx4KTTNWobYczBMmCPMcY9SZ16fmU91y4stmdjpPBqUiGHyLq2XXRzErEUctHLMmfswTunkeKFu",
  "key15": "D1UnEFTu8742PtKrjPF52Uipmnz39qXMJvWPSpd2VUgBTc3KcAft84h75fL5Q1qXSgc5vLU18Si6eoMN76Va6dt",
  "key16": "2fVbDMv8FUPR4rduCEGFVprLmZP7yrKesjudwoN5jN6tzBUP6XJQmYSvX8t67KxMGXxCC9ZPi7C8BSCHL2jgwK7P",
  "key17": "66QczxmAZc972f4ZkogQ4ZCDFPmAXsyZUinkw31ubNpEnQMi2jLLgNi1YrGNVgeSEhw9TVq4rmqUKD3NzyExoBNd",
  "key18": "QFvHUttimSXB19fBD69Ss47femqemPAZvR7xtaKc9dF7PvJvC5rN7LBbXCg4UDGrVPtvzd3CHZpRHCFTwF6mMjY",
  "key19": "4sk6vD4sBHhkaLMzhgFuoCaGVTmbTxyBTuLSp99shq2hZDBKg8XFV5bpfE5AUGcK73k8FSfW9kNq6DTcFr3Q3dzN",
  "key20": "3DaR9kEfrLHu4fmZL6m91xvNpZDfDEw54VLAK39sKGXw8mPomK9DiXsXgYqixwho8s8hSBV8ysfs6QguRNN9SuQz",
  "key21": "2uckBNePf56c9vAsX2B5qGsfAf57KauaBLhHujKmQfndDFRSvubrTJiNRMojJswaUQeav1bEFTgCoWmpXBuTy217",
  "key22": "3pS7PpPtUE1JJ9wpDwcMDNmnjYogyWttb3PozqzfsfrBRiz2b6SXWeUdfcwJdretxBomut4sjj3jKLFxzASWm41G",
  "key23": "37jCEDgjgrAscJSHJ3NqWgfGMRXK4NQ7sDEpBpv1KRirpLvwoQtSDs45mfj8ZAok6mdFbta5PaBVtMcgCcjjprjK",
  "key24": "36D2S6829jbUHTfGZsdLZMtfHfbCXDhMUmzEdyRa2pRFfwpT5v5R9XFmzypJe5L63QwPfNtrALaCdMJErthtrwgB",
  "key25": "U8RiQ9sxr2VoyvbGHaiHa9oiSxG3DiZqJBtKKxmbtRBHjR9wUBxe2fbJMa7vf1JJsNVmtn3Pmbs1pms9expLFJ9",
  "key26": "4TebZ8ErtVkPnyCEta18XraUUhP3pRGcLmJSt143Lifb2ENr6RGDCzi5fogiz8pzVieddZDq45xyLaw2AGoCBCTR",
  "key27": "5eUuKFQcvg7ej1bnrfgUuBvVVzB58Kwq3pLti1vbheibLBrQSDtsSUvcc685GoYHZ52m6KS5ifgHvH2Mt1fQgUoi",
  "key28": "5snnFbJY2c6vHEu2dic5GLfheKqCZT9UrvwyjUFa2af6Qkxzq92XriEcdx8nrDDCeR92jXPYEhaBGPePnTbvnv5C",
  "key29": "57bvwmw1X8Mr224bWcYpRNmFLWhBrTDFbWaYfiy3UULGtMFLvxu7vfpaa61mM77BL6w9iAHaC5YhJn9zJKA6twWr"
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
