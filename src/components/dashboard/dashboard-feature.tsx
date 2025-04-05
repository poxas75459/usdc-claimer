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
    "LS3Y7rrUrBPF9hHbcC9egyh3gXPgC9UZLRz3eraXXT8VvBvVCvcrnBAaNXt78MWCzhWeupxtacE4pr1Jcjxe16X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YBahPY8ME3G24pyzHp2Q23E4mgkf9W2y5uA9ZfY4uMFk9BtCQ8VG8p7zcBFZm7VSF3vp69pXFSVDi8gyYbbbdCB",
  "key1": "5GMXVp5Ygrm8xBRPzGhAURKFRbbUgona2dH7aCxHtjZ5Lucn9GSmKkoXiCdYdzNo1ywaKQGt5JFPZMmrhFmkRHuZ",
  "key2": "3mQmmK7x7MFk6asz3baF2YsBgGrBU7UNxjGyJRefwvr7oxvsKyzkVLGD9dkTtBiDNCkmsDKANrXkG9BwXPd3wkmb",
  "key3": "3SYSJzg3kCu1qfHm6EcMeTviwjdxSVPLZJ7kVHsHreDxC9kJoCm2SzNcY6kwSJWUs3zoAcwvh7amBygJFtwAVqk4",
  "key4": "EJju5UEKeM7WXZNkp2Gc34ZNutqbALqnzutKbA6gdLikhoR7iSJXKG2PHSNgh5XQHNoV3s9bBsRSFfyh53saDGb",
  "key5": "MqUKYKTa35hoKZZKD95VhBDPMAHApEVynUDhihZsdzVoQa3JSeK6GaueC7t88wZYEMQxYhhtPLMtrsSXQSLht2L",
  "key6": "3DDsHBYqZVDimY9g1hgWEovwtiiMmi7eDYYgrqcUcQDUPSB8hncp5w2K8xSp4EFkpgonPG6r87MoB6ABzdpgoYGJ",
  "key7": "RVGhLyQd5Yw9aj9q31PQf2GSb8t6A5BPgoHoXPXdZRejxxEWEVeh58Cns3jQfZFRxLk7t85NxHmi2KtFh7rqkeP",
  "key8": "5VCuzNVFJF1pVVBKs7xRsFVVT7Z8WtdZAzJbkjyGbbTDuBsm9bKJuqaAtFZwSvdoEYJF5g6daZyV3NpbdZRZ2NgE",
  "key9": "3H7cvkVRCjqRUCGER2NamG1mjkmqW8CUTaT5TrqCLYe4PNoaiw4mXpzDgYBmFMtUzvem5K5FRX63SCM1f2rnFugq",
  "key10": "5RUs1Wfr3jWE6Uy2eEGMYNwaDMBqwtdkqQa3nQphZZg6faJ4bthW6FoyALMzgoHgeU4mc6L46nQuavGwixEGD1HA",
  "key11": "5DDqgHvwtoXjd4qhuY3AGBy349bHkNuWpwoF8YDDEVae2xBZe4e3hSRdMYuYaFKKsty3QM2Di8XmUp6Z2TBxEWHD",
  "key12": "3ndMSUJzzS9UkU7DSSANtG5RDe3MGVYY2w8NbjmmjPJWt3RWXfCdUC2aJfrvLbKNn8pTwPbzNfZsA1EPrXEoXqaR",
  "key13": "3F6FWzxwxeXxjVEPgSdi61d9NNUQTqRYW1RQyYSE986SsjCUKMpbTNNJwnZnpzJybXXn7bVyPAFH4YXnBuc7WqtT",
  "key14": "4QkjzVbYTC8ArYV4svGfdPVzVxRUR3BnCtYNaKzQ1eXGotafPnXdmU3TVoUrC1Ugnj4vDpo8Eu3GosXQA6AwrtGH",
  "key15": "3zfCMsfwyEm46szaERPxpADWswNrUohPJCMSEezL5WGzeCMkfjsFbVU7d7f9AgdDmqzaSQZccw2xuJTWxXbNsX9c",
  "key16": "5JRkF7p2e9EdxgmCz3UzApNaysE1MnrCd3v8H3fir1ytRtkpRan3YEunevpjHP2fdM4Gx5jeVMnqezaGsMsXuF7A",
  "key17": "25UNK1jfjrdoY1L4kFfrfG7aiBH7qarbaKHTtniD3p91a3uJhexhCt839twixdVw4KAzetHLRU7Jzjx3vQFYM51t",
  "key18": "CBqmzxGgVTkW6ziZ61RPaaCvreJqzeHVqofWo9GwXGsqV7rUuLHhpRbMkFynMweFPWzMXcf6DtB2SjyYRNHnPrk",
  "key19": "2WdZ61TMSqWLSzjF7EVkexnhspRNdtNUaD6Cwb24rHbjGy9CaTsqHW2VaKmUzb16MFWTGHeJtC7HzTMpgcQ7Rvy7",
  "key20": "5EyoHGRngmNTAFyN2viNbNes4CecjPCHntqPnJMciNBuiHv2ZLfzaJJHamiFFb5PcGrmecKEKoRynvtG1LiycJTr",
  "key21": "2qZvYv7Qg24inoTzn59LDibpgYivPiDq9YBJgzMgxfmY9S6NGf839GNPZmmoZPt4nQyUGvD7BErMCHRRiptYjQZ4",
  "key22": "5GjM3od7igs4fnRZtCcWv9EoYJ7wYb6YXg8nL6EpJS8Rjyurk1o81eGthGBKNaNBYM8K56waihUCerMXbuuGUQtz",
  "key23": "3MsVYqnAb3WXCRDD5uWBk1f69UDYAWqPmZgrjLwDKmHW7WLoeF4dMtpzDDtuBfedBtZQ6abLbUaQ6hKLkwQSCiBh",
  "key24": "5xHPMUE4mWVFkJJ6c7i38jFdxLnXeX4Uz2PLSx22jMueXKjmCeTafoShWXW4x9hxzJpeioubKhKpT37fRAGDcBBe"
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
