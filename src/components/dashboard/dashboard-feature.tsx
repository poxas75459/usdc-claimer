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
    "4BAgkVgxBxe8qLwLXWejUm12zVuvB2Bw8TRDtVYGkgeHdVwaciEpApXV4AEucL8qaZK3NKCnxQ94hevbaCmCFkcs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sf1y5BECUMvMaRobLEHqspPDNc6fF6nNdEPkBJZKHexc1xVd7BKgReJkGKgQ3KCh9zRhCwJcT4Kcau6kmaRaDn3",
  "key1": "5spTXndhQNxnJxjkSCgNBYBd1jiswbtRzxaWW52GfwNKyD5ACqdhub66LMoUiwvS8yxkhTu34DdzrFqkBEbWsdf8",
  "key2": "4VjvmCTexN6UAJgsyBzbgc5iwspBUamov7yskvuv7CRxBbc87SXtxhVbUrNruXWw2tkkoYvwuhMBG7VsaMuZVssP",
  "key3": "46uZzKepXw2rf6V1CgdX6sfzCedT2xLu1aVYMokmfJnn8FFgVa1dHxxqD7o7SoveWLaNLeKjk9twqmG2n4jaBCAT",
  "key4": "4GmE1hBi91z5y8zM7Z5vTEKASsUmuJTASKSdYJPgrjcw7nAPh9gGrKmKJu2HU5Wap29wocJmqgHp7Su5mtKypZU2",
  "key5": "Q3ttUkfBzpbdfxjffQGgi1nqHpoowNyYRoPyQqDjJe1mhJMUUtaRsmjt1wV2Gj57ZhxybXFVUVoetuygb6XWM5s",
  "key6": "FFE3bwv4YFmpCf8sdADidyPw6iv7reFPdCswqkMEPiRd69LSq6kt8GxqiRuKdCbtdFXV2PbY8eLMzqbNaBG94Km",
  "key7": "5T43JMgpsqo5jQMpmGJwsHAkFmWidPjKfni3kGtmwLm2GSbaoqnxy9mmKaeytvGKVR6dHcGVtw5GFMahs5s9AofT",
  "key8": "5UmB3Q6PJpR9KveQmBEsW9ysHrodGN9PAk8724fmAQ8ma9GNm1TxQYuHwF3r9fHMcVia7EFsisEkmMW6N3bkXbY5",
  "key9": "5JoYMRKFGVs1Buo6ezppJWeQAwGxwQTnWsCWJokN3yWZ7dXCk51PqoLqRKSadPbxR3Z8duKvysyLc9Tr4mLUtW77",
  "key10": "2gB27neQ2NZq4rZMfFZj9HZEzFht2cT6FgJtXV4CM8KoT3fQJwTkUFR3BuJLY5j7ibW4Fd1DZWizWzATchGvu4cv",
  "key11": "ucRYQRfJbUgUg1XsdMy2qj7HA2UXzdMwhh4vFXnNEHLseRmNUetb1YWLdAZ3eAPaWAsemsKmu2Zjm9UKLTyqpkS",
  "key12": "eDWpYpiKM2qfUdCajPZEcAAioDUTin4JiShSSCGXnN1CqeSCmNv4J3QBwna5qVHe3eTA4zjVqYm5LXPjqVpBvVb",
  "key13": "PH3kkxK2eSgFboXmGpqMhTQ1f9DjdmPfLihS7WNpf7uHPLHUiAyeEtL8hjbGrQXZqdV8RUwikAdPhRr2f6wJbzr",
  "key14": "3oLKo3xk6ZNxZPpdnbydrXxBPY6ZxAw9ncaQpxUSZeVNvvpKp7j7bghNbhmEoyjisMxFNUwmCYZrHWGXcDkmZTFv",
  "key15": "tDf4qehcfMpDMrip5K2agNDnjeV69THP3Ec7eJmvhuRBiQMvrdgbCDDbdDmGZTF8VvcA2S7vyiGdp9Ejzuy9uXS",
  "key16": "5pRU2oCnbDxhaHhK3YHZe84sDVGxMZZjinppNzbgBSu1kPscxief7awvovLj5xVL14oxLEd53iHQwcACDwD9rThL",
  "key17": "8vAADLui4SRefULM7soMQCX1GeVRkVb4p1wrZkaf4BfVv6zcTSPo9Mrj4DTxWeTos7Uw871ANCv3tdeRCXAWgQY",
  "key18": "4z9CNPq6zc9ZZJW6dfFe9sCCEBPivK6rp8QCw6ftJEPg1C8iLjprTZ1zo8EpB25m2tYtYYsnHvSa1SBXe38Thb2S",
  "key19": "5WzWLw5iHHJcvkMCXFDGP4s8ogJAcVrstniJjpdVdSw8EqnQCfb85antqaZLeLcJAeWJMyVpLVvJN3jKi6t7C3sN",
  "key20": "5ouMtcq9HUYpUtnApUvEurHC9dKKpefs5nUJdSff7ZgTLjTjDNu5vQg1M71abgDhLPBQuCvVKMTJPs2RVt2SipkS",
  "key21": "2X6XJKHiyqHQQmxyeJfTNmeoK6QjR5kpc3mXKoT7EYKJQSpwZvYJC5j7xEPneUdeAASGHBL88ShAJxeEuFNFxNwB",
  "key22": "62F8MijLZinBg5SJDcdKPgCcR3YCT9q1cNdqhfoGoHEmFs2kD9PREUQRMBxxhwPbYC94d4wqXXSWzvy2od4MSMBZ",
  "key23": "2t2iaVw7V8bVz8nLbBdKop2BPWLuNCPTMiVqHrcshk9NEDs7uawzvWryE7aPFYFQcQcvQ9nuuKbhp87zESJ6uEAV",
  "key24": "36ZARH8VCzC3LciFvYY9BDz8hHFLs296j5RynzitfAXsGQzfPA38pYwZtMKMpm7QF3v2xjq8JjsU2VixaMhBBE8F"
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
