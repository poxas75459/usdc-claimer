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
    "xc4LGMjXFCkosQ2hgpgNZUMezaxN6iQhWgWXKp2EEBtnnrVBCkxzCx7ZGAzV4sEVcX6xyuCH9jdcBy93Jq8gR7V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TGEhzF1JDyAx1QQBn7e4FvPP8buRwx5nbLG5kLTRppb8Bq6wjHSgezqfoPwKrSjyFyv1Dcdkjb64PJ2CnbsGLBc",
  "key1": "2cPwshqUCNyQtRj7wR7dhdKHXe58cozra5PJQL3EQThwqQSE7rdCoAbwCR3yFzVUL96xnVEsoDPkraYAq9gAzC8R",
  "key2": "TKaVTh1AqvVte7MQ8v7hyp2ZJX5gYR7o3E3RXgCodhe61Y8dFnKP76Sw6q7Cr6ysfDvZJBunCWqKCyoVx3gMGuS",
  "key3": "5J68g1hE2mREHfE5GLE3XvBvd5KHKEwQeN5dwbA1ZLxaqkRHtSCtu4qfusZcpfGsgQeMQqQD16xXJPvXFs11CcEA",
  "key4": "4dV8ucAgcaWx6bxB8j7psywiJ1b13Wf8fzsumCDms8j4trW98biBp7nEWprHXnoRK7VzdTqdZxj1tPh4pLX1FoRR",
  "key5": "49Z5qKXHDs3Lw826pZbWqRLdyrxdfkb1Vcbq74S9tiYS7GutfxKSuAENAW6urCzoYbxER6x9xs15X3468sU5tYSN",
  "key6": "51kQKSPxuRyBApaPbqu55BDQFcMzGukR1Cz9wrvSKgVgngbLVqtyT7ymApMbdU2HVbUEGqUt7McoAmVH6r4nuqeP",
  "key7": "hVnezcCUSjeGQpS5eksjQWjGrLAG8CXpZZsu8bxizNnCEgyJuQvA7Zf3RR2V3zVqwvn669A9zdXvm678B6jFP8c",
  "key8": "56AvUwQvMNYQeAYvgPca9RwQ314cw6SBRycCr8t9x33txAoWWfiTqWvcPSY9uXGbzLpCuy33dR5rw1ZL5g1u5HCv",
  "key9": "5kjnuRN1TibjJ66KV8oxtFGQE7G67rmQSiuE7w9q9TQw4PwymN9X8RCB7XCQsuiXtbSyLgadYNmQyYhRdfckVNDN",
  "key10": "3BMc3t6SwEotFeSxMChnQkZ66GbDpjM4E6sK2gm6A1jQ8awTXk4XfuUYFPy69yYjJzJF9NR9W2b32ezJD8unyJ9x",
  "key11": "a3fukCyuX5MkDfQUcdcmpuEtnpq7pyhJbh516ydwTMT98anYEj9de5abamwsuyfL9o4xbH1J29bco5Jin4EDXrc",
  "key12": "3XftL2CqDWxKHmbTrNJFCkXNHn6VatUWSBuWM2KGPDBe9zqimfayXy88qtq9A8fQeoHguBB5dPs927mCbYdmcPp6",
  "key13": "3EE2YbSfup56X2q8AuM3GPQFQac8ZH9Asv4vLq5CvgC3QwiaDcJpuCWh42vsvqp9nVuPMM1R6LvuSCs4sjZE4qqi",
  "key14": "5MUGDCrjk2Xp5AkQMy2g69EsZ5r7gLtHkc6jvCui4YK1PVU1FTHrfxrni7RP2hGjMmkZGupZW4QLYDtcRHrwCDk6",
  "key15": "5JUKGhJYniu7qWG1PCXDcZ72DPpodB8gaDcYB8J7YJVehCCR5B37t8cRZo7JVC35FG2GnBjg72uJnXwAwicKYKwW",
  "key16": "4bNYxuRK2pXwrZZddsCSMXDLvcT6J6HrG1VgCFZbpwcGC574g9Da1naBML35yRG6FipFSePfvJfJeLHntUZRqMhB",
  "key17": "5soBpsCsGZtAoVV1FLRTjNA4apZZcK19GSw3tTVQ5tZQinVrQnG2Wu1g8JrgWhYbHw5NxZkoheBoGgbG1Sz4GQn8",
  "key18": "3sJaCYPFmbzPDT7AAzXLHuWCPmfjEL4qQ388F2mqWvKR2R1PySsMHgWrpPS54EVoYV14wdMjoegN5xB8Xt727JJ5",
  "key19": "6MM5R7j5CQ9NBUFxNznZ3TZEhPboMhTuNFrwXtJK8CCiVXc2WihZbsVTKMgodGdSTgvJdkT7s9WvrM7xs8GXz7R",
  "key20": "5UzPR2MYcGur5UtFkT72s2LX1kLwm7KZU4zbkqYg6tGgQKpeZkgCfVMQwdpyu6C1cBtG5G7eJc4Qc3HZDx8vfeEf",
  "key21": "VaHwNLvgcEd7ZdVjMFKnvVKVE9EHA2cQVBZV8j2pKxiWBnqNHdp7eAJ756FCmiR4bj6m5RtMGiLJwWEoeGYBLnm",
  "key22": "3aWAh52trhxCRkSKVUUsPDTysbQsTJF1Vr2bNqBXeThYh9ZJhkXyMRJP9Q4zQGPch1bhhsV6476zRSbPqn4vpX8p",
  "key23": "2iNm1xq6CiKiAE6A6X2aiLdW8cM5oTT4RWFNtHi7TzeUFZ83qaC6riFJ6aoF927iKtUfnvRyFqa54HVvB6PU2UH",
  "key24": "38ZjbeRvFFfLHgwRxeCmXFX6Z7mzC1fCi7B7GcXjv3UPshYy9hdmp1btEL7bJHnFtbgfLd7eFtbFjXGKNiNxV5ho"
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
