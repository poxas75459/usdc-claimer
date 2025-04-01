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
    "4vfYtptJuYN71ZHwHR4DfaqiU8wc3hdbcB7SXkncRAs728jUjc2oLiUyjn9ED9SThSwTfNzzQtXVoPHDEivFkx6z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kvpsFNpUZuRnnJ4NAVfUQuqVrDHVHEuJV7wceJqyPZ2JHKdi6RudAbtrTNoUPWeBhXx5MGocUEHWRLctE5UbLSu",
  "key1": "5Xdt1bT5KxK8yBo6b4Z8kpdkCWqSx3jQB9rgcU3itw4yKY6VVZYf1QMwaLxALKadijvoMMffHugitka9Rouugf1T",
  "key2": "4GCpHepN5vWQBBjavs8Xtdi4zcswJMSA3x4yQ1rpyB1sJNxsWNrCQvVpaCVL2TcNPqBPVVyxxSfypbBW63oXA5HS",
  "key3": "386esmP2Wh66MGixo7nM8DjedbkSP9ft1TLCNxhAzX2K4yRxnaZrhfEZA6E6VoFbaWeECx9fjFazMuYJF1qSADuJ",
  "key4": "5dMycWmnQyTAzWzW9FAftaiy1zAWqsmUWW4J4f3FzytnPpMNyXixn59WvuMqvMUdpv4EwpRHM2mNrx9tDvg87Vct",
  "key5": "2ioDHjX9LCV53qpvgrtwfPT2SFhuGvQA6frnBXgQ9m5THM5pwBMvH9bN5Mc3ZqhbP1rTVFDeM1KM2w9CWodmJ9BX",
  "key6": "wArnYSg6SiNx7gKXUJbzH4wiW5pTfh7QeVvdj8wv4jRjGdmzFRbBu6qr5jKCoPd6xyEUBmJYDJWaQyLYTSYSPYS",
  "key7": "2Fc3ppXqp1xRyLz1k5ji9oCUSDZ74SnXMZFufRyWdgy3W9K8EtcqTRsqTNGgVZvEy3cynR65scbHyfnxpWQdRBwK",
  "key8": "4vURLkRmvc8SisdSuQpGo6YVpp5E78WH4U66BDw6JBBiTT34A43WWLLyWPQq4qcoSz1v4Kz3JLX5Gzihv6vRrfAP",
  "key9": "4FKN4R1rkpFs2w8h9TRZKnxzNHDgSfrzg1sYNmKWRkG5DqZYGcc1mwpPMnMR8qQovYQBA4twyawVKQwTJVgqBnUp",
  "key10": "3diagV2EpbFFbvTACo1eTSoP1WvZQr1JoQuuGYrvRGoaXqfsphASxJFu1dR91fPNuNe7ZjwzhezbaDf9oLba99AR",
  "key11": "71c2SRU7KrjfcujurX7vpkZ1VxnzGUvdp5drLSnpCu13LeTFYsfJiajAPYeZ7r7kDTxyPaQr9yYqytDxuDXY5ow",
  "key12": "iCfWoi2ELYU8t7B4SaE7MYnJthYCnKQzPohTDrm6gPkaGih4y6Qsq7v4YJF6C2XZfC4gXDMADHe88w6P4RABv6p",
  "key13": "oZux32cE6d5YuGRWXGVAyx8YtmpZyFoBp1YZr4biK1dEKVcs4dY7iNYUzhWzb4CmHvy8N4hhhCrRSDiJHe9k3tU",
  "key14": "39nxruMVpyFqdhSgRuVCLqJ2ssT9NHx4UgGeLiviStWKQuZhjm9iK8hVFksY5zXksEPgE1sZaR22XQoWrT5iTNFb",
  "key15": "xT1Weg1N2gR9BR85FKuGYxYYZdh4XaNnRBHewihBdxuKs4s7dWL7qNYyCmF585aod5udKd951UGGZ2kyouJfZ1L",
  "key16": "m7yJkUGdPyGfJrBknAn7Vx8eou5SQak7ZmvPg3MBst9uVUCFJTox13usxNMe2Q4WpaKUkvCiEjms1YFcYzGEKLA",
  "key17": "5web9KUD5JZ9XVng1AZGStZ4z4ACGJQNVPDfa5mek5t1XVHFopn9vrivwxF36fnPnMmAdJSY8eywU7GRrRLiCuLc",
  "key18": "Ppsh2FwV44qHXkEb73i5gqvdc9Nop3gRfJgU44544Xz5cz1rj11D4RkTUA88cNWoM6PJ8CseM3yL9TVcVNfkEQh",
  "key19": "KReNiph74dVTJc1RtMwWxBZ1S3AARiKs6uexoaRqwGhK1KQyVuqozDRAjUsHs8kVqWYGQVqHtnokevnPdDmcoWU",
  "key20": "GCqvtHURxDFKRbMeCMCDEqmhM4Q4FvhSrroKfLDCPqwV8YvAm7FZ6ZSwsF2r1ij64713YnkihnVXtZZN6JecHAN",
  "key21": "67SWKfE3MEFkLnob6Vcc6gjraFZ2GkPiFSqMyn7XsmGUshBwGEeVizxyoBHDFMzajkH3JHvHX7ttGfHgPDi1qQm",
  "key22": "4CaSm32JyxXgJ9zPXfR8sCDZZaWkJLYxwqYpBAadW6rykZ6wTYCRccUtoS6ggKqG62FypUMxmvP2ALXyrPmwPh7T",
  "key23": "4arzTsPDKQM7aXyxS8rrFBsTP1agKDtPG3x2wzfwyVRsjBGAgw3CkPLamouA1c6kaKTntSNzhpuVuDN2xKXqk1eA",
  "key24": "54sFtx3xTBVG7fcKRFL3udcUzpUUEhETUyrsGyDdjsnENfK52wnxWWXbkp6WhTSH8mpTw2AVz8VBdjcPZXxK59xU",
  "key25": "2weeJpNQ7jVbSmNTXV9YXwqTsgGyi5TjjZngBRPYE59bLe42yxzYmGqwwHkvMZn5cCbzjoyapYuamMp8M5bSEqu6"
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
