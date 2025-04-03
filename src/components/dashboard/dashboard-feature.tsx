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
    "LHRwJUGhCsLNJUDidV8Cpw2BWVTsuU9ZiTtep73YwK34baPkGrJRRghjA4xYEJQBF3JUMCYayxD9PjGdFN44vMX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p5HnHcmRw9faMU2mqw1jhv8X35DM37YqXEFgZd61u5gSBvxVWWn6TKoJspsrToK5d9k6CBTjpwgviHDWixzfuGD",
  "key1": "2qnjZykKc4n8Ztzczinht2DKVXG2z1bioSwtzD1DCKQLuJQ9CDvHCYgDBabuannvtnmBGScq8P43NeeXjeV716qs",
  "key2": "2fJv9afUnFyLdZTJHGuFGsSWCSa1ZAhWBNPLPaHEtUQJ15C6jPdC6ReMZLaczGaVEWdWhAiheT61ePk1wbigiEK2",
  "key3": "3CVUpJrg9pyQs3HqiPvtr3iLcEYvFScZAj5CH8itQxJHKCtWKjxuq8DUqBnx1Nw4Yys54U6pkgmoVf4DM7D2FtDX",
  "key4": "7cFZWN8yt1qUzRGfNDKErJGb1Gsjj911zN7mhnUdJ7y9z1nvzi7BKhbVbsSc4VEHVbHiC8JgR9pM8LdnjJnYUtx",
  "key5": "3qJQL5Uqm7yuJN2q7DGhYahNF5vZtvGB3KBuyfRHeCuHqoQXg2vYTCDuM38etHxs1HGcBp1bRxQ3K4UYpDuhiafz",
  "key6": "5GdxhnjUqfkXhaAGzkPXn68pVrYu7HT8c1UAU3HHBNPy8P8cg8q1cFhri3XwY6JpaiWFX54HehM1z9jvz2QRXGsD",
  "key7": "3UtLr979DUYRcyJfWbUB7TkbvzZ7NjPfRVsrxUt4jzzQ1kYRaRdyjuAfydXzQqJVrMMQLMHFWiTGkJydxG7V6Sei",
  "key8": "5kBAegRbPhAka3bAmLpmcf6D42V9ZTjLnoDYBwVXeFzeuV2AKtmAfPZruRM1BteRVNEZXJurLNob7bi1YL7gZzE7",
  "key9": "5MGFr8mSXZLSNdHU7XKx3MSeoKTRfpoA4sefvZJr7w3UhAg98BS74ptAC5cCp29GcAavDr6drXYtbkebc5UWogLv",
  "key10": "emR14e2tMpStjXNwAymJL2vpJjrwU62R4L7PcXPx3mFACr6MNhpLEhKNg42oXMcEyZEb3wybxGkJe5dQTEtV8vK",
  "key11": "3renCTg4x9a5DfcY3rJiWwmt6DL4mKj7V1qfWUriYVypt7Zn3dRYRmZXF1LucCtbWiTxRnofCKM3CQYUfP1s2H7T",
  "key12": "J2wd5vuwL5igNV96SaGMchXu3VCKs3zhHfNbTySpvNX3LrEaaWKaaMhGbnppihoUhAGoWDqQYMWpfKJfJTJzGah",
  "key13": "pnyHahXKecWJrpt9w8zmu2AMtr8co7CW64R7EWUtX7n3dw1u4cK8pmh5aTh6v5PDkvKAURuy4UqmVRqaG5wdqHD",
  "key14": "4BBDExMjh4FWfNbDoTQFXLMEVcv3nD7ebEKXyGacyDn9ZjgexgNTfqUxrTQSRVqhc6Sj4WKKmDnPnnMrf1DXsBR6",
  "key15": "2PMpAZiwquW16bBrvWtrSSun8ZQKXrrKpmFL4DsdBNnZXqPBsaj2RhJ6swNQ5P2H5RMMEBfejs3jggEv9UJNzuBZ",
  "key16": "5uc2CRJB16G85HLRyNDWLCU6ByVXRJPuRqTUWL9kCQkDxkfGsVGdoL7aDHoMQg1k7QNEQAF4ppp1ypUXvNF749F",
  "key17": "3uUuX8SDLSSfrVPXNPAkzbubo3fsmnaSS6DdSCyE5s5sv6KwRjr4jC2un5juygbFY9oHoBngVVEuYpYe1KbsczTq",
  "key18": "71H5yaLjisYbksrMrT2ULuL2a1k9MRjptGeAaXawa3VVYX1hXSDJrfkJwZTwxc33x6qWSUVWo4ifySHxg2tGYtE",
  "key19": "3KLQYvQckvxhqN7mF1xxcMVwVqWdE8K9nsciZ1pa2ZxkAMQ79ee3iMzFyz3Dmw6PV7wPe6vYHhAPk5cXymguPg54",
  "key20": "H6TgdkSjWJkxoptMTVD5pqUFJm6mGfWzRWjcNPB96cavbj65ievsxmFSkQq2Ug4o5uKwmu39KXqJj3JpajvtfsS",
  "key21": "E7de9tCpvgTMSrjYKTbjqFx1fHxSzjr63WhwxDFPHNdh6KjDSLQmJgzDgN8S1oULJEDhxVn5899BAZ3nqMQJXb1",
  "key22": "2eA7Eoue8kWt6UqVL41mn4NSEYSfrTVybPuFbY7WBva5isGJXxjByUU8ZeczqQKxJSBek4ScdQmVhQqNSkrGabbX",
  "key23": "2Zd2cFNJAFoa4QEm1hBkmw8vrwGyWnHtXEDCdiuwvGtvVCUeUWUtJCuNL4Z8sPxVjWDdFUep4M87cXCbUYRdEHJL",
  "key24": "3K1Zs5F1wDp8cgEJWZvvqvz5tgtKPUaHn1YqHpXoYbLLWTFFyjFBY5pXeH5UMyzF7iZYVtyvvQzcn8WVyLh6LdfY",
  "key25": "41uLFtq7D3AwBrKakW46d3FDTny78EDNT6zk7KPfFDHHcH3StNcPLWt3uBXVnkD6sTFCkf9z1QrRDP6nSVQW8RiQ",
  "key26": "2r5XhqbjtQVHV4NTGUcw49yXEdpf4JNo43Xhh1Ac6k418U4aMS9k4wuFfPVKqUo8BQ8TibYKLoTXtxdBwsBp4aYW",
  "key27": "5f8oLL9ieV2B3Hxw8wrGjYBpsZzoZ5vk23HSZkBLkN8435g4sJmpZFgoUYM67scZB4CMJU6JqEph7powuoUCeTmL",
  "key28": "3SWJ56iCMfogbFEiSt6h72phLJS5pk6kTYLAWUJ2QjcY8hsUeZDXgweisJ4bMxkFes8rssXAQUyYWMTUEeAopi2c",
  "key29": "2qhHBjUadJxKGkFAeowcEU9G6rggavo2XJKHqzVDCUksFg17uxvzjcRr8jzspYSVn9BqQDMEvYip47rEDxEuo9hC",
  "key30": "4F8ciDGxXJxZwxbWMrYPwzERtrmXhhY898hj8DPqLAXDqfu6eVBxmigghFNwhtveatNGFFKJLTzJAnWAoXf9htCd",
  "key31": "2mjyMJZqNmRLbX1L65wgrZnwrGJTM5s4oVxbMLxXowTdTqXg2NPFGGqBmVisfsyYRfwcgbfvFCMBop3WsNCK2Qg6",
  "key32": "23WrXHqy5dWcRY5ZfrbBqbA6y8TKW8BtkRruTwTXdgFjwPLTzGhmYQasDobwfiiwAjgSbmFgbYpHFRxjiJVYqx4e"
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
