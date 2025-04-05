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
    "2cVi8DZr2h5XB4kGLyehbskD4XNa9nCBkTsoYNxE7xNMxGHHU4RJ46vh4FpCoZrc1Ryzt6Bfpo2RzFUGJ9QqvhRe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QPLfVxx113NLxnmd1dsbVhM8HRMWUDygTgnKgq4AEd3pUJuuVP1SYVZMMbusFyZW6DYQJDR891jnQCrEoFz6sty",
  "key1": "2uKEp2h7ayywnXe35zdZFoH7Dz4gKU292VRMMx4jtTpCCJAfXLtYunbx8Dbj4SRxpyMiPuCjSeewJK34fsukM5i5",
  "key2": "41ujgKNtxkJ7RhwLFabZ9L3dzpCxaXnskcuCtfJiG5SQGepEtpU18broZAJpcugXYTiVeZr6ukUBzawzxRXwmJAB",
  "key3": "2dA3RamRbdZTXDFu8MugZ9xLSbro8yVtPorjjfVm4ENVsv7xXgvsLV4C78R8mhuWm38wjDFK4KwLYgfPLL9G1EFy",
  "key4": "2tEvfvE276iNSqNXg2ikcB5UCvbfEJSYwpqNfRjrsDpB1QBJ3uCVHc29Uo9ZfrG3YbyGt7jnhDTz1ESq2cAzCrax",
  "key5": "3h2PmXPPNL8yHccbPebNEnAByXcoCTYq6AZX8aHajJE2nkbwpG8tP5Km4JoVeZuhqVNPjXtW2ASWS2vapUyAzbs8",
  "key6": "5yoDNC2xDDcR3CnsnhVgjPaecyevRxeAtUbHC8LpLQfXVpPNKBf4X2FBSMpm1isermm3DogEhHs3R1LQquFx6Cs8",
  "key7": "45XUL8MHCPYLWb7vfAq1VHpXat7bCYnJG1Z6Nx7bTQgtVza7jcBh3CYKLp6KpoVVNituzRRZ6SyuDcKBrBoVYV1c",
  "key8": "4YBGDBuJCLSUjKmJELxXVJZdgk89YTjepLQTEjh7pgK1p6YvMjD3iroN6tq1nsH3WUtm3NZ1h2LM4D3PYFgKsQyf",
  "key9": "3LS5BGq8rYjSaF9EUTh9vxeksEMoz3XpscoQ1Du3UgPZqdNay4d5MDWotKM8d1M6F52m6n2ymxp1K3Mngo52udzr",
  "key10": "2w6wyXgLe7cdwi2XTAQquwY36yKG9rx52DAcMpvNsrm3B2dFi7UmjXAen4X6uGgfCtVUKoqbhUDoAtsFC2YtpxyM",
  "key11": "46tMwNA4ezuUkUD4UkpBe1Ssg1oSTqEQG2U9nttVaxQgiX36WRUWbr6Wqi8kWQHV4RviUaEvv1ixU4mNj8vckEhT",
  "key12": "5nHsxju49CZv36XSHGFVf93XnoruEWmKYrAQdtLUrnEcvfR86Ta7aQgvLvnCLZeonSecxyWkNZeGBYqg8VBRqmtD",
  "key13": "HPcbux8GpSCLGqxTNNMgNAygzCgF3NJP11Hk6QLqyqn7M2LgQBwz83HHy5SkzRqahou1kjH6JH28YenLuReuHGq",
  "key14": "2hPE6MNGgVAC5EQSSREhQJ4B1AysafZmFWgwHrjBVRsiwwhhUMRhrjxEya4SdUDUYNenBCKFu6xG6FE9oQQP9sXe",
  "key15": "ku8iwmHoZpxadT7TzkVGpNWbJyhUcv5ff3GE9Z8k2WHBnV6KjHorbJWqpc4ydZgUPo2VZDF7Rn6nvp34FQoFLTW",
  "key16": "3TFWN7o5waWUfSAf5LzYbHtAiYPKxxz2yHzjawFgPQvoShtWkbPuXFhRa71Z6AkTcWGWjt6cth8D4WwaZewC7jUg",
  "key17": "2KjS4r3ie846gBhvgkovk7cH1WCSULnftUwvHzXvdkmCEas5knigNUqzyqsCa6TjbS6dCwWSng1Afh3abKR8vbMf",
  "key18": "2Psvzxu979k32pdq3M9x6KTXZUPZrSPgasS4DSArMdXf9eMWcBETCwVxMiEUYRWFx9q97Sp1erkhQoudpPo5eo18",
  "key19": "wkBmbhiW9nNv7Hmxa4zph8wv5wXLQEQ7ENJp5wFi7LVFDvSq2nyFTfZaNo9Qo3DexTtqU6E3mZ1HBEej4xAYW9Q",
  "key20": "381zPiisTN81sz9hAYaUFz53Dn8nLGg1jD1BbrygdM14FWGxmooFRFx4RhqAs8um3xVyK6XqPkCzQ9h59ZLVQuXB",
  "key21": "4ytksdLcDvRdkug21MBabVAnbLic8vWENGhNytReBJHGgZVknxmjYM5xNkN6hXB4dzXgqDtt4bTuXXzy1kVeRqBU",
  "key22": "3682mRCW2Hj39oKuU4axQZ9mYShnj8j67Bh5sG2ufEzohLYGQ4AST7poRegKKNaq3tKUxxKT2ccZ8Tt8Ci2MHJBR",
  "key23": "4TTqHE3cSfvVqpp4ygmvHnoDpGhhLGo2WktVZaSteEQa3sjgVgxgVGA4yDBavLFoDsmYJ5X8yDJEzzKiqsQRrNSi",
  "key24": "21B9HucvLgi8GEpfZTyTJbKK7eCU574MnehL5Di1yGyjLqA7j7VDKJodAFjomnurqWoMTWrQRY2az55Vx675LR4z",
  "key25": "66T3s2uRssY4dur29xwRx3LY7ydjjrZUfPD2Hf43guZb16eYZMe9WwSjQjaKr5tEZ2tLxaNTkn8doKcBRmJ42XpE",
  "key26": "3mA6kkfge5j68NvJeoiREH5TTDdQZceiJd5FBVwRSAjmTkMGV3sB2K8kF8VyALHWGnaaCkdrcgaYDa7AjCYnpC3a",
  "key27": "upUQXZoJVRoKTqs2eavmyuC1HQuismxrS2orygBskUgB5e3EQs1kt4SDB23Zf84YhJBciQZvP7wKRLvE2ceL1Yw",
  "key28": "3JperYj38kTnhdMWvD38f9S8yUd94LuaGP7kxv7EyBdZeG3VkJ4QvsjfT4UiWys2LHVwGywX5bnHpfEppDdoFFNP",
  "key29": "2t95krZTQxLfzsxAboraed3ucR9aqLmbashp9mCSHvHqSUaFvDugibvruNg6JbDZ1YsEQFgCKgWuQ5J5NL7Cdwcn",
  "key30": "4uFekMUfG2E8xAqYMw13ALnRwTaubmiLxc3YHD61riozjwWTEDiNcYnZL9koAW6DUNc81hyWawnXU23axdT1CUvL",
  "key31": "24He6jecmsbYzXJ4TzFGGS6LSspRFwsPood5Fkmv5CQ99hjzYiTZ9UCMjMSVqwRQSxur2F2CUNZJv3ox9thSjmyj",
  "key32": "652ubAGJhbjqkdaKqeSaZBkeGtgqENZRNVFYASJp6ANPh3Pu3Mn8NSw7hx5z97RnePUASXvuacU6wqUvEmSMUTTW",
  "key33": "4g2jToYuTmjANYa34r13ycDuHLUFJhiRyyWMRt58WrMK6suBtiJxTRifY4qrpyxJmWsKvtxN66Lyw231m2tPySkR",
  "key34": "4YXysDHTWRYThiChGXCSJfTV2K1JmRJ2KJtL3qELf8EGhukNNSBsASvdgS5VaJxz78h4GD59bGtdgS3HUF9iYz3f",
  "key35": "4aE4zfkNAeEFJt1pEiihRF4J3CU13Vvkdv48JGpMwbUBprMPyGxHdCxLvWwA7ANbrcPmNL36VL59Wf21LXXkzHYm",
  "key36": "46T1axJjWZD7242Pa7CQBXuFQyfYdsCTSyiERrRXBpbCxJfxSDDRXT9PAS7rR5VhYkqtCotttMdiFCRWzxUhthXc",
  "key37": "3GxqLBQEfN31krK6TJRuHqLjygeWWp8yE2oEuJ6jC1ZEsMnftsdzv3JyBorUem5t42PPYHVzizAwP9kCAmPCT6qG",
  "key38": "3AFakMdNb4ZMNiqEiTxN9jCGK2EYqvTMmUcpDmNCkpKE1tmnptcs6WRKfFLT1npWJMGXy5zqqsFk2zBMKEnjr93u",
  "key39": "3pethKjp45bhkvAtkQgM3LiXkHx89wDW5EEXM2PYUoPD3Gy96gDdDYtWSE274PjGRTm3b23MWKyx782ZQimA1P9i",
  "key40": "4TCwtdP76Nf4dCh7dv35PTmvGtxfHAMNrDGfz8yjwMSUP9WwzXp7uddToE7SnNZcVtSrTqiqXNjtQVehfFXucTYT"
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
