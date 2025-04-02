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
    "3q4zqev3ZM56ynAjJ2FeBtZchqZBvjmqFs1BMjmwBYVdTphxfwS1Qwir2C87ZKomgp18yR2PwCsBUBMJjtRA7UGS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "411PV8c65mAMKsLZyPdDZdDFt8tmyzknYyF3TGaMSaSTuJyWkcuavndFSfKK6oUU7Lz2LRb9imxdj4rGXn81mwpT",
  "key1": "3XZhur4DTPKA7Jio7TVGtbTqJgNr2oVWkkx6rgYv58qTRQANeHd9skNAXS3sZY9zfvjbTWnJkEefEmxdF19yLD64",
  "key2": "2Pt5GfpdRDjuTpqPrvUxqvJj38fKFactCp7YcY2z1tHUjhhM1DWh1nDV8RhGsURPEjmYPdJdFarziNmZ6dXjPMhS",
  "key3": "SmDxxBXy5zX6T4EBuVHiHRh86DqdgttNmCKQHFuAhyGhxYhV12WgUsMoHrsTHmstzCx3QFXomqW4M97NdCpEj7B",
  "key4": "2qvyAV9tbVkNcoarJ3HroiVbjEzaNywWXcUtFFgojWisEYJJmSNxvVe5FmoGYmxTLFxKv9L3s2hVdQkWQBHXYBRX",
  "key5": "2wnVSCTNnvqjUbnFSQwHuybu3VqFeTSrFTyUZBLGkN9kJKmrPW7metbELbY7E6p6b43x7u9Y627PPmQUkCkcx8f4",
  "key6": "7rw6v2AntjWbobhR8i1226MB5BSui9Yef4hLGsCSH5grRjpTpxYjB4duyXhSMiMgsRvg6d6oBtPDh8fF9P4Ra9o",
  "key7": "2tSSSpD9svy3JuAsTW338dKrk8Zf7uKczriifnNAQ2yxFZdeRwcXktGREpyxTXxhjfcYbbTjwPZGMJGgJ2ZK9e75",
  "key8": "RuigLf2Wbhb1ywdduawwreC75KRz5kSteorj5kn11Brc8wZyyqp4vuH6Zvmaftbham84PRvfpQ6fEBAG9nGxBcg",
  "key9": "4JPFvjMFoaks5GDGDcyPfbhuBbY611kTtBZ1DYwwU85PsbYQpcN4wyiEZLJ7earBVDyUiSs8d3CNkhUwc8XKRw7c",
  "key10": "2TFEh12cVmkCSCCkmva6wg83giumdQ42SdbvbS3YEkFw2vhqBGbjjR1H2MvihSSj4eYgXA8qKoWV49KpZPrWXiQu",
  "key11": "N4ZUfxVA7xxCjvpyWDzSTL8gcUgV9AJcNZYijNysvN31KNsCc6EujEdVTkVuggWQyc5Je45jdzd3evMvczk8Ciz",
  "key12": "2CPvdnMNjZPorESPWTBtJQAMaJBUzH9RAxKjVNozHCJca142R1tgkSmFmhhvdEEGAL65Uc3XjaYaeA1mnnXeys9L",
  "key13": "4veNW7bpu8n3Lbd9jTWtAsFiJZVfPbWZ8q2JZpH4sLyeVFCS3j8w8qPffGh61Eas8e4oAgANGdwuj16RgUyBo51y",
  "key14": "ezxXp5mekFrFLtdErujyaN8nL3vJ5ECqHT65Co6KeeHogtgFBwftiEvCpqUS4dju5JEY5S3DacvCsvaSj289S7t",
  "key15": "44qWb9roqYDxXjTZYrKBvabjjQYdHNNgyBA9GHaTbT4u9j3LkFwpbrosxez5NDRyDXkkkmBCACVN4FT4BKJmmV31",
  "key16": "57sVcuBvHQGa7qXqnZ8nKPpQw1Xjfibjt76SggMG5v6v2g1woXYzKYbER3daRWmNRMPDt5Ui8vKTEgKJJyP1c8U",
  "key17": "3CmibtqGUi9LFooX6nvnGroR7tNVjjz5sdBWth9K8TUmcbFsqqgbeCj24MEsyH9g1KwfB3wC1GgMHjE6LQ5fpVmE",
  "key18": "5RpmS7BuK4CHZ1yRQKPQAfqUYcf72oCPpEKfZ6V4y6PktoHpPP9YKRitHMHL66mXEMj3ZbCpqFWzSjYKBG2fmWTK",
  "key19": "PrJgkMED9tdmYpHqswoKAV4W73x15Q9d5t6QHwPw6uMjEz3WtkA9EX1gm4Qq26Y2e4wRTBMjRSXbJbjbpxaTqEe",
  "key20": "5A1nvPdsvpXgwxKPi3DqdjzyZmCu3ZXTFBLfztce3sH1ACjdR1YvRGhX7VvfgktJ7fUXAHHuBtf6HeQePP6pZaCA",
  "key21": "5nNFDwArNPuxaPsYxXgTKVMAiSpKG5Poapnyu6ZVKZ2nVrg7rP55FUByJPTVaB5tvrN9AaSpcKBHFgVseovwMHTe",
  "key22": "5qXihEvRftMPaVKBXuRkT21AWZyyyKEzcvTvxHfVDZMMyJS5b3QwdXmJcerEAF2L6jiYtRXxvQrVaNQhRiC9D83C",
  "key23": "5GrF8oWkXo2bsbRNTP8nH9J8iV36ZGxsMKdHBoDsQw95jQsfqjvjCcM8z5EWJgjkzqbteN36qRHNietYvYKfcJyc",
  "key24": "RmaZEUTUozADxgjPJNRMwjHahWi4sgE29ukxteQs14ivDrPrbj5Q5kR19zpCZQyJbeCpNSea63qCyZiqQmWjTFG",
  "key25": "29KNceLqFimNmzWUWLLUTzFBeS8hbK1kLXAZApWXvR51rbFmJcNTGYKbCDKVo6EaXhm15TkNGryxA6tcqsNZ5vDN",
  "key26": "2AWs5j9xc1vajWAdB9NYY6cETrDTUhdJX8hvdjzJmQwwhHv1XLXctKgutWvQDEgQ9TwGEheoRc1r2Rv6wiBzYiGP",
  "key27": "2UMxf45EjL8gS3zpT7o7ExcMjGYSaNx3aeWeqVvPjkedsAjfWR4zCpTGHD4cLs38scc1L8Dmcdsr5a5gs9yifS7e",
  "key28": "5T5AJzWs95CpfL2QM78qP3AmvwqudNHtpdr99fs5YHzTHq7iusgC9yVTHhSwqh7x7QPQnxReH643yFe8anY5iSHf",
  "key29": "3hnnyaF56HXR1qetbAuqgnyrjrAo47S2SLSxWzA8szpa7JK5JiB6crF2kAtHfGaA6otJRsG4NH9dvQPjD2ouHc9T",
  "key30": "66B5FjmmMLrAJGa6WnVVWi2C5wgD9ru3MBM3DUN7mdM1baV7jMJDy9gggxgnxyYAMtuPm3B14fA2PEMkx98bE2Kt",
  "key31": "5cWM4KhSfFZHSH8sd7SJdLpejGmxNLq76HsyLkvy84gPq6oRzU3TFxqAu6Jc1jNz77HFac313DhuXesvz4phw89u",
  "key32": "2eEhKt2hooRFDsAqZ3UmwmhbukeduztxVGbMfoLCHRkCT9Fn2Lvq5SMpdPZDSVodUhVEDYhazoiGcrvfYF1ThEC4",
  "key33": "jLQEMsvtWXYBQgZ64GWk8ZpHGgw26B7XWuwuYZcNAuv34ynRAsU7d4ohzYyid4DJD7VfWeGQhmombFeTGZDBh7U",
  "key34": "4peBUjw4P6JoFrktvA9Xz1VoucbHf6K2nDe4gr9zB6nnSjdxkszEx8Kr7AbVuDaYUMrFi2bK6tFZkjPkK4j7wiZm",
  "key35": "5dsA2REPsEcAQ487smWXyYGPDB4WQZVj6nLETA6XZMno4Mk9ntpxntCdz5zEZTWQYM5rvwYAzrqi7Wv5fnpvbxXf",
  "key36": "4n9m9s7SW3zJt156ms7mz5m4A9MTk82e7Lw5zmpC4nZCc2ny8jSTnrLsgwoouiwsXgy5P113A7dTu2L6H3Ax22BM",
  "key37": "3mssuwpPFnfxS6hXPYh1uxe62fGvLpqKgqVbRnPeMpvYHsUp3BpqR9zvD3hrzReQzyoZshHW7VihSMoF9KqfhbfA",
  "key38": "4PqjtfVkgHgKDwUJB8fFQeAgKuionXNfEQf9vPFAftiNVW8avE8F795SUWnxFPHCpmFX4Yyu24PhHiRcUC5xp8ru",
  "key39": "3qK6brATvVtjFrtMB5KuxNPYGvKjp2SGXZXMvrQSCeftNxsV77oFtvJXVNAfDKTBtFgFjDP6hgbEHdT4TK5ryk4W",
  "key40": "CdErtdCARcmuxPLet4u6abTNgpFAaBqPCKDFLoU2deyZkhE4BSCXCRAfJviK2W124ARs89aeR1WndyhKygu9w3U",
  "key41": "SS6q1zXkyxswddn4UeP2hCjKZdJwQhVzotGwgd9Gwwm6kdPgDpwyUwm7QygxuJRyqVzMXRmEH3haakuQyZKhB4e",
  "key42": "4K5Q2atwGDgkKPYEhtztooafcDeMWo3ezDPzhx3sE7qnFUZ3KdiqN2PgpKFPJ5xA3hXQ3Yg5RkophXq7xs3VZoDC",
  "key43": "333AozX7cEoaC7inaiY2rYpj3HNLHXBtrdofoQ3ve419DC3713Bp54ZG2BrAxLN36ZHGxXYRBbeAzBUxotKkHFyj",
  "key44": "3Ye9z2Zo5oEtFfEHwfbCzznZNtt7KBgyQXKrePTVzuKdxd1tomC8rbHvhLqqQGW3wQ1TcFGdGvmPzCYGdoCVXgAY",
  "key45": "4aJzmC78mpvUurTiqXrKJBNKxMyXt53iHsZpRL2kmzPp2JJ76W6BAnjBQMvRJ1kNjvvWvtb4x7cNzecbLiUrJqxG",
  "key46": "2nkrFTUxwSb5x3hUaLycZETo6AaMfR44PSVgpsKFzqbh1qsHVjDdQb6H5tZichgxrWGBuTYNT9s1rKQYSJCGeLfr",
  "key47": "5QDGWZci8fhNEiMhTeC6no2xAPJHpJy8yDdVqNoUX4nPDhHFuABy5Hr26dEQy9efmL611u8FTcUz22uYuYP1BzQE",
  "key48": "aHFGs3pffFCVaGwRExUgvgSptDmnuEzHzBhHcdiJYZ68yUZvvnd1K1LuivNTMKqbXnJonr496XJthJzEBn5cPnC"
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
