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
    "qdcJfz3X3iPg2NEkaiKx6hsv2Ztm7CHPFVaHYya3C81CSXNxj2BJyuac8rafdJtUjAymdnBN3TLN9rmNiEBwBv8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24KR8Y4swo2GTwwc5UyQQQwNZhjgzCz5LmZ4FCKqimzvzUVycUFRvfqokT5RPRvafbf426NWEG2Y9JomjxAmd5UV",
  "key1": "YpM44qNKQrc1caKJ3yitWCJ1ArKmZmCxuapQDrcspRbmSaD7KQxBakgPV2oeKxkaYvc1UBuQiB6sGruQ3WHb2f6",
  "key2": "3dyevH6ewnx9Cms8MWRsq89UPXDktyjEzJ5jLaS2rbQyDb3zsWzGSNhxGz4WdtV2vUqw3t9fSk1WLYSsZkmqyk6K",
  "key3": "5MwcuTDg4Fuen3BSJ8SJ8EJG4HCg45iQbhFYnJCkj6qAD5KKrPrNVHDE4JU8NoUf5xprY1c9zozo6MMt97uordbD",
  "key4": "2nESAt1q8YouxVpRD17m7JBYQeJVLkGJnZingN8fFciW8TTSVyXoC3Ksb3XPUwkXeuutLbx2okFmUJwMGvG3943Z",
  "key5": "bPtK8y3ibhML2J7Kggw57XiQhgkttHvc4hfc9nA8ESkXeTh5Tf69H711xV9KP8VpTFDhdQBDgvDKuUznbrfXFZr",
  "key6": "3oWKxa921dmMpZUNanWaPZ1P21RR8YGyYkauJeiCSGn5GycJUcNBDYigvC9d24spEf578wkMjfn8JiNss32bvfT",
  "key7": "5BQmuXFn4hLZad3p3Cbo4PFaf14xVG7VRsiz6oge5rnRN5fQGdnLkztwH5uPHHjEwnk3kpaASag9XHZ22NPEKpUP",
  "key8": "5GWCxkzQKmhhNohRMRQGTGLa5tjy3js76FnLct7mrPayHzvQwVwymJmLCynY895Y4JbHbGiouPJMxsy9LpBKiWri",
  "key9": "5UwjZ7d3CNLERpKxbXYuQgaL4w1rXcB2AQy1UvfExecSSPv6aPwHcpcAxycGEe3PCVy9JKHNTxormUBkcBoCHnf6",
  "key10": "gWZRajVoWdKZ1SGPFD8xCKBKT9Ud9JcBQN76TKJEVsJ4dRXs5TqvmjtB6afpzv6pB7LEmwucTJz7FGHdC6w7ovP",
  "key11": "3Ry2bYv9F17uGCGvLgNoKGnNrRozGWWwK4GB3bZogcipBQLKe1qhdt4ZZqFdhCnniH1HbssmsfENCXrPF5vydM4r",
  "key12": "T6X7DAZ8PPfJqzFGPWUvNrhGVVhfAa2DxGj7K9HLaiYSfVsxGH3RaXXftZuKgaWrUi6pHcacUCrm7Umvmy8auSS",
  "key13": "3eeiY5q9LpzekFziLCLSxUA1cyqUoULVXTzWu4teJjrrZPif6U2oPzgJmCTxVSnQN4f2XHTvpLoyeU4dRvj2k3zd",
  "key14": "5uxi3k9aJXAGexwngEvtmL18HDyDA2wbYVXUMhiZSebZ4iDrTcRAXzVAQqfX5VzA5j2HdQroSh1AGLAQSGyuGYi9",
  "key15": "3dTPvcQFKff1N12GNvCYg4QAFuJagPhXcqHKBe7RRYgZzKYmgvbUwW71gwANis9jsE9zjk1CpGCHsxTvJPkj2zSy",
  "key16": "5BjaLB7JfB6uebyRpgH33R6dYtjcCmegHKs3d4475fkQoPfG8R64m3kQ4P6AMJ9FjFcnbrmo7k5VganZCesjiCBZ",
  "key17": "myQUCKqKrcF2whDpW5GMebBcZDQY4Xs4VpB87gfNJRN8KBCrnuskhhjnMUCBxhWmuY5UqkkoZEMSE8xXtzmzfo4",
  "key18": "4zkETY2A5xuzZJFCi3GsaSiUYJhAjLwRtmQCJ9yJnST6MEFGAzUjYDGqqtNh9MmzTf3HYmXU2C5w1D7Qfmf9G3rK",
  "key19": "5fZsZJHkgCrZfmrdAqjdamfaXt7ha1ausTgAZvaT6hcpj9TaJ27xjwmSbqiFpeXMaQ535S5QmVPw1EFK9S6XumX3",
  "key20": "2JrmWw1GbKnVrJMG3goLqvdJBKGc1nopbPQY7BvXVzHti6Zn6FYm1CtoaibAMbLQzZmxPuP8QyNKR9Q6Bbnu2bGZ",
  "key21": "52kgrzkZLzr2siEfyZsydcbdnhAq1aDRKWbiQK7wxAinShuQ5v9aSA1UTKpmdM7tpHWFQrq6YBtFGGf9A77xXX1i",
  "key22": "4SD61s4gbxtUUe41jVZ8DkvSDF7BXwrqqMBhDhR2PxmPtd7EFouhszDQMAr1ZUH8MxE5QGmeFViHtTgE3DMUd211",
  "key23": "3XdGWeX76TUxAW4weURFL7JE7nH2msLymjdbXpktqMNxhwJdxnZhCs2K2bHsLFTF1PH1bnahDnGYua2wMANQg18z",
  "key24": "3AZhTgB44zrgZMFarn3p5HTskoGyCZtrpWTDTQrvGJN47YshGmrbiQJftiXXSV9tA66QA1S2P4TxGoYdkqiYR5Pd",
  "key25": "3kBGw2S5skNCiMJDm2tT8GrvwTHRsXuG6v37Z3GTAQzQP8vmuJTg2tvPRCrZoQaA2DWL4e1JJ9oCrik7WQVk3GY2",
  "key26": "2gjUPyPPSdq65aQuymo8ivsh5M3Ydq3gt5UjMe39mzoij2omdNRrq6afDm4aamckGijD7ec9fnGy9m9Usvv1cTHU",
  "key27": "g7VuwGLKgqWW6urDhtPXvFCo3euWHyPMxBjmijFJtToynS1DtGH1ish9Gfrfpiw2CAofMiSsVvhAJsreRqrnvsN"
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
