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
    "3DwFruMQUtZPUWhAKeDDytz7EpgVHNn9AUAHmeHJ2nj4rTSy6J2x15qbBiMJ21kRpp16917ogy7q6J8MmopjqURk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xKSTmjyfzZnYGW99xekDgAgUB3Ez5Hn8cT3G6nC5N82VyHkh47WCfy5VgoaDgiLQgF3xv5FGquJC3UWhrt2Gyg7",
  "key1": "2wB7bao4LhEJxsqZGtoExLBxwkhBBLLHK5VB1g1P6vLzzFPevFhMRMsaZrLGX39W1dBWPkyztsedhWa47qxXYgge",
  "key2": "hP4pAtUAY8Th5QjhHUwAskgwS7CFXTJESQP2ibhn4sSveGkAbRz9QjhsmqyLuE4TPTEt6RT2DZ4YjdAWfB1Pgh2",
  "key3": "34RPQ35GqF1TfJA5bZJUC7gToqKxyg6Wa2xeX6RgM4HKAerkQ35pE63MaeX9DYya1dCLWyeEn66rg7thGmZNgaTV",
  "key4": "GizGuAWXRGro8KxidVtCSEdTTEgcQSyY6fgx5BsDw31Xe6Kxv6q7LQEgxojcnvJ7oUeeMEx8RPnNz18amY7Vjet",
  "key5": "5or96TYFn8whY5PuYU4H71k2p1vPWRjUfNTxbsWfU2QfFPv3UhXfeuHgMPEchtQu2KEWomS5G1o6SNgGvuiobefz",
  "key6": "jCbyaGdzqy6xbJZyCtVXjW1dARjs4VUj3BHq6t5mmpDbVSVSCLNJpz6EXCLyJatvzCKLKNyK2tApp2zHJ7cqJmL",
  "key7": "2Epii4NcTmz3PZpkuzchXxyPSnx1Q5j8bCU2L5YSiAeXKG5dwEdqqN8h5syKHif4aAwMZNzjqSrMckaQJcmVSxKw",
  "key8": "3S7cCP45uN8SHErqMtyYuyusgsppGo1VPWDmLHo5SHaMhdre61p4B28L6JEiepvrNoNtPGL4CKJn9NrbaoegwCCC",
  "key9": "4Ti94WkLeJq25AFan1u2vs7Af2QixuiToFFjb2ZMYZo2avKmZcK1DaNp1Ce83c8ff6FvKcX6Q2XtoLEhyMZg9CEg",
  "key10": "52NxzLQJ2vFinctJ7TmDR5vBChnoSPzWXyG5JFDC9nL7oQ9RadKd8hLAsKbDyrrss5bgGU4fWgsh67ZgAcBkZ7qM",
  "key11": "5wmUf9orwbHjBDpELzr7CSnmQVwXms5EkXT1nuD12GnGMoJLsS3GYkKpeVgBy9CDipHHxMgqUebXqgfvXnK8QJFP",
  "key12": "3vzoGqjyVzesfR8qeyWmzmw4YTDuTQT3uRu51zVPv4T3uxDA8oQ6iyKHFzWVDvGRAF4yya2x2KdQtvzrG4M59DWk",
  "key13": "5a3AYyAWbr4W9MjGgvdouVP6AM9w8yH9dcVqDRE7gPMKFNhYFcyKqSm43pa15hHASQcMqTujtHyG4nk7LLm7y1oE",
  "key14": "3fgjVHcNzPXvrsRMSQYGX4nxV8xqPQbfWi1TURNHXEMZVipPWDGVgrreCWE8GpY5Rp4KLoZyxjKKu9SmU7BJaHTE",
  "key15": "o2y1RS99T2JMG14LkZFqWMFqXc3Dd3hEYZMu46ida7YUn75Wbhi1raM6anKZZSAoqe6LLSK2d37mc95KEF1xN86",
  "key16": "4oXwyFamviGxBgHcqG8pHN5y8sYncYzQSM3cJ2u4NGCoWZJ8y89VtuGLeuTgT9qW6CV2wMMRH4WAN1A5wZfSLFc2",
  "key17": "4QjMenbiamkUCeDNHHkpuTcjoPazuT5EenpQhT6Cy8DKy1mDBnXgAq2JuEH86K3T8wJvEyrX94dYGExQBFvUPme",
  "key18": "5c59n5UippdrXS8JxDxjWbsht4gDjyLXcN1jrmW4vU9CFXVQp45vRogqVpC9ZEjdVS5U6ifi9EKCHY8D7gK95Z9a",
  "key19": "5RjY2bgBiGVFwgjCeFB4q7zG1Jix461Ab8Jr5SPPPVud8PokWoit4insUePUGUyxP2bZYXGvGyQpU7Emwk9tiPbc",
  "key20": "5UDS2isE8doZjg6ieTd1xyUZtbeik8WSrRC8Xr4LWbJSxUAscNLWCmHFCW37A2pRaY8gqmG5sfSX6tbonQ1KTB4S",
  "key21": "4kXJgXusm19eutN29CAgPpggBsqLHt9dbochhdxpcQpnmoW7V84AT4vEt6YBRSEhfTEaYjjNsCiQyVWeUEqZJkz",
  "key22": "3QsQVVwZFsdEZvKpKjoE4MgNs922FLvLd7Ayg5DhWCm9CqFwAGLva8MoB5wu1oU5MiLQcR4qQ4Btt8nDhSyfPEGN",
  "key23": "7xuCjwE5HBeHQmfraainj9x7kFNtqPZegBjmUYY2BRT33oAgQcT7RnrPSuCj34GQGJsMdYgfwQUpg1uJum6YLdD",
  "key24": "1q1qCGGVuLtShWPR5ouNx1VTwfwcpZYwBvDVhVUS3GJ6SJv1Kx84Q8Wroxaj7MjT9BxtSjE5HmjhYGsKtyb9qXd"
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
