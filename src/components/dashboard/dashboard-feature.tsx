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
    "4WsU1iscmUkbi8FBr4FNytb3VNDMdUhizJfUQNhnYT2x299WEnEi62w5dHdSvLv7vmHQEJizzNm2cSdpqbAHZe5J"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "4DnY8T5EFjm7QzJQdXAiqvWuWjDbLq2tKGJ59zVZNK9RdGsUUsWmGFiJ8HJ1P3Gjzmmb84kjEckXBuuNccvvXJxt",
  "decoyKey1": "2w4qwDT9r9BxmUakov61KAbxbjqbA6Het6DnVRMuLXkj4pVRxPoAsyF5zqC1wgCEySBqzMJuJSxSMMtH549KLV2V",
  "decoyKey2": "5CaZxTwaARNqBjZrGLaHkr4NsuDrLzNUFcuzywN3wtCXBr9PtQx9c1tUrjTkAtZGq8U3SDimvHFH6gEyvZCWr6xu",
  "decoyKey3": "4DqAGAvEQ9FhaJfefD5u7itDeNEdY5NMgAeiAojf51CYA9vpj7ay9arSpPDVrgUPm1aQ2KA9S4u84Eiqk2iwxESP",
  "decoyKey4": "43u8mZd2ebUD4e9QmCkkeJSHgacRgitB6ZgozYYzgsBT9eejYW8jPVK7dghSYQ4FmHeYF3oz8AJtEZbfMHFLra9J",
  "decoyKey5": "2osGAeU2Pji88tk53SGJMp4bHPaMJPghuKUsNMCZEFbxP9XWmrdLMAYT8WKATLj2fwrBNwGe5u7ceN74t5enwfBQ",
  "decoyKey6": "4eXQ9tUiuFki38i9zN8jbffrKCbE6oA8B8XwjVapEedE5Mt2whe1HRGgDWTYCHXHVLe1zeysuiPsLopxr67Vj18q",
  "decoyKey7": "5BG488tn5NAoMWz341dTfoE8PLHboWttptvMs3UzFb976bPBfgCBAZh8AWYhocFaHpCHc9p1wcXBTFN63PErnRLk",
  "decoyKey8": "tzqn1q4isWndzKRuEk5Ux4Vf4RMqc81fs5P1qSdY9D7dBafRnfoxXLsDs9kH4Dq1H6H7Yg3eyTmMUCxbodVJCuc",
  "decoyKey9": "2JXk9tgkvwLtUb1mm9LVnii2eBgAWTUXVRskmiEwArDrjcrJav5QRWcJFzKYxrpMARrPpR6sVWwqjnfLkJ55Dd9u",
  "decoyKey10": "4XPhrPDFeGhyQ4v2dwfkP3zuaQXQnkK43pDZbqhvFuEoQytPtrMBfUjUXrcgh8RDxEejs67WzSuKKA6VBEWetvQ5",
  "decoyKey11": "45P5j4twXCpW3SwuBHLYCD9LMZbW9M7MxzVvbZb6Ac3xYawuKs6QVvHUr2Hcb7ChBbyM9t4R6hcMWfCkrid4sruf",
  "decoyKey12": "6VkwoL675YzYgdUK8aQ4Rq8LZE71oa737qu2fL1FtS15oPsjJ5m9eq2idvxyQL2UpLhTTx281ozAfKZ6683FPUy",
  "decoyKey13": "LPyAtH7Aj4zVf7TDkvCS98APwQU28jZpGSvqgxEJWSh7osvkCKnLhdDgRtPDPsp7kvLPS5Ys2wXfcsfgxQB4fFo",
  "decoyKey14": "dp25yWwhKn7qv8VfVosYUc2G6zbvXVH7DDtQc8FGz3Xca4N2BMTgxoFj7SHswWN9tiYLvLyoBQ7Uxau4JeDHmzV",
  "decoyKey15": "2RVTtDHezLT4T3PsFWpqbNdH12i7VTizy8rXmaaiDEi6hDUmyRS8vh6BmUdqMPE8TEmv1YvNrGcuHhNSSvNZJtJV",
  "decoyKey16": "45KTVyFPmjFzbKo4Rn3i9F7Vqhd4PyEugSV3WD2g2rLFJuD4S4ZBNimxwPtt9JyNMJqJBT5t62q7bikMvMGkawo7",
  "decoyKey17": "2XYp4yY12k4y1ebcciBvYd5hWsFwALRo7S5ot7j9kVB7SygiorGtitZv2rUoUmMsPiC7hmMxZ2hDrdbRJMcFptRd",
  "decoyKey18": "4esrZp6zWcarqWYvm3KfscLfDKjQ2EaLvFzxvUNFCERyyTTGtgM3VXDSNJphXEgkxSD9d83cngLgGUwwHCuHQE7P",
  "decoyKey19": "3yqJK97VDLkwfH5eyUgWurp3K7cSsHLrnsnWRVM2wwGtRvCocwhfkRg8LmnFGGrQ3SSwQWDBNdj35D1SUb3xjggH",
  "decoyKey20": "Z7MfKSXRVaEWxcX5acrbnXPGrFAWK47i1qQx5agmaF3iaf221sUxDXuja9MCaEx1zUR8k4bharo6UnEyCCHqQkx",
  "decoyKey21": "42jQCAXZQVkH8FwR6twJGxm26upSULRcT89TDpW2EWxfvhMkEDtzw1Ekhkn2mMY2U6e9VJSHzibQd7S2FwRxnQsZ",
  "decoyKey22": "QFEvad21rBzck5ovnMX2MfwuBsmATacro3RDyujmgPNJntEDMCk8SBXwk9MBAcK6LKyDtNcdNhh9p9MKhqsEzDY",
  "decoyKey23": "5sPoMnnqAbyAMHq2QrQwsoJmBJBMuGGBCooDwt6PgQtTerfkoxDoXLQwgNNu6eCyddPj5rJjstAnKc2ZyfiYh24v",
  "decoyKey24": "4cLyenviyKeBNdpaPWyJvT4uZrXS7TEBgAnVGvECZT1XP6euadfqZcyGgjnV7L8Ds8iBDHPJPhdeDLpUKBUBMkML",
  "decoyKey25": "5VBEH7wGFDzpcF99rj9gmtBKuyaUwXm7cPLD3rJHGLmzNuFy2WfVQtraj2pwb3ApAveTfwEZTxo26QATHAMRgoCg",
  "decoyKey26": "2iKZZgKBPN5cJdjg89gsyaj7XwF4Qi6NvPZ58TXRXihKc5PFUTeDc3pkPPL8cYMPeUNbTbAzJU5jUWC6HXAKPzp3",
  "decoyKey27": "497ox75semeUCxYB3VJyUunLBSuT3Ce2xG65HxzF8jhptV1HcMernJaDBEgtHCjCfKyS6iYc3eoPxUYk9J5kGLgf",
  "decoyKey28": "wNYHKf2RCkYRCj12j4Qeq2GV6vCCk43kW5EtrAEg2rAPDquwdUyvuydLyzTtvnetAYfkqbMAJLJP7kHRDTe35zq",
  "decoyKey29": "2rSUcL9yEvL8kaCLFWz3eppYRNhhKTRhK4wNvGGG95JgMQH3nwFDE7FmQJyMz1mP54yGLtw1Qnr7UVBZgEkorPc7",
  "decoyKey30": "5MSMwBKeRBa55JLbmEaAC7v61UGoBvTZn7ZpyeJj9JPzMboSqe8HN5ENuz8qU2Y6Mf5JjRt3RX69rhpviGBoiCVN",
  "decoyKey31": "4WhpvjsenFndfqToDKR87EAmJFnuoRh4mUNpStfXUhCDSHkf6Psh67uQijUZpzzUBCEanLkxSnrbGXGKDnWM8yhv",
  "decoyKey32": "56LmDbav4q5omc4vuZXmzYGBfhqqwpCNGTznDWqjN9tg9BF3YEjRStC3ZKSEKLYpNBdyoEr7r27a6sL7Gmywnpti",
  "decoyKey33": "3hevDE2tta1rvTBESdzYRZa9Axor3KMbHEhGvrq42PT4Gk6EwRP2qgCEMUkeBdP5beVZ4YsLY9BAsDsqreYxUFXZ",
  "decoyKey34": "pNjHVHVZj7vgZiTe3qK5FHkzr9jRLDjtqzuNDb6d4mDoG4kDy9QwASaGaGwod5oobzzd1qTZqZtyxwFEBoGE4Fk",
  "decoyKey35": "5UDZ3oFtzx5SXYc3q1NHV5pYCZRpR56QAw6bNT5mdrek2YgT2jtginJXPZeZKMt7ZQKAbGHWeG82gZNY2h9ExfY5",
  "decoyKey36": "398xkfgZ5i49EjxJo7ZZ3GLa19f8J42gy7RqA5jReURvEaG2ctYEB8FZhAp6Zp6XUyHkoN7yVuUqYkc84APLmTUo",
  "decoyKey37": "4ttraE74DaVdtoT7HrJMiEZKJZ9gnppr1hmnvZLmrv7KxRMDwdYwvmt92dSx4kPdwMRJGWmfM6YLFW9XiVwnvimr"
};
// DECOY_KEYS_END
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