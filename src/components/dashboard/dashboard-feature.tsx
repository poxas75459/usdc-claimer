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
    "4wfpFQ9hWoSxDBJN9C5hsp31R1difrMDXq4MQQDDwgNYNGBmFURPxU4bshZ9dC4KtfAdGGEdjDGFZWHV5gpWBchg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yrqmSk3mFdjDbavCdXeZY41AbdSjDWyhxgxDRUQ6PByYeFLzosZgcD3LwKXU7SPwoeDaMBPXpU6VP4X52kfaH9s",
  "key1": "5AtLYYv5bqWXxWyh3XtmmTnrLSNVQM4omtJuTm2Tw3cNrhKcWhF7zVGsULabXfr32HkZ1anmY9tKw5rbY2SUWmAe",
  "key2": "3uBuKvQhmbSEnXTMn1uCV2r961pFUXgAMtC172jUf3mvHuwxDnwV9VBZGszjDao5oeEnd3S3DHWuK72k7MwihiTT",
  "key3": "2Xo3ow1bMakBRuDCrF2E3jxCKwZpQQkitwXa7RycPLTb12udVQ21VKq5yGpRX3jRgGtyub42Cn8nR49NErt4AQKL",
  "key4": "67r5MsfLG7SfiZxX6f6nDmgg1RVtXnyznNeL87pxS3KBGVnyo5BwDeG24ZdRxrFmw7ttprtjxeCp78V5zwaKqKBT",
  "key5": "5iaAc2c8WLqybhvwkfHs6AVDPHfDhktFAB7QgXCFq3TycreuZUbv7bTeADREvz9oncbCypLcKVtENKgw5vs6bG3Z",
  "key6": "2g1WGRjnAsEsUnnyrYKndTiSrTaNyNrDicBeJhbPqMyEdMWfHcJCJGPMbeC6Zir35VxhEoz4dvymNo7Bj4ex2ePd",
  "key7": "KUWx5TSNkSrCEeGwkRoS4jsEMPMGC8zcGPj4FUK2QeQtGAD5dXR6mU3u37jgmpSmpYAKtBVmETF6PmbB3qvHVLg",
  "key8": "2bKYoabBAYjkhEg5zgzQPA6R4o6s7GxH5VJwB5zQQAL2gnQPSQQndqhqZiQR4TPeKS3fQo4R4AfcU1PHCe9sbB1m",
  "key9": "3zNaAGWP9A339m8sZzATkHtUYrcZrenDutCBf2YeFBHuksrWoJQRpfSAk3W5yMhYJ3Wp8kn25h2WbzTe1BDRbcDn",
  "key10": "62GNPn8zc4zMpKMF7k5NRKbfKm9GSCkc1H5Vo9enzmP4hWuDKdQZqTqZfGG9jMuvm2FDs6VEggBgHFxof8Ux8djW",
  "key11": "5N3xmT67MezgrZzmNDchysAwaoS8CWeFDpvP6ZvXFnzijcNuD9xbi5jJRFSJp1JwTyfuh6b62zwV1VUMkBdjstDf",
  "key12": "5gG2AXZemLr1Zek3uG6Uh2PijWd21UkuuZtaPSyXhibfUCsyUykCnbgtZ2HDFyHnUGCVuphZL88HVojFifbkkMhp",
  "key13": "2977mHQYsmaQwiECFZUoW5xUSdreLoFHQK7isrsFAzu9grwmSDUaQy3ffFX5YFHMeeKVXBFtSPQojr66EuPGQSnd",
  "key14": "5tGmCfF2Z11T53XBrZ4q3eyFHsQ1Bxcm9eUTYtDqw3cdmMRDiZ2i36tCY6gFvySWJAugGvpLeYJAyLCsQRJyY9c4",
  "key15": "5dQGxJCWoi5BXyejwZLAhdSjTtGXZbpmGq1bgXeNwAFEF8M4iNnd1HHrLoRrnETw7S5MYHZQ4GEwNCrsCj8gUms3",
  "key16": "3KCYZRfsufmgUgk6XDukAuQm52WnueLoV3LY9BoA8L1nVvNP5otTptr1KUQTk5VtXqf14cuhFXsCM2CE8Y7r4Q4m",
  "key17": "3zvDmLXNp5CpAEVUjHqsDaXzauPhpzzPxZaik2F4xnyR41warzrqW4xbuLkraCu1wxACdvtr2291Dwvker3KQwkF",
  "key18": "54XSgV1jV4mj9w7FrC15Nxu2VsHKFrKk4vjkBY6kB7B86tWZMDz91AWmFobt6XQB5ZFbQ8jKn9RDtNbR56Wb4wwW",
  "key19": "3aTvB2nPq26xVtV2iF86t9kYz2Cn6VJAXmitA9YqrnRd11Ecm3gg29fhcfBH7KrLFo18eXhvp2hGKcaGdoHVYUgW",
  "key20": "4WHNWCYz5r5ZG2KG29xeWKKqZmqFJWgVhHbWAwdRsrmyHE87ioS78fmAJBTQ6iD4XF8prGqTfbrmfcS4SiC2nsmx",
  "key21": "311ENULmj8xTi358tFnvg8gcUvgj8YkNgQC3gq4w1BSWnqE6BZPNahj84V6fz5RXrsUFfPM6hmek9m7Jgxr6Bbxa",
  "key22": "SVxXWu8Aj5tuAi3HbGfz1fS7wMHiAE2PYyB9bP6P8tAVzrk6zqXfxFy53ZjMb7GozV1ggiy3DLMwP2ykvnYgjsp",
  "key23": "2GzMiV63jKHLLrFPpVrVJVjxoZobqdEP95scYSWjFDRXstYboM3Y62rW7k3S6Y8hYSdg9TkGDeQD9CJe2BU7eJA6",
  "key24": "3mHjk23vUUcfSaXrWhS6A5pW6Sv2XbAMxibQYNmKUS2jwuQANAF4YcrAQLpFdSGKefPSjtC6yEg1FyJxQiUrtpwv",
  "key25": "3hxsnCzdrgAj2NPpz1sCSxL3xxW9uePDP3dQKqhgF3XqPB9oBXfpN3omvn37qCB69s6sbarmYn2fpC7ghuKYBtoF",
  "key26": "2xa2DRQdR6rArrGgdBLmXkmkbFoufA1DbPFTWJzPdSHpGdrg6MeKWz4Ta5UEpF3Q58gyVnYftk17mrMvDcHQJvcd"
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
