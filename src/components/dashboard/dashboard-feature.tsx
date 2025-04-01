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
    "3aAhXPxLjbsoECkGyF5w2Q1mcubzFwidVXnsHuHpD5TXPo8BqxhkT317svu2HjJnzyVFw6xQGePH9b3zdKBBzaE9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eWBeMF6VuuvPVhhAJSq1NMaqMNEyuw8GNcowHar71FRRG9A533t3uee6VesNDXTs3TLcopmcCRN9gUR1QXidgdS",
  "key1": "4LpufoKmvzwKni69WpVj3e6wfe2nCLcaGAKfUYCYvyyjpfHDXhuFHAD6TiRX3cBxd2KreV1nt4Z8PhN7JuU9vdRJ",
  "key2": "2oriJaHBrdDQq83XZ1jVHTLPEUxKhPmgPQ3KxcT6xJkmGTAjMaYnWy3JwjgMzwjQ8JDx97xiCGwGTVVPqdxZtCLf",
  "key3": "HJqu1Yvu9VEVLRgD5T4hhzjSA6BR592rBXfzsLByNeoeBznCtacjiihgzPx3V64jxYijY9S2DdpXemNdWSeMiLp",
  "key4": "28mit7K2r2udz6SamxoWxYQn18BszGRL5nsXYdQ83eLFADiiffzC5WDN4nwmYPCrWpCdWtTjq6i7SskqQYoEuPje",
  "key5": "4J7yYJDKnD8g2Z4rQdx5SEWLgP6rzWrsJB8gsMH5RWBF1N5LooWB6C1UDp6mhf67wHPFn6qtMR67gWcYyCDkXUV2",
  "key6": "r38Hg7KuXmt5BYEE74mApzZ6kgXk5kU4RfDyyDCEnhQ3eBWdVfTzLxWXhSGwkaMFKmsdKUMLcTmMfVHcPMKziqH",
  "key7": "4nMsLDd4N6o1iafzStGRToiEWTjZqMd7YA4fMRtwTwXNnCjoyzxuqjzatdgNR1KrPHJE4m7XmwjjMVC8QsGq9iUM",
  "key8": "5cEYfoQu1weyFHF29BJJCxESfStZHtoG3TC5cMUV3BQNaBbkw1UdaZhwmYiCUDG9Zvgk9g1Q7rAYsf5uMkF2MyNj",
  "key9": "46BV1qPJseqrQVzJ8R2KWLXksHTwi6oMACR5aoAD7hotciG4XRjiW1x7QooXpn9sdjB21mJ23mvkAFFjfoLsvKsU",
  "key10": "4x4nmY9r1tBMVHCYW7gkxzaQ6c8uBA1tvKbo9AccWqSVdykReaCrfH6sWH7QfFLXhVwv5ZUardbZuvtiC6Pxm8Gg",
  "key11": "5sBnY2JM9yrKhR3pNZ7oLm58W2PGcdNVhfqjaUuDY15vevz4ijtkv34gS67tKoTvGPM3AHfFqngLSyqjjvkUeqXU",
  "key12": "5DPrASLGk2SpZpHWEsurHvUhKWRHqS88QCvX4XWkjXYXiNPNQwJzSh9YC7Ds8E1dbHVhNX1nVFH4kpE46Gv9Y8Hg",
  "key13": "5s5TpEcBJxsFS5PKfezVeEdJnESoQX3WKnd6wLtnKqv3NB4WdsyPDFbavNMZF6587ErTRspcQRSK72ozbjBTz4Dn",
  "key14": "2dTx7aE2GSSYHwufrZwAoQiiCDhbwvX1V1Ea7zguBSmVUcJaFKcE2WYT5djCWwHXDwDm58YyYzVfQSxeNsc9FhVa",
  "key15": "3kKhRpnorUm5amivgTEHMXmfj4BJqmW6B7qFz76h4HmNbRbtiJeSCj27cbSWjDEghZqwS5oZCVJTMN9tYfahkieW",
  "key16": "2d9wDsYURtiv4CC348B6DPD9htndHDF41cBN4bmUJnvcWztwYN7CnBVkaSe6qS2bZa5coRPt8kxZbaS1SNrTSbm3",
  "key17": "5oUA2HCt5FGXE2umieCJNfhZypFK69pyRvJj1hVAvJUqn4r84yAU8gKLi9mQKFF6SA5NtHcdXYQVwAhDZfTuevE3",
  "key18": "Kst3WPWCmjLVARWZiQgXmR1oojctpimDwPgcDp8MV4Th1uvb4YQKzBQNzMZTx4aWLQ3U5CtoJfQXV8EaoTkNCpu",
  "key19": "gnxfAmj4kTszqTEjeTeYEnz2Ngk9JjwXTgG2L7tsqKfMkufEkfdYtwN8gwgwM1JBgh8q1wGbfUt4QRcRvUuo7dt",
  "key20": "4Nf16t2uMz6EAKj9NWuUKMb8XZ2NH7NZsyBsvUAuamE5heGM4DaMBQj5egzV6DMzE3JZiithSVwuj9tQJMh5ysbd",
  "key21": "4rz4AQfcMRKbwWAN4bveALW82P3d83U5VoKjVUjGtJugWL55qHyrnRnM233wGj6T1Shc5SztvbAYycve9m7BxhRP",
  "key22": "Bgjy3qXRYeiRkSh719ozBGXUJgf9n2uyRnhd3cvV6yziYYo6Padb3iDT7umeZrE4pED8UN6n8giHcunthGjoTdD",
  "key23": "5iviQdBXPsy6YurnKc3jAq1Xtffw6EUwM3bj3ghsPjiU9KXLRT8Ey8zJwEQRErHH8g4i8kFw3AzRE77nRyAMJkbZ",
  "key24": "5NN6fCEtwe34vAkhEAJGZcy54cKyVcdR7Wxpoms7zx8sb1pZo12TRYvgs74V4KDWEb4YRadWj7kvN2YLnrmc21b9",
  "key25": "3nh8uCpqTH2hGxEKGYAtv4zeqYLanT13PNDbWss3Lpxn3AAn44gd6yChh5exhYA5EPnDyQr5NdLRykSkZkQpQXpD",
  "key26": "uN4TArwptMyUK5o8rmFv8RV9up5mxEK3UGt8zPEN2A2tWodatbhQwCKq3kQZBUt8cNKyCnfv7TsP6nH2PpmScGo",
  "key27": "eFjgGY4egq56NnJUfQSDhFbg52rV9Nm2qqTGaSGDkpR4sphkgKQU1NQmAFLK1TypM6ZhVhzK6Kg3AR7rXyvE1mB",
  "key28": "3hdPDcxjP7vQymvq1pDVHZGcUBHiXkMpV1vVp4XAkAStrH6ozyKZ9t8Go458XhrmcLt9JbdyJeT9955jzFYimHh5",
  "key29": "2M1VnG4TwM6ev6r8LM492x2P13wb1fZZ1wJfz2RpW2sNgKsPwPsUz3Sg3mtoA9zXGcUqz1GcfDuLVaJYfTwjrUbz",
  "key30": "5X6UF1ukXjzDvhBuyVDvjxrTSW91HzEHdfCY3BwsEAdhgyS7X4eyrw3aLD3ybJEyWSxBe6V423ASCCQUrVh8nAwj",
  "key31": "3MdqbyW4n9PoeNrxAd1835utHS4HBzjJYiH1hNCtuQFfxdeCL4qZnicihT8KBKedCz5P63PbGhueZUPeUbXQ8oig",
  "key32": "4fA3rL9jvqfqL51ZNRKdwGJgKfj9iM6uiiiMFLnZmL5795dxTY5rwjfYDkvd6KABKHWpu4vvRhfibJgEa3LRiET",
  "key33": "q45RaA4xC2meSMrSCoXsTvMtZLTZT43gm6whRRmc5PjWeHtu3s4QHNnzAksMXgiiPxJhF9Hc3PaQQWgJHrG7KqJ",
  "key34": "uU1Xxr1ZPn7rQgrkVkAZD2piSTW9ci7eGuwGqbWcoQ4sqB25wVorQEpPcnDG3ETJBbqKxMtP1BFbr1LMUgzr3dy",
  "key35": "4nzmEkRdZmufSLkcoUQoEREVbmt72WgceqpKip7ccPp6bPjv4ooeNtwXhrBPfuDEWYekN2NnomGHsUkbQqi2QckZ",
  "key36": "4zXQ6TewTGBYuz7Q5gaHTr2udFskKvkFDLmGp9WChhQdJGmtXDacEbdGE2KB6GRH6GqW5Gy2sAxWXsdWvL1RJK2Y"
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
