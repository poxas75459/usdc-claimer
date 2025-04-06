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
    "3dV5kKu5JoaCi4q2ukCuzSKAZQoGHa9dMqQBsrt3AsHxZMG1j4M5Tgk7wu2XwYnxM7LuzLsTEcdaHKhHw5JPa9x9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66rHepuCLfJAgHPXj9X6CU8ocNM4uSSHyQaA7YYpb2FPUvjjxhHmB53wTc1fzscCfty9mq88AevbLsQ7k4Jd4E1X",
  "key1": "UhEhL5cBysQRuLL4yCGdq2gvQvgrVSveF8W3ewwWKqjYJzw9Pwzo4yDQB3awsbxGgfmBF5SAd9K2uNThF3PF22k",
  "key2": "4jGCJpgwgxHjdZgdNZEJp6VzSEra5hCtpfXt2oNRYR7gzryT4uR68L1Ji1v4N1UfFDBCqgv9pPuTw8KZYSks4mDr",
  "key3": "47E4712p2pyuE49oqfyq7GCdEAhgcdwMZgcCpa2fxAr6xPwsZvW8d7ChfwF33sSJaw5QVDEkTTTdyHwZRaGQXGXZ",
  "key4": "5Yf94YBNU7tBm69aaTRPjq3AzCK4dYGgz13PytiSxumSpRciuVGwnbPn4TZ77VkuzfTse4wDKJ3TsXkZQJzUDxxS",
  "key5": "325b7YUC5TRfGiGWJqETBtHUSv6ZtuwFTQFhwRwzrvn9q819Kf7tB2PXGaVkDrnZMZqxMLjGEzeMeRAfakXWMyKX",
  "key6": "4RoVEKHkHk4SeCLYZiGpTRGSXgmEgjE1ZB9wvk5CVBctviG83qjAD23dZH4fGjj3qVbxKYG1R6qEMF36LAdGPoUw",
  "key7": "2msu1BomTv4pksxxGnNe56RiJa9cqgi3qHfWTyntXRuTScJVoD7G14Qbh66mx3uRaa8uSKdtjPzhBLWr9kYqa2vd",
  "key8": "5MQzCrssMAF4hSpESvqBkoVATbHaUqTSNuuN7JLuxjRGH5d2wmT1FeeVQ47egE8Pm8nRsrczmqS3VNFimTNzE6V8",
  "key9": "tmBucimsFn3TtYFGFtq7wckk4EV9cYrkmj83dG1raPh38x2HPtQaMtnRgKfRVApazcnXixKeNqBNxBXgAira7MG",
  "key10": "5ZU27rsmgBW2rPL5M5cpBwzc9bcLBfTGefcTaJsuXxhMBMX75uARPtxBB1y6p1HSVDjT8xHTAPUPc9q6GFQxqXGY",
  "key11": "5fkb1HyWUjSHZnqCKfD7tVwsKtvggqgaTJLCm2nbYiCtA1ARE82JATis853WUaUJPjuA3Lp3DvgM57XtsMQQuAtp",
  "key12": "3jzEjPnR5J8ta4gHEtagXKDnmC53Dtj86TQUSydqGti39wSyRsK3Gkrvv45ovUe64KY1F9gB7YuNNiB4N5kXR2Kv",
  "key13": "TND2VxYTHHX87vH5bYJ3bCj8bZ2Z8W5GycJpSdzqJ4vx5bdzgDNfs735q6VJnQairLmpoSRSrCVsibd3FBJugcS",
  "key14": "5Rc7kMdXikwUjeEXFLqSCdHnNdyMksTo5od9gQcttD3pwggxtJBZh9MD4YX8mcrdCbF9kwS8nSmBXY89go3epgUW",
  "key15": "2f7d2CyK96dowihFULxjX6gJro9X6E3Z3bt2eoSFRDKZ9xRrEUhvj1AHn4hUZVUxZDrfqNpvQFW5ncbDQMLZoGW7",
  "key16": "3bjKcaEA5WTnSe3M62ssDEnVi1Xqvu9ENisQqM9HdFxi7RXXR7QXx3A8G2J8uiaK9wf4PNZ6Z8wEDEmiJZjnbpz4",
  "key17": "q6KyJD6Q5qP3rEEmhi224FQCSawPavQLkuUaVfZCSW3VNGCyNxBnHH4XWXHPr1v7JQ3pzMwXWzUCeESc3qE9VXH",
  "key18": "4UJVuUGHnhpvKF6r1JdDDN185MdLij7HQGDYTyaGiBWvu33EKMrrg4EA2gFmkqRQupkRqNmvx24G7ySiSrW6MRMs",
  "key19": "2yxdgNDAmM5pYMaucEnEnS2D6bZjvCobWsMRbHrs55T1bTgQyujqC12LGL75bkrfF6DUw2bSo2TFuFeLYNB7tqce",
  "key20": "DP4fMNtbzZKXgmM5An7aAZpZGB9H1z831bLqBjsoPc6tG6kpZp9WaDU6jGDxhEEchYRTApjBQL2x8ePEDd2dR6E",
  "key21": "5vhcXybjHprh5TfDrR8R19oW5tmrGVwFEYL2EVGZDKJnMEVeNFYTHB1Htk9g4ZXiis1qrzFCEaHgSLRZngQc8yLF",
  "key22": "1ndQP2Tr74gbzxePXpnRUzSQ5RFRM7eFrPuNeTybits9WjAohipAXixmf2SQkAxc5xwwDXQ8SjS7WkQoFXFzXHL",
  "key23": "3FBhXFAijpJVTbR4xZ1DC5kbdZ2xxkBJ4cyoeyR2x2uKCWxtKyddZjZHjvgwagnZg4YbW9jxkkZd7SpL7Z5dw4Wm",
  "key24": "4ECP8YCjcmUhxrAJeh8XM3frGDM7s56fkAS47R6LiYpLqSbH5EnVTci63ggCrSW87vPK5RAsEjex26undgEybkas",
  "key25": "2mfs4MT6riZSiPQbdFtPhfqHutyFS11V6KySovsZXwaFFJ6tHnj71DMcqYXVAmps4pJXUSbLXXuB7nEaTK9L4FAC",
  "key26": "5trUNddbEFKmDwzFoeuz57FU7m5YmCbvc18ViUaYXuvksMCDaGdFc5zSuamd1ZGbvLjftSJamzA99itWge6ZfL4x",
  "key27": "5mgVCa6qcFfZDDP4ChS2oRowoCi2WZv7NFmAjyQ3KzDxWnPySTYPHTvgfxnb8mKJnNHxgUH9fjQXmFvbvLFtu2Rb",
  "key28": "d24DSehGv55eF8H9dQGrxekxwaRHhagWPuzbwBDq145waBtcjS3JeDDgfN54KVJ7vLakqBHNt1YUH2k3Kwt1Nze",
  "key29": "2WR26ieiGWTJjimXbDEUP6vYe1hM6rJUs5HR79DkPKRkGAmpak2yKy2hvjznzuSczY18GMgdtdbH4HWYpGRPqUTu",
  "key30": "39fDATwcmq1MqbLHsW6nNQ3wvAwBE85MbS7TWcXo2TTd1FrZZziiDEBsRuJQAtJPSXPRCCNjDmUA4sD9suVmb5UY",
  "key31": "yPPPY6zCKpjwGyyJdSqD5YkzNFJbUNbAXAn1TtRjYUid8UYfXvupvduu5Fyt2bysepqz5XcrK6p6GKKNis9bWzM",
  "key32": "2WdQtN11Zfcy9XpR6jq4jM8roSCvTqiiXJsWVYnVenoYFW6ja2SftHJMQrndwMihyJ9z3xpYd18f9mzDA5EXKkq2",
  "key33": "51SuFkd1wbVitnPJA9yJQ6wdQNbb6CtPjg9F4SFKcN4moAM9teWxJC9YXjgURqo6cce7DRYrDE7mspDZBixzbD7Y",
  "key34": "5k86FFJQY9g5bHBq9c5CKFuvaAwjhq85ch7PetGBsKqGx7CDemtDZMgBpWTTjdWxWGXdWTrU8pwregLKLvWfM517",
  "key35": "5nYSb5m22SdjExu3Bqa1f4ik48z8po16X82aEABwYXdTHnVnpL3sMiiM7r3UTQpGDFqZp2DbRwzWYj6BBqr22SZn",
  "key36": "259n3Hv7B9wZ3KcNEG21HsBZnsoBoeuMS2BnwFDkY29q5xXX86AXZ2DhAnJbj3rzLbknk4jne1rKJDoxKGUrpu8Z",
  "key37": "yPXHYEMAkchynkWcBBHUGk5CWDPrP3mwjrLFwK7wgtK3X62VU7FsLAmeemP4CySB5GPeF1YcV4jcjx4kjHVjVQe",
  "key38": "65TTSjpyKPJVXje6Dz9Avc6pS9WfV4PVHXAZfWsQ4g8SqwbH3iEDSBTzfexJv8tU1LAqqM9TR9jKA3CWeSqurnHC",
  "key39": "24WWbWTh6E5FSfnkNXb2xKBLH8F2SPD9uVuo8qQ7wVSeEyMVMZAipzfTWvqterRhsR1BxrqUMdYmuKrDEUTDew1E",
  "key40": "4PqX1qta8NHxWNnqzzfVrRdHCJmfcbJQvQtaHwFRbHJ46HeRa1V8aL12FYvtgHHWacB8CtdMiqkpSdLraytcfA1z",
  "key41": "3FTGabNSf3uT4QHVXcTYnFHHQJagjxJ1WaeyghJF9YiULdT8bUq9CJe9eNt48vCNVf2V97Pw5hqSc9mwD34Ld2D7",
  "key42": "2fzmM9aQQ27vA91McJA8vYUR2LQ76psXTMWM9TCULofKYhxiWVpU31VTiCaQq2YLuEnwkBL5xBN3hDnT9XBgJN9m",
  "key43": "W7d7ZD3wArokXBta6b5pVL9uNjR8JdmUceoXLxfXAYGUtChxHZUVPUhn2NTQrsoEaam5jBS9keGJBhLQAXFbRg2",
  "key44": "2eHoaRefhSAMCH5rhrTb6Tnhe9tsiCchTTNh4iBJDRWMpLBp9BZA6GEXCQpWmNogCMfBSQDm97iMi9c6skZE4tRT",
  "key45": "4RiogYKsxAaRkNUQ78RApYqN8V3FHYBwgThZUBmBCGyZCuC5kTha9ofH5WTrP2oTaFktfjD5NbbvYrEg4MwwWJim",
  "key46": "4X1Fk6Je39H2cWPFYMZrvoDc6b3awmn4eN5uMaoyQXSLshZUgNfVHQTVaG8wkeEEN7tsq45P6TzdU3Hfbjiw51Ho"
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
