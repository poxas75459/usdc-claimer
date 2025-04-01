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
    "2EQUbhPWum5rfj5JAhRaremj5AhVXBoYbkriWnUGvJGRcB6ePKpDZfyajjcJmDmZy7MAevyjvisDngGY8uknEx1K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TvfnNa1uFvvietjwrr1dYvQciYR369P4pmhsqDLGKJ5reRamqYyJ7qxfuu2itQ1msM5umrbVBvG2z4GoxMEwij",
  "key1": "5jDUAGaxLQj7Vnpdj5F2rTaufH1tiCNBDnsaHgBDD1PNB4zkMGMKFarV37c7gFnkKCdmKyU884qH3fFG8ig3SPzR",
  "key2": "XWxMdzY4dQh61reddBEcVFidFqda9w7eELLafe94nGtFSfnJbDowcT4GZMxRZK8Fn3KzZC7G8r53cLk9yEJ2TVn",
  "key3": "A6MsLmKNHwXSB5YQux3vEwMTX7pwRupLoCkvRWDTnZzbycxsbLEEPwnjk1dK6tJrZR3z2xAvACeRqv1xkC8Th35",
  "key4": "Y5hYyoLtvHrYkELotwMU9NFe3GidZKrrMKzhRVGKmvHHBaM7q6gu3eNvsKA8w2pL1W3EnsSAw4YqyUaai3BUkAQ",
  "key5": "2QoGUzhaKYZVMXVe3VbVJ6DHvxt9wfrwLdunXX21y4m6KwJdE4YUaUupq61s9pcShw76dK7U2ZsYiFnNfaF9PWE7",
  "key6": "3G415BC4wEgdYx2LUmKELPrmjMymDqjdweiXgG6Nb5HEy82VSJuYf5ez9TpdaJHmuCd3iqdiSk6Gw9V2BLvMTbqr",
  "key7": "BnNTXS4Q99TXdssYpu4GpQFkReqNh31tJBL6jZfRQmjxQTnTssLxXdJZcVoVvhXwPqPhjif2K4F1PkwJUeHyvqT",
  "key8": "2Uv2BWnJzeWmduWZnKJDjchbjcQE3ZXvY857LNC7ALNBCmYmtYkTdMJt7MEsZLDkfHdtEbDxf4Gp1CuHqgpqoMYY",
  "key9": "3zW3AJgJHwR7VYeBXJRArUSxX5whQgaaXsgxSzj5gbu3KFijEZp7ULCmS2U8rP5KQEihxGgZUnxPuHrvJNNZLwRU",
  "key10": "4XWQWxae2Qz4rY6nC9Ed1km2XSrYprxMdUumKfj7vH7QQVnkZcx8UMTu8KyFj5YuthVDEMig5Uzvq1PgzKzX1dvw",
  "key11": "678uhYaBCqNcuAtxiQuEaZ7Tkw3RxxUZoX4d3TXYLCRkWBJgWw4EhtEKnAUUWWz5sW6ZP1JfEBwCsz8XD34GPadP",
  "key12": "33nC1hSBT3vZtguD4Pcr91QYGYxPquZLg677oAjJRyqK1nRwKEw4Vn3gxMLdfDvq5Vi96r33UPCK4nLEbs6r9cx",
  "key13": "5aqq3WvkQZcmxpNYCXSJXfvYYN84S1MmBbzyjvneubU7DwfGZosuawisr4G66RhCkexZytigXuUrQojDDMS5ffPq",
  "key14": "9ULR28hr8b3uiMWE9iCL47V6mMzFa6Kj4ZWYWUsFhKL8xaL5EHpxV7PEynvsLZ9nAVouxMSFYN1bBRyvLi46ea8",
  "key15": "2h2YYnfh3YrMa8xGxDgQXnR9j2yaDjigxNwv2fKt7MWnHgVRD9EbAgk6dbar4cxV3TsasjAZQemiozQ3bZg5VPkN",
  "key16": "duqnA1VMbWoaT6kngPurGubmkus1aqrkepAXW73po4eihPRsYH7AVFoHrh2mHAc1midHWSe7dyFCELmuuHfoezH",
  "key17": "5KfqzwhZapdfMgyZWczGcSUky1a1S4P6TbuEsHDj4YRawmDGcvGcC1GgaAv9qqaZTKV5jtugYEjc9oYPV4dCozUX",
  "key18": "4b1w8MRUxErecVLvBxBgiUBhm1fTG3dTG6iG4C9Cz94wQd9xvNnPpt8Zy5kjhaBHcW29T7i9tQ9AguFAqi83Vuxw",
  "key19": "2mMki61miiMhX6pdvuXzyaHvmn4FqtBWmztEYFLo1hF9q6YF7zx27LKXMvA1WmPrXbnbBw6zHNaFfhr15e4twrHq",
  "key20": "S7qR2zJi4CeSVpVYiB3RUEmCkFFsjtE4ZLrCK1CmTnohZpZN8MPzUjjdMA2z97beXFiXRVurg7uZcDKtPEdAgf2",
  "key21": "2MzkYnApTYKQRhxVkcZHiGFr4SmiMapLoDYfQfzfLVQdHVCTe6CJJx4EeEePhmRRSRPFmmBXti7hExtH3dMEmTXx",
  "key22": "2prGtJRmhds98wZqZoJNwAfJH3ykbzGhLzR1W6TQZ9WbaM4Dz3ksQxPVfsSsqJ24wKrnia4mgWD4iemdJum8CHvE",
  "key23": "3cJZoCXwxBcgNRhcuhG7JU5v4SnHJWXCWqU53ntbzm8aFWXve4dvpBxzmouPF6XNTFR1mfo8rf8jA4TYiZxJeNid",
  "key24": "5bZwsShD1C2eKikxPZwAXLrjNMKFgshoJPiXPFaVevKW31FJmRuBBDfcF7EaM4knu3t1z93PCDAuzUWW2BHP2Akq",
  "key25": "4XWQ6PigDzdQdTH4dEAVerWUAuT8tYohCafVmVa5DdQhXCz3vjSUxPWZWmMjd2hrAZWtsWjT2tHBJqQU1ufdYYcm",
  "key26": "4PP85gECajhcxmgVib8miKQdFq5SpaAiPDwB6BJqcSML4tW3sYw9UGbMzqj5UcnVhop72sCzDERdarztzGnNuBQj",
  "key27": "3NsU5eJ7A1guMwwMhsd5JsghjgLncNF1grZ6tViyKqpJQm7FctPdHQdfRAzXEboaeXGdnangYsiXNgHKbEyi8nYf",
  "key28": "54tSREZQgs55BAk38nHT61fsTMUqbLbhpuyhX1xTUp5qqtZhQesi3irsGqLCm4Cbo1yvaz87Sbc7xcZeD3s6bTFd",
  "key29": "5guWNsZeKWagBxq2L6uB1rpGo7s5SHweF1EpzB9YQ5y8n1Ud7FbjiQGagx28KDmzUjbSM4iV5CNVqkWVGUvgnyWu",
  "key30": "5ZdZwgL61mmdMcAmapDZDmiVZASZ2UJMHsFwKNSfHDSJXZaFtBHqLU1e64hoQQ3TVE2uFBvKZi7Ky4VMJh2uyT3t",
  "key31": "5iNGZhvYV8vGmGLeKd1jnSNUVWrv4Yqa4JFXKEKYT4SYS1tMXCuHRZr9yjaeiVYGGJBVvLAYkWNjoY1Cdpq8XB4Q",
  "key32": "3A2S6toqxVFWgEdPkQ4CzaSnghNPz1rq3XNpG39tpRXAc2p1att574Ly4G2HPZzCTtLBTQDrvFbcNJYYYAoQTeBZ",
  "key33": "5EhD7kx5bkhfjnhLNdF9qyDVha1Z39tumAjZ2d8aFsxE8jQwKGLn3QdQCL9rxPks1rXVFDLV9YsnGdbeigQuW3Ff",
  "key34": "FVFWwXNuSSeJHNcgqbVrY8CwnV6HywMs8Et8CHRqRD6kg4VRFJQUMhvUPgAmT5MztjRm7D9EbJyYugNRHcVMs6w"
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
