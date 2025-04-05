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
    "3Ng4ieZzEKkDw6xNDFF6ZqENnYVKqo2XxXCSb2b1KC7dVQPCVv9H1GuXWWbKsLAVPdhWT8hL2WbNt7SBuYXK64LK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ceSLpjcvKTfhhyPBCRm64iSoCjhyoWCET7nNpYheCejVAZeMixChiKqGpG7PrnSKMtpvWJWVvzcrqri4fvrbdA7",
  "key1": "3w5cSudWi1EazmjEEXwCRaTn8sEKcMv7L25TMGbrjkZaqJoj4dVJxJwgEBfEFGqB8XRK6beyAjB7fxdaigSs3isM",
  "key2": "53W66chEqgPQPX4x6mRUsH5gqawvs7hjj9JiUoDqMwRfVQiRD7tfKgGb4hvSwUuYink5zRqzithBc3TWxpdP5BXT",
  "key3": "vY9KmgJXJ7ZcPc8ALSVSxabGpSSCBhTZsCkRQu1u948ThJs2bVhdjcUifDbTNoaoV5YS3SCLiGz19jvJsAHPgNG",
  "key4": "2dvyUy99RogTrvkbyNyJkpM8np1KnffSJJyVmEBFL6GfRDrPRG2r8umKJrhnpWSef3VKwKEG5BFfCy3MvZufuAvL",
  "key5": "3AwctqvzaYgnx6vxo15ZX2Ux7S2wJDjL4QBtxsVQpTLjGi27KKXq5P5981FefPJ6ggQvsBxGPuYZABPdAQXuxTcN",
  "key6": "57cu5wVU7veYGgNPoUs6k8i5bCvqFkqA15fvzgKH7UBUn2Aro79UDuHJRexvuauFcVFs7zjbJfsp5WKQwJY9dDk9",
  "key7": "539wrbAPtSXop1dQ3QWD6be4ja3DRPkPBtVTuDg96tCaiGzwhghnbiFdTajiu1bpS15xhUhSvnTRXrGV2hN7eaJC",
  "key8": "4oqVTTuiLvBm4hjsyehaWUgbdYFtccp62nP8Zj1FkqJ2cj6khmqTBHwCJnDrWt2AHh9qRgdmVLigxHrz2ieoB6Je",
  "key9": "4EXPv6H8Nq6yxJbNHZpCY1kbSUguD9PBUKvVK9SBwQ6ztNVCDBkibGGAmDwkzj9YN1DkzoVeyNenVguQ4eMksPhj",
  "key10": "2sz54rSKeX3qsJ9fSbnQAyRQg9U5PTfeXn1hpmdRmfnb6AjtEKjtR1147LvpxAZqBFuovcjeUjC1SexUXzdEQ6Qz",
  "key11": "5faXgR2xfiCpbQ53eBXMK9djWpqtjNieJ98d7as7oiTdx968BVfL65pbCF9hwSyWZmmsge2HoCKBFrcC7qzAvK6v",
  "key12": "3K3SLZWz6hUyz9hsA7RoN2xMQExZuCwnkLFSV6w664cuyjjidJNkf2979k4jrRP47xsjiYnqNxDtuJYmDgxmWqBo",
  "key13": "52R4isPGEnjx4B41wW5ydcTsEqHEwmdiUiH86bwEuN3NkNPvo5XdpDMiooppwHW99HKXyib5J6cw6G9QDVvezFpx",
  "key14": "54c5CVxHwd3SeK5EWEGgYAk3CaaHN7xqnWYYDsXsSNAn3Rn38g9Jd5LheFMioULjy7rsUaqc1yDGewqpXSXvzrnU",
  "key15": "4Ao9SAoX3L4uKuz6MowPyMQQYQ1LQTh72PnVsocrFRWVp91KSQCvUTE2T3AZPv8pGUzpW98fnYJPny7FK9MRaM3t",
  "key16": "3qyXsv1ypS3PGq9V9igAnhAxTPrek8X9dPDm4pGBDkFUBQxEGPg6V6JEKmtnibGzzbG95x1DMdj9WNbK1JXXkpgx",
  "key17": "5LoJyBoQNLEGmW2aCRQZJ4XcLktrcCpUyWZCrRmY8TA56p1jn7Cb4kMSCon6BjyYc2XjYCNmRT5aLxAKHG5BLPqP",
  "key18": "5KxXvZzoYFCoRLB38H1CXDVekviY3KcEceeX4TKsgsCE7kiJrTRQFp9GgrCy1GAygRM7ktELF6AhBA2rJThLMBEg",
  "key19": "3gvif2DxfdEHHCzf9aBj3Q1YSddxkGbdMBzRbteW4skQDjcrhxdx2DkCD8RsnGK2ZMY3rG8HvP88pXFtx56a9GWR",
  "key20": "2MPu9zSShAFpPbeoJgfku55a66Qvg9dfV2jwajsxQCuUV471qKpegUYoJvNjoMTjgHFfVexiS4ctjZ38Qmuf2rZD",
  "key21": "4uu2WeQXWRHd75rv2iJgVed4sNRjWdjPBFT7xJWDMddqWBQawgjbsT6Tq3ZKrgDBXt7gtCYduu1Mn7SeR5Mw3tAE",
  "key22": "fjFEY5Axep9DJm9z5Lu4jBCBzBdp8Qr9GybhWMXRxNGQmYdHCWD3yJBzDVe6nRdazC9yVCW3iRC4V1KH3WHWu44",
  "key23": "4JuqyjTGihRkDx4nAXtDmyrvVhtpX14foZhkQemKoHzHBiKsqjQNQfqt5wF6BT5feZBkHK8qGymB8CAiWDjyrXHJ",
  "key24": "2AbLnLHSswH44KdyZ1rgqJsaosPngfXJBYHvBqfuHq8jB47oMqhJFpxGFxuPzZTr6FhRWQHFBsPfsJyJZj8N9tsz",
  "key25": "9BPDVgzT8R3oDnjDZBgVQq8FfgtkwuwiQasWn8kLwcyLV7iMSNA9kA7WY4vyNhmPRRNivNDo3kHrwhrXm2NbRAM",
  "key26": "55rKnTdw3ie3zJ4Q61xx2wqpygmsNLWDKucfmNDrp5ZZCMg95F5oms4R63omnsnNdMnRGJEw3ms1jGy8iM3ZwENq",
  "key27": "3fJTvnGZ7McpgjgL9kvLyahJ1XLPcFGjGqTG7K7x7X39byD4DzFVxQvc6GGDoUTnNodTD7xCY6vSH8bBjgEALBCS",
  "key28": "e4XPp8YuXR6UcFT2NHZvEaEtcpJfmzn7DjcMqNar4kx5qK3wQAgDKbtmXQ7VomG15vpP6BVGFgGRi6xwTztLACr",
  "key29": "2fyqjmPWc4kmjt2dYtNQDitphzcHEAFg8YCPxUQ28xwBVHKDZXjVCQvr3Ej2gNvZvNjCEH1wFqhxSeqQNtryrS94",
  "key30": "5yW9yAoHRUDP9cR8fNN1xL5bHBGFKbyfFkX62LQPpJHg95qxEAMm32NiaDzjEgxx4WZZpUhzTcU3xoMa8D23AA1K",
  "key31": "2dT3TfBpokNYobPb3JSiqoAzaxXnWbWoGwnktSDWGgjeoNhKZuZ8MgX4iFPKAbbcLo8R6K9jqr3Xe26Pdqepk9T7"
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
