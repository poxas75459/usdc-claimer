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
    "2CiNdQq7P2G7xLuBU2RMf6baDCjYvyyJsrrRFq31LobUCaU5s3vDavzFXqm6jMErmKJkqwrXNW22oRc1R9nvojP6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VYs2Mu4tvQXN7e9UhhQhcm6qZDsG9jJXbq5ZAVXsehjaadJBRbrevkjQJs2dcJaW9LPahMLpwquSCpEgLUsArjt",
  "key1": "3hYJZznCKmQjpeGWYrKxKULUFq1oHHZvUWiDrLrg6TskMAGsFbahEdtuDZqGdA7ixtWrHHq3VT4FCidHUjmR6GVw",
  "key2": "LAAZfKyhv6b9BdWViVr1eRahetsCdyTsBHYCeE1K9eH7ACLnmrt1x2hTwXaHRJ872RTxw13vgogNgXH67qLzFPE",
  "key3": "2bjUeSeRHA22xXjCoYbDnqpCEkpg2PF6ioG1xQnVsfgErqWbQvkXjuNrM8oW4MKxzoZCoVwGTj4RthDhKLKKxBm4",
  "key4": "uU1H9mVAXQZqskbHxsyZuNeexb9xFqupZjDM4V4qukhuDecEPemRsFok9iACu4p59coiRrNCHnYyNcDgtAtcZ4n",
  "key5": "236jpb8iEE9JVABs61DW9sm61aCWTCzTHDfoAF8jnWMyJpTXDqTt2EZtgNaQENUjEsk16C5RgLiRruG3gUQVi4AN",
  "key6": "2jT17fY53WXwgqGHtK1RkEGDbDCZiArPA14ddsbcZNmKiJM4mzhtuWNGLYcMwxPF5TwpAaTLpgNSeidzNnoJLMB2",
  "key7": "2E22dkZvnmGwn9RLnWeS86Czv4nyVngTTaPCTQxfVq896xS3nXV2PWkp2DxsMB4hMGvxCA9N2sS9XDwDgdbtvQXN",
  "key8": "3ybxdh1bE2snKVn2R6Mor6LcH9xCsfteBdkwWNgGBsEbJfQGV4Ffh8xaiC4kpsPLhDDHMwFEG9eHKBjVsNL3Vb1v",
  "key9": "5NzLEPQNPBhdxZwSvBQwLPYgUBgRDMBGW5gaCBJXYAuRv2ecTSP9LWbb8snzk4PnNdj5GWDBCUD3jT8B395dG7kh",
  "key10": "TZMigtgNrU3fGV1N4KTN6R2zkdFMnT3jDNnYJCTJLpfWZKnmJcbbbeBR7k6Hq6GrmCD4QjjfbteYdbVDLDdHwsA",
  "key11": "CMtiBFLaKWLkt1PkRok6fmjzq8WxBfpNx49FoUApEV6mD6UB2sPnXSDeGtxCMVojznVjTM7KQDxR96Wo8oaJygP",
  "key12": "3UxFhgNyMtziV95gWt1QqL8YgYehZvNDU8UnQYA8AvmYzdTwaRaPUtm8HAvvsLv6C13NSP3GRFnDs65rheEasYFk",
  "key13": "4EyYFWdvrZvkfn7kJSQXcbodtdSacBbBVAmiLFm91euKzKHtR44odVUcXdyrmLj32zCTK1FUMcnJodWoTXsM7TGd",
  "key14": "23YFekVxPB1o6GF1Me37TAcm99SMizDMeuNrXivQh8T16YpS8G8T9DyLYEfZ3MNnZfwVq5WcySmthHgDJLa1XoVn",
  "key15": "2JhXtxFMSLddFgzLryKteoyXZ8fxGSsoCDBuZ46zzFMrAYRErdFwv9aGTeP17gDSGGxrTeFoXBUgaNNQDdSNXLXr",
  "key16": "4LqgpdqcU5iABpSCtGXKNg7KeeQC4LEAf9x1LsXF2Ahc6CJG2uErDX3Euzm3L4ddYA6p5z6Ve123UgFL3DXW2E3V",
  "key17": "4XbimAVopJ9c2Kg9ZqQgGZARRKMv49hS8DnJmimzQbMxXzHootLSavTKMSGeJKTKzfADfeQjqZn3dPw6Tw2MoTJH",
  "key18": "3s9Aue6c4cay57fmx58vg28k21d7ioSJCC4yjM38UivzYCAjRFVLVFt262fagYyqtrFUgYMdAnShguQYXYPugnhv",
  "key19": "2xHMHdbnVapypKremGXf1eYoCkFUsneVtxmiyiUdHAtQXbQtmmHCiXwr9cZpSuVbH5u1G9pSko7hBz9zsf8jQDsp",
  "key20": "4TFaEjDwNNvbCez4cM8dLkefVgJ3zg8AQjYLqXBuRohsJtGFUmXLWtBSa2jWecFp7Pmvs1GVoL9KM9ZVTHWFtdho",
  "key21": "KUhFst91drvpK52qwySDj3vJvBmMBwF14bBWfH21HcX5hjKJXgv165T1HL8GFG6GUhYKRKVNAtgqyQCSwbfSYnT",
  "key22": "5RwEgYVP4HXfDRWQfrMKAKvJChwYS1qsr4Snm8xuyEAMKmqCv4AaXUKHjVNRUPSFi1UfKxcYmRRkgiZjivx3je5g",
  "key23": "3xCHNhYaNTWKAsw1v4pM4v2WdpuWrFeJiaV9w5B5kyPJJ8sXytGDcQUAnETPgF4tcLNdMwAJ6ZHnUChBHRGWeRQN",
  "key24": "2XXAAHpGGwJPFJiJhhcugY4pvqjqjwiXQrY7rPA46CZScSKLTtHZr1dv6H98dGiz7UQXKHz6vjLWb6UaNgqzY17j",
  "key25": "5UtHXoAvERTn151TLANfS9FXL6eWytCnFLoMKthceT6jJYrMGgaYwiQxmziNpaW9ce6sMhbWiHJ5eJdxoYz5Bp1U",
  "key26": "4oCqepeHCxQUzjiAU6z6QQV2BhLPMSbQTtaABZqCrppU7vpJSWE25YJBrWcgRvZPN14P1ojyDmMV9N75oKEkFpHz",
  "key27": "E7SSq6KDcU3pm78feNeBMM3eHdKBiXB8WXFwrMSPkVQxANPuNCXdWD9z1pEgYefUZXqxBeKtu9qjGSgMEqgggR9",
  "key28": "4nP7ZUEMG9cpno4YwFPfYRDuQjJ85Mx9cW8DDNXaJD1KqdAuSaVukBpSMdv7HDXMikwc5DcWVq6ryqpG6ZSSmJZi",
  "key29": "kdmLAsdo6aqyfXqXy1EsyEvnxjWJDnyBEDSH4J9yEmuJ42LJGyE7NNvfDNmPuJF5ULBywsb9tiLuev1EcqkSd5t",
  "key30": "6786kFGKHTZ8jtCAfUviWyKWrYwucvcKFUZLWmQc1PnQhgCrd7TD6ti95izDBydGxWL8LrZmLKNngcrbvWpjMNfw",
  "key31": "5aqQjm396R3SK5eMTrFdTkCfTUVPaMjHm1ntqW3Uuq7gwvRXnuzFY7rusjvRYWrasQTonMGWoxBwsMJhLpEd4ct4",
  "key32": "4xg4EjkgJMayYyuFf4v5QpTjqazmDgaMK5nGCyarRT6AyXEYAjyLFaahDzxLyEntUjza1P5eUCevrwyDnxPUovvk",
  "key33": "4LGQSdPrrKmq2VtDJdWU1qK3uycacJEvMtsekwNqgVR5zknGFkSVAJ1c12AzjSbAAPjtUe8fhzzLSWShWTBBw69T",
  "key34": "43XUm8BH8TpzG66rRbkRVZMNCsXnVnPmhvWfCy9VUddzumAzpiqtk6VTkPB9Q3tUVDLLZRb4BWHFRERM171mgXJU",
  "key35": "tuj3G6pFwJqpJiaVqqkPNK7ZgFk1vSDiNEiwKaXAwSUz2FfMVGLvCnWrwsCAqBGqXAiscUkh2U1pabYh5GJ8FUJ",
  "key36": "5vPmHuiYVFfQbqeL8Pj9Fze24LUUgBeEcjum1K2ysLn5zZFowWRFQDmHkgnd2zi8Fr5F9jpjP56kUEDD5MxNBhGu",
  "key37": "4zVfS5a7ekCP5JaJ6wvBYWNfgh2Di8U9nk527aThSv4KKoQYMQDnVpfksqg49UqbUQqtp4t5gAdtDjfFmVeMXVFd",
  "key38": "2Sr9tcDvUryVZYZugZE6ktA2SudusTSccUywvUQfYXi8y1LZhdHYvZHeUuVkE4Ebij7ebRZbahrxY3Z6NwCgdT6b",
  "key39": "2RAUpedTds2nNHXrnqiDB2i1YUhoez1ok7msCGHduUbcj7WCLBMnGJhSjqEsoumDPemk6tgY3iZ1BRJRXHUdWyam",
  "key40": "2JrK7cq4WVDo92errRQya7J9hqomRfLw6FsNhsSNmfkd3rbyDb2HoR3iHB7MPmghTRxnKYwW7XLenNQQW24yY8vM",
  "key41": "4gxaaCKFPyMgiX9gKf6Dua96q8FFN54wTobcdsiE8FtHuqH9UjYXAGwySeT82wWkKbRuFPRBnSvbxJCGR89NCtZv",
  "key42": "43dxm14ZjWiwkf1aYAUdaoT6B6vBfDaH9zMDKtXjKT379fjW2fRp44kKhYGZFrLoZurPjioD3W1mw8FeF1dpt4rN"
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
