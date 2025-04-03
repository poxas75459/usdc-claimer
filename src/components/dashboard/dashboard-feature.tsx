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
    "5sHjDAUaVKFXJgJ1m6jYmzWK5DyGw9h7pQmT3ezqmecx4gvhEnxDcRBfZHYqyMX4dokZnHVLV4x3twQ12Hr3fNBJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VZeNas89M9b33bPbGDdDZ2PiMuyN5zQRFUm6VxgPzbwwj1etFEp35gcrRMwC4eFkwX7A1zDHAr7mJZNQ1ZwNvFa",
  "key1": "3HyQcJEeLj4K5hLZQ8UH5zsnuBko2VqGCVXq5WKnDtNBZQNngw12uK92eJkvRoidNLucYbAVFPWV8tq4D7q6zPiM",
  "key2": "bXnwuoyd4VQs763r5YXMXvqYgdgFBon8cKcELzq2VDBtKTSSz5nKCj66QxL6cuwReL47KB3JvCm5b31BpEe5TzW",
  "key3": "3p52fEsFnh6h9ubExTM7YmdmfHo55m6kJcTYiTuEGHbbCXxXwueEnmYLfXemC7oJsTLNMdGZn8oKpCptCEJw4QaS",
  "key4": "42Zdz8v5esMfb4Yd3UtzSrrPV1uD4M3Q2Jm6DbthJno5J7toatpW1J6dmu52t4YSwi2BxCADLpEMdGn2FdQ3ba4B",
  "key5": "hrqr3aEKuxAauomCG1Y75utirjj3tdymAufw9hLTxrxXvTRhFWP254MVqrL6aB7fXcHDj4PkmYUrbs5WiTyzt1V",
  "key6": "5Jf5KqTSgKT9HAPwxotFmNAsJWmgW5xrCVJLoEkH7yxkUyMUh4PZDtbzKT6LYLDoW3Zy58KJt3rAXVipPKQFVA7b",
  "key7": "6LGhd34bMbBbRJeWTcvfJ6CHu1PNX9KLpeuh4KjVKWsM87Ein2A6t7q7a1uq4KoKfttJFQKBmDAP5WUiixiWH3B",
  "key8": "52xR8akgesbqqzZiMkAFN4HpbzgSc3eaEBr5Z7YLAEJjnNEwARNkeVzCx7kRvxhgkS44KtH2uNvwJ4kSi7tEqmL2",
  "key9": "2hWu2BjdfvHKxEhkAySXQ8ccerKZxpsBXaKjxh3vBzGczbqbiPxMCcTMGqYup2i2U5efaLrdDZw9uLMJvXAiFH1e",
  "key10": "2omVfTEBWDRnRYR7vf2VSn26vcTEHA6pKBEMhCDmHfnjCzLCUDVRdJQg94TuJBnsVJaZo4KtR1u9GEu4guUMC49f",
  "key11": "4cp8wQv5CoDF1PNmHnmSNhHEbaiJKmT3cfDAzVoDTQjbsmw5wRbheTkvkv8zYaAR8q2yjFMbg1mjBLycbxrHZn8j",
  "key12": "47T1oyyUs2pxq6QCS4VvDRRY6iur8DnzCChfEh5qumewWPtWXv1XXKvoEckWeCYuLVRVgvzEQDBbHZr1gdrUMkTP",
  "key13": "3QWfvo9YTk9pt3H6w5dtdw9SfUk1pxpKqxG1YDXXMpKqmTkqrwNH57UYbJE41z8DLqp9PKWMgRm3mYMHgEoCLzZT",
  "key14": "2Uyttj583ziCkdFwUmj27uqqnYJFQVoqstaAUGwYVBk8LQPryAPgQPGQ3KbdWxdDmDEz1sEjXshysGLLktY2ro2f",
  "key15": "5K1cvGzi4qMKD5J6TeuC6QmQHgSgbyE5diXMhWhNac6Fpg2XiXWjiBNKHQ1LwnKZ92gxzdhwUBgBYYC6FJPad3uj",
  "key16": "619fCBfVr7jkCo2Si4CjCeCWsHA9yQag5pWVpbmoL9H4BWFubChv7qDyuoYi5cQBUcK1GYi1F7rpyLRu8WaCaWAJ",
  "key17": "2bqDTBjJNnsPFR9qLT8PX4DTiUo8DPd3rkaCLr11Fu8YgnkLAciyRYpKviYeoKmn9M9zhhBQNohLY5cWuNJ8o53",
  "key18": "5NKsfjaBYgLbFWaxuUzawyQs9Mz8xtpk5cZESE1JJ26LeZQafZdMxYuHG51Lm3QYoMoL8yU7GJs3oM9mzGgvazUY",
  "key19": "5sHANUdedcxu1oXV1pRuafWmR3s92axuZNdeamP1htDrh9PEkbNLPB9gaaLMUai4cNPTPcb1rDgVEeYEkMXcdvek",
  "key20": "JqxUSW2ddVR472P9ofPoQur53VxJXLGpKwwFUjSR44LN18yfC3tQmHRAt6wuZ4vP9vr2EWZ86J151QTnmQUXhpz",
  "key21": "49WFcTMuQL9NBqJptuCfeEYN4VZ31Sbiz4U96VQ7EYEC79XT9tejMAkGdaVuCFsn2LtSbHmEmgBCbdoW1z2rKA9M",
  "key22": "AfAwYGMpKobeGx51NXDiCfr5A3ke4M4gtqgUtybuJdCLsSGhnNBB7Fx9HBcF7EmY91MDE6mP62btFwfDk1TYjW6",
  "key23": "3mNQdY7F9cF1vuqauWBaKugyMN3mn7nTpHKfsdKDa5eAk2bQ9ky4Ph8fUakW6DqpmKQke2ZGkaQASKe4d6zMedf7",
  "key24": "3JUP6Qg7u1Az1wtLDUejnDimCn6GCqchK5LiVJdKLgqN4gEHcKoz3kKP6gnUBEtngM1BxRQommcpL2Pfc5KniS5g",
  "key25": "ztQ2iG8WGAJkN5h86TwikBftvYyTdd69w9utcof3pv848h8YPv7GZ6gVyDATBbqURrzUF7tAZ23ecRqVsqEtyzz",
  "key26": "2MZ6NMhCXi7ZiCSYs5vrVFanaz67aJpoMjdTKEM69GinYAdxQXM3iPGmz496J7Ds8eXj4PVpFmAuY2TtyzEYbE3T",
  "key27": "3ckpFgNeqHLCS3BzhJs1Ds34v7Dv1HXHNsBtwTZGpkXKWANBv7CQv2YoCvrQEtdBGAJoFejWGHVAFab7pGdC8Vcx",
  "key28": "3NFyJC63CxG5KECQLx7yySdU6RUka6gc6k55j1UcQ42YP9fzShxNizgWc5f9uSNetxNcCoPRLCDAnyw33VPabMMV",
  "key29": "2LPtXuQXxgK7n59Qo8iESZPcr2aJ9iv3o7dY7w6DpAoATxDqdQBhiv1mestyGtarkxVSU3JrCE2VrhEeno5ABjcx",
  "key30": "3ezyvNiogoLSLpD4TCf5gwj26HEnrkrs4zhWJLvrjaCKtGcZXca17mtukQeXFyRQFeKZwjyUDL9boys2GzwRjkDx",
  "key31": "vC575dDqoHnRRyJ5Ret8xnNF1i7Gu1LJS1UhPGfGG7tAmRdnPiBwrktw1uHXAxPJrvCSnfvZQADfrdUBdCdWr6B",
  "key32": "2viNmhDRibh82ZQNCzp8sWjaip6ck3X2QjdiyS5uKZGttnmmMw6abZ6jwHkTz9vSBxFzueJmrw1SLDFVwC5DGS7F",
  "key33": "5PycjenW5TivgPsxzpHDjRwp3HoMmGGCziyZ1KPUUTR5n7kE9Ga4RDHRjy5czRjTJkw2hwxeK2yRJoM2iy6zJ3cg"
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
