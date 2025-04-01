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
    "4QmkD1LvvpQ3TwAx1YrrgEeAYiDXiqcvrVwkazArPaB6irZsSC8an1ChH1d5CByogBtHQyVW67ZRSoj2CLoifyAK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k4Pw82Gng4JUDEGwath5Er7w2mjwABCt6Zt44XT5K8YnYRTZyGj8anGE95MY6rCxpRm4tGQrgzceRzM8to37iat",
  "key1": "3Uyds7kDjjkcVbMTEAi8wDMAq7tFFtVKCUtWjT5uJu6hdrWdQBaQj5KDY3r5DvdJEt1sEzVimNDbJTJ3wLDcwbCz",
  "key2": "53WrVfaHMLwrmndc3xLEo9EjR71KD5KKPKUT3rC7ShUWL1YhYXiyKxEcAY7gUDBqqk2HpNq88rUSEYuJ7QDUWYVM",
  "key3": "4F9o7ReERkEZTYrn3cNxdordFFYF5DxxLQfZpkmi7g9iyWKD5J6uNeBQa4cMmCsb6AXTUG8Ax8socMRRiwJmsfaT",
  "key4": "3aDfTR83dy44G9xvA1eP1d3XCfBHFEwJgHtaM2kfEzYj4nR8mbVhkPFgRM9vNpNAy4L8XJHHKt18Hsjhjb8DJaqo",
  "key5": "2VPwMVFL3KvqiJUAds7KmgYAMZKmfM8UWCLfByh2HU8xQy2w7NaRC2HAiDmruNNE715g9Ncin2A4ZRb9RUAHhBwc",
  "key6": "3kXX9uY34H3phT2hneHQFosKoRhjsR5VZM1PqqD9d4pyuXeNBbfZMoeVq141wpuc2KrJFN4XTY5mAoEsauxC4RZn",
  "key7": "4en9qYUw3TAtvuQVnwNm2Yyq82fzAaLNDyg6V8SykSe7Muow8AiHeG6w7Df8gqpgZkp2Krthb4KmWn23Jc8SsdrL",
  "key8": "3G1RM5GC1GwjXZZAgMKtNQNqCsRYFxaVhFAfj236RnvJaVrB5Sx4eNcLKvATgaEbK2KZjLEwrFFMky9oKgcPU3xP",
  "key9": "4hVjTiqbdByrtj9Tnkapa8HBdWWsRdiPGyzPhkcbhGeAAwHyG98U9SCNYxQ4tEC3RwHxeuXmNbEGUJtsWw6dH7FC",
  "key10": "3PcoLC4V1CEe1WGdmfzt3NULHPtd99Db8Jk6npwtwTixqxXtH3LN6KY5GQ1mvXtjTp1Ns1ZdaBZoGDisf5Kak6X5",
  "key11": "123tKqvcVe32wDkMLhm74RDHsSj5AnniGztc7bFec2Nct31mfWEoYKT5qVtpTxHm9iZZR8awhk6kgre85pHSaL6F",
  "key12": "3jcyL8L5nA1W5CX46wkYKPVB8dthejSNcUFuSsk7Y5f8YQRbNVwbvUaNURPLXU4UXo336Q6efFMbR7qzDgALkMzj",
  "key13": "2yDW9infY5ig4ZNAJJUASpXr7Zt1JVYQq4uNcZE14y2zHoxkQyjnaoUst9ydEzDfG86h4Bdbj5hZwNapxHjYMTTQ",
  "key14": "3Fh3zawaEgBFtTGQ7h4EzQVML3BbQnX8mCHNoPHaZquXxPxrgfDu4oaU1mifX1mBL3aUskFXQKghE3AyeNBwCHGF",
  "key15": "5B3WebGLypPHPLvi3DXoMXjZw9sNYYfab7orFbCZ5uSbTnw4ahQwgeHq4YDakEFpJoZDyHu7hXhuqmWECT1A3oKM",
  "key16": "3WbNF9yGgKgMfxfiuk9Vx6SPGZtZcGqBB3wBBYEXarkFrcuX3ZwzugeK3NvSDiedSThvRk9nu9fBv2a9mPucfP6A",
  "key17": "4VPv6sQSMVagwKxBJYd2iYb94TpXsc8Uc7C9W4hdsHjFKptQTC2yTFtRub7S1yYt3s6MSbjJ2nVcwitmm9Aso68U",
  "key18": "QZPDfngscBZtWejHBAmLNJw3LAL8HgqBWrQ2Pn1G8vUQQNH5ew8NxWKwfnDYAjyML9Bjbem3RwSxoQDCcMQVQPB",
  "key19": "quRETvc5e21wznCda4SiM6bMZr9kuBeYQ2gnSWAk2LNhJE3Mpbxq6Bvu9uueRh6yV4qvN71LgkgXGdHWeXQAnLM",
  "key20": "3KJ51zFN3CDfgCYWc3c3vfCPPBZ1own9XjBpQE6GjkqMb7J9PDvmWHizhjm6zfX4nH7ziPZ22y6KwL8vyLVtDRRP",
  "key21": "goxdzCgnjkGj6LrAiRJrcuiqeyscC9xBjqAS1VmcLW5V38gzZBFgTmkv2EbnHiNSdMhBtYSFs6ErM6n59p1bR2r",
  "key22": "246LGuJKoTkZJK7GVtK6Sk1D2wT4kJyQN6vn8M8Pmnm5TbLPzHUExm4T5kokMu2U55x481pf8FC7KPT2uY5Nkosc",
  "key23": "DZHwRCXknV5XEpYErBEBo8uueEn9dgp3jNQZvw9rEcPGeYC4mLd7ZyEPruG4E2TELHeJCXiCQt2ENTRQJAtg1ki",
  "key24": "3xrMbea9ZbxLRgMH1Kd5nMdVLK5ZRqSNZTK3hygo3aBUz4MGG2EhWEH7zsKiMoqov8yFhHZJv6gpXGdcEB6bRioe",
  "key25": "4WCcmC9y1mbr55132Fm2fme9nEDpnnTb1yw3CTRaWPBPg453cSiurp53xk2aYDBpyHMfi4ZvBvk8k5BPgHBZ66XH",
  "key26": "52wXn6nkZbGxNFMTp3YcoLJRaaUgz3UPWHnfjjg1jg27YZJLhWQrGv68wJmqBXopcEHpx6grSivkK4R4h5f9rSn5"
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
