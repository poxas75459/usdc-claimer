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
    "4Gwk2PFDR8mrEC5M1cJEtEQC5b1MtSeBomZ9DsUN6NyYxgEUkty3KRW3Lnh45WyuE7urK1dFrwhDfaqx4htisYfW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31iSimNoQcjE9RnHLDVrF2osXfsS6osKGaMfhS46smAjweaA7xF7YaMfGrdBg8jtwKaqYbgJQpoNWtNNXmrEr9LF",
  "key1": "5aAYzBkJeHgcA4PfoyWMMzwLXSx1hh2i9EEMuNZuSnBzLGzZYbZTJL9KbsycwwwDhxAR7deNFCxN6kH7f8bytj6X",
  "key2": "ituFKsFsjNKY4M6PyUUxL77TXpDzq925yJQdU967KT4fWE76HC2QBJsjPRVV5htsHbsymeju1xY9edmEH5XSyEP",
  "key3": "4xTQ4iYbTEYWgeNXsjRz4uymk3pfnsTVWAijekeji1vDeKx1Tdo8eEbsY22yG2TYXZmhXYryGvuYhg32Eh3Xfv3r",
  "key4": "3mFQwRyPHdNRuAGFTj3ATTBy4e7gpBYj5UM8Cx4eCfhAfWfGeMJmztPDVzYuzpTaEPDtFCWetadtbt2W4X9j4sRA",
  "key5": "3wpucPzo6RwSUng5uTdFAGGMrvUegQcJqL2uFKr2zwxsNorPfscS4n6ucoLs73w4QFuWiMrMcuKhaREkBVmFYaa3",
  "key6": "5kNFVHV5SjunipqbhEB7aNp2PmUoR9CLtmS27hP8eLX7k6z4vRX7JQHkUNtSVfUUskuUvwR3yAddWkuiPj87ShDD",
  "key7": "4xpLwCTpXez9ogJ9G6WcY7PTa6dNywdqFMAD9689xzkxeNu3EyeRrdTJqSDxDoQtf1Jt53VPGvxBiwjCJHprLRGs",
  "key8": "ih25WQg89S4MAjduu1q4CNH6DbZM1WdeHqTNa3L3FuqS7fmcd8SMsvBkfMwPD9Y1JXtomHDuqFKvZNGN8fsA4Ym",
  "key9": "5Vx4Ep2dSN6bMT4LKJnqgaSEHUL8KdmQpokngwaEAKQTCamhpBRkdCt587oD7kxNsoaGH5zYUu3Cs9Xr4gqm5h6x",
  "key10": "2iBT7zcAUBXq5YVruQvq6jWcgpnFXiLTkLLXZhYSsUyLZvvoHNZ7pKAMK5RfrWYZrFEfeuu8dw5A2C69jrdQrsSx",
  "key11": "mL5LxNBWAL4GxLjczLQXpP1weEKxAcb7XbQQEZsa6v9DDJf6Amc7NukXcxobSDsWwLCjBRz1TP52jHM7Dm3qipW",
  "key12": "w5JacVXQqoiuRcTyHS2zgDyGU96A32dLWhXBmeTYhmvAvfRohCu4oKToyguaxXBHJES27J45S765osTdU9xmDcY",
  "key13": "HrCuXcevsw4RB5JCsDr3Zms7TMetyXy6dm25xK6hheXSE5DGuENJ86dj4Zi3oSNL8XXy9BBAVzHkMScAFDMevht",
  "key14": "3WAM15UguLsVRDG83JTFK3BhX1bq6AHh84MfuijFSHXvGGLiwVAayhVLVCiBJ3c2te4LoXYL2EZe5qGnAXREiNQd",
  "key15": "3ZwrHg1A3EQa6A99reX9Nnm3qmkUSpfMZzYGtQL6M9KzBqSXkq98nHZZqsNBxHy5i9wLGMpTzAJPz5EKTovDMCbA",
  "key16": "56Nxemzi6GbaEVpE4q8K5jpFXVzcpC3Zr1QARos2AW71o5i2fc2Ztqrvujkc4AJ44WhjC9DWR9xjnJ3qVavazyw3",
  "key17": "236a7nXseBUA9E6oUPUuDdzruChqbiV2zCDviLpxh7ZGph1ydBWdBzZAuCVr2eB7Znxzgfx6S8YpFyUUjdoQpdhG",
  "key18": "4t5LjQYdaV3qZ5Z9yoBh9nfgVQqHpJHF2NY8iyLVqiC5LJYVfpWgJwaLuA9DKX3UYWBLDFM7QyZ3VxDJ54xDegio",
  "key19": "5fVnkqXwupYxXHxR7f7MWRBgspUoymdx16ohxy1rraJ3yCb9c6BoiazUb9F2TGbgrh6tPuK2jCCubGaPurg87nMT",
  "key20": "2BZt2CH2Uv735mt6XEPF1ppLdNXWmgHFow8RG2XTCGPHQZynTvGtAwRaKyfMB5SBv7MAhbf22cdSHQ6DPQU59zwk",
  "key21": "5oYqBU1N2RmmjxZtDmtSSGMtBUsGT3v3tsrCnRHBsF2QmBXzoe3pv9TopMsoWzGjtXxLDBB7TkYrBvgZu4deyZoJ",
  "key22": "3eoN6sqZQwefYWy3H9BBnL955NNP2bQ8Pvs7z9iJXGNLgun71nqxXXVQDTHHC3Zv2466PkSnFj2581Z61ikUY56",
  "key23": "3BJm8X1rPSLCwKHDN4HbnzWgs1p5zbNtSEmwthWUhoebRCLymhkCNrSakmn9n5hphZYqvmaYJu6a2LxVYMTNb6vs",
  "key24": "5rYsx7RyhL9LszUzKeUFksqMyaNvSiV29pFj3u5VMFDWcmbh3m9bUax3XPeJnLuji4u4knTSdvHN9uu7P1BV4dD3",
  "key25": "4mn3gwz3nYLn9Lp1EhWpWPwDm2bvAHaRYEyDDQV45MfXUpWi9Tn3xSbghigWwhu4YT5xpGqiWNv4TdTdEX2XmWPG"
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
