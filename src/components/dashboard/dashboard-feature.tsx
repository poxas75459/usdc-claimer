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
    "2BFFkAG1BbWC8m85E8J2UMzqNh8ivo3DrzRVcHM1wgjrqQ22ghMT1vuPjiCNcCXFStNpKRKFqyAr7vrpJJKCYXvo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vQ92Uo16hutagzBPYCikSuv8tqnxfJBXY25PrFJgfakJLCsdVizyAf59ZUw1uich6SMmJot5bKCJSQN1JTqLWCA",
  "key1": "67EkPzSoMWaeW4D5GazZGKQv93DXGTsSVV7PsqUMCp4HwcjgRsBuK18hTn83Gi1rYfEcsJ7CEg5ZWSd8EPvHYU6j",
  "key2": "2vC99BsWWKp9ZS441RLdTRCWbQDhveazxAx4uUWL213MB24531VvLQRSj2p2PYjobHL8yFkxqYyLoUqNxfpwfi3R",
  "key3": "4sBTJzDapsh7hrRf2Qy657NHATsKwAD23q1zj5SMyexKjqHPk2Gyi6jGwMJLfN2HN11gYnnLeQrSnDi8F6RerEiW",
  "key4": "2N9rtJyX6n9c5LHAjVGnQ1H4MdLuiaA7dTiqTkUoRYSC3RJWDZk9U9AgFkBYJvoFe6KPRq7ksu6QmKaYkajcsktG",
  "key5": "FrwbW1iqqT43KewSWYtQwxzcAaLwRPSABjWLzhG4gm3i8CzRCEWi9jo2KD8u91NSHanH88xkQ9T1WmtDcNWEKd3",
  "key6": "iN9wLLtQ5hXGuY7JstGsdfWX4UWB5aDteMQraEGmJakFdZdZEhBDTTxqjbvkRdp3xYkdaYz7CWb2qouoR12q91V",
  "key7": "2u3KqKspw9NuQXx9vygaVwJuPicaxsvP1NoB1rtta7uNNwu1kFNVS8uJMFMgWTABXYHCEeZYKbsARmKruaAfdkD7",
  "key8": "5jPPedRbzntjPA11q9vZyA92supbxWTbHypTQMFSBLPWh3fe89zTAd8HZkQuLJnT44xw4Yip7WUSjkmKFioXJCKr",
  "key9": "4VT13PEJzgEDkaMHk9fsyiUhkGfagRRqFz5jCp4SMPr4NfGVTqqhG5fdYRAsiScuZNNSqSDTbfHLxg13rpS8BjqP",
  "key10": "4vrcNBtrPfzYs92fA8CVknutZvM1Vr7zEc9Ed2YMhgCUnKAGXvedAivyfQWQujuPqyXwbwCtRWVnU6yE2mVH8G1S",
  "key11": "32sP6vh2FvBoqtRSpQJ3vhZkvf4MGSfFW9RCz2pLjnR8FtSFu1FVuq5MZm2QaSzjaGGM8kiYuqVM4849fvTCbHa4",
  "key12": "4b2LGcmofRQ3hrgLynJtFSGP4vqhKoNUPjHwPTMaVkWMEumj2LfbxEtQ3udNim6seEYEFJ3DPSRHsEpp1tutKbqE",
  "key13": "2VLUFjk5PLT2eBrWxvDabxZComMnHyv8pFyMLwY65bmqEaUVCsHobvKKZrA5AK3aauL88hr1X5w4WuzSok7ACHFv",
  "key14": "D1MTLkvWfxMBtEfTzMoKnNdhVRGvsGZLGy8ELyBREebyapTY83PNotUQX8Xi5kYhWqhM24meokye5VDS8dSvncu",
  "key15": "31877thJiJZk7BroNA8HcYBv8HkmKGYUUmhDZyUXDmSvJfrZVDx7K5aU1FRKWK7WmzitkPNGbraKWzPtz2ypNYn8",
  "key16": "3TkvfM8XPoRjtxzfE8cVCBYrMBHBnWmj3PBevtGfuMQSBQhpHmP6mUiXf36ELkwqPeWqoZoqdsHLaquovKRHf68B",
  "key17": "4oVfPe1AC17tW5hhzFP1Wg1W6rdRwH2NYVSPWtZxfh6qVScR75koTELnYTWzbxJ48FLzDj34U1BKZipyVNXRvL4Z",
  "key18": "3VJNVhrLigtLiff9Sm77PXoKTf8ZypmfzdZP7UkcK4yVt8vD3gbEHrLoZbmGCJNe2s1whuGm4WVx1VQBEZF7bCYK",
  "key19": "ZnFv1ZPwnhwWvB51tDrQ2ADLJUq8S4QJJCS6ydVaM9g9nKhyZSLcDQAMpEWExUgwPsZjYrppDRZ5GeKzg4QwuK4",
  "key20": "28ioLjgkYzeFBW9XBApngTA1rfr7gecwpimUBQ55wH6ezLRewsZLoaqvjDLGV8wfKukBELXp7HKnmPHEb33Gq4Vt",
  "key21": "4H5MaFSvgzni7y4VFDcTyeggWyq39VjbmRAu5g1YDroWNuWCCBhE538H5CAh4ShZDqLVQJQedaR2892eVaSqAsy2",
  "key22": "2FUCfQkrZENkGrEXeAP7sBM1zmQ6GiepPa32Lrz47W836H9uUyPAVDDCUCMCQwVbciVGKdWY8G64ntKna2KRJJiT",
  "key23": "3ZGBLfKrFNKn7XrWgcDUxu8ScTt6xPQZZL8vRYEQ93w4sNRvgdH5936GuiHb7oLCYpTeThVffsx2Ct8e9WgLGWdJ",
  "key24": "qYR731SbeMTbxx4kXnVS9N9gPfGCFhCfubPVtZCWQE49ZjwpjCAg6AXiHs4wyxgYzSgvQ6j6FcC6S7dZWZJXkPx",
  "key25": "2Wigb6SHKuXrYbcStKjPd9kXHbvGavVmDdB4uUak83G8yE8V6HEx9pkae8Dq4PtTkzPNq79V85QmmFfsiLAwa3cW"
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
