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
    "4anqC1Szsjak4SNjFfAufn2AyYkVE16UpHZJhqWtGXbSK1XNmCUhAc9GJG9QAwiBjdo9Uk8bcmM9xyjpLWhnDejj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pzA8eg6s1jyarbPAhziqaaCZHbfADFZPQ5pdEwBw4NvdKfnhNhFCnoGkSHWw1B3hfZBEDnQkQzduciD1xA3RS9Y",
  "key1": "4X7FLJvVWR9vchx5ipup3khkPf4ngcqezmsBGb7hokMyYii6C2PxxzKAr8A1fxMcuoW6iyHjyx57idVmQqJibrCw",
  "key2": "VmnaEikGPExxkvFRVx3Zhg8nFD3fKHvCuMpeua7GULsYVRUPTT4zfhxLRGBZYv2QibuHEJAXtzsN2qmrGzudrdS",
  "key3": "AEamG6mfYYfVY8ZnNR1Tkq1F8KWP7aGhZ9r8N1WkGJsuWfAnhr5VHenc7DG46B1gdKnn3UQawWtEekZzgUKAt6s",
  "key4": "jYbRRKtLjj24VCADdtNrDf9abWim5esre3LQ184i6X7x4JaZaM9N3S47GzkJZFUkQiExmTYjsdoiefywm35WvLY",
  "key5": "5VFDkuPF1C51UGE2EEtNxZAv5bYpPVw8JpbjAcHCsXkd14rr6NVtVDYPnAWeLTGiXKmSHeg63ZWkApByVsRcEVK4",
  "key6": "3k7fiw6djqdYQw5wmg85nnREYDRC4KXmQpVvstVKAuDuM4wJym3Ny3b895cjKCo6UV7rmZQo2MRzKYbRVn4eqoy8",
  "key7": "2mTQhP1wvdDGRKn1ueRUKXkzjwKCoHCTJhRShegoMT43Jidt8sb1AfMoacDSMVz4ZHPKUGuZPgPLKsbBWpYrzt7m",
  "key8": "5H37AvN1N86T9Sw4CYwdPFQmdoJYQHeCDs41DaCZCu1WVa5d5ercKg7pEbCgxuSu4HXNcepRUvtFwcFDLRNRL5KN",
  "key9": "4FJnG7PVzQx133kF1YGuAf3kbcRe1Bk7Kz1sYhQq2pa6naF4RzPuHdePb94HNC9QK7VkppbubrZPzeLbAt17rwAP",
  "key10": "5uoTbAge5U89CVA4sacratZsgN2CuB1MNAr83gHqoTNm8gCCD1uL1s6wYUs6ScN8om5vtDwvii2ho18buccEKAFj",
  "key11": "5knfb74R4AoUXWT7HwcxZuRFMzLmaLZL2uspu5RVmZVfwYFxxiCHrkT6XEr6eJnmB2pYgMQXHfvNaZRZh7XQPEV6",
  "key12": "uRoBMsWMdMkH94BHej6UvHuj3YUL9rTouZ78JVu9bKWN1rVaXK2BBpquGBzXf3BcDhucdE6DYfp4axLtyBbYmVX",
  "key13": "5WeLGyxF7DPFLcgPcXc7pzrQM6yZmnYPFJaEpNH1wzVEeR38ZE2o8xw86FJKort1dmk4DN79wGidmk5Ff11zfueL",
  "key14": "669MNYaL86ksDgWc6DY4fDDjR49jd1BTgdP8Hc8o6R7NRXiQDRLVP4oFjsdvyPQDxFKzp2WDtt7oV51rxhgifUqM",
  "key15": "4XgG88wMZmGFWk1tvvm4pNqu5wR5eP8kiDCyzUeJgiatb1q4FcqRHQymyVbGHR268gMDVGfDVwY2aThLNn2eToAD",
  "key16": "4CkRmiTYjEqhqXNLrDSSnth6RgChHzrwPgP258vCpHqqSfBPxVbzfHA1Ga52e7GSzuPBiDfcActB11SwhcQKDPzu",
  "key17": "2JcTqAP2L9scjwKSTzqb45xHExAoERjJQotLYmgpkFy4aFGGvfbBNtr8o99LCBJkvJ3BUZcJLcWAfhar8mLPA9L6",
  "key18": "2tNttYKwuPFBrwKG6RHXySrFgADXqGaR3fL2745JmWoAL61Mv5RiUaimiAEgcXsJ1xwt93g5A5P9r37EqLtSNyce",
  "key19": "YMA1Mne2j4DfXaxwqex4nfosZmFsBdnNMvWFMKCDjRD9U4PFZEsbqvu7hQdMDMdqze199ggRS9f8XJTvTv34jXc",
  "key20": "33q2gcB6CiczfveKEiHE22KFpb5713PezEjY95ptckLMHeUe7e8FFiNFyfnkqSe3cr19738BxJbbKdSgrG38nzyo",
  "key21": "56boy5bueZa8AN9CVPfbWSxa2Bj3Dykyx1yEqcqZrTpJ7RpqGTtqvbEzQzAis8WUHrgf9DFumiovWVPnoSatZ2Hz",
  "key22": "4eTPA8niTbssPB5gbeBchJZPdBPhVcEUQNFJDaCZUXtZoVXwmLyAeRQWWfnqTBPXtDo2yGKrPzz8uMz4FSqqDPQe",
  "key23": "4t5nv2akSQZxFLZs6j8aWBcNTxuxm2s1Td5w4vTUXEEmkyq2f5KrWUcER4AKEeHo4Yp3sWE6EWDKb6iwE2eq6Vox",
  "key24": "2588CW2nXg3SVLDD8Zf8qTEHBLT8MfYdZXnc6szKkSMk58rLXWNizkbqPhJTJS464QmJGKWCWgTo4fBHGrFw42ky",
  "key25": "21d16HyVthBVPsdBukYBWNcBm53LWkm8A2XhAwku85pLmtz2hbgdj3WiCc51ePChqKRyLngySmsXaUoW1ftYj9Mf",
  "key26": "4yVK8KGMT8it6nEofB5M2YM72Jq4GqkUMCK8KbCRVKYaE7MrvW38V7KVqWMw5k2DdxJsRuzNbFd3TzzKsEGyh5dH",
  "key27": "5m48RWCPYhoGmzuBxDnMWP8xmBkgTGfaZbrPmCWgtZAZH1ZLhK64t7UjehQ37bkc2ooFgh8A8PLTyfHhfPw3z6FP",
  "key28": "9DqjuVLgSZLAyvB568c5q6VcUW1RvjMMapvUQwVTtFkJfg81YtgTQRMuytxX98NAsNjVy8ucUYVRA6FRWNcxJoG",
  "key29": "BkF9WupR89Gvpck6bMC3E1YFxotA2wCRj71KtVDKh4tjbVUh64nbHKjzLRrhaBx2uFEUwYZba1Brn52783hunS4",
  "key30": "jJuEKXfZSLB3LJhqm3qm8p9zVGwkkaErGGxDyCCnHq7qLZLzXLyiYEvNKMo8gHcCyzEfX269uyoMvPX65152aJy",
  "key31": "5v2A2Fy2bFx2ABJ7prHGkB5ZjzTsyfGg97y3MjYS1ajdUDUEEcjG18cPd9PNTcTPpoaxzVk4cEQYWJesabTpWydu",
  "key32": "LFfQuZAeN5JgZwtmUjciSDjBFySwbvnjAh2arVV54DkvAA2QwKZyVo36ht2Z66oXBXmpXfiVtCF28MihQPdPKwf",
  "key33": "3RaRY1LawiEjkCRWojC32g6J4jpJ4YdryDN94kWxueu88odnTucLHYGKZDcvPSRz6odyGBqPrxgGd5y2TywYvCeC"
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
