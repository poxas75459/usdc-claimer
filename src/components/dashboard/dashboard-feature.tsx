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
    "bpX86he59BKyzP3mxPkhvi8kJSFgQAXPs6CnibBKmrYC5bMQZvkoM7hKaMHTaX6carzuyLpHe6ngkUrgQ4MCdeU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67YUh9Q4Gr6jtd6TEtuzpK1Zi8aAFirvirMrFwFXYeWCyNPrNnv2LrcuWhKA5z79h7QfnVEV6XdXEUhxymnvc8qh",
  "key1": "5pommanLq86HXsHWicAKqiLpaDUtQx97BXKmT4ro8gPgmX5KUheq9TeiCQW9m4P7bS2k86CyZdkw4z8GbMEcmDP5",
  "key2": "5oKx8nY1afjS5oCGjiQEVwFy5ubxN9ViMWkFgAzCwSV1syHVE4pwVqgF4NLGqsxc2SJTfWZeWUciRV8mDrExCrtK",
  "key3": "37ow6PT8hCH4cBozqfwGqdB3zgfyX8RLcsZQSc8tcpTzfYp7g2XVV1cVsCGefzbFP761xay68iwodBjHnuENa8pa",
  "key4": "5ywC9FvbTZYa42tgBtqUvg7cnXbiioQSv5SkvMAxeoSeFzEWJaH6AppKm2evY42SdYBxZEdRSChZc8W2uvR9Ptvt",
  "key5": "5xE9VsvxYC5ay3uU43Jf1zFHCfTv3qJBB348mnNNJGmVJAfbuzeZfYTN2qRzWmfSgnZqU6EamwM2TLLh57bwAXpy",
  "key6": "27Lk1pf3S6RHyqYXusyKbkWnkSnZtLfg11VQbDnFREPXDyG2Vv7u5KrK9cBQyCpW1qDsbnVZaoLSUvAEEi8b5QAn",
  "key7": "4L9DxvFfWnp6C3H4BsSowAF6H3zPv2bp89zwhHemSFA26VJyeuebmpEGULqWbRT3gPVB9e7U4NfSyd67uPu4KfDu",
  "key8": "51iDSSw59oNbWmdiE3XAXSFTCJbYe2tT45AtnL5NwKMkXRPZN4o1AWxXTeCRqsoUyrqoUfWmUUHGLWsNpv2vbtCY",
  "key9": "LsnmVujC3Sjh9p4QZdVf1FPM2w8KTLVKzWVv14rJxejetWhXXUS1nPsmN9GDNBLnaDU9QQP2VT6mr8qEoh46eqw",
  "key10": "pWrZh1gQXjSiB7g3etfQX9WzXsVwMjjn5Av4CiCWG1w7Sg5pfKQPAJhSzhj82KEvw4Noj2comoN6Xd5T1WcJB5H",
  "key11": "oeytY19uN6jX8P1HerdXd8qmmew6vJZ3zrh5S4THTT3QMFvUvmdvN1eGHM92FYXEWgPpmeHm8h9GsTRbQqMkLKU",
  "key12": "3dMYJrRkLgLczYPp6jdERUo98Qog9LLDScyUbVzKp4PBaUWdg1QumdQuthDQbPdQNzwBijXt3mdHJfcYgD7CNii1",
  "key13": "2rnEgbT6qNXN4niTLcYn14MPRzJh9YHQjWCmtNkCfeJBT87HDbLa3ZsryV3ZiLMDPdYAQj4ybL1vEV3iXnWriAeu",
  "key14": "5u5RHA3cZn8qW4eq9pG4356RCm4KBBM54MWXo12h8B42Ha44xWiRG9ANrpxJ5eMETZTezhmZjDswnvUWZSGtLv5U",
  "key15": "qePu9NPEQVuLhWgPuwvdPzZR7x3a4khvSgryEL445J9rmTJquharew9mANif7aaoczKEuCE5ymoERRCZVwA7w3X",
  "key16": "5ErUaN45e8keeFg5Cb6EQCDtZEmZ8jMhGQAyo6Mcf1mXGJZ34QN9h9QqcY83zYxLpEDBRCkUZPUhT7pBQw8ZQYC5",
  "key17": "4t94Uk9sc4CBGQZGptcz8vyqpNso2qDxtvMPB3gy6eX7EqGWGVXcSamfUykcmY2YDobx9161FjWkUfXLQw2mNajq",
  "key18": "5F3rk8TD57grGB82iaubZBgr6PjnecaemBzeYSiEoNbgwmySE17z6NqE3b5SEQa8rQX8gdGS59ics7JfQtjWQt2U",
  "key19": "3ay9foEcwZxa1titvNB2p2AyuPfY5Uu6bZ594KPCXoaSh5vhCmn6P3hQ8pKR2QtZBKLNVqKsgoTgdanPS9oWbmD3",
  "key20": "2gnyoCTuAaaQbiF8gFDZnVRnoWUDLYqsosY2hNQCsCTzJ9HUxQPMvckAujRz7P9ZmSq6Y6wHi5b59bK68pT1nxJu",
  "key21": "4kLe6h5fY4LqmJ5CXfwxjytCU9BqTAosjcmEVFZpaGBjDWqSgtGbSfdLxy6EYP1aDMYSvfM23Ud1dC9HdkaUMmbP",
  "key22": "tmfZ2xMrGvGToBMipJgnjADjaGqYvBd9W9NBKe13ECEZwkiFrJ4Tia3173F4RTLohGG4MJxFiHHShhr67qbz8R5",
  "key23": "WBEdALzGFyDwLy2DkKs6v3Yj1fiaZdAgrgJKQY2cNWhdGPPDKsJA6959J6ciZgJoTsr6BHaKDJrJgx4dumLbFAS",
  "key24": "4Uxb57AxtamffH3C6MnJdovN2R4UdvnT2EyykX45RsU2mdYd8gL1y4GArwYAj2HJ1ZFbJHA7XDJ2N4c9eokZN3hV",
  "key25": "4yyhrD4t6QDJuwNY9VbfNcMkm3RfBLUppBdTwi9ES8Xp4x7S9TCEXLurmC9GrFTaoeAcZmiH76Zw6wHDdsxi6rWq",
  "key26": "5hfH5pADfp1RPXhwoFAVzHtbiDTNNjat6GTQNds1yT6eexo99eKxMXf4W55h2xQ7nTf6bQN3TSwwp7PZtbkMRN7B",
  "key27": "5qo4QmpVnDjb1NhdFU9r43VMKS7AGE5YkJ9UNLy6j2oHa13jNMRWPZCACNzBCVqqzKSzma7rdhSDbTfbaST5Ed5f",
  "key28": "2nGdiro1BkcUajw7aF75Ju2nrtHyrvoPfpiKNKvVjezWw9H6rXoG2XVG5fG5k7hYJp4bTj4n24gXB76aJk126PpJ",
  "key29": "34UXKrp6ZJhLnjzioFsfCSFCXALspbvY7ob1QZAS2Ci21Qz8nnkSYAHNRBEXXVN1Agk3W3JNEEXgCkEtNhnt1jYu",
  "key30": "49pgXKBbgmpPRnmu8ptcRjPpSyTuauncMFn2ub6X4T9SPKv5i872MWvarr3m4UCjHtkyYg5zXG2JFdCjcf75eD4D",
  "key31": "5SLwPaVDdufY48YQw5rrLbXe9CzRhUWaTyoKDWgPVCKTTEeZgsfxrvUcUdnQUr61bkowZhgyKu7FtaxktArEGgUj",
  "key32": "THz3bH1Dx9vrDcLEVDoDZHXwvULxUXa2jq3KCjvnJbg61FxPXDfCHLt681M9P2s699DwC3Nb6sffbz755HwurYL",
  "key33": "5ybhbW8S2ygSYWApWU61kDe3aWXVbJTNPpcrknccsaWCoKQbMNC2BXt5DwULKo5pjjgUe57ZiwRLiewp9S9L3qwP",
  "key34": "cUSi3aPPkydGRKtzDi6Sf3nguEDQgPgjNh2LsNx7srkTmNSbmLJk5YxZEdXPnbzbzLrqzDm68ZKoDyFFqgNyy4a",
  "key35": "42SFVWigAgXzRrFLRwxcECBVPFv5v39EDYU7gatYYMoZ49r9WgHhUH1G9xbgdBHsUP8AWthLJDfVRcDiFirm4jzh",
  "key36": "m8jDKc5GEgSWhXKacRV4AgrzEFMRyWWupXza7KL2N1JAHGqoPseKkPpQWyNc1AuN3bcCSHZqWRrUxw4HhCu738G",
  "key37": "3An9Ah6HHy2Aqa5jvKF2hxvYn7J4cEWGWkRmbLxxqecKcFDU4M19AruDHCXCwVfa5jeTS3qKrwau6WggvgemFyBz",
  "key38": "4gGwBsWmWF7rPiLT9W7QtWcmBmFChbk3W2Y1zLQ1SZVzpDcovvBbExTNz5C375TTcLyXuPdaL6T4HdoS7LtyWvDE",
  "key39": "k2JT2Sdc6auEjutQPy91Rn1dYFNjp4sqTK7rB8W4ueVPRxqtKPJaFUBTKKSm72ueTdWMbA33V5TmZ7XFMngYj5R",
  "key40": "5Yno7oJVXSV4dfNJMWRPD6TureF9hPSAKsmnfcofiAWkLsxKbdGUeup4FJN5V4ngKUjhDRbUVh8G3eS5Sfz6HirN",
  "key41": "5VDehDtSAj7GKiXo9BMQ1nnypMQyA1fND8QwXPrVByAZ86FdSW2f9xduPg44DumRFMEsZcmJEzqWnBKdFbqbmMNC",
  "key42": "4GVXfBbkjc98mpAoPtG1xX9p1ZGdF22TyBQgiWPEQsV1yjboHxS8ALhhLFFWEKtzyq7uVjJNAVDrTyDmjHA7GP5",
  "key43": "qSuMpHGHobzSsXhmnUk7CcP7wppG7PjjqkXythBjxGVsue72Po7u3B5upww5XdrrWpd2e9nepjapWRtb7Yk6Lzt"
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
