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
    "no4ysSPNi65ohJ5pd2wTPJUxC3vYdmyNYqpoqQGpyiPyKXfdb6uV6kqi6VU5SCspNTvyk2iZw2EHit28HTYSsAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RVLXS1TYhdyeuqR5odt1C9o32qiAuNM4EWrnom6Bo4Bs1ySCDWbY6yFdxDzSEBgyPFYzHbochMAXYUfaYKcc19",
  "key1": "4wCzSBmLiMcQr9NWJKN1w5E4o719o8YyPrztkonB7i8VD8b5df6KC6xM7ESWTRPvoWj1AUH9oMPvKpAV3wnd3HEz",
  "key2": "2otNbp8tUGzAJomrbSUCqyJ3Xo8pv3kRmevt9bidrszcuFCRLRc9k3cqjmZZv31YDcLvm6N59nhTRcexC8cecU5h",
  "key3": "4mFGyNER3qaPwFZ4J7wBDZs9MCG2WkMcEUzxG1yFNA3pCyTv7d3e3Hz44XHbjwBcJV85SzL3N2Fmk93RynJisk5V",
  "key4": "3hHMfey4LjJGtuC7g1SPicjKWmx7BbdJpiqpZT7ds5apgjNx5XgsD7T99sZreV7upMpx8uX8JnEBmi6EH9h3Evy",
  "key5": "FFRT5FcVewjk6LfnSviSPRUCEsLN6Pex5PvssnyqVYur9uHqtYoS1knnQsRHHECChtwDWvdbmWGR6BKdBk2uL9A",
  "key6": "3g4FPJoFK4smJyqWCmEWvKq9HXLUwpXC4XnuthRjkBe8s3WyAA6LdPNxVT1GwnQzQvHskNSMiMBoNGdNBFYbtQma",
  "key7": "4ydecVs1Td2wwzoa192LVuBYAYTG2gaCeyZdZRtQxu2iiXBdN5ktSFA9sBKtyZudieDG8EasTCtVaGpa8XNkbWE8",
  "key8": "574WrtbBdTFU7zVv9qLcLRiYPnExoPLe5DPxD2gf9LMFyE62GQNZG8ipSAunNpPmCgafZ4guJuho4PRZLa37ZJfh",
  "key9": "4e2G1RXKEdAd6BznCzmkz2WDarHkAx2gTbZEC1AqhZ7NbzovM8BtPpbdRLo9x7Mi7zfDgFGp3Vimm7N3kXaBWPk5",
  "key10": "yuvbWG288AnnPSENanPX4vDN3jZy7U95eq6mVuSLBJqGJmHMo3ZohVg6ncVUFj8BEiSmcXQ8cRWUSpuegQGYCx6",
  "key11": "3c31q3fRZfgzTt7nWEaPat5xHhxbfYQY9xdVqzQv7yR3npWuELdYKyTpHf2EvDCJNFqa19aLhp5K88cS9owGyTjV",
  "key12": "4RnBRrFcUkZerhfp5fV9fksJkHoDZ95h6UDQWTtQ86ofqHGEHhjRdQpi8xhWK6CHnJ5Zd2Jb3LpMJDis8Pi219YB",
  "key13": "92XparfCwpwFzarQodwdfqkVSZsvhS1XSQMwyGyryBi2SDmsT4imKvMD5pZe9n9RAe8p94XcbGpBtD8ELPZcyeG",
  "key14": "3MX2YTEYFE7jomubm74WKRUFEbDR4Az3B45DP8JsoJXVyZFPonn395mhcaj27NoXUAYnAJLX6ioQR5sQELo7t5ym",
  "key15": "2gWyQRrnrRv9Z5jhgD8HSemwBewzvXPj98xBjGrDsNbMAEJ8J3nAeE3uuCdbjxnUM58LGiuqHGusbhLxzh98Za2f",
  "key16": "9h49Tvoooxkv9xCeUkZM8YxACBqh7zqJPR7j3L7UeYpgp5uWaokKFPKApxMieXeRtRons5Y9Y9x6phwjUmmji5a",
  "key17": "6njDtWLnAqNXwL6wxJsfB92mQDN4kVv9eSvG3BjCTfY1XWLqHtqHoNxW4an8EXGsn913CbVpyaHMk8w3KnQuKbV",
  "key18": "44mwWqKVFq4fwVW4vk8guJySch8QfCYRqP9G2m5qXrYAhG8vj9Fx9td3uzjfZupT81x6yu2Px9vcT5AFexM1XbQB",
  "key19": "4PG7gyJYUKSZhYR7uF7HNWqVcDF4R5gWKpDhejswPHvBgXm8sFtvMCVDfisCDfFXybCJFZFkSQo5Jcrj9h71zgqp",
  "key20": "1sMm4dAJqhPXM7Qet94VNDXB8KDj6Wr8nN3Ug97oF4UFHqsRJan3VCUp6sdzWRPaQZZMK1YX5P89K36F5nUSMjR",
  "key21": "2CNJ4KnAfZzJjNVrv2FkUGFw8R6Le4gLC9dFtY5sU81P8PYV37LachmjXNudwt9vHwsipeVAuEgtuxubYMQRvZa8",
  "key22": "51mryxc2DhUzXBoQLkHz8Cn8sTBiAu7QrYG7RYZpNUBF84yXGDsL1EiTqu5hQG3GYWmGNH1dzQ7pnPuHtbf2XnxR",
  "key23": "2R8aXtCq6BWhmKD2998SCNuHia1C4LArVqvR7n1YqGomNgbS2w6VoaCFzwrHixd2SY5MYgHM3dC8o3aVSdhY4dLJ",
  "key24": "5XFfsjsReikaCLpA3Gpr9g8WTUACswQ86aYtNMihuf2QSJLM7pWMbxxtVEFXFLin8K2S7uCtdLivTFfTCMwFXpm"
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
