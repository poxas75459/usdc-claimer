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
    "4ff9DVoFp77ArXc8rP7CYReBAAGo86V74MUpH69wj2cWmWnbVuVAvhtdcVRDCxgF2qcKFkqttCzp2UxTCfQBWwhV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3To4prMvR3p2TJo7LSk3NSfNRwewwXKJ4sNXjbznyt57iRSQTWGjm1KmMkf9a3yEXCYd7jAsW3kyczA3P6YDy91c",
  "key1": "4hZzkTHeQ4DSggBcRKeS7JK1RsYCSdsnMamBSD5Kv1UNSLs8hPr8Aziq3UX7MuerhQwJaUyrzPbhDegbrQmYzSNb",
  "key2": "JtrN3eGT86o2jXzyiYYzdromRfWGWkW1sA5WeARDk6maAmZsf7c366SeVq23WBNdu9KsXYwsW3s4oK342JTj4iE",
  "key3": "586247WE5fTx3XXg7XMpXSYHFo4j197sHBWXdJkjXkpd1kceB1FkvB2koLqmb6ckUqwJBrABB8oQ8FoUhzkezd8j",
  "key4": "2nQ1EotxKQbXyUUprm1fTnd5ztMb22SCBn7NsKqT2UDChX5Q9tHpsgJUDAGSsPcPd2ddWUr5tzrMbYpZYbs1k6Ws",
  "key5": "pa4pCdR2SLfAn578mRfYDSEE7zR46hXbQGce4aE8fbkYEMhiftWSvfNQdDftwC7i94tDuoGaMbiLLWY8fq2oFDS",
  "key6": "4rgLubiyofvrMDRapMVy89Sx6CzneCeSCWhEJEuL4GbH39bY2GTQtR4fd7Z6rFP3kuftcbJmnkgyp3h6XuwcBWdf",
  "key7": "4MGJVLnFSdqA61e3yK77utkZWLXkEn2K1k9pJiMCkFWYrT7gq6wkZQi4v3yw89cCFDM4R6CkUaLDfwtfmLRiUJ5y",
  "key8": "5eoZC2879GaeQTStCvFNqTKfFP5jaTr94saucvr1RXtJ4YJnfz6w8gf1LCKrpBvrYfQ2Wbbp5RGJStiurLB7UE2N",
  "key9": "5j5834d5x5jLEEeSWPdi3VieFo2ec9NXi3S9MmS9TGZgL8XSrTBFX84dtYMiBFkze7oygtCyYWavsJsBwgyRPZr2",
  "key10": "5DiXHnyWT7w552Sep3ymmtrVUTKqoGMYgoPqvY3EiW5yv3NzHYXuykZJhmqPfMhbameiaxF2jLRTqJqKAAuhKg2B",
  "key11": "3PQdVTWdoTPPzK9EAnq3cgfDkMmvnvAvkxoesw8TorH3sMFhkwKyg4TiRxqPqmnXf2zcMhDCQ61fJrJKFf9bzAFK",
  "key12": "3zACGkcckRpuFVg53tnruG8tFTTjYVBoYshXnjqYkrDxF48mmTKSXYvjou4iBiaEqxCh6uc8Uc8uCeUxppuiBxuG",
  "key13": "KJaM7Kkvfv4Kc4jxEB6Z5FcgRFYA1exutx773Z6ZurM3jPbhurmhAvPWq5c8gjc2mMF3DPRSpZ3tgrdRSJqUARo",
  "key14": "2gtCNbLQo3DZx6QP5U2iHHEdYMPr365jCVRmkdtaQXTa2iZq3HKhD1ioGAc9w2Z2EtSSb8p5rDRuMjw2rX5fGwXS",
  "key15": "2bw2CvgW4bLq9uvmgiCcQL1ciAVa9uXbVQz58nXuAvjfH9AgkqYZ3iozihy8zN9mk6gFDSyTJXNrn2xFeZEwBiMi",
  "key16": "3iPnRnk332msLskHuWLEpCjhNMCvCfpxA24DFsfmdp28mNwLnXvFSTrXT1VGBxCBfo1wjYLwcVRL4hgJSLHWHTEg",
  "key17": "TUzwvLHVnuSrM4NEEPUy1bUVTirJvjgqbd8XYQttRT3R2dfcTaACbFXWsztP9Yfd6t2ftM29HUyzUw7ooQuKPYf",
  "key18": "3vb9uF9UgV3ATexdPQSJgZyfnzGLGjax1kpu6AB4oFR8bmt67B9Vc1F2d1AxBfVK6MskF9Sbs7GgDpn6yvY96iaK",
  "key19": "4VBxEW4m1B6H7vsu7UKS4cebwEqocfHL1idC5wKoSvZTunZ1KoDAVZKqouGX1BahgznURakpDbpsLfDxnQRx8u1v",
  "key20": "GrLwwxG9D1B5s9FhYSTFLa6u2R1QDQxiWfY4ffyShCwNuHpzKd9ACY8msSip7znCsWSY6vcxE2VopFUASaPPHuG",
  "key21": "5M6GgT1Wb5g7pwMcE8iMuhbfoi4hvSqKcqY9E3WvwYFe68G9x5KLRvmxmgMyATzSqACAnh1Hmpeds3UvKfatvzXf",
  "key22": "5WcamvxwjtsLFwjvBHJTN8xHcxYwgWndtXaGjhkn9SsM3maULdXgYWwf2T4cjuuyX6TvGkUB8D2BMcP1b66Ltsh8",
  "key23": "BfxrAbBBqj2T3qwATvf4xqvWdg86eRmHGJ9YZfzDevvCmwZ7Lrw7gJcR9NXcjQwMQxhSM4JLipc8DB4xxw9HrGY",
  "key24": "3YbzhACf81kz6iKUXkhKGCDxdNEBHg9GFSofsUUFWrqVUth6GQoAavHhyUh4SkcVLpHjg6o6adUN4gcSGzFAqer2"
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
