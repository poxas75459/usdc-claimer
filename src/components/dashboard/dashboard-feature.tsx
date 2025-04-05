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
    "5xH6JhttheeFR3VYJmXcE1FvuqSHg8eB53uLhQH7mnEZ3kqsWVx7Jmg1ozwFL4bEVDWTV5LHoS7XoU8b618aU81z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ttJQWdFBK2XTxRVYwBcgpNFSf9tPEdBE59F349bLQhR8jb4WLhKtj6kWxnN1HWXSSbqiFEn7N2xgE8jvd2GKKju",
  "key1": "2CQ92rQXm3ukYEjd6Em6XGzGrnuL24qSaw1AjBRurKBsBEYEx4cdTrLGoGvA8chQoz3EXLBdNkgjgRh7RQzZ7As7",
  "key2": "pgMn5tpgtF6rJXftuaspMv6RwCopJW3K1mY5bWbPYuT2fCoyxSgNCe4eLjR5vCx9fyfe8TPKSd1zo7hDBiEuyFy",
  "key3": "5dQDBMZCmadvYsXridAzDFLK3SjNKrgSD6xTcEGbSrTueiKRvhUjHAtnASRUDaktvTAU4RuTvu3Y3Qe8STtr74cf",
  "key4": "4p6xED7GUCGAN5vTiP3zEP53c7m2ZFE6BEtPDwc5oDUwJPHu48aXMMT8Z4cETNtWkzBaMUdNb2jg1Dc8cLs6uVLJ",
  "key5": "49FYwQi94gVWsZaZfDgy5sMMVHSytQbTnArEGrsYYfSuq4EwnweCHbNyu9ZAMXpb78e1T8zLzYFntF7SwnM7VXUL",
  "key6": "4vnvJYpsWza8f7quzyBgmo4exMad4rP1An5F4tkDis3sViYZnM38QYBdfQ1hnxqx5pcoQLQntdn2BWumgCHzb4VE",
  "key7": "4bzrDPZ9zviBVmcFJv2paALaFUso6y9gBB8ZeeeVEx347znQCdmCeKC8ckJ2apzmpTWXd8LBACrbcN89hdJ3YpHv",
  "key8": "2jw2ELjW2bH4ZGDAWUz4gPKYBxLd7bUcPsMTA2NSqDnT8aJBQTqrvuCEez7XxvAsYQZSmw7KYG2zE639ojDKwNeL",
  "key9": "kTSa6rhpNVa5efixAPA5MusAagj4MnL5wuvV3F22wbs5TDjZNWQZdHqDxB7J1TGJYZYkcxn29hEiZpTf8cvpGxU",
  "key10": "4AYRTpP4kTAn5nTQoz9ThnSRrX7B7KzVqCdfJfoEWbNzN9s4CSPWFh7nGXCDnuGtWRP31rD5k24GSruGp6fv3Kdc",
  "key11": "4LpapVzv2EiWJtXLMtaGt9DFPHyDEUqMdNFrEPxkbnz4VTV6kJh64m75caiWDVwp3bUuFxAkFkGTLksiPYrjdB11",
  "key12": "2m9wcQ6kJs7SCZnprv22iexVcvQyvtVho5pgiTRJvw1E2KeqhcufKvTZi3m5PxQaA217Uj7HdmrJ9T29mLLyXby1",
  "key13": "3GXZePKK8YvGHy8nYVf71ZSV41F6adaSq4AaomcoSZHoxp6Rg4W7pJWt5ox5Aneb3zm4gA93k6r3h7CZ6rcPwn9Q",
  "key14": "21WSDSeWA9uPs85ove3TTSVpBq3LJxeV9mkZ2pKGvwZVx67NEwizBVSK5jsLJ6WRbG7sZGbfEKeuupQxMc1e1Fne",
  "key15": "4YnKwEh4J6SKVSEbptcsyK4m4uX9YoZFPRU6BSLJgPcTjTN5AJGyWmmpmAHmKCZAjwr6hWRgins6ksbhgsYEMpYg",
  "key16": "2vtGbEB2jUw6n6ocydLeSRLYFtCpXCiGns87Spm7rTv46YH22GTwKvUtf7czJPexU85DWUhpaMHXFZnhGmazJhyA",
  "key17": "3LL9jzU1KfJqw4jLcYiNpHAzTzFL8zceq6oGcNMFWR7m6TKpBrzRtScoYiaAKcH53N8J3Y8ppdeoE2WokhPnnTBL",
  "key18": "66z38Kv7Sf1xT8HUpjaYH3634ekkRMurfJ8HqPfeaSDVjBLQeAtUAGb86bd5BaSzSPz8ZhqsNzqoYhfcm7RahaXE",
  "key19": "39gw9MWKk95fcMDitBX4CFe8weQyPX7iScBAQjzeeBveetQL1L2f8dVyYQZds2A2gHNijnZEWdzcndccz7Lbv31j",
  "key20": "4DkErmfkiDAMGZor9CFnY9rerCAvb3Hgvs3zVcwBVT4u27psWoqPTrgZwqbxCEQFxnYNjgVpKoUBCvjQaxgkJ9sz",
  "key21": "ndyveMGtH1GXUBNyWHeN8ZxyN4QMRL8MZdpr2urcczw4Nro5z76W7pi6kEx6wuP5vSipoDPzpQ39TsYRWye1UcR",
  "key22": "5mXu1urjLV2MhcqdBZUArR9iBqXurdRCBLQe4MbH2sCh8aCc7oVbeeXVNQNg4YtTVMHM2mBvphMv4oqxcoHP2Lcv",
  "key23": "4ogDHa6Yb7jHUt7ZtxtxSdAf5ncLP9Q3naBpsAciVUEyGLdjWPRunEoaHpcthKSxLXhgZBbULFLVUGxMDjbboGcv",
  "key24": "CLVoMe4aLX9pTwYZSLDi6u2wVoARo7aTKAwwrYbksYoo8AdDaP3NxezKiDACHLx9oFtqVEALRFbktaTcNDyaTNG"
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
