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
    "2j1oghEgptBJj1d2yEv1MFU3GeeAYCioY7sRyuiaqd2L8HY9aoiheUk3U8B9AaftDEBV4mC3gvQfu2239PMMPrkC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43CpZzqPDf9DmaCowpqhsnH4uqTxJCbJ8GJR18LDdkrKLcCW8UJU5iFhXrojBHLzy5KtzHtjenTmWjN9KSPApWwe",
  "key1": "ApuhYtk1RbJ2rrca8XeptoeUuR6LwJFVhbBBcKkXkML3qTc5U3CwBAS762ZN6yPkeXuPNvc34A3TiCfjQDdFJPb",
  "key2": "3e2UUUvRNncJGESAXq4YmnvfcooVeGphrMzSxGUd3MunLzMRZpVkY7f8Fy8KFBoEwQdj2NZjJdhSQ1ejQLntspHs",
  "key3": "53ZmuLkcJxB6VXFrc9iSHpLZY6iXmg5KVtWFWytdpK8yuVUDHgGXngfzcm1kzv4En8MZzLTp8KhPihiyUE188Xk2",
  "key4": "47AZdebEiPdnGqq5oQsRtTwMx9pzXcWxxWqrSPLXQdphyCxZzdfDxZVP7K2aTBCq4SBwx79tTpHKEDCyMS2CDMRc",
  "key5": "5ynRqCakmJBKFByAnUpWzhsNFVfMbUakG6ADzoZ5gRv2HpmVMqbomHYxS1wVMkkWvkud53QF624g5QWcc9wDUmUQ",
  "key6": "GHP64ZchtT1VrRMS1zEuEGuh6rGjBt5saxb8pNfekMfjigR6EFv33FchSbgj8eCKH3peyW8kAnMiQKbW3JXojgL",
  "key7": "EjCTXfr2Ev3PsGvhgXUETUzWXegu5wEBTwjVLA8LD66c6hFMaSeosZHctwXP71BCAuHPdH9j7YgXEnKwAcpc7KN",
  "key8": "5yau4H2LNwrNbyjHhCuQTXMhdXKsi2WTPziESs15T1UHU6ERxMajAH7eZbaN7vnmr1T4rfKBCxxrCGZFaA1rHihD",
  "key9": "4zBx8WmcNQ9gA1MgScTJnN7AMxnBiZFvE5dwqjsU1jpgq6h6iby28H7qWM4Urw8KihhZXKbBMCvQ5u9YmdJYRHn6",
  "key10": "3Hes4MC75stpcn91Pn7F7cnS1C9wUEUJqSM5cbC7B7u698fHwuTmiC3FG91c3B9dqQmdcHQXBqJELaNrU9sQXpKA",
  "key11": "3xf7ebFbGxBLzMj52N6Ta62ivAF2AJvW8WJLw6uGMurXx3JcJAHweYE9t1s7iJMQKoYCsuQNY1Cif9CWsdsjtjup",
  "key12": "4Zr6reZsG7gsXP5z1A8w9BbdWurVyUK6FsV7UqUhCrmxrpJvGQgRLwAsqQyDZtzMqqf175eHSvL62udZhoPLJwXd",
  "key13": "3ZdZgrnJuJMWdrr9VdYas1dMgjcsVeSrSxn6W2GHzNFcCy87rGZ4gucLer2SggsVZx7sAdYRUnxg1wpPbfZuPdb6",
  "key14": "4QfSgRf5a8gL9A1R5K1bLonXpDGr9NtfptA1cxcW5rKEaQa2HWV4SyNwaGFDRjNtJGQUVvMcQnvBa8jeAhvBr9JS",
  "key15": "49DzjkzJ4zCMsKV3QjyAHA3QUr8VP3LNkQQtZUZAaPs6pLZhLm8yKm7f1czNGsHCtUSxf5VKTABBhVuuBBctmVSa",
  "key16": "3beseuvjdokZ4zTVCbTG4dwDwx2uYWwv1ZL6RytWWHHEThRAuPMp7EzFFk6KiNCqzPmTMj6ENBFMfG946TiusytX",
  "key17": "bbpaMRBcoL15vvhbUacuGiHv3U19w8dXuLyiBTd2avSgJVsWBPNgyn6SWf8vQNom3nyPSKTBvETdFuTHH1PnFED",
  "key18": "cTv2eN5HxcuUsXPbSnkveLzCHHqEegWNhULpZQDu6td3fRZgbu8H9fKdyEzvKeDo5E1Z3KRTPNyTEQx2SLfWrtX",
  "key19": "3rPyV6dPMx2epGiyTj6WfU7MezzsU4yBa7QoyZm54fGbHHWeAXXnZdRj978712gAsQVSjRR6ZxDeL5KCYf1fFELH",
  "key20": "48EtiBv25KYpFAqcknYXGY2pU9zEZvrgdovNVTxp5TUrBUFCLBT9KhtRLMTzagbg2MnRWYozvSMVbWgnV7mhBVXM",
  "key21": "5KqtAT8TDxCpUcT2faWbyJanVVxd1U6Z5wS5P6f9fxwZo2QUDdbhSH642b4LjiqRMfxEPytmVJZS37snUy2P7iq4",
  "key22": "2YnmCKZpSfBKFCB33eq9E1U82YELfDLgWiXfePs5KrbVyaY6S2Ly7Y9voYiUzRLGJTBd95zChr4YbubJPbJmqUZj",
  "key23": "3gJoR8XUBtfhctFKNt3UVsgXBAgcmkdrWLWXrXhbtKNMV73TMLJwNHgXThHToVkgv3cR9WgAQ3F9ZEHW7zvMkSLA",
  "key24": "3q8dGCo8Z2h1BTfmN5UU1DTgrWhqAMsZHzFSLbhAiGfSLHEZmDAoHs6zjMXQo1b8hJfn3HYFpYt89HEV4dvRLPKt",
  "key25": "3WpXhRtydmdawdpN9KpgJAoA1MR3kSAU5hzk5TugBKdNUgvcYQTDi11igSGkWYHL9w7myzQmpxcqAHEsRYsHk1nV",
  "key26": "3Zz6Sh8VgcrfBudPcAsdgaiDUZRwdEwiWbyEiUHJTqKuVraQvi72wAHgrW54eRQt3UQos8dyaXMXfUYbbSwViJio",
  "key27": "4oKmsnacZSy6iHNSiTHt1psartvpWhJNN9FfyAZHFEmTXprQbcR4tPSJt8dMxruCpF5jxkrB6dnu9YowmaeT9YL9",
  "key28": "4SyPPdP6oYbETUG8aJBdVWLP7urppeS4UNqqKmbAxMUfNxTmcqe6qL1EVanh981yoUZCQRZ1AdPUkcfMLTvqXnjg",
  "key29": "3GruMgVRtD5Ppn9rs6C2ZARsS5NEVXNAuwqcYUkhTYsCdjLVZ8L4vUhTTi2AW7BM6iNuuWrxyJ1K2nzCVjybG3yp",
  "key30": "3eKyfLmY2jpfgXSvSLW7RyyD36DyNecFrzEFCDsCpzk8LbBvM9asq79DSy14JSjE5WckgF6R5Ci3mqUk9VuG9aEe",
  "key31": "5chEr3GXxgoDNw7Ktpar3cuVqbHTN142uLmPY9oGLATK3GnfoNY2oJ1Sxc1QNumZKMLh4G4L3H9Cv15mpW6GjrGp"
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
