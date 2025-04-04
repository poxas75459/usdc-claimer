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
    "4fVBmYw8u4htmSTVbwoS3cWVxJ7rCCHiidzFgvmr2aCTXhxq9jZskKJYvdvSuvRyQ3146WHp7EbdARmJ3dxF8eg4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jr41xnbdfF7iFJk3JLfWy7kbfmWLLkiexjYry9swrgAs4hTpiPREsUc1GbFegnPqGvDrbRzSg92ZrDFAmUGxNZ4",
  "key1": "5ohut6tgstTRiiGMpqqYXTYGxqCScHixtzd9HBvBfMsxSALdXdwxZJK6jbEyHGkGozwG5hGQvwu1H1dAXTSnBKX7",
  "key2": "213y9PyAazopbZ16ywyvaSV3GtH3Gz6XS9HrnERbjhiziqTRFtwLSxe8QS6YGWJYeUcKcupsmEd92JwSU1pcZcTv",
  "key3": "5HRrvSDmcg9seLdy44KAj9q8FGtTxWTykZk5yyMBhK1hvBb6bWsTDeyujem7nDRuFzUeEr9wVXX9izgD2B5WTYLD",
  "key4": "3H2W34tNbfNc9MxTfQoGUS2xCTgbMFUFeUBKaGxwWGUTtjk7RyPJ12qBGZKTCV7PJquKidG4zDJDUsUqq7DbR8B9",
  "key5": "3Y5qGug5kSktBGGvXPnPRCPeAPYCvZS1hkW9Ua5KNUNxJv3eiVCjtSwdKdmc4ruSvJCqjfUWNw6C3cLZo9sWWz8x",
  "key6": "fnSk5gAG2CPM5gip6Atn84ghiXVmJKdr8hDC8eVjiUCbX53c7Wnr7LRqgPFKg98SR9NDZDqmNfTVYmxKrzL3DuD",
  "key7": "5E98sufv9XpX1R21DwPEkebk5ph2JwoNxt2XEnmJu9sLGb14dYiT6ZRdQqy2DUVXLr4qZgobWaoL66wWrfyNgijM",
  "key8": "5w1BCEj3wbrusZ74uYA49oYHeKYo84fCHbDSYyABcve4rbHPiDXKHBAk5mJ8gUJP6eec1mEvpSwZ6jnWYBDExGT3",
  "key9": "5NUZNGN34S9x2o6PUoUcjzKAqmJLQoVAkB2php4kCjDnghpHZyxqjgMDwtBP3ctApAkkTzzHpN9ztCZ5DsbzDLHv",
  "key10": "21GH6FH637ayyJ6dzdB1ZE9q6ry7bk252cLkhX7YWRXNdWSKpgM1GGZGpWMiwjiQT3oPQ6TRf6X8YXohDaoQA9t6",
  "key11": "4fca1WRJ7UfxR3jdCgfQaqavjqfb1EGvHGMBqSgUPgTGsStANUvRSLwDtsZygiTM5uEU5Nad4d81HveYLGrzuYrF",
  "key12": "5JR2NqtGDL945TaixWy2WtpAFkgfHSNvQzpDLuJJak3WxZjP5NowaH62Uyg6j1LTJV8SNnpM75dSqJAz5h2983gz",
  "key13": "kPDduikBafjHGhsmS3kQ1tMN5uhkhEFpb4bLitV9b6fYozzKRbKHGgvgeFFaHCaTvsKzg1GKgmHBmZdrzrSxZQz",
  "key14": "5KurjiMbqJ9xg51e4K1BixscJtXCvHUtsJMqrJurc5sivGF2Q4dutFc5HdwFGSYdZzPL7D2HVo1eYXrMvHe82KFt",
  "key15": "2HQ5En7ohr9ZwCWnvNK7YRy4z173CVjWKdKEitYgcEoVwSKnFdAWLpkmP9mzCd8djLCPeRU74LDvLvsyRVFddDD",
  "key16": "4WXkxUCcre3cMBTt1C7k3LsUHLzkdx8Crw9FUf5AbGXRadnKkL2rA4CssdgBN3o5S6oZLe5YUESBymndRxqFMSoC",
  "key17": "znnM7zwvciFzSBujujBnMoWKARqyFQjowdeR5s21W7bvA1xT5skYziiCEnBDq3ti1ZJxRsQgU1RRC9Wy4NxN6ds",
  "key18": "42Jmod9bWAGj3m3D5UyWW6eLUfXVeChLnNDwV1LQNsteFPFsvuzhegDFt7akFosA52ago1ngbUtNm5MtBpiD2Ekb",
  "key19": "314Ai5uqw6oq8ursZrddavmzNBhFMdEHfmYeyi8H2F3ZSaAU4L19k75Ty895a836DyUtKd2TSdXTJDj7wawbfTHz",
  "key20": "22ijiVka2Bc3Woc9fJXx7Vae39GxR7xffphZpeTVpY3kjDuyaGWczt3V645kJYZLop2HQb6Fb26xBqbp5kbLL3jJ",
  "key21": "4A91Ez2Y7pwjRmFg2s8erScNzZQ9FzZjywmWHUzmuXEFf87dKJYc7Eaz3Pv6UDgak4vcLP5fukMywZjxCzJCYEfo",
  "key22": "4mxdiJi3PoTQTcPsCNZ8g4oNmt3gLgXcFxUDJrYmL61JzYd2xPZ2QxuzKAHe1LCdmtGhfe9Z19i9Uuu1WDiTjQx3",
  "key23": "5GC2G2GZYEenxJjMbAJoknhFqYVh5MJN78nDxJpQZ2bak1i5vNT6oX9emYwrgTTH7LUtKYEwAgA1Rm2ccdEU4MoL",
  "key24": "3i9Nqz3VFffHTE8HUPQGacBC74WwfzmD1ANFX5GjympciFpDhyQap15mjJ3hUrwfdr9FRNiUVZ7iDnAVJjxPfb9K",
  "key25": "2zCK7PVzWEdmnFzXbZxpf4hdbFjVYogfKSwT4FhNvXUTVEtyh11YWepPSsgcQZzuPa3PoX8xCXRer3joeYoyYk1s",
  "key26": "8J6ZeMAncjXfiDMp9DJXVqVae1pEaFTjK7Lif2BDWfngU1WZwWQrjrbotefaHhRndx7oyDS2p5s1qWZt5FEFAgU",
  "key27": "WjNGVAYCSdZYC8dg7oWdh1Tc1Bg8tkXxaMrx5MzCyZttx6qwr3E2KBPmadbhgiCztiyrYV1XVYhA9rhoKNuqM7G",
  "key28": "w7Xa8wksVNenKBy3RRumHypD6FKKHG2ha5QhQ3Sgw6jUCzpwGKTkJfqbRUQ8ohQyrXDpA2TE4dN1ojScSVUJceY",
  "key29": "32TBQk4M6ohaYmZ1U943ogBaJkYqVgDjyqrW3G17afA4nEK6XKVjm7QToH1LwDcGhAukuYE6oqJ9zeWFB5p6YQsi",
  "key30": "8T5U78gXw4qBxQdx2Epe8M6oRQZSUD1Ky974sqXea11tDjrtXPfgJPgDzC39A61r4F8XwB5ZJGkyLDQj8gNVtgn",
  "key31": "coGFaq94aNqwHoxRtQZz7sh5rXJjH59ZWPPXRP7hW6GPJnM9sSGYrZiPcPADRxhFgeFc4rw3pXWf4AG3GyQDp4a",
  "key32": "JRehv37ZSN3xnpZtthYnJiUeaH9gmBu1gQEM1VFsZxLifUNofdoxSMjRnz5qo3j3bUYdjfZvrZYU3osAv9qyhCk",
  "key33": "3wsqR8k8WgRe9aR6tuCbwy5xkQiTyLQe7duxgGG73o9c8iaNCThFp2phSCcBXcwH7PoVcTgeWEfEGGa67GJ5emuP",
  "key34": "4kZNTqV1gSS7NihrjTSA6xpqdHiYXwav8PtDk1kovpgo5nknxTLu3Phhq6oYw7G9aUn9aMp3gLx4G4Yezvi6grHa",
  "key35": "62z3aFDZeiz4V9ndJaTRx3uBitjEhbSKRD24cmKUJXgbP2XZ5patUnS1NgJCs3FLKDxDPcShQ1AJgZGC2YjkZ8PT",
  "key36": "2XC9dXvQRyC3LJvjyUquF96VdKCRpEaDz9KqvcpR8Rrvd83A5ioXwpYnbjsCG2fuLZhHYnXJCKDfgjTetQVF8eY5"
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
