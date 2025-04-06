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
    "McHzqxynN4Z1R1kheswZrmWi2STCvuynSH9bmxCZYNXKCnu93mSwmCSC5rzwEVQ9nSP8LzjkHSkg2dzZELR2xu7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3brb24JfmgPEJpnjxJ5rjAdPgLEJubtQWSH3sFMTguduuPW7HAYckkrJTW31on23RCJTfYfNWGmTiUFyDJj2neM8",
  "key1": "5xqLoNc5WYZ3kPWiYi5RFwFRjhAh99SK987Jvfm17JuM7zP8uJun1XvznVy6tsqgNJcYRr6ehgDdESGaLmCfWL3D",
  "key2": "5PYVjU15vzMpv5NgxwnwKFZ7x4FKiDpQxLSijf3qEoKzVddnNFRgzNESELyNYdEuB9nqmS6UC9rNPGEn3BWobc5n",
  "key3": "66XLHfbikELv9DoYbf7aG1yHPypWDCZwm1DcVrfyWPE9X7CkFrLXt2nXnTcoYqZdQirgb7sQa12tNaX6Zo5zpcEs",
  "key4": "4qXx8b5PtaWq7t7QoHoV8cxuHGdxBVkni1mhgpmm9MFf16JWCkFdg8QJ56AoRms9asiJQCTkVT5Xp9yMDfk2KRcz",
  "key5": "2BWFr7YmNnR5EZH7yh4iDQ4tXUcCdqEAQe72YZa8CKah15dM1EdWvFJCQSVNqS5tPmeEWsugFwJbJdAFmeV1q1aT",
  "key6": "4nZ8PggPY7QpkCPT4dpfkvcA16vMUtgNaWt24vFciMdfFqHDZeRiWw2phtgBT94ZrGwMHJvc9ePHgka1VgVijzH6",
  "key7": "4deM7VbGdBT1DzXJVPWB14L7QUj58s3z1Wx52oN8qLj5ic6Nm664XKfALfxhhvC1Q7hm6n7mwnYXyQwoSkPtL1eC",
  "key8": "4sv16A8KgrifMB8n6yUnFRodpuq1Kc7p4tcVjB5ZqE65jARnAQ7Fn8VEsdk83BWTtiUt63QuxDmHkC2cYdFgdg79",
  "key9": "91NKE1uQSfynsNc3XXrrpTUirMt9u56awYptCNtwwRqUFN1LPwCrvDR2mq4mVRCmbwacQckDaNwLSuFEUxNEaFA",
  "key10": "3sYWs1LcUPHHRy2wLBvvJQLC315xRh2kux5QfrDm2fnyqfD5wRSoVgeyoguEKL7fSpXE1DPEs3dvJZKLWzCeCMmZ",
  "key11": "4PheYcc3vNUvhwbTPTvaeQqPizGtndD9QoSMpiPYbQJFKCvG72PrJVg4JA4URQcqNMUQs5VsCeuvVhfkVpbh7joU",
  "key12": "3qb6QhV6oArKYzf2CUi2wj7tSeukpG3xZLtUjUErj3sJ6uwCz4TaSRutP6ShVxwHZHqQqEYB5Ub8nFUtC2Ycaj5v",
  "key13": "3MxtAVZ6igeH1MNTWuQYL8xGwvBUKgfhvHjFSnBy3MJyLk63aL3wFyZU7c3z6kbv463joNNsA1ozTGLQQu3h6Xnq",
  "key14": "4AmByv5ZpBu8oVuq2wKxooXceUg2auqsEzGbrdhrtHHjdWCTi7NwLDJRStNFb3vCYjZPng5JG1tSNsZPhnnDCWET",
  "key15": "4b5jXk1RhxRKbSaxtYsiJmsCNNvWKRhRRGC6pnhKeBoY6YWiQnZoZQoMXkt8d5hy77D3HzonsmKapBMSCQjbn6Ah",
  "key16": "52V4UX8LyjH6VWiVMFBorJn2WCfNFL9ATKZ2Me7g4quhvJPgNMiA5CfCKiukjW7Erg658BwpnXayzhUTgtrHXCHG",
  "key17": "5Bc1kAchXUfwbzv7kfGUoDmwxgonRSiwRrkYDSnNTmsJ1qvSbJ5teKPVZ85ah2vVosGXk2KYVh6QqZkFWDbZVy1r",
  "key18": "4iTw1x8Ye89te4wHhbmUbcuEmZe7YLr4t67WwTmZgSACkEXBtqgXjMhvfM1tJmKCo9pUYyx23MDWUU4b48nVaULp",
  "key19": "JZF6EdRKukxJ4jokgRFeVTHfEx2wfeDKbLTzhVarkvudMhxwsTt8jwftYipsUr6ZwziAdHzE2e8CiLepQSuhVnk",
  "key20": "5iPXuZ9D8r5ZC8C4Tee2mN1DiRjRMKQvKep3ZjMH6RyEjGrDBGhk9cq28b3PrmYXocHLVhFczY43hNBjgg1GuSvV",
  "key21": "37CiuxqD3rmHmPPKhrgaQ7BkEfJLBXk1VFcubHAgxUx1gEBcRyU36gHumEBA7FUgZ2NuCmfbL3nWdN5dhdyGXN2o",
  "key22": "zXiiUcvvpLHFeteFBxiYfaa9JDd9RX7L5537gwDKRt6JeSFPhEAxzPe2tKbeADhH2PTF5Ex9Wq29gmvDTxEBJ4H",
  "key23": "3AuCgXuTbCZiqsx9nQsfVCGEANwjMaVw3NtPFtxtaNQEFavvDkiDBK9peMCvM4a9xT4YEKQgL4ZE7uzMYPJsjP28",
  "key24": "3V5WzFu47Lz4GdZfkaSMSm4SkujwApVZSV5fRoDvmf1SS5cTcJczbDVbHo21fWftFqK5kY6USNWeSU1TawCEYDQs",
  "key25": "39xw57VdyFyU6mR9iTmep6iyL7K5jwyzkkq9n3wnqiEezoK8zbwescCrmHYfHq9UAHffTpGS2pd3BHTbYMxJapho",
  "key26": "3AnvP74gg9b7wWw5SfphXvihXz5GWupeLGVFQZbRVm1uCK2QcPwHUDXjFzSKXg8eyMDHfE36nM5HwtkmuKGKJKgH",
  "key27": "1D1xAwzZZQ98XgvU4etfx9xiQryHwXhiDVr3ZMaLyERBhkHW7cV8aLJvKAkWi6rodJLC3eJwAfJ5hj1MYQdheiw",
  "key28": "4hCVM6APqML9MUJhEbWCuApAFL1rFU4c3zrapoCCJzpVLSAW4htFrtPjErvzBH1e6wiHh7dJ4v9UugD1pCWXvHtV",
  "key29": "3TWtukzH14JCNpZNAVjwNYKbTmHTC5PCqbtRoZd6yWujfuzrfSwPhRG9DpeGVx75wX7zzC7cA8v36Cvm9poXech4",
  "key30": "5iJee7JGHhsaW8Pg5k6Jrg7xCrvx7nqxbVFPkL1GeT1gsUYmJk8qnNc5gdAbBCGQGc2RuLVTgh6Da2T3skGu7nvK",
  "key31": "2pwQAdCWfphU5yQ68bZhbpVw4gmqKEdaYFgJFjjAHxDFaQ95KxLW9dAXnwuJBNXkrtzgHrjQKYGKA9AsuZeg1aou",
  "key32": "2YwUpXRVoozBVVcwXFea3UBUXhyLaehPwjPmQCKT7uaSVbNM7Coh3MfQxsvxktsfygjnZ9xPqnkVhC3FFrjh9kAU",
  "key33": "XAmjRChw8o8mR5kZMHc5iw4PcJeh9RFLQmnW93FjWdGzrL8Czmnzdi8DfgN2W4ugtA7ZvZ2nC53gRyxcjCVoEy7",
  "key34": "5mM7UHnTCVgstQYSYeQSJvqPr7cZLZz48UVD5r2TbiURLhpE5iAjU4QojNeTki2cHYajrUB8dHuWj6daDNPAcqoM",
  "key35": "2cCvpQx1Aga2inLrEQh1xV4FkYimYocv8LoFPr4vETMj6dK4ZQkaXRMBJ9ynmGfhMbMZKpH21mYP8nmd4pj3DghL"
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
