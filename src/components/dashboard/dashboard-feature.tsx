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
    "4JFyy4cnL9f1wYkY4Hxsm5Wf3CAo7bhkRwJeYW8xvSMHks4pyn8biw84dh2KVhY6fi6DSZzrUCESpAMr8vKThcqU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wFb6qunvnEesmrWW1xN2g7h7E5xP32A2ZKcMqYBifYSjDxmRVdQ3XekBEaLr83gYNex8Ywf5SmR5JUEnKMcMWFW",
  "key1": "4kgwr2gALb6zKhTrYXdo2F13u2aq3hRfGoW7nC31LvBAb1omqwkgRmLkdYJ5QNqYin5cfSrsXAxA7DiGG4CYeNvU",
  "key2": "4g4tfxMQKMAqhccaMMTbv48Crq7KmFxo1tQyqZvhqjXzFJRLBsaGK5szfudQZPPqe25yEbQWSuaxoNX7gEBf8MQk",
  "key3": "EaUidm23NFxtAMStje9vypaAHzNM2x2WjdorA9nJpJk1xoipKg6LNWcNVDkprFgypqhp39ms61WX3dLGSBCoUjd",
  "key4": "4PL6FR8WNKLG93VDUsWKjMRgL8stvgGSrWc7dvQpNXfhoZo44f6a7MukWyyyAEMPrz2yGaVAr8HPxhq4gmrJuZwk",
  "key5": "62nc8Vidu9UWz7bbT8YBiafDRNpY6qNpvmwZTQfH7P7Hn4CybNAbTwWRdkZLPGiVuf4hNWLwrsQZ9MLdiwpfrd2o",
  "key6": "4ubeLWUJuzNwj7L8d31VuaMTznb1Lt33cgczteHWmSiAazq9VNV9usX9zFXadyz2zhWKqz9zbwooKTbQu1cZmZgf",
  "key7": "2abG2mVy5DGHe7zVF5A96zAe2wFsuVKgGm1ViPc5Cqeo48unLmc6gR1BfVoCpZ4iqDdCbymQXXHRFQA5fB7d7j8U",
  "key8": "3jtzsPBGmuPsyp1tr9HRZfEo8Vbdv29AAwxGNtC1F2AVdrhP4Q93wnnb86BEctyD6w5Z3W8NbUMj8nmaiHrtW2Zn",
  "key9": "ieTYiH4uoCr5F3W9wuVxFVffhbodkb681duHxqXUCmhJB3iBYb1Eygsz9mvWei6HEYi4rkNPzGndefTsYL31bDc",
  "key10": "4FUDZpfQc45715X54jAnwD4j6X4goNBvP1LWsEX7XSGGbGZvGRbXpaKT4fBUoeKaUqocrvih9QpnHnuJLpLZF4sY",
  "key11": "3tWozBVsxvEFyu4Cx69EjdwhgMWXntWuRYFCQUctXzmp4hjdaFxWuBJ6QrygqfAkkUgNZHYwdCFycjqdM48tZhaS",
  "key12": "4Ze5GwaViqs9gtW3AoBn9mnvGRxGrB1LnCB9oEoSZ5G89THodN6B4D1zD9HCGt7Ag6GCkVzkjXiEjUJ5niAWsPBc",
  "key13": "56CTUyZmpMVmnaT981BLkU8rAcfZvmRVjyTK7r7JkkLuy8oG55GieAWjBMG6NYriv8w8UnPDaBLvUiDdeYkaDxWD",
  "key14": "4DTVkT8a8gZJ2RpohUPjeEtg8LCv1CJQyj9P8cxprciTG77AFsVwFzX8GymvUmQEfLB13HsGbJs5Quhqw2BqjDbD",
  "key15": "WNwd6Js54tg8Q3863JpShrE9xtQ9EBSycGqkxUEKjoWMPpe7gTzgyKDn8sgUgZ53i3SXMsDVEvkpduhkLZ6RjCw",
  "key16": "678mgEA5idjvTpZJy7sL6vz5SAR9XonWp6GRqSeAyLTsXQB5qo4cKxEY1XDPDQXTW56s5LAkkQbp9YsHS7HrxWuC",
  "key17": "58ExV4fXJmFpMJ1enhjyMuadiztwrKaf9QPAapZaumqN8BS4WbjZAiwL5QsfYbgqCF2BrvfRvupxazAnjtkS4j7h",
  "key18": "31dxJsoYC7rU23UVHe7Ke6VR4qpHJxHSx6fNT1ppBwPrKQAsNV3bcZCxZutnLWVeYiDLBRmjHLt6Yz6ziDcvhG8H",
  "key19": "Fowqnt5EkdyXwQK85hLe2pecejsqq5UQCuhqoSbXynJMQPsa5DXAHdWBHiPWnHK7uMT8ZopeemQPdwECSGFbA5Y",
  "key20": "2yYFujQHKVifXARBa3iFaUy7e39CNTWCmhK2uEPHx2t1QaSNTa5nNop4d6wKwiz9g94kxsd8Bn22Ahi4w4iDeN7T",
  "key21": "4W6PQz6qtREwreDH9vb91Sv9Pbynfe23tAC7pgstsvdga5bcj1ha5hfnCyRXpYw8LMBzDPqSGX2q5KD2PDDuJ84J",
  "key22": "5MqEVMA9JhT484FTtCa3U8yZFWpszoUPLAL2uPuNMqJKxEdmVuXVUvpKgKyoUuRbQmrsBx6D9xKoBdA4ixDuJqkh",
  "key23": "2NAvXyXGFqvV4tUjJ2QwNYQBTadQXq7AEhQqnGm4k8YmjV3hXh7DMn5fZcn5Gkt4qfFtbDqept1CoCzKn6XSwpaE",
  "key24": "1ZGwiMxB6pYRBqT6wPtbxDKC4bQo5FaEwC61JJnuYdcneebDhL7qiDy8oJBYfmbjZ33PwwbtbWabjNNmwDGfQx3",
  "key25": "3Gg5E2KM3ugFVSadnVznxicQatT9wY9cWD3Gg3UCiw8wWYXMDFQCsozCoioPA3zUBj8Jbmu3CtVGYE1xSxDt6DVw",
  "key26": "5QCQ6S8y2q2TbcpfmZMNteztVH6RREvt9nYVY2bQuAW3fPPawuxGP7dRPGk4diXAVP8RURwxi7psnHn3M2mgVzCm",
  "key27": "5qRtLjERN3tuvuc2NzxnLJ6PUgNuaAiEYuMngKoSMvWnMpg7q9UBcPpWEL5Tr662vKKZBUkDAFvGatGYWeuKuo7z",
  "key28": "DWccP9K3v454ShqEjCXmQYtb3XrirD3KDaMV3QbsqZkT3njzeWkywsbKUsX55R1cj8h7RYFogmhWsGyB91B1MFn",
  "key29": "ngzSmYZcafaMDN5Y5CVncExCqjtAJsjWwK9DADBWxKh7tVci1PT4oXVafQeFBWgc4ADtgrHsRoLYu7Vvo6j5Kf8",
  "key30": "3Hohx9Ji2mE2LzwgFdyTp3syFAEo24WgVSdKfUBPaiZWGkRd8So37eRKRXfajJ2DRB5Ut8bk8WLt3oQ41Ls9CVGP",
  "key31": "2iNpWkjr9k7iXebQGLZdx6EHHDQcuhppRpYUVWKrF9aLdPDxWNaCt1DE3RWCuiJHNuYnkf8aCS4GPydHj8MBc7Rn",
  "key32": "21sK8YFPg7cFnCr3N1Re1SVkDGrfHGpFvjGZfGuASmUp7horzHKnzwnjtqVfMQLrszjhTMUQaDMm26n7X5DGnYBm",
  "key33": "5iHbsddqWNWtg5zy3z7mChS2CfuixSEdN9K8gEaeitEBAR5gyTjYFr16MbnuiR7U9eGhFtzGjsanv6kcxUoxBj4N",
  "key34": "3VkZMrBMSHda67qyE2hu2KQW9BUVPPLycmaX8Pzv9dnJPebuxRT1aNEdHGnRjx3jBA5pT7u2aqvSAPV31MwQZEPX",
  "key35": "N5eMRP7AThBoaVP18kDrNsEUu9vtP8X7pnjmwfpPrrDXyWJ9XgiZ1tr5VcwtL1LPatv9DQkpXt1QR6EkTSaMKWa",
  "key36": "2a5HPSaoMVyhrqhCVYrtE5STxkHMTAde6GJhPqaqYWv3U3cXBpJXsQE2pHFY9XomMEfEnZXQsidayV7otm2Ls8uL"
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
