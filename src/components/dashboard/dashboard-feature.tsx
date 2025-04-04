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
    "3pYHqFiADLyw4ntymxT3iiVnt2QkfEf8bEpBkjFqokvxyUMhUwMzd4EqdAnnFWfdRjM8eVBoxeiFMKEcC6UbQi6D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ndKESZ2u4enshVHKWSVTjHmYZRKbsSAqimQv1KmCXnNkBJJ4XnBwWtftVZekXTJY7F3EGnwQNCgGyQ5VGg9sPHp",
  "key1": "3K4kfzUH8w5XKdwp6x474NtQgGrkLpREpk4yhwUEMpMVqppnjoVMAp8HZUSixzMwZ2ZMmFKoHpHekyJtnUa679Pf",
  "key2": "3B9sQEoDvhQxYF9B8zC26isDV9rRAf2GaaqfghBWSLx6mgTKABTdcCZzLDqCZvaAyBxDjuTz9yLXrrxoxS8qAygP",
  "key3": "4bLgVzNzLLDfFuNvs2EwdzcDmp3G8nkHzX5p2xyvvsHWrcTuqKKHkwKQf2SjkARqQkAvmePVKRXfuDwCZJQJjfxN",
  "key4": "2fH7GUgpLivoRRG8jtSMdsNZhCX54St7KQZuUTiaVwWMnofuvYF3hNnGNjsafF8gWbDrQk2j6t1B9ErJjSj13nbx",
  "key5": "5VGaATCSwJGhRNT7HuLEqF3pZDyz87ZmiCXE4YJAxHSGc6tYSUDdMUCLmCk2uV4z6yteTtvXTxb6sB8PNC6TMrSf",
  "key6": "45J5Hy48UzcRKtkguutmeag4amu4o75mWCx64QcLyaYU5tQY7pA8niKThUos3tbosbx4rvErVCxQQLosJ2ykbW54",
  "key7": "5oNykvNkUwY4EBdZy9VCs9d1wBdjUfWRYmPtM7HChTyZWpzRejhVTZD5fk3twfprdQQx9GKjrthGsZHxjrbmATfj",
  "key8": "4Y6TRfGzEufhj4b4EJEq23doXVtjTr9GT6v8ABJRqAmAATRdBbfyBEVzV3JAgzT6vmbLsUjNzsU2bDb7tVHZcd3N",
  "key9": "5vday7RnU9x2Zhz4Ci7Vx74tsjecMrzJE8xCFczDLZ4vPNrQyyap7X59xqDQ6ygMq75Tb6AXHKhHQoNvynt8Q9M7",
  "key10": "Ys91EtSP2y5pttuffdQH4r8tJfEwzeBxnTVHzmwA4dncdwMfjKM5XPVo912NHKTUPceHZtrcFHLSmvwFa45YyEe",
  "key11": "4VxLgcPeW22tHr1Y98AhNRwiVXdcFVXmDgM33ASpbyaZnRyEiR5FJkUrDCjA1in7Myven56SEycpCG99oQGK7kWK",
  "key12": "35nG2QRLH2HseAUcBnYb9x8Nr93CYm2t5jn3z4JH1WvThVwcWPgQJXvEK64tB1BKXMoSCCyY5VQ1zrbK8s3171CU",
  "key13": "5oYyMvKTapAkuECWTGh8PTuSd3gER82TXqzMiwDXTQzW2N3sn9NDqkuRFQnoa14E718nucpGjGEZQwywJ4nEur5k",
  "key14": "29E7gqAogpgKBY6n2JETMshPiGLNoXmJPNS2RN2w6k9KRdXqK3XANhTzpNGKmAcH9JjdNtDKpN6RyURf8L99Y7S5",
  "key15": "2rfis4QCtNRYSCxkYoKFFtERxpDbQLNE4urxLM2PpbfALjZREJQbez8A6sSP89hmV1WHjhaZG4aJFg18xoCUvQ5t",
  "key16": "36yrki2EoMjaSXBvho6rfGDPYt96qGozfF6C2g4ekyHNMGsVHbfySsL3zWSJ6PGZafUFYSvM33iAfSh3gedeZVDG",
  "key17": "4sLwo4vrZVkpS9FVPcnEbmyBSnkYMPZ9cBYsyeVAmycp74UWNEWLpmmmA3Nq8WWNPnPu6Fnn95PZW8p83QioRCC9",
  "key18": "pehjVXiG4CzCuZPhQ2WMBkBVvm9Um9E72gvKPNhsVPPHggJtE6eE9Nrapd5oby81GcDwYKKrfZ1um8yRt1eFJiE",
  "key19": "4KezTshVywsQm2gWBvE3Lfd5sZKeJ7JJa9PNaiWibZqCHwBCBQk9GEofRgehSoz8mPLHR7CcpYb5meqNmLERBQoh",
  "key20": "2nfRbzKWRp1HtePCsNNWDJ5TBgqFACx27iQebZEpJvL8zzQEgicQ6UwSN6EYmknr1YJw5Qdtt7BoAhhNB1UXBaWo",
  "key21": "A5gaNn1ujqAWDbw2ZxNx3aaJ7JWYK7iaTX9ZFd7w2UxY8Efe8u83zKEzZSzmtcVEfg6xJ34WDyCSyTPxxtvqykE",
  "key22": "2WaaVfnoNVhpAwa8ex2SPwHwzahnMCWrtKLKrXdxsVExGmoDXfE1aHXUfiJx5u83yBvBimcBJQRm3w5HBz1aDVFC",
  "key23": "65tZHJ5bDCdshNfMu1D9NceBZyDB3dczCafF9V2heJvPG6PzKk2jDt2hkG9w3ZgDeWzpNwNTXchLusU6P91gzXec",
  "key24": "3BofpNWem9NMwQHDWmR3rvjrqJkLVDZcdH2bnkRuzfHbL1QyygD34meWDLccUBWXbmZt3ujfud48ZHrgzqKeMKE7",
  "key25": "2WxEFP1Ydzz1exZgSJDMvAwY6LkrnXXPsKWGC7E3Nh4yLnzKXG9HXqTSWxHSwYaDZRvvVVoL6sbq2Jz3P3hLUZTw",
  "key26": "6qWqoaXatiJ5V7xbRzPRRBRhViKyuDJMko2KJErPCf8w9gCuhDAmrvjs9FLv5uqbsSiZHTRB97hqvS9n7mJeVCn",
  "key27": "4h58JnXmB54j63XrYN6zWs22LHd336BFTjS5v7XCpYaUyFJDuhEpjVJzWAqhNpvNf2fnoVeiRUCGifqbQk7f6QHk"
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
