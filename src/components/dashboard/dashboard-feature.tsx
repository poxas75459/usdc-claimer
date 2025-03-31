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
    "G9SBkxtEp1yPQZJq1sovAutid62gBefj68FMUfLgTJxs44kQfwesxcCV5prQkVT9M8MZBFiRt72DiQ69y84Xcgf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cReTZXxDVZx5RXrZd41Dk9ipMJKdb9aS2vWZdFRqh849KbTgZU4CWFgLEgWYeTwX4QGW1GBT72ka2SkRBx13b67",
  "key1": "5uvZJEaV1EPXpb8fGLMyt3N6McCoLcuEYfvv3RUjWgG5GF9et3LpM261qyUBYTk3S21NCJJQFT4SUQbjV32PPuSo",
  "key2": "2uMF4ABj6FaEHTLekUy1da9cPgou6DfVCTHG7YyvnbqzcRoci94pHoTqVmDToig2utJSJAuWXibiY4yDjRLZJy5x",
  "key3": "4jJqgoAZzhvoe424Hi3UJTykwY9FL7MhQ6vcM6Qb92AUVgWE9U4KfSpFZzeaEmPiaKx21WM6r2WoC6Rne4HFW8YE",
  "key4": "4nG5ypPBpooLuXaKveDunzRm1ChoUVDMoU42Fc649dRm2M546PHZ11u2XAuD3LPtWmi8YqGaDuiPtiip5ch6QSiF",
  "key5": "FFJAzJLmBLayWdYDLPPyqAuLVdsiK7MEBzuwtWTaE1yMwnuSpH5YnT4PWhbMXGqvsiSsDgMMhddSYdKZfPqcCXA",
  "key6": "29r4foCtzQG9kYMunxMYsmN1ATu56oC9QbyEL34W4i9tdYFmeBtMY7MVEbmUQZdnucAt3M9fdiJd8ppYpVyhuGyh",
  "key7": "4kJUF7n4TiRUgc7z9SSqnYJKBArZKEDGt6YtCBbdA4An2L6o83pHYpCyL7v7mRPNiGvshSAtRnByZHyCgprJ318K",
  "key8": "5y9uAUmYz3dShaRCujpitEK2ww9WSfAzRr7gL2vK9PfQ1W2iypL7KQJrLSfcejQWasWQDNmdd2dYKjEYYJcmi2mJ",
  "key9": "3wREeL3RFmGNqYWL1X2uhJ3iJhEg9fscAdtFkE8JMWz3iLeZK8ohjGAb9YmRYvBsSrMm6b38Uu9vZUN3MdPKsXXZ",
  "key10": "5tJxRNC99bj5cf4VcR2Z8JXPvnLGFJjSwCkQLgMoYKQ3kGL9fLMMd7i4WxJv9T7deZ4DnEqXE42zz9jwpddPvVfF",
  "key11": "51SsCj2uWgrr2nZrXo8BB1NAwr9NHSq4Rj61CusaZTP5YAT7JMNEtYMpknkKEREeRGKZSyXNyHvj2vgd2HkLzyLX",
  "key12": "31ZA8qXNRBLUB7HrHBGtB25tkLcjh68qthr4kCb4EtVmch9QfZMiXNVarcGhrrnhCYBCHoqw4mg1rbSjPc414BY",
  "key13": "35wAjjfRtkV2yxhvAaSzTJiD48P6Jewo9oWzZwJ3sshbBuYdEAdHTctoDFEk9JLbqMTFCnNoK3qx25GNKaMWaNZK",
  "key14": "2AaCZWUZd2Mcpntmw79DtXJLTe5ZndkYcvgrHfGyz8AqGsHuTvPKG93SoT32eMuQAJfUwmhSWdgqP1SLwXbVpMXd",
  "key15": "2zKN6WNRFQTuQbqM1x2i7pHitPrdiMePzbvKxASNBZe5B2WUwetWcJUwkJthrqQVVhsXUSq7efRrrwNMN3imKDp1",
  "key16": "63k9Xwwf2hbAwbb8mGaxf1ztJeYTdPD58v953VRG1zzYfWTrfBcDfdHFwpHmXkMbd6cCPrgffLu2QXS6oX3z7HLQ",
  "key17": "jhKPi6xCeeRcaWtdC9eYfnFrkcruLKJDP9wVTLmsykP7NSUWszxpvKZmgCDbFfPv5qAxmpwVBdxLzabfTdPT8eC",
  "key18": "EadYSLdVge5R88nEFTRKy8n6MmR5na3NznE2FyxozyCZ7tFhxo4N6t74uLQy356Dfq1oovHKLF3fVRSN1jinAUb",
  "key19": "3AeUfed3HrumKjXo7i12CA8PuXFnyMEu9CCHZ6XyygyaatprtSbjxg1eXtDNfmwC15sGR8tXGopzjHJAugaZhXpv",
  "key20": "34jNbsr4HB4gwNGSfZn1Nj54JrVmcBG9Si5ivRRYi6HEbSphKri7o9dT9kbgKaDtcNwN7e5Lx3ycNH7R7fuwQiV3",
  "key21": "4WwSwVN6ipzvEUi9p8U3SpMW9AafZJS5wDWgh9CWqemVvSNskHDQbNT5czrEaBc4u8GtYx8zAbtzaNic2cejygHM",
  "key22": "4vXQAfzKW4hjX5qiDbntn8rXgPVeFtRX3cufg7KDXuc8UkqjgYnZjoeAWsyD6Ujzd7wMi1yVjXNZ8MZfpkGJhvnd",
  "key23": "3N54WjEFDJE9AjkHad7Vo1jbVDoLcXegobNxnxaN4R2HxvaDRjg5b8btH2WovHyx6pDZVeHWf7N21zcpNKvLVJQc",
  "key24": "7mHdS42PTd1YKCuc76HmyPRioBRh5Kt3DGaAMpJT3wsipEsRSpBPV37CcdzAHiABwxQffnHchgmskyyeVsmEKSA",
  "key25": "4teH3p58JhDbgqBVJE65AEC1DDg3cYtXPmBwBENZBj7VhcGDFG4yANQj7akwee8YQvnJdxg3nhtJiCoFNPevVJhr",
  "key26": "eKTrGFn7C25bfEyB5iEtk2YWaf49TzWTcGScg38NeRbmCN7JXpU6UvitkiNWsVGcquJxqv4MPjA5a1Zc8rokYnq"
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
