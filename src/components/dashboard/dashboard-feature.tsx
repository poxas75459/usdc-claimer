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
    "5FqcA4D6AJtms59eGkRvDintjnbqXaDtR6Hog2XnDEygeKkWGzEE3BJ7YLdKs8eZM3hPUvJfNaYEtpJW2cNBQrqR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wyYR5KVjvCfsSnT4y75RS1Rqir6fRS3A7VyBhCsKaVD57S7mQpG278ojo96YP1MipoBX14F6hAosYm9uTyXTAU4",
  "key1": "aD2aHCnxjHdiM1J9kSbR6dBU3YJeAcjueQQfdwz8EMiVfR14mNzxU4SWuwCW8Vfjm4LMWupRXnMwFNApe4zABL1",
  "key2": "3aZ6ADV2smcjwFpEmHp6vjq6ur2w1JZpKQw2pPscxwP6RtHCiW2SjDPqMySNNpEEruknHCZso7QsKmc3hePrmTCc",
  "key3": "2QCA9DnARfPchmxAt8zE2X4Sasy1znjE6i25wXmMykfVcLJf7XRaUXq2T4qRMXsReMpQhQ6wQPygVpHsC7g3PZpr",
  "key4": "2Byfkgu1uXjfcdxUFqke6MuzFiZwuEZTN97Rn3A7YmbnFDSfxBKmNXAscBCvc5sZcBoaygMxgYpNZ12qPxijT2DM",
  "key5": "2vXBgZukfsf42E8LS5DTaGyHwzNYTZ4dQ4MX2Hhk2aM5sW5mbU3x2KMtikVCPLYqBeSYgYkg3uLqhyta5Uc5VTeL",
  "key6": "3dQB9JWgMFEDuVRRw7obXf69fXcRgb599sPU2DnbHxAYydG46MBzgWkjNMiqkAhVEEwH55QoATi5uDsMyFWT5HT7",
  "key7": "3qaGV9yA93jPNdsuD9aSPymH531AusCPN4Cpz16ifdZqehCjsvJDVGjSSz8zncYWMbUqYgY17cQRbQ8KDnuWEXvS",
  "key8": "ZxxG1n1V9aRoUz5gjXsFRG172QHP32qm2AMYhU9C5nRL2FfHy6k2YNi9KCeRPRNh74nRTsex8HizjSbgcX5vRsh",
  "key9": "38DYuEjBjABwtLeuydyDHiRKPJbtXQEVNTPRrkoHMNbwrTzB8Av59q3bqeaM5qfcmNndxhnsQx4ppqtdWCT7YFMt",
  "key10": "5QaYWywxEMnK2kmH9Zs4PWVCPAviLA4aL4wMgir9k1Vf6WdTzCef1zSNHmz9wya8wsG8ph7DBrfyFEXYy3tezsM8",
  "key11": "3jnCSJdV14NDrucZenGFQbMcx3e55uvLnXfmvF8HVntTVcH1GJVghTw2zCtdUCWFrmCyBrtcb64aYSEqeGbY1vpe",
  "key12": "m63Q2c3Gf1kVHVFbbAPCQjMcLmdfh3PJYrBWvL6SaAk9yhzPQAZsj7Ako8juBb4bJioCFjHjPUZMkFejTNGjUEt",
  "key13": "4n5LqbxQzGFxPyocku3aSbQHDR7MJtzACEkXBn5Hgb4RVS5AzGoXeKKvcLriAB7s1nacV5S3qsNbeYtNrxnpY1hf",
  "key14": "3YX3w5Bwkde9dVgsJ1NHtPeVeHJT6NVUxoGZEnPQnM8zTqMMj3bLvwmfPjk8qx567cVEQRcH41ZEaJ39TLjqYDEP",
  "key15": "4T2ZWwvS7YgDXDPXox3xphpcdkiiV7yPBtPi5ewUyo7nKfJ39VMVrhSt5mRvvFBC4Csy7ox7bUBkEJaovGEAZ9KJ",
  "key16": "57cNobHYKd9o3msMDZeNKV7ZSEwKtccVGcsNZCYTg7KKUyyPs7f58fUBMT5Yao4JJ43bsQtRseWGAuqAPqh561v7",
  "key17": "2gHHG5rnfPrTasfJKNF3rPbQv67U1WJoQjJfidDWaphMRmCjJcybESL1qTPPdvTpXeQTvTt1VR6Rtznd7oNhdrXT",
  "key18": "4FXNVXYuJcDfTw77CAiQ3z9S3pKhgn8MrURzMgYRKtMWWsZxPtSKQxNwN7S7JonpgpjMAmMKut5pbqKiVyL4odkA",
  "key19": "5ZgWmP8WHNVV7pCkij89upQrBTRXaLaizsrBYWKok9ekUE9CmPg3xxxsBeu3sZUNjq38gSpad2mnFTUGRapg42vi",
  "key20": "4LcLLJ36TsSeXHtJ3pP8JxqdYafAzVVeYBf38Qh35zF882XeebgfiukKEThvrv9DULASmfbLA7VzZNKRx67sMnxr",
  "key21": "3SQmG7KPkuLwnCy85dwJAABNDRzwWYAWkzkLK38zN7YiEN2n6GKBmRFWUbr35nLTusS74KsPFxbTe6L7FRHPkiGs",
  "key22": "4RciQo2qCXubWUMMUfoQGvVDP6zyGqaT1uFagRckMVzgyRtFZPaYFAFEuPMbus7ADbo4PELVK652oJ7wmFKiRmCt",
  "key23": "mDHZAhV9uiE4UHvR7Q3J7PYGgQ4Ma6CWtcBAYbLtbQUWc7p3twWK8upCQvfHh55DszpNTsG8XkTHQ7Zb1e8kcLE",
  "key24": "4vLt859J9bAjFg9qvvMzafDA8HD2Mjo1ieqxsifXXfbn1bE6agapE7yj5PjU3pKPAzArN1czV7sFXxJtHoGcRSiq",
  "key25": "2JVWmYgX6Aa4MSCeGVS4pLbCJv2XQfSVLUUz68kE9VRShGL1abVCNyV7fGUFPY1TDsJT4YY5mWmozfh1Lbz7Aemz",
  "key26": "3bAUTYN8S1PwD176Btxqy4ff8XWF5196bMknWr4WD7urhwhazKXGgFon2VoytqH2EwZaYCgFCoeVvobWRJbzQnu4",
  "key27": "4ibFoQidxSN8tYdZCTboNxvEtWeRFSFwtPpHZrk1jsJdrZGvaEw7UtVK39nwjwQ6EqHnsix5DT2BKgntRn35ay4E",
  "key28": "6DjY9ZFHsVNCKGMh6iz9NCkvfw1wUYSSKwvo4eLWTiCzCJdmWdDLe52QdGh28QqsRBiMHu4h3xHYYv8t5QRGmG2",
  "key29": "3DCEPRWFaqnSfP692sFWsuQXuqezPW51Gkm6Le5zoVhzdxAKYR2dznvh7jCcQXw5fiP7ajeHhzt3KBncEXa3RXQi",
  "key30": "2ACaf9fb3X8uaN4C18i9tm53q4dgg8rDxzFpA5nc5kLaKMQ97kQnnzH9zR31bFGLJgMwJZBYk5ucn6g7p8M1nt9N",
  "key31": "2aYRLXpPqtXWcQvx8PcZPnvGsN7WGSSns7B5doLiZmhS8KG7PZCsUM1gdvYoaRYgUX8mVjD56CVqcdZudBhgsBDs",
  "key32": "94wtk1ef7eDCd9PicbURr4U3FNrKPfvfNvmgpMsNVVwdrfu2WEQvv4WbVXnYaPZzsd8cxb5V2f9HGAqRSy4gPkC",
  "key33": "W7Kg9kEJKetSTSYLRH4WYRNA2PyMMA2nUjg5W21rSgckECKNhXiHkFK2NUvYYhdbPFub4QG2jzYbfwii7J311A6",
  "key34": "4XnkWmdfZYGAMCnSwbvkKALA8ayk7ZoQjDu4a4TSGRdEFs4CHkBBe2NVWR1SsPUGLYJqx1ZrHtPM2ZUuSrLNkkST",
  "key35": "5iTLYrPEsLi7UiYX5JMnsiXgAJjhsaGdM6uMnqZ8cX7EeiPihZ5vwJp9pxccYuoaF7LWzkja4aWtWiijAkYZT1gj",
  "key36": "2kLZYceLVNi87kBdATUJP1QZ9s64UgcqhDNNyACJme2jcsPVe7wpTNXR9XSvMegn8eh8u1VKiUJkJcxVzEjAj67E",
  "key37": "6tex7QCN2zeqq7cCUVhm7CWxyyqZuePMyaLMWQucEo3aUrx8t54HWvi5kBjrhRhx7XKZvHx5m5V6GENjtQQ27En",
  "key38": "4qsSJB6PmVE7BkVmyjkyA9LiCbYXjDQsGpaq2oSiGGaD33Q3qGeYTiErFoDCgMmwkNg375jjt7R8nRpPJ9nbJsLg"
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
