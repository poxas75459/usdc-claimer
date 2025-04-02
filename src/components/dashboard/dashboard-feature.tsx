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
    "281cEJjSRHVoxqktewBxYAVfNAvxk9fpKL2ZFH4r3CHo6zUM2ve2CKE2ZNhjhPk52111dTdQCgAvNtLAYCssFXjR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W79y6htHpD1grzbS6v27r1mGDiuEdVQo8t4F8EafFe5WmrPtCyqnTPG5cbBQPZ1V57dwnPu9g5Ts1PjBf99ASg2",
  "key1": "2PNW4JKmGyxwehCdapkF75oCUUT6o1GPH9BeEMw8zXoLd9iR6TodSdA9guWVECsEjaxXU15XqGd9kQyQtk3hk6ZE",
  "key2": "JSYk2Jcg4gTB5XTUZZhx69syJSNLss4pMpvpdppSNaCfzBifvuhsXs35fsBzS2UhDhrC8Cssg1buwdwVKiypWZe",
  "key3": "2t7cfi4CMEbGrR6ns22A99vKJgucRE97wiuRaJ38J5jbkL8j6oLfFKcP7MGG8D2s6TjQU43HhgXGRNYDR4Wkk3ji",
  "key4": "2RFmwPHuv4svq3dq2u62bWVsBHaRqqe3o7CnpcwYWZAJm2HE4nk2xMTHMEVRsLYk1MehxYHCDJossYwd6WWA5ZBQ",
  "key5": "PDucRbwdit9xsjMEfrGki7R4qmrfHRHxAWm2uDnsQo9eAuDTPBzZ4GzwRSjrSv7m9RGMt8YmM2qEkT6pM5fhxdA",
  "key6": "m7S46oXEiD4TEr2HGgv6vneLUHd2KVGJ6twdkEdtkdfvXLzZCxAo58UcEk3UQ5xQeV8AC8kL6c8udyCU7SjKsGF",
  "key7": "64EfjBapNCQCtfha8nYmEBJcLAn16oFo8LprYCnqiEXXnp1ggWYVKRVQ32JKSEkNs3oTRk6dg4pbPrETUpfP23kM",
  "key8": "4c2eRmFmcSPLz5MfsqBo1fx1hFy6HEfoBM7Kr38U8yL6Utt2XGue8Aok1pGyMiHrLq2D9pDmj4Nw75kGTqqJVpAq",
  "key9": "2s8XoVJBwYEWTt8QfXs9KnxrSSQuEseeEkJ3FB9HzqaaLo2R7PZzfC7sMAUwDMRFJoqZGcCemu94uWH3B6Bhwfvu",
  "key10": "2pJNVSZz9ghTscNdgNvTJn2rUp78wRsRVqJhemftU1TqMw3dPn6KYhCTt6gGaTKPMd19dD2We6urLmHDvu8GuFch",
  "key11": "3dhRUmj7TYjPVQ7F6DCpKyaQRMsqmNa1VWT68BtBS6WVVErhNnKpR45BesiCNNmz85JBwPRELVCjEKfnukx8KLrD",
  "key12": "28FFUSmnVks4H3edACfCSvJMQym3chNopGRtbZNTXqRGGQjfvCnkf8Z7fZfNpHRRTqYEnY3ypPaQ6VwQDTcoqdDw",
  "key13": "2WRdxCfUXndDMvQkN3xH36bU6GdvQ4yPvPzgZYxYK5266mNPrPSjNnNcasyYxERt15RWgpUT5ixnLHneA5m6eBUs",
  "key14": "5vaq3uT2bjDzSEwzvQnWDKQLnkpYL6m4SA6kqcydPrtzorTYeKwV3tjCTVvAjCFJEY3KBWZdasw2H61keteGP3cE",
  "key15": "4T4Qp8fGqiTmXeKEcxBwkF5vqzgs5acrLj3eboKDBtugYEUkhsg25CFY6eLYySqH3U7XQi9nV4bWtzDL5is24iM4",
  "key16": "4y4DtvYqoFjEHd3ubGCawyfvWn2FrFKtZvNZahUKHMiMG68ph3thKd7kvkkSVNqz8xhJ79tt6iYzgqkMjikn15UF",
  "key17": "4TfuMknooGu2VcHdiv1WBHC5nMD4G4Az6BkwUvbgZxzT1CYJpZe3XR5o1BGnQMW7V1LXapL4pLFnX3ZGDvAiffHS",
  "key18": "pP9eJb652QZphVfM83uAhP9XeJAWGLcXs7aGDbfenTqfL6M6HjzE4jemnQtfDiU5B1K7CBtDHSYbd7xRx4xfKUc",
  "key19": "63r8niTzi68hDPqzTADqZsMNmBCegt3tVrnFx2VjzuctzX3S9gJtbZ1zuMxxRbJgd8QRF33Pm72nCQfQ3Nb129cg",
  "key20": "SvZL9aZswkmJMv73QPpwtNQhwQs2UgE4pViEYTbvopX7GNMgomvGik3Kzj5eRJXtqYAzErvKMQdto6r512kx3v9",
  "key21": "4SKYgYdEpz9uourY7Nexx5D9P9mkvew4DoaoNesYirp8caLM2LTzod53sa2u4ECNQraHPtpJvuAyuvskTbjvNEek",
  "key22": "4GC3ffaXpfKr3ynjVx7Xe54s4q6vqR1AznEpcTvWYBjgUg1daBRgvgNLJmWDAhoCWBke46giZ6aNXrLjVFRj4qCq",
  "key23": "2EYvsCkAYihim9LZYCToEe3vuPyDeiQ1ZEnt1XRiZmZGY9XsdbtH4hNW6tmUqcjAekMpgiaEcXaGH2JZRk4bSSLK",
  "key24": "2HoicYwBBKTCQBhTtHw6JH9C1UnxjAX67ih5Xgbq8oEHaZLLrBRTxSBzp2V5hpMR5TGiDX1X3SeyggMwTHZvNFKn",
  "key25": "38nynYxoXDz8oGiYrVQTCRXPdMdnWtBcjkTgr3pVc7bhUSyQVgnyuJLgUfd9uvqAgmvmsHxDSsSRNeJqtxuXUgLU",
  "key26": "2F65TGmEYsdnya9DpbyMgaKGh3742ze9GfmZxFTo5gQB6TeLYpeQDHW4PouF2A759aVAygj9qdx5ozhxuwWTeKug"
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
