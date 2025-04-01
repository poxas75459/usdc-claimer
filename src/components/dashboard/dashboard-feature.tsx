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
    "4wjaYYFk64ey98q2GVFZ824UBpmTwv3mPr1ktBgPQ8rFyVzW9M534SAsdc9rf9mHBB3sgzwRU9jGgQh8paUxyeDy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M5o1MXEXiUmj5T2pNb9FA4LRdNdECGUWjBP1a667AUZPBYJLP55ke2BrhwiSaCo6VkneAtiDM7H77eRQvyuzmLt",
  "key1": "5twzvY27JDi8m9i11GsYDDRsM1PeiFn6Vi389qtseYAD17ZASx9XuPY77vvc7rAbFRjCNDpTUkmUymZ1axQQeDCD",
  "key2": "4aKq9P7vCG4fhBpH8FfnDs3vCRRbT1Tb1fPmrYrTN8EyM9WJPZ1kLi97psmbZVW91u5CgC7gkum6BR8ZKVjZK499",
  "key3": "Gt8dLpcbop1FWi8s3WwYbWZmW2mFg37j5LqyceaB4AVtuV5BkRVvPwESmrNZqguf8cj3jMTGTCWtYMCPsGC8ewf",
  "key4": "3x6PMURuEBnTtkEjYBYZY4yc56cxUymFxWv5w72jMWa9e3WGHzPBGXgtjPywzxQcqq6QCAe3tBUbBLA5oBh1bcqH",
  "key5": "62RzSwpRArPsKMnpWXJ5bpjJYGrgebfJFsfYjgfRXuYYCyGHbxsh7663wuLHY3KGocsqUZmv4agJsoaggWcp3jei",
  "key6": "63VT2qEMGpXQJU6HdyzyqxYSxN18okK6qpLLwK4eiSTm4Gwa8UNARvxMq5LKBhGtcSoDzBGkHqQHdagDMe78z1G4",
  "key7": "5irExPt91tA3wyhCPQ6ZTHfrtMgp3BsxT3DstzdJqXCVU6TJXwL2TdXEKPVsC87TmG9oAon1HSijVudkmvmy2R9x",
  "key8": "2t4oRv9gu7fqNotKbM8m8TzsaennU8aTkHAMZ2YkHaWhmKfifcbTFXmGwfELAai3mXMB7yon6a8bDYMBd6h2NSa6",
  "key9": "2WNA8bTRzGjAjd86Ey8h9bHzc5VckKidMPqaqtXbYwNbRMckMd6dzsFRy6Sxh7Q3Z4ModDovZkdvYdEyULfbQ9LP",
  "key10": "2yZ5sVB2jHRHPutbz4v9Lcb8yGgcs67AJdq4fLSomKKquQtjTHJtBoEHZZ9Tr1ikDCuNhWVD34cejLkwVacnYvvp",
  "key11": "GpbsKiJzFLVH5jbQmi16ZCGjCmLQPUVXcJuKmPwD8nRNfA4zRwS1UugYa2AcU9VGZXMh1JDp3U6hrsM5BB9buhK",
  "key12": "3uJpnacC64eAygv822qnfjj14jDKThRYqRxn9zFV1v2LteixbXDYVQgP4PCDy6PSBcmMSa5c6khyHipytAqGYqni",
  "key13": "5TMmxDP3md9qSfxd53avwcPftuZjpauzvPcpSskTtKg9KjAMuCL8BRxjAV8PXpHiF9UZudNSE82GcxibxfuzVVXo",
  "key14": "dygYy6uDWF1EAu3PF4deHVn8sprDRJ7N8K8udoB1yKkUrFPu4vVceAtjg5DtWwY8kk46DG1XqSayuPmipTB21E6",
  "key15": "52DKsTF9MShHPSXsxAF24n2TuFNVLTDPJEb9fnFm7RYGhxg5WGRHTtm4pdckCMF8FMvDi1ZfU9pX126CpSqUsp9e",
  "key16": "XWbsZJEHuVnkk8u4nKRKHSxhBtqpzzvd11CSHrGDjTuToh4TB6euX1DUPm2BjbyfmrrBhXoHGmyigJdVXiwZ1SM",
  "key17": "4iDYxWNUx8aHUNFpsK98JzFcQERRU84eqTGyNizjFZkkGTpcJFjPHFYJzZY4iQSnvmbmNivgUX5vdB68Gvr1MZk3",
  "key18": "3PqxXe8rSxRWZVpfqgxUiyeGJtAbPfc8vnA2TsZeXEhoMRdJ2FLuJbRvGB4wKongxBhP9dGv9jbZ2eBE89KYGLDm",
  "key19": "3bdrNLfe2QrcX7D4AL3asHCWevvCi1rDs6NmvmnrhZCGqEwQ91f8vLqdL8s2tAVFmaWKmKB4hC4gktLgqRwtPA42",
  "key20": "4CfivMBjA5h5u5EBWVwLz5u9xnhFhPULWBjFYvMBWjrPoK1CV8RtraWvdwGJr2oRmCjJz467BEFmibkjCtznigh3",
  "key21": "3zFKXXa9yktsvpD9JdqSSH4iYTGMfY4JDrdUQefUvdo8VPVcDaGNW5JEociT7g1efQAqaANVDKznrGTxKv9hP1YC",
  "key22": "3FWy5NeoXVz3YWP5h2NURZC35aCCGQ52Ukw8F5ZoRuFA5amJzZmJ4gK9EozohVMeja4PXGXdoj22QXSiMHNsuhRN",
  "key23": "3W92LmqDAjHvkLnSAJuJMVYfuTVCiRebocEqxDKwkrDsge2JVBrkdETAoXPjTE85kq9rbv9Ct8GZYaXhN1pHScyo",
  "key24": "2PV9M64BH3doNatedroHgk9Nafpc8T79tb9QdgP2kQvNbghFuAJci55qYSD3MmFtfQqj12M6RCaCxZyNSy6yrux1",
  "key25": "3AGkc2Dtp2fTZUdsCCNsSDK6Yte2FXavbYGqZp2nhGQA5GNSji2Rg59WewD3tT6pqgosHTPXAt4pkZhXDPjf9WXh",
  "key26": "4viuPheoRWbojFQrL5KY838YUqwa3K7pCyt5PyCdnXZsxNYgkUNi6khzjWNGiL28ZXCDpnNMrSo1VaAVwhhaJGT6",
  "key27": "2j6aKgfkoPvMoWrK3myuU11ZxszwXNU2nyy9g4J5DrSg7MdF7hXJHxsq8j49RzgFAG3sxuNQxFCUeEy9JvyiGn2j",
  "key28": "ceD7kvSqrqLgtBBaA99qKa2x8yyv2kE5fWJisMoRtE4mswAMpUGYm42H5nMVxzKps9nkp54xms2rRKp6KgBhnkU",
  "key29": "2q6CfBL6WmyRxhUncsxb81hGtPk6HNJ8en3G4wskYU3VLMyHjZW4QwhFUnzEPrbYct9H7fyfk59MMPC8kVY8kQ3o",
  "key30": "4yN1wz1xSW9yYrDhVrbHvQwz4DXgrMyDq9nGEzxfns9QkwGVRLifR6GGCagBZMMAtmj1V3VuqR4ABMiGEh8XupC2",
  "key31": "4yY5thAULx77K4wk15vLdL45NcTFY9nmYZick6UQpjiUo66SdbzXPrzEQ1r3cYJbjTd6ZxfU8U5bUESq8n9tCmCC"
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
