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
    "4cYKW38qJh8v8Fd7pGVUTKw8xhQMbU94Pmf8ejEuFHJJgXGf1QaCmv1qtcV3whpvxRgm6PNFya6weE8L94bsQh2A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ES4bcoaJLPzYbRaq8icSn84RsDmTEkC81X6H2zuq3sNEB1ZnLubm95Y6VTbEc4inkdMSywJRuxLF5fyDkkjt2yc",
  "key1": "3aLzhPBZHrdBYkGZTJR3hZ2Wbqa4pZxuYS3ZPe6122HZ6gkfM13M8kGMW4YZgkeJomPTPpKEXi8giWchAv3YYo1F",
  "key2": "4Ur5ZQ73w7cNsNhke82K4jV4N7TtkxLR4RbKBd41XmAiw1f8Uw91nhVusp8PQDyHaku8WjwkCdMjHBU35RHbcw1A",
  "key3": "2MhcfHhQBStPCThAyX6f3hsT1UC7qDBcmrRivWbXCDoHVZM3bM1p9T4uiFmGU1CjRLvzAhrAQUTSpDZsGe5Dg4ew",
  "key4": "4b8Qde4XLBDY9u41etrnLLfmXEkqnxS3oRW8sRs9i91UhoniCYT5dvuFVSp95RErBqhqAp1hkLswzL8QoqLNU594",
  "key5": "gtTQyQH9rrnj1CMM2vYk28S94i1AmEQduGWZfPWhsWUcMfNrjynJaUaZyeceZ5Q3Ka1JoXCHzATkRay9ExGVDT8",
  "key6": "2xqUkeAPFZHZLERLMZaDHN6KX85r9XZJwNg7AyCBLAxNvPZTugZNJBMRMv7qYuEudvah6YPqwLSnL4cmx8RPzZGQ",
  "key7": "2mPecLvStgjzarLd5YTuwFEWP8L5cb7SP5ndCa1DpP5PTuywjhBjADbHZYYK4HUMsyNFjmYoi5tXbyyCb42CUY1N",
  "key8": "129iFU4GHJAHDM9rXNU5yyk3NBS5bdqFHHQDmQupTGRtH6btZ9CsS2g3cE4z4W5UpX19SsVtuQQGMmrrcPZte1gn",
  "key9": "3L7B2iqbAziEU5ojF8MrNFPohBcgm9opqekBuNWR2ajgA4kaScdkKaaHLK34FaAyDsm9fHDesz4AtkeBNJw4uVUw",
  "key10": "3rUsRqvHnT9rvtJ862YyWhpUh9sJi9AMnkq2Pb3npFBou2zc7E3q9Waa6LDX4BaXju4THzWetrNZVMAaCTLXwVb7",
  "key11": "2naxevuAYRxihfSMtFSpi4gbJnj5GEGZ8TpxpGnqDALTM4bxuoPW31Y5vzVYnZeMoFzNWEMvzgPDjHyrEQozzJmo",
  "key12": "2wM3EaM63tsBRqkrjDZvALeGEFR8tpSWoXTe5nMfUwJmdWjzn3tgaMZMKAe1zALab4EVvvaytNR8xFrp5zYR3Yaw",
  "key13": "5p13sjQaqaEjojyhXP3yuPkTTbv4Dv1eBw8n7852zMC9krqNV7eMcSY8txVLehKRBjwBb3bVqdaJedyuBismPCLs",
  "key14": "5NL1wZFWwrk2Lfn5vTTwreJTCopkeVs7j4gzXXAfnPFFbozqfJ4qERHZpL5Bvzuc8nVpkvDHMuGrn7EPHYbK9igK",
  "key15": "VNs4niyhUsNmnnjgdugYp4VV9XYnCAP8XnhNK4LcNW7gWM2wAeNgXc8yq1phbT7WmyZ4yaaxteBZUjHDb12GYQC",
  "key16": "5ehusWkomkAB2uiFUNsrgMSR1bR1zc8AQ2z5sy38T38AWsxoipSC5wCxc6o6C7CtM29NyNDJQnzuh3QcFykHRAbX",
  "key17": "2rDqyPiwHhuJVZwLdvMUR38JidNcRDJUi9GV9YqP32EcdpGW8wruJDkaLFajdpScpou7fBv55knvDY63j88x4Qqs",
  "key18": "5urT4qwczVVjN9enoJiwkxfJSSBzRP7CZjSba42zvsjLMphejRn84aCQidVPyz4LhckfbRhfjpqvdHTDX6iVNQkF",
  "key19": "r5yPxJ6pPeng9oqRJ4t4YsDfNm3ge2doXPN18nnmhFBXQRWfpKEXDnDgjjHFU8CiZR8DE4CgegDbkzx595jR3Db",
  "key20": "1bfrPPUSxYawGyz6KLpBZFTLP6M9qRfeUQKCj62USFF28DxsPvwK13ALxQGD6ZdrWkPXsSRFPzXFHis5vUBCfA2",
  "key21": "2tvBNDuNaohNLvxqvBw5eaCeDVjhnvTfaZEJ2hmWN9KTQQ2Nri5S6KC99oMVQZX5cdWrM7TpTzx1pnBGaPjEJd6G",
  "key22": "677fTspZdNfmCf3AUhGzELp1Ek4tCSXMRJXSMfS9QvVfJMa2CNfPhzJ1DTVd26Pj26FPdabm5d3YnYZiiMvj38Ay",
  "key23": "3mq8M8qbRyJDL1L9PNtjeSnr5YHv6Uhznf988SQen78DPFJYEoJhcXtUrH7fJfpLQDCGaY9UtXzTEqi7bSo2go5b",
  "key24": "5666VUcpzUCuoFYUZsDDspfnC3fEWJWWQKep62e5y3EQcq6NA6Exs3P5q9cAUhfDSRsTSjHPpCjJNEdyyWBBHvss",
  "key25": "wyTQLTPxZTr9iwyoxPczA6JgDPEvyGxzLTAF7caC1PmoZRbNncAT439d3eBwbVdD8aGKCrMrSV7wb7KtLuzstBr",
  "key26": "2gWjLGNjmwfwioF8BZ4rjUyXQdz3Ne7EAQGvMiGGTBgudNESP9T9xX2owWzk4KeSbQ7zPRh8xRfbUNZWNkL3wUJG",
  "key27": "5ZypUJF8HJ5badu8XeAAAbbTuQGF6oL1h8JPYgpjNdDkFHTNB6Fys5ykzRLZAWutsHLLuHBiCmNboS4qHY4F6hn8",
  "key28": "5MUfHkn1zcsNWCBVQhxvbUSpHSNCqBRjv4CeKp8BdQWtV6GZagDrBXtm8kMRTHKZhAAs4pnAWQ5RYsHrgmT9tuG6",
  "key29": "5Kyz159MYRrQbu7N4MQGdfkJ1VGpAZZF9ytirYkjLXYzvwbrhQ8ZiaFvQQo3MmeFoubFsMMVHoomJdHPhvkom8P",
  "key30": "5N6XdtUs6hr7taFCZgMire23KTi3PVxfG3XfYuo652nDM7FRuoyXi2RcDAiso3sK53cjzDtGhND7J7Pz1CYjWP7Y",
  "key31": "4AwcPrru9CoTSCBsf5caqiVFkBvosQ7FcYapzsMLZXZZmRKGvAzrnVwWeTrua1W4uAFQyDSQpyUQNkUL7ZvHCJBp",
  "key32": "X2uWWtsUh5FpF1DKcZzDbPiRh6GkgHK1PjePgprY1PqBMRV8PLMnt9aEQTX8wT9N63gJjzrGqkkv1NWvf1Nix65",
  "key33": "N8TjDEMPZBoV1pxfBgLWKCTAK7D5krWHNeqfr9ApwkR98XuSTi6Pbf46GCyJX6Tmbww7bBmdVeFFUfs3Gfy4u5g",
  "key34": "548ytoN2S6E8tT95M4duyNZVBwp34ry5rE2361HWgXNnexg8cRLFDtaxhu2aWxY16nF5mVboFdsCvyu17pURvunp",
  "key35": "5BsigcBqsmSsaAaRBsfqEkxSbAkjTNBa6m9VncFHguAaQZAcWZ9NxujvSwTA6UyZrVAp54EnKG1bugqJK2Xa1XLJ"
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
