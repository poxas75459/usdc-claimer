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
    "27HtAndUTS3qfPAspcBHc3FF9tLBdPZviUkWowSvuNGSiV5CRi7aykKeHHFnXg5K1aViBo8EPoDYpNnwmUZKhrM5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AAbhVUXC58mTxA3iMksN1jXjrCjPQm7CpPdwqF9whrTRW46HEX1yUj2Hm1ZmtAX1HR4MaJVdKQjTya1EPfTnGbZ",
  "key1": "3BJ5Usmm27praqp5pNBmZoUn3BNzxT27dqCos4pCBhFh16naqvmigTtqjiP74kdNUh8B8pYfgE7RWNvr2SwN5KVm",
  "key2": "46pVTXu24ZdXAVCrb7QS8LZV6tYoW773waAzrCtkKr7gf2WBX1G9xX9gHs3Jze5uwTcMWHfUUw6fY1g1bkeA6BZW",
  "key3": "5EixdrWmdkBx2yKzMLvNKbW7RPXghBX6M9JtjRyXErMRWQdYvYyxpLdrQLiWZcqTknTGq1WnaWT4xsFFTRetAwSz",
  "key4": "2LZ2jZXntYpCdGDFvsqZbSW18dHxDx4uz2DYNWVSAgj4JyM52A4qSruaFf25g8MaUy31eRb4N9smG4n5Ch9KvVBg",
  "key5": "4bquggUjPk2UphPttP2UVfeYWLBNqm7EgVNJuNp54MWSyykSAjHDBqo1W98si4eWkaZCYZWjjJQF4wJiv8WX9xYy",
  "key6": "YrPwhiL3979QTHGTq7VBe2UYkHUtWPZvukZnvm1ZW6KPqiW6KyLdBaJbRKhrEv7Z6Rb6bzThbZrCcCHTRq6zdVe",
  "key7": "2x6wSuEjTisLy4aqzMhyw1Q4PrYEK7YVecCcq3ZNxzr5rG3UWKo318wXBKLoFhBtJHUJfd2ctXBqZyKdrpJ4AZW2",
  "key8": "L79fv5iYw61YFqMNRFPy5UNKsHU5obLKHD9GrLpgREsrooRwWKDk9S2Yh7HCvAnPsaxGAKWFXCbR6nzYigMJi7H",
  "key9": "3GvkVezf9WAxaFZgUZpsCSmo4MrFVbS6agtFGbpreb2rguk23nxv2Q28pWeMe8q8nQqsvH8Yw7bVd3HoJySt8GX3",
  "key10": "5XFmPEKe3PzyGoMUYdbvqFebvZctBcWQQLJwvFrzpzcWrw2VckwQ9ntoPHPBLG9LJGeLQrGpy3o5XJtHhR3c1qec",
  "key11": "58G94asisKAzLV7LYJbaEKC4Doh5m9pTMT9bXcnhA7hc8qjpAgaLcwjdE8iWTsFowuDJLemyGmkF56ySYFXNrr2M",
  "key12": "5Tp1cEUScsKU5rFS1SCVwQLZLGm2U3oNzsTitVyQ6JBw4BU15ytfP3T6NrAnvaFUM5jEaWTo2sqSGk2bqszrhCUc",
  "key13": "671xGsJNnPCbSPyAXi5Y9DmBsa2bQZqu5ehCChMR3vJ3uVjG1wQA8g9GKeTCobduECZ4LgaUPrLHNLUcK8crUYP2",
  "key14": "5NNwoeVQ5kCYhT5ff15QzyVYB5N5hwAdCASyQU1MgZqTR6XWnCb6hrSzyrXR2m2vTEvL6RYdjZVnm7vuJmc4vzmU",
  "key15": "bDTmSRf9k6ZkYUhJLuvXhE7kgwUZMjMjbhNvpmTphPYTSJdXcoDVYxjfy9GSMveJom84XBoTpk5cSwJ8maNxFwH",
  "key16": "5jfoniYGAs5io3LFA8vuAuwsr8XDH9abY7fRi6Cxrk1bBPX8dMyfRudxeFZJktwmSVYMuX64cvhFcZku4WLVUcAA",
  "key17": "haruEmdG7kn8ewymQyVN21YtL5QVB8JRPEQfRgv9RRfBLgEBjCH5dnqEA8qmMc878R2PdCbrzFEkDR8Guk5LtNg",
  "key18": "35VLM3XyoWSRejfHi41cQAYpKvR4bS6u6Dui5WfJEMDcKrmbNaYmTaikWcVJK6srXJCmr6mtbe7FhiNibxURYW7u",
  "key19": "3vHD2ijK4px79U7ndygWcu4JCRpuy5bNGFoerkxY6VQRUkYFqptK3wHcuZotkS52zoAjhZFTLZ43C9ZWWKBVMe9q",
  "key20": "612fCAXG8mNw5zTRgc6pvmYYUaz7wcj5r62f53V5pjgKC45WaZSxpUxJqeP5pXJgvEYL7uTTSfKq7Pgg16Jbymws",
  "key21": "s4y28p55HV1QGY48KcCaBynx2Pz5FBSF1x7PJrfVVjeoURefNVQJhjiZ2VTSXuX5jW5cmNy6Atb2EB6NNsLAVku",
  "key22": "66phDPCZHQUzZcsEpPdtun7J2pLvN45dEuMNH84anTsuM5KshswnqoQ3s4kWcf3keX7ZXWEyheW8We9Z3eNeiFyM",
  "key23": "48b56fW6S5n5TLaJJm3daQ6jUdStu6aYFG6oPZ6Ye2iTr7SqipJXNe53qokmUkTdhk4hK8cbXKDmaK2uiLBFtnQh",
  "key24": "4recqEbWSyniAdLXMDeztTU4MLYgDejjiD2KEy87gWMPTwvVQTQhdBFydA8Un8BaM8EU7hgPiuhsRKh83sMfkwpa",
  "key25": "7XYzMPs5GkLu4PUPT9eUTLZebfd9CuWh8wtjDqMyv8vEfCk3NoFQSczYV3rn5NctaMRd31j8hDP55N5GTTFZ1Yg",
  "key26": "5QptMeyRphMcvXXMb26oZKQ1uuNYuDU2xMWPCgB9NZcNPdrETPD5LtuTk6rYQaNEScPNwCAtgrKNhWxyjc2h7A1q",
  "key27": "2uCVHiZ5r5e7KwDb3AT7nTkYSTuADx6CQfSeQcM4nunjmnuGgv4yysMxhvKF6dwtY8x2wtCTu9fSkyCA7DiP9D6f",
  "key28": "4GMofTb3gtcEEQRR7Cijs44QhjtKU5xCjD7mZxM6k62TVBCV3nnyA6XFR9HfWn8NCEy18ypj3EiaS3nfbE7eeYf1",
  "key29": "6wCqFcVQ9mtQHbpJpmyd3hQkDSJ78uZSD1fZhoQHt1Q5k1NTtXZLJ7wuAdhM7TYGC7MRhT1t9izBV1GSNdiCV2Q",
  "key30": "2WYuf8akMt7qXYUQfrgXRDjMKiJN5cfRBjgEDsdbmjZoRY6iW2gfakYxudhA6NuvtFKNmUHYMaRscV1Y9tEJBABK",
  "key31": "2tuvdzPXMZdtQnuHDpWw91CqnvL8Tbu9Q7smyN3FtNVqzRfbt53ZDEsh3FZA4mi2a2cgp4urpU8oydCsMtnCFWk7",
  "key32": "26gSuoqVEKgnabqogtU9Py4ffxFwt9YZE7bAcHHquTUyseiXE8AnQY3JzkBm5573R1AxzouMQzwxbiu5qkZTTNMN",
  "key33": "2DPZHRjKwQB19TPMNsG1tZfddnxBhC1N9qC8EtPcPyeBXqekCerxMZzDBfvFJmXBPvoJByi4f7Qq7TTer4CkCvgw",
  "key34": "4NAsMNMqJ87CsGKFgKRwr9LFc4xvGcpqTanYbdXRMo27rD4eErUjNhwAZXMJMfkCgGfsdXs9SaHbBzRjx6uHvitP",
  "key35": "61RYoF45YMA4VJvxthTvyTCjnUMJeVe7tfy2MGwQMftZLoMZaqcr2G7gEpp1HrNPq5GwWRzsfF5ZhdF54oC2zLTS",
  "key36": "2ff91CkcPuGBix3zNPGhg9sceYXnBSbFRxf64QLMAuRMRG39YZYbYbHGXdNzPNjJFDRfLXpxQQnJSd4CsaGYRb46",
  "key37": "2GWTo8QPU1zhataUeuWbVzHLjZXGjSSaorXUvMh8QcZeGSSA4z3aHXzSGebLgG3pq7kCSdzCGWc3M9xX88SFNN4L",
  "key38": "5FD1Nyd4GnCR3Qk8qb4XARaXSzNSAHHk8Wb2Lzorz9VqHj7HxnbaqntEta7CKCwoFyfLv8J6uNpsYYSoM4SXBZtv",
  "key39": "2VyWdTwJGjrRvL1FitQp8wqknyZxLNoLG2XftoRMk2NQ47YV1afxFQBwAtDWr9erwWqvLmRQeVAGcPju6FDd5rzU",
  "key40": "3NmHa7MpBsFssKHDUjDSJ2smc1vzXJU5A7AAJxzeLHfm6mnkenraQRY7HpGaVk5GoT4yMTV9rTr1PSkB6PSQKi48"
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
