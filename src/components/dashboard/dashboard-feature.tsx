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
    "5NMbsCQSjYvXbrRsvKPVGURTUPsrSGS4BTqDNnhWZxSwGQbSzmkx3Hhb1TM8pcJKfRLLG2EBvker6sQhPcGuEt2q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KsJsKuanFm6APmvH9PxHQAeaBvSJLuSWqu94ZFXk9X4yTnDiyyVQthzJUhhKRXdWf6eSwT39F72UXT6NHfidHKS",
  "key1": "dQWQgpsJv3hAdd7Cy7W6hPhSe3vaSmCW8s7R3kmAmFZM64pbwxpW4gKNP8vsJ7q4sdQLvZXZtWvpvj2Z6nkbQrK",
  "key2": "3dDm1wAcEtrpVow1tnUtiYXjkqs1vAQDwqW3zHYoW94XVK9mWH5Lv1in7ztwhuUViexYqNa4m442jgxgu9fzKc5V",
  "key3": "2LmBbBNhQkHWwGVMtSkAMYZhvS23dqorjBDnKhKjddYA6bmUApSY5bWnYDHSA8cURAKN6GNKD1NZVnGi63D6ggGp",
  "key4": "4gxbo2Y1YMtqDSETfoHjhQrFnRinjNbvHAGsZ12qg2ECZDAh7bCmsSVfrja14zzT3Z8YKeVruffqnYvsEV2ScaRW",
  "key5": "2FA8wVjh7PX9hfoUS6C58exnzkGku5ED4FZ4Qnsch3i4GhF7DDzY484WNDPWzQytFmWANhQmyVk8dEj7dSwMPw8w",
  "key6": "67MdNisT1DugMWoBVTP8pyVx4dfpmgLfRS8CvKYNVjG2fv31Ko6RQePDWcmaytvxWUS66DfGZKhNTBMxHE92FKn4",
  "key7": "45A47ys6ug93ZPKenef7fR1vsCwuCTDCknpPuj58QYEdTK2wnSgXsDbwFzpK9c1sf2Ya7Kqtx28UQ9DVaHBrtfuQ",
  "key8": "2eympzs2SxvpGEBtyNvFuhwMrkJDsxDvVniBx4jVmrpVCSZhmeVHBXokjP99KiYG3Syh5ZDHMfHt45p8cSCq5VjT",
  "key9": "NeTVAJiUreU2BcazihGgPecf9G1rzoXt2XCXGpqGh4jxsLtggS2eeEfKoGcPeN7mZkbVY4x9CSTcNDsVzvfyUUE",
  "key10": "4zsmGiVZbU4HSd11nC12h5RsVPZYiYXFgZCjWcSyrQP49pDVzxFdf2kgya96MSkkc8Bcm7LTaA9YbchScb2n8Uha",
  "key11": "2VQ1w4g4N9J3an3ixSuQZmB5vxxiHAin7x8YFR2DUV7rWMgPTmJg5ntvnrD4bGnr1AjRjuHV35YMXZSX1yWyHXub",
  "key12": "5Z76szdmp9NirGcZskZfuPcQpWjwCJ8MFL6JNfLm3pUypvKJxqpC1DAWXqCAD7D8EMh8US6o1k48xryWjAZqVkio",
  "key13": "5tMySe3is3ef1NbXrxX3i1oXBSy7xCaeH5rYtMQ1k3YMXWfsivS4Jc6HKYL7uBHD9fpHQzj4Yo2cFDAV7Kob61Fh",
  "key14": "2sfjnvRaJjNVGNx5NS2YtM5HCwqEhx2mAkH2CcuxKyqSfioRYvsxN2HTwMnXdx24phs54q7JqmCwuASQGTfb8q1w",
  "key15": "4p2T5bwsRTVb33VG63cm2UQZwoGxA1YMiwvAsZzUkHRteQkQ1pU2BgodtUTC3ziHSzKQdkU96rMoY7M9B9ZLpnmQ",
  "key16": "2y4dkBpgqM8h9uorNWURfCynb6fCVQpmQcN8RwVpmoPBsrGMRRmsuAVKZd5V534CHF8FfYJG2VrghXtu2CAQmcfG",
  "key17": "4BLfbUbsStEabNGtNCiRBQwcLW6sSVE3dGzruUqHNeaGM6GNKLNpjVw3mbmujjfJgxaeJGiE6g6yZdRZPue7W3GZ",
  "key18": "2iNHZfx41XsJwoSMNF7u9i3sYj4uMHJ4sDL5of6dKHQavsZNY4t7F9FYqAhXTt3FdNG9vkpAVxch7D5b8QSGnVRw",
  "key19": "4nmb5RSo79SBEpG5yTLZtvYJa3VDyfBC5fQAXCTUGaNiM55iZU7JC8BgD9xoVYTuWpQixnowoKVzpdaKKjzzfZ9a",
  "key20": "THHZtYEzDGVtNM9iCXihYrhNGK2oRGAxSDJcAVLdbpu1ZcXCQ1hwyXBwLK7K3FmmVnsExBDktrSbpcd6WZgEnAn",
  "key21": "ZNuh9DWVDaEFaWXoQ8y4r3tT69Zr1xYM5vJzTM2SHtAixn4iWbb4p6C4LiXDB7Q5Hj8UXi6ZfekTLcoUcW22wcK",
  "key22": "5NZ9LxqV3wzrSgAwLvNhhvadbMgVEaURPXX5nTAZFnRV9ARK6PsWqifm9MKcHgHruSZSy9923XscFNgLb8cLz5Mc",
  "key23": "2zV23eLAD8TXQVwHjejCnXxL6qGtfYfxDCfyXHAQuP2AZxsYnicqZot37YNG8TyA3Ed3gyC3vdtFLCfqExdkXADY",
  "key24": "5VpeNxrWiFsuVtB7dvR52gDi5nMjPrRuMw3xZsxur7qi89nn3c9JsbxzTdXiS4XjxUoZtRrGUMpTLoPuuXkAEzsL",
  "key25": "4M89dWEy2Kia5k4avmJZfGnK4Zda6y1wUkYC2pvDYbTQJsPe4tN5zaNT6wBdWyVEofbwoAstq5rBsnKxjbLt8hL9",
  "key26": "2Xn7hHuZgTyxRwm2gAp9nkWkB2YzKGkkbbtkPcAMoSVTp8qC2m954yeSwkUnD1YFvMxVTCEipR7X7oh7X9gXA4Zc",
  "key27": "WGpytMqBGKS9pZZgnx8V9jVb5Qse2PotF6hCmwAEwjAT87voWmdfo88kkjaxCkJhncPsCtyG3333AkaMQTxJX5r"
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
