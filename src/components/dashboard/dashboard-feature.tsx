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
    "32vgyJYXhTS3wyiJ6Ajv1wCnYy52Vq7LNvYGxRuY9dSbby1HJND8L7sc6HhcuM65cgJiEsv3iZyvEGRgockT6mW2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kfNioFmBUhR98Z4kE6F5PqwwpG6fgE1zjzZWv3m8TdRJUDMqyWeV6vait1A5bPj5XkJnkwFWt1WWhnYHPACMDfx",
  "key1": "b9gaWmup1J978StRnJoNDnyBcUiB6o3mMWsoJ51xGHapHNoJntMeyF6iG9SuHctS3WDc3xUudBVWKKd3TJAMgnd",
  "key2": "53apB3WdcFnC92i2u76CB5chZ23UkFCwYPvNNz8qz1u4K2qnh6wH79NYm5tba8FEE9buZwNmZ3gVFR3N8cZ6q2ry",
  "key3": "DQAvxf2dxKAs6LhaZPajaczaHJzjVPmuxGvki6LQG8M2Hz94eWTFUWLCAyLufehPVv8HJcsp4Xb41FkfZby4MjZ",
  "key4": "36w8vgszUWf15Fkrw61QZj6yea1EBstiykULwte6fCi5BfRt1hbCbTqR6NVaDrgb1XQevsZwU4givGMY3woY7CFM",
  "key5": "5zVTDQaefMfExn2DvA44CN5MRCtK8Rv1vh3TCHFgkpNY4h84L59hWPzE7cKs4RbVWcHwh8xeDF4Qf7kgJaqHXCYa",
  "key6": "TYPQ28dQ6prdazAA6J5aJdnigucuxZWUYdLwffB7x4Z6KzTAiM7zL6M7EwMaK47wQhyxMDibk6zRM6JMh3JcQWY",
  "key7": "2VtPKmreqmt32rXMrKz29umRbu6VKnpj9bjNkTtcUVat9KfabuBgpKXtYc59d2uDMDFpXBVaWLza9tvpJiGLzbXW",
  "key8": "3mMJDea6MvJb6dUV1rDsahB1N9Qf9zsxBUNqnUEwygrMSgiK2obfEr9X4XkPU2woNsXuGvDWj5kwUg1zsbkRtH8H",
  "key9": "4qB3Xod6zgsavQUzAK6SPSoUaBdkaH9BYNWp1rZcLJDE1sgtGXLc1oopFrPU1Gv9QT4ioxp53MgYQ2SwXUscpYQg",
  "key10": "4G93MFfRXWT3npdkxNNv141zcy2AW1BMtyy6RQyk5dsXUBzMp5JrxzViMRp2HtyszMxxgUwPFfsvTnUR1QKWduSs",
  "key11": "2PdxPQBauFWPDF3rPbT3CGwtMMumCvcTXvK4WtBQYAdbQCKUHccPmZscukAvFdanz4mmmoNMzt3PS2gnJr7uRnpU",
  "key12": "3LzpNS5C9xacudf36tu74uJzPTy8inAa1SR1ShiyLCVc3uHSubZ43atLAuxVDJeX4zcqTV4jehkzzCMcmTGsdzLo",
  "key13": "2J41wCmfi5fxhmmZUxzGLtEn2RpSU3adzPCXGWQF1ESBNqwdtZAooDAPte19CaBmTbJWyoGgZEGHbFokUcj1YL8V",
  "key14": "4CUKJftnBr8t4skJg3psT3DAj7SFgfufL3owrNn8bdZWziLCTjJuJT2Y6YU4eaikFBBPiGciaUQ2CTGnUXtpHZm1",
  "key15": "WSJD3bjRpES2Sek81McosmLVyZ4MPwNt4LHKS586TybtyCv4VES5Woq7bT3yPHiN1Rz9VWPR6BbbDnJMshQe5Q4",
  "key16": "2B8sqyFBcRnzcUNsdQAursM8UbyKKGmyYcCm29CtyRSbQTytfxMGrPkUkodwCffnxgovKuzGimhEJ5YQvNM4sZQg",
  "key17": "4vYBugxocgVHCVoV6mUE1ZYGSuFvaMvNgTAd78JoykmbW2nKM6CjCcCiCE3CtQGim7VbXivLmAVih2LSzXWsprJg",
  "key18": "5gMHa7qriW1hitCFhNP8GfLKY9Kesdoze9fE4Bv22gF1nBsXoSZZFVZ1nmAUQ1qcMP9D8sRNv3ASkEUN14qtPaRB",
  "key19": "2wQgCPw89HmhHdo9mKthGAa74Rg1p7j1mkcv3Tt1dXa6yHE2WCHCiktit1YjW42AS9jHbzZvjrMgnqFouVqsnJ6w",
  "key20": "LsfQpZzNNz7tVb6Aev2ez5zmocufMXpfXCjegDh5cAz5JJXrGb9C2Qek3mhv64nMXp9s5JGKxKhe6Y82Z31GQL8",
  "key21": "3rujXNXJ5GWUwdPVVsCyu1tYSbocfDMZGQnbXBsL8hKiSv9pqTZJkf7rhnE8rda2B5hEtzwcCPG3UZ1Cp4zHZa9S",
  "key22": "4mNtMpEftXfSAZCBr1g3AT1fzr5cXxHmqiTyU3t6GMaqZUcmTyx577qExM5zNWDnVCRGJ2ztFnAc9L8ttyjA78iE",
  "key23": "4zE5bpKkN7vTwMyWzhD2SFZ9YGUiqoZWSLkp95YYwxKcBkjdSZmNq4Z5fxbPcd6di4mwnvqyhW1a5BwuXMHgYbcK",
  "key24": "2DbUD6o58ijCerJMKFLoYnJKDMEQQgeZbRGFy8UGkTWPS8xRk6v2C3MT9ovWYMQ6UY5Fto9faBaMGKguszqu32Fk",
  "key25": "5Uh6hrRYp9RpMPeJqgB79vawNFngnKKgb2sFubxZ5C9sQbDmHL1FJQvp1L5f2Nng3RuRCFfoUEyW21ispCZaL9Bm",
  "key26": "4zTKV3KmGN3jhgXaowJ1muzQaAfEZtym9WgsSgZgFKpws8jL63TsPHiKxTW7U9B9sZtQBaBE3oW152vhuUXs46fa",
  "key27": "4oP2oBWfb1KFQgArjHS5cksMLCzLntMzGCyqqbYfCKVS92oQ78tUcpWfDPtzLpyNb6mHng88GeYdJqcdmpCT7pwH",
  "key28": "s8s8pw9kz3XXxppVZoqsnifUeUF33Z3cXEtnehCxvYFzoiq9845amEiqzjqF3AE9nKwU9r4mkqkmZRAUFk9z33i",
  "key29": "2m7esfBXBg2sBuWd3syje7ztkyeL4nmGzGW3CT2KR2XE39g1Jmpn9D8Tct2Q7PzhG42MXLddqEK6FXYoLb8MmRgh",
  "key30": "PtGMBsvKTxa2xRMer9SRWu1QPxTfZ2g9xQS4wqeieBhD9MNbcJAq7ke82g4om46MnbDuFFT9rtA8YYhzL776Rfe",
  "key31": "2XFkENCWB4GL6vU8A3k9YwDoNdvALvpsP5Zaoqy7hGeYzsZkA6sXHPjpdU6hR5ocwkxzrcSWU8fi7kqX2Qh9xv73",
  "key32": "27EeaCSQ97hqz6szALzjjCHcjWs97Xz7kbyr83yJawV9g1cRQurWWmZScXPuEj7hnj1pGRFiacnMAkf72yCwrvFp",
  "key33": "39esTUG2pTwU5UUze1dMfs5Kej2FGq8XAMNk4Ew2Un54uCtvpJRYQgx1Zcm4FpNAb3wazBzn4xAUuVuLRgEuSGmu",
  "key34": "2mw9aed9tZRTiJS6MQG2832UaFku1aEXhmzMRKaPvsEY7RyXLUXL91mnTigunfxJVESzULiGvTRZ7T4crXqGLMU",
  "key35": "3Xy2jer6i35cCsLan8mnaxpttCxT68p8X8JYpU2PpJnABU3DGWZQRWPCSvYNaFBRFqDwynS8GQsuRDDheF14vYwy",
  "key36": "2rPTwKxQ8vD8MG4oS9x8Gb6NmsuBYRVFPa4MSCSmS8HqUKBeqnnd3Nm9TfxAK3UHkwfhBpMBxAQ4Z83nQnBzvFvz",
  "key37": "3kWzixPewvPCctm6KZPgdLDUGFK4WxD7JWvbYK5UmUYUQvgKNXHGPoTxpcTTdUTH4GqtGstx8MCkb67omeLeHjkS",
  "key38": "4XG3fFV1nnVw7D3k9oGk7gURNeZhpczdqferH3HHWbFdnstyuBhU1KNWBobeJdJrFe7NyH8PA99JcAP3dhRi86TC"
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
