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
    "2Dast94NKvQCNhvYmH9YgwDrBDHfxHmU5ojfAugCeaWc2oBe2KSUHYH85Ay42BpneriNNYvGzaxzNdGd2E37bHM3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZQzwrZJmd474qA7bhhsH5Yd5CdPFrfaUKjxXb6iorjhG6TQ9U12vgo3ejPJ6ZQvt4hpZH3VadgrLdjUxG9PFDuo",
  "key1": "2VTk1mG7P8RqNvfGkSCEMJ13yGLrVtD9dNRVLGMepv6w4WHRRd4poq7hEnwm5CwPYAjjvhDGCiPJjLFTryJ683A5",
  "key2": "5LEn4SSVdbJZHa419iYfnKFimWDcRz9UtsZoUtzEKNfaAp7QqHVw27AHcYDYmhSnPLVEaCELZ4xkBwW3mYNnYdBm",
  "key3": "38PxLaXHmFGaLJkVaRSa47TCYoFf1h9fTUgZq2YEFJRhoopAMw957DwhcYMk32vVSbsE8SwB37k1XzUmX6eyQRdi",
  "key4": "pMHBShUcfFUvueHPotkqbV8m6xxVEfn7szmR7yB9LuaLXq64BbBR45P157X6KLf4t4gdK3SxNZedN6ha5HDBsoE",
  "key5": "3HyPea4UfrSaKkXWt2wKnq8ULRGdkyEpiGB67zdPxJ4kEesc7hJxQEMsvuSTwyC9PndU7Y7Y7JoaQUBA3GzgDe1g",
  "key6": "5MEfn7puyKcSq3cLMgYREFRyuqph5v6kQn22Ffnu1RoE6CHtj57LryMp9nnRtfY9hvHaM4vnzVMtNGNW96sQmerm",
  "key7": "4ZdmLQRXQx6ohTSqA3cqbsSw6vRWuai3dSHrXr7eYubwtNcbMwMxmXfupQEWCWrbhKuaKq6JFqCnHAjD94RWKXRa",
  "key8": "2q8YPGwEgwHrLVrt3cSQomkV3G27iKqV3YVMQ9fMpmd7JFEtqPEtuhrb1VmRgfrAT8ncBziWWH4CoJAUBQmjSDG5",
  "key9": "2xBrebRLZH9wRb5hRNQ8DGGoxU9aRQQczUCFSTEyjaNNHiXMQF98RrX4zTSZPL8LG8g272b8xQE62gmudAGP4xQ3",
  "key10": "2trLgeXUdosjjAmjfHKRcewsub9A6h59KLYNNQCbM71iG4HaCKccuvmdV9jXc8xjxSYEvZcyg8618KBMcnStjnZD",
  "key11": "3wbVmCbVLC2gx3r4Jh8P4nk8F3fVELZ54p1UyMVatemvZDr94FDmPj1wHa3tNzTRdcau3n7Rh3QFrbmwh6i5Ndw1",
  "key12": "3S8yueJhXj22TqMYktqN7dxASUVeLqJJeCX1riofoZpwgB4ZpB6ryxerSrAzdLTDwjPhP3jXgptSWvgSGDUdDbRm",
  "key13": "yQwAtEC8JQHqDB3PDb376gaNJogeeu7QhqvpsZN7ompKHLQ3AzT53m7ujK3ZQjKewjkyB4bLCNfzz1g2DvgFtQD",
  "key14": "4f1QkWijyAXWf4DzrcSBiqno29iCGRdutbLCKMwNPPPzPcGt672Mh4e1SvpYKPGqbjKYwxJNCaBc91Tmu3Y48CcV",
  "key15": "2fcpgrMcMiP7vpw4RoRhwW9phgsKjuQ1zmXkVoR91CsRTcu6aoDx2SMdd3j8b8SrYCP6ZWu6nxP5RmCRXJTPzxo2",
  "key16": "o2MoK7my8ZUD7f4w6rjA6cjdQCLd2eUUSCUhUTJXVdp2byFrsaQ4ojxcQERZPaonrPZYbqBANoKXTS45kYfkwf8",
  "key17": "13uiY1cmQzxKvhJukzPcEJPH5PLbZsJHahijDweRr819XK8kjQue91KGqyGA8wCZMoCcdWXV9iG4SHQWjKopF2b",
  "key18": "4wRgrv2MCTRzdwzt9BAMzgkQUFB9Wz9LBoBKHRJwaB35fg3GtLANu4SkRPepub3EiK46SssX6bKy5bAf8iMoS7mT",
  "key19": "5oUJQbN29spB2g7iuEbWgpqtosbqdqvrEEBz3kN6AjZHbLCy3M3wUeyGFcWYp3fcRNinKTDFZq6mQzqck2CE7dBX",
  "key20": "3tPjAzQwdEnmqcJHuwJ9ZHwjmf83gwmNruHicMtSTnvZZEqy6Q8hXAYQsE11CpxFXpTAfL3vZPE2UvuCsWacMS3s",
  "key21": "5nbcxLPZqFtGV3FVi1aM5dAPRw4dq1UZ3MXFDTgx9nEwsHCH9QgTAHhWVNSPBwrENgZxoKC9eC9YpG9Q691meMdK",
  "key22": "2bKfHZUd2M5pawitKA1d36Fq98JugZ9PiqcY9jYhFDVBPYupQXHVps2SPhNMEZtVPzFp5AqgzgH8tSewkGERfmUP",
  "key23": "2awkHTEckmTnxwFJXVb2W2Mz87K9CqHivCq9Cvz4vwoYidHcTxvvmmS21ir2zfzcUaCXpuKTnwkotsKAshvMwNwF",
  "key24": "5U23bKyxKNmcaQgW6X1SCSFszLmWAxgrQo4cYHBbe1fibP7ZpMchUiz5FBS4ZU846GjPhDNsXsGGPm22KJd6GH7D",
  "key25": "5LoDd6bEpzmsC48XeBtwnfu598ScN6Kw3Bik9Sz4E3gWeg7hZV2iGZar5PSbL48UwFofKVH1AcaDPkGueY2jfzbQ",
  "key26": "489Mx2KaR11CLK3CANLoFyozvnxzMhhEd3XMYEGGc5kx7s4xJ55cfXCRaxtts3U9tyigfjjTFxRS7LCFkptLw4xW"
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
