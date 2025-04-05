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
    "5pQ7hpVucPQq5WCaVgEoxTAmViGbNtSk5vjyc5vNmAHYLukdREK75THMJzBDLZLHyUXYSJWt6FrMZXPV6aYuvjBz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LggC9t2Rd5D3A1ceTodRzWy1w8o9nbsQCCH8yAssS8tHkRNo8mccaaouSmWzxPWfobYenfGopg8gmvNfxWAYt5Y",
  "key1": "cvtjcXyYu7rW5VxnbEfSKPNW8tLwBFaGEKAMfZg2T1oK48fZYPWndLmv5CjS2p12ogawx531GC8atQdT5V4EzRT",
  "key2": "5o8ew4jHiwkdQP2ZkZieWTd2RBgcuZo1tKMDLTJ1At1VtDJEr8b95maQnCTb8oztVVmLrhKWxGnryt8n4cPN8w6J",
  "key3": "2JV31gocvYqVj3bzB3P2QikyMDzvnF5BUWsWKxWAUuPP2nyCC4oN2EA66W6xS7hWRhhgpQHUY6ciYQiTYJsrGCV1",
  "key4": "3s3crk3xWYF1B7ZF4anr1NfZpH82GE81QPKqtgPNMcJKEjx5x1hHo7p4W3sP7bCJSB5EWuJnAgrhiSooNhVuKZiz",
  "key5": "5KVfd6p9Ye2Ema4kEH4eaNidCZzVnq2ZGiMjHG2rcqFYPHAyEHUdPnpMXbJeufpGVSWnUQgoMrzxZ1j33dWZUcYu",
  "key6": "4a7pTySCXdSDnJFAqk1ZqdWaArmtqPZsSMqayCGb6rYeaYQw9JSaVH8hbKV1YWVo8G9SvExjbjYNQCBErzAbATLT",
  "key7": "3sEsQKcJxcbRNxdKoMkoEozPDH2FeCBACxtgmGd8mVB1oFLMJcRMPB6iFsLckExAnh72H4tFomMkiNQ1dCquJ6DM",
  "key8": "2ig183M9XMhnASySmabCQotmEmqamipooDLvR1EDn7DkHNatkD8yuEMn12qpNW3Tm9zUct9vWsCvqrqRLjd2wpaJ",
  "key9": "3dVkaMWPxQZMnACkdNYzqokmeQ4Fe6PqC8GjS9fD952jiJERSEACg87hfzNjbtXSTzMrnrb7CbtzK4vmfe6buRPk",
  "key10": "WsJ49eaTbhgN8taTe1T9xNqqkdZabNz6fXwuSoSB4rEWtXj86oA7Z6X7oEy1suLDh6Kev8kKi36cibf3tZjqzv9",
  "key11": "66qGECXdEW91rb7paNaYSa8V6PGXqzHF6vaWxfSh7YHXimFsvHrYm4przLT7F8bUwf44ET34bSiw8MCBnbPkaKon",
  "key12": "bQ8n3LTS4pF2ahYb3wosKpRnKaXaToPGpGQ4uvMCTocDbUpfEhNZFXJSjR6q5wNC7KP5GBT5BiaCRJNc7TdZwKR",
  "key13": "yGdf9uJwt1WLrm4Cnf87qYWWvAjHHpeAhBNeKVH3CvESkKARvR158vfAZgY98tjp7SNbiD28zrP1XN3LQpxmLrw",
  "key14": "49fWZvuoM8Juw6SwwgsCeXcnvX4eRYTfBawUjiR7hsbhFaorY3rn5xvwFkF2R4PZjT72zz9th13h4BhNaNXfyfzA",
  "key15": "67Y7jfFvqoeL75BsPjwCBqC783yHUaaij5mxio4hfkLWQBKvQMgfA8gV1ct3aEpTgYWPaJZovRGZ5Lcp42ejzAWU",
  "key16": "2cfm8kC2oJxoLzDyx5pQQUPwKeQTagN2rDvZaxBbav3SRe5ZMQhcpidZknvPAJoZLrbpBa4BSZurAfgJhCBKSGDD",
  "key17": "4M8EniHDcfVVgfh16BMewSXVGffWCsTXATahNQ2GbseXfV7vL5qXECY9z5w9RNbyWpnHkG7jyf6WJ92PGzrtiJhQ",
  "key18": "psRvMVRSz1fAodxYMKrP3PWDm9uqb1wD5tVbyuLjfcNxCnRuqCXhtBN27p6Pmhs3oNvqc94uvHernpUGJKgrqx8",
  "key19": "uFRD5EoijfvMHEXbASWLBBujDabrYhB8VW7jt92og1vKSnCxf9R7HvmWATinWZijLFgoqfCMSD1232CzuTCTZ7e",
  "key20": "2rZ6GgUWCj4ehL2bRrBj1RXVpmvz1qG1CezwPX8A5LF12XF34JHQBN689Ef2sz7BU7HMyM2SPFi9d456ZyNY684J",
  "key21": "5LXERmsXkWAodcqkyjKoKzvzKDVa8zjW1hrNSC2vMMjnERK1D8wM94GHnhhqGYUVw5Ktn3LB5qqmpaCTbPdY1e4E",
  "key22": "5UFsxmAdKuN9Mg1FUEeqhkFp9LKJm6nWfi8ygUejisp5Hn4D9zzCnVShBa3pnWzi6P4Sxzo5aUGqgY1f77xWnDS8",
  "key23": "38Zg92jzhXCdr73dVUCEwKQhRgJ9WuKGmn8B38mKQjDkpwrEHSoKDE2fRJGNbvVSG91Gq72foegYoJajgZynMpBo",
  "key24": "4pGX2oSpcSWTbgmi7USNRs93KY2zG6JE2Rjnht5ZPsaCEqq7XAFxEMENdEAAP1kMUxMCx6UngmD8iAWDJ9jPBjjH",
  "key25": "2LF5gPfdp51VYFSARmekkXygnqBvZh5nzGwcad9MkfpY3YGa8Ru1rQNreTVeF6sgByUsuudiUHT9865NtLUvDnZE",
  "key26": "61zkJrymWTgV8ond6C2r91g428LCHkiLpEAPodqb2Mf7NZ4r1fMQotGHnvScBY4Jo7nuqzvhHaa8Z7n3XDr4g1cA",
  "key27": "4E9VRvFuyXFfiJVNsJvS9VaoC3dConoMmaX3xkMM5hyiC44oNaWPmr3nj4ngwqZFnYhpCH3Nw26ahJkTobFCh4xi",
  "key28": "3Jv3WTdaxTZ86k2U8kLaqRTtseBtFwdKS8uemkUaoGTvKPLDGHS58RfcovveHP9JGcaJMnJtAfepr1K2pDoCN4uU",
  "key29": "2zXjQzLQXsbBjstSrxh7pU2zfD7m8Nca7a8tJ2Y9PEKJjtosZT1jFBCcPWUQqegPxumSHbD8kwy7aAaWJJ9fU5aq",
  "key30": "4ScP2C4wv5fucdx6aVZKmZxALBFcrpdJ8WXZcJ8V7NxWpFfqhicrhZhv82U6reDijr9NWeT36HN8fHLytj2Fqh1u",
  "key31": "4yG4R6nM3FpB7ryoBbyS2jff6s5UWbXMXdPwGry6SUu7pgSoAHf7jKGjMQip83sKWc8yau3sSUUdVNevT9Fx2g4c",
  "key32": "3mhYZ4VFzbivYQXGtnYZxqouhzRWjvrFzrdVQaveN1MN6ite9LjcDLK62s1JonzvRqEmSMvFzYjsz32aKmnqUNnE",
  "key33": "bR6C6C77kJHDcqwY2txuG5VoUCQ19MrqMGfoadxXnsfzvverrAmfDi7xTY2JuJZHn7sXmJXahaFx2xNg1Py5M8U",
  "key34": "4Q3F8osSfJM5EsNsRz4e54ygL5iGGPuEsvKpFEW6FAPdk3di6EKa6YYefS7xpbn7XjBEeCf3wmcTU8i4AewMmaM1",
  "key35": "Sxyj1d8P8Y3TKA4ixwC8wkqL2DNTd2wKDSX9pdz1PjXEzn45TMbEft5urANDZY6NLbaKLGNAhWGKgTLrKf39eth",
  "key36": "3WDWk7sU9qpKvCVYhtZG1dmficruVLrKXn9Z6vG6i5jmvC9b5Mivh4phgRkWz2G4CvudQkYGzzVaHqheWukpcDYS",
  "key37": "3NYeG8eDf8Y2FebJdk7P1vQxwQZLjCbw3LaQqJChCSBQLPtQHGqcpjiTR64t4UX7E5UL1kjJgoS1j8KmhWLMSBCU",
  "key38": "5jTA3ZLAt4vsRn7hqkqt7HfXMeuphZrtHwwyv8RTcPM4X6rB1cKX4S4eT49phND2xPgUUNnHTXaYNxiyxmqBtHaC",
  "key39": "2infmCd3TrCQ7ZxpWECm7htrjAbzzQFZ5UxTs9r95TuqC6urCBY7GqUMGReBG67qQsqwcmHWW9zb6iw2gcYaXB1y",
  "key40": "Jz1nmxUga6k4MkFiGZTbtrW2uxMihN4rh7Q6MyA3vx41Y4suHGbC62XqoFKkyy5X7i7L1oMiRJvyb1wMtWS5zWB",
  "key41": "2LDG2kM8me2k71gJ1U9HvVDxh1EmUDuXApQp8YGhunA5gMJtmPbL81snRsifirWV8gPJjbgAQ8Hxp8wmuffP4Vj4",
  "key42": "3dUKb4EoFSQHk65bWMnvjVSbKPPntBjS86TbcQSeke1sLmMtgCeS9XrxJN26HCz6qNs1pN6sqjN1CqZKaQxCGecg",
  "key43": "52JBha8CVWcAb8CX79KxvAeXCVYWnKUA3p5iEc5mht8ucdH4tcJvsYqJhPEnZHn54tgYcprFPrGk5jTXaKacaKx6",
  "key44": "47fWtVwWtABWHUVjWjzyBQ54XSQP5XuBKFjqPqhyPUoSSpYsyNSYLWPJmReDrxe4srS2GAiPzoCJ9ums2TF9bp5i"
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
