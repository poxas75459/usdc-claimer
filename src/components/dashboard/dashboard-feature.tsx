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
    "4JpuYcUMpBJcUGAjrLXF5i71LBmYDZ4CKUXe1JsM1bxDucWyLjJrPVcLsrPs45rweguGuLW7WbRJ6XiqP7q5At6X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FJGw6YpBK8XD1JXvGL2Gtca1oGHKCj5AJWvpMy3vKCjQocviMpohoumqhpRubmxqXbxYv6v3DShKtsUKxmvdD7N",
  "key1": "5y1prttwKhfWp8cdEjFVySFeahGN3Nu1RZ2Hcbryx3ieyNEU8KCQfwBEjr8nuxoZX6NAzNhWgQ1aVbe1rhRNBVeQ",
  "key2": "2s1L52NZ3Frutn4Q1kmw4s2TZGc2zPtSrgFmGTTtNMeHsi2tZP8KY14B4c2yxmLqmiiTw1i1pC2DgAa5XsgHTkJ4",
  "key3": "yNynf3ADpaZ55Ny9Mxcovw2FDgVYqHdrKdEdWMgokN4ugR1pPJBvpFZfoutukCoX6Uq4JAkGELrY9ZvVXq7CzAu",
  "key4": "2b22mH29TbV7AUKAFDXfNFB36N4cmdVP6D1LwJjBZgbcKhnPzWosFfmGfBacDZZNthM9DUsow7rtyDmtcug8wyiG",
  "key5": "2gtg1tdUR2M6dfteWy98GhSnqYKht2r6bYRtib2TLoDPoabbNCu7MbK8KL9RZ4n4BGPKGVnCMztTuuKWtNhSyYv6",
  "key6": "5xU6TgcjfL3BB84Kc2GihuYcVZJypwknCvKRMKR2eweHiv9fiB95tFzTeTF8zxVq7ZmDoxCe3Pci56Vj5afRWn9h",
  "key7": "3y3JzHXqH71F9ap5uUkWkaGVfHF1kthEiHXeUHSSqAVU1f33bxyvrzbqodnGvVYdnezdnx6QHW1P7n5wEUqbpC2E",
  "key8": "4G1X9VVQJ7uUVtaPX9ymZmhxcaDg15aU4mAzqrFHfuvhNzZhAy4M5py6ksYcMJib1emGtSdeJs1PWqsA2r2ui82j",
  "key9": "wr3pS8KmdZ2trcBi6iN3Gbg82uABcnpaEd8XQ1VdKeUwE4UP5iw5wrnjpbRgNx46i94CfDB2nTkMC6vcwKfTTsY",
  "key10": "4r9vimPty5bXWHnNTfpWUkZ6wvoGpfpgUsJvPE3aZyXZRGeZUBMYyv3xViEanmsDHhbEJMJpHB8wHxxhf9RmuusV",
  "key11": "3be1HQ29tN2jDpCxVAZGSCGvrLd12wD4LN2asCnedohWkcjDPriwhNLa3xeFZ8pyRyR82bFPGpsoSNUJTpLUejeg",
  "key12": "rjAwVhdstEYiEd6BEUjuNquGgLUqXRvTXzsp9KRVMGjzgZaKCtSiCMbUReQiKB2DrseWn1ztUuxMvCynmKihtwv",
  "key13": "MeM4DHE2SfbvTxz8MoAJwxC7NJv1ZYTJHPTEikQTAZq7VnSizRLG8pEDhi15xJv5ZC53TVBNrwitzMq19gwDnGm",
  "key14": "2zzAn44GQFBQVj1SNZWm74AXywgDVyEJh79AeWZWyrAdWoTtHkVtHVwqd5EPz9dKhmNjWCch1s83D9p8eCyVn1Ny",
  "key15": "DSJ7myzQynwpLJ8ESAz7EV3YuNeJXBQdhU2E1vN8TRxU797Ti2ihLnpGoVgfbBQPVN6Teurb1W1wtUdFgPJxhJA",
  "key16": "8Rnr8wS7kzaR2VSPRjTB7vBCDy8aPdcQgrbS6MSRfaCKWqqkLNF2Ut2ikbespigfK68GDHuMHQoUsWAk4aiXSx1",
  "key17": "3ifEsWk7vrYdFrzjmwUNKFbnQyzfRnnoUfV2ubQuZpQzR7Ma5HPEUAmiRz5avBgenLEYfqRSTuqGhLx8PUkFtBbp",
  "key18": "2TDjLP9GphAbi38QZrrzPBC1BQvFe9e1g5c7WHycSWbMnSKoMKtMrjMddEAQz4kfzp1nC31jQS8ycYL5M7reFF4J",
  "key19": "3oFBusQXktpx4YmEFdT3NE93LCbtpjWuifmfFTmwyFkKXN2AAugEKMh9XLsynudxbMWpyZDB4E7hYvHrDkuE3J4x",
  "key20": "2yugf25pymvFuw7w5dLuYAgcBt2mJ8hMv6oY2f4Fe1vxpZnEwgU72NhTGUwaGDSDaeFj3bayTuXEyE6MsoLpcEfD",
  "key21": "4ta4fSAR1VZRCJZ2q3NDmSipqJAaLPYmWL9DhUqnC5ABRt2hKdvzwAQNdzxua64ideWsPAx7oAvPC3MW44cGUnVr",
  "key22": "4H2obuWLYftk8eJZHATqA19VN3GScNEJvss6xt2Sx83RL4FZ1wCaA2cYa6R1ygWDDrEAZzhJcTqDacnTJ6d7Vtb8",
  "key23": "7cZn5ytSRo7UzNsRETszPduBrGd7D5TzkREb4cfqjUporBnP3jE13AJ5N5R33gkgkHvaswz4yYfpNLEetCtGMFF",
  "key24": "AN8wVGYwvsZY52SZZrCsmpzjoQ81NBNjp31pP5VfMMhxqS3yCpj86EP364MnizXTc3uTsnMndrcpVsFtfe6qvJ4",
  "key25": "4UcSmMAowNsa5uP1oG5rqay42JRcS3kmDvYsD88sg4XeFmJK3MKV9knG7ba2URFe1yiz2hpk8hVX1nU2AMTo4Aq5",
  "key26": "4fYgSRw9WZiN7grZ3WkcCmJnHLfFqGvF6ubiJFEqfj5D9Ak6cq8gKRd5ubSo5XkkSrDLcvHvmuUUWRDTTaHjSz6H",
  "key27": "5722gSwhCsSqfwmg7XjQwEGNW4x5w6qqiTvcaqBjxrkKohwFbJGn2Y8epqkhxfUK481WKwNdKscjP2RQjJnbp2GM",
  "key28": "5ihseaxVdrRo6x8qwLzY5RdMmgkwbZvr43476rcUmLr3B5x1QY8nDrxfjtRyAV5VHm9RV8Wv7GEsT53UEn2HfdtZ",
  "key29": "5Dd6fK43hGCqQtYg6mKBQbFTrvY1ghQHGA6F75bompj8TqgNTZuvW2mPs4TWgmQ565EDJ6fF17RXDRygzVCHB1Xw",
  "key30": "53i4SiY5itVG648k2NDzuDfQ2VDgjHoTjnPGr7KqF18d57fzTLPrEEMnoq2zL8C5gY45fjjELhhd8j6vYpPSDe7k",
  "key31": "32kFF2Gp8PhHwNzWAP6Nx3mjYinSNZTuixqACwNMeZgoin3BDFDfaXcTHzo5ATrRtx5Tvi4rrWL65Cj3vUCah8it",
  "key32": "3MFw8bS93He9QQinR6PSf16X9b4MuZpGK3APHDaQUyvCNJp1tk6ruqLVCJwX4r79N9aqqmBEeoTou19LgYse8xW2",
  "key33": "qAHVykSByhYGFvnxwedHZktseRwvPmVAi22MMMQSkycKgEbNd7kmRzoR3NcXhCXQXhEgQoJkaW1khK5vPCUDigk",
  "key34": "2mJBbg5h7jJZzhKoR1Mt97AWDPYvd9e1X7A7L6MxX6HzfWUcPYvR4iQb9YSUqA77PNhZKpuybTVxNBa2avG3BotF",
  "key35": "3H3HgFap1qz26PdDvc6ckB62acp1wL98xsF3J4ndJAJbX4fYuUnm2WJjcwVmyUf6LLkSb3NP3PJ1yXWXchakUw6C",
  "key36": "42cqrRupUnT87qaMCUbwpSFeiCnsaWJZpk4y3gT3dVcxjnpSjnnKuFaqp8YVZiZMdBDChEgDWeWJ3LX7H9e7EPo",
  "key37": "37hu4wu6D8UPMuXY2dpNFFuUvN7xpEYtKpUGQbheNHkFtjyPLhYmn7HGz1Jmw1aedoz5WL3ZqqTNUydiNGLEnHFL",
  "key38": "2zGxh3CETXeefXuBXyXfS7fUYFffhys6XFSqC3wR4X1SFcU7YsTn8YWYL8eHEs9R3u7qwm9aTu18wCAgSDEeobMV",
  "key39": "4PSCfYsQEHcDdk3wM83k2CrxZQh19K56QCRB8dGXYSTjga52PiDbxYtQgeifY6ifTUYBApjfwCczgVAXYnriTfFr",
  "key40": "5qrxdJMkzbwZatifdswqGvr25vuZMFoC4pgQwaVXBnn7xfQfAZHjm41WexMmKckqFZEaByFCRavaYHw48GxyT8ff",
  "key41": "4sUao41EtiVwQ8YXgUFnpkL6tVGRM2ZmUe3BCAwxJKSzaBTRxpcnqiZhjTegpXyif8yWcWLsdjEmL7m8CJHXs5Jg",
  "key42": "351b97ZgFGGfivyua7GnD1JVpva8rA6BiLfShcWDu6SedC89aiJkNWpvGSNf4trar1GtiNFJRHq9nvKXQzGMhrsP"
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
