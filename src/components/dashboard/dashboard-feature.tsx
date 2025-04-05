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
    "2CEF4w1hixoCWYk8GrVzE8APixLoEkye2NpXxRWBExHAXKpsfSCNKafy3oztxsCG6h4AEnvaPXY16Rm4m7EkNmrb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k6KESowwFTqgAh5ZHmmL6Sr98NKLBrAcVKUJWgsoLLMkvBazouP3YLcehyWn5taS8UepqcywNCH9n9Xq5CfiC8k",
  "key1": "3Emg7jkCVq4PBtEPmTy9z7z7ogomqxhTyAnRRo5wC9ELSzayu1C8t12yiJSfHDy5ZDAkJyCS2yWyZVrftQxWEmmn",
  "key2": "5DZMfu1CHL1Qn7r3MmBx2ANLL1ycm86c4bCjoJSggXTykQSZqBwAGV4vai5nmKdVCHMb4GbgEdw1aYHXwK6kEo7F",
  "key3": "4esKoViNuSnR5NUEXjRebFKNWnQEm6ZJEi9yqCWQbHvcyoY9R9SXxg9N3VQt2jEf1NwAcccDVS7dTERhzeTwK9eq",
  "key4": "4bCr4zr1JSX3XwEi8JNEFWNA8vKvxoRMtmZZsRfgKq6JDjvMkBkKuX5TWnk617oYMkZR8ZA8h4RsLdBcKFqVMfJB",
  "key5": "a6gmqNqzxvvw9gbkr2cxJBUPaCfEj4jB4CkiqK5bopkyCFxK2L6H2fs5rvvahopUnPcdeKkKNqKVhv66aa9Dh5R",
  "key6": "5r5X4bssS6C3J2fwYUBH1UwkNxg1qzRZDehWs2mgK6EA6rtgy8m9zE3qemhLBKe3moCjgKbxNiABiYK2PDCYpMVC",
  "key7": "4YEo1WD2mdHgEQNBCAcR7qL533oAMSEi7RyFdAyzH7nLtHZw9hBXTKqKmWgLqy42KLJAZZrFgnEZtU9hHBycDZMV",
  "key8": "3ZHJrQara4x4HhrSy6Zbvo6FSoCR9YunuLs8bQqdBCYHrkcCx8L3HtMfvxLQJd5SW8RVDWKLLqByj9W5o8yoX7x8",
  "key9": "Js5keviCm8g5QuwrnPQHbAZo5dPszmVM2vUSUnGqCPHzJ2mQJguQ1dxL4vjVuF4NCTeUwrnQs99sQiEqfZ4vuau",
  "key10": "3mRpATbzVuGvLYQ81MPFSmDEKqrC694N2pqg5KhpiVdRjeQUHzm9arQnGzEUhQ9CLUBxkGwPUidyshvB5tSC6guV",
  "key11": "441e44x6krmbZf2j8qV2yJQK2yn44YR5iaNQY3dew6N9yawTTYmmNW9jAmGbeNbS8XpxpM9Y11GeqZf7FVx6pWf9",
  "key12": "4qzwhxiMssZwXoVjzw54UBHoE5hr9F46Mw8Asdiv3L1kSbz2uM1kwnupdN2DuFFjC4VKDu8chPp3k1zw2opNbcK7",
  "key13": "64ggr9EtM31s7GjGJNBq2DJzv2QKeE95LNBQJmbnCWLjSBNWJCS9GvAuyeYV7UodiELq4TeL6qaVoh7sgT3pqLSk",
  "key14": "48QbBw2UtQ52LgLsFix657cD9XHUBMN8UY6Wgwf2btSU9ai6DUMm4e9UVUWuTn39UDn1rhiSteX4AKAshGm6SEND",
  "key15": "sDZXLuXKVw7QyHHHrVP3NyWXyN8JzWaFa8fYxDpBGq8iH9KTVh32bXv5VBSNH2PFrvLu2FcHuYa87BQvrt2Vikr",
  "key16": "4txjwCndxFf8EFHuFk852wXGc81PaSQmA894Am2fnkxdXwyMj6ZocpTShFE1pvJddTq8WqwWbVoGhpxWjwLwjPQD",
  "key17": "2NZ7qznUqBAwvYg3D7FLKU1cGGSPznjgRqXzbv6UmtFvdvGgyxPkEt2sxNajhX434gL4V6BwxURZEtedM7c91Tk7",
  "key18": "kyNACgy4isJabZSi9MNUw1xtcyTykju8oAdCmaaJbSvRTA1FrzuTx86WVjHQgHApiza4Bhq366HxUmpDdvAoVTE",
  "key19": "2a4r7iLBp4j9J7WrCo9hhb17wpADB8eJmfoSjrLMqqx7FZvqFdvCHvkVBGUcGFFz9gskAAaT3gQGx5MTEjaryqHw",
  "key20": "51kDUQh9A5bqK9Lpf5MtqPvYkmypyRrzinz4px3tyUZgUZwajLFPToWchgkqX9D6N272ufMtXo8n7YdE8UbByDkt",
  "key21": "2WW6J5XEikskkufnLEQ3SE1HEr6oNxywa9PGVceim75NgvVV4HAWTEWHi91bZeRhHmQ9X7WWtkE8X7HNXh9ZirC",
  "key22": "2Nmfu5ny6Qs2KdVmJ6RvjrM726FGmWAtcWQmEszEoPzPZVA9eUvAeRbzwidTPDXJkX5auFTK4KbFqbgLtCzcHy7V",
  "key23": "2nZ9xzvMuRzwPg7CbmQCNvuECvXf8WNFUd5upcDAQdY2bgmEhWbkX9noMxUS2kJ9VUaE8iTn5KhhjmpyE9a2xsCE",
  "key24": "3BJe5Jxazj1Y9CryWCwgZ4n3iY6DKaWCDUmXB34yyMKiEBa1GMNqKNR4QNGMyF2QkiYBkFcAAiT2phP3id2DDJb3",
  "key25": "3W776DzTzeV2KpH4K5h2xJxSFhMZ5s37nuK2eEuJcv5XqFm1KD7k75dpLV4kwypW3iu59his5ySfMThGC6YcGHAz",
  "key26": "JKApNFecv8kps1AdpivdwV2LTis2JGQdq8hzsrvKVPvxMxAcCcqwjDMvdsDBhkaKp1E77viSofGM2foB1nJro5o",
  "key27": "3tcD7e8hutWNX9SAqP79drBvviAcEu47xGn4RyHJnfD8cupKgF4wFvg7FCFAwn5epEBrSuELY2w3beGcS7q5F82",
  "key28": "654uwNHxx7Bxx8fJnXDsc5TwjhLVduK6mH7AXe8aLEKut45jXSxYBXWE9KHzvM39RnXbiszcD4F7Tu2Yr1r3yLgw",
  "key29": "5Hjq66vBUKaTqDpQsCA7Y5KDUkShdmiJH7nFVigNnrKepVDctShvUSMazpE7ZuwSNB4Fphiydmk35Rt4CK5v4g33",
  "key30": "2KDVL2mswNhSxR4Wdh9kdAU7XdU3a9k15a4tuJBUdbSQTqj8cxtK2aLKPmdo1XqFRuJNJcWEVRazkZMwm4Hpoywh",
  "key31": "LfwrRQeq3b2ombsu1MSsAJtLftrq64jg8akZzLedh1f3q6CXJE1QUchaRYJQmoQujxDUWsEpkgKTBREDiMod5nu",
  "key32": "41eFaHqwXf2U9jXf5FSpsoaYM87RFpuKrJK1fUe9sMPZfWiv8b2bKh5hStx7Yd3dc2csyFyyTQs48kv25TDb8QPU",
  "key33": "Dr4vjVoe1YKWdSD5HD81vmdSqfdZprVtAuJ9un3NfbDBRGfDBjbKS3KGZf5q7Nf1cLvHj8EVsf4Pd3Mb9N9P6P5",
  "key34": "2PCCRAfBt4ivJmDvpAR1L4RZAcTdmtNxCgX6P8Z1ZLQXJ8vR4ZcR1q51HVAKMF7B7FxtF4yNwg2zDVKWLs6S518h",
  "key35": "5ecu6erBswvCmdLznkbbw5oqf4rE6jUNqPgYBySWMQpFsKvWTPdKZyCw7jLCUBi3fxZK36x42KAa5MonpxvLwGjw",
  "key36": "4yZ9eV4oqQoEeTdv3kZSZHXvM8JQF7txf6sao2xQmD4iSQTQxXEg9ft973GzmBUUUMZthxaAExYN46GFDQEvWdUo",
  "key37": "5G4dtXKzBjkMpcTub91tpgWHaH499geDcynQqFVLyQrTyJwrSVyuWeeb2G9kRthTyfbVospymnBKs8HgQkY582Yc",
  "key38": "4YMTbKYyoDsSZmgDsSY3FHXpabuJ5BTXTuu1DaMLVwA18LA4n1eF2nWwVZz9Cq7qR5YDyrXHqvRciaKyGRwdu5m",
  "key39": "qnbUCxphyJTwQmMUpPbpQp4YJzW6ycF8pYavFtDexXBcv7GsyHh55wprpmnZkioGDyMoWhe9TNDmJGZkdxkhTv4"
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
