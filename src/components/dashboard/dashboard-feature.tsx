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
    "2if45pUnUe7EsSwmMqA1zh9JTGCPK9XrWcG81ghar58uScrCUjdf9YU3zuZyQxjZPB1ymueooH9bqcpDbvqhPXLj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ggAeK1ggBXo5BteCXex1iHR667NM56dTgPxy4rFiEhiyKw7W9YAPS37iRDYRcQGHGgdKJpnmEveCNphszvrxsEY",
  "key1": "5H5wH9VeCquFBCDew7e9anmsCHG7g8S4BZ1j2VroGf3jS1HyUL1cquFWaQ3LYNcFEZ7GcSoBEdfjDDv6pRtaTDg3",
  "key2": "Hbo54yAX8FeDMXkpFCRXHVjzzPMCivPRgQfMw1tZSbe28yZc7TWrQRWpFuzNg5E8QdWwZFXq1yCoPK54AxEzQFp",
  "key3": "3VsHdBbP25FA5NBdh23D6u2gTQNcppaZrgTjY9Z54vSEQaAvs7ZQC3h7ejLX5nczXjbEFKfThn3pVwN2zPtKMPBR",
  "key4": "59xFFbPt7WnW7ZNZ4NqyXHz5knC9PKSTszPZBiC6sqakx1zNcinT77n8Wm7MXd1RZXkNDR6vyBPJ1muEe4XQVJfY",
  "key5": "5Q1u5C7mQyYPYGuxzbF3w3m37JTTctphQDwczHrohJ3wxBspc47eWvJRyXMQqQAnZxYjoVHN6tMQdW5sRLhGmWdK",
  "key6": "6cogJDNWLwnahQsWzPHCceMocNn55XzruF4rgmbBqFCY4CExcssJzZwJBEKucKhA4PvPxuPL5QB7VwzSuTDpbfn",
  "key7": "3QaBU2x2staMwwRieuYCY1gkS64FZknojbTADVrnfKEzqGUSu9t3ADJ3gAjZAknsDhV2xfrtM95Z9WJ2G8nWo8jA",
  "key8": "3EdVCddcqpHsNA8jjLgSCDGAorEh1RptkgxipyFFqqeURX4CXmHLgnp7AaN6FooeZqcGmRsng75hA4AKvczHS6ny",
  "key9": "5h9XCeTS6VFAeFUdvSmQAiaTSV6XUnRxjo3V9WoqPMoxMRsbDBLZHzy4Q5HYXwFBoGpogeb7pCfKd4pJQGeV3DeA",
  "key10": "42Su9xawoW1EHiCpQvquHKBevZ8wMykMHG4DLrkR9kTyByrbmE9DWt2a9uY2cTdtHoXMahWoYpPHSpsBTnKctHws",
  "key11": "3PnHAyo2SiABbc7vLCPKRUDS7cLBR3uU576gsgqnpyYWJVrAEdyHUuHK88EGWQg5VxxuKPTrmZNo9RaCC1hVbTRv",
  "key12": "4PsjM6vQpnehivVAT3Ya55dsz527xKhtQ6wWUCRzvsuBnqPQja6XRCuKQVuWmo7orpYE6VU2fabx4MEPpGCeZVhj",
  "key13": "2apb54HbMNNo22RgWyY4Y336tzmYbCESHJaiv168JxvEFhPFpDuLY4zqCAzrk13Z1WnRUK45CWs1enGfTzvAZF7a",
  "key14": "TxkRi68AbcAFgtBmBrEDnVCvpw3H77qbCzxtQGdcEAqKU69grzA3Cu3AWFF2jpmRuaXmyJTwVTVgzsJkNR1ovRh",
  "key15": "KBLoAhrQD5ckFvr3Kse4H3Sxg3vkw2exKzJKyeCaX5MzRBwzE1Dh63KZ1iF6VMi5pUR162c5oSNhr7wbNPZrM6n",
  "key16": "4PKFDaQvccvp5EhFrzKser1zW2es7r4VtG64g5W1JE5mjg8Aysr5GLN28pr4FuAJq1q8C3nXQWRnxaCFcbSPmzVn",
  "key17": "4a9EgwzS6fvy2omNKYPLnZGbhbvQYSt7L4RbKJLcA6fpKSgCLNJW7XQNSbRafbfze37HjPKHdV3hTagz7dC8wSv4",
  "key18": "2ynvoGwBorvFBceiHKax6s9JNqv7G5cbFDGcGTac8UxBzymLWwx1YZAoYBQ4RGfrRi6phrFvDJikVf2zv3gPMce",
  "key19": "3vdkgFYZinNGcv2RQyCbB2sZZQWr8MQ8wWe4fiM7mSUxjUCYdLx2V5aqKxhkjXHvKoG92fJmn49TMbk78JqjqCtv",
  "key20": "56GabkCsT9rABy1YizXRfzjjRNHsp8BVAHy8wFNrSBu28ydjAgG77Y3ntmkLKi6RgPTfY8d2HJdMbadKqDJq72UK",
  "key21": "2jYMNHZ3zE3dNnV7iqB2oy6QwhrYCKZpA4G2k83XaRofRTZzfXpfaixkAATRzK1Jc5bKG5VWe5dUVZ3kkxDR1AyE",
  "key22": "kYi5djupEjSoPaesF55hoiodyPFbDGdt9JSZaTSVPkgdqvt4DcFMVGoqETquuEsUNzA4sirSLd7bmqGE984DDcZ",
  "key23": "3sfNRi4WEkJ5MMmXYegad8x1cRBPjcFPypi7JAzocnBkpccEzZ8FyvcDU8JAPorczTNDdaL6r7S3SNBmS7dRRv6Q",
  "key24": "4A8CXze92UnP1LQLb7AcHuygv48fzcR7z9fZ4qq9KBK8ZcWMkrd1VVraGZAknbSQvM4PehmTpiqAPe6ZFLrJrsNq",
  "key25": "2MyXGiaQiaMunALwGjPJv2PiZ7osmpzZtDJAJEueh6jmuPcidffxyJBw1XGzsYMWfjyvdfKZNiYdF2Wp4AxuLjrL",
  "key26": "2AJpafRXasX4Ad9j8zCQL9MLgJsduWubH5o4iKpvP9HnF21TW4YUbFuwds3bBiamwMKNrV5NkpBUkoVmqrSwUQX5",
  "key27": "uQXSkD91y8rtSrXiuWEiuzabio6JtNgtGxjJvp5Jt3mH93ag5WM55Jep8JjEkDn7nnr33Mdm4ycCMNqKd1XGGVH",
  "key28": "2MDodpM4VshZ9PFEKeCxNGCDPpxbpJxiWaWwsLkiw7MVQGAFr2qQNcy4Rg6RYTwMYm8svNJdWiHFgptGERSdeTcv",
  "key29": "368zJmsAf6yonH4AbwNyL5tm9bEx1s224dGuNgz42zMFdVFh8FstPgkt8ZMi9mvX27R94rgmQLPCfBArzdRfpMac",
  "key30": "3UJ2fxz3KLzxohvTwoXowGj4PDpwsa1Xwt6EgGhwi8zwLx9BppbWM4goE2wPfZHaWFZd6EeJ8v4vCGGUTG2nNrxh",
  "key31": "2nvsmDGTmeAxL2zmzisdptzjiZvvJgYXjT7UHtZKDQfAyKLu1ScScWfgi68UtouondqRFE54bQb6fNR53t9q3QFB",
  "key32": "2BLbQQd2iga3LYGM7buWAoyg8Nzyg2i1u4aCiMCzraKAwaTnb6Q7LQBdHx2jrBW6nhyUu9Dp8ZmLpFCqvk8vXhRu",
  "key33": "YnyuhV8N9KXzMuY3VZ1hAkcgcTRdPxr3ZnwubDSzDwMek1wHCEs4kKGwvxBKEKrBi5NVWFU1baVSgQtWwjq2eyB",
  "key34": "4Jkx6kdUbL6Jy2NAgnCp7z44DNaK59otb4q3VP1oEBHfyShLqe32KbYLRmTMDiLqJUTuxDMFqRH3RqUAntHM39i8",
  "key35": "wRoAYkwackEQHgjnhR8uLgez6KyQGXzxtFPPqvG42k1PfA2CZJhozn8rdbNhydzmGVAoy18YzzRo9XSy7cH3j6z",
  "key36": "4Wgm7BneddypFzduXdKLaCXhmvWB4G6vHuHXjC9DgSmbCve4Nh7qavC5XWhBMeEoTbKK1Ucbos7JMtgiYhdZ8MDx",
  "key37": "3xvjLXkGUgwDAFmCAe3BZDecdFgBCPVV6PaFxhbBBZ5KW3ZuhT5kYjfKFVKUr24h5e1NttEVeC28a9nFfQUZCoCX",
  "key38": "2QQVfpbbRGtMToPKsWT7uconj9qoaMKjUpPQAG9TnVuiW2Qcer5FTXEVPx8PQzGtJWzMBFdsc6epFGtDJaFJYqT8",
  "key39": "5AUQZ2pmgEABdxMuNEGpjUR7tU13ujb5wqE4zXxBv9qWVQH9hVBbn5jHifFNib8ZypLpMKnkiS1MzPgmCmQ9V5nr",
  "key40": "67pt6iGXdDJEWff4QmSCHRgoiTf58RV3Gi4x52KnNYBnNwwQ5aUHg1aZ6BQVCiikAvVjKUaJo9wWqQa7PpSG4YGf",
  "key41": "5HCSb1ZD69psSjCx4We9SH9aZAEiFjKHBCZNqeETsCiPGtC58FKG4D4EyWpezwQHmXMjCYUmHkF954tLBFS3t2hP",
  "key42": "5sDhfbvuZpUAACqvvCbv2bCXQ1kCizMzbp7KdbwKeRrij1xU45h3PkY8ayetJJftH67KaYLBsuZba7hTuapLwcMY",
  "key43": "4Q8gGjwfEfnCcbVCUvoC2R1EGzFwmZyyrZt4utqbk6zoN7avsjshw8wek21rbYiYxQCTqmEARNc16Jdj1mwQU2m6",
  "key44": "5ExC2F7kGmWruxXMR56bTgbso4RYb6d89DdxV55zZkuoYaLczgyuGApJLcMC8bafXz5Cq5kapUheqpueHHxxnXU3",
  "key45": "2aNCEDfqgQSk1JLwwT3bDPfoZuMSaLMkyoeZBc5zRWfr9gY71Y7UR4y22S7bjR8otV1YFpf9vDovpTy3iVpPT3dQ",
  "key46": "3ybqCkt3hbXmBxqLrWsM6zAgZ8RoRp2bJA9a86B6qwyJ3eGH41JrWP1n2sRWvsLWowhxnkUuTBa14aSd7wW8tiKQ",
  "key47": "5byYaTnpdrv9r1sBzigBmJS1q14bWaeFtmP7yaXC3HuqowtSgm1mVYqzvP1dNYUrEBHMRsyxEyBWSuvNTb5Diqoo",
  "key48": "5PwoT6qb5LgUCKKR1ZML2F32u5gntZBzpipMiAhysVSHncvpwE3D6VCRuEH8BqLzBNCxzh2KXvuXUi2vTmXYqNVj",
  "key49": "mZfLu8HSNynQxjot9YTSjza9HHdE34JyGPP2rF7dz8D3NFvQSqhj8hMZoG3oujktQcUBCsNPnfyjsU2uMWZBD2x"
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
