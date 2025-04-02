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
    "2V6XZ1xh1c7PwAJDyfJi296CMdyUmQtx3EAXNxfqLz91mjzCQx3CUAmfSfC76FsYrX9WT7o4fY8DV72xJaGKfGFZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56MLFoHu1pPWEhU87NFqLKPBJqagQU1t6NJYrWJDdVWqzpJXMzyZYRgxVjAhU5DZ7LZbQVQBdyPcPWaXam84fLoT",
  "key1": "MM2NLdykjCkNXVqhEsJz52E1UviMoqxzeynermgNRRSEECvZvS1tDvGqbdnwiG59kzHZSmio4k7tLKvThS5xCG6",
  "key2": "48fEg6ip2W57jxB9nBJVLo6ihdR51rMgpHzQcAwKpbQVfE8wkzEd3cLzHgt9x3746MdtA1aabuRpBowNL1qAhvQs",
  "key3": "7biY9c1TAuE7JGobNuEeBCwypB35cpHWGF39s3qoTpjBaErJjKeR9n9Y8kXCo4tmdVEbCJRYUaAExa9KW8ZURR9",
  "key4": "LRVhbWJimTZuSyYgDFbPcWQJ4cxEmUPUEFsAgVGbmThAQi6wUiBJwcapMcGKQ5ut4zDmgcsrxbY1dsxRTugHP2c",
  "key5": "2tRWg14zERBL7BAdVy9HT7z23TfZzN6xqPGgxz9kknufMcQdhe5Hkr6koJ73PPukPiie6r7FSHf8Et3THhFE7Zzq",
  "key6": "4ehovm1ghNtHjj5XSthm3S7onmwQmoC4N3zB6bGb5KLGQFxhR3o7xWHqihhXPhspr1Y7zX5xRVn8NDLMxx6qSptu",
  "key7": "5zB2UEvo7Kbw49sZ2hMcnJtzrB58SATnfMqDZyRXUvvi3QH77ZcQkcdcs3qxPpWwHsaFTi37b5TEBTMBD5ZV49rN",
  "key8": "k4w8fByQQXiX9SJ1a85BhJTGRxEAdfR9hSKxc5FSSU8BqMjahx7bdYYJdR4NtwRXNVE9M52fygW4rVWNPFUrfBQ",
  "key9": "2Rskr4uPbddTvjZDkYvgpteGEjvSFGuwu82EUtRMLZRf5XxYo76389b9fkPfXTpvJaYJ5eH7QzzarDD8fk465xmU",
  "key10": "2GiTS4H3LNLf1he6SMPadJiYVeHWZ5PNznKvXeLF4fnyB7RLxL5GNogcbeVMYUkVRzhWwvigNLMoLVGv48Mqxpcy",
  "key11": "2Tak2Mv3ddRDxqWrDzyagNP1yVcuy262icKm2BnjaibD5PEELXhuLNnqpV2Xt6M5Uuq3V8vD3ZKzxR32JHncAaRc",
  "key12": "5y6f46j1UskHksMepWVFNR3WB1PFYSShJvYuK6EqKFyjmcJRmyCM4r7WNNFjrFSSJiLPDUXuyHX6uU8RyoPuHgs8",
  "key13": "gBrHVaU9emQFLTn9UVca8Lr6C9SB9SiFz1hmWtmdqdbDAFSosQLR46GEgBMMwHzB9CrKS31zPbcbhcxBCUBEAr6",
  "key14": "DA65NsT2fQWrfN8cgQyjuEX1YkVqJuNdJbeJzKmU3CfPmZTBgphk6Wq1amfN93ZRfWPZ7etCKmmk3eSXvMimxwX",
  "key15": "EWRbjsmeYmDvnFmLfoQsAXPLNmGma3Y3X2NvfnKybiLSz9cvSvYEm79ky6dN1rbgU1PBnBV67q4qwQuMdaVtBYx",
  "key16": "2CLXeQHA1Xh8MH3RbS8vPTocpz11EAXN4HtspBDXN3L5qNFoN2a9nUgnw6DGXM3p1AxfB76gEYijNHAhMdV72srz",
  "key17": "4Ycg8T74awLSqcbefiFyRbNnknmwhhE9dZXtZvbxtWgeZ8K93fpTtVaS45RhJUEcv9r2MwpZquYf1FewtNvLzhqB",
  "key18": "4f1HyKxQMj3i7nxBM3NRj77dgcG1vk884BonnQJahqEt6M59FN9SBPh1kPSbK5F4iiE6PV6GDFmgGeFHgoTqQNsw",
  "key19": "4RHmQZ8fA1kJyFCLtYLPeTLHX2UQVDhKm9iyLCQwsbaxLatHP9zV6Y1ygg5U17WHYJkEAMP6FR6TN6ZH8Eygcj2M",
  "key20": "4rXNbMTW84TLaRawznucpBVvmsqVue9tRchPHW449UVtVmtSKDZDBrFzyHX8zpoHfkXrw5WmKBSZSMf7rC1JencW",
  "key21": "2mGDa4ykGDQv7Z7p8KsbUyc1BDGvMBnnZg23LE9LXZh4VpX6zz3cquoLNS3v1jzLY1BUxZ39xLXNZzHDPBRfKpRX",
  "key22": "gJNoLXb7wXtH2SZnQoYFotQMx4i1CJKReaQ87Bp7X7La6UygjdaidUj2Ldko8fep3eR8QeRyPcV4qh3wBz3Whv9",
  "key23": "UJrKEtPkUDPrTKSYWHgMHyHJZZ8oQs2WVNcQwa3HazBSLD6pD8PG9x6FVMBCn3CbNK5dGqpKdtdSU8PXnnwwshM",
  "key24": "3yHL8GzLCPPzszLAVuHCTDMPyYk2ZrSEhUzm9dGUzhTKwV9hNTjskoa78L243wCtnkXpFTQQhvhphWft2jUh3PBL",
  "key25": "5H3ji93BppLHd5cnkDY43aX3C6XJ2zgdchKhwvrba4aoaft5mKsFUH1SiJHaicLhk3bYNE2EfRewfNAd3a8wQkzs",
  "key26": "rWLMCKQdxd3gTdCYhRwhZHHDZmnTdvpEmd2WX43232md3CPj9L9PMYKjKaYagDNsHpncNVstffz2wo5GXwmTLwX",
  "key27": "PJvCnAxyY1AMGksijWTUm2JKruSg3fJZg6tkJKpCxP4Bryf3L2RWQZaZmCM5taAtYELN56Le1reM7ch1ze1WWnF",
  "key28": "3JRDv6etNgtwEx952NHa2kY2MBuxpGQzgKQ6dscssGmGKWhkJWp4k7SmVoZcJQKJojC4jVGR3yeRD3rVX1KDjirH",
  "key29": "1MLwKFmPc7hnMvyRscFuHwnQ294YqiVBaMdiKveTrVuSL9iSL1rZpRM6qah4PqUtppLcUrNtd7apzP3RdnhDcGW",
  "key30": "bbmrBZSL3agPWGtVxfyiot8HWnP16y1bUpzBTK3pKhEx19jLbsDgQmwHnt1CjUb7h92Cm63npGoCmLjDMwjpiQU"
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
