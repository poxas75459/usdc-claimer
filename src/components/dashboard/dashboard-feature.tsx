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
    "5HAa85RV846MHrSrEfrBDjn9eHtoXupK8fNUxw62fcncBuNt8Kr3f7YFTMYN3t9mix12TG9XBHMeFkbjUyNvVoV6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24nCxB9byJxJ9Lk2jT2sJrkdupvAbg2eTXz95WNxyAdn8fzuJeYgwKHKLASisCXLp7MaVUB5YEMRcxyoRxJNpMc5",
  "key1": "2t65ooxziCXcyRTwCtsjTu8wDrkcxGMYewuvD9DjXrrkFtrDgtEqBsWtTsn8jKrZnDPWx27Po4TRkwktsH3rhHzP",
  "key2": "QnjK82gLnuj7t7gCASMb9U7x7onDVWDWuEADGEjR4dRGxrKrNcannMZQqHQr7k1MyzB7iLXHQ6DK2cQtGPuxK99",
  "key3": "2WoLPcafpPb8g2a9r3bmWbrP4tnd6cjeG5sKsPCk9oYQJuusc9xdn6Ry3L5aC4oZJoWEQhqjpEatoUizfSL8nVQN",
  "key4": "41rxkqYURhVuXwrNotZWYVEuTz8SLoqMy1bDXarvseRzC4U8hcuHCXb9yxYJaGmUx7vjmeqLPCVSdL4ZDxgzVWye",
  "key5": "5eNwDjDFSg8E6ZqvYeDiw91qi65dz44rSFzt3HuCoCXHmsAayRy41WJDADvHpxN2yypA5RbjQSCYLZ3UaVNqrFhP",
  "key6": "3EF6FopXGSSKNzRPjD3p5bEhg9Bp3F7XGbV3a7b698ujUE1qiLydLYAj7FQMvHFdtFjhZeg8V71DWQJMrKpeY99A",
  "key7": "5Jkrk6w56TVa16RcT9S8WTY6BnpSc3HEA9gNanCTZGCSfB2jHuRuEHJ6KSfKKUJsSLA2CWe48ZyMiFiEvuTYjbNg",
  "key8": "88oLymTC145NCadwBgXQFVxfmKBPJbD7Vu7xPwKLgGUaszdmbP4UEute4JhquumQtwVwmuNLeeQUQuthVv7cPSd",
  "key9": "4pBEsB8oPXo9zg9mPqrSJYR9dzmC8CKS8wK1gsUya3JBZ8FwAGu1SMQJEwF9jowxiKUJiwW1tCUqwgQA8jLC6wQ7",
  "key10": "41Dg8codpB9j9gfsW3q4KmaRzcq6WJkSB44oVq9nJRHFyggMafhptCcqKBWzp788QY8mEowArXgPYnCgapVt278n",
  "key11": "2auS8oxvmKJKDySXntkAEW8b1LM8owZA2As9N2PUZ3dAU3sdPnUV92qsmzKCdi3s83P3zDPbeW1BtHioRE2C4A1C",
  "key12": "5yKiVWtnHcwBQHctzvKR5B4WFWyg7GEsHD6F9AxJVehgz7NdwZi2JVcnPc18WWNFPfnzTZwECeQVprrfcyVR7Jzo",
  "key13": "GXmKtb89cwxvikLvLCnsTeJ7WGPXmHLHhX3KJRt7LrxLkBUswgEwP1G5nNAAhJd6om42eQCb96vM2q8vVUb275f",
  "key14": "uuZYiBAnb7jYbdYJ536CtaheTx5VUv4SvUSwYVUD5UD9ZDNyVXiLAKCdsLuT9M8Kvz4Za9XkhqNRz1wdLn7iwZb",
  "key15": "5QvdQ3C9pJATNxpNKZUYwFaJFdDaKbRKqqhwXz8qryJQoupvoiJfE7ipagUaCkQybTcxbXefY34H7baSJ48uwF9K",
  "key16": "4YUuYjKqLqb5BgxQoj4uBmGBJgAjH5VPriBagPFpWcU9dxYcvrp2ursJ3VG4z6RXHE8jmTAKLmSYmvKY8kwwwBKo",
  "key17": "4ViKbPQ5yoDKpXLe4FotvtVYzxFkQJ1RL6z7NAhyhf5Et7nS8BWhMPapbKL8GUht4ttTags2kpgjPzdRT51noC97",
  "key18": "3JEbfEiqjz1pfZzUKvPVnpDMxcbnxjPM8xzqjPJFyrKMHTSCprZ84iUpPGfWswvajYuEw4LrnhALPH5gQAC81QEY",
  "key19": "2DMzKcNgdnimxhd1gV2PqLLiCUkgrfWroWgVHPvkh1vnMGta3w8DRZv39uz7BGoB7NH9uKBSvyxQ5qfQYdHj4z1R",
  "key20": "4cxnH5SXuncWv5ShPWXo6jERwTSqh4WwDbB7UdtNJwxosDCjpkmQ9hgoRV8A3ji2TnuHsM5eEVW9WyCm85EEhsga",
  "key21": "2s3tx4rBdMKBZ8fEEeqc2x7cWhGQbb3mjDMvRXDbFgiFaguvuzs24hjkvDswrPMjd3ig5yDAw3J3D5n4CYqTdDWK",
  "key22": "2aKFxEgfpLXLkLCdGBLutr2VQefoyEUZRxXt4Lq4MHaWfhcsGYQ9yBLMvfh1yLRuKQs8BSXyiYqoKhetiVP8dHJP",
  "key23": "cKgsc6vFsqyKqfPHT5oXyLMp5MrW7wkMhmEDX4RgrhDthAdiqscDGvLGFCWHTcvuVDY413oCk1tY6Fu7RxS6nR1",
  "key24": "4YPMrvPiGHmuLHJoyw7EFcNhPGQyHt6zTondYHsv41YBzrRCRo1GbEAyyLqx1oF6NaMepn11AYv3QLrWYCq5w1yd",
  "key25": "5kjudpsaCziGU6sscYNbMMLegJnFUcYxscJKKUVmdriUokjfBpVPxhmptuTRdqsL4fKZ4txd9oM3pixcMJEoHWop",
  "key26": "3eGQew5VsKyR4wKu9FBzGCTf7M7RGCsyUdTu2BzQPzaJfHcEyFCspYFLWcbxcyEUhv1w1PsrD1XckdSDRi4F4ZrT",
  "key27": "61FxRHPJV3mVKHEKbSH26rZMVufB5hpueaPsG3weysC3NxinDgZ3if5pgb5k8tYqB2YCd57yG7EWm7iuxiSSRFro",
  "key28": "2adgrrRwyxQ6QKN4Y4Q7Mdg6Sch4iX1eyRp882ixUF6RVpvDAx8955qJ3HoRL6oeEfmepnTDT1obzQ21jeFNUfW2",
  "key29": "4sXab5FbjSiyibdhvofLZRG6BjFhjghsk2GTrnnL3Db1uUrkrogTDAh7Upe7diSy7kZ6qPiNnTLojo4NnAzeQfAc",
  "key30": "33RvgRYJuQ7pykm8i7LSL4Xue6WwVGb9zV8MfHbTGE85DVuybBVZUpmqnQRqHpumJP2EJLohQri1nMPrgPVfoKHn",
  "key31": "2vRYTsJZcr3SGzHJqv99kbcBPcfnPysKETSfLtj2TXQkw9cubPgY8r3namUhNVm64ALW4ndMJVqATLB8vJEgSF8v"
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
