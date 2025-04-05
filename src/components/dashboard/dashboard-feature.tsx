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
    "5n6Xd4dPf927NvybYD5oNXhuhwoSNUHao1EHW5ozomERM1eZZMEHLiXVhY22iKVe9V8AZ9fXyjgiBL36fM3xvtKc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oV7Yo8SB4yFGAjR4KUu7tqEimnV4wsMSUd1dzxo93jYckuadsBNvSsaML1bZwkiZjiAa4gXyZBxW5NhXy1BBBat",
  "key1": "V24onw4tqiaEGNBZizM3F7TXqwEDffrCPGbkUmoyw4hp52MB49xxMjCZudoRuvySqtsdXk37rn1EJ6SuSwzARQX",
  "key2": "4cLwLtHRMSq3829LmKhjKdtp5bwv2TBYAxgeRukACaFFgC1EdvNabtv7Jzsdd9k82Ym1pRLS6TYXYtZnjdguYTc9",
  "key3": "Vr3BR2agq94MvMqMUTDQwgrnmFFPwmzxrpMRtWTA7H4F3Fu695jiGhSd473MsbCR16zv2NjoGqAGtoXNykYhEKp",
  "key4": "3MsGmoqxfP3AQvUhDtCHtK2Vc9YJWNZi8oA6mnYqS67edvfyQEUKbRvcaRDG5DURG6J3A6TFC6ZBuqUarwsLxyGs",
  "key5": "23RgVNZsDX5YdKXxSZkCXhx8DPoRgai6vYiqrDaGXqc8L9j6idLe916Hnp7MbbafuHpPDhmGsgWRqNR7cveYFxQV",
  "key6": "1qkdecxJRwpZtguSTfzVDzukvE6wLq9idBH9pkao99fYbnjrxiNoC4DwYtUY1g56KDFPx6UfUnBMhs2qtSxFzJZ",
  "key7": "pvpJv18u4fDY1yArJpFmp9vLfGrZfUPw1wzGw9YWQe37NUemzA6byDug8PpicyQpWnDmxYr5kqziSoP2bh5Hr5g",
  "key8": "4Y5xkKT2pbLijdJxK3YZiBgYrE9wsQrWBdYB4M4esB6wFCdWybxtWdrkoCj32hQvz7dL6jkgbz1nEBWMRaYuvTHr",
  "key9": "5aeBeXqU4xXq85m4zhyeLsTqgkoRvhFF5Eacr7g18QZU3Ke6kcs7Eh31DMCTyJTNymnBHL8ECpLWGCXpnNEZvZjB",
  "key10": "3QFiZUsvK23tR55gPQw7bSezzRhVxUUY35TCXUinPbjd4b4kioFWWhNS7VU8Fc4hQA4t1KhQ9xLuhJe77MxrfSKP",
  "key11": "4e9Wvc9bQrmGUS17GB7sXwHJs7hdiNp9Jrd9BG9UV3jpcnSCokLQqMDESt1YBPjPmrgxEDamfuwUVm7eBowg9HyB",
  "key12": "2zVcMfuhnc4HS113x5gRhHERxwnqzxkgFJerxGdksJzoDrC7KmgsGV8wLmRFX51CXzoP5P5SBqn2Df1wKaoJUUaC",
  "key13": "38d8Dh1LSK9c49JLbdNiLUmF1gnR7zikrZDVaHTEp5or5uH6L2XooxqhyT7igAXnwgUKXDrqaz8fNJziTjtd2rKo",
  "key14": "14v1vLoHnBUkFtRf1pnHMd1tsMdSk4HFJFUSZYk9odMur9GBYABYhe28xtQ4i5dPXyLUkyLemVtQSKaFh3oBF3m",
  "key15": "2nRvVGejLJQ8PqY7xSafqGwyBJ892h5gXwRp9U3anzCN1CXdufGoydCKypWocxiVkrP1UudzLAehaw65iJoqX87N",
  "key16": "3fFfo9xNGP55k7WbwuB5TQ2XwrSWDxfQu2erprWWX5puUNANWBTRYRvEorDmrf7WjYuCLSEBnf4scmGnnYsprYvb",
  "key17": "4Kj52rVcmAb9TJnBVAyPzvsG3dsGJvhAx1WbFihhKL6MQSWTz3Kyods5vzzzyPYdS7qmzsViCuTVrp3LVEvxfoX7",
  "key18": "4eLgnVrRrQueoWxtCwsiTfRtkeoBaTJ4VAXRSGgaqJdAvqwirrmMcUzeL1ULbkhFdVVDDcTqrpn1yVZvD1KWdwr9",
  "key19": "5pkEMeEa4R1ggA9uL79t8TSyXpV7dfTC795FBGxagTzUaKS5B5CGDLqXrrERFiZHPQKP7nmGGJy2wRF5wkHdJ78m",
  "key20": "24VQehhqMcH8iEGDgjYdURT8KicDFnkBv3cv28JFqmXz2LY2w3pMGer6h54EgS2KyiHWVzn4CdpjM2hRDm2LBJet",
  "key21": "63QbQW3icNRr6BQ6H2Lp38dHF75F9Z5o31U8u3Y7tasAd3QYitNCFaGhp28nPDH6Y7KkYfkHwpRSJdSJeVAR8BjZ",
  "key22": "4eNBkdxMAeZwq4dWFTyE44DwTSbzF3GjEGv5AskHSBDPdcRnMz5ZJdrPdpFZeopQ1KdvFn1uP4JedaShyLLucF1h",
  "key23": "3EeFYihs71h5zJjq2Ywpoz3aUNLt5ZxmAycU2tDSB2pHEVQu8w57DZZj73ziNRKBD5J64tFBVrFV3t1nA5D9c4iZ",
  "key24": "5roJVVZGS4gVePHfvVve46yRCctEfcSTgZkzHsMHcb7kDbfBSToVU9Gs8U7RpggbPApJiTsKXcJvR4jLRHwy3MKp",
  "key25": "5ZjugCmRj1xsHwvncrdwsDKmXdk191mgia3AN99YdnFygZAm4q1o31wMPodc8AZdsXZYc2zXwJ69toP5N1rPrWLZ",
  "key26": "5w3FzGvsge7Kbdi7dnGRDgyx8AUFucLiWBA5PwGEvw5kDXn5BtzP4KWZ8ZSDCDaehhEhEzWD5jBfU3cwhb48T1VD"
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
