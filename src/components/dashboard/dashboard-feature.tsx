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
    "4qFN7Cra2Ky8VHx1pd4EfVqD7zRJXkt55kvPjNP3oPbsDKEdV7ThDLVzdJ6E1FqcxKFaRkEozadcGUrjHZoFG6FY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61nSqiKPhje3Ejc5Uwj8vcLF2iLg7rdHYb9dGD6wSdLfnU3NtScZvbM82X7PdPR2gGykivGRdBDTzWMJpqvZkVGB",
  "key1": "3rL3t7QefJrMJpcwc8r6CZKurxb1esCtB5Kt596mw3AbsZaBDvTTDszRPe3AbVdDPf3Hwj9ZsJhCHmpFMuNp5yLH",
  "key2": "5uhmdB71AuWemgLpVMaWHcsE67tqLBLW1YddwuYqWkpqsr5VEK7c82VYVWPzoQk5dAfhHwYMwWrADQHNmGmn1ULB",
  "key3": "46aStJGSjAJV1knp5yvhSaaytBwFyWTBFwRmStp4HzU9QXUePbShsK1HCf7zmc8C7GmSUP5iQqE1tVTAh6povbDs",
  "key4": "4poqb7GwZeB7p5pWUfpCifpWVAroRi5Vz4HzGcF9UdhW2gKKKQS8uChNUm39U5ugF7ck68iJcDHeMSKvWLYgaq3r",
  "key5": "59jfswqmrAuZ1vXPDb9RyJCFcDwZqWtka4pbcsTSkFTu7yM5qCPGRN3LmAghJ5BLFTgxM3aKCirZD8b14w8HL4dQ",
  "key6": "EwWBUc9o1BDjV8vuYsPoFou9KPJo3MZ18s2qZfj6d7Rwv2WpZR17ULDm6dLzHQ7GVuf9JRjSgFUd52EpadnY6sq",
  "key7": "sP81rmvewqvwKaTVVggqwhY12HwLtjpvZMyA2er2XPsjk6mEQUQANDmT4u4bQaa7rURFzhZ9kyz1BmW5Fn1XPKm",
  "key8": "3JksyBSuWDBVoA4UJF8JEHXJhJPGyz6aqF4X8WPWLs8NYE5fujMJNFYbrV8H5WnWnaiQWNm5kHq18WZ9oEF2Udh3",
  "key9": "29wFqPbeL4HvoYY3wxciXEdouDoJxPM1YBKrNHi9NQvhh3oeBGDi6moxu61Km8SSttLH2hbYKQoQRM2ERJdeJUSz",
  "key10": "32bE26F9RaZfV2d5GwcvK4FeVGSLCjmZFU3rSczG4mv7QAUH9iT6bFuxG564ZZXG6LYBJqiezLN13UHYZMf8GCFT",
  "key11": "f6DW7B2FXP2u2G8gDkq2eAWQ6wXwtYHwAsAxrDbmGcbnt8pgcaFZnwfXNKf2utCSMcgYywXjXqgKcrR6hGD3s6X",
  "key12": "kEzj9NLZH6t2762Wq12r8hYVE9f4ppFBtejeh4TQJ8TdyqdTjeyAR2vcjh6evdydqgiRxirEkRrp1nBMjDVN3ZV",
  "key13": "4xg7Q1W18dmcS9Z3Lu4EqhWPdmupQHs6KWtvRN6BQeDGXRuGw9aJDYrMm7XDBwmWsdtLseU8Rf9xyu72goFP2rE1",
  "key14": "2xvaYH1vtjdPBKdetZTmhFZ3TEyRFhVUsXh8MCWUQzRTcEHVTu56vJyU7Hp98aRehmBKEW7mJz8GPTc5NvWtBXw4",
  "key15": "oXFVGzVzEE845By8HPq7kPZSrRUbWhrqaK8WQVA2gk2H3KeuqizKXYKMGfWpr987sgjroiC3HA3W5wpNv433uwx",
  "key16": "2vRdis2qiahkWNGvTexb2dE9e9Y6dzbmUmrxDXtt2jT7Q7j1GN4dkrj7cjbX1qeTePqpRTamBwjxwyayFNdLMPh8",
  "key17": "4RVZjrRskPCrfSRrShDjMQnkcVvrn51ugZo56moZMuNPrvnfQgBRifCh3k7ffvqDHimoP5eDG6tE9hr5e22t2p5Y",
  "key18": "2vKoPgRaMGW7kTLf6RY8RAkzmWT3YSuSJ6ShGJLwzpmdmg1cqNA1qJZnEhDg7uGzpAjq1SqbgokmvWga8sbTQ7RS",
  "key19": "2rkUzfB8cRduKebRoo1FEg57bqMDwjPhMcfHpQAJSMJRHXqfsAriBMALULZnwaQqC7GMwEXbjg3e46cN1yPX528g",
  "key20": "3u7dJsRb2bTsgxfCG9LtHZ8oDpcVrgAVdDEC8ZatwimJb6sXFcV32Nm4WJKQYu7tVHrGp6CD4zA7tzeiCWcoudzL",
  "key21": "5Y1rRAqK8E6LQ2c2xamg4hSzvTNmNEBCparYXYBq8GVsK8d3KreVZnnmXitqyMfVxNyAfhFRXWWZcgm5yogxaMbZ",
  "key22": "5LxcyEcft6MQuYBAQFUbtAGibuoJD6hujia59n6FUWeqAkSdCziJvM7yJs4S3Gy5mAZVZqNWpwrzzySh6iLSNMsh",
  "key23": "3xvdbku1efNWG5yTJ9r7SoCGcc9D99ukt6Dz67AgKPJof7TBaXYVMKKgP4ZRWzXShEJrkDUYSkT4jYAP3qnEYGmF",
  "key24": "5w1BX6NDeScbodhi4v49f2YpGurPDXxf1LENto7SECJYjkdgLRJpVJTdAf13ezTfzpzJ1LjnG75NXmSavAPqE4VD",
  "key25": "2j6vreivHSNwR5sLBTgBxiBrsKuEowXMskAvhaYMoN7D9e5R5MtMrWTjSBgvsZYoDhv2C9SxHXT7W1L6B4AdyyME",
  "key26": "2JtDUKBR2vNziruai2uvjWo94phphJztqNycVCvWfUAntFZEBVqk1tXV1bvWmfmqeLBRtmA1UjgnW6bdqbWL4jwo",
  "key27": "23L9JKzyUnBFRBgjQZeXoHuVAyeeuKN8mvmSosZvggNmXJ65E1U2wYfgtLxGpW3vr56xqejyqN63ZPK77TtgKc6L",
  "key28": "3EDM3iHQ9NoH1KB6sVXLsmLPtzeZTvV6wu1GUKSfeJRMzmP4ySjyXw9VssQMC15mxR5R16ok7JZVNcXhBm3idpHD",
  "key29": "3zBAZqQuLQSgCgpbKScr1FNKY79CJ2hcrjhEudKyx9zChirwY7Hv2QZX65SyuRkDJHDcQPcYUs5rsRGxTsaN6ZV8"
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
