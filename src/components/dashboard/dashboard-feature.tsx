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
    "2G66cuRpYcXqjEiVSB8SCdbkthoEmyaLh7eLjgfaiUBP7XJR2WUP5j9hwsW3FBDTuokihDgW2csxyXzkEoTCJUh1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TPbNg8gNuvzrk7174A6ExwPvAjeLt6CJuNVQuGtXxjDpoUbQuJ6qniLSyeYuFnNz67ceJgrM4E331hJqZM2hVCT",
  "key1": "5rj9GDd8Vr9EWscEzJ83pseRd8QtB2NxL68asATKCKVEBC1qtcEhJgEdaP5wdLPZf9jin1TtFzi2KJnBXDtop85J",
  "key2": "4Ts9e1QvrmBTgYVaX8c5JK4myW7Q9PVKEVJt13pPhWXn4Jk62i7j97aKxa2Gs9xsgDGPJbyD58QCiPFEVNQByiAf",
  "key3": "4GDMWtai3CK3a6dHnG2oJu78iGuvcwfRTyD9CG4weSXVG476KjWABfBCrYyimhh1m7nqRguYfXBK87djRDRA1zwL",
  "key4": "45qJDTfnKHAgZaSMpveCRcwFvSfoXqVYmvdBoWHpmYR4vS67qrtpJhC3KUGmtdLudtKcdpobxa1rXuMdU1DDRLhJ",
  "key5": "4N15uae9CkTV2tcW918zqNscUjAx7r52qEb42v9vVQ5vAZpgdDrvk2sJ4gMHpXZZYW5xDR34uVqvPbnaZoT7BhmJ",
  "key6": "tNUFLetrySj3QnfU5PiECDDUfU8Jj7p99Ks7umoU6zvUVS21L6yH594fhoKRkZyKdkzEVWExrbKKTq75WN7ocgX",
  "key7": "tqszzsvY8A3kNYgGCAnduyCw29PTZFjE5Se7xnto8ETAY5EGNiqtfa3kcU1jPTpYYxaN9b2BQASsV9M3cqJCXqM",
  "key8": "2Eiw51tiYrKBAeDAjhEVV9kZwzDN5zpoHaZWs2xTvQBkuYxTaFPYKunoN5xpWzLco5ydB4GQ97SEevEa3XzgfcGs",
  "key9": "2LCzo1KivaFyRKXENZTGRqYmkECdBq2FY2csjhwKAjMqoskzQE6gRXK5UhdRpcE1MZVDmgz4fpos35wEA3hEb219",
  "key10": "28tFnA7zRph5hnR4s5tKVhXd33QXsgpwNikfdkV7wRFYnuiwQdWr9iBhyvfvg6Vots8f6tiC2i2ciaiPkM7ZFjBa",
  "key11": "29aTuJ13dKjKNho6jredCNSzPnXCX9uuzenJbJzYpCqAoXcxYpjTPrDGh81XhYo4ZPAAuv3zWHhK5GHuGqGghnZp",
  "key12": "5iamyxWUM9oYb8eEQf4YQyt4RAm6JFfgNUPb5NEV5qzbLMEZmsPsTYW5A3r8caEktkryXWXFBAgEfujR8YFQjsi4",
  "key13": "3Hyihfcrr1ez3iG2epecSPn2uYxMxZWLmpc5T8pX7zVFuHWbwNJjFuF1tWJG8JjDjAbXLv5RxMnG6ibr7mQDp9nG",
  "key14": "66sTkvJaPAx6LUDTJUT6UFJPs3QBooBzzaNEazhmjB9AE8RbjovkFC8TQis8XiaL4A5MUAaHnorKjyM2tS5TqixF",
  "key15": "4zoX8rVLjKaCDzyApDKxBY7oWKtAS1iepSBeDmMfW1dma7CgAEwg5TP6hp1j359sRH7CsEyrvf9TMtpHXiKoAKve",
  "key16": "5QuEGqX98wXwn7ozEXq265gaK5MDUYdb5XLcv4HG6dvcdG9bf72mNpYZygqB2ZHGMGhSbMDqAeJtjw24ngWgrT3d",
  "key17": "4HYa2GfR9Tey2ebdFtbvtoEPrFDTSyAJJFw6ziKX2o4ZQLFErWEG7pZ5RifFUoRaeDk3gapJZ1RCnkwTQbfQPRcp",
  "key18": "29jJoeMBhyoaZvL7sZ8CE4w8H9zfKwcNcKsgcoXEyRoFyVGGhXBaPyat4CTFqTvWqN7HwrfDkqb3YK8emaXNthUu",
  "key19": "2KL25s2SdqNArEDq3JPJsWQBgYm7cEDQWEVmtd6ijmcmZuarNnkw7WUc4iePogWEjd8gT6wgczczAPJQTR6iXP8f",
  "key20": "3JnWCEn6B2sHNyR3ihbTGLk9Ne8ox2mEAs3xAdkba3WTV6ZSVNtnUU9vCZSoLxNeusaKgH5JYwXbtpsjSLAWdXK1",
  "key21": "4sBagyJ3FnMXzZxWxRV2k6PFTeZvf9h4U6T3oFHq8Hg8hGy5bbHZ5st4RDmTWWrTmKuKERvHPNZ75WKfGAN4Xmf1",
  "key22": "3GqcBTGov1NnzRpBbwh4hmi1JxvzFNANbUjhybcyeaBv1HcPSoNpJjt7kgLutUcYFrbA4DvCij1aMZAwhv7hnm7r",
  "key23": "2WkYFxTSfQdZMM1iyAKRdMZfahfZYwBB9MKq12DUVy9eg1bgZU3WX1QuKPoLyCNwqNNfAT52jU8KgsHxRwWHqRQ6",
  "key24": "4gNUCmf9xgLduMtv8AqWGr3eCAfV26dQpNaqWZeU6D2BWoBGCFEkufRSxi6SXyKtCZCfFhqhv8vWsyLpt8Nk6Q3t",
  "key25": "4yaR6ZTGuwDPGC26eFfkavoTdC3ALneReN62qopY8cjzkbj8LCcvsM16KmZTBD717WHKH7vRTRhzWHejAhn4yrdC",
  "key26": "53nNvtioRj3ReZiZP4LSwG7fFdmH3CtiukMnKaKciUghXb7Zz9CndcUx6JL9RZtyT2XfbYsgGCvBU21zwmB1MHx6",
  "key27": "24Nmy5AA7MEEjtf5fWD8ZqqWUw54BqQzyEB3Q1C9tWS98np2GFnmxif3CqXcYSkQFA5mptP9sjBjQENaP8xGUDe7"
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
