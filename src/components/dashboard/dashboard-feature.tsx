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
    "3xwiFQwKWVA6qSt8zudadg8KHT2W74U92kMrVvZcJodTWjiLNbtH6MwtYeXQsgPoGLEL3AxH3gjnM1MUpePCxDY5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TY176pCNVDKK5rmnLQjfy7F1oBsnj7HpgmWoCqaNEUomKtr6GPjHRsxcWCgDSHfpx92CZdvTXf9EXWoBDXwfM8K",
  "key1": "heXgaoJmbnDA2zrw2uigecvGQ56sS1rbN5DSEberPc9JugYw29bAbL8jknM5cPBjqsmgVxyXCLh6LtS2iuw1WkK",
  "key2": "4tNj2X2sjegf1AcvpP7zwSodmBFNx7YoBd3HX9ot6x5BsNFbgyU26aChfscdmhcLnavm93MYNK4goaA3Hp1cBNDu",
  "key3": "64ELY95Rpt4nkXRGMcFcWQp1ir5D1egAfp3ysZJWWxBGKXg1PmGYXzC5uF1H3P72biJnUTiFd1DfpbYi5pk5viL8",
  "key4": "6571k8gmfhy7gJoYPJySkTzsHkNkJ8rMi6t9oC75aAW8ZF9wcUy9JYkqJVyCwUQaaviumCqzFs9w3QTyNkrZsPzh",
  "key5": "34cECJv8KGnZKdpFpzdKt5gzudqwQK7p6W4jdbAQMkXppsoqgSo97xFGdb5eVcJ3QFK5bY4WPY5wyrPsoYLFkFzt",
  "key6": "5PT1P58EH4rcnH1nYECMZEnwHmpsSqXViHA6kV4cJCAKjJXLpA9J6FoYfBDDFukxYn93ggQEzHPLdBCNeLGwwF1D",
  "key7": "4DuyNC9kcyzdtSJLHnBXKeTd7eNXVp12UhNGX1kvLtM9W5reY3mZBsBsfuHXU89CckMtUrzPmeT4jfPNBFLitEg",
  "key8": "RhbcYsB85bGYBXXFgpYoj8smMFtfY4MoUqMiCqFjE3ZS92B1PNgimuQHKCoCkHCWUu6bztTFQ7xfg2dmAcNixTJ",
  "key9": "teFTyAVe8Uq6TvkjqX7JBeqSybvUmFapkiFpeb4H5puTnBWfaDd7BRGbeXZLRDoMCHWEm9H9dyw4iZandgJrJVG",
  "key10": "5r5wyFF7qiAWgz6BWVNM3vsgmBGavSL8UFiC5R6yKxNWYLNZt652wzLShg4JMebJt4s1VJBeuogP1d8X2xZ3ZqZZ",
  "key11": "2GPoEuoa12qSTW1EWvh8ooBQvMT17JSyYFC4cFDMCPSSaVao1c4R59FgQ1zstFzXqVjfmyFmfWhS2FidzmYNgRds",
  "key12": "65Xqo8Se1B4TwZqMwxjeXfLtqNgLZ2RqW8bz19mngDgeu7LhJZDoXCRRMfuBKsd3774pfTRPUveEWSYyZLctjEp3",
  "key13": "5xdcPegU4imUtAnv5SeJ2VB4QTFnJ3jGPao4KiyG3KTaFfZsAKMh5rGiJ6ATSNSWK2vnm6FhYTAbJPw7oAPSxuYm",
  "key14": "3Dmjsh2cPVteFBNMCSPjmT3tCj9EC1MojzTaZheer7aPBSiMuch7QUa3QfucEPqoWfJseEHpKZQZDbC1XJKG1Y9V",
  "key15": "Kb1nAZnEAxDTxNfWkGfAbwBCWxaRo5PiwAayMdCY78TfxWJ4Ncuheot3BYBWZMSq66o3zxWdGAGikoeebaAjwCu",
  "key16": "2frNCGuVjVM2SpYLzixAcyRvKGempB1oTXVsu98z5WLnPSFgnmafZwnUQppA9M7SgRVee2GZ2e7uoW8vibZ1Y5o3",
  "key17": "5LYZ6gKjGewp8Me1NgkGwkVKFafLdLk5GZCvvKgdYCUqUCRET9cR6cFgz2JKBgeGvthpjrsssjvjiqHdG8RDLxY7",
  "key18": "iMwzPEgVh3ZByhZVAHDNZbQTj9foN29YoEwp8UHr81fSngzHK37sHPAjStWto4zJXSWNsWL8dgRe1WkHLD7d5A9",
  "key19": "2c8EdsKsfDiodk5Dd43ZTpMyuBjT22Mw1EoqQiBd1WYXUNZHMvoFAjqiuUBHH9MT19THnRRW9KkF7Kdo5qFbBdvj",
  "key20": "5ZJGPPvoiHM6xLCXEqwsfc3rcaHXspPL8153ss6j1Tztt5EH6ncXE2zTgUbAVruXq3554gUJTS3jHF6a54eBtNtd",
  "key21": "4jsJTu4HmcwvcUW5zsgU537cddjM6UterD9hwzSFMRpcVXq5RMBHkYgwAxYY8kpzq4kwUENjX2sh8aVBSqcEo4K7",
  "key22": "3QG6asinVFHkC5wk2oRUMx4RJkZfZMkjdnSNCcMjzn4Ah2jE41YDL5cY83Qywzk9Bmpjv8vDahTscJGBgdRML7DU",
  "key23": "3kfgaXJoh2sxVqFF46T3y1bVwmJNinPCpEQTLsYESAv1BnA6xA8rSKcpkCcERw3QepXsHzxJGAMCfzkb9gKkcNj9",
  "key24": "66H6nyrenJqoTtdQSLjhjAVAEuQBmkyTUBaYFmQkqvZAyg6LSwadiX7qWz1vR1GzUSpzrv5Zbyav2bDDE3U6cu3u",
  "key25": "eZXZ9DXTt4vkhsuMfMFQ5MZ3cHWXhwgej4RbZvpUhhQXGfGMKrRbTV9eUp29TM4ASq1T9V25QH8B2ot7C5tKrnk",
  "key26": "4bowVkuLCoB7yrp4pChtZCmva3P9Qi2rdAW1yZfBMJ8wDvwAMaq8FXgqrzgGC1CRA2rEU5xg6wfywUCEiEPwEDGK",
  "key27": "5HcanEi86XHwJfcDCbD6iYMcswD9MTmhNreSpqs9aGXEdcBfD1Gf4SJvLqXhSzpbCCRHHvBrd3KypvtTj8ovNj7B",
  "key28": "omx8v2nDd8JjxC54798dCBNyaG7TbPpGxhgPdeDrE2MjA4H1YgzXmRheCmCnXpryQQnE93GqTK7vr2gT5wVoEsM",
  "key29": "5Wy9nVoVjUbzx9aaTZAuz7tTh8Ky4KpyZHbTebbiusFUK8VbynaavQGFTByQrwjpxCqGGibuRPDc8uU94QE2DrEg",
  "key30": "HGFTuzo5MjSRTECY61MAJK7DgKA7CQwRFLZdGyeteojQqL1Qv8TCTnENbRDwR8ovgiBNZHneTvyVrcR22XvBQiX",
  "key31": "29ijahzBmUaEm7u3YRmgVaeqmL9vr4HNFTt5ToJJNVKbN6mzWYSkN87cyj2HAxpU7PYW5gWNhJe92TH8WH8NDSJH",
  "key32": "5atbRVTfDAx9STWec4demitLBRpLYSbaw44T28msZSNxMYQX917dmYfUTxS9sdbckgDYdxY8hA4z6Rb94yp92az9",
  "key33": "gjb5BCw1Rfkpy4bc1qDNAFHVbWbcnKA2XZqNHB96FDpxFvxHazjnSyVBkBRbmcpGFa6u8di7tHFLZKLT5Yg2mnG",
  "key34": "2TySgtMGPScnUXi9a1EZ59B85NVbAQ6kVTWRU7wUp8sprab4kMefaUUMxxZDBS8CPE5YXTG252Ba14CAFXNQFTei",
  "key35": "3wPjenpCbkgmKLZmibjZA1kzPYF7NZVMCBvPQJBm68Dfp6XH9HN9v4MBTvd8oGHWaxphVwm8ubh8b8CYfwQ1d7Rx",
  "key36": "4kKihVe1KH3gPDc1DMiCBCJ9QzkhWiZ262NQYVjhrzxvoaYbpYPTr63EUQmrwy18cPDSNpCWMQJ5JN9U2Y6ads1D"
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
