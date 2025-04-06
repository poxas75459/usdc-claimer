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
    "31EDeYgnGUW9UPzwCRU5wqidBfCCgpAVsGzxqM9DXTHJ47VQyZZPvUeiTUf31uAod4BiG72WT2MvoX8QEVzor5Ai"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hAh1KEpHNvPWMDqMF9eywgwEdVNdHSvcT29jak6at3Brb6sHQPXJGeKMgcoDRLbqDpqhP6qkquMV7S9R3oZ5vmA",
  "key1": "4Lqi9D3Qi1GJLYbxNPr3FvxRz2Px8MTP41i7oeGfPxy1zX3w6YAiw5C31z2DQ9Dp4mnj1hnq1GHG1xegszhAhg5k",
  "key2": "4DP389mUwsnUFocwiGXikN6JL1ndoGDFn7YdyknccfUn5VjUhSUhSNsRoNP22BBcTjY4zaZ7THDUEpsWDiTZKmnt",
  "key3": "3dyy65iorUMKaFabG22nLTCp3gFQpRt7UBZmou9kcVRx8pjpHWjzvamkZmqRc5CnGT3dmEnzn4gprYhwpkYcwoj8",
  "key4": "3if2kY3Gure1LHjckZ7mYdUr28HeKBoQstiaMjMeUMND1B4WesDVCkzXXoaHaNFGyFAjH2W2H8M1wsGTChVcjAgW",
  "key5": "2vTrib7hMhzwriEmM7SoiRfLn5vyThwcBtjdNCxecfYPicJc9bxhNdFjyhwfHo9jFdLdFgbRhqXgJHe53YVWJzdQ",
  "key6": "613nUEMEFfFCbV4ghLreKaR21t1d2SMms7HP7b83mjAM2weMBtWhLDC5zaD7T5hhpD8FYJVy997n2BDfVALfREEM",
  "key7": "TF1mDJisFDgC8HXCVmWot9YbggDsVkXRuzqSiuHiQfCsPoXWc1MFvDYzesGKH1numwF5XzYHzP5W2XMVCfm9P3b",
  "key8": "61miziZgyGsNFCb7cnGfeYLNxB9cA4hJbFap8VrJonFuYFHZ3Jui823WpWmZtieYf15eegaKM2DF5ENnenERzdau",
  "key9": "4PuLThMDa4rVRVEyvVJoTwCKQbQ7kKPs3sJiM1F77nqAAWs7cDudF6WbN6Xw38TGubdmBCkQ2CXhwSVXaxu6Fjaa",
  "key10": "2yEJfFQGgSgAzfkwezmhfuU9kCiKANp3HdU2NGHCawfAVsSG2zWebn7MTY2JsM6wR5Yhk8rCDhxdSKrbC35MXR3G",
  "key11": "2CpZvQ6z6sK7FtUrTAB7cT773J2qxsEBu7SjQVVYxqGk1kBc1p2yiLXoZyk94gtnZkja4CFCC7BreWj24RUuXwis",
  "key12": "2Y9jHB33UaJpBVJbshZZMhXRxadmT9meVxVuZMkqprUGJgUyFcSguwg5p4oQs3JTokYgsHvUhydDKcqzx9qFdgbZ",
  "key13": "3AyQWh6gaFjFtCTQ17iW9bmZagKkRgGaZ73RntaXU1acWGSDyK4FYXhEgPreH2VBHZfGyXycLhQGkfQUYqzfrXG",
  "key14": "2DL49aVFmysFMCGYomvs6wtmRV6RckQp4B6Gud79AbRXYbZqYRWWRruH2NLgHMokxMMMcjQg6jrSDg8KkAM5PLg3",
  "key15": "2RJqcnmkAhDmDeHRFALJxGZzNK253ALvZCRtKXtxwi4ZuBAXcdSnCHU5RFftRgWrjWYVxP8pu5qZ2F5dsEqLHUGk",
  "key16": "4wMyJZuji7pgsofBebYTAXjEuDE7p6Bh7FA9GNpsMBcis3KQPkHSgzHzZN4bfFn2JCqL1nd3vKFoagJmeENL7fdc",
  "key17": "5MeWvu13xYg2S95S6ybwX3v1BnzykaCCHKbrUZJYzoGdu8rdrp54XGr2DJJ2fGjimzjtvGnZivLwNtygGU2zCcid",
  "key18": "4KBPHw9JqAT2AMnMGYHjYSbzjMbg2oi6JL84HsyRC6JtRbQ8BQz9h4puFPwCpecNkpobPFypB9QFnJSBGuCDjp8b",
  "key19": "3fy7KqTayvyq1Jmj9NqHqiAC8a69gVET5Bm5zvrizsCespgaGbX3fhYLgZVsGeEXAjHS4yRFk6ojaXf2aa8oV1vu",
  "key20": "4RgSfsBwDVWx4AhwDSS95oHvMGKV5yTkZW4eTR6e8GzH9M1dmuq2C3bMX8DZtr1EJsiJZrPz3sVGWMqoet9QncKJ",
  "key21": "2wzEkd8x3PymQn1kx2jJ2MgVtkGzZjZEVfjCSMBkrHEAzyEHNjqgXNc3QZVnbG7SjqM6jVDeCgedaRRCHhSbuF9x",
  "key22": "5vTAir35NacYrCsZ33aT5ZeEi84Kbvv1NWCQ7j6WccAwc6ZJMn6rJarUKDpGamH4K6SBiunzpfGthDPJ7FMNDE2t",
  "key23": "4kn9YcRMPU93PN5bqdQJz1uEHaumUrw2KgtFUwAY38MHEyjudew9SccRGtdnDsGsDmCoMCVtZ8CcfVpNwuy9eJ5T",
  "key24": "WE6hEeEcmcbJtpjvpYFdeFHs3L3jeuUfadeYyXVVTi8A2n1CVZowhNyyZs47utwipupDpUCdS3zLJiQDDxd6KRL",
  "key25": "3ec3qwb63SKQGTmYRizMU2C1C6gAW7RvRfYH1Y48gDE8v5aPBFQ1k8jiPFDdt4Rxy5XhTCiWftJNyHZKn4mHXjb5",
  "key26": "4DvxwbG93uALSHu17Zm8M3MRWogV4jE4n3zgodRAJEbrVLqHfunyDkcH9cofQezdhLPXAkCxxWAUuoQKyznMU7Lz",
  "key27": "CJkR9CvD7Nya7rWBepC8E7wLh6qojL6m8L6z3NLp7n5isqPGfZZtQSA8o9i5gkgyojj7Lc9w5NVsNYzWCvaZ8w1",
  "key28": "3retuymiJGmWjDRDXndDCGvuUhfzz4SUjx7rn75p7yb4E4FqYKyWXhmmSKZDjCHkkYXa8r4FFcyfphCmR5S3H129",
  "key29": "5Pd9c5wV79r3FDFEzhX1b3UiFxSbPoaBECfVQ5yTkoJU62n9TeGgKnwxNkAhyXcrtATGUBzkSw1tFesTrER9UKXw"
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
