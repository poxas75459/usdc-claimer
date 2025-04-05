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
    "23v7YAq4mWtUp7dDAMqirYd8PMH1Xn5svFcPyYRxEGy6z6KJakt4hgvkT8FX9NU1BSm31EfuVhA46ekKqo53Jvmm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y2CTVgVykqGLgBULVib9VWp2Qt3KZCWM2DZuLDsps8GpKrZpYgxsyZrK15y2b1Li929TGAreBnggAhTiKfaoJDH",
  "key1": "2e8mQDQ4nHTR6RpnhjEyinAQuCKrdsZ9ewM7sx6vtitcRoxq57EN2h9MEUpLZjcekvpka1bwXjPekfDMJC5kwqLH",
  "key2": "7Nzx9QDsiMmo9At6TZiqDd6CLBHupHVc8n4a44tbY8jaV4n8hiyFBDKV22V4wLu9Na3VBtcepn6SEBtBwzvwBTr",
  "key3": "HT1ZxFfxp1cvoAdJLsvyuJPaiKMqM7hDT1HBoqaorSsTjhywLJDPuHFb4vAVkduHKTAjCE9P6VXAHbBAJsmkWRi",
  "key4": "guQ2ZfCHWZxdkxgkQFgfhQaRstri8E8CfT9W6dw5XwYYWQUS9jHtq45fGqSQuq75H4YjmqB3bYJxsbcmUPistVL",
  "key5": "4nCRADHW4gRM3JfTe4Jss8gVq2UKrhDiwWk8BSTy9jRg4ZumzFDZE12iwXBvoZpUcsmMXpNHXseUFUDGYyWjCSFG",
  "key6": "2VocpgjwPmHRurMNbgMyy1uPkk9A4HCxRzMThxrFchWdj2o6Rh6zZ8qfTHa1HUQkzjaFvzcpFfnXfehEGUQVHTQ1",
  "key7": "2RPwfkcytSrsGi6Qja6oCWELC5VDwY2Sz1WVyrZME9Ho1G2rSPo1siPX2YboXcVoXSDGExLYTLcyEbyGmcqAxp29",
  "key8": "2ANKhbtahm62eDZGxpHQypUUTXCfxKRe6ignCiD9BUh7vkZXXVR2qpgXcKsUgCWBD5bCAhW2wSxAadwqd27XfSn7",
  "key9": "4bVvi5fmQ2CxM4VZnmxzJReNRqJpFzpdAig3ncSHYP3tw6k4k7Sc9TEhxsVPGFGEzERTyqb97XtfpuDsw46S7ehg",
  "key10": "4rLA7vDRD7hEqmeiMwNWSk1x2eJQj4ZdUztWqAM8BQj5usAFdEyiH9a2xqHHzThjVNxA9kzDNKTJBTWAVzVB8mGK",
  "key11": "p5AUhBZ5iEg9hJh6WmpytbvpAerxChVypibh2y2FUKnufvZJNsDYH9vWGPNJEb4iW3T2jxu4Vo82iGtpL5n9t2y",
  "key12": "4M7UZ5qHfC19ZHmWDZ1xudSmwrNE8emevKe9yWhTVHBzhqjNi95gn43qmuYMhKaNqpQoDnt9MYYYuiRT11cDRnVv",
  "key13": "3hmr3yW2wEG7oB4JdZhz1UHwZTkAKBxm8YXvkj5a6dHD9dTTBeF422pMMFN2yLEU9gYJ1YfYo7GoMsAyVgVarwmY",
  "key14": "5afzFDrkLZhaQDxH8kBSA54UBfQbuxuwtZcSNDwVc86vnBEGuSvk4vfGH87UGF4cmwreFD1yc6mL6RYmt1HfohPx",
  "key15": "4VgHqEYsoQGx2H9iATCgmN7BdDpig9Ngd5hf648oBdFj7bQoC2mHHpNcrTn2cpipfKmh5cWeuE8a9J9k73PsAXVQ",
  "key16": "5ANW2CpRoMiqPCHMTqmUp28At7BzhAGjssFUEshTLECqxjv6FPrRrympDhutJAkPQMacq65wkjaESKx3Pj6oex2z",
  "key17": "gGjsr2S8Wc434aEg27KYczhL4AVmzGcN9fUxDvtgcenQsi41djhF9asW5KoPHybtkM2UaFhX6mGg2V6wGJKDG6r",
  "key18": "5ZUxwhFLBqgZBTdRe9g61b2LuMuy4x8MXJ6JxvLpDzaYn6B998v559zx4YaArwFRHYJMZknNhA2qkV4gnengTrvW",
  "key19": "3BBYhJMpN5wSnyFhRGpAPLAgiVMPPAu5rcwND1KJ4r44iJ4hbxZf3sCZf4rZdH9KFDhEBgCcHYCZRqP5pa2oePtf",
  "key20": "2Q32gQZR1RVno3wJ6dgaTtDfmQYZ1YY6tEn3nUog3tswwEeCeXXQGLjGtM9kEPaZ4m4VEJzMoYKw2RWZCEHKpKsC",
  "key21": "4nFHiVhza9Z4GvTtdBGb4kGhrN9wsKghMqxjPjDeZY2WiS8pxZh52HJhfWGizz7WTgwUw34YQ69Ap8L8kqWWfmtj",
  "key22": "T9nkqoKTD8egsVApBDXPX9ezzz3YgjXmeF16JEPFvM1hNLFzBEtAGkvAouugZSPiEUCJu2Lnct7AXurEyAYnGxV",
  "key23": "2S3gbLN7CLePWtN29dmqXAtffuSMVPz33NNXfKjAsN8AFYN97AN7rgmtW4CWAR6XuYwbDgddu6erX22Eq6U8YtwQ",
  "key24": "3yAMosvHa5fH7CfpdiJoeGfF8zYxYTyX6s4kjRbt2Bu4smbhRSwnpw6fagiz5wzToVp57owM3b6vVNFs6fzq5TGg",
  "key25": "26prsJR6u5p4MP9CjArYeayLmAoyfoRrK5JCEHHWG3nBdSwni7otTP7RELutwiqk6z6UGsitaP8dfePmNWescoYL",
  "key26": "2SgpezU3VRsWnpTJkTwmvZMUAbDG7KjovenspeSvrxxtLRpBYnUKwrjRxqbCDLGX1yeEEYfMKYFj4KuJkzD2hoFA",
  "key27": "5j3Xn4f2NgkzqpVShV4xX9HEzWRbck5fGqYoyWQEcjX5emcmemvvhuRg87DCQC8wYSAu3CptWHvp7xJCLNU5ksT",
  "key28": "2oWbLtFTGsRV3AGzQLHAHbuEEvnbmZRnW96e4LEHvDq49P8t8mpMRVy1hoL3HFwMkM7bvPvTg1aPxPK795iRX5No",
  "key29": "2tP41ugjKxjh7fCBEPQa1rZeNDPmw7coikCbtp4efTeRLqUjnvdWiRNmPbYzTjqYLCkiEMVkC8NNnezgZkBttrTg",
  "key30": "56y9wJj6qntieou6HRfMtUMr3P6p48Q7qdzX8kbsEfc1A95Td7bjYJG2pmUKAmkgCrPEoFgNU72Dn4uvqnmA8ugq",
  "key31": "3KkjB9reft3oL9YRHrcJFGwxBG7ygBvXwmcxtmcRYqmsmqwkxgY441tWADmzWi8V7m72oQqZ1L75yXWwJnrcgzEA",
  "key32": "5Zgh5QLxUmHxiNEFg2giqymdkLQJo868183kMxcp763U12x6o8xEnYJCkmWJLs5BGUeqjZYwKU1aaXhszCzca62v",
  "key33": "GBRp7z6z5ffU59yaN5Ui55nQGPHna51wzEzun3qunCCfytvbnagSkSo7fQc4nqVis654fJiHayH54N4TbetDYov",
  "key34": "5NbU9XQKobdwKtNJizzFCd24X3mouXHnbNx3TMw9mcgBgAbnfsBu7T3UPfCQFCgxjqn6qwwD4WSzrWxvqCTQDzZG",
  "key35": "2AbUi6p2J1mWtT2NqxmkyLzjQK3BcjB2xvvobdkydChuGRRZc53WoqCVr1iDiRJTCQa6mEsWGHiCtJrq2US6uDpB",
  "key36": "2to5uDUGzpLJApSGHxk6oKhHrRHzmTVZirU594MKktxwpfi7VVmmSEVzy1953q8Rir5scFyqVnzmdUewzgRzEFUx",
  "key37": "3SDNYJvjpYA6itiKwbNkDDkMCvupJYueZtZS55cRGjWkDDS4D73thCDA6kmGXmgAnKJrwY1rBcxRRHjeYV4HSvH",
  "key38": "3hLLu7APcCaKmStn8EEgKTQvx5bge7718jG3X4judsmV2qJ8ZbwDw4ttLYKyavBCeA1JDpEMkinmG1SFVzTqkgQ1",
  "key39": "2NbS114vQ4ct9Y9UsXaASUUvCGcoH3wLEGF4dgsffkc1M9uRTqNcmkR31HYQCghP2ZQLQrdx18PxXXNdx3hSCA1c",
  "key40": "28iAtnLn1X22oovCLXX7zgh9PrhMxgX6UywxgZsnavhJtZptAYEzxyP7jtoYuAtXZpgHnLsAWc1Hwva9kgLzek2Z",
  "key41": "3FgTgtNvUXLHmmMgV4rE6uPoUr8g8rQVmVpUBot5PRtE7XGGiKGvhSAN72xRxhhVsKzcHM2zrJGpujW3rmdVxbTx",
  "key42": "4DJ53UeKxBhVXM9VUp393VjWV74GhuGN5UYjnN48cLUdn8oEoyGTx8VBuAJ6gf1KUVJQQcKhmDvWXorNz8MNvQZL",
  "key43": "xc3yYYRzsN5Q6C6euqqFLCccbuqYuGoZGRgQgjPXr8LRm2KSRTzSGXSoyihzXWPH8h5mE5UoSsG7QmPpPXCtvmP",
  "key44": "461UuaPL2tUuKmLcoXRMujbtjiMZbn8p8DUu62HTcx8ZFKAbfARsgpp1MGDQLV9iqUceLP9s7STL3s3fV12naMq3",
  "key45": "5WiYKQJQ6FzQf1nVb6Z7BXRBLk6H5xCeqdu1XjMx4PbQ5uwpggJiKEeX3geZ9uRxooMseztnNxfRDajwsEkgXzoP"
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
