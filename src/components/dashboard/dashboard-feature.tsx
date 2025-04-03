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
    "47z5zJ4dEZypYEyqUukgPcZPtieCvTZ9tXRn4qsarxrYLdmWiPi96BbbEyBUEWCqT9fDriXi8a8yan9kxMF2txLQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MbDYTLtHE8a9AZLUTH7GbTKomU4xb1qBSKqwd85gk8oxvUhfV29NFoNrvbjZF1xunWQQgXGCYinvJTAdtb573Vd",
  "key1": "2zcs45J9jn9XvgFe8st4q5jWq7px2vZqFgHbFxFDp2Wz2iu1kb68fW2SkwAR1y9YoRXWLzUeWGjVX94zKUybwkEU",
  "key2": "5uUMP6xt4xaXnP4ehxrVAZVouzTprSbWzQgjCfzpHkhmzQT2xwBPUxZ82mJJ9pPA5pDoBQFdFxCcvQWWtYBxdTn5",
  "key3": "4Kpkcauy3jWSesPPQBnwN8Wo3uF3bnp9cQnpojAX8drz4k3oHrZhHefjnKbEBhUFtu8xVymeg2UuXqTGFkQc3EkY",
  "key4": "Dh6DuqFUmZCsvBYfDzmTYoDYE92xfZCBx411sHsUC1R7y3VXKhcnJ4SYHuadmUsoaUxx8rQsDBTr9uyhgGLoUka",
  "key5": "3aXh4jiYJ7L3bTiBreYp9MjP4u4R21s3XkZiEJ9dFSHcRkVb3hr55Pv1kdcytcN9akqjht34ChqgGoXtrdL29RyU",
  "key6": "2JC17iNf6s9JxdBAvaN9om3VoB82V3yrc4UTSdEn6SoP8FDWVhobeUG7w1Dm2q1jXAwBaoRquqifKcBjMxmuG8FL",
  "key7": "ktEaXKPLYhcB5ZWR2WxWWDLroFrnT78aq9325nKaVQFTJcpGA68hc3ZGpxgmC1K2iLcRgABbiU4tFH2eohqJUrr",
  "key8": "5wvLPtM4pt3Cc77wU5bzaTavUDUGE1RK14wMa5hZ9EAVwHogetNtVjRBHGF6vuSThJJGUVMhsTHt1ekvhH3hVWmF",
  "key9": "4Neq9172wiGkQNxzW7kMP48mqmzGvfDG9R5C2VxU75v6MSWyiAUKutrRc9s7ezqAoELK4kvSipqmyGPpL4rSG2P6",
  "key10": "4VBNhtf21xfDQ4T3b7XNU53oDpLvyBdpavQfmaJD93YJX48fK6zPYPSyN8jwQAyGT3HBQoBaiQ6ggQ88Q9Mv6JHi",
  "key11": "3f8fagFY2pBh3Km749Ve3GdR4vefbXoepp39Zb7Ezy78ektxQSoyGgv7pxAmnhBz5besP8LiXdfSefoW3vN7LiMU",
  "key12": "21fhpgWmrX1qmSpjZ9dQhMWEx5auW9ygo1jikVFAt2M7fmSMHg76aYvFZLziEqxzsSkQ2SAs6KpyzK9xskfn8xp4",
  "key13": "g6WnAbqNC5XQUfxoR8rNX9HK55QHidcJBNkB6ooS27YiLcRTacxHGFjM86wngsrS8TtS1GwfBnUxNXndZrHLTab",
  "key14": "2HeRRCgjx9S1abwAjfcaZutxzz3bYFHoiV87PuYgHWMtaNZhSutjFq2r5Dm4ct8a5i8ESdTdRQdedY3Ckzd6pdSu",
  "key15": "2fhgPNNp5VuemAD6AKHJ72PuSeYbd6occBD6qkhZBcEseWSR5LLkksnufbaYDReJ8vMy8GHJMgL6QGfAZ27vsdkZ",
  "key16": "6285Vb7dGWKdCZs3eSbjBBu9v7QjgSzc34HrZTeSVmDmRXAydmifuqvxuU4LYKFa8YQh9UKp174sfkKxoVVXMUoZ",
  "key17": "4sKrkgcpj4u31E38LqJaEH6UTGqir8qiooBgTX9FnkYSTSFnACaVzqUhc4X5sqFrJrvZYhDxhoPZpgbsPFR92Pqv",
  "key18": "QDdEBszpf9vHvdv9oTwfk3rB6EfNXfREvrCwp2PUpmW5oPGS2HszsGyW1t8ngDhjHm9RF46DoPa319T57t4sNr1",
  "key19": "2ia8mgZrGNJNeCELcDFBoPW9Ypw9ZY73JNArD5EHuLs4BmWGadx3K3VFv2x7Er8dkWnH5neFCRXb8zKRbJSriKqV",
  "key20": "3z1VKFVMiPrnzHXkftXdiDjv8ppY11wSdiDqFJtPoyRv2ZBrXzC5XaX3hVTNY6SXkJPDV56rL2kg37zkmYGqSbdX",
  "key21": "2d82xVQaeMgZ2vuZxWbNAit5FF2hw1xcPxBziib8GPWveBdBA4sMzg8jNMoDQupnXQS1qVyxctKKvo6zWoUmUGm",
  "key22": "isRWbKWts7NgEdvFUMDedEB45zGnTDF756qy8ceWesDszMdajKZfHSpXoKDvvUxTChjeCe6TBiv5jz3r4rJDkTq",
  "key23": "2dPnqDMZF8KFHkLdAbX77Rwn2cFdi2XSQvRggujWaTERWUGxPKboZag2kctj26vExACE9DUyYQbSdpbtXnDLy1xv",
  "key24": "45xaUsASszaPS7eZ1Zw9cqjeW8Bya18HiG6ayXdm5Q2WGT2mbzE1SiLLAsERVgvP91NjtkcWLnYbGyvHpKAaYTP6",
  "key25": "psAmYFLTHaePDs5u3J3MiZe2sNdAcGxvaLucxwMSwCDCpJKfneGvF2CdKyE84U2ES39kAj4oGoiWnugRTtn1zoE",
  "key26": "4xAdshJrBWTh4nPJUpmJoD1yPXRm1LHf3NFFjgGijHumSNk42yvcbeLsDq5hppSL5W2aqaEPndXZvpjywDbVjjtg",
  "key27": "3rxXjhK1DSNaVShYfU2rQuQvvTPmaG5s7NPFo1A135831vNTW51TPwSbLj7ukYFUkLng6cFezhTpF1dQz5F4g15i",
  "key28": "3VeDLohG5XPNtofTePXyKNBCi2iQDHgMEq5A68gazN4xd2abQ5YmKUtushDZnNQMtX4Yod7PyFXz2u4S9XRqjqXV",
  "key29": "5FfcYSSXp8LRBDaYfmFJBQLYfRqeG4i5C1atpXBQEQcPWWA4qFpdxYH8BxuPBMukZnwheGuxypyZJTKNu75g6qMH",
  "key30": "5S6Z5WXGWtwYbj4cV9TLmKXQPFSpui2vp3kH2ZvLrJhxdKCQjUtWLGj2vrePLx9XmrHQKQqmkDd143V5FWCT9g4r",
  "key31": "2zBQqyxyrmDDspNmpdg5bCxE2mmuergyhKAUNQJk4FDuKJLFdW125BetNB3GLw8962W4J2j7NyrNeQEgiUpXZu5i",
  "key32": "bMHwC87WPLJAdPX8mEvbuQUARQdtwsAX6PQwh9iKLh9oGyCE7nfo1kJKND2mq54m2zZhNVLqWVRy4mJURLoj3ad",
  "key33": "5muYufHz244rgzYwCBUWjFAP3WBLuEXkh67w8uYZLQ3j56rLeH122o6oznAP45ND3ju3bKn5a7JiLSbvTGD3BYrN",
  "key34": "4TU1wMZ7C8VQYmYJ5SL3jTWsDeCVPuvf43ed6VBL7wbbt52QLLXQQT4fyTkUd3NpjLsx7R8n9iZXaerU2vFQjrTe",
  "key35": "3oGY9gAjRkzJrHvmSyKvPC1Ta4WtU6MPYDU6SvkFyG5zFGLNAReLZCt3BgEBnww4pd1uuvBt86ZPbsKLbbMSeDCF"
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
