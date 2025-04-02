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
    "3PnHT9iTeD6vNiNLbdrvczQVCv6aNDRJuLAiV1TA1iKoWb93kAYc5ijunCGhzXtZRN5rJHn9xRVZYKdNjyHk7z2B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CM3PBrxqkVxFTBJUKH2MznXizAxTykZwVToJH1jeAS3o5Yg4HBsSeCx1mN92f6ZZdW8dyvrSHk4wiTTLE3DCSvn",
  "key1": "45QSg9w1WA1bvAqHAs5sboJd86ZaV1KxhBzqrP8f5sziGddxeyAA8HvSwXEE3EePd2PR9Fp6YEnv1gDq4PkGr2eS",
  "key2": "2H2uTyFDBc9C8mubeCDSEmifcmUzx2YHn65pEiaoqVMjdtPE5T1s1xLL3pGMigjDe9GeUYHVfKq16TT1YddjhRkc",
  "key3": "5vicfMy5TfuJ6whGzZQHuwfHL1DV5qHxWPiqHGaGdYHCt71WG6XBrurXWmGsBuarJu6o8e1UCTrvYj8bi8NcMTfd",
  "key4": "5PzyqwLjVfYJ2HhTCf5uND24Mrdb4V8fszRfhLQesLyr4iRFcv1zNoeXSNcSMvYpD2skSyar5ZR2bnWFKuBXbAGK",
  "key5": "bzU1XXegPdn5hkP93pK22SHwFhwEGfTA9BaVbwsCBRk12jtvjmnAErZQjoH9AmmvSt23kMGQE2cZMAYinBLToyB",
  "key6": "46vfqsgsdqj33knQF3Nwsh8qFya91G1fhm1gHf7m7o9dbdPZq6CmMhnX21soP4DvDNCXtv6w5tHERNDv882usxLy",
  "key7": "38uZf2zNeJ45adNSCwjZZvyRKytSgyVMnhNnGk29aFFo5GLuDyHy2Hr7h1q2fZ7DSkjMDbRZzpyCQRTu85aqX9KW",
  "key8": "7ofRMbPm5tQH7SvdVrRZ73krt5wawQ5vwsm7Fb4uw9X2hCmZ7A8VCzzwmYyLd7rrkiguad6jb1MhnWwfj6kYvwP",
  "key9": "4aeTvHy5twwzHU2xRb7hmBybTSwESaRu2X6w5Z26a8rZpxXS2i24vZTzkGt9g7JiKJt492nYo2hydmm1rwMydq6g",
  "key10": "227igXGWjXqWpHoCjeDQ2oVJyLstwAwRFVf6WgeYNQhVxP52mjcbpDuC5FkKHvmyRyUEc95eVbayKkka6iMmVuPA",
  "key11": "3d8cwmRprV7XoiWA1FGGSa45HR3RyVq69NWQUDJAE7XfYu2fLVCBe6ExstVxdXczGf82GiMRf8LzUdsw9HQi5PVH",
  "key12": "2qrkfkpygULUN3AxmCKcFn6TY5yGamUDY5YVpb6STTQ9iBLvmBGpdQMw53xXkJtowKkWN163jhiJzp5HzXaEhEFb",
  "key13": "56GYVDmvxobM8fSmVAK4cfiGdLKjXzewcP16P3sqt8TLD5Rse8du42AMey1AcDtkXGeWH2GJnnaeAyjd4ntHp67F",
  "key14": "4YQ2C7SbWU77deqrP26g2c2pcWLPsT8uTVHjkaAbJ77hqcCs68xu2kRmAouo2HqEcr1LXchYZXpRAC66GzyicL53",
  "key15": "5XzMmHsMzbVGRXGrXfXgxfWPexRCSx3jAqjRLT4po2AcdzPPTurP5ekGZ1YfN7cjKbB9ynhQeLYndEMvNvyWAhtE",
  "key16": "4JN5qg1R9khmfNUfXRD4WBPczAkMEc75i8fPNmueevcGMAXJDU5dZY8Vscj3FDuhJMtRAWa3KcXWdGreMwtP8Fnr",
  "key17": "k5ftukygpTcbFFiaQRvDRU1mBtxBZACvZfKw1h6qcBJxwgusaNT7FYkkbNwnEABu3Ei7pkd9TGJi2oSSS98xqvB",
  "key18": "28jWNLwt842bBw5zUk29wyUhnCNS9AZHH8QZcjHW7xdg1iMkMfaipEAcLBzt9aX4qYym7Gibm63DEk3zemE7BTRx",
  "key19": "tKre2bUdL9TyorECgZrPfDkvgm5hiV1QaZ6eFYrWFZgqP7YgyrrQPF5puJQd4p7tfpsYgYmZVTWKU8rmWhJ7eUM",
  "key20": "BbW7XQSjTpxiCFR58HbGsW4TWVtJmSGffbUdczMSmrL8uY5NC4kFcnGcfH2rfPiccAZLba68b13KemhKzJqL8zE",
  "key21": "2niu3qoiT9tKRVG7ex4VSCKqyq1avwyPnZbd7m1PrnLuANtUdVefE2sffefNqBsSXM17gBHpjRtvsU94zPQXVogy",
  "key22": "2WRjegxBwh2woNcSp5cg4u7uCv6MTKyXCXRhnPHeHEZGfTeHcuFkCxrBALX5WZbBdmj4kzvA13xDwCghWuL6uNkJ",
  "key23": "dy5mf1s82LaDaUEq9cmcMyiqqicJqrYvjPk7m1MYvgPQ3m4uLfwKNFvCFR9K61QXD73WsbNpLjg6c9BiCqRt8n8",
  "key24": "VL52rKYwkq9vjNK6Rua7586MwioL1jXzm4gs3rxn3Loi5P5JCWTwdpqpxpa1aZ8hcF9WJqAM2ECc75EoTMviVFw",
  "key25": "4FGn5S2qobAiiDvgHgTskTovwWsdPkGx1JMNZdBqz4aLdbbyBckH17aLpFZgMsucs33zZUYZ2VH2aWnzgimuctGp",
  "key26": "VsHDLDEkHBgbLnUs2AA4JpEKuwUALBRhG1fxKZSzudW12feKmX7avvQjeph7tpPhwK5wPHuZjnXZKy8EE8WHd8Y",
  "key27": "q9Up7NjjDYcoc5BwMkY23mrRMQtL9SUcuquhCGJuunegp2ZnHVKovtX4DASuseqJ9mGREiFDFRrtptwT3M74ZHV",
  "key28": "5paiNXWQtVf1JV3NvvZ2DFwgmJrL9gSijWCxfwpHbr2rTtgmyfr6NkvTz3tpYpcrfJTnnMnxqmPQULjBehP1DAZD",
  "key29": "41X2vcF65ejvEVnWUWn9zvpJxUPYr1u1tjjp4TanAg9aiyzjUv4HAifVR1B18GKu5WtkGMXRhkNwPsPhmj4shHPY",
  "key30": "3mCEkVAdDhh3fs9a1thv2vrrxLiwtH3jh36zWojPkhGJHD2Wpfg6tMFEMCswcbZV7WmUz7P2A9CdW3sCWjaMvFRP"
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
