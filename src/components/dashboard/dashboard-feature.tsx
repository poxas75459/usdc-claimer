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
    "4Q7w6bX5hXHB1jq95XFXH3eY3rLX8p2xAmtEmaz8cAyCCKLSGtbBeKR4ypxxUGADQYGv6RHWQTKd59ix9itr2fWV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Dx3PF6EWak9vHpTEDPEt3mPrTmwXfSydcMHZpd5ZRR83E2AduttHDtwX5dQFgF6pKCWshvo6Baigcy9TGdLs5mu",
  "key1": "2FGw5V7GWRy6iYKqArW5z3JiyU5VPCND3JEAkM7FbajcKXGkEuEawfgkiUEPH6Qr32G4kVHrZTt9w9L86j5TeNrk",
  "key2": "23XNPg8aPxDKo4EtdW9pqVSGHbPP3oFGe5YAfV7Jf4fHLMRzwG4NPGS869bPEkGGoQLJkU2tnSiKvWtydYKu66Nv",
  "key3": "2DizzUx24EgSQMCbSDQhMJ3zgwuTkMi5CZaUEWqtuzUW4Y4yJU5fkowEqui1vjQ63sHeatGZcp1aWBaFZR41yLC6",
  "key4": "2upktqYMq6QQYkNdnmuEHX3jzptCApDcpwcxbJHirLxuUy8HDx6HoTKMEHGdA6Y4TLLrpfiky8D2Awp2vhyyFCFj",
  "key5": "PgB1ti8jYB6g8Txr7bZxZMTX58QLjaYB2gWzWQe88TKUgS4BKgp2Y4KWjAnj24nMRSch8NJVpRfBAMRSMA5ZaeX",
  "key6": "4JRyw9TkZCM4Eazz2UgQBgDD66jgBjBi9i1LVh51RXFxtvbMNAhe7vhgUX6K9YY9RBaHGM2WVEdrHWWn3889BZ1Q",
  "key7": "24opxk3BNfPosDMQ8C4KZQRAA8McEzRWTCRGSgjpBhRPuaZ1d9UAgajo4WD6zpBEJ5gQ2tEd1oQb1h1ZV8Hp6JJk",
  "key8": "4h6fbmGgHQYhYYsLbw6q9QY2yszHyJz1a4DBePugj9MUB5cdMeoBiBu1YwCseVxoeuXUnyX4uyeRp7hNFe9rAuUD",
  "key9": "b6jxeBPQsDGrrDquwZ91gAameZFqNLLtTsLUWNLEz9QF5SqLyNcqgZFeTALY5cfFTWe6pasWa25NMp6ExahRtV8",
  "key10": "5uuTyBFBB8GubDsC2tyguijazZUDKZT3h5Pf39zmcuCLS3vrQpPQS7VMK2kCouH7W2nZhinZCB2SExnVp48Q6HqW",
  "key11": "3ebBZtjFuyHw52jX6fPn2sKiAXWLBQ17wBjVpNpmonwb98vaXeVJuYHx3LBqAHfuASA6G8jDeJir3x8BKrGaEn1u",
  "key12": "4V8gnLxVpy4hkA6Wiep4TrE1iPdrivAsAdUMB2dyN5PvX9e74HBjecV7yKoYVRAXo9zPdJro1N5qBXK41PDg9XbR",
  "key13": "57kMeuxbVsMuj7iAgftgirLhYZmCrmqQbxARMHBoKPCQpUo59txxTmneR2xQ27Fq79pThNuU6QnvUPw1YMbYKFYh",
  "key14": "38HDWDDN3Dq2AnhSLNTvrmRquABpv8jRSntgJG84P1gmfP6BoAvYWPN7LEvKp6uQiz7Ly6inqbn3hyQKQKUeJhap",
  "key15": "4byimHHqN7GMJ6aZ4XsqJikuUokL8K6DTEm97yvfSNMxGKQ7XP2gHKU91xATzNsQBExx7Jwi3rkkN9W5Tu2RoBAi",
  "key16": "4swqNUMFf14ZdHsPyzTMqiBFAX8dQ4k9QYJgnWk6Mtwq36Fp7h2DV5pDfzc2E6fKVJoRQm5J34GtCVNmPfkZEEzY",
  "key17": "K75Jf7CBMwdLU3WYQfGba2sg7xVvsGBsx5vz84tKkEaeDs8iW47tY3uLiSfo7cM2L7b3v1o5fBNfiNKtC9Z7fxM",
  "key18": "2MtJ3CCJJWevHBj875U5SdVwscY5RcX1JdUQJFwUWm1RRERx6oSFmr595ne3HemxhjoJLthax1ansvoWBqJsLvco",
  "key19": "2c5XR8VmMjMC51VbUSNzTKBDbi7upcPGFuzVjjNupU7HTCPn92hcNRKMNitkCM32BCKNEqbEkyp2yZhF9wMgtaFs",
  "key20": "maHGAiEz6DHa2iXoomt3kF35Yrc9QumEs9RKTDaTs7trzhU6xNfacEYmYHHMXiZ8i7oj5CfFMgZfwZn6jc6PwCh",
  "key21": "2XYH2Yn7xdDVDSaWFe759LPyF8fMsE3Y4AALkLDZR9NjEdwkqWPKaMcnq8VopuGCekRLWxoAgMSJDQHJxa2bqkhx",
  "key22": "9dhSpEWGS7LpmqMFa4G683NxApnd8gXXU6DN9xETkTBuZf12baNYCUtUKJpXyxysCn24asdgdmHFxpGirkeJFZU",
  "key23": "5HfEJZPfCdm4vtVNxBuURyxogveKpN9e34i8mEpy9CGEyBMEVT1TNhAgxLUoJwDHfFph1m4UuT3sf9KJ113U6Tet",
  "key24": "5gkCMwekgYhRu5yUyjhP21Spbe7Gn3dsMzrNEYv6y5sPvgVBs4Ch5zHFirbZ2hoxykzagQnNbgjQhn2UDcq7jZiq",
  "key25": "4zuApbZzhi6YEZAYar8RL6JNU2XAY34f8my4JYSSUUsFf3rszLbY2nnBt7gi2HFj87xKUFbwvU8HLign9SVyWuUR",
  "key26": "2ps6gs1qkR4FXzGiTf7fVW1jnUseYGeLCXgHHZw7KWCHRDUHhaeku6vD8E2fWrdTM3innsULAY1Ru13xqU5Rqbgr",
  "key27": "3iJqiBESFSi9ANNBStBiFk8mrAAx5isySxJp8UMueRFpCB9Vg6xWb24oQnsKQdjgdxMs36fy3p6WAVmvMXbEYXwQ",
  "key28": "5DaxzCLUf4KrhtLmp1esFn1GxXbSEUNCiTXxiz5os5oBEwb5mBPB8vme3ZdXaFa5FSs1KPrmGvZj4udYJR16UvU1",
  "key29": "mGq6uDvhErXSc6gq7YQaLyFpk47BFV3DVzoNFbRMxkC54bXpgCLWdYKi59gy7uYMwkcYCM1rvYUYALZGXqtjBES",
  "key30": "3Ng4XTK5WnVBB5dsxPLWshH5FU45EB1FFETY3hFZMpyyx5GoKAetH3cy4vqGpC3u2VoFc51TLGiKhZ1LtCpwLzHD",
  "key31": "5c5HcDrdNaz15caLg9scH1mvYwijgTh2siVPizTDBZMeRb6vUTeJCzgAStqV7JJyq9LNkNCykMqGbwBsBNWRVtxw",
  "key32": "5jbW7pAvuGqPxZx7J28QVnCgwEaANkaSghsTo8JQHFECyBo59Pbcw9yJVoRvtMQw4vi6zB7CxCdh1a9Kcdtrw5ZK",
  "key33": "2F6BwPTW4mSZsRSSusBUMKZUuB9eMmp4HGuE2b2EtP781w76BcZESfwTwXAfww6bpH6MVBsceJztrXtix2VngnhV"
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
