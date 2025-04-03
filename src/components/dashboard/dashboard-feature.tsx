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
    "5nEGBxMej8EXJWDCM3VJDYpvJhtTsYgv8i9hv963Xfuz67h71kbcgD3a1QNqEnhT7gvqjbgNq8XjWGaaGLgN8Luu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NPCZHi3DCSW7FVzeR1GtPVGF6TCGmqB42WjJVDCSkZxbzREapSmTd7k4myJG5nA5v3rDtAFDULFjVdS7srhQjDR",
  "key1": "3Ysf79RSLxKknh458G8AFhVyyPfAX8EM1kMiPaf6oA5TbL6nVgv4vy2TrMxxxqvh5V4UtNxEdhxJ7dgCFoqopfjn",
  "key2": "5cTxfFGAJcBPwRFye3RTxiWec33RTwz4Zg6WSCNYuxymBZ3hAw9qEujEtYqWDPRc9cXB9w8pkTz9TL2VNA6ymof5",
  "key3": "61S3Wv55dHbKWtoAhVCKTALeeJ5xfsVEPE88U7ZGJQVBrWCpGRJDSQwZZ3Loz4bFtK56TvwUNFr22J3NJR8FFXu5",
  "key4": "gyZUceJ1QfDa3BknuuPUTizeDqibw9eX3mWksGdqroWR1S3BZ6tw1nGQdqW6515WcU1EnSavEiJDPm8UPiNM3WZ",
  "key5": "2DX6R74xQ6xSmAsE3HJQGsxUYtqzyGDqJe1Vsi6rYX5SToh8Bjs9Y7x916vmD9VQpVs4gWTosmCMNcGBMnUe8KJ1",
  "key6": "ER1eTuNnVb1Nqe8tNC4ftXUgnZqokAF3w2fAZVhjDPQLvKSw7D8646JkARrEdSi9xquCeEtspfTHJsXW1HzPLUt",
  "key7": "Nr3V4SwnLoU2upKDPmJx9dYXqU1YWQnWrvHh7t7utatoMetBxjGZQxszam3EjJPHNqd9xc1Wo6ctm5ZcZmzZc8z",
  "key8": "5Q7SVbHT7oRNaBMGtqyRyjVqHRrc7zCefoFeheRT3eWA2zyycCfxnvBHVCsrPYAiqxN2WYNgQKpzEEXs6MgPY8TW",
  "key9": "2Y1GEhbqCYXbEkFbiTfPBdtZCHXCZzxGc2mL7igVgEzmbbZzZxJLyUCq9oXEVJFENuA4S5awwsCWJJPoBgxVxeTx",
  "key10": "3Txwid6qMYxuwUcpzU3LCguErEys6FJHTLkeG7c9KcY7nL2MNRUkrWm853oS5KJtDq9bEsizTsdUKTkxZeKoYnLi",
  "key11": "3KegNeBztUoRoWLrzFjKbsrZVSqnryL4dSKFASLnfn4RtB2fadmphm6cGWoXTxQV5Vu7vTr8bZL3D6UHRF8yZwyc",
  "key12": "5qYWj5GDNke4FFsMzzPDV2Cwr1J4e93zq3XzEqXGAnPwh8WhSxpmq8xrkAjqbWkxLkG9e51wjZRcRUqQuV81nAYS",
  "key13": "3PHqcoaGhaZPp3a2q1zAXRGyUW9XMPHnUf8juvmVJHiDrFWHoruBtbAY4j6qDLVKTetS9SimMj7D5ZZrmLNWrwnZ",
  "key14": "3mKTRvoJug2by17NFcrv3baMCWN7UgQQutbekzCNR1gEMp2af9YRReQDcBtQb6f8a4HooeJxf3qGpXxJDPEKxeKY",
  "key15": "LiX3trsh3Kn2FgthH8F26fsQ9hVhDEsVx3dhRT1F566XmfvAQe81bRBLSSZLg2F99xTGnzsejK4H8Lsiman3sWH",
  "key16": "58y1RKfRCVLV64T5yBsjaTmkQejTx8KuQN8L1tyPiBV7eqxGQJdRVDrwKwQX18NBN7iTRd3fsXX9qsucHg3osvgf",
  "key17": "5VvuhTEfKXQGAjvCMaecGENgowr8CVaconC3i3xgzPYaZj9p6fqMkZeepS4aBDdUA6FGqueBMqhvRka6rMm97L3U",
  "key18": "29MpKSev7EdLsebmRpHqyUyYiSNUDiS9S3JoMGuc4ewxSgPmWUBMLKvHNUwsRHmFYHk6jiqcPme3jU3RGGywbW1z",
  "key19": "27MbbcH8WJzSm9mfVRcihuwLc3r7cSLCtRnknDZnPeqxuTmSZ2Uvu5miLRcvbyhESMqDZTqu72eNCiwTLygfxSGC",
  "key20": "4y7R3vkngGzR2pDMycDmpHuhjmJT2uUWycFt6ckZ4mCZsUkhAFvtGj5QPuBzxnbGd5RFbwULTf2FDRZNmCj8SPG7",
  "key21": "5Zzjjkan4F6eQqPyQLTXK211QvLK5GTeHt1haaBnBXcMAE27F2bMpzckKLe6wQKszjuosQXBPWRXn5PWXAs33cj6",
  "key22": "2DKRVUjQEZ64HDrBM8sZpYsntf7az8EXaQTPdqRDk98ynNXcDkR9jHN2TUL77j8Be4y7H71PLw835mGDenAP9GWq",
  "key23": "P2fgRukseTHa5VAJmML8nxNTKn5MVvKuCvjKjZVYhArw3dvbCF6s9Z4E6YoDNxNZ1p523VmBKXxdjK4xKLrU3UH",
  "key24": "4wxoBNUbeobohDarYq1ywLDQVCJsABwxGeARXyG8HDSWH4rNPXXntUMdqb4qzgtag9cAh87NoyijUoxVZFCR1Ehd",
  "key25": "3KrompbDwke7jSDHGbavHxrmYn5TrzkTf52473WQ1BVv7uXQMVp3UoRA5Zin7EhQxwNc18HR53wmLn7vVC8H2eZU",
  "key26": "62aSdr2Cse6Ddop2gGcarNTCFte8DaTg7exet7zxUo8K1n6hsHsHpRcNf1njsrfWrLQswC3QvCFbPRvxNuz3kt5D",
  "key27": "hPKAhNNQtWNYqNjz9RwauDZ8bW2TCs8SU8Zzkht7juGDYbMrDrdaAL6WCeFE3zh4pZr2cMAMuCBxR9ocWtEN2Zo",
  "key28": "4X3H9JCom8R5wWQxc4koVRtCcB9QSQvJ8LNPkbHetzQZx4DA46fHSk5jCBP38CcwHAW9zoGtW5mv4HprAnEezgrn"
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
