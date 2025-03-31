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
    "3t9PgE5z5iU5J1todckWYVBDJktogjkaUBykPtfSci9k1jQysVMek6V5onaCF3x5W8PpDaVaCg8FBdGJJ3jUGNDe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wmg1FU4iEQfX5PW1adzNry3fKfR9fPAv1LcvvQteFxMxepiXvynkay2ZGcuS6gxEkybDKPnT9qvzLxiPKmiUSHq",
  "key1": "669gLSMVnojUqRoPQ6NrwmVpyJwUgm7EKEPea36PqeFZrcLEFiDoE3hzY3RQxrP97hgx6v9zj1KnFsKv4PwQBa4k",
  "key2": "5tffU4R6SsZR5UNoLBLJYpZWG3katSjnKvwADZuTbsXTaJrKGzDfW7EMPvvzfEBvbn62cJrRMQmsZicrqcipvkR6",
  "key3": "5yzrfjTEM9Q4msQe4Q8GBGVVntXoNiWEw4VMXpRpFcJaFcPxMym1cmJSZn78iRQ43APaFKwoM3p5SzyFVvAr8PG9",
  "key4": "54NpMFbciej5zpQZLspFzN6SdKnWBoUdLGMAjXu8zrxkHkQrC3JAd8Wu6EjQ3i1w947qGsQ1gy6HGZXZyL2UTA4w",
  "key5": "4MgKfTCJ8MLBqdKneedWLFgitikSX3mMrAkJJ6uTebzevbj58MkfgB9eQ6wxZmoU8hmMeonsVKLaRLCccmf3m4Sj",
  "key6": "3zBNmPBcWtLMpk2W67vBZ9dGVtBv3XEMt3w4HYCAp5XCSxSniLQ9cUciKMWgeGP39UojbVyHKsBFgRU63C4LTw35",
  "key7": "4cLV1YzS4TVSZ9AV43fjGnU9guS2nqatgAquUVEY9hbHS9ETMNvyToCxQmQNvatuoWqNHhjVHZDdmWNXtUWNyb1h",
  "key8": "45gRpmvT99QRYMogAUyaqKZqKtnjsEFhKuVSPR8wJX4GjwwH9k6RMCfCFcPUdeFwcveU2K5gVZVNFkDyv1hLzXZp",
  "key9": "2r4ZkvS1kbRGdyPxoZUfKCz2tdTZGxspM8naB2P2UAfLBnE4DpQFBqRGuVpLheoJMs8EEBeyh7ADDcu3tgkhb1om",
  "key10": "2FP4ZGNinsSzdCdjxs6RwKxtsULH4BA2x1mCk1zXzAyzk1A8SprUQztcDNMqjYnFvxWrPGkRG8bNDXhoVm6Ds5ho",
  "key11": "DXkUmVSWYY4c1Z816UkaSLW6Rqk5DsR9mYrKsabyvbyhCDcRSYxVjkcFF2RcQxwvmPyXC7aSq3eDHphikN527tb",
  "key12": "3FSdFhSf7KErBmbMpywrEcu7TqJnWjFtMpywTRYbJ782DvGGPMau5r5xRdgqmZAUkQg3dNCXdTeMd1JH2fELXJjE",
  "key13": "5CNGh56bjidp8G1izTNuywVRRDKK3NLu9zLb2xuXpcWGfLNfcK96JyYhf2Sk5eTEu1T6aiEUZ7h3yzEVq8kQ9S3S",
  "key14": "5wvoVrd3i4NXTWbyccn9wogV7e4D6Xzg2Gwa3ximQvE7VZB4vB5tVp96pbTQT9ZdUamvjvAvMtSmLVw4YVpCBcRG",
  "key15": "5CGcyuVMhxYpzYrZp9iByMDFYmnmLeEchpc2WoSmi1pCPijgvSMH7Y5PacvMJJqUhxSvLnov2ywAZcygStAwqbiN",
  "key16": "4N3ozVncXaegpXA6ZPyJCjSf9LNbTc3NPBzjz7qsYHoQwSxk5BNsnCKRXbghWVthLtWzZxcUM7PE1oyxh7ZmPEBJ",
  "key17": "2FFa5NtpjM73Q7EkdmjPtBhxYqaNAXkN7xM2wkA98Fdzg7VMv62zxkHGxyFDgjS7nde7cvFM1n3NiC8qxZYwyezW",
  "key18": "uRbxy1ySSonKEQcNkTX2BwJKaCbTYge85wW9iw6pz5s8qPWuNy5wFFCUUT8PPuJeoB4qLtNYVoR6ETFURMDcj4V",
  "key19": "2AumQNzaMb5gThg17Vn6ZPGVXs6tdKXqT1BkhNcEw3bJfgC71JiVCuCrLLvUWMF7XrMuH2DDeuMfueeigWZS3NHX",
  "key20": "4F18mALghQuZ4ftDhRBmDG1Ps6BUio3f8XAeacoAe9Gsa44JrfQvaLob8voGcUqrgk4EG4ZfLjsk97c8yhX9GMpA",
  "key21": "1AxCNCiTkesga5N1jeQHDtbtD9QPzdxBAsfWWoVrqjxce9dJYJZNDqZjsSLNPNxTf2txW5TJtkT59Q7fMwb796y",
  "key22": "2rQJq3gsZkF1Fw3cM2eNKMe58fXQBeEBZwC7mYEAcoo7vCs4eTUT86Y7geDGXPgbrunPVTWDUUuuQuCVrdb2Rzx4",
  "key23": "2hY37KfmW4t4WovQujobH8ZqTTB94wf3boU2kr72X43d3tjHVeVKRg6kqihAQ7ZrjrLtMC8yeiacTPmWPizEZAo5",
  "key24": "2sRCJ7Auda7fPLsmUgfmSr83Pu3DEBTgWVCqpw2Pswz9CfbnJpzD8odm22siJD3i9fYaT2Hk81EwjFYsTJ3uz9od",
  "key25": "5LcPBS6wJNnyr48v72niEuduRLdGHxyTdJTaJH2qD32aP58BtX96FQXvHgEJdUZGsW8yDqeJxFNyA3Nodmhk79P5",
  "key26": "6hkxhe9Wuto6GXPUfE7sPk6mhutXr5jHLp46RQhdT9Q4M5Y1nCPqkm2suFwbyBrmSdtgVyEvZ49BN7A2igJpCGn",
  "key27": "xA58nXAN9nv6ZsDee3sPyyKxvzGr3wCUV5VH1dFG53DDMDpM7kwLaL1sjKXWPsjZmE88drM21wbwdkePpaxDmtP",
  "key28": "5bo7QwcPkwTpPdML3uYVnbCBcKzHxY2cYS4MASN4k6RgM1FKDQfg7G1WxJnPh5HCfmWV14zXEnEJ7zyG7LDzWHme",
  "key29": "5AjEb3R8h5Ssp5gs64ciq9fFo4vQaEjbfDDDfbTGEsXzs4r4TLNhLSxGPHLRUmxjT6K8gmL6nMgmrnmVV5pPQZ1w",
  "key30": "3gtJQKmpUK7Nc43JJmHZnqRHAPaKAW2ipvMR8Ke6hp27h1kNnKpQrbvvfpJYqr2xoSacXcN4zmScNSmVxmAD672Z",
  "key31": "2ZusZYq479HndaGrza2nqEQLBL2bq1Q95NAwyT4wZK7QXDk1pEBWGKkLMUc5dfh9esvg9SvXhaEkLTLFivvF5XoV",
  "key32": "442VFVRKksRemX9QXCJiLd6SGVFKuTWGbvS5mdm3nNVaFb2NutNrpsVFkMLC6GmEoB2eRwmarUX1ap2bvZ1CMw4K",
  "key33": "2ENrst24Ewwk5YX2CNTDGF5SP7hDHCzpH2Jv8RjXg2J68Z78jBqrN1xgt8QzZc1FzRvm8zGTAK4HHEHmAEZrycJu",
  "key34": "5t3R69td9MoeumJyQotyGbLdThzd3HELy3PgrTmhmeYu63p6akTpD1fnaQycEDKuvXY5TTLVAv1RBFgJ3sjenv9b",
  "key35": "5ZeQaBC3Kiun9ckLemr1FNt7GkBcj7dDA6wkzAWT6Hun78fVFpoT2sezpdEyB3iwNKteU8eySVxb1yimm4UhkoGA",
  "key36": "4VkhnW35dM2Damw3gC2Dm4fkuiERhzKZBrKWofYjpRJC6ZPzm9tJxnWZSVrUcmbpZjg6YqnGH6FSzxm1YqNuWc6A",
  "key37": "emTZntPHNXHhkGXvmf8DwyaqyBXd591AGrMNDuZgmv5WFEDRAjBvgF4yaovrGY2RZiBEYtuFKyQ5ReHeBk6KJWC",
  "key38": "V6PvY3cDAWebGhimA8cnGodRj6d5QbsND2Y7cGyjtbfi79BgunU7j6cvoq3n3nSwm4bdy4a7KLxhdYkY78eayCZ",
  "key39": "2a3Mnb8dNjiZQGpWfDxmqyuoEdLrnoxjEqtNLyNxc9bLXfU2HVMZa9aAztXhj7hiRVJw29nKx5QTjk9TiJLeUvc8",
  "key40": "pExq7F9Gk5d4JTyNBKKTN3wWePU16RTpfegFt4oep2swuSJBN2jUfYnHc9tAvtFBH4znA47qeUBq2oEWqU3YZUp"
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
