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
    "swBPe3S61bfXntmfYxtqaYAk8zp1eCNhdZ8Pk7GfgHQFxbxKNPzpfjh2Hz4t49qKKt1CSbTELaCXxyhB6W4d5jD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53JTnDZduuPC3YNUP5hrkkoJPdpGNmJ45yNDjNzZ3J3NyDDGaQfV32ST86roBtzDCCTiPadTSyW7sAeuPTQ3XZwi",
  "key1": "PrRgyfbcg21p9AjYdad8jbX7T3k54hA5QdRBaswmcScMoqeu5gprZEF5rZ3pwEzKGkahEx9vLrmcDwUnBzsHgpz",
  "key2": "Gy1pMf5QvVXZosTnZm14xQ9cRc4RMXSjRQcGBibyjD2XK3dDcZwFE3tAVbZ61gFksi64cSE2CNCNokpUjAjbyQx",
  "key3": "4UKT9tLdBHoMhhYt29W77P6EN6bQGkHjoFsbza8pLFviLB11QeEMaNqsjjdCfSo8V6dzzKX9WWohBZH2b6j7qy94",
  "key4": "hyrDzbC9E9Xx3bY7jmKWXAd4KjVCPJVzGkiA5cfGp5XbipVnKVL6EraU1DZv5sV52AVXi3Hu44T1Y5x5NdmzdrT",
  "key5": "5s4srsNmcdc2ksK386L95wbQhpRF9G5xvuQw8FNtRGmtWPTkHoBXGqamPSnT9JxSMAKff4n2f3fcc2WKbbDdDeMh",
  "key6": "3m2t2ZHBfBudTfdwpJQkuhweSTmGZRzrq339wNzWg4SHBCo3Her7TTfvtyeduba9w9TDCx1A6v3nhMTVrfNGcfQS",
  "key7": "3p7fjqV2iN7Xixo6RhJkqfWUoYFjmZ3KNh6jYuxdnsnYwhjVHbJ426YQ1S9fPQKei41fK4zvKyiXLm5cimENDwxz",
  "key8": "pGAVdyQjeQBMYXB8XYsvqh1nYSiWEQwUcH1QuvfWCevAUdei7fDzFjkQnoPaVYm7LTq4tnRezgSTZigN15mmd4W",
  "key9": "5oXMe7umeV5idZGTB9hefPH3v3zfL5cFdHCWJum1xAAULgpPZijHN8P9YhJ6Yw7GwDEXY1bXjftr5H6MMEacnsev",
  "key10": "5Vr5KzLf9JokxhF6NFHyWhpiZAAwXiMzrrdVfaNbUJQe2xkMhMNHxDL3qWKK7w2gR5mxnSvSxTCoJSuDWSj56C1F",
  "key11": "5ZkoAXFDdsFnSuoBmpPxSAmL2tQB4QfHkKb9wa4HxyK5moDvPfZEEHri9pN4WH84F2cc4uXRaYBeGzxEfeuAfjxu",
  "key12": "3QsMFcu8iv3xRfeEvnc4TbDMriTBChpYTTyzbhkDCzE6qZzzSWhhZYijFZkPdUcG1iMBrJ3f5fqNYSis1TzW1nhS",
  "key13": "2Mrtx5iCFsB6Rs7EVB1SrzegLsyrqDQ2HhpsCKiDzHUgPEjzeK4PuVPas61yBqYJTgZx7he1gjkaqaGLVKYvHMP3",
  "key14": "3YbExTtBb6RiY8Fq8K8NXgJyoPE7HBT9QsiMxMT2JBm25LnSeJCDNZ45eDWefNa92ySQbnQfZ51itpbriEdJfHCE",
  "key15": "36BThh2uWzeGskUYVxhkk5GRShtULndKNQHwYygwSbj3SEXopZVYgFWffpfgNnBZEvPvSnfgpEKW7if3bECQ6WFv",
  "key16": "4r5VGJLAKziiERynNEEGeuSHLqtf6DNoUVeMjztwke8tyGQhYifJXhDRvDT4YVeBXU4FBLQxszSki5rYeKq2SWkU",
  "key17": "2equ6Q9BV1W1eVjCzR2JJL7he7BKRXmrNUzJKy3EJJLuEyXnrAGKJNqhfJLzF2iyDZEEV8suRMnp1MYDkFieWTcz",
  "key18": "3BDaC13xpCqkdnyWZ1MePKkQhtXdDXTzoC7j9AjopLPfsoQ4uQnHyeSsY6LzmKHNkEtFbwwvEcdY7aqgTVhs77pz",
  "key19": "NNRarvUcbGyofkoEYkvbEDKF82NHUjFW9tCbEHkxXpLvynvGeG6y8jqwaHVwRpg5gM4PS2P2ASHQqL8HGWgT8vT",
  "key20": "61rKC3DeYFhgH6pijk4c9nxwmq532GNen7a8vC2ACxvLKEFqnb5NdqZcN355M7ta3MKdJJMLzEstK7GPw4tdh3io",
  "key21": "2JCJT7C1eRT8MUyxfB5ay1CzbPLoGEjzZmpaXwwqWNxSwiXN24ZPL2FrqX1Tzg2uts1XW9mk52v9TKJZeAwtxtat",
  "key22": "34zKQixR3YBjg4i9uyjKffZHt93FkPLPk7ksxLkbnSNqsC3A2i7FDvPtTUGytjrBvZma21D94LQRdyMJPdwFfZEo",
  "key23": "2R7fVPaRE5s8vCcQ1ry2uN9tvYA2TCns1TxmT3jGwwnvtLHrB6BPJfFzRFTbe26wwMdUssVcbSQiA7D4PZ58zgT6",
  "key24": "ThPBpSZ7xFKarsPiLreafBLrNXQsr9gUdUSpTEW6BPcTkkqu3VzN6VNkn3NF5T5bGUgg5PnW9fbJNtLahsnquts",
  "key25": "5AJ8rW2PUDrsVRfPpAjYC85FuFMZgQN3xAyHrES5p8CX5ze8La8XnNPTNRqb1uGWzssJW54X4mvLMfQL2N1KY5qD",
  "key26": "63vzqY3ydRbMTT68cEAkE5SkYqE7nRekEPRfBR29EtgwH5Phza8DHww6XT3V3fHSrZX3qVTbVQwPxCnCKvoWGuxE",
  "key27": "2sSR6WbJmr3Jn48fP1kvHNRv7wkztTTEkALCsYRwj5eNtjABuexUuyQwWzgP1EqaXygs4Dq8YkDU2d2v5qMd7MDS",
  "key28": "3QEcG1Q91nEDGPcYDQTcBN8BAL1gALH3KqqvACdfUwxrP5JKSQGedynT2ybxFbxpXHPRaWwoPFWCRqZa3kM61Vkf",
  "key29": "wFRSaNRS7fn8iTjWttWf1MC2RnFSgy51sJCZxQfiaeLpzJYpnodToLwdFQHS2Qsw1wDuW2wScGts5Eksi1vuVEY",
  "key30": "4BiePq3Fo379hrfUe9e4CsfvXsfKBvRcHx3wAqjavKcpeE6XqEgWzWVXbxhmK2ZaHmBkg4RH7w9bKuaUGScmEvzJ",
  "key31": "cX6AVrqZvogPKH6Y8ahSjyWMbmp5Hx65Ei1SDAqx4fryFzD2vnkSpNqgCktd9nFqv5EKBkQBGayKaT4RxtDyQQ3",
  "key32": "46MW84UUYRUuQVHxPdCTuN64Ru9Lzs4THK68Lnwv5abnpbqE3UKLU6YovZqkBCcFgppxhFEoL2KgcYJbB5smwuWN",
  "key33": "3WYgjoj9d59C72WC3WfNn7joqHD8xzEvwXeEMNHKFj1mZnYfeUUVi38WNvRkkF9Ex9CiEuHQz1WDpYFMZptapPgp",
  "key34": "3Wiiivs7PkEr6GSjneYHGuHkZVJGg3JtE1sYKYyGYqVgQYs3qG1hiF4u3hkTqkuaLMTpzoLa5ZYz8Mkrx46Ppf31",
  "key35": "M8iYciiYSUhuzV9YjhN3rAjsrPcLJFGAQYdSnqGEvLp7to8HxJBHck7fkVGxy81iNJAZbhLWvJwLjTmVAA4rWNs",
  "key36": "3q1edfa2Q6RF73P9PVDuiUbiErsEDjgkPXuUDZd4Qk93r11Z2QcvR8udV1KXj88qAtLtRyehfEkgquH5n7rs42Qs",
  "key37": "3weCMQoRaGGk1UrS47UNVsWVi4fS4u6pSNRZLvNFZmBHqYicKvViD8j31rsNj8GiyBYrf1fQNSdCMwaL4iJEpovL",
  "key38": "348kgaJMDpGoq6MpVNLfAXTse1fbPdyrtJ1RpgKYEXgehsLAso1Z6uoPieTxqumH8ymMKbCa2uB7G1gZSFFUYe7X",
  "key39": "2CLh6DFGaxPGLH9CNCmWuy7byz4yQXxXRyGaw3HKtHuhGmptxoWasZ96PAYtwk5qWfSueNDAepTkErTmiVdNRGsp",
  "key40": "5ZyQnSjXL4ySSTq5eadefdazTHpeE6WWPX66Fr5FJUo5ZJgSArHph2EQVyvYvR3Jabk3WaFkLgcXoDguwXzdCmxV",
  "key41": "4SDbKQeqDpiui1JinMsXnHSeoRzqf2dQkJsfBYhwRfc68z4guvbNCjMBkeZvhuP6UqiTXAgp7mKhvfvQLctPfbTA",
  "key42": "5eUmJjWhDEQcYYJ2PtmJQktaE7sCofXXLeVzUE3Du4sKRDoNhRvnL4u3pefvTwoDrGD8uadFsm5mLJSXFn5yLpqq",
  "key43": "bpvptTevrsDPg3874KAjkLm6BTJ3chVduQp8F3exhZTESmWXEGfyhvkCEiqNZGUDtYmWvZsGcneCStvRM32U5gR",
  "key44": "NMBg6cyuJh6f7KhJ5fCMCL2XrQdrm2pp4NfTpbfX2qwygafaNnH795WTsEFnymJ2vAEkYGqfQXuGtuQe26R9Ech",
  "key45": "5uLe9Kq32uUwBRMNeH8rPxSH9XTkFaMwG1MdEqQFm6n73UEzGrvHyrch3mWTuQDxsUgnnG8o9dGQ6WV98g2Lc92N"
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
