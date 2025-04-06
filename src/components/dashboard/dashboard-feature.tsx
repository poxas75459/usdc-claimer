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
    "5sZapW4BQjWMLthRMK6dkBn4JWsmrwin1tCJzttVRJWaVmx3fNAYVkfk3xzoHAbsBD85uPgZUTPMETJzwz8jX11N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yP5Lgtk4vEyjjcM2TxGsEBDAQPD4XZnvVD9NbJ5grGf1rGvB4f5ePu9m2eeCvoJCs6FQa3Y2f1t9cCNorVtL25p",
  "key1": "KuvFjeAPgz7JsyptgWPLQzkGkZ8SqnxCKBxMzbjC4U6z8oJgjEzvNqSSU1hjmBdetvPaiurYDn5T2kGLrTnLi7G",
  "key2": "4yW2HAoMJPoRnKX3SLpkXJyPD9aNfnykM2WYzCh14o5m7y8Tn99XqyL18BeC5c536VKjAEv6cCTXXSVwYYBWqzmJ",
  "key3": "2rb3upcZmHsRy7mZ1ndE4d93aKjY82U4LvtZ3AvCPG3CYyjeMjGC4mb9kpuLyX6t3fKaksddmhLoNKvAr8quSvHg",
  "key4": "4McQiUJGMgDNK2UjgVd65UEAjMJqg4uv1rPd2c7cLxAYFDajJcRU56hxq5MmH6LPRecJXXzDh9DiVYMijnJWEFh9",
  "key5": "2V4Qb6i9JWqLU2yHw71R36y5bCNW2KYWMR8oqxFK9J263H6h4XHyZhp9jba8SKr9PcEzLcUeER6ciZbFzqK5MRfM",
  "key6": "RcUPvjmSYhb7NNjwK8kqKnxBwpX5YVCmsY8PvCtDpnyxBZeZayrBLjimvcVN1wtEhTTc4ksMnwnsHTSwnAgFVRk",
  "key7": "skCBaLuwKses68DbVxfDW5NemvDWLgjRDkjyufuzu55ZiVhD3w8inhqsf9UfafTfxxb1sWe6n17J6Yc98ot4yxk",
  "key8": "5moxg6x6RLKcPBKmUB2WeKheEfZMRxyMKW4fL8H4YkHqUmwL89NrLXNJm4pcUFLaSAZi4rSZcAZcUrJbtkm63X22",
  "key9": "Zb3y9orKdfzo7jNVf1fofovozoD8TpnnLLDJB8o5fCBKekkh9X7tKNVVvR6SoMKn9X9TssQULVYkDQ6U4H9L5L2",
  "key10": "5BZF6c3XktARowPRsbFcjGWtG6E9AQMzhea5tcC5Z6RXqMuxkDKW67VMYmpxdH8PGbRN5BEtwHy52wB5RQtYkkVM",
  "key11": "5Va8fcVTPQ19fzMDU79szpx94S3zQZqzejby5LzJq6uDu2tZMunHTRZP7hiy6Hojq1PqcFUA1ukTqSesSzjzPsKa",
  "key12": "4msiFDZ9N4g6oUPuNY2PvhGwZRDXG97qnCQ6s29PxJR4LNqQ8MKQ19a2rgwGUswqPM9BEETKKZHymZiv8uLDHv4D",
  "key13": "3w59hwoQa6n7jWUw6HgNGuSJg8ezvfLz51GUubkZeeDd9fE7RMhcMu2ApxFvRf2yeqEojadfSUAoPqMDYB14zn65",
  "key14": "2MQUF9nkfmgTfQf4Q888ccWooQ7z2g69xFUA5TTA2MFhjfMmGutSZPjrNECgnFdXshUVzG1EPkrrBXg4YptTjCF2",
  "key15": "5fBvzXm69u6iXrZuwVKyV22cu4qwkttXvV2w9XppFiUzATdAKaoKh7zSgGahAVXqZ2pJYM4YG7xwAYaL8iD5kuK",
  "key16": "34QUB1fMWQ469nermSmmniHwuuhSL5icU51Nz8rkLqdEtnyLdfVoJTYvBbYdaWmkFEVJzxHdgaxhpnAEnxfDZTYT",
  "key17": "5Btx8qViWdNkeeqLqYCJmWnBmHY6FqTeCXM55QwZfyXeWXUJJ7Av6QuGcYmjSVFR6PRCSzvzT2e193mzzBNPVNJ5",
  "key18": "3S3puLqV5V32KRa1BWt5PLBtS3AtFsKSdKEujUzsyx4PbG6AD1GUTepS7tmYtfsPEfoGkGAciuPfRXnY6KVyeTLT",
  "key19": "2STNpyDWMR3WtGvQKJEnfPDm5hk3mozNVwL9vHdbgYXK5jmiBAJiWZK3yDWL7kB3D9cLM1KUz9mEaYsBB867KAfv",
  "key20": "2USKbfZTxe6ur7FkqpjNRP82RvzCmZUntV2c6UUxVAcPpmHQU8h5VBVB1wUnEdtbfmr9yMoJy5pd8eUSGrtqMZBz",
  "key21": "5xpAXy7yYvxhQhwj53QygWLNAtW72Q2MHpA2QLE4hakQPRHJ1tUay4oX6W7zqQaaCMXF49LUJYsEQeGjTtvWYmfx",
  "key22": "cDJD97dn7xZi42967tPatDwsM1jQ5nZbzqqgVsqS9ePxBNZWeKzrxAsWkHevPzMraDrzQuJVvDtg3n1MDJxUXjH",
  "key23": "2PECyskTJcMW7KFAZUhbEEkWXcESoAnLYg6eEakRWyEerJNvEdW6N5puLcyGhK9fk3zr3zSx5MSy3kXcWvbkMDzQ",
  "key24": "5qmneoe5FzLijo2dJLgVYuKgWw9mjMHv6gZpQf5zVzMT6PKFjFxqaHNiqPmoj64SJiBQG5wciW2NYVhHRrFZp7FB",
  "key25": "d9qpWLJzF3koDkxb13p3HnzbB8rXfgDrEGErYasRE7gxs6gmA52rNa5SjrAU1ZXW7khbX1pYRaFUgb2e69j3hgz",
  "key26": "3NJ33MgbBUC29tMiuJgtauG4gm7ssEdUfKZ81P8p8KSXuEYhE8HVXaDZdRDrp4ZbX5aVqE7SBDVhbkpMdPL5xc8R",
  "key27": "3rjuWCyx1Kkp6jjMwHCQ4jj1YBkbhPGDxETLz1trWVdssQXZpa9A1CDA1WunBuSsk1bSxeY9D8xGyMq1y4gzop5S",
  "key28": "591zDk5CsRghbktADSPyZoyfaMwadt4GuSa8xYjrxDU4U5A2D8wbLW2jNw29zBTGjmSNALBvi57ght6wJjUBfJTt",
  "key29": "UAbf3w5psHBieCokmHJLBXyS6qNCSptxA6mB12CyeCfNymMX4j66Ne6FUgScEFTrFE285EckJtaLMS2C7Ks1UqQ",
  "key30": "rVA7eFuosZc8seDnsGeRRhvyJGUbEJwbjQZGeVBeKKH5dPmStSFAJ4XsxPccCxCKSXQfAftkskLNU4PvspwQgEq",
  "key31": "4oZCYr74zu7Siqi7GHBfxtn3tmWXCJ2cq2fRS3hFMt2M2kRcR5d4nT5i8QsnKwCY7TrrpMukFKUtUwf75APVxkjT",
  "key32": "3iDcDpZ7mXHkb4VmSqCsyGrsjpDZUNFMwskrZNtvTrnD9D8ADWe9X8ooKgTpCywXETo7EqszavEeXS4r1nGsReVi",
  "key33": "5SW8ZEK1pb2t58nHXihwWvdKbfrewJPc37KXqBMRoyNKD1WQyccXHxHit5zBSetRzxLJdVtqCWBLPpv5cxrMNrfr",
  "key34": "28hpspXnkfBnCxvc3kDT9pnV9iKcAdzeWA8xFWANbBjeyiBHKu4hTX3HGVoUpbJqpzkPcPMsLwzRGk5W8agPL1g2",
  "key35": "2gUmvKt6aPAKYT3gGJtJKfpCUrCN5C5ZYaHzxet1KDrApbfneadAxEyfZVaAUMoFzd61z8uAihPbzSdUhp4urk1p",
  "key36": "2CmpwuEdxBmjEP1UW8UhgZPsgPuSwcrbn7Aihb1Qdt9XQqjq8hnuwNAjtNwW6enMKqJpuDQqu4KQJwXnuw89tgv7",
  "key37": "2TWZDrVFYo6qj4CX9NTFRGp3Y1h4jYtWbrfSYKXAFcPTZCJZ8SZeh5h7G5WYfyaqYm3gQijNoUAqSZWgfc4TnYXG",
  "key38": "5iCJYBHMPD5fCJVtmexP9rT82xkHPL5KZy8wtdyf4RFQuQd7k84wcP9v7Kf4M4MfnXeCau2xMqEhM4kVamdqwDsQ",
  "key39": "5DuXUftzA6UDhCEhxuv2dvPdV7Ee7y7A8fn2SyYVmHrBAvtkRGKmLeaYD6MZtyqAw8EZ8G162QuxRR1aMJ1ARDJD",
  "key40": "5NbNJToVCFohb8GDbEeULtU87LyW7KbdnBpAJSPjMNr7En4gd5T2LvD5SdccyUSv2reA4tepUwmuMkFsYhHVBMeG",
  "key41": "5hxmh9YP9EHU3ZYjo8m556BBQY34zjiQb8xJD5nYs4mGS1hooaU8tvRK4aNuzKfS7QJuqHx5NkN9b1VrDAbVjhcv",
  "key42": "4HfvqP4Xeqht3XMmEkVrZ5bqQrTeMj6v84oGhFUcUHtTDLsQyhkkuPzxHWtCA5Jyy2vn6voMwXhnN56SuHWdtJFP",
  "key43": "2v2mQhCbT6xJrFD1BGaDZHaLuh3YSqWaNgpgNUZRBoTrL29bu11gdjU6y7iS4qyzkNGtN3g5CeeLyjFzkwroPS9q",
  "key44": "4KkGtA3WmgdxNuJkaeNQrZb7b6gwcgEMGtntedVs9kGQqFFcbYfiDymSrxpri9cdULeyBpck8zojgkYseTE8ToeF",
  "key45": "4iXKsapQuuELrkgAzZ4vRumRxy2iu1Ax7SKH95aU4KxLN9TCCgtSyJR4BPz8PUastPTUyvfTvESaqivj3r3an4Cv",
  "key46": "5NUipW82kxr8xThrcSAbRG3Tfsmripw1gy7VJhfcN5RmFVQqqhiNYSHdimwECJpfR3fXNAzA5hxbcPwU3HmiV6Ru",
  "key47": "3BJxtcCqVZFNrYSanRKu1wDio9mtRioCDdpLGxxJELeVjmBVc6mkRJHqz8kKrUhnB1EPykJVxeLX28zCHucXRYTh"
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
