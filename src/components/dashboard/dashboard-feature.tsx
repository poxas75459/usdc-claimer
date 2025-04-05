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
    "5NWuziD2x737PyESYrbrNWNLvHrCvbLH4U6U9PzhBMiewNi4tfph9UE9UT4faS96kf5L7WuLiHasfXWwfPdWDm7K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4To6L9k9YMMXfsD5vg9avR6kU1A68GSBy8L25Tzf8skfxiJfpj4TobcABzfFfRNP9q8bSaUbBvRoAcir4G6wtjBt",
  "key1": "GLX1r8Be7bFqVQksharY4AtQBiyJcPs4A18J5hvwpioQiie7bPLuTTCTtvoG1izP8JzHeTPbtxM7Hgw5oBQuPHV",
  "key2": "E2PPMQ4A5z4sTVM78PKDLrkKHDXesG8R6F27ujw5CtLvCgjX12gaWzkF841XJaW7uBKKWEe2mTPPRVVZ5agC2f6",
  "key3": "2T6q6Atxbepte5onYwtjwRHZYVbkg6ZyeuDPR67W83yedJGycqStkzrfLDhsog6qZaMdmfEQW3xsyH4u3urYLVZ7",
  "key4": "59A5ogTGfrSVoDd79td3gokcGXdPUrugFJFRJHfcedn8dSH5aDLMFMC1s1R2ippB8N9guzFUXkG1PFeSN6JMUQqm",
  "key5": "26PWH48bmP1Gzm7cU2R8WjCHmBSjBd4ivukHrAoUZAAi98Cq9y9RgQPdfuKWuAVkCQ3FDKyxat2dFgdALy3uFGrk",
  "key6": "4f9s9Csp9u43Z1ZhvWXgR2rdQZkfvFHoSFGhx1ZxvZCEEpKotA57jSkpceb7848Zj3ctPTy3CNCPpXTo4KRkwbiD",
  "key7": "3LFWadkTbZkpyvtJ51j96oet7wuo5A1Zx4Ji3jmYxN6DGnnSHsaDsNNqkNdsXDSk2GvyZB4fcfokPGmRAZt7dHVD",
  "key8": "4L2ZUNKURnaV1Cpya8j6ULTBk6ruYE1aVauKy44PFGLGkYCWSQGP1fKDaSmbRToAuWtBjyJhTjkDxV7W275o4wVV",
  "key9": "51zEpkQcGHT5ZVyZpKkFNHSEKZoLmWK9BcsnpQsanmHFCeX7kZb3RRpsXYgSBtxDJcRQY483uHxVoANe3rQkyC91",
  "key10": "7q7XZrpzwVe4DyE7BWXg3NvRC4fycsrfpdXEuqGJxuxjPFVpmc7auTA2SNhZjfy2PLePRuzFi3zVZU9Zjo7SbEK",
  "key11": "4TVLE8BTA4SM27wKnMfpEaLbg8n1fC56hG2Dougw7ppbvmC8vocXU8WcSJhehyQk1Gj4pqD6rXj7LW9BKQ5DXtVJ",
  "key12": "37QqPWWq9C47skcRn7kQy5Ewkjdz8HQXMeSghn6VQtHTvJFL6Qgw8ZHhCs7cqEkz8Auh2NBbLfBdgoTWfDx9Fxph",
  "key13": "8SGubaRbXR8cr3WhiTKj9RvdPkzqpebKkDd2CaUQj6BgwYkRB1KSJtPpokiN7hUmnDiWgh5Q6isQ8qUt3kgTPzQ",
  "key14": "5SUyyu9EtDkwzioZGvWirZofQGiVYD9CBnTAGaoLHwuSgfn1HF3kviMneETyNF1oJh3BxEhR3Tbio7xWMpGqW95r",
  "key15": "4mWUw7L5iRWu4yA4YSrde38TG2EJ91YTJiT6cBGSnnATQ7C7XhTaMUdFh1ibtiR6FpKz56qKwGoRVLwQG4RAc66A",
  "key16": "8ZsCMnwWwMzeaosh2n2Yie14k9qNL2pJyHyAtgeo2Y8NbDQXmQxF1qbnLne6N3s9BtL7FpRWZa5TizG3myvpQ9F",
  "key17": "4UDeF3oJDhendgfm6mRPHT4bnsSozutoGzAv6eT9ab4GXZiyiLQ92NVj3Tvn7TfkATGAcDQFheDGd2ufyQFQvBkg",
  "key18": "5CcaYgKADbefLbAmRJUfbPGs6BnwEwKGii5Nx2coC4TvtemZGRGYFQgKrZMvsbRSEHkFeqVa19jZscw6sCFcf3va",
  "key19": "36ZPAkAd2pQCgWdAWZwouPUhC6nmRgcXLK9WCSqrjE7WYKzzgzQmoKTXJDj5zXnTTLptNSi6hDBtREvz4MVpHijr",
  "key20": "3QLqpY15wt9XAKSWDjed1Mbmr5w8VDVYvavLW2Y8L7mpxa13rxNpvyinjhUZH17zQxd87dtcc1UCwrDpuWdVSX1G",
  "key21": "5JNWRocoXAF8mDF6D4Gt3NKerwPNBDQmnSbXRRxTzqTC9mpTWCLvDWNaZVaFpeUAxHcCZZ3gwFMx7fPzHNy11xt9",
  "key22": "3ppYe7Ezv6bB6rsmx8YQdE3RMrmamRNSBDXPmBC99PRiuQfkhtrgXXwv5SqH3UEQcsYXwBQMeieco5CXLEY7GfnW",
  "key23": "ChgVWBPsLwM66dgMMxWwbkXoyyitb4dEemwKCSzhTw8dUAU4oP8CUYLexSn2w5CdtV8LMVPtgNPajfPS29dQy4c",
  "key24": "3xbqEPWVu8XSrXZX4P45oUrcUeuMzpqGshUEf993NKFskThYfs8EhQ9arxD6Kp3hZRcVdnAgsaw5KK8kjGXMJnzp",
  "key25": "aNgXR2yxSGntQabdgkFHHgczk84rrsXzF1mGfniKEp3pRZHufLZ7BSz2PiF9pg5hhq1BX5HPyV5SL5uCA4MBWJw",
  "key26": "NVuBCVycuvCcbwgR7AV7kxpKEAfZ4zZtuRKFAdyFzhQwGt2qDegWDdFR9vwExBdYyWszHYPSPzcnbv3sVkFBXM5",
  "key27": "Np3weQTR84ikAjYZUWbFWMzvovaeohVatqeDZojn592jJeeh2TtjQYcVCPU2CtRUnuZVx8N1nm3h9YgWaBCyN4n",
  "key28": "2Fe6hv2mkmzs6aGD9T6BgGunKyVCKDorSroqWN3vBpRZNWjHRycLJyKF3BEXj5njmYiRBkMVeNNViHfERkCWRXxb",
  "key29": "45ZoR46HzHGLAL692G8mHurnsZuVmmpzyLFxNaAKutMhhM4dXqD2KjVADMdu1A3HWjFahpfew9wYkHgUCvbhhy8X"
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
