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
    "2Jsw6R9f9TevNPDKbCdxyNK6rWYDrdB6phGoVtFmJiNkFsiHqV3wtBX8RfHczDyVg1G7dmQ1nHSwQ461v3RwE7LY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RixC6NXwjs6pLkQHYEKqbdawiWJAwgkoeVDjRhqE7KJ6FcQp5kkU5VHp3rkaxQDx82Ugg3nAf4sm1QHRxY3SUbk",
  "key1": "5rdR7rsmvcYvF6kpWPVnPoscQSFi6fseMERJn1kaXFK9WJZe9VN7QcFBabRDbVpKTGi85n2sk2ZXQ22ohAgYy1Mu",
  "key2": "5viJUZsMWChbrdyExfD1CQYEikAQk4GxyWoGxbsHqrRdYG2W2cN7D6Zz4TaVRqhTnLHjoTd84r9a7VPVrcMgjNeZ",
  "key3": "5eqrDofYhKJCKN36i72MLxrGyqrwuKGwhn3uMDaoVgHFwW5JWPXxTqPDXLwta5DNZfZbPw4HgrU4uPmayuzyo6HW",
  "key4": "4YfrQE54c5Lhbn9Db6ixf7XHJjjvW5HPFNE3nPcA2E55X5dvgCSgRd1QvVLjMKkpQgtJo4RPZMnkvV8kmVFGrmEq",
  "key5": "3Nsu6edRn7jdyMU3jgoe9seC3oXqp7q2WLrh5oKyswg4eAxGRzDcQvV841siiQu67WaNsjsJAk9gf5iyWdADD4Us",
  "key6": "3pmksxPGa3Kb9VinwurUh5Ri23KPXkVRKREN9BseijoUCRC7CbHuRvWzPeLdrUGswmdpWqmvEuJCpDbPzcF9BRD",
  "key7": "5HWtaHtwXRCxxU5on7fnL5rpkY9Jdj57xBNpL8Bm8hopT5W7ud4Moce2UFEccoZmepEBPLLZFywiNGbxeMinMckL",
  "key8": "3rFcgQvcXh1tQyrruaGFWA5fhxGdB2fJtcTBBzrmDU2ZURptUirsv4AWoq9T1qe6XB3T6DeCLvesQH3WwoKZanaQ",
  "key9": "wPXVxMdvSFz36eKDePaLYFNSFdX4xCxuscuJz5tBAjBxohATNzmcRW3emWuqQgi1rPWLAzGL5qbPhANHtqeuFgV",
  "key10": "66V7mhTjf3NBgJ9V6MED6BHco1xCtggtg5seU7zFJ568U72fZkjAzcVCt2UmMASbKvURr3Ay7mp7zHMyhkGPYNi2",
  "key11": "thNC8yKL3hysfV82TqwsSV8fDyn1Z8ZYcXjBRx6SoD9CAwD2mSB8YfjYD4FV6woL9pnDtSummy4pAu2T26ju7uj",
  "key12": "4FmXZjUyK4biLZX2eGeTWbRgNJQxVnrmvR2U2VDLrMxPMv5CSYU4LP3XGEXESZPxGrzvqoZtd9eoJ1e3DZFL75dw",
  "key13": "2r6fRo5FcYZAuxAYHA4H6FfjVBxpJExSmk5aXcvB6eQN3WLgQUtUj97KfmCKTnApK9nY4JgtXs6PsS8NxBHfY6Ah",
  "key14": "5rFNZuC4ZjQmN9NsshpEujQwLN3jPW23Gu5UayvtG3QF3iG34jtMdJxcNVWJyCvnZZEUBJFXKsiXbHsLPEKJc49d",
  "key15": "4o1jSwRqDvtp9d4o4ZZta9HzCEACDHa2hDeo1Rik6L6iCR6ZgwGJSVYqXBCjiMbbbQug7sqmetxXTaD7RbNBGyJG",
  "key16": "363nVENcDBDbCPvrFE9V2t2MWHYctY35Yxf7EVmRguVXEhrP2sTqNZgNAFEBHb2mqZs6yeWMdZicBDxJcjcpKqy8",
  "key17": "htisryKzVL2rG2dkKZZytzzsaTD3hmyTfYtrFyhL6XReNrSqniF9mRU349BToD28DQ46JPUDw1EABgcgzLJNQDs",
  "key18": "2jidSGtyWw8okMRVNn6B97BJaRahH2NkUfeyS2qksa2xDwZ5thdrjo8iorMPynh5khvh2eSYA6Mn6DXgT1nWukzs",
  "key19": "SVHLF6cY44u2A7JmY4YHnLj9udgQw1RN7K3nsGpf9YGUEyAoFW5xir78WVcGrJvFubJdGFHojSt9pqEqnwgSqth",
  "key20": "5VemvBWmu1DdDaYaHFqtDur1TytudL3Z8nLPqXVw8gEFE3qXDFTUigKxYKBBzAkiF2HH6jA6gBwMtKdtpCKfMpQ3",
  "key21": "4A1coKT38SPMs3JXS7HPAHVNzRKMJfTpfAoj1vtTBfArrfrHGcJpWU66TuG7h5zPpqkHgk4piPN5nUDUv9GvWuug",
  "key22": "3488cmBUUt8p7wDY9emYYnzocivag47piBnr8prfgV3CqmsqxJghuzhTnN7ztJb7nJGVxxtpJdrRFCUB2wi6T8qK",
  "key23": "34t5dCSDM5PzevwBPeXqHZgVLsMck2sDtM15tukCk3Wczfb4PGHURcBBGQeVyerX66rCikAHQwS36R7KZ6wFmPXN",
  "key24": "k3Qg7mHV2YZh777NM6fc3ToY672thGXyucJarTfUzghzftnFcD9CoPav2V9bLn6iXgq6wrEZT32FVU7GCHVp2uh",
  "key25": "3EFpGLtuLZzEeLRnw4Yhbn5wAqrgHVg8Fu9rgJzgQxWQCYgkeCccj2pvWNfZW6UoAPC9XZU6d4FCTj8g1dxz3teK",
  "key26": "9aETGR8th4Y4hUBM1jxPSQhu3evFMymuRYMRjyp4LkQmUq4kNV66Ch93cBCbMtVsqdgzmjVkTNqeVUZEyHdDNyw",
  "key27": "3H1694k3QZyU9pJsytpAucYLttUNZ6yrUP4n6jTHkeTY7q4i54G9yP1mCcHyAgBKPmhKKZXarnrCeoG9R9A8neG7",
  "key28": "2YHaBt4Bz5dNUicTPTfUS9qveuwBzX1hVcSxAueJyaU11wNbcoRnuKhUCA5fnKy8wbcvhF7ThpPX2maKVVzG3QKU",
  "key29": "kPWKZE1AW5jDETX8YKBorZwHkcDsRmLAJPt97jq7LiJdu9pGp3sQToVTm3B4cs1JhH4KFLkfmJraMSr4myQV2Vc",
  "key30": "5joX2UgDoCj9Gg5R9hTsh2tCRkonjPncg8xTUuzoSfbF1TggUjxvArTozKVe2fomHdNzva9sMGyo5GyMqk7BoJ3Z",
  "key31": "4pqH5ij4VmtJcoV68EAHt65Qav1ozHHUZBabusz9e7ioUYoxCUDEXjix2Kh2hvMCt3ugi7ESXSLBA73a64HFMUZd",
  "key32": "5HPBfHiskR37AMU2JrEu7Gb4E3Wg24SVeTJ5YxVEikRtF2zqByxPXDJ7Wby46jMHt5BFjHxJEJecNmVnY2txpP5m",
  "key33": "3AX6YXVqK7azuq37jea27wj5hMViyEqQnapRJRsffXVnk9nkPuCzfJnn9dUMNJKQ7rFfjs5JcFM76vRCWbXssLxK",
  "key34": "yoPTHZRTd3AVCkAnqem9umRoi62g7QxpkrpdmtuQJdi2N3cvxJYrpseV1ZAsezaR2Mx2SUR9sWaNpnka7M9PHkv",
  "key35": "5VVpRnwHYKB6Hm6eELba4HS84z8KeY2ZjFE3GQKY4nNQqhaX9nAV3CoV98rV1gbQY5miG7E2Aus7nEZ5fnB7FQaJ",
  "key36": "KTfsWW1rceR5SXpJxCZgQPw7atjJbkeoWpn2vx5NPStpvcokddrwNWoBkJgyoXmqTUMECk5Gs9V7MH7cQApD8M2",
  "key37": "4niPdHCxjJwrw2TcoAZxk9WQPgD5of8QTDteqa8jJPgyZJdf17nFdSQ16fFT4pLkkDQAczwhD1bQiFepVDNmzt1B",
  "key38": "2THGbuna86g3o1iejbRm8sCfgbuXKB3JCg5Yyn94RtmqhFsbyiMArN6k9nHqUPGVmLskgtPk8zKTKNRDua7xr4CH",
  "key39": "49EybM68nUXkogtWF1PWKVR723avXvCkk152mhtCtm1Y3HFBdjPwabM6DbSEKaDopFo1dnEmFP3vCZLWaAa62zSc",
  "key40": "3DH4PT5ewRimhS7SLpxxrer9daUtBzs8kUxVMmN4RhkBXjtDEpxpcQssi1VKXypGKdv97vC7xdBCNqYXGYwsGTgQ",
  "key41": "2UUnwoq8Sk4DFKKsjAGx6P374Abi1SC9NsoLjYXMc4zgPVrH6xkLfZ2FgEKPHaLmX4aCeVjrwHMNXkVjSYg8dxCV",
  "key42": "Le58WxcSPoNPPV4GDXyBAi8cb47iZUc233YWpKMFYcfpPG6jm2iBi3jJrEXs6VoDH8hNQ9bGkAB4FrF68dTq6d7",
  "key43": "AfgDL96az7i2tW1LkXywn5nCvqJEpB2qW4EVSWn2Ugj3qgYmeXxLvZgLx1XZ9an3jD1uG5VaJYhVGLikpWmQkPT",
  "key44": "XhdfFUB9EgDZPNqgnc3n7Jmh7ahsSTuRX4sJ9LYGudmAmVDQxDtUQAbZeMXr8LsTEo1fNUHrDs1BLeufwrzWJh5",
  "key45": "5DxhifiAvV2rqefb7gTpDnQqeL9QAJsYydtpboyucFXmqM3GqQJ3qvbHp4EkN1Ak1G7mgrdbGfH5HLz3LzYexUaH"
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
