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
    "rnfucBkVYbK1e6TEmU5Y2anCLP7rXCwHEDas5DwLYG4cMU7MHHX7wWoqP1xK38YtM2AxgPyTAWP38iorcCsebMM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KUxG3qw9eSQEDshpFkhWCUTny7YAbbFFjMZbf3MPJhdSaqXEds4Kd8QYJ3BUkMsPpC3tDYiGARSdiGU2ciupY9N",
  "key1": "5Dmbd8snmSaRX6ciYFy3jRhKMgPzWfVgJsX56eKqF11EJr2tEzHHE13svRXdaENUmqLuoTfvB2ZeKc9bSEmcyxdK",
  "key2": "3nXuxgpiW3t6kXqdFt14NBNjLRtp7ryEWXLCLkVNiA1qc2MCNgkDkS7hjt3mjpHE2YvksE2U7NyrfxhJYUN6MEqb",
  "key3": "3WEN8WQL8bg1ieptbCrRB9VphLwN41uBkQm5NJxzpgugN4kpQ44gSPpAu1aTQYes9oLqr1NxKxD6PT8ijcMn3dUr",
  "key4": "4zwdFUJSBBBZg7eVWKvyvHBeMvYAEDnnhAvaR8R9kYAYH8kYXaZHvGq64jbWhCpQFkDNQ4q7o6JmkNCCuXfhUYfi",
  "key5": "D4XSxPcuv7XKMba9ZRWXcQVoZRvYXkwt6CwqVTbaQD35uGL9h3ETTbmKCAYwT15QFsWApDSu27ZhXXdPjmLsQWi",
  "key6": "2HGRxS2ZqRNyGzNM6DhTrioMKMdjYVoF2amWAtBC16ddDDuV9kBkY2qzGsazcB3gyfhc8sKR4qmtptipszKue3aP",
  "key7": "4qFvJYMJLQwnfSLUKvYHtGDZFGki2tzdeiRgvb71Pd9KLCkiver9pyHYHbGF6phBePWvaGgfeFeaMDzoAVphefvr",
  "key8": "4FJ2MijvoYJ8qSDASFt8K9fvsDMqna5sL8knQAk3Zc5nZP2Y93jiHqiSX5KgEgQjKiyqwUD1Gga5j21DhFvvT5t6",
  "key9": "4GF14WgNJ6CJrJM1SZsJkKDxEn74Lwes2Fv62qEKKtmSdqVDMqvL1JFcJTv6N6nhJ13YPEK3RNd5KbFj2JJ91LAF",
  "key10": "wF75tYpkSqsaTEft1sY8o47pcc7d64gc86mQ1mGPXLmEQW4GEv9BR6FnS5W3UyFHUUz272cGYsA45ZChDDdT8qG",
  "key11": "2KkFo2v4zAarGsrWZ242VpJzPdyvW1zXJyrQcatTEUKfULVm2RQdZXdchRVxeMGrQE6GvvJwH48G9jxyEGSGNjJu",
  "key12": "4SyNxcNhSNLqYjuXuDDEZeaNkwmuBisxS1BA1pXa4dFkeZyife6artveg2fUMh6CzaqQsPf5ja3a9YrdApKqZukA",
  "key13": "7qfFhwMXasZKGfjW9NHJAE8py5hv3C3FHRG5odDGsFk8WZ2HoGcmGqUkLgt1Z1nWyCsA5RvBWjJCamXnCd5Endf",
  "key14": "2oTBmWcJKajuQNVmgxvczMSYQxDCu4BjvEmj7fcaAxQShNz5sVAbvDrVkKqGi8RNP4ubwGPWE7uVrCpFwgAmpLkt",
  "key15": "4cUKCEZgNJbBE3SpShgrJgfrKhacx6SdoAmrjb8rrfUwWiUmoTKMhS3M9wZQt86p4YRBUtnDkRGUCWu6FWaJ2uVN",
  "key16": "2S4TnLbp9JkqEPMT3NwEDZA9UgxmKtcT76Z5aMEBDoFjqAmhBDKsNCKLzSdtnYmJVRafzKNXMnNpk6b4iLmZKZia",
  "key17": "2DN5V46xYokWGEnq7TzwUnmC76DGPNuAjikEetmXZxH6cyKfvad6RfPLEkJBDwpREH9HNu91UnksiJkkYovh5Ddy",
  "key18": "bzAh71e3i5TkBTCr77jvWjqrExH74dj3u8LQBjeRN3dbvknakjREu7PdVXH8mqMBZqXikk38WkmdtcMPnHEJDyG",
  "key19": "4hgtTE4XoGF56YFzNtWAt1QAFoKLDVYXuHE9PDkftyAynLmHvx2VVEDuBmnY6tj9QDSNZxtfCjK6Crm2QwfWwcZ1",
  "key20": "52Nx8n1dSiYmq6vzeSC6Hj2gXSN34uXHAWqhzCYZ3gpBgtSsCXGoxqmsc2drDR1JcmqynMJ5hvCWZyZpwqhbrSx7",
  "key21": "5sTJMp622M5ahtkXGx5JXh6ET7ijfNnp3k8ktwpTBmr4ypvHw8MgGbb5iqqVEFBxRVS29deZkZxu6gpktUewLouc",
  "key22": "j9GozGZ37vNcsYGUWrfGGte1kDmjkd4fBGp2JnZkxjjQw2VxD2vj8JiwLPvHQniJvmPQgrakh5A6Yyquh5FB2zZ",
  "key23": "48NhyraXQ3DHjzgP5m7L3opsc3nUwVMrag3cH23vWF9hBioakaT7T68WyjiopQNRNqz7UPVXehDxtCa6WMbQBSkg",
  "key24": "5S34L2NDgW4xCyCacDevDCXWB4LePSpbNsNVFmDeEBYT7kc8u7ACZSH2NwWHHvLoAYbQXeuXwi8mxMQBcMCpCvh6",
  "key25": "2viWgjr4qCfTkwzSLuH5ccfaubbNn7i5swfLBUnrCcdJbQA5Vm12vVcrcyBzk8bfC6pWd8rhCuY2mv1sDVu7CjtK",
  "key26": "aoNAR5Uzm5n5qFQyC58DN7ookRxGnqZaMqUHn3mRKhno7Low4Hb9H2yzU4k4scT7GqjpPfnhFFfsKarKciarc9B",
  "key27": "2iWsD5BXpitwPPkVsXzyeZFLQxmeHMWT3EbcR4yf6UVvaYCWpjQomPvu2Shv6v73if3jWkEzwbAQzRnyCcNCLgxJ",
  "key28": "4bx7QucJuRdUVaXtY7Ak3VYwLZguJVggpT2i1rBLt7XAVduyWN83UEA1ViHRw4uBg6Q1nKewkqQQXAs47rfAHAt7",
  "key29": "v3Kyj8jYdebotsGYncanE3WCb1U3copiQtnJwzf8nqhrkXTMQcDw9btDmZfFjqqcnmwhSr9Yo9PdEDpkaUyFhQf",
  "key30": "4Vss2qweLsfFnE6TrxbD1yWe62WsC5XXAzg9RHe45XtMhv1yiu7WxstytYERfZRqksBpVzDoSkrXfjDGPRBrz5qj",
  "key31": "4Yu1QwZtQtxBrDsPt7HuLLx3tzMfoXPQQ1RHNcKCJU1bVQwa3cKGWSj8vhWjimtubNGYUjPgTvup43ZdFzA4qynm",
  "key32": "2mn6BGuWbwSYgkeE5eYzve77G9VpWQVifXPB8uEo8cHveXkMZ8GCGTcLxYxU9J2rkkoPKBv63gUa3EhSUJNq73Mj",
  "key33": "4nTedRiTi38Wy2Q34HgvnVM6g9M3Hq5HS1kV8JCvSLxX3egx7nBbGxB8MLf7YCqS6X47UH7dBFkgtr9w2BehYrL4",
  "key34": "4Zns99RVBPeCVbih6wTYPHHvksBsZzGVywvHGQt55VqdpQgqW7GmwtU7QfT3pkdm1TouLeg6msBaRDqozRY4G2hs",
  "key35": "24Y5iKM8Xzi6CNS78Bj5Z3A3WQQoYfGoEKyizcgZXcrQgB5Y2fpxNhgWhKfCJT25QFY7KGBFMgXPMf2w4vtzmusY",
  "key36": "3HsEwvna9eoPTFGLcvYE4wiKr3zbj6iow3Qz2DWLLLBTE71gx38zMLXtoThrT4cswiXQHsK1hGjgUWW655UfYYES",
  "key37": "cySXtjRSHZk4aGjKetfjNT1sXWBXTDQFKZXrwg5abzrRLEkUfQwTYXhnNkyunwAN1J7R6jKS2riAZuQVHNgMhXm",
  "key38": "Tg5ghnHpuuwovoj87ya5tJYRsGwDLeVyBEaL4fHiUQUyPncZiCyXAwziWUvzSeLm3uCdBVakHmSvrykuD6U4BUr",
  "key39": "4SNgmV5oyU27D1A38iJdG6PcXCbX5LaLjRv5Me49MzU63VownsPK1j2hkcgX2kH2f8y3UUs9PSNXgUannJgvWrfq",
  "key40": "A6s9MDy2TjWYdU9A8H9kHJo9MSSfZGoPMmMXidmcGzfx2uvnnKjw7jdzK1TaLEZErzCa1W7MGrCDZgX6cF3ZjiY",
  "key41": "5PDqqft2MoZy5RDD7GUwr8mfockYXvBi9SGaaDCLwQTArVBib6sxsVqLKpgLEEhzFpk8ByiWbeiRQphHYgXraLti",
  "key42": "2CNruAZTVLgixBZUP8JejADkzUrm77ALGDp8vwbAg87DkPVn3SkMS9ehiNn5gKqpgSqRyku3WRJgjo3qtupmsuXY"
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
