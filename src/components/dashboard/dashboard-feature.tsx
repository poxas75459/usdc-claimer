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
    "2tQ2PXgyBwRWSeU5TWP3h7a6HLJVSnJTQq58AUgzg2Cen5JJn8KUckX8TcZ8rbBnagPuYMQop6B6jcCWPn8cnJ2F"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "56xCqBAWBGaMAXUHefo3D9FifbQfWWTAz4JmdmJEwxteEh9besE4NbRdoVJuYcPd3nc5a9hkwqE3cp9bw4XgYys1",
  "decoyKey1": "3gtMek7nsy18XMenG54nGBQFvx1ZHakrooixMDK1ySRvwdYq6MVLD66BtbzkX8kEPvwEfF5rwLXiJZJxAGr32j5h",
  "decoyKey2": "5RA1MZETvrkY3Vzrdbw9CLqFNXYbXfFYz4fSk4sMwagaKe9TVwveMXqMP7wPkAVwhMm5RnKH9hwDvt8aa1sJXRzH",
  "decoyKey3": "42uuwQSQEs5raGxBMkup2Yh7xTM9KB8MeRE2EtcUCzAchGzRVQfh6iBvn7jo8j96ugzKbJN8XXCo8FTsoZSDND5f",
  "decoyKey4": "2jVgK53DuZ7wE9JqwRsE6gUAoX1CL7qWB7MXXt5Qt5DUM92cRA9j2jbNBxVwVQu1uvSyXfS5V4DK3xnFLnHzJvs5",
  "decoyKey5": "3upFVngdkSauWmRw2bS25fYRUdodRH84v1GaMNNrDneYzB6u6VUh97YjmkwqdjUNN6jdGiPisahMSWFjF65JZKxp",
  "decoyKey6": "BFbC3w3D3p5UJ3Vj3qMUe9Fdzu2t3oEgmhh6rZs1McSebX5pxJVVmFdJrsno29eYYMMfXuE2h8Kn4KWn6mKyNAV",
  "decoyKey7": "2Z5jyDsap8YkaC4weoHJsfzFdpVnDXqwgcd1Zbhpuh54NfjiN9UZ3Ssc4ofCSd9ytGPShZPh3GjKYC1kBMrahZDg",
  "decoyKey8": "4hC5MgkL7ycx26QebMnt5cvuDCZCcrNWQtVWAKjmmxTFsq6KeMzwEMfJJqHoZb3LUa1cJKW6gVGkm4YXSZy8UY3g",
  "decoyKey9": "3ug98qgzXRtrV7gmSWLs3s5yAkeRV2wGqxFSsgMfFvP5L62ULSuvo5o1Dt8RntraLqg6ivT3EmMQmvRzQa2abhva",
  "decoyKey10": "4PV3qYYVndjBRdVDdXNnWMdAhSXzZ5vhK5qjEFThABhhyHTsCQfmjT43yrj5nCAgTq5kSXWb6SvprYfVSCx1Bmv1",
  "decoyKey11": "62C9kbixpPdg3abtCtwtw7swQcpmvswgruGnsUmmTiYjXAzRVBV5tjbRkXLbbJSxAv3pzSrxBh3YMPu4Cg3TFyrv",
  "decoyKey12": "44U9zw8JDJM2YkbWEPUyA6UVkZ9RBpkBiVKS8SCKAe3Zd9FeAtjLcj9X7tjGURZAWaN8RBMwuc9VkbmoPcwmF2Ua",
  "decoyKey13": "5FE4F9p7zNMJVPiiwe6xXBzk8RxxVqtdk3nDnaRNbqqWiLMVqX3meiGb27x2TrYVFeDE4w7pY6VxDH21x8r6aRM1",
  "decoyKey14": "2CamK8QjFh5RyunW36AppSRovJcksDfjJXwmLSGmeJMa696CpnzJ7QdLQgpMzXkRL61NYgnhKf3sXGrDwnaj7mrj",
  "decoyKey15": "2jti8g5vAdMiNJJ1gqkNmXm7Xq4msem7jnShaD7wno2BF82JUMihFA9JrMiBoavXAKFbUVGzt3qNqo1VgJs7HoPd",
  "decoyKey16": "59ZVXLKeHfvQhCbYyaeuS1JaC1D4nWw2emh1jMZzuGLgGCWFfYLGysCbnJ21vv6Z9DtjwLiNrn4Ake4KXTVMYv44",
  "decoyKey17": "5eYiPnEYsRucrgqVKhyFHoU7dCZkmgxd28JxytDAiLX9FQhN546o9NpTxM4MV1BbsFzdzVqJega2aFbRcNLc93DN",
  "decoyKey18": "4yMKTW3wyf1gNFJb4jYgTmti2YMRsCXPXV1AYkwebAXqmmtGMF9Lt1FtUHBGwxuBDYVXz1vzMmHVx6kuxhyCyMCt",
  "decoyKey19": "1JoBxR5efRvNTGKSSU2iedQHQGw11VyidgBzYtahvPzgtjfFWTPkSXiGWnwQQcxjXwxxrhyskuLpYjzwybet56Z",
  "decoyKey20": "55VBvxxcxpikFqXShNdcAfCD2FNnWyLaZg5dRVEuz2QDdoj3Xm3YngTaSQhTMGCPygxFj4QyxfEB9NKDYnpdqSDs",
  "decoyKey21": "32pHFf9yBR2KDMTRwiSX7bB5Lzpr1LgnbkChAFcaMuzTwhHuB44ppxxA6yZi8eC9ahAcy3nccj72MyrDxkRVXCvK",
  "decoyKey22": "4Vf8mXvnNfRjZ8GvYBqDmib1wVYj87Tb8t9hRoA1ptsrymSFwboJveq9WhwN4Eqw1CZEo92cefqZ6vFzLSm5EUgr",
  "decoyKey23": "Jn2zj6cF293RgtFtYcpF4bW5LvjjcLa2ibKoccFesns3Z6ycxXdFoyzq2Ei4T6ti41FpRwsWB9ubRa1mGXLCN7n",
  "decoyKey24": "3DSVCpCCGQVJTtF436oQHGkhSMs46AeivCDJCPHkmxcnjStpSrPYtJCfGefnph4HFNznW8vuvfhDT4pNDjZc1CEP",
  "decoyKey25": "2AD6ja4msytxW4fPvafQc7s17HjMavP24hogdP3PqSHnsNwZ17bnuNCmyezq5yhYoNzDCYxMVqBazVM44Bvd99Mq",
  "decoyKey26": "3AWw464Ruv25tdKcvysBSjaoTyM4ri5Qq8UrfhkgNnRswLk8CmuXNtDMc44U3htHvFCHDLcyb58SMMNHwv35FUMf",
  "decoyKey27": "59BPjux444JAagX8c1extMHvjVgYRMWSxvbNuJnUgbCLjLiquN5UaNhK3iBbJndNw1ySpXXF9ywcmFCGt3K4VWwU",
  "decoyKey28": "4nwaCuUb1RTSEMdTu9PBgxnyNGNEoYGFGNEBp9ttHan95ixJGVYwDyfbQsdyphNJ2TcVMBkaHyVtWyEKubzLHxKc",
  "decoyKey29": "PAVeCA5n59mJhCeFCFqQLBUE4gicqSdRR2AAsHpVWhKFRuPYBwrPJH3DHgjQydgFe4QmHnxZkZThiSaswjmHaTB",
  "decoyKey30": "La1xTGMhuCbBMubYhga4PLSX9XW7AWKQHXPtzKRqancJhaxzC8M88W7nfGdt3SmsMt6rhKVV9mvretRPT6XAXm1",
  "decoyKey31": "Rbxx5pih3mYScZvELcJqLJqdGDNgVW4v7GbK6BM6WbPhob1jCJKgTgyQwF1WCxWyuMtJZWWRRqe9BHRQnwg98hP",
  "decoyKey32": "469QMXiHXYAS8nM5odqZ19gDEkKQmCgMVgi9Rs24tFoPgz158t5rkx5ySfYX9PGheRuwitfqPfS3QD32CgDEk9gi",
  "decoyKey33": "4ZaQoQmBxMCaDPp8BMSmKk4JJ7iLpNqempV1tjbJUy5Ef12981YP9B2HQWknf77UpwzZ7rp5wyn7BDxFUYv3ziKb",
  "decoyKey34": "2RYnFUXx84UpvcrLHYb45svtjA8yCE8tLs2ToNv8NF2Nkzq3g2KB6bTARcEeGm2Z3UWVxDvTGQQweHryMc94hQdM",
  "decoyKey35": "67CFuNNeCsN7vJKvt64EisfQHrJnhks4xBFjRgRoLt2kx2VpJVk859sBTgUEeRv5KjrEHHLsAsdV19aniHGGT3s",
  "decoyKey36": "3rs2G4LQi3P9aJd7MaGxhu13TSWNCooK4p3d9484WVt57z82cG36kZnEu6na95SFp34e9zfRTcR9gjRFoegThkXa",
  "decoyKey37": "3rvupFXoAP2ixJnzaAohn3BmD8Ju7VuTopoK27ReK1WXhCvkG33jnmktnLwd85HbM2e15Q25AVoyC3T58UNXb1zQ",
  "decoyKey38": "4fcoKLVtFCekAX8sMCqWhrhCJMbC8yM6JRZCfScDut31e2apYvLAgAcPqVxY6S2PC8fAkaigsjtMx8fEj8NHVPce"
};
// DECOY_KEYS_END
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