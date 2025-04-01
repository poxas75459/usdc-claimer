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
    "2GLcDNTiSZruVrJ6rUQmvajXqFrWNEuZhuHJu6goZZGcYGbTWYb3DeZere255adY9U3bkT2BfNnwGEzjYQaHM6WV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LeYjFTpQAXVpHwFtyrEXtijPyuT2zk9W9dnuPBrYfcDxH3UwWPwnzAdgwf4uZsdwaEjXEfpNvKwiNdwQRKRYXus",
  "key1": "2cfFx9r4YGj2Yiybqu3NwNu4V83PyXBRg5G7tr53omAktJEAbVckUXtiHWW6Pxxutqhxi2dvdXafHw1avNgHTFga",
  "key2": "3dAMgn5TjREWhzKv8t78jnuQoPQhCBTiBHabG2RjFob3dEj16MTUs1X1YVotEfveicpvDfxZ9ELmA6AJ3DwLrTho",
  "key3": "4SVGd1XKeySzEuopW3buDy5cgNewNpUBtsfNSDcvk2i1b5tuhYJABTsMhxD4SwHFkCsKv9fTu8PVip9qqJNH6KAw",
  "key4": "2qekKDksu9oAyQL9DBf1k7ai2b33BAo8XZRhihaxKLSv14WZDBv2Wb7L8QUMPputeUWxWtLnByB2ayFMWNVVeVKS",
  "key5": "CYRnsknrwgvnZW36bRgFZ18E3nuRBLUsdK7cEkEFLAkxpMWeAbvRus8PYqdGTvGv81ESuHRv9DySqofF5n4C4gx",
  "key6": "4PkQVGfWmR1axQ1roeP93LsiFZFrNV3Mx7EaWgkuNqwiY4ngsFuBVg22VgMhYXBu4dJJyHu5JWyfxwpG9ebqoPTW",
  "key7": "65thtBuKG4ZywJPwixcriCYr1y28u1MWgaBSZ83XrWp3BfXJhcgeNavypJAbFy5hspNQc4Vv4p4P2aMyXAePxpR2",
  "key8": "3VZawjxEhXMwt4ZPUjfmwzZSNRS3J1MdqFKwSU5KBDYPG1khPGXbBYEQE5gpucdShq5huiPoMcQyoqpNnScTBrsf",
  "key9": "4vFzHAESNxMZm8YzzFyQ66xxacdJ15T9zU9S8Hi2XGXVgdqRuxtgpxPNXJoeCcxWPF76Ndfs6X2wTDCwEmrrTePY",
  "key10": "GpFJFU1wAUT4vyeSXLBKPH3Tp2BSXzqTF17noeqw6uPXKhdrzYdqdjug2kJvLygKfRvbr1ydCvwtBwyRpEUQqtY",
  "key11": "3mxNYepAzV3tg2qwtw8RfVX6VYzGQTJAXzdrPvbUaRn9WVZR5YA1RC2qm9FUHVY7gntrg7xBMgr24uBzrezir1jL",
  "key12": "48parxpAuHPxzkJS5BkHySL9DwrhsQdidL4HitVtcb32vxVcT86g7f2f5EeWKw2Up9mhLxZjizEJuYyLheotYUab",
  "key13": "ntqbJqC2EGQuxyc9z1NyJXTHAntnz29G8czRDJUNAyxXLDzi5r3q7ZqkAcCHaKrHMn26aKEjGYN5zpPw3xs1Xvg",
  "key14": "2sXpztpSwPgBVZ1dX3dDgqaaj2kwFeQW59BsRyhX3LEYJ1sjtNnFy6nKVRUjnqsZtpbf61TQL3pycXJVtaYhp86M",
  "key15": "5wtaxQa6DxWf3SyH1SDuy3G8HgwNC7cDBSnPXoomsMuWZDgfxrHF38jwrNPXbFShg4bmbagXT5K4WdC2uaRoS4vc",
  "key16": "3zcKkmRmA7JUKp73q2BKC9m3hECB6pD78h9YmTxPSQHkxLq4pyQpGCH59mxjonX8BBsUVqA7Q6zUhMeZRqpe7KGz",
  "key17": "22Vo5unF3qVeFHBZBUmSih3vit97vbED573SeXKGxENLjHq3NuVk1xSXhkWhKJN1nfkn5rntLFn5uLa5KyVKWYKb",
  "key18": "2rUDXfgTUKx4EP4UxSpYhHuTCP6ztU6TiUCZtxPxkX1pGiat7nFHo5Utm84AdJaxWpkbBhL1nYENKLZ4R3KYttBn",
  "key19": "DWZ4wrcMzT5zBDsgof359LHagNgaqhB5P9i9ztBo6ZVMHqGpDAXMPVeGKbbeRtTGvtqV6NS1JioWiMhhfBxVuaE",
  "key20": "34XSfYy4jrQvSgYNzPDxsVN7uCT5fVBj4xiPL2MCLL8ghrLKdxUi5oyqpzHajhtwQ6b4pcuMYgo3XXWQAWYkq2me",
  "key21": "5Ace5M7969qHLMkgmRY3mWDc3Piu4fGWxU6wLBPD3XFB5cokguAbzd6pVCq8PNnpzFB6N6f2QotN8CxHsACjhxFc",
  "key22": "5xHKvq13F22Myx7XSEcmuXPSe9oVXNsa2sgzTbxmTNVwteAXoPJCV5krfxhgtbhHXNqke3sRLR8r3KqkvDxdrmwh",
  "key23": "28tP6PwoWXDy7FaKAaGZD1STWV3i86cnH8GTNQa3qt6o53uY4RHM6BcEsYvLZD2726TSqeBrQc3aszAamJbreB1d",
  "key24": "4DpwEwWpAhiWrPe4HmgqGJ4N6JHJMUD9HqDyxauPWbJXCw4aUbfEmyFSKrQqDQAppenydXNJ6zC9LwNNFcRSXWKb",
  "key25": "zfh8KVV7Y45898SG8pjBeYaf6Tj8cMcWuauDDGdbo81jNo3pVxyNgjjvUPqVNmrsVbCJvN3Ybqfw3KmodaqG7jk",
  "key26": "4uxzvBpXrH9GNxJTzjA1oC3tdcjGZzntVqzH8PkhyjHKREBn3STD3XhqxdVA5QVzCuvS14RySSf8e3wLBCyiP74H",
  "key27": "2yJN251rsaY6BLPZ8Ut3sxNJ2wwyKXY5AZb6wVVjJoAr9XxByNrhBNLr6TKkaX3nwtA7HQKzs5rMUNVXLRdYKAEo",
  "key28": "39R5EAbaa6Np918kGy9aQwjE8R9asA1GGKHwr7QB4HpHeEo6kkUXX7U4d3T1nVNkzXAfdT361mYa1JWixfaRvHVo",
  "key29": "5PBFpmcEeezrgqysthR3ZTvem7hG1FV1uoJk9NGRPF81mE7g8zwNrPD6SPQXXmuzwrLAg9J7hZypu7S4fMRt23en",
  "key30": "5zaxTTQsA5ykxBQsCQ5LTKsU5ork4Z9s7g8b9uCB3KM8E4ZbKLD2h7P4b2GduHcJx6EGMycRz6zg2Pe3EYQVHt7N",
  "key31": "EFWeFEjWm45NWMG7YahJfJTnxkpn2BYUt5f5DhuNHawrUx5soX4A7BCpPAJXDMEFXXT5toAfGNxQzBNEDVr7d5x",
  "key32": "N7o2DP1p9M3gEz3QPGzB5HLGy5sxqXs77Fy9PYANNpAJup2DWrLgn3GLJYUQgqyniYkL4G3ZzgFNhxH9yHsxgVi",
  "key33": "2zWBHYDw4pAJTddRNzc9JyCYjV3pwCxUEgjN7Knygcc2pqGMd4d4So6Uf74EJHxn2ShjUSVc391YMMehY3um1J1W",
  "key34": "3B3FqXmSvJZFXJqinK5paUZPw2QnKv7FqCmiuGdqdia9eN1NJsYnFzAXoR9F3yWRp8dCo4LzqJ18t5EV4UKdku1a",
  "key35": "2SzmvtQqHqoza8t8A8Z8TZmjNPuhAS5SCym3W1WCDg56p5G9jPKbeqX24i3Nzk17zNfXVv6Z3phsuCvFSckvUm6u"
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
