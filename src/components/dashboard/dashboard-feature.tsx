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
    "3pHoAbYYY29FazWwBqppm17FFC7ACQJ26G85bK2ja8VCEYoddGc3Emb4aZjaeuv7GmAc8TdMHRQkLx4grnjWrzip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5peSSofJQEgK8NinciEsqvKGUN3nkdbE3FLF8VzaFK13wzhw6w86vHtR8HiVXK6nMfjbj5C691PRLWPCp6ArqCe2",
  "key1": "21jZjQ8kr3vScChHW2mH6bb376a5PWaFcZaBtgNMijvArGYC1yv9WECb4aQ2NpQnFV3Jr8JWZVarXpMMs2hJPfRA",
  "key2": "41wCkuv1N1HqfpG4uWEzCS8T9YdtMmNHcaNahYFXXGvuM62DSrjxJ1XK46e3fsdL8qDrWupCEn1CjjcWN2LhyNZs",
  "key3": "43F1Wq2Ta3DbSEQh7B8RWFThnJEYAADAJqCPBJisMiEHNFsTYf8y6cMzEgVgUtJAGi3BfyNodj9KwiQ2StKKcXG8",
  "key4": "3D2cvDPFPp3QiMbGakFbLWrJXHqQiWx2gpmPKeEZajamiQeCdUdEfgaVXPjdtBbfG4MwhLtrygcpxbCMebCsRW6Z",
  "key5": "4dD912w9gBFyk9eggEcjujr2uP4eWXZAk9CW8dwhWGi6CkTRAuwZf1XXduDTRyttKV3AkRMRyE8AxDKnYsjwUdd2",
  "key6": "5GVj6zLCGoCPws14VoBh6Agn3zAZmwUXmSEZM1sxkddHx43usSSr7tuAXF7XSHx6qQp5EKmcB7UiPnFAxqGVZKSB",
  "key7": "4dbmjnKMsWEsZZFqxFvBEGXTgDwCU1bwauHS6g13unJ96mtbJy5fh68ckasDVRH8qyhTNb8KCdWXF8qvUmtngeTn",
  "key8": "2SV2smGvQrLY3v268jTmd72SDN1xryLKGWWmh3u7PMQdexYJbt1ow7MVPRSr3tdX3riayTn14VqRud3ADK4WR4cb",
  "key9": "ix5Q7gxhD6V9JcL4h1mQKLgjJPQwBLaaqSVZX9BtbcbLk3nNQzixGoBa2WecsPqKwoepnm8Mmvteho7w1845fnk",
  "key10": "94d8GY3FZ9w5dvTVu9Us1KmibfbJrLjxpwxktiy1EQvcezMJqyakofoyNbkTcmdG7GeAparmUda13kVw2K9Mi7T",
  "key11": "4M63vVYfnuiXmSybgxNcUbfsmnybpuxaQgcn6NcNw6arUAbjnoZQLeyAw3Z6MixXqK9csjQYMFeWWCdHLRTKb1zz",
  "key12": "XoL9yf3BoanPtnj7d9QrAZqmuCbmZypsjRkHXRjqR4rWoqZMhF9VFtMZDro7n1k2EeV5iKCWWd6zxx2Ge4QAvJj",
  "key13": "Yts1dJrJEkh8XDUafLRS84qdNx1MghLAminuxWP9cpnaz9GF55Ryo1pNxfKGzebWNsbsoGLHN7BVBkiqV6fR9Hy",
  "key14": "4X4RedmbwKrQ98fns8ZYzza4BUdbMNvsyYbeALhPS59wWtcQmsvu6GmzNdwuyzjbe2TNDQgovf8KUVqfs9BBF9LE",
  "key15": "3siqbMH5vqpUPtuNUiGv1hTr6aZCaDCgHdnNH53fFgiRpUhRfgu5UeE6QEUSv3PGDx4TRur4ftDthXR2iaKizsbh",
  "key16": "5Qxb7bVuF5M5RQv37FV8cFKRC8jgnajcVVTMzuVNBUWoD44xzqGZ8VJfTiPq4VEQMMrML24xZzahpo5ovSgHDdMf",
  "key17": "5b5eWTw2AaWbYTKnZ3B5bf6oAgxZ6P4wkvqBJhCxXK3HHjbNnZXuA7T2grp84eu6iCAKEEge9ezY1Jt1V2FDNQtN",
  "key18": "WqiNj1mFDZNbEoD4NESRgVJAcZRMU9AhxC5ENLMeUo8cXoa3QSs4ofwm3mZcNh923ixC46h5i5E9VGoptSSpZkR",
  "key19": "2myUWz6TAaxsRB2UyLGqSdCRGd4f5rqVrcBbEGkM7BnfooLTQeWVSMjmp9rgqF7p1XHYSXJbKqkFbCpwUYype4hx",
  "key20": "3ucjBV4veByXLxY4CUfS53X5VBhp9ebuQZpDMHMo9gzhKE6GEZPKHmfoFhE6j2h1usQaLcFZbGrWxbEpPwbeQ8Zp",
  "key21": "3UxjjstXwarnaQPdg85mNkVUFf1u2wRrtEm93nscvSEx5azSoKfiQx1ASScA6wBaX9WMoJ1kRMsMMBjRGj9giuzT",
  "key22": "Hd4QrLopsYdrp4t4n4CEsEpKSCcwoWqzUK4LNLQv2eMz9F8w9UoTyC5uQ89LC3B9LSFeS4XkFY8CYo18iDC77bE",
  "key23": "Kn6tuTCh3qHB33maBj5HwTKJTmvNWfjLj2LdYdTAFYqPUxYtqWoofBv3AQegz8HVd92FAPfMkRMN28a3nSto3yU",
  "key24": "37krnL36UYz71vZr5EtH5A1km2WFD31MHeyNCogB6cnr59ceDSjK9kWMvFAhtV6tx2tdTqiju7RiMFmpTcZy2Vw9",
  "key25": "543DYDGoShDzyWJvvqxjY2hBLLwE3rqeASYiYnEJUhaiM48EuRkfyeLc2VxLAwmd6tL7cDBFa4VKmgSkde5xMQeB",
  "key26": "2GoYnVmmUCXq35nuWXcCPBYz3UTDcqkJpLJNmtDSUDiGjidz4iEJ7Xza9yTmuUGz3B2oEcuCNsvEEXhayvTyDVGt",
  "key27": "uVuNwAUMZyxov7ojWpE6jHCZJGqkRfRM9z8uxPkBCvT5gMFmyGW5BSMsH2kYAVrATgrNLP9ZNa29f4oNaAhbzTg",
  "key28": "21wfRbvHtcdDmVKLt13uZudLZkoLcU7DEcFvuCTcNK28B9m7DVoneZuHEkC7tZFND8owrBfxy8sBSghSWTk7jdoB",
  "key29": "4yseqMbyE8sEn9KjzHFGg88J9mPgWbyfWwzR6TQAdEj2vWK57Sh6JpbJjs4L6CE4bdD7ZukBMXU8REbsMvVy9Ngz",
  "key30": "66FS1L7Zb57zC9wFgs9k2dJxCbf8KRnvDp6tdmzkyDP48i8t6a88ksTwGTk8NqnqHjAkb8LDp6FNnXpD4hoj1EBE",
  "key31": "kCvEreu5kmPfK9hVxACHaUsnJLua1hu5qtnJxm4vwKV9Z8qnxFD7mjZhomPJ8yRDRDLu73A66ML1AUnsEbjXbnZ",
  "key32": "iA1uXMKzyF2CrTNma9NhcP3twtTvSrADLf7rggnaQQGVtU75GU3QTF5oVotHzgUQCqCGADMcZipdQPW5sh8ubRQ",
  "key33": "gsPHuRSugaVLHRzG5WifgL5Noj6vs6tYT7EEt6o89EXcq5Tv8e6oQ3safQiJ4Wzmoj8NMYQXeGdDdX3Smzxqoih",
  "key34": "5xZViPHKBeXAXxHtDc2os3EGmvmLzVMsGmuyd2duJyxoV6SHZvntQUV8YYXxAsnasyULRSEMZ5rrF4YLqhA4bYCd"
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
