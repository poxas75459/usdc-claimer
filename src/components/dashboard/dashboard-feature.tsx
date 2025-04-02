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
    "3y7PZNeZSs1KNPv4NyNnFCduteukggq1jCNDZ4G9AEVdBTJRqJZBgYw4GLBRN4E2QGz6JHsyWxNUe8yM5gHYbQL7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64nWvhAjhAfxXTmmFiGMR14HGrJuY4dejmUeUABsPurzZWUtUzqwnyaHa367RFkMCvfsnw7Qvc31KWfybw3sukDB",
  "key1": "4KEEegqFyDFT2EKCDuAXRH1myQQ6WZidxUpfotLr574chtVswsZfuT3edUw2FaLonBynmBDCXHPHCHW8knzFuDYX",
  "key2": "3nkd5Ap6mMu4DkG48vj3VfEmUprPYiCAeatB8HZo13xFQ5Ke1dNYordMGYpFEdeJKqCc29wCV4bDTa693oesjWv4",
  "key3": "5FjZZkk6JMAM4BsGpkws6wYCrmSYqUJyCviwHqhKJoU3h8cHu5R2oFSwQrU4bwgYfc1GLrYsRdtAJHRDryQcUAW3",
  "key4": "BoYaBotycxmniuWYFKTSL24VyoMh4Kiz1zeGe2m8tefEdKHfzdtQLEJ9D6SHm4g2LfoKpeoutdzh9aa8frY2kSy",
  "key5": "55Extf5u62yLvdG38QsxHCHug66F8eVHWvKCYNetFpXx4FrbPCXJQmo8UDdg5w7WstycFBhuTP8b4qc5EF3EqXaF",
  "key6": "2MKHcuu6yiCZQmhhGEUcr91evgvwAwox8b3WSudFqXDXtHjpnyNaXxyPGwakRHf4SSGYi18q5gXJ3ATDziNrWA7C",
  "key7": "2KFsYSCS74D5xRgbN3dEHzvt5uzXC5nQZiek8AeHXvRgpYbFhe2hthsDULD7AqV2SzzwQG1wPyoWDN5Rfg33SguC",
  "key8": "5uNzDBSAibrjTABXvgWRRZFP2Y1ANehyNsJmnoadxFUkn7ZByaDFyiA2A4vocqhXqouF4SkchGLnN6pMskTebfzV",
  "key9": "2RiFnHwW3VLrFNAxFABL2eYusQBDgvUERVmp8Vu8UNVEPLvqU1Qe8c7crRyRzpDscLqx1pEt9MZo13N11KkT9Nwq",
  "key10": "485qcesmoM9DewbpY9vYoDHx4Rp41YSi8vAshrYN2BPy5XtiesfTAGVwUtHpCtwpqwoWPzZkM2PvsZJH2uz5i67p",
  "key11": "ZzXjuBmtwip2Fu1DgcLvMfhmMZ3hpkcjwTev44dREUdqXRg9L8V4N6N4XyyMSkhffnaFg6skcuucgT36cyMEtci",
  "key12": "2rsfSts8wffcvEuRwMRkHpG85XSSbycvuqMargJfVyJDEv5FR2kvbCQ8zTckzoa13Dk2zChoPtoCSfuGYQEywjK2",
  "key13": "2RRVxrVvmoGQLbHgZFWkXuJozHdANw6FfHjZmAAMWZ76iEfBLfissZfU3RDwCooEu5XUAHULp313uvitoZZtTUYe",
  "key14": "5GLxZLkEV3ReyxujKr3tDcZZm5cQNZAo5gGniFppUk9LowrnaXJudPC5WLVtWWc5FASCYAK2jEVABZUyYZkF1kjK",
  "key15": "S1EKagEfZxst6rLypFVeCa8tDo7gY7zHSW4Num8pUGfjpdfGjFSMNKiLftD6RKVHqPp63hz882V1cvs7cygT32g",
  "key16": "4tmYwLwFawNu82P9AAzvAJ9VVNNhNjdaxdnE9aYBW8pXEKfCaktHfKZz35PotK28aLXksFdn76BN8awE3K8cqDHZ",
  "key17": "4eqkMYfnYQcm8UxZqH6a4TmV3hsxRcV2NfJS7u9r8tKY1gPfY6H4N6pS2ftZuQDtoGQjXJqNyBxBcjCM93Twa1Tt",
  "key18": "enUtVD5LFhsA5QkTeJndvq7yfTGW6NjBCpJu5ELCFd86RiXhbtCKbZyoWnuddTKYER8vxYVHowfdYjLPkJ65DBE",
  "key19": "4PFvmAPUJtJ2tnv2sXsKKozfLFvhq3wvfk69J5PR4HZ2PGnybNwD2r9jS47cDuzpqxeJj8WvUT5GL35Kz1D8faUv",
  "key20": "4TayS8jVxDGY9hGzQA7Ayj5XdkNQJBHntZqeSVFkVFUVE8HGr511ytNePdKZJKPnX4V1AMfWwGn9trjevLRQt7Xy",
  "key21": "2ptFf9CWwBFj46RcJ6M9bMoDoqxTEurToZHjanoCQu6eAZXPr4WcrqjHnqWykFYNgMrfXUUVnmEzDwNH5M99tnwr",
  "key22": "5GJyiFyv4VCjhke3WHGquQUT2ob3CUC6xwzNE8zEUrxKFPm1vb9ihVKy6Joxz1tkRcyomCCvKopeozH4UFjj8DTp",
  "key23": "3jHet5kKJgvkeN37r4iHnExAJLGEPL78ZpEgpUPxh99Tki3Pdy23KgMu3rnTjVhwYoxE74uAprp23RV4qeqpZauy",
  "key24": "2LbpKLtbuiyV6PXT2uKZGDEankFz1kapzaYfVN9kW46ZRxmzHQQSKbjhA4hr2orMYRw8TyGa84jo8LuQ38QDPnhE",
  "key25": "2uiQufYM8yphheotX7B5atXSG6Pgbi6UVxVgBBUs453EodBHP8kJiPvgwbeFKNb7aWxYEsQXFedNZAVTgjyrxZBF",
  "key26": "Nk3Aq8MydTR7jpgkz2ggFjQFs9kxZ71kCFLCp2X8Ch8azDenYg2dJu342kq3GzrsqfYEkwabuHF5CXbHpvUimKr",
  "key27": "3iwz3BnSwo6pQf3N8zuzKvqZiNtrvSFyrKYCocV5bhYRSh1RJjwvmz8YVQFaDjAMNr3wuGqy5cxpijodmbUbXppJ",
  "key28": "39ykssmgDHQyJFkTTibkPF79x2UrNEdcp2DYJWtnWxzebQDhCq92QLuwDtFcVVidrE4PZByYZYAfqr2ZiYG7u1DN",
  "key29": "UrjWFtbXtEtwiwPG8L45aZSKjWSn9VzWdnXRw5tipB12G9nFXaRLTbxVewWzNzhCwgJ3GvyhBH719RTs9P7mNU2",
  "key30": "sSAFJn3Zqvi3ZVxGq1fif2s5m1fnSNvgYgtbcUHus4ufaoTKaH9r4Qm11wyeMivoLmLe1hok1rcG4nCatNwa33k",
  "key31": "2WvFpqnv5817Xf7AbC5fHx7W8efFxfqfv7os3VESg7SA7wuEd4BCbCF6wT3UL73CMJZVfTL3GVLHBuhSxUgqBaZQ",
  "key32": "9vHNrx9T7B434TCEt5XdGRNsfLmbxduS7haXQr3BnNsmboX1UomGn4W875nWphynES2MezkWECRKEPNtrxx1sU3",
  "key33": "3aUDHgf6YSCYoUNrt1CQWZLL3VVByqBvKtgpw2mUvRUQp5KSdFNuhEb7c7SMjHAFeDY5mFqiwx1FFt7bAfgCTBNy",
  "key34": "2pEY2876L87CJVqaPdYo6Sq76owtaWLLjKRzacGCqknH1LEVtYggTk3R29aLR4tsaJDSkSwiaMSgCwXPELpEfTqg",
  "key35": "4wwDYDh13qQxvMQCmwxiUJxpqBAHyUc4xT4eB5eUunkCJ15BY4ghUUqeU37Rg1TBEAceiCdpZrVPvoQVfKg3CYAW",
  "key36": "bM3XctuQTEkA3piHGsiXXcb4iKp2DqsRbrY8NFqQgbWwNxPz2aWtMxwwCxA5EmsoCuQUuifzdyWfbwA1PuvZY6T",
  "key37": "2od5383U1AyssYEbZqnJqXpFHVRYWd7cqrVEDUbZEFBFs6a8xpQXGw5493f82ZLM7bQrBANr6scC8uQTMfLupXRc",
  "key38": "QbvYUwsG3YiCh3WJ9w7vBGTVM3dhpBEFrpfF8NXcqhdtz1NgewyfwK1dtXPRUMnEhYsxHc62BRXWAwJq926DRNu",
  "key39": "57EujSnL3rFCV38TZv8FbNcPf7haD9jXpo2fmJ2SuSVLzbCrZ8Rhuvua3Pzm4L16pgNxVxVY1Evec3Fxny5pWChw",
  "key40": "2KisaCSCZ35CoNqvStyxpsf5twNQicYg1v3t3yAnn7ekrTRTbGvUsBF3s2rPFJdS1h7tfJXsshvr2tcpe9asMMTu",
  "key41": "3zY2jFd8tBWfPxaPL4UUhGYDwCPxsEohWvqHimvcWYGHhgpxWgFVF3bG9boUyNmJEsK5BfzxgGa3EhGTqYRPioce",
  "key42": "3QymG3W3e2PmAW21V4kcCe2nyrzANr8kHDybK179Gdfu1D1zUcqoRCG2hzu3quSb5uAzQ7q8j2BkYfWtxEqcPBRs",
  "key43": "JAwP1fXvLGfm41SwoymS4PMkNF1sKwAosjewNTX2ba3pxqRqT2y5Se2rSr1P26SgYio93SBaYTWtG277UtagrPV",
  "key44": "5woa2m45VEw7KiBMy9mLQir8FxinJgX8pjzkRDgi1wfK7znzHkvuxWaFuYUCXy4D1PeNyvmy89iXEdnHp6QcDHje"
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
