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
    "4qQZX8TA7PwUA6Cnu7SvVju4yfrbJZRRyyMrtRQo3h8SS5tkTckbjEm1sshGya53DQoZkmGhcH9GuuexNTNHmey3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JPfa5inuvU6b9UowHwd7iRCg552KaC4jk9Lr1rCooE8tsaeST8N6mX4dYU1kxVjkgWumbZuS9p2HEWUThEc8i6G",
  "key1": "3o2FeAaTW21jbiEQ4LtbLWNV2mATy6ftPwHeE6VM4Z6LxfSZEMJFCGQX7AZND7FFgSxXgWNWVY6WgXpseSpH2ftu",
  "key2": "44k22SvCappMzxW9Wgx4dG7i6uR5P9HKTem53GKuFr9LjGR6LywxDwM6csvu8MW5ZqyEGWoDRdGdmr8JosB1er7W",
  "key3": "2XaRLwnwp6pwWB43zcnkGaDpEvQmLrzd9GZVacPdLXXP6hqgG19KhrYCkru4sZrVi4eJrPpibByT1FCvhCbB4Mag",
  "key4": "4sZZMKZN1amFHJ6A7wkE5EZD4dxjGiFcDzpj2NGi2xCnAhE6ZGQmcJjmVrpMV9vvP9fAuhYWTy8J1kWE83CkKgKy",
  "key5": "wjJJLneGxHwVSGSutPkdomuristH3R7t5q2LGoSLECVW11dFTVDmZgnNBWbVfbxnLKAzmhZW5UqsgXUnLNEuzTx",
  "key6": "y4ExDY36wAnzsoSZ3yPNLob22jxLEGXCFcnsb7Rh2ZZRtNv3j5FPWqjKiMWb7LCNnsNsxhs6sByKDM3seErEU1B",
  "key7": "45UCz5vP7kXcvA5Fvefdh698vtCGiYgqx8vjWv98qCjMN9Mb8rYUhC4FCB7FrQvK83EoUHd4UoT3bUYLWGTTY85S",
  "key8": "kJ9pjh2YxgDs3njRH2eKrRs5vCjJChAtzwo7gXHQYCHDPj5RcZXd4QQHMUJMbPKcSGag4HCeJSrfack37CAzcx3",
  "key9": "3CD7FZ8yF2DMhcjB6exZHbtv3nEs67PMYMj1jPGjSpSFJ2NhUeXPpYWtJQuU9a7eDeuiHu4ky8jQCacdMFvb1W6t",
  "key10": "M7m6nNxpR2GfvNWmy1XZiEEXcNu7vMt8Si5pGtu6NEipoCdSETVDGptbRW1YkaK6UjQhFkuuuAy39cXAgbhy3BN",
  "key11": "62x5GrH5wdhe4iwfUEQyDCj1LvmXRZvxAKUFrAKK1yAeBHGxuPqzr1iAGk84gom9sWLy9SB5yctXK9y95XNTVGzx",
  "key12": "yqUfx5mcTf3fnXxLQY2g74We9uwfNGzC5S8mwiugfkVQ7EPpjgq2FChbuoBrtvAKLBSNJM7ejKN6gcsEEmNcGjo",
  "key13": "NZWywhWzKnBJQGd9Wpqu9LopqH5KC4vDyb86NUZe3xi3odgwfiYh9oPV9S5eo6B66Dy6uo8u7zk7BGTpgqeC5Kh",
  "key14": "GpBQ9wAFkSLa3Cmt4neozAqzoJXWwiQXhGqZxisLdQZzUCg9EigrFbBQYWgAZJuAbkLUJiVDFD5DaTcgtUre6x9",
  "key15": "HvBsC7MGFj5a7nbd7HrxFm7fpBtq71CghYw7XXRt3L6MQeTxc346jT5MU9UXhhUWwaCfjZZiEnEhcGby4vVC4am",
  "key16": "2WgMLeWJ8YV5W1n1r7aCiTeB1n8rtrTmwUf2dmKDWDX5pqFXXpsXe5fWwreypQdRPZvBHp6cexLBpxJQ4RVjqXX1",
  "key17": "3ia6SdT6VQ67bLmrjz7skSfoWqk3rxp1n8fWjZRcpT1rXhAtj4iyJSyss2p8hCdhpygLygzJZfCc2AfqM7yYUmSZ",
  "key18": "5XC41G4HWphPsuWAEhgv9NCbQwau397sfviHEX4ZYet5W9jEdWr1hKAN2iPofk2rFcKCnzWXZY4dTBYHnsxY2Sab",
  "key19": "2SRnc3LfmxikePzRDyhFM18cegiv2EA8PzMjYiTEUatxNtN2g7rNueYqS5eud6Ur9R5CQ2eumoVjoxn3rB8CrsPq",
  "key20": "3o2wHwiUzK8PXKQEnFx4WKR8CxYqPyaVrGCMqKcVsStKmHGteUAQU1is1coYc7DQiCdLtGKe48FwRBy9ARugGYBQ",
  "key21": "p5SNP41rJB1ADvXYLcgoYBGiitwv6Sw7R3JmJc59zaTkuzeD231byusayPVSUofs2EFwssFAjuWDD53tJLphTrr",
  "key22": "2xRbwyT2ibSVjDZMDUYAEb6HJJLGYKER1eNP7syh9ca2NceoLoFREWyiJW7NU1oB145JuNXx3gLZ6ZaYEQXtCcPB",
  "key23": "DeirGkZGaskGfksbcztmj6fas4GjRfrc6hMnpFPignt3Db9CY3Kj49ESPPTHWHwNQ1kWtPrzupEZaWJefa2buRJ",
  "key24": "2SjDWVjHjXTiAms1MmSNGETKZeTqycqshU9JQABVfCt9U17b82jYqEGmnt2KtE2ebMBgc9RUtDngSfRWLhH7FBgc",
  "key25": "cEznkCqdj7LxHy7TcpgLeu1YQpWkS79sWo6uQGewVMXAfkDyjLQGGnkwVcX1X9RF9zwV79qGmY4YNTe3Ewv7Sag",
  "key26": "3SeMBqEeAfUSNEX6h31yCmQnCeyyAMnvJdYnXCrrnv6zt8kcWUaxBFa2aht2G5BwumBGZp5QJ4eVgpsnygz3JnyQ",
  "key27": "2ffBEZBndcqBHsppmRUP5pBj3uxP18rTNDcS329qZ5Bdr5P5H55Gc8zJkwpGoMLh8baboqs4SaDPG4vXuuU3a81b",
  "key28": "5LWPXakadzHuuajtyaGg7uBu4CGnn8rYsJgPqWrJVPJzL8Pe7LoteYvJZxVmBRjg9KVX942jhPE9wpe8oYg67bxm",
  "key29": "2GeTX3TCk4zm4kZdSYPDxWajXeHeW6QJh9YkusMGMYNKB89D2xVXCqhStcJwTkbLSZqDdWdgr2rj1cVC6uVFoNvJ",
  "key30": "8T4SSh39yghxjaLPZwZWFivnZ6Po9GiQYyvEwHTabad54iiP5Qa9uFFhstY8coCWnkBX6DN8m3CEKKcfsEY59MD",
  "key31": "4xQMy33nwmDcyYiaCNRCJkVkPtCRxK3TXJdLGjrEDpPepFUZeMGLqHxhFac1NyQnrHJevhYzuCaJ3ghYyqPGhQDg",
  "key32": "3Yz8ywgoNH9eSuTxx7YUz1JxnNxxTnLzzrwqFCkkjLSRV1pvBbTNU6ed9yEzoXHNPv8ezzg86tiYGxmpRf8NPbjU",
  "key33": "5ke1F5GVLKqhUbdWmdFmxQ5cMmcFJ4qeC9SDJQLBPyJXEjanAmpioUMe2MPUXaB8z2i4UHcixiXTukE7NLXUA8b9",
  "key34": "5XWNAAhJRU4Ucai1fKkXKiDAVokDeSu4xQtNzFWo7p8FGvREC2JhjS6haMm7x9FPWRk8GWFFW96C6aF7SwCPpXgQ",
  "key35": "4DB29obmhCgWqcv6VNLXuyt4pTswoTAeFUZxiRUonFjYNTzwiYR7Yj2f9ZikKCgm4rEhp2GMcTCkHuQA4HeBy18t",
  "key36": "2zJiEQzf1sBU2o7V6doafx8VTioVRwo3brTp5zNPrn6GcfpTKJGXvHpRuC3jkK8YvnH7Y18M2ZrsjrK6evoaZCbK",
  "key37": "5d6ngXqN3xGfBPrQXaorDq9yVnomPzDnQTiKseTjEMyv5U77DniEhHD7GgquZvUA1JFp1gXPiAitV4Vsqjg4Q7qP",
  "key38": "QwNK2Kph97QkeaFmQ1ndDwRzEwFcLsZxFxQKZguGzw6phRTsQQwKUL3w94uP9UirCnZpsP3ytVTjUjtpc3vwM7c",
  "key39": "YVCo49w2QLUxcgE6WTKRQM8XCanKRyvi8zeUuhqaE7epcYsU9Eg4q187t2U5DoGfAhk4Jn84WpXbAFySbyySreK"
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
