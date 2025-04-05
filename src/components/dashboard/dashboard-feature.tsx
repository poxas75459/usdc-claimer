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
    "5U4fcG5F4T7FoBi2ACZcHZQ6v3e22xrYtMAmWrGX3iXVfZ4QarDsD21p7iQSmm4UprbPxDyBh4eaCvNpSE3DGEJq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dfn7dyoj3CxkhFfrfVePBi1k5UfNzR1Rryp27gpZWGvQMRMSg6totsMGPu7yCLXGJTmseGUtGqkEPduD6cAftTE",
  "key1": "2BDUeeGBXMRLz5LcJenuoW8daHn11woXb2ZzWJvDKzBbgbgoGhUmrutco7HZmiNMKgiCMo5a8gEoifDjrFiDhQQR",
  "key2": "5sV7xUxF7994zMaTdYDHiKV3kzWNrcMBWa4U3ZCv6Am2PYfRPrfju53vnp1DvnjnTk3T7r6JziFeX5LGQAQfzoYW",
  "key3": "39Ju4DALXoFbTXHQA2FhcFQNcyMkdvRwBgHhtQt8auChBcxphrhzhCV3h87dRjLW6Qje8NcT5PqCic2JSdPB9vNF",
  "key4": "217TZHJYMEF2xvzhQ7JVkJxtwDRgkLgf5pgR2p1tqiWb49eHBJAxXZcUgD8yfmgcLUQVsuhpwEkAMcgprHgfSS8E",
  "key5": "FTYDjgEM9q1oU45caDLh1tJb7D7QwbKGfPHJodzKYYmS3b2s77nsW7wNqyNDoQjWXZaybxeQrW93k7MTbsrbea2",
  "key6": "rDtt1d9hFmKrpgq4qmdnTWCweCZqV5F1rbtbaCLQCYAvUAQzZkQfos9Qk9u24uyx1N7fGBwjVSzX8YDoG3u21EN",
  "key7": "4eYfGctDhc4fV1z1DzkLKKrST8TLbaqjySFwFknot3Pd1UavdTi3ygQggnkfcvkbTHandNsx2mjcHLb7PtwLZUse",
  "key8": "64rk54ifKnVGKJmdD687aWke7FFE6fkg36XVyEpgxmsYd7E971U86yf5QQmSoWSapgrqn2LhJt2UE1uSHGz2V7RH",
  "key9": "qQJPki9zEcGm8BHhi1tWcRys4Gp57UE4KMymbNYnFTHZS8SjLRxypVtESAjbG5za93A1H3BFER1UTAcQLLJwaE4",
  "key10": "4gXWMcE424ii964KRHfRZ8o1x8KVDb2gQ3sDcDUTX5Ub4jUcnZZUe2ANshvAprQWDy2eaZFhDDoq7Xd1qkBpsnPB",
  "key11": "491bjGA3ugceN55b41uMZKsdab8B77uDi1DcVpz7Sg41rcYZhQMEB8i9XMEUghfwW4MWpBvdnNB4yhEPa1gHDk7R",
  "key12": "djuYpRn5MZqUcD53CkanoEcB6TaqbqJokLPSWQ5ZG3yHUwJXQRqeEDBr4CJ6RW6scwA3Qha4UWUD6f6PkDrdphg",
  "key13": "4Fijgz3g1kPoZU93iZBvJ1uXjP5LoCsZcL2ZssibrrvoGhsf62866ixN6ZUyTf9yqoZStwY1sZrFxAZ2QtGAg4yN",
  "key14": "4vfremaSvEdWEmbuwS97HYwF2hgng4JqEGgc4gsfaRfGokSJrepk11Bqpvw5RgkqaxT5cptJMD8wjrvoMpfcoYoS",
  "key15": "4YYp3qfmaTUn8dQuUBzS1VCJFE51NfNZjKuEwnHVPwHT4K1GG7t7AmS4WeFoZFuVR3bKcb1rg8pUUHZfxz3PYw88",
  "key16": "Kt3Eafv6CTEDbyF2uwyMZ4LrL2fdzoD1fHSWqXKme4Ta6pf6VrKXtRWiVjXXzLVSg4XJdWXCobLhUL39QNkSVaW",
  "key17": "5eFbMBgiuzHgmMse4QvMaEzUwxM72y35T1WQeXcJ78WkkdFFu7TgtoR88ydzuXnB5pWyMkUCjHrhnFGHwYvdhXo9",
  "key18": "2uuCeHyyC2cBfveCyTbjZndFGvAfcQcZiWUg3nruvc3GVPN9QeJsd4nN2UZQKWhHNHGUaFDa2shtVft5SMNHUMKA",
  "key19": "3NFmGmpkHFdHVwNzpPqjCgm9FGrZUQxaHyFSkpkMMUbrYsmVd4uyF2vXpipDYM8aacs9xnfzVsYMHwWaDXz3zr2a",
  "key20": "5Ed1ZgSuZRpjhyDtiJHjPVfiUKwD9iq6ZzzAkTNTgdSStSGGhQaTHhJY5pUMB4xrGj68s8ZgBSmgXQwFoSdZhumg",
  "key21": "47zXDtx4nSRYfAYoG3QA9iqAwQFVxAcDbyDADatt9rfLFbQpwaAFHd96fjfNb157pR3Hd6pj6WTNCqPnsMwgTL6e",
  "key22": "46fDWqVZvcJDo25RYb9TyUsx6Dq23oXSEELTQ9oPV4kkhHr8ftBzdV6uDEzSPb9Lo1UNt189pDgPopSdnVThD2gG",
  "key23": "Jk6ejBTtE3agwwQUbUW7sPi6ZjNUSFEU7YDjbBacsgDeJZbaa6UWdUg3jNJbiwYKdqBFNw6kKVPSxwM9tuAN4dn",
  "key24": "2sVV1b5fwUqUmrhk7svxxSJWuX4utLdfWt9Ld8Yu3R9Huvr9RmMdMqbeVvUur4aXqS1ArTFyyVhni1RppbsdgC79",
  "key25": "2WDN3Lg18Xbj3Xkk6PikjG3jW8ztZ186XwmqiGHRWFHEQJfoczPoEZfkczZD7YnXhs8nZzLaz6DZp9Ffps2FSJbz",
  "key26": "3nMnU4BSb1ENoDSUHipTEPKcsTUuesXNNgCkvTNBZKg3cqrYe4CoPBVBxdwa1AgJWYyY3LqDmRGVzhM3oEZYNRt7",
  "key27": "2HP7nSmYZCuJyZTVKxErfjw2NqBUwdYqkboDSpT2Fr6JAgzdTftFXmz678wA9MjWGegqqkM2ccwUW27xCgcAAqCi",
  "key28": "67QNJENR7G79f8dmbjwSfW93mMH8Q7h9ww5TnDfwyYmKLkBfL4oj2ShoqYUSKhGEBtDiJsGdvyv8oCETvh5eA2mp",
  "key29": "2M8Ay5HPmpV89XfJmKHwcyAY65vS7vc7FHkeGv9i9TPCwH64eoVRXXLcbicHQdeLLBGBynhTsTy8tZkqU5j9sZJk",
  "key30": "4ohwsuSJsnh7hm1Bvn3uuMUu58wwd39fcvdt1gdwHRyoZ1x8JykGFMxVNJEtcr9sXFbHigwqGzCSpoDHZsf8Sn11",
  "key31": "4UQ1Kve5Ppr5akFbMLPjFjx4TMy1YJz9ngM2kApkVnBGWPURnF3JmsM6jENZ3BBgkZf2y9ZXhTPs5nYPA2kAC658",
  "key32": "512TRaAeYe2NEHGjqH9tyqfGrSFR82pKLR832BeRgaZrePJoRz4pv9pN2RSihxp8L5FZnGnRsPpkNB5zvhTGPmcT",
  "key33": "5FsizziHv1HxELA9gtuQisQN7Ljg1eXGSJeniBmPv4cDFJzDqboRxAnvAUo3bpV92tivL9LUxtcCfEJbEzsJzVof",
  "key34": "2FgunuRP9D7NfqHDPvcaM8GQHjrx2yE5jbrJ5KmnE7GnVnvxkQwJRf3CYFFtiAP5aDPUXQgFpbvxQba46oAYD9yY",
  "key35": "2UpgCe16hbr93vKNXiUA25nPdYEvQ6sPmyiJ2CAqTv7VjrVtNgM4GcLRTXK1Jph3Wdc1wZHc9W3yx6hiJHQvGM4h",
  "key36": "5VZkVSJ7sCQD4R1fX1b3ecHpxMFXVqyh6TkHy7vrKhwdopYM8WhsNFCKNS7QggB8EyjoyRC8du2rx5Ce1NeBAUhE",
  "key37": "5j8EesAi4Lp8EvrVeieoh9oHmgiDYcMNjgZ3RYtn8vYsddLuL5jhpgWU4UxTdWftBFgSGzZgjWW2JBjdAy5hkEMZ",
  "key38": "2evovikCgwFXGVrbLYQGrcyVXi54siJXZhjEfoLDK9Rrcbxnr7WUneb1XF22sgyx9vRNv1WagyR3ZYYSFP3bUMwf",
  "key39": "4R4i484usJmFZfcTG9n34N3vMmd7JnXoB7WoSWT8iwUnMFaduVrxPs5fqehX4Ac9Dfv4F3ep7cHph9keUX2cDDHE"
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
