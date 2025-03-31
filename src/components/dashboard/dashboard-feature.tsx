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
    "4y5dnzZK5EL1n5H1ZjmC457vuNJeb7MwnHMBHjsgL3z7FPQqYN6yfMxFVZK51iv3ea6JvHSv2oPu49BUJ9vEPHAv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v14mxT1dhpr1QmvYoF48cNLf44NcWEce4VYLK9Vb9mCwsEg3ddoYRu4v84kbx9qjmbLAJZZAWkZbHbHTmysXGnz",
  "key1": "4wQYKx6pMtNENpniC66nR5j4FoyS2Ni12psiD39ihYykGTAYc1PqfbJRrVSSeRJgtJ5qLKvggddibag4JTyE5kTv",
  "key2": "5rcqfxGUScKwiRVXkZvM1rSDiY3mkpEnpy1VCaFkQySkA211PnxF7NhRBemWh1Z5LH5Ke9fTRB9ywrPW9icNYykB",
  "key3": "4gUXxXVGw2MgAkGyVvq5Sb6PbxCqocmuc2WNpCW2GYbt8vyHipZggygPztzKfk7hrFhvVjsou4ARk16eoPe71yQs",
  "key4": "5eWBfuwJfPb7Ninc1WBnAcJsDqg4qgruRte1bWosid9NTTpY84u3QkuK4w6QUufcrkTjYwZ3XXWvNLfqdrTRjdis",
  "key5": "4QaXJyq3apAj2CmFarWt1DvbUTRmsDFQDmy4MKdisFoKoUNREv7FSgvgSNGbdkD7pzYmtmSQQKfNWnFVwX3SCS3E",
  "key6": "45BUgkeEK2cWDG3hQJ7PGbiHUR4wx6FwQgS5MzxF5fiCNZFqrR2fcqjEjMqVgF2FeRaV9RNMzZyBvDcwb1tW36PM",
  "key7": "2oYyeTRGLa3WiNJvqmMi6fqmV8VsnC6Qg5uWfxscbTwqRZfvVJPbmbo1S6rnP1rQKVyQNdTtvARBquaUUhsb1eEw",
  "key8": "4KgjJpEnpj9ALjBe4vWk8wTUVpGmW9pBwp8qB5hpgWunKSTQyVV4jkVHr8oJv2TXMF2YZvWb7vTRPN8DZLUjJvjT",
  "key9": "5Sc4UebCad4PCbHSDjGgZHifxEuyyASEMBbWxJwi5EseeA2eJU6MvQPpQ1ih2t9KUjuEzW3pwYrJexhLAF8Hph3C",
  "key10": "3xJTBHmFTAnayCvdyC5oBdxrKdqxuByZybmas4Mnxh3uB1NTG3HALZgCyopuC4XJp9BrXsXCstfJNMYSdnEMaDxy",
  "key11": "H3wTvzt7HuSPT69HTgrKVJBjMYZfekinf3vUjFtNgAJiKAnWTNcR9tA6D5rkNkaeNNCBZJJ23xbiRtFQf1Y3j9h",
  "key12": "4SFpUZ8jbpjRuEDmVMhA1n7C3HCo11oZuMcAoGob4CJtnLHePo5PfsgFKYKoX9vvHW68jfANzqr7jmgaNwEzV4mZ",
  "key13": "4eQa9yBiTwR5FqY33uKHFhWVQ2ihDuCRUZhWKc3sPe3De7weKZHvL8PV9rQMPLjLnxVkVeivqecVohZCmgxaAHXz",
  "key14": "4HKydubdJ4RTf581uXTeEbfHcm7XpQFH1vQUGo9pN1t4ek4QmDtS3hGTiUNqmbU4aJBnagCYfKQSUie4PGrJhFSz",
  "key15": "4fxz4GfQ8xHinTt4u7dQcq6nuHuKya2YXuVVt1YDNSqdGLaU6mvhkH5TxPchZByT5oeyFD3dYFMj5YfWTWmsyBdM",
  "key16": "4Zy3vCv6vNDK8WuSV83kVb91Mfvmyq1NkBbbLKrURbG3wcvKWXJWPJtuwmezpfPodaMWMoAfTRmJZReNULqGTB7T",
  "key17": "3aW8SVtKYwNVS8wrMunbLS9P3LWBtJUNsd5RQiEpEFUYcUGFAJnicUzQpUiUPg2itxqS4bSpoPy7EJrXNgXeQVcN",
  "key18": "2eGMguraZ1RH6cTYg5k4xWtGdRuA5eRiRHM4BCEs5c8xubiVPwptympfs9w1JptFPzJnqrykzQtM9aTcjr7mSLmv",
  "key19": "5r5UmcrZYczZQ3aF37xmDRkyfcFHUvRj2k4ddJbkbZ2CcZPhkEMtyBmKHqoTZ3hsynM8rQWoK2L85W4YCva5nPvX",
  "key20": "qv72z1Bz2WrLwNJdizrLYD2jbRHYzk1BSXKQYHe1T8pT7wDTjevRKjeu1iQoCYi5rk9EfwPkwMwcAxJybja2fTt",
  "key21": "26x6AxvDa8Kwn6myuzcH87pDGETmpnHBp7DtNGXdwXctiY8RDW4AZAAsQdpQZqMaTkidsNXE8ZdFq7vWJ5KEz2hj",
  "key22": "47C5pU6ugzLdtwcAzWSY3ENuHg4BFTGcWumJmevFbTAVGJR8uN8S2W4f5LdZ2qLBtUZmF6gnemwsYRRsRv2zvLhh",
  "key23": "2bU8Pex6kdf2CX5a3VuT4vzvVBdfvh83dNxRcVzyZHuyX4HVfxjpGhRw8z4omFfQBBg63zuDFEJWBmri34eoVZNp",
  "key24": "65umLWaaKrEsLt5a8fi8iDimKsFXrD1Wk5gHN6EciAw7ZTTAVRbMukfeg4GLMy8f51bhN84VZmTisBj116C5Vvu9",
  "key25": "48opzCrsRi73DMrzc5oCr7WPd4SUQQMpsDj37KVezZayin2sVBgkXeT145TPEkXDu3B19hHHzfFsNPbZPjkgZRmD",
  "key26": "4LndQu4WkA8jkrDDJ6ByU2KBJF8Xq9TGFvwp8K9jEuUjqs6AiePyWTZEWrduwhEZUke87U7zwuEnMkuGttSDC58x",
  "key27": "2kBuKR7e8h7LVyujDpvg2wivcgokgEHMgFGudMYY5cH9iCVi6hWm7cB9CpcUgb7sWiJ2d1QeaTKyy7ytNm1qy2YN",
  "key28": "4iNnPwt8YZQZpKupPcNWqzvfAMV5oGL9NX3UHVb38YSAHqW3uaa5MjrckatwZVkzB2hmmxNqA515tzkvvB1YpaPj"
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
