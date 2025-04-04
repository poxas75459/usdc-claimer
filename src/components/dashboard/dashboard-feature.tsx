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
    "62NmemrqeVA2uQ9J7EASdpFLYR7g2PQQnP9AtvCdNzr7zvjCowxJpFQvKQ2q5tPtJikBwwoqSNZttGKHcX25hGYx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eEac1TPuSADcuLkvF23JPNqGoUaau712diDnbTVCqyYK5wFnz7Xj5EEnUBMwjDzV3eRNpUCySRawmzuAmQ7fBfU",
  "key1": "2KqVJ4jPddEeSzKEtfeFdteDL7he9oFx5vRtmaNcgfcw99TFonKLpEXhVrxvE7s4WZFuGwboNwAm675aGgFzC9DH",
  "key2": "5jquAa89mp8bPXUz8zGHNW9msbQ64C6FS3fEYEXrogDnKi9YHy13xp1WHb25NPDVVZGejxnsDTKr3BcJFNKvtRTV",
  "key3": "VQUa85CWDSVjewf9XvMYbBJWP27MnEGxLdTVAamjjF5zyCty4tdeSAZdTKLBk89mwaq9eog3G4GcUjSU6V7HHaC",
  "key4": "2Xge4C3RmDpohNLrkjTa1cr1vMyg3U81vd1wgBQxtzzXshiz4zYKEjAdtqPXeSkpvM6tCdHfsaekPuzKDES7uXp9",
  "key5": "3fcFNHGUWZPDnn7unTmS2VP5tNRJ9fa3dvEegjUndChWS35rPcjDauCrywKddbvUyjafbRMhUHUV96Tb57bAmG3",
  "key6": "5ZtTPYJYmWvVYsURk88e5hZaEERSukaSwG6sZUhF3rTsnW5qj3w8rS8j7gkyqrGwRHqUksZqSswRMpzFiDUTee7c",
  "key7": "5AVvN5oKPmGxMp7veMYEp8NrBAtsRzCopTPaeCyDUbyPufR1qp2gSu49YGqcofrCsjtm8Bi3MCM3miQfNGPpqZQn",
  "key8": "344qG1X19fwgDVjvBqZkQgpEMW7SgjrAEanUYdwYSWtnn3E7jK9yKhTyrQUts3c3jDFXggHfJGrs9PvhEkFFyuc8",
  "key9": "61B7mjF4MHqb4kWreeUyzNetvH831nzQWsvH65ZwDtQZiT4DHb4Wyo76HnDEENMXX5aHavouFcEpv5eZi9v1BBQL",
  "key10": "67Z2yftcSe3dGyMh3rcXEukgvBd47Uay4UzJtnp9VnSSULvyMcZBrYemKTGPCdB1admk24gf6oVoceM25oXMmdLf",
  "key11": "4shw3PMhapp4ny1BWiSc8NjQ2FPRqhoM5e1Qxcf4QV4S4jguuRtjy8JqqYbp2BWLSUKDenPR19DmyzWM3EE82UGn",
  "key12": "66XheTAyLUAry1eZLH9N5Ej9NFEpiNppqrxVMtZKzFX17tjFDvMkMhkDCyqBfZYjSBiGRGmTCV6WUQx7qk3ZQE48",
  "key13": "Rstzhh2zujhqW9khFe3Q8By7JknJfY1NKKfE2jD2frGbQxE4EeDiQ9eJt66LVT7nS2MPWM687PMmauRxjHfXKJA",
  "key14": "BKt6RRmqboMY78tTQKZvnurTxhr1iEurwNSFnCvhgh1eGdTG9oaBNXktSkgZLSvGamg4aEEbrLijJWT9vTx3rp6",
  "key15": "5tUVYkExWUBpE2XjGqFMjD4D8ps9zpBzUUKBtwvogZJnmizZ3R9d3rJBK6xj3fwUTH6KQP8tgtHtMebnVCQnUBtt",
  "key16": "2bdVj5VFq8HaMiSrBYXfKagSKYwg7aZa7gk88WdnvpuFFKT3VLrddfNC6Fx47yHxM1hvagrhxM9T2vwCSKyGmjZS",
  "key17": "5xWJaxDqbAiPG1vVK6xY2dnYeXZo7epzbjQtVEMxbsH2LZwoGhDdE8KPP4KbbtJMgiDMyZfAksP7bAXEgou2NHL",
  "key18": "654dPyBuZkmcKaGkh36w2MXc2H7tys469j9J5vHBpP4F6Yh9gH4Ymo7BwPU9HhmQE9kiWrzFeP2gqyfpDStsZARt",
  "key19": "67eTbgQx5yPTNSheBfXqqiuK49UsTrgUD6KTT4KbzJuiTXfkxZShyPL7oLgr2r7Wg6PJj57atby1XRP9GDhYyNzj",
  "key20": "3oMhCZfvu6Ky9G3P4qjFUcZBXcHTnuqQsMRN1SXo4wgughrP4wxtvVgBNqVyLr4dEUpdD6PMxkHdGP3wf8PnVmPi",
  "key21": "2drDXTozJ1i4YUd8nr853Q87U7r3g9rZrU9LtRe16DwxKExRkCRCAJWGFs682DZENQbuZUQjm8UWXszMN36phgBZ",
  "key22": "2yPsAMuSD1Zv1MjL2xRqe8JwcGGGgMWRiEzqvNLRJ3byDnhvUteX1hbkFVRV9Tt7RkNJTbkxzHmBLudgs4kYkU9M",
  "key23": "4wEBy83Xp7jTMyCezWDMv6vU1jA93NX7oJqmfuKZGjt3tLw2bSGd7MJkgyi6F7CLeGhY9KxUUyQtQ4xkV63zMQyP",
  "key24": "PVQjoKDotZ1siPKAYY64zfXHhSDo6ae9VD67jyFv7eRcHTeu9LYPt5vpuPfmCGwM9SaGwWwUQrryrq65nXXbGKd",
  "key25": "4Ges2nAnwHDAXGr9DBzr11fxwZczuLid8p9SHHJdBHwUkLSXJkUhmm31rDZPFKvhW2Z3owjvedQzvPFogPnwe8uG",
  "key26": "2Lb2ShRxANjwrdARRXnUFxHZkv8NhyL1ggCfMwqhRAFriLmKcs5Rcq5eiyMv5xtNFRH9nAucBTioLPsGU27vFqHi",
  "key27": "x8jbzvHrYqmesN8g2yWwUA8Tkoz5L6gJNM5pfHveyJhaGW8Ux5VTD1u9PBV3JYuRNYQXt79CsRC2KdPH4Zno4yt",
  "key28": "4JGDVGB16whRBmYpySuwwknA6kg1diYnjoNwjxaxGG8yVFfWrLdnK21QDaQfVYfGwt5gV7XGruq6fSgr8xDpNFe8",
  "key29": "EyyeBbCnCqLtvLDkNqjXhEgapHD81AvcnbpJXLnw9KspMfU6UvxJ7McsXk7w9KcZvAmQ5nu8zBJHbuJ3h7HUGsS"
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
