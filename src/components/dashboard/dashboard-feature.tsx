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
    "3bxkX8qRhd24Yzkxt9zfFepj6jiwhazd767HwTLthqfg73GxYsUGjBcF21w1N65Vp3RVaH8ipqJbxoECEik1Qo8L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bGUSPqJphBWnGnt4uhmBEL6yW6TaFp7mXoeUfCyDgXFQoAUDcNvmYvk9y7ZwCZtj82Jk6Tifg3CYJYZ3kohWK1C",
  "key1": "Ud1ZCqz7fj7uPS3e6isMPDUk9jjHrhbkcLd5CKXBQwe7HhxCRuCYpUtk5pXDcRhWgEuN61aRxJub8f2qNEsBMon",
  "key2": "2qJ9CNJJkRqQeXNg7Q8qP6ReS5CBJZS11RssV6N2xnyfcvG73YMgcyoRb9sL9Lup2zQhZpQf53PKWaQq6bJAePuc",
  "key3": "5CLz5VCpXh2ZGtzJgGKzGo1Nq6vovxJiPZZd7SuCESAF6Tk3vKMbAnLRmdRnxQD4FAr4sjtKn1gygAnbmNebxWSE",
  "key4": "6YtUqCvg1NJne4umVyDqMVoyp9aE7RoEziJPpbujMr9Cpuz7ZLSLoajCU9ChKFNB7skkpKUHxKzAUamGzY2AEDb",
  "key5": "5AQK6mZqte7yfJ5k8puZEMSfj9x1FtAgAUQvXHT3umLGqkEFzC4upN43cnFE1ugRT57WhiQa3gyn1gKDk4sHrskh",
  "key6": "5twwEpUwfxFzpRfmg3prSTYjDBfVhihcHASxj4YLdmv8FUtDwFURnCn6MKgJM4vJniaUkkmZ1FAmwty93fjtqEew",
  "key7": "3WfYidZr9Z44XjWxHxfj51X6rnW7ySnjBvHtMZm7SqFrCZeFm4aUDp3w4FgP6RJRXJ4ZMpUWCx4x2rFG29JBpEY6",
  "key8": "4GNoGffuaqqKu5gtqneW51SZuB3uhHs7y9PRzPRaCnwaPjmhcQuRwaaor4zzLY7j5K5VLGNK9ajVVh7Jj9Udovcz",
  "key9": "2p89wBnsFaANhMUApfbx13sWEu4tY8gQnNyDKyGZ2VLV7pdHkcyDsdwmBeBudDmArAinzSmkC9xXgoF7Rmmm6Dnk",
  "key10": "dtcjRXpUhnGCfFXFuYt3RV4M6HqnuXMCxfFEKnANhoi6vn3Jx4C4BZrTqVPUxNSPJ7BBnEJ3gagWLRsszXRujJU",
  "key11": "3XRupExPwq68DrNmS4TBwpRxzPYgt2XHxtSt4pEDtUTs8q8PVeGHh8AYpdjcrDVKUmscKE9DvBtL1pnN9iXE8JYS",
  "key12": "HB9yEBAxaeULxPabJvT3DUbpNbCsDL5kL3YGg38W43PeGzyQPwijuPcVjMCBdywuXroP784HL5qwFEY7M9MgTbw",
  "key13": "28KgzCmbAt5CKPUHjHR1XBKGNVnWQNnotNF8dHzR5rByN5D4kw6oSMAaKjiVgLNmDD4WSizQXqcmKxMWRiAUxpsx",
  "key14": "5zzD5yDycX4ihkJz6MCyaAJmyoYharSEQjmhVo9xVSoQ6s3jMm2tpHoYfgUcKZtCqArQbBhruNmVoYV8LeeHPqa8",
  "key15": "2j7SUXuDxUJUYQzE88cTSMSH52yztXvDuQvAdsut1ejt2SDNvUkkpdFUZGi7XCHorLsUJrjRduuWpyLQbpfR8niT",
  "key16": "5bE4g3Rq2ePMC94CByYyx4NzgYUBWcdpjcxDN6zJuQUNZ83tCxNpzTpBuZUsz8HHsCTo1kJputDgr2Sd5iUNTqo5",
  "key17": "4Wxm3Eok5MhE4sDYXVLCfmM9tiPRWuZLGfMGv7xrn25A2bE56QzZ7gjU5kUipvfkdKgJNdyUXP2ph5w1kNoEU46P",
  "key18": "4DbiyqmqUyQnzYbUct8VU256B9suBh1tQ5CSM9TjGLWgCeG7f2r1cgBir58ZonDLaXc6N4krZHczUKwKeiqw4qvA",
  "key19": "2s5rttMM2zuAtgqFwDUyb1AKZfar2KuTFcq4hJWBQNFYmANjfouQSFp4x8DbJhf78TMy4kmXfcmfYo8enruomwsy",
  "key20": "3NsqQ7pyfj4b9yvw5Hn1F8wscLBboxr3DPjLQ1iL7SztzKrYPC8R41XXnhQEMjP8Df9tKcjdpAQjPUp1ciXpfRQp",
  "key21": "5dzUtTbvFs7Kk6DH9BCpG2bf7pPn8asFJ8Cgay8bsBhFF3uT2dPBUc5QLpFm9ybvbTYZdKqTQWvPi1DEENpJvLeL",
  "key22": "4P8P7A6y7fHsXWc7PDa4HPhCCHnSPgf6exdkMHQ8sACQ4FKWrzUZm6Quqm1Wakj4zYSQGUM29Y8Ma79GU374wMUu",
  "key23": "2vi3NGctqdWrHUsbpyLqh9C2fdiSJvRTDUKJmu2morUiezpmrXGLPkvsgADAvJGzExXbNob3CH6av9hLRujzJTB6",
  "key24": "62ZDRsuS21SS58kt1x5FKkoWdbknGTMmFecnx7r4wkcBqPh5fteWsJwQGvBDEbmTVfbvLvkanumCkNhQwDofcXkL",
  "key25": "3SXkkXK6YzDHhrEjUWFsjn8QZq6jQuKTXxzPaf4hh2SNRxP9tjbXnSMd18v1tuXf1PtcFcZZ8yBq8QejsB1db7r7",
  "key26": "6pKW5JTfwckr8b9afxxTDgpBpcSRv5oiAKuPvVTxEZq63ohP6WkHyEAqW1pS7P1VA7Z9bt9Zg9dEprwfVrRpbK1",
  "key27": "2oiKXma3qmQnUCqJhrSDhxeq8X5UpP6CrtWXKaJsL5B8cBkYAggYkqxpwtoE6E2ZRUGFitvDuPTTtxiz44MymafM",
  "key28": "3cDFGu7jkB9QNtS1Ztnt6vF6wAtWKZRrPN6U3gx4Lyvr3KtukQAEdafQ3eLGMcLTLMfPAjvXtt77fCgi912eg43G",
  "key29": "j2brj4hrAUSZQeUKrkasUJN9qfGtCnY6ofjVnrUfzUhRZzdadBrvoaCoc12rC5CneaMVTXg8wGHqNW9Sin3U9JF",
  "key30": "48fxfbESoFQYzEZRHF4Jikpco7qXgkGfpD7P4JFDQ6eNQBg3pFj86HGsbo6Dx4LC2q2gRh72G9rx66HFFLbWoQdx",
  "key31": "627gYHKc9iYCJdk8zwYDN2skLGG8BT4WwxkGn8o9eNXThyojbQBUgqMeaEyBEjxfxvFbpvmwhsKDnsVdyNcA4zkj",
  "key32": "2jZvMv2WN313Y3BJS4Dogo5VpyeH3qVB6gvMeTeyU4JPakYieURtLTMtAPqXSe9zT73HFdzKeWHw7cQxDw4gsPpQ",
  "key33": "5EoW82zhsRq4ezyuxvhHpStdUT2KVZ3phx6LRk1gByHAZ5MV2XH8ADtF4D8MtXGuHUJa3N5kduXUiNhM9j3gcek",
  "key34": "3aMVpN3KJBb3Gsy8zuCZP9tf85vf8q4doXUgaEMRWisYSfRjwYVBDMXbfHTxbmGsEEmw8HAMJWABWWTLoyeSAMxF",
  "key35": "UPXFRSQzCm9Ut17bUh9uWSnUYxnwrxHV8txzc4DFQYgtDMcKNDrpKUpGgf1aeXHKqxthexvziiZeurLW4mG6p4H",
  "key36": "62iYFAAqkkocbmdK2E1Dexec8wnsC15yBFDqHcjiEA9dKU5qDgkQnPte33fnyAkURUafY4Qroa2X11agW7pQ9sYx",
  "key37": "2ZyYQpSJQgXTAaC9J9PG1F37aPHy3xUhxtvEWzjNCbkkjwuGx1ryQ9VpoHaK656MVFFyHirK5a3q5RepfpTyWHpk",
  "key38": "5k4kfKbq86hzMSUJieeC42aFFjUBUrtDLhXCVmjLcmoC3urKMB4EFKx81PBseJGyCwUApvwohjYNdr8p5qfxUKwb",
  "key39": "26N4utMdGmAdrLy4NPfd6NLmSNARWBt8CQpZkZ8TvmbCpTkeg1zVQFMwsBc6hJ6z4eh3EGRPxmqJEs86tYi1FVoL",
  "key40": "LfAybp5Zi8N2XTinPBNManNYewvk6gdCZTja55g85ytxWdRfoQw2ZCEbjpMHLijjT3JNLJfcfojqN5ZCMXckS5Z",
  "key41": "2soU2DJoZqL5S4onqdZRJMpnqCVmRSFND6MHcv2nRqXXqbkEdqtmR3wk1Pv9xrEyMn38EBmXMK889s4YY7ifTsqs",
  "key42": "26ADUbTQwjTcMtuw7tMuLH8p1c86r72VaEnG2tvoomuTXjfGeswphnwDkEnXhAUVLzYWdCdKsk2suwVMgbhaYLfW",
  "key43": "WWELGXV2YHfNQDDuxy4wTLsca2RYcTseT7pyXWsNtqEAvWctR3P1sJHKXA1gLqeAggUWxfnoJ7t97KftoZYAHqH",
  "key44": "2VJAx4ij1spNM3XxzBrBa4rF8XqVK9soPsGKmLhxLoNyASmnFXGCstxngCivDTxsi7kxQ3si8k85r4FWfqhFsFYh",
  "key45": "3bV1FTJAMoWAL3d6NViNYNa6RtuL92fUUFdgt6EKMrNeNFEUDM4uVNcs79wjidtr7i74pHj7CqWUYYSGTgd2YDT6",
  "key46": "53AwwMK9j831yzzKwPbp24tdXLv15Q9tWgR6uSq9cXZfAHzAdJXpDwSNn8zF6sCzLGU6wn9CKPWzck5TpudrdNsM",
  "key47": "42uFpBW6k6UzSJDF4eoE6hVYGuj5yXKE6fz1hFuDfCLbvPMoLfu2BpXDWFuySqgwh8L77MMz8H218Fnf7oqATYpU",
  "key48": "4BR2u44dBEdyNAh4tSh2N9kWmZYRs3LQX5SS9Af9BdozfF2MKSQQfpk7v9NKNHtEk3QcE7HdqjGEdL9A4cgp8vyt"
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
