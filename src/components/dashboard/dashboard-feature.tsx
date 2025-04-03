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
    "3HJXh7VXTP85Pc5sz6SmF3UVcPKotnNnXAjw71TqUsjs7svEfh2bgcU7D2b4act63hQYEJQXHX33MWD8sLfUq5wW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53hGdfCksW2d7gexngZpmEY5ymS4p7eXVsMo7ZundgvdUFigSdgFc9q76RoXEGhaNodk3VADPYojxm6Wu7FzqXgw",
  "key1": "5tRUbAf9mAhBeUzoT4KzAE9HTaEwrMTXiutGCbqVfCzYdpR9zRR6daGWMXNpSRALFipmpt7WNXuXDiXoz2ZiZvei",
  "key2": "3QSS5bxRnWGnRJ1e7mprUDjzJLQoRM6CnUrQRVSHgtHw8iHkCbNnFp1iqAGoF888vLuQPCMGM8asMQFUN1YSSRXc",
  "key3": "uHBTB7eKimyez4wjnTuHRUQJJrz7aRfdVVZqVRyb1xqhfHF9v9NdyLkF7rM1Frv8T7zcGYn9dF1fFVwv9qfp9Gp",
  "key4": "3HdQ7FWxR72qGo2MA5FHvBYNHAEgfASwjPtKqdrZCnhoNNNJxusubMTqamGXhLZPAa5xZm7EgxHVov9SpTrsJett",
  "key5": "4NFK1oo3WdCXxSHrYcy6rC7sefGg93wHZqdLht1RaaWoifG3YrLzSB3Gao2pzFzbTzLWHkr3nxbQrSadBSAxCoXK",
  "key6": "4gcDM3mpp6hr1i87tKdUrTugZprowTPG9KQm3VYTkaReNKgQ73WSjfdCTZbPUnSNBQiZDTmtzyPxGXtKUMkJmAki",
  "key7": "5eJZkocT7PnXNPpLxnz4qzxHDruAvpnKssQ7w3QqBDvzJSZKAuKeTLncZGyq4AYV8CaVUnovXecECiJGGMgEFMbh",
  "key8": "5iKQoUCECKq2SYmHezH6hiYBqF7paJLpDPCYAUU5NZatQFzWFFYWGGV6enisBuyWGFVm2aTDjbdr9ht3XTEZAomW",
  "key9": "ScBCJ1kuErrHiRDDj3SFRinyTRd5BSQdd9pErfx4CcJ8UKXLDynWxbazb6m1P2rKkTFNQsh49JJHq7qRv8F7Eik",
  "key10": "4rHDRBFb9qZBGUSoYeFFHXpto4pStxAXFB4jrwbr62oNTavrNFSqDmtTSSgpDrVbXMiRyfofPeaEa1bfhRRJHGog",
  "key11": "4QeXVhstQ1vFkzABM1JVKEDKquMZni7ULKHzofncqxp9215LahELNPgV7dzBY2jfzua8sWSNkba4MhhXBcZwwCQM",
  "key12": "3e99WvSXT8SrREG38QnALb22sQetDXQX1wDGLLPabmnX43LJF7xReLioVkeQwQuY5QN8iMbop8QywFPEJbFo2Ezd",
  "key13": "3L1hSHtvSRfYx2vVmvVwWxmSSFDwUYXhjkjLXg3yMh7hHWEYNeeCJrDB9tdc5zqG4qUfJxChPaTQJzGuvzWixk8r",
  "key14": "25gVoP4F91NHvwpAfRAP8E9nszxBMHww4ENimvw88AfRyTWqCGpPFvLtVoUfKxv4cYHomuQzfPSnssqyrMEkJom3",
  "key15": "4CAKRXmbuf8Qvpa3hYe6DuSuxFze6heeCmweCvvTJBhJ5cJ62SeXZPRohT5YzRGJHpeHwhwP9NC4yKTesicGwu6W",
  "key16": "2fk2w2JMfWoSqnVrHMC948Agv6XrvhXC6kgtoWVfBCtLNgk2tsZ9jYjp3ZCLyaPjFmTBV8mKeH9n1jSgKfTg7E4S",
  "key17": "2aiMkf9w9V9A1cb25DPjwDRLMJPLSXKeboG26uYjN6UN2S2nZxNkAp6MmUWq62AZPJcqsZ2DAyr4xfjcKBWSudTc",
  "key18": "4zSLMzvZPcDi6KM6GWvDjZoE67iy2obsGQgrdHkNv9bJ2bnncLyN95yVDCr5V7zTm5Y6u5RxoV83KnrqoKeyzrqt",
  "key19": "2kQaKaF3RCQej3XVtG8DEaXiCMadqTJzpCBtqY5DZSaDPVdzHEM1qjNoL75bKxA12wGdEhpbCJEVDEudDarXGJX1",
  "key20": "2cGgGFTK3aYDnGqSfHEny9LF3HPvvVHUXkSVtBgqd3xZJihTUerskyKbRHJHu6V7HcDBXEZwzNaDGJZSUa8oLKDk",
  "key21": "9aBu1bFNUigm5RQ1m47h8XfAKnhB27zQMeVoXB1g7qf9f33cmutzK9tcLSezAoptbwM8AFKkFD7hT64xcrRyhw3",
  "key22": "k8NwwU98jqt4twQa3TXgxk77nK31zJZkT5p8CLTGAHs1i2WBb6b8nDrcUToSPkYxN527WkcGQ8Cd1qJuPuA3XeX",
  "key23": "3teVpVgpoDePHZ3hWduvQ4U9nrpdZWXptGQLPkkrhJk27ZxZYpJLyPqfSuw4SzLBow8CQh4Hko4zSEpgfm2a7t2d",
  "key24": "3YxfRZN4deifNVXPZJ2BuiP7Aj9CxG2Pim4QsmxGaaE6JusnmtkPpLErMf5bFvfreaEt1B1eERmX5XtEoFvxqFZr",
  "key25": "3b2PHmUMy3bCQYm4nwg97PEwRVGKAbQcNdBBP64iCcsPwJ6RD2vt7RuhFCTBcdxfbxo3F9j78FYuXC9CZWQsMSu4",
  "key26": "4s2NBeG2UYU9maAy87L8sbj8jp8bJGdX1f2yFccGHiatETEjqwsoqohtyPYeiJtX7RTcQUrH9Z3RTYKqWAERFtn6",
  "key27": "5BoPjTknPdaG2rbTcDN4MARVAiy8Fj2j1vW3LEgLSN9Ngs1LSDRj37BsQQPgXtnrxeNanhhUY5QH4cigCiZkvuUn"
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
