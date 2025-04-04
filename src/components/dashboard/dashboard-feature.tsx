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
    "4NNCWg5TGL5o2uThCKmw7HcuWtGJaYAwDyg9v42AH3YyNJfpuoCvhx2Pzo2HaCX5Gv2caqJJTt8MpBvnFvB6WsLS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RNi78eXaNdoKKr3LMnfC3mxbcGiiog24vqNVL95dXqGzfE9SB2WpeHiC3SeyzAWN3adfoYqGvJVqhLzvu39nroH",
  "key1": "2sTJchVjapZj1s3JAYyCPjSxzBur2npbkWWGSHnKN8MWo2GQwqhVEM9zU7m1Z9giSpSfmK7zUv4ADQBjvoZRDnTz",
  "key2": "HFATjXy2Pbn331ZyPvmjk1h4uDnCd7M6ZdqrmTDH1bJqzJfiNVvoadwyfVEEWLLjDhQ3iMhuKW9FNYjWjjKviim",
  "key3": "3Mm3XGEnMLLyUGqpKrM6PmXgQnyFzzHZ6ECWAwwuFfVaQHwofKFwQs3xScqRRaqmpynfSsNLpcN1u1ixuA77ZCfn",
  "key4": "3kqEL9viRLD53mYKQw15XMvFkTvsS4BNAWFJ6zWMVP6Chdyos6gYL5dYUCw9WEZfhYnUkNDYtzyLKTuBhrhXFmu7",
  "key5": "5fHxChMjNMKXz3JVtE9rNQrM1tGre3jTtknp8fRvM7GMJb8Xr5j5PYQgsB4fRq1LeaHR8pvizBqnvzi2m6coGf6u",
  "key6": "4Ju5ErPWnLYbTzN4t4Ekt4JFANsZVonrKFYnv6YBXbrRzubKDovwtsjY5HE3DcJcVfFAjVEykW1mhscTwyGQbFxp",
  "key7": "3S4GH3bgdaE9rebZa4dG7R7HvAWn48Gny5tXBVxqWY4yqR7hByS5jNbMTFwZNuEr8Kb65vpEfrkvjcAGprCZMKix",
  "key8": "cL63ruSRMkuixhdxnFAfirgmJ6qcDxC3U2pyTvXYi6x5GJhtkpX9m9TBmE5gy6pzhZJN6TTcpg4KGDm9ZNNjntM",
  "key9": "5ybyRsYZpUFrmMCFfcvhZyuTLEYreKEGwASqjrsxM6aow19dWb4eoNAKs973rCgWGPjgn6xtWd9ZFebUVsGTYred",
  "key10": "2jE6GNHLApfkc7s3WvAP9vbkYVmtiQbo3CM1xXbGzXVD1kwPAoiztMWZFxCC7XRMecMW83ZTBi36TkKwrZ3hNu7N",
  "key11": "5xUHAZXbaVA7ALaiT2r46MrKzNK2jFLZEz3t27Qhzgeg6gyTzZLAYpdGQDPFWkjtyEis7Mx61dBqmzvouKx8xEj",
  "key12": "58XoPhBWr7JMSsbc3TAPoeCrFgCQF9R1yVXLgJYu4noaxXJvJcDybWQZqh7wfzeJj5AugrCXvAWSMmgvkxr3Jgve",
  "key13": "5RpHXf5vEQVYGw5bgYG5g1RMAvKAnVmQ5PGcbkpjtPVj9ga1yz2P38gw9FH7SWd5nTRLeaQPNmVvAY5uPBvPwCJp",
  "key14": "4JhxH6tuRXTtHqGY3WLAGAujdztxG8GZR4utUyFnDXtNopz8CnGh8SWqmmUsavANSnEeS1uNRYfpA6Yhq2hSU73H",
  "key15": "5BH2mwpTHfWhRrJ2GBaqpFw8B2fWVT6ABBiUidWPGEVHtmW36DYgNAFekR9yf3sTbHodHEg9sE1AMHxFfo8T4LPC",
  "key16": "36BgJACANZv6agQ7Q2F14wwdgRYERWT1c9SHNWqZanFxQ4qKrEAxCYhN6ovGRakNEoXPj8ExYAVFDnQoqN11mzt8",
  "key17": "2kV4RgzgdBB4AVTDf2qNVGaqJ7hoLLLP1ofgy5NJ5HvY3i1BZX9ajRML4pWB3nk2GqvNv1Tat2L2tvvAEnsF2Xc9",
  "key18": "5SrZ4KLX5BDUwjwd924S29MBs8YZWgvxhZdmERF5J9LVspaoXrDybvBBzHa9USrMd7JtiJoHSzU5so8oh5bGzZ3d",
  "key19": "4JmdB5wayZ6jYEz5JXmUHpzHkSxBdkyVw5pLA5NfwEuw2hg4n4CDAvF11JD27ZGFLH5UpaxPYyGuiSP2JuHxHD6r",
  "key20": "2iQiXizKvFBv5yoa63MrfgdsoPN62EthXxQdDoke72RNZcDUDGonzq371rS5oWuUAFL2jqjug9izpnc8YoRfeG6U",
  "key21": "5yqszDgnNdghngYBUzaGh371i4Dna4nVL11xNy7wVHx2DCoKxfGLUL1Y4dM36Tf7DwJVbzv6wddde3ULzwwosSBi",
  "key22": "4sKNnJsr9ugw35GnDUorjs5HkbRg9mkYrc5uqe6cmJTdYm5oeds1zBuXTQujDgWgwKQHFkgAVNdFFQ22Gyc2wNwP",
  "key23": "5GUSzmLZ15ndgS4xim4baJjmCQUebjRy7MCi4NKTYPkTngG8o7L3nB3UbcvGASc9naZBkbdXBBBstFxWDWta9xU2",
  "key24": "4G94VxCmmTVmcysN4RdwHP29GBZPan3c71K452wsE4zYRP28khxZccUSPYbdtDLw7tquGB4HNjWPYEJDaCeYgARS",
  "key25": "JBFgBkg9jSW76F1JWXjiXHBqeuBSQ742GCKUtUpZJcYbNmz113U8k5cdzp6stj8KK4a8eiqeBMYhDNiodtAT8Dt",
  "key26": "M6XQ6EBtHppLnLkVb6Nszux8Up1Qfpq7fJJqpVSURm23Q1XKHf9dRBxNP1FsS17m3NQ3EWydBEg9yA4TRF78zsv",
  "key27": "4Sn2g7mUMRi2nt24vTPTGJ2ZiFgo36ND4YkMUerLDMi7xwWgkcX3b2kPHH1WC3Y95Z2rhaqRPT4J3P6Z4nTbjeVG",
  "key28": "nZAsW1ACqNFruUeydjkqTmsu3TARR6fCehz63xzts6EcVLEQ4yicr9MFB8izKzKqGhrUCKKAdp5YMT1t77Cp93W",
  "key29": "58HUb2Ctf9Fps1MqgZYpdfXHs1jEEpjkMmHTQVawgvVKSjkH2agtUuiZd7VZ9soFDaXS34YdYef5ifxNUsihc9du",
  "key30": "64akaeshbFoddYUN7GXtJY9brwsLt6NxEXiNcUyKdpbA3cjU82sT7XtoWQfg1vYEjkreq6fTFFggRn6qhFD1Nbkj",
  "key31": "3Nbj5LcGwukTyUtiwywZfkVSkwAHVUH6kyKs2Zj4UTQgh5xDN9JAVKEjJEVVC1pxhJPUrDGG3ZDoJQUbAfU7T9Jh",
  "key32": "2YnG9ZkPRVd1Rif7YQmRdoiRsaJwCh1cFCrei9kvi25Uwbafr3YX7fWDbhws29AEcXQTTXbHopH4NU4LDXDFTWVj",
  "key33": "4mBHv6WdWr2wF4sTEviSAMp56PYDyLYRkGpjCWVTsLRZpZsECwS26Egxz6o3TXKpLjdNhco9cdvXJYwDHTzZE8Rw"
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
