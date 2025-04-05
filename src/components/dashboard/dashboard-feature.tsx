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
    "XnbsmgrNSQvNiurhEdtJZoWet1zNHJnUXrF9J61nNaMJvSkK1PVEChwPqzQk6w551MYRtJNj63NR3R2CLFgPmc2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5irjmerYKpVeQ6DAdjK5NtuvUB3bXx7EotFXsvU7Qwv6BDsrNM9PZhVh9fZoH3Pfrg6pd4bGHir9WjNdKabJbFhs",
  "key1": "53UM89BZBPmcDvZxHhghHiUpNShf9o4ZRdfWdkMP5ZFT1AjtUnM85sd2pJJFc7GzBMxLGDVWYdZv25yBhiGL7bav",
  "key2": "3t6WQEnvNwLpzUFUyB6xQ1KkEqFKZPoMaEgsaT5i7692LRB4JGVH3DHbs1oLncJAYq66hRJUWLwDqDPTUocY3B42",
  "key3": "2TJDQWUTFrx7yVMsH7c1JM6tdvZvhfepCEc1aHJ8kTU3EFgaibh5gvj37bn78k8pu2G2JbMeVBkjseaey9P4a1Kd",
  "key4": "ggaMnY6EZVi99r4omA5buUY7hUpZ7o9vVbg93Hr7nSVptr31i7Sp7TxFTQ5YypfbZHCXNdSdwFN5EYfwToWLRAG",
  "key5": "BbbjSKQNzdXpwERFTX4KAmYfjcFUtoHQf9YK5jp9TB5tTbh6ZVUJP2GWMcLGc61dWNBgPsipw7kLFGjmzW6CS75",
  "key6": "CkQwGrn1JjiXxQNAPo9uT5PYmpxC9idt3o4tC8toaKk2F6WtQ8j3LBnSuqyGL8Nj551W9oqhc425LD7t59ZsjzA",
  "key7": "3e3voFRjnvJNcSXFa4UJtRTxH7d9UV3XYAtwijtfBcAX2TkVRJG2NeT7WH9CDKmwtH2f7MrCTvf1rNZqRspYiHkP",
  "key8": "3wMHQDPa764WbQSqauLX63Y9KaMSAmW5KPsQsu2ruc8hBmSnaA32UqvL78M1S5jKBSPti8M1FkuWgUr1NMfP8K9f",
  "key9": "4AaTdC3iB5DsVSQW7tbY6ctsEd5f2XEdXPRxDSbHEp8mVQom5hK5gjyZuVNFpzwCvqgPWULc5By8mjWexffJXDST",
  "key10": "2EgpZb8b6opMsZ29c7ZEXGNdi67ANEjRRWFMYPGvAs66rG24QeBrFKa3e7ngsxRqXksteKkX37yL84aaVLttNPH",
  "key11": "4WnANv8P97gL1X4jY3VTF5vhPtso6pk9j5TNTt74viV3bkM2TeWMfgzqa8zhGRj6T52tiZnquFGpsxK4hTKmt89",
  "key12": "2cU2KWGRYe3RR5AS92WyKkir4g8PMsDE6V7bjhhHvrLU21kg9Sj12TpPahuVsuSTup6MEdUjtxwW6BQCMDc1xg4",
  "key13": "66kpEWNRKCNiboEr2HoKmVV5D2BBWzv6M276uEV5UPze3XmMCwkKktE1zMkTVnkJEDNjEUi2U3o8GNU3okGm8eQV",
  "key14": "2bJmghWi2T8YivuQ33yKij3SGnqMjr5sJAZK1kx2Kg8KkVkMZWcJaCThJaRM3evuZAycbCwDuarRa2eYtxNJzp4y",
  "key15": "527Wsb5ksH4Fkq5oWfMZhuwQtaZDmUSwSatzzworX7a9tjVsxp4GSfJwZkwFBK6BZqMycwav6QdRhzDgFFeqcFxL",
  "key16": "2qfGFyxEoDQYT9UkntuJmgnb33Dc5WXjx7uZi188mL98jed5eamcFDmowXirGYma8pjRVQQHJP7cqbH67X7aka9P",
  "key17": "2AoDW3wYoBkMvisSjHka2Qh9r86Gui3ASy12vXhrBPmu8rnWftn7ntR9bTWJR3GrW2rx561eRoBqPKDXvv4kWibZ",
  "key18": "5Hv549u5S154HKzGjvBWXMfi7uuTcEyLoY6fxZsGeF5RZGWV89VrmLp8Lo9274Nt5CpEkxUhESmHghNFx3FhZqPh",
  "key19": "4ftcPb8YEhZi1EugRdwREiySfm355uUNczxe4cEoDySVfiNaaf7hy4Sg5FnuScKVaAtFBCzkYtX6DrxdmTGHp4UA",
  "key20": "62qN5ZKsHjmzAdx3FPXVmfArjvytgskGYTHMfgeY9TbXSQ8RqnFk2hBy1hHU8CpzsHh9sYcmpRsGc8hkbp4fHMKV",
  "key21": "ufpJxhDbHDdD8vSmzhEKgtY6yi7hakUPXR4Mxenjsp5VMeCNSrjWqnbLcnDjPSndrkzBzAsCquHLBKr8scW3Fsj",
  "key22": "4kEGTA9cizhL9Re62UxmmBgXd4RTjCPhPHf96eiFaWK7EBGaXUpQir95TSGdfr9gYWhBhKJwaLzauLZt9VDdUZS3",
  "key23": "599mffmTEvPbqvLukiWQUXBmHddPDcWCFJ5K8jY3162QTSa7eWDYUxf3eEd4hwpzZRdxrtbeTeu8jeBAQrovoZKt",
  "key24": "TQsrPT6aBGMD4jL92k6UcupnanJx9e6qGe6LfpgLhTxcGSLtAEJRqj9h4ACXdTg2NAQpnK7Q2eUZs9fKzPEpmVB",
  "key25": "36ZQzxY86Br6BrZgK4yzqUQ25wn79aQUYmGiWbxs7LqLwfpyDsVFFth58mcVRmUPY85CchshayAjEVcLn3aBThSq"
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
