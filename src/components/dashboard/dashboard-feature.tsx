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
    "Ya4CFEETxpYAaUhHPqjjiznkSYkCD86PZgJMXoVL2dia4CAhxEgn7vXLy9Zt2kKk2AYbX8yxYarfbyhGpMTVMqG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xc5nyLvAFeya63W88LzW9KGjBfRC8QHHKCmjoCgn95u3yEfGVFn1jAjVvtEA3eS9mCuSsTVGra4cmFfXDszoYVH",
  "key1": "48E3P1vxFvhYT1jeCY8mwbziGmBTaBxhXQwQqT7HRU78j51Mutz31SqrNUFT4HWyhxifT1GTzttyzX5D5tXLCeKE",
  "key2": "5P2DGfgGCKHZcRmVMQVn6o3gRKSnzTWenShPWvgF2G6HpUbTbQfguDvTfcR6BqgrSmRMBgRvMUaBye2zYKVWQ8Jt",
  "key3": "5692YQiycDEypqCTFpR5PFMpJJvFY5n47T6BmvRqgDvNNsA27YvZW9HTbGiF2t21cwKvyfFiQXMXzqdv5nivHSCo",
  "key4": "5Bba9tvmX1q9edAbAQbkpuohqmVs6WdhBxcn8DoGdjs1se12PZN2fp51yAKUfZsudiJEzbvDUkWaFuZWtM799WLY",
  "key5": "3PpnyPZvCfYKxdFrEKbpRcBUZaHzjmsixiySVn4pSoVBb8K5hY4yvX35JsxdqqXZwngv1bJgRxCi9vW7hB9Nuvzc",
  "key6": "4TbAcmV5Ca9t3y8qEYL9x2En7FKhXfWcufq4wihajGJ3SMhtGRh5QMveZQvGyabmjztirCJZeCnv29zak79ms77r",
  "key7": "25g587GPhtV9gdtmHyRECTiUzzjGw1zuyaNZGCE4zJ1SN5e1rMooxyyJ4Dhxod8tGm5BAG7TbFj51ubLChv472Ka",
  "key8": "5u36JG8KnguUZFpxA2jRP1GU237skcZ11mXJFazzEJ8bMLKd6GKgRrnyH7Kip8amg2rxNJ5BsVBAGgNJkrL8XQz9",
  "key9": "27Boo84bLNGDzXtJUDzeRz1gq7oqhvn3EhoRgJSUSSgdiLHGjqN4yxRDsxgaBiHJhqNCRb8KP6o3E31Bt4ZMHxTd",
  "key10": "5eK12qvLHUvT7RbjjvQTVTDD9eFAv4T8MD8xmYuChmPFsP7P33tZcjDrZVFBvd2CRjmrNRaj7v1Lw5Tek9wsXSgc",
  "key11": "3WbmecC6QXciZ722XtUtqTbxRmy3BjD1Tp9YNgVESDYc6cmyZnX8umrNAht86K8qEBRuQ7RE9mv8Vtm5AntxMg9f",
  "key12": "3z2TMc85XtUbxaCiHJhopjYpBzFs5BJ3ZMBj1ao4TM8a8WgpyYFdhxbpNTQqRqigzmpWtvmzLia5DfTunGm9JSLk",
  "key13": "VudMYZ3EFGviqHwK8D4TguWw4t8vozATCdDsdfBjpwgtjhGmbt7c26KC56BVTB6jerqQE4ZyZq3SkTeepWanVid",
  "key14": "52Dx1JxjJN183TFe1tVp24sSce1GB6bVfYj3AKLkLUg4VN9Gxa5obCQLyDbLAxESVitwEae8fWHKdcLhHwfaLayd",
  "key15": "EVhf3yA58QSPvWJtpyEGzCk18LLT8S4yz7PiEBrak6DRjEPj7qQ1igvwynT5VZnmYwpEqh9UZWs9ywCbmjUyhFD",
  "key16": "3RvarUCqKvfdM8gnrgQ29XPuMTG7X5DZko3pVi9YJUFZqfdcvW6KtAZPacgneeGmrPX1xJQGBLYyeb6egWQArruj",
  "key17": "FVnFBzGRuCfuc36RAr1nvtbgsyiKjppDDnkqwUFNKSuv8W5DFhftC3S8yESuEVb2tYRYHzrCj5FjCKn2cPAsms5",
  "key18": "4gtuBpvB1nmRcvTAxQ15Q7QiuQLvS1tcbL4579FdzG1AVEwWYa5dBCYjJrdQ6WAHcD42sfq7QBEKhKF9fYZnKvR4",
  "key19": "4wDTZHn6vjSnoCmxr6exZgJgEvUwzzpxP76e7RoayLVNg4GqxKP7konxdDZqT2uQyhaSVp7EVTJQbgs4N4zzrTZj",
  "key20": "3ueX4UxHy6akcqGPPgn8aVTWfPhLeA45aWummjdg7c8DCqbzyvSWzasAeGMKTSJ1VkfznZzwtCFCQyA6syjZ2k9D",
  "key21": "6391GRBq2amAEVSCX91qpi5rnevDSjSb5aqmPfUja2XD1D658G6sRQgZUiPtb9ceszCSGLJ9ksBb7GPC881qqqkN",
  "key22": "5NwD4epCnEiAyK7Rnh2no8iBMH3x1CUXhVTPXUjY33JVwP1oupcHTboQFcULpnG39NaicZvZ7kXXbvZfKNxwmneW",
  "key23": "4ucheGPxmU2pM5cG5VX8PzFJQdNaVKg6ARkaNHc8nzwotXYwbCuQN8qBpSuicPpXeJUTw1NRxH4PgdTL2qQSVhGb",
  "key24": "2BdTyvev9BoHf2huRqNkVEbKVP6PvY1RbnJQE5E5u6LhHoJNTSy1qUtYwuLTBCcSkXTfYjKrkgYDnNKCSZEK4KBa",
  "key25": "5GXmrgp3MDMy8h3xcbwBtznYJiLNMKmZGoRdzUPdWPGw6CkWZL3PTvgjUskpmjYk7iqjRZVAHBbMaXikKuJSaGgz",
  "key26": "sDhDJBr8DXsw1dhyBWpXtRXYHUtC94qpJaCCSffpaH3HeNib4E4cPMyHcsgVtcjYX3c1Si3ZC1cbRqyiNWvFxpj",
  "key27": "4yFJ7bT9FzWYK6ceZkGBjPztyfg8RnReJSk8QSaZZUTMSavrmJ3EDfQDM37UHM3ExnEJrh5naaBnvM3y3QgFtYtY",
  "key28": "9mB2xH519ST8RrCRpZ1Zm1Mvbh8zytne9Am21ov8DzE4JGNqEbQ3hdnqXCgnMASXFzrX2hp7pGpo57TZEwndfDX",
  "key29": "3u2kuS6tReYBrGB8NN67AR1tHN7XpGBKbnQMh8wwVd6zCygAY8LaU6MaefnFNbkMyHFS9GavHJPV8nR8f5EK27kc",
  "key30": "RP9Mrevuphs6hdSRtdvYba3fpJgaqQgMrJs8rZcA1LwVT6mMeNuzpUFVpMTfGArEPHxAz6NzoYMZS59tatiXYpM",
  "key31": "4QVyoMMhohnJSSNo35SKSrwC13dihULAQrbAe4bd9bEydtrsmySvuGWskkejoxje9naK3eRtm3HSY9r2cUGF9AJ",
  "key32": "VZ9WBAxxnU2rhDawcxekiRpMnL2Jf2M98RPDuQTtLyFBcbjqqYTT7AV3MzMFMDvS65SLeCPsYm1NFHWEJqt3jRg",
  "key33": "22mHFkm4TzDdf4A6cByhnPPA7rgvWjdiPa51LnnunRXFo1zhtcr1JAppV1sNLnrMpgJzrQy54tvfE8z3KXpEFMDS",
  "key34": "5Tygk7FQNZMus2t7K5BUg9abMUpbgkJvS9sDnWQM4TJHAc39D3ngz8LL95ujUMa2zxiZBYbsBX8M9kazJpRQdoUF",
  "key35": "55pjdW695rPvvtexDEdr9UPo8KArVbhsjnxgaA5sNDRScPabZpJkm9DgLpe9FxWNnp2849Bd6YYtzMumXMFh6V6L",
  "key36": "xw8nzuHAnZ5GT5P8z2urLJWuYfW31PoMgoqGrt36JZ5L47S4gmYzLazDeQESfn71iykZeptU4m4o4vBxjCw7piJ",
  "key37": "4f6sBCuLVjYyCbUxP2rMV6fmmiecChVSDegkGGU1NLkFHnDHdgjXPockumHcuxwknsiRyZeLqUzhZ7NCxQCV3BSX",
  "key38": "3v5RUxyqu33JCvKje8fxUZnBviyHbtXpyh3HVyitfKwchhKPLvwzNZJnzFpuS9BisG9eCtct57CyqzCXqrRfDBNi",
  "key39": "25UH1Rd2qj1uMqZdE9drNwCuJbaGHXELJMzE9AHr899bTMoeyDURH79jk7ZJ3kNVg6NMbLpAVEDgbCD2c9DD5rMu",
  "key40": "2dpA6ynjtrMBUoN6BN7jFHtRmuYD6338faBKXZEyTiV4Q4AcJeo8kcFN27q4MQdpVFY5QdgakdtjxATVVVor2yBM",
  "key41": "5WyZuRUFmMYycoVAV9Xx83nZ5N4Z38UaAqe8WNA8hDYDfUkVWXFqA7cYYwm8M2CocwQQbde6R8qKxfWVpvLwsRzN",
  "key42": "2A3enw4FBMR3HJQdkUV3V7MkAKD2GQrabQLZPbZ1aioXdNqMsUeYbquWi7coU1k3FUySfThku6KGrVBgsrr2T5Eb",
  "key43": "3uK45423KqKCRQ3LGq6WgCr3XjFZM5xMvQYj5uQx8Bn6B65ArdXioVwfoYfEk2k7J6Wph6MmpfuXiRg5qc5RsA7G",
  "key44": "5qfVqSX9g4zgxrcdDpH5YtD1tqgJrdcvK41eDNN6dfaHdGMfSLTdk5hZy5ku5SRR1fSXGoTrrBzvEHwbsVuiYfdu",
  "key45": "2U1gDLNxNm21pguEggLHGUP4seswPhHcm4tqBXQJxG2dPe4pJwCq6Eicj9wXgxxC9DizNXDGnA56372Mdhk8rqux",
  "key46": "2eBYJiC8B2k9WJ8RPM5oirmQhcwtSCSM1fYaJMDbiMWSFrU7EvwTAZXDsj1L2ZXvn9J8NQGwZgX7bsSDLSTkMHdG"
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
