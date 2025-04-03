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
    "3JNDvJ1aGFAkg2cf5iyfaLLQ9UZTFx7zfhdfG5na5TgWZP17WThnpwVXk1WLaV9V7kXFBPw8Ujz3vXZ3JynQdJNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zBFhu7kB7LJ68AfuQeWMJ68nNazBxS9CuJSzFBNgPLc9oHq2miLBnrjzYRaSSLn16fUbnUSLWBjEcD9LQNmuzQS",
  "key1": "KfcWACZkBWmMeGsGV9omrnTwWRtoMuiBHS3r1h2cDhUxxFmJayWGtYnEKLikancTu3ymhRXbKy74zpfAXKttZUj",
  "key2": "3t7aYP835Pcnq1JT98V4yBt5jLqtujGAwXJXL4M9cCcc4Cd5SSf7Lir1ZgDZRkSg8frhPRCiLGQffRhi1hNzPvvX",
  "key3": "Nu4Am1coyN16BfKS6WFnujs553PkfaZ7uWC49n7adFTww255fKvT8ptznKbtAcAXSusNaJMd85kNs3TprQu2Be4",
  "key4": "4NQKXK4kEEiCsCp4o9Eii8pmEgZ6nkbPTDX1WT37zNKJ9A8Tng1z58mB7cFHACFJNzefocLHFWrxRp7Su3M849Nk",
  "key5": "2yMXEQyLQ28eRLtDumL77NCuqYB8wCWeJNQTGEmJ8sjZo9Swo83nEgg8oxBxo7C5tP5ef8uuyy7Ufp4qTsSU4fVm",
  "key6": "J8p1nD4g6D6TSXsF2bXQ9xVpovNvxMG7pfqE797CP3An3K6oHWLi6xCFdvTzpzt52FQsbCQaaTWvrG4D2ctiNkZ",
  "key7": "3mTyVeAMNB7C8MznpY2inh1rrh2WLVGdxEKyNeTLHhVUNSdSrkGS1dKJtHwm6Ed5svDJwQXbDGpmXv2S6TTuAnua",
  "key8": "51SGVPVb37T5aRu2KZgTZSKE9rM9ctajw4NuhgF29L1FCATyZgNNTJgPUtVnyTxtXhsKQoWMAdh9pByP7QfqwAUW",
  "key9": "21R6if831tGDFoPcz3ACegSBmXsBE59ovVnt7DuugbkenWBUgThxPyuVV1UmcjqXnCS5PkjoDTEDXkyjAdcwT1bu",
  "key10": "54M9H3TEczQMXvBT7cLwtXWDozHBX8vxj5E2YVffmSSZ9ogBhyZDqxCgw8cZwwrrFCdQVxfWTu2gSZy9oDvxVvez",
  "key11": "2PVFmP8h5d6k493PdD3SDA3TWTEst1Pv3yVhHYhUaM355idpsx4QH6ZiwQWZUxr7XPwXx8ux5V6h6hRkNEGPhEz5",
  "key12": "4oLdEKe5pAt9JHiGh3kMet1PqA7XBJTYyJN1Wp2EFaWM8zQd6zKjhQZTMafCPG7jWfR5g3Ann3DjBBJoPLkSMFNe",
  "key13": "2LsB8zWRLnfWbYDA89d1tgjeekVaBi7nKnq96qv6xmtzp2ShpARe8tgpKG8aKgftSMvU3Bj1RzGoSjaeMsJ7pBej",
  "key14": "4SHjijsGtT5xCevNEiRqtJjaLciPjqjA8g5moaCRWppWHgw6Df6GLwbg2pQd2sq6daB1PGNH6H4ffKzSDs2PbxyX",
  "key15": "U7C1LUPJ25gVaNU9eQnRDTYMReHPx1Z4fS8vy6CSpwNvZgYoRmyY7LmJJMswHADskUwWUc28A4rpPFTWCyXrgEP",
  "key16": "Q9kmgnPdUevAk6N377dG8ZGj4kfC9K392bQTfm9z8acGiMengHB3FZNb7Ppqxxcgt9jSborx4vsQTrwYin2ni7h",
  "key17": "g9hgzBnsAFWuwhfTQBNtd56f7rwJTaxdPg5kKynBm9pgW4YaVmeNPi2pPxaBxCYoCV82JvoVPoueBooufmJWcSL",
  "key18": "4LR5BJ6F6Hga38mpZ9XTkr2FRNhZwKstmt3gR57195Svs4y32GXqU4sPWPAdRknKZb5Lb5Pi8pk9Z2QPwEGHjYyn",
  "key19": "3do3AcTWdi3BZmKWDjsKweD7BQ3PaaaeHVqtrZ3bVCkMfDnzW9Qgur3M1JhHRbn5c1AARUcHF6b9Kz8Jsmz6N9SX",
  "key20": "5pEn6eJfhCmxnyntBazjwgJf9DNofWHaguwg2tNKep5mueUAxHH7j8fLkduzB3CcMLLwpchNTmmc2JvHbbiYs1YV",
  "key21": "4neNosctexLGdmdCkag5Uj4XXQp5j7ENZtsXK2647kKv91No9VAiU6MjB399at43dpoQcmPW5NdpDqw6piQKgFid",
  "key22": "5bZa9X425g7YjmCB2EcjQyJxXEyUFLoGhQ2BdbXYziLvEVuxBbPxwWGtKYJVy4tUDoe5AzqSfUcxokg4Kvkw1eqi",
  "key23": "4zFz9LnoG2yGw4CgZm8QixiuyEwA6Q88SN8AMrwE82aFERMPHgvjWvzKpRXhYsP4yu294W1uJBiZepXdRXq9tD6w",
  "key24": "3Az3xQsDVUa2738gUJWEKAX759qZKDdKTGKeR49o3RkDCcHDCPLHm2WbNTLXs4N2uWfDShC5hYjF1jcwaD1z7UVP",
  "key25": "rSgj4FMiiinkzY7rffVPAgRe6LNSkvLBgyRqwcV9E6r16tMN9NhGCBa3cYhXLowrq4hyrLSw7s4R7vSMZE777EH",
  "key26": "wk31SXgPPAr1zVXS9csKD7Jdif3QgYPLa8u6LXBcQt6eSrZrmh2ii4KEMCQA682tLXP9Q7Wp7eKCRTXqYPzHCzr",
  "key27": "3pUWpfa2hbEADwPoZY5njpEZKYKGwD7SCUEArwUNbKLEKbj12ZnEbdBmRW86V1R41MhvKNUg8ydW7VyGhuHACasw",
  "key28": "3qGAm4BAE21jkqZvnWGu519yaaKWSCKib5NCm1eytnfdCLxAQVL49NdvFysbTbo32FvPjWP3csBaRiMa2LwRRPLE",
  "key29": "5ND99KrDhMpwUiWm9WrWE4rorgivysccBXoehfAZBnMkEXLJrBhrnSNYm35o1Xy5t23kqTWhpxNDJLShrCFvtZeJ",
  "key30": "27vGjGFyN4jYks3Nn6rYQDW88FzTowfEkop8fojRvW825AQhfas76QnhEM3zVMzqgjEjz7UMDocff4AMM34tCA7p",
  "key31": "3Z2AJx7PBv4ppekW6Z7oepRAvJZfvhXcZvQWh4DaBM6AEeUaULUd5qqGyv9PbdFrajdmKyegTWzPNvb32r3Dc1bY"
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
