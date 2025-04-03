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
    "K3gVupbGDV3v1q8z9NnSf8yodgmtWY5gGg9p1Jkc7JRX1TAVpMXE13jZyp2fiHnBy9A27zdSCPpR6T7nhH9DvqL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5azNHX9ZSFR6LAuGfFUVgD7vkpYqAfaYuyrX9XQgik5jSWQ9bvCzv3quvB9CRgQ6yGJkfQur4ZMs6K2uBu9jNP3Q",
  "key1": "5NoP3QpLJgxc1BSK6ky69FBXJpFHidB6m5HyqupoCVhbhcJCBC4BDS7sp8Td48AekpRc86xpHwCghShHP8nQREgs",
  "key2": "4LoppS5KyKTo3FvNqhW9bZVULtn1rKUqaLtTv3npCDNK3nqWzDJSoxAMRe9v96d6Q8QoGS1aBsvv9UJagL9RSbxa",
  "key3": "48RABpGmnBp89Moo3Xywe7MqQKez1wcNJeaCs9qJ3WNcyTvuGMZbuVFXE43bbb1rzxse1wmuWPX7EhtdcssC2ZDC",
  "key4": "5fvLx7kpysazbrAJS3iMAegSp8T5uR2cE5Pdy8qUAYm3LfvhVE2bcoUxWEeGGWe1VYnxRhxN8sL5mWSEP5qik45W",
  "key5": "E7RebcqyXzs2WEuf8p2nK46vAd524iMm4xc1dAYTMUNPLv24Guh44WbDbwFUTEExwmneTaLhyY17rRCos4f8R3K",
  "key6": "21PSUhj4Byi6UrEKBbymSzeyyDSBP9NZtGGDZwzxk9Hrm9Hz3jhwdbPs9UfbuitExhnkhPM64gDMAjp5JXkzQk29",
  "key7": "3Ybh5uRau7DqpYsSeQQyFWrWV2pmS3hwZZ6aMXbZZpSfgyq86mJA1TzqAUdZmLFRwnQv8yp4ijRG7iBWV2mU2VfS",
  "key8": "3dwNiKEpmXJfQk1vssDjcgcuvBAxQmDrhUw6woqWVfhYz4aEsr1NH7hri6KBECrFZogwLaqJjeEeAqF8pE4DeKK3",
  "key9": "29pnR1HHNXtRzwkuULUBmcfYDiLa3A3x4rdV3YCP9vphYUG1EgXJZTU14NXQg7De2rzbWKf51ZNNW6wwFDUsKiEj",
  "key10": "3YUkVuyWtnXcXS66pcK5suoSY4jpRuWnsEjh6wU8kP6xTyS5YnQiyRSrZjJvkWvAHcEVug1CHXaGcUbHfgeTirv1",
  "key11": "4dFQqts5sXEiTH3YX9EyPESqFvbrTss1HErfdzyfuMhSAnUaPx2L1ffdLEkwfaL9Fch2av2avYVn9AZpjG82yFub",
  "key12": "22iGaWvMc1WZa2vGT8Ek3cGsAML3cyA9HoFNPu2gh8qwYDd24G9ivqgJ8AB6UEj5PRADRu4E3Tipc6FHM2rQtjcm",
  "key13": "4HTaPB2cn7EpSwi7uboHJEPyzxiaU4Kkcsg792rPBd88HFixxvejRcWYumvQNmv39gzSmiBtiX1tS6ruoxb6zjpE",
  "key14": "21o8D8yvERdmU8hS7tPXfF6pNpEz6zWrThyHccjvgNVNEt1viNfyB9HVFgsboHjDLtS1hnh7Du4V3QpSRHfkbYCN",
  "key15": "YYQPriNoS76xquYqaS4hoa51KdYhnWtQhPeXwerejMVr8QwToeYGiQiN7fgFx7aTq4dCtSLzsgjEaGCmzfvdHuZ",
  "key16": "32uguX7exi1n2iRx4kWubwBRzFPAdXsataaKoxC5XL3rAiAHGJjPGPeebBNayCWBUKNuKXnWwjuQw4k8ixE6BhKq",
  "key17": "vywwVbbrvsAY8n2KE1by5KNpKznHNGqjYH9WCjEu4gPPFPdmWk1dkTCh3FQWD4cePsVvv9BAGGZwnWRECH843pT",
  "key18": "4dRvA7mDHrsK5GyApX33GiHgJqusFRYtWfKFxZBKvycvJfJcxFeZdBQAAXNeCFfFXrM862hkX4DWfCour4A4Q5VG",
  "key19": "4Y5HPPYhko1KxDxnc6mZGLne91h4RmdmLcHbyFYHmF6sprQJ21PLp5q6iusGeoLyJCaLEqj6NrvNEG8g4TcBJFrR",
  "key20": "4sMhf2gKG1KXDDqqzz1mgbEF9kBGuvUE98v3jcftjeqF99e9CUA9PKhkiF8MpERWSK6Ub53nQvoadTDiKbHggQ4z",
  "key21": "5Sd4iaj3c79oCBgtUhvpyASM3k8e3WKrioCqg17CWACBvAcUW1YH43DRpwPQUDtsHpkkHHmvUUykrnYPwgnkdAsK",
  "key22": "4jaJ2w8QthVbGRJjFJPRwWhSnPtrugYCfaZhfFhKHS3v8eexMVvsmocJ1yNHP1fykppVz7wzDi4rM8cWwjYsTxq8",
  "key23": "352cMew35SjfcPz9bCzMUiyhpTM2Yi127nvQ9w1AQR3dHhE9e7HtRP7K4BgmNDgPADfxJaA4r2WNEvmacSPr7wcy",
  "key24": "265EMxQmXwUvEx8YFjKEuwabfXjWAn537SELTdvBJV15MgcsXLTY7yrfbmtCC9bkvNrm7UBausahKy1JQJFLXbrL",
  "key25": "22Mg6WQEE5GNGNpcVGsd1Sc8kQWi4tjQBNXLnkv7gsLhdiqoK2oht8PLwPM6BPxq6q7mvaNo3qBv2VaUaVMHG9t4",
  "key26": "5X4tEUyu13jCa4ZkpDXoJrCkuT3gBGUPNWhm9YaxAAtGevds2x8iKWYomVr26GgXLBUfrEWTHnqrtmVWpNDEFJtc",
  "key27": "5z6x75BD3QG3LuqNNaRnhJTeAX964ixJsa7TvrtGEyaSm592xGCUDzCPYAy9rQQp8KZDHwpvgyuG9gVb4LAuWsJ7",
  "key28": "2VcsrTyo6odvpHzcsyG4VjkBzfw7YHp5MNqAZRw79mEzoHqmvcf51zYR4z3UmSo8kWbuPFPC39JLispAcwYggYTK",
  "key29": "7xf1EqqCiEejrt3Y6b2gHm5vCd95vA3H3Np7ixMuZ8uppxZdn2fiQfbNFPi88GVmp49hSXwE4QE5Py9KapeC22f",
  "key30": "2QJmbdYqm3qmZibPhzH1RMMAVtnYFzQACQdbcMtL4cL5Jn4tegqujja8xmJMu9QfpVD7KTvCdzn3TM23b14D4YfT",
  "key31": "3acDsSbH9YV4iphwxCWrusHarQKAwfVv82fRdxWpB8V5FUo46hHc51xrnXDYZFxxyuVWFxkyRSjh966GaZupBEtZ",
  "key32": "3YU88xe1UzByQzXGrdqybrbiYwaH3NRx8dBLG5EAAE2ZpdYw3X7cchqeSU8ihvFdCfyuN2ewGsqmB83tkEDjmabC",
  "key33": "3RLmxf4wMLUBCyZLHJ1b6Ma8ZYtrJ4XU5xGLzjxTDRPoa9gdyDKD4ptyiQrpMZixv8cJs1H2z4yUQTULfumjWomz",
  "key34": "5b72K1AVk9LHWJ7PpLDSgLWTgeS59SL8WnBY9gkG3gFHLmJMTuYV9Baw25TceY6iepj9efQiBN4mZ12edW4WmHLB",
  "key35": "5oVfSreZ3Y1Jyc24J6CpLTcMQ2RSue9yAu6rRwxtv8RKSp7pPeaTf1i59MgpDppHLJuTDHC3nheqBq8TxT6Kt8mh",
  "key36": "234Cv7uao9Zo69J39ELf8Hkw65BjkiESPmgeiZ5DAMyRjrRUvJrjwex4btZTMuWQNYdduibmDPQxyRCS78We5naE",
  "key37": "3fHvoJJ3pCabkfuB9SJEpCpuKSQqXUJXkz3G1A1dToc13hK6CWe7dJttiuApoKsX8o3JrqUpDk3srAFD1hysvs1s",
  "key38": "34fpfW9se5qF4GNe71ks7N4G5ypizr6GQ6pedEW6NHLi8GCHAU2GrSGjm8PA3Dk1oBUSKhfHuLwbh3pH7kYn3ahi"
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
