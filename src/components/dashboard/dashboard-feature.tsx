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
    "3AVt82KoWLT2MzkSohMjMYCqivweGu1TnJK9tyGZiKdFwxo5X8C8fU4AQ1TzfysWQcDuiauPFCsjVpViVxvvQpER"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ySFavTBetkov58GxE7Dcyd8WYpizZpdH5AMEV2czZUmPHJDKQ8QJitHAA6t1KWiG46Bkyr2j3FU1NgDoH6wwcry",
  "key1": "L9iSp4tZNTNWTgHKdDBpaafJ4pvUMH9Ceu94XP5XMhJjaj5pGQENR13H3yf4wgfWq9TdPyMgS1PaQSEL1S8khY6",
  "key2": "4x841rebPyPPRh73y7h8oBum93nMgL6MEEWkPCAjUW19j1Cj9dvdZUer3E3E99FBLfBvvYrf43k3KD3DjWN5xk5H",
  "key3": "2MSexBCZjPhnvW6R9pisNvp6ZZs2dHPeHnPxP8RHNtSRXznJsyM2Hsfoege8kjwNS3vGANrBo1528dNNZYceBJ69",
  "key4": "3Vqo9DJ5YyKYrcpfVENE4FrKLjusTagiipMf1PJqYKXKHMZC1ZrFiso6dFvsBShmoCN8fXBQuzdnGGEGLM2K7KYn",
  "key5": "2LauKuJe7jBF43hdWMzVkjdZ5FfQy6qKUsfS6ho2EqidVzE8oegy6wuFLsWwEdj8RYR4811ER2UWVhtSV5K6HgGE",
  "key6": "2K95KPdnyPANsBV6xmyzZFF6eLUh1QoN2Gx9vPX6D8bgk71yrV5iEpX2iUYwzBKdXMFBeQq678A72dX2qM1zx1Qt",
  "key7": "5G6nP3A1KBPGTzQ6H1ePdqBVSPKgNwdTBgZiY71SfW6MhLMAGAV5uvWnrVKindjhYaLbKmntYjUWr9jGA8bjRYK1",
  "key8": "vnUm2qak6bc2tng5krraNJpdQBe2xr3rnTBdeNU6fBcF4H7RY6FY3f1QP3E5s2fnkVD5S5dA64jZHHw3kn5eXP1",
  "key9": "2vNJqDB4PpTkdD4hBmXwj62Bno84F9QNSUejJKty4xgDvjwNsWc4PZNEY9iTYjRpHnB7YKSXnQTKLcRJKFguufzt",
  "key10": "39TnZdCh5pe9BEgq7XDFVP5ryNGp86s6vfHLNH45VRAujHELcpGLMT1P4x37cmfDRhHfzkQB9PoUDRPGFeVGR9uC",
  "key11": "37u1gyqwuzfBKdESt8jR4KRH9CuqR9UAdXVvyv8YaHQaLqLbu8gnekU6TuNpSXzT8kufARi64sPiwBx8R7fVtr7s",
  "key12": "Y8zQb6NqaCaYHwFpGKkWfTsxZ8NBrPyxbnz8EPWZyvMCNFyf1qr8UX8c3B7EUooDnj5tfp8feoxRG2cH6EPirEK",
  "key13": "QNKgBvfi2u2UuJU9mm1TbbYtjX1aatiK8LQEGSWVf2oAbf6zizgndoctgaUEZe9fP9wRGVfPuaChPtSU8GmmufU",
  "key14": "4Krj4SwJRhGhmHx2qaZjxtDqh9wZoxPskzYMTWupNgSdapMCRmcNt1BveEjgD4tmMHY5NALZs1GznN85YL7fNPRi",
  "key15": "NVu3efwdbFayCXfuSSpyC6Fs6fTnP14EMu3AYGG676ZErZmGygc532BdvXiTDuAtk4MT6S8wpq8JvKUTfGmYVNZ",
  "key16": "35Jps6jAvp7CRqjWN4DsdBkN5ajWjxQyxsv7WtGzPUatz8tjTM7seBRbhxbh4s7hmUhicoQzdVPn78SnxHWoffLv",
  "key17": "rSrcF68aPZ21KwVQHiyx5p6JTaeX9Snp21YcLg7fDr4UEPGmWA62EFuGb5DamGwU59JXTv76enCA4tBUSgQEnjf",
  "key18": "SCBmeAa6XEQHbyiqRGNkKRCkgCEkj7xd8ySexFiDHt4kipJcYZ6tY14k2vVYCngdqvyaFt3pknYj2uHoX14vywe",
  "key19": "4oZQ2tMnPWkfDv8qVagYQfk39rYwJNMEJC1rkYXQCppJsieTJPCdZtqzyS7Jc5PuzCPQXU2oo8jLiM5g6jCpsPUn",
  "key20": "5wFXvUeRpBNv2j9o4idWquVZjVhTPTsJP1FeVQ6Ftt4pYijgUu1Eh8CY5z98fexkBt3JyUsGk1oLWd6SpA5va14M",
  "key21": "4L7rkEemN5w2vo84eA75ReT5AeWx9rhADkvC3fVNWjPX7eAF9ReYxSJeMGxxmVs7JiH4iYw9nA9c9ZpXUKXDVxRF",
  "key22": "2TQax9hExZ8cMN9JmFu2eMkvK3s2C6NmvdETJ3brYxsogq8xQF6hj4WNpcEg2YxP2gWRh9yWUCFYLd384rEp5G3F",
  "key23": "4BwnW27GrMmzzENzi11NsWuHg3kDpziWrh1PTfH8vnyQ4eGSkeC7PbCeroa7iJCaEs9xb7kcuc9ScJXtRBPmeffV",
  "key24": "3izLSRmZ3o6AwEqEQCmZ1T2r9DGFF4ryYeTWzasz62sn6xPvuhPVP7srDBHV1LvEesErGUy6YjWHALzcUB5us19j",
  "key25": "5WPc1HgVHir1S44KaZ3z9bChUmFLiYnAAWP1mUKLMZMQSZuFegfoJwMetVLFbYpsQPP7uAFNmLfe28cKorow4A7y"
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
