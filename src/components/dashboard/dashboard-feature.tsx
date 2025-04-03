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
    "kKhCNGKWpMSC6HNeNhj5WrEdoNiu5vHFi9cTuNsBePZh3s66cDpjArBjDPifhUytXhiQRCjimqAf5Z7fv4yHW9y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PJqazJwET2rzbtWeuyV4kMijn3X3EFofPDVc9pHaPkaxzK89pnRF8gnXYmF36Yx2jG7DmboXW62ns9yw11BR32b",
  "key1": "2kpYMLTrgThTCgzDvmWwZ3L6hL9d47tDBpeWZVvY1pec7oweCjn4W37MRWvTGZrsMhL3Kf3tNwwmJnHvWRQVm3if",
  "key2": "35QAgfodhXAkynUfsvb69ZTrYVAqfKb6k4aFTx2PnDnZuucUcnHggYM2khezQ3bjzkSLJTAtRmkEKUyAcEhdozUj",
  "key3": "3KEJYxVx72u2jcG4fi9n3bScq6FMUesTCv7xJ9ktunigZASbZLLQjZSQpNA5VwGVqyPNK5XCrs5A7LTedzLumZLP",
  "key4": "4cD46Ro4UjZNyqoxdKKXUqvGLpF82YuTpToprCmPdmov3XhYeKYLE91fcAoPBzRVECvfVwHNNdNuLNVZVAeH7ku7",
  "key5": "5Lwqi1onoiM8STwYG9brEjWgCo5MkhxMYJkPpxSZJjoghnFCPovNyY6oZUVK2Tb8AVN2DhsxFMxYhJWfDjMGJ2dv",
  "key6": "3AyKNEHPTEBSxkit4wEAGmvCCUhMf1kxzJB3Nu7iThadK4FSpVUCrCmJHDexKMhEzjXZtLr3wET63hBMhHMEYt6p",
  "key7": "5CDTF7vZNsmYJSmYK2e4Y5w4rAp7pxGbBhjsajMwxKccgPfE481aYNP962kjzzC7XgCAF8gKefH45pd4VyBXUyWH",
  "key8": "2d6uhzWjKKogaA5iYZtNqgztyEbnaarrdmukuK2A7i8uzyefMwYt5Rtjx5jEjdyyUqvhVyYKAsrJrNinEGEteVL8",
  "key9": "2HBUkV3TEqZENPmDosdSp4oRvVaGbRzJsXUpG8eeA8uHgPnchpfi8LWfRwKJvvECGbpymi782frkCczsXbGHpNMz",
  "key10": "4yajuDdwopFpm7LH3BrrrhFXg2Vocfn7fqJRXV8f2FAn8Q2FvcDMCeJaZsNYJe38wPGQrNWzLBvbSW3PECWD48kM",
  "key11": "2FeRHjdyafvbMTmeWequdQoTmuLZgeB35o67AFMYrpxGPfQRDTgpGjXCZAnqtT4F6Si5r3pDKeSFB6oHQ17TqD9J",
  "key12": "3EzHCV4rA4etXmAox9f4zAWWXcLxdSoe6DfL3TuTHmNBT8eA2q3e4gn4ZYVb3f1rPVNETFfTzenRrZxXUtdsCJq",
  "key13": "2fj7r7tc7ekRXyB56omDU7HxmaoYCjMtJ2pcUmkg8zGG4rtPLDMtrQtYU2Six8KgskG9HpDYGN2iNLmhiqp1kQmf",
  "key14": "4HPE6o25Gkt3WBZGHCEY1LXXepmBXKBwnawjwXCdzf9B9yJPV6peQo6fy5QxYzCQeRRdohx1Nq3cRrnrpEcAZxct",
  "key15": "4KCLGQJt89kxuyQfdwx66xzbPM7EX1xEbrdjDEz1nTQHCyj18xTNpewS1NshtZeH2u5c2vxsNZp5QvTrS42DBZMb",
  "key16": "DjFSwfr7oau6vs2wHer3tvoBYHmCHNwSUBxF11EWkJoLsmmrouS7skW4hJuPdZ3LN8JABgLiqDbcZuxAWH4mFnY",
  "key17": "4ukVBWMx9eLnUKvEyoDC2GqbiEAkWG8WzjEuoAktPPmVLuKRenx3TxBdHwoEdn6Q1mxHC31CycdsBFPBoThvJE36",
  "key18": "XMZVe4DBk1sZkyHfKoGn4hxjneLjh43MJQWsMZdTbwbSQnzarYW3Fi8tUcawBH5XDYPHx79q4qfBBH4jqKaY7Ma",
  "key19": "2jMgFb7QmqfohdyfFjxLosak5jFFurM9RddUwt9Bdip5u1Qha1m3yN4CyDw7fhe1K4ijBQudWEnwjdYwSYMXrrfD",
  "key20": "65d39kheai4vCHDasVuWg7GWrK578M6JcjcCsPoSjwPo9TGrK9HsEnqUjSJQRNoEBVGbEpX5yTS6ErwBj7esbDMP",
  "key21": "M1uYVXegto47TiUnxoZqYhr1bh5WL6buYcd5MgtrdVuJZ5qSkvhwuZHhS19vf68UWrX161L37hedBnRm4MnwiU7",
  "key22": "2V9ZPgHQdJu55w5CG7D6jurUeXCXdA87VDr97XDHzXPCAwfzdQVyeEEt1rtVhUhcYqGxbryXWT23UiCMC91hWxNb",
  "key23": "4u5qyWj8exnSZK9zC1dQedctMNZiL7SWiVBWwwACBXBsBc5hFyunoam7BHPrDH9E9TJw35FjyjNByuiya4mZ3wRq",
  "key24": "4ysB7zMSVTLQVTqZdEkoyZZ6HA8X1aKNCZAGU5BDNw2yAFTEpMKzLzq3tqzjPZh8bq5mJ7moBPs8M82LF9HGHLnm",
  "key25": "VEW8qrboonqNDoxjMha5Kvz7H9kgNuY5fa6Th5svSaG1hdpTFHLRABzpcgwNUmPFU3yW8342Czr6dyHgrLFx5cR",
  "key26": "2hfRErvScdN9T6EGCrsrNB4UDoY6JYDTpTP67McXuHDYDq7GMrfX37RthJ88uuVquXazVwnzu3s9o7WCuPv3CibV",
  "key27": "ToMX23XKfGRjDn45UoY3nurmKb3pBPXNPJYDMG35cattBRGY5gY817irBZvztdcUdvKQS8weFmkPRuoRAeaLdGb",
  "key28": "qLV9kn2PZxfx9gjQdJQJVyZGKXR8ZQNB4NVdb9e2c8uJWWzmd1Tgt9csNFZFbhmHYsbJUk3DJjhuwJ1v2dryR9A",
  "key29": "5sqceuP6SxvNXKdAzJSv8sgubUuKqiXcdqGkZ15n8PW6q3CCJno5ogcj9ik25h1NxKVVDG8CgaTusGXdDuJaW75U",
  "key30": "5WyUa7hY4KWmpeCdkLNTfjHKAkmjbFLrNRtZC7SNJWHCxnCjANAiz1jPxdmXL5aGrJeZ8p448FPcF3J164eGqEro",
  "key31": "2cbaP1z4DBivJoU2zsKNUsGVTnmMPk6htvUWpdgKpR9dXqvFpXdmR9xud8QtYStQ8wEgBcoBY1RHT47NM5QVUBsV",
  "key32": "TDWco2cSAKkvo3e1k1jwbH1EvKASppkrwQYc4qYaRacwmweZu5Srr7RgBGBckVnuEysVPozWRrXCRp8f73gmb3K",
  "key33": "2y7KkBCjwvJuUFoKushMgX1xk8voNbqZLNmeKrWUXQXTcc9CxoNUaAnSYWdC7QwUDxzENC8Z79RGwqzzNCgc1Sui",
  "key34": "49sWsU9S5ZT4gMspAG3MeLzpv5hL43PsGGXoA5fVYpHSJz4o9N35AeaNxtr2U919RHrRP9KnTjrr7gtsfYP47fvs",
  "key35": "5QLZUhnU8TL3aiqPxWHRYdMvuDnrGKX5HpQZv8G5LJn4SCUkZNy9RMWeUDypvuDqHHsxrnTnZGuTwaA5naKZjXFe",
  "key36": "3VRJvkrg1Um42ZN6zs5HmM1yiCRzpqYrRucwFmocZ5TCKR6k565FtdoNLYWAoyG2NFFbopkvV3EzZShSX6qbe7Rx",
  "key37": "4f7j1f4LhVSqHCzgGLb52xJiajPWWX3xzwDrPz1HGgJLv8us6SjrVFn8Rxps72iKoMhaat5jRoDm2jVW5FPUWPeP",
  "key38": "3JtzxcsZKCvpbR8LxTpb6kjhEpQYMXAoDLW4PcoDj4dZDoxvFRuLsQ4Jx5wUqG8D2gf4CVrcpPZpVU4HaqZZAEje",
  "key39": "4DCkY2sHZnm8ey5Ksxx3YoE1KwvcY9HXMPc4rbBHkruNbryGWRwbAwoPzMR9V5KtDXZMcUmzPMrejbQqwwY2oijY"
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
