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
    "5GHpsrCvDMAHJAgdhZnxNzaQQvRrBUsJo6mT6U1cKooZfrYX1SW6drejFn1fH93LXkYYY8qVhjBxpfTJqHHPptr7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UzKe1wQ5WgPA2ZHwKrS35TKRinrdDxBYAZAxEL1U1KCWbncekiEiw3Hu4JmhMkpYzfUbkp4sfepDEUBMY8Dj293",
  "key1": "4pGUixuttknGpMdxLDKHBedzQ2PeW8qP15Fy4VPXqFHZKVFQqFLomDUPndcjPPYBKnd6n1KDko1Jev3MUc9zmYaA",
  "key2": "3GJB7Mm4NySQZaLDMJmXSzJLqAhn4uKoGdSeQx3ptwnhEDoQDx6aaeXZP4jGxrw1HizWx8BzBspp4MaZCgDhqLkf",
  "key3": "q9hQPAzGWQnKNAugUQhKqtwW1LFfp96krzidEfdrq99pSCTwj8LQwbf3UA7Fi848kE3eYvUoepthJtp4yaVYi6A",
  "key4": "53BHmrPVyEkJ7hEUqjW28Kzfp5Ahiz4Y74MsEziK11Sy721Fa2MpEMq2FZr96bigb7j3NKQTB2xxSpdfRi81aWda",
  "key5": "3G2Du2verGbZkezWYczrjUr9LjzfxpypCQohuXqNbXsyE6bX5mB8yGMpSQpt26mBocL6YkPPQSPhd9pMVCzBNV4a",
  "key6": "5L7ruhm4NoJT5Ln51cB48a3hwM1boAmy4eCCS4uRzXfTv8UCd2hgV88zRDyphGJksCnNBfqa4EhaRSPNiXcfp3UX",
  "key7": "6FVTsvdQWFmWivs1FZ4pBnW6o8HeEwwjm1c5caKJfg8oKraBCk8YW61AKY1ryXqTi9v9hFG2Foy98KFL1etYMWL",
  "key8": "2CBTTYh6buEPABJAVB2UTFktgRyvQuhu3UHEfm1GHVZGytvvbYyUVBqijHE17DdYcPtE3uX8H9KKHGZSpGAhVPVC",
  "key9": "4mk5cG8ykQdmTg4DwTueDVgbMoLeJvz6Tg5djXQuKXCWhLkahuqoRC6fp9DysR4TdYXRTcZJd3vUTB5GwQb7W7y2",
  "key10": "Uq1Jv1oAi9LKNsMyV7ArhhrCNnMVwHeFTvL52mrJzUrMN6zgToaKG9aaUjdHjFAs9aPGng1QfWg9hXD5ddLjwHq",
  "key11": "KBMHDZrvDBo1pPR3ePXmLsLLw5xVFZk7DZVGdeJxU2iKiCnfTRu8ukYGC4FFAECgeJjV1Eneb9jYGjWJbgefZqB",
  "key12": "3aRSEa6fwDTsSFLU12iu6YUn65yGp6CBu9Xy92LVAeJr8UYJ932PepucMRAuDgq9KtwdXKkgDhedQ6FFhQmCR8J7",
  "key13": "3VHTg7ZqSffNQQqx7VJ6Sy4xcNCTByegnpR6uANWC5Zwd3pup8QNrRGHxMSLYHfW3RR43fDaB1XQVB51Wnd2UeCm",
  "key14": "5TVU7KDohAmbTiXoi3tRfqmSpjLW5zS617zijWQt8BFUgHfJYstbMB56U3mXr3WQbRuhuPNDCJt4Gm6tFBdotuqs",
  "key15": "63Q3yWhKpFeRffkbvxUFwmztJTkEJKLmbmSeKgx6n1mvwzYBVvWk2iQ4vfCotvn1M4pjXHpTAHm5Br4pTBPSNPbn",
  "key16": "4uFZPLHsV1sMUTGY6779htyZE9rjv6eDYrysozMev6c57Re7UwKjDZFGLvuWdi2yyPCtTidh4ExwticiuJ5ukj4A",
  "key17": "3y8Kcm5ZueAVEDoPv1Ychk461NHWjKKHqUbU2gkrFU6Tk8DBuEq5n6ESoXTyuBJUJRj9RTc9o8Hr37R6EJVgSv98",
  "key18": "4DY8ShezvfGNEmQA8v5j7PmFpgGPcG3BT9hXj1VLikpNukGqrPR9Jct2omoxP3etqR4ryqATEtzLrkMEsnZ5mikv",
  "key19": "2d41fL3QA6zSoW6dsF7DYpqdjSobMkUGxbXHGgxXK1vEDEEzLzfYWkyLqh8nVTnxy2EMuA6xPz4imBN6ExJMcGZN",
  "key20": "yGmnfGgt26Df5PoMuBs2L4ryku1NRYvhrmH5mXHwckw1bQEG1aQ8fmq5yG5JintZyazpNt2p62AcrDwyTCx8XpH",
  "key21": "2XYaxGTUygC7dKyv3WUC4YuR4ZBeU1p7mvNb4x2VPwthAHYhr3VaHMUmDGpCF7vKnk8c5U3ALX94qK7n5v1BvwSh",
  "key22": "3EVYG1dN4pyBukxSoSRABQKR1Nfu3LLxjvoZT8yaydZcJ3TpcN85otfz7793P1Ug9Uqnsgdd9CSEM6yFFqsgtCiT",
  "key23": "YsM3mapBdwTtpMfeUp2esuoUivcdwx6WuZkN8qodHFxSTACS8XEUeCgyzueEQpChsTRt4SEfeZ3gaKGUqzzd2HZ",
  "key24": "2jRFYs2wX8fGpQZR96VXzLMVrQVLN6EGXAKCmwnupfbbScMeYzLK5crNtPGqWzH1TcHdsgxokezgDqcDtH9sYNaV",
  "key25": "31KqH6XTZ1fb1Uv86CpqNAGBUsX4Gi43GWhbnAvkbuiuNutorXb4nzv5WGMsjD4ZN5VoV948HhCJkxujccvw66kk",
  "key26": "2CsEPagydXSWLGFHpiefWNkGxZzdUkYBVuAUgt99BFCdKrCWK6xVudh45GMkRmNe5akDicxCzYpz5v5t49178Jgg"
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
