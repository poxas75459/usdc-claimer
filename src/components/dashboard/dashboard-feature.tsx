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
    "7B2FN9vyQaA1oTVoAuehka7tsKEfLDWJPTznQNPNmF6zPbrJTGJyE9wc9JPzdGuBdMgFZvfc222d9f71ktLz5oa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TLUKej1b3c3rMzyF41Xo9a5vReq9jSEecbLgcwaHHQERnJbE7496sDtBtsLMdbeqQAdRfPgShABT44oPo6we3Jk",
  "key1": "wYeHEUcFZV1C5cncyQSrHJvyhHJ1NksjVvbq9xRE6WuUP7KYWnGrJirwwLUzYH83nU3zVqaSSXK8ja1FguW1P8i",
  "key2": "2X1Ro6tEeVj4qEhmZnerpjizj1e1EFWnvz875xQfnE7Mq2PjwA6NSY5EuzRTG4tK2BEeXDCT7gmYLu8Bs7jp7qQ9",
  "key3": "55Vw6UetBLMiZybeBU5hLPjPYKtTzWihWQxbCbvQr9vYNZ4N5cPWdKsgMpQQx4v5wxnnXsspmWgo4VgQ1ZeUNfhE",
  "key4": "5bWCGbdMpZnaGFYakuvZeGk8tefZnqr9xBSDbvTgoZTTyUghsDtYCySG7C6W14hqx7zJ6iBt1xqFeyQu65cGGeRZ",
  "key5": "4JevWxP3WwdeCZzAKL2LRXPptePxgk6Leo8D7PHseXjqT952gnAUnABe3T93BeNhp4eGrXraU34RJxexSQ9AS9yB",
  "key6": "2Jw2VH9jo1VZMqkh1VroET7PWe6MswcTr22BZiTEzNmLp5UZaZtiSB2hCSSzpYNx8kJQAAbmbGP4v7UERMG39oo2",
  "key7": "4MqywMqP23Tabno4fhvubLP14CT79PAVKGSdNhPp2KrKPc5WCG5E5uk74fFTPW7MQUH2rFmsYgNJtKsnLpHsmrTC",
  "key8": "5Hb8ZBTu8zc4mwFserKXsL22B4Vq9qdk8pduWyYDHcBVy8Ko6thGyxf8oDGcdZ7j7nDsKvzM3P9vYMFM12rhN6bb",
  "key9": "3LMUVLM2xnksz69siBrApBWrNhHwFZKjqhekdHJkc3XYgd1G3FQjCbN3LJipnEjt35SnLxr3TVN8dcaoRA8zxd4b",
  "key10": "UPtPtZXNY4yG67U1AD96pshs3od4q4gDQ5VZRGyjgFcBVjTSDGAAoMiaz8gQQwJ4MUgmP5fmxNBAzGL9EVJ6pEM",
  "key11": "3rYjuD6taSH9epLD7mgTXCmEDPEddQLprJMckcPdH2K6SNN5nrJ78MrWFe2AhbNPNwM8Xx2Txqs6Uh9NppjcLhBo",
  "key12": "56oWCsAYZVWR1RBfJE722EKZr6jLPMXXwT8RWeNTuGiEp6Nw9oBnsHAtDHPUGEAdJwnWR72nVgNqpB4W3sVuxNwv",
  "key13": "4Tqip4Lhzhc1he3rrXTJrRTjftkdbiJoibvhCJd9WBVuEBKjeKvYyxwo15WbVkLXpiWTV4CBAnsnk8ziEVuEx9BU",
  "key14": "4TK5BnKsULUMz6mnySfs3crtHT1fApwWJN68YrcTiXYDrPtJXBQMM8qWUrKiRYi8cNvuki55ShX4TTF8ogjs5xuT",
  "key15": "62orWP7nvW8rp7DHF8kT1tHsKwXB3BC2xb1iHUdMouoT1hWQ3UqnJdyR8C2m5JVKxu46gRwS4y9VP1r6pkHMTytC",
  "key16": "aqBpMhxWWmS3ydAdak66do6E6t7CT32vX3CgmkexfrCXfEYocH89xK3mkJLChn1qb7tQLAAnoaeXatxP6buwMTM",
  "key17": "3VoQHNuHhgmiyuNHGuWnAU1Hmqn3fAHtD398FfKdgd5GqqrjiSz27N138y4MLKkngsRDMNXi8UTrfhcQP8bqi8fS",
  "key18": "5HJ2TA6jXj3Lqnvrbj9C7rVqSbikDwJaXiJdPBSoE9K8UY9tke3ScHMh6tnfysfDVJS6wWbzCjKd6cTZkrE13wJU",
  "key19": "2wtE4F4q3S8vmvag5S9YPKBa3249KiLc2nnuyA559AfiPC7WTrvdmSj1WEuzY7eELUG42NyyhYJYYByzXrUoxGZa",
  "key20": "ErYgNnGrsmdH3shLNd27UUfFUY7pLqxp8fNCezaNJrHKCzzZMyxqHGWTiYzUaynwrh1JDa866mAPMKchr2cQgkU",
  "key21": "3inmydkmAyrpZw1G4bB9kGSmwHtqBw7oWyH9qTXQufjN34ndDqhWXNigDpvVaj85nuiVjiScffvLf9CbgrhsQDn3",
  "key22": "zwW7xWUbZTEotGXxa66JCQS1UfChBadqZaU8ixMCymoHPzUMRxaCng52xS2uToyaKHVDtqydxEgtbLopzabBZZg",
  "key23": "4affgdNJHnGQiUP6SiSjJCfTfgWjoYGHNeU4jqgMm1TU6aPELG5vHEQg7MjMCNvYnSxDvWJeFqq6nPTC8phRNPjX",
  "key24": "3nJhWgjcNca79fmBMTG5ve7VpHsKjVKcPmtd38n96YGwe5TBr6k8urGX5GcQ8U3bvRgnZ6qumgFndy24wkpHoX79",
  "key25": "3iFkDvXTq5FyvYmKEyuEjU42oah3JiAvPhCY1ky3cBQVCAkxsJpsVYBGqooH1Cqr9KyouPptNUjyusXkX2kZr5Pb",
  "key26": "2R1LUogV9LXWrjgcvwHiYYebkHuzKuTx9vSLcPSgWtY4GUscTTHNbKs5o4aaDzMbr9NHGaLcAY7Fs25wYsaMDdQH",
  "key27": "3XLcF8Fbnc7bXKaZaRDpuDMr9k7wW6ZesrMcJGBq5vn4zHiTR34zsQX7Vwbj6HFMh2HMfYcNNqx1py9bU3ajkjtg",
  "key28": "4zxum5iun8e5ptrLWJVksUd4GqfKca65Zze3SBrghTx51DsYmgGm63XXbcZVJBp7nRmU3xks6ygoufQmRFYU6FWr",
  "key29": "Cv7bfxjRKREspFojYei2c56DxBYUjuqxmdJfEpHErDzRXDTTMQG1zaC1KRehNtSdoPs6xpZcUeXXr9XXTFGWGLF",
  "key30": "5oT1gBhgQeET9qTngimvYeeoXjmXiYiCB7tbkypDVxgr3yEFtDhFqip2JGtoWzHW1LW1Hyt51jDb9m2HUNBPZqxq",
  "key31": "2XSo2vcAtXGrwyBWQKcmzfnraqXMEVtqB3YtCZFFSpYmtdvEDs43WeAgyWNmbkLvkHPXrse6MAeu8RofwU5mfCej",
  "key32": "2cSuzzDT9T4qfX6MkXx256sKpn3GDaXQ3QhgZ5sL8fhdL2y7PDDPc5UPKmNpwR8aJ5YcLMtgFUNpdPZVsLpkA2xb",
  "key33": "4uYHYzTV1ogEqQr1YxgrFPXmgxHymja8iZx6p4BC6sFt7KtZbw8XR3xX6rh4GUnF1SVCEmKMGfJD2GT9NqUaGH89",
  "key34": "56MwfGQmA9stw6T3CzbG4YEQQH5DW2amiqbxsNmm368bFzt11uAGusomzsB2UYEhwZJqU9W6y5wRkNoAx1UZGN8h",
  "key35": "4yAhS5W3qVfYp6VgbArbk3p4Ga78zuq1JcPMExmVo46JNPzp2GcVQUQH71v7Lpw1XxmNefbmj6pqdtuMtDCFEPiW",
  "key36": "4X9rxm99zhfPoQKSbRPJBfQnqaG3RHNwo792WJgizxPUL86YqHmHfBcRPbQXJ5Wyqu1uVohrAttChJpDN2N3k2Cs",
  "key37": "zpBfg5SHQKuHMxXFcWuA134kyfxQkt8srohwJuzr6ZKd2UDqbkzvQTxSJA4CShEL4z3rBmafgDk9hj4Ukq5hCuy",
  "key38": "3GXUQPkmUvXcdKEgy22dAeh7jrvRrpFNR2bqKXmHxjg33pG1XC6VEd6yKRCc97fCTBgno9uY1gFBfYzBMtkvZJTh",
  "key39": "4reneA7puMihZSrJjtomhyccg9JaWwVSeZwweaa37MNkaHQMbE6546NWkM1BvVp6Pkk7A354PiVx4PJPsVQKY6hB",
  "key40": "2R3cUAgsJ3XfG6oEw18bQ4bmLPEAnFnNwksVsNrvMsy4ijBDiqNEnPG6YxGT96zZNdXBZWqYQbpBoGiwt9ad2aGk"
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
