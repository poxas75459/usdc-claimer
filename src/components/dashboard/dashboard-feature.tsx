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
    "4425xm6c8qfjDrmE1A5tezUpvc3mkBzXyGjn9horpw3T8NzApWU3tAvvr4iauUSLdLxrrachtSMzNnP6QC6U95of"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NRw8bs2kWWiJox6LPJHKeZvCZe7HfsabjRdjdJEM6hyVqg3gJudf3bz8TtfBg5AHjF1bAXwoCH2gh42EGD41Ats",
  "key1": "KSRqRzkmt2TDA6S6uSuCrmrmsE7NxVFJZqT76UKNThzegRg3XUZAerJwXb9BMBUpbgdWSLic5RL1qwgrpvYaTwL",
  "key2": "4tFBSgCa97aj4Z54pf4fNd8JypLWyKssj91hSzVQAwvbj8BMM2JX4j1FeVEHCCd3F6KeuRMvKMBCt95Vza4K9dsm",
  "key3": "2VBYhKCqRZExis8tkz4cEE4h9kriHNqM3q5ANBKK6apfPAcMxcZ8W9JoiJJtgD4Us4NdafW5KJgtVKtymfUQxyz3",
  "key4": "4mRabUokmvFRh1HMvtVXSxQbwGH4Cchup3WNQZgtHHbnD982AtJE7yFW9phv2SfbryEaSLrfENeY8h3Ua5AyuL2P",
  "key5": "59oRNt5znXCN358DJ3wm4yWbs6QPPfb4PUutLwwTXBBLq7y5oeiRpkCeVz1WwuELbwHJgcYSAiAQZCqCs2xjydc5",
  "key6": "3n1DPdfwfeV6YhfJ7jtrD8jygTWmbttXaaD8Ff8wP67wNczLmR2ddZQc7jAfKwQqmrfiTXjAeMtnHy8WrkEZxWZN",
  "key7": "5qnrxY9GEFpnZY4QaGCaG51XJRafyB13TpUb5Ge4Zphd1NJbwRrRGiYa2YVGPsKo54kMkCedJYqc5tpNBkftWBcQ",
  "key8": "5QK8ysDHSrVrVA1NUxXedNgdX7NGqwxxNRf5FCKdqYEuuorvQxThvCxixWGN8tkBMarFQrtMqTTC8rsmkycctUcb",
  "key9": "55VYgo2y6zBijKh6LD3bAc9pPW9jxskmddPVpRLectYC6fxAXCdapHc7fy48hGqbs5GrgB7DRrAuKYVV2Ddso5yx",
  "key10": "3udLXZiY8EJFNMWbKXcY4HHxVhfV1cMGz2ih4EHLPJX7GCRXMUp9nx4wjcPpy42heQPY3ScuQQ1bsucwvf1nSLcE",
  "key11": "246sij83GNKDQk98bdZCXMJeLfFXwajEAicuJ14S9GUTEMyK7rFktGiSwQmjFUam8N5zHKicCdG1U42t9aTjU3oY",
  "key12": "3FBqRcGBrTbKcaJ9VVW8Hwe5BRb3Tb6KAhE1nxyviLTam3RoGr1VGahu5Yz2kGf5d4UYygr6zXSGwRf1rJGcekDj",
  "key13": "4Ba6rTKuvVSJJwaNHdiU8BjraagWKTyMbMDT85vh9T8M81d9uUJWFmhRMef3ee7nuBPpahCCwTa9LLXt8mj8NKp",
  "key14": "655PXrip9nRMw2sHLBT2gBnPjbcmEFCS2LKBpcsuggeNS75hJSJs1Do5sq4TZtzD9Z73u5nDki1kbNh111mWnoMn",
  "key15": "4CZsCN31C9ittTQ7LnKDLavbWSVqRJzf9C1bxWuoVvjTtnVXfdNborrDTmyvQLAaqfURP3RkXMAQm2t9s3ZwMurD",
  "key16": "3FYcxCu1RwHwMF7FFLC1cqkbZPz14DdnksxRDkKqSHe3BLY84BdqAav5e4Yq61s1zWL7wrvMmMx3AbmyM6m7sERZ",
  "key17": "3YC4imB9hnuuwAkV7dH2fPcvsW6mkB3XumjLFXVV9wd3EKNuxRxZZk3WafFK58mViiGnxKG1PF3iMhajchjyfzny",
  "key18": "TVA5PxVnCGzp1YU79ybKCRh2moNtCAhmnhSL47XSmoBdELaVPP7mpi5WPH1Yyz9RKezmxA2ik4rJvQjXTSbHA8w",
  "key19": "2HdZJiBG3z5S3TLGRGYMdkUCLLH5y5rtodytp8TwTy2FEkvVhe4hpXgqC9yaxLm86GmKui7MS89T7xAGDpWmeBzZ",
  "key20": "49NrqSGwFLTjWVujtRWqJ417zGgFpqNaHaXDQjQfFUYBQPiSeD2cnuJvxmekwh84kyYWPZgXyvict12R2mnF19E3",
  "key21": "2TpSatUVDU4VQYpRgYwcs4Ehhdyk4XY8SXp1g1wwjzUCsKUZhub6giLcmobdsThcAqYb9666gBpLTkYwvEqjkdjn",
  "key22": "5NuXR1TRNqZ3PtXjWRmFwyW9aaixAAGLfFCJQmHJz7BnZTjq89svezYjEESZn1wAaSahpePrpxYxBwiAq6Sv5zsW",
  "key23": "23U7K6cusdDdi6YZuqyHGqvKRzxkrpAPLNaznV3FgkkbPSKDjtf5GS84QFFPC8Zy8rzekGwpLmMmM5bqERcjgGpj",
  "key24": "3V7RdhR9DXwFAyPx7PwcBtr66VbEA5XkxXb5SFEogZimbG2MChQRqLk5HkNCTZBwuxbGwVLhPaamjaHN7d3UxnEr",
  "key25": "Jp5xB2faBzCs6MENzDGXeqQCoWehAzYZvCx48CWdMfeszTYy6aghojvGaWUMybcAcbGwz5NF7Yw9YJt4ThekyR8",
  "key26": "2tTQbfgxynuRJVSJCVYZJAiA2iYj4gghSzjbkepfZBeqLYxAQVTVsqRwejLD4UHVmL7pkSmkqScd2cnP9eA6XzpF",
  "key27": "3ZZAeZwchyERVNG1dwK8tZ2gebzbtSLtJC9R48kjEh5TgAqy8gSBcU22heEhRPbcYYB2acPhQeXrCams79j1GsTX",
  "key28": "3AzgRBpvND8psopJE4dZ9AteCEffbYmPNHBoS3yX28DV2yiUHe88eyfHUWbJueB5YG7njPQBusHjcjB9EnqUTvwi",
  "key29": "Fyq8U7j6ZeSR61ZKPJa3FnxUjxgjhksKuegM8txgKpkArC3TaxmvUAJULvjpcZurDJ76CTaRRqSsdyzXYWezgxq",
  "key30": "2h9D5GBXXFRwuYFeU232CHrUmQJWJ5CArKG3fgRE2f3tDz7ewVLfAsgTopoMsnHhMyWhS3fXbGwdtPpxLXinYtiP"
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
