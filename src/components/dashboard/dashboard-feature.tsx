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
    "3cUkXjquST8zKSDtA1vCmodCEFYwuYTQRWLiNb8LjBB2WhzqeYkGgDN63VZQ2tJscUnT3XbRjKHyhb5uN8FY2J9y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wttRWvFC5vTL2brzckvEkD3EHowReyG3vX6yUZbiWAVkqF97qYVMqCmrskqbxnBvrhj1yFkm1LvoQ9YLAJkSj9m",
  "key1": "4TqaoszKxkuB4NrbczBHWvpAzmejgKtEyL7Nwvof7pz3ykMi5fNYD2Fg7z6VkT3BQy7qNnes1mVMLhoS4CW2EFbH",
  "key2": "3Js97iVis2rQkgFN9DWQszM3kMgSG6iC4GoRmJEdp2zsiod1PBYY4CBexzi85kMf3eumZ317QEfFRfVTPtKGrDXs",
  "key3": "3ar1uSN6JLRrTWSWvkdw9jLT7EEh5j4RQ7SVHiDP9GcoeyuqQLUrPGcUH4G7WTXqc5xkgTemiMjcsiEe6GitPD39",
  "key4": "3Jnw2yxrukSqYVA9RvTHEky8o3xrqzU8otnGZ24tCAq9pzqKiArCEGpBaewzEL6fNwcphTnBNuxcaTn5fkqiAcgb",
  "key5": "9jcAXw8LnzGUSKx6qGQmwr2s9ifhYdhwDmUTsRwVjFEfWqyhvh1JmwQUBZ74YRMvA4TE5QwHQRn9pQ1G2LC1Y9g",
  "key6": "5CviQ4w6cqEiKD6Vfk1AhQUL7Zkx7qsMNYeQtatKaDNAGy3CypXkjwz5HPjV294qQcm3oWfRgKdZBYjornRFyxWH",
  "key7": "3ApEWPEKMGTrgAxm9XqSV5tfXnAAQHonaXo3Ubgo9QL4HJi6GapR2mdqjvukmzBQDwbSFv4At9jtsU7qR67g5G6u",
  "key8": "2qBkYEsVqVqj6vZ9AuuwGRoNwMroxSFZ2hSi6rtpB6o1uP2jBgoUoAGJGPvvPNg8Wys6WiCaZa3WAeDYPHQ8ajAu",
  "key9": "5CQoGehRZAPhvt4GbP3fR4DbDLEhHCt33qkBupvd16bqfmZs8ht2GzezJu8ux2ZtnsDAU2XcTFfPJyUjZihJDNHL",
  "key10": "4K1fndgpcimCbWy8QyJVzTJD7pMvnTXqdFhkmUQAVEEhkRGQ8g9hUc9tRhi3b7eR2o5bhFtXbc1gbonxoaCf5PTc",
  "key11": "58K7tCjdLyJ78KFsM4w8aEDxEEsEVVnQb1PHwZkc2wgTddHwQnhueVGNacyy3TH7dbWMJvoXWnCmkVXctyPECHq1",
  "key12": "5kgpQJinXoCUbrH2mAgVyiYkcW2XAGg8P5wkqQWumCTcept9DP5HvPyJkPtbSjHuZn9VNVbnHv9FGDLDqYkqwXqX",
  "key13": "5wDkuKEbiBLA5migxb17QBP3L8A7oXquh6JSvQV29Z8hSRsxXR95ARF8Gqj9JvuMUjkFVWR9hvpkU9rzrZcS1cfC",
  "key14": "2nVx6gc2wQy9V77cp8kXb81nvaDACtxfJeXEwvrP4AK7UqBSsxXCbztMzdRVkAE5mnRFLLUyTYkZcYQ9HHAG4BAZ",
  "key15": "3NqLD5ioU8XW22HhwNFEZn2DJmKPDSwWgqZkyGuR8VGvDT7yUXWNaDaSTgRk21ABNzKMnYD135DpSGxo144KR97V",
  "key16": "25fpjyHWoWFji1qbzEfUbEzZpBcA8H9QA57b6JTmH5TW8qcNsRDnMmZK5g2FJRH7MNUqdhtCGos3mDuG1ypWLqZa",
  "key17": "4wqhY1bRGFixeUmmmd3bDj5C9EYG2LtdsAiBRhFczGbdrm8Nem7Z4LfXFy484yyqVZpDRyaRVdFaeJYkG9jVfDbW",
  "key18": "48H6c5MgZ8fY5U7NrHVLvpU3pSs1tKRerGQW8RULCDd5x6XxytN81ozoLg9trTX1aGE2pHtWMMVvuk5c2TZRGoea",
  "key19": "5hfH8gKw2UPoUFfRRhhpWVuHGzMrvD7mMkNP3pJsVKKRi3suTVQdgGAWr1pe1ADwqzwJXaWwby3Ph4auNcpvRhCw",
  "key20": "4gKbRysDmuwqXm9WZSxDTogvzNLHEgCttxWS5wfTqx6B2w3eb3gR3WrYFx4aSjmDiYzB1jyLEQYaDtpyNKWWidpj",
  "key21": "5AP2ez3iLcEejjgBXUT2Skvkh9EzfckhkU9prv5ZWmaXw2SRmDTXUxQbGcLE86Us7umNv3NKKqE3fpmvwChbzxGT",
  "key22": "3E6NvjjyFqMCFYDB4ANdB2uwmB8CVZHHJTMpkwz1LqBtYiYFWKe6uPu3QG8vEisA4psveXm571tjDJczWze9XYsF",
  "key23": "36Z3tDSERCo1vF6Z9DvnKYDALJ9tLjLVs2cjiqy3aULcfGRxNvYHpEtUu1KggUZLUJUXeNLpkZMtJFHZKG14b9BP",
  "key24": "63gBfEmKJyYA6CnGxbfZQNjzeAzpUSJnb3GqWrMLbUPp5Be6Tzrw2MGmP74VoJqBXctNNbAd6S61eLgTaWSqjKW7",
  "key25": "5rDZucHkMYnGEcJKRNDAtNdfc8QyhY77qZTDFknoZH1RqpQhcJp9p8YTZ5rxw7Wjo3Qgz2HRp8Qq3udhLmv6Beux",
  "key26": "5Wspfn8d6b7NPZ4cc1pgQPHBJ5eZeNwYtfEkhAtp5M6aZbxmXXrS3JvdLj6BCSx7KKnegf8iyAaDp2knd5h9ivmp",
  "key27": "3rPAXAvULgp3mHLGMUauiaK6Lhkp8JhCZqDn87Qv9qhAMqzZ1LzPr4rw7M8EgKgJhsjkz1rASJ4xofmXWc625CoD",
  "key28": "4As19EdboBtioEqsTEXGtWA5qbSH7PutWMvNDSoxU3TRB8SH9JvbSg94FRkGavDkNwci6q5ehgvEfBFkswS4RHp5",
  "key29": "EFMfeNGd34Sd7JNemkowLZaRmMubdJvoCA7sF8WTa6PKEXiVM7j41d1nCUbnKsLq2tbkSzm4orjZFKspRzPznHT",
  "key30": "BAoNX5HfDRDGTq9W6NgnFpqYZn24YUoiXfLFp3nCqTPAT3ZbvQpmAf6Jtq4wW4UHrYrCEREnz7wmuWh12qmDcHW",
  "key31": "5i1U1pMRUQhro8i89J3FueLan7fMEARPtG2PLKdmzidAuuRDfTP455caqhtypR7i6R5CgYEDyUBZGQjZd4Sjbrbo",
  "key32": "2KiCNUYmYrL2qyD3FCd1dGrmDamCdGj9nk95DyaLuxuEuMvvKuLjJGodwLuRbnnM4mPiGK9ZMbVWaTucwtkuUhni",
  "key33": "vcjBfm5TAQimHqh1qr4LFfNo4mXgBuucPfa1c3dfoYLeEGsM4SQRGFS8cyA3R4wxmkCg7FXBpu3rbQ2ZYjWsnLP",
  "key34": "3qxCwUvCaPyJEUmppr1gRu8CUr3iZ2WdggNgRUByfg88UzWufZ8CMAHLJkMMMBcLDfBMTz3vq4MbbwT7aruN4mMz",
  "key35": "5SSfcUvgCRsuSNqxxP69imJxRPhR5zAyzCoDHUGQnQmNdXtFjPeSenMQpk9fNJKMx6cRwswab7f44eYZ8Vx9uTLe"
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
