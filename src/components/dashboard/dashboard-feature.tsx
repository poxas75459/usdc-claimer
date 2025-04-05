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
    "59tHUykc8thuR6nZjPVAAbW8qQTd1mJeW6crFeRVFEz7mRYt7zem8bCKQxfixeFX2hQirmZLTU3P6EtQPeEEcefr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wYjHxWuNSnuyYcsc4Tzb1txJUdrqmxrjeYvyQThtDM8U4o4DcVkqkP16J4uACxf7qjxiDQMLEgMFsfReQLerECn",
  "key1": "2SYdgZn3C6NeAqrTxkX3wVuquam3o72Uhyrg7WJgDLWSzMHfpTH5NkU83ThuYBFGENgEemZNXx3ri8wNgjTrGXDG",
  "key2": "8bJffJxXrAV8eC7ahF57sKfsPRMYM9XiWBgKPvxybQzXHjttrouzoKuc3eaaEEd7QbFgjnPdruuzSdQwLX9wYp7",
  "key3": "5gE6qiX6RpWAHntrMgtGVZdB2qjAJf2K1ZScJ69KiD6xmA1SgwhuDbp8JDAX8j5bAeXbyQttLwqPnCN55AqRmtfq",
  "key4": "5wWqH5uKHVC4SiJVZNKksx2SVPsFS5t8gcA29YVd1DnqWLcyPrwvj3tnL3pADF9BzNL8AZqYG8UHmfB3aibSveCN",
  "key5": "45G4CHaqTFv8vHHdjG2dR5a2qMEbf4sKMgcmjXtz8gMtciQZpK83GT3k198rQjK6Y51Qf1Rxx6g4B9MKqrDjigU5",
  "key6": "4xMPMmLgkaTy2jp3DQZkTWkZkEkMEMA9ZSAuUUwuv8Hs9GCB66WoPt3czePeHKFBgJNW6zGX3n7vvoBa69VraWQW",
  "key7": "2kE3Gg46SE1nEHgYvkXBfwXhL6j7cowWcdhctAArLpisyF5aaUrVuWyaZCKbbwy9XyGVo8VvThaLxmbi2F24CxFf",
  "key8": "3JQxDwBzWUMFt8zfxxmbhP6C1G2xFoYPw5ukBHhvzHHCUXfagNDbozcnYnABgHfgd51q7H55DptbZDesu1T3TRv2",
  "key9": "4qYZw7mtuYnRAcLp64cv3y12JKPJjHMYxY9aFLae5G8VriqNbFahQrq4D6hoeugN4XsmM5tGzdU9PfCXCoHhfinN",
  "key10": "3GN1BjMxDvNGjbsFkjd49LTcMKxYvnEXTBpjybFKsMXzexCWqDoMisfdjARVvcnppZTbAEPg7WTfbF7EvW7rhE2V",
  "key11": "2HhMm6PbTfBNSzZ4RkgifhEkkRuNxVARrFNYYQfyvWsnGpL5QcxN8VGquswe1ZCEkmLpjgyrr9WDA2pU6jCAWfiu",
  "key12": "5c2jP5HbSnuycZMP95kARywe5VN9eJxr8qcRTB9syFkXM9iianfEFaPcXVQXpM2pUJimoKaRYzTD7GLA8gAmWH1S",
  "key13": "5Hnok8hgWcM2thHV5qYzwW8xz1ui1WcVToUvKTpq5geeeUygbDhFX6jYAHBnPt9mLQPaSCpCFBf4wjv2Wp8ZDEcR",
  "key14": "2LFxM3sRG4R2oq8LgbxteaEBPXDzx62BYipGLhtX5DVpTiYwpLtEbkLegva9hpnvVvPkGNCdHL5b2pQc73V8eeac",
  "key15": "2V7FoQsMdoe9AVcHJ7Lc6P8rJe1TJVbfR2kjNKiu13DqCTY1BMNhZ5tUTCxv53nZt1tTrCk86NQjyzAYd2Ata6GQ",
  "key16": "4NdytGfMcpxE6QnRWscxoGJ2hGEXorCHksiS86c8qZzUfYpEMCTbsmusvJmCpHP4PEyCPL7VnNk9JYA21KbEc9t2",
  "key17": "3ayJpvMuDEAizKgJ7LiayxU1L4j3tXeFPEeKjECSTRS4WKw7o9FuQo49VwT5zGBsU5nLM8xrLjABaBs7of42ZQ1X",
  "key18": "4TPpurHEbnZuYhPgSWE5eSFj54uiJvV6nebaNz1qpKjggjArgRtp25duojuVnpVCiYGAqZAHbmEaawWimj37XNax",
  "key19": "2wMcXmAxCiZFVvf8SFoQAoJAUXPZ11PsgjvyGAk3TrwHKanPFe4aGMNHMdnmbWoFKr6F3MopHrGXLkovFuvn29Rm",
  "key20": "4WMTqV3bh2695qQvL68qYZGyTxL3HkJ73NpFnZ3VeDJ9c7DMa7JFovUHJy6obyDkKnT9W6ySwt5cBatHGF5KkVjn",
  "key21": "cCqjqAzRdsVmftSMppVsTKjLLWTA1PY3P4bP3HuciJEYVZfab6W5Epj1PEwea1C9WEj8sTvY1mY92gcVeuMxLNs",
  "key22": "2bKjxW4XheEUx9ae4eS5yEDzwmaANgi4yM4xmYe6LqWC44bNG919drFbQLhGQ67CYV5T4NNg84ZbdpR7UWSVVdb6",
  "key23": "4exaZjDEigNrL5w4vLsVEDX5jEKJFUKbrpynZMQVxs85woVkn5XMVaMyiyoRznMrL5JPh1DDuJxm9vccSyvEWQDA",
  "key24": "5YkqaNHgv9xxfFbBmKN2KFNmbKoM5At5CE7sLbz2z17vGx8UtWknRDaC3ZjUHSNoqK8P3qREhCac77aNLCEEcWVe",
  "key25": "2aMTebggn28jK9nn8GHwcYQn7V5SBNyR1QLAye88NddFrhBkYBpGd14L2Co2e63HWfaiWKSTdCT9dAFbF2GS7omU",
  "key26": "4CvnAA3bzvJ692b3VSW479THpGM6w7LhsZbKhJF4rS1zgvrpQTB8nqj5f2VaJacRoDjTMY4KTHGQoPDdUWcokWCA",
  "key27": "4JChmXJ8vvQYGy1hnHCmRTVNin2s1R7SDHrkVw7ZH9M58i1oq5NovApTLGMD41TETSNEuxkiN7Gdb6PAbfD98QWj",
  "key28": "nNJjK28wNYq9XqQ1iCK3J1mPKtKXh2e7zdSNwgRtP8odWDuKoUsHYE9fesxGEN67ycCs8HvoXXP3mNySNRLCBQZ",
  "key29": "5meDvUdqB9FxLbdKSGn1BKNRuRZYpE3w7bck6V7T4r1sC6muZyW5qVe6FLkxNADnC4Xiycbz4bHtYsVuznVpocEc"
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
