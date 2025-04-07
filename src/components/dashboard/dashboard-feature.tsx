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
    "4WbxH6yjpiDccaU2tD9Xd85dSZqGw4vMJrhMXdVsxWcGWM9MbG1ZG1KqamYEs8VzyF6rYnjtByZdmDAJensKUkkH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SG4hs9w46F67ZztmUUmKznP7AcvxsoJNSCtiF5BQCe3zi5hTqfum59FTDf3GACAj2tHXuhRHWD622EPUAVgvWfy",
  "key1": "5agSxE8BzLuD5Nk9w7hti99db5uaEb1XtkRFGNdYYdboDdJc4kpabCFa1WQUYHyDFHBJYjUedHc9g8ZyGoAWP6a8",
  "key2": "5aqZdswUDs2zeJbZm6LWkANpv7aMYmnruPBB8NeqHxLaANfECKsecJboTAqQngKWCYrJG1DEV96nLUPvGa3uAYdU",
  "key3": "3DhzFmau9ccm8ZSczagynEg78XXpyLPQqdUGihH7V8FcG2VUS8sB2mvvBDE4Bmn8AFJ4BbRz3sjaXNJKwyYJcVTw",
  "key4": "4TWBBUfncnkhTZvyJdtz5h5HXzeEtrZvsJmzaVjyTqkxYdNz2ceiHX1YmZ32bwPKfd5rJ6iSXQeAjh8fyGrH1Kwm",
  "key5": "662k3QgQ7u41tnd22X5Sb9eoJ2Sn39GyfmhTJocnuhW3YGQu8RjggtwYZ9Sy8eTkThfL2Bn6nTXw7DdCArxhCxde",
  "key6": "4uV3io6JLv66yeo6dhi178MAFUfs3rdWBfYLYsSNjn13thc4Jrb9vxxrpUJT7r2GBxRZWzy5qPJhkMYAESKjKHzk",
  "key7": "3YA53t53ruuy1vXS2KDTCv81nGNEteUyn3oF1BDw5m6adZraHwVp7oUob3G9Jd2KU9QNyCUGkkBLa68gBLRNrdGn",
  "key8": "57sr7HmRz3D52cRwTwQXnSsAZ7qVKUe7XnwSQDD1tVnfWpVzhepWNLFX2vUPqdiqkC4kvZEjgdc1DNxKVJupVaRc",
  "key9": "3yDpoMxDj1YamwFWAoRfMXMk8y7vW6SemJ6RHwBnfJnW3JHjVFbJgTQPwAqhFbRFBgUCFZdHz82suweWNNEVhSDg",
  "key10": "ESXbUVZrs57m7pz2xaqpMYRe6gQ4etxvBxtvrYnbn4Gj2B3YEB5VPZuUMGArmuroo3MuYoSgALumRRPxxaFQ9HF",
  "key11": "31RgQv2vrTpDHB7HZzGnJnxwtTY4TKbKk9AjE77UVmbkcb72JCLaaRXuZELoGjFn129FZjfTmSJBymUXh46mFEzQ",
  "key12": "33vhLSenWg31C27HfV5z8oHtbKDEGpXbN53T3BhxRLpj8rLQbWPDGW54KLDTuRDr1vqEdLC5wNXMPL4VzJVdF6Ju",
  "key13": "5sxetZHK5Uo1MQGqGnMxG8NRmuTPjrWLhDb4wQ3fdd9d2QyyRDH43SUCqyRogFDvGqatVtd3B3kLd22CVtLRLWj5",
  "key14": "3xC89qEgz2PoqLYftL87tZFgyFxAn1tMbp8w194Pm7JHmJL5GSWnVfkxi1yUs4DZDNzDsCzZP6o2s7QHtkBw4nqc",
  "key15": "dLo9pqwHkw3BKxiFD6RbBjdAX3s1GcjFQGB27sftceU5Qty7bdJwaBFtUcgridRLYpzGA6qvApS2LoBo8YNMcWV",
  "key16": "5Se4UkNMs8ezLarACfwonoFn1ata8jPQFbj5eb3MbJbQNEMztAsmaMhjakUM1vVzy41XBg6bciLwNyUfNtQ78gzV",
  "key17": "46gKK5a7444yd99GiQ6v3qSRAX8PQD5uSAkTcm7ngFs8ZRMYSiBVKmRZ7pq4x42X8YaNHGC3yj9ZKwr71Feo5Wkx",
  "key18": "2wBhdUC22mpzgyQ7vCGEsubM8XbJQcZmbzD8ZEd2cnftNEZhhbAZp6Gzou87cKUCbN8sBt1UrjUfYmD1wWFLCKhM",
  "key19": "5t36Ny5YK67HNGiA8y6G4KxWmHx5EtCYk6xZZUPYi3SvBTLqG9jz3LT8tfVkt32Twqbp7YxraRYLsCah2PQ3bVZA",
  "key20": "293WihLPd5SdqziZf6nnAwy7PFYjFsWxbRwipQwLCQ1U3j2g1z3ZrjpoHdd6xXLYJAMw3wDuLrMc6e7n1DErrwYF",
  "key21": "4wutHR47cFAGWmRnpFu8cyf5faZx1DqJE4QKwH9GuFd1Xd6rnZDaoZbNPV4MfiW4m6MtbuKi7mnZkL1QjFQrtdqy",
  "key22": "4iaJSofcZLQjy6BNXJRPWWWttuKwu74N2fH8wqzLBTjpHaytZNH2uFfXyVuRUs5JfN6Stnoju5DBHsv3MgoBZ5JK",
  "key23": "3g2egg2G35q1WgGHSGFM6SxdBeN7zgN1E6mAo7smWYrQ629RA8ZAJ3MeuU1aSnXB31DVcVp5zXowBzMhe4cLCj6L",
  "key24": "5y3LywTo2W5HkYaAbfQq8UJbdifpcwNvpu7nFkFNqvBELLTC8JZAK6QXpnE8MGjWxouuvrQpnLmHm8aa3gnrZfsB",
  "key25": "kUsnkPDs4fpk8fw1h6MTfAhzqrh5TMWr3px99wrRrQvWmWaTf8ji3jpKVN4rzuiLcVE1CZdE9W455aVanHCAnWS",
  "key26": "3AgfCmxo9165utxiEtzQF5AERD3rR44rxxTK5sa5sTPkXsr2xs8qm6fzEXH7ghooLqkSyjMbRHDThSox92QHLXt8",
  "key27": "2Dq1xQy8oHW9PwHfa3fSgoLjK7YZF52ttcJTFbJyHQ8rJDKDWcbzNFKBA2kz89GZFAcFau9wtXpeqCncpiqKB5pA",
  "key28": "4Pg1Xf88m3xV8sv81rNQtAzkFBDFuc4ccmNXL7LkSP9Hq2vBVCDzpagKwdmfmTL2SYxGd4BYgpp4GUP1VRQzuU6R",
  "key29": "4mXzR4gfKEfnMZqZCrXX5d2yikMHxitCbbnA9Jm3kHTxUwC8Kwm2nFXtARy7TVyKRr81hPWSV2zd7TpTRmjnNNVu",
  "key30": "2RuJ2A7gBF5mWNHnnFD74qAQ5xLxQJndWAu4cHYjYBFXViKHK24F5bAoLvYrbcDqn1vRkpx3Gyt1qSmrp7PjqvnS",
  "key31": "2bsMmQJ8jXjBjMnwt6TTe8ECVTztzzjnDTyCmwHCw565kk6jNSBRd4WEHfL5k5cngg7V5L16Vf2JUowMLw9fUcDk",
  "key32": "8wfsb99TdcaS1sUrbm1ATRaBcHVcXnxYf54YrNuzGjF6FHePwEzJ3C72uEPaeb1cB9KHiEoF1aaH4z37FDqs5QZ",
  "key33": "2vneNjMtkeR49j7BhyYUnyFHGWo2RkrbkJ2XGdW7sSA1UgEdU8iReBWAxfyVdCA8kCRp8J7g9uNHmCyVTVN1VG7c",
  "key34": "5gib8RGn3C5P5Z2wYyHxVGq22SBPUP1BConACvtWauU6kepdhV7EoT6Bt6bQD79SvhxMdXHxiSf9wfEtFwjscrLz",
  "key35": "5Caf42uUxH6KKDxzZx6mySGjBkfDAcdUUnf67HiWwjbS6BGdUYNANNyQuSuLS3hqU9ekKNKRKypiHCXyBmLNuZon",
  "key36": "5RMGbGtWstFfnzQosrdN75r6XhKwgBpEynZbuDK8AN3zCGzdTcZn2ac26SiEkqfL1Fs8cRSGgQF8aE9UheWq1pym",
  "key37": "4o4KKrkma56wbXzWw5ftCfMCWbBTCduy2DKaQzrH6YmBqenAbifestxrto4o1unnDqB6rb2QFiCyqnR9C83TkdWc",
  "key38": "3VE4xhSsaFiYeFFxCg7QtJjmvXUApU2p2f4YK4dwnLYdPequFt2d6fSThVqdpa34k8e334WZmyNi51etHzh3tfSj",
  "key39": "5CUeLcjRyDTJUjZJSfrtDsHG8jsQEFMweZGh7gCsZMc5A3ricQPxNXDo3URSLgiqJah3188V4sEpPcmbJNghT2Te",
  "key40": "5badqv1fXoFoWPRzGuuz7VzRaz7VmSSddioKN2L8BcNZtP3TCsJRBS3U2JqkvPRt7LK1JXtLqPbcA9ragJPcMCxj",
  "key41": "5j9BG67Vuv3nK1Ca5qVqCPNN246pmZj6Kk66qQw7gQsn9472G2Tt4bCWWFsVMQue2GXWJ9jaYDhPHQXFoSR6kUbU",
  "key42": "4VGNHMbBLTNDdd3Bw6UJzHBM3ZNTtwsadFxu5eHhF3kQFf5Ci5VGQ9RJQBvM6Cmj1v39uusEYb2ihf8fVeLJR6QM",
  "key43": "3WRu2DMdguiDK2mLK4hW3jXUR5qyBS9nzKHFxD5bXEg5ooqhxjGaWgB9JqoPCVLDcs7LtiQfhKvibBzmyV9wotki",
  "key44": "3qYYrCXJvT65nfJ6PYqG2BaBHsWpkXuYQpEEFEKxX5omhat4NhQ2DCYenPuqjZnQ8AVqn7BAkEdrdFq8Ae2Zsg2T",
  "key45": "2oZXzzX5eakEF6kyG9ZrE9A3mg84DzMd419qGKmrFeEVWF7JTwQnRWNtJSBDjRcLM9Lw1wzojwthT4bAzEkhgXE7",
  "key46": "m37qiBbFT4RBQH63RSywKGdWehqEkFYGbTS3o6tzKPLVMBibXFx31WBVL85zEXUrAHGxzwS7vMNNUjiuBPJpQ69",
  "key47": "vqjSjxNV85gSRtxn3wgDKuGt57k8bCT1avmZmfTFAvJNSZKnUsQ3ygYGbfm6mZhHr1WUYG75UZaTychcoGyXaEX",
  "key48": "5Ru7hdpWY3VorK17TFAQJ7mNGwZ2E9KTTvJDPd6Mro6ewj4sfsKSVHiVBp2S1Rs9NDDqFdFFeQeuxZLdJFm7FdyV"
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
