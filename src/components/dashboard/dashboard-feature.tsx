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
    "niHJ2GEHC3NiCp16fWM5A8WRQudoqDYWe2m13dEzT7zbDhtkaspMrfeDmRgpLQyhiHoQCGpNini7ZSpxfJWb1Fc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y2tdiwbDLmov87DizTaPwHjYKmxpEXGVVd59eRa7wbF7ucj5PFijL1Xw7dyqr3MMS6JhBpkQWPDvMTsAyREQv4Y",
  "key1": "eqhxZyfd5KaaRf6yPqv4oWkxak83WM7P7iycijRJgkB1iryd9wHwb5CBfAwY5qsWUtBsM1GrGoxxebZ8Jfqm38s",
  "key2": "2ZxuEQeece2VUZxKJrX8fQY9jstVhN1keavcAdqJNninRVVsdpuUfCwEUfPnw2WqRPKRNHkYPEVGbCqafVvtYjfm",
  "key3": "2tkbXc3Lkkqsuo84byeouDSfzgpZWJaaR9KfaUMEjrgmri7dcrmUw4PHaawoVTzxwgNy3drVXS77HnVkvcBT1oC8",
  "key4": "39Y3bmPaSje3pkkFk7hARuGiBt6WA1mcyYtbLUVRoChJptzA4ZCGfZB1irr8eAKRsJyroAPGqCSDkaFsrbLhgvY4",
  "key5": "pR3L1jmkXQHvXuyamszw444gwNfrLSQSj34ZrvM3P3vyQUN8MUbzECmnz5FuBjVWjWCwWhq7tbsgaJJ1ogGsizn",
  "key6": "3nZWvc9CuAjJN4gMkhBAxxsZc52Zip6Jfepbz7susEJ3bkyLAofJHjt7P9ztbUfJQYWfz4i3GN92H6K7SVYWYqMw",
  "key7": "2r1Bf3c3GrXcUWzc2ZBqCXe39R6sYkKWv1k3iXXBydiP8jtA6yWnwztmZgYrVmc6kUS8DAdxfYCJa5N6AFxkpLQh",
  "key8": "mB6NwzakMUbGbXqFk1YNbQYhmiKt9HsCNWCRGD74oxKoeSd7descq1859zkg9aHWBJimxjbhS5mVH6PiGcjFpNh",
  "key9": "4E3gwLJYD3E3HjZmdSrh7MjE2HTqeBWZT5tya7axmEsrtzpvsVU9R61sbJnPCxxvW3p7iF4S7MnpnJrcE9QxKScT",
  "key10": "2NUVUyzXLxBq6C4cYzoFsFRrYS8cuZaANqRUooQJFCHQMyKeiHvCJZHfHbAx4UpCfREuiGeE1dgunWB8ibUN1vs4",
  "key11": "GH9uCavv7ahY5fYuZGugHCXMFpNjPB94Y8neBFpJYLpoJqKxs4KmrtrSR4KDk6e3TpNqfpnKQvvXsNBZTAQoy2k",
  "key12": "47tM6nQxfT2eyAamgcLdUmMmyfdsDDcbWHg1yW8Cf7ZPUt2HnFH9iw7EBHHp1edVsjB2egiXK1T22hf83ZXHnRzR",
  "key13": "4EtWHhQuUVbX7xjp3ipUtPhfErnFHqiMEg5MtgBcGgV23r7svNTXB3snyatQAVV4USbt2gLw9JZKY51Ykqzgr44A",
  "key14": "64wg7pW1PwxCTZ9DfuAxmHc6xWfgdyVWMSdeWULbzZ2fSukAoL7eqph2idK1D71caVDxraEpDoywXrxkEFFZ2bgm",
  "key15": "i4UxAQPD2KMgJdp1hREHU4XRqsjbmrX4TK4eeMj2aQsfDrBmQZWEs8TQnNAoabtg5eLQczhRL2JtAz4UBzhumYz",
  "key16": "5XriF8V9vFemnXEEMFtqDALdugaJV4hBqu9C4QtVNUGJiUZtxiFBuHtUJCYAsys6t4QPzna3cdSw2zRQpxmfUHts",
  "key17": "PEDDD2vPxpGdmVFk4XZVm6rGmKg397GwtSRydTVRHv69hbqDqwqjWoV3NDrpydpHHqrTfFKEhfBAywmqYKQ16un",
  "key18": "2fWCbUCEhKSGTnEumtEDYMQakA1VMUrmnK2NyC9qqZ8cMETSRSdh3dALdmdsWER8cgcKPDnhtp9LeDRzeU9FnUyN",
  "key19": "LVdjmKAEjRCnHBkE2L6ZsSkdEfufDwfv1pajVyrq8PPT12VKdPvD86jkyeb7XvrD1B8QdwW8FrGmEhbwCr7fDxS",
  "key20": "4aSyZdhuTAM16sBbmVFTNYHsnnQoZ4JHA69kNuAhLyiEhqFaFugiWhfGphBaFq95yNA6swsbUpHVjV5ws47yMUJa",
  "key21": "2hYhH2qWWAwPJX3mT5hvhpECd57H3GtLEGKnVjYiwfCkPPJgjHquwpKVhTnnM5kRCDCgmDJuyDw385ptMU29KPwi",
  "key22": "D5DSqRt5rccvcWBLJREW9XECzgA7aXbn4nXhd2t9ocjXB8iuTbdX9tEJ6nG8wiGAbx9iLjbLJx5Aio6bhpcR4ic",
  "key23": "2U7a2TwYWojtCFXoAMZ1fNLmfA1wihSMbuZBsyGeUzzkZo5jVSgfPnQXENVNoGcXBRq76HtvLVQUD2dACWqzLETW",
  "key24": "66DZZYtc8oqQf4HBuQxw2KnLuiQK15iR9sRGfQ7NYh1355yc7doCCtyMbk5hB8YxscYkYEq2DHFjRDr1o1aDCKCf",
  "key25": "TiCsdDvfPCxkBvhY1RZqfCsH8mPHciVesJsTYDZeBcNBTE5zghdcQi8grizTFnhS12TfDwwZ42AJh5665BLpapL"
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
