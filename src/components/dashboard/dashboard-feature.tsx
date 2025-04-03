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
    "3Zc8Jw3kp2WunQqgYMXBcQFKa51Cw3viPnUP5yq5eYAKwFPA43Ngf1uWQ5CkejwM1Qec15y7YSwwWPaCQcgDoXq1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47XHkiC2Po7VaBnc2MQVjNDLwsDX8FSPCJ4jJuGtQ8rGYHVbMKXmstn3MwQkN4jTuMzqnkfpCHsN4jYYmpNMAHRG",
  "key1": "5TzuFHtt5CSeqEaegG6Ts3rKxCmcugCh2EJdY4hgfTeCJC7ZKaFYBDGXpwGLUP6J1r1V1MmPUTmPumRrS3XeKhEH",
  "key2": "3p1EX35Q2vc8FAq7r3a7PLHY5SgwsvXesZV4sS2Wm1KhW6CgRYy9wnM214A2edGtcXHPbEgdJV1pKxFppmbk9gcf",
  "key3": "5waddrEJzPQZ8icPZK1pLQmE6KB9itVPwzLV2ouTTB5tZmMDZPKdtaWbNEJ3U4nPM2NvqhdaTxRVpqJ8KaZPoKyN",
  "key4": "517NdjY4EABJuyaeksN2KWPp7KRaRzQ98TijM6DNPo3fPznUyzvd1DWzrvitUSKNKRH7XBNEZ2sAuQEM7kKRUv3a",
  "key5": "2zDMK4YEzKcJ2pC9NiCbKZvoM86Nftmm3LQ8b6Bx7KqduTahBdVtUNJGNLyxvJfEQXLhFzBhmMYQ4PQGdxUQPbHm",
  "key6": "3Bu7bzcR2N2aSo97fzXpvJf5RobWVFR74xzVNLfMrqBxuFcmSmNUqzktz8f9cbJhZQwDc4QWCeZzYN6X1fdkcc2t",
  "key7": "3B4sz7KuwSKoSuktZYQtZhB2eGW6kVFtMb8hRqbAywqGSGgpQC6skATBsKqXD9mP2bHSUJ53DD1DwpzfVb1Afvkg",
  "key8": "3MFYEYivmjzmg5kWZcn25PqQansR56URnu39eadCfDBYQH4oUH16Zs8VHT1ohdcKb5xprME7Pq4cBKH9GPxwgThN",
  "key9": "4VbpK69jQGkHuEVCTkbddEN7aaDysgNZ7vLxUaZWt6Rw5As3kPrBjZ8hMSkYTFqJxE41d6oPxBE3hyrrjw75iBpH",
  "key10": "2sEe1YDeAoBBXeFP158JTPtr2giHtjYQNyt4Kdt5HFsHBaPTvA22DJr83uF8pkg1sJegf8VrGV4juLDSasd9j6GM",
  "key11": "3nGwdWJwyVH39kx88NNVnsabVr57t5eVYS4sy2qVzf7giprkjU8eG7rNfBMshecgBQ1aT2kJydQ4sGdFEXDwNYJP",
  "key12": "4ee2rfXxAvhEnir8fRkPj6DQXgRhNEBGjS1sTxkJ7KR2VbVJf7PZ6Hg2XwJgJ1yezmwtdtee2aY265ybhjQLJrXQ",
  "key13": "5ja54C7LENTbJD3DefnFgqGfcW7gq44DfHjQX2myNp93qtn221dGnRnguJFHhmJAZimnwuwneYKBc6rUDoYr8YvX",
  "key14": "jtq4rXvxkCAyL4hCwKmAiUdYsChF5RG64sBwTJDG1idkzeec1C6tvcVerjJroQKM94XdGhG9xM2AUPet3g4vpXK",
  "key15": "JHHaEXriuPqTe7e8ACGytyn85ENiD9y42rTNcsFo2VFT7WRwYNTT9miv3bBVcCLiFTEqREk925HaRbci9M33nXh",
  "key16": "3ABAo4Cp7KqAW22EpaDmxLyv2DZMMxDf8KtFVoTq6C8gAaDg29U6tEMEr1veENoz2xxfcCuSp6X7zd69BkoWUkxh",
  "key17": "4Jy2ASeoYE4jBkcRMZTo3RUgqtr8naYmk8t3HLHRmUGZkV7riPnvQk9e5VCBW57QCQZ8yB5xaSbkhUPcujK2LKTU",
  "key18": "3cktXybph9QuHh8q4L4zeQx4byCyexSAg2atgmJGWEw3NYBYvtbmSH5SdqW6qGok6UxrKUMY9fmaftkfcaHW4uEB",
  "key19": "216Nk9WkyuwdqQ2kSLHY8AbNZqi76gdVtpu72X7zZoC1qk99gpNuSiiP6j2pz2ebBa4XfDjdNYvVQab3PeYaG164",
  "key20": "3jD9TmmUgMBDnKUxHo85RyWt1De8JFFhXD9LDTbDYD1KBTDRkQamDLzyFZ9RzztDLmTLiynGGF8baPHHs9zVcEFP",
  "key21": "4KL4RWxLVCvPLDTos3SWofpGFEwW6krGMgHYsLjT8C1hy5xVJoCiXFXNDp7udhC5bkgkbWzmqE23uMLMy9rK2ggc",
  "key22": "37ApRte4b8uGLJ66r1NmtqjuUEhv1BdpY4nKNX2D2hjLK5Kn9GtKberE6Zf8zMmZWwzLTyN8cuFELzQLs7VaWUxu",
  "key23": "3DMriRF5bnkcTNUcXTXpbFj6BTy5FAqhHHz5fdQZaN9ngxk99VcwAzNEpfZaPDv3AT59rKoL3a7QMpwnab9Go5jd",
  "key24": "2S7Ejd4yMXsFnbkkvnr1DLJbSaX2GWrnUTnd23C2D2D2fpzQ73NaGFJsqnbFw1dZjwMaMu5S3eNuEE5cGjCjYTvM",
  "key25": "4V7Y2gpVN24812feAdH5LaMYitQNPTXUwX1dBTfUF1NfCMR6ruE17cGA9KzYqeULxsbCjCLPE21FSrdihQ1Yr5Bk",
  "key26": "whafw1Bi8JBMf3APqfQHmusa6MHtytkcGDynQLd4hWrYkKVFbM56Jnc64hozkKAV55YCZEba8xo4BQA3PuarveA",
  "key27": "46MEyvGPQVyAvsbAocQy9LFcrNX7zjZ721mCy7yPSVBq32dyWwD2wL6VMaow9eGAP1GVwsCwX3W3G1CL7VPsorC5",
  "key28": "2VtrnvMxEB2YQFxkSTqR6AbhfddsVH9dZ2xWTGuoDcyjdeKNkvn2Zp5JDE7aFNgW5w5C6qYRXBfTHKX1sA3k85wC",
  "key29": "4PyUjdRTab4Gi9Bj2XULpfTwfMCYPVkXr7pExDL5WP5oNxn9qtRYHJLShMzC7WadNGysduj6AYCYhywjkz1szsWH",
  "key30": "5FF7TcUzpSdyML7zGsN4DGZ2iBezg1idmRZBjnuxDVdZV3b7AzGsdEEY7DYZCxkmUnK6n5Te9ukBLdchEi4ZQBFi",
  "key31": "3upkJXtP7HeAnvoxNJPxG1Qjtxop9ZSJBkx7fSuub1nC6YdxJWRkv5Hzp6FWtGkSvGuHXuQfr1NHFAmGTZFe1hW3",
  "key32": "NfakYjTajF7P54p17U8TxnwvQ3dyYbSpFQfv9YHXbyBtMYE4oA7i3aa1Dm5cs23FP3Mssmpj3xvu7T2Lpq5azVc",
  "key33": "ejX8hwkvQcCcBitAbogBDyGeJ2fyhroYXaXfM2Djbdgzrqojyey1UwfGcuYGrByveg83xs7dzHXajYY73Mkcrj3",
  "key34": "4nesUkWJn17ED5ZXyzgSGWMzvWtUSyVyQpkfxrUULbtySEXGVDZ1bgHbwR4uGPu5wJuN15Rz3ivQtMWg2vDN4FnY",
  "key35": "4HshSEbT8bB2xjJkBhFgU8iShyqegYMbLwGhUFebHxACQU4TcepTDGXbwVtwyu15Ra6tZBCWaRBzpqjr3nDkJMEC",
  "key36": "3q62H1pn1ALkC43zbQgwyCtBZMEyRaWbeT8esk9j7iGaGjhybjSdBhx9Bsb5Gk6Zo3YatyAgpH338DLGYQBrecBD",
  "key37": "5WsTzrjTxVE32T16bmTc5e4nVw42qbc4t2tBuJ9cscmg6CpJQJRMersN7skum422gWyfCTPfFTctkncMBL1djvEA",
  "key38": "F9VQPKFiXZBFixXiVmNRdZpWcZ6ga8PdyU8PZ9Nev2PgS3yAPnRXL6sea3bqRNEAMjyXFXj4rbnYrMm4E5TcgZ4",
  "key39": "3X91dMzc68T7HgsbUi9GwUKjheYiNwEqSwMVBM2UZ4yK1YwV2A4WnAjxg7sCuGkiL94GsRMnK9w4Ws4eCfn2EBAJ",
  "key40": "yotrwHBKh8rmYExTxtTSDQu56xw1vTnY7R5rPRQCDS53efi9QPouiH45hNkwGqpkKJgXs8pKzjr4R61CWHPaAqN"
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
