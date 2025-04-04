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
    "4PzWj3mmJhu8yizQNeqNba4b6VFQpK9GopCewgFKZtpcsvZcTVLcSaghdkhyyrZVwVJu5biGjdaE4y7zPmUM9f4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63QmT4M7K7CtJyeSvyWoa9Lv2CucoJUxjLd6va8iQQE5zCn6SKa39tTAqgrV2e5StD1ZaRMyuKu75jB661mC1uTV",
  "key1": "3cMcJx7b2aGC8d872BqUE79XeiJSA1qzcqiMsCJvHKLruP85ZRyVuUirYzeRoPeFuZsAXBHieKswBi9sf6tWb8up",
  "key2": "5TiBSyEqqH2hFPn4bZ31C4WZHqG8u42WkTzGBqmCkKLQdXpYRKFTvSkN5qEn8U9x3cHKg3DTBocC6DexePx24JPQ",
  "key3": "JAf97US4k5nj6qkj74354MPSjFCLp24cdEbzsrcPMHMrwfpghLM3V6PvhQkM2u5GzbM5ybYqFUw78p8nY8i1Ucg",
  "key4": "wJvPCUk1BXRLWeCqkBh36C4gVHiokt6tPfn1cCisni6R2pj2cjvxk7LLpSY3vcKuxjTG949eqeKmAmXnXfzKNiK",
  "key5": "2WAxM7uT2bBFkRJ8YmVkkadPi6igCauGwrdjEkETM4aWMJ5uELqRDsYwsK58LEbMrzEuzUfHo9B87AAsvc9vTNZ",
  "key6": "457tQcd6xZTw1W7Qg5bxYPs6EPoZmQ15pafdFp6raqXMH5a9HX13TXmwdene8nRxmduqEQcjPBN8tY78i92AyJc3",
  "key7": "5D2zXZed43QKTEHLnDaNAKCqE6Nf7bjqKAKTUJsco3QJ1wnH1ajvTeRkzwa5i8ALALSke14oRZMe2e9PkQ2rLTHk",
  "key8": "4HQiEp2HufGiFRJzUzFGjMa7fhbqXDFeNbonv6wscT4mCu1h6gcSuFm46QAHMAJ8pwTDADvCvNT1EvfNxzUXQzTN",
  "key9": "3JfQFW1KqNGwnSsSLNhNWuZji4ZYDHEDksS3ZtmmVbfM4soxfcbWSf6sEn8WUxFAxYvtDG239eApYKUP4C1ZXtEL",
  "key10": "33hH7Y7wh4BmXouUVkJabHapBgobBd6maMeyC9Np2aMkxwhQSdkAxSfL38Qxu79cFgubJiwMdu6ZRdWxRw6tfzxX",
  "key11": "2aaszfCzzeA36GV7xLU1hzxXUYwGcMsZzFwpW4UZQsPHXp7UgDRoyTKM7Vu4sjFoWwwSfzvLWX7d8XU9p8YyngKf",
  "key12": "2zt4vpD77rRG3PmYocg78UJVJ9eN9HhbxMSjt2r6Mf8o7j6mCaRWSVojX7GtqnxpSBDJSFp4EMsi1YxpekmhMqEi",
  "key13": "b5tk1j2t6cyoE8G8eEQAWFpbB5xFMzbbkwMEqjKWGytHnrGEZAodMf5fn3HWZBuCJDKTU6uLefpauHCLYjdqhD6",
  "key14": "5hMpLqtryepd3E6kmwLjaJqqbhqqL4sFaXkT5nS6CuL14pxVaCwcBfzA9pWPirpAVhTxDRt7m6StLDwucNCZwNH4",
  "key15": "4k5jCPXrt98aTBC1eG7eN3RoWDammoKF78wgXFwxXi5g5G3ciYzNyF3TFs6NrNsi4hL7PWEgV4h3KEHTZez1kyAD",
  "key16": "xQR1JJJn5SxT93Asdk2hRv25nBS2Napvwn3sPTVJkwDH6Y2UVJE3AepM3jW9aQ3sfc5PUAwoxKbR33RZb3U47uS",
  "key17": "2VQ9bd3st6JwoT9ZWuiuA3p5FT1WfzmreDpfbpLv1HqgHVVMnDuuFpZ94E5CVcUx6Vt2Kq9KrWSV4BWhQXtzii91",
  "key18": "5Ebzu2cNz4RzAQ4u2wLJ97BoeDaiKRh61aNjfbgVyBxggetQdwrx7S4VoekQ46vMa5zXSsAehTzNsuyNvX8E1mYT",
  "key19": "3AQj7QEfR71jVaTkv2fAHYx4Q8XZCUqKEs2TZkdrFj9TswkALhTNg57FpTkp1zc9uaTXT2NPNL55UMJRjWAt3NhZ",
  "key20": "3XHMJyFkR6aDMhk3ELETaeDvhExwBbVv7jcKqZym9Lo8r7UbSMdRWQzbzaGHJePgBFARhRtAAtunFCAKjzsFTCRr",
  "key21": "5dDwusabTD9ceu2FXPBddtTp9UYTgjWgseCXjaXctX5PH7fxS7GA1EbjzYB7YG5FjQiTSm5CEZG4ga3MCkULvMQS",
  "key22": "aVmmNa3sGTG6h71zjzPFhE7aHxBenqwU54vFLurVFNdPRLC2LJca2c2zbCPMpFH9X86CEAkRUvmEgHkJXtxFJEK",
  "key23": "5Psm16waUs6W5izvAmMLDhxsVww9nsx9x2DRzSFSZg9NFDVNh51tCZ2FBvNNR6Fvvbh2jeHJLxEkYBFNpvTQwdwv",
  "key24": "2azvod4sdCjGoZx4pSkqJo2pdefeZHAG81JN3ZLdtBWPUZ4QFLiMRZ8RrBSerm3KL1gmctqN82HNB846ffiQpoBR",
  "key25": "4DjjG4CUe4Bi2ghoP5C49MHRMfkgXVjVCBuZ4NecjJcn5GX3nguZAQrpgiYyJTE6gAEpC8iMAgRnH6ZT5ZXoJ6fx",
  "key26": "5XXH1NKgWhT9Qm9ysKwfvC1Tu5npjKg3Kgwfsn7HyJmS9RtY6MVqeQanznhdLGnE2UAeift4iDWMkneETSyioN1b",
  "key27": "2DtWusS3Pxk8DuDUwzdiT3jo3dH8VymiDvX7bjKQQ8W7aKxAX3enmmPifFKcYqq2d7ugxzVZZ5xuDkMsVw8hEXGw"
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
