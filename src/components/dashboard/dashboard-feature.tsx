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
    "dqqisY4G2jjCuUVUreANHHJG6NAqEUGY9U52EzC6Ymg3uUd19pi2QjpJn6vfddfFxTTa5vpyXWXQJ9zU3o9ttdd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pRT6QPWnQrUBUQNazyXFs23kotLtvpWiZ6EJG5ZyDKLJFvWeNMXNDe1HAcWtUNdSGuh5eukF97VgqquMij5gPcn",
  "key1": "26otTsoeMzAXjHodD2gitYzYmFUb8grQFGn3DC5Zzhsc7MyTpTRSCSZSSghogpDq4FZSanQ5ruXnhfCGvodPW2dE",
  "key2": "4CWUXCDt9W5ocShfJ3CPpavrwJdvHWMG1c4MXQCUC1Vva36yG9jG3NG9ALmyQ1i54WRsK2nDe93DJFtzAEo5t7zK",
  "key3": "34LyQEs6oKijFyWxA6dhQREEm9yn8NYz4QGzL7o2Xm8mYJv1GZYsJdZShwuuPeCUsV1bcttYW562w1nwNv4GLKE8",
  "key4": "2SQj8oYeWdiDvdeUyqjTcTM7gxZcFrvnLJ2K3k8bDpcQLRBRysXYaPG9nN2khup7c5U7vc2PjAR1kE6U2TSZSPNu",
  "key5": "5ysNCgzhYegpTMUATDEHFhF6WXsaNyXrAxgJVvegUFw4Ej1Gh5Hhj8AdoT3j8WFaYpbcHKQ6YrmrNnnP8RnXq8Gn",
  "key6": "3aHxz8VEtaBFHWsikB21TvKvoAuhLyZQwKRwC48qUsS4HxiHqTb8ATefTn4BkLxRhUM1YEuUH6eAmykKYUodHVCf",
  "key7": "3LqpEkL3vHmUsCQf4naDVgX11N8Kbz1vokUcEMiNpB5rATEjbuwtnMYSL2G4D6GJcWX645YfJ8UYeyC2VprUTgsB",
  "key8": "PinuuyfLVXng2Cdnb1pp2fwTbSAEwRmDFeCFSFM1EVk4dDtraTeT6TEeXHt1ENLLEaiFNkJYvd9mhaUUffhekod",
  "key9": "5K5ML95TzF6K5AhWHpTxktcpkBCf4uedAP8nZuX9i82fxCU2pKpPGeDER2BeG6DcPTQuPqJiakLnN13LbPvTiqCX",
  "key10": "35QRBiuzb3L268cG7jUBEE9o3L2TtP9skCQM6ps4ydNoP4eynjPpbPAeP7CFkQhA3AP914ZS9AMAwH1nwPD7kGJq",
  "key11": "RPVU3EVfE41utdmzvRHbfPZiRXdzi7TmXhN14oZ24ftwV2kawCZkArUMxxhZvHwgcD9Nr54h8dEUbDo6D28HjuE",
  "key12": "47HerJsKRcMCgC8zCex8xkUFja2DExRPWKPUcN9FcXTASs9348VV1u2bk3yDbRXd3X1Zzonr8ssJsYZq7oQ56PwN",
  "key13": "2p1ApvQzzqoBgxxXhKPnYJZqgiWCu3PVeTbrAqRjdHsPg82ZBpENepJQiZ3hNGmXos4ruzurrA4mUhyiuTFLd6Ns",
  "key14": "5Bd8VBCvb3jy3WDBbeKjCACQnJUFspoH88Ju88aTLsXx6BjHrYgdFdh5ZveGZsRZU7aDs7o2LDqAKHF1B9m23mz9",
  "key15": "2F2RG5swD1rVNMekFtDisx6ck2ThxuoHUFjmCezhoAjxYdz4fgA7dkGXbJYEVf62CGpNEPvRkigK8WrA8PLTdVdn",
  "key16": "2rbhxUQxYGFnydh6XR8PfP9mxxvcT7DWRr4FXvMYCEguKX16Ds8wzCyFx2BPu6dXPj4nsUQ6zPE97vAcHKFWoKeQ",
  "key17": "59YkToq5HTUQnptC3iM1fcBHsSJnvJ8BFRCp3nqSF6PqfD9GWJrYZ1T4XodeAzyCvFTKdNTm5JCYeTzNfcVZcWtZ",
  "key18": "5FgVGZnBww3FiUjooDb3xAnimbQ8aV3bCMQdNRy8C2vgn1pA32CcqKfaX7qgBhJUXTDixdZMvV37DLyKvVh1CRCo",
  "key19": "4SURdGRkPQ9z6H9Lq9d8oA64iovSU7hsrQutygkEdCoiKbgiTvZzAUxbKPSbVi9pLDyDvboc1Da9L7UCcNu6hoff",
  "key20": "4G9YFTfqkHKdBssjDsqzYDFJKtpzQQpFzKHVoSwvyyn9Hn3BncfgruqmLKbECEhs7SEQuYc21khNcLuvPKpzx2ki",
  "key21": "23MscKTeQ4w7Aq4reVp6hd7LBcqqqGGg9G7DwXVdEZdukZJYhDCVqYdxZoUKGeTYy1XBKNjeQSaH3GHdcYMESohN",
  "key22": "4CgZzDsZEVpDDFNPzs3H9fRsbgrVudV1Hfef4Cn7iACZUE43cbyQpjBe49j9Nvo7dQzZT6t9G6vpDsGpdYDryR41",
  "key23": "3FVEKJa15mpcg9TvA1VZzxeQRwpc8J2mB1yVXLyyYp6gQN9gc7p4vQZa7PQMNvBkauJHf1puLEkQNZqkjxJN9DSL",
  "key24": "YN9hzssADbKs2wbmEHEeoXvV9RFTcqEk95hJti5VbAD5HYebYtwzWAGhFNUaXztWEHjSi5PXpvANWiCTPA3kqpp",
  "key25": "5ocz1dx1oxN2CSqRoSARW1r9K9yvTDtqdassMReY1UjK3SYkNnLWWUS6y5jq43GeotMt8jVvGcXgA4tfPP1dLkhk",
  "key26": "GydDFqZfCDeyJ8uY8CnmjyzoVvNjRHJNr8axZogAVybbdzGKuUFj9gDLQp79kSKgdRyQMcf9dTSamMP1psvLT2k",
  "key27": "5yhxBiqQhsxCY6XV3gFpzycaBpzgtGCBBHNiFdh5V4rswkzqdRoByvicqujVgJY3Z9ZSY98MSjopeY8Nxmntrfvp",
  "key28": "3CD2UFpNg6dqhDx48gPHAUvrpaKQpfVWwXtQV3eJWorixxq377MyqZZPE3YPUoKyEyjwcr8zSTHv1DftUb6xBoVP",
  "key29": "4aXzdVJpXMtvCEoeuF9hNJnJ76T3SLfcwDxbEdPcEgmCXh2PjeYXjXxxxLtQixGyHxbgCvTDnpzNX7L9YTn551g9",
  "key30": "6KzRNHbibPCKAQaVuw7FEZ1NhXwX3MzSNpQDSaVKaPSKjpdhZ2r72zp6JMZ2oaFmnLVWDHCA5gHrWM6ETzKVnYa",
  "key31": "nL1FaWdb6V5RgL2hPnZTkZeaAnXd6o3D4LZjcCUmStWKxeXwVQhfW9YtNaFEFDAd4PAsVABX6XGFiZuY6AG7mVT"
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
