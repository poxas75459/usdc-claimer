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
    "5trduDfnDHZoMvdHatg7QvyHVd1e1ooCzcsxoM7uxw6GrMhqAbuJXuxK8vUqPhQYrXWV7g3YQZLXNB5fZpm9rvF8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GkCptTUszxewc3SZeX9oCWVeT5gGSq11DhG3QFKSxDhwB1nuWsStH9x2YpTEkUNWuyqpEBrtB91fAZZuy6Ykn3F",
  "key1": "4s2TEhQeyMvEea3KXskuUTGGszmU8gKysfL9cWPLdSguT2XvQRmpuoAkrY34Rd6M64eUM6QmggB1ar12qDEDHZRP",
  "key2": "2jxs1z5xrPUph6AjYGNEj4NVk9djmofgkfFDq7hyPYkEY7Q7W4TfVXQHNbF86LEKR2DQdkuDrDCA2jbMEaECziSP",
  "key3": "4cWMRi6oGem2JXg5WNL4qr3RtvoBJ56qWA6sp4bR4NafrPnf6pFTyqi26q4Z3LHkZvjuak6rWpWQ9iUMchYTViCE",
  "key4": "35FwUTVWkUWtas1RNWVsCab79P9AmoW2M23gfJeTwrRRWuodTknwrY93T7J66d96ccPeP485DzEaeQXYhYW79fS8",
  "key5": "27Y1TbpXtYqdsncsKUiD3MWo3aGGwvVW5o39gCsMZW4uodrXnTvSnCFA3n4u4SfVz8HmS23GZQ1Wi8kPGzK8Fj8o",
  "key6": "67ZQX1Mqo1oYAJTDYNJxWgx9LgrWgrCRuW6dggf3N8a4RSgKD2X8LwdxuKwir1KMo8H23iCvGS5fNkzRwT3wCmH6",
  "key7": "2fi7i85YD9srywYQRD9dQjruJamRAbxjriYMzYmw9TQW6PVJYxu7fGgoRA6grRhN729yoTiXKhZ4QHM1sbEzbi4p",
  "key8": "3ju634e3px7Lfn8sGN65FmTfgdNTdx7oaLeHUB3jAVakRA65skeCtwzBkm58gjyN782PXuJbVM8JfefTabuDh437",
  "key9": "3SyziMQeWazW6NSkCo7Wgk5SPGnsTcoBo73APvt2g7Bde5VWQNdbSA4QYvD2JkyoftJ8aZHMvWvQ6qaKbDLE1LSy",
  "key10": "57rvHawv65ThPjk8Poa24QQrgJVg8MF4aPUT8UbAP18dPbn4ivYnDpjSfvxWez73a3L9kaVVUhTAuTyJ79VxCuxk",
  "key11": "5yA5Rhvx2ZTEic7ycaaH6ZotZxrFvpheBGyERqUVZaT7evuRQ6WHXMminbyJjcjtAgbgyYEj6Koxjs9PgbPVaGM6",
  "key12": "4gKGbxTEgfPXaCSgG5greYz7cG3cvfndX4ksZEjXeLmWnjrdxQtVUpFeW9rTU8Z2xg31v5fiu7bYRsk2gUxyYFQb",
  "key13": "2zTyEQaMhNt6qBEL49tvhE9suH6RCfeCWKXLNXGyLMWexZ5ySZmpLdb2sVWdNDK1qd4M8UpxoAng9AZqBxVnf5nY",
  "key14": "47mski65dnH2g5X1mpyJbAnK27AAhTzVj8v1omzAGDA4eQQVQ4heogUK4XkMv5v9rEpQiRFFGHtgzEoMrPfv1J3S",
  "key15": "3oTLR4dBgzrEr6Aasrzjy5uhoCrZBtDBiGDiaNP5PrFqt243HQ9FLDQb5HfEjxxdbcN8v2FBsywCw3A7LTz7DsVw",
  "key16": "5rK19itbXCWiCHQkEMiQVsk3F3QxfY5LiBMmsMY4GFiTUMw9An2DAwmANw1VGdi2ijdDPCChsYvvvH6fYWGgiwoL",
  "key17": "2i1B8jfkN4WwyWHnRk26eUEDkf4QbcuGGkjrnmVg9K1wTUf9TD5NL666m8wcgTJ9rYLSptj7WLK6GN9wYr5oMXJm",
  "key18": "35XS3ZurVEe7cjXrU2unJco4Z4evtP5H6CNeSHAW7awziwk4Pj5LLRkBdqdyLqE84NqaatVRQUvZFWZoWwxAb8he",
  "key19": "8diHReQxmaTU46iiRsz4fbPBatwPFFwDzzxzqa9mUDzyCt5PcbUvagERyPK7xr7pzhFQ44tubcEfFfbs1XBFWuA",
  "key20": "23qu9JdUjcgJHmqZcni4R9EmWf8eEwEEUqNrcw4Y9RdxhcnNR6qteSKR4fkQLAvuWL6rFJcosVN6Hda6Dixf8WFL",
  "key21": "26fSzSTHwYzrxhHBuKpZASEHj3W18ZGNL3zmyKP1fBZWjpg6jyE2HMERe9rzAgAtmeUaRwG87ZE1VHwC22dwws5W",
  "key22": "2Pkw3hYFV59iBKhzZ6EwvYvxE7QX7b6ABuzAqoUSkAzatQFc7JxAgCVcLf6ZPNfbyN8FZEi3xCMkSXnRKrHv9QKX",
  "key23": "4ndHfbtCEBDrP8jX4dmn6J7AKo1EWFkvXVysXt83W2pbTtZRYn6Mh3GcQKewsVkt1r1WzWqZWTtqBRGgPhipuZDF",
  "key24": "5gkD2CfZESRNFwTsPFHYC2o2tWSjEvAHp3fYuTnw9UMJ7ZCrsjFpLoFZNKh7Ln8ytAWz1TsCv1EjaFp9vNgfLGUR",
  "key25": "5gnBCw47o1XpmaZofdzMpVwT9orYofpTtP1dmX9jsrJ5LJWidxtyaSPhuoLQRg3WKbHkKZz6H3KNR4DgGFTaYcHS",
  "key26": "WJWMHXGTABXutLZkAVaZXiH4d7hCAawvUPPbk7dh8b1Gdzo9j6RXCKccPwhEgPrwqkBogfbM2CCPnSJG9AQd5NP",
  "key27": "5Gj2D3RJRurWfi3SjhqTsraDCVLELVs7agTor73bi7LFXgyV9YPr36ifYvAbsRUhkG5wnSHm5983VTF3pABjBt1Y",
  "key28": "2mGwsebGpsL1xyAyc9Xf7cmajU3H5G7hk7s5DDVbPSM7W5ZPBcJLbPEMpoTifJuVmEXkdVeWLgDsC8jH8D7s9QpU"
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
