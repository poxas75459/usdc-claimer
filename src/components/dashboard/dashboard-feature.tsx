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
    "3bfgRFHU48MbARki54FX7auM8GwkfDHNhYuBkj9dYMjPoKACCZ7GTUD9J1En3V3i34NYKZxogthtthHPJ9NcS5G1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61fHJTXqZg5245teXwQkWgmYcPxt5gVGwMxPXAbMpUCFwKDthDzW285fnJSYPcKH9BdYfQaGSytwYgBUo1YaNLtR",
  "key1": "4KDNwHk2qr7zY5ei9w3FoR6FBuuiKpji2wf5XkmipzihvWSbj2kafTbCo95r9bWf2EZnpmD6gtCRkc9SewBhkEmR",
  "key2": "4f1L3BXdR7ErkZaCfxERgtb5JXdn6hyvXFcTb2KoJe4asVhjo4bUbF1CU9GJnoaveDYyt4xrxwyoQQRzwmM2YV1f",
  "key3": "4v3e7LpqvqoYFP6j6xx9Gn1Pw7j2f8z9TTW4skHvzzEDwU3H8MyiBRAzJmMU7EatUyXa2yFqQMBo1w9VYf1qh32s",
  "key4": "S5zDu7vVwT1vpKpSvZqTjpMfki5X1oFSxLUwaoTwPKGgs3eLcp3TYATjxmfHZcYG9mxKSFrXVoVH9F8BZMg5V95",
  "key5": "3WEEGcR6kfS5ChbZG1ytrokEx1uKnGtTSQbowwtC4PLF1kiqKwcju6GhTYYLHWPKsBdUJM1hZLyNzKWF1jfKmEvn",
  "key6": "3zMFNzwLHoR7SqErgJ3n8u7L475JaU2syJxFPzFXtEtm9eNwpv4m6ZppqCS3LfV8qNNgh6RqhVYttoX1GjcoJkXw",
  "key7": "5q3bVkxTsV8r58MNYJTMppqd6pFexKNksR6VX81xFjA4mFcn5GeL7dcX1ShQ4S7feUarQDobNVHF9adSCQP7koVx",
  "key8": "4qQVpvn6rnu7yLc8o9QkTwWNcYGkcfLR4jnFdA5QdM2eeqTvsVLhQTzPGf7fxN8v59nAnqgvBNbxQjwjAMjdeGaP",
  "key9": "23pxNirvXyb9RA5XHBEsCyLeANvJei5V2U97wjWbV3sj8KGk6ZXRkfSDegYzUMuLmip2wkqKJtE8T1SCu6DK317b",
  "key10": "5LdV2QecHWh4BjrfopvZ2jMVcZ77VSow8ipYt9kSPkFcw6kqZKXKX87MPZgT3wNh8p5BEYTRobZAXXSpEhCTp8Df",
  "key11": "4USC9n2L7q8fQPjvnt4zvdCbq3mh3eLK38KkxUdj4BSzqbc7rnv26X8FkGGzG78THTJE1XXsbUYntNSPUsntHMvj",
  "key12": "247ji3ierVnaWDE5jzKDnSxHmUwFzL42Lvtdkgudvh4nxnRygft3ZppZZELab7WdVe9deUDctmLUT2qjozy4GJCK",
  "key13": "45yDYvbigUcpWdNPkdAChyVDh5n6Kzy4wBjGQmgJSkBwTmh555FZB3ZRZ6SnDNn8c77FSzDVfmZBMZC9picBKMNc",
  "key14": "3RW1b2TUaFR78K8Froqb9RtKj1gx4Wo5oVrC8nRc2q89YvG8UrbLwg2uoAgSzooDDvbaRR6fbzHmxRxLMeqQ1NAL",
  "key15": "3L9GNU2KKPLWFty2eWsTntPu4BoRt6pU9w4CP1WSZDwwq2ZYkckH64BAFX48PpypvTN2p57ym5JDJ6TmagmSgTHs",
  "key16": "4byNp1Ry7SR6ykgctgVA5bdRMAQUbsaHQe2jj3Rcwc5FfW98oHk7x96XHFyCFMn5g3kHZ54XxZJee8SyMeLFvbDt",
  "key17": "McWVAx45r8bNgLkDCEEnYyik6bwcdSKvxcDresQxRtco5RtMS4koenHjn1RFBkkQQ2Kkxv9ZnHX3qgP2v3TekAy",
  "key18": "5dssUB48gpM7SqZoYqNUCzAuTNoGS3sUN7DKBhnZUnAaVZJ2WxsGDeZzTz45tHbgXtKqnnqJ9QfZ3fDxmxpdmJYV",
  "key19": "5QNypwDTVXVGvRkLpLfvreqbrxac6ocEvQohXHjaRyGAxaBpPB5VfwvGzpfKiF8P9H5tTqRfdZKqPUN6DeKREUy5",
  "key20": "4MQa53FfpPkr8QeVSpoA9ARg3UknmCCQwwpz1S4HyS6i4N6DGp3cPJZjz7Hx524y6dzwd9Y7eJuK5BrMUQsLT4Lf",
  "key21": "3hj57hDZHsndU7iZrsGMQbbVkYQCKF9fFdVoAXsr9LZ9coKtcBz2UHc2z8NJL96Gc1kzeDf3w5xxtTB5nU8kjvAY",
  "key22": "3fmeoqCoKBKAUsCuRrBMuyxWoAjdt7sTMUr53239VYxKubrASfyi9vvY8LbhNcn3Gp2nKxgLrdZW1siWo8NzoXum",
  "key23": "7XB4jKnqZ96biKKqyyivYYPFNbrvzf2113Dy6sKqMTCDUFX8bk8hhpV9qsPVHgBE5to9Q63UuDZCKcrxQZwZeii",
  "key24": "2LBgpZBzmKbefEgDZ27Nay8dNXaqcynyLjRnVnzYfCPXp5oLEgP7SUgSsEkgctZHxtdYqx3ZkyeCwuRp2Nvm5QJo",
  "key25": "4wfHmdnt9k9KMN4wTBK9Du6ScaiFDqSoRpQH8i426XCuLifQ7R9QtzwKb6Mj9n68iaVEXTwrwFUFDFZWyGnufphT",
  "key26": "3jMCZSjBxN4tMJYTE9gtg3h7oTnJcXTH8B3eN5cDma53ERjS57TK7AkuoKC9mu1N5PCKxayAuHAfD2XXriZ8t5uC",
  "key27": "4FtXeLwJHmuntSpUxymtELYFnbKrZnCKoEK8gPhPECi7752hWXgGkuDqHHbtyxRsb5Aykj52zMcGa5VeRsEQ2PBY",
  "key28": "4WQU4bHtcQ7gGchcyQP6f2aqsbzqhgfWbr2Az9qd8dzka2wNNt2JwqbFAEwZFL2PagBEqAPUtdGx6ruuARh7utad",
  "key29": "2pU1s2XWBn2gjZGoVaui9Xv6GAinqW5GHWfQ3kzSWd5P3DCtRdfyjG1QxG3PypNLas8Mg3zii2QwnPCKafATarec",
  "key30": "5qr9v1zDJ1kbm5cy1dVR2mnh7w4Y77VLNnynK4bkEMqF3cFM3Pfq7ZB2JvUBSC3X4m9J4nbDe1pU4pmpDaRLqug1",
  "key31": "5NEhY7ctbVVx3SPdKdM2VfqpnW5vKe68UXp2CPEAHYwkPiEyDgAdXzcgevqQjGRzndDpgN8N97jNGtPjnAFPSD28",
  "key32": "2WKxgNNATMSQ6mtyfupe4PL4Loh6vyoZcXM5XjUuUzvFWLEJqYbVXGDeDKKgqhkhsoX4C2jvWDGuZLWBcNeXpu4d",
  "key33": "CGWQV956Q7G83q4VbP7aR3aMLmrT4VPuGbzsg15t7AsTnvVYH3CuWVb96HbCrjKaR5qijvSGeyvYLv1keLerGqJ",
  "key34": "WxycCLLz6yCo2FYNMtSsdRqKDhxuyfBrQ7xdbRrL7xtmFmi3BE9pt9kFyBxaKW1M94nLQK5yGPTQqxena9xJicD"
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
