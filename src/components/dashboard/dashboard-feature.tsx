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
    "4D3rSK976q2p9ByFsfPwt7zRdWRbBscw78UKHgh8g5sji2KK2pDwoCfpYXpq4RqPnixWX33opSrBE6NvNjBpdxKi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MeEEuMJQkBSvgbk8uhTzxgVC4w9R38WArwabpwqQQY8o4vbXwPfoMPiQQpohrHUCVt3FcVQcnxBLpmFQTZExNzz",
  "key1": "4zh7UTxtiwdPZ1a3zatTgT2Sg1PyvqsR4bAM1xS2b5giscmjP6UHinHr1HKxCxkaGNqy2wXW3w7Khsigbxje1yEq",
  "key2": "2TVvGFWBxFRZJn8cgSTtvmrAdt4SaaqLEBaVs94VK5o92m4vEQgUqeEneC2op4Xx1N2zQ6kWURXZaksUuLNpYtSF",
  "key3": "39YsJppSZJuGGV9rdm3PLKXBmToaoovs7cN8wTR6W9yDaL5pzRJYxqTKAKuqDqQQEcQrvudQ8DAQZBTG4wHPLBTd",
  "key4": "4npEcWkQtTGw4Vf4bzd28JdbWpBjdZopMfmsE29pqiXm413uSfSuBy8sqgQ92kwvy6qJhbJBTLSSH9avEQySBijq",
  "key5": "36Qqs4Tih5a3qfy7ZLmqpnHDGKSneDtopVPyz5AWrZsvFM1gmRS19L9qtzSqASjKZVj2BKgafwGZ3hxm6EHxbMLb",
  "key6": "WR6bp4H1S2TCo8u5LH8Yp5r7d8jL1ZSqwRdikMTYnb3sUt5YGEqj8UejUi26TyQSLGfHZwAXrFqTxxzyddKp5wS",
  "key7": "4sS8R54Ri9VoHKTUdwtosQp9jMM5pcczUcm6zPo245CJMDLythgCgmAagmTYT2xirKdHFa5eyG5pNWzZy2fd9QWz",
  "key8": "5wD3ChsCoRDG5YVwZMjpZ1kzhmheCHm9FWohZ811nuEc2e52EWvwujcoRLqrryeBY56nvS71Qk8SoJ2Ej4dTEiwY",
  "key9": "5gFQCFRCDZNZ5wL2gcmF2Dw99FunvzxNKAx7Ha9Qmna84VeE4iPredaojogjJfq7oUD5Sw9zrAxyM7VngjS6dEQp",
  "key10": "4jUdBUfzXozAHtiUzZeKCiECCaBNp89jVKwe4c61dzS4gFtN7ps1EHzb12ZxDUTRoVDxcXWaHCSmAVWmkNRZH5YU",
  "key11": "r6N5sJ2Zc8PnFrYNhwaQaWfKjhDY4VfN9bjnk44TCty2UEyEN8nL7mWXi8nKU4ou1P5vgwFUnkqK4eyFXCVfqpp",
  "key12": "5PdxavsXw6fN7wCLoia2G2uyimxraPPdJP8XP8WY2168zoCtW45gLkoYveGZdXwhncMnrkXXdX2htzXpb91R1JB3",
  "key13": "58zDu2U6qBzUNkYjoe7XSwLoSRzcqMxnKwjJGATF41WnY3wmmqWiT8bxABNYeHWvnU8yHpLPskhEmykuisD18ZCq",
  "key14": "3qSSKx3DtMyK4uzz24tA2fNxrE2oHMEB9Q8zRyc6krwFV4GrmJQqSWWvC8cKhBCMt8jKqxoTgX9H247waDX3gJQX",
  "key15": "YGgndLrPo3HYkanXi8hWoeoTDVaM7LXyy6cDxrJhB9Lj7Sxk2SXPEQoWueNJ3aa8BfjevhtWFRaLQdyxJXpecGn",
  "key16": "VGWhuTVc8PB6JuaM3J1tG3fxqVWjydxvGZXCkCTPm5JSKs7juM375CXC8NupnCtVa3tm76Hwp5Fs4DLW2uNp7cs",
  "key17": "2NMLPJHyipk7YGYMFQuCwTpW4VuKXuinevgmMas7exURyt9iBB7FESS3ELRFNNSomPPxurQUNLUdroANbGB3F3eZ",
  "key18": "2ZPGPuhaKnyKwEo3F9juEKVvFLL54GAbVH7NphmM2Co8DWAmvywvnDtMceGPUvNuBFHCGXBQqkG9iABH28f6Rf8V",
  "key19": "icViVcntFHgzGyVBVWrhRRGh7vPVFiVMw3ALL2TmgCPcNfuxbDfz8zRPnu9phAPKdqzJ2DMEARuUgRTckrq9DZ2",
  "key20": "5iu6BTM2WgnCnssAHV4JRAriRtUhF6eLLsTcpJT45YLtvsQpseYsG1GKRDAYYCX3Qfp8ta4oaUav4wVmgTjk2bWb",
  "key21": "z4rShwzfEinaXjHnf8MGUymYHtC2VFzDsJj3L7CXRooSvJ7RRtQ8AZeMRYJZKvWDbjKMPfVioAotPaA7Wt8LUFn",
  "key22": "29DnmfDCcZf7rbEGoyZcepi3wzJFuQtGnshEJLk5TJkqW45eJzNJYwqhnwMPWfkWwYyqYzjrAAtePqzxW5UNNxXR",
  "key23": "4EhKMfVpfVEqVQ9g7twkvG2Z7YrwvaNVEohRjhTnUQxhFFoJ5r37qbf63hSJk2wHd8PWzuSwHX13AnA4qcZU3VRQ",
  "key24": "4vosvkYdqrWxNXFS7djYeu79NZung9wKi7fuAF151JunohKw9zzeFfJ3aR9HyVFNV3MM6wJGantKSKAcekYYxViY",
  "key25": "udbAfGy6qDPuNaJonbCzg8F23BU5q9GRG8VN7C8uruLY6mKPmTBRVqu4nGQnGCxnQR9tUNkmscnK7S72LFzu8dW",
  "key26": "3GNHJJPoSNZD3TQqp9JjxheShpeW5Am9cbBmpXhqtVVz8nGNH1gRhfmXDXd2gEC1CtXqMoTVf7k3VmCvXCReeYyd",
  "key27": "m8e5TxwJiGVrXhcsx4Y52i1CGXw5N3gnJFuFqpdZhxru662pXznfTzX2LUcHqvszrG3ixtWAWKdhhxbMoEH3DDw",
  "key28": "sgY75fSFWdwD38SQU3KvzKqC5UgYr3niarydeSre7MN4SjWyD246TVPkzsAtM75zvgXHLwA1oLJSavKvHmEdBNn",
  "key29": "5NNUtTanRarZQkdN7ka69jKV8cqsXsCFxPuF2zf1rqm1Jd9KNWs6Yc6uXFT4FpHunDWi3SVJDsiKnY76MSKBWPK",
  "key30": "2ZtXVDxhw6RMXVGK3QBskyuQRNiknPmqeXDoiNcGbhDwQZp9bGebKHhu4D9MagwXUAeQNVyj48Q4PzAXRTfubvvJ",
  "key31": "2aGSjWxAhHedziLFnXoobydWfJrujcgxrzAu5NfgKKqgyvYr1c2jpDtpGEiDfRg1Wjrx7R8Q6u1FYn3bCF6G5H3X",
  "key32": "2G8FuE9PH4GZkEKCrbdHCPJFGGt3Q9WK85bvbxCefFU3xR5xxmpnWTp3xqWmfpvHANBTc1j3n7G1RJvLnELEPMyA",
  "key33": "5f2g25eoFNTz3SJn9sg37Qvw6j6jGrHrPGidw5tguSXHrAoi5NybdQLTu1FajkCvjJxBJQfT9kUkr3v9etN7ZnNk",
  "key34": "2pA9eoZCFnY2HFN4TZfva43bjU7Yh5kLU827dkBhPY5FAztw27bdLXoYU1vD2iMueNRSe8e4WQrbu1cAsjSzEXti"
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
