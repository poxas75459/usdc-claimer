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
    "5bF9MNKdBRAWARYt14c154f3GzGbGa2UwgmHjL6NqSorBh734YDotdRReCDwuW55Xoy1ujGBRWXgXJPB5sU84HN1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wJvXyp14PUecrT1kUxLnRfCYj5cucuXgu5vb7XrU3QPMrsDaD5E8iagK2CjQ7sn49dV1FJe5zCdd8zqFknbfij",
  "key1": "nuva5Q8DEikaiG3ejX9XApbi2Q9B4iTxfE2gFS8Vk5JnZfkWyA8fpiQ39HoEibPgdmDgMqmhBhXVa8bJfvh9vcE",
  "key2": "35JpL2Er45HrNuJWdWvtiG3Z5NLztHxq4zpKYK5hzfiHJY2B6bSPapEv9S4CZ829iBBNuNKpHmAUMabArhJUQujJ",
  "key3": "2wKVy6S7tZc6whoSKT6BaAcM3aMfMb1EbjhHQTAQEMbLhRhGeJ5bwvhzttMQbjWBXGDPiHUL7yWdEFrNC67Rpit4",
  "key4": "v9k9Fe63mFJmum9kKwL1ma9beJt2Ynp9zgLeCevH49QXeXAQbPuYown3UgfR4HofCDfvMsaCL4qcoYkWD4tYkCz",
  "key5": "4WNcwRL8DnSKRcR7aiH58KCvE7N3qtNcsHQRehc2uKCdvtW1JFBWdaxoytewWC3PxXkjbUwbr9GbF2wGuACKaTV7",
  "key6": "4NwpLmZcUy7vn92PG5hG7sTg5DikeZDtzHFbUKL415c7PM1PwmwHaFpMtiNA8qLCiFPqbJLr58i4UPLbXRBNxkr8",
  "key7": "5cUTLyvLbujP5zxK3tcrvpSyrVsUWcga721x8XquiWpp2bFumFn4xAm1DCqmhS5M3BqRnX6rcAMBK7cPVibj5Ecm",
  "key8": "1uu7EVqvAmPxgYWMmkjvC6Ubtfu2z8FyMgaMeY8xSaHS8mYUpkEJraFrf1RtYGcmWyokohE75dCArzgDS2RSz9a",
  "key9": "2SSaUbjmMZ6nxT2Bg3VkpPp2ZQVHtTkEKLM5o8sJpJsGKgmY4Kp2sqEcY4nDrmbu9YjYCaCPKET4AWBU9qHhhZgi",
  "key10": "33aXc9AxwApoBPTRaYxSgCZSkmRrbPWG1E3Hm78KKtw8g966ZvK8t9njbDoHybJ2ah2x6gyWW4FnkjtQ5vmfEV3Q",
  "key11": "5QastZ4JeQHceJ6VJwEL4K9NtVsJEgsb4oTqGXPhtzJgyunvQ8dzzHcfaPo4nGn2tF3YGjVA4YwnSHm8CDoL8Jjb",
  "key12": "26Cbx9ZyZhz2sTwpHbjzLc412Fy3GyE973j2pNwM5f7FJPLBZDqAE7kERMTpk9Q3fbbnLPsJWC1kJuyqFAs7QbqL",
  "key13": "3yG3C64bQ6CdNo5Ld6udf6a563fTB34wuJyiQbsnb8gm9u79M4dsbfJuaQ5vRCZmPKqQ5g4c2gUTLRLXFA9nP4yc",
  "key14": "3aUoyBHj9sHAD7n3aWUkkswJZn8DSbCPeyzD3bPH26f8pVjVZMajG16zCcmZTQQp5FWe36xtn4DVWWvjJ2mv6MJL",
  "key15": "5zHowGAw8pAGraeADvJxWsSbvQ1FzSK8s3umHv1J1qKXPVhQ7PQYcAQyA79ePmpPfpGUrQCvpErK98oGzAABGW12",
  "key16": "46mpVoAuXZFQ5k415xsWwmsbUb6BxsTRjprztiFc6DBYycZzGrgeACZerZiJJBZup6m2yBCvF4hKnn8Kxb5vBEyE",
  "key17": "3JsTqhoY3m3WtsUVSySTZxrES71oqyodKRb7HR1qNdrFiYf48Xq9a2H7YGL58m3KY98dTGPu1RnoawxW7chYzLrJ",
  "key18": "4exQiSYmwfKFK6VsNutzNUGjezmjoWXiH1MdEX49nEn1ZiexyT4U2FfHkcpmyUtJaUBHZtUnMgwv4LWDQbZQqv2V",
  "key19": "3Bq5gG6hRUQXiP7Pjz2rtmcY2Ss3JLg6TTYyuncu9aJnUcboq11CNLLh6t2Yi2fvYC3AftH58jrTHbe4aGMobGDa",
  "key20": "3CiC8wWoD1Cus1Y11dhYNPzEkRE3idsLN2oKxTTE9dEFmTrmnzgv4AjGWAcVSCYWKPYKXEqzxhpRhF39HzC4fs94",
  "key21": "2RTsow8CRfzfX2C7g9PVy1Si7sXkrria5TprscyKrLBdbXkhWpSRb3g7W7ixYiu5GrJCnJJ4W693riLb9FBXK22u",
  "key22": "5DqpTPTZ2o8gze8YBVt445XRJvu9WNQo4s41U6r43J32PtNbB6H1NBHdDn8dj97tcit4wVjDVFFwjE4okppM9NKE",
  "key23": "2zuGUsc7C7PpyZAk13ZrBQXira15EoUjpFQ7P5duFZnJnfAeuaEueVvAE54rq9oRRNQ5gwUoBZu7hQCnW82vyPXZ",
  "key24": "kQN9ZuQe3m1pJDuhAe9SgBp46abR1RsSJfTZTJ8cpXJdKijL88E9Xowsxqmt7R8XU96XCavyqdyWwhBtKUe1Ghj",
  "key25": "3CpKtHRabDBfGxtB6d7rGFi811JgmTYyVVijmemKBqfZ3jAe8hqRm2mvYp4oKvNp1DSXixNpJkfHs4QHFLdAKHhA",
  "key26": "3ux4zJKG5953seJ7smN88bcYs1cqPq8jVrifkcpFY3NMNJNdWdMMT1AJiZUunM1rtkRYHdjzgRhB8rbregYtDWA7",
  "key27": "3SRqq1VdgiwayXLWAw2BU7F8CGiUuq24K7uCzWwttG1bhjZUotaBsHV8gcm4MmgRPsvtkdkbEyXS72QpY7vC6ujd",
  "key28": "5f14iQ3rE2nfjf2VNmUkHEvgWtPgihvaZHemiYJuZNRbUENAa3uzSg5p1U1MRbfUxkYCY1P4EFesr7WgP8oQS8fd",
  "key29": "b7AZ6iCqXWdVHQqE2hpkPtCLYhFtrs3jq2o5pQgiAG7jzuTsgVPPFEwHRHteq46EfJVC9nbf1tA7K6KGEecLm5j",
  "key30": "3NoYRNRXKZu5fgFU5iVrqik5pnzzoxcT3bquCeiLoBmB5nGeBpTcwC3s3BoPnAoDDnAxtDpdfXk94caYQjLt8imH",
  "key31": "5XJvjN2Rs3uanubecSu6t8ataN5LCNmErTvdUWj618o3wjuvqt3NpsMphgHYLzCni2kamggy6p6qhBmFbNPifUx5",
  "key32": "qMaPWCGB9QW8NVYaJ7y8C4tntZDV9GL2kHiwPfE8khhpqqGvf45raeJoiRzzSGUsumBbgj4HCvpNEWhDBmFn2gt",
  "key33": "63mvzz2jPyegay5uqLtCBnMEybLAyLt1T4r9azS3Fwxa7vKNyA8dMdUBYyK9Gc6n914ieZRBLK1YwQRcg2EXwMiG",
  "key34": "XsTmP4bDbCuiu7vUUR2Q2eSMKWWZgtsxukKd3B2fgEmQjzyL7gjw2Vr1NSNZ8KesYZGfxczLhvrXi1YUyXKQyBy"
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
