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
    "5xRfxd7eHvpmQLqK7ywC6UmkAYRZwRk39n99PQNrY2xrNpp14gF1Pp72CKGkqCUc5CFn57JcjuFjLUBPrrcQZ4JC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kXZhTP8PU64atLaiGAqtCz58UX4PAmju7um9rT91gqRy3yrG4judTfPdqvRwT1csX1Dd4VCPSWKs4APYKHhRThm",
  "key1": "59SWgUeBHG3f8o9HSKgbvrcLwQ3MPRAebUzuU5WZEoBmPzuGQzC5DXHvQjKqWQT5vfMqeAhEeDV5ZPotn4A7JJTT",
  "key2": "2abBsNZWu3JdpoGs9AY3yMdqRW6aRgdBVTwSEC2K8UCtiAUhYQkCDJNweoE7dQkTTSYaX6ZnvZWQ6yNuG2a3R3CS",
  "key3": "xX2JhSvRZcKc46GywJFtyefdNERAVrzj39S94bvQmTFhi8S427ArUvdpF4GyFQ7vJY12dpo3rRE9Qzw4RN14rvP",
  "key4": "3G63pdVyTgNM1f1nmkVie6wPVNJmfKTFZdVuAhyMomHQYJocqjoEgnkDSFgjjHhupnh8NrYZJGsuZMx6zFBRaqhu",
  "key5": "n7SWvw9MSxEyCdJXDN3RaeNJHA7GShUe5PdAzgjyBDR4Wu8MG45hyfs773b2HBGXwRssh5X1BRtS3cYY7uGnSwP",
  "key6": "Y27R6fUXkgrEgEfSiCxrhDg99egwPS23A1peomet1vaHEJMYYfdrSHhdSaxiGZNu3gYfhLkFAcLCgNqFLZH17TV",
  "key7": "5LGH7hM91opNGn1Yxx4K3ELi7KfbMkMmKhngTMaD2NauRjPgdCW9G2iYgK8766PiV4bvNJz4WKqhpjunHJNRFbqY",
  "key8": "KPYhhAac4V1UR8MUQT5ouYxEzPj9bjcJKSmrQoeunv29e4QoC1jJCbTG2B3wWnWpw54DSYQN3452333hsqFBg2F",
  "key9": "3KRtHzU8CGBF7iqG4XnidnmDZemwYfMrtiCJU1WPkEPXJdKpmV4bGMTwv9QgqvmtSTAoZ91WfmdfCA6AK5xoyMp2",
  "key10": "4Lew38gkfSE3p7Tvgktyg8ZYdWSyTBnicPT3ovgpVjzKH7ASBSWSZcGiaHUMy3ouTyoKmAsGHdoeq5MnMAPneCem",
  "key11": "2xwyifhBjeDf2oZVeM2Nvut64hCv7jGNfebUf1zqKEP6YcbuUWuDhzF3HgsUbMFQhw7xwGt3hWPK3C6mBG4o34RP",
  "key12": "pUWi3FXHTNrCwtHXVFLnJcomXj4LfZjCoH98WQK2XfgkZraJGhbK5CW4ur34EF3LDt2ASBt8Nibwr3D1UyWeE2n",
  "key13": "32QSPvdcyZdRCw7hqHddUZLbhWYKSVPhV75Ze3RcLRuQeumHoom7paAMFgxDWPx23nRGLuMFj1J73DU2LkLoU3uV",
  "key14": "37vjmFzmP8J7cRTU3iN5vvJtJjDwFgEJ1C296ZLeG2gbwjdyMpsbUVrWqAPcMzPsxLuRa1SUzjZmEx4QRFhCAxf2",
  "key15": "2bkUro7vd3VjY3REQLWjkdgr74JLrMPZh5KmTRwNCHvQp51Rgx62X7EJhLGnYjprKV2czwgS4osvJTD5ir2bPLb8",
  "key16": "2LFBrmc3Vhjeo7DY8TCd33vceepDQVfV2TVSQkZ8YWvWUZK4nKtNkAxp3enDZ5vvVActn8LWcXDsxidBXtqjAfeA",
  "key17": "yZDnuLRaFo7gQ5nbE44ECWavd324BvCh9rRavFQ5KiEQs5JvDELJxVnoZ3WQeSxkbHxSc11aG43BdiaKG1KcAtL",
  "key18": "2UZetLcK7sgbvM8fKuxTyw6xQNX4ZoVanhQD8PmwDshhk14ZgGphezkhMJTCzLsdrqoppwRCvXx9WgMi8yJhucAC",
  "key19": "5pYvDu55addD66GKchbfEEaoRm9zZB44JcyLYkedSrmaPRmpaHPXjs789TLErw7oDNzLDgi3F8aP1bBjzuGdSG4r",
  "key20": "5x6dcvedaV1ey1Pom3W3T1QHAdtsmPYnZdMwRFQ6QtDbpaeiB6jSh99T7Sa4aaCCNMVjM9UN1zBZpGgFYLaMU8LX",
  "key21": "4HysfUTvkRkZV9AgKkTKZLwFVq4pcDzp8eP3FykVbhg1MGCHehsDuxaujvcTWfohNc1BnveDYQ33zYQR31K5eWXZ",
  "key22": "4kUUhQu5hZsKAmW3TGaBq1ANRACa5vDwQA56bJAWCSXitWyTCceBnVvzAxGaFZgCEL8AjYzfUWhAbaJkHhF6GGng",
  "key23": "3jBkKMUfaqxMkqPmdgucPFxzLiLqtWLVT5vuVzvvuGyiARuiu1tgxvMYq2eFaGSBkWzbZ18nrvoNQapSmWe3G9B3",
  "key24": "xYSk7BqvG6EUm7YHXystnkCphrUt2ZLKcSpLkfYf45ZoY5Q61jDUDWam39spx3nLhbMaXHCYMeJdZbiCyXBafnU",
  "key25": "658kiQFoaKEFakKVMFnwUmGX87WSPDxKiKeke7gV72CVtoy7T5UohQhYhUfvb3jzsXVNycRS4xB6gMAY85dTszdy",
  "key26": "4S3et3qpniwBvY1UZ2GCSbLA4cWvxFkETgLjPg12Msdwpecza7qTsVD7pXfvC6GCjS1wRwmozgziWY4xgHNxyD3A",
  "key27": "4aYQ54MQkK1ST3wvNNbacNDx88uovHppXeYWWBz4CezJt5tzyRczqyLUJBypE3g6TTNMr2GaQuZNuMeiBuvxKB5C",
  "key28": "4ZhPoCcVc3ouGZ9C9ebpMz6UPE3AV5s8Ns4gnCZ9ekziGkLTA8nzVNJy5UdaMmvgvT95WCbqH7NqNLUFC2NqtYvr",
  "key29": "56pBh1hQzGmB81wkFARu7j9qwudaGmtH5HA81hwZzXohBWMnQuBXL2h4UmugpdmP8kPEJPy57ZrgJiQ8kPrMCoQb",
  "key30": "4NAzML23RtgPaqvvUNqW6wycVaEYuCjGQpuEutK8JSPhQytKtFfgZLjYutixpWJk5ibSeUVNk1yeJH3CZ9ghe2eZ",
  "key31": "fzNbWjF97iTfArUhYTo7v57SLdGnYB1GSdGr1uqkaReNDUUGdZXDzTL5w82nWVb2LfNuDADJQGk4eeW7t4amFFB",
  "key32": "2AECV2RqVSVbbAJ7x6pQi9i4hn7jDmYKzXLjVkdoXqFg7fD5mCqWm2RicE9WognSM9QhmfkphpFgzMzhY3G5d1RV",
  "key33": "3t4j5AiywSANhAUw71NGeHmqaNcUYJUqm5kHNhT7DQ63MndkK9WVPJarD5Fx5XoS9AS55dcgWJDfv96yqcjPjB71",
  "key34": "31MwZ1rjT5D4h9MiD1A5QysYV8WhBQSJPma7ofZTfTSPaiFP9CkWiGpPg13dNppz4E9L3dBktHGn61dcyN79CA9o",
  "key35": "4eYUd6mP8CEk3mqZpFqzcnrnbqiLzba6jBZtGYzQ3nU9u141f6oF9XKYUmDL8cESoqbPAqanhJ7rA4xwgcLFQ4sm",
  "key36": "4GwvBWJiQ6fz6gLV9SMKyts41hxYuXLmt2dwpmJkRoKPphn5iSxCcimghJM6RCtWrFYMz1LvLVcR3K6ufNA2iZbb"
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
