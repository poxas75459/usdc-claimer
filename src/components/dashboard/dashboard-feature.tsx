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
    "LT5ByK8oW7LkdiWa9CE3ftdLFB1KuXPoTRDpUwN1Yfeu2dxkLtStKd3nb5jboEgaWHnj2KZaQ8rshFBXYtnf9fP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zBKodjeadUeHASgxtUZqyJqa4E1fEeuy1LDXvGVnkLLdjd2R7PDa6LHXCnSnTqwUE2go9NyxmVaKhU7uyJyYEaW",
  "key1": "5U2qoNjQY7g11CMad3q8Pjv2nR6vC4yNytiwVe1xKgJXCRDAygBf7gdV7heLT3D6xkLUNUyp7oHTRSWyo8bEuECC",
  "key2": "5A5N3GvGH2zTgx4gyp6RX5hcvBvLpGtwHDX7pGFnCYC4mS54pqsfHwBGFt3x74kDFBRFc8wkKj98GsoksbQUpnG3",
  "key3": "e1Bw3BAPSdwdWoWY8cyXxyhARZtLLCbCB2v5B6xyomPqo4PpbAeYhJfNr6o1BQAyNrEtZNCPCHk7fFVB9Hu83D7",
  "key4": "3u5rXdHC52XUgsMoa4rxAy3FVHdj7pP5ePq6UtEjFW8ZukMsY7p9mzc5H9CSDyS9azu44jaG9NXfrnXNH7PRwqf9",
  "key5": "rc2n5NaakVMbc7DGyXZQiXEAzwsrH67DJMNfum2NQrivAN1jRPny6Cv84HUkdbyT2EbYQUQxDsfubJaSDkH1txw",
  "key6": "3Wiib8YdxjZ7D3AEHTGtrt658behoYKiTyGTkXMuDa7k7rtWS78sBTf2JmRr9zQgEt5DcgzWBPU2xhDjrcBDnnk6",
  "key7": "5BSTFUFqTCUAiuXW5jMGRpQdVbYqkR7BAjGWgU29NkERzLgDo4ZXk2taEPJtKf3yaQRkrvRGCKmGQmwiNA4FFTqk",
  "key8": "5C1XgoZ1vgi2Mv6Zpha1Wq1chWekb9NDUsJ1YtqD53bQ9Ag7DnCnrhimDH578KSCzwBH3SrjjiomUeiAYWMTUGzd",
  "key9": "3emRmEgxrDpZgZ25c5yCtQnEFSdPzMa8YbNXfCMLXTE3G8rN7jghTmsDLd2KG6DXW2J8nqqoNqLU591eD7Y63J4Z",
  "key10": "3BxQ4kxS1Br1QBvLUJcqhZnQN6kUJsLAkHxP14iDDpK68Ym1u6ocN4G9E9urohKUdU65njUkP3wDa8AEpkdV9KSP",
  "key11": "2YbDqH7TnZTTjhS9mRbMbHWNdHAHx5hYpGTu8AHGfQLdY9XG2dpuKH8j9PEUUDtXSVNfQzT1ubtZwT7534G4ghmg",
  "key12": "5kBoJuCfgSpUzuTbxzZuhQv1CW31eTHBQZtoMHd6gCajVdE9NZ5pLAsdQYVpGNmr4zMmzBgovVAZsbiRSRa9eKVN",
  "key13": "2mbAdLy54fq7oaruaNoXfrMSnqXc17Recsoa5TkRQMJ7Xun6CMLzCpY549syLTtSZu7XvHShJti3hzjyZmA9whxE",
  "key14": "4vc4n9jr1UPsst2RgCuK2FtZMAYbahGQebWu4XaJkqKWh6CimTpKpDQcHKhXkbTMUHZAbbNipJx8XsVBeLVcyyQY",
  "key15": "4GMgjTiGSJ17ZKw21TxgrujKSns9BRX91LAhghpyyPX7bhhexRnBarCxrKp6mZxq4FYLn7qtWBz3M9Qrj13metRi",
  "key16": "2WxZwGeMcR4cQGGiW6KrYfbiiMLNpkemMxQSPLhqcPn38G6YSXW2E2CYCDo5GQYzB2nrwMKs3wi31UNfPfFHiPr1",
  "key17": "5J5AvuFdAGopiz4EZP8RPUuNFTAKmzGNqhUJT7t39ob69bdUanVabpjvauk8ikaArHgTpLwsx9Rcb7zk8b9Mc3Kc",
  "key18": "3VxjMFXKKDU8PvRbdaiq1Tc6Qc6igxC5GKzZoM9j14sujr3Q88tVRR23dnwtqUgrF132qV1NQvmiAxaNSgB2TUqh",
  "key19": "2Z5Rt4gMqRoDBauwtkQgVgwFao7b8k9oCLznKDZXAzqJfqDNUviG441fXziU1JkTP7aGMhdF7TWqN3FNCU5PqWRy",
  "key20": "soDt5pJJJFTkdFnWXHFabcrkZbA86CuAUP2t4TAAQnTwPXTK3B914c616VSbhpq9o13TJQMkMphjPsYUdCdcovN",
  "key21": "3wqzGotshuXx8bfHyQTdf7PLP4zjL4fPnMbKqXzYWg5ykkP2QJTsTQiQNGw3GkX1FoCP3qBXr4PpyReLDiPdUNpG",
  "key22": "3RNGWpgZYQvvfK8LkRJpQ53nLvmjKWMpjx5vLZVyhf5WTD9frEJDMCxzDnU2AXdqxftLKurJ3K2Hh1smocP6KqaV",
  "key23": "5kCUHDRc5E6PoHSQPvb9ugUoMQCi4ZdDjg9yDzDLs43NJs8eMVtyw5ov9WHUQYLLCp4CNeWskMufBtBdK86tnRNN",
  "key24": "2QDtDVr8Js68TmfJop9GQbGZdRYcHzwdpPmE4pHxJQb9u6fMezsZkUcNC8bZticosiGhA1v7N4yNjLPRycGMGkcz",
  "key25": "3bfx6hDLvHWjRYDw8PXKbuUM8pUahH36GrmBX1MhVHUeBXRpS5nM5vDZrGJqbYLsQmQRjjB37xunwXqDAcGZsG4",
  "key26": "49e1XC1GP351szBmimYh1cQWhW5m4EbZTZrFLhkKRkzhX7bBCX8RWCabddwTBjfFtmSq6DRTCDEeoWz1PnQxQSUR",
  "key27": "2RfUsg7fwaib6LcqCeiYepYdPruEhEaRKDunt3Jgw1MYvJXMwmu7PkzNEoDXyNZZbjnsbNyfeW7aXxjm2WEiVn4v",
  "key28": "33b59B29jJN9BWaiyANAWbN8Mt8AV6mHf5bfWCngjCeGdDnmzfEuwNyZWVXmbaBg8MkhJzhm6ooZ2crRRpjCEafW",
  "key29": "2qj468kujj511TUsP93TkH6U4MDfU3pdSNyPB8PQY2SJcojFYHvtoSN4hMYKpa7VtSoKgqYqRFw5WhUSMTdXymQC",
  "key30": "4Rakp5Wx5Pn3y8M3BoS6BcMTFccKUJx6DFw4esPkdLwsUCRTvpUwBmEUHtPX24indoXVLnuh7iuzr8CBz2GMappU",
  "key31": "3nGUe3KtgbWJRq6b1MQvJRc8o4jjqsguyAv8gxwpdmeXv4x1vTxt9aTMQiK2rXov2XRttpnsLxnUrrGD2uNFdMFf",
  "key32": "63XfLJxEMLdmRhy99hq4jmGMnhF139MN6CdwR8UnVuQ4A64wKsJvb8xj7wQ8C2Eqt2VTY6BTuYXvk8LmYsVvVRaJ",
  "key33": "xUiW8xxnaVYANpzSBEDvH4wTPL3XSQCDsACHMhBFZBnbagYhGfiohgHN4ut9eR7oY34asEv3tpX2KkhEyYJN66V",
  "key34": "3QWoHUtvnb4Wd5vLEdwRFVA2Q6cqpMC1oz8vmMPdyoFLWGTgxn5H6raYXARcYkATb87Vz3a1Jf1YFA7jdZnHVzG2",
  "key35": "5fjbgCcdsFuWvCdW9M2oCLGguxGRvvBPKHqL3jRkZNDGA89TCQZ1CBYLtpQD5wDMGhER4sH5EiYkVvmSYLSxToH3",
  "key36": "2fG6X26c9fDnwWReEc1XK4XeGQZNiH8mWf3s1PeiRaEkH3kcPPYP4rsUaojfhQP84tnTVrrhHKbsJgkPhC9zEtpX",
  "key37": "3syDYd8bB3fymoUfRdr88SDeG2mXzUvWmCh9WvNwh5hosjGQE5udRu2GxQmJBbeFZUmC6mWyb3EoiCi7TR83Sc7v",
  "key38": "oxN8Gc69oezQueC5gPT1yyFVb9jr79YbGAjwMzA9rV4Lsue835LUnqvwXCZM7XAyzrrmTxgzixF75RkVHAFdJXW",
  "key39": "3NSmDViWbfi2wJHc3vnvFL2uPKmVvNYAX8nAv6NkrfQaqX485a3KEc1zLrJoLqc88qqq6NTGKHAwfzjzMeAa4WB",
  "key40": "4WuwV3euSE3rc5gYyH3Snk6zAg3TruxU4ZzRVAWJLxwf8TC9mNnkkfkJ59cv37PRUfj5Lf9hCyXhB99Tee23jfv9",
  "key41": "TqnJwWHKPTw5LSEHrhpNzTFGcEbRrMo1ZH8qqNpbt1He15dxhctoVvwLtUYvYi8fQBy3XeTN8FbNQbH1fa1XNpr",
  "key42": "4u1wDHK3oQDK6GBJxaWWefbX86s31SaYYNaFxXiGjXoTfmmCCxWCFBALz7NiBxsWfcbLWBk5cMUVdMYQD7cDyWZf",
  "key43": "47pNgkEPFqvRNXuoreaVFC8vGBea4jmKnzMEnBR2pavCp6vRQgqHcJhURWEneAFKhp4kYJCbGfwTqkcZ72xeb21b",
  "key44": "2Ki2RnYSjZ1CuwAqCH5Li3b4F58xTbNMs4Cwvt4QcYbh7JoMowkMh2UXLGkcuXUUvzowhHeuhWm6DmQSAJ6p6mwn",
  "key45": "4pXWF8mDsCyhbNtqNwcQna1qQ7oJk5QvabiLP4MFFo8Y4M3FbJWAAv1QQLWywtiyo12xA8sWoWqsJ75ic6THgmd9"
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
