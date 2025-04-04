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
    "7LfVVD8ss7XX22XLbCyS5E3QxporKP65W2ZcPsh2CBAyS6VfdyQwDhKBYrVnZktFpKWuLTQJ5Pp2ibZuawHfRp4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rFDd9hDzywCoymNtnUPXETCx55pjRQb6H5fUxVSyKGxRb6CxaWT5jzLcsXwztFAe5pLBQy1xyKnnR6DvVWWuWHX",
  "key1": "wJPgqiodNLxhyWqtHthKwEFjkq9sbvo7TH9eKBpSsDeFbTPofL1Fy5SV8cy5jZMmohZZfhnjsQJAhydQirWtDmC",
  "key2": "3fS2Y5XbRgmAEcQD5xMeFjXgTkMegRHkjjHR7LZKLN4kcWjWGRAVhE6YCMQYE5X2yuME9vQVzra9XRL7MRSvWbJU",
  "key3": "4g2iR8oNuWn4peBDJRwWPCCDTMHSAczEG72hyA32shqTjcJKPLYYxbedxuR5nTU2eRNu8fN8t38k6gB4qtJcokCD",
  "key4": "2MhvUCfV8Z7eBvr4e2MNEh2mAXLNvS1MGCAfLVCwp6qqtD2wUQvaMSL3s92vvc9xe6ZyLNS8AsGGEkz8xE8As4aw",
  "key5": "cF7FqH71oeRbMjE7tMUA1GwLDHhaAePxvkV3fAjD3nJCCjxG31N9q74Wy9JntsT5FZFShVpFXkgub8kCrfdBHq5",
  "key6": "2SJf8xykZhX6jnZdZRAidQZLp5efdhqB1Rg681KcW6g1kybq8xzuvwCFM163EYxKysUV3Rkp7Rqu4niLSUBRMU13",
  "key7": "5kBtR6qcg67wKHVviPnppmxuU2YU8Qthf8xti5soUY8WWkTD7tVb4FUXJYKkQXuGcq72TjQUVU3DNcFrxJuGK2MX",
  "key8": "5TiAmJsAE4d43188jmK5E3JFEbPbTiVoJNpzrbF7A6zzV6W7aK21Rqr4dwNumYJFn1Pq4nCCteTPmQdveKNm4HrV",
  "key9": "3eRYm8s3qjSEGpJLmeQ9mzJApsZZduSRMuRRaNRBAwHZkB3Gb2DGpcC4inUcC8uMiAHrEB9YhPYPXLorcmiZra9j",
  "key10": "3GwYJAD4hf5c5j1HCWAEBKEdrMk7XvoyxN7CWzBbtedDZrJ8WQtJ1mmnzXaJDKZxYK88vZgpC4v9ZgivCK5iDwtR",
  "key11": "4zF6qi3wgffnbVjqj7k7u3KqfcQjSLoqyUGLa6Vyk32MHydZndbQWt3NoQdLRXes8GonuV2sJTeTuZBRpiD8DFb5",
  "key12": "4BDUsQib5MHLKoGT2kRtHHoqaaZdZUUEkZSTnQHFt55i76jyPA9FZFvM57KND4A7SuLgVL9BTpGG2Ti8Qc2RKZUr",
  "key13": "415PC9tSELAgRTm3McFPsPEpVjPm7snkCqzL35hSJnLuE2GjWHoGLwASVEA2LGEibkfFiECzWMiArShvwNi4TQRW",
  "key14": "3V5LRpEtbSgu1y6uYg6f3DaYN9jShMkAXzbheqeUssGuvZwyGy6bptKdt4fkpLnUpgXUxChXxp9n3a8LhUsyAuMS",
  "key15": "5wVui6EJYSXrzhUnTaBtTG371XHkLEMXRq66SdsTf2XKauTbgC4mQfkcyGF4mXQ84ehgQF8HYeLMBWeanckYEGHu",
  "key16": "3qGKH7PtJjsRpVd3XUNCg9J6NosVfY36uf5dMq752uSzFRmhyj2Cp8d9rhn3nFj7hfmf5osBd6E7wZJyXYveRMWf",
  "key17": "9DuxQHHqmfyYCKmKJ3C3Rw6ZiXUrbqi6XjWA3jcfSqTvoeUkdTX4GfgU99AGiqvtfgWc2Jy4azxs4KVg5ufzoEF",
  "key18": "4TSo5TCnsy6XQi17SD25jmPEPFZuFzPgQL9YyATj6guhFHdi9Du2ragXoz7jjcfDzwDuD7nUxAhTaneebApCmJgY",
  "key19": "4Vc983ZvDfZJFmoDyNxvKKbcVnBSPm5vccezMpHUhdbJ76sXX2nRHqLws859ic95hWQyUAfpKYs8Cwtp6QjNp7MH",
  "key20": "472ygvE7i4tdtrk2RoNsCHScreign2EfoX9Y6eofvc2aU3bTbvtfBYx66WPqqRyd4sbn4aKbgG127n2ArMXfUyLY",
  "key21": "3x9ApyUs5STE5JCCdJf4u7BNwbrHmo5FVgNxxYhqcBA8ddmDSouDXP2ynj81iRJpfxXsX1nAHYeNTmA9BAkGTdZW",
  "key22": "3ZefeFFRLL61dV6bPgiWfdwLj1pxqScaHtaPBSacSCF6D6wsDNcuv8sjbM9JqA6Z47w8aU5KCjJnVNMkcY2yF297",
  "key23": "5snd8MikKAco3y5zvZ7oZ1Hrv6iVjdAC9yXVfe55dpNJ2WuSScRocvSfvPQoWwzfJdZb7DL5RPy9o6ngsrFoYN7S",
  "key24": "iH63yBMm85UBJSwC4ysk55Uem4b4yW4WC5PfozHTbWLCLXKiXN8xjgGe8K4JQX5oZUqrt4Ws9zZwwASPbC3HJgC",
  "key25": "4bcTbK6Fwmukxvg9ChRkcbfBaWWqoqHAqR3PN8DzKsFXWcHbdEB7dC4Kk2trjTpbXmCFnrZUfZ85B2htJxWdqRqr",
  "key26": "618npyjYxCNoibDUPqmgb7zgFNwsGGdWUZSyeaB2GLhPLf4TA64LYSQjgd57vqcuDCP28cVyBHghSS3YRzyMJf5V",
  "key27": "ztwUrnjPfEkfwqeLc24bTsFLZwQYU7T6MHhNHVyzJjLyXRux8oPunUHcjQgiQeuKwpXwNzx8xwYV7BD7Y94HBZh",
  "key28": "5hyHuJwfPFBcSuse5gPaReHytrJ7XodNdLBwmnczpfwyJ46pUiVeCwwKEkqaJfZ8ucCg2oSco8tmkA8gywQPHgj2",
  "key29": "5QkFxeLMTaS4Yd8WezQERgxGgtFw2GwipWxA4df96TAANwuG5DGNcrHQuwnrRTVni31uiDGkXdZU5mFKCo8r3JAe",
  "key30": "3F62C15tPAMwt1BfQsmH24KMdVCtKsVmjdvyYx2Cyc82ovu9dsM84JrxRf19nB4MxHckjMie8NBYgW9ScUWgj3Ur",
  "key31": "222U16FQKdHrBW4QenyRsCYdqAuBQ4NSWLDQcXZ5BSYmAnJrxCiCQFtjXS7qRPBSAPfE7XA5DvFVsCHyeiY2uwek",
  "key32": "2DnWxL26XoMVDPagaoW5kmGLSRz5kYsgHVPq7r2XRvpjMyQFsyWkAAgZhDjeRaee6A5EwoxdjJdGcMkXyHt9mpqX",
  "key33": "2QLNdrK4JSxXMQQkUNe8V2ACjQ2FwSSx97wKdpZJzCYRGYSZyu4dpbz9vaJRaaE5gucGN9jvEPu4sE4rWbSTveGf",
  "key34": "3cPnRY3sdFH2HkzMmKHL7oRcYPXBJg2NWFbE1Nhpugn1w92QMFKbT2WDhD7PdtQ92PyVDzvERYCxHM52iVaaTG4L"
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
