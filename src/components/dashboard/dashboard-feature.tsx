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
    "WG2st9zTrMWpwTUpH1dQBxHQ1NGcjQifUEmKCiG3bTT8tJupJ3afMYiFHkqSQeAkVWn9bRHcML1aCTCTCKAZCiX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Kz4GtEAnW4hQe3762tYdiDJVY9xDiMxSNUHYaqMTuecFTp19hiiELeuAULXMHoFd59oNAy4op1MarFzFqgn4srT",
  "key1": "4bphirQaHcs4DVzxEs6RGR4F7xN8WLbbSerjhJ9By6Da1CYfZfuSmRh48SX8mD9t68W9kXpqv6vy2qFtkmAwaWWi",
  "key2": "ACBJ3ZExELvDS5BK46HZbLypSrQdw51zkwad3cHLV8fBBruKUKK8JQt2oZETwh4vM8k8E1tBBYH2yFyCetRhuGM",
  "key3": "4hDsZ1j6hfoqLK6qAUs48UcqYryipsKVd42YGsy1b3aN6xjEJd6SbJaqg5VqKvj9Pe7KYb1YZukT4suiDczS6EHB",
  "key4": "3k9hvg5V15cZz9cbnUTTmjPvad1CcMcrbGcjrbvJV9yeHKZtH9PYQPCq9ggQaPAqe5tNaFPGi3aVd7LLcyvdN32m",
  "key5": "CkTCf1BpeAYUzjNz7FFEskoUazAgLpEHtaCBRkw3apd5xpGtiWQQte4SHoQp1kUkWybjZsggnnAEGxStuNHLLXZ",
  "key6": "5KA3VwswM7kvWLd8WMucEPCM2RfYnMvtcXMskcap7vYASJ3iJqFZGDqEFYN8EQxZ9YAdaWyUA7qrPFXi8G4QBSjU",
  "key7": "251GVrLUy8RKiYHCarZBqXrKAxNXEodx49ee7e3R8Exe3Gun5XHTQFKf8kYjbRhBFa3byhCPmYqwAmFDqDZijkLY",
  "key8": "3fsjB2d7oB4GdyLJEBmpFsHWaVUUBXuuaBEPqZy4M1NfVKnbqYN6brBFWmAD4K1z1XoY4f2zfQibiszQbWjMkcgD",
  "key9": "3ryo8ew4aEwtw7ZyvJSpQAeVHfg3J9BS2tsSt3rUsH5ZeDKjE52kHPdA4K3YJdKUAMirzT8H6FQZQC8Nn8Li9uLc",
  "key10": "jvGwyhdi4o7ibDGPUZna1FBQvcY2RYTHh56gZTDe2cKTh1xsTyP3t4oLPLy11KG4A1JL8yoxorkPJMD4rtiJsXw",
  "key11": "5pB8LHs3F4PHA61ZoY3PY7yCsQyLwwE6mRQtw2QjeYfgX643Mow2PQnhG7HKE4WvyoxD2SRZ3naPZtPF3t6CDxUv",
  "key12": "5rprou8pKL2sVwaquRvNtAREFJqSoWYAmmeX8afuwhvZhUd9Wog1PYHmXjVFyZR819imV52agJUD444Dav2jtm9b",
  "key13": "2FDj8ApqeqaQSgYzf8VB3KFgg8oc17RVReCeBSok2d3Q6B3D6FHJhcXKRrbv5gp1kEo8qETpF9utF8rf6JpAzcWn",
  "key14": "oH8pNcrDo2n9QuDwsptw5SpD3QMY7SEnNHc84uBSjEpvjznBc8SV9tBS7wjTxFCpkeXsvhzkR8oZbnUAS5kFXHR",
  "key15": "3DXqmRqqkkWNxUne4ZRmcdrdxorKBpqmU6iWoPDqD41dsA61jqwQURUJCGyRtiTmCPfFC6euPfwZD3gNwxT13KNk",
  "key16": "5oneCfnC3M1yZQLksnahXg7MXLUpHfhenLer9Uj2KgyC6PTbMGa53A4PFZKkJZPxHPN8Gdf9Zbk3d5tJCqfpMx8C",
  "key17": "kvxYAFejsXzPwbAtjKCAZzWbPzE1AgJzJj5CnsbMysGQJXuCRrMH3E38BsKxG8KLknUA5JXGVJhyapXoKu7ULjn",
  "key18": "4LAD18QypfWhkErdB4hbAbzxFKvZjJobdB5TfMDt2s2ojc1wWLJcK4GrW48GzjdzxaNgBTPh7FjfA9n9V2EAWrCV",
  "key19": "3p4qiAuBTwzBdMjvBALATmnh7GY4Z25pguEXs19hphkVyBi4dxrFjZbQVAcFeciS3Yry3UQHMLn5c8LigygrqLkb",
  "key20": "4mCTvpufAC6Jny99d9yv9jMXW55L6vU9X2bHBKFb4w1ivrwTzfi2phk7ZHo5vRN5mLvccD6C2foXdCfCkuGHFm5u",
  "key21": "5bv4XfHGABUfoByFDRAYKXN3gg5qtA3DoWTcm4wSXx16CqANgULBMZtBNP7W3ECZ5xTTFN9ELcXevRtswtQ2kvXU",
  "key22": "3fZMfKeVP99V79Yfe7iUqzh4FM3XzPZRkPPjUGPmaVSeJYwB29e3knXiR9xfK6QJjL1CmVoYkuCWwprnQJtvjEt6",
  "key23": "5KsbCoCB1dhpcqz7ekbUaLNH9RfjJvMwV9Xpk2zPsR3JhZVeUYhLjqrFt1SHxqwGphcidV35ciFF6x4EZNZS6cCS",
  "key24": "5HsxZnGoL4zZ2QD7tSD14qErAENQjSn5AF7r62pYmuGLuQgXHheVbfwoiWT8UgtJwq9zRQYhwenR27duPCickS8i",
  "key25": "3BgnLf7XYmcCegp4jd94arL4kiJ2t5jSeor9pU3HwYe8u9ctfKkFLch8eP3njUA4KAnRecLRHrAePAZZuQfGXUAV",
  "key26": "419he8PP3DwFD3fHCA9QJatHEMUwoKmqwi2iS1VHuoAkuQgpm5KWmw4oxSf1M146wDhSUWGVkNzxtFBMmXUdTsES",
  "key27": "5Y7fh9p4eo3SyW9ryjY8nq5xiTHojfT5p3ameHiCX4RfCs9AthkPHuZ1KAtrXW5BoztndE7nQUkS4Q7WjLpT4T4X",
  "key28": "3DnrSpQuAYgMizy33K7EdThamHhjXZDm31aiLu7C5keRKDH92CiTzczNgpBvGsZcAeeKLLkU4P2rWs8MHod3ZsU8",
  "key29": "3QafdGuCkRsKiH24SygerQMf3UEu9hN6kom12FjhyNYJQv1bmMn6nGcGrGeEjweg2Fi6XgXFu7amVdqXnm9Zf3j",
  "key30": "3Z13WoYs9c8P82oUgdQdZ9Cke4NUT3gZYQw6MBpXGahcgw6uy3RVe7PCQavX2WLbwJshVxLtnWcGD4UasNP1U3QH"
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
