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
    "2cattpmzjMU4JwwQhMPYviqXYZdbNk4y6gy5haiMVmHobqxvhaDUzwr3PbX9knLEzGKixh5iXWEmNf1dNcBEohNx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UT8id3fbYVSbRUYETYm1Yzayd4BsucU5qG7ixvJFXcAESzFdDNc449WbvzFi3GZnt7PgTQEoxdWU7S3UBxsMuig",
  "key1": "4RkDt1KBr1vMEAKyhxvZctdYqRjPBs9q6LF65WGDCqg98sRPJjMaJjyZ6mwtiGFgEzw7yjJkuUssxWEr716vzoQP",
  "key2": "4TvS1B4e9ri6ioWmcVVDrFe4C6XG5rNnR4BWU71jeM5N2vUVmc8QPKjxuvdXBsC8ERfrKr8miPdQqwAq3cj456BM",
  "key3": "5hXM8meWMuNXnEe1X6EEi3Coc5CbD8bhuUUToVkBUFze5kg1YZC2Ncd7rPbjvNGHYW5aQavAqvCcGZpvBzCh4T8",
  "key4": "r1u94H1wzdUzEzmg6zUSSvEDTQsMCn1AnkYcv5mZrZHmVzrimwZQL3PoegWRzaUiTsbQgdoVC2nB4TzinjTbpAp",
  "key5": "3JySeNHEDaPUnWhNYPChTdoCraxsbEPQkFq3mc68CZ5Nh6Jr8PBXqT8nfRCnMEdAhfXbMUQA13i9Sn5ccaobQxdm",
  "key6": "5Ddd6xiBTj3bUsZJy6E9GG2pH3ZoAdwpc64nBALR5S8jRYhqFcHA9pUFinorhTkawDL3yKbAFBw3dv1yuJ1HqnAH",
  "key7": "4d3HzEDhyeL1GfWxrAVHezhpWcsJVDQhZP7aC3qnmtyZHLPJP9ovbnww3SkXycUyQfRFcrNhC5gnYX1EBZCRTDm1",
  "key8": "4s8iSrarsfvYUbiswduLgfxUu6LXvK8oGmeQRirGJkWroFHizqm4NK5ckbXDL1HnHQWhnebuo3ouv1pHz7uGRXz5",
  "key9": "2TYUdJmiYi434ZEQk7ui4KobXS414d48x1DsGrWqJicdidd8khNFMUx9L4sDyQSNQeEu9SbXwWhxuag7dzi9JHEc",
  "key10": "3hBF3XXctK4ySZ1wGeLDTcMNG3MHmvGpjWm6WgYJBQB3VrxYo1FS2qhuPSyr1aunxdRrbLTyA7rJ2KJAffpTdSfr",
  "key11": "5apNcAKQrEaW8WkVFGD5q1DpDCXfGdRg1P1cdyaBZJd9k7Q33dbPQXqAiSPN6FZp3uGbStqkJPrxebpuHSUz9cUU",
  "key12": "3FKrG6WVQb1UtLRXW3i4AKFdZ8Sc9npfjNdgRvtcRJ1nyTPxjtDkLFFsWvG24Vs41zXaCGRDgbbrgYptDWuKFKev",
  "key13": "33ZLyv2ik5MVXjcrY5m9DQAwkQ1vWazqYx4LZzjS9PDfTPwDgUThRWVKcRSpuTghdkTKB7wcFWsnwEEVy1G4CCJx",
  "key14": "2YTA4qnpXavBtBCyoeXi4De9jXVJMX9PLJ7onzREJHDzAiyVJsmNoxBL7MrRRV76nuCZvB3vpcPQn55eH5LNBzA3",
  "key15": "35MHirFu2uVV4c36zwRTznWAjnhDEFqynGecMLhphM5YHpcQoRx76NYSDdbwS7TW8tmUzU6mdixo5kY7Qr4QZQC3",
  "key16": "5aX1uzPrPEM4gNguMdPL2xs9rD2vYUtXjc9PZT3FuQioW3CpUjiGqKtirwCbUphjTUBLoTpoEkr2Yoa616QRrBp4",
  "key17": "3L7zS5y7juaQyzfrmv7CqxkuyZDAoLECKPNBgfL6wzX3k124yyxpQpSZCsCWvkFPEMvLYPfbpT7KdRMtY7K9tWMP",
  "key18": "2u3C1WB3WdJtaGKHzzYqYsVv9HgPrgiWopBpyUysKc3BDfWeAYY6BNHyUxadHxd92w27gfh12LMyV8o7biqa6RJM",
  "key19": "5qu8hraCwDSowMHCGcXBTEh3c7uv1H7Dq9wsNung87zgaqZmAWkgWp1FWW6Yn9tWWeGsycpP9cJBr2cAfUW5iuTe",
  "key20": "56UU1VUeZ2SKwcuEk4Bifrjdg7hrpC1yRd3CksTisAfKfYjccXFzbzgUaRdGKsY3qkRP3ANzz8QcnuDAu1YM11wv",
  "key21": "4A9DfFYtfX77VRoWDAw9sHzEAZ9qYpY29jUdVpoofzZeofYmFLAX5KEbLH5duQBMuTygbTfHrCG5ZcpcmacFxRie",
  "key22": "yCReibs9AndiCy4gUXa48Z3xHP3NxnZexgiemLVww3jHgNaHVkKrHKeunMaqAnYgMMCeqksrFFjJVPcqLNceN6y",
  "key23": "5nfP7SSBXad1usnFZ7AH4MFEC45SLjKUUsovQakuSYxMLGwUJWm6G2AZJP4uvtJPHZM514MfSjTqKnJ5XTHdqTLY",
  "key24": "4oQqpzMSXBwj6ESXB6snkHskn3Pd2SWzKUyjdK5UESyNheeDQ6VqsP6Fjyjg7oCiRdFngV64HKkNvUo4Xho4PY8A",
  "key25": "3JjyvgfRBuJq6aKCHJZrEvbc7eSQeUBGph7bKapqWEKnGtDi9tWuWSGbSvHxavyh4LdF7zLYhnFsS36CbwSCZUMX",
  "key26": "5DmDndAgwFLJYBFS35FLpS18rW8m1iDKZbS3jWvLU4dbHn6JRJ5YJwMjMeJozxgJcWvVSdR7vAq2e2YFGi4ntB1J",
  "key27": "5FosVey2RUYvXR2wyYyzb7VBYnCsczVvUodJytpnXWjicNifUd6tJ5nDLsx3yK2MdaJD1MWbXWVARNx2jBZdyaKU",
  "key28": "qAmng4KfwbyYiQ8qweSzCophgKovgBwoQQgaCq2f5onF6EaAHfD6esbsL5yeXsVjQVwF5m4f5TXeP9iRhdWdVwT",
  "key29": "4XVFoaknjFtimCQD9Pi58z2npcHzmB4guburkWUcFeoGiLJoLzCLaM1wpKXbbjRZaQ7smCro8Yv2tq7KEXNeLM1i",
  "key30": "dgQc7J4osZYcSvadEPafGuRxR7mvZFcwZ6hqJjj3ELhwLr9MD4ymKRc9ij5R3ArYPXNnu2dkDiTETvhUSR3e8hA",
  "key31": "KGcHSiqrC2xVU57Lza62HZFeHvdUoqxx5GhhA42wDEShTnnk7Q6QEk5gwEvpdn2Y8DvSBXPc9pYYMRroAfWDJcT",
  "key32": "5EG3CRZkUhFeNykXxg2BWNKviZp2Ssqsyc95cnoXmpZi2AmdeWnYUZB7LxLfLmG9qf82aLaACXNJejgCxjodbk1Q"
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
