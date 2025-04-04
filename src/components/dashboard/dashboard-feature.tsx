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
    "2fWuasTCnRQb11CZhi8jR4XpNWPBguJkH4KMY6iMWbYjTZuPtPQVud9uSo1Hbog3eNRUD9mzrg5rMrkX6VWc3wgu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52spaAvBe2Lzb4SY3D7pCSKBATZjP2uZZj32K7pTiQNctY1mRjDD3LqcovZiW3J2vuqRZHXqGbixqHxN4Y88Yjo9",
  "key1": "m5kXRQuqkDLBzb1Rix6Lnmv3ijTq8Afhg7hD18sonzKcetDLcEruQ8EzUm69jPm8uUyontYmDVpt8EwgN1honm5",
  "key2": "rzUYoEb5hEzMheJzd8XQRv8QfvL2FUVLGtsdFVYcEhrk7o3rTZ66EmQmtfcz3cYfaTvEtPegCmECTeFGs1QdDuS",
  "key3": "5a2vDKHV2nyuZiHNXK7wxnije2thubiCYLcwWca1VnSV8q6zVBNDauF8JwxjKpBJJ4r3X5DzkHZHCx5t4eM4NiCH",
  "key4": "3eJEgYKanUQnSdfUAQqXHGWieNZMH99mAg3AGtCjkceqYcF47GfBrTTHBGmuMnu5vHgSVETZmcZRGhQYRoSrxvot",
  "key5": "3NFKKXGgQxgGkSXLBv6kk931y8XFxZWfvinroCYVrfj9B8rSMx7KuqB9FGUT1LAzPYbAJqdFAcfHe62ggVc8GFyi",
  "key6": "2rnBuCuHJKbQsk9wB2VVLeAvvy9ggwMUywK4SUvC2UEQQjGZq2eHV9d7kVd6pBnLk9XEjfe3DxwKxb5PB5wNfDq8",
  "key7": "37LadgWNTFCP12QrRcjnMFCBARZhy552VzZGESahkTk6nqWdG3odSHvvVXii8nXxBKbmz8FkdRkeDHsHgVMXgRvJ",
  "key8": "3SZGDacgAofr43MFHJnWFtoBqgz7VC8hwaPrRNHaLbPJpP8o9mKU893No29eJxLWbexZqv2QzRFiEVTszD4ghKhR",
  "key9": "5i9yb4wQjUKRyA9fo4VhRsJFuMwFgdbGYppbXTBvSBmHAqxGDByxWFJNsYzv8Drh93RC7yeMSQMnLja6EpTZ61Gv",
  "key10": "45p9We1FvEVBkqeKLBZnYM3nMrW1GouenV8SA8cV2hJeQU9ZmixnRgLHi3yg6c8tG8sGsZ72tKGQmFXd78EtX7xL",
  "key11": "3bKLrBZNfHxxzSFRSfRuADrnheYJsKmiXMuvfH5V1Vnfn1TkGhP2k1T6fra2vzqHxZhWZSgs1FE79pmC5zAM2Lj6",
  "key12": "22TBwN13kBXt1Wp8NmLfs5BDME935VypCyPhgkgb276avu9SmTUBcw2qdirtFsmPXhXdey4jCv6kCbQrMNJGX5PE",
  "key13": "4CUifp9ne48QEBGTV1i2poANYH5fQLfwpFNM6Tj6svJFbwqQ4AB1zS6DACCuCE3NBRLZ6KouAxMVkmeojiQAtPnX",
  "key14": "4skmRSLpxC1JBsgcjhqMMqaUEdk1RXRYehqMkYukqCcjC5AfQ46dXtTe1yc7CjvUPkkuXJZBEX1ZsZJs5BDrqfjs",
  "key15": "3Sq6z4zC8Mo1pEzocuqAEz8u3HWRTT5963CXVgCW2efXHUQbF2Ca2z9QZ3zcERdi5VTdTifGzdbWz3gHdXxjoanZ",
  "key16": "3uRyCx5MNYFxUr34uDPVPtDhC1eAD4EBmKgQFnDdHGrmbA57KHsUZTcfSL9tdMMLnow4Vtnr7Viji6CXJum3sSZa",
  "key17": "5EEZdtT85ftiy66RYonTBXGTCG2fUY9dJ7Q8aJnbzybaUs8FTwATQU9BwgcHXJa77GXVjqpDSVjC2qPvb17Fnqjc",
  "key18": "2Hbc4G5d6jWE7SMb5CaekergUNRMSeeq5MByptz4AEmLvLHbC5uGF7iLkCAP2vpYn3x2oU6uZzbEMBNYoaQ2b6fG",
  "key19": "5LkCbf5HPfh1Cjbt1Gb5hwixqhR8QRHVJwrdCfk5n67FNv7rPbzf7JQXtWkKepowNLm9CTc77orumz5FKhzwJ3p",
  "key20": "2742iFqiPDK2ar7wbB5jHUREQ6x4APa3fkKpRPJc7rcTuxbYcB3gMitDgZ6bEcQHboUh9zHyNAxAohTbdUfG8gdt",
  "key21": "hBg9itWfH8WAD7g3ToDM625mQcCU79NkVwJDVv2eMA4KJ76d59h32CLyojHqrFRC47SfKrpAgqmx93o32SFUr9P",
  "key22": "3RpqgddYAzCMs2fB48xeSsZtxWLBVsb2zigexP7WYfgdhqSL2hwamG4LZ1X3kc3dMSgpV9BUrtpGsk7qeV9JdaP1",
  "key23": "36nipxqzuAG5Z7t2Y1zZkYGAy42sQB3wTvNekpoHixM3FQf1yxjQXwibFruZKeaAVvndwG7Qn8h9z2QZ58Jhc8oR",
  "key24": "4r8w34EntmJMzYy3241iCNNKHzbBh6dBwafUupcUrgN5NzCgcAy2GfJioRsf5sAJVRSEftFed5rTf9cqNwVptmtL",
  "key25": "3uJbhxABYaaS55vkXHXifujAeULbsKafZ317GxGp6ZVJ1dnbimLFCYDw8272GjC4J6L7wDzs21eJL1GKahzm5hch",
  "key26": "48jjXxCpGHp2pYBo6iN97LSQFs9SZgS35kJwhLL3jSu77xxZLnn5WGyzYXt1Rx87xTtV3FvPKiNKUxL6aqgSvWPG",
  "key27": "2QXiQ9Ty5CHFuDp4wRLzwjWrHiotUpznDYf5BFGRQkKey54ztAv9MxYoYt9aoHvR5fdFU2FAhFkW3gACwsff1ift",
  "key28": "5i7hBu33hPFDKtKP7xxutyUxyVjByX3YRgRw9Z8posm8HTT4hDpSu77uGNZ5fdGdRXBJSP6u8kqh8Pec9qKJwQha",
  "key29": "QpVr3zLWdt43VrvRfdpgepjJtd1TR5dSeRYv4dzHje8838CWp7u2Fqrk8pBQk9n4sEFE5NuoKyNw4dYuUwpQcLN"
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
