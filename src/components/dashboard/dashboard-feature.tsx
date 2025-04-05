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
    "2e3AtcXpo3eqoJwogt7HmjXjhk66mRTieZVs236Ezd6bFCEsfdT7TmRHo1MQeMm1QgKdYeGKfCzt57XghMSCQwZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NmQBj3oB4onoWUrpHbeMeNE9WQyxVpT5LywoAVQ26QB4rdDi4yqjagRMHmdXE2ZG3jDwpZEAkccAjwgvn9NFttc",
  "key1": "4sZMYyQB2Q5Pbt1mnYAsnW6jCzGe7SqUM37aJCnYGzwzZ4HdMf8L2dVZqCDZU8sA9mPKy5Hdq4diTJ6hjiLYAEPe",
  "key2": "4ov59nRGZFS4Stf3KZks9oQMMxBMN6j32GTVyJ1XXzr77vU9RqQgD3YBWKLgY3ESen65ZeC3Br6sQCcwq2cGw3KM",
  "key3": "3C9f1TRBU3mnEpPDFX194BCDtuAxye44NrpkcTxF2UxpTPPXCAHinhMeawLeV5k9sCuL2u3vX4YxEnVF1xvRECbS",
  "key4": "zUmEKb8euUohJzJrPYjNWhepFNEtUSkw6vsv5p7Hixd9yFEir8HwN1SQFbCTTFUJEsoHMwRspfbpgyvR7sQvrSg",
  "key5": "5kwKCYmbG299DRs5Zjsq3P5nxTzCK6TVczS27JbdVio1kQjdNZuxN9e1YGBz8EJDxtfvpTd2xb1j2C6PwPWonZsG",
  "key6": "57uWJavJy2EbXoFZMGzWguUhLcwM6gtSZTFzCYn6CpHzvH5aDUn52B9L3WvTXRmJr34H1Zt6nYQ5ct3VCZ4ZwL54",
  "key7": "3P7XWCGXsYNGtco4d92qn3JtQvU3MSXGUH1GmVCGTjc3g3Rctp56exQL6huNsbV4WVV4gBbfNT36EQkLN5XPpcW8",
  "key8": "2AXiUHJf6SBayFd6GzhgM3p8ZTzkqvRmmMo1xVtPWSAxQkMX9HHWWv1ExLDH1z7GfxFH7XNTnF9czudaSxQrBreQ",
  "key9": "5ZK775cLfNb4SeohQMzNGpFvSQk9s3kxgA55JSYSDxPDukR8P24ZYv5irfEtdgyJcSTe4Ze4hVne79mvN3rQgTjT",
  "key10": "2VE7oxcUHdYRiaPBAS3wU3jpUm8DhvrXo6DYUqLpq82PXsZiwqGZg5zViD15ayZr9v12sY9c9Gi2t84yxqp1Y3QM",
  "key11": "4Jpcyo2CB22HRjb4ENZuRh8M3inkAo2bTQHhYKbi15MzqDcx4EsCGFJd5h7YS8a3duSnJjxnxRCvWRwqrbCSMSyQ",
  "key12": "4xEj1VySxa1TS9ZdtCpoCNntCyYVMGa1Des5EbohRaJfaDj38fRCYGgCEbuxZusWoQbqSSJQ3ZHUZoP44Zj7F7ea",
  "key13": "m5Cb2fRg4RfqAFqLoAVVT1zexZ7x6QGf72EPdqCG2KYp1J1GssNhLJs7bnxR3X5qn968gRYJLmXV1mrTA5y6dnZ",
  "key14": "gCqgNC2Z4LHVD2tCEwh8uNgcgRLrEFGUFTMZmgBDHzZegtRzjfYSVxqhqWBWe5MdxsjFVbVc5a7cBC9nFqpNMv5",
  "key15": "5qv7oqVSHKHZNP2BPQNFoXnJUX8z2AD5mTYn8TYCBzTvdmGaGpiXMWhBgyMTBctTBtxT1CssiS84ccutYUCLavY3",
  "key16": "35b3AZBCZFhkLwoYoxdYt6hR533GQCUrVqCdstm8rDPZTa9jeHJSEATA91z2shrAHoDVA22YuMwSt9SNFLVcvyZq",
  "key17": "4snS9zvFNdvb5CwgkUEdzE3z3KGAyDXB5udSov2fTmeSx8qVUAgRhFfiMUtEuURqb3sia6DHTnjZfEcmjazErKHi",
  "key18": "3RtneyWeBntjpwaRp5Eg4jbgignb1UUH7GECbFvWpRy37FoqpJVnnmUR23teR2Ak5BsKvLFedCeyQog2sNJXHkJm",
  "key19": "8sbYND1pbBfsF1wbXuNoh3h9AdxsN9FmTyJWoFr1dad8ZS7bSWF4f8PwX7L2hac28QMSfRYkEprU7dvi7AzahM6",
  "key20": "4hmLfvwieNJpMXuJTCezyoMhc1wDugDbo8ddui92YmF2634Cf1npGpcXKULS4kmZaAWRp8w5gUXoFdwmrkHLP5x8",
  "key21": "Rg6vM7LTQYShocyDCn8E44RQuUgUANYMp5xQt2eodpUFEahbNAjeGCdjmAPJMugaGTxRj2tyB8adBeuKxM3Gvzm",
  "key22": "4iYjZDxB1cpG2PjtFq9bKSiWYRbS3yJYghTTrXMe5ZHLm9QE3MUMVRzu1KjvLVmrURdri5DSHN64HCePh7vZPofP",
  "key23": "jbAXefZZnuAv157BwU8cuDPTb9MfAkQgkneXSzBKzxAgc3U5PNUQRCW8YwrERwdF227SZea6nfNQEiw7vs7wcQ9",
  "key24": "4UnqGZWe6iFQMfXXDHAvPk5MRzWun5j22zfoqjQhVoEaqwxmeKK7B7jyoYbttmmE8z8KYfjh1xHfJr1jdwNysKto",
  "key25": "9PVWGiK96SMVYz1kStVWeRh3oKyj7DHWXA4osECq3VQnfnL9TFRaGjims2XfLPX5FjhWL5VyT5LZprGv5igZ2d7",
  "key26": "5zMRXfrtKidJCZYCUxbPp4ovhwzJFqWNna7fAJQD3FRvjGhiM5rw4Dvj3aGhX8vYo27wyFuCpzhwjnsBkc5wagKD",
  "key27": "4iTPPqWVrnYPtwdWfXWMi8PXQu57qsBHGn8heopJiTriszCkARZLE51KYM4Yb1geRY5iLNVahftG6Cw8rWaWDEXD",
  "key28": "35cvUru4a98v2j7CUxAoUwzy6D8bJzaqomHuYaMMQrYgKKbD1BnZjNSF2X5ufWbTV42tSD9nQ7rjWRXiUYVLdnYq",
  "key29": "4yYgQyJCpK9c4NVh7NXb2T6yhEwv2MTvssi3jGETk4XiT4qFr3TkQLyDTEJY4oxKXyfGWyhSWVbyhgJEaJz5eKB7",
  "key30": "2u8y92kq84oiEqjgRHXiPzGeSRdyCAx77mdi2gnG9jVaxabamvuuEKgMWzB11xqHV5JhQqdygh8SZHqXWM5tUoBp",
  "key31": "3inFoxRDMNiYYCZexNB86EgUUV7amMhAMCWUSW3n1itULcjsz983J4x8o65bM2Y1ikM98mupgbv8LAPYWmF9oe3x",
  "key32": "3Qt26VavqRGbACLa4TFkkXCuY69KwamcV7ifXuAnjjsZ7CBkRFiSsYdvAnmKg54v3h63xtWN7y76GzeNJWHucJkB",
  "key33": "59wmLydn6bQxHUupay2wfwkKWjv3UrG7bcskgRsohMCA4bFhhuHU25NAcHXzyfDt8YGD8ebYhskyXfVuPXZVLHbC",
  "key34": "2F3ubSkUnJCh2fkvwJ1gudG2JrhJYYuX1FiErBjgMeNt7p5djNPtL1nzHkqCW3SmyrKnPTBhBCxMgLKZKpE9sjiU",
  "key35": "5vcqfFfwdDxJGFdm7GjKafiSD4VJZekVeoSAbvveKvfY3tPsC288feAPJwYPhM8HuTfLAwkm935qitB5AMeBc2Ps",
  "key36": "2UGRpenfYb48ENnn4V1ghez7hyJx1uRPNL9aqnTSMPeZt3jmMAQtrtrfLXxCDU2cb1PaiUthyMczJYpx6qUJk8UM",
  "key37": "5UoQcQg6VKR6yg63g7vHp6e6UvhK91e5uq46HDLMJdX2Ry5B4WhxQyoZq9JhEib7uoQzdkMiuxcBtsqq9Yf8H5Jy"
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
