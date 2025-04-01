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
    "UBNmJyZP6gGyxFhvix5MyGwSnhuX8m4ZajFMPUouzAWUf7vYvPFCL2nmLhHTegL1b5mCf9BWsN16NfCWojG1a9h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hTfDWHgwphZd262tLQLm7n2Xt1H4yqrHBd6k5wDxTmRFCFuKWbr7SGCCTUasQd7wiWPCZUDJM5YnTtwKg9jHpDP",
  "key1": "2gJYeCqYMXTJHbnvWDW87Ai18BzPwhH9sBnzppcNdkFk98iAJWX33gJnCQB4dFmrb78GAkaEcZqzTXKVMz6Wbm5U",
  "key2": "5XGpCYj5C2p7qsjEgVe7TTgmkWFjgF4wyQCwu9NouWiAkFNUJ1hAyYrFzB2bdKo1v31B4ses21CuSq3gQ25vamJh",
  "key3": "cSEfNPNVhwZyF4i9pJwpJobWLFQgvDjktXRpi92kCZvUViKiLUVHTF4NaUZwUWaq64Z2WYgxcBZguFjs6A3TLBr",
  "key4": "3Nhxek118n3s1Yqn5dhewVAD3EFp6MTn6jUHeNNYn7vFgtiTbPq9ApMGLvATcorFDySGoibVBpVmvFzmZN9Djng6",
  "key5": "3E334zcuqiiM5M9ziCnn2FzrVdHmJbrKBaobqQD4sqHkY5KZNzDU8uPenMn5LxrBGBUJiXVc5KLP954rfzaWwnF2",
  "key6": "e3cmjs7n8ciEvQYCLTbN4ZwcrX8SZNLeW8hUiQJKgRaMxxg9fXt4zrb4bK72zbMjKN5AtzvfiVjbhz4uGp5wTRX",
  "key7": "3YQVVF8RzrvPNBfpRLUDK1nWyYaAtUpx3EiHLv3dEqdCKWH88PxPjhFd7GXrQUK2nXE9WnmjBCHzAD9kpAEEyE5t",
  "key8": "3DA3PuJCKvBCB8j66QpDai1W7fPV6PZJHUX8JEn9pa626Q5ZH24n3YVsVPbeKoG9bqo9LmPfJCCtpdmvtuBrLEyG",
  "key9": "zqfrNAg7BhBFhL44M3NL2UGqbW9TfQZ4bqU4nz4bFjwk5a6XdqWGYSE7wko5nff5ACpdm41QdY2SYdSoVLFdaza",
  "key10": "SHHQhaj2gRa75Yqig2fbUPM6gXLNw3NKvC3fQgaUFAvJXKNpTcGT3zJCYLzkZsEFWJpQgajdDWq9ghxnM6kv2UT",
  "key11": "pXTXCuy6KyCfcy1nkUEe6t6eLNJXK4YFxN23Z9Ht2y2BheRL86UurPfj55SaiXZGUVdMhw9nU3J8p9k4H4nkGAD",
  "key12": "3zXm2vRfwMSkjtTz7E83VmMu7FwLGGiqJ2UayzdzH88Zq7YqAA8ENejPS9tZ1Phws2c9PUMmSsRzyYAwrfrAbsqx",
  "key13": "564PM5gwukRWEoQQEHUoyLFg9i7HqbR7vURDE7k1NaeqJdSdaELK5EajkvhYAXFFDV2wS5n9dH2iKfRThMUpfeLF",
  "key14": "4uPPMNCQbPqHMfaQVSJdf2mNtScL145355d9oytkyNgDR6mAaWb9YEJSULjoYKYpvDVnDgFkLqxNg544ek488v9J",
  "key15": "7uX3fDxx4uomp24Ps1VfzvaVQYpw1eMq8hdNAQb9Co5cuZhncLVvZTjgztc9RoCJCKLJAeteWxch8r64ogQqfaw",
  "key16": "4m3pUCGtiNBvPGgveknryWE4XPhjPEtz4ZWBkwkDJamUkwgsjU1og6dyftRMrUPQNbGB46e5DdXHG6LFcuT8Nwdw",
  "key17": "4nXQupbXz1dVuko6TpUGnA7UuoZnnTMSbwj74VmfhNAfWP47TTCzEjBM1M9XE9njmKT3WDHrggqFV2gpFhh3ppGD",
  "key18": "2GwJUPGFzyBhd1JtQk3UCbMY2UVaYPpMXrsNgtUg2XAbdiAVVGMTxqz3EexEwHngd6245rLowSL8c3h2EpFzVLnY",
  "key19": "44FtKcHAR5z5NpR8c7V6atpyK6UaY7zNf3vuv9e7vVWun1d9zFJoLgTKhRc2G2VVU3HcLK5QioWfxtk7JhbnsbBr",
  "key20": "31SaedLJAosm4nQz48DWTahwnTMifgobQuKc75M3FC3VFHXhSXnzMUAY7USoqojA9mGTKnjnbx1LYwaRVjiJUZS6",
  "key21": "46qRMVjuFxvzP6dB5A5M5KRFQ8sCRESPCXFecSbXduPY4A2toqDxmMYyfy1TaPtuPCCNHbBuDhwGG8qPLVA6BFVz",
  "key22": "8Msu8s3Lv9VrWvSvVvuf43NyMqaAm4d7KBXpxVPUg6GPaYscn1gQQK686UD2XQxNopU6sgaHds9DdpTqM5WWdZe",
  "key23": "4B9FV5ZRPNRVVrV7EzJ959V9xXgtuhk8yY9PmFmMcwGdC8CkapeCMoqudYh32HbXaJtVJmdBNNdkYzyKbukoVNff",
  "key24": "fYZrafqrTmYh1WKdBiSsVQCusuQYbsNfruVF8sEsyrT2j3zcQZRGEeZPesHTy4GU8Ud2G1QiMRyKhizRz8zmzZp",
  "key25": "W1GNGPqMCpgvc2bZyeZGde1Jfy2JVmAKd3yiJwNTQEjMcCzKr5ERLbXwaPaXC5p9vYDyMKwYTGebH3uZWiwkbRS",
  "key26": "Y4bCvtUTrUbNpqRTg9c15Gva5E8gaJhdxBuD2Yyj7cbL19Xd22tq3jr17dosXQjxDnJQiXefRQpT8xzyt6mLWSw",
  "key27": "4eckhA2bzD6sn97mGQaTDB9YNCMZHak3TBfFR8Rxd41ptWUfxLFHu9LLsR1H63cxKyWn9awRuS9BwbFhTizmBBQD",
  "key28": "54SY85YDDAH7DB1ToPt1GThvN9NAYwNVamQqNCWLuLM8RGgSvjwCpLMinTcNLJE4Qb8vhw5ccZZFCwtyT23afm75",
  "key29": "2EijvMhsc6JKcVcvELvv8ZUodmdUhhk6pNmAv54kgyibPZeCwEgaWP4SHPzoXjyRyWFU1qsuTeXMLFtvzZD1gd4R",
  "key30": "422urxoNEgRvwSwRwi52tWnN2QHuokiU7GbwUgarNoBcoL1jqRjTJnys2FxZqik9UhbB2mHM58xgXmVDfGsQTSGR",
  "key31": "4DxKnTfux5CtYEGN7oiKxt25itdNgV1D7Gt3zJnfLqAbbLPVHoUgjGLa22zxVsuJ8BbtMnJDbcVLaP2YGTWC1x6z",
  "key32": "632mhujHVZvyRzQuswmdVQyNdZf7oNAjxKFcbbaP2aMo37YpSMhj6vifDxWNLugvb2HomufGJG53inMqtyDJzf6b",
  "key33": "4ck8awZX58PZbESVCBfq5JmpxmFnrj4FkV2q2fvnHhhMSh4BtyTs7446qJ56gtZMbMENAjCiLAgqLu8ELxxdGAu1",
  "key34": "5hmyboNNvWz2rUBQoJ8122EtEhVVY1xSB9w7xvDiNNXq4ygRcDGpCgcMEWKxes27GayT5TgHCXEG7viutkUGQgRq",
  "key35": "ovytnxbBFA4sNxJ5XHAds3r8y3h3uoMEySxXKPfpuzw8b4FtHoqu2ZFJhSEjnzGvMME6JufwVSuAZj1GhAkpY7F",
  "key36": "2UMSeQ9HZLunh9BrjYDrvBpexuE8b9cZyQU1PrbjkZfbRDRKsGLVHFJLnRVdxSvh7zCvz8kwoBBP1SuxnQg6L6Z4",
  "key37": "TRg1TRsB1hPDNtR1UKmvXj9LbCN97TPbEUZwQK3DdS47H2pjKey8Y1JMaJQJ7aV4RXoGC49rfqYBZZ1rEQzkiMz",
  "key38": "3MngeN7HPPcuuwSdHN82nwouJPmD69XuqLScGbFdq3ZY17BXpXW4ZRT3DdvuPTurcLJVKP5WsMFBiKdYsoANhcGG",
  "key39": "ADfo9iKUzJE9Sfwr2HCtgTVSE4BcZKzEsL7L72M2ntRPFvapYe14cYTdsGynmX4m4mZkgUPWRpSa3cHKARBJz1o",
  "key40": "5XS3LW38KFo9hJPZcBZKJVhmpdUKGLrdhjipb18txihLUmXyrVmhLZRhgXhzKttvDUhYV462TrRKmzWjP9jDSKqG",
  "key41": "2ZTpRkWii16YnWUfwn8ZarJFwmM2FDh3o1FPQgHm2CQHKKMPvirYLonuCuLCRinoh4qgXLtp7Qc8Zqig9xbxGpK",
  "key42": "3MWeq98huhUYxVsZe5UZgGeBK2kdjSAWAYnQtXi1qQrcP4JWwVJZygnuwFGUYCWj6CsnRdKgSJiHBKp3R66ZvAiy",
  "key43": "4eYia8MF8FeKt9FkuDFisHs3QSKrfozCX1We3cB2RHw3tpshtMPWcWJxq85KLU6qp6qyP2QKVCw5vEedHH6y1zTG",
  "key44": "585dLoJ9VCWfCXitYPmneKBJkkN9Jy6DyLPpgpwV1gLp9wvmUAK3LpQ4uGEvpLySL96TPmRVuYp8DAoPprPsnLQD",
  "key45": "32rhpeXzeN7NBYkXXWpVz9h9Di6KjSFNhfgd82uZykji8ZnhBe5iKhGXyJ4iicubCRjUsS5VRdkRRVKkphJT7Kz8",
  "key46": "3wVGbHpWxpWr54WML7xotwfPH2ciaRjVw5Q7Y5x4JAzNHJbkMVViWdXyqMfoXTXH9mFkUa4PuUoRmtVXfFFVN7WK"
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
