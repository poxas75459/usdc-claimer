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
    "4xGcsy7Z4TQ5v6oGjZ6k86yzCFtKfjxATPLBL7bzFWQhpYfqXY2GPGVM27NZ7xnRZnC6RK9LesU267gW15FSm9EB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33azog5H8pdg39J4C2zpd8TaUWV9o7GJp3re86S2tdnFQ7DsD6a4AWz6ZGBwyBsdvc3JQVJBbAHVscb2w9KFCgVA",
  "key1": "3a8AjfhSqJtNzmCZA2y3KkDy5qQyL8uLuoTAuUrSHaAxgj2UvNQuRkQsZzgg2XMFCtRFQ4YtUZPS5zmPuQfMCEP",
  "key2": "3xksru8YcGaeDEjWMtw2U56BWJR1N5qRVSuSDexfaKF3toKFVfSLcnuiskqnG1PoindDNgyxg5iw7f93HhyyWv8K",
  "key3": "3VAXmfQJS6j8y3ECVrFvbn58nKRiBh5XNn7xGXMAjWaCksC2vfTbo4wWa9ojwxUHd5j6EpriuTunGx1VzBS3XfS8",
  "key4": "3Y7aSho5Ra15YsAcziaSB934UZNH3GTSkm3hd1MwRgNn3LveWsPgvLkRgxtVwxmei12NCDUEQffFB3JyfxvdfZeX",
  "key5": "24TJadrRK6PEvdKyHdTZ1g31Mv32UP3xw6Lx9Zjy59eyBSBdz4GiomYXEfXE6pGpAo8WgRvbsbTziwNw7NFNZQkC",
  "key6": "3uBkLxEwvPKHMJrDBpTmKhmP7fX866VVTaS5s6BHk3pPA3igKongRodvvJwiBLsLywS3jJ5H8E5GNpuy3ya4yMsP",
  "key7": "3iGfs2kbMkeCNdAsNniDwSCpyLbkrQGUhNfKwSYmonk14kMdvUpEJWjxBtZNNUVjFv5haXoegG65C6jAEZeVYSDi",
  "key8": "4cWRJo6aHgRKXHCrXnagDhwkCdzbFdBohgfh1iJG1uQnafvZJVtqpLyJEMmKXmhCLFufANyj1vuBjLddieLXRims",
  "key9": "551Lh1Uf6wwZTi61n5SyTNpkcqjXTxTN6SDHUV1LqCrvCPxWXj6fzixC3ELqJXeeMduicEvEgNWeNyY7DwPiPrag",
  "key10": "5DonRXqDZ6EXmJ5qNzRfhMgsoVovhk4dtVE4i3SnnQZGawhB8QH3WQa2SmfEvHhhSyUsgBTGCHH44JGKSQTH258g",
  "key11": "4pfH29PXYfvbrQJkuoiuApD1gMuTfgE1q6Zx3zzZLV1aAEye7aJGPaczLs7rnifU4Phi8XXuNs3K1RpqgwUw1Yte",
  "key12": "2BTDvak4RLXi1k45daNjFKjshpzfFGQr7BfcvvkrZ8VYA7DHNt7xZey5H2GVP3bisCQ1xvANwjyovreMAmF2SSiL",
  "key13": "3om8CUb1eSUyywuVbS6xhQtouqVseoDAUaCn8K3KDFsXV73zJbugZXxvHCP7zNKhnUUDbd79brTurrcQJRY5psu8",
  "key14": "XCDPcG2sE1o2M5PUN6kXFmVAZDntojt7Z6XwwbCpJXkUFRve4GEfn5s15NWXr2nRQmUDQ7MvRS6hPatsAibGJ8Y",
  "key15": "399ofrvMR3kL2RoLoR6uHv2vsBKTTbi5kCAhutTBtDzPGmAequCufVNtKX67AQrWqs6GB7WHbBANiVn2aKbwgApE",
  "key16": "5VbNXjcDgcpVRKNnsNdZr642FP5hbpwaAvTkWnfv2T4rDbVX2MNZsvtieaG7BPzXFSRRDwiwJcTqJfTEbqrex9o",
  "key17": "4FAxcEc3jfEeNpHjqPmsGGdazJVCoioCBdzmuYpaaLGe1GR3GC1CRWSKLm8P2ydazekKxdJ7RSoVE9yHr4vMFN32",
  "key18": "5MLJtbMB1Nu3P64f9dzqNrVaTJbgeta9EMaacCFo3sXSGJ7bGSCi9ci9aJn1mpQS3A6FrKSHnLVhM2dPoJLX7hND",
  "key19": "4882oLcF9aekyvxDsskCtmyCMnmhoZ3bo7BJtzgyLyqvVEsVmjDWGeDWiXiXgJZNeg1PgMA4y26CgLXLFKFgGwe7",
  "key20": "xxTZusn27gGv4iU1fJVgczhrv1SbytmeSAv3f4zrmDLvbJTm3zZnuioFh68yqtRdkXPnDh7cv1AuTwWknPv6FjS",
  "key21": "3yjEMfyz6tX2fpuz2rLZuHcpqLbJ842DedsE8ksarjx8UPvRgxtpTvqqPps6KaXkEcWsf5QbRT91DyUEtuR9sx1r",
  "key22": "4oxjpnYVfLwBoVcxHSdzEYpWaY3hCgtGxDRpymMZ2sBiFAefTVhcPqJnD12epv1LdnvQNSrnYWLjv7w2D6FvvvkF",
  "key23": "5rL9zy4ibYF8pYKc24n6vArocyKjXsZvPziuqvAgYtVtczbzCN4ifLiU8tA4jyhSwgk4dAq5Eqr5BNHvKXgNTb6M",
  "key24": "2NqzddKeBi4kA5sNR7Wz1CuA9i9u6vqmBeXyepagMh3A6TCY3WZu2E51zSPR5Z1s8AGa3a2qjMeeeKW8yTQuEQgp",
  "key25": "5dRQjduTwtDGaZdjdNvofgWkeQGY92TwYxWAW8KFdiCxknnMkAzANtGE4UN45Q52RghxAoBTyrdFJrR7aSet7qsU",
  "key26": "37YGUm4ixRL1m3dxXyJXyM5tV5e5irJkWT99P9Z9k55kwAV7nMgaR4pTXtS5VYb8wjskN9FWYNziF8Nj6m1vfxYi",
  "key27": "5ekRtVNtNZFDoewDbksLbNcr6L3rdb1wKj3wtz9mbmJ57wmjZFhLBTQ4pxkKon1mZTbfpiUxKp8GdBFUDXkhvcuE",
  "key28": "2ZxJtDGjwqMGsrAXG2fKTpEbjFhanj6bNYKZMxe5W72qR8iJjTModpThLfxBnoL5GqbHBrMCzUYoeg79eTkxi8Nv",
  "key29": "2SCqZDSoY7Zxe8PwmaxrvXmoQ2t1GRDZ7hDPdCKwEdvdN3c9DqwAh7L1qZsUaYc1qn83tNvhYwdVS89V8evzPJiQ",
  "key30": "3bCBPuEYd46sk72VURpBjEpqQz5SfRg2Zmja954GMEWHr6fyx9kKhnUAah51S3Hs1FsLGRfWocRH5TXWjXiRus3F",
  "key31": "4EAMD2wdVtKxp4bfPCsvAEjSwgVYS2gXcbhBLdRHpvXjxYdyxaZ8SoGwR3dUEmYeg6gssomfffnYYkRDJ776Ufkm",
  "key32": "5PJgEKhirmWTtihHcZgHJNpgfBpHWaKUX98CpukW92vhSpY4Pve6C7fY3HVY86xKJuixVbiBjJBprAMyMVFgVgxj",
  "key33": "4eFQmhLY7wVo1yMsDBTWVezHCbxRDUbwyqGcNqqxv6V8BAqGdsfEsLk8uMff3EQYJnwmQSdos4jjaMCz4UCsQpZN",
  "key34": "25pt49GrkPGDGgfN5HejdxWZ2bG6JPSVAsRHPn4nwtzBvDhPyxCJSiU7aUu1k5ow7JhbwzPq46mctSwyqvfuk9Jv",
  "key35": "3V9jamHENZ1sm4GmhAQxVNpbqwfe9hkNjQ4ghUwrVLS1m3WdthPUKVUL8WztrCxcGDRXBFxgmqFyWXVZv2k4HKKk",
  "key36": "2qk3xSXrzTRGabwWkUHGoPDm6nWDs3m8JKn7c1Tpv1en6Vmuy1MEYhdJsyUsuXrksRpSusFpxczwFdyvFYARyZiR",
  "key37": "2aCaE3Aonv4waZPkafapayy69fwszJbDe8UTbFaHNJGdDte61jBvqMweK6iQj8FJxCTH86nA3Lnry4XuKu6RV4j",
  "key38": "4GKtPjBNv7iuEJctyWM7yhNVYFsRQcNkmDNYwebTD7aEmpizAGFyfqvMUpokmyUnqro5SnoEkTV95mBwZw6CHHoQ",
  "key39": "Yjh9TyTewLkP9pMGZArVqFifBRQwV7x2XQz1yVFE5Ti84mbn5SJSuXAtN2uKsY6Z3svFL49R96M72Zd97kT9C3n",
  "key40": "2m8vnBdHik9v4f9XnKootDGiPhk6dD2Cy8bvtma6x9F7sfQRThmYZrgGYBGrxasp1wjedeMCUBkFu8oFUjJGrBqY",
  "key41": "2pHDraM9PM3aDobqsPZD3QjLxoA66Td4tw4Qz8rsU3aMfivrUr1VSDC9WBnp5ZFuJ9gTkUARKevbY51iFpKwPtEa",
  "key42": "4pL3zDED57NQERyBZpN4HYCmdaY5uwsCKmsKK8TxE1ynt1tdxm4CztzoGZjZ5xMprMmXfyEy9o76pSZSnDRf5ptP",
  "key43": "2jvdLYUwTiobZf6j3Vm6U1fuXQjniQuYquJgnaN8TR6mFDbY1iaiseKaGNjoSQUtwhNYDWbFVwERhKCnrAJUjZWa",
  "key44": "5XhKfSNdCez9vtDz2MZqEdLbBraou6esTw4cE7vpH1GNz4jGaak7feqDQR6fNeZijQp6cCB3CmUqCagWbQua7C4M",
  "key45": "i8i82X5ponkQgfQwQJwuZp5yrK5GWo5wKmSWVaLED5XBBJp1kWrBcqmhVgEVyhZnm6oAiLSUTRQwTYmgQk4BtHq",
  "key46": "5hwBkJHTt8KvCFtxqxFB548zAChmwNrVN1V44Z79XQoCZycAnBfoakVrmMMaWJWSQSc47ANy2Mi5EhGu6ESVu2Rh"
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
