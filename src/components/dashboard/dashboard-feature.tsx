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
    "3EKJWzViMPTZiMD6WKgxxS6F6SdDFAFmQkT6CYqyUUdovJ7x9mTz17HzikXoxAnZXVsXsfsvmxUKYQCDdE4ERF5T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pqimM3rqyRNjbcAEdCqGjJdsJdkUzSrthpYnC1KwALVVMyxgYHrhxXVhdptCGCHRHe4BrH85HjSuKj2c69nvn8G",
  "key1": "ZGXnrS5JxboPEpoe6p3XQaT5h9aeHzzHYu967P5dMDHKv2hBCY1ufQN5vSiJNB4bvLcK8GbtcDGRjYL4B986XLY",
  "key2": "Z78z8XvSqoE6YTJdvpZDQQCPkLsJ7rPVKp8ZRLjq97HhqRbrRpKBQxq86bJ9r39xREYophwnujrQKWCoUJdvm4b",
  "key3": "KJuNqAsA3jFGyaYuF3MYB3T1NENXS4ZWpYrs8YA9h87xbj1eytrEqPgVyKcdmqTd6sS88LAHWrPW6AyFBHKny57",
  "key4": "3N9teiC11m2U2in1v9fkDRjxHuZoBZmZhnQRNzropx88sZF1nXrTyKC9FWYvwLU6YS9GGxZfkABjNEM6D2hA74td",
  "key5": "5MKj1SQrLVzXTGgyTTJMpHNDF9Rny2Us6DTJ4T4uyyEuSnWMUwhCR2YuZDAHC8pdPUsJDHAzJTDNugyS8dq7KLT1",
  "key6": "4DydGPMxgpfZaAm3Q7UtvbTwsqWRrq3EECnpEiYmRUKNNTxzDYvjY1dVgTZUqNMWBiF1gGcgh6jz39QU61XUXFUH",
  "key7": "5VGqdH3emvGPPgJVZZH8yyMySfVBkFPrYkKDxNtfB88iCW2n5qZ8kgajTvCP4YZJ56HXjKhjUnqp2tpMKHU5skCj",
  "key8": "NoNp4eB3TZkDRaLBCANvvdwU3aPVzsrTXZ4hKneGXbSbHtRSUw6tMgg7kkG74d1rFyYwKcQNwTUM94vuCtW2fZX",
  "key9": "5NbX6GoVUZbwdAQXdXwKAdedLD6TW5Y4B8PifwDVMCrEsU71qedrBKdNYqh2c7wjRu28w3jPRPSDpyuf6bBUEdZ9",
  "key10": "Mk62tuguZrVmAioNE93iRccbshudcCn9nhkXEnvsvsPLYEhYXxTrij7eCvBiD3kbtJt4yCjFMHmjwFbEx7pSPaC",
  "key11": "2689qoSTyyTGtkJPoCTmHssrpDivhEp6dVedxvTgTH7QgbQU3VY95Vc2mYYrjvJJLVVvp2pvBKagfC6KnnLphehE",
  "key12": "3pfKPsGHLNHs9wGLyF8uAbfBwDVKk1PR17TRgwosnyaUW9mGADgyx1yivCVTxX1aqcQUvyxxdQ3KNtadRa8stDTD",
  "key13": "3VRS3njXf955LAd6i1bmt1a8S6tcZyrmvQX5qa12GgxctfJg5x1rrikx6RYh8saAdCi3p8F9jbGgEMqCA67wn3qz",
  "key14": "U1TVC1Bo5MNSFt7pVEEBLL4mNhnLyoaDSQQyBB6ZSv77sCPwv7VKTBQwSetsjbmKEUKQzafpHzBF8FW629KLdya",
  "key15": "2BB5nQgxqcrYJcZaffFcCAzcVPCFSUQ4gpHEUVELDCwBM3rKck446BdU51zvKhcoMW421eygVVrQZC643pjcBJyp",
  "key16": "3BVNSeGHRAem9tZ3a21e77VTxSiqSaY6QNFmUFm1u7DdjVYmChsBwumHiuFGWDqsRRQSkxAhoerKHe5cZSwJz5w8",
  "key17": "57ehR7pF1Qvg43pemxDpcRLgD42wLawcJLydGDKet5K6EDGCiQdpRnr2j2b9QDvqtVXJihnuDfpmksFNzsJ1Few6",
  "key18": "4evWdh5kEEj1GpyJF7nVtAp71z3KbFJsVQc1faDpkeWhCWVCLLdvxUCgG1jWgiMUbmzPhaDV3yvUMymbw9g6fU7M",
  "key19": "4MyMnsSjxrq6iBgzRwMhR3mXbn2qwyqKX4TDgbGG3Gn94YFJ9pvXPFn2sMJGXeK5m9hTRzxY1jJXfQxhB28iSkep",
  "key20": "3a567YBXjSrF8HFGE5FouprsneYUVNSFas6VAwUtDKLemFzSCxsmVn3nWjm17DMZMXdAjBBRe8XyyHqWc8vSDA3T",
  "key21": "5WNRRsvQBC86cbrvkECxpTt4yrWwv2qWYF1KvBCz3Sb5BjPFrSSxGPX7YFnT7YngyUDgmMTsQW3GBBpAJNgFQqpw",
  "key22": "53fztoEFAvcTBMtYdLT1GBEhZPvDnPPTzyRc76hirWb8oHJxc9ufLzerxZ7PudhvgHRm7rP2cs8yyXiTyfnsTAAS",
  "key23": "br9d4aojkyEyt3wk7BgT7yfakWBxxABDMaKAWwKRNTJP9kTobM1iaxGdUMUPg7TT8jgCB3P72QuDXzN5EpZErJ2",
  "key24": "58APTYov76KLfP6aJFmZwszUm8HSFBC6qrgEtZD91cuxLBPnaxmRci6LXEvjqqSTgkEaLdfd2gmPSaEqWcqcD7VC",
  "key25": "46TqQApMYPfr9Yvgst1sLrz8LBB5gXm2TX6mM1wvYKeve4Pc5f6K5GYhJ7oJmovGbiuuERU4qud3mHTpDAoEddzm",
  "key26": "hJUMKC29qdhD1WF4uimAc3XL8keW4QSiSCkZSz3dMLG4XZoeNGiF3a1TYKpZqfro2J6KidHzXbuNaRQHxgR2ZE6",
  "key27": "4Vxc51g4Ufi5ibjvnotbxtd9B1YCUa6VJVoTQLDJmWYxreXwAvg6mZ9DhJjxLsAAgMhtkg3DNEftKWmvtqX2QyKu",
  "key28": "3JHAxbaxuCmfHL5FNMMKwQiur2UZAUbwcxB2ZfzLaUTHinGQGoxjYgW6fDXbs3K84Qk7qNCeCYuAdKDptyE76Ep9",
  "key29": "5uaf3cKTQEWXad43pCEp3AP18fH5NV5jWHauDR1SpgAxFABcPXXtNdpKkQC61WG4gL3eKeTLePhkkvaZKWNb7h2f",
  "key30": "5pbeZ4m9gDHuv72Lx6c9ot4SJKYPkNBCrptqnAyuBVaNqU4t2SqbrxYnDbTQeijNi826sTC2FkktmFEDasSSjKWb",
  "key31": "3GgoTX3RykHv6iiGrxEE3sHpXmKdCn4tpBGr4VQhmobqRGv6TmRJ6gu7t1AenLWNwzWju9CEs2GrrHRw3KLsiNH6",
  "key32": "2AhwnQF8zfru8EJM7ip2H4Je1yKD4kAwFGk4GeQB2LkJcgM43HxfFrSQPo87PxVyL6QkKvaHbq1mr2pEWbjSSivz",
  "key33": "5QZ99SqNEUSiyschTZL2tU93EummaZFm9R1C72VKLUPANFvnchp78QsQAgXejBVE1hiQYpz3aqihfYoGwvujwhbA",
  "key34": "2GmYZcX4EBekagSytCjnXGnVueydJhmHMz9muymFZ6gTGmgsnfNePg6kthy3F5eaRAtCyWci44cNY9QUJb7eBds2",
  "key35": "8c9jmU5JgrFZaMa9qJryyX5vwWWhtqHuHK3HzUvfD28jqUB87URCnVBRYFjd7ffWuryWBc2wp8sF3jyPkVqJoM1",
  "key36": "6vp1gxHWAmnNy89fwE1gkHKoTdYvAUkZ3HFNbxM7ot9dkwiUZToxoyT7zW82CMXTjMLJmEEycbKAme1CeGfUpyT",
  "key37": "f8xr1xBwASy6QewYS8KbDYzqQQnf6TCnGKLrnSQyiUPtNm3fWo8g1ceijtZLUXLAyFbkGbgtsSSxsg1LkoSASKt",
  "key38": "UKGVJ1RPaeJ5WsT894E7MsTdJR8F5TXJxznqXHgyEtd3Lg7ifFzh33mpADBAwh5sLgEL31bEqbGzzNE1cVM9n58",
  "key39": "5qpN5exWHvAFXNthCcyksXcShppFfF6yDmNUnviDZpCHcgjSUvCSxmGqN6uGDQqm75u451fVrLxyePYcFvmFR9Ey",
  "key40": "4F5DhCCxmc2KtrdvZG3gwDASWhTcRutw8BWApFF9G1iybQad1rFdMS5M2DYpE1Uxi6uw4vDzcJnvcuDUKpW3qBp6",
  "key41": "jFpRkoUhexhhMZXQshFENKB3hrT1YNNpkGKMv8fyfZLfC6xSkys9iBJc1SujTQxWvRCvz2KBNuuxjYFJjXviFq3",
  "key42": "4N8gE7dCt87LfKiF2j57S9CgcZHE22MD5ftLuJc6YZZuYv1iH8hejiXz3sAF2wwFCvj5kHH74cz8ageLUia1qJbH",
  "key43": "624mrGTH1UBz4yoeQ7ujJ9EWtsyBbppJKBXyuwhv1AMChCNE7UxonbTYXZDXdZFpQBUfeiCGVhGHVPQYToLBRJ4e",
  "key44": "4ov3unVdRCrCcn11txnBUugASC3C3T9EzGeQqTwrZzzPcJLFrzwQGHZrJ1ytbHpuZamteJXP7Hkas9eWFHX32qN3",
  "key45": "4aSeZ938nN43GLHwCMMr8Ge5a9Eh4UQbhB2PXcCWQ85agQHq3V5gokZLPXtJApSodfpWeKyE1CYAwyh6TigU2QB6",
  "key46": "4EKLqfvmK6eqD1WQuF9xpUw1Wh6zHEWsvLs1mehD1qzc2JjkHUP246XMXkLnSfEgpTVv78nBDWJPJs8Q3qy7yLzr"
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
