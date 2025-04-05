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
    "4uZ28WU6GBv1SH3n5Rjd8HBQRkycRbMr7YmUeviVEs9Ptj8TCstDZFgCoBsbLNpBMvkppwKn9X6Ffi1CgFwcnx7Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XBQ7b637DhfTXiMaLywJRPFSagGwbUnvxxtCnvdoQfeQzG1D7EkX1PipnVdJjYRnV5qNgSu3bn6APcURVjyxoxC",
  "key1": "3YQb72L57L2vurjy2PVApsgNcjhCUfTJjm19WSQy53cczcF7qZBJTmPazgGDjXa2iErHMvf2p2zLDm768UA9Ca8H",
  "key2": "3SesRe1aR7B3tFWk7NbwYhQx16RaSq1x8TcvdgMk7NMtGB4ryAAY3tVFHpQH8Ykh1zucMakmBy3LF1fRLU5yAqCH",
  "key3": "4XeBkHQFZqQs9enT7HubGvsD51PskYyMaVruoAgcXC1123X9BQTCMwrg1eSgLpwf8XL8zV6uMX8Nf5J4e6x8yLHu",
  "key4": "2J5jB8xV3SRg1PpLoLNUVuvSdRDYByUJZrhqzU8Kt7MU2Pd5vCgkBmCD6frujEJnwigKTu55sRyiGy43KDTFzreq",
  "key5": "3vaq4r4bUPNRNXuxvoY6Xh2kKsFKzX16PWxXWhUomFfYKZVYuxUcB2bjDcACqHq7xmx53V1EC5bZZ2v1t9AaRR6w",
  "key6": "5UaGHBDzdS55d5JhxMPqsxjHR5zkJaC6t9EtEan1TEGVvLXUSQLmY4qSPSYMiNskMEPTkHEeNrjwdKcKnyAWbtTc",
  "key7": "3kAHsrBEYV73Y1b7o1rzPmcN29UXmLXz6TD33EcCMuiHAFZtwznzJMTXjvEGfViRkrGh4Aknq84vNStKE387EGZd",
  "key8": "gQ3pWfL15HLqzueNxzsjVuxG9fZ3KfSyTK4nuS8vdsXjAiNuGBy65jg5GNhrK22mU9K9bHsAqpsZexPfMEWSk5u",
  "key9": "Z8QqaMe3r7WFwtdeMwsbKNm5LfQoMtes5miKEFVft2YESddg59AtPwdvdqG2iEEsNnyQPiP7Nu5zrFYFYdfPJtW",
  "key10": "638jqbFKkLD5KY379hrF7FFvar28oJ9dpNKoGBLuyF1v1W8nmirRd6rksDByQGEv3XsxUGZuWWB2ZNYsxtGMhkbq",
  "key11": "5rbjJ776DGgXLUXJJ313udHqG3MVHVaFKkFgidH9mH3WGMfUHE9xJ2gy2VCEsiBh4JjvjmBPvGi6LDeTwyow6Afo",
  "key12": "3Xf4MjWDxCRuJYqgjgvZb2n1bz8u1TtQq5VY4cCDcd8KpHWGns276pD2jwrvCawpSy9k9EDf95F6AZMKfcFUTyqm",
  "key13": "5oEgyxR4qEct1mZ55538qyERq2YKSf9XNYy9NvyTTkafido1m9j95FJ7pekjaHFGHqJXPK8sjGvrzhftQR1ruWWh",
  "key14": "4hgHnJK1c5TQqE54mW5Jyz5cnjHLXGymy1AD2R8H1BtdaHhiq3Yb2wFkp5D2RaWNoPhSSnzE7L2nXH77S1Gn8hsm",
  "key15": "5FB5JaPvejKQr2pLmdhSny11ZW1sxggAU2cvo7XZBiAPrM2s1n6jaZFN1H17PWhUL8muLfBxvr4vPazuFidiLtFq",
  "key16": "2hETsvDVZZzbUjT2pLhf12HJ8DYZK9hdS2vcBp23X7CEdHri7pdqFcQ6JZrBy36fBYsD155FC98wy6TYjqu4eUkU",
  "key17": "2tnXDzM48FZjoX7hS7W8GtG24TDuegJJt9iGdEPF3Vk8TJi9oiUZtHTSh5Jw34pJETp4FMzN5fChiB1uHkqZeY9P",
  "key18": "3b63MfkKCuRfPC34ygGmXR38CF35DVCuwCvHEXUm7gqvUNUvT5WrojGUJFcJ5FKxWSQTZnTkB571ddvaVLAgT8tQ",
  "key19": "5BNXAWHe3JDcZ7wb2Y2SeTAxVR3D6zqhCnGZG1PK53i1gaMyXQE5eyvrxsqUfQGhPgt98RTSw5X5QjuH49SXRV8Z",
  "key20": "4BV9Lnc12PGCFsQ2D46kCtvMvFNfUGGv6dbbz6j3Yb8Kqx3d3P4KVz4zCSDVvRj2rhHifDpMRoq3wtKoy93rPH5f",
  "key21": "4wxTwqQSEqwzkxRJN7tBQpziTmZiyaG879ACHVL9rmfDAF47KfCr13z6tMeZr9PquSPAhybAAmFhDCHJSoeMVi6C",
  "key22": "HN6b3z9d2RkkKqbKiZuvxwdrDHj9pNXiUgvhnEzNryVs54gMT1cJ9sAs7ia3NkueJVmfxrfm3m1L5U4MngAZJ7k",
  "key23": "4YAw3YX2TsQ1kFngKHee1svq66ArcZQPLvdhnXzT3ax2JFsxL5RNxAagjVMz1UT4NQP7TzEqPc5ZdH4AGMrzFHNA",
  "key24": "wCZAe5JYLnPsKYmGqUyEVyJ32STkcWMpzaP9H3C1qnvszKM3dr5fN8uYLdfALAMV7WMWzx87hWGNMsfkf1dW6aH",
  "key25": "3vDXBDECsiKHFbwLRnMSncDJ2u67wmqp4NY3bPDkAU3M6wqicVPW7yJwvkgYKo2tWbBRaubDdMgz1Gbc66bUCNnd",
  "key26": "3ZJeKqLtQ4XkCQqXLyExweqMHtgLABGtev6fA8VJzKeGq7CfZcZvnFg27R4mAHk5MMind4RZfLVvwKJuCarcTaNb",
  "key27": "3d9EWaL3DipJszZ7ycqQ2Fw9U766BmPCmzUSjDMpVyLRTUVyy39oyVh34WdMeqhqUAVPdH9dwXRxLhskPd7NYEgM",
  "key28": "5HykBAXBPyCGWLzh67ii1cyguitY68pWcE1tAcdtDoAWYRwr3fcwPGz1L5qqPeqVqAC33uQsmhRAhQx3EjdnVyDW",
  "key29": "2pDEtWZUzavmwfnAtFMjPupk5QZNgFwMe9BxQo6VkfGv2sMBvvW4KUUZvDA5dd4Um52vdsCYPzbcGbG9BgVcq6Li",
  "key30": "3M98KVv649J4upDCdzqUQWp8ManzK8u6XVwqBFYVPtNjabbiPTzspswvSpDhrjTPNBpuQfLyf9eSABeYWAHhcH8n",
  "key31": "GvLcd3TN4nH7YkwNn4UGYgVeZ79D7zkko4u9bgvZ1Zwx4nd4vsWN8dwTQrzSTgBMzwzQdjhQtQHfrn8szk92VP3",
  "key32": "2qEyNtR15MSGpbEZGQJxCyk2qctCKC2q59uV5aoXS9vbj7Asq3XZdpzvgE1p4tnwpfgrKU9E3n73SwEGthSTJAg",
  "key33": "3WmNpBHrQWkG7ArJGnovq2tUNeSYHn9ZGa5Ko8AxyGiQUVzsHVjxAwQ7CDPw2sAoHt92sy9ZM4WVzXS5vZ8JqUrG",
  "key34": "4vRkzH7sAAqDtKApG4iBBNXUSGRMoSytmEuRFyFFDvZ9wCR5HAqP6f5WSRB67LdwLHxyzZAanZqRRsetod7y2RKs",
  "key35": "LBZzLGaJWNnKgSzwB36QbD2eHzM4oV1XYi7A8s4jMrn9BhKJ5FkpmPFaMzNWtQrwVcsisFm32t9vLpgZURbNgUw",
  "key36": "3cBsGtE69k2JVFiC1XXTR7ysGJ7vtvahy3xBNcKiJk37yH4wbUCYhRpJ2Dfh3mEpyVWZRMZiTSdMgA3wLwez9kcM",
  "key37": "4xu87XHDT3hiYPwaV5axm2qF8Qrm5edfyyyUywPBufC3vdrCEsQgKypgtvW8Zd6FM4MDsT1qZNbVRij32mNMveG6"
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
