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
    "4rMMok8HiVw818jL9gh61UEkzmEQvEaQz3Wpxhv8bui9gSRWf6HYKZczanX8THbq4ZCUKTRSnQTmmjDbozG4woJ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FJKVA4cnp7aaUzjMed3ctA6jNvQjLG1FvdnLccSbQLQKUMbrh3dGHubMmuBti5R8ncaWA6DmEhh2YS3n5H1sJsx",
  "key1": "2qFRsXozDYbChp1b4WYGuibpd7m7KfJvMZ3ZKU8JgsEBJUMNKbgDVULkNTg5QFdjYfifAePzrG4MMbNhPRvg8Jz5",
  "key2": "2fazFBCUuz4x2bc9c8wvwWWL4QmrbMsm1FYuaYNQKw2zBhFdgccxv2XQR3EkCbVfy9kMqXqv7rhYvL7usHfjkd1G",
  "key3": "3ciMzRXYVwMauJgFcPjbwFRxT9ufqrNzxH4SVUg7uMBQTDTGKx9MNAsU1SJi1CnsSVuX4mj8UrYzUqPAA13Ntmsu",
  "key4": "2QW82wMktsvcW2oW9dcoz4urnc5uNYoaSeXX7GZGB42ZCm9YsxVbeSv161MvyutL12Ga25Ggz9Zw1s2MCMBNDvdq",
  "key5": "4Pb65myqVN3ac4z6ZG9Yds7ZtNdMfS6xJb8iMoBNoBkXGYV4vr2MzqjW8GUWC4skq5EpiviLemohxdyyExCUTiR",
  "key6": "mK6KPaqamLfQdUWz2oZRaX2Wo47DeAB5qyD36ZMnYnYsMfPf9A2V6psESGVvigedFXyB6F9kMAoWtnXeWWufpQE",
  "key7": "4khLDivapWnn7AkX4pv2o1MJcBgzApfkeZuSF5GtZtqxfeurBk7esLEEMUXQoo9nn7fZmw2PBLyreXPeAG5DTHTF",
  "key8": "313KnGNkGgNpza6A46LyhpsEoSnETTDQVuCY2gkN3DCSsfouWNte3K1jgT8dzfAFLyrDdD6ttjdfftE4h6DLG5Da",
  "key9": "wfU4hXeLrADUvdasM99FsLbSErr91A1bpDke1ZEX8JpsndH1xPTwPh1BcnDEKH4d1auZbKEFrA1wuGpvGPWS1sV",
  "key10": "4pgBcvK1vxkyCqW7TPWLnKL8WZet5dKHkkpQbVuX2VxqJXyTt58QuURAu3mEBHoevnUH6vYHfP7hojDjTu1xxrCC",
  "key11": "4pNJh5ypJf976ZBDjQSTrN41msgm1vn8cZRWCPu7S4sLxhtj9VMuQGjiApv3Gf2drZA8dhsUKskCsH7EBFSFe4nY",
  "key12": "52jEZR4zSyWgb6Xda8ZbkD9qRrxQQpnx8rycMvV82BUzwxrvbwVWbhuzKz6VA1YPrZjTeW1pSZ35U4GxX6w1Ncze",
  "key13": "3toAP87h5fMceHhXNhMLv1CsgT2Sa3pxThXHNkAfuDDnzSk2f3sp5y4fHDCPhhC1U1bwUgai9ZzSK5qYJUTgg6sW",
  "key14": "2c4DNkcaJtUmd4kpN2kAAbSPNxhp4n7iqjekCpMhWBmTUbZvbu8Ntfm8pMbc1nC8ktDV1jhTXoXyVk1XGhZ2tzRQ",
  "key15": "3EuMqNAHsMhFCxuB4e5kKvtu7Da4a2rkVmGZaeM2izWdZnwCNndBr5KgCGGgbXzXgS3vZiPVBa2LFVMaGX2HegWm",
  "key16": "3HiFHSEgu2QQWAYJG6MBMWzWtzyS4cp85nTLyjgLnNeWtL99gPA7Rrz8eY9WoKif6bRDDYKihwqsrdQRcjZW9SdY",
  "key17": "4X6UjM2uEuKVDs3bmL8MiMoCSaxotyjcLfkC5c36WVarTpzF16qAayNQjKskyYkGuTuPAAgKgzACqL2gW1HDSrkL",
  "key18": "5xHjugYx8jmY2paVR4wC5pD1toZxEXmcFFY5e3FsoPAQoSP7VAFjx7o3fvarFw5yRQVfsmvaXWyos8PoCVk3qXV2",
  "key19": "4sChYoMX2TiX45hHMjb1AhFC69GvsPahQgC2GvS1HSR6K5RMCoukvuJYP2Avrr3hoPfYcd3VPTPmWF8YjEgNByLa",
  "key20": "3MjM4gMpPrH9s74JWeeCEGXPry1TfETa1i9hPtZ6J9aREZRqShGVFe7sqkHhnkAeBcfC5rgrEX74o3KaM46nrAFF",
  "key21": "4mirwYTYMEwayogiFaLeDGY8S8j2gxAeN8B2FcWXGrhdSB7qZXBu6Na8ZJdos7X2YAwQJFnV7YWKQJAwGg8KkE3R",
  "key22": "4jeCh4yPfmzxFjG1j4EVMXfPJaZ4gV7pMTgRLQJHWqBLNHc3oBj4NFF3NREaiZ9AZj8wPNdsfrwowYe2A8jHBhuQ",
  "key23": "5FaKVPU259uRZQkmL7wMeqDLQn7pJYZ3dDxQh3DjCGQRmgtVeosP8gLfcd85qEJz2eJzMrrcocKpNwmaLCKiVpeN",
  "key24": "cKG9NnvoqPjQHfGuR81EDNevyFpwPuF7o3NY2mJJUopZRo9G3jsbKVLtrZhC6SToTw4EEKAHMaQ1LLbyKoN7nKc",
  "key25": "gi2S86WhXSZiAD3gYHxtn4K4Xh7Z8rcKHF722f5kSRidjkYikY46gqEsjQwjPzvJbe5zudfhkZ8qVa6Nwos6PKV",
  "key26": "3qa7xSoEKq7hFF2HEL221N9nyAk22z833gP3hSL37EmZGewUCdbUCgLcSkyLUoYebpqkZokzPNVi85guCwdTBSqL",
  "key27": "4dh6oprEcnbo4EjTVspRfindWFHdmLLLRGz4SYvedwdGDo68k1jA4xtuyPrrpPBVn3vxgubbh38gq9eTeohUHBhd"
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
