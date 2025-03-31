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
    "3SVDR7P1jhPLeGussUcpwoLcGeGuTD3dV5bEdWQWQ1goaE2tkp8c73UUEqtS4EXuiFUKAuMAfzgYzu235yaaJSHT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wQBooN6s6U4wW8DbB9LTn948jW4y1Q9XBKCncfWhpuLcs8mUEoXf3PjyktgYkwVfWfubJEkmUptn1q6dY1oQtNp",
  "key1": "4Qhpk6sdUP7HevYAwYe8ufecSarKrqnKVHUdrNRKmNsgVuLt93PqqmSk41eNB8gJ9MihbqcinxB2p5YGKtRwYV2r",
  "key2": "3Jeg7hBjjfnGMVvj899c7wZqPYyLFStRVPNGyxW54GyjjX8HUWsErpCNgub4kdySVmNkJUSNCpjSJCyGUJVsQgXP",
  "key3": "e3oE8JPQKsatyGzCWY3CFg6nkCZ91255Rrt1GXsfdUTVyDPJMBLfE5W5HLbC6zHymwqphrMkbrUUUhseVHv3njy",
  "key4": "1FEHwi2ew3MR8655sN2P8NyaHy6pKE4AjqXPtJfAE787FVq1Dgt5nr71WND6TAve8R9KLP7oKCYLxuYm9SwBU3V",
  "key5": "4HeEQEWwoFZUSFNGfndvxnT79UPfBrtEkK52VqD2rz21rDEj2fKFv1C7c3Er7SBspjvPALL5FNKpqqfP7oEn2buX",
  "key6": "2hmSiuGtCz43SPDDapEDNJJ5KexmMMgFoaNwkpGnoekvvCHk9smUkPV5mvJNQd3yDc1chPELBR8vDHDevuWW6GfQ",
  "key7": "4YQzcMzFGqRonzJcHk1TBNhGVVmM8otqTXppr2PrGKe9kCqgfZDEZjt47BH8gmYodd4x7ktUgVPkDXN9SJnTrAPi",
  "key8": "3kvYoTKi4Lyk2tksaNcK6uiLyXUQLSsmocp2wMTf1j3jmC8JunbQXxs9Q14pVgJjNgv4VcrpngZX4EzzUbKV5umV",
  "key9": "2RHY5HEKNhyTuG13i8zwJXZPUVi1fkNC1vVpHBrdDDhHT4jG5zDq8fM8BvyMLSPUVQbiKXNt6ucXybVX83XjWz4v",
  "key10": "4qoLR96nU7FTFpdobHnx1FXxp2uPCYsBeLprhSyvifAF6iBaGqetKDMjSCh4REeC8ekbr8DRi1ibV8gWdqZXc2hm",
  "key11": "WaN7FhzhyBpkeFMZ2qE3S3sX7K4nX6WeuGdrtTRhvN8sgjx4ymdykknoPrah4ZbaLdMUY92A8YW5cbcmpFHGpnx",
  "key12": "3WrGWJtvCyNcrijhwW1mUZibbdGjBBCungj14pNS6snPPQFtYAsc144k9JyBPqpytSASJQaibBhSFjgVdebify4s",
  "key13": "5WBtUHxKHPx6oPYitTXtgx9iLUVpkfQrxb2ncQ1Q94P6GpsMVcTyMB86MSJ53ErFTiCv5Yy6SsijhnYAxBULbTgR",
  "key14": "2bBZCVQXmTntRxLtFYxAVcvkoJRVLxymsUoJjmZ41MEqadNi9qqPTdJGgRkZc4eixCamhqynLAabC9jFvJKqG1bo",
  "key15": "4F9oK46V1c98B5dkcKktgQ1xkajSgjuLt3UnuPPTwYL77xqq3BgDyXg41gkwp4TbCm4pgan1geHjKNJ7xZi4224J",
  "key16": "3R2GYUxTG841cvNaN9PACPtWDobgPmjV17yn44NF2kUar7mKZ96pMhFowDYug7AT2SyJkAHJAWZajz1FNMSGUg5u",
  "key17": "S9BfKDuNwm76gYtVnVtHxhzFaraVPqGAgQR1c3Y5e2gyHDxuEdwBe5DToetyj6tfAv7n1UK45kS9QsrenJtRHz6",
  "key18": "JtmJoUAfMxPN2Q1RPeVzJ14a746BNfcqk5b6X1V2EnQyk8LYV5zR2yH27HsrYgGmxXs6YioYQigGXHBcwh9GgU2",
  "key19": "2gPMPHPquug4Dy1jc7noowJ13gRiUw7QEjcStwBBn6BaTq94PeyGYXEoV2SztWiyLWt2xXhXkUcRxFw4HMhRmWP7",
  "key20": "wX5n7sdzZhgyCPqDDKuEGomiiL5LfJXDhsweDF4W869iA9SaQE9X4hQgPTnxSDihj8V8r3UibaKr2tYKU2MR2Fm",
  "key21": "2iXPhG9bSNbMhBZvPDL2QamaM5MEJ9hEDJnRQMd6SUB8bfqosRxJ1br567g4FZ1c1CCQAiUs3BQv5Pg8nqnx4Gud",
  "key22": "P6h6c7B4HYmygRsauGbVdzdBAd3Pstxytv1ovjR14vduqEiCnmYvGUdt3trWZWZ197Rjgam4B4DQUBYerMEYFdM",
  "key23": "2euC81hF5DgMLaYFecaLTt1C1EMXcAFmKhu2HtZbAdq9CNMi9vMDUfP8oZxivVf18bch33qeZC6nxwgkL2uQrp2F",
  "key24": "dzX6UtL4kMEEKMUrzXYs164GuyKyx7KtWsfuWDEdesqtX1WH4Ct6ih6vcYotYFbSXJAd692CKTEEu1ikBUdDJwX",
  "key25": "47YQChy93se4wSxqcz67bDqpN9xe6r3jR1ksnZrjeybd53XiLF9JusbLMpqBppiL3u5emJQwV6aDnRiss5F1yVv6"
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
