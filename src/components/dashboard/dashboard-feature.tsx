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
    "Ttz3nLjKUnxf6GSqk5ycNBjZTVxgEW1ZZFBTtZMhzz4ScjeGNrqMttooiE4CevHQGfHsJMiq2PVtZArRfzYAfpr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QtSrsvpeFVpFtqyc3Ss4RiYw7UN95iEmgZV2iYGum2xwNQR5ZpJcK7wLEqEm762R4BQmduMTng1EcPH3SDfTXYY",
  "key1": "2XW9D4MiM5bxCGBqpAjtpy7jAjBsQ9NyGQszkUDNLZ8fD3Zq2zPvApAvpSMYkGihUJztVqjFTReitDgAEzWFyGZM",
  "key2": "457BxQAnDmYpNVQWMMVFTcQ82ukc6JH1Tzhb4pKk4UHud5ZLwZPu2kcHRfxAzLFh8CeRf9iQxqRBuYA2572nycdV",
  "key3": "5GBw5h13VGNZ7f5ZiaU33AHvU2nydq2N8p2p2h9RqDfGexoBGM9HPBujohYEFPwE1CvUuZZgvSw8HcBVDHjBc7wN",
  "key4": "3PSwEJ9YFYevi2oaLZjTZ1MSBFTxCkBcHox8GphWptn1CGt9aAvuwzAiogdkLg59qtfmxTwQEro2KKiUMfjzMRon",
  "key5": "58XrF6AonxNU8x2VZrWesjjM2ArnKMYm4fbMFmAzcLadQqftnvuQjLAKvH5JNtFuXgS4ESfuP3wBM68rrRJYE67S",
  "key6": "spEYUq78bcCV1EU2fFS1rUkJvDDZFgVPHf9uE5c167ZaG3uYFxGm4Bx2XMMr8zCY8x4d3px3xnsDq51xthWDZSE",
  "key7": "5CnCPXSNvnLdNczeV2LWt4vJysSer8mtYX4oogEwygDaqV2tuAwfa3z1THUrCxZQUmHx6W5CcrBcyGvMwKi3eVEr",
  "key8": "4xDBs7M6RccLoL2JajvvFerE2eTwgietVBdH2hVLE49XBrnCDetv7rhs1DQE4ptQnZ7UbXVdQWzT382gYU4Vk22x",
  "key9": "z9bf2opVUiLJ8M3PZm5M8BwtbSvEJSu1kd23tEFG4CCSRNS5j5oFz2kcaqx5Fbk5o5j8YczSbnZpWJZXiPV91te",
  "key10": "2PDhibh4yqcJj5LXbscn89hVtg5rLg3n4FRMYhA2V3HmoqqD9fZoKrvRHUzmZ1KmKsJgw7zMzpS7TBQx6pfUcHUb",
  "key11": "5pTAyw4QN87X15jFhXhrjLU3PMstUJf72xsZgHmx9EmRCXGZExd57gVSuLu8nisVobm7UXby4HXhZt5qXJDCUaFX",
  "key12": "AYWqS5C4aMGTbdnCELHpk5NRaNbMjXWUiyWRuTqSjkz7CjmFj1xPBLL7Qkz5rsB1Uh4myQNuFmj3qfgLRkghaAU",
  "key13": "4gkfS2T3KMZ8C8tx2b9KKHDpfNT635V5wtjFFjTY6PUBuTqMtrhsfSgst7aJ5qg7MDU6LTjFJshmpJ9C3iZb2fAN",
  "key14": "2qrAhhEcwoPiJBxhQ8JiBeESBeXkUsQMg2e3HPaVa5RPPcYrVboCaVh5X5xFHVccBjMMfGe4mnKmseJzbFCiKcrW",
  "key15": "3ahQ3UVXjEuT4GkMyQSBuMJB5fgkBN5fKzRkjhrnfZRgtnwJQgGjqDu6x56LiS5qGmL6YGw6M1JXTtnbifnpZWLe",
  "key16": "jcgQq9SMvYXLRmZkGx1LPCgthKUQeLjWNQFCAKbzvp2vuvjum29NLx2v6KYN3EcYUp9NsjgduLVNPizb1neXAF4",
  "key17": "3ipxRzaP9RdAuBYGJoYjRUuvThKvTYt6jDsrxjPkdabCXW3JyZSZMr6JGWZwvJ5affakq23MmFoQp5JKUEU4cJ4f",
  "key18": "29t1jVFEQAcM1dpyNrZpLfUVqxRgw6yGuRjQtDncdEsk59unBy9vwJbnkVujToNZhVLaX8iK5BP4BfrXGrNejbCx",
  "key19": "49tGW8PHHDejGEeogRgZ9Kpp8yS8eExisZvMfYFmGHoDdNKc6R9vyhxhHtj2jan1ZHa5pD4ACHXBU4PT11qEhzom",
  "key20": "2QxWTnMHqYwH1Xc9XWVxftY8Vj9uh97nAjmWT2RrTF7VdVAzKT4Y4Xz5Qzjcitto6W4v4KUKQVSFPto8FFuqG1z7",
  "key21": "2ZxyNG6y4qxgdkAea3g3hHDVMCLYDg6squXDku8ARWCMaK2xgBji6ncaUWQuti4dj8keaZCgnwhwKyCxvFeQy5U7",
  "key22": "4o3TLvwt5xDWPf9QFpox4GTxYKiwmueazssW5UZygS3u24jYMb8xUpNX7Fb1V1sAu9omW3CdnUf5AWCDxqsWJ69J",
  "key23": "2TjRrKkQNKeB8AaZvzTJJ6cgLwXr8yTRLDYp2qgDVwiJkovQL5jppVM7Cb13QUUfQVpyy2cJesqhmJcYyjTzt6s9",
  "key24": "2aSWJRCqvAFPWV5vaDAFMZ5DtzXWLssPWHxRaoivVFbRxa4seuwD2pV8ijXEWJnkCP6XB4SYaSNcXXeiFjMb237v",
  "key25": "22PUrH9hE1m2LCE7v98DRuhF6NU3ohJZkzhRHBQVBdASUGjjzfQGYqmVWK5fBjYoKkc29S4ym5ywGSuL93mpnxK6",
  "key26": "2K6Uc9VGNrk5xsN1T5gAPNjT9rM3Gkt7wwQRUHBKnv7C4RE5vGaCCBkEiePmPXRizgRGb4ry84a2b7PseDmuW9MA",
  "key27": "5o1TxJjw7FcuaFFnREd81Zr6DmKwyciHd1qfQgq2TGrZU7TcqbtkxRct9csEahhYsnzjZVuMbkqUT3oDxCAXfGbU",
  "key28": "4wC7mrN9Wp1ZyyPMDUYyaUxZJqE8X9vQptrE79Vj4UzDb9n77UEZiMh35LxtYqJSa9sMSUxDitKBRRGFv5LZ5g3k",
  "key29": "2ps88Rn68fCKegpQorcb9RZUZsRMkMPxgGWeoNpqfiof4KKxdeXVQvfkiNSLrZhUPiJ8LEwsHExGWo3uf8QKq8f2",
  "key30": "2ZQJDjepq1Ac2VGhR8UpeZvNswcKv1gCpgkvana2BZHH77QfAZEHxMrZ6qdJt9mapEDetRovPvXg7ezFRBTf783c",
  "key31": "56dNxJyTSMsr7rvYfvesaACVT6VpYknWzLNiTMFkCs4tNsBTgorsXdtZfp1UfosvtyKn9ZahJ6ktQxoRB1HKeRf7",
  "key32": "5u2XdBdFcZSqMmjqcefuc69zWLDFAkUideWwsP89KZ69VRMcPPBi4BviyuYPhXcDP9uJPhqaVpuL6MWVRxtBVnQ",
  "key33": "2DFuT9XGDN9CC5qmHAEqfzjjyBbpfrUkFqhxC2jFAXKgFEjptExuJaWDe6VdFes7sNwrEQMMfGVUHmGoL1HEEuVp",
  "key34": "2Yh2LzFMYDyjYqL6UxydCQSGCNvstsyBXpek4VmRJcrBVZUM4FQVCfXbrf55zRxsnXrPW7ka9L29XBV2CzdxFaHY",
  "key35": "5abbL82p7NnYnoaLbiBHJV6xyfv7DBDbChzHVCgjLRrXcjJqfQbcQRS6cxCoU2x2xgzDkov2UDpUdLgfB74ZJdat",
  "key36": "65qnHLGPw1nXriS6bhNt3wpkfgBT37fbqF6QmuPRDXm59YPFi9UtUEmX5JLYKbz6ggtS2DuAHxSZNTTtgqTdBFTQ",
  "key37": "JNKQXtb1UZymTJEE3KrgmFjqmRcyVMtkDunaFro1NUFvfxbFP3kRofcAdXn6fVtN24E62ihGnC1xAweapTuAqZM",
  "key38": "3LfDPALd6owfGEyuDaDj9id4XDZyJn5Ybj4UCQGBZKNeRmYZudUAbfNM1sPR3qphFkLxMLUvtde5DnFgkXbqawSZ",
  "key39": "1suQEaiTgyK4uWP5PNuvfryhH4VDX4PLJkNTvRYLCRNo8ognVbCNm8aMFNULrqZxeFLNHhij5ZbLcphHjjFpWMu",
  "key40": "3eqVPLToDbQ1dp4KAJzqiLKPrgAKkfHmEm73zGLiPUnv81ZJgknxKtCJFvNbZGhibGAeVNyNd7kGud5rpanz3oc8",
  "key41": "5EHSXcFNr9hXtuVWdK1z3yHgjZ9Sdf7fp9XdoaKA5kwXNHAM1XCgckNDJ544zfygSWm9DN6BSycDyjWJYduJxW4c",
  "key42": "2iTdhSYMEXdSVWt9g3LUap4APYy1QsF9Lt7mLNTWAmbbkd9tWBTzTPtAHs8Qq1dYvxy6CeJ4znBHkGm7x8Zt5WoA",
  "key43": "3LwSy222rocBnte1UqT19pmYdGzDr86j49u4Hwt6PYdM7F54eTCufmnJj2XuQqY2uwGYJLnzKjQjoCDC76Jd1Esv",
  "key44": "2a7MGU8Yef5RqDGPGNRbdFEULow3jLh4jCvJJYPeGuaTyQSSpjcf2W5bneWeYiJDoRimCHjkciadWBundFvZEH3F",
  "key45": "5H5RhjbhETzmx5Mnc67Da2yJHo4TL6ph1Huv8KMHWbx2ScX1L7nKpNVfi9JPJqqsUmbt7oU6VFK9RfDAnt6YxVEK",
  "key46": "5EjUvb6JjNC4SisZ71LsSmm6hzG1YgEvKpvtSbEh8pz2wPV2YG1ps4xVfbEArNR6aiGdg1SryeQuqWH1hbDjhe4Q"
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
