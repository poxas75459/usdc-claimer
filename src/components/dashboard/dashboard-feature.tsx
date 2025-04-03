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
    "55uSdEGd4EQjuCM4Q5XeV3MGbW3kok42PjLNmdxpBNR95fwLqWMqPfniEoAJu1CaedykbZaBtX2DLFB9d6sGQUDR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HcG8z741hwkJ2iPCQ8wWjKY5PSHmMdBy3GdKw2cY3GiBhUQmQja59z3xbwcEg4aa2yRYX1T7msMFyKe5erdxTyW",
  "key1": "2s2PL91mnuWS2msJrAa4NAtzQGFDe1G4jqX5MhHS67SbitwcPY9MCLUfzug994dEJiWWDRCo8JEL3BqZQov7GnzG",
  "key2": "SKfvknQDuphxt1ojPG7nQLu6eh6S6XtTKfu5n4b31uStzKFeoz6pUg7bVXvMFs6iCFKnz8GQKYvyVDqGxVXtXST",
  "key3": "SrBVbju3TXZP5w6T15DCxyVut3T4ij5SM2joGT46fCB8Q7e1xhAgh4n81ary3L9oAUrRG416mubWVRwDXrT62Qf",
  "key4": "2e7AocoznzhQzRQt6gy6jMyqmuPVDKATEbXZn9B4J8VB7TEJUNtLh2yTmvq9u7iw7sKajUCKfLYv2DzHoM76uD1V",
  "key5": "2becJdcCZR4uSmdgPEAEu6E35Xa3JKgs7BUxNCzJeXqYQsqh8BYqcHeVVsfdhYuPtKGEkCjG5SWfMUpjHubLLWcH",
  "key6": "5PqeMxq2QTMsF3oGsnTA3PAGv5JZTdUqrPKsvRMSUtVeVKKPVKWGBX8Pi1pCeqXMZUyvcdvWCLXrEQrbqTmTpahP",
  "key7": "62mvPrC2qNEDG1M7YVCqRzPDy1d11V6P2MiSBhc11KJ2szTqjWB8DBm8dGFxWv53QgYBby7vbTW949GTN1rG7aQ",
  "key8": "3vdDCZsiPMTRrB2HpQ6ZivucnD8X43oqX5TXmnCeuqBcHWJ1d3J8kDnpjBFqdjkHwqvuAnTPyoF75gWDHohjTiNt",
  "key9": "3hn8zLovZRgsBZ59PnwMPyJXbskHm1s6rTj126mBXsCmcS4u7ZsvCvYQf1kLWjX3P2wAEuDAngh8h2HyN5ZVDpaa",
  "key10": "6352ti9Zut94kDobcLZBXeMbRxeiahxHSDLgPAJdnk8tHDtxzrNi74PwvooWFbZ6qdimQSTY9PNy5U5SJBvi6FGo",
  "key11": "63SHgN7N13JMwEfQHVCPTFskRssDhoPLHV7Z2Twj4P6FPFLTkmYQfHeqemWnAXh1RxTVkNTeRt2YQfYdV8Rnryff",
  "key12": "3AvoiSR7wYAwk6iBm7NPJybr3taYsS4FbLK4ex8NgwZMuBNsbkciHK3a5TMSRNubVQQ9A9QnbcGzEz2itpq2jEy",
  "key13": "4wzqggwUMGGvoDaxyezg8YSTMctGRjutxDidqus76xrQoZLSLRZRGJQKdu9GYHRPih455X2Du9mG1j2Ds52qcEjy",
  "key14": "2mg3kRQZqfTiPUJdrMEfKHzCeyqcQwZhnVJWA4ft4s5bM33oWaCQ5F9xoTSGb579KsD25YhkHm9CV4HvLJTMBKqm",
  "key15": "546CzKFptRganA1qVP289YjdtyciHVRLBv1qKn4mPrvH9LToovQKeaC1S9oK7BEieAMu1VkSCxU8c9DrSNjd3kXJ",
  "key16": "2M5XoLodxK962yLrddodq949RDzKbau45PopYgpes1YnBnEWB3CVvJUKvUMw62DJZLsLHcCKbTWPPZXG4MfRoxC9",
  "key17": "3cyZEb1m4JiDMe3RWT3v1tEJ3ujNQSCUqkeGcmRGmAXB8S344zd1nYGx8iHMnkh9fYgaFca3QUKNQ2eyfTmuPaM6",
  "key18": "43xNT34eybpBBtKmSGc9csUbm2yRAx2hcxjt6zrB21Z781XbH2PWEtFiTg12VHQHjrUp3PDBpxyWqwrmVt2oHWrS",
  "key19": "319p3YfrJmpazCsCpon4G8sTxW45acTp36JGvjwMK65bJcNUUGvbLSkPYqshZtuKhGim17kFktkgCA9fBqqNrfKb",
  "key20": "66PZLwWMkkXk2f4oMnw34ExC9WYezkC9S3BtBCAcBqoUj8p8peqhEnvaoD3gYsXU3NSJPodrYKDAbQ13WTpniZte",
  "key21": "4CHDLB2v88C4TaE4HFt6PdZECrHDdqUceV3cetsKYEz6NmRZQ7A1e1pobp3qDPwvzVum29jTQyUkBSbRAziY7bJs",
  "key22": "5z9RJucsoPtZLXPUhdhR2f54NW573pypsNDsBFLhWpYxdR9xhrRBAukfXaKKzzzBNoVtssrAHyWxH3osuLaLgtdW",
  "key23": "3rFTE6VYDKpsTgfKUTCHks32zFCSazeuggWh9mkvehW3KcfVPBHLRmekuqSePDHb3cbZmcAskGomi3mK6QBh85EH",
  "key24": "3qwLjqptdEGdpjoryeWqexp1MfBXEP7tScoZU4KUStEgYM1KKDVsUEKgwcotFbUNdCervmKeeTNqqjXsH2oJ1Vmr",
  "key25": "32uyv3a45YwnEoLfUNF2GZDoUngvQpLkSsQR5nsyQzkc4YMATNF5aXNSL94W5rAzvoHxcWoDyEuprSUuEqMayt8t",
  "key26": "4qRkZ9qiygDcostSiNAc4xS3pAkvjwg72twjfjCXPDynbkU6MzDddWioPBNPV6AHjVnM8WsGLw2ViURYjUXfG8hD",
  "key27": "3jcQg7ZH6wH6BDpBZ8wb2VWhodN2zRbEmAdb6FUNWo3ovXmqkhoWcVwNcVjXGqcVYsLLctMjXMgcn1jMAVphDTvC",
  "key28": "35j3RL13PQXJ8J2JUduMq6fJNnMyseqVhyPXXx2xJbj4cyB49eywSwRt1vdPAKuXTDh8SGMEqCgkHCYjQJAsokDH",
  "key29": "4xPj4B8MWhfw15mPtjwbSb92VEgqAtueHC1CxgPGqtBKhgVva8t67ZrbH1fdscD3onGV9gvnQaUb3yQUcrpRDuMq",
  "key30": "4EGWXNb8c67WKDwPanLGi58Wdn6fWtXwdTRoWSaxzoVG7P8SGbtMLQ55GbdreQEdBgknbpGwVV2qPqKFgeupLGw8",
  "key31": "C6JUYryxgfq5hbT75c1tam2PHKh3mdWrVRYUrWR37cpKjr8rNxE9YioJ5Vai3Skd2inJBetSJQudk6N6EPxDkdv",
  "key32": "WbGtJkirjrc1Q5YBLr2y3rbUfNZQETYLskRSbnuqBNRb7u8RSLZeokCwG5XTxGnbe54wjfuu2HwbjNJpoatMR2g",
  "key33": "SnB15sgfbXqEBGq6fPixhCwtBkogPkzXHWGyPmDrVNZj6468doDuh3cugP9FT1eYMaf6ftmrhYwH8zTcebmVtvk",
  "key34": "5S1qN4N8MuWXxVwKfpJnVQLr7tDZ7XtapPUbufqvJQgJCuM91zXCiwA7B1UAztYAGT27JH6XNy4jiThd4xLJknL8"
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
