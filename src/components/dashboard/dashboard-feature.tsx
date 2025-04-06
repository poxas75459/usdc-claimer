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
    "32j1HrtwBKJTrzsPVR8o5SfgkvrmkvfG34YtT3F6Yw2aajcPebkg7yfqRbhs3GaJd1kf5vgfDHLrZgHueQPR1efs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aisAR6Ni4cvEURFLMyk5Xn8FLQmsvRV5ViwTCcRnkn5QXj7E3MhXHtogb7PzQmLzJ3ZW2KB2uoHkrrgXxPdC7Qq",
  "key1": "4RFvqmwzuTD2wMLkXGJEQC154ash8J4mvpfaYvmfXGAscqrrRXrSpGBuqE2B9VcGtGHfCzdpZeAAptgmxgZt7GRa",
  "key2": "nKjr1LsGetZMtj1V1rHSZmBXi6NnbRyDQjygjMEtTuP98XVmG4XqMS1NShsAGAbt6DGjW6CygnYBZumZtRMvnum",
  "key3": "3Au4f6RrdVDuDah8FtwstABRAZmdd9eF4dhbKS1V672ge8rRvnhgcB5jY1aptZozJgBwUCYkHcFA7uHRtuv1K1MC",
  "key4": "4moVMJTqzAnor3Lx8x2bX6RyEiPs39buZnUenGpGJKjXfZjTabjdsMHczH5qBKSKGn6qxn7nGcpYPQy6uAXQqpWu",
  "key5": "2Qi9wLfgkp8z6TzB17ZYVufCZeupwW5o76wmYtJh73496gFDYwSZS3n3tF22CGL6vPudYupU5AQ9S89dGsSnrtU6",
  "key6": "5P3j24KXYziFdHK4mVcP81Wduae5yqy4yB7j6JiiLRiENnJkSxYPYgKpJqTNs6CEwTX2jMXwb5e4nU9T8cdqodyL",
  "key7": "4cMpuyRwYGDQV2ZzcHTFWC8TMKxnRSDxT9c2gD6k6LUwFbTzh3KYnqXLFb57RUoKgj7EUzwnP3KeaTvo4iz8KFxF",
  "key8": "PhNogM4GVukNWNwV24yd5s1xdXg2HqwmUfTRagzpyP5HSX2LWaxm4jdVM5mhCeU4AK37e1AJJPmmrpN2PcpX8fK",
  "key9": "3NdU7f1SVL27i9DMnnnAcqR3o9JisLvuuFCBuXFGY7JwA672m63pUmrCQpLVC2NrEUDEkrMGt5rYggYapEMCo5tG",
  "key10": "tdBXhbqhprwjr23aM3irQbdEd1Pqyzyg3cprW8uz3dDqYhgkr47bP272u18HufQPY1nn2bgpA9GdhCxdAx83jqx",
  "key11": "5W5y8rf9dwgmjvPtWfnwc5Cr7mrubdYrGtyWgBNob3u8udoKNErU3AVLXP7Nb7ikt6nPu6HHP12Dp5QvEKcfEd7S",
  "key12": "2YTADZBWbu2SeCmVhLs61iyrQmNjcQgPWAXHNpc3oXZMZgp2xMr5MPAcs7sitDd5gxQPDp2HYYhtqdZGcQH8sCsJ",
  "key13": "5KbR7GqjeZEiqiuunU9Uf96R2QtFSjd25MqE3rKHEm6H8ApM2U46BxkAmRsfe3J9qv81bguUrTUVG2eZgYJGxjZv",
  "key14": "57aK2gEnWpqmUZ7DN83QkpHfHvoUFCENcHEeMWuTY1ybJhzhXvhfe69SyR7FGEMzZToB9hem2CCUxfck1dFL5QB9",
  "key15": "RNwCkFk16Lj8xjaeeAGU9qjT4GoRNKit5FcSsPdXrCLT3RhcVZG6BDvQ1ouRHqk2cGGYZPKSZrntPAGahxpgeJW",
  "key16": "4XvYTrd2V5mKiGhw1qkYCQ3zGkCMTYJbjsYAKvpvnDQr7yje2GWQThMs18KedZcKWwdgyRfXnSAA5PdTLQq7B6xL",
  "key17": "WdkWxHUjfzHox5twoGYjUGbdBoJbPmvfkvPTFyfi7bePKf527eae1t2hh4eZjXheZ8adgKHJxEQBdnVLEbkDkEW",
  "key18": "4rvYWigQAnPwzHbQm3ob4KVvgDR1J9oxjUsp41qUPcGttGKaxTLerxbVWvphQ5mBC7bCD3DDkwAUQLaEwN9tFodt",
  "key19": "4yDxd7LmCSL9wBRQSS5jgb5i5sKGpjirUMXJtwXXLXxRC1gt1QDKLzxetnGejso1XXLRqvABvNMHUnu2j6sbYfgh",
  "key20": "5SYvB6UjMY8DBXg9mnTRYZRFo2PqphUXeuyxs9HqLkDZCVKxre2CEnJdR6ZuDxSGWfpT4Nrhnk7pX9KhGan3KASA",
  "key21": "65c6P6XG79FBDW6Ee42tiVqYuTU24LaPjFoY6CMALTuTxsb8FCeWuzmM3yckjLF1KpBmxDsdKbwp6Kw8XhxWRRX3",
  "key22": "2x9jQuEoC4mEvQ8Tc3b5RZpwTQT9RNZS9Rkd6NTmsiabq8FxiwvRAzkSvPK9NGwV1zNK2PW83YxxSjGCrTtpBNMj",
  "key23": "99z1awa2T3rSndP7c9mSEJ7trf6Egw6V7ztHdqWGmcH55XqVCymUbEjdBkGxTEmiWg2Ldqx9P3HZUhzsXozvfBG",
  "key24": "4kaaWbgekFQtYsubRw9T5kaLKm3QmwdfP9e1QpFT1B69YF97xSsVPTWna2uowg2EEJPjsFHSb4tU61mJs2bAA2E6",
  "key25": "59tDUXRcsxV7sJfYQxbVxuAkRYthPK4Py9FFmzYJ2N8zSh5UQpMuSutEB91hfFuHBVnXmADSaaTXAHtRgWcGcK9W",
  "key26": "211UrtMWpNGVoh4YEygyYW4678TGpZHNFB3Moci7adHPdEWFXxAVXYBdddUmKfpnfKJo2Q4ymQeu9G85yDW9saHi",
  "key27": "BDBkXp3aViZ6Z1Y1AADKiCdYVoxXdfrY7Md7X2T5vwdn3eXJHFhAVn2TvHsiBwGoSZEMArSKMqk5UjeTMXRrNbC",
  "key28": "4DmYSkcBpt5jYAKJqKKFTisGsomhiqycdkUfpmXEobUo32aV2pxnUPSjEUyiayTWbizq13RKogAZwmfnUdgJbuhu",
  "key29": "2nDGM7iRLbSywBjsTqyk5SLsGah9AvzEVsuTttossNQXSy1pb28orS5bZ7buBxPxqDCexiKBiiSjawdRwkZRYA7Y",
  "key30": "4DLVQ3w5dmtFivFaKXRvNfGLwyfjHkc9iA3s49wMWKvTuLSXdP9i4FoqjmC8TzvUmc4u8ikbbqQ4uLJhtZ4vQYKG",
  "key31": "3JD95y4g33CPhk36i92Y483TJUL3HjXhgLSG5TaZ945Y8LRYr6WiH5JV8jcEDayCpzEX9syv2sUKgKrhUg44jSpX",
  "key32": "5keFY4f6Fp4CW2GSHEPFAV1o8q5VnDJYkSwywviVN8ERkyAKq2M9w739em98Kgfbedf4qm7TWb1DYvFUgY1Ggj94",
  "key33": "BAX5Qe7p7Qe9EiyTpK9TEBoP5ywYiHxK7m6cGmeMPYTnC3aZBDT148qxBbN5mUzGZ1vX8cJSQsxYtcm8RmfEeHr",
  "key34": "JgzcfPLVYF2U5oYRAzyGEQ7g1NxdunfLijSwg55w8UsGdQaY9pdczNckD5wtitQjZMxbmWxeKPDejFRSLwFvTsT",
  "key35": "37jkLvfUji5sLKjG5HNeXMv5ZZNZPCzVia4HSMebsQjkWJ1g9sVNebMxERv6oexrb9MTi3sxByLBTrvjweiUyEpX",
  "key36": "2iEeCdKvWJkWPwvcKXVR323tfaWeBhwabqK27goHweSFRavDedns6eo6usjKa7petnMx7pQrN732HUrJtkmzKjr4",
  "key37": "nEVcmwD3Qyp2XQRLCftpkvYA2A5coHWt9PgkdJm47xTmQ2Ym5buURAQ9Poa4vHoxeN5Zr4tF4PY3dY4y5rueWhe",
  "key38": "2zhqrm8o6L7mAKGFuNJGPUP5WkMQFXUi75UbXp8xaAvb4gbHuc3YQcosjwdZiqThDRtUpGhpnvpQdWSrfJPEDNVr",
  "key39": "3CsXKqqSD4odnasxBmb6iiUAcG1e56EAe8BD3oCRX5jLHWFJ5s453NcJJUaJzhW8S2FsWiC9t8NahPGrv88DaBpj",
  "key40": "3ViAoisSFGz6a6PGfrrJb5YpRgdyqqw7bezUwBvphDE9H9xisKM63FZtqhwAfJVkumf91yiNpmret4hXtSgXNd3f",
  "key41": "4NQaz5zHGtQYeCUYiq8e8aFUXAk8AwNXvdBC3K9Ki2oCJgx4RUbepEkoJbAZYtnPmm3CFSfPWh3anTx9exTYiRLg"
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
