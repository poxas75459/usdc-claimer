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
    "41Hm21Vx9WjCASvcoze97LZH1TEff8g8z8pQCXvqzXAPJH9YmyNCwtDNJh6AyVNJgkANY4TeyDpJzcj7meGrNX7L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28gCbpyGPXNQTVntcQqKFsHwk1FMNPw3yCc73XiLQTX4YEt8ZNfTmU3WwNt8WJZUf1yfa5pyHfUNYpnvRUHfoaqm",
  "key1": "PfSJys7NEWWqqD2KpAneQRjTjWqjvVfyg8d544CUd4Zg1uLunajAcgURf57Snkuxpw7NjwtUFFbosqNh9mhPGpF",
  "key2": "5MKGSU4Wgj9N5dwdoqnjRy2HBz6RhE8cJ91NxipWL8bFKB1Md37kZR8jF1QfesMaH2ncxnUVFVzoH2vEsR2amvvw",
  "key3": "tJRB5GA5UhjsKDJvdb8ud8PoHkHNpjrKnNPPjpjwgyVPfiPciRjzNEEVx8sPJueKUkudQ87nxqtnzu5dfYDveCb",
  "key4": "5iBwWCh5Us4TPtDWNSrHuRPbHXC3SXRU9zKDqjhGNAWKZ7JPGG6APKnwsQE9Mb2UXbxrY6MJsWKuiJqs7NAusqS2",
  "key5": "2KicBoYW8eEumy53r1z5WKtvvMEcRAAixUfr7pXS3f7TmBWev5RG149VcZLZGRZyQsFU1yW32qmQUwYbfG9cVcf7",
  "key6": "v8aZzNASXPxuCW2iaBnZLEdH3sU4RAi6fDanLGiP8M6KGr2Dh5ipwFd18hpZf4DjDpd8xgVSfXkaDXCRYaB4rJP",
  "key7": "5EA2dTVpJBQZKgnER9qpnhdNWAxaBb9hBU5Qq2Gai7keghmhP1ia89K4ePMYRNmLNzBnW6KnEeeg9Z47uLtvJywT",
  "key8": "2uQvCgugwefiAJpHEEjJtnHQoTFGkx2AavSvnDXP9oSr9F7D1SeCoA9ZNFo74JxEUpyTugTMftsHmrNAoCabyPU3",
  "key9": "LuSGsN54n8kW6Dsq8qU3WXRpQsJ3XXew4DiTT61RHt83LHk3tS6SHfpuP998MB88h82ZpRjhQTHTsmA9iLWdcHV",
  "key10": "2MJkLgEqoDw93c9odHPhgxPqTDJVXtC1RWEswie2NbtKrjaTipwYneuqiJNynTBtdbdRqujqDeyrRNEWATNhYHxH",
  "key11": "udAKivKbC6asURRciseCJJHptmqXfXWyqXKEtpuWv4b8fpmJfNPF3hsL7b89T43FNTxtJGpQRncY7sCxbWAAE1p",
  "key12": "3NRhsyMFbQdt32juN69Yg8W6EqKvQddAPuvKXrS6QA8WicGnq1GDZE3Z1xMcvrkV9EamwJ2vgbzLgSGgqpNhXhxJ",
  "key13": "C5BJ2ReSRwecTqK2xL7paygTp1Rp2qfxjsQmf1qMBQjn4NALVQNZrgsCsNiEpoans3PSxVQHBuxa5QsPrNXKGiU",
  "key14": "2eeEZw8NqhTvwtmxnsKTnNTNiwwEqsRhFV7AJdjSycFfdeeF1sW2oGqoWML6CRaWufdaEwh1YH5eyupiqvk7Xvop",
  "key15": "3fLAUbwphfW1YLFbiay3VvnFTran5e2AZvVRo3yWbLNfbXCKfQQadWx4PLLnioo1TPYVdCbmqMm2M3PHoaYYSfSb",
  "key16": "misKhRy6vE3smJsbwzFttuMfGPKZvqtb9HwVW9q3AV63ZWHFxZkYqKgxjeDievErrFRB6BvdA37RaYxAXP3Kup4",
  "key17": "VciiCEo4bCzAMYXtVm7Hqji5vVnYhJefoxDEj1ECnMJsoWyA6Dhf3tFGPdmU6146cMMoTHP8TSv8CwaHYM23Qp9",
  "key18": "3Uxd6x8XRmNXpegZGZnnXAx95WFwaYvQ2eMmRfW1si3hJsF8Sd7YM2EcfpMyX38MmmWtqHFKXRzEcNK2Dd1RiLkq",
  "key19": "cqkK8ViyYEuWSk5nP79piqnonvCrN5X4gAUnUgd2VXqCGaUgpjnV5ZZdSHA3Sco54JdzAzj1ycd3XiF1UWEinQt",
  "key20": "3wC1SBZd14qaS7gEMGEkBfHa4db46LjpLxZiDd17yTjtSHsJFjyYt1KvxTMDjtcHvJvMZoYAyFGfS1nKbCQFAw3w",
  "key21": "355jQCsDNQA7BzuegvY8dRHeBrbdbxvWn2NxkMguWdaAGAxrF7XeLrWpD2drru3pCssn6nkqHou97pSUdkhHXo2t",
  "key22": "2anKGzG5SzG3XyA7HEBhQ1196gmvyeJoYtHMuMQVH2hX6WRw8uz8vWAv6Q4KwE7hU7dXeAN21qhD7MxE65fRSBRR",
  "key23": "43xz1xwgqz9DzBzxxZyTHYGsaAoHF89h5y1HGiiVSmFtdiRrsmMhRdkr6YYBsRBhmd8NNLzzCZ5seUp1CuwKEAob",
  "key24": "3hRUqqkfS7Lj2Bc7htFdJ4DCojJzPVHQYJqZjJz62YQ4NhUAzWvgT3RSHNC1aCEYZz4cqzxDdMc4fFigTRBfRtUZ",
  "key25": "63RBo3HDFbh6U1RRThJsTWb1zvJ7KvDU6SEPd46ajs2hYxcAyc22xVcVnJ75vNAJsYo8NgdWqpxPzWiskTGCkGRt",
  "key26": "5U1ssZmWU8ZF4sqD1ynsQrbBspk2RXEpBEPAu9xToYydK4dijN2VZtJWpHq8u6VD7umpnVeNpMFnbQUL3hjJU5kf",
  "key27": "NR2cuZYPnfpvX8vtbcUXfAKx9E9Lg3XTdaCqCiKPPySjzM3m1FXewbpfZPiHJNcYgprcuxEdZpDjXEAx4bCn7sw",
  "key28": "mQP9joZ2gNzVhjiCJUZaHJUSvqsD6XjuuyJCB4oZHofnrmUdZeN3gXMh6ppedDiHeQvNezjCeEgjYVEZT4LibEY",
  "key29": "5CtVP7rjP9TZoxGjQ9FNWyGE7SqcRsXTXXYBDpYjUZAmEHMsGekPJAZR1wSHk5EueWQ7jvKHXFghzYeyYTdiSf5Z",
  "key30": "5KS2nWjdejMUtFPhnTnUB53PzgziPRwTovcdPEZEeE4nU9qtvY5ToxrMJFbLiog6vTKbGZxuYdGfpEwDUYWCGDLS"
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
