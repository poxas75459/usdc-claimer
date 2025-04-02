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
    "3RTJ678eo3bqpjpDZxdPmnwxDSnihLf3ufuQAB1h8ogULEYkVpMMPRzp2AW8bsmxcDCu8E87w5AkLvZrMbHQ5n2y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZdAZd6KdzHY9uS39ijKhWuvrtYh3vW9cgyXcVRvrSLDshbaSPtCLRZiyyYKzXagDrjCu8Pke9fCLjbaS62ype98",
  "key1": "X9YkQBNrTt7H82iui68J6tUgCKV9E8Qnx7QK9F4ueiDGM3bjTb2mdCuoSXEyqVoUHuumju9z3ipJb5MdLkjou1s",
  "key2": "3iB7wYf9TeyoMYkznCeYvzqGGwhG48fMxJAW9eFyg8GzpeT6AjohMRj1Pyeg2Vjk5inyz4u1T2ugGYf1degZiVPc",
  "key3": "jrazJfFRqw2kNTAFk7BYo9WU1DNWQP7QzfaupKtdR4ZSAy4dUAoYrJRsoponUE2pV9Yo3M64qUMrppwNpmW86ht",
  "key4": "55s15bngC5mHTECEBkNfziZ9eUJrP7Vy4dTrSr2bbQSsfsHwSL5zTrnxS7JikFjHCsCXXnmoY2xRyZdcmHSV3jFW",
  "key5": "2v8Q3UQqL7yQT5a66x8yFq7ZyteeZKzrMbafFuGsLkXZqk3SS7Gh1Az3TFZ8BmzuffT6tMxLLLZaT8YJtD1WNcuz",
  "key6": "AGofQ3rdMixXsq11MkV3T4ZoTTkvoQ4XKwWSsAZyjfyh19eCNq6Tg91y4rik9mbzGYDwisfBoLYV4s9yiXYcwwa",
  "key7": "X4HULnzquxDmUUuFMzQkBB9oQZu9LxboGTwRFr4DN4beFV5qDrVEvJgGYtMbmAF6HsquMW3bhdcCSK15L7zC4yQ",
  "key8": "CnzW5tceRUijUsnQuGEMR23LPihGB86w8G1NpC1VYvGqyGJtjo7xiQ3fHfo4raFdpHjiukNvrJFXY7uSHMPEaYM",
  "key9": "fra28cKEt9PuyAYSM4QDMqHzfuux4JQFQtGSh4FYxv25doeMxBQ5KqLKuB2uaEqFyko7cPmLRimoFbS9NTBtTGX",
  "key10": "XB8gghXhq7teKMRsbT11wEtirzx6tQd7kXNxVfPQpvk11FTwSyraQoxZx9xL2h9TAz2fwfdfhV7Rgx2kfJx9Cwj",
  "key11": "5hzvwinnimLeNuQMX6ALHE6quhmpUmiH29JVKX1Eiu7g5coCoghJaihC2freNag4rVscCEyc5FMiHd9bBLf1nCif",
  "key12": "2Yh8NKzy7JsZErDP2boh8PknvjvAegXBy2pQt1oGPUpRpfDft57oG9M5rVjVRVoho7Wn3FBYyejwm3bjku21GkJ6",
  "key13": "2E7qZ5Y9Jc5hYsAjibXzQREQkbCEhMHGHXxC1uLiHDrd4mCj8V1sQzfZZDtXTtwXgY4UiL1Ang3umLVobLDgYH6x",
  "key14": "2ErwgErE1e1zRR554jxT8aA9ktGRyoAqXGBaBj6rbmo8mkNnQFT2kzpN9zA7JGA3PTb5z3NTqZrLzRac68LdRMR",
  "key15": "2P6rmXXVBvp5QdpbXRWJsa98hvyUFz5Atia3R8XF9b4uE2rcGCGeMGEGwx1qbtin7gv3waGWK9qSYS89x29cenRd",
  "key16": "5vFv8F7ujEFewAH3XhTSTa53Zb67WTfe92iGRDVdg4Fc7mci372xurtD1bf7Mw5xA4VGq8wAgdN7oibden8Fj4sc",
  "key17": "3qA22w5z7sB3Zcx1L3svWBWGWKDMJb7Ek6R8HjXaU6miwFb5zDjfwhxZxsE39CUQ2E6L2k7B1xxYM4j7vGMbXzUQ",
  "key18": "2GvLK5i8cGqHrSZb7t24mNfpATAu11jdLZvpfY11d6kRYhMgSZPXjWq6kmvPVC21t1ASxKrqRF35B1i9porShSq7",
  "key19": "2kiqEgz1eMhmvtqL92ksNNHxEwAYRKKvr7TVgt7YWbaozUpcgzSgCyZmFBNfSvBvkv1tn8rpBfjNbVG5mwtRWPGQ",
  "key20": "3bLKLqHscp986xqyqx6ADvoALN8YLgiDgDij6PGdjkdBYxumq8wgPZuFycJX9RJjEDvsgdbkmL1jQsWCWhej649R",
  "key21": "Bg4wjvZjKPptXBkC1rb27pTbgw9pcH4iaTJqfgBsdFJH1xqAf9nBciAFqnVGB8roNZqVt7FmY6ULL68pPYPQEA5",
  "key22": "5WTridkMGk2Tg4h26hePRCvd1T52WsmbDLgE9ewq7LSJbZUAWgY869DiQtFShN9oJg2tjixyxi4kb5cLzyVxUW9y",
  "key23": "4YooDENAVDv8K9K5EBdJEqvMtJJtTJuea263Gau2QYrf3iZUrh64a5LAGUTAvFtTHcYtTTeHgtC1cuGaYGzQPVUz",
  "key24": "4Nkvuhbd6fDePGxrwRM97f33q2VDg8BGqC76HaiAGvwvjcDZN6A5A3iDBhrECepJhvykUi6Kyc8QhafN9s5wL9hA",
  "key25": "47fptpvgUJbRHZmnL7nXvcX88SQNVxoCVgHVdvgfeuc2YFUJ7K867k4NojhCHjzqHGCosSChuQmVYwkesV2e4SYd",
  "key26": "NNhubo9DnWFZDF7SUEMDUT3nm8fdafommzmCZX3xM4eCBGrKgxLoJd4EQx69ywP4KhQFeGtvg2TAtqpHnEJLZfV"
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
