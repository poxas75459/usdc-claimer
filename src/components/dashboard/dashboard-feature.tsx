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
    "65Ucm2dM94LWe4YKwD9D3KEQxMm7q5fSEy5x9USwXFy88rT33S23TsjABirNaKFFxJreJ4tK5C9tDwHmrF4K2GSR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31VxrJxtRNPtiW9itLyqSAMC6RMD1RoBatez8yqNh9P2w7PeKnzKj7sEKKFzsKDPhyaCAyRdLr3dcKZsXghJxiG8",
  "key1": "3GvQtJYqHLNgv1LdkwTgcHjTn2QxdWdW1M9CEsf57E4kUmQJPYUo5rQN3ruBfVbDCpL8KW87munWEUZHRC9KH8Qz",
  "key2": "4UY9ySNaS9CjryqNfoRvoTB366sjSj4sazeg9vQFgUbXG3zASyYfTacAGRhZgHj53UFF1djPwpd5S8KCvAtP7gbw",
  "key3": "4UVhwVjrFhUySJuTsyoFUdAHifz6yAsingjT9eFdx2aQEEBZ1vMjGw2k4yA2PSqRDPJYHDfziKHTmU1Yt6zJb6p",
  "key4": "3jhGWXsH7WEHXQWSC3ArRJ7PFUjBZ8GVSjARhHYyPw9bpw4p1phx571wFkSh1aPQq7NbqDw5GDAvggdAYJP6hmTW",
  "key5": "f94nSZFUGuvxaGyCWgM482zaf296sptoVwAU8y3MAAz1hHbW9He64iyezLzxFnPDjvQFXc58k6Ue6iAdt6Ghb6b",
  "key6": "67TmqwwWSJZC5Tr4HvPKXCGpnCWXCtxG3bBABCXcxGNaJ1qQp3npZwJVkSgLGFY4MQ5K3q56zynGHZyET23F8Xai",
  "key7": "312Qdhou77WasQzZiF9eHYNMvt8zkC4MtjmUZ89CZmoj7ftxigdebPRq8Qzb4mptjFPFSLpG1EQQpi9b3By8iG75",
  "key8": "4L6uoyMvvA7jMvQF47LvDAejpbsyE8FunPPkndxb4cLUNaTX4oEMqwe52dPoPsqHkDLDLGRUZ6TBsQCVnF4R27EP",
  "key9": "23VF4qryvXKMf4TtZQPQ7dk6VGMKpv4oPHnADHVer5VVQpdPKjyMDHrMKuj8uYykFpwzLBT4TZ9KX7Mnk288Sct9",
  "key10": "5iavDtfSgRtu8uesSV2ZmYs1C5SN6ZbeVdewiiLYV1QQUZp4CzsbcfWb9aCpi4MP6vyzEJX96mqUpenW577ebeVu",
  "key11": "54ahoYG5mxtfig9Rhq3bMmaJWnuXYvJX1SDFC9aMx5Mv9fZyYwcG67NsQ31BirTjPLaaMqzjoB5nHpirJku4iTpk",
  "key12": "2QcpRVmGFrWPMP5vgMxBGL5dCL8pS8WZPdwgJrUMS3Y4jHugvBFU5mFCz1T8HovgFuFk7KLcfDQGEpXyCMmQJRJ5",
  "key13": "4dcZkdBkaNUrMme5WenNaBokJBXXmWDNBQDGQeyTzVh1YqxXH2cJLta16MoxStqPFVp5skECK15ZbWges3e2nrAB",
  "key14": "3YdskESUPFmNSAm2roYVYMY9p8jyQUBLjQgQEfcfRxR7hWFYzD6s8twwjHdghkW24Ap5RgLTkqBaM4sWVMQtX4Kn",
  "key15": "2jh6ceWDtPU1St5VCT6ZKPtzcsjBiJS5bjT7iyT3ucp61noQDNNb5inSyz26zriDwzKdyoNHjQzywX9hSPPS44nA",
  "key16": "66HgeefVD5zLtPr5ba21T3o27Ur1q1PoTwG2L4kRm2WM23Xnbz5XmapJEhnZps3obeB3CvTjrhntBLJiFaBaDKRR",
  "key17": "4eRP9vmMRpiqXhVqZ2YeWrhiywv6LqY7TvRdTspQYGoDaCtUd9TgWCgQ4HJiZs7hFpwf12mgbiTakMy1FUofCqcV",
  "key18": "rXer62CXMLAt4NvZu6TizhE4Jj5umsgRKppHq8BSXJrLZH5236sT5n5kphNPcHFJkJtkRXzGzaCLMCimnFtsEmN",
  "key19": "2q3Rc7eV8K8M8nSA3AEPLkxbzccVryrTfwr8Ryq5cmTFE9SwUPhB9A6tbFkqhrCz1av9vf1ZbcqaN779C7QXHWPQ",
  "key20": "5yV3X7m2KvwPN3fYfKPyo3HijFHaVrzEDJgJEqAZJcNtEQtsfhHSCq2FcSF5MDtmv6e64uRhww1pfEM7fTn8K7Bf",
  "key21": "QQE2Cwo4szWYAamxCneSgWNfvRrdJvBa9yLb3uNvyDPf4J7t2qQRTpuvFdWBbdnm85QSVYYHf1NGfmZNEyBLFwi",
  "key22": "2dMPumuY2kkRYG9Dk9DvbqGmSk4fN4SRAmngu2QaimhNj1hHhmY15SPvJTbUVfaT2GC5HFxj6V9Aqs3CLdViRzwU",
  "key23": "56KQ3rAxRwAFWqwWENZ8dxS8kuZKtjwxxEvebDc6XpNGBUDyyq3hJCzzzoAQHVZsiYVrAWJZzWiknNZsxYK1WtsY",
  "key24": "3q7ownbYe74ec6cQRqmGge2jgV9b26MwDQ7PdaocTAQc2asY71UzVEpCjq8Sa1nn8KUuk5UoEpWHNVCYUmEQD58b",
  "key25": "3PunZp83nUvUGcdjTud9HdJbzXaWrma7ZfjfEPKtnPHqwMERfMKcB9QjBKsr9sWJjQ12WjesAZssWJKiXuC8VGR7",
  "key26": "5kywP46ids8eZU7uSb68JN9Dfvx7CeU6dLLftYNaoxPFLXKysZVBWiK4p6EcnEnzVDfm9P3Tb3W1Fi9GPnKuixKP",
  "key27": "49JdKTcjptv9GTjbxr5JJ6oFnqqmkHod9PbXZJxyTpSQ8ne99iwzHkv1U1AhtCBgroqoQpD6xp6maTeEKRMkdJuV",
  "key28": "4e7NumShavNSwuzgRoqAxxxr3azJ5BXDAK5VJX7j1Yo5mRJrTw13QrfUmdACj3UxDuXdQz8oHPWyBUARk5511mz",
  "key29": "3gLBM5GSJMatTG1iG1cDMiWqW2DzUJzxrdodjfRXqiDnFBNMPkrxs6EBFWGwGsFrK9BmeeihdfBnKF9MgwV52otX",
  "key30": "4s9MzRLLkkEMn1Z8hzRvDHV5SHYisHXYeApALmQecHGebZRvYfw5FvRt3P1AQ1tatBFUk77Hyo3kA9zT53Wg2EPi"
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
