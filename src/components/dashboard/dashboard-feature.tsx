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
    "2oHXxGkqNHYbUeVZuWKoRSHWytAhsSrbty2svx8voTmRwJSiCtjP6X2fYkLzm6Yos6EKdSvMpS4p97GyDC1eUkkW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hrHUwGMT5dNfFtf9UwRFmKLoTssNo7wSx2fhc6u1DNca8foU6zxAGBnpS1xdkNcB89ynTXGArx149jjw3A6ZEkg",
  "key1": "2qbwxHAxcXzkXfhNX2hRaBzJEaJPLQvknDvUZz9iHDgJPMk7cHFoh71EnQf4xvrPxxX19of3pkNYwGfhnCYytiVi",
  "key2": "PvUsaGeRwCdP37coXWfVEk9w8sWwp6CeHUuo5Ac1uVQe2PARZnEkRwuSgbvsPp6QaXejsj2Fo7BBomaMKmjx4vk",
  "key3": "3qoSdY3k9VovZS8xHsJDSiW2NChiVjMMb86fuqmD8ZhfLiVLdbcZpghCUzQ4NX3nifNcdPcVcPPySCMXfbT9GTnh",
  "key4": "4sdQSxNYLN5GYP8jQubK44ZGG66fnZ3qU5KKxzr9EGEGRDweHoBEjztHdbeRCLU6b4C2qchiDTijmAqqjADQ76oh",
  "key5": "43K77HxGiQJHY8ECKUsgvQx8cbCNVwaXdSVa73gkW1ET2SuC274yJyzoCqTW9K97VSUjgmcKcdA668zam8xjSKHS",
  "key6": "3iQoW8EeUSn7z5fFJHRk65GBGRk12k9XjPk8VUKzjFpZZojjbhK37wJuBzphbEjTrTgh54UKdBMUbEoPrFdyoQS4",
  "key7": "3JztBCkY6MZasJtfhHdUnUKMmFx5qzeokmiwzTdrs5f2Zj8cArRWyvK8noizNcK2jkdAYsVNH5ywsmR12ane66Hy",
  "key8": "3DHPHrVa4U9SdNuqyGG9nDit2DWA9ginfTi7ZZHzDPGcBW3EVhpKYJ5Biu9FSvV79eTyBJ8Lrc3pLcTruaCCUfhV",
  "key9": "4ojWXH2HoseYLZLhHQV5J5ekpbTfDcGBtJs4TZTLiASMbqE2QT2t7kXQwXeyEtFSMqkDbH8TeJuQ9PuKbXMxUpzs",
  "key10": "4wEKU9MW8YMFRTWDx8SxUwDKmiYEzR6Ff48STooFnykf9vcgXawuy6LH6KcpipyxNjkg2fcCv5YY2hFQPJFEUGR2",
  "key11": "3bcvLiymMPo3Q8PSKica1M6SzYieTNMGw26XGgxL4TvCxc4xyEJcCZL72Ec3WMywE44hS3DLdGD7aYpAdd88GByo",
  "key12": "4yHD844LcdhEPVYKePAfU9PmenFNHE7karmtmQHC2q6MY2hNhsSyDP1D8UzXBNctajJzykn1jxWKXQC6sZs39RVm",
  "key13": "EdMGF2PRLX33zKxmSryQzaNic36wBGEgeZ9ZVYL2G42dSLS6MpxKwgCNpfBmhLh3jZbj8XZ2vpJhQjqz7gU6urE",
  "key14": "3WRK8CnPpXzkzeMhMcQ9jFfMTeVC3dnSbJDNkSnf2eQiAcs7t8Uv5SHN32TNoxBvx7z5YXey7Xkcu2ApjzDVE8Mc",
  "key15": "TZDZQ1jp3Ea8GKsaWR6pLSJE5TtWyZm5jUCtK7WVUjgqxpFijHMme2JgsFR7t5BX3r8sNCbnB23x2mbF7HqtM3M",
  "key16": "48n9sT2YfSLGoLST3TGVGrDwhUShBzk3Pd6wnuuVwKKiFuQBff2zSz6nXebZd4pacvUEiVdZcWHia87emxqwTo3z",
  "key17": "4FCGvHsCwEU3oMbc5WuVki2zzgYks62BM5WU1P8rHXBzPL42szo1jSiWgpzcRSuWbnMdGbyFuhcX7tsVjtjqe5T5",
  "key18": "2QkWTsvxKCprdFDFUxoGiviLDdiPDNZK49PqB7EvYnYpYmeSXsv57Sta9mptUVLgJfUrzQUdmuXBFHiuthHYvHz2",
  "key19": "M6QfKPsNc8qrTbPGQoXGedAHp5XFYcP2WayDs5nUQSFkibyBZkxGyH7Ga8gmD8xetW6kNKu1cH3LmmKEArJCVyk",
  "key20": "3uzn8HGhC6NGP88MJeMUVykbccnK6U77DmUQHCYfz76hBNfSTsKdTFZ2tQS5LhaYrNeAvVh9gCxrAX1NLSXtuK59",
  "key21": "5BhXG2cjepfAUjxQMcJRT1yLGQGfkuvv1wKySd1RbuxnBdzn7kBAJZ3At7fgsEASgTx1cEHaC8W18zTnVveyXZLg",
  "key22": "394FxpSBJei58jU3Zy6SGtTBF6VvmqAZjS7bsuCFsJtd1bZ9pLbCQUqKG9PZeFUscUqVqrRWZahY8nKFP8BQhhAs",
  "key23": "35AQpzdQ9eMQ3xTuxLNHbSFeqsXdZXFpyPUJBiAo4NFGQ2fcE28LdkxTtjsmM2McjTU6DDdDnLCziYykLMrJ9mss",
  "key24": "4kz15Rr3pLrB9BaGsnDiESLSiZe88jc6wLLbPFNmM1ViyaU5mkWVr72sgR7jhkuZRSthFKFChAis9FDsfBmG1Lc3",
  "key25": "5o2Eeehp7KGFiHbnDDYkpt5SDBJ9LxvFeUSmnbxDCEVZpCQZ6399mMngots9D2iYomB2H9Hvsf1ggNatyk3X8hdp",
  "key26": "4Z66UHLNqEKKomaEUFvdeQcYaEwqjZo9rzpPhmjiYf3kuiQnHWws7HXDmEUMx2aNyngRzjowmPdpzXX6W1Zge9My",
  "key27": "4GBAwBLvF8BB8mPGV5C1ihK6uJov1aRqjzbA1zRSbZpWQXNKKHNQN2DiQKofQarFuFooRnRM1riSYffdX91C3iAi"
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
