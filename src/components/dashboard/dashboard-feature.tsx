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
    "3DWhVeZdp7MfQsjBeoEHWPPo6WZRJmi8yDhGESKqVWbzWBir8fjUdAMKueCEou6uCSFN9u9SMNZPU14DJy9ynUiH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MY68piXxUBs1DqR1ztZDqUq19vgzQDVmcUt3RzQhPwbxF1XCCXzRKp95Tr3vyg6x9KNDQAuiBNepKAk7TKczxkD",
  "key1": "2XEVQtM9UHMLD1A8w8s5MNRAKfR768CAQgrsh2C6q8jk3HUNRGnoahF4XSKxwR8dN7jNmqAv9sMJnQoJ4sgU9Zvn",
  "key2": "3N9rpHxbUqruurvav1RCoomHcvuywhxhthTWeDNZ7YPvCtoNRRk5BDZTuPG53WEW5o6uBUrYyP4KsNDqtEB54qN",
  "key3": "5fTvj97tWobB76DkPQnMYuRHwvveA8Vzvko4iQBYYExNq9b92ehbhmf3GA7wH5JTpFPt7gd7Bxu4bjsTnHcasZkm",
  "key4": "4NrihgXWAhVY6BCfBeoDYCvq9MgMxhxGizSMUzKpkB4PkbESfVJZobRgP7RnjUreuc1ubA7BMn2iWBMHVMu8xepv",
  "key5": "3n3tWp2aTerc6vQh6iwsTDb5HXwAJiJ9qn47BSqL2hjbns4kA21GqQ4HbWRCDWQ3W4v4nWfh17HFnSx8RXxaiEWp",
  "key6": "SCjS3ZwcjznYXEpVX6ruVbAtpEuKzovEtGq5rB4UjG5VAf6pPLHvp7eKQUwvHFeUuAd1N19JcwENnuGJP7fBVhx",
  "key7": "58WyGWpq64jLa9pYv77REiUZvw5g4wHNPTvoG9NqBA2RtSFbimWmGHDks4r4L6DYyLGNFJPnrkNkhM3jAnzuLBy3",
  "key8": "p12dmkDjDZEXH5ax3hBRhxS7Gha259b1ffjDW7ej4bKmNNC8VcrMH1rf8nDpDeSmEmDGaNDtiSiXTWY831Q3oaQ",
  "key9": "Xjd2zinMQkN84DYePK2jFj3KrLtK3FGtXsMUurh2whHTfgkRG3kCAvf5yWarmgEUGKcLoqAKvBLeN8mAPaGeo9n",
  "key10": "3aduSKaotP4W34iaGJrD42tWaqebyaqNJEoTr74on25EKx8YFe8FYinRAmuZbQfBAYoDBTPMiZJYvVLaauE3wSjP",
  "key11": "GNrtULfkbBrCVDji3JuuGFfr4TTQuiuiGshrh5oc4kD8EFDfVXSusFC75911jcjy7SU7E2p5ACoyqfWZbiPAMGo",
  "key12": "5yfZd8ZpsN1GtreKsidpkP8dgvYmswgNDGBQu3h137NNvqnZz6zrcR6xm5MucZLnfmAVvR3k57mwfTE8uFbGEMyA",
  "key13": "GHWq2En8EMBXTxKc8asNXnX2Ns4YjWB5jSs1kWBhdTviU8LNrSwm9HRK8JVnjyCwZPqWmwgcJnWvciVtoFWthrX",
  "key14": "4WpAEabiXu97Ue8gbXNBgYdrT6vsywQm9sHQVUPWbCLKd6pp66ypxRF7nAeVZAzdUfxb4riVqJCWn8z4HRcdkSxf",
  "key15": "aS8FDiKjfkzy1Arbi1cMyuzWMw4RD4KbuypWTJzU2iYobxyL7R9yBuG7EhvDf1CnjLqVeVsuNEAYKdQopUpoqXC",
  "key16": "48YwUUp978wTKXwAhkBeG9yA3tUJjPZYybRNx3e448MPen8JgzusPibttZrNRziz1Q7AHHn43nKoNEC3asEBomMM",
  "key17": "4EC8rpSwse9LpN6sRSpwYGV87ug2EQHnNFsmbXgM1ESJea4ziobMtA8WortJwzvnwjyPNczxsSmGePvsttXdWbuP",
  "key18": "qrGxqZQMCFG1MGgrccuUH1tMKyQeGjcwkG3VYkD5MWrX1RsG1uvvRTstKG8VJ4igzzZuV8GrcuDQMY2xfwwxVb2",
  "key19": "2ocqd85647zkr5nvskdtU2iCG3TwGwLAdJ6TVAeeeP5SkBgKPPY5Qsm6Dki1EgVAhPLE7omGoZJih2w8t9bcvuhE",
  "key20": "62xTZWkkwhjUzK3n27YMVWgqyV4Zrw8MTWJmK8vibER45cARFqs7WYg8L6pXQDNDeKc1uPkqYCC8X7uA1U5fZHWz",
  "key21": "UcW7XNMLyMhA4rmrVZvVnggsW2Nn2oh4XreCiYR48aZQz8qGLt47nbmD88nHMdHk2UEnVsk2tniP4tdFowda32h",
  "key22": "4qdBhPX3PHMBL3gu1jK9wVMWpc3dLTc6qq2KmhtxaUEkn4JTd4EJBtpbDmpBWx1wrDQKj58bDkfR8QJbxw61hE7z",
  "key23": "29Co6iPmqQCTksaPqLyDcgPMFRQhXBSG62VEUB1qyMLrC1tCyX4obqR3i6zKgCPFJC7mzpKofRgvy79oGH8toVD1",
  "key24": "3NY8FPEKtqraCC5YHcBRwLUBMtwKSYzuLfG8T2Dtk2jN7T4wpHWVTjo99F7QbTfJRyky1KRJVZpXWgkbLWNovXqf",
  "key25": "5ZomcEYakceoM2mnoYCmLt2Qrpd88tUqjs7JBCDginKrTcJXwMhaA95cUSEqLZgz9CeZ4ZKApmgma5cZbywdYhuu",
  "key26": "4MsTTZ6YPrbXYDMgkkJtcQyxJiV39tf66bpZiMrFs9Ka9n2WGqCRPUrQdNGFRAhEbYTMa8zxUWWJhUWajKPs1TgX",
  "key27": "5d3fu32TYy5MoVfwdTtDU3rT7upcCsTwXWjbJainSwPjqsi5Rb14NhFraA5sFr1yAMxbnoN7Zdm9y5fGMo79AoFJ",
  "key28": "4JPB5kzQGq5tGCvbKB7NqRyS1KYyxPtEx6S4YA76V4wBnBx9DmeK3xGZEYxUinSvm4tE3ayre4oi1SjipNGKq59y",
  "key29": "2kx2sHVLgFVpasxSseXqCYiQqtZX62KFPwKjbwRkrDGWyFq1hqrqSxsXyeqrFidMTTM6NNq4DBLMQhRhNBJko4b8",
  "key30": "5EYRyjuJXt1sRsrGmZjxiUWKxJcaFqx7oGLnf6f2UEJ8QUGr8WZEhG5sFbJUW58qQwjR1CvKBjB6NGQce1QtEgxU",
  "key31": "286fRAfJkHvAX7GvoN5LNYikVvyfzDPNmuf58uQVPxdTQjCBZWo9SgiW4JfkwP8n4CbnSfhci6mo9m2gxGp9R9WL",
  "key32": "FudcTbCJ3rZdpbyCv6w3jARJyDqKSSigxKphYKwfNKpM9tejCTUzoGbqpgjLWEuCJPQmSVzHpJLdXHM7rcXVWcR",
  "key33": "3ufJ25zAEDjrowo2wXet23k3cj8fHmPnPJ4NqKahDShZTdK1bcMiLFfrEhmk49FwarXZCBTK1xptSV9EiR8bGbcE",
  "key34": "5iskyiRMF2mXVBsutWYF7R4vDGvSz8VHwU1Y6zCqop3iczX8QTXoeu6Ag8Uk7QAAsLW6CmZkt7CKMvnaBh3CEFmw",
  "key35": "4oqou47pTBvTBXRyhv76FaErX5V5nvT2WRteqEp3vYD7Jp3DqdgZ9HoP6PyDY35jz262QCjBbwFyQyqNrL8NrGew",
  "key36": "Q1UwfzfyemVCF7wpGfVDRDNUimkj7uW7d5VtiPipnBEB7tSKuMhjXABGn8K8SNYekBnspkWsWGB3jCdPGe6wQ7S",
  "key37": "46MyD7AWhxqaCt3A3CFMVxkxsZZ5wGDSDxSxaCRv2Qmtq8HLtweVm5zGTYVUPe8Mvgk5r6VZKDb36mYQJYNNtikv",
  "key38": "48nJZJfM98ASPNDhrsdZvyDxP8ps4wJL4AqB6nYbDZ7zyiaxws8cPthVrMBySzZidb5uN3s794Tva8kxB3UTWSYa",
  "key39": "eRpY8C8VXgam5nLvts5sup72h2S6DRjZVp6niCBTLfHzAAwiELQqqL8WD6pMVrK9tHLze1iqUk2cfo8SRCN1Yk4",
  "key40": "4qkZsB5zkZPBjGmTnaHEtB5FyWCcj2iKUzc46dGXWUwkDuRhVrvmehFzsFNCUnQbRv2EDxiZYeAgcLCup4kr9PLv",
  "key41": "2phhbzXgqsLSZFjxUVph5cBTCPdC9MT2MVeGUjziWbVMFEsuUujwGnuQWwZKhpyfPTxaLow4vzpcBd7eUhd7Gahy",
  "key42": "3jKjtqou7hpgv8FhBWgbMJ6JXR5S1uCLi6B11F65oeZRxAPB7gsmHKrd9RGus1oXWJkKP5wgzkdsQEAjG54p3NBu",
  "key43": "5LuVPTHJrZbcXKcxVTsqA5AXWF9tNBGtRdja71nHvABxwcTRZZQ3hhRaCPHneV6XHmVhyq4gB2qUFdwPiwm5UdCU",
  "key44": "67fL3U6dtSJ8vU4LYNGTTkSYNGrzwM8L7sri8UzqSWyy1uCuXMSPrSRfCrhuaKTd89jBYDUtRbohAECehsfPk6zB"
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
