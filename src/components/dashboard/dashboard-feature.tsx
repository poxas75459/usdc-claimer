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
    "3JGE3PgQpjutFPumGh6Ti7dwLgxQtwjv5kkygY4tm1JCR2MsRt3hr5rLUmnT3Bw8U1GHzQfVSQgHX1TXenGFmqog"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "651sPoVsDm5dzProapQQt8CuLrm9a6tZt6CvoGmDbKxvAA8GfuT261dHJZA67dsXhAe4LfWjbmEmPwYjWiWm5wmx",
  "key1": "54PHG8kbgvNTBT1jKxH1CpnTyLRUJrboGq1xQ9Yawvr6Hsf9Jsj13dHRR58BBfy3WT6xsPHs14wUSgaTrh7Xi3bn",
  "key2": "4EVG4goWRwuuVFx9akJPS9EMFW2wxwhp5qLpkUcPz4aNzEoZdn6pvKuZhUZ1LGEx9FghcHmDiDJ3meNuNapABcqp",
  "key3": "6vKyV3g5jngDdAKqjXdPfFH8x8XvaJ7Ly1oB5v4BeeQeeXEARXbkKNhFhBCuT63tn45CR4gd1w4cvvxwjaLhWTa",
  "key4": "h7sPuURy7EBv8w3BwFEpp5A6tcsuZCLf6aiA2tgQPHt5Nk1nb2YCi5qKbVM3uNHDeKRjaZ6Sa3fBLVkokFx9Fc8",
  "key5": "5bVivxmhTLLLHWp8MedS6wNN5webAVVVtYRP4bBzegzqemL4qaSc8fiohRqQ9VGBXabLfWkwJm5LuKNEKq6otePJ",
  "key6": "MkBVjGRyDAAgumFxWuLHduLvEx89ZG4sqQkiTXirM8SWNSTK9wHKU5oh9Wo5i3LDNtMLi33ECjFCXcg9cHC9rbB",
  "key7": "3Kyzs3rECTSdPjVTSCd2gFXMA7Yhw8DUPPNfo4jwTeU2MPEkh6fXd514jPUAbohMDcGC79atcs5X6ApuB7LrSW3t",
  "key8": "3iaFWibiZCw7vrUZMg2PLSpFDauV9WPGL7gCRgXfoRYZMCXYYip8C9D5AVJNKcCxFzVXq8Dskj8GtTvKkRuttM9a",
  "key9": "iPzsSZ5DYbWF3AxhEhEFDj3RgwzutWwR1FFDPaTtUy4AAgKNRRcPP4nnRKjNKVMPikyLRtqxytZhsVr8CBYCkFc",
  "key10": "4ALrUyecHexyYuSVe4NzZc47KHgb2oS5SSU648eNH8n8LqBwvG8q3ADpzLNAa8RxEyYscsXVcGSHuHCMjkjUn2rH",
  "key11": "3dJnADgPEiojjmfeqbhxxCnXgVaWp6TNaufkZMNo5TN4vXGiPW8snXXXyvSgbZXXUntCEigB6BUFm7ySy9b3ivWe",
  "key12": "5PcX51cmYV2HbTKjoGLxuscHD7Gyvir35aJc1kEqdmaVbhgQy9uAs3evogAgW2VcmwjrevnWMTqJ7Xdw4VP4QXF4",
  "key13": "WHDZqvoZr4t9L77vqGmGUscGh4L7NDxyX38ECykQMCCWjt6wi9sgew5LSNfXfmz54RiwfveJeAipPsV1TkemXFT",
  "key14": "51qdBbh3CcHdEmzseradUqdYzjyXfpZBpV22dpteLiWRnAPUitwM9ZX4SdhKQyGakCQEv5jZwDThrrJnFWbspr2x",
  "key15": "B4q5TM2RGQLc5ViiNkbfDfHddjJwi2crpN1mAzvSVhkQMmvwz9HuL9fLm2W787arkpEipQkVWp13GwrfTbHAKL3",
  "key16": "u5q44rJ8vJVjKejvw18vBg61LNGeVHN1AV5kVLdAWdUEbSfGHAHsksQif8czN82n6JSgB9BWG1bMXdk9WXB8CED",
  "key17": "2okwmdtzbNz6GQvsEsKAv3z32sBy7qVhRFRNjUs1QvFRRZRjQboTBUetisPVwxWjouthHK6XYGGgwz7u6BARyDtL",
  "key18": "3xjBRYid43Fnu3FaWmeDe16V1MkmPb8uFcgREuQf1kwXg9SMvQAFqcYEYEC21GipUQevaCKB8XDNwWNiVa8NrjAF",
  "key19": "5XTbumohUU4T2gXs77Sfno6XkCvNVJUDs8XciJA258XS5mrLirgAZVsHtJRvUmZTRd84ivDrxTuTBrrDr8yhp7tU",
  "key20": "47qpYjhRS8TChfRK7VUKBmeFr7N8kinyV68MeCvhRMRiLzwKDSNMsTDBGeAUdzZB1JtMJJUUqTxACRYn3ZVWmVqH",
  "key21": "3D4qJM4Vo1rYyYrq39uiuXgZWRGsPQuvu2uLciiY4ToPQnveHyCh7HxEZpKm9iTeanVWtCoHA9qJ2A49RojBufqv",
  "key22": "48ux1PhqR6otXRidR8veNg9zCQjGQHEtVZxHXzRdtJ1zYnP4m8sn75gi8MKNJpBv9HdBuvxhpTHTbVxAQHsLd1nB",
  "key23": "4r2pUBAn4RFGhfeoSc2P5tpFoj2cf6GrteRwpM3xMK3Y2EpVnoV2Sx8kxtrneJVYf3EaSLWbP2EP1VoH8QPfJ3hV",
  "key24": "4d24FLGnAYGScGkRTMmiBKBWBaKVjZbEc9ctTQfwNfqrpdCL3FpvFdrqAh7meG6WDCeNa5wXAKTRhESC1ywwYzJD",
  "key25": "jLCPkd9Q6YSz1AvWix5KvkHCM5rTwaXdHx57YyMWmmnnRuLjqeZVuXc5PnDM5F6AxNGMbMgrhwNYbDzoNZ76yCW",
  "key26": "2qspVkcA2GmVim6G7uAfqAB5e3BtZr7q7qjETumDZpo49A76oputVRuixGEC85S8zFMKM3WtfTmEpAEhf6rQVn1m",
  "key27": "2H8XbwhDd5BuUFWBimxYw6dNzna6iVN1fuFm7iqueHahGonDMDAKjUSprR6MAuhevSJAiAfJg6o6M1jnRZutjj64",
  "key28": "5ppQgG7Pvh8Hiwr3JbgNEA2Cij3DG6tLfrizz39os8FGEqrz88eEpCSz1tC637H4wdn43SMKbdYQadS8jKxJ62ht"
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
