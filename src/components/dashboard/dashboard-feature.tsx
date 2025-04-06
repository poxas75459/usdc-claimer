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
    "4Ac943byd7yj9dM4tjy4siLLrursQ3nFHtPk5vVUFoF1o2CMojrsD7GL8VcgrEMd1qCkhbRKEynNqBKh1ECrAWom"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hnAhUhjdzusuKVy9vmMojm5z7mcyGkdwJ9cKfyXGsARWEgz45biCPymNHdQMVRvsDN823oWvMiyaiYgqo7bJEsi",
  "key1": "4nL3BJgnUtmVBJT3cgbe5xVRSGaibzYxuMKXkKpyVwA9yfXNLuxZpEYMLUkKu1oSuMqPZcC11tBUCDN2iJmMJz6Y",
  "key2": "3Cms3XirCUtWEf4Lfij9k8YvMGip9GxYyavG54tr81EBwVTknKBiUH6zzDXW4RLS7WjEexiT8qHBCYqdimBwMiXN",
  "key3": "5WmhR5EKZVKNa1wAyfTPCTYrLB4nYrsNPJyKKodxnKmeuDCYYgdHegerBkujMrkRYNDmqECxYwivF7BDRXkcdFj9",
  "key4": "Mp3iFSQ2f78sRvd683PCnR1afEb5URQJTSGfsMA47YVr1Q2zrJJHv6ht7EJzNNs9uJ3ehM22neAEnE4FHg1kqRo",
  "key5": "zgFiHYLAoikHUv4DSn1nb569mxgwFtt8aF1qH5QxSsni6E72iUaCW66y7FXGD9MQZ2n21ECsbCPv9BPJ34zUyL6",
  "key6": "345hNESvSnLQoeuPUR9UzKTYMdcFJnbAeoNwExgGkyrEYFiJkSswAdZDFqZeh2Pr45E29wPtrWEUQbUabyReU1L",
  "key7": "41AyRvPeJDu3wLDkFYcesTkPijXhzV3nYoL7sPi3n41PaWMRNC97PqRQ61P1TK3AyQXU5zxw1Yna9t5nF733d25E",
  "key8": "3AMxdDsFoRMezLMCWuMXMmgLosMWhe3jemRKKD9wuy5tmEWTpysb2aT5GAEb3JcV3P4hrPomy3Eadp7hHURSpRhD",
  "key9": "3jp3dhRZkbx1TrJ2hmkygf6Mez7YbPpkCbG51KgRcrBZLAek7az8hP1BVm63R8zzomn3vPn41wPpM9VyHHZWJM5s",
  "key10": "2Q2VSuNgNHXgfMVN7gkuBvxYtopnppx1RQf8T81wBmyA6mm7cPKAGKCEsyC6yYYfeo8awYzP3ysr57h537xgkdjo",
  "key11": "5aP8irwExyq1uNwoKku12Kc6Mhwz1KQy4DysWg3DdybJ2XzCbLh2z9gcb6C8k38Q69Ywu7UcrcbtvY2vTb4tgG2w",
  "key12": "2JpL1put8fKMPNw1zgFz6pVYEhzBnKoWZ9UQZrRWqU2oDrjfZ1ZTCXSzcnxLGDZ5nygnP7ibDckc1B9meWjDPSZ6",
  "key13": "5tH3ru2z4sTnWVrREYF8aSvtJpsczKpuXEduZYLZDhDzTCZ9uPPzhsr9Bb7VDq8Fufdox3D2DHTN1VjS6UFmu7JN",
  "key14": "U3VZMJ1Kwes7pmDUbVvpUiZMEARfTsAjRmydwTadCr579D4VHZLRmqepdFm82hoBLSCfvUcJqPYcKt9P6UPgeqB",
  "key15": "4MEnqGB9daiH2BSsHKoNUjNE9q7bnMCcPtWPz1NMRT3Xr165eA2V4XtbxBNA4B8g31o5fQTSeQpSkLZkhkCLMagZ",
  "key16": "25WLEsvuspTnb4GqTSZuSKGagY3CdUP5SXszd4anhfHSSUow9wJhJ3Kgak9ht3pXhZnUoxDH6RMAWjqXbNNsaLJL",
  "key17": "5oXMbPbLgXqTYjPN8APcyRWgfwA3YcrbSj1eUKbzDaniLk8z1VT4HxYqRmXUEtUjciuuikV9rDCtxSLJncLkYbFV",
  "key18": "KdfAQUMAa7baeFkbe9Jqz9xbBmPR6eCnanAU8oMW2tc54AFJ4asMJYZTBFGD8nf35TfwEYinh4rWSW1jQfGxayC",
  "key19": "seNYoDeddf7CQwq4kLVM4XWPDHtdfmw2MxkaEd2QHypGBDf915qiWHEHySDoEw2SjnQ2XqPWyhhRAdjTZtqLSVk",
  "key20": "LuQpMdqE9z6gRXj7wcVme3gxKexRt4YZk1GhMAB1rBzBwZDvc5En8RF8jYj22aksD9FPBTxhsNu7W6cdbNmXDXK",
  "key21": "61TnKSnHFNX8bVTQLPkcniKJpVALTMPQGRvGW2BPaft4uRXfFw3qLrVnSoinQyqt3eUjThDwjsC2X6aN3JeqFPac",
  "key22": "3vt6VtkDXwucPjQmNPUHy4f9nj9fqt4UnV6UK6b7SBHRvazU6t3Qrrjvk161KKbHcDGCBo478iPoYeo8CTfbgyFC",
  "key23": "ekDY768PhAzFjf2vz1TMC94Ury31JLHxTgaoVLN67zWHpNDyjv8La5BXPzgMDKu8182pM8SwVoNvNjaXXiRowJW",
  "key24": "4wKLB83E4EGyK9xNiCki6S3rjQNioXqsNtPtVEJAC431QLFQuNxjyH7bhz4WeBrcQQfF9h8HZFH5iNsqFrzvNLTE",
  "key25": "m2XM97z99UvFjSSxgKAzUkvHRBGnEj2rtVnGVTEcZzoVdQgHo67MA6GcZEBPRpbvqSy3M6iR68RvXKN8Vi7r7MJ",
  "key26": "3VjPqZZJxn1h6QLxcWzyh8abwDZw1Vq6QCnBGtVviYgVdJwPy2zsvhvjo8zSYH5r7482A7rtPM3BBJDfWMX8wXJE",
  "key27": "Sj3vYCoZZZiSnj6sMtDBvFyXBB3LMXx6ym4qpJVMZ61EaSvHyWPPVec3ohxbpyauaxu3pB9NkTSvscxV5RYCutY",
  "key28": "4x7Sx2m36qjxXJDzLcUWL6ScfctN51bnXyTuyaNrtox6crfjWvD49Vr9htT4RCpUkcorSX7t1VQuQe212fM4y9JM",
  "key29": "5tpeyb5z3yaay5KnTXU3z5VB29RL5sDwWaAtPmva6QZG5U8QJoSoq8LuVewoJAttC6Uk7PjWxwpUNhWnMZyYPRLt",
  "key30": "2acKYqRapqCSdK2fxtdwp7a8KgGpZpztb1fHvhMi11QBSTfn6gWpp6RMVeQPjnr8p1q4noZeY4oxkbv5Y4wKVPpa",
  "key31": "5ozAW5nRG4Mxdm8d9H28arKzqCKLriXoBckZzeDLscZy1e1edqaowEnvfMEhz4RJquLRSGzyGvHR7rMYaqcL8HrU",
  "key32": "2KDPrwaoLac1KLzNbpqw9CCBfMmX7eojNzoa9WTuD5jXJcFQfZBMQUFJJZARLskqvMqH1iiabsniZpaGMsgsvGKy",
  "key33": "3KDJFTDsmVff9XruR522SmiAeEUQ61U38vwd5DjJv2KyzhJxZKKW5Z34rEFLxxv9RtTqQoW5YuUmFyfgtM7qSwkw",
  "key34": "4TBjevZji1YJxENo3B6udTGH83TQMJFsLaBmSSicWArMd3HCgezt3cdr8cebTPyEZ3g6xqMZ6vxSJUdHPYVj3FUJ",
  "key35": "3iJD8K8M3xM8krvv2mrUEm3ZwhKqx1eT4yDxBFPfR6teYJCad1vuSeYT6sDhDimWhzHbXBhAZMBit6FgUSXu1yMU",
  "key36": "JN22G2fTLYCF4zUBdb6SytSyhTPA1bNjbNFnNCyudj7sy4DMHGSyUoENFREJBMLeLsuEZEDBLcxBYYneZ5hkCdv",
  "key37": "5qoprkj7Xq2SAQSWrdPhqEAXmw5CHzUZkdsMXwS8jiy4MTofg7ZNhXf9k7LUpSCoCKKA5aWJRJMjz1PGcTt39Hu7"
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
