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
    "Bbrq7UHWVa4REH264LbnY5vqzNiPn6KvEFt8PNQ4m9KFVhLZAEDZTwSyijytMqfmK6wHiNsC8BR5qG91ey4kJRy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3khZZBN3Y8hvCEyE5jLTyXMXbU8kT2LLRCjsk8SmEenQzTnCKHsTGmSgki2KAgWLRd3EBNJP6kdiKLXtAabtWdas",
  "key1": "4neQNTU3VyUJN2QsJR1LhyG3o6fghnLJNntn6kDfKhSx4SRZKLS7c5UG3VEk4WWpjA9rF14NDEqsEDZbnubChV5P",
  "key2": "2yxW51E1w2JdjA5bYAd4JCi7EDjoPqq2Ux2qvTjzjLu1J6Ad8EMr9UdWXgRnhoxxyRRYFLXJqGeqkgoq64Gjv6DV",
  "key3": "5i4CxpjoVNdb6HWVQfKaJPVLeLPGVQ2Cqnuc7Lj4aEb8i88Qe7Dx43pQ2TkoYRkgJunTkh3PidwkDqpuuFWWVw7z",
  "key4": "2dKsEqQ2GzTGZazx9gVrx4ecNmSQfPN1tRud2xQXP4qAopmG4ZjPQ7HX5JrSy1YYiws23WYYa4J6hgnbS1avGLFw",
  "key5": "5kAgJW8nVPMCgS2T21ZzAvHuNZocqoi6q3aLCc9iTPshpBfcpPaPFcxAfyKthH1sM6YKHAvadGcs4Phb7trttKNq",
  "key6": "3w5ZV6oHDD1dCWuFU5WkQkBPiGNTSpF6jrYUXHpZG1u6ZWc3Vy8n7JdgQ5TgSqMNXHDVS6hbZ9cTyRuzYnzQbYnB",
  "key7": "2nVXEC3SsFM96ZABYxbWk3keakf7U2QPv3HaM3tQooouCH2hTziXM5f4RknJ86jBsdkFyWbk6nnbtg7eTwqA7C2N",
  "key8": "5NytS8JXDnNteRpsi86BfRzNkwDsKNYnpqWL3yCDRbGWABRx5a8okHaBDmj3o9n8YsSGusRNcyiWExD4cxJEkYLd",
  "key9": "5ZpgpJDAHQxJzRevUVoaufkwGTb6bA95HuCyCyCwHFETCMH8mDq8M9pp5zMHvTT6Z4gykgWup8Rie5d6hs79phjF",
  "key10": "2vuEMduM4sdXFhDfyd78goCobw4ePQzwAqTenW5366Bs3gEtop5f13WCBZRmpLWUZCKFV2dmVefirr7Ly6PM3bgW",
  "key11": "5dcB8EmXiuu9YUAny9v7YszrXpoEd2nBBEPXGu5B3ZSpUuCtNCShAohsHfgdrPQoQQKmsDwZNjCzpnHhZugYi9hh",
  "key12": "5R9zHtepYRyu6XhfF2EiGApfCjjnU9RDjTLAwnj7kG7EMgZ7uG8qu8G53xQ6YRbLcczmWnXATfjiqeza5AdCg7E",
  "key13": "2maJj9dHSuVAqDXkcwNGbuRZ9UXLbekDevWqcvaEVwzx4cH6aSiNtkVrAvhm4vsBaZei5neH6zQatGRQJ2Kh83WV",
  "key14": "3GdpB7Z7AEjWZKbWeJJArrJ6vp6U2GSWMfDEz9nqfBTpDb34wJtL3tEm1KG3D7ieesFAWMmWgYDFjL2qLVDXgUqE",
  "key15": "5QqQNsLdaFnGZuXpArRxDEK6wtZMLmRWAchWsxsf5jBewfZid8X3E5NfHzxXpgTJtvNSx3yDQKwuWrMFv35cjRK2",
  "key16": "5iNvjgBzwRp8CkJJs5eEuwHnTTykseYPzCbUuqFcqbwSgvtVdN4e5PKqiL9mt4iazLhhL3fH2oAygdHFjJrfy5Aw",
  "key17": "2qYaatEvkrz2XAAdj7KtttJk8HLmSaHiHduv2xBHDwy7jT7RmCyx1yQxb1EhunFM9zjVmJD1Q7VKLmSUr5NKY6mr",
  "key18": "3B7gYmb2FFaFNEj6RjuPEBkw1HPc7FZDSogioStnsfp7UeMokEi9HPzstb7i32pGYeq3E6ZjbojxhNfzKSuDk1eA",
  "key19": "592og8zzR1EVe4FvNHNAw2faLhjhMUasUDUvYML1N6rsz4VVkJWmguoyQUUhuN3mndEKWF6QyPMZNkkwSFht3MN",
  "key20": "4b1CcrAJG1YDN1isqxNdrtSH9wzZeEUuU8zp4SDK4ZnPcPmCsnfJeT4oSiL5ME7AAMeu9i6Nc7u4zTvuqbrUBJj5",
  "key21": "2DuVmyp84mxJo1bLg4Bh6LkwuWX1KixcEciTeVy7nYaL4v5yHoLJXPgZH74G3sAPLsvL7sevhHz5LzZrEpWev9Pn",
  "key22": "5d6pajMWbzMSJnc37uz99nNGmCLkdRegXm8UDNYYiBkUis4tDmokfwqdKf7w19Qz8XTHYizhc7eGZi2VLVRsgV51",
  "key23": "2FXJqvZV4TbUAsSKR7RWfABi3zxmEJAjVdqUEBivLverYD8TXbZq5twh6vg6WMaJd46Rtk7duLwkVEJg3PXAUvgS",
  "key24": "CeXqwi25GcSSHDTwwoc4PuHp75hfMXpxfJEaBkjAJnXRkG7jzeSs8HpCUnv7KAbpgHVtcw6DWU7tzgjChYb7e8U",
  "key25": "412iN1DQJXhjvmyE5ycrhpZuCg46DiUWfAp6V8HNY8v8ywy37aBrxBUWDkzURzKU1UyxkmF6fCpzBKFGujPjqyGU",
  "key26": "2PdZASNamE9SJqVrGnnw5PuDxA2sfhX9hF5VzDcFA41LCDKdt2JyK97DtdgbSPZCs7XHVQQVcXRSKycseBQWYS5R",
  "key27": "s6zyK3pFPq8aaRwjomQ2EgqXC5AgAAwqETQPRgbTRocpWxidcyNkmKHMZJfMj9e8erbi4xaBgVhAueeQR8rPk58",
  "key28": "2KZYQLf1syBuhyJrii6QdvQueKPMp5jgojiAWNamv2icNdHdQu6MXsDqLaopbhcCJQa8eBTxb8d5Avj4tN4zV3Na",
  "key29": "2HHc4ULhWRtqLyEVf5rf4pL9gwpbgCKq8XuDD1EJzKTP9mPDeee7EDJfoDJBiLAZEwucZ5v2CkjctfxyPdsmdqSy",
  "key30": "w7qQRb65gqD7owuRhiLZ8pVSVfqWeSadzpB6sQbDyUpw6Rj6kTNfMSekyB1JzhNkW2ZWu9U6p9mEd4B8mZM6bKG",
  "key31": "4idxQK9VASrmX3R8i5xtqVCteaNkoKLy3WbPJ1q3VY5CvruDkwgJtKQZAdYvVxyXSDu4tUE9GjsgFuoPirgGzGej",
  "key32": "iMrUQSF1rXJxEXMiw3GsRG5Jh7RNYmxRD2MqB4682QKEVaEbWSbGzbtKxVfSjEKJPWzi1KHSz3HVxhGCXSZz5X8",
  "key33": "5uZGXP7k5bXAcW3wd4CPuryRQWCaWSHVhL9vm6oGX6tLAYy7xZ1w6mXArsaaZzrRi2Bk11jiZCupMByc12AQAys1",
  "key34": "3iNZzQufh43pJC7AZmFiWQRdCDvxaSbyAgq7ruzJpyBkxR9o9CMQmx4zhXdKxGr8zcNLDTuHpJgozQS3WH43k9W4",
  "key35": "2dCDmbxL9aAP3CwRG2pApHpXyqYYKUhQV95qzgGens12mvkMfcgsXGmrMSoUWZVTqfiaEBxU9SxpTaucjFTqA9Bp",
  "key36": "2wPoRyc24mUoPLp5YcwiTuDMJdJbkaEqez5xzKv9CiWwT6f4Rf7urZy8CGGAT3ftvDen2CQ4fmMLeNbeeaSbK8hs",
  "key37": "5zHCLmjo7m9wqCv79XYBHnY5RphCexhPA979NMp3ZuftvZ8AuWtTLJ7gfuh6kJCHzuaec5ccuReaVPUPeiVbA3mG",
  "key38": "2wHuSD1AeUQZgfDjYudrM6NYirHdLspwaU5qJfTU1YEFw3JgTSd2aTJjT3W9yaHfCvzvet2RKTtae8cVoz6ACGY3"
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
