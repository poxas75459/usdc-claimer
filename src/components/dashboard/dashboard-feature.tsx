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
    "4esC8WL8vSngyPwoZ8DrZCU3fgAsiA1jSXNskMkfoqXMvnAhuE614V3qyRHRjykMZ636Gqvzm2RPSLPvfggcMWL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D5AdQqPbDdvMdBnrcTdsPU6yDXo8Fh2DxhPw3Y2LXm82QJnSy134mZcYg2KJWZP9wA4hnqkuFMjhtFkEvW8einS",
  "key1": "57S6qHxfmubP1ZG1CNNtHooVFisE6ausRVtjbWgogQ6P5cnT2zAgyMHVXyjVDkpVAyBiBTcGy8CiR7pQ1ZzvNjMi",
  "key2": "3kJFpJBr26mGoEh6kTmeGDbccRgXLEZCjo23fhWFyC8koxAuAxanzHsmHuPVosCPHthfVfqhwSTxuGwepokCUJ2Q",
  "key3": "5GyjBoHYhPHXG6zrBHBWDheLVzMSYHqoJjoafuAq9vSQavRyJKMB46BAWKcy8YKiN4j4ZktUo6Kp3Sg6soc4qNeM",
  "key4": "geW1G9jcngaiYjrdQKsAhjyDWCh5gxAXacenkz2jSbhv2LwMc8BLW8yWNoL6j69bz3HkHC89TNWsVsJDkr1etMH",
  "key5": "3Cue93cC6UN2d32MK2qzFs3HoCcTYD3aTX6NCEviB73XfqHTDbtqVTU6Z4qt7zH3xy9VVHw97tBqzHcjfgEUYmLi",
  "key6": "2d7sMCDjyuoKGHSznoUSAb3cjcFWvyX1JdHfBKoAKnUH9P5bGub6ofDCpHcCJE4qruqDG5D9TYdRXz1RZFSieZbG",
  "key7": "5KwQosBL7pLFuPreyC2uN1CvQRnZPeKb1xDZxQd2K4wWuWjnUy2d3yf1rHKTYGsfSgDJLyzcimAAMgj1nT94BUkG",
  "key8": "5UFC6h69aPfVcBD7mFTEP54FKCVf5pvuhzFJfwRfqsv85cSgvdoBNtT2a5xBaBqxotmg4EeJovpr2yaHGiaeiupQ",
  "key9": "51Ctks4k5oqk2ESomkwHVZBm5t6hWMUSuBAvAie26c4uyfKeQ38QxDSuaVg2Pi3nLwFyp3s36UVkv9t5Ah4ByRau",
  "key10": "3KiYi2d8ftWfMjzJZjs7EYikkazLERgHPLPgxuYRfKeN3SrB2xEFgXNy3uWVkGoSbB1HRzr9VgChRJFdpCndvg5V",
  "key11": "3R3v3P5Tn1sYSg6znBrvLZdDB2KMJre943zcV7cyFQ9pepVF5V1cez2E11jxMLY29R88u6ddJJdB4BqkMKNd2QGJ",
  "key12": "3YegkqsuqVjNtunxccPKvoDUL5N1uCxK1d1nqifS3SA5ZzFnpiXgJEhmTqDUuHWcoqxh6iWrPW5K2N8TG1bgUNdp",
  "key13": "5JmF2JsPrbQsWpoJz5ZUs3ZPaN4iNvED3eUs3bjzTpERrmEg8cb5YDA2uChbSQtmYSQUHsnVa4zq1Bct7uFDKGxZ",
  "key14": "3d9q5EtTFu3gL2NKRtBqzQEhErAr52rRd6WQJyTXraZxPbxcBNEGse1ttsp1BCyFPPCYcxGBTXvJtMLPaJQywcL9",
  "key15": "gUhUj2Yqgva2KrWLV8bxjnb5EvjdZChAZmt43WcMvJAcoSYQKFt7Xmyzk8XVXVYfZFoRjX7RRHdDHvyxPsdwbDz",
  "key16": "3VX4uHVtdXNMfG9roeSKaF76jKWmyrpAcuMgccHeEhbEoHtiWHxv66EgNECXLWZuwnt8VuRwzBE9gjPvSoTDo6Km",
  "key17": "4Wh6eTaYK7UqaLGqr3xhNAcAqcyNpytgpLzZJxnTtYhGcv9fREUZxfvkCcVBgXBnvASbiEqrrVNoWA9TiZZ3sxdj",
  "key18": "33dGG4fkfqdSTE6AjvpViKcasRfyPL88bpJn9TSNn76tkjEXh2NhL3uRiuktm2wkQRDfKzC821QBL7Zni8q65VgG",
  "key19": "4LoQEzQvswzZLZ72x22Nn25hEqtL8Q5FpXcEAHdLYc1Achi9mnPc1HezV8QuLuve9JX4HDrivoWKKnxH6eXBuMEd",
  "key20": "5k9rd2AFv91TNMNFnDoPTPvd5jQS4uuVLiZRXgCVfom7G2S7c4hCWhrahNLwYQKzry7DMeBnTRKoSu67Y5bszQzP",
  "key21": "67dcLYqYNr2gTGP5WUPukXDcn31qaWuDie43HvUCRUVcaofexoUcAiz9h531q57zqjgM69F2ZgZrQ88F46ceUTt4",
  "key22": "4n3upwCTyGZB5RbMjJDwLD6HSVVFFiger1R1BDcHgjdLZ9qqGYcAdQAA9xWzaTVvyXaT7v1q6mEMhu52Y5hgQviL",
  "key23": "2n7UEv57ahdH5ohJ2sqdLBFs32pWTaN78DJCfTKuAsCH2vcLNVeoQqPXPrhbZQmVcDddZ7vn8xkfBEaiQWPPU5fr",
  "key24": "47CtyXkkT528Q22jr4MbMKFLeQH31d7YqMvgQfUc8J4gLdmzUnMZX7vZcmZ224y375ERTBndx9EHUb4N3wdgTZit",
  "key25": "22h4KDeUj19DqXZhzMeKpscz3s9CxVVPvxn9bttgyHipUcSqBzJbUKTWbiLieXR9Hrh98yhcuZWM2BEyiS8z6hLf",
  "key26": "45coZ1WfjojZoH5KQysiLTWJFMVpujQXdtACgPbh9p3x8EsAiiAEQbtQ4LveXG3XqSG33Qb8S1eUiKvjCh3ZW5Gv"
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
