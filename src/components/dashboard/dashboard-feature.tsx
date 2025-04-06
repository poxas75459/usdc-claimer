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
    "5R5Mpm1imUG964nPHifanudZQkX6iLTMHCfUSfBkGXegzF3zCsjRMyvXKHU3iRNKLYFZtWH7pfwdUA3GJF97aJgD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vPQHCEBVBtQCEomFxe6MB1wqECNTaSwFLMSStuRRkPPFeUv6Uogifx5QJitusbjCGKkwR9fUzers8BUD7h14uag",
  "key1": "5XM3WYHSmm3w3AUoywSonSB65YeTUo83QMLZhwQqnoffQ8CLqJGzBNWSYrQCFwQqVdBHiek2MTRHr9Td24adkEp",
  "key2": "xw2ejvN13LThTvUyrCxyqqKNebxTubjJMX21NooiDNGtqujH2cYst9rMYCSmEfaH63YBZFE6tNncTqCGKQiAeEU",
  "key3": "64P24J6upCbAXeX5qApgAXRuzJRUebBgYPLQVA342b5vGoV3VNT4Kf2L59Jzs2zyoNkNuyzNznraRu6sXRd1nP6a",
  "key4": "5aRT3yyPiyFNTKNLKwy4xJ5RRoqiwUtYrDhP7LjhxWJWzKp2wrTqP7DzXyc8Xsk2iVGUTKWzTRemarF4yd3a9mwZ",
  "key5": "38zPHugnhfLASSZTPGbRETnhyyDL1Xowz7ybfreWuRQoNPPr3gYDFY8QoRZ3GviKZSUHba2t5hNUNdy1sztxThUJ",
  "key6": "mQrj8Go4MysGJdETCSxat99zXAAnrdiJ4ZZmJKzxdvPT9yJbgWhu8q3tfXHyugnxtaQCEMqL2GcKc8UrBQJwAYq",
  "key7": "53gWUXA8sbQvnhpH8rfth7V9ptBLpsFvjnWhMDyDaPhSx8NYDxZ94Z8NBQ7WbbL116eJQ4Lnzys3qrmPdiW5XH9C",
  "key8": "5ZZYFGQwW4KJ1vLe7U3tC1nTSrMGviamp5Jdk4cmVAnwfgwKgHUSA8XyUNSVnTXrgLLBR9wLzuuUu2nqykcMRCmo",
  "key9": "4yxjaBAihr3ZxxQNCX5wrkJgJxAt6Wp7zxxYxQg4BYubY7cpCVVidLwFKGA4EvEmPPwPxABzL6Tz9hLQA2aSHbqc",
  "key10": "44cTvLKevbzzR9wNmNESFxnmTGi48Z7ZDW5oirttj5sBMbkxceFG58LobroNPr4Do5iVYSkE8SSxhinnLR3q3r8k",
  "key11": "2oCGBYWQ9SxrBYjoMh4ovngZKYJ9dXuKtkDN6qYbGLQZ6XS4KCKzp5v8o2kUhXoznMSs6MQuAt39vjPKFYsKgEY4",
  "key12": "5hdoBBKJq3dW5kcihBF8k5d4ynHwNtNFNgNQQbBx9f6iFeasEdQqAnEQXFMvjsaCqKVSivqgrfFP2c9ZPNKssgEE",
  "key13": "2kVk7Pn8pePsSNeqBtrQhRzhH5bzQrt57nDb5VHrS6nPZNmBs9QFN6y2XFJi1FWpxiatxWEezFivbH4BgD21s6sa",
  "key14": "3FPBYfypEXAzqRLD17DJVXS7k4RbbQK6udxCr5zhKCoeb4XkNTQ2Su4nrJp1ZNoc8d8LEF8pKgdDqomY9FUaY1ka",
  "key15": "5u5D9bUb5TG1zkQqZyuNmBfPiaEDQnfE4HKidLb5Magyryzi6FfxSEAeJWqe6NbG74RMgya9nszc4zhhQh7UXaic",
  "key16": "5gZM4wFSqwvGubgtCaWwfSpeEngP2AKcHrKRmiQrCRMMYKKSvbrehQdBr1iBxahL1Eno4tgqC26nPFhx1hvJCoHd",
  "key17": "36C7WwSfhpKfaeki1ZqsGCmmG9oZioCQkMNp2qKAhUy6A3Ug9WAqRssY4MdVHSM8PjytEPgrV1tiZAqwPNHdbt4C",
  "key18": "2GnvJUzioqv1BbZy2W2KTg8fsB16g3FAJLkY8dps6aYi1G78k9uYXdsHbbeCQMmCDajeRgJzwyb3dTgppYx62Pux",
  "key19": "3gRgR7QniFmPYQDdeR1EK1r2irCiwLL6AzxMqZ8VAgXcmDHXAyxPZLcq77PaWBmve91DBk5aJ8XeM6JkS15Eq7s5",
  "key20": "2VUM12cYN9wHTGRw4Df8fVPiJy51K8j1UWN2dJ9VBypDZx3pq5RV7ttB4A9FN15bz4Zk6ZQcgBn6kMbNxHNNcCPd",
  "key21": "4Pq2E5tuXbdGfnpeEXAEMowoBZkTKPPvZZrtEQfXBuefddHMxmjLhxUPKWhr89EcNe8ZJKBiGfQFrHvBf2cJxfkH",
  "key22": "2EQMgtBpBLqbP9DuweJqdbg2kz7beZ6VCuXRcaq8aEn81SRAPHv1pFttwDBBxa6ndaYJBJs2SyyDtNXM1B9LUrvs",
  "key23": "2JCTbe6BSmx3ZxLb3VW4YrZzNKmGpNzQQzogQVk3dTbdoVcCW9NuCj9EVQxEkAUUgRUpdpU8ybZkozuNL4DoatSg",
  "key24": "3gyerP3eDFzguqjaGMYcoLGYChKm7pLbnMiyG2ViTeBWN34DxuMum5B4zTiNeczYj8nvzJtcke8pj9r2i5o1k2GB",
  "key25": "3yGznDEPqoLJF5YfJmsApqoyPAZcxL4SEdC8XEiLzjUyNDkkS9cajfm2ZwNXp2Su65UmhiVXDiZVhhXgqdC5xKys",
  "key26": "v5kSrsxaiuDmHHXXQouohjwDF5BPTcpNkqr6cJueGt5XNtW11xfryMdgwAj2PianiFJA9ipKjKwo55257dePewA",
  "key27": "3WDwJ4YX1HZZmnDcEGzxQ8HMSZ9ZUnBtyB8wxRUn4CE1YHTb6JdXT7kc7hGJet2wH9ySHFmdjvZtk5TNnenzx7hf",
  "key28": "2mL8FuMnesYveAmpc4Y8y7pz5ekn3Tx8RXz1MWNA1t8g3JPDML4LJcTrQS2vG2xxt8t64FupvqvKRVRT4rDUt91f",
  "key29": "4uqAFNW9yRXPHeAbM3ySf752GUFqYrqVJZB2dkinYf6c9rFTyGRqb3eniCPuzjipqgh7A3gua2v1Eh8d75nxHgjP",
  "key30": "54gZd3sAPzbb21jydP3xe5V9sAEYyhmKK6aRQL6A39vtY253xS5EQ4TRYiQdW93Mvur9zr73BAPoqjwrfdRoNDze",
  "key31": "2BMzwWis4gHrGCJdWryQUrRQAiu2Es4JY4Xx5foBCfYXnWhizEQTriex23eTDDPgoWFbQYsew5RQSxkcKuUCdHGU",
  "key32": "3qnFKLdu7oFWYHujpiEetKXSJMHYBaTKYPwxnwxLLWLTEeEzx79cHHokFn4uVvhtAh5R8CTReTszHh1RtyJMY4M9",
  "key33": "4dk3SzqYXCPDrRHBqgCPsBkbbg94RP6f78qwXR4Fd4Cy84o23WwpbzuPgtDRt7abxW3xcpPheLkA1G47iykavF3z",
  "key34": "3tbXNu2JJuWa75kqUJKXcNxAQEkYs187cSczgSruqqwGkMkpQYqcuAJZfeN7WTihppCWqQFKsuAtjWamMeKuhoZB",
  "key35": "4BPC4A3mDcHoQMrYJLoPtnmU9rGZVZUXit7S7tJ96ycJ9pi1uPgQxNKdaGXXpByQAEPmAxWyxPCQDXxkT2uHt6bD",
  "key36": "4EbhSnCHFR9tmDW1hhEkajxTJTW2vD67vKEK6F79XYses3TUeeNHyX7Jm4fohC1cWpxJNHEsN8zY1u2WUxnBJZDB",
  "key37": "3iT1CEkK7J1cLBRXjqxAf7SfDVrcUdptEFa1Wy697gCCGgwMe5AYtEf4xUY6qZKJzuzSmnYUGdBJrLcVDkkhAuSm",
  "key38": "4gUM58tV2f5qFtm5vnzT9rFxkexuoP6ziY2uqtaaxh1v3zDKYXm45XgNiBANSHDrr9enjUCiMFpAGgB93V9qDBp5",
  "key39": "5yqm8sXpiTFp1THmhyefqsvrpHTvH7bn7tZwaiZNDybmKAHoriKtsMXx7C57Y9bbw85cdTxH5em677tzGZy2Fscb",
  "key40": "4f63DFBjx3BBpZZgMKcPA2GxBF37RhA3aKpHmRCSdQ7Qj3JDHRN9gYic3Bqsz4g1Eb7YKoYSU12YRtmgJyZSUJhk",
  "key41": "2ijHfx8pYpRqZpdvgxaoKDgtPwDzL3NXEKLPik3pLTWKQB7vCZVgtHG3HPRBFmTPEvDmdvVFiXVf5DtnCakMXVBW",
  "key42": "5sawR8qzFkKj75KFzYHkkSMwSg62vyrjWbBYEMWHk6VT28MVrDhP5uPCeVxGRy75HCgWSNUkbPBfvM6i4P3Lu4RB"
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
