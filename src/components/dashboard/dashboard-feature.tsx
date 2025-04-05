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
    "4VY5DWkkZBbuH1nZECfGw1LPFYkcGtkyqpoBPc5WgfuLRQCPotroDVkoGiqeqMrCvFB3kF7MChGiuBcLymFPY35"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RViuyKmCPdZKNwdRudrUmR1HaBcYZ4YcRZzKnKDTMCz1ndFZK6A15uVLaPddrunanQ28au5N6GcgUbbQHgYV9ag",
  "key1": "5uJm6FmtiSuJs7q1SYui3TNiuSSFtY4x4FUHqMCpN1vxZhuikiUEc8xVXbeLUVF8WZdm3e1T1upmp8t287rtfsjT",
  "key2": "61Ax4BhpKvizqHxjBgQQCZYrffpgRmDnvp8YoujREbA4h1bTNwfbTcdjmZmVAZDt2j1cnPSrAU35pjYA2oM4ksjt",
  "key3": "4rmqEe5mUcDhQxF4XbA2MX8U63wnLLrSGTbHe73URAxtBFpLkiK9ejodCKceKaiJ7L5Z9iqs1qjgiYBDKX4pV2w4",
  "key4": "4Trdv46GPCkGyCk7VusQjmGvGpAZHV7THMMyG4w4tMTEEfeRzBAA1M5MKmuqLbNAXMHvumj1Qr9SyZpLgGKu5pM5",
  "key5": "5VbqEfwqUpNqWHiav5BS4AiyjPY7qy6girfMHXPHFevrU8r9c8zDwpmRDGWFUR1rQNNSx1Bx7ywHhz9JfNSEgos2",
  "key6": "4eLq5bZuPwzmUQZqHTi1C5hUj4e31HxYBGexFNCFLT23p2hfTCzwxxvCqE5pjQNGXmRvURbxB2DmcMLTcVF4SMH4",
  "key7": "2xwWERTQgSj56ULpGjbjQdFou3Qd67bHTRTUZVF7kymuNbADE9ki8d7Uag9oFncS88m5rymWRUoCbgMmyTnoMo7s",
  "key8": "3Der6Ng7KjAbif2piMmypvmymsGZQzHWGaDRuubAUQqkPWpw71gdo9VHN6HASoD16kdCYshktsLyTrgPNLzeQsS8",
  "key9": "4JzYgmeoS6Fo1BVD2u9ng1bRtve3wsNfsayApspj6b5pHN9QbCVWgoUT8dNqHy8xCxdBaX9Tb9R694Sp6W9gSNNs",
  "key10": "KCF2us5S4yqEbTzSepXnwJtw1QWFyMQ3cgmGUMXhxsz3bVMBDRucvHVbF6mEKizVHKeZrpL2dsoerMfFZHZJpBg",
  "key11": "5WjQBNDNTeEpPabLRUpFRhxCetxbDdNhe6i4Ltwa2SxdG2akgaBgeLQCN76TqagjyZbnUZ393EgFu7ddiHaRvJzs",
  "key12": "2dUuFtSdyxTQhcKvRK7FPKEGqJR8qLhHm9vFRcPqZT8SsFQ5TKyN7wuXwifESxngXLDautQfKFkTzpxZkKdv26co",
  "key13": "5SoruQwU2BgA8weukU1ayivETCnt6mYiJvFKfdW5v8hSjQExYiqZDV7u7wFvqsSR1r6yc3fYP4wirF5re2rYRbxw",
  "key14": "3dJFDb7sSbzJPdAbNPsfZZj3kP8W2pQdS2oD7YPvuZXpPQgz29G9zhH1Pt7uem6n2udrD27MTBK8831Yt9VzrFPn",
  "key15": "4vxtdwgYdBRBJms2ozdweqaK5KV7jFnL8JeyLgSFm64bdrtA9fGHHdTRNKCsn9NtrnBrDY7fho3REeBgJ72QSWSe",
  "key16": "Dsm4EMaWwuwioXdmGZBTTFi84GojEXCv2NWfDcMCyh37Lg7NZiVH9bZokxQ9LLh7UmtZA58K7eFd8XZmfBxE49e",
  "key17": "4uA9SLKwBs1aoJRMiVjPWUo96ecMakfxDjyjWVpHumKMUwsRqdjtrbxG5meGat2rRa1cXH3NUNSPbPEFmzL6KGEr",
  "key18": "G9EpQKikFTCXqmV7ehwcjzp33SRvyhpmobdX4hLqwprsoxmVNCfs9xSJJW8s397brwm48gMcSUqneESd1kx8SS4",
  "key19": "5AYqmLZqyUNk3R5YmQv2EdjpzoBkJPdco9JjLpzMN2A14bZ2w4z67PUNSTpbP88ctBYCHQixWF3aXifNitmoi5Z2",
  "key20": "46BQpgRXHQite169XV3wT2Fqtu3vn9psS7n27VLinpyx4tjGnzYfkcSpwUMbL4i6Rxwgs3RLhwXaxHxFBYM5x9MP",
  "key21": "4sq92Qqqm6yCKw85YwinbdqbEGPKsrPRvWD7dv9czET6MjWTZwbWh5NB19seg7W4fjhySwjsd8FTfcACpQyaKNy5",
  "key22": "aJSnEyyT56kjpZbFTvr3iAh2zU6SXHFmfNi8Vf3ihU4LfG3Tw5cwcNV2oVZxgRvC9gARtsJ2QENRmB8L5suu11J",
  "key23": "59wNL4wStDYnz2cQgm42KP1utzvrojjcnB1VS8sg1swfcym1Axc8CmmQ63uPv3WTKrjdf19tjvWMsnK7QuGF9Fun",
  "key24": "44gP41Zfm5mHba2R6xjFK6mSKAD2gmGCCBBiyQHVNmh4mHkeLeBkzQYZmdwLJFB7dTopTxtbH1AUaRK8tkdeBfH5",
  "key25": "26x6J94fmifBcUGHCpcJNNLioyUCWWXJ9CvUrCR8qxaReCqJgBUC6nHbtZvdYDdhCXcAGwMyJ9B3M4dhJq9qp1ee",
  "key26": "4w1jxpAJgQsFZ3hfpzCAqyAw8dPiYanC2WhBRjDkrHQmZtFELncEUG8AhKdme2V9BJkFUVEZF73Mp1prr9XEErur",
  "key27": "R1pnR3gHpd6usWof5pfhAa1krJeV6fK9NuNtpE7dTVaj12EGp6aKig7UFowYQc4UR3UDkQawmvW1pPDgdCYXThx",
  "key28": "NGn5wRnAU8oAD9GaCyWoBya6hMiLZdjYwcNNA1BP2KxYSnm4sXF1DVHTcmCBFJFHBAoq2e1Rp82EYXH28Fvpo5p",
  "key29": "HtBFqgVc5RnPhZeZytSoRXFmukDN1Q5CgyQ3m8zoe2JdvhoeuqNqhNjW82w9PRuGawfd9DExrEZ3GDh4w1sajpG"
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
