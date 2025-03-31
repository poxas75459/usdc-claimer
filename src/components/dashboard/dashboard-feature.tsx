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
    "5ujiWu44B53S95yFxEWuf6But1H8696D4fLHVQg2ZtrpJycUD3187yxKTHZFoYpUBT3NiaZn5XxwEzTHXdqBNKeY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CdQeMhVqfrexMAtouSoBQxXPFWfEWXuK2M7AJ6h91ErFz3aMjcXhFLEPzCWMhfuhQxvthHWZgDB2iwpbwjTuBFH",
  "key1": "2x1peei19cp5o34PpXhVTynhx9j7LmKW6Wgk6vDAzeGA6x3AR4Hv9TbQTGikoDSZNntwjTy8MjhmqcyxqGZMrRF6",
  "key2": "5D7E96RPpkwNavURCavazp29U7yoou7mXuhvQGitWQKHVsZ99CNBa3siJxcsqdidmTLsFjJ3eDTAwF7yG5A8BeVG",
  "key3": "rXuCFVsEEcTmxr4Hfu66THqEYaHFjq9F5yE9wf8YoEUis6P7r23NHsjKTbHhmebDWyHwCZTsgNMybNekJmdYkeN",
  "key4": "4wVU9Yw6b6Tx6Qw68TzxtDHQioBorkUVdvNbwAWediBUMqDbmXCdoFGhsabT1SNtZ43qAQnmEmnkMncs5qrQHDUQ",
  "key5": "wq1Ys3BioXPZ86pMZieed8ZRhUVnJ5w9rk9A8mhTLw1ikT84yN5eKW7QDsY19UaNTfnqv95SwQJv6DCANSVrR1N",
  "key6": "4s1ezB6rE1eBAWTkVnRE8qKhp1qL7WteSahjv46mBtoyWpvoaCEua7pZMeQaw4edMiqqpQuVDvG39w8z8rCVoNji",
  "key7": "3H9yF79PehvLAGLSbEK7ReBTHShY2pzY7axhjWdWG9RxSthUZUByHz1GCUnfrUpxSyQhXyN3WRhTbG2964rVw1uH",
  "key8": "22vhdkT4WZp6p5SCpeRAAAyT5uTYSEYjvc2m9wFs6eotnuHYuqiNpyhXaDRhS9BpYVyW4CQTrHfY31UjUxjYAaVp",
  "key9": "5vpCeXcKezfcf7j8bcjtMDHjVUN2KFSoo9jFxwcWiSgMhQrdYGZbVtAQRHHgtzHTVSsRPjmmMgk5dt1EjpPB87J7",
  "key10": "4JWMu1uZAk3oPXEdBZTWT4t8k893X1BqXoWr4h6AmjRCCjLJm681r9wKLtA2PZCzaSai9qxukKMqNeWTCXgo95Uc",
  "key11": "3yZqoDqz5upZnHVMhB2FLrmG7J4i2TNXA611rwrvKVd9LGMzkke9MPYBYxvv7PYCkkzzwYyzpfmJk5NhWzKMA6Nz",
  "key12": "xfJVVfWbfiQLJ6psH9z4HNuMfM1wEqSzgKqPL8y4HARDRf9ScTQkSeGTFQhMgnrtWieBgKjiKwXFVYke7d873dN",
  "key13": "2mkXz7wjViZYKzfwnb1z6vGBkXSyvtEWRD7D4XGf69QE8tr8Tk6RSu7wMqSRS94we2s9b8deVfuCgkXZRqqfXcX8",
  "key14": "3YQiu1RjrqHHvuySJTvzRj3CcWgnp17o9AyL1N1vBTwYKoxcZoxQRorxpamqGo33JgDMgTeEUbhCDgCqSRhLs7xH",
  "key15": "4viECkoL6vRULMuc6hYKTTEVMqGX4RRJMfj8HPU8mQpneP7eruy7i4yCWDQVeCMUUX1EWdsAweQjLSCezteminPK",
  "key16": "31WNnYiYdG2phPG2aS8WY95ggXG7r2MGdinf6WZaXoggiuGATGGDcHkDGY3C5pMn22TZfmCFUV54tXsDqbCqSFRH",
  "key17": "5E2ajxWxK8xWBXmSmET47eqia9ngz4LvEnBqqBBV7oYrRA6at4uRkYdSKavTbauoYeSuwLFi1y73upKBQU8AXQh7",
  "key18": "2QkWyfUEZevxcLGxzEs6aFpi2JAWzrEpKyp35GXLDazsA62JKEhpt6aQib8pDNPt34VrZfv4LC7L5rqSUVkVqztU",
  "key19": "2qR6v3SPKynaMXc1SJagXmeZqXRba1vFfmYcTVPf3H6n19HRJ1ZRyjo3aAxKQfJQZc7fJyroaBptkEv9Eh9VpYkN",
  "key20": "3zEdTg1zEogDuf7EDwMrmRE6NNv1eMis1PadMLJsCT2bEhyu55YK1hKLZr6TBnVygNHsDitH9vgWbCSd2ZPV14Ws",
  "key21": "22ukEdouQZ4KrTEnuVQH9gE3cYnpttw5tefuDJnucRzo8QptK8Sox9nz2H4CRA818rnzHLL4nG8JBNxHrCp65CR5",
  "key22": "5G7ju73fFUi9FKXwHfzC8bpkvMWsn4Yy5N6TaU4TFCWsag4KvpS69EeiNXywKPDVG1NAjYtvinoWzWhz3ohFcnxB",
  "key23": "9wJtW9efSgftZn2WEfFaL5kmHefb6xmGzS3Yo5obnLk52UrYXXFifwKEwEzudaW57Lr5Q7LC9zVmyKwfsLWCS4K",
  "key24": "3WHc2zA4jatC3sryS87y4R4ez7mVhXkq5aQRrcterk8eFnHEMjhxgroauSx1Y7h4vWuW73iGrZeSmwyGYz1J8q5h",
  "key25": "2GfBDYNzsvyCjzKDWkzrpVVkNbC7fBAVXySzvF9s7KuYGATWdMwTaMBGcUcNSe8YRWmzfdA5d1KT1gtNe1DCswpY"
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
