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
    "4QGNwifR42un1i8ZsAF4fQ77Q4YYYfy79o36tqNdBCptF1kbpoybfrYyFDYRnQju2N82T9zGbXZeDBDjwZr9cHrq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uy9qJNhFQw8tKSovJNUEhLWcFndNcPtCBA9tu8ofbyVEWw3S18vAjDPPg6jb9rsriwMrCFPvqirSiNSYSaLPbWN",
  "key1": "3bePnfaWXV5Kv4BX9DQKkcRm5J7WKBfeBfVez7zJS4X12gT1DJLyqJEcGfFTQsqc7Ms4XqmAZ77oiHibwZNJhkEi",
  "key2": "335u3vqYZyynFL4gtZdFwCdkxVTTeg6JZP3Pt4Ja3UzoiwviPFrjAPruqaGmAP2VBoYZrAWgV8zCxoLn9HN3ykGB",
  "key3": "27T2WC2xMrhjwVd6MVW8xGeQZciWzoAibxi3GUqWfXXxhd5nrzLrBhingH3xMD5djo4rPvtZ4gKi1VQCW88a61BB",
  "key4": "38RPWEYmiMt1RmF63JnSvpoXx5eBa3ULh9ydazqjjHaGgy4ypHk45FLMVxtHvz8onFxSkUXpXAvSAVEmcx6T2Hda",
  "key5": "5vdoeaPsEdm2PZUpDXBYsvt3LDd2JSRuyhR6BTxfi2nQuckVgGnzWyrMw2VizaNEamHhHvYMoPcrdrntRaMdnP3p",
  "key6": "4wiTGUxwV5KDZLdndEXc7zSJQ7NujaWTDUrnT3nDQwEAtpknmqT6ATtCsxpYxVstfaLMzbBpGruknbZESKcN4MAB",
  "key7": "62SAt4SzuMRvoUPzhwxkL85BYrpXnZW8ehmbzhbBgcN7E9GCLHqGVozRVUc5EoTse16iRZ4w88qvKkhdLVktwheK",
  "key8": "V4GzvFXiVhsBLu4FZAQRA8CQdnUfqNtR8Svhi9UwkbzSu9eMJz9zKavdiRypHdb9TCQFBTF4Yxf69ouTxTcceQz",
  "key9": "2qbqLSmnRPiC7fX4M18MLPLdhNZMdtVMsEsbvNcsqsFfxnEDM4wXm827miYaJzywMEykb2pw9gdPQw3TepbYd48B",
  "key10": "5ar1aeen29Gz1HZQ6XUaxUiZXXJKFqWfp9TBoRsKMVtEhRTVaSmzLn7LXwuEDjCTPKRe32MjwuqtCRr8bTywFGWK",
  "key11": "4tMcHksHXbXiHm1UeVEvYNaniVHYkRTm4VJ1zB2Xyn6kgBxJxxVNe7WhjZ2EN8YGDhwRsxCt8iuZT6Qnj5fPBqwd",
  "key12": "4mw2iyzdeYW7417ctRiYQE19bJ8jq2bxWKTYn4R6kM98tC3B9szgSALPg6Hg25ejNqmjSBLg7Ps2Fmx952p14D79",
  "key13": "2XGYP2Do86Ev77cNpVYE6zWWk63v1a2scghHKf23BL6hZ57SDmQcnmkK2888eZayC6jUULDeKgbgWshE8c72gxct",
  "key14": "2GnHwdcLh5bUMB9ntAGRHnwRWoTfVWE9SYWwE9rAt6ieekpkayCh2e2RWm564DdF8o8qix8Th4G2DKR9umL5CyCe",
  "key15": "25QKnv7x8E7SbyUHsYGyunVz9pZwhyqBpcvBkm1DWdAKKt1ndYVtbh4RxsTxWCBCnfNuVXVMubvpT2EtPX3SNP9m",
  "key16": "2fDcaYpMBHfVwycfx4r3Jf44HYzuFEf1RT3yrRREoSQuqx7sfSbAzEd57AjXiXPJmruy42awKAqi3qDTMuvDrgZs",
  "key17": "2N93v1a12ceMJYQdixKjgM7ZkC8Gaid9RBSUaHtPeRP2yvw19xh3oCYWrFuVMK5pGxMD2amnT6ewgHCcsiBE3iau",
  "key18": "3FnsZVytSEoQuCKWfQLP5jeedaqqH3afReXWx2pMLNkXQXDtFfeWEabGyG6gvwMdPUS8ZS5V8W2XWyH9Rdt3yJG8",
  "key19": "5gC3RaWi3aU2EJvLfCiUpGfrLrv8wYh87shdgxx6o1myCiBDWjfZnhCDSDf5KTUvWjsgiP3ks6ULn1f8mHVNZvt4",
  "key20": "48aUukpYxiTDtXStyR4ukkAH4S3HWQRjB5gVDNvLFARJP5wLgzkVfmXJZDvaJQzdJpm6ZmZDsu9L1GB7XbfwBFZc",
  "key21": "5bVDVU5P5uGQGU5geC1J5yKmkE1NjwqcHngVd6hEiH8jYN8yfr5HhkSiZs49kPc7bKwWatzKwCxyy4dU1mHqTyyt",
  "key22": "2zJV7iQZgt48toaXKic3AwdQapjmhitMY2DsrddDXEx9284YTgLyBbXBBY8ZWE5eF2XgHGWvig25wP2tjWk4WH6F",
  "key23": "28v4xUC7UbqQ5uy7WabCev9cRq7gRTgC8dMo7CPWeuYZE3LpAFDTiRi2dVgGnFvURtZAUFCKP8xYiEAiafomyUix",
  "key24": "2oXXB5bZXGeyoYLz7SqjMc84zfhp5t5x4ddVrUrxRVAsgBjPDrguBNgmjn4iGavYX5Rvs1rfmSyQFkhERtT5HATt"
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
