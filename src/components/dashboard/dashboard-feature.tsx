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
    "mh5DQbFMCvybEnq2cDcR4QYPEFx7Xr9qD5Py7yv1BePNyfmfa3hGyizKUuQ4wS8ELw24d99FpFsywspw8qMKs1D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PhHj4uy8Ytt3hpBdrrsHS7b55ZcEGXDna2ze4d3wj3qjo3ii9DjN8fZUSWpaYjfAjLkaaCSvbePJPUiR68XjBHC",
  "key1": "4ccyzEH33PL5kkc9jNrNzedbDQZZZwNvcqAegbLfpQrQgQJ72xEQT11o5TtUwnsG6mmEttuEs1cnpWziF2EYABFR",
  "key2": "2bNnsiDSf1aK2HsuwcgieRRNGaQosyU8J51AerGTUiTbjgFqqQJD2Zi29MtNPBa4iDdxccM3ad1Hs5VnsvhiZVjV",
  "key3": "AkiVPEdsnAaahtfDEm4cx3D3DGhrnB9oe2Lut7cwKGurYeDAXaZUSMkxqjFgBgwFx86S2sJmHzt24kxXsoTUAVT",
  "key4": "2Kgoewj7WfcCmJni9ZXgz4rzhTWeKymQbznsaGzrPkyFwNgxw3ak7pCV4mgJME8FGBtxPaW4PS543jTHSjcgBECz",
  "key5": "3PRc95QGmfhfAcRG7wsyAWABpmWTuc4BHmWvW3WT1eGEAsm4LZCNojwaRSR4zknrTYXJ2trt4E1aV8cNPVhh2CKP",
  "key6": "L6ei8ux3QzjjPcnApnWUbT5q9rewYQtiTLipNiZ6Fj4Nr2PnjxyeNhuot72amZNvx9PPThB1cjVQkdH1CyLe374",
  "key7": "3baQgo6PyZ8z1MSyHtjhBLNF4eNtuCMJfEzhfRonHazFECgkLYE3WH7Z9Vq7YBTbTCGafWZKtHnekez4Xnefk9p1",
  "key8": "3wYmskqCmucFFVgXFt7KphDYTgA5dY2sTxFZq96C6uYLRessD9ykCjA7yZhG4MSy3TkmfsLtd9jpvDWwTVi71T2a",
  "key9": "53fZqMV3Yf1FEnPrDkpSQwpKu34Ksbog2J8cnHqfWTzP3HS38qNSkeH6EySH5kPCwo63LqRQNLdR4aGjruKn1bNm",
  "key10": "5ASqoxzCYJCDpwT79fC4ApXhX12g2ATZbVFE8im1wm11in19UD1A7VnyiVLdPCbNk4zon1dDqos7zGiMJFYRRzEH",
  "key11": "4eUyxURbPvWcuhjDyTP52HrB1Zy67AH4tG1gLEErBtV2VZKequG3FXqv5gAK29QJEocmxZrW3F1Cd3nx4ijkicPN",
  "key12": "XJhHVEGgEpW5cZHWytLZvPKVuDmeTvtqbEdvDxv4WLa8FCGgRJHXaib2eowbefGfr33yy42QfKgWJBYSt4QKLoH",
  "key13": "4xeoBUPnusivRwgmF1au2YZFsoaoMRk5aWWAynvCRmoCQgzxi8uSBRReKRnsYtrYRpZ6LtNkCzNunXhynbWY4rjo",
  "key14": "4gZmu1h1ZXLaDqWNN96E5KwgZD82HM8PbKYMJEoZUwZFYfQH9aXQ1K6x5V1Q8umuLjNzmvh2e4kcbZPcZmG1G7VC",
  "key15": "5pzvTYia1oLzsHiA9qewKKGyRgiiPD3JnJM2XByyDLkss8sWf9EVt8qbePG9PiZA7LF8ZsEhj9cAimpGwAYNnVY",
  "key16": "3wFXCMrGss51FeVYPFeotRs8UxAM5tdG1yZQfZDTqp1iA1WtpVybSxaSaG7WUqG5Nm91991yDnippHtduYrA8Jgm",
  "key17": "2oEKwNgyBXjT8pmjqQVNmYrb63cMWQeLP8VXs2PoQHgR6yZAqE3mEB8cTieCtsHYB6QCNd4CXtGHALAcXjhT4k6",
  "key18": "5scFWcddU7V2h2Ms2YYeesS1YQxvgDD22X5mqpaHkVcJaDXy46T2TGcBx5gJjpKpxjpMV7v9Ah1Uv7EadieX114K",
  "key19": "5EKBwvkFNyaqBnTMoirQjoVVyB4o4mz1c7DmkS9HZ8B64FB1QuUwiD9cC8edZf71EEjvCoxbxoAssfV4N7KNAVed",
  "key20": "3BBCB6QESX5bezaGyLPpCaKsjnHGWZ1x5d7n4nEtXjNgmdmRfJ7ifowna76mQGeMcikySdCj1dGg7WCMyF2Rbg2j",
  "key21": "2tFyrftcduiX5aKc7knPvPYrpGzn3oWAcVZ3Qv9JR1ij9v8g9EBAprU9fweQoggAHbkfY6ToJx48JBunRwTPzpJr",
  "key22": "2vLfFhFxVgmw34avVmGZcsxTZ1197XtcHubWz8X3LXSJfpPQbHVVsnzYuEdq3r95uEZKJpgtMT2isvvj4Eo5vSfx",
  "key23": "22S6kcjXVKkzyHFK3iDxsrYvxhJmQnfk32Gr7mB648YNukfHM5KZY2enGKLC5DcJtvDZgTd3FdrRaPWMndzrTYwy",
  "key24": "2iEJMQbgCJ6X69RuEwMHKHWQumax924fJBFBfxB3tcNbugLyobcfadQh1Yz8v9d6CxRzUQAJUaiqYuZiZW3Z9T1J",
  "key25": "hmyG3rGvBANsXomVeckmLjX6GwYfxhWrcWM9m6NMS9tQSgcvYpJEkTga4897DgpyDadKBf5VaYZmsY8rBMeztZ4",
  "key26": "UFo6o3mCVar3dCgYA2gHnczLVAiF5RtYF4it2jvDhF1F8yqYczJfnkEPZtBtD59wjdGQx9HnG21jxXqNS665HfE",
  "key27": "UGx3YLPaNc2RZ8sdmWKXjSpfQW6q7bkyVWZJKs6mSiGPp8YK8rJF1NdYvQKRfBTPwUprg3v7BcMdASUJCxF6QVR",
  "key28": "59QVEGrEWUfRzY3Y3quCECn2ved1aZRS5MKC6DvDWaDhmwfG19J7hCuHd9krNqxhoQyHiSZH1pGMC6CE1jSMWxkv",
  "key29": "npR9iue3bihfqQk8HmjiSBnVEoeSRymzNF1sycKgrS8Ld22cQqF6gRLRiaTFWVDwQJk5QSoX4ZmZY5ReR5TqoJR",
  "key30": "5k3B56mF8ZGY5NhrwR5wodNWwVqBhpZe9SMSq62wS7XKk8qhfSmjVNV7hwocjmw62mMzg2J3AXA6GA1DiSzCzNnK",
  "key31": "5eKao3CM3aaWb9ncwaEQYM5gaJY29KgQyKU1iiWrVYfJsqgtb3JKmYgstKRvuMLgTiQs4MgPF2XxXaqzRXX1pAAV",
  "key32": "3kKFBUEYPeVpdLHcQDkerqPCycAohhvaCE9eWrt3rxiTs4UXXBe4YBLDrSJu9J3VV8uo6ue8QSXFcWipbPCJVrTv",
  "key33": "43MW3cUR9pmZVAYB1Aur9fe33yBKFnbrFaQUdP3xCGhhja71kj53i1b8rqE95NSZE5d5JcsjCYbcjgRPPMoPmyhh",
  "key34": "2XTVsD15TCFELeDkhmKGZir13GaXsgBGGVBixd9XeUZ5BQr9DoATRSrULyLFTMSZ4MrLtB3Uojs8AdU3BkpzGeQu",
  "key35": "3sHAwhVzEjkTuZ5PUTMSEDq61KA7ZyQ12vNm5uevbNZoCwiMhntM4QwREt4sPeYarGGk8msUCid3iehHnxyrpX5J",
  "key36": "5gu6LLeXCbYXRkGsqnTEbg7D5hWiSrpzJAe6m6cnWaqCCCHEX6pJ9uVbEjooD2u9r29HSf8WCRW7WTi6zXwN7JUM",
  "key37": "Lz8X3DeqEtVeUiVGX5S3S1CuEcXh2AkzmHLKxrRoodoLd3RrUgXz2bS9xBKqws3EtTfVtYe5gjiMH2UPzyKToxu",
  "key38": "n4ZMdwkcgVDvHksoNXjB5LtSiFuMiV15N2whXf2uGuJEBoWsXygbrvt4KRULDxinJ4FxNqAKmeByXXhatrcrXaF",
  "key39": "LMQ9axdiM7NHemkBTkRTTGZGxN8r48YTEK6oX3TwwUWMNtohnxLBKyUmuSmhUMtYotqyNnRCSHrWyS79dPRDBJa",
  "key40": "5cnAykBVKQoqcRwpXHVnSZpe2SMh5YtKBpGd9jzJNB4chs5kXi21q8vrFDxStcmE6mbgek1ggFVuDpGLEDhzUmNt",
  "key41": "4SDjvLyQFeahi7LxEVvA5zWyJQv2nf4PCfoE3Hw4g6LzcvFBNtaAuwQXsX54oKwzn9XWF7X7KPzKYytZcRaqE1BW",
  "key42": "4U2hz9QLBJfRuH7ddesPuEbbWZ7YscAQBr2W2L8jeWvLQLs8RSw73KspDEVquABP5ZNXLuEur3baejA3kjiHSTqr",
  "key43": "2v3UNgcJ52scBTPLFRttfBzfZrViHDKNumtR6knRtFr6PDyH2P78GvrD3HxU3QtwkQkw26pwu14A16oMp8N9FkRG"
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
