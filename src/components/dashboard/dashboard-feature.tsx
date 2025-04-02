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
    "3pbMeoc87E2Q4BXUz8pYUnsMJN1QxxoGoGJeqd8p3jtqLvt97YixPpzwD4u2K3j6udghPLNGKo9UoEL7MEKyrLk6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d6SEFuViqEiWkkMPUkM1c8NqgET5BWzFhwoicRm6166SCDhJ9Wdc2PznJ1jYUEbHmwWkuFtz7v9unVqppziK6hg",
  "key1": "2xpqJqmvEDq9ixTTZ8ehNs5BgcVoQsj6hNnn8EdFdbsSbrSN6e9ZQzeoyBnMdm6XFRQ7EVrqZYaW9nhwnDokPipC",
  "key2": "2PNfQr62UCa88QxEngq2iejBLEvwjo81VRucUEbJyVWuX6dvEpmCER8jkxyoZf3Wwg9vi4XYiPDKTdU5PmkmaYko",
  "key3": "5QB2tGKtEoCQgAJasZEP2fmuDajBUgwTY613MZ3WyHqoLe2BcA8zFu23d7eKCZMoGdoVNbTodDEPvQ8jn7taeF2x",
  "key4": "27N2wwEnByqTrCfiYHzRgaQPXvuJMvrhM5xntS8ywoq8GobyihH4jwQA48djpJKohtv64maUGvLf6tywszypReCQ",
  "key5": "Kg4Te7UfA4MR8GYiXLMVv9u9kRxtWP4mkKAfyJfRAmtTPSnB383cTQQGMbZPjvxopwHEwErpUcA3rgpp9chduou",
  "key6": "HkrXmfTDss3wyoBUtgZB7NsUUKvQtarQWbDGxAgPqWXAT1FqKRmD1E3ECY5jucq7meN3L682NPPzXzVV7dNKw5m",
  "key7": "4KDkUaio3KALb39MYW8Vq7k174sGBc5u4axpKUdF5aGe3aEP2T9eyRUXYPTP6ws95vEB2DKtjwZRpxE6ip1HY98w",
  "key8": "5JPiSYoY3tf9DMxRo8zDEXyvGgEe6i5rGa4N7xx6M9zSujWXQmdDXtZa52NoBiJQGoUPTbjh8F42rHRCt6hom9x4",
  "key9": "4V7HrPxCAySv7ScVt2PKHDP2mGndwkUCMi8G5FFRDQXw3wmNMiz5bmTnx6Dq8fcB68tdLq8Et9SUoc7xNBFpVagn",
  "key10": "574cSvs54GQKn3thQdd8BUdjw9oUaGd3wsM3ANyVBvD3gcRmQ3sEXyiPppFWht9xoSTRkwYuHzc8eGV5bwk51G3c",
  "key11": "4rN8ZQPzUBdatGvVncNUyK5avLyhexvT54a1BRqhjUMuXynELvvMBszkbrVps8iwqCMR8pzdgSofnkoyyuu5eojx",
  "key12": "3GaV1d5orZXuAko5VE5t6emRzQoHdCSpc5jP4QnaopF4tFrkWFZWNYqL4k5fRgxPCsPiB9V2kXKte9hheZXSrrqU",
  "key13": "4P1QJcrB22KVfxBPfemSt17fLDm2PDNqyXu7nw7SpXUtrdhKVp7Dp3FAdn8D4WLT38RFUa1nEoQQQT7BU3quTi8V",
  "key14": "5WDeHdBLRMysoPuoNB6zQRh9D3SGDFgXajR2bLPouTmK7ni8ehNSh9Pp7q3wdx7rtx7qz4EzjbNgbhQ3hA7WipQq",
  "key15": "5Z7kvq9EDX25oVCmcCXcmNYm2FcaAcwMzUraPbHTUtyEZVUVxyF4vBEjdAVPyEv1VuEBV1zzJXccjZMwcnksJSrJ",
  "key16": "3jkpntFanBDtZ4bXbCvbLQh5X5pgqgwZhPKCXzLmwLBivJhBJWad3rCnsCxkCEKHscCJzCCtuBVFCVsZBN4C3dji",
  "key17": "4XRMFSnTRy4S3Ncc1rMxS53WNP37XxaRu6RehMY7uZqmzzfM6iKKeJ8VLXUtC8iX7LSw29mcW6d9LTJFrC5PKvnx",
  "key18": "4aCqicMLGs2J4Jg2idjzFfGmGQhjbfdGsfPy1JDuvK1xZtoNvYpvNxC1CxkYrM4RhzqRFRZpbAZTEpYPWgTSkEro",
  "key19": "5ZdMd3G2zZJ7vefXP5TMyziq95sY5kxLyfPBZuvAwHowfppvUiuVki4gedcbfUGn3SDFDLFrpvzbE38owDnK8KXA",
  "key20": "5cAr4WWNwBCcZn5n9Zhn2Cnb8PZrwintf1zg9zsc2jsX4wWgEpErqPdtpNaWpc4NBmXVW9YEvEQGEUxecCuAuYob",
  "key21": "4o2GdEc5sNifJRKsu4wrhvE7VE3UbJmoC4Wn3X5fCGbvFBXmMxPENWVWCSb4ayTan6XrNdamgWvBYjW7bkZgadEg",
  "key22": "24fpSY8E6P9Vzdw4NePtJrkgVHSVyZENmLETfapDKHqESdymHUnVsZux3mhngdEJEVUkA2BMqvLtgDCTqHt61Zsj",
  "key23": "icjVtUyPcxwD5tBa3J5Wm9maos5YTKkUgguQ53LzDsX7m1i7CNCqmaQckRAvEftVaJJNJtpoLwuZsuCECWsdhRx",
  "key24": "2UDzVcSfAe5Z6hyogpRnsWtQUcwJEAjyMiNsnNVw5c6K9NTx4VJ1HY22875WJQknx4kqWVGYFfxuDTt8iocAVphy",
  "key25": "2VCrpm9fGkQz8WZGihbj7o7sWZxjxArPtZL79SfM7oX5YjzyviuT5Kx5pZYqLcjBJarR8VkfBih7R64jzr3Ycb4t",
  "key26": "2TGpiYpG9XmbcNSLMzLdZmzZjgpvZfB8SzD47c8Ad9Q1hHgcxfRns4CjT2f8mKyRY3Qj8tT8P9UvoQBNnenstznk",
  "key27": "4qA6pwR5QGbznYz1hybLxEd7TVE5JUrkfpJHpRQAxXPucNcFZwF3smqxYBzuvKprB1fNweCDpU2ZnyF3np2hyQzN",
  "key28": "4zLzqEBpuMm9XjaxX71y29sJTNz58KY8hZLKAr9arLrzwixbRjgqjhBsVSNdiCb8w8FVKaVyEfLo3kzmBQQYdTLv",
  "key29": "2FRkzouk4qJdPWFHSN8As7wjwHGCZEBfuv4eyUrDMC75gN9hop7WFWJGgR6aNSdsqyW9wUrV1WWEqSur1iXcrvMT",
  "key30": "rmAj1yQuH6y7b8U3TFnivPUZ7PB2S4Q2cZ3uCdYxmqwf49K9jWrg31EdeVhENZFLeAeF3BRWkHmKQ2KcUgKmoYm",
  "key31": "hyDzP8ZkFAGrR9jJYLt5aNsZVURrbFbGn1DrCNbtTsrknSbGsTZ4g4jvbteNMB38VPcx8aGizrEHwSyKqTm61Mz",
  "key32": "3yiucyDooZZZQMgGi3GLkMvJpJCiap8uAaLgp9PrXsTrzzLuTCwvcLAB1fGc5KPYC4jUNFFZsFqZrKkrnQcizjQh",
  "key33": "STHtNTZkA6KCrYidqY6ggXgixhBdVtHt5h53ocQ7BauBaCqocCtCipNKWb3T7KejDLGPVKuS3uitnEgpDta3qnT",
  "key34": "2gu1K5MB6MYqED3wXBVL3PpKdMnx3gzoms2cMLZBBcuwYv9rGQJVjYgzZXp3DeXVVusvt1KxfqS43HUugpsoGpi",
  "key35": "5fX44yt8ZT2VGUDHCTWmKWXGkuswRVNnk4KDiztVqtJbDbPPKMRHNwHZcJxE1JuNkroE9WG3Z1SaBoG2JvTbgQRn",
  "key36": "hCzMT5krxnh1fxh6whGDrPRLwrcj39SktufqxcRFVYXFD4UFXj2Ynf7bgcAxigvNFJrdfkcwof4aYcGe3u66Fj6",
  "key37": "4nczFsCXBtTs7uEM5aERCF7HBaqTUDSkoG9cuLaUpKtbgHoWDj4rbGDQKx7iDpmcXRTJYMEukKrp9Rr6CWDJ6QEp",
  "key38": "3ZxxkHocBDsGzaK41HVmxpTaXK1N7JNKNMrtLJ53MqRXuHhJVgW22tmb2NATLNhbMDAv97YRnuLFxnx3MpX2f9ho"
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
