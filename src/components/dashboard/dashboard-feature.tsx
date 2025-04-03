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
    "5bWxinxeDEWBVt4GXK9WH8XxY6dgigbSrEwncGjRdEhyuePTr1ZRMtg8WMu2eXJMCCcXS7VsnzoEKKtpMArfdgru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5texc4fAgvQ4M326GQ3ppLphcWbnvuQNKepdppXtSqydnZQdNRzimKqoV9cMfAPLJNDGV9rrSfNqgQxvMuNZzkM8",
  "key1": "8SA9sH4dD4uF2L18eub1c5diTre3wNXLUHzxtidLoufsd15hGDZbANEgjuYRRfdBnpCGM6D7SVGVSbc1xZGVbcV",
  "key2": "3KNyLYFKujVZKErpynvryUr6b8gLRMNp93mEfe7pBUEvkW2pVy8DDzHXtsQpdPJnG4gDHN25xTW7D4q7SRbDzdXv",
  "key3": "3dCDDuCiUNSnPMgt8ioV3eHpKE1F5Qz8FdykirSMgC6kzE3Wz5uDJPZA5MwdynMDV4BPff3mVmzr3yvgavQLydKk",
  "key4": "rSiomNoKagjug1nW8abwvpq4B87b3AnFshKb2r3rKZvkXngayueTSbzvGZ42KRm87GvRoeYqjZRJaXffr7VQ7WS",
  "key5": "3cv9zNfLKT1SkFSYo3ZRRasZbkPsm6BHKvDLYPxQeoT3uhXoNcRDgtqwGpHAxHsgz6cHYwFuZN96opxtpQ4DzPLm",
  "key6": "QBxNgtaNEi7st5uyw89126sXGYafL7fcM6H7LPNqW1oGYXberaT3PBZ8FGN4RSR8hMct4zYUDwaTRE9r8g761fi",
  "key7": "3eHQooNE1976Xzs6ejP1qdwxMNUy8ZodXBD86LQyVHcmfaX3TbZGEK9L1AcdBW33n8xTkvhroXDX11HJDkBFFY3o",
  "key8": "5pv1qbufQFxMcoawDS8ePyKzuZLKGMxLe26avabrKNLSC4E7xk6n6GnJ36neB88ftUEzQYbGqCtRwhS33YZ7yHfv",
  "key9": "3zqmgEKJswLhjXDy4gtHHhsTg4cjxd6PKV5HcLUnKVxVJRmAE1S3PankoE7LuMEP5K9tCUzTLGfFYfv7G6kkfcKS",
  "key10": "3JTVfqAegRSDV9yo3pRaYTWijUKsSvH6pnESLsr1gtzt5SAUV827mnphK9UsbnvfVMxfKS8o9X5CfFpfevuenU9T",
  "key11": "QYXpQDr5QQoxCzTNhjCqfPogJazwwJ5r1HQQpzyoj8U9xNwaPZo8wYa5NmvmXax5iLyM75WwZdfiUkNyVdY1dmp",
  "key12": "5XoGsqfoUkytS3jhtgyPs4qajuf9etdVBgCMXGD2nTiR6Y3S4UnZMEEnJabTDeMeW14sE7hyPz2CyMEhNJtKvmnm",
  "key13": "3ZsYoPA7mPbj3tCPQtvP7pZta8ubjs8nJzFFWp2hcyoZCJd1PvZSe2cwavT8MZpmziB9rJeEZxMCJbbn4c46FFQJ",
  "key14": "t8sfhhJSBtnvUeiY55gCKLPH4MxkeDEfqtqh4yEcFGeygmDgieGWjGBrnGYaYZCdidaQNiHCNGNrdCx3XJ8hL2Y",
  "key15": "44PBTmMuNeXoT51Jh1se2hJQ3y24qGpEiqoWMWtSDJZJNSVdcnGcygsJEiQX5EgsxXuxZJyui3MmsMCPrwfScLDu",
  "key16": "3EVUarsSxSbSHiVdRDXEKPp56muutLCijPHpdx8yiUSk6HujPMbzgbnFnscXrCyWj7TiAywJiyzJmdY6ZNSB5MKc",
  "key17": "665vPY1QjvWZNXC9QWRxyAELZB8YB3hy9naqTgBVmiLpmU4bWYxe3X3MeSiwUXeKjqiDYjBkW7yQAgmZF2LwU3tT",
  "key18": "5yiD9HXXmid7ngcsP7xXWGtXrq4pJWawJQef1vdPrPeC625VF9MumCcTnLWCNoaAdsouDwLTvFhpX1ieGUPHQMwV",
  "key19": "4Pru6PzyXbt7zf11T2bwcW64a1qy3hniqoF2e5QM1PB68tNduwrDVTtSgef56HAT36hDgNcBWoG7V1RbiCqZXg3M",
  "key20": "3VhLQZU5goAU6GesfdcYS15eHmExeUXa9rXeF9jvhkRAoM3FGqZ5ZDxsYDZn6hgbUs5KDPZ4NBA221Hx9m6kshXq",
  "key21": "A2XUuKzKdhoSiHAdJwzXnGyHHu4GyN2vJuYdYRB3kykqWqVsmfNvZdG4w7tvjoVxh91DFmohnxAwRmQ3tT2x5wx",
  "key22": "3jrHaNJi3kvhHGipjoGf2cdHzu8edL3TiE9vqyULs1GcZnCwenA2BVvRaYpF4XhLLafbUG5kZswCAGaVNLNVnZVs",
  "key23": "5sMLP6HmiDW76AGZC9W5RHfzVhKsgoTocSLuwqK3siuNorH5skAswgpjGWgzgEAyYffTKXh1sZDWNhW9kk82tRHZ",
  "key24": "43HmWKt995zTjdJwVMEmjx6tT9Apk2haKA8jWyKxMULzzHJhrEnEgZQqNv5eAADPEyTnY3xpiNPSsP3nUVRwBtLD",
  "key25": "47bsAo7ST98rNrfxRFaWrE1yiyAycCVhgU7YFud8BxWGDrpJ2RjEy7nYs7Mpv5W9LTzw69UA1hYokhSQQSB3hAd7",
  "key26": "4YyApUzmN79PN8YYGPWT6n8sHevTAfgorwmH1QPWjJiM7wbrgTuipYP9zvJw8oVDMy6QBDZxNpvSvCKTKniBvsBu",
  "key27": "4F3LWPCaYY2LoDXY2K1XW1FRLn6F64Dnm6yTpTFvzfoK3YjgvhoQwQ55vJbbBh7dDQJVXqhhEWriSJ97rBfRjX7u",
  "key28": "4k9rgC3UQA1mJLTXhhwwmMjt8owhxm5HCD3k7pFeT3eSQzQEJrLNyKSfPmuWzDxXdrQa9gohWKz1jJg4RFeeog2c",
  "key29": "5eZvJuLUphmD8rnn6ctJ5CzTgvyEz3vVRXoyVkHVGvrhiHrT1NwUinLLQZMSmCJ9Ugb95wB4LVdhZjz6aWpLue9D"
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
