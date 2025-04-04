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
    "5qTJRH39Tzy9FBSbTF9Dx9EkmsV3yhrFZxyAZYUA7EWWe5eUG5oSwDUdPRTkerz4keTCrtryoH2n7j3XDB8ALttG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GuP9TKG1ED9KUrynDVCbC7PkichzvmSwySzVnwFhrVJJRiQrchgFdbMrbYV4jmqQfaMS1MCfKcFcXFjCvMjyUNg",
  "key1": "3Sk4E8bSV2Ue2T49pc6E8453U48i5EPdbjdVpNrF7ZdYEiWvJFKtD1LkjobAp7YDqt5mnrWzPqnmtNW6Zm6PTRgD",
  "key2": "3c4HvC99HUvT8mAc2YPVEDRS52qZD2KBQFZssECZjdafZoJp5sAvhsM45ZEAnE5AuAusdMgEZ6drhWyds5UCowbW",
  "key3": "2vvT7Ff96zXB2cThkDaPo77miTCxRvkKibCXHcwT2XVjKEdR18kKHujnmSS8oRqYHdM4YS4djnS7rqMYQ66ZF2G6",
  "key4": "cDPHqTgh9qKo6RxJsXu8zxWaM5ZK7DCnC2mDZAjzTDhLZLh4QHuUAH3GXhANma7e9hr7whjyDJfaw28z7eBokcu",
  "key5": "4gbMD9tPfQYtJtNkEKeezYHZW1ZAEJEZXyquykG5q2KKq5kdNRdAmQFr6AZqy1EBgTkwRtP2W867ymEdcKmZEqKz",
  "key6": "3CYaGpiUEFZ3WBLp1RAC85DFrGRkweEjqJsvXRt6yt1j2MX9N8ejmN7X7fvfn3exLHzULkcd21xvFKoB5UMSJdip",
  "key7": "3V3oV2j3zs4WvEv4kjdbHWpTKfBq563mgLWUhnboAjpj5zwXVs3kLBQcUQbG7swYVbVc56NjUncVgq1uGpztQdFp",
  "key8": "5veaN62rebq1K8K7VcXHPVg4CV5k3b4FPVg4jXhs1uUtNm6y44Jjs9ECiSnFaxLM6sfSNkCktfxfv83d2PzpWbc2",
  "key9": "47SSsEaXCiMoyYNPn5axj9SQf8nWd9vGk9PjHdfBY237UDb7FcvSW1yGEvj7dfu6dYGoWsEC5jaQcFYBCbEufUJD",
  "key10": "3ewyamRVJJbNJ568r2HoD2JCjV3Wvj6UFB9GjBCyZqxjBLndMdk9pSEx9Aody7UJSzMcZdq2vCm9vQyHGpZj8Bqe",
  "key11": "oKXLYvCvRDd3R5kFqy8vSzaRbWdF98XYH7o9E2EdYBRKan1tY5DhFuDWmJaAfvqhf9pNBy9pCFXmya7KcUPJELv",
  "key12": "4dnxyocXBrAzktJEMLzP6RJuwvYoeMsVSYPbH6mjn1cpSbky8iSKkfWYwuAzsDctrj62t6uVjoWP6dyiM1sdPFUY",
  "key13": "3mgR7EXAp89VEfbzG2FPhdP8sjyHN8NNphxJKbx6VKPbY2iFTHhDnZ4eCiASVaZsexNh1RMb37ebWrxhkanywraZ",
  "key14": "638bgT26VNZnEsbt8cQHfcZD1pZG9BRveDDNBZgFPDiY9BEcaMZqWxad6goA2FcxiRVCmZNLPopNz3dmGyPAmcYe",
  "key15": "zPDRbxR5urbv5N7FjgXnWbp66c1SUtspQ1AxWzfAYikMMZKi5vM7PtzADXjFhr1itg1BA3cExTt3TZHbWnwxwFQ",
  "key16": "PjkYEdcAkRurhjYk5MunXTKjPBF2Zsb8iTkQ9xN3gmLV6Ccx5AtcmtUTF3V37JoKKu4gH2UALuccE2PcFfZqzhm",
  "key17": "2oBE6YTiG2CNbo38FvyLrkbAmz8xzFU8F1YYND8Y78E7wJoX4uNZ73VYr8TkdpgzfKy42eAMgu2JNDHF8YzAqS3H",
  "key18": "292ULA54Yxdjwy2X8oFJA4HP1zT45bppcoxj4bHR1zJCtpKkvBNjVKRPcmZcECD7ZGtCybRFzxv3ycCAdpmxCE9w",
  "key19": "ZVkFpvgs5VyVvx1tF5T8jE3rqu5DdUA3mGpmVbtLFQC13q6wgm9JeFc5Md1VqypiZPiHkV3BnFh5Z146KW92ZSJ",
  "key20": "3z5V3zcHGkgQooXaEUrX6Q3DAGAsEmrg69o1FCtisj4e6U8RM7YXywYAsNpQn9aWdYKoTe1dAXmut2vdz9apUBHx",
  "key21": "34r7s3uC9NBVGYAKWxmJR88AhwHtyEQnU49EnNpayXYMdwfXn3cCfMSwkUDGjusRx8uoWPfr4a7zMRRmf6wpj2o4",
  "key22": "cLY1V2MA3fdoTzZpXnGMrSs2KgQFBZ7WnWoeRS9j9o1rGNYU8ons8yzsxRUmyp6foNfWeRsACfbVzQe5XPr8i9Z",
  "key23": "3Tg295xoTywTCo4Zncy3tDfV4VqeLYpGbAiu3R98Nxgjxf5NSKztpDXbygJXmay5LjX1z2ryRpU96kZBRunb6NUh",
  "key24": "3ENsmC9UCucL7HNdY7Bz8VeTk6H332Afrx6tGNzL4Ptjiy4pjbrKjMD6U5sgrD82eaFVk4vmrwaeCvNBscYiJgvE",
  "key25": "3Ba8ZoeztaNfFmzbkwvGehF5cPFZA8V2Xfg44LSHRc1zrvcHMb4uZtcXwMQtFBiJi5LXxH7Ffs2crmDQsbLHBZan",
  "key26": "5spT5NQjZC3Pmd4HvK1bNwEpoQWk8YrU2LEuQnoD3b8Bi57qhkXP9qnBA8E9hasHeknYMvorGgWr3AhcHJ9frYog",
  "key27": "h1c4fK3x9rbh44EMXsDqFw8FQwCE1FBnNEMdL8VrBvuep6thbmbiCiZUSRgYuuNvKjCpKiSNQjQh6oTKSLL3xZ1",
  "key28": "5NxQm1VaKBGSLcBwdyAMnXMH4D8YjAMZfvhYHeCaC6HXANj3oPxpvx9sQ4FNATujHXgcv8bobKXuQkMTHFBKvSYg",
  "key29": "4uNqKENKdGZs6koaUDojKhggRpXAdmWphXDutF7Uz1vFqFzpRPHieN6iYZX7qy7PYLTKcVBBeCvAr3FGxigAn5LU",
  "key30": "TW74YAF9M9YLvaxGh1z998EP7NMDARpvkJQYZS6wYTsVL7vj6W3o4MvdujeAPJ4cnjfMQNdYZgj4gaRRHaQvV6o",
  "key31": "2RVRkJKH8ef41bPFL7giuW6oQKvSBLwuKQ2KxuVmAtbNo3PMqPq6qnma2PyhEM71aSG6zuMTYa7oyAdErKD1vwQv",
  "key32": "4uiXeVXQMwNecyefFBGm2h6aLHdp7EKE1dnfXqMgHbguXY1Csii4iHYzzTbm2vH1ETDwQE9tPhP6ABSU3pkoiKUS",
  "key33": "DXrFD8Y6JyBjXhpvC1AMNbyVzLu38Zckpp3ZW26JWFnVFvh9w9Z5fg3LzvqYgG4q8wTo4we2uUdnamkaNRxD7xf",
  "key34": "4GoQ5upAjJ5rBchJnystoBswN6tdpmotf2h1MHZ4smLr7ZPhELgMrd9Mtii1wwRsaXMq3Vt78CHUrbiz2HJv4FZt",
  "key35": "2ySyUNZRXZ42Ua1wiVb8Znqjanz7EeZsf8NqgCu6F7rGRXDCwvv5uUoR3ezX9VU4QXFEi44yxEdra6ngd3NiGVqv"
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
