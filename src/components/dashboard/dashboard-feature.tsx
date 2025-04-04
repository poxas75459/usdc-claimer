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
    "38sE72AbLehUYSrH4CUCzdP8RMfKK1ARE6gCAriBN7JWvgyggKP5CW6kqed66LtzFUnYfqPoeGek5Wbhi7kQbPYP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q7SxrhZC1k6TVH8CQmJfsbYvQWXC5ACuSM191TFgELJqiD7nzGzgtqgrYHL2kqiNiuQrXf7pkBi8AypQr4HNbB5",
  "key1": "61VoWBsyB4DtYNwT5ERsqx29BwudSWH2KTm1PS7aV3KdY1N7EKkBisCyCniHb8gh11Qp1NxCckVarQ3ccSkR8UQD",
  "key2": "4SfN7DhwPUBq4umoP9fqc3mWwrd5xS1cf4Pp3gy1oS5WdEo6mZm9BBnax1xTwubAC3Hchfsaua7z5UAQYKbG38L9",
  "key3": "3WzfHaV7YtKHZKRLu2snW8BLN9hyJYExcQm8FxAEpmSGWDqZSYWXdkDjqAgG4ewZ1VvfoknbX3EWLQs4SKttZ8WH",
  "key4": "32uNNtEf2bLas3ZPvbHm2mrbCMTKBX8UQztQciVeFmchgDT6sVufRSTS7knHxuwyzxgsXZtp5UPufVB4xZMdzCva",
  "key5": "4o1GU43Ltq2WQtfr8u4fBoFDQaFsii77s7pzbeioM9osHfxAGzxtWcYj22zQE9u9fjZeXmd4TEvPfapyYoimoADH",
  "key6": "41NQgcuodCNT9yUzfB7pir99hTeeE3UL2xYgTC7uqvraMBxwCrdBfC6Zx93LK66XPgxpmRdAQuy8u4ZytCp1Ykfr",
  "key7": "4gzVq7ogUu6z5tDjtJKnr2aWY1YbpSsiLQoBr5Ge8knvZEnJEf2hyPvKwMZnSKUYuR1qnwMj9K9NUEoJe9FHiCGu",
  "key8": "4nZMyCr4kQEzBsqsNddEBG16xY7eUeC5dccST8eR2omFKBbuWMez5JYGf56WMxeHZd1K858HyxCpT58RpcmfDeNe",
  "key9": "2DwmXqNP7WEMCmvCUmh1hwWa6ZZN9uQAFiL4LTRyBFvY2KuqtR2MKhtcruwUufuPVNXc9PXcXT1BXF95jJgVwfdC",
  "key10": "4QsU5yt94cbp2BH5LPvmBASdtras6DyiUveiEsFdUU87ybF4grDRFb4Buf2T6keJNreU3dPNRmYDw9WqXKehvR5y",
  "key11": "57ubBCWbyGWE9mZ65DL2X5Pm9sCu25DRd3HJTn1KLnWApKMjVjGdaLw8x1vcMQWHbybH4NrAQBiq3b5RVTRK2A32",
  "key12": "32rmiBmXDwJPXUiEi4cGKGN6988jKPqxxN6TKT18xKdMQBQLzuyNAPrcCDAWgHRPQPbavyvjEitwdRFuG16wpsWh",
  "key13": "65mMBanwQx8ZsiRkh1ttQqm57ek3xGNG5qGYVLQNSoRzBaF6eNGr6Q1PQh9GsNHfGx5vDAuYuWAN8oqMiGBASzqX",
  "key14": "3qcz1U6STjBHF42aKhhVAuKnFXEY53WbPJbDWu93hYewGs5gKmSQL6ECGWTmEiy2P6LiazgXPMix3Qz1miaRR1KQ",
  "key15": "3yritn2Z78fRnxcoVmicqZfSMQYesVdQ28jt8enqk2iVe2waLz7hkdMs32P6Lo25sNB133G7GgWjAadYTXe7PcF4",
  "key16": "tZ4oRPsH95TEvU9g75JVk7p5ezLDfQd6cVfLys3kcZznv1u1g7nwqadFCVJcPQbyVh8SeFev6HFxAWRafABetCN",
  "key17": "2aVhRn4n6MTrKKYVEAYAf3Z3pXRt3twWGR96qo4Nm7UUGjhEGrYc9gWYFnBiDVF2oujYrdJSnbAjf7nw1RN3XNxu",
  "key18": "3tj8jw5jStTJ2AwJKaSLrSR9V2xrbhBLuAkPR65PAh9mWgVJLq3i9xXLerj8h5VsGsacKf4xcyPiTFJp3R8z26Ks",
  "key19": "2veMwkuL7F238yj6vmkSKPgBLGyuCGQ1gHFuEMB8rbvkWaEruSMwi7mQo4xsrmHau5uazavxwuH7jpZihAUq8hFS",
  "key20": "41joEdWASSfo7YpDAwj6QoXnn3KG9UZFVRhHFNL6Z1wTbvmbMz5Wng8tVipUwQBz5iAtXtnS4LJZ4sdLwxYiaYmT",
  "key21": "35ZUkRdcj2n5R8a8ZJXaJxm3vG3JHtMK9U3CcVZfcJ4AA2xKuzaGYd1jmVAFddPTZZypDtYTZNSBVV446wYBJLwQ",
  "key22": "GDYXsa6WRcvAGProoBZy9dY6Y2cY9eUF7KkARYdm5gEpR8G81P41SXUFwxtxcgvR7bwGNFEexH9jXMiVEEugSHH",
  "key23": "3z4QBFCDsYKSBDeTwcNTGWiqJ6kvNETvzDGUXJ1F1T1thsDxcBG5NYNy2DT3zBsVRr99qA2UtU9JHXT83wPovmcP",
  "key24": "2UgYgJoKEbW9ZJ3dF31ZmBs4Xzc5Hfg6Y58SgMqaobDGUaaKEH4aPyqW3fzHvgnGYW8KEdSXHgQKDy4xN7V5KicQ",
  "key25": "4xAVmQL9MNg8U7Bj2HsTEPzeRJd6pGxLQPjc9fZWByECYUKRbXSkXbesBxRzAv1crAM4Kz4uCVfPUnh2TrkwMbzE",
  "key26": "5RqwdCGtLbrQpZ1EV9RPjvJkYuSXd6x1stfT7fm5d3FbzdiMrzsz7F5rog9QMuTsj9jkHNJEGJjcr8sxy967Gsw3",
  "key27": "5uEpDnSDvxynrmfWhHGGrKp6w2WsMXh5NLbEzkE9k1a33awEQtukR7L8k2vJeCPtd6ApHM5eB8a3guKM4pBtQ4My",
  "key28": "3mkTKrAbz1w5G8GKNoWsDVsEqbYeTeDoUbHez28oy7UnEQQKoUyEh69fFDNmXpR5MoiVBLbMcLZdCK2NsX6usSsA",
  "key29": "YriKZPBsBJCVRPh3CYUrqqaJthunxZonMK5sZdxucJjeGf4wZNb91cbzBh4kz8CuetBfBJ11RQHf6rjVqDPfv33"
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
