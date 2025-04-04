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
    "2iVu7F2XtVF5Tq9XwDJHsfLGn8MwSN8H5beUZRfi4iZpjBbYvo3XJVEUDgRXYorZ3UuduwZjH8HJxBfhHZmzWzvq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ucC8KYdpAJSguWfGPp5LGgrg98ryHHJQHhGyPAhb2fZe44268SWGkqk7d7sE6MrLMMHAPabELkvfxnNrcX7pdQu",
  "key1": "4A5meB7tUsP11JpZhRshsQhn2VnWrD8x8kHLHNi8YyxWcexPDP9R6DZRAgeh6HCEbmkwoUyefHbooX1LxeozQz5c",
  "key2": "4wSVh95TexyF2cfJgGBcKqwj41hDhKVCq4oskZog498kGTTmUsASv1uaVeNbt6Up6RHxvC2k6jQXXp23hEPUV4sv",
  "key3": "2mq6qWKf9q4Lj3Lo9DbtQTPMY218ogWoePkjPgD29DwSBUJgJn9K3WRiGtpskx19LRgnUJdjkimLs7QHcZVCXT4s",
  "key4": "3H5NHhwZAySVJuDZW2ZwAbnzuXBhCJyhLUfZjjo3dYbniXqr1EVX3Ckb3MFUA7VWwSt6GNH8iMmLNHEtVMYz2Y4d",
  "key5": "57gycitYnmf48QEAuXNCWTm4RfsEap7hST5EVs5FY6wHcjcF2f3VpD3ZhZVLA13kyeon67k2oVRbT5BgVavL5x23",
  "key6": "21LdknbspjQmL56Mpek8kqgiZvNCtL5349PEJMMvPSrTubZZiKUYj79wuVDDGexEFwzVRe8v8rrqw8cdj3Jhzhdj",
  "key7": "4sUNAjm7Qyp9gLCGkMbwha4oSJNKB6vBwMEbppnfeSCPCd8LbXdWsh2MuPnfFFbnyLZTenizhtH9HwYUhJASd9Mb",
  "key8": "2CVqwwYhMxNQCcD4bYcd8BdzsptrwbTtSVwtRyLdATc5YncSGbnA4dH8sqD1aBGdFDVhrpzTZv3M59UsyNPnanTy",
  "key9": "2aCLDSHyTUA2dyKLaopTsZhDxTbHGwyCHCzqmefc2q9eN4QrKU3FZ1kQdSLK5hgABKJaMC6C2rj986Rv2jQBHmm7",
  "key10": "D9exKkiNZRjcr3oZtVcakSPAwjGFr7CWtvjN8xVwrPvkETa97QZQmpEXEC2JS6TjeqwjWzrp4XKqAY55N2eP5V2",
  "key11": "4A8TXxhSYrb424pAAPE4zpVzkE5TXdWcdxZstXbWMjX67QMjQ5WgMBvSgF1tDXCz9uD8sLkgE5nqKMubtFhEpKyE",
  "key12": "2owsh9FLttipTbmo6eMo8wUdUaTeATi12uUqR3TKDXZKXgYzoqf4JjgWbzuQ16mAyZP7xcuAm7dRdzsAt6gFHKeh",
  "key13": "5fmLYrowzyayXiENzztABXudBcanhHEk7VJvR5WP5Jqqfhz2WcdGaZtGqdoH3XqdrCLyyRMyu2f98bwAAKdZorG8",
  "key14": "apRV2oQ3TosWz8p7EDYrtahGg5fWnt8GdfE6sF1gvbi5P1fUrVwrcoQi1MZGFPUEVzbnDmhs6mH6BY6r5RfT9V8",
  "key15": "3aotbC2LcnBHtDdHTvHirqqnutc6sgTnrfSjaL4cJj5tMPidnSGAFAm7AY7DQGEim2fNA56aHMZU3fvXYSSUYkFC",
  "key16": "43kdkzAANBna8BSj88MG9b1PwGqyc7CxnLM5jvbuUfvkUX2cJatJ4xNt3bqxDRbPNJ7hqgGutSFYsnPfwb3jy2SU",
  "key17": "46Z5sF6rS5oN6uNqRdtRs4mA4S1j4WVVmfUqnxbKR467NGTmBvPogxYxXS3db2TJtxBB4MCCaETL4vvjc5vDcMDH",
  "key18": "4aU69aXVUNYgh56k4cqbcNTfLyVVcuUzAHWSn9ZmCxidtxXV2DjKEAWUyE1WZaGx5Ar14ub52viXFbFDfThaguA8",
  "key19": "32FNqvWzHXogVA9mVATWRaSC4emDkR4Q9Bm9MCcR4meGTuFX8dNYXkDSyvxFq4mENMR68aLJTZRByUXGM2LAKiG5",
  "key20": "4HasnAUF8q7B6QRWorQPqyeuCW2SSzG584oUnS27aV1cbwsgoVM5P7kLfRjohC1WEZeCHHTsK8gWR4LvnQd5M7eB",
  "key21": "497vzmS52HaDRL19UQi9JRwxTZP7PJSP8snn6dy8rTj9grkup78LVRij1XEf4t279VcL6VX6Yfs1XWan8PN783cu",
  "key22": "QfBpgnnY5Y5H2ecCjDdLNZ8U7wUawZt6g3p67apAVTuvxgF772Dnf5fx9BADYczaXFXzCtKerSToT45ywvhV5R4",
  "key23": "2SaCUkXsoBYkoAnVRyYjrPSMhWdNG1poELVFrWtonaPxZkgvXoEjqzJujgWCwizteTenxu13zJ6GBfvCe7ic1Uuv",
  "key24": "5acSrXduNyDM6T5Zpv8CBeNwMLyibYJYSV4fVFjPiNtewRFWUvxm372DnyJY6oepLrt5ue1SAg4jWTtQXkdVc9Zh",
  "key25": "KkF2sWUSZq4mkov5B867tfibMr5JpsrBeXT5QccsHQvKrJqahxcg9YyUvFfWpZWQeW629crW2e877ht8CgHAuAN",
  "key26": "2JsBBtgU321uX5r2saENFbgDUx8bkJpPRWGXjgQfef4B4VNrm6rBMvf4FBABnmnoH41emrmBcWptyggUsLKPBp2n",
  "key27": "37ADqTRH84PBPT6vSEhYi8uKSqBjV8nKzw6fs2aPQ2ocxiwVztsiuG9z45Q4dEj95EXgfCfv6NBXqESQSsANFQ3h",
  "key28": "QnDTg1Jf1rLsSq4eLgdjiSYc66Q8EZ5hxz3j3JQzxvfYxteoeRQETVcHrqzp17tzY56cUFnKQ1dZHgUwJYKD1VC",
  "key29": "4VfgVJbJzBc2FvJyscKNyP8FQdcTsoK4kGgrh9gGCAXZMz3U6j1oyTH3GxFFFDmagYN8XDW8tCRZ88qoRQ6tL5gF",
  "key30": "mRqamJTQeoEKP2j1Xt75Xk3hf4KVtx4L93Nc3AdtqCFhYms5APcR13qELpc3twE2nVzewXAhSQjaJFZzibiAayW",
  "key31": "3yh39vmUqbC5gg4yGJ4MqPKRJpe3cu4tyiqAxXyz25RZocK8eZkKGqRiykJWHsFVsdb64AvnA6TWPpYKwVtDHpcN",
  "key32": "24Jq37aR6XuReai2JZv1B1avV7kDGtiCB6x6bZPgX9wc8LKvJkXpukjuY7AUybwAkiDfzi4xLf8RHXENXRdgPqm2",
  "key33": "3S2ynJxTEZnDrdcuvNMLetxmVTp9oajeNffporwQ4cJLZ2KoEuJDDojqDo92H96Rhr64a94JiT8yocgmuADNTuTV",
  "key34": "5mGVHW7SDGYasntSHnZezUHZb3pUurcK32ycfZRZtE34kqNHykCafc2nbjwHFRgMzqahcwzHbjqjoEtoh6eJ7Ggr",
  "key35": "BUuTk1yF4bBFSHryd56Eosy8s5MD2V4QeCMeB2Qh7G1kHesejSXbQyGcbP4q21qa5MY2B2PVvZiuzv11SX4z2Pj",
  "key36": "26hZN8yyhw5eCw7Cm1ZrPQq4RdiLkPrJYHeukULcSTTDAhvPereF2AHhSw3baLsWiAecKF5arSGovZ7qvqTQ5bh1",
  "key37": "5ie8D9pEssZNNwk2k4dezR61q4G9vSPf58VMtCmyJpFAATL8fPFzMFJ2Zs27VgwGgZpaNPw8YaZLi7FEfwk1miBY",
  "key38": "4d9SKKmoABnpnqm8HaHi9raGSLJ8FGWLBaGxTzuyny8eej5zSaL3RMXZUSS4kaMgHMMroTHCV74NjZWK6FWfiE4C",
  "key39": "ENbg92k8mcHBD2X14RNYcXP5cUMR8YQubnLbBCixpq9gL8hBg44saG9oG1r2YhcdosnnMxXyoMoFDgBKxExUKmF",
  "key40": "66AkRFjxAWTrQCf3t31Pr4uk94nRZ7t9GnZbfFJmZD2nCWeHrtev2zMDowomPrsqr6uPXpfJnLitxrxJ5TqrVbHA",
  "key41": "2qmYxkjuMnq5MM6eaBvPrhHxuGAALKHqAJGGkpPUGf9shoic1rJzDfEM32e77fRg4RguNygNem47QFRukpiFU9j",
  "key42": "5wg9hdPLQbv4wKwpqg7Kus2Bvfv8TewGGBFyuQEnE2oNRh7FdpSqpmugMdV9NUQ7EAzY2R7Zmf71GPdznzGzbVnF",
  "key43": "2uFJb9J7r7m5ouoLaXUeWuvYCuX77Mrt2uJzpfhrdUEAkCFdzJb6o5JTWEbgVvuwUqU13wHYEz5do395UbUg8p4",
  "key44": "4eGWeZLaV8tvBmnNBN8Np877Qfu8JnN5jiwsFhqnF1Ay2aL6cFijVUTmZ345Ru9XFUbmia2FRPUMRSeJFEvqRVTZ",
  "key45": "5LZxYe8QJD2miHwLJDrh37n3q5M19d5vHxyLPwdWHWYNos36L4dMpfqYu8XWk9dLmfmrkz3mRizvrCRC7eWeY19G"
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
