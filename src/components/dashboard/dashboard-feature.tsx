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
    "3kVHP4ywExoHyVx9BfWBLF6BFhe3YhwVV6GHD3sRU9cgXBhwUSgeeeL3eGREdHHFg8FM6gvwZ3cthkajGFyBr67Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36SsohRhgVcqmJfzgARXxgkchcxXTSEjv3tgPd2tqG6AuQkGkkb3e27nrVPZLK9F3ge2j3bdcgFqiRM5i3qt5BUP",
  "key1": "4S7fH2etye7rzUG1bmRg9by2JRHDEqY4go59qhbPpatNYiXSnPN2jw6ZryRmH3p9XJjwDBLkN5szGqg8wknwcJvd",
  "key2": "3WT6gy8WKP4m45eWcVSuiQqKDz42MQtxTd6eE4WtA4S5PB6LTmdqXYpYJ2RDD5DLebsRZ7dDZftiJTcp8uDXzvPC",
  "key3": "i8HfPw4RK42VFuyE4H1wKNxgFkFu4jWVmLEprCVpDcaKkviBQXEPvLKVaYezkBQLqxutPwkJhDvDT6P2gWRdKkV",
  "key4": "3DVWA3U5hvGESTFtZ6bm84m634EH49prDnJW2qEN3dmX1g5MFXQhn6uVS3ntQ4SYAWZxEyRQLjrTrvzjcVKLvrmW",
  "key5": "41QemwoiHVYQFCm3LtceNxULtc5P64Swq767CTkUz67CC63hcePnjujjZRVmkTZwuLW6aYgwBJXdRPyhpcbZWueN",
  "key6": "5Cic8xdVFZE5Yd49Wzw3WsXshwCnJ4RQMnKXMcPH879TABezfWnF1wfBvqUro49JuCrs4AxSggdCLut5rXViDCw",
  "key7": "56oRpQ1AsXtdoWoeJU6TotkSFKVBh3Xr2hv4jwZAXMeD6hE7yfKZQALn6XyUG5a4H1h7k73LtpjS4uRepfQRerES",
  "key8": "5fJeQXpVjEHMPur3H2d6DqpAANDgWzkBWDzvUv54cdXzSjixbtBywKcxL2GRBJwxUKkksEwFaCJherwgv1BBJCCm",
  "key9": "4xjmVttwTFobk7pVvc8hPPQBSmx66z598oSeTrFdgF3jWrAF9trPZRHo49RRPLUpd4TLMTuEmeYi156wEV6qonjM",
  "key10": "4jcE3kazfLntGWuS78oPHdxB2XWb6krAyCTKW4Ed3AtizRusEtGSxZtDW6PQCNx9Evepxy3peWnCiEF3hEhWhQJd",
  "key11": "3C7toQ4g8QCKz2fzwX2PueSXhzYDwdCcqhWz4EPza5x8UsS8xb6pAK5buPexWceZ9D3RpohxC6TLHuo8dpSyFRTM",
  "key12": "5aDxRBmbDpyWrx1JWd7QvNoJpVQnq2kxwq6R4umZTDRA5M8dKFVHUMrVefRuYppr1Ej2iHEDyiBX415nYbc1N8nG",
  "key13": "3N6iunLi1H9LZsXxXYu3n6LfDAKg4SrkBiBUnzwPzAerrcsssrYNDQ1vPKZRfBt4FNpdRoCvYbLsgzBc1ephqN6A",
  "key14": "3d8g9s3oZVEK4nta4v5gpmdH2sK7qmsV5421LcgvYk8gc5fMUmq1LtmaSPntkag22CsK678GV8qdTzGFWmtaKYCc",
  "key15": "4BTv7BwtszPX9KRGtT3jaW6yEZjRKoUG1u8Y2UwwfXV1ShKEXSrW3Khtkv3g3KcKrMbcqyxNZ6gix6QRbKnVuXUc",
  "key16": "4XRAG3dyheqiLe3vg1HJ6us4kMd7Poj4KaopTVe1tCsmctnRC2HoPb3Z8ETtwAChzawLd62iTxiafPiEsTiW6t5T",
  "key17": "4rcoJcyvJU9W5cfGvGf2zUsf9KigoiZEseL4bVRmVbR1VpzxwtS4qZSRFu3EBziRy8hm8FmHHAaCPVizvUMGh8ko",
  "key18": "4mZWHBG9yogLK1BL7mBURdPzjnadfejL1V1NcmJLobXyoondeg4cuLsVXZYxQpS6T1ichvy2vMYtz7J4dksxYmke",
  "key19": "52ZNbkPCgqXHFZ3bLNAMVbeNtXJmUaPyigX8G8ffvRQ3yMC74ppgBqbpJrevBw9jxK3vCEvrXbdAs1MLjJggFyjg",
  "key20": "5XTjbcECJXyifMgM2t5dw7ihi39Nm9RDnUaHRXCJUUL3EPPM2DhgHMZJDQ2VywubvhxfigRDMK1coM7qEbQDXLx1",
  "key21": "xKYCZfWTCffoF9my4K8h9Pj6GyZKeccza15FuoGosCTZ7U4NKHJHEcJFwFXszwgErQLQh1cBaQrjUBsi8E1EVG2",
  "key22": "2cHHZDQE3dFbpo3cZeSGxSZWSxdYFCedjXazeGz1CKaGjZi8JVsmuKshYFQTcFUqCqFjTnANjTJj5ZYnX5Uk1YYy",
  "key23": "4dwUynXYxpiEGSAj3qKYbjrLfnmBALXH74UYSrXUweZguw3g6zft8AWPvEGzSLgxEA82aSxd2jwf9PHnRZH2vzGN",
  "key24": "4P8UvYCVKmeZ6jC2HKrybdgTvKCrf4d28ZW1K9nCmeQu2TVNjWaBsqtrspiPTfNoXujY4f3i5LKpV7cXWJMp31e1",
  "key25": "hDT6GkuLjGcYj7xY22pcyTAcjWCwCRJLSi8EsLknNf9euFqdA8iemmgpJUWkSZfYuQ3yVFXvDsk6Xk38ZFmqnSR",
  "key26": "5ia6aaqMCyGqNLDTrkN7kzJfPB3H1sywa1LTiStWByTp8rqJQScs8AbLpcNS8E8mUSSzqBd8Hkh4CTNfAxMzMPDj",
  "key27": "3cEkEJiyxKAcBfaeS6GFzNDKbboBcQAbWbBaCvPb6Dh84tep23Z8Uqnyo5HNgwoLMrY1RQLxHEAprFBk453SxFbH"
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
