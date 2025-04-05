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
    "JNeGhwA9PRw9rooaXMjCh4gkrbfSv5QUuHa7sDkTBGrSx7yukGWQheU9eiTvRUXvpwUjnMN21a3J1WPahnsQ9k7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JNpf6qbGv6yagaLej4DmbzfRCBGXQEPZ2cL9GhoKGXsGLgoYQFbtUPfTwThHHjRJsY26W8pXs5w1Xx7LwipYBFo",
  "key1": "KhPJ2ENPNn7tSe9GmVd8kTXPAqxFk5A4Rcozt9atkvDRLoySEBjo8HkQgMa4v353zhmLvwNPe5jYh7w2qQcc1mc",
  "key2": "4MLU9fDyDvEtxEExevWijsYhrRZeYc6EDH3ZHkbeMJmJFY26XLEYv8x5d6haKfbZEzWy2M4cmYR3uf9cQuPQkJRw",
  "key3": "5iroBjWqynYnWrxdeA14LuZpsgWuQuhGg53pkxqFKRg54o3SCHpqWu5wyKS5s14AXn6kBtj3jzrwzc35tvpzPetm",
  "key4": "2CNbKC6k76P8HXGnukvugNxgfDM7Uub8qVB2PKnNqjNMwC7yQ4FCsAZD8xWqfkinXLotBRDy7JKudJBLf8VeL52x",
  "key5": "4TGau3HjPbWX4rdFWMCczz8W1DoJG1RCJgvVmAaJjqMrygwJepjmqbRTnD3BhAofcAX3tWf5wHDs9d6dqc2dqCU4",
  "key6": "2y6Uje72CGULpn8DxPycAhmHpAsFEFcYzCMdvjUjZS3LWXUC8h7BmymnkT5fLADRWf8XW16yLsy6dNiRcPVB7whz",
  "key7": "4nuTwuP4ocmtbg7bnijg7z6fXKGoFVY38f9b2HiS2PpbgSmqQyN4JduCuaSyHjK4GoDc6tjtLywtdgsZQPMeM65g",
  "key8": "4tr7D8zyczKi5LDNk7V4g349kYaMRYVAbWdvrudRpsauH1hmKyUM4PtjqTttUveR4hg67E6frukgTYzMSAHRMZ8N",
  "key9": "jHEKRfaUTMvtP89Qnx9CppZTL9GExzD34qP6r9PH7LH6hn9vjAt6NXPwobRa5vJ8Pbkq1Dgg7Aqz7QRKuDCDCiD",
  "key10": "3yocNvst3Rqq1gy1FjumQiNj7LBUNYyBVFJLQ6Nc4YYhRbHpB5WyRM8w4iXj217AEdJXnNGBpMUjxi7WjJuJrrH9",
  "key11": "2hqPzeDLUFgAhHuoK33Qkcu5e2EG3sNT2skiRBvvjr1edLu2k7nt28WZhgcpjM14ErxdN5tv5SMMCAsUxh8dP1wN",
  "key12": "4SzYxpfuw8w8Q1ZbEAQEkPNTC4cKcRNaTuo6JTh3AGbr5WqPHVjYV6H8hQs1wn196q4F4QbGw1ShF4n32YbqsrMo",
  "key13": "5hRs9Cxp6YVPxW8vncpX2VPt4hVRSdHqepAWnGP9MFPMbk1DHYiQgLc8pVoqRU2nCmiEiWx9HPY4TbBWWjgkYjRV",
  "key14": "cqVBX9S7yuoRyVgx51qEhd4MFzQkDhbEeesgx2icuHo8X3QiKkUeMEoWVS8jRmYWpQYRB66fzKUmMtCz9fwv3z5",
  "key15": "4HpgTN5DHnEVkH96rZtCfTvY3Cd2qEuqPG3zN3HdR7B8S292QGpvcPoTJTw9LR9479U3m8fgwXC98ixZPq1Lduq1",
  "key16": "3RinyYdM6uj6xn13GMceKuc2uHeDD9VrhuF67wcbL1H7G3disYmSVZyncSAQXniG8Xnt5nxRuTUFQXnDzWpnFKGr",
  "key17": "5GVsD2navyoMfGvrEjcb7rPX7PyMR52b6e2JkMUA2DUzU7mbBfgZS5WL1NZHk2DLeyQ44WBCeQnhVQtXw3jjE7s8",
  "key18": "3NiRBGJUGMZA4bwKzQDQPRgFZCioxbTHRrm8ZMp9eXjmyEXM9cr6xM99boj4fY1t8XaMfUpQo9cKaaBVcp4Mo7CC",
  "key19": "S5qoCnk6Rrs4czaZPwRDb598fPARweAomtdym1oGxpy9nciaMo3hBbqMLVFSXtZ7xAh3Dv59hR2djPaadG6jyvT",
  "key20": "2WHRKLh76xKTKN2Rz8vc8y9PMd7pqLCNafDTkMSQSu7FXfceqFnzMecPLAugPnus8MPwhx34TFkXd4ABkY6q5Amb",
  "key21": "58iHuJDg8o3YJtUFC287Jv7AzX89tTQqVPyxzDwH5GdBVgS81Xc3DQWpS7j3CoEaL9VnjS7DZu1ANC1YiK2AjpG4",
  "key22": "2Qryk7Bs7KNbhyM8RjCU2pEzsnsqP3Z4StUCL3nUR6JsVJLJcszFe4fU8pW25frzVe6X6RqnqyPD6FEeyUWmbos",
  "key23": "3DT8oQafmesEui9BH7KQr2CqLdJw4n2WFfTdYupE3hwtCJWLMtHwGfBgunrBkHtRBdwFv5GwHtcyH8gDi9ujrhLV",
  "key24": "2mmQLyPnncyPCK6GFLrJQnD9kLQD2YfVVLiMYdEg6bM1kKzEdipziCcaHavkH1VB7dVNmVQDQmEMg4U3r7EWzk34",
  "key25": "5AtFrB2cAo5fuEXArBt6mKviQNg8crkxcoNAXfbVYmfB6Hd7uxKHwhc6NSiE1NRAVLW2fn8nfGxF6YjzzStA98WF",
  "key26": "361E92u5x3fe4sPr7jVSiUPs8gspUAijameSdZqcxdPDdKqfanHsDAgK5CE6hTfWuNG2jKnV3Sorz3bnrwDdeBxk",
  "key27": "4k6xApRtXYJkyaDbugAQ4keMVqzoNkkdzhH4w4NL9fN2Ez5u5cDAMhXKHStTMjSnzjWHTsi9GDgD4JpxkEuPRJqK",
  "key28": "9ZQXHbxN58nSXWN6cTQGQu2tzwa43T6mn882yfr2FuFBBvcC4kWU7EUftqC54RGyS9jrDLfnWXoNPoTYTE16Nzh",
  "key29": "W2NrkSryQeDNnbftrJYq9z2ennKaXnmBWF8kK5UaYxS5usDEehYdwsqZQTLYzhKw7eWRBdP6TaAEhFp2Gt5UHyB",
  "key30": "AncVecZz7NEtaiSbxx3UWWRgRYn7Kjrqf7CjaVPckAkFneGHrEuLuQ7NzS8jhD3PfRzJ2wknesFw3jttw1ZkTTU",
  "key31": "3Zc2gtzhY8ToomvTS6AJdSshTtsfScwizrxfH4vDLYGg2dNGw4z3HwukJZDSsD5Jd6c3nEZtCgYs4JhodbQX6179",
  "key32": "5LShQq9bzu9zD5PLzeU6SeqZC8GssHqRkBtJfMrh7U7XXPZFyNYxrXwbfxCBgjXNzvwSg5NHCZ3mTRDzsbfzAcCk"
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
