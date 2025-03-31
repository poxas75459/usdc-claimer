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
    "2LZtUyVEDth5XN8V67zZfbMPUhEp28QeJ31cAhuKNueL5bxNwer1UjJ8suJnXq8XGgnfjdQkcBkmjdkDWCnQcA8k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24zZPz5MgubNZu44xeTB3kjZzChKYHfs38bWL5wBPAo3bvjaoNdktwdoCtY3YrpBUbmGTbeKwn8XEGNPSqPeUaF8",
  "key1": "46T747cc6rYXmYmraoRiR4TYKPm7QSsvHYq27XfucrpdkDqowWrxzFabMT83iGwz9tzdJJ4MBidBa58CsZvSuYq9",
  "key2": "4AusVW1oSMXcANhKvVirmfXfhtC8pFHZvVQcya3XaZ6K16BX2dRNPoW4awQ1hNMgV9j3bWjnwDTcGN3docPgQgZr",
  "key3": "22NXc5BPgtAhDena3BzVXpvrBaDdN3cJAPYtDzS7yyDYEqR1bG8YXaLPAheRCJiCnp3wfQZWZ1etEgca3YVMGYsQ",
  "key4": "5rtzL7Uq1SHiBYCJJ4VdB5XzMDBxqiN3fao4Ps2gWjgPkfnPUXEvRWqpzVYR7BG81nsxqnGDWk8t8vSrrWaXj2F1",
  "key5": "5Apma97vTiyM5D72QWhAyfLQX4jyuzhwrW26uFpNFDr5rFEyaRRu7VGf9z71ge8MXEEAmjZmb4Dho32Vx5sBiGRD",
  "key6": "611MVdVfuq315JBKXarswwZ46STai4trZpex9MiSrGoMRtbzYJ6CAjtbewFtphuCteUDhjMJmbFgHm3EDEDij13s",
  "key7": "vgYtSvZQoEHrPyn53dfcVFNjcsqzrGA5PZ7uMhS6x9s2kK1g4wytNLGzEEX41yAwWQsDGWiLkvhBD6zDNos7Nns",
  "key8": "2j1N9hZh5P3WjXCywA3mR3Rb4YogXPyV2jFUNsXV5ciMvbBLLSSrMX4w5m8jmZWHCUQVwLTWqb1ag7uuEeU9Gcys",
  "key9": "FpHHc4wAfvoBzSFhb7xEKnNFG6rPd3hBfxLwAFPTMp19bkzrME8DEozdNNVoBfc4345KGU6eg1fezHAyZHJSUKh",
  "key10": "3nQ2WBtn4r8jdHw3TQYcWLjx5fdcwPGqVi8xqiD6P7pRtTgkUksMJmhyexQTbfGdSqMb48rUpBaeM8PJhzmDoupo",
  "key11": "3hhPBgGps3NpXVqCi5LYnCt7PRixtFok8RGP2n6CdHN8TfR3yqEdrAjvhZodZS4pz58RhRT2WZymT4nF59w5xvMt",
  "key12": "27vhL1C5vxnq1xiySWq6EVuQXDK9WJAwvf3ipPAEBz9DeR2kurgoTJBRujhddK21a2CxCuRQjG3ppaQgpqTstsac",
  "key13": "5HYg9tsfhftz9p4XPb1sRezWkUAuSRTAik3qNpC5tcn9d9NgWsQAA5VEvsdCpLT3fRLLzx4hjr1nk54D47DrNFTn",
  "key14": "2oek22Pv3QKJFFqQ6yfkEguX3ABXzj4VuHZgL8h6tHEXRrn9uv8CUntizbYMBB7sDvXwn4ekxHh1Xj4gqnJZ4ntc",
  "key15": "5czM9sTR87H9UeNHMwWrWriuSKxxiFUnTp46wTQ6JWHCyQuU4AjS6p9VzEKd93y7huxZiYmncyyoGfQmCk6xxFjB",
  "key16": "4qqi599u27F1aYvVg8brtxhrE2HQK5urGa1CfftkYRt91CRUwQvdz9JxNXnR52H5TtSU6MNLdhJo3QqBPpc1Csi7",
  "key17": "rmaTKJ4bqHZ4rtooUdSYnbiTdbbXr5Re4qrnmLhRUAvnR8coyZn9H4mhnnyaHcbehvze9RLxGye6LPr3DjJfZyS",
  "key18": "5RnBJ6gXTqHoSmmjQ7HbBcc4RyNGN41eNR1imJXhBbJZLYarxkAkcjJByJsK1cCHpg9HibbKkc6hPAkmbYGAh1tU",
  "key19": "31oQ3wvfj8W19zrBYj6WtHTJ37aucFtSEXJKxPuoV8yJ3r1EXEejuza6tfDfvwYUang179Yf7gkpDYuUf9LsUmNW",
  "key20": "sG9fJCtnKD5taaY4xGhjUq3vsVcKoPBJoZfEpBu12Q4SEZPK58wYL1PHrXexKYegCsCKESoTM6G2KBVbxThAk6x",
  "key21": "2FTTccMUQ2uRUKA4PYqAonzDJr5MRdJr8UcNiCugF4cXD8R5L3LCoXrCP9mm1sZjov9Z2wfQwpLZzW36deuK85Wc",
  "key22": "4xcgfAagJKp7neyKReRKqc9DU8moaUHR6hEcC6AjHP4mEtBSp92BExRJ4Q7DmAcA8tiVE2u8JNsrPbV24brbGZh7",
  "key23": "5waofKxgG8xqiY6g7HLRcAozTp2m9cFQPxxSG7Pw7w2sbdZWKdBZBb56axzGQuYwe2p3E4a7S1rxqM3shKt4uNH9",
  "key24": "FFRKY3DCPzo6y45W6TdkUcpVfA3PAx8fHAjQL7D1QAxZSPYhBY7pnwJMwUXvNhxVjzm4rCHejKSaEcPLn1MDLTb",
  "key25": "2RJwi6Bjjy3TSPTdazHAGcR5g7129qHEtrgTNku7HEk5X6MtiDUq8ePUvTsJzF5LJaWu7WY6ShEzWa2D6jrCeTC8",
  "key26": "3Qs5oxieAiaDcrgnvAmefaNrjkiWG9Z5sc6Pn69UaqmLDVFnqnPwYFPsjxPX4upA1iviUTLd6JJTyYPmZhi8sqPq",
  "key27": "49X6FwNBLpaFgaAkFQUQgF1mUP3FpTqFNZSgRiLQr5UbUYWGbaRY8o7cJLefKxe1jJAN7NmPAQkPqDDxm9186ptZ",
  "key28": "3SBL7HAtVMSMwqHiJt2XTeN319uTgSf7y4ndVcPTcQ2gNMPMhanJzGjT9RibnoDphuAFBeZcu5m3jbygmYxq3YXh",
  "key29": "2XeJtWipe4SMNFDGz4kdfbuqVZ2AXKfjxG2Jyv55UVzZx6LkEcQfW1ByV8qTVfhxJ2xA81TecNn6cZVgM5Wy2QJ9",
  "key30": "4jZKnCA7VBmSQ8RwSdbyobTVik2bMsNRuRRTWNynNqHY1CEneN2k8ws7i6qREFZpj1Wmqht2jFkkviZh7pRQukcr",
  "key31": "aMAYj5nkE6MN39qX8trbHRkuMeyddbHfyCzeoRq6dzYXMmJneMnufEmggKYx4YnWBJL5WnZE3N6ejGGcgbysruq",
  "key32": "4JBGp5cutfadt3ZerHS2XuAp7gWo6BLX3g53Nt5rKNbmqK8kgbqZeVcijDZ6DfbYUUgkhmBAB13nvBE3v25dw1M7",
  "key33": "4D1HaY9ebZ37NJrySSTquhDyVjW3MQE3BGQ2QqksNb1yD6UMEDMXc5SEaq5w3z9ejaVmkA9vxM1AmTraqeqnTVkd",
  "key34": "2dkpxyKFCRyfi7SWV7nZqXqreXrZgay36ZHvdn4qpHHU1dvGFLWHHyBWc7jsrQpsmH4Uq6DxzgcbJTVJJ813EkjZ",
  "key35": "4AKUP8qufSo1PK1eVDPT38wNxF7sv1afvU2HU4CUyMhhRaLVvmmD6a7GdbCR9GBcVALNv8gD9u2MMCuMrWCmdS9j",
  "key36": "HoDgkxbMx6R12nC6A7fXPz4Hx8f5GHDSYH7cbPCfeEU6htVWGXuvE8m9B3eWf9EC4LmRDGVnbCPx37EeERxSPpM",
  "key37": "5hdJ4pn5hDYqrSKANVrgCmYo8MRDHMEVyXP1aKEEECN3deKgdy9WWKqtKeRdRdVeP6e2TRbNWfgd1qDNEniwr8m2",
  "key38": "5rhN1DRAA1t2JK838L5hdfRgVFZFVyfi1urrfNKkRS429QyUqZCu1NKuv9sGEfJJMoVDWMb8UWWc53SQ6DB4HRom",
  "key39": "24iH1Bhebg2NMCKxRv5Z9joHptyxEKSeQiDsRZv3QJyb8biBTaUh9cqeTrneocWjbViQ7eBLN1pKTY4asmbdSD5p",
  "key40": "4tVZto3dmL1zTbZh1dcTJNuaUtMqEuNb3cnWBioNF3V4Ks84o2M4efKXB7FE8qqQk7zH6PBRdyYwhpTXyUmDcWJn",
  "key41": "kTBSVvEZi99akEgaom9iCzx2S5kqq7DRVKDuQTnZpGxYc78jZoQDyaGMDTog3fW2xywLA3iNv2XjnEEVozTaqTH",
  "key42": "2rD8q6e8P6m5b82YkfLE6wPGZNdXY4cD2uVZLmDHWLMeuGqwvrtp8dUoY3R85WXopkvxKP8GJotjLUJqmYna3ry9"
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
