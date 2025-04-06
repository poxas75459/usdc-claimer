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
    "5ZkfEX2yUaPaA2pVxiW7ixuYakSatrXwdpu6DB8tk9VCRFeLTSeQdHxtnTsSNybHxBh3BPJPwyzmzSvn7gxYfSP5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M9EEDto86WCR8WQisGikH7q834v62bnn96eTEQWCGHqUURNK4dYgzjkXYQiRL9pD2Ciits9CL8LigRUXEZQj6Kd",
  "key1": "3Tx5XfVNbS2juojK8kQWQuSQfZdZAqUfp2sehw3Gvr2kfUyiKQAYBsKvJDD9ADe9u7HG3YqZmUhZWcmXHshEfDeU",
  "key2": "423F5Jb9DMPQcyrTNyHfNLc3k3PvPTnyhPXpRgJspNS7x9xwbUmuhLGahbWpx7B3PpeT5jm9J1EGsTNyrFZ1SGjx",
  "key3": "5haasfp3oLFU3LcacAswgxyNFuNvAT4o3EH6Joq7NJLEU2oXsE8jzbHENmZFe8cnzNETmm4T7KHakEcVAnJrih84",
  "key4": "pyvuGyY5YvznLMRwiZAnDppjF8tLiWR1yhUT7PAh4TdKiBW3wqKn4k3BgpP8oss7AnJpweRfGgPRD3X8sGm7hdo",
  "key5": "3Ab8g6HVUtFfgMQhsoSEtCuDZUt4eHGdu8z282s7ufTQcikDy8mcW4r6kjahcaqWNV9asLHR1PTRPhsN5askcdj3",
  "key6": "3aBXVByGAZgGnEfpGmzkUq4xjxznyjSmmNpp8ffiTejb82JGdoD3JUiSqhiYyc6SVy6Mb6RKm4QpdtuKpAi7MHim",
  "key7": "hXnxbLXserGrkkKFTjrWgq8F32TNGe8aPV4QKGnbRXECrn4FQMZeuCZrZqg44HqAcVjBbtjveJQcXjnyGkgGP1f",
  "key8": "5m3txZwC1xKxcQToc11BTaszJ596YWnRxfoMyZ5mCrvjwm6ANu5TjrwqK1LAhxV7Awc8EP7UoaeuxhwCPJp9ifTJ",
  "key9": "4iPtmr1sNUeEpcEmpAA5qMregG7aVpzoUPD85Uf8U1wZZQbar67o4xEv4u9ZvwCgKLpoYy7n4tqTLudtXhEfGbrU",
  "key10": "5ySFT5ntjLSDS4jsqLBSVSw8ZgNJjXnRQBuzz1ftt2bRjer5KCwbFhatbzvyXsP3xLGeMmNNJ7tpvaDjkzN3mtg6",
  "key11": "8rtf3meH8SFgDRCBgaa8ipXCEukorQCWhpxqYcVBzvGvX9FFvCWEpupNKkYg82fNMs8obungDJipuEjYs5iEFe6",
  "key12": "22vRpMBjcBVXAXfVJcEjNatkCgkvtZGpFjWLf9nMx7n5VZngrhK4icEqVFaRzE4dohtqhR3EJtBVNfbrTmknpTU6",
  "key13": "3mfTtBZXPZbEPyDqKSb8q2SATdoyakXPjcAxNkgKhUNJirxyeuWazC8NAGLzBBLDAG4yb1B6fjyfmQVvsqJgX3Kd",
  "key14": "4ZquNqV7cmnBwgTMCFAYYKLJe6U7u2DGZ5wiUn3JcCC8KoZETSmUMRX9pXondyqemEDqk1wyzQ96auTi79vMfQ37",
  "key15": "4XyxLvTPwvWNp5c1d6zwggWRMGTwcVtdcorLpvu9sxdjezuuQ4NsWaF4e1rh4LC7tXmtpSmGGC5PvxtxAn7y4QTx",
  "key16": "Vs6n3syMnwhQwzQcibzbSynqHF6BR9L1Nr6QqGeFzQmLxsqH5fvh9czcKw8KCeCP9zZ6r4PNK4HFTNU3gnhbMxZ",
  "key17": "3EHYFMFDg1zBYC1dZkBM6LaR6sb3rXbKhZsHgrJh5jc4TbCCjfAMfN9CUMhrbHvYaK8NLnFzh2dB7F95c3tpu5RY",
  "key18": "5yXR419YLXXT7sN4ue64FGSBnV5JVR4PxRfqyeFc8K9nzRkVjAapndjYPrPBGu3mEU4Y9RAfhN4QYEmGXsvcMTVD",
  "key19": "33HkgZBrnDjke5YwaQABjEbehdYVF8uAU7J7hSr6aCaJY3uEFtsgAZpwvWiPuKVKNtGFte5frDvRF21PmgQ3vTK1",
  "key20": "24jf557zfPWxYqMCGg74bLVwKHvJ3mXpJY8Q348dqL3zKKeui5VW1cWdBGBphoMGf1SPmA3FMkGr57zCL8xjPUdt",
  "key21": "3hv2L4u3P8SnPN5ktNpBWK8jufQoU9nz468FGNKQH7ZYL8fbu34WX3T5Vy7DPtGQz8CLrS94d7V8wcHjKwoP1L9R",
  "key22": "2e6fEEzyuEcF3BjSqVajymyFMMBvB1CyZkJ1DFsr1QiduDpkMA5KmcxM6fBr54TTHUatjQtH5vVJRgiUQf6QUkie",
  "key23": "5u6ztGYKoSq8qN73Tf3zfFC6WK3EXUKogMsnsPDpqkGtkJpnkwv4eueq6M16Xhm9NjtA39AABaFch7g7hVcGx6LE",
  "key24": "2YP3sBecZF7toUVypxhjfJsbGJPTCB59D9WGcLGD2dZJWUpFHEW7i6KLRCyPaQP7xSiTLQL2fSSsLJqNz93oStT1",
  "key25": "46kQTkNw9JrTuENdsumxwqXsdGhWrA1tfU1JjGc3bJCPMHTfUkMTPhFf1Ezw7hL4PhyZRJA3GUggwSRGv6g3Umzc",
  "key26": "3e8t8uSE7d6V6LY8qzEMXMTzBLi3qPGyLWPxupBDcv2XbthCpg678QCgmzwqWQ4j8YbNRZhq7jwp1Y1qa8SR4PxL",
  "key27": "2ugJuPtB6wE7kvLq6ZuE6VceHHjdyNje6oGTaNbm48ydNQ4bvMutYR3oyknjjvKG4QNTK7yKhP7XDFsfJazubA32",
  "key28": "5mufJTAQYoXS5j9iXfHpN8QfPAPqLFofMtSWvdjSPaEMF73QjmmXZCUi5BC7CoffrL55Hvz7wg5S3GT3qSo544YB",
  "key29": "UAHck746ELTB7Zk7HdhmueLeUZAF2piR9d2YBRfbKL7SRw6RcNorxiaAWgM3uCEPL7MNQDT8euUAD8iZr9QA42M",
  "key30": "295V6PtZquJH6eS9AAd8eBA1QHNfLV2MinkUT7fm8WpejPHx5woMDp9SpY2s2CGSvuE4xEEZe4iTEJvTR5x9M4eJ",
  "key31": "3DGdJH8nvviKeDFqs1D9imSTyYgfFq1tBudoVswhfif3JxDmS4vUY4NvSyo22DxPoYieRmQoZykGR6b6kgcC9geB",
  "key32": "5rNe3Jk3GRRExX48K7fw8HqM7MQ9hfRLR8M6x41H4VCGY6nUYWkLxd1r5YMUPnZUqtuAsDT33WWJby8x6UPQdzhJ",
  "key33": "27GU1LouxBr86fzXZZGXTxCZrbJrJAWKSxSsT8FfRJpMKuxy5vQ136mceZc8hagVzLCkbYYnAFThQfghLvQj3wxR",
  "key34": "271zXqko9bTQD2eZZLmKEB8e37ZmMzwVwJDCyVdMna14mfn22bfKg5nxjiJ8HmNPJ3MpftQRT7p4hGekyXgXEts6",
  "key35": "W4xWRP8phZt2zRvnKAfspAjaxAZLqLzybhdxek9R2jDucNwrpbvxj1MeVsK95JXy6M8gdpb3h6AXqR6U7khawqW",
  "key36": "3YfCQ3xQkCRk4TQxwEqk6P1DcetEhExCiinXQdpnNeK75VnsDPVP8xm7dfTHGmiysW86z6BevZFZyFDtwpCZ3Ep1"
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
