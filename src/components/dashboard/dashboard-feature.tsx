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
    "256rjPGQoEXMmkJQr14bph9biifTMikuh3ZzUkn3TsLovDHJ5wJRTj9xG3U41GJFwwYeJ57WBiZ1wBtDvVNNMwZ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tcXo37Wxv8RYTkyyyPqxqhKEno5uoHinTNhGosoUsnzAwuwMCoiyVw9yfs2BicyijAAGc8vbYUqm3DxbiGQjrfX",
  "key1": "61oiRSQtCUYymVqR5KiW8Eh39sLfFToERPbMkNgUgxYDGpxrsWk4D85TGAAFjLhVGG67gsgQ412vdycyCUv46sam",
  "key2": "e3KXcNPPzciMFDHS5sRuGqDp5eTp77cvc5qC4HTZoqoA76YbaSodrVKxSTErSJS8QYXyGBCbRAMGzWJ5E7LjWXE",
  "key3": "4nJzqai74qiVoKpQsRFr2Uw1vnaezysdexBnAwyYwqT7qymiEtXjP7gZSaF3Luk7CVrHNsH4a1KY7q5HMMQvKsGZ",
  "key4": "bDPCpz72qMaiKKcKVedrTrCoHZFHGFm6XM2L9GRhKs5Yp2nxTXrGzgoXTJBLD8yzQCXQ1hoc3SpUT1XXdHKXUuM",
  "key5": "3RwhqsxRXvupxvMJKfx3jsyBXN264SCUQpgmMXrAVDzMXCgtcb9uVP1s9Xxg2zwpEgonKPS8JcubAWvf2PAfagpd",
  "key6": "bP2NXTxWMgGAKLj6ZPzLyddCJUSGoq3eiFWHpfiVnnuFvDHEQu4j6AGmA7PuogQhe8fhoocPue1RQeYgFLCUZAs",
  "key7": "Ts4f6gfnpySbimvHUPZCQpYp9HydNdTPHjZtWY9cvXrq1WodAb5ekfQCn9SEBaQNZbySf5VgZyxiZDRmYfGZRuJ",
  "key8": "4twmoUvs4GMSEHC7vPYNUh7UX4zBRRMkHtsvs7km3LjbjJZSL5hSNEiuCwHV3ngRg8xJ2ioX8VUefUCciBFVW1B9",
  "key9": "2X9i66ZJJ2xEjmpf2kG9rVYRW2vmKmSUn88Dfg3jV6AqqU4CW2TREnwf5GDimapX9XiJPdba3NSaTwnq3NBg8aBn",
  "key10": "3WKWKocfp7ZBVbEMSvyu1AncgDCqscj34H528mUhH159PqYwHFpaVhnkpfhiCy1Kw5aVtwe2HJhQp8BqF3cz2gy",
  "key11": "41ty3YMmeqXNHvwjttLBiykuSkdymcCDMHbRs866RH3B4hGuruQBvvsgqHkEMeLD3t3qGyufB6vtFAPr31MwC9ae",
  "key12": "55XPomGhmhMPxuxyPQxLoEYgmXtpVPxj5SURELUnPm7gyegdkkydgfZ2K62xSWnearCzyGVxKtYfvfPS3HUtJTfS",
  "key13": "4BAZp597qrzqpVwCCDmR3e4AscBZCqZYNAntWDxTmJ68KuJiZ7eK5fE144XUqmpEEwoGz2t8GyTGQdZuGmPM7LVx",
  "key14": "5M3ZMg7bTSHtqGsKBPzn98j7eKhRB5B9az4vt3xNMcPod9ajeaTK5ojYGQRMB6XTrTD6SF7ncF5s2japxtAheYsE",
  "key15": "2V4kABsjPo1CaCxuE6QhHbvKE5xiRZMqfq5VQYpav3sgSkU3eTJBhfRqF2PGDA3T7DL4DudT3A82EsXQTaXRMrnd",
  "key16": "vEKjJWSKdRwsWafB39fHywvZ2XNrk8Z9UzbmN6y2BJjsAS3kwoB37PEwBPwvbsL9baqyTBSoh7SxwoajH7ogpxR",
  "key17": "2mByydwSAjcHTMVUoh3S6QqVEd7QKpi1wYSF8XBcthNq4g8CPdjK7G38hZUNGhsMKgKoaeNNXx7fWF5mfGCd8Kqa",
  "key18": "3hiYYpoYHzyJLmhNn5ZRR5ePnQ8SYapjtjQiXBCnfcu4xbPxy2iJy687utYnP6aFxFZVG7gUAHvwx9tC2WuUombw",
  "key19": "2rM9gwENbRhtExvMiEzXC2v3E1vMpB4P7bTF3btQrPUVEwbMKV5RiemiVbA8N9ZH5eZUYZ4DmwqLh3czKNrvcmoN",
  "key20": "4cwKeTa7SDQb39vweXYz9WisbdceouJTrNYGF2kmmvHgkiYmban4RqYMc32b7DKcj2rMhwBrWHH7dxtfgfobdhsS",
  "key21": "5NS7xf9649fPw8QBf2c1Js7KQfi3fypCcTXTF4Dxfaqs6kczkxCbT5vTTrHVjU7PqTcZraDZL11929PL7ZTfU8zV",
  "key22": "2Nzv5wWfFd2UuLhw3fNHxBA287GKXET4fXUiLjGZXUXhCRiUqYB9i7VyeX1rJzTkjeihJpr2AzBoz9naWktc5Btq",
  "key23": "4GWsCdCX9AAasiPktjjTKBozBuKVhcV6JdtKWA9zkYmPZjfhMkiLYFA8L735aLiFTBPTExoK25vv9zozta9mSuhb",
  "key24": "4VHtCojPp3yng6oktFdGQdt1AboDtUPrRAXYHkS3Xp4eSGFmxaKFKqsicKDPkJVRrbN3dxDXnhxoxENJ63NBfwNq",
  "key25": "54CGKtWPxW3PRRCnqQWG6rgvpgeyd1RXVfqM2q9Ffo4pgsPhVCXgcJ9vDSkThHzHM3CTzGRrUJ1qUHZGuCm8Kdfe",
  "key26": "Crt93bxYY2HphPo6f6v1yQGR5iunmd3zak62SYVCxAFVaaZ2qrogUSqp7LJa7f6GYUm7qupZvtFFn6qUhTPwrSK"
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
