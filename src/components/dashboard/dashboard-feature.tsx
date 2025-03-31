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
    "2UnB7c3xeDYrxxYne746huj3crkpjxUkNcJaqUBdibgSPvABHtC8f5kyrEhkUDc6dqrMXUCgbygKr5u4TpGdNzcg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C27qrj7qmK82xNSEHjtLL5ZLTV8FNk87kj6guKdFCnGrULNtbKdDiMvfihAoy4CYxc13yxtkjEBaMvhmb9Y8Kfm",
  "key1": "5JWdUo954MGBL9cjqEiFZRhsiNT8wjot6V2qyfQu9keYboHP2mM7HdJQ33KSfTmVChfXp52enbW2MbJka3XNbg74",
  "key2": "4V9PFczdr3KW9u9py1DGXmf9fEEVQeFBsuBK2KKNoSiiQhiNb3LbPTaj71k7jCAUxxxViHgKVgUx7ZG2WxbVKHpU",
  "key3": "5KC74863kXFiUj6chXWLvdaWn2u7p9actwqdt718J8FV1RYQYMErgTo4MRMk1bcVXf7uTDHVoG5n7yYT2GtiL52W",
  "key4": "4RhAJx54H9amEdpzUu3aieSzieY5SbheW1sFpHVca46pRXf94urodrPzeM7ZQwLjJnZABY8Z4oVCHcTNzFyYYyJE",
  "key5": "2fMkxBPGpwVN3drZesZRq1xajci6zn6YAvtoeuVFSsP9pNdHm6U51BQpqYv4neEn1pQraT14LHH1sJTJNKzFXSgv",
  "key6": "5RvUWHaxPgUNoPdVaG8j9U3KVox9cKAF4p18LNfeY5eEPdSDaNb4zLfTRCJLf8q8noWVZ1aTh43F7L1fvNZ1MyyR",
  "key7": "5Sb9m1ZJ8AHBwxgvZCseRWCR8TVb8r7L25LFo8gzYH6EY3QhZNMHDRMhrRXCD3koKAczByJDzaMvjs1YwjYq4hxz",
  "key8": "3srPvzo1Exo4kidWRhu6XhAskjzu4kBH2CtM3TAuXD5C6TFTmt3At5eUsHm1n6nyiwjSni6XY7oYakDGA4WJVdii",
  "key9": "29kWjZVAkNy99k3SJknSxy6UPFSnmA6C67GSeP91FG2Wub1hNnoVqEss35NMTjwPhdofcQnFkBsY3PyPnMqSQcVv",
  "key10": "2T6vLpVEy6zaRyqPFztckGs7sNVcUtbpPqpZp3KTnKP3qGM4HWozx2ZZeNs9TKBf9biK4yUcYsNTBW1RmefpgmYm",
  "key11": "3HTBQQ5me8w4C8gzXRHq8XA7MQeY5CH7VyJ9571qGkHQaWAngkEoZW7PHXYDcz2gWYuDMTMgkpPUKxarqwh5Yjtn",
  "key12": "3niLC1y11KCiVHmXZNL5nAG7iBK8tgdwaRVr1CQgeLexXycNqbqjtVtqVorDkJmBDn4Ca7b3f73AaswdFLVkkis1",
  "key13": "PVdDdmZMMz4GeRpzywfPyvcL29pqP1CcEan6y7eLPXNDXNZfCx6aMn6WeUJAhGmMXwt5vQ7GDZ2GNC1JdRN5R5o",
  "key14": "Y97BugS6qN2RVU51iZFVjkGWiLd7aLYX9rZC6pa97oYNACui4vUYUssQZdbEtUKoxVZHx4ZQaMQxS89B9Qufybx",
  "key15": "64kdrYBtWSzHKkeoj3hwYsRXSEyLzW3beByx8h9aD5eytQUNMGBtL1VguksEEXkKbfijX4764rtfH1qFKGuEPWLb",
  "key16": "32F6twTTRh7226mD4uks7y8D4gy2tfL6a3xiLBp9rNPn8eQzQ5vVdtETQHFpeUpLVtb8c9TgDD1mxLvisGSkqUYe",
  "key17": "3JkZiXixAvspmBjYtEJHkG6XT4g3m7dPVk52NAXnF7PUB4PsASntD2vG24oEzY5yQDSBE1PPBKLx6ZEYRtSAzRMe",
  "key18": "2UBcCqhscNi88CyXbA9FUFmgAa4bN3ZxhR2bJKYXWerLo4KjqTsLXSwt8oHpsboEyYvWeKdoKmEnyqrHuKZe8RYa",
  "key19": "3Mz7AJJbKKQYFMmDgr3EHPwUobbjhx5bwej8n7riNFHXUeeoTkwzzgNeeJvCtnpZTGs44MW85Xz3HNnwVxQ5NKHp",
  "key20": "5En5hxBX2K2ny1WN8JxSYJLXtc48zVLtkXYzchU3sb4v4DRYXZtbwKdgpNZNDD1Q7i2RociJWNbYPqnqGj6HiqwR",
  "key21": "3Gs1291q1XCa5Eb2WZpcrY5svs5VdtyUhF3WnXN7gBSzEodhJ923LJJFFxQXSrH3heXxHKiVY2XF2G8Yp4Kib6YE",
  "key22": "5Y1884QNnXsGM3aSvkFJaYioxoeHKu3uV6QLRZspa7gKawANCMkZsW7ewK9nPxpkeZQxuqQAT8FZefAXieMGS26D",
  "key23": "2fLRfACZ76sa7wJFTS4tT6pHdyifHaxasWspvnXhLjbEdFVraUX9D1N8FkHwTMpNY36hSoYeFcrhkBwcZXLSR27f",
  "key24": "b4SiwG8sS2GfE26qv83Zzjr6D8GUeogG7uiavyQFwjz93sxcCa2RXYNphupNbiCCCy18ziPnbTMeDg5itGfZ9BP",
  "key25": "58bGP7WX2h1vWqZoVMzz3qs62Dc4ygWd6Eep8JyGE28gSaz3ETAqrn2mfvEFTNcm1DXS83owZ4mx3A7zC79k23RU",
  "key26": "4wGRB4AZ8cES2KDLUw5s27VTi8tS4fr6HVrkuBNayfCSP5z7LWwGQyjYX11Wd7yqRojywteGDEXAibXrPLH9G55m",
  "key27": "2f4L1jqy5gRJkadyBy54Z1tFVZp7c7rc8vqGaNh6XxyYhvYyaCjnZjnJFMmft8H5WG426AdXpYJCmjuFFAKDpseS",
  "key28": "5keDqXvmhfMqPNsWffPzZgnqjgSdbMgxTy453jaEqiRFkNN25ibiz2poHDNU1QDoKuKRsHt8Tpf53QMXkCWNkKAw",
  "key29": "26xkuvTFXd5jzHVYxWio3TPQVJd7c9AkHAdXpafWRMb86ZVH7j8G9g9M2Av2KetsCuB691w3mWA6YBLCqs2iGyTf",
  "key30": "3cRy2qdPThsoDaJf2Fcbx5nGpdcNPX38KpiZLbifNZS3ShdNwg2DWyH5KbJoHm6BBF5nExnsevDDSoKpJUPyHyGR",
  "key31": "2dZ7p2GyGSfXA6hLiW5NDsmSLztCadWZ5uvi6dJxX7zvbfVB5SCKBtnY7EWmQUSsokPJq4aXqHEpJUfXvWah9HLU",
  "key32": "4z1vNU1uxwFEpSpxGLkVSza3yiebTLSQCNamwJFuoCiYcMq1LHgh1eTuZRhbfKVAy73Z7LdBasVrZUpAzHqH3DwK",
  "key33": "57d2Ta51xkxWjvSL5Zw5fxLMU8972ZNBNuGmaQRkr9PcCEMUYJjeFsmQqEy5Z3S44ciDjniC4oHiQivPhQRXSnXG",
  "key34": "5EBCjzncdFC7zGmc4LBpf4PJhdwYbf1KT1TMbPnJbFZWGP7PGHevBv4ssQxSrswdtg49hFaq8rig4uLJDE8v7kU5",
  "key35": "4fgVinaV15cSSptrmi3nWomCG2hW1DBzHYeMd1vRJj5BgPTDaJ9aVWsaaMYfrHeVyBg2kwX1wHWdJthB9kRHoJJT",
  "key36": "3BoHP9TqrxunbALTTiofF5r94njtTFftxx1q3cY43WGmQ2SStj1VTDS5SWgD3uVmY2UW75bfhRfc2WZXkGdgME17",
  "key37": "AdiW7bqkB6AHSFxW5gNLfDn2H6py165tZM1nHZuApDVFSZr79bKHt92zjaSGVs7SKFKWite4TDrqm2UTVfk1t6c",
  "key38": "QiQiDC6WrmWKJsq2dNS5NCcv1PEVpB1oweqFywAKYyg6QciaqyeMyDJVe9fMftoZ5xYCCv8BtUcbya8PFYtwp9Z",
  "key39": "393fZonM1swVGHTL6SWSQgYFrvq1cPCF9mmX2331gkpBEk5K8kCKQYA8vbY2ZDFi8VVNDRXGGucEpEWjPsgCUUAu",
  "key40": "5oqAMz22Khf8S2YuzYAHJQz4vtKHkChD6JDREjZZkBhfNeCWQGuUAb3nCjWktnPPCsrQYv6cWwzm3PWuQFhGzTbs",
  "key41": "56vK9xsqUM7C2uLwUZP3env4njtKa6itBMSY7vMDGDqEGPML2oH4ZttYu3dCC3LjYezvJGtDtZMHkuWVdHWsrgrj"
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
