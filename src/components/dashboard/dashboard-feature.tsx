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
    "5DzJ84tKuTRKBXdm6nR72a4gjaV6JjdMCDtU2SYKBfPyoMt7B6WFSZ472UzrDfBsjC73TkigsU7Vt9foMAKTRnuU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qPgjS9BF1xxpTidrFPSbGAcKpKvzXsdSFHRJwif7F8xfGUAJT82KWmh85jQBaqqwmFDFGiStwzXRF6iKkQqAAM5",
  "key1": "2ynEo8TZLiQfJNhi52YxmeDVViq1Bk6febTAwvGD1jZW4JNbQXNHvhV7B7Vps5CAdqx8as5zpNtX8JkMwKvC3WGE",
  "key2": "51iYrwmELLX5wmT8qeLwwcR2ksw72gnVsEmmxo4uXpqp25R565NfgqCYwVyJXGn6EkawjEBxx8oQAXYSMJu8JTyj",
  "key3": "5TWyg77BTf71pmqS99N8v42FFQYms7SsYjGnZdVDyesCiUkShFgNy52mzEd5rki8j38Pj5MMwEq25hnzuHxsbiRK",
  "key4": "35SoPVes4zjKoKbzWpQ7eSjGs2GooJnqcMFPPwWDH6Wx2pmQYxrzcjGuezqPvtXWAfFVsb1MBEDLZb2yd3YGLt7k",
  "key5": "3NDHFt9BEpuK86T6vdX8XYMwQe9ENjdYLLKdhnvSNZ3mBWh8TiDuP4GRdkSep8Ra8Nk4BUXALV6TbMgmxEvc1nCc",
  "key6": "5GqWNHAXXsFKJkAafUtxhzeXY1nU5xcSH1DhTWWYBFWwmPCYu3yV6MDo2jjt2LeEYJ6gjdrUubgHq2joAgCWEKWy",
  "key7": "u7vs2R7oLp2xEgyCR71CT6LZRU9PhKxtXuBu4gFsaWVoPxDTUTVZzSiv6pKTnyCe3jGb3sk5ECEhdho9BWqSAeL",
  "key8": "5AFHWpvad8ShdwJkE7KKeL786oFUKR3nuF7FNLY4U5jvazHxrToq614rjJLnEpVsD3KqqGozfwhwLtDpj3GZxVqX",
  "key9": "4KC2M2FEeJBmhKNhd8qZW2JYWmCj8scUVvwz5CohUrVK5N21DBJwXibYs2CTd6esc3HxbvX3vjP3dJyNp3ao1DoH",
  "key10": "52vAcE5zjg5UP8Ezp8ncb3BqwKeVtPYEhYf9FGGUVUEwCXKgcxtU51TZDjQ6SmHDkkYdxfZ75mcsVLZZBJEcy8FZ",
  "key11": "55tXyvmP2fxaX1vUa56jDD1apNkBavWrEPKH1mW4wWbRwpCLHcwv8Hmjg2BPLJibuyAwhha9r4snTNN12bPQWyCt",
  "key12": "4xypGipxMrag2WMTo7WR2ZoM9EQqYm774PHuTmaF2yyLet1ujAJzUrKEMcA5v4X7crxRF5ahG5kqCC6hQME3mb7c",
  "key13": "4fsgUz2Bi1zjRL3q2bRtFqTUWqXDDubLx8ijctHUzBzoAzqcc6YTb3PCS6BMDQH96VJWV82EjN9UnBi1bDvg4GXo",
  "key14": "4rqASxiVK4TN5UEqDEYHsEmjYCStKbUP9URsxjpGJiGjrfw2poLVfNj7LGRbviRHSBPwab389pspaSUVYaohcjce",
  "key15": "5mH4VwZDy6JYcvLeccKpFJBkzM9yp9PPaqroDfEJaU9QpDAEg3EZnx6QCmmPtYNY4iz6KUYN1RzWFG1FEhfjac7R",
  "key16": "2dkbf6gaXLiWJ834WgeLaTC8fYAYWGbbTRMdDGUqHvCbMWmMrXXSfD5q7DM2LbTjfGkr54wsMtGGUWNS7Q7oLoHe",
  "key17": "2bzkTzMxQ17rX6D5HZqFHnT2u1rDiBsYEu3NQvFMttiScVsC8FTyk5XPLUrPjrypXqFtKY1CUFmEkSS3zCdAJGVk",
  "key18": "53om5Gsgc413AknBeyf1vJT1RnYc7apuPNRhTMjC8R8392o7oMJkZqGSs3hSGJuvnBSN6w1j5EXpSosxsXsjqULJ",
  "key19": "tnaZrdqF8vsm73kofCscwkQraJoDEySvc3BHtMq35zUTcpgds5xWeF3PHnp2x9EpVfXuKmsXFPMifEH1Fo9xznX",
  "key20": "5Vqr7hDWw32GEw2bzvSqRFoQikAqKsk3b5Az4XtNtQfpTknVJysjm1u1ATWicFWH6MJuHeeMWZXL842w4AuySL8w",
  "key21": "F27eGjc1fxTKcv31AjuDkzJxcSbkU7ppsepXDJkkTNYtGeCccsohmfDziveAkgMbpeA5asXUWPPLR51BEsJNkxQ",
  "key22": "2fNJzowQTLTcKxVKRGSgcTvDNBvc8LgVRXskFgzaxZxTr7B43HLYJbtGX29bQ8AsjKWXbnaHGD1uNbBawUFW4Wzq",
  "key23": "51G7Hg5B8ACMb218k3wVkAgGPHGTEzLfJCwinZpk5MX7WftnZXfbtGpntoWroZebUr3eFYtqWHaAhKjhQ94HnTK1",
  "key24": "xqwFRDajBK4CooCqLehjLS5rFodCLZTjJKkF1X1u4S3PoLeBRGoG1T2sLVn6YAU4xqdoHG9JaS1oozejycm4s5D",
  "key25": "4H5vR5YagXMix6HSV1khgepVjFVAwsuqVKJbzsPM7e6AuUtocbk4d5ip99Z1n4qFDWbGJijQRCX2a7gy8FEW5XXQ",
  "key26": "3GQfRZ1VyrHsV3ftsuz5McxgKkTAdVecH4aRECRJsTRLFtQi1w5Xs4CzjJJ4WqtYEveRxd64MdQwxahEhaT4mrej",
  "key27": "zJozAjTm3LML76wRXBFFY2Yqx3z2z3bSCEpEMPnigFdbuKuoSBwft8gdBknp8oBSd2ohaHhruULVmomnELh3yBN",
  "key28": "gSNXVaLGjxML3Cp6gTa7SLRavDic54rgRQNc2R75CjqVtvqpLCUqhbt5q8Ue91drWT9tD27sd3nEgPTx1WRuFWi",
  "key29": "4HL668K5W3zpf5fJwbw76ExTGJX2RDZrNacc3JTNp8ar2AtConyiDs6kyPLayDM3DoUrpHkxwgEpa6v781mr9ogp",
  "key30": "bd6D6fdz5HZ6Qs7iarrZsEZW4q54VboqngBiWHgYW5mekMfz8ZKQmPxCoxRSt4N1iBxWyaqECBVaD5qLmn182eN",
  "key31": "AHw6LXKAZJoqYPeeGciFWUzw9JHGi5jY87DsXih2xJHRWm2kxfrLHUiWRoPM6hTBoem5MNKEcs6h4naMAwKj1ES",
  "key32": "5yeVTKHanpanwuV8GiQitwBQoKYPNvCguXst3yggevzzJeBh63gQXA99y1gZiJeZpBmn2KuFtjZcHvtpnNoRpQc7"
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
