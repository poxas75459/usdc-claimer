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
    "3ehYZL4dutYEj4i9jRpHzNmg8ojmcgaoA9E3bQztk1F57TJdSvfNRhs3mqcgtyXZNT8NAa6yzD4w4hiep8WReYDy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rPpnEcYEjxKZ6JBYSG78BWQEH1EaTyJUDFzi1qnif3RjcaAZJwQzrmrzddYJLJgjCKk2dVdrDHvf3dzggeAWm4c",
  "key1": "4MVFJRmQBrEitzNiNXFUd1N9VRRY5r3bvAbjppf4wMRGqo753Hgw9FdjPPst9GAF8V7fvpxvU2vNY6mU7TxRxJ6N",
  "key2": "4gdkDDtbuAbjDgQPtQj1dSNnq7paoY4FXaz21G6XhLqtmeCyn8hdQDPkqxVm2nQ8A1QNES52mdam2GfjoH7xgZ1Z",
  "key3": "3k8y6Fyif4NgSA6U3WVxC81oLZcPFdQpgT4KPPimPBkpJR9KtCD2AeX3WASJ63aaesaFtQWta6JFoShkc57B8tpa",
  "key4": "4LSLEKvVw436qubmcp1oTdq1KcMVvjDJN6qxZod7bGwepUdS42nimah3RLGE7gJ6LX9BiH5X9uUdmbHzBdTtKoPp",
  "key5": "3EQtLcjB3hf6c8HVoVCJzLaHHguaZUwccLATpUNrKzXJKrQiwvHeLNqsv9NdUmUui3CocGqtUvKW9vz6xxTXDpbA",
  "key6": "4mEUFSxPN8jSUJ9SrCjsFxFkeFcLJYhxJ8vq6hHzr3DygdAuUC3HZpGq4ify7nBizBWCHEo4CCBUFYeVZwvGwgx7",
  "key7": "5UPcPwHAzeweoQMZZW8WFqhmqZAaa8TKdZRjvXBTojdWLpKU9q148mp4mQyaPBnk7tgK8EFC77TxyaEo6SLDzux9",
  "key8": "4G68PcbivQN3eA2vXAx3yfdgxE4NzxpcNMnpSxB9Vw2kSmXcXouqb3h3iyk81fuMQdPVg3UFFZzTCmpVTp8tdaRA",
  "key9": "3eBYtnyKrrcWTjLavZ9yqdqdwEdADsvJnFQYLCdK4YcLqGapUfFWeUTjuzPYzaafDLixTbBP2rvy5g6tsXq7JSFh",
  "key10": "3kBFBE8tAgHwbvSUA2vPbjxn1qXLWeMJRLssX9UgngY77Vh1XjqvR4yASogvKPyV658NAFfjrJGMTiG9F8p1vWn4",
  "key11": "3CNJ5Zo26kjzJG5MFTNVnLmEWsZa2q7dWu7avSUa9UbTKFTXnHASLuEZLNn1CsUVMCurW6pewoiVJH8RrD1JhA3j",
  "key12": "4H6Bg9oGxmJYzQWHFHitGSsLK9Yr6Ro2eK6nucgycVqTRQhQfPh59gfTh4n9Rtjs99yLE7MJpSkUjb2NgpZtNK6Y",
  "key13": "e5eMXsM9wNfKF7uGPfx8JVxyWd7CnE9JhM3qXAqLJB36ZyQrh8vrpi5z16gjvar8tNZhVV5hXPUNoSEqMEawzQq",
  "key14": "xWWCKCJeezvrHAmSc1DfDw9RrYuNMDbYyxq6MTxpKsi7VWKABnTHQWL6LXKRT4CszaV8uwHePzZrPfYtufoagqa",
  "key15": "2bp9bTMR7vHTBgPnpXYMvdSHh7Sd2YEaczUe9xEN3CkaopDXh6EM79qeJ1qqaeTxiVH2hyaqAEovQxpwQsqDLiUQ",
  "key16": "5wEyND7yPogWqCB5vf2efdT8ci7UULP8pzqbhTnkqJejDcQYDTm7DHDeeD9VvQTH16S9GWxdoRYkS54ezJx2g3fZ",
  "key17": "2VQu4qQZFrX8v33YLxxwsb8HwuydxmoDLSSmvUyVyq5mbBPdRpZnvQLTmNUoJ88BEwtKu8PfuVpgdXNU357utK33",
  "key18": "3MXCyHaEUedZuVmXStiugZ2tA6zHqMbieQLMz4PkDWpE59rPY3AahReJ2g8YCwYpoxSc2DQkZZGjDBgZx1r8UUQo",
  "key19": "2twkoQbsufBfMFuuQ7uYETVQvEnxSz5EaLSf9YjdYA3TLTECFoQDzKKYL8ABRDu6JXASM45WqKvHLyo3miNoHb6X",
  "key20": "vqx6fKSga3s5Eg8aqTY6mZfabGWQUfJgFB7437HBHgwdWEJUjEh2NX8gydTTCo32enxFy3RHoVdQgnp7LKmPdMd",
  "key21": "2yFyPPkSasdQEhD6e6v3fowJHiPohSp3ENDHovQtiUD9ngxxoVVasJVN9GrRjHELaNdsnFYWhrK8miCiqEqTcqyf",
  "key22": "5X4nmqhkYrDoegceGSDf4YTS9PUqYRbnptq9onXrjp4RM9btm6PpX9yb2WmHWzH6uWCQamnjcrFvG41ChRwv5cTE",
  "key23": "2D8BnMY6eybNQb6KCPQrrnV7Tu1T6UgJKuB4mHbjR8iDSVQq3SNKh9c3Enx2RmwwDn4ou6cvw6gUCEFctxWTBwhi",
  "key24": "6tgSf1EnSLX8HiLMmU7TrfgdghZFgn7e4QKvPB9TYK56R4s7yrYNB8nHPjyMHibCcgLRRu9zeBo156eZnUju9sy",
  "key25": "46SS5hism1K7dgg1EKVcRfcqPmKN1hnBeVs5AVNNdyF9Wii9LUZEPS3xndmNfdJLHRd4QsydUCqqQnAsStgRSh2q",
  "key26": "2ivPun4Y73tMehvtP787oDzExFqPHXXZXwnMjr7Ti1Wkdu6QmBF5mVchutByySryLEPDgrdtqSh8kuWYh4pSq4Ed",
  "key27": "3HqeN2nNtsYasMko5Gg4BDwjtqem4GKNSocjN3EU3a5UnegDXNQL4FDm4LWtFPSpfs21s6pMa2KVvnamSe4ovkmu",
  "key28": "2kFTyc1CZvD6JCkoqpgtX6RpGrCWTkBLqxLy8ENNAwEy3dXEHdsDDDu9ECRbPVT3HyA7LoMfTXtffPLwU8UHN2sc",
  "key29": "3MJCCvGXont6LajhmkLRouB4aeGjADdPy3h5s3jJBbMgnc3NDaKcKh7q6tQUpNnVMx7FbLNGgLZZkPYUKpnHyJ4q",
  "key30": "4zAbXhjZrn1kwhC351tuFbyNiEu2qnVeKB8QnuhNwwtX8CRcYGK38E77i4jQEDHQ9KbyCqe6b5gPzRG6KXak4kr7",
  "key31": "RABJSu73mEVux5CgdYAU7zzUzryWW1FCJiM9PMw21CoWrPXH8X4anR9L5KZxGd4jtQradwvGdMx8QZmmc1uDhRg",
  "key32": "4z4m83eWUnima4rmCnq5dr3rCBZozSiMYm9AytsiUsJDyGFxigna2z1QXHsaqmr4KQFNdNzPxpnoQQjoz25YRJ7y",
  "key33": "39JzV97Bwu5jvBDznS96G3xrKexd55SRAzGmVmnsB7brZZwmsdz6tRoXYncWx262NG2sqTNxpVPjH5JhkVphoh3x",
  "key34": "8sW38iJ6MfDerDHzdetz43T8NXwp6oyesKajBHSH8ZcNi76Qiyk6JnDeSh7aDb5JpVq35AEu3mSkJJJ1PgT4Xeu",
  "key35": "2FSe3N92mmWpbNS4N8qQ9aPwizoL5aq5bfhSF9d4494nNgxA8mvJU1nWvt9t6xWKeXX88umxKHFBuHV49FHZoMJf",
  "key36": "4L6t4a1MR9RaBAzmztSRRH2UWVJFYNp51DvgCdtHx6cHWx7F7pMMAkL23XXvGkVusfDuct63aTDZaACzV9CUWsWu",
  "key37": "5FTDaJHbK8jvEBNM8nWL6NLhRqp6ihXAqYX8YiUAbFkKu3V1TShHM1YwCYUqdgbnfY3YKonn6GR45BYnxV6r9LyN",
  "key38": "3F9vYGfLaBUNCfywgTrMNDuxCoZa1Y9c8HUWfTf8EwqReUYVoWCU32LDb241312TPsRpRVgA4A3yY1XJ8cRP2J1N",
  "key39": "5PTnGa2qm5NRgdDaK7VerzAeWyvK4f3aX7r9NATBYevKQjyfd6TP7tzVWaSBiz6aLTFiaqUPvajEBVufBDX1SgzW",
  "key40": "2P8u3y4VmwwSs6HiMMG1w6PPqLU47StEwyN9HTxgNryMZgDFCPQGNj8WwvUkaj9ARtFiPSAJFzVptbqEDfxVRaeh",
  "key41": "2hX9Q6rx3oukN6AbhayT3AeNr4DDqgmxFg7qajiELsiumaTeatFCobc8DoxeDouSqsax7Q2qG5HTK2fuub2H8thh",
  "key42": "63WNEksbxowM7Ac53rQsc8xaznTSLjHSWHbVYMR1juhtjfgRnpsDYsuKEbV1B2PD8uFrdhNuQuX1VUFHFsE1Kdi6",
  "key43": "22WHbtkbyi8R38bfhpUKNEusmrv6SXtmmYDMFuzTqjaUUWpsrBXt8cuf57mgfnjN3hAadv1U7pc1S56cN9X7p9VN",
  "key44": "4HxwAVEHj3Jy9qPTshCqRszD9w7rnoZ4yEnXX8wmTaFwvuFDqtWAMH4PPMH7skPe4AEgT3iZqDXe7qqEikQ5nFFS",
  "key45": "22JErGZGWaaB5w4fM7EFzkpdeP49AnpaCf6Dor9NAxjD17A513miXCzpHT5VVPkGtto8SfBEp2df3PD1bSFzf8GU",
  "key46": "3bLWTupq27oM1jCg9WorK4VXnRoGQNQtCdKPeGJbGvhrYfvCy3TdscdjuLya1CGCWgTmDC2aJZ3oSzfSxKdJSP6Q"
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
