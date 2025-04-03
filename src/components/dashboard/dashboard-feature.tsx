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
    "5uqN9Nt566MuorJrku5acxUEkMUZawDrzHfEeLHYKcQ8znk28psPoK9HXrhWBXW21zjQLUPCHpoMKeYYa4txS7qj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QBy6jb5Ao7QK56k5Re1khtFtPgdZudb1EVY6AFc7y4n5K2XHR7gv1dtrryBWHdgDDBTQ5UJzqX4QJjtEqnp1YYQ",
  "key1": "3qiw1BeD99ddNX9D6WuqFfEXL5pVQ1zPUJai3Y6PNoC61NJsD34m5og4bSw81FkWLXgPiJCkeWAbUhcsnG3HQL5d",
  "key2": "5EFGHR7rp9VwCoyAeMmgQGuNiuLSoabNnjNLLdisQC7t9Z6VEdm7VWj1u5KdX3yobtWZd8LAa48MpRE6CibT6p2K",
  "key3": "eSqZvUPc5cFY3XHKhXVb6af1Lf4i1Zc7wfaSSDqBSxYMB9N8xWkjdvJAqV9LBV4Ce3zVtvCp1oBDSfgZrbRrzB2",
  "key4": "3gvVoAYruDAtoiQ4Vy21reaFD6XYsxZQHS8dfMffUoDrKnSMpMWaeMqXziCNW41KPyDdqmkUJ5UF7zyCqyoTKRci",
  "key5": "678U8kySwgG1ksNuk2jtmxK564JHxcZbrWXgCQMH6BJLFXGgYztPydfWZewuf8pGH4DQFzjCMHu12P3fvkfdEMYw",
  "key6": "4TD6eHMxBmTNTC3HwYE63fHCCSwhSbVgPMrNFDpGekyDBPjsLQVkKagHxKEWio1cPQQWTD9FQYsgwCBC3u2PQLgr",
  "key7": "7D41fwVrKo8GSUZFQS3GxhjDQeZnkFUZDiz2tQRCJ7TEZ7TW3rDZXLdq5f7nDvHqxzEeryrynmzWg4ZeXqWV3qS",
  "key8": "78X5X7jDotxxyGWMuhdqyjuRBVELmwLqLcKVCXVmzgUxcd7T247zRdm5TzK1FYN1qy7SVuaZibyuFi1imWCEe6d",
  "key9": "g2PwMRZxKVmTvAH4poqFrg67N6LQ7botAW1FnTRgAaY5N1stpP1WEH3m3xpBLotCJSjG9LQQDyiZ2M5noSCas42",
  "key10": "3ZYzyCazBwRyDaZMjXUEP4czQUuSUDhYAsxwLz836wi4cpSsy6f68oUNZF5BYb9eMTHk9KW1KLhSewvbNGGt3k56",
  "key11": "4zzar6xaF4TFjoKENT5aX61Zv3WBpgU3PMuZZCGgN43BmYMVKFNDycNh1dEHT14diWabpjcWEXHbyeSgyziF7Agj",
  "key12": "35twJVQAGsEcNKSM75Fs9x44yQCJHRDGKKJqQDzJcnf2ykGZddi8sjYtW9bXspX7dpcMpcTqvJeetdPHMw6xeyuk",
  "key13": "3PptVBp5U6s2bEvs2yfkb1LqeuCGDfszaFAUt23YZVs2qBfwzN9H7vrFunbcp5khQ2detxLLDP8nigLhQ2no4bhn",
  "key14": "2uX51x5RWMRxbw6uciZkrjXPbT1RZ8LhJA5MVCjrGfBFcsWHFFDX4N1PCZYJrnSYcbpbqNAa5RSjfcurhbcXr13L",
  "key15": "33a8Mq9j8qJUkLnWqG3nF9CFyhuCfHuuQTYkQSkXg3NgH8FMHGGfeKVFnCHUSKpdGccMtxMiR8JL4rhf4goM96AA",
  "key16": "5NQ3HN2UcQ7VeckWb3JaVSSwgzJuWyaRxZMxgmdSy5pVrzu4XiuBLvoizoFbRreS7FPoRVCXUaFfMgCPVfNvf4Y",
  "key17": "YBsHRzFEdQcmkWHvgpAXd29KUBC6FtBCynFHLdHaSkzchkWf8KpYDvQt33zacWmkvo9RYC8sD8hQT2tCH1Vjo8N",
  "key18": "4A85M1W83YXFsdhFprCBjLjP4X5xhEJudEsykPjWdgBzbaZwfQ91SoE9gm2DAu3fLxuAZ7eMk7AjrkotE3CBD1zK",
  "key19": "2g1if9nwx7YYRiSL3kiFP4eCcu9s2ihYTJuK5HNndviFBsoRQGTTPNjS3dApgE4bbYdkaZJyv1odSEt9HPtEJM58",
  "key20": "3d2ggRdFne9M89brbiVjTADYhijxjaPmUEb3hecxBNWduhk5awMpsC4t6Jf9gyZjCvFLAZ3LDQzPGLwcaMitBQsh",
  "key21": "2bf6qMognRw2HKoJoshcwyTPXkssJhsgmPRyAt5LpKPwQ9g9dE5ELqNYZbwQiwvJtVY4KfRJBSwTaLk5aH3uyHVB",
  "key22": "3kqCxbT5G1M6wwMAgnj2Wj76XHT9gAbef6BZPBsNT4bNncjqcYAum7FRF14bAk2PwnkBMTYC7H6BfjDGGkacLW8",
  "key23": "29wCAUmY9GAvDaF7i8SHBXJ3KCYpe3vAiKYHR2Efa9b4kTzvY3ysqseCvzoLz3AyGQiHUsTr5AvqhUis1dCkRtzj",
  "key24": "JDXqCxDQ9fMBo7UYfsyTtBFmss5Yu2Xd9nsxAddFMQMomSDbwk19DWMwvW5uATes2pU7SNqZQoLBnmTsRzejNXV",
  "key25": "44Q1QpqtWGhry1eqo89sgaQ9Lr9y8FnLa5rFia1SCUQbw28A34X4V3A5TM2M1T5HuMpNCnem1P2Nk8SfF31AhdTT"
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
