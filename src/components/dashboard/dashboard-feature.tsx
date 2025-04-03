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
    "2HaHLxaohPFFoRgQYkv893GBh1q4EKnrSPwAVXavVhURXF5rcSaEVMCTM6FjxV4tt1PjLRNPdSLzK1LfJkUsx7qa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29s18rpZq5iQSaFxQ2T9N5hBW4NhwUxZUjy38duwGumPASYFmmtsQFp8EFwnr3hBkBE2PWHD6VCjE47UvXzdj9RU",
  "key1": "2pPRU1AQ6snyYwuh9isevydcdKWQLddeWQfkNpLC3Q94smXMo7iZryis9QsEeWotA4KZFGeNCxpsSfn54i4YaRmS",
  "key2": "5foP2Liqje1bpt3FMnYdR4HQRbvkRijNzKySJLk9uACytRZHovuDJdRmc8w1wFMxd9WCaqdvYxQUD8yGBbvQcfGz",
  "key3": "4Wn9YsVZP7XYkMFDhQ9Yn3DaFKoh1jkRRQjToZiXHYmBRY56NSr7VSn6EanRpweuhxBK8ZKYNUTn1SfAfpUc56Be",
  "key4": "3B7e89XAyFU3Y4PpqjAmH1ziYsra2gjM8cB4BF6fRcPSYLpKeH4N4ogWrbdwWL9dJC4M5Bu1hUMmWkyeRAN3iKKE",
  "key5": "2ejhKphCZ45X2uCJwCX4LcWcqnZLMER8vtqj6BoSSnz4eN6kPcaAuKtbyqDqwHizi64K3d8aAA5XicTU6Zhiebi1",
  "key6": "2HMj55u9TE8Eizfux4QF7VFtdvoK1ut9hbcDGKkgrwohPtRGk2PGkPPVqaKYSDLc6JG5JJ8gvsFaspxbztv1WNbu",
  "key7": "4JiFrEthTkQwWPEToRAUN14MrWHYPr1sgxStPbUbspNfqQHKr3xF886NfNAi4jHCN3UxJiPu7CBPWZiyhvZNRodK",
  "key8": "4NiXUbFgZRjGKyQ63yrX5HWU5SzcGFayRnFb1NU2DWMamBg6yC5GNDzERvvNL9yMMZG7rNzgZh8SjXT4Uf7pGU3R",
  "key9": "U6qtMtKwP35NozUGxmBQsG6YvAETJ9SRqMGjZkJWCkkwaHbXvranXHzWFKQTVn2M4v4tPbLCC5hMb2gZSyakcsi",
  "key10": "4RaJyXD4KyLUe8UnH64XuuQXMnsQ1cQ141qyUJh8RvB6zM9LXx9qwf6bvWXGY3P1gRCUTWLYSz1Ge2iuFmT7ANao",
  "key11": "3t6Sv8G5UBnixqirJ4x51bLE1XL6nvbvtxXmbNtQ2Y9NcVuT4F2DUYUe1L4e4waFUsbYG4G6yoDDHdhD1jAoAHta",
  "key12": "5C3gUuHTH45YqH5Wvx1LtS11qVioXEsRepBsquep4gjUPqsf78JSiLrbpmmGnz7Ncd25xUw1dZe6fjk8SJ8qgoz1",
  "key13": "4suRwfynHmkEjGzZ9d7KwaUA77SPDhg3p4JYC4NmiHszoJxLzRW9egKTvsRUjw48UMsaCuBViB7CS8TFqvahsqQG",
  "key14": "3XFUKkeWqz4Yk9ZizMRehtDN1WJuTWZsuztfHdKx4UQLfRLKit5w7eQHWZhf2R6tbQLWBqcCdf79EexZQxvGAUW5",
  "key15": "3wygWvc7uf6t4Zzb2HWUshgHgvb8RNpWQ7iB2aC6a59posEzUsJkUyiNtZTNKai5f7w7higuvWL8rj2vJTxD3sFW",
  "key16": "2t5PcS1y6QQTvAryKdMK2LujiWaoXwQTjrtk71oXPPBozA5kx7noX8GHhQr9RuDn48ZxrtD36xQqBzD9C4t1Eqjn",
  "key17": "5dpCmLV5x2RGeUXYC56tHWQYNVoFM3E8TG87mJcef7t4egjYLNpKz6NGq9qw63DUvxaqmFfyDdCCBt5TBXaagesM",
  "key18": "5v8N2ACA8frUpwW5Y4YB7guhsHuBqSvi6t8aDQn2eWXKNobDbnWJSzMNgwBc52B1UfmAk7WgNMix4s9MWjjknQdF",
  "key19": "Be5CbeL6cwsJfcam8HNmtvCEpnYToDdBfghr9Dap4pqE2SNDQgpZHiLj89Yedj4kziUuMimJmLk8KX6DwWZZ6EL",
  "key20": "2ogRkehxJF3gp2dTAuzkLTt7NduCiwSgNbA3cMvZnMaZW1ZsoyDyNZjvJiRh7mLdpLnNktbDakDz819pkLg2jpJt",
  "key21": "yR4kkkxgWBpG1nPzYADYQQoZjCn8mzHT6pkR1VKRBQtAmrrz6SBnknSrb1vWX2ozMrbyT46vPZQDZmbbq9B2Eja",
  "key22": "2ShC84gKUE1LNtJvA8NefavTwf8PfUSBiVJiTNGWYecvzB3Jc78ixDXc93eDEU1Yokpi9eqap6fYt3eFjFHTH6Lj",
  "key23": "3Q62eCGSMS3niW1QZxByNkDBLNsusdVXajC8WzCw5c4mGENh6rJ1JbEA88itgzDhWNWiY9K8dTabemc3Fe2Kv2um",
  "key24": "23YFMtNvA97UEte58Ti2ubNR2q3e414f4MLCX3U1uKrya7T3cwWjspJAL3HesgG8hA5qYj81oSFseF5siNLGEKeb",
  "key25": "3UZ64njdfNRP4nfMf8WrHShvoUWqjgDKAH9n5FYQrBRtwyApx5kH2KVGB2uSPSaxG1DwwqQUN7JHtaqXq7nPJAtQ",
  "key26": "236GmjLKmKkSHRMXTZX33HKMh98Q3L83wmkFwePSRie99M5F3Kt4tecd1tPF4mdh1J4L3xjktq4AtAc95GPuzvm5",
  "key27": "5U1vtruKhgBLKD8nEMrof8YpVsb7AZrhNbyjrsm4y7YAbG3Q91ehEF2UuiShyD2FUbwWoMHNyRLHdpDsFeQT1BkE",
  "key28": "3LLQrmgmAUNNGMF7h5oDi6j8jgNz2wq9R88cTZQ2DiteR3d6PLnmPXYjh7mR6dFnsGQs5NVs7EbAyG84ZPmzdDET",
  "key29": "4QkRVj5VhWUNFHNdzGjsgHKW6kHRLsENJD1ynN5Wx3ckmZWiFdE2TXXvctr5UnEFg1CUwSF6WTBJzDLeNiRhrvKd",
  "key30": "e8H21vBc9Dgn8um7rWGcky9pfF6r4Q7UbNCjN7f4yw2vQ9ovp6oLXu6mA1pHboLp4VXKubm2R1ECwG5bH5Bx4Gj",
  "key31": "3KPxuyLnfYPSTn6eA3FpdefmGSd99X3VGZ47EuPBf2uJ3gLrtRSzyPmW8f3ZYmBSfhvyzWe8BZJegyvpFpGRzz9P",
  "key32": "3ddEMgntSUu6xaZEK7zwZRbm6bAQaturrBVn6hLhtKH1vL9DJFQnZmuV9hRkrG9oetqDiC4vJvdYEP3yKGbgYttS",
  "key33": "8yhg2DDWXbfmwcWqqHr2CgXBzgk3tjFiZVdVMbZWwFySNss2NhY1QzDWhjwpBdF8DDeVn2Bi3NLYQ7aA8VJnZw3",
  "key34": "5crs72TzujcUC3JxVornaecnnqBzuY4fkPU7o4hrnjMK6uCNfFEkS1ktn9MGeno6WVDa82tkoZSexm8rhouK217i",
  "key35": "3anKR3UnXrmRgWfNwCg1mb64n5tjHD5UA8FtXi3pBZJpCevszkm9GXiarfxuKhs9mpYQtqYt4rgPviBZEdtGYnNX",
  "key36": "3cVEiRUGpfJ1Ghs5m4zuo8wWGTU3b81b8pwFZULSgbRZRoMQf6jmeBX1BLw5crYsTGCN44om4VwDrS2sCJs4GTQT",
  "key37": "273gG7TKxGNdyagqyTL6zUFm4Rk58S5B95JRgeY9n3BJRX7ZNcWiwny5Wv2hDkKcCL8QwcCXhecb3DBRAnGFmgtx",
  "key38": "4wjCs7rkqAaxBDgzMZgwypo5sV4G4BPKWAseZd3uWQpDWsFeVzZeFE7VvVNfcC4jeQQKBxN7cY32b6ipAPcuYi67",
  "key39": "yYLhgQ2J8GPpaQcNmJJ8DwAEi5Kcd6hNzNtEz7Unytcsz5iNKjkSLAqtejnVYMnpBWW5wCbnUXZ4enQmy8RNfKB"
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
