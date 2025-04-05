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
    "2UYvEcYBBvRpdpQtxrEf3zYZThCcFXxXFX6F5M5prqm32LtuQikYvyGhGcDffv88eW1AG65ySBXLdn7zpcuPRXkD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hwsJfPnE5HWRci6931e1MMUiL2tWhNpqFGZpmZCYoHqnD9f45hbEd3PxGE7Y9pxaUrbiU1FrDytdLEjUVeSJc1c",
  "key1": "V8m86CcTytdeoMp3zNiQC68XRm3Qs427fygiMriwdMjCmf4M62EP2BRTudsVyy38QRG7nvumFSZJGLjXhqFs3bv",
  "key2": "4W9ZnRsaCG9h3iyQLeRJDSY6syAPkRmFE4nmQPhTRR7XN5C1E1Yxgq6FL8rgXDmj2prr3RcpysLWuL5698uT5sHP",
  "key3": "4QdgTeaiVh1DzxMuTszRQ8bLmvwybTasdXJbTVkvetWyeSehXqPLYjbpowEiKBKZBtX6XYfhfRJnBwjLXyjsTBeb",
  "key4": "4L22deVYyGe2NbNDZ4dTpiusEAreZaVPaRxJRzCNS2MQTXJRJHQ5Hc2NPMWXpWKuqexmN36YjewdAbWW7KQ2NjhZ",
  "key5": "2ABr4Vq1cRzssBhsTnBztx6AwG7vn7PpqrMWCMwfQZZAEtETVsiAycBVrDvUUZuPA4Hk2BjGLDaXuos3pmN9quqH",
  "key6": "4WqhTVe3Sy5tPWVNfadWj2FB3GRHDPSgrJWdYvuvMRqhRy8VrsuY4VoszgqKECVyDwhYvkJRUkhs71KWDmBzovTt",
  "key7": "5NA5Q8XvyvPN2njHoWXnQTmVMquBUkasMm1ieF5AsFsSRQqBVEz8BZBH44U1EYaBKxgCCgfGYA1EtwUhtbEvCXdu",
  "key8": "2f7pHKtVwXjzajuyuGitWPFnn5aRjQ6BE1nFaahLerN1v8evUufBmkf6euK3kNNW8FPDn32Ya6vKknss3U66HgnL",
  "key9": "4LraXp6fuHuLiSbha6uGFxhyRRrSve4aE38gPc3oYnxXLQzi7nznPFbAcbdtNdkYNNiV1KP7yVVmsgCvee4pWY7Y",
  "key10": "C5P6vWMHhihBWshmKndsg2BkSNWR6LNpa4kvHEvCCdoqCjynU23uLV2Pn299SqYD6Jy52jNoNDH1HiFTY5XJGcW",
  "key11": "2ES2EtHTTD9VKenaT7D7v5QL9vf58XBsGWW1vxLkNiHxeWB5huhw3pHTEc5mLp87KTknNsfiRvwDniput6MDK14z",
  "key12": "KPoWnKsmxbDtLpVpb3kTUkRbEdjy5U2i8KGe68sXhqGnqoSyaktdDawYXAbT4r6ay4uYYbaXz2qNM1auzcDAr5s",
  "key13": "23XQ1bzMdu4hJuiXFds1Kq2fkQ6XJuiUBkRWvBxof95hsRiShzZ9YiVm8uW6rKDu5bprfduEsmEMTa8LqctazntQ",
  "key14": "4N852Uw77WHzEhuZnfB6RmKJvmDgHpApGm6wjLvgUpQEjm1kgB9Q3vx9SQAtpbkCwd6p685STvnsFnCJA3ctNoDS",
  "key15": "5beX4cnEmz92kGWfgozMvcmP2KZ783LFbU8E6DsCVfySSYt8qdhSR5QSkS9BDPk5htSSrNKbS2SY41jrhfm4VJKj",
  "key16": "5Q5FTxAjqNUaFVwizNvFHNkvqZp9LDE4bT6ehnXoRtyFnhKspFs2rzMUEFtiETkzmEW3LZTygTGLyatCVb2oEhX5",
  "key17": "3Lkh4bwifdRZCuS4SrH1TuXt94RfuMVW7wo7Y2AMM5QUfRS1mCW9HEYgonozhFb1WqPHoDPrxfgLhEiuTFNgEub1",
  "key18": "2fa95RhfUMcs1ieSxLpVd7cRQRHFvgn2sWBYyvryTFjdyYJpdEf23PD731xHM4aMyUx6Y7hkVZE5qAdxpTeGhzr6",
  "key19": "3PuaJcKi4Sq8KTEi1cs6kgykHze5uP1wsTC9AS7A1pafp71rvrsBzQ7qrcyR8Ka6uypNskV3sxjSnEkcwjQb58t9",
  "key20": "38eLyQMCPVT5ZLBPqaZDwY88su9bHjwhDmea1nB32Hpmm5pDgghsm8oEyEykxvPza8vj7YuSzayCaqzpyBYhf2kL",
  "key21": "36yXS9x1WigRu2mbdBktT1PZWQZK21KkhjuPaHrSNA4TJQcMAih5mzqMUQM1M8UTomeVMZiQtotnF5gYYTYWXtAi",
  "key22": "4b3gKe1XPdPED7w6icriyahNK1TCyfwVyE4uMeEw6nBcra9JMRExFmps11hCgjNXrmikpHeUWr3bWN2Ja9QiMHdi",
  "key23": "3zio2t7V1cDuYvAAc9L61ktKC8LFmsvguVreMPbGTnw8kgBhHqZQKF7vgJuDBmkf6oVAxqwNE2aRzCq86TDVJpTr",
  "key24": "5HY2TptwRULePsgssv4dJUFFeqs37g19vPzcpox1VponkvT1t2dNUBgaWLK5GvzmbBNKsCJAa5a1dwC7WUF7bWZm",
  "key25": "H6XW2qFnZR5Pik1PVvmEDPVpsVrekABh82sqXE3yjbPoW32s4aTUurwknCdJ16CM5mdrbcjZ5eqBivcwjPbw764",
  "key26": "5EFoNSCQBGXzkkjAxuVeTSfnUSU7jqZQXd1ye91tVYStiNJNEyv9brZWr9SYhWnsZNZUwXeBnMFvQV5WkwLzUcuW",
  "key27": "4rDsCC59xSfsoJsYyoJQePyWNoVzJumEtEoiuAeX6wSSw3Acq3x5mZkDYjFV9fzbLQZs6XrkA1E4EoNuEszjQMU3",
  "key28": "3CivT4vhH2wPMFGbmsrp1zAD8uc6WvAJG18Fmru59nPN6s3nMcuVRLHYRUtRnsfsFq559w4ZgHfWJXnGYyUeaemv",
  "key29": "2dMh1ghvuhVRwgFLdSnJEtrkTTmsKLGTnAmCiXh7VehFTuQwKB7XCEV3KRxvVdPSUpHHZZzATaMnSh1PRSJaZE4N",
  "key30": "43HqkBfF9VZtgtfrt1GMpmmPzGvNHXukP3kqwMShCSNEKmDq2coPakSsKb8fhzft6zDpGBu1iihFiYt6ujqr4xx5"
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
