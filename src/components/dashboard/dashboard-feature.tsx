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
    "3w7bEaLFdLUeiELk6zckfkM9pKYejpJS5noTx4WLQsDwf8wVUANgW4DrCzPXVPRB1oFh5m1nhi21VQ2s87tvCt9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o3qrGr2exQdjLiLyfLcZUexUZrEdVZLNHguEYBC6TdNZdkLtwmGaHCuc2dgjD7xu8VB3hC8izGvyanqgGdbqJ1U",
  "key1": "3vg1V3Z5X6K5Vqro2Mj573hC4TmQmBV8WqYSjJBE3B15FjTdX3fEkJP2BPogiAvivig5Nt3rE88KjFkVsSbGdtX6",
  "key2": "2khuq7WCDPCizYsh6udaE5DWyUsaTWUfSFKp769ACTDNA2h12JNNg3XGrodihaFRTxb2LcZjFAsCjcs8ymGuATC9",
  "key3": "ViJLzJZTFTd9v3UcV1HhUhruDZhrMhB1buPxVm2gN5yGUSdC7MsSvheV2eASUFtLMSnaHbh5Uw5D9UU1R1W91XC",
  "key4": "2YYAg8mYnxrqz4oyNwxVWPdbUyNLLtcr7LUu8aJZUH7dKjt8nvC8nUPmdmUCaEYQQFr65zNiiSSyYnrDLEFzzhKK",
  "key5": "34zZe3hVmZtMhgsQD5NFAv2dSDvHMbG51d32YjeZ2YdyRP5NTstw8oERVoxVLzsnT3fNimzwBmrX7rhCvdmc1g7g",
  "key6": "bZjrTitbCjtnttrXf5UGSojBn7LM8LJ1WvfUsvnCsLdegVtAxEFDK81akDGmSPoQUUBJPCciovifYZiFEFW4A1U",
  "key7": "oPdpSfCdbG42nbdfM67pq5fY8qjLfNuaSvsCVkEsf4ZGh2ua47bmdHHcbHKawWm53L4cTCcwWnHQt2muMn9QHEj",
  "key8": "NvedrZPzvSXp77ewiFfbUTGcjtbTwtNJJGmQxqCtKtBZPPudCekegUJKtUxzcQgCFwGf1txciQa3hv5B8Xbpkp5",
  "key9": "UHqBJHLWkM6SWgp6LESLZrx8FGZHCfb5ryEosz3GikT1N51Jb43zFZyJD2U8NC7w7AgfmPaFq13yhJfZU9y3jkh",
  "key10": "297YeYQUubmdPQFvy6uQ38Sw9e6h5bpJYhgPSZKhYQs6jb23WscGHkPYFbuDgAf1MY8onbpr2PhwN7dRE8kEAxL7",
  "key11": "5K672dnCZWQk1uZ2Leef4rDYLLJGbroDD8SUFDuLkhAt82dLsypXoBkKUxQAckuDNHkWDvadphrHTjNjU7Z1bZRt",
  "key12": "3Gjq4dP2spMW4FcRXtQPT97EWZ1gwcfFTUyT6pTJ9q3G1pYL8CsnzmEmYyZxt3VyYf3KQwvRozY6ca1EAR6eraRe",
  "key13": "43XPcEKD4RGGZ3K1LGXFHKPZzQCW99XsCnCb9dRSQZkR21ChNqTTpY9g6e86qZ8SBTMdAMDQLunxxcJ2PnvALtPT",
  "key14": "5aA5HVkKzpXunJyinUv4BMWHhpLxXQVfpvuzrk4rgcULX8nJ5hnJBoR4nhYiRibQfvoo1mQsZK3CLng4gDeWGPBh",
  "key15": "hWMHjKS5Q8ZkGaEQxmkbUX6czZhJTiGJA8vAGQ6gBmEvEQAqzshvBASPE7SsdtpnxRmnJeHmNwmLY6GQQjYSVPb",
  "key16": "JMysBBAP2SkWxGDicUyzTUkrYfcsVXvPnT1siBEEV9JeBNo4hWoTaLnipY1dP4J79iVooLVD2ZTg4eFUb98ho24",
  "key17": "3GKAEBw4sEvmDJR8Qsw46vpvwHZmh9f3vVxFE5Msn1tgFAXckTg1UhsQPKc44jquNRn3K4phoo1P5grpd4pQhfwi",
  "key18": "2tEQxx9jxbWUTbyg66sM2YdLWKo75YiApjkeTkzLA8ZSwVGJ1GEZHSXFUNfY7AtXvaACCS1kn9g9cnUE55v9Kw4n",
  "key19": "RqbhN4vDr3MurKq9ocfR2Li3vavE8qfzvotUyaAKQeeGWVBU6ggkzkkVUvVF8yVEfn1S5nSTvdN2n7cG4VSyFdr",
  "key20": "3twQFnwMG31EhH5tosQ2vm8xq7yS3e4sWopBMr5XganCXCguCpoN8v1qxWZ1THzHwujDsJQCqVHnpBEJm5bJ2cHh",
  "key21": "3RCtfdRnNMnRhmokv6b1JEPhymkdkjaywiDpXmLcGwFP3ddgVwzAAQQ5pYY2QFCZj4xhbB4kH13QBujkva4Ma9QJ",
  "key22": "2Bh5rJ5bLQ4kQnJ8r1op7QyTmaWHMVSqyRfEQanaP5am9p8FNituiYpGEhgm5wvPvvGrUkfc1soXtKvLhDHbfByL",
  "key23": "3GTUdYEvVDaccAaFMCbVCEYGmaE3Nsa8XCtDu3vU42UoZ4U6RHDbFyWwbuUZ12GKX5VmwtB5yxf8CQuQMfS3KapX",
  "key24": "65LcoCLHh4Dvf1bzD24fuJch4W7qNRAy4DbiPDb5VzrV72UXeC43G4QuALvNfWE3WLQxoaG9GcTfD2swUWpMt1wm",
  "key25": "2r1i2uGEUmpa7qFodGS9HPvGV7haY5ALn2M6bHkMomZ6d5dtMrtMv5DgsM6peZ8MEvxiJzKxDvDu3DaTornydbUh",
  "key26": "3HjfqAcf6wBaWomFNn33a5gN8fnpEqVJfnTv1rxeQENtNsE4GEauEuMMPZPffHaiVgZUxGT2yGzetfR3g9ajPx17",
  "key27": "5jcjEc7ZWJFoFKfUSWKLZHn3X9FcuMy8nAqEAhztuyhUEYu9QfiLuujbSz7M5L7XuGbDS86fnum7QEfLuTvVLbtc",
  "key28": "3Yk7HHFSK1PZAGsNNXCfKzz7DpaKJvVhNWBHgrJwKuzZ5c2D7kmirANAi5paM3NxmCzYZ325w7M9SGYjyPsm1ajj",
  "key29": "4TLicupQxVJnRQaCcyuDwuJDQy2jeBeyn2ue6wQibCGd8aLzpgMVg4riUbigps38mT4zPACrPsCDmCLYchvwheW2",
  "key30": "2SK4qwZaGSf4DaeTbo8gU6EdxveqEfVRSKkFzentc7Q3fBsy2P3box7SnsW7abbNxFhFYLbaYMQaN5HDFKcwXsHJ"
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
