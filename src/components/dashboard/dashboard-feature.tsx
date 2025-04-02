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
    "2EX38EkWZzHZfBXTwPXG1xQqP9Hp4sEKD2jh5mmtyuJ7c6HdTQTVMtuBDwhMvpfHg6WghUpHznkEjALiWPSqmpfp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KhxvN7yW51tdPybmUoLzcPMLcXaaytV4di6MjssPKF2mVms4NNeswSTvBVmMSyvh9rB73PETn9tj7kAkSPKuxka",
  "key1": "4T9uhcjXGskYWAYdLWD2qqrqU2kdZDoN9wUE1iPKRM5AmLLpbiKYmEw4hwunhsj2ZypqDXCYYLgXN7xwjAcjLZu3",
  "key2": "W7EXhcBf7emm4rnhhWuYvhAKaGqp9p8fWmdpi5WVtbwb9XHek6c3BvufNt8apHTARj3FErRC5UNddghgn9yKKh9",
  "key3": "Jueoiah97mPRHdudoixbNrEjLrQ1zQegfitbxRgnW965wcP8AnznY1sHv1waMgiNYiFBr3jXdgkNKbqhYggbL62",
  "key4": "58BgXNVJg54EuiSsiwiUJFt35gWm57ebjcDLMS1iDCwmqp7wX2X9sMtw1LWhrGEhNLMdBNnMv5YWctTgt39T9Liu",
  "key5": "3us2yAn6pgnKsQjVdgBXUCfGUcLjfiUJ7e4AyTBzmaiwLkZbW7ZV6aK2TW4CknpzJP1D3NRoP4269qz9tmYMCA5H",
  "key6": "Me69xp8nJPWPadBnDp5sDDE6qsphSr6QsYoeoaDh87ioEcT6LSUjAdErjrqxo5TbH8cpLmHwTfuj24dd4Dg3PRj",
  "key7": "y3AcZ1husihWv5ox5cQp5nKezbteGUuP2XuepStFsAA5UWdLB7DD8u3RMhvFtu17voGzRn3CVHNmdk4bwFN8DQW",
  "key8": "24fpgh3r2NEbGDNH8u9e2aDVBn5gTNJcssPW4b5pbgPbHDRo3n44swm5MtcoqYKEVbSKJwbA28rgXDYhyrjxmWMc",
  "key9": "58mYe4jDQZki3VQc1SwJbQn2DWxHkKEJr25U7ZudVCo2uAFkigoFKafend4dMxZzy6VGpoPxAbet79CRZbMXMZaM",
  "key10": "3dgRqS2qxE4vVSSH2UBwJbaiiWoVcf66efSFaSs3fF8qsR6xiZrtfdTP9Eimt5GCWhGFx18Pw87Nb83ywLjcsLY7",
  "key11": "5nASW2RvSb5EyiCgS3tedyV4yatcsKS9hAjM23uTEjEfgk7ZgV7HvRexDMquEtKPkKgtL3p8MXiu2erNPvtL7337",
  "key12": "28p1pJp1BA7kjqBWp6XukrUPLp8XKqSGp45Aa3B3jmLfmjWLSXds8pw8fkgewLbS4jj4hDWxcwVYRj9hruQphGB2",
  "key13": "3XLoUhqifL1kgJp2GS4764wThAVLdFt4gsDBvCZQVKUtpNXQbJwqW4Y1223oFmtztqUy2hwS57cyJTxMgFCGZcti",
  "key14": "3WZXuyEoNLKjfMEgz43yXSjUNxaQBRpDTPtKkBT2yEGxocnd6bShWrBuuhu5F2GGhJwjsZTFnMti4KGvs6dDjnCi",
  "key15": "66jK1kGcwWpDqE5b4H6nRc5zb5SM5uv9wqiXJ656498n9hy3vfbmyQC8ph288qG2yX6DkXn2aA3XhjvS7dDyjL9s",
  "key16": "3HPp2KbFFG8fAg9oCdtPPszDJKqqqpYx2BNgQKb2euGscg9ydL5x84vBKt6JemwrhQsDVyAGuyEi32GesBNpB9MA",
  "key17": "3WtioZAEy4mjyAqRiUxYby9wH8XADX78c4Edfnpc98V8UXLcqfnzsAWcdeP87CH1u1PTQt86V7U3iyZ8zQBjFbri",
  "key18": "3urr9ZW7tBkvVkjxWkDZVZZ6eGzRtT5eFDAMCz5H5atB7J1vGmQDUJiThetTRsD6mhfTLjoM5LhbPYt9DVNumcja",
  "key19": "5nLBwKUTtnMU3gLRx214g4ZdYeaNU3ypgMkKVfgi43X9yaWmytkRX4RGvqyXuW8MiHoVqVUEtAVdzEEGc3npzZi9",
  "key20": "5dcZL7TYE62iHFft7x7SkGBXcbW1yjkrXstvSiPxAU2aqoxfJ1MSSLxS9hNUABAaYZxjzCcW9RT7UTJ5wZd3fUxQ",
  "key21": "58QGnqRZCCH19YqW7gCb2FkyDdBTwcypwttB5UQiyCDChJ1kjvkk7z7hjjDFQFuAMrSzmDEzVxCdEX9rkWvbWPZ3",
  "key22": "27tiMHvC8dSmZ3qCis7KT7bfNxrymLvyhk3idqFym9N3efkU6ZE8R8v3oaD82WDdxiNAZStYU6hcXcoMKxLCSXpE",
  "key23": "uA9Livqv1YDJqgBcJRjRpm6TF4HdCRFM5aqCsWqCJ6rNUgUVyUBiXo7yknDj7JqdqrC2S2LWAN5unJzbRh5WxK8",
  "key24": "3K1VcAMoy3QZioboZzrbHVhwHNVzvWaTyZCczUFBeKGsGMjLCRXLUc8RrjfyWrt6kJecaHs4necPLnTyACEBGL64",
  "key25": "5mKj1QMnHzHAdXrifW7XFfe7DXvpm7s5DsEEDx7FWMho2oebScM7RMtXM9m711RPTUZyHfvfDvjiDrw9QXosWC4b",
  "key26": "2ZthtpCYahr8M5REPQuJrz9j3Hpecw1LY47cGBBkyoKzC6SbFJCd3N4NgNQTBxFLgZjPFJ3sBxVTHPtuExXvPAaA",
  "key27": "4rGdwkL2Cqo2Hw85A214E6cc3JqLGdJzv6qJZfhb8BQgyw6yjEuPJMQMFkggQc3rfcoBgkapYbrSN4JAuqajgAaS",
  "key28": "27AR71ZW6UdWyE217QnSS3DezVQ3GrNnvFoRkbhjNyjujkatdbiZP8ueBMQDsjVoYyH2FUZD1ewu5YSotYwowZNY",
  "key29": "3hdMzvd56qZ9D6QVvK9uZGNMsrKboWsJsaFDuWnYz7wFqdX9ZRgSaJagTfQEmw2kFNi2RCXsBK1Nnc1WmPQmseqN",
  "key30": "5yhbbgdZQNQuDgKrybHN8eJaX7XrkNJ1F8BAWWeJbsgRzLBjGkFJmAEpVdCokCBrVC6NYPu2JU7cJFSNZvLJQpmu",
  "key31": "51jKNdTjFUCLs7hUj6UvM2pmgvwy9FJriLa6B7RiKtzW9FifonLEsYbzntfcftMe4P4268axBVTzTrUUNhcpFvWW",
  "key32": "64QMnHcXNJfMCRjs7o91Apsp5aBFHjKq7XnjbbNbE8UXXGf3VFXV7iHfKqrCsLHb3hTHfpjGPFWjU85tzv8bkZpf",
  "key33": "5H6w4WfB8ZKHzFKRucbUetE4fdMUfb2u1wm8k6wTZNhGNEwRrjWJsF9A4heCtJ9Jbc8CGktNPG5rF4T3CFEbnhAt",
  "key34": "5oQiENmBqYFMQ9ziJd3VPBc3VXRmunctBRpgmur37ETCqTxWcNj1EJ8E3jm1zSR6cm6rCDs5sueY27ZAnSBPxn8A",
  "key35": "5x2XzXJAQFpB7PHAjHZZ8Z6wEprXLPqkiz4MCKmtkBZNrpim1jyjuWbGhns2oNLo4pz4v93LxEa1FmJ79oEtyR9Q",
  "key36": "4SyWGRbyAJoZ8jsL9wZiobAHTLD8hwJMrEKWGtmg3ZiTwPowTtCqBZoMQPXPRjxqJnmrrmmzFAyZdZtA3pbuiKVY",
  "key37": "5PNFQnxKsc65J9mKzELE1DPSifDP4KBwGCWhM3HtVWBVPXeZa5x6sKPwi6WYfpVpPQFiXaoGrzpZqH4Fm3EndT2q",
  "key38": "2FRqSan88d5ReEiARcktE5uxwAxpYPeUKf9SG5pkGBG2noapdii82xPbKietCyFyzD9tPmjyCJ9pMXs7yMUeUbiB",
  "key39": "3tbF6whCey8KaDtzxVPhhoah8bd16xH66tU6n9oiGqksccrQkYzFuDhKAPY5cwnoip8kc2hfubAMhd1TfwxxvzEK",
  "key40": "5aTFa56PB6jNCdCSpX86iHU7xs7SE5C2MGKi57XmHXE14uaukYQcodAPy1gMKzAu3UP5CQQDsUJoPDHxPYiyH4CM",
  "key41": "2ZSyyctrWjmh2ovFhtE65a4wm13vKc1E1DT9GsPGLkSRxfTYvZxYfhxqNRzaD8RahosP28A17um9Mf3LGAoxQJHD",
  "key42": "tXrgr3KDUAJdbR8WvJhSRfV1ytJLnx4wnMj59pJ4FXjhitN5GZfyzsWfNy5PDwMgH1audU2YMfT9Y4XZfCpgZAa",
  "key43": "egUnkP32ts61hyqjbR89cV7BsRXbz77eWevU6hnKXigHGWc4mDQrv8HoD1dKUcysfke2oirSf3tBZrbwD8p3rGD"
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
