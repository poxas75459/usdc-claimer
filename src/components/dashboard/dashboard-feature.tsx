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
    "3qsqxC5xCA2LSMzjsDFADvUZveuGZUoVnwkFGsicV9pY4TfRkGtUyEmgrs9Y5CmSCSkAzwtEq99cmvENAkN7PkKA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Lc32CqLCPmPTAec8RD1BuiwZAsnNtrKmh2a8exidygq8Zf8f524sKjYxFrGpjvrALdEhNieURtf4YHg2p7Ph5ra",
  "key1": "5umDkjGufiTJCyJNkXKoz5YdVf7L7iyqwoViWbVZohhpniPbrvmmRDjNtAz7AeiZV5rFCLrfe4UoMNhEc3FEYNMj",
  "key2": "3a31Szrzx7TWw4y6dFVoDULMr9wX7TghgkNNZEcaevSwkFNcSNxCrPLjnPLFFhsRs1f5jsCd4kYWvfyuG68inXoV",
  "key3": "2r7CLxh9k3ecKZxViTbmtLmrZ2q5QSJnTwVT1catUYzc94vyXrXqZhit2BUQc2BUDiYxVhMVJcw8G4KXEMgxgeAP",
  "key4": "5kzzY6L7zMQtg6zppUQAQqputr4p9y87RkMsaBxfj3PMvAmS7it8Zu3XUhaYcDkHEHkKi4EMBz5MdP8KENh5h3fH",
  "key5": "zXvhrRcx67gkU8jio1v5Rn8w3G3HeayfCXnNxC1V6ZZWyV9sb2oTVzeVPHArUzj5gXfVBcb78BgMveQ2wALFYcg",
  "key6": "5uvJsm4CTyf53hm27Kg5YohihscTmN1hTHmbM8FLFVQNWzU53Ev8DtPVduaFoNyWECifnU53KYFH2sEKxuXeumni",
  "key7": "4VSFqyEbMCeRABe138SdcTtttcDjsvFP7agcBGgg1Ma4GgXeJ5Y2DEJj6aB4mCTDbtDJApQaMzHbqRMo5Zoz4PDS",
  "key8": "2A2eRDVyrN1g5dbV57s1nE6NxmoQeY2zMvueph14NM11pKezgw3s5cnREBj7EpggQiayK2iKifY6VZmabiNpbGT4",
  "key9": "61JDraspNsguPupjacHAoFeVrEzZjDk1sKqnQYUthyrjT3TcUdmBLsbZdakgPXknwQHh1KBfQGhvmAomwfN4qp17",
  "key10": "2EYNofa4f6B8DHZ56QannbV97V5yowvD5Qcwqkw6nZbLuPN54BD7wzbCSqFPHPUegBPbDMVQsytP5Dz5RuMhsKWD",
  "key11": "3K1JNLsMuTNvcawUyzcZDHdNgZM59zKPv6zUSPKtPT5482LdYSqphEFmBTxgv1vyzRasjJPjoAUAXMVwcNmoEL4w",
  "key12": "43LMusaQcsmUtiejM9Cf1EgUmoQCQJ2gbQNgY74MmNU9WSKVqUg7MCo4C2Yhm46YsupFkiMfGGFjM9YbshbWNMiY",
  "key13": "2HaBisNfCfEaQDUHkr6GatrMFZzexvFn2L87QLxHmYeK6nkqZ1qXpXUDeN14Xz6QHqsGrHoBbhfmzv26yJmgd5eZ",
  "key14": "43R8apdtScia2J3BkCgTTQZxk6y35BqA1X9tSas7Zc2k9cAeEkS4hTaFxVaWvZGLNyq8FEjMYHqanmVbUVG8H4H7",
  "key15": "3PeeYKzNJL8WuUs7m8bwFxxhb9qCNmgzH7ALNNazTj8DnRtxAz1fZj8rd8exzbyCKEjnxUbJFtasU9D4AZQkLK96",
  "key16": "32DVyP9SdMC5eDgmJzYFpMMjPBHn4r6RNxQibt9sg6Dv94gSZF2Nmo6ChmjkvpuN5eWkCXxdbdWKzPajRszCCvdJ",
  "key17": "3zn3Q26KYH3HCE1uAhEFecNDxbrhkAtVJyRWriY8vQaeBF2pWyLfWmyfznzrcqVkqRnbkToxRD48hUiEk7S5T6dV",
  "key18": "4MkMM8BRTFiFnpMFeMRSaTu4YXfqzpvcTH69hyD4kC8U9R5mM2Xwi5rK2YUJT3UsTb69o6wnjkZN6JUg4197eKLe",
  "key19": "4SyTEfGXG6zdsWtBPi95ByegqS7dEWUtJ8CfTAjj3QoVfPGN2fiJoSHqhTweounwCPkMKxzY5cJyoTe8BqygqSu5",
  "key20": "2up3nCNSoNiXSs76xDpnB9Kaj7jB1Hec163GE3Xtic1hhfwN3pxgcWGLFuTJyzy9kkJM2y3BRqUEf8xzM669Zjz2",
  "key21": "5KnPG7443S2AuBdZc3dSiDXya1yLJ64Ncb5cQKrv2JbNzmhrN9W4pCssRbYEcodxg27JFEd9pgEvu8yrEYeckyK4",
  "key22": "3R9E5vyqE8jnBN6GfH5y9kfcyrpTxrNihF2tFigVmajcdDb5Z2U6GDban9GsLAfvgdv2xjzEmqB1ja572hJc4np7",
  "key23": "4fvu6N55GtdunmK2zsjuNKoEFS7cMDKvWYhcQRWJWo7VL2oWHPU9b7rNyY24C5G8UGkban9oFJkCh7uA7GkC2uo5",
  "key24": "3pi1HgNU1WBhuhcPFjGvTH2e4cQRGnJfYqAHjqdpgLgWAoXxqYZYvxMLEsJekqtRht2LzZmY9zPoiUkFx1nDcyhz",
  "key25": "3mcETjbRxfiEAmgh2qGhWcABpMnz92YBPQ9m1d4yimjGnr2EWdMkPeFXst8WLMeNY6Jb3NJ7kgFax5F7qWg3VkSq",
  "key26": "4psa8Nm66Rc48k1fLbVBDAnfDSEt8fwzJip6ArLqaorZR57FuZBmt9KQfkevu7K58s1AhTpvmhNn4xEse5Ke9kyv",
  "key27": "395XZMz4J5q8JNvWmqUEimnPHqvV49kP49mYQq97KJMmWmJ4pg5Nn6uN15q5da4D9woC6sspsQtypq29kCNCAqcm"
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
