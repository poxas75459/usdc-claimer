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
    "52495zN31PGmdR1hMzgcMTyvx6dg7XfRw6v5j7fJ5earnwonLNTzwd6GyntC5bRFX6avtFTaEcmZm6H4nvvkLS9b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CJw8EgVUjBbpxaRroAboqaWhuYRGbFLGqMCrntFKfS6dLnJS7cQjkixdTTorFYd3VpvANqXnqhhRnnc5EqPtGfD",
  "key1": "3p482RQ2PFv45QQWk8Ms98qhsPN6j5yJXbz4QRoUfCJZWUu4XiGrhFgV7aoRgiM2J9daKYCXvSH3PjpCwSW27ocE",
  "key2": "53fX8zhd63hNSnwEEP8ecUCiZEGZr3oYkLuaeMgiiWkSaXBBuoKfb6mccQx4JDRdoQrt6Whjbbfh6jXFN7HqaVBb",
  "key3": "2BjSUdTvoJbiH73GAXYXRGJo8eYdpxyxhoAbLAZHG65fjWcW5VWePJX3trjMeinoNTLgB2NPZNYpwYH4apQ759Z9",
  "key4": "21czWVU2KnSu4ZH6DxUmwFouecmJatASZCutGsCh2ZzWCLMCt3SRYJhEM2awH8roC5aZvbeHpys3mMzoSCBiSzUb",
  "key5": "5m5NkjRLAKUJCqCX3otstENDmDeEFybFDxb3ni8DtCRL3r9n9ncEPsAQS3SrGjNg5LjXsJfEpqmyLMLACwTqhbx3",
  "key6": "4jUhaq2PuMt4t1sFyNa3nU68X3X5Pn1vGP4ig6oe8k4rVXFDSNyPGigGEhMTJNKqU3nToH7QYbTZmbTKasFuyY3S",
  "key7": "ahjWA2awz9NiyBzvMZG5pbMMAgyccgiWCHs4mxZTa1YDQfj8pv9TiCqpGGVxiiChdNDw9PTNRT99NSRp64KCo2C",
  "key8": "2JA1AnKK3S6P86P2wfvXwQ3t5p1SiAyttkjnynZJwAuzR2giqMHmSqFnaUzAHafTSeCKD9NPnf8DbsKg2EW88fV7",
  "key9": "3W65j9hxo9nnjsBqh3TFXwebt5e2yX7oAJEaH8MH41922rFi6FZVRWstoYEXWk4ZmArStDvwkLg232MA3HsVeSVK",
  "key10": "38BjP8RYckM3aLBPZBRGr98WjZvwrxKUBmM3w39WaPTWWWyYqPW6F6N92RdU3fooCR6DJnSX5br1aepPtZ36UDeh",
  "key11": "4gZBdu46XM75Nq4GuW6Pa1vtgwxHLYtcadVhMnyH5o5tSt7M3NtVSDNvRt4AYsSZLiPLqTe7pixkc4xntXCxaL2T",
  "key12": "624DeA2JwNwP1hnvFVmuaCWzwTfY77ptAH447PZYQEKmsFLHg129eAnxTf2x71Mya632webw5CMjW3NUqe2c63Lj",
  "key13": "255BGaaVmiUZx6X6LeqNdzuupgwfYkGNd3SW5yfFkvEYYpybR6KR6PcASPzDAz337Rob1qdqeCMKCcZmDYMPZc77",
  "key14": "58TCR6s9Gp3Ywv9Ymzg6woV9dmQzLkzXzPvHEVPukwjrzPZJFi49pX9qYdmdrRxiVSmnKQSNLZBzmvZ7h2fj1znc",
  "key15": "26gvk3UXVbSiVWRYrc7CFBvVppNi8199Sr3DvmocpEqRTFuMzW151CsppfG9eYfHddQMZP3kdExYTu1vhWRMSV8s",
  "key16": "2zvsXMN9ysqKLj2MBwaeo1rgyMi8iFL32jwKkGXrREJkkGyJtgSra1aQ5JqY9Wap1eXfxoyeYE72btWUNFA8bMeH",
  "key17": "26s2149CL8tEsr3HKzG1boMBLSnUj7BFKL1zeDMGaXAEfBusJ1Hx6fPXY4zysb8e7u13goDZPHFuoGSA4aBCGDUg",
  "key18": "5wB7hEKhnoN4rZ25PYtZQA7fZxVzUkmLcbKBQnvitughnT946Uu49kDHLy6LZqFXavPiihoXKYudTwi4jVaxfFt3",
  "key19": "4VGksRwvHgTGRtt5Q2SPz2QBWZRya17FWJfce38VjVhKEmrKCvjrzYAjt4ts9vAxvr2vPJUyfmNHMskXfKTidk9A",
  "key20": "3cxrqpuv8h9gp93BnidzzxGtzXVwmazuNiCZPgkWXcRk32yp1fhysRsv92n5JyJTpwEJDn9obkPtVdzSBXJXsGnQ",
  "key21": "5ZSEw7GLM3VYDz85tt4uc2d5hD5r6wYSRqyjnKqgwYK5eYd4qTi58TBJfrfMeYKEP7oikRBWyD1TbmKKpssUDaex",
  "key22": "3EEfTFFqv6QLeEdWpAdQ71iSirTRmVksNcdri9ZfWV2RCWmJ7Fbbep2FPQ68Y5CotEJ5EbMMhKiu4PucWs4Pn6kC",
  "key23": "5rKBNg4VdUBjEUCWneKnuWcYP9P2ugVFMLihf6RNQaDZkE2uNuYpc4Y41Lv4AQ1nkBE14mwdksWgRj3S9G1LhiTL",
  "key24": "3GtqA1XMuz7QQd3r6E3xwBW6PZsrSMokyXthvWhAcRXxvwnKWKZzZguTr78pWjjJZZTCqDwxNxijC3rjM9Qn7VsW",
  "key25": "5EBfhagkcpyzdzKtCcVmyg1gQ1piGtk59yzmSJf73T9UK5jyFeyi2YExW5BTnKgCAa9HgqvxwoLyy8P8rXvoUFbN",
  "key26": "21fGb6xpwKmGDjoa97kz1XeRuPJRvFbQ1WeGjRb6Fk8ZtgmAM2tv8cqy2gmRdbG85D3VWBiMb9v65XFpxPLCakLf"
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
