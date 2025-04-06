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
    "JXYZb9Fsf6n61d14kdX3aPkuo94cCKADYwoYy7aexwSFG44wzY9V2a2LrGnafUQ4YK9yuZbnNUJg2Hft18u8HGw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b6ktWQz8rgHXV3awYAt2T7nk8MdvMYXbz4LkQdN8VGR4XCK4UqcRpiY4qTB2DML8aRYofVZ5JMp4t4ZrZBnSNoX",
  "key1": "3WaZcgtzkGgM7hx31cDPmwQN1sRAGXPmVN9x4viFxJkSdSNHSXvxUZpmpAcw18idV2MvgNeudyvSCotFnQpPRaCH",
  "key2": "4KVCrbfi1h7kWUYFjH9DcWzcbGrgJQSAop5nAVcQARpBnKe9GGxfWLj2rkLB5fafRQbsePDsZq53osyz3nMPGifi",
  "key3": "5skRrGyzaa86K2ePKrisT8Wk8Je8boBK16qzSPfRQEdfEoa1GzrWjEADSuVJvsmxYuZiQVuGKTJjXPi5DhcR2PpU",
  "key4": "49Ls695CZBjuknxcGpUgkF81FzU3WTfCmNFiGKE5vLbBr8XeXMHPDXkVMWLVEPYhQqVu7y4pNWh5j9GL8H5io66P",
  "key5": "66GpQNnYhavTduV4YforkM6stNpiqN8qif7WeNWT6weUf8W9gVDx2ZLirqbs6KhankmX9Pdnw2TXAcYiHZie6w3m",
  "key6": "4XrVYUDgiihSkvnDQYV5VR4CrCcsrHnhDvqC5fHRTBUYpCAu5rD3wuuj7ATAgCkYsa4yiducVNFB62o8fmo7brwX",
  "key7": "bYVZofh1MfGyCUeBEvTxTcFthifcGwiKMNCRFWJTVAR5PEM4xz9N4jRnWBF7sE6VCxKHgwwxTkhWkKCjqdPwFHj",
  "key8": "jF6s2UKcYLa8JXWaf3VKhFcDM2KZTxwHrAXshQGabiACMADzxC66bmorqg76JNG9DofB78L4JJpMMDeHju5eJtx",
  "key9": "66fZpBwkgw9H1iQZWxuCbTR8HpPZEpy9yScfQMLXhoECscRGHrweLbEohbByVS7ZTriCdCZKoNaPcDyWDgyCghHf",
  "key10": "56bqRfSpZgNvHNHMM8teZeUNTRAUie3cfa7WzG469xqz9sd5ZvF5y9gUJNiy7sJY8mcZNABwcMEzjqTpS94F3mXP",
  "key11": "LXkiqKDLyFsnBGGHnHkQB1cppa8P2z1nsQaM15Ki5dU3FCDocK3R3YU8PBXUVqudBNHuqKZUHTws6KoJArLvja9",
  "key12": "2M5ACptkffdVs8D1PEFh2EPFB57VsCNefYNdMWiyKuVyiwm74gHKz7cf25GYRpDZ8FQhbAzo513woV3DH5TWxEoT",
  "key13": "2vuf2r3qcafn4Sm8MiFCY2tQVJnWfh7H8ZL5v6kEUgMuQnBw6ArFhSuJAXZwcAb5bnByH9hzqtaTiCuMVRxRCfQy",
  "key14": "bnw3qCoYFaSoZKDvoJLLcnQnCqhG9FDAxk8VQgzPpwV5zCnSzeBgbKs3xfvysYqx593ZXUkjjby2yEfTino1VvU",
  "key15": "5VancxRy1BwtMjWDP6TLfkMZVnicoR9sANRMm7MyXxeEELLyPS3iVKBoxbSTgsnJ9kDAog6AJxm1WENP7cKzd6Xu",
  "key16": "35avh4pbGkekPYYX674rcphffxYixN7o1LxG2rGRofXBKnX9Cfxoqzb6aBe8Ds7DVR5uZRbH4Anb2RiMswASzg4",
  "key17": "3q4BrRb1PVWpUy9eFPVVo892MEt1cxfTHDHXy8GnGn2GBcu9MqXtWvwsBnEcNwdcA7jb7zHPDZCsrxnMu6ckKDXL",
  "key18": "3jsWLXqnN2kqvazZrXaMjCQ71DhyFD81LeitU2BD8Vm6xMrQqMc8n3wjVWaTC8V7hauWYy8jRFCT4YrjbmckjB5Y",
  "key19": "5NSbpxJ3QDeUJqXf7kk5XgjNkp86YuMFMcgRzYpmabQku1qpEDvZERcxSYC9ovSgaxw458BBkUqs9nZDrqo9ZVAt",
  "key20": "2yYDj9zshpTppNXLwP8BFK9smBrUPDWirRPgeP33ycJgN89ckU8SbjkFb5PvNJi4Tfe7d7rDZbKdDZF9ryteKWTF",
  "key21": "5tZkSHrhnc843jEZJa4QKFK5C1XqCx5bscS7L228sxAw6cY4KcQPkVfhuYTyKTJVJWzrtGMuKyxS2WuPmASP8Fbm",
  "key22": "wcrMhhGEDApHFseFkkucF6xAkTbi2LZC2K7Yy2pEmecCe9weR2EebTvEiTrt6FsFpipHDcEBdNKvXFCX2oQQv2z",
  "key23": "5yooVW5bFush5hL9GWoDar5NKVHj9UxuFV8YwYTdeikMb1h2unaKJNdyCayvYtn4i7PqGrhmpfU9GDp9wCkP2MSX",
  "key24": "3eSkMAZYSt3k2FfQ7eNEkao9G71B8a1suU1VTsfSE9XyEAHDkcu128yxK8GWpUbWK9wN41i6U66nPHZ4PahxrWty",
  "key25": "4DM4vp5aoenoy9kUyG1kN4yoStW41uQNkTfKqEZT8LYutvHRd3b3VKDuiiE6QgTuKgHXGyJuLpFHjqJF1j8zcuRy",
  "key26": "34BY2e7LGHWe8Xkc5ge1zwJAkVaJbvkCd33BqbovYhJ3DfTeNWEstvcZMW3RwMMajAM4arfRuMXTJD6gzLyBcVvG",
  "key27": "5Ry7mMR4amvoZ7j9X45C7FSvB8yrVJvWdLQWmbBqeHdDaNmmCJr73Bf4P77sY2p1pM8BbRzdr1cFLUPcxfA5X8tW",
  "key28": "4AZBoZeoLTEWRA9poXk4kHZSizMqCxt6j59xxyLHWDDxzLLyb7Q7UbEJ9q4dH86x8yswJk8hqBtHb4KaQhyqzCr1",
  "key29": "2q9phy8DcGkcfxR5qfrtY3nvrTCZcaM2bgwdLFZxQfMEmr9oGtK6YRjho9H9QY1QmSbwBScxbswJ1AfGGyLtUqpq",
  "key30": "3eFfJtTjuKtgbe54iumt6jFJ24zqj7GocTnN4V6kqo1QK1rMz1LqtB1hHZDcE9Ht8813pkt6V8pwfswLrEfBYma3",
  "key31": "485aEJWxQWbZ68ey6rRX2uxfaDT5hRfTjLbFjTjws449y5CZfYNPpGqqco8afhTargMwRA9NiPpu3xWuf1dogJRp",
  "key32": "2PX5f1Js2BcMENMudhG17Rm1Dy45qjEhV7MtTF97cScYCiuQACxv8txWeMrTFiN1pmtACWk9yFD5WWSM1mjJpPEf",
  "key33": "3MEwqudkp68pEUBEzK7i4mnc3odMH7ajW34T9B3V7X4F6dQPtsutr2d6iJa23NfYmKyYX5sBLyUJSDys9KaTPNCP",
  "key34": "5tWmrFm1PrNYZsTtq54z7yuNrabkRgtjQLJuuszMJyMhBRLKit9yGgiBXakpWHT3TDSdxmHobzinu13xNS3zhWYz",
  "key35": "37yHsnhXsApz2T9b6WYpEPVqEqFwB4ctRzJqtF7NnCBdcEoksgpTSsQm8zW1PmrBDQSvrHHwQ3ayr7cdx2psq1mk",
  "key36": "61Gw615hLrrEnq9D4N4ntgXitavRs7yVGaC1JAy4Km2WgujvWuwG8HyyTDRK8oT4pr1exRpicov3HLbB7sAZzHh2",
  "key37": "X3K9eQJducAkAKCcCpyfJAfLWU4oyo3GQtv4hxspLVr4KbHGCQoK9Vditswb5XehkE8uG6Cazjo6unTtgymfDdW",
  "key38": "47LX17yWQBkgri3CekWmhZVMag3bkV4fcEZtfSmQdBG1NZ5ymebuMrV5MCKgrQpQtFgHhCRzt2oWNHQLF76VKiwE",
  "key39": "5Gv2e7FJ8hrjLBNroLno3NNixNnnBUELU4cgDfLx2rEh5VNxVj5ksPWyDxcpuco1V6i3SjQv9eoVFNxpEkx1Uu9H",
  "key40": "rem15ctNKwk1pL7PbCYgGgwXkrAMPGjBSLZWAokX1Ycd4JYDKymYgC7B9GUZ8nURTv9KBwNata1TauVkBmDMzgn",
  "key41": "4FFNfeyQV1ARnVVBaNEY3oD8uhyq3zrvLP1r4iCcKwzirRUSDBd6NXYX9HinEqYUchJJV6hQREVgEptayfVUsxrZ",
  "key42": "4EzidR3TuYd9VdMLC2xUZPdTHkwJuBzYnstdhQXM1tT4UdxLZemNHNPF8SmvJ4nVwJfsER3LPPm6CEjUN1TAThcD",
  "key43": "5rsx7CawC1gkRNjJAVyVQcncgdWvSkUk2AzGRC97pLyfZaR6UFSDBGYAtmBNevLkW3VjMhCAzgn6f4nwaFZgazGs",
  "key44": "QjttCSGdUiwZUSQ7cmCTPozsHeMvLZgASpwzR5ydAEaW75WzXrxEqRTnpHzqu4GP6daoTJEL1hNi8qhJ8avJK74",
  "key45": "3F6bK6637Xc1A9Qb5hsHxivBf4HpyxZZWCqrzDrhw6M8k5Jp1wppDYzB7ViX9b4dnXNigXQi1ysMbfNXx9wKo5tZ",
  "key46": "5nTRfbzbPdxDwQ6wxSArahFRjgJ48AHjvE8j1g2R121aNpbfEm7h6ZSV1L9zDBoBXCemyHAwbMYkCpcsUdNcAj4T",
  "key47": "XhVd7kp2XZhrJue6NurF4a5rMhv17CdnTN9ULmc8nQFF7Kk1zigXqShZLXETiwhjCrApG8TnBrk7jesWXncCGEL"
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
