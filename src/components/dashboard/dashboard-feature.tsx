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
    "5k9d4wLU6oxZtpw4jGnLoBFF1zNJNdbAV58FWoyc6WZ7Tb828P8PCSrGG2AUQQyeYFUFHHxf9gNKGz6jhdC6MwMD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33TENSZWG3kwkMJSrq8tDyoJ7Dk2ZA16oSzePFAQpn7SXFo4ExYyymh2KTVpbHBK43N6U2YbCBsxrq3SN8SE4V57",
  "key1": "2LJpmbCdGXLrNBM7Gq1P22ukL9qamu4KEGzwxBdmrtNA9U8iVCWPFcpfJ3KfwRXt52hU8ixsckcsCN8aLbrAv7jw",
  "key2": "5xaP3aWQm6x4btpN1h7e7wQF2jFEWKijQiAMMLXcqbJhbtmyF5LFsezeXXvX3HnTNUNok74sb4khgbFhVFatxxCj",
  "key3": "2XqBbBSoksqQMX4e9EsfvFRHCpA1TPZUtknQjvMdzb3ih44T1eD2LjVKA8izg8qEwggsosXMUD38ghKiBw3h7umR",
  "key4": "UdsHr9jnUuhjHLoijCbM7P3NRCwr7ubK2hVuHamK9hty96oyHhbxLYT5aN231VD8N1kTWyEu4N4STGCXgTUxyHW",
  "key5": "25bt3ZDg882BvjPac121Sd3FPv8kcHJ8yxaBecxUuQUYHDiBAduvGUuSXm4auSor8QR1hZmRg5eNyc4nKDQqTerY",
  "key6": "2jMqu9m695jTxScHY7B2cQAxcqU62GYTLGUXWYFq7psPGMux2iWkHafsdSimF6wbDdC66BaE7vRiTRbgXD6QYPVY",
  "key7": "3vk5nB5NK1FX2Ei5grZkPTRt3a9SaTqhu697ZZMMvpTrjZL1ipSJyG6jpH36jyD3Xpi1Lx1Z2cjJjny8Ck5BrezS",
  "key8": "5ezL3RWcN3PtPFtpRskBt5LpZDWg8wAGEQBNNRwLh8kRpFa1zmi7L69tmRg4aWHMgL7VBN5UtYEhCeNDwt3j36w",
  "key9": "3xWytpvc7Nae64EvyV6pwtZhDchXzFnHufCUdzBW6jTxvJkqqJsxNCkhnbV2jKN1no5BLPwGLTYMBz9zvCPmjSmT",
  "key10": "3JQHMKarcpb4z2Bzhw48xJfSKCYMUUxLpxfHvV8KjTBj6eLMH3WVDX3kcngK969akaHoWrSWPyu7bLutsV4QR1Kr",
  "key11": "4oTejFMutU4U226yZWgsvscc6etgHAvX8fKYjpPqUA17RKvXDqJbapET56v28DcJfGsBTXtcp5FDVvcmrwBVdZ2j",
  "key12": "3aYcWgb3cQhi3CTJZfkgKZBSqL1opV78H2txDF3RBKGD7r5xS9nyjs16zVgQZFAX9QbbwK2Tgg388Xs4bgkoKSjk",
  "key13": "5NVCH7aTk1GaA3CLhxyiZCJW54vQLicQUshj2pCd5LS2KaTmceXCLP1hMSrQcavAQDt888mJLg4UUQLQnERUUxPW",
  "key14": "4UGMNiLpjGh7FNT7YorJhvPgEHH1kv8t8mY88tQVbBtHkrVPiEi4Aj7YvLHKUzCwqLrxuLS44TQfdeJYqKyrFjP5",
  "key15": "ndHtuecDSpS7gjJmaKFFz9NLx8VrMwhRj9ed2LLUGPCGb8Aov9c7NFGEsNcf3N1ePVmT42t1nJMyLtnL8mBeHAR",
  "key16": "FRPwYLHbCrc1b4237gz2Cj4ZL1UpwPdFFAySxL8SAcp3GJGdrHSevVZaohEXDCbeDLQomFH34ceTddfxARZpx4P",
  "key17": "Rm3TqQvULnd8WJzmWsLnVJJeX54tBCwxheY6iSAdvTaSt2BPvMKvS6Rd9zMEYP49UEZbe37EBKBJeayi1QgjboV",
  "key18": "3QWxnYmbR7sx3UjhPQsuUa8rAshYTwd4yY9LFX9yELEm1beboqQwC428ri9QckoLVBDRmE6xgRXUNmEEsgFHMw5K",
  "key19": "2LHKyWVX2KrHMzJsEkcHMsDWUX85LyAYTH387pXM83LWmwMoARJRKWNorndUjF48fugBg4HRUi83UeKzd7FuG7DD",
  "key20": "5WSawxbap92E7BoKbSCVeRYc54Qsdpvcnwmr9b8KCvnCj9ZaojTkzSExEmgLsDbD4N9kfcNMAR5mL9ak7wBhr95n",
  "key21": "3PdqHygofoMvUkv2jFrThdA3qomufYPcjGDTyQiQc4hdvaXpHoEvTpetiZDLnVVAmjDc2XEbhSspt2Ki3Q1tyTKQ",
  "key22": "5qwwdWpygKmihNFwSrZs3vSCrsjsbfuPG7gd9R4NQeZxgtpwbfF7aREAi7N6x2dVP1u48kfAe65UF6cEM74kSfCj",
  "key23": "48kXGF54unHAtMrKVVokSq5ji9HNQmpNHZmEdpP788D1KggFQLqh4AwJXdZKdAXphGkdVjafAA5c4sMNdKohrvMT",
  "key24": "46dZ988GZn2UuUctowx1dJDuoLmYxL5vtMHdsLG5W9GRwhA1uweHfcWrShpdJvnNz5aADwaSs2F4g96K3ZbXYpQt",
  "key25": "81dNs4PY8gnRBrqLySQi1FH8NT8Njn2q1sjWmyZrqMLdE1AWNCxNdwRvFEQXhR23pDAK8gw49F7Uf3JoscKkYhe",
  "key26": "2EFrMJK5Ae8kf812vKwD4vRQBU2c4MNesY5N7mev1A96Mivg6sdxKAs7K5HwUvLrE2mzUrpLGT4GdjEF3LvP8vk9",
  "key27": "nnZG6GgcLhwMR7Uvtb2XejGPgG1D7esGxmz8FjucMBcS4HS6uAVuZk13CGaC1EUdrLHmuZVb4S3KVsYAbdWUy1B",
  "key28": "52BB2HP4u9XjAE1APmmRmtgszJZCXSSEWEEMzYSA4YQPnoZSbjcQSTzqCNs1BDkCMBBjRuDPYk6WArYaAddU9XQs",
  "key29": "DcUMQs6yuSgjVyWJZXk3A29ZwX8VmGD1sLrZCv5UwRviqyX87BZBX7mCC5Ki1ApRqYjW7YTFwm8x8pyzt8h2yiG",
  "key30": "4A5nmThaPdG9Fey3pJdqwg7RGG9X2VRfaUEUUyr8tYZEy1foRkXNWuBdGE2HahoSmc5Jz6RTDBFxHw9Hjw5gT7yp",
  "key31": "ntEYN2dwZMkRsZZQFxZH8oaBPGoBaNrRvJoPathSvv8xbQoqF8q2WjkjfKNSG7FyQGqjyX6owiWj13que8p18K9",
  "key32": "ctD2yrKjKoXf7WDd6pYe1atFY7DLQ5rmWka4CpCwKfFcc5DFxZPfPW6MK7WdtvgXLGYjV3TN5yN8SU8eyU9aVai",
  "key33": "5JvG51qD6ZmRX8aKxdSqLRvbR1vrurkNqv6rtRWQWgTQEcPR11BCvdZYVPaDN9ebQFQnfYgiD31oUge9MCrzDgqQ"
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
