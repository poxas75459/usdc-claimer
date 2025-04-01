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
    "5qcnixnpsjdkvwgSgMAQq4DAtodr2d8soN4CsumYeujejGYYfKvvS8BRWFyUTm6Ms9aT3YXZ4rNDDjAraW1bHeW1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "usPcxnH36QFc6AQxM1QmdAVK624NNvAoyg3wXmFGepAGzbLLfbRKvj1Rho2D9XChyqLrTar9aor1WnJmuijFqGh",
  "key1": "4om5zEb2UnRhcXgijXW7L9Mb9LWRGC7ksgcEZGDzLHCwx9Wp3JanmvPLvhUThHAQ4rq6FT46FKfscwkKryoMB9Ro",
  "key2": "479F3kkdaiGeHD8YwhPftJdcuNZxxJVVNYHXsNooZYnLRaMXkbsa5SGmLzjxLV7ZVsGnw1hanW3E7JxwokMxMcvP",
  "key3": "24AHitwxj6UJHp1iiBUzDd8Ge9Rr3w3VRw5nSjuWAwFSpwUGJCuGKzGz8BxDfaTuKgZyveq9bgcdw3THBmVdjQWn",
  "key4": "hhaeHoTr2GBdVJMRSP8QdyXmcsSFCYkiX5QrKnjnRn74y11SfMhqahzqCn1PZzY51HD2M6C6j6V6HuoEnYKSJMR",
  "key5": "2QXtQLbv67SJew5xvKmSExte8tw3PJWZjEXTyztSjoMssjYmkmupNtbZ9FjSSQ3sDVagQdCetkjJfPrKd52diwF6",
  "key6": "2CgzJ2yUrznLHMBYaqC6d43C31EqLAWj6cpgD3zLVJFwadcXheoocPpfxo3e7VEoLaFxh9RW2sUwUYiUQmkDNycH",
  "key7": "4adqGzEtmGf7KGRPwhEi6Jyh6nTj4ue4AcMtjdBFf4KUbXnrJVTydtyCufHVkh8o1K9pZGVF8Yqg9D78qeEe6LAH",
  "key8": "4CTrVC8ghdxtbr1LkoV3yj5dzhQ4ZgMVeTxRZac5ToxY2Fc838jJZLWL2oC9Hdu5TxhdKToiRKNLX2eEBbkH92xz",
  "key9": "2apZYesxkVeYh7qPQJVFyfiqswJzvFChoayr6mDsq4X6PyUmDEiJKD38aNJ4FmPBfz8TV1PRZmMzUDi55462nL4k",
  "key10": "5sMh5wbWCknmJF9qpkuLipjrUxAdsE5fS1ppymD7gAx8pRFMbSh482Vw7XatDYRrZ3ZqZnjFCRHy31njtR3ytNTT",
  "key11": "5DcYAkBYAUXyXa2VTq2qYaV9zan9v4AkqPAVPW1hcSmj8gkFQFK2aDH1GVDJJDQwsYVPJKiJrSEUs3VT17bniBGA",
  "key12": "2SqoQavoook4SEBiPwZGNNquTJrgjm1464bDAaqNGQzzD4hjpy1pU3ibNLX36qjnSS8QhRnYDcKA8G5MsCKjivrZ",
  "key13": "2935JUVUAtoCwbdZXZu3kLJ8oBXDiEcMsNQSQHACUf2EZyRB22ngrGiUCtno1kMuPnJxfaRs3UqouNRSatEhZe6T",
  "key14": "2dMrVEKvoJAkkKgY1p83QKDTW7zVbCqjkc52DyqYVvkAwzwoNhrQSZEe6Vc1Pvz3rHXAddRpw1n4Lrv4a4RGDrA3",
  "key15": "TixVwCqW6Etn1UaZsPrpZo7AYFhLyGzuiFrYTZbRiTnJX2BpYkhiG5nebK1Vj6F6YbxFkkvWqSNoqz2fQwbys39",
  "key16": "5UgK81tVGxBZmFvGnNqfBwXZLVKaAkrtixcpiKakB44kqC2KU9UpqanfNUCBLnYk6fuzAZjJSaAbvqndwse5fDxC",
  "key17": "nd69VRjKGHgmagZ4y9p7RxtsgMEU3JVVo1nqX23LHrkmBuAQjT21Ki9Nckf12KtvPx3dhziY4CmXnbVaHKz23g8",
  "key18": "5tic92fA39wByGEeSjYScVSvfoWfQfJLZJtBJtmgz7E4xaECJZbkLYJ3yrGuFZ3F6a6cacfvQMmUeobzb7MWzxPo",
  "key19": "2zuPn9Grpj5ncowNB5GPtcbDxWDL3jRzsVQUzCuYoktZNLubydmXo8fTwjhEq2SrgSWZBJPyVGrUYHeTHFz2sz7c",
  "key20": "4yiDnnbpsTMv82EWoomJbhhbUEhPQfNaSHFGi2rWsgPQHKwQwemBsFHM5tfmntsXjbYuTEdVyJXwH5G2oNke8bhq",
  "key21": "5L9NqMu7mwZxJEFwypzJuQ1DywjajASqE3geCkRqZX2XRNpzcY5Uq4t3REnXmZ1bTYGSfddPReJrJx2FXXbBhEi8",
  "key22": "4DYeMjqovvkQv7nV1NHXJuZnEeN7tiFMEbJWm9aE5YKsv1dB5dEgc4dNMDLPRfgMjHet7YXtYC58DxEWmtKLmAuo",
  "key23": "5GGbSU4rR1zgBksmJ2mxkrQHLhJJXA55aaEEQNriEWyM7epYkjYvNbufRstcVpRpg6BhSSUkMEtuVzcQmQhEqjMK",
  "key24": "4iqMU25ue4xZaRuzPSmsiZf6BkC6WDTZZSeY7SB6CJNHkKCZ4kNxUX4gEXHtsCEPh4gGyxkh3rv1PBLRmtn1bvTc",
  "key25": "6dkrZHmmDNnyeLR2ftdSJcDqMWntQ1VerCk553DQNDUWLWuj8xvspN3jdZiF9cY8NXNLuQSBHmp8NakU9269vJF",
  "key26": "toL1HRW84qXKKDWcwKkgxwxSFUa6ufXJQeNSdFraYbjk8ka2A5yGjLDmTnaWRnc2pghG9KnguLWZSLaKDNyaebC",
  "key27": "351t1xjdkJqWUbWEB6c7acmHbTzXVftBHzEndBTCmG9cEn88MEFk6bx2KiroASvVWEuASa8pgGjwohe6pdMrcsDC",
  "key28": "3bMkwDQ35FLqUVundFvqjbzCf35HFt89Zm9CE3GSHMsoxr4DqimUu9PXTzQEAsN2M64EcjpC3oTxSLtAxsBYEb9C",
  "key29": "5WanSM8NofJipSPjXpboG2nRbxxoUQWdZD71BRcxRU38B5pEWU2mHienaC91Xc2N9CdiptKCX7fMCaakt8FdSYKD",
  "key30": "42e2EdHBKxXEwuAWppxHsv23pVJbFvRimWkod8yfLNXvorhGddrWacbYCqLczZ3bciCtcq5wbtKgckP9vox3noSY",
  "key31": "3f4fwUFsWvesYEuLMqEBJFWSxGRCNmW27zekhoSZbaGjqFoXypMeSWqqLokjFjZ8JwnyQX3siyYmmgydzoR3R7Be",
  "key32": "5FyubNh5zMNsyzmrBDJD8gjs3cP6eWtDu7PLw2AtAupBsup9SGsRaBLFWdhqtSYChdDY1EA2hNcJCVMD9vMkEA3m",
  "key33": "2owthsSxi69W3Ta5TxST2UAhbYn4SfxdzFvSW3zbFDgxWvzcihcqhS47x2iW6ajBxin945w84hMQF3x9mx22kuAG",
  "key34": "3ZFxwyj6B5WEN3eRtyTS6qxa4kbYCH9ibZKbqkxQW9te1x81Ecovjpj4A2nPzxMToJtqL6uNmxKjppX8268abHaj",
  "key35": "4SKUN44JsMCFDc6e1sMiDzFMjK4edQ5GQ3p9hqpR4YvbpSgt3jaMnJTkiAouR8JPpRfH7rWJBkP7uGFRCQgTtYfY",
  "key36": "3Kn9p8sxS3BM85YUF5xQHhgVGprXJkMyPLabn74ti8iJwMsx6J7ipEcDzmAp9Uq4HUmwJuYDdooSbuxQugM3gAHP",
  "key37": "3tpnRThNzsXDiLeGhtXQcQwQpAtUoGuKbm2HmPThmtsQg3x4KJKNxpEqZw1FcnnzZMEfWjwjSLXYLg3aQoqcTe83",
  "key38": "2PXQsv2ZzqPvmgnD5fqJVKb2xrxZdPdQ9V58HhPMoXbDWCaAb8A53vtVMqZAAenT3mEwmZuSJEFhzQ23MJZ9wzbX",
  "key39": "2aZygz2peFQ3EqGzU8ADecVXWoZR1LNYTsby7U3CxtiAjuZHAYvYzxT2zyfrNLqYD6n53jhiceMRKvxonayc97hM",
  "key40": "3Cwzr3aT8g3KEmWF4tvBzVHSvFMTSKoYL37txHqxq3XqHpA87mddwZAfZ8p91Nm3BESq2MHs2TcmnRygrAJRrXQ9"
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
