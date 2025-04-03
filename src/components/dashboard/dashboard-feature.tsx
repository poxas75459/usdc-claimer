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
    "3AEsF79EcjdmJna7qQVkE6BEynBUKSJpo1N63vgPgEQ9SVpSS9pH2DSnmtiF7LnMvEG6zq7yRNSo8Xqbyjeyme2o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pYtAy9dHjYoCkEPEVgnibsVtSAqitsUB5RusRwVMGHYNqeQagid9WZRsQJ1ruPQv388P5GL9xaSGB5DgwWN2DHe",
  "key1": "4AhQdHRDk6zkM9enhVn7o2fs7rSxQAzqLxZNg6TxkdwBrQrXTaXAHRCfEopGcvXGuP9m8uJjS5WdnW6fUrNXeNA7",
  "key2": "4yLFPn7SCfaRuQgk1tBcCniCtMpVKJLPHmA1JiMMRG18D6mxJ6qmJYhTwg19ADBg189BRqqJYWXYxgWdgXbUn7HF",
  "key3": "5PB3rh6xqbjLhsUHyHxFqErcQ6Era4xmyrwQT4rcX1aRHomGJSgci3x7k4sy284XeZZY3Q3osRnFpuPkie19edD7",
  "key4": "wmt4tnCyk6YNNiCHRXNfRDgvynLwGvE44Wj27EzkW8g2GX65bmC4MSfykCoeUBGr2rfxDHwGMSbmUoLPLAVc6v9",
  "key5": "syZxTTh9XkGJaxY4EBrawNbPQYarFeau1EyVYNHp9zAKJLrR7mw1tM5wiZ4P2wMDLKRhQNjDKJg9K71vrahTGxe",
  "key6": "ALzGvGVy6D1bD7xQGwNRGs2wWHUuEmNu3ZEd4bjBuXmxev5Aj7478825ZChN5DVe7TpBfpDiSVPe8pgkGhc19vj",
  "key7": "59xCZp3sLc33exMepccJ4wVBT1mXk8acJ9VwVrZBGgDSxjLB2RmqLWpNtME93jUjdUp4jb1NkL9SVDHoDBaW3yUx",
  "key8": "wPVgV5c8pW49B2ySCc4uyC1tJUaCLG4hpH5cvZBhVw5Wg2EjXxoPvSiB5RxvyNtuv6dy95FWsoWyHwaLZ9YeBBS",
  "key9": "24x1rB2Uj47Dcfsppzb32fU7V782vFFGMdFPSEySXmSyGX44DWzQub8gysW5FV5yqoKbdoKWPu9pyNvNRtaFjkJc",
  "key10": "4gr3Wks6Euoe26AoPuhtbmkiLafi1DsBFa1y9BWHhmD6fE35an7TLcGho4EoHjHMavRK2xZZnr86RtLamZE8qZzE",
  "key11": "4zoAHPTs62vYp6tLNse3A3SPZDTuzJeJKAT7P3zkHCnsnJ1onjxCwXrHE9NC2319gKTUexAwp6wXJnCen7xaQVm3",
  "key12": "4JuogV3hPYiC3bpehXz5FgBnXpmW8Ue42rkJHbb6N1MdQz1sPfY5SnkHfjD2uc27UgHh2Wtzq2MD6GgQH47ENmHC",
  "key13": "2tgWMhxwo29RiCgQhSfpn3agfrhQsHg8hyrKAQK7uLiatJF2nuH6eTzQm6nk7BMxHzBfeH9myVTkuRDgWpf9bnX4",
  "key14": "4R6EYasLHuL1nz8Vt2Ujg1EJ5wDdeFJwB9exX1ZiyqApL6kGixr6ud154xUJ2NE6pM8pBnH52ypMaDGkYbbSLNPS",
  "key15": "2RxExxDR2CMMqq7WYdbJDTPta83TTqp3XXEXDryqNhksECGVAQFgzYn4oae5a3xhysHNVdFSPMBgVDZ4kmNhJq4C",
  "key16": "4UJGvnWsUh3h9rp5dXM6nNUi7QWDk71YLrVtwLiNyPnku7Uo7fZ6RUyH2ntrRyBBH4xM994kqsSC7XB4dPuEe3ou",
  "key17": "35bYXmGQczKPpbuCbWFfkE1uk8QHyohPmHKakyRErGQ2ZozWGnLzV8fSTVmQqgXJRtQc4qK913e5UhqXhkpQN8dp",
  "key18": "2i1Qi9o6mTRRR8PqCATREZ71WbtHPaGFUzSVgbmDsNtBCbyjkRWsWdMvysT2S6NKqrKpJujCnT3nXTGQD8WzF4Wt",
  "key19": "czXq7nn3cVhML7QGfvqzUVSPodn3F8xQ3b4vWK94NrRpfsMgec1skBo7hPM1HoVgwx7zYuwFQ9NUY7DsvSdEWhr",
  "key20": "3H5duSimLCe6qEajTrRw9tqgnLjNn9Ka7MdZF2dbGaW6yN49ZvsA2KUS2N792jQEsF23M18ZdeuSBGWKWUjea21X",
  "key21": "2VwsKy717DL2cQGGWJtZmMwWKxiRVg1TeMZkNGMi21bWBqA7jcsFczZ9CBwRqfKtGtWfapy3Aj8C1GceP2yk6TgU",
  "key22": "4nWZ25ZGLKzA2FgKiHZGLSUPz9k3xDzxbsDdekKkSMHmZZDLConzVvVPW7QQ8m1niLe1hTZsbMbME7B4h9457uhJ",
  "key23": "YBgWAchsWSqJC9SBk2u5d76Wjeh7HkMrP2qFKTD4RWJzrQUPYdYQMoVHwm2HpyYthC52FXUgX3ubGzoKHs2LjH8",
  "key24": "1oAUGHnzt6QgDwWdDzLyUhT1wsQgbbj7QvVVjbFaUDAPiwU8jRn9iEETJfWYz2nqAkSn2R1ny2G6yuGPcnXrbnA",
  "key25": "SRTXci19z6yEpmd7Zv4d3xPCs5twUHJTSqtzrnERpjL1EDWgoVGGHEUpsVa6fNS7exiwAEr96ZgkMBtxRi8kHRs",
  "key26": "41jbbZ8naPYfWGcv8DwdhSEo9bup1VpQASYyqfhefJp2BYzgQmWrhuZ5bpBwwFTYU6pa2FM7mHVSnRZSCegWGocn",
  "key27": "2rZe2Ap4Zpeys3fcevqNgWdueTg8bxFtcLvyisaMvXHGpVbTr9Lp63dXGoqfTMwgXCqhY1Fe9dNJUqH6Aes7a2Zn",
  "key28": "4dXCxfRkNT2eDs9VatoNGnz4RG5i2TKCrSws8KRwy6SByYy2Qc6aQq5SJqNGXSyqi7B4msmAiuRuF3hWW6ABQQxQ",
  "key29": "2Sya3uX6dQ5q3e3AjCotoBe6F2ARqmH2nPWyq5dmkTZSBMhsBgnpSSyQpbtZ52fzCLp5NihTA5YSFCRnhvPfM1jG",
  "key30": "iYjDn7W3e5uZT6Hqa8tS7qviNter1Fy6WeBCZWZdYYi7xTK6b9R1SjNWbeP1HNMuSm3ktfnCh8s6YotTnxWg7vJ"
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
