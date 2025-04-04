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
    "23X1oebLu47L8EuyP4RjfxLCmd3h5p3gzJe7uYU8oCWMMCAAwMPw6QTjV3CFpr3VKRoxH5a8MXo8gJNwac9ufe8V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DZqb8JSHAPBUwr2cc8bPaLmmmk9r2ps3zqkYxadpLMit3WUNti6Q7CmDS25ujaHusNyVSSNX7umqEfRucYdwSCh",
  "key1": "4sBNq8J6qRHXR8jD8ZAFrkxcRk6GtpaQs9tM5FYtH4FwuQhfW5QL1A19WoQohnSFMrJvNhhBsg6TshWzX1rbSXAg",
  "key2": "2oSefcKCXJJJaCKbGtnzYQtBsmTevzPbtY8QVrnaR4C8zjG3i3da6hJgeP864CkhNX1fCX9VZDGnRqujBZ3yxJtj",
  "key3": "5TuZphYuTzq9he6bfTJLMbCRZksk5rRKPhoDUPhi9uWXEChKZhaac4QyF5tLm3LuGdTnbttzZRsuqH3vWuWMDED9",
  "key4": "DXDDqqQCo2d7SeV8tm66aZ29mJtUW9KQ9zhEdN3qzG9Vf19ooPn3vYNyWHCK4sW5AfU3DqHoq4gAytHvQ2KhJup",
  "key5": "a3aGgFaKRr8w5E6UVbRgmEHi7HdhgtkLBghekVEJzwCrZPnjGfwFiy69Jfs25Sa9rKjzquiLLffgjM8hAh8YQjT",
  "key6": "4i7bgFB8aab6Dtv1Sq7gNmXNAr7Ai5PtLg3tHBZhcwRQXkV5rzgdEGPBiUcDuQKAnGDrD1jnx5t2mRwskAD1iTty",
  "key7": "3imp67RGviYBsFCUoH8vAcajf7uqkw62ngxCR2fyBKhP78U2XQuUj4Xw5JD9YHV3bHU1w8MnQtvKZJucAnG1cmzY",
  "key8": "2EYTpaB2h4oBZm5NtNvHU8CRpcUYvcgWhkxeR2ETZsMztBRwNbt4Du5vh2fZ1WkcMMD62bBBDDNQrepBAApjNjTK",
  "key9": "38To8vTtKp5qF2QH7JHwGjxXN9431WVJhK2hDtqZ2kAc9pEYmBYDw2jfwW6Yx2AfLctotHUMkprWCzbga6m59Xxx",
  "key10": "jKXZnFUuebxmE8g8ffJ1R37AzSF3kFEWionMXS9sWHbE7drberKoADqafHboHHcphREH1UB5brVm8LMRfjYmxfi",
  "key11": "4d5mfEZZtDo99APnx7k3j7DBJhYSUe9tzZs7pxSpnGKhGYqsnuzw6qw64oF8qdma3V4thnJxuat5wyEWph1rMPtW",
  "key12": "zJNKVNhc9XFwkMpCHXGcW38mW3WUPKPtoA6w2hqR7VRqVdmem23wWvejnuWyPUVk3d3KkMBFGtmZLDYRYf4uAXX",
  "key13": "2j79bf7VcsmdQHAChKzXjgPbofASDWrwwsYtgWSKqdUYcPY1BfHgX2ErHkv1pW2yffGQh6SgpimmSEKBbHUF8fAP",
  "key14": "rZqzDEmNaDKyvPq4bnFoW85EEqLQqp426ZPFn2EPNL9Tf1JtMX7FNDTBMCTj9icadUPK9bq8yyaHFrxvLvARHGg",
  "key15": "5XfwW8NU5sUEzfAVAXcxUFzm6WyK3Kt3hKgQntUABgi8qLP5tUtK76D3KGPheVcQ5Ky9pp8SbAxH6SnVj81VDhPX",
  "key16": "3Crmjeg7LfZCYcGG15zcQxGaNuYaym8ejMkbVS7LzD4gYcfizjMVnCUrJV55rtXg5kf8E7uUWz5dwNvG4BuN5qkP",
  "key17": "56BPxEi84MKrznv9Dox2PgNJV8AzqT8XrHjRYvh2tXaR3D93Gc8ShLV1qAGQhSSetM8yN2J3aT1CsrV8SN6emypr",
  "key18": "zL3eLjRx6ng66mkkZ42DmMezfQVm1tjNCfHbpgwiQUiQC5W7uhPtHh8c5wN2fMCTBqu6q2maZUskbE6FyQJH8Uo",
  "key19": "2ENa3Tn9LSRRF4HNay7YUwaPirLg9Qi26kDYh6gbq4MHJUrbR4Sm9NuKfhCUfP85tbtftRquryteHMT4rSYEi5pc",
  "key20": "4RiryQyU8N9sDgA6JhCuS4Y126JfmAarj52LZJfto2tM6UkDyiLLgXA1rVn2bDWDUyRrp7BkvkFJDdTwt5woVFXh",
  "key21": "ABbfeoZejCa7PfpBDwcHQdziBqKW7xyof8MusnwtL5m9rMmfsk3dRfs8b43q8Cyyk2yswzizwZ6nwsxefQLzvoG",
  "key22": "2CdH2wCBA8eACfJqT4Cbm1s7SxG4TBdJXoBoUFQmxkXi5wfSGn57Xun5iQJwHxHYjix1mo2SdWnbQ91z9UQrTBFv",
  "key23": "5QnukoxiS25cT3gpZpnS8vhJ3ALH5EGt4tejQkMpyyuAHDs3RCRv7BL1cvZ35GqdcrMEYT8eosy354vzvxfrjhVs",
  "key24": "2ve46JWfcsG4Em8H4SarVmDuxm3PxtgYnWd6PQhNb8q922wvmkMnny4mNuEZH5dKBbFeXbcQw9Vdw3VwBK3oWQVp",
  "key25": "5XboQ8kk1cZxGhdqGxopTVt7LjgsYscBTJvUTZTzXTjt73uFJsWsEhEhjPstjSEe3g93RFosgtFXUHR613s5F6nb",
  "key26": "norou2AjpdWhKjRFqkBeX9gt5Vev8btHTSNtVWFCLsHERi8oipjj2RySA2ihPRDSYg4CTDVvf8LBvmuhd1Quid9",
  "key27": "QEh7dZ1Xg3zxDJbyqcJ7L8wCSwpmqeUkhj1DSxwSkmbVHbn9JLUbBwC2P847q1nCGiM9XAsAQLFFwaPyE8Lm1VE",
  "key28": "LtC5zPW3ZHm9qPhFYWXV92BsFqZevKh2MVbfSDyr47UiPWUL8YvW8Q88edg81cuYrbur22uUcV7Yu3CYvQEeLYn",
  "key29": "3ixtrs1DvxaEdUSo7RXYs6nNePkv8XsdEW1DHm4hccCxmHKhxsaSmh3jxb7nxdg734Tx55NJd5jRoKBYomwhv6fh",
  "key30": "48mTXx7Zg5D1vJp2mLaGizm7QxVvrdHmDv7Y1bbvnGPpVQ936fx4L1myRL9YfXw5kQnBj1LUpWKLRuVp76ZMPoBM",
  "key31": "mvYv1Dcin3Ch5gmn5naccRzpPzB9QCuVUFHtdStnDnbQCnRf7Sb1ebdMEga6PjFBtaSGHWX3JfKEQc2uXYFMPBE",
  "key32": "PBb7gXvGdkM3ziLrb6XhzmyJKeVvEEPnrpRw4sHZ7ZpebDLDWjYSb2drvDQYgXRPPs2ZPYbUrZw3vUsn1rPB81Q",
  "key33": "cPFQhGwfr9prZ7TP8fPVyEgTNCTjw9BLPiSmW4bVeAGQ2Gvukv43jRnmL1P23TUQWMyYvGTNUwga4FXTwFi1MMG",
  "key34": "5weUAYNuPz9SCYwioLH49Q2nnU4JdWUVjqxf6yyLmKa3gvWiP5s933xk5eaFMNajXNUgpLoHP44xxNzjeZMqQ5Gs",
  "key35": "2aW7cwzsm34ndbEurF5qdNptTikaJYyR54PxARiuv6p8PTRcy4dh9y2hvgdoJKgm9JC2pLC3hzXDz8sjRZUQC3Xa",
  "key36": "5WQY2SnTcEwkgu2TZMCvXgRaidfqjan47Lyfkkn9D7KxBuWMypxkTYD7CEaT7HFkS3QE9DVuBYEhZe2yC5uVj6yG",
  "key37": "2WoUbmxq7HQL29mMkxUksPcqubdiHvUkSg7tR41Eq96NyKhoLf2KUe758F2oJMVACfWzRs5nt7z8U1Hex6UBqWqQ",
  "key38": "Dq7vhMdiSEm56PnNzxQbdZucKwSNNUSqojhgnUEz4hRUDL1p8GehP8pSmhX3TtxSLf1wB1NhoshRa9eeremTJAT",
  "key39": "5r2A649LWEoKmC5t13Hjb1JtMgC3RPq3Q5UvKkHbr7FM6DNCLLLYUGGT6YCmd8dNqv9p62VhAdQpCvwSw86b4GaF",
  "key40": "47UhFfrCq4Zya4DBm7eB1vaRGXta5onLoNx4V1sYmkSQYnDk2KqutZio5d684ZgSkJcJVs1gujDX6tyqQXRKxcAR",
  "key41": "5cPUr5CjJ5U897q5vy4nUZk1Vh2XQLBG8EJh9RHBvroeZeANn1UFVoBa1HXUeahS1KJVPcJa7Ty9ELDicz1BpM9k",
  "key42": "iNYNSDwHrKhRRUsYecxmkqzyLT6jeedts8k92sQDPTHr5xvfu4sPDmovFFWKeCbg3rAqFrsH39xZUpHmVfZJMsn",
  "key43": "5cUtNtXuNiK4QYfPkSkauaENaUajDVdVTx3mxdJk3nKCVmZEmjg1ZQKdJEzNRUrepoLFEc67HGPVJ755Cm1uRkkT",
  "key44": "3J1wEEpZSh4iTKVrVq9kHvmg2YTkiuuva9ftSQ2tvngxjsxkJ6Yty65ZKw4vvvfJEFrQqhSA5mxLmz4VQKNCs9DE",
  "key45": "21Jn3XJ3cX57QV6ZJhSgCVRzyKjAnRbcHqBUacTMwbPsp66hM7FWoRK1UEeTYxPfoUPf5dgpHLfv7X88wCYxqSZj",
  "key46": "3eqEKFuPYZcERLdsboioRq3x94xxEkAhHLvY94LepY1rsoASW8VsFfye3ZZ951fuUQDsyLL3frR2BNgVJcmdnFha",
  "key47": "3W2acYRBpPCMFpUCYm6NREQmPL3sDacWVoSiN8Z6PHWx3Bcm7soiRRbKfSZiPwFT7kZkD5c3uZXVDm6XX1Zsmuvv",
  "key48": "2mpEGEiXqJEren5sdBxcegnS5GYLFgwyku83Cp3cywGLJwDTbDhzNJ6DnJ7hVm9WQRiDxoDBvPW3U672GfX2wZdb",
  "key49": "3WQhWKMJZ3dSwrYC16i9fdKdaXRfGBiUfGtqV448zZ6LVcZjdzU4RiPrU3uH12u5CcE9R6tHC1qQhdLXDPLMbkg1"
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
