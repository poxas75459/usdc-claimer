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
    "5mqy4RDfT2eKxm8sww1FzwYTqiL3MiRtBvYNxWVkbNzqTpc1JDvqoPkXkpHBqEzHQhuCJGLzDVQA4pauw2buBT9p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o1Qr64pAT5ThpHjbCMahyusvyEFLrGvnnMt3NDr5BWgjjVrxwcTQgmpQBiUBXKXPh8i8hGMNXtP2KEUVj4S4M3X",
  "key1": "5KYfDNK4Vo7LFq4oFxWQNdhMFudtATJPYxxjmg8vXei5fYt1JvXiB6yMc8MnAaY7kWSXxD3cyc3Grqg7jcY787Nw",
  "key2": "5vx489wd2s1GnA8vgGZ4scAgMGbMRXWXn7nX8nf3uvoi9Y545CKgs8DXtYdaXzVsV9JHrXozKRvpra8JvWpoxEg3",
  "key3": "3D82WvbhT5kpnpHMc971VQcnf1x68rXTR12DqpV8psRHTtLyHnA8tJqjBSk84kQaCDhvtBhcPuhVQtS5josmDyav",
  "key4": "5Pse1d6beA4DGZN5NSsqKFrHAXhwypXXBiL5dtR7KZRTU91oa4W9iR71Wz6FdhWmC3SJdgHkRi4CW7WRKZptmCQA",
  "key5": "4R8WEmTnok8WVRyqtQeFFxD9NbeET3c1Jb7DD3BLiwrVouU276cPBrE8Br6BSJucBQZsRLnqnBQnem8FhDpcjSFb",
  "key6": "38Za61K98B287QFQ7PMNZpXRybv52SKDHDWW4YfKoqca86qDB5mVZPoLgwFa6dbHkZkNY9DVyWwh7hajyjF4vexQ",
  "key7": "53BVmNgaAkdBEKP5yizQsEh8pwCAEVjTK9Mek397X4DE6KovooNbEgmj9ni5TqFZJgNrRURWPrGyTbpau9i7YjNn",
  "key8": "2sBpwnyeWLsJCMjRbf3Pxo2vKwwdkgKLKWWV5hERH9eyDkYu3VM17tZQp4scfa361w5Vc2ujp7MpR16WQmnNLJi6",
  "key9": "TYvu9V34ZLXCgyRb5SNshYBR159jiwvqrcwj7RPpzqRe2Mpefrce5T5qK8BLTLDQchgLJGSWVTuWwak6o79dQBc",
  "key10": "2QRAc9PcwZEHRdNF1rWmT8PsGG3tbQ386fEuWYYPZzc2sXGcTtjx83e5gTWTAM1tfcATXqqLBehHKn419qL2MkG6",
  "key11": "35U2HmiZCXXALVv7NLEvLdBcY3KP2i4tNuqDu3bGEyPuYax35NUyXqKW5aCFoS5peJQME3cyt63RavmsDWhHCbfA",
  "key12": "5BPxtjpRuxc37iD3BPaVYu77qqduonpH8fnCBGchGgKBTXhtiD6G9RefmubomE3fTxYCHe5FNysy4t2k2crBZsQw",
  "key13": "4t5Pg3bMn4DMZSeHt9eGKxTucvc5qxZGzwsuk1KZ1F6rYixq4cs27CKn63ay4Abzya1FUpKkSv53Z7CUbwuvGquC",
  "key14": "4Jc33j2X6xRUFspsuqGYFGTpcEzXqZJDY4JnYJpwENMA98vfu3fXv9ghdvuVhjvdSYzokrXgUwTtGrHUEnd9LLMF",
  "key15": "5cs1Mxp7Yp48xQKE59iKom1jq15AYw33Vr1AGrQ6M486uadaDYNocnr48rb21J8TqoQcYudUZr46gtEvonRHkGpp",
  "key16": "3YdUKXotYK1y193GqhvWTnnU6L2amnNon5PjLEnSTgAaF3dyZ1GXzRvjthfU6F2krsNnhUAUB9XgfbAYrwkUE5Fu",
  "key17": "3ZexWgfnsBYL6j6wBKUtMujeqPNEahguHjiVD69aZVHm2iB6o5uiMNGvUdTHWEU8YGuousSGNLqZ7N5m1yAnboTT",
  "key18": "31u4RAqfysbXSz3foSpPzTgGXMVuwBVikXFziW1giZ1cafitrE4BvEg6BJvXQNdFKamDgJCF9KoywF2etmYkRfa4",
  "key19": "21VFHM1rWjBLvwhP7bJPQUiDJz7bdbic8NpRjnapT1bMk4KuE6Kf7wHaGaT6ZVEx6fBqm1FYrEphxZ2AYevNrdyA",
  "key20": "5jQYnRHobgyUAKYVzVXeAaD2XzmSjZea6dpMdAjqrMNX6xWrmDZkVnQGEEbxj2kBD6TTe3dLyEDkeCnVweM6hQKp",
  "key21": "3gUZSKj2pcKGx5gsQtpKktLX13y63vhXvoxdBsrY82GEEYSW6RBn7wbpx6xqocj4pWUGCFWQekCzxCcTy1H7CqdY",
  "key22": "35VsR7TMCgomYj8xbu33Hpxppeyd1k51RwiWDvB87Snr5kSuNH1Ua69kvG5bGwktSbJ6rxex3sFmRkc3nx3bSyia",
  "key23": "aVRx9Txh3KjUhjGTN2q7myBKyqdkBhujEF6PBbZ1fakpPD5Ugdfjorgp6LDorJpVxKT6DZBdqPHbUixuuLxTKi2",
  "key24": "5yKTApqqgRLfvcjhdoK4Z7oHyiNdwaVQ3fBE6PfgggTVX1jKQdd9qe2TiSUk9PpE2TsvNiohZoyzWgg9pdaXtC2i",
  "key25": "M3Q3mdEYWS43qDXBKiuVDF9Qb82EBLvSiaMhfbQot2c5N3vttWzwkWHBqAS4EiAyGsaVmaLkH3NPrgqjStjmPX1",
  "key26": "2KLAmmBnmRDxR28STi7haFf4QiLD2iL9uvrEKhnaWV1gqgfacgXvRyYpTy6x7KDRhZggzyTXcbMR8ctrSza1RbEJ",
  "key27": "5GgD7nDJVohTszaJZyFEGyYGaYRMZno4yLTMB7fAnCCkyRVSWUJRE9WUy7pQH72FkQ1arTDW8XVvZvHcuLEWwUkz",
  "key28": "2bKaABTsUaQnc5T1FPj93pFUmES99EFR2Ky6cMVFB1evDGVw6mRUZfYTwbnoMn2oRLxGEGUstJCufrqJrtBdDrxu",
  "key29": "u3hh12RWiM4qFrV3y8b8fJq6exKgyrzAymFEztqzfWDZGnpSTxDPtZwjPoMDXaxSEW6xZjm4w1WDXd1AvhhXrn6",
  "key30": "4125d6Vhw2m2LZnJxrVniuzgzCzRjRpk5khH9nZSMGtpnqKeoJ3o7vYZWxEwMXrpMmGy6L5xsbrUf4XJ1VMkMPoo",
  "key31": "Smp6Swn5LM7PVVic1jP3nL7GMuajyU8bRXedatT1oEC7EKz7Zb9y7py8sGoWiko5PdSPXJtBv7tknLgUPaC65wd",
  "key32": "35n474LFU6BEtN9aZGMfUbzokeqFJUbNi7SLSpmqP76M4rHeDjoBgwwuCpaBTMkCHyMnqy7boD89AnYgqwkx1rNh",
  "key33": "2yZcCzExYuotdmVsWHRvQYt6cW5Keox6CDYMhsLtUTriotwvrz6vsF52BmSpmxsFGzyWoaBkp9YjY8XM4NhWkLad",
  "key34": "38bTXrXmRc6F8Pa2jtQ7KaiTysPygHMurX4gRNdSJMu7ntNjdQSyqPgnBhWcTq2ao5PofnBVfvybmzTseBncobA3"
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
