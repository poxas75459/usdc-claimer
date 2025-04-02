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
    "hMtgjRbQFcSWJg6aNYWWXXFEmBXY36sSkRNswMvBM18XqWB5fJjE17UxyJiabHZJwcKrgEy2zSUWJbtNoLkDdCV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CjxFaoBXPRrmNF3NqX42jsgFaSexPWvxYEUjnBKQTiP4VhiMgw43FTFvQBzZZ8goHdv2PkkT5449VrLdSyW3vCA",
  "key1": "29MmNDUPzMjmid5kpkU5ELNqnMMSqWcnRmaKgWj5H2RdAAUZdX1Vo5Bp6WY6FE2hAUFwh7wPD9RgWcYa6bwHrixj",
  "key2": "4SgfC6bLBQS62U4JsZgfGNBvKGLLUa489iRKhgf2u5roSBwaZ4UDWD266bEsaZmrxV9pdpqb2RbkYb2Wuab6C8PJ",
  "key3": "cARRdv1wjuGLhTPLag1BwuDyfUQYm836jf8pqEz2d9b44ZiWPED4fo4AovdEuSnyMRMMsn45PTNHStntCh9VqHZ",
  "key4": "4h4UVRzpMnCytn4FrbcoBDCiMetpSB8trAYxp6qWnHHrcnJS1mGfN58sUEma8fr8TxB1eoT6dJXecGPfhL2w7NeW",
  "key5": "GrDLK3qAyvW2JVeQaCmVYNEUMhLuU8AB3uiB1BQgh3uZ2cjhVvrcfqNRvieRfmBsxecfZbUeRxbXpx5vhDizaxJ",
  "key6": "413H8kBwV4WC5PtEuDicG4koTTbvHEAnzQFNuQVr7KppeaEinkxvkV7p5GD7fLLLjhW2Y8JrXaaLGwkbECaHttwk",
  "key7": "2KPaZrU27zbNTQPha8bQxhgFdDYJLgr616qkYkjLDttZx4rDfeeYmcu3Ck6FYJNxzCECixqRkne9VRLrbXyTHrC4",
  "key8": "5qDnxgCfQGhBeju7M1yj2YAEjXU9cAc2nB15dZCkXNoeNwGnS5BbWJCNf4NREx5YfQ2ZKpmr4u93QXzqaid8YFqM",
  "key9": "4q6VTgFtZi8bGWHj6Lvk863DmmWbjVctQn5Zx6BdatSCghQTzogxmqhjYRBDcFCSEr9UnrcaspyH1HQuyBSjiy5o",
  "key10": "2Yvie4BBJ5wrDeWsnjybTk6ZqQLUEtcsp3353Vb53YiJVcY9VKVeV79gBZwadC76NAFV794Q7sHhyxni3394Siru",
  "key11": "5X3vAephmHwpLNyQSSX3C7ZS719xMb1429SkwJW46vU2cpf5vVyLuuCvBcpziuYuTHjRchm6rwHEzwvY7RCqXGkM",
  "key12": "4gBDVAJZYk7zMLnebXFjYwXshkuSKGreK7XV6urE6QEFmoMP7CExkLFxJXv9t529nN2YV4c5gtEq6qGw1UnoqSnJ",
  "key13": "5BbkXZKMfKM6JofVguiuQBJCA5SzmiJxxiEZF1kaidxxurTLDALuaW4KPc5jPWxAoRNURqMQisgDD819me4r2r16",
  "key14": "4WnBt3476yh9kjzBndL1CqzDhajYkFvtcBNfUFXpG1cS5Eof6r4FEFraJNK37mUA8UoLvDRmTppE3TJrHPEW2GcP",
  "key15": "3uo1fMpZfqFUKUQkrund8JTmY7ocAytPydAN5NhfvFb4wMAfZaqZWUGfbNqDv4RHaMZh2ZTMdysKBrEsRqQJpXsx",
  "key16": "62jjbPnihkMo8m7YNS4m3MZZHACbpmLeh6i73hNi6u5nVVuJkJUHx7qRJFPXy49yuS2xvjMXydmtXwXNaYbnp96A",
  "key17": "gKLHqUXndzabGkokPtMistyLQxJpZ7Y1R9NXaNnRRerDRJa57RqA6h15UHyH1mek7h7SDSPWr2eh2u1PX46p4FB",
  "key18": "4huxLdrWWbuW7CKssZd6rAdFUsfZed1foZpQFSZuQorp9R4FtrQsXVNmDtPMHjBCwyupaFYSQu2DqdUCzyQ2bCNi",
  "key19": "4FbZ8FCgvU3kRfo1q5JNS3qY9TrwXoVkdg7awKBVkkT7o2w9ijXhJqkFpsJdQW9BD6Agmq9jCBoqCKFJFaJFisQu",
  "key20": "2GExn1BLxKedsUaadXzRdrasoDTAbhJ1dqx8XMmY5sZNb7iNnJSDZP65rTEg9yWVxqi82tCghP4dmiCD5dzyTRY9",
  "key21": "5W6Q6NPvbtZdGfezgyrVSjt5NDBA2EeSQbhuxqus68Hp5TCQ9VnWwxGbuoGkE7sY87HUXNFwyERcfwzrdffsFuyq",
  "key22": "4FDRHt9f8L93C6L3SCZcgUD48hShpuZx15snV7pi8so3VzJfCNjr4sm2jY2TfcswQryjDsmL2qyVHehhnkpsA55h",
  "key23": "34BrJJrz9QfvU2MjWQtC8pff3evwwDu4Hj71CsPyMp2wx89HNg8N5Ufp4LD7it5fFCJWeAKoVetVi9L11AjuErxe",
  "key24": "2Behy4dP9ejYqP436SDrbyCcNF5RfPyXjJAbZeraubjsGkdua3ADDaRZMKgJ15SqFRx185FAXfaWLsotwj6wWYiY",
  "key25": "x1Zi5nkdmpX8KYMTDEjA2WnqDCBEAvQE2aGeNv7hLjKCVUQqyNnc2r28x2xgMf8Nat3FNixuWFDWGqTXpSfFrrx",
  "key26": "5rBz1trndFcz2tqFqSpeqsNq4Krk2974dquw2WpAxdnnQBZX1VgMdJvPYgdA5c2HMVJ1nHb6NgAT2RY13ZUxkDGT",
  "key27": "2BrFZaVjGQ3eFxpzofvq1gqJforeHxfSBk18mv69PaqvWyygXGPYJVDcXHwFhUJxcj1pqaDKF3UtcM2afRLJiLic",
  "key28": "2DotZwmDm7TVxVtTNQJDJJeBzRhJUgzXi53sXzEkniLd5uqMfVdRDzXymD8FjurAPobzwjs5sgDLLGu51HyYdtYA",
  "key29": "nHFL9Y1UUeJPAjcxNVfXV3qnZCKtK46aWVDoWM5k1JUw5Ti9xRNWVoUDcajMhzqAA8RyNkx5SrCRzJPbaPYSkEU",
  "key30": "uaeKVnuPxKQJ33D2jTpUSMZXoceqx3F5xVrR3hcyTE5hreXzfyEcFyKYjXwGMNdF61QU41rbmyBYvWLmEc83yDF",
  "key31": "5p1MP71m3RoLfR1sZhJoHyEYBKMC2UBgd7V1U4DcWmmkRe4449PVYBsj1HggqA299YAAKKPaY4nh5ghx3uuTuUtj",
  "key32": "4QjJScSfmahqFk9K2bwqfFmGXsSJq4FdgehJ21yW9rMror4ciB6AGavH9De5dZMG8uRovBN5TJhNWSVTWmZeHfNt",
  "key33": "5UqwgcEepHRZK1fqe2i4wB93VeA9cKwXCNkTSxFk19M7vsi8PJfXf49NwH5UbAbx4StUSecHfucFUkrJosm64ook",
  "key34": "m9NvTSSPb77nAHurjxwZtQbSp2PVAnwTBoLXa15DnAoJNaJFAzW9Ajk3N8WCVqVTryV3nfaZBurV1hJdojeRwpj",
  "key35": "3MBM5bJWQmM7nHJea7L88jKdgxwiAGavA253tzPtB1f14q72J1kWBLEwZsNEoECaQMPWwBM1CUjyuENVystSnRiB",
  "key36": "5N8AWtRayucqFaCM42mL337kDnMJXg2fTLuHDWVviPT54XjX2Qoez4iAjpG5pcvsuibyteUf9fVtykLcjAKW85sK"
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
