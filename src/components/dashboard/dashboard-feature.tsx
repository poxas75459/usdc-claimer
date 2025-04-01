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
    "pF8vunmEhgrt2FUfeDnk2Cj4ivrW2Pu4RArdAZ1AQ8qEuLmhgFiA2W6meWNci7Bqut8mNWtV7hmNso8VUmivnux"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NWHSRp8e63yDXW8RWiUSqcJfeb7xy1rEpka2ZbCbCAGwPW11VbS2Bmj3ftedRzbPG12Ph4hxsq9ZTsESAf6CSkA",
  "key1": "4L8vZgz7wvGjNqtMPtyKFBoFT8HCMfjNKG2M5Cd9Voy5nuCLdVEwcT7Z744x4QXB9j1WvdspZanwTesf6XctjwA3",
  "key2": "3JRQK9Xmhtdcx7ksNTg2KmwGz9Xai7FvtRsbQeMozpLLfC4F4tGG3yUKPfPLSjmzBxJ5xWBcLrjWSaV62ckTc6KU",
  "key3": "4Zgnbix5b9HJiPTRGP4wkYGYAECyht9Dx9Z1gWPRz2qZLVJzTGQUWyYVvLPhxZiebbknQ376552uHWZmu8dQBYaN",
  "key4": "2m17D9x3zvyBzMG26SgmnGRJCwGbyQrpEppy3RAGHkEFjJQ2XqKKMs9DSd2HRfdhnisRQgvXEv7hBYGg3dEFgs8f",
  "key5": "5u86ZbD4N8yyX8itqo1PoopMpTkWQVTbyydspYVHuUXNtoWVAVft9uBMqtUexxomiYaqZqeea2g9DZZjV62b7C91",
  "key6": "bc1AfNZEiu7kWX6PvqP5cXXLYS2LJQW7nYoVCrMZrnTs9pkH1VWom2BscTbaa3fc8J1v6xWgC27HYacEcJ9CCyo",
  "key7": "2gU2wCCDBL3iX4VuPDhgp1QGWpAYzDyvanR2Bv9ubXHABSNw5HFo9QggCXBj4VSeZJrWm4uzG69CzNKWJU2edPxU",
  "key8": "2hfisNhjqGYJJ4Wa7ThsdScU2HuH7CLJrXD8mRTdPbLNqC4bmQ7RSJ9zVmAcZ6u3afCWe2yGnKCmD4enMLyZVfjS",
  "key9": "NcQeniehDFFxmyhKfqsL1YHVDhecNPNdifwDiGDtDs8Nfrcx4X8btXMnfwcAtbzNUuP5v76cn18S8URDbK6G15k",
  "key10": "1PqRfieBj7hZPgJ7Pi7rbsw48mx5DrDAFvCsJWY4phV5RaMVrHmUQ8iS7qbSECSqR4zxkg6LDGudUJFjMHjSfF9",
  "key11": "58t4Rudv3c7G6WwNhLEs3epERidLK4Lf9jq8zK22bTx8sQHXxBDqdUpmkH3xS1Nstda6c1Nk3mfwdUGPgxy9VFZf",
  "key12": "59aFoVgoPLQ8znkPgBVupMJSsPbV6brrXqMUh8tc3hgb68vYQVdEY65er2H6tUQcGRerJPpFTjfFPfikisGQRTdx",
  "key13": "Dr251fGSXZcRhgjdnVZKvNhBQCLRkeXrbC8vmEpaoY2PFU894QJyDZ4mx7wbFKZ6uS5uB3yF5PCCDUtGWhGHVzC",
  "key14": "2R3WFCnoVxtf8ti8tM2dqoj5Ut4ZzL4d1Ak8Dw2txcphDbfpRvqmmkrGHSvnLdV9HdHBfFBnRgyWpgvRhq8VUmmt",
  "key15": "5ELaFsdGTHTRCQiQdpyvLXwapY5AyyAyM5dMyQ3A9w2cGQbkD3tcg6zoEHSXGNvQW7SpYVwrnQiPXD6JM7h2P7L4",
  "key16": "2Se2ujNPrcaMiRW9vzpGeQiHUQB6vE5U1SSMWTNP7Fgis8mcMbNfyi5CZVZjbkaRAbMv44WmcGbFbqzUQZKyXsyV",
  "key17": "4i6mSLPyjFw8fVnNtscXmt36ihf7AhtWh2u1Dz44RRnJoZBuvdod7M7ZzVJxU7SUWtd5R4p7YRHwqLhBki23H2k1",
  "key18": "2iqcS4EAUcu3WuFhU4Qd7wByLaLTnYMdmgHEArRa8WVUYkJfaaLFxtABuXtZs8poC2qpGoxYSTU6fseni7c2mYXS",
  "key19": "5fGEshtWMYod29pMFyU4525bMxVbvqJ9jraBnbJ4tdxHwHDjNuXBQazw2RrM7as5h1aXsdD9CRGVWsmt1CgATSCd",
  "key20": "3U9f3Av1MBqXPZzYQtcd9Qo4dej1w6UfDCqLqT9jWh6R6BJZSPJck9ao8sRkhRijW5NDJ1VzfsoQmr3o9WZzCVzg",
  "key21": "3abytp8PoDcr7s6pLFQ7GxEgadPngn6EoLJHxLVMvBRUsu7ttFn2hbSNy3zmgcGDeMjK3GSdCBNrHJC8ULdEz5u7",
  "key22": "3fcFQ1DFXdwqjwTiFMmmjczAiQTrL1H5aY7AAhTiAHAjMmvq7BUheVLMbPiupB5tZ4VBCytWpZSfs9phRuGkqdqY",
  "key23": "3EqfCfYbJfePtfYQcnoGZyxeLSnRSULwPwaXH5sjQ865iEBpB2ePfHaYHNNVBj7TMVZas9P63GuzYtJazkhBUBhA",
  "key24": "4EB3eSxdJ4hbK7p4GHUVj9Uj8jkveMCMHGue1swCkTDDYKSHxSZC73GQekzoVQ6CtzDBkX3sQwoQtE4dFVoWLZHy",
  "key25": "3arPxn7fJeCr3tTXztVC1WpeDC2s3orG2ADc5cKLEXXVkGcCA2ZRSEE7N15audjB11wEczVhtNgte66rqsJQucaC"
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
