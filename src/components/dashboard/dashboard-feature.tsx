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
    "2VToCQFoKBeLzxUgW5gxdiVNef4GGuAEvRtfioLccJtdhdBnXatrYzEnDFX4Uan5joLpsSSUaWyb1SxhZHwCjz6s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pp27DFiaqFBJ636S55KiePRVLnnP6uXR7Q8ShEzwR1vcZymNE85xs1ZRKBsTvvLmqrKeRVC2kPtnERGYkXuV7Dq",
  "key1": "4u5AsUREkwTzhZHMe5SDvJAQfUFMXYV4pMBWMamji5yK9Uvp52R8dxaKs54o5a7RE2dd1kUJfanXVcdZq2DMtreh",
  "key2": "46xf5WdFsGydkHuAWUFPJB6AAydEA76GmqujVF8mA6Jn9uNsg7DS2cSWmbLzvSU3XkSY5u3Y8TTXFkTGW57pjkVJ",
  "key3": "58nZfeEYNScRpfJthtHs89pYVeTGJgDLXX9Fq6Uei66UzYJNn9z97koYyZuGMeh4SobivfdxK3Apx4deYYkAiWj8",
  "key4": "2cR22rQyoveWjWr2Xdda4w1rZ26iTeLe6ZLnF2ZzYR914ZLefQ6aYotiAt2MzNLYtMWTLgZfktTgC2hbohcS4gmo",
  "key5": "5AcrdTnNE8xHaKi6ZWxjrbPPeEQwRYUMH5SLZHmQrWMj5hMsq1YgXg3ybrx9SnpKvJTfbU7mm49vtAR4yzVTSTkg",
  "key6": "aP4MBCksKcUVFjLg6qfoXiDhuBavKew4hYqgaPFfULMwKtwLKwe2SiCpcN23RVU3uaPH1MkMhVtmoQdqQ8YfUqi",
  "key7": "4kxjkqbhPm32L3f5jaCKoGavPqujuM3gY6Sn89C7NAsfck6oXVt1vfaw5r34yJBdsqVQpaSfvDzsWx7JPKf23WJi",
  "key8": "39ARn3NY1ivtehzpiCMFuTyw17BNKHyBDPKarKS6EXfvB8vJ6ZeAUG9CdgbZwZUqS3wXNJ3PRUc9S41RHiKpDDry",
  "key9": "2JSbk9HizNL3i9g1dEDUnW34udnR7nJAGhYkA4nqYdT1zRg8FEk7zzSALLKjLj5pyFeVXztafhxUYPSwjb58FBNL",
  "key10": "5CBYR82oNpghBWtLHQNCJjDJhojBdrEdGWSkrs794Q7QiY9oBYvy6wZVf1dwZ9TBmvPGbYz6XPUMpzvKS5Z9pDg1",
  "key11": "XKpScnxxYWGfBWLNRPibNy4n1m5uSzHZ9v7ubaBQ1frRmft9W532oUB5GdbytgV1YMgfcfXyrQ3iuiKvikcnHy5",
  "key12": "ZCTVL8axpXPwUaTriAkwShKTaC1hAsBSjhA1gpEAJbMQKZB972yVrfcz94zYDJaksQyswUZhN49dZczNzgxgY4N",
  "key13": "2fozqMr2qqSvDcEuh1dpWvRHPBXRw9cPswsn3Zh6fsvhqyC58dcC5ZfbFrRS3rCzfhZAArZuNWYC3G2usTsrVGfv",
  "key14": "5r2wK7F3MQ1xssF2N478cgqKj5C8Bxg27uFCwJtxTW93mXGyw6J3MbWqCzTC8tjTevgXh1y4qefiCGLec9U5VNiH",
  "key15": "5N19A9e6bNS7juRCPHZce18Hd2oPSdwnaFFa8Jrik5e3GKvqrSm1hzTNSWAEsQZTbG6KtwfuNxzkbzoyFvcLEEHd",
  "key16": "59bBd1yKC1aJbCg52RipC9pPfykTtetR8XrJCQHFHXro6fiF53YndfBy14ZxAy3R5XiA34ULmDBLbXfP7vqv4yrT",
  "key17": "4Zz7ta3MFi5CiTGqmQdVGKaWeFxC2Lw3zBw4Efvi9gGiF4Y3GCxp76gHbsusUK9QQzTrCq7pcEBpGh8asuj2MTWC",
  "key18": "36i3YWwf9caMKHAX4SQ4sSJqhsVJJq6muRJHg5HHEyWrXvdYNKWeC3yDXXtxSRdgSat1v8QUkahA3NF16o1mN5BU",
  "key19": "43rrd1743FNxnmSQ8j4Mi1EKMvVcLQ9c6qfqtwhzHcWRtjGQSKcTJq35vhecfSzCFoAudznxnwUPNXmVqLpyYKpU",
  "key20": "4Rht5oH7KmdfMk1o1KgxRNCZR5LgKtmbKkGa4x6gd1JMg3UD6LHSxXgK6QVeQNecUbkbzFNJsXD7Ae1S3P1evF3d",
  "key21": "vwni8BfTrLaHR6BUGM591RiYhdbU85dKWcZc1W8ucSJ7SJwWHNu6jGFM1eVxjLuroiKhqmWZQw5TkZEfGBVyy2u",
  "key22": "5euo5uNd2MMekFb1ZvmucJGh3bUWzPxYHpRZG1KEsw37E6oVbXChVNQgeusNqw5nYuqQxd7rh2qPydiZEA48UaXH",
  "key23": "49AV1e4CC7vu23GqxxbSfrmiE3FQj8ZB9F5674SGRLH8rf3Tqs53nC61mRTuXYe1LSvcH8gi9TwtRxLu6mqUEk7r",
  "key24": "3PTUawSYLGxHEgqxEJ4ffX9xt5s7U4xX9uiHQnvEbhBz9MV5cXCCjtHSKr5FR8fGiLuhmb7QbzUPnTLAsfr3YUWk",
  "key25": "5Eh7YE3GvJDVujfng8VhWBZZ3Adwf2GVfuv2SRqHmFGw7kUxLvXP33WRai8rwdYKvz6GPBMdr3cAFKnYEhJeCwTP",
  "key26": "4S3ZRgtfvGXMzEKi8WtpwRuBp8p4serGkUkrZ5xLGqYKvGdFqzrWxiCHaH3GniwcPEVFZP37rB2CDEoJ8VFyKpYn",
  "key27": "5C9dHsX5RkB7j3aKomMJ5EchvPtw5oARbFhbSnSWG4ZZqX9rHx6gaxwNWqXXsLb3NCWFcXoQE475aKccucHKrCSZ",
  "key28": "3o3Ho62q4J3JWZACrdjyZcET2tEACs1Mes8BTF8Etu5w4xAnp5TzESRDd3iZ7YkaWc2Dd3hZFp1SHLfLVMxQBKS5",
  "key29": "5aNki25gLzFBzMjb9KJEx6a5mc3Bay4B5VEQRwd1k97VP9AufzdVtMKHWiTuo3kWstATLA5suJccECfe7cQyg4LH",
  "key30": "2SjkPGr2CsDgtf29FuMapca174uiHDBqsqg9dyw192G7bfsTtrqTR6zL6qB7cBrf7QwHHGs8PdFTLYSogN9LN8JF",
  "key31": "3u3NkcUt14fiRDPhJUHZCVwGpgH7RFpBcfz2VFT8WsrcRW3GgPHmbhbVZZPnXdoqqMKzR5DKZYTjUT1WCFmGV68s",
  "key32": "4xk8RvhWjeib4mXJpvqpCadfLHk25WgDACBfJEphzwhDEzdg1yxvz2zuzcSyaUbQP4h9VptfFQ3HvnhTUFkrq26e",
  "key33": "5uBh3AaBadaXhwQur59Jt6Z5fmpfKH1p6bbcNLPeZ4FRK1iu5xjQMwSAZstRupvaa213cEVtVLM6VvpVu5V2DeiB",
  "key34": "5rqjWJQsaiw5Sy9vDNEahRbF9TaoU7Q7Y1zX2qADkadZWd9itzgz9izAoHV3eW1AXttmMxgFWRiEtmkbqtwVCRRe",
  "key35": "mNU7mUnCJ5gfxTXjyX8BnqLmg6JBf3jC8C68ounZtnFPCvnaLRR3ZErPBThYaruBL1vBWZbAVqtEwXXV97Eembn",
  "key36": "gx793KB5QgBePeQxKhPtMeYA3vhd51k8JkTsBvmzb5ytmycqGLqzjmXW7RbfK7noyAXXdKQRx63Ez8NYPqkLzyY",
  "key37": "5dm7wNx5mh7iVT8kJZkHw3DzGKoiMtiUbsXEn81f2ksNmPaWZ8MQnhPhvD4u3JhyZCePTUZKbj46WJk2jimrbaA9"
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
