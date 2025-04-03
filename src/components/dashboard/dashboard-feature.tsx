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
    "5PioJc7bookG3rbKkwr3oLPWv4njtcN2fQvcpN4Qp7rr6w51YxAJpLnd5gPPYd27Nz5S2sr1bCMgTbCrgFbriTQS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mqFMx1u3rbj6mLwXq6FSYtZEauHwdtFtCzGAU6WEeyBf8isW64DNF5ybk8rHupjpnwETaz6nwkUkZM7Q334b9Zf",
  "key1": "4YLtjiexAR1kBKqVVE4MP4yhLStXp3FKfguDYDiEW4LJoRmpNv4hNNL9JXTo1hjT3kNVGL9GqCL7ryQpnmxaQaaK",
  "key2": "3o3QEwSFAHiPd5736d2U55dyCey6GR6DgiJVSP3qJcKhxsLTJaH2yAH7otbQMVvY1uCVhyJFp9xA1eDE9d7ZMW1B",
  "key3": "383p1UCbjYHdXSFqbUMAQgxhKjGEYpvKd5Ed2mH3YgUckzd29ocoukqYirb26YTvYcwYG6Znwx1H8nhhjbduDBW2",
  "key4": "63kzChCX4c3QXJmk5YWqffsEJD5K7jGi2tFEDxrxCvj75hTrydV3ZmafzVCWNFRjCmq64CDnzuTmZiPgYqPkpBhQ",
  "key5": "sx2iJQJeFvjvxK37sy5G3ibCk7UU7oW3nEGsMgo2uf4kw9PRXJo3tffVyAmaYmZeqZ8Lu7JygMtXFMKbpTiW9r1",
  "key6": "ndSjW65CcxDywiZjHWeQZWXWTwheAV1Ut1Xy7FAmMewkTbJ4gXSpHEaZKSY6C3Vwn86Z89FFcAfhLSiRMppZL5k",
  "key7": "4W6DjD27MLLDJetjG6WJdKzhHGjNjKnHxpQWXYC7BgwtxAJA9qUD6gxhNQDvFPgUxwtfTQV6fVSjciMUXBggmPt3",
  "key8": "JCpreRFm22PpyLyM9wqy2h58HgTQQZJUgeH9vqW6fuifM5ohe4nB4xd93nbTiT9krpsssbrmuotQosaiG95d4m9",
  "key9": "4VYxEyqfask8DmoJvVmXioL7BmyUHGA7HKukLV652RphmQTSvPtET8PjGaSFRuAojq4xdVbbSczYLCgUk2EKRFcw",
  "key10": "dRbGQ93yAqzppySAy7DrWJkWYiPmGBoNWNHV9RbArxdPpTp3Ur4UgU8rqprRWpse6UG8bbmPiALys1BdS8SkKqu",
  "key11": "532BSJj95pP3NMBi7yhJYzUgc5WsEir8yNQukMP9KHkDC6rL4so88z9xTe4r9zzypMDh4BAjRha7yUf8peowhf1i",
  "key12": "63otJgiebXiMndEWpENLF8endfzVGPgMwC7a5v7iVyoxb81orH78YWPeTW8M8RLqXin2Gxk8hECRLWeK2ZTUwWEB",
  "key13": "3175FhNxydx9P2WVZZqLmX89mMaLR1M1xfHaRdqbyj9A4sSuPMiz7B7nYK8c7HfRGpRMTRULZhgcSP7Ke6zsE68K",
  "key14": "3Lkfr8RGbiRe9NSfNS3yNXi5UDSzEejmCzoi99iN3eko98YMGj2mouaMywUmgAX4no6rkmJ393tKNB69DWMF6Z9M",
  "key15": "5T3rCvmxGXkbQTp6aNneFoh1yDjdscpuFh6PkzFB2KJ4g8tAChfmoS3PCpTfgAxepdeDBdMbxCFoSVFowWqCCH6u",
  "key16": "4sVxPJkJzPC4xKEqJ5PerUbovvXqXEugex6KWLJ9z8yfbKDsaZ6oczCdjfKNmAfrknPduL8iZtRM4LBM1roddxsG",
  "key17": "21ZDrZYoyYB3CGiUmnXpUMsmEHXRZDNaUDpHsTzSYU1FLXGFxEojs6S3weAvirG8PGEH5pW7HzX6AnRPpKq837We",
  "key18": "bzeptttmmKSskvAqjkYTwceBdgYhY2eBEpV3EEKzdAno4BoZEHNBny6RJbH5S9AXUFAdU5Mui1evo1PtdLAZad9",
  "key19": "32DR2ocvD577F31dGFRt6mpe3AKT5LU443o7RAYuJgbbCqodr5Q9KfhKTSWibx9bPscNa3NARDj2NmCF9QrNxag4",
  "key20": "2d7td3AS67PpYrd6WPNo7SB8pcLff654SauWyxn16y4vmACUJM3MY6rE1HSqdX4hWCyBnnu7RTpAsPHbEviDwYU4",
  "key21": "53L8KGH3S6V8VJjHBubfqRz6aA5P8dA6eWWF75SmsM3TCMW6Frvr7KXgizNXhFfrYispXZimFvCUxbVNbCjCffbn",
  "key22": "ojmjcdFz4BFG9wV6fuTQ3iuo3wV36ZyD6xURP9mtUy9RG7VySTSrPttLTKNPPrWxCpHXasHq1T5mCY8tddPALfR",
  "key23": "2HbDD25Qi6fwfAAEVmVsMjz6vv9gLbJWZ6Xkh4J7i57zbDpF22UmvD61MPAu5TCgav5GxPF2YRggW8jYsSCKQg5x",
  "key24": "5vQZnDJnWzzcnnBUpXtcodjK5dohAnXbbkHYLaCMcwBXCNoY51CuhwYtkhWRovMXAuSTX5SzfM5rVhQtg3B9Samg",
  "key25": "ypuv13m5691KLZvNezWYKMrUkc7HB8N7hERPZ3SvWpLqvGagVhVPrKiNm27h73bjSpLunpebZbMWscFJPnDqhmb",
  "key26": "5Tq58DGEiVz39efzrW3z8vfxunVB27KoBH3BDQoqwmaz5igcKHRbLbaXYnimKBcTNNpxjomUHe9xGkfAp2nBaqU5",
  "key27": "3yMoZjzBmFQTGQc44W1aT8RZU4HE7P46Jwvzzm7WvGso2s1H4MofBSYQKj7bWUnPmsg6LfQBBdg9V1v3qqsmXvbX",
  "key28": "2xWi8EGP7bHvjLBoQD6KkZ6R8NZxKZuKqbMMN3GC3uMhji8SGtbSH8Rf8XtboP1b6XidkgCHbPbnorzL3jiUU8dL",
  "key29": "oJgkoYQn8RQWctUFpkeHGwkJGqmwfMLwQfGrFqpte7bDT7cZjR6oSba6BA2t2PQ2oEM1earTiF55f2hW3YrNcgR",
  "key30": "2CPc2H1CEA3eRRHdU1xNrPnzbrkaeev1oZNg8U8B8kb1QizMaEfuqpJ1kjsAhW6qwFvEXU2asHYBy27MC129JhfK",
  "key31": "3AqrFhizv3gDenC8Vhkf521dV7bNLVd6DwccypBdYeCW3ei27CBAd12BvpbAK7anVtRzRqMGb1WGHqTZF4hAvVh3",
  "key32": "2xrfWUPVquAUVAjzfgBUCwK1GqxNCib3SkD2yNsqrZjoTnAVRMERiaiGx9pA9gpwoN6bPmMwx8fBkDSxWm15t8N1",
  "key33": "FiS6aWNiBwdXcZcb9wSotrrbp2WDFPydKXQ6DxwyHa4WianrjgyzGE9sDeYwzg2UM75fihBdoBFM7MaFsXKCnSg",
  "key34": "4W6Nt8JDNGpATUNZooJKpHrQckoHz97tBQkuLP1xXqr55v1GZcBE87B2j5NHGUJt7CysdtkRPibzc6GCdWhVXzzG",
  "key35": "3bHAgVpTZ5AekggrzD1VDUHib54Dh5ghkE6jkxmEDRJi9gSMA3GCiob892pKoAvUte6hnqYt6qBvcXvP9NTwMEgX",
  "key36": "3UMXA7pwcC3sMPtVip76XwdbLr6BnifFjY6b1VAKxbdZzcws3jyTbjx41zbT3brMhbsDnV23syBMbrL7gMdNCSU1",
  "key37": "4Ehe7HGivC9q7SJR9jEWZFmSMA8gyiiFmMVkvmQvFA1AZmaJSikV8LGmhE5RfsEmdj4k76s1Mepod3QWhDvQKfw3",
  "key38": "4WkPJo22h7Tu3nP1cU5KKqk9KF7dNLsHG5tG7Gx5PPmxkKo547HpQshARknMgwaP26RoZfScD7tV7G6uUHH49ULK",
  "key39": "3q8vVNaSja8g49WEKHXEu2wqAsFBxZs5D3nrTU5T2AAnnufnotNnRJkSK5Urd29Mb3MmgjjGjmCVT1jF2DpRjudQ",
  "key40": "3VQ6taj3Ayqa7gVEtPxuujjyAMHKTzyWGY9Ukn8cNcPdRxTtSJMcBzeTsJYghCapEGxzu8NF2kfGD1f7xV3E1EPF",
  "key41": "LsnEntVRJh6TJJJNQ3ZivCCMgxwE2n6BoNjCfo5ze1GLSKpoGJwqjxzUm63xZrnAtpMzTSma5NX7JLhfRFVV35J",
  "key42": "4Rvj4kEQprJdVGHF3xe1vPG6VWX7L9LHNZHjtXhm49FjTcTARtDMw7xgp3c6rSwp1W2HbMSfz218skouYNVFyAPH",
  "key43": "2WS1idnsHLuAiTwe4DAXLaRBHhevq9CzNuWqc8fKT4sJxEBfgGNaL9zR6d8MWjjXvdACczwcbLM8FrZ4JsfSXFYb"
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
