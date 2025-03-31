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
    "46bVacwiiX5ALeHVYVtyK1cdn9qsNCeZiuMc5UxaB2zKW6xzxdj27wrpGe464HRjHKGvysh2UznSyGTVkPmNvq9Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wPpctG1zsVVVip1QPa5gxwr7kC2oiQXApYkVdKmTSnWWjbzm7D1dJ9iPeNpZZH8XS1MnNMMjwQabeKMM4TN1Pny",
  "key1": "3hk3QYEjzPT3zPdVNPsoQiUQYTZgK1vc7EEFvk9WnEw6dky1TeKZb4W6FbogdiiZXvpomdeCNFXHsfT8tgW1qGiH",
  "key2": "4SjTmH84jA1VB6Cb5VSHGcWY29LYArkWswK3uPUKxgpYniuR5EHCdScAJHRWrrbApNjwbJJAbUkRKhXVisKp8Nue",
  "key3": "4wJ5gzCQ2ZFMFzGCaJ3bKWtKK7zSBw6mbRbwxWTukumrXDHaJnV3PiNuqdLzBUo9fryR3CjnzrK7AQuToAtSZaAt",
  "key4": "5CTSN2eZv1HHKi8tP8YkJc4Ev9MHZxTa9TaSxBubh15MnAsCDNPjyYgrDqfTHvmCZCURgzpDcqRWsNXRwSNxC6BH",
  "key5": "3XxHtZzutH9xTnurx3CqhxnqqiMuVAcaoRuzf3EwPbEnr1vrAvfd9DPzGyFrK17FdJWSCZZxiiToTvriuKnaPzKu",
  "key6": "3uewV7d5MibYStWvJBiSck7KHM9ZBxW5gDaa7UUVaEMzttpvLzdQeuTaSX4dkahu4wrdzwEc6nntVQkSUmacy5Fr",
  "key7": "4wN2eBHynYG7sT2yz2bqg1EGkhuqfXbZPwmzdsJhra97MMAuHVen83TsFuHGm4vHMn7qqegw4HgT45xzSzeJZw4p",
  "key8": "4upP3Srfotn6pmHuM1zLqCeWCAGeu3n5G99sjdruE2LcuHnvQV6ug7GLveyvYqFThyfnWr3sXZ12XTda3op1HBvm",
  "key9": "3DgwjQE987SqFvqXdr7Sxt62GVqfu2125rmmHrtkraRv1BhZY5zHSZ4AxuQ8RzqoNisoUUNTs86SVocFEmqvynSQ",
  "key10": "4PsP9uL5zTzvFPeS8Uigo5PtSS59RZYsMfcF8eXBg1zCpr2p7Ph7GsWDJoKePiSyAjtVciqQNdpaJpA8kJeXc4jT",
  "key11": "UqGm838U1gMiybwMkDe6QGZXd3noDvuhyKFQaZm3jAin6Rxa6W9MbCybie3U5fTcHPVYJukSy8yLbpXFxLEPCW5",
  "key12": "4kofAzPSJvk6pdEzvwgyGW7n3SEnYRL8xUg6XkkvNykH3npBzWKEa6UmMqAvNifqsMXX28NvrEkh7KfhTn7sdxk",
  "key13": "5yGA62F3YH7yeYoevyStMNQmuZt353EAYza6MZ97PWpzmkE91aEdPWy9Te4gsVLo9VadTtjbjUTTHaVn1H7aFYoR",
  "key14": "4NSRPbVfGw7saCo9nPJzn86XqfNVAchiginKW2qWUpUMLuFkFpJCqcHFC6cotEFrrFTqHXBf9uMRyRBV8oJEUNmg",
  "key15": "DrNNyLnUwgaWe9JYNWZMFJhDhLn22Yiro5Z3UBzHvUDrYFFLTynyNJprY3nN8pDwWqgfshFbH9d9n6Yudaa2vMF",
  "key16": "3HowyYbBBk7zBqa5syuVfimtDvayDcMaMms9Lgc2AJ9eyQEZ282SEEd55Ucmsstw7qe7G4uRi5HVA5Qtkb1DiGKZ",
  "key17": "61jU8Ccd278ncpE2A8t9xa4KvncboV3L2Q5XyK1x1PRnubcuP3Y2BBEaH9kD3DhE6xWAFyjHPHEfxpSWy43kXj4u",
  "key18": "2YE5nmLVrETypxEzo56Zw1EcpkQbQmBvYDiREhu1ZjUGTEr9zE6Z56WtTCFZvQb6S9k9c32Bf832xNe9ktpEyAjN",
  "key19": "CD1ifizzSDzn8WLzCkSGtHD9RVTUw8VHxxLzeLBACwEtwwynDMcL5KvJMvSyRxg9JuJeNLsGHt3pivu38gWYB4H",
  "key20": "4xqMHz2Eiky8SDh7qjAsxSiSXf43ALNNiEjWXEk5NChuzWF64TiPkth6LHZd5zA5PjMBRis5fqzUAyn1ncJF4gVR",
  "key21": "5qThxkwoxnxLnPw94xkeAjA2gEQ3RFzyS6pcA4JFdR321avPzyKJ1vpr9Mjmt7SbBqcvPchzSJ59w1L4cx7WcWpA",
  "key22": "3XruC9qnn3cHpEzxfgbxDz8ttN36BUjFMXnubs7jNyAuj4YtsaezTsohG8iskfm7UjeS19uHdtZnz5hgSaa5Cp23",
  "key23": "5rRzb2MynT9twR2SLNPEikAKT7jRF4RWUZgKUD8f5PjfEiy4L8B4n4mfVAt84kx7iYKbkJMxf5DLXbyR6HEGXVaS",
  "key24": "2YnnNCkLukq15f1zJUqHp8meHc6AMDwUA71ncmrrZQZswomCg6bpxDe1X81dAjB1viN79KLQzuETUYQVXMdgS6nH",
  "key25": "4SiEBJ4KJ2Ngx2p1WgSppEtueQ2La2zh8JvnZCzdiL1bHjbi3SWd6LYiQyXntirrxeYY3DQeSqhpi98GyQ7yCCrh",
  "key26": "4paw3pWaxJJbreiFzGrdRpLUK7ytQYGAZpBrZRzzXZmDggsWU7xwJFUk3w7TuchSByvjQEjbSTnqbYegQpxHeVYQ",
  "key27": "1dVFUErMHJU9qtjwmsWewC6k6wMnyjpw9MiCbrjQ6d1kmaVg7VHW2hPkMsDt7SCtN82gMWmGy9TcVMYbX8jghS5",
  "key28": "pLmP2r5MfoPhCUyFqKYu6UMq4fKcJ5ioQEbj83aFjZaLnA1oJfaasSAM2J6jZKHsEPmG6Xu5X8kcRCPudtn3W6c",
  "key29": "2YmoqiPPj84gfVNUgsNniSrxqE69Rc7RfMvqT5XKAX2eYzkTZwiyLSQ5JqAd4duyoH3SXbinBMSTfgeCx1ApWuHw",
  "key30": "3RY4Kwz4GQ213TnbZr64o2EG2LF5GivJthdzq36QjXneJmoUnnJzqjoeT7VMLotPofo1jDQJwdvYav9zWzt8vexS",
  "key31": "4rCVp5eFq4HAZJMEpXDeGt77FAQDjtDnL2BAsR6KdrwcNnr76L1edwwb6CbGjAexBWeSczTfWd3sDv4ELE7TAHBc",
  "key32": "44cRaqSi2oHAwzjJfiRcyMWjgNgEeCcCutas4RFk75yQn9GcM9wcNZYwjGi1kvJ6cpNHGfJbSUtEXrHZGxKrhJiL",
  "key33": "S8RBBmy9GA2o2U3VkhgePkKtrYax3WzkHhJoStHaDc1wyPHNggteHygoG5yUumhWtAuyV7KphgEhZgZEawhKmzS",
  "key34": "1Yk66eKAu7qbUGx1xebwMk2o2GcT25xzNNcmp91D4JnxuZAkRhptAYAUcywPhMVyeH9xQJiqvZiTvcdsaCyhEvC",
  "key35": "54AsT7s9TgZeSpXqPvtHN8miS8WdwapRfB4x418uJagFTUXKCXHp3JAahWHPcimnjHHnNDrSoMnrJucixk7btAai",
  "key36": "2exzmcRMxXLLUQseD8jNQ9GK7sAQNi9GnKEBaAiATF2wNaFQf3L59xAHMyEK8FneYpuJPFnNQMnNZJJ75nKtuYxM",
  "key37": "255rHLNfP7vuUfDofQRs2TU8DGiK1xWtQN7gsx8Du2Sv3wZZhPpaHGWWugUXn6H3MAkAz6qScNLWtvPUaZErXz6S",
  "key38": "3HJACF63DdTe2rg5iKMs8NCpeQkSQHmCU6MpzmVbzYHKFytAqMehofPtTRnf2mm78TrdXYKCrJsskZzFy8E3sDo2",
  "key39": "4ZxW5chp88UaUfJbjDPHWJfqfKu9mvRafafQVE6fJUWc4V57LEnAqhGPn1u4bKvbtcNa1vYqb1frFbRzRQbAhjC3",
  "key40": "59byVWC2rjv6sTd3HvtoTv4NsWWVb7zBmBSXaW4qmHsoBgVubWjW1D1AstDcaEw8fJWyFz3L3jq9xr8teMtLFsFF",
  "key41": "2TQEdjkSc54W5qt4cMUYnkSpbbnLvYYyCczBt4wEGArvTJQxCRWpNV2nLAn3kzggVaUyXywASvWACJLXwSEPVA7h",
  "key42": "48ZktAwmCFWZnd5Sg638YfR4WVtd3NqX6xJ7wgxR9wvaYbViK4MjTzgzivqz9cXk4JFHfyT2iBgWeQUroU5k8Epx"
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
