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
    "jgdhQALYxQapEDsqVvRNiHQfXrqeT3HpyZkMTA1kvTgvygCL3fBfgoPE2n37nLxECvW2Sjdra9Mw8D8zxHiuKJF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x8jV2u2ndtykDzMgMYc5EbRWLzecBVuk3urh35vwfNyWYZAJ71JwrD5Fm2qSSD1ctkp2p3unwaAkPPg9wuD4FEB",
  "key1": "5EYdZV68rSGJeziq7gyJ7jtjpZmxmcxN9DSnDeWr6mtVCMJgn5mcg3n6t1xMggx46b1PpppzdWPGKK1Um69MXZtN",
  "key2": "3PPUyEk7Y2b1xNx77TKtKaiQqkbnvrGqHJVCrPiuqb5VfVYRWRvYco4Dhci8E8hA4RDvPui4XYzJ1wnbgVg1313U",
  "key3": "34ZGY3fpKbfc28j8p8uAhij9iB4TqALfxm6G16RY7i2RZSdS2SSyB5pHCAhvcmmX9cgzUiapCwQFmxXtFgAq5Pi3",
  "key4": "4iVR1BnK2YDxzPdFEgq6Gakdtk7gN2M4TzYzXR9F2bgAEeoUanzCir9KRZ1eGqmFWcFFe5yGFJYPnXAHXXK8j7zk",
  "key5": "5ZraUS9kN1NUp9vBnWEY7GsREnnGjcvPcJLmyB2okDTEnHGobZVr9p34ioXw7fXhj9gpDVrcmwapcDSmfscidbT2",
  "key6": "5qMXM9pkkbzfzojeQT9bWGs9WCJgnHMdVYAc8JUSi8KqGky7pw91fM2mbc5Cbdwdpq4eNbtyTJnnCxgfHJYUepSk",
  "key7": "2qwPPD7acRvuRDghUbDcHiMSZAJKJ27eGJ3u6ExidARQw6sGGHsVJyQKXPPNygppLDDSGBnGADq2kiBH9LvvBUQQ",
  "key8": "xutBJJ2fug1YUZVZPvEsA3eerXo36v7yReh721KK1qQdKs6wbqqJnx8feD3Ldr1QV1jwLg7NFbe7MgJ1YFFL6Ab",
  "key9": "2TzfFdqfC6hTPTGxjXBEg2tNTxYKRfc4fnyUKBg914sUnXJjiykhMpyq6SwFDiBmfg8xmpjNyeAcSAkEfQJiHLP",
  "key10": "4f23jTXaxEpmG5t4XwMNCdpwHKjbQEChP1Hrwz2xvpJ2SuUNEfA4bPxvRw1d2NTVqUPdPB8Fx6bkoaLVX239y6Yi",
  "key11": "2YVvwdcnvEjDTqR2wQLWyd33uv98rieFutdzT1XY2DkFyUqzhbY41N4V9NvGtdEDhcV1MCbfCkDDDCNEMoeiEa82",
  "key12": "vvdkLtjTqrKj9X91nuj3DFcVanyYf946cpHwdFQqJycxXh6FSwnH3KYNvaTrArBSVjThaPNUWsWUqZttZR5Uvgj",
  "key13": "57Mf7trEquuQsJueAbkG5QJxGBxiRh13zx2W7rHnd8ujfE45oUr9F4rpJUJ6Fcj82PBjZZHHQHyofx6gdhVfTMoR",
  "key14": "5BeguL3sgjydx6DCWsJDaibR6G7b57RLcr1JrpHy6WqLY2AQP6qhGbZok8sAeGKzzvsHFBqicts1zz4jWbiPNe5J",
  "key15": "3KejAgyBsAugVaPdTromyfceQXWvUJoMbAABJyFVy2jzAFAfEBbWRrJYcmaDBC2AFf2zKEwe5Fg5sRzHyyYaa8AW",
  "key16": "K2y3CaFfw5WdA567gdwfJd1T7bhfhzba4z5QM7y1FY74viRtxrw8TqjW5tKVEHHArqhmiScbipeByz5VhTdQBvo",
  "key17": "4pZwdhoXGYcMALgKNJXwQkm8B79maNp2N1cTCuy7ZBMsZiYLvTPGj8AM1ZY7bLZ2Qc9rXjKxEgnyTXh1LTvkEUvQ",
  "key18": "xmGQb1z2qRnvo5Ha2o35FZr7xATCjnZAAbaf4ra1YWWaBPdxfdgdAMUKj9gPtbn7SpQMNPUk5Zt5ibR4z8ukmze",
  "key19": "5oaoZNpbVfQbD17T9HvuCMZBH43VCkZoSRFuPwZt9NPJAjJvvfiAG7HU6DgQtFVdq2yruJuGcXLY1DBhiLBMcdRJ",
  "key20": "26FJAFViJsASXPR2JgntDsGVokwrCnU4zhjGDavaC2ZH9nMdHGc6rTtD11tGwrDrPqVrif9tdhWEvEtMwcFkpMrG",
  "key21": "5GZ3d5gime6kb6NrAMo51CdRCMejdKmsaxHLFDkCjPuaS2eLCQNpRmm26476qYFoCCygcxFMGbGYcNosfYP6TpdH",
  "key22": "n18usXSxr4NMBWn9XyYAff1A3n5FmvWVFnDcCheKX9bypKsBsMpcnXgo9dNy8BdUM3DvqQ5HYRQzHnadcoS1zUz",
  "key23": "4GjH5EwdWKxrvjMcptJs4hfPt5dJ95A4xyXhLifspntgm6Ny5P1571srRd6muYWFpxcGAL6kjrgPuY4TddEwvPF9",
  "key24": "3RKFwEAf4gGiftdAK7rhdq5xNyDZFwTJYGx8RcdBsmkx1S6FzoZs45VUo5je8ZY9zk8HTAyWizYo6eDFZ1dAQ8c1",
  "key25": "5zyJfPccd7dj6yfSxmey9fGG9pDv5eCoJxHCXMPDNnWeCoy1eMeCmTrmpq63P9PhNoGa3NuwHZKduYttTc2NdfL",
  "key26": "whN4HWTg7sH9LvTZexAudPC9KQz6KoaUy82jDoVcDy246jk4wsiGv6Diqb8NoNHHVHyiobnsiBTzj47YxrhjKa9",
  "key27": "3wNrPaxYm37uDPivNmKcLKve4qCKUwo8UDva4JDyDKS8UagPuFkBcZkBo6r6xpHHLsE8nbBzE5ZEaCJhqSB568iy",
  "key28": "2VWrQiM76Rmona5tsAQNcAj9mX32dnjeJWZSPtjnrE4J2H7U3xiCSqHmcFGAtsi5JPgyAVkuimXv2HCjW5M93Suz",
  "key29": "3sQz9aNAtUbWaweCvKpuxriXJGha3HouKCoAk9HcwMpCDZicgga84AaAScEzsd7vWM3ykU3Wr3oJxmChdwi3CB3q",
  "key30": "4PapWKNB84AV5oyeqHLMfw6JkcBroLxhe4RRsBs9bLq1GBD1FH93iCYyMQTXkLQpboyxnyvo1CoMaZk1qUyZFL41",
  "key31": "3kUB8W3mvDuPFZokf46mDF9oRpg52JmdG6Es4i9njMz39qJGKw5MLrfrZz8Hc8ceQXLqAEPsEqpe6GyRTNt3UQ2A",
  "key32": "5VMtdmkw9uM4A7GvqJcAX9wMwvPynjucEKuJTGXncrXjq5mJcaGtGcv5ses9aYHbEaM3mXkWDwn7JsFtQpKs6zBd",
  "key33": "MoTyaXVMMJvVPnYLHWsrsh3JnutKvJ7mAKAUdyqocDpyFKFgkr6sZbTjKXafWgdGfTpKUDAC9LGQMHTGCHBncbQ",
  "key34": "2jvuuHv5HVWd5L8bPfWWUxSLkowktDFS8EBgGuxeKkB15LcuudUVLWhLBGH16Vnyp75VKD1iNL6YyZJT2ErLsDWi",
  "key35": "2pVBwrN9PvM6GGozxXF5ecuBZ3xt6xzjPcXiCi5R3nzCJ67sCkLo7998jk9jQ5zcGoQhvYkXkGnAbuDduhqEeZta",
  "key36": "2N4M8axM7qtjKXyMtkeUHjsXc6rnuEKefujzEQZyNPihxxUwtJP31TbLfZ2CnytrGWWf9b9HP7aEC6nEQPr597ao",
  "key37": "2PtQxrxtGfSSfYR9b6ghhvSoZQHcKQRxN2vsRtAH44pbqtjW866WbQQ2njBx9Sn7PDVVaA2r1x55UsbJFhosTxWu",
  "key38": "2s8ejSRX9yHzXTfDTV6YGXjGbVJgK1EuL6P86fGwmZCPBVPeN9r6KycMCXbcrQrx1DbrJVRoVLsNYLxM7iTuWwcV",
  "key39": "5nB5tmbQ4tHt2xyKqryTFs9h4teKgWBWMZBaNCXeyBTJfgdnLhJW2tJTApfp6bh2dGEkhZLf3LcP6nHV5h4EzPHx",
  "key40": "5T8PuBic4iW6QyznN4Eose82g9sYidHVHrZVENAKCwCVnBMB5mTtY6JMisPLLpSshwSBXZzwE2wpiAMhvNrbcUD3",
  "key41": "TgN48yPupssEKVxw5nD25nGCyagSVCzKRNkfiy8Egx4fN4ZEXYaJrkTk8p3EWiW2qREuCMbkRfTdYLzfdeKyNWx",
  "key42": "3pw6PiAMBxqhPeLBPq9SXokAvP1ZvrJPeEjfoqey44Cp6ECw8mX8xBd23QsWHeLi2UkFi7PtYVXqtS45pe54n44o",
  "key43": "2Kge5dgpukDQLvzLxooAnEExQLw9HMcQpY1sVUa9Xuhc23SU6YmGLtKKHJPGTnxFEuAm1HMRMz5sLxhW4dimiWQt",
  "key44": "4kxtJSQ5AC2XNDdw4gPv1M2qqAQLzKTteoqoCJqbNcsv8TppDdMSxQ2U25nnGkjEhUHUUuZSJThwJsTwFpJgf8Ks",
  "key45": "29Q1iJH5ToCRqFPha1byJDowpPjH9rGqif5BceSu2bQfmAYFBEA8xEcHyQFD9sgAwYCQncmwxsz6exoz228zqkTL",
  "key46": "8c31Rxz25oDXxpad9eBinFTCVDdhGUw4NpHmzeAdLAgZFx3cBB7C2cDLDZj23nq5rdupgoDQePaB7MFY2qAQXXT",
  "key47": "4k4eMSjECZYti1Zk3MLb3mYeDKcYh7VuTqTZruFsjRFCccDQGWcepZHGjRzhFGEGJnBGQV93iNYFnrbTh9t1gxRJ"
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
