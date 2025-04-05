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
    "2nUyM65DBy2VMLa7bUm4pZFekCLTiZSvZ3EbYrwLud5c3a2FuLt1bE4cS9SrB7NWLmPGiSgo98JgxHAegEamoRq7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H7w3dsBemEMtigTC7xZ7des358RDGuABTZeq7WeioAxHe495UShkDpsxvgAPoS276uNNoZTVRqf6ck1JAy3VKbt",
  "key1": "2GgisdQPfeRHULrkFg7Hz48wqaCWC8dGjcsyiHYAYc8NDh9xu6veJDg37qM9c9K8k7YVxCHisKBTjYBkFc168f4r",
  "key2": "5df9qChGuMPYR7D1umtwLkb5rDihreZqSVbi7ZG8TkwcGyaXXkynWxcet5wiPXirtCi73awBopKfrKz6Fr3EsWA5",
  "key3": "3SkwKgemHKdMFPJjNagB14QZxZDvAhYBQw5y18A8Ldqw6tkX1xC9BvFGxkBYoLUx46WfRmbsshfmoCzgbzNrPj37",
  "key4": "5SWTKexK7CE4Fh5MreFAuawVHekUcGdsUjMinmZsjkPyzEqDd5cVbRTB4j7oymHBRr286kveNvCv3Ctt6xA4dJRk",
  "key5": "3LskznWiCCLgLqTivnP8icZuaMz5p34f29SLmMjnw5FjJPt24CFEJT98WTTz9LFVJ4Y5oX8gz7Hpcw4JydSKruRi",
  "key6": "2fuhDVqyfaRuWQvDnG2BeSyXzJ7bkAL1g3myAQZuLAkNFb6EDVtKLEVZ6Dz9jvMwCfkve5r8MWBEJCBY12H7gmjt",
  "key7": "4siyfDBBrRwQhUbV1CkBePqH8Lfi5WAvdubBLFjrqxiAnqK5XP4SDRZkmhgrshBGz7eG23DV36DTrGzVcUkknJyW",
  "key8": "5SAdzKSKr4Ryk9c5vY1pbUit4YikAb97LFKVTYNfbfdBf8Upq9Kt7s7LaLrM7gvaGfSwCGcYS3qJfNXyA3AbhnSH",
  "key9": "q8gNaezdbysRejusW7tASaJ3dABWPD4UAz9bAb5MEiTYbu4iYbxkRbxHLoJwNqL97P5XTWXxPYrZyM94XfZDV5n",
  "key10": "5PwQdTY2x71ax5TxattYSiCxk3ydB6Kv7T7cFN5kV8Q21EgmxKQAavdNdbviUyz7EjHgywCqFnPgWz8k3gQmfbz2",
  "key11": "5f4XbBthAxdn1ZtLVdhHDE6t8u24scXKqznwxNAJBkhLS8goSq4LzfiB1FYf8AwTndQYK5ChAeWFK1Aes4mz64vw",
  "key12": "64HF5Paa1WnnDYRMqjfPZ9kqVgfHza92qCsxJv48dAdFhnFA9z4LPVbvqQiCCLqJNxpCn2ywwJX6ofY8BVwLrZQc",
  "key13": "5fuyEUgxi2YSzU2k4sFeEvct4t1LuVHRU8YFEdv5BJ3McJLZoWDR1CSQEhyi25VBLoWWXCnAdYoBEfKxprr8nsKv",
  "key14": "3CkKWNkGXRQ4xUdedkD5vdmCPR5dwxMUJyMxvaizK1HxJYDhdgB1BFudewTAHEpyWnZfbvpSTcdArhfQD15rHALS",
  "key15": "4df2kjHi3GgP7XhSBw3J8eQppdfvYmJxZdHmJU7qGfXkgfdewUyF8QeXMgUuusVW3pE4usjDm99jThJVgCh445CY",
  "key16": "2X7AmfS4evtrMFP2nEzwZ9KevNFjcEXN8x6D2GBdnhwdXzwJfvdH5uJ5BokSPZHc3FyMJ7DquBTFoWe64UDXpmcx",
  "key17": "3VGMp35JRSuYVBuxNJHSKmxKq3W1qfDGMknzqbHR5rvDqSopXdAEQ4D5wjqb2QpFzFk8A1VV1RRyZ2vceq4BuuLp",
  "key18": "4RdRiyVDARPK8hidvteua5212PLy1UuMQMcgsTJtxB25C48Bqs4gACQ5qLE1z88uEhcmpAdycniHifq1MTEhk8J5",
  "key19": "3mMJghzJA18HjhVQinee11aor8jehu9szV1HoSoGXAQy3VkWNtzAESj7THzQjNypo7h4ZaKYPznrg9cDwhciDLP8",
  "key20": "jAbmt7SKptkHmv1QsxSSm4L2yi4dHRj5CoXPWtNTgH8w2CPFH6S8yVgH1A67tEBnSUcXkkambSSF8XwqV2RbtZr",
  "key21": "2Vvg2UnoYJZm2EYrFja1wpcZ15uHVVoAM9LuoUyUZxUvyAgZhyymZMGaAAGKFQUDBKef1QufhS7VmL3eZxdEgv8u",
  "key22": "6iXu4VRbBxUd55gjyULnJ9w6T4cjsvqYWHHRuotpQjQ9HNs7K3XunMbYav7qWryCRs6yTmpfeANq15uu6EVU9Zx",
  "key23": "9CfBgZrz71nh8KPx4tDKngyTphGUfTsWUoaYBSneWe8V9XsZt9bs9SQzyq4W4tMC7ykBrLvpxKhF1MTjieLmmR9",
  "key24": "2V5sXeXyKpDwApYGd4ARwwyfwyoas5bvNWxXJrW6FTezNxF6jKvtMR5WAgKffoLBtTUYmNeyU8iwRQEvLawPZuJQ",
  "key25": "3z9Tbwqadmbchn5Jfh4V9fFmjxdSBnYQNCB2PUmwRhnNbFhwBdKaXPvJfFSpmLQnDfnngGKCg2HqJQittUW9VURP",
  "key26": "3rfFHpWbkdf9axJ1FFdi3HqQfVA27coFxVwUjcjZAUqBsRkjbeWXTQhbSk5UuDLdm7QZ8xPUySoWQu1cn8SZjwJG",
  "key27": "2GTGv92ir1pUzkcMuBZ5r7X7zrzsrY7C5rXLgzNixaQoNkfSFcaYp3q15yULoo1Kh5nXvgnvJm7uidaXoZ4tPULi",
  "key28": "4fbNgsgQCvus2xzs9CTa9ekC81DkcV24yWJjLYJPe2hWhJF6iNf7gCSCiJXK8k2UZ3jf3D917gwDn6j4SHFBH4hW",
  "key29": "5r89VzJMxYckm9m8fWLd7MryDuaNLGob61TqBTcwRbb5s59srFsRVepY45GLUM3kAYGiHHxFSaY58ko7U85NTTKf",
  "key30": "5gMLQsW1WoZB1o696ZtKAZGGsiNV9j4z67xQiSdFK7oumQfkqvm7kY9PjxNeUySnXzofFu9nxEugySVJg1TcYxdL",
  "key31": "2B9vqYunSkP77GbnbhjmdDU4LQXpjQjdWQU3raLMHNou3JhHwfjBRUKd8NPWEDw3LZHRJgbPK5xThiGtuAZ32ag",
  "key32": "61WrFGdYdSK3a2phwBZrfE6iAC22twnKh8uRg3oVCTS2BVVKdZJkWhNEeBVFaEwQMywqdKKQBNFQ3FEwakmvgqfp",
  "key33": "2gq1kDRymQv1dspVhoGPGpz2xn62b3HfPxTfvrhVmPWjkNJpauhm9ZHz8Kghk4FH3uJr4ues6oCpD791dzjH7Uue",
  "key34": "DxpH5aBmWwzLnhtNCjLRsRYCgTurkM87aVwTNN2CHzZykUWFsCUavaedgh7Fnt78B9bSyMBhBKQxhW65HMuigRZ",
  "key35": "2iQwpZBJMcNSebctB9Te5TUub2EMjSeP4fXnKdMsthaYeoMkDTRKpoD2dSb5wrTSRTxVDgjjqyeUCJcyUH5B4XjF",
  "key36": "2mxcG4qR5wdcJksbKXT8kFUbwPDAc3jcXcFdgg9ZapP7saSe6M7e5CDoHFY2jq8vdywWEfhQxUCrN2vD8CDJWnLv",
  "key37": "2fPi9SJgKHk8ZoT4awHAYhjFNyfBRmHiCfsR5mH6vcXzbtMw2K169y1WZJa8v4Zvw6SR31o8n7RwFWytC8zNtbJA",
  "key38": "2MmZ6fYjFv4cAkpB3aYjC8gTfYjLGuYro2CmaJTmG122UkF2swWTByTAYKnr8rxQQg755YcLvp7perX4FeXCKwZb",
  "key39": "3bsu4k9DakYYJTzhJm9ja8N3Wwx4QT5PMyBhHoTLr6WHBJfKyMXX8MMdNjHGL6d5EMWRio1Hc3WLTztm5tCzQChf",
  "key40": "22o4A73pJeu2u4NvCFjHzbjEymZctDoYbsh1FMVbBKzqMaEeBXMjZbnkVgUgA8EWrFyh6LDEyL5Gra33uiXSvXQV",
  "key41": "377Tg48CahZ1G8vB4cCwmawK1TYJHRRbmjFCp3GJpUBG3LgCgUHTu33xpGFSD44h8DzEMCA6J8EEH5ZVDQdKEzN2",
  "key42": "4M1LwFxRiC8A73A5SYKzJrC6hYwvdfJ91BPPN5uAvBcNFdLrZWEDzcssFxo98T4e6vTasiaj3HWSa5ivqWcX87es",
  "key43": "4mdwoy4hD1VptQ6ggHvGP688XhEyqqTKWnYra1gsR9YwnaQorzUuqapq8TWNgiY2KBiLo5VvRDY5FnwKaPXocXTf",
  "key44": "4qfKN5AUsFghmwYULABwJ78zNF3WXfyivp6gxRGpF8YwjbxTJp1MScCcLyBuW3mzb3EDxwgPR3EAaRk1tcEazkmi",
  "key45": "uJ8cqu51JmxJiikJ9edS4k5UMod5s8aWCxG6nnT2uwou7DFxqmyu43azo3bZ7pbVMgVbZ4SxYMppMDTNa8xBaLv",
  "key46": "63coubWxaoaUSwVkT9AmwZ1Lx4G8yaArKmcTsW63Sy3dEWg9x5dYPeAc1AUe3EYrEypoqZ32R1b7kPxKHyNmmrHZ",
  "key47": "5rdazhaVpgpAtcPJvKaw7jkddMjhimmFEe4YskW5H5vZnYsPmP8vM8JAcmojQF97WCaWBoemjNBea5UECGUw7JH4",
  "key48": "61ZiVNq4LgqzdkfQznGaafbgb1bCRLNWX6jLsCMjGxp2mfETC5iw4pJUuR9hxNFQhjq6x1ppoNq8WNEEjvkoTbEQ",
  "key49": "5XuzgushKtoYED3NSLqspspncCNWT6fnXE7TWceG2XzE3H9swscCnAAjod7sDxPmpe3SK1rJkmdYKWLHqUghJtXT"
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
