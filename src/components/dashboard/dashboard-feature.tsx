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
    "3MSatGQH7u3DGtbNNH4Erv7Yh82Xvdhje2PM54W9LzrEdYMUZjDccjsRMMQpUyEDvBWA3nVq7QkAjvRq9PPUFn52"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "496W6LLrBkQ7LSgKSGaaCMqKLCWJQnHPKjFCa6Et1bgTkhpEHx8oNvkM4jnvbrmobdGguVwkDTiwP7NDcS45mUTe",
  "key1": "2FUNK5bRqLAFwuJHiCgKf5dt1gDXfkbgibv5KrbMiEB4Prk6XKyPWXEFpYW9LPDyg434eT9b6XmB5DZS7bvpVd11",
  "key2": "5DnbXxtst9ffoZfPAzDqzePUyAjH3iC77GLY2nDYpvDR7Ju3qUXRw1Ur3NbMy84qhkMm4JXzE2DMDWGSofdDfCgH",
  "key3": "5sRxHMQppUAr3jMs5VKUybgn55bj1Pci3kspvuBjFjmC6zzbmy9Q1csGNUhcagNv4bmrP3UAZdyi1n62zcct7cBX",
  "key4": "8ZkW2wviVowRzo9nLmpUzNVEAThYK3Sf332Tzo4y9uCjr4CVKC2Yj5bJbGgrS1Z7Zn7DD8UGRgD6HzLDqK3pmsG",
  "key5": "56VVYc49EDKzU2ihNT4QhyVy9yqh6g83mvkCLZpZBVGvgaxijUMz9yyp1xiRnNwYkv8g5fY2szBvwiJzW6pnPUbe",
  "key6": "3kJWx5wSgMeCy3HCGLuZJUnzMksbd1twZ3Ue9dWm3CtFuZ4XrFBd6M8ooDFd9pPFYmEZmBDu6KUTn9mgQPByAu6T",
  "key7": "2EdiHkzSTJXLJz1HGcHnQuStLH4TUkEUFZZ6bXw1qDCp2EKkBpGdgtQxsAveKtKY2F7oNBCwgxrNdKjGc6PfEBwZ",
  "key8": "3so2UeVL2oJqF656m6ZcS6WvPdCjckNujxmExSkcbkng1Xbt3X5ouMibiJymjFKTn2ez911KGJUXgCtpQR6YZVrj",
  "key9": "5RQarutjUKsi5ovnQdEkSVGR5RQ7r19ngYDFEBbRLPTLAJZeFMminR3dxbaEEm3kaPLE5ftgmVusucVN1p3XsMmF",
  "key10": "9H9aBNBff7Q3X1CWp4JG71vtWTPe3hwzcupb2RT3s3mxchpN3JGswEQcZCa7jydbgjfBdRtemfuLh7H3wvKzFec",
  "key11": "4unCteE2F2arG1ZSmX34fAn3SWCHZHu5Cq1jw4XEqu45YHu5RmtYc5yS1MJogn5CC2BUXiAevjBKogNwu9LMzu3m",
  "key12": "2QwMj7eZzmwgsPYr24RrZNcfi1R4716gBr16eCCs9jHioBvzzRt2eunteJhamPfYqBEenhASNTCYb9mAvCSgT1wu",
  "key13": "6duJNuPTPq3SruX5Qf6DivVXdtUfnu7QRaCMfgBkjzCBgH9rioVekhhU4463HBkYbQ5NEyZQKBbXVbvfVfoHh8C",
  "key14": "4hLm7DvGyvztTKH2jwcX3XQasAaywHBLJyTVNiNpSbj41XZaPEi3cpXXDDhNuHDgED2oJWcpj96ZY3NKkURaWrdn",
  "key15": "4GUD41SpwP7fN6RtRkimJkncXV3RChmQ6hP3mqL9cyJ2ZCyAG1ehK3T5ZD13Ci8otP8pR3e4F2joYi4gDUUxxViv",
  "key16": "5kpywXAPZanUy9viVMRYroTAqujk2qU2sBcMS9QQFRTZNuz4D3yH3hMfGFvXYKNcRqqUghmr24KGGQ8Zh1JDxowg",
  "key17": "AyACHNvbQJQGDA9AWJqKDHS1PVjnD5LRr2cZ3H2jegS75ZbTjeSJpXGCtBeJXp5PLaXf6HcuP8u7o5ff3YKZL5Y",
  "key18": "3Td2yT8EdnHNczzaKRYKGV3Z2CL8QX5frTDbXfjYYReWvGMUXxtxp2s4HkkCvSxL596r5sGKLfnH1E4DXjukJ1Do",
  "key19": "4VJrHe7vzTntMtwbohVtxN9WQhbDr95A9JK77NDvtcAEbRia3A3ue8QPrTCqFLK29wUjYT6H7EGQvn95r1EFGmWJ",
  "key20": "5JL4mywoEqW4VjYtRrihueThPrCqN3Q7P1QL7NHBWMG8gUR5znh4HdC4Ywd4XxVoNyMX1rjwMbNhR3Ujceh4Zmwn",
  "key21": "3xRZaN9kWpbatRL6Eb56oU55JFE1CRWvKRE81yJ8RzkoZuEShfRLroAkgJU5hajKArfzgeTqpxEAoaVVGFAAws9V",
  "key22": "5jpZEzmaYc1VCe3yjJBF7x4gt5uPkwX7P1G3E485veH2TxVeNfBR8uhedSCRZjafaFdhK7u1EViH39RNfyPXj7kd",
  "key23": "5tvp52XPQBxTVA2Bc2bxyjpaR4AJWw8dxXq1AH2xqoBAArkGrMLguTPS3dynMCwiAd3DFVdQoEwfk3UVYdvuhBwi",
  "key24": "2inSsoPrzws7X9Rt5eufCHfSXeK7eHLVuLzrKCPUSEBC6EAk5qfxte4udJ9brtfQvjDmJ5h3dhJ95ThxjJHGY1RF",
  "key25": "643Vc7LFozfpcx9XQKw2nfDv6LXsThnoNwd7EiFtihrBnLfmtVEqWRuFa3zYKnvarBgHAKPCXui1AxYy2DtHJBnN",
  "key26": "3YZsJtjk3kYbX7KWEVLZ5ZMMzJ8EXXLcemLupenSB6LfVbQBGvkfaSey2sj71DHQLR7EBsz4PT3178dZspQpLpbY",
  "key27": "2ZqYnE9miXBad5hcHEtSSam7xbLX53PPqMuDcP1YzvAzdgrBJVL5aC4pVPQuX84QNLG6h6Cdfzmbryn9e3VQ4PTr",
  "key28": "23o9mj8udtNRUFiG95m8Y9ifncKiFFejV9bXdMQ7ALSAAeGSBe8o8fx14JAdkS13zwxrPzfWz5gUosMRJX89ao2n",
  "key29": "5j7iWjQd6hsZ6qHt2y91YsB8jzJXDaYVk9UTkkg4oHW8k7ejsCRagcrsZFomAEXmxqJhnYaACabvJznmSkVC9NEx",
  "key30": "2CSqxCpCJJ47bX45TGWZjWNkU7r3vtipNVfmXqDT9LYVtkwJ96rVXSXgCvGpZxCj5BqrX18g7M59LBSMyySTHwpx",
  "key31": "5LiGHfZqcT4JnHvTCdGECWEB27U7ek2Vh3digXwTqUQNF8sBhtom2eVRu8Em9iQhAQL8nHBr3oYT2wJgs2crNwwr",
  "key32": "brAvSUnYkgXUaE3Qf4inTHgSya4XNJVGPAFkieCAjvwDUfQahVfpjCMfAcSMwNJQ4nUgdZVmDB2WmuuscZS674R",
  "key33": "2aFRKzePcr7iK7uQxNJQjSiTU7BFeCdXKRZ5AG89QmZydx77t4akx2kqNREyUvBFQehHJEGbdLUAUJt3nGPwAkNc",
  "key34": "5J5Hew4wotwtnmsfuseVvWdSwgZGfWuWxRYrGX5PKkHHMXtugamN15cvR7tyRSXEFvxLSun9QQfsJFmZAGiLPKH3",
  "key35": "2h2YTG1VJC38G8Z8Dnmzt57BighL8FjX165y1AKaVfcuSH67hTnmtqdAbqKMEW2D8P8ZffCm8ZDm51zZRvmAdeVG",
  "key36": "4ZtGWSfdbMauSmuSbGbhXHf6D2k8hKGn2xy5Ff7fAmFRYx38EmMDJVRMN5ThkpccapNVcwkkXrDjrFmtxNEftpHr",
  "key37": "4cq9JDY8h8HGEXRmGrwLC8yUrhvJRRGztqpMfbTrhrqTHWJWoTeW11LTKWqq3Vz3GkDRvdeW1EoA2cUD2T58u5h4",
  "key38": "44PrBpL3hjK6pLbmypGWvYgJXuU7E3rtRiDGTUu97eLVpThFuHfJFUBnoHswowQcCWPmQxmBMTmTnWjEgtsAm3Gx",
  "key39": "4gtiby2qE2qhBnHidpvFScsWc5MVP8Xj9vjkKqMwb7VfJZUS8bPTt6atUKT2EU7uSBYa5ChhEhEAjiRjGGaHRQqe",
  "key40": "k3mrjtWpaf3KLBJtiZvQJgpJqtJcc2K3higb2xsQ8x2NFyS4W9cjUK4BKxoqDmFUcRgLbGVyUcq9GFjAENyULiB",
  "key41": "4LyNNxjrWZv8mTYtLaAY3wJSykLGobniVHtgMA8CWMCcRKBmCs9kzuYvfVeB3XwGtCqUczVLbBa84kahJBkwiZjR",
  "key42": "47tAXQ6b9DUfQxYqpEU4kZkqd6vAD3QAQdXP9y97ZKC7DqZ99M1a24G53284oCPNoTDrYuCu6CywuXTMQwyPfumZ",
  "key43": "3RjqLx6jYbuua7XRiesH9D5QpbnxkvHQwfyQZhv5xbeGZusD1vyJLdHQBag17HeSGYzzr5HvEcxyffj2r7cUdDS",
  "key44": "5fRoRUK9QU8A9np3HozN1AUCGhwat3auTtvjY1ZdQpHDoDSFr3o3peHGvyGULDq9Uhp2H2rAVUeLbcKXJqqLDiag",
  "key45": "4QdjyTX9Ti9VJUgShX4XocVwy8n5CFWkdQMEuMZSpm2NZJ8sadcf7rwn74u2LsQajAj73hU7bVaz2RZ1ynLbzpr5",
  "key46": "2aeT1iAE3sgbui5XmM3TvA9dTfTo5m1jxWE95FrkM4RgRjtHsd4KxL7kR2zeYtssmRorLyJt3XqRg6Xxuhboyi54",
  "key47": "24nzdVzwcGyJzBrYh4iSwY4o8pJYEAtUpM42PezR3CjUyWKGLvT2mZL7Co7qFeM8hpdxXtfEzhhXagnMWimxbqoX",
  "key48": "2PYjjeMwXBVeVNNaxktQt1MHsp24SNzPpJeK54X26Cex266fBh6d9ebbC2LD6G2rFCnjWRWRkoRJi6cfpjTxseZp",
  "key49": "ngWX59PKWPQeAPnpiT1TfZKV3wUMfkNKP4YhBLzyKn2AgqnUhFtcPUXYwKqwcM2HjDtfgBBajPwv6tDFNPEJMNy"
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
