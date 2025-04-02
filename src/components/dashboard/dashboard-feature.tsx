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
    "3juSvRcPqz19223cRu7vhNYinz2d4RJgcgGccbVEoTRNdyYq9AxxenpU1e6JdhDqHYstVF8uEK9sjq7hTmBUodjt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KhZtUfcHbpjcTYA3y65vsxRtXnwk1tRCoFCadkTLoMf49PyMavQ6zqbDNrpv9owpv2MA5JNGbfEHgjLTAzDwbPv",
  "key1": "5dMVz8DCggUmK9xmyBNCN7sh8bFsnEpSP2vUKf7PpWcGP1gCLUEtRcgF4EbCf3uWyXzoNiB9dVJUJ6FLqKy6ymK6",
  "key2": "3zuTRJr4KNZqj2tccmg4Z63PLqWCJpEqkneczrpbpmR5uzzGUVw2iHk4wm1bQaoqog7AX9ggd4SD4D3kxVa5Jxt",
  "key3": "2R9smdsVKfNWm1v9b4W8oA7E2QEhUfs3CtuDuAZkphtzej5ZeMjB3kHKXqkAUyPYf3ekeRnhSdHXTtZvtfAkGHeT",
  "key4": "3JQvZJGGLaUrPXaCzGEdEtWvUeyy6ZpugrgPRhoYRLJ96otrLj8QFyGHQYexfa2Y6YKLr5Te3wwkXjwDy24vABqF",
  "key5": "wdQeZGDS8b7EGidLntVT2HZDCJoS6UYyBi8xm7kPJsHTdjoG5T8TkP4hU6AAQ76Lk9U57kvkTN9GiH1CM131Rgs",
  "key6": "31ZTVKdesz8CwaecQ4Nf4yp6s8XxaJzWRdXxXkF7Mt2FuZKYZ8HomUU2eCFkU2oNqFvKN7TWTKgiBee5aJDH8JmJ",
  "key7": "3oTrNp8VEn9T5yyng5D9fPxVSu3uaPBNX6sVEDnJT1De5shkb2t7wPXcAixsviazoSj6W2hp9G3F9g2stph5RsrB",
  "key8": "45XDgQbJuUgD7HzFgxjDix8n4oakHVzsEZfmS2BNy1yPiSqbSgnrqYu5YocZFX6XLrWCq5Hqfkk8mytVkVsPuZnk",
  "key9": "5sWH9oEVJwCMXsRYC3MSg3tbaxPSz7kUygZoumPCsUzz9NaV7BmJAdrss95dhs2PHaUDtvGDZEGSoDXFvf4tfag9",
  "key10": "2ZhYK5gZPT2HHspGVDXZ6r3nvHQQ7nadh44A66kxyiX3EMeebhsx4cJZxZeUTmR4aMK79Da7CvwB5JFDPS55w7nP",
  "key11": "2hcm7SXvhcjzgKLhHD9vG7eE9NoFWg7U1KZyniXeT4y2cETGw8gWS17NXXkkgt2JAYbRHvfSt1MDdwGiaE84KSGV",
  "key12": "Ck5LfhyMXpvYwh9T4DRymdi46hS1bfBV3wGtdbvawdWGntBSFFR5gwFXaARWvmgXUHyEwpUHGPCrdx5zVJcTCWT",
  "key13": "3BWAe6CePqRZwcgcqL8fhrFaU7d2t9wQw4o7m2CpQ3v4Vbb37f72BuTFx8TJ9x2z3CA1y2n2SdTtbbXW98A2c7NV",
  "key14": "3tb4Yp2Z9LLEUh95T4QEe6FqiMdfP9iFVvNH2R3sY5fNJk5QQHnoRmnTwXxcDsNRLHiWDrcHUkag7MMMEy2baAMy",
  "key15": "3ZNvthBo6ayeNe5hbFnjthviKmFFhfzczzf9GtXhLuMG4BwhFp71tR6tkoEuWHNgdzrggQknpujrTAHcSwZQLJCL",
  "key16": "4UzAQK8qUN4ZHYbSH4UGR6BxS29K8dE82ArWv6E7LjrSV7QZZDx3GBsQ73CpYTS7ToARfkfehc4Qq4rwQS2cL5ZB",
  "key17": "2h6qgMRWjspDt5485zJKDPrCYX9tdkcGmUzM4ZPijtWxSUfLtvkU1neyT9o8K4KhVnxB9aJyFdRw4y1G9eXPHPw2",
  "key18": "uaUFfyMngYMPY93CuRF2icWgwikrRscm1ho27tRkrN6CpiWWTtDzzbrsZsuURgnuB4HBrJz3Qe4h2yvzvEhDBpx",
  "key19": "4JzBsPLYa2bM7BcupMmpCWkbxkaMqkyjkFPZnmdM6dN2VcgcEHa6CyAD9BnVvK1XjfcdJgswjTzzuxscdocwXw7R",
  "key20": "46aduQEv4r4LEJpiGK4fvdBELcnueEi2cfMJRkaptGzw9We1HzQZtAkuTVFE6pYZRN4VnoDp3CEP7YoDXXd16pSb",
  "key21": "2R1xbGCjrtF1xNVbzJfvoPCBtX4jLqEgJX7wCweXEzhQgw1GhA1pVojqV6TwENh8Az8d15nNyr1yvHuLzV9bVQKW",
  "key22": "7ugmKWEVEzgAe24wkQL4Z34UmJ6zBYZSwWg4YUSWACmYNQ6uPfFf1AWFGicDtykLkWhf288gojNRBFs4VPipKmC",
  "key23": "2pVyzLkedterf2abgLBQY8gTCtpwqBarpK2viWnASFNvDKZtNszCBzcRX2yDN9fVB7bVRUfMzqqB6W4QGfCm7BMe",
  "key24": "5LeYjPfVJhV97wEU9Azt3BLPpzJDopMQnUjQcCJcGgRddZJEgPZnDYFmGQHUxksMYdRZSC6V6z4tkV3DyoKbiEgr",
  "key25": "oxvaZVP8ssLq3kUygcaTqmhMNp1oJaU54T7EiwEUWqy1tgD26VUSLGrhpSE4oGAGT4LfYJsGeNSqkTBMeMdqY7n",
  "key26": "3EQkcAGFhXFPfjP6m427B8CzkRPYUQV5Pii2pMRadurmwsqjLZNMzf4RrjcGZaRYYAFCsRs64mYTreT5Rq6cQRjk",
  "key27": "3H2kLETjFgqZM1jQEBeMT25J2WwbwaSaVUKvu9V7cppekvFKqzECvqax3Qk78Y5Xx5rXkaP2bCzoxDAUGszmbUpR",
  "key28": "27SSCNkkSDHqeQKUzCG3VKRqzriRkRRR1mt83kbhypDWw7EifQ1CGMg5jtdcC9KVN4r6Tb7osJvtLLuANXT7aqYy",
  "key29": "3j8yjWQaybrfKAAzAJcURo9Hnd2ErC36wsxWGm6jsoQTSXF2E9YwvsNvVsBpjA11USP5HGqQupZprnY94W2ufSqT",
  "key30": "3byYezpg6h2CGdZ7VqRCUB1Zy3n2257isC6iExq1jmrjdWmYFfkApfrrvDmm51fhZGMWMrBB57d42dahrgpvnQKz",
  "key31": "5EJDfH59WQuAT5Hv1VN7S795qzkMByV78NPXXAVuniWifDWNhe7dpC9K1eFMtRnye6vKYZaabZgfG9NyguaqoVVU",
  "key32": "5dh9Ubk1e2oADNov5YwRfMHhsc4qVtEGUa52qNN5zXffV78VqSB26KJdNjimJyL8pHYsUY4Cio1nGWxCEjYw6MQL",
  "key33": "3HR9teErmY1qUJkvUtLWQGjBBFPyBaAFuH9qUn97CQtL1iHBd3mcZCamGFW9utHgscZ8cPoyjXwFsV6RJmNgrVMA",
  "key34": "5xGEeSH6EFoHwupuSVLtbt72gT6UMBfgWVnzKwrdS9Penu2H23FLksZUyAhGgkpwE4WmCfXNZGYJKhxxScQHsb38",
  "key35": "5DTCfDk6hJnhBVDUL9EvQ8ajz9KoTLaDrQek1WtGr6884yRyjMTw32EpAcPFPM9pv6BmTcWLFpdBLQCrGD6ERf41",
  "key36": "2SsgB55GDqoxwCZPvNF8hMJ7fwwDG4rQHctujopmKzCNCTAPM37fny9zMssi9feK3SQ2YK5UhtvYCqH3JeQddYBU",
  "key37": "5Y8WveSi4dNgJPgGmDq9kzZrsuyuqffda1CifdN8T5jxw6MZ3xSGitVBH1G6e23MWgpGXX4QJkevw1AZS9UKtsdP",
  "key38": "4xcC7LSXq6YSQthK1fhpSbGyD8SmKPZMKyhwWex7KkFPhtCw9eDecEzmCm2ThsyocnmD6b1oZBpWam2tZSaYBFtv",
  "key39": "4jZ9Zr2xnHktXEqFU4M75kFjxsYndfSL68hwgsfoZvUyScn2Zu5k72YVPj21b7heUxvE71S2gR35mCSCygH2YGtk",
  "key40": "5KumEw6BqwjaHEptCTqRtwDcRUHMFt9FE7TJnJapMMW4dqmnaUVV4u9x67yhu3utpiH7orFvPXbShAdxmxjdK38a"
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
