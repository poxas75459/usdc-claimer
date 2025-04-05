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
    "841pwxrfhqbKjr4fTkgm5swBwQPdWMiRjXpZFmKSggWEG5RQyUsWtmNCGfXGTy7LdUFDyFipMvQndbWcYWFaA4Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5anVeuPfR6Esd5Hmkp535nzpefhzzd99u9RdTcuXKmngBBBD3MFiVNgcC8pk3NaxbX9xYDbyTeYj227zLDdX7hab",
  "key1": "B6qhUJRA1ibMwubXL6QpsegTjAwEW4j5CizuxBUVrNEVNKC9tJ6pPnMv1D7s5ZsRQZLezijygq3Atcj5nszMgXN",
  "key2": "47YdyRgYbEnMyZcmXCs1qe58kgvZKCG4Htat1dpesFBkrJRUQfRwuRBn9o1G8dsBB3unk9KhY21EXujSApUX2j88",
  "key3": "5mAUqKGJWwr9MwZYkui11aK6sM5Z5iKE46UPiahSN4wZEfKA1BDrQLyjzCnShDvYVkSFbqqwT6SMbKuF4qSq1mpy",
  "key4": "2WnetZZ1VcYvSM8XewJ8rrHNtykZuimwTKm5YmaRntHR534rKPw9Z34vzNy5MyZokDtQUue7z6s23AqY2fxTUTBY",
  "key5": "msEAw3QUoAxpsQ33CHg6vLshfP4E1YvfZG9uwTwX2zrK3xrA48rzCPTe7oJEZHVFeyRVvz3f9sZWFiqdd75WHYr",
  "key6": "2b6eZZXXkhnuypwnMieqNRGHx7ZY7Lp1aN2pHMdACNz8muRTp12UrWtDNhF84NuYYMBL6KxFx8mGc2cYE3CAH6FG",
  "key7": "2BauvUNUi6my51bBmebiMTpgQQz4eGYkEUUBM7dS8fjRwffW7MqQYCCPqRwkpKyfWTt9kguX7Rid5fsiw3xxojn3",
  "key8": "2ygqZj12pMqMdvQjBcEu2hSVmf7ht9PTi3uSUVaoBLsoAzsd4qkqvGtpRDmY8YrZWjVAu999xfZzoxwqyzGaAcya",
  "key9": "4f1SNw1QfDyWhvvF6yJTcY2nKTBk6UyXm5zxP1wUF7rwhRUHfdAzTc3Fu42XkM7HWY96udTDN1kW9FPNTy67yoxz",
  "key10": "2LqoXdSJwBFx2pM3Kk5m2vJcXfw4JNoMv9DnZ1vGK3mPds9bqfJXdtnTspDtkJFQJzLzhxFdmMya7Bm7Gspjhvx7",
  "key11": "2CBE9mhh9wTCfrAH92UzZkLLZPX4iA21kXZbfhiDj5EkztnWNzmBaPCmL8YaCU249ZcWHXB4h4YEVHx3cx1SZufW",
  "key12": "3W8uKmaJLEnSgK9NaeYPTgK6w6GZkgxY28XcejipoWMy3ByDVaoQXk2HCrxAc92xvYYXqqwA6aLurHxriLf8TDVo",
  "key13": "3JKnkk9xQqEyFFHBChoVZbC3oaeet6B413SamvggHTo1RKG23SSHHhB8w7mTwaa2pzbZw3EAhjZGVcMkxma2ydKN",
  "key14": "5i5LDQRna1BZgDuf4UeekepmNfpxayvHP3booFipKUDdL3VNavtzVHtz91XGAeeCS3sM9sRvczHWgncnUwjTFi78",
  "key15": "5bLAhjib2VdaoFap52i3VQhYQWQpmSehoZsJ7Pvyafojigj6Vcd6TsxPgqTFRT6E2HyEC4gET5gnGLhLnModWqPz",
  "key16": "4M2rrw9YDfjRiduwBC5zEm9FwL7eTGjgUtNt2DfZdY4RLW18Yukbu77p23VNfQ53HyAwh4iyXmL811e2VfBHme4R",
  "key17": "3B9gnRxV5wa2hexTey9zvJKsQFCmrfqjNZDv7UV3xpZdvkiRdtwu3toV3uoCNrwZom13hN88xXCB2EnYSe8gSHqv",
  "key18": "25aUfTDEecfKfbj22xJGr2GMsBVjvcZ49zg9ExVFS1R5wH8buPACm5UtvrPiSQQnzrdgX4T1XJFKMmV1GauXLduq",
  "key19": "5RUmFuPyqTRs4Hh5sBjHDEwgF9MGonNVupdy7iurpkb5B2MVpaUJXkhadebp8QaFGTCc7A5pS4EKaBbNv5dLvEnN",
  "key20": "5YR6F26zuA3K7f7dYtspjmAt3FByz4Qa39gZDf6yeYCy88ow1KiWtFVgjhoMmYr9rj2XsHrVWXCTxKMNo4zJHw7r",
  "key21": "472kCqNRu1m6gRtADSxsMziLEqDMP3iTnyaqj1JEmjBUC51VtzHAYZ3iaMuW91V2c7pgfcvQktoJX2N4nWXWXTAq",
  "key22": "38YQyY4fPkHJDqcVDmk2cp5L23SXp7Nzipm2fng3AYELsy4CdmjeQ82aSnUGr373ZxZoojkEgVzLGyErDdQcUcc4",
  "key23": "M1fdYFTbHzxEnKP6oRqQZWVSsG32Nv7SrNr5g4FMQkUyiQRzo9c3Fk2dQp9PgiE5BuzmRA2dVJrCudom4WkPqQr",
  "key24": "nd6FBscDJLgtfesDjnVZWayPnY4LMFbPMJZvcvLQyvGdfUEiR9k4C65wm2pAyFF2V1Yv7n2xmvfNia5vqRPu2qm",
  "key25": "2UQrszP5vh77NMumQyNsqtiJzpvSjG6J2Ao967WBsyBPQQZYmfMn5HzPgMWibeUirAExNk5gb2CaXotP5dHjt5sh",
  "key26": "3jA2U3J6JNjpnn74MzmWVP49mv9cY6G6TffqwR5otn2wLtCa8fkoqfw7SyFN3f1pJJca5DuY68HpcJxnsH22iCoQ",
  "key27": "4Vxk7ov3CCCgRiptVy1V9W8G2tuPLda9GQBaPbGjqmbL5zsjasyt3SvdTJRGotoiJQtdqq7hcLF1rP1sJan95SXo",
  "key28": "4yu7nPs4V8yHMEPjK3w97M9CMLVWW3YYHXCndvfTJw9fSNV5f7SsRXF6aS1VCLkfraW56aS24RJEDYefskJyA2qc",
  "key29": "3rVCnzGuzEFQvXxfeZyF6JRJqu24L8p7iZYX6DbPb5akGYzBNLt5J3MzVQWgCvsdLSh84x5WxgaecamfQrXVDZn5",
  "key30": "3D3tsNr2R4csVeSZfS85HPQLxNErvwM2dHLDCrB4bushvkMPoQLwSQxteCkr7e65RBoa1ktA4PF4v7DAsWzhcxQL",
  "key31": "34Xn7nVgyd4DqBLUriuDzCuZdrrSXMj3Bjb6EWjx8XryK58wrd9QVSb6gN57ovDAWwiRKdvdd5kybAzRz5zowQ11"
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
