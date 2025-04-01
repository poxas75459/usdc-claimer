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
    "vZCu5s5imMn6VjUXy4RoUYJkANMakuWJK3u2K8fzFDYkkm44FTnus2JzVkzg9Fqe3ht8tqJ9SniLqgfTXDR5Fdt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MV74VUCj7872v4HthyNDYPqgzfVzxWWniFLq68fHaubycYakt7FuKgLyQn3WuK3dJvBvfqASBK9rHozbc1iFB7x",
  "key1": "2KtDweZdYKXEmeLTY1RtCpqTnqkU8mhqtjL6ZDCqqBSwSiH4TZAUPzP6pUaxVMc7k5fbeW3286q5PwkVfrMqvoAV",
  "key2": "7kNfaENdJZjz9GRN9mFSdDdfZeMpQs7sf2uKywd37ZdpEbdf9wmZEzafaoEMEwH7hWKWgJ7bZdv2TBGgvvxiEgF",
  "key3": "4skMJFFtREnH3WK7wZasfr8y7hofjNwypohjGoB9RD2nRi8Umm3qD4ahohYXD6GpD75vMrds8bMzUQv4PYaVRwCc",
  "key4": "rh3TdinFvAzHwRQBRkYLDvU9XT6P3qgm7bXFDGoaNbd1onoN2LmUaAxiJEyv4kNiy4dLxENBFDrsLR12HbHvs4X",
  "key5": "ubLgdVxtJANEf4LnQfEYXRgpzhtRFH5fXYmB2SBH9M3skNPhd667JaJm6v22FuacmkHfNXjgzUTtxzyK8yV8Fnw",
  "key6": "2Ken1modfsvPyjKiTpUumrR6V1cMYDbAFzMkoeu3477Z4Eb3PvUPNdZCfK3MBH5aWBbNkB3satLSdSAsiJL3HR26",
  "key7": "3RERxhLjJ6Gzd5s8oS8UGimSmvxVyzjGWCSC2etHkmkJVUks6MaBiLvh4JKMHoot1JifxDSGwCgRSujyMNnDfoQQ",
  "key8": "2RCZEMgn5Cv1xQuBe9wPxNiGPpQTuMSN69kuYGpqkH3TjaDEEzZynym3a6mM8U934VAzGpEdFirmcYda3rh1PL6P",
  "key9": "49xdeX9SpHzeTGB7u2LA3gRAJqpiB7AzKDHhzXVtF3huVTJRp2Hf7MDCDdRT3q6vH4nVmEzF5tQYH5ZJGfv5Vgvj",
  "key10": "4gD3AnSWZpYo2jukpLAVWLmwiY91LuSHquEuY8uyAppepFTSCAxPMAmrvRXHpjEWwGbeaYHWA58YYw1NvS7w1LT5",
  "key11": "2rGmGL4Zxuz2ebRyju8my6gB7UtAGA223z4r825fccc8PXwQ1aW3zppenitt3ymqRQ8Qmib1a5Qwyhvn3Q2Shcrs",
  "key12": "4LQ2JmiYeVELiEQ4ojuYTjo6aQoEDZG3YvBDTmo1oXvEMaQkJmGPboH7WLqSuW1u2NrXYCwyjphVk9155ofRAvQh",
  "key13": "2RwQ1PD2B5Hr5AeN7rrVPY9T1UsGSXbod1SBR3WwBNjEhQyN7zuNDQWPVYziYHVkubFXjMX5miejBGrgepckGZ7a",
  "key14": "MtVhmdEdAUDYSSDHwaUnEiTMViPCqsyhbzZPSwfuD8JJfUnBU3XrS4fugGWK2kcXwFnbvXuRg3MiKXZBtC6maZo",
  "key15": "mkDE3bRVDz97efVrqKGWYKfw3ko5n1uTBAtm1Tprc4ukxqtDZtkLpsKAh4BWCATdLSGCMXTvCJ4vdfV2wn8t6xE",
  "key16": "4vAo5MkYN9JBevuHFpdTnmU2hro6NaM3zfy1t8xQAxhHVRy4yqJJ3KTmvpo6gU2gMbkc1r2hABCBv2Vi4JLfeBG8",
  "key17": "5eY1R3tPFx4ULYmPcA5274iZ8X1gpgmWWzJjaUQcu18cTuzj489hCxGnicpfgwJAi7B5hsrFWazWsNyAyqmvPsVf",
  "key18": "43HoPn2qGypvsPCyEL6STbFd8bb87QpNBhbWrQBj7xEznBC3bP4CeZzbcMXavLE7fSJXGPgtNa3sjtiMjiKsnCui",
  "key19": "52tHNLNt7wgadKMJgqyCADQ2WXVuLHUv74PDpv23RaePryYYeZ7ecFr2twgMgtYi5iJ6mRWwZQgEcsMtKXfXfRAX",
  "key20": "4XL3KcUan2CnQPFsPdoYcUxh1H8TcXUKuKBjzTVufZ8obaU3yxxA5hMtmchvhQNFq9RnKSiURmuNv2G2G7Puw9Ls",
  "key21": "4zZYeBaGA2FKeQDs2ZE3DuLKmZMkjkFevtudkqtPqXpat2v1qV32FsmDvnh121dHtBynHix87jgfFTVFLkamMS5E",
  "key22": "3r7Vbq7mPQzzLDU1SY1Qu3GVBGxzvAG6naLRSWSp4DvMrxnXdhrdVkgcpAVtPnXG1WRftaMrav3gkKMfcnia5GQc",
  "key23": "AzhZowz8iTakqWDLUrkPWqXKte3rSSHm6zYUuQy9BzTmgx38d9ArXMP59U6b77iqMuWjaMDjncFDdGhLnytmSHa",
  "key24": "3FZagK8x5RKx8XEP2b6ppVHwyf4uUH7ooRyw7BbJSEb6qouDt5rgVXLqmQfvuxxVk4o8E1L7KxBRREsnef6PRHtR"
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
