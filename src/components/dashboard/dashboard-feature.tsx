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
    "5mNLWKHm72hAHyKQpmifAeKbKaWk4WrfCPYC8emN9JcqEDEHsgNiPc4qQVFz2rJS6i2eKNqAuXKqJK3myNjdS6zq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34RQXu9ywogXtxUBriJ4jHeQcdVBU6J1q8eMBEwNfvhBU1wCDRzp8eUUuFtrzE1njGJDHHoXYN2u2VkuDBBtCV3Q",
  "key1": "38Azgc5kTErAUn9qXs4VFnbPTYKYSSwEen9mjYmKYH8eaRgs8Xd24JuKedAAZWevahAWqPjnXMye6Vrm8VPr6vKp",
  "key2": "2iNLv9mggoPDtcSSMiJNDA9Pb4eag36sU3rvJfm1VMWgigQf2JNVQnjAHnEDezNZwAs6RJeV9ze5hNEsKwLhsAPB",
  "key3": "J8VQXyV1Y4xzkDcPGMrxTfsxtfRGYL6GBsK3cvLWC7p5sqrnW9Zeg7hH5DU2utBedWwtDFZkdFNrGLhmCTqDxyE",
  "key4": "5s1bSqc1hqiqrsDNXUo3uCa434v9P8z5xuyVfU2s7CqzwGoXVZ6uX9LTDNLCNiruf6U8Va1a8YA8qpSCksVVzxUW",
  "key5": "2dpF7aoS8pJWWZUQ7JwuiW7cxTUcZ5aLzkVBKsFDNwVJhzNsHEMknAWAZdPD2UxSnZNmNVWBMU6BjcYSCVGykRiN",
  "key6": "4XHfy2PR4x5jCakxF5VFE7gL42K1AQsk7vhx9xV9m2rsGCVftGTZJ6tRVZ1sE8ytEArS3twArvjywzsgCcdfd8o7",
  "key7": "28DWmuChUkhbbNT99ujV96UqrNvaoAWvxdzxtRaBHxtnv7So6s6Hopi1dUpBXrpbFGaE5TbTRBrN3zuuwhVTiJs6",
  "key8": "4oU3avENVbe57UR7Zk6ZDomWgHWCxSVworoY7BC5NHJiFVmcVpUMHtVEHtGqvAH2674v9brr1m5Qz7UZm6D5NBXh",
  "key9": "4SqQhZxwsH8dVRLauzBHFY1HaTbci44H6RZsGFc5NUbEniVzu2u81RchBBoAuR2ye8vZZnBLKyq2UAcC2U3zdhRh",
  "key10": "5oyUReawcTYzDQJSpxNcTCJdjifMyJ4cBNrTND7ThNRycBmaES1zJqfG7EczDffcrSHX876rp2ayjCVgh1Mr7Bv",
  "key11": "55mz4xYJfv1Y6iNfJd9yfQcqfW4bX7kEHtvLW27feXqHLiaUVHnTBg1aafv7VjobjQRC3thPEz6uvy3um5XVarTk",
  "key12": "2b9JtFDPUFgjEtQ7xJWWpftKk1nJN1BmwZnYLuT4AggjMsNuxwMdQSLsviczWoPVUuatULicfYTcT4HDm4NGNkkS",
  "key13": "2QTsVqsNSbTgXg5uYMZQj2LTQNxrc6EGxH5WfMivLehdNtnVqw3bPDmxXdopkcbCSuC5F19ZYpNfzYxEyPHKmEmU",
  "key14": "21EFNf3zPh3GsQN6rNRtHqzpjB1iJ5XN2pWdwY4ecoYhMGvxvhU92pYcEbLhhvVPSpahrqQCBsqFLn5GqUqLF1DF",
  "key15": "3X6GibZa4tG7uof5ui6CZyUT29rNBCkZpXBnwCiGdMH1N2DLQprdyue854WcrHVfFtrfTHaAJof2M8WfBGHhapfT",
  "key16": "GMbfqZ5xa7kkSHZyoQvDqXMy8WeJTmFWomaKteFSutyRBvfUYKe49Me4FzVdwY535G99MYpidkXvRHaVKXfqZjr",
  "key17": "5miqUbF7KCb9kv6gB4HuHnjGFooxrqdXRudq9GnHZKAxeR8a88GohdB3FSg9V2xq53aKAPyVrMR9GDr134bXi3Rz",
  "key18": "4wSc2q32SRjokXvEsJQXQrkuFrPe5dmHeBaY4ug25BLTpgu7edRtS3b8kBDBK2e9Cqw6dgghbVW8bJUzxM1vD8HG",
  "key19": "2fmyPZUbr7A7A7coGJkF1ykXkVCcD6FN2dJjstpBC5zQSvvGYM7ocLDY8X16xWeVh8pnm67XH2pGzLcHV8pRL15H",
  "key20": "4VuKvHZG2JoP1q28VEQit4E4DRmQ1F1YnRPPZ6NN4Y2Kro5wsHLdtRC52bZDGTpu1HBqXD9yyc5MvL8h48XnfT9s",
  "key21": "3nYGwdKM22XZvQutrxrRD4F67RNhUKXRELNns4dem3tRyAz6DBg25LC5LNP75cLPQ5hRw9wxRe3gdTtAV3VVfu97",
  "key22": "3vjswepJhZs9ppm1YFxtDaq18PHMrANzMZPW3zoWX4tSQMqGpEof1GXm3P9y31pFECaHibGfcX1xxECHYs7U16tR",
  "key23": "5fMbugDPFkgFHmVJWi1MAtaGjPqed1MVCdmvbnYLv4Z3LcfbAEWzjR9iwWHyL3iKqjQjazFhj6hsQ5w2VQQAYAav",
  "key24": "5qY8BrmCUN44cRFCkGmvYcnigfBR57tEFifRJuKqwCKAr9pczbajBo3G7TWAj3ABsBfwPmWkzQpA5tzPgcXJJkaY",
  "key25": "66mL3NgfSLzZgMX7WbzPBGfCRqxrXhn9zfzWvAfPch45CBQ1iwqzXx7ZEgry94Ap6iuJLFY8LAjxnFFfKFFMwN6m",
  "key26": "5ZbT29rWamXGQnN4sXxaMA2DnTdaeAyGrY3m5yKkKHqJn6ekCcVzhqMh5t4Zk7Rqtd9Hsh4Zj5uPwFxsF8Vmv8qe",
  "key27": "5LhLgg83WehMZXasBL7EM8goj7iVEeZPkHaLrJCPAbniq4LiV5J8ibdJRX56jk3ywXYPs6XEVaHWGqWcsSGihvxF",
  "key28": "2oshdBTY7zz3DuZHXX7XTmzYEi18gpYQmzhpeFjK3UfxgKtvhAkW1SMQsHz57Aqjy2vr2f6Anv5s4V2kfymTFmGv",
  "key29": "8DKUNDDf4XDwwWBbEFeFz85K6Tv1jm5fuZMAPyXEbmdp99xGihjjuTR8XBNYvzbjyrwRtLVbFyqQ7T9KKbJy6Tf"
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
