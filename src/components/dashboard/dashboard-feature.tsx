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
    "4n42bi9XFCUjrhtTfKPKzoRLUuiERonGYdWw5fCZuww4ihweFe9cyQWowsXFrAkBQ1ceHY2DhM3dCgJhNUuSLkuo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3as8VV6K6EAvKrwFHrMecGtseg3i8bguGVYwaa4n5yj71zBMimQ3V1TtUpjUmjfyqW7eBsMoDTnmbeni1i8GRx9z",
  "key1": "5LHbW6iuW8jmMAFz1x7Bu4agfbBkKxrqBz3hWqXKm4cLAisR8xnbumoXRRpccXCz7DBxDRnScx5eKw7kVWFhXMM3",
  "key2": "3c5EaggtRVxpdjxTaCNfYbKdEkzdApQYTfsmKH3eKQq38YxPb6L62CQDSVGPjm4nm2XB8o9uRJVNmnfqgSmwvsQy",
  "key3": "5MrJGWjRgRDKbX56Kq2U3h2iu1Muxke3aCr3iFrGeopBgkwK756wpVsnCjQGjirJnxBRLLWVFnePBTuyMnXWiSM",
  "key4": "4Er1J68XqdaAwhvDMskjjwyhuYcoauZUuDZ8icXL61ns2jAbcJuHSGfumiKPHZye7ZaFD4SiX6fGuDZHtBrcL3PF",
  "key5": "4TYrEEjjtD8coLhbQJuGhD48WfGviwigFozZdGCDiTDfz2qSCCYsY55SF5FjRHmCqzKLyBQyM5FcmRj1SCyjD2Gc",
  "key6": "WwJNEpKRX8rnFpLwyfx5gXtvUsjjc1TG6sygRwWdtQwp9NXrG9H5pqQfiMoey1Je5NxKWPsiGRgETvctk3Zjnh8",
  "key7": "2x22WbATsQGGtWRFrjgAarna4g5cgofvj32tRD1FfaL7i9dJGnoiyKgTzLxJb5s21rD6m43cz2h485GWGhMnn7cc",
  "key8": "2ndNGsZizn4Bswahp3Rz8vNnLA6BNsu2UTKX1qP1TjhjrZEKLbxQUFm4N5eH9eu8o6QLpFJnZ8ovPTcRWc9GoCr9",
  "key9": "5iWCpLSYoymKZwXhkuR2YC493xAfHV2dSCSdjNzDMw2sT3vna9Yxt7Hoiu84cXzfNtyR19uFskmJG6VkLsjKKhCw",
  "key10": "wpJEW4xDFcjTAQcgGncPfkhYfFCMESMZi2YNECURUod9CrB61t3u7nRH2mctMsREBp2U9t1uaFwVrSPUHoLWxrn",
  "key11": "nKki4WbuCRMtCFW1UqpfjpRJBNVzYvjtz4hwvbEctYGdbNcbh9nnKKpJquY6ePzQtk2JR29Eo74nVCni5kTE5rP",
  "key12": "Q8Ne79DqgMDAcjZNWT2jnC7HDqhVVT3jrXphA4teE9o6vEghNWuDyDHmor4cmJjFbdoudspznLSKchPUaYsRWbi",
  "key13": "3MAAmagJHXyesvWjCa92ZwBKrB3wXNLJW1KgH8RkVyGa4ZSmkSX1M36RLMCcUeyt5iWrvcMZKw5v2yy8wCtRktsB",
  "key14": "5fKSW9QD2hZTkUoaM9kBvu5JjQHzqYwephFrR5T7e28GkdVgZ1QEbWY6dKB2E8bjZkpoNCJdAimFwfaRR5AC5JrP",
  "key15": "2P5UnCWCKE1Yh4fnbh1BtAXQygFdUHdqBdEEgg3wjv6LcADiGtjjALXGMoSXzxjtUwFvxnENjf5BZFsbxcV6MMkM",
  "key16": "5d4XuE7D5NwuCaDeZRWp9BFTDfXp5e3SYENy7VsyS7b2neZLYULG4pWv8WCXYFduscqYPwZRv97pbmYLxenHsh51",
  "key17": "kN6Phr3azem7LQcoMH24L4SmCyP5cg1iAARWetfhAfM5xyJxteuYphLmPSKffGJwcebcjqzVALwkL3WVPcMRFmi",
  "key18": "5RsYSFcRYSvXkvsYJT137mL1HLBsaj4vwv3v9Kv8rUqqnwJHSnj2t8o6REaWCe8jxfSH9ooCd5AoUPZz31ctpQhz",
  "key19": "3GQXrHGYn9MUQc8MhBmfrjppfrT77houfTJNMiUHrBRLQF2LqLccZEL5NWy2QegRqu7bymsMMB9k3mKLwA9JuPX6",
  "key20": "kPCcYPkUHJFzx9iyoHXRne4p8HwTHN85y1oQRpq4jH25qPrrhx9Suab1JuXt5GN8zU3HDhVZoxN2DTXNXDBmEYC",
  "key21": "2PTs3gpLaSGxxtU2NXAtVzurfrvBPx1HgY5oqFvfQNbvNq2u16VT94GG3c6Ed4BBKsBBj4ac9rT7Rr16VhwmRbXq",
  "key22": "3Buh3mjuZWYZzEUF7USU7ZaXbVTz3N3TvhWJeuJdwVy6Q79a4hKS2jqvCXnfgZLpLtBFfvWjhTrU5DtDi2w7GQPe",
  "key23": "Ls6GZF6sHfL3RjDuLj39JHdiXCW4YuXR6N8F4JPaDLocSVg1CSohRp9tx1tWkioCcmb2iKfMMbYuoqsPCeuy9Z6",
  "key24": "65bZVA8hYutmD3GWjjavEphEAufkD6P8W4RGwNnkSNkcXgaX8omM735nHahrDjHxiJbLFzEPfRb3LyPe4fgHpm4T",
  "key25": "37Z6hvdKzGzy3JApybcbbyxBd4G2cwStm3pVLqfWoDWsKYaKftYLP3ip3sAtzzDo3BFw9v2Y618jCdRAjsZrDXzC",
  "key26": "31p473RKoWca4hV79Su7fqGyARzaqmCN8DzwNZQnCDQGkFGKzEMuYoZ24aMCrXMC2yDDobr3GoAaBFBDXh8CA3jF",
  "key27": "XTasHU7MbuwjAs7JE37LNHU1WLC3hT4bE1zdQmDT1pLeYRUeZfxuKrmfXTi4HYwTG25sEW13rSaJcvoddcPX2Rj",
  "key28": "27nihcy7HQgEAKUEFeXVftUpJTJwuu4z4LDbyKKuTuqcLDGoHguYpoNbzX8gN9zfripp7AJgHELZuXAjyJ9sWxhB",
  "key29": "5y5zeUG8WChBaszeZS3QpF2w5QqBFF9SD9Cb64q4kG9XfivUgubkDM4v6UkMi8NJBEtYz7XULs7yfa6HwLEdTDUX",
  "key30": "uV8tamLZPyCAdxcHDbFUFhpVSSyXa8mNNF8frppUsQeuumedAZijj2SMX5zGWdDetgPWSmGRzoMoDz1UfqLXyP5"
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
