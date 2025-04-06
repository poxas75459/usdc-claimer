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
    "5gPdDnU8SQh9Sv7kF2e5sNhDjufZQmZBn4AoUqRJHKsf7sgsfew8d5vGL7Geo16siP3zDLgWbWGJhZ2VNhEEx2QQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eJQw1XjE6fXF7Rnqt1o9nVKERR5Qc5ATZzaaGC451rnVUAT3j6XGyYzLSHjfvYhq13t5HjtfuPZmYQyqHJLRsCq",
  "key1": "2ggpS8TwQNJMoq8nfBbWiny8dw7efG7fFzUMd39TLpVxcH2g2H9S4DCA7ii9Wzbhy8FFaatLpvVEBqRTsZjb94PC",
  "key2": "2Mjo18cfcFVvihKWPPA3MLZRNWipg6N5uJJUyXLfki7dACrZho1KEk4oyQFMfbRy13HhusAMtGXoPEKPUoqK1aSF",
  "key3": "2EyLLrG2pdFwmaCxkoBUZwctsebuJUtjzrTBSRyub9ZhjTghGgS28oEHHjeoEj9sq8V1toVVHpy8ZActQGoeM86L",
  "key4": "3zRvAYqBMJxt9ay6VDbajxcKk3SY8JKeGJ34A9zetqWwkH2nQQ2w7mcZnSAHPU9Ma9xfZaYyph95HwLBgDtNUT8b",
  "key5": "5r668uXUgeyCmDaBqbuM7ywUKpPuwH5JKBjm1TQ2u1W3HM6LfnSrFL1Gj7DYAoiEU2fyV7975hFwMzsat1g72rGH",
  "key6": "3b8kXCEPkaU5X9LDdmHvGeEoh9DZMLpsHhsLdn6MZKfGBHTpe4pQKCEhwf3enDMarykwSxbTHHEzUrUQ2UGan5pB",
  "key7": "3DCqseyerCnq5a4vNDeKkYwLP1tgmGVPR1J6tYDP1br39qWC8oMAq1bbf3TzmtSZTAvZ6mFMtNFpdJ4C6pnGu87j",
  "key8": "2rbRNdBhthZeUQCDbWLGbPA99noMAy6VvAVHE8bQoN8T8tGzEtNJdoC8UEdcvG1FD7V5fGx7tpjrHjUtjPLGtbLB",
  "key9": "5PQhpFBKjU2WiY6wo7ncbJxPGdUcHyj6Mcxo4EbjMxNHRaLRWJdyMYxioTSw7Kz9KuQ7hpSPRm5ygewfwEYxWNtu",
  "key10": "42yPzSeG2UMkB4X9aSU27exfNFMz5owtRLUwcStgqtq4NKNARvkTPMsf7CHiLxCzepuXJioMUXrpJyy8Bx6wvxid",
  "key11": "MktwMXbmSP5VMxEpJbGPv6DfCxKT4gY6B8RKNgHjnnwmspD86zhWKYT5Pd2Fa2eHJZMvfbrHaoCS8LQU5cSU8xe",
  "key12": "ZKPt92MSycwPZhJ8t4kSFMUmUArMo6ykDd5Hz7E5h1U2Xmt8DtN9RHufv6jaG6XVEWB4XxjNgrGeRMbenkvLRFU",
  "key13": "37cWTnHPEjVMj8mQoWHF7ycwrzpheBZa9cJ9MMdQUDpLT425iLthKYQuz6gjSAdcn5Q5QgfKfirh4JswpxiC8RwE",
  "key14": "3YbrCwmDfBAErdat4W3R9ck1PfewDbniwJWRz9MsXaWkY1wjMWQohNV71kTXAkUqfejFBWHEx1e9LpJqTQ8s1ZXt",
  "key15": "24K4XcWfsFmqEWpau4gNABcLheKxR2KDTC3u8TMxMKxqBQtfVSL7kNxRcTPb7x7izTqqs5De1gLHokbGJS8R3JkV",
  "key16": "2uVwyapuyTWiSnk5EbjPtkwxcQXvWCo7f4qcs2RhK9LuxufvF3kDZqnPVCXgRihmKyFzTX4LQ7N2yHrSqQMJTiH8",
  "key17": "3E1XYHr2tren61Wb7WXoVs3Vdap9nmqibkS4qAe3dBLYXTh7RYPTj5GgHPtGcRJkkMorwSA4WNx3w3HHtTLnDW4h",
  "key18": "2Kr1MnkfMRTopkrPbKMq89UbiqAenY1pt3vgnwqRoEtpJYtzmmvLTMdmJbQqaoG4memj34BjeX6tY1ewpemNMVz9",
  "key19": "m7kEzLqvXDEdasd5zAtVZvLnkpY149su1VZdKeUfADyRvQKS1zKV3tuBEnC47kRwsnVrbNCcCZvo9TwVoKWjVUY",
  "key20": "5yQUXqZUGc56Av6kxSWu92aP2nuxpCtJQhnv6QichpNxbxxWF8251SAijHpoRcmdX6384MUT4SGWGN4wxLbcto67",
  "key21": "2t58vCiKHHFnezrhp4ULNryqW9gZXTcJeBGb8GvDW7VjPYF6YkHzSRhEPKuPyWPnXp5jytvH2hG21oVUB4uMyMRE",
  "key22": "4EtHCKmjQ2feMWWvw5Z9zirRzbwWiByeEhsushAxMTG9WWZDhR1fdn14kU5BmCDZTKgd5zt5xiVVBmeq2UeYXAuR",
  "key23": "yzGUud92Ms6dwZNseLDGDxa1vdLopaiPmxnJxs1BDmdSqPC1iyUo79MY1iMGT2w675kr3u64mYmoNLnUChghHxo",
  "key24": "aEgWcdxxYR4CLGcEQuKdtXQ2WZHpZzH7i16VMYD7CpFCU1gMkNEsi7z4MptVAkN5Yh2i7U8diSAuuJcyxoDUjjc",
  "key25": "4Pf6kTna5nKqnCrU8ecBwyCjBWq9tJxszL3cD4mJJavceNAXW8qj6EC68iMPADLHkJXjt1aFarYaYHZXP7grWPtC",
  "key26": "MN4Rvk7xsTv2Yxw4hNX9NjLrFgzEba8t5XjoDh9ENzmw2qAP5VSE6DXXntDeE9NcjSyfKMgenqRiiQZenf2XtgV",
  "key27": "5Yn7ofdm2bsY9n9hZRVc4434afootsJ44mAUeetyNuBnXXPK6tMeszYZdicz4NPEuUHazg6sv4KzrotWvhMqKTXL",
  "key28": "21pma2cCDEzhnbK3eCiMkE855jUYynhwX9PBvWQiBzFzmZHwrFrpfcLNcnc6CpoccSpgTAtGpKhdr5gChfnLB1av",
  "key29": "rGwCJytHdBWzo6eKsxfXMAEc5DyYYsiZooB8tBzdN6k8z6nfnXRKoCWw5HN7YxqsLUgVFydAvecSSJpFACsNy9V",
  "key30": "4vNcdMM5ii76eZQsHQaPe3FQjQF3XhKfoqgCKqCNLqdahXegfJj7Sxy2NTd1XFHHdmNhpsyyXqYDQu7Ntp1J6wzp",
  "key31": "5BwhvCJsCYXRxkwVetXH5AP4qj3rrUiTHdm2cpgwCCusJZSZ1KoXwBDnUiJ9tbtrLGpMhARDg3PjgfwphhewAP3h",
  "key32": "4ie6ig1oKA2MoHzekNU7sHXrcDAomVQUJshYijxuNSwEEZrdAxzfvc7RivAz3dai6wxF3L1EJKzKJNZBhiTrK4Kf",
  "key33": "Ff5v2v9TubL4baS7fcueKYJ6TN7nxgLRzkHZRwHycPKtZFkMjkCwmtNFmU4McT9ovQDmnm31N8kNbQEBnYZiGZj",
  "key34": "Lh2byUQbPkKwQQpntXZ59aaqo2ASrbv66Qx4uj2SzEQnUuCBaDvuVdeou4EDEGNoaGi9jQkdaYr82QmQXUY4VRq",
  "key35": "69moxeUCDBEFKjKtHfxCVgA2s7p6gSW4X3NFE5sa7d2jCU34Sg4rwpf4Ch72cjXdyWi2DPfo5EpJesPKgJnjiHv",
  "key36": "3uMPRwwpDYHZrHrdq7XwDaBQR1Bqa3ZLToLLqioqJURcLKq8xq9zVoaWpmyFSsotnhTzftn4DawxdKFSzfQRh6P7"
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
