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
    "4E6Xu7YUnzZr1YHHPNShq7ajeLgmF45K1CeSsYTicK9LjiyVRH8nNhSYKaef7Cr5v1iCDtBiap6geyJci9MBMhQS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rhhjZgZyMcrbEh2jsf8HaPdsAdhzNQBXdPnD6pmjvufJy1ZYEbisJ2LGBeuYLFxxWPjdxLqL2CrW7Ev7uvViJ7J",
  "key1": "vcVB8wKxX2Uyrjb7EBbxMyAU4CbCFEPKrNyRXhWYQfY9EFru9bFwEFHepb6G7hcquEtgPVSZvZRwTc13fZRdL3A",
  "key2": "5rcijuiC6foScRaUHSqEnFQtt4B9AGHXcseuEzgGq2UsKukEkXkRSEDSDs4GNYJNUze7Jfq48F7vEWB7dfteN6b5",
  "key3": "4jJr8BCjviTZCVKtEJEWmKhUFc9kdhyiFpUwRTctY1RfG2U6g2RAaygwEyf9fECfBvUWdEmcaSvuNJ29uvyq78xu",
  "key4": "xaR26JRNRtogweFK2cB33swWKGzxUiqC4wC5mU5Fpgekaq4tXeWmt4qXjp5r8ZFoGjhpegwcSSbis6WU49jrfts",
  "key5": "2YE7Vv7huA8wJj71hjt9NvtPuAaX6g9wP5VH7gq1geq2krQXQeC9degqRHmWJFzsKa3fYc9dmvTEGcmowdHiWctW",
  "key6": "3Yq9gAgEgdLPMmbG35egtEjVYiUkkCM6YL18tTMUDnT7iYTdfgqjR6CUdpkzf4qpUikdZwyfBrtjf1Ag5v5i3GsS",
  "key7": "41GWytBY1ojFfv2w1nDT2xxggsypZ1YUqrdJygn4sQaQ9rj1n4Awm7Eruo4ndnKTPggTQAgGWUeDUm73aMbYqnVX",
  "key8": "2tKBUixozhmfZZNC4RvADpwdDThqWiNQqLaX1F5JacGV7Bme44pgde4VMkixkYv7ibhei2TpJr77Tdywz3791SxA",
  "key9": "gjsKhUXhyzptTnQRqR3jvuwxXQWYdGnjGKr7ek5DsQnFdmkv56NESDNBC4bo9LXxQzPDJJVC3t2vbFmj88UP71J",
  "key10": "3oNg56qPxa4KMN4q5qbDjGyRd2B2XTmPTMKSmmjv4Xfo1t8fdAx9gra6h7c5SudS5xZokdkw91HpKTRkXHx74Rhr",
  "key11": "d9DZRnKT6BBxVBdmejJZWQNcyLXEZQ9URurDA8maadBn4RcJCszhMfSCywyedZmdZYtDLkr6GtirxbbvbShDW3R",
  "key12": "dSakgbAY4hCi3KqFcUPWSn4qLXURNoQANXH6VLP1d6sJ9qEN7ymqMUZXqhBV48HxkAgTDwascE2B39wdJsV9aVx",
  "key13": "3cCoKS2kLwZNqMDLCJvo1a2G8KsrM1M7DJU4RDyjCp3rfvL6X6nDQiSeQkk4yw4eT7RDL7ZgQguLwYuA5MEsmHKf",
  "key14": "3Zc1igf1QKM4iegCBZ76QxV7GE9KzeNauuMnWRPguAZgQskXFV35vh74EdAMxwCvUscKTehaeECA6akY72UPFf4E",
  "key15": "J4qixaQamCt5y3mtWmU9m6M6LYqTj8rUGUMNQvwsyZLRTQwYhmy7nKva5qHUDScquf9YJfSnL2Ur4fNbvJKwjkQ",
  "key16": "3WGxEyCTkATmjwsJkSTWoBx4iS6EmxTzHAE4XFxrgCr2JjgG7wwQtSn1QL4M2Hj1m2wyusDFncGDLaVuWX15SCPN",
  "key17": "4R24VFa9Neh2Ec9Ytet77dPbrXRf4sdYHAvnKfmsn3akuzKWUNFxbwLFERK41QsVwXAsMZx2XH1hz1aeqovUyNLR",
  "key18": "3xdJm1YckrxfVHoGN3iRUZF5qnBiq6usEZJA44rgCsZBkTsdLsZtM4VVQhiDAt2PKWqRiVThP35DV4a733YGxwpg",
  "key19": "5Jhf6HpM37ADrCkj3cm6UHeA7zYFZG3oUgWMG5M5QQN4ahGwqVKnGNbn7jY1tjT8RKYf4BghAyyTqn1fVqqGiDPq",
  "key20": "aSECui5657dwY6BP2Dm7hzW1oNJsM7gcGzFLRehAieHeSMSajd8NonyFsffih4GR75qj2TzHJMf6MvzBmbnEeNc",
  "key21": "88ueAhZY3jS4enrpKHZCDw66CfXGjAWpZieKCLZdWtwQi5T31vja1iRP6jzHvxwvB4XAFM7e4JqVp7Q9nNosPXg",
  "key22": "4FZG8ft1Dmu2cc8CikZ5Le3eFVhfMbTu82sU9k8oo92BMXxvNqqz64oBKVQv7bGVkXpigLPZ4zdigHXymyzvgSZt",
  "key23": "2ZGxp1SN5fNVxWts65aWG9vuDqDWx9UaxfLL4ZR1dck711UhvT9HwafqcqLZXzZ8y5dhJkN3FgrKPbszw2Fp8M2S",
  "key24": "2t2jfcVS8XM3ZHyNtkF5rtNvhg5f6aoGFSLYNLFjdnbcPyQVRPmqE6E3Qx65gB7q5oaJVHzfWsqzmdTNq3KXPzhn",
  "key25": "5cwpdBA9ssRkpG4c81XcbTacpjZTL76GeJdHsVYVMCfiv13kkiNqLdDkc8oNU7x9SdwTDFJqsuYJem1VfZXWcGZt",
  "key26": "4RBrAzEwm8UAPZ74RnPoDUUe1AAQjYs2RMrH1xH9j1qSYuqJA4Jb3PefcrGKfYDV4NzDCL5GnvijnZT6RwReM2Yo"
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
