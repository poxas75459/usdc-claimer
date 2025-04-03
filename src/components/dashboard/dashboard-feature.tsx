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
    "5oo9pKwCENF8r2yCtN7brv6EyvA9ATxuH9jhKnTUXhBHGGAiBpcCQZeMjAfHF7STyvPp2HHK5Rv1WKBchnGMAFdb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fhaerjs4YY7VavfpX7M6gtUjiAM4Nkic4GwqLRqQCp9bufTR4HbScbnKN15uvge7CmuujW2QRrbjhUi1tceX7CB",
  "key1": "4XqVEUTzbmUWHiFoXqpRcnuq9a1NyaeXTAJhCXTYXGG8EG7PBtB2moWUg77piBFgAPxympA9DH9kS9hYrZU9XVHd",
  "key2": "32PLJj9hTPAp6qHMKB4WzWBSQSniFiwbXSRFbj1oFTfMFKfxL1rUzqrghwqF3BBMrYnJeTij4KfMePAMK3WWX9CA",
  "key3": "4cFjQNrZv8zhpRRrW4F1kKGaVeKNbLBUvC7btGEXbQ2SgAKUd27Y914ppynUDo7uZR7zypV8SwGrbnWp7G5uDAcm",
  "key4": "386RJBKJkwqnKrM1BnpJxWcx7Rak4xNUAgFhRboySHNfas98PXfHDUdxFCVSz2r1kJoHewu8Y1tEKea8cQbF4cZC",
  "key5": "EhtbKLxJth4MVAe1z6NC2RfiYZoMQYA71s9FgVqypWHDnqYBWpngCGfwdoC3scfa9N5iUkeVfhcg1uPP1CG1ivP",
  "key6": "4Nxcvf6eMUbwLC3DFRNMXs6TQPo3hrRDakgKco11459rmYDZdThLnXfv4C2QT4ujMGjbmeNSWstgTBEggDFpVzxn",
  "key7": "EfB6Kw6SnGorqoNgiZjt1idPUfx5AQjKyBNDDMCX8bKA6pLiHJPAMJAmQQSvdbqZyPPYT6SxLGjceowQeyGveef",
  "key8": "2tYDK7vvw4FgH1q7MKsLnh4vcuVrhoNV91ngiWbNDPvmXcL3DfW5Fvzo2FnKhoFi2Gr7eDs951vi9J3BBifKkkrV",
  "key9": "48i4CAqnCq931XjDwzo89w6jkkyepADpGzx1hX9u7rjGfKt1EkHRugLttuXAxPNM8U1uQ2gp4tUmu3R1tMNKoK52",
  "key10": "2L1XB6Cdvx2kPqXEb1ewDCruZnCc7TU3KBKbUAXhBh9WFmm1cUKBEokAsSmhZuLm5trzoVCAnfe6yvemJzgjaDMW",
  "key11": "2bceerBhhjhQDzyqUoWdYPX3HpuQ9mb6Hrgp7tN25wH9E9Ycez4noi3S1QiFxdvqF5QnQX8e9QPGozWxiA39fqJX",
  "key12": "35AWX6xTPqitAVjLUy7jftfFfCHKrUcJvb4D5693uPPpNTGQDqQGGbFNKZs9pm9PsxQ4h6NoMPADX2LEsWfjKkgm",
  "key13": "4moTSQsBxUhPF2KmgW8EAWNRx42E6Ja8GmTgANbAsuru1vTmaqnzpKVgQmNvuFvG55om2mfyMRxHhTFfvv2MAYjS",
  "key14": "45ZXAGKjorTGMqwkWxMojAPVE4EvUBpjU6iPNuZi8MA4Jy3eZ3rWuJtqPhGyQMJkhPtjESqJCTsBxFmaASVCUd6z",
  "key15": "XTUKHL5dMuZGJwA6ZGMedJuYonopDRKZSFNKUoQtM3vRrQAX2K39RETSE9Fx27cBSq8E7LwftwNmSi2f9JaDqF4",
  "key16": "2jxeNQdhgSiXwN4zYQFLiEVKXSkYSkP6fCu6jsjvjaXbKF9cvncRZu2o7mL2diF33iecHNs8ibugKvbgDC8pybpg",
  "key17": "5NkiFt4LAZbb3c6WYDTPzsWQEzV1jyDLU5FkEP4PH81rYgfKnTPQ8cYcASXA5tQRM3NM5QkzegJUv5aLLpJqqJFc",
  "key18": "SE5sqqpjLDHuKXtcNcgrynj8bDhM1beQ1DCUwm9nGFQVFMEce8X6g3oyxm7W5oMEviavTNrTRbM1JaJXQmc9UcD",
  "key19": "2ASbsJVzjm2Z1nufQ9yivHvikuL3Ebmt5VarLLu8rtkKyyJbLWpD218QHJAC8YjqVb8h41BLj89zfVqD7QMLFqVJ",
  "key20": "5NJCqsRzaadUcF3EhSjzugJmXWaqUtZdGUdCTpPUvgxCEBawvsjAgyuU8xgwbLB8GxfCneC2fJrhTQJTXiDNwxoe",
  "key21": "541fLozZaEaM29n6ui4wBRpWxVUAucWAfcEzbivHJiARAinDmAUuYka3kDbeuuwfdy4rj2RxWMe4AYBcYR4SrU3c",
  "key22": "4thS7qYqdbouPEt2XzD6erDxE6j9inJ7DjW2U7Kv5q2YaJozeR4pwekZ3wbZG443S9s4ZCvqELkcSPy2Km1yvThu",
  "key23": "2TAqQX5QgnfFkxznFHE5W9JKJczKGj2kvNuCT8qmcbECSz34vbuqPrjcXNPCQXWUCpfww7G1XoKMPYbHYimWUJrP",
  "key24": "XU4Kaq7YDbzaYkGBG98Ed7uVGZMTykXXZXp2m72DCeUJU9A2M2cFc1EV6BSWYwftE4L5BcJbTxiA4V9b8EZdYJV",
  "key25": "4KxWheJ5bRg6J4ZS2PzHtu9mQ6HuJMWQ9RM46pi1JQRUzwQgWcc8eQfmJ8RiXoWiW8vx7tpFcsahJV2kXhNgya1q",
  "key26": "5TpbX21taE27goVx5cBG3H6cbycaj7QNMmX9MjzY8ErfmzLDknstr7hfLPksQiTQHk7NojfVWgk7FhXMBV9JfgtF",
  "key27": "2X5JtE6TfpwDfKBBnq9FefMUS6rHbJTgoUnpKNu96Myfkd3tkdeByi96uzThVgZq8iANETGob2BEmWjg4P6dZGWW",
  "key28": "5ZnDqAD5NKXxHgwqSqj4g1todHksFFRJ2PE5bKPeTQqZMSqP5biLdjxy5usYzKyjW26utWWhUos2SBD4vY27ryg8",
  "key29": "RjwxTeZUHcJpBhsbuugZTidQxfM21KzdHN2kbCod3xGsptufWfNU15Y7WZVjQfaHddWnddoBmvdYweJFE8VyECd",
  "key30": "3ohJYx24kZKtdCUqzSVyL9mdawiETXXo47y478W4RFHYoMJJ4hhih54Jv8FQLUW9R9H8t84dRNdbKJd3kUter1de",
  "key31": "4ZdPsiHbpbkVHvzAWA4nAPmBx8aTZfnG8biiJY6LtUipb4tUvHymsFfm1VbRjsJAGffhcs2abwqDZ96DnrSLQtNR",
  "key32": "4XXBKvu1CVomapM4x55RrtKo1GhAgxrACDshMpQpJMKDukfEwtTFQxTxePbhmmKxiUAGcQrXAb1dkCBohgPdyDBa",
  "key33": "3LWt578tEyiDroregu8FeTG6gtMpYUHNVXL4ZzLCdZkWVY1HP8TDEiFdJWk5LXHHTMhTh1iao8KQ5uALzkbhR9cV",
  "key34": "3Xh1fVYB7Jr2hGj4i8QrbrYmG9tynS2aonQByNh5FyS8zb8U5rexXc1x5sz7nwbVCiycavtwiDAHV5ZE17YhEHNm",
  "key35": "5YMdCSSnLQqgPX88nk2pNJLKdDhWXrE3uLTZNWByHUdtTErEoPYzohkLeebECrupQL4tS8kpYhkufVQ4uU3bgDjs",
  "key36": "2okT89E2oJg4S4nJGYFY22u73GgGEeP2DLCHXzF8Ei4AgNtoxGRYztzxXWMnTTT19Jw9W9asvTyYYRrS4xoR2GQm",
  "key37": "3XRS34p4hHYqEsaGUhcK3q643HPbX3YJEEx7QZmZrdhkBGKFNR39Cfx19Eq7yeAz6kfHkMpGZJsktpEk2rRuTh9g",
  "key38": "2A6gJFxfvK6euL41oKEsnNswRJfuLjchep4iovfrznkmcC6ch1K7oMZ5Wx7brRE5KmSLJZpAhVLXzSGwtwQxrsbk",
  "key39": "4RgdLRbLnQ97PCcRVxdX81VT4HqctqwjNyRJm7UKM8UgFV1LhnYkmwUo7e4HBZk27vKLhvY6RbpbsFYjpZBJQdJ8",
  "key40": "2VCoocHrZxpQmgqmwqem4xt28wPNvJv8ik6g7u5R1sU75NpBepyjHAGjgCK9nPts5UpArvDf7SD91TLdtqPw7cZ1",
  "key41": "wf9f9JW6ruG1hdcochgxG24T3ptv6CdC9XCFkz1RSErFJvSLX9xDrnezWgphctrfaR4oxc2ZMv9pCWdo5ioA4Zx",
  "key42": "5npawGULViDC2V7ayqfngTGbgLP8YDxUwQqxojHQkCZ2GBkSFwogYgxW3Fj8fYfMm4faNqsYKfixsaQM355NiGHL",
  "key43": "2Kx8w9L2neMgA1eDw39yq5EqvosXNCZK1HNkLXk1rD3Hb2bzRksQG75N12sxemyLTkhHQ25gBgqKJc5d33PXQ8yk",
  "key44": "3vnLVJ4aHyMQJihZ8bBjD53vabqkU75kCSeudsrTdGuYwv7aNEq7SZ49urUHLVePbZvZ9y4qqvtbshdEbd6VQzod",
  "key45": "5VYbbXk6gqoP36KnJ4P9CX5igyd2YEnaXxfWeyvBBvshH7DuQyxPGYJxA5yHKXjn7oguR6wbnN51n83xZtdqNF1v",
  "key46": "5a7horQT9zBQy5btDhZqnP5ErRm8kmbVurnscAB2GomgJaRDSpFcZTsi7UFqnWSm2xUtUaqkz5wsHvdHLBMFrXda",
  "key47": "2qhwj4XptAWPnuDDeWNpi3GbitnGQTyCqY4c5cKChjc9CY545eEMHcfsiwZDshCZETg7HiFDn8RGWiGNSRnEE1D9"
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
