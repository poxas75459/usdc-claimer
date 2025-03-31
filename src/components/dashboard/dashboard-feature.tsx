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
    "2gMjgrqkrw7SYLonbC8DWyXvAm21pzYdQp8uHx1qhLCwduDBHKQvQQdB9Gxz4GdCQ8o7eGcAnhYs6PHyY9Df1q6o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p6Qw3GLW9DpFemBd3V52x8jDwQKF8XWknSFywUEFWsir3rP9bFRF14aXTkQnggrbY9kuaL789tywDtphwTid4Kd",
  "key1": "5tbcuXoZkmLvq1kuxtwWHRQoZ7QwwLzmzKMYEGfQLrr5HLhZirVpoM7LfHSF2oMVubqytShYLuN21CRYMhT94PM4",
  "key2": "2u8ezTfecYUfwPtHFTe4HPMMc5vjR3AWi9WYCbQnpZYHjL6xpMYfsEBWR5kbPN3aatKSBRUTu8KXeoY8qbzDdDog",
  "key3": "32pfgzBi8e6NBBZwHpk5gQBknJnzmnk57vSa4KFU7HjSBmj4FbJsN72MySm2FbebhS5f2yv5Vo5of34XDnpfB7Kw",
  "key4": "3ogitajh2Vrij5N5xaw57t5DGtfGEkKvvnPmwXPwztgbcasFswx9GnHpuCx9ypfAn3aoanKqfjh3nogJNXypMTpH",
  "key5": "66orkpSCA6akLWzRzk4FBsRmJShyuMnrEBjMVVJDZ182qa3jDCqwEjLesNWMWj7wvaWqaZnQLuKeW4cszagbc4kA",
  "key6": "w4pEUVyW5sgvCmTgSNCEMusr8zhxJuYtscD2sGegDuaUZZRh9fTYzQqevdSY2P44jMwV3exKit6ZahagMTfwfym",
  "key7": "2juNtFp79isEFwS3u4A1e2UdG5rg33CatVZa8ZjPoHuDsmLioaHK5ku8VsBcoc979jieP433upiK7EQChRzpxshW",
  "key8": "34GQrcfYMT6bKVKHZa8ycPM1Di3ZQApRsmgbnkcYGuCk3mSGCjEu63CvLsLvWmFY8TgQzZ77mCeSA5TSYbBQ8CHB",
  "key9": "5NanAkPzxovwtZbmLAbjTEPwkZ9ZdmfNEDV2PhqiXGpFsdExjKiZmpU6n3zqG5V49b3px2RBQM6WbPajBnq8FfiX",
  "key10": "4P4ky7zTTKPghjGp2CwTFTHwphMvdGxip73W16SUCp27AgYa7YQu3X1n68KmQt3cg65tRvgapRxPq36YRpDv8m4U",
  "key11": "AdQXRtGw5vE6T3ErKhWTdTCEA2ehZa8Wdvj7cTG77AUdyD5CdfATUsFAyxsXuiKHSh1W7mLTzUhgJVU1vCFto73",
  "key12": "5y5fpnkFzeMfvjmP1KWsEPeFnT8WLH1u9BNs2YQMSfzcB1gGD61jUXWpWc7pYLZeks8ybPTkLBk4B15VuE7U68Y3",
  "key13": "5p7GFjx1yjs9ryk7gfzgkfVtXk2ZK69b8gCVW6yhFeZ6HfCEWSjJKprYtXz2VD4HSkwHNVDMTQFGUcP8wgvYqAGo",
  "key14": "YwmzPPwdjYweaE9T5N4Yd5tDhAxsMQDD3DquhWuXMs73gHt7vUzigdaYwJ9Qbpd15MEDPiJ1j4BFeqDeFfoYRvA",
  "key15": "59B2ddAQqRPR4ANNLCzB3Rnpj2n53g4S9FwnZqZ1gCuQqZEFcqgvnLfyaqVKr267qAzGc4Tx9oFRHCnsCaCLJKb4",
  "key16": "2FprpkhcKRjZfR4L3GpgaYbWmKrmbiHiDpT4sc2jMB6K6DYikWgvVaQwPVmM935P14VtKn5W6J4wzhYhWwErfuSR",
  "key17": "3smLg5Hgz5WztwXWSDto3fD33kDvQdyjuProVcaayV41pdveZB7QuvamgbTH8S2L8WZb1KH1KAcKhKEHjRye6bv6",
  "key18": "UDEDD78hAfYuQEYvv8C3bKmFXXaQEiBKMGwNCZw79jL4EFBqGjY11e1ncmJDqFWtN9D7fUhJti9Cns5TQUQYPVq",
  "key19": "4kUxNPQmgiNuGcg5ZxbTym1LdKFEJZBvJqhJ9pMyD4s1Ymo1BW7BSLtQchPUavDsAmAphaKwcEyd4CihmnBJrqsk",
  "key20": "4wGtDvkhTd3vYpx5WnSdSWRCYhKt24Wa8t39kos9FYxNA2uGerMLGGBzKiCsKQi5UjuiUpLVPEZCC5MX6mgVeUf7",
  "key21": "5389LyLZBRK1pGew4FG35qGJzqJY3x8sF7BBvkhYchQ3Yjg2CmTxZGm1s8RDQNTcLZnAyd4Rt1gWZZZQerYtTTKN",
  "key22": "57kFQA8Bf3WFj2L1kSCdb2AyQy37SnAdirEswJzV9YKPvQ3fDbvYU2NGPHPEnahtxmjvPUsMKNgf115DwAmcS3x5",
  "key23": "4zDSxXp4CA88paBaGoruPKHirUubBGvQ2uJcxHW1rwQ7AjjKSFamE1Ksymj6gtYDfsfUBZ7f4qBThthUexg2VY7q",
  "key24": "2cEmWdL6brWVhuiDrJzX7a5SM3kJhFDW3pFMyfi6R8YYS2hdBbFS6UUb6Wd441tCNSRJCQKjwdqM1vjsccAxNXhh",
  "key25": "3AWMsiGzGSsfHvQiCe6ZrDuVpV5P9nnTsp5z5XQnVdQdueSQ4L6hkWmD8RxgvgKYyymtEYMgeMiAZrRM2ee1wR7t",
  "key26": "2Di78eF4ZTEiyJVbCwnhiRM57x2R787uvqYJvXFvAdnJ3Mh1twi4erhX84ufniuqjeYZ33RKQUATM9MjrJLg3iUw",
  "key27": "Gmecnvx5o19PnsvmBZ5EwqUhwgzW53noWHo8cNYiQU8WXdaGPVNHxDNdk2i9ViCUREi5FreRRg6wvEswaYHkBSp",
  "key28": "4JAWNgVLyknSHvx36goWCUca18PGMQEnsTkpv6YE4xJPctmMtLXWpsjzYTt3evX9ercMsV2t4oDLRrwcQR4PbSXS",
  "key29": "7ZfgGDf2F5ZBrCdKVoLJ1VRtM7eU1p3BvjsvrTbfGF7E9CJgLusFtfBJwmrh81dEX6dHLYx5eDm1jzooBi4TEB3",
  "key30": "4U6NjcPmMBr3LAQ5hsNH1ijNYADeXJ2HPvtbShmV2wfYVPrkGMuGeLcdCADoKTKHrVaY8zJr8w8CzVtfRocu76NQ",
  "key31": "5dwmsSuU5dr8o8LQ3UtSAHKnnMR7LnYwQTmBxzqKgbqYKWf3Nid4NKvNDVuKHGHTRDiiSyrd3gDSne1d6pN2vKne"
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
