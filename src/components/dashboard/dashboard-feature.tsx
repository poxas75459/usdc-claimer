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
    "NKYtoLJBU39KavdkM8q2Y66pJi86rx7ttY9CEwRtjEpay6B4Rmh95ELN9CP5HBiUid2sa5C8gZxMWwjy3Qhqrva"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JP2LX5RfhYn8f1NoL5BrKEkC4KDXjS6fpVQV1hPYXQrgGL1iRATWb4o5bZu2Do6NUuNsVoPFMzR5TeNoxrdvMWn",
  "key1": "4JZh7aDLrQKc3RFh1T56mCaT8FV4hovNFBW1xeJcjhGi5cXxKeBqfSTNhUYGu35NgdpCF4T43oyUj6GmEmMcomDg",
  "key2": "5PBMTy1WF4AfaD1mDdrV189hmgHQiA8L65gxKy6vztNXAtxCufwret4k3yvSDuQSRb8MP5oLrJfvRMyfoZz3qVeq",
  "key3": "5AcoaLFnMfXc6AKxbB6qvT1xFd1Nb9WyiZatFpExqMDNxzppZ65XffytB1nihJzMn16zVreWvm8d9h3tcJfTM1K6",
  "key4": "4pfywsL3BLVDtHKoX7P8YSCo19f5ieW6jpCpEiDpKjPgFfv1CUiyYqmDQxKoXXbSYPssrUNXoetcxXatgZofyg4d",
  "key5": "5HzGGZiyYvuZk3d9q2HyJwoLRjKjQAifaJy7NkLQhbhiCnV36Wa3JTUAFdyS62MQGwj8cLwQsReKkZqNZLYF9ZNB",
  "key6": "2yvsYew3kq3efxNNR4dnS1WaP3E5KMjSHiWxq2CCXSxDaAtEnk9wo7mTs4xAduzKQpN1acUGKwVffyT9vK2eb5sr",
  "key7": "4oJbN1zMa6d5YDZ4QVGYELnjSMUqLTjWLLLRnFX27Ep2G5FB5qqyK2YsFQtzH79uszz4e613n19X9vCc62DhwNhP",
  "key8": "5PzvDMY9wu1MrS9TaZiKaec8TGAKms52zvTQckT36KZ5qvafKdCUgUUYVFAqHXU4MQ8zkRtZgKHDh6oLQfyrstdf",
  "key9": "39zkLp5W7cabNNHBx85RQrbZJoNSxALw392fT9r9iBY9W58cpXNjt7Ruw43Fjo3iqcrm3akzraKDERZ7paxehRDq",
  "key10": "ey9FQybcHmksQh4nz8QgbtFyJANTGX7sYJVUQ5iFzibhYAAnk1rM9bKsZ39L3uTtAaTJyuD2xk9r8q8gsVw1whA",
  "key11": "2wF6bgad8EQgyTHoKrdVfa8jvLxARtUPAYn1xKaQgtKx1vAomy7pqHcuGbSagFstMAE7E9gdZtUhQPRwnakX8afd",
  "key12": "Zad48sWW1iroQXwv24bykxMW8FLxPrSBnyY46z78i3AErLJZTph33rF5635X7tmX73ftw84vRmQoGHJRaWncNEG",
  "key13": "3QVGf3Hq3639PzNvhpXCW2dm6UdG9KniLEYFADmMxdFKsUqZfB5QLEQdu2qyRgd7NYnTuJNYw88X2yrvzvA13CvT",
  "key14": "3rKSRkozSdZdqiCPiLvxfeV4HWjtiCmexoYnrdGj8zfxcqce86FDaWQUMmfuY8zVUFE9vPsogcH8Y37rrhK3ws3q",
  "key15": "EM8k9bavZR42D5y2LtgGxUYCALjNzbRxoPgBgD6hwy8QbpU9ToqXLQQwboumg26Nzdc9GakJ9QA143ZqVjVc3Vd",
  "key16": "3nGpNTWMNoAZeDDC5fqq5dCFPfsbC61npuom6q8DnRjBzJDU45yT2HFRaUspUh1Xr8WECnMCj17Q42u7ru3rRUEj",
  "key17": "ofEs81N1xkXY6auQon9R4cmtwdTYNdzGaNEViam2nEhchzqnur4erZL1HsoYsMRBL7Cu91w69H5pWpJRZSKcrAi",
  "key18": "4oFrvLQnmFVQCajPydpcsMohRt4gc6UauUj83fbeCLYR6rHZJmKX1nf2zK3oApw9iHztYoeAVGR9qcffwWNYasoN",
  "key19": "3jDtsVcnkgCJCVKNedQifXS3PvuLqssjZEW6WfRDR4hMZADoLdKqm2qJkZLHcbkfxyHVohVRc1ESCUxVH7k5gy3Z",
  "key20": "3QyT6dXCBq16Yi8k9xgLveP56dvf6xEaF6Vv6qCu5xqk5X6MdCkMAbM78AHfxgwHo74oMhh7cszMKE2bH4vKA9DC",
  "key21": "3wh1XpsxmqcguGhvGEjrh8ZVcZwbWVJ4uS4c7S4DAyL31HDDZSmHQuiHr5pJEEBoDrQq7Tj1Y5D7YcTUhojg7Jeg",
  "key22": "2MSAP73mejTKrQ3pYdndsqZNj7P7uVXk1hitRSKBsC6qvFHao1KZyDbN7iuHAks4JveKgDgLpWdJjZ41ovYAVuMH",
  "key23": "2X8hoxUxtrrisD75B8U2hw1Wx7bntGJxwe1xfAXRu8JhAjiijgctXGJrySnfGTv5vcfax4VFJFk7JJC7JvnC8u21",
  "key24": "5kNL3EnJibtffpXQ5Vz3oRysekR6Nk4vpduTuwHwskbNjyJJoAknppGk1YfGSBN7iuehGyPMLvZ3jzSVmQrMCqyk"
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
