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
    "Ur8MsSMQQeNVA4Edh2GVz44cCPyzQAM8Nw6dYkXCJFrmq8JyxCZeZSQuuxfzzP229FKyMRwhWZeYDcEbZ9RVgNy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fgoz3itj6uWeQhxQbmNccnatBjHLtz3YqRf6JViGSa8fZQ7JGL9sajULTmgLMyhTJGzd5HJV62BFuC1DhW79FsK",
  "key1": "2oPa4QiCrQpL1mcZH2jWTLWu6A6hatLSQYXEbX6jctyfZb5PpWDx4Wk4azKMgp17YW7EDJgWDzX5SPk7rquaWmcg",
  "key2": "21dNPJkP1s4uhfUGnfxw53dyMApkntXzj582kJyvQugqWXGBaezppgChAQ1TgSDnhvW6WWF5M7ocLmfKXz4FAzSy",
  "key3": "2MPoSjeBESA4TQfg9YgkH6utCKXHAx4a83SCp7n4vM3aSSESETbChswymrc8MTcUogfkSw1mTWjZHKKirfErnEDK",
  "key4": "4wyFNgpRiqiskMgyozqK5GYfMQKAVP2CKShYG95ax4CqTfmcSiuSGD6wpVLBtZsCypahf9YRJDgWGH3WMCYL9DDd",
  "key5": "38MKVc8Djs3ujzxGAPYqphiw1AnhT4VadEe36BGCQwnptZhXCBwoeHce6EnvLY7hqtKkU1819U7A6bjDtqm7hiiC",
  "key6": "46bTp9KTecDfbYwhJrYRmsadf5CfuZiMDwkC12ccUtirs5tniYbMg8ZELjvvY4PNVhAxSVXdZUb66vHYZypvcALi",
  "key7": "2gkEcR2kq9j8yVZQAqzJM9rgokjygm6n6LUvx8HMdvHxBaR6DN5W9zqDKaWSJcsenb4Gbdibt9PyTJYdrhGbbgq4",
  "key8": "54EH1w4hFjRP8QcKVTc9iQnhQ8XSoM24fvat3JTGtRBRiVkwkUgQFah3cP656HXyyoMvuJoC5KgBMNaWAy5HWbTE",
  "key9": "567ckhoe7BD1EGFo8GWhwpk3TtBtdXktnrv6DhLwFAfq5Ek6DL9XhMxGYzYHCrNvkPQqUpa6vYfi924gibj8p3yT",
  "key10": "4YxCVsmdDfVCiEJup28HhJh6a4wfkzRX9RTdwXs1Z58C475XWKkjE7Hsc7pvRuv7xg6cSZHgNJYhaqxqeW1gyrLS",
  "key11": "DxVgDLyqZiMqP8sXEC5AXJszWeiZkyVw3JiYB3Po3AFgtD5cWepuawGuhghJnBqcXABLdwRDiSnP9fVhAz4PKdj",
  "key12": "41PvHEhyeEb7pn7BcUmFMBay97bcxRxVu1mYLDVviEoecSvRbxEMGBMZtmBZaS4fopfZKkrgeFEdcSXsqgCoN2kF",
  "key13": "4vFRcxPxi3Sx1gjb6zov1NjnBme93YwuXh3v7U1RqGgLEeBi54qJC3hyv2gYf1MW3bFKR14mgzj8HycDwbRQUNPn",
  "key14": "36ijzLSeFc4uyYKfTF4wkY7ZmrHFjTNWD2UApCmfj7i7k6exQfTghjkr3gTR3xHRRUCueCbifiXFQpoYhHBUihi9",
  "key15": "399stK8YuWUSKQgkAH9FrhSkF3fpsiA2S5V9bfcm1yMdLKFpxZtZrvVtKJXUsFQC8wnkdLd9xnb7Bg68mJac5QwS",
  "key16": "2E9YQKVLZGwYYqcUK9mUQG3K3FTqv3SF2nfQK96wug8rTLnLJuGeRdfLGF7gfmAQmVrvVXcJ4s42xg4h3T5Fhrsg",
  "key17": "2mo9cmCoCBLrtUkBPHcE2HX7txWybnaiq9ckoGSMS6rasVXWSBjPNQJ3E15bzfzzXvYMiuZHs7DfJvSuks4kootH",
  "key18": "5ADqfhpvAcMYqdXnVm8fu47251TWQZY6BqbijJpJtFo7xFyo1gVnxTr5MJEmPXamBMSxDYjDLP2ZF4akEvTrn6if",
  "key19": "koMU7tm3KbC6QHSEjLPP2916E28DpLsUBGZyUrC7d5gAqjEvaTzSLBNRGy2GjLZafiK47jNutVG71993qLP1kvQ",
  "key20": "2Lf3rxW8DZBQZgd1jGvneu4ULgbgXPsbRQPTPbHgswBrijJG9zFpVY1BSxkvtp8WpkbM19QBdLwfo6KiefZsy3cE",
  "key21": "4Wa2h1LwZzxZgcHAAhVT3b1UegCNnfafB71PuB8MbPY1noVtGuwbwHVNb22rJ2im3jHgLWbTXC94peK2zDCV6MYj",
  "key22": "2tTcYT3oYzGeB9g7kt8cG4SzyeW8k6G2SqS21XzJnhDZht1uA1L4TT1SuEM4aGozfDMN2sg8GFhf7fymrx7cSqsG",
  "key23": "4mSKH1SU2jeSNXFiGbJsgWbL1sLHo7JQvts6xVDAHPpjBVCkVYHrTPzzCzgbumUFoFprQhveGrTdUjM7Gwm9niV7",
  "key24": "3yQntGynmbqmaQ9QHNTjFqW1bSa7LoMi51rMhejEGDs5HhULvA6MRjUK9XYCgM6iE3CMmsYa7HJJzhZqUXK8j7YP",
  "key25": "zQ3fBNZ52GHGnFixD1U8WtGGaaP2CWFa9bMtQbB15bCZ2JGBSL3htCFAEcBSGY2GwuvvdqExFcMkp48UytRYRKo",
  "key26": "4dUZAwoEtMDjJpqa5uk15DjoxwjJtkCwcFJtPUjeGbr8AgN9YfEMjs75soNNEbrhY3tA8PMLWAbrBuexD5wLpVHx",
  "key27": "39hqMPZ6Gx9KZjtQFzbvaVMBsQFbCYCwQfo4K2xqQu62xnH48pvBRc32BRaazmt5rhkExFBFrhJm92rQs4VB7zDS",
  "key28": "2cHf936AtRzvGpQjR2bxdNCgQJi629H3YfGUgtamdUwEPRcC9utUR1QyGrPBwqBBeujhF2EokJMc9F5VU8SnvMLq",
  "key29": "4Gp8aLS58GGqzvQpE91Np84iS6yKyZoHaeGTseiEf3jRqDErxRiRGPxbsLXtWxRiEysZArcMvVNSmo362cDgCDSz",
  "key30": "3tjUD9BsP5K19dgLyD8efs77U3Ny8UKxmHNaTXEi7Zcg4vDQNxdoKzwfFDx5bYm4L9zJuCeQRuxz4GzdubTyQ2we",
  "key31": "2ga5ZxarKpnjhNQJfeh34kCDs8TbKsKszxJE1f6wrVb6sFqvGfgBCEA1obwKBRQByLitxS4n5sPjGKLJM3diPimQ",
  "key32": "52ECdwkgitdwGRkm2SAmqfHpGrpdYQGGU6LmjvfT62sDtB31exXYacNCzD2wQGrSaiddyHDj2F5P9pbRSBqE67TA",
  "key33": "5yt76VRWFKwqukGiJKQVZ6uVpjDGqzpnbkEwDNiU5HXtdBRywxXXWcc8vKnV8wgt3szuqXSyRCpdWdXjXTFf7ir6",
  "key34": "2prgEEosA2MxqjNjmE8z8EgH4PLUechZPArH1h9rXmpHd2UWp2tydsg4VxWBVoPhS1z1viBj157gZCzLV3H6zZhY",
  "key35": "5sWrp7yExyjmYRjCFWxw97aqnEtxw8YV95TfCfw5WovV9NYDVEvwepGSjhrsTFqzR8mvj7aURAcUmMXsQzcXTRoA",
  "key36": "2fgYRNy936a4y9cJha3mFZ7sEX9o1vLGgNFpxeq5RBru9StNM4eBTYodgxUNRtQnR4JhZewu8q4rpNtM8D7h3ai8",
  "key37": "5Yin938YEcSN9wrZYrbBT5CaXNTpuGJZUuu7ThT2T4WBUKmYTjgKZmtrETR4nJAsadhvfqk394kpNcqseXcp8Co7",
  "key38": "56AexPaCgvWptHRr3tkHFjyBPt2VDbfZNtcBkE1LKoHQmXgcrdTDMHPHnMDYP5i4eR6Nd727oKVCRmLRMFYsg9cS",
  "key39": "28W7zkoWtvuS8cqkTnpZyugM7PM3rieXCAuzZ1us7v7MHWEAwzy7JMo6QjncizjuJz1v8NfCbogYN4WBXWWEpcgR",
  "key40": "3XPPShQRAPmLsqJcvRdC8iHxx8MSjRmPqsRNDK4wENTDVcbQf7NjZXxCUoBtqphr9HqGuQTWzyFYDcw3c4NuLj4p",
  "key41": "5WnRpGtX497QypWmMKFnvcCB5NShvrRmcmL2epmV7QQrDcku3caHtzacrz3bETuTQedrkxVou4tR3W5LQYU1YcRa",
  "key42": "3FjY9RS4pK9VbqWUKMY9beDCTtdwVsBUZLW69gLL7qjqUdoJp2d7jcBFRjvdW8HUMxcJ64nYHYDvCcT3BYDHaDJc",
  "key43": "3kZPwkz4zh26SteorauhWKh1TEJt64cLw1uvLs36b516qE1vUyERPFWRGH9xokGbevjx8gSv5D9J6LnVMN4BZqRp",
  "key44": "44u9QEG8WYa47TDmbT2H4m18MKo6fTaZxdw1Xt3uWq4JWFVnFeMKcuFGNZ8PHAcxfUY96iMAkCLNQynhgm7rPY7f",
  "key45": "5Qp7fSyj4FpkbDyy9PuUYFh1HJmSc9z9QRWhj8TJ4tTsRZAsmWMFRX2xFBQSHYvDz4ZNdXTuRZ6Pw53HSA4yLVPi"
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
