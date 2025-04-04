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
    "HKXVPwyRHo6Y85D6ZMNePCxLXhpQygFxBLQkiJCNBvquDV3Q4ThvvmpzW2yifpMyJAsAaa5AzeHGuneFSDu73C9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eZPxMw4Uy4n64M9i1eSTPViPQLEH6uHfUgGhrYyGGMn31VVSzendR1zuhEBUYm4zzEyLXGhANL7NeZZNZYG8g4S",
  "key1": "3BBNspaKA9HRBty5X1GDsJdqef6HkVMkAgQ62UGVZt1DKkbYetYnpjFZxoZnxmfyy7BtajJNQJyTuouLDAwY59Vh",
  "key2": "625fticdFuxfDjpPcJhBr5npKD63HQtHPgwuunf76aLWfj4HjWkKxN85jpZBgKHgCihJ8JgwKUpyLzVimCp2jUio",
  "key3": "4XrraAMWcfLGwrdoJtxb8FrZ1v4Egntzkzv9ryoiTrMmR1XVpfXxENxR3wVTaGTC1Tc1N1JKLXntwZiZBKFAohC2",
  "key4": "5awWCgnUGBjBwJn9WkjbHmZuR67L8hEYmP8jU8RMyaXYZzKxdUMa2jhvPxYVuowvVzcquYki4eMrr2eJo74wcXQK",
  "key5": "5cnLPitUNZCxR3viCDLQHxu3B72kWLQ2vnVVtuJrUCt7hnov5YquKuLUMQKEXshKSiz8DDPFdakJHzJf2RgMs47u",
  "key6": "5yQ4tHpxTY8VQWSh1xoyBZu479fEJGGDMtMfCMkrKiw3k8LyTHrYX9r9e2q9onzWkfMRKXd6ytEJMJyz5RPtiEoy",
  "key7": "2cm1NbzEq1QovDEk1n85DpSbRTzWyx493vXpJ6pE8XojkjVK3nRNrRb8tzMn5djUm4wpLggUjUSNgcNsjKhroMtK",
  "key8": "2mvwSnXQ5pJcYTQy8m8a4eYziLiFAohfXJQ42v67bbgyZAVz3uE9aw5KpWtvX3aUsgbVuVTYDLMPUd4CrqbBzcr6",
  "key9": "47Rn3kaUzh8JG5Lygn8e5XkoLocKeRRY6W6unB3EqVNXB66hL1MBc8vrvJPhuzWvjNVDYzaiGutgJ5XKjEXwF45",
  "key10": "2PegkgWRctXnisWBqZjwkkVEbC3H3kdwxm3GkfmDkpWUqNyvTrV6361BfqHt7RLn7mD2umKCZr4fhBTirzFhqPVq",
  "key11": "2wBwASFhKX2PiJvmxCBGKyER86AMPw7go2NXnDhjXauCEMCpG8bEHy6ymHBxL433qcKbXJatccVVsPeyDBLCd2c",
  "key12": "2CgbrvgqjX4h2bt6eHherLrUAoXq4ZeeKCQbLvfEfQBGJSDYm2rkid6NE8E3MK2UGEngQuBFffwy7bm6eU6k2BsQ",
  "key13": "2xc4GwydzkteabDHpsMCC5GvD8qH2Z6dzPzUa7cxvrtqYxq2TSu36rSv4ryDT2uWYcbKrDTpfaQb25yGF3xJRXkC",
  "key14": "4CeAYdmBAXAhhB5fCuViPEkrpGZoMC1nH6PRybL2ZZ2pzukNM6ojC4FQ33UPy5XQ1knv7CR1HZTYmNr3PWGdZgYL",
  "key15": "5TYVuTgdif8JHdWnEJZnrfRQXUZfB27cWP9euYzthqrFqkbS3k4Fvw7zrCFNngFuf7P2FRA4meghUP4gvHENjtrC",
  "key16": "3sDUijWY1XXEV6wKuHQT1Zk88Zc5CfwUawyiiLAd4vQqRoD7hqM5f1f4rSFh5zBikJ9goeEuYxNf5ZdCwVSycFFP",
  "key17": "3UZ4Nk6j6PAiS3gUbbG3VRXWyMXsp6gTMVGsQ6rY8X6DGabpQzvLbxQxUQ9acjx6rYvAyCjRKbDieRaejrkXk5kP",
  "key18": "2hezcWpqb4wPZGof573ou18N7Xz3dheDtTXGbuzJ696XbzXt7nU8F2Gyc5cFhzLWbec9bepTc9pk4Gx3W8C8pa1P",
  "key19": "5zHPG1TMGmNBhHgN9Pud6EXeHyJChuPfvf8BmzRXqZB8nmxTDQewewRC5u5wXvMmf4NZ9Y9UiVPw44nBZhgHVnuM",
  "key20": "KrAERjLnYBMVgLmikr2ZHEpaNAnxUWmxg7bqk5L2uoyYkGoGMa3uSZou6P7qo4e6C9fs99mKsUWKNwf3g9sMMHD",
  "key21": "2V5BrxugqypwoiDSmpQ8Ag3SEoNPS87ouK3HKwR4tzcAmktbGiUzsguMnA9fcRpZCaRnNeByPuarAondhLJ9ZD1Z",
  "key22": "5MniAvcpAMk7ExVux5c1tpRVDR1pJGvk8osx5Q32BAz9Waw5V3Nt2MRBGePDdpiMApcNLbVbvMcWJQNrx6P6aQPP",
  "key23": "4ZBGpLnFLrAuTu8G3mZcFE9NDkKiAGLYxucH2zL9dGnZcqFBq9xYKHWdeR8gD7NHtx8y7H2fV35yhJQdGoXUfFKN",
  "key24": "2hhFTyZeRzxqa5E5GrjXFtuMieP1PaASpcxGtqDfqzpYtHHomsHSZ7jxDd3sLpDzeu45SfCGhZZjX1GgJq1b4ahz",
  "key25": "5t8czu4fmSNgqXP4tR4mnM89WkKjeyZMtjfrBEYkpntvf4kD6zexqpqPYpXecmaWTkjU2Fc19c7gPpungaua2Rur",
  "key26": "3u8uvxbc8Pr8qygsK47UTA6RB7oH3AJwVxczB37WBkDezmshuL8b7UqqbPgoprbryhi9ehgrQF71NPFD1FoX37Y4",
  "key27": "RWiXNj2nhkFqSrDtek1mKt8ugyjTQfNZeLZvMrhSAPQgw9hn9dgx7RhShhQnFSZp5BrXYuBjk452QzZoAnjAduY",
  "key28": "2tnjmP1bSWHzicuY6BXMwid7EDRwnXTtvLGGst4ZJ4dhMvjguDK6KBVBDCAsyNvBZZTGfmBGjT2gw9MR3SgR3qLc",
  "key29": "3DXLiCoTGz1wGZzXYsu32ENMFwwMjtXk3oZFhaw94cn6k5r6bzQ6WMiHJvdNkSgRAcNkgtLyEHd63f2wuo8k7cg5",
  "key30": "4CdnQ6sY7FEgabug14vAGDVzPgrRrd3iHwSBkMf1fyFYqmzaZpi7adHPgfsW1EQHE4GiBoymYuNkkr3EqzvR8LbL",
  "key31": "51TQvuHPbvGHtkdBcMsAH5s5vr3jrV4G4QEWbqBBf9P5fvUqahxbDaWvRHA1cjaF3x8KfnbWd6YNryGJ8ZUNPoa9",
  "key32": "4ocXQpZaL6y2npqgtKbpoKbHrHzDhaANAWzDQJdVkoSXGqyBGLfrH8W47y3JEe4YLab6E5kh7Sq7z15rkDrPafLM",
  "key33": "3v3LKAKdz67CvsmHAwVqsKyZqH8YFrEn6nQ9g4MPciqiCwJuvEJNqo8NcVzEu4oTf7Ar342zeDJm2kk8BDP6DSKE",
  "key34": "9SGSJeRPNRSgDLqK4gDcoyeAQcPdxAR4QjoRTCAc3o6Nf9WvvBiVGd56XPipwLhb67fs79K4BTXSCKEkWovCfv2",
  "key35": "53u3Xm6gW7QcuUYJEUmTgvV6gyyf8AGmDuMtmaBw84qNg1X8En16ggCkxcGXcHmyNcZ2njFmgYGhU47UmeN5mGHX"
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
