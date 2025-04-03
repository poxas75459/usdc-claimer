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
    "3fKPFvXfWWMR9Fv4faAFnEYBjuk4QXmqmPDw9LhU2tMqM1X1ddy5NEW7mjZYYG69Ggk8o6tKoLR2XtRFP3PMidzZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z1rpS4a3oG1rUxEYnHs1qv42j9MiheXxvAcSoLbkmrCCtridx8PeniXt1BzRtNSQ2mh6CidMu7St1KBpb6sg9ER",
  "key1": "bGRBNmGB6iaukWJ83S7VY4yykS9FhuJvYcxHtNVaGbP3CWgssJ4zvghatxkjkch53pKLWPW3sogJA7NqVrVn2N8",
  "key2": "2qJVY44U2hVkA8LfGLzSPUBqtCmMwran7eo3WnqWg8sKCBMGPp34AzR4mdF1LyD8UEKpjivNtarv1459hBNFzCb",
  "key3": "2NFUvVMfreFRNutkcrnff9uMAwDrULs6ZxUFAJkEayumj3qtAkSQGSPbfKZp9657XE8NfpxPRhs4tAEbg2uWZZsr",
  "key4": "ryzeRriUfWRfiDdCR7Af38JfRzA5JZXsASPYeMxqHu5EvPawCk7s8ZdeuyKXyGBRYqrWKTMmmWEASCog6zPGR2N",
  "key5": "2Y7Mc5PXmt91gmRTYRC3vPPzTiMKDDaJWU4jky2BgvyeGNqZX4bxAq4LELFAuVKCWE6z8s1YAm7oREmsXSgLhmUV",
  "key6": "3TjzeneznqNECmJXysHB3ZNw3igRNTf9heCogfaZT9fxGFQVUfvDdXUJbkBbVBng8VPk4KEBUTGLg1AFgVQKpsK6",
  "key7": "2EUT2CCPCuzAkNpns4c2RpJw1P5fLGHfMuEbEAHApJTsLZ23e6zhHma2uiNapYvCCxYNaG3iQhfMZLg4tEprgab",
  "key8": "5UCDXbZttxF8cpn7VZoxEMMpR4oXPwKd5qwRz2GyqUHwMC8gBMKqLB8kSwb9cWzwzQYVXLB9wDzoXBageocuBDcu",
  "key9": "5dFGGNjDhyGX1P3ytvoDrBKiY2avtj4hrHhxZudM9PxaKoh5nfourjEkX2w6V8wMq6B2WKbW4v8f9PQeVjFJY9dR",
  "key10": "56d8vWr8ga8jzoMtUjmFSUKDJxJmENwytFjsjiQk38B5zGbvYAMxbsXV5KUvkBFm6GTUM2wFUxmDakohzUSB8wVz",
  "key11": "23hyaSkSmKEW2KpgLo2dEVDb2WNufn7BjQjHhLUMpt6CLWgQ3jhWkqGk2Sz5MnSQchdvTBQ7R3sLqT2XeX68eshk",
  "key12": "5Wa3KbFKNNsHUMArySpZfJfBrfP8wFvWfN2AwaCqAAJcNTbdajkxRxeiFEV4FMkp8yvzwAF6asWdFvt7Uy6vbbN3",
  "key13": "3rBUnHKK2c7zhZU8ntEWjuVMhH5BCKCSm35Ta7EXcyPo8mk7BnitDko9Qj4YnbeUgiSk68K5UGXTf9ycgFzZu9NF",
  "key14": "3H9zQD8jLUSzhZhn5Hpe87DXtZnBax8EYhcDpX2SpvJTq4BWJXSt2rXNbff5ktAoAeBhgZ9s5MV8wH9kFRwDixrV",
  "key15": "3mnyJBrWqkfzjUcM7CPeZJ6L8Zo54gMFXpmNJ2scUwXyNwTDSxp6S3Cys6vBFSefnL7TAmG1SZjiryC8LXVhbpfn",
  "key16": "2uSVpVyyqjEwySCkFuSTdXeRoM76koZXDBJ6tD9NSPeiPitSKbS8jE7FsfmPqmiKHr1ZZHx6JtWX6xzycpXE1mZq",
  "key17": "3MgYnmhd6qEpP7q8b5dsrPRP9nxx3p89wzJMN4nimkwAruxtjVydF99i1ssDRam7LQrimA37qWQMmsqh1Ron9shB",
  "key18": "25f8uW13qYQxpxc29wUJ6E9GVgxqT348JBHs6v29HPGtVNs4wmpuzagoHH9vZkjDMYW5MJAWhPKJxQhVWnhGET4A",
  "key19": "29a3AoT86PDKqFV1ZziC1neGHfENFDibmsy9wudYq9v8gJRucDFeqgFV3BSMQK6HKfuC2Ljj8W8QBb8dEABXKnS6",
  "key20": "2SffmRzaHNvtu36BEEWD9W7Rc94wUCWvEDU45BdwAPifGLo3up4fDo7UeNgSZzsacYonhKfWTa7Ro2gDAoFTT78z",
  "key21": "4u6Hwr15uuDhUt1Qqi5QrJDA17rWSPfeUAUajbU4Pnox5Psv4PaCMawVUrvo9QUZ2dW1iCtqD3RpZGQPCBhXxDgG",
  "key22": "2f5KngwpuhQyZpTJgxKmrE24AeSBJ5YDUzp4aEBDrTdDRCZUMhKJZY7M1SASdmDGPnKprHxhgUTYUYLnBHzdrptR",
  "key23": "4D5JBHsg9AFsnKFT5MbUBs2Zo7Q2oiHmhsayxGWffxtoArJ1C6J4Er3AS5EdcWrP7cMdLr3BfMGPTaZLbxUzt5XT",
  "key24": "vSXdVLGNEdUmu58nzBFYLfF9eRq6WpLXu8UBSQ7m5vCjrtzJCohcyxG1USYC5LdutwiZUpWaazBJC1C7eryttUV",
  "key25": "3k2QJRNAhc1ABtEKYRd3d3hQD12NREp8ZQuga3jmyW61h6kmx5vUpp7AztMqfbWgBHsaX7o8hYBhEpVWUt9RBpvp",
  "key26": "4Z11pV1uvtThXRUsy9fA9K8gtKt2AzFMR9dQury5X8w1SEiGQoh1SN2MBzvonsiVaJK8kK3ELFRbLW1XBuUqnPDc",
  "key27": "Tg1j4WQ5KWC4MYNfeXgWcz9NXzR8KsewyK1YHb7boSW22mGEiyusjLv6ju3J1UPZxmupA5iHihQbaX5y3PPakZH",
  "key28": "5ixqQFTmXoxvwZdaKZSb8Coh8ptoW3rdX9Yz2aJM6Smxeq6sLfShy3ouwZnVkdHWMJajBtzjpgV3cznZKcyC6XAn",
  "key29": "2KzMKm9eagfMgPH9Sdpud3vKKL1AUS9YdsVM2twDtFGXETRyUAfAk7LbUbRR2Kip2uvWkHRHRAp59v7RgNDr8vmy",
  "key30": "5VkCWLSNG7kgjuq4UwVP7XqYmiH415gQAZkHPWK1Nyamc3EHgiLjQuKJV6MDkVvSenNQJrv7okdVBSsCQdWjM18Y",
  "key31": "2PqfSPPQgXVUPo2AMkitV15oTBAvHDE65TRk8UMvSWC7EPJJ53ghJArGNCiPdRASGWLcKVWMmohCNo5PmYazS6n3"
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
