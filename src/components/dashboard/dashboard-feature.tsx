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
    "P5uzCSJb8GU525REwr1c3Kaa9cuJnJG7kjJCaTP2QATkP5kJcDyZ1tz3JteKdhq4H8kGqkNV9RBsbPc1oyyBT6Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65bStMsyHakD8ije9Yq1ZWKewGb3UDD3GcbvnnmxX2bR888j1Pwb4kpPARGGbeU7M1nKMnvtGVvWSagGiDAc7Rnd",
  "key1": "5rQfcXPiNsNvaxtwe8xGWjMjSmUhcHCnveY3PbaR6maezMkAvi8aqHzyebL2FUyFwdPodGuGYjR4uw8jEAjtytL2",
  "key2": "2oiF7N2SVEwyxPK5DnPnA1aBytydNdpiL59z6synzmM3TkiJJVCFxDiWPBFncghmhiLnvNUoYNiCGuJdpK7TAMGz",
  "key3": "4zrmykaaJyasPYxN2g3zsbgir8QFapWBXMv2T4hM2zFyxbENHyzQrNc7GEvRyUTbPEunRre5ozPHE4S1wU4FJSsU",
  "key4": "Kdxv6gjzPf3J7hRNA8oT1DG7fHAY6w2EaPhbBvV3wU7Ns6YF91tsnuqDG3QbQskUQVrQVAeUzPW6YJ6tH1dHxHL",
  "key5": "4mTaE2VybHHsaoFeisWpRnaAs3bTbMnhFQpk9joCRwgB6PesHD21pAaXd9vfKmN9A6g1N2n11ASyd1iFsr9e5j1N",
  "key6": "5hATFU2H49eSwDANkijBfDuowAjPc8gw2Ai2EnYCYrppnN2XTuxQkKu8EFpn1zmkTPzQhRgEuu1tNoQku6KyGYpP",
  "key7": "3Mh3ydKCqzruiwXYU7WRNrcCJY2W6AEt1ffNzEvsGeQyXKTe9cidbyrSjTnJM32h1MWUua91KSm9Ug5NzUpWfvNp",
  "key8": "5pnvSb6nnM8VDd29yjXCzcy4qAayopNfb18RQU7ZKj55uH2pjHB9KUaMsyFvsvEYyKwuPgeXKcmgu5ewWfXptyK7",
  "key9": "4UEgejEn94Vtik2eB7WLmrwGQ4y3Ri28X1VmGZn3HtUVFBCNgnTV93esdgPqGN1nSfb92BXy9qbiwzh1cgP6vus9",
  "key10": "2P7QyxbNfro3UG2tPzZCZCm8iHAU7j2j36HVRpuhZ22r61izmh6MTxyseAsp5u7dTWpWjzcHgNUtUjf3V2ctVfPZ",
  "key11": "3Td6ZRTZHeP2NxShUZhtC2NzFkpfjzU2SLFAzeyLpq4VAJej5xvVMdhG2vy2qSNBb84E5ehx6jxfChkNDEHNE9Z8",
  "key12": "5TKrMr4uE7RhCaFmBrjdRMsTiTcxcDFFhHxFpNV15cSQf9xSEiUsXKZGPwzKv9fL3Mq2jW2FYcyQX5Fj1vyQPMdd",
  "key13": "4gkvRqtNvSDDtqsoLHF3meN9pKaVqMjwSqR2NNsdQnWSpU7L5NQkFXCdYey4r9G49mRwg7xS4RWrrtXPamq5zBK3",
  "key14": "5kFtqpduwmPqx2cFCoADHBrcXe63bddCLrym3iMXGZTTujEQ918fEGkY3tgrh4TpUs3jBUAjdXkYYhQf3F7xXeVN",
  "key15": "462XAJThFRwmgzt8ShETUa885W1U4byLmnNcAdBoju6XHs4rME7QuoyVdQWuNyFGq2EQ9uEazkYZvykhJFyBWiGC",
  "key16": "628vXkPB5vN2FpLnQaysJWPMJLRn47tv5C1NcKVP1nbBFDTaVT6rS57JX3iobXLeKAbCyLh12Zf1m9qkAqYuAUSP",
  "key17": "5cSRTXXnxtYYkdjNwGLyeswUmqVfjLwPA3i5CUsuxpYMQcKkpT7cL5qteLbV72YJGcq54YPFC5MepPJZTg5f65W2",
  "key18": "29QWXQXGn7V7ifEVMYmJQWcHHttkXBo1yqNKxGRa2w6pHq6Y1pdVJu9oVPfnchMrNtULAN64snPQrMJP9fnUD5pP",
  "key19": "2d2qR7jtWAbqpzvUKxRdknqbziX1wMhTioFY4EeGzmEuqdX6TxQr929a2ipCaApLSTzDsU2YGiLfa1pCvrAtP4Eg",
  "key20": "EDoVCV95yn4cxbqENxTA9vuffnpi9xLA2gpivGJUD95LiLWg3Vr8tA62XpxhAJDCYQtTvANQavf5kr9sfxUotnJ",
  "key21": "5a5vXAv92TyGu5fCcJ4hLVFrKBZiWTrDz66GiAgMnRJR1CD8hei4wja4AvRAK6oCr6rpsbBK6iT5mqfdjGx4qkCg",
  "key22": "2x7Yzy1DWJiDn56JcCp4nH2ViGDa5dPX9gC3R35QKjSg1Uhp5WGFJApFJWiF4pAja5hdmxX2VA9JUgTxK72KrFz",
  "key23": "2ok411eX7EsK7eiLL6sotZ5nUWdjxs7oRa6VMn28ckWKQsuW9vc5U9VYUSVDNr372c7qYFNVLSATVRy574TLmEgq",
  "key24": "5d6WFpoE6NqxEnYXBdTQ3ZxpCk6Vcya9VQGVqc46T14AUJ7FRiVJ1NpUpqjwNCaD93WwVDqrKFaP5vnycstuQA78",
  "key25": "8rcemLSyxkj76G3Jq3hv15WoH1F5uD2hGzE7CfGt8BdMVKsCToVGutcpBERFjfpQg7gjS8Li7bwiiNpxtNRyTro",
  "key26": "4y3dNoAHuUFWreFFsqzvRHAvak85Jq85qhCmpKksMyt4JJ9Nj9nxeB6NQHqaRHgha2ACBJBeDTYDLsYCugRwrGH7",
  "key27": "4tg47yooQWvZiHJH5AU8uCxQLeXevZftB9arKhoMqLXfLqw5KjCKtH9Kf7iY2fEoWxHKFkFJFmYUZ6BuVq6Sfz7x",
  "key28": "2VDY3iFWuKiBobc6jpkNykZexALWVN9TBUkDTJdnfGR1nAMonyjskzYAj4S7tvZhE83xokeCxiqNnwTsWCcLiYHu",
  "key29": "2u28d2uuePdehArYPUwMpCN7HLACQR7EWiS2WRcrnpPBH1xodbaZsXKirqsiG5wxw366kZZtF99xuVzzvc8Lx32r",
  "key30": "5qq6bhFAz9RuYbZMYs7aWWU5fi2pNxmxZ3U7ue7pmdy6mxA8u9Gr8Se2ymbSfN5Y6jG1AYqckkbE9YWgjj1SvV5h"
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
