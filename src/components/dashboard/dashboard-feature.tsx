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
    "2d8Mmm7n9oSMykpaT3uWgLBy95QfY5DuDyBaGsRZ7vJK5qnosThCcRJh55PM3Keiq6E864sh8gf51uFR9rsuVWbw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NzRcJuu4nqdX91tY9Wy7FqdQFmp1fYci4jBaGFUwMGwt1vZt7aR3Ht5j4JmhWFGKGetJj44hxjYn2Yzy6cC2nNg",
  "key1": "ZjBB2R77R2ogK1m1EU2eRsENkeK5z1sEmjWRqJwi7GiXBJvRotGpw3YAP9Tw8sGmpVmJC8jG8D8QF8ANXFuUkuX",
  "key2": "2zyzM8yMbsAXhhjs9HRTeBEBDC1fycV7RYTXCTNo3zZhAckmiEK5hff3GKjqric7RZth4F9fVkVZXpKjn8sk8YBU",
  "key3": "38MdQC6Sz3uRCEnacuNdQFHFmPAnd2JKL67U31wfRXkmVhJJjHtuvYMtDa8FcfBdT4Qn8igjnA8EnApbpBMbTQ8P",
  "key4": "38MeuP88zSToYd3XfAxV6EDdR69AsWpDChjD4JowDUsjbYWa5cj9TofGVd87WqPrd39SSZeYv4fRuwE4FZwR1Gu2",
  "key5": "3eZQbKwG3m7REG9aJugighmsVvNWrz3CSdNsBHdkTSqBa8GeHJ34fMHYhxf1S5QUBZvM9tF2U3KqAAKQ3kGfPWEx",
  "key6": "PAxxqAZAMqSisX12c4SaVUq6vZHcCBhzDiu2FiYyVobVyA2TajxLrtuxYEqFe9a37svnGBX6U48oMMxxYuV9TXo",
  "key7": "nMQQBYLyTMGurfsW4SnTJFesB4EoYjC24pC2cPom7tU6tzMvK2xjVV3ywGxBqqKK7HHQkYHdb5ZqaE9FSSxGmZj",
  "key8": "2K446zSr2Kf6TPgton55g4w98VvCYMCVMLNCp6CDzR2Weo7UfTmSR7vNmBeWhpkkL6DM8817Ky8hnZnNSknXpmM7",
  "key9": "1265B54gc5pJY13KrthUEQL59y9WQcY85qizdPiokrjGS4f2GpkREJXMxGCFi9jZg586f4XbQ862ggkBZ5KkWzC2",
  "key10": "5rF1eutBZsZd4zd1X6BC7aM3nSzp92wCMsemwvqJ7qF1QfRd5o34Whz6F1mu8DSN2i3v2qrocihp8XUtzsKvBY8Y",
  "key11": "4kYCyhyzoVzaqDNhKvLNQCUt83fYuD6TUGuDkWfHr9AqFJaRBuAigG2ykxywqGrS3CYZXuY3UmdMPPg2yuw8Vz4Z",
  "key12": "4R5gJRKTXksBSmndVXfyf3wF1oWU8B1jufSwitSwxTBtjaEXudUwhwQyZh3B87vZXHcW31j3CvVaL6MmkBrbDe3k",
  "key13": "4g9Vx3y4jKwKRaYpMGK4D9X1o7QHVKGXbcH5hiYi5SrY28jnS84VhUt9qFj1Ap5JWKaXtC5re8oyBjRH451ZMtkv",
  "key14": "5c6dfxcHp3wnr9sQ9Sf8GJPfEGXUAnsEs317oxRtM9Y17X8pNUwR3jLrMK3MaLayZDUqmGa3FDcYqX8AD6t2CzKV",
  "key15": "dszcxfAkdHXhTh8i86zAn6zZm5Fjry9J1PKpnYgoSFrhwtskt9vBNNsbEjoS4we8uHcrK77k7AhJvJgFtwnqhs5",
  "key16": "5u9kgumPBPVA5VHGVLv6TCfewyat3hkYrDphCT54Pm1r9U4Q2rsWsXyatDRkkAiZpSfSDqDtwpfZyALxm7XxBANH",
  "key17": "4gN4dDfk1zVNxR7KcjSJLCFBpgezLh1zADbyF5u21a4oDrbtaP8ETeNwyXsgSPxKfznwELrCwFeknkVXkc5QzdYQ",
  "key18": "2Y9bygmNTDiQ6rmZkJtXcQgX7sjEcomUcP1WSivPF6Y47atNYPSTf1L6kUqZ7KCgaXJGCur3ZCcTK3ssog5USygA",
  "key19": "5kHWwqoxgb9tYYEwDBhGuxAXhVGTFx4WXFFUWdrdfJ7wKPM8r4X36iUPWygTYvsafK2is8UW1LePX8kcLeCwfwKz",
  "key20": "2RqaghToqPQ4WgPuUnYJrMXaGuHCrHU2A7SzEbRjEGRZpR712ndkXxLj9pYcFJiFJnKhzDwsCWdbm9V3AQnyAkvK",
  "key21": "3MJ1UisBf3UxGZhgyLpor3fJtYdCyEBG8CstjRKrmdfv6hZHfGuzXuYyghKtXn7Fpaij2qhfhSyKNfmcJxN8Z13e",
  "key22": "54E4bH4ch3wuNqiKhQmxyoqbhhgorGfo7R9EGs5jopLkpPF5R8d2F4w9bMigH4aLpTSionXscb1kErUvwS4tkugq",
  "key23": "65k3cahF8HqSpGte5xjJZ4Kig7dFPstrmo2oNxzCAaoFWVD2FR336p74vZRpw72jhY7pXN1oUP6kKUay3VGuEPW6",
  "key24": "GECKCtf3u9Ubk3Ysmdbwtxqt9xzxCK67NFBbUycb9WVAaiRRZ57tizMW4LiWerXdAcdPb7MMmsWBKbcNqQbhMgJ",
  "key25": "2ZKuyJ9gNHhv1Hawwy9TN2drVg4ikv7h5u5fbB1GxT1RqbFQy1kuyCLvCX6ozRyKfudXDnuBc4mmenJEMok8bM3y",
  "key26": "3cNMVRKGoUvBiBYUqGwushf6YeBeE6CmyJGU6zTuMwdK21ZxPyF9zPXJ6n3EAoV7kyQECC4eEsobd3yvNUjQK2VA",
  "key27": "4KvNPu8vbsXmuDvTHdHiNAZ2mHv48scBT2FUdz9xq7ZS28aZhJt9TQUJ1Jry28tiroGK7cKv2TSTtzaGmDPhhyoS",
  "key28": "pfH8RHrY1fFqhq4GWjhxHWGaLV26op4kCB2SgaE1b846fJb32QvRDboHU1scgRV52WCD6cNioCdr7wqc8xH7eQY",
  "key29": "2PiJZCZHKZBv4rhRAjzSam87MiJN7Pi966MyAvCWKDVcfTpCZBdEzfY8JqSCTLhjm3WShCs8UCURECFg1jRA1FP",
  "key30": "4voPKVJK3RcLPxCqc9UQeHQYUAhJrX8PRDQbm3TGsVjdysvuzBHj6CGxCgmMFXnNcW5anRhMaqVNisxSzFib8bMo",
  "key31": "35N9kpvBcnCJSqL23YTmu1uXePSnX9jJrVbdWeBbUwmMZjQCKuXXJMhvbMKrSVULpUCG9uKJ1h1QGXWFA6XjwFSm"
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
