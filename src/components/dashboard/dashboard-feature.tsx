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
    "nRBncR17yXLnZeLmVzLMDKb78VwsLBjANhRMuKM4MmThwDLWYPTJBGaK7TAA74f84AbkudTexvuEMi5CR2dqJdR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kJCWoKKC9idHmRYrkarUb5BjqjNNF3PqXGhMxv5KBS3QaU7a4HK9aS2opqGD3Cy3FMMgmweEoELdab7eEvCkJ1M",
  "key1": "4jgEGta82QPZqzaxyAPk84yKtPUX6wtkuoZEL1nmcrvwzUEkccrnnmDtgugTcteJVvobJbiYqEDrQQxwzQA31Yq3",
  "key2": "3GWX5Whm1bomHWVMFygkfVa9zMhu2w2TfR1u35wmujEpURgT8zZBENuVnE1sfBArubt3YKo5cPRjYz1B5Y7GHsfQ",
  "key3": "3p7RWA9QLkbbznWkcQKD5gDhVLpU1HGEAHo7BHpVvjQ2QZAZwMnt5uLnRCeGJNsK232w5GeFLsy23kk64aLsEp1z",
  "key4": "41HwEi5ZjsympjHKn8EUuJELmUs3LReexx7Dhb1pTK9k9sidTfQ42efGyaVZFXi5xVGNjGRyyXQJFxWPiRBeGix2",
  "key5": "TbNyed5Nk5mVG9WsuMi9YDTg7C6GR7rDZ2Th4BYyg65Q36kaBP46uqxavb1AqcVaTWy1uEFkGTeBYE8jJHMahZf",
  "key6": "636g3yGQdYbugk7kqkiNNWTxea9D2vLs7JoLMALJYdFLMLBa7maoedhKD3H2MQYGCPLpsrxUDTHcEYTWPaz8NCHp",
  "key7": "5kNmbvGYnVnWqyrnLNazLEsFkrqiuUhHZHdgsUcCQuwyHVm9n5GcCskG4whGtCQpBmfifwbfMdD3guJoCaVHZ4iW",
  "key8": "5tm8eZD3SGTLdpVVmtUfj7dEcpmijYGq1zhXoNS6a8RbYXJuBoyPkncinNDqDBTsJFGkn9FSBYQ7quLgjhRrS74X",
  "key9": "5unGh5H65XhrYsZ3ejdFKNjHmRGYqvWT9LW3YrpGDoQUDfwbeSerrLB3vT1y5o5tbi3jtFTUQFc27maCW3ESJ5BP",
  "key10": "3S8XpDyqJRK2vfKpu2b8bNLjMtHiF5mLaNmU5WLYXsmLnqppsseMLQa1G3LpPc3RYtJQQ74M4MfNhEPADjvKQgAK",
  "key11": "xJKj1EHjeT3BXypdeRExAnNA8NdppcJfxZK3CR7Ct8cJri6NHtqHY2ybeVDYXSmrFxMnRy8BoK7BZuFHpLsaNd4",
  "key12": "4cdd3sRTrQMLycQWnqMVTkhwzdfojBnh6fkkANwu7dtge2jyJahauWozM9EWCzRLKTiuos4oimX2qPp8EmTg1qxw",
  "key13": "5vKfTeTp54Yz71yxc1dH3c5tHnAr2RjxFfzGEtWCF8EYncsVo9SoXLi9BoKgKundvoETAUarnfuEooiRsM6NCjF1",
  "key14": "4vSJuo4PhnCW93VYdqxSWxi8AQAWK4gzK85o88Qo3YBF4KDXovZZYzq5LbQziVKKzKgSNziQd85jBhgxvVvo8DBZ",
  "key15": "4o2vuMbFAFANm6HW3WiVDsrGgbXvUWNAx1zrC6H1PzMaAuQLSeZAMAhiNgna9582VUT6Ue2CyEMZdLjJRkS1Aagu",
  "key16": "4fW32mnAHtkHAzTzB4tCDhQybRVHpHdjpJfGWzxQqWFeGqf2byUdnZ84oYdXxd88DpKkmyEypXkrsBwCHjcajeT5",
  "key17": "2L6o1Ht5CeBHeRXoSSmgbDAUagawuW4uKGEXZS4YF1Xn5NUQSJgNkWGeaNAZVvm1fbtD5PtW9kPybTKbEeWuPEn",
  "key18": "3A8UmhYhdBk5Hrtv5riwoy2UUKaAtfLwTKQeTaegYFeFhXoR4cTisfJ2thEhdR4LmdxFnfFoy2mp7d8hNVCaoVw3",
  "key19": "aSX6ejvSBKQ32SZpGXiA5JjR41ixKTbVLYYzecaoU9UMnYZVs5MEMkjLpYY9uSL2APfR9Z6AgqgG6uWSqaqDkoT",
  "key20": "4gvVVJpMpCh967WSJDaP6PMzX3Y6r7e8CBvW1jQooDMBJdHUQA9mmQd54KoUUTR4e8iao4cGSs2x7k3np7AvHUtg",
  "key21": "3meQaioy2LugnWFdVxqvwYhN85JHkP1GUekzohfeDcudL9o85KCfyQ2DAbauWGYUdqYdT44ZaDUdpGYDdk1aASit",
  "key22": "5i76j3twxBTwsKBGhEdmPb7Pn2iz6skpZCNuPA9XFC6eV3Gw2To5AHWeyLqbVwRTYbTwiXnynFFkwaKPEjTkwHac",
  "key23": "52F5oRMzBXCy75UDSRoSmHeGSuJfoR2btwofNtsMJ7gTahMVwvFjDiyYFs5qW2anPk8tUw18Xkh4hoXhXk5ydf9C",
  "key24": "5J2ggBTYFK55WUWeNtMU3t4ZSLhxSM2L52URa2Bmajye7tVqCeuWYD2XXBDg6ndmMvDQT9pdBnth3ahuzbRmZz4w",
  "key25": "59pHu7XhUVzfvacFSA963xJkD35arMFPnyPs8DMMMBBBtn56918ufbo9PP2CZ2Zsbhz6M13m9EDrL3BQxEZPcstm",
  "key26": "2ozc6JttW3U75FZSCkYHFFuVeLCvcx6CfdrSrFCpi2r2B1LRTe9ceV3pdShW2aKLeVvTgUKmhVDXoi9srHRgXwd5",
  "key27": "5TYQ99jSsatYCvRHV9uGRMgKrPdBd1kiRen9v1ZACPrsKSXJFHW4jp4Mg62yhg5niSoewn5yytJ68WxmiZEExWCc",
  "key28": "24Mt41F2KDGdQirS1dYLRUTmk1VqSquveN2ddVH72HJ1ZdteQLZJTKJvCMUSXq624W1HFL8kK5A9J3jUbv1aY8DP",
  "key29": "2H7CxdYRHsniP6x5V13zAuJtaYKuYbt7gXD75j4cqihVCzMzVMtYeLvv5t5BEJg6TFZ8Xip7PtoNdBcvWLSo3bvj"
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
