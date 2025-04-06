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
    "62xp765iZ3bjrgyPnjWXnMfnZgZxkvLGosn6h1cV7drhe7K1CQ2HGHghy9K78eBhg2JgZ9h8ZnSV7LtMsYz1PCrJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TeAJRSQdhvFNLsQ4oCDifznTw25ZURRqA2p2Mwogb61EQRWWeaFrxX7SsMCiEhn2tiEnVrkvL4LsfkWUmoR3hU3",
  "key1": "56kVUxbPWXaSFXV4JCxg2kbwxBJjPCfURYMhEgxadEXPhSgfkz7337Rshkd8hsCy7cF8WMcLg1FVriRdgukm2qqN",
  "key2": "24V52DEmuFD5C1YoVjRp17xzC3oZua19ovZQe4z3SPRpxBMVFFXJNz8F8U9twdLzsRfz1PToVtafH5ZkgP1ZcTUw",
  "key3": "43hc6Ycyncyepp8QydCEqubYyviQb21uFhehkDCShokVbGxznZJW8o9QMjpus732t2XtRzZpt74EY1xxLGQd5ueK",
  "key4": "3RWkw67Ack7eyULe1NkG27ZWKAh8XfwtQsfRBV577VY8aZoJKhTZb65e1Mva7FZcwU6bKhfwA4cChMRfqrJLhGPy",
  "key5": "4d4eGkCsWzY8F5dLVk3nSWR7CVbeSubo8Ck5UpwYgrzYLfPAF65R4oDQrzKQ3STQXk2bVhxM5DzQxQeAcKjzyV1Y",
  "key6": "4VXkgBMQvJ2RyxiwAeLV33KSQWYdX35tZwy1UHaswE1FdP1Hd3NeWV19Rd7GNTSw4E4nQFvnpRoqHYhJx32QqxA5",
  "key7": "4tEbcsbiJEPKARtCzXKLR2f1u3BHqWYoBpzhsjrBBCVf71rPDsyCdFZySzvjicwPdB8QrSJwcjCtS9vEz1mrSooE",
  "key8": "5hL9BXK4BAUFBy9nzfNJASNpTSVhPYqFFiqSjBBfXMe8nqtfr6rNkqdWsUAvt1UmnkKMYkHhuB1p4rvdso1bVmQj",
  "key9": "3hXRqC6puf1fNKwcBXkphEo5y6Byg76g2nqwjZWt4UN6xgi1LgnNva9XzCvRAmS34zk8fRA6ozYPR6LUqDwivXZY",
  "key10": "uSKUtzSQPZoRxoW9wYT4MnJp6kUzkXkJzcf1P6RpKTWZ23jd3dN2ktQtQXNpPQs2KhYdt78esVs5dzHhc4mrgri",
  "key11": "5JM2Hzh8HcLSY69N722WyEnd7bjiCGeRzJmndgF8gafFUrSJcGdforLZ3AVkMqDNfHmvWQTaR8jwy1uRWKs1MNYb",
  "key12": "5DHMSHQ5q8QLqRMWSeNuBPdqiwNxsMJvNYDcwYKz4MjXBkbDPznVnLJFeCMhVco7ogUa3yPXDJi9TTHiBQ3i4axn",
  "key13": "2wY9bzRLwaCXCHyfwqx56seKXFkR1n274en8wRjhDrV1Ks7QtW76G6PgpKs5ayiCCLdFiA7yZ2HsKUyKwWv1QD2B",
  "key14": "jKpbdo8gtQzwJKDMSV1dpn4LwFYyK3gbwPPBq8jp8fCaNGhx26ySJ1rXvBuLLHx9XketDRPfVwNoBNXgdRw6uKg",
  "key15": "2CeTZMPJ6W5wX8Jgn7cfxmPS8Ub7Rd6AQxrt2XgCNGJCRN6rfyeJXY8T92YCQJYqTTCee6B9DZRr1Edw6DtcKqZo",
  "key16": "3kEX4ojSEjAPsX9h314a4xTErXoWYwJpS8wHCfxNhNHqLEB3aaa4AEm9hNMWuUivA5Udody8PMnBtCAsBrTv5ywL",
  "key17": "3BKPRvWb3CkD5TQwofKu3Pq2k3JuHmaWSWHQwSUzahdpLbx5QpdQBTKzkRjUqzRn78txoc9tBcdEUzjJrdSPZrjq",
  "key18": "5XHYKN3y2ZFAVynrEqNksMT7mDCX29FWV9c71W5YbBXVmHKG2xicAfzB69XedGFEM29Hx1N3yaDhzxeZidUXpWHd",
  "key19": "2JcbaBPEkSBHgKtsKueLcp82tiGzUaUbaFtFeBH1P8iGAxhi4KZ5BeB8ZjXNttgaxyqaeRzjwjSDykLCXR6GWbvw",
  "key20": "4Dj3D8m7K9JZBg9bPxGkua9Ha8xK42zWnRh1diMGGurk6DhmtJS8bcKhXhYhj7ApWCG5r16XHgb4xLLmb4A9PaBE",
  "key21": "51kztnTowszA8tHWWskDsNwGkpHeb2rettEAUPeGZeFyRGFijszpfCH1KGgzCDKgUW23VXqMZqEUfvkgDXwJ57n4",
  "key22": "269qwvqrFS1RRC85X83bSQsFb8PRQn3yFgGL7bYkZwMR32ibVZYhkuXSjGGhx9PXNqRGaKYQg6tJ4ed81Uu7K5d1",
  "key23": "2T7mhQRBc1UvkgD7Nhts5ZtyUREg4iyamF93CGnhjiBpbmkwKSeCaUDCXRx4BeLP2YY8YYnqe99nvKnosxatvWma",
  "key24": "5CFqtaTyYJjfKBHVAjjQ1rT9VxYX31ugdi2KRgpnsJ9yQ4JuGg9Aafd4xqpjyUQV9W8f6K2q8h8bGpVfiM74wNeP",
  "key25": "4H63ZfGnev8ZFy34mzqGHMDepSsQd9eMsgF8FTTuneTKu1S46aJ3swSt4fw5p9nUCwAy3GftouFDebszyp9DGC9T",
  "key26": "2qzk1SK7WJVTbzg429VxivaLMdLfkXbvZeC3gMNrJnki7g1Y5PToKym2LCVK67QEwXV3H4n48GrDGAa4SAV8Kac",
  "key27": "4yDbseqR43gyRGD2iJScqJj9boy7gGxgsdQ7NaB1bpUPGhgiF3abaWAHocamD8QjuoYCZiVCufJyFydk2o87Bqke",
  "key28": "59akkRsBLZMHQooWtvnvSzthkpN3BrjpbdKFrGNtQgQgNtR6hUHPxZEVoTn14KaTBkW5UckwWbBwc1Mgwi5HgXfS",
  "key29": "5VfjRqAZzzWu2MS1ukZAiezqLQb31WGfiDEky43r1iQZM8YpNi3yqYizzapoTV7YCaACB64LiXSc25pSSpgyKgg8",
  "key30": "cGFw5gSqx1XQKHDGH9CrUY3V3Lw7F12Jv7DRYG22v4ZD4rqwJEXKsKrX8FiQ3RAJ6oiNHtToNvSFFXncoDLVv69",
  "key31": "4nA6PmZPM2UsyCPA44nUpDqy2XzAsDMeoyFUsTQt9YPoZRJgXToaoDj6MNamxz8Eg1kxLgTU4BxnFVM3zPVaKX8F",
  "key32": "3bdNJMgUU6M3BvL7MugaBhGm84SkQ5rj9tBfcsaSsNfgWFUrbZ8ZoLZLSDf8PmJT7sHy8twUogG8K3RYZ5q4o6aZ",
  "key33": "5ydPcQsJT7FF1qdqsKc3UFRZzhtwH4btPzwFvC7tZuD884ujRW1Ht3TnvKC6r8pEshNBjqWaXrhvmANR2a3k1JYy",
  "key34": "3ZAgyYevvacEc8wAbWokKMnqrhLQmmrWrF1XXuTeNDjNTDi8zNtdh2fNQZ12r8AesRTf7qdJZTd4vYj1Ypha12Za",
  "key35": "57dtwgk1gNr7uvTgv6QqjwUavttsHMLaLT7QnQsBWbqwqrcd2cvb7Fy6QtP6rfYtRNBgfhoXCUzp2Cxkrvj6m4JS",
  "key36": "5jymUS6KQiCM4rhd3yH93wPtjbBoT2WtTBeB98vB2S8eFww5VFEHC3PbtahdM93Ejkr86KHyhm5XKS2NC7VvSkMf",
  "key37": "qdiPk9FiyNkDjmPFE1aF9T8DV6wNbatqTg9s4ei4hDGMHx5u1bDGEUqHw3Whr93CffKADwEXWZp51DNKR1dq5Zb",
  "key38": "641cE6ga1NMCkWmkSMps979YabUJFjXxHatcsVriLjQKw29NeFJUEKZpLncEuGAMMrvdQmZQK4wzzrYH4us5t2gB"
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
