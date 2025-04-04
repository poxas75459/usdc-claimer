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
    "5mnkfkn9ePYBhKVH4FgMMCnv1vHpXPxiJJQXZoMvFb1YzFVewnZF3MB9XvtNpRsH7KuRPAckaCpCYG3jB5oSp3Zn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hgb9jR5mUjkw69voNVBS8tr23iA9AN9Yiau1iJ31vysAb6knpGYe9qa3eWUgKoVC6rCiUxFgUR1dBkq1KXkCKtf",
  "key1": "2oz4r1NhuATLw2J5G39QhAkrpeBUkEeRbYyy6mcHDfre4YgFBtD97StudUYBczGR6MkCF4yGTqN75KVWjpwGQP5W",
  "key2": "fGXqezr5KbGfoYacH2zwCLSFXHYoPQcZ7CEULsucB1yKiLzgGh7fdXhs4UfuPiozgC9AmvLqfU9HdF2b15Ya6Sr",
  "key3": "62pVbcw74zhNMdkwLpeST2ZsR6dU64U1X7HfpfpSV7yUvhAx2ZBEuqh54po6TonAnZCej1mfCvFVeqnWapxBide1",
  "key4": "244241qMNhy3xSVm1vf3r2ELZmTyzipAXDskYAiGykmbr9BDKtYHgzg4jpjVvBgeqx7UB2DDxv8XauwjF1w2CmEe",
  "key5": "4rKGt77vAh1EzKr5HTRCMocsqKjr5az28Nt9ZavHCwHqJqAPRs45Lfc45UJgrxHctE4rpDeqzKQrna68Xs863rdv",
  "key6": "KaHcQZFv7pJi64epcnXx3orwPaEoCWBNo1NgqYS3v1QkjssrVULsstUN9kqCkEHfgmmf45ZxjkkfgiaiBzQTNKw",
  "key7": "3feBAL8FrNvkFy9wUXUkkm6AKohXgDQMXyhjYBo5ApkYbs7RfXyakP5cznPk2VWXRwnLSPJYnpwdYr1vZZswUSC1",
  "key8": "2SMkcPbUUqfqZnWhyxUuzg7qVMNTw2aFH31kgwaamz2V1qdkWGhY5WCfoq4VK33CXWygQ5HCznckUEQ66BzipDPR",
  "key9": "65TecWYbHKffszkceT3nEgGFHmMrHNgZ52NWTRFwZi753WsFL9FrJ9yEEdJizPJrhR9aJpx8nwABkPKDCo61P1mM",
  "key10": "5sqksaDBYSt8tUXRDFF6WAwpX1FHke64FKDwL57M361UY16g4vwVKk2tMwnxdbFvWz6iVYE5rDUgigNL9uxcDSG2",
  "key11": "5i3ZdLUm3m6EA6poopNkFhZe6xKGZq2XjPZH1RHCGwCBb9NyEHWEnmQJoRN1WJrfAKSmG26tp9gNzWEqUTyPN7Sk",
  "key12": "39Ya1gy2ULvpojTQSRNcwVNTZnLUXLsUiAXMnT5E9QZvbxdVPgaB1Qjx1DokhfsJJcuTnuETLwb24PiYALCWHnR1",
  "key13": "2xh81Gu2RXRAvgxVmbB4sNhXouPfJSp5ghR1anUM8Qfaxqg9Pn8wATm2Kxd4Mr5FfkTwMxbzbaBkRR4NkunZJXsP",
  "key14": "41DsgVTUydNFxvP9Gz6E7k3rGj5kxWf9n1tFZCU3oiuBUeWrRDfc7XTsEo2XVoqq5zHyycGHXodrH9qxKNGqo8xS",
  "key15": "fdT2gNyLVyfdpKbCrSzuxWxgkR1J8rQLdz2pM5XTStgEV6HdhwnvzHV1Z6HSQgsfiTQWzU4XBz8QSpRaBsz1zkj",
  "key16": "3EeYZuTD7imh6dyhVDNN2GnUJ1yF6MdDPh3doemRBLbB45MPxU3YqX3fFUrndvYPNRu4MZrNFk66ge13ygL5Z7tM",
  "key17": "5yd9a4vXJuX7VxeZ5EDgLjd4KCfrFuMzj4PXd9zMgHhQ2wkP2SrPBDhcsw4TCKaPCSuMMy3FfhjndeNwktCvPEUN",
  "key18": "531mHEUuf5VA7QJhMdmQRdpp2hZwHwwMr3BXUpN5ctfeMsoDNtmokRhpH5NmhH4H6UxeienuQDzUxiowTbDgqj1N",
  "key19": "2ThGA8hpGi7uVAHm4uA9MhKa71t19tJJJrVrDfek6wFV93eaeWs27iAepoDKDnFjyQGpwDtC9jjPm29ZkSgajyo2",
  "key20": "4tjKsx1qTP2CEYpFG4EKvT9bk8Y82dd58kq2ffD4ESkaTi84eYjue2uU5Ep8sRCn3izAdivmH93bpEbw7E6UdoJa",
  "key21": "29YRftVh9jjkWXRHnGRQeYPbi14ipvRjPRwLWuWqvbs5N3aEsAohSpoFSejAaBM6A9bjvnfcMWPTy3Ycey7ioVjA",
  "key22": "2Sfb9bgQR3QhJGTzc6mM2M2va8aFHMxWDYx5a8CeBCXYvdVo6NjT9Y58qs8WUkA4be91gHi1EhmCiTWKu4pUfPus",
  "key23": "5x3xMWso6MigJZmViqST91x7oAdDDhca8UUD5ScgAEeD3gHdtu7GTD5SNVPcrUk7wHrJc62PszAFhMYrLeP6naH5",
  "key24": "3hJX6hHp9EJTUXRTVcMmeFXqj2sudFKFZ83J2vggPYez8bLzPs8vbucrxufEj4TnYTHy8cxDezh2LaAi7E1dTC6v",
  "key25": "qqRqQ4UwCCbzHy8Mid9Dvf7wp4Sd7yDcNENw2qrcJttedcntjbbTaESbmUyWnXEPUdzD1pD8qpAxmWwjXjuE79y",
  "key26": "4CFj8Gd2ssZy1pYWNAXi4Ct4LWaSx4Xx4Y8KTNrw9x6BzvL3sFU8ei22kBuS1Bg4GQsAm8kQA1CbLkQPdANeShnE",
  "key27": "36jEDbG7x3wCS7uajyXb1dZVru1Vo2gRQbkhd8Z3C1TseaVJi2DtZR5Z2bfTUXnS8UUx7XbmSEDCy8MnyvVzRJB6"
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
