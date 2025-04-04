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
    "468v8zCvwzLjzYyTKuBCiMwe23XPv8rbV3Uc6KuAJ2gw38uqgzmdDo16TXBQapSZhZsQFXh61HicScrRDgcTv4GA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NNzUxG1wXbofPjisyjv3feWP3UhXewhas3iRHq9ppZj1kMu4ZGrY1ctBzjQtjVT7kLjicMLPYxNVKtFwajSB7YT",
  "key1": "4ALL8U4RND5HAbGuLbT8132Egttc8Ank4ePz55qmJPnFmmKkLSB2pqbpvcS2EXAp7yCcxuVzRo5mvKrq5KS6RNP1",
  "key2": "vQEUuBXEfXUmppHUEfaF3vAx3suJMTbtNEqymsPWmqEAi3yxZPBMEddhB8yfaaLbAfWniVsGv4H1rVb1SK9vBKV",
  "key3": "433XG8KHSWtUncjMEc5Kb8X6LpPaBQeFV3JPt39xq3J8YkKgNwaze71TAusKTMtvub4nfVsBB5VHH8qBtutcsMqx",
  "key4": "4rCaie3FUpWBvZ33d5CMw9zToY6z2T3uSs1Ds9nC2mYtB4EaFVpqWCV2smrsRqs82Bm3MSWJPW8ecjRPZbRKUMZ6",
  "key5": "5MRL65eMforq2sKj3buvywPrQQbjamHr8NCb3ofTvZkwXCirJujZsa6BWX2T3eJXrZDLeimbrrc1RrZhyDkz1U2e",
  "key6": "5W4Qa81DrQzqo2DzeK81cSzqK1SZxSkyG1iMMWBKNFRi1NYw8Zhc7k87NmMWDuJrwu3TtwnsptrcZZF8TwFE2wdg",
  "key7": "4y9di2woVJEHjFNkqPbcQa8iEryt2PpodEAkUZUds1PThyAwyeasgugQHcRYAenDrWmNdAmQQVswvgidwaNLiLss",
  "key8": "3MiqyC78iZBgGSPBjPPJW5xnWDs4PG911oxj3atzDnip8oHBbAvDRrzi54QnUAkNgSSxKFrPhEmiVYgWBmP1YiVx",
  "key9": "3jzxXm97s8uPERJkMC23SxUaxCQZV4nELU4wjHBwE4bJGtBmeuLievYCqW9ctAFEGntww2GSKfcJmu3L5fDr6GBR",
  "key10": "38jWAFvQRaySdYzML2sXYbPiurJyHLD6TPrZb5CqiQ8zbD5WGi1upt5bpbw4aN2xbhcdMwbSFR1orARWQm7hgBLb",
  "key11": "4iwSaT46tbgeLxDmScHF9y4kPBHkfL3HFtvwZWtzmz3fcgPEZ7ETNSJjB9AuhbP2zQgfhCF4da4WAh7iUSNzoiuy",
  "key12": "4fJyfAsdRkGBvUQkVx6Lsbg85wUk5pHwJVKJVt69qye41pv2NabvEhpJnBGfVT5eo1KADNrruetupQZcgnARn1dk",
  "key13": "5YfKdFstnXXvLMWMQuaneXKMhxuCv5sYRMz4ca4Gvz4eobKLtDpkPfU6HDE97X7NXa4BXP92yUwznq3DHQhTykUX",
  "key14": "5urRZhQMPNkf2gSoGNj7NJDJnVWhhBcjTetTjsVVzPedP3rTFZk3hXyyaxkjvdb5AGUa3J5CbDcBj3ujBEpHwCmV",
  "key15": "LSVGyz4oYhu6DnkCsPCCiaVj5Sn42ZjzvqchAmkaFkeDh5TZMSZxSQzsGh2K2HUKRHk9SSU4LFgdpc873TjGCeM",
  "key16": "5RAPHcabJDw5qUj6m9ak48xVD9Pbta5nLfxJZo4DtVCwACGqSn9Z5rTWHTHiCrat4oqhGYm3B9eGawUgu5QnVLzp",
  "key17": "4iPKD6uPDYygexSScJR139nyZXnMAsmDc3pqMekJuJeua1cqge4AFWsGigw9eBebJTiAovyi1dS1MJA8rYLZ9oYG",
  "key18": "2gjVVpiormAnE5LkCxKgV2CXDJtrGNW83ayRHvEJXAAjmCvSuWveMK9gx4M6V9nzGhfPFRiJ2DxyeAKt9TeZCADC",
  "key19": "31jFqBJb2bQ4nJVjqerwFHjdQ4sQz92fUxg79Maaymcf7eJvoXuoeBGWUzCc8rduHuPDWjxQpViwRcTbr3jhUHhD",
  "key20": "5NmSigQzNwCoLyTdKx5LGW4rffVps32Wuqg4KtKHQhQBmSQT4RQqUGBRcMNkztFN7n5V67kCwDM7nwhvtF9ahZvV",
  "key21": "5nzwhnXe9XinwoS2G4R25XZSKaW8b9NMTBjX8nF6bP8k46QEo2AHYt5F7Anh4aGPYrKRFMyeMcUipVN8RG5AwZjS",
  "key22": "4mToNGDHVPdUFtMbPR8uW413GJc2ifcPGHKMfuThVHt9nGhSwGohL2rXXPfjSNsfWrjmn3VMZ28kAF7hbMC6M5A3",
  "key23": "65PgXVj4ESeUfKqUpTyEQVZTsAZWkvsVGXbPj4LjD5SWRSj4xsg7nPecBotvZUSMhfBMyS7XnFrKv2r7LSq6Eimg",
  "key24": "4JXkMZXW8mCM8Gpcd3NYEW5myVzJ7uKuz3X3n9Y3LMrdko3zjbQ2NmgwcxjVsA6eF3NaozPAAX2K3bJtsXYRyM6Q",
  "key25": "9mCzaZWcwaoT2pdMYW422qYNLJdVAcAbiMR2WpAKGDsTAmwR2uJnx7aGnQQW3LXMQ5d9Ky5W6PST8MXT6F99wzm",
  "key26": "27wH9EhJc8boyKQvEVCtzkkzTG4TR3DmiM9n7FXwEnaw4ojGL5mp47af68uiw9YsasLPNhaaMi64V9MXbato4CKh",
  "key27": "5MiRrBs6uWLxbjri8QCLWLV64L24ozsBCkHS9NsonoQJ4M5UvAo25zsgEpBqQFqnKdCSMHpsBnQ1PKsusJa5UNJw",
  "key28": "48eF831QS3Pn2iobTSfixjEMy6zUjgqRoiCgYWL2hGkXR42ph33kxm8Shmvg7R59VhEhcvmLKxAQwMxwYN6j7Pmy"
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
