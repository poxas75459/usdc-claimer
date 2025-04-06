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
    "2DN9bbVrsNGCNSMDGh3G6mudHJ98u6ijdRfG7VVn5ddwHYcGUN5gZZeV3EUHmfEUcVkTJS8TtggP2YUJymMHue3c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gQk9qSukZahQrR9gVpBw3c5x5SajeHfwEENTVPbZPBSVTcp8JPWNRBTpS87T3pJpa8rQpo4mf8aRSqkMZRftKJw",
  "key1": "4czf9bBchAj6s6Cspce3V8FEuP21Mb2a2NfsCxTcWjWiSJSPfhjicHN87yxXgLK2gCZzH2GfwnFbJZiLXNf9snMp",
  "key2": "45U21iyiCcmdA6dhvbytvwT4KR2BqF6Ym4QVmTWPgbu5nogCmEbAkCyQdoGq3taSqbzzzwmEpuoJww8S3bvrf987",
  "key3": "4TaycVgTDLxY3Xto2C7niq6FGzS85TKsgj5AQEnskihzEWuxa3DbfoMQMhov5FKVH5Lb7Dvfy6jN6haeEgT1Tda8",
  "key4": "4FjSqFe7c3tNUAE8E2H8A8GM93Vrx9FMHnJVHLVraLJYmURB2WVn7sMLoaTgsT5Hq2DumN64va37j6nWBJb2SnNd",
  "key5": "2LvCNe1eANYiQjBifR6XkQGFBUWLBtoc3ZXRCxrD3sgFptA5bQcTkBq7sCY9NuyJRY1KUfx77BTYb1aYVfufxW99",
  "key6": "54sC5P9cwTRygKKThJUMXfrpqvbcto3fn9UTQz3T4JJimsVKmFToXLHkrpxGrMm7VuBxvJ3zifLneXqXjLWxBd4y",
  "key7": "5sgtJuNoZ9DdKNjJ28KSMDiJtAE4Zrm8KrCJjEkw1SnJGEYTwFYt3T1CusDU58LUncHxa2wUdyP4X6MEEufiHD9h",
  "key8": "442dbPXFhpAkniJKoHA43GbPeWtigomuSJRdVQEBtCX6utCRuQrezWfvDVGVpuhpggXw1kHDjfyK1erZ5nbWkVeA",
  "key9": "48SEjgXXheNVkhtSdCXRQ6SNWiicW7N2iGipyvUQxbcwTL8e5WVZx6BuEHdvEotcY35Ro4ndPdHrNVUtDqcJf7mA",
  "key10": "3ex5Lhmzo74KfnTSmpbRpHSYViunKyh9za3Fm9S1JJVQDVPjPG2uJmKWdKVfWhBBiCSyQAsYmc1sCbMNtVxwCgXU",
  "key11": "47P8Ay2FihETabexFHiJQu96ToxM2KXwX1YEUNvnZSGx4f6ydP1yUeJhkQtjGcVCTWP1agKxnBZHHFFtiR9wrRAH",
  "key12": "3qCxivkbAc8vE93F4fY7xfp7mSPdHAAKdHuRCEqf9kQF6NdgsSnEWk7bVvNdzxu9TXs3fE9o43XKfG2XNUPP3Fww",
  "key13": "3gDmBNNfVMAHZAJi3ir6KvKvc7XHEavX8r1siZUf7zyfmtEr5D7Z7vYeqZzEtcrcisX5KPAXaBZ4VjRj6362R4VP",
  "key14": "446zbMEgeCZD99qBWzKuyssdfiDMY5C2NF2CHdQdMBLouGhtkTnKKsvZRriQJWD4iLbeX6fZXkHyzEGWRctgJ5gt",
  "key15": "4Bd9eLedFZDcUx71DXd5JUYzRYfJc5wHor7mQaos8WKV4WF4hdMj3sCwMiqzorh4F3TbExsDVgpgcrmhaiAbuSnS",
  "key16": "3RpthBxYWYUcXtCw4XUitJv4P7GKoKiwfsdDL9qF7sLrqfTP6pFcAEd2y3RFW391VQ5PMDWyTbCcmGz6SJesv18N",
  "key17": "3iZ6cHbKnW11ZbqxG91RwntLfoixjmoY9sFYkVUfXYdJFp7eyonZvtwgssapeDzhVWDni3ar9kGRZVjVmsPLx5pc",
  "key18": "3hVMTvLB8PVnEdHbfvT8NGyxbSkABT4p1foyrJnwfKBTuiRGQvDAiq7EUGkfHkf6QYTros8gaqAMbESUzVtWgWjE",
  "key19": "d9PVsj4TL4pyFQM7cpwygXrJTskcEeJWVqvLEfKRLNUXKBuqxxMmyLBT2Hr38WWKtMAfeBvRkUzcmFmSb35wS58",
  "key20": "2EsGNHNe4z56fceAoBc3WbjHo5iBT3gcCyuiq51NqttHqAxGuV9MwRYnixqd6SF3q61mm4SkXs1Q1fJtzJM4YmaD",
  "key21": "4yQ2PHisgj9Yt34h5gsga186mAaRRc2mt2mt9LfG6wcp9UQVP3iaEPtJt8Gat6dd4oAvAVRfAnoYjjwnJ7uKTNMN",
  "key22": "5U44CMPCnxgG4VonzBsTLggYikJKBwiuWaBdWdnbFDN4XkPFWvTheuv4WN5J4rnWrJmmggo5s31VWmrmHc27P5B6",
  "key23": "5LNyE3wbBXqnpLfDc45V7xLH9AzudJj5ippnc6tbk4SjMTdo6qEyQreXDGqLvmAgajdGGXi3x9HhZgW18hkeKzhK",
  "key24": "S7TSYDUCi5uudnCCCSM8X4tffUZTGVbT6YtrwX3mDRQ1NPyvMHzycvrEQwMajE3r1xmmqNEBsxjqySLSxkvN7W7",
  "key25": "oMmfPaELuQG1dUmy3uuxyuDUNagtbResqkZuuxJwT2gEJop7fZ8uUkL8xuSN29KqgJHMPbGmRPLfNRtZCVoY1Q9",
  "key26": "4PHCNh2s2HQoXMX9dVr9rkUCQBkFUmvmVn1xZJnhezAtwESDsxpqjGtFbQuZVLzSmpMqamwdEy9rbapzkwhkqmKx",
  "key27": "udr3BHxaEdgJ6khDvs7i9xdXHJuFP9g6XkAFek1qU9jLrAp5Vbz1T5S7mE9BPxndRHAJWWVJUYHjAMVcfh1XF3E",
  "key28": "m9X6du71YXDGZUQh5TvvAp4xWFsF8EnX3TAt3B8csB2AeVjHR49bFacofLYZeUgsoifWorgBuGxmk4D9SavPoax",
  "key29": "5uoYnE2YLoWcLamYvf6J6DJAeApY3ds4scXsH2kUhZM4rUsDvBUhCD7VaReKgJN1icXzGGFR1d2TzTLZFrkpPL8T",
  "key30": "4KEgtw4ih9KKCjbxgwS45R1K2kyRuyhBVZ16Yy9gM5rR7Z7AV8utGYrFNYW2Ns19pqCgpdCrr2Sj4TKgu8f2RYyX",
  "key31": "3JtoyaKigoSC36cLFj3Uo3CA64dR8A5nASUH3Zp6e6E6zsk5QkinKkmA8UAfgeSXRYtUiJ7XyWHTn4eBHMV3r3tR",
  "key32": "X9sFShQRjnqqnaQvFzNyazongvfsaa5Yb6fuz25hyUrVg9a9xcX9S34A3qx5SGWAVnBX1TnD3kybyzn6LSiGTeN",
  "key33": "2yAh9Lf2vcCNRqRN9r9S3YCZVuZnYMeh3NN7syesPjPqKQo6AVxab6EsR8NiroEgoCU2f3HA7F6FmUH6u7Bo8S1d",
  "key34": "z9xcrgzqFEHk4ZfU5HBtTcZn8cmDaA13pfXetSi1fi9fWGfeLr18pqDDu2Z9YQiQ2pLSWm6V9GqJGkdoPLjuB9V",
  "key35": "4uFRE7WhCFK3UtUtJ6zrrEtettnZ9kcMyALo4tkZ9khZuUcD1e3ZkiWQDXki2hdqiu45wk14LR9qeJMAjDmy2Uhp",
  "key36": "3ec5MKRoFzk1qMHk9A4tEPEC5LwiLcyoMQCkSHtfbwRr8iU5UsfodE9Tkr9DAPkBgjpVeLikm6rfyWPpQ2iP74e7",
  "key37": "TPxb678AzLt8zUZHZUSPUKi3sxGbag9zwLpF8Y1Yo7iaKx168BUYuHK6yH9aJXh1DTxtr57qtyMKRzHCLfeQEob",
  "key38": "2HHMzyBR1q1kDDVEvbRp9SeKquWrh3Q1dALBKdV14jR1aiRFcTreJHEGmpxc2CT88pj8EMywrsByc6TYX2TWTJ6M",
  "key39": "5DfquSbrU69o8B94QLu2Kth2SicPojLLNwo4fSLGHsD2iGDyCZAJjnccBY7HXkH62RPijNyb7LzowqLp5nFNwpiT",
  "key40": "3SgSRxgsF1u6NBzsSN2PzehhyjihRC5Z4xJEPK1cstrfVNzUCcVr9kjzTwC4UA5ZLbtodHvYPHJmT8CgNn8oQqhK"
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
