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
    "5pfZUNTZ7yuaP7Ptii37qbk5SfNRKNnMiY857mMYjNgQtd8gwqrr2cb6sbYqQggKHnYvP5Pus2366g3wzE2Rj5CF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G8jMocqtQESLiExGN8Df6PX8gFYcnNCGDpjN1YQp19DMs4G7XzJkEX7UzJLoMEfVqYJ2cwKbNt64HNQXinYj696",
  "key1": "2YR6Xr9vYNP41WCk7uMHPww7Dmw27NwKU9X2MDzqg6RqnFcu6mBHBS5ULcptFcMXVRp7kVJLapia8sCefDhknhzV",
  "key2": "3VikvnM31QFUoq3Fgbkng2Aniku7QXRA4xJaCG2hVaRAxnVpZh7JScjg4RTpf2McYubHj5cVDwce8Cx9Sk83mXjf",
  "key3": "2nRhCwiuFrn5Lms6467tU7N4hd8DWMeQktNtCYmDSXwp1dkq8n768qJZZ4UQRQKDbu38KneudtkkPNSmT5wraBQW",
  "key4": "VDbNuwo2RkJDYzfscimpJSaFjFvizpZBMUPMz5wcfnTYK7Ycy1RrQGtFvGXgfgniscgPeGy9P9QKgrvQiiSeh39",
  "key5": "39AcNVkVVpwdX7Hqafi33ZNKjcd7tXDJX6PhimBPnTRdZsu3QKXXxkBwfjkzopDQVS7qRyMMbRHawqiJNCGfbWpr",
  "key6": "5e2HUpmSdGr8MP8wqDUc9iUcGMFNCHhRSuDY9cmjZRgmvawozQKGAdfad5xXCPLDsSiojBgkPV1hW2wnMmVJ6azt",
  "key7": "3f2DQ9TRoLQkaMmZVo5xEeKrhuynQ6kMm4juEmmw5fR59cnTDxQN57jAzzjSKCXRXVvSr27fdvqQ8r2bNqBh9Km",
  "key8": "2PEse5qYPV1eGV9bMg1VfSCApYYcFzu4K3WGaodWyQk9HerxKVYPvpKhJHyCrrg5aL4Ud1dsvRzpdJDmzZm9tcWp",
  "key9": "1CJWTjAEexPo41sceLxtyqaAh9cgT7f1G1JdXFz4tEZcnzeXJiujmqMNreiwbbb4AL25wJoqAMPkQz6Z9ZBuauY",
  "key10": "5L7XmmpexQo1DETyB4DNyD15Y1NY7Aej3xWXL7bSekgk5CBx5yg1AU6BprqFEabJ3eGMRqywDyTUXX5eb1Pw1HPx",
  "key11": "2VmzojsDxbvCJp9v9XAZ3577Yq6LMCc6TTgu4jYoc8VVcMdtm9ZrxQSdPifG4ubrJyCuCCJyM5ga5sQeMyC5LQJ4",
  "key12": "3HUCEmYn74Br25PjfaQiYeAZya1fydmZeyBuF6Qqe2ave7ki35BQeAJ2jAw1mydXm1TVNHdYoPpKqAfNYWp1TGwe",
  "key13": "2xiL6UduozWATPhbTSs6u3npiu31bKjkkgTg1Wm9yspKEq4gDrJJXQtJk6QidveAxeZNKs38tZi7Hchka7Jy7QNg",
  "key14": "2RKfdjA5U1rYez5rX1fmyBBji9Kvdm5SiS7iPcLHjwhj1b2r245kwH13P3bv4huaYWRi4ZmKW1ZrrpY5KhbgMjHJ",
  "key15": "5N79rD5D9JFk1dLWdi1z7wX9krUkuREVBwfnfwNfHYrJapsmdvXFmh2Nmx4NCrjZvF5phf94mo7ATtbnUJKJDMfk",
  "key16": "4SfpLrDMiq3bGhjkc4jZ6hfJCBD6cDwDXAJo5F2DWqNct674xe6Fm18Bb8k9r23fPV9EojywDFzkwnCM47j49SLr",
  "key17": "2WQ8SFVdVKKyNeQjTekQS5dYraDpbqd5cNq5SimzNSYN5cb26xnP2a5vvaf4Tq78eL4a9bVRawKjQSHsmDhmAqvu",
  "key18": "hgku4rNK8PHBFZtfM6fjWtJKAp8mrRf99bSSoGwgeQkzQCKobW7E9Eaziky6RMKrBj5m6FQ6WHn9HS3zETHhkgY",
  "key19": "4N2xr2Smijh5EETmYZPxE1ambjyP2HpkLUqSFUHgtob9WSKz26cbHnFJUMWdQ7m1G3CcegRy6bbY5J23tDG464Wk",
  "key20": "cexQRF6SK8YmBdNpJ17bta9UVtDjaWp8Q9KSp4mBtR6DuVuojh8NrPCaKBQ7Bjse8ppqDQPLcq3cqTNceGbxaQ3",
  "key21": "2Gr4WcVRDJcccBiyesmSRCWWPQhPKmBV72KsCDSQi2AAf2hHeDkbRdtnTfo6iSknJ4bnxowXZJBDvygerM1tnTGY",
  "key22": "5fM3wmCLm4oXW4sCH749nT4idesAgZVYTDsojKGX8KRv4muQXavDcrYzxvZEeNXGCEQj2F2UioxrCfVHqkXsrEsE",
  "key23": "5avj3peb36oJesfdZA8bKzEjeucCzyu8uRGykXPSY33UVAiD2oWsS1CCByYheBzMFkeMhVUEE2L8CysgWtMAuRMC",
  "key24": "2C1i63ow3xuGm2ejsov3Z8Jy5EaCXYHt8EniG7hrnX6vzcg4jtVmdqYbMq6UtEXowk9b66tVvEW8RvaP9KHL151q",
  "key25": "3AyJP1vKWT5B2X9iAXGCJoWsHvB7RamKzK6VNUw2aufCowwA4A6WGHhHmzhCPit9nUKVHk3pMUmrvgPFvptbKk7o",
  "key26": "3VkKSqkWGpRDfzFgRS4MvcyLHFrrK3aWBJQfxxuuHxFPfWHDZi1igaDTdQgYMSfgs2nHhvunNtqJ3wnXXH4MrtWi",
  "key27": "5xH3gsBrtf2uNuSRpqsNyZtP3PDD7STkKyZMejZT8pbpTnf8ESpimvtBEW7T3Gs97WASskhfvjPYFiLmyAg9hQjQ",
  "key28": "41YpJCgwjjhGpdWhEaT6dbQG9ikdJcuZUDamuVqgHHJ3119cS1G8tgWWV7gMLqLXTS4HMU9dJ4beCsZT5ayPACLW",
  "key29": "2SxKuB7frJBU9ktFVhDoFzBhvocyftYnQBg9GnTbLmQpS3VLjk9jcw6oqKWuuzcp3TBncwgfyU37qpdEPCZgbZVr",
  "key30": "4E1fT97CXECTNUdeRGkNeCbzPQ2umFx7M2nyothBrRhiNYzgvPc1z1RecQfURTUruvLERC1R93Q5TYeqLqSPSNWu",
  "key31": "D4TAYW7NhaBabdx5foo3nz3RmQDCRgvMkRTiSP56ZN7wLFGv89g8DxzgEZL8mx4BWcD6UHrHf2C8XQLabBDjCEV",
  "key32": "4PVm9mKsFMEJuLdACFkGJsRcPdG1gMCVnyBe2PjbWd3fVaXxosDpXBiwTPevo2xHXft2ch6qNbWLgY7v73hNEQdM",
  "key33": "4hNAJ1cBuJUVkHVsTAcmhu3vQTPgqC7HrsrzeQWAkYrGLv5ckyZzcddgrVDdhgPhn3CqtuacMwaqrNt1o9C3fm1s",
  "key34": "TTYbdsCtCaVFDKRXvTpJtEgfeJJXNobLigxa1MAmg6kicaDuqMMvJVN1b6bKynUe22LGNPenvURKfGf3qZTDJUo",
  "key35": "2Qt5r2vZqNaJne9TZUZHXRcagjGkgZqrEr2J3afv9ioj7VqMNHdj4Sq3L8wuB8zb7HC3h4uyD9AkoCArtxH542L7",
  "key36": "4an3BUoWvD4NaR4BPRB9ZtQWqY5HXqFxZsKDb83BWwFn1CEFubh9nSHFmDSxedpLSLYXEbVjuYKJUaWTj1vJBGBe"
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
