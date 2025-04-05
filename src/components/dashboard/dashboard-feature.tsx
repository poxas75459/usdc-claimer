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
    "5vZJwgS81xpSGTzfGpzTSmSWsPbKD3Wxo7eZaC3SgQ5BgsCmnTYidqqjAbzT4BxfC9B7iJq5uQst7rMmUV27JPR4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cuJctfA71bpXSXGz9AKqNRdcxX2rkcU1ctyHzoPRY2VAGdr3dJHsL8oLsmUvXdx96FU7rSH5iWY9bt8wv1oeAwa",
  "key1": "3jbJZX6fB7NswQVfpXayFoJaVzb1crEjwYSmxh5myTWnEKRG285BX5MueSm2WXyaA3WrmuBUroKK6YRjhhdokfx2",
  "key2": "8vFGuGD5EpFN4cyqqDYW53NDc8NPV8Pmvv6vr4Lr743e3FA4q81FvbvHqTTNycA8yiz2JdpUdKgx4p25rakbpC5",
  "key3": "4nAy7mP4ESASn1uhot12vuBmvsmmmTsG7cFRLQtifZkkK2gtN76cFWDMVPALAuTbbMEKJbnT3bFpWj7QDFnQartt",
  "key4": "67RHLFcpGabRWvTtg1N7TiM7Fi7MT44haPXb95rwHhQzZRQgrLi4zRDETQZzth2fGhRSo2EiSsmhLbGb9yVBvZrj",
  "key5": "5sd28KvNDmbG1HE8QGSB3MbhTGSmfVjR7sTDqnpM1boH7XR6A359bie6SvH7gcCFYkBhNaz4rhokFc5zdsjrkgCb",
  "key6": "4p5tGSf7RhboWsT73axEvf6iZVzQVnAXoDC3FuLaij5cZS25mZfvrGijJggxrdd1SX5fLenuSnWGMjdcuusrMvRm",
  "key7": "3A6oM9brfH5ysgKj44BbJ7aV59cyMAR6ThCMMHBRHQPiFvS96VkbhPPyVyaFzb2bm5FzPdvqeULF5skJmuiCLGh8",
  "key8": "4dUvh3u7Lo3sT6RQB5YRHvbJjkBpYFKr4og4fb5y8osqR3RQvidfh2PAuKRVYWovNK6RA8wiFRigtHBuU12X1jei",
  "key9": "4TsgkxTgWEAN4PdYkDy4DaQwjs6m1PRyB5iLXcmFaidrkiWw1ghMk1h5FaamSCWBDWdjuRDrUZWTouex3J43LHez",
  "key10": "pfvNYubRxj9uUzxZH4sbdHMjv27GZe839ZEYHPpP4gL3Ak269DDHxFQqui3PojLQq5D4xSxfrM5JE6tgVVMXLE4",
  "key11": "3SBQdedLE4ZuhY79r6k5EQMUgujWfReV5WvmvUDRTHx6NdhbTd5Nj6qwgWV4scVK3WRCo7RWcUzyUHbjN6BdjcfV",
  "key12": "4Xve8BrHXJepUAyPVkYfCFv2TPN2tsN3yGxCmr5EbXj78XYMwujqKBXBg6iH54aaH1Ws5yThrMS4WRCYAkD5o3NQ",
  "key13": "2AGJYTNub4FWw8tLxK3Ga8SVFsFKHqGUUwPsh1bAS4zwB4wSmtrHmA2YTMKf3rv7nSupRygGfjg3av7MzZeQ8iBs",
  "key14": "3Mysy1aM7jF9WkVfhDjQVbx2ZyvBupJM87br7RTexcK6GFRZKcQHVAMvFXJdpEAY49tsaiCqyXWpreg5RLd4Dnus",
  "key15": "5nKND7ewosL6DKUSMaYVwz2ZrHxfsT2CwdM6yjFAz7ciaCiEkU8S3aJMx98q2FZdRXKrAmSCKNJvQLTMsGUd2QSY",
  "key16": "3ncDbSQ8UCx966kWf9hwu2ZyRZc6rzwPt2tBUdPLRw5bydMX32Q9AjR4nvv3WdX26Gk1CM8MTTGbmRqp1eSXBetk",
  "key17": "42oGYNaZbt3WZQuDSc5zBW9VcnL1MfhZb4fP64DZPXnzcuHMe54wxxMG3roWvABXdhfi2zcnHXqm1wJUF4NBwDDu",
  "key18": "33AjGeEtR6M9tZFFgSembjxCMCCJsJxM6TfW3FtgnBfT2EgqTtTF5eitGx7veHQH6XpAxS6D239PzxcK1qC73iVn",
  "key19": "9v42WGyZMwpor7bp9YxFSxqr7Rdn9pv6FonqT3N5C6kFMEbEWUc31tFsvqwicc5cofSJR2P5FmQyvfj2TaybhtU",
  "key20": "PqNU1rjwPW4hdBUfzHmt24SY9WjTdZ3P1qj7hSp4D8UXbvAcgijUzCf6F9Z8fjhLunPfUefrGx8mEdHEfnJwFeP",
  "key21": "3UzaLPkRMRxqe6zvFc8uouqyJEsLdsTCbhsWAELzWWtgvnnnXWuMAhAzfodpvrHhJmcPPGfd7KiZ8rFTiZ46YguZ",
  "key22": "4Wbeihz31rsffjCkTDTAy52fjmwSERwVdVK5T8w3mrYJWHbsnobiJtnJ6VDJ8FKUYARgUGhXpjD8AbKf5JbsL9dK",
  "key23": "3uC69DzGBuy4CgPQr2Z4njjTuAL8AV4MDwi2MQHrHnwcy3s7L3xNj6ZP4z9Ph9cZqJ6ZoepGcbviCTEMKoEhRpFm",
  "key24": "5jGwFSpNCpS3wC4gaZhFySibkKUqoEARgfHtd7pvkK62WVMU8k5m5cEMMQjUnoJfd5aE5qXSqG3YTsmAfgv7kCyB",
  "key25": "5CK1uFi3T5rZjBTyzb7Hnu5nrn8tn1vsn7YtR6peYsK5Sodr7fzJvX52EUxA7kowVx6saahBVfpKkjpNoau9PPg1",
  "key26": "3dGMbcH9dqP7Dpp2JkmCsPuocpmrJ5iR1Ypf2LUcdAP6MuwwEWDq6GeHpTSmjB8NjZNneuJpykcKxWFSS6gSjxNq",
  "key27": "2krHuv2nhzXGNJQ8oBo9iTgjWm732EY3kyuBa2fDTKpSNSzCDgSzjc5dHgasLLfEsnhGvPden6cwioQPLgN7eS9G",
  "key28": "2Fm9XzK65mKHMKg9KutGEAPrQw95qunRdpeQcKQMWEPndyMgUc9fEWfAQ6ovR1TbMyrxzS7uqvhALruj3ydFnxz1",
  "key29": "4frqxj3PLzw6WAZuaJiDJKiGkvmmQGSNeMbzisedHvErHmQJpSSqn9Np9K2XpVgReVzxJDXWQm9FZjhoA8aDDN8q",
  "key30": "5kx5MM6ZgAaLcSYLJYpZZTkE6wfsBoNzVJ3uufZqVHctTM6Rpdi1w6LUALzDXSBtnTP8XDTa1mwx9ct5MK53bZok",
  "key31": "5iNG6rg31TSL8AhuiQrrKKDuUAvzpwKHDBAbFczkhzzsCrx3zsUFYv2FsEQRZGzn9S8ykhYRddmbWx2ozMTT6HiK",
  "key32": "3cMVzShyi1WGrnJkbCRVNmyW4AoMdpCP8KXAZiYzSEneoGyrJrExt4fnvBJ6p1QDqAtqbUXjL7gYHbq9G1cfPua",
  "key33": "3unaWfXc3AVNC5EqM2rNAgeNFsq1a1Kegj7BYHzZQUKJ8VbrjENPx2Neqg1w7P8aTCqb22U1jsEZeUbgRgXTU7Vw",
  "key34": "3TRPC9P43VT7cVgjHnRaZgHpnnUjQFV7wbQLJa2c6Vjj4dpvBCm6rB6J7oGHvPWUV39zWLaFYqb33c4Ue3PjwNfQ",
  "key35": "4csvB6zke9VDkjUgSggJ8nnQC6xXd54VsMdnmkoxGkzs5A7PdK8btARFhrAEeame311T8yYWBsBp8psf3m68XoUN",
  "key36": "2piyBqn6XRndLsfvpPbmjfcZKcAsTA7Z5aJCwHce93M7VQwTNpni63WX4MsY5QGgPuR3rv6wyPdHRGWKDVhA7P5U",
  "key37": "4smBhyAdVssvPL4FKsaNVwsBXfL3zwxUurYztzFD9V1wunPcPxUHpwpQ8rCvstNHwiZ1mbMa4sgRqiv9ZNwMqk6Y",
  "key38": "3w9H7wi4vcJbYRV24UFZW6Wv1AGtBfpQ2mqKu5oZ9sstojYcyL683QG5MkZVvc6eb5nPjHX16USzG2Lm3JPm69Nq"
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
