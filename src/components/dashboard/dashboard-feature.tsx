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
    "2HkoSPCzbmqWQwS8QwC4yVLEmLBn87vccWmhrJqV4EsSEywfpXmCAs9cRuhBo5TDh4JuKwqSrso8ePrhXt64MnyJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59Bt9FDuAUHueMdHiddKsfxsS3DZx8SZEawLaN1jF2PJiWdXyKtqT239S9SL3LvfTgQ1NUf4NdQ6fARqXRYoh3kC",
  "key1": "3qxKWuxpkbPgrVXXZNqK31zGfh7QakswpYLbr27eb3eEtmGmtdG5sg15cN4bNH5sSPTFbehxmzGC1FtM9wtfGD82",
  "key2": "4Rquh3Qsn254aTCoXjTw2htbAt3CM2oWqs7sekv5ajKwgYKehvn7tR4455k7gi8fpvSvo9H9dooC3zJW2JUhgFbw",
  "key3": "4MGHqM3uCpGpuSh1jjM1dZacGaUvRvAZ7P7HGRcqNijRoMKYiZ9huDJcUwEjPs4A3b2BMqiWdshQ4BXFBLZBX9hf",
  "key4": "37nkfk8tNsBhVZKfyBsz39d2wZ4XH3jMdfYC8WXSA1rvDwYf7c5odGU2m4bRc3HNkfixpfiYd6V8d29zEgNvnpSi",
  "key5": "4EezCnkg3ZrrdqG84QMBguEzrE5LGo3rGS1yS2z13hhE7buf5PQyp8RPQLqVLukKHXdfsKSiVBHQxqKmjdJYsLnk",
  "key6": "5zuR3w6me5RdAiMpLzJ75iEPwRB2RzBaJrcS2cBtSv8Qfz3faDRe7MBBkKg97WrXcGUaZLLkb8ik5D45L88CXhfV",
  "key7": "42c7WbBMNzni85iq3UwDRzKrNPPL1dkFgdEyQa5x21TLEpsJXS7YEacQF1cLTM3kr1vggGFaMZ2PskHWM2jX4tgh",
  "key8": "3P5vA642yYxwFyeMEjCEoSA5vrdaB82Y5j9jba2GQ95GPYF4ZDXSwrdDYV5zV3N3PhBX32EdRkERtJzH825p2MV",
  "key9": "5KeQnN9nS7oEn5y1dhMTWNkJswuqvNgUg8xVPcnC1UZ3JbSkrkgnLgfegk5aqikbnjTDWmMGzXYKTeTFepfd63g5",
  "key10": "29RpHAxi8hvzx5xiHDXWGr8zrBxZBfJavHw5XdU4QGn3ax55D4WABryoifzFav747d7oA3MK1caSWPEX5KqxnfCz",
  "key11": "5N4AecUTKVb8k52ibzGm1yQTD9S3LpMu6Mt2QFThNsYG2inJuS1WLYxaix8Hrp9r2CsJoebR2JmywVrPzJbef8ak",
  "key12": "3pTHF2nzW76MWzcAgxPLw8L3LryHRVgdHhFtgPT36DRbhN4s63NnQLqek9tL6WV4FiTNojUdnW1ACLgk1o1tKdGE",
  "key13": "63LU5hx9nV5t6uJcaD9zLp6x1VGPKLfAduXWU7EnhCgoCSBV8STR86JdrrRf4mdedeHg5igWiNLtHpsAmn3t89oo",
  "key14": "2JgqNaNMMTnFdqb6vqwjYZJHaqvDER2tpJGa7cwamcTnEjuPCQCZ23xtRe94d1FtafwaDaNhhyEEydvNuKwujU52",
  "key15": "t9rAeRw5mC1Z2iG2xwUfp3TJyZkUd3AL3Hei5QdAKjfP7uQ4HhL9B6De8yjWrK3DGS2kKvqUmF3UgwgEraM7Dpx",
  "key16": "iuV3inHJo1yKk2Bd7q2PANKmFBYgyfmeaE1R81xRC1r1VSU3juEs6BoA6EEe9Kb1WerAy6VdAvEKM2zcfqTZD9a",
  "key17": "wmo1Szq8tbnUrJhS7iUMn6xPHqq6djHgwzB3YtFBeJqzDvovqgRHXEbz1ckCPcLJVHXLJSJVpYTHEdtxYnTA8hH",
  "key18": "Rsy4ny9M7tMPobM8RN5CiCEDsSM4rir6vL5d5HQzgTARKNF135MWZ68uLaHHuLtKVDj7G2QyJok1UBb5k9Z5niC",
  "key19": "4uW6aAmCigqzTgTrtazxVCj5CxdbbEZuVrhFQT7e9WAfSNR334goLM1iUWcR7zjtMnErYdTWJbgBxyir6fTeLTN9",
  "key20": "3LHKRkj7uztn42LcbumPAcxRCmH11fyim69cRYiWCXNX87x69QFb6hX3GiCovQkNMosmDSXUzvnRHgtjAm4CrRLp",
  "key21": "615pefFVc1K4dDZNoeAuqKXVPeiuEhJZ2uHTtiNWaiZR2v8tEwJU1WMKkkzDpcTXSGWqh9hzTwNCnZTYMrBZHajo",
  "key22": "4h3A9KbwxBmAJ98QoqF7FNb7ZHcpb7fQYxp3oCWBKwBF29dmYzUEkQryQA5Ue9GAMarBBvmTP11Qxtu7BF8KZ2sd",
  "key23": "WYeMjxYgwUZdVVWBUky8yeM3jmAErHxDWXTT54RYXLKKn415xw6YSUFAsyVZc5hqL68qMG7VJo7Ke3AmAdBmNza",
  "key24": "4DPR5DNMc5mjWk5T2wDTB8CuB1cdfqB8Mogqd8ahoGxGhX7kTuSyEFLGAoYkur5FVQqGyEoLrdKqwT3n3XR2wU9U",
  "key25": "3Xt98UHC55LZhAUqF2FgnvMf7beRdvNas6kuXmnXN9mQhAeqWUh1hQJxq1VjnhAHJBghjpfFi8Tiism8uCoRQV8X",
  "key26": "5CHQnC5LF15exaUbHr7k34MCPW66LAwWviNNJ6tfp53D8ABenaYffKEvvYxgaTYNFBj2UGkjXXazfo3QpAgAU6L6",
  "key27": "BTKGQiH156BBun1SLxw4TJbQa9ArgTyE7xR4SYGyZ7b19EbjfndAsCxRahrNnP5VXzuwxs86ikSze4GdUNLuaAz",
  "key28": "5dFGuKxej13TJFWJSDoG2RFHf1hGPQtHDKTFwQ1Mu9C7YnVSzB8FSyuiuKY89utjLY3Tmj7XkgPZot3Pv4ciZjzw",
  "key29": "2sv1FRvSeGwSZN7cbiXeNmY1GSFs4H2kgsoXcbNC1uAoagqcaY5hTWz5EdATiVM2QBAXsoXc6puSWTJ4B9zRbjH",
  "key30": "fFx92KyfjhFkaMLpeJtdgVEGRNm7Zve1k4k2UTruwHXWQZZPR1zhRALoU1y5RhZfFfCdqFCcuBHdefUwkeuw5KH",
  "key31": "PXBVk4J1TteyUcG7eBPHYXFeJC3uKvB8e2n84RjGmF3V3okk8E8qCB5xRkE8Dvsdr5ovq7jw7ecsVLd9KQ9eqsc"
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
