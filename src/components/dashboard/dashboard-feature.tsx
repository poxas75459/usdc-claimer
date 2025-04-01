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
    "44DuAqevin7WWzJMtLTqj1pqPDjVMjLPNCASUstbjhsjT5KJgAzxW9qdSeYau8DWA4F8fB6FE33J5LXSYeuDFTvs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ecHdnehZLpU92ARV3MHPekz4KeaLYrPXo8gMWJ18yTtsRDMnEn8NPWEt3PpgxdTogpQFhUkHJjYGy3VUUB9N9xn",
  "key1": "4Fnrvq5zLTGgXZ4vajUXrDu4VeSAcHSadFx7MwiCjGbbFKMbKJkhQkY5Jhe4AvNGyu859biJ4689mxy73LP9PFNF",
  "key2": "8R5N2yTByxNyWi1CYRbZSWsREStVUMAL27L3bbTJCjv6UKRR3Rck3ckZkMkUA7zfiuPhpCWcj64fmQUZo5pVHaZ",
  "key3": "5cGb4tmVY59ahL5miS7QXbDyfkeWfXnnuEqXuBPYckvB6TmwFTpYe9TVodEP8ZSqKxQwiE3M8TKZyegLDxMzFTcE",
  "key4": "2dPt5ekUo2ha6tBYqLrQXMFQ2cnX8EUR8XQDCmf2qC65KtKChdYJx9CmcF3wYiRRqrcUUV4DR7hRMAAhQfgaTG5v",
  "key5": "2Zo5TEphTFneMJZnTSFy3rA3CCR4KN5ZjoCLaLLRz6XffmdiDxb1aatpuFoqBq82kGiQuDoCS2mxTgGBi6dg69oZ",
  "key6": "5Zr1My39XMbk37Nb2SzuvykXUwdWBPwwgFcG4dcGRoPfBtGyUu3LUComccfqsY62UVQ57Ey5bhDCvoGbLDd2URhA",
  "key7": "5ZRJrSHJRJJ1u2dXJPGa8CjWZBbVEtLiZxsBERkf9FJEfeCWyRxpZchbHPLa6RxdcqNazPJufGvF1E3mXrq2Nck3",
  "key8": "4nW8srreQvY1Mssj77DxLHEqUFsqJFkgjWGrCp998du1G3G6DtYCiJrACKAfk6Y5AhX6F4fL4qV3uXndWbPegU65",
  "key9": "5XhTJKgZwNapEPFMK4p2FZqk1hnhECdsLtEuXQ3qt2iiG76wRWakez5juYrqvwsaDeYftun1F44skQ2EoE3E1sUb",
  "key10": "5GyPNwaqe9JW4jwjZtBMRYjvPA9sUQ44m3p92jXcx6geYBap9dFeSn6QoAjxNMKTy1n8Me4USoAPs5FyQh2PLVLz",
  "key11": "2twUArmj7yc9Fyc22919CGrsRsPEyBt5ekQeJcR5HNuohgxqx6zds83CV8q3skX1jyJi94KxHhdUjLtbvrsNL1bg",
  "key12": "2m6riCuKsL43oAB9ZY1WhX6EUockj9epptxFw4LPh9xHHSVjiMhowtxS2b3ZpvLsEQ1NzBEyrzhsSQvrtNR3PCh1",
  "key13": "65YPFz1ztR8BLMMKZfgmNPWu7eQaQyV8GgqLJQ89GTtLnkidRWdtHhqPNeqC3dB1Q1GLFbygsWh6SmfF9VjznxFr",
  "key14": "3k8SoLzNSbzqmEtjyGSD71aPHQzpUpM76SdpzcGkB4bGr1nSWEjyARR5VFztZUDf1MiWTaeGVTeSTkRe2wQWhVBs",
  "key15": "4mQrsBXrtoHAPaSN15yUaypB9yXDD22Vv4gqY8rkBtxdkdhEVwXsxawmQ869bdrFfqowKNiaYSnM1fR18MidneF6",
  "key16": "4wasPFtnJEKwZzgULjASYZiZiY19dhFQaRRhZDAxLXydsbXH3r4w2YELDJQFiBxkXu6RWfnApC6LSKJdpNDkspni",
  "key17": "3Tyb69FkawVQejXosHaguxpFMKCAjBwEnEtTuuim9JzC8eE54PRvJRtYhBW4vYQeAqMqspvGL9wTfC3ai48romDd",
  "key18": "3a4y93sJ8Z6nw3wiTVb55dEgYKXkNiKB9h3yzzJcWqHwupCNWX4fioAANaAPHzhuvgbEf3bwQEaP822nRP9YxCSm",
  "key19": "2dBaRwhvBYKaJCs6PCfpfMddw4kwR9auU4BzSFLWUwRRV3ZgNmfbmdQvvoeZVV5HV4oK4WpYh9r5qAkzpHajTium",
  "key20": "3XT9gzbvCwEAwNkNTFiVC3z13amztfZpQTyFFuP6nRpBaasBMT51hRuujapDDC71yTaJwBwFf7Arwktv1gXjepNh",
  "key21": "rF8RQWgmmzAVTNgYAFNw37ibppyGSTPVpLDbnjGKpaNaGoByA5W7ofE6961JZJXMtLQ9U1HWxzosYcsZ43RDHtL",
  "key22": "4ttZ2QuahXQxP8BNPdyN7KLuTbPXHNcgWCKXBsu5apae3pXogffoqj9Xxq3gGK6YqcpLTNivGZMVS2hnpicEb1S3",
  "key23": "4syELNDmZPePsVhUM1KZAYmNWpnA15ChBWLDnkrVuHbXM4SwTZEAxZtaNCQmQaUiCKhAttkcap4syTotgzSv1jaF",
  "key24": "4UJ4ndp9D1LZQBk42i75rCdnPzfwR4Dq1yM8vxrcmft49EKyveWKA1up9dkF5kAS9xDNSZhTAsLUdAqGn3VTGdwW",
  "key25": "4s5AhcsvnUGXmYaUZPFffy8pc1B8KrgFeyJ3fTbxkZzeYoPCr3vAqkJBP4DDG7yRXMZkAmFpWmSjZkuZbQUVsKbT",
  "key26": "VgEwB1G35s8RavmkzWgSHSJyHWCZ2TfMQAid3aJ6j9VZL2umtGRFRiUfFD6x4L85cCHfPN85YQSWU13J1YLQ7sq",
  "key27": "57EGcpvFckVu9k9zLw6Go6tyBTPexyPt5YjbZQvTsDLjodfL8WM4Qbu38QLGBLc4SywoU7aDw4xxY4Eu2pYEb6AP",
  "key28": "4EffEsxBQSfLK8MrvtCTvQXmH7zTpL4P3RyihXoTQ9rxWGvGdDXGYFKMp5eJ58trjMY57wESMU84tQwqbwyeyr61",
  "key29": "4vXtgkvTJfEhG7Ym7aLUbw2Ft3Vg6PmPSESboWWo65nUR1yBpbSMuwofCmCUL3pMK34foUaPH6KwKDrxwdyqydxg",
  "key30": "2stWxrqX4S6dT6riE9JHqw2PmGRnQPu53YTFRj44YyHGqw16Upkv4XgVK4Dbs8HpPQFrvCLRzd1iSeAjTjHp3LqG",
  "key31": "4QzkU58nuz5RAy4sY83fm8gvEkNaKYuH5TGcZo5SqBQWVDh2CZR292Z8demxon1Jt4po2g4zL9jzJCQ64t22cjYz",
  "key32": "NyEGSNKVaPVFGrQVoE3gTsKMmU3jQtxfcQcMo25aTxFiNZ2Uw9bosseRWtZcAa5PnVrW7cN3o5wD75zbpxSgyS8",
  "key33": "3w168QGzmpA2bPg63QH64ALECpoMjrDMvWMz5kqiNBixrWR5LGP88kWUa89u8CQMjRjrkjXihiK1hDo1FSvGvony",
  "key34": "3CBoRYJiEFWhJ2bRrxtgoRdTcDubiGQRr2TWM13bxNwyXTbXLfp6BNnwmgWhacNMJ6kSsajGkZQacKMgPajcYfMc",
  "key35": "2oWksgpg6uu4hwkZdQSRrEb26YcAa2SyXcCfU6kRn4QHhPDKFaCC1b8GNUKrauJ3QZEfwKmFoNxGkcAA8Sexrw6i",
  "key36": "2T1D7mGNbV6cSnRDyo8W2JMqisw67Xp1sQd9mASyMs8E3VQdeK4xYrY1zNrJAuXAtULwbguPSKhgGjsMeqiCVvds",
  "key37": "61c7F96PKiQdcsuYEsfHShFzZoXyye1i9XvKRWU7WDWnzbtA5adeT8e3Q4fxnPHkeEnLJCTUtZrmXB65BSWp4bY2",
  "key38": "3w1rZwSmLCCrivnWeAKYux5f2fCQL8aFdPN8mEhA1bSuDEQp1wQ8HQqY6NL5qAmbS5FiKisdKDYEoPeYPKdpvoNG",
  "key39": "2s8aWfWCdCYddNDtKZo5JD9hd9jH16A9yL2VfamZ6XBd8gFgmaESC8bCYKrtFQ6k6UEgW8qN9feLYTizG5a7jykz",
  "key40": "5oK6JFGT2kr57aYu4iA1qzrkfWZ6w6wKFpVR1rH5ikG6JVsqkK6EghVUigz4C5Z1aatxDKAyoN1xwvKTDoA2TpUs",
  "key41": "5UcF9Dmgvz3wYxXegUmR1Y9sdaZLjTts2KNSeidDEjAFE8cmtBoBgM6hJdBPPkzQosCqz18fsjYt1DCebtfyqXmw",
  "key42": "kGNhiWU1gCicrnNfszdcZpZmcbiq7zyjRoURHCxgVLwvY6e5rnSmyNVg7oMq3poe2Yu8TaTgdhXGrxieUXPqHzs",
  "key43": "4YpooQyzGmK7PHKfVnMAx5igpmeLTEReFz39AruY5CNduqcNr7QMeJzEQJ68QtnBGnE56yywMrkKU3h7ZCcFSdti",
  "key44": "5tPxAs6HUbkw71sC3ikyY2U7zmDEHM1n3fjj7rcq5k1GegeK1cfBJKP2akrEmaA876CBBZycgcsy7LbUAZw6sVY2"
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
