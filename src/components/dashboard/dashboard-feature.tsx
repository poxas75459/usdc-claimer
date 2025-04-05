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
    "3nsvBB7VcGhQMSmYJtxmfaCm7QmnofYVrUamo4n9azxvE7k3kyXBdKeW95o59wHe4kaGatZp6YTxj2AQm4hMe43F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qAi9spNhfiKPS6p8BpG5uhw8gqFxxa2mmJ57fPhiPzs4vfrW73kWzEgaAXrh62LEzT6mfQgeM1mNGjitX89rPGF",
  "key1": "xY5SbKf2o1PXMRUtPHPyi44RU3EcacdvJ2aZKARapj2j3fVhN8z4QyL53Sck69KCc4E1TmReXs685JAjeVLqjJ7",
  "key2": "36VpRmiRnNvqZTr9m5DKd5m4Y3GhVYt2vYZegvgGjv46pFqHMu1eDMGLe2gnNLoEFQtjazs1WRQiuPpxEWvMbb2B",
  "key3": "Q8Lou9UXXMVYu1GMS14BFepu12EUfV7eqdhHj6MQyBUogyzkJFAce2n4SsfNSTNjPdCSjJmE2vU2UjtXNBfYQfv",
  "key4": "2SAGGGnRgepMikwhxhu4ijY47cNgb1XCLPTDRjNtjstsCwWZRzRpRdvTAawzsE3QVKNuUdyktE384VjbZu9p39vq",
  "key5": "2e7X2LD1jFrhc1mC4j5WmMywGHKAdZUwrQu98UPhBrzdcpuwjU6sthm66VffBiA7QWAzMKVLCNXMja6V9NST6GjL",
  "key6": "5HAcb5jGu2P7MyVrSfywHQjp6tYg33UknGtzR6YKXXYzHjD2BgF54BWasKVagkn5XMFdMwT3WewHJfzXsaxAeQLx",
  "key7": "4gBNJmbfSQeSZSMBhAxuuhXo1gQFjCiMkD8mXhZsggo26z61fkXAzpcpnncyJDKYEAkxEFaVeRcWNCGHaGj8yAik",
  "key8": "4AUwYMCpuu5iLy6hWyDTxHw5t4bpfMNfaUSuQdEfcnrvZZWpZqBAS8Yk92BRY59b6PaywSFiwEyUij3vv4ys1wCH",
  "key9": "hkbdJRVcTx1BcaNgSxfPYHv6T4SRodoXHQjwcqHCKtim6Zjqm5wiGNypRbkwcrwRnWSDFprwFii6XTsfKmP89CS",
  "key10": "3yCProuYk2MJgVJup93C4xTuxypYJGXLn6k5uHLqawQXfbv8s21BQW2zyHyExVQsunT4GwYSyY6FYEiRkQq69dJp",
  "key11": "EpbWdcLiDwnWSV6PXrrx6ozcfA7RjvrYrv1QiEg2wk5aLAU85DS9JyB7e4U15idAkNrJ2zC4Zbni2q9LQ5r3H3y",
  "key12": "3Hc86Go2ChGWE5UbVNpq3zqzb4NrmP4H1KDmTrKsK1Xb31GBCEs8L8pim1KBAjbWBURpUN4kUUZ1yfme39TkPkXN",
  "key13": "3Y3fKFPWXLvT2oB9Q5qxPFxgwuapCMnXKYKzkKYdR7cnTfr5zrWGxVpXJtKFgddxb38RSTNWqBC1KF6icJFtrGsC",
  "key14": "4y7NA5ZTjmW88gCfDwziXBqPFGnGgioWa2YGjgFS3BQ8vPuUC7XyLpBFYUpRxBXFmbUBBVqpUWMMxaVxUsHecS5R",
  "key15": "4LzWFLQfDgLvtXvNu4j9KRV4jEJtxxZyjGUN4tN9EDHj6EZbhghauAZSG6CTfBW1buSYNmcrhjzV7iRkWErKZ2dS",
  "key16": "3Dtiec6f2oGBXQ3kEvQyDBXh7D9DzcqBzDeMvfZjk6fWuU97xeouWbVS6K4ZmmCYDjJT2qLDtP37dqKj7u5XgtH1",
  "key17": "4ne4ny2GmCMnSfenT5vbKS7B71uhW2h325w5SoLNRb7yxZAK5ZwjCHiMi92rEGcdcmkHVbTVys3zh6Bu2VgVUbZo",
  "key18": "CvtqiecH8vsnFa4PVjGUMtrikdErxojBVxSNtqG8zhR9pT1z8BfrTpVxdPdRTzsFeqM4H1HHFFT7yfvghEkjE8F",
  "key19": "3sUP5DGJ3vcKTcfRU2hb7NZKAy53dakmvhQYxptMCPn6xC4AshooQVmiKPYXR8jTj9CS1wBDjuUeLLL1Ppzcu9UE",
  "key20": "2fCdjFKsnjiKAepgehrGQvoAaWam3nJDU7ro656hpK6CVwDYqKTdGscEQhVNATKPNoynSKd1k5uraQcyXsEhGQ3S",
  "key21": "3aup6Gwu5GzR2DX2u8DHgoiBRCKwdeUhYbMVR2fnRXVRAGSySyZJ55FH1DKVCKB4TtAiniUgd7ZgafTPQo5dUNW7",
  "key22": "45gQZkG6mhQ5E956Wqnx2T8gXb7TBS3ebEsCyYb9JMHvDnAvp7mn9N8Vm6BpuRW2UfqXEQGpgc8zxL3o6qUDzooE",
  "key23": "24GVjam7ZBRkhP1Wm6w3iUpGPH3yWiwyn67EdzXbP8B2CtzpS8p5Xz4xsPQDmGbXnRcLSSQZ7UHMmxWi37HAFGrh",
  "key24": "41LbJ57WrGLPUeffcQsfbZaTKK7cNWHEKxyKLKVvrNrUGVKeJ9mqMmBkpM6DQoLqHannLjCmmnSMeTZQv6NrVw7L",
  "key25": "48q2xKC2aVBMwtRTayPYuj9oE2EA9ZHasnjpPYXXuwy2EBrMXVNcQFAMVHQ2Es1pvJjHwXjBA9zZcfmhuG1nsREc",
  "key26": "6UQyQRVC9b8PMNZiAUN3rqvJbrs8AdK1SJVeb4tnw3yNrwzzWNXuWCvSGttsWu77h4DHSR1ZBx4sE4B8EuBnsHd",
  "key27": "5J3zzgBv1PSsEqd2w9wJEqQBjngjM5TLqV2WnRmrF8Zi2XXVFx5TQwZPaxAFH1XVjR7HS1ZpZCCAzjWBP3hx6TAX",
  "key28": "5Zt5tavZeG9XMs8d4X7RXEgHv9iX1knVGgWgjnYetvEtF34YmfcFax43A6HQjTYXKG9MKpj5ZQhEWbU2iMoQZT6c",
  "key29": "48h4YipqSTUnjn2FGbmZmJyJiDygGYjZ3mCC66aN6zcgmzq5h8h6EeDuUNJFRRsPaKJdEgMYaHpaWKQMKBuimgPn",
  "key30": "pQTKbs4Qu7Yim5dtwY6tdDaEghSyoM3wJ57uCo44Qn3ZsDjf8zrvPh6qpmSVCik15wiKhByTVUf49LnzmQSrvYR"
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
