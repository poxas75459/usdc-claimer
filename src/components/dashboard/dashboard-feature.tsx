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
    "35MyfncQdGVWwyhg1TmYeWgUQY2Uxm3w2GP2FB58Dzt9LjoZzHAAExYRkZnC1RapuuwNxBgrJnki1oDJ33j92VNY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ks8bGCJND6yRGneWd1XAJd8qMLs7PDeLRtiUqayvqsCfjwy4pxpypNTHutMbzJccTnY1JEKRuW9VGryvHxbfHSb",
  "key1": "ENUkzL39sScDZajSbY44Vi6zTHyPuKdkAN2cHs22zKxED6gEfzu4Wg6gsgivaSv9kFj3KsoEtv7UFvR9PhwzbTS",
  "key2": "4AQuvfkg78F3Bmjs8pHmrAypdLWtw2rkSWoif5XrRAGjxRvALq4WwVy5rkK3u6snJDdJQWG24fHk2fjDwptNUGXX",
  "key3": "2B7ge89W11sKCjrs99bCWDhy7xs7UbphgGNNSqLyogEDBCvBtoGAp3eJiRD57f2HxfQJPjxjtxJyzwJaXG5EHwzj",
  "key4": "54bN1ZTmumZ7zmEiFxFDHmMBTFvPcP1UCRq1hUkse3StDwky7UuJYAbdWctFYYZPC9nTpi2QVYHZTs2H1T2MzqRd",
  "key5": "kTD5xvs5j7SN4HyYS24Kz9NVsskwhNh3LzYikJ7Dq1XsKKsCQ3L8QR5gf3JCV2Njg4Nvyt6FJw8J5TjFFfzqXaN",
  "key6": "FcH6qXE3xoa8KtjcvNWJBFP46CtiFt7PwM9Fas47RzEPsYWYUbwXkKkZTEnT3u8Yp9FW17BrLrjUx1dq5y8JC8R",
  "key7": "3pdjBTCnzRvXLse8GddvzcqqfQ1dCNr3DeHjq6NJ5uhrQxBbZTWmoVkroMNangFCkBon3fr9Syk5mhawocmTru9i",
  "key8": "3dZAbccd6aaNswWfBAf1gkFF2MUkQ3nZHerwp9FnMTVq9MqJgZGFeb1ZB3dYemJ8pAzvZqVFtEdDuSQC5mDaDwHh",
  "key9": "hsHR7RNQB7eVpsHCSNwAEKc56WasqhBH8DrBScY8NsF1NYJWQ7Q5fzc8tVsW2AEhcQyXHvjCczobef5Si7GcVUE",
  "key10": "3Rrp38VfyyfV6QNn4x6T6C1h1DBX6KfXbDaei3kujznALZv9Wk9EbodYreafkJuFzzcjZ6VFvqscafTzW7AmXh7x",
  "key11": "3dMbLP9WjMyamaewDPp5UXsV6UfSmgncrRpasrvMB3xNv7HkJfVK184RgcPuNoNyBQLCAH1rZUfdZRTSJr4k1yk5",
  "key12": "5RpwvdkEMEqNpDz6B1r3QiK18B3nC8r9vSSip5BrS3VqeGuEBfkLAth1xZZCU19o4zdbBzWHbwuw3mZJMeUdEQU7",
  "key13": "3wFE1w7WsGCZaaPuxtrdrrEKRqqmYjpYGzvzpBjJKT2PYXHqsjdbHk3j78i9eXJer9XWx51zdrMupB9nd677WX3B",
  "key14": "P8btXLkVFuHrCC9wwmWLGFoDwDoeS5w8NCKpzTzhcSCJgz5Md8eKzCSPyiaMMagNFXdK7jLKbo81AeTMLBexEpr",
  "key15": "NBYaiZrVHciDdyEXuMfUbPWRSJPaPSavjsG1hqwmLajTqrvHtaddMwJkLY1W8T4UmwPuNbTRkghVnTpTeKxSDP1",
  "key16": "8Tvr5STh7F4gYq7orLPQKq1VYYSM8ndZyf2oECbwtbh6KfU4WAaG6MKZj6x2Kp79UjfLzVo9VDs2tTAuM6HHXok",
  "key17": "33tqKBLTMpKY4vPEkw5GjBY4RZurAyaKy6NJkuq3PmDPTL5tDaTYq8qVhgeQvd5UNJFfLV7Y28xzu2KnsxJf2Wb",
  "key18": "3FY4wCksfUHtetGJtmmAVwdV3HJYhroxKNzRt2Nfatwkwqyixauircq8Bt476qaaMb6i4xmH8pdn6wXoSE7mP4kz",
  "key19": "5LqaHAdW6scbYjc9vhGdxDmM2DTCUcNM2M41u4c3pgzoRVYn4Ug2iiR3NioUtsmPa8jHNvBBMAvxpkCbdvdWzjeh",
  "key20": "25ody1Wf7EpkZqFrd8LVWFiuLwesDC8FPx3jopKKA1irWSYP9C82QNieUHrbxhfyFbWeTyr4NqHUs5NdWng2hw8M",
  "key21": "2dk7UgNbY7kKspeAPq3Lu8V9XfPMSM5L5QY383GJFQ1wJmW9xFBJEzuF5PSWkHKuib3a6Jv4H5joAAkj3FmM2UVq",
  "key22": "KA6K8tFbJw9aRjtPo2vuGRGYD1Ufqoy9KJiNZjNURnpJVT3pWfe56sK8Q8RvKoDV8wSqW174A4nPgzyRHdLBU3v",
  "key23": "P73CynDXC8QBSWQ5fejqYvnJ83QXD78fwhMDHEuKs6vaua9UVGxgj1L8ZyfUHiWC3dyLQw1xLVEeyRaGw5VXQHy",
  "key24": "4u71US4dg9uToqfjaedtVCV6fXfcrQxj9cKNt7uivJBhZZr3a9uaYg9JuPXMbrSNGuw7cRkiey9TF1fQHXCCa7SC",
  "key25": "2kux4r1xMCimyi9GXR3mKLjtp23HTKontjUuQp3R3oyA6YH6SaZREDmi7183Wrtci64AuMAFqxNWBMYPRyiNU2Sa",
  "key26": "7ucsqrmqdVACGk3g3xYgXnDSqVC71fhhwwdpdQDGSbvGYq3gnsoLLGL2Y5w8934pRscD5di8xUKrpusLB2NE6aU",
  "key27": "66tx4rPaH6xC6A3XePSBxHFCUKV3x6W3VfFzf1AUHr7mpJ7DFayvRanLHMXBx378dGXL2Q7epWMfME4W41NTgQ9h",
  "key28": "pcQG7kD1HcT9dng7SyKA1Cb5DLgMHK9JqcEN1raqVmcJqGjQFqetGEifcJY9VBmD5EQFR4J1YP52nQEzEGgYenJ",
  "key29": "274jXyh68UnCH5tGAMtkDxAvAEL7JXNvZwABZbtzQ8DverR3GGFpGHy9TxiDCeDc9zXdQsPSUMXrCwqNLgyejsFo",
  "key30": "3GgksdD6wkMRFpw3Ymk8MHZycSFiWFiRocBZUQMhCMEkYAXMmfN6skdc729F8gPcuDgS8LD6LdPJUntSPH36RcgG",
  "key31": "5nKoshZnCy2djJx5njGd5xp6NaPZmyqxNEv5Bbx9DSTu6fibBcMzvr84JAgh5HqCeMikXVtgzhtiufNdfptFobZ8",
  "key32": "2TkfLySRwQwQuFPRudbpaen98HPHfhyHimbnPmoVxCUV1t6ApHNmB3KU4AJWBV8QUnL2BAriHWHfQNqWNQ2fC3Zw",
  "key33": "2if8tNUBn3iAdywRArEh4K9W4X7vYRmTuNCH1w3dG2JepwEREwuDDrquu1v9mHpHDpDww5Gs6EAUcFigfzAHQWGQ",
  "key34": "5MbbD35UMB3vPwskxzmVoaYa9ubJPcwSgMHgZXdn6U26B2YLwK73f6wxsiBDdhTPg1n68nPf2xRmiccjY2hutcwq"
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
