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
    "4H98Pfx3KHFGxezPh1UgWB8sc89g6eXyFMcoc6Z1X1KZcwoeCHyNWaUbWju5Uzgqdmw2tXoihUEKFmfu4AFT5kD5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K7p1xZiZwPBEGLPtHZwvuJ5HVVnpYr66jGSVWwM2emU55PBLkfzMKpRkvRGLGX6TkiiT98bRLFkcBJcPpYdzjC3",
  "key1": "szCoJ2bS8Jb4CnL51JqP5jPKJ5VtEe1CWqkkaajDfM4sNL4LExsG86iKno6KsVUxo7Fg41zCUdt26tQpj7cWGfz",
  "key2": "29Kdvfy66FwDmwGoEsE54YWJYarDkCCc6GiJ8eES5wHByCSzDukrJBqEphfJix4XgSeJFcNxCRh5ruYinVGpDrYG",
  "key3": "216umrvRwTYw98wim82BMC5BNoaxQFb4q57tMeGSqnLioYSbDXi2n211Q42w8yjfRi9BP641389MtFSErSwkDcrM",
  "key4": "5GCMGa3G4HABinDvonTjGUf6XgpkUtxVBDZzaGuLMMtoAZuFvrLY3whr21ejYjBRJoSSPiG1RXWtq9chW5WGMrb3",
  "key5": "5CMN26PRF6tbR9LaCkNP22ctxan3tE1M3MZsPnCfGWkRwFwcoEc1Qtmpcf9BxeCuuwKbV9GXNucp5JT7oYbEYYDB",
  "key6": "2GJfN3x64VaorqYEWf77fodUTtkNXVVLL6wEQv9SJ7kj6Ph7ZGn3Mr26GFGvYj4hBgfc8sgGJxBn2QMtPksLRWf5",
  "key7": "3jjL9ibBgAZnVGFdEYM5ws5rMBdcGztE1SozW34ArP8PdrEeT7NXGTKuycGRVQQaTg4bzKPn89wxwRmjLv3RnTWb",
  "key8": "4LW6ct1ye9kHyfd2b1mRacsADChRP8xiePWSuHEopqtD8f3gUZCsKQuz3ntAtYY2HK4UbUuLhUAmApiACR61mTpk",
  "key9": "42VSEeLXj2PxcbuCnHaVMf3P4NsVs88ZvF8cDZ5DuVCShmLdubZ2ZrppgKEL45Kfh1aJ84scKhZJKNpXEpSbBx5t",
  "key10": "43HDFc4NidKDH8ZGVHhzDwHBLcN5sh7XzqZtoeXYFbx4CR9TyxzbsCUYChTGvmNh2qPhTXK5Rzvufx8zMfzHMJqj",
  "key11": "4u7NZ3RSLUupvuiakpedHVfKL9fCDDwRDW1VxKATqDHXBbJTiQ1iuGuNp3R7AniMLmLR4zyKjuiLSrDGeEmWNLEE",
  "key12": "3h1EAEWXrJZNHAoMFktRgiVYpZPPNShbPpzZcP8Y8A564RQEnpwF6e3EPDfZyk5pPi7nAQsDBrSY3SARqaS6kT2V",
  "key13": "29mts5RRrhhqPGKpxb9bhactk91mEB76RaE5DdQfFXURKxC3VdfxmyB9Rn2S5XBQv7fBDUL2FmDHUpJ31ckL8sja",
  "key14": "4DtYAXErRJ3kWmUJAzw3StPCqX6wAgGZaBj1jfb9bj9oFnFcwowehrUBYocxEqks4U5dwgG8QVSSZiUhHf61Etrm",
  "key15": "37P6TixKd5T7tVmuaYKwhaUtsuQLxbHwEXySiYvbqDyxvMjTJT2y4ruexcCM4e3vWQiTeGBZdZe2orD16Apk1FwB",
  "key16": "5vaqnNjqnyh7GBsntgYps6myufjbGLkKkcrC2mxkegbH2uYJGoXja95bnJTE6e5HmtzjrQzEpnETrJ5kV5nXiEXu",
  "key17": "FmRkdRMkGfJk76RFT97n4UjfQQCqGZtGp7wvhPQyZR66s7AgBF9qZ1YzYMufR27afV6fFyySzvHkX4HAgArrAEY",
  "key18": "4YvJFzeP86M5Gm1FPbVVEQuzjpqsx9NJf3pL8AP3Zj34ULULeVpPZHtfD4rBPPLcCNchmjbC2gjSZMuk1NDp2Hsu",
  "key19": "5UrLYPwNpooJW6AaDdrwCC1oyHEYS3q2noc6xSQqJgLuZCPpwb1SN9iXi9ptDXvzGGXao9hNASPx9mzfJe5Z54Gs",
  "key20": "3qaArThrUTenufVnSv4zpqi2juXd7JQyTUj8Y9ABS2iVe9PXjGbkTZoWsCJVwX8K1mJkniiq16ScSkTzjnBdrWDA",
  "key21": "2Zv4CXNbca5Pve4MxcrGbLis1vPhbYghKZqiAjQko1hsZT6515Jv9Y55L4uT6ZM237djRypg6YipTUGRj5W3gGJs",
  "key22": "4q4sTqYQCPXAtwqsw3xCZxqzFtfnf7Hu1E3MjQvww7buyWHYq16kahuJ82qFy2zDBfYNJZTfuqroSvLgAWMmKj5R",
  "key23": "5Y6rTFht9vErv6SkigRXRR5meUzPDaQh9ZkXroeFHEYWtRqku6V8wqE8f1xc6AmrxsFoJGhixFFC8QuuxsG4nnkh",
  "key24": "5SKy49JBhSidogeVZAphkvwpaDVE7m2ixBYjG6K6zfWtzLDrpGe9hjW7oqSPQ7rYZVvxV2zLkdu7snusJQbsm7xL",
  "key25": "4uP2oicLN987UFHa93gY1cbN9t9cGUsdH7UMVg6JVfujDYkFj1LMGKwHdiXZB7DQRZXgHULs9Po7A3PhKVve5A45",
  "key26": "fGeoYtTRpFGWK6FDq4LfaJm7BRVAWfV51Enfz1xjFaXLmu5jFyWKjCiRiCTSpu1VBqqwXDrqZimVGnow4ihkfoM",
  "key27": "2e3jnh76BVQigQrASN8frtfZb34y4KP2qRnRjCodbBcB6r8DdHqpqoTdAY5Cjua9FWDHFCvg1sxhCMktVPDo7zo6",
  "key28": "2qoyCrDgGU6FWgTdmpavp5hDD1mAUG87oGbNBnJF8SyA6GeiXT5fZB7ojsQMmoThnXmh63gsjoMPTB4cLV62AT9Z",
  "key29": "5WwEkcH8KrpF3MEo4TbAXyo6CVqxoKJADE1FoCZNm1hxB4YWKFrccRpiFKveSLfZY4w5r7DqRvBj1dUizRngPEps",
  "key30": "SfUKAWEcZBF2rbWtYteC8witKUDTHjAEJk1Xkji5foFMj7cxPj4YD1EfSvyapFEiAb27cuic1cFdj5dtQ9RDosi",
  "key31": "3drx1dyiAAwkz7BrPKzsYsAcBqz546t5bEwmfAt2PTWpKofFkvaAzE29xju4kKs2FsadUxS2dDtB9WiTEy7T7NUK",
  "key32": "2nYT8TzzNJW7zxG3TwigtTFFV1b2dzfY2dHugayb5THcZzmA9ndgmZcLaSUgkX7tgFXjwcM1x1SxQFojWwK26yxR",
  "key33": "ZX9NCF8FDAycXP2yk7WrdecoWhcMJN92CpTD9BuERyA75UM1nKLNRDYYtwxfkgpG5HkmhnvJAMDRQcP1AP4RbEr",
  "key34": "UKC7sjifPEGb1Tbtn52T4D8WyLiDL9fhb56z3wArr9tWqXHWe8QfCFaBo54T16A61wCZ6eK1tSjAUT9kPxsePJZ",
  "key35": "5PeJM9Qk7LWW5c8RKhn5YjcF3EVaQ1ajMzq7V4epGBcZH9asrqeYpAC4QG8TBFtaPvHEYNQGa4GruFVaM3ZrWQym",
  "key36": "3J4zgR2WimhBt21kpKFpC2QpgGAtnRmHdhcQVvwUF3rmDf6UKdUg2BUFtr9K2epFkQqhtmS6K9XZSLpXNWTD4n4q",
  "key37": "4ERCaY7GcHYpbTTUVNTE8JG9cwhY3QbMBpKPAX7836KTiYyrHmWP5hTgjt7NDHp1St4P16g9HvrLmZ4pZTxrUN8o",
  "key38": "sjkKgXVuVkQHS734b2K2sTwemCiVTzFhhsxZqTHWsWgA71UeZHN343QaHRGdEAyDodcUQ1qxLPSRJUhpsycQNWd",
  "key39": "5aaXFUGQEozfprXSoyq3Xoa8XXa5wZoL79KskUS7J51YYudSdvYFw4LEABXDNz5c9xmw4JvujbrMaDvni4Kj84ti",
  "key40": "4pcYxzTcgCYAHXJFia9ToE7jVLmFDvWLQ6KioAPvtQJWmH7jD9Tgg5DLwnoKB2dhqhJ2d5R1iBxer7njtNwYF5hJ",
  "key41": "2dVTcFEp7i5aJdEyWztdpFSfpvBoEGm39pkeqyDb221GqbBP2PZReZUjZGbUWGrFtiJRNbde4eCYNUu4h61QThBd",
  "key42": "4Ev7itDpjeTcTqjmFHF8zFooZ4VjsqHJnvVz4KG4pBx63eFgZefuQpYX1dJVpYbxs3CmT4N366TUD9PjWfUv5nqa",
  "key43": "3Ff9HtUAXekp8TNxcvi5zdwUKGzyq8HVgyZ1jbzZ5yCmycsBUM1yUjwBADBx1Q7nxZcbUnov1wyPf6wus9LmmtGU",
  "key44": "5aJE1UDRReNEBHuujseNrGptRpa8kfJVU5Pvc9zPk9F44tJ18i298Q8qpA5NFkSrfVrVbhWQg2dMjg1QBPLXgoT7"
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
