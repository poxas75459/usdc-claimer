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
    "64zWJpgFS9NyTVV24dWm2DMTHYNnxKgQKdbi4UxWz6PpeHC7bjTRgNRA7aCPQexqaWYoLQms1H8vtGSqn8mjp3fB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ferckjLoa3YKve8Dq2jJ5iZJtePdp8yxZT9568scc6U2EkQVwNUg3sbzi25Mesgit4MZ4TH1drsgQ7vRSH1RtH6",
  "key1": "2hf1W2bL9cCtaLQSyT4YK4YkpoCVGHT27V7qEJA33LkqWkbFeHGK8JXuNrdV4oLXmQMQhVF6nmKF6M1wY6K8MSoK",
  "key2": "4omhcPrFcCwJCHYFAMDhaGaSp9m8bfW1hPEyuPxgp6MW1fNnRtNUpik4uPnzuF3EtBEKYPNwE8RSfU73GvfRbUEj",
  "key3": "7jaS8KgZXULjdpYvUfuYf1hJJXqeT9n4hgXBJfXffKtR4P8rQFi3rjTGWVMANP3itUhY59qeL3dXrGvnc9SEZ4F",
  "key4": "EKxo8J4Gcc6gyxEAowcxoFSQBs5RUEbiGaW1bzBh9hd8TrtHgYS3CDLMRwWubmD8xUi82ue1HLg5YxTmrzrDehe",
  "key5": "3j8gyguugeKMkMPb4B2u1YUF3wPit42Yih61FfGwiC9imknp6DXNkUsJghvV9NVtXTLw3ApqPu14cGgsyrCHKS5m",
  "key6": "28B6mn7MpEPXVyEVGuGSw89ZMjY1Pg4ygj6WZpKFzw7x7gX1Jfd4e7oVf3FYekpBhoBogwuWHRb5MiSXXtqjUDB6",
  "key7": "3UTfscQ5EN91aTdxkepfA9MCcBmqdMyb7md61V2rReq77uWgK8nA3cTs4YZLbjvX5rWzdjBFyJ6dy6QParembagi",
  "key8": "vGNf4FpQBUcNF35kDguBz8krCreK1TcGAmJuPkASUw7f1p4mzdKPL2S65qJsLRsZPx6VRJMMYFpmBbbBFiiwRpK",
  "key9": "RMPeVrGXuVuKmY5TznQLJ1RNSjKLJw3tpfAr6mg6iuFeAtpwGAiA6ccXVuTeK1iHzK6ieb4y3yZqBWb3DXEYwks",
  "key10": "4okiAJPsznXRJ1JzVCUv8Zms2BD88JejvZRNwNvbhRxVeN9gxfVGnUrdq1h2cU9FEYHho1Ns5zaUpQVMzd2U6yRq",
  "key11": "3EXqnPQjXYCFYyfzsMR4P54uaTWpiEqDStvpSVxifRbpQ1y8HgXv8mMsCvzocNjzv9VCRcCV78x6hhkEADsAFcMd",
  "key12": "4UT3PnMoYGwVUtR6RnDFFucGRYYuLcqCgfdJXWABkWCkQistmpq3UsN3sRAXo1Uy6QRo3Rj9CmenadNfrPdMkM4u",
  "key13": "4wyosQckhmXvKbwM3BuW2i3nMDSRn9gRferiK6Ue759gaEK6VDXWJDWyYzuqTZkZXd6jinTEebMeju69ikYAHocp",
  "key14": "32AP4A4GBwPdNLP1mhF7a4k7h5JJ2JaFz18cibhH52SDLJ2EjsP67uGWnwFp1UVrMPN8pN4TWNgZ6TGUKAfiLtF6",
  "key15": "4wBK3KeA3yvfNJhgsdfYTeEQSn13FkHDGb1SX3qAqXtfk5fh5vU5LJYVVsbDu5zaHn7sLiAG4Tqh2jKfnLiveX4q",
  "key16": "3GdehWRFa3KihUbp5hq14BP6d2pHah4vf3QYzzcGCou8Bt7oSDSr8jvvrMeQQmYjdbZ64HexBs3ERnsgZ9cNLeGH",
  "key17": "4W9g5zAEGobJ5yhWoi3zDxvTvVcHePxaqLV2pAgysoXngHkiHr9VBYjbEzjsszbqgwgCcFex8tBQPpY3HUbAVXme",
  "key18": "SWnaxewUMjCcY5VCfzPLg57HcniS8ddWQNnd7U7ArfVeyQ2GtHo7PrqA2digKqXRFpDyb1JPXt21vzfbT2bDV1X",
  "key19": "vEHQgTKBiSCb53qasftqbAuPjM5iPvAqLiqhqgvLKB88r6gaohQeXaP5pVFja8c9H3LDPUiPomQEmEpbvRHtyNt",
  "key20": "2DUW9SsPa9tP59E1J1yPaB7XgNL32irUQt7vabS37mTNBhCz3vRd2i9Sft2N4F7Kmr2ofVeuGvCKEfdwYyc16W8W",
  "key21": "4hSrDDcVgmGQyt4AATWAWLrBE4Xmjog5jng1FDdowGmC4sWamp39o78sssDBpVvUZJZKQrUvsPemmTpqie2tjAK3",
  "key22": "4TECzztHUVckGAp38LpJw8MeMP1qKCkpk7iNyKTbk2dbrfgexQw4YZheznWWKqy6HhTGoAR4agnHUuHP1588AufX",
  "key23": "3p1FjaDMrZrVip8inStetQv1guJepjA73iZ8Fqzvxo669mRvs5qwQ7wVJS8GqgnKvLRzYHBGFXbwDjvBvaRBLr2C",
  "key24": "4DWntRP62rxh8WXYYywjQVUcsiTHEkqdcy3xiwUepfCeFGv5VXdGGzayWN4797DupMnbPZxphSLbArj2Q86q8PhR",
  "key25": "a8fdArRkuwKvzghcakEV1GXK73j9kLxssyS72ex8Ck3RoSYu5MAqaJ7CqD9kNMSZ17mfVwH4rWGRZW4hrFVp3tr",
  "key26": "5kubQApdSBL6z6rXMXm4Z5LUr3t3jjFJ2HwzAVg6cX8CogSkomi54DHjr6tgJadoNTjssEq6iv8iSg8mArQktyFY",
  "key27": "47cCERjQX8wv4HeX2MdNEec2APMjShjfZ6g2FGCkbM85LBQFfkBc1ZXZ8wQLsFQEMMtwvUfG6W7F9vTvPXhbe6pc",
  "key28": "5JMKqhB9Ty89RrwcHKUZonBssLbKUUBT94xGNDdsx2WieBeaBjT6qo4pggTUYqW3WJqLi8mqPsriGMeGAFgXEksN",
  "key29": "4ZXxZgk3Ayy5mvkfBu2629jSjt8WEzjAXsuRoSsAxAvQuN7cbvrzxCexRS8nk14UHH3Sfo6xW3dqtUDg8bG8rvdE",
  "key30": "iVVim6tWwetoA6BrwZQvtdUzFBHnQ3ub24PMwbT41wx7awgbWLAYwjvieaguwCtVPYJ9defXizJGBThn1c7rCtR",
  "key31": "3i8hQgu6QFo35Nt1khgJg48wSGL2HDEAZEHpCR3hSy9xfMPQYgV8UezuttTt1TYiuNJkYxXFRVnZvrGQTvmuu4mD",
  "key32": "5SG7AGcRbXvn8sjnSBoPSy2eR87zXwr7pXQCp7Sa6tCJGkt1d667UrUE3dgeSQkm1zZL8aTgncf2iQ8CKDuZDrzT",
  "key33": "DqwCDKGAeHRkQZTmM8xLfNrWi6fi88FkCo5rgZJcNGudxKE2uRYKMmSKkRubeNrkb6jqvby3CZCfZrXtoteTmHS",
  "key34": "5JAYsjrDuPKtj6M9ApxH7uvzt1oN7xj8hdNLXMSnD7S2yXR1SEnBEuTDMHkKrG6NqYcFwTLhv9KVrH1F89BKji5E",
  "key35": "2Ey9o6XgNZ91WuUiLetigD8QHCDSUdbmHwwrHipw6P7othoVr6FFXAS5qeTsLyxAWfrJgx6KmpkfhMin2pcJ7DrZ"
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
