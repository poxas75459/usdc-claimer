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
    "2gfaM5Aoy8pkgsNwoZ56YgeTgBtqnhXnQ8mtThVrXkquJY9p5o7yoSiptyRcJBRg47FHuy6P9gap2p5LwgWpTP4L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zVuCdmgKP6pm9pd6cVGmKKbhkP9fQ2vJ52gE2JGYB9B8WmtmKQVZjdTgqLBDfxCyKcGeKkQRRhXsJXZ6MJ6B5C3",
  "key1": "5bWjSqnVxZHy2Yx3EFMnayE63sVD4x6Fn4ra1BdFNe9kbQUcVUBxFBGgGXHT4e3qbNmeRUid7RwnXi2Lzd2uAM3",
  "key2": "4XhUJxMJU9avv2fVbpPdeibCrahwkHiL8XStw73J6tJFnTfarkj54KKDmHePps6DnaViwGfozTZmjMApPbV2ridF",
  "key3": "2fnmyUQmEYJnWWH7zRYhQ3iC7NnFP8ie39maKvjKZu8HgtNp44BJ6LprxZw9YSUXHS7svgwmZ1LAJU1dJGa6gX4p",
  "key4": "5UWZBb7v8YhCCQGQvqVCsva5n3eqQW8Vv8SmCsxivwxRfrHnMVMFs678qTpqYHST4Ex813TP3oZGVHjBkRhRz6gh",
  "key5": "Vis5c6Xe69YaCSab5VSW9yKFA856N7VXXkwQWfVMgsvbSTMZFyXQzhcwrAzLri2ANKMuU7dfwEA4cd4SdU3qthm",
  "key6": "4imd1skhA7VsRxgDzBYdei44C6igRNzpasqBvYmx7Ajqj5kbhKNw1QtJX5EY1sFJo3sJLibLV34WGCUrT6c4Xnim",
  "key7": "VgVoQuuBDqQf9HWfUhywshuc1bnEhj2Hd5AZASC4xghm2G9GToq8kaGcdTRc5WGk6AANfNhK6kciVCMGeqgiKJZ",
  "key8": "2EAA3K1F7QuKDy1KSGfY3tkoexWBiostfjFHJ6hZVBhszLLoZPvcSt7a7KPQjhcP4CPeaXibqtj2BAzqFgQTpg34",
  "key9": "4heFMNmzEhCbwmqvKnNUcu3og3bPabZGd1wJ8AkNoqUPppZjZG4B19jtQruDvkhTgCkSUhrw6Jq7VgEAotCRtU3k",
  "key10": "33dH6uvH7YbYN7VJ3AmCmuRzt18D3Uto3Fcw3ZuMeopYooYmccWUDsproV5LbWLFdEnmmEghHyGRv3dUUucuFtzB",
  "key11": "4EQs6aZVHj9Degb3KHXWg4XNtY3GMyaeXpBxxxDJxdoo7bYqykux5MmaLah2FPawo5FThsbLkcoizzM2tdQYFD9D",
  "key12": "4USNcZQasyFnh1HK7yMNisGKGZA9izpe9h7Agho2e5iJUTUT67bjGUs8xfN17hNwAxmjEiYMyfkRwLGn1jQAEoom",
  "key13": "5rLF1rgNw9Deujz7W5zdgA4vsExqTHyoPEfp7uy79KXkGrx6yTs8jnmdvZAAuqTwxpzFfQA121nufr4rZnUirhg8",
  "key14": "5pkcgBeUVArKLsaUzZR8DyrztVzwkqEaprHisKdxeUm1vjmBYb346hSzVHs8jGqpRBqQoA7yaBCyvFLz5zeLJE9v",
  "key15": "58ooEj6hR1URQwhJwMy4jjyEp1HY2g16ZHeqApg7NfJK8vGAY2XARGwtv8MHctjwgWcGmLNasgXZCqxdRz3MV7B8",
  "key16": "41986MaUq8q7oQTL4RAGKy4QsG123wjtjmeV5VZRjdjnBUU2xMn2efku5Nb91bvjvxf7jiDJGkwH5G4t7Dy4bHiZ",
  "key17": "3PchU9bKAA1MEAjnvgURxo8gGWM7K1VZx2rZjZAX9WsrxXfbWeEE4wTwwnEHXj7aDwexCcobkg1BX1hU644xP21R",
  "key18": "2eFAG5oWsKAkMqW2HxxLNw8V91uGMFF6Tj1GJqzFuSCgpCGqUzDfaRu4jw88x9sXxB7rDN5yJD2yYFoFcs2v6PrH",
  "key19": "3wjsyZ5X3b8dEcea3C5D5ADtvBFwmaTRgaeKK3TqAxet8vDG3XXxMkA2kiaqktPHnWcVcd27vA7v9i2TWufNaoou",
  "key20": "4eozY38cdnXvACCGfkaFefYSyoUkjKXS2cc6U7avdzSwvQYbtyTd3nb85848V5RhonMRuYZrMK5aqytaq3uyQBQ5",
  "key21": "1pSpBUt1YGKnSco2TA9q2NWUHLEppvZjjLnxnpjCzjsvCKdPdYVaCNYLJjxDWhUdSYdwKWdiRVrfhV3p26Tr4MB",
  "key22": "xLSMTPgMtBauwMRTDzVxXA2k6cgWenoDPCNRd6iDHqmRHJrYHLLT282fLQ8gCexALg9gLn7sEErvPu1Su52BimG",
  "key23": "yd48xwgB3WYkejBcPAu4wcVt8rb4icPhsYpuVuF8L3sBphvZEEBvmwv6g3y4Z3nBGLNUSXZujBFPHTYeSwJe4ZE",
  "key24": "2WqxSLDQQTxvUPqypQcD9AwitWTizL96gYpm9fHhDEwu9Fg8S6S5hYz1X52eRviTF9B8M5TFeWrVXh1QqTYUFTdV",
  "key25": "4SDMK1L2Yrpme28fXodZucHkm3Bdzgwg5vdACeiBSiKLfWTSc6h9tcWTReoWAATXH3GrFCEUZv8gmA2QFJws6X6V",
  "key26": "XvCpeFucaF4qbUdnJz6jy8ZAXY89ZBcdrLjEWDpndDM2gtk3Xz8fmSyfnLYn8gje3gz9xc8aqnNjqZohEUeaQmZ",
  "key27": "31wmqnnvWVfS11bb4Ny3aR8QnrS52nZsY3GH1qAyhD72XP8pGpczokHKjPHE4yAYXACGsErgkiW5QQSk7PCtGvLw",
  "key28": "cS5ExF98LF5CCTSNuNpBzJqS9yAzXYVvvE9z7mmWmaVqFqKy6Ny3SkrJ6pottfUNsow3vDtYAezeVu4GzMHbXUS",
  "key29": "5kPZgiczvUbxSJ7JtH1De2KvFTY8ShZ1LuyxUZvALJAGvajfuWoM5Ne9n7cedzS7ygGcy3QSuRB9Lmvaw6Z53EYM",
  "key30": "5KqYPJhct2uTCxziwA1F1f93kjaBvQqp4emFzKoaNKSjNTjJxVd1QEBoz1h9YCvyv9kydvYxVXhnMS6t3ycaxvPd",
  "key31": "2AYBTqH47NLkT9Noo68jbVVSERnQ97Mb5PhaTQubWoWdaxHzPgJGmyPBdZqrZAmd4a5LpBiVv4AYmbi6AKjTEUAp",
  "key32": "P2GriMXHQij2KQaQRojNFNcW399CZZRSRrSPv6cVW6bnjmszf6f77Ng3uDjzFphMRyXGMzLagRpVJHymU4kbvzB",
  "key33": "3EYLbnms4wW2VdDA78kxRCRFTX9GgZw3A9djjaKGkGnzyGXzahQjjNypQAmPDRZieB52WXae9QfK72GNSjiYgWhy",
  "key34": "4dgnHjKrGoLiSrGTaYty3y2NZdRfRTGXYLBxMRi1pLTeuGCGqAHV43cpQ7mGGDAbz93Ep1L397A2n11oJsLEQXxa",
  "key35": "2gBHThPQSYN2BcRtf7ChfPowtGLxhCUXMdDaPsy2DD15qpditiXMciKzZUj2whYLniZu4dsa8MywfZRPhrHiVCaQ",
  "key36": "2scQUKKRgdYGFHVH5EXCbM1guRgL7zAC3879T7XUyDaBXRAcAPAUrQrPXKSXZ6w8i8nRZE75ykaMpjnnqEsHNryb",
  "key37": "2V5mYCF2ynRo9rBnBdQuj3YH2npjMfampf6Cs2cq5Ac5HuBcamqrovjw6VoHPby6d7UsycFGQvvSNZw32hgrCeid",
  "key38": "4msWs93B93ZdCpmDQoa13hRznjuGPmmqH6gMmEPjawrmNkpDXtcAupBgsVCwFkA8sV2kbezLVD4zMDQoQTy4GEC"
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
