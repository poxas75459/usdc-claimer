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
    "SDbTKrEyzvdG9immM1UtBgFaPP9dGrUJdnStBJ16ykBHuLtyDKLW9DqzaftzaKedkPuLTqnB3LF8zDTyFhxspET"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53jWZL9WZupszPcdC2sSsRKkSRd8pnTNrCAseG4Pv3hFwrVx4jTyiTtKdrQWsTR78RP9mGJiwTGx4qQEMCqEVuPU",
  "key1": "4pvkmjAa2FmLKFhyZya2B1FAY1YJKK7dpCjoNLduWZ1a5SWG1Vjwk28KiKtQignA4cMRyuQSAg2TDWuCJuLhTH6z",
  "key2": "25XsoUiE25PhXWg82DsSHJvZ9ywU5rXx6RAGP4sAECd8YmmjZGXjwVn2Uid6sP9Nqo5rzc3ERG3mLwAu8ikpXLV3",
  "key3": "5SVmbiYbbWruFVxe6mMXKrHjhFwx1KJXBWyuNS988wxmkWojnkbAMnb9tN9oEHJid59i1hb46tUCCPcc6McwRNSe",
  "key4": "5vEb1ChRcS1pNMztJJPdPJ5NRN92t24n7CqUK3m2V6X1ro3DCQMFheA5masYZNb3WpH9MgWkXNAUMWfdAe4xKRmd",
  "key5": "5aeZp3Tw6PGaM7ptFWwmxwzz7ChmXFbfxw61EZFLY6ByNayZD9eKuaHRro2epMbtvsfUgToFgnnCBHN1y3yjo38U",
  "key6": "4MahS2B8ZEaqGd3Fzu89VsPpxUK3w5MDF9tzBCRRTcSuyWkFDNztWGq2vmj31w9zoArNVXCx6gY4u4iUz2fm2J3p",
  "key7": "5KaB1idZwaKQAWmMkuN6weBF5XKUS8vo7AihWXaX3nToGNo2DsXjET2BhyWu11kj55fugCUp9nTRmG5fX7unEi1X",
  "key8": "4y7xHR3VCFaKLhnBdCLbq3MTsmakQX68DmXSEr79Ws9nhkqEm82qJ8V21UHsZiwFhDiL2GNF7D9YMdK4tc5YMkc7",
  "key9": "2HaBJc3WWiLebtqqqUnybV2RNaDzK5ALveUMwN6Fx4kqNamdaYbnXMFhW7KRr8ggQKXvFKFRpsUm5dJLjm4f1XTW",
  "key10": "3TnQvVRN7f79VMwBHuL89SMktJftkhKfYoUTuuc3jUBjJJr7myejs25fS3sFqbMFJv1bBgvAncKvJbprkyqZkhnJ",
  "key11": "27KeMMNck8jacn7FU8NnJb4KT8ZNfHrfYVHNJDyQWLJERVEP2QdpZbpLfqpqo691ajP4hbgkKLpCnCY3ZL71YxCE",
  "key12": "1MLB3Co1X2xuf7KyPh7mf92hUmHQTGSktBVHHBL3MKqMu9kFW22UA2fBq2LeZbJ5NLFyzdLRYUSXV7FoENePMm1",
  "key13": "eySFaLqL24TM9VPqQBpmtBXnQ2C36pXBgwVEv4t2vFZj8QqerRGTM7LhWcDQRrad78SWhi6aFBGyL9gXFBNAdZ9",
  "key14": "2ymEWVTriEFdzY31UWNgGJ2skjdes246M9n9iMRd3mNFQhcLTfpV3KxnbrXP6HtnZekpNv6AUsxuM6xaLLbSEN9g",
  "key15": "2yRPVZf7SxghJBvHHd2p2KiD1tWsG2syQZ1UXJomUAL15duFx1RZLstahFDn1YCkizSEhqsHKgrq2Z3faTLtDBYU",
  "key16": "3s6VbTWNuTXKd4iNoh4jNEFKSJUQMGwD2NiZr3EnQ18RMPogGF5QjGzqLS1y8AJYVHLSMFyZ8oWc3PARqMi8qgWg",
  "key17": "4FvAwdhvqN2ERoq8T4ajFzEM5Qh9bqESk8pXC2LdYyrcepC7Wd43fi6bAdtNvcE4GMqJVw5QMajvD4oXeJ2UNixX",
  "key18": "zTnivnMEqLQ8jNtngojcRsrpFqu8WSQsQNyA38GRZvjQM2njJEJ4g73kkbCqZp6KZZXi4MU6tgExb87L4b5kfY7",
  "key19": "61HvUWDPQx7bMRqScyuvX8amzAMvAiq2iNMeE8VuR8NmbZFwJFmGodQ9fyGT9TWHg2TrT75gtz3StcpqFN9D38Hz",
  "key20": "5eN3ixHRNHkhvX6hV73RZzjQMyhjuywHZM4cwYAo9U3wyVWJMyPn8JBd9R1ET2DEKbUnyvEaG4zsxfbnDdW7sa5M",
  "key21": "1LErft6veGm35bww9qZpERiynuSfyJQjzWH3MHNTzcWZpYgdBm4zm1TRUjDHMi8itBkcXTPkzH2uMPWEYtdj8eB",
  "key22": "gTwcFfjAn9ewHqTQFBQC2VcciGHbRnzoTrUR5fXdAzDWbExvNHjUyk6LCfYPBdJAWD96GTmy9XWMxt8M4hEWW7j",
  "key23": "2VdqRyAf7fEFAo1vRQS9cJdTCiYzUGG2cbK7aLGtn2BUR5mtQNWVSVwq9yX4MtMDq82bTtiHqbPzfbokcAoo4fp1",
  "key24": "4CLp8o8byHfrbFBR1ksmtugduJZRTnRDJP41u1c7YPfT9FssZz3WNrJBf7x1k5wWbZWucPGyrQiFaQj1LZ5PDpkK",
  "key25": "2pxUaX47shsXYZsrzj9M466YVjDadG2o3vaXUjSGtnw7G1KMSFLvrazwe5dyX9RD62r323PEvD6YEogTQjfKRaut",
  "key26": "2aRGSUxoM8vRnDN9wesjcUrDWpnKFoRwnJpvZC4gJkv2eAjKrCyBamHHfA1Gu64TdzMYwhpqm8Xq45V4wMmxTay9",
  "key27": "4LMswQ5Ny1Lmsp47L1NNACZkKr7nGzzEhPadWiJtFPXRDxfWiFrtbcVnxDu2BVNXM5nyjs6CMzKZftMTjcXSE49e",
  "key28": "5ugtrrooZvHqRJQxmtJc4aMWjhPd4g5XUo7MVebsTnWb6dBeYoJCoVmcehi8UrhMVJwGX5aUc763bYMgRxxNd2v1",
  "key29": "3K7ijgX4pU7x58JyMTv333jemcqXTnNe9EnDF1vcKdkzNhQqziBf7UjMzqzWB4oP9wNgW9h4tUBskukmUPHMgtH2",
  "key30": "2gKVRCg3ZW4EvYMNUiGwy9MxzFES96DtEbZQLVCif6MiDQMJATu4wFiUBQGHznGCk6do1Wpm8jdawGcM9LfWZWvk",
  "key31": "5jKjj7rWEWGCawtMjgmyFbxHQNcBkxir2aW3iEHuuoVPUc3DYLymioBVR84xvg3ydeqdSBo14TFPgkyTo6rjL7Pd",
  "key32": "gLMQWdTJD7LYYXoNZ6JjWQJRNK8hfU4FAfarwugeaDoztJMTynZqvTUsfJU5TucgHVzTotsQLh5TDnE2qr5yoqF"
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
