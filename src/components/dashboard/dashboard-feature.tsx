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
    "2wHaK1Zbm5JBsL9iWzAxYxh5HgArhYXoMnWTX2wQoih4qLLLWXrfdcPikJy7eMW9zpnyrJzWZT9SWnjpaCondQFr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zj9fQBTjL1336M42UNJjRQhS4ck5XctxvZVWGfmKeMXHVmV4AZ2m95CkBjEbwuQgZ1RA8wx1bdamZDmSDRFcoBE",
  "key1": "29KekgnfGKyCNVK5F4cSJFT8f21fqcrsjEdwRzjPmmeUEo5sTT65Zu3bbmFFjpCPpYVwGSnWhkHEMiAZosKzV2aZ",
  "key2": "2oTKLhxFLgH1pteht7vaT3W1ZNEAYmBzPeQEMGpMGCiet3M1VoRYsoPVC9SYBenFepxBKuMqwPzoVXyZqwr1kEW4",
  "key3": "43cK6V4uZ2rER1tVKXiFro3J52JdQsqWpS5XeT9qQf3yqwaHsS6TMinSaJ1u7qAQk3F1jMkgGYEwmpfZyE3rMkzE",
  "key4": "3DABtGj5573787XkxsMXMqJ7NikwQnSHoy7YwQhsHnvbeMjX3pKFBWPYH7Jxw3TMGixYssyYuLJpcTVcEru4m7x8",
  "key5": "kQYr8TkY82L5A38vDvMG4bz49bDFbGLe13LoHL8VLPMvyHF2rxdMkkXyDdznamaEFY1bwmw7cpWfrXDAEm6fZGX",
  "key6": "549JN2tCPkJswaptBk4TnLSkjzsmFYTurLxMwpTRqxhxcaNYogbw1X4DUrDqREbEs2bManar3QUdaiJA2kyhiJBL",
  "key7": "2E44AmaEUTF5R23nPDW7HjiPGZGaezYpU7P4TKKjKeJ58emaEZ8PXi12fTvJzmVEwSszFavGmaaQnvhNZXPoL5xp",
  "key8": "29bBiGAABcmz5Zu8Hg1pfBPDyCuHHUi44EKUgbXesnBGkmmuod7ikpCtwxFaw7hffAHoa23athLs6PqxJLuww7Sv",
  "key9": "4BuTbXr45BpafZ1WTyPY5w4ZfoE3cMyTqxLKyfN6EiLKbmXh9xfJrT2rkH7WKMvKptKtmmwJvtxCbs7dFajNAAgU",
  "key10": "5WSQh3vEcMVwU67Fo1hevMnB24zt2Jvg44gYFMVZbWwR7viPuYAA4yFoRuRWCPMjejvMsEw5mrRHAi1D8SkvG9gj",
  "key11": "5AWxfRsSZUcbwEMMKFcvnccZCqJu7BjppE4urCyVTsDzB1yoXnYpFdV4LTd5VdNadedk2GfzX2GeTkYEjspF3xBS",
  "key12": "2Dc5eHzx9zfuuGF1gBpU97mX2Dc2q3VeL6XT118yyM2kauuqCcY5Y3112PDHGg8NsD6q55Du5pPBXueVw6F2e8rd",
  "key13": "34MsNo6thg4fQAYFktnCdMvcpiiMYQViConvaMnNpCJ8yc6q5UdmAPiLQvcHGfBRM1zNRVqftfY9i6nCG3p4sgA6",
  "key14": "2U5vpCkBfdwU7NXSrDZGKFsRWaxVvrAd3WEu3GaJgbxybUvVNeV9riLoyCCQNgTLv8RNdmaQn5eE7Pg9ChHGdkm7",
  "key15": "5gNgckW3C8Sv4LAbLsjuXUC1jcProiDeiTg9ZBYzs4SRqvspXg99j6zscu8RivEHbDCTXUzeF9RoyNDFzPx8KAj6",
  "key16": "5qyqjDCXKJoeadGJyqz4Ur1YVcpfq7QP9hgvutRY9LU87nEDHRdsBAvLYjbkY3iAAoxZvJxEaXq4BFLX9VpRTTJb",
  "key17": "5oxYoSFWMGXh4SEMi6auXkCjY1qD5SeY5eKK3NfuEhm3omjiFeMPduX1DYCE5ZZdq3nrygPHp7YNdZd76sdF1F9S",
  "key18": "2m7qA73bs1kNFdLvUMCvp1fNbz5c2GwfcjsX8tB3Lj9jjSeg8c4pK6ZYNqispNXc9NG5wqana9hcQQH4CcCxaTVD",
  "key19": "31cGAWgYc73Tddad6HDXnwdjMDLJMQ8hR5kfUTUVcM48z3VC2LmUSj9LZYDaaDAiLNtxyp14hAv5TNcggJoDTbJJ",
  "key20": "5sL8GHiRbqUWYUnqZFj2vfnLoVUyFFf73hwEdarVTt9wrJqbyiFGmpv7ow2gg4wRf38GCZc4YMwjCSiRWvf98okp",
  "key21": "2ARak8chNEaeqebGT3WbbngfXMnLfD4tkzMzPxuV5pBWT9cAbXQjf7cK4dMUQ59pRzFUdzQ9WK7UsdBGWGpiT11e",
  "key22": "4kVTRmPw5TkDzWnTfHtDN6DEmJgXeaBNteLVz6XcDMEqjkt4q14omHfnjbdA9DyDCtW1icRRvXAJaacjY7PrEH6h",
  "key23": "14QausEhh6RjZJH5rSMFVxPDm4baXfXzgGMcckEtiz3fkhdLyEBHCFf1F7uAZpGuAj2KVjqZHmezSVW2imhqvKg",
  "key24": "3bnvrPd9CCTsrJQJcJA1fyT4g4DmtpczBdvSEnjDNTFLmcWsNkoRqEYCE8DaFSonSbJRCXfKSfxiwPuKsxa4Nwut",
  "key25": "xmgZsSAcjeW4qcp5uPpwVoKpdcZqnGjLqbtDswZ8HcvoPGcs3mxxzh6U5hbdguJVDk4SiBFRUsJ7k9Pmc6p55on",
  "key26": "9QCFFgr4Wt3KEFP4KzuDvNc9syn99QXh3TYQ19eWE9628UJ9P4aoZm2phiU3MMoTair5kBLY5VbzJgPUz24gASi",
  "key27": "67dzkrkQ4seiSG5xMXQgrFjbrzyqujzb28FjTQAVXRYrrVjBXBVc5GDpACigEzwoxGC5MkGpAm5n1SYrKJX5gAte",
  "key28": "4GbacxKMVJeKYdPHhJcMRWYecAHFdZMz26QvD5XAvqr3pRTSjntJnYovu2UGQfHEMqjcdC5DtJXZXX6nm9fNxSYo",
  "key29": "3U42aUESkuPFut6RiQn3APKyskUiGJ48cGZgSbprWLXBxfkNssKbaW1t2UDyybTWTR8gFPP2bsSi9coQoLETm7s9",
  "key30": "3W3GVz6DmC4DvQ5GADB6aUyWpXvf2w5JgNBrz9frmchN4YKrFqkGvsX5tPobShJmN1iszVVXMqXM7ZJmVTQ5fanL",
  "key31": "xm1DHDwfJFJhp7TTBb6nLWSUAFiQgLeTnEjJonRosspAbrE8sSN4tpjjoC3kBCXxENLzomPj9Angdu3xS7bZ9ua",
  "key32": "4FNkBCjpuwC1T4HSXWp88QYUWR7qFuikLWLVgjezGgrMzZSG5hLGPwUiBh7TqcYxks7DY1eaG8SUnQsMsJHwoxtu"
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
