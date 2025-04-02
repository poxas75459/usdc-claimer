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
    "4ZpG7hwvUBkCMP1CgdCH1a7X2rBuTmFqA2iY79kHW1mUHXTmRs7K95JxDiTz2PxM4p87WBjkefHNSaMK6V76C4ZG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h98ouWY9HyatBoFCq8wSsqhEhsFTbafQaaCqVTH8FT3mvzvujHt8rhdgZwb6Zkgx1uEfxGb4ZZJPC6L1oCFuDrd",
  "key1": "2AKJYTen2WhGj58hT6qxtpRB1tKTVHR79qQN73s57JSEoQtxqSoAU9dX5umx32HDyc1JgmZmgApCVUrsyeBdiHng",
  "key2": "3bQjHvZkuSs8KRu5jCdRf1iNxYdKvyqz9GaKffGiDsLjjC3Y328UZzjKJyVXD7MM4pQpiVoV4RMjENDTzPZu2LSL",
  "key3": "4mb9fsXddeh9boEKBs4RNunGz9oHUZVW7HR8duZt5GztYRLxSRShMDM3gbMd11svUJ6q5WdPhYMsRSw83J4Y75p1",
  "key4": "2zRWdkqsfEk6PQiubU4GgWNfkwGT8Ra4LshTjzLQfjZ2q9qxGutEhhEHhnvYctSWgh5e2siPTEjNGE1JNTMFvQRL",
  "key5": "3QTpfLRe1eLWt6ZWfp25jrTeWdFVUbR9W2eMdwMi4mZijcgNNG2z8d1GkyTxsQyYyhmEaBVFq92CpjwsdkKKwYpT",
  "key6": "64PLAoG1vnCTfd3RDxTyL5JpCtEjwjX26sHkjNGj4KgPU4cuJrrMd65PHjjtfdopH9neXFHkBRzcHU4My3xMKcYs",
  "key7": "5yQMaKpxf37Ag9KjUnrQfz13UNoHEbUdMT8nZXd8HEwxoGLB1U2AThhAPVGcNsKiDaTiAEJDUB3aYsgcg5sFwMzw",
  "key8": "4PRUSn11XJFLJPA89uZKFKtPZeKQ9wg2qBsqbrvJBnVTAWAjEDp1hcyCfviZkKuxUg1MJxgzgAJqD8zMKaazc9Ae",
  "key9": "2mgd4XiNVDgTPjiZobwXvNdyP2EjvUBZcW799BqAWXZPeXd39SuGJDENzbpayMnXqT26MwEBfTSrejMW51mVc7Lv",
  "key10": "GqFPiFuzF5EJd2gxE3TBpWTQqeqAfTftPatwa3j7EqAz7NuBpqw6WjCnWQF7RXkCKYZQeRr4ArXCHe2GJV4jDLX",
  "key11": "3iCHhiUsp1j5ywjrY9SH3zQ5Qas4pfVwsso5cXXCdtfEv2rEmtRstpf3YggTY64UnWsTMzv3RU9Uon6picWdd8RA",
  "key12": "52UNTf4yWZ4iCfu48DiRWYDADQ6SZG86BUL9ZVyUAPBfW6kx7CJoiHaNH7f3oBz5ufNBGTKs625n5u252yTDm4VN",
  "key13": "39i4Mxx3azUfHx8vmVaVpsu58Qxoh9xE3XmxzZiZS3EQVykrdhvpYzjDv47y8AZdRQridQPUVtox2B4mqaTYL1uc",
  "key14": "39V6H3QrXzaeFeshqDvs8dx3epxUsMBb2idEtGPZ7Z9Wkc55gmmBkoMLXnQcz5Mp86QpJeLGqfFQXaxCe5REhVLU",
  "key15": "4CNUfxArjmv9ayuwZVNZ5sVrsXNXCPSciPNr4111B2aMhuMYAecZSXWSRMhzS52Q9GTgaQ7FNJUo2gota3NX6Wfc",
  "key16": "MPa77wGU12Pz4Vh1CefWySmQVuXvX9fy7Syp2EL78hRLR62KAB9GJKoHSXMwX8vFo6BmXRrvHyNTQjn2GQTiJT5",
  "key17": "4R5cvaRcZu7UMDHLXd6uyBcspGSVpMHCb7cFXmxq6auhJPv3gEPdiL7up1fBBXhtiWz4k5RfKv8kMztvKq5Wymps",
  "key18": "2mpXuPcSezQW3uFRd45sPp29X9SuVjT3fAKBp9YtbwKCm1u1FhNu6gZeVgrncMhS62NfiZ6cbc12BAZdK9w8tR2z",
  "key19": "FJACUR7rAGMs79WdTmF7VJhiXqvwCoVuaEt3vKsChnN59HzHYuRZ66ksRqN7Wv2bqikhmkvC7YYvUGY2V1e1g9d",
  "key20": "mQ2SzwzviJiq9QmEbfd2tR79pvAbVtN5pNe93ZcG5HanNiNZP5SNEb3CQGQHuxNHoomfu7dm4hGTy31LaEpruYm",
  "key21": "5f5CxbS7vYxho73Yic3K9Xeki3cKLXLVhDaA3p8yFczZ1pAB8sf4aTjLDScbC6uprexbBGzJSyJSK5UEuCqMsqez",
  "key22": "2qCaF9RbNbUuqVwBwguvcZQf8EjPoDpFkDLJxnN2m5oH2bd32NghrykKYDEsWhS5MoCFXoMUvALYAfDvbLqyd41D",
  "key23": "fYwyzQpf74c1DyqxEvWuwHh53V8fhn5SZ1LvEBrhJYcRwC51JRsqDSGfQCFeUk7b5axgkX9mAx3gpn8bVL1bdvC",
  "key24": "V6jSGyR1Bk23DS5Wr6R3LSq5SSAFs7GScsthEb5FeuQuSaKn1LtsgkCbFcF2jNK1Xuiizmap6u5KonZ3RAVTB8z",
  "key25": "4arVhPyD2LdNyyyA9MeLh9aVjMy7HuUakVQzwNrJVnAfX4JybLgP7f7HgjoR1NQfGq6UBYKZ6snGDqHm96AVCeuo",
  "key26": "5w2sSPXmUxkG64zm5uPW7Wrorf9Wa4XveUAdYReSK8qMrjY9NkiGeLVeLi3pmrYa3Vf9UGibkTW9LeaHELuHndFA"
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
