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
    "5oXdigJyttVwJFRX1MstAmqv9QB4WFfbFuWnLphcewFMsq7oJpMrENGWmNn46fcUaKgu3kZhCX2mQ8psuMpjtCtH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Qrh9ZVtudNm2fHnzRCtxj84q7BnEPupJCZE4aYkL3F7NvZyQ48uPVZM6fKu4dVM5GErV72UGDy6xNtkzFbijGYv",
  "key1": "66j1deQRvUUgFnLjPJLYibj7j9KABa7fLFBtErLtQAkdGVNHTeSgyo9b2gjDJXPwCMtMXLURRqGw4KTr3qsHfSAz",
  "key2": "2hHq7N7NzSoWZE3gYMMbjFHevqBUnmtP8sCpehXamnjQx5bCnN3Rand66LJmTuRocftZ9iBt9rHuki7yNmYV7NSw",
  "key3": "281aXTLnBMGbbQc6kPMN9WusbfXhqvDuYWJPcv5WBCdsGTQVhpYhntiHr2o8SVm9r6YDbw1VRcWm47HmAVWKp47S",
  "key4": "4qEpKbth3VamZpDS1vrV2JMb9w58X4D2tQuwzxf3wkaA35UAvh1Jj4eSBK3fsdg7EFT4AMP2JivbZqasjzCR4U3i",
  "key5": "29GKWDgzQZd5oSTK8XdMpFsG8JLsFfazMVH9FRt1XNTXaNEMjHyZ4sfn27MW4mR5emLdXVdBxwde19WTssjVJ45H",
  "key6": "2n35VJyYdgsdwcrvgNqnQm4coECbanGoP8gt5aGVEJbHTf9sw1DY73ByzsCyUbbs9iGWTXgcrQKZNd9ykCtYPnd2",
  "key7": "gZ8xumJe1TtHXsXPSCeZZ4pdLBsqD9hrrSKvCTwZTHVtABovgJw4droStJDdatHon6uLZzoJ1N5xJercjLTAtnr",
  "key8": "2TUzBASRwazpMSG4eS7wgyiAg9f7Sz1i3sv4uSeesLkVenSX1a75kPFVkEZfXW13wsESgtjsk129DpcCvNM7Wb37",
  "key9": "cXWeaxanYXfZdqCSZVMyER8EZdeCGSevZzDwL8vF1xL1RYittMHVihkyn6vwhhgZVdmS3CafaHN46yxbVaCjqnt",
  "key10": "3skgLGhi1q3bhDY9LXgDMRA88GwG7MzKEehhU6QWysLmj6hCiBWb7daWawtcJ9hamPBiZVUmvfNWqNubZAfPEBxZ",
  "key11": "3jLEftrbwJ1kkwdxhnTwr5JRdthevAxC62HGeYzXq8s6Nk8QXbKSBzzEUr1gBNEgv2iDsZdaGLj8GQ58d22pDzAf",
  "key12": "4BbbFDNfY5TCZMfRautJEyeQgYofDo5yNGyVYHjrUyYuPpyRzWYUfvexUo5NfHApYKFGuLUfHry7PcF4W8qp5Jts",
  "key13": "3wfou3Jgn1cVHRVAytNBsnhHTgV6triAaZYzJiuEjKiG853QY1gR4TB2fx9TCnTw1vgF7tHQFaPz8cGrRaX2VSEu",
  "key14": "87esUKvNt9qHnDE5yXGyFWMwSWC3QbvYn3BmsxqyRfsaJEMDFT1LKjJ3YcaAASGDhkusEL8q7MrhhVAVEaiVnRQ",
  "key15": "3KxrxQb9kHeMTRuDURfnnaR5gs7RU5sQij3khSDN4hB91DvvmCVTCS8oBTPTmtQQK8NJoVR8he3Vq5kgHFATbv23",
  "key16": "3LrokBCS9Ct2MvTnDemwC59YiHzM5zSxzns5aoNiGSPa3FQbTQNb2RZwSR8CeusqbFUYoDKZsws6iAPFxaoRwkmD",
  "key17": "5DmN9gLPdfnvUNUk1gNfRvUde7WxF5PqeF1U8mmY9eLaFSW9WxmHgs1CQEEKuxsSKmAyEz8sfNDoYvx3dfT3A1wJ",
  "key18": "3UzdgTKtAsjhbPBAYTtEVzrZhQ6EsfxEcicERtx91BprLQ94Y5kqWk9wxr987z3JtxW2FqnaPQXMpsbtdnnuDfjS",
  "key19": "dEYqGoY1sJjj7PU9o2z4tJbsganfx1wZGn19srsNMFYgDn5V4BBhTXaBXxvnZ48p1u7qFhghZKe49myM4gHYZW4",
  "key20": "wTLk9P51JopXryTBJPvMDRJJD2QZXRQNY3ympGJmJtStbjhst5nWrA47p97Vb7NNPdzPVEbSoErp7edFE4M56Go",
  "key21": "4EHoCCmZ9acoQ8cKUyuTMwcywfUK5CDvCXqVrzNkM7SEBE1C6msQyF76Ce92JtUNsrx85RGNFGzNkyzwzXQusZB5",
  "key22": "4Np9USu5nCGo49fPzLr5mtS836rSuDDLFKKbUCrjSrpyzs3BtCrMEGyiwVEJ5aFLXbftmb3MEU62Z8nBiRXnzYPs",
  "key23": "5mYw8Z7jRmZRSKR87FPs7efu2FL1CVopm1zbpTokm2Mi5A4eQW7wnUZqtrEXD2E5EcUfD3fvULgQcLF53jwZzyFf",
  "key24": "N4pMVKYx2bfKUvnUGHMvhXFrMa23TPPxz32aDPGAr24kvNcfCkENc3Q7bio1mXs1FDSQ8GB1knme9axdgjV4bB4"
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
