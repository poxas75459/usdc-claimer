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
    "piCXNiSsChrRfSnBeBEYiUbVgqbJrcR7JJo9nYhdFURW8ynpfzECMNhBkWjm7HDeFwyH8EajgJNKWY6Vh3wCem4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ddaoeTNLxvbmiPDguqVF5wujPfPEfUiHUYSgsZL8DWmt9XmEx1p1hxJrD3qf7gto1p8qxHi19oet28wGLHirvEz",
  "key1": "fAeh13YBTwedQvbjhA2k4UH7GHpZhzSDhcXhgkgpdPUaXF5T7P33PenmaopsMtCF1sXHvViYqFBMbiBgAbzD9gS",
  "key2": "Xh9NCMLeD99ab2WD4McpVaGtx14FDhfEPKEBcbD7PHGjugBAof718MsqLDJiYCHgEVnziZD9Zfn3EFaUYWrSG7Y",
  "key3": "vZeEWAq88zZUfQAbovA8nNNAuxCtcLFWJt6Nz45aGDspQVr7xr6SBW31eVit6UtC24ArhBYSg3ypDm2hgkaVcAU",
  "key4": "3tDuG31hJg797hTwicGCeKpGeLmDaNPTcyU1usZcuxG9tnEFyZzjXMa8N3n6Bx6TPhoAiwBGMUPo6e3FnGupRKna",
  "key5": "3MSnNSAUAWdEKmFGa7ax5WxDdjMQgVfhBEFS72fvfh1tVTyrH7uAWEZdkvyLYJ3wkb1QUB6iCi72GPy12W7166rz",
  "key6": "5eqUPDWHJYVcDiwbomByoWRg2h2yCEJcFVhiPB9Cuy4QVschBaa36sbhD6BgU5L1Y8tVRwK4xQed7GHHLFxeQpsi",
  "key7": "4GoC2z4m8M4oPBUJ3AckWKNJjknMZCTPPcYqRL267VEgn1gAeduwB9Qk9zkSXT9oSVLg9bqTT7LeJHMAMLjZAP7T",
  "key8": "5WLkdhwvpH8y1DESe51Z7MNw8CrwftnydZM4ZoryHBfJj7ZsvdtxiAYP77GBuZHhBLSrtGAcAtgQgJ91jjbzCPHk",
  "key9": "3xCCYu5iBYKwCDS7rYqx91WnKpoNucXnnAfmgKPENbeQJUgGVcGmCBqhncSzZmkDVzb1XDhJmaua9yGJ3mrZeJhq",
  "key10": "3QkzjLeNACS7BTbc6QshckEXJPqnMgGazK1WHCaxmf1Cow7Fwcb6MCPwmLwQWWDvAA8mv8R8JQTH6ctigGtrDD6y",
  "key11": "2LBiUZ5rpwso5EvYCFPb6MdWTdCtoNLbUG6p3vvSSmmjBr9Se5KYRfE9Qmau1hvrMjNWk3DoWiHuAZ18ENEjw4qq",
  "key12": "sZQoUASWqaMK9tWnSdMfX2ay5fpdfdyTLEXyL8SkSgrvTX1xcymMD37VKYPX9cxCP3pwsqJdATPYZrF7zZiySi7",
  "key13": "5nYv2JFbiGSMkZaL1PRjC4uCX13d5XEu2ip2yra32E2jaJCtuRosFXyhawzfrEFtgiKZ2bineDCfJGqLrJqqk7dt",
  "key14": "5cdQVFq12scRM5WYhJqH6nY7NxyNpB4ZD642WPUUPNnkSCFskrUtgesKMKPLkJwRSKhSoxXNbP4Jaoe1xtm841zr",
  "key15": "4zrWPXhGQTMhtZmvrtsgqLQqBNKEHarJRvToQSc5kYn3JG5DVZVRoyXCG3fxj3KBCqAGrs33aLZcYCMw9FtNSoAp",
  "key16": "5n5eXvHk6GvNs6vV7ihp1b1GBsLgW7omwTLGP3BtsFAje81vex9qpLonUs4FpQrYXQVsHVmHgGg46tDca5N8ofaG",
  "key17": "3s7rdT79ovjmDoYjoSXSGyypFoGK1rcUigLhWjBTiCgLVJRAUGTxeoYU58dxrXCWZNWu3KNhgJ3t7M6GqihKt2D2",
  "key18": "ALF52oBtpb5jLpPc78gYPUsAxPnbgGyWMNi5ViY52UqHEHfiFwri9AwCaDL3B1hgkB4FC6HrLtCxFY3EYjR5LEz",
  "key19": "1ri98NSN5MpN4NqbsXPRbWn2S6jF65rfZTqcBZfHBESjdE1RmJ7MkAHWNzGGhbFDv1EXsSninybTTQVwayUXoCc",
  "key20": "5ZWJZHpKVC2pyE9ipqbKPbAoopHJK1VwBjJ7VNwKkncfsGYjRcXNdbuNrN9u8PmcbE3Lm6E7upxWpUCkP1m2dUb7",
  "key21": "rB13mGHjxJww2DXGGYF7C1N6qTCdfeqK7PrwXRmGuAemiXhi3xFwaDAbU71XzfQcyEYVbbgTsYvCTM1s7GqzpLN",
  "key22": "4vYdWrE2G8267FJF3zxy9wyp4ceSJtDTpsn6WbxRmCuWVvqW87DAxmuJ9fF7MmfadpZ97jjSU1n7xAZ5KyVQ3ug5",
  "key23": "3Uu7vQWsFZ4gaybTyVf3pmWrGRcm6ioaA2DazdxodfV3MuiCvk8idwEFynMeheT9ES7Mk7DyREW5KMpgjXm9baSG",
  "key24": "5kPcBFzfDEm5orf5JsTMkAtjioTDLqiJ6fTeGV6dDx5HeEMbdPK89DPu2Ehj8jXg43qYb3msGKRFFmWQmJ2KjQgF",
  "key25": "46hbW5X1u3ugRybUKRuwKWQJ2xiCGQRQ5pcx2Yk399z282t3wibR6wJBB8ZuHyvcDcoxugV5GNwVRGStSNJ8yAqT",
  "key26": "3EtWbzttkLLXiuWzx3oFFyki11BkjMyiEFNZdxE7Wh6bKRfu5Uy7rVdqotsDYqo2LadFGV89QaKdQLWk6LmLh9ux",
  "key27": "2rd2f1Exn5aywGdR18rygYFzSRjqm7m1Wwg8QnbHTTvwxE6oj4AoHdHjZHJyN1oRUu5VhvvXgQygMQYMuHfkiZsP",
  "key28": "BaXQTebedH5wLJMzCbNduambvKp9JB8UUKM42YFXrd3pcbgj5knegmPAxgHHaRZW47sfZEAkpy8j6R1BosByqkB",
  "key29": "4TAjwYG98KEEgkCaSP9ddWeGfR36xSdjgcnohdGzfysxUqckXbvx79t2M9ejZ5V87cysFdhjuymiYTi8NQFNrKXY",
  "key30": "4yLHMHN3JhQcHFinU25xedxAgYnuCSJ6FLeY46o5fCzsmKx2prfoS7B6sVRU8DVqmRLUoBFk86pXPNEbLmLNBJDe",
  "key31": "3oEtdWQK9Uwfuo1uDheYYJW16xhZnYBmxzRmWWPmSPkHsrik5pr4j25E4Ad2PMqZHMiMHtFWFNWDv6ciDFdQoWuS",
  "key32": "66GiiCPviP58riY4SkPP44zzoEQHQvmC9KHnjYzusUMhUhjzQUARwPv2JeHBXpT5wh1wWwUBpaVwKXFPfr6ZiStG",
  "key33": "54jddFN2o3yLzaNmSTyxHrDq6ZcmeDDvK6vxYavaETW7QRKomBBuxfphmY92m5Et5GwcZuQ8KDitX6G13HhjHsw6",
  "key34": "3BViJdnPJsbcmG6BWXuUfoWzRVcZwAX7mdLmsk5XHKmHHXeqFAkqGYoa617KanfmhS4CBgzqKdthmucp5bum5htb",
  "key35": "5vP9HV9jQ1FmwnhJdn77BPUJss2gcAkehFF3UqTXoxGf2xukb8d8S7bWhBsV2CUxj1UALThMh2g9zGmgveUU4Jmz",
  "key36": "2MUsAfpm1kkBgTEGiMk74EgnnFMVRK1CCnLVewNeztymGoL8mZoQdRFbWhai64mapTRt1dfs83R7HbQNZRC4AV1v",
  "key37": "3HWWKvKVx3kPdRnd9EQ1W5sUJM1qbRSMx5En5N2R45zM3tBypWSL8cHEYST6R9CfmztasHD3WPBUEVP4bYrqiHCw",
  "key38": "5JGgmWnHtaLU2f67Nnw61zuXFCjDb1S1KQJWVn6pSNLUiyTpgdZ6VTWhweLZtrzu5kQeebQ7fWuAmdc4qTgUPkn3",
  "key39": "4eKcjDgh5tA8xc8nmc3JQaC26zSFnyFee14P5uh7oiBGJi58UHRtda1x6ByF76qyEqCcJj4NBpYbyapUFG3sW6ft",
  "key40": "3pNibNEXrS2jbuir6BrNTHH4eJe7X9bHi2J4WneygPeU3VcH7rjrAbaRMfb5qYQzNuB9C5GEPzChSznvUXvMSKn7",
  "key41": "3n9V3VW3venhjWaN7ExWs4caHDBzxVEHrKAUW3zHTEXFiJqiCBUVwd7moVh4PVD6teiQdjcJPTs97pPMZFZkDZ9C",
  "key42": "5vFZ6v2g6jXcsVgbPgb4ZjxsH6UMbD5XutpPHKGSkznv7PBisBbBUZAN9QT5WnmQdxEgkVDZDGnFGVJRBy1hdKKC",
  "key43": "beopYg8iFAJURou22V69wKfKJWy34BfzuXJej6j3QQ5WchCHytTACg54LQJiYYgam1dqMCkJWgyvp8tDQR7L3eR",
  "key44": "43pZjq1bsuFkhCRq4RAkx5zeCY4p4TpcYW7JgF6SReKQmn9EUzRbiWn5woLaSqK4fSdF8xCFB63ZdxRX24yDsgqp",
  "key45": "2vqhxdkTANwJc5dJZqHLjumJsNpi3Jgoj6qVmDG6taqRyPz96k9LZpHss21564a62ruk1UmikN94JxAnptm3YfCY",
  "key46": "3wbFwRtHtaxe6MJQoRqok8oxvSapH3PpZA3KiFbBZzsiFNjPAi6eycXAHntSrFoxBXRPx3yULVur8DwTMWvZ6PHC"
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
