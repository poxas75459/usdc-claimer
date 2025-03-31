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
    "5LkazUrJ9vKvskAYeTN1fr2Yo8G4YcSWEpSYbfunKQnPCguvLA4yMBJBQSFBiUHikqAgNhzifj1wwFh6rsXeYj3a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CS6yKicBVLL2LcgAYytv7p71McYtUekg94rquTMNSScMCZj4pNHtsdTSBgVHKcxkuFvHcYUcrLxSVNDoErqcr6n",
  "key1": "2ZR6kNyyc17rFCidgKVoDmaUmGMFkxjfKA8mHLpit1UmptrH5hoRSZTrBL5Uky8uTdtsrsibbf8nidwsRpgEPyeV",
  "key2": "63iD4YpCtcSohtsG2XXdXYXX1hPZmqJSQpQwZQrVGxQkWFPe4Bj1uQ9c5XGg8EtBQRtL9nfHazswQ2qbs7prF16d",
  "key3": "4zJbyoairBNoDZ41TnjEbUuR1TP4yzEK6Bn8CkypHB6DzZ7gJFtCpGSsd4XMKtf7gwx4o7Co77g9tRv9czrrMZgL",
  "key4": "4DFxijXEpLMmP4LnxF1Ce4En6AN3PSLHbduvBjLuahq9z4PeG2GcpsYNZ7fJB8DcELU5gSveGU8gyNreco9NkE3a",
  "key5": "5oH4VVh6x2vByMGipKP7gTcFhLdmkD1XFUSaYjgzAGCQ5KUJ5WfL6SPhQK6jkWsEYG6dPg6H7nW2g5xEFcEi2ggA",
  "key6": "yLVJei6bJVNE9PkJ6F5P4E49Ai6eNhiEBVcE7A8cZpK2mNWNk59cidLqCYpdCKspbY2SrbTHgvu3Pcv7dMHG9Nc",
  "key7": "5PuUnoYhCAurF7Ekp1J7m3fzKnWYVGbHXg2mbBQK8d8MR4ZR7wqjoEdffw7EpEcbLWfkv3ZT6RiaCP4tepyrfTvD",
  "key8": "4HofQp3w8aQmyKNBYSKUY8fWR51x4owQL78RAxR1Fv7wW63MEJQPYRqBV4DJyeMaTpnjtTbe3vHEeHGzJSd32guw",
  "key9": "4g8kMCy7brBtk7orabKZoe6ZD29MZbBMCfj6sARKA64ckfY8LpcNwrsHKdJieY8JqPrYoKehVeaaDLHCNW7BoeD7",
  "key10": "3xYNUKCXmXUwdbS5JHo75xxzxVejC5KfmjMWj7JmvVjRa2RDXd8DyKcoeVNuyhVzxfpcLrx7bHDsxiWk6qBoYAAd",
  "key11": "3yDwMai2C7HNRQ86HZC1DSSrNQTPMpL2X84SQrc77RDdZuSQbSAU5EP8bYCRiCY4HGN4wUUZNMDtsdXzA47uS2pj",
  "key12": "2xzMLxTPL9mwnXuMKCed4oMddpxQ8MehRCjoNHBdrJBHjjv1SVZZdm5HKcw5w8CqBz8hGvx4vUdAiBqnFk95RSaP",
  "key13": "5zFFsCY4PHRzA6UPrDvWttarfACmvnEFsHFDVfiCzPsYUFL6YMFbyBz61o1mz7PWCJFKiezV8dQYnBF8HJt27mgV",
  "key14": "54w3djnaQPcmA8yMKoKovWxsRwtb6fQJNFKZWnFTT87jdnY3RQfP4h1QtWGQCC1jwBmMhx6H6AE9HW2UNcEAkSmc",
  "key15": "4EmuGiLv4NAUjQWMkWjDCBQKsUQNmLAmQijAceBxpVVXJvXp7YUSfdAe2FFxP5VZ7n4sErHCbUTzF8u2opFtKHNA",
  "key16": "3LvzSnKzpSxcNCLt4whsPhoNGBQRpm2hjt5sH5Gxyrp7ZTMmNzC1fC2jBconv8BPKecrXJCamWuEw1M7nnTkHsPC",
  "key17": "Cyaijgv3TaQ5JTQHdEACH3XWinihokB6eeaeqmxiWFy6xbR3BjEo4M3zLPaAhFxqW6pzf8fVrE4kbcNKaDgCfPS",
  "key18": "5GMyUjAUQS7GEJTsjyZXP5qAJQkKAbx7KWg2yRkKiWg3HUEBbAeYZM9R9yqcghQUq2yL8ghUR2AHyBpPEFLLmPX4",
  "key19": "5YyMtEtKZvZcewdbYgfArqAYVBqWVLW1QK4fRN6JcgV1cDcK3UfBAyTH6QVostKMQxEwG6K3aDpGnfveGzYsFAV9",
  "key20": "5hZyvgAT3KKigiEFkPFqeA9GHtSUcc1WQ2dvZDahxDpqRwQ8YqgG7kprHE68fQtsNB7c8CTg71VeyMEJdwoRMATo",
  "key21": "3zjqyabb4e4xabixnp3zuuLWgEai6SD28buzYav9kUXm4ZFVe9S8stn8GXkgyKN76nPWp4XtEdY84oTXcV96TADE",
  "key22": "5PdsdeymL7BFoE6GfQvJ8fejrsodu3A8MWbyzoBUmRPruneLL9xj8Gr2bSK4hFTB1a4x41DgTu7RH1aUFWQRUNhw",
  "key23": "LMzXFctMgim7BoKkQnKFdm2peDJNthqnTVWGTJttgqArSMUsE46dcGhaATuaWoLFQusgGdRJaMZB42sWdGPKcGy",
  "key24": "3BVYbtRatxU8zV6r2niVkKpqL31pACCs4nCz1ysPVXZyo6cDijP5mpcgchCNKVD1ErDBz5zVh8yT1e2LP3TqZ3wm",
  "key25": "5UJVaKziZbnsLj83NwN1dWAnijVzBCWULEBALxAeTeaSzE3gr1o1g4o719udMMQsPnYRqrK3qmnpk2KGoZDwXUS2",
  "key26": "5vugSgXPu6hmDwDZVKqZoYRXrL7XnpqoEHf2MjUYA2jJwFdbHVjnFQq2MUzztKSRWDcdQYmuEpiu8tRX7orXz8ca",
  "key27": "4CzmkoMLQNkoMjG3g94aMBCBNfJgQpHNkUpJTyZjFtqjMsV7PCZBJhkRXWpfaKMKtc2eBjvrLTQeaWbCf5WWDXHh",
  "key28": "4Vr9qppfJJjAxbK2orco3HRzM5tqyzfKeWcJuETnJRZzSpRZBoRtEnQCgWKKn7VjZsW75nrn4SeBv14XqkSbWQTF",
  "key29": "24Xcqn6BCGCJdXsNcy1bLZp4zv6ixU1sSC8fx9iCb6YRajPpKGvLksieL83jnA92h5esVeMDEKZ89t4tQXo2PvYC",
  "key30": "489x1mA1xTgnGx9agQLmEu13HEubAGg37q6N4geng5tqJBi3X5vBrAQc8AYHaErH1JG1xsVxGC8P4sntZvSaoSYf",
  "key31": "5ZRdUzyonWpL7nojMVidZreXiskwPHbq3FcXTmfmZWG9yqQy5SCQmKoV8uhkdxAm15w4T27rQu1htEc2ECRzUV6W",
  "key32": "2s9NiCSVTQ3BhEpjQBSvUJboqF6wpFNm5m9nfjwpMzXurVaeMRAa2NW7HDB5MU7kUrwT5SrQrKHddg48QmuzdmJD",
  "key33": "3c7hPg3zUaegnFSNBaMNCXLBEH8BjSGoQBS66uawhoDpX2h8jbLCdKeQReZ12hWozbAZkFe4ypbcWJidFY7hc3K",
  "key34": "2TSxBLjge6H37iPciyuyiYckq4DvHnJhev1DPVDixhMS8xfzorUfRz7Sf2Q6XozGaK1MjJRf4UdnGuzu8WgheAET",
  "key35": "3hxQa2h89NGppD1uab3hFsGviHBjXeXWhz6wmvhEHDt1rWCZiLT5eB82veLCaGeHC3wVBx1D38VeRiDc1diJUEZi",
  "key36": "ekEnyf9dWnErCNZNYg6mRFaqSCUSXw4E59AH3fyJ53WvvwZhVRf3WXheYJrzkwJMPu1zX6vkgAikTPWZe6AB324",
  "key37": "biN724DUjd6SZmPNE7BoKMCKWAyVGTVRgJuxXLeQeYNUjJu7LuWbYf4zpwyaAmFELYR8PHTFft8xT411H1ftt2T",
  "key38": "57nakbVPGy7ZKyeoNmF58U7T2zW1pDAXcmTXRAdxZshUthYrXSpHBmha3H6hSiNVpv35MHyhndPofBo9449w1gU1",
  "key39": "58vWJyqi8x2DBspMKPp7J6eWfpH8Ccao6ArQNJ27wKf6wqGiGX2wDLybFn1S5TJpRSf1NPMsovNFPBs8JoDpMgBH",
  "key40": "5dhMVyeBqq3wBaioyAqB1KVdpBmDiN8ticmZJ2iZv9gk8yxZQb8KEtSNCABTKkRTCREXpnaJZWemH4E4hcRek6J9",
  "key41": "4MzgF31RMnUaGhZfB9kTQCkpRCSY8kRhAwEpAMH56KVcACYzFwiJyhFWHXG3R984mfvDZF5knqu2SLUDw1khGCXt",
  "key42": "ifT5x2mKUkNA57Zm6Rc9ots99YzcUxzw7UV5d5KqLsVNEiGLXBPaZqYPyq2JH5Lg6919TVxCfMNjGAgKu4JrdjE",
  "key43": "3JHndk1kWfAqAVWL2MEnXknQgpbjeRhHwLZG6Cn4Nwg3pSKpVQtZREp2VBqxTnEGCLiTMHGWggMoMMSatzgE1DHr",
  "key44": "3hTqG6qKofGezQjj5AfsrrqtNom5hksy9CaaH2WWLvGaVrMNtVafLhqrVGvXfVDzbzhKM1tcj7wsRDTyqSkaLCoM",
  "key45": "5DKTUSAYZaxSFMmRGTSVuFHAfMXtsRgMXx1ebEQ275BVPpqNeoTSjyDNqtTZQNLVfHusm71tx3tiN9sxHWFwYNRC"
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
