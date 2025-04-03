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
    "2pkLwpAW3pbCCHxL2QdqoigGyGHvaqz2KVe8akY4jRXjMsDu3KdQnmLLCGRa3gZdXZjD1joddbYaToAdrJ2H6y19"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58oPLow5oRG4Wfdav6ZDjL5ueKugHGyyLLLFZHQusCmwwEcEhSPm6BdvPcuaDvRpAx6GrTPPgxgnyEcHxxEmBmk5",
  "key1": "4ik4WCZoTW1oxLsbNArwZ2z4BHr92ZXS5H75jpm6XMzcPJi9sK8awvujsNcCCmkhvY5ZF4duw8E4VL9vhkNrbbaH",
  "key2": "4WxHUjXZbTxhbkrKj6dnN8gEACNQKgqzvwEVrXWyU2T9pDNcAWmSR9t1wVURm9meXeoFD6i25n24jiT2Q3wtAcfW",
  "key3": "4VCcpk4Uy2ReeTXoURCPJUfvQKs4ogt2vokJ87MXYrzjkRrQpEsETTzafgj8Fe6CA4fm8Gb1qm15CspDU7VNbpCL",
  "key4": "4iQsdg8WscsjbabZ7CyVezwDPkHv2bQcnCcgUWPukxd176XTHfrt6YEKkErGYTSd1xhPu5JMyAnTaDuyj3YAb2r",
  "key5": "1UFKnmzDtp4Ep7cJ7XBEux8nHQRefdMUMuxXY2TwGuRCxXNfUgECNT2JbEJhMzVhqifdVGU6c6kybjDfDB9BTiM",
  "key6": "4At7mR46W6567YLdrymK2n4NiXtUvTtt2YtqW413Piz3erj6XkkcGV7JtUqt831xCEC1jPMXghL75L3TiMevQwsJ",
  "key7": "3xhbqDokrx4DxHjZh65YWHiJrq2rEP5E6ZuBZQCWvNGdUi8DqKUS1Qjauci55bbxdcW4KbMs571HkG3uL96vVyBb",
  "key8": "iNJcyYZzuWmyodsm55ZSd4iJUuReVf6UU5pfm2cgRKKHcHpXeb7ss3XwTYJTQ2ndKVNQ5cQeGoZTr7H5AdkuVF7",
  "key9": "6piEMcbcnf6m5vEBRu8hAAbdYpgPuRvo48amJLkue9n56SPMqirGU2Mr7haWXYuCFxgABmR8eeDK1LGFtPbAxke",
  "key10": "4SBttPXFh5BfzWzyDKUGXUMnB8m4WfRqSNwR1xfBmiQgbxqC8d7d4MbhkbheJesRMtweUp1BS2ZHK9H17ty9ij3U",
  "key11": "44EKveP93TUUegUmXAQwQ6efHc3q9g3k3m3c1jPF4qhGfVaKYRVX9rnMFds2JQEoPqtLUU5gVUMcZdKC4R8BcB6i",
  "key12": "5kvaNNzHh2tusa9rPDzWKGAekzmwJdHWhEt1PRqvcJfAB2QK1SUGfEymuTeVeSbFbjuysJsLmbsR5JViYw7yisHc",
  "key13": "2dfXmK2HuxgNvA2L6DWpLMHmwXwN4vPQh9zd2mLg4RFQ9e8aRPDoyfnV41HoEYcV5eo8EBemHnivDR1uMLPpDYhF",
  "key14": "5XbpN3vBPbKaLvLX115smsjXAqNiotk2jr2G2ve4Bgf6zTPAn41tyWfwFQCXvWBGkfNQrQLikJeoq2bqQc6oxoXi",
  "key15": "5HZ9tpDTRoxq2XEnK5mc4YZQWwxk7WKd9HEaeQHQGJGuLd72ny5qYSnrqJ7LJJ8MrdNXkHxFbp14SArWnUAbBfvn",
  "key16": "2z1nVDpfac5pH7d68BDmmSUnAMf55LUm9LEU8ZneZ5MHqi6crHkWqgcQVv2YMBYnVEexs8LJ9y6nhdmrNZyCBguh",
  "key17": "2SmZKcaxRJm48PUm8d1tLtwFP6X8rxaY51KpRUg19SWtfE9CxziVqsBGadcXo8wNiKADepRwNj1d51GQ6saQdUnE",
  "key18": "4r6fubREERMzaRuMKthUDHW6XVZ2H1UKGLmMiVnmY2N7VFHJqs1mE4Qh6ctJvsjdeZ5xwnzKQ5FeVnqvHV8ZWQzs",
  "key19": "3Z9k621ZRHbxRVvmTiF6n75kXPbkGdChGy76s99CXYes42BjMo1o1B7Fn194PdWL5bZ2UfXy7HQVJMwHSQK2T17V",
  "key20": "4jBgdH9N9u4hA1MWfNfVxkjgy7QVnnA9wCanwV9uox22ge74eCTru6u8yDakUrxjd9KGoQApN35ZRwgyAFCakb2w",
  "key21": "4xusETAfUnjnknfFDvyFwcNEejXnnC8VDGABC5VLaMhw5RpxhJ8jQqxCayH5bU8UeAWnL2QGX6QXBtMZSbJxisek",
  "key22": "3Y76bxUjhjqyFohANZ3bJD7xoSZi4GhNTvxrhGYdjE7SV1MtbPoKcFo7QuZ5Rebxo4ftTKLdmXjUScpPupupkzt2",
  "key23": "4qz4BjHL2onvMs6bArS8kuMVJnmJBgF1W52KkEuE2pxT5tePPNfYnwfi46DgDGXjKSCVNARBv5ddn4bi4H2XzG8Q",
  "key24": "3ugBBWQ7wyhvF6tAGXDCuaK7fTQ1EjXjuTXJgM7j5RcgYrpQXcKck7kYUKAWqEsynsUTw4Pt5ZDQwvaXHbGBdpdw",
  "key25": "36T77sVpKcCVqMaYHyPyd76vpmNWNjTeAtFhGb9AdM7vs28UcWEfRAkTE4PVnBJerfpQ6jz1iZaiJtpwnVp8WA7s",
  "key26": "5NLTdrHMoNx9L3q3dJbi9EcLipCd72Gr6pXGiHcjBm7jcA2VbDWoJtrqaXggqLuLhcvzzeDRmf6AVNBM5nQgSpJG",
  "key27": "5Pb2Hv9xsbwa7NaiD4TfdLq6Lh3pLCRv1znC6JFmspBxJjFa76wSBYKKjbQWWsfVqL1AqUbFSmUB2HboRFLQ2hvn",
  "key28": "CagqyqqQQ8aAQN1SV2nEz13SBTn5gZghAfj2xQTrS4VgatEvptVNVbSi4ufcLSKKbqBkFDaRgCaEXePeoVRCxJG",
  "key29": "3JeYNVvRDvNeGJK2zBwCMyHWgQzG6BULL8P82QS7BYoNAHDy7EicB4HxxzBU8aSPtTMLzYWaKCNgDXL3qFpcKmRH",
  "key30": "3txEVM1L6rfUQJzXZXxTZeuTKE6ewoSpAx4T3g2JhnqPptjKpNFdZhSQzZ4zNpDt5gPdhAp14a8taaFX8PDXuAK",
  "key31": "cotFXdqQgsE2fcxssXfQNyAidMrtiuhdEpXCRbyTSm6eSzKF76W39n9mna5NVUbzFH2AjhyX46edQ78tRj13vDR",
  "key32": "tDZY1TTe8VmWGf5w5jVQTXUoV2dWznqthWCbaLJ6bho466acc7NGhYgSYWu8UFSPBR1niaN9EDuhWLUespqeqpH",
  "key33": "2hoBhJG5QXWkHEz7Az965tDBVhMbGXL6zaGFRTqV3Gc5zAv1aBHx9kgYkTd8vhkcz3YhFKFRCzD5HstJA1QDNZfB",
  "key34": "2cejkDHXRxHAQjh6zWyReXLuo7AKcR6h3gPT7p6MecujKP6BLbzAbknwQbxtqGyifW3ASxqXfLqjk8nmawcHDvdt",
  "key35": "2fGM7hvKnvrn7KRoeXYdL8MN7WC9GtT7jqFWqwVzh8zA5yS2zPexXUXNui9iFgFJH1L2avZz7oYJrcZsFoRgwwyh",
  "key36": "3kGyVRH8pM9VL6CtKkA4TdT8eBibW5XUX3ZPWXYZ5VcPYTfbsxWMDucQoi7ZNGxAQgStd8j1jBsxHjVTzkdjoHFf",
  "key37": "2UbD7KDqdav6BfeHGjSrgfHuC6eLhKsGDyBJT8oa6TcNyamjkssxupew7AKqB1YUVcqPxt2nEYXGiGC5EY1jXTn",
  "key38": "4PGidooqHJHM6XosjN2qq4FxepHjK92uCzSS918CVHcdz3geKLzXysymGL3HM9Qkkz3ZQ68BANWohTgexMDVx2dn",
  "key39": "NjZkXH3VbyTjTxCsZ98mcG9NGBqDwnCmK59R7hd1poNNSR34umBPtgHXG6noPLpYFHnwTXYU2BaMRNZHwiMwDL3",
  "key40": "FvremvTkmhRtLpMMNZf8sJjD1MJMqWeZ5bGXEQGdoTDTUFRhxwixXBJ9QBGspcU47mN5DewAZbDj2Yd3PH9MZdi"
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
