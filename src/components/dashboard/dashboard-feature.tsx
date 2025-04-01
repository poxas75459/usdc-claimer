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
    "5LTpqkNnfnhVSPsh3FAGfhkZat8EpRF2gp5Ed1MYU2kUmsR8WhVAzjTcJAEokoQPfv4NePy1w19SDQD71yGjXGVC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LhzsDTR5NDoVsp8fk2aaGi1Toinqk8cE8Ty9gDxdAWPiK9WdpdCK9QBxVN11HsaQtmefNbfq2B7Bk6g6Cr6x5p5",
  "key1": "qzfbiD3oeMTywvptEY3m7RvzmzywWAK9J44AkJiCsdnuuFJBt89bRfmtVKGnhMpXfcKNyTbwcch6ka4ELAAHFfd",
  "key2": "3JLiyLFL4yQSmZzByAN2kuqRQhnixnC7MvyLuky1n6T8jxk6QHtT5QUetL1kcRaCa9DZp91h3Yfittr8bu579bD4",
  "key3": "62ceSdFWjX1ut1uNSwwLy1HpBw9RSFKa8bn7gq1hgHtoLMN8buv3zUBm92wndxiL5MKJysD9WggfBc1Bc5yxDybx",
  "key4": "5twuAQRJDZ7aG3DwFGYAVCqY5aiso1xxegYQ36vS5KtENswsg77MioocrYet44xoGHjuuW19b8ahwjmKerqdvQ3T",
  "key5": "3Z8BN54UfHNBL4H4Jc2ipgBJLoTuP6Bg6iCC9vTCmbHEhjVHquwef2NUtYUWhbHPw3EDW7qG5hHX5Y28Vbakesoa",
  "key6": "3Qd7fhYV61Ft5Zk7winzwKCVwhKb6tbCSor5iESzuPtbZ8moCn68gqwM8xPP79yAbmQ6dYv53MTmNqXw1r86zWgQ",
  "key7": "4cZMTw3ZNss7EMh7vAXMJy64xDpn1AmYpPYX91d6nHZa8JSEfzQAyczPrmirsMwEu7q1RkJ31Bvz5Lae6C7Qh7dQ",
  "key8": "324ii8D4KEUF7pMaRAnrKWgiS2aV3o25QUmWcmhqpRu8jMUDvyf9onP97KGsDQ74thrDiNp4gMA1TNUgw4gSD5Yg",
  "key9": "5QCUrp5T6nXsgJP5cYqdjhJ42qtcBbWUPEKXCT37DmYbUMJz8b9VoY5Z8W5WjSToerqtnNw8dDtdfcUDk68SNkAR",
  "key10": "2mt5iadHcDTWUrkv2owUtnSnbTKZsfgFsmuj8Q3y2RS8NNFudMMY4UNybmtrzbCz9kBs5Nfa4D2aFen293DbHyMS",
  "key11": "pVtgZZESpMJBCdMdqiMdMARkPaEZhEMZThDJ7C6YqEgKUEXxoEuSat2VDmjmSHnpgHAhgowTFBFLJesvCJ43bQS",
  "key12": "4hxrnpVWx51EpKiNGjcTiLUVSYft3YHgEGca43yRL524CLVrv6MgS6HnG31jMV6ve2BfC3nnVXbd3tnYnAdzq7oh",
  "key13": "4R1ZkjLwroKPLnsBVuDpSsBoTvxKKT3VfEFY2noTz4Qzg5GQaRDPancBBMUnzBC21uteMtQbkHN7fsoXAMTu2pEu",
  "key14": "3DEyttrSpzJbgg4KKprbZMACNTqeqHAPZtTdo98PSxzaMBZdD15Z2huf6Hb1oJf8s7Qnpgy1ganKNPoGjeLrmBdQ",
  "key15": "48A5SrtTrrTtt9Liy1AF7nrxNvCWMKqRfPftU1XYv315d3DRLrAjQdhc3aBQsYdWowEkm6xfQy1tFk6s33TTm3r2",
  "key16": "2BkboaYudX2eTu8KwFp81tJcg7FtiXJw4qyrePwbPCjrfjWbPjv3iGJLV3bC91YLxoSFuvUazV5jd8TS4PNq1hjD",
  "key17": "4qfHcaD7fCUdoWtMQ7bVewRQ3Cn41PRC4bZM6M9y8mQbQqbZRNFNG5LeF5cPLkV3cCjvP1FRVVzQ3FKJvzNz2t85",
  "key18": "VG5tKna528v9zxceeiXoodeg3Y9VXzUYxECygNCgJHg2vkVkpDghJzQ1BjcRkHyQ6h7FittU7DibWuz79PbvELA",
  "key19": "2u4Ck3n6K7uASyzCtAgCB6VJJ6hvYqsw6Prqmo3KwvfMz7gRunSegJfSNu2129PQuHs3L5ZqaWrNnRW6MUbGUKEM",
  "key20": "5wr3g8QSUnkb6i9D8WoRDwiGBFsCcgpyfbjdLYw4cF4eje3ZaBWwSeJ1wRfeivFwJLRt2U28jDcQ1QewqmK6WyB8",
  "key21": "2kZPA6dUMM2wZnpcoVbgL6t2tsLcYa63xUctoXkshPCs1b3yLtN3BxC8n3VUgyK2G2RVozU8WcLjHjwZd7wTAs4V",
  "key22": "4vNcWrtdhjRr69TT4FAvfgHaLixrzaLRtaWoTgjLWarFAAnfiDpJTzceMSfLpbXpLoBk7cyBiQGjyxcAMKFBJqTu",
  "key23": "2tRKsrps55WMdceT8qUvN2Ej56Yx6ScbWstMSu1fhECD3GU3uqFYNYbmS3A66HzvioB4gUTbA3UKKzv7B8TELbDA",
  "key24": "3tsgPuLrzBm4LjP3PgvzyniJu54JVuEfnF4Zbz8j7WcW14St3wz5hyzTZo6je8tUgKsL7cyYYT851tta9V4ZGWcU",
  "key25": "NHtE33b2nFJCxiiHFvw9kX1kG7MnsTmk8fFzgUAa5yjE4pQyBBuU1HXBaiUHwByQXGMoLAbd93rHa8CY4aESsHL"
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
