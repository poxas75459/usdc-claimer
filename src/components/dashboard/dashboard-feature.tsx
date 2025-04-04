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
    "2xePzGgt2f8BYusE9BYNKmgsZKcCiwxEc7RUrxb3y8DdW9s8fzY5NiTsrFgsrxnnndaztUu24fwaJejdEYMXUeca"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tHipnMwyKkFCMgXfRMDaaVEbduVx48xksZHTw1z64drVvPJZhXXhJSvZbpjuryzuYHswe4HhKVXmAJvvd3J8bJg",
  "key1": "64YzDxxuL2MSjZVbDNCpgdzVFajNCniwABU3gAF8k4XXmofiMgnFqvEFAL8XZSJxmtvitq8kjPooiSbgdbbKxhan",
  "key2": "4rE1hhkatiSwd1KZ2WnwnjP4jaDwcvvmXgGa9dEsyVJG8d7sPsjdnM5HbFdRuXZm1EfSZ6ThKKXKFeAjThnipzqu",
  "key3": "29gXBzEAXQySCzC3VWF5nHtiH5Pn5GZq8KkHRbuCbTpzPmTsTCjNeiqCWYzpHR27MpDc5fkQB1u5T9ryeq2cD6r3",
  "key4": "cxbV9qUy6E99iZogSn7anYyNDFWR6mpXzGNvw58G35dkcPHPTyaZAv4vvnnxzDttS2N2fahA8Zf66HxTyavydVe",
  "key5": "26XVXmx9GtvmuPHu3M1PC98vhsW2T5PobyQ2mkXEEgsK9K1G6tuTkEPJ6XSsk4uUqpMTJLGWrGYf5PZQ5cgChNFM",
  "key6": "5E9r8AGA1r8F2LrSJVB4NTqCaqMwUoGVtvKVj67vKxXG3ceG1xECcbsHPLPvjHFcXEaxahMNFAdSSQR92aJSPby2",
  "key7": "5QhZsEiyJC2CuucVFCXmGDAURvk6zUqSz56A4g5KEHCUoVqQXsWfBq44WasV8MSrBRChVW1nroTYkAV7bT6198SN",
  "key8": "b5xUJoBifz4RySRFnRY1kx9ehVhtKEAxaXsaULqV1MBoSqBuCBaez5DLc24AS4U6fXztny3CU7bgR1LRuGviiPd",
  "key9": "4gr92LjDybffDmB8avb1frcohQnJ4t8xHVfGsxbRbv7YFRP9ivfBVW1amHyYADa2se8GtWqrCWMDdvYhWoskzLFY",
  "key10": "2yTbnaos4YU4kR4isns2H6yncDfuXEcN4jSTFEvHVfcyeMuL3zMNbmF21BfY4A7LxEJapDHaGyiMTdWuNT6nHFsp",
  "key11": "2Yuddx5vjABSFBTzZnJkHica2hnNmMNqnxf6173EY8tTXx3X6Q86Q1WLhnRSEEQRzJL7nejVAhKMzNCEsHHBeS7g",
  "key12": "3d4AtwiC8ESFzR9vEWUSXjWo9BLM1YvxdtJkSnvRjRS1t8BasBi4EA8UBqvtVQA9S7dsXUYPYhfN9qyTaUoMHuhK",
  "key13": "2es2nx13oKqybxrGtom9x4Y5GfR68F4dVnvjH3w49bn6tn1mCwNxMfUyFxCXCiLN88Wn17WHzSFdUxqShFzXvWJA",
  "key14": "dJDjJYH56MSxsuAsFucsuQwCtAQukZ2zEwhk5DaCxLW5JpwQiDYL4D2oiQ5RPyXL4ZbGp9PsSRVGoJN7NZu1Gs2",
  "key15": "63oUPtLgAqqVEqBxnoBiFwhZ1qsixKCMypeEVKtJbPoczXdRT5GkxXVkbgqMpWmx7Mxx98VS2DMfx2qGT8jVYXgr",
  "key16": "3rQjLfTarnKMyeCUcLFrymHPn1d3CZJ3w3PSvHEVeD9L5bNn2KdpXNbZm6pnvNSwk2B7ssENGgsxaJuxTQ2wSXEj",
  "key17": "4G2CkNWrJV7oH48LSgRka5p8KX7jBaiTeVae3rw1mCcUFankwr4Rtx6UoQrS6k97BLr8kEnvr4DYBvqm26kjyya5",
  "key18": "46vG9RFes8nrLBxQFLycwWU3mtUsKnSFjaEgzc8aKAno8yoTaV4juo7evGSiJsBVqnJLo9q9qQD671RaDhqTtDBz",
  "key19": "4pSjiyq1KqWR2FwrG5voVrtqYjDTQbPa8WhkhF6K15GwnnL8H1mtXorLTA5qKrGnTGxFS9m3F4e8oFPbG17r9qVK",
  "key20": "FeSytjcyjeSge5m2Cd72Dn8uSbUcwA9sqWFsHB4MWXp3z6weBApKN1pcd33Hzxsh399AxGp4W1MVQE5qnZwHEWx",
  "key21": "3KAeZwWa4r84ar6w76zK6wDH6ekApaWoHhMUB58FF33PsxjJuaAi3eJ9duMrP97voUjhWQo2XAZjRZS93ZarokPZ",
  "key22": "59E9c31LMiTohzGp4UXFbMcTjYzRwhg5rjRu4rjBUJhvVhxRxcteQQHReapQ4SdL1abf7EwqBxCyEGZU7prB5Rqz",
  "key23": "2g6wzgTb7xKGJKLEKRkcffRfFjAMmS3wGu8dgWrGSrz4uQ5T6gGjRVwTSwbL3SkEHnmiiR9ffu8MHu6UWrfwGAyU",
  "key24": "5b7DPzyGDUXcXWfM1RpwzeKHaMaUMXoCuLZLt3vsbYu7ii6Q9Mhoi3D6jFhumNpuTD4tvf7TdjYY71M22hfZxAPt",
  "key25": "3QvAsmjgRp1Z2vpuq9yv3FJQYjJm8BZfYYWufwH15EAd9a2DdRHiQwqV4v6ZMjbu6e3ZzFM93zKoZoXJ4wnUJs4T",
  "key26": "5Quec4Zj2SamKX9dM64FK1bLms9xLBM3GZmjSMjmaVLmWCF1dPmYe7paPNgFJ5CTy63kXbjQ7pvg3bQ5dwgo4kuo",
  "key27": "5BFXPrdamBp4nnhUW9yiA6PFmANDvS2oMGZbW8XLhydGdJp27zTxvZgrPMY5zXtn7pdPPkBBrh2yhZqJ1qXuxnoE",
  "key28": "4z769kaJf7yWonAt2jK5pQRLdhmKwvMreo8Ew29URQx1KwPBK5sL1CQTVW3cRan8NCrGVjXpKff4QoRBnETnq7tb",
  "key29": "2nSRPHi1fap6supzWHKzJSwZa62MFXQrGiGXF4BuKPR7c2CrCfgzM22nr3MxznNS3nRk1mcxRdZm7a35xAxtzRNT",
  "key30": "2rg6QakoG1Fx5Kj9VPZE3QeA22aQdat9i4XRcoXSZgqL8TBnuKrN8ghgDp2m31HpPtZ4iS8qUTk2nnx9EysiHYY9",
  "key31": "3ZjGUpAsfBMpQvHundQxqmhkU1zY2z4w8MMdMqJGkzt48cQBC5w9tsHJcUjFCzeASidJAuEuoUcWLucaNpLtgdma",
  "key32": "5rWgvX3vxX9gByVJt5Jcj97uZEN9EvC2oB97hvSLpzSNXZDwJHyymec9F3yHB4rAmeycMq4cdYPxcTuh7p4utQMd",
  "key33": "admGHQqGNNMgdjmsWCasCjTFhxSNfRiq6PEu5aqxSJEFePA8JEUttRHBMmYUSV74WH9Z5scpZatWmKmCG99mvLq",
  "key34": "5mPYUAtMGgteZRXwa2oRXkvxFLkuJJij8rKSYwgk9YBTKRpSSgkw1Zz4xC6B7T7EV9UL6SdJYEZWA6FP4Uxm4hZz",
  "key35": "5EGtguBQuuQhSdxZZqRvDWNiS9u5u9aMEWpwGrxBimvaRxQp9yX19PHtWDDCQz6GXjNnbzHMMsQUc9GTpRKNotYa",
  "key36": "53tbxqgx36vdddXx4KrSPdUhDvpV37SNP1tuAct19e9koXD1pTBGFvdwxKBF459ryHzRbWyYbKLL1fkgmW3wJfrs",
  "key37": "QkkxVvWGHWC4U3SAC4GoNsqR5MnBwgTpo27ATxFMC7srpxNbR1fxuAUh7ktNe8jCRw4XvjbURXWpfPk6GzPriMi",
  "key38": "243shxeUHiLtF7VD8CmGSXvrZojc6BDvBuCtTebcf4FBGRat9ksaNZRh2xkc9MYNqfjPm6NJ6mMs3z6WK5RFKd3a",
  "key39": "44P66PAkU9Vyf1Tz7hJA9YXhYMDRwWApq6WyvAKB3KEVoMjAh5xsWpJJyNxq55pHQFhw1DCf8yL5gq471RYbswZq",
  "key40": "47rUT91E1mCGHSwktFgQmWUmQLLcFwZoP3wuFnz7UaQDB3XdmKSzCkU4i4oFPXZ6wu2cSHLwQT1jEMEZKMDWDGkM",
  "key41": "2y8yUf1HcH3URNcVvf2wSjMt5PPynwUwy67t6nyz5ACmwTiHaBRPeXAuR2H42ur2z723mcPUwSJw1TbyL4YqszQb",
  "key42": "3ewQjGNaqgEdaZjpJXfrSHibSet3YZNmauLW6FbLtgg6sjEKE2aiEuaidLY9VfvBeh1ypVaVSvhY5rysnNfw1eVt",
  "key43": "33cBhwuSWnrTULjqZnndYDwZ8kRmD3DLSeSXLWbBSANs27CxPA19TE9BE6Ux58Vud82fjZCxo8iaBkJAqfcGaYSt",
  "key44": "2ad7JFZK6ZMFdtBBsjvT1x9uUSdLA1GBB72ZFmgXS3NPVshafVs91Tij1tLXckJcM14JKbcqAoRK31WrfNZW9jsq",
  "key45": "5pBAsQqtZVcXUdg23QLyR8rodJYW8ghxVttUn6gAkfCBYJmaWirZe7faLgnx8y9PuzRxSipxM4BfdMn8mLGYqecZ",
  "key46": "4pxiwuAgqgCXiDhF6nHnQvDifVK6PtoAoZSJmun6nnNVzgeXtFo5g7vTnuEmGU4G1h1u1XeuqCEW92RVhjFRxR8F",
  "key47": "4wQNPRGcuzgbQNXgYYtxgzXbSRMF2jBdE3PLLGUX5siBe7TnWVHV92uVkTZWo1KKMDvTkJh7aVEtV3DUS5wBKUxa",
  "key48": "5ky8sGQwy81Qh1J7utSfghA9BJs4Ti1uH8n8cfJs3DMqR6vZGUQhBBLwodntcmfjSRwU8T42UoAhoEhoGNuZAfgg",
  "key49": "4FUosZfPGU3DJ5jcDnLJvhnBn1ueLvPUpjo7vx9RvqWToVypJ8nqdDHN4yZXZX5kNeY5McUK9BptfoDBa5JGXAtx"
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
