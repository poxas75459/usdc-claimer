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
    "2XRsTmqZc8oz2vKrhaTt4GQvRQoS3ZPEdkvbf66vGhxQnXS8d62E8D7Fc45eh2s3CvzrUayntwet2GABwRDztDso"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wz4Si9srszxYq1Q3QLGEPd71H4rB5EFJv29BAWJn39EjmRUtoXSfkHTrkPv4QT9g1W2MyxhCzeF1siEqeYgz4po",
  "key1": "5XkMAKdGey3PWiZhwEYj8GhdEydAHSs1M8p7aJBNiDoXxeZSceYRFwhKgsDJ2JM6G7HdoSyNxGGpfswtHWh1FQ7h",
  "key2": "5bgEPAhHxr6eGASUsdAMtnWERKc5k8SUjNR8UijKSHZTyv96MqEAm11Jrop11XhLCdpxbMPqLGT1EzzZJ5R8nB1U",
  "key3": "4Ue31z9Kgch1BLyVxfPTEdECT9AacbX7qktyMprifdHYz3NHu8owMNapXf5sSpxKxiBRBTpDLv56nE9H634ZHqS2",
  "key4": "5KMUE8fRnzmQ8Ugt4y3t6raiKMspBoTSkhQtS7NFqjnNUWJzfESjybWyKMQh5JouWwD6hM14dmNbE4TKV5foUjRT",
  "key5": "5PrqYrv5bnYiudsu96aeN5S3vb8fU2tgPiBuhn2vmDNDbySqPDMMZ9yRbrPMwneGmtuNWxojKV7bVCqit6GjdBsT",
  "key6": "E7mVCB4ZShoYyWrLrzDhVQmRA4NUHKEYpc94LWDvXfr3mhouXPeXAWNQkhLNFv2PtPoeEgbyt8rzPC6a92xBr3g",
  "key7": "4XpavvJ1pTVMDou9vn3iBqfbMADHWvVf5BGXK5RgyziA1SG5Kj5Nh5KAed8oKW5moTXD1XPkbqUe44rH16ZL4E5k",
  "key8": "4RcAKKYbB9LapRonsY3x2qiREp8Zs1PCrELsnhCdeVwahRdn5pGKMpPTjyCxn8GambcFBFK21pnnXNYcgs7zLRte",
  "key9": "5wLUX2rQjJR3mqrNvNXEovVi6GfRXACNDWDyQrCkUgovwsYkRQ6y9VRVnPpUpUX9NJ6JmPGK894GmB8qHiDAGZJf",
  "key10": "kRtP2zrWEVrCvu1ZAUY55cagT3LmYGu4FftKBqMcmfrfb5hVXBetDiRtcK2Ez2tDamubYToWDn5kWAMoX4mghMS",
  "key11": "vep4htKo8DN9VMFEkHzcmedTJNnFL8e6kadXBqNrv8aYmMXySB87Pv2RdbAg5RYfPULVeMji8Bc67KZbneSJMtC",
  "key12": "2CCtU4HcZtSVF4o9qd2SpbVaZV1DKMfrb5kvgmWNpiTsj5Hw5nE2UsuuYPGmGYWHQykPDHBNo5NddxePNhSX4qfZ",
  "key13": "22qXfoGqU7WA7TogtCZcG3TJQG9xRmFZ8AZPFqwjQddG6MXcgdyjSWdCY5h6LUR9MQ7StwbxcjqAjrsdccNrtt31",
  "key14": "5oBwVaAb5EwjVvYRZS2q4iYEmt2jn9fws7xFAEh1niDeVHopyDgnpzuNvZaYTAh5UhEQAX5Rc1PCDNBRZfBanKUz",
  "key15": "3128cyJRf9tEMgYeHgN9omsKAwcVrcnbtGENxmPkH1obrNc2fND1HhwehTihetfcQM426g7Sj5nx5FQLGcKesBWV",
  "key16": "31UsMhXQpCXg21Ese6SjLgN2h8qw27Zr6f1DUGEAVSZoXH6cBWCsmURzhz5NdVT8BRfP4XYf2AKDPCeMwTg1ZZpb",
  "key17": "61g67kHhYAp9Zdj4tvVATq59KnqyVBHGhZHCwMpNy3aYYfEqLM1gQ5g1QK3LeKhq5yaNkPFoytHyVu9rzampHG9x",
  "key18": "3vSheJtfX2VC72FN6vhqbpk9oD31auu21KjgwA25aXfSzX5m8xnPqqgbC76w7u5V8uqAMizUhGL9NZcSXfbE47g1",
  "key19": "3E9J7MuptKHSgYD7FbT6ikMP2NBFknL2rqyZ4Ewqujo8bQA59DPAaZpcgx8M7WZkwraECQobUkKtT5h5msT6v6Hy",
  "key20": "37PFmbMYKTA9PDPrBNSvQKU25cEgk7uqQZWwxqD1mypjKTpMze3TQ7H8KKg8q7FkPbACbM6HBH84JtKttqZA5rHa",
  "key21": "2XjeWgGcmGCTpWTJpWULiqhkdPjS2xT3BVb2NWfhBX4WXYqi9XHYn2W9pHbGH8zxrFKw7qEcyTd35681W5QRa7rM",
  "key22": "4YBqUjPeJRoMZVn1aAb8HsnL13aGHrzp1GWqrJCfW55XQoSn5vg636FZAvLUG2MrvcVMzzr3uUYY7CarRHDptrx7",
  "key23": "5VWDDigR47UZrks1ZdXgHEojUMoFNmhYDbHRCCFuKLzGiF9zDeMdpZdWu52L4fqDMU3ZDjky59H2CUAgeCJXkJqr",
  "key24": "5MHXBstEVBc6nicL5qvrLRtnGVk4DGQwaPkBkHCwevkKG5pteyRE6QTB9cf3cxL6sis7c7yp729rBjAry22LiEkk",
  "key25": "2hGJD92LioF2kH31BQryXyZr1TNXrEKzDNgkQcUMtvePMU3E9XbWoVkyCVLT1Q9xDw6ymce3uprQMfntebKFLsh6",
  "key26": "5yVuvTPEY36GkwN5CpmgWLYFxMCVihDJzEFjXDisSp9vCkXr7koshVkE7nkaLeWvphmL6TXhbHHxvtsEHsxV7WJo",
  "key27": "5ww2JUVL9T23yGFbMUa6jHERG7JH3YZnZQpMgs1jjCSRxqpoxWGKT7z8V8M1pPNqenM2B24Qg7aCa4qhXhUJKGU1",
  "key28": "3peCu7vi18XP5c4o3FzuwFVBu3UWb4G4jSNhjRorBU3D1uMbxkRbvDG7Nhn7aaq9z32XeoBFt3XYitLfQhKd8uzr",
  "key29": "5voitfpokhhLTZb23rePDJ5tXyxef5yAx9bYTjXrcHZz7DrpLHrU7frs4rYXftFGhekL5W5hTnA53xubLRT6aAGk",
  "key30": "49KeWaiU8t2y57rwaMwjVs62fYKSMUUQEqFhii1szuYfUUFeZgU8yHMuFJHsFNKNwTMnTcW9RW4KT2rkwWv6wvLs",
  "key31": "3tCBojxWR2wg3g45jvk7b8DkR3Y1edq3tw979V1YQGDveFwPRAzgG8tSWt5zp3WYRzHY4hPsjJe38xkvKttP6sXo",
  "key32": "4xohTpASFjziqeHnzNZZRkySveryEDtTA3gPzQZZ1yJwmwbq2PsUYTZYyYUj5Qu14SrCwCLaBYGDoE3Y16GJNwLN",
  "key33": "5KynUJWQg9DoiUHUWtqoXn6XZcZJQyEHcxkYCj72rbTngARADRjegz2DSeqwUL5FU7VWbJJyj22Fw6QTQFWWEvby",
  "key34": "5cVmwrsGhT5porx6VBM6FzsZHR4XS4Ns9zg8gXVWxh7GfFCxshSDh1evNzjCMvZ9DmcttqiF3mJxxSwhNa6GfrC9",
  "key35": "2WaV81CN2crM98bpcT66qDhaaRR8Ax2iZ7nB3GpxxcBYbAqpAcfcNGPPnrWP1vHSB9FuzUCSswEuRCEHNkjiWSqk",
  "key36": "2QQ1G8gCzvX7GKcUHsT6dy43x8UKTiH4271eZKraKZoxLNhNoX5bJCRW69sB2j4CrtTZz68Hs44CBexKLQoXkrVJ",
  "key37": "5jHJ7ae5Z5VYSrwWCevkmXXWjWaB2VkuwvvriTWTqTNcdZkyMtmP7g7kkzANXzmVhYsEeFeH7kRmbVpwiVBA4j72",
  "key38": "pcprxmAW4Bq9fxuW4WfyoFSgo7Ch1zTDNAfsTHwPDnCJqJWorfpVfNpgDVaMZDjgD6fjUP34sv27iNF8FRiQ49g",
  "key39": "4Vp9CvprAsKubejNepscf9RGXcSx9ndBkttJ3vny4fkijnq4Q1WRHQvYL2N1TD3EY9JAoyUVzHi2xGwC8HqNxn8E"
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
