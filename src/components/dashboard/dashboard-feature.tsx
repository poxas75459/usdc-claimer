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
    "3XwHAddAsiFUJgKqKosXghRFgaCWNcWG4jSVGW1o2cf9q747ewLSVuge9cWtGYWiuiQGFe4Y6L7ZzVcZmNns5nBw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56u6BgpPUWMqGJBagA2WSA7YRPWKd4N4eM7BC3rQbEuTziEXBEtj8T8cbaJwLq4jT2ekscmfVDwgYaeXWmhSzNYx",
  "key1": "4NTHbUmigCPLeBz3DNkaSLjEtYJ7ZJvRNLkwYbQa2GWejLN73tKG8fABSzDjYku2AV9qQNPYgv5nARbccWdB1yCs",
  "key2": "U5wbM4rTnsaHSDt2dJBLXqLHB57XjS8XaJwjGBDK1U8RWW7gzhD9db3U7M3qLcsh7SCwAHQUrN5fCbuRPRVregH",
  "key3": "2EQQS5Je5XBsCX5vh5zain3jHPzHya5uUnU48zELKjJ7nUJL9Nex6xMVmNhVibkgLTxDqg8dmaLJ1hDWjWDYNHwL",
  "key4": "5CXN6Bt81Y6YAbx79oqFER1wsqbSWPQnKhnoHu9Lj5NzXFoqnjnafeQCPmwzaaSSPqUkhZF2N9esdaawZnM21F7e",
  "key5": "67nxYjrTze6xqGM95RfR9MNGFTPRFRWAcmscEVXizUZt4u1AXYJHeKRS83efEjEGmS82AtJ12apkf94d2xUAqYQu",
  "key6": "3GVRR1BL45MZde6RmwouADx6qtdV5chXn3C2zUDytP4juUiGpQ52Rxd2S1xqVk75pcSN4EoDtTwdSFfntpbWGFj3",
  "key7": "4X9WAao5GsGyVbxNnp5QUARu5cYofkJEDTDdgJgVzSGt6cuZvFqsU1begeMozFEmnrQw4YZFw5PvSuJw8CxbT5z8",
  "key8": "2G41pjLSKC2aCMF9mtjWLg4qCVxmM8Rav4LQxgXjiak3Vo43xVVvmJKU4bZzRFW1BSA5RAK4hZ59EGfN9xdwSEV4",
  "key9": "2TaraLFT1ZFmxkaL3dvTRJy6Df6WmyHKp4vCErEmjsuHg5Kp5uruxMcWTUZ7fgvAz62cNgJmTfcsWLhNLm583GuF",
  "key10": "312ce5Ut7UqTxLztB3sBAvrXusSB7FCX9sYhv4TE7dNKCYfvMTVoZ2YciFGg8TRgpPZNadcmz74c1JHJCg246iAr",
  "key11": "2wyWuQNo8EtRmbtEgQd5WNJw8g3MLnYM2Yw4XtMpzATxp1jKeMyeSfHh2ceBudQvaqJbRqBbtX3K8LDCh2ZAaSy6",
  "key12": "65wgn8kp57jFTvjyevjBwkst5dZxCYjCYDhcLWkCbchm9fGYsK4d9AYNo5PUtQzVgG4Swp7USHTYLKLQ1gCPCvgU",
  "key13": "5wAwAKbmjEDgBo7dFKsBW1Q9uFMpwPt6SNy3CVoKWDAD3oDbUZMGYAWnCBggXERZWLVwf6bgE32sbnwDUoVNUEZ6",
  "key14": "4WhM2RPMVy1bSsLyiJgDTYTuZgwnnxAB7aV8a7qfd1UxbrqPTt6PcRfBctxf9SFzxvLQxEQNSNNu9U79FknRXF8e",
  "key15": "3qp71a4WHjWpqoHVHPzPSSjuvwpLF6gsW12myLZn8oQnoTBbjaSsUuhPzGmR51FjHdnbkaDvRy1oqYuPfTRGEBFt",
  "key16": "3LktFH7KC8Ue25ucwtLjUF2udiK77Z1agSRekCevLMpwN59kCpVKiNozyK7yrcnuincCjH1SR9pCFukHFtUHD2sN",
  "key17": "4GUqUSfVrAWcDkxMHh25APCyCXdr74xDmMfRjYS2PB6KdoCve1LGS16ebL3ZxRps8pGiPB1jEz5EVsey4mdqkd3i",
  "key18": "5PUFRCjB67aDRdnSErTFWpkoTrrsw9MRE2uLTtZjPfiz7TEVEWUSYX2DZaSjgEQEvhbxKZMp3Hdfva7L3xJyAQ5j",
  "key19": "vNs5qtt2WRhCXzRVxeLBdezZzUscgYPgMYFh2jSzuw3f7pFzBHpAZ6Hrh51j84EFSb1LroKdMBtT94VyfjbX66s",
  "key20": "5dPYkgbiUf3yUFYt2b3Qn37ysRej1MCqhS7ygejt7RWqonwiBsLp33Kuad572Lhyqi48ox9gcGLTeqrY6kVdE9CM",
  "key21": "3tYkfW3yD7TKMZ1tct1aUQYoam33MJ1LZWn7Yww6RPUcdB1sEAHYJVVP7hyHLcHeXfMojKT6EfuvRK2Nf7ZoBgW7",
  "key22": "2cK2AMG6MwkSGVFeChMYnv9JKqzkGP65hfvAzsTV3WK62JHdMMmUMvoDzrjzUWtavhLV5nnHGpjY4uHaZLcyqn28",
  "key23": "3JxvpkHo5XyetK79NQ5NQtkN5qGdkYr2AKRCArNEVZH6RQmMt6gCoUtY3SbcDRWZe8AwSiFUtd5zjeDpiUZBknCJ",
  "key24": "5PTYCYsFs9uQ8YFXzS8RS8Q2N3EANHZPa2RYbXiVCLuMLJKKEHzRcVxTRohWpVQdiafFQYUsq3ejzXv1oMMAEXe3",
  "key25": "5np2gotBZgM8p9u2Sy4fPDZSarCA23L7CK684wm9xAEixr479FqGH9Dk63KsRZwkgsAJ3faL5ucQbFwCpj6Zv8bV",
  "key26": "3U6URheYYfphqE2F8cQGhQT3Y2LGj6YYCnHn1UKfixBg7BxyonZ5REBK4bYmZkhmQnquKjQ97dd1Jp8sGDCUdoGm",
  "key27": "64ZHpxoNdVTM8BNAZCD7Bxs8Nr3EdrntDFHmS1VcLz8gwmTr12PFxJmF2ybnAvQYn8c1RZQVeYfLLJjJvDYWSWwo",
  "key28": "9pUHLt4VLjmKnkzc7PpXAVgw8s4phCgrshQTDrcdv56tkNVL4tdP9WXv2mZzVW29vLcqAQpoJ5LPhq1HbcMphTn",
  "key29": "5YEu1pTLUdZpidJKL6YCHUVg2b7hEPyEhjsLsGfBCzUDysmwBH7ZK3uChGqTqFWw9Z9eknctaBQ2FJmR5qQD8KCD",
  "key30": "4H9WqYkVKutwVjXuxGKXxMCmvduUHwghGUhcJnGq8YfK7XwEZ3VGyvR2R83yUkxSzNMkCsYw4HNuz2FMcuKUiaY8",
  "key31": "37xV2KnwBJaYpGF3tnTX1xxfBxNTqNUSwbEUvKvGN5aqcQTo3BFMph1fGSxAAfYfgA8v1GZRhS2fkcBVM35b8aDb",
  "key32": "NUqPRnQAnLhvDcCu7dSFG5GW9GYK1h3RfJGMttmruTuCh7q8TvtzSkTSPtMkSFBHCFzbtznDwceL2YzpUr6pJjN",
  "key33": "4bkN4uJyfd8tstXPhJF2dt4ePFvcu7jmP5iAhnh6kp6Y8TWb1ebiyoQMaFFwQZTV5QXfGXE7NmdobwNGBncJj2z8",
  "key34": "2qQwPyB7bXETtwdBeBXfbya1h7DMYJX2SDKUdoJsXV3B8C4QbPRjVYWjdFGD1bFg2vhruLCwYGnNZ2WohCRFZwiG"
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
