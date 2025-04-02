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
    "5cMwGjZmRaoVWo2DoPPkMN9t8A3JaGHnby4n53DVN4DtcNcRDNnY7MMmDmLhC4DAXDsRUNctoPJWkcBMwpQN86Ro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25n9MPrJRMmmXDyhQ776XwVtwGvEYsGzdp482vu7pt6htRYFqeximwurdtSwBuhhfTLxmLzQ2hEcaqJhTssmacJd",
  "key1": "4wHjsT1TJFFQpHUhjH4rxzBQZ5paHyC3PoMnR2dYkzNHQw7sRLWXjARM1utoJws5Fmx83ZRWyZNpyUB2t484LLK2",
  "key2": "4cQ5Dbe5aM48Wsyub99oRhEzPt1GyD6AZWa68qgGoUy9ShMsACZcbosizMkLRssMN7KZn1WJau3Dkv45VLKKdVUZ",
  "key3": "5fefP7W4EUMf9tGNvWZP99sNHaqFdkWT8CzgoMpRcidGoe8txsB5HikWKnjiU72apY43HeizYSWoK4GNrMPiA1aX",
  "key4": "3cDihH9s6apN3S1XgY2GJ9wYZXsaA2AXh23Nm3vmV6eGgaxaRUJJeevMuWgrbm9STPYpVAcvv45u5jRFBMjaywag",
  "key5": "j5cEuuiVionmoTfzjdJza7Ey3Rgub83yf5kPz9aDWsvXnqpBrnZb57Ydy7K69mXPycrbdFydrZwrX4xJgwaZMQe",
  "key6": "3pPtvLKnG4pkhNj4PMq2xx5zmYd9zkgYi9b2CEpi22wpwqJ8LpSi722bf2TQtSTmW4WgvaYDuE7Fc74cchMxMPMM",
  "key7": "66uGNkNqhT85wLx4uqxnuYAjdwUqrrwnkrcBz2Cy4VhkJ24uPXw5GNoXbgtav3LygSCegpty9fVZESqCGwewY5rE",
  "key8": "4ZDLvXJd4pSKaihRayny7io5eWDCRXKAQrW9WSWQZhe5nSom5vkH5CqewsjMMnqsGyc56jBPvD2N9GMPyZJ35LQU",
  "key9": "42CpJ4At9CrCFGnp5DauLvksm4A1UY4ych1Yp1qMHnfyiSY9nCQtaeraAqDQAmUFxfc2nFuZTckDQhTZYq7oeZ5N",
  "key10": "3zmAr795iaRkb8xz6tULXkfzQGsycSQeAXHqg7Fp7eKdN4i2RwwUt5TVzH14QsfJBkXWfPEjMqBpVX9Ys5JPvQad",
  "key11": "5swcMGZB7kEK1xtnBi6FyHpHQRWMbVySzBfW1DiEQwUG8cucyEWBFmfQYjF7vTTT2EyUd5icZxiVT1tzYNKDqVYk",
  "key12": "45MVSjJqTSGkuPDoQUSDJ5TNLsQd2Gtpwqw4rXEubdH6B12DFeoPgAWm5MjZvEULTgXsRvPFyAtt1ZVfmZ75HGV6",
  "key13": "3rnTbCgvCfUYPUnQez89HpcJMaSbMnwhN72BVw9d8AYCYJ6AUWLfoNJz3b8qsr47p4qyTehQRirTgnrAhTTRq9dD",
  "key14": "5wEX6yqkgvfDohUWwsY7469ZpQk4xRp46GoNf2eMkvpMD5Z7i7XYVBSgEeKKSSUrbRWvXXVxQxzWmvPZ7YB2ggoq",
  "key15": "2fX4kkgJnAJBoYkyajWie4eKtExEEDdzNKD3bVmBjudMwKUqJD48zHvD1JkzpeokUEpQHG5G9DryRMgfE99SbQMM",
  "key16": "2L6k7793Ys3PmPwcu8xHw1nAn5kksBH5qyAFMEm6WwsudJbH3a5cCqaZ85XvqFT26xwpgRXp5A74gwHGf1NNLBiT",
  "key17": "3fRBANPkSSsBjHxL5Vd6aGc2qG1YcnumSarfdxTgA3VEWw7Q4CoQ9oUiFuavXpG7Uno6KgRmjx4q5qv6HeaiHCeb",
  "key18": "5tanXchuNdHfYvJDj3Pk4n7qjcM3Aw3AicwmQ45hjobGDq34yemmcyqijjgQaqs7hd4uAV8PvLoaPQoYCWeY5pap",
  "key19": "5ywt1HYGrSKLGK5JGpZGuvLmjY2kVSaRfBG4wUKjnQSJtTGjmYvVXpNMg5G3qTg66LUCnvKDvJfH9mFe7kT7oPF4",
  "key20": "669rBzArPaivFLAhFVQid4bRCnRZ2eXnoWHN9yqknW5u1QNjW2d1okG8VU5ig8YHkk1m8oi1PrswPFDTbWsmGbbA",
  "key21": "3MvZoXDhn9VfDMmCydsW3MqG727HLR6KVhV6P2AUQ77o7JDHGUojsHMimfgY7gVNn9Adevw75qD67PWNYnhdvrUt",
  "key22": "3xmsp2NP2qxGh4BjWoCu74Vocn18x29DwcAvpwcTtYqqYucs92VyQ5xJgdXLRD1jrcovahLWdcstHoCAbZ4DNC8L",
  "key23": "gYoqi9UV8Bgoqu3nNatUWNJtcNX8UtfPusf5sxVMGoWF7u7Nq4TT1Q4zpxTQ4rxTPnYuPmw6EUqoRbhPUqiMPiK",
  "key24": "3JaSfgrpTRbTrPNrBik7jKKrbbYkLT4djS65Zurpu16Uj7JurWC3woN8sG2kajWgeecggdjWuQejK47qiaLiXZee",
  "key25": "2CYSySzFtDhmPbuJyKuG4EsGZn8CpMxbDGe8By3ckVZPLqcEUWDkvR9LnNkyASdhEnwLPQLGBcifELwVbXAkv88",
  "key26": "55aoTDpDukAt2TmZHEthYqwDSxXziMJZayprrto6NfsJebkSZQpyYV3mkt1YegD6bnohZkKjQyEPa2oRYRzCu1J4",
  "key27": "33eZpmsc2EReCMY6nnLyzgvQ5JYR8AVhJ77Us1SCHgZZAzHZ3SYfuJr7JM2cYqDttMDpWJTxKKZT6sEjLmMuXNXU",
  "key28": "46nzMgQYTjrd8RnUNzaR18DuFynLdcjtAKEA5MNFe4MoBUtUb6umTBGN3mECvEjPBgjFkpWcePZRpCM7sDnrgvuZ",
  "key29": "zpXjR73rKRr5Nzy4Cey5bj6aHt6o9hFQJ56tTcWac8PGt8z81wJDnvrEVzBRQNhtDebc2QutGRp997pcDZfBfFK",
  "key30": "rbScNXnGc8MtCBYV3GUi6mb3hGpa7Q8UHmajv3A2Y32QmF7MkxNxBEozd2AeDQXjcMcNMtXCQgfhq3vCDUX9VaW",
  "key31": "5KgqwxdDMphg5LQvhmrTPZJuPCFCfdohG6w6Jf4CytrUvwzCr9L7QNtXxpDSP3mhwc3LFs6AyoGfiHdQL6v3pboU",
  "key32": "rRMoDaUL1m8HuWMkFyH3NaKXhLXBstW1UauEKUHKZfJUhpkK15dvbQfCMu7MgKgNs4VhNjGjYVbaMoACv3YYxUq",
  "key33": "2y2rUTVTByBpsLzPDffhcfbt5LayxdbbMMxnRZAbKtTFK67rbZuyFuDRq89PTcFMwDfk7E4Mrap8MA9613UgRnou",
  "key34": "qEqc7Q4UPoSJ5zirXFueqz1Ck9vzHLQLnRK5nDJsHsbmjdZefLE78fyZ23nittxtMiyF9CYE5JE83DUG1PzpwFA",
  "key35": "4r5SUhhHyandCZKXGFUqEjCZFz7vCmz7Lbzsuiu7AuT4ts5sGtFCZMvpwLhJevZQdP4bbCpMSKbSFmFFNUGASEyL",
  "key36": "tHECKTs4SubUhHaScq1EVoKgFaTddyTzCGVbSmR9EmxGygXz2VAvrquDfyWoUWBoqC6rBgUZNKpjrw5UMFVSAGP",
  "key37": "2XT1WmUphc76xprneqfHM35vdfeVLsKRVwiiFFNez9eryr8eevc5pckGyXGDe9YKKRAPPrwWMY5GVGy1rfDxunkT",
  "key38": "5iUpSx2fjNRVRnx8C8JdKt47KJiYDkqzCuDWx8nLHEDTkDZ2KkLfknRD5jotWMz7fQsxuLMcjpuFfWTXCNAsrW9k",
  "key39": "225uLmer33WJoa5BxMhLUgsTz4nFambxxERpDnEesovtGXxpbNDJufzckqdEeMvctR7xfpNKzjWZbr6aJLb4do1V",
  "key40": "P4uAf43Yk4YBQXNn2tz5whykF37CGbEo23ZPXRgicuTPuBu9hapuTfDBEuQxGEsGFmNUX554rEZ5UrDV1udxxDe",
  "key41": "4rJNi4FwTZwJxEc2aNPHxq7ZNKjRcBeeb8TZwUazHxCwjLpmNfK4Kvm4Jc1dua1r16eAsrav3jhksuXwP6wBSjmF",
  "key42": "5EtpcA5QqxucJ9MW4TGYuT2LPBh2YH4PptsDuYk8pofxm7TJqBfxLqFa6LPRwG2hDt5Gow9HSuHsCgAM1cmVfnPe",
  "key43": "4NjzAQXAu9uXYAv2FwJe1EjGSeCDp4HPmpLDhamV5JhzSFFyzg4eg5f8EB66BNf96EtxrSjvRwHFmHYjkNBT4JYN",
  "key44": "3f7JJfrWyzwZqG4HK5og5RhpEMNqfjZGK3nfwhbJoAkoKwSnSM8HWUiCS3MXP6pdEy3mseuiLJLbyZt3hqi5kw4g",
  "key45": "4FAtQJUWZs6otLQSwpTM9wHSdjbGYraSs8MHvv9FUW6AKixanF7sFTJJfHGgqj2otxFsSjVTmYBgHQ3EsBLrwmai",
  "key46": "vRY3CoeFBXqdhiY5iYUD62rh5H6hX6cp9jBSBjqu6rMMugykZD4EbkyvptDh1xk2j2GWiyV6DnyLRkjBbevFaTt",
  "key47": "459TDjL4N4eH25Y87dLDc2Tvk744x4U3jMe9htrGkszkZMF5RR7es77rmBPXt8wCJLsDrLJy3pkqeuoLqxipheTg",
  "key48": "5r1vFQrLwwZdByQzjWdipEsFf5fw1tEwotA6aE2A2gFdXQt9EzVmr6hERvkUg5Ys66WYeQ3AfBAQ9VDwM7d4Y2db"
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
