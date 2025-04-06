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
    "4Duwyg4f8SXm6m2NdLCQUPnAaM7GqtY772N3w36qP6ZbwM9kzsBFHpZadLvvutNKgRhpqo7JPr8wx9MNkHCGupXo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52FFU8d1nWr6yyw79wXXoiTpCrQNFkYcz6kXtopA7a2Z4u9nNZJpnE5QmmKYujsHfddafNg7EHuCeT15gdmK6Egt",
  "key1": "fvLyqMPm8ajmghJ6FiXpLSHZmKj8Tyn5sRKyiVu1BbaTYH7hcfqWawdCKVhQdvNyhLDBJ9xcukVYkWJMxC46bAi",
  "key2": "2VxeeSa7te3VURgFB91e3cuJAiZBtdEJQf1iuHGqyrBmgJDxDHFbG3M2iPFSWVJCwGUvrE4S5q3bCnFxqaiDNUNt",
  "key3": "5zotuPMK9TeijHMSFbaGEarVYhGAHuD6N7VSAqAZVdQSTgCK6FirY4oTV2ThSptPUQoGsxvnTPaeqEcCw5jD6UKu",
  "key4": "dAomWgnJNbHo6DAXj7zLPNkBFH5N85Vafqpib5vizvuKsHHzSQ3Nr1iw6d1XpMqhgepdVMYW6cHQX7nGqtBXnFR",
  "key5": "41xdhciF2JT7QwNhu2M23psoaquAsLxom5SXwqKis4QkbqnXsE1mtprczLrmuHmEzzZoHKVrN2wEDqSn2oRodh4s",
  "key6": "2mRHbWYeDecuoHB15vyty9aofp9eWtAZ7PQvcwtzpTEFHN1xdZhvQYMwysjydSdXyJF6UGJMmJd3xfE1A6EwpiBB",
  "key7": "5G3sjMEaQWCtmfegKy637ktV1B73LHZBfEzwGXVfPgaqkFp2jfZfBzsjYmL9rCZzDUQ7fkWoKfMtVSboVz3XmGy4",
  "key8": "5dJ3KnfEepsXeLftKGK5SL36AVM8fgzgrtf2QBACjQVdgFEu1c9HPX3b9TAPUgdi5szHM56oan4MArgvdRATSZvV",
  "key9": "5xStSSwbdS2tSaAiWF7rsoworAfXGzQ1e4sXXZfTCSNEFgGdrSwGWF6QHKoNimWbbsoJrsgW8mFqNkdQZKQZ66oX",
  "key10": "3XJGBkPQBvGr9YBJTPD7EoTYdb2dj39hPWuLwyynH1NnanKZiyXJxeb28cWgqZQ5safesyVCfoZdyLw6Mj6JFHXW",
  "key11": "2pyMFjPp7TGYr3pr6eMp7zKCP19Hvm3wgRLGysWpYGteKPJHArZby9jPgiwfwwjg7sBYRUDXJW8CBiCi7tGNDyVr",
  "key12": "4rkdgJdrZDiVsmRb23BqpGwf3QoetjxJ5mXJfg4tZWd9mwhaHrWx9rWacDzC2dxHFntooJRHKRpGdfjh5qn2ygwm",
  "key13": "5WNPfVK2FcwJNiaUNjZk5w6rM4Wn84dgUjQWUdrdmXoiNJYHbqEqDDyp5nvoKGzQ7y7Y63ECRiRW1MRJ2jDY9i8P",
  "key14": "3AE57NC7enPLtrc3qhn6gxmF42RNx2aMikxbVTe7dz5NPP3W9t7gXtq9NBfY1BFTnxzam1fWnRPBQW65i4hSXiT1",
  "key15": "3nnyjpPJmQMmFDpqDxxBSHtLGGJYesSP9yAFipBzJ51HTTdn5u6YiCHGcrT3yy9YUNmhkDNPigfdav1cnp2PK1zm",
  "key16": "46wT5fra8fs7kLCqs19aqbqvS7BDYNctjsrtpGCSgTqexnz63ndQzimvaCSkyLkuWEEQDEqTrAu14TfC4b4ko1BV",
  "key17": "52Fw4XPDuDVanZWC1WktrCB3fFMb6iy4DMDT8MgcTADTzbFL9gRw2rj4D95nq3jyxmNBq5E9gJPAY53gm9bv8XDJ",
  "key18": "2qczecwqs7UK8pFJpwHfVTRioiykLzngD8gqvPrF2hek5pVCfvYzN2qsz8YroKfCzfKqBLmPKK3CJz5fZGkEFdHz",
  "key19": "X8o9MSfKtpbwZLzquxtpCLXKZGPUENuZ8p2KUxLFehfFAfbchZQWvvciPUvKMw4GB9f4mKuCUWmodyhpk1cptM1",
  "key20": "sSHSQWmzjVek5QFVkNU9jZkxhNZKm4B9kaJ51x2fKCtYYbjCToyvzSB1ZYzJ2fpmd4Nr7sHGCRXBZqAQEnp5kqo",
  "key21": "5VDpWXgYw615SNikVdffRXqiPMG6CJjqp3u9KUap94EfxWJmu1htF3ipeS9weHRT2oUpfvVHSERGVrxBj7W3dKrk",
  "key22": "PmjAi6qDihYPeAGfjG7HdZZ4JkbfQp6V7mzgyx7out7o7BxormRz9TrHxdboEYSmsPKrrnHMQv4fe1Pw43HoDdk",
  "key23": "5y75DvLGRRGPrLMS8RD6AbkLLdg8v1ywAGesyRMXruEpW2bsKnahKFCbL38KAbgpUA6tRmLEn9MfDXmSfeEZtiX7",
  "key24": "vwSuMN9uxQLMbBiiK9hMSVerKGodZF8PnFLFYqWQbwyCX3m71Tt3hGEy4FwoSyJ9fBD7Vi3vZho1d8uWtovoeuY",
  "key25": "2m9XEzbMqEv5jRiDKfKBX8iPVs74FTaJBziWZzpA8noJP7w4R9yhvzzhpX2trNk5PcKbnSenoM4AZuiCdrHsYDnD",
  "key26": "2gFoXAZqzaREZYyno7BUTEMst5kiUUQH97CHvmHC612U85EQVJrjViSjb7NJDR4B2cNyQUVbZ9NaUyFt5t6ggivG",
  "key27": "arfQbeWS17oX9KZCgEujczGWNAnScAaLEoTcuCfQgzf1KQycnMnieDN2iHb45NFbu1NvG1QWheqpXKm6MYgWD9J",
  "key28": "3yERGZrNdGZYV4cny1W7G8488g2ZALjDuf8b8PSZLQV7KowHUcTV7xZN7of9pHR3LvUnyQobd1w9ch6e689u2Bn",
  "key29": "3x5vjg3MpKGzRp2ouhaVjGG3PsfPoG273cV6UbeXYzGPgViWftRoSc6FoW3KmkbRdmnWDSegAGeY3V2YBLfDNA5x",
  "key30": "4jzg8SQ5V6hsFjw31TRsvnbuU9p9Fbc6kjfPqbfKiFgGgJDYXG2NySoseV7gos8Y13z9FWBhsf3nZbVCSSWEJgsu",
  "key31": "xN6aPQTKyGBLGpxNfD4X3KCzcqpYnavbMyVdEQB3dQ2vs8cja3UMfhKr8ZJEB8arHupHBAtT5ngNoQFT3XFPJvd",
  "key32": "2QwFcTmcAfuM3bNdxa5M1w67QvtnY1dPD79Tsog8Kx2gXMzjuxHZ7aB3jePyrvKKN3wQpvbUE6MLXFbnJPPo6PY",
  "key33": "3fX9fSmaTmkT8d1SyYDXugefkMuPj4RrFC1LtF4meQsynshMjvSsBwuSqXQy4cgmFxZ42tM1bu8QafU6Q3rHXYn2",
  "key34": "2S7MjS9w5in5qQi8tyn1rZHZGU5ubQBL4GHqyeCWP63xxViHzPFht6ddVkGnxL923DVcUM6ankmnwRKnKorGrecc",
  "key35": "5Rvbd9gE9RCfaHLEoCZKWyZjVAHaxWj4cucxfrc35e1eWeBGr4FydDmg2j7Hui6tY3GF6tbMz2Atw9VsYq7yikwt",
  "key36": "5pob9QzXfYcvaSLjwwfprr6Zbnv2aWgtRckyPXcx2ajMTtfFqEhnxz2pwaPWXgw8pYamZd8n2Z5SP2a4WWin1Hh",
  "key37": "5s54PctEZqmG8ENVbAyzVuRDsVGACqoLKLo2KUcy9uG7Q4Man3QxXg6waPETbXorgpHQi8Y832d5Hq6hRzCQQP45"
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
