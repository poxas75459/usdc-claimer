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
    "2SNbD5gNt59yUNcDc7mKeHJ841hArkD1YgtuK8Z3gJisZtctwNqfZYoftu76CXGBvZKysaU7ajmwk5bTJeX9JH71"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KKT5v6ES8c3XbcBG1CYwyur7A1MLHW8H3mwT64DuDSfH4uSVuGr3MX5KVnA6UBLqLwQQeR4zoXsg62EpEcnRwtT",
  "key1": "2BMjVtMzgTRCKZLoFhjs9xUdkAGHuxPsyGWjuoZwSJU667DGWkncU5Yk2mSEou9hDgswDtALbbvboVmm6eV3K8fZ",
  "key2": "AWv4QDX62Uq46c1kw5StGjKqNiDGcsaWyqtqyZpCo3Kds5UL2x6uVJHVoG5VSdQdhS6ZWZ8wKs5oocdDJVrVFMq",
  "key3": "3Zicdsi99RvUTJWbZHzMRzBBjpYFZbvAgE1WLMeoKMV99NA7R5AqfcS5ZkgBMutF84xX4PqF53tG4ESNMhCawHXU",
  "key4": "2gMLC7GqFSr1sWRuFHNxVPt46Y48Wqz2uFkK1LU29a1TeEoee38jg4RHAjFQDCEtEd3iGDtExGSBys3vRZvxoPLT",
  "key5": "3KGuXedtpmUegfUsiaoG56ns7k1sXDsf6M1LCr9mxMWrX6eauwcZCmQsYUvUQK7FnMHz9wEJhCMYg3K3Ka1tgP11",
  "key6": "2wMVDRe7t8G1AdYHD4qRUL2T7rttkhX6q5muFkuFzJzLfCQ7HRbrNWRW3FGb8SHrtep6qH2NTbhfF1ugP9t5Y33h",
  "key7": "24sf2Bv1XhFbC2bbgrZKuMAPWZDckRLZ7dLDsoxhJxdyyrQxrmsq22T8KvXJD8THGYFEsewR5nWy5xGarPUV7b6X",
  "key8": "nyuV4GEk4fz43aENy1k5hVJoT3QKYuF2cYmSbtE4QWxTWbgeqQ3JtiXXBfgjbRZXGxsDG9sNQjjxsoNLTgzhniu",
  "key9": "5zbwossLnNomg4Q2L4FUZPjekzGUhZjK7G3kHrJCgbi8sHhahkC2pAGPt4YSLJkV79buWk1voBiNepcuWUVzyuwp",
  "key10": "2ki27fdXfzd2qi7P4PoKHc9oyrsr5st3NMANxdGkCuKuLcQWEJ9TaDLSvcpUZFc9xKLqm3AH5nmCDF1H6nNsGWMj",
  "key11": "4mMovDidp24gxdhP7CPfkrKFrZPt9sV172GncK8854mHMysEUzH8eSYR8upDNH21EGTgMAu6vvX21KNttpKfMUFQ",
  "key12": "3KAhzZ7rdCYNLPRcxJBvize879DaoW4ZgjZ8zf6J7ujMjYrokVbVn4iZc6vq6MjF9fgp5XyLmN3iaWmSyNVGyM6Y",
  "key13": "4EwSpqbdYkMSLYnEvu8SbdWkXUHqtYq8grVB1eFSSyitnjfp9WKJ1y3sg8cUCpyyzd8PCaA6M3SP7rVUVA6vsnGM",
  "key14": "5CH3kJYtHsguRDzYRgm7ZkHMhgGfHX9X5VhzWf4LVSwsjT3KHr2nPmd176mrtZ765ru6uheDkj7b9wGMBwzZjNa7",
  "key15": "4GYPmoUYm34HhmsDFezWW6oRjNyWUfacaAxZ3VgrL2Qr5kY1izZuKtfsNCwyKrm4equZLqAdTdcuDufBsMZuTKQ6",
  "key16": "3FJrhAXDrYonxaNnNKzqHFDHa7oDyMF5i8z6pBJaNZN62iNY8GJetF35LfxCeseFfFUsBCFyRhB7xMTaUxSmWe3r",
  "key17": "23RZWuW5baL9znr4gQWerVxBtCykviFUCdPCLAeinC7osJoVXES4cJTpM3PKaiptCjWiJYdRrH166oaq7FsV2uuX",
  "key18": "4tcQadDPapg9sRiAaqvynLoXHnQUTDMWRyWe5wpLGjSLyHaKRZExBfJWYDqxKQD9w5nQV7QWEJKK11bEwHEQHPKn",
  "key19": "5omw9w3seRrYAXqynLNL68HbcrwK3KLTMx56sPHq6P2BQPnBQ1vZ8iiPS7CAYqTdaqotzu1TxViHhShQV3DwANPj",
  "key20": "5HSAPAvxciZD1iaWxWhEWBnRgWtryVTfMU4qf3D3E5Eg7an1o2iAnxrTaHJtoQxmcB1xrVw2ACjWHdHZoPydzWyH",
  "key21": "244L1yJ28Q5W3D8c5R6kP4KCtmGTue3bCB2XeNKDD7H7NbKBDte8wUGk4ep56GMS3f1PSuQ2rTfNNje4by8gbQdE",
  "key22": "2KSgpUQoytY2PST5U2DSYumdWQyn78T5k3p5b9AjcuLVG25thisSkP2KMnSR3x9M8ukB7P6UKkTwXPm5bK4RVmp9",
  "key23": "4LJjrxSS83pvkJoeJJaLnJbaaFN3EVt9DhiiyfrawTjkabUDLyGfofjR8StAVJnoMT5v8UpDTp1ioVXXKGRwvmu7",
  "key24": "y3c55u21dX3TPAXbRxYUfP3qsNJgdeqZuKR7xrAgjcEt5exYeTU2jARPuBW4pnajFMsoioQuTqJPyWdKZy1vNKG",
  "key25": "Hy5xMKHQMaykmLTACQEbtdL1pM2gxa6cCD8sdNMBNPz32yzK1MSaT9zc8WNFjdn9gSrgTjYja9HjXiPhxMXrWTR",
  "key26": "8GCrq7vac5vVgcHaDDk5uL4Rp3ivBEvtrA3paoU9m5hXVwAzbTrgPdBi6V1h5fsN3iLoafvQBP6TypxrSCd83f4",
  "key27": "SZYUrBXY752UCdQ6qNfXsch98Vtw6pZcUzKhKyXs7h1pGkF4EcKiALN9cp1deqtmDSqmzSmcFNeKTPiHU8DRMaK",
  "key28": "3ftiJ6qb4XQkV1C2Hcuhh4gtrzqzjDBEiwZktr8FR4KwZJGhqMTsJXfjRH5Vn7ru1qWPR68dqFRuQ7dtVdSHRXAp",
  "key29": "rMP4zyNgVir6PuYEJrZV5j7tXC8uPXscmcop4vDW4xJGVc78BFPB7sjVDWwoBW3cJQ378AXKzZV5dTBsjhZfB9m",
  "key30": "d94fV8PfnL4ym3VqyqXRJgNfUpxcr2bGgrGKt2Xj5JUyk9q32W9A8bnDm9QAuXhEALfeYbPfHxQn8jwnXc65Ecm",
  "key31": "4NQmDoN7AB7LdVq9sFPbxUTgLjGpRyvEfQLrsVajGTezJmCS3e29VT3jvBPFB1Sy6BBwCakb9ejqsB7cgYUbg8hU",
  "key32": "5vvgvsSjfbTfQJxzedd6f5ogKGneE6417XiLboNRwh34o6sq7GHpVioyvQ9zPjTJv1yPZqCwJ3oC7eRXoZ7ywtQw",
  "key33": "4vC1PL15mbgFuNL8vfKNbN6gGRnFrtca3VkyzcTvEw3CR5F5eZ16wsY3Fep7sZ2zrGYJQm9pxmLAk8TNo2C7nJKA",
  "key34": "5J4MajUicWjZVUirvzeKanJuu4Y9HxFDoCZig11cS25Z6Nnt6GsPZp61avXmurh5M7JPEw27jZDyAdLXucsbK7Wc",
  "key35": "3AEiztKctGJe8GXSFcUn3r13ayPCuig9XeqDy9Cd4TLvobbbc2eVPT5Sf8PyL2LBUip6eWbM22V6gJNCVyAZY191",
  "key36": "PwS1BkHv25ew4MmSNCWgEhjNsecun4w1vWbs6hDChcDUweN5BSMSs4g7m4Qr2sHALqryyxKExk4fbNRxdT2mmvn",
  "key37": "5z1KoJHxsbPuiPECQoQhpNbNgBCLnvGoGKfYmPK5dtTHcW7MokmzJn5TTHQuwW6jYkPndcacqBBvFHwE5B81pUgS",
  "key38": "giefQbewzbe2sYRBAHbfcpZVtjvRtcVyMDg1iZ1nkZEohf88cSG9mNrQNRhrUnY8MaAo6EreyhJJZKaN1cy8S6s",
  "key39": "2u4P4CZ37VLq8VHXNri6imF91uR5tSCNGFNUnWLixg5XFqxeXxZ5K4yZ6qPofE97B6h62LYGnzwygc6cZJdYGpmw",
  "key40": "3TEstohpMNYc9a28qRGiEvkeZDMa72eKjni3pq7qctDkbhUVTKcXJv4bLVEdJvuiSEnPnVxTxoik1JGwyWr1pgm8",
  "key41": "47T8oRDwz1hXweVSf87e1BidTvKBQnoMZZmcxayd8JEtziD3xEHgHWsVccoQLkx7Zwdhsv7mEwqEvt6oWkUdWAiV",
  "key42": "4rBdF4xiGwVoTQtGcV5x9JNJeQbj6XowK9LB6Cam9HFUVNXp68yzzmdhhRMb12TZhXuqZgNxXKPYfkrUGzc5kFNV",
  "key43": "518YiMNdERKRTk4Ry61YCnE2Nijvc7S2V9pSAiCYMdwnXArdYGAGfyPezy77UNWyB6XA6V8D6dRpFYPSFsDQSARW",
  "key44": "md8pnjGUDp4yDE9KW1VCdAC3PC7JkTXmk9PQ4cjTYkT5LtJQeuqALVeZ9P6RbooCBuW7CAAvqX27mUgeggHRPHr",
  "key45": "3VjaVw92CDVccY6nb7tjxZyxFEoxAhEuGmmp5pbmRqd7DPD44xZLbEFYQhifEEKp2p8ga11EFQuGgHkhUEeuCLF8",
  "key46": "3WjX4Dop6JpHkaqZcgLqFzGgnPHsitpoVridmVMNuPatQ68gRRGUum1reTQZbLXPaokJipbg2CDbexFGEWDwg8xf",
  "key47": "4ftu9cKxRasHHchAJ5DHpQWtCHbFSTSHv7W6UUndaUUzuUwRiaXLCC3kKNmWe8NexJaqzSzDVD6P6o7M6qyR1euJ",
  "key48": "2pvMaFL5hvsxSiA474eFhMnJDBzjfdnprtqyVz2Y8Yapyyvi5HvpbRG4cCdA5YCnh3LVvf8XDYj54hBocreBoLXT"
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
