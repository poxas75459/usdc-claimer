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
    "3dmhLQpmw9MoGb2ZTWWWd9ozPzWajTe4AqXiR7KHoetje7WG8LmnaVwteHnVBQZ7Hvg5avXYsuTj7G5U3726GjRS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WLsvP7X6vBvjFSNjx9Y4Vun4wng25PQeZ3deM9TCREg4MTwBBM2fUEqu4bPvNupwzSQW6pYu936JZHQhBUDFtYZ",
  "key1": "3bNBpYmJRd1ktPVJxwGBvvo7V4pQH7QzWKXu4fXdeii3KyVsv9Bhoh8DqTLMdHx7NYoKq3nBDhyUL58sMVhiWjbo",
  "key2": "3MihhMQw2DQi8RD4BZooQCRY9rQ36ipVdKeUmaxbEU25pDq8jP6ENr3dsNBuNiGQvg33bBmDtsGi89m9WPvg85jG",
  "key3": "wkTbDR2UsB4Ydu8G5G7DUzxiB9bXoXRWQL3mdBptepR7nVb5KuEguJ1gsFZB7aWbRG6uQVqHAoWThXywCtXfFKL",
  "key4": "BCwUNFAK1Z5UGWGDuow3ui8WwJ4mBjGKjvmu4zTckp76DBTomaSoDdpnqkLi6ZQBf4ZispLXA8T6M9fRyxnQbzY",
  "key5": "3VxvvFCtESQ6QB8X7PfoGXYXMYda6kgb4JHeYLWfdQaaStpUMJtK4FpnDR2tQ14ruEfeifESxyU6eVYD3Q3oNYqZ",
  "key6": "5CpYdsWLr36Pr6WuZRjq945Un6YJ1qTKWgEPrhSb8Vb1EMAepckBvTL78DaedaM7aBrRiB1KBZpyLoqMRK75exWL",
  "key7": "5qcSBDWLSMuFv4u3Zuq5cFdmEJ6yjtHMqgTLzMcdZPxNXz4WMknybbZkW177ipwE7uUyNZFNiS29p8acACs6iwbn",
  "key8": "2e8hPGq1jxTB8nmM7zpDsEW2oVKcyM5AGp775jeV6aPAx3C5Fn2ANd7MwM4ontu9gBVgFE4WLGY7ttNrfrBnnWUK",
  "key9": "bZ8TYYjLR518krGQyDmGXcA1D7Wk8tum2tAienJBCqAQLtf9UmJWVg5PRonoDkAGLHttkZgo8fwii63Z9DQXAVZ",
  "key10": "2kD3sooE3uVyEevqABQm2X8hV8pFeSRXbjKkYo1w97oWywX4C7XWd38GqiW7XiJvcffeqZuqT5ZcuEKWHyqQCfym",
  "key11": "3hdJjCY3ov4mixxax25NEqtwXbqprRwrmpRK8TD8rQhn1C4eWu2F5Z5aiXz3FEdu384xFUoSy1BX4RsH49jj2yia",
  "key12": "63YGBhv3a72VhnLzTx9YGnG38LsDHmED49DMMyiAecBu13oFvhV23Q4UBpsHxtySMzAdiD2g78bPDDbwuhV4Pw6x",
  "key13": "2yKyfHthmtf2GkubXHGNg8pSi38UxNL3DyEJTcZNoqRqsmX3s36fJXXanceEpH8Dx7tWavCwndRJMExWwcY1K7Wj",
  "key14": "2nUKhM8GgJbjdaptWW5YR8ixv6JJbGUZL23fAeDH7MVJf8yLWW4rnnF3pTWxskgnqvT3QToautN8CmyZXEvbPznL",
  "key15": "4BwEoixb7EkppmC9xu2tundnhpzmCuybu7XepcbBUyTszaNx3SeuMhtRxMoPWsVySFvjQticRDSGYYygnWmShNni",
  "key16": "2riEkM2fqyLNoHGef8185t1cN9Hzx9qnfB4PVeLepZeTpu46enT48snPKxWa8MP2izyMTpcxNV2aiL5f8aDYVv8e",
  "key17": "3Q6StnTph36f6jiWy1Wk69f698jVLAcF6hnx5BeKA8YcaC8v1Upa7C9ELt7sS4Hw3EEX2xV229QoavCzRdAmr9dW",
  "key18": "iixGmgSYkhTNKi6RgZfUtbFfAu8Gb6oaf4AnYDxV9tEMGT3TTqMcDAvCwFsb8DMphQJJGKW7XnAgKq26PCv1ucv",
  "key19": "2HFc9GJnhXNp1Pz9hYemLhPz4EQ18GQKPdYyxw4niyRAwnaH1qPoYboX3awJPznxi6KYA1E7vQoLqci8piUmiMLp",
  "key20": "2jNKtoCJdLvFbty34Y2mUCZVvzMMRn73KiBGQHiwwJj74TVWUWjfaKayjtexLca5LkRoAXN47ca2TJ8wwPzoWHxq",
  "key21": "9eQCgRAznWqJEpAEFWdQqUi3XjRXy2Ev1qmmv3RhCAfU4ivrgqLYRq6b2esVEq3ku4WegH8z9F47fGormz47cuP",
  "key22": "Nsh7aU5Lxegyn4fX2mWg6DnX8tiDaK7yxwgmLPFbpUfUHa1EBVqY3zhFW3Vc52dd2ndcfmzc3z3Zepx9woceN5v",
  "key23": "MNJuBFAPkQFntT1b744NR7enBdrA3FPpmKGM1cq8JqHGDzymxbjXymb9Jw3Bas5n29j1Z7dh2AdPB38x9cp2f9p",
  "key24": "4TQQAUy2awLpQ96j7gWuveo83VodtS174WqSpWuAm1G1yzP2bXxxDPSL7xCnpzf96DmpLuxgwStk7Zu6ivhwrE3L",
  "key25": "1hhmq6vQPue6FTLqzG51g9kemvb7uQB16dY3Lqa57tGUUmwF4uMYBDNKcS4qXkYwqpxBf7iwrR2eE3fvodrPfDc",
  "key26": "D1xLQVz9AzxFpiQQvLY7RDdubLmfFyEuN3RCHCs9osvGa8e3ygffRtYLAN4i2hvmk2qmRT2ZPYfb5YjfeEHbrLZ",
  "key27": "4LP8XRyg6TrrBao1EnA9esTDZgnSe6cWHe7D8Hqerk5RKTqutSBEqNaFpA8hvB6yheGhedvi4GzePBHg3gZX3kYp",
  "key28": "4ZgbmwbSvQyBfy9sx1XTrjy8asXzcFR5ZCBALHASHxnCQrKSGbRcVqpD9WDu7hpp1GDc5CaYupS8MegQH2bQSLjF",
  "key29": "HFjPgJFC2uRZXp7f3unhtuaZRo7hVMM6CkNH5er7RBz4NZf16Tn3nUbPESiYmTjXcJyUMHCcXpqwnSNqe5krduV",
  "key30": "KpteFmQKkCyytm3NuVUrug6N1kLGbFLKsqFhJTmay8acSFLBBh4nRj4yVE9Tyn5ATDYxstyNA5aPYRgSd4FGidz",
  "key31": "eSiKXcNhoq5nkrrCKhB6ZbQUq4c1r8yb4QQdxRk4sqyfgQx9K2sLE1Me2yHF4HFuyLLYTW6EVs7eKarhcVjv8ew",
  "key32": "3Wui7NNiDEUTyq4dZiZX5z8DLzg95RQLJ6Wcm4HLM41iuaUeDVmNu9Cob9zkDrE72uQxAyi8ucEWRrpnfJNHJWA1",
  "key33": "2tPEYj6TK5yRsagsstLRrUXgVcuQxfR4TNbwVhcK8AmhPE8ixfJXeBWHsvoMcmrF4oAxQ796WiFAG3upAnt3G1bL",
  "key34": "HMMBSfzYP1iSjqR4FewdYSZGAhLF8LSbGafp5Jw2aKUwHBeV9SY3vLd24yqE7Pt6oiS5DUZXa23dBb7uNVAJgKn",
  "key35": "3LkymGTv4L3PoC6S24Chapx9ccPU6bbrSZxooWhM2ZUqsMDBuc6bRzap6C94SdBftZqzCJN5KWfWFAosiNYZw3hH",
  "key36": "24yB6cDGxvZfFsCyMPV52frfFfzsPomt1ABtpB99hVEGv4sgx15pZoJndsJKBJYxchbAyFJ3wp3avzn9mWnjvihm",
  "key37": "LqD2XfBp6GDEvR1xVZMqBGdsqtfSiPchq4FvMTzYUvu8PeJ4ireSUSXezezK4QmaKkbafxZeEbgRiomGygGiEf9",
  "key38": "KYKSv7V9D4L7ERRgrcKC3GnWzPdFE1fHzrQehWf6G7THfeX4ViGxGdch7myKvXknXDqR88cXokrpadGimW6rjmT",
  "key39": "2R3JHNpmGrn5pFuhGj8f5jwt9YZGdGY4eT3CVuYSNYn2nGRdfAF78H7GVdHZvWpPkRZyY4gwUMcUuYYu7NrsWGND"
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
