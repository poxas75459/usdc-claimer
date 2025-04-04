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
    "5zdu7jMpjMUe7vA1edAk7doCwt11gT9khcjQpHfzrcut9LgumnBy3vK7VQYvffJzBbZzFa1TTuEn8KzyHH258qXa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49HPump5NfNSEYoNjR7Haxu8vauZ7trWFr4m7AdEuzfuk9cByqxhWB8wecAVMW3iXDkzc4nPNz5ND8C8JuBmXJBH",
  "key1": "2nMrXt9U9GEer7DWA7KRboJxBmRdiJSsESr3tFEmjMSzxG9pnohzQAcujsVPkC3V94EmbEswWBW4arKoh4Bm6UAD",
  "key2": "5Y89tY8MCknWW2PTfpEThCPdhWBHFu6CPiLdsFV9RDZJYvsdsJiWWSp9pbR2c9rchdEDmyCdKWaM27yUS7izKNxa",
  "key3": "5UAUpoLcRB8w8BCQiYzyRFkpCiAMkquECAsCHGxVsNpwZaihGSUoNbrzWKbi5kTDENLAwyU3YB5oY9YLK9UTfFaW",
  "key4": "49ZL6gfgpUdLfH9p2uZPv4nH6kBkGRQiQEH2ftUGtwdiM1qEPAq8CVqTct4H8vS5WotGDuDfXi5nv8opwTkLLqf",
  "key5": "2uxbwLMfuokCC9j2PmhNGKc4EwoDiut9LpnABXfiAvGHao2rW7jSij529zjQ1JPfVyfEEcfnKMZjKieeAvsaEi6C",
  "key6": "5cAsxM65nwEcS7AAExwkJQP4Y23rL3Q28LR2fg2UZDp3H8Nbzq6WdMcpLd3hFx2GGy4gCuAu2LsqyDNjhohuz47r",
  "key7": "DmTufhHyfdLmtecfrm9CTJGf5Vkyj2di4iLmu9Qnm5LChXM7tMnCS9BKPevp6CpDPeK5xU94k84ngRhYzxLBnCm",
  "key8": "53UFva2vLQeq3EgpzRrAurR7imJDQWxtWpLtGBFvjWSYPBqokVH2xosCURhDmmA4np9a8LZFu1gMriW4uCQ1um2t",
  "key9": "ZBLWRbk7iXmrd3NvoRNESa7Kwb74QNXNVTtVbwCCDQjdyatu6Tq7exYA226Nx8ZhXQNBnkeGpfB7aZLZfjkpGbM",
  "key10": "35iAJb5ifKkCSRzeCb7xtavKmGbj8JaGkVu3UmhKz6Z8hMM8h9WPtnajKUMozVKkohzrNqoP4Kc1beXnV2C78pkC",
  "key11": "3Z5XAQxzZmgctQVmaiWqaU3xCTnq2XL2aB79BFeU7Jx8pmeBmrh2iXABG3aRmwLQk9kvSAtRjMHfncfV3gMF7JVT",
  "key12": "64cPUaaMeaTH9tkJsFc3sU52HMeibQ5qJWFec7z81DxyVycVhXhGQpxkLnTphbPLxSQoyrEDjMNq9h9xMVoP5uxB",
  "key13": "2gRPQ2wXGYxqyRFkKxqADRNbBeKQfrrwGmZ1sXfJ3iYkKk7vwBFucFoeSj2q3pTi9KYNTV8cDPQczxTEkb9bsHJp",
  "key14": "2H4J6PjAQyChpfeJhvugJX96baLwYNkReADMJb4Fe49LGo5eBkqTgKr46UALrJhFaS5bGax4rHH4h8uQrTbuiQ9",
  "key15": "yxJwQnscBoMbrvy36WFJUqbxbmnwUGmj27NUznWnLrq61knioyC5UnGF9Z8GaNecvdxGg7CNzmxT9NCmz68NVCg",
  "key16": "2GDqavy3M9nCk1RhpGAELtTbZVtGRGcgcF2Vv8c5wGfWdCErngwbTuwawk6w9d5PxdLb1xXqJmrJFQXFaCrfVTSn",
  "key17": "sniTw63Eo2MCwRYXXBRouEZXXEdqoGZKPdPbUgVMADySTnJbpibwbVdoJ5oCA2RtRaDjwPagBwEpEZLjyzDfxvx",
  "key18": "5JnZori86RWLVF4bSEqnHrkojXfQNGYDCvHj2d92Gby18L6pgwzf4NNKQgFUSBi8CxdiyGJ1SuSgL9t8ZvsfSGmn",
  "key19": "gcCFADAdQC6h1TjjU5tWvimvnuttMgKKCWxufGkeHSvdqUdDZKRG3k22wrieLq3gAfDedKnJU4ixmM9AgEe4avj",
  "key20": "3eGwmkKquPw9R3sH2kmVg6tK2TjycDJYMUPWbqVMZzabptzeAgAv3GLgkYLdrF7FJYAXGoEFH1jwEQb1QzmmMbP7",
  "key21": "2sQsvjHwANuuH8Fwh5Mwd4bYtyVSJnHu6azqhuqRNGx5xmAGvXjcsn3fvm9m52rU4Nb69Dx3Dg8Qm23ADSa2BDyt",
  "key22": "BcvAmsGCWkoNxXUrNegmzm2zUWiWBFMnrk3ouC2LG6uaeTFTWLoFJp2MbdmsWByoJ3h8bFGv5c4t1e8qmvHLDzg",
  "key23": "2vezZYW47XvKQSUtZbhuRDZFkTN1VW1wYM7RHpnfNSMaBrZLpT8Ju7aycgXvtRH5tD1R7vXJtgQTzvPdPcTz3JCq",
  "key24": "2Bq2yuWApMpWy9WfEEzGUUCHpX7cWk2nmx5jHx1dvucqWnow9zrKAD4NK7VhFznGgzKn7eRmZJb9nb4qRcnjaLRJ",
  "key25": "5n8yk79iiMnM7dwijXP4AMyuvYsE8EEJ1WtNTer1qbSqvAwkLWbWvTPkbpwEbKjyLpRSwCwoHoHLrAHCgLFEcFWq"
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
