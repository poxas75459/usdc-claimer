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
    "41Zb1M9QNAfLLKVc6fUQVYNwHkACc4Fh3hDsQqhRufFcTbKeZa5M5prcWvgF57zA4ojZamXriLuFWU5eh67ahkxL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bWFhEqt2SuRbuisemwrHsLG2P7dsfHMSa5Mq3sXQrvZoq6LXXqPhiqQEmasMyDn6pHS7t1K7314ftvRfacDFGXx",
  "key1": "2JLeZQrCJWjAhTxWewi8GcPJJ8zXgXa6PjKRaeihrxNoiDWyFvTMbqGJSDonUS7aZL3xspXeaXjvTFPgJ7rE81Yx",
  "key2": "4wiCuSTRTiYMej51W63r2yQTsZ93JaqWFTRm9KcwQvEnpP3EcT4ZiRhrUfYyVUBGV2ouU6cdkdeFPTLXeiBYtpqE",
  "key3": "2RLGtedXoRn8hAPrTbrGACf5z3PdECd9JWtxECsmXeGH2ABJeYzTuxCXm4FAh1gL5es7bYkm1d9HLJJBtEUfbV6U",
  "key4": "3d3MoLGXwGSgKLViP34rnPWV2uxMLCD9j8Gce3YGBc5jY2jxnbeFGKFupgRvaDf3TvmoeR8yyrNU4sHvMxyudKq9",
  "key5": "4N1NPWJGN6Wym4Ts1JJQEFG2GJdc7n5PBYoxTTGBqA5mvXW5Tbm64yjg6fquP8SRx1FjwPJHq71AytC5pSM6PgA7",
  "key6": "YWHzuU2H5kCTy4BthnTNFP6pKibcQ5RkDf18fnXid44mxFSEw4uukyUVNeP25bLyv1PDoNA14ugBn8PAFikWEKZ",
  "key7": "41djzHULR5ng6b7PRPfePtxFK2JM1XXiXtrq7mReBZiAevHS7t47Ts8ySwquzCcEbg6Xsb2b3LeUx4U4qi1Mq2n5",
  "key8": "5Z8PuUaFULSvwF3WtsPL66SjUMdTVGk6HEL8o8KUNUuxHUZoXzEvsragTR6ptpFCC3aNGnyk3GJJ5Rz1VsqZC5k1",
  "key9": "5F3JKddS2rVsD7QzpaSENKQHMbDJAzz98ERZFCk2N6dM3AQcvETnkozS5fJ8YQzbaWN1sKCuCcmnhXtYVULx7vWR",
  "key10": "5XoHCyX9YXLXpsLRi3vNSVud4X71Uay389W41mtYadcgkKX33goGTr9WqF62LnREtAtMRNcwqucRknAR3Hxdodxa",
  "key11": "4KfDsgFkAZmmAuJCBDJtGV9z1AKhDGxcEdrE9q4M96o86UY5HdERMrCbqEYuAkudpGQHp8SsvuRZeg6QaHyR5UST",
  "key12": "2xWwJqdmybsgbqXvH4ntgpZoBapr1d92iZFXQuKTZoF3hWvcKPoG1sz4kFGu5RFhwv8VMYbxeszsDwG6YEhT8xPt",
  "key13": "2oZtLuu6ppVUZ3inDrifEAML8FpPSwtqGbuunBsvSRfYEJstUm6H9roFisCFQJ9bWyv8Ue5BHdNHVJxdjbVuegJW",
  "key14": "4DZcn3stNX32rRrK1wYvx2BauyEaQW7pXjvxgSZqESXXX7wZXJdfFBfN1JbEurkd2smoEmiAqhsmCcQnh82mKEuk",
  "key15": "2zVmH3e6f6JhsTqvGdqGnJQwcuVp2fzvyA5Sitw3Xk77yyQVxN3V9g87f4FKK2qmvDiZUfX5jFhEB42LyysWFoen",
  "key16": "3oxzJro5bLnL6v7yMUTBZPswJEHUz5Tc9xt3wuVJQfVBqDna9vFXYdx4YC7dCGPz1qXnt1z8jqFUFtA93MivvyVw",
  "key17": "5HXZBT3YRXkT2BzDMWtt1yx1mgQtDUvQfiwuPbTxBXgn5XmaucA7uVmX48oMS7i3sanWpm4AjSkMxT4ok71ZpX3v",
  "key18": "SiTQ56ak64JwXBWQneiMNyyvzaUd3R8B2DTxD9EkcJXe5tqY3HAChHDTDMRsfhvdrGE4G7TMvwinhyHdSx4B5dz",
  "key19": "khbwQBMHR9qvVNq2gmhVSXg9feUafp4jcWs3JTP7AodMUeRBuyuiWMj83cuLyQ9KuMycqcVvFtRgy7JxPgugChE",
  "key20": "2LQxBSZDxCCM42Tj2K5TLuT7o63DtXhMgvuBySx5hfAULyF3ZwdDWQsdUWUCZqLEuvQm2fhxRo23Rym9g82XABSn",
  "key21": "2j7uGyht4agda1PZs83kMPZyTosfq6dfNSdzA6vcDQvCZaFsjW3GBNEeqrHkdTpEce9oABMUuNDGa7Za1UgFZKmc",
  "key22": "28ygdWwAaXgMPtC5JPjEDd7P3Y9AHvLZ3qjHXXq6sWUhNsoehpdFpZ8kKwgT8WFGAx4PJ88WqA7JX895tFkhR8bm",
  "key23": "WA5eY5hPFX4YdNqo7GTvBQJmyC9XZhwWvQwdDGqQzJWqjcWcNAzYb2F6najNMStUgKgButTfekC4yaGe7H4Zah6",
  "key24": "UQhL4Xxicx8UPeU73WM7hHaSeDQ4FiLav7U32bh74fu7sNpeTAJ1SPr9mAJWxJXKgDccxnGAeytdT7NUpVov2q7",
  "key25": "5HB4VKguavnMiXeYZmBaBiWbnoTBwkitiJSjWvg2dvQ8u1P16XADVGTqm7AV4dAjjeeBrM33cYdrnzQ7KDWKyA68",
  "key26": "XcUH9uGV3aT5rbUbiXd6CBwRHKhHP6mnu7XB5qNuhc2x2RadDqgPykao3LEwb1iTSAZvsi3tTzB7iPx2W8EsHPF"
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
