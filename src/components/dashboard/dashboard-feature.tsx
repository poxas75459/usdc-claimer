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
    "5WrxLMScqCzLjyetk29U3PVfRgr5qcevtdJKXSaEWTcRNVsSWgjZjXaiT7hPYaokVKXbrHzCEp2ebg7cvyiAmJar"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vzqJUB24X7aBjKyY6qLVy66qL6FnatgpYaH9E5mJgKc4GJtmo2E1NQh4z7AFD3ZTjbwVb1wyCadt9nPx5t4sakX",
  "key1": "4ULvjc3HUeH1tMCzR79roQpFjJ8YmeH8d7uaRRvsVZphYZS9acHGUajCzHYiNsk6tvVTvvxZCMErZbdfrLBeMJc8",
  "key2": "Uji9jq63uL9dWRiajbSdJhjPaYyKxaMZf8oA6AkciJkdz5X7Vvfp6LmuXEuJxcUSvTviTWExiW4XQVVzQMEyC1e",
  "key3": "22NAfjPiVDED44xBieBoAKeqZQwJKHrRKoB6EwatJsmxMezgoLsCu4UujaG1Qs3ZVWFdjNt6DN4wka8JshU5r4Qg",
  "key4": "57dECd4cfbtZAP283sucyFnBvcPiZUqjTQoQEWQeAAJJzaT7g3r86cMyAMnYuGP6FzNofNrMfWzKPLdhFwU6puVn",
  "key5": "3mzTq8idU37nGGirK3QQ8RXwGu8ZBGe4rEwJbbo2PxT91nd1NRqxMmsu93QVkwa4JNqp1GoNNticEjf7X27DDAjK",
  "key6": "2WmfWnH4dQhw62oVrMfWzW6iDxTgqCL34RWa2m2BprVUqaRbtJGe4hdabY395CWBJovPFNdmhKZ7rmJ2YvUD82Co",
  "key7": "UjUNiZhUeXt2FAFMxc1LfNuXzwsuwZLzQrMQ5PDgk2E28K2zjLfcgMFVzh5FZti5kt3MNMZ4z7Fg9ZZNDkhVjfg",
  "key8": "5g9Z8Dx2io2Q4NM9ua74FNmA661MY4qrrRYqJehHsmicjdfYoB7BZa1yCF5vL2nUzftZPivHdg2semS8dPrhc7zR",
  "key9": "5s9HAL9g19oBBrxPBPcsSKKsw85HjkTwKP1dZ8nFHvowbWUUstHMP7yeaFpyJxBNyjqQFU2FYe7UMj8wDZ41yU7D",
  "key10": "34b8w4or8SN9FNPuUTMy16CDJv9wLtDMvUCCBbioBWGWJ8Hi412VYX4aaxuQRRZWizi2E98mXWZFg6eZm2giqCr3",
  "key11": "2gWZkZzMhaTpUYGREichi559cLZ6DWSDJvwcLwuefj8FKGduevJXTTY4ueVd8rsB1x7B4wo6Q6LLSuer2SPNeErH",
  "key12": "35NANMDzPXdjLySxTq4EEK3i68mo1n4Ee3NWRu97mR4GupqLDx2BZdcSGoneEK5fX9hjKvKXcjrA7VT6Fe4dEG88",
  "key13": "4fBE1YauHW9BzePx3eNxjanZcmGu9f3T9HGnDENmLdpRt9iSfi8JjjgDNu6NpJc5bYZ4nJXsPxJr6W5kp5SigJ5x",
  "key14": "5fwXyjuFoJARGRX3tRneXq6Cq23kQvgBVyxV78A4jAuZpzfLUREfEP75o6gdXWBM1iPS2nSF6qiJPnwXjwNxZjqt",
  "key15": "aV2NPgYehyHSdKp1UKohGqX79Dc5LvricjDQ4yWJFKCcB4HFdsstgkkKZ9Vkx1Yg7o2jUcptZejEbWdhBwQ3AfX",
  "key16": "2ogWt4uG5nhroH6nwn3EcGd3ZYmJeWWrN9k6LKviKYJ7wrhwNh2Z8aVBopSBQJ8rRxi5XMtTko3boPT11Ta2GaL",
  "key17": "5ZqchkKrvGXVzVaSQPsziKRnhXJ6geqAsxpA9qdEuYuKgY6WbFGx273PKxRqyYp8MU7bMTLfunT93HUPvj1oxm7r",
  "key18": "4ffVn1qaqyd7KjWCDSeDZxSwdU5AScM2uWjQkmpUYjLGcuatUPHvFR2WUvkwJoQMphUxJ5bcDsfuUDfdXfEoZqKZ",
  "key19": "9Ew7qUgTq6XYivdsXP1oi1EXsMnHEurzLs1UZwDJRTPAhKGwgrZXrQPZfc7AyUUsQLABpf64vTrp28h16ePcfV2",
  "key20": "5TrnRFiSqraihPhas7su1SeqVxaP33E8PGohP4JWhGQ4qTpJ8QjKaMEHzrqBGYawJsboetC1ati4gg6j67HRV9Yy",
  "key21": "HqTjb7v15x1aDagexn8zyPpfbcj92WGTyJC9ox9cbWzUnaTSeSx7MEs8yX9s3uYQuMqUgZfuKaXfAybzSdaEz93",
  "key22": "2j62kPKi4Ptq3cwbmBon4CrEAf5tiZJxLt2T4Qfd9CabVzVtTCVjwmmZ7JBiZYWzfx4G8DUU3r6CTN1sPZjJ9vCs",
  "key23": "3DmjPtJ8KDRqMmbWfbeZ2N4k3nPEtLtzWuA1F1DLqkZPw9ufYyy24MeDcDXTPKU5Mzpxo6WSithzZGY6M9hJoy3s",
  "key24": "5qG9QuMWsmv6A4SjciSNDZqig2PtrE3cRhR2WFoj28fgWHwQThRyTExwNCDYnNzPNVjiuGGtg8z5Q6du2UfHZBDb",
  "key25": "3mCqLHXdsPLnzDWSHJm3AiQeX8X979dPq7Uk9N3Ek7vcCt4j8jngpmqmbRoR88AXLPyHGUQf9wyTZm3kXJkNdXYv",
  "key26": "5hJB4VfLvTub3Ls9jDzWMR3GRFoRnS2Sndpp2bnJ9dCDW2qvHQXMtHEZEMr3tXyryVA4n9cCdoHSc3R6KYRPtisk",
  "key27": "2Aswe6q3pqywAE8SU8EpBRfkmTn1yGTCW18fywFfNT3dNuv3UDoVqh81iJkWpUSRfaXECCFFqzHaW2zQ5Y4kWY5p",
  "key28": "2kkc2b7ZFPJHej2XdLhMMqE5u17HNB5Z8qroC93Lwfz9Ldv6LKB23ZiHJaBTp69Z3ukcQWfRtMVvJhjsPG2TEFeX",
  "key29": "4pESNTEj6VX3kQJg8o7eYTUeKGkgf2SZXSxHXgdmSLDgsJD84tk8Htgw53g3harFGdZJtASaMUM796WU7XN4Ucho",
  "key30": "316deXrqQZYnUA9MpzRRouGDh88Dhj6LujFHCYNKEqARXXrET5XNg2pe5EQPgguUDA6d9APhDiFvQKsHq2z3vR8x",
  "key31": "hgFXRr4VyB97HBpCkRN5xhjCzgdzENvA4a3XsbiZv4bm2jPts8AbZGZXaRSjocr5PNTosDHkhEYyMT5PerNnbQ4",
  "key32": "3s164yZMBP5rjyM3bsakshzw2ZPQxNK5dNMfMSDD5pLq886h9mUCH6YMG1CCeom8uV1JFZSjzMGyWwLy5kjQ8P2N",
  "key33": "2roq1zbyRDwmjCzMVizDYFevK7WAcF5yKRBbtXg88v5whojJczg8P8m1p9gwCCicbP32yqnBDpfbhPdFuosTCXCK",
  "key34": "2zdYb883HQx3BJbgL23gC7wAfW216To1J7GErjSAfUP76SGWi7VX15bDHRKLFXJJSnDPPtDz1gFYgnrmziiGEchp",
  "key35": "NbT8o4qtaxscNRRcWPj1TwYgHe2FCREoR9bYNLHHUYx1VgX5eKYcduVsxvNf1iq7uP5MnRpX5mCLgj1tePMryep",
  "key36": "ecV1asfKmRChKx7MMpVJSxSGt4deBQcb4fHQXU491RUQ3J3s1F7xvLRyRk4MsxDoo4EHhLVRezAQcVPp1BL9U17",
  "key37": "4Uxj1D5ppKs6PprkrwHsvmFx53N9dpEQEUmR97qqDZwZUpEibRkjRLcq7acDFUdYpZpU9kTV2f69s96GksczTMi2",
  "key38": "Nrd52RgrguhgyMbq6bmznf6r6n9seRp1MkgLZtN6CmrjJqpnSW9bwi8ca5MZrbfifFhjnsogLzy65MVhCDfum8c",
  "key39": "5VrHsz6sqzpVRdijqrZYiUwpx8QmCaT7nmcjZBGh25hwQ4kZ2xLJ6EwpYfNXFjXpwuKXVeqiaECZJhTmHYjLnFof",
  "key40": "3nzQipw8dMuCffVqXbYvPpEjaSgLVoTvSkMFgGDfBeDTks3rueG7kGFoPwgwq9UnEh5VXXi9XnpEdaWv7b3DMQVL",
  "key41": "2MrqZoU8fC9tvYg3UndWYHqX2XR6D9Fd1XKXxUKKUEU7nVEuaiCDcq87haHjSXEq7pdwwRnhKYs8FqYXmB8Xrpyx",
  "key42": "29hnWtzdArqpwxVGso3NehkKzFenAu6zevN14xmNzViuPBvsJ19VqNhcj7Pqbs8UM3K4KbB29v2kyGQy7qepPu7Q",
  "key43": "34xdHDDWdp4SQ8GSN4Ja5VMVVM7QH37cY6K6tjnS9853eHRrN2WCzvwhsRbbedejjKqLCnw4i5kLCcWc47bhSgES",
  "key44": "3Q2yZLp93PktaAyR2o4SXVAuT9gknBRuqTwzYkK2c7C2W9NNMNnFaqDXG8nhz4ueeqs9EuWyaXwbVXGair3DAytB",
  "key45": "5kSfzWPsHzh8PZ3fAFAiPxyuctsGsEkAVmREYANS7gabzwFu5xPUhaYGnXniyEJW3arZVR95g9tUqRkUiS4ddhiJ",
  "key46": "2mCYU9h62HKfS7G7pPcp4EbAMycAuepokAnDPPRajx98RJ7u7AikXxpKF6bP9CTh5QoCaF7PyNHLhZcW4thQ558Z",
  "key47": "2iuAu6ZjSanyT8rAD8vVEed8tPZnPXcLaK124SG315ERaMpm5EPYjv4k7ASxAarsmYCXBfUhGmjz2Rxp4PBSh1NG",
  "key48": "42AXdQKuG34cQxbiVRqiFEeLgVmafoVQKdE3PsZhYxk2EcV1xkW1tUuWCHF64M7Uz7LWZ1sCjY6Y26AGnxjJJPea",
  "key49": "P6T2pwQY98gatUX1agSGg9YAx2VKmAApFkiEaG5rBhVjxJEVLhcdaxyJmDVvnAKtxxJ3p8UKAk7BEcD5UcSA5if"
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
