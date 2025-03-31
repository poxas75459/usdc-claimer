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
    "21x7bDAgp4484LdUUCQJjENiWXVXjcQySVSKGMuNP1N346BSjLoZN8JZFyhDtW9cbTaGjmDMD28u3Q3mbU4CyLBN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X6zfKufT75HtCVhG8bJtuzPh9DNLxrfaPrx377cSYxCUL4x9PQjLrx68zXGPiKJRN2SygwFEP6hz74jmjpMYi1",
  "key1": "5kzk79TS6bvAsmn5GzEDGv36E2TwX8gYz9CEvKuLAT8t57jJ6Q159V5BYavbipbP5STkt6p9N9qsZh4YFjK48QhP",
  "key2": "5Rr1Y2MokJzc6ZDmHhiZnEueTig6AxeqkMZDZ9scGGrmyZUSaADUnPSYMXxpnWtLUFpx3r8nSJ7gfxkcfXyFQerB",
  "key3": "59mHqKBws7ZQR3v73Ds9ubuCHJvXC6kfh2TjTMjYDGRQATWLsXKsfgLVTQqaUTK1VmuUVCwxieVKUkEySdrihyMu",
  "key4": "5iGrs63fHvafrEjo9wPwWZSiCZ3KU8roFuiFcVEKcP5heaCzL8rT4nehNH5S7GWXnWaonqmMzfqfAA9G55N3ASTt",
  "key5": "2tzgqx73eSSjo4aBuaG3WvXoRoonZXMds781tqpQKyPHWLySiteoBt1tJ2o3iXuXWFBoMjPURisBdAHWqvFPdCH2",
  "key6": "5URJAjJiiDwwgSy4xEfmTu4sLCmaRLTCDevpF6phBrZ69xcMMeP9fAhxdmxjGzcswNjLJiCTSZ7E21GtpqsPyUd",
  "key7": "4JH5JQeqzGNWt81PUHXWpWFr2544EGH3thGT3vUeuhGEbmzUgc7q9aQT4RC5XYyqe88LfhHdz4Xf5j8vHih8ybvJ",
  "key8": "3Q1WX3DWTZfGpUQvJHAzbgF9dj3xjSQ3BkbZDw1ojTWYHDNBMRqHvxxTPNLq27Z1BNRmETVrpCRLFWQrZnNHQ1Sv",
  "key9": "5yr6WBNcGu5FS9f1qpsaChjKaPRZYPGDshQssqoji8jjnVMckYwDBAbbfspiRK37zuoY2MQNW3tVWRp2G1WU3dgs",
  "key10": "3HS5EvG9A8kkm1Ehup8M3GA84zAZhQPGTKqthbqaHN3EAFq8XQYJuQKcoactxRKdecxxB2nBhGw45G4j8cDuZCeJ",
  "key11": "5ThMFXhrLL2GroheEbg7J7kf2hCpUeVDPPP1WVQM1zR96regAXJwiV8fKP2y3sEBte2RMpaQVPbqhk7Bu8RYa36u",
  "key12": "4VixjuDRi2KwfMTUqjp1d1mWtPqNo9w7hCW6rRYqetj9DRJ7LNjJ1RoX75eFtSxENEZhxELzKJyUyP8Zd77ydwK2",
  "key13": "3YgnZNnWEot3oqFsx9P7Dpudh7fdgoiUoHugX4piKcAqHAdDYeGHXNAXsyuX4kfRdAWs7oYdgLqKMTSyj4gMcJVC",
  "key14": "3uagB4EZyLsPxxwTuQYrVvRp3xMhDu1ueKNb8SLf5Q3wF3FXS6S7E98CHGKf458NGrLoiY6G3j8PgwzWoXPAbwsD",
  "key15": "XbvZgfQCQeMCkyZJ1pfE2LL2qSkoUGGQgHdcWGb43vF6xf4VEiycHGHecnNcVK1LSJcUmtSXEnTaBtWKQPKpwwE",
  "key16": "2VvQv3tKvd6PnTnHZrmF3Mphpw4SuiZvekKrQc2GiHEGX2PMha5aRU8tYKGunKJ4Mr36ByCmz4t1cHuzwpAZYbVv",
  "key17": "3Q7CHJNsfZLDtJC9iBrGY54xYpkrmV5haw65sGVofSoPx8CxFCRUD9hCmhp2StZpCkkm4fruLKLaM2T5sKaRXc36",
  "key18": "3cefmrVc593WAsjB4G2kdeWGcW47iUZEjZKRpZkuYswJQuAK8deK7CARxoN8g7Df2sshvK7tSfTiKt94byu4czED",
  "key19": "Ar6CKkCXXBmggmHHwwxbo6Z7VxqzNtoQ7bEgwkQqNRuTt1EiGhcUgySMDqZgX1XWHcj9ekRxuaLzws8CrWcATVk",
  "key20": "4uXxiUmcKBZzL6xNLmkw7qU5DBEvnRBE7Rnn5nYMRDDGs2hvXSqjfpLZZ3JzAL8x4URopBJtv7oDHyvsuQQQHCb3",
  "key21": "2LDJ93TcNetDX9f3Ger45iGE1DrQsStXsQ8x7U4oPZESpMgZLdqLT6z1TCwT1mYHGPyz52aCL7Vr7ThVfv54Nun4",
  "key22": "4eV6eGyuaXKvNb6hPC7QBMtQj9jp1nmnYMqSqYJVCwmbeZzPi6k5tGDYi9LfbBMdLTmJjZ6RXiH34nXPbu4MjruQ",
  "key23": "3hKxnjhbH3YTaYvCRdkSLAwEQGqbcHxyZVe23ZWLgjHpBFDxdYrDJUoQrpFXTQ2tvucX9SCzDvVDbGy5JnQhchz9",
  "key24": "52UykMbtMQTXtHQTXpyZEMqF4NXgm5nQ6mCzLFG9zXXG7bkM2atiKw1oGUaf7HC4FH1EUwTW9XYaq2jXddbU6qEQ",
  "key25": "4hpCPUMcwefAYmchiQJ6bq37hBq5afi9ez8EkQnf4bxE9u8XQUiteiQRoDyLPVTZz4pgC3XK39Wz2RqVMJe1GCa8",
  "key26": "3x8aXHH1nD7EZ3SVTzFWzzNhBkyMU9WWowDvkpx1ZKM7v3auD8wzHwzi9FXNjdAXGfLsvnAHGWYe3JPWDSKov57j",
  "key27": "3Q8BfzpA824hALcSXu7VoqnRMWr7CinThV7N1nCdC7jgpNG7FHD1VgBTHM1RoLRcPCyRt4HDnMuYyfUikLwsgkqs",
  "key28": "Z1Pw7f3FSTkuFNWxapnFTHvayrhUm4rQhNmEuuV1NkshvCvHAymiJybqpbQr263DsWyZU3tMTUuvatuW1JVQmJo",
  "key29": "5P9F7wqrpNkrme7Mn9Fn9XMHawAkhWGE6YPi317yK9v7oi9qaYQgFqGo5efbPAMhXBYGGYXEohpcJL75qncxgPq5",
  "key30": "jqNV668RveJ9NsevBAnigibEEkg4rEzr8VJeqBQHZghV9VZ7B37qhBUBuRRhrPjqZaGbjg9aNeXfeaVrryYrkRV",
  "key31": "3FFtskPpsjgi82wdHYkTDnvu8NcogArzspVcUcWEnzZA1UbqVEAFcYmbfW59fyRmnrM97KHWLi6KgM2gbQwq7Kit",
  "key32": "BVLkK7TfJdtG3d5uEpFvLTy7jJF6sTeLkub8319U3Dsm2GCLHiACVvTEMiUkb4LtNysziY9exV9eRTEZ86TVZn8",
  "key33": "2aaHZqEh1ZLa6LN6wEBzNzC3GoDttsGrHGFeVdJX1zjsP8jyhhw3g3yk6bCq3VPapGnhxHqCqErYVrzrVuxoSNe5",
  "key34": "2E8ez63bTCka2MM8Hcm3zSV9TrVJsQSpsBsY2b7kvygy2YiCKDpagFgp2Y5L3NQe1m8CnP5wRGZMgxEXWz1yaNwi",
  "key35": "556sR7Wxwj5hPw7TvuU2tonhFFzEbyoU4EfCCATfw53xkJPsz9McWoJC4m2UDz56vyKbSKJtiRhwafnbb4dQ89oM",
  "key36": "3eUW3D1zh7cnVC1MKxGmSSXiQvz4WeDXnRaSWkqPMV47cVQuCxgz7EVZLPkiY4nXHMfSRxew3eVQHMUqZreiCt5S",
  "key37": "qCeh4kXFpcAbmBH46Sd4zh924jxhjYZ36Vj8N26pQehZtXRgREMrjUyvF2gVcB1cTqFWiiZX2TVY4ixnZcY3Axy",
  "key38": "5hipnYrjKQKTybKzur9oPrqrXs4mxD8dQpGCz7N7eg7DKVYRHUJij8mCB1dFF48se1KodeakdKQJLq7thT4XuG5k",
  "key39": "4BhCRcWBTeu1BJ27FwWyAumtjhXGEu8X3t4yNZWjrFrSbQDw2VFhLWEdYhZnb6PqCqNuVrCQPuHaLggQSQps73LN",
  "key40": "SxFkGk9EM2zfhuSpJi66BuPc35s1MYyTK4TaHDzZ2nuPmxppxTAAHr1qBw1vQYBwkH768DkFT38m8DCvh5eq5vD",
  "key41": "3spE5qLnhNXfi9pyDvywQAbBRFviCgMcugoyB9QzWEhWogcct7oD5U4FMuBLz9cUbsUPgtMBo9BEaEX9i7hD9Px9",
  "key42": "JKjpaxiw92b9jMeW9uQzNTTF2okoGZyYBBKVcYpLx9cXfbtXPev3muVSy6B4j1xefxASyczFYpVvZLmkdMsjibm"
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
