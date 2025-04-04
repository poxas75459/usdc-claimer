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
    "2KusFBCz582TYXp2gexB9RKPh18tCb8rvdSekLwo4gutTJ4JSrVxE3QMHteVPu6N5sWpBF5t15pHSyMZbujUwYr5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YFwGzTPQMMwPqZVU5Tyw3CzKkCoB8E1FrFjVNMsC28SpD9rwvyZg1WmQGLHbwz7kMfze66wdqjJR7Wd7snpKH74",
  "key1": "4T6jY3Qrm41TWiqY5Apy5FrXCbL2cBVwZoT4MKK4eSkmTq25Eqrh3YjdNS8AY62pjL31SNVHm2mMH5mRPMRRn8N5",
  "key2": "5RQuj4AjbiARtsgeQTcaTYLR32De4BVyybNE2wYFGGrtgovYSm1jUdM2zhAW1N3fA5mH4yiLPqenRLSYgUL5pwax",
  "key3": "2iS3KvXNKosBJrnYSEwZMga6tSgPTGGAJwj9pt1Ayh96niVvUPGataGpRpikeqprQ15KyjdgZZcKgwLu8LvHGHPU",
  "key4": "vwCJETUBEBBkqtySxPMAbT5oiZLL24ASPFWLeneUDa7Qh8BE5d1Hz7okjvm5SCArWrTrbG1Ctg91T7Ejncyp3Ch",
  "key5": "2ZPGcFe3CECYWAingKSxMTe4zjn1nZdZzgexBh743wGAKrBu7aspLsiVkwFU8h4PJkRBzwZkS6wHnYkf283yXTPT",
  "key6": "3nY23rSUFqMWCBrCjqp9wjQ4SjyuhXNrskZJj6Kqdxd7WKKEABfpLKXyVR8Cq9WwUJUeQzhtEHR157QMh5A9AsZ5",
  "key7": "2Q3UDKmQRJeGkZXmf3obdEFvVeEHUXgDMHgUEoRNq5noXTMgtJzSx6B8Q9nLHSxQ9zh8PAy5szZmw2bcsmdFQJuc",
  "key8": "811KvRJm1TyB6ANttTs96DDJA4vEixGR9U1nHFLoFWr1dqXEcUEPfVHN6ucSF3KDSGJkPmAiYgApUoh765rJFux",
  "key9": "537MVbKomYEM9ruXGS5dxKTP1oUjfh2qvT1CuBPqULx1Z4x8uUudW1woicaKpFpEGVy5panBbYoxteR2pFXWPB3V",
  "key10": "2qr5S43g8SWKrK25sWDVazK7XhV35y3TQcfgPKyaneJ4EjEGRzW9BQxxbegQz3kKrFCcdhfeZMg1Q4a7ay6PbC1V",
  "key11": "55ruE7etiXpgKph2ycCC4h3bbrHXjBmyefSotvXFc4CdMgpwPa6KMwGbvpgM8T2visHfW4c1ueBdWUD3pUFcLjxn",
  "key12": "ZUhF4EKqs3AeJfNwXw48bgDeebfQ6Bte7xnPCyN5Zqa9ovbdHxLx5RisYhgjYzmE39w52Ui8uvasA9B9oKun6eF",
  "key13": "4MHpm7f1FhLmfrMzXjp5uhRHB9KZ8pduuxQ5j8rBTW56btaVx5APYyRx3G3HrPx1Sh752epZB3F8e7UZYb6pQDBj",
  "key14": "4Ka9VQYJjG5YAd7MRsQWaRRytdPswdV29Vj1ek1gAGaRHA4sXKBdn7uXvMaTe8MXP1Fe4wVwcGZnSJVSkNk5H8Fp",
  "key15": "4FYzrPird4nrhoMvEoXDMRgrzmxGy3o8iLbcpYQg2PVsAwjzErhYLAjELrQTgDUxyQxy2u6sfZExyi5eDrJ7xrGi",
  "key16": "51XcthX9EUhaxLhCFNsYzkoKM4hnbduuJ7noW9Qwnz3DkZafihmC8RNA7Kk3QnMMmEDjjiU5T6Q5H14YxRMyW1SM",
  "key17": "xExZ53uDy55NRhAq63X5UcycGFAUdDGRig5R9UQshDXxVetciSVWTojKseqFhPgAidiyyJVsKLNFCje2kgPuBHt",
  "key18": "4DHcUcNTAr5sXH13ApKkuZVMt1xCuBvd3JyMNT6QMbotfveHyh4ggthu7iNq3QmvrfB7EdejmiwqxDuJzL8ZyfvB",
  "key19": "4rUcGCHBz5BSstfemoFCUgFSymod5uprq6KVbpHcH1Yr7BDWqAxvEcpDzTAokVSFgWLPuhW3kkhkiY7ARnpfPzJR",
  "key20": "5gyCJxmmPohAutMTbAjxWZrDEH8E889hQzJ6ivnTpgyejWuDs98BjqUL9AFf3Wdhr6mRd63CSeDhfhv5xdZrk6UX",
  "key21": "2XbSirD6RMSbpgMhRUvk7muFkvzVVBB2zmzrjjYsNL9r3ncJN8RPdkRBJHeWJNAt4SHoEVCV1USJ9fvbsbMWRA1A",
  "key22": "4M3ZcYjgjvHuUbPnAh7HTpbXjzKsK6qqWwAXRjd1ixxWQh9RZBFawX2VYEZoR4MeLUtucoJStWc9af8F9mtdw4nC",
  "key23": "45AcxK4LYe4cZA28VGFJznX6ct3C5RYTWZzPdz4Y7C7kfSwjhXzxSttWLLnAmLBq6GeE97KQQ5YSLYBQGPUoyjgo",
  "key24": "2hoGabdm8ZBgfi3TpwkjLcSycNF6Yb98MpREjfm2pRfovzUSqvEaRp8T5JX9mBin76TjcvDgViJ1aTbunfshrtA5",
  "key25": "2HHdaYbhLuXS1ngAPptFEbpTswGFBNMX4jv3yU2kBJsMbau5YjEco9RhG2Wqs8Jr62wyswkb5QujtwXj9PAVFXeA",
  "key26": "28xwLGJGi7zqXYqWgtXBHEytANFm2Q8ookFVNKxWvCpeCvtj96QihXU2xbGVfCz5pJmmK2VFq3VJ8Z4KUuWiNgFq",
  "key27": "282MA42CivL7RHmxUEwWTEqGUGpanBLF9h2rvzi5G7MXCWBQh4kTzqA5nq4dYNd1RTrz7Rxb9hzh1ZVbZTRB5qWi",
  "key28": "2QGrfmrDynpBodPvhB7Z3x7hQQawEb3FESWyRgdQTEQmz6qxYJ5TMz9BpYxbvJGsoBsVkWxdKJJHpxt6WVSGQumo",
  "key29": "545QtF91RrLHNfg8cRrvTbGiPfhfNDspC9tomoHYKxPSQPm4kLpd2G2Ji2uUgiSECM3j5CES5LkJ1n5CfuxyXTVW",
  "key30": "2viZnrLd99Rys3B1K1ZJ4ZssiXZ9azPsaqBTKTUEAifLUAZjd7EuWvvKHekSGqvFEZoNQ9B8Lth98F981xvaevDr",
  "key31": "6158C4cNpBVsm3fUP7XKcxyzRr4Yy3TBTswsKKBB3LatRyvui4tVSuqCzk3Aq4e4bxAW8p7e2HUQ2rdhD1ukG9zx",
  "key32": "S5TiPnpBGyua2RbwHs7XtSpeum6a5Gt7Y6woSrcHKXrYYPNfnVBAZKuEkg449Bx4PmrvkbyLWf5oZRpHW3VWcwy",
  "key33": "tiSYPwi8M41JgqykiRSC5hHZ8RjwpQ92Abhs2sncPRUCt7S35FTV9EWCuMM6pwaoBr5ugdJ6e1FkefUFMoc1cMp",
  "key34": "44uFQVZqR25kuD5MZAY8pxJfXFCzzhUrhXZBYCnZQJGLcEB5jqUNPgHHkn5XYrQZDtifAZgzBJrE3bRAZuGfYnaF",
  "key35": "3gRVwNUYKLWKPadsByWrUdpUV8vjXo7UQw4dcMV1dgontFyQb1oXhiw4YuPjEfVk6cDUwCXxBWSCSZfmXxWk7Mmc",
  "key36": "48AGEEH3YuMvGH4398hWKcpiB7TdngB51nc7zUTXS1RQ892EkiP4kACSp1nupCYq6A9xBYGTpy2h27hkCbvzxNd1",
  "key37": "23bT2u48VjFWw3MCL9b9YtEfqMwCnA47kHE79ZEnBzzS9sxPHJUCXwNrfuGBx71B27gJDHc42uFaHwFLDjPwWtXv",
  "key38": "hCUdv9p82YZzekXckMfSxGC34dMWhcfNmim73xnk3W5srr9FDPh4ei3KhrMvfVSRQyEas84wyTL8MhUjDja7vgz",
  "key39": "6YvdZnNhpzhAcmhy4wfE8CbpKKea7oseRqSrzVvu74kd2eQ9WXY2bsuAKNS3BZQhvuSDHcWBibXD8y8bJcJXHYj",
  "key40": "nEBeF8wEezy9hxg2sT27TuCmrJSKyw9cXAWHybL8nPgkj3wXoJigefRhhHNCZXHzuWev2rX7Cr2kD7nmY7jCEdF",
  "key41": "5swQFkaGaUUKSJfrRFwwT8DHK69YozxtQsnuCYJbT9otYwTx6xgCSKwYqBAQAsGcEuG4ztC8Fy72RnWj2oeevQHu",
  "key42": "TKtApgpCh3NzKBafrPy3QQRmzLeiTe8RtXXwSo7E3YrBzKZKRoBWVdppBqaUwqZQZPigJTUuEooNQKXebzMeFaL",
  "key43": "44o9qJc5tsNaCWVmhtZ4fH1FGfXNMDzMKbeaAtFbcw9JZ6AfAU5kuAPXb4mTuEFxTe8xHc6jzUAqh15jryMfUkjF",
  "key44": "4CdWP3WbjYFmeJ8zpUK2BmCD2DmYicAesvu9LBAHaYaXxYCsH26NU1R1MV3MyAnyXZoCwBaB5c7AemSUbjkKgaYd",
  "key45": "5MWFBLvfgLCxUQLD4AyKoczDUi6LUCv3T6NieosLxUg8Jh3Dt5XCakKSQgpkskHCG4uCB5e5PF4A95orbnnDfRnv",
  "key46": "4pCozCgA21PKoj98AF5BfDybemP24XQV2cqxctqiCMCszjscfzTebiuQ4tK77Da4bueuk652fMkTZZzV3L5N9Lek",
  "key47": "2HbWHjyhejKx1EUpUiimZf5zpPARSKf9CupuE18rpQCnLSvfMk3jTvGTVAUSe5FGdMvaYv6Z8WdyktD8622JVDwa",
  "key48": "2faxsEu4xsb6FuPaJcqrvwGqtyjc37NptADSXWtQtW7TLjPgm2UwoFhfVfNUhzKva8hoxR7nF82fb3dFdmBDkH6B"
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
