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
    "mzuktyLteebjxCxMVFfVt83MJd3ehdmtFmdpLbhF2SEXDmNR1SsPASCq7QyhfBdLPQTF3MonZzMSMauZRUduUeH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Qw78GWv7GSTkHD9zjKhFTimRp2s1LbQk7bS9jZQicEWsKLuE5cFKCeaFqWtE5FCRqBM2nG53FDRxaqkkv3btQuD",
  "key1": "jiSeJmn1yPYEA3Jcm6xVx9Sqd95M3F411BX7JzdvwNYB13t5Z36f5jfSHPPdwxdH7bzXdbUMtexii3JZjNQSD9K",
  "key2": "5NVqViLsnaQGaqV7s74AEp6c6DfNWy2ekqZNkVjNdgmCks77K8tWBXEhGfxsVdXfGiAYyDWvZDP92pR88qycrhNm",
  "key3": "4tg4K59A6R2o3xZKyMv93vBAqoa8DUZexKEmDY1b4bfapmFa1RTxHzoiYoUAKiYcZdDcqzcNnJf4gUk2vm7BfGmQ",
  "key4": "UPL7khqtQZY4VscrGpZaQE6xzNkzPUKzvaUmW2FwfH7vsK7EM4tNwfs91bvCgW5HrEXGjqDq9nKUnfaughkgaR2",
  "key5": "2hqZzoqomp2Fg3kacXmrQXpSvXeGagQC4rzSqZhAsW2t36pDudiy6PbdMhQ6sDyd94sZjCSJQCxQQjzC8F8a3Am",
  "key6": "4PwR25M8aAivNS21C1gPyhEAz8NBCZ23pzNkV4yvKsMEB5KfMokyRtZHW2RMo8rKGBUqg9RTumBsH1ie6gndi7dH",
  "key7": "5LGfRsyjZyLFUs76wYzLqvL7qhZ5DYXxJZhKdLJu7rqFJFJHkVRrJvBJcpLdkVekiThhPHYo82TcrxcHsdGAnbGB",
  "key8": "43zadagL7iZV4FjbXsbT5nn1xJ6hRtvj3qxTnykqKtzPTyb7TmHqLR22QTC2ti6u71ww4UYg2m52Jbfph21sn4mm",
  "key9": "58jS7JU7sL7kexUTvX72Z9WE8kG5kr16ms2Fp9nf68PGBiwksgeWb1H411eKeYzWG2XweRUnn3kHcKjjmoSEaUYV",
  "key10": "5RTdBcRC744GKnng5pdjQEKseNeqgbpGRnDiKkGHX8eY1wLT5uZDt1mdfWwkBi4kJXvN745L9FwCxyu5DkeorUcg",
  "key11": "3FBJpzFuiDPA6ZNd3zEcdW2i3wxuyg5f948SxzT1Kvf7yPoZuWxmAud9iHDhQDZ71jLYe16XT68gnRP24z2vo7Qk",
  "key12": "2NnsXvQEP1Avr8UkjCUc6SxB7k3abgnhF32ZCCUnZR1HfGguhgjXoAXYzRkvEQKjJv3wdwvoWjHkfiht72iexZEW",
  "key13": "32ePswbRbT21GhuevoELB6HPKg5vsjY7jsTWgZUp7toXfyvMNuyT1cTwUXgWF5aiL2PSiAdvQP5yU9sqPRER6Q4r",
  "key14": "62JCNt1gjQUhLL5HZowfYf4Gs7ML37cdXnGB2A8pZQfwSs9hYXE4tcspajAiqyU1PwSeiZ669xp6rEKCZCfdFHxV",
  "key15": "YsSfHiTubFvGYGVtTvkTqS8pHQu92teThtUJXZoKYaq7qKEWgofx84pW2ZUZXcHTJs39eShcD2Vt86zqQt1wZ3s",
  "key16": "367PGsTQyegaMBLAPA8Eia765ouY1oExLwxPM4v68rLeqfBZZwzWsjQ9j63zbDG5FL1ST4vGtmNKKdzZqsPFam6",
  "key17": "5BJsy9TvabNzpRmtXbtwVEci4kGLKfa5C3cHEyUi8jrrMVogPpEnhNTFi8R2pMi6KnE6CGewFD798KH1jUFJs1Qi",
  "key18": "5UZZCoszqPDSNVtXdxV5bBwysGP5aJx4JeNSvPHpK7tfLNEuL2hdETiCtV6fFMUJzeYHonAoABwXvewL3fKM7KY",
  "key19": "5qWbndV4ND8NRKAJnTqmVbTcLibmNBjYdHKhnzZfysbqr5XPTNxaD6BwUS6XmeFfXwYRSfMQFS2ZeUm9VmLSPU96",
  "key20": "2cWj3he2bEb2oiCKH9MrPM43fpLovwbbjtF98iLNuKDJTY3FKjfzH9gPsNCSPDY5k4rZr8n9xorttnskX3KbajL2",
  "key21": "2kEFC2Uzb5JMpcM3taVVDHLJ1rPGuo4AUkh7HdxPc43Umbp4UPfYuDfjL39uH6EU2wzTuvMDvJEd1j3uo1ge1dSH",
  "key22": "vKYjPFKfw8AmFMM1ERXZefkRrXjVqFfKTrCpEoELPevhFrVypbuK132VaA8fnTs4o6ar9sNf4ByPJDUJS4S48mw",
  "key23": "Qtgm8kdmLQd3fLjXf4QjMFM9X7CJHJMdMfs1XnM8Qj119Eot2fU2yuYSpwvh47ugwtyj12Qrc4KSk19bNGtxuKe",
  "key24": "2wAcq6xPK2eWkVJMhSQjLWGB9t3UnphgxCfReUe5eoqHoZA3omnYX4MJw2Kmm814MTcgVdGQZ6TNxBamXLaGAyqi",
  "key25": "567DhS7them2jGemYvnSvpc2vpYLbaXsDFYwX6KzrF2soYgeq2A4R6pXoey61ewLmCriC2rnQWSR5adP5swQQMAJ"
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
