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
    "5zu4XiCDF5QD1BGMmpSNw45oMAuopLQefiLDirFqzjMk1STDqeVtTe8815r3VfaTzwctbdUMFjw8FyvcPs4e9QwA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mknWLuNnqPoRr45rJ9nf1n6EPptTrPGwmKYgmzskCSYV6d9CrPZ75sXfA5CkZXuVMg9gA82T1ZLpNJVbp6h47S6",
  "key1": "4VvfyhNhnBToEDd8FkcdzuJJ1B6SNRjaW2UnfD2pYt6vKpBeyddGdyeBzK2i6GxwNKQdchFa1vGn2Ra9yHNj5jSQ",
  "key2": "2otLWtcbHPYWFzKz8HnuSGeBGaUGiPpc7spSh8WaMpS4hDuZdgcqj6Ya1RsHQoyqjc5MJxERAv6sHFrK6wdYfqyF",
  "key3": "m6T9dgsZvfm3y6hkSB8XnbHTmCDdfSPHPWvyQDJQqAra4KbjCT7cNvpUCnnjhBPyMc6j7mgHMkyZN3UpLxw9cAA",
  "key4": "5NCFW8XJgcLosQgCFdRVcyR2gBm8ZR8KgZoqatArhkaCYkJjNtP8nqVdCX9xXF5usaL2YTPE6j3UwmFcbbeVgYHZ",
  "key5": "DX7Cp3P2MXxWJxiBMoJDkTKkmXSwiKihuU75rVHHW9yLdzbSchscdFYuRTdKty3ovWq2uEGsagNJDu89ZXrfVDo",
  "key6": "4ac7ibYtov9LcSnK8Z8xzFjofCTuTudeBdcoVkWF7htMbbYKKQ4onyJ3yoifwT8Uwnt8wBG1i2BuJiC1RWEXcXW9",
  "key7": "3nhy56vHSfjM6K1Z1wPpkV1gEu8jdxyrJUWeqKRVt4jZufp7GTxy4WBoimxcvb7KRWP24Kiydcntp1eLwf7T2vaj",
  "key8": "3pw6jJDu5YGUoBDpanLB6LuCoYEtWz1KQMtN95crHCwruzJcFt9F1h6d5zGHejDWASQuV2eycR3gWUvrndLtKmk",
  "key9": "4Yyyc3VLtiwEAKNXBNTcv8VjD64tNDoxkJsG4pme1x4g4ZccUukJsr7NfN4R96y1UFgN4EZVLe2dofJJ7nZsojD5",
  "key10": "61SM7CivdixpAaVKpw4vjY41TZd9TJtzLwYbEfve4hPQ4wBG7K35cN7gHEHGmZxvwsLdgAWGGgykcaxT6kExuauN",
  "key11": "37a75dvv3zJQmZ6r4GJT39AnmjzNShBtC2pBTUvzwPE7wczk867zzizqRVGDbK3PDuPnjZnCGpJgnmkKuDYcKjyU",
  "key12": "5kheVeJQc9x9yY3DqCppVBaJFxKa9y2zcRTUAacgJ5HeRJhRHYdLL67ZNbD93gW6Wr2EzFrAonaxcXADZLqBN8hQ",
  "key13": "2WrBaKVPsg4g5kPC8WeGh7mPA9CmXVGm76AWvgPT75wEsL6SnCdtGgf4v9t1qFYv2UrfxQp2iYvFStupHDLHmtXv",
  "key14": "3A9NNqHtgAGTskxHsPoNP7ggwyExaYwrJiEsUwSrkSJEtJWsvhdx6iLBF8SdrQAhinBf5wYZHbJ7VdwN75LKp3j7",
  "key15": "45KJCaRjX4hLdcHWSqrwLjMYYsK6GXW8gZGHmHReRZark1jcfda2CSxuhHKxQoWfHViAmWQsmH8ZmHJMZLLwkUpD",
  "key16": "43nAKa2zL5RreAvStGuEi2b3MzBvupVzn4TtcqxKoBJMUvNjaaSQg8eWGrzsMgHWsgoEKuLptydNZdwnVJFhaoqj",
  "key17": "29tPscujA75pgjPLTBpFqH8fvibR15981bM1HgaRvffdzvEYGvwgcFUfo5RaDn1Wyh39SNHC89BrLXfZmEPXgyw9",
  "key18": "3cDeFvyPNiTiJNGQo51YkgfjfaUkYwnrs6KXrFAj1mgXbBgRZXSi2yMBsJu8YdCeE7cn7SsARLeViAxtdtzjiRQa",
  "key19": "2g4yswicg9pHUEBs2nbFfnConoUkbpW38hC7ujhsuqPYzCXH9ytDYgfAk5MjcCYfNTeNp3DtuxJg2tMJZ1ZwT7XG",
  "key20": "5FG2aYyGZQPVEyH7iuBpyR6fE5DVq1NDGVGg1evYYFcmtNZ25Tdt41hKPkbNzwDvLaticixh8X8ij9dXNpxsChdV",
  "key21": "2fsjHc2EBNcdshqsx5kJRYXJsR4dPp2JjjfVvwURKU3D2p5K7U1wKbXHrQmUa1cvvppxXvfn9XXdbTUezQsdMsbj",
  "key22": "43eeQpV41KnsW7xcHSjPsB6R9csAabyrYG1sgWGT7nDkvz4MQQt2JFp3QFknEja9yXwEk5aK5CwneSExVAU9PXS9",
  "key23": "5WhSYwcQby2tSTM5dZLX4yY3gfvd16nbEmFFxu7X1JUYTvcwAhxQFagfbBixKKX4QAd1Vnp473h2WQZCU7gxRtmt",
  "key24": "4a5KzuhXefPjE8GacG7kWB7Swj3MCjpBzHLLaKwMjzqnNt768H164V5xayd9myYyHnS91qzkMz4iLbi9XG4VbU9C",
  "key25": "4rmuU5TsKevZQZphQvSD41PcSJyYv8xY2ao6hZ8yVPNZ74YgJpqdzRxDqzveoXQxdZMAhnkk4jxcmmQLdFBX9ous",
  "key26": "4F1ajhDkFQHmU8aMoc8ziDs7SwYxHftvHAX4zdHs5NpcjmsFHM5tpeb455Nv5C2oKcMPY527dSXr3f4pM4D2K5N4",
  "key27": "S8iQPkF9SedcXC8KUqdLfR5Crfjhtr1gz5Vb62kC7jGMkJg8wQnabARnY8uZpHTsuCaThFRiK9kudPwb6cnrLP8",
  "key28": "23rD2LxkavdU72SG7FVeGpFtwj3RKS7CDtpsV8RfQL8jwnyJDzjykcqAAZ1EyFZnNbCWtMmSiaHKfk42pkx8Gqus",
  "key29": "5ac4EFK59WjMpZHV4HFw6xAgXtcTMsvmSFF2iCcQTNndJpviZznyw4f2wmeZxhkJs2trNRtmZQVXSqdTNQReenpD",
  "key30": "3RdyszS2HPM6JMVVLL7YaNL2kaC63acgsFze81rDivz9vqKmeeXsezLjg2S9s6sLikL9aDaKQxgSfZVfqVxYBkbH"
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
