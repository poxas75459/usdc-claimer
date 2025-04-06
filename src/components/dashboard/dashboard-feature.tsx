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
    "5MF7GTd59L67Be52Wc8RCz1phj6beTtBjLCpJvatEVh56uATrEKPMRn1mkehD8sctytUDCAS7FKM63JoLkxmKH57"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gd9mYcjrkXWv5mhXKAFahSNJqxTCsJzfS54UpdJY4PGp7AF63AoMGfTd8YiVC963smf2F6f88FZKKP3Sk5Zv2fu",
  "key1": "5fx5f54RLBqjUf7LRnxQoftxyVtPVMptBPimV2SX12rRSmSWv6V2CxcY8FGMvh96EHzG8S68KpbrV8eiYbKtZyF5",
  "key2": "65BuWd5xnc7PpoAz9m8nbKXubnncH5qMYWMomao2pBWJK22Tk7BPwXjg598DvzyGhToK5bJmQnEaAZ33YNr3Dpj9",
  "key3": "4HaCrbk14iB13owbXC54inuuKsw4YT74o3wepMfm3a1kbf1LjPQwbAfXDPzN6RGXWBnv1Kte6mYpyRJJftZMxzBP",
  "key4": "4REusaYARzCxHxd9hu84SQH7tRBJTMva76r7rhVcuXJ4qWRfbd7twp2r72G3auefbKDbw92wrnzeTboBryFTvMU2",
  "key5": "4L5we4Hk6UDg841AVFFMa9Q252SytyRmVdHMBJjnnhgQf2rcQz7z1jfS7ac3mRMpqGJkxHAsJhBJxFcbPbJBFfdc",
  "key6": "2BQsFquTng6gCtAr8LaGndNHeMZm4U2GLN6oU7z8PZhr49ThNjV2eoVdj9WBMLRV6Hbmmub1WHo1mQkh4HdSVbcK",
  "key7": "2gYXSmrn1r4ANeCWsv7FVwSccgbKtnZ4Z9rpb6e9PSwLfMkqnaR8V52dty8poeTJswTveCTtWCBj9Uzbvw2L1S5K",
  "key8": "4UkvKHe7AdFa1wzve32qUiSMHpc61QtwARLFUyFHdSDy5sUCWcNZZ3yRq88uGSSnCCnvvWrHffNqNFj4jEMnbKV2",
  "key9": "45ncwTTbJU7SxXGENfGQ4Q7qH1eKdDTa1457jJsMdTayAa1AhJomgbbiA12N8P2UprzSgX21d54mpEybti9jHFxG",
  "key10": "2GwNbbsiPC1faMP1qoDYtoJeS7crczwRRUZ7XdK3Gt1CocumLhYSGhPmYtUDu9dxkgtWg9PGVaVHEXNVh6aVVHwn",
  "key11": "5ca1xxzXDjWVfrh5RCS5sZNoa9kby2TAwiBt2ch8Mt1H3QgnB5Vhbt7wZUcARka5Wy2su2vNFVXUWUd5DuXVz2QY",
  "key12": "i4A2Z8vcMaMHe1tWAT3pQ1B99F8DzpuBsrFA6ksBN588Wcgn4PcHXtMtsgtpc7ceibTfrxHCD1yyTykgxtbpQLa",
  "key13": "5Gzg5yw25vqvN9Hyfoce5qMuhn6dbDypKMbYwqyGJenxS7HRnTgmhNb9XxYbPwtsV9EGKDpqZurcGPCNGKfJwGC6",
  "key14": "3yRPSdGjBy4KyH6R6ezHFXew4MrrMNaREiAzLH2CjuPfCNSQNQMYrWGaxBfhDt96xyVxgpCwQ6957CdMTpDPbgLv",
  "key15": "48mHkMz6k2VGE8hViwS95ivCsKwcQm3vZUX71d96hCvzcqUUeJNUUa5fsaWo27tpQiHpZw6UYUxkgq5KVLGRZxbd",
  "key16": "43xdzNcwsbit8CeJPKM3V3wj5mjBwccRdFgUEZQfuUZkbaekUDWVmn6dyKqphsm29tyTFL5UHkkcoZh9eVzKnSzJ",
  "key17": "26ix1fUpdwQtouXmzy1a8BcAuiepAchk8gf84jwBMiA5fXypXopF33Rn7wkTGppAuaaVsCja7hjSXcuGw13A8HjY",
  "key18": "2rYF9qsjPuDAiMJHfNRZUbaJ7UfJB5uDYqhUm4skE29mQsDWUcWjuWA8WNENAs4ikQnx6kNB6ubLhjSdSJXchdqA",
  "key19": "3i9Pt8ga1Kg78i2HDWEPtCf1kN2dQyeV6pF3EnWW5UPcnpDNgxcetKHwCPMAjS7pjXpsZs34xBida4NqGzgk7LBT",
  "key20": "5gWa55EseHetEPXvT9fgVF3Eu3stMdJpbf1GKbJVZZoxDVoQ3HeYi1q4xzKDF11kLpDMqp9AMeCEe4r5STqDwiWP",
  "key21": "4MopHr98HK63dEB3dFvAgVskGVaWPyppwGTxA2GUgcTPRJZsNgB6etG8axYzxozPctxAnThcbPWeEq4udGEzXxgo",
  "key22": "4WWRKEGDJM2TMUisydD4sjn2U1k78LeQ2gau2Pn3j2AEisk3VPxZpAf76cNpPet77RBXLZ3D9p1i9HGxoF3Wy9nG",
  "key23": "4tbQNz5RPLFYrC4TrjhL3ggRzXh7QfFgVNXzPp8ph5qpZs528FHgfv1jevmuG13Wtn7eimPVXkFxWCpn1MtC1PW2",
  "key24": "JXhdgPqguTYn5vEJ7C2hhJjCcXxkg11LvhHab6xdRwDZQzMtsiz2XDXRe3buc2wCGhoeanAL57nsJ5aF3F6m2qv"
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
