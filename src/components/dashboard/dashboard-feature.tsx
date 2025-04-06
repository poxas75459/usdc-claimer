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
    "24K6F3stpJmN6euxZerhFKJL3LULkde1qsth9wt96Sfbe1FX85afksJ8sR62vaaqZYKcvo3LyKWAxEcFFznkf4y4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63Ft5zNa1cSjNzYouo2nBzFUJfxtBMxcaLEHjz9uty4AhuTueUx7jRxrotjaLdw1TD92XpXZQmB7AEtG36CQpA6t",
  "key1": "2dC9B8ud2WwA13Eq7DWJUPn2dYFD9TGHkyvS4jkekxd1ceQb9gHhujr8K6g5Ngv6caP8MEdA1j5tJiXUgowrSFL",
  "key2": "NyefuuZht5qE6muzg7Sp1hGyFPbreETitaHamL7Kt5DB3iQCsVwWhv3DgJQAjnxX8NmdNYNeMqMduEwrhCM4zeo",
  "key3": "55iUVmCYCkQF4NqeWw9HGunUnuPmDbySCJHAjr8m4C3Jux4ApmhMvpSk2iC64B9rjeDx56cYjBTSTBpaphnnG9WX",
  "key4": "2gwo1YXgqK9VyAxpnzdpX26VXavJc3tPXfgGAefqBjBeXhdQx7zQGRryTrA5HAvGwz22R2ELgFvY64UxDxZLgrSZ",
  "key5": "vJusanJzswZKrejaSt825EU9SzFTGGrW8DxbFqbGmYoH7goLZrPtgmP4wrpmp5aSVr7JBPvejq9vzDUWhiQisDD",
  "key6": "oVsbtpyv4t87qcjztj5RKS6bQ96QBp5ULoaF5M3gpyFdpwdPmt8DCxCbKpAWzFZKX8UqCgy1UJPS2KTiRgAMhW6",
  "key7": "5Tw6pRTNkBq98mzCv5TB7yvhnWtXJ7vRJpaChEquiCP6PPvvKraG3Z1V63ydqKPM75t1PXgAzLyWTGi85ozo4DMM",
  "key8": "prJrK4dtsRewErNT9rrGdWEtVtsNDZiG8F1ZPNKYrX4W6vcXaMzfgwxntsVqTrmVnH5cexeENaY4iRvpYMZzEkp",
  "key9": "2CNqJnUEs438vNaVk6BL7g5UqTKaYLhDKU9nqAgNsb36ciSzShF5RNETdo9KPBDuMBywMKVT3Jo82Mavs3f8tQC1",
  "key10": "3CDct5kEcFr6gukYwjcUEaB99RRyg2b1tkWCtqPiLTNFEhoLNuXswCHtDSxBDH1EtWdDuJSSJSz5RTjgn8fdM2Zf",
  "key11": "doWUifNCfysoTYcAtPH2PLHfbep97Ahcq51JN3UZwMWeiUjuFCiizyGHX5xv74CNBLfGj1mzD1NsimMPfq6TbYK",
  "key12": "3aHckcY8uGBwRTvpTD3WTCUJhospev3HjbpHMmby9NvepxEpepU5QsTYsUiQ4ebUSB2Sz1j2VXegCBxuUJBaDZTA",
  "key13": "2cF4H8PtxTSPbXTjui5vyuMhefvuG7yxaJjphRqj8UfpthxN6v8hXvHT8ApJwkAYAVGQ8JrXEKSFAsParwRb7CNm",
  "key14": "3a1JYSNWEfUPNBS4MVrvuwzY7r4qiiyDz71H4DCU4eiACV8FVTwnZtnfpEucMeCGgtCmQ4XGuH8b5n1FKYDzLefY",
  "key15": "35142Bd1xrMd4w1cHqpRTdhAJ1p1KrKdbX82bNF2K9JFDM9PJNgiVKEcuaaG4L1fzgiTQUzDHZRQb9StreBAEGhS",
  "key16": "26nVCDRoM5izwBgACyq2zY6ZV2hUGYD8VxtdCkvNBduVUHNFWTMPw3UGYcwjB5UvtwVWMRXbsNxhKTUceLwUNS6A",
  "key17": "3yiDcPmytukThjaofBQxEa3zD8N7fFFiKxecP1Cc445ABPRrjiiou8bHK3KweQdTGcPGay3N5zP66xiiLRY5DVM8",
  "key18": "5DEEu5TmLpLRKuoj1voXUyKG3jBQQqXA6t44BJArnUPU4BGzqg5S2krBP4tq3AQF5CRj7yGdw3Hz4akAL7xunug9",
  "key19": "9eJdZcGXadXeLjtw58wgouj3VTgx7XKJSGtvc8NgfptruyLB5SWPimjRoyxmkN2QC6BSVGEZnWSnzpTjxfMzMsV",
  "key20": "2AfucV11K49BsSQrgcV61FfWib4kv3ppknytRfkhAmfjsHuLzaePWVXTFqPTxuAcyMT1oWtXnUrNVpDz9mmitKjK",
  "key21": "3zTpPgg76WpDLqpK2YjQ1zB8aZnB9ccGfVBXjg8m5mU5QRPbkvte3MsCg6eicoypV1zgYLjzrRAN2mMXduGsAEGG",
  "key22": "4DA1Qixv53ZLgdndtYdPardPe3ZwAE6yicKcYoEAtXC2VwKxnx9XWhF8TV36QMK2k3mK4va3gik47KN87UtxfoRF",
  "key23": "VCmBki5wqN7s6F5Kb9oLDf47SUEoQxckz4HoBANCJ1QV5uBBEYU5aCGb9HHWd2cAnhnHbrwXfSrZteukGm2gM9P",
  "key24": "2RTUjXJQxYSxvLYDRg1zqwacnYQhFn4urfSgSWB7GtGwQ3AjjTys5sRNZCYrSwZ43n9X4WRxmDZC4nk7d2uz4XRA",
  "key25": "5oXcQqhQehE94yKqv7novi4Byri4dkGMWq8LJu1bKSomBzR4Wx7czstvVGnj8ajuFwEpLeTs1sd42gFgfQvUbiBd",
  "key26": "5wBt74BfnZ4nuih3yWxPSikzvDoDVkUByBVy2taMRcvmE1FdX7GYntKiStwR8otmTqWFE6MPMg6bYrpHYoksrUpr",
  "key27": "3YvRJ9v2mCg88jT3JK2DwCj3RmwGKmKR55optx5qbp4icw3fTZygFoSu6Eu7ZrVGz41Koi2eUPQx3VM9eds9FwK1"
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
