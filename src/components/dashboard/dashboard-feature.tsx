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
    "arKrmvXQoVybkCA332GfK7E2fzgxn1hNZUGwFU42RmMBrqvd6rFmwyBx7QvgfkDkebQieL1f4m2Uu2dd7dWW8cU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iiXdoUM8xHc4xo7MxR6w8qtb1VsC22Q2Vq9DZrtc2gVK1tiU2YcrhRTh7abo7igDxsgsLVjVR7SQrXvHjxHpp9K",
  "key1": "vo54SJjHEYTtmrQG96nugDCm2q9NAEytAyP7BsbvLZrh8qenU8eX6wGqEKKwsB5HFyEwvVZ4UJC3S4hko3EDmRn",
  "key2": "3zedBs75tcPSUekrpfKQrXQFgKbuLenJyJiUDdkNQRczjHDhmqhmSDdyPC6AM9pR8ZMTFk7PLKSBpSMmm5Fdb5UY",
  "key3": "2PWr8TzXqvWqgJJYFXFdn6kKeL3jhMVwZ7QpUc9CNGCWvppCjwgss1srrvKrVJnxE4svEev7U12TqPsy7LZiBVML",
  "key4": "5CLK11zq7Am11JJHDVT19hwttyg1fDtYP651zCfi2Tc9FWxbXx6NZ1EfquzxhLe5Ew8BLgywSnu9tkPwpNyZUY99",
  "key5": "2eJff3q5Mqbo421d41G5hazTbBmKToH3fAGLoZgwnfFMhFqdx3Lt2i7nBWBsFZ76PuM2LEuLWYazVpMrjVVRVsjG",
  "key6": "jRZWok3ERDsrxUQk2SR7agJWsUuKK9LctgHEoN5jPgEnwoDhjWBTaXgjgpcB6PA7nYSczkPiwCRUtFPdH5ETb3N",
  "key7": "3qs53EzH2SEbnKMvy2feJrGSQuGgcpveLTjiQVCJLvYys69nnN7k4FANipHy43AFGshpL4aHUkA2wJcvaCoNpSUD",
  "key8": "4Xtz9KSWNdBU7UqJsQa4AjExJQ1G4HXMBPDbwaZP7MmAW4hGXdesxpfg6EGJB6s4DaBim5vpWEMCRVS2dWJbGVd9",
  "key9": "wjoNjPf8byyunxvNMuSDz7bSJNjU3yNMNEz4YhXRrfrMT3fg8ryptEEvJVivncqjzJX4vM73B2DDbqyTgCRUqhG",
  "key10": "3Vs95ytbTcgDP129sbceoc6hS5NtRSPj3nJwZg5K4ZBAZFucM5qfUq2NMEqDUkuJ7ym8ArdVb5Edh1XADH5UmQEH",
  "key11": "2om8hqKDBmUontGhTUhNFmM8nB2Lx7KaJrkzdWWJdT8zyHsSHLwBLXK5tzsLybeb1zaphGbn42MUrUNe9zJWoMob",
  "key12": "zFytwjregvzz2f7g5RSrtD5zfx53mb4Koy3uSewnSFwnpndbsc2e1N8saTJVS7quXETToaMoZpmPfoo2p9iD46z",
  "key13": "5Tfcthjt741hEzkZU3mtC18oYDRHgqHEnqNKBBPLT5ZVvG34E6T955j8gCHqLESKG2rZAzqS5qtoTyt3hR1trEYP",
  "key14": "2YXG6Lmzx8SdXiAwBwmE1h6vY4AFNyiWsMveL8hiLgTPQN7DYryHMvAT93QPNt9KbYqDnShexeqaTLKXzimGpNLq",
  "key15": "RaKb4NUENLF5YjPz73o3UjmpjmcXitE8NAcP6EyvpeDMZJ9i5ZjFY8UwbWSUspv4XVWyX2ZkpxHuFCMbKzb3pdS",
  "key16": "5xczs65ax8yehpCPJ6v6YQ8xXAaEuJhHkv5z4aaz2xG57SyUR4A2Dt9TBLMwkpjYBCYQwBjcbVvc9nBpSCiQJNfm",
  "key17": "2BtfXZRBZzq3ecGuU4bqekbzkdEpWdbaNybu28nUWvcUDnE8zreHipT7DEz3TArBD5H4eJ15uimnvyVrYbNZD13",
  "key18": "eAcUhbRmGWoYrUVfqRHJHgZwj7nUt8g7jeR575fiA3DKK9uX8cykQa2gVSrzoTkSx6fswE6v923V6cxrHjLRQB5",
  "key19": "2urrBAvp8umD6Qvu7qbi8gYWk9gRsFWTXenmJ1vQYHnjkuBeC2WCg9rakKSiwB95NBH2uwDuELQjSZdhToZgSNBn",
  "key20": "2WFvyei3fVRuMDoemipsat1CFTEfyhCHc3oHbVpKHQ8xCMKhtt2uSu16FHAYSTWD7gNmUmp9FF7RAikxBhucYo8Q",
  "key21": "DjCifK3BQVv7Y3wyLWjrERh48wgHwaPHn1UfgZKZQ9JRWb1eEY3hHbwKsRYNyL7Ux2arTp9s6PPtdmn4WZ23d4v",
  "key22": "3JcssPJanRTHaVqTNyQMMz4N9JwaKsTLEsCiYFFWt232pAMmccS9zZAE2BffsSEYznNGbETJ8kmcgQTbhfDztJ2x",
  "key23": "56Vibjqf7gyrTiVvH2ZJJXJnqQU29ekHQfKSi7V34efbcLj56xbB3hjegm8MM8YAFRc2yv5B98MZGN9c5qenPz1W",
  "key24": "4P7pPduFCpaGd12C3tefANBNkTs253rsaJdsGwJ71U9SkcN43SRRPxpBmfeY7TQ9xkG8GaJerdzKWkiEwybZK87x",
  "key25": "5xjkkLuQrAQYjrZFXTG7DTeWbMWtFgBhY4gmvaRXigbgnSX7JUZUCeHWy4LuUBySxsmaeGVW49Y9wiahKKi9z55V",
  "key26": "4Rb3g31kNajSFme1K8HNfYxzDzg1LjBQGYoa4feeM5s8gEWADL9UngxkzBrmmxUSSGD5G3NaQpHh1QfabuF4MNdK",
  "key27": "4iseHFRTfXFnEVvyLa1GNGk5SXFi3otKHiDJCwwwGsSNz3MBJBrhun1XN2uitycjP436sS1nGBDku33dQNRopwS7",
  "key28": "2LZkNVjJDVDJgjWdgGtrS8ayXJfKN9p8XrwmKkKmqPw8royDewE6fGpbur7qc4ep8qonLoh4Gz7pjiMHBxW63EWD"
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
