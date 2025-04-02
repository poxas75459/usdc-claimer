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
    "7uA9xG8XNWLV595pdmy1VHiFQxgpcYP5b9WxZcHdfdirtCArqwMEMWAQnRv8T4m7NSB7GJChzQDjwfg9CnYGRJb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pFsZPE9HKSUgeaLvp9v71zmKxgnsYVQYB4R892v13h755x8au7vw4jtx8q8gKRBmfE696qqrcDRYHcd77LPnkLC",
  "key1": "3a3FGthbCnK5AzLa49B8BNgj6qqJQ6rSZbRKQhsGDL5J3CFTDzs5FCpQuB3MrQMXn3RixxKzN1iq9GDK79ZTTtVM",
  "key2": "5DPc2kB2bfzYJtEgcBLGxf18ZQGxJ7LuVUYzEpeizqC18P6a65p1rxjN5rDrnevJezby9iRK2EJbNFoWFjxzUaP6",
  "key3": "3L2k2eBV55fjAdWe184NtqYdMvyjm3EQ5nTManrK2FrprrgNoDHKhrbWDMPk8hPkHbjBmh7vAJSr8GVnyfohfDZo",
  "key4": "BafSEVyryc3crY8uVWLoFF81PYjm3RUJfXYPnfVHFRHwBzJPGunghsPCkwa8hcu1f91gEovUQCK17Gdmdtwzp6D",
  "key5": "3jfVzcGyFh9GB3crpyqsWEbJWkmwQe9LEMzMBu7dsEKsvQes4Z3u4caRP3TzDMAn7TabwL8mJ7wBDhB28hNXKQG1",
  "key6": "5b39bvDFkuiosRvhsKYHDWrK4nnDZZFLGTgDUxqMrNq2eKs1FzLoHvy7Ki66U7mGPw94F2fsfRvpCQqaptV96RsM",
  "key7": "4dFVxAiRHABpoEFK41rMA7SxDsdqkkQMvrZTAPs7i53REndG9fnXZawo2kn5cKuYFwW23skDAMch49q2gQCpDN7U",
  "key8": "2WhprKMWsPNYgGq7yHnuySm6EpsMjyHqoGRfbeHonjFgLA7HqsUfAohVrYFfUHSA8dpnJuYXovLnaieQTVymrE3R",
  "key9": "6733gw4N9XQw6cJ1YRr7PQeFEjqVZ1hKnjWChD5jsEGgvXCXHLLhuxSbriHKPY8rXuhct2uQTwxEhKifa8WZhLf6",
  "key10": "3tpVuS5GV69f437ynywShDpsBQrHk65ced38CHUEg2Lq7G72EG8PRxowypuPsUFfSJdK2oHaiAJe8t2wz4y13gXp",
  "key11": "4YXA7i2mEHnZmPoXSs3JRWpUSkjzXKHJkrywbZaeiC9payXbqoSPKL5x9EaDNhWFVzLidoy6ouXnvdkQK6bxHqu9",
  "key12": "3Mp3EcTbCRZu6tiNDHSpA3Dg8kN2yQe7Y1mHFxyyckV54Tq3ztt3FZM1QyaVSL3XPpdXXBhyetqa4NEVHfMWycn",
  "key13": "2Bf1pY2qyWqRsqkApGAEtTnsMDRkejLYrxMwgKZ5BXMCiqSRDykUTYTLLsqMDMUSr7qV88aH8g28sEGVWNcXuJxr",
  "key14": "54XTfcsi1zjV5zL4SPBrmd6BzvcYrVMU8fbeGMkL2qS4b3vjtUR97Uz1xDTyNSwAkWR3euAs8KvmwvFJdRCxUyQh",
  "key15": "2SGkW4HCtF8bN3UXLUPu7WvnkHHJxwCXsSJg5LTEuAhkxDbwFVjw6gr2mUF1oJfruXPaZaTaNci9AHUrwCskuN2q",
  "key16": "54LMQDatcJzGf9hSDv29aZnioRS78MCd9iLHQ6rEh8QioSuDmQ56vSTDkejJeaupDNKs1YYt7S3xTpzwB1tgGMMP",
  "key17": "2Voc1b3joyD7MR2aBxpDqwG6kHrNgXUt6Y96wf1nCzVnYGwcpCCioqXQnV5APTJ82AyZtc2sUYP9kGrqY1UMNx8p",
  "key18": "25PSkFcfAc4eSFSdnMeSNouomn3QDraafuZXiD1nad3utaKnb78mGNFBhGfx9mkk1kK6ndgziBfepbUvYuC2N97B",
  "key19": "4eXGo7YEvQCHVB38dudsYo4ucgNkAUYLGixHAnu99dtttxJ5m8GpqbSbbudhMj5qZtuZvGarS5Kdjq1kNy9pwZhV",
  "key20": "5fvQ2zwAd56vzNTd8MxQLCC7E6jTTNWazKvyef7fD3v3hzqCCKm8mypb91BfGTJwDMmMuwqRyBPDnScZh9ApD56E",
  "key21": "2tTpUzoLERydWe15t818PjGPraKP93DSLqRRvorkN4EdzLZTtYwZj4yuVwZjjUmvMK5yKnqufaVS4kXT8cmyAzpx",
  "key22": "46trMqcA7pveEfJV9fNQ7mj9kaoAoRMUJ1bbYnj7US2e7Ggs7A3iPrJDcGPyDjNxUfUdzpV9HLcNkUj4EsRgFUVp",
  "key23": "XtSmDXAgNr8eJ2eg3GtsZHavh8DSy6g3kikhHK8invXUga9hNb2BpcyJrnoqvj4X6a2j8yDwvaM4K5JKfSxzPmx",
  "key24": "4o54HBBcs5Bc2EdxespRXjH2w3meZ2wFabBbCep4t61q1bMU2GEGsJDZVR5sMhMgv8HhQ9juukP19KYRdJnz4Bxz",
  "key25": "2MPi8W1Q3rd748TBiyUy5L8qouocmLc1DC9xW2TNc57UojB5jbETeMJdGdkRZv5xhtbE2dDMupDS3SjkW4X34ZDV",
  "key26": "3UBuKgvAuEqGEnxXtcfnnUo6qFdzqXrgGHHXnsrBpUjZuwFjCE2eirGonL6mYkb6wyXgxBaqfAxV1GNyz3NkxT2J",
  "key27": "prLrjpxvFPFgUFY6n5B495B3y1RCxKUpXfWRAcxbPaXKiGN8VX96TKyXn6ZUe97UwWuitmmqp7RpCyeCXCcMur7",
  "key28": "2gxNZ6M5GvaMXFCCZpqynC5KYgPm1BWvGG8RXKDygbSB68LdCxLvdqvFbuodRBn2NHWYqy8GUTRUhyWLb1Xy4n8j",
  "key29": "6sNrT4po5JmmZmppQHC3kStyJrQ7cUgsoiiZHKjzcjya6nrgqN5aGWLSF41VjpiwQmtzu9rGwHdMjYhdNthYEZa",
  "key30": "GQQojAYxKgZjJPzeTwP9W43Qiv4NjrbWy2uyG6mn6RfuQt81Nm9pNaN3QZdY17xZG7pQ98fmidn4XyznJeDzRyD",
  "key31": "2xihEKkz3DeKPV3qpHGfs6LUjs8kF2YKcZACkYvXSPbndZ37KP4tvf3EbCoxC34hmuKiq2X7Kp6TXfjx7oZhbYGS",
  "key32": "5etjWocy7fTqV6915n3vsqbaQVfFzYrjMfVLV7JwFgnyU9fXGNSQAoiLt3iFZkPX91Ln8TCVvNtHugiL22tL1qto",
  "key33": "2akCHRVRps8sCRE1KVKs5PWQxtyxp26rbXi2DqavTNt95hvZP9z79EyJoQsEr4euRegU6AF8UMkFnXm8UdHYEKpg",
  "key34": "3YQsLmx92RRctrbcez369wFxJepuZa8vYpatsktS8RK4hcYSe2SVv4vkd7NRf4MZLaBvZr6ZURD9kUhnYu4esfP4",
  "key35": "Yg7bB8sKZrAyF1eSYCWL1AxEPBRa8hRLFKGCnHMGT5Rqto6xVFWgPvzx2Ftnv867eYu59QcitFf41v1J7mAGVKu"
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
