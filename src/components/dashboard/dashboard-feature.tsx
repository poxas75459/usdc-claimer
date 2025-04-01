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
    "2yA8zDMw9At1oo88navUKcM5qMYc6wGQKdBLsPyf7rL2H9Y7L45ay2n6SnXPrgiPafmPhzvnUoM56rAFPwNnm62q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vK2kcnNPUx9BqWqNHjhQXZfLH2o1niQdk2UeVoszUUZh8f1yUW75bNAq811adwkJC4RYAVt8irZTr9ZYN3Wcxtq",
  "key1": "2izxmJvJERfgJRLCF2Yb158iPm4EMPdU1UzzWPYfJnDAoj2CAj5srtW7jNpkCazqHS3mipMkrrwQyoQbKAs5TqrJ",
  "key2": "4oKw3jbPME23bomzSgHCLqFpV8mTp3yPG1NQ7XaAopzyjuBa4L4usjawnDQujJ2t2ghyTRycaVtsGfZdR1BrJ89H",
  "key3": "5qWcWdu7Awonsv23mQfYYwAHEKR8aitx9jAsgEJnKsFe22Vyvu1hd7krUWFkyALEQBgNJer733s5Jmdr6gcvndBi",
  "key4": "2jvEdpd1cUutHbzuerujjAoVDF6nw3qB12mCvghMALZiX55DawV9eLBrtSJuAGEj8qRLsXSpgw7Hc99AeX7FyH99",
  "key5": "2LDFvYqFh8mXp481qSgyY9u86raAcDQy9N9LcS4iVzCqHvShsuhFuTm3eUWc85RwcpPePJjvQFRi2av4gq1HYWFH",
  "key6": "44NtBMMA8XzhgFySB2xvwHJnAKS7rCi1Vw7U12cia4PGkUerzALdTQyyPDaFmjtXgmiHU6wcmhqJpofn7HHDfrSn",
  "key7": "3G6nrx4n5PKmt3xnMSCJrtvrpEjaNKwbWqFZ9i3dukmnGYQ9MPRUKZnYwko3WSBeiRP3H8pu3inU3nkVwrT79cxQ",
  "key8": "33xJ4VNkh4NVASe7zaDG3XRdE46LmXvAae56EieUNunNP73zQpBKnknBUM4Cj9hvAyCbpe7sayzzoohf4851KBfp",
  "key9": "5XyjHcyTZDC3VP72h5e8r9jWfFhuWkgQLDtZoBTcDK3LQxTZzE2ekoC1YH9V9eM6rXTUt1jNEoFv9FY13Wx8sW2E",
  "key10": "5i18XaHBkT3p8vgc1cmKN1tLZ9YxJ4RN3ZNv56p8PKJPM1po3VALBYGANUn26uFYdnWG4J6Xvr79fayj8W5LSPv3",
  "key11": "amwDxR9m11vz6AKEohqfJbykHA21Ausm8Xa2LyZuLS3URrweVE7MRYWjbjm4gTuNAAvFEb88dvDYvt6kkefjQyN",
  "key12": "2FMsfegPtDCdXo7SxwYPYwzUqqvkkBjEqQBBXsiKAuWSySxxWMz3Byps5aVLBck5NZ4WYVQnfwTqTSbFWQP4hr3k",
  "key13": "3LGN54LiXJraDbNtxMPULyKcrRLP3BiVhwvjzPGQdyG5V48arTsL4ph5W5BtKbXwGpqQEeqc1qaABEwn8dhPjFyb",
  "key14": "vMzgeH9uX6GQVxRgrgtcZ2Njp2c5wQdsoRJHrTGoQe3Ti33NKGyXcLkibHJChqbdbLLjNtC2Grotu9pAch3A1nS",
  "key15": "5VpF6oLTkJ3fUTtoWCyTWuZ31Y1fBMKnPnaTTS8c1NAmqagc1PHTPtScUg1RTypP7ZfhmTS5sP1YHroj1xjEu8HN",
  "key16": "vDp3UPF5t1fKeG9rdFW8MLqjWx32yGU1Frz2CryvRjNECqs17m9pc1UqwvQeBbSHoCkjZ9Z2L5etAytVxZpVmhp",
  "key17": "2QcTaZVmmvbYEVK1byR4PmbfRm5jpg3ReR7z63wzKmC1DB6tUUWQZEvoAAyzRKabAb3VbtkaG1uNo8hBFVYEhMsW",
  "key18": "67YkxS7qzKfv3yMdzDBrHVAEQhgtEvwkWqYMVoPbBZwnXts8HGFnLyArPpnP6WHjASNL7eQb5Y8htMTcq2YbiBLi",
  "key19": "49EN2DDyWwup2eEdcpiDxEhM4Yx87zM2zaYBS1SiksCwxyPVZ5MW5KznCkBJg8ds9DSHFUSz84gL432Dk3fiAwtn",
  "key20": "p7vzmcN575TEGwpN26x71HedoZehdegsftwweJeuyjhVHAtLGKy4FvPNdnfEbcVsMavq9B1zcn7cXurJMqjusoD",
  "key21": "TZj8q9W3W6Q1BZ9PzUF5yVwFddDam3E8Xn7VDvJcBp19nEH8fknjtfBVioKYuuuyveiW4DLDUYk85VSsea5MEoQ",
  "key22": "TGnp6pip3zsYDzTfihRKkVahB45USpjhiLEqQZDBE1qEbrqppf8u1DBw5CJ3Zy1FvP3ki3o5vTWbPtsoYifK484",
  "key23": "34fcFXsCy8HE9xKobRQWFGm2aujv9DxdHP49rMuE3EEAdCgLAng7868dYCfDz19KCbVZY9Kf6E9HvnLz5qwYF5cM",
  "key24": "2TkGFYTiyPAiF8oZyE8x6NuXcnGvWe1Rc3vWsBBtxZTziLqyGp5JVWZRLnTiVwnCvQgaBH8KnSHJHNs7TouVsLJE",
  "key25": "5Q9Xyo2ii3ByoHWsLbZRHGJ5bG4q3FxjegeGyJnHcu6aLkr5sDZhUHZG7Yet9YAaDS6mB2GPoymbh5ZJwcApQbFZ",
  "key26": "VPJJ5y5RB6EGjMFR2ZJxRtMEcQthL7PiKcp67P1QQUrzdccEftSBQZB8F2S8p6Eb9EUN2jSaWycbkvcUxHE2A3L",
  "key27": "2aNooBiizzfgvGss4Y7ME357QB55bdTnVjWSktBoQrEqL1VGKtvGcKGjd1YQpbXW59qMWUm29XGLNPqYmY5JAiAc",
  "key28": "4J2sNk1A5vhdvkH1VHrNS7mAfVB2HdZ2cxKFMufF7zuRFjwkGtGrgeJoXC3P2DV6mgm5cBgGhyivKsYYeFXKTWPn",
  "key29": "3mMvd1jPBpB8F1vgvS5Rvb6rkxfrqSyYKogpZz8ecHeZjXQ24fgeDBPcK6EWqjgzXyA4unNcvwrCMqZgoShCGzXg",
  "key30": "3nDWvGwyE5obn9ufRQAEVFJ8Ua9XzDoecbx4EeyPMR7ch5Y5Nh6jdY3bRpPGJnHoPY6dgAApPWFSxbj4i5p6PUw",
  "key31": "2YRED8iDoWu78iiptcoNF6xrSHQ3LtEhuiFpDRhVMfvKm1nXtiyBQTwkt4qwXvduUXCGzT2xQfR7bEAyMmJokG2G",
  "key32": "2bxr5HkJRy2ExnKaoNaLzhxLvNVAJhWXnjo1ykgEex3xx1vpbwB7cAtV49TbsQV9F7ioTtao1E3EG98ExS2m54xj",
  "key33": "iVGnQa7GUypNAKCZihHFrddJCzzqy441SAE5AN4mbaaSJd4bNBYeuLyDaNLRCJk4FAJD18wRukd1TK9T7c6rfqw",
  "key34": "2twNBAyNCqx4vBtYEb4oTjXF55BL6owDoJfib7tkFJd8aRg5dck7nTAHDtdH7JY4a2btne9f1ivDbL1ufRJiBGxC",
  "key35": "2kqicNexNUVmRWQGLLCkSZs6K2a7DURp4Ecmh9JteeWsKNNLLhvz3k2EYu5vYQJAcjPVa7fCMjMSLQHrnFnLJirY",
  "key36": "4puPkaVHAe5oH8GT2oHEfncuHCE6CsSvp69o8ySZXhqL1ySccRAaurHUobu2yfT5QuofBP6R2PLzwDr8Asa7D3i5",
  "key37": "4oQH8Vc7HXeFQLaCFPq3qEqav59fzMxnJdYzhC9AgF62dTPyBEYsYKz4QaLoYBKiVyiMNEGAQPsH1mnM2K2MWzEf"
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
