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
    "3jm5LJHSKfP3q3nUcevzigTA7kS373TpvBqfrD6CtFURgUUvFePR8APqqkJpUK1aeRGkPhutsoiaJAZAdyZ4JDAm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cTYcZmj6X6SbkWAR1fEdGQwAXMsGu1rFB4nsmahGcvZEbYUn56Jy1VKQUjfTrQQ8hbTTkHE7fK14MDkV3L7tu8b",
  "key1": "5T2sChnyiza5aVHmuuWn4fAFPsKugNSjViJ3JzuAre9FmpU65CBMkufoBpT6Z3TNtNYyZUTpJxKPEzJ9hm6V78rS",
  "key2": "QzvPLLnAUMjX7nYoh2XJxBziqoBh41zqV7GPneoAd6eyDifzpeZJLY59gaXszT9JHdBSxinPMmrxFGohbFmUR76",
  "key3": "2hZphZFohctT8nRnstFnKmx6nrcqa742JvgMNYsVnDNK3EKwBmmSvpNcSkW4R6EndBBxcQTkkHoDfdtamqSjEjN9",
  "key4": "4VUSF67n2c6Xv8zS5MjGsVWLLgVWNzSyaAmPGxrAieSDcZSri3Uy9UyRtKk1tDkt9pjjztLb87QENtz3YuvgYvRo",
  "key5": "5r3gGfqU2QXhodbng2ebdn7966rEz27zZFdSfum2PMmSFpvM8c5Ex6rb8bnqt8bvp1JPfj3bo1Vc9gSTSaAky4Hk",
  "key6": "2qwstdNKcoZ8pkW3dRxiLbRFtSoaGjAa7JiVHBg5NeokTQwkzyFZo3DjgJqeSjgWX88jxogwdMqaD6kmL6SMoWMS",
  "key7": "3GQkCtK66gFeAFjWFsA6T7qabDrmcEEHuEqMJUZPzXUapzESS5BrJUjrf6MudRPzatfbbgPxz4gDMD9s9F1Z3NJK",
  "key8": "2FnfbhdhsceKixYPs6TPEXFH6wvZrv1KSsazygnVGhwGVfteWWfT1GWKFMdMF3RoN2uN2gc5qz263v8rX8BkquKb",
  "key9": "3Xnr5YiLgNM4mLvWN8mdFwJMsTHV3UyxJdQ8K2i2wBN7LK64VsAMtSgeBC1Qk5tqp4cFtLk1eUu5cKx7P5xdbwPu",
  "key10": "2w5wYU1wdJBRgVenckyQkgNg36HhEgB1bn9yw3fAZcGgRLDHz1tMnfyV1ii7Lva6QPrVBPngAL5K3HSjAs1aNVBR",
  "key11": "vK6feaCnfePPbciuNitFAW4VcBA1JM82Lvcm89nPWJQ9yj8tYnRLK1baPaLaK3UeNt8zUsrUWkYW4dU46nVKKZo",
  "key12": "5UL9ZxHw6N2YQa89cF5J7Vpt9kejFzki6KuetJmhNycgWJ5fyfwEX7S7P5A5TxXNzkFFTKovYG6gMpbiixqVUTZt",
  "key13": "2NgTitU6xXbwGq9iQs9zVYsAsrgtSHY1dznxywe8VeJFU9bCLMoF5wsWTj5ETAEXBqE5QVWiW38RKsP3X8sFEk8w",
  "key14": "3m5F2GiWqn9vy4KT3PfZzRgg51t3UuFy8XpEjVAxvR4JrkeFvMFS7LF6QxRjdtjscHmThCFAGMpDpMh61FipwELP",
  "key15": "2PD2b1qyBKiTrzYDdegY2H2DGV17xaaeA3MKDUAPf6ecD92iHRsayTY2mxQ8G194yQJWfSwRQ7MxwhkBWAC4EXDZ",
  "key16": "3b8en6xfowghKKekdPdUUUQKtP8DzfUtVNzMs7RNfnyGFAeVVnszR3wMBqtgGM9XDQkU5VvjiPKdSWCxTU7QYruv",
  "key17": "EnoSHHmA6XUXzjbN5c7GH5bXLyG9NSioby73xmCd8izQjyJ7XsEi8cmJeXt7ig2Wtejcn6ithi7yESXq62VpGQR",
  "key18": "2mBiYKVZq6A4KLg6bpj2VAuAet6nf71eATqhnWm3Pi4nxGPrqT7DfC9UhVqd7zSwdsVdSTejL3GrW2wkgYneUnEk",
  "key19": "4SyZHEybDeFTEsBb9ESJK1FxjKba5YNqh2ZVDaagqyqGyFGNUzCXfpy78FCtHTd5NUxmpnDZn8Mao3mRr69t15HE",
  "key20": "53Dr85HDV1PT9sW3DSyjKLwkWfdyAYfatDZuNUdiDFDRz4zwdPjW6kvq4rNJmemJ8oek8CQbHYMyLw9Ro2X1DRVB",
  "key21": "X6oMQwoa1zUkpVAmb4Qf3oHSnTdQq8oKWSTLAiqQuEkK6BBsquViMMn1tqchSGe1e7GyXq6hkQ6KcGQ8F8RAtGQ",
  "key22": "5p3DUnBcfkYcW54E1mSmWAcpYkKmKDPJag7pG38Q64sFTRv75vWuTdZyDDsY9dt54m5g4QR9bT6VW5t6tzsoA93U",
  "key23": "3XsqQQ1ChYccg95YKaLaJSWdUkAvd73JksMebfgTdkjV6MkH6GTFLgLfW2UPDcLbsNKbA1AEZ6eg7vDXtzWdi9hH",
  "key24": "3dNU4aKoK6ixr1QT9PpczQeVjWiW1C9RDcF2aHkBjKeaoWfPk5n41XYKDZUcYu4Vq7msMdkiePCV4xz7Re6KBF95",
  "key25": "5dvgXrCQbE7NhGi8ytnTikXPKyBVJ6K8c6m9Dhw1PMrg2VBYL21cwYJ1xFQBCNFih8CrT1fim8oDvcxtoyc4PbNe"
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
