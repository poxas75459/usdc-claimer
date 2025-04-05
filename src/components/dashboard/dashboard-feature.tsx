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
    "4GcHhYL7hidqjn6pKCNxqmti1msBWi22XPWGRM8KD8SBAxakP1qNHYUg7NE8YYf9PLa9GiiXshTJWeEDmkSTVQbZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LRkh4HLS7BxqhecMdY6qMPEmKwnasdTnxE3ZBNBS59XB7QT9oFwqcKmeKGzo8aeF8EoT6hYALNjiwhnshqC3zbi",
  "key1": "2dBqtdkE97ec7gPvTGDKXCiJ45MvFHoCmQnJ8tvoBUnpVUkzTHdXUDjhBDhhUsMwcYpN7FZ5ciQ46pEWHJwhuqAq",
  "key2": "4mUVucMRPNEvQgmmUbxgCEZapyDgvaPhMdhkji7NbpiCLyna7Vbqooeh3FeqggxmkDskEQK2X5nNsa5mjwuwRqGj",
  "key3": "3AHgBtASsQPSjJH9AeaMoYHn1ecuFVQu9osxxCSxg8GBpQgfBecDKv6v6NxD2Z7AG3AKi6o6CFTKTkuivgeA8hpD",
  "key4": "mWzeJUnYCWY4XpFXaQVCchdH8hg5A7sHJMyPUvhHkpYsXHc6aZuz1uiE8FF4YjBWtt1QGneGi2fGck3zwqq9sUK",
  "key5": "4NpfXekMj71gnc8NodwWQvHbkVzN97YnGYMKhJQnzUySpBWPXqPejvmnXN35Gbwe9uc5QLUmpJwKucuxU3VcXCXE",
  "key6": "5CQ41gHjiEToiHkz9Pgdzae9fLBHUMrewpDJrdSdLFPKKXQQL5bzg8H9wN7VdDxhqAovEJDzQTHtuxBf1u8kymKw",
  "key7": "3JAoYQ3zEtupjyEEFTXEKXBjpg9HzsXbXqiLacjTRAPXy9bRLP8mUGtGSGRctgn1yFsww2PjXobs89RuGMTDkQ2C",
  "key8": "5pFgFwqC1zooNHpw5G6EonBkX3LMse2WHhJmcCir8w8StqkmBV1wusEPVtkoqyYJrrnFA8cWYJhm2MtjaVR5azP2",
  "key9": "L8frUnEqRMAc3JQUYu6LX5xMU2cT7y9immvVN3KdqUm4fkWtV7vpCRK8vfAY9ygaw53hQEse54K3HdhAgNqYSJZ",
  "key10": "uHMs7JvEs7YgJyNTVQdAhA4pFRcZc5tRtj2mQL9szUr9CrFuhTfA5y8u9Y2ZoJiyyAWfwCHRVodc2jYfrHswq4Y",
  "key11": "3UKTiiHpyK7yqVcnbxc6cmTLJVwZ2joUj8vCXLRErDWVwEvSt9cNwbSv2rh1qwVQscCBTdWeGFMUGMpStWMvywnV",
  "key12": "5kYSaBm8URbxGvwbE6icTexouxYjkTrEDR6A3sjFg8SPgyBdvTiJxZknh7DvUr3k4ut3WFQurCye8pHirixC4DCT",
  "key13": "2q4qGxJfWq7ebPm7Ygdrwf6XugoB7x3X6xXAPWK4od4LkP3JUKRqwB95noN25J8aJLHp7gQ4Z8KR7K7NwsDZ7nCm",
  "key14": "5UTPKvxtqdXfVyuR7fVrdmwWYDiyAKDHEMCzdJpBbocc72qrDQkmEQNpCHqXB1mPheSvRC3RhTzNVKNU18Jtbwso",
  "key15": "4YQ1nVGGBQ6CqPRwi7PbXAryMvsGDWVaDC9Kzwmuc5EMbzi2dTibWYxMXYAYj1iTryTTWF8MuiweoGRLYHuMMK2M",
  "key16": "5sSLxCHkxJ61LRTDxvqr8eDtu7QgMsiVcFWJaaTJqUG6pS4tP4EmKRQhnM4ihtYYBTXSx3sdiEfpkwP3XCYUiJ5W",
  "key17": "4iwQ8UwMaijRPMPYCT4DRSZz1i3oCKttFkfQccn3vfijSK1JVChAB3vzuLVHKvsKaoct2emeMPTV5zCi7YubXfD7",
  "key18": "58FupGVGhwywHqu5gHFscE2LPeQsCLcTaMhEjjBJZSK8k4J2J23hwjPDjvbpa2CfQj6UvUWVBJbiuE27mpkWCUbp",
  "key19": "qstW5jvuwGr2RnspJ4KxhzCCzwNGDFE67qs62prVLbjnFmqn1kFHwVWQKhtiqNdzwfqVW9aS6QB2hwZYeiEAWeB",
  "key20": "wKHhhhR8A5HGCRx8yEWEjeEHe7WhVztWmCQVnLkAzGcLucKwq7wxDJ4cjgN63KuEMYj595dYe7CcdDkhhU48eFn",
  "key21": "5MLjevmKpjbWtW8DBaJdr2JoTceRHJMP5m7vcscH1jXuBcNk48DpEjfc11rsutZ5ZQ4ebBm1j8Z55Z14nFNypGpR",
  "key22": "43SRK9GYvXyEus1nRmLHnxps8S79TY6srMgTm51xkSsV31HfRFJSfkCtrJNnoRVuMFqnFfkyTM6sa15Pb5DbfM8p",
  "key23": "MHJk8T1RNQHKBEnkcHFXCU6teA1UPmipE8mk7mfnQ15B6zoM9EuhaiuhMxDL9oWuBop6XErwZudS6UZEfAGBVsi",
  "key24": "5YtkDeEkWggKmQCwGgeLvQoXpG9T1wV5VeGyYzeDZfxkexAvgcmjp7eMewHwopobkka3iyj1UZSxhQFqnkmABNEN",
  "key25": "2n34EXeCHdXSBPvKWxdZyJ5eDhARNBHUfYhK7uxGCHFWdwSRpVcVTyJFHFMyEr4LLBmWDmHirpfmiMbTjfBojQ4c",
  "key26": "4tdY9j76BxcdaddiWUXejvJec1X41CSpC31sCpDcK99WQwRHUd7PfmFrQWwwbxdNyi4EMxTfmcPt7yS2bCsvnBsE",
  "key27": "Hj8ttV4dFt1viEciYJs33T6GMJFS36CRaoEYoPQh2AAjTgd5etZLuFu8eeXysYLYTk6aHt2G9fbtU4oS6hr3sdj",
  "key28": "3G7DE8Q7E2GxnrcQdydPeKjh469mcbsR233hAhFEGUxGmdLAsvpXtBRwvAjxoyLBwoubEEpmHqWmiyfuUxvksHuo",
  "key29": "44QATCJHsaRRCKg7Nj7jRz743hAVz1tayGCGpKvaot1mdgbwbtXgpzpsp7JwYnF7UftaN2Aj22B4vHpAVhVFPsAB",
  "key30": "3CaVgZ9NpZZEcCyHYQ5NuiKK7iKrEaWMGFDg3z7MhkJ86fYYae8SJ4yygkER2YMJMschim9Rp87BUYmVEZX1hk4S",
  "key31": "3m1KVJiNM1aq4xMYJQrH3JDN41DqkzB7CfFADJTupNR9FsiEfvFfjdE9CwYLKS9xKRTMQ2S8Sr2QhCXJEyVD6LPy"
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
