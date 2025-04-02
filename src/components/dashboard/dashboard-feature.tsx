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
    "2ArK7mb8uvrLTqwgeraA42fg8yHtYFgCcLLFZickY9umojR1v6Tr1e3vQwXY2CfE4EYsHcbJ25tkzjpqtEB1cLG7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GQnQSqX9Gf3SgDTTvV9JUuUGUPgxEr9BXzV6HZimWXrv9ZT29R9mhiuw8y7mHWodpcRJhNG6KWMoaPZZ6LLj66Y",
  "key1": "2QpGXGH8HPrQyTgrvoJbZ5PzdjPQ4B5WoiVnqpN9pUVJXszhhbKNFLKjJESxGMGubo4TbpwbRoBLFPZS27iNY3tn",
  "key2": "25Mvx46Ze9sKyXDb74FHD9zzVaTLDeCoP83QZ1SdXY9JogAXYW142PHnio8Ju45ACvTQSWxZVRrk7uFgcnyJFbzi",
  "key3": "yiBshv9iXDF5zt6csq9joQ35BCpHnEz22NshvcQsAVV4k4qfS626UqD4oewPfSfU2Jv8ppFU1YjDNa5KWPF9LF6",
  "key4": "4FP1inBksgriRG8yu3BjWJxL5JPKahCH64se8L2VktYfuNpmPgh4Yv7y5SSb2Jvt1A9YcdVSyQcdSfQp6vQn8odw",
  "key5": "3YNd2EuUCjtQ9u9BNy7JbCmxZSNLe5bHejRTqD2amE4eKiGSTFruWGzQQ9QLus5ABBGyAbj5hPM1GSYyunNsU4pc",
  "key6": "2gLfnyhADoyaE92G79E1fP6pkqhyBkscT5Qeh7ptUkA7Q5CzcRvwdQcxsmr6BEpTQJtvN5L6codyD2sCuX9AvpuP",
  "key7": "67eZHuPxxeUaYE837dWDXUHZs8iJigTYZwFQsgmDLr8yGg49Ubk5eN9esW7rsWJ4T6wCCGhztMaLe41UtcG7hJaL",
  "key8": "2zhWn5PfeZdYxW9ZrvubvL67hvmenNUkkK4vYcHUbQJRyN1AGwmxdZpjm3G4Q5LjJhzF7kteV5XsTP7fyapk5u44",
  "key9": "31MHGvkGd5ANcGhsvRQZZbyWn1vNHzzeVfZxSAQTuSqEPWqLVk1dsWRYvAvkN1ANDqWFRWKu4P8CHdYj7vKNScVn",
  "key10": "38bF8r34zNjwT76Svn8LY7SMVVQA6fvWtS9x1kJHXC1XNB2bmuC61hDXp62pAFWfoutKoU55g4B5yav8SdmUxwSs",
  "key11": "5JUYaxNHvCvYcMnCeXbxhXxAdT5n4Ev3P79kiAbBeza268cMurfHecoSF13sWAgDD2Fyi1CJ8QkUTieSvJ6U7fB8",
  "key12": "3iJvTpscxvKTKdciqzZx2QC2JLUYYdyeXoTpHbCFoEEGBLvbXvmVcLZf2XmFrrSxMkkySDL5a2WXR2XfsJRtz5tN",
  "key13": "5qrtnXyP7cTLZvpZ87ZToxZii75Fz8Wm4shFCS9kFwfzA9VY6S7mo13sAAkxdZYAzb2J7VEk6NEuYTi1Ev74ugnN",
  "key14": "2Y6xtjVZsEWohyc4k3jjGn3Lj9pKykHwVXBubU92HWzP7PbsHKwnM3do3AC4cRYqW68Hw7mxy4FQUzBwEvyrexZq",
  "key15": "5tehmuQB5pHPh9ufcU5Qqn91ivR7yKa8r84Ep3bKMu7C3gUTguQ1MQTNoNMq3iWNpd7JNAeskaUaCht5e9dSGXKU",
  "key16": "2eexowhotbqCtuyuzcRt4sfT8e8jr9Z4qSD7GeWXvT5eQqro3xpkd8i2oRm26NaGMdNCpwQWSM7ZCMqVHMCoaUkM",
  "key17": "3RbxMC1ivwN8phGgzm3GrY6jUKEgBUHNJzzBP3wn2abv34zyTRXsdVz5YGLJ6xT9ZheAGchp8WTzAjhhoxZoNocX",
  "key18": "4AzraHUtcfbQPUNW7raiWnVXD1JQdeKe7fmc9Fmiy36GPiaxgMEbA8T3ETo2c5pAAraqP8vEYUjHpoWRkWfpYwX6",
  "key19": "r2vL9ZfHTAM5Vy2MLEgygqh2jFPTCsagwry5uLPgMmpJuFdZcNT7cy4ea9ZK5b1qUdRUEFSyYP3n9oj3AovSLE8",
  "key20": "5sMY6bjGehFG2cDygysDyjbb6q2mgB6FvNnjaWM7omhvicddi3A8jwCLS8oxuoocxiDEsgzqPV86XFpwceDgZFVA",
  "key21": "3nBcsks8jLwvftKj36gMZrAV4sHYWs52oJsRd3SCTsZ6BoTzHSWZGQGQ5UpRcRZMamnSPxYii7mQUL9a9SEzsPGr",
  "key22": "3C4M7nipNsQFyoWKrQ9uPkR74ZcXJdesTdmVaSTRVeQB521CmVHKLuQ5kwh7rwkHzaP5SZuYCznaobEfySuLSjy2",
  "key23": "34p3jpm2SjcaEP9C6caf7QFFvAqJYcPn31WBcsMQRRb6iqAESPMmXtvDtNLezGfduERBmRZ6CRkiuvYdqxArDDx8",
  "key24": "5gh3mJtUdtbPRfzZrro6sRCmhFSLQtMU9DaHmrjxtr4zXxtu6DuGffA51iuTuhYYy22CFC3Sgz4qy7TZAKrUTb9P",
  "key25": "2RUHWgtdUMpk6DhTy4QTC2rEbEcGEwR7tdDUicHwmEC5ffqyX4JdRdeCupcLXL1SmTGizLfML7kofA9BBz8C68Gb"
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
