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
    "2Jgq7z2zsQV8dyDb2GfMzQmNNFdSWVuWt1tf73D3jMAcNfGUnvUCnq8RjgY7w7rgmG6Ja6fXvY7xgsgVE6kJWDss"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sFdfDJUqKESvoUoShYTBgyuswjA7LkCE5iDhFrLjasi4nAhjGqEASh9jznTX9TkNt7kAQV48KoXbQAwFdw5M4QW",
  "key1": "28jxqDhbcfFMAEAc8QvhNJs33JGKQzMGf2RoxwdNJZV1jpz67Nfp9BRE6hi4oCYPhLmhztXVepeuWQTuPWzq5owY",
  "key2": "tu3yTHngfSWRWJWpiDKSn4bDj3btMsi9gYZoxKwnTP7WCDQeaY4xkmDukNVLCLRBQak9zthf8MLzfjTF7pAUf11",
  "key3": "Z7gizmWSVGFqbVX3iEkVq5Trrved9V8eSpic883FeBLgca4PdvhZZjAn2hcSZuovz1PZMT7tEwu5tjoGJN774jb",
  "key4": "5wswjdzjLiFEDxrREBBLHMtp5wYpw83ikZq9KnWLgPRSAG8Am6vatnvxXtsZhBYrSEXSUhG7usmBjYr2mDyZrszs",
  "key5": "3T5PtiuSpk2DjG47pZ8ZECib27gyPhLHga81DCRn5vq4eLHypEEDTeEW1Lo1eVNYQ4qfxSJtGkpjrFEXvbuPWAAj",
  "key6": "2pZiHJ2VhLz9TpmtMfy3t5MaR4HuFxb9XH5RY1yB2yJkcpqHPNGkhCuqQ2EsY3taZMbZFroGGoe3f7qAFq5xnB8g",
  "key7": "5jMdrA58BcEoybB9NZaDRZebBz7soQK1zGzYP5hB4wr1buAZTyLdLM8YcAPwfS7tQTYQ71h7w8wW9LaHsySDEAaB",
  "key8": "5HWsruCPRhFZrNRUdLrgpjpHfX1q7qnHBzKA6r6Tv4VmhF2Mxnc41SYGyVavQhnjFvTJX3S7EDABgnc9gbyu4g8f",
  "key9": "2wrcLuXKcAe4mZZbC4bN3iUxqBkF7QwihHWdrgLLwa1c9jJ5etuzyrRRVRfteLpqeb7wFC7PrMLHgWmC4oSGX92s",
  "key10": "2pn2sFgHAp3rZhFNceVdK8HtzrkrCbuGJb3mwJBfcXSoovmxkVMx1j6WCHAworvr3cRJFcU2vB4KnBJTqtPFjL3n",
  "key11": "2gwRhvHukr5x7N5qaeYmgGsH5MdLQmimJ8iBBW4Ndt51z3zUnAiuB6h5FzZf5A3V81p51wSEXTJFuCKCQPWFkjz1",
  "key12": "43awVNqRWhDCvSCZyCkiNHvDiBL4pGaqQipX53jLf2okVZ9souuoFxJpS11bkk8MQcimCoFF3VGBNncTi4iQLeyA",
  "key13": "3ngxekwL4Zw33X8UcNqox4s26VEaUswDgzz7a8V3at18PUGEKKdKpgGWXPRiQDxixmku84H5GcEtV88MQHL841G7",
  "key14": "2LCjYzbrZ3XCcKytV2cn9QLiqAParZEetMb4zDwMgP2KBqpqxYALtTbZHEqv1Qv3uRYf5QWaSc8hAMj94cgZvv4v",
  "key15": "2sjaujNEzpvDYfNTTLTHqV1gWiNVgkoiPrjBZrtT4ZcXqZ3CVyaHMWqtN7WMUqTdXY5wch1oeuQyzGQPTeQBwC9D",
  "key16": "3rdL13qCZWm9n1Vbw2rGkpLoG2A71AtW91qWmHXKsg9KCaGYLQ7fzSyPSHaUybMJZpvMUXSSnfTDw9c4JXaWBDfZ",
  "key17": "3aUXG7uFG8udmgMUYGTLfy4Wpf8zGTFad5D6ksPKB5SR65FLvSRpZtwh4bLXuhiUL4cVLwPaXuaUL4tyLgH4jCbq",
  "key18": "kTev4LApxrGKkaxUVQoWdZPnQwTMSC3je1T8crAFove5prS2t5gY5ct3LusESL4W7PSZdr3cZc6be6yetv8MKYd",
  "key19": "28zP6ptMQPFBETcGrtdUXSNgwnt7BVoABksB2c5TwUuc6TJcmuQSkM2he1DFtGQMjvJYXrPA2Z8f5SRgwTXrspir",
  "key20": "4PN2TdphGfFMUUNoVDNv6YT3BtkvTCVTVRcKbJagBCr19zESznAKoRmQ3uid7uNTtKosWgqHp1i3wn4ni7U6X7Ww",
  "key21": "352K93tjQib8Np6KCpJt4SuEFpePegQKtrNi2pocqvAVyGUQDiJBqGiM9GjQmVBSJzAr9tUtSE9NttaLNMa3zchw",
  "key22": "4jcpq29aeKiMPTAaxKz7UJor6jSm92pbE5mGg27N3cSjBoTKWx5v7aCWYAmGh4MeyMNapuCyuBExbvbUGAw1VqcT",
  "key23": "5LBSCP22Xsj6tbUtfqnFs4mpyFzog4XcmNdkr7QxX5sNm1yv8aGPgrBGJm72XHoLvaiKgXzYo5u6hiSCh7ovPbjz",
  "key24": "cxTyneV8we33ucwgWqN8Ss3Vo6JoXNbdpkwjbtWSCcs1RXr7N6h8rHj4cdgbpHSvCTV1dz6b3LDaS7yUmQGfTWj",
  "key25": "4Fk9oGvsEKUFpq2ojrbAEYFFBwjNbKMDGTLkuHzFpNRek66NSnUvQbSUPrDX3SEoCxqSG22yJSmcbaZZHZ92wwLS",
  "key26": "29ts7rN9KydJcskJ2SR1ogXio1fHAzokmBDg3yA2jy8cxBbhupCLczWa4t8kvoaqjUXbRKdCWt5qVwyuUj5TZ8U8",
  "key27": "v8wGoh8qkoLubjJaXeyP5vBm6g1QBtMz8vAxh4zEJhUsYtMfWsTCENq1xe7iPwQ8oNJseyRHLybuJM6W3rXiZ8x",
  "key28": "tJxgLUAPg1m6w7iSC2Ep2bs8gCM1H8aHnPgUeQHjeKM45B6QdoSvi7rLMxcN26DFzDSFvgiEH2jAJ2AzBxJ2Xxw",
  "key29": "5kJ1ygwMqJbVEy8wrsjnNf6KDf5RjipANUgUYoTUAYirWhE6cYAYSDJ2cFScwZLkuf2pYrhwVGXYSg4P1wm8mWSh",
  "key30": "3YSVn1qcwCieTQuWSbZVctx8iM4oPhmjVMt7oeSJMMWGzd3p8a4UBPh6cR1v1MLja6AQXHTTssp9K4U94LheWdRa"
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
