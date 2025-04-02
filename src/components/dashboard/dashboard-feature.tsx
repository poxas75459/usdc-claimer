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
    "5rg5kuj6YhDg3ksQoFqy2rUioP4oGpf4uWrVT2WQrjPVjLiNMi3WDiNnkq6PdMmgWKB6NH5PNDgqXxnUkKVohSqR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46vFx5wqXPCuMMEdi84cqM5F32RsTroEJKZ4wCj8ScL9WxCJmkzy3B455M7LdzrSjyVsRS6xkQYnks77wBbhY4Vs",
  "key1": "3zouMMKFYsucVEGN4P6VFaVf14hgp9PcZmTtnx8uaEQjXk8AvxboNXU4Ni2YgMLy68tMVuYqXKb3jedoV6WF7Q1t",
  "key2": "2ygPdpGJdnage5sryJcYvWFfRMAdehH3AWGrFECFw7ksnQ6rvC5Q7VGZaHDjMAE1SVivdYLdfy8w1pynHWSn4kFu",
  "key3": "5XaEUAhdsvBc3nrNgG883aLap5ejy6GMtvGwEGmbcSso5huZnmpGHnB7dgRsMACsRG2qdE4rn7skMsNvNKrq1ope",
  "key4": "5XEeqqvNxNyFAv2jBWcAh65ACXsoLHP62cMVQLx5JL5wtNiPLQQje4axMphdgaYZ6HoWqjsnqh3exLpnKfC2CBD1",
  "key5": "5dqaA6YuUB6CUCYEr6ed643ZHqwAXmD8XHYDLcQ3grcLJPyf3kKDkbAZw7hwhdeG4oVHhs4WmaTwTrAJHe26ncHs",
  "key6": "67mSA1uxzV1n5pjseh7ds9uiAU1s6GeaPEHspBrCpEcTqu72pgsd3MhfziPPV8woUQtv5LzcfBZr2AqGN1bd5Hvg",
  "key7": "3jvCK2rRyUwks6D2aKWbJVjoYDGNKxvdzqeMQkjZBYhKPcrSsQeN2qxeEUYsbkx6QNB1wEtumuAsP4DcsuHvf5n7",
  "key8": "3A84LmYMnyCYNX8pwYSU17KtrjEg7Bhaq19yCqxoCw3XkfoovjKZdsgyApVNhYwdm7nwbCz9BJZHRStEgiDPzRwD",
  "key9": "5eY2v5LS9ZCkJouUcZtU3phrUvL2ooXN9qVL3WCSd6Ft12BFStQvpymX7ssFbbVMaqZEXy423gv182BtsCcPBKof",
  "key10": "4WSXdmnn61miehNP2bCYazcTjiPJYckd47FBRJ9y7QYgWhvrCDMhw6eRJkr249YgnQTmXTkfAbsw4pb316LeQNfG",
  "key11": "2fc3xGUkAX9uFcreWkw7cmMRankqabSHhTdruh7ir847hWXGcjcdP41gDiREEjKn5DP4uJEqyssqYebBuwVUQTe4",
  "key12": "4rRczcbxp2Hywv9BF2AALCfjb1dhqQKxFNjvvLCpFv8CuRNnyjgJpkFNYndbw73BYq6jHAPsYoqqPTKhRcE1AmZf",
  "key13": "3bPk22NQfP2onES5zkwpFs6MpwZw8G26NxQUsfTNVCwrC5Mk3octYQZFcZb95ffBcstBdB6L1aAER4NL6ZnpCV2T",
  "key14": "3BbF3N5sP3XTeTkLocmUNzeiUU2LpzenPLptQiHW84NA8H1Dx4wyZJZiNVUBNUk4WnvcRRCAXoG5ryekoyErz1K2",
  "key15": "3Wr2pXFAynehBgtKgLRhgHyqSm4XcELpFoZATmu2X5PzPW2w6EvutdtnGyQzUpv3fE7FUAdXaKRL8iQX4bS6E4sM",
  "key16": "4bVcDvdFA9ou14FD1aQCrdD8kEuC2v1VVeTvCBBVnFstUCerKftszvCTSpWLgX339ZJVs64jiYSaSzQhCuwSB2co",
  "key17": "4L4aijN5YqZqwtRpEo4gctgzfSEvdGxPiDS98brgsRkQtL5TVJGwVFQU4Vw3ewcotmUHJEpThRHR7tjzeaNq4wJ6",
  "key18": "qA5BrJ3wwteP9V7AAeG6QrfBnaqs1o1KBFu8qs3j19tCUFHB6Q6Dy7Tf6GWfPvmUyNepA9pSSomYXekF7WqCHnm",
  "key19": "3chMPPxEJ48B2ytbNjvWP5s1kn3FP6EYvfhGr9nLVqQuzspginfgZZU8s8kWCCEXAS2BYa8Q13W3KX6GMU3SPk4o",
  "key20": "EyhUDMuKHtSA5FkWehRkUUnm3NCAZ6YQV7yFkFgWugkNxqRnnsQJ9zwBKDqYW14L4HguaNd87nd6ta2uTw54EqE",
  "key21": "fAyDbr6yNUseFTivnJnWCwQmZBhDzZetHnU4xK7dcnFzm5x4egvxNwdhvu67Ups2f6ZYmQTtN8UiXs1TanqUd7n",
  "key22": "5nsFLxKB5T397yEprTFVsZNzFMpFf4WrJBgdQTJK8oKcJQox7EAbisCXx7WoLAUKBiw6czqWPGMmW87JySvULgg1",
  "key23": "3nMCMNcYWBy6yFvmGNifYP987imjKiMfYevhwT478xR7TvqXwXNgvfxEkVFsN6EpQTnfkq2DwmdoUMFzm8bnTJJJ",
  "key24": "2kjmo1HLaYoWwiFkfqqgE4StrKHnkiycpfJVGk8V9RTTH4QfJDVBFHpwiLmqr29UGAVr159LT8VUXUkvkUiHXyEK",
  "key25": "wyoq71YwRk7wFrUR9pzu1XGuqaR9tJvmgcQuE5hB4nCUkLYdZNjF6oWqqwurLiLovNUEjTdvaY1N5GxxybtkmQ7"
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
