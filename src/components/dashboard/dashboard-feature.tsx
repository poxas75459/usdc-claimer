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
    "96VmZT8bXVPsv13diNnztxW4HYfkXuRTxXz977ga1FBSXhUNhqsboBkbvaCcTSEcgdyacgY7YJ9bpjNNHkFgmaT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Swxri9qVRzQhi9XKqwGuRpME6dVwc4gg8CTUCcdt9sFtFqZ89bAGDFqLmAmz3X4PbpZ6aEn8Xut6Rz7YQAg4ka6",
  "key1": "4S74tdRWhLhVB1HHC58k5fVwuEuJvzUY2MD4pqC4LT6ADLfeBZbj3gXhbYgtyej998QbABmJe8MpZx8K3B6zQtoL",
  "key2": "3VP5qjH312vR1TLhumqEcnVUSWSJApZrkhZwhAKnv1NzQypTdhczdka6HanTMHjGnUocmdQkTGBgg34RsqmASboE",
  "key3": "PRi1RBFMH9vBWYzC9SDiaCpmSbaRamUfU3DEyMymgNeZEiEc1AMckxY9C8mpv9o85hSnMKLxX75Ysd87AdLBeQ5",
  "key4": "FVVevC4yXgJe7fuDs5xvVYEiCVAEUpwqBVczmQAe6AGjwVgcSgREHPCRdqqFcxzntB8umWwajx64HXWbZGVtuh8",
  "key5": "4Gxgr39sXA68cefkQSLGmGjnMWxYyee8cGpYVWiJVZeqMbinymCLTVQqdi8yiKV4ufeJhrGtjZi31jEkZDLXdY6w",
  "key6": "15T6ebBXjKc2eQeXMUGVnApHPtcmXZQNx53RnUsy86nazW2P7BhaFDVC895RMDQknGh6cyGYDsiVZHjgyjJd9Ta",
  "key7": "5bpR7kM62BSewQtocgw3Tz6p7Vnnyh88BA89am2NtoAELEFiw4ErJAAPgCWCxZsNfh4rzSrMXVqhj7P16kX2vg3H",
  "key8": "Qk42Rh9JTEFSFVZnb3zAdZgAt3bz1JUPHTtH52TnmidAqUWVuWrhuM8LfUBDGtgvEmEYgQSBBJsgwS1bYr6HYVE",
  "key9": "WJjh6vLfnCzkwu9eSCdSRUkVYxJqCqR14tf2C8TmeAsx9DaPeSwiuiHAmVAQC6maUTVHycWDgj3vjRkUzCdQ3Er",
  "key10": "2oiutZt9RkFXCtYJzVrosCs4uvW8RK9J5REQta2oKwEUkjGKntYok8TZhXxmtdvWKztmWWtntLjn945RDCdiCmkw",
  "key11": "3x2gVYZX2nc7r5364hpG688HGFCw3zuA6jX1xHNzqKvQWFgS13ryouWNBKjWvjTV7pAhFw8niUtVHwst6nLTKfox",
  "key12": "5XVag88sAvDstAoKatDnj4spvcKYFV1yw4S7L9uL686h2qjuf3WdMPB9mhfeAZTgnnnDoQ88jHnNbNa3DrziMwnk",
  "key13": "2ZKG6MJG999Sqt32hkQqs97pc8pGTggMYJpbo72MoTQ6Auaa9HJbZQEbfNeXgSvYWfdL7sdxJ2Pt8xXr8fTPY6xP",
  "key14": "4BkTBKrzSUQvgNdfb9HvEmKqJsH4372iS57KfcpJG3qe4biDcgRPC3FWrb8A2veoTe1QjQdBMH9s3DBFQvRvMhvs",
  "key15": "5F88xGTDRjaPTkim6oWiux3RsdwRigf6PvuBYuPt6RCMAXPMPWP4Mx5mH7mLvRb2wQHhg7SvTnSyVvjS3Wh6eaHb",
  "key16": "3bNbcSn9sv2TiHGsrucA6VnoeR1TPVEBAsKioht7WEp9LtzBjHCLintmpppDiHExWRHixNBf7yzFGcTi5GCdXqHY",
  "key17": "54J1ND1id8S56QdFEnKvBqj8z15igTLvrpo6Srj4VSc45Mx8qLaX4GsgqpaTKT6VUxwxrGD7tGcomcMuYAAmVBTV",
  "key18": "4iR1oaQ4VUnxMVSr2kQSMgRCEWjizwWZ9vmqJ7GNzx6RCTtKhBQ78ryWh72DfKwtcub6TuiD7yBec9odYV2sHqSU",
  "key19": "53ceQjiWNidkhY8FNiu4qJttpAzQjuf46ogFDzreLsodKxTHjZJQCuog14zbnh7BqSv38q5W8SNL4w7TuPkQFcQ",
  "key20": "26BgAWWMPDKPdienF6JFE7zHyAsCgQfmUztGohrmx6Le5U3NCMiqfG9YrRLuqk7YuNPtrAHpFVwypJKXjfJ7JLKA",
  "key21": "4mpAqa5DhFqKFR7iS5EGVK3kAxWbCu5k51Xa7SnGV73f7BfvH82b6YX6AWRU1ehhREGvEiqaMEK1HNt9tGg1ovyZ",
  "key22": "63my6J6CCt8LMNc7xr4SPzEonMDjbyfquiXuuaMibsQXpPQpe1EnFDSpFSJwSmJEoqeLxsEX3mUyuYnYff1hbhhX",
  "key23": "5zm5HBi96WHmr6mQpVUQz79SWh5ZG1wnDLfS5ASYucKhJkq3td1LRcQsPKBwjthZs9J87q8hoUXwX5bH5fo2ggLP",
  "key24": "2xdE4LZVm3mEZASw3Fsi7n3G1sMNxd5mJezpHwAG492Gv7RWEWCe3ViADpZj9BiyN5LGqWWCe3fGeAJqZHns47ap",
  "key25": "4Qo8ruGNUc4nMevmgCu7TYohHTivmC1qc6LVGPWUsjshNtghaVXujuhgC6epYTfgyjvvQZsCiRkX9YscpRodZ9qw",
  "key26": "2noWEiSFLYU5K4KYgisPdS3v72xFmTzABvAdF3xSkZ9qKQ918rCYDKsBuFFg27nemnq1gyfKhfaqFZDzSgkTZDRE",
  "key27": "4eLPEnZ9hArb8dDmbw5DpPVeQMzfziGnLi4DuNm5tjbKjh623Y1ggFZ7X2e1qfsXHmJavGk5VnGRWUY9SDnq2ng",
  "key28": "5SwZSYFCaGfLyvt6zN2Ho8v6vNi9iaQ9miDSnfFJUUJ9bqLc2kwZxvqBTYJ9ngk2st2jYetVYCKKFgYt7DKc4Sdw",
  "key29": "oWhCXto5yS7TuojywvmdisKzXz7jkr9FS2w3C7Rbm8s8du3ciKJfuZfcna5ftTUgJRLzbYbuHMeURzqGJMmQawn",
  "key30": "2nxH91fxAzUukpsD4e8kNjX8CHs6GWMx8E2vcg4S1Widqh9KWHW9sqQisjjj5Apa9PFn48ngq9mrQZsLLYKYL5mM",
  "key31": "2RJygZnVdGwhiuP8CX5hKdH834giMpsTREhyVzz5vo6x2jXzLadE1E7m1ksnTtCdK736Y84CbGBpsJwM2dKUkvYV",
  "key32": "dHjBoh4S9VucgnBx11EoKt5WxzEavmf22m1PwGPnzR4UKg4L4Uy9V5PrpxZxCKgkq2GZ7XoixNxz9nkwJDiJWAJ",
  "key33": "G4as4cUq6L753LqVu9L3PGyQuYDiGxRGQJCvhetoYfM3pDo5vP8Wymr4dFJJSihnULKQEVj2dhHQqYbMmameEPr"
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
