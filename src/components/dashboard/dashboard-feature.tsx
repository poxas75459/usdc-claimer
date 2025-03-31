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
    "txT4CcmQHr4TzM4vPAkc4NZsojTjngj4YacvmntKHKfJ8Yxd3JREqQKEBcoj9AvsWB1oR53rzsbnbYDhum5J9i2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y5iHKAdwBWg9saeXTZoq3cQ75vyqsNvXmHPQBST7oP6Vf197BHJW6iWjpxo38a8KAUsYyqxmF7yo6w4hXBR42Yd",
  "key1": "3XbSN6RinWy7xmahJ3j33pqut7M5zsQn4XFk5PK5ydmc3cV9NBgPgfnASz8wz4mtbzxnhVuDfmswSmupMyeddCwg",
  "key2": "44FWnjqBnqUXBCjbEVcuTfMLYnjJCxzwGiBstqnY2g8bdnjn5awTog8VSqmnr2a6xmXFifLQbvVUoSpozFidG1YM",
  "key3": "2CMnJVwwbbRzTKaX4T137xzi1krBvxzsqJZ6ajS3psrCTNHcMLgNAg2Nduveic3BT3of2iLBNKH1Vp8ne62jKXXY",
  "key4": "3Axhjziqdw9UTWC5CUfBjym5gAq5fgmc7bykj1aEQmkrJXbdo3cAEzJqMnNQ9xqY88eBzxiHCN9FKszoiUDdxFHo",
  "key5": "co1mg2V1jhbwFMMukikE9QASkzWBubTMao4Z5gFUeP2sCVNFDDMrJfG5ucnodwKq8r98nk6uHVXF3R4GzgP2Vj1",
  "key6": "ZJW3VRgF2eccNcStHSTLmdeR6PtQ4DMQB5dvZxhrTeFfx5qctm2FhcbYYaBwnjj6MS28sD1XPfT6yStQ1oB3TvP",
  "key7": "5votCfy85nX8ffwFsPQKjybx1wLpNiogiFZv2j1R7Mxeu4m4iu6igU76jrz4nWX4NgV9mp7jZjPN6VfFPhGNiYDL",
  "key8": "3Vq6S9U8AcgdznACSg65RxW2WDhQxQLBnwxiaHPngU5DxMqL7j5ZV6e18uK9HiFNYRdHysazwfxBwevohpDbLiJE",
  "key9": "4SaYYGEo4Ys7ozfiPG9NaPLz6tcrzySsW32ywTMVZBZj2ErNvDidNDzMZyNCm6XBAMGoFkqk7DQFXNxPK5q2iGBC",
  "key10": "5MeQ2r6CDNZp6agquJpiyz5fwpsGRqfkhaLmvGF6cVNffws7M3WMUEvA9aZuKWJ7puNwDf9xeEpYyywHuNSZzWrJ",
  "key11": "58i69WyB5RLyCzc87YPRJRaauzEsHxau3nsuzYLFXGQoHtbjymJJd48CWvscVaS8ixXhQftrJVSfKrfHaA633Cm2",
  "key12": "Lw5L1whUfkgNJEzZ5eMson15wsQSVnB83qQGP8nhu7PWpaunnCWNs3A7Ny7VystxfhVXiseftKEJiVctHpudE5D",
  "key13": "2jw9nw1HphetvVLH2oEWJSVai9gqjzLYbe4UyvJVTGQzV87YyiJuwo2ZyutrrK4LyKJZvDHT4iv58GRTry5uvvRp",
  "key14": "3crapf1swVM4tkhg1kxLRX4ZYA6EKWXQaVtNsMFFW6L9tqa4t8gn9qQ9YE3UryqwS4cQYSjoAiFiTzQo3EgRwTJf",
  "key15": "51ipVeUq2u33kJPE6LtcuHp1eqGLvUKemiZZFyzKKHLXQftKx9isHhYQvTTHV2ywF3o8wPrJGV26mTZYfmpMjNtD",
  "key16": "49F6cr2VdpBqJ9apAsRZa53wLmKQQNTaEn6V7NJBwDKzdfko7TXBweQ3QqFfQVBzt69W8UBh8K1Hn1dGwTQkRHhb",
  "key17": "3cPUmeBh5Ps4fgSR7Z7sc7VmLvYshhw4xwu8ub1wQxdiM1SXbZVWLX5egSYQJPabrfX1W4x85npHmmps3SYwKva5",
  "key18": "3WerSe21ZnQbAukZFAhxnsSqEQCNfc97fbDw39vBEKLnCApp1UZb7vBWYzSTEYx4DL67ELqFs6rhn2G2eDZ7KrxY",
  "key19": "3iS4MsULH2J2GUfQseKfjSNWaqyp7PDgpvcMcTFdjKsvpwsHuDyknXCoAwBKXynQqEHKggZ2m6c5R8gcxMaB7YRz",
  "key20": "4WTEtjFeT9aZQ7Jp9FkVzTAfbJuyvNoNWXs1osfRtoUThzEDArrTm5KvAEP13fNWnRPEmdqbKTWTzsBJqkLXdrhc",
  "key21": "5ANLd5eF9KEZk1jASikML6FVXegppdEAjkCEJpFLZk5CAP43zZ14GBjpWVaBMKRjzcymcykXz4MYk63kK5FEvcf5",
  "key22": "2CapR6V8pg6iU7Z38nNu3obhfigWGNrYYZKB9zSJdUXAKjqWK6xvUyCr59m4fJaio8UrJGtnLz3q142u7yN9Uf6g",
  "key23": "5hyBUV6FexRbPcpqqMbb2nMN33JdpkcFTAVmXcFgzDsFmpmpnyCM4jVCvKdtE7BLJVvJdWEEL6FCmYLvzr76QAAq",
  "key24": "4UQ1TSRELgNhQDUktNwx65uq97arLZJaMYiUxZ9kMZsJR88y7d7wnGwr4TpGhtBJ3KrxuhfhVKs14JM7E8yJ59hS",
  "key25": "5SLV8S5EvADfino24593dbTzntwUytCBdGYYPrUWoYfGeG4CV24LEtDHfDg34ar5VE4cPxh6r8uVvkMQJCmsn43j",
  "key26": "BzkLncLkAN6scX4r3aohbb6gXB6F4QFhp6468fCkcU3JBSthDSiWQ34Wrbdj4iDGmtoa5pgcGfW3CsQBJedu6cg",
  "key27": "4GJZ5EACs6EYRgVzb6mKhsEyRfitQ5uvpuspVCoETY9A43RBtBQFrKp23ie6i7n4AHsxtmsy82Lcgicprk2xxLWF",
  "key28": "sF1U14Bs1rY2dKTT7qcZPPKuZmdZmaQDJNu59qwC45wJA3myxruS2t9FmeA4ogkKUE3bZ2b2YzCv13AZA5ca7bB"
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
