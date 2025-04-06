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
    "3QwXcCWixqq5ykhKowQiTLh5b48iiAy2jTDkfhFcPyiZPbriCjcH2BJAV5J9c2mPJxpmGUvqC7t3rcLo7jDwwmML"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tL9srmD6veJXjPMbbLNpGPj5JPrhaDjHExYE84bkQWt6omU1FEr1HTtweKMwYLsiAH5MGTMs63ScF3oifCQJSuM",
  "key1": "2QmiSMTMwr9jmVUkPwy7B6GTq7AHh7DjXQKJnfqPkB3gSyRtxkXeKHUkbYeULotV73FLG26ZENJ2pXNpY828qnMK",
  "key2": "56hCKNNNoiExFVFypDPAYS3HCu8zzieWDjkyPwXehbiZ6Q2X82x7TS5NH4i4Gd5Nk2rEQ7bwQ6Em2nn6dhiT7Q4s",
  "key3": "5nD8VdGmRTAie6KH3J8RQ4hc2w5SRGR1Ln4mB2nsLvo7fTyjYK3VRLiC7hJqAFjcHwjccgFPDrUH4jhVae9Q8SSQ",
  "key4": "4Huuj9RJAachyuRqiWBUiwqHLLCSfA9tTPTXbhvZQsyQFBijvaMQ2Gd9k6smeZ48HysAT3GMGkurPV5Nso5NePF3",
  "key5": "3zXBBEZAhekEjxetvHSKTqh5Dta21pMaRnoqVVjKYcZ5tPh7FWfRZp7RDjFyFMe3tn4UpoH8Zf35LCKh9BgK9eAN",
  "key6": "4BqaM7ez4Ui8PnVvHyTEnJWDXMk7U2V9DXYKYsiWzHtvBhLjCrHXWKiLRjWZhyXT2PUn2gA6KTdEvXyR96JqrTmH",
  "key7": "5GVrzvcdnxCX2gP4xW2PbCnF8st1QLWD8NRiFQaaTaUDZ638atLVjmUi6UMkNGXMiv9Gn66EoRjz3gnYDmyvH2a8",
  "key8": "5uisFkAKDxLpuScBKGkb329cbG6jsdADhmbfRrRyyrsA9vu2tXBUvhUVbPcJ7H56ZbRG2UmD7czFVFVCRjcWETU",
  "key9": "2kRHbM93gSDBRJ6WMuzgvqwTfYNRP5EqhP6yXpshFh7yLLGVQjv9VKKksURtDjBkk2NX7MhEbySWkEjf3r6GhpTq",
  "key10": "3j2eHxLb9WogF5V8B8rFPrQh4eMz8zEgSfJz7DDhD1CvpNLrvWeWu31kceEN137qvy8VStvuXGS44ZMcMBzpByQm",
  "key11": "5bXb6XD13uHHu2UHe4B5V5qQkRFK1RBQezttTem4QSU1V99ehEvWcbhA624bpN4ZtFsKPV4PBT9vXAh9iitaLC8g",
  "key12": "4iKqrSUX8soGDCyoLqw1niQMh3J1vLQuw8zjiYqbvHKuXxpJckD4XwLiYrWXHC4gvipri9QVDwFxLRRfyd2DhVWi",
  "key13": "2Xd5qGS7gXvXEDXbsNUum8GNsLchmBMbLey4JXaFpdBN2Yw4h2b8t8Y56JhVYvCCph6CKSfGWGWVR9WAnfQ7oeGT",
  "key14": "r2BGHEKc8jwXywQyacaoX6CkdJ55AjYraiWLBt2cUQjCuAPk9b6eGnfzN7Xs27YY3i8NnBgc9yJzdZtMz8VpbS4",
  "key15": "5DzJFHm6PKwAdML46Rdxbot4HxVasTNK49oZQq98QR2QizKXPFPYX4iFGbmyLy17X18M9k5b7ip3YYMcvrg7ttVV",
  "key16": "5BYTCmRP6wH3sU6uP6okE3pPsGWNMvNMGL8NbPBDQgrSWZPCmBQak93ec3dtAohufjuWSqTBzu7wExike91vMUWW",
  "key17": "wufuue8EpbQVe1jtNyhBReormn5skfWsWgNba2srXWAkNqtcL5ATTPmm9ScN212gUSVfsFdvWm68LfFXueJzGk9",
  "key18": "4ZWVojJ9MTHmMDaReFjhRE27wuPsjgc7Ye6cndH78Q7GS3GCh5nkiDJb4saHM6u62tPkLftSoSj9uEmhfZwqMius",
  "key19": "3BesGZPyw6kCT1jAmSWbfDFtEMna1NsMbx3GpdDCzQNxNpD3Ln93SRQAHo8RCRRtA7Ta9NDsEsDMAz59bz8h76JQ",
  "key20": "5CoS2zrmdjkJun3anTK6BAZAamU7toWBpmzt5t9wS8HTB6crBzQeRD3eUokdYCh8Hvj6pvs5D4eXpVUAbj5oEnhL",
  "key21": "2Te1yx9pmXrH1diwGJEZUFM8RPW5tvJR2bbBdoZg3xc2sAPs61yyqZbRX4qEePNvVpnJTX31JXVgMFUH3CsNPFaj",
  "key22": "25XjK4yprAPdeY26kZ2FiEpA9wDbrDQXsBdAufVY5roYSypoe42opHVsPJZPFQCqqF1QA2con98swt2RHcGDZ5gH",
  "key23": "KNczpV7CWzXqjS3bDoaqYK8zUH24HeTWs3TpYKPDcsSGif44sseAQi6PFTmHVZLoWF4NU38fkPUaPGLwaNZr4Mn",
  "key24": "53LJEzS5A4wah7sVoaZxth1r9zZFNM2V31T1mXmKuLDLQZLwNGFt3AtHMN2HuvxFPLWoTCXewqHCQFCLQzzLwj3i",
  "key25": "5JpcvxoXh2ECNk8yzVRZe1ZHBsTvqme514gdhePec52TLq7nSMC5FiYbn39JLdG4rKKSaEeHh2MbcGLztVK43BpS",
  "key26": "5AF3iG3tqkvuWQso52HvTJTHmbEJ4Cw4pUT1bpaRVWMK8rNzCjLUBBBX3PTHkz3692g5zNRoAUdPvi4prX4xmE8j",
  "key27": "5Psb9yaDVSpdJTpMUJzBpWtMfMCSWvrgNseMLxh55YvfLrjWw2EoLFiNrMdQCye9tR5noVBAJ2agGGH8RSGK8yEU",
  "key28": "3y8hrADe9eUcxcUH5tZyJ5CoFSMLrTaQvc9E1dYqiSZB5D7M3Bm3ynYgSFkJKq61ehtReopEhWd8PReLWRAYYEfi",
  "key29": "4V3fzLBA3qt1hB4VSrHqdQkEcFyr4C8XG9T5TNKLeMw4YsUHmJec8khdHCyyd36hEa5yBYtuzeGqcwMHJGKxbzhX",
  "key30": "2RuEoCHpV2CENc4RU7uYM2tjgTbwgCFzHW2MPg3h25Lqa9QQ1tRj2Js34vuoaQCNK44WduNipzPfbFsY4RuupzLJ",
  "key31": "65KDXhhCgepQrRi8geJi6QazbbUsrCaCfWxqthSKtsPq3GxuNhnM72sGDqtYwHKFA4MMtJqr6E2JfJhdjnFwVxeu",
  "key32": "4zv99FyMJKdXeMar3kT6wrXZmpmSE8P2AHWK4eNWKRvbT5nZdq4PAaccHGgUrvgj3RFRjBchzrh7XWt9hVyFgyPL",
  "key33": "LYzWqQDSWgBPtAqD3VuGUfHsqht5pcCEq4b4AbmFNneDdxt6v2rdeUPgrztQvzuP9VA8RpjQt6qg8Ac96MusSaX",
  "key34": "328UKDwnak385XgX9idrDPScUZQAm6krnoqBi1M6XBmUHBC51wxDEQBjjyyY13TvnwkEUztJv36oUbjtef83errL",
  "key35": "4gKcSmqERiZJtHdSm87CVFfus9UxfQuc122VEtbVnjVhAKpLXX2HryPM25GDxaXfmmjF2uVXXY2boze2cQ8MLVMu",
  "key36": "54bXuzDdbNzYfrL1qwQsg3SyYs5nR7jWDn3iS4iQYaVbEeigeDUYqiFXS77add9rvveiNCuxYWLwttRSHpDDuhjM",
  "key37": "5Q365vsdecPzwVEd1kgjyvgULEYRzBWewkGaLwjFaC3vRoUzajtnL6Dm88KL7LAbN46uGZxpFQzekmJZ8qV6WeUM",
  "key38": "2CfM46iw8Z4cmEynVLh321B1j7xZbkVP5ZFpCWi45NaP3DZFdK4TXJib3DGvTLpEQrBZtScsfh5NfxJwtorg7k3S",
  "key39": "4Em2v2Gp9xg4sLL2orkCRFe6ZRAW2cEgEX2Ce6qCtaxisUaJGPZqPKhEjtDwuq6UqKfR6qQ28YRk6sZm45eGZ7rG",
  "key40": "GA3cZnW1tTKJ8E7zR8CG8nSzFTNm9fDD7wqukRW57PnzXQLKwcwovdqEXMbVJZN4zgbjvsdSiH5JRCeVvKaL9vu",
  "key41": "3D9L4TfsesC4jRECRxEmfgFmPtuZ62EGbWNtCWMdnt9HpxDakgsdiGJvo3ignKhA8USKtZNg4ajWzDHFkuaG93vv",
  "key42": "VLYJcGsbDXwYMQZGz8nqaR6nsBba4t8eJbi9frLRCRwdrCDNTDNBQbW8MHgyUS2uTQ9z8uC4uac5w2RBQuQzVL6",
  "key43": "4Fogf4cRCvyxi4PmEV6eXRTA8ryfjPNahxPGMZ8mhRfMjxi95ND6FPYa73wc26Brby4kF2QdMy3Jb8WUPDj4rHxh",
  "key44": "2U64eMqQy5yRZcrzU9gDtHR4fuukaD48b1NnTUUfKm6Rk91MatHef76jK8kswPsBcNvnKrsH2M75vrw8X1rSsPEs"
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
