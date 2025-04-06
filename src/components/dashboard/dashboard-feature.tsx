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
    "2KMkkWG3yP53udRTHu1g9SV5CzKMsahewBmSxyqZDXGXMfWmwFRkjfrNYcchCaCnJQ5oxBwacBHWfLQJ4d1SDJ39"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GvRdzWCHNT6Dwaufp8TNnnJTbBNShNwfWUWAhpeEiWdoWZJTYKCLkt9U4QVpSsrqKhvAxNaHjZGXB9jPTfS4nuW",
  "key1": "42ofnRbkQHKHzj61buvoEtV1phYCnqH2H6REqbqa3mwKMPvHArmDUh5YfG8jNTqQ6gZMoxq6nhLpGxfLFZjGKHrQ",
  "key2": "336nmE4F5Ft3ENG1qFM4k2PondNi6jnXmxFNiLwDBUGzR6PehvybmZbDZ6H4BRgJjB3fREkDtZFgi5iKoEnpX2Ta",
  "key3": "yJ1D44917PjCMHEuyWFzReCmn4mM1dUXKrDEqMQNjzVbYTUbinVkYR3MBp5jEAmDhpa6a9GiGP9bTAH63n9nubv",
  "key4": "2GYS8LeEuTXt37AHaqXBgdQ5yB8KBTUoe63AsabstrkjEiCAV5XhPPWCnqo2Xq94h69h3RhZzNNEuakd5B4d6Ne9",
  "key5": "4zcwwNNQQrioptkFjpdzcYJ9qZ78aBBb51iYFCesvyaRzLB6mSNjXvnwSd77UoRKYSz7HpE5CNNYXYDyTLwAb8CT",
  "key6": "5dF32JCsVJL9vgzRc3PFsFAESMVwHk2fepyaB3Upv3iJHvuWHcXhAh68134tcNAR8pneRKyd6Jae2THj4q4U45r9",
  "key7": "7z6RRScG4tTDxLpiBfjVHCEF2gtM6VyYyfc7k1AFUDZz1CamWYuvDMrgdBYRrTSeF5nxu6TMyYQSLTPmZ6ZgJ8Z",
  "key8": "3g9HBomYfkgnFhDDfkkdL3XSidkRHVdSqUKFCGPUwkcPh41ZxxqSpZcx5a3izksznkWwgpz7MTwWRvM3UUxdPcxi",
  "key9": "37pDY782wtWAYDzGGseQHG7nMTrkukNmM3NERPWwdZxGssocgqrWmaTXk1wyBMiPvKp2cnCu1gHo8gVDwDM42bKw",
  "key10": "3aSMR6A88cNyLhvXDEKYGGwRdjesSPsyFf3X7XQSXsSd9oErcRqcmLAJEQmbFDKd9hy7gNS1gsLcUQ9qeRC4zThE",
  "key11": "4rwfstykF48U5LBP1sFaBtUBKvfuptHynzEzH46rsYpLGaitsyeLhowGg6BiMmRqGUUQUix7RebiJz2gsUhasMsr",
  "key12": "D5mvZQcake5wxgqC6ur78BZFJUwLRVt2XwS5hpEUFFk7LN1BrqbeyPJVJQpaPwhvW3L4xew2BXVDPLc8RNmdqgR",
  "key13": "44jXazktS7fwiH8QptfobV22uKFtrcYtuAu1d9UkZ81VVS45XpjvDyUaXWc2rdfK88jsVZyhasxULKoSbMEAnLz4",
  "key14": "23p1t4aAEXa8UVmJv7Nu7PSqVGN4GQ1FM363CBxkhGemXm9T12dvVkN8xNFn3NbyW4Gt9qyv2GbRfJXJW4HU48U2",
  "key15": "2CCWZFuJAE3AL66MRrvN3VPNQ36faCdWsABDn58W5jnKm1pD1XrE2JWGx1VQhWsV33AvnfnWdkaia54vUP9CqEke",
  "key16": "4A3BttrgFptPSygaqKTJWY9G3TeTukxXFGK9wAagQ6UzGhYc4bVZfKFzjybXDokE9FBQvxK3YT5rRzzpAXb4LheU",
  "key17": "xJVgwMWjfxEbTRJjuDdAhJvkkPhzrKRZp3GHk4A1aPuvFMfd475agasCjubYGrGhUm3UX9tStJsmTq7Gg6GC2nK",
  "key18": "3iuc41XmJFtNFE28gpphM3yzceEq52HmSGEJZpn3gdSpw5DDYQ1SxZkcP3BoxEvqLgzaeaYMYJPyhomN1LmQhzdx",
  "key19": "4CCU4YBzQ3GbQza23zzASpGAUmx16Csz5puZKMG1hYQ9pUWDxZwwALjDhqMxtLZ3teZ4AZcXRMh2N3GZrkrkGkBN",
  "key20": "3pkcgyhcpFdXfHA3Xrwj2d3SfomPNnQiBfBmBqn43s9nJyUwpiQcoJ63LLxsaFCS3QSZsqB6RvJmSDCHEFKEpDsR",
  "key21": "5LtChp35wKriCsbVQSmGQ72KLFdMahZvqmenhdUBm1UjD7mfZuGDYjx31CsR6BPSNWo9fhkc4squG1N9ffXeWBPu",
  "key22": "4HUNY6Z1dza72RtUU5CgbQFtUsQYhGfP2H613vuZr2a7jZ5durk5kuNXvWYRAyJJQipXN48KymPYJiFJc3ugK9Le",
  "key23": "fGAbzHy9Lt8LorCnTZthgaoYvC1Qk1bXvtgNotGULBQUsoKBoVkHgqvMELCEwj1ZugpXnj2mwd4MfEUJ5hQJ7We",
  "key24": "3erc13M1Gp5G7gMHeeKVipuwLmnkr2fowdRKymebSZQGWDs8QcqyPdabqgiSf6bMzzGj9zHnv8Q8uVmr2hQodfsq",
  "key25": "57yW6mxag3poxdupCzRNiWTKiEgJKq1XR7EwY4dCwvVWNv4gjFq9kub5VgnNHnoBkWCCLisdFtn1uvL87kvmwqQt",
  "key26": "3xDeZXQgxAREHpybcB2KprZU1dkh7kQ3avtzpeQYTdGy4HgEyRpEe6iggBH2TpE51FNQyqN5pQ3yUrETW41Kju6n",
  "key27": "kAuBwnFJWGAmjoRBWBxWVPjV74adBKBgK2UnSbUGx4jFAJjNdkhsNuqczcyFRfnzLjFiyV5Axs46udpPqwrS2Ag",
  "key28": "4vJX3KXqbyk4GRjM9PTgTGQNMD2ebLfTmXqpfz8h3B2CAhdcYK3jjViX33hCoxywPKurM5FW3CKoaa1uSbUoKDXH",
  "key29": "5Sf1dMCw68QqXehNR7azmV7b5juY9cMAoZzHTe6cRjAeHf8X257n6RXF3d8Y4MVPn6aVjmkqYgdm9YXVad9jjk8j",
  "key30": "SnT5DsAumXSdZMKvcRfM3o4X7bCatBp5XKaZXujYVBTT7qhHxwV28zr73HRsGA3fFW63SHSJ4ZLdArimkLCUUcF",
  "key31": "2QsjB4pZNocQxaMm5Gmu5AVyrkCEkBoxSKuvSH3zDM7JYXb3z2EzLDTEUe2mfZ75xnqhKh6a2ZVxotSTgmGtLZZg",
  "key32": "3waZE2NT467BVYv8ewrbWEGiMiLUn3ybL4PP4txC3NpSGg76qjnewtVSRUTBdvNPEiwL1E1CG7sd9T1ZFDkvhpdi",
  "key33": "2HmuAUk4ZARqSi9823GRTrJbfMa76yzn613HmXCcuTvoXJr4eBGwoK4J3fqcHK71NxQeKqG8BnEe19f1bFrBJMbt",
  "key34": "59XYopDwCwHwx5WoLbRVuS17aXMS3iERs2nB2aaiyW9wH4oNUiBQdxmUiNGJuJbdF48Dd7e9Dg35wT2CJ9NKkda5",
  "key35": "2Rcc7ZggWogfy1PJvJi4HJLCSnHsEKfDauHAZEZoJuvgXpGaA6WkkUQaTLJcga2V6kS9dYUEH4qt4g5NKkJ2df6v",
  "key36": "3eXfjukY7UyZiuTBrjSgdxGHzZiJCoCvkbddxGsS66UYjcd4Pk8qUHGT4RTHwcQa1MPfYAiJsmT9tu562nTHYtxA",
  "key37": "27UcmshQV8UJ5Qv83uNQN6WmR6YU12evoHFwZzLN1rxUhfUT67hQ9HTvpWP1omiUW8wXzDGpCk5Qc2npuxiMVeCJ",
  "key38": "5SwPXAGViHfMPfV4v2oqk9TC16n3eZisuNH7dJ3u78XTBumcMncKuAXBPBSK6qZLGDQ7kRqMnB8GEW6DxbLVRazE",
  "key39": "5XKjHsPDsMLdxDTWwsdL3bBTnVUvrcq8U3TCLT3embz5DBFccgMQHicFhdjuDWModcVX7CjNaCdf4GXvHRrJiLng",
  "key40": "fUqFrSRv8WSVVDv8X2erNCrUQ67FNP8ss1Th2gXMgvQTiqj37EoxwGNpfymnCvv8wvFpWbNrpjf36wgHi8Ggz9n",
  "key41": "fs5mb9uyqAEeK12mex9dUm6p74TEQ5xxorddvLdHr7as2Cd5TP21MEBGtQx5NAcZSobH6kKBu79AaSpC1Zu2wbj",
  "key42": "w1HqdhHEpFv9iB3X4Z9cu3wMgor4qNKJnkTKvCV5S29pFnhTbjo26tBXqBUXv2iS8bcj6WCz9DHUGzKmZGQmtS1",
  "key43": "57EnZcddEPxMAvm9iq2fTZz4zUi7TLBnvYhooVnfdLajVWB41nWESKDxofgarvSb1SAPdMPTBG7ukh9kN7w7pMDB",
  "key44": "4Fy5BCzQ7uLraFkZvaLASsTvbBDWEtDmRiebm3wNj8HSgxRmaDoEXyVjj7ngDqgFnKYB7arEND5aXVAE563TDGD3"
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
