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
    "3ktd8C32wuVfyYbogfJZZabJj6CVHqE1wGUb9XVKqoi827Ma3ngrpzV95Sy9gxczeRDb9jmSHhXL7vwj5XkBzagf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41kdNtxL4x66UJmoEdYDdSNP9BqNxaDyyxrhHbW3yHj1sCHAfYHGp8Afnrmj49XZKXAVLyFA2o86JWRkTfS4MNFw",
  "key1": "UYJj4qcoDJdTzNsjwgjkw33EkCTUibXEdKRg8un3gG5gCNb9AXNwtFpqk4FzySx1TiMF6gBWbVMt9kKJre27itd",
  "key2": "2aw2UGAhsZ2xRiAq5akqdTzyuzuDFabTWPs226msREZNt2oV3GjGUKfrMRJA2pmN2qSCmNn2aZ9gDvqvb8hU9Mf3",
  "key3": "2vZXe3ZF3S9cWS2q39oTNZssCVzvSj8918Wa4PTbmqwq8toxb8MTc8i34jLFJH64apsETY7KAFbP1pc7iJivZuUz",
  "key4": "3KUFZ7kh1b4h63yDuh9bF4VvGwAMZTYdcYgc26tNrLfh3DqYSFpy2PKZutWNzN7iAQMeyCrWGx1zUZ55pe2nqiav",
  "key5": "3tCEaxVfYheX1bLri2UK5SXBPc8qfodzFwWKrz2QwCiykEsh6bYgVeRDxZYG2RYfj6a98Y9kXyFqSqDZJ3SAt9SX",
  "key6": "2Fm7saFJkLSpEBzste1Wo2w6ALVigruSAFxajSwVfg2Nagcd3e6jZt26qhaaQyavTrVPj1aVN8pKqBT1QfJcchvX",
  "key7": "4UAMnErELX17Ao4qMvRfhPLgDwNZzN7LA8htsoHvscahHeysnXkfeky8S5BHyHwZzp39dHVMQAtgMPGZN3gwS8NR",
  "key8": "596jRXrwPPVdWwJwGUEW9BZupZ5mtNXoxgfVidPkojg8nKhvtKGMd2pgKCSsX4h8HHX9ufw8yispEH2Pqsxizo8y",
  "key9": "3WS8a7358GKuDkeTBi6cWU77of344Ahdv6Pdh6sfXD3a1KU2DY3v6dB8DWiZWpyVqYtGa29eZUn5pnVZQ1YD3E1u",
  "key10": "4Ry5h1w5fFuV9go1P7WAFveP5wMtZen3Lui5UkMxkrHZgisLjKAGQJ6GaZqLCFAKZYNyQcHGBkcYL9njjYYyJ4CJ",
  "key11": "3eELsRyALjaqGXVqewLjDzVQ4vc9cNycutcCdBSwXq5o6f32Edx6qqFSfuj3GAqHaxCW8LCqeV3bdf6ePXEnGPmT",
  "key12": "XBemntWoPkk5ocxJHs2HjFfJyidCzxPiKmz5ozTqHfwZPDxu4UCoragsyY4fwCe5tk74jFsYiw2pERm6D9rJ1Ae",
  "key13": "4qc8HzdpSAia7QsrJStDWTgZ1EQiB4R8RJn22Yza6F6kdZXqd2wNPHvMUEV6NQkPShns2G3sDXw8oWJp2pBZ88Ym",
  "key14": "2rNz4p7sTiVusMBBCPxqievHhrWvHBPe3pyrEjFX5TgZuhgFjmDfyUR8L7z2pvPSXEG2WceG1kGYTADcfEmwVT6",
  "key15": "2shxLbNmaWHsYAHLrdB7W9yJujHpAK5n6c8LWr5Jp7ef9jm5eFwXgLWG3v3EvptKUDXU9m9xsg5Hsuc5sSGJXTds",
  "key16": "2zpAKZST31oTHafSta8TKXohRLMwBVFPkGLrRj2o2CMNfErzEtGDg8L5gbGrqS6VNancixnwmHuBBWdfh7hbji7b",
  "key17": "5FnPvEgBMSuf7DAxnM5vqQ2AZ9fDpo7x6DncocFmmV6YFHdBVHaBLYj4iuDN8dvUV53ydkeVu5KvWJrLW8KfRS3v",
  "key18": "2HErL9gA6AcJtHDMaKojzhPGd28B3w5dZwY4bqdf4DUBSzxQQsy7tzJoFEZa4rYeWgmThw1msnhGCys9WtxfamjJ",
  "key19": "5NtjNKtkXjhdyJtLuaEjSwNbjWrcgLwpQt6ZVrKtCHMvdMAi6xgw4n9ou3db9dE7ds48wpf9AvPE82L7X1zA2BGc",
  "key20": "5aorUSybCyT47M8XzQ9neX6SkbUWFNqRtVgkGU6ReqfQeiKpmQSGe24CLNhMrPbhLQ4yBdUjSCN7nh1iZjuaVqmC",
  "key21": "32L1MVRyyHHpG6FFnwbq7ESCY5CUgQEY61MsqxvZzCWgkWwKok4kW1iTM15ZXXWyiEZsjrxLiPxULtHqrfxuH97C",
  "key22": "4TXP5qAwqES6emmtLrQcQeHW6qAZri9MCNqEEHeVRzGrosYGArXMrXd9BC5pWduq8zZbDp8FhqVujpNHMEod8Saw",
  "key23": "56TLtS5MwUtuUTxKjKipWzybh1m5f4pKngp8639avWVzqRJH3AXBuRRqWdW2rb6iKx3kokMaQuuvbX3g3jrVr6YH",
  "key24": "32HXt4nSUDjy9CwwxhbEW58UivCZZPZnm7i8cqKu1udep8byRhRied4aSAjSjzMyeS5mPNQsCiEXZRFTCJiopJag",
  "key25": "67R2sBGHRMJ5PScGjNaFvtBSwjhmcmzwrJAR3DXoKCiGHqDVUeKPrHYDYbhpoGYBUG7pvkA3JFzZigMk1xnaaUUq",
  "key26": "344wPEVG1LJrBCv9YkoPTmdL5oXZUKFgxqFQVhwBHkr1NSaqSDaABktXTkc1Q9cRpSbCHM5giRPSq2JGozy7Yvjt",
  "key27": "4wCM7L11fKkVRZBDHg7tyvzUZqyRbnMNGERrgKSgtverKwiWao1jGWfhWf5JVseU9DwPmRTcS8ZNgGmxWms9w5Xt",
  "key28": "bPVgAadzbhh7w3dLdygJac9YinFjji7iJpTSbjvUTfnbrR5aW1zP9PWDUc5tLc2tyCrFgRt2iN3NWfjdGF7MfNL"
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
