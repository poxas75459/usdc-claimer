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
    "2twLgjS8ZGfukhWXYPtGAYpS1P8tmufgcwK6M1Ct2gZt2yzuQDMxRfxoS4nvfpJ5GvnmWZBiPMD6RoYPQcSCgc6K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DQjtuoJVE5RpaJLeeqdAjHhrfrRePxv6xkDkbkseEZRjohVvyKJkSzVT5iK4nTCaS8gyASq2Ub3VJDQdcYD561t",
  "key1": "4Adz4wjjvDrWfkg64QmFrQn4CGVZT2FMaN1vcpZtJzof3YWGG8bAE6UYwXYgA3h1DDfFrhexXZx5BMKtowZFcBBB",
  "key2": "2uvg3JF3npq1qHir2NjdJrEy1gZYwQuvAdDUR13up9ePHBjwEK5kQDqxdZJLgG4X18agneypyBV3Eo7hgAKCtNr",
  "key3": "4SvYBCTyc6CBcHxYmCCX1Q6Dm3cXxgjXVmLrcxMeyYcBqdnXiewxAVBjiZsPPpDupGGvRNh2UFaXzexWrndwQw9B",
  "key4": "xY622JN3sxbgexAisptb8RT22uVTPsXRAnHYCALZH42afZrDUwJnYdDgv5bUj5d7aeAhun6Fw2CPuktqV5SJEw2",
  "key5": "2kNJYF5AQLCz6cgbWcjkry85co6hBn65jB4WDMNYNKGh5KaJoEabfJsqRNs6rb1JDeCm9sRudxWvqsAzNYczS8G9",
  "key6": "3zUr3inBoX9cVJpQZjjPPnPLP131G7B7vBn181Q8jfobDr1Pk6GgdQRMBPqF3ENMeySx137shDJXDDf6Y7fmTMDo",
  "key7": "4drzDkiLZNKN5a8xEmeDSqERLAeLtw9pJBTFsCnWVDELayBFNdjLB6p7HhrmaAkMbbBuqeVXYNW8TWRLJBpmokyA",
  "key8": "XtDn6UFKMnWiwizqt3TMSuZPXR4BEGBWU7cyDRMrFnhWHQNE4tTweWRsDUTxf8mrK24uh46Pp2Y95qQmp84TBnm",
  "key9": "4ikXj5HBcAUXD84PWevDrKbhKEF8d17wk1Vh3G6HSMXSzAcu5SSYQE6vKRbfSi5kstrq96hvVHDUb1Rcu59Fv8q5",
  "key10": "5DqFqDZgVkXiDSHLfuiRuuLwrPruktyhegyC5jrPGposGZbEvK1Hw1uVqUgyBzoKDdvsYYRDJnrcivUTYXJA78Yh",
  "key11": "5Gg3VmpK2DJkjg2qC6ZSB1NTrSQp6vyDpqqZnccyRoL2T3JDQCozbcoTBr6f42BmyWnbChpzqhqeDV1aVonkNvmU",
  "key12": "4gb3jAxZ6XFYkB1beqZ9htJGEimgMfgNfPCBsed18myDsHU7GngXMTsW5wgvPW21mUgQ9UKyHuKGkiiFNagv3WrP",
  "key13": "59t452mtw8YUkHPV1DVkmLJKkNva1si4jbL9bLj51heHeS7AkcWkKJybon5qCr1QgqkuGUXP7ztoLt8LDJy3s9yL",
  "key14": "66mhepkj3Et916zmWRHHuTUMkosgN3nrzTWTdPHx4xhdCLcp1MzBLi92vYZAR1rAp6eT5fAhUaD6KnasWJu2RAbU",
  "key15": "3vqzewcz8wU4D1PjVnKziFMRhFKKbnxsFRMa7Z4p9LfKDCFnsqaPojhri4d7hkgAJb5Ph68Vj9UvbdMPiXHmVzY5",
  "key16": "3SQ5Fh5ZJTwi3HsU3bEVR7S93YF7Kj2ttvNQ4KF4ErfhF7G3KaKhmat11spCGWCDAd1hKEe8wYLbcK8P79iYCBR6",
  "key17": "37zKxoXwydzvk1EvWuAKMfpy1r1Qe2HbzXmQeMVj2PcFNR5kY1HtSwJY6bCgZjmQq97PTs1asFuhh1gLxfyKdkjx",
  "key18": "YwwAzgAqBMo31iuhcLMuYhPhezXYhaPyiZ2QCyaqcdYRAsQxw4DZCgt7Q7gyiy9srPrJQ6pidArtUbq2RBSivTn",
  "key19": "U28VfknEfTreaJ1prvVwRjxmVZwCCqh7CcqrvgSD5vCzgFJmwMznGo621UAZD3qG7iTCy7Meovctob1c7eXb4te",
  "key20": "4eqLvYrdqrdSc4eh6wrefLFEhiGJALUbHWihaUBnm9LgvSiCJSsZHyZZ87zgu2C1GzDaNVkEtoMNWFug4ist1kRc",
  "key21": "RTUNmois4ypp8DZ3avJABk68E72tHDNctVjoMH3fT8wufm3RbtXs5pDnoBp6cg7DU6Aan5xVntSatu8bEwvc82f",
  "key22": "2G9FTosSxiDm2QhFdr7ckDjVrhkWpPAWhEVEVc8EmDrG2BPFqu2HLNTN5K8phzGZGZ2JNbL26rZuhojVdhMFWRo3",
  "key23": "2fYMK3LptEt3hMmotHJLhwwBEWW1d2ys7YxwxtTxvcXeNukDcpTDW5aPBq9awsChJKjwcWpivGSo1VJFu1ESCLzU",
  "key24": "5T8VDGJNxG54bt9qyt9C674miKr4ivj916Tn6gooufgmRKgcMwED9NUrm6tosFUrnNADnREupi3u6aq7W6xssBFq",
  "key25": "53ftJehWCYFVci8LCccj9Kb2SqLCHKq48QFSXhgqJ4CFkVNPUNjCeZHCEjxvim3qP9BPjcz14GfFEbRL6ciVUbE3",
  "key26": "4v1UPHZPc4mfRUp4iDaYXJnR8NaBmHHPzeqQSCZuFamKxR1ZFyuY4grxE8YYAh9pg2pp6rsJf3u6RLv59KLKz4xp",
  "key27": "wDdaxJpxJcixKCixfYY5URhAXEnz9Psna5DB2AFQx5i3Nj2n1zhiCJAtYkE2X23o5CN8B4fcwNNc7oKUhxjVsa1",
  "key28": "4YqGs5U44wQyd96j6QzfP15PYUcykNKoSJyHde4cGC9qpSJgoLxboJDRFiZ4xCdBXZPXP7TRQ7oKBdE1ynPg2RxH",
  "key29": "3Aosf5NNWYNMHxiPXWkXuyJug8EjKyVLH7GBSQ9jEa4tKuJHRnc6fS571TYoSGh5TJvpKc76itBtWz2EJUJ3LpCT",
  "key30": "61qKamJcypssDd9DoJtuWnUBCMrkzXZAHpcrVKPdzehmexBcqSheSBw9VrJHKDQH2yqyo7w8xrxKcFfapW44SvDF",
  "key31": "3WQaj6uSgdVzrMiG6DF5cgTYCFBzUazgLJxSS1k5nHYzGQF6AheN8mxC7S8u67umy9ShnVBZj8RDj3qW1LiHsab5",
  "key32": "4UxKW8yLE5dyBiWNE9KuSEf5ELSB74SuTpLuFHzrJMKZmWKpcLAoU54ndSWZxVuL22H67cMcKUiQmwjMtKyrBush",
  "key33": "3Bp2S4iSkygYmPhhtYZagJZVokhtss2CzViiM78g2iYnsDThJcfrf9kTpALf5piwg6hKYCuHn2p2EGSq3myrXtNs",
  "key34": "2v4qQ7VMh6jHcVgPq2cT5HQN7tN17tGH5YRfyMd36P6PneBHR6xNvaZbTGKVNKbzeydsnysXbW8sJU6saWoBKPd7",
  "key35": "4V7CeYPig5VJcijZLzkDxmacJRFZbFHQfs1rL2WcjMPwxA11K1fu8nh7nLZLrhuTZHVurwFWaEpTUN1Ka1WzPxyR",
  "key36": "4CWxdkNadwRcvTEThkq1v4upDfmNie5BsJdcqLd3T1pegpCotATQgNkxDBKkLH8JQHxgpthEvyTsfXf5zzS7mDDj",
  "key37": "2yjnXMRaHQ6uLojk8qvpNsXBwnub8wnwaj9rW3WL1duRRGK2bAhsncdffeTZGgf1DSeKwjXFXhDRcVY74ikTRox",
  "key38": "e4DQzQeq41buni8Ed5ZaLUrPsFxYHsS881HAsTSS73gV54NtMJueRSXnwVXDjb3eeouMCjeakB2iK2EFvTEMzKs",
  "key39": "2resVp9WRAtR2ziDc1vUxRQwevkowGUEbea3SZHJvCdBSz9ZHagY74ydN2su6N5zgkiUqXJxnqUCXwduboTz3t7g",
  "key40": "5BoQE7ULrxVTnb3i7BXZh2cSVhoZmc5K2LAFxvp2jvm1b8LVvT7Gm8LFs3UgSGxrUPe7sENKZ6Rt2jCY24P7qXcA",
  "key41": "24wuY9cTnzPmTsfCbj5W39wReCb4BXvJvfUCmk2EY7uphdVD9sUW4Y3rWZePrFwK66mh3AhvmCQZWTBpGcEy4t3Y",
  "key42": "21mbAsgjiY23AGx6eLdWch1DHnbZRtWb7rVNbMSuybX3WSPCqr9FxEnUiirYqYHhTqpmgusE8Uj2Kuthfa7cCpk3",
  "key43": "4o1u5CxRtWpyjRTFPVhUju6KEVikiqT7Wh3UsE3HJWtUe5aHQnNiJc9DzgumgHXabvuzV73dUTSd4e79PVP9c3bh",
  "key44": "4hnec6rHdeMBhkcNfHsWgSMhASozfPB2DcTHaTkBjBV8p819HWbYo6N9MShURWttqj44Jp1uwLiXg6CaSmVU99pF",
  "key45": "4iceAGeS231Ft4kFGKxCJKBiRJLRmFhx5aqjXn8tkNgzve8dEBUCQ4nsjnUmEpcsT2edMhhgmx8vpB8MzvTfMNSn",
  "key46": "3b2LkYAPyNSwYvpwYjizR8v297aFjUDxoKnn3KHTZTFbCYrW4Dsrg4dDw5LdKJcqpZBZzfV6Lh5BfbwY6pu1YtaY",
  "key47": "3ymhkj1D4Xs9xSVoe7B1416pvbebroiteFQjewgjxXeErToeQpUNrQmAem98gj5b5KkowGr2DxVsy2UJV8eXGz9D",
  "key48": "T6re7K8fGSMAo5BE2DMCjkptSGRwqcatuGCbKn3J1924WVjAvph4zeFAFnyyEN4HJPpfRBTcGZQndhQNcUUAhDK",
  "key49": "49RjKvdZxL6SN6A2VaxKM1on9pWdtKPMxDEGwX8Bv4KqqwCfN5hoYH9jpbas9yJVvtgmJzVjymWtakbQz2MR1sP6"
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
