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
    "HCtraCPcZYUydqAovxuHis3p7Dm6YqhcSW2uA9iT95QAGciW9NKhtJ3CEdknY2ZQf4Q1JrFb3bxkaCznjFV3GN7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bpEnw7YGLCTUN3t7vE53eZo9CdUadE5RSYEDfT1Myf9EG3fwVPFMCjuSSVs44muSdhbb1Raq5Y9Xx58VXtRSST8",
  "key1": "2uVK9XTzmPpooG9bUom6hnCwCjx4rJtzSLAhuFsbDAXdnqf9URdkzx926SFGKjAoxrRawwgANU5XQgb4dxYdyki7",
  "key2": "52uoNbFr9MzLULC5764XfHGLba471TQw9CogvDhtSjwtV6czpMVPiJLTP2ahHzW5mxRLxHVvAwdeampqeyNh6ntA",
  "key3": "4qo947KQChm4Nx6sNUF2V8br76g79jS1viHE8rCbv8WrSHaaeU1aQLHV6QKFi9bKyZiRSYxTmk7FkhmJL6qqTJeZ",
  "key4": "62cmVAtRqzUi2FdhZXgkUQX9xVVu9t9Hki6ic8vj6jx8KxqAvZA4gSzvkTW79yJkSjfXSEBRzfAfgRQQMnrw7Sdb",
  "key5": "57fJPnCdA8PYEnCEM5GrF3RXXM9j25G9YgZgNozKMY9EbVx3VLHbCQ8hDS9kxgVR1zXQfr9EGwTu1gYepikkQvUY",
  "key6": "487GqEA3DkdUpbsv246QfYjZ53rdcDRnUeaUHkVBXQBNC9qh7fQQ4bSU3RgRJXKjWLxKruJyUrM8D2DrDCNsqypT",
  "key7": "642LpnPPg5pmbd4Q3KijqmayKWcDYU8Jo54CP4cTb72R84gAxiYo9Hv1MR3N9MTXuUXTyb412Jue64hXYpbXEDx3",
  "key8": "4272TEk3pTAm7fqbwLJWcDnv6y7xMkQwBb7pctY6FHxiL9sWkZ9CZgyScnBH6keGCqgN9NNrSBCrNHRbySjRhTQU",
  "key9": "3dYJ3oM2xYrJSyFBUC88aWAmdaAER7sx13MHaCDH6Ehm8pEfNXo598vVGtmUkAXwomRwczTp43XKq78eWbDLJs2m",
  "key10": "5S4fWrKZPD8XS9Dgbna4pBVSVFGTUJxEgeofKhZuKDG2d3k97BSd84EPLUt8er1pBTqmcmurPEVaSpeRAwRsksEL",
  "key11": "47g3GBtGRPMzezpkv1VbBqJt3RJCDnCkmjFjjW2MfHXwuLN8diyrW1b9Azfhpzfn47EAYWwXLPQVHDLLrG4mtzEN",
  "key12": "ehagyQyzPz6m1C4gpc4AQ3DjaDqZAyk4NX3EuxihtPMtctRorEm2kq54XbHqn98QCuEHYusiyW9xK6iZZK2abhx",
  "key13": "657yFPz6Fv5VMuRv5eX8TiDA5S8jL1HBAGpTMEMjdRn7YmnEibLqFxtJtDMKzWVskW6vobTzEfSMt98t33Pw5Z1E",
  "key14": "34GgHW7CGxvH5JRa4XaLJ7SRKWAajQJ4MGfUmDS9gvUXqaqUkSRioMWiZfieqpyPVheBi5ioNvxTJBscdfzboaeU",
  "key15": "4vU3cuMEGLgdkL3dNrqbPyJAkLvgTShg9LV3bmkyVBZaKSS84AVeXPJ15KMSzDRxSCxj3hiAS75nByp1E7LtStG3",
  "key16": "4CmsKwFwEXujN3pXmPM3VCQrSTSj1GFTjGSjhctixuFEMrzRezNNrNivFGCJwvqjb4iXSCiTU8DHtXPuPq6iwcC7",
  "key17": "4A9ToAg4aYvjjauMiniWdGqahBdSkmsNzBzqEVi6gYux6mXCJ5SYAiJr8J6QLD8YDyCAP4XN5iXvcTRSb42gXUJH",
  "key18": "5fqaXYYsPkAwAE2asA5Nf4PmjwvX5B86aBtAm12g6kHd2yh3fUrSxXJ4VBuc6VHvygRzCN88uLwPvsZacwLywR8T",
  "key19": "54o4vew5MiNm59cDLKwSC65hC6t924snvr1fYrjkRqgEG67u8CpkdoevWyhbM3mTuCXQGgTrTotJNVfDCE8dWqKq",
  "key20": "4YHsFmrLCuJHsCrWb9oDhxUmRL6JoNXeqRFZgTCX7h563Uyi5f1mLwrttks1mUSRH9Tws3bbgiGv18o4hCS6ptBj",
  "key21": "2btsUz5SeQG7RHTpWnHDFzNwWe3FyZuANzMDkA5DcpWT98A3tvMTVqp7LUaxuQju3hGR59E6SMeo9CtbSnkpcDqW",
  "key22": "37SrnWxqYh8DRDp7DNAL52MXuMTSWhTEUGfsAtKE3QBKedvwyRc3CHhcnQhABug1R9Si36Mqn2ac6vcrF7v6PHFe",
  "key23": "2raScSy13yzewLAweg4sDu3Lusq4Fg52grjKscQA3b4bKuFtuwT6kF55HAGMikHVhwVf2gvBsgtdWHJRzRz7wEkb",
  "key24": "4u1agvPvvoaXfFDzLiHAMBpRdi6C156MfWQcirGBCfFhCxvrzA6VUsGbHZJFdFPxVmNRG5qs8LtzJSsUXwz1bKSR",
  "key25": "4qDNE6QykhovydXudaeSKDUBa7oK3J74zFCqpA6tfY2o8hwpWvjyd2RW8YNeDHEcQVtWGUDLuaM1RNxMrUyPe1bH",
  "key26": "5n6qFTTCKxzY2JBxspQTFASEkLbgv8N6GaFYrcKBhtieiq7QpwvQ9NA61n9H9jfVk8EUsmFQhANdX2iWjv4c4xYD",
  "key27": "37WXptqi8FHDmS2tBVDBJVSGhH1hTVq9yhMWLEx8Torafvq9Pgnc6A4WsmQqPk4j4EaAS7i45owK4bBfAJF8JGcr"
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
