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
    "3TTozYDy33zV5qwBg8pVCgx2Nu3MANg3JNm9EqhSLKV3p88SvW5YmjxAVHbDhzoiFM6cevmW1pNo2jTL1zZqFhnB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52U58vQ6JQe6T8LzYB2UehCdLU9s297fc2SCoobWQbvmihPEX58gjAKSDMSw9CVvVErdDa7CYdnicXs82u5Qb8R6",
  "key1": "64cXRphcYBX9BZczJSCCjN7L6aRjszGvn1o6yBLvmbEQ66BRKKfDkGputuMtsJV5GhG3ydezWF28AjdFAMMh2n6r",
  "key2": "4byGsrWx78agmSVNx4eW5YZo2j7dFeZ4zge6yjgDNitUxTFPYpHzHw4NkzMT7FfhVpNrqx6mhqfvRk3tj2okCDpJ",
  "key3": "4SB3SCjudECVexgctRZ32ZVEkDjmgLAyU2TUiH6RgcpJkEUt7d2Fdkgqqc7RiTfsorcmTfbkB8PDBNwtum8zCp2W",
  "key4": "2QZX512ZjXJxWAesBPSpDdAWMFBXXEjZmDYqMQyndkyiPG759yVVScisNQ44CLsK7hxpmtr2UGzvuRtiL4y511Ld",
  "key5": "66oySd1D3LZuKxnviJTfKDQyDELZCjbTk62fCmJk7i7HJSTQ2JZ1pfW1FnUnphaFvtnAhhcG3cjFGn5hLT4oSo6",
  "key6": "5MUMmTe2fJVf1LDRAyoDEK6S7exGvgMDDdLopJR7uPVWHRb7khKqAvryJXkj69HJZuccGG3GAaNbHKWZNRcRBR9P",
  "key7": "3FyUPz25tp9JdFwfHz7GGgZewiDcDfd41g9tMAcoCb2sntNNggjzWNJPzz3seaA6y6Qfk7Tx94Zs6DCzKUS1Rcec",
  "key8": "5rWBAeiLKs27nFN1Jt3K5E8esLRuThNhKqQhzhWa2UY1m6Ch5ovtPAdM6ZBEcALrW9zSUQpGJtaNMYFRTD9rnLc5",
  "key9": "4tYuyqRjwNvijUxwoGhs8TPxTimtY4UYouSpwGK2D4nhymmLSqxpgHCPw4QipPDRYANp6TmkjiwCNKo7dYPNH36G",
  "key10": "34gU3fcr1aeRTvhhKwLnqjZ1rbuB4H6jwqqLpPwR8b4LLfAFroNM1fcD4F921SThASFqPAEco9a4ZHRfeG9rcd6y",
  "key11": "23BAePGDdgQVitV2uAcDdd7HXAQAz2m7a6XDKE1VKS5BVL5oMk3ZPX9sUdMw6fxSw6DcxyXAf7Cwzzpk9yK1csBb",
  "key12": "3QwqrJqYTEw52SdM1X462MaHikEcF7yri6ydWVraHRpweo1fRWmu2ESAe4T1AJCGuTUfW7ebqmbdF6rUqrkF484W",
  "key13": "2JZz3q5Bxo48jZ5eBMKeU5aUcwM8bj6LMzqik3qgfXWyXkaut3yuLvJWPUsAQt4RgR4qyRppzqoo6LcScvh8eAvh",
  "key14": "4s4rGkA2MwEzwG6BCz28u8wHZ3eXDBgzQq1fyV6mQbDR2eEDPXSEVuM1jnLFxSLFt6g2YGE7wnseqoJah9wQo8zE",
  "key15": "4ZbA3eQaeN4nmPdPGRA4fQSCq8FAjtBcT4vYxBkvpSp5D2EoeYaPat27fh5yzNJtNw75MjYqE6ohjyn2gu1m66mL",
  "key16": "4VKQs1UNwDYsghU83CHeWdDsrpu3B9ohJ2w75SENWpMoTXH3s9SL8HngSfXH5krLppUGyNF5F4pJQkh6MTi9NM89",
  "key17": "kLcqiS6LU39cJxuhAUNWQxvMRAygcfDCBPgKbqDYz5Nsxbr3wbVDXxj28pXoYFHD2Tz4ej2Ggz5PcGanaC6nVjG",
  "key18": "5mcdKLaybjxMb76Tq7BGcEMfsNM2CYfWKqkuxa7Dc1Hero3oFdykTfnBDZCJgjN6TbKubZQWwhXTZxaGfGDjCfbS",
  "key19": "4ry12JW4dNcahfa19kLGL7MShGKutN29fCsPtnZzjaTrdpqtQXn6Bi82k8PdosyDRmbUF92DzBrhkZvpu9NaiYhk",
  "key20": "23YczmEUYo8LzLQ89awKSMYNhCPR4z9RUzAqqtpAEkpfvRzDZSt1KvYstqTZeTeNr3LVQFFjEf2Hvz9NDuMtYmqY",
  "key21": "4hbBWZCS3exc311Yh71hHzL5B14cN7U3xLDMPDJJmtUkZafHKkcnySHe8WNL4McraYw4SP8UUdPyKCE8Wvo7zBt6",
  "key22": "5QCkx2JuPhsFHCjLyM5kwG8wimsncxCTfxzX4tNN7atK9PSg6WwU3dF1tZzegDp8sre7jQrfqJ1zqs881H8ZSfF6",
  "key23": "5ELHVLsgEde1SirusyK7FHXcmKs8973atCecwE5HyBFio3sB29wustaf1RhvMVnFcnt2K3tZWeYiQ3GeeJ9PsBNC",
  "key24": "5vkiA37mVXCcw2hDWLKKZan1Gwzbr8HxiLdniQHafSfR6QWt78QRtnEBqEsBTvtqZNTJX6HdhfZWMQe8DqFf3Hw8",
  "key25": "5UZVtPcWAmbpUDx62Bd39HyQ3eTNitNCcuqkN1GTteno69bRo1q88DhGMWPxsKdzpXru4Zs2MfPBsrtaL86Eqkhv",
  "key26": "3zFiTD895er8uQEVVevWEbn6J4cCjnMf81egRWB9xDikdgVRgHPiqQtMSUNLu6KeBebiWyHzqdXHsD5ZHkcuh7U",
  "key27": "59m36v3UpJE6P9Yv3WhUHqAnB23rX1HMvz6ZzhoC5WFVFC8uyq7mp4dnQrWELjFM6h14ew9V45L3c1dMaUj55MA7",
  "key28": "2ryj2ZQcmhReSH7DzJ1xAfwMExLTaV2MKs4HAqg9m2dVrjS8WjpHL5HVWqjej7Z1Pznk962FBNiDg1yUXEsxMNxA",
  "key29": "Rsko5WLUX36mBgEDDeAxaYNK7P8hxCF9f3jwsSTpLkbNrxHhdvieaW4bnRBT7GpjE7UyM2Bj18fTpduwQdHS2gb",
  "key30": "3mnNcDRtXR9ZZsAEAsNQAm3Ug3Xj2246hhQtZXt59yScw27BnAJdkTUKqdjoxLBiFPE2LuMVvYhAysU1XAN79Urs"
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
