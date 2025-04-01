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
    "542Xny1hoNG7M2seEAAGmNaEaaEfZvsW8cTH2p1acdfk2E1BDkpRTCioUy87DhTiH598Wmcx6k3A6NKaP7zHrpvg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tQZzTfHht3nwUzkDnPoBp53eCefVsNcWT3do2EXuUawL6xGN9UG6t4CUokdASbQT8jARCrne8UV4uK3rUxLvFsd",
  "key1": "22Q1A473XGVDUBzximsYc8DjNSuyP278hvgFH3gFF3DMsn3r53NvH41oY3YHgcWKWMfp8XA3JUGyPuYHagHwfZKt",
  "key2": "4jcRFFhnFRZEc8YYUUH7dcwdd7aLxjrakPMADM6syZrBTtskD8ykey1CQAv9jfE1zFA7Tp6o2rfx139TYxfhEeFA",
  "key3": "39gDdiRws9UHwoSax4diN4kesVLTpNXAo3N8zdqpMcMy27GgLAm6m6bkDWzUi1UENYQrwber5Q4f6tjaLAoiBmpc",
  "key4": "4kDHhyzxRM3UJYf1eC4ZQLvi7bGYbG7jBw5RdxLmbBtPw3hF5b4svuaAbDxPQekG4Kod7djrKiBWvwbc5uGWk44d",
  "key5": "52Yxc3cCY7jEe4RZmveK3gUAwmf7vBXbQEWp7C1ph4LPes1HuDARxEZgaDfQjDTwFiX8poYVJRNkMQwKiKKGg4pp",
  "key6": "2nFeLGmCvZvH9BrtRs4vwYgkq48M1JB1WpAJXVUkhxyqZiWq4KC6Tww89j2C2eb3YjGTUsgPiJBCVXzFXmi8bZrM",
  "key7": "5axsty8o99EhfaU7eTdxVBFLQaGLu3udu9z5fKBVUvKffWJ5TULzLStYBdZfyQ9hwg3yN7xgRKr6hCQ4enuQVSAq",
  "key8": "4BBKC3terc2hC6imjphGDKowNuaFS3RvEA2HbsjEh22dcafaecSmGHFvsdp6t5mCSiGf47xVfvR8vionZ9JWraMk",
  "key9": "2zwx9JsVdgtDG7rp4Yf7ZsNpkhJHgEY1vKhzG56zd1Eu8sCBz9fTTdjEbQnBwL2j1G2ZiAjF7kY25QvxiUcDNg1",
  "key10": "22RbPfd7pEXTcea5YndF4iqYH3h8Di2JM18LssCkFTL8HBBe5ZEjWedRdGFEQVcaMekkgc3gH2ADfCfwvge5eji1",
  "key11": "5Tprx3M14QnrdcAQ5A5kDDpqQtWGfLm5gLjGffHR3eXgg9eyK9ARY3DPMaZ7yQAxj1vCTsh8GNCG3moEJh88eev3",
  "key12": "4nFdqyyiTatijQbRJ84NquUYQ5fzpD5pTmirxqXX5qwxSaJH1MTEZndLoqGnXjCmm8AoD8kB8MESeZUkPEzDjmgz",
  "key13": "JomSy3mdE3WYGPTTJbQVwtqaLifbJLWaBxYiSCNL2EjUJfmPzgffvndNPSBasSDGFaU85yK48aCy1XKPyqGxuCo",
  "key14": "4LnhRoTvmywD3Dmq8sghbLs1bQ47DTqoUN9eQ3NncnLRDXAy4Fc1VmBryodRZo4AgZSGr1LpDniDR6kksiaQEg8X",
  "key15": "2W7GgLPkvBKP1ooKXWin4qW61GW1wiUoLyJx5FJXREZYjPhYEA4rZZtWuNX3ZmPnXAsMg3FhVpjB7ecJQtrQJ1Mq",
  "key16": "5Ysa2pbTYDDk1PgDXsSG2uy4Tr7BDvQDfn5uJEYXJ2g7aQ9Yrj1uAYPBVF1WtWTjoMqa3rM3K8pWzCm8pmBa4suy",
  "key17": "4t6PUY5EDympVyhVv2V3BN9t91D4GA9zodEV6o4uGN6k8KMqdfeos7NdpNgtAxKXfxMQNH4EwZGtSZDfwmm9VzR9",
  "key18": "BHMhLrWLBQfkLeTajkRa6CM8jnMBDkgM4tb77tPVhVsJs4xP3pDzHtPXiPpeqeahGgaebxJ7s3Z233cv9H53Wf8",
  "key19": "63kjrjmAtNTKT3jAoUBrgteLCoHoB4UQ4E9CDwxTHifJ6bpxRLMA9Bj5U5VS35D9iyUGN6vt19Fris9vdbNkoiGz",
  "key20": "4KuB68V6rcLzcbQXAzhmATjTH5GqsfeXEq1UhSXozAc1FeoM1kokeUzoZ6R8L9GGT6kiqFTutbj4P3jq3P8exgGp",
  "key21": "2y7X7RTRkU2mBzHKdx6a2CVgdT6KMq8wJWtFgDRnb9WcigTDviuCQwzmbXLdbLTJUi9vMhBvaaVTGLZVcavmA2Z9",
  "key22": "37PhwzJ4SwzJaVoaj6JRtiz9Uq11FAUCWeZT7f6roQCauTD2kT5YMtwnJ2twW4ppgmthzUtAh4eyPi6gsQCjEAev",
  "key23": "3Z6NFU3i1kPb7G89YYNCLqg8Jn6Nck2zRHUD3jjmY8DiiAyFDaM35w1Tmvkw9qSGSiXwdtaUds2a8pnUdjEGV1BF",
  "key24": "spvUrk8Y4cTkcQeBUMHbw5uX2DkbghkH8amqEphkWdhPGgY2DT8Drscmork8158d6a3jaWdggtMMWV2BiDBfaSf",
  "key25": "2hncDCuBkzBygaXDA1aYosEujzYy6pirZ556rj7SAZ85PJhr6TEJdetngxgqDMuwPfH4TpvaDPVhmQHugAdzSrkJ",
  "key26": "5oAG2Dg22h6Z7CJ382rrs99VAnw6pzr6crntf29jRrvJXYXmLdo36ADoz3DZq4gRHSg65m2qEV6eHHBGbNcAf9B3",
  "key27": "bpQkRQRyR22ohyfNRawwGCVv2nh6qYJBUBfjywM3zvQ5enQaNfeHufLa47VEX96YTPWPUziKfZBBFovwR7mhHt2",
  "key28": "5HjNmbZBNohb6unuCsLhJ2JurbpHboSxsw4TJmqjLR31JQMMsv3SPN1pJffwhNJ1Eyj3reMsx9NP6pU8xpTiRqcx",
  "key29": "21HXgj56Kv3V2ya2dZ7hiEqHbFnBdQd74C1bNLA59Y9f32nG9q46JU9vRQPkVkkvHd9fByDr9d5nSpjFXLxXJ3bV",
  "key30": "unfrS3GpUcnEbbkQbcMjsPTAQ2EnEfbn1HU2g1tAKpga79gCBabZY737RuZYQ4bFcsNr9mSWtLsFt3uXiTpHosR",
  "key31": "23ZGotjSev7xihn7b6T7RmBJ6JQDLUtkNZReZsL3m1AvTeEzZDivoDxW2nHMka2X8K423TTRN8fFco8ZsK2PNc5q",
  "key32": "qBpEtUP5oGC3d3XNGZFnrSU5zikQNzWsW1Jvo49UfByVmcUSHSZMtASrckW1XVyzWqUbNLLLs2EVA6SPueSaPvC",
  "key33": "2xmsjuSVKgQjTqFPq1jM5dnM4JWLDqCNCqRC4ik2FHhz6xua5xs2ZchZsG9AxDWpSsxqdZFjip5kVaSv11ViuwX8",
  "key34": "3umVsZjoZn3PhYYDrSjw2mDQuZTXR2FyBv9DeTPiJBU52PsjneTgRPTP8yQocmNa63Ked6g8g8zPzZuz2e1rftTS",
  "key35": "5ydtvABVrJAb4zCTznmmC13Zv5gzJ5kHvdxY83KvGxKLKfL5aVNS7zYHjJb6RGKAoLgMEAjYZvBJ7JXXjJT2fDSx",
  "key36": "QTpKfCMAvEmRg7Hvh2FoBDX28k25ZsSKeYNvojW9K22A8jfEAxmqXxRK7eQbxGSsMWAsVrarPMKsDmLQTTsiy1g",
  "key37": "2BdZLvbGrbDa8vMEmehm9zQA4XQQJYenbXHnjJge3AwZ2dMpzWF3CWrc4Rn8xVUkRAKqSZeL2BUCf2BhE7V6pUfv",
  "key38": "4MRjUMJ67tq143kiL7xLUJLseXT96sJBJpmCjdKKoSuDBionrESkoSxovuNgFnRYRKU68TNqaMp6TkPRgQaPmbn1",
  "key39": "5q7Ca1Eizk4mzSCpK95E21MaCHnAEYikiCTp1pGA5YEFEYE4vUtpxcbumZtAWMzuPEqkSfMFL2e1yhX93GpwEfAE",
  "key40": "YakCRjs6U5nDcWyPuxmhzGrq37HHKtKp4RP1annovvBL9LBh4K5cFsGzRf9ZPy4Ex34ubJY3EbrdnA6VRcie2ys",
  "key41": "5M8HdinkgZQtzncFaV3v8Mt1YEVYSycn2wBLbczXBsGNsNqEmNEyVZ8PNvKsajmwhU4k4hJkPNpCyq87EJfyc7LG",
  "key42": "5eXuvCdmtYxmztKEB3r9eWSeGCcDnNyGx35Pv8nRywMjBALQWfnTBdNbXz9iJUknnayKrKnf9U6hiVwtXqft7aHm",
  "key43": "PKBQpQpWJhjP4nUYMAo4QT4n8SezgdPMzT1nb7XfYMwA9ydrcPUGqdPNcfKeahKSmnZD7SYRccUpjBV5fGWcu9L",
  "key44": "bZMYfRvxLpnLNGKaJmANqfpnRubDTE5f4oXxj1wxR1ewaMuBJseLHUeLWrBxtRzz59u7eqJeKbxntZMG935ei3g",
  "key45": "5rWmsnuKbypNpKV14dUcDSStGK3LFqwXKYsGQ1BFPLmTxeM2m9L155Ut7ftb49fRRNac32GTXnSCf6yAByuL3Qpu",
  "key46": "4wnPkenk1xP8LNUugPifFzyFdAmD4LuhTVAbX13s9eWiVUTe466DAuRh7fJnxWkgkZXr6yYkVMBNSZ7XQRRXxY3b",
  "key47": "m4SoXgBXi76yTfWqJL6SguSMLSW8LMjHEgGu8sqxHYFqR5GjLxGCpGJY9RKsgBbkjznApzzxWJEjK7Bka4ihv1q",
  "key48": "42DzGky1ZnZhideVbAKq36369GXvrA43xps3sTk86DaFbCERz8c7jWMq1ugyudw2ccx8FnP3EXytdHV4BEMMfWW2"
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
