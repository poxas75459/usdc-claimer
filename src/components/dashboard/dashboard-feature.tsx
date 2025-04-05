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
    "4d1mqMemYf59Ju7Gc8kWMoHemwuDpe8bAAHSXHsGD12WgDgFQU6DpBkU5dmwWXrm2v5N5QEXrciNxXXHTqcicYgj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FNwGNG5VM7aEuA8DNjMSa6vwUGLdwCnFHbWXN8h38qudJypQDh7dwzZBNLEWFkXCPPFu3arnnZ3puFNXUCv1gbL",
  "key1": "3W7pi2v5jFzvbBKiZj2YhjTJMja72X1SGHHqsTifucF5DSh3vmhzNMvy7BYd72WuL9FFup6m24CP8iPdUWUKV7L4",
  "key2": "nQyizA1hyqDDexyJigYV5rCVEhKcCHWKKas77siNu4og4sA6ZTEJNeLw94xpYc8aTWewiq1o4vvnduJH7ipahDc",
  "key3": "2ahTvSFduZUPF7kGd8PXAM1BLeohTBnzKGa8E4VTDm4df2NNfBNANGSLEsCc84PakwLytAcJZPmpKQVgbuxNMs44",
  "key4": "2vtbz6z3Gfc5qT9GZmpdJTfN2m8HHXYEneS41NPHsAc9hx1knCfcR1L6TiBNwav4ELUEeu98atQbvA2bEToUGbwu",
  "key5": "55TkVGmbv9CSWQgNHhyJdBjzV7JpNEdL8NL3h5HToHyfY8rPDapJrdYWytBBzwRgjbDEZAgUBPxWjm1nYjC6HxvK",
  "key6": "MRpFitLK1TiG6SfvTU1LTXi8ppNn9o1k3s5bpiqwmsTvFx7WYqioJKVReZ6gobUi1U1UYMpRJTMdC3RffeVkS5C",
  "key7": "ccRRz9jpbVaCc1UMN9X6Xf4gmGFwnSsHzECTErny9je3TZ45vY6qta258yoiM3K6ADZeWoACAgW3SqSyA9FK6FU",
  "key8": "5m1jBXuR6GCaTVumSMpJ9wXaBxVUeviq2fMn1TqGmrePM35WP6bDgdPnR95gNw8LmGndd6vUaug4nJidECiQpig7",
  "key9": "4feGYgQujT3b6fyEASFvYuVoxS5EnfVYEtHzaWQqZAPGGHZ6Pd28nHUCHCM6XiMVy3d4j82NN8yGfZarBwSKc8Rg",
  "key10": "5owNgoq5GD6gZtr5oLt9FuFZYjinwDwi5GWcsGYcYoC2QfDwWoZw5c1zYtyLaaFTnTp8BnR8cGRLy5C6pePZpdBQ",
  "key11": "19E636uH6b78s49thnoqaa85hQEPGc7W4wSNVqsDDpxZEeM9zhE1qLPrTAAi1v7aEeDzutFPdXpoELkR9HGYZYZ",
  "key12": "CtXMTdqXqUxn42Lanh24TkJfezNdHW3LiorPAVCbKnhesmjqc9r8nZyk9UujLphngFVWfACv7MdtBb4SZwWaJ37",
  "key13": "56HLooJHFt2mGANFqSnwTJzJGn2WDwj9e89pMyM7NCdCRG9XvGuYPAujxYwRr7BEPTUWXbefPMPxgbgJRpFVX7Hu",
  "key14": "59rGjaAb4qbDg1r2p4sqzpui2g4CfWWsKiNV7baqr6uCAo3AQuQ5yZdsabbNnrMGgNJAvXnfvShqc1xJmdxze1LW",
  "key15": "3ETY5CTja5xt7PV4PDXNyoc9x2QZoVQHxW3PKJn5dBLGHGZ93V91UoXgBkoKHumiSxiL31rauMtkbyiPYVpdJjfd",
  "key16": "5WD7SxjTh1cBPduG3Sy115AiwMHJMXpTvk8hc8DDg4o3X5xpQwe9PGVz8JdtRpwD2qvscjvcxtngTgWbxiqDK96f",
  "key17": "NEBzcTnFYqhmdnWKh1yq7KPETL7z6s9tqYxKYKUPGdGF9aLytoJkfnF8Tw15JEGsveUoKQRiWQ6jL43CL7V45nn",
  "key18": "tBbQRyQJKBUCQtkNVeLavEpQ2aTQ9E8ideu4PWJKGJuEB7aDVE1Tqjb1m5FpuLmdQWUmbxiU2otPV1budBC2uop",
  "key19": "443ew36w5Ya6GoG5hCtXvs3azfHjzq2CFCFrnM4MxkYodnzvVNQ43eJuUXL1sUU1iffmvm75utzSCcCfhL4mph9j",
  "key20": "cGUvxsxHTzxftM8n7StKTNPzCDAesxCVBLwWyWrSHV89UdSqRxqKXnw2ahrGXmgzXxFBXjf9QzZdNoeK71Zgssx",
  "key21": "2DRK9yFfqeZNKVXniXZoiKq3KyiG3HA5n2VRHyU46wKDsC1nFnnbkteXGspVJierQG9CbmbPRPiXzpkPTEiThKtP",
  "key22": "28wG1jW5wdctU83kpA6VBQNKYmrJQjLDpBAHhB63y1RR1TKEVTfhvDQfXuMC4GPv9FDB8xJnNyuFhr2g2CeAW9PE",
  "key23": "qwuB6BouDaigFYLFsQXM8uRJL6DbstPbqm6YC4FCxrqRUzaBCAY4pYsfbezhUtqcvp14NrR1kASVunpkC7BnKxJ",
  "key24": "3mcrUiEbRSWiciMpGwxHyA8N77yLiASbs7FWsc8jxCGtczUkLQ4U8YXMV9Ub7Ca587Zq24gbc92biz1dJvBk7UUv",
  "key25": "4XoQzj3VR4M2Ctw2tB1fKoZ8fmgc3vh9xHU6t1jPis1WxCXWTujWUeFV2q3upR6gotAjmXK9habtbzWEETqCCsLM",
  "key26": "4PYbGVJm1BD9VkMo3WCwYdzaAzFfAuWQGpjLeonMgZCCAMeFp58KiNRB3vA2WUCQX2RUUNLohnHpdtnRnqX5szUM",
  "key27": "5g7v8QyFAkha7WMPHGhmqTJxR17SXQvRHh11euN1rTNbEszx18HiKJoP9MixGh5cMQnQy1PWvDCRBNrEMDKiPoeT",
  "key28": "34vwn2ELWuPKri4yrnWpNqpd82DVacrs7asPAakHdsrN45otoAE5dYaMhbnXm2cu5dT5imJ8Roccc5GkakBMcrPu",
  "key29": "5ZPXbXVnzjjSdd31TUxhH7Sz2GBrTQ1e4uwz3yNoFCNJTx6ytKosKFpGHThMcYv19fh82omLyFzfTNrWXDBoCh5x",
  "key30": "5V8Jqhjmd5RCfPtESubnQXywY3kiHkXLmmpzE8yGGyq48u6eeRUEiVFXhJcLUNTQg5Pzc33JcjyxSYXn3rimQeVc",
  "key31": "4pJbBhPVfHZJbWuq1LfPEDPwmvzFCkYJ1CEFaSaGjpSCrKkX7yoQRFyiQEh55BwjhfygSNj4M7PF6Q3KTQeXnMAP",
  "key32": "2TobfgVHtV8NmCj5X7JBSXayJzoWXg5PtaLdm16xLVDxtZym8igQyYPBDZW1p8G3A83Bbc1sbUmEreGAFcQQWWYd",
  "key33": "WyTMAoQNYvLxivFgRnkdsDhBYw9oU8nBcnan2gPansw1QPoKfC8rVeEGhG9RUB4NxXkbvjtovvQf3J3p7jhBU2J",
  "key34": "3Li58VaSvBC35QJdWxd52dgcmJEkJAVGTszdMqnpvucaMcpw2bVDpDgP23fXyMQXmzpaLBvux3ZhTsSZjxotS7ae",
  "key35": "rXkACS3mmtrX7ZcqPzWM9cGQwRqzGPh1hHSMhE3V5Mvh6WAdS7YALEj7ZpNxuZzJ7g9ajrnm6CLbaY7baD2XimT"
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
