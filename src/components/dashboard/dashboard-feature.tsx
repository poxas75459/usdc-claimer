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
    "4rJTAw5LPs5RWjzgzuLv69r463HcBPALrFrcWJNbdDNp8yFviapqyi6BusV5EYywBprKf5qPKgcyTC1RdhxXbpjq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nTBhP22j8ZgpGwWYfTUeHXYN89TNVFsCa2zhvZ4dRKmhVzCtMZCxh7UEEdGHkXirbYNNx17amdj3vKu6YBXcVVC",
  "key1": "JVkzj6SuDm1KioSsMTMLqGKafc2LFhkryiVPMVe3VrJknEuhjy4wjeCR2iKPd3i5s3XdLjWRLcMfeu2XuL4pzY6",
  "key2": "57NtFfE5kSLR7mPqvgSC88xjMRchecYXNEJRfKHuJ7np3akmcj69TUNUqkMKWPepWeWipuLHd5rPuJK7FhaWbLS7",
  "key3": "42dBA91LNi3iFjcRboE7WyXaUsxaMu7pmVzbR8ThVJPX5p39vzYeDMErP4ptjKiocAHKAZWorqVvWsQQgfBjEKoX",
  "key4": "5q54gziyXFjhSTVVwnJmafcVMRdsC3k92HKbs8xVusNBFXiWyvbUMxmSjvCM2hm25pm6skwtyT4LfG2J5fWAGBGg",
  "key5": "2DthAa5xcKWxnj7pprvzJZeAfs1sxfXYQgnDiM27jtmS1UrWGvA1PXqrtboC7C9R3SjEjoCDPqzTE5d7taTLJZhn",
  "key6": "2kuJR3tidFFhmFryW57V3gG4EdfggxjYNLuwaR3kM9RYVhd1pP9hviVd1oCtDK93sSRWJw37pK5TbdP8PN2H6pcM",
  "key7": "2oGVL3RsWm5jzvSkpffUrdqudrMmJUHYSGeQC22dZcqXpCt55bAHkfBqbxfSMX5RDJByFH4Gc27cEMWYhLX5AMGj",
  "key8": "2KG1NbeCM4RewhxSwvQGR1YTVGBiAQWGbUKQpeMgLYmjHzm7CkKri3qaeBwboxDnGH9L1jf74YcFenwEw8jHpR2o",
  "key9": "3WW619VrxQHKNT4MUm1re1erkGRTCiqJPBaK191ZRSWCjfBARUvvAkSe1hPG3ZKN4SrUKRDyiJZ4s5vQL5bUoDVd",
  "key10": "2KPHCMvSR6tn9qaoDW2cdQEq5VA9jZho7DRHwe2M3oYYRL45ozxV9XFGsjbeBacozKNtL3WgD5H9pTXTYRV9EfA5",
  "key11": "8rhSvhJPeDcHLwRbG3eLPKwJhE5tykCFZFDktBWbrN1obHyxKcCt2oggfkNGDTdo2yAQ4EBTNt2W3zH3CQoN281",
  "key12": "tVH8cr4ihSn8hoQNyZKbJTkEWA3HS3TiEUnoqtPebryjg8odFis3S39DZKf1PENLg4bwJEQzr4ezF7dMmLcoqp2",
  "key13": "mRcrtdnWSQLE5hErSgd1G22f26E95Z4Udav8WMhoSytHBKpKVQzX8DDw9goUeKPsLZfd2KoAHGZ9pxtWX4FWYSs",
  "key14": "5gUHRG4srjJqRKw3L5gRwK3c6ceqY7WE415PNSwuYfC7rkiwExUog6o8rd53fKCrkEjkBYA1LAaoy4BVSJFYiPdU",
  "key15": "3tntgzYdabNSuywYWwPFWoQcSezLyo8N7U9BmteNXrsurGTJpU9Wx7T2CxsotZrGSFnLoj5Z8e2mPZcn28qra68u",
  "key16": "4eVofbf72zcHL7dbe3NcqqZiBKHr4ZwRZWx28s9Dg2SUGsR1iKmfpzsNXmZtShWLaVHCBPbmAg3n8ScUK9s8T3UM",
  "key17": "3dYbeQ9GzfTZitSde5HXSMJkjdQwdbx8G2vu99BSMXNvrR7RUjjyEZb3UJfFLHz5zqir4uUMGZsFFeBkrS5TEGyh",
  "key18": "hg5AZYsnUKXY7F7nU2a6hsFNfz4ohdZV48YRCUZoc5ARWUKuUX1ZK3HVMBh9C99R6AURk1Kiijn9wezyNVdFX9r",
  "key19": "4YqYBmSAJ1taarcqKQWzavoE3E4hf2evjMUxvs6cr7qg4f8JUaNJKzyr8iAx2ZVak3te2ZGo9BeVhMhDep49fFmu",
  "key20": "46SHx7Gt4N8j4ZAW3gdk5t4mjPmfGDpRnTqEhJsUnifW45RPw2sS4ays8tpJ4rbj46ttwu6VmQLkGDNfLHyVukNo",
  "key21": "3TRF8cQJpdbvi9PMBzaRnkY35vbV5vSao5AU83M7TqEbmuKctoF9E9fG2tqM6PTAbMpbGcpMMkW9WcRYY7dWjgLt",
  "key22": "4vc8rXGTxBcBGd1v9imwWsuYH9S2ddpxmbTtp4UhvS47o2ZP2rvCdRyR1bnzhgcKFxzCY8QA8STEbLAfyzVS9ApY",
  "key23": "Kxmno4u4T6tXXDcCnTGxrDCb7BfumFr86uruQzjgq3JJBLJgNo1pya6MWMJ3fL7gvEnwq9b2aZaWuinrkcJERTe",
  "key24": "siNrWqYBwgMZ9dgCfss36RB6ZS9mfPSjvwubY6LrL4vQjvrq8nAkTwztoPQ4W1uZSCduyf3tC9EPZaVcJUaikfJ",
  "key25": "4PM4xvrTFe8RJvXpQbHp5UKD2iKGGDSLh1Yxo8489Z5DjrGwQx58M49YhEE9Qyeum7jaJYHL4vYQb4A48c9bUPpb",
  "key26": "qX57bc5Y7u9KA82QVVD69gMcWACiRRWMNkSxnFs5EhiWmaUkN3SQqhuREFKVK87kK7HzW2XK8jPQST1U2WuMtUy",
  "key27": "3eTHxjUd9n9sEWe4xtPYHyRLdx918TXJc3WRDPnQe3SvWd4bD8dUA3AKEFEFwKLpr87g6Cz4RJq23Pt1eHa8nxbB",
  "key28": "3ki8EWNo1o6GB7nsb8KuYzEoxegS8qoUqgnoQoCrbdT7erxHFg7eWVs4r7127TVCXak6TFvpMydKPRitedGh5jFd",
  "key29": "MMm8zKenwKNxDPJR9zpxxkiKxFuECuf7MZWikobZoPgM4M9AbXzW4DNxKgif1LMTDxoPEq3FciyJDSsHpuzcUdC",
  "key30": "3r6oewiBtWwhnzo4bF62vxfTvskgtRmQ445tC3FiakSUcwPerrj7Gz7okDpR4ktRoXpdUopYKnCJgRJhAwNWjj3G",
  "key31": "2HvNUWLr13sQ5y9y24X1SF932uQdWnun3hx7CZk1ksDipE5Xt4v7KzfEigYbzWZYL1ELdEdMnuCY4yA2KUA1mAZF",
  "key32": "etueXjxDpzg3hE1JRbMz5ngnQH2kyqJDYJgT4eL3rkeC37QQtgwrXMFyCZNDbUAh5X45qL9quNzTCTvSAEJqKSm",
  "key33": "4SJgweMnCBEqToCiLLD3Q1DEWGN7E43DRHoiBKJYXMWDzugm8o1YkGhb9rQHmZgjWBxSCMDCvBDzW3pzZpDeFyEN",
  "key34": "7dp5HW6ZF6prpN4eFTvPnkV13Uiw5KBMWzpKLpx6CJxBT2hrsaJAAGkYJQno6ZMMvp1CkefKByUttwhCpF1drRG",
  "key35": "5tXUBt4PW2qfrYg74t47iauJfPYMaFnBY7ehobMiYbeqTyaoxpp9SQo8s12rYHX3x8FAoa7CdWV4MVFuECdnhWBg",
  "key36": "2zXjagdSaajM1Pww8fRfoCB9uUUq2ynorpKk9FpetPgbcxyZqgjXyfK9U7ttpitYLXASbpBiDPW8z2BRk2pjr1PD",
  "key37": "2WkdgzUWTVD6nbPwow1NnYtKBXBki7sSHxDe46m51akU3dggwbNaHe3F8CwygCQNA8ThnJ18eNr75f8hztnmUy5X",
  "key38": "ma5p9uefeUVaHPKdhvjn3rhwMGTF514VLdQEvPWMaTAs4BfJvxsruiJ6eN6mSRZr2Lb4Le7F6udYgZNVA6jYW9z",
  "key39": "2sNwfMNNxRXzDHqPeDa7HeZvchUNHE1ahRzghSGpUkR1xefRi1ShuS797ZfsCHHWFdRtgi7MRAMLnPkPuPMZaC23",
  "key40": "x7p9sV2wSC3wmFZcD8HdDh3grXfjTqTCsGQpRUzibeSQbfhchtUjk3r4oapADCgdyjNysN4ZzLuii2scAFkCBQk",
  "key41": "5VeTQUmedeetHMwzaB8GsrpbjfbMq3xuqk8cNA5m12PHwVJNiHweyWyTU6MrGscH1eUufhbjhCMoUGqP1xp12mLR",
  "key42": "3ycNB2YhoNThruCv3wW6DNfyrFMmaLDqH4iEG6hMCNrMK7ok85xmWYnokrX4t5gHc6ToG6n72s52HxwS3jPfH4zj"
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
