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
    "5zgtagin4NXfJvxCwV6fdqXh1vJzNBQpfbhG9kZhRHmSRpRVtTQPyCUgG4U9SyHGzYGwCYVPbAr4kHsgpUbWxbeK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32zJshQkWmjh4MNy5av7Zb6HxNUU7RBQfFPfLvk8anfG7QtDmkiJML1gF98eRvTn1tZsKVAWj5EEFSDaN2Zcqdt",
  "key1": "5JqsX99E4cnVXh778XHAoZGpCZw73ELUCG9ELLA6w2Bi4JFPeBn1ndmymDLzDRrzMyekaCewNnyqg4yNoZPgW6k9",
  "key2": "3EpiAwsnGG3bdcwaKzz5WeBJTY25cM81eHJ9g8wfNAourooK9LkR3hQUhZrA7Q6tmudjCJPiP7iznqaqrAcHRPs",
  "key3": "msj1wr6ZqEbLCBFGnPTu54NhcATgDsFKZkLuBLDwG5mkjNjuT1oYAMXksdGuvXRT2VR847q7MXP5AJ1x3FYmnTw",
  "key4": "4Eux6KSkuHhDFPaxZP9YFgSmzZN9MakLeBSXzidszCV3v39bzHRLMgSCE7Ck8wHQyS2hGwe94tnddSQgqagdBXMG",
  "key5": "46yVGaGKHLVaGysYVEvzAdhT7GDZiWntoXdSv7fvuzRz8wQHeQFXSduJ6Kec7LXCazh584m9DBdVkGyoxh9pTqE5",
  "key6": "2ows2BGmK9LNAiAAGMeRJSYN4Ew2hdkfmmkpMTGAz7AhGmuqzTAA3vfCJ6K3ts4nPgsx3Rbqsz8s5QvrZgbiL4M2",
  "key7": "4dxr2czc5Rh5FusdVL41jFP3SifPmvxEhaFD1iN23zx2H3rLLuqWooyUGhcwKmjXi5bmEPqaczoQkeUpJYEDoroa",
  "key8": "4G95npL7Q4EcawkwhXCTnAS1cUuChk2A5Jx7b9N1NHnXpPWRx749yWPNBAPwZW1tLZZdbP7xA5EfLnb66M4n82pf",
  "key9": "2kRdkmLq4YLWotUaULtRPtbz1ufMfHaYJRZc1yGRLDE8D5NaV5MBH9jg8Bur4SGSoZeKuCrwWdFqwcExTG1jB1t9",
  "key10": "431JzXCF3tsJwRHnynHBtqBiWRdyFAzRSzRGUQPNfSZXFGoQC9kgj3m1hXZrwAESck5QJWotf4QnB1x3jdMJ1Nns",
  "key11": "AhvPUzyXmKXmFuer3VKaQCZcyoMmgwaKGTvyK1MQ9EXc7ptPSXmBSUaCPtoE2aGT7wx58i9ZQ2XTzdgmqRnQN4x",
  "key12": "5EetgYqLphLk9ksCZQ2PVteCnrdBN5wnPFAh1bfT6cuLYBM65qkkHKiRZiiHqcTVyBgA7NAva8oFu4jQozjTSfuV",
  "key13": "4DHmjVsaZ9LZU1v1ytSTGX3KPCzGJyr971mmDrPUV2XYwvku4a7e2qcepFeBhpbx6wxCowq8gNn4WYZdi3wuWqsT",
  "key14": "2XyW2NnRr3mLL2kVmn1ysLqCgXWMTQZ6LAvA7ymAeaA9B9sjWSetCQncjcgMw1vdE2gJb2a7xDxBhDuMEfx4oDHu",
  "key15": "27zs3W3g8v7yGfQEwCujW8gbyt3kMef5J43rMTK5cY8Z1LSnBJhPbBwY6zegy34Jak5yu6ATt4UYcVUgtKyMUWSB",
  "key16": "KYhBycz7oAfzi8jKrJWxLqchd44LqddF2fBZv3oS2bb8cwttvt5NejjjRnZr1Zh8UnRGw3xCm6gTUmLpVwXtxga",
  "key17": "8GtSrks179Siks34whNiVMKTX2eNm5LQdMsij3ABPeZCP5wgZjktdvTfE8k7MsCfAk8JU9NDXtcBc4pj3oZX4U1",
  "key18": "dZ2f9ULmhBARj5fe8bo3PpV9v2waaNce5MBt746nutGA7eo7DXapKNQRwgMA1MNnRUiJqLMPxhsS5mmt28JEegQ",
  "key19": "3wKX9eQWFkMKq84QwSBnCe6yn3g16mnY8Kwbeft1SW6Emirvz1AJc9jRWfPR1yydGbXpP2pQ1UjLX1bbvxrVmKi9",
  "key20": "2v1a5Y1BhVfhedYtwBes5F2wo7NSa7VRQzAXqr1VnnuW5ibrfSqth5yZ3b1LQLYWFt8dVWGjKDWpQ8qk3k3Fhjzx",
  "key21": "DKaHQFPLQmibf6n4HCArJ8GVbJtk4akPDL5w54hD3P2gfp857Tae9UUMAUb1eAwgjmUD66nM7DbHKM74PKLKrWz",
  "key22": "4pfkbWZvyDsALWwtXeeKV4LzKspF2PGWWWAZK2HtAuihLiDu66hWnnL6oxyiLndq7uedD4FcGUuLzjSbXp2jrhxm",
  "key23": "4fcQsAvyiGqjvT4iDxcznwEC5owiDubxQMgfJn8zNBwsPUAkMo7NoU2vDE7chTdXHYDUSsDwjwj165P1UA6UHNed",
  "key24": "2y7qtGUPQ9JUZw2uLyNcYjSAQFvkFMhFtqWcbduwaaJb6JKoNMPp5TJknsuZEUqzhjyxpJ8LEQU9GfgVUPtVhfgA",
  "key25": "5vWTihV9wVtnxCqv5BgifGhZwcbe3vAsQzpqhds5b7ZwUsSFyfhGXAhHutuayibPVmxgcmauupyBD14zTYEHKjBx",
  "key26": "3XbCjHGP2Z6B5JxsVixStPmwEWHQi7N5zv1pUWdtsvXK3J2L8iVuNfc3ZgkGKB9u5zRJABxpt2smUcgD6g3M9RLb",
  "key27": "4qZx4AjNKPzS5Z1RmJoTGCFsYJWkK3QmmorXEmL5iN9M1EtSJfYpFe8nkHypw3iuSaZbNMPqBT9VdjRy5SVHfKMz",
  "key28": "5vTHArPgwmHvCbkmsssPGGoddrue2p1d2xqDN55kucXJkTRvQrGAJXsqEhW3ZVhwYDBGjZMKubkAUhqWNH7MMDeU",
  "key29": "48pGhfzCpM7xHh9H1JTjvXZEq9Gd5mHx7DBhDEHApucULUyoKc7SWnDj1m6L94cS7UoiaDG8fwyNUB3AtYeQmR4g",
  "key30": "E9wo77Z9c4v96DFbLpzyswsGC6ikvNXRcHEonMg3ieLBGWeJWribGv7GJx2MDMPydS6KPuYbaq3KEURKGq7w9zU",
  "key31": "5GWFbxuhCxbTDdYQtWx7Yz51B8K6d5z8JAFPvZkc7ucof3d8gfQfbi1M95NAz34hqepbZ8LHxPbXoNdCStSLQGEr",
  "key32": "4tn3yTLuqS1cTCUZv9WV2Sjjvrvn2cX6sEjZQZa9w56UNRhEFdTTDA3jTnrTbwdnJRCGqRAk8rcbLGgE43rfVqb1",
  "key33": "2ZPjfe6HD4rCAnP47KUqdK1gm1eqvPT7oYDuXzQQ6BofhJwg5zt9jN8T5kG9cPk1vCSfbX89bJJBnhAdonsiX7c",
  "key34": "5ZaeL5dW6Hd73TziXhZJeXrFBJtX48cQkTMifBr86hDd9Lhiyvx4Rx6PBJnP3DzpFZ7XAyj3fpAcN3KxKwvUx4t9",
  "key35": "esn64GGXfoehMAAZsMLYTATxGw1D9Qn3tYDPBAuPGPP2JVrc3ZFwsTZPxcfjkk1QMG5HPKu9dtgoWWhBM16fW3z",
  "key36": "4rsvLzYWWEDDNH1jjvAgr2jCQaBG4BnFDCmyp7UR43tPB5jejgU8XCZc4xFt377GuDMxvmXwoLMcuPcD2rLT9ZbR",
  "key37": "3Md5mknDYsfLVo9YLuBth6AbBTytLt4B1bBbc6nMo5dE8oVm5dTGsZK3ChgNkwdwcde2NTuSFjEiifH88PhCg8ce",
  "key38": "HWTuShaaGkJkDXQgPVEyTyi6FEn852VvsjsUSNMZV7i3YSzsk97KxacLKqmd4o3rMU4V1g71XLh86GCGf1GsAdk",
  "key39": "4JvtEuhjDBNxouZwbitB1odmmxyQbL9Ne9nRmBFhJEM2vSDGnqj4nwj2e5DQNdC3vAXZQZZiySvwaPbTCbfupiXr",
  "key40": "4fbGT7PQmvgJVqR4GAcRwsewaivrVDLCVoTAs9cioX6hUnhREBPXSCSi55LhLu6gFd4vYiBo8dGHbfbcatnpZs9k",
  "key41": "3JwTeW1UiYntiCdQQmemBhdXnHNBsfF8xFBYG1ZTdeFfazg4BiyG8PjxGCAoX1FkQwQ2vmaNEixg4ZjHCn4NT1R4",
  "key42": "9NSMshh3QeAX6Bm6WXP8EDJuvKnAPK7ScoGrdeq9hbF6yU8qgwWYNCHVAo4Wo6oBXHq7wazeBYEAZvC3Ce8MPBv",
  "key43": "4G2W5inve2gPkyuU9vd3TDxeD69mt9Hfc9sGYN6JJmemzUcXzK6dhRDSwyuusCCCZMbVUWh2iPcq69r46uPun8uK",
  "key44": "5BrTB1hmgMN1F82Wjrivv5y2iwnvh7Qw46JsEjHV3JoM3coWKex3KFWbSH21ZXibJYrZxMabmSBsswuJwYKjKA6B",
  "key45": "3xcNAKnW4dNw6hNeZQYsQ1fFx6jQF3WWjd4F2zqdrbZ8WmWHttxhpJdVhJtnTGmYNvRmR7iZEtgFY8NisLA7K185",
  "key46": "4QVQSoZmXTWpL8726H6stoaTW2pAZ2jzJ6UmqNBxbjYik4ZPwbxrJ7p1PMaKXmsJwSeVUdq5xANk2EDhjjRd3ox4",
  "key47": "2U9TRyg91tUkdEZ3PTVBwm8rowdWJJidaaqXfjoXYehQdHxjb241fRLXLj4wwwUxkhFVMzYHenAUkySR6rPGhjVb",
  "key48": "3rB5kHwbGoR3xsiZjRTrj9755E8RyLCez6BzvTuQeK8VjsqU5EQx1rnMFwfgcRAyV3URZWYFEHkFcjW63yWGM1xv"
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
