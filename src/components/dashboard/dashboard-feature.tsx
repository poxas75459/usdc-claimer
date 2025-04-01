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
    "61LmmcTM52gPu19QSx4WboTdVWh7fV6eX5TjxtB3sEGSdPRrzKXjomnZCFD123GjYpB9NeDJLLfpcQenvzkx3Woi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FsqJYsf7xa8KTNUzxw5yefVLi4VhS4ZhKTfVQnmgZ3NCoyuHBoXdERaLh8mphC9GUj11x4y8vDZKxVJcNXJ5Anu",
  "key1": "39noA77xVRge6ddLwHhewzU3jDZpHH4Af4pEWgm82qGmd23ZZWUPhbpvkPTz8BvEkXE4Hd9UwkVis2rVHVVGKPyo",
  "key2": "2sXs4RXn84YNYVwop9tZbH4U7QPw9RBzGTCxrzRnNm8a9HnLBFjHtMY23QfVbjXZHCk4w4QFovsBJ4PKkh4SCHzH",
  "key3": "5BUip8NJ4HxMsSxg3M5ASoQXBUs8wgHe6iU1vU61Zv2XZySBw9iVrhyjCeSCCBcaNyDusw6EZJfZGUv2KG4ftSSQ",
  "key4": "38WfA7MpeCC1ByEsiVD9aqrwnb6FtFYMmBrngm8pPrRAu9Xe6UM3yxacd9XMeAS6x1w7qX6tkJFpQAEonQKrrmUa",
  "key5": "46NuC7UJZHXwZkREak88HWMnBL3vNBSoQsiSA95kJsEYrzQte1zPUH5X378fBHkCx7jtsz231apLcNXp9ez3VcRy",
  "key6": "66nmAw8vUo69JdSiiqW5DoJRyeMMYBrpnyopsPrYgcQuqv7XDLmDpQzPyCVu8rBjRr6QtZNPbH3zYrWb7a553cyX",
  "key7": "2gSgLpFpydm9F1fNc7e45f4m8Mt3NhVxSvPgHDZzrNeYLDacViAEqiuCwdV1BDWgveVmxRDd5f7R4fH32dbAogg2",
  "key8": "28FAPEg39CgatcSzFYv2L5qHgKGpu9qY2J3j4jezQreH8AjeGGjwLTmd9SKwhvL7wDx3j8Juqh5TTRd3ch1e73J3",
  "key9": "314VkFW2aBfE2ejoLc5Y1PiN91Yz4ZtiUBRuKzpeCKWTEzBL8wnMS7ySrjui3DSLAVRcNEZPJ35VLLaixqpdFGfk",
  "key10": "27ZFxEVU6v6JxyMqzqb7vjLWbthPxPGhQoCbbgPT2UeYSg9ujeeYoseMAqimNJ7d3CQDJ3Ao54kAgfp7dfnBTN1F",
  "key11": "5PdUfKR4JHwLZhaFhYziwxnzQULKKauMgnDAagC1A9oAm66oVR2tkTKtGUfxCNRLXLtjBQT3EmewZHZ1EMVZDGBs",
  "key12": "4X8STaw6mBVBqf4DqyXYvfQwxrgF1FL6QdrUvHjDa928LqzYB6Q4AcAgmBabzz7bD8XDhXycjgsaQ1Kawyt2ALNN",
  "key13": "2BaTyWSSxpZRtPGqHN6oPWi39wzNcj2SH832j7R7FQqpNX6MVG9ZxjgFBeFnnpnvHbT1VNLc4mCsVsTjhbJDQmVB",
  "key14": "4DoNCdF9MMkSXyJfKDTRrGkLKeYQa5BagukoVeyPXsyQnBN8gmNounEQwUivXSPiX3vQ9xhh8knaPBqwdRBkUBjz",
  "key15": "5oyAtvt9Tc7X6Z68AH5DeHD6rYcgKY9vHRJVXUJXK938VBy7c4dSGK5c7RsY7zzdsSZY81zVQCNAzLcGFXnUkUgd",
  "key16": "57T8XjNs3ihCX9WkzZ9oDHnU9YvbDxmprWwSrCK3kpz9sWu4B9286UvCum5kAzxapH5X93LVpYGX4f3dr2gF7U1d",
  "key17": "4u3zXoeoAPRC7b3xytFwdwvhnuhnbsX4TDcBMMBj9Ny1MjDyqqb1UqbTymHPDkHYTJSPTzJVGfTGMLTRc7wjo6hr",
  "key18": "rNECKWhr8Yr5TRxPEBfdSYv4nsd7dwdFTnuhBRdLDK4LDty9rY2sTPBRhGQZhnpUKLpRo7KvvaLZ71n7m8nMZfj",
  "key19": "3TjpqSKpVHdhhU55GW3oZGeknLBKQjsq5KWUi24dHSmoHoX9GMonV98gZQ6GUTjNgnUYGy2brsAx6gUMTnLRky52",
  "key20": "22MvA4h3NGBLqRed1DNuY6CjHbqTEYgVaogLPov6RpHd2mest5GNP679ozSUxhz2YjD63KkYrg7yJQoune7x3ZYW",
  "key21": "2JyGeXmjRXRS7FRttpcbahfDntn299y8aaS7XKPikHkktbc6nSrMxNmMhHUiLc4XdTcQGkRSoSeZTdp1SyNWmpbd",
  "key22": "4tTuTjQJ5XrqpcobvuGd2aGzgakpKtT13posBKwiCxFYxu4JcVHZeefa8uBreWXBorwGF8gdF1BHVP2hPcYeduqY",
  "key23": "5t74Bk5d3SqJiq547UfxTo9QuSCif7YoFLG16M5e4by1JZXpPN59YUGcZ33CGkHn5S1svZKFdHMoqZiAjYPY8yGo",
  "key24": "4J9Uem8NPMUHhCKgNnE5bGsdeFVNTzEiUfsjpvvLbzkKaRbooE5bfnxXuPomfFhkghbUXYnuB6eN4TGX5E5JR6Lz",
  "key25": "56rGaKFRAGqo79Zkz5ZQVf9tTMckZYRHctuzoxbt9G979J26ST8EZ1Aba3hxpK5KTZs2tkUVtAES11ZPVPanjpuv",
  "key26": "3jSUjZtty6fFmNWx9AskLovLLYn83AotKEjiUvppdJio6dvdf4Fqs94urpg1CBLHzVbF36jGUFKqMsZcvuDywLzj",
  "key27": "3EUqCGPjYMqVbCjRd6Cmow3UcMt87kn7pyfFiRMtmhYrnMmuoLzTN13JdbwUwUmoSfZJgtCkPGJEEBMSY7BisVPt",
  "key28": "3PUoFaZru5aUxqDLcd68DxAoQs4K3s1LMS8sewjjsqjWWAHf3mzxbMuiYTUQMNxLGTi7STN1cWGHRVMdXKJvhKUQ"
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
