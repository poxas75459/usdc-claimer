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
    "C1ZHx3DMgSh3Hg82cjfZyVhfVWyyPJuMNqwAhFV6wvgpFXg8Re118zKUEP8uqqjDPR9mVeS4xM2YuBADc2ZkHVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59aDLbcw53cyknS5qNdbcw1SNY9DSJsiMbwPrPAEviwsaDT1G5qr37ZYWaTyMNQ1cLjPvVDLtd6LtVq4zwdcNkLa",
  "key1": "3e85VRAsxeHL4UG5mFmxm3LesmXw2hyVdJCL8ogPMWy1pdpknkVup4RvHyfDSyNw6GMqE8x4jRpwsDRv3gB3AzDx",
  "key2": "SShvrX7FquEYBGTzfQUQSy2oZ5U4Ubqd9VMsKNFYq7YGviYSz3zUDgCRWCne7cRx19pzzcZ8BM9sDirZqL3BYke",
  "key3": "jhPAzmLK3ZYrzftEGxAnE9qQ7QNGjFXixEBVS1mDDxRK8hm3GEcEXvsJPaokgxG6TGnuXPDfsK28QTsBPiHfMGc",
  "key4": "5naKfuLSjiNDDjQ7481FMmcQdNoseFSBr1CScwY1tKcWAHGwgoE6pVoteiaoCg79L61cWP6gLdd5xyQ1PBdSJY6j",
  "key5": "3WgmKT3ix3Bievs4EMfFNLspjURSmUHVxPQLdd55Ze7vTJuf1XorfD7WxvJJ3KUXq5AQWZr36BwvEuBTDq8Kq4o4",
  "key6": "4sty47SbKT5L6zXwEH55oJN8ATNryGuquXtks73Q1sZJ2KuEgfWaADaca5uKdBrEPxP8CR23DVWsU4DVmcbWEX3",
  "key7": "3h6grDyaoRCFrtdb1xwGRamXXLAYLQ1B2M4wHyPHzhnfLJGmsSWtTLwJNJ77pBPrhk8Q4itbhmRhjUvkQvvm1YZx",
  "key8": "w7bKf3fL6mqR4fNpJnjBz7qfpkTJvDzZZGJaiUPVEhsqmBfVW57ipSAmYedBXHQA3BV8LdywgUqydq9fjvhchxm",
  "key9": "4WJFjVY22QdzGCwovV1g3K7479Cf5n9QCQznQ7o6LxsXMGuWhJq72cuDHNEf69RVqiNrMc3z47CE1AMAR4mjvkBA",
  "key10": "321Ns8A8HahYzYDimsEjMySTGzEK9QmZEP9ox11XP9UjShW2sS18ujn36D69bYZn5cu7zW2Kc4AzEJb9tB9FtmSj",
  "key11": "4ujhTB8XC6QaTpyLvYfYdaM3aXY8D8htxRAk82SuY3YvW2126qrRDLd1fZptx9V92u9xkypH6fwwAahcMVPMri3V",
  "key12": "49wjEexAtQAMQcTedeCTjwLteECwJsvpnUp4cQk3hUSeDWRbLzzDDvD1Tc3C4LLxyixxs6qPj2HTv2P4ZgY6Jh7p",
  "key13": "LXi1smCnh1BTewg1CBfvjwsw44oEXGP4Sve16uzcdtobBWRodS3A9ig6LFRsXcS4889NaHXwkK25XG3FwqR6Ywu",
  "key14": "2zg3yzJMv79EthHp8ydEX9bRUUV6XXJQjr4Hqnmgh1PW5ZqLGKvi7sNZS5YFVA7n6pZYBPwhrZD2ymEaUJUjNUdU",
  "key15": "7VdV8cBZAysurR31V29Jpcf5mjHhy1XjKgWMbZfR2ZWP7Pjqq7rr4YuoYirPfmKUcEQGaoP92Ah8gurRqcX574G",
  "key16": "4D2NikBWWizq4RsfTXribnqjaa6qT21spcfo1qavikesuphQgyPujhPiS2GbzS3wUUL7QYio5eb1kLrtGmppLZFi",
  "key17": "26xFgKTNp8DGnjFvWCq8AyXC6qJYxsn8WZ5rMxB4KJUDijYNQuqQGKR9McqX3rpm2TYtpPR5e7FW8xfmsVJSqQck",
  "key18": "25CTKvr7QYz6QqSki5ReWT8aruKrJfwAy2cFhcuzGrtxrSBcW4CGBdN2yMahVgRqbvwPGMg3ApjVdvGJCKUQsb6q",
  "key19": "2qiKw4oGxTGeF6AP21pQjji4ynerv9chjYaz2WpQTMuEUycU7M4oVKWhHyqSD9oj8SnAJcnf65iCqt2CyKbDKXHa",
  "key20": "5s6jBxXDxK265LwvSwcTvEJU9eCSFHXxE9tq6rKLofmf9VuhSDDuGDHLNWU13VAt2PNXF9yRqN6Hsff5cP7dJr4B",
  "key21": "buKakj1h5PZjPSW2LMABaSmwtGJ9ujxWapq9utRDVcWVr2NwDT3BP1DKaWAaxRMDtrhh8Y14XNpc63XUM22bKHE",
  "key22": "55wTyM97ZGC4fTpe82DCEdc1kxVEQqCa1EZcLRK3vfgph8ntoey4nqTCTEo2VN5dTZiUgr6guiXGmMZngibJAd7Y",
  "key23": "4MNiExrg2qXkCqLQxX6UqYxQ8ohSTkxsyhnDZs8hGSJqj52DX4Cwt5GndfZdqE8XMrhTXtHMBEmbuJoWRSdF7s1Z",
  "key24": "3zhPNnrxFs2YiVWbZ7MgbS5BgomsFuCnRfeXx47MhHJzbY3z84A1L4eaezoAcACwVy7pzx1YcSUcqTc8PhKYAEgE",
  "key25": "2CyvnR3h9msqJtgXbSs1Nr9SpVYziLh3HKtdSMuMNLD4qUVRb8tcCKGPXeC1wKRMQcaaS4As8Qn2wcnVPMg1XpCC",
  "key26": "23yKgCaA99tfvmEkeHXRVirm8fXrXYHa6yC2bBUadoqPQaKMmyWHMixtKV2XBvieAhPiDh94MPQu1cfWG129rUGu",
  "key27": "2apo1HKwAnqgRumVafrBUWhcC6ZW7nV97df5dH1pGKrbjTWAZBoDt3zFwDH6VSKR9H88duVeTmW1u9xybfuRZcYP",
  "key28": "CsV9EJmXu947aFR7ksCPWrGxBVT93VGasZ8JeaEw4eSfJGP2BKy5oaKbey3fKqJayuYByoiZ21Cr2ri8XDXu2c2",
  "key29": "5w1N7WhZJ4kshkwXU7CCP6BwveQnoe9E4APT2ST33UrpcZpLJfkTDNNrwK6WFpZA1Af232UdZMM5WPgPi3ixhh2R",
  "key30": "56NQRuTG5ruUyUxPM8VFj1EF9dd4RQf9dDMu8fmRfnHtoRoxcCGDLsvHZhJGdtRDwJBEU2ay7bMSEDEUu3Qff21G",
  "key31": "3LEoEHukNpVXW4frLEtSFYfdiLgkJHiAnHYwSGKVbWKyoZDLaNzYuCLfJ6McicEQDr4cFMCeiUuEs7BJzx7sM1DH",
  "key32": "2TKehpGEAuqAnvQTqd2AY8quE54H24YEGVcw9ZN5KkKTBya1GbJ1UwHoFaMRYyN2ZN8Czj3agJoAMuU9RFXuNaog",
  "key33": "3x9KL4eBjWz8TPPqM7PtjPCmkhC5qqWREwR8uB2fkU7Z9isDpofTUjJRFEiw8HyduU1Kh3ZUw3sKTPF4gdABFpEq",
  "key34": "4S46Sqet66uhWLrCz7dBkiCRisaLn8bEgQaKi7bYer3HrkeH6GACW48m4r23pmfVjLj5Bfd2KHzpMgmeTRVeWG6T",
  "key35": "27vf6bHstGUrsJpvRkR5q3NLNeTD4drcGoKL12nhp5VsRrcgavDVJscHLfMGbovQMeYQnFAjK4S2oJ2paun3bQzi",
  "key36": "4835voNTWSuk3j6rQ21ukZ2g5z3EXFYXwu3chPFJCzF6NxHbRFS7y4poXPGvEQrXxysh3FmtyCfYqNM4jDFSgM3",
  "key37": "2Bekt5PeKWmaJS2xoZTehcPDwwrG4FNDyTqRkpQFPiZ4kdAzCLMswzEsKteRdipmz7MsBqhimHuAcZgyivQBsQxp",
  "key38": "3Wk3cgEpdWALKTJtSsL9MdqkovLWjKZJ5KKG8hLSZmgvE9DG4c1ZVh6CBcQxs1hxrVkDAQrjZMkAuBNYC2NwpWEe",
  "key39": "5JCvJtPwmi3DhqCfhpDth6pcyDPhyL2U1ug2ADoKzmt7SKm2UX7R6A9ZfoNw8qht1ZBAtyM5nEKrEXbU1cwLxLsE",
  "key40": "kRWfyKdB2LSfUoCXVAwNwAYVtekcHJ3TpDMBwx5AWSYFg68twBnbipb9FA9gk3zyuCUDQ3zDYrbSm8L1uppYgqo",
  "key41": "5q1jbh6E3znrpUCuon2pe2sxJLhwEyUbcHW5AAxKoQ17UEGtpLgbaRET35xzMmYTNwvvGZPN8r5Gk1gDVRunmWjF",
  "key42": "4RCf6EdMacAPEuL7HnHfsepgxLU3hFE4pEkSHiX3yc2uryxpvc4iVBdwVdNJFLQHyM9zaUUqcJAz5kyPiJS39NRM",
  "key43": "3drwkPGfaQYkP1HnRPyvRXbAjtz7wycT7HBhSy2jvVTKwRd6jHHV8aGT1h1r8Tdjd6F58X7u9fQuMoFMZsgreRwT"
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
