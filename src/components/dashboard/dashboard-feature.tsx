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
    "4QL6b3ecg9iiM5zDFHsXkVmP5oenXpp7BgQT1N4tgsM4JnPrY5mGaKfjiqn7mzsBKdSpNT1CHtehi7XiwRLNb7NA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VcZNY6dXtrv6u1zY6UUAGFTFujcuJiCALvtzXk23FPsfH6nQMnSAp49kP8fDNbxcVAXD5Abaf7LFsC1pnXY7gKD",
  "key1": "4iDpPLFEeEy7taqf5PEynB9H4cNB6fUV5VjNpNnk7JbttAQpLbjJ7ikPD89t72EdUnD6Deetn282WuzpcLrnckJY",
  "key2": "syyNJDi9qrtdhFkJJ2AvBrr9vHxn15dimmRc6UoXHznpXZhUVF39fqVSkdCzGuM7ubp1EsWiLEiRZoYyCvna24Q",
  "key3": "3eWtCqE5piqfsJg9axvE6VTacekUZLsqempaNN8j4LuJ2ivCk7jQPTDH78Q56YK1p27CkKXGTyzAGEJLw2Qe9FjJ",
  "key4": "3dhWFewXkJAqyXZ79Ub6Wk5kiRAuFQLKsWjbX3jzS44qwzvC1YU3aEDKhZki6Fxh7DcqmSiVtuojpH4KfE12zYbc",
  "key5": "3F8m1UM5rLaqq2FbJmuqvNBPvXCA3NFCcuAg9WmCCWZkCcXGwE9B5fD78LKimBzEJZA4fxGDvvLB6DZK4K5cD87k",
  "key6": "56ByDvs4AxrerV5LXA3gsFU74ufmYP1s9paCBSBSYz92BzqyRbiEYZSnPfVfppq7YSjTegpirdQtoLQGsH9zP49y",
  "key7": "veatfoTzQAhP6vvByDzD5HeyUAzCxd6vJkkDGLuTbQwgxtbj95gjq5htSsWuTDji7BCZZsCJnYP1qGQshM47QNQ",
  "key8": "AN31HD46gdfcYDd2ut1A7YwFeVNetKZD2crjHgBaSgZbLnBFUEjkb84yDFSHnCjx25XDHsU5M21FH5jcNujfWK1",
  "key9": "2Z1hHobwakbFJKgxUbmY14KXJnNfpgJnGntAAVNQjYx8appaHH9qXzhyYLnQwMeiztHAvpyBmTNKyJ34ec8hAWgg",
  "key10": "3cNEe3rAG6KS3UxC9py9oiRAsLi4jiz4pU8xxZThqCHnYMd7zpEduFdjmkyqNTUnSqXd9qSZBqCX832pez7WuDyx",
  "key11": "3GLdBZ2YGT29MwnEFtGkmgDa2xwKvpkDTLqZHS4zx9tKxs5rXqqDxb1Dy1eb75rUNwfHZ35eDpwR8WNPQYco1veU",
  "key12": "4hsH86drQ7bZ4YzSNJQg2rriZGhkQcVG5EhyoF6Etf3MQ49qGEQDa74yB7r1SH5pdsV4xQbSEveVWLoiy9SoQLky",
  "key13": "2J7qoVofghJAmPhUXcT9uk3U4zynsBrDgMkjChbfmfG4GzD3Hq4VgirW4bjyQu7625qcUKmhCUYzLYiSyynbWKBk",
  "key14": "VNkJTUprxQxGiqcaPzfJvEBf2sceakXgZLF7e7i1Jj4KcxiLyjj6C5aU4XbiXemwqrwKrKr1xK1mZ8N9fD7TjDR",
  "key15": "4d8thVfirQv6fmxQsGbTdNwgLRN4nJecKmE4DUzoJLDa8gk1AHcKoKHPCbrpzZ7VHSAm8Rbh6kFQSFqJd1J4bhMk",
  "key16": "5f6QjZpufVo4e4yeXUL4KyfvyJQMxfHjVKLx4GD7uqwkabyhw3gcDtXDHZm73tH4sJiMrXdB2pRhTCajyPrTWoWQ",
  "key17": "5vkXKxcwZHmiQwbLjeqMCdNqkaGbRbgwM7di2SniPb495d2Jof8vLtymLYL5tQsgUvUsUcpG7ZpmyubtqzkoUm7S",
  "key18": "4mx2u1APt3yQpEUVqANdyNyastJBWYvs4cazN5H3MSyoWW7GS5S5XoK31qzDGBkg6LrhZqxQDxN5WoZjfi5VJDMR",
  "key19": "k7ostY6zogF6otsE2mvt36PDkqzc2Lj891XEeePXkseNkBxDv6BRx7A2pW6Umj8hjutNenNzzoH7JGNvCprxL81",
  "key20": "5Us48eeTjEcyhasfSkgwB58RQy5ihwNq4gjhzakt8e3pqAojHnWVwrmKP9ETRiefkoHeMpdNVR9J1rFWHntnox26",
  "key21": "rZ6MTCtr4jPMU83toMXkVnr8HSsLBbDoN8g9fEXDyBGdyNFTRqmHZUkQ2x4g2fmEk7m97WbUNK5aHQWVMCwNxaw",
  "key22": "5Z96HQCo2bagSq19AjnTc91CeKSysGFqM4HFFqykue8ytjddZ6gZSuSmoYghAgkPrhWTRoiHgp9MjuW4ZkJ6NXz5",
  "key23": "2jYqQDuG7nJA1EEmjXbYtRcupkhB2LHLowo9oKrts6giLyzcBaTNPVCz2v7jv9tvnXkMyfVugq9fMzYxFgi3Fezw",
  "key24": "5ohvZV4DdygNd75QpPeLRpqmd6YU14eNyTDjYnoxVgBJRUQZEbCf3KJ2jdLdHtPS88gJd2RCmeS2MeztzfxRvFPW",
  "key25": "4EDGWsD13CtF2NYaoA8n31MdF3UQSDSXaF87FGoYVgCruTcWFcY6ifdSPBj7McUR6a6bk6g8ebTiMccFT89F8u9y",
  "key26": "2BgwopDfmxRomAUtEAVPFJxr2JQBHSwes3B76fRzSbmE2HdfiaTfKzVtJKVAxjZj79Sp5q5VLk52PihQFEeXG1Df",
  "key27": "2N5miHUFQUciSuYM26vPAYxR6eCQkaLwuHxpLkmGmDT3Sztc8vgyr9XVmipQQi7iBHLtD5LWkkYcbNR7uQRrm5Dv",
  "key28": "4LzAkDuAfFhShNXxvGgaJErgdDkaDc9jUg6kexYuDHgwq7Vw4ucfoRn8KsczhpbxMxMXk3vK6ouqmaA1QbsTZv54",
  "key29": "aiXRMLxs2styGesZ41cicz8K2nMCZnurmAEq1wkuRNZV8MSpg6CNzarVfRNvoN3Btud6Xe9KQuZNXnaX9gVpHvZ"
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
