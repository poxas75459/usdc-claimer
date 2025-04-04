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
    "5U7S3X6nkrKpKVxWv8bDLr7TmZRd671NpHhbqt3UWYDMKUDAStJWu4HWzbXgcGdGDWdcnQJQiya6TY5WLzConaUQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LBP3j4PXNMXc8wWzk1LseeZzRd6XurJ6YzdRtsF8Gf32EuNr1kkujyRLBQzdG3nVXWhgEV4j6PvAXERRMu7o1mC",
  "key1": "3rSK6sspL7e19exGc9fcVqVDehvT94RaCFkCaohGruSiLet4mPyuQ9257LjDMUhZkGQk1vnGterqdV3bUXMMqznE",
  "key2": "2CRijwrqZNCm3bpgmrHy5ULtiVKTqfShjYcZWNMJfH5paVB3Bm2UuF8DyeJR4npNQiXNaiUQiNnCtKLULsGnd5k9",
  "key3": "xWnxZUJ8KEYtfjq7o93T5uXZsJdzBygikqHxGFinDhbM42RJ39f7iuGbgGtjsEEbXi3W9MWKjtncNme28W7NrK2",
  "key4": "244ggA15YVrXpJ9PALmNBTSdA8k1xA5qFs6z1FBTFqQjVraUcevqo9BCLq4A5yD6EYTyeXkFSPz1WC3WyQu2tKyA",
  "key5": "3xBFnvz6V52TSVksNYDnZDxLiz22qo2PyvNH9KMsGipCDKF4xnCCbXYh4XMBRxDHmevKUHvVgeeFZhXXTUsXBCQt",
  "key6": "2Fjy8kUwQC8UHUmrFb1XW7eRMfZw4jBgfN8set35PyELGmE7g6ha9BjhA1mKGEzMHVRmVN42QJshAdGXnjZDMrxR",
  "key7": "2G7FrxXDSGK7T3FYaTqBp6j9MWNRFy6gXJTJe4Be3bFTatHjTBkw4ZCSxbXG8gt6vH5J1tW8MHkhruQSk1eH91Hs",
  "key8": "4XHwvSwTYRuDHLUfyeVKKoNtyVKH9N5HLiYskb3EJoSNuoqQWhATZ3pbBTnCVXTfBojqRLR92crnJ3jBofHrSSjw",
  "key9": "2vbDERauRRjFjNqz4V4Vs74gqn2Sg3uTBUWgv2EYCAVFrKg7T93rLdKhPgvR2MxgfYasLexaUBYiXftcWMWBc9Mb",
  "key10": "4Z9VfDEqb5sZ874z5QYsJrTmyAGKNdr16Be1dP9jhP6QzyezReH8gnx8XQWC2je7BZWF1thCpvKkVNDwqLSNUs1a",
  "key11": "34iEwYwSPox1XrSXUK2DQbqj5cvZwKFx1HDLBqqfuY6cfdWeuWihR99PDwggVdgbBA5irmSQWJ43W5deHzdbcCYd",
  "key12": "67Jq4z2di3iiDBVTASTa4y2My5cRU7ZL1oGcCVyUEV8hUUxYG7ZyHkMLu5Qy24dXQDNHvXa8YYKpvCqoW2xGoR4A",
  "key13": "5VWCYhARsGA74bCeksQBMJ8Vgt5mKH1jBsRVd75u1Br41F2MAJB18tivHEHin1cvTmz2a9LygDApv8rAwFYnG1Nb",
  "key14": "evjR3q9VwNjSE79HDo95yuaFHTn5uveCntX7e5QWEDwJ3DHKgBLn1hAt8xgCGS58hCZAztn6GTxC3svQAudhu6m",
  "key15": "5HC1oik499fRsEYkxsBBEKSG66FX7FcZUZnmk6V5GAgZub5Ymu3yTs1bGAXBhLSUVFN6smrwyDuGRSZzBm87Fdw7",
  "key16": "5kVqjb3jUfBVtRkE5PgLQhe4uHfELmDtwaAExPdebHK8T4AwU3njHF6CcHeMVySoEFLHuHZW9wnfceZLvKkK6iMN",
  "key17": "2V5Wb4FT4wdvSuo6t9M2mtPaxZh5HeXNr24cmUU4R8sRJJEbxKvbSPKZEUbDLAETHN4Ncwi89UPQcxXMM8XesdhR",
  "key18": "jJ2uteVcGLb8vdB6WB4W2TySHvswFYmMuAdoJWP86n5RByrZdHw9Xs7rHxEgXDqmXxsFvGbXyucaBHeYtibpahV",
  "key19": "6KPtU5W3kPZUmP9h4yS8jyBGPSZdJPJ1mXNAoUs95KemdGuiK8oVS5eDjsXTrj5jTcss1Dju3EvwsNxZ2UVsgtj",
  "key20": "VuzyHmoTJBew3KQUQDBhmMdjCmjFNwXAaU8hBPidYkRQ4Z96mEMej4AH5TUrzQWf6BKXwW41X2H2bMWty7uYQY9",
  "key21": "3GNwdeT7s3PHdfEPQL3iZgKAcKEMFkXaQhYNS4yAmqBCdwMNR9WU6VhqvkBHy5mDcHKzJbnewDYry6cPtpoBhxbF",
  "key22": "5GUT9vmUDktAdwbvdr48eZam1skg7LfbJZ8WDBngcevpYPzsiooaQ9VoGa6NDzdNJQQqrqPPrktqUkScGdmirHVp",
  "key23": "3RywyZt65tVpjQyhgXHixmUxS4jLxBr1xSEfrTK23C6HTWHDq4BwxzAXhyKaugMkHiSNKCh4zQqxriJRA8rb7giw",
  "key24": "w9t7mvCGFqoFdfL5pDcUSDubRT4tf4J99hDo24c3fyaZjDpfwnHvGfjZyaGmKbtLuvMuGtswhKi6ouGZbSqZmug",
  "key25": "5hAv6R1h2uUxYkSoFikQpWTpGWk22EuYRMkCP72Z3CeLqz9w4LcGbw9pyAH1SQ7rP27TufDSPwdE9hoxSvZdJaTX",
  "key26": "44cmxGU2Yixyhc99rXuwuZSjhzsZC6QEie5xDxVPgWLjUiHweHL33UsvxmUaWikiD29FduYJEPM1wpyR7W6jLTfw",
  "key27": "4BRxuq3vfFC7GZVtPYWqnKrq7KNQRcKBsuGP4SjntTB1G9DekCuAsD2NEYYKzWL41c6E3zh4JLxNbsgoXJqS3WDx",
  "key28": "5ybEUZ243AubosUE1hKn2kTmVNXYvUDeYEqzGuUUiVMULSCik9ze6UfccveMMgjw81Ya9VXqiTjJFQLm83UGzjQh",
  "key29": "TdmMxVN24Nt6vYfNGc7Dt3nVeedYzHrKR9W5YRx1hxuE2Fyh7M3hdXeAkE5WizTrCz7ER7MvU1JHhvjG5HgvrnX",
  "key30": "4Y5DVQXwyVHY35v1BskoqUfFvtHJFZELGPqUSYJ5AE9ZFiaApuRADqCBGN82n5hrtLjdjfmVvjWKpfAdmrhsHS64",
  "key31": "b66wwmguRKya2MqkjCpHRkA1NZxjESQKjJjjmuqV5u1iHTMWjFiDvyux8QbyTqSjq7VnrjYrD1jg22W6A2voirN",
  "key32": "3TvwDt8Ugr7TUTTEwz63YpaoyJyvQqpURbKqMyikuLBKJihjAhtNKiAWWhgbRmDrybcpHSPdHJRvKXJa1Cs9RPzW",
  "key33": "4YUmqjNf6rPsSRuXs6DRcRdDhBtUKvijvysUyyEWLcnRvrxRQ1hCUZbE7wyryo8waAYnhdA2sr1xqsQK7rqKGx3Q",
  "key34": "67nUqvadon9GZABnFNMJajDh2jkxrUbjc6Wb1kry9dLHRmpsqYveooEBxz19tbbfmLhgGU7hdSUgDYWtptH9qtu9",
  "key35": "41Qm96UTDL5nAcLcVTzwXCK3jYWUxVJtHBHJFBQxiyQY7C7VovnEreU69MhL7PdrvYKqMkP8Br84Dvhpy4p7xTgD",
  "key36": "osazbwLA9iTS3sAKhhDj3Bzn3jkzd8ZqzS48DZz48sz85xFUSpegfZTU6jKM5ZBsWW2XeeuHqYbwtZCrLwqismh",
  "key37": "6pNZY6szmxfED5umtnhNNWcfPZp8LE3xZeXNeCDMf5HHiD42rzGfQpfEH4KFUYBmVkfxTKXwhkDfTJwHNsPAu4R",
  "key38": "zh532aGuWp6ri1mv4jG63aDFAUtu6r4DESsXeaJwJYdBSuMzWwAD9cxPTom6zfvZaegBK2pKhmC1UNhSL3GfAe5",
  "key39": "eLUDKiqiyv7BTs5cHfqeiPAykuedZ9bEPDHfsEn2ovJmzbyv1YmfSAtdUWoa4os4tGe4b8HL7XqKKJTihzRCPBP",
  "key40": "5g1B5fc2CqZmS7QTaZCznZ2UNnojUqbGy7oWYPygxyzCVVeVePsY6w1Pb9BnDT9azp6k2Jo7EnEgmpbC7AeKJJhY",
  "key41": "4QJRfHfkkxtqyZ4vcrYbfr6TkJA1Av1ZctsiZPNHah8LnAmFUTcZQTD15MiajNdkR55K4uwcpeyYWaebrv8oMcFK",
  "key42": "5iPTyHsBdKDXNXKMRJ51JEGd2cCaXTQ3JBjrCzd2PBMFbLdhbtj2wurkrD71XV7J259Z1ae1k25LLmKu7fPH84GP",
  "key43": "2N8ehNbib9qKjMPGY7iuVEV4bxD1tHe5FoeVgsBpMN8s67P1V8dMTFDmE8bRs5cGBH8dhWYf9CqGqrvYxjbZgEXC",
  "key44": "2JTEBeXKtPYXWr3i1KSpxGDqAXf8bAVZvi79Vsfq3vx5VGPsM66Mm9WvLAZFQBQKfk3qHGydomeVtNDPdRnqHFpu",
  "key45": "52V7uHP61U6jN1SnYjZq6HYF8RLvVxjF2vz7s71MmdekwF7SZBc1DtiqxRcLhQk4ZfeZQ7tiVLLqKqGemEnNHGYg",
  "key46": "4Fcc4aJsw36HpymVX8er58HxAuYMj2JKKQmWELzpHWjjeucuku8tcJHV7rWv3HPX95WRA3VYXmvmvzdZquVvncu6"
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
