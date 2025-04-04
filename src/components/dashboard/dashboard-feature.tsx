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
    "5yaw6BLvdvLUn3WKEgjAoki1Dm4huCs9vCi5ELxZTuM9jLKi6gJwdxVY8gPvro7e48baYC8Q5R7JLJGuciojNBYJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2feE7BFawnRT2qaxQteXVmE8qKnos4SssNuUh5XWewe7GTUqAqJrT4VscjT9aSstbMGn1fniKpbdW8XeQw4ZkoLe",
  "key1": "4sEzy8j3LCJMLzi9uHvoqU9jc9E546ZGUM7VKfTixpyZenV2319bTXNv1FT3hU1bB4eMhiv6zfMWWgZhP12CRrB3",
  "key2": "2FfQtNQNotsMDhMfa8eyENVXs3e59RXwAg4mbF8bSUvVPxXN4w2ZYd948CMUztyg2cZzisWBA9jqc2Jmxyc2bA3v",
  "key3": "D2YCAChUjBejgbgC2dzKfHkbC6tHYXUfHUJ3v1JujJHQsoHNy6BVrTzm3yzSSXMuv2QcA1ZLgVTMiqgvDV7anPe",
  "key4": "3as7vMTgXaP6yGA5nMrsCdSVNr1AxNXWTu1t1c2dxKQGEEqTsBLEBeYtiWqUC9LTq59w1obsBArwikH4tEDorm2g",
  "key5": "27kV3UWXF4YwBFruqUeVYWbKiEkQzUCGTv99dJiUpZXrkqQts7xhFKRhyMk97v6NwCs2kZxqghKjdMohNtzgDWYa",
  "key6": "HcoKgZbeeUXvbgNoqXiFCQaQrsEUjeCffq2zpceoBBsry8BM4avU68vhVzymJGFYuQrBHpZAjhaoRa5iUG5Ho2S",
  "key7": "4PqbJ8aVrVVAbhMfZysvYEDyGFTwzwzALmJWj4jcwcqKssh3fmung5Y9avnfvt99FSR7P2xYm17LVpFRNQoUqmPc",
  "key8": "2MdPjM3EcXsU7mizqR4CFnNGpSYhXWSX3bgRY4opwMHBksjFMpE3p4bzB7qstKSxrydpGsh5tTAxCkCMXL8iVduN",
  "key9": "3koCvrjrpQ73zLVZykPUNoniSnmGJd2FPg14pcL7RzjkoWRekc3y623r9bofjAUXvyZJ9HncaNaEbroEYDqsc4d5",
  "key10": "YnrgWSzP5hURXbVSftamhqv3yDRWPejjiUVPctYkSPo5tuV87iLQxdeDm4ZRs5sPZMZqDLp9WAYWq2jGDrfmDBG",
  "key11": "3hB3tzMrUZXapNZce9BHUhcWgdH2JjaAb2nvukxj74nEfsFu81JjUboiMt4xCFUibBtgbXKncoA3UWSuTbQaLk3x",
  "key12": "4dUJNFDWU4NfjLg7csmXZuX48CDnKVthTkBiqakAMA3m3gnKDBgrntEm9Lv6eKXQEm2oc19BtAXdKT156sF69iJ",
  "key13": "2dibqxwnPh99fjsd8ki3jCup6Pv9mP3sVDjRFnFThkyUtmgTwyfe6T29EPoW9ppX5tSVJrds8hHxAJXd8F8p6KNC",
  "key14": "LPM1eZwZmK2pReX8zxHq8pKA1f4MUso1h1kUZxg3xjGE2EpDFp1fN3UYVBorX8iepYB8FnFfuvpwHvWThLnP9Y9",
  "key15": "3nAcwgrBTNEwaftAp1gf9T9UVT6S256oGp68uetFk6HVB5pBu6WNUoFZQfxZiChufyU8CLYpGy9Kj9XgtoL4e4Ds",
  "key16": "3tCdcT8hbT6d9bKuckPnofRwwTNEEMAzuz4Crhwc1btnteqhtDePWzmPyH5dkd2PWJ3fxXpCNKxAoYrp84S51Kqp",
  "key17": "u5nV9XseWBmbqXYnyivzqiCeCj4ZYZdtsegeJcTSBg9qDQKL7NFZs2HZCX63dW4t7QRDNRCirnTnRWNy4woYhiN",
  "key18": "4xTvyvB96TQT8S28TJvYA4UXA4u54KcYwo8FcEbMBA2dDsuLEdbA8xTLXsaaf8BXoBDjSTw7HSggpb9bT8DBb35F",
  "key19": "3aPDtCnyZtfYQVEGh1syFohh6ch6ygWk8WVYNx7spWxXNCJMEnWQwZx3W8ohfYjJN1q2EXfyaGgZ77B1wkA6fHoB",
  "key20": "5YjhkvXfAszyodvLFAkd4NK4jijnne5T5Bkgbi55cMGyaMhZgLUAWmfr2D4in9JoYA8Gu3yygMcg3sjAvxQe6sn7",
  "key21": "5Sraeak7CWmruCqLEYhQB27BxnQ7Raw1qa5Wffbuqvw8Wwr6WS7C2HCZVdSjT13t1S41iwTDWB4uJGQzeXveSeFQ",
  "key22": "5bKfF6BoHmr8U5g9MLW2VuVkKg2xEGb2Xa5GS1P33UXsoajt8LAJqkpiGxqnQtJkZ3X2W34S31dpvMKzLLtdhww4",
  "key23": "4xM7ntFeCg3NRuKhAVDrCp2vQKLWYYUUySeUhFRhhoSLZCFRog5oFLrrUCRsE1TrJhnabQo96fQV5j6uu6iZ5R2S",
  "key24": "2YcacTqmCH3gTXzGZn1fb5jdkHKvKH3d8ozArVWDb982E1VQ9YNfJyK3ffPjFy7qJ86WVpoYAS59Nceursa17Zpq",
  "key25": "5UdEnNntk5AErwPmSr3Z57QrG1v4iCT4LxaVic3JGo4zGnJCyqymVCw9teEAoHhr3dPYefankMxSeG3a16Y3zHtb",
  "key26": "2r1Exw1yvKVB7AbRbeyjh4zGkyQ74X3c2G8BxXcNB2wx8gar8Dvf1vLoEpPRGMzZyzh89U5iEeoyW9jRY7CcNNNX",
  "key27": "3EErkKqBwvaLaFLcR9bXfk1Dk5TULEmDrsu7YXpugD9Ar2FBTgtCucntG5VkzWRhxp6cRLqSDHdgCDMjUxd6iN1n",
  "key28": "4QxJoLHxyJiowmMUqvBhRS9penpUxpY9WWgd7d4ZfVur9uejqbdszwakDVc1zy4h3auJ7vDPNf2v4zdXsqdD6ysJ",
  "key29": "3pUpzGc8y8eimXN21SW6mktxrBm8xP8sLb37675DS9BFYf3V52kP85Vb72Rk1GCBCXZWFz5ArSEXHcdmn2g6tdyL",
  "key30": "2UfvPCjc7RuVmqEy276svTSrPNDoodGqvP37RHZ56Nse8uYBgc6XjM1U5Gq9UKsGPd8aQnpjA1h5iHgC2VYTdT8y",
  "key31": "4SD62Pe7CALYRE3yHzAz5TUsfv2UjPuxzwYfFVjSt75Z8kbPSfrbiopHDH7buJDAfRE2ueX13jsBtVqdZFvvhEun",
  "key32": "3Cu64cNfv5cWsyJ65HbYiAr7wei81JkLFQzyrSQCjcZ1R8j7SVCPAS7M2q8qxaufcNjG48MYsiSMieZNvAbe3unv",
  "key33": "8AWFJ7Tu1DtdCqC3LE76bgSDLb4hZ6QD8BDts23m7mLP19jj6HvUZ9Y317hi5gyBghwU8FrZ7bMgynLAC51RH2g",
  "key34": "38kNoGzCkCp7mwhbjkcZTshYYAXyvQETnGZLXbuUDWpc7udJqUVqHNGG8vCDc6gRQJWTHJKYwt6U9oFgAZv2e31U",
  "key35": "DmQfKroDpKi7cay7KpEWHQFPuSwppNfaTHn478uxvacFAxQeNsxmWnPTMJLcqsmkmvB1HCnJifxb6bwJvXr3dCq",
  "key36": "5TsBDVADT4UpQU3JqT3Z77co5mCnfKEMBaoPnJrA2YFFgU16C5qm6yPp3TpGRX5auFzGcbchUdU9gjEzG2Wo6DmK",
  "key37": "axzvbzLhUw8HrgTYjsqdjsoM1kbZ9sj27wnLEYXMXJTNFzzTFj9Z8iifxXf2UALXeYgdtWYA4zc5SSfxewFWQLQ",
  "key38": "4ZTZ7eTbin1L59NmQnEYYh6cW3yPHxBPso3TXdDnpytxxwAN8Wqkc8jnkV47wkrSdRATNqFL4RsRHafBquqSP8XW",
  "key39": "2phRAZwMB6GzFVp5BJbm4jyGvaXuQArSEky33FuCkPx7VpEAenq8mPc7Wc33BKuc2YwVMqgEYcxGjaVBUGHhNnJc",
  "key40": "9FKec35FBgRro4NC4hYL8cHjgCPEYUaL7jKb4sRarKZbV4o7fqg1RgGWf9FHj2Yoxr17znMuj3jPLskQnK1e279",
  "key41": "65PYF5xgX12tmJV7bWDnhEBa4B5gifJqAjEDHTNdEQYqWReqVt25Kcr38BT5mEzEgPfSCptDXE2uEJk7MwZiB1kK",
  "key42": "2M8Dh2mWBA5JBYFqhDcLw17fqwCq9aUJwHdQY1EbmuxJVRi6g6AkWgvzqJgSTA3tMYMVSUzTLmjAFpzF5MWXPD3e",
  "key43": "2TzjC8QC1nSVbQ2yYxvVhwwra91wS4GmEaHfv9Xze3GvsaHrJwXhE1Vx97PNYeH8CwuqqsL7yDK92TrXJsWZRnGF"
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
