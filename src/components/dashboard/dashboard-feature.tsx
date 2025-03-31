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
    "5DfKNshdGjevgopCtUx6V7zRWB5QCj5jTeZgqJdcFxRAFddckNffNVLLjteDveMN7Es5iJfZ3mAfhfjCur3M1Vai"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aAzVW2PiJvxHEdjCb1NSs8h2jsMMFwmj8Ds3111u85ebedxC7TdAai8S8GMCZnMSE4VDR3QgT7ogUiU3mUbHoao",
  "key1": "46sJGs3JuAdN9jUrdj7Vi9X4ijsNZBFXxXB3PFFYy2ho2sd4GR53HiYWD92pgBBjCxK2pkwoz1PmWPFQ93kQBgs9",
  "key2": "638JptwnQjPSXiMW57AkfJnGc54ApUtwtSaNN87uFkP5XEXZ6jinsJpkYtMJwreU2BsxWy3QcuaDbmidzGVd1TRS",
  "key3": "3BmZn7nvouv1QAycCm4upP3MEHainLjZAyrqKgRtkBn8E3Tmg8TXLFARi4ySB2ZACziEAtLoDU3YcoaB32Wfn5WX",
  "key4": "qdYuki7ZEYrFLtCDLfsfSfG5dBpAGphYNArP8nFweNCBfJAjftRj7nS63tJyJxdNCoWguckszvNR8cxcoYFdBGT",
  "key5": "2suYJn4ExCrQT4W3yHfdMQZgqhXDJ4V1vwRNcg34zMduERZzPXetKJVVzsJMhSFDawUDwYnqhKh9dVXQkwXpEYKz",
  "key6": "5iLXFbJGkPtRRych8kRxv3Sz1sJo5eafN9iVysJd9bLzU1ZCPE8SRQCdDkYk2PDLQLFza9RhufVeTJWRmkTcTKu6",
  "key7": "5VgHvLGvcDZcRsSoMi6bFnoB3iY5v9bC12Fwjkp6KGJzQy5c5xFMTzuBPR4KNib98xLhrtgo9GuNByWc858F9eTB",
  "key8": "48XabQKs8neBrV2NcJg4Fp3c4bacpN4g85y6TLoN41ZWuZniorezumcZRY4TtAicoAc8biUJtMeGcGzZLnzUvxNw",
  "key9": "39ffawnJYnn81vGSprvCnAmXGm2psJUeD1wT1aazZRvR1XyMKYzLyYHkuVWS3rmXkk2dsmrsd3g7rtkuwKCg8X2E",
  "key10": "4kKj6bMgJwwgagvSH6H63qg2p5Zp5R73EjgMtKXMN3DXRd1QanKrkcLghJBso7EWSkf62kQ9HrPKrUKwStEMqi9u",
  "key11": "65Rjg7tgab3FYUeMNZ8BAGFoXMzHvEL3BqmKbSNuYa34nJaaA5DABdwUdeBvHYaSdycLbEoeRvGe1347Rn5t2Uo2",
  "key12": "2gA8qD8youBA2B8ihWFjBr8nyv4t6ugLxRqgVkp795NJDLa1vbcuDk7q56zFpvpQPYuUGWaV7XF5bcQXCiJPqo5B",
  "key13": "VABPWJAF6zor5GRttcysaLywvS1muzdAwPUXFp5hSxSVJMfmsgHJo1VMMqiMvwfEWxm7xTRyCSd8pFdJJ4AbFG8",
  "key14": "4rK12idy5sc7Kj8HaYZpVk6hPPj4f1cUKrnRaSTN8vgfUdBy2hV3j3N82FF4oF77Wri9iFR8G9HADxnTJLcBJVxq",
  "key15": "3cFd8rEwtzvCHrFDhMnSTF3QXrMW1ArzohhtDoJRgyQUpbQJCfkPza9LpG3FPgUmeS2etdUB8qEk15n2w42WQ7GW",
  "key16": "JFEuF2wpZguoX74z3wr3rNs4467jsExG8dFgP3MbxMjPFkeUcwc7Ctyb2CPLux9oKzAmRxrwUcx2gbaZnrBmpkU",
  "key17": "nh1WfondUBpDDLCBtAgafaLHcYWSWgDcpfpvaJSykNnVq63BupHXFLMB49oFgjkfyyfy9zndNQUjQoowUhn2PnP",
  "key18": "2NfoaNJTFmScRa2552yKhLwVsPj6h9KnQcyZTZDSDyagjsP93chs7Y5CJcBk818qqboemSSinQMfgrMxE8xZEkeA",
  "key19": "22q4bpL2fUQc9DV9BNhCmmuSnZY78WMf9BwYpttnthokJuSqk857sBQt9DatJZfKyNjDrTVvHE46hxi9UipWM3mv",
  "key20": "5iTemEzJfNVZF4VR9TYtk8AS5T7jRHxrHiRWpbf7zaHWwzuemzaFZQmciSaDgxHzgyFu7Gzt5bAY7RadmbWugMnD",
  "key21": "55hczp5iZiUDuHRk8S3QX4XWjA9tDRu4xomjxPznzb4BGoYQVK835yJG5R1ic9HBAXQPcjWxUkRiJRR1ESrTo311",
  "key22": "4oWDRDSXiLRzLo14K1ZsGWm3Hko8AEH76KwNs1PCaehK8yDpxPMpkYvqRcymjJwCxdCYLZ6CUUqrv2w2uVSfiMrY",
  "key23": "4bdWg8Fv9v9Aqx9smBRJnyMbqCUniTwmVBhY8f8PvRDKxncW1X91EtYuUwNgvfHaJFvvuz1NboqykkYfxMqRWPLN",
  "key24": "3YDP4pVq59z4Dxi1SEPF431rPPXtJT8jGrrvzkVbr7pf9vssVseKtBfnq6qeMFYuacxpzDd67KenJBWAjA3XKSV5",
  "key25": "3UoGmsyu6x7JSQgQhN5jMNWMLB3irCczj7grH89TopGGUKRoQZUWQ9Ub1wwPmsKZxG11DZ3zpEb6ZiFL7pAw7gw5",
  "key26": "KMTYFEugUyeKZ34BtbSA3o4FAhxQCuHMeJPb2av7Y88uNNymv5hSEdXMVDqTCZcEG9fKYE3ezA2eTY32nBJEf7J",
  "key27": "nPmNrBiFGHt8ZKx6ZnitDF4JtmV7ttR2CidmKg7KcMDugdcrSKPzdWXE34GQfs8Q4KJbeqz1M5XYysLv3N78rta",
  "key28": "5N7hNiYmuuzr27BSNGMuYAZRN5HMRqDZne4gi9VEbbZdDnbPQtMB2X35zo6tJwx5cSeUBJ1SYyKHr6zDUcapFEHQ",
  "key29": "DnrUPrMUgk76oH6rgfjs4SRzYKsHU7wcV9E5Y4yF73u3BiEzRgCLf7qeEdfZnkoxvFDSxpqRZbVHMAQ82h8muwA",
  "key30": "3FbYjwvs4CbsyCYuaqgGGVzfzVM1gpgjFRDLLHxwjWimsGjgaRYvEAC6tYTQbsmYAxbtv5cZkNtrdt1jFwtApmPq",
  "key31": "26B8sijyV2JsqJqY3TYUr8EBxnfA2qhqV3xgcEMVScWJkLmX8aDAhb6MAqRWagmMRQKF9RdMNkVjS1y12o5KcYD7",
  "key32": "4gWwutM5Ztsk3CrLPYNDbEehF6fsh11LeSbKoyBYxZypmYkpWXrtR44K6iF9hcmhTeaKEzpovPkrufoJAzfvyAXv",
  "key33": "4rvXNU1j6bS8zybMQHTSutnXUfztvGcrQRVx7BSSo9pPQcG1nRsC9EtfWLQLvi1so7sFSb4T2JMqmzsHueqxD7Dn",
  "key34": "5vm3LGUehMDPSHXF4si5kazYHQ1TbWZAoQxxQXgj43kXVSPpmTGXRRM8KVBrxzJDFjyvguEaDm5Y21dWcWcBTheA",
  "key35": "35KWmYLr2dP4MX5Hbdg55s1XDSNjUqZBJddPnu9kxZJA6jQnhxi5g2eJcdnyet9WbDZN1v5eoS1xFCkG5BfQDb6i",
  "key36": "4N6ZpPu6rjSM5hGqcCgezPcKxJANcsdKqbgkgfMAH6e77bwPcwmeUjCFh1vtAaXdURNdVJkYUazw9EsMJFQDkCDD",
  "key37": "4dNppG1jeZpVfdr3bxbGZ2sjwkwpNWoiuUrapAfGdCFCcopULhSfP3chsYYqU756UDactpATEQFD7HWVKTai8fc6",
  "key38": "5aLHVNUk24jHcbcJXS1GGgpGN9hnha6wNkrzyMbCrNa2cUypZrvWtLKtiYZzKujpLyj3FvjXs1r4NXyd53DEvScp",
  "key39": "2G2FWF11WkR8PwHcu8w7s18KZdUKTjbbZ65qHmFrprnqU7UYZQf4GJxkA8zcdL3bp5FhLEroEbz2z5bC6Lr9J6YJ",
  "key40": "2GSs9K4DpfibwSCLCaKRbejkCEAqCH6saPPJ8QfbKTNw89mAhipjMdZ4iBUKTR271HNvvmwfH1NhxrybyJVmxzrZ"
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
