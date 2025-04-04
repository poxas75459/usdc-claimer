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
    "3tkWTzwF9csxtzGwiSkgkiGVi1GjoA7G8SM1fVch39aTMnUuyi4wihEzF1XvHdEJVP4qsd8tL85JWge2bcSg2N5w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ldprj5hxADdGGZrkAbK15eq7i5V8diZzakgxWsn26rFsXaNuQJNg9oWKejFDiAhG73RyRq1e1WBU3jMNZzdUGb7",
  "key1": "5c5hZDqB5G9nbMXn8Aa1ig4nX43eubmqTyNcamhB3uTYSkGehm7VkqfSgXyk7SByNnrUtogEPhYrZ6NwGUr5SnGd",
  "key2": "HC6aTVf9CtgbtmqgfnzmPcxasbbpbU9ZCwczMKWE9uX5r5mcNSF6qV6biAHD1DDpQWPJDqGdjPNeCQdjuPPWN86",
  "key3": "5CRaFZR6b1De1LnFzQmQFHbq3m7sPgTzrQuVbUTKrV4S9cuTst1dqhs6gvuWQeHpvrd4dGamKNHSZMivc4DX1Sam",
  "key4": "6p5uvTn6oo9arAqX8bzWTszaycNHrXJuLLnn88WepqjJUzmuWctx7nyxoeVUfpiUGqHKUVxhsWDLRpskX9gPDu7",
  "key5": "18iAW8nFw2KhNZPjUTvE5ot9qUACyTpVRoR5K3GXJhxdBYkbyMjW6KM7rzL2NZBJeu9bQC7yzY1YX28bqqMT63r",
  "key6": "5z35Lq47B9d3B8CekM29bG1T7H4AmLSrS5pUmxTGGHMBFb8bq43F2o5itPSRcFYq95q9zMxEXmFoZErJRgvN3iRx",
  "key7": "5mDPXgfyuiUDQX99HC4CG9sKaf5cAwbP1vbWwtdicpetSDAJyCRsFvVCgeKbcdPXZKeMh916qVUTeNkEDthhe6Z4",
  "key8": "4YT6J8S5MBxQQjQ2MZP5oYSPo3L6Sa114KrbwSYnP8HqL3iFiuUKxja9GuxBcmv5ga2HEEMdUPzVT8tTcf3nR9xk",
  "key9": "2mYSXtSgx5JSHtLUevn5fjzuA9HfD1XE3yjr8uLuVeqUG6Fj5B9E2XXFGkL9yDNwSGFQ2KyNj24paNZAJUfVCrGd",
  "key10": "Q31bX7e5uHZx45c7hMQE6tSCDr9xvqQV1iPX6gwKZH7Mrn8dFReQ8EU6RYbHMmZEpcATrvgXF5KUEK6PchDGaK3",
  "key11": "2S8xLvUm9pijwZga6FhurjfkXqrazB5JezFgfPGUf7FXrm5H3o2tox7Y8RbDXBHSU8a2WF15dWYj6shoZF7yXwSY",
  "key12": "35NahN3Z9dgrtwUyj9GDB8rd4TSfBcn8VrL8jzxRuhNN3XWYeQ5b18nEE6DjhGiWaXPBAB6HzPB1NxuxJ2sRmrGn",
  "key13": "3Un7i1iAsbL6yGdUFPyfnzcDLi9d3VgypHq9YoAqovUA4nKTAyesyK8dRYeRxHTnoN7GLgHebA9admnhKNPPvoXR",
  "key14": "474WQdwa59338CxK9KqCwifgCBDe9EUhRqRahorTskZxWqYbZ74CSs2euf84ZngfxwGCspZ7JQDLxG3iMbLt3v6",
  "key15": "5PT7QyrCWRm8GbGcpnmcjubZQ34deYLWUg6UVH88gzabVJB8vviNTdGG3xEogFKaBsgr6P1XV2VGFVmh9UE91Fi3",
  "key16": "5yqoYimPBiqBKBzrPNqM2A2MZscF9JTn21duWqQNM3Up1hAXe2SY84VFaVNCjKvvvgdV8rv9HKqbcStJzJbumD3a",
  "key17": "4ta2vQa1DtwAudJd23Wh2cBPH8axD8hSVzy1E3PZncaakAARMKq11qsXDAqUW3jwEvWkyHnvr8xFHTu76zxbpqYs",
  "key18": "3uR9oUX9m9K3RpSSLveK2ZJY6AmVBR8sTJVWqoQWPDyCD2D6yG2B6HxzvwTF51NAcrmEjpiBJ5fzz4vWZqZMDN9u",
  "key19": "HU1ekTHzTegPwzd7zT8ARcXjBQsefywduhUofvziYXnf3tsGBUbNssKkn1wmQgq9LfdvUvcwMxfVrFGJMbuLa79",
  "key20": "22RL7WFz1xWa155X7jKGdhpKD588aGxSgEzzdBmnxp7cTrM2d5bv3uFiy7gJgiKzruuSdGMFuTUgXwhV6VJGphf8",
  "key21": "5EVwg2Wzf9ofEW2MqbzoeeJSDxGC3huF895PYeMKSke81QtdGrnphG7ybkpWf3oRECdraF6BFi6m9io5zXDFNDCZ",
  "key22": "4V5VhAEEzQkNpdz2eNBz9zNX3m4ZPFfGfKrxY8gwxpnyGHR1FkZ4NSTttTtpnQko9Gkxt63Y5F8386RuiJTPrhzw",
  "key23": "StMvgyiiwaWdepvJtibD11BFuXzEYu1bULt92pgLmpk9JoV28xY455V1vy9y8DagfJa5hDLmiuLiPnJ2oVifkpd",
  "key24": "3enrc7hVdJvxYzAxThVH4VhtKy5C66Q5GWV1Zo4NseQTCgq9Y58tsAHkEZnS5CT8R749edKwYDua8k69UaJUHeMW",
  "key25": "Kc19RqKXdXs17pXDHUewtSYV7BuWUWTr7ouF49C2V9TYCWBA7y1vqsoENVQGzePcQAKNJpLbNnpcCdknyWaZrXx",
  "key26": "5cEyAsVJq1PtsSaCwBd9LzWSNT3VxegL8BwxgfgSGerAixRbrZFsXUFiz7ucSGNoGmX3Cy8d9uv5DnFruadDTozd",
  "key27": "2npUBE5Dz9KJWUD9xxX48sLsFEttaZoLWz4AJBV8yZ9mWf89yaZGTtZNQXL2CMXh2BZ3qTZAM5oK1A65Z2j9TLJk",
  "key28": "5hyhrQvWyj1t15UN1HA38fEeqPHhuCVA77ZZtL7HUieTteCEFHFHScPSNPWFtdLcZ5rQif1p3W2HKXWpasucDK6N",
  "key29": "2wJy55JNEUYvxYxwPR1d9mRZS9upPZgEfi59R9kq1Dh8ginw7VH1Hc1e8hXfaxARee4mqbr7mP6VbRGfErVWYRB6",
  "key30": "48HTkrSrFn63uznBG3XTxrDphnfShtQ6atw7743161kXsFzGtMe5WioNmTAnsLbhGWgNurddXCTKJ3oBaT7evWWx",
  "key31": "4jGr3S3rrCYyNKE2XYTzyT2X8RvksB8u7gX8sN6NFPa72TdgDHPLyMx4QMsTPVjH8Gnb2b1tiTjgx75qe18wKrJr",
  "key32": "TNJC2VqTPzjahAXenuLJLnJaoVDPAnFc9NDgeRBEPbrgDKK58jRY9wm3zUAQoHsGBMEhhRGUwa3PuBA7fvHxL8w",
  "key33": "5AUwDoJpoVE16wdEwVvj3EcJRS79tPBL6YZ8nuj1S4XHrszbqgj92V4Q8qobRkoScH1Lg2CBHxRescXReTUBcvv3"
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
