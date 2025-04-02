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
    "8e2MuJh7nsPJsaE4eeHQFMLGDVNzUwg6ey7TwxXFszRTuuufVpthwnhMj62CaMncxWd7eHH2JQMR43X78RT113N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X5xJiuuYMQLZZi9342Rhf1abn9opazj91WZc3aZMBpUHPEbrMF74ciZgR8xtuwwhCXWyGdAfdrswk6W9N4BczLJ",
  "key1": "3fb1KuCwXjp3PbXaMDZFyCjC3m8zQsu9vJRtcoWHGRpPrRVc74PMe3Qc9upd8PjEoVuRDJGL6v2Q1neeCUxHUxDb",
  "key2": "3H9RR4NepDW3EzghFFsmJrsdr6pFbHFSAW9m7jAqwa1Q92k5D4EXV8j7HpfM6mRkv7SvQMU2pt3ZL2vwD8RVS8Td",
  "key3": "26CUfC1BZ763MV7FtvH2CY8gZs98RqENW9Zt9zgCRL5Wk29x84JiGkHnsFbYVmp1R1Q1aDquqBtgHk4S3DYXCY5h",
  "key4": "63Hj8G2GMQSqd7hP6WSS9vw8BD4mv6VxF7N8cXUqyBhiGDwxorDkL9PuctRyXdWvQxrLpExE33sXbDq5h2ERrxeH",
  "key5": "eq66mt5vcgJ7UtTPZ58LA8cpjJHhQ9RE9bV4wuL8VxYy3B8SfukYNBEYuYyBMCruNwNBKuf5H17PYtwzgahNfRE",
  "key6": "7esMA13LeXgCnvhZuQ1HCZaontbr2osJmikP8FXzPLmQAL5pd7sjHzCgVj3maPEUsfXLo75yBxeYRPhaGxNj7yA",
  "key7": "jgq1QT3WKnnpVJV5cF19fkGzzGBBBr2mP4sM2FQ3hfNMisRY7gQyTwWvMPW3JNKeFbo3WKLuHHXRbprVWGfD2CQ",
  "key8": "5UoSehGAM8XUPWzCRQ4Z12b1zYzZTci1phyfzrfLjCrsjiiCR9FdeySn6A1vtjVa4eEA8Z9jUECuhVBHLYtjxa95",
  "key9": "2aTMqRDZFgGGmzcBK5GBfQVXZ2HynK6KWJShNDy6iy2UfvBFPggcpqdxFLqruatguQudGMChnGHVb5XupPbzGSnt",
  "key10": "e42fWZotfYgSaYz7oXsPzXXcwPwnL4ppjfybJVWqqzWB8D6mVkehrSLNSF352xq1UjLopPX8GxwucUNoPDpTRkC",
  "key11": "2QqUVoBuvjKkATJGak4TsBrL4bo8z6VqEvpoTncSyp42PnwHHwV8ERMG3RyhDGqSghjHXhMGiAVniWk78xDxvAsY",
  "key12": "8AySWsckHEdzW6BgA6PH8Zuvu9d41Kd8PrkpwJVFrW68FZdRX9FDjuxHndECAoyThjDfXkQ4HvtvXxLegDUdpYp",
  "key13": "2tdctuE4FnM5iwGfP4vFiwbAhBLFuDbadqxKSZmyZTd8GKaDnVyxTaxnmbWZucMYz231QdWHsApHKp95B7HBDU3c",
  "key14": "WyKi7SA7WR6VTjXj18bcYBrWtT7ASj2VZoyNgypvPUkCyh6Sg6mBafaS5RKp3iMG4QKKcvmNEC4Xbd5diAMybwV",
  "key15": "3tvHcLHG9cBzFKwATjsKpoHURwbmY87wNspEDbp1nd4XRs81fSX6gxZQQGAjELLyGJjJafkmYJYotYJHKgJBSEiU",
  "key16": "4oJi3Rvr5Jh8vUR8K8VwEe2rY118RGSfb1YnVK3E26nuYV2ye4z1cR2vwxuKgHD4pSgzrEXoN1Ue6CGNPSfLdwMA",
  "key17": "4ozXzBsQZsiw5FpZ5XzVHw5nBtpDk5mc6PMJBSb18gqyN8vZapNd38hX9JEUCnrfuwvo7AMuvQkunJNo1UaQaKb1",
  "key18": "HkJ5jaSYgSWVvd3q8Kdgo2wQzEQNTBY18rzq7U7ZedyvVH9K5ky5p77VFoRJGP2JUcNHo3pTrSLXzo4D4QXL9nF",
  "key19": "3mLuPcCCwrLwQfCHAHhoXB4N1jHqwARUTN2qPWrSpYkXzGy5FYmmNi19HEGPxZev6228L3SFk4yNNtfd5m442Dxr",
  "key20": "5XdqjM9fJZepwdrVMnEnJdCi1H92bFJoLMhCUm2XLc1Y4cqWXbzckn9ZGXDsNLkhjpsCJTgeXr5pWZcRwF3fon4o",
  "key21": "5oY37BuxE2vnfCnYnDmjjpeAVWujwmT8JZcja3tb5h2K4J8HWgbyy73ZGrK2AGUGtL6Bi6geQcZcTxchoNAofywr",
  "key22": "2zWDMMFFjjEK3MncivQMbJcTxSDLYiNPSYvPudeqMQdezZV9PTzm7j7Yz2FrbE8AcQfcdjpBaiHP8cpczdYbgtZr",
  "key23": "66iMVXyq7ebkey4FaDh7YjbC5sKu83BP4nAt3xnkKsmnD3iH7DrpPbCEvLGqRxTKhPTKyDSUPNprXx3nbQYisXP3",
  "key24": "3NaYH2oW6Xw9SSG35pf329A5TWEBWvY5Jdm2sUU85XL74JX1UsHSP4o3GT7vFr5VEPayHuNuu5mrXwZoEeBFr9k6",
  "key25": "5Am8XsAwhMA6m7SFj82MMwjnk4ph2Hy3pgz6XVvJLDUqPHSCvaZzywshXkLxEJgbtnSByhCMC5t61oXeTtzURkaZ",
  "key26": "67CoScFpF27ZsyuhpAZTKQ1wFpSrzXt936GtmnL4NcbwZtg9h9U1ky1xzqxH3zFpNRFSEeVKAeB55s2rxB8GUjiv",
  "key27": "5oi4QmgBSzuhaXR88yfXkwLCQJDQeoFzqeMnp9KE6WmaoeYgZJAuf8ntWaB48RUpqDvSau1yetrujkECfkdy2Ggv",
  "key28": "LMbejmNRdX5CXBtRWAaLejBgU6Hgu3iUhhPKXxWMoRgD58doR7Tk6HDNn49wDAJbn95uxV7EMSkeaJwNcrbYKVg",
  "key29": "2xWWWYEPAcsxWMrQmwtiyD2WAVo7yTHVP4ZouU2p7Lmx6JPEog3qBLUmSTayKesRoPq4xdQQDXSPwz96BKZBCAuP",
  "key30": "3KZMAVwaxucTfyPupVFty1d5jSNQWjdgWjEa3iH5RUmUgkcoBXFahzE6y8Aa6CAD23kotKTPL1oCNZN3C5n4ok26",
  "key31": "2rbkcMoS7Dt3s1iMCXmvZpnWsk1rWg9ZYseWMcjojum5MmkUu5cjFv1jrrh93wUxCYdfemZVq6kQyoxLP6hPMU4C",
  "key32": "3cnuJ23njRTHtqBiH5RUMCah3kQBYKj4Wy1DHwEzgBHx4AZNHTtj3EwoDYYgnEkL4j3QV12PGKCtF9NKKv8rcRr2",
  "key33": "2HxRRitBpcpz7Zj5jM3muhdj7iUv32pHaAZGYDULLza7vJnvmgVvo1LGoV4nR1d9veMgddhBzufdeUQXTX6VAvyp",
  "key34": "4f7TnYXTTgvsuR8efTyzybjXVtTANnFAYTVAFPC2HYivP7ERhiYqvZg918Eucv5oCXniCrtTRG37xKK23fJbqpv5"
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
