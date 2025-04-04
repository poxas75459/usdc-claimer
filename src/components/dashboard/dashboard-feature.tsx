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
    "4o64akxAQS3srXRzWixwCJHtHybqvG1U2X2MQYU6hKxUFeEUf1Ai3DuHsvhADpg6b3eGKR5zywVeQFDn4ziqRrxU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tgymLLW35YCfYu96NPa9zVi7SZD2RoowPNX5MB1cD9NXoJAwyTQSPJ82iy2GW25zPyMJiTi24PPuHWcmAfU5B9D",
  "key1": "4y3FYrWbX3s8CVscd6A7iCzPVjiyH2z524WvCpuXRV5JP93idq4upsak7QUFXkmxDmDSYF2UmKLHXmW8oQkmsPWh",
  "key2": "3FiZtpEhkeXwVCrgqehUdYEarTBJEFWHK6X3cBZE64fuc2KtBXjLSp3V5j1p2bjQhoz21KvAe5F32ZuzCSE9MVYu",
  "key3": "23w8voiZZLBsTVL5gBjvaHCpnmbqs9YQ9kX3bSrsJSuoihb3nSeF1V4seYVdPxdq3tn5oVsiWuzKWRw7VJxtUvUB",
  "key4": "5f7HzfGz1RC1W44bip7DzFx8rJYnXod4KVA6G5zGcuLnAYmARXZEoDLao1U53kadAmEZpoKXvWAoGSU15MAac1nd",
  "key5": "64NV1gePs2Yijvg3qacZ4rkEaJ1yHKBonWVKJLn9xiJuVUow7AN4CYCmbZ2Qgo1VSUi9rhoJQaof63YGvV7pAJZd",
  "key6": "3q4wgnLFXqfRoK3Xrays9iRsHZz7baNCpftzDqpUFYpvausrpUgYCwMR4cAdn1wV5fruvAhFzX4F7UprZSFMzbTA",
  "key7": "551edC4suwSbTCGiWJP2r9xqcgLka3MurwV6DXBZj2ELhvmgCSgW9URgs8X5RnxMttEjdzHcTndVtHUMydg3cA93",
  "key8": "5Fs1PwK6k4bgVZvbs7hKYN8SLg5U4ihDPvVyLYrFFiBUp76XMnLXmVcDpGzQ6E2mu91U45cy171XvXcsuHNr2L3E",
  "key9": "3bw4GR53gemXBU5sz1oaNWqA12asAqsMpCRH2dgBqKfMXUS2MJW5fRynaWFadXsV5L3F6Fc4tqfCRxzGJJrB8Ywq",
  "key10": "2PNKScYU7ZtRU323xN1UWQoPX6gH8Nd4uFuwepXVBTsUXytSyLMf6iPuousvXR6QF7hybLyiHm2rhGQ5BQid7RVn",
  "key11": "22Ju4Jn57MAPUr7KSJ3gBbBhif3jNzjKax52KDMm6pizgLHDUaVZyDKXNXuwSmJbsHaommhJmqVkyU47KNrxU1jb",
  "key12": "3YsXzKSYVjXgxGumAqfhMLZcVxFGLtgDJwViTa2CKVaYe3ivJmxdvAatuiz5hqC8wFvfjVcLcyAAxuYBGjCbCNLK",
  "key13": "4amShn3r79bXbjXWVwk7M62Y1pdrsRXnDsMXbMXyko1Z1KvxFLELTiRvjFYSDiWXAJhMzmcCv8dHtUziKaMjBFjP",
  "key14": "2xxXgmakRNTvcMzRpTV7zXqVRveMxtsK5H8HsJ5Ei9zoFDQNEkmwwPeeRtSuWQFBcGsGAFQQWDyD7hAiaHoqRCHN",
  "key15": "52Qjxz8gX9f5W7wb4H5uRdvPjifT46khr1uCugFm82puGuKaftrS9xG1sXWatEF8JSAsbnph7Nv8vj6kWywwXMsE",
  "key16": "3QBZ4LsuEP57y8fL2BaBiPzYSQBComNWS5pDU3snMZwzvtejh5EPrvyfFfLpWn2Nfahvg41KrCnXpnoLJwTJns5h",
  "key17": "3KTS8A7Ux3seV9CwtHZZ49L3jfSBjbjri7wZnyoTHA3Yo7sHz9tHCDNZBvpEvEwmApReGAncux9RuodJfwmsbY9P",
  "key18": "2WZjVqyaNoJ5n3yb13pG69dvHW7kVYw2ZqroPmgVFejwFNhKqupVZCTfTkV4Pa2WBwykF14SpjPWHGADrAi2ssvT",
  "key19": "23WVnXPGPsFPrh3vkwmK9x3D4XGJy9b43stFqH6KSU4yvQs8aeJ8FY8C7dAWghWxhYfTTgN2wLtKCSxfxA2GMkvr",
  "key20": "5uRAg45JdiRCi7A14d2vpxqvazQtCfnJMAgsv197Gd47RPTXJP83EVJ7oMzKa57nGTyjuM4eQLjEqjmEfZFhMBaj",
  "key21": "rwSpbQ6rvdp3xLxCGCRfUEpTmvK5uoYqAGeYHZnmi4Zyd3YQM5iuakvM1MJkbuvtBvcrXo9Uaj4AHfYUVXnj1Qv",
  "key22": "nvrvMPrNiXgbAZu4FqJ9AydWn4a5Fa3mj7KuARrQsPx9W8yEA49HiSRfMabBfgcLUWa7RPHb5aQ6wWdq3EK7jsF",
  "key23": "3BrNCSyLksAiwfwbpqEiByDTPn1XJL391GCWyqonDkzMjbsTmagcNauHJFmQu8wjQCXQ6SfwQnMFgo6gVJtVhUNS",
  "key24": "2VTSXqJ5SAjLc4oKkFeZVE1kGPWe7xKNDSQe7gjE5qUmpJKb4L6VUGPow3z3M5nfGE3nm59NEm1rA3wwSicSDe9s",
  "key25": "ML5Mfe7j8rnKjcXTG91Az2QvvMZkNB99C5hRjSL2zxbcQ5chis3qJEKjZD8Q5yUU6ytc64wmFidtGc9qinmC967",
  "key26": "ARXMEaR87xjuE1zgPwhcTYg8KkH4d8JQZJcxfeQ1m1aGkiT6ktB14wLzLyL9biNXuKc3VRpyaYXN7uCVJTLh1Fi",
  "key27": "5JvNuXqwujTE1G58CRFytZpwvqeyyNWnMPpGptksKVxGVMZK4ABkvHBhnZrWXKd4twh6ZyWMsqsQWR8Kq6XnuuJL",
  "key28": "Na1VfGrx2fehpUw23iaaxauQwBi4KCzXcUg2ftY2hNAd1DSgd94FZX379VLRXhSGdibgdwji9wLquzMRp2zmnjh",
  "key29": "2uqoyRes7nL2FBwvT6WU3rh1fAsyifh8Jd88wsxVos8yBZ7XhbhX6y9g7X4rnrWmteJNqhiezv3uRxuJYSbZxg1t",
  "key30": "4JiwYx861hWtj92VHmNMX3F9zFB5DYv2K2CCCYzrmx8L5DKj694dswHkdWLj2cc8h1RqgzKXp7GJbHQugbCEJ5Pz",
  "key31": "4sfKLaX4Xj5ctK7TjLpEXDq9NZPAfjfdxY6yHUiJ39YiBhTnpQ3GPg4a7Mi1F9WW9edNjRhnY1ceuWx39zsteQnw",
  "key32": "61oSKxnV3YdNdbiPmyboXxXnfFrdyYXCjy9ZrRMd3NFgQgnXCRsq5HyspMb6gK4iud7wW6fQV46upSm2MTSroYV4",
  "key33": "5thupy6kpzurjqHXrm3J3tSp2CFdAL31kto3EqDJVWnhyXR2nm5nPqyJsrkmSZBsdx9HugVLvbCzH6sYijRSWrtX",
  "key34": "5sWLBmj85w8EkDrbregrrKrg1EZPktchrsxqwSwEcLGL8HZS2GFFd2fxdArWR3rNDxmpamyhVsbHjygw4riJcC8n",
  "key35": "hQquWj4kEdAxhFPsdnLSFwAQEdAwG3eo7HagagPmpyyRjaXzceG7NZNigB7ieXXFkt81z9KV7TMnonU3EvJp4cw",
  "key36": "o7bh7qG8QvAPc1hP2DswpwcNayqoTywCrNtMC1Urx7DGgYM7Tk6rR8ZxSPRBThVNqaR2sT4BQywrCjYXZpveMMg",
  "key37": "BykhfpLw3j4eF8S85gNEbGkuZujjwZVA3ebSVqjGcbAtmDfVNbpNeP9fxRf7N42thNTrwkW5JzMXfBTMZ5E6dpK",
  "key38": "41goQBEU8k37VRHNAk8NPZ94PfchKuXZZayQmHdESiah9Xcbo5WuBULBHDq9ZUVBR2QbPvXaiGet6KbeySdArf1",
  "key39": "42wWwixroc5r1coVsELCPEjtN6R34CFwkAed4X9YsEYhFCYe2JMGUnKvSnQXTrBfaEnzUqDn6Z2LJDyCL5xvGb4M",
  "key40": "5oYQ7LhV7Ygj4DgswAQ7rduXGdPMFQ3e8uZeiiQ2S1YUqiC14NKKFnteuzexjVHvKfWsY7d11SGu1wAsn69pVZ3Z",
  "key41": "5dzZHHpXFY4zaEZUd6XZFMS52mU5w9mueUs3915ao1G2euFWMzEBXotevWfENCrFsqTMeKk4f3s93wfWAdTmXnr9",
  "key42": "5PRL3ZYdPwuTcGidp17E17Jt3sovVE497xyMpBdh8Kwq9Z9FmmAwurzgz9tygoPEjSBheP6oRr3bkXpZSsBVjF1Q",
  "key43": "3NZsx8zWfKGFcKXezqqjswbqD5V7pd8vZJjwKKfoJ1xxrYEr7iFNAWd5nWPwu61XZGBxJTyQcpnc53SmyZ9voTEN",
  "key44": "3w6XtzhPt8Au3ZHZsJjnKKoTi5zvKEUT8MHZ1qS8srTc1mfb7nTeBYJ1pRxrxpT8d11ke3omET321er1WmrbK4fw"
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
