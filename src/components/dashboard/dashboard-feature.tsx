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
    "2cd6B3wUDcdcQfaioips7ReUbmXWNKujsP4zUraTszqy9KhceGJzqh64bvpDyfhz3tkRf1GwLEKHmpUYZWFD2Bur"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YKYp88s9AXWfwSqGLvGTmsRPC1bPoyKZEgtykPJVimjL38Hg1siQ2AXmGrQPw6AjvMbwchrj3sgMUg1VS5cNWrq",
  "key1": "4jboPkWqBSs3SxrEPJCgXGBJoHUk5fHbK89PMxzDfjJ1JvPJbfYbPN9kU2VoECRRKF9oP1hECzSWvgV7WeHzZYLS",
  "key2": "2Rxd2Qt6uTDLEe3sTPSh933AnKyEkj144mhqMYJ9JqqfxE2xqfRLKt77RX3uR3RPWaToMiQQxJkmpp4TMqvWMy2d",
  "key3": "5AUTPbQxvA1pJXJQWmQ7x5zVybFureG5rQ3MtwzhNxHw1TAGnUXWtXhuL6RP8tHj46ZiV99x9ApDeaVbatCocJu2",
  "key4": "2Ab1mYJxS8nzUeSCQmSkGNkDdCYqoyw4xiEWHP6MLYdVRumiGT7i4oc9Dj63xVdFzcEmGrvThc8tsFZtJu5BvHtW",
  "key5": "2MG3mib3HPzxiMnzBtHaVHVL3K16MgCTYbfDHiWC6ubydsk4dEi92z1Urtt8gNV9q9qFQx96c1f1fDZng3mN3Q46",
  "key6": "2UhrgWaLj2FdruruoUdYGrohpFW3GBUNpWfuPmN7yuSDnHV2NCYP7UXgU8iUaRRK6WHCmB4GVgQibe2pEeCiX9BP",
  "key7": "6EYhCPsC2SvTFnaJQ2AeMmvzGqKvJsKbKhHPk2pcMFND3S2UqQwZ9mXEU7hepnanPESVFS84bW6Lqk786V9VBSK",
  "key8": "3qUrw7uATreXBAtvzHdq4R6pP7thLwsBk7TKMfNrYe6fShBpWAThtrRDXpyWrhU3D254Uvkkuc8XZ3ee9o88TbNX",
  "key9": "4tUkaLddXPxtP3Ayja97eCWeEcmUhKXFkQUUXtxPsjfiwUUJ65j9rW45ZZ9fZEvQ3seNXHDv1v1ZFF6KYLsLthx9",
  "key10": "4ZLhJYyrB22g76JM1RBzgPjgpQQfhPa11VcPfrNft73ZZbR16xtvEteJf9akWgMECrDxdgVyQcSHBF1ngYxQFmty",
  "key11": "vmTsoZnDMjjZCcH8BRcEgzwbcxmTWnxAPwRvfV3f46fpTUhq8xCHobeoBVqaBaytFoyni77NqNwji79gNa9cisS",
  "key12": "2q2rYLJ79GiRjrFbdWNDQd3e2uJHbxyAY7krJbQa48Kjw9sLc275VZvhPDZA9v3QnzzUwXMCNvXfRazbqe1Q6k2S",
  "key13": "4HjTCdWzWYUUuxNiaDzH8eq6G82DhPdWrtXxFxEk7a5bDVgBa2RZYVAJTKG6GhZvfUosvXhjBtHmsDu2rHXEB6P7",
  "key14": "4Bvg2nXcL223WinpXATLK9N7Co5TCaaTc3SnbEduAqRKq4jUE6yVWrMZi6rWpduK7P3NMiLyAbB6i7dFcdbKvN6t",
  "key15": "2RKrige3WMHyUhy1mXdXfVvAiDXhz6xYmk498bLiz4b3unhaPXBPMN9HYRLZMZmcQsvPgeqfXArNE8UJsAWdxXvu",
  "key16": "4NifENLpXS5sw6AFHe1mKHQELWtM9d4hH9NANgnd6LjcjmtznmUA7TpzxnpmXmrMz8gApnERKN9hY6doZAukcEX8",
  "key17": "53U82uSZqrExDMjtQ89eTkGR16Ct6VVcD9Mj5FSt4fc7DbKjLnptgiJjjWnDi6vPjR5HmYqvix8DGLktG3agGYmB",
  "key18": "3PxQTdcwy7zDRdSu9fq299F7jzNLp8PDyoWoRzQz1cy187CtDtkYQggjMUBHsN4cAQGsVov3CBbfspSHdcvW5Bnu",
  "key19": "3gZ9A5P14Efw1bSGuMR7M1on1jHStNS1bQrNFY7DvsEMhHGg6WNF9GbFhLa7yMRDqbhYSqSyDEdeuJdgK3iigEs",
  "key20": "2rFYVqVas415QaRuH9UNquabSnq6DhRa4yt4UQEeKA2qGhbAsqvYqjNXHA87kQ4ifew7BjbaWsvAKY3bUdjCFP9v",
  "key21": "3xPCoJk2vkGHFPU44PZiH7X9GiobRHy5zZiU35x4jabzuZSFQkFmWhfNyey2LYdrpb6WKXofuzK3MVCjTNy8Ljue",
  "key22": "5bRff5qhNE256zR9QnbMnkZ4fwwzmeJkb7ABEinUE7Nq13gb1KneA5vZeq4ZZrxBD4JtNGhvEiX3hAnHevPfiUEC",
  "key23": "3zGQ8Bn2A2LBNLnG7EWZFRqbhuanhVmZYr3FriWntJefCX2ZApC8Vq67iQked35amETchgpzu4yxzcevAHQczJU9",
  "key24": "3DKMXdSYocRau28XJ8rhRDyzKCueW9cnMV9Z5xrnHxvzKbBtVXwPyzdD8G1H9bwBvaUcQVcThfBsWXummn3bg5aJ",
  "key25": "4s8LGvTjaxAms6uW7HV1kPwhuW2ks17UZ2msr5zFmYXAdQoY3riHVKgcJr23DP8XE6sQmRSZYbCcGtmN6wBxLCJE",
  "key26": "34zAQMwGiydpaMrxxffpUiLL3TxVpgLfCquKwCHFg14tDDkNvT1TDv1CRt9Fr7fY4hL2GbviuBxSNEdQ1duF3GeT",
  "key27": "zoJbrcE2GUoy3gLVuAuxdaggDnBXGY9rWtEaujSZW4rNcXeh74mXkCDp2fFzz58SgYy6Y2ekzqUcGnRWVwK39gA",
  "key28": "4crJwG44qRw54Xc5SLThxM9CECMc3diKRP54MX5HvRJ96G2725E4WaaQLfYBWQuD7xAyEHVyfq4tWVUriubRTTmZ",
  "key29": "3yMcm2JdwvnfRsDoDkz4AtWQVr1PsSWUGXWHk13UNTciGM61SGreLvKcNtnkMACqkqVdKwRhRS9GZFTQXJ9xsCZ8",
  "key30": "rMLWxmq1kqFnL8kaDCUeq9ndoA9UMVNDe1uRSy7KjX3Q6jx4EBE9dL4cLgu7LMKiTRkLPK12cBAb9HPKHRjpj7d",
  "key31": "2Gm9b4KUsDqutDrMXoLConLmBAXQnmw6WNwJHzfaccPdpmH993S29FjgbMNmqtmVXgcgFEJ7NVb45NqEKLR2u9HF",
  "key32": "7jsAUUvLmzsQWjRGjwJQ8NZbPMYtLS1pHJbG9cfSuKbEejCzkFNBbqjsoKGxyYeeTeJKumaLZJE3jNajTcAuKDD",
  "key33": "3cLktGjvPw7kCKjaBwnGGhRfh64cdGTaPTUEy897C5p216FPETnq66Vw58QythZctwzkeGMCUe4ZaVS27crZv5nZ"
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
