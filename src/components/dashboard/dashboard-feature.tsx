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
    "52SxWEz3B95kuXFD9pnCaEygLJSb97aBZ6cREGMEtkNhW22RZpRioRN6CS2PX6hGH9NejDrR2ssAPM1AwCUPiBqY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KTm71KrqveEGeGQ87cc7YKs5ZsKYQizXVws4Dnpd2bR13tVY3r2GyxwZPF8WRoX5kmn7SEtj9YwqHdpP8AFMhPP",
  "key1": "3bcL1XkdWSfeyWvcTxfcS53DRPWeufC1WrKaD5n27RTG3c8D8kcBg4WAV9FCGGq1XucVR7S4zrWcpWXTsaLLbBod",
  "key2": "54eBxmiyhWF5wYnXEQ5hQfmDHf1PRDBx7rg2ScAcJrePHSHV7TRv3ED1voyMyLcDekDqU7u1DegGsmSSYnnv1eQy",
  "key3": "58MUL64B7TLm3GedfiRE5PS8fycVV9UHmEbZDseDeNsiaaH7HsdhS1n1RSBZmLkUKLWRg27ePfXf4enrWRNZ9mHw",
  "key4": "9Rbr7EYMoLmkfbad21Px4i4zWBKkFTJ5kEqrWKoeqzg8VRy7aCnhH6NzMxoAGZTdpWRFieQ8aR2P9kTjwYRGUKZ",
  "key5": "2sDynHP1s4eSjwMjzPXUEwr74hX4pUn71S1tWu2rGFqtQNDAyFXh3LGKYvpy9KKFYVE6gBQBTA7brwv9ARLREShb",
  "key6": "LCZrXaPsMoiRfDxPT6uSeVZ2SvsLU5dXZaacw5M8Qs4ZWpSo82sojaUp7cFDjb8ARg4o6mWxBwbe1gvRxvzwj54",
  "key7": "36xPkZAH3mB4Ynv6vex3BjhFrrC61tGNinJt2dXedT5AqwzgJH7PGfJHHrik7rnhsn2MJAcEBpR1YSHopgVxJfEg",
  "key8": "5T3h2J6Mn6PEycLhrV3DGmhHXjU6UcNVPoqfsPS13P9KHmxQSZsDGhwTzyqoUhg2FUqRS42LkgopcRrVUGtwy21d",
  "key9": "S5tFY3Xo6QeJo2yiFoZZ6njDRbdSKbxFcX7XNby39HxWQU6ksMGBouqcLi1yZopAWC3nQuABKRh4eSGTTKtjwbp",
  "key10": "4KaTxANn1y67otgzMQ7YLjUNdzjNdqBkLc2HwVNPkAgHB1Z4FneGV1TbVyQ32VfCKkmLozEtan5MBrtiExZRvV3n",
  "key11": "476RwqYeCHXfPEB2vsYhbyZ7LjAreiEfVgPYTAW2zmvSJxjW4ThMPXgSfJak6btkjRg3tVetk26b3xU6gTHbakWi",
  "key12": "2bBJnX4nmP7qvipoPcHbnFWRtekHPoAAJqpm1cn3gUZMCTaUDx9nzXVsb9Cp5jugXdLUT3aX1tre4zxR9zmXTQs8",
  "key13": "S6mvezTzDziUB9WQtcbXsU9U6hQfv3aEVAkT8ZJvMpD4fVj3ZTQ9fWB3c2qm44HMrHpmQBZ8KaCka9wyBA3Lde6",
  "key14": "46TrXEoTozNZq8JyVbei9M6tuTv3jhYqsXzFRbWiQdPx35GTTnHDnLVsT4i2d2r9A3Vhten5SyjNRQt6sjUMjZev",
  "key15": "4oihGSiC7YPFQuYYcHgusiXFKRzE3h5guocJVf9esEz5R5nKDUxLpY4cV2ku1Jd8biEhj1MWZ5z2vKhNQXGaMipY",
  "key16": "5fNE9Md3oE52YHji4W3rit7Qz8D1PpsAwo4FrSKjJbaRYoGeB8PHSSh7HhLUZmnuBmbDog2koYCnREpRgyLSHj4P",
  "key17": "621gdcKQMYA3md8wqZ9KfstNCrpQcBgbMNEchTd6Gmf9Kn5mqS2kS4DWZ6BZnAreTtfMruWxZdZDEVEGKvKXz9bT",
  "key18": "5hxcaiqzz38dP81Gh1B1fmQ4NaWMW9JBmj8cxoi1PXw2Swpurqhk98ZkpfXkCZssaWoTrNswF3WSXwRJTqXsvu67",
  "key19": "66xoNSvMo5PxL14gPBb3R6wTxaoi5Qbg4jayFzJeQJVRTo3vNoF6zayQkghxUSyyPUFWekd8RugXtoJt9SP8rNh6",
  "key20": "3ZKUwxcnM47DcNXZST9Xpjindj29efMaJPuRRLEJFbjFuSHayyCbWmWn3Ha8rR3p1kvHi9ioqAN4uW78D3mJeYex",
  "key21": "5CGoBdQefyvvF1xQRnTgDWMSehCiaFE8cgP3AEbvE8qV2M3fxmftCFs9s8VZ78yvDA6QrjWNyVJd9NdNb92KPALE",
  "key22": "4Jt16cj3WqEvXy8vFvcXXAvjJHMZ2XusqpjmTLZJXPsuM7mmS2bpGfiBcT2tjiGyA1S98PDbyJdXypB8XcPovXXw",
  "key23": "AWYVEvUhfpcE8t28jihYykNj99NFbWe685u2ZVbTHrQek3fsJNqfedwbfovhP9UHQ3xELSRP2gmcyWFEjBpdQkx",
  "key24": "oBTQimwMhFXpbr3qhrAdTR67MR4bmKb1qTNJqWFkr7ZZn46aCCeBbpSUufss9sKL4KQiRxhGjmsWs1ZihE4r12P",
  "key25": "2ei1TN1Rx4m3FJcwKhb1tC6DzuxtM74afs8C8KSMrYJbxUWQTn2mBnTVsjh1UXBUH4GFbhnppUxLporMNYzWyKVt",
  "key26": "38VnAW8KBdMyf2nqSznz7nmSq5vCteTHSLR4KrQ8ubrhu6eQkH9uHU1RNcNZcyhGB5NoNG5KWQ3oHvc3sFzd2yTA",
  "key27": "2R9firtzFCtQ1esLBrbc91yGVktAix9AZyCFqZwHdGrygU6AwwZaiYabPkf3LRVvu8DvqK6QMZDQyRAxBZd3BvBk"
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
