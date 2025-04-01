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
    "5xCXes12mKPxFvSYA1E8Hya4DmFtTAxgixWFyJ5bXvCRZ7eyfyBHSJeUfNpAATcGuWckAv2zmKdwxcD1rzpwiAQS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dKH2pYciynHP2PsXqrhtfCMvFqs7dbnKJqepVoQDvgoc7nX5xQamzCHx3tCWA1sYFy7ffbHEjYnUVLdVo8N1hkq",
  "key1": "2mhwmqDZLogMPJb3CcbTeXK69ULsck37niDkweMXnFTnrYa8eKtK8GXsTiLwHEiChL8PC7Sd2AcGdjd37LWPh1cE",
  "key2": "M5dJrrzR4r9Gf11NCrUCn8dReDRk3tRNdjHPKy8U8B7DrRwoxDTyCdyCQLsuDfmWXQhv15CrNW1ki9JxiDSAV7n",
  "key3": "qgVgDeZgAtok6osuagxapD99eZemYmN4BFLxfhUL2kUnqijvbUbrYhYodm2zWhrXjGQ6XU1CwEHsaREoTN7yF1u",
  "key4": "2jSUzN5gxBSn7vd54q511P4u1qtBxdre8sb921gDPTj4rfqhrQaoh67U3SNF1DAiwWVj6fmgmp1adcjUTKGJbz25",
  "key5": "5oSDc7AVbGvHZAMoa5iUPzZaYXrGDGmQtpK8WMDkoV8HPin1wd7aLcq66bjkhZNJmKap1VTDE2K932tLKUAXoCme",
  "key6": "3ybjcvmASAhcbdpAwmCZJiVUvQUotk37h5DFRy19BukXhvrvFcS3njtAsA5PJ387TiokaWhvFdFXx23F2DYMh1GZ",
  "key7": "2qzH3KtUJfkcfMvqHLfeg4ZXdSLNVkdFPKFCWxg1eeMCdi3uDhDhWYLXgWKoauA98ovnYno7w82ggbBD88D9j8ga",
  "key8": "3z6fyNdhKwQxSe6DeaGdMojbKs52XGnhaFG8t4oD6gSQQcAGjtCF7ypykv8yzgLTNtd5WEaSrhQQbzcja3LLxPyf",
  "key9": "5HuYRMYaaynMgVDm2c7tS4XcjUFy1Y6GbobRviLwoQSmGvfe6WhbiiKTpKifKFfhGCZv7ArfwVsQmBdHNrvZcPmm",
  "key10": "5n92mHjjyy4o9Mzo3eXWjaFnTu5RZUdgPFdjGwAXuXa2XmekYwv6pH5Crg7zAm1EgKWrWwwaecgHNNPZRh65xRT6",
  "key11": "ZbDpzofZi7XBzfitF9pmbL8bRr7rYURJP3gSL3okZ5ngpn5qn1E4ejX2kuJW2zfsW2UaRUd6L6JtH4NhZsAHFah",
  "key12": "4Mu6T8U5KRaoGRC25abx4P2P8dTMovNTES725ydKM3UFZErr6gpu6bq1WMeNp4Ef3b2SvRiWWmKh6hEQfDmftpaC",
  "key13": "3v5J8vwarEnDFkCC3KJSSx19fWFnTCCWLtSGryhBo8QMDG4SVxJdt2SnPRXfbfo2ELwkHEXGnacdihYtZv17925r",
  "key14": "5h4tqsDQByFdZw3ULFAutfkBkiudjMaTbNe9SXdPevFTejgkzwD1aoTMLz9RUU18fHcw8fsEnDk8BPMmQChjmWEC",
  "key15": "5Xye5qEJDA8QKRYs3dKWu8uKiMSZrbYmfJM57F4KRzQRVxpFEETaVwSTwygQd3vFg6xtvDHCJy6twjpRPNknjF3z",
  "key16": "sd188ryqj6sMK1oRwUqTFSjcPQC8cdGLcsLBKUJPsPCVb6mf4nrZZAuy7WSRAfPjEYXcrmudiLfWKMcUyUcb3o3",
  "key17": "4xx1boUMCBWzv39FvDE5snsT4zDDchfDZniUPwtyhyLJ8jWUg2fPVcDM7Gq5Mz3cH5CXiXhc4tw75xnQtPCh9yF8",
  "key18": "h35dRqCELbdtXYKbu9KGFcrEbRuayhyZCyXDf6mdE4DoJP9RdwmGDGd5wfE5LAkDcFPti9M8LBmEgSyPjznQgeJ",
  "key19": "2P14zFybzuDvKYLpGiaeH5fkPxa1nw2kavLxaD1qDc1m4uHwxmvaV13XBxZnxZ1NMVXNboWywnK1QfmXVCnBt4aH",
  "key20": "2QqSa7Sda5gMKscY7bkw9ktFe7VKXHiLHDsYeoUbzrKufNUPrgK7Vq3o4qRDFtJwB1a8cmFUPvABh6R6KFHtfGMp",
  "key21": "2Ss7NTcMdfh7Yf91fCApmvr386AWqCJ84aDxCVFcsQjKCRN1b3oKKx5fJ8gNEL6wNu5JKpU6VV6Ys9NNsqD6UY4a",
  "key22": "3nxEU2DtLaqCBidNvYJULoLPVEWgsgmLxBo9UjMhvpnqPnLEZDNRNSWE569ma3nXbB1PP9pkQvgMAEbqmG1RQTqC",
  "key23": "4Hbqr9khmnHsLekzjQgoUpEdmR286fvXKrz5cGpqCXtgRDYPy68VEafUhR7jKVAYW2fAoMSVEA6Fwu9QYrDnBGtD",
  "key24": "5NqnzqDMFgMUFDGjsCGZNcguf1ckPSV4oq1CvB9nNMyBbweoG8ExPFR2sZzjWUUTDCC9mqNnN974SpsF3gxw4212"
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
