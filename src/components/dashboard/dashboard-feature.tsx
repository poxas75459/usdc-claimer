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
    "5wFVJJeCG97F7nbWejXobFLExma67yNjA891dvm2kHP4BQ56YX8PtmESCoShU6gMfNJmu64UsjQzZJFcoYaD4osF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28A6cKie7ezUYcg3zEpCQ8LGL119QBEEcgzDNBEHHQcF6TpkkZGHDiVAVV1UPrv8xJSiudwXHCZk6DQonPbHzvNP",
  "key1": "5DfZEpQrBayeQDhehTJFiXXwjRYdQdQvwgVf12rq497z8ZHGcN8kX7qpjVTCxMKnGHaF7gwFB4x4bdXJGGgJQy2h",
  "key2": "2HRiNkp18UbTY6JYVUpJ57MMKdvH49mYc2AVwtECRCCkLWxyG9xzZ1uYpyxoXpWpyhBFQQzwWqo21fUke1UjWoJ9",
  "key3": "5hZZY9eGB8ynRXU7dDRCjH8am46FCkDbnXmy6L1DZ5xzAs1Ak2HJEM6bmcaMQWVuCXUNXQTR3TtoJGgLaisZPkb7",
  "key4": "2QkhLpXAnRyoAs63RQQ2C2a71tJZ8SMhwei9QeoSJjFhoUxwKMvfr8Tz1edbGyNXAZeCnTN2k4Qeg8oDGfgfAZSA",
  "key5": "4zDs6NKFj4bMgaa8bMGqRW5XWL1AzPQqERcZod1ceTQtQMc8TsidQJu1MUx4iyy2QHadpiwWoPHfXbXB9NPJE4zd",
  "key6": "AGhfhBmtQDfX5J7hsoaCzLkLNgC3UCLABarmR58zU27nGiuoDqjkYtgsrRaKWYWVxscsj9Ntzr1xoMctLDo6NsE",
  "key7": "4bG3zF9A9XrG715CQd91qgnWwa7BvqsGBbWWeoCzAfW37fzKzLg7L7w61iyVuqnrgm3Bm9Eha8BcgmRssZTa3Gw9",
  "key8": "27bfdGzLdF9RiApcEGRcGaZ5f2wibnZtfkqPMiyBBzK1S5N42DrNpXnAjm1b9h3KZ7nqEfFPBWxUgBhde2E9YaQJ",
  "key9": "34xnUBTu6q31SkBsWXcBzbbU1xsg46bbxnCnmkWtdAHsEsuG9ExfnCfYd7d16x5AVs6GeMC6V6GJN5Q1cbp4yKyJ",
  "key10": "4Yib4bUoH949Mqj183cRVmBLcdhJGbq8FbEW8rBvy3NcAZ6GCEzZtJukxMvrd3YwfhPdGQ2MgR8DgQSVxNHecD9A",
  "key11": "2dvy62EbmTggtdn4arysyrSV2dkE3XytGPN141sW9SDCrEHJoUTB8YcbuqGynyCeMezLReJZ7GcPazPgYLkz3izB",
  "key12": "85t6NTo56fA3vpE1qXcUZfTBqunL55aRbkrPAU2MTHhNcbEngNo4uPtXcUL1c8nDCuiD4DGvtgYoAXzNhJPVRhY",
  "key13": "3772wiktTBE1hzoQCtSYMwjscH1ceoLH5i2dz8TQR8n1yq11twG4u9hTsN9CBZGPMimEyc2FiSwAJoCG5JTGaeiC",
  "key14": "2tNR1EArJEGUD2YNrAGYPqjcCePfcsiL44YF9agyd4Gfne4f8dvXrXrLF2eLMoVWoPXKPuNeSWqdeXXwKQDAFGyy",
  "key15": "e4UmoaWxAxk8pTPYoKK4TK41mTFa37BQzfYLjWRpJbkTBvjcEjHQ2YcE36GRLu1HpwSUTwkrDA266aV6FatPBpV",
  "key16": "G6s1Lt3buXt632s2RNXvwC5dG44DdATLMwfB9fx3ZdJGimnqdCv3jQNXBoyL6Eor3gVmvboCrqTaSHH44i2Zd3Z",
  "key17": "5tTmjE2c31YbkupvioEPUu7yDhjTNnqd4fvhXKGd6s5ENkjCzb1QspHqJ1ar9wWKHnfUfHMx7yAoWQsUcb5qTFSC",
  "key18": "SZfEPUo4QFakm2B37dpb2PTHkqQT5Wu5pHiSRTq4qDiHuFw6eQuSzX3N8eEZ6vmKBfhMqXdKsuTUhUwSUxxDN8m",
  "key19": "9pvsgCdmrSKnQ9zFSyDTmnYhMkutN7kykDgQZ8LH2hsEUWhgHrVsZ3ctbhr8GtXVqaZnHNtkKQy14TZp9himjjG",
  "key20": "336BCcPQLaL1XuMbJeghNY1tp9SSM8H696v9yhsYiD7ShBFqtwK8UdhqWEfQ56dPThsM9sXiiZSEAJJJusEdsyY6",
  "key21": "2tCwRDhXS7CZyaqqKy5gkqkUSUAqx6AcATcv12i4iRTtBiiHGkqfhvzevSSKM6h9orDpuWVDhtWsmmgUAuAH3rrt",
  "key22": "Mx2F5VW9dmyhXuNSomQDtxou4Ud33K8NA3dTHn1tboQcCrg4C5znDcsLJDNg7KqWHBZ7gm8ZHt5aGEh2WmJawWJ",
  "key23": "DZG1Dq4FWpyiB4dafQCLfs8xsHQYGSxrYRuwRbNDeRxdXWSTbpbdcHFAYddXXjfToHBAofd1zBgt2GPNNDM65Lb",
  "key24": "4AfDBNfctCwReM35As1AVcpAGKvzREejTjoGHahTjvuXNNvKyRLcg4amWpErUfYLJEkSY1x7ZNPxWEnkbYGiJZWp",
  "key25": "3ETgDut9UUQNgTF5FGRcq6eXoXFZhtM8vpnFN9AaAXKrCbDDG6KXXrDMWWjRXLcaNsbEH71q1YjaCTaaqqYQSeCv",
  "key26": "3TMXtGnojEEg4izEHpvPdbxZR1m7BXzVJU3oaJNJrTvjwrFmd1YdF5pwXEaAGgbbN1QijrAUy8ckEs5ZrMFzzX8w",
  "key27": "46csa6BjpMgKg8dNWjBvLf3GTSPWrZQVKxVYXxEfsFUNo6N39N2WMELQk5WjJFoPtCaziBGZXfY3bgQsjWQyM3rC",
  "key28": "3zYojexffw9gr1JwZFQGWWWSwSvBSB7wxh58VPGP2nKue7neGZYR7w18t72WDjtArhMiSuckYbVLKT2Dmp3ZMPnx",
  "key29": "3mtDvKCJGWHLtVxDD2h4pvKYRPungM3sBytyDVFSUu1j61wmDFeZugPNxkLk4DaQyMxNSfRjYZTQUCQNs5fB1ckD",
  "key30": "3wSNMpP9T76dgJXhMYvah85DWnrhveGCrwwCFae47VPkePbLtsfF2otLtPRqtTATdkdkmVG43vafZhaH2ets4cbc",
  "key31": "3v2pDJqCy9kUp1dvyWEHg8qUVSkk8bhik72rpZqmcJFNbohxnNXMA1yfQF9xv6DWqP9XdneueFxAqHNMQBuhkCoS",
  "key32": "3vt2PLsbXxNbpDEoYoq2Lzm8tMriZW3M8tkNjNbiBT85ZBxogxHCZBQUBiu4Yrin7Hwkms514bv16zaHdpyQKX49",
  "key33": "5D5Q7a5oTAZZA7Fp7we5MVDupMDk6ERtbmEdgfT4h8dGiMCEeCTM8nXqYSHQ7JcAfyi65GAymNiuuYN6avtyjngS",
  "key34": "4XgzzVcD1wfyHtZKHPvRAW5dqnzvKhhGk1tvjpS4c1npQoMn8iXJBg4FPb7rC3aW3aC4rdpsPk6vJdTkzoMMwD2R",
  "key35": "4GBL2Hd81TWts2MHZTcVNUjEYd9gTLQNTPoKU3QVtFJ4ght798bSUoSiximeozFz2yTeUMDB16Z4j74QQRKvfonG",
  "key36": "5aH9Ak1zVVeFgcjFYY8Ay44ufQs8895RSnHi3rdMZcQGe1rNAD5wQ6NXXgCVpc5nZ2isfk46XqJCXVfKzYZLa8mb",
  "key37": "ecdq3aMC8fRGpopZu4Qn5m2mYHmfTqbhis8DorhTCroiDcR6yRW6br79RhCyz5KxRUYfpGgZCt3FLVJGUDcdH9j",
  "key38": "3wumrsyGiWvs9dJfz4dAMNPvf2391gzpR8nkmc2P6xUBXLmnzK75Kh243ph5WBNNXx6i43b35FrTr2g2rdwuVAQf",
  "key39": "3NuoDwTAcDTyHDRwSX3aRUxa5sK8bfgmiyUxhD8LWZS5btts7janzsRwVcMRyhR7iLsrCUpNHASY4tbbTUMMJxfV",
  "key40": "3TjyWsun4KRd9VFsLdhK5obU8cBem2ViFAAvSHd6C1nEFkWeZk4FN29J6A8oGEXd1PtVQRCLnwajUof7NjAaMz7p",
  "key41": "3PVAE7fgB8cMggckCs2FkWMudkTBh8WbcpJxRNAe1b6mfSBZyAEtMYH6LK5zNKSk5QKaM7xZRq5arQWw8bSVr32v",
  "key42": "4ypHKc37JDtPbU86gPbC6hAC6RxKHM84sB7thsJDzkNdzxjTgXJWYBo4ihUguCAdGMuoEs69zqM2YLiwUv4ppWHN",
  "key43": "3V9DkxyjjvmgviJntV1DCbKAkudKe4MmzbFbhm8RFPzVYLRe698BBgPvPnTcLk2U3CvBVKz1YwrGHKRQtEvNdK6X",
  "key44": "oQJjSjcoD5PmcfzbPKHmP7z36fsn7kC8oAi2ZXi2VxuQD9JjVfmyiBudV84DMkXkRYgS5yxjn1QrJ6yEPhoAuAT",
  "key45": "2FRZGXPJJ3F3srcfv48Ftaj5qq9ine1JSYrry78EEss984sFnnwxrVgYHCXcZS8vZdUAHiQ2ndnKLkadjcdAJpVn",
  "key46": "4CsQAXjz6zb1MdiYEu6PAgzwm3BNiQn6oftgRZZmEa8tEEQsbVD9j6qSgtdwGkWM6uSNLbfBSVTUA5zdZXTvTUDw",
  "key47": "3ba95tqWTQeZ4MPrXyWDBM2Z9hSJcaW1c3VYhi8now6KcfLfRM72wgzhUVp1YLD28caj3BxjgMFLyoh9U56bqBab"
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
