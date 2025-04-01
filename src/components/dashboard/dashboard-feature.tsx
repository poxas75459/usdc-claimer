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
    "3pp8Kaxzzj24ihTyQ1XkTKjmkywSGqMGrspExnERLm7BUJYskX2tfdQiRGYHkEx9h5vgwTRoXhrqF48bt7vMnkyE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XBvMM5hFXZXR3xVAMYZ3Bwse9iC7zqDUE8CdAVfJmwrMrp6iVgzeWLRu64kEwy7s7QX4214YSDiBa6yNLjwbBCc",
  "key1": "32yDYGiuwdYjC2DK8KXavYrKZ6BTWMyRutpBjMfM7BJXMGjPYAMgFy4aEDoCn2wz67XBpdPcpibJcFt2uZnZmVeJ",
  "key2": "3WRMMp7yYEsxNdtKqEDny4CapVJcBucTExWDY31RCpZk7XMowMF4WKpyBcAzUEPXnnXATpm2khitfTVuuUtFAqzQ",
  "key3": "2PSdiMyggXoNWWWsdW1hCfJGoFQLq74mbqeEuaJ32NR79SZDGQRGfxRDhqwdhSYzsQq1kCx5zD4s5KzigJCtgMyY",
  "key4": "25w8pFpRszS3aLpz5a1CEa1WeW812VCszUjxPXPBvv187KU6yZDqNPXKMJuZM3J28BGryoJNhMbidoVfj66PNpad",
  "key5": "3mHJwRDvuPwzi59JAGR9yKYzNKJ1GH2N4n2rXNTPrAtzRqzw81DhGBfzUTa51h7HcWJq8tNxKPUTLkD6yVACxPda",
  "key6": "5ZxZLp6YyQyadgetd5n3Q6nXNGGhg9ziCbP8baRoz5Gackyb9StvFQUqitzH9RBuZnvivvQ6mE9Bx992mYnsoR4i",
  "key7": "owaNceWbyFWJw4LEXZuS4xMRVWZjMg3drqgBnyshEPTzSXmGQptePnaHpVn2WEGTrTyiCRsR73DoPFajJtEB4px",
  "key8": "21GB7qem8AHZe7r3YqEnVjC34kCNr9Y21PopuFG6gdivBmc6e51vE5tcXaWFcBSjoZu3AiMSJ6QAFPRYtDaKW97n",
  "key9": "4JzeNKYQ5tYFhMWTHc8KDgf39CfETJawzrkzpdVjzpfqMje1WeHtnpYzPtfYjtvR14vscsyuxoR82Zxo7nPrMLKP",
  "key10": "EiHhqNBnHM5JRcEUiR5LJvLZ9QKMZkTjES4DLx7FewxdBbyPMGGudZGYHwPHxmethf1y7baRNSbPxxrH6CMzhku",
  "key11": "2rcnLSkK7sEYoQt7aNKK9Pvx2yPmSqyu8yCtGrYMgHuBQ2h4HscVyyUtY64ujwr297zTnmU7gQynDeKpha2D2LSm",
  "key12": "29xuiSgMKVew3vVVnNezGmzNRaDPZUyegQtaMJxgYrPcBzebGfJpoWmzUgVCFkWTy3EhUyWyjbp62dwwprk7GitK",
  "key13": "5sBG2aEtvFv845TY1vu9NYkZwyKEEJPWLZWvZSMVHtJZfMZgmLqDuBqhJB7CdEhFnyPnWhaNJxTnMJtt11KQB3qE",
  "key14": "2gJHQKvuQGm5ba8WHxGrxTbYJK4TG3WJ8SiT9wDurv65ogMLWEZkocEWYKYPqp8BXfb5mE1sRmQ2FHoCFyyHc1uf",
  "key15": "2c5cfABMtFufe7GRFUGujNNk1XB61crsa45wMEgRwthtGUpHK8bFKXu5JyciyAccpW2gh5VGwkAwVNwYJJMuezsm",
  "key16": "3cMcN9W3D95VGQ8FbunKEge9iqNYHZH7efpAQhj5RuCvPuMHfqoCSKExSa6VAYDvyXNvEGe1KYMhe4vHffXzHepQ",
  "key17": "3iLGPrQuRwk6tN1TRVr8n6RgSgGsRY3sb3icQ4c2shSC3HocPWto2Gp4c3WfgZV2idZYJz2HhTKwbNXLiUSdNHsj",
  "key18": "28pDbbDZfQJTS5V6Gh4dXMyXLPE2Z6bgFMfPB2LKe6tcGtrBdP9ZzYJNdejP7bi837dfwvLm4aMKrctEgAXm6GvN",
  "key19": "5oV1gXHqRfgoS3heWhPq3LZHqG36Kv2tzt6RfniF38K6USGpwsLotXT3tp5MLTpHSKGTtf8eT1epFNVYqQXP97um",
  "key20": "2Mo2WK8qyEh4sRCTHTwg31rDhCuBbwKdsJeo2MUMiFiyvuTgzqMHoyHTQNFydRnDVdfVheBqxmY9jSop9AMhiivf",
  "key21": "5T3M62SMHd4kb37W3yskr4y1EFDe12fJfxunXKfEnRwRU7U7c41P6DzSvVSzqsxTiyRnZYcbLEhvP7nMjVwt9SY3",
  "key22": "4Eam9e3FuzzY44jdMhspMuR4zqsacLwKc67xKGChQhFYqGoqk75T4BKVwwba89Ta7w8QeWqQrLMSE7UnySwfzdfM",
  "key23": "3Zt4jNFqwBGdmeHEt84dSqZpaSSzS2Md9BnvQYMGgpTRt9WnuKLTiQ2nqfBSEZrMjBbFZZhbhqmM3YHa7dwrcv1T",
  "key24": "2VdX8v7XhnKbJ7M7hPWx3PjE3DZ74fwjke4pSjxARa6M9HUnQSyEpU5irj21piJsKUqKsVD3TgdDV7YqGphuK23d",
  "key25": "6ZpQEKHYCniZsukQjwb1MGBX73nWAnFY5a8aPEfmWEysushiudEnFdGScpaJadeetUBU9R7Mb8RvZFj69kKYjdw",
  "key26": "46Lv4jVrZ8Y8UyRfL8niZLGxaqLzGkmNBbTv4vcEJGZCMxKCqHD7LaiwT6K8Jxjorg5r8KYVXrkJDaA72zFDmuZV",
  "key27": "3ueKunJbLo1UaSy38WxzS3QXgq8TscDzfPRCCKLeDhGAvT8Yand7AycCmQr1htgnnySmi4pDNWDLjX9goZJYRRhm",
  "key28": "5dRNG5aLWS6G3VWaiaAqWHF38XD43692fNtW86KgqoV62xrwGXRYbToM168L7dQ2zD6FtyFh8vE37YXgBiYXVBPP",
  "key29": "3EEELF4xvoC2KVynn9iy1fRPyfvzrmNH8wWG89V6ZxjBsyy5K5wCNSqbYZ9aEh6FKr46wubdTY6kFpJHV2JnoMiL",
  "key30": "3xVQQQmyFs9u3PsXRfPtnK8WWFf9UkhhH6jCwXjawkAsmy6YqCorV8avJk4ZbQoHY1CdG651LPeLTGEkTJQesHCD",
  "key31": "5JpfAsb3ysT2oVSmBT6URDu2xxATCPwTKvY23GXceZnsvnEV9GJdXursm16iTQkReZyQEXYJqyatxic5ybvs67Kt",
  "key32": "eboEk79LdfzLEjenPBhVW8da45DU29bYc8WyqSt3rE4rwVj4CrM89jX4kdpG6kztsKAcGnV9n1xm428tLD9nFtK",
  "key33": "4cRcF3Sk4DyJDMFWP3v8ab2TG3YcLdLsg9XJnEa1oBFuS3MPkdLazxh9EXpZ9dmkW788tdZ1JZcnGes8jTZpsYza",
  "key34": "3dfwd3erkmsKWwhP74gfDWNC6MTNwdSSwxrwNfezkrFCof6vPBPBRZMNVcjwKBiM5iUZto2pn4Si6yuvb6eGtrde",
  "key35": "4HKmvGDS6bY4RXQ2hiS9wJUj8KbsCEZBEzwixwTPMFkC2YeiXH3dKnygT6DaGM3eLp1bRzMVcEv3StQdXbt3S6f8",
  "key36": "4u8H3wNPqxA9NdGgfBLVxg1GGY1NUWtd9GxK4P4nE3BcW9VN8VEPQj9oYBtt3f6A1o7VRP2Nu2hheErXES7AXeFE",
  "key37": "54D1kkhwrg1dTdJazqcg7qt8J9eN5CraRWNzVEyY7yU74KWuAMzi1HZHjarZTVg4DqHfReMZyxWsL1hbLUxwckDy",
  "key38": "5GZM1v7kspKUCZkPAQSBbJuiEgXSkfLvFeWavN7XK48EpBRBsbAoVifgem999d3J244NTsUQBrBkEQw1RqtmJRaF",
  "key39": "2a9QaxeBAskWNRUShsVtkKULpF8CKYYV3LDG2CKKTtsS5aMDrwbi5Vj3fj86cUdBHC4KqBTi8jtkHyZqKWyc1ADG",
  "key40": "4wjBLhNqbVF62Tvonn8MfF1fYDxFHNTBgNV8oFgPDP5iMoWAdcNFkpBcx6VwtsGC1u2omXhrXdWQb5iikQ2uctVi",
  "key41": "4vSEEeboK8pK97oXvYAPBnZKH2DqPy1pyxdDtdc8XBPW5Kyg9dgDDjZSMM4CdgERzBoSgbL6z1AegSCo7kcSnBzt"
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
