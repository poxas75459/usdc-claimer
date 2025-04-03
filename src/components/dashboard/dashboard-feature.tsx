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
    "xMHPy5mbTxLjceJBRk9MCaNmYGjMoc3bziA2dRAmFuiZ97VCCuNsCMPHooxm6nSuso9BgD6uxdMud2JW2NWHZgs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z3mpRQyqYbwSB4hjDBicb4phTafedgRhQgw8qUb8eM1z1UmAPBpEKZZx6WSaoP7cLFYfL1Kmn4GiceMgqfTRiXG",
  "key1": "vPHrDfF2AFcBxCufWY3v3FR2rmCZLmcneTr2z5nEjowLhTVRawoctrdQnbugvgKRDd7wjxqGodc6D4KXLahxdiB",
  "key2": "2TKgE4um9ubKFc1GsKjWsPABotCqRk41LXFhpF5gJwuGCg6i1ePiLYymNC3c6GnrfkWN8gXqv1nCP5F8rPXXnf2t",
  "key3": "2TASnaVNQ9n6W9wa6NS5od5VHcEeAmVE23yBgYoM8cDFdZkgZUxtUfuBR2FBBQVxRmfowjNLGqjVJvDuBozNMFi8",
  "key4": "3vvgFQupLReBMKerV86QMccgGuuk4m14kM1PXvvwzudsDR2LtH7GTTRt3jomitLDuSirFdUruDHZVWttHeEkdevb",
  "key5": "5srCA3S5pVPpcXGLCJE8rpBC9Zy1Y1v9dcK8idszoEiR7Jr3Ba2J6ZMDAgEJJMuNQLiChNjg7SiwkQxKcrv8Gy6p",
  "key6": "3ePU433vSrQrBbp9uBiwGgBCfmznem7Gbn1ipKra9ZZBYu9ss2pX6TpNKqMmQnED8afSJVhb23CXWb2LQhVatVFV",
  "key7": "43bjWqHxxe1bDgRu1v8SgkV3XNKzd1Anwr3tJF5UCXrL9stv1JZu5GPAx4uC4cM69zTJKNGVW7HzsSux3JQh9sDp",
  "key8": "3HaAUFqsknya3FQuPz9qR3stqmfdk3SV2fz6sJquafBsFnRrBmjkQLn2TYZet87X5qhJS6eCj9mL4Q7KKq7RgpcL",
  "key9": "64nKkbTLTUJW3FQtu2EYHRwcMuUUZaTgFjGHzPPKK8hyzCgZFccGueoQeHNGvDB2CGxqhdZa9VKGvfR8a3bHkuSK",
  "key10": "2T79jhJ95DGSyZ6JFmQWN1QRcyzsmB5enTF9r8HSjhSvKbWZ25gGQowAAWyLtrWhzSFDeByTudNPxJrxrJaJiCW5",
  "key11": "3rHzGuHQCULSju2MuLD8f69UspevSgPbQD2pWELSUbBuJMxApgkfutrxqFD3JHgcLfrTuHtLVgUQJbXC7Mpc4pwe",
  "key12": "hfMP9hK1ekHAcBzUqRnqXtagh2KYLSPXxXZtWcRCB222Bw6zBFVAKNyxyjACyL57PGfkLhjjkYeU6HcCSLmkYpg",
  "key13": "3rdPUpRjRPTxh3x9juS4eHdND2ns61VSx4YMJsSBza4xHee16ZakHxVsmfC5DUFGnyCgtCvEGwsB3RoX43szSNx9",
  "key14": "345sTvoZEU4Hy18HV9ExdWijLhowUKv5xcAc4wP52QxRUnbh6N1UEDzhR2KF7Y3Mbd6JhbQGwC9hkH1jUbk3LeUr",
  "key15": "2qgZYLbv7EW3W2vNQaHMRXx951sq79JALML8aV7qffneNY8wRuMW9ifkVji9L1CursjTMRYSovJ52qeH3gMfBJeT",
  "key16": "Tg1PSAne3fnfbHLFaw3Zv4TgHdKFdVqPKBizpSsexh6zcN18tCpUPYxDfpbV8j4LjY9cVrwLdkBmevFajx1xvVh",
  "key17": "4kLJNSBwxbvFY1BfLQNeJa6bPfimPgsDhNjpN9bogbnY8yeJVjjAbYobNQNfkagEb7LLm6R3xym4bK3tfxMVNsKD",
  "key18": "5siki4jvpaDStPQR7zQcsyXvsJd7RvSoVmpByok6vsS8r3pZ2QVwUmkHJQM48hCPcGjxR4jGc9WHW2v8cC4huPuM",
  "key19": "4cypeCYjhxVJCervQBFJb9DheTaBwgYJnBSmn2qAdJNTY7hQv486ArfRWSgq4xyRnrcWuWT32iSUCHgc6CPqckxs",
  "key20": "4cqMeqeXuP8YvxY88f6aiL9gRZhKazPPtiQgmgyhoLCh7cR9QRa3XxyhaK1e9Cd4NF8hkumnLvxwgLU8A6gHzPma",
  "key21": "2DZRUS2xEif9fDEPCGK8qirdDCfuNuRLc3vSy71uEvVjQvFhyMSn8dEhcGJG2Vu5KhyJK4x4jR15HmZiW3AjkLth",
  "key22": "2FxeXGDgPhWWirHBZmZ3D5fuhcfGYGh7s7VL6FFhY1nkxeoffJy5McZRTVP5ZWdKPLjhpPhUrevvHTLnPpfCdCBb",
  "key23": "29Ds31fRPenJRLMdo4srxd9HRu9DLajfBWMswkn6wiDSXWY3dADWwdyXWknCNpdydGoRVTqVkDkYnBTuFSZRHXs2",
  "key24": "3pxeWKLaU1bKBs8LKWjScfHwJak3JWBr6t28GGSYUG7ajvHEkZjUA7XMLaN5SH73meMXd97ebrmVgsTx798fqvLk",
  "key25": "nu3XU29BXwaxRbqt18TfTYAc4v7p42weQQzP5rThxQooPyZacK8GGVRHk57JenXbff4WYKv24TzXQdRuTbsciRK",
  "key26": "4YdJaqvYyB3Q2PjopjYdzPuJi9eZiCjrmbwMzopDkVbQCPWa84npYzQmAtY2SBZeiqLrh7dgam2DkTv79MRHa68n",
  "key27": "3R6bQrsWw1aJ8WVH14jQcGoLswVxEN5a8RqSwc12e9zyqgAYKDzUyDQi1TTxqPiwsUR5TafgR8uLUgHgdtvWGzC1",
  "key28": "xpjsvVSZtBWWdxLbNjAkdm182XNSUx6bXfeY9Uwk1W7YxVNZG2JEG31na6pr8HTFVBGSQT2Ss6pYraUju8hWZ6V",
  "key29": "4SUofEXM2FzKDU1wozhTA3vMYHcESxK25zgrfuBFGr5wrDLPWzrjpfQ6we8MoGkfXLWEdENPUF21V8uNq387WJie",
  "key30": "4sywCuMSAsQxYtd5wbVpD4u2UG9KApeDQce4nimHJfkULXH7Uc1KCV1PtHt3ov8UujBmi9XDwXNFzXMPshcqVu6M",
  "key31": "4w9SShcQ5fjmZWbdyQnkTok5eDvLS1PZL6QbzHHRgwsFxCTKz6miPDwBzq1A7U8vTEMAqFArtFUHMak8cbg1Nniv"
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
