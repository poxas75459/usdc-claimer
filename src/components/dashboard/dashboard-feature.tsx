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
    "3gZuT8DQahYZTod2sqGeXCr8rgTkupY4tgfwHjJvXREinsaFopXEpoRfqqgUCMFyPwUfcbCCnxKQQ7kQxf5aQLS9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NemYTYydSf9moF8KETK8SegcVW9zxHr7j75MivzSSNHex6wbMN8yFdGevBNVpj8n4qgoGBd5uf4c5Vj4JKp4cGF",
  "key1": "4TakPbFgvDhEtdw7W3ArVUxwd2cUATALwNPPF19eG42WMbJFjPKzcTLS7dBoV9xL2itxyUT6CCfAiqrr85e9Kqh5",
  "key2": "4RSe1A49M3iE9vRVYWqyS7sF3b9Xe7CfuzdtGJuUw9SQUwc2ENiQ6BQfSe4b4omAj1tkn5E5JMYp1SWykvB5DRZE",
  "key3": "hHV7vxGo5dazy9LQiAVt7LqsZozgHgwDTD9iyMpBkBUdEDVEgEepUdT3jzwN5Q3Gc25V8pLsoiRHHDQ6eDokRua",
  "key4": "3HN8pxdjTjj1pKXQLqbY5aTi9NvEuV4Y3twJAJKmn7zvqfjtDSLwMdAu6HPoqc9va78fd17uusBEKfMjgpvUcSwv",
  "key5": "TW35HucN5cuyLC2tERay2sbQygbLNQcGgp2q24psTEy78WNBebT4eJBGMxpHEo1sM1UjEkWMGVaVwp8PTKBCpya",
  "key6": "3ahAc7UFkVaFKy4CFn4uZwvxDaCKQhwGVWecJ5y448q1W8gWDNPCVniGsdQRiRvs5V5QWcs3gptDRTQ5wS37hypA",
  "key7": "3PJpUffSiQiDSECmvvbzDvnqv8JFX2oBdud2WJxY4XF5XPek1rumsyvp2yhFckyUsfiMGegdrjcjobTt5x2iEyLr",
  "key8": "63ngjVWHKp1jszZAhQgV4gLvoEGUDupfRwpMCMxvP7uoiujN1RK8Qq5h2HznS5gFrJq3styQjrvQdvACUi6LMo4p",
  "key9": "tp7zEM2HXJAfZdnkLFwgBUSunGfZVoUivBRMUj8jWrP7yYpqJDA3pa6TyXXqoKoaMRiebjP8VRtYAg55u2bQ8C7",
  "key10": "4Yqqm4mDfcLPbYFvegbbEk39X5GZhLVmraJM3esK8DWkdpcs9mrzVseNKwiSUGZLCjoui9QMnJrYUtyVD3zsEX8s",
  "key11": "2yrhVUbGytzSVLDjd7Yo1A2yDxRwkKDbp1QK3e7J42p4pBj5ys5HjAT2yjGypP2g5i8Jf2LZX2ZDk3pbAZNTVAPE",
  "key12": "XM7Zd8FZC2U5bzuQVEjctoAas7F9WZhZQtwsK5YYhYSxqQ9LWy8k4DnBNS3nu6295gua2pb3pygJQQphuk2MfVB",
  "key13": "2KaYqG8jLmJNmpwx14aVX7nbhJBXgZKxZ3FUe7zH838K4x6KCa1Qt1BW2XyyKEQZRfk4v7uaZeUVbvS1TuyPpzU6",
  "key14": "5SqiWzSnHumUzGtLXArmo3F2RqMBR31uKo6z1ZGqF7r3MDGpMeYJkFx66nhjz6XTnepWAwSYbVmcY1rRtBQEwydk",
  "key15": "5WBgsrbyEXiUiEpQK5nypfwP3CBBsJvBJJJ9hHqP4J8A2XzW9spbLqh8SHKSQyUc33TGMeSMKnFGjk5zzYfo7yb9",
  "key16": "5Ym4Dx14GEmiLwvt2HK9rPzmSbAaBcKPyWZa4fk9Xv7Nyb7x2YqQNgDjYua5UBD5h8fKqmUGk3BKnMmDseBi6fkn",
  "key17": "2o73ZTwLfntv2R8nHYkm3NaWfeRvVsvJiPx5LHvupQhieQbSHUFSg8AuNJWUZb6QghYi4pYgmpfKpDfQgHEkTupD",
  "key18": "2qSwZa3TZmn4kW3qEoHw49GTUCRLcE5a9y1JdiPrDa14dkxdAzYyrnfjrcaKbe3RKcvekMLPHaQd4ACrDdgDy2Pr",
  "key19": "2uyxt6bH1h7AxrfewRzszs9WLbNZHFaokqRpovW7XWniBv1S2uXbhobsvpBGLWYE9qnFptgBpbCM9CqbJzvgHXxf",
  "key20": "eJ4aoKPAXeJcHzWwA723WqFkdW7ahxRXcytGBKbJc2o8eKdhK3J9QJbx27DLaGHry7gQr8bD3ycMaFpu5mYkL3x",
  "key21": "3LUXWFi2AbHh89egmuFgbe2szA4uk1kvptJG55LqCiKUdCbc8abL4SDun4bwadYkEBWrNzM75hzfkTwTUMb5M21b",
  "key22": "5qCNAfFoCaU4KrQZU7nyu2EZWKW2BoEiZ2qK7n63eTZnXRrxNHypjW19FR6F5usW4qawHP1H4RU9Zk3vJnAF3KEQ",
  "key23": "3WHGi2j3iwbcuw7vTDnr7HMEmy8xL3ZxdBNLBdBssP8J5pWbieFRJC3Ckgn4nSwbL5pvCgHA6rWABF5ch17ZTqSm",
  "key24": "4VMho9ZTtsQLWvXzExwDGm1FCa5wwQJ8oVonFVL6dFHYAniUqmELQycMKK3cGkHzQmVdkSJZ8k3F8zq7ED3oBuL7",
  "key25": "5FKrB1X58ndCKFHiCLvKhC3XkaTf75yNE4pjGagVSD74npgGqt1f2HcW4VCZ79jPV9kPXap1czkaLckYYrWnFyn6",
  "key26": "46ZQZid5pLY5q31YXE2Zuhg2g5ncM3wbycphr6tVyjLZ64q7kK96L5J6PGMjWqRXv7y7F27SuKEPM5We96e5s6Un",
  "key27": "4qzamTToayZqkGREinRJtnuLHj6pgNn9yeofQp5d6veXMgEjuyJG7g8VUTqXwPj1q9r721kqh866HfJYmiLeg8MT",
  "key28": "5oma4pvGUwjAEY9JHC7UcuKoVuYpiEBDcoyskQjnpN7w6UVJCeXdXHpU7C17RosdZjuaMqHkFAEjZPqpg8NSC8UD",
  "key29": "2XsRhGxCZkym1hPf2VZxjBJLs6o6tjgqixRcmfDnBDwYT4QaSSTgFPXeT6Eww4tAHkvQDe9b8saY58zCxGae4FGu",
  "key30": "5DZ4JyuXkh1MB7KrANb2C46f164wQ2i4CTqz7y6XRGSVGXk7hYAK9Av2VAQ3aYzh97oWTdFYTTjT24xomWJS3yDe",
  "key31": "5yPjwoTyMkeSJjphtPjUt5Sv5JS53c6ZGddNDa466akDagSEfriwks2WSZf5QWMVMHmaR1RGAoo3LBfNzN3hE8Rr",
  "key32": "2QvDdrR3sAWr5YkyDBRT5H8e3GDXr7ZiSM2b5tMp4EfsJNMgrk5GaSfQiPvrKQQNv7thJ7QCwSSkLNTTxXtESUfR",
  "key33": "3jhkHUrw8Xqz6tF3HP8hGEWXTgzyQ73cGGJL39LnRKLSLZW69Njni3ej7wp71WTkUpfRP9RhVYpi7wraGjV5ueiM",
  "key34": "3Tgc9r44wSRN8xjcwn2U9Vu8S7KN9NLSKRmB2ReXxEmUH7nyvY96bFY1NCysSLnTYFjr11WVbghazdAvSYwhdLbR",
  "key35": "3VcK1uH5Kvk2vek7Tt2KXWASZejcZtJ4BNySPj2cwe2DxfA2yStq9sCsahvPwS86QbsSzphjhWrUWVuhZG3SQwW5",
  "key36": "4yNHqrKiqBjgqJMhJw7dxoXfAVyoKJ4j8EpSVtTkqwyAvbrzqabWhMAAr7U7fZyA4YMpLU8E8iHtSR7dH8R2CV3q",
  "key37": "4FBCWXyX19TG1RqH3ukbT6dqU3z7CE319yupa4es9Frw8jjPLJUSEGGzqyykbu2yHGmxxmiokgMVhCRhTgxBxZge",
  "key38": "3fn1iPyxf4B7xNX5byCniYCVqSbQCRNHGSbL7VWJPJ6vQ8ma1i3gTYVYtnDUa49MrCbcvtYXEXHACRtEx5vpFkr6",
  "key39": "3XJpipoEJfdMauNudQ6rD9rBn16cjiyjiNF6Q9okU6Bwq81CpZDCHhEJbmkRQjkc5gR4i6GRnTgdyKSiQgiKY8p",
  "key40": "676t6ZBdQSiE5k1T6kusyKzF64619eeDbSTJqqRgR8Ds4okWpV5hyaA2tFMjdU3G1cqpRGeLrmNupgbawdZhhVcb",
  "key41": "2SEYBiUZNsx5d282kwXXG4ULmZdgju2i1ALxGgaayzpjKrXYPXyWgPUto1hRbivssV4Trg1DbdTrwZr4mW18pxdo",
  "key42": "wdsHiVUVa5cZTg1SpkBYKNjP7fEBLkCMouV9gYZHt5ZTcFNFdEUjcV2CrLNaSgcL4tehuQTF3QN3AnZ46xj7jtX",
  "key43": "35RGPasDSagZvXk93pUtuz1XNfxfTSo4fUiz5gVu1c42wyevRYXkUP3m3kJXp22VCBZ2C1YYpDCQgpm6j7nCpSjS",
  "key44": "4G9XWchFmmZYqhy5ZndfnBTeAgbjXdVPeWZUdYEsbvVkdn8jV8thJGx8UNcCYz394Zr7eB9XJwqqFy5Zmi2U3S4h",
  "key45": "359GJi13ReoDw9ijkkAM5zcK5hfeGnUk984tQ2b7LYNArYEp3tFADv2zXBNY1wy1BgrTqYYjHrg5Gq32fFrFyAXt",
  "key46": "3e2cmqNrV9MwcGGc63pfXQyggTZpWcQuUojGauNHzvurSMvQd1cht6Gpe15trEEy5AB1bVeU3UnyCLAGCSsZCXGh"
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
