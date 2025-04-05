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
    "63CmZx8eHs6n4X1sbNMDgfxqNpFmVvdqhQG4LStWcw7yjCrCkcL5o2sk7iw3Lh5vp9XazcEihbR9euvWTJ6vnfuZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cPgHusMJriMg3FSPwSy1UmU137qLAeHUvbCo8Sp9JBhG6izfSCAxnTLZ8NTgd1MUkfTCq79YXbb3iuZLc6oqjjd",
  "key1": "4wccn2S5L8drB7yjUmnw4ifraUKy74wT3xkD57xk7aY3DW5fMqdrrPW3p2cLYh4a6zV1KRoqjKJRegoy5YUADoq4",
  "key2": "3y5HeD6cMDopEMShTbeG9goS4EYmeZYzFtPG6X8ra9d3vpm22qRcpNL18mZoNCVf6dHiK7Da2vxkNkii3ZvE3f2W",
  "key3": "XaUWcVo9Xz9arDVLk8hUA5QdfKdc9nrLqZ1WJCGXL6S8q5nr6JHhFrThXDSVa6Y2gocPuD9LkFuTEvrn5WMbCAk",
  "key4": "RVbUpksRfHkfb2fLjCaBQ2LsPvxMoh2c2CHmXp7poUjVy9Ur9wgW1XTbVJP6UTQ6RqHPoz4jhtbv82iWE3ThEMG",
  "key5": "3WdCRo6qA5hb6rPJD1UPdfueDnjSnpsWEQhBKvR6C7nDTyMQyecY7cG5i8ZEYaCqcenJF31hYgWRVMnBpVhqTse2",
  "key6": "5wBgHAh6o6GyGwKVDT6DsQ2785bM1WBeqr5TZfct3obCh5brYdyJEhgxy8Mu2LSFM5i5ciCA6Y8xQjru8NsxQRU8",
  "key7": "2v95da6NUh5mwEed9eLuzgQfqJ8kZukH4KfS7in7unq7VdnmJmu7nSK955auUuFmePuXhqu2EuXauaAAehShRSp1",
  "key8": "47aKLeH7bfzY9gVo3i4nHuWAw6Nji8nLNPMos9jZJxpiWw3vf1RpZRjAmL8ucMGsHZY8DfiTJ2DFJ4TFkQQ3i4pf",
  "key9": "634ZFs7CJUZiDg5szCpQZCMj5HBycUpzwuoTBvZeiJRT8dVcoZ1hoEzJBkrfrDA4jyjUgjUy1Wvpa93UZRLq8Zzy",
  "key10": "63qXzDNhNRdQ6qAnRdPeirMCrkuWs1UroM5cAKZDcqHeymEbkWJfFcyW6oxKpcwAxxF7XQKPE3zowqemG1Apsmfp",
  "key11": "4hEqnWzsukAkfRaEji4i1shH8wHdqfeiC3sBStKG1q55ESmy9GoWMNvPd3pnWgPNRKc9Lxgi4ueTJS1GWTzHQVBm",
  "key12": "34BMKp27hYt82uPJqtTaMEKhzm5JR3nEpDub8JnWcj5G168ivaKydU59nKQ5m5GMkfzqve3tQSd4qWXz86nbh3T",
  "key13": "3gKdXgNroM47sMt8rqojyxABLyisqorCMRwMfnCBMU5zUVy5B3kq22wDvX8ShNehb4tjDi9W3NMXAsQFxHHCBBxo",
  "key14": "5iS8TJrFjVuzR9mXmYT2EH3HAedFCV2x5u1v3RPQrVqCwvKFqAB61RtymU4oHYF8Jfpx8y1EzVVVBWvrbVPWdQS1",
  "key15": "4YgsHcFik7GKwVesjNxSJFWwveisuoCtNxTQq23CcEKS9vf4JSVjVGNSJNncVu2tofexDrFJNcxLtyjWVc8KPZ6R",
  "key16": "3mQjhnZXbMJcra1oxhCC6sKbuf4qq6FnT1Va4amJ8b23CLbAhwwvTixbeamaqoPXHVmLeymvGNHtexQScfGQj8oo",
  "key17": "4M277deqidohwEjGUo5dYRB22ML9prtKWQRjjdXE2RxMGPRsdictp7Y11h5ViqY37utzk2kbUUid9H1dS5CTbFsg",
  "key18": "5c11nYZtd7HeNirzDnnXjeEPUEPVC2LRfyLovgL1DoeLLB4JfX82cLwozMDkZEgjQPJjrPsHXAzNhoYifQ3BvqEx",
  "key19": "3Cp8NXP6bvv4pYuVCndVRzm4Egnu7nfA3rPz5KBK4UJCdcav8TQbbeTj7xyBJkfV9npTcZhZyNbKze5o9hZ57bpX",
  "key20": "64Km7eZvbog1CyMDvcmizDXA3SbbaUhW7uyvSrLjcayXeFRndrkYjSDKLp43qfFpW93HanA46rWVayfWRGsewdNr",
  "key21": "NP8NPCPbwt8pAAWvV7Tbz7VLa1nmcaWStKpdAaN8DELKRkk7PAZM3kYMbVp2XUAXL59eC44SLEepPpaetYNQwBp",
  "key22": "48UnTvtBGn8tdsCGFeWvq7yxuB4vxri3XiZrn9T8bSooyHeXEr2tDg7ydoLpvyMrKg3gKRVXjhycAPKXeoMboEHd",
  "key23": "2HKUf4Sk78AMQnu4q9ZiEYY3gMwPXeWyFQsegqGeqjriFUAC1JFiqmbmGRBpmpQTrq2RNX6ze37JDGUuqvtnvroJ",
  "key24": "61FW4tnGK8BKdhh5vYQtRddtZWdnufSqd9oEt7WRw9pMJvnhnUESQjoYnctL98PzMUG7223SNMwBvHxxKwUBCju8"
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
