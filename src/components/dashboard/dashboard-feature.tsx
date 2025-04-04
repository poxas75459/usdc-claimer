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
    "2p8wo4kd59VF8VxHvBBo8o6sCwJJXwtkCeVkrYVSkTASRQvRuHZNUKnUW1adT52xhYb7NadJk8BQJqL7BQzgJVX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "312CWTkSjiqCkJXPc3z78RQUtFKhmC1JkhtLj4BnPAeYYzWtv5JtW14trY5vc2LMi785nJ5mDP8WCkeTMipWJPwN",
  "key1": "3WNd6aA9DxfqjKoQu4z2wHCAm4Q17wPrw57RkxzjGG1C3buC39hsZuTrTFZVNQ1YNtug2r3rhpmSWx3A2YuXRq5w",
  "key2": "5cRJqSKBEzcTKiqosMupeo6K49JjfFmG88LYZJRTay78DLxZ8ezZVNhWzQ6hvdizbTsDq5CXEgqXs1ToRHSam2BN",
  "key3": "2K1oEg6Buzbi7MvMgedHNq82etkyPeTKNWojnakeAHLhrcFo3zMucnQcMajxXLWa77PRidz8jKrC3M7LdJzxCYd2",
  "key4": "hW8P8kwYkVcAwd4saCuq7KnGMyYEAqJqH6Pb3BRhKtjvXpXtKjzSFMjnBDBWSZ71h2Zk8vkTG5HfEAsncLoQS8C",
  "key5": "3wPnMTQf6Y98TK6CZKhYX9x17gKzDzhXCBKcFHtvCMq72WLGPKtokxphLh7yegDjBfJ4wfhfHPbhwnmSq5cRiA4J",
  "key6": "3HHBy38mvu4vTZWPJc9AgbW2DWCtDikv61cCF35LCC2Q3RcyfpYkrpLNjCs2dVstg77xSJdtzTnkvnWtZAexihgc",
  "key7": "4NE9fMCiwiNJdvq853Lhup9wESRRQGbN1grzrm6oGdZkEVc6vbFfuqYf2JrNDR45o4ECumV5337KSf45G2ako2LA",
  "key8": "3A7a9seDj5Vc7auCcc3bN9JgmBLYYKXVaPsKDRrkEMuyN9nACxtHniva8SBkdsEZz7JvLaYucJEJydsW1GFVbKqq",
  "key9": "7i4ijcb9daaLbUDgN91RbcFMgmAtwMVR2mytaa6smkW8pBFNEVmuDadHmj3MDDp14yuGA4asVbxxJNdfq8HxLDY",
  "key10": "2Ds6TC33rrfgNf4ig9brb2ZWqHg2yejXy6QPYxPtoXoCR8EvMXKpcJjvAQqoLppggMyNncL5NCp9zxp8pigPXD6U",
  "key11": "4gwQxZAJnuF73eBJQi2TPVcoW8Ly9hwznDnbjwj6udCN62t3iBnNhcErYGV3AG6syabAqruxGtVviDwEiuwfXShd",
  "key12": "4y1kizztzfuGBhHCojshPuaySts9K3T6RMUdwAJU116pn6jfFJr2C7pqGiYzaeMs5vm5xGr9AfH6zJhqkhrcPRtt",
  "key13": "4JYq18YqKkZVMaCjTmjvxD1VDFH71w5nsSkdUx3mNtfM4W24d6moGNWgx6okeq8RQQGjFXnwHxPWe7coc6GCMuUx",
  "key14": "4J17e4xbKRkcVVeQgYaqnrYQpdgCm6QKkJvTh9RapYDkNpMzXCD4onTgWYzPo86UNpnFsEGoEQVd8FgDMM3KGb3d",
  "key15": "26gBWskJbiMugFbUdBwn3cBcwkz4djBDeDYMie9dBwgqnRi3ue6c7hUsKGFBPpr6fZ1faw55UrLmuLDKxo6v14i1",
  "key16": "5KBhu7FNVMtidY4MPp7LqWLnvpuzsAEXXim35zBsYJzm1iJu6zg8L7yfQwpWbzc2nSav6cUs6jZpuSc1xvhEVZCq",
  "key17": "5uqCVAsXHqCz2mYrPuwvzBUhTCun7qyBJhWX2ysxKBZWxG5Z8gcMxQe8jJPfQazQG1yXB54JQdm8kAcptTQ3GbT7",
  "key18": "41C5AJzWaCd6Ty4eZVKrmW5oLPwomaLrDbsyRP47kR2VxkW1mc7vm8u8vCdEBFvskp4jWA3F4LkLMYh2YjM94x1F",
  "key19": "4aDYNFrsURvPHNp7V5i2cfaNF8SpdHi69cJUzMKmwZ9svQR5oSC4Qtp4N9oAwGocMHgH7BjCuuqBw3YHPVkSKkvs",
  "key20": "3ywjnuExQBujXZFjg42jGk3mKADZcK95rnz6WhZndb8UaNaBiao58dRTd5ag1ofVcB46J2gndyVm9kpzCzA4Gqn7",
  "key21": "3xnPoa5i8XpPC2iYBEivHN5NYPPVSA14VBh15aBRMCKYhegrxFTm9SYhEJyvxEYbdPkqKJeboy8mgD2gC3yvi6q8",
  "key22": "4Zoy5X6SPZ7MQ5SvxrCe7Cw7YB7tZQdfd8Prtrxtjiew2n2VQW7fDKtCxCyqyXKzwWKyU3WFtJzfdNCd7Y9gBwyW",
  "key23": "Hdg3B2FprTdoQbuQcora3wvZ6Q57XsDJ7Qwz49oerPV75jkWtKLPphwgMFpwwhVa3r6JCH7A7AB1umPpHCpZSpb",
  "key24": "2u4dj7B7aCApeXxkXY2Hh8V3D8wT5LorKu8iYd6rMR7QsFUPssENhWi8Dy9HdCwQmb6aaEcWnUhjzZePLDKkxz5s",
  "key25": "2cyBarjhLdVRei7hNHRYpyeQ6A4NDjcjVNc51cdBfEVKvZJsiqCgbCFN6wpHHQ9MxusuGb4aJCipGhaR3jEDEx64",
  "key26": "2hjXSLaJZFfmM5W8M4nsqzhq7S17M1kXE2sag1kvsA7UrhiwbcMRXFKVAMEpUH7qBf2FexRPbvFLx2PmvsbAKQ3p",
  "key27": "4WoMFF1UG3YpbfHSyKyuRCU1SdbLJSajNDtCv3Vjrig1HiRZoiApeCVvTJhe68jR4w8P84ZHrncyaEotNZo6aFan",
  "key28": "5nUYrBcjNcbtMcfQwrCjLEoXYXRjie5PQDB17kkorJc19puMVcL7mQb6KLgzBBstk1ATG3w99KguzjLPTWbD3xVw",
  "key29": "5S2YxfoySsLViFB8tQrBK9brn8PogA7j6U8RGqd7JXGRMEksmQaKxjGVmd5yYkYor1uv2nZ5GYg7t7WJCRMDU8mJ",
  "key30": "2wqZEHxoNKJwbcRAxPsyBeWK1KTf6BCFnt2gRKsXHa1ozakLrxCUn9peZ49RxNzZZW8z9H3zqtNNVBKdV9YWcCPr",
  "key31": "5ABbr4auw2urSuuRKZdSNYFWNEo6UR4rY5KwaZxAhTjrCs8nHEdjiG2vAoYET6asVmjFC44sqi9UxaUXYqo8zP4y",
  "key32": "5q7nQT6nDAKQeQtnM1jyogPm2hYqAM9J77WfRiHk37faiYr2xQ4zBVe7mEQQjNtFRGGbsd5YJStehiKNoJsyx3Dg",
  "key33": "4Xp8Lua3yawJhje3ujCh5K4L18gtLZkW5nwhNacveugnCrRL2A8DaXwR8kBW7M9tQsGqrdC5125Ey2Qtvc3tMcA5",
  "key34": "42K28KYnhQceAf2Np6HaUqBySGDPAvRLHyjRjvQCip1jJ5wVmEvQYEdCNyofU1Bh9pdPBAnfo47UMtwF8RP6ZqeA",
  "key35": "UhEG7mYYTqhDKKML2bhiX627KetRbk9JaTyT9pwYYEq2V7gwVYBejCYTw3QymWWWg6hEPdtBqgDBJ7DVvUy4Rcg",
  "key36": "3FLYG51qWNjudCjdN1ztvNAGWEqQHU2tTFk2LHpLMJiJSRJpWpHVfcNTbnCTAqk686Fd6ssVdTNYLRzhSWedZQnB",
  "key37": "3zdzXCiqM4fzTLkhCXEd5duk9dfx44BL4vfUFt7rhJM15Png4iPuYt7AEqX7amGduBi4WSrFTDTaRKhSajRjavX6",
  "key38": "561T9dgv4F8EfMEhff2mNYKShJFeoedznY9pvHLS83QfxDrDxD7hCkZXG7i6KLTw4anvDGgejeq1c758BqX7sUXk",
  "key39": "3GJkk2y1PtdShs1B2ZKRZuaxD8twSfayjVekxbn7YvD9ofRjYb3ej5SPJCb48AZQBjWkKoYxPeTC5K8wLMuK4HnU",
  "key40": "29iFB2JR3Fa6EzYLmkZYHxzb6DgcYphs3ZXvEtCR1j2gwGt4SSwQYw6BxFk5PJaku3x4pmpDbrgivPqG2ZDsTxWo",
  "key41": "51qLLMMTZnwfoG5ZKpA7oCrRJ1dkATwToC9F1sPQxtstmckMFZ1ah5tzfM5nPjZ1o8umN56mUt39dRaeLFDewJYW",
  "key42": "E54Fi2SFX2zKX8tzUNzGo5pBpNMPn52UNhFC5LUt246Q5w2nACSLKVJBDzxitRpKnwuY13X5CcyH7zbXRzsBuhK",
  "key43": "3PJmSiiNgqwkcfYsiZ4wgXLE1VGVFxi4E3gDcwDhZdraTmFcuUc3nbPWaowC2yn6ztZrdh1DPDoCKfPGSZ9DPoJX",
  "key44": "2cTKccda8vuyLS9vb2kMrkrCoZy94jP8EZsv1kLkdgF5F8rvmYM1pPNd7wzBsjsrn42a9XsxiJEB3j8Z9LQHtpKJ",
  "key45": "66d3K4UFYsUgXaA1wQ3R4fYM6Kt2Cwo4FMovQKQM1im7xM6oBsgYjiA1j1MfZEydvSfuUsb7Q6HhRnzqVAGDxF7c",
  "key46": "2c7ttFkWL8V6v6P2KKqMwtznXwAuUmcgp1NmhEk4wZPKuWqWs2ZVv6sGXu84N31fn7AK5pAJKMbvGPmoCvv3tq4B"
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
