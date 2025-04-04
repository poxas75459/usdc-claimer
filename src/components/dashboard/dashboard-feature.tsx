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
    "3UUVWMbqFanrzR1stskiUtqMTLeDXGSU7JhN45BrPCS8yXtipun6RAwSMNgQ3VNq8SSg8FCS32R9tZ4VKVip95BW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YQn2zQkZ57YnT6Zn44gtHgMq8wTkBxHAcjeuAQKV6XXvkE5jTkNvmCdU72DKkJDrWDRsoNpkB1uPmjviZWrQsXe",
  "key1": "4HXHDcSpmHxGGw2KY53SyRNrsKe4Xm8vJKXUaEkmQbi5VATouCAEU8F5chuV5k5DaVqW6zcCQciazbEHiEg1uhHV",
  "key2": "PV54cFgY1W5jobuX5H6oveRR8RnWTuyy15yreWi8zJPTYGj8ydtSB3f9eWXiCsJjCRDRLWYCyrAdmnLmDncpqGm",
  "key3": "5oEx89Be5NP2a1H4RTjASnBMfX2ts6FzcWgWyv92jXyg6RGo6Ued39fDFmqhdnwE5C4TR1vKP6uUvLesRV86DVBu",
  "key4": "3Rsv7t4CCT94KoHe9uw6c6uZndX6sYaEfJKnQWSDRot1eyjqWVysUqtWpvDrVBgQMgVMiypBivg4PtiJHSXfnvGX",
  "key5": "4QoJdrnBb9dwyCQSP8AzkZACuTJ5n9XFkq6vzik8u1zHGyJma6KkJt5TjVHfYZJ8qrZMw619NkYzTQzPYSf6F1NX",
  "key6": "3R7ajAr3WDk7uRQEfejKpyVLyuzKXUkJbFdRwv4YWb1nn4B5nMsFiKjeu1cFbe3miYs2pZJZUjt1BfQ84z91tLky",
  "key7": "2EzwmhtDkMp1j2PDRZDC7Tji3g7nvDshXcXtqY6o5A19kJiA5rNpoz6w8he53fJFGzfQYsYQi6Z7ZLHCp6RwjgZF",
  "key8": "4ACZmidc5SZY1HEfhiYuz2mvHSvvdfDRLtWncqDC2BotfgQ2RLikN37i3ysosUgasm3WGch1u2TKYjr4eMwCtxbF",
  "key9": "2oXkHqDfcV2xwEbD6eJZUmu3XVLw19PRge8L4ba23sRfvMkSRXU9s2uP4xu8QxKmTVgCoALuaueySKNX3JagbdB6",
  "key10": "3BuLY7pjqpkjNicpwNtYYuiH6ZxgamtBVDqmzUqoYTdieKHzhssfSdtbSt987UBs6VaoNj56qzLV1YLr7qbmwiVk",
  "key11": "nfEmu4GeJydNXHXVqq1y17No1SkvwnE2L9AHRm3M6PpfTATdzGb3E7EerNQshmzAKWJCjYM6HELFtqz1P7ekbPo",
  "key12": "5wcmyDfeTe4GzwdadjHx6CfqQdAeuVrPci6Kd9CgxK1gdzvUxdbwbwrnN2W1AhuLYRjLoxFtmJoGfUCVzBJEphFz",
  "key13": "2zMbE3QVcoKn8aBttfNgqpxsKsWRoa6Z4FirHZoahBMKEhXjTaoHJnnMdEj9Zf7B9yTtYDZn6kwG7Ai1GxqeFLfp",
  "key14": "4pkTpt4E8ygiT5LsAmZMHWHAgdSp4vnyTJGkNpsz4fbutsKBrce8TrhJc1X27QX6REdVscurvEZKa5KCaDMTHYWp",
  "key15": "4ujzkAJbHJkszAiaaZ6z4ovGoKmQ3F37DDxZMxtgrzarfDtJeYapyDgodEa3vkWpj5Gti2YjpWvTXcGc5kNhoYRs",
  "key16": "4ovywR5bxaLxaeUHfEehJTbKoBgk9aq4YfpTKiZkKT9NdhLwd4XujMLUP1hatm6JkPbFuYGiZcHqjZVRLHivTGHi",
  "key17": "q5tm4SKPh8a1rpvoW8JqAAJGo3FKVBea3vcmWAxcP8bivJDTHWwPj14Yiknoj3EKN6sCToRoU1Bzt5hu6d63Q4U",
  "key18": "Ex5AZ4rgJhC1tQpAkBvuX9hcYxfZVFsn7csBnKpXzc55TtnSFx2cZqjwrwdH9XDLsXbYLvr8CsZpyH7knC5VXZU",
  "key19": "3AzEqTUywiqGaKwYfdwhNpP3Zqqb5cAbC2Gn5bezdXduSoSFUvSMzjGuqgj8E3FkUVqGTe5ub6V7bpRAZ64EU5XX",
  "key20": "3rPRvdMzAcs62Cf47cS7TfXRqm1rdJsXsxFE9vSYT4MeQuhcb5vE6okohi5X6jyJbAxyfUVvhDodd7dQetuUz5aX",
  "key21": "MTJQ7n5FnnUnXztCcX5XRYhx6bNaiQ2RSJ6xcbvrRbeuedzA7tuzSyFX1D6Bt9F4FfmEDVKNULxx8YawUD4JDkE",
  "key22": "5Ak8sKXPtf3N5YwHvxj7kHLhcCBH2Nh5Koaqywcq4D4TRwZsuvt4pXe6KsBNcU9SX42f7bnHBVrq6kTdirDqRxpj",
  "key23": "2MXabUJ4T3EoUrreKfND5veXusBYC4wpVnkhC9kFo8Q1TcfCBZVkfEDhTvpgd7tZrbZDRqgqqAqRYZoAnMtYSeam",
  "key24": "2MoXNSeYVh7esjMVd4yHz7WcBsmsfNiRZNjhPCiPhAxxue4dEBSmoRZHvz9oncJBV3ixefA714ZySUt6FvPx1RFE",
  "key25": "Z3GEaecv6BqLRDre6ZKMHEeaVzhxwV4CmQKLpb1oTx925wcrNuEg27zz8kJD37dEwy9scM6H2tyPJFmC8zxWu1c"
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
