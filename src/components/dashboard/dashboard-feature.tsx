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
    "5P1wjRcGUjbb6FPj5PCWZzgZmhuAG8Rei8mwdFtpwArTpJcHRJa8ZXCfKEXSSofLswch52k7NExxqxBk1zVok26V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DXSP3mQptwh1hPtZCxquxiEt1PiWjNvWrQHFsouBr4fFbMXVE9StT4ngiG43YVhZQMvcb49RDragSrkEh9Cibb7",
  "key1": "4EGKZvatZs5DSjB8CAcMUZeaRUEhEfFnZ8rqRvFD4fdhfLyiUxqdfBPLYDqCL2sdo4mhudn8nkEHx73ezvdTAgVi",
  "key2": "3j1XABaayj5PVgDTWnhFaDCAj5MhcEwziBnWTHLmhXcaKMinAtNAv2PNuihT8LQPfZQH97PRDgkoWYncYeZsEMAb",
  "key3": "5ERfcjgLVeen12PQoNJan4R6zLyugsddmDjT3zKqrpDovz2P1xEBThw8Rd7NxkDg3jA4MVbwusuoHoCEuCHx42y",
  "key4": "hKyom1KEm1moCgYW8ng32Uo1hVhP2Fk5EudnRG7PVVwsiMZbsA9EiQmj6ETnfZ6qnrVoHko4hjzutHKVhqmtiyK",
  "key5": "4TiXdf28AyCuy8z4p9buX94vmT8rS8ougUSRRqjNb9ERrWbvDAjFuWfgQSGXQXkwkS4ajwwHPdMWuXiKJPjfhSWF",
  "key6": "44USmTScAkyEdtiiR1CWHwnDEi6Vj9nA4Qu5GyPXYQ4sCSi4fy9UAS3hhgV7WKUvuvmKKQJKpbZeBeRDLjqbZUWe",
  "key7": "587LTgfXC1LqhF4LGvKw5APw2ZZQYB2PjPPktDKVbSqtihcadNrDLprQcX7xoqCC4UvVxaf9XsuyQ4k3jA61hKw6",
  "key8": "3RDQb8DqKmDBVzp9oZhtfsUAxAsFe8uWZXkkxuDTckbqKaWKLBYMyuHfGzbGkMoTzSgwHTDzw9ubjoZhzBsP9TJU",
  "key9": "dS9fdyybAnwAvaTGr5bkPt8J4dCJoiH9uiGpwS4yzqhLo8mhXyxknJPPkA7YkNzsTFYUUtVPAtPnaX9cTd2hWSP",
  "key10": "5S7HnS9sXLvLtB5oZGQm7E2C4k4YHqQy1FkEKEMzQ6iRRd6mf594DPqEenaQrmRrVKikpi6PmH7fzvuAx6fF3XFj",
  "key11": "rGpjGNk4c86vAuj45SNdAptF2D11ndAHPmGeq2M7fLCvjZ5WS54Nd8YuubdLLPsjduYdv5bZR5dz6Gs8RVtEJZY",
  "key12": "PgwfDgSVxcLaLXZDnBwrAU37UBE8Fbb8P7kwcSG1RYbgVjna45fAC8ozj3jufCU5Q8LWK13Swvwtgt3FTrtxJpZ",
  "key13": "5mLaNWfbEjLSVpY4hntLrZXYExWMrgXB3aL3NAqmZ6v5ANDhQHeFsARwcc5gqp5m3rm638VayJCGGCeKc2HNgky9",
  "key14": "5FyDPCAbQpJf85LtHtqSHPTQHBmtDBQEHkeHQ9TKB9NsMHxy75WHYm8LG9mRecJ5gan7uad9R3cwFhHXtqcMDNnW",
  "key15": "2TKFAZUfEnMLNtrVjRb1KSED9rn6gUbP54kT2VzXHzax1EhE7fzPifaCfA181Gc24rDyx48XqjkWe2U6UGL4jp6c",
  "key16": "yvcSmBqranMFH72QLJEZd3GttEKvVxw8ntaEUkkpQVV38WobfuGxtZDZSjGbDazEfXnVpv2YB7d6n8u3Jr2EShH",
  "key17": "3jmcYDpQg7AU4cvjMHprwgdsbz8MAAh7ehJCMP622mMr1qtbh5Sup5P3d4FSjYSeynh5TZZRTYYdD25PG83QqXWr",
  "key18": "uHcd6915xaKVfv555mqzg3qS3WFxqNWBJ2uuz3F3cLVv2V4K5tPbyN33KThAWPmaAjYsN9PySaCE2m8mf5XkEDb",
  "key19": "sZxEkBWHTQcbByj49XBXdF5GhFEeBaD4zP4TP5Ns5TmAvKcjk7qAqaqtnt52wSZRh8ZPk2aDo2Ysd4k6c4iaa5Q",
  "key20": "2LQq9gJHsgj83BytdiHuLtw7xeCC3zeC1Ahip7jurAR3rKGHUAMQT85sC2mvF9Tj5YZoLR6UUtNu5wnj5pT3vgQi",
  "key21": "3Rg1S6W555FbuiRa3qwAQFSXsd328oMZtkN6aUwpMtFkL7XsgdgDo2NFnva7buJH7mFxQuDAoUCdDqg57NqZJcW2",
  "key22": "3srH6SfxxfTtrHdBjAjcu2z65oZP3Do21ohDme3rSi73gZcHuErHAU6bJRvMzCfE7JnD7taukynNnekgXRLohjhz",
  "key23": "2cd8i9qLkxepFung6YKDE2FLrqavGBZ8dWE4PhS3pi4nFjDoJX624JDziXSN2Ye52C2c779ZhKn8SRU1t61UBFGX",
  "key24": "49Ee3zAtEBLQqcRSfWq1yyjHZeaYw3zLZGwfum6N7ERrmLVsEfYx2o1T6zeKGzwqjqa8Dt2rk4VEeAy7hYybqfqc",
  "key25": "3moCQEHL3hsxp3cUAt7MuXJr8pemjLqqvRZjsguKrUtzCr4zs9x2hbaoUidAVRLX9xEgFra8vQo5cPP9MxaGrQeZ",
  "key26": "6v1HJkMt8ESnDCryVXsWZoJJGP3BHPGiexH6uwKknF8oDzD2mCuGiYw3NBQNjyJW5YLCUjiVWaSnX5ySzDMb1xK",
  "key27": "36HZgUqvVcQcsrUzakYnUoTNooUKD8mGoXHjLbynDp2Xp4pZewtBYvDt6h8nncx6zdYu5sHDCiA3KNat4S9bswnN",
  "key28": "5NHbYP8k9MHJoPNBPRfxJorhwq4CiPuzQ6n5HNv7Jw31wCDjhVC3aY7yGnVoCTkqePmLJdg8Yyf55LW3bFNqFDag",
  "key29": "3XcMBbvBqoWpWWZE6LzKfATkc2w2gKvcbW693Kjm4exY3i6X3njJVLu9KoSchbW2XvRWGthLcmeHA6CMdTPUwqGA",
  "key30": "5VGe6A1ncVQ3AXaum13UX3c1EtMG7piSCnXDZVZTGj5jnzFCoRDZqhpWhkQGbsUYHJTkG7vexLVCYFHoaE5uwtAV",
  "key31": "3jFKKahYrMfWs5Enei2Cg4FsYknT4CTt6ZKc6gNLDjXdRBQeinkir6bg2pjbaACpMiPpAmoUF2cT1AZ2c1SiEECS",
  "key32": "2JkssCvT86yHsKDxqigtRGBbQMGnArKoUrDradJ1yPwPGdx6MjUqXzCN9MdUmfcV7jk7uUuSFaWxQERAXeKphtJR",
  "key33": "4EBJDUDGGQtMcEahv9xbJta7iadoGHiYRxmUmofjGcQw2bnzvGrGi4tkUNzEfiYnuKjngh33e9z3WoNaWFmcc9H6",
  "key34": "5R5HSFqGDxo6xsG8BubsQyzH7TByvrj3BSc7NuRnK4JK3eqnuywofNeEB6EmHhc26PerumbL2zuD3CUfLgXChVvm",
  "key35": "4UKjp9SAKzDmJG2gXL4wPGoG3E48qwjogfmVr9ejHKLuMgwmXut4DDwKaYcfx1jexR3Rwsumzn3e6PU4rWmKvWob",
  "key36": "2h5vwyru764oeGhbt8sr6amsUsjKEGsB3XJW3j9AkWHDa1YKbyVNmMFFGG3DNFXLs6k7QABLT1GpXtiyswQBqG3i",
  "key37": "5Pv6jGTFVdAQ4HPjgc9LEph1bwMHYn3zzB5YyqkniXKxGA14hxmhcjFMVBpdLiW7qvNrdKB6j7cevLVAhCThrTX4",
  "key38": "3CyYQFyVam4Z74e7jKaVdxxDGe7Xb3QyxsF35X5AWHiq1zzxQfPMkv36mPTnBZfgigcg8KW4EyLxtCMikJHjicZC",
  "key39": "2QMBW9XUR3G1pWnBuPGSFzxub1W8hErWEtmah2ehDwHXptwUXYhe8q4cNuuqKbG4aMrSFTFBjKfNbiUiMcLt2q68",
  "key40": "4JCfpRfYkPTAffBwBbfTkPrsFjgXXc48zJ3g2SfS2zXtXuMQECYubvEcNVKU6UiafhsX75dD79QLBSiRKUF77Zui",
  "key41": "n71cYkRSRV8soiPrVYwRkfBMLaEeLheYcoEE3r1ZMrP64WYtwSzhnHg9usgxSiY9jVBi8Gwf6DZX2NcNDxWhYFM",
  "key42": "2TGgUC4YS6CbUsNmGsPCaQaaqCmutnLM3AkedAeArb5ZaaWCnBnDvuvkVihuoV6UopXy6UTkkbAa9ebzzndVgszU",
  "key43": "2Fcdc6AbXDJtvmPq8Z5X4b68wWHKM5QPBuDQhAzezvPtNrxieUesYPCXffRXZgeAyYdm8vMrYJtV24zAZGFa1cCY",
  "key44": "wz2ot23KAYYypasTk1xLQz4aV9MBtEB4BjGonvLHMfeku8rGaAvJdYEWysJsuCq2BULifuu6pVBQtKBKfn5LsSq",
  "key45": "318hgPEAUCeYmQaoez4L8Gc3gAW9Rj39cEvMKhtct7jnZ48WKSiqyXKGHj2KakKtE1LJZrx752qT7sDdxha65npG"
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
