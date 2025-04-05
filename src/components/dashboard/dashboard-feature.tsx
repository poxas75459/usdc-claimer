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
    "3PkATgXXrxWLeuwFNzv6AGh6gJgEedJVcBM2VtXr2wtUdrn5YRYRGRV9haDNTaVx5j4CURfb95mzz81YuwcdXx9C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hksijmubmyHfkRFkwecmCJucRKAR2oW1vXArs8HZQigyWoqAC58P85WwerRDsX29S3Szu5rTmtt2s8tdrB9RLbq",
  "key1": "3sJwEdWicnWjigSiwXTKusX4uh927zVk8FMJHWcLcNNWbNDbFt3tkfmKV9SKEvsWAVeJKi83ZPseM5jA5RDEgocB",
  "key2": "66bmTNPfp6eMFvxvg2hkPwwmbc6hzNbCLSbVkwyTi82GxceiqhCGfhjFJgkpGNyuJsfmeR9XwdySJT336dpET2ir",
  "key3": "5RWh1Bst4nypEt3pyThySohpX79ovPnJJqfQekEgfNyqXfYJ8G6cTN3dZEAfFSZ2ZTRfXziKv2hcG9VCr5FhY2nA",
  "key4": "xBcxWoCu2zYRjRjAu9c9td7PVo4eJw2vYuxzQrAtCcdyKA1RTi51HepWK4stawnYJonovsikx6rxLZEUeQ7ur7g",
  "key5": "5mqxGZnt2BZNG9qgjXcNB4fvekykVXpqHozVsf6GUVs3wUyHUrYFDjkd9pz7xPWPiY2BfBuFK8ToZuQnmwutk2Ed",
  "key6": "zr8x8yMthntB8ZUafK1XUqsV6Cf8VEzeD49HdqsAt5u9w3FyNFhVXhVoXxUZD9b3KtsdPECgMMjmDDfVgnBWnbW",
  "key7": "4HuEMpVhQpk1KJnp2q71rZkKnkEE2FrvhTztPqkxKgGsbLaGZyaxfFVdySB4GZ1bYV5NioBYHP5Fo5LyqenW7ckS",
  "key8": "4dxHWYEgvARFAkYmtJxibkoSMdj9WNF4aJxRBwKbpBmMoh28Rjwyc4eyqqx8SLY8WSffSNYGXsAfBHdLajEDfe7M",
  "key9": "u95aN3eH3MJq5Xrwb9u7KvbiMYchYazYzHSUt3WwMP22Qqrze1EgPwi41ZXDNNrTu3TBHD4BjQMjGj85CvfqeW2",
  "key10": "4JdNwFknfU3QUey4ZFe9HJZn7ffTCJrfz2YZJPbwhueHaSgFmV5bni3afz2GCpvrEuC2dNvwp8Cj4ndGGDgXb5jK",
  "key11": "3XorvL6qEqfPPbntuGZBiyR9HmHspWu5hthrbuZzpFMSZqKg4SR7Lt54syqaSKvZE54p4UJoQbRjSaat6QFh7hTy",
  "key12": "3J6G79tMCNxJ6EeGS1NiwbBCkE6otd1QErbhCJdWXGRYGF5stVdxnEBwDDvxmXYxWFkZ6jMB1MqwsDtP2U1MA58n",
  "key13": "386NqTtod1aBYPSDHzkuoUJ28UB5TELki97ckpdfZSKvUfNbKjZMXR2haA9Su619CEn3C6fthYooX3CvK2XUBrf7",
  "key14": "2si8T3Zo5kkZgX1ysN4vBtuxjMTvomD756AHxqiX7EsGgZo5GTvme2sKVSzogMRJaCgGk3KJcKrVsP1sa2y7piUU",
  "key15": "4pdVkyaPSjSZtrHGKvp25nK8LEk91VLcgXrTadxu2LtXQ2uhU89kKkBhpnRmdWJqjyri4Zn9UEaAtjRu7BLqLg1x",
  "key16": "45531D8GaHpWmM63fzCXhfaLW3QrTmjKzQi1Ds49oQyvgmSFtzKziGbYH5hZR2TEeaPnugRN5foGvH541SgEUnL8",
  "key17": "5mpyQvPsST4Kp96Ab4J2eV3UWXnrutFfPm1nrz8A1x6zEJU3trhYT27apGxv6XTtYUKGCyRPDhhmCNybWpJoZyCc",
  "key18": "53LB97V1pgHFxLKA67T8HuhMWz3sGegsGNEXoUzrSixgYQuhoY3aE8K4bsg92NTRJUZgAA61wwRriGBF6ka3uGJD",
  "key19": "5D7e6wSj9WGEmQVTrJMgKZvTTyQ2K3bPnw7PDWogcrsNWgANPwMzSTZFzyfVwS55Noogek4qjEfh7VUTLPPYcoBK",
  "key20": "sbkStaL1MbQbRqQX3U1WnsoZaPTugzMCaK8gAuNYQrHPm7tnL8EJTiy8GQkAEk3YheaGMMyYHABYxERw4GLo89u",
  "key21": "LvkRS2ELduzYCwbPW2th3ENaUxym6M92pmWytBXkN1XPHGqBUdctBQ17GLk7SR8NUGGL17qtF1tuZGdAdSStD69",
  "key22": "5HWCBWUx5ATtBeXL1Cy7SsmfbkkVj8mwiy86wn69eeZU47TYDYvKgGwFgCK7iA8D7JQUWDJ3QU4NhpiRmHkpDN1Y",
  "key23": "3h3ns8YwvY2wjQMrrRetgQHJHJJUrRzG8zhrcAqaAhmaY1K5dmSoxjM41uhH4hSqJs6Af5bhKATdQB9Nd2WgosDa",
  "key24": "5MC2rVMWz2HEYpZxLpuQN9HqBhbDuecJ3aL2GgVSgtj528SRmNWASSvJKHPP5PzSCXMp5FXUGTwaUsXXrMBuCMtk",
  "key25": "43obEnP9FvUpzyAW98yPuBxxVKamFfvwtTHaWWWrU8dQCjAY7ACvYbG35ZXz7PkBYTdzwb1rRzVza8ojLrMEvEtm",
  "key26": "4wEYR4LoM8rVZsPV84yhwCHeRwgjRu6czbLDKCuiMx36F3kGMfTkvBfe8LEy4TiJjW9M1Ho6icamMuSCJA1tVByM",
  "key27": "7n46dD1JeGj2MGKkztqmABs25f3io2tbR9Gq1GW7rrSvMKXWmv2YC33m4xjw3xKLNgEJsvYpyHCVEga2SxvUrcT",
  "key28": "g8hBgHYx3XrHZStZpWuHopTWTSW9q9GGuk33K5L1Ka9WT8mZBYS76w1HoogL4B2Wyus9nKTDeKV2sqk38CkKT4b",
  "key29": "5tGEPnKvunHXgbr3tVxhbd47ABtHgdAs3p1jCH4Jc4S77j1ZP3uoqSafXEEPdDGMCyafweN3JnwRa9mMyFWHQnDx",
  "key30": "U94fiT3AtauQ2YpGCP16sYsEeCpBbCmzmmNFi3Y4vEgGqv9EaiEkWuVM8JwAzhR78gRXei4oXCecGUqqwsPWob2",
  "key31": "3TpMtUsC2ZWgh5SMocTtHkbYc3ZvbbMFu6Rjy3KxJCqjN4RxwQAHUSQvcDTy8rsGq5dCGhbjGN3fif7P59tw7BmS",
  "key32": "2bHZsTLjaijdXq2MzN5fVTCeAeW5SFxTYdRxZDxLBd8px1rwB5E2qDFpPPfN54QdgcYiNq6GM1ghzNVuYdqJz7XS",
  "key33": "2RNf7i3P2wgEe1GQkc3nbZuFTzmMB5Xg2howmp9vGF1S1icArpCKrF5u6x5FQdmCKuKCfCwEP8T9V1FSizNa5aRz",
  "key34": "5TdAeFvuqge2idUQPRysyurwZGpQdDMxLbZgTWWj2hcfxSzB8ddkvsi4jzEsCrMJoVZvnQ8pKRFuRAecPZ1Gitxh",
  "key35": "2cv8TJ6MLdk2GjES78QRWFLy2rvg2K3Ripu6tyGPy1pdneRqVJnaqL2MeHRpNwonwz1yLNpLo1Sip4CpXBvSdm8G",
  "key36": "2WZiwjnBH4dCQdQQgY9steSmZM61PosrdgWfsNEeCYmXWxGfc5AtqVMuUyXmcUBjARVE8oKMmJW8GozdQNHgTLug",
  "key37": "4yx6JGBgEqCdnLEBPYADwxDEg7nkhQwwYgqByVGeRNXKXmMxcs7A6fCBsbswHzZiFVBvBT2vA847RDVhiZNq3smc",
  "key38": "3w11tzDBWx2j7jVLHGhbL2ibV91oyHYLZEgY7MWCHeyMdSocWudQnecamDhaRT5kJkFdTQHRGh7nAZRB4SUirwPN",
  "key39": "3E5gPmtBQVzrThcHrFZkHeB9sXN4mUiXMKPkLv64pJRWmHmMp2iF5aizq7xcptxaMKi1tpvaPEXGG4DSs13xY2FF",
  "key40": "3QqyupRKP9hjk5Zg8kXRXWKaN7Vj7jWFKCwfxPP7PzjEwDDPdyZoEkrwMgCCasACsHPT6fYyCGb73fdQFm1yzeax",
  "key41": "BWrzXwpC4PhfVCUPM3kThFojUDfLRyNKNzdH65egdkZ2vGRLVE8bp9ptXacQFDHoEDfbdUvmb66otbfmXFQTHxV",
  "key42": "27bNh68Db1h9X7oWEnms7FKUjYwD4Ejz8R2JK34WPF4ginkpetBgdWGmZ7q1P1zAMLNKyjJ4GbGobkU5Co2R28GJ",
  "key43": "2vmxp3EuUEh9jJX9d6M2bTY7wrLS2a1nXnMtp3P2BW98fqaSh7VrrBpyHMm7WLykJkrKmbXibUb65nSCiZVXtqv3",
  "key44": "4D63K521PPsaryZdAsAELWAwyLa2Nqb1p9HJzb4bcLr5wxFbK51jRtuGTdko2YHxF8mDk7RzodprRuymCjp5afVe",
  "key45": "UgFgQDLaGrJGfAPuWPvdVQKnXkYN5V1jQd9pnqfYebqcjJ9Q5d9QrNRJRFaKaG9dXVr8aFGv59arnGzRgLEKRGK",
  "key46": "3WNVEsjn25sicB8acb22m3ZQ4e8YKbYg52FcGKDq6ERUoiPLod7yQp1981ExJTgK4L1Ni6maDLDGGFdCSn3HD1M9"
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
