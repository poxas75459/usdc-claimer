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
    "4SDf5jntL758PwZkNfLAMJT2aZF9wson8N3qZqmoGGt6kAa2DqthbveCT4k6bBTb69S9sKyQ7sPs1gu9pDr5uLb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zHLgXigkAdmZGuqP3zSVZaZMyu7KV7r5mPrYEMDgB1WJP8gmWK9KesEdQR51m47c3k59hdxuLFA8bTTBJGodGkz",
  "key1": "3AfMV1TDorceMK3hFPhhvRKWRoiE5ktdSWdrnmGsGH8451j3yudPghThVASuhxkVmMsrusqo8XBTELL7xTxuZPuJ",
  "key2": "kchdPdZVb8FKAYZZZ8bWCzBUJeMPKrjZUmT5GZBRYCfUWYFPxNafdT9smJzWY1SKk28o2bEfFmqjrnb5VMpVECj",
  "key3": "4gm3Ru6gmKsprxrdG1VYgmMZkZdFxLrdgpKfrHRCtExeCnQdEPKP3x2E9RsfqmNLhLDcuTKTNpLeG1fLJe6gp4kx",
  "key4": "4zp6LyoSbNmNmMwgH7uJ4LphymYcYRhezysM4hSs3foBZm2tkAQ4bGFt1rTYbyVGoyYeVuhjuN7JKBHCQHzMdDwm",
  "key5": "4dFs58fYionNbCjghLxSP43rMQibiX8wm8Hbhq4VLpehr5vNTgD899aAPjiK16eqrVZcgPP5rXpx7JRHwrGoPspJ",
  "key6": "5GK7rTxBKcLqr1e71aPMFCynUPMWXRMhgtUkj8BTaNyExDaF89QocGJ9416WvAtM28hx63kNkrzabUYfYSyby7V6",
  "key7": "5YkmWikaygHNkMf6BCS5aRYs5a3PoT85sA85yG5vWqw8ozTrUY9B2MuTVCNLmHfSaDKVoRvicHd6jwjcoWGaQbnN",
  "key8": "mnxJrMue7qmv8kVvfYocJtyCo7zJawxD6tubREgZwWGvRMHrzXjRDEcJhwoadKEQ3JhTndhNNTrfP1mckVX3mfq",
  "key9": "5zJgU53dTuZj9iuYU1eh5vCqQjSRzVAqJq38bcTkNxsAVSMxpURN9Lw3dtXEvPLtoPV7rNtM11MGCsvv12BgvKVz",
  "key10": "5WPBfZs6bkAq3U44AF3HE4dE8WBJRCNiRgEmz7wVNai4dJnUSFHgRU11diUrYwkA3CEDCUdoZv6QepbjFnnwTLTv",
  "key11": "4YkScXzJNHqyjnvmw2XHjmNE9ex4SBLsz9ABzmahDgTES1U6XDMGuaTvSso9cGtNtkQhn6xFLvUdVQn9fU8cGPoe",
  "key12": "5wFcrkLigd55wNYF2ez6EsbnMHhGjivmpwpH6Rp4k2pp9z1CEqx3YBafaTkhYwdTUnqKzU8xh5aYarGQQWeNzgUY",
  "key13": "3ywY2be5Usu9XmnZN3xn91Wx9LsoLw4wkSNeesU9dJURP8zKa4uhGfv26s3WhNpjCEvGBTLJjhbD1HyM8WQk3Ma8",
  "key14": "5381DhhEaL9sivCqHRrReN6dF6qP4S91CBisCuNXL5kah8vZve8zF7gnESx1oemZgB3H6YhvxD8VZiwiMT39aCvq",
  "key15": "5HUfddq8SuyCu4gQfS57MDoGQkamcYQHUweSEzGeGJwzsAZun5KhiythqTovt1Su3ETdPUVfAtVZwepDgLqER9zR",
  "key16": "GkkFa13UAQDGRW8MwD22bGzBYwLsRibHAmXbfwDy4nkJLuFcpBMiyEsUfj9iC8sNiEDUxb4Pt4W1JvWPkszNsuy",
  "key17": "Go7KFujKMw8rYU5TeBcDJMp5idD921aYHgQaRyngiHqrCDR9UQbBkdsTmWsRxr4e4G2UxwQRyNUMFNRqB197CXT",
  "key18": "5Nv8bP7sqbJWp3dRiJnpiUGz4g3gMxueeVqaefWC7D5YKJBhRZbcHD6CoEAJ43q52fDpVmzsk8GEkG3FWaAKk5Mo",
  "key19": "3WyysTqrU5bo7mnG3VhmMvbTBVFQMftso2LmqLe1GkCipKW5FDThTDJquYYAPGK59yY487cLUiJBzXcxHdjscazj",
  "key20": "4M8cVq2qJ15rtTk4VsmafJMnjEaUAbWcjVk42o1QoJfQo78gTFgC7QwvQ8rbskrHNffaaubHvAQNWCWRvu4mSWLA",
  "key21": "4iUHgd83p2HLZm6JLmKUEPYjX8oqVEKttBDZqpeivE2uoneZafLZDiLmD4aX8NAioCE8Y3sLVTxmAP6tpJc5NkMm",
  "key22": "3Mm4SVNQxKwZCAKawCh57MoPvMdvXKKaCJ92GMugRAQxtmoE7AnFWfcXuBmMqiiywBv4Qykn11Q1SFSNj2B6KqiD",
  "key23": "QPEna9YPn27z8JXZny2d7ihMvjgzNwhiFtEqadenwcEEFksH46Gg2Y8LyaHpN8nfL1e8oJ13dvq6BwgPDuyhCQE",
  "key24": "3ETXdTbHgfK3NHuKhX1KyGeMd7XXoRdaiWrBPGhVnwTjT5f3xYdfTSWujFXCZF8dyprZ9ppkPynAEV1QeaysSgwr",
  "key25": "3DzM1ga4xy8LY194qVupbGzHonuTsrW3ySFGx6esPDHrobGS4q7qRuzKgFbhce3Y8MDKEZ3riXofRSZuTWxHV3zR",
  "key26": "4uZt53Qzx7nxbAAhHTXKHZ6Wx8dmWur9u6iX5gXZ8arcTgLocgopjrA477dB3A3ddHXiquw9NGiPo8CjeKLgx8aW",
  "key27": "nfj2UXDVaNBUyUAueWYob3znq6rohJRoy7vQiv6vLAQwrFTpsrQ3coffngXEvJBTsZ6JoHTbhJfhXHymMMqoNH4",
  "key28": "5cTpT9vBni4LAXYLwenNkaPzCN1pdSXHGT5b5NskY3yZLtMExpGPH3RdhjoKnzoz7ZqWSanBg9dP5SotWzDMSGE3",
  "key29": "cjsCmtziz43QaUqrGLyjNdn84pkaDN8K3qhEUhpzndGdQ66zLvowJTb1DCdV3wmgoszkR2WvHHuv1s9wH8JChji",
  "key30": "3TGb5agGZ6ty54oaA3i2k6jbaQRUd84o7K25cuwpgcrubBRTNPUsGthGSmwfsvsQQiMCXbWDgwmQ4WK7sAuWRudx",
  "key31": "5yY4HayZtVAZmqEpLmFo9nA9VU7ayoYV7nKqVtkiExECChqwC5mdRWJYbQdZBp9UeBDn7UHEkmWuzys32nFt8SCS"
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
