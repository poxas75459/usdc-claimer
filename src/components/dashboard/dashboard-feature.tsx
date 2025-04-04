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
    "tc2SXf5bynxxkYAp1ud5xFNRotfUSoq4T8ENJ71htE1eiDbiHkPE8eKkr5FKHvcCh7ibeuLNXhYRmJENcZnADCK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jXCJmpGMSwRhBNFXHwXWcyEDHLZhVkFK8NH581YHe5Wwmx8Z6Ai9UV3MPy9pGZ8wjJTeZSjDoTNmbuCQkLfTA7m",
  "key1": "36Jmnq9GpN2ft8PdRTmYXSNGzojUJSrQm7RYRqYDyXGC3awPasYpvPK9WoPMcYqEW9sZtFk1gu3DcHUFpJTnibfF",
  "key2": "4mXChMjNieH8tJpKHXCVNpydG87qu88jNUpiyzQnCoQAoC7JgJBxVtYeFP2uTvj5NN2JU5JKRdZP88Eh4y69oFCM",
  "key3": "3u52e6byCVwTix16PMMLp91YphSxm1pkFgdH1yt1awQan6gLtuMNMnBzhBixXTLPiuAC1e1Sgu3bdWByvqUuxZ5X",
  "key4": "3T1aqZ9LSdZm5KFPXsZkVF7Qoe2jdewkdbTM3NbMaSTdcaoWRMUh5xQTt7WerHnuPBHtGZiMcgQPmBofookaxuAq",
  "key5": "3ZvmDb9mApD67BPuzB5GCFw53163jFTg2CSB8dFSjsxm7shPznvq4bLrs8qmEzBcX27kRyhFbtDKu2Brwhkur7Jp",
  "key6": "2MMD4zhSdmf4tzw36yGqrV7LGwLtaQ4YRSfB5HL3BBmN7dXE99rgZLVikBwNcHwoCvQQXh2uFk7oeWXnTqN3LnSM",
  "key7": "3KWd7Yik9vNftEmA8XCrQPJQHpY5ooVVjocFGLx6SUfgea1U42qf7xStwmsfUAsKqxzLvnGQJyTkguqyy2vJyFCC",
  "key8": "4piweRSE6YKcmMmvLQipQJaYWfdAY6FTgrveGsHpPnzqKujgftryXKRXxTbX1eFeBVuLceHRghWxBSGJ5kDPJmKx",
  "key9": "3Q5HjeBWsf8PvtppnSRfC6jWM247E7Kk4tMZ9jjZekEG4L4o18Lbmu8mh8prwVW3z3aD2WEnrxQdniiGhstneMB5",
  "key10": "2xk1NLTpYu1TxxzfTSaCdKM27pUCkuiC2Qv5rAyNKf3c6LhWs2dTUmXVACtUbWavrJ8o7T8yBCgGFh1xJUNc5zLz",
  "key11": "4UutkQqvEGiSLZjGt5qLZ756LWspuwxjoK16WS9t5JTzQD7j3Dxxrc8fSHfDt14zqqSyzzVBS54z8VHgU7d4PKUt",
  "key12": "3kKv8QTzvcYvmV2LnseMAb4tSLGchwtFyrZJXevrGSenngWr2tkbHnvfZVE3DbLfZGWpMe9UaP6cRTFgVZpEHKq3",
  "key13": "5YQXydmpZDUuRnhdxQUb1Lk52HdENEB4JUTycqqxQHir7Mqbz2NgH7vGyLgpVyncBDvnroiS4EtPxTQDBUfsrBuV",
  "key14": "3F2njaajdpeYYKKH4hU5dxZEGxUhGHVxb7VZ3F5ft95B2cqcygwv3KzYxMa6Z8bNiaqhHqJ22ixoHQzteaEpQeew",
  "key15": "NV584NzQxCDf1ThQpzoEbF8iXoKq5hkxvJZyDkuKA2wJP6TDdDAsF9wMY58CGmrWLHoeZH4A2NZMCqXYLGwYrq3",
  "key16": "2uBbyPP2ViXPoeMt2UEsDRwBcLfyDqgtWMRehEabyQTGV1Y27ybwXEYULK7dwCVSrDttHC1rp6CRJWiu3x5VAaLu",
  "key17": "XJo6miboNsxyswNMo1iJDcCV2Mhht1xPStH2oFUTRFG1vhdy9nqYNLUuF8thhXBBfn1MG6UGiWgmtd2hUNusjrr",
  "key18": "5mfEiVk2XDtrCz9HJARqLvu2fogBBxvftnpCkWd6UsQHoigNMws4N1ZWzLYH3Sepem2kUw1QJrgF5R7dtWtQphSx",
  "key19": "4sxxHHVuHjWgoDCnWnSHkAtMkhh6aGQuCm49iybE3TCnR2bDEP45XSKE17fNW9xsJhEz6W9aXrZwGB48pkSXBLAb",
  "key20": "yZeB19er1pJd9GH8PYiPifdubAGDWrFiR37xKSnhhcdefd9VWUd2cQLzdba89zJfRRdPS3bm5YDB6w3T3EZugHz",
  "key21": "2jqzkR8T5ApkRUW887mSLVJAMwGvSRbcSTJBSoKexArnnwjgqYFRLmZf5q2a5DfLCpdLemVtsAEppnjntYBTRyEM",
  "key22": "3to4grVradGXjWa6dBDpttFMHiNkFMCjRSyRv6Uc932CEkZR8KCZQ93ot5b9KJzayTyT54Qh2UArpnJcyYu4RZqh",
  "key23": "h8noUJ8kv5cQmunEZeAK1CnDcoLs6EsDVRLFTcsiZFwkZ4pT6ewyKk461L7V9VzhygGk5JkwQ1TKykGfXwkmgxL",
  "key24": "32PDefh3hCbbDLosNr3W5uLgGemj4Bgb6KM4zyjKnzPNwJbABd5tnTjLiPubSQSmMsquT9oKhvYhjmCqxFjavQx8",
  "key25": "5CtJmdZ4tgMJMshrckKhxAHtYTc5qrqrVckdxHaBppkifdaC48DHPuCgJ7zhoWFTGNseAde83DVpoou7kgY8AbsE",
  "key26": "31mXmc5ba3sbrbjKx8evSM9FGMspb7Ary37gs4ykLvVX16EYPsrw2yQ6KQoaQoWknWukeggubKAg1Aqk66Uo3via",
  "key27": "3EASRi8pJmgsMZPPCBXembsMQ2XiPGs5RDYtDAmsYUPxqdLAuMPjZEAtAPoY1xtEg8WoaHTPS5AsrVfCya5iq2KN",
  "key28": "27JaQSv89oTPmXyDQwajsQ4mLXRjJ97wBBPSDYbz8kYRH7NWQtMQZKEpRQs4q167p3ESVZuvNu3onrGhrAF14JEu",
  "key29": "46jZXAyQgqtxrwthiNn5Fe7N93YeQMFRQYiS2jXU4ojno8SYjC25hqd98ayvTGkUWYanLYFpRqLe1F6r7QjoX2JF",
  "key30": "5vjZx1JgqhN5y39tDjDYG9CMPAcZE1FHfAKt9Y9yRdkuyGZAjqhxwcHjsqqphbDoLJJ6TtJ5Lw8EifNXGbAh5WQL",
  "key31": "3uzEbh6AhxwUrvh2WnnidHPwSNUGhbk5qZiy237RBkUHY3qXJeQEpYQHeztv2DT3258Git2hUQ1FAELgUWhFHDkN",
  "key32": "Pj3Sa6yXuynCUsHkxQLi6c5JQkFdqZVbLVyFbiELyA7A7Qaefd3vAGw4t4YSCq4gQNSYnyWbwRDtCJkuP9kKCXB",
  "key33": "3ycQYa4s4VktPQx7RrCuHsrXoRvf9LYGwSps4VdS3G1odHvRHFYcvMg5p6s5RsGMPqm8hb5hgCCTJm7v1V2rUgfS"
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
