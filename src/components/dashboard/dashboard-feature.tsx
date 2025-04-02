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
    "64nr9WzRCuXEyNiyLPrSGFZotAv76aLippCWqoiEepe2GYekR5xov3eBhAbYxc7JBEWGBhhhXL7pJk7od6J9Cxh2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nfvJHXcU1gHMeQZF7zsfdYMm4ggAaykWkyQF8QmBwMACZncYsUvqJeiof454Qmvt4Rf18GrDeWwQMSB7LAN21UK",
  "key1": "3JBacPFn3Ts25VDXJ35cT7kgKffYrPLvVJdPVQhHtBWb1NoKp7C32eT8BKnjD9wGPXgsEDewVV7uoQ2XdMaHxV16",
  "key2": "4quLmaApiJkApa6493KBjCpMFankzbGvSAKXE78MfZVjxVXTBzzaopJwH5Hzv3JdoEGSHUqP5ZREdqdtnhLQQcf2",
  "key3": "4TSXJPawVXkDHa2jX2hJxUs7NML1fe1d3Ru8NYHJiXVSPeHG4vJLUz4oETHRLzN3qWqiX9MBRaEB1qaBFJBEL9aP",
  "key4": "3K5DT2J5A6yLyToAW3DbhbWNDfHSWm2XjNydndA28qSoE7Y9tq8qbXuSaBhoxwbnXoq75HK3BcScbffs89T99PmV",
  "key5": "3wj8vXMLEFTVzWVzNKVSprwQ1uu1W1TZ6uW4vuP2ff1tESy5xspFTEUCVGKy2xmGqZsFHxqirKWs8qG5r1XEHn8P",
  "key6": "ijjaNLtb12K3JvDtkeruBhW2qtEKZ4WK3ELLbYevLs45bpfgbJZg9X2KSbMRhxaPTLY7qgxoKcjXGF2JVyNQGtb",
  "key7": "qYcBX8uHMdepewttwLXtKqtRQbrAZpfupuWmBtoockz4DuvAtCvh7vhdWRcxSq6oUrmkTW1Q3TN6W775tn15uAX",
  "key8": "2bAcf7eDqRGGtHBjE2F3v15uUDkZV73bhy9uxoSGksEPu9gMNTafVmZpaPfp1EUwmbcxQ4KRVdp9Nfhe4pGNVBTU",
  "key9": "34JAmuo9heiC5nhepkL83vLUuzkhhKu1ZmgFScqCBuSoRi9wvQ3witcXALzpnqs4RThG3cEjyP6pMwGLYtAPFhNt",
  "key10": "461Dc4qSWUCRuKtNhtkYBrATCKyD4FCFizuWqfrBPSJMZHys3YRSpVDtwRtwazCYpCCcSd5sVfRREbmuA9FCZeTk",
  "key11": "5g2M3wfDjU6w5zkBC65L1Z3rz9eZJXGA9fnke5DdHG2UgYfyvRrmqbBDmHWZhf3AAMSdn4hHHdFUbYx8gi5bNWSv",
  "key12": "2DFuAfwFQoaz5bbBXyx3AJovm831nR6DoiJED4BapLwNALW8ADZX7VfE9bYsJr9kJuPTe2Cw46Hz4eg5c4xcEqSc",
  "key13": "46PRETDEb9J85NLCWyqTzUjLCz6LzgDxupUotasNVTuodSx3dNaDxCDG3TfX9FwNfKDGTAphriBuATrNmriVRkvD",
  "key14": "3t6AssdQnm1wikb1BCWHC5U8ZY8QcWaYDxSCxPQbMFKsntDqe4D9s6aqE4emV6Q7HmqdXfLSXPsxfwy9XeiLnT3j",
  "key15": "2bCdCvMTLYae9GCF2M1nJYkvZBDxX86b6MvtCYA1RVWUKaDy62kWHWKQ22t3xMRKopBuSHdcDjzp1QkoA1PPu6Dd",
  "key16": "uMJYwL9ivaojuP3wRisEqbxFYyPsX89dPeiVS922yupPFCpLmgtX1H8QYqp3LBfP7tGJcQG8j9R4DuSVrLR1hwF",
  "key17": "TXyfUXQXXnYjyvMsA1GdgM1UTb7bHKHN5Ru1SxupvN1U4w1pPqsvyJFX5Ck4H9V46YK4YKTQZV8jycsqeMAHKsc",
  "key18": "SQRNbEa41LQdY4XKYyzRGAgx9rxoABGcdRJApzdYuZGKEfX23fGq9FSsAbwfEZXbvZvvnRnrb6BVJ3GS4D3qR3F",
  "key19": "2pg8K6M4qsDGvanZuH5CspihKnJrfUPJPpTF3a3Y59ToHuSxa7XebcmbaCKUCJoj9vtCRgL1rTBaAoHK5oDPnD8M",
  "key20": "2FAxowEqAGpVz48BXtKKESeXd2DsvgjSbBhSBiF5YRPahxG9vM7vUVTRBaKhYYnPKdcAiN2MQHNwMiaUHGhetWV8",
  "key21": "61eLU33HrSCFsMamMbu2S8AgA2ikFJFHVGhc5C9JLSvMh5YZXAQ2h4kdS7wZSoEDgALfWhfx9MD9nEgWTqzPCkZL",
  "key22": "3tYwZhHZfe3DNSVzFBaFs4m2P7bW4GGBES7LHYwdmTa737v1zosoFzkBDZLygu1rfqEikbnRxFreTAesdU3W2tzj",
  "key23": "FjHB3JAE8fbSWDLH89ikMzcwHHe4uip6mw61Ex7CmTkaHW4T4NeegacdAVpXHSWURH6MXsvjmYWTKCRgE5uEuLU",
  "key24": "374BSxrx93ZuujTd3qJi3JTkECCbeS9hqSJwZjtpZGX3RyafSSgzqKXraXoX84CY4tVKm2eAPchSzswnpnuPUCg4",
  "key25": "4rPm6a382NZBfFqzBKmbendoFDzUcD9j44d8CbS8hQXS9z2rSkAFr6badKLf1KHP6xFR31GD4qg2XGyyK67yG2W3",
  "key26": "2YE5iUByAaT2b3n9PvqWtYVtiCwUmmF2sYeS9w11EtAwhXbvxYvYwebxkJEuGYa73Ttrwnw5fpJ6tQrgf7Z1iYqq",
  "key27": "4veWVuwx3XZKmZ5G7XMNxgwADxLmtk2k4ArmwseUyRrXj6cxYuVdvbBp9GfTQevuKWqw8ofmW5gaT3tZW6tZfNLk",
  "key28": "kV66eS1GoodpKoq5o89fyDT5JMFx2oy4jwvheQvkGVJMDYqu1VdLAmbG1USMjMx7YGntwKDCk1SHfaCyCFMqMmk",
  "key29": "3eqZCYw8SjmtV5eiDSp7RMD2b2cbHVuSEx4ZJrPHKBTux9N1CKMVuuAoPwQDG8E7dRAAo8u1D2nGQZGrvx8racks",
  "key30": "XYfGjtttndTZpWa536UdGo9qU2oxQms8Vb9mJDuvTYZPn6rLYZ1o43TXwHxifD7cddoMZ7q6sG8ZeZiYzDcZT4N",
  "key31": "5MrVBYpH9JSFr5XMKkQTM6S4iDX12Nf1aNufKsUGcMyYwA7TxwXq5ubTSdnk1tJmqiZipk5xoLHNerbqAUnKGMoc",
  "key32": "3fdxJhy63A7GuQFEsLGgvzXQYiYgfUVASGm1XieU1tHafJCV7eqSAeSYkZ9FB9G7qSgB7xkqSuBHE8y2DAcNEquf",
  "key33": "5H3JoaQ6Nwa7nScH5ajRyRmEv9yf3jMsVTvhgEV9FB44dJ5bvVxLMqh6cCV4ncsH7GuHrRxjSpQjbRTnFwXhrYpx",
  "key34": "2DqpTnHS346UKTf9LoEssb8ucebBCFgkNDnp1gfqsDz2kkSaa9CY6rugSB4qtV6AE2KuCQ8Hmhcjo8JGJqhhzty2",
  "key35": "3Af4kXdBEw7AM3CRJFaecsTzYGWogbRrSv7Bvo3WrKJzwiGeAfbRS7qQuyJhR11tNyP1y1imuNahy7YGfryQ94wZ",
  "key36": "4KcttDNfgE5HeLybvtHB7xknRnTEEiEhrQYoYE8pZbJ1hev9pGSptboCGZExhPkWPzd1fFSjd3wtQXpWPPmNzv8s",
  "key37": "58cpk4jHhZ815NFugcHwBww99EBzi8Dgak8GVPBFNxk1BTzThZ9tShCavhDrNWE4PDE4HiQvXaFbqBsyZoyV5dSh",
  "key38": "4aftVazvatmG8BYN3bkwomCdahVFpLXZMkFPD7yTQkpGE1ajAoisVhPXFcaYCe4x6kk2mVCxoSY9EFird4gbpRuH",
  "key39": "QuQiHdq8DhJyZmhjKDKkzKXs9hcWVqXuRXhBv7QccPZXguzCG8W4WcaBywixE92eAk4WYVzwaHvVKQ8YtUxLD6y",
  "key40": "587Q6o3VkwayeEHvAm7PeXXur72KfQTuRP7vLqgP9DfChWifCXqC8LAkd2gj5RB4kfe6c27qAjHPDzy7dKhKLEBS"
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
