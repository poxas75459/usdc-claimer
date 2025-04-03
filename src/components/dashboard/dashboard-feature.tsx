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
    "zuWE85e7H1vzfLp5JQKmADh4fwhiVLsJVDXZt5B4PnmdHB8zjjF2kmvHyTCEhLZQuco7AecSqQfPMEjQXxequGA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31nbGeyxZT7udRFKR9kkVo45pffhEMRscyFryse7NojyyXMfA1KzwpUBw2csibpeSeMNZDZi4tnPKeSbBDeJUsjW",
  "key1": "5jqHyxpi6CGdQadVcDJbQ7h72j6xNPUKVVR5BmU3QnXfS33BtsVoRNzLsdrPq88QVPqLbRmpnPAm4cmFiLtFHE21",
  "key2": "5T5PGDFandzQ8t9xuCgCqLhcxBJRRA6XmmTV7qjoP3eENJ9BLiy54QEEG7Pwp8NVTjnCM4gFzafx64LCDLeMBmYg",
  "key3": "6CQyQwVEC1YUNCgrHuhyeoUjfsLjhs51h23JmLfkF38EM24JxQcUbagThxFGDVXXf9ePRN6edv6mdqra47WCUYB",
  "key4": "24WS8e8zWvAqZAWunVuBA5xgGLBrMiKM2jfm6XBt3JBM1K2JeyJj9p1VjFXHST8LjnzhopAVLujFBBnHSE9TFNrW",
  "key5": "3dFNcccZiMNSyLYQYtS7qCWpdhSh43B3nhfYqHwU211t7Fa55q6fE7hqAu2Q1j4mf9HhcchTcxKbG451RBWVvyVU",
  "key6": "4C7u6aYkqPThRi1dPZPgHgvuMxZNQNEgF32KEweGRcYEvSq9a1WgHLr7v9P4AdTKg5iCpxPH5TfYN5ya58p24nfa",
  "key7": "4f6e2vCBWbt2Ny63rL8ucquc24UrjMcRT8HYeoNABoE2Gf8zH8ZmVsy8CtGDBgPLRWwf9ksEruAxggsDhC11VBi8",
  "key8": "tMJ7zMH8E7i44XEMfZPaj9amWppJ1DCCm7XPLTCzyuKKTSPNYfQhNi6QLSaPuwAFP1fzXhvkHfopCk5zxBzKAia",
  "key9": "jJGvbd529yjxVyF82NZjrY6Z9PCHJhZa3zY3JbNkVRz5XuP5BfYoMbosLqPj744XqXqV1iBMbGFUe6du3o4Zut9",
  "key10": "3bSeHsihcptoZF3ZqNeBYZUoyX13XwLsf9LcbZ6QYaQnkNSBmgiP7j3AEF4kmbKjBpmCP1siDTSKGhqkdbbZmiNQ",
  "key11": "2bdAeJkYbrELPGdLNAptbikuTv6GCE2t8Eyxb66gtbirhr41QYLb1AGT2wrsAsLANPTe9HJwxS15bSBucdFwAUjs",
  "key12": "4Dz9M63wksVhe149bU1RSxRaF6qkViBudgYmBmcKjGySCZAXGhjLZ3JimF16VjtFfcBMseLNTdp4yLUxuukcsAoj",
  "key13": "5eAGgM1QeXMwrnVsRq7HCDYaqvN5fSouiCpzswi1M3Y2piHQQNKGKyarPT3cJhHgkU7hj2sE2MPWyBnB16WaH9sq",
  "key14": "32EgVZFiek1Ds9i7AWmMVuH5sxujSZNSswBcwFTxxZC3zt1LmZW7wjEQANBoSfod4ZuiBG7YdafWJeNXi2oNs7MC",
  "key15": "aEkmxxBq11ehoAbqZeZhFAMjr8oaxetLyqHvdqf2SKtGqCvnALDon6G22QJx2VsniT4o7EnJmf4bj6qEYksAfm4",
  "key16": "oKb6Q435wRn3cn5YNmfZeshYGDg7S9pQERm8LnnPALq7BD6cGnvmuHKamVsbuJJE3mq1P5TMf3TRbZcL3jL3qLG",
  "key17": "wqGFDf742f4Yzdg7vmzvbo2C4WZV7Nz5ZY8EaFHXBnjj1VzCpjD24PtgmEPyhYyQWAfqRWxmqfTygR9DfTPuANT",
  "key18": "2bWaKsCpCYGJC3U4D1SkQxz3JAGKxxNsudWNru4tjbH5Qk9s9REonUnyA84tcg8DNCvUMZoZXCbZ836P17bpJdTf",
  "key19": "5JTtGPdAj6vLbHyYvfTajaXJvcWzGZtvSbSFiYcq5Z6ywkeJpLgwESiDyMFEs8MiA4hkGYDm5BCG8p36pbmMDPF9",
  "key20": "4E92BrbZ6NbmCwNo7WSeJMXn2JYbxRtYfcu3mk4WeeuwaH3FopGGFxiBwN9XGbwmAFn92PmPggePig81j2CTF8Pk",
  "key21": "2dVXJRvmgjtQhtBgcN6HyDiyZPrvtTmKy9Fqf95gTm22NWo2AwkTXdqQJTnLMH5qc456LaXQggRsTtLr3Sp7K7DY",
  "key22": "4JEHgKKnFmfxAy5KaA9JgSr21XkzuunSSwZ7DR77q5uSDbfAtZ6o3SF8d15eEgbwnq246jsYpKtzbySjNUzGXLHG",
  "key23": "3ds8HjrZKBNqBwxHWrUY7hhjezgRGJ2Xp6uZW7az7GA3FFWHnTLb6ZzUpH8suq27QXy333Si5xrsqdnrjhCaJj7c",
  "key24": "2vbHgVt5sCzzAnDxkE15Fwzj1PrdqXkCHpdpBP5MXZw7kAUggXLJE94cFaL7a1AToYwgvmVkmXVJjxVxaVxzX9Rd",
  "key25": "3dG3hpuyduyS2BQcSDXwpLYowTTcZkXr46YzNSrQWXcWHA473i2k1yiLmYgH7Anx1uYqSL7s3yP8ekGda9kK9c9e",
  "key26": "5ju97FzFdbi9uNCKiVi5X8MWYoZ9i8d5pyjjHKk7AHBobhf3S6q832uPi5SFzQq9QKEQWfy3A5R9JRuYpgtZGwGQ",
  "key27": "3c29nnVN2paCcAe5BouLCgrGd7yameXuV3AdrZxzEXz1sBddcs3aawLeugrXhg7LojD766AjNFYw96pG4M2xqYbg",
  "key28": "ent5DmkfGLm4jRUq6bp4TSo585CKifuqm9HCLCGHgnCanQ8DWhKdxu5DCk3fw17V2ftFMxqfvg23Gm7xJerL9F8",
  "key29": "5TFaHQG3GRwetZTC3H8paaJJkXG9Sbfm9ncfAvWn3HYJEjfSdF4qRKWRtdVZtGgAkJEgFiHHuSKLxcbvcPpXHR8A",
  "key30": "4PiVniQwbeW9mbyWqaAUxZTY3NJM1GpJD99suax6P6SZ3v6RDmBSXASeSU7KkrP3CwXYdCoHm6KTYTWt3e6jPZsw",
  "key31": "23fynTDR74K8Ye1gfDPtmYEWF42tyW9SdLUmg1QFVjkNDXguNX12JbVPiK8xshnrqazGvCAApUeJETmpNDkWwSe3",
  "key32": "2Kq6kRBYpwSRH2N9Jphmemz4sdxEYJgjE5N8Db2yBSJF29Aq1t1dwHJDdAyuFdwfVMgiReoYJrXiFhdZtX7FCvoM",
  "key33": "3pWsQB2yMJnebDDnqczLx2rHhdRNjovoMAumbRPx4jeMeZSzhMPu9W8pVivBz2iYmwSDdgLvxFjxA8La3ab6JFDj",
  "key34": "424Z6QdY4rVNzfX9th1HLcYJkPHGiLkH1gT2UsrUQwAdNsAqJadwZ4W2vwxgE8Axbs4j85jjjkzjaze4yJSmF6bH",
  "key35": "2fVGtMHqx1qLkWPj42a6vGcNdZLhh3YrXe3P2KvAk2ZFnMoikV2s2tR8d1e3wd8KCALnZmhGGFECpXGHXTKEb6FS",
  "key36": "9XCy7L7LdwRvBt9xQ3vJfAnerRYej8gGYMBBkzJ4CC8rkqSjSCyvsxwth7UGkcHXu9TEuAauP9jAzGennswKTSS",
  "key37": "punA1PjwrH9vpoHaeDgy2mqvnDy9YTmpw7ch1qoqeGtCfeP8h894wFCmEkmNBancuSAUw9y5fU4Dr421MXCwXFz",
  "key38": "M3nfjqHLZc4h8k2aRi3EczKSUeTk28Tm7n1ZG6Pd7uJWP9g7nwhHWMgfAzkgFL4q1rpW7CvJ8X1U5ssH5jReFp5"
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
