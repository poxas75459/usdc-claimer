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
    "5NCDLnYU4cXFosVVmbX91UkSdZQm7hZwu8k9keceTw1etiNrFfzhUTXWKR8HzNEcb5oZ1U8YzEURW1T6QdVdEanD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4goF6mxHiS6LbkTncbgFAT4zKcXJ3JrkAqA3H9QMz1U7Q1H82tNT8ivHnh5wobAdxuqnoLetN2V4TWd7vR7F79kj",
  "key1": "2k4MBMNY7MxmGFwAVbQXB5r72si2nyCYbaoAZXS7fiWjaJ5jhbcTwkUjAWhwScMMmfSRCrexWwq5JUKiim4NJoSL",
  "key2": "2N9duW6x95aNHT7fESmVefMFXcZCC1mRsrUKf22HzfJk3eGWbs2TYTUmEQumGfUK7FpiwdDWoLgXRsKosjQwDLQA",
  "key3": "3kccnsPUJj4RCjF3egr63K83dfn5i4wpxo8r8baxRm4p3doVQjkQbyWsJEMHJqvsksXpT1RQpbtGrTvUTKNaeSps",
  "key4": "3ncsV1AqazqFE2w4bQyJyeFsicf9NapgyQHhU2qnPAM5w57YhVAD6EWVASjfbUhyfmhAU5kASqPyXxmJxdfFBSCR",
  "key5": "3VsCPoufUD4e1AvtcBHX75MAGHeshs5bS7MmX5GoUzw9Jd81ojuqZ7t9jTpd3Px9VWG1ki6efPZHVqD4PRxmH1v8",
  "key6": "unZovFb4fJLVUt4cTbSiLG5giLWcXiBLB6EHkZoWCDWj8o83rJNZtWuCCB59hAP4AuhjuSN16tzpsBL2Caxouuf",
  "key7": "MEV3ghAP8o5GdcpKt1PAFD1bTiSYEaxwKR4ePY2GsX6hPa1ns99eWhhhpzav9cwxFQDJ14xHhAZmm1kARVNNC3A",
  "key8": "5fmV9g2ephhkpQLxooU8NE9omgFWpNRALteGmqx31JQZdbrjWQu8qrSjf5obp5zGrzXRc1XKynpzp9NP7YH75aA6",
  "key9": "3WGyRf3Acqx2ybZdRuQv2C5GGD2mFe3Bk37yoZvprGKdk2qXgghnW2SqN2j1ftkzgbqsEQKRLT4vc9MQqjpWNmSV",
  "key10": "3t2QyvonnFYbBKzT79BDSf98H5dS3xiV4qvVApt4kJXisd1NyCCMLn7ibfk1k5q6Lv4pWhgZs2VX3S3JF5E2vVvk",
  "key11": "3dmKccpPEgWvZAmCZQke5mqK5oWvoURQp1Ks224RBHcGuPPt9sySiPJVymV6d6MtJK8r6AfL51JeHXkstD3WwjLp",
  "key12": "35ZS5WemedWjyL2Fx9mwBd8KMJrnDwyaWdmAb7qXy5KBbConQvppbYPvm8yY2kQ5tskfyTcSpvToMc9nuQnpv2xD",
  "key13": "4TqQ5TTzvqkP5jjgr8tTWF5VQiBx7ttfVrZTVhHwMGMsuV8afskfMVGZNXfCw8cBuyqgVF3i4C7RwYzCpEcxVXdJ",
  "key14": "2dBnfkB9BRAmV1kVVDbtYD522BB7Tr3LF1JZAhk95fkjZ9edTX19AgV1w7gu1RG76MWZ35wetH5uvWvis4vGotDG",
  "key15": "ZN5BNUv7mfDdFbtrkE2b1hMTN3ncTPVVbjmxcCXvQpdQ646x1F8iSeQbGa6nbVuo7JQjM6AjitHSbL2WXadCgSn",
  "key16": "66CE7ZktRcdYfzCKRKPXnXzSg7aayX4zBLc5dBKb8i5MsDTjaapjtj22XJJbTeCYaQ1Tz29SJc9rsPLdodKZQTyD",
  "key17": "4Ubt47gaP1MUTrZCmZatS2dchH3ssmU3LWNBYSzBbvh2NxkYyedSYpLs36VKsdpF15xCaqRJCfH51dr4hVRHRyVq",
  "key18": "4o6o5eG6A9KckYz5CHTXvSsodHzkgcACGPHDVh9s3ys2ucURPK7GfF7y837aZyXq8DHZKYic6robxqMxgb1qYept",
  "key19": "5eLFDroW4QMZCuaJidkbsNSaAa4QHtEpftiESS5Vbjdyjqn1VodU1XMiz3GuTgTk9R9VqBD96AdhGnjCjkBHba9a",
  "key20": "4XhPsTo6SkAs285jUKM5hHqF1N3Hr61XoaQRRmRwoBzQFMoZZW899NyKTVRsxCRcMjK9eeDHmQ6GVKQjDbwat2z6",
  "key21": "3ECTYKBVKCzJ5A2fwVt51QWstZrpZXqyvhoKBziX4mewfoYT96EsLYJMQFXC5cDnXy3Sf51bpgVVj4T5KMvuXhfH",
  "key22": "3GwdPtVXj8oxbgMZJsXunA2aXviRjTyhn7RWcm6QrX3cAFE8gzCCXVWXVuMVnau2Lb6GJqUFfBHW4w2HJdasz8rn",
  "key23": "5URxT5AuHmFrhgYajhXz9HnPTBSxJzLyx4QjPSvHpCTB5TJf8oAGi25wP9ewPxK9Ep9raJcnd3acWpcTAzVBEj3C",
  "key24": "2vLYiykvxL5LdWVmNoi4qbK7UPUrPYG8B2fFG9fz8tK3jZHX2iR7FmJ2ER6XTRgLT4uRjCxmCt1W7XD8sreZrcRm",
  "key25": "44MymqvDM2jzLqo5kZfE7ZpVnjLNf2pRVG6pogQRQeo9i3hpC6qMton65qNocmW8f1iuHJZEoLYdRkaX29qju9i7",
  "key26": "2JwiJVyPTJ2in65xGRdWJRoCmZ2FcPaxr7xqpZ3Q7hXvxQeTGnjnCLoeseNGCP3TUXs13XzofZDch1qD5kPHy5C5",
  "key27": "5sRBNE3hszMVtr6pCoW1oDhAv4fkG3Uwx4iZ5KtZ9RCT3ecz2QWKRjE4qNy6SrvF8xDdKVHzk32278GAw9wZRuBZ",
  "key28": "5SPEGaEa525Bie5fxEnyfAkTA1sGXDZ1osp4AgF9JnyidJggcSEgFJ3wxbEqizG6GuV1x8u6iiz9tQw7hrDtVgyN",
  "key29": "5pozFPMnhpqfSQdrAwQkokZQ6Aty2oK775AgZe1btKVZtf7bf3kmGxg2yAhzbZ3QDnKNZyXEBa8Tbisif27amAT",
  "key30": "hQnMB4Po79TS5UuNgc9UNrQ1XBA5H9z87zWukNecFMcSibiGDYrE235KKLjapwxqun4oeUg9Cs74kqxa3B2uZJo"
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
