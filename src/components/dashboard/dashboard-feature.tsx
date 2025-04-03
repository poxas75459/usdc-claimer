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
    "4joaKy1FEfG2cbKGJNX2ukPRMZhcibhXbt3PrrscPhGa4MNQ4xiEwmBPhumUdUAnBT3WiLgvV5rUzH3m66U8SQMs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B6sMrx5ttA2GfmAY1RKodhy6yjXW46h7RUVrEPJLNQJRciGr51jH5yNW4kN5dcbX8hNpyRT939RuaauTsjKJWEW",
  "key1": "5bKa8RtY52UgxYPFqCb95YprjLY5i8z6bziRmxakAoUqNXUQhZCCuCRMqu1QhH7pvnGW1eyRWn2viqaD3JJbGbdm",
  "key2": "3iqM323QD1Lyi92W1LK7ke7APR1GQMncYMEWVmCpDeCQWo9QV4ijgNPbbyUV8EeWHSpEJKouFqaBKquLg6J8A5Fr",
  "key3": "rCLiKUir8mpH3r29Ezmy86QMh5AmbbzzLaSW1gWkMAijx7ELgaH8dPrK78iLaN3Ja5ANnGJXSeY2vLcWjhNEjYF",
  "key4": "7GjsiJUkRs3afMJkWLfNEWwDownhpFFduggXGWByV9Ci547rVx7aF819SXbhSx7vyJjBhXGZSdnyM9MXqYjtkzn",
  "key5": "4JUe3ui5oZs91Szuga16G3hAjQR9tmYM1cUChdZ1Z1mhJZp87ZUFcYzZUb7dHNRmu2noAjBqwwVSc6vL31vJ3Ub7",
  "key6": "2bmsKn71RCmYvSj83eretCuc74LLUVeXafdcNhNHx3TZ87BEX3x4LU7ukExPzQ6ctiRLnL4yjAaptb7Du8sfvmK",
  "key7": "2izxiyRXdHNKbgbxfYFmpFVDd8x9G5xKPEZRMvWUjKonAgwBVfL9dXVXtdSaQHvxJhn1gJwGv3RFfuy1MWbt6akh",
  "key8": "r4KV6xAfdhtmMjEFsv9UkkvvKGBXj3xZ7JTe3Jn8Bw71KMfMVbs7ai61jTyaG3uYxboTZxJcEtVhBMQNqDmbFxA",
  "key9": "4Cgvap3fr7q9V9Zk9wQhWLngE3ECjyMfxAprDLGqy38krC9Rw1XWyBJK6Dw466BgXBJe5zNpf8w4jFXVGEKQ8M2n",
  "key10": "3gRhujLudRxiuRyStkuRLN7uhGMXjhmfaFKJZEKTCHuKY6mUVK56UWeESkeSMLbnQYTcnUkPBsYY4XGuBoRpoZat",
  "key11": "62xsVFe55LPD6nVHpj6w65DJ7eGKPK2YTEXtnMMSGZ4f7HRjHxZGwCdpHLq6Lnu5i2273CUoDUQNdMGhAx6Lr7eC",
  "key12": "qzGwK4i6jEYRRJUmJ4qA2WEchcaZinJLFHRvSiogrtUD3pmaDgkTtjAmRChyCeNobFtNEy8M4CdEwrdGrwMETMs",
  "key13": "41G7ajHkWAvPYzmqmwCNCKec6RNWNCtC7YqozpiD8G3gKzR1shX4sewUAcXXb8Yq6Y1guVqp2fgzpxWvk68M7RMM",
  "key14": "4mxTeimUR8q4qc5q3eGeCgw3HKeSj1tFc1hdmSj1Bj3FuS1jJEfpNwrrgSoYcu1Btr9Xck9iYAJtYwrh6BpYCJNw",
  "key15": "2ypjYFX9z9k8kMq8J2L5PoStvwZrE4tZayjaGPcSYQPCDqf8DTjvfN7kxNPUx8RRfSxkbNfFzYo3eTgwzF1NfaF7",
  "key16": "UWkLcgzxUFKtgX9dNe5ZgAo6EHEYUKewbbMdoKQrnn4wZyCppiNFc7pPowkhxxXEvsMMwdUBs6tZNdBtTSDj46C",
  "key17": "5euDiYta6GFUQWCxZMx4QQ1Ks7L3thY41vWLvnps41P74DpEMuDD4pqtuSaycguZB3kEmmFp6iJHxxsgtTrdfbHx",
  "key18": "61RFYmVdT4BeWG1eJMcedkGurVSzJhfqHNZBTpgRyf5Hjd8WmixJFDNgz9tzmhkuo7uowMikTWeXyxtHguCg5arQ",
  "key19": "P2iJkTxk8eEDUMszKbCDNUEo2LGKjN4q1wnRYm1rkx8LgTKqWaqSbsmZTkX6czNjX9Qt8RHZUr6GAYxRQucfF5H",
  "key20": "38C14W6oK1Cvdg3SXjwaEERESM9fApmv5rwCCEC7KJqf59KnLxi6Znn2xqDZrgbb7JvP2JJsbd5jb22UCryWMBqF",
  "key21": "4zPL2htRm7akqDHhUiXxS2YHNHMgsizdspvq2qDfqQWDp9bBEhehTGZSfEsY2gEh84TXphZVh8ZicSqjdexwC1vn",
  "key22": "2PB6vfRyQp19KVZkT2YMdfyMWVs7fru1s4ZAm3enMZgpFKVPp3ocKM7CMT1BuMb9BhPn2yyRPZgrwf9G5ZdhcsJ8",
  "key23": "3c1MgbFYxghzDJkETBsaMMKtqp6m55UTR15wRRoJZmmQspvx3gXASacb9pKryPrXKJEtYygfx9Yt4RuTUviihYh3",
  "key24": "35bKfi4z56H2iXWZgbpKRwkuACLijVqsJrSmu9myDnE1jb2i2ZPhsAodymjDAT9CpuaP2w9PogFiuPKv3jF2dx8U",
  "key25": "43c4jKCNWAm4ueZq7V39ioVARxJDkCRdPy6xcukPGEmpwaSozaLsfiWhE3npr4WBhS1p1Hbenaw7DDR2hSt5KSMq",
  "key26": "66UKjX2qhKq7c3oQhDsRpnGBDWHdG4aaNRah1hjfc1YwDVn2jb1yUKA8vhRoBv99oZCndCxf8urNxZqQLEVu81Ra",
  "key27": "NrRGV97S93XrXeECRMTaSEuWQQ3xthNKQnJQn3HcVWMuYA2NBgSDA8wqZECfPXJsjoCeBBeDsybdCnoWov3W695",
  "key28": "4GzmrntYQBwFrPc7VQq6RMGoV9L8g9yYX2H1Axk14iZfvQnUpswRMc1Xo5uyFUsuCDbxWa585DGYJYyEHYSYrwfw",
  "key29": "4u8vd8uaPJzUt6rXqWwddYaHNnspKiP8dM3ziZ8DfscCw93BNUbdZEuDV4HKTvqNSzjWBwH9W3sSwiVD8EsPXNGC",
  "key30": "2qA5p771JLRVmRtA2rZ97dpoLn1nC3sB1tRvwrDPvXz9GgjGNSqGBrXATthUypKBgtvCfejEG23i43qDhiEjymWJ",
  "key31": "3sgABksgY8HjYnMoNcuYnEW3zfcXB2a8cVQFfYE9ykhZC8jwtsaVqY2wTgvjdkqFFXCVxtJVKzh4n8HMsuAo1QNW"
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
