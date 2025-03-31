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
    "33bhh7rKKY39aACPNvxNyR3GfLuPk5rAnR5quszAyrFhWLzS8WmzdvmhE3FjbaNipUMMUedHfvvbpkQ1AYmmWwyz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41XnbBoE4oX15TZD175h2tx9AfRmrqybLbwwLkn9PzZU1Hj1sBBrWULpLgL8siJzxtQcX7zkwjhMJSqrKjrAEwqS",
  "key1": "4cBt7u1CX3PkLFyzd6pWc5UESxSiHpuHJdNh68nJiVGBjppp5ZxN7gScHuFzCcLszfeUmPs9Hs1QbmQM5JDyaRCG",
  "key2": "MLbeGB5xyZakhxBVaHSqSK7B8ZBdPcG7aW9gpvaeHLra1bydb1QMfxrPcG9U6cEDJBQyQMp1tPDWbY94QJVi3XS",
  "key3": "3R2v1SJPqTZT3yieRbdwoMpa23qf96TPbimX6wXQvav5bb1QGW5yHaSJ26gnvq26vQ5yuZbWt9VmjZWWmG6LRcxK",
  "key4": "3a6AFdWuQYM9Cq6QL6kC6i9YYnuVaSZvifihT4bEiD1PVwxNaETZLG7ZBHQcYnVgiqtaFZdBaEgAcgwDWxdnKv3F",
  "key5": "5HSudKns3eKyJnU1L8HhtVBuWNe5dEhDMBbeeLJVeLGDY1q7YPTJnmTaAJW2DRiD1NvxZT2k2skivAk58fsXyvbt",
  "key6": "5rXuYYVjwiPD7LBs6WFfxUkrEXidBEyyyz7jVsELTX5kPfiH35p46a7kD17LBQaSkC4CYs6Jydnd91hRuVLVEHuH",
  "key7": "5pW2JyECHcZqnzKu2UcPkz7DsrJrS3kDDyeN4EaHGvbAweH3cPAPGgqu8t7Dgum47WrUtiqd5pe8qdFhENqjACxa",
  "key8": "irfSnd9XP52Aen5jdh1efFvzxAJBgjzv6qQfEJ4rB7wDmK9fiZFvPfvnYsKgteXRTNtc4Hx2vWp174pMQUWZM26",
  "key9": "5kFaWiApjg2FaqpceQRaHk9wbkSnWSVLuuHDh2rv1hqh1K5p5fTe5cAfnb6E7Y5MUW7H9oJBY4Rs1LzKufrp2Qsw",
  "key10": "gkAFLpwwqCbDCRA5zY5VGyNS5MXK6yRGZHwyKUGikfjtUUCxGVvsE4L1ndNpACF4hEW6FXR9iCWGyXDJP7y258K",
  "key11": "UF3RcorRocnK9YsBLLGnKibhVnfa5hq7kuYrTmA2JLRSJRyMkFMt7ApzFK4LFUq1c5hPbSci1jzLK4aAjj3DVTG",
  "key12": "5Qktmd5L2zKJ9ehM4ZHYpsr4uWLYm6A6JTfWNnyTN5ieFLNye2QayU8eKmBKDXfuyEYJQdZNhKfStnkqBswBozBy",
  "key13": "fPE2zzTMGgSqzwEnbznyLSqAGrTjQLfUbA24dM1qTPQyZq2z3A3jtsJ3oXzskjxUXE7HGdZuX6nzBJVsGDvj7ni",
  "key14": "3MPGLSDYzRfV1QGxaDRp5AuN6DxDCwhQEVpsquLQppimduFNz8NHRHByfo9E2SLzxjvRpfzSX253rFiUXsMYvC9r",
  "key15": "3y5xJDiCQZEYamtEyfUtppmVfXmtbXddQ8MnZo4PaRLHCzoSFm3zXhZJBXTP5WDhJkGPxUMRHVf8KQh2a9yaK1NC",
  "key16": "51anutLyjuqP9XJXqR1eUTnggQ7tdQ3y8c2PbWjBdZAPiCJo3Rc3phpDrxbBvGYwrsbDWpMwfSvE2ZpRxhH7XNpH",
  "key17": "4DM2X98493cicFCE6HK3puMfUhnbM23ch2QxsWZucXKhvHy3Knbbr9D9QNYefbawSQxKpkQtXhcbpDNyGXB8MR9M",
  "key18": "2i6Yy9cQPW8PLthwnbtcZfxvMgAhM5z8Suf76UV23rHWhVmu1XRyn6LFk1y83V57tBrUgCXrEZgTiTukGPe8AJTR",
  "key19": "2qg61o5dUKDXAMNK8a2VqZkuuCuKpVdfY84xVHFvv9VfoV6Dk9iEcUJhyMcrNZMAiEWbsz9k3HbQ2r6VSzqYKwRL",
  "key20": "5LPzVgsQtDhtZM9D7dYib2dmvRycnFo6KwEtfXE1SW88CgVFd3NupNVqQheKVchAyzZi9QXLsd3fUY4wExgyikAH",
  "key21": "4hf38g7MozQCWnLqPm2BG4RBYBeBxUB8kivhxGojjCf2AmKs2SZUhRNZ9DxE7sv6zfmhwZsVJ7Ucr5p79regshCr",
  "key22": "5DTEiLEXxSuctLzcpHrgisKYFAHWREziPytJGYvyS6PHUK6pSTWRJRPXJ7uNezUrHzvwCT4XMr8GoRackkxm7KJL",
  "key23": "4juZQw6whwuSXFM66LznrT3S84aabKH5fFzPDxJGq1UftkAh92p8hr9d6gqPYaiwy9ir723nLWQzGMFCHJqLAqks",
  "key24": "2Gy2NPgKZv7zGWmqcJYEckmvaEeZJGxkr8FWZEcvm22jacCX2PKd7JQqp4Ea9haUVpCiAXubGp1mj7y7hpTiV4BK",
  "key25": "4ULb2mcriUrKj9YT4X2PZgZAbZVEX1iUnEfF9nhabU1RWzoCgfdF9qw5KEbKJkNsxjmrz4HXFnEkYKTaP4wcGmLS",
  "key26": "feTh63rdkwA2MKg3UtBgjsN3SFHJQEEE4mzZdWJp1fh9Tsfe2xCTVByKhrSX5YXyVPuM7owBSWc4d2CCcTyHGY8",
  "key27": "3Nv6R4FKgcbenXrA8qbPozJnSn3wRxJ4C9SwAyvNNGhRkbFCxPEX7d8y1M18qyXkhnAgjBNG6bYosqiQKg78wC2p",
  "key28": "2FMyVSszhMXhXaunp5HRSaS5vNLc1UXwmCkPMoF5va8gQz4w52dw7orqwDDziX2J5NCUC5mdrHp6JEjxTHyRZKdi",
  "key29": "5LbiibHnrtnZoFsJTXuj8Sfdmhwi3T9Wan9kXuqrunCAbAnzmzsvmYs9Z2syzYgngr4WAXQtW3awE6Uv65ju3kNR",
  "key30": "3bEmAYfwTdfh8C5apeYfAYYCvDJhedatXoX4UCBPRodbHSSHayGtvyzjzqWHxEqLqg2FisSYAYfYgZRwWcYpRaDS",
  "key31": "rnvAHdA2YnRXSSrTAVfJDEYHk5G8ECNAnsuUteYxrmSSfJpNpHtgsrW78Q5TVUmRE8AMtkzuoV1C2BdUw8VtVqj",
  "key32": "5n6mZxFpp3tsgBNaaFC2hL6Div9rbg74CZ752VuVty73zAHPXooNsCVyjXtNpfiBKhjymaS8wJipowiqAh3yBhdY",
  "key33": "3WbbsxALzTuP46LkdPVJwSHktTYXfZoRCAzhDYrqx7vZ7xAnj7rLZ53rZvHucFP8k5TqnfWhhH5hdXLiuZ6gmY1o",
  "key34": "4JRpUiwqwuKShCY3wwfuNyVLFd2bBeY1fUohx8oyEpwreqCe15K8uQMu66L9oX9hiw21asz7LVJesgc4trmncD7Y",
  "key35": "2KdLvtQqynwatVDEfdV3aKf6t9QAamPcRgpLRwHpVNo4VdkPRcC9whXYbqdM8bA1DapvZHH2otF7Gw6gm6BzPcB",
  "key36": "43BBc1trQJtgzXWbed9ZcVCxi7xspGLDCxUN7iJ749WeQ87KEtJ2HeBP4K59JRyEH2dPtRFgASXeeLYkuZW9Lv2e",
  "key37": "uN5iyTxeJ9ei8bSSow5AATcoZhcX4djom12BnkX6m3nDe4YNdzGBbRZ7jVMx7ZPZUfAt1nzrDq6RdLe3si7w5a8",
  "key38": "32nda4KuLVWFLkidmu1GEyEXSEmh42nrTcj4hSm3cUWB9miEdkjYpj9TBqSoEsSzPMhEUTf4qgstTbDkcZFFkbkp",
  "key39": "AMoDUB3dRcCidz8GTvXk5yXwpEDK5mWcZh64BNYeXTDFaesU2tPTxYyXdLpeZ4jx2RAzah3Zg68fCpa4LqpHGSS",
  "key40": "4p7iL3YFYahduFPhv3vA4aJybh4sgedQgYoZgmzQahoTHCwe9UBR3zrcfc62CUkWK7anMPzYPeiSsKsurhspqj31",
  "key41": "54eAYezSMpPzcmxWqStgZCteE852SP48UtJy5V1t4rUc2E2AufxKoYoLh8uhqdFem8cCUjswW5HuJFxVY8d42PT4",
  "key42": "3GucFcNBCEeChK7nts55EkKVsmh9uLs9qskGc4HwfKYEoLfhJopmaA2m4KURmrvJFbuPrVxKbtw4DAeQNFSEi48K",
  "key43": "2A8msN5HJfXr73w3Nbrpp4WZS2XCNUjBiVzpR1NTsFWwMZXyEDvLuhmiwh9vRhcoMfobqRdf9npMY8uH84bGTusN"
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
