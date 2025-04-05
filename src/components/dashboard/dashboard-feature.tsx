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
    "2ap8UqRKyHXz5B4B354pEjnqaq1j6HuESDpgJEASXGzMToV7EwWBisXVShZXaA4YvzbsKD4PYCJuoMGphfHaDM1V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SEMKBJsgibThaaKcp1QeDwmq94tPLroJzvNbD35twyF5wT8KJiaNDfZJTWQrwqGMGQZWGuqip9UueVSmTUppnZ",
  "key1": "4d2YWNrzhnCj9twb6WNMJUsmo7oZ9TzSsRwGKNSkK2aQmtWFotRUPDXsAakDj4gCn3RMoktVn51divqgAW31StzH",
  "key2": "22CSe89LP5joDuhvhNY5PdCieJ6kaSH8YjoyACcWukNyt1EsqUkyASCmiBnNQKhZHqTMMnba3Tu4NNGUHwK5uVWo",
  "key3": "3ARs5NehT5JthYXtKvHqSrkrQYaCfC6oDCSpUxQyQSq2C1fxFBRJtVc9RUnwdevCMBFojuVcZzFzj1oR5bjsiNkg",
  "key4": "3H3hd2SMHBVxhHDezMmfP499MmhjFCtnWsHVFpSWEexepRJrWpXSqvuNPsFCrY2wGfgCG64BtFWJb4c6fzpU2BfM",
  "key5": "2wThojwxjzwAreAdMdveMjEABowi3TvQcAJtAp1u1eAW4SMohBdjteqxPYihxQcnWKPH4phSLfcgHFpKt2wB1bYq",
  "key6": "4cZZkMr9x8EjbZcS7UCEarU3bLGZiKrXDnmexTDGMYkYRVkAxic4eYQfW4C6C34UuqH1xWj2Uhh6xrgs4K3qvms9",
  "key7": "cF2s1hokUR1JUxgW2guiwXXCgbxv4TgfhVNLXcCjznUmT7tiJSnVbMQyCVnCJgCEeY4g3p8ZVGLhf8J9PEeZF7D",
  "key8": "3XfrfRr6ch92RRsUPQCteBTUqEQvEHk6sCHbcjt38UsYx96cwdN4M5KS6bs8PvgTNNrdxuc3HEadd28H8Jkj1Guw",
  "key9": "bK2jXPmFr76XXWygyJpNgYAUqak3s85EX9ZBReqm4UjmBV4C7GMrhphfWAK88gQE5Z1nqX9zstojGCD6hLxjDX2",
  "key10": "MxHHqVCQS63stTmz1yM82wgMpSsmwXz6Q63mBRtx8WkjHmd5mSNdMku5fv17VJMdNYHCK4GErhLM5QVbiuVjgux",
  "key11": "36KZUGG9k5QSDXjFQ3othpniRKyjNxAPvvWgW86kyNoH4vZUQvjQ872WzDXD5KzoGwjUJ83uBZH9ShqkJUTdr4kR",
  "key12": "5LQS5VGyqVmwJAHB31eYJHgvoBUjyJBg98nPFvSs68Rdc43BxPuMqaPtzE2vAHG59c7cgaxQ4nvWyXni13M1XwYA",
  "key13": "hp2xFUxGNQ4pjMj9uLhxSBP3efZHvjowkpA5DxQEomnTxKcyc3a2r2wF2hGZ9mEYgGRMvcFRwTMrdyeFWyeZ7xt",
  "key14": "5WLv4Tb8sr2ENpVfrd1yRK7PEi2Ja5xpeLscDk33vhKBXz6KzXbnfMxzNxbsPBcB7JzTEqiryXgpv9xQPR7sCbR8",
  "key15": "55JGbqHCThX5Y4mVesEyLKtNtUHA4Lg8ivqCNTjk4eQx3W2QnrdAxFoyHP667dBEP5qFSVCoshCphpZxFr5TNpot",
  "key16": "h8Eo93BseXR63HsGEeRRbZtYtEkMjvv8TmHriqmSXMPncg8pVFk4PtF2DCANvQCP9MKWhmZib6CiTP3iH5BH3QJ",
  "key17": "WzwteAbPF7oe85Edgp3c77GVc6AcCP48vrCTVJxhLVePHtnoGuMaUL1tpXo69RhhmU2oBGWD8ApwtVkRUZ5ntt9",
  "key18": "44ZX7B2vQk1Cf5udu26ZfiDCxuyHc8wucYxmLkC2vvf5rzNB7WZsq35m7hR8823eXVauz8Tw5snLwcKrcrNoCA4a",
  "key19": "5xiPHHZyegSNQmPcpaCqQ5fLEhikqGwcBqTJA2s7UijZRX5nMS9LSWnG5wFwttA4Q1tmHXFFjN6bUsbKRB9JLNox",
  "key20": "4pwvHiHavno2D5jkk2wJ2tABw7j7aotPb2beAgVniQyLWokB3esWr63DEeapCKa4bsumNZBTUidivJy3BtBSCBws",
  "key21": "3N48u2VhwQiMo8sYpCu4iG3zzaXy77LTauFcNMZGK8bEBCuvhr4JqvDhedTp8MzWKPSVycxm7mFY6tuHgkRVJfoG",
  "key22": "28hF8FPg9YBja6XKJ36XPxg1r8pkJD16AKheDvkph8afJiBsjNsczn3zMbYVbr96J2Mv2K3m3kiq7StpU1vSgToz",
  "key23": "2Ej4Pmpio8zPVfhVYWECRC4GcuyhM8TuRPGLPsYM6FoQoapTUbhcybKjAZGYHCLRyhzZ1f6Z5WUBDbVPeRRsy4r5",
  "key24": "3bFBfAM5uEQVYtevm2zHXodJmxr1LgQXTXxXYDpMmJM8HrkjyrhgMdnx3QG8ckvgCBmixxwnk12NSSmJsCfdticZ",
  "key25": "63hebh5Wvvecg9HyANeyG9hvKq1p9qVoHCtb6YuX82TuZzyZ6UdNFTRRSvoGwEbWPaouvXtSz1dDZxoEDi9DeKgq",
  "key26": "9ShzeVzcrT48FWsHL1vrc9NavzSMJdNS2UgSnzVP3PG3t4qCG6gRaGbhztG4uBbPDQMa3Vg1t8LiDPjG2HmkznW",
  "key27": "4VEcikqRVVQzhTMisa7KtD9JKPiHjD4KGb3Bnv141113ikpU1oijnHyroTBw2k1BcmMpAqM1zbbNA9t2vQyUY1Uv",
  "key28": "57fXpgmPftb3g3CagLmXAZ7UEwqa9yo6fCZ5JMyossGUj8utGRUUraHQqi6vKxgrVQ6KkeypCtnL3yU1J1XHAFtv"
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
