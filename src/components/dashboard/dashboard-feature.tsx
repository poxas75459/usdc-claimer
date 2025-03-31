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
    "uCWvVmxraUQWBERT5pAugdYrFvP5FvcfbjsbTi3gHPiJPhfgGmbm8rLoweHmtaCBm1LcyJH4DB21DfpXTQ5e3fx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mzg2eZLNe2ro5rGBSpe3NDssRws6RBmwu9Bzyu7UZQBWeYfuaCUj5YQg5WrNSGEBnc3nFmF13ktVRgVT2fLqjWU",
  "key1": "5kB6WzNXpvn7eFhX6nJ65iLhQuwPZ368ADg5rnDsRjP19X9QqGF5sa7LFt9pBdMkDtoepBp6Chy6q8A9r8TfN9Tf",
  "key2": "4YgMHMU9rSMVJcxWBk7k68RYnhXz5g4T8qKH4uBbVVWr7tyy2AdzKoeKTeig72rAAtHqPwpWmrYK67b31nAcwELk",
  "key3": "4kxUf6AimMixWCVUtqVPuKpkBC6c9twHFJ3RTydKucqBigoj4BK98zG6hPRJeKnrZ1Ehb1krvtJFPwrVbMEjb2WD",
  "key4": "5ES2qzyTHyJhas675QxvtuQbwW1BxJrm98c8mziXc35mF8tGXLsoQVUfyzR7nXLTFqBNJPfNLoqLTTM1SUGThum",
  "key5": "4phqxGC3m744GWsLc6uvQPwey5MMenSskLZvhNLu4dwwei7WAK2tReTV1keAhoeEUhJgGz6ABAsX79pKidJ5L5xE",
  "key6": "2yXP64S5bfK4jHxCwMUC91DNwSCMd6WArNcCgxBYR1ckK9nhsiKG23buE8yeXLA9xKyyrKbHAY7TFXfSEW94UjLE",
  "key7": "4AwCfpCwyDLcFH7YC319TsxcFH9ymzGNXe75m8qeHx7Pn76ayS2JFBYcrWHT4rHuAFu4CHoHdUeuSKErEefs5DkH",
  "key8": "BfXfoUjn3QaDvK5fTH8RS4jDEqKJbVtkmWjwuoKsAJZa2vvfJVJh68tj3hiahxZ4p2ypLR2BRiRfiS7sPf9258y",
  "key9": "vtgHmKxe8qM8Vu5YNAa4YrYiBNBy6Zw4T4Sc4XPQVJ9W8ytt5tmkMmJRcyUaForWcsMQspPKrUm4cs3JGgWWecc",
  "key10": "2jRphuAx5LUMvfVePxW6CRtXEwbqnYX2MR4xiQmdafH9eNr7JVjqmKJ1ztZTWcsxL8dpm6ojbh1f9nXsVBz2BbLf",
  "key11": "4EQTRE1HbGQNT4JDZzkkPsxd1V1RSZDS7K7kFXfFFGjD1Rku1B66jWpMNLm7dSHmnLFwoqiVUUL2iBSLhP6YB3ik",
  "key12": "2BY1MLfLpWoaCxyrrCXn33t9gxGkybH9FcpdDYjm7v8Vuu3wE5VudkucMSqp6W4kZ5AAM3ovdU6mSE9D5v665F65",
  "key13": "54sFHsFbBojQxupY71M8BRmFBowVsywmGFemXc1VbPKgMQwZJmsVya7oPZY1bCnQxhffET8hXxnAXa3UVgDK8o5E",
  "key14": "3YBpqfKB1bU5dDErpki19wbhKhnnUFFu9fQvidinu2MQ6Nwrngn6VyJgevynhwjN79PCe2ejqfLcKhLc2pZER9oR",
  "key15": "5gCvz2vTwYdCX5g8AbT7wVAZwojo8g7Tv2RjTG72h9PbCGyXRW8pfmhVddecC7VCXYkbRFPaamWqDZBwfDkB5Xui",
  "key16": "4NXuZEprEAVaPjRvFVuAhJZ21816CHvmYptmzHcmryYvoqHhA2wQjKiYM73hKK4QXntgE5obFq9cCJT9Y2uHwmBu",
  "key17": "5nDiueY5oz1VggWTQaroLssP3TC5hsReqdqmCuRsydpYrenztAMckYysFaXprXnMVRhqEgSC6P8swnwpTLYeJSA7",
  "key18": "5KLW4s8p1p5jadCTMQCBhdVe7vw3MTXvHAZ3qEVLNfMYVgUweRujXoz6HF47D7EnhKSP7vdC62RrDqxgJDzVTXaK",
  "key19": "4XPpvmLaWczpKsNMKTbwkbXJLsAMJ8vuHrmiZNZ5QVobE9jrAhToZxKGtB4xuKXv726pVN6BMYSjYmgjqvLutoT7",
  "key20": "5RVDczLYNhgqjyQYr1p2o74TftE7y6maBXEjedTp9WYLbCQPNhMJ52nmYZC2JerZT6JchemFvSQLdofQovV7hW74",
  "key21": "3L9nFEYtJ1Ui6MNPT15oreuut1YczMjwayBc517PrcBA4kJeGoczSgkg48dihfcoNXwFpacKguiWTJ9SKCzZNJUj",
  "key22": "41VVbEfWPsauGBhmMQghd9hLLE6UkKmdFkgUi9tcwY1n3n6KUESNN7V6X6JTAPnzRLigMAt1YKD2i7nPNPg6Y3om",
  "key23": "3sWf9pX8qvrrVQ76uMZSstqvXgHFdCiC1N3HwTbXinUgr7AoorvVFkC2CBqsC8G7KutQAARNypRnz5QSjuKc7iRh",
  "key24": "4QpqUCxeVnF7nD4N8BLXhPnkYYux34x16Yno3E9kzDYoFtrNkGzdHAfo5s42GxzH6o8Dfp9iDRaq3EdpiMR1c1U9",
  "key25": "4t4ai9QGxqgVq9s6iJFqFSZkHswWTS2DgEpuv2idnNNuATVeqwdhCuzyJoHV4hqKrLUk4KnVHmv2F9dRHoUFB6zn",
  "key26": "29c6FnW6Fan8wEwg7pusfPSCgjSpKDiQtPCtERQRRsXYJdYoNGWuww61JNFHXy474dRxeSdTytVaoa9XMhMiRDLT",
  "key27": "5TbMixyywMR169ZZfxtmnfcF4AeT4YqNuYSRT6EZzW8tnqJ2yehuVciWoFFVghwgmrzSzEqKpj3jhxDEbo8pdgS9",
  "key28": "4pK9dCoG8M5a9t9K4Y3FFqXfG6kF58hyqc38WmJWpRPSb7ot5VPRRUJ7EYWJXHu9jZrrastjQ9JYo8nKNrN4Crba",
  "key29": "Bte8e5e85Vtqk5KZMjzjWjXzdbDJ7x96cSKB8x6R6CM6nSstvbwgURxix1oG4J25xb8k9x93tN5z6fz6eG1eQTa",
  "key30": "2TYaDN8e4Gt2Rr3Vj9m9RbWNZucnenX9ppaDDDiQVSHHuRuUvGJ2fygCpsSLFN2B3Fp57ixhpgSvGgccr9CK9fCg",
  "key31": "47feUGXcYMSQioMQeH7Y3PXXkFnhLB4mATaCMxZVKrpGX9D2ibA39MVQ9MYPDUweVmF2DMCaACm7ZDYZuvoLxpFw",
  "key32": "7WozJ75P1PNPhcBpqY7fjUFxTdrrapZW8mJdLYcgMyGQ7RzqUXJPdiSWbzAFz7a2mj7zJRJkRN6H6ZgrLziRs9D",
  "key33": "3KdXE9kW9s8KRAdMGNNEL6NeRrE5eK7kGrYZ2cVkYK6nMKttkKHRSayYpWZmEhxE5xZG2PuK4K7EJubozSneADbD",
  "key34": "2iMZRUcWuaQqA7b9hvGTK8aUzrGFLagehUMLX7QeXMuMoDZY4WEVt4grXQTTbU3XbPKUEuFD24MLUhp32EZPn5hg",
  "key35": "2gF8PbtwkPtW5jhim7mcnqcHGPuQpeRvzdUJaMTeWMsW1Tfzs2pCnVx5THHA1n1woY3GvrJjTExH6TsbvAW24Xq1",
  "key36": "5XAhHmbTXgevn6yojaJ5Y1RS9HacAcAqHMRs3e2jaDbcoSp6Fnv9BDti3LNvW6aiTyEsqPdpzM3VEqqZCYTbTMdQ",
  "key37": "2AMWEAtLMyX4cY4xYdWKxT6umX4PbGD69ZMsNFmwo9AQK6WnUCse94bJzh9SEiiXUeJTnUf91GSAe7Qka3oNx9MV",
  "key38": "5qzFQHTWaDGheeLHMEufJeP58sRMLgm84buYAnPvdEYjnrgQ2kxMmLU28YbKEFfNSg6Ho2CYZWnubaeyvsC1cYgL",
  "key39": "2XBqvbT7kH58AUt7GZgV7fCJi6mv9SXR7zwQ6fRmqRpwfinB7zvG231ihcPnKCtjmtEhd6gXSBGUvz5pxoH3oYBx",
  "key40": "27U5WmmgDrwsHjywGGZoDqfE24E3fmj5R6771RunWQ6DoTN8LxmBDsDLm5xGkHYZgHcpQnYZRW6daqnMCAYnbLu6",
  "key41": "3VvGRA9w9genrZf9ZSxDdS7vvu87hKosdNvHxerUvLs4oCvVMQbhwvm1uce5TtAt5myKQyBzcknTPQCfeiUZGFC3",
  "key42": "3uwqHJFFj1Ljup6qd3E3Jwy3aKFGwTSppTK162bTCGTjSJqZk6crk7CMXt9d8ePTxpJQ8Xf3ZL4kC84SiSmicMGV",
  "key43": "VceMonmVGjLGqWQrUc85p5YvLFDCocX9RfvvDkdVbbVAKNMDByhaCe3mvhTopxv6WUmirMG12naPWKLto9dpxU8",
  "key44": "qPEjBBR6LbCFG5GNCYrDc8qMTAg9g4bUbUkVQcTStRR4qdVST9sRuU6s8qw5nBkp7prc9YFGCmkmFRz3vZS91w9",
  "key45": "3oNLzJJ81u1EgdiXuKjkdAADBvAWuWBLxRsgNc275wso3MvU2dsNN1LqKVWf9wyVMbxDDXhDe7j4nMnyAoSD6uP2",
  "key46": "4xam1zPoMM46B1MatsCqahVNMoT6QFDR9G4smEgA5bwsCWaB9TmYdoRamp8BJkm9G6amViKujpdb7kJZbVXbKtQR",
  "key47": "5PB3Pj3nELRBcYWqEWxbDrYk6VP486FZAy8VYpKfWmCcRTvffBjxYu7Jj5aAwBrXgfHkVYLBXdMfsG4o1BUngJCd",
  "key48": "4ju6Q91tE7mqNFxjRxC2C1D38vApFu3NXmB6y8nENFFp6Sb3u78Jpy26QjWj1hd1uPzoVTWjTyCS3jZh3mANbo8",
  "key49": "3AuU1Mce8TRNGFttaGYpQqXCV2nkkask6ATRy9qBSAaNxdmSfdPDadfx5o74CUgvYd3GEqZG2upEg8srKREU9Pbv"
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
