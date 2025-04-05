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
    "3Lqf4dYRqY9UWzEACC5hqdJacEirn3dfFGtUPfspZvrSPikz8xkMpAdatZLSNzkofbRGbP1RMR5NkwrE4M5zdeMh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s5qAia69EfL5e2Rvmg5UbX2t5pNjTqbQtxx8txykdGdcsSRTBKK7LFh2wwooUudjGBesUMnhy57oZZAnAkWRyiB",
  "key1": "4GJ1aziXNqKC35ZQT5KwMXdR7xMFzPP1cHqCGzrKcuTVbpMi8WZgbcgiAGVyjEVzMsaPsCQSwSm4jBgAJTFNvVFN",
  "key2": "514ukoQeYk2wBmDeKaiSW6Nnz3mxKoJeUYHkWowmp368jNK5tY1hdhBpi3wR16tmPQdoykZdgKAo26XpCc6s63bw",
  "key3": "5yZX2QhBFx5jVmWfak1iKWWXZzH8eyNcKdt1JHZx5dv74shktQ2yonvcb2WmbfrCqR4VwaiP9ZoXfpbGRPzr3Gmd",
  "key4": "5wxUXbnSXEJ2N1r89kxmZ5Q5t2W5tPueFhiMZNUoSzFBL6fntUxxSZ2H3zVTkNZsVXcmGZZahr2B9st3CBcQ1cF9",
  "key5": "3mDCs9imKZnan1Tk3JgHz7YuiVxNc5VXfW1C2xAkuK1z38hrr7u4SukJUNz9SCTKcmjuFKDz8avEAgKUt3p7udUP",
  "key6": "42qe8NXTf4wDD6ThScyW1CQ3UsD6Ksbz3RzVzcAD8yYi1C4FCgicDespQHu2YkLgYLe2VFikCbPQMZjLSBSYENVV",
  "key7": "61TipA9UqbA8nubCb2sPRsdG8NDiXJP8rcidjru3KMRhKkM4EiYKohdZ7u8w2YByNFryUU1RCsyMKE5h5UzkV3M1",
  "key8": "4qsxUZGY9pE46j6ihXrbCfw4Tvgcii9uW8e58Xw8Dds4krKkpf9c6RUMKGFx8uyfX6bABQtaqsxZvhwzE29hxgjz",
  "key9": "WzTKY8Tq4Bqt7mWFc3tpMfkaZnuCg344uLixY5UFMA8ba6tgZ5ZJhG6fx2ZmZxGdqsDBDtmztA1EMLkF34EWfvj",
  "key10": "3J9C5BckLvP7rHtCH73iLgfaC6Z8DeNgsXbLDWufxvAN33yDUBfoRXQDsV7nBuPHDPCPDU2nMUkRzrw3BMYq9z9c",
  "key11": "5cYtdrprYkv8nUzZkAACciuL2MRiL8rhRH8qtme2tSSxb3LhWDrwcmVMSeQag5DCy4ZjcuAiJ8dnsEwUbobZXiG2",
  "key12": "3c2hbdfYu9SVJHpUMbTbrerx1hv3m8bW7ZLZ7aTWjEkxDbSVNguGQ7Beqc6Gzu2LGRBZXv9BT2ri8Tc5A4KnwZcU",
  "key13": "3ukBCHxoibZ1tyANvHwFFWN2N3qfX7k7G2HhGMWyW3ZSwQuzMvbRwhRNmYj5ETnqvhdZVNYFrTpTYSDbsxgW1NRn",
  "key14": "oHEPE1EMtNKZ36vzNyULKXfG7fwfFiNvztHGax5nkNRyL5m9n1tM81DTvzj64KXsSpcCwK94tw2XwqJvq7eCiaZ",
  "key15": "5cH1GLf761NZwiBQXmrS6wPQ45tadNSyJvU98Vjk9yHUGez27UcUQ99Y1kMYE63fj9uBchzLWW98XC39ydTXWzrL",
  "key16": "TBtE53if9pPXkTRbtSCmnQkeVyFigj2YjtEqu1w6NxmNAPzsTv87otBf4Gie2HqqDUrriczSGbGg6n7HSFFGUJK",
  "key17": "4KmT5JBR4ezLAAkfN8h2hnFXAKHoDE4xBLEU1QsfkL6CAgFnfA3kAn82xKtvcHyh2n73i6ncSB7iiTzFPSM8Xrr9",
  "key18": "49BunjvKAPmQ3Tpr471LP2tUFTg3uWErQKM11X9WN4kg7t7yHNgR6zP6WMs9RsihigR15oDdsowCbmxwpqmqrNZw",
  "key19": "A8CGGx8MBes7DzCN7jANtPfdYu78gZh2NAVNMyjJeEnHtTj68GB2zbtUnzANRUfxowZfrQb32GdV3bwCZehxYN1",
  "key20": "5FQKHwkncCjw2Yy8BuyMixK9KEcGkV1T7LJEWFDcQAmJJz28cNsLAeLcQMNoxj6ZUasgvT3ZUAXeUh8a723hEeqW",
  "key21": "5Vzq5M7rv4vdvuhXN7C1ismsRpt7Lh6eGe8uk2Nuvq9gnLqbVbRpZpebr6ESBNS9E9RMTuTMfqrXdnkH58VM2hv9",
  "key22": "2e1XgmrGERPibxSabaEDmdn5yJdQL3hbQrRjdWeMynm75a1mjhhsC2t9AccJ6sxsmaU9aHpdontMd55MwwBPvKSL",
  "key23": "Cjtoi1o1rGDyhmQdJRWgfZGqXjCzDhvpSF5KhNgG3THKUDDiZRojiEyu9ffwpZhJde81WC5s6BsmXc8aUkpPCNe",
  "key24": "5zvEtkUW2441skZuSAWcFUASCupMxuhfBxkPm8JNv2DrKDXN6ospyFLrDAAtMAY2iCQU3PGewPpcnkjPVku2tgNt",
  "key25": "3CL4yo1dNJJGfZ4f9Pum4M4mMbdiEZw81fUxcFSLhoPuPnSkzvv7mCZyTYkgLsMHMzLBTiibZTAiDrB6uahd4o4B",
  "key26": "5pg5UPew3S9HTx9mekjgx2bFMNvxQiDNcuvX1sYFsbA9BoVt2NcwX5Vk5zYx6jwm6v71jBTU4eMgwby68UR7qiyT",
  "key27": "4YFQ5NR77ccSRS2V9DGtkoZivytRbXRkwH6Urw1ayL7h6c8RF5u65pfnrkCKXAVBApYJFEbUTcRGRQrxeU8jgSya",
  "key28": "36QyGsrtd1t2Ncppd9HaYTMeM6q95GF94HjyTuemBiA6zRy5RN63D3X7YE5wx5iMJfJmRdjjF24kw4cbECnkr1JD"
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
