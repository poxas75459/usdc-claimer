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
    "Hbmkk7XBgPSeoQVcsYMmBQ8C2pXyezJZyiAGn7wSdnkvxoymWSFxLbdTFrPy5Angi4Abtdyu4gvdiNCoTRmM3au"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ynkcWkELBQWjaU2tbH7EhBTjePqNNGSMsyRBZk5URpAcP9yW9LRCDeGurt1bY6CokUfGm4AV6KCmH1Wbnad29G8",
  "key1": "2mHQT2dfjPZDN9x6vjw9HReD53ZGsZXYmfUUs71ZVzVWAsizRm1MUvkoajRpAmFeANopDa69mxoTru4o7V6N9RiP",
  "key2": "4y5AxnhEWuUrTjzCpmN45phDQ1bKJG27bynzUL4FHEZt8Uhzsy6UXK7TtwUcfnQNsBJGED9MTkaePkmhqNVQBczo",
  "key3": "zAjde7yspV2ySxZMXqupgJy3F41nbajXN99vXiFVoHF2YDEab9Ui7yyTFJxuGqM5PtRDL79CJC9PufUQ1ZRwGBx",
  "key4": "56jAneTc6388u1Bn5DAUCuHWxUfM72Yje8fGGLhhGXRYe7ZVsNHVaj7J2bywg2epNK5kLSEujAYNF3dNxnoSWWGt",
  "key5": "5rYpp9ZgsuHKGy6yp2VeHynGWfmHYJEhiiD2V4pXyqnykoFADuqbkhGvGMyhomTvzguQAQhUzU63cEiSoue3hwQQ",
  "key6": "4E9mbyGe4EBmJ3TKq46chXFADku3gAb7faXeoMyU2nZULbZnebo9hF65WtiStMNjRR6P7qfPvQYMEbT7JmhZtAzT",
  "key7": "5yRWWPLWaAqcEyq1LTzZyL33x1FwybhFBwD21LrLvv5B3PXWDGrWMpvPBqrbs9T6fWYTJH4Kfuii4kLBTyqfVvqG",
  "key8": "FbpVndW4sfNGgZEezh1UGWYKjDecnrFDZQ2DjThnShwVL3VX7EUXvtmEt5ST3pSwBmNUerdG2xuYX5VUSBNHK4p",
  "key9": "5zzQitoJaTivby5PiptF3au2SYrqSBzCnhwAwaG7jcqznmf5pLvsGt7V9vpBP2eMKKz2zjiFYeA3qbyZDuk2Ashs",
  "key10": "5NuMgwyEvaYozPWhWe33MR2n6hMiLXx7yupdSXLHQy4AyAppuoPtFNmTrdKM7QvkkwPEV6TnUqCT1pGwfGrkuw4u",
  "key11": "5mSBk9MnCqmTdXq8Bf5Yvh9komrpcuSdc62amneKTRfV55BaeboN8GWeNhWgMPfYfgaLXnziejdUXTYA8HbWwKuU",
  "key12": "4XeLqaDmtGCRgoAPoHWMWfBeqqyFbgQ68znAP48XiCxu3da2ZUkre2xpk7Y3THYzXyrtgAx9u69wYLix45dpfShN",
  "key13": "5gUkZH18c4y9t2BtTb1KjfsmhKk3Gc8viv3br86jBRG2ZbYqcZzYKG24Bb9oYm8gQV8L7b2HhjR8cYPP1Um1RcTE",
  "key14": "5fUiLPm6a79s1uL8836FjdRqobdAWugAfpaTBGvcZxAj6FX2zgJPpSVJGTJozxRN11TES1Pq9FWecL4bEuGhQrJy",
  "key15": "5jJC5oTNNVChkZmDKe3H4v4QczJEWGfGW7sxBRiXRQCR5M4vWdDgVPnTau5f5FBiYLKJjp2DD2fC1wGe8pJ6wjWi",
  "key16": "214JeR85EELeBi5n3BAENcwyRm99xx3BZTGaE3YKk5VG9RtPbm18hLWGErUonD6PXyFCNFp4M2UWUHshMREWr4Vy",
  "key17": "5P5uWQWgoa5pghjMSaM7RV7y7cS2G1ipbrZBHk1Nwtjoao8PThwHp5ZRNqWrEZY154yFnVTjrT4MHP2y2wtxF6M9",
  "key18": "3SJQHHUNbZSfoNiitxub7t8WUDNLJGgazv3CCWBo48qApFRXwyYbecnyHQtrbPHWFuAC4Aux98iygHobs7DJR373",
  "key19": "av6rpB8tUZUpMwpYkNYh29eFoi1UaAtXi9RzzqmfhReFc4t8BYPZs7ouYuuMgaVtKW4XS4DQaLRS6PYSTLrju5k",
  "key20": "2T8CWfcQQ5FrSncm7a1APKhdmTi44aAyftZLLvVSLo1yvvdeQuAp34n7jRrrCQaJbg8F8kKSqWyBpevfwYoq8QnD",
  "key21": "2oS1qTqiH7vpf81VFs9VAqNx3KaPmNHPaXy4gPEbdcfsvjBMYFuYtRddCHur6GDT3me6j2gCJrfs8Ta1tJQN65oX",
  "key22": "3qivsmEqziJPDeA2K4VkXxKadgnXg3pfo6gipFUsMsihdyBgrJmmBUNgGAhDW6P3a1ETr1nMrws3CTMLuidwEsfm",
  "key23": "1fv5p5WotVsPCzfHZABecFruHzGKACk7rvE3sJTcLBU2xxiTDzLvXbvxyEPDnPUnooLdLd2NvCqyVMFG5PEgPSe",
  "key24": "2KDYDfw4zXtUUDUDBGShg93YpCXCMgDdZSW8VhK9og6kpNEVy7yzR3baYGnWVYaKZGgEtxaLyj6vyRAaNKeGcP1b",
  "key25": "28BzwgA85Ke2ED6KxSzj7vEd9SizrA6a2vP2XRDJvx54MSX2Fvwr8RcNrwqkqtn4dq4g4VVMRAhUPSx3gtwR8jzv",
  "key26": "wvcCEgXCnuLBEUWHUAagP6gKPbxS4cNrMvpwFndj27qCk3PR3xe588STLT4wgxktuNGxYeWZftuHeijjU8u4aGK",
  "key27": "jycgY8zLtJvaZHctae7q2wrCsuoetkN2ieYyGHmPnxYdCmzbi6ff5Kr3XUFdykwL93E2zfgqVANdKJ1jkSznGFu",
  "key28": "3mdPakdNgtehN3qnaWLEjdKTNnhujJP539ARCjsha3pK57BspXD4RuXoQcoZPwEcfSrgJs1un2EG929ft9CJUJc1"
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
