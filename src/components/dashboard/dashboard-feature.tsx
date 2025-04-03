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
    "5FyKif9XqdUcUWLZ2qo5d8WQ5acU4DvTEM1TrRg2hipTCMkYW4evCyoTdEtyxXwcJxSMqGvxuSBbbeL5XU7G4tKM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tMWcXZb63wCda62pb4aUcxjdzqNFmgdotDC3Q3UyRPeF6jcvdnYi2H1SixgUtTT4QkzbAQqBbB65rBfWLbLCCVM",
  "key1": "4sALpajKD4o5JWzD35GL1JiSrAxdBb5wuvSP6SPm3R6GhZBcFXyXzD3sSbpkCpRRmSd211GGEhBH1C7cFeE7BanT",
  "key2": "4F7dXXjdj34ti9Q6eFy2Hmz8SzN2nMmypicx9o3Ec4ijAAoxmMRG4HHYJmcEc4ngGFNi7bTJizNwzPbhQCZz5A2M",
  "key3": "2J4S6MJ1ve2gqzFc4C5xuosUbCVZRty8g8PgYBwsEc42S4KAGgzCmVzRDZXGRJpoXNF9RmY3NHi5pEZHjxHMvrAK",
  "key4": "4KZ6mN323wadUWpwNyNbTx5PhzDg9iKdhV2DMAdt6TP8V29T9upr9m4TMNKgZ3V2HVNXTrezJdu46PDikmN9UfnF",
  "key5": "4VFzYjiNm73NzPgoLzMVBjgkjf3gwHceTu8wGQRWYL4EsDdzv91fKAHvhtCJgRQsL65TEFFwyC24sepvTiLy8abX",
  "key6": "z3AFKNwuGwC44b6FttcfLgB2FZGMa3ZvPXo93QSNXRadCcF3mRzbxsHLbnrBrGNbBuBcRfqVmjdG9radb5v3J3j",
  "key7": "Vs6VuP2X7Q2Jxtv457sGxx2t6yB4RmPPRohznQKBVP4FrPnSUZeRA22pEfsC6NNZAh7Kf51YJkAN6frWY56sL3g",
  "key8": "3VSiCu4y83jSa6Cu7eTm3UrnHbn9n7NztVRn4H8EDbcnhTHsxTx856WpAUqvzeKrrTKU465By21gq5WSktUhZxux",
  "key9": "5vgQcRK8LDqJkTNXsXdZAMHEg3aYFLpmGjB9VD74TEQSGgEoXtXi9Z4r4xpM2dRM7PoTmSNw61RwysoyspBQGPD",
  "key10": "2f8ro6A3FVaBE8DbthpDWuyxYVcGJsMALM59hoZCZBSEaqMzdkQHpAq1BZXTEKE7zKe9m6jZuZukPTYRznoRMgWU",
  "key11": "2JFMSPVnNuS3HjhXuNoTyLJTEAuHWE17uQ3xP6UGu7RNJ9pQaFT5RjV3VpBFHK7iUJKtN4hiJhvwqwBcgisfWs73",
  "key12": "Sn5tpPT5EcFwxmQFyzcY9zub4xMBcSaP8V7tHr84jDzbRGgfDhVUb4VpG73EApvVaptXSknVphh6PsytzSfwKgG",
  "key13": "66UPnjTYFNNGfxKA7eRqcpn6F5nqJDZLUKdghPu3REqv86ADYzFL67Vf1GYLoTXj8HdiWVUY5d5oWVxwKQa5vtU",
  "key14": "5vU6Vop5oNpRuhUcbWkGroHZeX2BjN2r9KyawhhKohHtkoC8x6JfBVbfYfcLeXiy2t81WQBrz1McdsKLYWTEdrui",
  "key15": "62ushUQ4QnQFsSGzTRRaXFCvpYC6rzBV5Zm3DVTs7qkKmrry4A9pcKwAQVGYgM9bDB8TybegGACiL7LgkP5bNZSk",
  "key16": "3nYf7RzVaRPxov36Rtsu8jyzG1g734hmxFKrJVPjk47fh3qSwuKZQ2dhENVSSrh66AZoLpBVq3pyv24if9mfEA6j",
  "key17": "39cEiGt97St9sUKMRVz9ZAW3DKZUDBNFBUuHuSyTUACezifx5o9tcVdYkQzH7SnRQRSwNouLng69qdxoJV7RXKKB",
  "key18": "4Q8moUvNbb4eqTD3uXDGokWNfBrBkHrpv4fEaWJTTCiJDyMCjNiH37o4H31k61QKLZbedwyfktTeTvynfCTSCN3T",
  "key19": "32hcWnu1snbdkow9FbXgjzFQD4LWCd22d8P54Vn19HAEaEHwDQp873cUzb95X9GRqbT4KL1wQq42NyTagb4yqwK1",
  "key20": "4wHAbs6cwbHZ5xQxgUoeqRFzTsbPHT3c2EPmGBYSj79S4dzQpu4b4LR2Rm2PBTZcZtGRaHseY5rJ9MqP9nTqrV8c",
  "key21": "2b5Lr1YDpp8Rjv4EhoxJb2fSknL2ef7Zd6hJQSgRxCtu8RRYuSVcWeKUkxquyaCmuh3o43XU3JDWG5T12QYt9PBE",
  "key22": "5W5Zf8vUQdU5TBUEbE6APkG82DJHhxBicwH1oxzhw9PaJXs8jtsPmxHVc2fJJQ4QDxaw8z8dte9fPaXr7Qm4siEB",
  "key23": "UxsMSHHjdpihTM8pBnEECKD5iFLmLX3R9nF4WCaUZ5aUrCk7WbK7yYNwmnoZZEpKxQXu1smopp8YC1qa5u9vgsw",
  "key24": "3PLB1vttnu4aq4chx1DMZBZHmSYWM5YqL5gqiMwUMfhzyyUZpBzwHeiz9ci7y1EUZYVQHFBAipsk3xzgoH73xi9N",
  "key25": "62frQwYepjvUSEoJfNuSnkHQ4KDUKLV5FJd8TXKLnAYG3enhpV9C25AZVUHMmciba4siBdZwEMdgYgAZPFhQ3xLU",
  "key26": "2KSMdYve4Yj8bj4CQ5dtKi75W8DLYZALukesnerbb223ZByvdEDwvy6GxPbbzy4bayLKJ2sjZMWCtzUTF7LANFTZ",
  "key27": "4uwN3biJPv37XhQbjbewpJ1Y4UJfTnr8s6Vmqjfe7b3HS5W6WYZwxHubkU714ktJWRuRb1iuGwJKUT6n9gZU7wbB",
  "key28": "3H5vTDAk5g6fGvdJcjHhogyMNHEepdz5HvZxiE9iy9wJLcgUggZVkJ1ZpexJHJK9JGv4GiuKBh7C5e3F2obxrHtW",
  "key29": "3K3JNbmAEMrxowqxGrw2RYwhkmVkzKbrUtLihqBJ9RkWfeA1wGiQsLyi3ftwZGpiU6XsaZdqeaAH1y2D5zkHUihe",
  "key30": "5KnoTmfoG216Fnpb4VHGbnuZdA5g19oAW2Et9WQL8PukbAEjBXzK4wkYQAM7mRuWQCpQN3Yv1MEtFwTzuqncgmZ5",
  "key31": "42G5FuNSGAjsPivpJj4CXR3Qv4QR3BKGVQ2id228j5oBEHwDoqQ6CtUn5yBiJHroVFahohUKu5jxwfRfo2id4TDR",
  "key32": "5LLG68j4qo7D9ahN8F9aeABzSfZyMNsr4vcta6kHUdnC2ASEfNLqm4XVxG2sp9zwto73JoXGh6Eko83XYAUuvi2m",
  "key33": "5WrQ4GWgnTWvQHDYnekCh7pyS25aFdQth6LHPe4BhgaqmoVsg7VCnsCBtwrNzyKLyeRFG8tLnbY375u4pxUhpVGB",
  "key34": "UjyrQbngJebZrBEfKMa1g9eCsNfzJL9U3oGzCVUz2DR4J9WoP1xbKZAr8Q2JwsWJRA8veHriTfJPBKjzWPxjJ7W",
  "key35": "MNX935u2P9XPADtZsDKD5pArKraohuucahzQaAWH3gyQfJcedtNPzE7KpEg9nBrf3HcJV8Zcnw5jw3MZeuMPXMh",
  "key36": "2a3auoEL7jR92V664CkP9bmmwtpWrsTPowcAffhPrZeyQLa3267UpqyHyfL94ShLEr71s2CZSAs1Q9mxBMngaShP",
  "key37": "8ebox7tJKEFRyuEwASRJFqdX2HDzZKKjYJgm1fuqym6695nF3eQvU3UUC7tK53e7FC4i1bvvfSXTpzhR1ofAq3z",
  "key38": "4HqwYTzPgGYbUK4ij6hTYtvwcH9ymia1ZSayNaCztsVFpqk1HAZY3YaMmELUSk2TFAqMAoit6W9SBrRmRL8cLJPf",
  "key39": "3Z6GLwsZuTQsGsPfjTwkKjDnEUpk19Wq3JbqNetoNQAUbQVErEa68uyuzRmiGKKwG7CcvcSZv62mCwdzj6vfzvCR",
  "key40": "3vbc1reBDdgLD6VfLdNcxkgYHPAiHh7wAWGnHZa2Hw4ndMXkrzxWujURoUAwseUM39m6RceyD7Ui9de1yHmV18Pb"
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
