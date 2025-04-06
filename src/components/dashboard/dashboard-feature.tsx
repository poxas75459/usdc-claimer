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
    "4WqjdaVWyH11TjMpvKzyXGzkZWb7Xr269i7jnBQ6UU7uFWvNP7FsTPqumf3zthsBgak3PLjF7ezqDHjQ6oYfBsk8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gNcPskM7C6Fye5DwBDKrBmkAxUdo6YDATxAwJUvFnSHC7Z6UjitsBm3T5nPZrBZB76kRswTB5pHcNkQGaaJ3yQz",
  "key1": "yJtYLgTtiqrcSnfkPHHCQXVaCoV83qjeMYyaxbPnamfwKN1zw1QfCV2dp3A4yTGqrfQJHWwUK73sa8ZR6Hyyzy3",
  "key2": "3VEYpQRJ6vP8M1qrLy77EmDc5c8v2VooqfGsUbBuMpMHAnPJtWSQ4E3YKR4WWkTn7SkkM1ybftMTE6t1RGET8Hv9",
  "key3": "JPaTYYCZf5iksGc1eLMVevjjixAqnkSHbocarhxHLiRjwg8XohyhBUcvvwX5CjUAywoCBPtgp8KinUuiYqicLJB",
  "key4": "42eX9gfi9ksGoE4TF6cMy92YiQeyGPhH2bN6z2EPW6nNsCNqkSXJzaJoUXFyouAsqCikA3kvs8iviCM1ZFZKUgUN",
  "key5": "2ZbRVh72CthkfdzHenvExFpeJKWUp8Xv574x7UEJ7Fr8fTLHCDcU2mUx4RNiGg5eEaGW58wKyryN3ceoBAxvKJuM",
  "key6": "59F4aTxcfBiFoLVzni88EQfhxuTZFG3Uw9uP19C7C9xrAj5A6QQ3ML1RuuZ7g5CMmvkynx6NXBdLBU2CyDrv6hcC",
  "key7": "42vPDT84Jb1Q8rPTwno6scBpuSdEnfsneTJfV8axgwvBKFb9F5MW6g18AmR1ZqXspPzktyUfrh4eb86Tk8e4Kogc",
  "key8": "3F98oua445BJuiToogesDyR6wdLVUCCV5w7iWisYsj7S3F6kbonoSMUWQZsHVr7KRGr3AramvkD4agm1pUNMygJE",
  "key9": "wEGTkYPqpowLuHjdbv1WvZyCGu2YZgLTcJ7vdGTSaGtpbma61q9Ly3wdBfWC4YwauapEEoQ19A4DfE3BEMsWNc9",
  "key10": "364uESTd7kMZTAnEjcdzi2w7VAMAhxWYiB2w25ok4pzqHYLJp9eGjg7JZxgZRu3L6ugy31LaD9i9XhDbqfJ6MzqX",
  "key11": "kXKJdA1e7vnjMePqbbmjMpEEyc1TnYAC3bpdPDLcDkAf6Uju3JZbest8hyehq7nuNYjbUXfvjSdoFcnMK9dubW6",
  "key12": "UhtsgBfzxP5VmfM8DVYjTR1cHTVS2EUnYzzL6USSp7HKSSkz1NgZcuwJEFGJQLm2uV7pebwzygxDKZ9C3T3WQHU",
  "key13": "4z1CCAe2BjRAXkoBbHeADC6E7UJAYoy9h4wLkamWbHDyvAgrzfWYTnH5fcju1whtb91x4Ag878iS91VtMGhMgeDc",
  "key14": "rkSpHpMQL39PpidyQptJih4A6haRDWTKuLH7xx7FniRwJd2ouLByJSH1fzg5Y8HDGbUPMvmfUarh67bVa3VHPsC",
  "key15": "5dMpnMu4X8rKVjJULy74GeAghAiTszDhnxLs32atWWwmaD78bNSthfNfbdBkM8NQbCJ7yUAKbqQEm78vNLsn1113",
  "key16": "x8J3h8CnBHWwFx8ixfPJkJMQsnQmj8cqH8tsrcZVwueHjseGkGjees7WNsEVnyzJTRnjMpZTrfWrbz2yJkyH6Qz",
  "key17": "5pp57wLwTXHJwF7RVs1ovdBCeVj9bU1PRhoZaZDZHA6KBsHmn11BaUBKsUAcHhKNU5i1n97evcCtyVFeXL91DzMB",
  "key18": "2PNCF7o4z1thknYW4iESi9FhqcJtbKeS1ycWGzhkhJxNVtCSECHTGzgKZbG9V4WM7RgvfhzymZJ7LFx7Jx8mDidC",
  "key19": "2BXc7uroVva8A5YTcwaAUcGWGaK1MKJyjpndoyih35PtaTyvRYxTYTBy1PBrYXucXzC1Cz62WivHAw7f44EVJ9oe",
  "key20": "2W4euzb4Zm53PoAkQUzPUonY5vogWEqpWmLGu4cbkDknaBR3R8AcU9dnKTbdQJZwAnL2BXz1vGfx4hK8hhcXNmgK",
  "key21": "4YGpxob5ADdaLh3ZUaRcVck5oPba8DKqLvqUneUsYyNrx9DcQe1cGRAdRiVVKarSLHgx5A7xgCkwrHaus3rbu1fu",
  "key22": "bPjT2MUGWxdEDS4xrcyYkqQY53jCXV3hrMEdL1kaF7F9z1FZriEEShjYAJashKaH87V932KWfJo9W6Xr5qakc2c",
  "key23": "53y4bcX7M3HcwYDGNd16p6iNH4HAcZef9b3JEnNPyLhjWgnWW4Yvtwh9TcGzo21tFpF3DQLQTFCLgzipQZABchJP",
  "key24": "3yCBcHmo7S2VfsGsX41QvXG3zopP4HYG27vfo4331PNGAnTuWXHhYF9fwk7CWZXu5GyFoq5h4tGpgBND7fB1cSAT",
  "key25": "2KcVYaf9NcA1TaudFzmPhyiHMKc8F9T3zjV36MyBEjtmgbL3cyKSFDzef3i8uQA4U8RD3spf7sVHvRzZnst7Xb58",
  "key26": "5zwjM6YKzZ1zQuAaMTy6bokHevdu2aFgmgRZcrEPgtfi4hKGzqfKDXkF9DXAuEagzdBpnhwYV9ckePQyfoNGFLzZ"
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
