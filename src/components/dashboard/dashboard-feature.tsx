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
    "4tdpE2KELodM2m54hGhHZtQjMZMBK537PoATtQfPgyS8HiJsuwh3HFW73t7QNmMtKxgqf6MyBLjXRy3XE7iHteh4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QNnnqaM8SqEq66PmXTNMiuL59ghDgzUWyXnYF5QpKeF63XtcJQ3YYe1pvtgeiyRMvp42sZMRqphBZfk6HdrD8GE",
  "key1": "4deTYCPVqBYMSakH6ne6WuVwx4YD7HKVRPQbD4eAESsYXgRJoq9zXjpDAWpBhkRXyJwk24EAV2div8djS52MTcZP",
  "key2": "4eo7YNhQQp6Z9zNVgBe4t94ezwzJBCN5vSdT9owPWrstNLU86YkBwEytBAwRzAYpF72U8wRDAeHNeY7xsWc123sA",
  "key3": "47ERtAtTx2bRPV1MzfMfHSUyqExTmCgAJhGiqxxhz8eFNQm8gkKRbQTvSPSCm9PHVSVhyyZ7TxGesKBvxvvd1MKX",
  "key4": "3fXHWgVf1kgUza6jqwqBXorbqMgAUdPUnhDBdJUa1vcyP5bjzk46S2bFEStWupp97QJ87K2Zeji39oLZMBukPThE",
  "key5": "3CGKgDvapBT8iRpGaMqumPiSBNQb5MrwyXHjAvRdeaX5AMif4p7zZx4JrjtXENQGqgoRqSYdEfrX8DgueV2hxwMY",
  "key6": "5pHCvHGtWyhvKAm43fRWcFQvtpRQ4S9uLCZy5FQh75ELq2LbeEtvuRh9wWz7pBrBjkyxsic74nQD5oj3AXJb8Cko",
  "key7": "5Ygi1rL87MjeTve22ShH2amkW7ygYAMhmtux4GSEj5fXQpB5867MQcQTHPdtd2fttbiGnynRoyVesG2bbnuUDJHD",
  "key8": "3tCfn2LGGAXuqBLkmxymVzxLzfmhn4qeagjMgd32KZ81TCqdRcfcMNZVFZ327t6WBCEuzpG4sAqcnpc5Ejq9Qbri",
  "key9": "3oGNA2gTbXc3xp6orH3sMfXZK1V1756f9V7vRRDo7pU74af46Xw1xb6AjospizUYBSf39Dr5b7jh7nVNUtFDzaEL",
  "key10": "4i8YGAFxgFh72JLovGohB1j1cJs64gxPZmZuNZEHWm49AMZejg4nT2gYVyaFeVa7nimxVPDpRGFVKfiRh4mvJe7i",
  "key11": "YLphYoxHKSjxzEyz8nPeNPotCETF1gesdFZoFMBVgEqFNZysV8yJT84ez94neFS8piQf3KJ1A912zkxH5nrWSHj",
  "key12": "2yTdG8wDmZkeiJFu8ZTCVLjn5g6qiL63r4H2E9yDjCCYw5VHgzTCZzhDLPhVvABDzpSLRM12nC5UYjKLCPcwccLg",
  "key13": "3nJv6DZJqLHrpZn6yUtCXRQULCvf45hsJkHbpShFju23MDjHbcgCdssXyxitrLjhQ3F8Nc3dB58bURoR1d2CK1AT",
  "key14": "4YHhVgASoj9HPBsi1HyzciKkTxi7r7sx7r7rrypQTbvckXcGKJSFqyetFDvufBbWDdKwnC3TLJCfaFRL1Jt2rsoj",
  "key15": "5Q34asCQNTjJ2tAKurDoSiHcDZHCCD661iCCbfQL5sKfc3QBSzsuZGXwPxCehEyyW2JGBWVq2PUHmpwoRaPSx646",
  "key16": "5b8sTLiYsys6sjnqBA2qgrmogoSDhg39CLJ7bo3L5ELhXeWgypjUmvUchkABMoHLNNsNpVJwbPLQ3KFMbLKCv1Nx",
  "key17": "2sv3g1VHEbFGnf7bFsJEJTqEvYxdbzrQyA7WnEAVVY9qcLxzBXQoL3iYScQgNggksFNzUTzcA4Wo38JmGJJBrnjP",
  "key18": "3PQBG88SHxkx2SKTWDmSC3ZZeERCLhaS8HXuK9wSXX9ehdy2gsENDpxZJ3vHSYGSB1n4msTtSKdsbYWYgvysrTo7",
  "key19": "2crCK2mDLGVkWNbmCwHCiqJpSv7TaZLC914crx1raw4tkPY2EUE7JgBvzbk5rrwby9zLoAnTRrL15g9DfEzrwPxB",
  "key20": "51sbS8EJ28zoXFJJR9ax6nVvh21Ge57P4CNXvBb1a5BpmPS5xJF4UhGFmYgS24fxj28a1J5tzFH7mgfuYswfSg3p",
  "key21": "bppXVmB9uqQAq7LUMP8zx6h64TUT9i263DnbGvXYupPfDJ6PMj3PrujrRDErj192rDx8KMcgLbNkKfsBhYa3Bj9",
  "key22": "3ak1Vk6Cm1qK4H7iSAZdjxxPdXHW5mwAmtHbPSqz1YL6jRztfc8uYWvXJrJtsnrRi91rJNY5phJF9NpVaSMzRM1S",
  "key23": "yDymAbkPoD94LfqZnANGP84c7BzNdCmZD7vohuMigFE3g3mxFVCnRNkcX7X4KBr5wMZq4fASgezmahPRTj2dVJV",
  "key24": "2wPfwJXwgimvqboKMSM1mNqEfXbiLEXNJ9mre8eKftmKqtfBjR2RgNfEy1oFT5ZaALigQGV6iRdsUV3A5GFB5VwW",
  "key25": "H2bmFa8Nh9ve3DCcBMB5FnPMsBbAsmA8Bn9vCdT5AzBRZubmugAfYfRTGLn79aJ3rKAXfgej6pmpBjaqQ8they9",
  "key26": "63TbFTT572j6otq7rY3F4e8iJqsQQbKtg4sJEyvAx4om4C21ViYfos76YSpBwTZGvUucJVQtjUcYtsE8Bn9XGcZb",
  "key27": "5yCLgcPLUvSEVv5wtHmXJRnVqnmSEsAsPu4VvWEyvp3ktU7ELaHpq5EjBJo4BV4jcn3g3FuMELT8xtMSW6xTZ4aA",
  "key28": "2eyeJzesu7LByBLKw93FmeWVU9ctjEo4SpnUqCaZCq5uBZSNsUfLDL6uVthRdzMfkWd21f1DzMETasvxVmb1uYs4",
  "key29": "2G76B22YCWnLXQowRnUmJMWn53qrMPjwLPJTLcLP4HEQ8rZytpmrzz6tSwbMDEKacB92HD6NebwuUNJFGAn29dG",
  "key30": "474JuuV7Qy6FcvMmSsQQw71v4HZge8YVZ4LfTwjy86wQHvSkCcMPePPZQxAGgVerzvizX1YujeAuszDUhFpuezc8",
  "key31": "49Fnw8eH4u1xY7BKiyfRgnxLfuqcwDuk7q9AY2sP1c7rHdRnqGGHFGGX3VZqHLNPFHxoGWyYzYSEZj7fKiFQw5wo",
  "key32": "2Z4aLLbkRWywYjoUdpRaPEh8Swzbdc11iNEA3J1zAQQsFZYqkJjqmePeGxJUH8jxue5V9V42sgZ8nGSbTzdQWD2z",
  "key33": "49W5ZiMc42iXBdmRuMJhSH4TQhL9uZgpsh2RJV1BeGTn4UDApqm7Pb5T24gX5MAP6qgj2V6WhKeQgNxLnro2Z5N9",
  "key34": "2CGzX971Rv33MiJNdMgrViEoTTCGWr6RNkzVmHMbjJLtmi7TYWiE5ppFqgHr6rW8pKwUrJCHzZEUE4rALRHjTdya"
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
