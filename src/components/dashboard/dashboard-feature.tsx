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
    "na14Z1FqkT4LWyVU2PnFijX6XYiohzLWPNiF9ahR7fXertPGdFFJPRjyJ9ghAKjeQ4rTx6MrFqrNtHJgHnxk4o8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qL9vQriHHPkDzPzfoEhv8Lczas13HJmLNrJ6Cbc1roZseH31BeG3636HRRWek1w9dNrHkj3rq36nykaMMZqxuEB",
  "key1": "maKgyK1d6pvfYGTKWTF8ciMgkdrfk3SZfRvQynFrAELpW8prK13bu8C2runGyLfxXPYUJH4Fmaa7UrXxHavoPCf",
  "key2": "36PvsKjAAh6uA2K49Qrf5mFjfYkgKHzwgN8bLsNrENENXy2PiyLcg38ZhaiartKarqxsr3kpvQVpJpnALx2fxqq4",
  "key3": "3wS7nFCoN3J5Ko7JyujMXHhakX8ewq5eDVnW8nw5UBfYL2rR4ePZeMwntt46RDamRgqmdX4hRGiEXZd91pAqchJ1",
  "key4": "ZKaKMF99UUiVPaFEULucoB9civKE1TNyx8Xw1dphMEC3oSMeu757jJNJAkM5DF8feP6Ha5YpgtumrQr5VixBaoV",
  "key5": "5orwoh7JCBjQ6be1qQc34R17D8puEeZ6vLTGynSmnnZHcUAPxyFV74KfKQi9ssM9kJv9WPu8HDr7bAS4qprjyNZm",
  "key6": "3QX2XBD9iTxFinn7j5PCwNihePwyT8NpcArRcxsF1Vk1WNj3vwuRaPFnzgVjpgjPvmBTtSqLQzfxhVCcniQu6jN8",
  "key7": "414ToKZeJ91Nn39qMi9mxf94gQPMuqquP6hPrvKERxsPMfCZmRf8DM8CjdM9MrBxt26NSZDjzr3ZbeVpiwWqKMk2",
  "key8": "2A7Q4TtNBUDJuNonv1dnaWqzB36BnBnwADxDr7zPgNC1DMgRvia2pjqxCFwXxfE6UgUWqD11SuQqg94v1d7rvSnS",
  "key9": "2NqtbFXkHxn3aVD7SCdvfotPBfrt7zfkMyronvfDNiPBa1PQYEdsG6cHGpDjPa3ukDY7VbTKN3q62DcuNwBiMi7R",
  "key10": "8bUTeek2mXssXYnM6rG6kQWVrwQQsvL6EmotFJyt4zYvjXMXjWrXgyhLWYKWVJSFizjtQEa8iRVsMmczYqkpDCa",
  "key11": "4MzNJNMfeJjP14Um7pgsjrWcKxiuDP8BuQuXcW2BeZa4AMgagZmgbmPitkwWPCDASpP5FRSYJHM6DU5g9Fiyc4Yk",
  "key12": "4cLef4qkYLxG77Vod9qYvF2Q7bDu9KQsiSeYGbsQhRQZZwwA51yehEosCAeEqKLf5X6WVTpSKgEK1sAbT4sjbJzB",
  "key13": "5Xf5Qcb5TZCmzXDsmKB9hLGQdfrHDjFRrsX4eUqq98ZhC5i2YYN2kXBRfbReDKM1k645biz2QVZc8XgG1Z9gftHV",
  "key14": "6drrnVV2SUaFPswMwCXVg5Ypybf739pwhuEydcMFnCgmWQPgWuDk75gqfDyDv6d19bb1oa7REDoKG3BsfsvKie3",
  "key15": "3c5Ppy3dzvUMGXQNYLDksxg7DVzS7DbnXiBiKeFr42BwaJ9RceRDtyMoi4t7TDk1zVa2o964Tp4ymq83XDTdtHvS",
  "key16": "4osEcZPeQxLzytYRqdbw7DJQjZaLvNCkAZZkMkKRLV3AVLa3ATovfNMpvNuatKQYFdFjD19BfqRf43ytjTzHdWnG",
  "key17": "DF1KTBp42bRK217T71JkUUYfi5X71rzJpY2CxSY9NEWJTqYBde4X2jqMonwbzHJpH7SipdMEfwrrBP1ZeZ6GjRN",
  "key18": "5XNSADDnTTpNc8RVN1P9VZYUxRUiEFyZtFhYiJfyGfCGhiseHDPyRxBX34ZkhUAEyrxnAmjDKJRzwTGGiwNWdg1m",
  "key19": "75BUZvRBtbZqH8KhPtKyWX8QM8rxZE7LpkkwXojSr9e6Se4XWUkhTyYWqJ5yui2GWCcXwwjdkHbNoh8y3HrGo1a",
  "key20": "5bbN5kycAG8EyPQs8ZBnnYBFDQsp91Mu5D4GBC6fgzEMCvJXFpAjfSMyEeXE49BYoHqHLUDYDSkX8Ywj1LoKy9ci",
  "key21": "3oticbhXAffa7MViDDRrrjbGgPUh8RbNDLvXtox2veZkVn4XZg1UVogtovXDJK4mBWHH1KZscC456AMskQB3i1eb",
  "key22": "4Y4GqntgDfJQeXHfaojisqW6LDmSBAjSRiafAcZBFyYobY3qfNbgfdkhDNoBHd1S4Xoz1D7CyGvaEJvhqYuPzRxd",
  "key23": "56PJbMdYPvNrxzc5GA3sU6o7TeDPZ2TGvMQCkYWkm7v6M3nKPE8QodRJMqCdip1HUkor3sNUHu5uWysm9RWJo97c",
  "key24": "2o2ExqyRGFvg4AHMcns3XrPbepsNRW6qoeP2ddgNuedsLf9DvGUWH86YuZRJ84jGEPgQAZaCkD16CWSMzMtHC5qz",
  "key25": "2cnqATPSuLrsXqD2Wvn1F32z4gRDBwb2VkPSeEDj9VQEA8J9rdTrHAMLwJmPxZRA3ifUF73AQ3SqaYyaxD5Bt6Rw",
  "key26": "2ozo53GBWgo22SqBGX3CdRMnjVMwq3aohHccMs5Va5vzQcpvXHxFMHeTioBaJA8qhBFQ3WLM7Mya1CcbJ4tAdrcs",
  "key27": "2FBvVfxtVvuxsLs52q2FBbsBkiw1aAFpx854mAuYB9Sp4mcnYsKnA2T2RxxNZkArM8SFMr6YJfbCC4WPUmZVZZYi",
  "key28": "HE9YX3mbQRp2QPpWzuWvRh5np6WomQFSm9qz3AK1T2qeSdeKeuBc97Eh95xRePCHC7mpkMdQoY9zRVbHDSqiGMA"
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
