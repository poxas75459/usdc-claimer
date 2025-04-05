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
    "5rLgu3pfY8w7THjVWnbZKssTSRASz26V3UqYznucn89E3YGgfHikZVwYqLUb1g98nwXD3KsiL25eM4MZeAtBvgfM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Res3Ucqf4AbCvxd7vnMp4dDuPViDooFvADkTErtbsTHw2Rke6qs2hgvD3yd766f8r8kzL3hn1azLSBj8MCc7x86",
  "key1": "2b3GgPRKGj8XSTebCwT28xQLLZpP3K8NEuvFB5mfutqLkJvY61myssCoam2MiFMs8CFg7AtcTiUUMK3wvgV5CaWT",
  "key2": "5dUXAGh8ndzg61M9zMRUgXWc9bovp5Vt3MPSKF7Bx7cZwRDN84JbaCiTTN2jg2ahNKSVDLUiR3Q5kdQANhKqhjPf",
  "key3": "4Pv9QitLLdQxfu18GdcBgi6fZLVwHKRVoajrdpNBstd2J2DektZwwjhNUYBpgMAWpsv936m8MaxTzJwRaJPzuMA1",
  "key4": "27rrPQrncbwVrv8C13uxttHN3Pe4GvQC638cwuYUiWaXKJZPY3v6TuzxnaeqsUUmNq5k2D1vdU6PXtHm5EJfMNaF",
  "key5": "5o7PtyGxsRug5YfPWP7gJmfbfGxPWKEdUVHufLBfAui194WuTaVbqRYFcDbb4Y2aCuVHT4zq6oGJvxmPfDJ6iVN6",
  "key6": "M4F3K4f5rkm8HJajDX4JWapKeUFg52p9HuB6DPtf97Xb7AzJfXpENMeHKVmdS19BvduHaNxTj8SDRg64V7hg4qU",
  "key7": "4UD8xLNeoBdAaRz7JWuxugRjXqeECn1SAckiSaq61A5AXjA33K7mseELNsALBtG1D5FitwwJ8YN6vJGn2kaknxVG",
  "key8": "4jyWdkZzq2Qxt47wEpSkRfFdKkW8nQaAMgrLFXwbDteiuNyfimE4y16qB1HUuzDi3aTkwxvmcpdjD1PzJLRaSfKU",
  "key9": "61xnSWEvhZDMtJZknMdF99BqMz3sWFL3fbNTB7KkwigdnG8B9SScLTywFt58v3gLVwfdVwfb7aFwWvKSvemB4pSk",
  "key10": "3DBHhPMEPVLPLXFzcNaDD3UybS7jaDd5e5jtPiTmTZQhNio8h3gHxNX4jD7cTiCYYQiXpaapRgLLJ5yaroVWr8K1",
  "key11": "24mGPJLgHVmirUxDuuerbNBsuZSDMSXgNU3Sp2wxMEP3NXb9TXwk8fbAZV7KaDBNPsqKMPiNuZiVGsAjoQ4HNtV6",
  "key12": "5SthHaUAKkiW3pP4iYKhLJjqLRxaJL3Cfd6euUkC5YZ9wP22gXiG4h8cD6K6bLrzaZBBRBqJGgCAsAqTBW2uVNGG",
  "key13": "4MCK3BN9ZvhpcH2SxXyfgscve95a3WycjCAoQpowF27T1pGHU4vTDZ3S5bz2ppnbztxTXhvR17dMB7oznGCVaJet",
  "key14": "5TAa2viT3ga3ZUVZ2z5yUgivX5WjyXNK6Wm12ce1x9EJo1DCj4vZGC3rnkDroroFN1JHowjKoK58NAid4iELZyt2",
  "key15": "5YeKYtLKwY95Tjs9bNTpmgWuBxsBsW4YTsD7BGVao8Q8jcC2MLTVHPXcUDZVfRKdEq8wiBjBwzyppVeNajKJrBo6",
  "key16": "4RbGZWkDFyBguLp1LzHGZgTWQh3V56SzSwETLvnThKDYhcVPcfc8sSC1djGbBY5As4H9L5vYntAiwY53zzWPNC8T",
  "key17": "2TEmoBxPf8aCzXEGSyj7vfyy3knTiM2U9Lcu8UYhTS57A4E5Kz6miiGe25QMqqtaiEmdVkGJJ2AGDpL8kEsneznG",
  "key18": "2vmYJDC4dTRK5uXt5XvAso7KLhtLu55YHLQ9ST396ezTjhZov1XtHkBkYhCpGsLgsmqYSR2GLGpSUH31qiDiAW6U",
  "key19": "MTMsr95z92xvwERkYpzbtnJFRLZEtw6Apg15SZVWY4EymJZ1CpQQb2LFvW4BnoyspoLRf5U5WmCc2AcqQqnuxgF",
  "key20": "44H65FBupunXUTx4MG1iReH7JwNiX91ocxyKuzsCdQNKfgPpcgWFDWjzTsa7Zd8Yag6vSUdtfJPxpDHH5h3yiM6o",
  "key21": "3XPYL2MG8LL6r6JhYj1r8DPg8wtERF4Xncm4sJyYboxSmxne9G4JfkGK5riRPKPMbTp15MAiXv78miTcuUG7FByx",
  "key22": "qXTx51zH4AgfKQQXm4f34qWNj5i3toKcGErz4oXRqQyTFsEsGLApfBQabtVZqUNrrewTdLwxLUJZN9Uuefj6Zzs",
  "key23": "2D7t4UUXLDf996GN6zBzmye5ZBqeDyVKdTY6zap9reHrnKTv6g1zuhi6ijA3mYiyNbSTpDzRMAZ4kkFJPzZ7F4zQ",
  "key24": "5W98ebA1QZYABNCBuRDu8ACc4FEHB3H3jbWnLKCNiYLmwg9ELkevNd7YMLEHuz1FTiZWqJ7Myrx1AfQuh9PAeNuf",
  "key25": "2SXaApDkgFVi1TfTjn6XTyQniM7MwdcgnfYrMLMWqJJ9p5obRaHqVQM886FiUoghmZVAv5hDmh73sNmaXi2Yuf86",
  "key26": "44o9ATSUMtNcDBU4twmGB3rQDeTvNpdRgHmEVMNhuz52HcUU9utNo3NNMguxKjhLmXf3fwA5mYFMjtaYxV9J5YmY",
  "key27": "5bqFRY4Yv5K5YsAuRydSpArMz9EVFJUyPFwnYmCGb4GXLiFio9mr6XFResomSWiTuHPNMb4sBo7A9PUKdCE81Xo5",
  "key28": "4tSBHQgHHgx46jNvszhHsGSfwTNtkV3A9u5qWjvZKSQNeX9KptJHhy7vfqdDVzUY7D9h7D2RTScbmpgwYyvqiiqB",
  "key29": "2jMYiLZ59AnFLPWDKW8n6FJMmvjnrkJZGnAW2bHT15KchmuD4oFw9pNm8uphBC1UV8a8AzEZ2boSBGPfjmFhiad4",
  "key30": "32EW5PMPcgpYhHc4kqyQwQsyUR8YZrgtf5VtVZtwVUsKVnGxwNi5kHhQEhssSgS1nVbYHjf4qBQY15iQfiX8JJys",
  "key31": "3UryYCM6qBfYP98uEK2AK6PXucYcAnmzEZahjc9UAXPV492cf59srUifnNLPwee8epuHS4QX6j6XX8ngArYFfW4G",
  "key32": "4PyQh5L51PXBj3fsuzcGJmwFDR8WUiChXuaLcUWJnf1Pdf8JcGSRd9oqurg4JBk4TfQ1aCqzhcRcpGpEoGmpbG2a",
  "key33": "x2hDemFFVFNGMMNgr7ftbqmSPtoT2p28kcjkjk3CBCMVLzXV7ZyJrHXAjT18QCkQKDwbGW1VR178WZ4PKqR7kpv",
  "key34": "5HYEZjNo8oqwqRmmHuwYxzzYbjcwQU195DfB8Vpy8MLw2tzra9RH7xG4q9ocJM4xv8uEsAJaGZ4Sz58DXZBEXZ8S",
  "key35": "2SeWPckXgQNfnrccL2NmMZxfLL3NFYoCJtzgpDRfN693mk4N5Q4KgzJQpidyMHw5MgYvJiXaC688x4NoiumS3ZJa",
  "key36": "2udHugEC3tRkH7c2A3j7G9zbCx54Lh1QfUtHTQMcDzCopHGqDGkwd26tTUwgKhaY5DBPdzt9P2r7qFQURsnTkPy9",
  "key37": "5tdZVgdZgtCeonyfiW5omSA3inSva3ZJqnp4jALDexwypdh69Ui45NvmCgt3wsTQeGgCrTCscbAi4kDffZXWGs4M",
  "key38": "tGJjEPcwoZNZbusC5664bxXsLwXSHMu5dx2Pk1kWdWeW3T3AzvEbouFNNrZLHpNATYpZavMgPq1J1bWFjrjhEKB",
  "key39": "462snpej1ph36rShnTGz3Bzyy1eaxkhtjWNNDKsdMcMhqeWeQBikrh4u96zr7zHgZMooer7uKCixcoRVsufFqmsy"
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
