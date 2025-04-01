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
    "r6ow6VejNE1VfSAytT7fHExMxZjfmS1QntLyDz6jTM3eKMCNtwYCfKSWuxonjXJsRBKiXb1Jvqc6uJNLKjVDXqS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cq5gr47T9tpPMdBvA3SEn5oCxJferX9tsDxVA3RHqB6imXao4KRWb4GAfmA8MTNty7CYe9gBrA9HkCfCycoiftv",
  "key1": "2kJ7KXTJLXv1h1EjYpAh19ZSjygULwbAYZmecwQkpXSxiHyThSQSE6ow6M3UruoKVgGuZXisMtHvMuboGiFKE9zh",
  "key2": "3ChBS3WF2Mf5KtebnS4pQdooFeDt3YGApMVmosfB5YDsBUnhJcWX1ww23CufohYPZPU3uHiZu9ueau4KCngZLbrq",
  "key3": "41KYU5useMShEYCRpd7msjPLqiwNp2nVgNB9QNVrkUME88NvT5VgxhLHkooQ1VyzQgNUng9QPmx3etxu4BunrtLA",
  "key4": "5CyrVtyieEP6Rxa31oRszk9hUtQoAwYxqBE1WN56aC7LzSvuCw8tCCHkkQDyuGjbbEaDNTsKqwsjtUQdvMuZHL4N",
  "key5": "3RAYKujpiiRywc51KHC4zjGSK9917whoa4FgyFwosKwCn3PJ7hwoKc9RktJr47BumguG8ixEjEU6NoGdz12bGgn9",
  "key6": "5fSf2mAweUYh27ijM6hCvvFTRCBuZdRp9kZnAy9u5ba9RD4vauWr4DwCSu9PMjn7DnB7dmkc4XhDct6NNBz7eSU6",
  "key7": "uwEh92tRv41oi3bvkisBp3HW84WJFvdh33RQofW6v6WjVgD1V4iKTH4nWLXwxKFDSVGsD3R35jDXBWBtX6k3xRd",
  "key8": "vsN5Uv4YjUrwoRYXpuGWCtakGNdPTqTLv8S5jxc35qxn2KA5PHPzt6cnbHTXRyF83st6N9NZ2DdKMqJhVtFpYTT",
  "key9": "3ADadtDA5MqtvRUwGCoKyP7uKviJnX9S6526tafYmZejMKhJcZFvdSKZ6HsH5tHqvaSt6cuMPUn2gK74qpL7Ui6D",
  "key10": "4BdzdGJjDqfSgrNqV2Qe9uptJJ9xLVJWdyWAixW3XsPWruSjAPJHhCLx349Vu3QAXc97JxFVwnFjaQKucHxY6n7Y",
  "key11": "4cujWv9fAPmptff6ewsxaELFU71sUowW2hbusNanZCAsBMrCa1dheAu2fe3XckAjYBmE2mBsnG8pFnpLcygsow4w",
  "key12": "63k7r5mA5975tMnLcj4gS36QZumpHv7NrY952uHjFqXH1QMjqbzM5NRwQR9JcYzyHazGGPtpwV8RJASQRp9DcmRN",
  "key13": "Q9wBHNQBjRmZ496nZV5AAbZVj6kdFk2hWR1vxrNB5L188sZkbt16sKbJbwpkA65J3FGRr3vPTWhTv4X89x7bM4b",
  "key14": "sx6vasVzoqeu1bog49LH4jixMXhBJA6Urgdckvd8iuWpFigvVNV6nErctAKorTFsmeNkccrX7adB9WLZU3hKuZ3",
  "key15": "2PhVB1HaW3wB5b5AQHiGbaW9k6YrKaSXHtEKE38ZwKtnbag37RmuiSi3YRfBGPvF2Nby8NJFA6tmggXwVmThFbVz",
  "key16": "PS3xT79PDpp5cXA1pRHRsRuPii4ZMdpkKEcUGxcGixVcpWvoqEmcA6Hr24Q16G2DFmzYcia1k1HqBZU21xAyPqb",
  "key17": "4BwoqJ2yyUpEgFm2pyAub2mVZUbXGTqnGvpDxVhM6cvukYUNUByMRLmrT8g1ZnUKN5iYL9wKFFkBHFwZbgmukxMV",
  "key18": "2SxUgd6uMSeErHGjLBxRgnKcUwSm1hRzu3oPkjRfiAEt22BvDNQFc9UukXezapzYtqeqTrsYawaM8mm2Nq6M7LmM",
  "key19": "5PHcEiCVn1k7ZjuQQGqLaPibEtkQ48pbo2kFJcop1f528sG9x6BLPyZJrQ3sGdxkYmvuMtdPxzVQ1zYYffarJD5V",
  "key20": "3DjyiZb6MZsV6dKHGGyzNaZxBbJsyTHNmoVyV8KcvrFc7CWkJYat9EZMz1PRXYDVu17rXgDMRWgWo4dTWgqEh9e3",
  "key21": "24ATH549Jn3abXAjM1FNRtTTrHBmGcRZ4rY2tVQbAHkrbses9hrMkMH2rh7WDEZm7pGfBG8E1Sj1ctSyECN62gfR",
  "key22": "3iy612N2YGSC7E7193QxCfN5sWi3VdBnhogfMxQzqJQHkgr8FhNmLDYZxN36pEQpP71wicyUX6UJXsjMTE1mgk6R",
  "key23": "21ML1txoe9pYjgTdagBu9PEnNV6nehhwQ6vKM9RWQVayL9575WfXg6VjbyVvpwTUCxbmqC5K1sfbVEUzyRV736zB",
  "key24": "4Reov1H5hhmYm8ENEsshZTVJCqgpWpU7SrPeG27k3qptbgR2nqDtR1iPuFdBpfivNdU5ECdcn1LsLFRBQXEhk4BP",
  "key25": "cvnbPS99d8DHNtRmyXt2FbeBgvJivVSNtb89ConPem7eoHf5xxMyBPaAEimAgNY5g9dGZPShg9YkV3DnuBKPQvX",
  "key26": "UjHQwybsXpKd4ejUVHcC95ZsHPiu2nfPztZ9B7nkAgP4LqYSGZ9NpBvFNMJ4j1UsNt8KFxsjA4uKyiiS1rXsimS",
  "key27": "3poH5D5B6gSN9FnxDRroGHpfdcHCFXedmYGyfou2XMDeDHevHwFfBZFPhkuVkzrwykg9cQknhsEtycefSsdD4o4d",
  "key28": "zHPNP1TvUoKxneg8H2wdrM7FEpX6u22MzsGxBNwzceokgqyTTs4w6ApSXvBCWyFDLCGzD4cgDqF2E4JaM737sL6",
  "key29": "3LUUCFL9CNfgxFjRfJqCezZDMqqbdUwFEMckLnEMZQLwiKF9itN5fq6yvMdy3ogmEnBh14X6J422K3ebL8WuWTxw",
  "key30": "5LFgHHMryrRYYrZvdjNNkvgdVJe7qVdLCjMUrYBCFh2c9amqfVwUCRzEHecuRd6Xmdce3MGuujg5CAuL8grEj73K",
  "key31": "APvGj4TVrZtAFSdr191zGM228L4wx39Pj36hDdV5YchHsCXXGsYM74YY3JQA6tBarYVQEND2toZxvQxaAwWDDuk",
  "key32": "L21A6sKzuPGvM332ojN1sPUEBDX83HJBx4U66BK88FzrQPXoe9GKUTpGS8xMJN4GFSuFNd2YAjkKuzCafC19Z9u",
  "key33": "WriYJNsagDSXmpJBbuksGcbTrXTuVbcU7qEdpRkKsbWRU3LQor3HnS3MK19wVV9Q6x18FbfnoxafcUDzGH6zDP9",
  "key34": "3SV5aTKTbhiM7xD4RMrwheQs4k7rp7ofGXJ81V5Mbjxppp5Ei8r32xPhrgKocEyfTZwaze8D8kYopxD1PpYea9ep",
  "key35": "3GtbNYF8tFsie7fimAXaUdieNqW941QQjCjBLGnkNNAA3tZtq9pgZ9fX3DHzbgCBmxZ1LTMXSwXa2ZxdMk9vFu6f",
  "key36": "4b1oAmtBLQiGNupbwK6aen4CDjcXyBsStNQkbTwvPGv1ADEpRqaQTMCKpXgm9JSBqkUtovB7uQMD9CEkmuU4cdVy",
  "key37": "4WPxCfkiigbq9GfH1Yv4vq3Whgcw4f5kyPHKGdMVv9P3kYicotHNX8tfhFnRLTynCKmC4mEud5bnddEPDdax93dL",
  "key38": "3aTFx1j7spT3n1uEE7duQuA6Lcdw5EX8ong8LZFXsxqFF8S5cftyLxZUhDWA2dQqrwnqjDrWdrZLdrbdhAj3yPFV"
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
