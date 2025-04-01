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
    "5MDJtDxY3WuX9puewpP2CnSoaqF5CE3DjP7CDFD9SHWWdAQM3nDXZ9Q6KpcECKwGtvEgfBQGs3kLi8wbqLRL2b3Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2twY6N8WAyXh6ncZVeQ2hqUcaCarsB5UaEBenwsg33iQr3GuiiL7kx18dLienVvspzPpiqdQ1Hs6MWTgaJf124aS",
  "key1": "4kjwkNpjebEwUro55QXR3FjEWfthNh89Kkfbum7Z8xDcuprhPCanCutr4uAeix1iXSn5AEnswuzyTCiotG2A5PkL",
  "key2": "37vG576Pej2yzEjCLCYd9dbn1MtsQc5hcWvCnt6dkejNNxGXFg8MyGY8s5Dp7upHh2ZtVDay8hR24aEhdaiUQX8k",
  "key3": "3hKWUXLQzvKdQN1UBBD7oKwC9JdxpkwErVAL5gSoBvy5hqUdaSTQojvpZALYici9en86pe6H8We6uezgb2cWDUb8",
  "key4": "Yag8FJgg1sxsGxkd5FWUHa6H8XDwhBq9ppVZBTk3BGcnMVwV6DJJcid8isEUetC9B4yUGzBC81eguHx99GXpkz5",
  "key5": "4oLyFPc6FC3VRf1ZRvoYPUn2fKM1mAJWc9CeujFnQSjr56MwwMbbRSi1fHHERzFYVzv9twZ8qfgR48x3EC5V8YeH",
  "key6": "2dC61bdi7FB2HynT9Vk4s8T1mnPVWV6YQuRJ5ZUMwwNdNV73mCXZoQzUjitGxwxsgtMRuGCoJdsyF2CYa11mJr9",
  "key7": "AcmREr7imtLYcysyXPNaKNwRE5JxqhfRvyy1Eci9QJnmMhqajpUPe9Bu7isCUrNeFPiWk1fsqasPJV6dGyytQ5F",
  "key8": "3FV6Q9guNi76cnEsXosB18jzZLreHayD53gpNxmsHJior3gJdoyAG7hDNiUcdCEZ1bL2iK8NEqeiPUQXyufTHvBB",
  "key9": "3YvAHp2kLAVr7ktV3sp37dsu3yAh5n4RhHDVGYQEkXePsbxLCKP3LBCUQpo4M1rHtMzePCgs6q9jTj7RkcivK6Uc",
  "key10": "2SowbPu9fKd3k8QSEcyxdRKxEDr86g7hmcjvnUJUBqPvTpE66g7AELCuJRgFmRG8rbwLxYfiHihdXwQGt3oWJ6x1",
  "key11": "evHoPppqydabY2XjXyktyjiAyzTAc65rnXa3BFSKM97AU3gBc9x5vspf1oUdBXn2cfCbQykZFF3La9ybopiDH4P",
  "key12": "2SE7qB4A8AKZJ5yHJhJbMkaWGUJw1Y45WNkpQuvxZ1db6xW568i9GTrpWFhfywRzAjc4NpqeSJto4cxvPWZCXkK2",
  "key13": "3wHkkqLexfEhx4ZKWWRtzir2d273iPWRC2WXCq4racQ1zgLTNABRVhgWGEn6TP688rPrAuZ7TeyEGVnpYdQnML6a",
  "key14": "4K7UzgVbMako7QRRTCSmzLb1veJisQbVwkyKeBdFG4bV7V2rnDsuBt9muMMjDDRfUqwc2eQACHi8xCzRu9mWcwEb",
  "key15": "2Eb938zxRzdC1YttBzoNwj2gKV2FKNstwXUBdLAMjFziNafGRgusNjzKJ1CxH2qzPenis8GDzwtmpZZQbsTP2A3G",
  "key16": "2XMfv4ZZjTbDcrypaSb8Nx11DJ5p1z5qvjjwjSTezR2mmG2pEmB6HngzXUy1kNd9vVdX54Mxd5DRfvz9mJ6MEF8e",
  "key17": "PdKtmjUKcvWEHpj167CXsLdD8pGbeBxnH9tBeZLvSfQGntUF2ZiP2F1S7mmjuiEe7bBCfVDxaGgGTojNmx2nVHe",
  "key18": "4Qtr93cBncQMSwrets7o8HuDYmfR9VicEHhbVWmNvGGUL5yGvf16q9MP3qeCyWfe8XtZaVBdHJER1Sr7vZtUhGQ7",
  "key19": "5MG5GTsi8Sbf4CBscA6B137a53CC1jEMHL5aBH7eNfcCQpDZiH3H8VtPj4bGfEjLjricwwAVGnEPWrUes4BZKwYD",
  "key20": "2w4BHGS6ZXBggCw7SHARNSpDfLupvyADQZeAtLh8bDoTe1xHCdWE4ZTCX1z1obLk7ecKzy5d4QmiBBmSy3Q3WJMW",
  "key21": "5CfZnV478hozZLDdmACoFmfXhyMqH1NR5uqYNfkmurWUBgv2YY59wyb9MAq6CHmKLFEyLgqpKcnrMUpcnisswuCF",
  "key22": "3cB3G9rMXRi97uBzm5F5UVi23qBnbqUbvxaCg4LgMyUXwdAvGNeigmzAQKCCPhakxzBWrL6xCMbPrtM24hb3pCfd",
  "key23": "5x56wLiEpjUAmitpoQ8XwKP2S7Agzbsk361fk59qZ1SdBak61rrZm35Q6ECZzYcseGSEx1DDmK2mvSWQxPmFf7LJ",
  "key24": "671SVWUbzL9dJ3nbbv1Ds5QR3jaXTwTRj3czV7kJQZBbkWzm4rreJm1uk2172NmAruTAvzV3pcqGa12mTN7mXndh"
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
