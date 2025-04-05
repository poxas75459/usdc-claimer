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
    "2htcTMsPdGB2ZzuAzKKbejBypy8N5WczghRBQ9p7LXpPSccD7mn43jcEgHiGzJkA5ZDKuf3Y8nw6A8RpRFL6genZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UVPVVC2SRDcoz5qeZiPGDX5VGBp9Tb3d2VeU5MFeAkjCgSFKy3unTfGJ7fbvqZPAVefUKeeu1PgDT2TE62vQF75",
  "key1": "4Wxq6guAjmq5AakJcNdkToktFHLXmkwepuyF2W2qpkXZbwnAFstoGDM6xo5t1X96gNkb2Xs6u9LDaLS8hRDwXJs",
  "key2": "5Aeji7wNHVyeUnKG8BgztoDbNRfgZgpjWps1oDy8eoSzKq9pHHWnPKvDyJ358kzbM9k2juRXn1GsSMtaDsgTLwWA",
  "key3": "4ggD6x2ha5bsECeS3WH8i7HZnY7WE6zvitW6nUTdzDChdyPzTVeTqLboSntKuDjqGRHxtjuXyfFAVgF7UoksstMX",
  "key4": "2zv5C9MT9eYSJHxt2UnESeRRvLjidw52LoHrqP9orp4hUUaYSHswu7jTPLrvhA9sFi1e119DVh6SbTgGV93CCaFH",
  "key5": "4K7zAban6Sy4YJfnAJerbSc5n98MS47cGfi1KXrdHsDc7dWiVCKX99wrS59GB5ff6jDm9NEkAxYBj5m5FxQj7ABF",
  "key6": "4ZCY3U1HpT4LZqyPHKxBVyh5GD9ZESVkuFhEiKp4eGje6jcrEi9kqwVZAP8RLiFHuKVKcvq1ddZUUHiiiGoYMi7Y",
  "key7": "3HkS3qShDskzA9oR58K92XACkGKwZirF3ADvmRDUate1RAGc67k5ZZTFeqjfmo9c5245LXt682wfHP4LetKaRmoz",
  "key8": "53otLfHBXBqdH78dp8duNdF9dQgneU7vcC72AQZjKjaR3H7w73mYnriCdBbrp9SVDbJmc4Xxdk3K49yD8En99JUJ",
  "key9": "2EPV49E68kBefFCMh1zL2qie66vUrgVp1AExMDGG1igdadXGdz3uVdTwYsRyCM1UaZVdDr6nzUwXGfcjeqJDZPSq",
  "key10": "2KTkAaPptkdQ2XV98uaJqnJXneAhuCZiKifc9sM16bfh2W3GVmWweHdhUDd6oh8b1geNTN6PjvrsqnskFBQWtDcB",
  "key11": "5idabU1wDZi2y5WAG6WHzkbJGRvQ6jww4PtDvuJHXa52MtkdA2NxtuxtL2ASCz7KtNCxcPRRfM9ojxTGAUFPtXy1",
  "key12": "2nnmX9v8TpA7oJonyZi5DYHstSYw1VVEJoeLiWgZXNANjnkHhgc5tsV1eAb1MxeD9M53E8hmuDx9uuDSiHTUcab3",
  "key13": "4Rhz6UGvGfXN8DDnBnyHW6mt99LEZuJ2jDHwgHfLhKoNGvDK17TJHjCpyYTisfEvWZKqb5K35VGaPgpqptru45ir",
  "key14": "wpmKmaMqFFsm8nk1J2Cp2ecn3wfuVfXvrsZQVaU1hwVS1buCgCtGV2dmu6cYegpmVP5MzBR8Vq2hbqq6H9iHAbb",
  "key15": "3QmLtbw4rwpsbLy6y3jNmZMumSZ1rbn84taJqhGDjSq7i6dWfP4aK4HUtV6n3ZYmpULewCtVK42GrjZA9oBJFyhk",
  "key16": "4jc3hLqBLkmDSPCb12au4aPELyS1XHnWtV92qh1icfQduqvuT7rohHwKsBTobt1a6HSkTpGGsBzpDsC4QCtm5rhQ",
  "key17": "5GbZTkkFKXqg5Kw9MrEY9wWapfoCxJCQUGtFDDgk3asdDvudsxZtY1a7M3NaZTeDdWhNNJdRwj8h6cMGjHf189EV",
  "key18": "4tvq6fYfgJgFaYzX9hEv38FYjspoUhWLC7kjcZPr53cXMirvw6cLksDmpZ4S721jaMK1ceEXcj1ZvRS3BgnKZtFa",
  "key19": "5YUeDwYFbnso4o5g8Mm4NFj4Wo2eYHeSifzruL9eXGMVXdd4FzYZ8R7ZMTyWWR533NaT9PR9UXBKBtwToycuw4V7",
  "key20": "4AYMTaoQ7W4avoXPgwLYqJ2pG2tE3n88K7knC1ZSxJMxKyfCqgDpSik8ximzvYiKtXZ3XGakt5BiaxpsjcwXenib",
  "key21": "3C9qDGSWkPPZULXZzQ4nTAUYtz1zcGtoRrF1b5tDeFFhQ5GRPM2oyNB3hgezMUc7cZXSLBVXmawnYeRHPAEryfVZ",
  "key22": "45E1E8SKfdnoEjccpyxEoWM6hi4xthXUZpebw98yLsBGafquKYrdKQneeQNCGyLytp4wkJiwoiRAQX2gws2EsSyS",
  "key23": "592n21QMe6uH4qRgzyLktLYEKEGT2MNvxnKXnZHhJUmZ4RfaCRYVBFwXYwea1w4JNDejpM7cXgBBZELkNJP67Qbu",
  "key24": "zu1qJ7E7bs1gNDwG6tVs7UVyuzq61kP8doYm6TNFRv9ZoCM8xfQGY7RL6piauZe8pzLFJFEvWVSSCViz3eRF7SQ",
  "key25": "5W8iNtCJdUrZuehYSD1uHLyVXokZzhdc94B97YWDmmVPPMDmXjh3QTCaQYnsnpytaL4JM9haWwQLSBrgBGubkh5b",
  "key26": "45DiWFSr9s3eP275NPyWpfTvxUcWpg89RGKpQ14kaqKAu4X7kr2ciwTfmrnsCJAeDJGYknMWcv9hKb3Us5XCsKzx",
  "key27": "5J93ev9jkAKjAnYWai5MYpBgQ3atAD9Hfxa9XFbSKAA9cjBKY3Cu2YR91Lu5bQrDxha3GJmuirdEd7YcLpGfTBFB",
  "key28": "3DvH251NZKaL6q8D2ztXbbJhDntvmtxVUQ9GATZiiB9FCHwURaHWbie1wjKfGkyY2BMYAmqy2RdQxU3ygkYLzR3b",
  "key29": "3eGsRSvEknP3gMBJtTGzdffDZm1jfGhQZj3LHYRo5T9MUQPDFdxeRfXYsDvxeix2v5r16S3VwQPxandi5mCkwqwe",
  "key30": "3ZXDhm67z34gefnLo2w3ZV5QTmPtEANVbqA1UMGs5s6WpaDRwU1y2ehe8nDp4aa2H3szRiiSfuACoGNmc3Pem9Hz",
  "key31": "muCU9ceBXJSKJv5V2JCP1vDDFuqdX9JTZUpAvypvsV9WGKc1ae26WRbAq1MJwdxDeLmEvotXD95WwdJNdp4CCvw",
  "key32": "Nn28uoy1rG9pFZw5kLFjEbGKxERUZ9TCFTpCkxR31xqqSx5LnJdvJHra29bp9XxzYnvhTTghVePGbdGBkbCNpvm",
  "key33": "2GW9UsyxWgDkdn7L7nnNR3tGBYhJ8Bkjxqjb7rs5iHSndCn5h4eWK2sB2vVa9GNhNK1aSPdEazxgJWrxd96s3JEi",
  "key34": "5oWF9W1kVyhwLXY6XKH2ASu4fzGmLR2vgQMn46x9oMNRiPTFssQXKS9b8sZh39tHvZEM6DNiEEfcYvz3ySZk34Si",
  "key35": "48oVqHhVGzunVT47k6zamjkxVVTMXsJ4zbC84XmVasKv6pajhnkXgLU4Nz3MDDXYWC1XrFDdcoEHSqzf3bBdQTmn",
  "key36": "29cEA6KW2gj2NjDJrvvH6AebpT7MbmSEad2hcZfDEqPizieAysqKucFMPNUUv1MGLM8sKZ21xg76WXF8PxCamqRb",
  "key37": "3xCVHjiHMJnJZyJDFu8iqm1Ra91efr2RBevmY6XyZzoBsmdPZozCJRzmrAGiiiVyA1BGnrXjsve8yCEEf3NzsUQ7"
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
