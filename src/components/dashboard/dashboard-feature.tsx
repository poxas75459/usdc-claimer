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
    "PztJEuNFCJ4e1QfVnCce3j4pKkYLMJUp9kd6TbQTr6jX9uZUKvztwXxD36773xw9GuVWuyi4cKTsiXx3UzP1Aa4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hRNQtLhHdG6eSxRVDg1PfBYK1YvRomcvq4yafptiF9GNxGKUJSsrivxB3B7nWcnURHbBsH265Pb17p4aWFa2qC4",
  "key1": "3e3aKZ4qHXa6Hvp4mzD8tRLkTvdSKdHUQzpRTTRDpgfLpnkjD3YrUferBhTNtrYdLKLEb5KAp7rS2YDiV67kt8bn",
  "key2": "3CbHSUSRzXRTpBNaaFhnqnfWuExWWz9iswyozCLD6aFrZ52NUPygZWHmZgaXkLLnwhR8skkG7wC58EsKmZjvAdt9",
  "key3": "3YrpRiGRqdHEtWCvs3pFxxhiTRTbuWsDrsiPr1gbkrXhUNC4i9YusvCyxhwH41n1ZzERk1zyiLbNMRxz7U6QWckQ",
  "key4": "2e1wpB38XMmLtjH2ttwNGTViWkwRojUDpDfy8b2ZD89YKHrWsQVRbUHD1zg9grenbYVDVNZN6syYL2RoBeJGZobf",
  "key5": "126S3gpuZ1muZswSB7vDMNZaXgj6wG6QjVWXinTkdmEdWDW3nsR1Tq4MMqUwL7fRqZdZ3ageTGrUNzE3kMBeK9kQ",
  "key6": "34rgpzYdTv8sae9mcFeFxLDKqfvvZsxjPRyzo8U4xCXLgPJWEGpxN8hUAWQtXpH9hga7PJkmbH3QeMZLopC7np1",
  "key7": "2m3Y9neFmoJwRCc2DRrAGByoxXHda6jMNyGXuoXWeUQmiU9L8cn3MRqmmMnaiC4yRcxScmg6qiM9jGaQF9pMYpa8",
  "key8": "5W9jhcqWzA7BcRTTaH8LECW983R2axaUbSursFkrEFuYqe7Mtv1VyUa9YmGD7xphB5KM2MX4kwjwz7oxWiMeF9ah",
  "key9": "4fgxy5SSpTKvSN2bNYvqY8NcRSp9tCqvS27dZB8va5yjrzTZHTi91GU8XQrdPDXK9zv2AYEmZztdVv9UnR4sTGLn",
  "key10": "8eUYA7MDfWAsXZFriQ4r4ySrErP5KCtu4tTTMNVi8fsMHxYjanMvRCVMd74RvApL37CAFPvcz2iaNW35uPrvBQA",
  "key11": "4sM5gK8fiWdZ8qy2NggaqdchjXoifFky3mXRcnCf6ybvb6sNskzwf8Y8X4gnLpq1NbsxWLuSwnchRxVACwFtpZib",
  "key12": "cV6P5weRejkvLFF3wt9oBaHAFn2LwFghW6WWHLjY7SACZ7U49wyUW2d1n1azUtnhvUsBJBJh2jzEbLxfTiT2iRh",
  "key13": "392M7am77FPRiSFrfDTjv15hthFDq1K6DSiWdouSv7QEHHXePZHdVhVifLoptFYhseLzExCa14AVEcVJfJWAgcW1",
  "key14": "51gowaSsdga6b2ANP32itVME6RAGuUUNnGoFQ8oeig1wTZrzKpPchd2Pk6yuVkgnf4NG9wGWQz12CrShmirgDUfG",
  "key15": "47R38vtbeanQ5dhKBsi2Mqxfdeon48C76hbAWG86D3VwYTmjvZBhuKoRb5PLbdGGzptUwUu6cManCs8xDQmLNSCT",
  "key16": "5a4Ue8vLcdbnmXn6UQiGCVNLTA9HTUFacjUkpjEba8bqvzE6AmRVpU3P4gdw7UaE9pybERoc5XwB8oGb373fhuqH",
  "key17": "pLcAdnx4YtXJXzQeaw4q4rXPYgLhLZPVLkvR4YKZaBUBoyYirxQRfKLLAbVxwWDqtaARfav5roMK7VdCEwv9Qqs",
  "key18": "4ey7ViBgVvCfQymU5dsGUb8EiBZe1s19Pjxb3Wvt4PpL5z7PATck3nbNGGXzn2RY33zr4VXf6rfZoCPoq2yMjfKo",
  "key19": "FEGgMaHfjdw7DbrFu7tyfgw2TUPGhPCTaydQy2tzgMYasdh589nnnYqXePmfBW1vto3UYM2PcjrfM779C8p7A1V",
  "key20": "URuj3EGwCBCgqtd4ZRXxp23d4ACTejdNtzZqg3nb2NRoErHcN6hioMp9QN7mnyMygmcHFvfqUsjNSxRrKxuHpso",
  "key21": "5wDhSEHutLd8hbxXyZhgCUBDmzGoVm1BzB4immXtFTsTeAnRedkwS8EmmB1RHAQoMiywrDEd1tYNpPFJKcZZfaaP",
  "key22": "RxEAxpqjEa16Ka1CFMvBFkLmjvKAPuSoG3g1sFjdudNc9svLjeeqEWAEV8au96k7dfszdJnSEqAaxEuwXpvJFK5",
  "key23": "4CY6nDFEPRoTS1vQTMQdGKhbxzh8kQu2DnmfZFgHYGFy3Cxnwtnirn5ygS3BhYcNRnHPp6FsxScrHCY7CWMZTYJo",
  "key24": "3zjr13Qtfu2gvxtsWumtFuMo89RpXvi7U9eB1Ycz8YC9bShEkYD3eS1WB8U4YfdZoN3kAWQLKyCzMqgdYWKTBnQQ",
  "key25": "2UjNKxevfCj5zwLCn8NtNPuqQUE2t3AV3goyXXfnaVZ9Y9W1f3XHYZnx4aJ9XEhWgCFeHLubk93Wnr3xbWREeYnp",
  "key26": "2GPVxkcmSTHpN2LubshtKSmbqiJWKzbYEkLTqdLKz4NxQ4VicEiR1iGEVt7bMQLuraXnTao9rvdqsEZtabGEUxqd",
  "key27": "hDjbgpYTiDN73xGgkBy2rQ8XN4thESNFPPjFxecnitBX9PRd9AZp3qGxyfANTdjpH73x2cZk3tq5jfQ5Y1mLwUJ",
  "key28": "d1wjduz9KzRbRHrGqgDESNRZNQpo3icK8fR8FR3KiGsVpVrNGzAPoWTrh4fNpmuXz5STi6X7L9hXXQWMQTnh8zu",
  "key29": "4NDyKzjWGvC28xmpLdNWnh9zKF3d6HtkukLyQubrbfhRPHwwA2howzDgsBt11cjan2ibdEg8YJzRTa1brzWTutHj",
  "key30": "3ndA3TGDGF4Fccq3eRY2CwPSDf1Pi1cpnCPRjagnVVZtaNeQGics33QvsptrDJB7gZ9dFZoo5ZwYtTc16wkUXvck",
  "key31": "5wGEyTLh994U9UukqxGk7z41FuMCPPiMy6YPTAdVNYgcSC6f4Gp7bQKfa8pd4u9jqN1mN4G8evToULu6SoEc4A9M",
  "key32": "4WxRbpLutZpsbYrEb1dzeMcFS82HnsEUoUHRZV79zR5vXgn6xhBBJPEbnEYrXVQTKUWbtpw92hm2Z1xy2A7UqXCY",
  "key33": "5pLXwQ6GUycAVc6KcbFF6ZsgWLDJvXMfNvVuDUPtF2YNykkiLGQwJXGUwvLZboiG9AMS7wFVfe1y1jAkeSwQf7LL",
  "key34": "5QZ29aHBYGLtNKnU4E2THr7J2mGtNmrdkuBxz3bwoxamo7HMeRKkaB5rfud1FhzaU8hWJ9wfNFn92WUjDrrm2Fwt",
  "key35": "5w72J48NB1Qcn44RR7qYbsvqdQd7fRpY8KgMZw9FrdaKbL6LYrWt84bmxMHnMh1B74wpUuiEYtd4up28Fmfhdn88",
  "key36": "54oyLbwqE6UV9DBWNxyULQaXZiVb1pFJvXxknZ6SafPGW4U5Z2AePJfq6yZxHbCEU1A7NQhyXJPaTZmQFqBhB6sn",
  "key37": "2x8AJJudhGChkpzqqj9obykt4LrpiRKLBnbe2K3StJWXNBAcGNBWnZhY5ARXbg1Wgojxm2v3ZzXdKAVjSHEfo3WW"
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
