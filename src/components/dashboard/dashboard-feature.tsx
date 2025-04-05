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
    "57fv4jE6JRHAM5cacqft5gWXonFpADHHrVL1gJX3WSTQtn6a7wRnv72pfygSpqwZdfHGSeQuWRVVQgVxy5S6JbYQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CW4G35k7F9pgx42YTb89daAkotVC3cxzhNzHzURekrbxvTLrb1LsckomBFBdqLyG6aPN2jPAxn8wHCFSbQpLkE5",
  "key1": "4ZvNPRXEAnujkTSQPQFkKUQeLT3jNcWdcjxmk9YGz3WwJ9antM1p4kSjDy9XW2vNLDjLFDSkdN96mjpSSm9bAHG9",
  "key2": "4XrZmv24dvZsLCNN9ipDHtxawpgBAhdAqtxVedqPCMCd39WykLKuUAFz3pXcjipcmjt9cV2JXZkuf8zoWXwaJSDb",
  "key3": "4TUPWUaktNtoZSC3gqY1TE5Kh6jiuLsgrXEfawQSVAgzStTXBCSpyNRiDsucLhBZwAKe1JXuXbPsszcHVc9A4Nk8",
  "key4": "4uPgoM8u9hECNYCXKnhwxmEXVAFe9pryEvM2MteyCCWzU51nx7e9zptNhiv9e7n7ej1CZpBs4peZThE6tTAd1MGg",
  "key5": "3boPdCnX3QUHYpi3LdnKDVmZGe6Hz8xQLPMBdYSxkQoG32yXmKGXHVbMQQ438n9xNnWNtpJithhRTKrQGutjLYNT",
  "key6": "3aYeyGSVRS2E8axpdvxdxoZQMmJxWxZMKhLxc6TGCdvcFGpqTUTJZStkmZ7wok2oU7p6WexTKDdBHCaLLfUT6aLB",
  "key7": "4hkdYNJkRDinerRWQvM9dAMVM2CX6BHgkzrqyj5qhPR69sgGdQ96wgVe3rc9N4mcbwScazty1b5wukDjxoYvPaBs",
  "key8": "5fJ3FEweHgfGgTrXsvqVPuTkRvLN91if3Zacx8ajkccf77zrsKcMEiAfXtPRezwm5gGGkJcXQHSdUTK4szGKWktC",
  "key9": "azF4e57i6Wjtgj7AvRJjosXJsb3FAsg9xFHQMqPG5AgYj8KoXby9StYjPASvaqsd32kLNdt8xhQagQ7is4xBM9e",
  "key10": "2t9SVdnVT23UkewTzK4nAE84LicGaSh1b1sHBDYeuYtsUyj4nACvq9ksFqzU9j2j6pyKumdFvUD4EMXWh25SV2ut",
  "key11": "G2nY9uxHKkAot2bR3BbzrePGPuiRChfFsToHpDTn7y6rFiWBuFZuH93fPvFy4QHeBis8eSZBV7NkZFxJAExgNsR",
  "key12": "2LqkAGQwzCi3D5P42VX9cJdSYbsTX2EZRERJf22mdCC1EFGEgtJTJL1ySHXLAWrmSBvMVddT1YWtbgLEv4g7gDkX",
  "key13": "2UpR5vAmxPxYSpey2mgU5jFewyZemacQEhF2T119JmSxe9zv3UJ9jf5F2CnKzx9TvgH5ehTBm65YCXtH67ENFb9L",
  "key14": "2ds1YT44tUDVKFYDJ3bddBJgSSTq55bapXK7PrYGtFhvvLG9qGSXVMRJrK9gMGLUHUDA8pZi4FNxPgJ9pSqeyymW",
  "key15": "4Vt9hnoBhJfqRTH6sfN1YoNUw9bxGJCMqYrzP1ZUtQ8PqVHT9kz1mWzAR7VHLJdfux42uiKU61xT6bmK3X3gnCN",
  "key16": "3WHqyxby8Q7ZQAVELTMqVYsuKc9AZgV8uZ7EbTjoWRmzv9LDZsAo1HChjN6mFXhyahx9QiDVDy9g2xUxt9B1wqkv",
  "key17": "23mdmmH8knMvwEkesV3zxLyUbuLTZKvBb3aa5Bco9cPoXWsFkaXXpmdAGdmeuaxW1h4o1Y8ZBviN1uspF5hupBdR",
  "key18": "5ydf9TQD24jawTyQ7sCyFa54UHZycqmWyGZoTstRrGtsskB95ovX522ocWWz4NXDbNMwyS5cxAwfhn83TXYdsYgP",
  "key19": "2KbDCfe2BR7GYeHoAYdH4YsT6UrhzWYfqHNjj1sHA7oquSMtw2YpSYYgiMgRSyvx4ZhkVNKJkVfQqhuD3224etAo",
  "key20": "5NWfvfyravjRzxTopFQgZbxt8LRfeqv6safurQ3XRqoZhEXW83RCPNrGLJa5oUMXJmbDouLy8a9MDSSjTXa9waPf",
  "key21": "EPqUc2f8wUCSYXsa6EA67jfJpaGFsb2pvuunMPxXxnLQ3xETYEM9HcXUmt16FS4QUuTnGMthpg3pf6iNdsSfG7S",
  "key22": "3YUF1HmQmaHyUtMatX5LSceJtZiZzTQFpJQvik7junNjfZEVYNQDydkvDccvUN2eARxRG2YmEfAJyyfunTnyHFtg",
  "key23": "2G1c1UvkoV7qycsox1Rsw6V18AiwiV2pqF2WcngZf9TDJsFu4cpUL9UFz6EFoTTSq34EV8btbuDUy9JrwEVyWm3L",
  "key24": "gtNS5k3v6Hyqqwfv11w4G9dkfxQ5CHLgWr8yqRkwz5kNAM788QCiyAppHiBrzpXkSrcrH1rvbYggd1pa4YN2NDU",
  "key25": "FPoE3PnYektk5jNgGFijqbrGVYvSTSAa76buAySc4hQP85sH7x8t8xyMkiotcmdHZK6hniumU2PdqqQKT6vpWie",
  "key26": "26QN16x2wEiEvTFTJiyPRM6GnxcBtRCDSZkMAR5Vbo1pGVnwgfsjjSBb5MPpgHjADQepE9GVW7YbUAWRfPUYEkA9",
  "key27": "3sEMPXDerUDzd8cfn1k6WGGYUVVhUyxvigHB7uppe2ZyCvLcxsLtpJjtvJXMHPeCasCANJhNXS9ZyETmDzfJfFkh",
  "key28": "5buFiWNu2q4Uw4SqzsY2iknNvnjmXCTYsYqPyErwdga4JBntzrH1KWoDL6BLt2vEopw6g1FfixqYvrJK2pJXEcBp",
  "key29": "4MSoncXZF4cGS1VzBHmJecRYRQ9XWsngGwN3dadXEg1HQbHjsyKq96SCZWnXPJ21dhEzLGgCZqgoaLfHzBJzgTt2",
  "key30": "2A5c2bWLh2ogHu5AtSMSKRkDJNxcqts5P3dgJxvminoqMRL4DRaQZWWUWAtNWW2Nvd8XAiopettYQhNEBwRdDmhJ",
  "key31": "2SSXsE972vUC9QkoDfdCrbenGJeGuXiC3j1xd6mViD766Defn9XYW7C4QWDhuEdEPK5KAEWtioP88wLm22vS7pDg"
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
