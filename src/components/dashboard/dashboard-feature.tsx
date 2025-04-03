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
    "5K8QxYkytpHhdYZyhV74humHqYDeCvtHmh8f16r1NyxX1jZZh5BTmJBnd93q3tYYCpNpcbLFvmWgT5Ee4rUvEdLL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AKtEAWbWommmJ2qzmeZX1vic3PgzRVPNCSvacR4DRmRFZWhUPFEdQex6pC4ovvs4ARGEVZ8XD1sVbkzbFCAvEnj",
  "key1": "48uXVYKXK1bZncUyKUYPi1d72XHSytmfvk6TTZxE5ukJRfPYBayaFHcJnqBKQ8NPYCACXRDxWEqWgiEU8PFHRFAa",
  "key2": "2trgD9WLW4BXJtKQdU5d8F2Bhra2BAepK6MHAqaKN2tZunvd6QykNP7ZitkHD6NBufc7zmZ5DSLBVUWvdsQ1gqg3",
  "key3": "3My95cc4FdPLdvKwmBCZNy2deAH8aTwgPn1drP7M6s76cSCTmmQJKnkFcDpvWEuVCoU7XZrodALmELCK42URwDWD",
  "key4": "5Sxnw3FvNSrouEFxkPNQYmkxuAT2SELzZKCSe6v4K3fTVrrqNmDm6UGwcHBpEpbFr25uboxEAgXEa3xWUZS3JqDF",
  "key5": "55p5jsXvP5bJEY2a86W22rBzLVP6QQUJo2ZF95EfvkJvsp1obK3v3tSLjUoDJ82d2JcscdqxznpHi9ypfakqnjJT",
  "key6": "4hBVGcTM2aRMZHxKYA4n8SnuoNhMsDB9NEzxbxqSwoqUnk173ZDK5PDQ2rjGi5hVtPBwRQHrPP9XuDTHfJsa9eew",
  "key7": "5JPhUBLqhhsh7gmM7io7ZEc91aep97DoWW1zibnyGJ8r5nnpqjrCdv3RutV7EmkKNyS3fZ7fF9xA9MmxA72MhFxp",
  "key8": "4yh6kfUj1XJm4spszsDUKc5XkzctaTBePuE5cwR7PLKACvqmMXfBrh73euMPLudRvfxTcVsmThVmYkinUNQzVawi",
  "key9": "2KQMVoDdtSyZvivXWhi2HRLAM8yPDcbdZRe6ZFrrjLnzEtsJuueb5ECxPvA7e1bsxaywHEEwVLtyEvAXJtaEtnAh",
  "key10": "3BjXfxfPCMeEefz3YFB2UrMHjkqLAugJ4caNt2J11SRMC7WmHqPfVi8zCZayFyJ1XsHR8NjqUV6nL95QhWzaiAfK",
  "key11": "5i4MJgh1YK3SUgXe36W2WfnD12zNspWqJGD24xAFU9iFN9e6R65Wgn6g73Rvm9cmTY2qh1rUvCLcaX84d2867t9Z",
  "key12": "5AebLcsx95VYi4PgoZJoPFRwqjbn9HuZ9nHcYkcNLcUfBujU1jYqDQbCKTUP2YRZi3T6nD1m3mJDNW5qnKrrrqNP",
  "key13": "2pjmdKToEypmNJS7JEAyAxz5dZShdD15DvrxohoK5d4MXniDhaDjjjeSEq5ZvP1xxZJsBKpBRpJMEpjiXEkYNrp4",
  "key14": "3pL5ifsEhKYhWwDFRRKtjm2oD6DeZyqdMoSg7PndeRjJ8Ebu4Ew5SBXvCJ2LGUgLd9DSpqyCc9BA91h8x8GhDgLF",
  "key15": "273kXa3Z1aoRMefCG4MErLPxF9DRD4TdNp18fDL29Z16tkK9siDRh5jzCXRVueUXX3K575CY36145QxyXF2CRCxR",
  "key16": "4QyfZkyscYxkNZ6hdZPWFBWEMEBCafqWRGcatYgHcocKyHnHM5YbwctB57stRwaNJWxbU58PoTm5JWThtfrr9Yj5",
  "key17": "QDeamDTfFroGEZpmCrfaNTVezxKz2goSBkVghuPz7ie1ZHBWFd4xHzShZyE4koER9Rt4fQ4ECnETLaSjka4jAG3",
  "key18": "365cfTmJEJPmGeSmsjoZrfKao14VywZZLHnFhLqMUcWqkG5k6GHFQGWbuF9okSZvkBtkdgV55YC6wYqmxtm5M6M2",
  "key19": "4g7t2kACWzStVdJfY2mmrpsaxirxKP1oKCJfudakko1oAwhgynWpPfqPdVURhcYEaZiRk3mTj4xYmnsuD5nZtikV",
  "key20": "4tEv6isQYSvE7y2Fs4u7fAb9qz9ocwkcq3MoEXhHjX1pHvyo2GDovw2VYK114R4FVN4tVvn3YC66fybv4JAEX35J",
  "key21": "wgyZ3yFhTf4Xz8CJ5azaUuQhyX6sMBG3P9M2Nz2PdiFzA9LUP9Lby3Vpy3Epro2rssHDFJh4ocfVzBYXTDk3XDZ",
  "key22": "5oCAsSQK2UhrzCCZZzVziyA3VWFAViPmRnzFf9XhQwpgPXzd2PVnTRtsYuHoFYgroB2ArRGQYKjiEGijo2rzoQL9",
  "key23": "2BQZsABK3MCfWD6Z7CkotMTEG7qZvq2xryViQoo1gL3DD84UwUwYyEXtnwR28hkuFNQxcHME28Umbvw6qgK4EPae",
  "key24": "2RDYWM12RUD3TBNbWT8R659x4QUncDvw69dpbB2NHT3ak3CDBNL4boNSoyjybYDAxf7Dh8KJthMUj2BHKs8CcwZJ",
  "key25": "5SBax4Z3qZq7woaZ9yBoZavF9n5pXWEQDbiZTk9ie6BXasH8Pyy5BXY1bn3TQtreK99mE1NfWPmjfv6kHmhDCerq",
  "key26": "4VSboSwgo3FhVkVMMTCdE1ctgX5YQ32e61akinmDK4GAvyZudGPc1H2AZxrWh8LthTJ8tz9Vdwoscgc2evhtxsu4",
  "key27": "ix72Sg5sAFSFXEoFYNqNzniamF5BsXoztD2TysPtVVTC2rF74hqnEyftK7pLbcNVjo8i5G6HQW38jmM92c6tUYq",
  "key28": "3YhEwHs6C6b98Mw3et1446M61ajYcH6RHh8zqpJCjz5vd64LCtD5dpNBt7BiLgdKjwUWJa41SFYMxBc1FXDK3BnN",
  "key29": "S3rknMims2z9iCNxS3LYh96tmJph4GW7DnDVaa54tBtsVfy61hTFz53gYC1jDCVhoqC4CpBhW3WyWXY6quXCVNs",
  "key30": "5WNnqsJZGAU2urFtHCDpWNaGk9eA13Z3bYePH6S1KYRTuh7WrbSeHf9sMt3QQnuufQorZ7euqkLxDV59CGPhUxeP",
  "key31": "K9NdzVh4eZ75ZWFAdVk1vKAREPiNj7MigoRmh62AEazTVyvt4u9BWZoCrwAHUJKWr76eL9PQ5tszJroVKcNmHJ3",
  "key32": "3SYyjLKXXh8QvTSPjrSzpAY2e7EbryVKQdh2p9vPSAj4LGHcEDprS5aKkZnRTFPw4HqzxS6VN7Wo5u1czDL8ghmS",
  "key33": "2zi5DyLUfeyQ6rKKLPDhPjhzvugadH8MbBqTPTdQ8JNsJpjsbuReJ1ePdncp1yEufaTPiKP23znAs174yk6ACajW",
  "key34": "1Pwy9m94RjwB6xrygbR5GWw4dUAMtXJh8g1PLkbpXxWFfxPoyvTm7mpvFmx8dZ7oP8ukoAMBqc1DwdnwQyfZ2Pw",
  "key35": "5zzH1FxFPSQHgrh9YW4SniivvKPHmXuvsSyJ9CiB1SeifM5nvTpsFDXAAMJJcok5BFzdBZGCg6KpNp14Yx2VLDRq",
  "key36": "34k58Zhrn4JyhZyD3hrbB5emUW1XptK59385bFCK2dXGZtUV2KG3zD1SvepFurPMAHtNmKRWPsoghc3E3jToQG2E",
  "key37": "3f7Y1ppapqc7n9oLxS8i9M83pBDS4sjhxZNqsvFJ2S1b5VP3s33iqvFPz7t7EsaZmHqeSesKxMWVBy5Efn2XULHU"
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
