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
    "5zdz2cnQ6iZHHcJwx8RLXUx4HMyve7DGFvay78LWDYtPaXisyuzEvY2Frp77nRishaxvPGffHYaNFaTakWNQHQXV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RnKu4nFusVc8hJy6fkfgDhcog9DaZFGnF1vADdpCskQ5HgP3jVR2vMLk1QoV7N4pMuL4h9WZJBJH9PDhiGUnFQQ",
  "key1": "9wyvQLNVo5PfHRdvfTdDS3pHrrhNe3q9dhYmNeJ1fpyANhQvqDQQirnNksfnJnrhEZqzVJFLrGc3Yqbf8Uyim2u",
  "key2": "4QPAxeAFkdSfPNyVTZdjMr7asVQ6vPT2rF5GpAKjUs5M5tsMTbrKhnPXhtW75G8ZJKhSzEhm6vzkqfc6ZSZA5fzZ",
  "key3": "3DVZhzKV1QU1wTfCyes2nHoaZJnKQhpzemRSHhPoKFkhG3VpTtR65Gm99vCbnNLvbfugsz7Q9eQygDE9fijczxdv",
  "key4": "3kThmynASgbywhkSF79L6HpRGvavc1eNoi3ir8QDphvC2wnFRcQYnhXkxC1eKUQkZPMLugxAyUZuUdosGgdRfzL",
  "key5": "yj5EZrR5EqxayoSAHurVJ7Hd5QMVAVS5CBK31TyKFukTbQ4XJA3eRBGVRbgyujpV9LPatf1gx6u1WG8xqTZLCNU",
  "key6": "3fxWQ66Dsnhuo9DxgDwtptbiJvsifVQZc8pmXmg3LJ8bwWosKSARBtmNdd3uYUws7sLxfTZoZWoR8ifQ9UuhmhL",
  "key7": "rybWsgLurhh1CsLSYvG2YtZ2LVbBEg1s2sCijjoSc9W5NXY4TvZbEJLHg8uYXrtYX11wnsp7kz3ASvaFzFDCLXA",
  "key8": "tv9gZ3HMnPdZjGUo4ZUruAv68ZoMkvFgRxJSA3HkYJvMQDU46vXQk9ENtAY7hQHAvZZBJBww2WWWbzjtJMMnof3",
  "key9": "36gxGjQMh347yVMA37Ti9L9nWVBUkvhB72TD9rqSLwbYctyfsc8uwRXTcmozyFzecq5XAY4ayMK982Hxs9wjgnAi",
  "key10": "8ytJ2TuNDU51uRioPpJAqLUAMdvnE3SjCVL6EFGGHvzY3TACupFLwAcnXkZ7K5H1j7wmoBFpdZmCVvZ4GkvdyX2",
  "key11": "58nRyZMhxNm9UM3Ek2YuWPcUr6pdC9BriXqBNrsLRg2tGjBQLdJu6yp3ByYVQteE3VfLS9K9c85tAjQye4AeDy4A",
  "key12": "5y8oTPPyTHQBTvJbm3uxHfpUiMWA985Xfk1dyusfTiFxKd1QLv3YKpsYLBNZUrvvcgtvaf1Q97gTnaNtx6jFUwRf",
  "key13": "3iWXrmPSfHo3R4JaT5YedGdkLQByNck4vB1AkR9D7ctn3QCRCbQKyCbm1Gyh6nncbJgqqzCz3QUuijL7TfAibA7p",
  "key14": "2PReKFBSJEZSS7x8z7h4VDWa5PvUsgSdiuYELxVg53w1Po4vEJanMhnQWA2jxbgzLxoTBvyuamoqnJUxYCGJy4fu",
  "key15": "5m4PGnW4ojtggG2Q8erKQwKAfqpBJGywFQhheJR3X32DZZCi66sq2LoJpbPsdDr9kfsPsdrLkBWitVMKGEbXH15s",
  "key16": "5fiWkPoWnLgcwRWBHefm1pYMHRxviL62mvkrEYpezA8iLCRPCehUBrTd7ci8BaRmE56e5KoV69vfivxX182Pp29V",
  "key17": "iEiRuLQkwTDCyNyi8PdiuE9sntnJhbibDckH5CGqME7R5jYeCS1QQiTEhC4M73rY4nEtiqxeDhW4QK8kAWNV14Z",
  "key18": "jNb1KDaeA2ibpxJjJ9HaH2nMsywfZKR9Bn8UcjxFsKt3e73vMueBPM7JyGCKUMxEbhQZV4ZSYUG9GsAwE5r9eQi",
  "key19": "5NpkakQAwdxjS2oAjhnUo28r3XxkY6ZvGYvbM7vcwd7L2pnKrauTFxvtWfLhcBSkX2cy1mAizQzWeDwuzjSW3wCC",
  "key20": "2aCM5PJzjDMdVZqo32WBAmknyNtFqsz4XjFBHRByrnQduT21KBPtEDLAYf2ByVpBcG1dvqvFnoGYREujxbzzpPHB",
  "key21": "4QY5F5XTFtK2AhP23en7o2odCG4M4HpRFPuYDvn6CTkMrY4PJYqdSCHGKNjJG3GZUJ2NtrVxXW7e4gmPB57MELHc",
  "key22": "1X6Eb5jhM7UenFccdZvpuEHreUNJfEsnPpK7svvJT7mzSEMLLZNHpCaGxhJLi8Cv9aMGXKkqQ7mV8CSJH1AJ5fE",
  "key23": "V85SZ2TC53GA764vw1UHk9JVXytwsQjgwpuUzaSKukDCvCYFoFQ5ZfUStpurz2hkT3v3odRTaxy29ENy9p3pgrv",
  "key24": "3vivcg7zVw9WY3DJa1Cf44aahjHcJNktx5aoi5nSqHBTEJuF9CpWJavbSTueP65Hi2uY8X5HAY1wxhC9z5DzhUiK",
  "key25": "45UXmwkY7uFuhL9ckLJ41gDMHEqeUWZWhbWuYQiMwcimG6M5Ec3jqM5WGicem1UG4Z2DCxqCAivVJbdxZjX6HZtc",
  "key26": "5RcacDK2sM6jcUyKpA6S538Ma5dr7Rf3MByFpBVRLfS9fEGpjWH8KGEYXgmvmK7WiEk8SnE4J38euw412QTJx748",
  "key27": "4WjYKLTeFedrmbfYqJe54L8SD9Sx8SexLF3j4QaFhNnMFrDzWLRPrfKDbfJbt85Ygc9xC4mowjrDdykfTkmZY4uc",
  "key28": "33XhYsvTFDMN2R5GJU21VkZvc5HA57MwyufyvASYiFJGtRbAA5GBe7V2hEnTifDj63fAExwYKNcZQRhGLTam3mXM"
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
