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
    "2tPVNYtZWiN1NocpzBkVWrjWBx4kYYYSVTXXHdBKiAR1vDSq3b119vXUBDTZBBf7L8qacKcD3DwL3Y8zngUDJV3H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HD9sh8mZDgBnaPRCiCep4UBucdaCYdJD5um3cNFX5mbAVHK9gPn7vUci7rCT5jX7SFb75FAoV3TAfAybestw9Pi",
  "key1": "4SopdE6WU9C7CM5kzY7UhkehgJaP8jLxCH7btQTpgU7cPc6W1TWsar8WnCVaB4ZcbydDEyMGneUnvSjm7RebvbW3",
  "key2": "5aRqacLPD5RxQXxBm5vZXMaiuSU18W7tQ3JSagD6TfDaLqRAk2g95LmXgDH1vMmdpMMYsq5k1mtcqTkCkGRUn1z",
  "key3": "39zNykCMfRrNFGEqFPgnSaTQw5CinapPHNrinHDr3ZcSUewzBgQPbuL3K3FXdaGz6c7Jky67SoqKRjehUUuSwYtw",
  "key4": "h1Vx21ngaWqT6QSeU5irFYSfiqcSq6oGGWUHsedzhYqRCLyANGbXZzwB1DbuxQMyVBmvomKVoXYFiRQK2LQ5u4Q",
  "key5": "5vKP4MJXgAgMbbh1Q9snK9AVZWKQrvjJmRb7J9zyfLQDLBH88ANy2BczmqZiwdUqvQj9FRw2T7yXL6fuxbshh9dY",
  "key6": "2AWbTbtYM2z6eecmRqbLGy2t5wB98d4C5U3CoZVhcZSbk5BLXHkzejKBBwmjMugeLL8Zx1vUnkR27xZqUNGSF2ya",
  "key7": "4Lo5Z4LHFxJFbMin47QVPLNjXNC543NeTjRcP9TPRmYwjiXfVKurQALoLWWpD2LdqPpobSa2eHs8s64yJov9gPXV",
  "key8": "4PRP7G8M549wGZTEo5Cic4fPbPSd3XQve5V1xdAup5yEXU3DxjDgjpVvJLjumr9jrrgUQXfRERwUJVqoHL88EX5Q",
  "key9": "CG9m7Map8oKBdF5bVgCFZ7TXnL5FHvVcFSJkE4SDzJbrFpxiUvKSb9FFSxDZd8nexCaLmeMqVuxixSeQNg3P4bN",
  "key10": "2RQp3VmEmp7PXZVBAKUQd6qdqZvs1q89Dk92hSoKvBZwdQzyRoLb4RAJL2wZi7N7fQPRC9f6XyxZz1eMgrmEnkYA",
  "key11": "4Hbn7mU54EExuUxveivE7HKxY9rueUNDDdeUV8F5vJ5CKp3isugMxYcKKoazYhHDgWecdGa8wbiebZprdGA3cTVh",
  "key12": "FY7zyRZFkppzCX3beddSAuYiM1K1YwEc1YLibjzsiBEJeRwacAyNYCA91NZ84iBe4XQhfQbBngSurfacjdkWwtR",
  "key13": "Ceu8V6VdLuoeCmWbsFJgV5SKsodpRhhmCrAe1Ea16yE72H9hAyeC1a4ajTq4nTATrk4Bo6ZjQimunYaiPLgqGWE",
  "key14": "2eVmmEKdctyvxFjDzy67CUDJQGu5PzzJezunZNPyVfe4X2tHNy6cHD2rcNTtWkCqQTrAiPWxKp1HYjKap74BTiPx",
  "key15": "2ZrX9vfAhVUPMzeyZJqBmMfVhKAh5G7V1QrksSCPMnYhqY2sqCGxJQkTm9K8kqC4eRVprUxEyrGskGJUtSMm51zD",
  "key16": "2wyyigQWEa87o9SDcxpLXLCQZRkHbmyx8w6PjGj3GhzxNQtANAKNj7AaV4GBRbdhALJdjKFRUetvEtxc2HcXUP3Z",
  "key17": "32LYaTLbuFu1GsGu6ELnZPa2EoteqVZMWU3fnJuHY8ae54ePEF2yu33tGgUrzqEz4W6hnxKsnezdNCzsFXJ7j2Ah",
  "key18": "5nW78dexfcaacVaWR8W68ybzQPLFBtc1tv2zCofhN3KNyFbn4Tr4i42RoKXe5FJPxee2dYYxqpijJEoZ2qToNYaE",
  "key19": "4XZFkySXfjoQpWuuFQRrChexGBe4BzdWj7hH2ZVKTApgzThR2wjWrKi9C3cAHsbSVZUzzUyQVUhwDpnckPs3rmvD",
  "key20": "3bHyRwNCSmtTEv8jSvsJJzHBXNDCnngxY38Yzkpu77sshHBSkteyMfMHp52Yzqw28gQaULzuXc1HaHGeiVVoiRAM",
  "key21": "3KQMHmb9ji9CA94uzUCBxX4gbasQSyTFXo9ztjeHJ9sPe2i18RPvndBpeMWRsVmcYAvdgScHzZ4gf2PtFF9Bp5hc",
  "key22": "6eSPtR1DnoyEpfw5h6NVPKxsGrNbYTu7sNhkMndd4b6eCXCFvsEsGrdb41UAKwvbArk8dKwCfGt76vWCyDStq1C",
  "key23": "UaYShgfh3bPiueMUkf5VJLU39Dpd17nAgRAFfd2dUULe9j7u4LfM8YWmHBgcKm6fRZvSER3bhaZpqFiz7BsSaow",
  "key24": "4nuq6KnudTqtqRZxHKDm1xeg8iWFHjvFwcpzHffQmkvEUtWS7Hr2odCvKx6mkj51yVJp1iu6QuTtdtRzFsNREPBe",
  "key25": "NFQ9qJwRQ8nHmnNuTSzyuny7ZEjGcXzx4cTDMA6h3vMiPFDp2WBzwx8M5RZhrao71UgdWQwGaDHFcjusg3r2vKW",
  "key26": "5hDdTAjeoYkGfJvJHTmwUfQ1kYiSE195A9V47E5wbdNTTMfJoVUqkbZpK15imboWmq58nXEPMiLeQBWAcCwe6VPo",
  "key27": "4RGzqBsXuYfYFAh5wirUHtdyzgKr63DojtyDfmkZ9tabJc4Kb169jFf2FUiXiyg2GA9CsKQTqFg3iXGrgCbhRCK8",
  "key28": "58iA4o7D14gRodt4SKxVTcnPPWfaBA1cmfPSteJPNiEATqFLoXrzZmS4uR6T6NxpwjkJGzMrz9tBHKe82Dp7soGq",
  "key29": "2kRjhXWyJNB8FVcBDt6231W5TAyCSiG5PpKpTLWsPyFFchwkCT14C5wuQq2Q29rJFUVpvn8izBiinUhFACLFSwA1",
  "key30": "5gLtRUh1aZxYGzJoT6AXsbs3nFykfqGEPVysbizVLgDL8zYbTeUex1wdnS9aX2qfDhN6kHifcySu84tGBa2yw2gD",
  "key31": "44XqXfN1qTnnBHxfgB9yUEnu3V11fUhSyUMAH22RP8sXYG3wJciss3eETfsz2gBMzySU7iRDW2CPtwVWC6SbMLGM",
  "key32": "EFdke54KyegcAfRAcgYK3ATiuRZLNjKgBGNKLJh7dMB5kUjhCdAqZbJa9Ce3zMCm2ff99QmrNELyRJ1erqN2HFd",
  "key33": "3k9WH7H8BUBWGrHaDFL7Lk5H8Jw7Lomu8YL1EcyBAzFGA2fyEXosKvkYdpTCM9JdWwm7GimPNzqe4KxNbriS47Yp",
  "key34": "3fKNYNptF4x2F5jTHvDynqxCqyvcA4pY1yMBypWT34PBtgdtwFzE41yYkBVRA3J1w4Kg1cqwySCHnh1R7WjdcRLs",
  "key35": "5fCnxYWpDN94VYSDQd6CRQYh4Ep7N2xyr9J7aunDjmxZNhX5KCYCyhTNkMtJHYchvi7o6hoD52r6p74inTxAqPdh",
  "key36": "3U3RKqX9sHajBbxzUghuWa959MPApNTnb6zf9YraiQJdHTECoeS5ccyVHYS8jf77bbreNCJFzcbHfBAtgvJqCSW3",
  "key37": "4uY3qNgWYHBmjDyvURU8jJTMLzfAiGQE8TbRUCdzcw3cYwAebAE4Zpgep3wxNAZkjkccozcv47MPm2BjxvsVMsc1",
  "key38": "TzeDWwf9KHUFpYUho5FAti82zqFrZP8QzmYePmgQjBm3jLcgqT644UNL1BNxGZ9PzxzeQzB8GyQUdocWKu6LRQM"
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
