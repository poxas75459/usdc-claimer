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
    "2Mtdh43H7SqSHAtRrsEua4bom4YrdpBn6pTYppEnag7VcwKYytAm6F9koUAwAEtxoFs3bnpA3pSf6Y6gzJPHhfku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KdJZHxmhuyg16XcMiyuY8ipdU56AydSbNuXaqpnrYmthJDJqoKuqgihPTqNEmYH2SJcnWh8k25ugN9G6acs2K2K",
  "key1": "sMaVj9yKbmrDEzxNPEJHZUhXDGoQ6xSbWwhA9fuq1nKG3gesrpkTC8nSKWQY6vyt5CLvCW4HaN9BQQpYtyrzaUo",
  "key2": "4tMDkbTKX6JoxTVa5ACuTWsRyE7HFDoSFoHNPdsJ7WhroxGSpSm3r3mxwEXbaRZNz5z7Kka8ycjfRsQBSZumy5D5",
  "key3": "3hUnDjgrvyQHJqZuM6TYAxuZdV29h5zXzbtBsUP1TSGAcT8akdqiLKcuFRkZuy819aUYVXqsXBDYd4S4EU9VVybH",
  "key4": "29dGaRzoW5LyApdkCR368f9LaD5hsSQk1Eb4pWrgWeVCfeGARBNvUWgVe45tQUbzhq3sxoakXnBzkDMerdSvcAbk",
  "key5": "3Ua5qVxRJNo5fii6YPDQXatC6D7egLMmE7Z88NtQ6GSWGbooMiRE35HzFB6MpLK8yYcG2CCakbZQQWxQdfd4Ck6L",
  "key6": "2YjEjBdLe7rooqAESNLa99KepKPtissUv4jdVo38e4J3WzgLYGucYQauB7ADcZo34DU234fyGW2pBondAq9UPGUb",
  "key7": "4xUqPSP4cifVcwr7fZQBg58qhKp5KkWzMuddHvwjqS4aG2tAWewYDTqvcxdS3beAapVM4pfw1edtgqD7PMsPs94g",
  "key8": "28b7VX2gSBzJsWGzsSMVoGAXttYPrwM5iGcTr2oT3nKCECsC9MzR9ciaQkcFNvMu4Fv3iAyfLoFw9DY9zCS14weB",
  "key9": "2XygC12z1NKc94oYcE8Z2qsNTP3sM15eYMHXu9prCWpJYNSc1S6FNJVvBvymvbz7EpvZP2Zck3UB2kj2z2QSMMwT",
  "key10": "5Z9G6TmPkpc2fuc674zupZ4y5SYVwinJBAzABVv3XSTWXhUdFWTnD4fRt8aEtZ376F8njYF8V9bdLXRW2pKyG5Fk",
  "key11": "35RFzBtmsBMYEMDFu583sMpUnscpc6gAY5AWwAtgLTNVXMd4ga9aGNx4GJKthyNcZRoWLm2c7QwSCKCGKQWbNDNX",
  "key12": "4XwpnNT96Yh6f8QqHZixweeSBKkSGeEXdsuEgv8kTW5tQWGnnDUpRzhXTwdVR98Vo9cXdcmvfyoPbc5YgW5BNsG8",
  "key13": "2e5ed672fez6ypuK7njLVY3PN5ZAGUfhqvZyhz1W1e6A548YkjDFWobKYoMmiAifE7WyP6wtViMvf8t7ZHzKKARR",
  "key14": "4t9xGcTD6qAsGVrysqeU49vy2fkrPTEfLbSE86izgka88NG9hMrbRAbziZqTPqoG8X8JN9RLXFEPNe9YXF4u4dfj",
  "key15": "2vSnDGDir4M7V9wqy6gajxL6KK3ZNCMbbUH7r3uJhQkH7ghd9gAvxj7HmtNYyQT11XdHKLsjD2ZzRg7a6wEDW24L",
  "key16": "2R9Z658hEWPZQktNWKqXN6VMaHaaBhfbr5poQHH5rmaJwHFhUTCdmg5WbX1BfMsumwyDi8iMgLYCgGoatTdTTBzF",
  "key17": "2hwHRBB1jP8tQWYznJ6x54HSNNy6F9H5Zsyjjy5ukzaWTBkA7b6rfv6krE36MtgzsqUqdHN6iao4Mm5jrx9qKSNG",
  "key18": "5hqCgQ8q9PA9UoJCV97AS3p4bdnjpVYwW6GfdXASnK5FgqcRKnhwsvf26TqYqekcfgprAdLVzAAGgAenLW7C847o",
  "key19": "5XEbYFcPV3bycEqeufQtp8txC23RoGxNqKnSYUfezFv1yiEUbN2Rs4bEijGNBg8zw5Terp5pL3dye47nA1dxBp3P",
  "key20": "3aR1tcfjZyUTpCThdsA7rLBvhTFKzJB6t3AYgsCuH2ajBGYxWNdYXo1JDfCyaX2drJdqBkUiSyKMa48LaneHsMri",
  "key21": "4pba4YYrCTyBops5WnUE44npa7W4wAyBsEcybb3Ah6XdiGEJzEj7UCtYojanUXVACtDEiApUWA2nHw62DQJ3gBsR",
  "key22": "3MQtKjicCkfWDeJAa1vmei3NkNJ1EXNayoxgRovnitPEDEnAC8ftVn4dBAsRyVCxgyckrwxawsNR5jimT24SqBSH",
  "key23": "4qShumT1aDgt9WnVoCHj7PxoveEWMvkGRZrxypZceo1XETnJB4MMiKL3VFkmh6rnb6CJEJDgLFJBTtgR1SYooQj6",
  "key24": "2oPUUgNLeHqDn6w7GpoijQqxpZ3GNz5jzhLMVdbbBYbg39hsfWDBS9857SaaCL8Y1w4XeWHVpK6rQRvHDdWJAsxw",
  "key25": "4xXA7TZDV9SKBQGmpVh73oCKjY3GVrBvxf85VEUX6gw8jY9dDRM9FNXZ4VY9f5o99pZVhphFDFLAw38bCReu2YpG",
  "key26": "4QA4xKBTfLmSKnHemc1dHQGjR9oBFJVVicfYNZid2SZv2NeYLV1P3pzyP3ZAXda4vjQdBLdohnTRMKhNFx1ApHFn",
  "key27": "4Sw8UD4F8fek2nBT3gF9LuzkA5A7zfdadnUCusLQJKXRHhXqYXY5mpgp7f8KKKpRHsmZm4Tb12cAxCwbWwXsFaAA",
  "key28": "4mn7w9LYvmZTqxcEgCh4qMS4U7xbG7GydP6FLvxTbLmjRB4dSnomwZznrKGvBPDAWM9nEVnpdw1LMzvmj99gQZ1A",
  "key29": "2jcWDT22bt5DJsGeEYyrbvB1tC6me4nbgsar6SHWDNC4Wrjfyffrc3HFijWPSixwKwYr7S5b9uzYPVxD5VJFCqoC",
  "key30": "TFyBmuCGV6TeYb8NG7Z62N3FVejaSFo5teTFuRNkaiZrKeaoHNL6ena8G8wMhGwbXsfaDY1dDRXZ8TEzhPAjSDS",
  "key31": "493gVoav9HgEU1LyTJasphPWpHb9z3U8qDQR3AArTAdLcTemwqFRxsuftBhJVSC6ptAEG1BrwFscLYGxCDSPnGCq",
  "key32": "bKY49LfM8semekYpYpXRgCe5ciMJrT8hE5PAET3XFwMy9jrpfRCWXY3TzEhTekQ27nCkNrX6VgNTEGJ8VYH4j6X",
  "key33": "DZu2xKc7ycPyLUtFvkFhofHKDmPn9bQppkDUYcGNZonaUgnkH4v9L3yW5p9w4EsbXe8Mec74Ho4eZWqcJLX9Bws",
  "key34": "6q95DAd1rRD3gCEFRnVCQ33yq5RGMu6fjdwyiozqbBSNJ7N89eLTfVEC8VkSHHNkVqk6Pzt2VPfdAaf7PSxZCVw",
  "key35": "3DsnAQMApAyHvTpcXCuXm4mn24zwRUs4JbCJcocytpDad2A7dYnhm6ma7rmrigUGPX2KeBPBU7KEYAQZ6wQF3QiB",
  "key36": "4UB8KfFzVCzkrXr68Mn85xX8c15GyJkJLhGfTcFNgyyzSA3C33jz4v1S8MsTJLmMLRTyqhSPzpKvmHMLCyagJCur",
  "key37": "5XYwVyuTQoyikk4KajLYM8Q3PiA8UhcDsyJ4F8JVzcvoMrhCdNxQP39s8SwcmzWtUwfSm31jz6n5To4qiSYX3VgE",
  "key38": "2RoWKp2C5ppzXft9vdqc2WRNs3uRePYH3NzSxuJgFVjeBwpmmPY9rvqrYdCQLPrvhJP94eBZ8JXx4K7r5QvAkWns",
  "key39": "5CTwFo3YRL5vQ6jC71ikiRZLTU3oxrJgJMKMVQtCo156q6ADdRKyf4BHieLr86NC47cKzJQsG8gXrenhL2N9nLy9",
  "key40": "3fMGzkTZaDK7yTY8JTraBmRG3TkXXCpAwbZjfqNrtYNAw2v1iVmyzMjg7fe57YKE32Uy8Stt7o5Xpurr3anUiAgX",
  "key41": "28kR9mu65cAmQZD7JZLa1W3vAjBJCk5iiQqSB6Xg5pcwGdf5983k96w5GsAVkdhSQxr9ixUdTSMhgCUW2yxW7oW8",
  "key42": "37Epi36RPrzS6GuqSPZoNJSkpSNCJZY8r7nVYQwF5ZWuiyr5k7pY2JzhNmNZD42xzVkYEqRWeBKmRZMezvncvsSc",
  "key43": "RdPnqZ6uohKcMS4H2CQtxRbbhULkjNGjPyt8UW2UjJ1AKRpetq9ivioK2rGRKLKYJ9o5UfLD7XkSDeHY6F61BAK",
  "key44": "27Z12RRrQKAf5JhS1vrHmjf4fkeQ1jCyU7djq81JnLmYcDtWjNqAAHzbJwbHCNJ1cg9fJvCvbUfsWqJAtKwLwozs",
  "key45": "a92BwfWqVTFnG3jG3m23Lr1aK77YLqwRYjehivAXg5ybNS7sEb9rShhS5k4U3DLHJjUrSnTffw9mmnM1uMzztSX",
  "key46": "2hVXpaX4xM6QyAG4dfW3n4JyjfRSPoRygMsxTLFQcmLCNjESSNTf6oqq5aYETgT6JGtoWfLRJDK2PkEnBucw6YAk",
  "key47": "NQSHEM1s5yWov7D8SBXrfxTAmFATpkRnHShhG1iCcPXUYpppDSmkzYM5YMemLGBNE6uRVhGdBHbKTL5ZDAnGpcf",
  "key48": "3VCYbNUKvfduYnyLp8zNJjbtBfmfSSkvWMZYa845tkFef1Tp3fuhHpRC6RUSi3LrbZmKarjqbxCuKPz11og4cFAe"
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
