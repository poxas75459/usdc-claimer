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
    "FbdqSgrna7fGPH1XKwckX4zpEcaoXMdWZxexQTPGWvBj983r3XYoEqNb3jpHjLqUmzXypCQ5UnC7KV9sSaxaF72"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fr4RYYvDS83YFjRev3p7dhYpj85xaesk1aNwAN4aj4V6fBWnZy5QPLvH2Trtt8o8vpPWMZB1Y7uVd156CqmQrBR",
  "key1": "2zDFcMjq8FeRy6jr4BL5UXhaizvDLKsLhtPGzsKBQEkYp5xYiHTTyj7m13ChxS9tRLnYmNe85zvBgkUk8sddV73i",
  "key2": "5yXF5Cf5PKD5VcnsK7oUTpYr8Luyd6cJw4yJc5sxJaZqDLXf4Lb6A8kTZkpMVrBuezec25Tpq2UsYQBLefSXAiGz",
  "key3": "2ab99Pso5ddjQqQBi6maPBa4QSbQz5EAdJvJfQAz4rsLUuRXsWNfPtdbivbPbkpJCP36adCZdma3hkdxqC3vyKQW",
  "key4": "KfTxTggET3LKmxRgv9rN1qjbHPehEaiLN4PxP4vtA9nMcmzowk6g54tW6VpsKM4un1wQKBSjQ5y4x16jc3RDKjr",
  "key5": "43KtF87SPvXRzRsDNxQeakTrYTAwso98yS6jXB8knoZw5vuC8jAfVKxLXMKaAvTMAhYTYb6df6BfBT1DfdUBdNPK",
  "key6": "2mSgzGzJn3TB9DT3KQ3ncN8RbrUm44kTAxS6qqnWkqToaPbSf8WEeSM8HSMMcBCKWX2nbTFvDpSjMHwsZPFEbAG5",
  "key7": "3g6hQwHXDMKp8ogUk8zydYfKrC8EQZQEzvZXaZNrCBQwp5rLRcAAfCMJ8xvMH2tzzc5kTzViWvcx5NMU9YfPqjHE",
  "key8": "4zypAGtx4vHK5q8fYpcytuxkVwmRWtZYCZCyUX8bBnpsXvy8BYpkmmXP83pEcDFiEcN26N1ks2eK21nkjDNn6wNN",
  "key9": "31FLUL3i2P15eu2DbsvzG2s8C7vXdbsuGPg9fJXRCgREffTy8eR7ebkY3ZL9YKte6CBBxCctWyTU1LRsc9QP1pU4",
  "key10": "4oYdCcASNfEw6wJQSypVcCGV3ENX6GBYwhaiu57VR6sEx4GTM4ZeBYbo9sXPoaAps2uyofyxcaBpNSRKgxoq6Nz1",
  "key11": "3WGcBRz1YXPUHB6rjwC8s9Be3YFrGrbqy8R98WiEaWvx9ftyQWx44MGedmUwKw1HP4G1D4HxD4gWZ12TotEfBgyu",
  "key12": "3k3VRnTQRgKQN59hy73DusMuo1c4M8vB7pX5wG81QqrDxxp6yiUqoZUx7Fjwngk1qdwVCia7YLuzMqv6XxwcCKjs",
  "key13": "3SVi4Am5qZNMXYNLXa4TAA4NJMJSaTmShKXHfbktFNuMfDGHkkP8NfhwwwuSJgoegNrmfgoEiUqknPNDqQtoZQmn",
  "key14": "4ApnDcjuabWGaSVFwWTrkAdqih5rWgugBy36UVP5xGfNauKL1WExiQfaFtoBNgfMreZ8Lnb5H3HibnxSpRVfN3Mt",
  "key15": "2xjkAJBGQJpAX84o1pzAAdghqZv6o8WvGWrbh3gnSbz8TCMq9QwsKFWfcmyPhWCCD1wxPNV9u6vBoacxd8YRzMxC",
  "key16": "4PGTYpuDKyBUuMLAFCU3tMQXMiPMuCRc6wo6cy8TAc1GovdXe2rDTaePSSLavFmLbTYbcDBQsqEdjCNuggok7nbN",
  "key17": "4QVq9WaneT4PcdG2JYc1HSYnmn5nN4ZmcG5R3szVMPWhT7KRP24UPqUbvP2yXT6cE7u2CHPsnT6dtefmMgDcNB24",
  "key18": "4nKmxdu2aNRg7vxJkHYMqQ5PhL5kHSgET3HMBhqPT7fpYftRctXXLpppeVcCdcXJvv8djBZcAShZwR9Qm8rGwrjd",
  "key19": "39djkSbqoWWmB8VPgknDuaQdSuo2WNMGqhdxhUpPA2gGE2MUDhiBesWmsiExDMh3ooET8gzm11m8FxbRrYXa4NCT",
  "key20": "3p1VdxibPxRPDLHpHL8tfU6CsbBJYc47touu8CbiohJaVbL4PM39BN1TjgDf9BebhF4J2JZwmX9kWybYD1nDbSjY",
  "key21": "5ppdfN4EVfTsLnomGEBWGNy7WijTUNprwNPVzVGRseYiUUwY39NxYXfjW6MPj7YxxiRHMK7seBwPnmqFCGtyBkbq",
  "key22": "29sxRhxQFyBTBqoPk8B5CjpgwifauJFvzmS2cidRUsqz8x8wq6rz6gfrtwaozWoNNFRnTfbFmrQyZadeULb9eVwq",
  "key23": "3QFnoSUo8SF4e6XNpYbfkTcstNK8njEMZ7pjG7Emd5q5fBZr1RXuySvJJbqLKZeGRxUzcKUwxEbZJCHcgcgsXic5",
  "key24": "xsn33FEDZKeEKR5iDfLZoqfHoDsnxFhTHQnoQchJh8jmRqUUynahe2vTBrPqDZMTYgyPZQ7xG4DBtSry1Yk5DVV",
  "key25": "36RehccFDTKd4Dq8chQDsrkt4641Ujt7sfQu1kY7B6i9jBpxF56qVckHEnpSXWAzELuYQLKy9AUZLKBTR9KVeSbL",
  "key26": "5RnDvSh5FKw84GnGjLSP7V7RRpZ3YhkSnhyobaFeFtredNj6a4KyQx6jzWm4M5D7SEjRw511xnD7pRGxnae8UYkg",
  "key27": "5wGTiikDPBLQcPWTULbiyMYEZbYhFpHQf6V1yeZ635ZAuGqqD2MST8JvJ7C7oi1Jud2GPm8BgPHrpzufHDtLbpp",
  "key28": "GurALbe1HamKdE2FWRZ7YXA3ZHy1tExut9svu4UZVemJyoaT6TzypV93sT9ofVKtRm8fJmJ3BF8mUqemjfqGLSQ",
  "key29": "5xZGPBZnGF7ULkJ57W14priURBh4yxjNKYphDVFQdPWHc1oA2eYjTCgb5M39QCofvg3NSspUUUQ6dQX9D8TACEUL",
  "key30": "57ckZmdcZKf9JqKQyV6HGWpEtvi2KUaGnFYaVMJE2LfMEgp3Yx5owssihCciMMLXwvgvzHWewrDKRqdyMduU8p2a",
  "key31": "2fkWXjsR3jQhQg7dLDxecFwmRNfczdnfu5QDNg2xKKfe8c8hMNXL9ESVBUCv2XT5gFdmSbw7Qo1d13wTEsMLUVPu",
  "key32": "aeGwtMXg3muAEwNNFaPXQr4Sg9vgQBP73tMGkrthjCAcoRDjL6FCenJPc9dPDosSbK3sKCunZrYmvQMSTpJzNU8",
  "key33": "3ybaJQtPVWvthL9U4Q6q1SAMBE5vHvV6KdfQakJkd435VoYkJjwbiJebnNDjNCJdeStJgpmf8JAZoWGe87iKES4z",
  "key34": "Zvcsh3gETXFvBDEc3tCHnMKL7zyVWAq1DkeVjJboqGwyKmqa8qGL77VJA2dDGcztCT7LanC6du1nqYeiinrHFR1",
  "key35": "eby9T3qJdHtYbHeREUaEc99MSuS6GuZ8kXc4i5DdajxfojdB3B26Hwve9nqEBKH1FySJXFooyMtGghezyaMbJ7N",
  "key36": "b5sKg8m7xionYtNowFJXMRCfqr5PDmVPmiPqUQ3JyoJi85VH5GyCzKKJeT1YyzmTyKbKA6p3rQZVBtgdA2E886B",
  "key37": "2vuSFUE2j9hWBmR7UD38rhWRjh8GLas26peGqZtGEFDBM9hd3NQwAHFXXiy8vjkmJFb77pbcawLtrMdYT4SAWLDf",
  "key38": "5YQJca3k1sePjXPxjZLw5tZikFT7AbtSDG9VoY2oU29qKf92MxaP4dhzYjSvM77LVM7fzeK4XgMHqePQHi1QxXqC",
  "key39": "5Fi8B7EJUcBGPva9GWCaYMrDKs17jwgCbgveQm2m1YeovQymZ6KCasxkwvYVUkndxrVeCNhJnXssdaqmZMs8rSjQ",
  "key40": "3yT6goaozUX8qSfBwpQS1RKDJDdk4HqhfURh63USirxqFu5A8fMdSTAxkemnZRGgT3oJ9ty3fSZ1sfgxSxV9tTgc",
  "key41": "4kZN627fZRoLE4ZUCmEBAFMhbozts664RJ1uAB1SFteYcNBPX967GJs9CS6e9Moes8KBgny7nVjGVLL4UcPi1Nhf",
  "key42": "wtDdCRdjPQoKW5bDN2wXuBS1FjGjjLH6jUaFPUGCgxkz5Wmt1gyNN5ZeJ3aETPmvmPQKpdYMJ2kwrRB5VJei8UP"
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
