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
    "42wAnKfvAvuyPXAosiPDWNtyJBTw4CNxF7e56CKcgLz3xt4Hvy7wDFC3e8sBHuM8oGB55rmayAfB4aC9xz9gKHa3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62SS1jGDraKaFe49m64PBv1cZfGQZacVcKjo9BdXEiPtKaL4LFaBd5ZMv9uaPr2TEHxV3faqTzS2742kFQYZeZiZ",
  "key1": "2KZeVzEqrgbuHV8RXf39UDaSUUVYrMFaWyCGtzExyFpwuLmdWAvsHUULCxkijz6YKssUyNrFZ5EnXsUCsyAufuwu",
  "key2": "59tBvH7Nd27LMZvRYaK8hY4dFayRrt1BKTjfPvBXeXsSm4t8Wj1zDxgdx21TTEobCEKSvV9GnN13vZnbf5mCNw2Z",
  "key3": "2LjRdHF5csNUtTAahN2d4jTZUgPYvo9VcJnHqkL56MoDrfdC1eCqDfnmqUFVmChFcv1K6f4oQnSTwyZPF5QaxGr2",
  "key4": "5845iMeZ7RrQ5GnvWLTfvTNih5drjxACx3ssGEdjjVbhagUxiGmy3ACQPAcMouygpLjpMti1YSqQ9NMY3UvyMtj5",
  "key5": "2Eb5VGuLd2aCKRMpSJzxvwbhHsEKFe7DHDwH5GhcZnX1BcCQvEsGq3kZaPPoE8Qc9ZsgnHDtEUBiqH3ELDJK5WSG",
  "key6": "3s1MMoSr6yuiZhmwHPDfcuGs2TEcwvGRbbd74viEJ1HRgJc1KAyvVuiYiq8HHDkvVpqG7Z3B8iCJpmmUEb99ni1X",
  "key7": "2BZYptoyKmXk6UkyWkgyomJf5hAgxdsZRPdQ85ZHH7bEmkqqxHDGG522hbNAXhtFNvvfvikscbUEC1NhojY6woSD",
  "key8": "3BJ1pCnHo1QkyVgHckeR1xDNSDxcXrWT5zavodhiTDPccaYXAwJksTfw5DrstWGqdjj8CAgQPcJwcfynHsfcipB1",
  "key9": "4AbFAg5SttxZkyvQe9Znc8vSCC84UDrQgcEVuk5AFgPPrR9tMAUexoGGChWUz8JZzGFhDVuVFTKLkVDLZSZ8pQh1",
  "key10": "2wKJHV4efT27UxpCrpiSH7Mmkh7mcKew6D9kfDDkdQWpxrKb83mFv1NyFWEonDXm77Bzc69nK3Ce7xk1sLCGSQha",
  "key11": "48vaNRAeoX9QczVoKFwvzoNw2yGt2wEnQc6bkshg4e6Ky2EinPyng9kadMLXWcuRmZ3sfRGGVaDqEXSGVf2Ywh7c",
  "key12": "bGi8LaA6A2yiCktSWV2q3NAfnpdiMJzM8P94hf7i2wuXsMUqvWjzSDz329vadSHMzdwGicJtk6mCYJXwQQCM5nA",
  "key13": "2EJje1dTFRwPFtjqUJAAhJH5KNznmcDp3PryHg8YZkVLSmjAoEYQbnnUdBBbuSEVo8cgZTKBWhZxyBo6DK3CkVs6",
  "key14": "2PKz8crH2CM61CrY4SEbFHkrcm7vRBax6cZPqfmjDk9UFUnG56tZSzo2YmuBpNxPCHPUiojpJ7Lho59XzkQbCRYC",
  "key15": "3i5FsyJEypCb2zrNTMvgtMfDLCsT4vUrb4rYSDyknzf7c2fe9eHBsh3VVG1sPgmZ8mmTgHJ3DdEC2Ady7zdQCSoK",
  "key16": "ikZcU1pxBMY8dDyN8w7nTEhJ5rNS48u3Ta2eMZE17qb9oMw6XPx3SJMfKEKgTJAiiuMLXkkaLRgo9DZ3BwmtsxL",
  "key17": "5QhA2RsyjQy2i8wCU5nUNcDZ9tm9SqPD9BjuAMfwHRXEzkDq7Nk1vcZ6KBMup15pURbZQGZLbNJocmomLvXEwacE",
  "key18": "4u7YxSpzKcUN6MANgCpKLpkNLHHfFe3pkjcfwbFYyy4RfbtJ4CoMv9MBDpntWyLCk6STdTUC5sqfmfgZnPvazR9b",
  "key19": "4MmvNiHDbv9MsUaTrJnNfphLb4wYa44Ym2c9TGnmeMGkjuc2DuWwCmr4Ccs8VaXWKcdSAi1vpCC2LBpCwk57N9oB",
  "key20": "3ndV9825G8RnVg81igPBn8zJfo8KTD8XxPRMNTRryAnfiQwQsYBk6117AUfUs1bE9nAhXXtAL8HGXh8ispcaRQ8v",
  "key21": "5SDxLRHBkhYXSESTHVWRX67FYi3LT7vWfCNiw6gpjeKXXWHt1cPCg2gv9LUtj9FVTs2g7mXvwnYMCExhkSbGzhK2",
  "key22": "55cG9BAhgnraAT3ZVkbJoLg3ocr7ZmktBAeUYFiyb2fXwx8vU2qPrfdW3N5ehR8uTpNp7VRXngXXjX9FnmWH8chY",
  "key23": "3o154QnGCPh9pJ7cBx3i67rq2TvyzAK6r5G13W9bGtg1NvKtyyMCAd3Nej6XKR1scVZbHdjnTRZUYPvaxS3F27Sm",
  "key24": "5vx9h9Siu2Qrga81iJacky9xHPThK5nofzskcZfqgAUwwt39KitXJr3pjLD2Ya38zSqGArkjDziBugVy3CibhJgz",
  "key25": "53A1qXfW31oi8o9TPHa6KxWfTvps762Wf3UWs9xsyxz2ttLSTLa4nBqQKkuQ3KfsS36nZMY1V9FnUefktti87Y8m",
  "key26": "5Vb2jU8v7KBaXWq3cmeZ2GiHMiEZakmm15qmoprSsfoqaPA5sQBTEtLQXXDuSKvLkBbr1qs4D1j9y5HKzCitqPLz",
  "key27": "X9F12h9dCWesCEjnJBLv4tceErwfRGMPVKh7m8BEE1ArjF5GCqGgdizomupjXDCKLWEAK1Yz76wuTyc5556b9VM",
  "key28": "5RGyHkS7rmMmS1i53dQYgWxwyPbTFjzZbc7tACYM2rzyefyAiCYAo6CBHYz41XdYDZ71r5GT34U6XPAJyvDYm3HG",
  "key29": "3GWWaKzP4a56wFLcPMKWRdCV12LiLS1r2HQDq6PEECSoD9FiTgkasMR5CBR9XX69WMJYJJcQJWyF31hZcuasVaof",
  "key30": "5zxKSJBFqjb9UKD65rsn76mYiXvynfBQnUgyBAJNZstAXgb8edbn5VzypKdtX7efBU2jovspG1ENJ4Fou2F8xMFK",
  "key31": "5PjsfaHcK4Tb74ZVHpwtUwdtgFjkwmWgnjk37domyNrsLv16fJRCg83x5V4X4HtxZbHsVjxwq23B9apVDtVne6wn",
  "key32": "28oxCXbr3sDTHACMgjKgNskmjFDiRZoRgWg6j2cE5MpJfbFRvJzNLvbisgtfMukyKhjHtWaNEQVT3UPDhz1emvBM",
  "key33": "gVhsqimFDXDVoEPthRn9muWeKr6Bj95dRqHxqwRrBjqpwM4eyViX8Krhjmzt2AzvcoK9dxph3P71zFWaMua5UgQ",
  "key34": "52drNGDw6rUZM2yxb3rSCW6bwA6Sa2FcWnyQTjiYWnWFUV2LLQW6i1xV3wSCanM6VfzmucJEzqDXi314jaNX2kqD",
  "key35": "4oYkB3x9YkrRLTHCYuzUJ5agjJwZtUhgDqM75gMMVzaU7AZJEonyPc4B3mcUHry8U5oMhYC3knq2dqoHdVFFtrWA",
  "key36": "5c5KHJcep7JdrZdsqD2uZMgJ4cB7w8NKVqE7Qv6xUbx5dgzVmLmtngGmMHqpjrhdLd2ttRqTDfgxppMG2gEuDJa7",
  "key37": "2udab8ppoNbNGDkfzmWxSTsd8vfDQ74DwVb5BuTkfJM7wgfUUb63dGBpQj7gLRj2cVeZp6Aef6C93qKMGkJQYDp3",
  "key38": "4GYnqQHZUKFYHbbDQUi3i1FJ4rhwNknyYEFsLW9YDVTf7GJX2FLWx3jxouByZQVJcrPhVF6v1tHG6ATYwR6X4mJ4",
  "key39": "2t6fx5PmKGVdvuf4kqDF9tumPXNuMfmYkLxEYiQGZmBVNGZYMb3tCzZ4eYgwZ2HXiXnmLVHGxGSHRFQqKAcCbRwj",
  "key40": "5agubjAsW2rtzDCSYVNc8EWEuE7qio5fgoGcNSZFjQoYs17iDpKF4hMghyDtvpzLojWmHPno9KhBiu3SJkjermtX",
  "key41": "24Rc93UxmBbbJUZ11FC9g6LZTKVZUHd12wb69X6bhCBdX4iGe4NKgMgi7NErqf7j1EE6LGYG7XeM97dotyPjgpe1"
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
