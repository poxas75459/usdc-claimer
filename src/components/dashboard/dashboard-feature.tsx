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
    "2DcDUzZnNANGLdNeGTbWCaUKPTasbwEcS2Rsp1SsenJFBHRxVLn5tTSmHoZrTt12KAmoyVsogRkYNC57zpXDbPtn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49UBs5opghFK2mAqsqwDnmBWzPdPRLQyA6xzegkq8jehLBX1vz58ymQj9A3NEG46W9SpWipb3eDaggxsSgzKvyMC",
  "key1": "2PPwGFzyLgdG1uBvAtMgaWJWWLaZiYNrpwZXidjw6crrRUBB1CDEH4z7L7BaGxutF63xn7KTP6wZUzSibY7nug8B",
  "key2": "2Ut5EDCrFACq7w4cDhhHUfaU94Q99jvqMr1wr6dx3NrjLqitwiypZdsrdDTjhfYvdWeJwTUZZcr4thydgcTW5NB6",
  "key3": "3zuA7fuyfVNcdW2LY5rSHV8V2TAzcezYcWjkEmci9XnGRBo3kVPNUQVfuwkxf8Y1szf6KnB6puHGuqVF4Viq6WLd",
  "key4": "3xU2wGe1k3e9kwbChPpgu2655crxKZYxNHGEq78ESGkiCLHMh2uBUwR5ZE7mFbuw3TNmZruoS48hzV53yAboYSHi",
  "key5": "3EJyP7rxYM9AsFQyuz2eMAYPiNdSG7Q7mkAfnm8qnwbh8tuNd361zPp9CabxaTShutRJ21mwzHXR5r8Bj34tfWjZ",
  "key6": "4aHaUkd2LE72qcoqmqT3hoUzT6TEcksjctGByRgvejF5W7xLW49ADTQ23RUryQC1XuFDAmDcBDWc8EbSZvDz4p5u",
  "key7": "3FPmpXopbZ14nPQrYXBeVMEUuKBPpNm2UVAAops5wxUSKraWjZzHrWZMZmVxtNMGwFZd7wwFswy56HmSmgFfzF64",
  "key8": "5n6u6fJQqbkpWVj1nXm1ggUkkiX55LqGr7cJCcXgAQwnezERZpnmPXrknzxLm5eLQb66avcyuCu4WGFzpHtn4AGq",
  "key9": "2T6Tzn7DpipZdNsjbAP2pZkWKuBVViR5pVhDwqdNY2CiHHxUruDqQhJ46mDqsvKDvQHhuSVPecuvsTdtD3YKpSR7",
  "key10": "2jnb4zppKNwGtkFMhRAi6MP1R2KgFamraNwjR4grqb1fE43pPf8UGsE6fxXr2C6PXSwqHAAcLzR4LHfJ7zBLTou",
  "key11": "2k8SHz7Q4WJ7NweyU9h8VwSECSPpwNuQsiCDj7Zvvu84KaDiMF3ULPb2puEkYZkF9CT9eUuz3A3eFRnNiaZpXtat",
  "key12": "CwKhVM79xTs7MQVUS2nADBGdi6hH9VaLxmiEAGabUFi3y6EoY9FXy3utLQt9ZCZ4ySzUP5dCJ7o4zpTL2biQ4vT",
  "key13": "4P14yrj2hFBnFrq1v2TuyScZKSeQDpAxCpBvCfTj8yhRWu1p6k4ucqbPvUWnpoDfU1NRjMRZzSK1qbMqHduxYyg6",
  "key14": "58NZgKcUv2SgPXNsn7N8PDEptRTL93Ap2cccy1GZ8EjaKomwNX9frbkLudQx66CFVeweZXumuEaoHNuC1ZcqpeBr",
  "key15": "2NtAKer7TKSrY4GFry5Ppcu2PeTZGDjm3bXwJaUW8KTdDodnZ2VzonUeb9aq6JdspF8QEuSGHPryc1DwXLgvW5sA",
  "key16": "GR7yT8rPxzBXrZqVBgwXGpqGYkkZxiRxqPnctomkYQ755HGGh5TFEf6s59KVPdbJtijeMapQVjiqD2DaScLdYZ7",
  "key17": "2NDfPTVEgqsPhe1AShfregxny79zyEF9jd5PQXoG4gLxYZSzjUDeg27E8sSsiArziwvZ5z4iPQescLJJBUAexr3T",
  "key18": "2eLyM4vrVcoDXn8MgP9kPGZZJHQs5mGETJtDwhQoxQ8akba2Ca3QgHkc38HpeB8A6BCBtejDVQWvbTB7NzTYrh73",
  "key19": "3B69ybsYL19cQN9UTjwTWcEv6nWHpzkEjm2H5wfZUFKynBrHupXmAHSJetZzc2UzwP2NjdKyCgkpRMd6VgvhKPSn",
  "key20": "TRUaPtDcBEtnxh4UCf9RFKuPeSGybvm2Eiq2GiDWCm588aFtjrgQCZUJSVzZ2smcMzdNGdtWEnoDcKHNVaoU8gd",
  "key21": "66geAuHBMwFfFXrs6C5D1ugTYeu65E7mdpCuhkfAkiJNRYjvki2RqznS8CaaxmtxK5ZALrsH5EEs7p6ScB9htdve",
  "key22": "2KGYaimnmX225bvjRzdSdiiXSsHr8D6TRSWcB7zrsbMKCmepAdoMnngtXVuhzehK7ZGME6ZvqxPxifDqWQMRVeF8",
  "key23": "3hvJue8QPHrW26MimWxmqvqgmhU2cMbTdUHPzAL64jZDdavfWv89rVFfeERRcuMx2EccC92E5JkvVNhuQ5HzEfQY",
  "key24": "6S2vvjWYekfKm2jWuMua7XDvehxiPj3xTLtb98357VfuDPpngcPUAwWHhjNTZVBKZ2Qpbev4eUr2WZArwQKXPrJ",
  "key25": "5UKi2uLPKifMZB1H3gEcrNQWcAEbqLPpMjTCar2HA7DNVzTwSqEAJvsfKrKh6c8EMUe7drNMsWrrUjnPhxGZxKrG"
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
