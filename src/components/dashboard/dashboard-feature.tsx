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
    "EyGuwj1guFoxPTA7UNd2zUNtjpza3aeiTFMATWbj52pR1VUHYA5b4uKr7Jzf4UobmJnvYDxCtfDLdbKaWoCiBCZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3obHYRJhj24nTFom1XGyPiATQJrDTpdRp3t74yoDBBAGjaH9JXmKkWeAmxDBYLoauxNoTT5h1AqLtGyaNgUmnJX5",
  "key1": "3MabguNcdJW6xQtFD8FTJLtBVfBgrxc4AFkRNcWZj4vC9qK63PPTjfrtxUsZgCJLRGr2YAqtnBTb1KSVfBm2Mt3H",
  "key2": "5KwgQkm94UxCweRXpyeCShVYUYiKk84yW4PLjvukLqwvDMGgabkxBqFMCwtLnoiSFaK7Y8qQKPGgPNyGHYNKBFNG",
  "key3": "4GCKXBtp3Gp8YP2j5AL8tNu2cyMGRKXp4YRgXx6MsKqNn2oGGfqBQjpbHP62mxSJpFUkqjFEwLuh1cXa1Y8A38V8",
  "key4": "5FJ2wfg1hRHcu8uVTcREPkjkHekNZQJL54tF2KFQraf1PLntkDKB9e71r4jqDj49n3NBJ4tFa4841RwWtfi5Wmzc",
  "key5": "4VDAzM8FSWAyFDSMSVSzydV74eUhs3eh5CZ6ttTqUWpZbf7Yc3DPS7dMv66KrAXDXWHTsZk4UwPFRGW3mnKU9mJ3",
  "key6": "f2wauQxXx2HbRcYgo5rLKXjvHAGFcFMCZ3s3hCW5zyFNHBisz2NQ2dBEAoSJU5uC7oTU69ukQaVSVNsf1ANssQs",
  "key7": "5wEHUJDGXqhq1giRWzK4qrG1uwYhRmQWiDUemWtAA3iZF3ZeSktGzx1NbCJKTbYo3LEXMKcJfjKtKKyGpwyofRDi",
  "key8": "29ZSEFKARgu3t4J3rCdHxgYqivY39gAwMPvoEGcSFdfPgya6vK4Xn4VpYrAscELDCdJQtdeJ2fDpFUaP4twy2RF7",
  "key9": "2VBNGCnLyiCHWYSsATymXbRzhqHuf6nEbmm4MBZ3fMGFgZy4xYnp2yB1uoJozX3RMUN7m6yU7r9b4i1FUny9aUSe",
  "key10": "3J1S9JZymZfa3PXqzJconFTbRNoXdWiXCyBMCVUDd2YPrjR7AYa89cek6Ckgen5jjgvZxqL1RHhuXnqk6iF1LBQp",
  "key11": "2CHMSznHDb4F52LcDyEWCsfrTWD9pn48TW1QfYMZAbnya5fohyaDbkPgPH9peHgo8iDtscBdFpoM4frNAdNZ3S4E",
  "key12": "2SMcdPMPNZ7TJKuq3Az7ojLRfyJSTUcZATmRmDAAzHk1Qxwzj8CFFdpWGGiY4quLjMEaBMrcq25XvtseTZK7oRKK",
  "key13": "HwMa56WFpY2xDhwFXZRzhsZv8wo6DXM1QsaGkQqDahC3fy7hQKYBVSohHFzAtX3iJUaEuv2oCHtU4Fsf1v3Dusn",
  "key14": "t1U1JiGWpSp5BwR3eSC9yDokUi2r6ZH2ju6MxkAddWq7dTDUoSqej3Q6zshKQfqCCBd9bQ77HNWirTDXtjkp4aq",
  "key15": "ZTmt3fXhqXqchtwXx5fkdCnvqEscsmKcyUieLJ3ZYhTGgcnHdnXgfnvJ35okaG2wRYfcC4CJb4pEn7PcLQJoHcw",
  "key16": "nggARao9jFoLKNXY2XBkxTfgYAarRq2rWcwEPc4KNakmzHRkwZow4Xd7mAhqagwVAMDhKMUYBJkk5wR5vPvcBav",
  "key17": "2s213jgSdhkgZJxk56YHAcdUutj1gM5i1x5sQQhh3iVVvuFGE2qiYptfUvSEaYAsMSUmn5tyRKCFW6WFHUrAuL1T",
  "key18": "3VNuc4fG9RB8nrSRFKceGc7ncUaHoZ1scV5Wq43xxU8smrMLBoWyNUkoa6uCgENcRRMChAhtNv8Ky18zwhvFrz2w",
  "key19": "JhafANMNpkLydHDz1B6V3ZQ5LJpFxW75uxEoap8C8WJJf5uSAXubYSL97WL2Lc8gyUJj6pJS4U4bXYim6UxqEpv",
  "key20": "5YqmFvNnyB4ZbVVZueSQT51hj2MRDdiabVxWBYMZuMgy8c1PnNLicR4uZJjBcq38bWWvQeon9gmtzHbKM6MA29ht",
  "key21": "3NgjE6wP9KaUgbCqMjBqJ9zvXGAVGkzjuHMBzsvDVnd7ciyaygkEA9v49msMxvKV2dpxD8kn4wF3AE8mZ6eojXRV",
  "key22": "5x8of8qoRjDDNbnukHd4jLyc87A9HqiYUNcBE4U8Rfi4xVV9ZWZ3TuRVx2VKXQFkxA7QA1ffanuV6cWm1E3qz4Lk",
  "key23": "evgSrHMwDCfsHsw3ow9FPEibC4y2knS7rrUpAWoqVzMWcnh84ewJ8EYZLBs2RSpQHGN7nbrkj8LHFsptDnt5UYj",
  "key24": "2AFiPv5dkTzkLZx5EiwCGAUumwgpJoWovGnqFP7D5KnUbXAySAqWjZ4TqpdCWPr79FguzFLnX1KPAT8KH6PqcGdK",
  "key25": "4syqJv9w6HjZtj7aGn9dsd1wKNgMj4v5Qjs2FF32YPHE17fn5yp3WLicY6jP5suHGt7QyTmK2c5qmd3ALYiKpmni",
  "key26": "5Yb9soG5mZtonfNT1g1jj4NV3dmwTSBtGVwgZdorkVVduJqMtChN53Z4ApRQ4QwpNzE1j1gi4iCpZ2sw6DEVGNGt",
  "key27": "3Leefkv6H1aKaWfqWBTMSYdoUJEfqFxQ8vL4TTLcsPMCqD7eSth6zPteSgLF9GySSREHp9y9TLMjzc7sfX2r96DY",
  "key28": "2F46DTK6fQ4UqEq81DFMoBTsNTaCAjvWrzKTg1Xp8n4BvJmUtZvaCZAqEium7J1cEtkhtfk8E8iapfMsDjRzhmmi",
  "key29": "3xafMcNZk15cQmYZT8CSMwin6ZPCpFtuPZu2uSwshKYntWF457yxjhkzFu5TxudZCajRPZx6mcmG7ANA5brvN7Wr",
  "key30": "627NeVcsnp3i4rFBRZLyMFQbFT8wcP9hBaTJJjyUR9iZkNpw7cjF9mrEdMbtE6PERwkyKckErXyWMiYM64NkXchj",
  "key31": "2NKA5qSkc1XoGqUZsonDuuo2313L3mQVjhvPdiqn4f8aq2TkiSddjvUaJS8TT8hcv6yqKBKsKFy4SEC6VQCnidXP",
  "key32": "2BCTYMcrBYhBS3bebYJ8xT31uKmJPSYFUYCVQYNonDovp1twuea7VSBX9i43fg3rJYr6AAsWX4MfmG785r3iRFfd",
  "key33": "2Vdw3fHp9Xt5Nb5XsJNRWBzMVjtqjo7o6221uLPqc2p8pBok69EqYrsBiLJemNrDU1DY76Vx6bFHMmFLye2TiEV9",
  "key34": "5aGNi94cSKSbDvNtpJhPFQQ9PeyDYBEEms8DRoE1gmGjGBDgEjH9hr3nUm5Ayt7UP7zCU3E1hbUJU1pa2YeutoWV",
  "key35": "4jMzpJofKJ3NayJ7yfzzeoJKDdfB3hm6zgZddZQTGYkptZEfxG4H5JbrNmVSWvhyx8S5g93EM4SUerN19yM5vgVL",
  "key36": "2zzUHTUaFZ5ZjwABCbmYPn7bhQaz3a6mkLoAc7d7ZT9RfGpRK4WimAEjStj9h4qQAo266opwbvebjqMJWt1DgHHf",
  "key37": "5wwCTJQyUi2EnGf3hpF8CrJLKzdgUHdfPZxemvymtdGorPkF4FkNWNQuuULFZLfMroY1p9ChXGxnygqaxyBNStrX",
  "key38": "4ukC1B58BY5g8kehWKCmCUZ2b7SH3iv62YHZxnAjcU8RGTR91NjmKuph9s6oseprmCE3Es9BKbXfiWektrhuDST7",
  "key39": "66QZ4dShqariGP2XTQq5sXsHWWLBMwoSKtAYLjHM17XAMQPEsmQ37XVBAKh18nKpn8ZUvzfqW32oyRPUcYR17AGP",
  "key40": "KGxR4J5iu1jqcEacjC92QVrBgNKoo7fK4aU9u1qHbxr9mV7Yvt7cKxAG5Td5PnzJaAwAxaL7oYFe4786CNXhTw5"
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
