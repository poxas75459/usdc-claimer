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
    "2kgPmXwQbT5jSPJdw6ytESUyV5RpvRhfHW5Wuv5FUfBnsBt4U9yUeaPSoRPHgpMXe5szhssKcZXsqqXjXDzVbBpm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zDKjZvJ1j6nJtw8CitXtL2jz2FXcdBEUBujm4bmf17FsuEp1qN7vUdtLcbL3XvKtZixm66FE68e4PVmwdHRh37e",
  "key1": "2darVGMBciieYFpc67ZBUSvkQC6CrJ4bccMN581PT3Nw7EYbTU8oseGdfUsZVDGaQJLjxGYZPwQYHKmVgAApe7W5",
  "key2": "TDNoqbHQSka7zsJfi1ozYq2Cg4SCeXgHoFGZvZag9Uyi6vMq2kQ3mSf5cjumyAt26MftjLc7f6SDWL2oPkP7PZX",
  "key3": "59ELdDrskZ4ouA7akxPhvty7pEJoir2XZDCRrUwRJz7UqAKbv2VkhLZHqycLtDyE4qsnA3ggEE2fj4NRGVJzdgRd",
  "key4": "2eapUzDkQKKGNsQwRwvmiqLdS6mGVEYSkA6TG7L8yjSbUTvBeVYxQ8dYn2R9UzbScD2Bhax6uTkt68Tsv7SATZ5x",
  "key5": "3HMc9b6hJkhVnC1Xf7h3d9LuY66221R3jC2hDPh67TMeYrDgvf2yBUDnPXksTPi4SA1qSmviJiNfw4PA3V7wepM8",
  "key6": "5AUFKYZUVZSsXuPKquZ7TWxDv5MxYdxY92edr2vZDp8MbqBDh5ci2c1k4Sn3vftZ6kpEQG4JSSPijsZdVSA5x3ii",
  "key7": "4irJGMVctn1hpPpx8B5UMaMEMgCHgunsm3qfQjfmYAb8RaTkYTmQ2msBG3dazyQ4baUjXQ2LEyNzFsvCg4WFPRtV",
  "key8": "dzfo9qKFPzibKYcxf9LGYkNTiRTQHAa1zpixF2xMYYJHHKBkHBX9qxupufKxpx6PKVhXxve2ZLYVMXcEVgcTrpe",
  "key9": "4o4PLPDkfWBcrZUQB1SRcvrpZnyWTyBqiTo3h3tZVrDDv3sZoqDpceGxrrxhG35Mt1X2eKTp1s7QiEgDa1aDjfDV",
  "key10": "3e67k8Ep3c1JQA2Aa1KB2jFJJjbHLycy9LCqUmYKBcctMppYsjpuHeokBM2H7qGMMco1c7mZrrCi8pf24ok94zQx",
  "key11": "5ohqGoo67ncrtG7NQ3NkgxZziQjwuWEWPgU7V9NyZzW9LFH2eJpv9aZkkBxBfkbwn5YefoSfDNGoZ5C4EGbmM5VM",
  "key12": "FPSSvnje2Jre68nDVPtuWaKc1QfYUq7KZPhmNDWbSAanKypWygcmJ6qsRhGVqqCfYoTrYiEvWxWja5sc2EoS2VG",
  "key13": "4QtTCUQjGFB72qPcC3mkhxkcSxjBAQUSvGzxZHmSVvnqtsxQiErJpWpzqTZWR26UGmZsouoUCPfifLVWwu4TShJ9",
  "key14": "vxtW4qaqUNJBj6c9kaNjGBTgfyjLQ6FtoFf7ytC46iUp1f1V1oCTqbYmBGJN7fbyJaCXuLTUAJ29uWKmXTKmXtq",
  "key15": "3NZaGRgECtDdfHCMGYoZL6PGZPJGwbK2PBqdTGwMbjXW1x85AvBeDn4k45pKiU4MPgDQtiRKTvLaXJ6vBbtkFCh8",
  "key16": "5w56wD5DZPRBVxj4qi2sLh94AQH4CMUDVX7D812nnEmtSAYZZ2PTv5dVMxFKSMtqGQv9LAPVkRkDZaJBoQiNMFXc",
  "key17": "24aajGq2BWMqc98Gm8FY7KnQnyZ1kThztuLXqYyafXeYEmWa5UsTNjRkJeaGMSfmEoQoSp3bDq7b3RPDn5HagfKt",
  "key18": "5H9KkCz5REPZnBNdHXMZL9uKfFhwCJjbCWMPWTVKcLH4LNsNtxs9eJumCatJFnUCqbTiB3Bfv5M4ErXgxXWfxq53",
  "key19": "5hDU9rkG66GV9RUMwFpCU4EHQyVznUYAM7zTdJvzGhD3RRLp9yPmwUrV4QX1QgGtwmmcK4wuDBFd2ASN9HPjdWve",
  "key20": "3fQ2s3iCHQkvSYnHNbZUVdMnfNhFcfLgQuQR81SEa6brACEGJW4n2xXqAcwQuqoBfmFLtxYXhKN841Lne2TfEg7Y",
  "key21": "2fKA943tQC7BWduGwWian4M3mZq4dDjprzhgPwBrc9wvsZo1TE9pzDeUVL65gEkRp4MGiJG1MFWy5rtnzWAPfNS4",
  "key22": "2HNjoJsAGbvZVHbb6PVuRYfrACpdsAmu5FrRtV7XYzUffMfTNz68fkQeVjett9oQGnJyxEKj5sjF3DGe4hHXodjF",
  "key23": "5eQzocHpNDhMYDbmJTtLxo7MUfwhUJjTm4RJqo5zax5vWBPEuE3Ypud4mjNCnuipY9wmNDhibeZsJ6TLLgP91oXt",
  "key24": "3G9s2hamXWX7aUQTaRwutH5qQgf81bhj4UnYFErh6fnTyR3icpRbFmJ3Qcm7kk8TL8ioCeAfaxmcVzA4Y1FSiThb",
  "key25": "4LUWAXzhm2V1VzhKmBW3v8ReeaBx3oQWh5ZqzW15NhVFtNkz6wY48VcipvhvpnKHvEg5vqGQVPDEJPEkYV9gG4rh",
  "key26": "5sBi1jqU21Wp7VqN5R8bD1Fbc5EvNf9aDVFqbw4USkg91zYRs3wjnKobuvx8rEg9eA3WzTWmGke1ykTWqziJtshh",
  "key27": "2LabbzHj57iGg5JqykT9hUUiAFmASZpoUDwitDGBXRmKkCGghYbUStQh1YTjX4LMAuWhUA14gSmuWbJtGPyB3Gtp",
  "key28": "Gy7wDX6nfxuWioe6xa3nyJhuNbELuJhxKva8em3Z4T9XaTHqDmvmnNpkscEmiX7PgKNYVByzng8n1YCwh5whMJg",
  "key29": "5RmCFh3hXGaBkZe5aBwgph4yowHmReZoh24VLnGrDLiUjeXcPR1gmk9RcvyjcsUjLp56kbfxZbLSVktrF2JEt1vE",
  "key30": "coN2N6CokJf4JDzsKoD4KccwJw3Hu2RmNS1yWGuYPvFGXf6u9j14Ez2KjGNhMjudoJYMMmtZp3i278XTPdqpU4H",
  "key31": "4hZUvrbVzdtQb5HM7PdURGjh9Hj9a2VJygnDKYzVVFyrjf1DwH5Xvyx9YQvbvdwfaYa5McyTJfdAJPvWR5BeBfWY",
  "key32": "45px9dPpoTfrByjAK8fSprRUZ9w3eEHKWKGjN5u4YdanfUy9EkwXMsReQmxchx89a2tjA6Ux2aaHKqKDxK9Hqqm2",
  "key33": "381vXWfxX2FkKnmdFgR1NDkmT7yejAZRqDMX7huw6LsXTjimYZGZ5bCpogsGBDEyX9h1oewUU6FZJeG64NRnFKsr"
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
