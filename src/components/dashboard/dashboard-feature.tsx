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
    "5v5jGsZpxeEhnWiTXp6a6TEkEEyQtjzs4ZXhpaYrf1GTXPVnSsr5WjdNicp6FuRJ8duvbVAk21kCQuTyAWtXpHP8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fEJzevPZUDZtLevRBzrgtiJSESCC4RmBPcEr7ZNFYQo4D91TAioqDmX9kEAhBpPA3pcoBK8hixzCbFsfeshKC31",
  "key1": "3EqqAWLLkdee4KHEdRuyxhPdmsTLeE2wPdrudkufXkTMFppNeTRjyHeysEwqWs7XfEfMTHhXBP2J8rSnRhvuAU2",
  "key2": "63ivHQiZXddA1wPJ4ESnr2y9fv994UDULCbSFo2Umsxf7anrbiH583oVJcSVrAeqQYssjL52PzzcEWUsDWn2yLoU",
  "key3": "2fLmULWGagwKJiGCeKxc3UL48VyVo492KeutNZdXSCDY4qy3C9JM2xkMxb2B6jh2jfyd7NBgzgjL7vDLkLJY2r8y",
  "key4": "2JXZf7dn11fknrsQmaTyNoH4QL1EnhndnjjvWdMaQFSHATK6J2yStT11VpePKaeTrMLULZfyjuH1ucrQMa6NoojA",
  "key5": "4Xrrz3fjXopHj1WajbARTTZzaLfFKNmsiu3zuP5E6kYEfqVXbmJDRbYXGX68r8d8zaKNukxR7uNPfKTnDofYhTR4",
  "key6": "3WM6GkXZk6wPKC2LP1BGaeJFg9d9Rdnr4fjAw8JiU99cY7wP7RzBeeQPgyrzUGt8ModPzmXxMK3nuBSw7wR9SpLr",
  "key7": "238fWZ9ieJW93kVVFi2Nwb8uh1SiN77usFgQEzi7ye65ZowP5cXUjggKN6K1rHymRbQB5zW5t7uG1kQ8JQ2GXxXq",
  "key8": "4AJDGEm4NFNsm7p1VHgu1BoWSU6Djh6tdqfeDdc96EjWt3GJ3Q9u7dBarYphrpmmssRiCGbhcjCk8QU9XDRXQJcC",
  "key9": "48xW4biHNWJcwuVXwdztXjqVhPYsQzypxxHGQoGteauGKehAxQQue6kms1L6fmdmj8mWsQcB6bFNrLcpLxL8uWgb",
  "key10": "5noPSmxudqbg89hxmCQbb5TsFL2K5hNnu5pr453AEpkDFYsagpmi2q2g9kFoAsS5FNW1Qoq25QJPtQpchDWTDoZN",
  "key11": "3kavS73dxb9aM1soxTgsSwoWXeoxU4XpuYvwsL6tfDy1o8SfHyczp5ryTXf2BYJFRZXfhJSme6YT1gQrarmJuEqL",
  "key12": "2W3f9UzqLm5Ey8bs2H12bf9CWdj1V32Sfhm2cKnBKAc2P8dPJF9NTg62hnP6DMMguxtzqEvbkXY5CL2C6HgsfhmA",
  "key13": "Vsp8pxsuNYAcxQFR9SuXuP98i4H5DBa3kjMRfPsex7hP91m4kDdNwG1yfterFsNxbk9JRCkXnT61KwwL2EHmzsi",
  "key14": "3tgEPsGvGY7fFueV1cGHXSZRWvbiJ5yCPBjAwUaqVbGUmZ5HNU1W3bmmmKs7YMLuMypDLUUQ48wdsNrFsp87W8vs",
  "key15": "2CmZeZ6fSRwqLpv7tEovY6kYPhGYLtZRm2ZZ9QJDsTKw9GanjZHJREGDqc229UJpCoan25Yk2qwuBozgVKWMRmNH",
  "key16": "2ks7dF7NdG1depqz6MWsfz58NTL9JtJAVbuYQct2euXNyZTe3NGrRPZCYsfmr6UBUR5vE1xaTMkgxfB4yoU88tDY",
  "key17": "3752ScFX25YGY71NGTqRvRtt7UCNBwUeyPVPWjmfCsVWQRFz7otvrNfaUMfS2q1AAAc8YPFxwKSYCpL3T9zEmGYq",
  "key18": "6oxvTe5PY4THg4xf1bk3aRm7UQR15CtqnHx6k8CohnetHKmLJvNbigHT4jjbpLpq1GhTd9XRc2GvbhUJDdeEVFf",
  "key19": "ZKUXvRJ8n72kbuiRkz5Xcx75QMtm2BJBQHKLA6LLrfuGsAkrxnNqnzMqoShbmruqkfKCj1FnoKyH7sB6aivTWBk",
  "key20": "5iiWH6GfnMpc39jmucrYCuZZyGSdAr4zbV7uyZFBauFKhRJz6BHsDTWFCdQX6jGCeEnbBheubvEYcVgEm2wqjZ5N",
  "key21": "3WiAeNQuwX1qbzZHs39f9smNwY4fmpt2D3fYRYTMLgYb6UyEpVtRuaFVTEkuqzKrtZLztcBheNu3PhNAn8RFb4xF",
  "key22": "dKve1s7LMwvxbPynapWEkfuRTQywsYtuhvg8wVzpMKH2m37BXFqNimPDVSBPKMTj56uUkN9S2hSHpExPB7YJakq",
  "key23": "4uSCkdVdqRySreb1JcqHrGj1UKr4gu9BVJqRw7JRsiQyQYFmeMezyxsqhLZbhy5fmuvqc8HPpLFHJb8PczsGySo7",
  "key24": "93EVCWseh45ucGvdQ9zqQrfradyN5Hr6iUwpLqT3ZhDrGqzDJiy4Ydhjz2bQsWrj5P88aZyK214wFWFCdBYehr1",
  "key25": "3Qj6ke354VRaQdhpPJ6RPZ253uDVbCV3LBjReocnN8y6WNHaxZe6mA1BMcnHpUxfcomYBmZV5VZwNZSRtKSJPyJ6",
  "key26": "3rMaZdQi8xsDSiQNDt1Fi9EzH7x4wFM7cRUnqnnHc6HTy3BQ52ZMBJbT6fvZcLpvkMXusnKP44frSQBtLQbtivF6",
  "key27": "3wzKKJQafhHsh85uLSf4S5SG3JvBoC4gsxoeeBSDKGwVe73LCGmMmkgbCFVQaqp9LMREDqfEQoHsKVwrFyt7wJqq"
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
