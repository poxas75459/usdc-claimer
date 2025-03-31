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
    "3Z2Awdb5kJfZ7Lrumao3r1UFv5biWh62wXr7ik9Z9s6QaMGh2UrAonSh7gUVLJFWQf7tDWJTrFKjx2e1WYY8hJaU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DLc88NySh5zekb74uk5NuYrofWZNLpzqZ9pGD1Uqfy2KcnYwNepZ5gyXKxAr669YHTpG71LMTbqtXKc4W8BoP1U",
  "key1": "2nmhQRh8LFE6LsHoPmPFPMcqAjmutchm51MG9vaJ17w6Uifn3usYuv8yRec5eJSsCyqF6qXKGzHobHLBgBhnt5Y5",
  "key2": "2Q8Pwi7EZR3r3E4C4yGTR3YZq3VQxawVB6fvZyfgdpDn9G2mgVRiejvFw43yK1UfjJu1iZe8LWgAkXBT6a9D5cp6",
  "key3": "5AXg6AC3DH3oHR4kcS1RjKk5CnAHNzpK5eSzGXvf31rNPgRCqrmjCC2aPkpMZharcvUcUTX4yBcz53qaGXe7DzHL",
  "key4": "2iZXocJv5rTftq55uJRXk4fhhgozyRNuD3L7egdyaWtCKcEKoiYtozLanJK2yjDQnRUUqMVRX7YDSiTyU43CFnNB",
  "key5": "231NJRgZMHdcb96Ke5HkLatyRad3GYkjfGUZPq1L7CRJmD6KsWkdyDt1MY8HgWoxzcWhW6arE7XDf5S4psqciHM5",
  "key6": "4LQ4yYEbM51R75JCHQxqhnXSyLTo5EsTtvLAfhAnhJLMRYWWsYSu2UD3HzTn3Lt7DWb4qtHbsXXGVzFM7QRK5pb9",
  "key7": "5X4U9qKsTTKyG2cWRA1bM8fnEhJBQKbN3rmZj7rDozCB3ghuUFid6kdH9zqTM6VYjuXhKegNtexBzyixC927Q584",
  "key8": "zgK251YGRwHD2T9T4waKTNUwRfKXc23VoEnWqwg3BPwj5mZzf3XUB9UfDG4Vph5mY3qvuogeV1ARQ5PrzN6sfet",
  "key9": "UtdjTpPKgtxkN6iwkbbNQEhFZHUWuBWjaQm6cpBkgifvjbuSUvVKr1fjoHgLwesmxeg6yZW38jkJmvrAuv4LUQm",
  "key10": "3VzzGdHa4473nKzrwDQ76sZE5DLsHjgievWW5PtzzMxave4Cni7dJ4BLqcfaovMwYpnTxhmsrTPHEVwWTtvFWPW3",
  "key11": "2BPLTNnVPZX7fnrTfh9PBwp2LtKLids1SYBhTLoCnfzsnE7ysUEScuxEV1JEaSx5UrPjyos148ZREo7sPfSMQoDd",
  "key12": "2NQiNWAtuNvuMLeFsuvyqHaDkdUHN6AuxGcbcrAWgHZ5AoB8t1ENnE4ZkXzmR9cXp9ZMNMKZd8eswDdR55uk7fmC",
  "key13": "2uDiJ9fSPD6nhjDpdzm15pzH1nJbRqknVm2xF545WVBDmrT7ktJx7ZNyk9fFghHhGKZoDVafgyNGNZ8fxYUSKH4W",
  "key14": "2G4UzeBrzfkmnK4BZcqi8DeqivQzzGP3qiRb1yzhJ9i9QaHL7B1fE4hWGPJSoAoB8pz9bCD6Kvd1Upn5w3FLBwwj",
  "key15": "4br5pkZYbH6TEsQZocMvorTQnYApvyzMx6XCGhdtzRvXx9eJHmMCLrkkwebd4hDRF7WUYLW2rtPH8L64FsiXzF3s",
  "key16": "z7KiQBHNPVjJqvP2kaTWKxL7TwQvyQQg4gi93TTbo6BLV1GxBgVKd73eW27gWNfMw2r7yNY77EqWJGyeYZaHgGm",
  "key17": "kN7fdTxC7J4bX1Xhb9tmkQ9QVjW3LGbRApDKQu4CEZUNgLqZf91UdwwQBwNA7sTUJWbNMUFz5GGm3FjCeTetSJt",
  "key18": "aY5PndsbTdriFVLvcq4WiS1LH1XuZuYYn9zy5EV55LNz1jXeu95LXcMwcdRGaUehJHkTbqgetCD9PmJ7pVkQxGG",
  "key19": "3mu75bCg1D8CKEyjC6Sz8nLythiJswRnoJBeDM8cpc5Ti8T1FHMUGZrPk6GZCYc699cA3QwNkiH67UXVUwYo2Uj3",
  "key20": "4A4QfKxmKCNCboNBR3XUJwCD61Wurg6AUaocPiMiiqhnGVrBJNdQnHSNreFHLFWLraZvsxv7rGXdM1qyLivY2j7b",
  "key21": "31VQjrEuEEjfv4hGgVthiX2D9fi6TYuA15xfwgNkwT4cR9VC9aq8CcyZGNdfaPk8NdYmFWFvYgGSqapTBZzjM1E9",
  "key22": "rcXH9CZ1sz7DkRwo9GpCMDaci5WT57fEvGAqvcqieGYM6SBQRXPKKxubtB5GCjcEtQpzUDQ6xt7FuczhZhZMbrA",
  "key23": "3UL347qy3zjqdfRDwBWmRPcB43TeP2hK7n6PvYGUAgjbbkkmvySmoAxRueJ3hE5jMBX2XnGzYbJ1pMWrhgdqKsSN",
  "key24": "dSaU8jNkHMxKxgiWgEdQ6X481VhAZs6BraNCrVCEMHEmDAJLvFijVMu2RoksAEKrED4odAtqVMJMfer1nr1VwXN",
  "key25": "3gbistMuFZPBehHC7HLMA6abLvsFChNkjiUnuRMfe2ytLV4bfmFqHXbgYGEyGhg1UnbPZuuAAdj8anowfncLWHK8",
  "key26": "4Zsdsw4uZc8ox18ae1Xwk3WDRiBAEXBaYakMmPUaGmi74XHAde9bdvoQA4CJfqxpGo1xYURq7ckQ5n1eiLv8KKd1",
  "key27": "4oMopDAhToLi3S4a8bBa2VRQKr9U8b2UKmBwPNWro34icZz4f6enGyN9CAA6xAoaz72yVjYSgEAcU3ztQDQeWqeA",
  "key28": "31KqQHVkRujx2WThsADHQg95HoixjLKou3VcFeXsTvhsDPBhe7sBNGyYauXWRKyVJdwNsXe2kkpJjbGtL5scknYq",
  "key29": "38nYAdmxGxwwDZv56XbUL3fCeEuh7YxWhkHzQ45AVKxMC7vfUTCnEVC6ygQUuUsB8oaXqg9PMByppZZWcPiiPNdv",
  "key30": "4oCVGq6cvTQpuBUMSni7aZFPXFtVjzgJYCYEyejsnCsXMZ6F53eoUvamGxBNExo6KzPuxyqbU1AmhFga4Kf23J1v",
  "key31": "v1ACBbgwd944ECTQnVbYyQT4nfq41RZbgtBJxxLGcGJtVs2ugAmRD6jdLYn1qnMysZH96EHxPR1jMqQcmV7LJFS"
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
