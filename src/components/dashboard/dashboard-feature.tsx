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
    "ZdJKXcwrvcnSA6PztN6gy6UGok47rwQvs9Hn5TbyG4ydehGwwhPigesAqYXe35C4pCeabo6XdWtga7HLTdLcgt7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nVt3Cc3wHJtEP5CTYYgt8iVEB3xtdmoJFfos8jTo9dcx19q2uB94WsSYRYopjpEEoqgHshwQcgtM2SsenidTJdq",
  "key1": "3yEsXzTTuwsRfs881sCtyNYgQmz67NbTJTcCHFUzCZsaHvp9BaZGnLmJGXYNbvB7tYqeUS7SPwbzebnEgkt9Gn12",
  "key2": "3n9a1uQM5Z4aQPTypJyd1YRQFtW4kyo4AG7skYe9VcAJbbaeyXNMGVngbWinavFqkJpHxzJtVnCYCtxsRKVZGLA7",
  "key3": "53L2V3EoAqEN2yVuEUELyv9ZnY8jxK4rsJ42itMb2jgXkcCeS6n6RbyM2Y6W2RLYMkgCHd3FQSooMzv4Yfg5MA2G",
  "key4": "2GGVBoGyncoUCreJfaKRh9Qgyfw7fx1LbBFnQ1etWT1GjoWqnopERRHtz65skHTUMV3asSj3BMAgUp1ktg3pGwvq",
  "key5": "2nPvzDBVSRQdujx9M8raifENZChcZzDs52LCh5SKg5aafJGtkgBRxVESLiomErM8R7chuJaXFqhkefdpXyAoufCe",
  "key6": "5UsxFApG7mpdEY1MpnnwwHSLBvkNKWWECiuyseQ425AUrkqbqK8QSFQhGaqBB7UCUhes4NR3og6CfoK66XuqzUzk",
  "key7": "4SvP65p4z2qgz73tJGJ9fJ7jdaQKW23MvuMbDocf7y1FuE2yC4sCX6TLRwkGeq5na6BA4FhXhZvTFmEsFiST8k3q",
  "key8": "3V8RuxW4FXaG5popxHyRRXnjQLsUKNWESes9uz8tgqtXeiCofz7aTZKymjMRPkMKUHhhQToiD6Ju8jV998p3FvB6",
  "key9": "3a6CeCMmLuzTS3mH6co9K8YckhHVF9xFnRUT2JrKK29nasFxoaAnDndHteiuwgLUeXCTDUZL1BNKRdya7KP5S777",
  "key10": "nAgsKcQjCLWkMuMMeHYxo3PAkBLo9v3J8dJbak8vk5zUa4pHrgsixNr5DGZMmHyNHUN1RSX7scJVEowJBYDS1Pi",
  "key11": "2wpgTw7pHZxpPgi5M6DH5LFMAQMKSX9ASErdWQrTPjZWQkz1DZwMZ7yBVcL9My5gmQtgxyprqguZYkymhXMJqgeN",
  "key12": "2iQqrrMgk7GZzLFtgLTqNXKAdH9wS5xxLxMZGoSZPShscAPC6DTEEU5pgPas7ed1UDsNkeFfjJkxHgMhMbURikii",
  "key13": "WxaHyr3q93p6u7CWcUtDJ4tUyEL8jNB8hBKYZehsuP8vaEnnTayZv98Lnu96pHohkjGJnLvn2LXsPeJ3gkbH37Q",
  "key14": "4RZkamuxnKQAxvmEBqNhsCbtCTkwEmpyed4FvJbXJCkY78UF255837VReXfySu9eV95akmYRQ9eMFiX398Cfny7",
  "key15": "5Qh7HvLATraz5Yy8DCeJodz58MjoSdwRA3DKq2jDWvLTotHr62DtYe8ajCparifkQz6eRzHRWjZchWZA98TWXiLo",
  "key16": "5uugGMXH2BpLzBMWc96oUPZk32CkM1KW3tSC9gC13JiTaLesLcjBeHzwsv1VGY9BREwXztW5wgBVf6Grk8oAMdra",
  "key17": "vx5dKNDdwhtyxDyMtSUMX4oJiUpCGmaSzhTu7Z3FDgue7q3w387bQA9tamhUzVArAsQgLnLw5JkHdMFJN22UAUy",
  "key18": "3XJ96TKoFiQ8wRr65q1rxJKnYicuENG9X22xbb1DVUpbkW8ciJ33UvMWon3YdDmRh1352wjQda8vC43bSTCwozNK",
  "key19": "3upshb7UUeuDPWrTChqm42WpLDBXwdwxXD8THifU6LikZ2bUxGQcVbebBhGJC28o1foWXXt68LcxTwNXnk8z9859",
  "key20": "yBy7JcNwAzjt6BkzTTYtSwSYYuwHSwzK5rfeuvDxNVRjmRu2kJtmcv44NtUoyaHe9rdATE6XW7ayYrp11BeUHPy",
  "key21": "5WCQ1JNbsFn55Bx8z267yTX49MHjX3itYeNRDjYjATACNabyQwuy8j28zjBS4z6jthS6usbKJT4Aamx9a2ad1XGy",
  "key22": "3chDTtRfNUSZ5LnK1MhnssSTx6Hp1iWEgnDEcGgxvzVg5FP5pJT5k68ZdK6UZy95kgRXBNLNnAAuqE6PeRFkLMJX",
  "key23": "4wtXDnHcVr87sgaiaueNLAYU5euTEgqJbkFKoWSgB199HgnyuFRyiqpbWxYdQwLcqVhaCshXU2d61p4GJZxTfCc",
  "key24": "5M698kKbmHobzJEbic4x6gEe2egYaGussEkFAHMkMLVBn7WqL85zsfg9SeJb73keFzBHcFTzo5m6h3it8Diub1su",
  "key25": "2f5JHV6uy8C1Z1of56RAGoC1Jow5JyhKUXho7cbH8BhLa1UFEhg7im1R98H6xwsGtbkis5TshRF2bEPh3aJT3Zgd",
  "key26": "3fYamm7TvF4LkDRQFyVb9gb6mQNa8ehYK9b96SafezPtj25Vi1K4Lm5evh4adg9a2ptZ5Yru9gLECQ8PbJVTnQLv",
  "key27": "5jP3oCmPfsK2nfcQfzN658nQ13QQS5qCkDcFHigwjMnxqLK7mFPhUEhXSW6JetwSoHULjcM8YBG2CVFXY5HwLwRn",
  "key28": "4gvhUnfwhpVAkKDCrmNJRgieHM4DGShHEY5fT6ih7YqdKi6TZsFLb17i3Z2RguBvo3Jb7RDNibrHrZSAckHiqkcN",
  "key29": "5cJ6MewpEtWCsgktGQfdfWyGkg4jSaNp3PqginSjPyeJ9N7aNDRa2wWrnSkCuN2MQyMfAL85JTD6qeqwRYPBiFDg",
  "key30": "65UBG2YExjZ7seMsaawmC8NFk8zDrrMuf8DsqMZeZtFxpcNScWFrhjPjwmCumeUsAZvQFq8444NUtvpjn5GQSJcE",
  "key31": "4bJSKvCReZ7EVhxV6YKVfehxM8UH5fY7FDXh7iFQpdw7n3crL2wotQNhbynyrDiS9Xu9H11W4hWeLidQ6S85bRPL",
  "key32": "4JodvJSfZGxNGWiqd7w2gbQ6JAkWgyMJTeseVjQMVdtktHU1umMyrjHs9XuhRvhQwyE3CRzBpkbtvYrFaNScCcqs",
  "key33": "5GJCRPCxfy9tjArKCZL17dahuAKfW98EvV9d42D7D16JVRBsfpg9fdKf7NSYJhXYXYREHH3AiHBHFrYAPMGHTizj",
  "key34": "kqHZuvRs73HAqe2PgBPULoFyeLPwYjR24eibMgUAuUWcR2gz15WJ9vU13C4mBRDHFY9mA2Qx2wJ4YDiNzcV4QJp",
  "key35": "2i1tXTheRhJEKrvvYocKyCrJNfnktSun2orVJ7yB2sJYUfmeKks4t2aqktacCZWxtRyGQ5bu43crWhpzJCj2Ctj1",
  "key36": "3FXECsEtrAxJ3MtAqP9SZTbxgndowwkVdqThaUg9KysKmK8AoyfVnguzRnAPaBPVaC8n9AKcbJr8nX19Z2u9s89k"
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
