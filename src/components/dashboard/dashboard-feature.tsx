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
    "35z8L9g87WVEQPFHtdKugMaaQyhJiDiKPCvg32EyumHhEUZY3sLBRn8YAHyQHBSszTQRyuD7R97WkEk2s9QKNAwx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Pwc6BMHYWzMtZ2P1VMn8fQUPursv1mB86YvwxwFd9gQned4qmuMp55UKToCgNAapsbJVJMVkgsxxVZo3n5FFVau",
  "key1": "5D2QKjThSqE9XnikEwmxRQB4Xb71nxuWfHexyuGpdADUH7b2ghXCZXUgXajkfEbL3D8tyFKyhfaieyVhQN6Nq3vi",
  "key2": "2QNKdN2sVBW6wcB1rNVM7uA1D2dbN7LTz7ssYiFXdKQk8oZ263E5iT82bFE7hz5gSKMPc91XzxFHnSVeHS4rYb4G",
  "key3": "oSsNMEVgDznhMkAiqGzBTByh3WbetWx6GaebwD9y7aNynFpnbo6ZTN4MdMu197xsojapxfjaCMF5ceVrboeFbXJ",
  "key4": "2oDmaH7BzGWvbqwpTmfp7rvzCUuU5911ZmAedevqVswqwHhLz42DpNqMYLQL1PDbYBy5ogdMF5in4Kh3fcXpmJwd",
  "key5": "4mVthVpNvKLHJ2pJUy8hbNugBRLgjH4Y8Sb55U4LGkkd7gqNEG1HiceL1tjUVrPEJD1uwtqTQoi7CdqNyPoNzeZM",
  "key6": "34APnxJf6Fuxdu38XwEYsY2yPBdCtp1dJPVmMh5x3h1Djtj4bz1y4K15ASArXx7TGScP8g6hxitLzJCfE52WKifm",
  "key7": "5ZqxPjFL6MQd6xCqdApbrfBn7tB8K2xmq1Lr4YcPYFUuYiKcQxE58fxwWvEqfzwzhPtAhSVUpJ7uWq24uN4Kh3ok",
  "key8": "3MexdqQLBndDM5Ae6yySqML4pmwuDeKQnxo2rfqXYCZ6n47V89pGD3EzyqPerK6QpejXk93Uu6qkA9JAWMjV9rRQ",
  "key9": "5kYVGUc88kPDpmiKnpxH4XjHZ1b2qUaj6ZZZVTuFboiMv2uaDA3sgLppUqFAfLj7thCHSvAztFQBtuBj6udfwJFY",
  "key10": "CrJCn3npSHhDK6SC9fHWvp2WhQUboByeNjKQSTAPSmYweBUaDKnr3EQ3tdfK8fQMzL6dvGGn2yf1hxh1N1UdSP7",
  "key11": "2pmWgVphqgaq8D69A3qN3M66HKzR3LjapyhYxaWQrotYpmaYxYs1DME7Vusw3SLnZ7c28LQ8DR8VxyRsXt6hABVi",
  "key12": "3JtgpHKPvfXwpcfaDnUjgN7HVdHRD28nWXqt2g8bZWwjFqrfqcNDLrA59wcQfh3ndNCRcXctDZWSoq4xFbHtodYR",
  "key13": "3tfCwReXkkgrXtGjiGpqgoRsVo1sVn4bcfVMEx6Svmu9LjRNrpVRatbDmtGfweoGpGuuJFPScxpa1Amf36ticamG",
  "key14": "5GNFjx31o4CAdtNzsHH5wpazryNdfWfUffA2BjtCxXBhTskxNU58xZsuJR8i4vthU7QAumLW696rTHCP9MJmJK1z",
  "key15": "421AowFuvTQLCGDMomWwkdYrnZ9pQCMnFxiPcuRHfqWDjm5gXCNim53igsiFc99QnDHs8ELqmPWKbutC48AAUdAf",
  "key16": "4aZcUcp2A7276gWo1ze6kvhicDjDzL6kRTVc3WMepDrtnGEaTjUZw7MQkwsaaPb4EzgRQDuntrkQjRrF5NvEJHAt",
  "key17": "2WFmvTDTCWz218JTvbZGAfototGrwse1W2EM9EeRETqcF3ZWTAoDfP6fneD6sK566d2C4Djg6CDnsEVRAqCNERAd",
  "key18": "4nh2npkuAnaDm6TucedSSaZcnGNHnJe2tgRiFPEEAVT77fYP7F1by9rAqWmW7iiZh5wqd7QR7TPgVX37HG4vMo2n",
  "key19": "5Vrf9LXDaisjRVjm5D3546w6qQDvNqeo5CyHA42EGjg66RoeqCz6PrmYkJQjzvQxRs32QHAaG2wku5WdFEUwohK6",
  "key20": "3pEsCgoYmghxw4YjhkmVWAVHQeovQ23yNHNcpSy9Mro2PVVJUQwMevqSJ4C7ref4uPmM37UtRBaJb6Yyag5wQmJW",
  "key21": "5W3UEmfGGqvicFtjuaM6avAPrMnBHCfqQDSp52CpFrDZbsxsfqQBqtmfzyy5bQ7KdwmqdnPQbuPPDKjYPcmaGzeU",
  "key22": "4GyVLmygWQYJVKStSyizW73FykHMn5qoRmtwNuQXBCZnyNDjoVQTgZbM9TS1ubMXinrgzQm1e6MpcEpakRUnN3qi",
  "key23": "p9VwRhPdMjcGBmZXroJaoLRefpcrnDWbsLkXHQYRaA5VyRuc2RbxwGwDqTLz2Phi6XMvqGbLdmZNwEmZRy5at5Z",
  "key24": "4JHPAu5GvYuUFM5oYbuDVKKLnrgMeSFKxuDad8KPsbNyCZVhq6qEuL6sp57iXVQTffGhtj9vLHkTGCqcwgiUL5vL",
  "key25": "4tYy44q13GRu4wuf8NfvNFuFRwyY1d6AWRWqFyLRBnRaqMmVtShaw9L2HVvaJKDFDEf1BZHpSvMuC6yxWkKUvCR3",
  "key26": "PU9utzcUUveTA5LtmeX7937G37c9cAqnG8gN9gq48vRD3DnspkLzexZd9e5nySSgNGANVW9ijuScruEznLht5TA",
  "key27": "5o9Zm2RpHFrqoyrfPxv3wwjNJgvUCfrMChFxFJ8GHWQNkD3MK7N6UHvSex96KQUYTUsFnLPDGoKNt5XKnjERVBGY",
  "key28": "5ngPRLDExP44yx5cixqrjKcEaX5TyY52FGLam57EQHUcwxVkaK4wybgEoVD9Dx7CwePht76ixtfmozkoEm4WSgCq",
  "key29": "3gdpSNBPL4M2zH22HsYXC44BXE8i1hLL4mFBRPsvYLHCKqsYvrwgSANhNFqx9s4vEhZg4taUT2R3gdqtUVTrz8uH",
  "key30": "JB3wPUbLsR6kmHwQJPx5XDVNSZczDS4g867Jij88DdXhN4pvaifM9CApAMCpfhurmfWTdTt4DG6iLtmqN1xFPGP",
  "key31": "3x5KQPsUtrJBWcx2GDcUxYtSa2M1ftWDcZ91g6dbYscdDYmUWeHzjfee8XZQfFoT4yEARkTBAy7gFfPQhSWfE9K2",
  "key32": "3b1FZJyDWFXB2qLvAzgf3oaY9x5pcPuRMm1abceUWuRCzA6AsXy7AXhkF1UfVdaTMBhBGZ89azAPQjUXMGApBQZd",
  "key33": "5qc48sPuoZUDSu91mpZ8vc58DKdgTB71JHW2pdozqJWuc7kC7Q4SgoEtVYUzr7jnET52ruYnfJrMcg5vM1K1dRpU",
  "key34": "4uS21Ctu5Khu4eKVGy2jRuap9mZ38s7HgRVZLxpbENaSXApvauaFd4xGxT3vMiyGHSeSDV3m8vZ41Loe8tL6HHgk",
  "key35": "4Y86QvwtZmNNwS3Gc9CgQWSRqJyoEdAPwfKiZXaUsRcvy5ivSRHR6T8Hz6pmmUhp8wKAKxTqwGiiY9EAQ3gTDZ3H",
  "key36": "3yFDCrccdpsCvw5AeqzsPPEeQmTpY2CM8RCiUgn87zUL8hv8ktzZyxKTftoSBrqaUWJRfxmU5iEnFUfL2QfThaLa"
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
