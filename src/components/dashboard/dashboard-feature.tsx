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
    "5VXZU6q25jxFewQi2LrqP8fAbX8cdXWBQsfNanh1T4xMtfcxwVxB1g4taMVw33pUFUtfpsiXgzShcCGJkUhreUhZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4syXaG82UuKqrgFXj92QEpigEUcxXay1jxk49VPPymm4YhnGAeJeTKjTcTKhW3i8KtUjLTX64pXRANpcYMm5YoSy",
  "key1": "2FMavokV6if8e5HEAAnr9buX8f4F1oKwy6rgfgp6BCp1LBPhTbqK4zFq9UuLk5a18sE4CdhxtBcTGXtvKhZVpMrX",
  "key2": "4DCGFDKvCF6NH54xJCmVZEGGmpwm8GW9586pGvf3qffdmPgmvUHYiU7Qek5wy35q4mvuRou7JBc3DDKygUDxcsHf",
  "key3": "3yySc8M45T8CXNA5zNgFXkmMfdnQR1knYcrrRtZN4WZq7ktLhc2ZVqVNc3oxKWfQsV5BvuHNbGsdvRQboB7HVuMQ",
  "key4": "4KDaetdwfW4Dv4QGrGJ7msxZ3uphm72NLgARVz8WsAHTHUbyTodAw6HvrR3qV1mTNQmgp1iqbXbq2ntqLvgKH66K",
  "key5": "5EXB183bbavkSFrkdS5KARChhmBoLLhc15duAiNjbxyHhLwtQTozHg5biabAmJXbaQgrsbdhj9L1iy2ADtEGQwSk",
  "key6": "4SrJFfh7VATCoyspfyABWf5LxHQoUX7kVhMHupjZ7zGQLsmZF57bLHTwy5HuhkgcS4uc8F5C2pE7NZotzcx126ar",
  "key7": "3PbG4jMCdjh6ffbNK3eBiKGobXMhcV7AMWLdX1RP2v9SpwqKEXbB61zqinabA4KkPt1sTWV28oA17g92w4m7NBy8",
  "key8": "3XP24WxfLotBoLWFACc5MCdPh3huJnGqYgKPkEn9A8n4LRtdrXmLzdKjLuSvuBxgSxBuAeBBV23QQYuNi2tDyza7",
  "key9": "2W2sdj5ea5u2fLY6F5K5dX7TAm4iSVdcsRqGcKN3iDPn8hQYbqB7TF3hWsCF6BApbvYbyV79jTEXNz4RN4uVUph8",
  "key10": "28cgwMdMNCrqudtYnmhYQ6895Dtr16rnEKdJfk6DUw9wsFRC7r4DRfc5oCZK6pQfLKYAyxqZr3CH85iYVBpxJ8pg",
  "key11": "4BuZao5Km6aRcGEQdVdoJfZUaNTnY7R7gxiTaJ71FowAEBW65df5VgRewRsNXCqaDpPQZiZDwoswg9FCASpyWYd2",
  "key12": "5qd1ESieM27K5fgLgspThNFzynYkUkqsNWsfjQvq22GyLAS2F8e2PNZhcS2dyEjKG7vymDp2PDx8ov4QRejDSp24",
  "key13": "4YEH5UKAZc5nUnjfyvM4r3cAoaVguGBz6SM3nxUAeG1MJPk2RrmBC3dNHSNWxK5vsHSpjwAitoiYzTgtdHrynuGN",
  "key14": "4Fb8VG2GKKB4xn3vArTDGk4c2gadDhADyEP6epK797LdSs8MX4BZUut9jGht1BLpp2vWVjBctSw7kK3rSY43rxmG",
  "key15": "65CYtjFv7w6qkeh1WECkxRjfpMP9PnGrT4EyuTecBgsVzyayJj6e3vKgqDkmuMbRTjznfTYPWozSXywFuDRBgDNk",
  "key16": "2UF89EtrQV9kmN3ruWhHfMBUKbhDoMkRtdhRcBPQyriNKqicjnuU4oXLuE64fUy4JHRxZSebbCZxX6e5ogxNbZHk",
  "key17": "3WvfJDZhXL4ejQ6zAxM2an1cgX1CpU26itHGTpA9SnBwZdHjDboPUzXf436DXe5hDAi79NDF7nwN4qiQavCdo1GW",
  "key18": "51fru1pYFvU5crbViGtMF2b622gmBsrXetVRRkUxHan1mnDHvPifR3TUEMuAbBgFmdtzzGDPJ4NMWGwTP3R9DJj6",
  "key19": "5VtsphHcz6B3U6UayM2YTADbHSjXFyqEHXfbkTF3H4cPJAZt8XPFvDhZpTQKfgSgC9dAD5MyNFpXFvGZ9zfFFnkf",
  "key20": "2vwC1yecExFwLbjR7aUVUjY7oxWo6R81FuKjd7dLaRekHDjFxbPuV3e7CLJ9XfSgsH4NjFK13ADPEpYrha6B53A1",
  "key21": "3Dy3nfUxtUh5gLR3MXttiQwsNtH7M9XwRmE8mQnfgHiSbQD9vyBj2QKKNWsEkDV7SstNQBAu5v7TgsJoQTYMih6N",
  "key22": "5hLj8B2W9fed3xbtH3simBJDQrNcdedgj5t4rzVyfDU4wabMRX6rH2TPBtUPKD7z5nQzfaFanU8VCzWaqYxCAvTn",
  "key23": "2S2rgno4LajRvgz6Xt7BwRckLDdjLqjiZ7ErS1m2Ay1ZFRUBU9koS8yZhJNLQvqnkF5ZCgN7ms1LTRx7REAfXN61",
  "key24": "4vDHRdxvdZFq7DyvKvN73rZEQAXyH8PhRtGGPawerysCxRe1oKa3Hdpik7ctRff9HCuZ8Wp5ggeturywCev9wFNc"
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
