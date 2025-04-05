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
    "pzUYjKJF9cMAX8Z3xyKxKA3keNbAWF1ECM7HV2qDj5dNLXgna4G887JZDfEB4Qr9BjALM4aVtzNpgS4wDSuvJuQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53KbbF93V2LJWxRBCtmZPM19v6ywkoUU1QUhSLJpo5bD1hRDsEkHKDYuLbS4tZmAoxJmLZr883y6iMboJnyjkCfe",
  "key1": "4hNNCF17x6nc3DW8eC9ncu1EcKPQmgPotADwnTVKCDQMr58vFWXJswBs98qyj7n2vBxS6pxBpz1knbPEh5jHCHq2",
  "key2": "3Ra8TkquMd3LoFGyM3p2xzohjGkWV8K6mwp1jDE7MHeXRoSftDJcw4zq68m2SQCY3sFvR9BiuHeFHwuTUf7HTbv7",
  "key3": "3wEGXqsAu6eoYUDyZgFYmhpKV5WfMaKEWLdpKCCYmoKWTM1apLbSjy1889hTbo2KPQARQVeGgyX6zEmwoPGnMEVA",
  "key4": "3TZqL1GXGj9Sz51UzK8gFk5A2XGw3ZxSNaLuLpm5JcW9od5udicy1dCfY9xezkdgzjNY4jtM8bV4bdY3b7CAn354",
  "key5": "4F36nS4p9yxmGRbyyyT9F8XqGBHtoKbrf1419HvKTo93zsUoutbKrFGfdexHNBTjed3d5NqYaHG2rFbDyDFTVwrz",
  "key6": "4svFBjT4N2USq22V9xwQJSgaVAkNG978G3TDB7BLhaMpSAVgv5oyHTSHz4GZhSBwWvBsZANg5DAtsoU6Ro3XP3V8",
  "key7": "mx3tuMoNRP6bxCFUTErsf1HUNahmCn5udyLMVAgmwn3fGbVQrFko5oUwQ8816oVANjy5NJZswmHUNprCXJPhDuM",
  "key8": "4bs5cBGScM7Rvf6H3tNtYj7yYhkpWVF98m6GJ1DFd12KQD9XdagGEwd5knTerfQQge4DCrUsJ7VBHtNYF13ZzRmT",
  "key9": "D5hM2gKat3LvXY4YSR2hzkof5FT2h2BAgAmytsKQB4bRsGk5UpEydfJs75y8H9QR3t8AMUyBam3p4ePbYgyQkG3",
  "key10": "2v5hHfXK5WMyZNVRqB8qd5paKkqZc4N24yvPe3DJkXbWyn5UFgFU9xpezDvvnBSSSSmehcCgZ8MXNrYG4BvHHz2x",
  "key11": "o2VzHfGwkTeKfYMnzmaBZW6J3SLdQWV4b5o6zaqm3jXiN6XrMcTnB1okye6DtcY8o1d5vNezvdV3yBABRKsCFvv",
  "key12": "4EAvsyeBTQq7RrkHxc7cJESBm33o3A8swLyegwwJSNfoJXTFPhE6j13qp8gvHWA5a1Q5hxX3tNfqBgVrCPykvc7N",
  "key13": "2zk6uLSDY5AM8TSZLgdfhj7CMLnrkCcmecNSLKs7twjVmSGdy2KcjibwNEAcm2KapbgWcmFYhDHSGQ3rMLTyv2Aa",
  "key14": "2jZGdpfss1jmjbAtk5CbjJrPZWVnHkeT9pmvZJK2gPbe8wLXyujSMPA33EZ6T5c8fpXiDqZkEZvezzZ4DEXr4Ff1",
  "key15": "3v1ZVwMZZoVrm3EMJmLn3FCJYGgdbFh8jyoyFNkY7bzAPMggg1qVewCGJiFVkoD7FNgAUqhhwNj9DK9TdE8cdPks",
  "key16": "2ox2qpw8v6VZU1ojrZEfcp6gFqkbDkqCpdqm3VzggVA4sb4ZdeqpMa86Qpiny3rzdhQqiyFkZDUBsQL5Yd1YZhBf",
  "key17": "3h9pFXy6fAx8r2qM4So3VHKG9mbiX2QRfwQVJ877W9Q7Utryg82yP4K5Lj1xqNnTk2Jc9LHu5y4xndhrWjSyYEFt",
  "key18": "MKSxPX8H2vqFF7a1TySr11SPAFj1H4ti5yxgQsDKs8aShTCCp3LTgvRSKmhWrWb5iYPFpX3NKZh1Dy3gf6Yb2Ge",
  "key19": "45g33So8oYbbNCLapz3S9YViJ2mYZZeiszmnu9fSVw69QRn8ok9CXbD45EQkqGdWrtm5XKzsnvbkYzEnhNFwQFg8",
  "key20": "cMYyvcYhTh63aLEVBiURsZUZ1wHcTsr8pdDi4rUeMiN4FZrmoxisMXNT311qVigV8vvbPuEmnn2tvwe9d3CFy8q",
  "key21": "5okQGNDXJneuEu2X9WmbsbLVmGF2YfuBiytEDyC2JVfxzvY5RhTKUTcvbedxn6zK8S2Jh34zKQzHogaSMpsKnvUZ",
  "key22": "48WzLdMcpbT6nRFgv61fg5GjT4X4crkknqCkgofdCHfLVqLWqq3eLuijAQpvSuDANcKAxRxRBZH5xmQSsNLEmXoY",
  "key23": "4WVUufVARcdEswjyUnLJwFt2UNMwu9bGUArewPP3Hdwds3j4aWmEcdjNVNhbBbdZm6obx6BuPWxF52vFKmURDLRb",
  "key24": "2oiqaT5dFNjK88P5kCjC5y47sfZwsyxfgV4SgpcM6CAGuMnvq96XPLke37vaxvn6EBj2nkQ75wY4dYqXpwvo873y",
  "key25": "5FcLNvL6aMEoPbadrwTW1sRzvsyxsYYTEYg7fMAgzPrmS5LUDrqf3SjVxF1FvZj6ge6TpN1pspd1uQG4sFJHYNZ9",
  "key26": "ZnxnXv2VMF8MGfAz9qavoyNgN7yviHKj48p3U4QajiWJ2fwtkuCTTW6izzrMfD1Ews6QghpNigpPe6RyfmrcvNc",
  "key27": "yKMXwLvvc4YpqPziqJ3kHnPcppKo3bfajCTNMB9yPXHJ6S9vZyDvJqRnEEgryWC9Gxnt4q9iVrBnZ8hyxzzNxVE",
  "key28": "5MTRmUHDmph6JZUjaFVjNNwNhF61yuDhjCYiTcxRiu7ru5yVFetg5sBYJtuygrwv4kUtFq2VP621n6vC7TSwr2A7",
  "key29": "4iH3fNtm5cZptRCMHHZT4kcUUE1FHz9Hhi1ePALy2icaBtwdHFKwRgC8GTPd9eDXvfoApg943KuuNQLUECEJki1v",
  "key30": "5nEUZsUuyedqqKxgeNyaVKngbLEugeawoiFzTQgwyofZqNUoPduUUdjJKufzL6DgT7ThfQKEFS5Kp9VfbrPzWwMb",
  "key31": "2TTcbXiHkFFQ4rvCfeoHuphKcjiVhNFdrAL9xpUsqcrbQ9VxAtRXiYT6HK9tuedFgLwyzGXdeNeECk98WojJZknk"
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
