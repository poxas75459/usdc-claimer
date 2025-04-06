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
    "5CLF7CPx2ZjdemT9rf1aYneXGe6GXbrnA5CgrXxZ8N3bHBahESfUcgPyyxxapZWcoLcjQp9USXhWr96q2JVvMK8s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PYrxnDu7RaNB6EWguZNrHiN8iVLevnFm7MfGtS6rr4jyQLG1Xye6sFqDZ31iVWfga7dzNA7y8zHpXotCKDmUJyN",
  "key1": "5aBZPg5u8jV4pMHq2oqkMsUeg43R8ezCyMM5agWF7SBZCBsqRZXJfJUL1pPiZbypsLzD1rGxsYPwACZnGskQn44o",
  "key2": "2fKUEiEt6meL61mzY9dmuqC6HUDhXVVXirgppoxRrLhfDzWuxLCRwkTGjDkArU3HhfP66soDVE999wgn9UMEubcB",
  "key3": "2E6LMKciupabw4fPTrxduDfrifrz4igU9tSrAmn2c9d8pzmZXGg24f9sG3uMpmHLnbcG1yxX31VL5nPMQQXM7d17",
  "key4": "3Z44C42A3WFUCu8S4YiyjKTdsposnFzTNw8X35NWCF1bhz6QDmEdM7m8o9wi1ecWkGquRnCYyDBhFoKiuf9APdUD",
  "key5": "3uS7WcPoKf6BFodrxAfuXC75QhXynhnyiDbzXgkRpYy1BjCS4phfA9wughKo9z6e69q2FdPFPYUcfpt39MPEs6La",
  "key6": "5UD6NaYmr9aPx4vLVP5fmMJk96N4Y2bDm88VFVzAWik4HFrKrqBYMkYy4zsWAZHKrbAoaYXVPZjKca6AqW5sV6e9",
  "key7": "2rbQc1iqXwoXYkpdB7MpKmSc4TWz1jB516L2KXhJ7st7CwB7441vEwR3sEqCnJuk5WgQ2JCe8fAFJgz9GeEWyTgC",
  "key8": "5aNpoXDaUdyPRb6Bjdy6dRMfEQMhFsvqzEaxHuUHGe5HPb5jkN3v8e3mbGtLh6XXtksezMbMinww7eQfc8LXfRCS",
  "key9": "KK24Ai79iAg9c9fZBQpWf7ByyDpYEBxQCUmybSQg67ej6ty2FniNHrMsH6Pae5AaXmAeBsTjb2b7EvcrmQdBmYV",
  "key10": "3kp1chJKPw1PwYD2tFpL6J7XtpRdhrFDA8CZ8vo5Wn2LuQRGNMHT8m5rQEkxEnQxeGpkg4bseoNyEnsWKwLFPwfB",
  "key11": "83hynAeeR6vmKdgKuUEbpRfgEvQ1NYafL5DZKtATixzKCW7ePZHhDwM67AsDjRgWgFqjsqZcWoWyHADC3fRf4kz",
  "key12": "Lo6fEkPpZgEknAjMYUovyfSRa6hr5gLrZdXnTmig6JYGNTqNpKVoCbqiLRrx9uTdgPiMAo9vqT4XiRmg8uB8KRQ",
  "key13": "55oyp7iESZtKRwsN29qKKs1jJ7czH4QS6nufBfd8Dme6qjNbFPvNHoVd9Nkyd315zgHGbMDuRcwN9K96FPW5LCnz",
  "key14": "5knUVb6Zzzow7AZtnVrFwyNpFmQ9BUyZ9eN4THEfmUfuxD4yUWJeuRn4PWjxo9JkvWGj5pbyEfkbXzmQjodgYPV2",
  "key15": "54hLA5U6TN3WGLVCCDZfGWkXLy4dzbVviLBtfk9iqrBNCxkfNFDA9VsBybcN6m5DYWSfHHctEWAFEmoWsFxdrFLu",
  "key16": "5cZMoeB7V6ww95d2bQ6eoohysdTynwdW7ZY1FMypik1RKdErXA3V83nSoyLQptgQt14Mh93DHvGFrRHM8F7YfAMd",
  "key17": "4SRsJn4iC3VKpyiEUx8md6qUUGzCPMPMiqKUkvd3vB9e1qSKmFdy5yp84bM3iQsmLzA9UnkasevY4FnFJbaktjEh",
  "key18": "4s1Yj8bucx9N2Hn5cHLa5zTyGurH3A1FUXC81S7vKEiVFbZfrW4T6o2K5AKvQ953chYDxWqT6xE3NSH9nkRjiJCM",
  "key19": "24MVuUjpM6DD2beMvKeiUSFRuRCYK1YsvLjsxDTqtqeGDeeKKikUATmrX2e552S8R3BBxkDHpdVUdie9F1TtDiqy",
  "key20": "2r1ufzWRA27eYcxQ1dxSPHY8ZvqGuZM2L1dbPWGLztyv8JARohHgAazuCfo2VYbqMBbTVY5yX5VQfLcRbLVynf6i",
  "key21": "3GQhpprq3L2nHgvj9Pn6B61LC2wQLMeH3qntjnn6iyVM22J9q7LRumBHtTkeBMaXZwairNr5e6JAAT7w5ugCbvtW",
  "key22": "5Kf78mXncGeinUAQ72iyMEFDYmLhYFLUucew7mDDaepNavKBHbgMxoRgVpCNBmjYzDgrNyyiTg3f4v7jKyGAXPMA",
  "key23": "2KZz6tdPRe7fUjxurKEaEhJAdYagc3mGA4pMs6uZ5JqeAuk6nNCfb45ScouT28GXtEHKMfjiCxQsXMdm2qDsXtGe",
  "key24": "4B3VsTyKa4Bu6TQ3j9iQUnX4ZXRpL7EmHrhZm87HpTtaDVYgxSJyGNiSnWvvLbGcDmMo2WibjoH7EtrVdRVoMtpS",
  "key25": "4AKwPvawp1fhE7kFBn4WJDWvNiikMM3MeTHHUX2c7sWatG8JMt5irqHSusW2XwsqFcuFQbkLhB4KPDqDgSXWzmgp",
  "key26": "5QhjcSvhtbEzeN6fNjzjA5PEKPWfzniLUFAxd7a2b3wSLxMdyPHVQWnvwzCfQsefWUiKRzyxemp1GoBnEMAUUSBG",
  "key27": "kq6S3W9Dz3t6smbhQp6PewBw7sMJxNQZiaYL2Pscd6421QnuXaZdLV7p4RLm444FBQF8VmHuHzkDDT85ra5haBA",
  "key28": "5NMgVbytfUxLBvzpHbZxuii5kuX6QEhSoBpwRzUPBuBuGgf8wJbFGtvCNUVp84DMVkaoURofimFng2WNFfqRY1y5",
  "key29": "4csPbBKSDMso4pDdqzyFUqJuusPapZ9fGQvmj8Nr3gbuyPeZc36ZkuFADEatBaYSLdxmpZdfne4Z4Yv2WFupPijo",
  "key30": "4k3jKKo3ey236FKq7jpfhxijhjre6XgJzvLXpTZ3XH4jVwVLp31yB6z2BNGDLaANLngDGpVxYaVi6uLU41SE61VA",
  "key31": "3j5p6GAiqScSxy9PvPsd47cQeNJkpMLjkXxAGTBBnn6SNFnNpsZcZxEvAsmuMMaAV6mxTTLbsNPxrHbjLV1ZGRYy",
  "key32": "JwwzzLB9Et8axyVnhupi5f39vHxWLH3CWcvo9b8fZrW5zrXkHYiqw4TqpNnFV9uiYFE6ajyH2a5R92fAKUkvVNv",
  "key33": "36ukXVZFP2indJYJ6A8ds5joBx9dsiDghYd85RioGHZuJDU6n2q6Cmw4Q1FWYXdFjfsFsTr1VD4dZ2vUgVRWPBRE",
  "key34": "5VvD712a3TnFnET9ipQ3dWJddhjZuiYYJPFzmgyuN6NQvyNN95iXWUEHJE2dGConG81CTfH1VTBu19wsZHYuuYoy",
  "key35": "2Y9yfH38Rz4U2DjGqqopgBLSJ5xJnkF6JwN7zgkQbUxriss1kRyD9QXundDWvr56sMk9xLmmb3TSrkcPg2BGtxvG",
  "key36": "5eUm5MLPvucKMGStEUTozhLLH36ZWjZbyF2hJKMC2Vvzxwu2kr3hjSDrE6ngQ2D3W2gdLkZb2HCZSuCwwA1aTEC8",
  "key37": "5CGmVzyW35mjSfr4TDv6XzsLLmUdykK2yMQbTUegAemPGaBJETLoYMZqAxo5E4tsVYFTq23Nser9g6DupJsL1hWJ",
  "key38": "2dNgukdun1nXjKkTcKYvYCtH8KzFCHz8ZinkKXQkKhhALVoxyCi7GiRCFM4tkBYHgmtArxycxRZakdpx2QSG5Wrq",
  "key39": "2LAeB7u9ySPepQpkJDAqMmiLBx9NCcbvnkMwmRfJvTV3pV3gmyjPRzGEzWMU47iDyw2oP5abjkZ4ddTEjJRPFjoB",
  "key40": "2eyqb9hVrFkDwsVeEkS3gSW1hEZvTcPV6zdBMhbtsKNn5RbegqoVFzwL37fDex2gfb3RhmPVggrVVbT8vxdTiXqF"
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
