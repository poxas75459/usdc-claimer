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
    "3euWgqHCTjQTPAenSPhbGLKEk4rbVAT1Ne4P2JtN88rUHji9nRgKaKZDrB6e7YBykCTPRzsoj4yt7TddLJAHTwjV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kBsEnj7cY2f6RQGzyHyYVipebnmuiMFVLCCa1KtDX3J7RsqtmTQ1PZcu5G8hNB1uaUBdmLVys8kmkHX7EwqJzfp",
  "key1": "ARJd7hEnu9owCSwaSBVMwSsiRvxdJENQbVNxdQPyVxLmhYYmtM4FVbSGgzR6K3qepsekjDXgCJ1oxQV6RFwXPhF",
  "key2": "4Fr6ckpY7cYJW1kXeDyrY5D83zTHf7tiWU7a99AgEnBHN7sgYLrVhmbkgN8uqqh2dd3ie8NYDfWFNGamfFWuqT7N",
  "key3": "3UdpBQKRxkJSXRUUncgZwMJKxyVwon2v8oUK3cVLe1Su9XyVyKSzqaJiGCaZxANU4obZtfNWB1Cs8PW8TdXa3FCd",
  "key4": "5ZusunFf93hyS39thqqRRtK947gbmDZKzqS57K7o9RiCQB7oMAE3Te2AmsJsKZKD8J1KWfFUCxWja5k6Z8jnYa83",
  "key5": "3prd1Gvav3YFhPQzf69MJC7uSGXqpY2cxpFq8DmFkrsoMJTpqQiKjaTkh1cCV2TJSFxnjFdKCMLoJSJWo4nfKjCX",
  "key6": "3k6fh7jQsmq7t83L1ib4n16rE8myraw3oWFBJxANbA1XJN4LCnD7nMgWc4Hd9z2HnFkhw6EaNF1wADuryMGufU6G",
  "key7": "51Uk8PCb2i1EyYkQYG7dS4UcgDkLw7JkKFHdcwYqHMiPRshdC9ykepSz9Kd7LmVPJMad8GsCxPfy96iQmaQZ7WEx",
  "key8": "waxRVyTdQV2WKS5Rc3Nw656deLQ6N7FPMMKejzLWTF2267AmdfYmXZ4xCs2dwjKozv6QzCA6UUpdoTPHQRk1Hd9",
  "key9": "PgwyFQX7GspuJApSkabtcKzsPfGpm6wt8V3PraED9Mgwx6nJqgRwHdDs9jMwsRrnHvNLhQNvHZmRFYs1wESF9pF",
  "key10": "622r7tfnBFGD9fDMHrrnRsWHR9j1umWbp6SHhoosSrk8NYe7XbF4UemkHcaG8ez2Nxe6zMBMuCUmyTawzpessQXV",
  "key11": "4mqqqfJzZqQU86j4wW84ceAnKu929f2wyWmT3LrnnQf7TteS5NhXaN9vcjj9a9DeDhq9UFhy13wdLDcrHUdgXyNi",
  "key12": "4rbjZbcyW1atrPHNb35H8noibqW7Hrgpb9VomKpFzdcKnYB2KGtimMmK2dRZemuniyKemWDXJEYT1sycnwHg9LwR",
  "key13": "4uwrJJLknXrncxoTTBfXQ9WSzJN2UwX76oBCx8rookQ7n52YecqSfWjhKx4KNYMAmRWhz7MGW9Letz6RRsSe6Qf3",
  "key14": "4Rgjudg52kZzgZRjSkQqxKUotHjDyc7EZQeATwcvLus21SQ73bxMvgT1TAJTqw2tbzMiMccVWvdVT3N4ZcDAAevW",
  "key15": "5jZi7Bra25YqCzA73KjXepVB4GwVwLrKTBZmGWdQUhw7Fn7khrmNDDXrseYdztb6Q91YmuxdWymqCPvsCdVP8Y6G",
  "key16": "3t7ZBavW1H1A81VrbNtwSLowkpC5CbJSkPw4FdCkmXArAprKS4QvaKytrakfKnr4DDji5REUgXwjCenm3g3jUNnU",
  "key17": "4CfwnTQ4RqSCTH5T3MCTfsEm2Mw7QrviuX29bp95LEWqQUVNkiPMgtD7v7JKdKEyThSgUXKw7JiVAuAp5gYD2p1X",
  "key18": "5KPRiSa15WDomxDFMyFwryATKpEgEc65oFc6ZPb9G76edMUQmGfNb1ytCdY7CrmdKPTd9Aj5fimF2R3vyNdssHkH",
  "key19": "3SoZhLPH3vjCzJN1fpV5yBzXDGxt9Mwda2UKpggqifkwUp6XABXd7ojAczRtNqR9NrcoNS1MteH4FSZWKYwRFZpr",
  "key20": "57iV96kfN2Zm5WndvbopiGGmcX9RwTiuWy9xuBkbjExab7Ni9FBqRm6zri9JkT7FupRUuW2mMCoZWJjhZhnUCkwj",
  "key21": "289xZatjtXCVcThMFiyka2A85qQuwUcSrSkrrKPanHeyW23Y1avi8pLjyKDFY2qxkaS1BhfFmg9Yi4FcMSQ8mPDA",
  "key22": "3FXsgVCL8RiaxEm8ngFNKmfEtLaK3kGqDNVA56oGks7vCeXRogzVYk5rhrgnh7SYDE1hUhFcBfU3mKo6jATaRWdc",
  "key23": "VApVnbgEf58Mnrr6LU7qoTxmP5nyrZy7d9Njz952HAoKLsTEGugfyNdDxwG6NfRrDJZDkpeF4pPwWSW5c9vH43Z",
  "key24": "SzcyG54g8cANJ5rr5wRhgRKNLXTw3ZR3SDNUfg3xWa6E3PpvQURKzXuF3R5jEDR36NdPRQdWTkxyXieFQN7Jzxz",
  "key25": "3bhtRzPY6RncCKFAeQFDzK9j6LJr1Gx1TYdZVVd7e2oqyTXD8y8JhFhiQKDBCMBSEBR4cYwYRjRHsgVTm7Wx7GHv",
  "key26": "49dFFLBxc3x8jKNEvFV67LWd7cK96VdQ9fiLkqncDP5aykZARCGhX1X9c9UFBD3FsUZi9UyLFWUW4aRzeaZh5NxH",
  "key27": "rnskwfFgsy1pr1KAJ8iFxV2cqA2TGCfvceCLy3bgqq4DveJsFBJHLFdTwMJkUfLhuLimEeyLXtdPCsmsVe1zzar",
  "key28": "4cbnWLpGmqGZrKbJXHhSkMZrQRyQHARjxcdEhTqRNHCpXSErJnDNpyXGFAi9iZGokY8FiWjXsQSgmyPjQgBXHDio",
  "key29": "3JN3CohF5pJCP4rwggzas1VYJw18N2DR2rmTcfixjtEZTeWaorCoV9WjLpN7WZqsYvwwzJxDH9q4CNEbZNJEopBx",
  "key30": "4cPmNuhMnSKfLPqujT2cpvsqvBbR5kEaigqPjBktQrVYeVkm5AiSUxMbusTTPwcbczGiG2PMFWoaPRJ1NH2fxjAE",
  "key31": "5ksWjx3KhTTnP7BCcLw2m4a7TtCYm6XivuFJLpXzeBwooZnam7c5J36qnpEhNtMNL2xz7HAnxT4ZsUMkkr8d8R3e",
  "key32": "1FANitrm5KTVZijehHLB8zGfiFpazpaigWy5pxm9Q4sQMJPCdgexwHZRkU7xC2HGpC16nyVohFvKn1ZR5KLEdh9",
  "key33": "2a4E1LbvSMNCUGknAEDyqSHrVdNsdgB4P9f23nSch91XuwPCUQfiWBawzYrPBB6xXEJKCuCdBdtwPKbQTwbnpySV",
  "key34": "4fEZqm3zdKhSf3cJRuDCxsj6jufN9bamzrJMt7aVWTMvRWYDURLEQQXtBmCRk77cMjtk1ez1JZPSyn2YtsjWvHn8",
  "key35": "44dvMgos87jWpqqbeDx8b9htCiPviu4YrW3SAfuKEaXotgHVVXaaA4hFDd7NcFX2AvQcCga8sv4ZXuce7eyceXNK",
  "key36": "3FBqZw4fYhokbaxejw6aqWkmG94f76DLT8xU5fFdabm2XKNAaAUitVLA46AHjfzGFVNQX771ihdUQzt8DaiQk26c"
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
