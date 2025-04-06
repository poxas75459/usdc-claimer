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
    "LrboMsn8jZB9gkwQAnAJUbfppDzsQN3pTCxPYhVvySk259xta3joqHx5mmR1LNzgRHiYMZHurDX8LrPxh12wmXE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JPiDUgEoYBzkY6cKJeP2KwzsroVNH678a8PJeyx9m8bJfcjegbQgQs1sLHbxErukWGvpg9HPfx7mz84zs64aoUE",
  "key1": "3oyAxU4DX8W699AqiYQRjuB2wi3f4RcS1yM1GE6tgsKcT49StCJnvFiKVnWtheKP3DPADBWX3TjQS1Xx4eiVFDyV",
  "key2": "D3GQPhTXMthyVXXS8htZngo5YXrjE6ZFrLoZe2VS8EqXnCdCBnVvxGuyKgDKaAoFSn7yNpvoJpYhFBW2u96C8hp",
  "key3": "iNHwJjHpXsmcbcTh49dns6n3it4qjegdbAVr5AF7SNAuQ8sHqwsfR9bGFtkb46bbTSFGePY1K9DJQNGwyWSjHzi",
  "key4": "5yor2C2g3jFWNVsp1LJNZcjZZo3QtpH5ULvxY9WKZUn2rreHZ1hDDJjZ8xAV1eCxdQzUfBMwhyxo1dRxMbd9yHyF",
  "key5": "f7Qkg1JDUq5xnrbHens4NiESaQU6JwELWtMriFRA7RzcA1TdAJZRwrZYhxBx1Drcj2yNwFxZesr1bDrQqbPDt84",
  "key6": "3H7eZegDMkSncF39eA1PJn8Q4vb7Dto7W8yCoGdZe2jSXhQEEA4ZcCmCdM7BSepwZhaBy5AZSzyu8QyvaexE1Lo9",
  "key7": "CwwG1dy1xhBwLNs2yZdksRwhZG3diswce3uKnmwrHQtYpukRiUc9PSb7YLvp7tjLAqUGqk6STKE9F2rxkaNLe48",
  "key8": "2L9xQXNuGzQYBoazbgWfUTrFd9C8LVVaUiy91ze3Y642dQekhB4REjqBocgXg2UXE6xBZUVxzf9RrWMyfMfcKPxk",
  "key9": "MsSwxLE8nfMfunYnTiwhhcFYrw6ndGSBKyWkiKaBAyAG5sC7gYveug25gsvPSHufeB5auu5k3VHEykxNqZ7RyXh",
  "key10": "2szUCZzmGChh1tUG1Har2KtoxStAeLFuHL2wnFkZyNj8DcCn1PJaewgJzRB1hAXry93eSw6DkML7b467ycfXHgvw",
  "key11": "5AbYMCX4HLLU3XfE3NrCbezwPR3fHqBvJRxRr3CF3jp4nB9FWPdumEx6CLFtMJhiZNMXajNRjc1F2bkymbZxhbQe",
  "key12": "4iSmTzKbXKVWatvKQ4vR9kGQ6Aise4VJNUKgWBshnernHTfr7brNuLAU6jgpotVTKos6Pn4XCDbSnp8xNK2rP7rf",
  "key13": "5n6dFoFYRczTwY5CG1VMA8N4Pa5DFFifmnevDsyhioAhbjXiiHg5cVA7c3zNydVK8dzaFD8MfVT3yQ2FeHX4jQpq",
  "key14": "2bzFipqMuijw3ym5rUwkZoQA65YJNPVrPYFMe1qE4gWWnV4cAatTB9kTX2UqF14ni5A5YCrEYYYUTfzGUrnJVcqt",
  "key15": "4BxMsXH5TBGYCwZeBcL9hTH8tKn6YBqfmdLget7kAA67PnKs2raGKmQi71n1FUitF1zuMsZ3E9kdhZ1TGFTprNDH",
  "key16": "4We5wqhtertf8wGTHuxjz7vvrpxLuKJM9dTk6kW4ipxFFRXHSUQsPNQViNPQQtH6hz2Hmbieg54bWq3TDZZJyhdo",
  "key17": "kwDvTxvqjj47UDCiwhFfJ9yJAZCbmZr6jiD3QDPdnbU48ES9JLG7SnraSdBKuZZfYh2eLTRLT91NtHzoCGvhCQx",
  "key18": "4dMb2yx3AuHeo4pxNxU8NPJEGMGbRjsBmHC5RaDFGzAxSHTXAr7MjAmHfgtKstAeahXJrYvinAiGMJpCNj5g18JE",
  "key19": "61NxkXN36wPieNRi8Gpcw12E9K7vT7PvXRmERWotc512Vh12GNJnHj5fbBE7qoU5y6gmV4wo98bvsNYZKdokZMLy",
  "key20": "2N2Q6CxtwW3meTTrDNGQxnPxgRHCxhqCDi4f5GhyH1KjtCyFEQoT4KydCzv5AaGgLj4aoxVVueVmZx8wPC4UZ4pt",
  "key21": "5QAbq4pqxSoVfK2RSApMsBGVt6zMnUH2orVBHqkXq9q5twC1ETfP4MRb4A2756mNV6EV3GSPFgBLEcakB6x6EwU4",
  "key22": "2JM7MSbmKUymxyQ1dYtJooDr9YMSBUyHgaGnKDejjgNdk21aooHnEpEaMJZ53cxhWpaNmtj3aoXqcRDYPqEeLdfc",
  "key23": "5Gos4G8SJJb5YG9tmZfDauYdzBdHcdMbuZQVc7vmyqqA3BGvAisySKGrRFe2xUGNYfvNoE8vXoW1cCovaKDEz3L8",
  "key24": "VtEcmpuPmiTuQDXv4UEcC4fQ4a6DWtWgiQrGHXdWgC7hv5bGzpWRVgY6Rp4zCKv8Jh67ZfbXKZfEuJKwVm8k6eT",
  "key25": "fTrv9gmArxzFAQup5j3Trx3eKAn5LYnnCxvhLTZ5xRJtdBABrh9prqG1Lo33uQGkBM94jNnfDRrx2pCVxDbm6uu",
  "key26": "4993NVQf9k3tbhXkKe6zeo4A98hcx9CrADJwKeCragjWikV8fSqbDSjF4TKDY7daFs2imgAUMShbqrrAmUY9QKay",
  "key27": "4eAGxRgnrypBD5YUghLwGEANn74PJ8V8qLhbw5xPydrUt3pHhZMazxD6ECWDtVx79J3DC19tqoLFPwVDKRT7Ftzw"
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
