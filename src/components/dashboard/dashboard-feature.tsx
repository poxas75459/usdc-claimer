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
    "5qKiYJnZGMutDdoVmFd7acSSHYrEuhdQ8FeuM9VfGZdJpEJx8idHTYYQPBnX2d5cyX4UfsNAP4MJBbsGUFLL8CjP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5obwpiTrecnficQeF1A74RijSyUszc1trkXtEvgQoceVBctVGC2hanHnu5SUPL7o4ogvVHm8ofoACpCxPW2QJN9j",
  "key1": "uDAQzjVZhpxbmCAL3zxKQjGVf3SzhT6S7ecqbckyMjnXJ86sk79fyvNTKqfiFeuRXiTGdpctxyUhZUqyCWetHEx",
  "key2": "2y85VxY1awBLZrfH9GTdXmjNnYo4vd8eFNWLY7VLVBYtxN6Q8yosAiEcRtvZyxfYfasDaibbbFunVkKhaC5BaQvL",
  "key3": "56qNrjgxzrLW5kyASkyePW4EXEQ5WnkuC16YHjSygPuL65qDd91VyZyv8aWQxhFbVVvowtCFnZd7JSP3gpSThvSH",
  "key4": "kFzyduZgJAcjC7ENdih7oEQ7HPztwsSkyzSfSN4HqtttgthAzLJvbuSXAy6SYiTyEesQXEKN5PbcDUa4icUxx7V",
  "key5": "2CwPagThTBP4WjASvrELZTaR73HgGfQjvudV7EDsfaF2aDAhJ6wXke2jijWbz6pvXN6kku3wapQZCri2Yses27UZ",
  "key6": "4PERNABMsEL79wovmfDfk1bDY3JBamjuxtUGDUqZQtY7oaXYkT2QeG5yxzSvP3gPBbewzFgke6eppK6WVzQi82qo",
  "key7": "2DvjF38CAn7kwXrStiej3o23KtYrmWNDWqBTmocjrne2hjev3jqccpTi3iLvKpxVvxp5D3eKqpvBrRunqpmbu8tV",
  "key8": "62a1VSqETL3m4J5zyAJifXZwTgxxSgbq5BqsFpnf6WCe9x3eK575upUkAKE9An19kN7epqcYj8rhSnmo7ZV2vP1M",
  "key9": "5WpUbtYPiSfijE4cYbtG14ut1mTfTcjcFuR3BYutCCE5x1iVuHjMAULu7GcJAyAT1ieKmwWh2RYqpM3EpBjWN3YS",
  "key10": "3ET1Vn8Y8hYYFKGkRaqq76z4M63K92267bZkhADtVmTEwyS1Jj3wGwS4Zjp4HzYA6XZzxupg182mw1wCF3dsThqc",
  "key11": "5Sw37rotsi4UZGCfmnRuun43S4nd84Lt3oNdzMnkR218mwfRWf5EySA6exMPyPTyfaZgy3ah2tyr9GFLLYyurBY",
  "key12": "225ZNqfs3AGSiAfq5usFeJ8pD2B7DZscC7zYQs8ics2yszZRzZAHztW9CavmsHoAK8yfVsTbACNd41HXStHJ5s7e",
  "key13": "TuEdYHVmJaZ7qb5CJRdmaWNH77RFdj4vhTLiyXAMsD5i9JbBKsPyByf9BSWvSXiyXNJvhbrmTQMucRfKqHw6wco",
  "key14": "39pUt9uFZi9VHn7qXtpDW2ozJ96mYsD6vRMfYM1LX6WKhH9yXzbd5BXkiMj1ynW9pmtCgxzvK33Sz9aHeEUJXTc",
  "key15": "5Gn3gsvDXtAuCN77HoWVj1whJqfVLTUoakSsLbaZMEHA9q4AiVoZkTb7PKb4pLsXugkhMubLy6ped8DN5MHFkBfN",
  "key16": "2ExtS5FURZr2DiXbanUznAxXsbq7tVWT8Z6ky3Fa4qXmYhXMRKFfecQdRxL33reqwbBcvgWYzDzec6Fj9bVudAWa",
  "key17": "2kBobzdzXCTNha1AyERpFuf2XorQssuVhjDQbdEMGx5Jv1gfYK1ZCYAnMSYLqo2LaBwApKkVEkqkQMi8FJvZNqbM",
  "key18": "3qDENNMQtG7MeehfA2hqcToqiQGBNn9mb3Tfo7pC73BDmDfBVtuMwKmBefYX2rE1GceZLqV7Sxywrc1ZAhQUDNsa",
  "key19": "4bVzjbLPan9xppTx7PP8knxWdzPjF3yUumQYf3JKu3J9pU427onkGncYctdRJQ9H39N9iYm3kZs3xQvJsi5nzp6E",
  "key20": "dt2zynVLqaNQDNLeDEXJzLjXtG5Mg7ZQAFeroqzGjqz1b71p6mC84vgzJPB425iNtUW4dJUMvNPZPMHswWfM1Ce",
  "key21": "4Lt4QHkz1TLvFZQqYkjbimrSdaQbBFmz31n3VHv3zsCLxShY7EUXFcDXrnvr3H4VK847nKHFXrMLBu2ceYPQmz93",
  "key22": "62hKMWq3sP4fnagnjqdCXNaB7ZYx5N5eUFu4XmvBKyLDWnsMPZyFD78brLQzVJnS77q5TNM7j3AdUwtLBEm1LD1b",
  "key23": "EgBP4Gho6mTx7t7QCuH4fxM5uxhLS6ktJm8SfgCiV75xTsPTMmTSkVNj1854Jg6Uq93c648ENwXCxKm1ggG7SP7",
  "key24": "3q6n5XCqU6P8dchZhqNfYa5JTdSSAgAFGhLyW1JjJm4hfN8Sz4cgf33x8rUiYJYVJ7SKGh95Wedf33SvDBMcCFyk",
  "key25": "MKAu9w3dkhFQBNepFb1t6kT4EKaH8gUDc3QWhq8DNsQfPes5emrjiW9chjoBdSm1Ug9aB1KDxtXQL6HXUL41eEB",
  "key26": "4vrpFo7Pi5Qj6p3aApu6387WESxc1DD5ate2ETXcDrLbm3Ta8e1wzJVBigbDDdxtqqwJZyDAbun1hLWUWPXFHJWS"
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
