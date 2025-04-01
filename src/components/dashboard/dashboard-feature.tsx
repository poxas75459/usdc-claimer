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
    "5J7fQiwgBg22tFKrrbgTwwSSEQZfdsDZaxfxPu8ERr9WtHfZgvX8eGB9VAWxb8VQ3MD7KFvtCiJMrTnRH2PCKji4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MTQwf63p9Srjr7a2Z13wT7xFYzDCSW6ehHCcT15CpKybWQfoz7WtLmcnVigBXuZADuC32tKiSNRRxTWrukDxwv3",
  "key1": "4GvYEK127B89jZ3JFCGJaA3cKmQMnK2DQypSomv4wruTw9Cd39iXL9ufXNfxC99fGqQc7CoeGi57nQobzdcCUMUd",
  "key2": "LTzY9aXjB2DjsrTuYeT6MYoiReMJU8nhza3WRic585T4zYMQzhiUKPc9tYZmyvpZcxBwEtLBvVBpk5bHo9wV2iN",
  "key3": "3EShgbwbjW32yEXdLz3r3eKR6BJvML1qZMpQ8C6r1Etw9M293vgoaZEiC5mt8PfnbSHZyiVM2P12ip1EoneskHL8",
  "key4": "3abBSVnv9fg85oMEZkC1vjFzQpKJGFE2TNZ5merVMs4otwt8Caqx3A1Vt5gvpi7ntC6KXHLFuSmSwv9RQqyZ4t4o",
  "key5": "54Q7MtiyGxgu7hWK1KiqizU2Zi2sZKc8YrGXBT5SFWASu68Prd9wQo9WnYxfsBQJ5u4fsRtAVBugrM2bAdWDWYcq",
  "key6": "4wVxXWHUxCAkmUUfe4FZE3HhjrjnMXDajGu2NmdUyinQy1yXCc8ENmiik3bxxq9E5zKreZbjPc3nb8mPPz4WGMTw",
  "key7": "4S81k8mLtNnLVcz5tErUeN6qG8zy47mm7NPBNGnbJE88B5RHteCZs1qQM7FTrL6PADAD6ffw5LbTu8btw2H1WC6a",
  "key8": "4G3ZAjriYKne6fLiHrAFqMRk7kRAC9iEikwLzLR9dz62qWJMJdmt2Cudvbq5pBiFiXMyvZc6mS3tGUbyrUsAQa2r",
  "key9": "5d9fFyy7g2oGq9WqWL41e6k7595scYF2G1MSznmq7vzULbZpqMEBVZC43QFBx57oFEuy1Wj1EZ3yz2eVncgAoLLR",
  "key10": "HmibfMuhyVUzZZuX6sSKspBtTb98CmbHE3fFNGvCS9qqQwNjbfYRx4yBrySpDcZo7A5M1oQBSWDNtgSNhvxSqtF",
  "key11": "2eJsJ4PKFENjkYvn4KvuYJK2bCrgoPpGaYbg8gKNE8vSJam2Q1GT2yaifeCprrDwfKVpDdGDAfwWcPMZo4RwdJED",
  "key12": "7SB7oqhs5xtCo4PH5VyMwPbHyovi8XhCj5A3uEeCvbU1HGinRkkJNgEPBMgfpmPDCvs4zDykaFxqLKqw2spo2R9",
  "key13": "2Xhewp61mEioL9WAQpAsYHRwnSFJ7QvFkCuUoVJDoY1s2Auc2daiLdwsusGsxM7YJB4q3CKZun6jcYvcrNMTiCcu",
  "key14": "RqRKhUKJ589Cj1w1xedyXDTR3He6RtG9fxMNEtr7vefnhVCH56M7Fa56uv7MpybRRKK7WwCooaxaG5tF28CywuX",
  "key15": "DDyWmN1RDzFxejXACdiiskA3dmJugExDm3ufdazuDSUSWJLDwEi3vrcLaKTwqzHWbeYtugmdsfS1n7tu5zQrhnR",
  "key16": "25KAitE1Dh1ycJeMkPvJeyXSR3AittywhYSnfyqcghWtjAz7XuiHoHbSR6LNY4sWTy5mdfSWmzu12qPvJveuShBD",
  "key17": "5ACVM8PkGAiS7d7yZhPejnRw6o2servJGC3A1dk58zGvJ2y2eDt8Lfw9fVFx6Y4kcsYzwej7zHvetipxDZufhkB2",
  "key18": "4oomjXnWGF2793FjUHpYpbeYeQgvrfbhNGXCLKscauyFbHkDgHTiaR9J8JAdtj1KMYqqthaVFGTqUbFeYjr2KwkE",
  "key19": "3Lp2wubtVX7M4aXNkpodZWbvEy1F9ozq2qMD1CE1mvW5f7Qg4Nv2ck9Ts5ppMDr7kgeejMw91UQozvXiqDx8oLhM",
  "key20": "2Ve6QRhskfLK7LCsLF9nhrUeRmKLkPF3UrMPiqV9EnMR7qo28k5z6p9KTfwUPWEWcTXik7iXVfxLwnTJNvLgF7dv",
  "key21": "4W1wUw8MHdizYmbTw9mhRqQcd5A6sd5ZwGreV49k1fmSdUHkr5KKgNdXM1o2wa31p76cfGRUw4fgLmoQJ2njdZ1b",
  "key22": "4DPMW3eGKR1QnTx2jX2Z4Npyv1b8yGvdcoAEWhyHBsYcNhDJnobHmhbiUzpSX3tUfPoaK5ChYxuA2qi1JxgVeAQk",
  "key23": "2FSZkDpPWCYNo5cpJ2Kszeuu2iT4Hy6XFcMgxMtpiEuFgmERCpQ2Kqw7KnxNWKgF7iCdSB48m7chic4iUPk1omDF",
  "key24": "45M7zTPu2EVMstew3HUdjuh1nD1tbsqG4UwDAwhGRFhf7ZvHPqm556sPgirFAqJecoBbBkYpCypsaE3Mep1hYqtE",
  "key25": "5q2Sxb7MxmTjEUnGjfiwNK9km74sEXkJC4rJuvx4e8AhpBnwu3FHc9ZNBBHPGuBMeuj2JFx3CpiBzzCSGdbKWuSd",
  "key26": "5pYV6gQfox5ixdHYiTB1PWdLU2iKtKau4FaEBcqhdYhLgR9aag1JgFh6GjH1WaNmrRoRWYsXMaUroTXTKQ4meqYC",
  "key27": "332DmcXLT3rWmVzGXXtmgkLmjF3R9uG7wxcPRkD8JYtWJLZ9ccQKkBE3ZCkthRC8MsWMw72WkgvSiSP9j6FRgT1D",
  "key28": "5sYFZ4ktBmnDzP9okjXQtVgYtrVtgZYJmyvp9TZtp1Kn1KnFHpb2dYSX5reBKZAWLsPC557dFUDGT2q67ViKWJvc"
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
