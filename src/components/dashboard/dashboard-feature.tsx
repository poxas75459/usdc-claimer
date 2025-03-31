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
    "41fmqYRBnj5LJr8vBScbxNZUJ1MHvBWtY3nhhdMS73Zjq3KVDbLkT78SSKFr1gMqMnZ688bwmKSUDMwY26PiTn5V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tBVd6pMRJ3mW8J99p4GGuFPDGH2UH6Ux4r3t7bSQ5fFb1mPnEauR87n1RWkiDZWaKxCdy9BeTXpqhN6SL6imgWi",
  "key1": "53jjGtvUYcab7NyAcbk13UkDowL8eJWUvtZfFnhts3KzcaFViCfij7opWZKPCc5bAZGhV9FxDhR9wdQC3gLMJPf2",
  "key2": "2nuXnZMdAd3jzRVWLJAemoR8C59hBpt4FZH4Ugae52oY1Vk6gphxi2aQQNdp2m2gjF586qTDLb1fsfCHVLt42xX3",
  "key3": "2eMJrHhqsg2nSmL3C7F8qQ8AziLK3F5XbKfhG6guDkiTD61RTT2XsGEaYfRp5qWg4c2d7Fk5ZFzcenBb5vKXLSeZ",
  "key4": "269KHBeTvBXzbXV66UCA1baKYpxm9Bzui59GdCfwNo5uLvySTFNUFXqc4VR2NzytLBsf879wr5DfQ1zfqnM74JS3",
  "key5": "2dhirfbvi4T9eTCNVnCghoVAo7LFaE3GtnfbjRwTcVqxer3CZn5b7ksfJDbXrizAF8CojdjmscepeGbtdvEpdWYQ",
  "key6": "3WNJQYaNuwXEhAhb3MihnTQU7SYD5JbsWi6sKmzKsDTYMXpAQL44zERAykwmUSdUUsGetFPmY1rdQqKZn9rsCit2",
  "key7": "5L89tY343HY5fsdcp1rAbEiCzskjEfjehYFKcMWsa6hUhCMBzPSZg9GbQzKxK9cVNSnEK3vvg15wGdFpocAPzyYw",
  "key8": "27zvzvRyFPG3Gm2cG9HmXWxJxo8eenrqU6pXzuuw2UyFb7myPeumVdrRJLLj5L1nqPRu3ob5KyLrDjzsudTp1UL4",
  "key9": "4pyaXhQ4i8Zak5s7f1ine3bHPpJZauVZ169vuTNcgUveiR9nEAf26SZRX5rsC2kCs7hvhbM2K3SWa2jXkQfHMu1W",
  "key10": "3Bf1nj2uvvcnpDrDzGxoDJcxAHMbNsFovveS81iQTXfiCgbsx9JifY3AELUVtq9PZcYnofZPr4tWSPYTjcDQftgr",
  "key11": "5B17cERRHgrCGsb2Jy5iQ1m9id6PZ6KKmM6qg1yK3dMvGVJuzAaCpzW722Phj2VdaL2tn5zcGz9dDgoYXtsgZyd1",
  "key12": "qmCkeWqSG4imKEhx1uHUpxzRT1pkrj1H4rCseekN6jg9GmNHj1E1dUfjszdLgPqbKHAwo3HnGkrPSScdVfWGZDe",
  "key13": "277CGZ1GXG9keQ8Ne2NG8Y9EXwXfYA8RWb5E8HLiCcgGZPYt5i3kGY4e2MtetAVcVfHAiiNQTnnSmt9cTkyrZtyC",
  "key14": "NF71FKeR3Eq7WWqm3jToLEYNyCuwc6m3kX1FtS6pqUD9MasCFRceNQkMSTFHk8JnCMs2ha3bQnVXaQKyp8ua7JX",
  "key15": "3SWVE6Msvqxqq2MaNnraG7hpAm5gwZS7uRM4f4nsUC8dWhJumSDexrRR4NVVMLQAJPD2gwqZHeWfWWxP4fBpwCxX",
  "key16": "3w82h85uESTcRQzbCfUZHz8cBDLi8FPzortmkQFprLmf6QvNrdU1LGznpuEZZwgSRBYRnWTNSHQDSUKtNRMd5bys",
  "key17": "5Yy2moMHScd2UiBF4njnm46xF6L8FqTBY4Y16yx56B43g6Yp6ADgNJtiMe4Cnn81ftfzsHaRx3mhZophwSEqi4uH",
  "key18": "5uo2An6PYMzTpYC6XgxiCTiFF7TNkz2bLcrdugTaepf2NfoweyzXxUkQwjqdBhgjSSGjC3wmjMKJUfHrf6ujMz6W",
  "key19": "3F93ud7BiYxmP6nSy6wC2NQpYUsC6irM9ti5tBgtqT8gecqFaAEsizFCi3dxTUYwx1uef8u4gLQywzuwRriDfLFc",
  "key20": "45JYv2m53y9ZenEAUwGDhRMNqGDxao2PJoJW58FRs4zVnQv9bxy5u7SXKu3qQnY6aAJEe5rQSNQzC2FGdshj921t",
  "key21": "5k1PmY4UfppMCcyww3crt7PAwMfwnuY4SwdM3MbMrdpdyhCyD5JJYce9ydKcCTyLUkryBmcB25W4HtXJvNsYThvr",
  "key22": "7KWmnkvcmm2EcMcDfP4K1BdskG3ubPyuQa6UBuTFf2Uaizc3snyFiQmjcmNtVptx7Kx7mzyBxmCuVrWhTeeHuAV",
  "key23": "3t4gbozNo9BQVEJPnPusjRKjKcPXoL55915QUL4aKk4i1vX1VAVknTPXvCfY9TbPxijKt7A9NAi11rX9NhX6hZ7m",
  "key24": "288cVfxWYn53EWGzv3YNanCeo3ec1hsC6Kc5CxqKAGpdLBnj3pcFCjjrhc2EQuJFWV5k4a2jcuJCg9Uw5KQs2jw3",
  "key25": "UrP3ZGJ1LA37XyCFQ86hu8MmF27TwTB5rbi6CaJbf2wsGXwiiWiE4QG8dQDsqvJgrRXqLbqkqAvFmt3i139gyC6",
  "key26": "5szJCkeJVcnEFPVhWSHc6tSNwCSsh7L94noWrCZFR6RGpgzRqvRVLqnj8N4s2hwESJFt8PU17USZfRwwQAKp5inY",
  "key27": "67dbzNnw2dqyKSZd5tni8oMsRyeiJF5zwekyp31zSymntcLc9gDkoJPeC3Cg7fMhkfiqaJA9DAVwafUPfEYeiSqb",
  "key28": "5KLYb3GJpaiqXrdb3ey19CGmmhmzDiLwnGCe2iQSHwm3j74Sfdtka2D7yarQhEBUt9V26fgPWGxxCBcV3EahRgDi",
  "key29": "3oktodamYtfgWe6CCubxJrfYZzTM1aCTxXUxEa5xtSxUJVeNosxyc6aWEzFvMuxScatQ6mF1zbqtDipttpCVswcr",
  "key30": "d7SWHwi6XfmpjG7J5Ed85gmcHTq33RPtYs7SiKzX9hEQJEUWXBH4aBfm3gmVixev7qrDQ3oQyxdnzCs9ipMpqMN",
  "key31": "Q3Bjd4VHqZy3qiqeMFrJsxZp83zpZntpnNyPi6Kki8aoybbqGW3AmeRco5i5pCUu9wYqZyNpQ4KdjdEmJxQHYyy",
  "key32": "2LZNcfQtgXnZBwLtBhnD7EqmLUAtcztuB4kcbwm8KETTT6r1rryVxCr3H9SChio53Q2W24ZSDqswjSuuuUNp1ehK",
  "key33": "64RhqnwxbicJTxc86ocH4RWnz8adcZ2FzH4QEYtftMZdi6FwcKw4EVBkqfoWf7smY5kX1dNZKsAhCZ9dZnkGXF7C",
  "key34": "ZhyD6GB3UGghpzAeZutbKb9GfXLSKzS2JKztG5pasqgYExTqj9bVBm4psztoFt8CKY4gLikekfKxDmiXFXnfhuX",
  "key35": "5qtzidxPQYHVf9PNFS9RQNuoghJuayytxX7C8wyBr2w3dNpqyboYQ2eacY4Jtk1b9kHqWMZTPNqR33RVqGpNaCr4",
  "key36": "22hCpxGWPadjEB6ds6PxJBzWoU6FvPKPEdMpeSofmZqEQfhhiD1FWY5qT2jiLEdLHpfNqJ148kaqUVJZhhSLUrZP",
  "key37": "2Yz1DwH525egjBFQXwWyABmqy5nPT7SB6CRDB8esFkU5vW9TJBS3zdM94ninaiVamkkLHTEbKC4iJWfXVo8SEYAc",
  "key38": "3FhCdL3dkbB35zqLDXuJx1tiYcwVagYkQsiR2dU8mVbbq6W9yvdc6VAb19L6Fh4vUX2vjDq66xtnY3xvZ9w6MEwY"
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
