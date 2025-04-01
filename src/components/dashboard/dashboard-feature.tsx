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
    "ip6tBL62hETeu9QJ6C2GubZYqRNv4B8ffdn3S4K4HuNmR9Z21Rc8X2La4JJFkFw57eH3ULNeCv41kFonYq5XXR1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39C7xN3qZ1EBXjeAmqMUQV7Ji8R4jVqam8QD2CzMwqvDHiWR5k5HVT1JM9uw8Dts1DfNLsSGyzGUzDYadB5cbvFB",
  "key1": "4aMRqQuaqWCUMago7HVcrokhTWvqqDk5hU7eB9qhvX8gJUm5qd8QnJfb6EyaP3zqTCeGxCC2E9kfpSDRRBjF78AW",
  "key2": "N7aHNaJQZF4MSp7rY4HbPEUqwi189veTkqRHemvMVWj53GA6KWD3CJjTjWt8tTUko8CMkKGnbxF2257xdUGjui2",
  "key3": "2tv8VdM2pNDQzD7dC41JFBy1kbQTaHhcp87VCRssLMkt4YSZqe9VzQJ5UMpzKXMotJAYTUezxtB6geXwAXmPGeqo",
  "key4": "5QYagsnAYTER6w1cbwsLgsho6wKg43ifmitEZTdqPjG6s9rRQ7s4bzMrV6BNVnaKDz7xB1XGgkGHKtkGha5JaKDt",
  "key5": "1MnbvXMgoxpVt9tfcN3gcnpq63BeL4hXNQapXjV4Yn39CvAgjC9X6wTcSitvREXLVRFtuoUv8HLWjBMLMNkTAVS",
  "key6": "4Pa87NCfENFaPJ6pBUHm3TYzXCdEhMxMgzXakPZVhK15heQz3dENvpxf9JukFLmXYtxfgKZWcJjBQDoFaS4VoeXg",
  "key7": "3Ctfh9s5BaNtSKUZL5NS8mofcaWRvQUr68PU5ezchvYGbu3FDca6o6exF7oFnXySLyU9HwMrrGnRHCpULF3GKsC9",
  "key8": "5dqvKw9oyrNGT3NfDDXHoKHGDwaNLH219E5B33gLMAs2fZkKGKYZwSVesazkQDWNnTDTTsawWTXsY26d5gxnD9J3",
  "key9": "2ziJsmufvk8JpH5w4oXPDfH8zF5o24N1GVTuyxohKCym6CRsJb3u6nKDwpYjKbgm7xNMpJe4Qt8RzHEC8JxVQ67N",
  "key10": "XWj4crw8sUp9TTjPkeX3LRYRmzm83NPYg79uK2Akkfp1LM5pt7KPUaQ2BW5g8BxJ4APkGh6MpB2k36mGk3UTsFY",
  "key11": "3t6s1ZiywhYRB2PRzpUWWhSmi2rXpS1sBdQSYsQhbHgTw5CoE7csMwDcrV34xNKenr3BeiCfDFuPqpizYjvHH6ix",
  "key12": "652amh9aw8i8GnZftFNahBPiXfQhYkiZC9R8wj4kbiKQPejcqfrUE4kv6w5WrG399Q62p1TXnGxc7RiTWrRjSFe2",
  "key13": "2cE5AK6xGx8T7weaVbiktriaG7SZHbQhPL5AwnM7J7euJ98WeSJbupp1nuhMrm329N32aV7KHBXZ4aJcDGDJTNqu",
  "key14": "3iwdAhvDJHQRiUEXDmeUEfoDGVr4aUACNso1HpdHkFbF2LWZBA4RjPZzZ1aoBBFE3HJtGuCkdnXeTsGfEVwx5pDy",
  "key15": "3r36qSYwLxLVnyG4LqRjDwkWUo9s4MsCziLG8HQ9ZGSMhyMrBr7Jqsezf6nkk2MgDNxt87AkLe8h6FU88rGkfifJ",
  "key16": "5CCtpVy6XA4r2EsRz2g1Ks3M1GxpRac31KwGvf7xSWw9JBcQ1bNiwyuJHtsYnEvYUPLPEmjm7qW4jyq7KLdrhgYz",
  "key17": "3MKpo96KKVU2eYepK2qZFcCQ9pgwv4EC677uG5fWjUrFNCu3kyGfxwYupgEq3HneJ2hAMcWuWmwswR18wi4seuMC",
  "key18": "4EaGvbewq8bnQjLkCND74Gm6CH82n2GLjKq77Q3MFjDrJ9io2228BpaPJKTbVSezpn8DRwpSiM64B3H5tovmN8Gh",
  "key19": "17RDFKdo62BxokJpXWoRAsVtVQ6CSPW6VG6P1hjd2JicHVAEeGQqFpKW6MYm1as5ftoQc3BPGyyYADXgadcbd5a",
  "key20": "Ye459vzCZ6hFCXrUyHvKYvNX1g1BmThEndsYTBPH5gS5w3wRkN4Eg89aVXaTnFv56CMShCmQhcUJ8QpUw5KR48B",
  "key21": "REHdBEDVG4dQPFHKfDQSNexswqP9bCysbhcJHMfodnQ7CM2VvVtg8trDdVqmPZ5y38aiYPPVb9noxF8h1etLhhE",
  "key22": "hEx1x8W4tg2PRCAdPQcBtnJn4cUweLeRSgGkCFPJkyDosxu6ntduJjh5jW3Xm7F1dfcHJVQQ1QXQnw9dwVV82ER",
  "key23": "ZeSzdziZiWMAyquGcBCsJVLHdbpWxoRYnB6XKPNVte5J9m3EzodX8HqZMUWKcJZn2qZHF2XLRAdADsuhNB8W31w",
  "key24": "4SGWPTwzBCPrfPrcJ5GbmrYeQoU65ey9QEZYW57TgoGWWCnMNTZsjvSXQfqsLQA3nd5XD8432UX673SjoNzmUrKA",
  "key25": "58EfjhokPBDcgGoq3VBRVXo4TavpabXUFHu37XXqMdx2x9kYYaJemL93FVhD14bYWby7xuFoKPNcnoZXGCf2kKfG"
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
