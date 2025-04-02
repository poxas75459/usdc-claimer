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
    "4iGEaax3ojoVKxJScKkXtx3och4MZQdKLLgFaMH1cXeS3ae117MEjjWUbWW3Ds7q9wRC4STtenVcnuwRRAXHSTpv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61c2qsBBmWmtSGquz5S5qx9r4DJfowyAQ9BiroPEhjaLSU2NSUWuNJQs6msfchgRV26AeyLouEFWrhqZ8uXsyUg4",
  "key1": "xijX8XLK5KQ6nJsSXqL36mBNedErDTYRs8uTMbWJPZ1gFm9DCK86rfs4waRggdegBNzPd2TEkEUmYmsRtzZKyEr",
  "key2": "4QabfTWFTZXGXemi1w7pgFwDwL3e8eCm7XnvFyWZMxpzAqALLnfUoPvbfJgPbkoTitdALB6GyfWWRdU1MbDw8LK7",
  "key3": "5QUNUajhCmJd1RsXcVfsrn2ob8sXpu1kfdhe9YST8UafZNWrKDRnY98f24n9YEdqtZyrdioe3195wFHW1i9id9pf",
  "key4": "5vE29LWBUhmmxKSpcSLyax5sJcKvfkAZBvstzxbU3kiQrhDW8RG8vR8UtHKwt6rTrXKZtnuKSiYEMqVSZUeuRcQE",
  "key5": "2naazTfq6tf47meE5mxTRtPa9RWMsqReSQLuHteUZCLZBVtk4axb37A46ntv6F6LqcXMFPxGoyK4SXnTV89ShCPs",
  "key6": "5gf4BSYXLfyBWUv5kkqFwGHN3b1o7ahHvovSsNUMK2QPSinhphqWziGyyM4d2qX48JR6CjC64HyL5Mc7MxgA6HcF",
  "key7": "4t163ov53THrRyDMNmUE2GPr2wrma6PSvCa4WqWLqF2nFDy38Szg5GzHodyT98mQDB1Dd4jYz66RdQeWtE21KCB",
  "key8": "4LDGCByS3oi8mjqCoq2nSW5YQ8fcsbQmVKCZD7JEgt2Boa39FwtEGBEzSJjri9C1uaWmhDiaESTa4JoQsgoEt6hj",
  "key9": "45nNuv7NrPS8oKPi2GARibaZs8eKgMfUSSU1EtakJYbQFV5tP5u2y7eouRXZ9PxDphja42dZLnQBuGzWVAeJwgNh",
  "key10": "2gE5iuPUP4RZzeJsM8pfEPYsQzbvdKwwfbvreehnjmYyZChGfPmcoarq2qtyyd8rzao2t2UdY8XJMBgRVNh7kuYx",
  "key11": "5dpqbDdTD2Uoqqxt6E1dfNbvqVDmiLE48Q67qTf9sJQpjWiSm2kLp35JVbdBNBEcVBx3mEdojMyAmST8NwRABA1T",
  "key12": "5vufiSz1uM8LAnpXgB17APpDDGwY38q9iY61QNTifhdPSmLVkwoX9r44fWDKU79wN6dSRmeKS56rMyM7La4CgZYa",
  "key13": "27HAqEoonKY1LeGAk48j8UaFJt8eruoN4MKRyVYB8QryCC9hE3uLuUR5SS6bRDdczdhZ177ZGBmKbHcggspZcyJa",
  "key14": "5gtW21hen7gd2jjPibf1F5HYNhzANcnehiwaQ1XZ9975hctHscssUDAQB8y833Jm3bkhRCnK7PfgVFZ7Je229XMn",
  "key15": "3UVhCqhm6LN9gYEorBH6HVWKsPQQEZaHWr5kV6c9XFssrzPC21BcaT8CEh6uQdWXiFZPFb8C9BchWYMHLUftT5sG",
  "key16": "41Mkg5b9DeDryVjZuuHGYTEUKfrPRDpWzPPW3YCLRA9ETaXG6vmKwVd2uMaBaRk2y4EaCTDMGKVZtkLi1LmDmbbk",
  "key17": "3Twt8MHR1ZidYt64Ru76Uefv6MjAW9rxpVr4pkanQRkkZtgAtosNgCPCwcz9ioatrknhCgqZVFLgMN1UtyU7AxZC",
  "key18": "4spTH8KByCpYRHKRPtUYXGZoCHMNAY62YcjYy4RGq2te1kPSpE4VrNWjnuYuLLySvcUsPpzeaxYzxFCEWSTW7tgX",
  "key19": "5eM1PJmADAQodWVdpdw8g3errkHVJKtXWqzgAemJAZgU4fjHUvHg7ckfP2KqyBEJXUFLbTXGS9voHGR5WS3i59tQ",
  "key20": "uy3X2TeGDhmpthSbChyjy8bErDVSffPfg9XdpjtZAwFx4YMVuuAP83RKwaLxEyaQbNbu8nNRzhk9XDqRUwGtyd1",
  "key21": "joz6nPbHbNb9SXTpfaS2TnAsGapvuUvPivgBWVGwCRX9xnEcxpF5uTNFgCLqqLzbm7UC4cLswGxSD2vxwGUwDt6",
  "key22": "5fDMnNMJ6vC6pxvprVimsDUEbbRKGfvXE4gtsKzFnXq6utiave9r1ATBJhb8zEfT2i7A1gPx1Jx5DoopZXJ6GZdT",
  "key23": "4AKpZh7UesxMbxEn5nJoeoN2mq8YZpidJmP6A3bZ7T5xWdumAkkvgLWKbkDApgqB1Xr8Lh8TfTfbxzBrNfNsbVrg",
  "key24": "3pib1JJMVmSqL9otvafUFPMrWmMEX2hm4EFX7j2ZVZYkxHFWY9fRMpKDZNfqbxmuv4zcPsvYKC9Z68CFZHajoPxE",
  "key25": "4TE8qHJv4kHKfhzJZ7HCNvKCPhQFb5g59wgU59n4jK9TatP74z3J82ffHC3H7erja7wCCS67if6HecChnaV5zUVG",
  "key26": "88K4jGWrSN2eoiCmGfBd6mc5wqwYqgT2eYftPXwDudhhFSyUCMDgk8PakwyiC841V4Ht6a8vCvBJDd6JJqMpRwK",
  "key27": "53pfxq9gsso9HBfDtikCf1fUHx5ybkofm4ue5X3JFRdpzLkeeGkgmt8vsKLpgT9CV981eFDfdQ8r8rxskx29ubsX",
  "key28": "37hex1qexWEiqftftDjUjErayqVcnW5LKZ4opD8NChH5di2FLobHcoan3SySPii78GX2mAgGfCCSQ4XpGsNvqur9",
  "key29": "3EsZycGsPFPooZdzfDRQUGKS6S9NPXUT1evZ1YrS9QDaFmMzR7MEebKxZVbqjEEihVGx5eZePoR9t3puMko7GAc4",
  "key30": "2EYuQbf24qk9rR8nBFJfiK6K2APB7S74N2xSr1xcbVhhEyiAmxWHkPbZUe22ZTpxwwQckVLXshvxgmkYMmJRL6Xh",
  "key31": "3PmaUWby8jQjACdQSVegZjEX1KjTT4qYxbgmt72UpwmKv7PbCkgp9ws7WMPuytFp2MUkLitHPcPJDbDmbzDVS488"
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
