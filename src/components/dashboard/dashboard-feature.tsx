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
    "5pxybVU7JsehSksyxkBZ9p5WMYUNDRfNC5sV3434f9ZBwYqH3sruHyenqF1Fu1T98XQgFhWECHE9imoW3s9Sy3Pd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8y42L36MderquetvEP4yRFJHPtZTDwPRuTGYKMFfxGirhGSY1pt1xz2hURZTBdVbV9iskNt5HjbUQNwcKpueyZe",
  "key1": "4uzSYxgfBeUBt6pTBQbpYKwL1uLQB97u51k7xJtJwQ2QsH9u6kzYmK4BcwdKDoLGts2esFUND73Xwn84bbiRgNc6",
  "key2": "31sutRL8dbNisvjRm9SiHBfBfvSWM4ywUeMw74dYqLp7ZhET25mvuAmHncpaww3KJpb5A3UZteiwSUTEj2s6DJHf",
  "key3": "m72queAcT6tD3fLd4epyzod2ydjjQHJLyf5KpTwjn9VtVEhsAE1wce7Ty6Srr93dSiSJ3Eds9rcHDm3zBucTHm3",
  "key4": "4fbQgofYwdB621yt38jaCiXFpdZtEdtt2q6fJZAmVhuTf56nTyyBYoqhMg9HcMjkPoRBL25mbAQaFLFP3E8FHdx5",
  "key5": "2MNrhKgFB1533SZsqm8GSVgDeiN3yywTvM44paToZceqwbfgjx4KWJm6zGZfTqbqytL3UA5R1EVKyULKJLLns2d9",
  "key6": "2tyovuAVuLiA9Xi2DM9Hz6nL7i7JEqwicmYejKzaKqZApNhSTEPhaMq2p8AsBbA8W1ouEjW1ZWv1MhxLkrWjU17u",
  "key7": "Y8n64EDfeDXm6VJ8wMD17aJz5GUgEu5zjZKyVEMrgR7DnyfUf3HHofnKJEn4ozmLxiYmHStt3DMBDKJ71KBEjMJ",
  "key8": "2QFbbfpgx7NwFgnuepXuQSvsvVdbqEPdQhzBN6YWowaTXHhhZ1KqNPE8NyvvFV3KrcbGZvVxztJEJdbGn6yKJyot",
  "key9": "5htLTsDkcCp2L7pkWsVqVoDSxCsfQbYMsKTtGs26cGzvnDLxwPk3MEg5GQPMpuaLqpokpKXknmer6FLEY5ogJ6ge",
  "key10": "2KqsTpf6NUvb42vewV58miTPaHXXyerd3pA2bm1oJb4LV4vqboD1SiW4DiULaMq7CjAB7aQ3aZohGjf6VzLdMjUe",
  "key11": "5KZZtAEHnX5rHRfqXGCRigZheU9iXWWp28JFFy3qivoDmxHR3JnsbsN9gthVeYZKFcDKsr7RNC5z8vQtf3UXh4xf",
  "key12": "5RgeLhVgaWt7LYxibPFC4tUj36B6F6gTZV2u7Gy6qH8QzcscG1NCTtYMe842bjn95bV2A5CNkMkvUwXUfQBS6Wjq",
  "key13": "5cQGDtJFJaZszj8Fb4jYNg3Brt7gmqhmRbhZtqTv4ZZt1AbK6MPNihGSGjuEDUdYYHkxM3eMMjmMAgG5B3jPCjPx",
  "key14": "8qxMnqdQDCixuhpYZVC7hMpCikAZ16WybgkpN1k1rBzUk57s3f1G9kXMexvn8pVy3H6MG2Zr3SD1o8xrFi4XY1n",
  "key15": "33UZvKjjH51wHfnPS8bNx15tZaRB7yta3cL2DS2UoocUnNkLuwPrjsMAUu36pA3LdnNznNwQ2AJAKdrgFzn9Jbw4",
  "key16": "63tYtFtMAk1EFJ69FcNzrW5M7aK9cLZfBKf9b4yxQ4iT7YLDTHCDtFLagyc6Ftx33WymPWaJCDd31jJQN2As7Wot",
  "key17": "4Ar2Rj366QhEDusSRYCxhDqPepVH5zwkLUX51dDi7UwKJykXk7Wh1Sah2GTcwUtGVpesAFbMKLrip4rSmjP6qhLK",
  "key18": "2TnVAjpoDNEhiFQTcYc4y8syio4vGoykHfMWUmmE36znffopGG8SbXfAXZEvCvFUc2SP1TLWZ3CnDYjq2J9W4Epj",
  "key19": "3C7naSkEkr1txMwcQQJBe2zfKs1NsyuiLwo6vmXcm9jGHh8Ag7hLtjzURV1rbyrCJcPTFYX1iLkjAGtYoivYksN3",
  "key20": "2nULw5PefnT4emMqkfdUddAZD29hGmnJzDtQyUsBpzZTbcrNVhsEqeGRvP22SMuJ4P4cM2AEAVN2nUEQNhHqKcdC",
  "key21": "FXqKHUPkuqoqP2JUSZjwxtHpARybSL52PXNDFssj1Le9aDVWaytu9uYMdWdsFBQZsomntrBWrKxBs9draa7hQJ1",
  "key22": "2LnVQcweiDBAJaoQJACBhyrrbUvFyJ7WV1iHyxQ2MQ1A2vmMSUzwAYBsnpzsZhJepF2sYnFmnQWnSmMTQCMFuM7h",
  "key23": "5cmPJhFk76orAcVUxDojkvAY4cPmqDX4WVPn6KHfCu8UQE5hKcsNbZgyvK2aeska42pLYF6fYRa9uH9iDphyJ5k6",
  "key24": "5rseCBjgueqxFks44kV5PGPFXkM1g1JtoWTz5sZgzKD9PujR8rSLdD5S1ZSgkaFUUCYvTDQHu7gd3MbvpKmWWN45",
  "key25": "2Pdq8uTx1eGs1F9auJPJ3HUe9QYafLQx2p6fYeqv6NeYEm2D5hmYY6N6tdpzqfVeQNbWGaW7P7io6U7YKWGpmvHD",
  "key26": "3AA3q9nAujBVGpKnf3wVLiQ4RFbzEbHRMiNiVK41DdqJzKWtncfkkvgNLntxt8jdNxTTDqspQp1hjZMmEHPF8hAw",
  "key27": "66t2HAms3rZTP9mShuCL5tZJZFKCfPqmvUJheTV4ACNj8hRrcxGcwL7DyXvYYvLe8LGMpYmSCC6CEMiUR3WQexBe",
  "key28": "dyw3ZxXPhXZAjPXpgDwY36mJZqUJ8E6kXDWTKAjxPLXUTxfRMp5JsNB3ehSmfiEcmwqTWdiBw6KoHjDzKv9YZJr",
  "key29": "oequuPYjJi9A2hnyLWUzFi5MdKiViXUdpXNrHudocVPbfNinWdRF5FZP1F39q6G2pJrMvyPKqL8xVNYYwH8ZV6v",
  "key30": "4JdGsKqNtMmmA4tH4hYq5sfth76UqAi2n7B1PYhxBadep7HZUhH2tXYTKX32L8NU8kV4GJuRun4q7otxTASmyxM8"
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
