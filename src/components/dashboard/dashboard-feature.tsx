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
    "2yiZTSzrRverNQVmPrVpUw96U86LSmMKJCHP2scnjxfCxyEZtov5F5eh4CUjuFGAj3NfHn71BbnWxK2wEGairKKQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uqrhN2pT4vyB4TJnj3RqJ4XgMmbN8Rf2hv6p7nVnhrV5e4QCoN6kdhKSchn1LKEfacZTJMjor1Yu8g4JRLneXAG",
  "key1": "5Nh3J3QJu995gFxwpsQm1mAcqCpAdCeoanRftzd2avWeuq2XpXnRRpfmyZgZSssRYHodZedgNZqjUkqnq87LNmhY",
  "key2": "57Fh5xJAxCm9sYnoqQ746AHFTdUpzpmUwiwPkWDcfpwtzX2mJsfux1iyh8FfTKjcitX1MYyM8wk8oVeRtQBrxvJv",
  "key3": "2LGmYskW5w9JGr6Rrc6uhFeYxh5VjV26uYP8Mam5MMwG8VL1PNbH3FkeGQELC8iFynw1Bto7vKhS88BigHmXYBaC",
  "key4": "2Ei46nTSMBhNFZ6HwqNvwZYCiD5R7dfLL8BTYuL84HYpaKdhka151RCPVi9qBmVUQMN3u4xBNbGU3ZGmVtMFAhT8",
  "key5": "2t4SJXvMMjV7x5bJSKnWstohwgaesPEXG8hKV6GoV3uHxmKyZTxsFjjT372KmQsgZL3GLWGmiUcftPVqyhyaJZqc",
  "key6": "61hSQh4onkQLQqznCYtbzJHvyo6B7AAr1R66quUSu6n7vHyGK1X6hsjUexGcXy6RDoMZc9n5JHvnWMs9ndZYaUtT",
  "key7": "3xLvhFvd64ASGTtDisPqbV6nV927htvcYiEQZMSB5hQeVcbmFgCTpacx1zmrQnNR1DEvzb47NYwGXqiBuELAFaRy",
  "key8": "3aEDq4GCXYsG2D7gF44XFzCKnYVLHxNHzBGHTUn2yp5RLMqh77bbXR251aBqiPS1nfcGZcFnhqZYCL7F4XwtKux1",
  "key9": "664Xh57BjqV6PM874kHE4QeCStV9RKxVdteJs596ACeXQh9Bo5UuqjT7HNLjdenyuWvGjx1zzXK5KARQBqHhQoUM",
  "key10": "2UdTTW6vmvkATrFkGQYtruoj4Fz9dgf8jeKCTVwHV7cz1hFKFT4cYp2cTBU8BZTmMf7JkeV6SYSJvWNq1wPxupLA",
  "key11": "64gqmAtowfEHyHLrh9JjaxoyYjBQYBVSTUXQXtk5TZYgnzDRXhRcPaS6VWfsQzzsRf9p7PtbWpEtX6S9nkTvxr85",
  "key12": "4W83GoiLt5QYLvqk1626NQFMVBxoDdVRscePNvv5bu1zgDw219bSZWZS9ALrYztYLPvWM8jMEPYhAiDiehtbKhqh",
  "key13": "2x18XS2nCXQ7x6tBoKSk6SnHXZAXe2ZMXWjpZqyd8N3ChcFh5S2W3sMTVvHbk79M2k57cGdxnjyMSWJjDB48NmCW",
  "key14": "3oUwDqrUrGs2W5k3qjfhnSQSe6WCfTGAfa9SqJC9dZ95KrpmUKLopjYrwRaT3iW2Ggq47eD3YW4446MVmadP5bNR",
  "key15": "2DQt8D74HStnVxBm4tPZXNHhgWxMN1P57tBHjtU3QF4nPkLa76sjNi3nzC7Y3gWBaTRYtCYhN7hV64yep4JVhQZ8",
  "key16": "gn4HpMvxXcSnYyHfEV74CiHGcGKwy2Q1mS3xB8rEYfYNsiSeAwxcUhEoAuH4rPCQxReRLzv1cNuWCGvaVyB7196",
  "key17": "5SQVb4DcUuRsrcaCu8FFmykvTzKiW6hSA5Ej85X3jdpcAHUCuFXG4ag9K1rSjmEXJhhE6ZpThHAdgioJJXvaVqZd",
  "key18": "5UchzNLnLJJXNvAMtCtNp1Ft5HkVxHHPQpon3kYKTEsmfBxxzvzHLwJn8fUAjS8XTJoKgstHJo2XQrJnfimFYuJi",
  "key19": "29eY28nyr771vwHEuLu8gscZPuaYoyqm9Qsjxqv7V2xToxbtDkVjkcR2WSCbvUrFVGniZa59Jf8K3abPX5ByGMHf",
  "key20": "3CUhfnsMuqeniEkEUq4fvxXswRESJkDSPcQLKv74BR63vTMAJkUscKWnmNhVzRTLq68gY5ep3L6nJ3NfWLghHpZs",
  "key21": "5fRedkbCPxoDdbrN8ayEWUXHQCGUPzMGoy2DydZzxW5oq3YPzYWLLRctqGU1QBN2YvX7rwKvkbuFfwdj3YSEZaYN",
  "key22": "5yWoPvCkVEu7aLGGyuetRVgtTrU8N5ywtzqvxoVnwcJ2jAbg5H1Hcyf4zWMdWo1qiZNcRHL8wU1kd8eG2ceP7sEL",
  "key23": "3y5jabMy4anzGavcDLJagsJyi9cc1JgaZqvMR9WBkmXNFaAHkMrTTTkvZ6MyjQcikXQbuSAUyKiC3XVvc7XsiJhD",
  "key24": "43sW98KWv2vFM8nw7hEfiPS2UY2EKtr8wPv9ZqPFopu9TcpmaXhtf1W7nDNQK2JjTywPAV6tZcwDfKteoMJzivuf",
  "key25": "2Mk9DVquEzE3BoJmFxx6SeSG2vbJVssdeF3ZoTT249DjLXczFzMzFhaC4GT2VoXEmk9WaAWDKsNVubdNeV6bcKCV",
  "key26": "3W3SN14A79f3KtxG9JCyQ6bnsSPM3aKjw59FMgUQ76VpQf3yxJ6JPn8NrV1bLRSnprih5Ggb8TYuoWxk4M93ouXx",
  "key27": "53E18HKvBJNx1MXZUQdhawnY3dXDFzvo1A4H3wr7FJ8NmYJfc51APRCoLmtj8Uv8K7TR6Wnr9ewXMVS7UwsabHD2",
  "key28": "4kAS1b2457TiAy3rLAc4jvZCuT82uGNWxjq3oVaewQZqjWrjyES4x8zRbmvMRCeML88uEtXsP8EjGNRnSB9ycan2",
  "key29": "PYm7SjeQAEB1f5nxFuz23JFfUMEezty12DPfkyNXBz3Xxc2UVHSxGBRYKS5nUgLdU7dQWTsoB6Nqz1uxW6pwWFe",
  "key30": "29UugbPobyhs4bxXnFa18AUJj8u42JJJqRiLbD5Z1oBjBgd1zrkN8SaGu75SEjkjJFZadge84aXSuBkTa7Hhjkfs",
  "key31": "5J3xGAyRWVtVBVpgy1qCVrsxg9rPqXi4xBHrfJDe8tEDPmiWD1fyhDFEtZvnYfpzxZPBzisxMdojQeahtjn1mEpm",
  "key32": "2qvisKskj2etnjGA9g9q3gU4LpwgXaqq8ga7a7v4KGQnv11oG1pSxRcat7UP8r49E64qMswgpdpVjxUX3ctdg1j9",
  "key33": "3zeBhvw92FdD4JQibQbWTsmRqu6RZgEahiJgbx9nXDzuzwnWut99L1qwczANX4WAY46CFEN28sP6ESoh79qF8ynz",
  "key34": "43q4TemSCXT43y9NpRXScQ5m26g8VBazcSYkx1N5FtamzdWWEtrCHdjuKEN7L6yTYV2LYZjBLGq8SZXnKtjVY5gA",
  "key35": "3YVBZkLFirzJpddsypRvKoMtSQzMjNP25g4VDTqjx2wy1TFKZx1RedVkad4GbWdSCLYmkhHpnmN1tyTdHXRUUiDk",
  "key36": "4TBjvmjHbkPJzZiMqYUhuwta6cB9eETdEQTispysMymT2YzZU53FoEcxZpD3NxqZpXmcBkkJqWxWCq3SfkEZZoSt",
  "key37": "2DDRmZ3L2qiwuHSpXXvRrrbGHYgfPU4VfdYJNZCd1r8pJtpkDf8Ax8UfZDqT4YF7hLpqGGrrizWx89MTdPxZLMEz",
  "key38": "3xG1q8gm8XnDBpJ2ArZVYtSKNbFVn75hv7JYMhMFajDd3uacUw7a85npBkrbE4qq8FvrCKHT553SUAnbc8prYtM5",
  "key39": "TjBpd2REfQqsbAUWQbqHjFGd43mXfGg4JstuqPyztDnTPX81DRAd7w3Ma15EA7YgYfJkLCBQKHx9khvQ1phgx1F",
  "key40": "3pydbdW1Lg2E5FPvPCyp1XiMqzUjjuNxXbY9efcfuutv8UaGsAu5RhJsqfDZbZe6yPS4PYz6H4GS3SdxBgdygYo8",
  "key41": "5mtq6YG8sM8b54d2scmJwPL3sUhdQRLnH4AXMXYDDPXubEjXSv2AmYBpfAbVHyEV4Hv87Ue8Q9m3tcujiMnmyJnu",
  "key42": "5eDLADSTkiu3su5gT6WQLfRQGUdQXCCWrJB8sAZA3Czd1qaNcUTAREw8dnnCpfb4uU1zjMdzz6bRGSUgj5T6iEjP",
  "key43": "3v1GsTLkJ6JBWYtoN33NWdgo6kHa5PHNvZWhHzkjkFKzjG3NQC8oqot2Zcp3uyqodxxmXJKMgNBMcGwk52csMXWB"
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
