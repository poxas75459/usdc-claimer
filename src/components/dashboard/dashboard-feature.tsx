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
    "4UAJVkvdNXwriL3vvr9sxPvo6qXiGmDTEaBkg1XnwADnrq1FDJReyhFPHu3JtVwVPowNjGfTK9FzwsLpzghG3eXm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hgXWnzUS4GEbbhaeCwVTdqTcuoEMf5QbDs2tVm68XK3hSoKxzaRM6BkmFDkRtQCG19DjH3ZkGTv9eFRHZcTNbxr",
  "key1": "4H4AHYThTjqJTEBnWWhxEMkCs695YDQTdB7j8hwMSMsRkJQ6NucBeZTwpFWNWXzu317VVjm2smewT1DZCjZ6Y3FA",
  "key2": "24pUBb8ZTriwkHx2d1wtVpESP9quWLpbPWNrHEJfMymHN8W68UeqMs2fjKEqyfgvbgf5RsPAN6pQhTvRxAqCj1uJ",
  "key3": "33fPwwWaasFiyAAs7JKTomyDJamEinMSF3e2xHK5662hYBBqjBYpTnmrXAZcoVhU2g1kvpmqGKuRHyiZ4sotcmGF",
  "key4": "3rr7QHYzNoubroPVqP6e38FK8DYCV7rTnX9fKu433v7rVFjPEsmHddKGinEg8BeQRnCstJzLHnZ3XCK4LjUP2VDY",
  "key5": "4r9DCwNAMXWRJviPVeNMtcvSQigrB9mTSRQAFwxPRmTuFfPG3L3o34Ja6siutQswHDAfcV9C8Q8ux1AA4ujLmAgx",
  "key6": "BGvhcmuwyi6KxRgT7hSr4zomWGiKteP1kUSMHGUprapZN672pkU8yWPZJjkq5Ft6R1RZh5tZ52fhTpG8JEq5dNE",
  "key7": "b342GRMhwMiNVzVimPiFbTLf5iEyfFc49cJqVcFhtQkBUayHXMWq2FCyrZkn3rsqLgxTkWxWJLhMh2cPRoQ2xB8",
  "key8": "5VroYig11EbogQLsbcrfPuaGsHstteQ2RA3tVaABrUoEyT5NJjweSUpMmuyUjR3uDXDWemtEmPLPKrYhbU78rNNs",
  "key9": "2whukxScYGXNnS6f8kEEmrUWWzuEKM1V4n1cP3ACV7eCd1rZJGTYDXvqXxXHm4zPXhXq6gmjyE8JTh2EY57xW92h",
  "key10": "2czNgfL98JC65x5cxyd8ip8knVYDf3zKeVPS5hHZUgN5aH3osDr1vSCfxaidngrsuyY9T5qELe9GHpdZbERvRF1Y",
  "key11": "2P3uTan3WgyyG5pxLZmCk7EE5vUJ2CydALfy2s1ZSavHirNh2knvooKHNj7eJg2nrmRMGp7wU9YphhK8WUXfFVhw",
  "key12": "3cyJGagdMKKTko56rzGmkcfGbba45HBndDgqRGRFWEWvTGL8gCK6TpnMf19x758HKaEVicLy97RLvF42biVHffCr",
  "key13": "5NrnyJ26c3QBSPUgFQxgAJSd2iUvFcQi5JXEBL4kf4814cPFowTCdTqA3PJQymurg7KPEVEB5sziVatum6ekiitp",
  "key14": "65XnwgbAbmKxRFoyj57z1mxhpXH2c6gWgiKUDfzxDx4Z6jDpFsqjC3RMjPT9AukFVr65h21gzKQS4nV2yEgNLrMa",
  "key15": "3nH9nVcML2686S5u2T455poGyjJAXxUbcAfeo8RYoFYKkYf2c2Fa35Mus1AbN4hqwaBtG1wA67AiCKNENvSwsru6",
  "key16": "R3E36weqp43cVgDBLFqVspJSYF6jWpxBiLaS4nkiSzBCPvB5DnqM5DaEnhsckMoGBJHgqemFENcMP6euXiPiHjP",
  "key17": "4gXwpnEqkh693P6TFztQtGu5JsrKke89nt8Ny4ed1SPyZTJhvvyM6hL8Q75YNSQKhgXXWcueX3xvph3mDNPu2FFC",
  "key18": "3UAJGNkD7Q9FTQi7rGSkfmnzYSj1crMUZtWHD5QAKoMx1qT7mtvvWhTJGxkGNnRXZGnKVR9Qqv7o8znyeiTGbKPM",
  "key19": "5Zi6fkXq5yPMaasrzHZK7D39kBXty5ex2FzJVA3SR2MZrAetibR5sLCQ83kW7X4nquhA4S77y3BAYKFFFFaAfVV6",
  "key20": "3XAHDwhPe5P3njUvMPE5WSbiB3a7VE3WLjFsDspTqnVzYpFKHLPXiGgmFxDHhjZuG1H8BQg8Jq9TYg4VqyJmEezW",
  "key21": "3uEfD7apRnhpUzkkcdJprUSZnZ4823UBXbrCiyPLBFPorv2ipkWZ5wmqKgmR8Hq14zVy3cThVAUTugx13VuqhSJV",
  "key22": "4Y3jEWkFKSRubhSv2PxmLNL9CQLY3PT4YUZZw5H5N73g2oPoUywapo6hg2JLuMo6SpUhKcr1bzNW7oeEhAmfEjQw",
  "key23": "3XWLoBxCDizDUGqx7p3yz2N59FpJMTSQnYQG1zBA2kHewowHPcrcNx1JqGCMYbUpeCk5rhQ2TNPAPwgneEih5FF6",
  "key24": "4DosDqzwPFzDVadMsvM1rvdVCh2H57tS9xc444SumiHj8ubUbvzhzB9DtG6mhEgNd1JZF35u5B36wEa5JUokU1Fb",
  "key25": "pDXo6DkGYRyuXm5CgqP1LPhTgfYSEYSTquFeqGdyfUQwMaYAenKLkYpwDDsqUZCRFMSxQJFgEjRBP4WLeRCuvNA",
  "key26": "4f5DHVkkrDdGczWcNVk4D6mAoV2ZKL7LSZRDkhwpU3aT6s5jTeJuXJW1hSbNugFYgeaX6KToYfyiNT61WxcJoWvq",
  "key27": "3Sspc6KbLcCK4Qgxs6CUgwefe6ethHCb3fpME1CA6RJjbAuzFUGfDqzukqbB5dwpLRYwsBLtMf7dXMVQh1CiWS6m",
  "key28": "XrmQ4Q5JErv1iuGURifZBi2iq7C7h761YWV9acc188KeGknKqHNeYReeMnRzAVc2psvkYye196TDWJtknnWNZdN",
  "key29": "REfK9hJZADdn5V37sWjoo2cWzX5r15TPmm5DbnQTxsHw8WWKaN2JxU6UU2s2q116AZLK3ubJfAJ7XCyAqXftZe3"
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
