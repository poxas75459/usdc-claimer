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
    "4bUKsBWK1suKa3yD1F6TAJjy8rfX2uMzowQvkoeqr9P9X8VyFiTMUiZdsYGg54GTCk4tTRd57jwWCsinPnVoQNX6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Yp8rFAdYcfZb8XNWTjhjaMkpinr8nAtqm8nkMhuUf5Kz4eeY4YUFkxUKkY58Yjgmp4BVy8sR6w51SvPYC7Kas8E",
  "key1": "3orQPCdzgTWtgpsnPY7Lvep9eG4WMfJ7BCNMJqpxBVitukBAD1NjViewSwMBLL9ioLQFxXkxwvizCP2EcJgAPAYN",
  "key2": "3U87uAvGHcUDWcHh6R6CsdwcAqDvFwj4KckMGfLRwV3MNxR4JhTCEcgSDve7sgeVTo1ti6SbFudP6f9GQkjKYstY",
  "key3": "zWyLeZaemUpq9hftine8W2au9ESVdFhzQNhyGjVBq17S4AkMNqWRqKqUy1ZqFrK9BC4ChidUNGZkaY3yAWGrHSh",
  "key4": "2kHC2qsviZk73pUaQgZoXFS4kznj66BkMVQEd3ER6pLrzV9Pu5ZyVF1N2iZiL673MWyBy53eKCgX9b3i4k6xQMC3",
  "key5": "2eYFBtMSBo4wrfYCxSj5G58LPzbB1TWFDSHArxwcBYMBCgqBsCe7RGnpd4Mu75kkhsu31BGANNDRKACP1Yk4aj5Q",
  "key6": "3HMED8nkokYJbVkoEw654jTRUfbH9rQof31FHACT5DHuPhdfy77b9pBP8RbHpjawaPqjy4SU6rdya3xiFLQJ7XsZ",
  "key7": "5knkkqv8PkZYD54Y1NLpWJrEn8NdNmBcnv2U7gbDPvQvrvd3gsKn6edrWeEhRuo5EjsWgWQNcKF2KFvyaLkantud",
  "key8": "3ZwxZAdv4dEmnGUm7gKyHeQKUsdwpR3FoNsYceSevaPyAi7qmh4Lii8BLJ65qQfCguUTZQKwNgNju2yETShJZzJR",
  "key9": "2uSXFk1tektiSyfPgwFpZYgahdf7a6wsPjiAc61W6kaehGsaT9ud2WD1fbVUpA4eT5dATVGqiejRbR91rNq4RUbP",
  "key10": "GUZeXSRaMujgY54PRtoBMBEfeRLXpxncj2WhKa7MmHySd3aMhK5sugb8L2f2EUc8yB6pPksfo4C7MEFugogGt46",
  "key11": "56NduC7vZst9GQZG8uh6in6EpsVV7rquKgw4tN2pkscSSjrBxzNerR2wF59Md3zt9gZM4mGm4o3foqqbVNJyMVqe",
  "key12": "WA2TN2QZHpZvtTRUocEsYyqtLRjDkJSb4fcuKTrJjb6zPZTkdCSQuwPoKSiz7deSnmyfWGp9wJab1YNmVzS2Gf9",
  "key13": "4eeG9UTFBDXefq1rcrp7tjZRpMogG13XC3UqCLqaNKva1hgetfvNs7h9uTyXDAv5BxT7Q6QPX5mgGwHSEj8Fho9T",
  "key14": "avPtZ4PQp7TXrofyMZKSQ6CndaL8mjZB4nEmmfSuxYWu6juSAFjVwuETrBA7ndFQ6txJf2h3fT38T8pLxzNCbfW",
  "key15": "5agqVQPkGpBwbVLStSQmjXuGfk9UQeAJDm3DC1HEAeocyqDj2NjP6977uJZuouxSpiiGuqmF7aozkWRy7XUP83RN",
  "key16": "3wr1UarFdp5Z9aSwfv1zQdpdhNyQkh2A3FezKdVrw8xZvzjS8SobCxHA2YnYwRHFNrZRuFvurc1dAb1TUPzQTzfG",
  "key17": "QBbBDbKdXuDG71uMWKXGeexAqNGkhcXTQkTVfaX8LEhf4JdxjrMHyZ98tgYXEVHix3Tt6W8UPxFntvWZGaDQmUi",
  "key18": "oJUY95db47jED4omxWvUbaYLMN6T46HqfEWCTz21pyUx8UyQryF37qAJFSf94egeTtvX3DWx1sh9ygBtJAD1sxz",
  "key19": "3nnpLKmPTdEFyiQ4jMD7c4qBawTvtrvRHcFtaasST6y7PjDpcWmYB9i81DEacdd7PmDN6ZHUFj9Pf57uEmdVhY1C",
  "key20": "3JaAe1D7CgRkjMpCoFZ8NjLCdy5tSCKXog4f4XnbYAuu3Sapf1cUq79xre4gqWxHFFd5zsJKkUbzub86LNR3gn8b",
  "key21": "2jFM1MjU3cbVcKihUX6Aov4EMHTpSGa8XMxjTvrYhpWbLrDBN8Xf9tVwKSTma4qtpUVtPdAL3dmR9b6DsJXzGzp3",
  "key22": "3veQMUrxixV8wSxgdhmh5xf22vbojzfyHDhbp2XVRARD7m2Zkvf4bjGGDLs6SVQH5aFJkz69Grg3zMd6NHjwk9Be",
  "key23": "2UKHAuHWMsJhy3JnoZHpPStQbJGhyVMoWbCqG4yk1vf2hiZwsbmFEAtU7em2aPUVNyD7KPqQTC8nkSbFsWEQmK1q",
  "key24": "49LjUZV47KjiMSiDkDtFxmbCJB8tgbLmZYjj74bbSdkaAGFcxYFeP7uQB4skNs7ULUYCsb3iXHpQvFDbQBX9dJZH",
  "key25": "2okw4fZnpjaEBQemaKNZYhcU71pbMAGf96UqiJR8i2irVDPF189a5muZNymqWjpgfMG6n5JMpgm7HmQCQN1GP9JK",
  "key26": "4kpL3Zh6h5sUBYHuAQgovL2W4ru2GewXJpESSmWA6vL4Qmuz2QaPimjoKWZwp3A6LN6zSUqsoyxcXUjyvvR7t9rt",
  "key27": "2zbwySvuBY8azzMGhNi6CmTtCpVAecVHUngRfvFuoCfNmNgrc6sX4TsWdjSFcWZFhcrcVnVoyrmd9AfVjCeXUoUX",
  "key28": "2Qd8rCt7bq6iMRSRQA5SQD6dBkC1KzbUX3KZ7etEXfnU7hh37P6EJKrw9QLHErzEdmKi7ee672CiL8tcHPwA8XEj",
  "key29": "66FbiRxyaodaEnjbThr3Jtkx7rC1P5xUL8MUo9xd6CAJtuiRpkcpdy97ABABCFii21THkciPsAAoW84Vds5JRtsC",
  "key30": "2Vhgqcr9orjFGkEGw1fDdnf8TNAHByJqPkyQhhJLxCbyCKpmBMwZmkR7AqaiLUGnokx2vVvN8LKkUZ3qPTjzUZr7",
  "key31": "27b5XwXKxjWErk59du3mBPbVZsDk5cQc8zmeJexoGyobwxKRCRjiTd7Li7fQD6vY27TtvTpGFm4BHddrKcbhbZ1F",
  "key32": "3JfedWJPW3uanr5yRsZqhbZG7urXLK6HeuvpFsQLFcJpnVTw21rcy5mY734yegjZTJPNSUDrT5E5C73VjeKdyzWj",
  "key33": "58kkg87k8X6pAYqKt2S7YMVH9DuM1xRpnj2vgsYe4FPCeUiPXjMuFM1o5L7wn7j98GFfbHQF6xFzUgrHb622ZCRZ",
  "key34": "Y7zNEVVR2TqvWugsG4UVuy4PctPLpdhLiSuEGFqzH12HaBnjmsKZkEpqUtLNKJbSDDkPnsMVpzzP2WDUQV5Fdq8",
  "key35": "24eVxSKUtfudkfdRUPxm2KeZ13zau4JHPBKDzv23kjhfByithnxEFJV5uGBsyBBuo8GNyd2yGkD33SDUYzrWwHoD"
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
