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
    "58NEAYZYdK1DuXieMvzjQeUD88ELWNeTFSBAAR66GPJvF3mrkHb3sNinmSipYKBjbmVjdDZk7jHdkT8JAiA8tVjH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w7ZJPqRhB943CbPCQZaEcsebCCv78eaV98CqV8Q3HeWXvzWXpvhsYqX66SLsht83GVHWEG21VTKRZfEAy7cBZxP",
  "key1": "3e5Kum9gK6Jqeranz2ML6JMPhstpzBazZXs9WSiDU9T29EBUsE92mkyyhojb6WK73VsF2DKVfkE7oQrkiQmWsLR7",
  "key2": "3EnzXeBq4NmV2j9E1PBSPBxpKB5Qe5HEEZRmtTAq9PWjcxRGXBGaFZEFL3wTXany6yk8NvQCQCv6CpiRWUnvS4u5",
  "key3": "29tXZuNuvKEAF6HMpyFgt8Gk3F8zMrBaAYUxWtUVn3uSEw1KVHyvmpbmq9BZXv2vCoXcpYBzWwvKznnfZDPAmeEx",
  "key4": "RUbYBdAht8eMW4UJ7uCHqeT8g9URFuUAYhFcEemfnGaF7XdenzSytLw4rUWuNxAMvmXbnqVunCnsjQxjqtzseVz",
  "key5": "5rfXQ1t21KRsxqRngEh2YvTn36Nkyv7Y3eWUZAi3Hgmf3B7BeLNU6nstiV4iumPaxAYB2Q8njbrMaaVEkeNgj4GE",
  "key6": "5R8LvwMsxM6Ep39Yaz2hWTZzAVxMCrzdazSGExUFernUbahgwX6dz2RsuXz9D3ncvHaQpXDTfWh38xqU7LVosHgF",
  "key7": "2jCbGxHnDR91k5ZvP9kvHZefBsaTLBQC2YbejfiTyQrHVcKE5MMsdfi3QopR5DoNT6Mg9xp1q2bV4eKpZT2PUrK",
  "key8": "3ucjiTeKVGwMfG83of87d7XZzQfGq9MsHbAb1GFACS5a6dxXGo8FYRJQLeYAqeEQeEUKBH9CgbTw5nr7ukCzGTvf",
  "key9": "1AZEDSHjY22UyEjjiS5edLB9TXzkRJ72fYmTj4Rhd41B8Z1Va1X4YnGizke53ZNMxkF3gTw7GB1bYBfSoDQjPBu",
  "key10": "JUfqnoPTmmgnW8emBMGi6NzV7sjvvtewXodchFp6orbyEYiBTakY7T3gLwLdnD74jk67GfJjPgjTyWj9wQHnRdy",
  "key11": "3UN6vwPsSBaLtN6Roiu1Q2DE8yhJLM2UX9rLdC2gvd41NABTGYnr3RwJLDJ6jeSYYHX2q8hYenN9Ahf8VYJubBia",
  "key12": "5fReWxuaoEZXnNDt1GxATQWxSww8sYsJrnEvZ2rk4Yt73RtLr5b51GHnGLL5R7G7Kxm8wdx9mmQ2KxUAZhdHK4o3",
  "key13": "5krWwQqvzckqpNptqeuBTNdnFpUkeEpTp59tj5pZSSRrtMSzHD7BYetjDcnMAfM9X3NBKmM4Mu7wM3rhYqK391JB",
  "key14": "2mCNdLBWubVsm8SijPhH5okysjcfZ6uFLxfHmC8NXFDzr2apukhCCqpVk7w72KJ7MYPqZgQm2jrtJu2dgy4wAnLn",
  "key15": "2ChaEnNtCjHXteUsigF7AmzoJMHhn5YAQ3EwiYZ7NJoNAD1ykN8EqYLQSN373s8QMtKYW9M4DANPKqvWeYZUNwbv",
  "key16": "2vWdnZrCHdwcu3Mmdzjw8oCB8Jaoj1fRfmfpgMGgZUbTy3q6us3zLK8hSo1aYBnE3qd3yGrMb68rynFGVvWNeKRb",
  "key17": "4TxXbt1CHPMSDTjC27TtaXKX1c4yUBf4JJpKUEdGcSeNzM2T8FzYgrUBhqMop33j86nRMfaqNkUctoHphytKn3ht",
  "key18": "4iiLTZB1rv3s5UKyHvMjaMn5SmJ5kYMBA2AS1tt6wMNpGSojB44ctAyaS4GjSwfneChXVxq6Zz19FdX1zYzdutPf",
  "key19": "5oNS6BUwdqvgb7K6isqAqKxKqicNfnxntCHvD1BA2oJcixmA6PYDMvTcuATtua3VAJDu39hpfQFbrn1nTPWVZPPe",
  "key20": "5WC8gwVm69q4PXUVGQo5R4VxiPLdTKVmzt21VaVnuZNozvkHJXgYZbFoYciVEoQeYXL5k5AFTjs7VnmK8nNFtHqd",
  "key21": "2b9nNu2hWBcQAWGyPkGSMRAiwA4u6spFMy5zZggbxPAi5wtqqZ7cfS8ZGhD31LcMTMMWMGbMthrP28RmhdydtNtE",
  "key22": "3QLAgBTdkPcDPyRLHRLekCmmgwEq4j2GiV1j68sAraWkWAajfggfkEeAaoteKrDWf1r9V9q8E5G2nEfACk1SGWGo",
  "key23": "AM6LgRi8KWvbcsoSGVsBDmM8awpae1N9C1dDsvn8jmMmxuWaMyyDFqKEBxCQK7UZ7TBwf2xyhSpCutWomuw34JX",
  "key24": "2JVGktLpKzUnZKEJdxdTSAQs3B8i1eWxrZ7i5weZY3C18eCteruAh6Y3X2iCZUtnyngPb7qkt2KDoXnd8DxiV4n7",
  "key25": "2ZXpaHcELcjVbC5TB2WXBozByMSHQfj7Hid1Wjf7WphVjeHT61gqVM3yDkyxWxeverE4SeLBMNVQZdgh3EjUoUKj"
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
