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
    "nzjYQq4Di76uu7LwHGi32fo3KzNSdA5rL84jAoUehqft46pizU9dDFYcqtfvoadHg99zzEA4CH9krw9inawawe3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j4xU5o9wHfKUUjUBn8chUYhdFkcWX4MrUiEftHAGg6fh1nRuLxioTnVAzRQWnrKVme8bE4B2k4tpg4eimMBVXgk",
  "key1": "ViGuLE6juF8CKERSLhEMBUxTQdiY8PaBaMqiEMyink1rEBuG8nAKqhBhLNwFXVWjFgtg6aH9pvYJ4QfnW4JxwMC",
  "key2": "2ER2LwZsDLqcbtjZUJiDF1c38dtWKUYwANneU5MyF3khfjg6fVJB1TRmQzzQ5h7b4hTrwiDvHAJ5nfwbEFqbkMH1",
  "key3": "3z5aXtG8iy69k58VtViiTSNU3TM2JEw7xU7iNnpW4ng65s3HpaLwYVA7sTR6dN8HRC7hLAA1neatdBgCoiqPz7bQ",
  "key4": "411q7paWMBmupcnCS1BHWpi8sxv55AeMAs5hQmFxcdvPQFA5hZdALDfvMRCpwuAmX6DiCZpNrTenWbRhUe8DaWpm",
  "key5": "5tM3e6cL5eRbbSPpfycoJ1k3cGBKqMAmWpjt7yXVEtFer86nmwdi4n29vdekeBcmbvfxAkGe94uzDudD6LBgoFtn",
  "key6": "64iktmhCsTkS1k44bM7VqgbMzPpiW9bSU6Bp1a2qxUCfPmMxDorodhFybLtM2cABkUhmMaNDss57MooqDyXsHhh",
  "key7": "5M37quKoqjNTfL4cqEsrGDr42LSRQxWxYywhLYEBLZrwji8qraqmm2xMwEKHrELHx7VcwMoQebmz995kGdtArfqu",
  "key8": "25AUFJdEkZdvSVydjMtG5dBdfuWPg3YxxGE2M5WBnYTFd9epJ2KQ34zcaawuosvT4EXPCbYGe2kYej1uJ31dE6X3",
  "key9": "5G331B7BJVbHNAkxMppPVzM57DXoiwAGFFJGfkHMUCfng3zyknEAomG9Wepf68mQTEGX3FV3BzooJEZd4JN32zS6",
  "key10": "ticQGuauDRNH543tgy1YorDpWuhHMvL2dEsq14KGk28RrBF5w2oeBiQMgekqwASQuGJY95p4e9NYCSFAacBtLdo",
  "key11": "2kUqVGQvuHfJ5LTGumNVAizTbRxiumNwuJB43sC9K5kG7Fw1gXsCEReiJeEJjrmjbxfipT1yDpH542tkwFuw2pAg",
  "key12": "5ijramA1VD5KvnEnXEemE1bH998se26fKJ3Yq9aaDBjRQZcqeqgxjQ7eRXB7Rx7QPJhGXnZQQUgckj6uwUZTQ8e9",
  "key13": "2Uu3nsw3j5nkUfMMHDaSd7TVyrWbXZvCSkX41tDCj49Vx5gbRKveY8WH2gnTo5UtfWBeDXJyzfFGkvQaj3mmp94C",
  "key14": "2Y7Hto1NhnfDURqVgFNNJrscnyJQULLbE5qVsPDF6y9dafbCZtytoTHE4qo5H3wMNQrHbpGPwzrev1g9QEichvY6",
  "key15": "4qDbfnHnwivSdeG9UJSogxtGteWi32pA1hRtSyhL1potUTYxN2YDN4jCFzNWhiVcQQTgc4SdWXB5uNkw3hsXfbBZ",
  "key16": "3cXyjw8nw2LAFCj4FsddJw2DNMo9f4Y4FEnTXhBnYJbio7YHkh17sfYJfxQt3bbfg6ZuYnCptVADxYi2vC4wJPw2",
  "key17": "3zPMtLhf892vSDebx6SFV9HeoMRyx3bkEyhQtfATLsECyaUrxhoUNf8BfTBebHWtVDNojqscU7PDFHNkH8TLAN9w",
  "key18": "2Nk9SxRsHw4t7g9Rwh22YWt9vSQhMP9nWucppXqSRLeVANZPq1R27CfxHsJMN9iqTWjSUmVHhKGUBVvakhJJgaPw",
  "key19": "X3AvrPAc5mC7x89fj3r3w6MqM55z8jk7zsqUA3wCfv7nRHEhyUqipqy3VSPYDFbFu4N4M7j4oMsQ7DPXMjafBvx",
  "key20": "2CwoBPdrvDhrb7ByM6YLp8zMmGojSmcXhg54bGxRQ2TPKnoZzfxE3qa3zu2aXFt7RuQSwqzdGFkgSDdxHMCW2JQe",
  "key21": "4ti6TYgwPuhwfANdvsd1H27BwoySgMrAX78Q4WGDjAxBVkcpm2ksUVSaEuFieoAchHFiuKj4KXePXAFBSziqoxu7",
  "key22": "LEKeZC4jCNH7DuXpTrhgQvuVnyaormtz8NAFg6w4i3jMp8hzUXzSTWGxMHQUitdqa347YSJBKvq1GkdUrT9ZSUi",
  "key23": "2ZuhQHVSyCdAZzKmztKxyxwQg8cTv7F573suvcZPiAaJQqfReoxeJV7PVWyAFBewSN3YPsKznbbeQWcSU1F6C444",
  "key24": "jGQVp66biR5uyXsFgXycuPKPRegQjR1mn5mh6g3NncwKR5MYc19bVrkBiC7VSdBQZA8QNhyTzgJ8UFBVMFFpcuf",
  "key25": "5UPTYBLpo7Ugo1a77ip1AEKWjbSpqGgDMoxnNHDg7V4MoKqTzFmmrFyfTYLPvv5UWu76TU8F5MXQB5krAtuZXvD",
  "key26": "4EiniWtwCPsERSQCmf32UbLijuYA6k6kaaKRewK63C85Tz4FPJeioWarTDRED5NnFBP3t6NJiy8Be26dWQ6oaeNA",
  "key27": "3vR373WPS8aWL1ZF5nQpDyoi7GWwEHeweu9s27q6z3Vr6dTQA956br9miTBoWiqDj2t41QtknQ9HarXPFvRtH8CH",
  "key28": "39weQ7pjnWpiCsyh55BW2MivkwiTU5MXZCQf8HBqkasefcVwfxqKgYM91kZLSwxSrJSY4goKWSFaoPvkASS9QkRW",
  "key29": "cD4DCDwjtpPr8fiAnH5qscFrsNsAVCrcwsZUF5GCoHZdrJRJefDDve3j3wHogSe7imHz3aFfsA6NusjXSuvK2tD",
  "key30": "3DUFMXkpNYng3tmjspEyyjMUQtZKFTxdU98afc9KeR4L7wYqfrnYr89EDxgpxgYM6DVMooxhK28QBfft1yXNZBpq",
  "key31": "38Y9FfWUKENsKJU16JBArNUY5DBXjJE7F3Zjs4UDhbDQnCcMTh54GV3r7HieZfZ6ZuUhXuGqzUwFGX8j24irqizh",
  "key32": "3VVtDk8xYRykh1RANF9zUrC9WwZFKKufwZRJTqSwURNNr64TQwF3dAArNfeYnjR5CYi6s84juUW3aAMxE7gDxRgJ",
  "key33": "67PCYCVNH8yjGLhd7VQ3FSsTf98KdcgcwXJnLnGW54usAYLJsV1bnhuHHtkuzHC9XRcnYUZb2mXFYA19AdKck3DD"
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
