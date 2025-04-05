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
    "VPe8dKsMCbBKWe5RkV3Jd6i1hebxqSDnx3nZAnxt4N1qheJXdJuxnKkmrjiZRDWHwfgzkLrK3dD7Gn7REzwmf6Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vp8x8e9yUcSznU9hBEbcSTADGY4ccGeFRnaSfXA3Z3XhMhCSBnvSTn5kozThSeWrqF73js9ygiM9gvFKsjThuyo",
  "key1": "5E4K8CgHAGYaQqy6XJWms1erZqjjgBurFfTciNAKiYr36PF59p5JRsCgQWZ2ZqrkGhcvgPcwPbdhrPRr7V8ywcwf",
  "key2": "57y6xKdhGo2L9UNKKTAfcjph9BJYyCkWLp6pQAPGVSF4hauZfddYTS8UduByd34cS7FqmcyRFMpEipifzNMVK4KX",
  "key3": "5DKiFKjReWrF5HLLXYwkYN6sp2Mxn86H9CaktEq48Gt77fWSAdtkntU3Rw52BKRrDxnHSXZ4fKn33p2Q2Xz3tG23",
  "key4": "2TsFwyJQAzZ8MNxoPh1YuzmuttV26stgL8fCzU7akQN6dtiXtp1jEsF2v8jcogrzjYraWsiZ6WkoQkSAvoxQ1FaW",
  "key5": "3LuEn3SbxoWsSbCW1m3pTy5JqVbEK3w9SicKrWapbjHkgPNEqfbPGm1B3Hak4dbA71ipfxBEb68BC9JS9NQWmmsW",
  "key6": "42HGx5K1Pgu3RkUYJRsqMnkdwY17BDmoY7diemNRqnaX8XwTkbB5nCrw1P4C6DsCKUFtHtypcUzutoUzKnhMYxB4",
  "key7": "3tSsneQvk7skmdyiBHC641q6AyURg4jDPWX6UMB3MUWrLsiifHUsN9JjfCqdrzLx8vHfBPpeEvpQ3XrN1EbLMsec",
  "key8": "51p6hqwhTp7XPaeUgyzYThFSRumPSG4emFfcWzTtC3btuwDSz8CP7uwc2ftWaPNuTtf4HKnfJ515GkCqPZj8UL5J",
  "key9": "2MtkzgN9hyi22L4b1mMm88quj1ergvKvzZFp4sxrmFQzMhmeiy6YNZYPXzSWf3KDpAcjshqXYU2Jitg9SPJnDz5E",
  "key10": "3YxwQA47Q3oUZJMD6pEaq4kSDVwSaFAzeFRaw4hxqcChnWZ6D9gaTV7mRh5md36XkgTW8uMJUQMdgig5i5nHbY1s",
  "key11": "3nh9FSGmVEmd1UNRp3qqK1c5BgB5WA1NwNozjftrj7uxGPsBpZx4rDava4MYmg4VyK3BCv1J32VucgiFcDZgWdHd",
  "key12": "25HghYMDYiKJDwjWfG5JF469BYp1RzcJJvzkGDL6PPmH6pRCbW7YaKW6hRymQATBTqfPLua34eAxLxMkDQqi5N5J",
  "key13": "443PdtqkTAoB6vq1TEwHKWa9J2htsYT1LvsHygwanzXPGRybRHgqRtGJs4ystEHwS93b1hwHMP11V3Ru8hYuAe5F",
  "key14": "2ow1mQzVbtgM2BzMGTPZMbeWgx9c8ca8v8CQdiPYcCqMWSe9NDvcmqtAeN8UF8aKFuaQpk1TJDzEfGcivJmNc4F8",
  "key15": "56c4KW5ZY6pNLEjqtcbBCcz9UgQdUWv6g39pukhNVkvW1EtRHYgZS3xYx5c7mEejw2LWCHbdAqLC7FsvNM7Jq1HA",
  "key16": "5Qxu6SYdnnPGFUCTs6e69vFEENdqGFQoFL8SGE5htVTKE7YD3j8YkvD5UNakmQZ7aE7DEkDeUYhTzbnrj2jzDmVy",
  "key17": "5owjSKu6Zh7hm4MyqrHWULzL6w2dHy7DaA32CkNMuK1UKG3obZLxg26ihZk9QLFngDo2PaAsRFYtYvatGXxYrS8X",
  "key18": "5CwuYSdgAYcybDMBBSTG4wDbYeFuWSCGjcThQ2QrdKvw4Rup8fBhmxaVKz6kEPLBwiQC7i2mK5HQR79qjr2aYzsy",
  "key19": "UNeHNQYVVciY4Y2NqMfDtj7uY2uW3KSWuugjw7v5h9TqD9iHkMw4M1bvUC3zapfvyfat8eN8SveAmmSSunZXuha",
  "key20": "4cQgdEwp42nG9yRgzHYxhZcQGAgeqbji6u32yyzuCSFpjAtxHkH8faPTmZKTcQfFNKREmgnwRV922Sx5ANioDXqh",
  "key21": "36UbmsMozjUMcNgEXPqbzA6Gg6BFCK7qnituz6NYh3WAUeYAMmMWJPFX3sqk8sufqgEea2FBqJeFuvj6PnDVDj1R",
  "key22": "3EH3foYXxjqxZLccqhQNXZqJimZfRjqaVuoecY7DQYFucYryLunnjzKvgs91sqf6a2uozoYvcWatFjehFJGGnaJL",
  "key23": "2KAmXb4qdUHQpShd46yrppkvEsayt2xvqccSWE1NMzmrPqUwkRrjbgLWW5RBYey5vDQuyGtcqMzEc2aLvcTsF3qm",
  "key24": "27TorJsJrtiGVDqrciMmTpH8dyoWwQgVmqnhQUUcMzdZwrKUXuVecbSiKqcB6H9BpTUH6v15jWmgy3yFpsYHouv7",
  "key25": "TdhLPVsmh5vLuy6jsvWNTgiJydHaUphqYSjzTXWEBduiaH6Vg4g8knrvUmsSGh3EktA8Xt6gM1tSzJjYtQecjVb",
  "key26": "5fmtjQKnqvXrWcqBcbMwdLYqhBuQhhxHUFoSA7cQQvkBHNVtVnZXWJpiQ6mYSEtq22FxYNsoMnduVLC4MEdrJmyN",
  "key27": "5njMfNBDcnoupqVM3GKP9LwdseAub6wjphZYYdQB3NCgdbPWz781U1q6QW5o2DCEiipvoj2jwzmL1na5Hh655Y41",
  "key28": "4bBrVD9uacgNTX2tEqdgSCBKKc8MSCCvQW8TLoyTicTf7391K9RBRBYU922NhfkkdsEFgUvZHQQV5YYGXCkXzogn",
  "key29": "67iCkNWiUgXE3sPLrGbsWf6LCtRaGXxZ6vBSpy7sFAM1oJB2zZWEVKm5dakY3Dev6PE3dFdUtvfXDjRZxSU9zXME",
  "key30": "5qxo3iTr6jmkdTcS9suuQ6QxGUaUW32RDssbYwcEepVPEJv3tFq6C1wUnXfEcaT7fhNn8VhkVqZrrDkoZqTwoRHR",
  "key31": "8TWwexLLhgPzS2m2njJF8ixHCNmb2FR6QZjmjsVbnH5CZETcn8W7QYNWGv3JVPjiBN8ktD9ex6A8svxuXwRrVbC",
  "key32": "2SFNkNuhQDq3NfEBBZyt8RM4BopKtSqzLKCtnNLHEK5wFEdfFCzPMPQpT3gSc45UfRvh1uiHHYCAKeXsAsJKPe3Y",
  "key33": "2Dk1iKVYtk71pgAAMoYwLfLFtCdgvjoZ2HKRR1L7BDuckY6PQK2GVP4N11RgXAVD2JuJC92Dq7SGZ2v837Lt8YQa",
  "key34": "61vpQRaa4BTjqvVzuJgdFBmtSepEq49TZWPngE3T5odAsqtWgA7o2f5JsbfjqsrMheLojPHBz9bseAhWvoF9fKpA",
  "key35": "XAwX8FQf18bPSnpimnXvKj7TpkQ7wrXuzE7Ci8BkEkw461Hu8KBmXXUGxCW2zXRWdwghA8jXoAp9pT4H9M9MdBd",
  "key36": "55urpyRN1zXZiiatEwFDXSJNFh3CTqsdrJxqNgQj1HcHLQAx33QbkzDSxwbp8XtQaawUSebjXS2Lae79ydfTxj4C",
  "key37": "4z7mQiXvGrCS9rUYedo4AMJGpGPtKbUPc6exrWtjxFsHEExDtcjLG2xcyQ528oFbXEWuF5kbJ5bcHXGVt4f6Y9Z6",
  "key38": "5CLuRbBNPqFFWGQWsPqtCNKYYY5q7TMJ7aoUHZEC3VuNDYCAriSFwBgJpS4X2SQJNgj65odvdTPxksZLZn6Qx2Uk",
  "key39": "4Cx9rZAgQ4onnEcrpnNurnMMxrkbUUqGB1g2674fTQwnGRAEV6aiFxAUrxpa7uUUDiyoSNA3RLiL5JYiN5TuyVi3",
  "key40": "4UcTaWa3GHGNT3VEEKrLvTEPJEsBtfxsUFmLgMpCMi4SNzbnkX7qEXZui9uzGcxBwjEvknJjeigAg1beYodLuWdW",
  "key41": "3G4Rp4se3YiYPS2hTaaixCKiLeZac4qMjnYXvbQJAENTTuk12KfTAssJkWxvgikkF54fgYVkWXcyyG9a3uJB3EAo",
  "key42": "4eZj96dEMzd3nF9yNSCKVeJdbyT9ZuvbrVcH2ygveKye6zzum3qYTJ7DJCUQaRoqeth3vfKbyotjUxNBCqwwoHrF",
  "key43": "2R84R8nyPZD8q2fJEeq2fx3Akjvf5Xm51jeYz4k4TpcumPt9izubvFgy8kwapEaTnmYbisZqmaqP4EZ7AQZyvBZC"
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
