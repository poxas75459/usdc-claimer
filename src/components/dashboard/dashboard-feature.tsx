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
    "3jZaxNXqqtLWBpnJ8x2b1Aosm2NBbRNe9LwGCyvHEMmnwp92cnaJxFZSUaTmxPPAnGukWuE6tGYYCJBVoCWWhyzj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53hACAHfTthDEdkopVptn8aEWXCCB2mM2EoE5viWvGcvsmPpVtCPx5DTs35p6QSz2txW4cG9SapdPuKX9g1ZoCKc",
  "key1": "3FsSCDVpFaKfLCQ191tzennNhaMWYLraCnCSNUhNKpsbovyuyvtS7KYR4bXvFYscoseK3aEdANqyhguuwRCCCxX9",
  "key2": "nyN8qS3svsP84fZu2f92jusRWAj8Cf9RTobmPCqmJzxUzRC4M1Det57imt34ZbK2u8mJTnpxZvLaqWK7LE5WuAn",
  "key3": "4xohYXZXYihdA9dEgMWoV78cGkT44H4ptP8992q5JdQTSX312kXNywhEp3z8fbeHPodFmcthFXTUbZJMqvQY6k5k",
  "key4": "5Grtznu3ZB1PMyVGUQjdNdAEsX2Uoa9KjHApRoqiKeKZggoQsZF9kU6rKiYqYpV4faKkLExKsDY4qdqwTK4vMxKU",
  "key5": "KMkPXjNFwisRYZs9vgXLxMYgjsVhJJ4PitrwoggssgH6TzNLMiqW3FzWYdmHr95RdEddrUaKpTggkSqwrszBCD4",
  "key6": "2UWRk8KaSTJUSiTF5huefwov15cKtdBLWdmmJxGze9zmsK2TQdE4FR4YafdcHUUFxqF6ZFBFfstZ9wuDhpKMhw95",
  "key7": "3tJjRsQwwrAyyAtD4WBdVdmYimWA8ozci56TSo8tZ5f7BcNYujLofSkG7MAPfKZ9pbwQT5G3qqrYFebZ6ZmHqeD6",
  "key8": "58zvKUaEpB372bUdFWMtQoJCVv4i1LM3r2jnniQEif1hq9jamVpufjJKAM7212hhT6HpGQwt3ApaKzYR57XfhDtK",
  "key9": "4g9NxuSwkvwPCUCDXfzqLPRZLz4yPGpurY61YFJ3kRbPBBgXcaR18kRrLBUbqVf4yfHp5oKVEftfKv1x1XRjAbfg",
  "key10": "5dYFTQ9xbqHQS3WDPxdPDZFBQ5eEgQB1vhzBqstEDEfPM7VpZgJSwCJXRZNhJsdDDxqKzagWponZq2ZPpPwtTwsL",
  "key11": "4D2PToGsvsiAT6JQo9HXWyKyfeCJ6JUgfycS5KRiBodJEZHFMY6zja3uDtWecCoyXVguEFp6KF6HCt1T4yPVMS2j",
  "key12": "2j8CiRfkdfX5udZAhdXwPX596ct6Rj1n4v5m2eq9GxLyeeRnXjf88QxXnKm3oEvgZDoBAkiLhMkvdBCvJqqmrYWa",
  "key13": "2maeA8JZW5q84PhMvd9DKietQgte2H9eRxjg5R9zpKEEJrcQq5isMveAhzLq98ycEPRvbAqJiyGAHdVLdaM27Luc",
  "key14": "BoAG4upHGYU7pKux4kQGtxcXhye4ZgecVcb3uoRFqFRgm3N6UaA1WpK3hz9esPsjayswtWZcA55ca9DLC5AtkPb",
  "key15": "5Ymy3FsHPaXZh9V4FM1LWu16eYkoqy6JSCue34snoSHB1w8ryPDUbki4FMPtYq8v4owjDcaYtwnThsMKRzVNkrc9",
  "key16": "3m1zGhnzNjp7y4VFvtLC4ooqsdYhh7sKzkGPzUNXJaiQuawACy9Vx73pjRVX2tqYXSkhTsBfAeqv15ejcQxPBC2E",
  "key17": "5vfjExR2jUBpGEpfvq28EfnhsMNtaUy2qiFwgPw7oyKBAjaTvsmv1Ry8yzQGE3NsuzWEKUgKn5eRUBd4C9JRnd7P",
  "key18": "3HNih7ppyjtVz3YCBM2umJviQgXzQ9kSA4omgzmL2tPYoyYuz8Vz6sDXtRHvWAsvXdrfRPKivwKrrdQan24Znh3v",
  "key19": "2xsmVxvxsVNVpQddFHnjzz3uEx6BpVqUotWWdejhihZwBTEaVrQm4B17hsKsiRHrCnySTQTCttn1yE6yWZJWmjcG",
  "key20": "4f818FbTLTBntnei43M2hSo8dA5veuihR1X9sMC2dQWHEZhdeaEdVDBvNj9ky7CMSoPD3Mj82BDCe3ehNP6QxrXH",
  "key21": "4MEs7XjKtoYiGn5osWr7nBCUuLc5Ngtw5vQ3h5iJMce6thczHhJhZkj8N22CfQVrFHcjMFakFhpUGvGWJ3qokuET",
  "key22": "2VbQBcvUHaGC1udjwj7rdABqLcZHKAVAp3KzTDzLdiaxUMFcncmpC9YEkyGCZsbCThwq4iRWENstnws1Ur5DS4tU",
  "key23": "31imhY61Ej3MH2ZJ4mv7Rq1PoDW94QEAX82pZRDLvYFSSWZzv7UWd6PaT5d3pZGXq7Xp8y58jWn1FoVmrR7heHEK",
  "key24": "4TW4LwDtapdZr6QxbyFciCx2KoHw5AMNoUkYTKUgGAunsyE7s587p2hYSkWtbCvyBvb5SYoaHhV2PVLzrcDeuJkF",
  "key25": "4FHbrtpm5CRfhuLV2gA5J6Q4feka7TJuPg6fgNkQXhypXBNthBeEpTrh5DrBCc6guYCy2gjKRksUWQzPjyXj2nyE",
  "key26": "1xy4PP4m4685ykTfZx5rKZvw3ZRAUcuXYs886PWPANWjv2RLDbnT6S4K9LE3XNdNXFXoRJekiMVAjbGPgtzGBai",
  "key27": "2vryCb2Y3nkjFmrDBypi1bfuKJHS9mHwWxKcP32CYehmtCuL4g3JSR4ATBqUmxhYiCDvEJUGe1kot8pkJfs1AXYg",
  "key28": "5fGNLUM4GcdwpQt9xe4M5SVAf8bx2UKSnSHCLqZSMKgw5DkKtJqDGpXZ9chmNPH86nZaddutjRzJFHPCFEx2p55s",
  "key29": "2LRCyTEGAGmQUzYKHLoepAsGh26eeTPuyajRUH765M9GkVYeMHZjMR6HpFpPmF54ud6d6wjYw4FddWQWS5Ta3Ldq",
  "key30": "4SPHwwoJ14pRGG3xMhqfRCzpsfEZJaLgGT35nqpxhmxyFoNSBuat6PMajs3bejFmfd8CjcuWDu2WxeZqGpqZ4CuE",
  "key31": "3XbR2RCY9tf3kgy6K8SSUU4Tkhpx3Jvam5wZ8M6iHGQ84474pwU7vWL1gjvCuUVyfi1GVmcPjTDtUqpUn1HCXA94",
  "key32": "2CvoDa8zthZxds814SrpoiMW4dAVvDSe3rUXhzoNXXQFTk1JPfooH1q2yTun616b2e8eddVDrK727PZhCbpcDshB",
  "key33": "4TeqkQsFS6bpG9wa8fFpSG7qXTgKXvLt3vyPEASW211HRUbcmBFNk1uTBHeKGHgM8uToFyuJ3iPLAAQ5YwReEGyk",
  "key34": "2pcZdAjrrkHTBDBy2PPR7JU3t2NfJxMiZ9ysPaaaCRZ4Pe9ky2GsteTev2UAHiHick4xd9tM78XRtRJtwFFaPXxa",
  "key35": "4FDS9mkdUC3wANQJYYBmtt3pBA98hzP9gdttPx8e5QaNLF4Qvc2QeoZS6CzXyqAxkCGsfqProWcRPa1caozeFVpZ",
  "key36": "3ybtpfgVpVEbzn7Nf6XGz4gikZV3LCmijzPVCFa8uqzskKjzkBoN3MDZviFp1YWVG6cWryCVPRMZVbHbkxmspXMC",
  "key37": "49tqByjfuXrTu4rJLztiH4tUy9cXJKALq1iU81nxiYE1JDL7Z8cV9wH4jd3ukJzUemkQPxS5NvYeytztoo4ABS6P",
  "key38": "2URXnD3VJ2d3caukdRSUaaofvcLm2Hg3Y7GmYTDEfMcRsfWfhjwVZWhG4SRWTpc1S9PzPFAUnG2ifHkirc7ALN4h",
  "key39": "fmZY9n8JwMbgEpkpmZGnJ8PhEFhZurE8P21Pa5RPc8TLKYmYrzhU7k8NjJ3PpwNMVQmpJLje2M6c64mY7nEziNN",
  "key40": "3wif7XtcAKuBUAkhyfHYBSgCx9vVqABrJaoYnMRG8V3ZPFcNfiUD4rQtA72dBJVjJ2eJ1roYDvrUUAXxi6BLiX7R",
  "key41": "29GAqF1oHR11ZzwfwSveSUxaFJHsMHZ6ndZMQd2vhhwtMJAgXJibB5VJoqSWmdxDmRMNPQsvXgLVL9L1sCmcn9vR",
  "key42": "4hsWeWJbVoHUqSMTWBwNB8yBRwrcAju1y2qPtGFfHnu53WtFPL89hh7Fbd1zMCidNqLbndYrqTs8hgaTw71QQzCG",
  "key43": "2vdi4H3qUfNGoCStNhoBZspbzZwhjjKfmB68roSqrs3LAPvPiXvqfuHyXYUdPt33okLpNYjsYiKcxcUd7HsJnhbn",
  "key44": "5PnaUhYq9ZLKgHhUFYG4XYVzFrZL1wUncGREJ8k2YuyEBaH4xJa7Zyk2CJaaFmk1brGeYmhUvghKF6i4Nz9QkvQe",
  "key45": "4Zp4FSphRdiX6CBUvbFyg2RYra8Z5QVNjQAXfk93wvq8nACTGvNpvYyW5n52nbVug14QQfigZkW6xwdrgLZxoRy3",
  "key46": "34NCNveGS6TifZgg7Pm32c55MNLyHXVuxrA1G2iy7N4kgDcBexPFGc8N3MYkXWxfeFCy2DmLNpxgDgV6NkfHLSfk",
  "key47": "28ZhNgbYhaHJuf1cSKmSkxc6R5Ci5eps3SwgqKC5DjE1nSK6ycT7aWRMso9bBWJXpaQrX8P2B8fj7qMkmD8rca2q"
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
