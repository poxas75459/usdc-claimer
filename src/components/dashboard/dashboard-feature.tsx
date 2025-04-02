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
    "5Nh3S6xCQkjGQBVzPJsPp9Q6jh69nETh36BtJsjFtM9Na2rpUZVVoBgP79c6ywnB46AsfFHTSuXHMbFmZ41KLDYX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rxCUFDmVti86cWSNVpKQdSxufdjMPKn9ffB2uJGKeuVjC2vmrADPG4LD2vYsy3xpfyuTWvSZGwTPCSEfcfkUqpH",
  "key1": "2int2QF2ytqpiaTnfQrBQ5UBga5Ys3SGb6L3adHkypdigaXEugY6ypCF7vm47CaAMfUhzd2RYPqqLxx4MA18RFNa",
  "key2": "3fCRSxErrsUV38oFTcRULFbvgeezkPb2kjduEFqUk5dMS7kj46rii4B8xD2yguZ8K6ZVQdsqN3RwejWHjZpjpxma",
  "key3": "3jfdXrBsSdSe9TeAE73UdtNTfw6FBwX3UhWcyCz8xTi1cEpRALoexhTuq5gjXJFGigm3hKxRz6eyEPv3vDrWveMH",
  "key4": "2tdQweybXFsGB81pfx5SiuQzkZPFmvxjWQz5Gw5ZuERFUKGz2YwMre3Rh7UZoTUWdsFtHtwqPQ4cv5eK311GL5E",
  "key5": "2k1xbnWE5CqjmS3JCtMedBQA2qBVSLqDy9sV39orPFg9V3VS3GTk9sBbGpKwRuZRNrtRnBdjALHSnBtgRYFDgshi",
  "key6": "4WgtVNtWhPpAtYD76rf5hk1UzF4MoQmkZ9QP5SMjJ6sf3nQr2X8sFUmgnMxyYkPdS8YbdmwmPJGMLf2jgrhj5ftY",
  "key7": "4JTueyTBUZTuGEhwBe3sc6u5cDdskSCwGJpR2fW8hwZJXqRfz8mb6dWhRXYhbR2CYKYYzJovTat4HwSwxEXcmz9f",
  "key8": "2UAvFuucSt7Vz7utANf3xXpbq72ETeyBR6TJxgYerts4XUWSMNVUp8EeoWtHf49mAZ4wSoPennVs8FESkf5ySa1u",
  "key9": "3f6vNjv3rucGaUCeaDBSNYgJMFeJ5gevUaU2XrkgHy1VGv7SxEdwMPUsqHDdGNhq5D92Z54QUrNK7zZD3UkLjbXi",
  "key10": "1FVXLbRs2oSdP7rre9drLLbrnZkQUgvSXs1nGoEYKQGHVyu81er2QdcLZKxKLWB2eNzgWgLzGXrCqRLCyMAgXAB",
  "key11": "59kfGPHrPzHzXFKr8HW1REWDkC3mzHaQzhNwehP9AFgv76xZmRPuGBuaV9nurWqHdPkBEe2RqVcUAFqckWHjVz57",
  "key12": "a6ufLyFrHt7jHckSAcmdQY81aSeqBZvVMPZghtUDw1fy5L7qPXnQwKwsP3aXuyX2ipDtynCKcg7ptWZaCTym3eN",
  "key13": "5VzNhiZd6QFSj6LoLkwhAJQdYFmUbFDwy1pDjqaX76cMCeeRwsqqeFrdzJ6q8bTUBePpEYTBSRFAjdGkkRkSzBke",
  "key14": "2Z5RCsRfF1YMdRsNbvQHxVEjjdjnV2QzPWuM19RTRnV9cHBn3rdV8m3FugbkHuVkAvLju5p57kqketh2ioXWMaJ3",
  "key15": "23amhhj8XgRMqVVTmHPuAaqKHum7pMgzmBK5c9Uv7vLizmWPEybLtMMQDfmQtPC1gFbkqGpTCnz3tfpSS5Jn4Eme",
  "key16": "56PD5ZXZB5ushnb4kphpmYih1nPeH8aH6VdRcp5S7WFVmWneEKEj3xxUsukkwX5N8NoycgYjSFMoRsyv9L4WPVi9",
  "key17": "55XdNLLU7671yRFZUVt5MPQyFd3VZ9TyYkmGveQZ6vT3bZb6r9BBDVRhjCPzvVMK1CjjsiUSDzfWX9sLA319EhCo",
  "key18": "ZGv81WSq42vWnTieAbCEipAqNHyBQgRhEihTC5m7CWQNA2uDTtW2eKX4vVezcpi1tstM7zE4dZXAgTsR9L9swYT",
  "key19": "5v39GddkP67Ub8B544vhRPa19K7NHwcXmcdJDBAjAucU4Zp4d1XRXEidd6qSC5zwXpytgp4znzT2uut6ERYVJK5J",
  "key20": "5fN14kNsA24Peif4JE795bZM39ZxakRSX6JVpLs3TPM8gH7J5GDT62vupE1KnGrCBgcjYiaWM9Y4y346HEncBtde",
  "key21": "K8Z3i5SUVZcyQFkSZMo2YbFAPCSchc5GMYAiXn8SXbtQMKELSFbaWEfzjnogj5GBcFYa7sFQ6VxBDAuv2R4xrpo",
  "key22": "5mKTSN68w63F2dKdcsTZnKWCxzHFw8TSWVCr1rZdJYF6NP8nFc1712whx8sSVgrqKeofnBhTizgtftv5bsRPJAL1",
  "key23": "4BRJWoPCz8vTAz68mNJKhceitQss4YuwEhRu6pGRXeGbh7e7g14pnt7USiVcodRoxuQs1s1eQHu5cSveb39ciue1",
  "key24": "5uRWeX1Gej4geKh6juqTXBvyUSzfWk5np4hRFWRmfZ9mSwVkNHzJnQheNvETzgadjTS14q2mPxAUKKxokzicTv5z",
  "key25": "3fvSw3kNcceya757adRbTPLSCAxPa77wALD5BWagkLa4Jt3T2wiJzTxbFU7Nys5wTeLF1ZMJPoCotkQwXF6SVPz7",
  "key26": "2gGMJWsHSjMuXhppYjD853sC3FZARpLWZLCPYU8YvrspmszARVCSg32DCNrUSSE6vEYkd7hW96YuBkoWkggBC7P3",
  "key27": "4QVE4dXVqvxr63fWi4ryuKM5pfp8rg9SjHMMhTHVZhyAbNyqaM7eKSuboZdNeT24RkNqZ6K5bnfkdovRYGoyqrEr",
  "key28": "2AJZRGQ7MehcoeFmWyJXxdQuK3V2XyA3CXMmpRw5zx6d47SKmi8f318AGra9xHXBKbRGzepKNZMB2HiTx2xQbwed",
  "key29": "5tt7PYvY2du3QpgY27Wcc4ueVqM6YiyFzTRRUUtDbJc8bpPrvS3cYN2fxQeojx3AYiYWNye7JxpCGVo8jJWe7mz8",
  "key30": "3E9JfeWxGZEP549mRPrvokdhYvdNNcTYG59ZutTHLmNsGJhDWD2LpkgxpcGaaQ5E5CdRBh4APZ9HKg4CDsToqA2X",
  "key31": "4qHDBxQZTJfKzaUyh7zs4jRNgAfxsAKiMGCXL511pbW3CL7fqDX5r26em9UUmo2ivjeikY8EkvbX5GrFRmYGp6f8",
  "key32": "4aUxCsMjsqtgzgj81o3e4ijWrddSsdwnRoUzPEMSbLa5bvacMrbWW8gda5h6oUri5tJcvuuHGpYETXSaameKKM5D",
  "key33": "hgkqVQmSf46tHNfC7aHwdYZXNdC3qRpxuUVB4gJmafpf5VvzDgmm1bRJkVoR7JAeVG6Gm4VTCUDYWtBzEDjMU9t",
  "key34": "66VVPK3bE1Ek8mGTasB14LEpLVBuSaJP95nSSFmXHixZmYS5DxMaAHvQp2P5xehK9cjVmRzEwgfpkVF8XguNx2HC",
  "key35": "4hyVyb2pkdF2bMtozaff1UnTuxdY3HPTAzgoLDBeRsVN9b7DcShfnwwWWjbCKboEk4ZDZ59T8xPPEStnthoGEakG",
  "key36": "33PQtjdeYQGfnV4RMGpZqJxgpMa3uWjS6TQ9SERt6xzM7mmGGRuxkVqh7ebY1YbbWeBgXcVJQj7rHre5N5Zesp8m",
  "key37": "5YziiPkrF63tMVJTqjBUtZ2Z6xkMqhzL7Hv18GPhJizga7mxe9YDTqLZC8ejeXtGHVQy1vNATXtwdF6Q8kbQBwwg",
  "key38": "5YwMq5DC2AAgSXiSQt1a9BvnEDRCBKizFdLgSv2pB3cWYM183TmMfT6zWyLv7z1QnxMwr9zJVBbk5mvoukWEtgCJ",
  "key39": "4fagqP4d4eRNYZrb8vsCXGmdZdk6DJ7itY4oepSE5KgXdR1kX8XhqtQB5gcfkKh9idnkWvSfpUHE6g9BU6VrhGpJ",
  "key40": "4zFTimecdpYvm6gmBkTjcs7pFxtQrRtC4b6qgVZmjNzz8HWdLKaFhuTDwhu2gjeL8CSnPnFDJMeaLayAgmqmdJEK",
  "key41": "37Lz81K7zTH3EiHLyUDvdGcZS5CyA27q2cfhpJvnA2yg45uiaYewwg8TToUFJC7aRnjaswB8x1piYCtveGXK6mYs",
  "key42": "5wFaoQ8KjYDZmnXbg4VC6icKiuDz66seks7XKXCbcTBPAFcr2GpuAD5qxdkRxeY6mVFpRSVKMLfVYvbcLvTGNMYS",
  "key43": "3uxtz8c3rfPvTxTPvmg9b7QUPy3CG6DY2DE2uf6iAgtjgJogxp2joMTDQUFFVrwxMGW5uicEvjF1QyYoqrp6oshb",
  "key44": "zqLTmmfec9GSe2gHbYu541oyYeNN4EuuTqSy9ejzUbPuRtCidNm4KfMMmS2PmxwGK79MYhMZFt3Uxo3aYefEgYT"
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
