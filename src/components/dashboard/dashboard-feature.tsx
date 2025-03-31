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
    "3SkPresHV4dBGgssrNoiq5KbScFTHmpywHoLqUbJXqCWYXCiSqXmXFcZhSGW8JrZrMv2MH8ex8zYW1axriGHb1CD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qztC6UsE84VBVCgRsh4NdCUxLT1hat1piv6CYbwv6ywL66qgkSQJsitHKkYguuJyXhh9L5ZUMX8Q51S2uariKJv",
  "key1": "EibMbpyidKZ3hoXxJWVG11wB2rxXJn7cVMPLxy6cvEkKGk6eQGwSnsiqat1vrRfJ2x9hsJLZVWEPYtFa2hKxARJ",
  "key2": "5HcMYBXwob8FvsCb2ue7dN9djwfDjaAtUZbGrSFBLkKqx9xz5CAX4UVLSZrZHxTRnwviNqjTFBjVvpBsSAhXoFLq",
  "key3": "3ai1kMd2ht3rkhENdHu2xRamSaeMZsiKQ2w7FMGmTNCxVv1dBbcKdowFE5aJ7gitmqCpH2x8UXLb3hapf59KozKE",
  "key4": "3avpKL72k3PtTotzpie63hbA5zi9MVvVpmpBKK1RkeXrGGUYnKKasDJvCfwYLu6Zjn5R3piziqtmDhtZwZzs5gWL",
  "key5": "yFF4hGxa5GdooEV2Y5VCqqGXHNAH7U4R6zP9zztFn1pF66v6h7B7VQb6JUHEN6mrEjWgZ14FxhveRk5BGNSQU1V",
  "key6": "5ftLP2HxpyaQHsJEm9CExfcQACjDbhjPPhmmb25korbLG69gUYVqnvFPYqXU7np2SMRw91zZtVkJZ2L14QEAigDQ",
  "key7": "4kwcbX8N3i6vTqvLDQ58C2Qyg9iy6NaBjWN5F3rL8vH8U9LAtFzzDZGNUPSSy2Gopg3EoMr8AgHig7YYpTp6X34D",
  "key8": "27YbhfYuR1DebgSQfHp25ptyYr9yvVyQ1GXYkRX5DBy8ZUhhCN4uJaouFhUEnzSM4AwT931ni2RW9TSQnTPxEudK",
  "key9": "5QuywWeXf7pegkJL8unssBXBJt2QRiRd6sTgihVgrEgnYCyKr6G1aFvfEjUHXstKyQqFGD9y6Xz9R5BGCkR3Wak7",
  "key10": "2z6KdVFRvVA98juxwdReD3RtR2AwNM94fdQJJGL3czH8UcPzBa3Mvpuw3fXfSHy78fWLFT3gej5hjXRaDk2BjW5J",
  "key11": "3WyPqwNmamm7pA1iMyE3EPZHY8ChddDRH4M8i8gfp7iajq5rsuvcQUfCrCghqf3KdkH7bSnyxQimm7wfvKzeLM6J",
  "key12": "3FSMkL6R357UsRRC3q19JfLBittTnJpQ9whoiqZa4DE455AE74DeaseAw2aP1ksK8M6Hq6pSCBfLhnTdugsekuEG",
  "key13": "2mt4zGcvfFWprHpcToAyJFu3YNENvxWf83YaNw4KVCqHzaDMnWNHwigGBJbtm3tQH1AzWZfVZAkmt75qMm75cXTF",
  "key14": "MXxeXe12CsTdffyc3RVnVrKRkVHGtfJFJeW2pPgVYs3YegrASWV3ZxLqD6kkrSH63QJ9UNxDkPbZVGc2sasHnsj",
  "key15": "2jxEWEWS4sCBEpS8pitm44dWyH7KCJ3upNEstB31CvfPA7PEtUNJW2PPnnxMVFgZehY1S1a5Y9o6fM1yzk1SmjXR",
  "key16": "59TNsGYJZfAwm4aAd6PyGWu1VsR2fsaCdvUXC3Agb8xXHLodszmqBgL5B4kAQYn37dyREUAQGSZ6jHQjRC4KXxsn",
  "key17": "45pgq8UxwMcsJk3nGo8seA6dC9AsHB6fXfi8pK9aBiPqeQgw3pYqkSv1qc1QdyQDbgW9FsXbMtnSsNVjnsmrQQdz",
  "key18": "5J5izy4Nk7uEkDaV5T8w2H9Wm21UiABcT6vxMT19AP41i2qx4wFkwxB55or7VJQTX7gyinNHnxove3DYQpkJ1P8E",
  "key19": "3B9wkBJFne1D9iiqqbNL3vQrZQ1GnjA4ikGVM6HkwDWSa9q31ntg4EStEZnCTmY3uHUcRdG1kfc6Vo9JorE1TGuy",
  "key20": "1ArUiXoRWnYXD4PD9YPkmdKbogKGa742Q8jUxBcJ93etzSoLHXn6PmiThgDqsd5ztPgygGkFmNEPjfePuT539wC",
  "key21": "5wxKs5Jv1W6SU46Gw6NXoLFdpmSQpNK17cpCD8zcFRhiYAk2dZQNdEt4aJoov6DzxeXaqbxwrY2QoVMpczY7jfXu",
  "key22": "3kj6ui4K4fgkWzeCa3QEzdCK4xXSN55NgiCPr9LmE8neJPo2AWrfBwywhwGz7W7kZQBjzBTSMYhme56ncHJy3aRV",
  "key23": "2jsMQKZB2osf9DdKjMxwkDEBo9NsS6CLCoyg2Faz85aQyvkiHT6ysRDPrLfJmVeHMW4iEw6DyG5H5YwPGAoMF4U5",
  "key24": "2ar6gm8WDKqvLfZPmXM5ZgBis3MBPFhxV1HzrzC4BZ9SxUyVxta8NY9YdpWGZb577UPw9qY7uitaRiCco1Nv16uH",
  "key25": "4xaV2ebGz7xGpUpwaFtNUjpK5Uso8qwznv3XuRSrHYe1WjpfsFZ3h7kunnXxp2SsuRfz69MCdLEYn1XJveopADsC",
  "key26": "3Q4iAWtnuGrQUSwp9JW1SBufU9CQNSxTAmrNycHdjqm9eFRaqRSTNEBfNKa5LrYgAdT6uSMyqSoXqjPnfpmVchjU",
  "key27": "4CmGXwotJ7gXNYnEGA7JDJPQjf6sVSJH3RHFJQKDVAW7p4RzPvFW7QQMKb83NTbH6L3T3RbKEA2oqjUs2A8aGWE9",
  "key28": "3VJLHs8bHAgSpbZpgtKEAaExhcxxF35DYGz6kmX6NVQgVcqZMY55EqRJLzj5gnGxLoDLMNQYPPdNm71t8Jn6T4gg",
  "key29": "4Ros3t5MjY6xVJ8mKPkE5h7HixAuZjxNxEdfcgiAfAsjoEpTHLjtnxm6daTGpBG3MfyamdL5EKhgQDCvqLHxDgqY",
  "key30": "2HkYBd9cbG75pLFGgaa3QxzS97dSUqo8uwiG4TknxY7BApPTrQwisqRXc66pbLFDc1J9EKmnGhUUeeeYrkBBuJVN",
  "key31": "5tkDebxc5FsMbCgS216BySVExaWkDBHBrXL32CB3zxoUYr97MEXsfFkaEqhQUgr6ntyJspSoHtYq6DLnh1asPF3n",
  "key32": "27w9L4JVcEWv2AupcNiKDEmMevTM4vdWWXMfHids4WAAjdXETYBMTR3ySc2aCcGLxJfjDGSLAa4rgKXZi6YA2m1t",
  "key33": "2YTDvByf2C2D32gwfmvasBtTMbKDzSfrmQGFYXwzpQUFMtmxGEbr5szQwoMpL4KFekwZ6D3wZAy1zXfNViQUq8tM",
  "key34": "4ijbidep1VBuen4uwCBuQ8n1M9THhxqPdPPayamkCgprmneEYSZnJrvGkJedCnW3sZLSKaS7fpTNEGaf6WfxvV4R",
  "key35": "FHkofFo9QxNe25s21dXhkrGoeWASiMRA4EZvBZrcX4wgV9gKnaFWFLz6ywmgALAoUzf37kh4iSeX3dYe6AwxCu4",
  "key36": "4TWaBqvKBSEKWrquyQ2SG7Wy7Rtr3E2XrW1QUMYHfK5cJxSCpRuv1btSbT6D115rL5tNTVfzZqwqHBsbxQyXLbAp",
  "key37": "3ke5uKhqxjHBXtfXAU63Ar2kwRMJw2j24qyCVbrtRVvJdgkvyGRtRzDkDuYrAhysuE1cawf3Mga3wPmLP4S2QCD6",
  "key38": "4rhfbNpbhdqWLDqyiXux9dPXBSb5tcdpE2Gz4ixsQnScMySKErWe5Ee9AnXrWsWDwgnepJo7QuoGJLondtA8gNKu"
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
