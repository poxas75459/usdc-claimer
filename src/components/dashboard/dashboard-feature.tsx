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
    "C9ZhNtDyd7EPj8VxX588yWGH9VqcYAX2cBCX24mFBtmneLapGS572RfGLzY4bNghxE28g7XtrmbUpTXJrg4SNXG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KPaSDRg2FeKe7XSueRuhA8Z7BDfZzwHJ1GzEdFTA4zHMrFTgk9NxVDXbspmJkvRNy2gZA5atmU5QJTwZQ9rBF1",
  "key1": "cTMkRfjbsAaV3MijwaJoBxELpsZSK1X78jo3cMfzFoCmanKtqKXtaW1NzvcJFWPqAAX7pb5c8hvuRRiydtaEhKn",
  "key2": "43S4U3JwsamYAs5VnDpshjZryuYtjhbpR6tVDN7iqcfeabCPR9k6paj4jh7KXPyx5mjTvj7htHKBwF2WxeHd2WjV",
  "key3": "6AUsSf5f7D8S8rk6KxopPtToDJRwoGskAQAFjEWbpcj4g2kzJGZL2TBVUVxyjfe1wyihpaXUWbsge1o7Vak7yHB",
  "key4": "5WbVFDzkam1g6snH8yxVT5eaXJyGKw7D6ib48tuTgEqGRebgZxAzmz7RCXZXEpdTujZzf28VVw4mkniqhTs94Qw3",
  "key5": "2oFcuxBv8cYNWWQKC19D9hCZMvPbmP7fX9dNr1cVSMvdbi2NqKepyPCnwudJQunyS8pkg7WkefauEUvVdpbfrnX8",
  "key6": "pbYwVvHZDFCFJs354WbbHzPM3DeWtWMuS4tg8ffxNzzn6XRCiFViopNvfTLqJk6bLbwULFDKHqbqZAxdHh9pN7R",
  "key7": "5eyYfR49MNavZ89G6XNpBDg4YRE1pNF5G4T2muDkz7WxddDv6iLeNKn5XhaAz648DsDepf8rBEhFdVpC1f2WpdbL",
  "key8": "5tgLc9qVNsh7tSD4349H3xB429TZoKmWEPBbfEi1ThMBYTr41TJSuPcJ94P5bDrC4rWVDcsq82cPfnE72qbo32cp",
  "key9": "3DyFLMHLizLCbxc16r3ebcc2ditnSimAydakXmPow1Kzr2NJQTf55cibie5D271XZZzzBP8zSKdMGEPUCi3GvVS9",
  "key10": "2r1XyoF4rRcsr64GTH2oz7nJutV5mvDju9nAYemWesXDpqVi72uGEDfBCnNWwX19HmaatZhShYX3dnjHS1Dv2HMP",
  "key11": "4gsEKHBhB8vy7JZ9VTdNCRTzWxt2QADEk3jkmKWdybzzowUeFAZhyDqsuk1ouQ7easjZ8vXNCNTd4mFrcC1dgRXk",
  "key12": "5wdoNNoDpCtxUR67nBQM7p6RbVnzE72JiHQxhJNhE56fXDrEGHGCFSS3YjQ1msnSyk2sJJBhqiLogFpTmxgtuemJ",
  "key13": "63a6aBf7E2nrr2dg26oCyYcbFJmwSqPXChWzxamWWwiSmAsympgu4tATVXLCZWngf6s2AePbK4Bnaxzh7DE9qC8A",
  "key14": "2M7KPAReKwHo1YcHYuepRrX4qTHQ98PWB3FazHBonmK6Vt5hjYejEE3wpoSRLtHXfSyV29iSNchqnFVihaHRUPsb",
  "key15": "259p8FHBUUoVuk8oRiFP41swKhH1fq7bLh3GyuybuK1uDekPK949ngADWBP7QZ127JHwtCUrGww5oA8UbGeBKZep",
  "key16": "2WcGaq4uH8XiNqhXLXMbHhvY2cAnrKa13KhEn1eBUnpKTGdQEirTjRu3f4jyB15Pd4Pn7BgHhGQ9DaZEMX4tFrCU",
  "key17": "2eQ3zW17ws1DaRffWwwRoafjVYiPkVJVsDYDU6d5zkN5ejR2mci2uYxyZrGVQp5Lr8AEkayXuswr1nrVYtBtzZVT",
  "key18": "3BKQx7hkuJjfppEBR47naKscsnVw4BYJBK4t3YcgTfzMzXsznTBqLJpPAjLqYf3zBfW8iGVnqcAhRKFQNwWA84Ae",
  "key19": "4RC2Ez9YZ5NQpCGaiScawUck3XTjAmBrSWm3cYLMwH8f8xoCbCbLVT4tLzfWukUZoqGhs47AgNWK8yQXcj5Zkmau",
  "key20": "62acoMREUX7hUzw9dbmetmmCmZP4QYxNMRKbbV6rNvMtiNWshQx9kpvW9cb4A17VEoyuU875wcHYUE4MajZcPv1m",
  "key21": "2CnFxnqgU1osUjJ7NYCwnkuot8eFhb4TY23F31FnEhcK3WF4tTnxnay8V4i5o5oYGBkfGMZ2vQCyatCqWmayajS1",
  "key22": "Fz4djjgFMqMm94gcvC5vdhbfxNossb2ozCJtnVHpV8y7pYJU7GBK9CobKMoVZRfxk62rpkDRGJMbFfsUxsSQZCP",
  "key23": "4kZvVnRJfrziKpxzJnvLtHwYbRayn5AYfSFxZZfNVTK8y95tj3vyjb1L1mQWbkcjX6p7M57xetfAS4ZK6hjrWdoj",
  "key24": "644MzGjpaBLMNSiTUED6YgLQ14ZHHUTA5DTS3nXkYmW3i63u32ggXihuFx1rML38YRAyzDny166hVaxUUESaPr8f",
  "key25": "4qQTZcUEH7xzUcFiDxQSRkWyiLNXGCD1minoC97hbJoMEKawxUqDmjq5nCmPbi7bCMJw4ofaYCaLrwu43S6K153f",
  "key26": "63CwEtuBFppKk4ykChhgdvCm1g2qvuYPYKkBo1pdQVyS64g92wrSFD3QMZ73QmRhrxhpYczC3kfCnE3AkDspLMhX",
  "key27": "gsVTGdYySupEbMPUm6hRHW7zu99JMBttyqEVuHdVWWs5oRvRJejwpnhu3SAk7R1zWqGbRc7QnDp7ccuNNMDPNc1",
  "key28": "4WJ9aUjdP3dDPdrk2wPBwjbVpfzSCX5VNK1nAVCAsDTHwxPCd7KjSQ2C926AKMGuWXDD8GdZ6sGE6N83Ryfx3WHr",
  "key29": "58uxRjmUUXZU4tWSSkEPeUemBFNSju6P6gBiKuxJtg24nVHq1i3nfFXmxeUT2LWwGXxnoSBDTj4kp6d4pK6ubo9V",
  "key30": "2yDiPcnqw4AtkFwifu4zEMTuALRAaJU2ddNKvpxC8hVTyZBaazCqKfb8XrmPLxJApm14T4UHkDKsDqYgtyQGnD5g",
  "key31": "4BzkUiYadQLSHq2dMAJxerdY1PXMAAyMzUq3KsCUa8fLqf5r2nTPEriseLetHpJQhdheXWcSKYyTwPCwQAyCfJ2"
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
