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
    "kYMDeZFYVTxJ1szLgoKjFpTPqYoU2YGkePXz7njGfPmh8gR3VYpErwes6Ya4nPGpjtwq56bY6set6WD53NDdfFd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ktiYa8N4dy7spk6izZUWWeTuqZfofVac2Yy9amcXJpcRaonbURjiyFz251WYxN1G1ChEfArXTPytji8Htq5XxZB",
  "key1": "yse3XjDqTo3ziaaJapDezz8z77Xq1oVtLzVQCzXbsa14YaWTsyFQy7K3Vd8QxM3LFgeXbepZNq74YuZXaM5cXCL",
  "key2": "3rwoEeqtDM8PpSt2LUqoRYL8kUomA156WZjYMXhSpgbmBgPBbAZq5ENJRs5dAGS9Xmbs6WJq3B1DKNQL1QM2UxDp",
  "key3": "5LuCALrnjRWETj6gpFfsMiMwcgn5zVuAHrXAHYa5QEnvouQFTh6j5bFJTr8qGBkbU7aja77N96FLvkjBCbZN8uRL",
  "key4": "2nFTvAkL89pC2ebsFTMTumN3oQExcYGQMqA37PypkfDZNYTrw9EEiU56KmsmNmvp6mc8XSa8ayCaJwt1CvRHkjGB",
  "key5": "5jr35HrSERfGkoBGfCcRLmqsQRfKpBaThHwxpdZnZXTKjiSyzveP9Rypikm4KF9mFAH53D3uYbiishB56v94vN31",
  "key6": "3qeKyuBZnxqM4xv6q2icQuCa5sXGRHqWuXw4c9uN9foZ5UkjzrpquHtjyJBbgy8opsuQ7AWgQ8XqKR2ideV7daxy",
  "key7": "5eQsuxjhcGs74dLpY3oypLKTjqidopiUV3x59zYf5AxRN86Piz4y7cBq2qSQ4ZiVS9kZNgHkf4YSENveEbeaA5V",
  "key8": "2gEwCBHpSn2uV2p7FmVy57Sc1rr5i5UrpQPcqaZfQMQDzijEDi5YYHFhXj73i7UgGGnFKRDxpKi39vU3Lf4EEDL1",
  "key9": "2PqR8rSG7SxALYt348JJRu8ScDTCPKKjprHyqdgxniThqZ4vucA2nQ29Po91Kx2fv6Zr6GHLFVN9zJRGQTwwipNo",
  "key10": "2j9uZiuAawZCMbs7iAgsirBwhBzgySQ7hxptbBMNELPopt9HNcvy9gEocRVLAsCaMaS74ycMTes1eXAmujMEsMWi",
  "key11": "2rcHRbUbV6jHoc23VFnw1Zc4LnrwRpz6VSbNc29pEiAKwXQs4ALF3B37MRgTbfFzCJZkQv9SpjuxXUG2PdN9x7JZ",
  "key12": "3R6BfBMZp1vgXy3pZs1RcQmtmvKNrS4BxwyDNzvbfcqQUsWYfqtRC1T61FTL2NXRpRXZaKQRaNhL4R8pnNQw6s26",
  "key13": "2gGB9WijXvoJKLAEgEw7z9RBpTj8N3UJTSmeigk9NyCX1ppi6Zxxu1ycwP8S9fx6MdUqgZZiCkMzKe3RueP2uGaZ",
  "key14": "SDRayzrLLyUesjWPrwuBdsDFiRt5cPDFSFbKmWusJqkr4CVPv9nStChJYHaxGCogJ9eBn2nLn3Pzvs99YVM2P5Z",
  "key15": "4esh9YGTUiNTsRqvP32M69psNpVt6EgcR3GLJQ1Kyy2vEwuKxNEq9ytgJCNCqS2ainqvgLprMueP8PrTjijVzhrF",
  "key16": "5X7nBiyJME93YBFcpNDQk6U4yNKMQ8e7g7efdxbLGWmfXkjdPG1yHkT9WFViMQRjYjfApdTXJHFfikSC5jHySwWr",
  "key17": "27CW7CowJTjmMGaPYeQw72skTntnPLzrHdRXFBsgrwSieTxuLpYPu5PubiKivPKbJnk7qUmjBnYi5rFPuX6nEFLQ",
  "key18": "2CJturzoyhsrCJNERoZM4j8vVKP1frvgNipfE8hatCzf7X8FboGqeBm8RNR7fe8kjuHuk7Cbg4AHgpVAEDogHkrB",
  "key19": "kqPb5z59AN9U5Fe3hhNUR1pLvyvUVLGXXjpwJYZgesDwzPj9RM9GcfW43KfMWfqow2gtkHsVH8oEeiaS3XBJzkm",
  "key20": "4EHUcuDFvymJAftS8maGTNGiDgypAq7hHy3j7bZjKctwySAH4RGqxgrMDFH4yg7bKTFqnTKnkpT8zwwVoaAfHJbM",
  "key21": "2zb4Ddz7NWswxSSRFBLxctEk6S8QRyTM6WT6jYyBcJdXYqSKHfaWwYPPRvzdN3VVwqgCiG4Yf36MNGAFJhH82f4t",
  "key22": "5WoLZr8ucQQJcDKWCxBHEUr6oZCC5tYjM8Wbn4ShPAgPqMQe3BME1MX2peb7UXQXPYej1mzAaW2CLdswBGRZtou6",
  "key23": "3otA37sZU1VwcCH9VexDhsqZyJagY2GUgZNagwYW55XTWZmdMu3ptonVwBHK6N3nT4mgwLNNag5MtNoMus8okYLn",
  "key24": "4gqLsq1a6EAmZLbcq1u6KBoimpjyxDBxKmHJZYMJzn1jwj3vrLnotcMt7bRHiLqiqJ1JBTDSBZAmsoUF3eGec7AU",
  "key25": "4b29vYqr5h63DMZsFMwhULDBPNTjthRwPhjCjCYShurHrbvrEr72UUxPwxuxLNwtcs5KQAn5PhctxxpraTe9SCHn",
  "key26": "2eyukVUnVroRUDPkcn3uFMLwE7bg1TWmgpj32HZgLbwaz9h2V3ETUtZ1J8hjcHFyttXUaW5Rerc1H6rrhazsAZ8r",
  "key27": "3cDYDxHerF4z1w8xoa1WLM665RjBAq2y5eVyQN1dmxRMAfizhTBJEVgNfPCU8pfMAgDhP5wotQCuuyLNL9q72Xpn",
  "key28": "2yPfoHbunoSL8j5tpNhhUx52DFx4w7Y9UyMmEhmrUEE1Bvhmy4xVmENwD42NEMx7VWDvaovCtRCbBXeHrh1rQnT",
  "key29": "4vZrZQA1GnxDX9azNztMVmw3zexbApwPQd13LfERzE1JDE2HEwVD9xjPezeqJqk3u6qx2mZpSiYq5dka4egt7N1N",
  "key30": "VGE527NQFerEri5pUwGfrAHSWDUspSrbe6jv3JAbG7jkSKXDwwYgqaKK6pBZdEFKfG3yYYuZZ8TxGaax6wMbNCH",
  "key31": "3dQCHACeTX6qGjqHr7gMbiUJ4bF7UDPcME4ewiQLHAA4o88aKJkTJxKDjfjs2Etg8yxSarwNWDW1QdUVNzdphZPK",
  "key32": "2egTtksTyMnHyDt2wqpmJU7tTmsz1sK1prBY8fANtCzqbaSZYSZXg31GCQY9jJwH5bucfaivWyct6AXiRKgXoDqq",
  "key33": "1RLkUYs5wrckGY6LdPLqcnCAKbX41pYmWsqs5d7bWWSLdsREV5aZgVpkPKktcmfdTCL8J69bHC1bkHW53L7x9Fg",
  "key34": "2Nw2BhE5c6iBzmNKxnLguTuhhwTjZkwfDm5SvTJc747jfAMnbsbLCgD1hVAwq9xrepLoBzfNKHRkb9oXiqCKrXdf",
  "key35": "2i1g5g7Ng3gifmE1TBy7PWXLXt2AtuELHfMytLXVb4tnzDDSVL1d2J8SBqgRkXaEb2vAG9Re2Ybn94TU3spTyDEw",
  "key36": "5xZdZZqmKeqBSPU1fV8J5oeW9VM1bD6jRNAU7CpWSQYaXPb3KQr4SydCRoFLtxPdE63jcb74kPxG3V487hKc853a",
  "key37": "3WSW5mfVjyHVQW759qkftWRfNh2Nd4nVKovmZ3k6PcKYymqqkdAGAgmvv1sYYHt5xkCdTJ4bW9upDUXiUf2HAZaZ",
  "key38": "4pkUk6uaL7SdH1ZLCcnfm3ovEKgYpLC54G8nbvkd8nUP14dBwvuGR3Qp4zoSrbvmM7ujasoPV23muGoo7q4jeNhz",
  "key39": "46j4E1as9PFXX8ckcJ9NWjd5ay5aWgHiJZi2bxLVQrKkcmkrdrVj8eoYArYqPBn1MC9V1qYaoGQo43tAGdHQ5K8a",
  "key40": "3oTvux9wvEttNmgxAFrQYrwZSU4N7XLJzhwW2cMbXMYCFYJiHdMMduDChV5capZPrL9XUdJ4M3AgY5uCLr8ikRKk",
  "key41": "3rrFC2h9JV2WDnZQEUn3A2HDRHsh8MPAYhbjh9eZgTU567igiJPdD6J7owu3rdqvr9RxUX4L73co315gggoc7yb9",
  "key42": "9GL8muXW1SprzJ9RvdFVDD9x8h7X7RzoPQSY1XqbodLMgnsJxsgbdHELgMmmK1vKJKPvtsDwfVjihe7gUchg6Px",
  "key43": "h8SS6c2KzxqCn1HBPZBJe28EcjH3WJM4zyAYE6gK4VdmFQoQmmqoVfExtxpzhBbaArauDYJNesi1bqtbEUNM4KB",
  "key44": "5VwvynqHBTw71CNfegPs2X4xgKWpVGr32kSe4JXij3zavZNzq2x6bGQAQHo8gdAshuQDSZTEwQ6fJAtNBitakxsC",
  "key45": "8SyLrFmc6jzCWZ2gfSpvreGDSj1DtDykHjED9no84uUVQ4nLA1ua9oHwEss3kVdGcv9ihA4Pve5Sd946e9eitKX"
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
