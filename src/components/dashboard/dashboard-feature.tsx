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
    "5e5y5sQXY4AkRKujzvAgYqDQLtXDfM5FuUawJTHXXsEQBTW8FbtCZBNfKTMGpJwp85UCC566RKZ3gFxMXUWRSx1Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59u1oHJLYVvTozHYLHBv6crm5tL1TP9KsY58s4kLFavxPH6Lfr5wNHH1vRsGKb5ecy8ce4oEexJr8n6e1bYJ4syh",
  "key1": "rW43NX4UxRmCxe2ukiz8oA7hvAPG9paMm7b6LL1ndJQQMwLQbkch87taa6mV4ArHz9Br6QDjcSMbYZ1C3rFEBxJ",
  "key2": "4zs8RMQNbNxSyzuZTjU3KKkHBb8eDkEiHxZzK1eviYxGofZck8dQEKu6xL4WexNS1qaBttdnZmWRA9rVcCwdUWdq",
  "key3": "4RpoZ7Q2WxrFLySYSGxu3YB1J6gs1ZNmAMhiounWisutvGY1wasdfgFEtiFYLThEJ1iFNWdxMHrCNjxsGVuPPyCU",
  "key4": "2vLJ5BZfmDKUuA5tsJnJ6DHPmCrZMDGgNDVksDBDXMzTLRgznssutg37t8NdtdHvYD99hV8V2yKmZaiGvu8xtjEy",
  "key5": "MW5skbrgb87S6Ehptg9cpSYN7TBG8FRoRryCbFK9dKk54JfdobxPfrcaKF3mpCUchGF1UsvMWZ5n8mcFHqJpHnq",
  "key6": "4FYD4QZnTY5e3Yghv1YcD1hGZCBqe2CAb9euanWjrijxMnVqHTzZouDTmKzy16Nmx75scbUGuWLQHE3vf9qejkLd",
  "key7": "4RTBj6qdhNzvk68E74oTZKUUhLnmK4dtdeDL48VvpXVNhRBQE9gZ5wB19xUVyFYX8qdXfaKVZiHk2ABGDNLBeNpo",
  "key8": "3guBFJTkLTRn76zYrcDjp2SqizFnG3z8iFvZk9PsBwLBBMSbhR1xBn8eFk5y5RWTs7Csvp4J7tuw2cnxqVu2MTmc",
  "key9": "2JL6X9NtTySkcSpvN57SyUrPmBFy95A7Up8WibptaNoEguaumG28zkqy9REp6mmwEQbPKL1dq1yXfqMpBiqMeZpk",
  "key10": "27yCk8AVJTnh3KWi5Yinm8Nfkhxurww2ySK9UutJYxkwnq78NghWY9RSjiFiQAuvdVDp7EDJewDZVqsX1ygwxUsj",
  "key11": "5TE3cDBddXSMfvh45K2dkjyX7YGbXQ3bTBn7SZow2wNx7Xh62TzV4W8qVk6KiUeYntoVAbnaJB9Tn5MPqoLejTtp",
  "key12": "4pCbcCC6DsPqq8EM5zWHgHJYcfHgkdD7DtyGXNBPQnozBR5BzAsRbzP9LWTD1y6ho7K99TNzB6EFDD1nHuxpHo61",
  "key13": "3CBoyNo7qGk99E5zgB68RW9Zdqx641Dy39RPcQAw9YnEtM21u2FypRC1XdFVYULudyQkYVtVHKbj3X9Zxh1MNCEN",
  "key14": "3Y19SmX6Myw6HpMxPpqY8xm9QuVMQ5ExVHELJA2kwXoSA9H2QmbhSB8ZBPRJ2QSyNHcoHRU9CnqzeuMtXMoaS2KQ",
  "key15": "2ZczQhmJg8B4mpxTdLHqQ5rZkLDUNYCr7hKBGC4hTF58iJdy6jM11nPtx7yiJaYQt3fquMGxna4vyXkj2wjyTzvh",
  "key16": "27LMf7jabb7cAD24mxjFHc8bXmf4aDjU2ZdHxYw9bBZKoQqCm2UQsURqHMx2prXFwvk8SFQi2DMuAKyKv5SAEqhu",
  "key17": "3xFtXxPUuaWSmtbMR6wY15JZTEXcKNREpvixEFoRvUipGioMcKyHpNtcosbJJGy4dTq976EfsexmzSxAULCe3AjA",
  "key18": "2LBenWwjh1WvKGGPFp5ZiP2rApMHS3aTBibb9nP9AsLvcVs2zV6ToFYUXYwTLYUWTLTipATPgUD5cTsh4b8DGznU",
  "key19": "Z2u2tMbvy4QHB4vk7xrusdMcxhPPar7fgiGKdae1v4DVQ9X6at5z59e2Va4JFJfrSvxrnbKbcU4TsE2sm1TBV2h",
  "key20": "MSqQyFfjQAkAYTxehgEtpeQg7bX1mWzWsZbHDAuuiMPMTSk8CHoVkR6H5sfaUZiqMnpzmmYLvSbWzwY5apg44vF",
  "key21": "Vgq4uNbRZSTcejSqJ4XumzsvNcZhK1FXgt71VSJdwJRZxaMKGtkFhpgeJMWEmu3NNtyuGc3L7hbhePWZJh5XmcX",
  "key22": "4bnAK1u9HAhHczDwTViLCU2wEGsaU8Ab7emzhAJTmrgz7YuH1rctPput2B38d49hAyc7y9uBfunNvX18HtbtC1hy",
  "key23": "236PfzoKLuvt1pbdyH2mRwCEqDCyuEMcgQ9veL7Sr63N7sCECDtcYiekv9bwzKCaE8m8HzBqY6GzrNPZKN82EvN7",
  "key24": "Pb1iBi1UtzWRe9TZqmNMX8saMNAWNQmLas5ZdG9iXAtsJKKBKp7oLAUwCn4zowM6DupqAMbUWQx8ykZ28CHoVXX",
  "key25": "64G3AN5WC7SiJB5hxS3Cx9QoYg48KMJbuuCtpwFyNuChfLVkzQwPLC4UgvLMqGLaYUir7onNYfmZjB4RUXRV9r5J",
  "key26": "hCueNLotfsPRpPdggfuqpT5cDZokxt5yvYFBU5i3YWKa5c7CFM398KgHWqv61JmrjoupRmb2ynAsuxu1EJH9XXh",
  "key27": "25eKVR6PuqK7A14Z2aC4Y79Hw3VbPsUfzyHrVHdzPCa3QHdYqS7GCumkv9GCNbPvBMeZvaBs9dHfDHQV9kQJ6DKe",
  "key28": "5ru19LTc9o4ai9Z7b4iuc7ipNEfhEUvgZ7sKWr8T1tqTsDeiX8V3MvTmwGEGkvazN5Da7TTK2bMCexRbAfZnQMdf",
  "key29": "57wbj2F7KhvKfr1j8z4ELnbZpnt3bchNBP2undTGGmBqsEBWb3npP2F3Gxx47L72FdrFSZPPMCbQsPYRK8bTjp3y",
  "key30": "24Kh6ddceBHfc2j7LT6kz6h4Vg18bo8N55TU2iZ3AddTcyUPRMrCL62iT8CBUrYvYpn9aHdpPdD9DD2sppR6qhRg",
  "key31": "37A1kfKGcKdzoiyWrGYerGggapCUy6nE5uQ2QkupbKoTvYuDkydX43F476udCKJ7hX8pnp3pUJtKtN5HskTVmS2K",
  "key32": "Uyh2PThtHwcjHYFW2NWNKF3auKCxkLdhrCmB7r2SZpDqAPvXUqfK2myoUghhFBbczE9kbTavoGD3YanLY7XAD1z",
  "key33": "4AxKQqsU6bXGNua7xSKdV63RGRAr536smwGfE6xKK1b7iZ7gbWRyYgNRrVMSY8Pu2TUaKTJNP7wxATBf8G9bu5qy",
  "key34": "3Xn3iF3v4DiUAo3h8CwVQX9AgUyfTgMFQxB25cU53upYwKNujGJVYiCVQFbZss3dkM5enC7SHorWkWLYsQydHJ3J",
  "key35": "2hRZaTL7T2pF835w28KSJ5qMvyLzKBENwnZXjG5ZqwLN2UMeSSneKgAixYxNrEHjUQAqLqNuQBg3mxwfJMYZPmb6",
  "key36": "2giDimuwXNhCvfpMHdP22dsmouqaJvmxfvZ8pQTeK8a2EAWfDeX74712xJ6LoZ48rHWKCq9REeMLnKDfTEkMKNmM",
  "key37": "3ZKTHXXau3zjkwngamyQC7rTbrYnBAoMJuPrjA9XzFUBZbEeqvbEoy6UXrVYVoc8pWZPoL8Uquow56Gs5Tad3xs8",
  "key38": "3hz3LGKHsgLLHr3QjxyVckEEQRcFBQjejV8h9WCbqzhXS1wjojr2Dwo68BVDe6Zrh5YZLESkFaFPKvTkQVy1Fkpw",
  "key39": "4zmZiaqPSxZzPcqmTM8Dt81U2vdjveJ3LpWbSZ58LS2wMoFcyyBZycwmiwshcuD2cCrupYNTmBXLGpFHUWeEwQxP",
  "key40": "zCU6uRDwecp4LYLbmNTeJdknWvQRQkbzPsV2dKuD1iKtMYfVzqKnDhN11MB11Zz14ZbTuQhxz6VfJSU9LyssDGp",
  "key41": "Vfn3c6k2Jbaq4whq9X9NEz3xNwS2f7NZ5EfeQwCaX8Kg7VJq9eeP56jEs1uR9Vrrh1i7YcJ7ReJdts5A5wdvuUf"
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
