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
    "26DGoSLr6jfggKYhdRbodbDRdVg2xJmikgxQkPVPPrE6q7a48NnNd7UVppmd3Dyk1z4tBmkKwG2CdHYSZM8vg5qo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31aFWDrj3D8BiM3Daz3JcxLaaDnGSYB3zkHJAbFeXNcYJiWNruPbSYniBHz1s93KguXtP2H7CppH2m2BsgWWTFyv",
  "key1": "2AgycBwqE8XECC2MWWyuKPUS2tQ5aWndVDFmfWfqRqT5FJ3Tp2goxadMFzn35VWY64fZVVab4A8NMhoEdnhdu9X7",
  "key2": "3eGMX16PjF4TqjrCjCxbXQ3SCvWtgwrWfMZL3ZwqgENDLZGip8vpFyWQNYdEB1G2du7bNp1UMbBaYjFk97umrwFn",
  "key3": "3jNZbfTyjYxwptduy5eWNGBJFMRNDJCTgV2BSZs7Agm1hDMebd4WRXwDTqwHbkF86omzNs41DUWUPgqdeaEmQwwK",
  "key4": "8PPuQgN1yMMvZhyVmvwdfrGxhufn1dUqVrofGiNw45BotM9kniqzRUPJoN7cdjd6PCYWqK9u3yBc33cvM1Q7988",
  "key5": "4FoqZt4KZ27kbqDcVwAyfAH2AmYPqbs7KqbJJ3CP9Z2c1YP1RPEfcXcRR9CHrf3JxvJKVVJ6mHM1b3Pt3LUt2vjC",
  "key6": "54YYHnDwkwNeR9GQE2Y7Q5VpXZrdfDw6EhKioZmuCtpwv55usoF3JWskK5ED3RZPTzanePknKicSsBakvAqRdrmX",
  "key7": "XaNbW9ed8dsSWf79ETcTFU84ZCz57LNLexwg75WUP8R9PSgY1Ap5VmHtNBFA8PYwGG38ywuBZvP4gYf7jAnMtMT",
  "key8": "4KM4JHUhjissPn3vQNWFYsGfrvkHrKLNEnR9kaWx8VZKrLAZLYcUiKRdKHi6XveK4fu5etAR5oASE97GJmT1Y4B9",
  "key9": "62jq5eikNhDMkfAUc99Je2YFdaEvNkqDh6xBWUPRy7CKfCWQj6yQvsqV5ivK89LNY17j2q26PbHRPXoeHT8kqsXw",
  "key10": "3eSpDbMu4PfjUrdWw856Poc7z3hETS4UVsNsS5LspSZsiRpGbBUujRxKhnTb7hbK5gq2hbMW9ntn5ZWeDQBnzo4g",
  "key11": "5k4N6296bvje41B1zns9vwmFrX4Zddcq1V73cTsbUHXFc9WhsigbNAj1VUkBA7PU956nBFFVutQ5Lsjz8WBdQUqE",
  "key12": "3sdHcBdGDFRv7ETqPFGpWK1Pur4FFAmv57zsusXChKNzut18DeL1s8FvBfKpK85dL2SQ1RibDxubpjY4UBd3Pt4y",
  "key13": "gWT3kKPNiGvupoFAxnduTnJvTNLANXnWNTKkrqxQRDYLV8ArxJ8S7oU3rWv9wNCQ4QUXp7TnirVnj3Cji5ZJfRJ",
  "key14": "2vzkkyjJv86xMGj3zAqNhr4xgX9haKV6BGPF8mer1kL2JjVqbUFFp7cBFYqzdfS9QVq6DuQuCKXQYSrVv2Ngg73X",
  "key15": "4dkDSKGuczQacJkePU9W9K7y3MTwgSNsYzrAPMAJQ2ULpTfSRBPzHRCuTuJK22w6Laab5MLGgmknKhny3DHL3o1k",
  "key16": "5EMgrNhEt4gma7V3ahcPVy47LY1tyXBLorYZsSj7SAK7PKMZcP8E6NSGtgrhBNATkVakxpCmA4fBFs894gkQB4rs",
  "key17": "SCw4uyFoJycTUdhEKTLpkC6WDJpwQzTYuHvhQoYiwUR7nRSRMME6gN13FeELp1EBT2VtkEzw7MP7teqfYnY5166",
  "key18": "Xgff1xMXpRiirRvjo8Q2SVMdhYqyr2Jr3HK3iH7APiZ7Qa6VeouqqifuZwSZTDwSUGzShoqARTS3rPg2jsCqeNu",
  "key19": "335NRv1rhKxrrfo3Zw3huQmSvAtzDfhyjm6vGYZ17t2khQ8Gb28s3fooNaqfXAP2id8trm6p16AhK1Pc72onHyAw",
  "key20": "3GfDaWFsrmuF9k4kZEqWdUqprqGfLijRGThk5hCc8cwnfxJdXJSma7VW6MZKihfEmL6nehEQJkYpbP4RegHxGZGu",
  "key21": "eaP2N7KZZ7pyThE6B3WAksSLj1CvxfWuj2qbwu83icaphzzsaTB5hqq583YkpEcyoWU8kHXTRYNZNyidCdudKvE",
  "key22": "GhWW62znbr7j917caRvqHwWiDwUSgeNeWtYN9np8RJgGjKmfM1QyEiSvbH4jUc2CEpgPufzLmsrfeRoTSugSxt5",
  "key23": "5MdjTF7qeHLLjCddgazXwdmf96s4CsNQSV42Y5juw4rCznuym2DsWej54X3mFU2SiQrX11dXKy8chzjgPWMfvjsv",
  "key24": "dcNG1xaBfwYxesNRduWjfdTnNM3uFFX3QmCGrohYHgWFYyu5iCA4w4zLA84myegTUowMWp5tJVwpD4hRpMwdBJ8",
  "key25": "DcpJ9wGLUhKWmtUXAbq26rQWPDjbCbT9zVEomLgR6itCYn6eVTpYQr2NBUTYHdvHLnxQS216zfL3ttq5yfYuNqP",
  "key26": "cvsjhivff8XpnqQ4hku6PvaB8snftT8BaJsNAqEb2Ywbfzyhw6WUF2dtEBWhTqXjEufkJRpL3vTN7wNakRYHDmN",
  "key27": "2TkV2Pk9ubLFqtiqbMiKmCnzTaiJqeogJeNk3DyfwiqwJnFoXQ6zkSaWVBMGTyx9rn3yQe3ePWrnjkQ3DnUavJ3H",
  "key28": "5dUVh4RHquSGiNLwKSFVV9iqTJY9b5KBSbF5VDYBzW5ew3y4NMirfN1bP2hxNtf2eJJRUekDaKnxepCzBdHqm2i",
  "key29": "ejrU56ka74egWVz2qfjuFzdCTZAHHSwqvivboNzBb3QaHB5Xj8xbRxLM7kEsk4f5JkhVPNhBm4EESfwZzczzUhL",
  "key30": "KihEX9CjkhkEghc5Eoq6V1W3bbrM81BCiJn2GUjXaNgCkogn46vE3uvnaMy64JTG5hgPLiEUxskmm72q48fzsZW",
  "key31": "478SjYnxZo3f2Xj3KSPK4wzTt1Xgq8sPVwxsVfio3nfkgUM3ey9ZuAT2cSw8wFqhHU9E99AGxuJfTq5XAeVUetre",
  "key32": "3RnMeqNhWNhj5P5xzZbeqFS8izdoqUcEkp2LtcphM1GFo27U1PQeVRaeXWcPhzwNXG2VDFzyfUjKKWhmRkqSadTn",
  "key33": "4NBgcKExsufkHNA3MmJW2Le66nu8sUjrC6efe8Nho2EvPSeowJq47J9wSwrB3qLeMzybnLBLonvi38zb3jw5qfdH",
  "key34": "4RTAWcr3Sj4QeiMpjbBHuKmuc8o2kDGTsa6eYL9Um8NMcgmRTgw9Foqo22HkH9RqDwMzcQCBy96QZwCvjpSRX7e6",
  "key35": "4pVmKemsdKXviij67wV8mdfCGLdmfWEQeBiG4Wb54uUoC4pACjJk9vV1LJeSi2eyrcmDZQMdnaT7jEZKGjFncqNr",
  "key36": "42cdqYYwoba3sKiPBwWwKvdh89wsQoexN1sJRJM1QhuT8SFCopMh8yBCPhffwGRQ9XkYWzcajePLEPPtCX2YRZfS",
  "key37": "4HQ6c41K3K8jLwqSLAWYtsw4YUCqBJibusE6e166vSmTXUGLiVmBUGiW1GMgqwgZ8By52UX74sX6SvttTqUhdLu4"
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
