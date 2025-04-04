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
    "3wJbPZm78yPaTWf6ySRddawy543HZ7sog1a4nGkPPA1Jg8uvcnxRdofg65QcApPJ9zKEJoyK4kJvqmfGPcNeD3P8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wgV9JjuEfuRFC5MFBRjrXX9FRz1wUh5XLFbJHsLbFTTqCD6AE8HMUrmjKXT6YDGKjDnkHah6ez3d9XxaPvG78QF",
  "key1": "5mf8mGeVf9cV2CmKSc36STpjCtYsHxuArcNbM1TgWJGAiiRRgiEowhbtzMzvtYcqidmzXEQB1ctWNJEYryCYqehB",
  "key2": "3g5YC4SamxTv2fdZ4TDQbtJm7xr8dv519gH1agenX8xyMGrtmy4YXoxMgd6D2f8YgFYq2heLgjjwKVN8SxmKFgmo",
  "key3": "2zjGqsFGtHSe9cenDAWEnCYJpcu5uGKhFc6j8c4YMXwCHcePZEiE8S1NpTb6HS7vKHDQp8e2zSfgLz4AfNsMrmnE",
  "key4": "49hjnfbUoMMDWt5ZtcD7ieNr4g4QpJHCdX5YV83TxF5ehawGqjr8HhvFiiMjCSBriRmSmu9EWF1ert2YJ88aG8vi",
  "key5": "2vvQPJcYp7sPWGfQ5AkSALsuK6Dcm5b1cwh9FJiEaPbT3EV5J4Vv72srMxe95qCiDUUN3XPu4iLfAr3FR7sm4CXR",
  "key6": "376TYDsABuJatSgdyKm9XKM8LVswikS2DCLJ1vdcwiy9GVwy1mYezQ4sjoHR67xY2JGA2o9pXfsLB1jnqrucpUBC",
  "key7": "45JRBsTPa1zg22KsM4QCEPgtAkdzMifKZCgwHf4xVnEYd8xQiSay4AdJyqPSpgBr1CmVg69VEmCkLtmzdC8iL4RQ",
  "key8": "3kDZ9Vu22E6vFXT4jPD9HKzbkfRtUP5E2TALhaM4fYQPizCmwRpaBo5Hn47ZtDUL6cS6SKdmT8G1ZiKTbu4LJgCP",
  "key9": "3TLfwrj6LV1V2g2r1v5nSdZSGKNhS76AyN763dkBpgWpgKNNpZNE2EM1C6GsifK8wWyzknAZnqSBgPi7Qyd8ofCv",
  "key10": "5FSAAvJCRSgsZDN7fC6n96qvRac9HgyYVHo7K3Q4YGcqZQY5iQBNzJLgrnHRbXS9zybbczLr9gAQiVpmmLqePi7m",
  "key11": "57xcLHf1pAS6wSLhraoTSnTgpwYmmi9mxXamqHBEFBsmyzZTzHfvMsK9dbhByqKMRYtTPS5xV2NAD9a3BHxdSREo",
  "key12": "5RLZob5rtK5WmxJtyYpQftBPCv8attQeoiGUHtfcTHK3f3YYdT3yGMChi67BPapFEdFcdApUsJBiLQN9rW7w5KD8",
  "key13": "5gxJCFBYAGDnae1bsC1gzrCGJZWFwrpygVWxqh65VXEVgCWUMPUjWYdRqEn9N7sZZ79oWRuoUUFRUPpR2hpL8eFw",
  "key14": "61JXXFuigJx1E3XNtwj4so7wdrNFGxYLMeWjmoiAG8Nae2nyrxqQp6vz5HsAgwv4pW4QaKjRBPJsR4bh9EJmkEby",
  "key15": "5uDSAJxEJ11CRE6SKqqVs6t7wBy6R9VoD8BGiLK6mrDfB2mYvZ5iW1ZsqaMFG2q9muhnATS2hWQaxznGva7SnqT3",
  "key16": "49VM8q6iS9Wsdpn2kMHfUfRwTHmE614Q3iPo5ywgiMtz8h64Jnz8Mt2NbsSRyBfqsLjHzqJXPNpRTJ9ueGeSLEr7",
  "key17": "54E4VVh2sqVzcr9SXTki7CC7kTvSztFfd52F7kNhVKPVbc27dohLnU4JAWrTZv1Beq26V6N83A3QcFpf8Yoh7rDi",
  "key18": "QdSrrKrjkMr5GLK6SHM3XUzPVRNVffyD5zhJk7cnk5bvTxNB1FrWEGkLz32CukN82AeX35E1WJZui2JfBZw1xNq",
  "key19": "4NNHCNNhoqpAGuMY4G2RJ3p4kkJ4GaajvM8ioyf6nzzSmZget3pbYXgPJrHbyifGuVavJH11WXXnKVhnFvRe7atV",
  "key20": "5BvR1gJYvzQhRqQuPamFHoUmfgUgU7dQLEKCw6G2Y1DMVq7WRuio4ocamGRWCxqpxSHzSA2mPcCrYZugAGynHfNf",
  "key21": "2uQpiqNq531jr5ecPSH9wwfueh6QFTj4cC6HEjV2PxfNxvbYhn84rAiUTNvxTrNmvxeT35SaXbvwasR6pYHb4No1",
  "key22": "2YnRXMp3CLuctU7yHTuTzbBKZSiBfmo5PyJsFHGU4EXhn6XLHb2WwNEvk4YntH35GHE3dJ3FinKMB6ibpfqaFeh",
  "key23": "63TzXQAAxmvMW4QKB5Xjsz92vRZX3Pae7YqT2kZF5ucFCuWZNZMJqXcL4DL26KvMqcsY66pis2MQSikLFwyZ3Wen",
  "key24": "3iVTLC9scNws8qSF4qvFtiP7ZLYKon8YNkp3bmZ7msUYsnQkbRc3EWHfLiGwLhhmLrH94LCx1jubN87rihtf5C7T",
  "key25": "64fdJBURhuVwWSz2ewUfaL4KKsufEepFujXzkRkD9qcaTb4THJkEjmhBqRdXF1fQWTBfmzLdnaxw4Z6WAQWs37Ea",
  "key26": "5Fjw9rDwdhLEAWnwU4u29DsTruWVJEmsGfMWcrcLyj1VX7NTYgfd2Cz6E2Cks3VQfCAUrCg8GjbYoLYRgoLJHS9y",
  "key27": "4NrcxNZoSkfjswhhPZTGEawJwEwpA3oND6LHt2oz19TaVY4M5oXtZMNSkCpfE4tJr6Hd1uENLeanHb1Twqp4YRLf",
  "key28": "65Qoiw3re9K2wcS6g9UYApxfkhwJ11FdigrMz5eumFkCDmfHcQWQs5W2MCFRTLYdg7KHN9boL2LFhM5rVJjAnPk6",
  "key29": "5xuRKRcSXLk9eqdi4q83mJWCKfdxeJNbxNWLW8xJA7zyzUmsYEfKunqGN6qa1yqadXML99eBJTLwJpcLzrGW48v9",
  "key30": "2GPsDpC2Km1ti1SDDe4vnUHgbDqQAMGTwEbhYtTpfbczNUdBekkciTnjJg9aehimDi5bd9qsCtQPrHjyq4ZthfG7",
  "key31": "5afUts3ogngFaJ4hTXYizws3b26uXmmy5mu94icaMLwAhPcvBGpKXP5Kwj6heYRrDE8N9T4xv5unihwJ49Rg1WnA",
  "key32": "5UTV3yBkAQsjXscvvLALPqg7FT9iXy5TEUeQisupijZ3i4QWVgpC1ZZRSgP3aoXUgvA3TaXj1Qpugz14aAgGFZTZ",
  "key33": "5xz5vMH4GxEYVhJRUcezR7SY6ZZajwSERzDqtU8CkYGQQ9Gv3BFG26dKMdvJ7u2p1iUDFHFMEf47uBcKbQJxAJJT",
  "key34": "5e9QWn8CH1SarNW8Uerx8pKHGTNBa1j6ve51CsvkNMbruynMcHMkQWYtbaAhYDHHJxM4KaJgk1ZuToEowPCdgjWb",
  "key35": "58EgpGvN2d6nTVSVTpAosevUz8tZSCk3BezEd4TPKY7yXSqEbqM6HokB9DDs82byqqXhaxSHgnrk1X4Gb4UaZAdt",
  "key36": "66vLWL7oxtDvrCwiSaw4rFGJbBCR4zGXBYMFwpKVU6NNXnLdVJS8VbW3DedKDYeV9LhBngn8PdaTLTmC1oHe8xpC",
  "key37": "2sFHYB91dkosSNJP81mL4pvzTVavABXvf5L5LypaFj1228AndHWHfJDdpewwJTVs8YQkWxXwkhqStX5YPy3qz5BL",
  "key38": "2YvciphDyRv2NL4F89XzrUm7qfZDv66k8KovS6Wu3LR5hW6oTztt7okesdrjELrL4AnbTiTAC8iNkVwHyKr5F12d",
  "key39": "XVHm7hDZzxiztCiqBuKdbeP1ymtkgJcbsQjKs8dAarf6Ea3DGsWHuwH61XAGgYe5BVa7K56H83rUG9HLTgaCC5u",
  "key40": "5QG2ScHnhrV7jYFSSZTLRrsXoSaD25qM5eGXDwHFt8scYyjZySTAV6cj1v2ofh4VpBeJfB2TYT6fruxAZLtvMQgC",
  "key41": "tYYovtW5tcjfqjq1K6CKyDwWZHaRG341UBEpLSc3fgdTwALsiYC9gmBR2c8rbwzYqAqGdFB23BUtdUXuBZb5opa",
  "key42": "2Qg21iazV6j7rm9NDMtuHtY4eiTsZupmyGWYApYiE4mcinzE98vnLtP7i21NbtYc9SicjNLA8mJ2SxZSz3kir8jN",
  "key43": "2txs6tGcJvFsSAe4TLF7hAZMfonEFwGkzzvw22LvgyawvDrX4uyUftb38hAj4dwsUL2C8EjvMt1iXdchyvNf5usi",
  "key44": "24NTbYrFkFdQJpCueqPMKdgi8VywQU5rw1U4Sxze2iPRJsnFusqghfB5yW9wnH7RyowRQttf9g4EhcigLSrm1M7h",
  "key45": "5h148jhJonDiasJNYHZTsw1dzPsVVH8bvBfboEVeHEM7SnHZ1zmHisdXbH1ZFMHkJkasEfFx4ZwXCgo7wu2Ra1r2",
  "key46": "wBSpp3KpKsDrZxeHnFTbnU25K7q2pbD2HNgSER41ZtqGM3xvw1KaLXhDoH2S7QX3xtMxi61CN8Hq1uFakEKBfqd",
  "key47": "uidThWQe4DnGTzvR6gDYZKcw4C2a6mGRjx4oXwFFZtHK79FxkNJHUQRBa4D3cktwkCFsi2TAUG8rjjDNYmxZTHG",
  "key48": "K4oEHRcqHVmTweUk2auHaAAquWLncer1xTf4yVm5JtrnFQKmVXZzQ8osWRy6Lsj96ntn27ZbmisEwSdCL8gLLqh",
  "key49": "N44Cf9hjJTh1rgzRPkr2HC3d6qZEM7tSTNzZoHAdvo3891ExBHg1wCjgUczNM26QmLiZCXryVvGfv4HhBAGL5fF"
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
