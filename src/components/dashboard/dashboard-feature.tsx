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
    "4By38tKGc9Ky9u8L9PTumQBck28Vpe1q82tLfMU1EbLEmL9o5r6o9MPtVireg6MpfifDrAWxeSc5CjufaGTx9h2L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uNyHGQDysqiejm5szSVdhs1wHGZRdQiBESUH1EdKtbu5rdp2vah31CHxAJ8yogwK9QsFHPTNHVyp7z1fZBMH5Mi",
  "key1": "4aPnaG6ZiaZ6K13BxjQgbRig7VQTWN9jVNsmwao6bQNrokKTUGQdYqKBeAon3nsGzrPQwykf4vSCgBCVP7Y7gJwX",
  "key2": "3JZ3KsQA6BLXMZU1rgnGXDEUTSVMrWZ4BH1bAvT8SNukM4VHn7gRikjTKipZSSfhSsWHUrRQLPcQcBx2ejd86fpY",
  "key3": "31PWrELCNKQFjZ8Le1XAdoYZkPwwk5UbJpG1K3jGMJHCgGRwLU4fRtgWXLxXQa2zd2C2UadbM3J6ZairfLRTZnkQ",
  "key4": "2GTDQnog3mHQKirKmRdCti4hk5pXzbj8mVCEnHnWtWg6vABFyFkxxGCqvCHNXBy1NgCvEreVLXKUq8e1Rx5N9UhV",
  "key5": "2h4rpBuVgW8AkvjNGAGdB48ahExPyDgpRg7ZJr6AHBzWjz6CyoVTApKncTFxky7MWUdMfczvoGVLig8j4k9Mms44",
  "key6": "3Z6EK78asY1EMxXfNtnYcAj22Y85z1LYgMrH4LkirTtmsszgcS4cgY36YUx6hs6Jsk3diqQKrPU5mKoeWZ7TVpLb",
  "key7": "CS53mJJa2oja8ZdYDaFswZVg9ogKRdL4EXngvzyQ9qTsbgCLojtoR4aB3qfS8uFEXXGTRwqvEPM8UAD6peoBUzx",
  "key8": "4UJ2u6Mj7ACPFJtJJCSohPiHSH2vEr7jqob3dCjsWyC6Cxf3Yn5XYrJpVmX4rGQ4Vd9jVGeRVoxAAwbAaC5RKqZM",
  "key9": "AnPJPM7g8qxpy8YAaRAsMuHdf5a49FGi7WjvDWtJuVKrAZ2giNYzwGv1dJdfngS6NwJs4RXFFKSaYfJZmkXmsFN",
  "key10": "5Xe9GQ2zuUNZTpee6RbeHL4RWjRrknjcoDhscAsDeN8zTkGGJATiFfTjnbqfXr8LTXCqP6WFPn9BWDiYGWNyKVbM",
  "key11": "5FgZNtoHoqjnSXHjw6JG6b9XCSyuXLEpwboK7BdfcfbhBMmoLX2Lg53oEUPtj7iVMuNNihARwBvyGwbmL45dgN7r",
  "key12": "3NGKNTBMF2JcAs1oW2pXs3YCtc9jSfjrV3EcCRE8oGV6aAko1SHFfDMQmhdxzw69tyvemkEwYhfBcif3DB2opvZM",
  "key13": "52nWa9XvC8uoA3eR77Vf2RepzpQ8bvo6vQeaz66cysyLAXkx6QRWBkUVEwpVtVLGkUYJiBKpTkHcyx9eBB9j7uMW",
  "key14": "3TQSmRPgg4aVumNaMdGPQEuqFkEX29ouMqFt39aQuTVbDH8KJZroioYnh2zdHn9G66tZhiTtURdmSrn4nUapbxYy",
  "key15": "wJ2EBEGeJYqvF2Do5ErR7AHHS3fs4JJ7Rgj8KP778PGvybvfjy2KBxw6fDkxi9Q4qaz3XhJB4gq5b9vTnzxSQjv",
  "key16": "3BfoMHQ2eBdohfkdoCfFuu4C3wDsDHbUe44Gzfj33x4aCSD3Lm7gZyUEdZh353kgYpiEvAFf16m6CFVEcbCs4JCg",
  "key17": "YnmeExWz8KY3C91GbRm8tEPV1Ec29Aqrd4iA5vVte4MXT3c5p5XkZ7GhMi7AU8YVsMCKK3TRsRYVHdZSPi3KvVy",
  "key18": "2hhbmS8H15vvjyHAdFjnhSopkECzbG8oHRonBb81QDromwD2AyL6KZHN6raJZHWQ19EHciy35fvAHQ3LCKcQ2n3R",
  "key19": "3Ga6ud81AG8E6GV9h4qZJYsMoChMaFN9d7AmLSnQQCgqPKaqxiv5vwjvvrijZRu8asrgrZUHm8shiaAMUJ9TKDUA",
  "key20": "3AdgNWsV76xVeivbhgFjDYZAuuT64cftx6LKRZbZfQNtcmpRx2KFVRJ2DMHaK9hcB8dvKFrDds4X4UpvC93VBN5C",
  "key21": "5apuSux5obEL4bJWDNf8pXf8FAZd1ZNhPXKx9ZrPBC1xy7qPuBvQtukxP5mSWKWFU1AqzJGyaaXcRoNhUbBg8yvi",
  "key22": "5QiVsX4fPyY6XozpmtN6dvh2Vv3q65jMYV4z3xqwEwAjUVDWcsA6cTP1ZtBq8YNbFbR2tGhtzTG1pRubeNUUnwvp",
  "key23": "4Retj5hz1bZDdxhDD2SUV2SVEmiMh3LJgsHvb1AzrPh89r6xJEyeyFaq2VmR5Tjy36Fe653oE88ZnQteeiDui7oZ",
  "key24": "3kuFiT2xwRUoAoaE5gyTc4nTTZDYxPDtiAAcS4H1MkebE6kPTN8JqPHxqKoQH3VyZsKT7b65phvTLJxhrvN8TEEi",
  "key25": "4oTHCL26kBu8cVueyqdm3L6dw6UkpUTYztJnajUvEQ3XgbzkwNZ4ibq4YGvTSkQjvWmp4wjk33xXhgcKGGBie15x",
  "key26": "4Hf1xh4AwKW8aw4Jx6FT9Rs6SRRtkEKmLbSEPsVoiJBWDjFCkuMNA4BDAzrGAeb74q2XV3e4oJJXt6AWYZVR9dPd",
  "key27": "YPmwa8jtqhdRN88sjMztGhiUdmHEa5yzpqUWighVmWxPUKVf2ZC21Kf7DApDXTxSci25KeCWPhznGUbExV12W2Q",
  "key28": "3fQnWgm1rMgoSLTL5t4RscyJLxKjKZZHfNapG6LiAUTYkjugP5zZvWAqiKavcWWcTLWX9w687Ey65C2JFdLuauLw",
  "key29": "SmDf3Ku2nDFFLqD3yxGjibe5P5f1wn41duZHNd7rsmjTnHNeTcoGYxqznwLDEPZ6aB5UBNSMNx8ydntWCpAnV2E",
  "key30": "52L4ghDbpLnSZvZbMRqaLugUkqVkK7fX2eMJDE8DMK2TgjttN8uoukG13UBJRaZL2P1sccJhUafPxs5QJQgfAfZ4",
  "key31": "5hjgwABVvWVQdDjkiUof2jx2pKgTeJ7hQCAmmjeWDgysrbd2Z6Zc9wA6rapuhfzNvvrQs8h6mEZrJhd27uM7i7sY",
  "key32": "4tjtogszHtjRfAZLFgV4m685C46hWmACC6ge7En12QUDXegQEEiAM5YuH5m5TpqFLkcHVNawjXFP3Cu3sczArLZi",
  "key33": "2FNemKzffk3ekz4AXvz6We4yBkxm5JWzrH7MYkMGchUmq1gv9NCp5xU7sTGtE1kxjRHuEpn977J8HLQPsXW2h8tW",
  "key34": "2tYJww265dBVB1mehEVW3Cj2nswRhmXq2tiw3iFRhdhkAafjSyUmVHXzHMNmT5gJuG9cj6tpMt5KMHJz1b4ciV3u",
  "key35": "62ucFMMM4wszTHbvMNMepjoP9Akyi7mSfRQpFDiktK9iofeB4DfDoCEEwVAo8ejzZHs586nxMSzix8KwUPRsGeeu",
  "key36": "JhFJeTBRsYZmPujgQrfwH6mjSRriXSfEAoyfnYRkpb2ooMTZBzwnHpUG8sgnoP8sEoMyu8WUJAwMAaaPQxDJ1q8",
  "key37": "2kbGugcxu791Xfmz1Fu8JCE4z5LWH56Jywve4haCujWYDgDnajycuRJPo67W19xiXn2Lnh7dD6J5C1cPzjYsZYcm",
  "key38": "2xK49KoMtukAA2UWK1exCUKmZUUwViBvbNdJrEJs3w4C7uVVhvWyzwACeC3uNoBYibrCzQcNzprDT1EYGPZ5hVzP",
  "key39": "nFD5CH99AYUVLfD8xuUL61c61WYwxjZBbmPgUcdDbNpcLBLLxPaWvgPgwrHbKdrRSFiGPfazbb9nfj85vjVm2mV",
  "key40": "3uMxg5StBPxZSG2zs6PFUaFECq54QEC85388T5uPuRzaZMAmKExuhRAn363ZpxTxY9fcPtdztUqJzHPuatJHbqtS",
  "key41": "2jHBBkQQ56EN91Vmn3cb1NLmcvjsskAymR6Jz4Ger5zqmsmQ55qvaom8dYBdtKa15kkiaqyZsK18WusTwUC8jtaF",
  "key42": "2uPBybWrTHph3aPEDDJF1298unZaZgiLuFEqmujnDeGEcExqRZGTumJHBDdJEqNzZaiL3Kk3j65L9TgFqj6gALKk"
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
