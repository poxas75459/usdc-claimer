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
    "5DjrUbsyczN5dvUcb1sMu7tBRoR7FMDTH8w4JGEDBVGH3NnJJeagiZzjqbtWZ2MjgsLx9efsuGUNwBtvXZE2aUYb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BDyy4PvgsBX3VUPtAKnHtoSbhjewreSL5dpRrFL4BEFYGYCURvYaY6EoScxj6641x2CSVsiPUqGYXMTVQxyMrrE",
  "key1": "349RVqmoFQ9zMN74CSnws7NgHC9E9vYcpRm42V97nU3Lp6Utjy9PUfNPBJe2gjVxKQNHEXVPfnCres3ASzs2Sepc",
  "key2": "3F3VUMmLRe7EaZnuD2duh9BRAxLBFehz5zVq6fL6P935TKDuSNsc8aucQFU9TqR8eYEeZv6kcGCsv1irbizHhpW3",
  "key3": "HqJYTwrT6M4rojkbtERGXTh1WWFMpBGSt5V3qUoUTEZrTkN9r7wyDpjX4N3yuAsVXhLScaAVe9nyHGc8EnBCSVM",
  "key4": "59SiAnMorVw84kZEfvHKszdtjFAPpSwbDzNwnhnhj7ZtC7w8ZtqGqC54QbVAfPAdGvRYFuyHtz94se4yE2HXQiDW",
  "key5": "SajxeytRoAk3oUhYuXhJTnyrpedxUxELErFGbHH5ciUt6sMMrLJDVR6NSo8A2cWLJRYqyn9Jjb7nPiL2fKxKfuP",
  "key6": "2pPKmT4PD86i2CgL8XSY91mrJvwLnZzCw8B9xjBFwGzwhNwScqAeMbNMMXJzhd1thjDJU12qQ3qA2Lh36C1oBcyL",
  "key7": "hrk5PRcyHoYfqZWWJ6ENyfgTW5SCmHsEzYmAQRGKzmTkNu97A5sQAJxEu5uQ5wfJWs57gpSNXmMdN9VX4cELC55",
  "key8": "2x8jFN2dr2MDhW9L1oYp2bbEQiBuSHMk46XoisqmUBMqycH8j1cafFxrK9Tq1LmiLqBJLMW6xsMVtSubSKcyLbah",
  "key9": "21PmTXt9efZXAF3WGakgcziUeeRZu2eD6t8JoKFtdJi91Ye9WNdwB7rqRYT8hqxGvT9dtaRXNHcMebRumF2jgyvr",
  "key10": "5MgbkFRgEGKxP8o8yjaNkNVvU8M7LynLBfDJjNfrGypxhb1LhV49e6H4XHAe9M8oH19nfi6dcAwVjBXGb5khzMgv",
  "key11": "5rpdKeHFNfKpFQJJMtS8BitEWvYhmw2LsYAm3BffvN7hjon58PCTkTMenn8fHnkYfaDHLGi3LT2DAeys1oUuVcNN",
  "key12": "2ZsXqsKKA8MSAmAtSRsHtDUXLh4iFTwsNF7j49jYpCLJdgdx6rmxfHWWTb2frz884hNREBshrdsdte7GHrYGCQEU",
  "key13": "21pTELYLiFkqHwk7CMc2GjiKdjuDdLHmkc2J2S5WsjajrMguVgi2senmMwMGzbdnXiSxH1TANZPWmdXEWzxCV9FZ",
  "key14": "2edRtwQ7atwqEqAq9cq8GpoKerbQBGxhUbasGfRqKKj613zUnuRW4mtZ7KwQDn73FDbxAq3ruNuobCRCPXULBdE4",
  "key15": "4S3QVfj31s1ahBK2CKABFKRPGAXc8LBX6MsfNNMBDGFA4DJwLj2gj5TnzMjQj2jfVrPUFvvWsAnC7xoBiWSgSPS1",
  "key16": "45VPHcKemQJtvCepB7X9mhsfYV6kseLvPFrpW3to3fhHcttyqHqnJSnGktgFVGuEGK8fNBFWaZ89SitNWFrVcve",
  "key17": "5RZwd4AeRUjPQvAQ1KVmf7k3qZEkedEj6AeGmYHwP1XDZGLwF8tNJtNhPXW7cBDBNd8Zd4x4RbBAqLS6zu17F4tX",
  "key18": "5s3pVHwyP1FXBFeDNgzeY7R38F9aymAMSny1qwR23QFwYvNUQufPM3AbnCwWLeGoh8uqW736efKU89UCDS9Ls3Qa",
  "key19": "2jJ4daFMowsdd1ctJKYA2e6JhKpYsWdWZrJkwAQz9uWExm3G3KyQVzSDTPLFqWSbruvWU6iLRuJw3SN8ek6fLPso",
  "key20": "5BgtCgmFk41QzQkGydpr6a6A2xSDHVYiLbvEcKfmrCqJ66ZwFsNJe9jbNkSMo4bCMTZbCfWt1oWKe5KKiN6a3zi7",
  "key21": "46s6arApCYMjFp1AviHKdU1KLWHHskvi3WvrNuDaMi4eCsmtQ5tzkmXEAms8Epv6zNm3jWMX5Grbz5L8Zs5u6csA",
  "key22": "4L6zhWnqfBkf8ajZpurUpELiXRLrRuftcQf4ig2apWaVfGTEzJ1sUoqHavHrnHsKBC3YN5r585GdPeJ9pYXityqn",
  "key23": "67kqrF6zfnQq2DtqD7kKeh4f5b3nzD5u7TavUQ4gveMMHb6MLCauvNqPxScor8tsth7Rfr9VEkYu5cUs6RvskFXm",
  "key24": "uCoDqH86thjsDAxuDuhwRqU4oQ2rmJCeJpb3WmtJxh3QtC5JAiMCHTopKHdqH84UHfJvx4fy74Mm6dhE9riZzNc",
  "key25": "5RuGXxs4xCqRz7qW7YLUgDG6NDr46PVvKnyEcZKh595WRnZvwyW2BnRoo8Tn5ET1ArRyggyJiKGtiwqgs7qkFapP",
  "key26": "4npYLa8wEu8Ei3fEzjmZUfAyGTs77x5PkzJBV1eUZJbnYGhGNRes6MVbLPcpGFTY85CjZsfJgDKBSWWFTyzbmHDB",
  "key27": "4uTsZkYZWHcTHHAAgNqRSj42DMADycDcwb82ciZiLT5SQBxV4rFqg2FAgLuWNQZzACs38quATnanRm7V9ACLiNuu",
  "key28": "5Y8ceGZNVMoHH45hb4Y1RAQDqPUohgEBgA3oyLip6FaM8Dvcscbn4xDsxA6iTYowSJMRZ6jzq1bP9Am5dNgJHANm",
  "key29": "RgDHaU7NrYyQkXLgpwJAfjc5xiv82fViE7EkNRfZdahMpzXS6x2Kavamesp9HMJ9V8KvXrV41JvHNMrUfYTdj3z",
  "key30": "3o6dPmgLyg6nss2yvuQSfdNayhLTQ5pznXydUjrHAnhw9YFTV86dkKn4rvdtmNrPHygek87QkWWWnwaUND8Pm5ow",
  "key31": "3QgLczx5uiCrxh95SbRxL6ErjJKEKvuZ2MTS1hSdQUz2UucxpzCmVBdHqepiWGArKF2B86VQHsnzDyrSYWs9nQPc",
  "key32": "4yYVsWX1DeunmKP95cPqogTFy9jyysKFHrzDC5AreB3vTGdXfRhHKABVvHMNTjNqEogjrNXWYiFe23bh6J4yVpwy",
  "key33": "4i2icaWnbiaLqWCMciSG6tG8ZenkTvfiabEumXBX6NGqcV7uo7HXpij7ppHuci4nP552sJM5Eyzo1CgsDbj2FJ5b",
  "key34": "Ehev3yyqrV4bT7VLC57bkazgMRUUDH6v9QxS97nkwvp75g99j7HF6QJCFh64W1CeKwt4wR96LybxYcbaL3h2SYn",
  "key35": "5UXJuPki5uRNsoUfsxYi4XMEGmABZjrhm8TSHDnEPE6FQbuALYYiZh32FzNz3HjqezDKMwk1xGftsBC7Y1q61r9e",
  "key36": "vDMgpK1GFAtqFz7TcMb73Dqb6j23acMwG5peZSAefDnEgDDhrmHUYseDd44UHg7MofrvQQfgSLmqkZnSaZCwkPe",
  "key37": "3kxLmm7XdECvRUPd9eggUMJ7Jypogk1tnLjSJCawWmco6CyPcDCQNsubHRCGGN31ee97QdvUQnnmNoRZcNZpnTgf",
  "key38": "psPhmhBLvQ428NHWrt5etejWHcgDc9SoXdpazC358sSKyQCzo6NYxHUXcgvwWMZLZsPVEC7QCttPCdoa2Gd3uyN",
  "key39": "B9r2NZ1R5cYSr2RyoRET4mZLEwdr1NTrV6GJTtmtyxpb1bB4596dauZ7xdWoyssGFVvANDFbC2DgrnCZAVCLFhs",
  "key40": "DLb6QumPyNeYAx3mQNxTsJCaLurVv7oGt6kHEqVRgkXh2wMtR5bKBwaV6oXxR1nKZLbLJjLrA4oEMezcchsrrr8",
  "key41": "2juqCxJveLSektpZGQgXuz4pNLfFfzYX5BXCYBbvYN3BqY6zHZN8FvJe8s4ndQ7aYBd4ceSKX328w3K4X3BoTxCA",
  "key42": "2wYkwkoHMp11du7KQqATAaRWFomc2KgZedNan2PKxtytwhFfctgFbPBqhUoZCnwByVDcscrvA7xkjvQart8sLUHh",
  "key43": "5hcmQ3mwmaZ87kuyjmg9DShrmdeqrJoDvAzJxHeCtCX1qnx3dBd66u84C2wj8o2Nuc8aVykXrqEe2CyNcxXX8WcG",
  "key44": "BD3WeFydHnCSzsNTUcctBMY6os8FfTyWhNGKUoS9C2Yr1AUG1bUA1XqtbbSCZJ6DYHXdYA4yXzHAQgDZquJ8S32",
  "key45": "51AGv9wzMDXPfcgaSBs1z1Pyk8omF9ph2XmaAwtrhj8MLATXtDfvQVpBkHQM8kHaKftj1KszMctfJXtou497j9Lh",
  "key46": "59moN5wgUgr8cxGpiXFXeAXYNVGbCAtdEUxZnuT6ardWU8CujwcvyJpCpNa2YtvfdJGpfSKDnc5SLuiryQ8t4tMY",
  "key47": "4u7yHJd522moVPTEZq1rEu2UWU8fBzutFEkaep7fXdfrbyu3KLwvenmr27W2bEYvStWF6tUjSqiRsUC6dsVqoBo4",
  "key48": "3EPoJ1CAhUdg6WE2NwK7vv11LdfnAPGXGNid8YYZN3a8G1NtfkFcDrNWZPq3A1MytLNqG71ArdFSGwZQ7AnuCBgF",
  "key49": "64FPqXfxXJ9tajKqkMTTRNL7rMXb9XDeAgSxCRPqjNqKQNPX2MHcEFaHfUySjnz2L7THaU83UPqNegtamvWDJQVZ"
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
