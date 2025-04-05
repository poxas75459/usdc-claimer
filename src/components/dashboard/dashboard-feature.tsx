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
    "4j45Gcn1rsX1oE54LEer5j9j3akSECdQarknghzb7tU1hVmYBsK8ehFRVnUkgSxW5ztmMBETYZcUnHgZLh1XkHDp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PcvSiWo1LTQXp5BH6mvRYfYep9o2PbYAVKowgoAXip4KjBPERu1DKtxExurVx4MaRmN16Q3uaCPaymNLp1qDoeE",
  "key1": "4sW3ExiMeGX8fLUiDR4z3QVx88dX7bepuKxcT1wLgoMxkoyokgkwDNtyK3i7YKcSgYMQENXCwoMBpzAwc77XkS1Z",
  "key2": "4i1t9h6zre6rpbatZ9zMv4PCP8VZvcyZG8waVz4dSTZVU93GNDnHTGaxWB265k5f3rBVMrrRrBjaMMqWp1TdcrBM",
  "key3": "5TAubnWUS5Rjyf2q8Ubk4kSxKGtowagsJmcJ6ttx5dtru7rS1nQheKKg4qmJtgafaSYTcbsC1F3tFkYpZM3c61cC",
  "key4": "3p7umE6FkLbd1rd3KmekBa7HZNQKMwcnvLfEKjAGKnESsffupVKsg7b3NokJWxNjxL1KVnzeU1cQNw3fQdLYYCWx",
  "key5": "KTtbAxZMZdiinzSdckmZfXpdmsFNbctUfbedhNnBzZUHocJkBtPYg2NaX2Z926ktPLZSvZefzJiThqfmbRabYaP",
  "key6": "2YgyVdGzjEqCoAzgCjfNqgkoTQKjv3oEcmasu8Ru6KSem6G7Ewj7e5h4WXFt9MJbjY6g2YC5y39jitEwiE7WppDm",
  "key7": "z8sgtcTuXHHqPVWBnoZoJYc6hXJouuKk2fhihH1q7JHwm42QorMMw4uv2Fap5XB9rJ1qGdWkRogspvC4XytCnhz",
  "key8": "4ETMNC3cCpzE1uRkaVzcfHYW33s3At9pEykS36CdE2pPpjE4PaBsvPGo1KVzv6fUYG3Qe3zGBdcsfi2TZLbB8zGj",
  "key9": "3pDPMGdVWd3sRc3HLAUXudwX3Z9qPfBvHaooazkiWhuBTMYz3eYhHT8sAvS9TEPdMmWuoLmYiNN518Sw9Xe18avf",
  "key10": "3asxHiXV85TFdFJ1mENWZMRq8KYwaC8DpJM6ZRYEKPG1R4EdL7Tc7oMbBzoXZpV1TgjmdhFe3t4q6Tn7Z8U8b9Hk",
  "key11": "2L8hTUTiBXVvMLSWKKkdpMC3CV8GMaQgQsyJSSRMMRnEpR82k28Fe8R9CoyU1tKeH2H4HreTqCeYWWs4GA37gnx9",
  "key12": "4C4p2NgZcV7ZabmR6TAXJWz7UxyJa9YHQirpDW3dn8FboFQbgM2g8m8VzF2ig5xKjbMLWudsE46UzrQhQWiRBn5U",
  "key13": "4c3tJjjHabAVK2ZhniiNXstPD4k3AiAQbt2o87uHKh3htQpqrRmYFxmCBJzTFr4zoEZ73bNt2VBnLooW5Bu7jPJL",
  "key14": "2Gq6B5CHDadkshLK3veYi5EjNUL7idpzKN1dbyzmZRwk3LGDygwe1esMUFEwtA7WnvWCbRq9EomcaqD4qsu6rrsQ",
  "key15": "2A7s1MgdNfg2k3TyMp3nuY8vTeH7HWSwt429Jnx4p7ComwopwVGTM5FW3834iviQfDh2rYZwVv1xCzthHbbzxNSC",
  "key16": "2uifnrtUt3iT9DnUGikHFbvUpYM1SU9bG2G5zG1RtPubZhU4C7JHWtizKevU4zydeuaqyj1yWAAPfNkk3PADLtyN",
  "key17": "2KGUUNyZMPAkD45QSJ9qAZThNScijABYW4j4jjVGP7zVsKcBWGmArmMy3Gg8i2a5f6CAhxQtHs6CtAERShWAPhBL",
  "key18": "5ijMYqBsnfWovvPzMFvZpHqu2fHUvtxqo22PBmJ3EkMMHRp6Wto6hmsNhVhHiw8sjpeFxoun53KCKGjhzcRdNEu1",
  "key19": "JkDwr4UmdaqLYpd3LP3CyhVHxazqjGyfcgMhQ4yXtthPuw6xq62Y1WtbpBTKVza86PmXnD9GfPJY1RwmKwEmUPu",
  "key20": "2rLUdhnqiVUsaUx9UezthVvm7hwkrsHbgQRksZCVLazcgDdkSZykVPhjAY1VkDdwyzPNWersiw8gzrNqSV5tXTpT",
  "key21": "65QC4MoHxhbFDYvk4Jxh2FoHq32cKVSgJi3uJG5rZCVuftiWVNebv1rL5VHZtbaJfpjAofDnbLvTFyC9pzkZQpwy",
  "key22": "47RwUrg6MTgHb7DqDESsguStYQboiA2Q5zC9YKaBdAemdg2mhFxg4Ht7WVepSgZ8VWbXbW89LhSjD2FG8uKLWB6k",
  "key23": "4pZTbz9QRR4iBi7iG7s1CVyfeJgEMkJARpdR6Urebd2ur6LsboiJrGBWRgvjutp97D3nUmjkYSDTCnBoan5vt8eA",
  "key24": "49Qv24j6phnToTddt9xvYDmX4mZFU81b1dgCpV4s8xRpoK5iaSbSjzyBobQ1rdHNomWom7B9GtBX541KKTmRZpYs",
  "key25": "3ZrWaxu8RqydQXbCEDPvkPxZoPSPysuYGJ1i7WF5amgzRohJisTFiqXGBoNzDJ6SjDvwPJYSMLphArcZY5S1tR84",
  "key26": "67Hc5yNkBFCfxoivRdTZEKc54E1ymwnBuJaAr8nSsqX7hLf5pwYLTxGCF3WMa4GiXopuPnx1VzBrJF68pumko5vJ"
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
