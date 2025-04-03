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
    "5GVayaTeeNN4tHpjDZxY5wnSfKrR45JLmfbFy11oenc9ejdjfjysgFX9qJy47mbu1LkoZXTNVPv86sh7UiUW8Yze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hqfUDGunGcMcMbm1hJAuABYKM8rtPb6fbmXGmZhAXu65cLicRnyfWJnBigRaJjHwTPAt4ricytwJLfvwLj3mkbx",
  "key1": "4Wbvy6GarKMoUHStoNhyq9G9bJKZFzWXW5p5WHHRMcCeFwaN9uUiaA3EsFoNmGDUEkVW4bMdttBNvJmJCodRWMvs",
  "key2": "332mw3fVzNwy4CevBBQDSpWszpVzq4RAB14hN4wNHZPsXZ4gZ1xvJSgYQLVqLm6Vxcq4NAZAqrG4JVMepQHuig6D",
  "key3": "47BGLfyVnSNgMTHj2KYPhs6ShuPiVy2xcBaqqYtrp9xtKGdAx5gmmbdGPEziKBzFfwe5XjGE2b3zf1896Hcu7835",
  "key4": "3q8ryaZFexuzU8ytLpJXB2nHnxaVYtJdW7nH4dcRChC1McLCT7rp8XvRuk8FeGZDw9h92mHw9NpBtuWjSqUoFDy9",
  "key5": "2AxB5DPcd4Gun1zdNeo3DHB8eMWCfiURxLW7z5PKyo84iHmjoMxk4pcTPwhraJFMu5C4db6RzS7DRaGeggm5RA3S",
  "key6": "5Z7vLhGmoS4numn41QNuoDkfrBb8X5E5pbFVRtE2cETpmiKAud5DBBKbrnQQYDdANz6a25LDKjpArj1A1Bbux1Hu",
  "key7": "2vFahkSV33uEdGRVCskeUWrNeNs9dZUAR1kye2tjMnZsqcA1rWMyE97omUv51P6iE9KXgs7GmUUNZX7Jj5gJXbGu",
  "key8": "3RhK9eyrxHGZsUEtQaRsGi8iovg6RSGWraoeBD6tqbLQC9bfzgk89mz5WBd1NdCzHNJHex2YgoMqNeGPAybsDjxG",
  "key9": "GeKK76ht8Le18WiSSD9gK2ojK1PDbmykk6xzp4UYFJBFko8PzuwrjFDgb3XefkXHMgnP3bDQPNA6os3KdS36gUn",
  "key10": "3uZEDvbRBR3oKtQKEg4HgKG3jiKaz2kpot4ELHDhrBa3nk4epsS5MyY6uVbsuskX39KVuSRJcXAmwxqi7X3wESzo",
  "key11": "5zJNUCBdkDSSVsaoz8hFMHFKN5oCs9VpRjyWKtiroNQp8KV4n6SwT3kAiTk1THCRTFarisGHSNp3tSLizFchikjB",
  "key12": "4ajMbxsTfQkxtX1cMe3aRnzz74nZCWs847jxsaRZCfztQDnEwFS8DmjcQVa28kGFbL9GW6XMtnRsSiGed5bcJqbN",
  "key13": "58ui7Py2Adhn7GEyjx7pY9a92eMd5LePLpTa1FgwWyXMENFaYPVBKSYSooX4xYF73ptEdB3rTwpx4JCCh8GGrtpc",
  "key14": "5rppKnLLmiFsQu6mtSUqPx6R8Lmo7a1eKCKk5JffGAj9W3Ma2xjZ95D126rZc14cdk5qLhB5dnTxVP15PTE2cZz6",
  "key15": "2Pb4mMom2bkvtPpyYoXXXmmwYgXPzRijUuscYicp1gWf9auLDkh6htz3526mu5Ws2prwqnchDa54PTDJk3P3EUnn",
  "key16": "wRcpnrxzhFXPJTux42PV6A28LoL6FJ3e8xMeEBXTFYpmCnkBh2QJtNJMVCfwUfSQecukLKwdJm6JYbXmy1dSv5p",
  "key17": "TPh2nQiDon8DUUBHn49Prcr7XAJQj4e8HfDUESX9RjkxkmQVNMqPvwqBAk7h5SPkMknsoAssYshsyZ8xZZcyxND",
  "key18": "4b9bT7w1BFYYuELuyvve3KHDBXV7Ew7eU2KDpmQThS1nvm7YzjsZnTNCG6sGVi2BhkqvWaEvgRhK14fyCi5v1z7c",
  "key19": "5xdyUCAZuUhDYRNZTyxXLdbBnn1XfhSuu3gRDDcQGm5Xa8kJhNVJNPsBDkyiKMpxoTp7bAPtyGD2hhBcvbzrs7KN",
  "key20": "4JvRto5m89ajve3Q1eUtffxds5vekaKCMgu23jPDjGCUKBVhgQbtCUj6igcHeXMa6fZvukb3rF9fKf7dsZ5XcDZh",
  "key21": "4a4Mk7pp9E4tZQXxiPG785hzTY7wGCPfFmdNRwenxt4vRxCvn6gkUTEoQLgNxydZzakhRmcChkrpS26WQgiz5K6M",
  "key22": "5yTG7sFwSrfGnr3yCWhjdqxdYLaFchsK3kdsYHCUrFxo9m37wTr2xVoBYGMghrRh2uj3Qf47pCZuWhMwb315gyYB",
  "key23": "5GytnLuhV176gXGgUBTmjewVnN92PNzY3UYXG6KDQSTkjrM5DarbKAjqZLc27nUFqKgtXrWBfQKzwjUbVsu6Cx4H",
  "key24": "5mYV3Q1PYtFLkAUeRg32pst2oQjhLgdSSYz2BEihHp8K5eHjYxDurWnAsNbPcGrMfLintZnNrHnvQ9MyTR9jhYMp",
  "key25": "3GiXqyRFaAvKfNMEZnCru9ndY7Pvn7Gsc6oWzkAUY49ZhFyMfsUVvVMJSchwkvTbQL8eWQVky9v9e5heUsmPJLRF",
  "key26": "3NtfWrEUA2fULVGAmpcUEAVTorkfz81ydoESBq8RzFdzhdrkEkWthGgLUfVxA4HjMH5suiyNQs8iZnW2t5VaYiPQ",
  "key27": "TMe5WuUiYWXHVHp6kFt8w3KWHUgDNJ2fUhpdhiCxnoiwhfMrWh5857sEUKhfrmThEQf5m92d3xt8MeWcnKxRdQT",
  "key28": "51MPBxZeB8BJUYRxsi7yqXBcNEwoEECoW9hjmHBGX4xQnnWxFWLn5aS5MZ135pNF7dUyUDuENnPjrWavoZw8QBbn",
  "key29": "4NDQ1eSkfYWN24NnmNZbEZbvQaHAL2hD5iTDin7pyJ9Ws1ikXorhJoUrS34YWiC8pdLtD1Wm3zpvxcdmwQzkNBgP",
  "key30": "5dYgeLdxWpQ3CPtdbzeqx5gDrCX28F3SnNvvUvi29J91yqSW9qi6eeRPGwHPxi9RbUKAKxoEBedEm4vUnwnkeBHc",
  "key31": "3xardwnAiKTXuBdpVf8oaGdHP1JF7T2JsgEiNbXhF7M3KuxtuAL26vzqNXs69yEaaYtw9ZbqedktDWimjv7wRr5W",
  "key32": "2VHQbdyB5GKrb6kkBgSeEkZo8aDfEekKjhUSB99yXeKqHhHh2tzJd3VrAgPpTcv1yCi4oKNdG9nuJL64Psq1Zk6E",
  "key33": "2r1coyJQj6Ef63SzeJUqKfTVED6LqbBs2To7pu7qDvRLF9KHPwtapbkDq4u6D44KnaHcXzEVyR62xqbuK3KFLohe",
  "key34": "4RbU3bqKkDdAX1J3hmhK44zRdN59uiwCai8v4xo6RqZAfkc7fry3kpvStAkK93n1YpMrbDPCHXnCxT2p33r8ZYNS",
  "key35": "46WJoc5ZmNLtzYUtpjaQqU16pVXh1FpnXinpQCKGECy7cAL6x19Tx5V2xf2WfFvE6NMytYNUoGugZ7e9Vrk8wSK",
  "key36": "2BXYXrtmQb8S7haGtLP92t1vSpjMWjrC1p8BnRGLNQUiTLTS6FKJ6nX5TEcuK6kS2VJ8ryVJYdWw8Dv5jUBsvaC7",
  "key37": "2yxLy4pUw8bkzKZ3TUUiXoJwXXE1xZ3j6q9wKBcxu9hKQg5NX7V6JLactWeJcf9675Mx71UzU1fNzhXL2g39EEns",
  "key38": "5aDwKVm8hQkf1Z3SSzPNjhvK6gR8Cw4v37ycjLj9uqLVSj2j4FjtusZDT7Mh3UwDdBeUn2wcyKWbbh2GRbCcrWmm",
  "key39": "KfS78RJmvd2zpyewKp1q8BgmUHZURCCc8X1FZS2jBmS3qnpX9XhpCa5xy53bbLfZYthxyn8FLRVFaws6hjBzG4D",
  "key40": "5SGUz8Hcc7jGWnu9Vmttjr4B5dzrstjrMv9eqcWf9zYhYbHZBUdAFYPYTspm5cNAxbRn2RzdwDRWD6tWHMPfKuF1",
  "key41": "2iEP1QwujjHButZGLqQUEVaMLVo8Q2ZTwBvng6vB6bDStxQfXEMdTHVLz7c21Zrg2X9gsL6xGwGbykQHXf9BwhN",
  "key42": "3iCqj6nYoT7xNmJphrdd6uQYfMhyXajtBf6h25dLFdTyxCKzhUWdyqRCZDgYFWS4PuUxekBeunWCsGP6H3R76p98",
  "key43": "Kh2EpsQAqcQsXE61SuHsmi1SuWdXsF54Fmw3dLssYmRWrQgH8XpX4tN58UWpmifAxYtMUa5CM5hurGZXmouNXZu",
  "key44": "4pYaiEDdqLsUeStea34P8k4z63aaMHCeUdm4zthTaZ66hdJjDMBNGs4Pbifhj6hL2qxGyEXwrheXyFqmB9x8noNr",
  "key45": "eY73jdUEdZBbGbn62KpNV23FG8jZCMgtDHtEydjZUg7eaMdRs3BcWUnLi59j6b7AffueBwwDDpQYCLLwDh5c93m",
  "key46": "3dsBrVF4J1SJBGat2X3TAkA98u4SuyuGjZZUWZFQq5JeRD9HTSgxbZwbbwVkqzubkpFHJsRcJCSF7g5PsmGbYHYi",
  "key47": "3TdUVQLToKU71rhv1mme589UrPjfHn3Vuh2CLYofByEmtrqnJCvxqiyfMr9xA2CP9rcjimemdKreijRNVju4ywhB",
  "key48": "Mf6ghY6gwEk1iZrsi4it8FGJ4YxYuoCrtg7r41RSypZz2ma6T2P8UXDLZisNy44QZtdfxU5Aravcc593B3wsmsN"
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
