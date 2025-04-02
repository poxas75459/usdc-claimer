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
    "4FDbbFF6tdZtrSRjRfvXGXx128bSScE9wSneDjCNyL6XXTodoG9nemydGQphBeAyfYUcqBCbC4NouWvb7jQ3Vcv9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b9AGcybpyCq4dVNhhBebzWbMXE2Ra7Xd7kfCXwNWadfcVAeqDcXbozQCFgmqfgszY6R9ciMSwgURHycXuLdmiY3",
  "key1": "sMPk8yBBCbUHgqSqC7HrL3FU6SkCuCHiXnvS8B68NnLWAYp6ixYm39im8XHyC7RALQdSG3DTB7iP5VQKEHKNhbs",
  "key2": "47cYxNoLiiWyYNxMrDZY6vpC6XDH9CeyB4TZN7zhPYdav4HpGygbG4VeQwPmMZ7TD2H8Jh2yAhyuC7jPo5QkPKXp",
  "key3": "4PUQxfJBs3okRVEj2PfiB2ddEe86daLmtRbropd7XmoWy3X25mh3sTjJYPspU3C6rsSKet41TXB6nn2nEqAQzEU",
  "key4": "61egZRFxLTAaqAjsxxsTDVPCeDtjT2H1W5ESJQikUTk22ALtohQ5ZTaW8Zkpy32osCAJZb9b7u6nze14KSWAFKwV",
  "key5": "2MopVYzUK8bNpT1ZrtFe12BC85mJpDNxBjQq7fVXruFtJZfrcm2ikocjkgpzRhuZQbHXpsxZ4wDc39g4bg61tw6a",
  "key6": "ArSEfk5jaVHVGNuJhMPNXKieBLF1EKtDpp694RseR6EBEYsADBnWQ2MeG3hwhrYumbGyEkEjHHAxLGeje1vQyqd",
  "key7": "4tfAUnTxLoT5YjyaaRGCVzz4QjNUTP58PBnYpRGMnvWr7CBArz7sqLHRUqGVfTcUEQYsjgZcnF23Q9N9mGkwFR9p",
  "key8": "5NXRXzdZG7RVHAVAkC4tgv1CEeYmjarwr6SRppJbRjgyj9pHPPNkYmFe9r1HT3EfakSuKXn6p6uTKiCthSxtZAD",
  "key9": "AvdW1WU4vyERuoTShPpYAn3FMMCSMXA57NdxfJ6wVQFp1YseZGdRz18YF5afzpBcpcYp3VUpPx6CLHarYsAphuo",
  "key10": "3qWCtwv6Jk2cEnzMKn3SrQparUNvKsbGMKDr4MQSF5ih2o622j3V5JMooZBroKypmZqpMu6zN7AYYKShUtiJh85n",
  "key11": "4z6Wbm53itkEriKJAiEyiairYcLXuiAf2e6QLku3foLsZb1chL34Q3ypF2JpdCBhS1diqiZUNGaGXDuGrdXXM13y",
  "key12": "4zeihXWoSLYGgkguxKtHG3qZz7Tv2pCNcbXhi65e95c8h76k6qyHAAVga7Vy7xyqMSAqZhm21HYzZMc3nkRvcwus",
  "key13": "3bywSUp6Xr7BSmiCFhLPdao8wJ7aJ7H2Phc8u9vteXoDTuQAsGRyfi78MQtqdZzswibFyrHW38SVHQbiFiAVP5tS",
  "key14": "5cjxZtBPNhtqsNkGJy3kuMki2zpYidHPRYUh1NnkpwwKgLyS9D7DijQFSEqLjbpa8xmhLJUv27yQh8c3bo7aoJ4N",
  "key15": "4XaE5eLTiF8DPYRvcZsRspgS2GFmVZ5h8ccD2iXWiqiTWAFgQU3Yc1Pf8Ua3UeQMDi6Kfckcd2Y17BiqwYzHKi7q",
  "key16": "53DkVoTaMXozKXfRdMGv2WpdWhnQ6NcMSVuKkMuumNLDYhxJLjHRK8ZnofpYLzMTHNQyKudeLdQWbMEgUnwbAzH9",
  "key17": "4WeLggpV3e8nPPP8ChbdDWB4Bfw46Z6wbn8wqjYucV3jW86NUxWLdGDWfc7oGMgVFqh81sKoxUVj2XUkzkXz6CAd",
  "key18": "5yPZftZiVkZtmcnoE5ZZjyGKs1L49bJUgFifBZWVvzyCvmErnEEe9ZN7qnJ5wd8CAonTt3VGh9FNPmvXR5QuopkJ",
  "key19": "J8BBcFnNSAA25zjJHbmUYMFvPE5uLFdEb5U2DFbLhc4NzUzg8qBtgzQJumYRpBW1FCaicDQDuqwk4WuNLehBd2o",
  "key20": "xiKf9ncjqiGqaRZ4MBVrkbhxMUy2ia8sqEmymarT4XokckdrMHVHsvUNcuqHDddPw8SuURg1oVdgFcsLPdYJ9kG",
  "key21": "42h2VkhAudvr9iNznHCGWdvsuZZSYvEZELpWYeQdeVUQEdRWJfWoi4odK8JAMPcaG5QrDaAX6MgnCv7XNAzLJ2ZQ",
  "key22": "2GB4FdBUXMy4VdwmNWtYw6fMybA8T6dg8ikFUrQULLi8LwjDeovTKXofKuz8ws9jT8mnk2WPsfDpNj8jDBbe4n3f",
  "key23": "2AbAdoD32aLkHPKnsUXt21SPchepXJoRH25GKPxmbVZXPUkgXNtgFD8TaC2DaX1x7S1gPkCWtvNDYhr6rHH14xA2",
  "key24": "5Jeq6HMYaz82UT22nY1QaPCUrPP89PbNdZ4TnJSisaZyaiNbjTr2HAFH2K1m27KLeYWZMz8jVDxVvEFATuypc3SF",
  "key25": "3Sx3nkWQAsebLFZ79eKMqKfeZQjFTXTHYG9PVnqqUWifo4zs9rARHzjzrGSnxXJhmYN95op1pjKjHHV1n5SyUTC3",
  "key26": "4MPY9z2fthiQSLwBWsDTtZC1zHdHHFBNLRyWFkD9cLDYvugP4iURDwPwie9ByeXVygTes8Q3EE7pb4ktBpAUUebM",
  "key27": "54g1HrDYw8M9Z2Wp3jUF48t5GbnTD2xXppsWNQfmH5DK36EKNbQB3uHn9j1JNhJrxaBa4bV45xh7src2DpEKkpAs",
  "key28": "2cCDAt84iys8HcX8qeg4gEf7geMxRpaoYU9T7HxyCfaMEZbxp1uoR5LvKHoMdRCprorW7k8GxheN8EY8UTvnzpsi",
  "key29": "3to6UM8Yx3HhQj323RBb7aZSozXaKWGPCRohVMtGNarnFcakx1GJ75pnU29a4jncCwJVjQmkaP5KmHjWAAkV4SXx"
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
