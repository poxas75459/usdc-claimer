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
    "RAZ3RZ5RHNEpe6MiJgfH9LYT6zPqCEaCMYVkUd4jfP6KVm3RHQaxqmthkXtnptqsdbzjB7xdsCmNYRK6CbxewSX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Tt12UwEhEVWfy7vyW3Ao4svxTtkGvS8ZLUKjmSbCzbefEG9BzMfa85Pe2QTDBNZ29FqZnesrGommNHzbSGGry36",
  "key1": "5VH5h8zacovvLbNoWx25ouhEBfbLGLpoN5UrVuDCATswaev4nxxQwvm5FVNasLimFYmKsoGcFDbB32mkwpHyGnQE",
  "key2": "4H7JnBs1EH6X3PdT1QubHPEgMhJ4QN9tGeiRGH8wif6xiHzNdZ2KK6K25iWVSZR7JjHuoz1NKJLuQgFD2tXGR82V",
  "key3": "2beW5fNTmQBwUv7LzvxGPQ9KrHxoi5sNs2EhrgQVL7D3DFguXHpReFmJbANeBQrEM62iBEfSUxibDU2fS3kJ4f5q",
  "key4": "3iv7SAU4WUCNnfkgbdFHsAQRVcyb73phqovyFNxxMzd7udZi8UndWmjAzMGjsBsYjx3kqxgRoDzC5hwa8H3z9uce",
  "key5": "2zAXxxQxxVPrBqnHwPKPUxEFiuxG8FhAP5kTkVbwJYtfpdp9pUfAbXxKUx15gtEErsX1hwr5FEWJfp4b2aTGrS4G",
  "key6": "4JCKG8HoDKm8TwqicJZ2wQKrT5gBausF9755T6PaUZ1uNSFXE5JjsFXjfb93zSvztc8xTRiiXqHhfUvoEinAyEVi",
  "key7": "5Y23XswL7kfzfLrfqgqgR1aeRTZi68MDAV3uD3JmAkzRJDq6kJ51j9pSQZTPA1vxF2zNJPQXeyJ1gGcVLR8YFvnd",
  "key8": "6Rhnewvyc3f4UMMbcn8KXWjV1JtpTM1QMEWYCYwcEkvH1yFH7ibrnFLdh7dbU68fKmMAfxXvcm3784uttQEGWGk",
  "key9": "3UwrWi7TqdwUDg7BJ86P16hfTRzotvuFv884xc9F4qNRXU9HKocjeUSUo44o3VTNDB2FTf2UYyzQRXgc1a8iJTg5",
  "key10": "61dGJRqpFv8ZXE24wsjBqMCNruJUwni6XYzjodJLEbiVy8X8pL1Rrh76PLBjvfwtPs2E9baxiD2yxK6CS1Y6azSc",
  "key11": "7nNcV9hMh3vmuZ3QBatxxirDBYiirvHNxuYdTbkkRgKLvPH7VL4XpXC8dAbvAdaa6SZ7Pt5vbBtafmXXixQ9Zjg",
  "key12": "2JwYyGfEYZwpxzxrdR3qn8PLXvePnBy6kG6RCE7mEwD1MabFBygZuJxS8AG2GodFbQ8TAVXDqqFpZH92YMQCxh9a",
  "key13": "5d91vxz8GkNM6t5xD4K4iCHDNoj6DC4gTGfMBneUDJCuU3VbvYx6X5eybUJGweaQuwjnqqApFXSTJvSEkg4FQBHZ",
  "key14": "4w4x3QNGaRPoVuN6uXvY6s7qkkaP8wMjKMv42PNzesiz6JW4f1hEwm21DCMqHpv1HgNLJURMx6pCzB3AxJbbTc9V",
  "key15": "4jC74NLUVxRzmcZZLBBdpmeCME6SKQXLvaURTJg1MSeVdre1tzQ5bTM7kxwb3zh9gYCMNkZokqzry5XvRYtSZfCu",
  "key16": "3VUnqzqbryrv2r9LmXBztBtz3PkfCWt7A1PeUE6bzKC2gBRHRTAc6s9gijXTAb9bVYM1YigLqsBLf5fz69daJ6yN",
  "key17": "a9XzETsNf6nyxeMAm5MEY5WxkA2Tt2YWj8zg1ufQzpXAPYffgJHw6BnxsmheefpPzxbvZ3MpVeiwANuPHrtGpwF",
  "key18": "3KtjbJwJPfjC7jQ1ZAxuxFdLepYptdhAE4W69gYtk4UgjVgG4PKtZYpwMh9utYHcq394oEudFLUD9a8ZTKRtR19Q",
  "key19": "JsPh7xUWbK9vA2w4CDt6JyV3YnQfFEuahgJ6KHkSi6oSevAxffvo9H136UHfDffdohRG6FhFwF4fQMpVFxMvQ8m",
  "key20": "C2fknseqwvzWYRm3fEgLWbbPrxDqnWSK894JRg5miA8btpArojrCSZrmmF5maoTeDgDkLcUtfsRE7dVXpPjm26E",
  "key21": "2WjKRfSAV4azsVgoNrVHfBSVTJkLHwevkBQ1iWKhRhASj2wuKab889XMWv5nCZAptqrabCfK1wN7KCC3j27bSm8R",
  "key22": "CMT19YLcUnhTUFJYJBhHUadn6odaMtHcLoKobeLPwebpJx3Zp3bVo5xRBzjhskE4ZqsuhZEvXMSSHQmoTEvC3x5",
  "key23": "apSduY3DakBLxYQXVkUa8RmHEomYc5sQnvz3NpAhTgPuuKii8ugRJ3YVv6aZre4hpJwviSwqiHisfjuM1GfJU6s",
  "key24": "29b9rQZrhtsEQP7QPip1yPhpurnksWzutGaTUCrLcVeiufQs9CmbzyFUMV75k94L2xqzsHyxsc1tgkxc7cECFrZ5",
  "key25": "3K2dmgDeiGCS1ZrDxQjbA6wdAgNRHUKEZ82Ve28cxGi1eyT37buzS6uqaytRziguKXz6acBWM871Z5uwqF1w5Vw6",
  "key26": "2WMBYpskbZ669a6DskywZKkjJaBxKEwwEQUwBfrdh8tWeZnqtxfUifCXV134pMfAKpeFeGNnP9emSx8trBY1uUti",
  "key27": "66ciU1daKFHpHhc65n2oHcwCDW7CGKUKD9bdqoqs4nkAz6zYLshhmmqFkG9wrYqurkiuGjGHLWB8CUxBM6W8Vw87",
  "key28": "2D6EsechiZwN35AGucgnNz2kbF7TxziRFf68NPv6dB7sH7wveWM3XknVynHfsqUcwNsQYVAjiuTEsq7pFCzcBeTA",
  "key29": "VeV5YFJdnZxvM3PFswQBJFH3exFibWsZUJjf4rkHcfca3zjtCd5hWYaHR6sTjToG574EsSu1RdizTbDCEBrN5Zr",
  "key30": "qQguMRCaMpqFTsGcykVDbcE39xF8uZ1UopY5Tr4JLVsBV7AKSqgTY15cevKEWa8QSAVQtxPdgq4fdCXM9Uftcao",
  "key31": "5sYe9J5APYkRK5kNAgL1DE22WCbPGQzCiwzJBde6ZdaGhBTKFcpfjGuZAEWhVStjK6AjyrnWDiTW3LRDyXS5j7Ao",
  "key32": "565LAsSRYxwUESKQiP8bFwb5uJD64sCFJGhg1XF4zTdiVuuqqPVWhLR12XDJhUqAFC4932FHx3G4skVoQ8hqBRsL"
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
