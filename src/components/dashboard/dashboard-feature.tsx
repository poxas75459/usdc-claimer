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
    "2etUTF4WjCg23xsrTaWWVUDkR8RmC1bf9nocdFaeECXfbD7UB3mwrFw1oW7RXwLeP41PXA2DR2rKaYbmxLBWuzWR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ELH39Twx2Qix3kseG7gF7Bg7wLeMRekXvvrKmRM4cZbmNhYjY2tFnFWZfEEgPqbPrv1SpJLTs2BrHnkSiu6ncjy",
  "key1": "2moPpBLHm92o7BTtGb367HfHvZwswi7wfy36m39u6unT2HQbTtpbQbUyd7m9VgAYh9QyXeuxNWdcCXdzZVUcXjKm",
  "key2": "iRSH2N4GbT1XPkrrsCbS4F2Yxyu5b5WQpaSnyXNmJu6T4p1XS8RpDEFcjiwjLXnevtJRtz2kjNm71GEEUAsdq18",
  "key3": "2qPmr4Hd6WX28qB8g4fiGiiqjKXEGkKRiDZWLCeuYXrx9KXFAuPEq7TcxAMTqCCKHw3PS1jZ355ikWzwnwQg9icU",
  "key4": "3N3pBGbsnrvX2YwA5zTP58eieNxF7yNLzKYkGZ15tgBTAtNr8mCNqLBPNewqpmt3hJnzREUckXEaNmENUwmWMwmG",
  "key5": "5meLztv6YAvTudsQ9D8Y7GnPvaLgu7uXKYLVPBVyTFzqRE9txYt5BAGPM2CUwdc8ug1qLW6aXnbBPRnyu3bTnpM5",
  "key6": "5fGkU6PGiMP6itE5Jw5McMvHFwQTqrKsDXUV1JUsBwKM2YGBDnKacJsdJUZwcxWN2EupEbS6Mou4fXXeBZ2NCDWT",
  "key7": "2DmhKSqg5YKSDWBqrLbuXVz3SMKnUgwaQyAmrHBhy9BqPm8Nqe1zXhhXBxxudLTPPriFZLq4X2zY3RhAbYCuNzYz",
  "key8": "QkHk6aJyDsQuiMqsxtEGEws3Eg1o1Tjx17uH5VUhMAKbZGua5QGQ7zMNshMnR28SsvvD2MbVQDhhMdM81a1VkhD",
  "key9": "2MAfrH3445yEbLMp3vfQuHQDt89js4KejPPbaSpZxi16juyoVy7viaVgaYMyuzZYTrhfKmLm5zhMzKYwswMUxoZr",
  "key10": "5UknboLkCa6TB4ACKMEdwjatKdoRLsNzyJkU3S4J6Dbudet6bFrGM2rM4dm6Zz5J2qQsWPbKNVoC5sqjMHWwPVgg",
  "key11": "41UEyq6MXSiD1RZhzVG2Z2fsKSydqkKyNPN3JsuudP3D3rhpZU5BaKayxBhqb9T6EmyucDafyj9q8gYYRPZHV6bA",
  "key12": "3d8Bmvpzr9KArUWR3AhQ9WJPvGyzerT8DwE7X6ohFPNHyRgX9uuCvYDHi4WLhAsDT8Ve1Dbj2ZwCLPoVQqRK65B1",
  "key13": "4BrW7yLeVAJgCviEVwHgiuzsVuDjm7n6PNeNaadE3i35manB5zVsMANP9TpjGwmm9LcsXvaBn8nJaA76MhGtvJH7",
  "key14": "4DjknXYRVwmw44gY8FpVoRsNyVqYvQSWUnWmX7vDo1EksJswcdxushmjJVL9jKtA1wU4XDiwqxW98rZKfZjx1DX6",
  "key15": "2UnUihPmhhYAocRNghkgqkcmwZGe4939QPUmGQxJgkfGWYBrTusPAzMTx2aQm5WBcvP5skx2wYZVE3YuH19Zp2Jm",
  "key16": "2U8vVz2MkhDYQNzMceyDt9cHp8Rr4MUQd3VE2XdrD99XdJt2ZAFDcWuPHXoutEHGZagXapvixC9Mjx5LbW6wJC2k",
  "key17": "2k57n1bg9tv4FbxyvKTNKeUvsfyTBZ96LgaN7s7U9i2Sgun3QvdiU7tRJR3nQZapWhFUXYoiXFZUUfMaY5nXo4zw",
  "key18": "y9Sc5Vybtbc9iKLsRCmZaHAdqj1mFDFKFDbwhK9jg5cEvw5Euk8Vf2SpDEgYiRC2LZtMmuhUJWd366wQA5e61R6",
  "key19": "4eTECj4DX3TBYZ7qneD4o7AaTvFD4QTTSUeCJSpVBKe7AySU6PQoGo7MKzdT3SoqVeyo51yXSw8rt1k7uNXsgvQ6",
  "key20": "5bFJdhDKtvHS1w4A2bxpHQowuG48mU2sE4dWgyUfb2zsmHSto96cCbqAefqWA9iJVaT6ANx1957w2k16XkzUAhE7",
  "key21": "39fkKzn3nqpMwz6Y1xYXEMK8NL2CHJEZQvpNaEGbZ3qxkQQGdpbeRVNFnn8aGP5QXxBRYEFGT2WDte6EBxyesxwc",
  "key22": "55kGy1ZYw1F255ZunvRrXZafrkuhzrE9o33vgd4Ee9CdS741cHJMyYmRbm1XsUivaEU3JetMToyssyX8gYBeTuEg",
  "key23": "HCoLsdXMBmikM7UR8bnDhWUJoGhh3UWNTVRpw2Hn9UUDntj6Dd4F5rT65x8BRnEZrMgvpCwzyZmqXZ2UoMJziZZ",
  "key24": "599FvjnxCaybH6BTB9Yd5BZDD6izeTypYzzEs8xhwRRqu3Pb1RcmY2qZaSgoAN9LTrU8tqK5G3qydYkYTtiKBk9z",
  "key25": "37DiKPmN6RjpCf14SFFKAy5EH9atS3s1WsbwupiHmVjuz9nyFWcJ48WakDXjRNd5tXCAfURiCA57Kr3v5P2RZFqo",
  "key26": "rsHSqr4EjKPuQhjvHaVMCW4oqMaoFquMAqiAVahGc6ATxfq3nWJ9eMuSGwkTYYzC3m3ZkAcCdsrxzWPo3165JsW"
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
