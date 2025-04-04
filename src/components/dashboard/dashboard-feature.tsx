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
    "ZaG6PmJpsdP62utc7ht7usfgnN7sUbxvwsaR9L2VWLUBzvRPa8WkS1b5fEryakcS6kxdG9YpMvgoag38QFECAMj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X5cHndzPWWFYviohZaJYNTt727Mn8fidg9QJ1kwzfMUTtnqg8otggLRdKGof5FPKU6E47c4xoh7DCATkifJWwdL",
  "key1": "AMp7E447H7bUn3G59HZqjt6mDvnTtfyZyr56rJ9akiphMxvrTEjczEjtKAnXdf3ZknnZBsndmrjeSaK12BdPE9x",
  "key2": "3Q5DjS1dxm2AKV5eym7FUaBqKaNLAeiWXJp1A8SCv1AthhiK4TJ4e43EXFVJZfgU4GVrDDiDWct1AZ3J6Z4xJpuN",
  "key3": "2etUt4xUbyT8UkZHoQzwa6jWsvK8WgG72CD3yvKy7gGcPUXyJKuMktygY5h49YMEfpKou78vit8HASSdRa4UKxUy",
  "key4": "3V9r1EkZ1R3gp8m7EaYMMvjxrhQXyRHAvZ5mxtcgUyeC8DPfAS8Jenx3maZCgiLFG9aXgPR5UZz5Y3xmXo7FoD6G",
  "key5": "5f5m19urgErHXEpzjbo6MAiw5JXqRQYyMBX5So3axdMo7CPB4KyrEEqi5cdGWbX7Mu3rEQYP8qf2zFgYSF4Gi47P",
  "key6": "2mkywGxHAzY7qP1XdD6ma4KfWvjbNNsKmFPVrJpixu8dbMqQ9AGKrjXc6jxfX1fKBWtsXYTef7hbVMhKQPeyKFrT",
  "key7": "5MU5jqkoArVVkNrqY9Uf8mgZcyjVvhK7shkQzJ1qNZYa5C6shwArbk4td4Foe8J6kEFdd9oAkaUX1NiPTD5iaqEh",
  "key8": "3ahukNBEd7udEnWfzKmiyX9YxzweQnEG37NnAPZGfz8vG3RjS268tp9Pp34RUEEP2pTwSz7W9TGkywPMrtfmZAAU",
  "key9": "49he7NPCCUPCqyQ7cfxgnSQjGwFxZ9SErQDnctEui5p6coSQyGM3q4JQLPsQWL1Aho1EEwqmxVijRCnfKCnhtMt5",
  "key10": "3M5feqJAQTdahwqLExvkaH2mEhv6fyUKM8edS8xKKFu6gF4zu1jCgWButGNdJ4JzYr1CHth3Wu12e77nrqGnNn7t",
  "key11": "5xG539SBtw2AcfqXgyZAZAiar5jKwwesVHYdwfAHvcrxF9D4ZDtb1UaLUDbLZxTMKyyMpH3w4FeatrfveceYVfbo",
  "key12": "2XmUGrCiLRKSwjsKDnAcFyK6kf3xrQvKSCX8DuFXZYiCaf5HdMp8zdpUACmea7DSCF22WwSYp34yQ4CvTt43iUwz",
  "key13": "34M8cNvMh9DxfzajjiZ7tVeTmvq6QZVyzX24NmYLjb8CLee9Ce6AceDWs7nzuxTNRBG5uXcHRgJRJ7VGdpmfgY9y",
  "key14": "zqr51c9eJ1ADjT6eQrrpk9QbLSAen3ANyBniV5ZrUvqKWezGGeA2qn5vv22Zf68X6KYhEcrzjXngfPbookqTrUe",
  "key15": "RnYFF6LpH5iRFMEn7uArP85tzzZ7ybaSthyTnS23MSCa1t5SuxeRyM379Tfy1afYtUd1EGagsFg7dqoic2jLMiL",
  "key16": "5r31QQni5iyGNPC5ntv9cbscsVEUtxBTCvjDYpjwwDw4M6fu3gyaqP7Kmi8Q3jzDPS2DkGqenncQyU5JxzGfQ66H",
  "key17": "3gLDApgc6ohmLDrTCeDNzDCmKnj91D72EpRRDoE856tTyVEacWSTSswwZf2QpuZxfbLoz9X88TRxeGDZJtMsyVHy",
  "key18": "2iSPf66CDaze23Mc2D8dA335iVQHGxCE4zgdcrW6fusXaUw3yCYJq3q956UE9nVmVUsGEmFQ31cZNCZGxzwB3e5j",
  "key19": "4vgB2PgJJcRNN5e8FcT7Ag8QMPpdeM3BuUVVsjvEvvBGoHMNNiAgW8Lu7yod2xAgbD2Wc9pVEE41HxWQYiZBDPTt",
  "key20": "3iMmuadSzUxfJJ3PEg4UJoVTqPyEc79tMU3fpMioAALAzUUC9ZK4xmDj1Nk2L5MARJuk7KvFKqPBikJNPjanatPH",
  "key21": "36AGRznrwwBrDd6ucqZbvP5RBqUFLGpmLnim9kghGX3jKaoUJFFkHCvc5ZxsCEF7adtcvo5WFDB4kLeUpeGupvGV",
  "key22": "43o3FeHtTiuETAosFd6eepjDCt58oTfvJ3FPbfodBGmx4FV3pvK8KbAN9p4Rd3nyyvEtvH8bf8i4tmFxEPvFUz57",
  "key23": "5B8uTzpicM1tPCgqvN9vAR5crrtdBGhozDNkMLcP9aALmjvCUZaUZAoDLNx98xrhZ3Uo5wnNAWveNF4ojwPHedfu",
  "key24": "4f9wz7tbK5TQyW8PTyE4RWtY9fb1bFwXmic5mUup6zU3shKkGzYoSaY1qmQjCGTA4tSQaP7LHP1nMS5a37hgC92b",
  "key25": "32X5XYu8isqQVMeBPmSX8Dj7v52ataqNy1ZFRG1pJhyqxENui9xiCxAKmLVc42AtJ4pQ8aZJcTpZobicdJDbjepX",
  "key26": "44PeMWFSX4Tb1Tj9GgMQRv8Nc7u2TUDcwxzKs1ouL6mEsFP9QQKEQRdrRu4dCLwLsSqZSFMYiFjYAA7XSjierrLp",
  "key27": "5cAGggUhVJKDbxLX9g3DP12AMeyEi8NwCtYHezgmmcuRJsWK2CbYGundunPQCMCXsm1bAuNAcYmsKtr1MZaJ7d5V",
  "key28": "53RyjZZ4fj4UJNSJRa2zkzWrf7Mx1V7SSU7tcMnhmg916JMGGMPS1zAVaYoH8ro33iPYVUvPkCHAzGEPSy3zxvQt",
  "key29": "rA3AGrFrasr95xWY945468Q3ip44YtRkWfWehoGrjH18cCua2rQiA2jaowcEneaM7E6nMA3f64wHKq4aUEWGz5D",
  "key30": "43UPBsJ82E1pgygZVMGF4pTytD9FEW3cnK3dqmVAddeDhT3Xt5PCjBxztJF8xvTkHKpm2DYENiGgzGWCx5stTDCN",
  "key31": "5HJEH7cafFSHxBonvR3DTpL5W1mPzZEMvXpJub7XSscg5GUtGvrzVswKRd6jPs9EgNexCG92p4nq6XJmFPwxpkFa",
  "key32": "3ZxU7bYtjcxTyiHEoot25ooBHmU2nX3CXbMXBcTwSSpQUeSzKGGJP5xw41AM7hww3Y7k5ePZ4LVRo4hbWBR1vecR",
  "key33": "2YZXHWc7docpm53A88DY2EsonDbp5A51GXXZxG2QgukJDEaVt3Wxgdwaa2PGv5tU6TK469JeT5hfg9WvW4ecvy13",
  "key34": "3BjY19DrtZEc4UWsnWwxNx1vmiaWCyG1kMZxb3yHALuVLXF8zmMcy5YckbeRooiqKdQk9kZUiwUqoEUoHZB4xf97",
  "key35": "rbeMNWS1Zgs7FFPtvWYdwLcJbeyx3b766VYAja21JkaNctpbpBcMLz9ZJ75MoGhTmmUa7xP2xXC2XdEh7FnyTX3",
  "key36": "kAHtQTtnRPBrH6YZTS7hcMkEg9CVSyqbCpBMWrJESWNZsN92JZLVFydtV9G8wGmsXkRSQr7DyZb1dX1XxchpDGn",
  "key37": "aL5xg71GT7P32YYRM2FaKR5WdZseMVvEJzRsAr5cnw9hXZznZWR1rnzx1T8QmTagdeUW3itcyaePSnp2SKDYiis",
  "key38": "4L6hJU2aCJ1DYhsx8pR2gqSY3ySHAPqXKxMJbFJPnz9JfQke7cmBab2bfeT3a7btDJux9dTYcDGYA4e1jrHHhwRi",
  "key39": "58phAA7J9HoSc9L6nyWEHMPGBFSMuaXojA6TXkydgmTJZm9vbXjbfTxfnzu5anmAzx3dmASZztVakRVMLyP25SUA",
  "key40": "4pTyraVZ2BAfcZyLCTWb8CxmwDB8yve6MenZsdopUXSJj4swe5CSPzKzqtgRpPESmiJzXZPgGa14xvtdJkiGGyty",
  "key41": "3s774rNKQGwxEptiJVqpC9pXbQiNuSS3pTUM9s9XBdFCKMkANMkmbYkU8u1GsdfhaXVVqPh8hyJm92vHms8bVG8Y",
  "key42": "22mmB1mySnAWnhR6qccRx71U5zKgy6ckUkRWdKLD4C7Xjq22BfGBP6E14weMsWAZiE3rpyoB97UqMCXsUCkBvWPi",
  "key43": "5z5z9JZBFFug5FjtHrJeYNjkXBhtq3L9XketDCKsUfeyMCMrVYeqy8JWX7ENa69t1MQmWyDZbzPMBCfpmgLzny1t",
  "key44": "DwP5zuTjWv4ePYwYurPZ8Xki1tYvS5BSjXXtPUbxbUZcp9XEL8ubggJ7kF3GaRwrQLuhpGi58k7idPzVsMnTzGx",
  "key45": "2n6v8waSfun3XU3ZUuRjQCSsNxXmEJwcY5vAWZnVfPGUbnq3ch5wH9HuYV9Ax1M2ZgBb7PtPx7PfcjUXAt6KwjrS"
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
