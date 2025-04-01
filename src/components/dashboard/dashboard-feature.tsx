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
    "4CSi6U5TpeBxNCUB1M65mG9E4bBaFmHe5v2zPYEpKGPTQkcyrPoLpYMgsdLdDXhnNP81M1d3NFiamE8PUMwYgchV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fRAES8AX7sCE2Lt58fLXfCBMwBJQvkGwrVSMLgV6P1cLXKLFrFfTKhaf7JvqMd85hHvQs91Di2sorgRmyseGUu",
  "key1": "8XFLAoA2eTRbTnejCg1axoRc74dPqJk5AgQasVPpTjrGfyUaGL5aM9sQVPs26tGgwzrsnVujnG7s5Hg2nirpoxH",
  "key2": "47pPi7HEgeMXXREKg873KQVyeyP4NKHb1MX2YntLjti8RSNttiVrsbKzfassDPcVQX1NC9BsZSDyop7nzGPTS2iU",
  "key3": "o2jJmVG1CkXESSvbnuzfCVXg5TUK1J2ZnFjZsR7KvPwKWCsn2z94aUSLZT3yjmLE9bpQBYHQGHJTngVAsxZAmmL",
  "key4": "4T6zk8JnYFkCB8hLqemEZV37ZCuGUvdkSz7Pt6yMXCnRkjyiXddBsG5rqBaeZoGnGBzhikfvi9NrhaMxG5hMm1q2",
  "key5": "23RpebPNqY5ye6kRA8z5BCd2ps9EfxqBUdJyundEgcxP7H53w9XF7vQPruiWdBpLyzCpMjUD3wYGTWZoLckmXrZh",
  "key6": "L3DCWLKq9CrL2EHu1BWuYpk7BJriXtCveU35q3gSSydT2NSk3fyKAtFY8KxTeSheu757Sav1DP9EoxRdSxkPH7m",
  "key7": "4kSxgE7JahBVtFUZsuJuRRZoAoLSXYyExjyH5Rf21R8ohAAMyRLScHXphD7bc8imneLt3kCuT6ocaRJJTYhNrfXX",
  "key8": "VzDPVTmDYwpKBYqbRcAe8FVx1NFBEBhpVTTWStWU9ABGghEwPzCtvxeTTCKU4KvnaWLc3ipo9axoJJRVQmyV9b6",
  "key9": "5ZtHZPxWEhWG2LXSM5gwzUxx4dPXRxCosUkVa7hGYWGbSk9g6DcpD1D87ny8cWC2R9tGaTy5CBBcJ9R7bRWHQRKd",
  "key10": "2pqBM65KwSMpahPtEgFBrXmMLTmrRHHYoGgx8ViY7P8eDBFjc29Uzkv1p6ymHrTWMK4MqJpPeCTSEbx4JQNzPTtm",
  "key11": "3bMCuZ1Wz25dfFv55ud5JtnF8jTcUw5tN32uxjKL1AWDxjRVevavk7NKwwqhCcep9eUjiYVBQCrGD6rLSou2G9hP",
  "key12": "4WgQjxUwVoRjPonRi3dH9S24bE5BTd9FnjZJb3XcGb9YumPbaEB7fGpTkdD22dr7USdzKUwDAFGqqqJWQe512cPm",
  "key13": "3WkbVnVoygGEB9xSBsFerdrrNMpJCakXJPtVEnQTnToXrKRwStN2e3LSXu69Nx5FmtZN2MurLySihZPkYZA7NFuK",
  "key14": "faipEC3Qw6ojfQV3FJy7fbuSB6R4DhDj28Hs2trqNmQ5NsvdwQRELQW2oc3kdCprvtbcPsHWHHfWGziFAhUAwsv",
  "key15": "xpuFJmBdr5D9qAJxtBXZkJ95a7D2PxExfnnxHYb5njbkKMvoxEp4naSC2yn2VeEfqXxjiTFYEp8Tb2VyGaNuECC",
  "key16": "4AiVDKhE5KCDMZCP6B6NSCPsy9bf9SEqBAwnZNCCcpHaazd57PsxFZ8jA8iuz6VWa6CtgYTNsxbMGSuRDoaPMkr7",
  "key17": "5PM311qY9VeUHmK3RBGYhfuddKU5Vyp5TTY1PskRGd3687Q12WXTtBcktZ7nJkRDtL4KzDUY3uT957fM5Fbzb62E",
  "key18": "2LcFSjQis5Z8bccJtpcUQPz9M6uSQdsnWs4cD7ekffsTdr9ZYvfbbZEdKdBzp5igwwtrodcF7cvLHnConQzk688Z",
  "key19": "5TidvxV31MrHETyjjBsJWf3pgSD6XUWY8ibGEJx45UnxKSmZHBFSKDQynPv2BAaaaMRk8gGJR6HVvuAZF76saUTo",
  "key20": "QBg855aRxGeRACbUoeUE8YWARqfSoecwo9B1NssamuLx7AND2ey8jjFcH2bWXUeqqcrGCLv9J1jjvu27WUfa7Ts",
  "key21": "4aoZphnWFgPHeTqHqpxS5tPMPyzzdgXvCFCmbfkn78A7jQEm1qwHBVajQTyizKbmosRW1X44pv2QmDPDiA8QdPoh",
  "key22": "2ekuh5e9Rzt3J4mzGMWy5LLHDB5fN3giedDya69xXPe2QCC7m6pM1iLk24KV2KcqBZZQmYAmF5oh85qTFfbWwrUb",
  "key23": "5CcU4ZMmbZakMcEiMV6KAFajiDGpSVMN1wK3RotEwSAxsmjNgpy8YLEHRWoFnbKj3HSzPheyEabbctMWMxmWpAus",
  "key24": "4C6THippvL5XJe7AVyyxfyHNbyoPc5SXehwyQLqDZVJvxKFx1gJeYshKoUxnHxzshvzyWciHVS179AqMi6Wn3ZCo",
  "key25": "56RQvQ6eQKCE7T5rty7PbCtuk3mLRHuvhZ2xT8CfhrWouWDFEwMt1Qemk7VdV69gD6surec5T5c9Dh3fQ3UkVYpY",
  "key26": "3XKjWYMXrL6JpwPTkDx5y9zRvRH3cUn3VrEBytyJdJcqFaw1HQ7DCLzgaxCVT3URpUVsbgMCrVr5PmKAwZhkAMcj",
  "key27": "4hwiiSppexL8jBsgYudzDAG9Mjeun2HEXeExjpwmQFa9t921fAwqSE89CxZGsr95RM8TZZcPSBkxRV7NAfD9bsB4",
  "key28": "4XBWQZFzrx9xxTy6CQnv1NaThAmiJNkTrqfwfMQgnz6Hfw2wtonSFYCYWvDZCfgCa96trZFxCCp5vESSfATy4gst",
  "key29": "2CDgphykP5i6ERM1jZ9787e7S428k8Ppo1j5taA4usGsjUwBsciJo5LJgXi4rNy3dJDSJ9iAJEjWRZe3WhEW4PVP",
  "key30": "4hrMYfnzKCT6L3zXP3qeJb9hnx6jGmhFrmxzMHh9cHB2GueY4r9ovvzpXURA9RhD7JEFZeCVJb87QfQYMwRXbrvM",
  "key31": "Y69jCBVNsZP3SdHPsEr1JWDYQDaEdE9qmtTct2tbHAf4XFdhLW6yJThyFjmSX9Q5xG7byDq1mtutRc3Rp4pgX1W",
  "key32": "4PpL5Q439QBTCEAHPcfRDWps71PiTHyoNdxWVPdmLbu3o7rDxcTKMYx4u4CdsYm3NqHd7qdgLRvh3UWcgRZtSeuK",
  "key33": "4Yx3hLvc2PcMPkPUjQ4i1E1UhGBhAk5ufj7jYqFCkpdTNGp3VUSYwWFrS57kUGQQRY8cJJtnpZczUewfe1wHMkqC"
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
