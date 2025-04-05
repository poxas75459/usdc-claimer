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
    "2haoYESqnr8eFUwmRnHpFYyquj2tYSuwZ1RxAoNpab3jKCKMLdkcMHbbvrXtPdQZt44i1673fHcsTwLxtTyKTi8F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ukb1aVW9oAUwn1wLP4RoPUdGATfuLCZsGR356tVFB9BgsyGvqutQmkqDZb2YAYnoqR6zsuapAFt6hs1zkVwNR5h",
  "key1": "5xJteMDHejaY37oZoZRAhtSmKgjXwenBE22txDrBiEjBnCeoKywtcbRftNpun77qgx9LoMSXN5mv6RwCuX5S37Ce",
  "key2": "2QwxHggTpGssSZy395pqauSDQ29JnF6Qf17NUuf7aWy3QzV9gcsQe7o53n8J6vkotDmuESCQQgXMsDanRX9Xfb6B",
  "key3": "5Zicq1baDVEtHiaodnixyf4HrAqBcUHUUtub95YVdrg4VkVpbH3r3snrLjW8duiPUuSPZ3Brjky255MvtzUrvymP",
  "key4": "NNiH8fHHtJinFB4TBCaC3M52D9tPJXFTzpPESZxwYegW6QRJpGtp9J32bbkLu5HGnY9Pm8c7gbxp9NGS18cvYqD",
  "key5": "4y6cPPgvvjRQp1XxiYaLJKCYHdB27QwDT5xz8dC4crVNyKuZBpMb65WNwoArVMkqLhfcoVAcVdZuadYdJfPnSy45",
  "key6": "44hYvJ2jDjUwFZjrbejWA6cUtFaFyreXmvBWmb5qPdEg6ahYgu4WTQtAheVNKBTdXG9z3HPA6MigmnNTrnkbAKoC",
  "key7": "3VzCPpLGVgFoMym15P4efcfe4s4fjz6WbUTDY6qrGimyrbkurx9rbJjSte7gs75sEDRX9VZbM6r9HPS2bZhFS6na",
  "key8": "4mkhPEfp6dJeLHLo8zg3kR5jP7U8FL3xEgDwZru7qsqADhvma3Cgreb4AbEK7SPAQjpiRdjJv1nGDiGr3327NRh1",
  "key9": "621W1okTqDAV1ppbQ9gt62eWJ9sb3ebPpKQ3WihiqxcmS3iaPd3CC1fxKqNM49aLeS5wXXYpJShYLiPBoTwVAsFa",
  "key10": "5Vh7bTPdx1XNUECz6NDsPMKFgquZ9wwXBPNV2ePFKhgPG8JBSFB4C8ZDiT3BxgDt7DMmAb6iZYB9GMjEDdhTKsCi",
  "key11": "5SnQtDP4abH6jR8rm4BY662S7LR7tyFAQjXh8oGAFgW4rXXWWjWqMLJhtKwAfDzvmGy698XTtTu36dxj3X2E3wLh",
  "key12": "2YgPiryNbfxq7mKRyi5BhJdd4y2wRmzrCLks5NShpP6tTkFwvsucKrw2py4pF2TpqbcN89ftfid7EJ94NBRQ88M2",
  "key13": "5SYAkm41594k2W6dqMQCWvk5ArYzW9fr9ASjqEBXCMoLSx6eyBSLSvjzdFeEqi2uyVrofvfC79zM7Zcnv2csbrdb",
  "key14": "4VNW76nrqNZ2TmemkqDACTMYQrPCyuG3mBmEKw2NH6HDTPA8zM7SWNLEuLkpgBrNw9QquVZayExYc7ctGDMDQXcU",
  "key15": "4EdKpWz88MU9Nho1AXMxKEwzHNvALX9pVFnLMKapQJb6aXgz7RDMauUHip1XmRtZ1pVfrgQi2fwXYKk4WdafAGxJ",
  "key16": "24LhSydfpu9nGYqhf4r5i9NqMXQqDHq4we2WVUbRfirLRTT29xCNL8bSGMsEFXoHg2kDVMafv6mgvyg7oodEN13C",
  "key17": "2nqcgjCutJwTcCr9HCC6wkT6o49qTmcy9H5ZqDN2Y4i5PQBWMCM3NAfFwE8qR4CjDHTzcwYWY49RxuxGPdXskPmp",
  "key18": "3PhWUKnZU8x3Ji5iWjwaS3eCkRuchG42Y78rEYnFnoVQv5JH99ibWrKZKxSzAhsHxDjnWPaNBgnLE6FQ16SU834x",
  "key19": "5rmjPZUvbgHmC9oTBLctY4ktG5DvrDAFfjwZUnhqgwSZRaUqpoWrJr2NbvzPGiASuqfwYRKfqMd35VHc9jQLkob5",
  "key20": "4GXwsYKR9XBqNzWprYZoTpYCqmYAyrXg7hz6Rw4V5fP9Y5unceyvBrpEdFdH43hkrjKq9MMDbzo411DvZ9EtgHtu",
  "key21": "4Zwg3sMPzxeyvM6ArKY4iJLcoPR4qEYhBAYzfsKzj2tLvt8NAVWN4i1YrXxnRUvokqRxkDetCWjPJP5yKnKHNf1s",
  "key22": "Br4JBk6Uyisuy624sNWygaBcDhZYFKHRJ3XXLr7Zk8ZnYHGQLNjAKrjxygg5NiYDcqGCCQGESBSTPkbrAA7kFS9",
  "key23": "26L7Q3EqA3Cd3N93PqfMASzENc6gFDAoLd9Pmz6XgKgxYr4zjixdtxHLydLBN4BjTzLnsYebka1eNpAsaqfvKaBJ",
  "key24": "2Fi3BWT9tSEokfNqiYMTTF9PebPFQPbXqP41Cng2otMTUmnJu5E4rAq6cxXPALfG2GPjXrYfL4noU9e3vsX12uNQ",
  "key25": "5xiYJFerE28X2NKZp4fNWRpE1THirFwZb2LrMrEzLX58Fu13bHipJraafwzTPpJDGUh9f7MSXgA9px7BpN7HLNwP"
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
