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
    "3KUv1SL4wNpVUsbdXUP2iPJQcPn6BDpDKcN2iwNtrGiANyJomPeHoKJ9b5k5gb5ErQbsYQMM14C1yTVb7GZaJNpk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RHjwYaVEd4oczwNEdstFtXRn9VcZPpQVDwU8v7bPvJ4EFTVnRBNQXXw9GMaUvoh8AEyTbBLV8LV23nDGP9dYeCv",
  "key1": "4g5uyfmoWPwrRTgy3jHJHumWcyecDSEUemDQ2P9Bmn3m4X1PiBvZoPo3syhdLAHKmyF4JnQfQJP5FbgLS4n89izj",
  "key2": "4asBeyMXXkp9QgdU1zqntZRnWPK3i446MAtpU31dHeweWhbTxYQcFkyQn7Gb91PetURSRBB8d6FuFLSqqJvz52BX",
  "key3": "2FhkVW8yDr7ghjRrWxpt8C6pK2NeFThGuGT5EuSzta9KX2mUdC6oKdjFqAkfdAwN9teyAfGJ4GL1oJubLbXQDsVg",
  "key4": "4YLNmwFDu8iWurTXCXN5eyqVkbXewjydQz4w8RrWqfnVcAzpZqs6p2zUmrsKGPs99vRtcUw33kVnFoWVT9wodvLQ",
  "key5": "5J5ce6uKzqZVzUyYLU3udRV3wcAF5XX5P14qM4nbBB3exhRnkDuL38RLssY1xaSh2MSTYAzbiwVimCHgcu4JtYK9",
  "key6": "5DfxpmZhawvSHYKP85nWPmFMf8rGSfpkp4hRs13My1ZMkkUci6srgG1oaJwDTwDXfvpNKqxK7CVxUj9nZCFyu2ii",
  "key7": "iT1UFPQgZfVRjuq2uYntxD27daDth3DwkUP43wwDYQx9Q2VfvFX94nwVu2tRMCa61cDKrEwDv8g4Ty4ovsVng9k",
  "key8": "4cQZuYg5TEm8iQA7RuutVTnYW9HmyhanrtKp5GhiQ4y9JSV13gQZF6TbSK4DteVqnAP8Shdn82GQSM5NTos8VkCT",
  "key9": "5Nmkm2fjsu7kipMPPFK41PtxncC9qWGLSkAvjScBjjEY9cLvDiY4CmH7vr2oSGCLoxGmmvtePnKAwcxoinz3zPAR",
  "key10": "2QoLppn2jvwoY9Lb9ZKKtnoAnnFqqdQ1XMxybt2dFp6iiUSsZCh3c3gjgti6JhB4yRiMN1Wkgm5fEF9d4ybFb7Zn",
  "key11": "49be37Sw6w6AucZKTgSugM14kiKGLHAckEGFM7wyH8j3CTyuUQHghCzG5zRuznNLNh4ToL46ruSByWu8u9awP7TJ",
  "key12": "2B2LJJP3HghU2oo74KmgbEXyaDqfLRxqYX7LVFzqsgt6vyoesLfahqWzK8p1SUjweSGt5qUBDPTGcucJBHntgRbH",
  "key13": "vuAsnznKGptLA3XnpHKAoMECRykuNqwKeesc9JsyuLAs2SkAP6gdnK27Du4UgJ7JffdQ8MjxZvvjoJPHvdZ195j",
  "key14": "5Y4X73PyyzdmDCR8iVAa7s5oydhrSntSfTCCwaNBQENQUFN4x4pQUsEhRgzHszHzz2tFNf9822RuSLLT4oETiShn",
  "key15": "3H3KsMNkNinDRRWfkrfvkE714GSjxpfJJ7vjKAM2XMmYpnyyptmMvcHZdMU7Sq6MJwL7Kpfc6FdwkKiGA3akT7Qa",
  "key16": "5Xs6izs6HUeVpPGFXwRS4cmdULtTH4pEviPNuLKjSUG6hS2wPH7DBCmr2yHGZ4w9DVwRN1re9163Jq86oPKZMLLT",
  "key17": "5rkWC3XwfaT9azhoSmRZJvargjGHMFwgrcKmLRe9Qh1y2w3qpvXNdmyyxo6BjaNC32r4sgPvtgFKUU4zAniykVsp",
  "key18": "4or3wxMpmV3oyuVejHVE5zXhyQaXT46zYn2Ac2VYthuxyUo5JPSq4pbvAtDLVd4tPiYXJC7FzpGDtvtNExggpqyz",
  "key19": "3ftjnx1QcWfWUiiTcFoogbXVpNsBjr95qUfo9oRNF5fZtPjNXVJSq6swPevwh2utKvXgqKakxo6pDPc5envg7bRx",
  "key20": "5ySRSit78ix17PKdfELzu63uvY8xAWzUDgELNatuPy7rwqgj9MgAWznsTKkNSNrsun9RfrcweW97mK1ac2Gum3u3",
  "key21": "5N7aXHM8EViYhi8ucek3pbMEDj21Tor5k8DciUQqHZPVWCHjsMrqRVxECpuX2zN6ZgfHQU2awrabmHqNJ33eyKg1",
  "key22": "5MCvSrqK4kAHELCk6Qz8EwwSYs51CUu7dgumsCWTyUDvL3mGATZ8uwzcUoETfhsbGJamDhbiECVHebA8bP675HGG",
  "key23": "3XknSauULPznhpfw279zwcREMsEUwDMcw8AEd2uN2auBr9AK6UGb1x5acsGg2i94utAyuJ5KTKGVrhYebK6E4o1m",
  "key24": "3Qrv8YhYkGmngKqidH2WCdsnQoKaXUG7qM6xAHo3zNDBPHbh5bD2sifkTK4LDyuEe9Dg5x8D4u3EdECBXnpmExco",
  "key25": "5v9PTMh427rv9a65MVVHuEt5rrXW6qxQRiB7ZaAtBJRy7gZ2MwE5f26Y3jJPn53Cg5NEAJkVzbKc6hkvToHaGgdB",
  "key26": "VvGjidCtLTwpE4TsrcEXgjJsh5CmaageejRxFpBKr2vb9FdwAi33Fmx73TS8axtzzGKee4LmyyTNYBshDjTuXgd",
  "key27": "4xVDgauVDUtvRJLJ29yZQ4JD9msDJZj2hyU93vLzpf9rvU1oBeKeS7GJUHYroT11qNGNzU33iuXFCy1J9dCSnSrG",
  "key28": "47vgFM68RhhDtDSaRAyrZ5wNMpwEWT65HkzD9Rx5CZR3xaPVkg2Un7kDZmdKPFbHsoGCxvBUrSs7f9spxMdwgpRg",
  "key29": "5ho9zguXB7dWLCF2VjWz1rbWRMZRzYDGFKmMnmGfbJUxzAKRJwV9jrsk615f8FvPQEKb4VT8q8d53e2oMCLnpHec"
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
