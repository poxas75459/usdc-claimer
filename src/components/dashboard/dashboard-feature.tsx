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
    "4S3UuXEPr18hNXTmMjjEi1tqzibzkp7Vt3BkAVrM4Hg9oJUYESTQsPSUBi3LaHDadLSSF8v6vsdhXRQCrRsTA8Cm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XGteiCj5XPZwz4BpQEFWVnzrizkqNECwDM1GPL9p4f9YAh15f5M71cLjRkH4CmF3er1ps4JXWNGbCQX3X1NQtAL",
  "key1": "61d8Br5rPTtAdTQmbCTp3WNTowc8Wo8bfMHQqLgvhB8B48QgnSsJ3FFJtJCnPyUcrhzMayadEiaBPam6BEP8ms1P",
  "key2": "4JMujHrUmoZZb3XVz8ci28ynSacLnYLc5YNhQgsMHBzpQdyEpZrENUMAUQu6PqNdvLDJKiYFEcPmkYSgwwGfS1VE",
  "key3": "32nmNTcuV7rHEyBSniJXoe4BiYQV9wgqDtGx4Eiz5XNoPPEASHmWiAgajqVSJ7R8VKAj4X3j8F1ov1QWD5YcPErC",
  "key4": "2x19eMeob9j6WWWLoj18iRJH1eioGAwti1w1YGaMgDX9LsbUoeTppRbVxx1Cc1vG9RJubKQUx6uvWVuB4Ap4DefK",
  "key5": "dMvFXxCPmTLjZDHngkT31oYHbdDKPzqWJRfZ8htFdkp8GKLZ1TzjUd2QzQMdFKhd78SiqcALN2GCpZ8vMhiBtGL",
  "key6": "4vHvqv6hhiePdtTURnB2paijXALkNi87FLWQvxraJ7nhY64F6yaATt6JuUpG7K3CLBWTs5BhP6R7sZWyFfEdFL4j",
  "key7": "4JmZyFw8FndRSP2BdpFAjVv7Xqka7WTJnXxcTw4G2U7dJnYinNX6Vg1fn5iahAFjUfmyMtrLNUxk5GWqom5MU2s9",
  "key8": "3znx7Yb5UXEVJRarRxiBJSeQHqgVzrQWEuZ9qedGczHVuhE1E1qVK3dTdDcxGMzDtbFhRdW8K2exTLcLhsHdBHeq",
  "key9": "3tEYRUgTKBsb55Y69e6DASqFzTtJuua1ftqJiBsmL9uAbAsCj7GtHGrjBdyax5jFB5cV27seNX2U3bsSSQ7v7yn",
  "key10": "MYYbMjLzkGEhTAqMFDWs3VoyzVzsZPaLHyMb8YcWfNbRgXdd4KV4mrX2zVSBByVn3PTSRHzoPW9Csto8CvwaEX4",
  "key11": "3YmL99h8pRLsctnbQXDqonsz2YN3GDxAMuvAdZz1hVcRwfR2WbsFDNptdoaWiyyqStNfE9bJozSnPrGGWeWBWBzn",
  "key12": "664cSRMf5ppksgFGxuZ2sNPp9hjqCCV7NjunHcEoBor3nNkfvXAgoh2aPgJqPFU1cUnVYE3HfzxHsTdvZRnJ3qf2",
  "key13": "5XZEUQ8S2voR8uYNP4YoieRUSzBMXMo31VcuQooFvCjCUJfpYcU52Nbu4CzQhgRBv9GFuXZHYHvyCEeW26E4Ajy3",
  "key14": "2jFFPFpXGM6SgJYG7iZ49Ci1yLoGRzoJ5UadjNzRCmw6FfqYyBe3PPTsckmB9ucohgkEGGeZoJX3Ezmmms1XWMSS",
  "key15": "2ePjuPkEnwRkmQBh4wCBYY35WaMUDpfyzHdLtdv2n7RVScSWwfZEpNmpLUYDk6m6yHMyvSh5zbou8hWxGtQnaETu",
  "key16": "5s7mD9Rw122FrSb3tkQgZsSiqvzRFkcPW7mibsefyzney3cpNYzNMsWCfqTnvmMpBuDdBJDwBnBwg1CngrJ6LeqX",
  "key17": "4bFYQT6MfWP6NHvBrLqsZFJhS96VTx1qjqAbPxUk5SngLAKj6tQn8CcT9vzjaxqiWRJfbAsBgbifejvvgedvELRu",
  "key18": "LnX34SFdAuVD656oyEmi23pqjv9sFFGmkTUnXkBCa1vZ9kU9sAom4ctP3qhQEPhoDnCshf85RuNkXDFAdPwBX54",
  "key19": "4H72jpSqZDrcFDVgRffZNJokdWGBN1Uy136sbCmK3nu5BmpQ3kXaqg6tg71kvmW19P2Dw7VPcr4FxZMRKN3jJBa6",
  "key20": "2jrzg9v4y8HY5n5rQ4sexop1ZBYbkCJFwNBzuT71DLUZY35CtYQNiqEabWmbhvKJ89qsVbjvFd42Z5F7TNzrvP83",
  "key21": "5t88Gxe7Z4aWTkJEwZBRvQMDeuUUixQfAsaeQixZ2CRocHzEWvnBfXTLdFxwEZXYtwciwfmt9RVycg155Qgg4WUC",
  "key22": "4Qj69e2AmUdo2wJLGz5MXHWqtcD9bmFwfNSLgovkoDBSonW6rUisnn9B6MVArt7pu1uBVZxspaCWYaosY9NmNgJT",
  "key23": "3jk9iUJrqEtaqDeHyAJKQD1BhqN5j7Ef2sQounr6XVmcopMPAVyHQiMzp898nANNnhSpUT7xv8FZPhLkkj47GrDA",
  "key24": "2GcJ4tqNSQWqv7Xv2kMbdV4JqRgBnwMgF6eYZj9QJTHLr5kfA5uYy9iU5bxrWSnUdMzmp3msETng8AdQpQCeqJrT",
  "key25": "b3gMpdA2LZVsVmWd78Kcjeicdc1dHck3jJF3s68punKk5w7CM87UXPG6ek6VdfwmLexVMy4gfYeGxxsJxoNbiUZ",
  "key26": "QgXJh2nEDVWMMKKzP17ANRCCKLkiq6WmU33oq4jwNymPPZYTJbq4cQrwgARnvLCN6AvadcHKa9865o2SobHG8Md",
  "key27": "4MJqvsAYkYcFqtsxmwicR43VuJarZfJNMhV6DzKysHhVpoaUEfjdU64FEkyjHJyWbUiJgkBUFRNm6agZyEDWsMp8",
  "key28": "4j5HR4yjmaxyW6hFXXocV7vjGDHK1x8Yarc9if98DAT9VRwAC8iHLrbUuQLp98poAE7yzvsyeG2LDFKsJok3t91J",
  "key29": "5FoEyeWzPxVSm4bdowmJCJz5aGnscbXv2rUEzqaHBhT3wdy2pgjmB9QzftMYfvGBrbUVqAHgVKnG1JMshLsABq7F",
  "key30": "58SnA8oLHsPXpKpXpoNjY7JKTqTYSfu7fzqvh5tY7hzU6kcdj95whrvp4mjzadouhdZ9qTeXS9YkPwabgMSL5tL4",
  "key31": "2zA1cVPCFr98oNBWoMWMHQZShP5ghAv1sSk7YwBnj3hmdntXEefcxbNsv2qxGwCamWPmjjShUDBThJXGERgDspxU",
  "key32": "mADvwVrLBJKGzbok1vHXTeGayqJM5G3pyxdUAQTJ8UoTk6WYFggouUYUgzGrj2dSPsMwK899dTjZdD4TYjiG57m",
  "key33": "286vnJuXcNwL4kQkTvrGv8tMvHHHee8dxWzMi2NqLz7rGzo55ZiVHMQp5c9AYRjUv4PkP3mgUVjfqD1gkeiCzK39"
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
