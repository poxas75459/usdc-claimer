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
    "3mH7PdjiXkRK1UuLstSzaeraHYo9qiLrxJpg3TCfuySMfBBatdL437jAGZVAtQZqpD6iHQXMWFHVTeHtsD9EqDjQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39K3KHfxZoqoWcepT87cs3mnxyP9A3mnmiNLBDXwLn6nYuPA8uyW9RJySMeg24LZKudHSicvg3GqSR8aLhzsh8Ld",
  "key1": "X6P3vDY61WErWrwWETvAPdw59dvZ2Ew8Q8bb2U2HCw3GVPMSWiDyhPkiCmhyDfg7bd47e4MrCEMEHKeZbnEgcJv",
  "key2": "4Vd9juQfntLV7qVkXCdq1Fkmp2ebofehVHUAmJncSZK4keEQfdGC7ZKFmhXpuU2jAZLuULbne2qy86W5eP789t1i",
  "key3": "4RRtdfo4R2DbFsVfJECjsLBjFVRaVHFpBZPKJWQWT2tadUrzaE2rEqQmw1TjoEFtHiAhiY5LrCBR7bbSBTTwDRUX",
  "key4": "5UECxNAcVjhyMdwuFpJEmCtotBqHbuAcN1eC8AUDj2mbhssuk1ogHV9VhVquwYtbtyDWBGoBR5WVP2p5mAmnfav",
  "key5": "2XLw42uD8WDSYi8vVvipKPUaVPM21NXeN8N9fChSagLwyBw6a7jLrbX72kDC36TBcjFcSHSWPSCUrwfTTxzrosK1",
  "key6": "4Ybi97r5AgPqnkZtBj3BjvzaFJDY6K8SFB2h9TVBN97TjbGXRM28N7gyH4vHyKtKXEBwhfsjADywAmg6zcMZC1yp",
  "key7": "4LRaPviF2KeTTQpqmsuBXenYmeV9nufmDdn4jrbkYWNv7Q3pPMj67KaDVotkhuqy3HD8pMJ8nKwErCo1Qzx5YB5D",
  "key8": "2quHXtXp1g7e7BiJhovDYaQYqvQsanmvM8mDjhiay2RmYqRTe4MMJxE5PB1aHEwfr5tqchJ1i7naG8jpMbGrEdGy",
  "key9": "EFbQi5tjTmjQu6Jph6J3xi5xPmuDk2g92rmtUQ6tdbd52UwpKTJJ12JuJv53FNkAyEtR2JCKQrZTyGw7ZjBhaGD",
  "key10": "3BARWg1Gx3hBbuVY24thzsZJjmhf6veMPNWVxjTTKyRFoVeznaAKTASWnML86GWjjkvdRQ1WfZ6EgRfotX4oxHox",
  "key11": "5N7Yu5DG7URdJPkQG8YzXfAjUDLwSaFXmJxM5d8QCLq6oSaXRSRUJMwLvaNxrSFHEe76VCRHBtLLgeeEecBjwh56",
  "key12": "z7sVRrjh45U4thRgB4KBNwaBjGf2JksS26js1Ln2KjB9PDiVsFXijzinHXC9EsMJJKdMuRdXD1EzYPfoJU1SEpS",
  "key13": "4gtTqs7N3nrLLpkAEqpEPduLEUapnt6npQ5Gyimaw6HEPN8bS6AUaGLAnCmtxqmcp58TdJWBp3wxQXxaXFLFoeKL",
  "key14": "3n24KSEZdDptPChAScuQVhtR7GV2YQZVJqzNRZeR1AspWAirMbXGZxCsxBQme6EecKrHWgNAKktA4rUMrzXEgRT6",
  "key15": "XF7sGKQ9teLqM4H6aksrkEVF6x5sRsi9wreKrZYnzetsKg76mH9mG1yP8D4N2v6NdvUESCUps3WSXMYXeGxEGwF",
  "key16": "3GDpfnwQib1p1AT2Ax4NWYnefSnWUCdfR1d9gNVLtMwYHxsXCjqHkroso2sG7kUSkcSBkGfuFd95VH49UPG9ns1U",
  "key17": "2AizzeG7jHYUpSQbRMwEMXNM9rApgtCm7WBSoZ79PKru6bmdK5xMmdmcgEaDxi5YsrMLHvF2PAKEr4v1ujaw1dTt",
  "key18": "3XanS1Ruy6SBD7oF9sHUx2VmZcxPjWCRm6STwjiVuCZHmx6uFA8c7TTCHAm8zgS9npKHaHGmGq2TTFW7EFqbspYF",
  "key19": "4x8dVh3q4mhRDyqzFke3N82BbFegsoLPvrPyaJK2YEhNyzroTeSV5J7fSTAzypg9vaizCMZT5cDAuS8az2NE7exw",
  "key20": "4ocaKp57VxYQyQCryQ9Cj6sNUyooqRHC3fXS4vZAzbMEvv276BGPfuK86JVD3sPpCvh9NrdTnDeXsa5URu6C67Yp",
  "key21": "yxDDpdct9sevyzdgNjAaawsEmu8zVdNjRYuHqFBdMzTJWksrmhhRG5U7W7ZeJrRRdSrxgabxZQbNqRWtt5w3HTc",
  "key22": "2zpjEf9yY6pXcbPcDd5pqVgq5BsrLkauqk6vR5pY59pN68DhRic6QPJJSLGGppXghDwqBHUJtSX2SgxsqHnkvNT5",
  "key23": "3rvPoeiuUZMWvFaW9FixmWquE5i2AzVEaDctLNx9F9KkDyV1Ttp4YY4iVDA9DqF9URqMm4B5d2jE5drHb3ZsCkzt",
  "key24": "5BA6PuDc9g3Sdi7P3i8VmnqBokH4VtBWobAYL2TD4C5yLygswxkVZv7ReP7SbzCbCUQKaxYT5eEyAEWwWJpGF9wr",
  "key25": "twiSLg39VBN5wNzJYjoBdZYEBJKYoQ2cBos2mg3RYwvAeLBpayWo8x71Sj7jkFS2HTvwWvDjV9GXcVJq9P2H2zr",
  "key26": "3S3fnaAoZhEQfkc1wwRUSZpj66DmxGZqrvqaVRsuxDPMTG11B3mUTEnVyDYBieRmFboUdbSaLojNgFmv4aGWCNkW",
  "key27": "Yd4AUJ96FNQ4NTYWZnvMgGSwwavAsbn5jbKTBoeF5CMqBz7z5WgiHkNmckyrcwyKm5nzLa6bxNTHf9tP6LPRahK",
  "key28": "meEbvj9FXeJyKxW14avmKncmad2KXEeSeSS5h2WZM9qNrQvjRhMVTcJscaWarXJLfYo1ckQvnKXoDrMLi5QgeAr"
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
