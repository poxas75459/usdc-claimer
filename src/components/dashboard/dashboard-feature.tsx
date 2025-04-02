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
    "PUSet3WgoFZHxwQTaYsSZK1pJH1mSWuSTV4NBizoEYqyUzsfWXK1FByY83KkqiULc4d6v5pUzcLeX9QEBooZk6N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x57ERtLiBxXr7NoV6c4gyMpxm5LYMQ2Una1wM6Q7HErYwpNV5nM1CitQWZuiYmQEyddCPV2LqPh3wNe3MVjCnNK",
  "key1": "UGcMDES62wowcjp5kVtQyeHuWkAP2KZEE15z6ywiTyW27UKhWsxT6cnpqr2Pgsek5tq44bSy8BMyciAkUhbPMr3",
  "key2": "3dd139vbPi2aUe49f69RZ8yhVN7247xi2JzESEVGqtPB19ahZnaBxwdf46gpuvTBjk5ViFhRLJPMkChDqkZeX64u",
  "key3": "KWLugBRbK8UBVpMkSU13zBg9SgX983h9vcnxp8y3eZ5t5YYacKHe1YiSCQx1R1C7Lms4V4MVREFrMukNWPmBXv2",
  "key4": "2QpAnGY6T1mrNL5E1JcAz2JyFdtDHesQw992Kc19vrGk2htA9m8sJ69GGSdKrFpheURK98FLsv79hdYJYcVVJdzR",
  "key5": "55vpS92RhiFqXKrv9SDfjCVRSn3jKAKHN61qNLoo4NW5eENj2MGihrEosoEXqrZxjDVxVYw7yDAPLGdw82u7ZtGu",
  "key6": "2oRcGS6U2fZKY7yq7xFd9S6UWCvNTaDPmt4Ss9MDvqgZVTkiFbTqS915nvUdRwPe88FLz6SKtR624kZVZNXRkB7h",
  "key7": "596nADByom4XQ6fRdCs64T2XnEPZXV8mipHv3FkuyMKBQTZBevqVMH6bMZA1esJG5Js4zcjY66rBcS7VS4VtAMwy",
  "key8": "5tu4taUZE6QCqqRshE1aWLMzQAvwgpG9RqDbhjUBBGJL8EjtUeQ5agasN4n4b6tpKTntEPqSx1i79XGJGNgy3PZu",
  "key9": "2BSr4RJyXidGqmtqqQFK6HMCFiDH1j6AKAfXz2GiaEnJxrVb3CtWtaAyskJER6jV37Hs6J6NLTL8Ehg7YmszQH4u",
  "key10": "5ryj8DDt8dPq3jcscMoMP7oB6ZtGEYbJJXiBsddHzt3T89PGzLJnuhM5TUurfdrgVf8BBYXMpjao8D1ft3wXf5VL",
  "key11": "4runygmF4kRHeR1pyYBHwRpvjkCiwtzAyf6DhexH4Up2FEWXTJbJ29xgct61qPVu9QYEqk9Loka5vA7naDqSx4Pe",
  "key12": "4W6bqupDTurdfBT7VqGRJ8mLQpAvfD7uHr5xRpoZheUFC4VUD9ov9huLwjPVgMduW1GM4nzuGK1W235EsbNCFWAc",
  "key13": "2Hshhwvr9jK26CNUzeex28fhDRffiW7fsJcG9eAbtzatXFxicUmBc3uWWHMKbkiVZPPakFdFjVv2abbo6nqFUUst",
  "key14": "5hb1XCj5HxzLRU8NbDLFvinr4KuKryhTvJpSB621CwRVEud1gy5ZP4HXBpkRHjabhJJcQE12A343tnHYdRhejFKX",
  "key15": "5jam9S7sYfGQPdkvKdQUmdQsBYvCvpcv4SHnHfuRK4ydB19MGQkdg9vd3cXjge3ZmTWDwpA3SpaFx2859mukpRqU",
  "key16": "33MNL3hsFLbh4VHAAqFLj2ZF54XLzVqsJur5CgBBiE33gVZjv4wuwiSfaVAq8NDoGUZLSrn7JQxxyaTYpQuQo2VA",
  "key17": "3tNzohsBWBbQE3b7EvjVMAMiZRTEMj16kbsWkHMTZc4raYsfvF7h1hkzEtnsYE5wZJs5cahridJZFEPBm3REMDPa",
  "key18": "3LfthfPSL9nhCQynZ41EpbY53Up5NUKJuiBGZeHbDuAZ9dc822VGAYztmJo4cfw9q2sNmy7EKs6ruxPVWqZksFNS",
  "key19": "4xmWqNrqcS9HRQqzS8vqAPyAFhpb2MGxMnQkdJ2ACQYAaTcrorhLeQE5BC1nQaEy5bQXYNPxfSqFvyUyj3zEmn8F",
  "key20": "2WYGX9ypXb9JXv8k31eJrFPwpb7tDzr4wjQZhgwzdTgNCLeHwajQm3rQztLxj38fcZFAaSJBRRFr9A7nMd8WVHFa",
  "key21": "4mx1CRqGN3jEeDKAFLB78DNNAZpuUoREhg32jDyYFeLWKJDQKUFgVBRQf5ubErUbUB85sgW4e9VPnhr8oHbPSqDC",
  "key22": "2QmZbn3dGJWzszZFGhv5Ctkj2mHNKfQPTpP5GmSy5cm5E5HcgjrpybWsXRPCWW1i1SNspsVehZJYbkqHgYusPR7m",
  "key23": "m4NwCnnth4vDNd7WdzVQhhBqNWeHk4Yh397cutDiHuvN8QHdoswfX1JgUKcYxAad2yM1DbeF4fAtJgxnLkDokoT",
  "key24": "2z1jnzHyRbsVSbquamyqdpTBbVEKYAuaKTAqWnkcyAWTsYbwf4fJvosfLJLVuCm7swnPm22uHw9BXp5MMSn3HWqF",
  "key25": "3MsE8MsriFPJrVv5KtF3ukryFRnx2sRk79Aty7o5N7Ny8mD5NWFz8dXVBFmdnp9qurWxchW5A6TrPfCT9jdqxo5d",
  "key26": "35JB6oGfz2snPdtVZmjvuqyZ6Gm17BbWQC6LSyfQx14JkJy6K3ShrvYequGCcMS565eXhhgXVbkEfioPEd3iZoKJ",
  "key27": "xX8aN8B8tjTRsubyN5md8HzEjDhNcT3JsQrunUfvvctSMwCZvRbQUEwC8JZUFq7dUFapfeGWSzeWBfg7GrdeS5V",
  "key28": "2UgUqMjwm8oe5dpKvj4G4C2ucCQHqMrpHEjUb2npBArRNpAwc3oLV8NfLEoi5zhzDrfSfGQp4mQEJgBWuA5xwgMt",
  "key29": "2Ja8i2jEpn2qBD9mx4Crj4zXSAAWjySKByja78aA49Co33SABseVmufHRCmJhEZTc5ML9VWvekeL6q2hkKyZmfBH",
  "key30": "3M3Ri1NaNhduXqKoDVKEDUfxmRHTCub9JsR95HmEdWTrGjUSeL1wyTSJZRNNqGd3WGTmg9WZtMkegv2TwWtcLc3F",
  "key31": "4FzYJQWvevVLFQMhqp1y6zmd5VeJyMczVjYLbzSyzt4EYE6jLG6hevHyzb7tdAi6P1E1iQkBtGXS46iNM2WMb3eF",
  "key32": "3HrcVAGuXeQUu3XUaYX6RARhWkGXgRNk11545tv82y5eyyzfVgFzUxNf3qiSsdos8P9NCLifaFyafoDcxxwvjxvj",
  "key33": "3HvebZ4rCsYVdz4og23Q8sZHZ67ZgHYyHTgDUpX5ERzhw3TBd6D1nLxqkfPddN9vfnpSQRp4bCJ73CWk91fdBWKE",
  "key34": "3je6Y4K7QhNNpUz6zLaq1a2s9XbKCtwSiuf14HgXKYhTLbwhxvZwXuG45FVUiJMf8RHTgwRXUfk9wQFu6cCwUPd2",
  "key35": "AVagMBsWGHzhUBnCJ5etZ3K5eKLUk6QBxWAuoFhZ5FpmqxcohPJSEMz4QZUo7k3XpJCbUK9ohm6v5CmZGWC1S1A",
  "key36": "DaCjwUsYsQ9sbMDkqzqh4RZkAEASCTf75hKscucXuRPa4khfCuoCUmHeXNpiguBYrc5579S7oFYRCspcfEtrH85",
  "key37": "5NeHqpwa3pEAFY7E2UnzW5vVC8Srqwq9wKu8zeu6DXYccgopqXHjMzH1ZsuxdeCgnoyWDTecum5aRvS9wsHQBaS1",
  "key38": "4Cgk48sseaxKv2YxmyntJU2DsTBSwJimV2CWPWveLrsFSRkZrtCe9TkLMvaGhJH3P6t7K99dBsJkCPD2vdjTxhfd",
  "key39": "PxbYhr8cmzhnhsX65BVYpSmvqaSsh5kZToHp4rDB4qdeMUwVuMMijm5VcjhUAwPaDND5fznQCfuxmw1RrPqCGNz",
  "key40": "2ggrda2ZqzGaFTwsdTPBAjx9eNQtMgQ2AMoaXHjNQ6LTTNDz7rJXuZLZunuz2JYMVBNgZwoguypnQizb9AHnubQh",
  "key41": "X31qPccvAzXKyrDzWiDNH3BiutnD9wzqdRhVWXgCwMD7QkqwaaVzYYH7kmCcEwPpvmBHeKFSX6vgAjibhq7Uc3T",
  "key42": "5MYsoEfVuoc1dcGeybK166Ewi4iL5TQfvGwBhynwgsAaa8TPcaGFupcLr5ykx3cWjfeiMvgH79n8GVktKjZuEXSk",
  "key43": "3PshLTZv2Twfd1bTMxAoNMNt2QQyFTkgJzdbh7E8CDkBHJbXSRrWyJyESYdQzJQLG3ussXEiDunjo4GxACnKFggu",
  "key44": "N8GffKSZmy9eYEM4VWB2iM58eNoFYY43SUUtFg2DeaB9emM6zDk9h4BVMdZCLZAQh74CdaV9QhSasFxozUcnR4k",
  "key45": "2hz9ZqLKJvUEtk9YuUHx6qNUEFwMhV7t8qeu3sMtmeBwFCbvrT2jFQmSmHhwozqkt5H3d9ckvx5ttkab6degdPxS",
  "key46": "f7fQhEBnGSdAhyqSGEL2L1ygAeTfz2Lo4CfCVFYnfwHXRBFzRpmJQU5rD5A9ARkxEgkHwV7v8sXTBTzmntKKwYq"
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
