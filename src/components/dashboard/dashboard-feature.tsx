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
    "5hSqRJp58818Q4uYbwjTycdAxuehNnE4ZzJGyu3oExYkihDG31YddudcWUAKNiCFifAoTbCYoTuHT5Ub6vbbTYjE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bm3mhb25tLxMmafXYQLL2NYhzUn4UTdugC92eYRAU53SV1WXKYwWuVUYJXRHdG2F5E29sTGcruXnrTAix5wR38t",
  "key1": "571iof13HJNomvP5w1s5jwTm4HcZXPcMhhGdGzHLuwHrTrUyEJvt9b6owuWMVFvmKrREt67mtLS2VadbkVo7EJX9",
  "key2": "4UUsJMCRrzSjL2qVtkFr2M1quj2esdQUYrynQAxzaKG6CPc46dBNiACbFtNWx9z7pFDnZ77XbWTAtZJmzWQvX2Rq",
  "key3": "5Lgdt5o29mBvu2eMh99j7iy68gANhqGJwviTi24wB5TT4d5WrgK8wJUKih3EANtGSkW6neTXJukzs2WiYb4ZVvmy",
  "key4": "2Z5WG7DhF2B3W4jbhLUZymJknkFvZ1R8V6y364AEVFBdW6CQ4mfRmUjWZ7HYuumtLkU53nez9eBV4AAUNrTKx8fn",
  "key5": "7gNcCLq5dyq8eKEq8ZX6oCnfXmGePe7xtsea7p1cxBCTVdJpehcsnaHDVEHoTHgQJZ86MUcACjS4BVj4QEyFcMV",
  "key6": "TJb6o8y4jQirNhkf8MRHbzftPVZKGaMG2w3jBC8umf6CtRquWWPH6FedwztmuCBKJSadt98bhsZ4VGqPLjgxE6u",
  "key7": "5yff1ou5vacXyXHtDSUVggrcxPL7Mi3rbSoVyTpwUVY8LgPpbM5P4sLtUNK6BU17Bv9YkFseQXo3LT7VcWs3aB9Z",
  "key8": "2mY6yU8vLuNoUxnKiLv928ATqpXRwfg93nVPjqgQvdfUjPi1vFt8xXTrSSgbs5vMttkfDZ8pSuA4btKT45NhXEzB",
  "key9": "32R5mMifJmPmAEJoYe5LNmehdE1MfYryKo5s95RffhLFdqhwQsNnNoy2pzPmp8RpgjbqZYW3PnAR7QyFLtGBTEUs",
  "key10": "2wyGCRBia37vkpUqvB1nz52aGkSzvf3GdwuVNqNRCCn4Yh9ZbxeyJjXcLhiaFEZsnQQ4JwWDAgRHdmmZUZJMgyDT",
  "key11": "3odxn1c3PH3XGW9fgCXC9aCtZnz1BFwtvUynNzwEzyUY8Aawfdi2ho7HHB8VfsYakZCY7rcnpvvuAvA8ZskmnZ9V",
  "key12": "3rkLDpqeHNR68K8J8MsqzvaBqfctHxR9u8k1Z4YEMukHBXPvcZrWNcrehsY7BhCTwkA7dJVoegW2UUqX7Ub1NLuS",
  "key13": "4Atdm1hLEgbTqTXUXkqoy1tu2uKbRKzF1W7VCJyuXB6NTad65oBzf33JwHESEB9i1d7dos9XQ2giSM9pk23rk5m3",
  "key14": "4ouREBJW3JtzDdw3dQcC7WBbuorfbVxXTWS7hj96eryt52MX71ucF59AC85WeBXrBQNhqnJZkFana7Q2s6bxXQiN",
  "key15": "2JZYP5jFMyTqEr5yPabu6CoRyMvwYVBHT5PZgjBZqNwa1HABe2vUWqdjvjYyfjaS4e6WsTwpDzomwsi14J7iKNJt",
  "key16": "25bmR6uGvXP3zwoMEz1RHSHbKw2BE5JgUd9dfqRVtXssS3MnVsebkrHbj1hvU8S6AA6wwAJiXedWM1ifVUjMWoCy",
  "key17": "5WW1GyQpF5s3HwDgaexNhRK4J4xbYyywsoXUJD6YYDcApNJ8KrYCWfSRWEV4NGYpaMn99JBfdWjjmPxak4zVsEgF",
  "key18": "4YwC8DwKjn4ypo5X2s7bdXF7qjbriprpUXgDz8JNNn6XsC3oAeaL8nmu72w64no36hQx5jkERzuDN24QroxoWmH9",
  "key19": "2UjvQrWBiSdz7V3eyJUpaF3beR6mVyDqZkqSBSZky6Butm8Ht2uJp4gotXqyc2fhyb3ogUD1GfDevBBk1Hod4KP9",
  "key20": "4t5C3ezZe9S44tPvvjTp4JUfqT3iEwYHwQYfWWnhiGSWA1NzsJjGhzsJbUZguAwTY9K2d7HHap6UJ1R3hXrgsxmJ",
  "key21": "4EX5H5FR9eagyXZUNNHVNu7LWZgQpw94gump8nAccwjDw5EvdzVeVx75dmfbBS9QPj2tBGPTgnsyTzAzPkvW27d1",
  "key22": "4izwdobsQjQ2Ny1fkR7eRWiimmUqeQrSH1N9vxpwYtFsYgYrLMoJm1Tr3EfUmKYWQmBeGTvf72H1eVcEPQpifgBZ",
  "key23": "4sQLhyxCKYFDe55mKNC2Jsr3ULUGeDuV4WTVdV4WhBExmzCKirfLDBNRaW7LFavNvd7n2yTD5ATMkokxfrYzL5QH",
  "key24": "wG6LiQuSWWA2a6d6PtPteBDAXdCARP9rD6q6kxg76wQHBh2UAf7H4CoiogedBPfuE23MgBk4D2CvcPh9RoMZaCy",
  "key25": "2ogUz5uY7g59tYEh99mHy6LtZCcLQpBiow63DXzteLS2mM8fUciZU4gy7TLa4fGwqXPX4cEgmNKFP9WfikDbS6hB",
  "key26": "3kNf2euP98FUpuBWp7xTS5JkZfCriZPczSNXNDyUsmva5mrFY5f6zghLwuQqzFGnD7D2zKdZTdrXiT5nJgdM48mB",
  "key27": "tXA4qA3S5AqzYALmc28YHSwKUyRDBhjgodafiYTKhxv7TCN1ruvhLXUtf1hdE3eAWtogFGepfPMsEjuds93CwPM",
  "key28": "2pS13cKZw4fHoEGBTSjdZwYjXBipbVgT9SMZ7dBbXE2nC17iYb9rU3FtmjdST8oECzAXNAbrtVzv7ZngxTeQuauq",
  "key29": "L7a5pDkBPsidh8U8GZQbsVjkgL3G1JCErKQQ3fc5de3Nxf2vHpUYpndP4wzeA28hixLvvzyTLVeyjS9EhDBGQZP",
  "key30": "ouURcojY585AM8GpCpPMVCzU7NmXgPbX4fow293mxQaXxp5XVqnP4FgpQwpEtGRHzxAe2Crtk4nZioA9YCLkKVH",
  "key31": "42h8Hp6dSaz4PxrpxSemY5NCd7dqDpHYij2gohYpqL3V36X2pniizzSU3Vp2i3dX8kmk9zCnn1WKGFuYp937Pnc9",
  "key32": "UbgndnNUb5otT34U9THztR8AqA2duUjtzyrHbf9npQCW1U8ddj1wCqR6DCB5trF94KBSyX9gAirLeziszbbpkzJ",
  "key33": "7JYh1h9wnSA5qGd5u1vuRy7LJc6cgD4GK4oQ6gDTbavQTWWQa6ws5XDn27dNrFQTV8P2HtReFbvNx2XkQpy6Ksb",
  "key34": "4TvQL12ZCuZ94uV7HsneTWD5GszEGiBZn34quwbdDDHrp6E8TRcBXe2tnFtz7KRi9zudC3WBxwDHVLVtz9GZC7C7",
  "key35": "2nbNRAuLB6S2ResBuYeC1FTDUvrfrDiUv6X4EiypQcGMmtbXCxi1JZs9ArMAvVDWhKjNUhG97BNgLTpoondZZB5X",
  "key36": "3ET2JZvKMHw3rEzDNE9Bp9yaTXtK8aCFxvmeJPkGZ9TLndPrx3btekwEdnT9ab3ip3NfU3PGWJztom7xERFbvSqK",
  "key37": "jfTxxwCQftRTeDUDrXLo1eZDFRyASUPvLgTgHV61EWfwPvgENyARbch8sgMEptTfpDPkYGu5YsjDxp33JLUena8",
  "key38": "3tGaB1uKRexnx2E9g5TUqZezgVnbc85WeVz6d9AdUPEdgPuTQgNd9Pyw8fpUJSMzbwQgaVqKTWE4H8fiVsW4bTSg",
  "key39": "3VujKshz7gtRfLRVFvCWn2RamTBxK9GND5GnY6ptV4T5gBkzLxHrhuJgj4WmjiCg7rPyiMAJvUuPZEze1eEJuUzw",
  "key40": "2wzwq7fWDaZtwXu481b9LtZgPpRqB8zrXKX4drz2Ni5cm6YAy3TeXzWPVzzmJVSxFP6W4gHwgABenWsXnjtMuACM",
  "key41": "yNcdcHZrUkCNDnK5n7B2EaX5K5G4VTWwB8KbwCfyQEgCDF2RELoqiHggqzPF27fasCRdvVijnFbRaQTGYzYbeyM",
  "key42": "5B625yN7s8hYr55QxQMVicVRfKf5KpHuyPdNBL5i8WmGEfDxABX5HWB5dq8gAWiQKMLnTHD8WoKjushvfH558Z86",
  "key43": "H8zfzaYZNvccC2regnn6MGB2WDPmANyEhZpBz4RawDpgWjBRDHWWu9yam9LGC4qEY4sNYsVKC9LPvhGt8m2KMW2",
  "key44": "wW3QZT8XXy836DeD6az6Weq8Bvyc4vhY7aAwcuQ3ErHo2Ci6Cm4d2wQo24R4q1wdjQQuFwbTBdj49iGnkyoydUd",
  "key45": "5ZhiYfgZ1jeCdk6GgnSkYfg5vR9rhgarRq8fJ9UgH5rj2BD25KFbnKCHPnMM2HHim4Jr4DWzJzJZedBoXDJpk8Vk",
  "key46": "5hnitPAmdHJcHNyg9n2qzRW5tmmxHPmrJmGyQjJt3ALAmizNnVe2hdacYUopiVDUxzaBarcYQ4cQqiGkQKU16TiE"
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
