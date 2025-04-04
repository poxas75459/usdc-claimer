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
    "5fEahNswrc5rid3NfA8KAbC2CSQ7yP55eZ5PZZMv56G3eEQRvr9mwktksRT19v9zqAnWFxXkQq66QvwqsRoqFgs7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62B6MJSUgDsgo3DXGFYA3Cri22LqmYnGMPETN8Sf8v1mFBb1RqQmwoFUSkHadxfxybCQEuqPWBGAKyf5AJZzqKAx",
  "key1": "Q6PLCu36CQmyPTMpPTqC7sV8ArDVSSFQzRgF6R6GzyC8dRLRKvaAMnegSsW59WKxd5PerUb4j8oDgbkNkYPtLng",
  "key2": "43G3dp3T9KJLbUrAoFQdbAfcJCURxZLcKN9YEUSDHZP78yMciJVHKnHtKuDFC5DJrjfTi4r5HkjiWEfYQctguUMu",
  "key3": "57qSHFREQPVn2iJiQN46beBmTKmYHPUddpKQPgNLPPQJ1HBxfXwpLuc78ar2m8c61QyJhVMMbq9kaFQjiNKQ1fWe",
  "key4": "2ktGdC3vayfYenRKRCV8Q93zvaafWtbEVHyAuDnyheofuoQt217JfZDtoEyRgBeZtUfmppLpbgFDGcpez9uq4Ek1",
  "key5": "jygVXwqLeELAs2HN4M43FEGyQFmR5mRpGQdhUNq7TLKSNf5CVtm7b3ez7eQwrPrrsSAf8DqZaZPZximm8roEYqV",
  "key6": "5h5bLWqbNjpmb4aSbwd3xpEfG62uqvLi1h4z7vNMUcPYHbWCtyiLRAXJV5RBvjxuZYkyc6PD81cziPTnhcVU4e2x",
  "key7": "5ASVcUo6VS4GA2ba5nubkvjb5y2cu2uP3H3mGPSvL6VzANwCDRTX3ekeG3JDscJE8DrHTPZ2m7twMnPPMq2sswRV",
  "key8": "2JfDr8mid9pP7KLBBxDqbB6MDhT8wBzqmZzUuBagR8MHpf2ugYpjMQKByxtTBjYqocAdqe2svYQqiAkHv6k754L2",
  "key9": "qM9dTg5zTDrGbcfS9u4vZCetja2SfbiwzxzPze4sir5VmAWmE8vGc8GQP5qqiGD4diuDQtBzohx31LqGqWGn4J1",
  "key10": "3Ang5TmYtJno9yxNbXkdphjfTsh2NT4AybxRqf2NyFZj9ijSVd8huAfE719W1yLfLAPnT9Yfbchq9mEMjx4Bzk27",
  "key11": "4m6TBzzJkRxKmBcnsaj358HiMU6zu67YMdjKQpVK19Avm5WW8Pu1ScK2AAVsEzL5GyPm3fGsB7jkV1fxnCqdKpoZ",
  "key12": "5RfdNLfZeYah3cD9PtVGj5WMveGThvEX9CYwgt681ZVjYEpH2DiWSRJjnReo5gLLLd6toygPHXSNqbwSPJGDFC8d",
  "key13": "2W6w73Je5nmgajCkpLJmsmz9Y8eDpgRSrBHWGSa3Ts6asyGvv9aqEayUbiTb8w379cAjD8gkrBgGWNZPBU6Mk4Gj",
  "key14": "A2xAuRi8xkxvVmY1HgHgLZZ6tUMwT73RCmWEzwkW1qL28EnGVjZH7NeLz6q1i91cBixjX3oNHgHPd3GgMqskHKX",
  "key15": "48pDxMSbxQMAKBockz6mVbgUMCLf7hjK5SUP2u6HZrTB4omgYJr2DHXvPt8tyu5siAmdDwSBUAR63TNvxXTcaQBf",
  "key16": "2jNio7DvjJL7gpEUc142sMBW8yniuEDG7tsmTebAHBawZ5NfrBjWHRbv9vuG3XT2iVZWhBhEuDK8EE23ttdxx1RG",
  "key17": "52twzvpKhCjdWajopgPW8XjLcEL251fa8okzQcB3Ca3ZF4awDs1sarjKAKfp2cFLc3g6T9xjEJccmvgYzukPHbH9",
  "key18": "3GJUh9DHb8cPksi2yR93nKgu8s8JhpsYzB2NaRQUxzbarA1LR3t83Sz1Ep7ZjmYrycAi3Jr4WgpdywejdoMkA3Rd",
  "key19": "52GpupNELj5sS7Yt41qDc5WCmss8oUCTuepVBpATiP3gt3D3C2D7msUCWXSVSwAAqdmFBaMZaYP99ixrJD4jwGRe",
  "key20": "xXddhhuNoxDQf9nkjCHLnHUjThwHC68ZQNnr4hNRfPqJcDJcnoyy9eBDxDxYtDhz1eEaeQhDpTutSZCNMhLxYeF",
  "key21": "3GA5wQjLXCuiMM96dvASYH8euXpEyu68twYA8BbE4L2dxsfRNZoimA47b2ZzsZjp1tc1FLe3zDobwy9pD8681DBk",
  "key22": "3u8fJ9E7dtNJnyba85UBu6bcBLLG5XiUpxaCkonaQ8pdU5WNzYjd7UeyCx1ePP8RXYvKyFxCxuFmBWJAKDgaRHtk",
  "key23": "1gjweKSGQTY2ABBvXTUL6hmxARToxMeCn31FbjP9zqnmBe714QZcpfwvjKqEzBmibD7DxcvpnbyNsAKasg6Yoge",
  "key24": "5Ja1Cn9C6XRQM4vy5og1Tt8DgPsJJAvcsV3iJjT6mMnmEKqp8KmTgQXyQYJX7rBYvpYPirKP5aV4js93wVR1twZj",
  "key25": "3bu1V87MuVnnUTXF6PFXAqXV4VL5UsLs8xLz94tGBmn59KP9vdvVDtjXNi9v19fAqVbGcvn5X2AHrb4PGxAkCL3R",
  "key26": "34KTi3zvWCLEp3855hfecvn72edXfznoB3BRoMDy3yuk5rrXEtqjPKzu32z9jCWTd3xWQdeCL1vVqaxznYGFb6ZN",
  "key27": "2Pt7KAvmUWhapuwG9Me92ZjLD2C3j2ueG2PexSfKG32N8RjGKhqPzXViUjyBYLsWRfSvuSgpfVhw7QdHbgCXhNLE",
  "key28": "3ZHksPWFzyrrMabv74VA6YwrcDWmsyoh27BPg2fCkPEfGwFN4Tq3uruTwU6nkMeofiX5oKN9h6Cyrn7QC2kcNTu5",
  "key29": "5edfjhiCEgDzFNtEb55LmKy6XaGWxsBFy2HA9rExvEq1iLaG426CPLiJBPhCNGpgSsxFiaqb71M4VyyPazAcdj7b",
  "key30": "WGkdhVC6ti56DxC7uWi4edjtS33gwjCouqdVzbdEpTKqpUQvx8WHhXzhX2jEnsE1rSnccDivc6tKYCyGhdCVY6Q",
  "key31": "2KrPYz9DgbQ74pozATvxmZSGoaBMFsY7mdtNYzL5u2MPK9YKT3BSiDyvfThoeAeUiGsUgKDUSuNtv8N6Jtd7BrEo",
  "key32": "wdc8kjndvYEka7YAAok4MNLJqkzLHTiv2qo6V6ogVWAQ9M1Lp9eG12XwJDV2XxgGaJXXaQwFNpxZVUnjsHPZuAJ",
  "key33": "5ZrLbXNRmkLRYXgk3RxYxphAw4cnG3r4TBVF7g8vtLXaMftDbde5pU4HFvHnWR5B1g2FfeeKWTLL4mmwrK1gy3E5",
  "key34": "56DKhYandJFozezNgpDY5DDRmagiW47ZhH6bxDvXnw2qsFaTiyFASMPNpuhRJztZ1N4FSFF5JCgBbQrwTGdzLtLg",
  "key35": "3XrwfUrutxjPjJnzvBtqRN5PNzagaSuoB4Jqtpe9tR4nJubBNyHw65XDEQBGKd542KzHFQsMPHDM9ZmrfZsAktPX"
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
