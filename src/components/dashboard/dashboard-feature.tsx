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
    "54hKxEzft7nDWCnhDZB1bzV7VJFYUa8r4J9xnLpBWxh7htcHE9xXz8xQxBo4pqnCXHgykjp3u6x1XsoKwaPjYUXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yfqWjmFqpEgVVW4Edy7peEvzsZXS18De2mZZuqUcGXbecQohb1bw3GKaa5sHZ25jJBtgR5tgeK2wWcBaieS7vRK",
  "key1": "3Dhn62HTYCadbcT91ritCJn7W2rbYwQ8nQd1XDNJuA1ABuCypFSAsneboxHqJe6wiMW2BECuoTCVdeUZcF4nn6g5",
  "key2": "4CQ8wxbVVgPiUxyeMjdZrhNqhtG53u9rKLZWRwb6hG7oWPx5XcPmCcw4Ss3KDyYXUEo74ospV83sFG5J52dsNXf",
  "key3": "2BaPDEreRtvwKSVdEcGXjH1ZjqVsRDkyLWiCGx7FpNCiXh8YLHpzGE8aWzkY1HpXh7uueX8eUA6BLSDARoHTkg1N",
  "key4": "5PeKEJaQceu9oFam8QTteFS9hfFna3UneQPuVwZHCX4QkHgq6JkVhb9imjDjae1dcGH3ERqfPbLfLwhk83Hp7jC2",
  "key5": "5d11zYPEkGVtY8xXDtCJTHSTf1CsM6qDURKrKug5ByUGGJRvXirrMESZ3kcTfxYmeSa1jPQ84UXyUqsxVmZYJj8y",
  "key6": "gzL3c1BsFYL9XhChWkFGLa6hixzFGq4XBsFp5RvfgpnfH2wi7WVPUkChMtwctfPx7SuDxT1xi7L3ewmksDCU767",
  "key7": "24KcygC4h6SwmRQGG9hrg526EdbdFFoQ5J1SQRHtnwTLpzryec42eY2hEVjE37Yv5yYdeVonaVh2u3u8GSbQangm",
  "key8": "515NvNimCVHAd2kD2EwrEPNytipXRNSCPRL2sP8T1VwAjv1S9JiQ9Vc9wHXz1UEz9vbopMXqj3ggAnsAVFCLRHd1",
  "key9": "2KSELPu8oBoTUM74vNvP1m1LRmrNYXkfyNMAKLxYkAUaQruY3YnuNxQbb9ceacZqYrzUk74gVGuz2KgNSJbHtoKL",
  "key10": "4wMjntCpDcyR7mnbRyYSRDFv4bELaRiR1E4mvQfNsGMTQh4prrGPc6vHbAq58MoNBSTMJoRfuvi2Zzgvz9nurUUs",
  "key11": "3GAYU5mak9tgBGYYnebuJ9ESrHD4QMumCR6Mx29d1P31QbZb7A423ypo5e6ukFGDLYSF6teoiutGtBPXU5Sb9Yak",
  "key12": "35aipx9LyJCs8LtH2iJM33zCbeVrHfTbpSqJZTY1k2U1ooPV8YYaisLpj3STyPUmcN5sCNk8o3Wv1m3Nyj33HGYc",
  "key13": "4BbSfpmEaoj8p8ByLb5U9LXyE777GKWfmG7VdmV6Sd4KxmtorG63BgtrxiL4rASf5DPQRnaKGvDGXChYhPCFMzde",
  "key14": "4b16wfMYLKw4mZBe5mrftrhgCCsHXwjT8wP7dLttMfHxhWJ9coZh4Wgrpsnch7yE6TmLa5TjMfAGRdWyo4Dc4zWL",
  "key15": "3DngJKZgmjuorbpe6bG5pN6KnzxwgeAewSZpABNUuRWpMDBAFW8oV5rwTeZakW2stVns7C83m6yZc5omDrVXNa8X",
  "key16": "yEvfA8FH2JAYtMuJKGhtcWemCdsKuNZpm6A81yrBh5qVJ8JSF29BLkNMGYx6BfF2MoKdT6mcCxT85LEExccxoiY",
  "key17": "2k5LU5gyduNqmEm3bKYz9hsi4DF8SMcuDpzh6MgE8Chd6sRW35P6gumWpv4GZjNLe3QqncKPyC2LXF71qp2woJVq",
  "key18": "4x7vTqa3b8omRzgXNsTwusPGdXPFa4ocbNk3ZKNei9eEHJx7FRSCVPRVByVLbPj9PnY6dVrjidV9vqzyj6x7t1xz",
  "key19": "36UzUF6HJxPH2maN72fjZDPgyM4FnbWUMpBpuCKELt6yH7u4vB9gbJdGSCCDL737Seuc3o4STU6xUN33pgTau2pa",
  "key20": "5DLtYMiknYA5qHARxfnoXn6rpfK39a5KtU7VipAnrF1voEB28EzdrQfuqw7MhUBBd9mb6GnHPeQw9qeoJtntEj1L",
  "key21": "xSziJBZaRcRrpkvYFHt3P3KpRT6JJ5eNdEECA13TTN2xEhkMPGxhkUJz7mKKh95PD2fxzNdXcJdNAhjVeNN9BQk",
  "key22": "B7eks3wCKFNsjVUS9myhJj8G1Rm2K7PWEo1eCLY6i2xZUr86Bs1UUSEeZjrmasyWA33CnEpqpnPdeHaH1KV57dJ",
  "key23": "57ZYBz4LueZVxvae4H7AitRXMuiCaAqyQC5rpE3VL7oPwJokyGrRnoFJSrMcs4PmXrPF7mDqX178VhWdWxUgijMg",
  "key24": "21Rw872ng9Ex9g3qPQPgNVn6rwLWt1W26NVibrepoL4K4WM25Jw6KydurysLWdYPbda26X57WyTDUpQ1aan1yhAX",
  "key25": "VyMw4j9hb4MwqapuyvCHyVMaUzFV3bFp3ErRua4wsy4U6PJt1Q1wboGweZ59wqK9VS9kwUiFYZpRKuNJX81dKNc",
  "key26": "2xPpmcYzkodDevEWwodr3sqZ58inPvFeWA9vvLJHEimcNobjGtWoYRBrfMFgxRWvB8oLaGSFn3EAHxZwuhRKLkLB",
  "key27": "3xK5hdka8HpFH3u7AtATW3kPnKTwDBnrBr9uEgFADkLL52SxeHLrX9q9xzr2YNhU2Fx6uM9BHtjHopgPeuFj9EB3",
  "key28": "4fVnKRyNSyV6bhs8h3Ko4xBEzpM7eizPxTTvJGfhoKxhNRcLzfATwvCozgzNQd7Ny4szZDnHAuDzo2s99yuPELTJ",
  "key29": "4Znap4AfeThtystQx1PGXJdLCCrjxPS9dukKtbbZZkh1xMe4faY51ZR5gkyC4ceBLp8JuHVUHVfSddLA4E2NScZK",
  "key30": "4PM8xDf98dnqjDeH3KbsvLDuAznnY5jqM94mt457TUek3tCy4yBvVefWJDjPMkLYftV4BuqqpcmV3FfBDVx9NapE",
  "key31": "KuetPJUgtgV8zYXcfyDuHDpw8UHhsmJ6DvCBq9sLVvX5Rp9Yo8rhxv6rGP3aQ6YPWuuJo4ZkWZoiARkkbyNLrYy",
  "key32": "48th3xAa8na46UBv29WDu8txCWogrBE4Yt4BK8q6gixukA74vuNKJ6iRtcTFVdTwPxGAZS9vFmY4J2iovpBB1JtG",
  "key33": "5rMizLLN5TwL91V3jr2VpAUegnwgWyrL9zSYXPdk7iWCytkWCSMvhfgCPmRWBXCaNSVwkpBfM3eocv3fZYSAsoZ3",
  "key34": "5Mgav7q9yzpUSQQhisPujsgDj24Wk56tiom8Mu4fnUzrMwVWCbqe43LqX29Qo2ktf24zNBmDUJQGcgh9TauQGBhx",
  "key35": "3HA7MGUcHK2zkqPvm2RwsXvNj2X35S7WPvPMQSK8Ju5ytz2koQpRq2FqW11B42fTVJmQbaFD5MAWYmer6sYMzbmJ",
  "key36": "4JL2ohMiG4Y1EBXUVUkBqXCGw1x21dCkamcsiSMZ7CuUhycMCBLSEK4RQD1UDSyFRTTvvGk2mGnePDonFv7GvqEd",
  "key37": "4KFBmL2CGJGiM5E8MVMaFGAY8hQ8J3afd1umfBvUtQ4zPDrTX5x1neLaKwLYRhGJBJZ95jJTmgqq6otiB4e6q1bP",
  "key38": "4LZRqmAaBDoEXkQwvrwjDfAFLyj9eND4sSNKjRVqv5XYyoJxC4uxRribaGrVV7V2gTeZfGh97QxQgBkSff6zLUio",
  "key39": "3ZZS7RkDQpzywo5zUxBX1y2aNRhZ7esp3VinQCyQk5o1GPJjAG8iugimZS1eYH2WAdUcndBqNiDwGxzRp46dMjEu",
  "key40": "3G138makATASTbSUm6tYhppHPmFTbL9LWTxCJkgEDsRwmXZXCMk6VXBM542Dtx8si3xxhAeNXXnFeyHrrReEjXbk",
  "key41": "4ifn4xHxRKXufGLja9dQ6tVYuj6TaqtCBveMp4JN62wnuvc4BQuNvGZR6oPzy6i2Lmy3iqbq1rg9Bu4kqLh49UmJ",
  "key42": "5HV5mxv4WChar53NJu8ty1aDg3gVBT6H39sCf4PpGJv6wxxG1vuLGU3gUax95fPmcqHPHf5cwBhYQWutx9fhwa8F",
  "key43": "32kRiddNtphhpJWhBvM2urgDC5Vydcq9jjNUMnchb528t3tRHE3MELR119wECc5fFjN2RSWob2C1f8CTwwGXDqmn",
  "key44": "4BEoSR8FmdMLe76LRK1abGcvCuxK96svVpY4CkADB4AjtwCXwwsegMfhu7t2qpTreraP284WpiQu6WWeoRe7UmyR"
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
