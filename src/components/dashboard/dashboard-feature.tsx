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
    "3UL8h32PDQBaaXJehyG7Da9BBASvhhn1sHom1VC2argzx3iuJEPpyYwRuScJtR8CNytADMdhSPRgAgMFcDuYjC23"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mUcRGoRFU7n7w6SmwRgajE3X42ocrTerULXncUri7vQXsJQFyGYctzYZ9iyMT5N1ym4znGZLcYDkphn6ci2H7uY",
  "key1": "5HCHLqixXzo14DtmtDt6DstWCv5YVNGXA1Mk9q4NPZHBmX2wLZudyjsWAJ9t5BzcuqXD6dRD5AW1wNP88Qpvpq1T",
  "key2": "3w7AbVcf6CLyUdL9tYAmWp2winBU2jVqPpkr6KGZPYLuM2Sb7LqgYoRCNV4cpKVTgPQXHxsUUDxQu1trui6ncWJG",
  "key3": "2wp5uxDq1MjUzMCfBDSbAoNTxTYgzpakQAfPjRsPgQC8EwwrZm555jo1peEtMdQcqaRHveen3yYwkNVNwYDkqPZw",
  "key4": "2VPdMJEXVomxshUNE2tQnKXg897V48azprnLFKR3KfUzZssr1wep4isMVuHYiowsH3w9HFHuZrsLtWHr9wsX2R5j",
  "key5": "4mdVzFumMYefiqvVy9KASTHK5XprUTjeXGvJpNTs3kc9myF3AJzpnkBt6QRiTTeBZuE6HPpoTTynm4ziXfxq8iGh",
  "key6": "2kDz1DeQZefdAPYCQqwAxxfdHrEYk31KwknFAoG3j5y64M9KSiHVDKkepa9rwMszS1ZaXq5DRf2vssCpcJ6AnCqy",
  "key7": "2ejkWnqVK1R42Vg7DR7rkbJrzEXZ4SbdcvCAA2sQrVCJ8mLJ2YdqvbXmSNkcqXm7cnEM9A1BkTVT2pYguwcmAD4x",
  "key8": "56v1WJTF3QrFVFC1qnzpzDM2XwfLCDXMVQ7pJifRq7EiyoDL2QC6EnVQYnZ8BwaRdWaWeLy3WcxLUAQZXWhB5baF",
  "key9": "4V2G4QAHMaDn6rwYcs3N8EvAJSJ4JoYE1DWZoxdnFrCbfQCHxmtYv4oTJ2JiKRJD4m32m97MZ4PfzFJcDCYY8FGk",
  "key10": "zFwZSihh5Y79qtjbatstFotKeJMUGyBNQCRQ7LKn8Mhj7YsvRRasfQ82Y4ZTtfJR7faGFAShWUUBQXXKDRHeYSn",
  "key11": "3cLDbVpGYrsAUFbSzLipuPDLJNE7uKQoHjEzJNRdRiRkTCiSkjtW2BwY7g4nKq8nzXHRc4niPCFBBvEpRGEAvHZv",
  "key12": "3Z9LY9zCwDhL2AD99YF3vuHmZEgMhhKdiyENc8CZGYv4idCTts6QSHzrGMSvQd96LAzQRNXoExPVoCxxNaVQd6BD",
  "key13": "QVAF59dKL4mMmMzNqBeGuvi3DQomurnvJXR1WuNf7MTUBqHJjTFxaWiragLdqomMDFnYNyANfJ2HEdck7PRd8Gc",
  "key14": "sMo81HPtUdNVZV4G6Fc646H7t2AK7MXS99mUTuMV8Yo67k3aZbmEuEbC1xpwmFaBS5DKU4ckUXh3iUMre3aUbSs",
  "key15": "4F6JGFjnKsBEd1UiFZtYxvyzrzwxeQdJ2tuZtgsLt7KYSA4Cjck3cxxTMbbVjgq5xAxdv8UfJyS6Naopm6YgD4n7",
  "key16": "4uL28CrKc2gCv3ANAD2QRWJpphGd9YzxikMs4PiNdzfgRyXjqg4cfsmLCJEUTzbYGpazunRwNHFWoqTYUaLLRgGZ",
  "key17": "2wiYnMccbqj1ocSnZwws62X6LigQkMDAN6od1ov6AxDwKJkwoWvpYJMnFrUjxAM9cE39ceKxJBF8C8RZQ4TgGVUh",
  "key18": "NKA5XzVJm2EQRu7vm8JXfP8iyM5nym6yLd96xSSmq3sR6imx4hdUBLBBnh7oLqYWXD7GHReDBduSGgWFYY2TsZm",
  "key19": "5X2qwgiNSCtzc5Mz3RZno571hMZd2YfhdJfDzieLgcLTe8vcpAeJv9nKnRBhPiBFUz46i3Vk7mvApG4jxapWy74h",
  "key20": "5yuEWwRBKgzo4cTBMX71sygZLifSeyCCP3UgmP6gNTtuUF5XQMtQzPNrr8m5pgVg42rnChJJGDkM2gmCogkALubp",
  "key21": "2pmX9PYXzFs2ASMauRd2r7qjKjiekbbw4fXxce8fuzpNfJTMZuYM6tRZ8hEYPqcXjC5e5578WnyT6JcjtSLciEj3",
  "key22": "2KgkeMQsoWvnqby92FJEvhTp6ePSLMzEuKb7MaNvzkJ9CqM9PHwpEG5bu4PjBfiwo4pXoegm7Nzz3mtJZSrgCDMz",
  "key23": "rRpKGugN9RGTov9TJzpmJqahUGYWVH7WrwfPswnRKLhR8yRchpghHsh69M3d2QpVeqemSPs2avhDzc4rvVGQ88D",
  "key24": "3CuUeJtFY8wyhWdZG6rVHeV16EpNUNujbCYG8RbbxVnpBFsqC33AJMUjMRv21tPhwXmyVXYBKas2UG8R14jhxjvs",
  "key25": "gCYc2AadmvbyZt5UmK5finKEAN5tgq3gXCUVBLYPeW5JTcqk6qoC1CVn7ij85svN4s9PbuuqQZ7rfidqxyrQbAw",
  "key26": "PuuTV45sJjV16teiBLKyhX7VGwX9zvwbXRGCYuBEpiaSwACAiSAzAunMQe86QvMenem7AY9ZHLrPuQ6bwyAD5xw",
  "key27": "26Rr2MzfqUtar14d5jbjdYBhTWi9TVk6RD926w6riMe5K7QrVtQLU2dyHNNCaJgMSGGUtexwgb8zwnoNFt5kPPgM",
  "key28": "5FZbC2zQb72ZB3fgFWEUPSBf8nXxKLYtx7gaYPc3Ykn7942eHshYenda7djm1GDEHq6DjZTFc3Ezaad7SBHFobTZ",
  "key29": "4u1E8hLEAC4nXxbwBdStPryPD9ci527UmShHo5H6Jy8HBYUkjdjS5YyTyH1KCgFqQDaGnXy48jphiRdQHxMwhBk7",
  "key30": "38oMe6DA6eDLTS9372AvuRBL5h7rAYSU9jxbbEFdwz4ijgg1iqMNQGmqTb5nbrqnPHXMTuW9664aaUjkHRHznpY9",
  "key31": "rnews2qkrUbqpaUPY7ysfyBL9Ld7DQTxXGM55kvvY8jEfH33LxX512nKjNKQtsrdWXutyV2LHG3gHCmAmj7S8gT",
  "key32": "2bVG3YyMTXJzRWgsg6zGBgUnSnkNAA8ente7cALbqUTMoji7Zute1wTSfpfUaKtsAnk1cdWYjZkqp68SJnL3F6xp",
  "key33": "t1uk5yiME9vTUedYUTYZp3XQxPdqcZ1cxpyS8ioM26D3B7Pn5TPGT4KDAFB9KibkQFbAP342N9vNady6NVzL8Tx",
  "key34": "3bgt1Z3i9GfSAemPZxMXVxPBRcRxJHv7ff3cRqAv5tuAS8D4r4sxSAVKRYaZ4yYmEevDFDWvoHvAGfvUaSCy4d83"
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
