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
    "u3yvQXWrZCJo8aEowpB2QGR3fndn2sJqbm3DmqcXuknYN2Puzr6u1UhvgoDcmCtYDJmkR4MjvVF2aDWbRhk15oX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uZCGXyAU5EMgXuMnQ7ueimM41Ww4MFKd5ssEFkhsXg3j153oavYjTgAud55SQwi7kZHDDXBne9AxztHyPNC17mA",
  "key1": "5K6QPBPefcGTLg5AikvAH6rTqmRz4Px2zvjLDh3SDfe9YTECjRcs2TxodxRjmmyGQ9mqtvkUjZ6b1pavfn5YsFvb",
  "key2": "3TwKLBRLpESQ1APQhdvazuwSu49gmKg5ixuXQCTQBpKazsk4b7cf79Stn9WdpsgKv7g5LwCUaB1RvYnuSSTF98fM",
  "key3": "4kaZJHiUUYeqhiB9xrearFm9K8An4Ar9M8NkVv1CAKkgCPdBgVi5Ev8gKwuEEFxRfRGAUDzw4u2ddAF6NiWzK4Uv",
  "key4": "2EeRuS5CkAqDNQgT8J4sQf2A9QBmtTXzbWkTyPg58jvqB8eDrzCZxQqYDBuxP1Azzew5qHC1oPugyMQBUFTipyck",
  "key5": "2W5XNhKSW4Bd2hSArVbib2zUHduqdnWAieMRY6LPhkSYAHDqBHcun7WUUNmA8aGSJgWxpjjioFKpNLVo34Zhsdv4",
  "key6": "UJN5jcTrcSh1FWbYbixb5CszU8nVyVmxHaoRzDQWfoBKkuhddZ23rpKgr5K3NfJVzXGPpiiXa1XnCMynPTRXJaj",
  "key7": "2L8pJZJgaJDPTjSEdMpyjzmQfoT9iPoGUbV2pa81CHrCQbJLDQAh4qEh6U69u2cu4kcFS5hq9XF9kJV5VkXyVWBN",
  "key8": "2FzQeea2GqwAVCNAWm2npHDj41N8tuF3cBF2GSic5tvghcXV65aJcA4aQA7jHcFL2msTXzHuRRGbBVCvGK9iAxPK",
  "key9": "37wqE913f343gtVVneybDGYGXbeXGN35uHdzpr5Gf6g7jNZeNfpDwjKPg9pfUxjcdJ9sA7GTFGT4PwxoExpErzJ3",
  "key10": "5YhJJ5h6Xxo5JG9Zh7SyoihYTze6vpu7HBEeDYZereE981zkZzotYzuVYDgVp6tSBnb8WbcXCTxmjPhJCCGa9T3t",
  "key11": "476awBmkz2snFE332jpX8ZRj2chk4DdsrmvPtqSR7KkDMCHkWq84WeDSjPyFcn4tEjyeHaP3TtGsx4g8MSM2GzN3",
  "key12": "2iMdfmE7s3JrAUtgT9Qvngx3bF6m1FYLNVFTHSVP4DGRLiaNbnn72B3y2M184aznzeaC1AcSs9LpJ5uiWPGKxDwm",
  "key13": "51ZS7McNH2cU3AwKmLEQhMJrppFszXjmvfJoWaLREa9fqU7FhzawcnhbxWtzeMVdRCMcdwugAjfqKXDc7JQCovca",
  "key14": "56GrFHzThrUF5FmdZcFd5xyZQkmekDa4C7veVYsdPpQEzb1pkDK9Y9GrkbobvS6ufgULoGAoHpxNez1iR22vjPvF",
  "key15": "4Vt3wriTW4F8b9nY932YRtdpKEVXW839xupQG3VuEyiPAXWQzZvbako1kuqRRBYwGGshPic2MPYwFqoaAqnyCYmG",
  "key16": "2SxHPdE93XFDy5SnXyh1pfYWvdA3M4owfzzPgMYzYXsFnLLBamRpptFEPrFHGCXBiicDuVL6y9VF75eB6LGbg4oH",
  "key17": "oEdFbg8b5xmidedHTjXb51i35cjr9X9DE8AtM5nVW5SzUi4ovVvsbFrZaBVHmg2keEKJQcwitBuJZK3e8yeoSRo",
  "key18": "3tCtaP5gyV1rHKVivquuMnNPzeepgGUfroczxHA785pjrNhpvVkS9Rn7XEc9ry6kh8oedxDNccoYF6bvoTwCABKz",
  "key19": "3tSmkDKnr9DeM8nNDBSYXbw9Dvx7txD2SnkgDYAoFJ9YBEDvrAakDxXGXXKwDPY1N9RnTyVHzux3XsehrxV3wi1V",
  "key20": "3ZyUqqPLwAbrrFvLQQmogkcVhyfj3BKsBV5t6uv9VAjYwbCrMzNvFQi93h58KnJQWWM9FDbRfMDkwW2epTKtpy7S",
  "key21": "5Sfo5wE5bKPxD7UXsGkvqyhL5qPEwXjMqjwrNxr4jmTYVjrNoUdaJaRQHwHToZ7EfXktE4tiVsjEKkEPVwfoP6rs",
  "key22": "3rwVyL8TKG9sdKboccKFqXhpNttkCbNfJm7EH5bxN6rvCi4utT7GgqYMRvqXBzGecj7upuVv2ynMmVKtmgNgDspc",
  "key23": "5BMiKVaEWrZttkVEEax14aadgrtgP9t3W88vJ92Nov6tYuuxBc5W8zHWXTrN4HCAMHEMDDqWyzmosynKp4LpvHoz",
  "key24": "3tcLAamMiP7J9a5GnYdbS5ejewiyinNik97NsGnh2x6Vx2sGWAa8AuAiiK9c2meDMmCpN8QMW3kGKQCZrx3wSy8Y",
  "key25": "61tmyoGoY7CSPG7vDmv1gmF7TuApiPomtVswPMFfXEAGwYCn6odZhSYniXdPXooxN2vcPYSMWjQgFGRU6kDfVenf",
  "key26": "2etbSaTiHvDzm4dJguhPbdZaxttd1ZGrNAW8BTJwatvad3Ey2BdEokJZ1hqq5PgoARsgSAp4LvZPntUV5SsLv2Vg",
  "key27": "576thn9xYBfyd3VxtMgWxLughc1mk6FicpLPQKMG5HXEjtdHyT9aKncoAwssAoiywZFi245vjFuqDmGUCf3Jq6yV",
  "key28": "4k6pLHLRTb7TGxjFnd4FowTY6rm9DHCQ3ch34FGyQJ6EJsr2VRdPqtp8C1G8HGPV87wRtnTPGFo3aHviWEQ1FQMy",
  "key29": "5TgaQ9QEPRhm9bsCZ7cEAEdzFUB2NtKHoGvJtDRS5CBdejYTkje3539b4EbqU27qvxaXDWQkxRiPrXcVSsyZbj5E",
  "key30": "5t6jzvgqKcBRjzDNGKi6DKJYtLiQ1GfDd99FwKZ7HJyF1ShzTvTkcxvfEpymJHzLzumSvnRnRLusJxDzisqS6umh"
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
