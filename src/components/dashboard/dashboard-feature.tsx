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
    "4QhvJVL1LvGz9pocYVU5K6JZETvS3FR4ShjxE77bGytWacd3qPtpXpvcN7ry4xu2RGj4Nn1cMTsaTxcExmD8yLwP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DVJc8snRsXnFRR8Ki1shJ7dSCh6Q6ppCFx37XN2NgChqb2bfkPdiwzHRpvZqfe8PbnDA4B4LvcS51BxyEwqvbkR",
  "key1": "FKRMY6djEmZeXRNk2GZbciQJaB67MVk7XyajDd9Mzy5uNttJfV79YQtn8RQZXujVeYUxFAiCFsu39dG5LvwMGtm",
  "key2": "efKrgsV2dv3F1zw7b9ezkvLbHEj3NzDDgKMLDXhSpR2tPqm5RXdzsxSXeNWbAF5QkibCv2EG3HTKJttcb1Upo3M",
  "key3": "2KWR71yDMNGu6abNAZjq19EEGRGpMqDZRqM9r6SPUB3kmDA5CFg1HgFwnc5i773XZcSRSxsfcyVtfxrcDQ7P5xy2",
  "key4": "4pMfLQmj3Jch1V1imdqhH2BAtA1cqxh1b9YE5yyeowHFybyrQQimnVPcvJq3vAhhagkiByFAHkTLCpVNrCKkzqRd",
  "key5": "4VQVksAsJLJc1bNsicZ1jy5bHpt8hdh3dW6Au6veD1j3kGSXBqShKwTi64hxgTmGoh2Foux5EXsAmFRx5WBoZMu9",
  "key6": "35MwweWrz7f9ki6VXc6aDHKPpN3zTW4j2kN6dPBrK95PDw4hm6Cz3MRE2Brb723hYUPwrr324GxHe8unpbrqFowL",
  "key7": "4CE6JwGZJy3NwScwpyfKjtQjhpqqyzew3VY5nrsD4PT3mf89sExPRhXvNufg9TodMiEPTN8dutK9pgZWxYuuQMVc",
  "key8": "4XXg6GVUQAofoQcZReq8Sp3SVRrx6iJYMP3kNZSG8Xjjuxkmhez5TxSXHNqVXQhtqJPZVL1eXk6r4vLjfiPswrt1",
  "key9": "4VwHz2dtr11uije4vzMsK1jiFHyaGbDbqxn2wMzrAbLDLCF5pgPh8hQEGQCEmk9Ayv9fyp91sbZqKrFdkqWcCcSe",
  "key10": "4CAvYjXFNbA8Dq5mns5uqQJB4W3z8KYmrLwpw78r3B5FhnjxDGnHa1p7h2osdTYd7Wnaz235sr2MfQ3oApRNoif4",
  "key11": "2BtcPw251aYPMKA4uZnL7HjHDnn2273YGorpXKgLT7FH5wHQoEznTFhWWotaeNRJsZMGeWp5k16rwCxgsGkie6a5",
  "key12": "VFhuZbbuQp44t83bvEVPxMcUkgx874zjrRsBzi6SYNQ9mBxfmW3xrCF1yWccKCft4Gm3ToV5Yxcfib8uYGpsxWw",
  "key13": "57Sht63CAmDaSijVDpVeQKAK5NpTB8EuyFZhUQDcfk2wpRX6VsocViw4GdyzLhXSSzoBiTfSCawSpNNpZr6Ew5oB",
  "key14": "2f75QggxNjPNNmwupm2YZeabf3V3bH4v95DmhV6vPkngK34TzArqeCUbJhf6iwpibrhneNwkkeRD1KNpnnf4qtk8",
  "key15": "2muoZGmFB86iECaQk9mNyQaKomPLg2Xd4pt5w34Q8tdiJJC1NYf7ehfAu8vF2t9RSqHSu6csp3HTHqswRT4EZga6",
  "key16": "4q3BybyueDM2KL9F1C9Y1FAcCPkDwTBEzwNJWtYzR8RtgpEo9rGXHRfFqsUxE9giACP4mdbhmhpHrAwTAdprKrdb",
  "key17": "678MCfzGH3VL2oY8N533pEpBLVxQVqEU3LdknuJAsXcLeJK6Cn9LQV9BMtLNNCYPLP4aa3svmVo1xJyPvtmsgCdv",
  "key18": "2YqTDmKKuGcFg9UjanXxYP26LxSSSonkG53UeUcuWBNrRqsa1AtXRzLBHaJBiikyTnf366Ry6mGqPaEsQDw39p6r",
  "key19": "3ZmjPV3YADFStH3DY1KpfG6CS7K3EspMGJvobNHj6Shvn4rxkh5kjRFq1fxnCyxMQkT7QDWCnVTpyxq1SRrP6Kyt",
  "key20": "a9t3xS5KjNHbpQAjKsCrQdPMgLrv2hF7X4ApFtT729CPp9AswjRz3idRc9iyqHvaLpy25tVx4jpfF1PggyNgFyp",
  "key21": "nYQay4UBP8kAep2dwcHDYUiB9iJcZavGh84SRyDWvLHtKWr67c3uaWVo4GkQnXinp4kPovGsKeFgXaLywTESa3H",
  "key22": "2ZaPzNMxh3f7uK36naGqzsMbzYVHiaMGDLUNUsm6TQWF2CMJ26LbvTqe7WZtkxVPDPHcop3v59F8C5ZjndBxiWSM",
  "key23": "3JvgpMw4j5mvL6Pmfwe6euVRgvhhVQHEP1Sx3teqSBwec1xqYNmVxnYw6mtv14XUwjWSDTHmGt4SqaayXuymdT7X",
  "key24": "3BigEXCWwjBtwkz5xCWDtn6WKZkKm7GA6F12W49fjndT29xH52zbRKYS3aepZybtzCD3KYTPiFpsr3UYwjG4hve8",
  "key25": "2yK2igqR6Caz7eqNraKA9UWzYmkZVUUsgifQhGuvpDhK5ogRbijTiewgxk28cGb1gDi6vJ8CmBv2rV4sv6Kho17Q",
  "key26": "5ZDqFfRZLR1pk5MQPaM5zgEZGYYZVmejxJeHoSbBmjX5XdfQJYaVtQg2vK73gDp9zrijG1wfSfQUL2SkMszg1iuS",
  "key27": "5V69AJVoDXNca7Fmk2pRrFQN7LJwkgiw7LWZ37UWjZstW7WerXhbHuaTzdCrAny4xUb6JbhQiupiakUGnDbMVqJR",
  "key28": "2vjSdLeE6qdSKi2wjhGRWtBLjRNscR4pz4yfd5WkKvHVRf4ZidvqanFZ63m3Xc1M3VfcsJkMHwKBnnuKuyQ3Zy7Q",
  "key29": "4qs65oLfXGYwFH7iabWXwNhkn9ygpsJJNZ1YnKCuiFenhGZPeRs1z8mYe1CX2tPzFK3W6rSKDyMPzJjDUtx7rDnP",
  "key30": "2627xTyjg8gYZmmmMgdc7g92q5QgDfdKPZkodcjPc3QhscyvzoLBqY7hcoEtBhL1CoD6mUCRQJv1AixVj5XjDo42",
  "key31": "3EG6qG2Ujwh2G5Cu7dTcwYd9AXUaWGPrRB2gWc7Dz9QWTt5bDgEN1wQqnesWHKP4qu72ny46zvXitgRea79sTKJr",
  "key32": "3CQviarg74VgcHg57AjaBczT6BZ5oXfHLGeFZvNYt1GT8U5TwZSYnrBeH32kR8vyB7EoZ9kSUgHEMGFioLKuFufk",
  "key33": "4uv3Dc1j5YoAJGL4YUsUs36BRZfvM9DEyGKB4k3nLfLP1Y52aXTGXayPVY2B25ApJZcAZHKWYCroH6i6rzPoC7pA",
  "key34": "4ZB6mW7GZRwqbf91FXm6H4Jc7boHqYCSBGXbqyvtz64Giq22ZjuHmdKdpXQfSw7UmFbPrNGqv8Not49AKTAh5rwk",
  "key35": "2NgQL8gb1MydTbCH4W83LJM1noUGqg8gAy7Ci75rAwnQrV4xbm8kiLYsxUtHVTVQmhrrjPe3SnquV6csTqJjwpzD"
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
