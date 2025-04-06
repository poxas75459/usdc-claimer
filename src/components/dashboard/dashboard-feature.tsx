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
    "49UnuHbfNiWQHnWBjtaUJZt4PJQu43oB7G9bEo1SvETE5C2G438xY3spmfXEDveax2KBQtUExwHCvw144cBNqwZ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NgY2nqd8ZZGLaS53fsECRm9arvDYACKZvktGpjb4fWx8GcR8iQJa4wBaz3pfe5koDLZqjk1pQm4Vhw89PjeeEzG",
  "key1": "Gv3mUc3RpMDnX9ZXutyQh12u8MNoPMPyhhKh9hPxmsnMVNoZ2f5QsZUSZEMXGy3eMxzqMejWtDXAA7fsM83CcN1",
  "key2": "2cgHMYSTVMyqywbgJT16phhTiVnMdwhMNZe9nim96sUP6855fVEoSrbhsynJp6sBtzrAYEHDYTjQAa82WBxfA2Y6",
  "key3": "5n91nv5iV6sJdNysFxXiYp6U1yNwcQPFEti9V57XDUb9VSGD2jQnzSc1CETNFQUKKf614hxDu5Hady4GJterF3Qk",
  "key4": "5QxJRNXSXEeKysUevafgbuP7mX64ugocDRMRpcUq3AZMNP8a8aRQwLiQWiTA6ySZKdKPf7YwqAPFzUHxGyqrb3Kg",
  "key5": "w3aFGcMrLWihLe8SKKne2VHHnoNbCfuvmB5LjXVWBexL5XYtmqji7DKLmUZD1Q4cvrA91NDKwRM5swwcJW65T7o",
  "key6": "4PFrX3BXw7x6haEfBui3afQYtTwbMrXfoFP54WieAssNsrGwHb5Gay8XisEQWHeYkPoLhjbrPzVpm9uD1dnkycpi",
  "key7": "3pFkxxxVYrNhccPeV5BAJGYVjJXiwyfvbBNmuX9H1sVENMtkEs6krVbyim8tDbhDb3t8AiFKt3LcPh5MN8Zu3Bw5",
  "key8": "5iSzJW2PfxDMtKiSTcNGXX7c9H9C415HwAKZ7RXj98WbGUiPVn8YUpJuL3uxg3tYnNhcFdeSpBvhTnBLTnDbSsVD",
  "key9": "2kdvhhFsMbb3G795kmD2DZqDrMZ6YstpwiTcwRrnoBynw8eLzNuSfv4DgkKDsXBo6bgsgyU8766wXS8eDhsVnBRk",
  "key10": "5aH8bwHEpjhMm8M2SiqQfukuw1edsEH66idacFMkvrG8NMvePabUjpxQbv9kJ5aXtMvexAeRDf9Bgy4Xk1FXx9y2",
  "key11": "5K1YW5o4oMrZxzHsBRqzHe4czWKkigwXmPBpDik9wreg25mEcUYRxUXbg7VGKiA7u9bC7y9eYtBMS1HRm9ZXmBjP",
  "key12": "3ExqUiYJ7DexwzPC2attLJabAV97CuRc8XsT27iHtTK4j4GB2beH92xqq3eLq4T4eeZGFe4hzv6ayGBPdp93hEo1",
  "key13": "5VeqLpDPq4xVjgNXfQ9fFT5NMNiu8ZFL2uA94N5tfzK6TB8vUD7nf6DdDSh25e5GfXiEHTQxqA4VVJUX9Uu4TR5y",
  "key14": "NCK6uLjVXL8hMPehZLn1QtirGbHWeAy2YQaF68A8TLB9kp7BoT4eMCGnu6fdiLHvPagjBohLetPiaeRA17cTAoR",
  "key15": "5cdcJ6aGdtLNQFhoDzEB2MRthQY5RLRBnHX3WTTkcgebWx5XzpgnTjjZDzxfaMXyQJ6Cv2jH6jwA25sJxpdqniUA",
  "key16": "4N8quKAS7RrtropoDWk4jkoDM4ZbLkgeQY3dUaat2zryHkufT6z1xtoHCoQQSF3DsQWFDbcSJcSoaQMCM6sYd4hF",
  "key17": "5sFNG2f1ZrqPdur7pRksc7bhx5gqW7nS8BiZhqHAtCmUBRi1qJD1GAxvkzarK9m6sazU7a3ujUGp3nFXQhVT891K",
  "key18": "TokcHiCJRmsCPHU2y2G6uBXKkcDkbG3E2EqbZiqCDEaa1UGf1N9BGDbEkqxZH1g6KCeLWzweozaGQBsthKS74x3",
  "key19": "3p96vMQ3J9UexhTCpaqyWpgDRXJX8vNe9gSCvoMgxRTDHaTULo34KgM3WkaNuwLh3chu1EmdiYAebUUipc3BRWAn",
  "key20": "5WXFVuyzaaxgx2UhZgCk5oqsXaQV5cmXhezo2G73Q48c1KVLRdm4gvL8LjjPgDRhBrwgm8S2udyiHgfRGseDXPE1",
  "key21": "eGbLoDq162hh8RiwDCHHb3N3hkPFnHxCBsJGh5iUngANonkLxrYoJsz9cojKxMt3DHtVpWvojmhykwhgFPc2tDW",
  "key22": "wnLm5Au49JY8dA8pjfPjYkLRrr2Fur8SNcmnNEQGz6LDiwC6WX316oPMjkTd4uzUTq7khWF62vyfFCmZvrYea45",
  "key23": "4Ab5Keciqb17kH2N5ukzykwvKyqjxsiArzgHZXWxH6XFYMVHxvYrg83FbSqq327JH2sWTqChfdvokTZdsGngLHnj",
  "key24": "5XUeKuRYaVYg45zrxKM3A6c6orXZ4F6zp6bvQMBHzM7jjpsXtpNHYimQZ6bywkKEejj72bmQSUUfiyfp2x4y28pt",
  "key25": "Ct11VxhstdrxQSP2ffTs63hc5yPxWQ9EUWQb7BzA6rSPZ3dJ14EKcLHbDMUEF3SVFBpSRkr4gW8UPhY5NBWsHjs",
  "key26": "3WSCvsVSDnqh4fksTi97jKkmvbAW7FtYG7nzrHMLWU9TZdX2jWbBrucdSE27FC1UF1jUrSUqTsvtZnfN7JbtkPMb",
  "key27": "Z35ERsqgRiihQJVf83ZYqbswzYsuAqAxVA4T2yS4d18wPu2Ptywbn4fPZB2miEGyDkVHwq5P4hD1qQRFZtB3snW",
  "key28": "zsS9oKK4QJThK6vYJk3fKM7txbe9x18X2h8o9yFELVMHRjS9hYeDRS9hXhQwyAKEt9hYDNmS3iSZAT7zzyhdAJE",
  "key29": "UT8sukE2KcafW5zDcBVhWWYpW2ctu3SPQvBCKpsREXgWujPxCcH6YP7By9xxGJoHD6Mm82Zm5heNW9meAkcq4Xy",
  "key30": "4JCRGx2Pn74N4qkoSZq1j9XDezFELQ4zGYJAAA1oBRUUowbEV9Y2uJ8XaXGjVWD74rGJrowXU1DByezmoGGQnH7",
  "key31": "3enPx8K7cwyV92VCWnatLTtL3rH9SyM355uCYr3Jesj5wszkcp9Qtv9r3Q5kwxrxvKvyZjtbN3JgekvUwUY3JvHJ",
  "key32": "358juJR27C371UvPZGpQVcFJMVWyVCpgeMi6H6mP5QkspYJQc9yJAUohvHnoCeZYQwVew6P9jGhwR6VQRKkxTamG",
  "key33": "5kidAryxmhv1MGXFn2g28fv8TStGQCoNYtH7o6YU5k1zT7oQYEpag75KWEWgTBCuwdFenrn5PBn5bDR4Nggnathj",
  "key34": "z4KrA2dzyv9BHTorsuUatrr7ABeXcqVpnuhuFuaYjuEaRHtnJjPha6vGqGYb5irg8mPF6qPNNbGkoYpK56VDiF4",
  "key35": "5ZCu8YHwnCsCT3ogqTQQZayLsDGFKdzw973ybXqZgJRaBFjqNhGVbkpaTDSootXAZiPQtXQVv7QiA95XHJbMBvUV",
  "key36": "3h1gUTiicyf1FrpsKCQHrw8aciN8wwGXnjFh8e2fGDbc4Ci1CMyzBBk9DGSgRzuwiVs3ZRMEtuAGJeHKoYQE8jpW",
  "key37": "z7uKiNfo8VbgzfmUuSwuF5Apq2o5VfNTSgRCaXjh4yT2eAdVMQQkWEF6efrENvZ3iSTvyCybrTt8T4Fi6GK4YgH",
  "key38": "4ihPhDWoEza22hzucZgjgaFNbM8ENnWHSYxKqccW7g7R1S26uGrtfY6SgSRMuL8fJkL9s5xeA5gremPbg83QL6p8",
  "key39": "2aH4jVWDLShCiX1JnRhmnDEnSGgmEkgi1kPhgzZp3AvfviiGvSAoX7fmZATdGBNsDousFfJGohcC5fSKmaz8iXup",
  "key40": "25b7eAAcd3Tv1n3Yv9PKaTD7cjszgbrZKTnSrL252y8D7LvTtMAxMbGN3L3eLbHpKv8UTDd91gs9S5fkEXgNojFS",
  "key41": "4k7eJgup8wE7BB98iuPo3a2CVBK85thzNfqiDcUBvFVeoEC8HpfP9rmZ9hYqXspKYubEN6y1dAA9i1vnD7eqtoLh",
  "key42": "55exD4UwDrricpcwC6CJa1PWgRLfU7otHukTosy5GtwA3jxVWNHUi1Djy3WutLFNSjTgxnuDYFtJDm6Sx6FYzWcc",
  "key43": "mZQoRiXoXmy2uCi5Kvv8Dj9n1VVuKJGZDdB7EAYxvGNkiAYnGsN9rMQMjgd6F8KsWFoKAHPPeckS9efi2j3PTu3",
  "key44": "V8kiSzCVxuAsG7HMQbJuuP48uuMf1eNVf4iwS5osWRZk1Enbret2XQPq2WxTtM9XM6ntoQ11EbRyGUQG1cLeBE4",
  "key45": "5ZtjWeGh9Es8iVZHUdSGK9BvMJzu81xyTrWwCqQGAU47867aAEe9sWcXnHirDekKUkWFtFj96hsbHH2Aqff6hH8t"
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
