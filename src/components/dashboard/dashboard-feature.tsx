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
    "3zL1xKdJF4eCSfDfFvU3LTSsEZj6X1ZemY5S12Hs6MCfrGMAzX3vJnnaPt6sjz3SV4R4qAy9rccQVn7Gwf6EQ79w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SpGxpFAXyCTSUm8jM5cyHQsVq6c6WuLxz56oXeEfxf4vQ1KGJjzmfhwEPJhV4NydnBMyxzEFE7k7xZaGKdm88nM",
  "key1": "3bTN878xtrqM2jW2XEm2iKhrdMAPqPZMq2NcrHPRuCjfCzAosubVeUEJqoTHoVD2iiPL9YwzyCLxKiyRJN2f6RKh",
  "key2": "39Ajm57FqEhNid2wAwkyuwz8qSTK7SZa9t8hZB4g7HpZZKbWEYw97WgZp97dcTFqBBhaXnixoUvZXPGwhkTiiNfx",
  "key3": "3H6Uy6z4AubJjo8mMB1vRZXS39SNiDXinEYficcR36YW6B81Cm1aV5zFGHaK5svZ9RdxskVES4gAfPFppdXFodFC",
  "key4": "AhibHAk3f3XMUKUGYk2GLFA2tQCPxBdaDwzrkvezUA31RzwuygRTYvh3wrrckrBA1DwMHD16g68g6f6iu6Ufkt2",
  "key5": "SLE9pUruN4mZGPqGaJ1PFdrc6wLYyXWQ8rv2w7N5Bb1LfZtnAV5Jx1fm8FjNxfzjqqnTWSNBNu58HrSfArbUEcz",
  "key6": "4CJ1nxnoysi9fdc5kUeTgKLnKQxw4VTNVL8Cx3jMxwSNwThsqvT2PVaqSokxV88HAnPYHmQaJXoET4UdL3f9d1Kz",
  "key7": "oqmXU75WkEMFXcAg34VspQcj5qziDqAmhRd4Dp8tbpP3Bn8rcnsmZmi3xR6WkDnz5x3Q3UH7DqUnuyvmZYdwpe7",
  "key8": "3nJ6ymUV4fz9MefMdFmmmn5ypDmEtwam6XFQK1FMd6W5d56nTzDehfvr2KQXnuepJBoBGeesswwESNasHQJqHb6V",
  "key9": "3W1Zb2TCGMUbcGPadeb5i5jUAN2tqeUwHBeEb7ygtRNKGb4WCrhn8iFyf9zQ9TgxytPBaZ78S2Hautm3LUPrJs1A",
  "key10": "2pXgED2yssYG6JgCaQfdr8bYEMVCANTb59xZhChD9D9vbQY8Z6mjpG9en1nmfjvoPA7ZcXgo2Tgho64iyFAkmGwh",
  "key11": "JCrAdFiiBh2pFh6EgwuFvhVAEsAPnuuyCjcZnenwhF8F9KXFbHUec7scimgmUzsQV8v5QUxXias2XxhakhDtL4h",
  "key12": "2qfVCejQgKXQ8tueEcU7cRDtctHxaZnT2V6ofV4bn4XZpXq4o6RRJMhRYKh5TzgisG9JP6frNpTKVC8ZjB2pydAH",
  "key13": "3zP7uamKyDqeFvGoYbr5L2NvSEg1tJYhoJK1o6EcqzG3kmUUW59nyo9tXPomCgm9UEdMUGViYqqP7Fq8fScgZYYg",
  "key14": "2sC2e1GhMMjG2oN9TdHHqRoR7Xd8ZDrN9QCRvJdkPcLzkR1QbdjqRWfzWc9NdC9mqtBD2Ada9A331b3QwFABqoHi",
  "key15": "2w7TSa69dbkGaX95caxQ1mXsZzK2uoK3YgX47UnXExnvVXmkzDueYtFhauGd6NV9MVDMEFvMjfvXgmAZqJgjR1Zs",
  "key16": "2YxreYBemFWghxim4jQLXkPGTQp1yzXLbhoE69227oysSF2f6mCvJnUHBGWE7hwGqqmvNhqMLAFG4c8YS6W3a1KL",
  "key17": "BmTjxEZU2GjwBw8E9zMfYYw9RFByyN2J9HCZyUqAAErs5c2g1GjgaT1D9oHESXXPjWUyxKdEFTsfSwpMLCYpJ9E",
  "key18": "j6yXDAKdKRQMJ79a7MVHsn2BM4rnqPv3vt38Bgtc2hnBMfWYzoUP4Vx5FetfRPC2EH5mPC1pgw9FVHE3N6WgLga",
  "key19": "5pEwQi9FYj4e9nUtLk7wALhwsSc8ZEvMePKhtdELUYLAi5tvzmbsuTcHLE4v6fweCikK2ujptRhh2bbmjeRpMsFh",
  "key20": "5Lkyzw1PTBsADkUWncw4HJNVNrVJNywV2fHnzbRimSfUedkymBvwQQcQHFZChjZ1ihCkMQjmcs8KPdfKYwipissF",
  "key21": "4rqdybo9f5YNvbUe3Aq6BWdYbibF2NikTgCEP7QXrkKwBGMpTaAtQbBqSh4Ed76f6r27GCscFQYBPG9HVMHz1rKp",
  "key22": "4UVTic1HNgVAZzrR3DihRwh4ynbmPqp4nNi9B2mV7CsduC6Fgju2oJYykZwCbfAG7X8FQYKfkCqdvHWvJq74vwmM",
  "key23": "2UgBSs7ZYh7QsN4B8vXUD1XXvHiMCxc1MYaYuiYuf4c7T8XGZ7TyoWzMBzX7qAGEySY2NBVKJaX4QN26RUYUoHpQ",
  "key24": "jDfRivmBwjfBqaBxKrRLpu8ekqNBEXRvA9k4V1Tp4WNbMzNUAQvEjLMiNsUZ9GnWMmVy233Wdi4P3pbugkhnpj4",
  "key25": "3AWQcnUT8tVF7SugixNu9kQkPVZ3eqbAj1CxxVZRYv6LMx1oSqDk6oW4S1pyKhtuh4uPeTNxDWKpXGwAV4vniP4P",
  "key26": "48FHeEPv454VV3u6uFtqSb2DHcpQa1C2BDJqcaNKCWqbW5qnvueHifCGqweL5ep1FdhRqrqkFSynDjnsi4p23unN",
  "key27": "yAvyRnkU84qZRuPph477pFpcBjrD6QydZCJe6FoYyk2cu2Mbm9cJKbibTkM39Yyc1QqgsTuqbGUMqn45J7jvCFg",
  "key28": "641onbteLVtadW6C6T5YiYrgFMwgD49DwQrQLhdzFnG4wWgNTjokYgHLiugw8s9g6LHeim1nwHBMuPmFQ6m8idYg",
  "key29": "3qrz7M7bX9mUz1KvWGgBm8NEhcJb7zcRUsahyph6UrcRnXvMmVE8tfK8n3Rhvp7JsjdH1qBHtgV36vecBaaj5KV6",
  "key30": "4MWYDYqGQckZ345Q9AEA3TbenKN1XpGvfsYLEihMXoD8WDp4HQJaMRoU3xYAgBnjDCj7uM4GhCc6N3b7JqZBM2sE",
  "key31": "4PFr15G2KkHsQU5yesworXJ4WTbK27j1EtGkYTB5AdxvHz767pTAtv72wgMXrG5CKeJJdbLKUFgQcj7aBfdcoCGd",
  "key32": "61jCjAvch9mmco2gzigmYmwwaphD55QRfoFDyzRdUfgcK9BaxdJjMhF2jww4pgqiYMgU9ZitDDoFzzKR8q2GoinG",
  "key33": "gegeZc996skSkcoF6pCJH4yqCuBS9S6C4gsjbCYfpHpsuMML5cHPeYABKYUsWC84Cpshgywpgbh3gqS7tV61C76",
  "key34": "4RnPt9YhhYouf4RUuaSXZRA7crwVAuCW3RWSUtwwJSpcfdJ68nWUUePVznb8qqxCVh7HVfmahpBhke9gtCoyqR3F",
  "key35": "3tmBzQRS39pXh9ZvCb92yyUkMeqH96iYCQgMojQ2pRnpzZ9gLdn821MKgMsVRXdihmEP9PybY83JrAzcSSsPLtFb",
  "key36": "44sb6qAtzcrmUuKBCoKnKWhzV3XMUp3Ney8TtHE24oi93WzxDrkpRN4K2kCHQsBNUdmpM1VQNy66W3cMmcLWV11S",
  "key37": "3BV4cmMsJ9eZWWr2Zn8QNtB8tujfjy2E36MXx5nvoAdS77NQBWwajhPRqbVz8xF9Z6FFFteEGqQME6akSgNVNJjh"
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
