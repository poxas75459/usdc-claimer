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
    "4J88exrhacH8QYV4oetiPgscjwKyLGvoiesdkUpD5ZcguuM9fmTDbgtSU7dTZSr7AmgpeuVd6fffUa7scUAcTGqi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DHhDnCTAkKnLbH1uQkYgjv24ak2xiCdUrqAvZm7kEjRZF3yPDNuiyGoaR1oTPcoUbVHuLLbh5ahbQQBKaqUf5L7",
  "key1": "2V28cE77x7iPJYrb6Y5o78TPCkTNKNHtP7HrDBBYzgimHH1SLB1jp81wWBCpcwxWefzdPMtJC74B3Jn59BcKwKzW",
  "key2": "5wns6YBYJjSyDGy85YMnHYLEgAsmf9XyzVh9k9igHsVueURNpS6BzAGCstNRVPLdAgxXTFQz2nVSiyhkYSzXLNmn",
  "key3": "583QD1fVCqQHzXtpAqyThPUNaaECpcCDkesNDxyMJ43Tv59ELM1atkqZRDCKcsMoMaAjyzJG5uH3rYPebJedNPii",
  "key4": "4KCEebtYMkfimxrWbhtWVMYN98AD2JdZbvKzBxfkZNr1meSuMP4g4VP5kBYNjTh9PXpE6T3gKkTJHddPEmFpTocb",
  "key5": "4pnJxfVfJvxuK4Tm6nVNUm96dho4NahpuAJHkJ1HWHXPzzic4EzQe41uYKq59yTbj2KuBbuL9ApbhVgUNWyf8mNN",
  "key6": "3HGVX3NHAzo41ffY1YRgq6sUqELSeQwCNpdr2U2VQnyb7RZcPh8YMgc1irfEo4CL7Dd76sq4fb95HFTPzfar74pn",
  "key7": "5EDNL9RbTinCGft6AMZr22hh2kNZFutknSQPbQTeYfYWHbimgGeRzCZXybyXv7zZMdpXcYjrChqP5otTSLbDbhxA",
  "key8": "AgFc2SdAHTXr1VeQNcQLErdXx37tbpZ6ppZ3N4gS2QXEKCAc3AkG76vmPCC6buY5UhS1tqKPbvXnLZmmcukjdqm",
  "key9": "3fa3tnPK9XtBXJhE7kbNWEp5TbxQpfaoLBWq1LMNKpFxdYHW9vboLfb5NYh6hsLk3LGNG8b3Ku7itc2RTYf1pdoU",
  "key10": "32paR3p5a5eAfLHb98G1FyfAqFcijGfymaf1gbgAq9Lpsa9Jtsy28SRpaSpY2dbZsiGAFg5JBjya3rXxHeNdtVCA",
  "key11": "33vz1Pu6ismy76ZSs7Yn9Cf3cSYp4tTwC4dektbYCFmNmhjVw7RUbimZLBmQYPpbmVrFq9niBvT3QCzUs5sqq5AL",
  "key12": "5jehSmAAQb6q7nXDWayPWaHc8PJ1wnDKa2TPeuxacSjpsVHYUdkbrvo5gGKEx7u9maN5H6e8Y4yQEMgcqJhSeefx",
  "key13": "493B36WY6KUhENXMU8kVgVq16hRon9fQfGVP8uwmmfopDaBnGdeKvo9eCQ844TCuDZCSZUa174ded9eQgQfEgEbB",
  "key14": "3EbdpzJaoSGt2mu9bc9pAMj2p7TBWpBEeZ1aaGro5yMcrwED5JY1y72iYCh9KH9oQGdcacXN31km1EqexQGyqk4x",
  "key15": "2TLJD5r3Y2ZFdbN9JegKoiy4bv4qNw2a2HJD5uUXjCJBCNB4YqZcvtA27wxWAsZ57BvbAyiaSZCPVby92c38zC4u",
  "key16": "5fKEP8HAB1SyyvgZxvusYft1j9f4dHzvEvM6DY45VFjGkQXzg1UBuVSQwUSoC3uezy9U4xutJi9oRrVzpnwjro6U",
  "key17": "31tQjS75Emc1m28fZoEowAdfb548E6j3Ajd1imdJS9YdJg8w3m8smgK4FTSCbCsAdS7u1UVF9bqZbayZ4LoTDmDA",
  "key18": "3EbhC6wwSaS5z2zz3ayxW44AELAdSoDNcPGdNj5AxNrGzZftadJVvnA4kWspF7eumKJygp7yXQXxyCFeCWPgVRXN",
  "key19": "3bSLQYjv6T6gHGb8SfKkhdJ2ZUkQRV8KEF2Pf41x4D5N8nBKL115yBCMSGA33HFpkcYAw9RjN5aYG253evef5smC",
  "key20": "31a877SuVGWdrSVxicW58c4RrA5ktfubLDWUeDRGUVxdSWWnn6r5xz1NZURjus3BcqW4N5ZKTMKpXr1y3ZBztYRk",
  "key21": "2AcEsmTJa3AHyxSrSFFLWFEnbrq3cjmrWRw2fHVUQ5KmQWCf5nGKN4GzvbXEubWLNBCvtUZZQrECt4h6FkRKJnr6",
  "key22": "3sygsUpmJrDBjSJjB1eZf5rhZscxSwCcjSNczfpdTmErZHSaZMqMj8KkpVwPCLPzkEtAGyvPV8Tj14EYFXmzDaSM",
  "key23": "3uLhwVkCK9t7Vsmqq2FZZyiuuqPydUgXt2RBX5oT7i5bZWdopdzyQKB61mjgsFWdMJPJpjCDxawvVxXWBywosTc4",
  "key24": "5zB8LEJwCzpiKErgt8Kes3AcsuMdfJXKwXkwBKS772vwSvoTYC5cHG4sPXfH3Ri9v9F6ERSa6VCVpwgRtZoUY1QK",
  "key25": "4dLwcVxgSk6BwQPLNuowtaEn9UsAK2bNWjFXExKry7a5b1YVYacgf9fCB4RcdnNAcCHDjC8mvxb7ZET52nQN7637",
  "key26": "dUDvQfcLXNe6u1ZqXXa1Xw7Y4uiwtZ2xmVEMt8gjifUPYn5pyvt8HLxpfnBsPXzZpNcVSTRPYPGoN82QbvSK5uF",
  "key27": "4xP6N9MSaK4ogjeK7ShEuRbbDUGPYm1ixq5X5KPSrgiXcDEfpEaSg9pGi4xMDgE1NMoPaALjN9rrgYzXKpLoNXCF",
  "key28": "2auqx9Nj2ZyxhnJUhiekSdjobr9NWnNoZvcn6cBkuudF9PwKV6pkyovzcMnJVQqLoYB74a7THGU8wQ6NWfRRtDq9",
  "key29": "gNDKCDV96PhbDCyotEESLUvqgTZq7eHzpKCrxEG4FgzzCt8DSpWC56hvFsdV3kZQijQLEFnBbkAAPVydA8DfnR1"
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
