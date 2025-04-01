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
    "3UuE7iJY6iQc3K1E52tFQMybPLPgeoCihq7viqc5E6mNKwCWZHpGUuQDyvaEcWx1y2GgN2tmJEu7uv3aWV4Skq9s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "512t1UBef5xgTdxeUJTELNTRQtLLgZQCSVyYgm6XanqejwPydxSiLZZGKSG15mwwo7t1DzuBYKmTdBToXseSFf2Z",
  "key1": "2eJovLLMan3pSakBfZFqT9RrxB1N6BhbGPajx56WKVsTSdr5Gv1RYaBRdaqpfeS1oyRAqpF8ikJttEmKiTBCwjwA",
  "key2": "89VppkSFny9RyrctcRB6ijPxyn9NkiVY5P9o7JKPM4MY5nqH2Zn4rJq3SzoJnTtGkS5XrjCfn2bNrXWhHzb5HmR",
  "key3": "3ZJGw1XZtMDMaGzdjp7Wgk6rgAVia19c2Bahy4EkrLrKZspR2FVRFNvfwoUUG19gnFa4kmA3mnVRTPSWARathpa6",
  "key4": "3JR8MK6fz4dqLEF53ye1s55aVS23Ec5wr3RizvN16kbx9Agddgm8P7WdTKYdyhD46VtejDhHK5djLHFq5WHMAwDg",
  "key5": "2kAUjh3a98oVnqNV6STX9jiUtUvc4tVtGQ7w5WSdt6TJ6oi5rcY5fGLLzPgfyQjtCr2PsfqErMESnhDCCMRaZ9mK",
  "key6": "qQQxr3zUnqbX8YZ8xja39UBdfCEMDWiTgjVmqgSUTVUFkT3uqPHAi2NDR2wACdyhKKoLnFrsndvNeq1r2Ljz3KB",
  "key7": "yrQRxVX5a2QtvaM8jNPDn5FpUCJDBRaYM3AoMs2snLbdKtPYswv2Y9jhq3s8TqPEFZNVEzGFJWjEEnzJybgGXqi",
  "key8": "25NAecrthh32zhN6Y6muXvygGyjv25dUBePHJ2PCKMF6CxcCPNrJjUm2RTsqSkyJxEWEuxV86y1p3CD9V2rJvjQM",
  "key9": "2j7xqhxCz5sqpTEhqQcgyFET5DCA17T6RFrSK5NXQoeVbcWzHmtcRZqU9nwpyWwU38z3iSUW7EQTVgvFf5X1Ca4Z",
  "key10": "2yU8D6HFKwcWSP5Cd532NEsCryKfYUE3btVqQLJvDGqn57EhezhN7ETpwv5Es3poRmGVAwF8S9xUhxdQJeqHwzc7",
  "key11": "5EW4azAPPiNqHZSge6kdQLNU3HW6AhtQWBfCANgcrwCESppAAMUWD9tf69nH7dBWPWrztFMy61oLPac2Kuv69N2f",
  "key12": "4WAJU6L7oWiBxKbpKBNSrxRqbvefgXwDajbdZazdLcN29EADcRCogTS5Y9db7oxFiUtZkxJRNG6ZSA4R8hJBkG7F",
  "key13": "NXbdzxSyPEZQePn2AJ4oQsYr7Uqpr7L53uqXg18HZncEszfKHn9u6G7a38KEqonuy4NQd9kDHiHC7LyKvTaVpXA",
  "key14": "3ogVCMmBRQC3cZK93HFgXmGje99m6PwtVhNcRbdD9ATZZpnUPjsDErBbXtf4MkHKa8hJ9F4GgfeHeAXhoS7DsLpY",
  "key15": "yU1t1M3wSLhaMtcvYkbjkeCxz3bUwtdb8VsMG5XwKHiTb7GXNzyFVCiR45hPm5akeRp8qAxs8QNowxTzaU3dqJp",
  "key16": "4adXfMo3Xs4mZPfqqzYEE6xyxodJtv8ZdJrpB4XUfzaZW9ztAbyWrw2PeJ9wFhgE2ofvVZsPGBrWsNReGycHmegB",
  "key17": "2KjBqfoWuvyPZSxRMQELzJMkUGHt32PLpjCH1GokQaMEBXNRUCLG86sKSeQAPKxoS1iNZLfTNCCGyHNREAT1oU8j",
  "key18": "3pe2qNbDKDhMwZSyFXNXKGK4pyDgfTejWwCprypeGyrFHsY6FbQ4RUe49nqXTyLGavZLBhugpe2DtLQp3Xz2SQCb",
  "key19": "5zTsGgie9GcYP2FW4DFeb3MBhcnFXjHjn1QJVF3P71yYpp4cMNdr146ny1UPc7EBZjqbWxUwQPmtFtMrsEbKizVn",
  "key20": "9Q3E1GdFWYmhcMyr2Cr79peCZQyGqjts5Rbkyo9ZnKm4LaUncDqJt7xKbgLeA5JK9pEqou53wrxN42JcGWBPQfS",
  "key21": "34um9bw7D61siuoHpVhgPEJUfRhErZu324jkAUmi24goK5EMrfsmQEnXUJ9i47CSW9hGb3BHqVfEyPCh95U3nxrf",
  "key22": "YSbJz56Xn2J9nMi3nVu2AmMnEJvNGePdbFBmiY1UY4vWomWCSDZBZnTjCQqpT5TBB78B6UXQB2fLyvQK9kji454",
  "key23": "2aogJYFPVPoi9orJqvespRjmbQFHnwqCPsgb7KERKjzdeF9p7cq4DVigbfVQmTKnjHpKYiAaHARurmmuTQt7oS4B",
  "key24": "5YTGYnTUfiaJJFR2EGLC6EJVG3XjXXqmjchjN2byK1Pq861KbZtiwm2WpZjczkHJJGcw3WyXcUL9BsayopfYourq",
  "key25": "5W4fTeCKVsU3tmSevRjJM5DYfw7C3fkm9drUpeuig3cEhU5SPNbSUu4kNukCF7bLZLP7Q1dN3YfhmnZsAVyL229k",
  "key26": "3hMJZpZeNUvJVb73rm9UeiDaQP1P29q7LPu5TDfLNVqcGj95qR3zPmaBPTcm5PyEhrPtMQLegiKmDfvEF6hGMvER",
  "key27": "9BMjSmGKqNM4fQt8VJziv3dpkqvUCrhNZLv4Aq1UZQPPx3tRhEiD5GgD8Pdcw5b1P2ZShX3EBs92tB48HWURabT",
  "key28": "3APHbqxVdJFqWSSHig7Hj7uaamZRWBMTy97sCzegKjANiC8AUVKYM4ToDov6BEqk6XZU3aU7uT2McXtsdzjR3KG3",
  "key29": "3Pe2iPMW2BH6vmGAGiGaWjqWrZMJxcpe73FxxJH5pUwj6D9m9x8oaGKAyE4JCmwEGu2Tor1TXyzFBpzapG8GTt2w",
  "key30": "5qbS1v8HQdsQUyVesqgVexLZGPTh4DEreDLSq3TwCnjNDRfX2rBQqirE1M1fu2bSV4ngyRDzBW7bApMLkhawdQyr",
  "key31": "PhkezAxqMKLSmYqbVVsiA1V5k9axUJMSTgL3iRfoaybq9WntfNTDhG8sX1KkUKHrPdTjA6VBqVDt2NV9fDdJs1j",
  "key32": "F7tYddFD2XitmCZL7wKUaBGbJa6M9qy9EjySfF4sFTYdJa2n5QRRYX6nmagAFPkHmSzgRdz1tvLe5JAnA5GcRwP",
  "key33": "4fuM25i9Hph7UpxETtqF8pkmQ3yMVjdgXUNDYJA6vheDvPaF68sARX9ZtyLhj2ADAw2bhDoLgAXkgkJtvTEyPtUz",
  "key34": "3GRexkEfqFNUJoDv3fVBhXa7wTEbQZzXk37FDETP7jtux3bhVCq1wwmZ4GPW6bPDP6cn48jyaFVUwcbYJFj7c3vt",
  "key35": "4Q3now928XthNK6LFcWkBpSoVdWqg8YQ3v44WKUe3md3ZrYSwiqkwbGVHa1etMv19mjGJYgDnTgGe63XxHqYM34o",
  "key36": "V8WCw2sb6U2LaTdBPFr239GbpzgKKijrgLaFDNM77PUhL51THVY9hqCrtpSqLHfExSZ6Gtt3KJbDKmUKAh8e9bX",
  "key37": "3Xgmd96EjvxgWd9ifZFbHKmY7NgFAdeR7GGes1A6v99ACnn6mCU9Wm4fiLNNihZr4Rv8eeuW5na12e5TKBs3YPVK",
  "key38": "3PwEsSNeZB6ETarns4Zf4HAZio82D7uNGXMuo192UyAZysP47gxW3URHeqrb7JK7TmKuxDdjBiQRBvuBrSvi8EiR",
  "key39": "2MTUNFZHHSN7BRUbTzSNneFAsbF2HMGs5SiiSpCEdxphuzVCrhcTXDmJouvwcBZcHVWPup23P9izZtqHrz2MKPv3",
  "key40": "Z5gaSMbgHZy6gPfhe8wNgonkEJxHTtS1ibXKRxtnfQMeATJtkiVZJnEu8yroAxveMAZ1EgdGiYitaAwH3Z1boqL",
  "key41": "3rBaF4TDoGmLL3SGEbeRjGtd8kyrDHM5DbVq69FGt2gN5Nj8SXKfib3BRCVBZ2Dj3F1awFHP8vgpYRGdAq5zwkpf",
  "key42": "i3ssPLbrGF1Lb7akUYvxyYC7ws4wEUp1Xf1mmWvfshAQFSQUC3n1n6eor69hVBQWmZSaN6PASAuqXd5rguLQwyW",
  "key43": "5VqgR12iUaNn2kqEQzqhwKSMXv6DAiyJJWrh9kjeB8g85yb8WcMRne9wVMM9zxQzJm69EpFJ7dpfhEabKyGzk29A"
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
