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
    "5X5GgEGwFkJR7SujvFhPtHimHRzvaEKTvdBqodZW9sWY9JuRJAWFy7jzLez5rrf3QQB4VDdc9vdMy85CZ4h6D8fA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WkSkAURLVfmg3hCUk8a1iC24SBspXSpbVEjcSkkSeXoJ9KF6ziddUfFkpkNML6eknb9L1yfKk8UTitrDCmPLUX5",
  "key1": "3WvTaQVHqA5X8ybxqWWiqpvXrXzyBRd1RmLtHGarmvTGffxekVTMHUy22kaP8mL56fiyv36PpFTorkDovrBGi8MX",
  "key2": "2cKKvUxdgrrL1zc3Jqib9ZnhhNekNJxCXEXHp8r6JnE7cYTCdbdcAq6iHB78BVHRCGr8ZKWqgHLPR52Geu35GkKd",
  "key3": "9c3tDefxpscMuFDvqd3Mc8F4LZXvZ2BL618inLN9pSmgJb4jsDKtJZCZAULgVxUx1cygfJJCSZLrDqXrAbx73W9",
  "key4": "4zaFhZW4nBVuMvmZjU78ZJTMq58Zn8bdPJdwY1hTpH7kWN3SoYQCKLNiaJyJCywgpaj3yJ9J9a9iwM8hXESjhhmn",
  "key5": "4PXTEBgSpxspfozpAn7SK6WPVRcv9hEurEgToZFv6ZFKbK5Wum5EzafB5ydW7rdGp9xcUtUyw9JdMt53xbHc6ZT2",
  "key6": "4jEmUJEd4qfrdjYKMHxtoiETS4HNgkYANmpJBWihJNjFTbnEScMDoLmBUWV5LRS8CfgEYkoU2mkKrPej9okc94EY",
  "key7": "4FDTSEJ8c2YuLfrLmQsgkUXcvFUKjGWwXXydL4CbacVhZZ3J4RTTzWxDfiVvpQrV6ENfyzVjzPxQQ9FD4B95AyFm",
  "key8": "czfPUS6vrcfXZX12vfsu4YTyNn1ntJSLsmV1b5vvkpxZL2p4YZsbWKSSxB8fGhcc6Wt1RRuzTyZSDE4wz8TRFeU",
  "key9": "DE3G2hFi34EH5gaA5CxfjUeJa6cPQRQhhVvnhRD2ei7XxYjxgKRyNfq5mvhgxMHUpkARe63GbFKatFMXjYB1DJC",
  "key10": "ZJSv7eFmmKtpCg7sv2XqW7XhbZC9K4WZ6gtf3nohq8SEz3V4PmDWRZJQuEGjh7Kry6HT5YGoditqgHTWfoF1Hbo",
  "key11": "2LJzhtmaixU389rQ5bB6gZmVMXF62rcTxNreQVoqa6oQ4GvwMo8RBiny1Wn1UHKnbEcFAJHJaLwx5TSDWVRMwiRd",
  "key12": "8QUVJFokvSJbAnzSJq1z6XwtLKZYwCqZ9Z7JhP8rDkSh2a2bLf75a2S5miRca361ZHNMA7bvAgbRybWVSsqTnTm",
  "key13": "4w6VbuC85PTtN44YW4BE2U2U78Jz58FmUkNaVXyuVM7kcgiWWRrBv96nDANmKcEjYYSK2vZdF3WD3Mv82vPy7mcx",
  "key14": "3EZGY2NCTyQmTJ7azEfcRYegnt5crxb5o95gYV5kdAiJ5F4ejxKBMXsLszACQCrbtKs4jR28QpwDG63B3sqtYigv",
  "key15": "2V8icWFBHzZqPCLctsV7zgziQpb8EPmMdseLsMyQPkEbR3Hzij2xSyH9KvADF1tbFtJhdZw5azZdLJFWwPPKeCBo",
  "key16": "5TC1QK3RkMNizkDkVwNu4CVU6NAqsdjHQgxTBsjxZEMzxz6VcQQk2cxpxpz1ki7fLffoBfY8cTqJ3583ePVpiy2f",
  "key17": "3gGNf4fkTkb3NeGrmHqQMiVLRBZbHC3xNXZyT4Zr4c1D44PjYe6HkXQYvm8dk4UjsQBkEyszXVqfAkABzzdWefQe",
  "key18": "64hkPE6VWHUogBAQWEREXHLvJgfL85mPwrszX5bBtCKyGuoxPRwAo7E9M9o4c24z8RCLHuCGMy3sPkNFPDwXmGMj",
  "key19": "4bmNSCeT9JFFtk9u3QezY6sxZMcTrbLfq4wkvPyYQsjPNVyMoQRk2tERF2wzbzQYTDFQeVedL9eyVEXbfZuyBSFN",
  "key20": "3q2tu9PwFUw9ZfFUunE5vbEAeH16neydMHtuDv9nCqzSQowVPrVkbBUpXyizpGBj4KhP86UKaq4XLcLx8rqbpB7j",
  "key21": "3KrwPgHhhpw5QguggrZpPmHk9e87Z5WM27viVGBUDNmMW8KPpyrnw77oeRb9sFWmCM7hTyaLCoQ3Ea4cPRxgQHkb",
  "key22": "5CaKyKPwSWU8q3DxRh6LajwuoTfonucT3RR6QzKxLXr2nXBruqYQfxUhPtXcWVXvqCamd8QM4UjLq4JZ1juRH4mx",
  "key23": "5RUDoF8reYaoXqVQ4YpxRV2Avboi848BjcrZjYsGmajFkW96juaZGnctNuLhBg6TJK8LeG1pwAmdrNBwMZhmQzJp",
  "key24": "saR86Gft1yxqCGi22H9YRtTgQxeamFuzaX6tiJgKiuopLRb6BQHTg6mcFRu4mByrUfLFr6oGiLQdW6spycJAnW8",
  "key25": "3gs9aKi3fSAUw1nfjqTgKc21HPwxKUAsF4DSTWt8iEbRYxrjQmikjDS2JCA6nW371ckB8vMDDXMbbtANN5P7RW2e",
  "key26": "58ct7VqifgNET5fAiANg8y4ghuRaSDHuWjv84rmEyYE7EKvdWGQiciP4i8ZfKAzZeRTsqDHeXnVJa7u55w6JKL5K",
  "key27": "2B2buRnnipa5TmcGY6HSv8y6Gito5nuWwZW3WLEkARYsTg6yyLkBbexiRjSr9waFLDzjPw9G461LvWjxNPnJgjAf",
  "key28": "2EWgx7c1SFv5uJ7ceD2LpLJVuKGuZAoLCak9em5tSgfvUrGUuC4NY2M6mb7vvTa6Mnt2jC463ZojVFPDiTVbKjNG",
  "key29": "3qr9jDcMJY8jVRopasRR4L5cjkGTgFK2deH13MUpxZYpHpnSm5P11poS1dNtHhQJ6Cr4yjBxgG8wPQkvEvVRw8eT",
  "key30": "nsp1y3EMQr6DTZNVgoqs2eFQ8mb5pcYrk7FQd3tFzQRpfeDiR5KGs9mSMNjiUGmkhBDLnZx47aWVMgVFft8YWfR",
  "key31": "4Q1mjHGFXqQRUmn8AQHnfqYiqdq9M4G8suPym82wmFHZQYvkteHGrg6CYFdKXSiUuBazg1JUxjKB8tgjGgKoBYzY",
  "key32": "5uE7rQxXchZRBKr1gG3WqBYzqF5CqUakNJBYuQPw3yU5vARBKnXPSzJJxL1YatMtnU9ioHGXuUX2yojzoQ3eqAB2",
  "key33": "ya9QyukxJzGzHCjFNEJ5bTwyK8kyuiustBd8HA3QP3FeWf8wcPGNRJDiPpN3SdUrQXmxa7D4bNQS6TuXnJG8VhH"
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
