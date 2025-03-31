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
    "4qiEbBJuHan691JbdzuQpxEcEMeLVSWGGecdW9RxvzvpPt7ieR6dEoTLBErhsfN69z2Sw2sc1uLMa2to7Jd9hFCw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b9qHMNcTvo4sgyxFzCxdV8Hfd6A9YBcadLNc34AwF5ukt5GVqYUFnkh4bsq2fnCQ1aiZ41JZcKEPbU3r1KGbFSE",
  "key1": "BcM2j3JNeSy4y8N5rTKkg7sQm6kuF4SAUFh7RDGCnGDD34j5T3PK6CdRk9AGhQfvyJKLGe8dMbKmP3UddzRW7Nn",
  "key2": "5WjDACtWMVZsbUo61AyCvxEREkfhYvvpyGvVfUDZghsXrvBZFayxbMJ5BoqgmTKWiXCPEe9wmAtKGpKWnrdjxVrg",
  "key3": "2M2twFEpttt1kTxP9juZjTgMFhdYY8fy7K3Xc2SArTjxKK1vwmHQsrQLFcRb1VzVAXpQ9x9Hn6wXNy3cfrZodBTn",
  "key4": "GtigGqXY5GFdfbMpS4aCy3sBv2Bc4vatUJV9rPhXmmKSdtdxn4jzq65fy2ngHCF23asoYiW9q3oQtitDkbFfthh",
  "key5": "2DQdujqiTFcoUP19Bvf2cuitd4dMjzxfacqEfiC4FpbZZnKDzpXWebTWcR29TWhGyrEk76eTcwocyjzNeJxhHYxr",
  "key6": "48eNvUU1m5MNFQFtYkdeX8bREPWcQa4pwVrT1TcRGU1LCpwJzapgaix8JVXvk3ZizfSZPE4Attp9dST3JdswcmsD",
  "key7": "qgm2ToGrjzvhQhSkZQGESgmNZW8iyL5nJKP3yM7nHGmS5ZTnXW1ZajiBsHnMb7wrzGxq51Qp9AzVuocZHF9AwCA",
  "key8": "56EeUKxLAkXScDeQVPBz9d7VjviRHnmP5J6kYrecGWTd99JuKSi8cdygEnDW39mLsrEWk8RMGc3MQDpxUExoD5hY",
  "key9": "5zbwKXiJatZp1AYaFG4C87KbtrF784xv4WsfJg6yrAKqGaWSACufEJ7fp21BXfhHRWDVCR5BoBgmgyvYbPTDGfYK",
  "key10": "4rgoRRmZvdEzqNUhnXZDFtBPP5fhPHUvgqSSE4zFEvHELhT9oDqoZWWZbHUznkA898HJHFgAGbdrAsLFbxhUyxzg",
  "key11": "366DdDLb2QfeXSUD4E1ky4Aych31W6vDHBPhWBjXEBaCbHFxTKGtfmp5MLLtHDcDLurpRvFM58xvSQBnQGRwy8sy",
  "key12": "aJ9dNtKu4uYo4LFQSueG2GEM31f2SKzmFuLXurmqwpf1TDNPJPbqfpckN3BFqGDWD3HpGRDup7USWxhTNZvfd8n",
  "key13": "46VgeHPNRWKVnhbAokjgGTF5KunTsxbmycebmSENnTxY7uXeLdLWbdo5W4AQeSyRWK4b1FWd4DcCPPnBuDeLS4kt",
  "key14": "2V9hCSbFnbTtCR6UfKPGJZBKrFz8hfDFXx3BW1ToXwoV1cUNP2zkhbMtFDUMWHpoy7vxgR32zWUcd3833ooGwVFy",
  "key15": "2KMQA79khvXiLBY39ZdCztqC77Mu38eBhVPtJj6njjiN7HJCiZTcvZSJ6rzCaJa8taJnnHQj9JwcsAL92RGN3vAy",
  "key16": "2A32W87DiDX67ipt5s7H8LKjB1BjafnHXernZBRZ7q429PKKesZMQFuq6McyqMz8Rccye6wQEkrjxX32fyPi8wHd",
  "key17": "3SNyDuas4kbDLeYQ8nN6grnu7ZntjeECtm7u9EZxoxMjxE2g9NJUUnDBD86hSvBkjfa5tPsEyf16zP6G7saAp5dw",
  "key18": "3rMcHifY6V7JUoCvzifqkBgkeYTtk391QxBpxza79CF2dWgyWYxXnDDKTU3SZNxohXNkbDjh33JPhnQJW1am8QEU",
  "key19": "3igDLrrUfaKKQqQiSqFHJJzDG9fhUhsomEgziV4mVX9DAHUCNRifRTCnFuNSKnc9dQeUbgZ41qBojQh5Agi9iAo2",
  "key20": "5X5tGcGmNwkC8i4167mHPo1zrAahcVBi1pr2ns2gcvgLzRgYAoodJQoie2jdapPmkK1jnthQu4YeuLrD9wixkSJv",
  "key21": "4pKd6FAe2nB9g75AELaEaSDYP1NRZSh1kQW1Z47FYKtago4QjeNjsDm4vp6vMB6wEKRLDJUNHXuN6WujuBbVSv5w",
  "key22": "495uJ2iNJ5ZCBUsygx1dSYZb1uiBCBNabGsSjh4ikSXEaxjbTXujeiXWFpp9VSRgvSMQKwTvJoZz6CyUwpccyR2p",
  "key23": "5rkdtVRQ5a2Q4F2coT1dH6ME9V2ispe7MwVobfSqA6VMVLzVaK9q6CHJeds8E5yQ7c7mMiq9EnGbhe7XV6PEUJSb",
  "key24": "rohi8QCZSPPdn9n2sKE2Xqdf7xGNVkU5BZW5dNPHTkSZYTVAGhxJnZU9eo3MPnniac7pAVVX5SaDRUWbpVCniq3",
  "key25": "yFQJ6VXBsX4bXAgmUeGg1N5N5TkXnm4UH4hD1sMoBZjaDSQuj4StWN3prDqHD7T9FNQZ3eJZEn87Hzq9SGYMBG4",
  "key26": "vfRLUJTnyyrxYN89NKNLQikZwNaBvEcfGGkHx6rjfKhc6NqvuStawyXW6b5DPPMSaLU8Ffk8GXqVAue72NoAwT5",
  "key27": "3x6QehjTqCwp3Asb2FcFc5FAcfx9nbheKuzVYwkxPLJYEbiJUXdnnUjmL2eYNqn6BYcSrEfAnuQ762i5KHC5AvSQ",
  "key28": "3zthrxBa49GEYgYxeAiTa4oQwDEiG3vqsfPrJ5MNwp33e7WkNdv257AjHgwY95B19XV1wRDxPmYr5nX1KhuXTDjo",
  "key29": "2zTyWLdJVCrm8eWJBAVoaL12ziqKxeAM8eozYwdYnVWEbkPtYM5Q9oZRNQptoZJuqU4S71GF8vkRYbg9LLY7Zx4U",
  "key30": "2zNmYGVgitGJxRTCRhrwSjpAmyff9Y8VDwiVAZQHBixeghM7PEXK8feD8H12mB1svx9VhTFKyY6FCFsLPubMKQEN",
  "key31": "25zzSzCV7JrJwLxoKtqzncusU7A36tVF8yn62oKebv831dwQY8wki4jJCsLem3s5BHaf1KtJTLLbr9duUmsPKWX5",
  "key32": "2B4khUxSED2MsSENtkNdQiDLFYXMdPPw1vrWCLojMo62F525ftof5vPAA4JhFNTsVLohFac75brWtSaaShzGAhrx",
  "key33": "2ZnosuwF2vkcC2SCANSjnuNf29QCxusUeU5EsPsgh3rwaHZaS9ZfwFmvHR1PfBA9bPkCWL1ccVcyEACx4mEzQd1v",
  "key34": "255s8pcycQ2ubQEd2oupTu2uez2t2KroyXVyzyisvXxAwRWo3DRCm3dpE5HGtSGnH1W8QM6JLXSG7MDQ9JTdVB8n",
  "key35": "4SGY7wNvE74RCGf1hDuu7CVwo4yxjnr7b55ajp5NnmgwBrZv3kVRrZJKWAuhwyuZbtJLNhfpdECvv5oLQUvSTThn",
  "key36": "4Cw7YGx9gfq5RDvn5165AZkEVyQgVhjxuZUSHyUpXHQHdDfnUrK9zPJZ6k47UkS5MYfnigFgx1JA14jDBqXXwZkr",
  "key37": "4zFFN9F1mY9LBgy8qYyyHyPk3yURMkp11fq716oJ6dMwvrokMiFvZ2z4xEXMZSFV93rE1M7TRTEiJfnG9vRfVkWj",
  "key38": "5X83PfuvKBQ6oM3yQSTFh5WXzDda6XPrThXUME8uCiWivdh35oVuvRD1svVGVMw4JGDoKnLBxG2XskiPVkdNzy7J",
  "key39": "a92L1wDA9GtehyzDbgVvkkbACV3Fx8qWYtKXBCaTe5ZYxFC7ZDKcp6gSc6KCgWr5J6rLJvTbrspY5x4ezLsjgRb",
  "key40": "4s1UqKVgaG6f1vahcKCdXSTqegAc25c4qJJbCuydeMkFseRuYhLYGkineyX8Ru43Nhdqjftm2PdUpCRGowaUiZwB",
  "key41": "3J2f8DSwWu1WG8vyib2iDyVwLdHWfpE2ac4jiHkZju9Fek7svQYGKN2kqeywesYN7nyBXaSZHEbnyX2hpg5uFyDS",
  "key42": "3b66MLK9AiHBsXdWDkZTS1Ugs9rVJ68JvQUnwFxXWsG6sY9XssHv8zgLXpnwH2KAHRVo9U6JeiphQx1Asm7a9kEG",
  "key43": "3oqW2V4YUmVLfcKbrttQw5e88QASyLpzem3C92Eg7aBWNRxdc19bQ9o2X9T9TcFosxdHtuz2WoCf3C4sqcQkrBYc",
  "key44": "4zFCG6QLSUy7h4ciE75DBsDV5u5KzNRrYigMJdNazWHJK2vFLZzc1dXT3oxgtFGz8FR1E35EYsjej4v9Kkj7h9A8"
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
