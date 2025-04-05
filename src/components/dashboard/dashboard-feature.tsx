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
    "4TirfhZzozmYc1kymSW4ATkUKRJ3dmQLmEZZeW5ipVpW5taW8dp3GjHAxC6SNuCT2BKrtURPPZZtiMiKqAGAAkFL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zEEZVsetKjmeUudWCAddPkqJPrNiCiziETdvraDbwbDZud5W6Woc2n8JTZ9bDcviz68jnciepRfCLMpBg7BTFDV",
  "key1": "4j2Majsyi48udZKwNFA1YU8iWSgmsZnyK41LR8GZ4zZif8RA8ETt4zcUd1YBbBXMEJrck3twdHa39Q5aGf7sko3d",
  "key2": "2SgXu4Gnf3McmuTgdhBVsJojEummm2fAa8p7NogpXjm8HWfLPGtPRJvwNk8MwV3hp6C8BB9NPYDKayz1SiBP8Zqq",
  "key3": "3SnMwyCfhRyPcXDJ38gwaYyDykHTrzxmdBPp2QYoJyKCXdHDVuqTh9ejaNmXLKWXxJpvejbtYujfV4Et9XS8uXFQ",
  "key4": "Ag9LTa6ch9WbNwnnAGweWCXPYdqx4EvYDFiHCDqPUuKCjLRRM9REEGNayY1bwnfLJqADrMaQpU7XFPaPKjpkjoY",
  "key5": "2gwr7WN7MByZHAExRudXfBXp1dRzQejTCx1ryUdnV5wpbgwrKywPiGckMi4bM1iaWuMtjFvoVn9sjJ2RXz5W3rFx",
  "key6": "3ysdUXjPut3dEeM2ZAxjzQ3AWxfftfhYpZQ4L4nbwVzgBv2gRRMXL1bH3bA4kb5u6agYNPb5CiHwUwSjH4QkNbPY",
  "key7": "3nFVrqPiNeZQnJHvkvWeqMm7R3q2N7w1FvQb8SzbWzaPLSd7A4wqUkfEjicj7iRJ331g4vLZMFunpirbpoP1WpMB",
  "key8": "3g2wTsNmFVNK9hiT97HHg9qmbWPbsHhqrvqAfBbhDBGeeyKuBCp4CWUK7DAmxvL5xftX3itB5AqmsVaymWeX9TuY",
  "key9": "RT3g3DsBbezB463yaR9x2y3w42hU82XizHzMBEejojgKuRT99ZsPwHzBy4kBQ58SJUoJG6yVXkuWBGwzPd8jQHC",
  "key10": "3vsNLKuthisd1rnf2ohp7irP7VGtgo7uAcdMSdvUeraEFKNYMAXuuT1gctcTZQ4sWE7RHLa7iM2FCwdJk5nX2eG9",
  "key11": "54v6FDjoPB14SKBSja9z9JkqdiGbrgj9phXgd4hB5h8ajVVBoe4nLPyH6YvDog3DPDCiK55TfW3g7tUE6y5AiA4h",
  "key12": "3wpSzKNNRHyWr5znwsNzrpRDdfS2BYEfuCJypzctKkd5d6CjHVKP7dCZYaAqogvKCdDuGRxUgjsDDCoA9XPFj2ZZ",
  "key13": "2UBBJKKgFECfMVcz1NuK3awrxfr71LX5vEj6YjG82yVn5J1pcymPfuDdxZndKZbXhKGiekhmEMTmqCN9dqPd2wyR",
  "key14": "5jyxCMxKs36kW171h6RFuFKrAbRhgMHPmoohamv2W4VY75TyAC2DEBarHkePVnB1xxszcmMAAMjyYG99pwVCES9M",
  "key15": "3s45irNn1Q4moswGxDs5o839EB1SRmjczUoZWUTSVmmepZpxgrtSebYnBz8ucw37DtXEykrd3JkMew3AagiVQsYG",
  "key16": "3WokshwXdT2QfCs7R7fg91BAs1Ta6fY8EjA6wPg6w5dHdRp1xzuDRE6iqmEkUV3wq82JquhnpET4QJwb4ZA6mGf3",
  "key17": "56ASEjZTA33Pbk5fmEuCYovE32Pgff2JvPv9KrnHx8R7X2tHNc22svHAeXXKY55AU7kVi8k3YfLjUe6xUdbNW6xP",
  "key18": "4BQXU9Y3j47qbs6BP41jvg9xd3TkF7zYPqhHm6KQwgcfHf5bC1Uo8gkHxzcfEFQ7SeazQ5L3ks1Pa1LXH9S9izSM",
  "key19": "5X5qoc8AKGDFGuR1McqzsTZAddESdQvNFjgNRhnR8ysvfBf8EyC1529mvXBBrf8b8o5vr194iq32SRxeGwrQCjgJ",
  "key20": "w2HsRNBpQTKw5CKtixZG8aCqXCTrmW3AnuM3odHDMmyk3i8QzAwFrbe61MPhP26gaz1AqbKmvuD23XNNpHcK95i",
  "key21": "ZokmCmagFSxyMUHa3NY2ByGPtm5YXtMMwzSrqiof3t9zAL7mF3EiJguouxfRmEf7hAL2p8rxzUrzGYC4ashskFb",
  "key22": "uNNSUf5VbMwGx6snAPNThYUtzhpeBPPdh6LkZTrD84ZqYemi8TPxhVoiY2h5sQg31raGtonaFT54T5b9q69k2ED",
  "key23": "39g4jhbBS7csbFrBenwZuXC94sEDHUYjmYCoA27CQ3yuV7aLkLM8wUFz21pkBsB7FyhSiVA17Z6TfcszEZDuQ9ea",
  "key24": "43BuubUEgWffnbE6UPEdQYUNcauJvp4WKSXV4YfJkSFV93oohqbjxot7NomENo6muSkKqpWgq7QP7KKna55dy77q",
  "key25": "2YyxjiUDAxSaNqTJrZ9bGrZyLRKmR1fzS42nHQzCbvEPgrHezb3J1RLZw8TouWAnjWDNhFYHGrmLPqou8g8DP1PV",
  "key26": "2x9xA7WQCvoed11avQmS7kbhQQjhdsoENzSyQ8fjwKqGnEAhVAcb3pEoK8cvCsHoKhzdVwFHNQ4PdobkZdT74njq",
  "key27": "CrsmxQV9PL452X6o5Lp9UaAqjkRYh49BLayda6vCYc4HjkxV1FcPwCdYkfaoQChxJtSqQeCTqcZEC8D9jf6PaiT",
  "key28": "4NKGcpF64TX5wHeWNszxNxvagk3R86Mf7kckrL2xg7SLK9Hf9VMZU7fMMS6rb28TjfpPBwNkouaEVbew5mnmCNVU",
  "key29": "3yKhs1hNq7zkWxXtX6fKEVF2CKHtwYZyL7fqqaKpjz1kcqcvA3iGNDR5c2sJrsyjuhMJY1mMcTbSx7nFLMD4qMta",
  "key30": "4eunPaytb6kZCJhRrbCHXyN413j5uEv9reTodjgkGPbNziy6QTbZKbtpMsehHCSoqSKJXotadaTf6GKtPFqeeECh",
  "key31": "5q8aDDmpDYVKcJxHxUcnCioUK9kRNPMFx9dHE5u1TeNgX4iQFaeK9wJ7LmzVFCdQ1eUqEfj4m6EQk1X7UUEAQ6gd"
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
