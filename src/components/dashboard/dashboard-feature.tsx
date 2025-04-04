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
    "3nMf63P7aSuzm6KXGf2JW7muwCRbiuHBaMLansNtn2NPo91iZWXV8YKURUagxNTEjXy6dEmWHEyq4EtgG3QFeFFw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VDTqrmm9A3yhBtjyQgcCkHceofB7gAdJTB6MxVFtqdb7PmZEBnDBFNftHca8ZyyVTRtnRApV273xvo39sDCAS8z",
  "key1": "4J3u13wEYE157xMHJqQApb8VahyMuBFfLgAnALsQCSCgRfWzU1ndUELvy7dMsu5hSKTLvw6THMipdWXB2uPxnZpa",
  "key2": "5iGsHwdVQhZDVDn5UounxjKY93o7325xqr89Jx4Df3wSkHd8WbETFiNCghZCgmknzJPGZPRWmSfap7Bn52vv8zXb",
  "key3": "DbUT44Hjc7vhXKXtPBtR3u5fAcswAaXgLGawMr45i94jUS6YtFr7LZBmB42LcSvERRRoWNArXYHoA356CH8v87v",
  "key4": "4on6yojrqiLhWf5GfZXg4Z7qWdcDbtJ1riUALr7R6Gq3jkh4yp64d8uTgNJCzueC7PtU4Lxx458EvD8mZ8ZmTiQs",
  "key5": "kTD4fHcZj5a7rjzg1Zwf7MQ7sxjTnrttomxXtS77wbPErAsoY6hX6v7GFqr1bwj2tBhCSyJeAiGtAazJxkwmJ7h",
  "key6": "4YSEexcerWjC7VGUkRrEwcokQ19Bn2BNS3YgSBLKoAzDnRP3ZjKoosXWnVeb4fXKzq9zAGLh8bZrV28caCiyy2Be",
  "key7": "3SpSwaPXLVmqN8259952L8CDkQmZ3PhJGiQRDm88T2NqgcDGRCKwJqydtrcNM5YkTN4b7MHNVDwSMpXVhTRQ6uct",
  "key8": "ZhxqgY94LjYa82DsxxmcBa9jR9TrnmAwP6zwwXuWmVXE5jjNywGySuHgbf3FF5EJwdrLQfS9FCX1qpgv7pR2bNH",
  "key9": "2A3QaLiWJrL82eEiYWWCrHYqkmwp4QdbhyHKoC7iGgaPqXhyqxyRLRsZDiuJm13B5S7UkP1QrLz9vh7wHRV48TxQ",
  "key10": "395ZzDJNRPno9tXhPmfT7atDWywiXxMM16Kfm3LbQD9PmKiuVzHkvdQFBqabzzY58ubA1z4aQ4t472d661x8qhmE",
  "key11": "4W3DeVNWFHvYrRiQTpKYfhGorMJrVowdDXbuvhpq6qqEWcphCkBVrnhE8q3CZTKgb1udNepK4URVNjo33mJfF2we",
  "key12": "5hgzQ2UMHyZd3o7cwQxNoEbxpiwqu1vpxyvMQoZjx1FLqUvxvUwkoNF2rCHtKNcti4gxmwxNgsLWCxtskM5isXTn",
  "key13": "56AcoRiyKktQuqRjfYnUQDepUjX5h3zz6NMDghXTJa7uh7zFsnk5GWkMnzsNgh9keqLjd4DkRVg8h7m7Je6RNGZ1",
  "key14": "5pBeW3EehXWb8GBpz9N3CMtNPFo4L6XzgTQPenMNyqs3daGQYrjPHtHY56BjJGwhkYxBDoE8V3wguh2jpn6Ueoxo",
  "key15": "SnVmcvcc4vnBXavsKwzDLtsiEeTxR1wXctSgtZZkM1e9HnzZ7ok2MVHykmtPRgeLNsZLtcdk8WKrFarp1oL7DPJ",
  "key16": "A6iQDhaudxuzfaTW8zQdzaWv9AjHabk9Nm35e5LFJ797rXS6pgadfTf2J59EG6wQPmrNpY8SJH1imAhBWYz4YFk",
  "key17": "2MsZfU7bifCzQAo2471RWmCQs5uBnaWe8WDm86eDyHqUWfVhCBoK9uysWxMzYAwA4vbHZT7pF5YTyV7C1cW147bj",
  "key18": "5fbFEZQ48qFV8UtkPwBocU3GXJUf8WtR54L1MYCccBHAwBzJWeak27TvrNUXhBmovv9ztgY5xGxTKL1v9caUSaxw",
  "key19": "2sVdqZJLrZywYudMJg2n5UfH2vWWFCv4pyvoQ9LdhGAAQMCcGJtwFZuoVpKGPSBn1frMYGgBXZzDyhGaDFWoJKMK",
  "key20": "62kbRboeU5uyiNNp9aRAro2LGjpLSePHVHKZ5wiTU1tctno861AGapzKp3vj8cpfpSDZ8Wpb5rHTkhEJca4so3nc",
  "key21": "5ffVuQHraun47mBkuAf9R1edkdmbTJ1vmhsedNgCqzxan51wFb94rLJLeNwZACedEQCfqXBzg4X6dGqHPBSY9kTM",
  "key22": "7KmCeQQH7BkhhZXYZEk9J2nHZz7EwVJgzQxDJ4eUa4sCbZBq2de6qXUWPSJejJguX9pCyQ5RU37RAiEPKKDP7H6",
  "key23": "3HP78VD2VZkNhDsYw3JtiJfKcH5oQscgmoscPvWHiQaWD1UdpxF98qFVkRu1HfshTb4mPYsbbn9RutFXFxVhmrpa",
  "key24": "3SYLwk27bPWwWoja7VR8bSs6qDjrQFsmkTv7FTXVdTHsDbzMmqyCLSxGw7hiPQZLW8tx9bVfvEo1vWeptqSJXoks",
  "key25": "4pFcevtuLcNxYW1si6X7GkjQjwW166W7WRqsxD6kEKhaSPiuzYNTUWF8tSKBFR2vNggEd3TBygJmJ8ceYpx1pDKP",
  "key26": "41U6Gjn8Th9FZycZH9mYNVsFbb6qVuoYDmZgy1iawAZMCtKooEG2yMnAWEt9wsTCLZP3EjKQhkMDuR5cQtyKhUhT",
  "key27": "4JKfUKaSvTqghzfVPxYhwNxCf2KpnH2XpZZLK1oGwQQ8wjecEhVqkR7mKogkR2Fe4DwWVH4dtsVJzF41RgwL2Bz8",
  "key28": "2fhz6MTV4KpYxjgqkFCvw5DQBargbuF7ZCMhLkh7mn7E8drioTsDdfYntt6fVD6jVD8GxPanep38kv8X6TwE1UfY",
  "key29": "3v98vptxV37Tgp2on9AnV17P6yfnjCUD3bbVoPgagjJj5RSw7Gtsjp5x6ryZbzJ5jRo7eRKNajiVwMuyFydjGT8v",
  "key30": "5AMTGrcVvgVBSZrCj3x26bSBwXGL9vKwvnUjQpcRXtgfjfXXi94r3XskRm9GPKdGw8Fg378ANbbws5U964EDxWH8",
  "key31": "DDRQ8adsonBTh8WtaWWXctCrTQkGaZqSQiy49CX2eoTFtqh8rZab2AdWtqdMcfJMgNwjL76G5WgcgQonoQyowB5",
  "key32": "2nA7fKgxn28HMFG7PzfigPwz3VZEtYFNsfBqB4iJBX7Yr5zTfFnoSaMmcQV4nqcajdNrvMQk9wk6ASMdwopcCXj2",
  "key33": "RVDuA2qVFZHGu2NgqqqdzC1hBa2UcBoGMW2WMZudeKsoRrTWAiqtARZVjqoCmMEvMto8JDtNYARDawkh8rFh2nB",
  "key34": "4gxu4s4xmjP9LMdNeF5QjpQ3SX2iQE5KSNY3GXNAzh7Pmphzsv6EnemWs2LHdeM1qaLs48DYHKeg8MFCRscFtHhU",
  "key35": "45gN52ocWwU1BKRohJNG3gL1mFLEJbiMBZf1Vu3hnnznLvgZYW87yv6oP5q9UGSTxCrJX8nj1E18a36VucXQWa1s",
  "key36": "3vP6trQtDwLmqrSJWzvrnvzAjZrh4XDVJrVCsNRYXLvzcTipxQi4QgLjLBjdegJDDvcCNuvnxjVb8A9oGdgUmunJ",
  "key37": "YUAw6MVEHe4SkTaQ8pc1FH18mAfPri1g6rBsYikk7dxf6ec9ooP44faNKdgp7Yp7gCorJUnFLDrMVqPfuUYy6Kq",
  "key38": "4XBxKkAFP5UpLwATcAzUry99rbmVh6ZdmD8ntawXiNpRjjgv3ev4z9NJm7nntsGy1oRReQiMJS2QTgBQG2Atprod",
  "key39": "3HPwGrHgXqhCNYQgc2MBXjj9Xdx8BWjXoUbWa34KHS7Db5Pmrurx413KvcQpAvRE1c9yXdz5qTPJhWBrSHBcnLvo",
  "key40": "4aDDPP1Wmm9JqQemLZhsYbHksxBYporaSNoBbMp7aLyhztcjAWgG3mmfBbtWr3ZoqJ6BKWX9d4DKVrT3WiWgc9AW",
  "key41": "5tPczyzmbdZpEcDLbhw3oZC7KALNxnY2QpWQk5Jg9W4GR2opF2jMkTi7LW6VJgozjGtTkrjF8wj6Fqe2cb5yHM5S",
  "key42": "4fU6wzozFKWGBU88oPeNXqVX7jt2JBMMui3BLiGFFiLG8FivYkehs4TUJa1cxm8WEDjB27mGqb55P7DapnU9iK45",
  "key43": "5AXFySMCxaKj64qicpitBwKpzvymPGwiiWE8f2VLNFFHKcAuyXf7wtbF8HZQswbhJmiQ8BDtnMfaPPYkGo8dow1v",
  "key44": "5K1h32MoqmshcpZJYNVRzAgEfK9AykeFoKCsH5g8FmPDSkjnLRr2dM4AoYj2MQ59qEkgSBo5zmEM1u66DHALnNH4",
  "key45": "528vj6AQ7RM1NbxgxNFCDDu3G72jwtcaYhV9EcpgVCejaNP6CAw2ZjbQZhtr1XSxxnrhdBq3jcWCZoQ1b3n1R6as",
  "key46": "377s8Km4KJ3ZGcousgs1fCAZaz4oKk5H2F9aVxAnLdaVfegvftaVnSbjwDwqmiu2Wcd2NUYN1kQEQJEguw9MMtmw",
  "key47": "2LgwnhruG5GDCXnLt7aFZCpFFQYVPaM8yRBi5Rs3Q174nv6CWKY7BqEcY9frC67UMCMNTsJV2NzsPibXc2wZp6QN",
  "key48": "ikGkQz2TKrhL2ihx2JweAtACHvomfcRwbzBHX3K6S445y4zA6vt4utGjtrvyiXPZM2Q4XgmTmEFJnew6p4Kjsn3",
  "key49": "2iaZFqkfhdFRHaRTkYVX214M9ZZc6g7DxtoLw1fPfSgR6b1vc7ZEQdSLBn8uuECtVdP5tKtjDrun2rVt8PTfL6yD"
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
