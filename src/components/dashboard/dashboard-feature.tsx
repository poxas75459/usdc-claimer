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
    "3YuFp7dSnWVgooksTacS2KZFJghy7F79jfL7hogtFGMa49pm3JiTcTSCckHpqKdB9zq78MhnrRPhJBQPkkrVJ3FB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39SEVTvMjNZivkPRZKoshiYNrdtnJM2VStywUHD3DqNhUETjbynCXFhvCXFFHkR44PEwWpiGWDyvfJXx7uMQ7g16",
  "key1": "4RyHrSvKXmFcwo4NA7tMkS6LBzKenWQYgnZrUGDSaDWGzB2qAVPDe2r4X2sC2Sp7ak4d39xeSTj1CdutoXNQujd4",
  "key2": "3L3w3XY487TZAgHVKxtMeVCBYPjrmgb3HA51gpth4MYr4PEJ8YzAfEH6FS4c5gtK3tEc9SkEfgkMefey3p7tJJdc",
  "key3": "4ubcp28sLvNntmfzvyQVBbsjwfxA72mEQLrWDz46qde75g7UqueSraoSaMouG9dfdqPoDCGTW1d8NgkPLamiZGJP",
  "key4": "5sGJCAmVCoPQFVFzzV9vxNqkeTy6v77SsJdzTiGKCtQqZiEdqScQovxjERRCW8kBbvmhuynYwdtYc2cK4AaUhRd2",
  "key5": "5wfm7xXXbnDBVaTVnKKbpYd7Ptdxe4scXqeKBdhZrMRJQTrfDgAmsXNmukfPWT3SJcy4szifSmg9U9NdRkaH7U44",
  "key6": "2i9Dx2Ao6tqbyjcJmDNH244KgYDR1G46Hjpgu1mNM48kuk3nCifRdPQYZfG58qR8dtLWLUYbF69zFNVyWefT8Raf",
  "key7": "2dJhuuqN3fgJ4uCtehah5TgMcScRc3S3WnPs8XuHCUgJMY8qGwam2oPoQiK4WH8gkJudF8rQWZsiHGNS1gWanM4v",
  "key8": "nCEUqykmQnQtLvSt9GCFpePBv6XjHRXPL6XdjmfhN9WREuVv7GJjqr3Y2aRtH7D8YRxq3QXmqBWUH5stQpas6HX",
  "key9": "2ZD1gfvyKb1oTksTF1egh1xEioA5uuHVVmSkAUK9avShet5b65H7vYDmnNSeGJ3gK41bQh9UXsid71rLReBjfLTb",
  "key10": "5upqaqVeQQNEWDJJihJVYVtmq8b3p64zzw7Hk5zcdQpwEvvugzDsVECdVtMhuKXvbJ88SKwWVgJaKhki9q2jXpUU",
  "key11": "zLPuPMWJ28B5puM7eCKnUdyZWp9rmGbrkUqQovp8QrFCdoMwRCDKNtLAjNfsgfwByZM1zfkcfHjfsEU9BqbYwkz",
  "key12": "5BCt5k3JWe1uu7BxndwpzzVnPTETz8tiELFQ2VYHuFEG18DMubyymzjojXq8HbJfUwwzuWu592EJZVH1yzLZX8vT",
  "key13": "3yPiGUh4UYqBCaHaVsD1dvTpW7z7Hsou6ECsvT4SNsWPVwBKryPg8jEW335EbuwZX7RCHxTFoAjVFUy8ixqCS2oX",
  "key14": "3xQw8eMpFCrZhZwqzvMzfTY5f7yycJdHtVYjta1RXb4RXFE113Pn3jTNpe6S9S4hDc2RM4hoCBfdzKnnyZHPSv31",
  "key15": "25VcPKD7AERhFccAE5prH6W2eMKEvoWbnx5J9DHJPNHLJjKsUeqNbpe3EGrUxob2Vr2uvMHbS4iGGKDnq5dxctkx",
  "key16": "3yXKU6eKYEWWp9eMsVVkLzhLF7PicXmVUM3ovZM4bAa1VnrjfG3B3qs57Ce6eFWjRVxHnoyE81ySj1FcV8p14rfH",
  "key17": "nS1PCLdWXqvFW4pMDdR29an7jifDn8on5X3n5Q2hbVpzJD6jTu8rbeZDDQ48nbgAjR2NwYe6z69tbudcNXpKbqJ",
  "key18": "3f4fbefJu4vBYLbiL59xyuE9aaHX2RNxBosynuqeL5JqGfUKJMMUPfduaTTMnrV41D3KHpzTsogy64cr3HQTwARQ",
  "key19": "JFv9RAgB7TnUUb3xaU9QL9eEmKzPWc93qitSjpmXKUTX884Qzqv6f17jw3zoiM4Vv3Uh1R8QiqG6xtoVmeoiVxn",
  "key20": "5WD8Uj1KGyyV9wtm7kFf1NZvA1oRCAso8zBLy3Vz6mPsGzNK9hBDbZFC61S249TaoqApbT6yU8DU2tmLQJdtkLR3",
  "key21": "aRDZ7dqS7u4aXZs1MrLNRYCF7p4mTkmrw4uVTCeBDd7ft5Tdm6bKCpD1EGVRHjjg6M1JD7Vd7NxVa7wdByVMPzD",
  "key22": "3ZPN9EdpXzmhmhBHoSeP6Y1sXRxxweYavyZ2KpGRWcZZakizZu5JfLGtuGtVVhZ78Br8naCruBSYhheQyu65yqJ7",
  "key23": "48bEbkFjnF3UJLFFJ3W3ZwQ17GUYp1nYR9AqodkMm7xFhNgDvCMsBvBZUoTnNhVaKbH5DaCdPgJzG3taUgrmAfi3",
  "key24": "2vbndh2Z8vLh7YshSJ7Jkua5nsH83eo7TauDcz3Vr1GL5ejo4K3FkCHp2inPZLso2tEE9MUyxmRkwzz5dPqSUo2L",
  "key25": "3KAWfKGcWRknGMKReTurDfhqepejXcmgMMV99mQPEjHtFEVX55rqCs7VyKG1j7tikGMbCw8w4Am466N6GHsncrdL",
  "key26": "3DrBrqNxtZLYqUxqg8J9UY3BKoFSjBwfepi6s4Y2Gg3bFGTBBGmEVtppZEwDnzbsYqX6Ep79EunveQtrD138Rjun",
  "key27": "CFN8AuZDjuQB9F9ECNQ6Bf9tKFWdRNKpKybzJ6wa1g4jYoN1e3dddsypAKLzGLbvvwkczDz7WobYbMPxGiyVaBg",
  "key28": "5kjK1WizPLA6wMFnnGfENUTAJyFajfEg8MRxQcXS8imPcUXjrMxauAjYs4NWpJVn1VE3RZ6L7zRzyY9QRQHVUahy",
  "key29": "3gfU86Kb4k49LRr9YUfy9GA7eVREMWEWqxVNwnKv2HQptPwEsnCaCQoZr9W8qSwWkhntccUK68vptmSaqXPxjEyp",
  "key30": "43noEh6tiLvqHBWgTJiyWyQTQK5kwxqsRTx1czF9sPWXatsbmQmE7VNuZ7xMCXWSsrDtiPtjJhHM6k1bhhvs8nCC",
  "key31": "5wHXNNiUc43p3oU1pX9QAWcjiXArdYyfZoLeAyoHPRKvFsRQ1SUy7HrhSod4FNESG4x3tuSJjmmcCWAoC8Fq5wNJ",
  "key32": "41u53YcyU5vBfrtMD1Tkw8ju5rbEKBPyFSwDZi8ZUqq3qAyFftVzRbNFcTCf5pdygsdCtmrLFesVMnyrwqyv8CNa",
  "key33": "3u4mYWiSijA7PrspLJMNzXG8kKAqZ8NKKjkm1MbN39aWNac6KaEzSVfv5LM7aiyXUBzQLWVbVK8wjYeVpCDS42NA",
  "key34": "4DqZNusRLbvUEfkN1MEfHsaHb9TN51Uhf1vd3phx7UfcYDaQLoCLZtAgZSUYdepvLyQUgsNDza3BQ7Z3vY2yyUEn"
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
