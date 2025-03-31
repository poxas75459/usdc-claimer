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
    "CBL8UXaee4ED7VShqCxoCe7a6R9nK1SvvoD2sUdgSjrihB7ma95LsgfcCgTvFmZ7veu3XhQR6P3JJ8YQzF6iPJ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JaXRw1M4tDU9vV48wfbfhYtF35fKUdGjWS9M1SxZWoAdYp38akmk5QYW4eGHLe2SVnQGkHd71nF88DG51inHpZC",
  "key1": "54DJx668zb3Lkins7HBVMDPW4jDfv7CCp2P7jnoFCvLRYJpwoB9uAW8N8XxRJ95SoQ2uMNz5QpSbg96RCDDnzeQo",
  "key2": "hvNkP8g62qDvC22fiQytJNEACJGndXZyBHZyDvtLhCWLF6E1v5sBKMTrZbdQHvZukgBT2cv7nNaZr3cj9TQpGS3",
  "key3": "59C8k4FadnyS7UeG4JkaxMGwarfJN7QPHBsusTdu5aXSqXucPEE4eqJdcpFuDuXyha4Vn7CKx7gpy9zhLeH9Q8VL",
  "key4": "5V8HQTpcJzzZDH1BP7EADXXx3z8jY4pzc2nkTj1MtGDjxRkk9dYZpJFMZFEvU3KamHXJ6xuc1XkTJH2TcfmKm6kT",
  "key5": "JfKmnAoLHHNbGksTWWKKzkhpPfrvs2VFKqA651DFQTFGqFKURKK4KeaWjyTi2xDu9Kr6AX5sNb7npf9BbiEC8Fk",
  "key6": "57v2vRMqm79aeHKFcj4BzhHSCrzqS5xVwLX62HGdXCjuEH2YRsfiJuAmmfDfuDmXuDnMgJJQsEDVD6TcEUDD3mto",
  "key7": "3wNmzDmNxZh4PTTZuq48qiz22BTcfNPFngrzd85UkMF2kM97kUYRYVHn2pN3KawczNMnQoFkSq6PXFPKHQFfHhMw",
  "key8": "3yKjfeWMFjN3VKPa3YJX7Tx7v4CPs99kGZ6ezLs6vTUYQkpGNuP9ADJxVWGC6AbWgACe9Vp4aBNomBPNVFrcHmhJ",
  "key9": "6Vcb96Rbmr7Epr9udw9FKurFk95jbDetYf9wf2bRsvTSQgfMcqx3xVhHdHBTtaMMzWy3VwGCA9BRMpfYvG7pVKH",
  "key10": "8zvYW5m23FxXJc8kpgd5pPLtP5j395XphVmGAnoSeCMDs9Ej7iXGb5ZaqXUQqmH6hGMuUV8y3UfgLeeT5XhBUV7",
  "key11": "3R2QWAkHRJmmVU6V1trKp4sqbrVSpAGjYpzeK5MST4fxWe9tipu7imPTx1ArSni5aGKF8omtpypuq6xcargH8DMK",
  "key12": "JZjWudJWAxzihQ3JWDReJfw24c9WbQpMzzrwYPqvC2s9Mm4xx18PSNcXC1xdaPow44eeNzsCNfpBbqQx6bVuWzs",
  "key13": "3B4NVtisSPFGjNDUv7TEThdGYqX3P68grudYbYgMNiARuhPkut6mHduL8AswAyg21bAj9dKhBYtrkUkcwyMcdeyK",
  "key14": "5HewoVJbWBo1E4r3w8PuG7RrGy483pEdX7M2USRMPfF5jYGTFTW28bp3xrxEYzG8MKd7oRBTcY1FgS4KxFYegAtw",
  "key15": "3NoenhX843mxsasJzzxASkqWTm14dFDcKUMHx7gejSN6aoYGCnUVD5B64rE95yxMCaVaoGH6LHQN9xMitSG6r4DM",
  "key16": "56r4ST5NDbkM8jCPMoiSbQUb1HVN4SYxQ55rdDzsAFPRjfgHQa9TeJ4FNuGqWtFaysomB6bXg8NFi1wDm6JuwWaH",
  "key17": "4q7Uj3Mxptr29szfAqy8zUryTVK5ELKBRx2XFWwXujYfYXqyu89UyJZ5eKDaqKQj4qJ9934n45GaDpPcPfKcwrEk",
  "key18": "2R4FWhJjKCMRCU4Niy3xBzpd6r4GLwZQaWvENc7bmJ96u89bPWS9fLv3ut7CiaePkjyR6vJTTxkQAVM2vkHg2t9E",
  "key19": "d3v8RhZ6611vnC1LoQ7NXQBqeZFjSX9Y6ehhLqsMhvsgmV1j8rHZuD4RyXoMV9MQi22332vGYvTAxBkKGHVH17Y",
  "key20": "34Xf2e9R5nzCm7GD38QHJnfk1hPHRK9ADv7TVscfGUHuK3p24AjAZPwXDnqoxXQw9tB1rghFoSMhkDhiBWrKNUd1",
  "key21": "3Fatda2fU5b3gWndNLZYCT13RNjug1SsvQ86S9rYcaJh369sx7mGBvQfYoKCPxPoYY6ZD2X4JJuaaKDRGWFKNSEr",
  "key22": "37zXf1CTvGTMWLmGTWu4XfHoJkWVJzu5TpCfQCzvy7G6rmBMHWBaGWCgdEC1qyXMxY8zkLah3qYzyHpUKM5wCsqN",
  "key23": "2uUXcRyzBoCHVxsTRbQbZY7g4hbfkacYEQgkGHNWecCKAzAr8yS6WHw86mW8XTd8dsi8MrntGUL4VkCH9q8raGUL",
  "key24": "32Yqiyuuqc7rXLa2HUd2RXFGY6emn9zfTFxprD1u71VotGnQuFbE4A8WCDJ2WpM61GEER3ADVR3XV12cUGSybHGK",
  "key25": "3x3CABYTLg5LfgjmA19PeoT9XniviJM8arJkjGbh4rngdDb1BT3T5kXjcMpkKPoVHAqQvXpBdGUUdMTRc8Z92aC8",
  "key26": "5zyXprNufLEnSfZzkqHGGZyHMKTP8X5rKQwDtV7J9Qz5anqhB8nsgqen9p2PHb5uSt1HuWWhSgNVqo6g4hVVvRH3",
  "key27": "XHRRDW3z5sHrjpF1DjQybYrtZfAy7Eg7MEL45vkHH2XVKtMJJAYxWUGzLJLUHAT1RUR67xxc1QmciRJwkgv2868"
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
