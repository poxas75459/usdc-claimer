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
    "4CExDfNojKKu2KdE2soCB5gnEwcVw6Soa4uTKhvce69Dp1xqoGbX2r25fNwpaVUZDKCpCMPtyhNcGSpG6DazqSTR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "586mJPJTbAfGHALUZPmhLmVA9eJv7tW6p8SojdBrpTQYKrBnxFvoNfmjGEP5geuTtyuRTWkXiZerGBcx59LdJhfz",
  "key1": "qgTD7wk4JDYqiDYJQomYxyCf7tJ1SDJY2hsTQRsmZrf5aibMpuPUwMLNiDvP8NbAus2EDZ7izSL8w6NhEHF6R8x",
  "key2": "5rGyeLoesFSufnvEyH9NKhZiBVA2onvNKAsRSGw9yzThxwkGJSgFDks28X5yarv8PFtvKwTHA1tEJEtUxPAwGNBA",
  "key3": "3AREM5NhtWiMgdqjTnzaueTUqoByKvMAHnnjN5GhZz2iEWvXTXt6AErvrTVDxg8XmycKS556a5jdNmycsbwM787k",
  "key4": "CEdHFwLCcsrSho4i6tBbMDFUVrjVZAYwsw4VTRSVtoUg7M38xRafibf6xVmpneLu8fmfBvqNNrSandCoLW889oB",
  "key5": "2pCAK6Nk5hYepdhnd3fZYJXsTzt7mypfaDzBEW7myK81znmam6xdrg2kEUMp1vozt58xJQpYRD9QLDJbDFCjm4FG",
  "key6": "52WthM65aFMUATfwiEvZX3MdjCqsuMV8vAMLU7HPr6f32bsXJZ3j6XswmY22529MiyFC7ScG1WJDc7xob5NnMoTA",
  "key7": "4a5DPgxE7KUmoUKdo4odeGg3st9GGvHHcsjRisbMPyuiTQfBSUtm4LXYpw4Rpw9ZoFnDsaKuwi4a85rN8HDTFaPm",
  "key8": "2VFMsjcFbmwsvuDb3M9jMzXTNxFFtNUjuQvifSEsiGQFBCTFETUqGxqSkCpB6MBXgXJyKMnKECCzdc87YgdGgm3U",
  "key9": "2yGhF35pKGP7d7sbA3XgPaYH4DyL4DUT9nrwxBjbz2thzzkGNqdGHe4RNnW1ZchjbQ9jSqJf7yU7VU82dMaWXfmr",
  "key10": "2bKHCNy8h3fskb2YJaynvQRu37RY93jm7cRcV3mtrtmxE4C3NDX2vMLDDy3piXa7iwqHpLwi6A6Cjue3RhZoME3R",
  "key11": "5uRwZxm9vBQKqWBrabZoq2Q8k6e9jT3rzyzoikJiXkN77hAAAoiXCPJxqysrvDLsSmJzzrobSYKwVMYJ1V4YZL7Q",
  "key12": "4tnjqLaj4cL23KztRk3TW1kqkjRe5boduZNoaPg6pjG6PyUsmKzHktjF91Dx5uwdY13HnomYjrdpq513FiZt4h5q",
  "key13": "3GHHGdS5TnZVKUt3YwFRr36Rz44M61tkCFW95agFQoj7D4FKAah2swWS8nSHNUDHqXKuLmoziquj2dJHUkbdnX4y",
  "key14": "pP2TY7gxBxFcQdAeYcaq5L7R1GNpwkUoqEA1FbEL5xzye4rnTKSot8LQH39nCsyue1QBsYYmyWv41NR5s6fwdAq",
  "key15": "8cUSqcQXhcZ1Ri1rAGitbpa2NS3w341rwTfFcTVDWkwS7yveMCg8EUAdFMecAGCKEABAxPLoLLQYfek5bWEpmQm",
  "key16": "2cK5KpZ86yCdG2neHYnDiHD3cTnpFG2VtQT6QbSfZXGsXAfH1ZeZJ4yb5nyZt84RAHCLVsPShyAfB2jdbzJPvpJX",
  "key17": "3JV3jYMLvLskb3SaUV3DvngYkKnoX258NBCrmTcdyHKJsDxN5zbeKPtVAtA2VTA4kU8SGnHPjSq4jT2gkNbHVD8M",
  "key18": "551DExf8h9JkU5KaWhwxRGPHbUeMRqiKjJ43HsRpqfgkqKHnZAEsFH2pa8NPDKF3HeY7287Skwb6BsxCg1HZNrg",
  "key19": "nxRyEdV84cprLCYP5SW6ca2DexTSTAxFumGVXCseZVHW4Uo4PiyyNvecrZFjVnnFgShhoFzox4iSfm3Wt3S9i4m",
  "key20": "4qhCHg6V14fhK8zg9NsJy3QConNXSj89Qy2mCHATcP1SCn2uT9bUjaovVGBncvgAXjTdwNKrwzo65CshwmuB622C",
  "key21": "4fF49Pt2ZcHE8fA3YTUhBzgBSRwgRnJAPpPXhVxAbnFgLudgo7r7dYeXvfXu6Xbn4AiN79agvN9BkBokFwGPiCEB",
  "key22": "436rYdBvZcCNgY6KBeHqAh273YbfwTidm4cqy5jXvhsrjcDabeinEZd4EPcPTSVxJ2fqmQ3XSC9Rncd7KRAfnnQy",
  "key23": "3ecwky2EnwaAQJAhEej8PjnTAkTwEwpVxMqw5BNCxtjWjZrswgBFjfF6qmSmFe47d311hf7ELVVP7m1TR1UGcqXs",
  "key24": "4ihJM4DJH8NFGFhxy8UttHsKd64QVxCPEJQn7MWcrusyP1MCVveA2nUBSH391nKj9d8UrAZCJpui6C53qkoGPm9R",
  "key25": "5rntofup7gGagaUw5trYgaRqz1P91mohcFrgbgL1pgpdDCvvswKxfiaN29nq2HhF3r9Ai6wkKxLskuAohxaSwxgk",
  "key26": "2wepm7TmofhBagX8zJMFt1ioHsrPCYgYyvyeni5hkDB8eQvksdi5BP7PbdtQrgq4XG93M2RYNsJRqjnqbodDMZJ7",
  "key27": "4a3X5CwAeu84u8BT7SimA4fVfZnabGb6XA9KAmW3jf1GF2SJwzQvKj7XrBj65xAaBzEP1xB2dRkdiyNCAsotv49V",
  "key28": "4E6434PK5G5W16qZXCAKpD8ctLuwSLatx5TNaGJvfH3zMgTrCCxXgecPUiJRRcTuo5gFg3CMLZQczVxUWx16qZjS",
  "key29": "3oMcSLvJmZxX9KhNcf4NcQb7r9JSU6tNPJ5u5J3wwvb5AUqHWSo61pYTN3Zm49fLMT9JikK5HWKPbGM4x33mdVNV",
  "key30": "5inuM4QmCPvty1xknS9ejU3D2v8tVuhHDAkR9Bx5exKGkXu1E3ZGTGq4nCBtvdjMja6c2c2yWJ9PmmDJW3QBN8gx",
  "key31": "35NSNWnBaE8UdRxDt6yMBHP4hiR3X7b2SeFgavpxBfqrPAz2by919afB7yXYTSLq5p854tYEU6mcYT65D1ydZy7i",
  "key32": "Dpw9XLLFgBwZqPUJaLBbj8dUK2QtkWkUX5npK3QSy96mGTdFzbBNQNL8i8xiHrwCnqWjxWknn3nHR9DjCSWe8JT",
  "key33": "5bmcA4jtmigepQsZw4LwBb9hfNWCkFE32MmpiUgutWwQaJqXnS5BpMaukRhnzLk85BhpJJEVe2HKuZ3pMEJSkbPD",
  "key34": "35SHposRU7WQMeVBNxNRVhEdPU2XZmDMxTaNY2rbN92KLBuNhSF7N1bhQCduzP3otnciSGrf95WjPc1jJbq43vuA",
  "key35": "xHb1zPNPC89doX7YANLhgcFNXE2GpJ92ABrYAygvy9g9bFwonvNhEDKSsiQrJ7rQRMCxz5aXyqjJnSdLAXZU1Ex",
  "key36": "gkN6v5tWmHBcm2p7gp6kjL3ytdRdxKiXDtPpgTS3Az2kdEzgTfVvo7zLtRuwVnFfGMR3ujthLGNMaL7Ny3PVXaV",
  "key37": "2Qh2ZWsyUA8nTskxGbUZ9PFoUmCcDS1DwhGtTBfHajWfojtyFzQ8okusqLSypXL6TwVtdZXknZpQawYEESe7NehF",
  "key38": "baANTqA3sSqebbJ6qZZDyEBnadznoq2Bu5dtEQ6LH6xe42dCPYpLUUeENEuKkx8WuJqJsPrLYmmJoDnKmK1u16o",
  "key39": "2FXkqRpUGbugG4PCtRcAAbUB6vKnUw5UQCe4RaVWhEaM4JcDuGg55CiW1thfWvqaZXS8k9Ln7EZSggaLTbYhFP22",
  "key40": "4SvK9z1V9iNJMBYbn66YtMGJ73pRJATRKX5AtTJYdSQS5ZRncDTHMqCQPaR2ge18X9AJkkSp3pEyQZD2uFu4JYdQ",
  "key41": "5pcxNEd2it2HGS1FF4Lcr3UDSDDE723fFxPafKViwAikWkxtYmLxxPDcDyrSEtFrhQhrREBEXHG1g5DgLLaxyxaV",
  "key42": "2pcquHRP4ZvodWi4BmAyyieXvgnpo1kU1KePnkNgNTjWL1LtE6d7Suf7nMeH4PQQMxNM71Fb6Rn5v3kUxXW6Je5d",
  "key43": "CepSC2SQQLGtd34BeHv34w2xMPYaKYr2ifX41HWXVdAeNjE1onF4c8KQVRtiJgUuJjGcwSBWb3TF6UcBvxadNpA",
  "key44": "52Biu3TCTiMD8ABGnSWp4D79LD9MB6noM9g9NEZx565avbR2ihdeqRQTM3Vj4zrbmzTVpWLZQRbsJtaqBo9reAin",
  "key45": "46MB8DfhrfVhfKqFFaWHhMoGGBc1ek5NiFn8Ei5WA2cKpesiktQFx63igzBECP6ATA1Qop3bARDy2A3aBMeTszJB",
  "key46": "5eeqXrBGK8kcTNXesWy3FVD2Z2p5gLcjPLX7z4e1Q6TP7B3pCH1oPp2JyrKjFGnXhTwCyYzCh6pcw6sDPdy6NwfJ",
  "key47": "2FL7NV8j8F9bzf8mFQbpxJeNKu9bXrB3kMxjGto375Pq24r2FJMuDxknXzxqKEj5qmRHyS4suDEoh9WA3DamprYN",
  "key48": "28cHbCSWcfHidwr8aNQiDBQ7iJC5vVsL1Pffxh2nc93RU7y5Fu8fmoSabYmJqVA9ErSSB8LjhcToorTSJ5AVPhdi"
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
