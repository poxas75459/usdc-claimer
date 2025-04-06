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
    "5gYmgRiA15cDRNdCqK9m1pWAXqktpRHrrJDpHLp8hvVwwTFXjuxSqdnhhGF48QfoNBNAWxLeStGtnvWXb9j38f4t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DL6poUbDxZTVp325xUhRvM4EoAnuscyiESttfs4zyKy3MWPnhPGPVAGtaCXZ43SMSZzubnQnnnbD5egzuqmrQJ5",
  "key1": "4M4Dzvh2Yp9LrP88svKghuvJ3Sbdq7QhLLc1WoT6mhvtVHiDckQkD1f5uGUrJPXGf9RUCJjAh6tdCKK1hUje5cDe",
  "key2": "2Y8xMAVZLcjj3D6QjfAXT5AjpyU26NKVWUjX2HUr5HXZxV9afjiNLsDFGRhnzpSKNdHosPX6azy9YAeQj5NAkYY6",
  "key3": "2Xq9NhtnfQ1CmnaWVoNfyL4Yfih9Wwnv5wsKDjnVPodi47aHDp9N1U2V9zzKoDnjiqTpwrKQA1U97AzjawmGzftg",
  "key4": "5HZ2cNJKUL2zfwQghPXSpeJQUkUMmtTrcwDJ2sSnLLVumcSYjpWAxSAz3oiU68avWe7DTsD9E9QdV9kCV8cB2n7x",
  "key5": "4YzqnfZRmBsvyuJYuLyX1mpjKqtpfH7k4N5w7hJ4t65XhwKiFcy334YCMoeQLPeUPZqs5rjhFfvfELX4SKViwrgJ",
  "key6": "32Lfy1FPQxwcy3nQR4vJsEyCbAJDnDMPnBBUoZZhvLLLEpazCDEvmoFnprZJ3Kq3xK2dHEbmp6NFQJeKa1hD213w",
  "key7": "4fVd3snvcgMaV5QMDQ4L4pnqZFm1KTuNzcuq4TUJJTbZCjin5DMyETT8D66Ggs8kvFi9gqv42N3ztaKa4sWGfXyH",
  "key8": "5ph7pTijx3frbEKWWzwz6fqJnBZHQbYom8zNSEbHuUGBCvsmLSgQ6TUgHNyFUJs8DS8PXqZsUhykScT9PKKLaSof",
  "key9": "3D79yT27kSrWDhUPTFqoqo8JNJJET9MeQwkXs7vZatFQrZ5GmK2NpBHDHaTzvE8P1CigpZKorEpAb5u3TvgMZB4E",
  "key10": "DEx33bAsqNZ6Fv2MH4pXC1JCXzMqQhz8ookxNFTaHEQGd61HLt1MVhLWufyDFVPPJj4kUrfvHrHNbYn1CvwJuco",
  "key11": "39pAh4DxXmoavk7B8PhAkwusmZD2Ga25UbX7gdQLh3YUet1b6CFoddShvNKpQtzryUKBLyG51CGiCKm8dfM2Dug",
  "key12": "67r8CyULPK8TUEz19uY2foevmEw6voLWtSWyuZerfzqDABVDJS9RWKh28TBHPyWsKzzroJfL6fNPgJuWDt99vKsJ",
  "key13": "2tkG5ZpcgjFrBETr8gF6jrwGVxmY2N5Apz37n9iCoPvZrKtmaLf2Hjf4W5qr9YnukfGHQ8S8rr1TTmEh1YeiBMon",
  "key14": "4NJPnyenFtfR3QYx3yDhUxJPB1Su1TVapuwaqz5HFRwUYF7o5pmyizaUaCrFeT7CA8tREWbBojR7VaD2oSf9kUAH",
  "key15": "3gvhs9V4oxZoj5NtEMu4inYCgPdE188wV2qbyWcNUcouVVAdi1CR7XyhoCxGC6JYnBAmzD2zjwSEwA1kCLWUVLPH",
  "key16": "21mKecnqrYZVh4Phz4Uk18gWiaAE8XcMPkY9J8AZx7AFypef3vv7oGj9UCM67TWjeRAgUmVwrAx93H4M6nBwxEQX",
  "key17": "36Gfq5R4PgmoGumdriwe4KrwHehViK3FPoy2YwUH4VWDy54GAWJrEArhoNxsrmBXmEZ1iLdxR7co8zYwjUo8exKS",
  "key18": "5TDMJ174Dx6Hf56429MDyHAddNupimENKApreRmCv2X57ozohriuf91wPgW1d6pXX7YnxRGfQj9Ak5o5zvWbgaCG",
  "key19": "3W2YSbZi7PeSTbgiUkgmkphH8K6Ks6qbdnhjsQGA2fjmk971x1JkniRbrBZQC49z6NJp8WQ3iu4b7fXN9e9fAvU9",
  "key20": "64PWsTDjCEQXrnyAJeNF5juwHxB7HFT5CFvgRgdop72pF86abAEp4Zg7mBL3hnbMpv9b3ZJk1cCK2XHV8L1oEf5C",
  "key21": "5cMmkVxHwArqdW9izps85aZxVRxYCcguExpVSuxDeUpxF69Ezpgok1MD9eHDdeeC6vuwhWdYtQdBS3m4fvZr4gZb",
  "key22": "5zwS6r3Ys4rLZcKC4h7ZXrD9rZkr27nuyi5B8R55SGDiVq6N9yvSLvnPkkewpM9ZuQT2xoK6Fm38WBUnzcwp6M88",
  "key23": "4GpyXpqTfPCcnbxESxhYVt5XouzXTvmNjWrAtqeeyYLsSuFcoD8YQEU6KCD6Dpn5gLCWx67DDV1NwWwLoCwSqvzi",
  "key24": "32it5sFiDabyrH9GMXH4SbwuZGNSuifEseSxuwxGn3TPHG4iZCXnfRRExREaV23DALN41rCxLhRsr71eYVNGvGX7",
  "key25": "5SdWbMMqEVekYzem5zjZUbdW1eFGNYZLRhKsRL6sTcckBHjVU4niCVghBCyd7HGyAqvZPUzJDvGFyesuRLMV2pNB",
  "key26": "eFJf9tsEG2q3B6qNyEBFvRiJkoQfhhF7mSVQcUKNhQCAA186RbKZESESmdKEZxcQXYaY8oVtzrcPW6CfeAo5uwG",
  "key27": "42QTNmNYqN57Pz8X53bNhYDdW222Fc8C795RHFVUELAzr1GXgFPquSmgT9xE4jqC3MJJVuvv5MwCwfvUrV7w7w95",
  "key28": "3w5GZL9i8kFLKZqjvctFxgBenHEpGF9UnDBYg9HAs7xYgdMn24KjCQkcRDYwEJejqQYxhvYXtxYvwAHMtMzhNJJw",
  "key29": "5nupLwytrNfkcnsGFug8ZHh9NbqXxm1rqjqTda8vmUPdYgtQFo5Bsi64am8yrrhdENK9Hhk67ggpA961MUWTh9FT",
  "key30": "5GctpHKsaxGfFsMAtRRz3KNcg2CheV6hPRLksC4tkiC8P6E3HPaxvLtZNz3mWE5T6vRhRaCrUrAbCbW6tuRry7PA",
  "key31": "2WaWRrepvVPz1oXdNUeDgvfoRKzVrQHxdnpmMKwQVzfFj3AA5tbXbAhz8kVmSWSDCgTQq3RUvsUr4etzQYgNWNbH",
  "key32": "42dfiW3PaTRLdEsHUfTm8C6yqn9YdivRkG5de8fKh81XKfqPR9LofpbDnfKWVFtjXk3kDgbSaxxRLYvvt6CnKWso",
  "key33": "5JALxmmE1vfmhBb1VAutUNeJ4EVW61jJaLjUutPsXtH92kt613YzYE84wQwxeFwLZce2m6LA4irxQRigHhc6ZnL3",
  "key34": "3CUpjmxTiw2mFr7zrR8k18Bi2JyopVXiKW2YX4vHvtHgxBCYBthi5fXEaB5tudzBmTf6yeuh5Y5oQfMZgW88175F",
  "key35": "65PPKkV3ukWDs9wZ1cciJ6ow4fRfGYSAabY4NvAv6SH2J2ZZC4fpVGAR4coGqkJnymVuRcbaE44KM8wnPkbDgohX",
  "key36": "4Fc4zTVAYhuUyB644x7WDLL5NxCKRVAxS2wbPssQtyZDyKXMbqCSJpJvDJ3Qs6MH5U9Xd9AcLbPfWw76FshnNCez",
  "key37": "44YkjHzSpiqHMrhDXKJ3K9eLVL3zvUv94VaJCGcajyqqomfRTUgBLWqmyZMvHcwZEcARqpBTC8a4CvbkruDHFBRJ",
  "key38": "2me9qHpPYbGC23Ka8yvNdXMVQRaFMfi4DtGTVLNvNMFSf2K1a93oWdQDiiEy16Zh4MhScfkapkXqhj4S8WDFMQsP",
  "key39": "37RGhC7WDaX3VrvG5PPV83MgKSzWTHDviNGsjCkDPoZgv427HKgVdqYKW4fAXPDw7K9pUK3QqxmBqnCZ5ssBpbBT",
  "key40": "2eYEFGydDFj22nXi5qqjZDg8RVp7ixNZQMKZHJYGsqFgFE84gu5id3wjZ4DS9WZWGJaEuFgggf4D2AEnQJCpoEAW",
  "key41": "5XWcUb56tMAjkf3BaZ62n5BxjpMvcfYxqnMYoaKkPMxc4CM6G4L1U5wgEYwkYtwPkALkeDDmNEBNQVjzoPuWfZzM",
  "key42": "4foWFrkaoSzRZHnEarFLfzogYZUEhPg5AXmNhoY1VtKzTb8xmnFx5rExDQqom7xypaYjNhhuiDLGHytf5Q8E1fNf",
  "key43": "33ZkaSF988XpLmi1VV871mvuB984tkQzVPAc9yBN9v7LEyQVWaPmhv2de26nYrgFea4XEWUtnou1YMkyUg2ERpeC",
  "key44": "xfc2Qz7Wdc7LsD8iLZxiskiNKY6J9FT7so2FuMuhBWyZP7goDooc8GtG4qRYXLkuriHYkYiXkyyVqewS7CrSwgm"
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
