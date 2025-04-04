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
    "5XGz3vk52aTZk9hFBKtxM3jhJnZRah1WJEk5xgyS8ye8zA8aAmjNFScD4a8VtZVpkwtNG8P6XLtFvkfKBCTakJt7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VpEcWkPmBKsYCLpxXzEwHV5vztDeCUZtMsCEUrPJnFVXkbZCTGnwnqgY27Pyi5qwQJ8apN6vWAhe1WLHFsj95xj",
  "key1": "46ZKqBx7VWrJfv8cGViK9nGWhvkqVkeMm8vnLcRNCsskWGjrhKw3dLpjCPhwDDbcmrLCnqGA5VQFQH7sSf6Qmed2",
  "key2": "5eyKPYkJxzVyRC56e22avaw6QdudYBgfiL6qyCqGLGCmRG6h9QA3aN6vGBHUKFwocrEiaHH2BNTuV6ocYiZ7G8iH",
  "key3": "3BgwNRRTEtnnE1EFyH5yqGHK6f5CZ5s5zjurfhv1rgRpzwwQhmnLmXYmj4cp6ZcWt5jT4EG5cP7999LVDoA39qVY",
  "key4": "7ePzwrVw9wdLMC3CkqMSw2aR8tepwx7mrFV6CWdGzGmvxtCDmj9QjoiXMiaFdcKpZ3UyxC91hzAiFjZY5zYyQHs",
  "key5": "5LXTAsgPv2zgoH1byXfDhhhJb3U78j7828EHjVbZsLa1SzjnibCxkfup8rzdZ1shj6FXGHpicns12Znq24cyTkhV",
  "key6": "2t9EXt9gjEvPoMcWZ4EKjsupJuCCfxsSKSv98xRpykyhry8LARyfEPDfTi9hriY5KoQsCHQRgUcwhkxgxWPshqM9",
  "key7": "5fMSSf2ZaR1erqNmLyxSQ8bsHuZhe3TDzo6qa7UKtP6UV2Ga5H7F9d8hFxLqWp6nAYBfK1dm14b2DeS5j3GSifPS",
  "key8": "359L5yN5ab2LEpG9mnnjAwe4PDjrsLZupZUqRkXTCk7y4jmPFARdG8dzFs3wfZ9cMW2WuGyYA4KpXufHgGhz8zbp",
  "key9": "4etZZDvY5vzkgdmSYFwN2BrfqGCeADQWCymm4qEjCX9C12DuudVqPH1ArK7CaiTHPxaqebBhdqVeN3eLHAUw7TbW",
  "key10": "pNtYcMuFh2KJd7H73bXvfEFPcszguYJzV9A4LF9oyn3XNna2dogpq9kkj3TibpxzjJv22GiAP4rTEcbWEN6CysT",
  "key11": "32XVzd4Uptr8vdDSh4aNM28Axf6n8CF9ie4Xg1dxykrE5qVGnxrWo9JwZSgGG2dEYQVXGFqLAmik25BJ5vM1eEQg",
  "key12": "2R8gm3SWUrgwEBk86TBhFmukSGwwGQ5f7USXvv3UZhAFdqwbQ5s2RBXGBMVFtMptqGjEjryg1ALNe72Fo28pS8cH",
  "key13": "4HuQqNuVXwpVAM8BVmAkXvxzZ6c42YGhz3EVqY63SJNv8qWkK5MDUFkHX2rEX2pwcvyED2tr2arRyjZJqoorNTWN",
  "key14": "252291JRRooB3nqpRduwzXNMsLbUDtG9ydgHFei9KGNCepw1C1DaGhasXijKXPDtBmddorVWUReVsMnmi3n7LKrE",
  "key15": "5yBjhAotiFqYXKk4hbsQbSzw6vHakP31UiSJaxQ2JY1XCiNtEURqjzicG2zu8m8aQ1F66MB1bYGQaMVNVZzCtgaY",
  "key16": "5kW1dwGKxEqfvmchv1t87vdxSa7pymc9M9PquyQinDzDhy5ZbmwPZz7SpWxt3AMjuNgTGyACbycdoYDu9khTDrZp",
  "key17": "3yeKxetMPaYHQvsjSKtBECnCcSB93HHZWYutfMsVkgo5va7ENoqq2rzfVkkUgqXsH6gReDKecSqJeLJ2uZiLq3Ch",
  "key18": "QL2hTLBKg2A4bt2ysxjHSFFAjMkXDtEgbKSRf8hpiVrM2gSReuqujhogjCPQKcB8rnMrxFZSc47sXYp3yKUGt82",
  "key19": "5BJ6DWi4y8gA173Y29mdmF7N7QXqzJNW7YqHaxSt9Fsjx1JUY3FAzvpVJZvowLJyvVTwKpHEHVT83XqPjAPC2BJe",
  "key20": "5p9vaBrnPhuVquT6TReuePsVYQFRecndpBeSWw4VwBuXEhS42x18PQsPBaMAhbDfRZjn4yrkWceaiWCEvPy21NHE",
  "key21": "2JzY7pRLin7T7x3WYcoLVBHDiQegHRJAuzR5a86obATUxWkzZPAKmcFPWKJiZwhWFyC4b1qN4YBj7fmEdqrBuHGT",
  "key22": "5VoQ4TXm1fQkbW4wpFUHxCKDHuR2ZzNkH1nhmYZruFndqaCuA21daCNgT7umQf1YvJgvQRgVQ8jsVrcxQoPm1HRj",
  "key23": "4bvgC8q3qh5Gt9MYJE96tyw1jMCPwQb9PgXJyU8hhn7GdUwWMdpJHfM9yDAsWk1ZzPdBSbtco5YFXziPWNZ4UgdQ",
  "key24": "63Lv72Sq1vG3HqSiwJnz6T1GUhijXVwSVfbb4WZ69aEeiPYnrnCTEG2FmRHiZAqKjJAXCQM8kraDwx714MySJB61",
  "key25": "uB8MuLEj1dF2ZjmAtj4d53fC8ZihBikQgxYStNuJigJbX5NLPuEfqsFKpeCkhaqUk1jTfDb3AiqUjfCzXKhPyTL",
  "key26": "5VkQfncYAydR3cRco9Dy4PwfdDX6BgUmUFhrKwjLq7qZCS2Z7Qzm3WMKDoSkQZdeRJmEDsJpX1ez5bCdQz3K1w69",
  "key27": "4WCv6Qnvsjkr1Ja3CFkYymq3xvfsk1Zi5CpmCvFrm5xYJhWJwsaG6h78PGds6PAyU9EwGQ68Sgoz5Y4545xj3wH",
  "key28": "3yTA2PMVkpBg9RFjSH5igefvtdWLEU3tB3grNtwsubWyTL7Np4eiiw7zCUxK5Tb2G75rZsyBhuRTjHFWxM1tQvXR",
  "key29": "2MK8WLfRct8Zq9zYKKBZjbvpJzuYEipvwWNRHRYpthdJ3qJxL9QdtFHQPNLYXKLGb96UgtaU2sb1PTtFtbZqorZp",
  "key30": "4Bar9GvkQcLjBACnwVHpAe8Kk6oDe4VLC6fxkKRDY1Vkf6qJ1Cmskdw4JUjHL5CkSps7qgZKq8W5yyUUDBrSnM5m",
  "key31": "3d1XVKEKpMyBj3A3tDNNDYaZ9P3xVc6haJiSwwYGXQCTEi68sDXsHUh63ymrFvJzAC8NXkhemBfynZj6yatArkmp",
  "key32": "4sHCFWctmSvpA943Nh41oEaiyEYBCWRerMqehhDrHrTB6UMzSMA1uA9WjNmTDdqMMfK6H5YwkzfZrLu7P4sqbLKA",
  "key33": "jDESzDa6aHo4vD29LmaRvNCorjsYgQkqfbJf7Jc36hSaEk6rngJVNz3i7aSgLYAiEUdVkeMveRcf5KiULYWFqm2",
  "key34": "2on5c1c2JargurigFMRCMhbEzdVvjxLeBjDNiY5QUXa7nCQLbKXpTxkAH4Q1jAtXhkMCmf9WJrMfxTdkmJAXETHZ",
  "key35": "4Wu4vxQZqPAV2Y41SL9gtekwA9ANgPTe4gLh5NLehxvMPFD2fATQ9U7JRkuF1j2DeEGq7oZPswAbmesubmJ8f1os",
  "key36": "56XTtuPc8bZbDXEAQiV2EocyU49qzW7GDzWzAMyJHE3GJ978KzTSfsJSsQf3CgefD4s5nZTK74qjCkjBizUzXMWp",
  "key37": "4PUhe7wfviHcPRM8GHVc81WmpL1EFEcwHKLWhah14cnZsryn9h6PqweSzi7Q7wtA7ZYRShDV1emUhLTP2rtCzS3P",
  "key38": "5QRJhEaHLthw84LsQEpt2w9hDPidx1G6DqPEpWRemXwSS81PCZQrs8qL5cife9jCABHozXS6iVLVM1cdxr8HrkLc",
  "key39": "2oMn32yujWkAnHSV72vGASBmPeNjTNZSh2bwsHu44N29hgtuHVkDDhK6meXsTqY8fve33JWFnwhkhw912u4w32eK",
  "key40": "2q1JbESSY2mWskFicB25uo77hjWHaScmFkXDCuyB57SzhAkkzh8wxemz6eAxvEe3Cka6yuJt4ZQKEvQqXbh7HKc6",
  "key41": "4pK147crMa6NNdLu5RgtFY5BtSPoK8XYAvKCDnDnGH3yjdAvThHrHyJzLpQdQ3g7GqrrtpXPPwKVkuV44tbFHNSc",
  "key42": "4nQ74C6jVKegpjHdU6TYywTuYPYEEw5qQL2zpBKa2CopPdsbZghkjEhq6PnoaVDEAQFdFUd9hjCkJfcBZMJcttCy",
  "key43": "3az51GuRD9STkAnBzoYSAofNrd1joJy1kjTZAC85fbEMYFnfLEEv4uwQGPj4fXGFFeizGhAnEtqW3hoNcCa7uHLD",
  "key44": "3oFs5EceexgYid6s7dKBeZiz2zqu2Lo335rm7h3iXzrDfCGf6HuKTqwd3CL4MWa3GiydcQD3148aX4mt4kZC94RQ",
  "key45": "5zAPGvkGgrVByPY7mVNExDg33PimCMS3ahAMa2i6MPYuZPPUiPXM8XNbqLPAgWUSM8cB77VXpzpk6AKxudSTKPPe",
  "key46": "vsL2RPKiKmHUsik58vYcFifCBrSRqJR7kKDuUcqLuFLEtVEiE9pXx3Xbu3wfjAHNNUkyhJ6ddQhqpNe5BzmRTPq",
  "key47": "5CnCH1Z8sbn63u4FKrZdPm2UKyfwJqNR9S3ZWbZNdfPijXJsarzJBxuC2dp5RBpgS7HTaKXWhxGRpiFtptL3JgWL"
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
