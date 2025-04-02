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
    "3gzKjiprVLwtJen91rfa2SWcKVDwghFfCK26XkXRtc5Diwi3k7dArroy1AnKr5LBD9eQHGkaSPjSdhgWWLYokaEA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vJumTPzDQDt25WBjWegCiNFSZ316BxTmtmLgSWGsMZEAZmHFsMGGSeFqSmigywVYuawcdkbrsh4n36nSAKw9sUg",
  "key1": "y5hWL9DqFmAMZXoZJjVZ9HXYC2upY3GeS2Bi7JZxFnRKh5oXxKqc51bACcgkjwRJSbrBYqnawQaJw6VgnGiadjt",
  "key2": "xZJrfGgNRJsNUjFsuxbQzHeatHFiZQpyt3R3cDD9etoqmL1qAfU4x1B78YDwxoiCE8jkVoWnpZvJ1qJ83fDcT5t",
  "key3": "38Sno9nAKMJUZNBnQbzas4EaSHvH2zvwTQ8biDBaP6AMEQ8T7ur226at1EjJicYFpoVKCmCr2pQiTCDNtTPWeiZF",
  "key4": "SpJGPciXFrTFKKJ86wiDc2e2kmzoeHyAceNiG1KVzLf9u8dKZ7QLo9nyUF5b3kwqXD1xYsnWHzqxXunyGeFhkgo",
  "key5": "4fLBC6bR2bJBBkpy27txYcTzoMkVmYgGLe2iMiE6mM87og2FWNSiAoKbpTobSrAP5UGQagu6uYdRb32o4iGcQ4Zg",
  "key6": "5xHSGcL669Ryy4BekpbtoUhNYJZ4KzjSmH9MZAzLipdLLhtbGSPnP45gvenV99b6scMHXzMwLf5xhV5wyWp3jFdX",
  "key7": "3fYdNUK2B7yCMo8BfXvBNjsou3tKUCVs99pgTN9ugBPooTZeoH4iZdwGBaV2eRBpskCiP397XTEih9SCBqq6Q3cy",
  "key8": "4yF4tvZ7vFNpJDhanHFuhHXbwsQFnVK6VtUG2ZG9GULFV1FyHN57MjmPaUEU5nTHbSZZEyho6YzRQ6KH7s1q8ZTc",
  "key9": "2BDVWzUtLyYb6AH76g56fv2wh65bwPvng3Vx4n98cUvjQbvrn9s9nMCaKnqFLCqcrcHJSL1U6ZzfsCxVmZy1gCTf",
  "key10": "5Hb9hHxJ73275yAZwL5QJcsKVurFqWbKobimY2xEEqaKKmQkYYAfcTMsbjDiPKPsCmvQidFMp1anAhmAg2TtWCce",
  "key11": "2zhXnjR5exy2ibNFJrm58dedFXdKnbzm8kiN8yJceRxUNsV61chAx8KqJyCwNLDJvWrC7N7Vqr3CboHX9Q377JsN",
  "key12": "2mTwwNd7nmTnCTQtkQ5ifdRYkv8qH9hRUKhA9KhxE6zdLe8bVEnKd56t8isVCrmKesbqJbcB6Cct8W2HNZ2d2j55",
  "key13": "3wBav16viNV2Ni9DPVcSJPKuhgxyJPtPeeLhJMS4B4V7EghtRP44HAAPjXQie1KyVm7AnGqzRa4G9GaVzoYBztnN",
  "key14": "5UyrjkLvexpwZWryNcN3eQm9DKCQez9vp27D26oFykd2WFPGZfAutvReoXo42CVwB7UwgYWJPqVzq9FQrxhDJq6U",
  "key15": "3NZDChbfnYf13t3E149MSCsjELeouR8c3GFpgJrBX6K8mkXYXndaWMzvNCLPgJh3WSpzGJuPq27J8tNe1uPqvpfq",
  "key16": "WEnv7sPYsNxv4zpfmVLTW5c6LYJoRANteLPsYYtnM5yLKZfM3rZ9Gr1hAs2zBY1imtpVn7dVjBa1tP8sWJJrJ42",
  "key17": "47R93Ccwa7NQXKR6TnmUpnuLTkUZNEoZiGHnQKU1zvfkv4VuoBpTmhps1cDocmsjo4VnxWYpCahiDaVoRhJjx8g4",
  "key18": "5VwqjMMdWoudEVx2RE5rpsWj5QRW7sHRu9uJQ8PzqXgFGygqdBrTFQKF2dkxPkWsHe5Fo1k6YByC25AFfsFmhUs9",
  "key19": "4nRWRpndbRMyapmNBQdD7k8BvREkKSFH4V9krviZ4YioGq8zt5pHsLRqRmwS9hEJBfZRG8JSciyg3w61zgtioG8T",
  "key20": "2TishJH4xFeWzPX5qEngfZui44W7FZBwcHyeCAJcaxC13voNQ4aPW1gXXavGfP6xD4UE8wM7imet7ffefKq25xCv",
  "key21": "jnuBy4TmiSvi9U5dT428yJyqtLS8PF3VA4BMR4Tcm9BZGvebr6yx9xxkPiTuXsPNYNjjeGMTcKNDseyZXymRpvd",
  "key22": "2smhVafmfLhf1zPXywHz43ECVrwPynKjNarRJsMm9MYpCEhuurUpK9ka8X32oRbaTigdUwygsv5cBr9bGgC43As1",
  "key23": "5L3BHmp2NgEXBpKjNZm7MV2UH7RW3MKLstaw3PSzZ9hJbcN15qwCihAp5UVef6L6ahzWMakLmBnzyGMnfQK9ynCN",
  "key24": "3HqHgfUVnoXcyFG93rGDx7jfdmH7S2W1oMn89JukCbGrsxjrWU9ikAcwrrWCxTCrsrYezvsbncHXz1BF6YuanrYE",
  "key25": "3gvSNXEBRfucytdnMnzGH2Hyb2Li4kNq8XH7595nErVTNZQ6YCnZBdyNUKhke7q3YEvTfZ8J6X6SAkB5AdnLuNAq",
  "key26": "52c8wf37hetQPpdziqhV1Q7z3oAJfUuGsJD1PwSgFgeY815Qr7nURpUxNhPVyKc3GTo5rmqM6Ln8sAUUX9qcpCct",
  "key27": "a684hVoLxn1vh6QeNV3qDitfSLBS7N4hnAWp9mnrpyKrfBmuztipyn1HGPLhUm6C8Zz8AzkJ3a7i5pPhjSu91CK",
  "key28": "5i4qdKn3pmpBT5etBgWdp1PLXdnVZBoKafy6BwjiEuUzuAQUmmomGf2K1mE2KuKpoMRc2jqJukzB1NGC5MKkiu4r",
  "key29": "3W85mLk7fss7YbLTByfygpi8JrfVBaTEdmJRFHKeySsrf3xeJtL14yDDABcmZDN94hJvWinUMefrk1eJb3mUqjPG",
  "key30": "3zt4nFxoUW5KUcdxKvzAwBY6cKHsfH4AxKtJvAXe7JuYifVLF88NXs2qVepgBSzKmFoGXgXuVmwzZqRkn5cG2jgq",
  "key31": "sacwrWqPB1bYiRcbJtRTJJp9LU6E2p9C4PXXi57tzT4VcgT66WX2zR9TEF7NrvMZP7WywEhJPCqoovguDMEZc1F",
  "key32": "GLBHhEsiQR7uxuP6efu9eTKWKG19v4kZxpzpgUfr4ywLcHRtZ5VsTpUZn5cqygQax1ABXWr6SqHCdbXhpQzgRoD",
  "key33": "2bCFijGHBQczG2tLweyU7fSRhAvdhurJS24EYHvv3AMFSXbqo8gR4ZjYNDJtnankGuU6c3bToHscurG2QwwpYFJD",
  "key34": "WLs7QSYeWKxz9ha2764rmrzeDSJ6sRT7x1xQJiixpM6Z4My5yW6oLQU3Au3wsD8ncsaXkcQbUR68KWuFSD5r5W2",
  "key35": "GjbBX1Mv3u5AjSE7F2QBGjfbc58rCngczNetFiGSzkPFJQSmXW4VjtCdJdFkLUKxLjkp8jKgFqjLza3PA6rgqFf",
  "key36": "4zeV3p2PB2Vb9YZRGenoktpbaCYcMM6QYHnwYnkKuWkZS5w2zFtqHsJXJFM8mfnaEP9DPcY7PFTodcY38FWAJRMA",
  "key37": "5Y7uZpyM1KgEyJ1isBEw3vyBvKcgcKVLeQhLUuLd42eww8uDiaC5g42naqSCj7J8TwYmvJXkcLHUEzmohnsQWaTr",
  "key38": "4bUx7sww1J42qY2vpywg7mreVU3xm4n2UXse25ZFttKc72s4WiKyxdLoytssNQzHejAzdy2bp1zqSeUhwu21N2o2"
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
