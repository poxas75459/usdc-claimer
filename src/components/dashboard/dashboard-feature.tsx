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
    "62ZaV1EgPfqMBHqFrz2YAUhvWBTj5PiX9H1huZKASqPZNC56LPEa8HvwpUETDbDshCEMJMj5Aggb7kA8JYjDELUd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QhJRnMPuTZxeqFjCtZSCf8wKpDZKzgUtdTf2yddG83egeBw3zV1vQi78BA5icuRBTntyXck8u3WUbKT1k6z47G1",
  "key1": "4fW68LpD6J4jMgXJy3Wx1p7eK3fU33h5BsvNdQqcCRxCvDeYP6ig2kJ3Vnay2Lea9w2U33strGYS3jZR6G27UPLv",
  "key2": "64etct4qyDckkSARTamvTESGh4VtEWLSLMxMqN2SXUiWfWSHQzu6Kbbyc4h9U8memYrop4SKpiAmWafM9q2cNA1S",
  "key3": "4VoDvTboiAuDTD2NWezeSuHo7AbdGV6PsjrfCJWtJ4fSA8TzCh9K85FXqgHvYnp3pjfLkovkWg1BifZEDAaH6RQJ",
  "key4": "5JMAEPiQqfDstFyT8U2SUuwozf2R7mdX6bWWsHqN2Q1JNXSfRqYzKEMxEUZyjsrKJyHZan3XkywM89YiWiSVjDjT",
  "key5": "5Y1T3vJdNKt9mguEYYK9HA3owx97hZZkM94LsaoUETQGsByQpyszu6nmbgX5V92o8z9o4Csi9Jcabh8G5Jf6U8Ui",
  "key6": "Rvbexjf5v5HNKjjknSCZMVgGRzpyzcbeRPgdSvvovGNXdnC3DdCFCykMB1MrTCrNM5jk68eXxNgLrLQ8YC3UQgP",
  "key7": "2sSwuxtPNx3SvxUSZ8KGmi8ZSYdKH5kGS1HbGt2DUZKgaJssCeaHUKtqhzVSKy3KqzfsrceLqhub53p2Padqs9i6",
  "key8": "3CtL7Zfo3PKKUrYUUosoGUjLUVXhtmBUPgkqAKRwwZZHvqYAgGCs4q22c4cCNDfnMCSYoCndB8MGm4NtomvoyDUt",
  "key9": "2JTgbK47HFbpUzkhS3b6YXG7FDVvi4eWg4GoHs6sUv5vMAMEkvTPfahYFb7AA74226CBv4S68a3CNufHuooWBSze",
  "key10": "5ittmig192YWbU2hyVE86znNyeYp3szf5sKYca5cfvkBdi3XeysyqDwvWVaBcD5MeDVi5ANPAe3evmq4UCBpucQc",
  "key11": "GiWQGBcYcCCVnZaXTPDK9Tc53T3xrAYbMQSmzpLJphe12jHYoCzZP3Pz5dYtpMiU8F1s2XYiidWKMUJA9sesXBG",
  "key12": "3Y6m36uG3i1rH2hNTG4fe1WDtnFpnEW6c3oPNa4TdLGdM8rGusD7s7xnDxMFy25cu9h1podMLVhRbpns1wAfSZ4B",
  "key13": "3RYZM6YDbXjSXxCst3ZYPRXd8zX77MwAmG1P2w1fYs3RtELQ4MGQc9uy8s3kd5y2bozRJUJmutjV6iWQuk7cfzC9",
  "key14": "4vCDvS3T41Z4GBeheVX1N1o99WseT6gSAV8xukwX6on6Tq4N7zyzoGiqyvZ9AXaRTN6gey7X3SaFoDxLSBnXQbjG",
  "key15": "4NS8KfmxDoQ2aR1BqAbwrE6Y9aMTFNQjDfY2a74fkPkeWKnpWLrsSjAUPo2WE1T5vhqXSSBHWhxwsX9dtkUGuick",
  "key16": "3p2hc2TGUrFbjVD6M8YA8g48kyz9CcnuizAVxmNa7QMML65iFDxrRQeyhrDcdeFGfYqnqv1p8WpXu9hAnSyrVN3B",
  "key17": "3KY6NrKQxu73K1bVVDZJWLg6HeLHzSJ4yY6GQZcPsiDv2LjJi25AhvNgBzFcpT23t3tcjDLP77VfMDQMmdi3qxid",
  "key18": "EyqHYydfniJUQ9m55rPEEgq4scK6UtMSy6PpifvraXehk2cTQ8wuBqv2Pm6kme1HpSSua8s59eE8eaYbCPM3ESf",
  "key19": "TGzAxaMVVJU2CwLh6hAYU2Fx83rxPLa2WakyfzQgbJgKowB3X1gvZGCnE6VU15uMeDjPhEmjvUzBncrmRxhHVgQ",
  "key20": "2Hh42SNaBGMMkUFuYg3iJozwQz54niQzqxxbXS2tYmGCXFyAiKLnWD2LhWQk2JpbS4owTQWVpNBPCPBLH1KiSnoW",
  "key21": "hxWm11oJB76L4AB2VSrNyJR5Jeok4MYQXBcva6RWgMk4KB5WBCzp9p6dfepHtJ6d53j9gqmEJzHd5fS1YZSmVCA",
  "key22": "4PEVFzk1udHrMEcyn2nSemBvbQjGWGCsrkZ3iusm5DSeDzgp352hkAaQHAZA6dUhbjDwKvV5kiyi3kvWzSsRr74p",
  "key23": "36QL4Uk12NpzQRDRnEbosLTurzUQQLZgchicbYjuS7kza1mZQkuWt3jmTWtjHSWxP6v1wKeSRzYxzUH8WWfTdFT2",
  "key24": "2CG6VeV9ANfqakDUMBY6MA8nLWthXg46zLbz9dtbaXzLSoUuQaY63Ttebc3h1TQkMux34NLQu1PXN9XgHzM5i9tp",
  "key25": "4sXDj9Fjeh9fNAyaLYFStAmjQhCoR9CdiS1JK2fYRP3BjD39CFrkHxV7y1Pc4YQXZDULy3x7c173mqrWhZ4v5wG2",
  "key26": "4rTRknALGdYWDhogdBWsosxiEAB9Csd7JmJKQ1sUquvRxPgfku736TUzsYtExZuxGk26iAv1whmbSgRx7gQpuyEQ",
  "key27": "5tVs7ySUkhbDFMYGd5UBRoLooFaRhHP4jYenRJDvupzj1pkRWRPJSVbH1HnMF1GWoHsGZcaYckA4n3sfKPu8zReu",
  "key28": "5ujf9dLe5VAaxEqg9A1tq1fGphLcrc2HAw5YnRUuPnA9v1qbKury8J1nFvLpuLEnBc8NnrRL8jpt3cuDpmnMv9Bf",
  "key29": "4Vk1VEMCGs23DQHUBuYM6thK8ge8vH7s15EfKhFoABjZYeUduH7qmBHVcpdM7wpxJSuxLrH8Cs5ddzhgnrnCY6cN",
  "key30": "2Ce5KJfomBCnxnP22Tz9Pmqy91TspLXLbhR6fpjXDszQ1RJjT3f3NBnXzJ7gKYC3wdoW9mbN4Asg6ShxKqhoCFR6",
  "key31": "4VuHMRPirwoMg5TLCQkkzTTJwoJPCkhhcZhyCac2Gu5StCFsZoEttoxGzpgm68qe2r9z988jesE4rcpREQzsaBDS",
  "key32": "4GCn2mxxPgfDxpTgjLHReWrV9kBuaGofNA2jhDx2z2aQiYs9wfbbjuKRCgQr92bjSKs5o7Z1Mn62zgqYJeaYgd7E",
  "key33": "3rKhv7Pau6pX4qYZFDihAJRD573zoYE44efUprD4JmsaiaYG28xVxCMPpqgVfs35tEafE1PjA7XPUjw2C8NT1PMB",
  "key34": "264TAGajFV2zm8FjXs47mpQG6MWS4LxMiG7nYywtgV9cf8D4oNJC6rp4zZPWyrHXxospe9A6ytzZ8VzMdU6ihH5i",
  "key35": "xbfh1z82MK2RBtk3LALnEWEoGDSzULk7cpo2ZZwW6wr8AXWrLmmfQ6nAEG9KfJQVQYS3J3MafapLmrpedxpnDdN",
  "key36": "4ntKsYoqkPna3LNzxMGUmBjCRG6dRdQ3TKmdJZopaC7kYF4eDhzsme2PsXN97R6d5qtuAHCChL2MPPs7Z8uqPsSq",
  "key37": "4Z9QCov3Gq7hosa861trE5NwUfwnkZNj2gWwtchuopmQYnRyeLNhWpvazVisL3AuRQeyAfjXsD6ussTZgWVxanR7",
  "key38": "3Q8Db1gyYvw5NSfWha8fNyEoahZZPCnCZGngHtnh9TMEQt3mgzBdAuunxYPGvqv8GrNeiWTf4kSg69YYsN4jVxfC",
  "key39": "4cayN7FKbqV1R9y3RruxFTsfntVjgea4G8iRamqbP5gndwaejWMs9hSueHAKRwFw9htVUdTi6dN8GQ2b6ZGRaty8",
  "key40": "55THbcQtabAhfQzL9e94HYxsnhQwMcR1fWhdhhnAJZGwScLALD7Dc5NTmnsuM4AyF3ayTRC1FWJ3uaE9DQrej5vh",
  "key41": "2Thdvf5cd5JSnQLzJ11VURXFDYDtXAt74qb7HvUcYTZDmbCc7hA2xPBjNcCEGuYErw46yUQc218vS2NvM1qWRFsq",
  "key42": "4aQDH1HSVwFEscv9HoADS4hXNy3PFpopgwcXtVNA8P6d2SNvYmVJPGp89NQqPXwaX4E7ZnoBJ2iMuwoPuC4shmtq",
  "key43": "5fbC6zj2hYmqGksNLBk3UN4NcjhTJaAG1PzV9HGtDnnBiL2BANK9oa8GgKqyWHtv23jQoehoocciQDYfVW3dqPFA",
  "key44": "2TxLtgLGF41rCjZFa6Hjp8HfU6HXTpppUoXYU6FF9ihdb5tKBNgn7Vm3QhHJ6nggcASmhCx8EdKk29Ua8mZKxn9s",
  "key45": "3jNsKYPnsPEoMyGtM9s4kiB8iwmFuBRp2LSNF1tNmdwaW2fdSuEkCmfASi1Qqvhgmbrk2GtZtbHjNmL86WZ8Dxo4",
  "key46": "MwKfHn1bfvKgVWbEcSaNzXWiyWHFoTv4w6dAZBSbxBSVTdHsXsY5udZeogQRrqUvQZevdKdWGFmzWNF4RuQYeQT",
  "key47": "2gM2EieJwjnZnykWWZsjKnDx4vfRsqarXdQNmNpVy2shf8hexibGzcqZ867CNQURdkY1GK3Y47pSYidhmrzBvHyA",
  "key48": "4aT6NPbDuUPA7iVaJugmWkEDtShQ4mSLmC9DEPrVZbtwMj2rRjgUvAmHyqngsmcAA5uTHRwLpctBPjyp6x8T5hTt"
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
