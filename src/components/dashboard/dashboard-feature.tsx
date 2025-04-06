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
    "4PYzJ6LRsbAVXHw6EUfcaqb5q6t8Gn2L474wWZwvs7rqivaDccz1S2KJ7KHSW1FKhnEZSMn86VifVNXrh7ySBYc6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h8qs7TVPUeveRinKL7Rd7ZRwEP1TzYmTP1WWXswMf8AGQjvp4tyF2VkWjnEhrqYzC9SnECDHZNCdAuMSTtB1wVJ",
  "key1": "4zUa99mvnh9k8D1M3axpNJjttj1DdRrhvEF8ZqNeU5Y8QNftSVFjRG6YYH1CeZYZGoBaqbRARz6d1MzzwRHzHZCK",
  "key2": "5qQPJChLcfTPc6Z5gcxPXCAkTKvCsf4TMGZ3JCbbQLWurZarn2PUW2GK7g2uTRpMRmD1BtLx3LdKcdDLWW4bpDC4",
  "key3": "2Nv3RtYAaVmHNPjU9uENSj6McQ6Uj3bauJ2zXWJE8JxBjNDpRc7ddYN7ivdEuTVkdQ7aCJ8BMUwFvCFnKttZtyaC",
  "key4": "XS3qeBpoecisfVmN83nbKmcMDYMNRWP1tU7s3JQ7uMkYshfFJ3Y9r9WEqKpKkYryViFM4zzjcZmogTzBKGMx2ng",
  "key5": "3n3skDZ97vyP6nRY8NziQNgQEU8mc816y58CLTTRC7ybgbWWuTnf5SBPtSt6wFnCKDd9UFcTm6eEY8y6cdZ2ZkiX",
  "key6": "4PhXkWAVyErZugePsu1zGhAGyvBzEmqnKF5zetnxf7FdFW9oeKV5neFfmcttEbvZvTjr8RHA3eg4ifcZkYao2zRv",
  "key7": "3kH54uWTDjxVAMzTvEqrs16rGWDM3K6AEBw9du3Eo7N24QBM7z7zEuLy5Xz6rvJAGNCX1VdiLK1fyjdmyqfVJWuu",
  "key8": "NNC3fhwDNMLA9rbg9hk5L9ndrh4489M2xx3NZk1WTYESmWdaMChLdj7D3dkQvdBcwVtALQZiqMHwk69w3N8wFoT",
  "key9": "5p4VcJVJjeXf3cdfgPjY8TvtENKCtXRVLPMt1BmY4PEJmtitg9vhnBT2EsCpMHhtWqZUojUyrak9yprmAGVUJKq4",
  "key10": "2jGnwUXFjwaKVZfzdFN79ALn4XJpVHZ5XMGTuNxvyqQwTGGaMK3gRqecvJPYp5JTe9yJH89KTnC5BkrLcU1SwAFc",
  "key11": "4ExAxEXBBPnn3xNatKzq8agAs74asEFTXXvmChHATwoUGSLYUeLSA5WaZzEqjHnytEVATYfC5sfUnQTpMrbS8sNj",
  "key12": "5HinVhVV5bHbPt2dptk9Ed2WJmeE69BPnqwPC2uz5r3mBRmvz5LSRLCXfz14b7LBKLiEf34j8bCaLBGtUaP9iDsA",
  "key13": "3ucaU1PPbh52t4w8rgKVxRP7juPgMwjZhHYi4fck9bqbBHtyBGYtiQTPvAVtZ74F1BLtoSrgq8geTegbTAU1rK19",
  "key14": "27WCYS8uNiqnu9t65Mg4LTTJLuMP5iaCjg9K8RC8FNFoFHp25jj7miN6ivAHnj1Q1ye8Lne8yfwPJLFzceUFdfxv",
  "key15": "L8orP9DAB5RMkTRMsRKF5M4KSJYK1V2CbQaxwsmXGGmgg71SKG7mLYS3yqrc5rJ1EcjinXb2EDNmamciUEMWzQu",
  "key16": "3tufCfDHxgvAaSgNAqzurYGM1ELzBNdDZuZ1d6adRUMfwxrEvHWFnpaVEWfPSka4w1fpuRgEhC2CXpmgqRwfHWC3",
  "key17": "49ssBtXiWQcWHnPXRMaCF7bxs1UDfpJYdv4UUxm8z18HMVf9FFwXVpFpfhiJF9ymdQsuD9T9UtZs3Xarhs8EbuEj",
  "key18": "2HezS1tJbKLAhWceAHg7LNLRKurvtr7CnuSh1TyVqLd1m2Lvn9d88ScECKMj75CxPF7d9bksoP4bze2V2Uydhncy",
  "key19": "2Md9CV6cqsezqnWuBZmoeaZhwtSpYstu4s9ZdnS9w8PyK912VPAEXJM4W1eWXgUcpgTe6Sx13ACFS3oAFNfCArWC",
  "key20": "2xfjsUBw64uJFyBuyASyjmCDxMiGtZuq7mLWFShVGFivU1NZC1CJFMVCDd4sLXWPksbbK4ZT51YSyep5nEM9HTmn",
  "key21": "4CsspyZS8XiPJMDBaPdYxMd2aovkVhqrkFLw63pVW9c69j7h78fp5hDWeMuW3fXCucAQv4U6cDbsKKM2cMMHoniW",
  "key22": "2ydUbHeECWTPkjf8uJvyD3j8uBN5boX94vXv1Epe2ZuypL59raHbe96Wj7MwVzDgi8e21RgmUvWWc9ZBXCzdiouw",
  "key23": "35gCNJN7aHvxKRgHQk99o38udSf2uxBjAQtjMphSAkYTjURDi9U3ywGHu5kmAcCxiHJVcf6BDWivCDUfT6RQQfjZ",
  "key24": "5B3bBqSGHuCaHu4HjHYE5uwEJvTmL193JXGmEkht6Fs63nA6rdkqywMdcisaxuzzMZQJ46uRaJJNeFVWz89pTiqF"
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
