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
    "4E4J88pQrQNyW3sZcaPaqMtopVJfYhC4bLFFTxp3GCrcmgGtvmepv8hotmJvL11VdAL2gMmqLwa3LdDJqMYcU12P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LzdsJcfxcF9AGzTZhG5qBZVsQFfdPWqaDQAqRw2gd79dyaivVoQHqPfiGKEbyzJud5oqHgAupw1kFXRHfnVddsW",
  "key1": "65Yfbfr1zMnoXRHMKwHdQtsMob7mmnZXVzur6dK9JbFVNjAGDQq3cvQ9ezJZZxQNvBuSZdbMH7JbLdzRzs8LTSEQ",
  "key2": "nedBQrCTYnmu7FabDgJgbiC1tvDgpsm9LK29kKhAeDbyLvtrek52Qv8Mr2gEcnD8EpqgZhZTTKFR748oKggqpps",
  "key3": "f4C21rj4a2yZBZnJLmMeG91xAD7HMEcMn1RZxkbUxetqjYcE7f6RR2CbeYutytytKyGnU7aertRTkd4NQRoUgu6",
  "key4": "36vuDEKoViooqtakfuYn4rNBXX7PfpUUZbXAGcAVQvMcKpeNzhvJatFc7L8A9gTuit3FbLC9vAg64qUJYp1jZmEN",
  "key5": "5KthkxU9Xn4NVY2Va8H1uEWCCWpHvUW8yirCTHpiJPZiTN8yk1Si5okjEsbTcfFK1HZUu69C4dMuGfYNQRsQS9pF",
  "key6": "4xAnGyL4PapyU5Hq22EGZzEuBZNGqNyqtth6JfcHKMEJnqVDhDT5Gm24XgcTnoAyXsfiU4qUUt12rg3hQC5o2C3N",
  "key7": "5msa8TpnTANBCSUtY6Abb1acGYqYZtBYEDFfJ2Mh4SsFok1SfhsmE3BRx7VwwfigGbK8sULuCfFVMTfhEv2SRajQ",
  "key8": "3QLFiocuKz5k8kUs52DXa2XNia3xo1fSVrK73wnWNcbK58tfoJ1139wGV1bGiitdxh46bWPAAR1Yfsvu2cgyjELB",
  "key9": "48rMKxe8VCK8YpEkKRYHgjMrJsByEX3CGD43f5yBjdt1b3zqnZdDw9ipUiT5oNDAWSpy2tgCdfYGYzsHBf9tGThg",
  "key10": "4zMgNE2PHqLLbsK9Gn8DNRr9CgxrS8RTa2gv3Zyi5w89s26yTP4xnVMAijCtiAGwAqVivfAtrZy4ptkEiYdkqQBT",
  "key11": "CHPRvL4ZuEwQrsaBSVAtN5LFqT7YrUuApA9fvv3KpSDygd5hH8Gd8cXMFwRRVigeBWxBDz3PAfPxt2hdjuYUxDc",
  "key12": "3PzLwjTHrqFHjddWPrLsHbkYnPeSRAcJzWbexb6xB1NAdv6uyp71SGHic7ivoGEDk9yNzHtQn2Lb81hiq3vYfWtD",
  "key13": "3RkZKD8Xp3LQLLeSSxY479twXXP1eZaaGCXUkAMuM8N34QyME6KMSRmFR5Liw2sVR22AW4g7t6HT7LSEKCUpyfrr",
  "key14": "2WjwUq6KnVmuTyyrqKLJVvDXWinhG6WFvAoTewZH6C3WqadPtRahZa7U42BdF15cUf5kQRM48otuG1BSBSpy9K1K",
  "key15": "3J53DaEBBHk6UYTRUVKDDTKuT5rjxzTiCPG4xewmnWYExg4tLEPXFZCaL2dzqYireXrsFoVmCxjM77YhZsk3Yeaj",
  "key16": "4BHHMih1mBqCiP5UWj6FaPcAJbyN8QX5h1zZ7A22L3ZqvjdzrQJF5fKQnmGzZ13Yw3JgEA4urbU5XHUX9cM89jEG",
  "key17": "3TK68uC7xfmab4YFDZL8ti2YsB7ym8QiRPvxQds3X7yuHF5gbr8Mr8SfP7B3fTRZFURR4b31kJJWMNSFimhBv1UF",
  "key18": "5WbRctW4LJNVgkTM2myVv6edq6mCo7KRx8fpofUf4XhAKDQYHXuCaDEcGYqwyA1vrCvNVoML9dNDVv3WmsHtevsb",
  "key19": "4uxMZG1xrjMqH9qc4cvjTZkeA1UnH8LD9oGqRtpa3GJZey2Jtr1Y4Px6KRKLahDGJ5H2XA2fQobHVAgPeGXZJKmA",
  "key20": "4R9XWuM7cv69iUWcwxpDy9wexdS8dD6uqeQXFpi1D2m5hZQiteTgKT86zBrCGuapvfk759jmtHCm689rGYZt4gNU",
  "key21": "4Ma2UHy6Eztc4K1wj9AzMzNCJEipFwwbHCLL1cKjtP63GwXMiaUin9hm2Zcdwbh6hUCLEkc9xUnPAzPc8wDTSSHs",
  "key22": "1fmuBDBcaguXVAst1E53ZZCas8TpQ8FxbC4n7kdnZNt9mZ69mwD8tZpgrhfR4rNawS8w9EnL5kksgSFZpRm8aQZ",
  "key23": "2pPtixuDcSffz1mfEAwFbgRuYoGirXJNcyzuLzq64hc4QYxzHeP4Fme72hZYgaM5dm2k4K551h59RP9Gojmex23K",
  "key24": "4jYgsVmyJdkrDK1uivLfkhk7xRPvh1J2ec6NAwGZ2oCSbJu4sZHjbXksSiiV6rHrfoYNDNt3CayWUyy9JbfNFEzM",
  "key25": "43fPKkDLd1MePirzUdRKHtko6L6zWEYRFM7cohmsa8f7Fd5xnJs3ZJQRnMwhQj6CGW2sinEr6NjdZumTGroD8aPx",
  "key26": "4Rq8KFfrfRTCJLbQSZGFfCyD63iXeYF6RrJazY6Ed2Mdt8e1xKhvUiWo9UYayTTgzkWw2fkx8wU5Bdx2A2z1sfXL",
  "key27": "2kKtEYW9VcoPWYyCYQxw1YJZPLNBmMD8hwDWZBh5Y4gWpKL5DN4VD9Etgq7FhFg5gDtrT9DW9Zamh4GvUqyfs5qM",
  "key28": "65Ggbjc18W44ubCLSsHkm8RimVE1HJDpyU5rqPc86Ep4yrc65wBzhfBMNSs42t58qurFEDswFRTAZqbf1A8u6PwJ",
  "key29": "5TnZYcVjr5Feo6Rt8dTvwJ4dfceS5MWsGsdygzVB9qPxEKLn4WCrR3NSSUb6fYTiEgT3NnDHiHWodaB6porhmTsD",
  "key30": "2GtrYSMPwffXYF1XQcYwNMkq6SWnmniUhxxsr7MStSWEGLZmcbu79mJYgw9JZYaVufjY5qDsiXJCR9ib5obLz5HL",
  "key31": "52VTKqzXjdjpTzA8uhz65PWpCebPfGEkKboy15eWK66frjG4fbHZZUaaJv6QT3XzzgR7SA2pAe4SLxZP2wjebkXV",
  "key32": "5WkhUByjh8SR7P2aKuK29x6HsT6oJ2a7Hj294FjBGGa2omftNs9GapvBBpBx8Mxqjh8CT8wuWPhhjivDwVjSGoMA",
  "key33": "4EZ846acig2R17zjPnxp3KCQq66YidTnYQYbHbkGHhxaNBtVapZQzSCEXujzJf42JuA8eUXvTe6P3oazQXtBJKBk",
  "key34": "52wRcPXCeNkoJq4StP7mAmwHhLEjcMPrATy19PPeYdYFKUvBb6qZZVzuk9tGN4VdHAvSWZDjAUud3MNkJYaEGG2W",
  "key35": "4XExhbd51iRFZjg7rWryasZwsoUCuRVeq1FCmwiicPECcNMPx6syRFqpjm8PjoqXsD3Q69RJR9q9eVvQEwvBbRwh",
  "key36": "2skdV3xmJ69EpnFcQx9ZE6AGPMaR7fNY99ssBFUQJM2ThjeVqj8fJ2hzHjp1Pq2G1Ko88J7UKoDGY5FZ1h5ByYiZ",
  "key37": "5cZH3bFxSAxeVqVJkM88ie4rHeBZTEXQHeP4T3GjPY8Eb9Qt6vd4Ki5J2XweN5nDiHVGQqVuhsuHtMvTTzAWswBf",
  "key38": "oy8TUSnwpXafNfZRjtdEEXfsZsiNTiGdUADQ8fLFdrmF585AWnNf6GWkQnmBBGc7sBAHx5yHmaP6QEh5oDUd5HA",
  "key39": "uyLyMSbWZaxJZKqSzSqzUcMMPfyB2jW4YnVp1dWCExstcE4a2eYze7pszqJ36LCokjZ9JomehR7oQYwEKFJnx1D",
  "key40": "KzuAUf594wpfkZjU8Qnwt3JBrrvBBZL4LJNuRTNXp8v2y7DCt8HPDM8ZpyuYdvEyzgdv5KRD5tL8dfZ4ZiF93Hr",
  "key41": "4vH2P1yQt45y65nHyua3g4sLr1QZf9ydDRutqj2PRR2WiM39PrK3Fj8dpWu2X8wyyjifBRWZHXCW7Ti3GVu8p7WT",
  "key42": "3y9UtoQ4R55taYAHS7dzZLVRZXin5cNELFXTvSVAgLyxLtrnLTueFRekkaCKux5RkSeRLn4poX9jhppFy9NLJFxJ",
  "key43": "38cL6QSVKB3HVJ3xSxJ8vFxkKGrdABwywJKEihPiKV1SdXWR6VxJneS8oaZH2pSyrJEX1nBZfTbxW7ZvpAxUvq18",
  "key44": "4bVHKscDRgKC8AUNnJrziW8oSvcZnik8kWnRJgZ4YC9hovb1BGtnZdjSFH4D6rK36SLK6eiBGPkQgNZmYBM6GLQR",
  "key45": "2igAdBHTnoa99iShHnEDhzqVcosZhmUNNJFD7sgWLULJjRqtMki5v1FwHKukEUejJyuf9ZY6FznVgq2AdZmm9BqS",
  "key46": "5G3x9uAsVFkWDcfkDMnJQc5BY5tQcVZHpVmitkwMNPsT38d2ocv4bhS8praBGzXkkHmQG3En8TF9X7kwvJaEzMHh",
  "key47": "5JQeEbVa2rcKGU5VS6kLVRFsvmCpr6hrjgoK6XZDT4MskPptdmRjve82jaTSu537XD42W5QdLrvNmdw6byddpwNK"
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
