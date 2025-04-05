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
    "3U5jkp4gkhy1uvgg3GkxD38qF4nsBVCed1xwEA7pTfEVNeDPuAHXGsfjJ7VpfcHhR53upUhLd1DV2DarqpEAQW2y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G9MQk6M1uTPh8yHDRQv6P3er4nFgxw5RjXbLCQoeyW93UbRwLzLx5g3UrYPZBThrjRHPo4REbor3Zj5D3iB3jkU",
  "key1": "65SD4CaAoyyJxbUuLaE9h8p4jWvShfpXjvNo6vHCHAKYavWY7pFmk2avU3Em8wgsu8QFwCiaojAniC72xkSaSy2Z",
  "key2": "4LYsRow43yivJLEnLTaMJjG78bmqUwpyuLCXx3SxakmovbKYzzgrthK8V9dz8Dz4UGXCYmqXuSNN96dKo4tJkYDj",
  "key3": "673zVe5BjtuMav8JDdbRnkWMGUf88refQupiGL9ZdMssb3ErYygvi6vjyebfJodRZhdW6eiP5kmmwVbpWAfUvKXY",
  "key4": "21R7NSK3zwuGaAXrABwFXFpTzK3hhYan7ULW9sHvQ7itZU9PqUn3kB9XEXxZAdepmxgfwb1n36qivqoQfaHN1qcn",
  "key5": "uxrD9YUfPj2qYbq3YCiL4TupKgdqcnFvqcUD5wCatncStNwTHSpqd8p22UgfzaGswbipdyspACkNfoqxQQoiVF1",
  "key6": "24AJBEcVQyg4J6p9gaze8RMmURiHKpKAm9zDFHAUsyRxfoD3No4UTJmfK1zKHMwSjaBfzk5uK2cd833KW5NDJyqb",
  "key7": "3KT24CaasKMu3CPp2znf7pEogxL7CRbZgFcZ2oTZCJr3YTahL35WddGzFDmgguZigKewu65FCkRmgz1fajdNgLrc",
  "key8": "2ui9xuEDAisk7qSoVvN7qvRV6Uhmbvgj481PKG1HyjhS1S8tFX83dFhqbof2fe1BcshpUTXpyMcwfyLtwwfDFMiE",
  "key9": "4XGwTYH83ERbNLfpC5bxvtGSGMFKwPsWzD9iBNquDTNj2kQUkKZrCfhyimD4ddzJZUkavTKKfh9BfoB13a6WZSgu",
  "key10": "5HPrndkncNPaxFSHFzff8Jvv7WTMkhaP6s4U2kqkViXmAM2bGJ8p9kQR9RShcuLidUVnpfr8XdVN1mpDXZ3pQd1",
  "key11": "2jLrweYrc7MCH9NJ2cu7TggU4Rp6yrLTTRZbMLGuZ9vtGVAwZgPYPChhLttxWHK7Ym5B7RD2mtbi3XWXQYirzHtA",
  "key12": "36zx1Lf7mEhDuW41w8Fb4ZZ2xaTYpV9DNBoGYY4wauKEFtG9bb8i1xFYgC6fkdsRyPactHBAXgtQJsu31d4cvnZa",
  "key13": "Uxkz6dw6eSbC8w9PZGhFp5pqE4eE25rsaV8QeEdoN8QhbcCCeeCwPQha56s2FSAHFyHJwTz5mA9huYXrVaFDpat",
  "key14": "2tW8giQUZh3ToyEZH3RFuXRtr4qejGN5PEGs8MG5AcYGaxyTYJmG2oWR7T3VXcRCFxt9DJhD75uCobLZVER7hHix",
  "key15": "2pS9d8GtJB2mgGxw6pCjR9ashPQXRFprgHr4qTfoG7HELKBQk9fSTpCUopUCWFq2xnaAg6yyvMzTpgQyorEqBPUv",
  "key16": "3fmam1Cw7fLrPfeoP6n3QhqC3AfrvHbLuHpso8a49JXaaC6V34MTVnpLSWPb4ajBkWX7hwZx886Yj33wtrfykuHq",
  "key17": "4CKNQQRnbTyjqrGqhhAj46sGtS4SWNPAQyA4gHenXqx48UkegD8RzUh9366KkmyGAkMCdgLocQZoUCpeT72Q2Kbh",
  "key18": "5wy3ZPER8omqjLEhWLKi7Bed6P5NcDQAMuizSdB8SowhpJuWpLxcHLgAYKf1b6f82U7vuB3geFdZfQp2AM3Bkzck",
  "key19": "5DspBQTQTBNgxRi2pcyXaKV6mE3QRHgcRtK1XLHEVfJwxyiBvqAZ36nkxwYZdEtCUiqFzLNLp2H1dFzLWSXGhsQc",
  "key20": "cmLRj4zX2ZzP5Qe1B6SRowPpMZp37CAmtKVdFVKk278pr63FeBCZkGPvAbp6wq1w5s4QhWNJdSrbPSrLWr2JmP8",
  "key21": "4K7PeKvPJUm6TV8bFm7nnwWSQwJvjoDZ1bpS3qoiSC18GQVkA6FmwWBtwhDMz8ks8UsgFLU9qQeL4uCcVSUKgdzB",
  "key22": "rEfnHdfYGmCJbHedXq5pz9HeVEuuVarjpt8B7f6cVnd7nh1HYVvHPosLLdjWvqSMqiyM1pGnk85fKXZv1QBP3zc",
  "key23": "2CBSh8JkTBFXzTcq9izLxYkaTuQyAn5Q9EM1MLDaZMqRhhAZ1Hjt49RBbvspLMztTzvEC2dCYFijYKLgP2GKRPL4",
  "key24": "2DMdVKm3EY3j4pgg3BtPwgQDXPTiepXp7dssJAr3J2GnzBJCci4JaLGhsZXRQUzfiYvaVmNMzAuUqGwtE2bj2aFu",
  "key25": "2yaHPu7qrNjEKxGeD8WFt8YbEwhRV4T9L3FqAq9T9RCqV3srkx1nqwXkRkSWtaZJvgBESiTDQrnWFMtmYcj4dXYd",
  "key26": "4pmaiRBxbWC6XbVbwYz4w6skqoQNP2KduNb9S99Ah5e1Z9j78pszTRDa45UNvECv6Ra93jB7J6nN4fmxzJt3VnAp",
  "key27": "5o2HLZNcnTAWsBR69XVP8Aw5o6EwbQ5HLFUZeyAVp9M6ZEZMRcS1bVzcYVn2SxraQxxCCps7Mib4vpicyf23aB1h",
  "key28": "4ZZGYRKdjiq6XtjFGEw4Pq3awqwGawyNK5yB3oDUA1DP6XVxGdmFdoeTUxMKgdJZ2xgzfQLbpwoyceQgUkaxf7j9",
  "key29": "2EYoAym2vV46qDpbRt1kfmYAdP9a2Naf56chF2s9xstVA6FqcyGFg3CwRkonxZvuvVXD7EBCAVk9cjrWUctgaBQR",
  "key30": "2GXfhEKiUtaGVhTvUthsKMv8js6VUjbjJnLvYfswM7SXVaZ1k2gQVVyQxvUkAaGFLukcrrBUShafMXcKpX5dkLnN",
  "key31": "zkyq1CTx7Rbr4kiU2kQR6BJFPmtghB495Mx37guhss8NDpDs7zrLwvXuYqPbCdoyvrqmgsdtHfC44RP8ZUybF6a",
  "key32": "435aML4KHwSj4MmYMqQnMMDTSbdXLA5RzwkoDihmekhGYkEGt1K3CbMgdXFeBjogdxJCXQs39xAAPz8sS9mZQHab",
  "key33": "2Js52btKtnU2oQPRNZk1XUFXdvqYyjLDtnVYcHgyq9yLb6qKokyE24wYPB82QwU4YGn6VvjAwPBPfCk8sWwCwWc8",
  "key34": "485ukxG247ocM4Vsn8tZKv7D1wcRcMnS7fkTzZNCBEnf5Ghtta7CRAHzCW6PsBVT3FDacpJrDhBby7pFUN3qdmiR",
  "key35": "2pMLWD481nKVVM6RYXbessqkH2zG45rSaZhnvtAm7WnxRjT3tsLqzGqhN1BYf7ZNYGp5g2ABXEbaA1p9Y35WWmLA"
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
