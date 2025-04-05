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
    "hRz8TCqFCjeeotW6i3fCAhKZseuK1Fbno6ux3MYv2fe3sAPP1PxRMtuxCAuAtF45JptH3JEeymTQzSQfdShbRZ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bQ2ahuUcXe9zZM5Whzp33Cg11BsURa4RcDG4HucDauTHHueo3DB5QtP4mBYUV9HWng5xeY6UMQRJxehCt8wFhLK",
  "key1": "R12iRpAGVfE9oz2uNsE9jn5Kd4VesKQ7NjQVDzHzPcgRW6s78gMFRWydsTcpxHEtJp1hyrrZ8kBohiSS9mLZLz6",
  "key2": "3ckqEbABmB1bexAyZ42qmuncA6NEtADtHMJ1Ky6D5C3Hhqyyvg9GWRGziUieeGCAtj1rYUreYhZbKj9Gudq9GKxk",
  "key3": "52mFwaniTNTs3vyx494JBQ8VkJ6zbK571jvcjtocEbhhzjXov7dfzt7gniSrjLyrnr8yx9G4C3cwUsRJ99EzZtaE",
  "key4": "qa3rvh1t9GULpJKSCLjsTnRxeauB1yBhNLLPDZGPDkH2v5FmzSSEZM9iq891DndJt3XSG6Zy7tk6KrJBLFFKvZG",
  "key5": "3Jjt3rJeJ4mZv33RiQsBBzQ4GTrzNxRtu95MWc6ytbjtApy36xMQ5r9JgTn77TNHadtDg4ymTEjXyjpx5Y388xWp",
  "key6": "3rZkjEJ4swDrZ77VZoRpSChMMa7tsjD5MRnZN5k18n3C6KMxKM7NqvjZ7pypBsuCXTWK2LMwz5rARNYP71k8vDU",
  "key7": "2LpmayeVswVMSjNNwVMsKXoGrt4kgkEwqELxuhxbqHPY95UjLTPpaDGYdYLUqfm4P8V2pEDiD3LELbFXSDntAma8",
  "key8": "3wgEChwA4A3FAz8BGjQc1mKocVswxZuRvxYVzbXJoCtVk9nVEEZhnvQFKzZAxoHdm4NqHLKp83ogy6wXbKJZCam6",
  "key9": "2vNRXhGGvGgdZDT5rEa9T2ByYbt76xSYawjc8fnL8dme6Ao3KuMJcLgfi77g9eDssno42cq8c6RQfqkFeH1YCpNS",
  "key10": "216y14hsu7o3jBQTV6okSVkgjfpojGY33qav5RTAQPGrHyxsK7S3qQsqciBaYgY3zN3VqDzriFE8b8MHbN6z7tPv",
  "key11": "3FmGdfoFp9rs8hmXzURG2qLPNNG6KLMWnNfmLh4jpRYyBgMFzk4spWdJmQbSiDckNtBbSXbqXBEmYXbq4vXtV3K2",
  "key12": "fVtkKfkGbcWSA1ybFbYEdghh92H4xPCC4sfxbYghHSRw66iwisDNnpFBgSwdnZZ74CpNHV7tUy8UyQ9cKXDJSor",
  "key13": "3bLhoS7AdEzptETVwwwt7cnnr5JM2U3EEbDAksDfnKRPQLBVLgi4vBUUfUdrMgG4UoJ1vauC2D2xuhCmKEQXtWtZ",
  "key14": "2An9Q8RAecZqFuAGjhd3EXpgndPVTVvfMPKTWVzLD2ipmiXdSofhSL2sBdtnrFbm9FgywJqpuQAdW3EpDMENpL5B",
  "key15": "5EGrBqYuSEk8hVuRERAnmosw7VDHsKZzh6D8qtmTLaie3ra5NLnkGRoM1ovvvAMkXqGjDaPB2VbaFJbRhg4nTVDw",
  "key16": "3PPCnq2G9rFDFuKTMr2ZBsXBMwgZMbg68oUi41mR9Zbwof3euxYqS6PY325nSfHJdwMxFaBBmNNwngWif1HL95R5",
  "key17": "b5E146RYbbjwsnDiyDbMrH6mzQQC6fd5Uf4Ac1gqTCUyYVFrGX8tbLzawpVMM96hjQvBNxWKihfHFDKRtG3Xou4",
  "key18": "4BpBXWe9i3BwKu8uDjF2Z8rsWzfwrbbcEVdxaP9HM7VvcC5dLUtviGVMVA4JNYogcg3CKLahkE5EWwgFCSUH5poT",
  "key19": "5Ju1dtNCVD3SAH551LM5wAruKhxH5a5gtGgh2SKmFdwiXY34Pn7SRGA919MkEdeSC6K7KrkGuSGfLSEx9zExx8Kt",
  "key20": "4M2kxBVrFKS3uLeA16m2jP93KqeirqyD51sitBRxCugsJzpcCpfpfgqRaTEc1Y32y212rsB2pMj4ekC6c6bJbQce",
  "key21": "3xqbP9o6aeYABpVYrqGF9VF4DjEvvjieqEER7VBQqJUWGkctkk5Nn53Y6PFoUckcQB8TwfJvsCax2R1111nZDC66",
  "key22": "5frND9Bhmfr3YZWSXK7gT3CZ6igvgWBiqgmJyTwAWq3uXjYp7QHHuanZRdP7sLCM8H383NKgmDFdAsLv31aDtqjN",
  "key23": "2WRyHSJSsNiKBacVPYSsiSZFB9HtqUiErSrLqPGV9ieHg1QRpNUpfgicwjPe4hZfsZnUfKwzttbV5ctsgetVUgt5",
  "key24": "5acD4bWiPinWnLq8MGMTNdPCePKK88ihKPwebkiXstX18vPN37RddcZJNXR3UBQzoVNmAcYdzgwE4W8cDhvyq3Xe",
  "key25": "5F3g12VztSQn8YA9snXMHykbZYm6RqbDbMgzvQVD44CipiJJy8ZMTbLB8eF8dc86o9Zxtp6bxHiVwNx17WchUNaA",
  "key26": "5HodA1Si3u4NCsbnZa9YfGeZbiX5U1ZEDjy4qXY3iuFVoNVgT3NQFpkiq8Tnpbg3oHN6khdUmm5eyGxN1WfPoy6N",
  "key27": "3kRfVcVHaLQa5Z8osDrQczhC9BLxQtQZkQf9wP8xp2bkjwSEbjH8NVTpf4LhtmY1cfMFMS1JgspDLviqbjotWk1A",
  "key28": "4xsETQ8tTB6GyXdpExWMVNw8xS3vQcxjkvpv3h5M3g4fVaGKZetvb8VhidQpUEpQgeStYmN3mLdFwtUExM83u5KX",
  "key29": "2VLsdCWK6bgTe233Qw8dqPFAoPRMezgqeDxgNe1ygqo8ixZZSpHUpBDnNCKQnFtRd8ipexFYBFXgGrg3psd7vhdN",
  "key30": "4xW9CpRu8XsGKC12nxVj6WD5BWMNNKSGvydA8X4T98MRMbmirqLMqsECnrCionSoYyovPT4LUgyxdA21AuDthvkk",
  "key31": "afiotwvBzWBs1EmbNiqDn4mAotKQB1D1WA9RXaYCm4YqB7mtngRZJnPKwoAqDk9sAYoVVfddoUHR8EAMMhBBPSN",
  "key32": "5DTYPHFcaQzgAKxPLiauvgw6ms4aTSKxxZYWR89XztnT6PxwMz511jAGmgvrumrrMAiucatnt7ba6vG9RCsQMtoy",
  "key33": "4sDLDvQASC4dVRn6fU6qcVr56BKyARSQuz29N22Gj9V62baFbPfP8vk8CskZgy3jbY6iDAHvEojvKsLuxP3yMw3X",
  "key34": "5dva4XaaRBZLByNUrviCRkgYgQrcSAiACVtrfy6WHCVpvE7ykRN7kkdV7PZ5MGYP3UkwwwWu9WSUaNLr9FUCEMJB",
  "key35": "26DWYT6ri5qE2Tds7XkfV2eFtNoXUtT8MUQeu2ubtzQEEcBT2GVQ8vWXfgXmiNLPvfFMpEBPuAqP6ds8o5UoBoFq",
  "key36": "4mdC4cqTf7Ya9pzoWrrQFcxeSgXGaXCFT9ghzJRREr8JYZHtVFyGzkreyo8v39fRNkgiBUBgFhoKCLG1B4f3ykFv",
  "key37": "2Zu53X83S7YTv6a1Y8r2NA9Ay74FsNvLxU76ySoy4f3DfGre54jjuZjYbsFoSQMe8LvWnYe1Fdbn6N4S6pcyYY3M",
  "key38": "2GgU1XMKuDdHh73XzwyNmi5w9UFS6pURbwfzV8KnPZ8NR9U1kC2BZFv2vPQHSozeCFTWQDKGTvhEPC18XirsBdpq",
  "key39": "24NrzGyGJBDhJcxBaqPgqhpWyxfQncCAZhgKidfn6TdTas4kzwrFKZHgqg6DMhwfj7spBo9nYMd3PmeivgRhxNN8",
  "key40": "36SAMHKCgo2FvSqstLqpL25XyUEYfxxwkBJKv9hgbwj85tdArt7sQu9JVprqkBMRXyNbZcxtsaTQhjp6roujBKQ4",
  "key41": "2xEHWRu6haURNgGzo6ERCmtcpDg7jPDqzAkLb5Mx9eXfS7cdTvzrWgU3WY477MAFVFRsdFs7qJWWxWVQLm2M7Cqa",
  "key42": "3QRy4Re98nwfr4KsSmUCmXJCdxAENAkP1FvGRMFJThGy4kHjpcysz8EoRyfdrtjgxoKYfA2C3phpcKz7baJK6iAT",
  "key43": "4PygKowXFB6YwCPfeGzY9DA4A1dmPhiiB7GxeEGZNp3a6hPxmaSXsh8dbbksDXVeoEpM7HrLQAEkaAnNN2SMwq5M",
  "key44": "2ZK7h5oMpNJukkNRmm9afczQFStoCQU5CAf98yJbn43DgYay4NuU58CWBSEx1oBKuP6xxLLK9XzNzLorcrGRag5f",
  "key45": "2ANbZEWPJ2xB2AaqcPhJbcvrhsy5Zo51F1jofdAYvcyujS5opL4XSHtSZDZe4Wq8nMjgKHPefsvk3AGZDYjdFMA7",
  "key46": "2G7Di1Ve24GGAeQqtC4LdLzDD4Ub5YFG3g6T7rmzLuVzmTF4P9paCsQdaGzaNF4pTdLYN3Z1A8bmhf4GP3UThQak",
  "key47": "3k2im44gik5bWZJGLreJTigoiXVhWnvMmEd7jfeGLPLPr4YUSrw9Xqcmgh7cto1PzkkUFCEnkcpJLEKTe9tQnaWZ"
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
