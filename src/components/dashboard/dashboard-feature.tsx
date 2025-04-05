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
    "gzCns4jXn7wdZTTij3S9W6SESaXnD8BTYNJocKVRueT412sdbrxhNLhSStqrFmZQAdjZ1qXaYn7wA8R5SpDRbsV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "arrs7EVDfNZQv8doeMT6oMxAhxpY8y6Ae8mhyG9amSGqJqDxRA5zkZkj6uF8bda12p1RTBMzztbmVn3FBCsBxYw",
  "key1": "PTq2QcZxmLAxLN3u9G4MNojcHRGMtPYmve8nP9gSZ6J5kGkSMHmz1PRuJzLDZXk5NeWXE2gGhxX9HHCNsxby1KK",
  "key2": "2KfDAiGooMbtFNwK6PSDdVcczjf6kSMjpLm2jhary2fnv72GfMDBef7vreXHnydqs8ESwadPkhzgeZPwfYHFoQU3",
  "key3": "5GaTyKnsChMPT5fXHgpEjf4EPQRxMngiJvY8EDuSyARRNVVHpTrsBJyVLwCJJv2X63fbryqEUEKt4Mn5sLXP1jGw",
  "key4": "5KR4HyRVqbzSb8svuY5XkSdvZeYQnbPNZv8Cabxwdp6PkkX2nsmHNqeyR3aLLGTuqMu63reH7vZ9uDPvWxmEFHzL",
  "key5": "3PZXyV35vDKe8DkK9T78MdVYoB9549v25BxFnnp8pek1xNjszE5ELBZPSuNatrYTZ6knXTCDjCVTD66jqPFNtXJu",
  "key6": "4iTmXAKDrCfVauXkLYV2BCcLH81fWSqPzydc8sUBuF4LSionkPZFSH79hSj6kmDfvu6veN2ZcVqommsTeawxzPzP",
  "key7": "9cSbiuzeFS9j8kZGGqErtJNTBvTK5Vay3QJfA2FS86WXXmsih2uSxjpygqbPojhnjaaWGDKbo5CsFkdfKYa9gt5",
  "key8": "7jofCRKm5FrnVpbfH1K8KvmiSePQ8hg1bj7kd3tnWdMw8kcF6G3QjbG8nriZcpV2YpyfEtG9BWqdA8USrnxy5fp",
  "key9": "3p6kD27tNDuGaJrbdxtDngSoBJrWwZP8cp5dhtuz65oC5gvhv95tdJWudvjMTNmhPRF1pLhkw1N8sUiGkY2aap3k",
  "key10": "3Do7hWEysKfhcnn4htMgHCouWomk7MHwLrhRvuSfAfF7ZRw6u81iTpaXPsma7kDYN9EFgNAjSNXq4WRdUuxB3u2t",
  "key11": "3DzWgbqQjxbkThuHbD4xqz815vUygzVQbQt97JaMc9yDh8U6rrWMJ2DH6yQw8nCupmQZzG1MmeFssHV2WAWzTcVa",
  "key12": "5jr8M9FUwVGG7bmK7UtrNadnWPPdxpCzF5ZPSLramExJ8c34SCxXN14QfYh7C5izyMoZGPWiUfocxPAqfCFRBrbM",
  "key13": "4tuQgJQ2RPxuPXn19M46MhFtkoYrPCvySVRVV2gfoAP9jGxuYoDLK4CQAKGUAuPU5Gz2jXbTKoEAEosxRGNvKtex",
  "key14": "3nuzvxTLvgudHLf8YiqTX91BQeQH9wweashQ4nRghUAmEYFJpa5J4oVszGekBd7A6tWdqtMWNNjRnnEHHykDGef2",
  "key15": "nzCLRJPxtz9XiAxnwAW7bP176JuoUSL9Wk6R4Ra1cG35JschbzDpNk1WEtmQXZdfAsZpJLtYgNUcVyiZetGp5zG",
  "key16": "iCMLsdzq6rEMdv6Vb67zdfMj1bZQ5PcWPpByRsjWZoU7hb9NUFvhi9PvVxfRCCGde1VXQbUy5zVuSCtq3XDAAHe",
  "key17": "52XRDHoRVQrC9FocWbRmXXUTZqj8JBWUiMaA1CWQ4PoPAKryMfh3zZXWncm8cR9Ck7uSt4NiZrbM7uGEhdLNUcs1",
  "key18": "22nChVShyYeuUQAjkmSMKMU8AVATaK8i3HqxMx2cUVU9LyJh5nZHbwRHwacEAQRr5D8RP7NBhFXYDRnoaabyTfth",
  "key19": "46EdwQx5Mnm4fhsZP7b2ZzmndWc4gEF9CwP4cBD7UjAatK5oLxNLjFfzVbF7XTKzCNLVHfY6efRbmVHwtALNm5SK",
  "key20": "4wMZEXRVsbExFid3hrPyfhm2Hd46Sc1uirRD8p5zTdfTv91AXUYuRsdpd5z8vMvbHx9gvPYc3Bp8kTXBudhzXoKx",
  "key21": "4XjuMKKoqsGHwpF2o3uo8nVnDgxWLKe9MaPByvh6oCGDEgfA2w6D9FYGGoyAT16fyiY48Bap3iYEfDGNRyn7hYeh",
  "key22": "4PwL4AvxspGDk7KCHZnxTkLfg59TXSxMux5pUMneZcxzk1KjstA11MiKg3aTcK9ZTRV4nzVfPQ7fiZqU6P8hj13j",
  "key23": "6jyqqq2y9AvGLTxWMm5SrFofP8rZyAg9qZu1eZJT6f3RpxvfzNis6HXx63SaAUKs7rEweDaJKDPWy7arwWt7PpT",
  "key24": "3PM8fMJvvFGWa93STjYvoDoXjELh19BZddS9dpAxJsDYdS9dj186JeSLvVEKXVAVo31TTVegeYcgXT6Yn5JhcRoE",
  "key25": "ZBdzEY1nnURjqgwgktmuT4SATJwccEiktUhQoiabvAJxA3hcebFUdXxAr8qmmRicpcdNmuNobywxChs5eL3Ve7a",
  "key26": "2XqpUo8wvvsaH5ktRU9ECpkkvUyH5twMbVUawiHPArgG7Q5C152FDP9LwzaqXViJFwYg5BMKHiPo3RWGd9eWWU5k",
  "key27": "3gzurUaeoXkcrsaVsJFPT1HiG1f5Gcp3WrWgAVrp2bEUfh2iRCqXYXoK3h56GQBkNUHhHpEu4DVmub23qo2Vx6at",
  "key28": "4yknMQ6tDqmKJj8gSPy7BQvc9HsoDfs2uUFE2ej7zMFnShD25RKuSjG9Du4andvmp8rFhfffeHkXYNcKvctkS1vo",
  "key29": "3HCyLGAuaM2NRsMHCYPR5Usuod2etR6QGgLR9F5qkKmhd4foG6DMcVvMvtJLtXjrrNXgRwyEXdo8Co3tmwKyvSn4",
  "key30": "42wBMgRDKMqqqDn2eHMF7YfrWwWDrYsTK64Tdpnj1XzZNWdZH4BjeVu9hTqFEeVwjdwVxpxUVvjTq3LHrMoH8PYZ",
  "key31": "4xVzjPyhPrKs9tj8dVY56qHwy4px4fGLR6Myx7KTkvcYuY3WnnCpxzw1VM6YXVHYMMQ4fJ3BBSYUUfY5sNREFQJB",
  "key32": "4dLrwdnNF1DVZS6aL8v1hjg6hSQkmQoYDkyYf6DC4t6pt7tzjTMEdAZH55JT4annx5V7AjZNjXtJvXWGNpbHDKuZ",
  "key33": "41wFweFDEDz7wAmQR25pBWbcca3ggxBwwdanEjWShRBZ3ecey2LW3GBDwTtLRzMLzVs3Y12p3Ac6SQ3CLJ4vBn4X",
  "key34": "4KtvHDaUns4etYnoH74AJa8Pd8XgDVhSfqCgK9XgBP6X13rmgUpbQgWpsXknaTCE8jP6nXAL2dHzR5JDDeto5V33",
  "key35": "3YgFfnbeL6VUMtdnFHb3mmqAp68KXEs3eEdHa8LoCgqFEHF4SfXLeKGgkD4PByiNNTo8jmfHqTBxGbjEun2yh77f",
  "key36": "7rXDFZeKsNDPwZAXH1whS37tgQAbQvZZDSL6YrvV3gRUwf2PWMone72fM25pH3QYjtEyb6YNKqgAVjiEYHWqQnS",
  "key37": "L2QZuy9VV6EZy42CxJrWwLes68gUMGmXEYwfViNBHD8PPT2DgJWNPN4gbF1HQv8WnEUdwsA6gwN5GQQfAvv7L9X",
  "key38": "KSbPnJN6vb9nUkMyKFe4rLSmzeG83ZWG6k78VghLDGrBPUhUtFsajouDB2RMQAG79rg4F8DTKHiMdUmUMFPoVJh",
  "key39": "FdvG7gUg4asMJYp83eJ6Z6YFAXMgpZsoz2HkLFNpb1HooivVQDXRPaXx7qSVWsSdZYYzPmpweRc59vrzZZmN5b5",
  "key40": "2v6zi4tnYqyL4XrFV4CnYih1SrXYJcJ3BusLJYTSJBgayxjDhkypmypHLQE2bosgVctiwkTAxnhbFRJRtjQUfZiZ",
  "key41": "4S9hE5dgEtyt9Ur4GBCaEsRHqhovoWuZp9ti2pFCdSdsrFdc1pbBhScgxMxgz9kqHxZJRepHChxT8zV3rvKGKNLS",
  "key42": "2j2KEFhm7sN7ZTu4Mzv1VZZXtqb4qw5vSrjzCntH7NfSnn8YRTksWVgXzxM8WtjyfzDu6cJXrybV2K8WdriQKjEq"
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
