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
    "2j2cBQmBVc5dWQ3mbt9CtmLfhrYXQWWh9mpbqUXipeMLmVfNwAxHN46XXQEeTimK19ciZQxSbMq8qog1e2KHYt7C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Eujkxah2wsVVQxF1iNdEZLfZU1YC4TGTCEaMAdXDPahjwu3NEe7qMtkYPwbpfKmLNTHzK8i9Mfp7kJj45RJPoH3",
  "key1": "4oJYooBMxmDLDqegxFfbMNFFpsoDuu2EhoD4AhY9T6EnmuWccF2GVY5WGDmiuvCKfxZNr2jmXKCHnGQekqeYSjKW",
  "key2": "4F9wXf3JLJbzkLhgY3gzaGf6ZDuA4mgcypnHXdRnPYE4Xd9K638D7MAVXwZ3X24wEFQ5mPTXoAdhhkX83J4ePwot",
  "key3": "oQZ8BbZGeamjUsWfj14gMSXqRWa8JrUoT6oNyx9BKkLqqGQH9wEvBi7ak1Ei9Csc1ETQ6EGHk5NY5M8cZCNCxdw",
  "key4": "uei83qEDQUt9N6im2uinj41JfXZxuoHHHjafbiy6bjWuDMZ7JCc35tDHchPRa9FvcZQ3NKnpdNbg8MKq4LATinY",
  "key5": "5VHJxtLTV4he3iJW1Mirh4KaWpE7ByHnJGj6Z4tuH6SLVQDCrgxGsx6bqiTpTnJP4hLxAfemX9BsNBemTcofLXzP",
  "key6": "sFu25zrDm5Sv4AtYPe5vfNy6ZcdizcJQUuchm3d83BzJVfRk2BCdyNyYuPtbfWfmwiojJjFwEwnz5k3MndzdvVk",
  "key7": "4YDNijRZZrgnwjLk9m1RWersEhH6jtEK9VkfHMBg9k9Fa7AdXUaLSVzx26nWhmaJG5wvUvYp1E6fFwgxzy75AqqQ",
  "key8": "2fSdjtpYZfs58E2a4NUMYGrSVA9SSgMuJBdKgov994TeyAE9LektMYGY5BU6pgcCC9x9Mmq1msH4ZhUiNe3rpCyT",
  "key9": "4Wmm7YcEGukNZQ4yHPf78ghK7oX3hpdw7FQu1rpyj6y1k4B9voG8WKBWeSERMnSq8y6hLDpRkSKcbSEX39HQxS3d",
  "key10": "2hNQMKntRNpRVt96iFkz1i8KkT3Yywmgs2dDQHSd9qCzaX54H8FTGzhnLEu3YWn71kkse5wHxzFaA2PNJjHFkeWJ",
  "key11": "4yXqRzSArtypDi4MccWCdePC1NLwYmUXvk34m3ut2soYQSNsR6gedd6hUPemc49fvLQF29ANnX9mvLQkiQvvXMbC",
  "key12": "4GF74EJmaguF8iM9MjzjvpDfQoVjHxFWuUgeUEZHztp1HUf6CSPuBYcWgtoJQ3koyadrA1Y6MYHqW5KPE2b64KCA",
  "key13": "2V5MtcJqV8ttT6Jxepenr7iStoDAdHsrDaiRjTabVEXTpUGxivfhMcBxMzZnbq4itRzGxwX2AwJVnPqZMK54Fw76",
  "key14": "4QeAC94RdfY754ke59RqDbzFXSGFiUcaHhUbvp8mSAeG1FwSGkytSCMkYa1nYxUxBmSMukMWDDczg3qZHgviRAjy",
  "key15": "2FWihP27g5KumQgjs97d8FNhD7sm3wqzHuj9EXaa8b1bQYaDMuFWz7foVQ3Yr6gXrJtDz6e3GgyZReHASpx7J34B",
  "key16": "rLA8k9Ks2FMXqR2yKn1TUTc1B2fJLkcwtbN8gRdFeBfi7rCzBqrnS6RDRz5p458r7EcJhK37WjwMBzsBujp2FGD",
  "key17": "MDKREtb98ewGGvsJgEsKoP2kDeNnNQYGtnZowGMYqKon9WWztNtNCs3Nd6ySJfQviLhisXR3yrbc2368HRnBzm9",
  "key18": "3Vkn3WLw9641JULWpsnu7XDX2cDsrLFoYDSmkxYWrDDFhMKAgfJi2ckfohC85uCnof8tGuYASHjhDQZQ2xAUGWCt",
  "key19": "2FMEMQGzehDMcSkziuQNmeNQU1MseUVRrBHR6TSTd5ygL61UzgAXjHAWjnkqkm3cPc96GFoJDGde2NBgSzhbwf6k",
  "key20": "YymEGLFG6fdXKAwNrZyQsuZ1a5YzXhzVGsyCU25BQvmV5mGmHXdcV4FkhvRkU9tZLW2U8ZK6ypYtaUj3yEJ8rWu",
  "key21": "4M14moTWc6XvX6XPj78mQXLSycRCmZ6cfCfCSZT2h7H6bdbj7QTgQF288m6cXq5tPJpTnSFTuKpkdsrNfKzYJJNK",
  "key22": "4QKqpg7412v5jWXeNLtRS71apmxGds2DaC2zghZvV8Fwyjc4Td1HubHNYZwAB2LptaYYPVdW3GaZ29ZLnDSjSPpQ",
  "key23": "3GtSRf6ATFWtbqtjZ6B6LejKNqQvfMoU9E545vpEqUszJtEmYZiBKowbrScUkPQsbwtby1ii4SMFkKMibtAtjRD4",
  "key24": "5hp3zfwzgEqQzoWZZdghSsxJzhskHDnCyJ9pc7LsrKEsQmDo5R7Sh1VgD64FHHGq5vH3LRWc3vmm15uwcWHDFQpn",
  "key25": "w3TSUpezPDq51q3jzFkRK77JyWPsqT5dDoCHMmtaYY3BqtatEFE88yYrcFMZEubWEQv1Q1FSiDXhWoCTCxyKFUF",
  "key26": "7odEeGDQpNajuFXmsn5mFTGoHvTVU7vFssMze36xurqQYW9W6tcBzWD7ETo5f4dayooHxAJf12VGDzeRMkqBP88",
  "key27": "5rsiAXYEPpy7UzLhcWN4ap2fSNDd69Q2uGziaGo8JDhzQJNBQSPi7tLZxSdaUpZ7AWw9twHir4uM3jeaCb232R9H",
  "key28": "5zpVX5eKsqRS4Ci1ysdZ54Tivq6mQGs1CGA4eRQvf89FtwBZLehHRFz4mtgdpeA37dzUFmpLBcgbrRwwAyaJcE1M",
  "key29": "2qinMjJ6uvR9h6DKF22CCyECZas13ixQXrh6iA1c4jDvXaTVdmQtdYiLreJ3qBnDdFbaJ4LfJiutQRD5Dw8Ngo3e",
  "key30": "4fFTNMRfsm92d8YUKL6zC85fgHMC9Cjsyb6P2etVSLxG6QgwpnaKHc4JZup19Dh6jZLwWQFqQG9NXjcJknzudfn4",
  "key31": "4b8mGVWze1NAm47X5T5aP6Z7x27G69cyaAE9tuJsxGesRD5CAeB8WbRovjpPeiv8HG9N9ZnHUUx12oZjZ5yetEJC",
  "key32": "22dCA8KKoGCkWkofgpGFhfY9P1xeM8oWbTumf4SsoMk157p76npm96oTkbPNgitWkGakJ7ojZYKsupAod87GiRyH",
  "key33": "2FSTmas9hvM3rr4YGreTRjMF25GcqTxZoRSxNXbGSn3KgkUmrMwm8R5o7apbeS3EqF8m2LUBSzVAGq5jW1SWiKxJ",
  "key34": "2bnPQhrhSiP2JpTvTKrX6dLEydRYmTKqQDtAGWF5HhnBsJieaLM1voVMm8xYhiVBFBQ3KRyTBXUn7w3eRanXWN4h",
  "key35": "2N46xJywNLaJRgcDWFmZKtozAuzx7YgU4eS5TnLR8ph9AsLQjsxvavRzQgAMpvdhMNrmE4TCQtFN99wXD171poMJ",
  "key36": "5HCz2YwjK9gABan8Y9qGcKkb4udW5TMUrBMNXQhrLSA5G4g8CX7TjRWgUPV8HLFcAau2f8hVamR8yvT8SgbXqNFP",
  "key37": "2Gc5YffL3ByBNUTnoUNKbmnZoUMieinJejGBDktU7Fh9wVpVhowZNkHWvy9SUwR73rX37wVtVn6Mg8rC3eXnym5H",
  "key38": "3m7o7XhXHAKHTJmb8qk3E6Rq8Rd3432bLKohoxZvehdorncjM6gotuLXrxTvjRsrg5rzFcWrD5drbjZXXqQZUU1e",
  "key39": "614f58jKMzN3TYayMKcXd32SQ8VaBBQuEX5hpH87rT23iB6g2k1GQZrbMjhSYWAjagcHx5JXXD6ZisHeipU8oERX",
  "key40": "5LsfEHs3GUSfpj7Qc7Ytu35MGsuMLL6LkAnvtSvymTBv8fpZ7xouGnySoUhGYZDnZebnTQ3tg41UTXehRb4YrRoY",
  "key41": "4RWfgjxRYXDNg5MNViqm7DgNuLFJDAYUGbZSSM322EygFA58sAcNzsUn7FqkjGHXMigxHEV55afviA4Vu8gTYaLX",
  "key42": "4WrGKL8Ae9XJeUTDdTwopArwnBSHuU8SkTk68MyMhugk5k5a3iEKyo9vLhTKNMks6TtKggPuhwb9HmNmBLKHU4Jr",
  "key43": "jMvFQGGGMAY5XFWiiFnZGCGpG6TMd74RNKougNtzEm62b63j3soiSZ4DRobC48HRm1yQ2vSysmCWumRZbCUbM4Q",
  "key44": "3BS1XRRU3SfAi82PJF3Hr7ngqudpCEVhtXCawURCy3dngLD5xpWVL7JdGvExsHHgFtswB3dbwXUfXhHiVjHSx1D7"
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
