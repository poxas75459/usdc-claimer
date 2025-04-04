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
    "5A5uCHnWVsZmw15iiq8vqVnoHTcrkp3fhvFnjTKYEKzzAApzpBrBk1pNhbDDYYuZmqtuXgzJSsQYxmk1cvjH6VcW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rotTJTPeP4SuG65Dzu9uSzAiyyML1bVccqz121YVJ1BT8xwrFN2wa5KHw4UECA5En1GAawxgjFUupD3NSTXCXoZ",
  "key1": "4rrmATTd4gMgyu6KxD7PwkpGz85SPqzawg467zXqPPAokWNBSFVc3uDteWJu2nLnRAwfTNicKevbGnX9bmSYx9wi",
  "key2": "2FnYF8nhnmcD8E31WNFsctTicLvyudnrSEJVM7SRyMeuXjyJ4PYxZaiJYaLJNUAsextMvR8Cs6AR3w8rZDJdmLTx",
  "key3": "f6LDZ2vkeLPvyH4E7zW4pYyFDca5rHdWmcQ4a1tAFMf2TXZ5RPdoVJzekBMW1Be6bZ3mqwoPyJswgn5BrZRP6zy",
  "key4": "2EUtWvKDnogJZoMCDmaTjgeZbza9DvAjtMQFRSWims2JxCEshbKnHkZy9Gzd2BaJW5DLNuL1FD4HMrnbmpKZ9WA2",
  "key5": "4BsvaV8FkWqWU931VGm6MMuMAnPL48dixufAwW8wK59PzTdDXxNfisKd6Nmq9iYgwvnU1KQbz737gK1w7Rjgjsy3",
  "key6": "2fjUZgmp1EZrawZ5bgK5PjuTJqygBUjoxoDESoR6ENMFCXqfvEU5Caiy9kPv8qkoxzX2WFos96EafyCd8SjjW4kx",
  "key7": "3EhJgKrwK7sHgF7nADuUfGD1FSfsP2KUok29ygSGgaAL3RUSEqqfWhqKTvxHgj63SGYaPiNieBFsh6j8aRtuJLay",
  "key8": "21YiVmLy2kDcREApf311mXGhK6dfo61iNyLigdYpbrNYqLLHivtiJaeFfEcJCEwpcifWg8m5uLj1evJX8dG8AwFA",
  "key9": "3V5L13QF2Fcpa7hwR5ywp5jJqdNwMUEVR1TL87wKG6jCqGsi9idAKypgyu37ETxZwhSPGZd1Cyw5zBPbWiADJcjV",
  "key10": "XrTqmYhuq1xhQQVZgbuYxwE5SPJ1a1o1uKDqGRsrAoQXZLAXaJDpsqu2fDvZ7rahHoJ1GngA5CRRACnan4c2Dig",
  "key11": "eXRNZ4mn5xFqEfvFqkit8tMY6rw99v7kTuiM5vxhynZmoED4LUD4hk61E7Cj9wCo1L4aK69jsBCM83TEaBhEokZ",
  "key12": "1RXXN5fgHZSY7hJKWoFVtedMUu4q2aQKBimDp1K5ph616hZqG77u2hdosXjVv3DYZFfDSSrXXkMiEyiYwicuZGx",
  "key13": "2fBPMmdNi5KSL6eYT3A2SK4ow1oJrxnLSwLxxAGcN4Gbvct718w3i1RHa1Ta9BUJ6guavoeZtU3GDAKuXUhX7rGE",
  "key14": "5X3VNqUrzxR3PZJx2FW7Rft5BtFSLoKRw6DwPgsYFipYn7wvpGb8P1saryEhUZoLynBoRq4ST5bucaB5VBiXDtm5",
  "key15": "4xd16nbpwiYBb8BRJKhG842RSyoxGfTMeHjg2MFUv5rwAhoWdb3wjb2dHKS7Bje1CdaFKSkP73aKxamhq5E7gNwZ",
  "key16": "5UbNd88a8im1mqdhqtkgjjsKMzk5qXxdHmRp41iAC4s3BTXk6hgssrkdUwbKYc6oFJrwBvRmJaxEqeXSuE3cGHqF",
  "key17": "2oje2n9kW9LuLYjPn15vF3N4goHabYiGqy4FSmA93iPxADzTSjcVGeAQT4aa2z1jcGqYMB5mJqTmdo9Tas5pmpsT",
  "key18": "2dMfonQkougvY1VQ9xpB65qZA27YKcw52x17ezvyDXpgY9aKQmVYbpPGc8NRFeGCkKgcjpVcDDNzNbgJKyanvszR",
  "key19": "3HKNHBVUZVjDPJk3rgL3jEZfbQJnduJP5LEmMigVnCdJQMTr9waLgWMDVY7bjW6cgMzpqwK1GdaBC2txpVMazwYz",
  "key20": "5MutEMPvPpy8MGF6QDjRYbs4WEqAHiJ4BkGe15ELnQeLaJyoWdYYu9BTCRQUvHWNgeRKPgDyPyzU18oyc4rA9iuu",
  "key21": "39uxtaM8hcPem6GqN2uL1iGUz7nN6g46d451r21eJ4iyHzJyEGia4H9H4gE8Eqh716vNmW6PKVzf3pPbDE39bfxy",
  "key22": "4aqRXm6rSgDEDPnih1u8iDCZRinVH6xQkUcwBNQPajHRfkk5xJkgKfH38cyDDgKXiXRrFJeWDRBcFySCwN3o1B8P",
  "key23": "FBB9BaGWrS9vHJXhrPS4ywdyo5Z1vhMdsHMAs5v5QT7Pi4Uzj2c9vCyvLBk74GDTcCPPduKS9FvNfJofHuJYBam",
  "key24": "2XeVqZHhvviqHtZzoFituUnMLXfiYJu6wt1A5u1NDd4BzmfxVMAvuUAb77gsX6ANzs1sf1TnoKaKycF48bQuNPwG",
  "key25": "2GtHL4Qr34W76DqhxWQHRJCce4BqkatjPnC7xhbLmsQoiZUfF8a6qU8acYmXguFm15BwCsiBZ8EyN3r3jLY3s4bR"
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
