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
    "2Mgc7bT29JjBTmkA7N2aRfycw8zaUKbUP3ehk5aDFP6HVYMEeVDzbkJEkSQRKG3UYwXhMZptz2YdLJ5EvBYH8zp5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qVjWaFUWZnKfF3o3C5kbovzccU7Thc5upWGQvuYYTQdB9hPxsMgJg8CPeuGZjz3bMtE61jobhCfTVtTwiLaBWfn",
  "key1": "iF4XVFuCBhYX7tDhq9tKN4vtUdSkdy6j8Ac39UUeWi4bwC8CVa87Jt8RbGJAqU1KT8NW12wbronngGtFZSnaiio",
  "key2": "NRNCJ8Fv9BgeZmSYjjwGf3mE5oeFFx7WiyCCFkSGsP7intb1p3fqHmwh3Qi6uSBsEawm1APNUYTGS7QcJs9L6SU",
  "key3": "3bjeJCz6BvgZF5QMYU7WvWzh455B2cubXB2CDG7GytFgPJyJd1xHzws6KYSu2rDCJSotkunEMVeYDFdJKRJEDVqG",
  "key4": "n88Cw7MzxQyG5jASiy1J32qc366mecVDVJBF8Az3cr6ARpwyDc325MHo7Yb47HHJfGiJzyA3ZMqd1bgtUBDMJT3",
  "key5": "3CvAhBLQA2hja1FZCiFjegAyjQ3NeYyd8q7HnkgoPsGM9hJWopDnJVHSeAfHLtDgAhsfYd2gwJagHviqWkErqCFx",
  "key6": "3rZNr8PJwCtBrxYVxQn1JVCukNXP7rF2h7pXy85ao1RGW2f1owF4VTioTGuKGqUvUDti8XaSXUzCosTHpyhQ74t1",
  "key7": "33aCEFnK7EaZtB479XLvJnXadh8zQ9kQMrHPB5DuHMifiWNYdyLoAhUnSEjb2wMipJG9Tu3EK6WXSUvP7p3XdZpa",
  "key8": "jYS8AHsPxtXruCJ11yBK8e46RsG1HSQb1ZrXg4K4sB5ouuDwLr5pdv2peDx88hyk5TBUg3fupr1UQ66ShTurQxw",
  "key9": "484gPXYghLBCgX3hmkkctcLSUEzn7H8uELSHVvPk4aEaK6nhRv7XS49DW9ws9NyoukDfJZJ2AHCsAyLMKvfaezxC",
  "key10": "32DmbJ4Bu5aLUUJZLATtVomkBjPxCorgsCcibDsYxP79iDmjbmVC345qw9dLtafNS7w7EahEwf2dho33apwHYM1x",
  "key11": "RoHckr93TYBJtkMZEXrknaUGAj144ChrFLPXgCSnqFTcKcWfGQCQf9UA7rtZfGPKBfCdbjvBHP7aszJ1dcAP5T7",
  "key12": "bEWpkuZmajA6vFSwvr2ryV2sJ569exmY11KWJDYwn5XBVbL51yefbfz4RxBsLGdBNUz7JgQxawCFjBx81yNckiA",
  "key13": "28e5qHg7ovBK7z6z9PHoXpFN2NWxTnw8faM2cq2dnZ8oHxAuLKBwUBiJ3yyUz5kGAzwbTZU92KymJmVYkvsbJ17Q",
  "key14": "4fGeqPTCdyaERb2Jppi9J9YE19pJXSFSEkzEBoRyy3acHEpwQKwGmwdv9RfFCTbz3UzQrxUUnKopKq67jAjackSt",
  "key15": "2Q5n9ZUzHrGR9o35iks4PczpHXcpJ629CTVNtdXLVjX8tZTeHZ9yp5P3AJ1Yv2MaHVpFBbtNCTxXEyPZXRc2e3Ms",
  "key16": "3jMeBjRk4CBXcPEMnpvuZEErvZJA9CR5BXT4SCZeF2gKaTRmMAeRCJyvmua6GWp76uyCPr3jKjdYKRxfk8MADt9G",
  "key17": "2fMTwcMJfvhHrmzQbNSEK3XF3gjhqSPNUn5ZT779ueFJig3Er1KYsLdBDHBZrgzAzEzzoA92k3wqp5k91d7U9tAN",
  "key18": "4cnBZuHjVeJvLeFhq98XEiyjDCnny5gxKm2vxojzE3P4zzfMSKM6yzBCMB6YXQtF7xQ2zZBSKNeN38JDHRCbegwB",
  "key19": "4Pcisf3CrDtTEKxjJZeVZeThyx5HwzuQoEvTVJE2VTR6DJgCeq7k7vXTJguQnuB5wv2zt5AAyWjEEmux3a24y8XP",
  "key20": "61tGcCpVtoqSTr3DjVFfHFyMiaoBoLVmrLSgTEhXmQ69TyRUa2yDRp5PQB7NQJNXTCY1iRLerPL7dNWcxokHagdc",
  "key21": "MNGrdR8U2d7U9e76ye4gxafq7Y2oc2tX3gzo91zpkFvtpPitSpZo2hHfjhVAzcfhmYrZP7uhBgcBYM4PwT6X8m6",
  "key22": "4zrtwoNeWzDgRhQNdTfkp1MwjhTbkyB1io4PTkEzQmHYYS56JU7ntxEFjGMEC1Wx8Dwebge2hpKzAqnW2XrMNapL",
  "key23": "9bRuNcubyfvCW3zc6Yd38JghqqBUXFKvHNBbug8okBDmcDBBQvTEk5zQfATCFsngYEwBdxhv5qafQFznXwzwr5h",
  "key24": "317hphyJbuCTgAHsCjZ8amEznaHKa8kSciBX4QdNCH6mo1KVYLrssbX12yFTskQnB96msg8od7bgFs4U8bpyddMg",
  "key25": "63NKeojstJx62X53CTMGqkccwVgevpoMHSpN3KruPDkCYhTRUYkosBhaG6QX8gU7cxNc1MLLQnZCn6snydpKUPPf",
  "key26": "CCQU65wqDzDPucmJVeoCuGmSFp13yiKo8La3gYnrVU9Tr9Wbebiz4Y8ucnsaYo7Hawfhqb48FSWdvMay4AibCwx",
  "key27": "g5n1KJNVC9oUA2Uex2FLztMktEvw5cTKAwcYyrCobvxpmJzunmaZmNzpBv1RG8gNsUXN4nm5fC2nLdLqGYPNDto",
  "key28": "5ofzBsbqdJ2ptMRKQ48fYv55tVTFzu6Jw32XHk5uUDhuVSdk22Xe4N9RHMy2qFy2c3gh5yU9v6HSBRDRVfiE6mQr",
  "key29": "3XvZs1EegH2W42XuZSa9wzNtC5e3AzzypomQ7YcV9hAMj78JgLtq8JAC7vVfbXaBXxyfALTefVXmvU8ovo8ZVxST",
  "key30": "5oYU2GWqePF1zk5EFnDazdiHSWmpC2AKtpPN2dxCnjihkAM3MmmS9JYYsoFpyeHYv4wbRJwTUymRzuZbFYtgrJBh",
  "key31": "5xG1o6Q1TEQ4qbb2Uiz1gVnvjRhd7SjczLHKEpq7PXJbn9xocWoLyFF5fD16m24TbPQpWq1ZAnx4ngei2VJZtECk",
  "key32": "4nXzbbA2oWNJG321mc6ANWYwy7j9SZDEc67NQ4J6psgCgRx1q2EEDGBy5cKSK7A64iHGBwJtvNhRiU5VWQyyRBZY"
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
