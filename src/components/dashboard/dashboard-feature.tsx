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
    "4mt4T5Tm7nMyC3VWwWdh9VwDnpK6TvjZWpUWcRshWG9XZr8UBK5p8suu36U8pNUWvedqxjkLnhVMcySkQTTy4qU8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BCZ7gLpcsyFmJXv7fheUi57MdbyaafxtkyPvy8qjCPEDDTQ1ZyHZ3ic8xwSnXikPb8TKWGWsAuGRpGNRvUkPeDY",
  "key1": "5zdgjY2yhxzSbTNxtTC8F9nxN9dwMLJCeJ4EUkWSujRMnZFTLjJ9zi99nmZYLD1t6owPH7Da5GCuYzLANtYfCgEW",
  "key2": "2K6Wk3FL6dbp9qyxzjqi1MLedVqwvTZ9Zi2KVhAyrH3vdK7gDPpnwW274MjWCbGqqH9U8T6m4JQeCdtJGz3JApec",
  "key3": "2d64YKNGtQGkZSSz5TqwpG9JGeRTdgZJ3tYDgNb2vJT4Tc5jKdRdcJPnknSHfvZ5QmQ2wPcvAN3uLUTjiuwGzhwA",
  "key4": "aF3Aw2edHoBjsQkXH8MRVSQUYYBBfBvXqkU9vQhdJT2wKY14FZgScpkMcX3H3ppJ5WDDWrN1jCdV5L67rCoJW6t",
  "key5": "YYRzmqFPRWQ2nheRfBMVdJ5zY4P5k214GVNFfF34x6xn3vZDYPgGeYD5WjDfng5KvbuecGV9t1mVkF3zVhy1dhj",
  "key6": "2HiLaE7iyT2xydceAGm22oNPRfNf3dNsVd222aHxiGLPWaQmXDi1KC1KHsBLnKKnuwNUuLepaoZ4AMWY3vsR42ec",
  "key7": "4pCvokFF2BLYbN24ACRJffkErkEK7fiiM6zBqTwi3xLYMQ2hJXxmGPNc9reypmxD3jSGtYnMV55mfsLJ7p4zAmWb",
  "key8": "2xy6UQitghKVYmK1RBwyMydV2d2qPYwjHuVe8e8avdAXEWJBhTr96NnNKiB2WKsYUoBFVy7qcuLGDcPSXt7dJHkq",
  "key9": "4nbASJd3MEAzTgcXQx6er7CNYPBz6PivRfDnQB8D4PZkUS1hP9osKpdo3osijjszvKwRyu1dnQp2XF9WLoJfCSHX",
  "key10": "5TJCUQHXufd9UvTEd4Kqcfhdc6fyoo5UGMzhSY4j3TMXUVLNwRXvLs4AD8TcQFNkfkAvL6Sed8e1RWC8cbCubwMK",
  "key11": "4qLEeNYbg3trMYWqSasreyMLW7SZVzuQfYnLSDCzHD7cxiDLX7Kz4LLAMxtBrq9xhK2XriLnwYeTpyBzTkLNitej",
  "key12": "3ZqqqwRkjivBfWHVgwAWPeacWVSkMKcD84XzX5dSVyk7dKMCbbiiy9wXFNDN8cJde16WNaeeYRkfns1Vkrf7VB3Y",
  "key13": "G4Gc75wiPqGwTmKLgdXYVCDXFCxegcNmZEdT14bnt6ujgxoSRjXQAp7uNTdB89KnqobGEtw58oEPcCGWuTpR2fB",
  "key14": "2RRkgzs3EF75MJ4Sxu4J2hoxPiSKrAsyvQLX52rhn2vxfWNkqJ48kCPfC3vVRuYzbuwbksDS1euxzfzAh5GCxK2a",
  "key15": "2gDeQp6PfsPyhMis1ip448at2CAXJVLFd6CiMtb8EYguYybeLvAGzujHWLH2XorzvLtwQG27vdE84NCGm4v5YMTS",
  "key16": "4nqiGCPD1vMbtRgQqpG5KafmyEQGK1GeJouKppKda4i65nkcMP5Xadu7rcyhJQqDjcEJfbGGUY3mBgSTZydL4xqF",
  "key17": "4vr33bvH6B8oJcrDaF2pRxhc94zK4b6EkcD91dXXAaz8QRiJKsm5qA71YyZuEDigz3LsY2yhJC4hL8JQLouqK27R",
  "key18": "2vbxv11rBpnycGPduZS9fJ6NKUprGDwBM1YAgjRTJ782uHNew7V3Ld6LCx3pUkuFws8VV9aqMyxYAhqZFDdBHWiw",
  "key19": "43CVMzmHzYDtF22tFtmNQjdnHb5X5tP4u1qpTAXjmKFE5ANrfxYE82aqbi3NpRV2g6h7md4DZkkZWDpJraPxy2NA",
  "key20": "KJQyQD82JbEbhTGiaDEzcNCBopnAtirsGdeWBNxf2cvFf3B8M24XxWZw7843w6fcY9wwafetUbRzoDhuEofotP6",
  "key21": "d5tXtsTHB6VqEWz9Be3DgwkQT1gJyT2t2LehamAiDv5QBjeF4Lv5fx6RkoPvk3n4dVKnkcbENe5t2keikquhnyP",
  "key22": "3eW4BmQN6JhqszDrYbbgKtCccfPj9VtrinLqZAjKLdJcuoMJtFu5jWzfVahvuwmCVwLUebScgDsERok9qytBXviY",
  "key23": "2ftUJgBdso6ph7uRFSXoYR7U5nFzonoCNPLp4jxNvQEcjLofNXjsLgtyeuKBasLXrqATedmUojbQGjGwaabeCEPi",
  "key24": "4GTENVimwdqNcEw9pnByQZkCiZY33oHty4e1sj14PXB4ne3frz8mhxw3HRRa42F8UGueoEjWjcDEzJyrEg4fcHqh",
  "key25": "26fn8faayitTGGFrNLP5SiEmqW7JABf5R5wSjeomA4y9pRkMcCpbvquQZZHKbWR7hiqa4WY6zCp314QwHViCziyK",
  "key26": "cQR4nYDZTLTUmY5ZGqkYq6SiudpQ7XNPNyRbTxMnencEG55RVjgk4RbYyBLtzW64SXrKQXEmQEcD5peVYxKSazx",
  "key27": "2i6dBFTTA9rLb5PubuuTC7CiANdfPbFfKtSByCtrpET3rQRsGEKC6NHLeA6PZC5tgR99NhRrZ6a1igiB9MEqYxVY",
  "key28": "YU2QDFhrbeT8hZyCG11PobSQ1ei7RtbMfHMTS81F9jojcdWC62FaJcxX1tYQ4h7wFH1i5djTfVpUGPGPcexrQ1j",
  "key29": "5j7UbttUmHVbpMgJbW26iqARgXdR73s2bDq7igeJnQTnfNFfXcHoeCqmjErqiV1mxroFTnu3kcDfPhBNtnXmRhsu",
  "key30": "ZH69npHkcVfPfevHHRrHdmxZq2nretuJkwTLyqmyT56yPnuJYP1tqYFACHe43X2ZjQpFvS5unV27JrjZU5ey3VV"
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
