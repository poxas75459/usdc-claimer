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
    "5huhwSZytgdJn81X8XG6cQvnfdHsRz1cdEdtHu3x4RsT8VrUJ7sVg4aWMYFY6dq7YULnyAtNvaWS2LZJdberX9C3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GWzh54xW51wQvbhukTQ22ifgHssMEwumPjPSpC5ye7p4gg3PepqeZEfr3D1y4xqvi1iAtijzH7GDXX1yMjqCL99",
  "key1": "2DUfSQpT1xPGz2Rc55FM1vMfRujcN7c1K1NxxNKFhethzDZQHLcdnLT89M4xs3f9dtmZtTYdLynF26gBxEh4bmac",
  "key2": "FW5g514ZLTa31aV811c5j7DQGXZenPTo7vrENnVBa81VhmkzXPiAVtBi1nZuVbeCmBfFczq6iGL4rXDZQUGxEsj",
  "key3": "21VMRSDqsPvTysnHKT9phCKhriGR1VKAWh3PC3ZvjBGraojWU6MnUAo52uof5NpHc6KxfxJRqr9JkMjDrVgccY5r",
  "key4": "yBqAFFcRvdAxVFqCm8vShK5vsgE7K3mTL5LZ9PsE6DL2EaYvgn7LsdUdXMVmmgU3gFXwkkvYRenP8rDebuQv3QZ",
  "key5": "3ogTFoe4dPUi2mUFBH5tCoWjg1xtMPZVm9SnrWQKfW3GA26wBHgFqhpfDGAYKovwPvpRyins9UFbHBmVehwWGqA8",
  "key6": "5fDg3PnyxZ9oGm6nL6VD8icvSD8uj7oy3uo487NxHxsU4xs9ZPVZGgioq8ySARxM5UAAX9Vg1Jjxr26jdE5ahtch",
  "key7": "2ft5sjXxVmPZBZpkW3f2bszuGKK6hE92WmqnT4pTMnQhX3NxxquHHTDoZTciGb2LoyLM5ndZvceT8Ju5BLZ2Wh6i",
  "key8": "2ev2pjC4JLdbeP2oiQfuKAcJmsHFHcF2qvsg4VjKJsE5TDN75MwDvdpFpfQ28AWQCAqerp7KxYW6XoGJS5mWgzn3",
  "key9": "FXobkCkbrS4GLxaQgxYfAbQJWnnqDHXSygDbQVCUiVhex1ot9vmyJ8cQVQCinU9avFHQLZA3fnTSEb77D9GJDhd",
  "key10": "BtoxEFjMVcciiPn3FZa2gXc5LpgzcrM2xc7DoQ45Pzbir3Jexpk8za5vFVSyyLZSUZDkCiu1XoDXB3yJVHJABPr",
  "key11": "pTVhY9EqhYMajboBfdJMhDDvJYcZT2xKaUCSaE9wpnLSyHit77xepU55aZpTDrZ6euPv7YbcZa7xB1AVEE6x3zD",
  "key12": "5D9qKmpz4r7LX6K52Z5aB3ZgDqi9eKd59guVnfr9XmgioSgwmHcJGPYw5prBQ9XaxS8avi3K7qG5fEu9ZBefScx4",
  "key13": "3RSZWXQGCYX1emDswf6VPwv741cFQLZfbY6hhkFfx8gZtWiuVNqiquoZyRFnqEpnFHFnX7pJmooWSPAohSydFWi8",
  "key14": "2inRpNKK5YjcZQoPbxmQ7rvf4XtiqJpc3sjpDuQZbXGaN2hdc5Dt7DHUMSZJ5PcPYt7L8EW1gowULDmaHorGHYmt",
  "key15": "56Bdz5tGR5g7tARpqhRDzs2jC4B1ZgDfa2wdQTxiEELMPQrGvKpd9RpPWbgUtZEvcHqHArBvSi35j8TMXZ8noZDA",
  "key16": "4UY4TC8Dfxc7vhv985XagxFZVkJsrq4hB8EmTC8anmwL2A12Wb5Hrvqd8AuVaJdRG8bc4VrNRF2CT2teQYTLWLxX",
  "key17": "4wamSskc8v1QT42EbJ7u2KE5iG5cKWkhD5AwD3YCG1hM2mSoe48t4dSsBYAcTzJAuoMHeXxnM8HhoxZSaXPzBxo7",
  "key18": "2ZP37G35ygy8mhQhHFsLBfibnt5StNsYJuwEagfN8v5sr8mNMkSjCiLq2tx7CfmShnxqSg1AbyYchyzJkY6nCAVA",
  "key19": "46xYXjciG4wS2ib1HCrngaG8Ln4zYJJEs69voW2WVsiea22MutKgM7dFJ3Ee6Lsp1cF9VsWeYUjHe5ABgeVYNe4W",
  "key20": "3DZwUsmgJW2rZtstrf8hbQWBm1q3gXajjCL7TwTpH4PzXN5vVUXnbNcY8Zgi28GpmLotJDVXVe8hwE1vLHMjnGvN",
  "key21": "4g9EXLaSz8xMBn8QjUBY8h7sEaPmUrNA4cZPLFnKvpGbNCDYeEiFSxz26aeWsnBTugD8Zk2ZEyTzCQQ3nKbf1Wws",
  "key22": "4NSDAR8EKVmFE8hE9xtRQaa32MTXTpsdWamc9zPzLX8dN99xcrCzZvn82NTpUixyG2tNgtETDao9gx5e4akG2NVB",
  "key23": "4aGSFuTP9cNSMhNbXNWF3c5SJShz7Xn7cXqb95PPdhzqm2LW9LbUdhiHx9GA9Abj4gWjXwDwQ1veU23vDBRMFj29",
  "key24": "2QUbASDBZHqnnJyEu9NoxbPdtqCZ9hfWR2ZgFapaRSEYfFxyPjULUWm13tkayveeDcYi3ZW6zinH2EdX5VSPoxae",
  "key25": "38M6raFnMpG8yPUssZzTLFaxzZAh949YMtie1QLrNSrGyqqELEvr25ZS6nteevGsAtxw5xfTdicTpuwxd54VFTcV",
  "key26": "4qnUeFXL9gUUmG81sTn4zCCHdUJxVXMyrkzMivDK8frVYGgZaogofMaurEcL86YrHrgJNaEhRiMBC4u1D9CDhjBW",
  "key27": "vApVtoN9K1nMZiMNjWzK8jqEXXj2xz6udSMEZrwrATNYP8b5xP93YgDVsgPAnnzgaH7ssZ8VP79hscgmSg3AuUs",
  "key28": "4b1uZGmzW2LMdN6XRmpovqJRqvtgi1W2WDLQDNHtRxrUgR8M4d4F83dBhv9GPczkzgfMXQ498nCbKeYDT2ziHw1h",
  "key29": "2t8srsSu15RHfyWYjrx67QVFoGGdRZvrKUsnHtQU5f2n6xSZsfLvEn1KFSm3QLzrbdprarikFaoRLzmnoWkmN51g",
  "key30": "37ktcda2pAFvKCrGXjW8agqPLMnGezcwA6U5L8P18WpQiM3eJQSKLXc7Rp5oezjcXFFm5KWQX27amzALtZGV7zhF",
  "key31": "4bqJeEkTRw7VwRLirA9ybF895BbJuv8pKphHAzcR5WyKzpWx1jFbeTqJR5v3TLdfunVJvGMQAKd1d4NwYjsKkG8S",
  "key32": "4cLKiuHTT94VprEQPnoqnuvaBDExKWUxnNgQ1yho4zo1YNH2hFFzgXQcdHVUwG3YaMD5thmAqiAHqPx5nPxx9e76",
  "key33": "2ue8iPyHKTeaodfdHBKDZwZp7Uwqh3Rjo7L1LLNsvxKRev5UPc8w58GWWC9SWTMvDNQwvJVwqRUqTJMiiNpoS5NK",
  "key34": "2HVewGGdCtrgqoA1nnmUjeGLzXmNHsxw8yVa8QrQquWfwj8v3Zp6QXxbCiq3gdxV2qRWyLDQYg7z6fLaB2hC1e1w"
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
