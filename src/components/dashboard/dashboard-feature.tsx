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
    "2ivuJtAGqhQ8Aropg2jNuC6hHc5PJbWFzKhVf84Fzp5BKFoScB2L9v8x8pbijhRPPheeRwxEoigVNPAqSLhPU14L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36t99zc3N9WMenvkg5cXFuiCVpi93ixDhEyEbUGZi49bG5Pru4Fxmv4k6rYaMsqNPMD5kXx1NjETfmUePdNuH2AQ",
  "key1": "USUhuFvNm4v2hLyxXuL3FSDKcwsKbZZwRUEtsxKgY3k8eCCQd7cA4r6hkyPKkTQexn6DyWYLeMXGX993KYuXmsr",
  "key2": "3K5gWBJCjfG69dexX1AkfugwtsKFPCnE57Z6UQuqCMxUq2CHnRPZPdPC1h5jaFLQ1iz6PqniyY4gK7GknpTynK5J",
  "key3": "3SHdb4FbW9p3CZAHPJvtKLJcN5EUftmKCsDaaabCKMvBB4K4esMb8vsJZJ3aDUn1GE6PJQUa58T4HmvxM3ZZFe5a",
  "key4": "5kWChMM5RhN7XS86kDCctK7QRshBQrr3fumSS7GsKZaUbALVUDErgidHtCxFsX4SjycUF6C7jtwQMTUVw8ggvMsu",
  "key5": "5TFVJZYNoZ6BfsjtuAXJn4hhoXstJVrfru5Qt2XujHUYi8kKr4K5M6qFzGoHLEsmxYvYxt4i7kHaXkeQnQCodqXo",
  "key6": "23Zh6vPx8HcuN3Ci3Mx3BhDjYDCQkcFVxBcekSCKXgL6t21hDnuW55kKDzDmnosyCXgz7HvTMyM767m3gbD3paMB",
  "key7": "3NVAjB6AxryFWk4HEqjHg4R55rbBSQJMxDjgWSGq1zu3BCznJ527aHzW7UpDW7Qta2gbEShxiFrQzbb8HPz3KvHz",
  "key8": "4YWA7nwbAQ2aiBV1w2r8QhCHBG55dJETKrbFnJMug98UgoLRAp9a5daqXEPRM32GTpp4jRTUDqzoo3V44M3sDQmD",
  "key9": "5AQpYCpf1QJBYHykWcGViCE9Y1SQDmSQBDKLHE74YYhJVZGfEqXobmxWXgbEKwf5PsQrEZURKpSiHZVzvjz9RP6H",
  "key10": "9Pb8Ghsqbm62zkxmfXmWbWnYygkuXrDCQmDd5krKbB5Z1S4ZJsLSXHuzZbg6AbyGbmAjvvXhMJnv2Tfqus7yCqs",
  "key11": "AmB3oSVb6n55d7sZC73wyyEhAB2xdTSDZoEtocbkVGDDuhg3frfgXswcxCGqf3rWaCNBguQjBDAi5VWTyohitRi",
  "key12": "4cByu4Bqn93bk4tB13caWc6XZhLq7w9RFwn3ucPmG2zHDta4NTa9zc71ntFdb2EAz11SqBC2NY5eszYh3986P6S9",
  "key13": "2rfWcGFQqh65bqaV7cj65irw2aHxGx9sEUpUYgEhq5a4v79CqmajJ8isXywGWJwfEyEowMWmVcfZwgVX2nPW5pky",
  "key14": "2owsZzwGk2UHkEHSGXnzdgBXzs6JJs4SB2PEP2sAoTLEwUKTgPeb82QxykzYrfYWRPbjQUY2CZU1Mu537MoeiK47",
  "key15": "rWG79QCfqCs2YZeA8BPjSsZ2B5CE7ZiNwut4Lrr4QepdJnQ8GFArLCdQqakKhqPYD439c7x9yaAojsqqAEbEBC9",
  "key16": "4hT284PzTtzin7kfzuaiwiXyHCAeLJdfA7R5qc31wfFVxCxNx5RVxy3sweU9FhgQuLEmgDrEP59XMfuEFqgfsEKw",
  "key17": "6roNSsgMEMapR2RCSovPR9yj3YTAYVyiyAB2pbHG78L4peVpNTKVBMNBPwYH9ML9HJ764X6A1CquwMScuyB8JHm",
  "key18": "61ivJPx3wjUYq1cZyAqNHMGZzh1zzzkJ7hDjrxuJXzHHgVnZ3WUevMCGkgFpkNsUr58KtsmYAmxoApmaWo5zG23b",
  "key19": "4JwDw62tSY2y8brsRt3Q4rYS8Qz7XnGVAcmCgdLKgwPkbhi7CcQtynjbEky1N3o8oxWFdkGcQgwZMSpcoCtmbzbz",
  "key20": "EuGZWriwNh8yyLx3VWyPzBgUYtMw6wCefVXA92esmGawk8o2HT1gvntGb4FGNso2iqJbAFqRLAr89otz8EZv7F6",
  "key21": "jQ9E6cUkLAVHPeqcmq1VFmbJa5Fb87MdWLKGX1hfAkMSXE4StnBa18ojeqt8uv5jip7b1geYKcakSDNhvMpejEt",
  "key22": "2u8YxeAX7Bn5xMxYeBcWgWPfy8rfoUVtQnBtunKqVCu6XcqYJNwEHFYCQvLbxtCn89cMptotft3UtpUQNU3SjaAh",
  "key23": "3HM1sT56F72LDVMUuebcFYG52xkjtnQYR6SKkRf9c2hC1mHCKAFbZCuB7fMnbyBiAbZjXtRDtYaEck1dN6MsgtSK",
  "key24": "gJWxei8j4utE1Nf8CkLKUiqSnYRiiG5558Mrhc7CU6JjZe3aiYtWFNXpSiS2xjZufp1YTTAJPiSfDmEC63GrSeq",
  "key25": "2JiqH7ZGriyik4CCaksMHmjQte9tgTBpcB6eKfVLRXt9ATpSiTp6Tne3Ey3AkE9JfYBdiAqtkV12SkNYWfNqED3e",
  "key26": "3ZCQgBAmwzHuDbsu2R3gHTU8YLPm4buEnx4ptaLH1JD9kQpms9D2p68YPqTmEtVErrq6ZEETyTq4zEU4YGFiBNf6",
  "key27": "3ak7aBxDFfvTB7cutopar4CLvMxEMfcGgKezCjhPma4Hdz4Thbu9Cp9KbBxiyaZtP1C242Um7GeNz51qwkxELZHC",
  "key28": "47umU8rUUAW8TbGKBs4CFHKRv8FvPN4JocjhUDBtzS4XetG9uyaQpVBa6t4dD1aomhuTxBmqNyfzv3Dis7dGktF9",
  "key29": "4Z4XDqKquv6s1adtyvGEKmrH43L2MJKfGZCybyQHCcZYPT7kckqk2N89ZgmZo6WGdXszN7SQbuZGmcBGenpnV9WL",
  "key30": "3BV1QYGkfi6yA2UfpnDT6EmCFkTbemN7LLoGotKEND67wjto2PzrmKpXwipVZtj3aP7A5fQU1xbEznVUYXiY2Exs",
  "key31": "4mEm8yA4LEtXLURnZkTF4vZbupQ1GmNcopmZFPdeFE8d5oCmeGYxGMnB8aLm85j581bDFGs4hSeDcPxBzCmodh6Y"
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
