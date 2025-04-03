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
    "35zT7axsQAoyqyUBbrAzGkcoSSepDzxDvogaiD2f3woekmDTKoF4jKPfJaQm3J9CL9iScvQnikaXQr9TbC5h3VU9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QtigjVXZ41vRvWuLvCAzPuMj9usqAnzcVao9esrjEeWeZy8erFyAS1tWdVGmEnwt9J6M3L6gafVEoPkrvh52mgX",
  "key1": "3VG7QD5GxcThPD3dkueGJpmamivxeNVyXLALwjjd35v1XXfi9Ca84pHRJxPhoBTmE7tomxq2rrP443H6YSUevsNn",
  "key2": "KAd6S6zDukJ6pbzcsJe9QQH67NpsNbtMtkSkqr1xoGXpf8ubXTpSFEEBwBYZ8XqsvF2QXoBi4vGSSGKRgHgxpER",
  "key3": "3xrM13FXGqfzCKjrNRHgmXRNPjQM3Gtd24oc2pNZbKPpGnodnF5t4bKcPu3vFWon5Q1YjTKXR99B1bpUBtHwqfL1",
  "key4": "5R6Jj27CHpdeN9yYFN8KNTdaqicid9NThhtcr8MmBhRY1mnU6sYF27wyWqQDnxP9Lufd47QAaf4WewiXSxvUeXpE",
  "key5": "4GUdSJsJTV1rJAkPe6RkzVg4MTLSsfWREhkvccvZWUC8MZVoS7RMKqct8PEQGCDHscvsxG9hxVYZ9dSJ8AauE7Ak",
  "key6": "27RsrUW8vEVTRt3DnMUSKbUmhViPGF8kv2b6yh9XKdLKJ3iprGtDGRPMKx3bnHMVSxog9Wc4e2qquE4WqWvNw2r3",
  "key7": "icYN6EbJQ8YiGKyfV6Y7QTDc8gCpc78i9HLsx5X9VdfDFFhqqVYGhWkjBUQscTaL4LydeSgCdZSMRaFSVium6n6",
  "key8": "3bZZeJHKRZmaamhTZ6yc5ya2gZG1eGwKGd9Kdytw7fj6e4RAhnrfwct58FT63W6KmgXBaJd2MrSm7tWF1fcwefos",
  "key9": "2ZG3K3F8HWjC4n9bGQ4Uspq5m8WoYPZDMBcymnvHfjjCz37JPrJiRqhBXp53jXrh4YuDmyuKQkaRr6fwyUPK1rH6",
  "key10": "2pNBeg47SrMMLGYuCsZueAvtYY1cHwpxw6jzhDRRuNk5YsGvpNMxVhgMQSYhhnyZEEyUu4ALaS7kanka9JEg5FvS",
  "key11": "4eQcHJpcDMFw3RzGHBS7dYqdi7KjDFPjwAdhmR18FTw8dHZDfu9oMhx9CmpQ9dWdUTHWRgR6qqcQJLkHpNGJB3mJ",
  "key12": "3vzr7TQprrmKhdaH9yUkoZeE3AZA6yQTaSLED4kCMDH5HUQpx346vnPKw4Z7LfXtZrPBKZWwcViaTBKxT5996k3A",
  "key13": "2zVjUDGN665dyJW57nB5y9gnv4Xapi969H9ymXHnPhk67YQuipXFb33KTMwFxnfo9LtJ8qW2xTCFuGMpmiHCDzKD",
  "key14": "48tGPXkkztoP96r9YmVB4GFVH78cbtKfHH9vjEa3wK17X9BqiAoNbGVKJkFCNGXnkmBv7fCwnUggsngAyNhmbMPo",
  "key15": "2JtXtcwruachovb3zaNU1t2nVAj5itz8g2y64juiTfBNa2tTKQZuh1iXv8CwJCujDT71tRMKAMB33weq29Y7BbdX",
  "key16": "3XK9xbNpMDStXBTmUvm4ZELeTfkxzv2jcbEBTZJovFVnJw2dViAwhy9qwLujX7PAM8ZJmdLpepSk9wsLmx6b4WMm",
  "key17": "22o3i1MoDNbrpUyN9ngYWsX3wX8wmyCfYenvH4DAvmTdp4QY2apV9DS16sP92fKaEMUv8gvKrLHF7WBUacW4QnTr",
  "key18": "4mc5RUGUAHEapxkHXs6h74AWHTjd2j3qvaxF4hL8gi6B2qRxzcnqjCqF4XoGhCJybC2kLb1uayoJcpJ2ts1gvoTP",
  "key19": "5rbm1ZiiYDp6SPNyDZjMH8JbFi5Lm1EDwYnC9ELDicg7aeaUNCaqQtz8qNFCMMJqrTyqDvMjwiLdRBhLjJtqUTXG",
  "key20": "2f7GkFMT7zSo8aBtFsRtbqN8zdpzGKdrFHDUvt9Zskxct5fzgkYKCDUXF7wwue8ZobmH95r8Jm7jR3PsLgrhsyU5",
  "key21": "4FqWzUE9Mqmi8mdY26kQdovX991m5Q414DkyyjokB8guo1nxDyxByAjqc5hVkdnBJXcWouy8Dc3msABLwaLZqn4W",
  "key22": "3DCGV2mQc6sGWtDmc3YBkvcXnymdVzNhMP1jBv5aZ12zg6xeWe91n7N6ic1ByR2HZ3zHg3PoCaWJocqHGHfwkmKK",
  "key23": "5gGNUGGLLUQf7F974o78SEY5Ypj8u6N5dkuGv3WDZNPfoTrVUCifn1KHvptT2uDPDvWws7c8tRdFHQ5M6BDAhNHn",
  "key24": "4spJbkRCL69YZbCRm3Z6VRrLAxNwto3GV3dhe9FsiXU8f3YnrNdzChUvwpEajNPmHDscry9Yyr6pafwYmjAvSbq",
  "key25": "FsMLQu4YYtp5cEhWgwwmJzco3a7rFcXE3iS4g9qWzAASYYfp63bJUe5UpDR3hBCLrvgpRKbA2LHCecX7nJ67JJV",
  "key26": "4Qs95BEDnngBTX6n7UzgDNqphC6NTzGCUfkB3HxQgvcj7jUp2JKq4W4sppenni8FQoVA16SuFjhzY85EZdfG3YKV",
  "key27": "3UTWggcUJGZya8h99FNEK7cSrCWY7FNLWh9eR3z91tjBsxBf3Q88NxHx3Lj7djNNxrZpCUZCBhHCNNyf1qiREzLj",
  "key28": "2ArFSDVwkxVQPFyZbDXEu1MsaufooY3cNXCvim7KRzMNPNRy85uivNjouJvwr7qHaGwXcpS5Ks3vJHqJkh4UKFYH",
  "key29": "4GYCCGxz8KqCeJU8BBf7k3ECd2yLU6e3B1wP69cC3htRrQFt9i24jTbSqBagywan3krr4pcwkfe8uZkZWesJDFVT",
  "key30": "5PnUapvSzmJF2KLm8wajSV4qkqyZQ8Zo77Tun9UeHoPzxN3mEFGf8Lf3aWoxMeaE18XVtATyj56HsCaqKAjwhmtb",
  "key31": "3rPbQGkpQk8HFktUVvUH362xCVYZEMcNT2NVy5trNrX9xJpRFuX13QXGyTi264bqE3jFUpAnzFtmtaL5zsr2awx6"
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
