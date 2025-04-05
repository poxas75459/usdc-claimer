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
    "3WuckqPrt6yj1cSUnGUHWv7Wd2QMbEjfiAd5mG3QurPiV4pEgxEHaAXSz8DgRXyteKz5uvrcwQM6dBqiq8uztycD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BaxVMSUtG9a68mLkpVzg7fhmSEAbKLyjj1Zm2zQndA66tTyBtfaPmbxg6suc81uzeUrYDPaLGnQw8gzSfk3uiEr",
  "key1": "5WNc5i3rB85Q4A9hoBxz6CQVDWyeau4sePdUStfZv28ThrVA1etWMStJCJAPZwJrWhQ72J9xmH7uLszqhLYQVGro",
  "key2": "3Tb5R7PEMpHrPormD5t1NhTpEx2Hna8vAQsrTvREF9pY6J7nEUFviLmhggTE7LEqRWdisMddVJMijvCSJuk3ivUX",
  "key3": "5NFoevgZKZV3tFKrg7J9FZfYqj4vuNcnFg2JX2hyGq5EGmnP6qLw6W2YGcDxDgJo82QFoFJLWFhTqK4Ub3etwqXL",
  "key4": "4Xa6gga96AqseGVGotVbwcjazkSPU8UUR2Pyhu8qUAPdWAJQ6TQCM36FhjJq4kMrSrapwE783cmuonC9phVoNeCk",
  "key5": "4Vw8Uy5NzBPZc5gx9YZgHrhCSj4aDYEh4QiYnHZ5eCXycxqGumcanpZoverg5gXc2gU1hJ9BTUZ1y1j4ToB1KTgK",
  "key6": "35rTruksijvCdHmuQmd3MBSk1FFRYc5j8sQFeszZoKUDg8XQbmwzFRVgxb731yDk1aoujju1yBM1J9jRGDWQcwvm",
  "key7": "64pUQjzysoS3ntTfYb8F34Lm2guXN9NdDWXd8v4TEUHAmj75zefgHap6mDiW6WANsdtm86rqmttmdhtGGyyqMvcp",
  "key8": "5JUYjfxh9NFKgnSEzQGN76NuARPmYdu8P7gAgb8cGZh2382H34sqqomQrWvsJLUXNH1nFnKuLUnx5xYNuSDm6DH5",
  "key9": "5GsqQU3o3kP4QZXPdAW7Qa1JV15VQLm3ZiwMysQ4qbM5UvSwA8mcXeZts4ph1TVPv9payA6RBTTJtFBKYGyGvWzD",
  "key10": "25N8AYaFWLBD1iRQrSdbFnjyNmdwJohuoVUCNGUdAvtRuTohDjfavd454avpihy5gjxwePPTuAQmgR2j4ezQTyqN",
  "key11": "64d1hnBspBGpx85jdgwoEFXcXZDevHRrErU4NRvMKyqcuDr7wzknUghysQeiX2zSkjPbC6sg2jBxQrNtutgLHREC",
  "key12": "57xsbJMSHMUfBW2vMnXVPWzjoAMDex26NPJ4h8yg8oUCNPpMRXM8fiZR9AZ1w9tHQUxmDLZqWRCMjzu1XSJQLbar",
  "key13": "XGMd9doQjY6fkBQn6PhfVjzomo9m382sXycZSKktud2HSX4VHw8ryn2jUQA72CHciCy3sak828ssLa3ZwpYv12G",
  "key14": "2oxX79CRzEvgDtrDFhPvSySbjAmgzSRcmtWezKxuXELRtn28LPeKkpKLchq4cGs8dPMeSiGxvjqHrLHjqu5duRe2",
  "key15": "4PgCr9GA1ksshpn6Zq87Qr8cMHDgg51h8gpPrDU5b3mY2NADQmTzafsQTwMUivFUwbqWxPpRwaSVzY5WuYdyhQ8L",
  "key16": "4ZFaW88DjXbUMt5T7RXQNK2YKG1bq3fhwTZFnpGMt376V8Kxx7FCSs4NCh9pXPeEfNt34c3YB3gdkAvtTY7QUgHQ",
  "key17": "4estnwfRma2YroPaXj9TVdLAYLsx5C8L4d94nBB8yg7ARbN5nA2u6bmNEazxEwCX2TzFMSegxxeDmBcReVsU7HCt",
  "key18": "5StseyQorZQY9Mhxc7PRHjkrUmvLeBdCegnhxDSChYbe5vSxFavKsZALX58UFmxBXZretsJ68NizdnCnfJZLVHav",
  "key19": "5sQxQj3Qw1H4S7yPM9ZVu9AhmNYuMKRwtLq3y2hNY8GaGAcXsdHeqKNF9cb3j2VqHReoCB3R8TfFroU4C8vENYjY",
  "key20": "67jMiwecHoA44Zn4eQFcbDBG3DQ3iYvxMPBoD2poE9gMYxkFfaRmexjgvGTMK5GfGMSK95GerLVEpF6cWkxjHD8t",
  "key21": "5JjTHrBTeSLAsQmTRe21SSkZcjzsWMLDYG4sia79uxAe4M6qJ4H7rVn5qmxSUMgzG9NT6iU1g4KcH8VSphAgjsrz",
  "key22": "2Zts8EEKVeTgKnRZikFfP5Wjm5YnY5zxSNF5CA1a41CkYbiXKoRbdUV5D3zM7gAeLLc7x6rkKfBDo2cpCTzgbngL",
  "key23": "4yUPmMvt9rFTpABE85v3odazEYwScvfcaQX72wKTs3Lwh742yZF9bFYGZHSfAXWbzMvhAH82Zzr47h3RJeVYfwdt",
  "key24": "qyCXekZ3yGabxp3z1NoMoqH8eRa8CmonYBHDMJn6ZSerUzifyPuGa6BAFmdYX6WbFbwdC5GeptbgXgvKni8vhAg",
  "key25": "4kmsVYqcqYCxjgwHG2iCsUCpNzcVFaenAMgd5hgC7F8net4MNqdTNaxRufQkcae1iM9oQRDSS4cRehmRE9tcS6Xx",
  "key26": "2xW8U71qkeqgFEz4aFoqeaNcUuTY5kMwHitSW7Zz3fs94DoDvb5b3SndSfw67jc33G5Nu8NVeF8R356MHPMp8QfD",
  "key27": "2ng7RYkrp1u2JQY1RC8LiCwdRw65orwbnAv8kCgRL9csPphDZJ3i2Ld75KeXixcpCKqyHdNndp5UTUGYGWu9vumB",
  "key28": "ySwEoDGzE9fMnSLayNp9Aiv8ZYUAFqJhc4WM6SKSoZKWxErMzN4Auj9g3nBKXXWKGtCvMWxvnE2L5FiqJNkAU1B",
  "key29": "2LLDhCtsdmQKXfQemvAhDfYv8ZkoAhyagHprkEeHC7eLs4WYnYaaVnKowv24ZB3msXx7nYsxHXoyq2oyBfQ6DJ41",
  "key30": "PtMSMBhHbZ7yJeVuqAWExZDocxFXwTaCVd3mhytAmcG48JjFkxuAnZgMrVXnvJJdG4Mu1qZ1DnMTVXS2Dnqq2zz",
  "key31": "2yXc8oy7ybY6FgkT1p8nhZeKDsgdAEYfArNU788TT5cMqgRe1PHmCTorXbpnSZtbCWBM4pY3PNhSj74bs81SB8ju",
  "key32": "4XCG1rFmLuXancmCwP2fLf3wbdiK9oktP93dA5jaDybz1BjHE7byqf7PSor9RfAJE4hgJ9ZPQTRDcYfNfTjtbPc6",
  "key33": "4BqDNUDbDhNRGFP9RnW8rwUsuBpJBBAKuPr8qkYNimELHinTobqDC5dTtQ7DvDRgiM5AJ3ryxMT1YzzBPLPm81xJ",
  "key34": "RxKQsppNUKP3yWZzeZVL3BENiDrsEqoJnWPHyyfLks2qCR5PLBE1hY23buUww8uQWGXZWyPyatHuS7ovRKjtMJ5",
  "key35": "3VcJUFDBow4htbrwP1DQCwfj3V2DtX4jaNXqKv8PQNY2jCkh379KroeCUX8MmbpbRC18L9xUTxcRZ8HFsEf3rR6C",
  "key36": "5ZiUdNz6Wvg4mBCCXEccwuV5rMaXZ7k7FHgQezqfsp88daf3a2mkT91P3wBCm2v7zyvWjHh2yxVf4rkZa8dmA8BB",
  "key37": "2v6fYxZXwWGAPrDABC2PF2KKASgvagXaZfhHJzWoEs8sVukxQ9Gf3BJy448kj35rrAnqRWir7cRBk5naZiRVvUwG"
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
