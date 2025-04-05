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
    "3t4NPRLRGefrcvDNF9XAyhr4h99NCuwFgUgcJ74BaUggBfmwNxMcZt5EF9ocHkrJzs6uN8T2MxJbHgjvjn9M1Ces"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aieD488cTjYEzY7pkXVsdUNiNZFd9KXrXPfcwU9VqShj9s4979h7nxsLzyh4M3Br9SGuA4zrjZtfp3K1PZ635Uj",
  "key1": "5tPPiGY9ZchYtDBNfyS13u1ErkotG7UcGXXMzF4w2Nmd7aoYX3emMH5gL9i8GqKwPfXjW3hvDzASHKEwqnqR1hgh",
  "key2": "4JuXePsNkyALYyx4HiMVY4RDvSfz9wyMVmNVLNs6SEj1AUYRK9bciMRi53dCUXHG3yoyGoQyapmkrh8LmFVQd2ng",
  "key3": "4yUWwtm2HunhQeDsGVAHb4iiLoMoc4tizJT6xbJreikxgdPg8tn7PEzU3HE2eURGSrhkceC6B5rAV1ndQZ1pirWo",
  "key4": "2kbRpQLz7pe3fyA9ybj23AkcXBNKuussPFHuCQs6UKM4cMRwoVXC8un1gYJXD6N2YX6eenbtuDE2EULWRxiufDW1",
  "key5": "47fkE1LX7iRgVkp1MmJehN9avGkenhRBWsPsDG3BPu5newBzCxmcuqg6D7S1zUCVFkT5xxUTRTcwaSg9sEwVA2pZ",
  "key6": "4C6RcwpjhZmwNpN13knxKhrNZd839XT3hYxm4MgJQKtAdPVesYmTy9PPjFWk81kTBK6ZZkBiqu8LsgR6zEBUh4ZZ",
  "key7": "5HDvMM8L58UDwTtdZqaNDKiigyYanDhy9r17JnspcZmt541i1p7NhHBAs4SAgRby8viid3BUxd18gTt9M6E3DcxT",
  "key8": "5Eqxt16kjp5UbdqXzb1TecBZzDKmnZCRxDxaDj8USsK8EnxnXHwabVMEdGJ84MopvpNPVpetmnRESndnAsLEE8f3",
  "key9": "3jnk4Dpr7uezTAxipgZiWezLUZwZfYjsWWtjth45nMvPXnZVeVAX8hfwBYxJThbbkjUB7KcoLkq3nEpPzkYYwJ1f",
  "key10": "65JVL7VWDYPTb1WhVF87AXeWkGEJEiG2G6zKeLcVepViM3nDiXBFP6vrz6XySfmjsZNXXuWSEGNhPJfTmoUEsFvS",
  "key11": "2q5aUWjq7iGuWzBm2bzU6VMY8ctrDLryEcMH32kAPFBcnvsJ4SEVNBGePG6BoS8XyBmtTj4U1Lo22RZBoo8kruQB",
  "key12": "5Kn7vwfgx5GRrqGugDkU7iJRNBorhA1JwTMNPVi7cQtSz9GwnyZeeBfaojYdPZN8J3jbA2fqAho96vzJQExtKzXH",
  "key13": "534j1PFepDJq25y5UCHGVpQG4jKmXmNxqwg6YocwVtH87H7KqMiZcnqjdtGHCvQBWqRtoGYeFmDWuB9ivsuYpAjM",
  "key14": "4UcfaDjqc9xWUr23G4dxfSkXWNu6k7F9BzbBn5AjW4zoNrXsbXyJN75AHqMugi2UEEG4NLrGtoYRte5ydawKjogF",
  "key15": "5R4JqndMHNAjTFWxsoYjbxYPX5c9fSJSkpUaocoPiLZacsG5PJzmAbCWmLmF4BLo669bGxKwFSsjPXgc81mE8Kuy",
  "key16": "1YNNZhNyePymLtfxEfCMkcWqK5web3xrTrXYCbnf6eE49WPsJcH45kjTWeEbEXCWzhcuSQeBAKAzZvggarbTdGR",
  "key17": "4xsgwKBnDfrWFpwq1ZbGMYTevwzbGdJ7GwPvU9FnAy5rF6c1XzLR2UzCt5Kd8TmjPG1dpEMqA9ZYzhW1YCcM2qUc",
  "key18": "2Kt1Nh1rhcCbkyHjkMPFooWV1vzPcMrpDMssfwJJHyBXHrr4eZ6AVrTi2453Dmn437tG2FYzEuZ5ucRRbmfye3Lt",
  "key19": "2AfcVfawsXqaxYD5NaocMDHpQvhBDAfrtVfp2JMBf6tLHvLHfhZzYZ9nTMaq8fgUoEy4pCDUdnHYPBAT2mFXJn3T",
  "key20": "4WmAaUMtw4fLW5FMwFYkcgP8wLsjwKaAimsFJDhqX6rdpnSqYf2zRhjzuwPJQP97bTSAmGW9ffwtKwGz6ePwm8bd",
  "key21": "2hwp73sHmNt7EEck9QaUpV8WwRphostGof4KXBLQ5hnXms3Z4ZN8APLmsnjwRZnQc7xNWRxnTasBzwXXqUXbjuUe",
  "key22": "5RqgXa6AueWcp9v4FYCCRspGWAqEBsvdYX8KFVbCqGHNnU7HZtKH8WbbSwZ72PvsC5D98kVohJV7dRaULnimMUmA",
  "key23": "3R2zwdtP3q1wVk5rc4gEGesyh4wPABeho7fKGqsjATBYVuvpwc6xtPJ9j8XnpYzA4wH5j5szNbigYfB9SEwnTBcL",
  "key24": "LiDvjUm2GbeATU3VUjUoVPhf5SjQ1WSmbUSoqwPK1sMKUcxR3rJcs7HUhpNZVHoPUVQAo8EuxbzxmZ7Z7qtbWFy",
  "key25": "2wnYrUvsiJyuHiSf3jqhQFNWCCemixuZfgnJx2pTkLybjKbspUWgyVGSxdG6a3ormKQbcJSZ1nqMpcNYz5a8bGBj",
  "key26": "2eCCE7CKbLPvNCtUkh4y69v23yy1RBSYK4YogGcExjFyHp5oSh1ucDgz3YCv1APL2XGbyfSKFY3Xb4z39GRsrXPJ",
  "key27": "5QmFcgYMD5q53nptxsscEjw19usYK64VWeayrAVPtDeRYxSpsu9GZ8K2QEQ982Pic7VQQry78waMhiogv9MwmY5Q",
  "key28": "4AAwrAzgKmxup4k9tS1nQaDSSKScUaa6ApiB345kwuRrQZcExkLkFipNHN5bDQN2VoN33j2tcSEftghjGc1wbEga"
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
