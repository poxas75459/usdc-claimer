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
    "SZWXGBEn15P9TfULep7sdRct2BAfwSWHxPBKkXTSbXSmRj1aKEx15bAyysSd3yofwXtAMcWho9htcf3Vhi5Cp4D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8MSi8TKKjN158UkrCQNV1aUnzd6Deu755S2SdDSUmYvBzzCRinnztV1bvKnuunA9Ab2ah5yMNi9ham4fWsZscCQ",
  "key1": "5ro8x7x33u3HUfsniPgUH3aBm7mQkA4dGfn1thnx2fVhaVW8FiDFm9SDyNgLryBfaq4uiYvcCU4NNTH5V3tzSJDU",
  "key2": "5xwjYydMtr4EucRknDTZzcAbBTD4WFFK3PTUV2tsZAqjfpj23iHC32vM2zq8H16miiz6P24H7cNGouzcmeHDotvA",
  "key3": "5vUzQFrskSjsCYcD8aUUWbFv5yPLEiWpxZqNqgQ7CzvH8HJ9abo6mRYbjwUdUP51gdoFexRijHXTKuC5CDqUZBus",
  "key4": "vzqQmm8xJrdM5EsZJNuujA3NmiXJoKspTPPirzMuYLq5zYDcCknhTL7oZmUBCrk5CWC1rHWGxH6AoobxtR6J7y8",
  "key5": "RvPws4NRB7uQjZa7Xo1HjYBuYTDsi9KCm8F8banmmfSVoYnfhdphSq3SyJEwJHH7uCYJh4pmCDM5y8opE8JYUws",
  "key6": "5Z7aNwtym1PFJUFM5AYuMbND8TqYJtz8e8cmco989JM4phTFrMnjhRe3Wx87jXy4YWuuy7jij1ALHhXNdMvfECvU",
  "key7": "WxmQzt8zCPvDqJeWA5yK9cns5iRAH3HLGJJNWBeaPuPS5RXCjphohKvTSHSXtaHgUfepDtLWbb9gG6sHWPo2oMR",
  "key8": "2wZzNJ2r4QGAc7zW3gmaexehcQwMB4bQBqqjENaftS5pfPUk7wfDUVn5BhXzouvPhrrkthw2aACpcs53oAYcaMBq",
  "key9": "5pw1Ld7zarbxU6xTRU1mf43pa425ueLDjhFuL8dSK6wcdeEt8wdU3Smuc2xFd7LjJky6Z8oaYBJeJSNNNSt68qHb",
  "key10": "41c2ybk4jMEptjHWQV9ie7RJSxqoD5cP5tsNQiTAGjiV4B1F8E2infCQkdPHn4R744pZ5vdgEf26wJT3MManvhag",
  "key11": "4qCRYTYskvKZrfNZofVubUBfrpS38feFhMWE3fMLs6bN5aeLvMMrKE2xivptMvaKpv6uaKB2CaH782vVbxT5pL4a",
  "key12": "5iPNF3KbAJPVyj5vktvaRK8VW61LNu1AjnwCJvn6GKn9M1wzDi47jtPytNX8ngMwarC8Po5MnY3ZdgGPNHE8FRLs",
  "key13": "2dWmFP8xZnzUJpV3ZzzoZ9duFxGN5weVZriBwpZvitZ8ENMvF79hx82DzfPJ3eFM4bGjNUBZL2CZAUeCSqMUEN2F",
  "key14": "43eagsPyDKKLQBZnoXoAe1hfmBBpeohJRVLtXFttyneHpdEjFycdy2PiysdU8m8g4XgA7FCseyhnUh6JwGjxv5iJ",
  "key15": "3BfmDh2RBEamoDeCn6qCqTqTZSUZ3Mn5EWK9SCEhCUK4GgPk62UGc9EtfU7VYpLRbacA37aAqPnomxwAiTHNengp",
  "key16": "5kqqp39u9UMvkVwGw5CYM3aZJ7mKTwMcPi6NXsfdaEo5CFK6w1KvBNwjNizZnEHXivcbmZbPtNtHNvtD3T5qJrSc",
  "key17": "CmkQYLMqCKhhS2Po7LyAB5Gwx8knXNBuy35c8Kcy4MFgtf3qBktup4gKC3Tcyo7wyhhYv7NhKYXBPpZ5ZS1NyPr",
  "key18": "5AACwYpxBicLAdZAZyCmNE1PdTBqz5nWqE2XQeQ9NKhQL4HYPNwMVagwQ9oF8mVmjpyYPLdNgkYkFVGQQz9Xry5B",
  "key19": "JGRQDh74UbxJVWutZPzM7is66XUfhjhSqm3aQ56EsQe5wZtFSLv11TJSWpxmPmLidjuxmNGbZNvL3uY68k42A5b",
  "key20": "r33q9PmtEj4B8AJkDZtYNT3sbTxDkZbdz2HEhjpmZzrPRWBHL1JFB4z6iB3XR7uKsDcf9Fp1ZBaULkNSoxi7f1X",
  "key21": "4XLEydt66bW18hWBZ8aRc5oEioiW2Vaf7UXxixwN8aeo9YFtcpcx3LGKp1GqY1CSrL6jNioG8FTBpWYvGAbteo7G",
  "key22": "31bCFTFqi3ka36ozqyLUDNhtqD3d9yvtu696zja5f3HA4ixLN2YWzDh4ryXPPCPbpnoAsRBh64uzwEBBsboNCFY3",
  "key23": "Ejnt1fRUzdS89wbifauhFsGNsxf4T911K6KzaLZiC3cUUTYrWAcy7P83KXkAVE9xVfe8ceCeUTzFz1N1jZf2sZN",
  "key24": "s8FBhoCiBUz5oWC5dodXSFUcf6okgWmPvURVgkzsx4UdCxm1aPLosaHKgZ2Hk5e67vhVGi5aV76TWhyWkVsafoA",
  "key25": "NiJmoeBvosjB1KqUr2rHHyWhiG3RzPnTRmyzvzesMnm4EqmBajEqdeKa4rBHcoKyvjVQdZVLbtabtqByiTJi66c",
  "key26": "4ijxhEhMuCUYCDpxdbELiWDXgcaSrebsroNtDbeAw5uSYRgAL1JWkafn2RziJZ784VAuieW6zKTZj2ha9vb3jWT3",
  "key27": "2YSt8TmcEfdBA9ZfTb1ytHTvgUfirynN5r6rcDL6DFjiVbsmwEkJNgVbvBg1o9Bc3SNM7FGgcUmWKX7WLVsx3rVn"
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
